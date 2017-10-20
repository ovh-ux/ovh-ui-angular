import Popper from 'popper.js'
import { addBooleanParameter } from '@oui-angular/common/component-utils'

const KEY_ESCAPE = 27

export default class {
  constructor ($attrs, $document, $element, $scope) {
    'ngInject'

    this.$attrs = $attrs
    this.$document = $document
    this.$element = $element
    this.$scope = $scope
  }

  $onInit () {
    this.isDropdownOpen = false
    this.hasFocus = false
    this.currentFocusedElement = null
    addBooleanParameter(this, 'arrow')
    addBooleanParameter(this, 'start')
    addBooleanParameter(this, 'end')

    if (this.start && this.end) {
      console.error('A dropdown cannot be positionned at the start and at the end at the same time.')
    }

    this.documentClickHandler = evt => {
      if (evt &&
        evt.type === 'click' &&
        this.referenceElement.contains(evt.target)) {
        return
      }

      this.referenceElement.focus()
      this.$scope.$apply(() => this.closeDropdown())
    }

    // Handle espace key press
    this.triggerKeyHandler = evt => {
      if (evt &&
        evt.type === 'keydown' &&
        evt.which === KEY_ESCAPE) {
        this.onTriggerClick()
      }
    }

    this.triggerBlurHandler = evt => {
      if (!this.$element[0].contains(evt.relatedTarget)) {
        this.$scope.$apply(() => this.closeDropdown())
      }

      // else blur is listen on another contained element
      if (this.currentFocusedElement) {
        angular.element(this.currentFocusedElement).off('blur', this.triggerBlurHandler)
      }
      angular.element(evt.relatedTarget).on('blur', this.triggerBlurHandler)
      this.currentFocusedElement = evt.relatedTarget
    }
  }

  isOpen () {
    return this.isDropdownOpen
  }

  // Handle click, space key press and enter key press
  onTriggerClick () {
    this.$scope.$apply(() => {
      this.toggle()
    })
  }

  toggle () {
    this.isDropdownOpen = !this.isDropdownOpen
    this.isDropdownOpen ? this.openDropdown() : this.closeDropdown()
  }

  openDropdown () {
    this.updatePopper()

    this.$document.on('click', this.documentClickHandler)
  }

  closeDropdown () {
    this.isDropdownOpen = false
    this.destroyPopper()

    this.$document.off('click', this.documentClickHandler)
  }

  createPopper () {
    this.placement = this.placement ? this.placement : 'bottom'

    if (this.start) {
      this.placement += '-start'
    } else if (this.end) {
      this.placement += '-end'
    }

    // Let Popper.js manage the arrow position when it's centered (default).
    if (this.arrowElement && ['top', 'bottom'].indexOf(this.placement) > -1) {
      this.arrowElement.setAttribute('x-arrow', '')
    }
    this.popper = new Popper(this.referenceElement, this.popperElement, {
      placement: this.placement
    })
  }

  updatePopper () {
    this.popper ? this.popper.scheduleUpdate() : this.createPopper()
  }

  destroyPopper () {
    if (!this.popper) {
      return
    }

    this.popper.destroy()
    this.popper = null
  }
}
