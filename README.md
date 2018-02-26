![OVH component](https://user-images.githubusercontent.com/3379410/27423240-3f944bc4-5731-11e7-87bb-3ff603aff8a7.png)

[![NPM](https://nodei.co/npm/ovh-ui-angular.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/ovh-ui-angular/)

[![Maintenance](https://img.shields.io/maintenance/yes/2018.svg)]() [![Chat on gitter](https://img.shields.io/gitter/room/ovh/ux.svg)](https://gitter.im/ovh/ux) [![Build Status](https://travis-ci.org/ovh-ux/ovh-ui-angular.svg)](https://travis-ci.org/ovh-ux/ovh-ui-angular) [![Build Status](https://travis-ci.org/ovh/ovh-ui-angular.svg)](https://travis-ci.org/ovh-ux/ovh-ui-angular)

# OVH UI (Angular)

A set of maintainable components for the OVH ecosystem (Angular).

## Installation

### Prerequisites

This library has been tested with AngularJS 1.6.

You will also need these dependencies in your project:

- [angular-aria](https://www.npmjs.com/package/angular-aria)
- [angular-sanitize](https://www.npmjs.com/package/angular-sanitize)
- [ovh-ui-kit](https://github.com/ovh-ux/ovh-ui-kit)

Follow the [guide](https://github.com/ovh-ux/ovh-ui-kit) for _ovh-ui-kit_, because you need to integrate it by _yourself_.

### bower

```bash
bower install --save ovh-ui-angular
```

### npm

```bash
npm install --save ovh-ui-angular
```

## Usage

1. In your `index.html`, you need to load `oui-angular.js`:

```html
  ...
  <script src="ovh-ui-angular/packages/oui-angular/dist/oui-angular.js" type="text/javascript"></script>
  ...
```

2. You need to add `oui` in your angular module dependencies like that:

```javascript
angular.module("myAwesomeApp", [
    ...
    "oui"
    ...
]);
```

## Get the sources

```bash
    git clone https://github.com/ovh-ux/ovh-ui-angular.git
    cd ovh-ui-angular
    yarn install
    yarn link
    yarn bootstrap
    cd packages/ovh-ui-angular
    yarn build:watch
```
### NPM

For those using npm instead of yarn here is a list of equivalences: [https://yarnpkg.com/en/docs/migrating-from-npm](https://yarnpkg.com/en/docs/migrating-from-npm)


You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!

see [CONTRIBUTING](https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md)

# Related links

 * Contribute: [https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md](https://github.com/ovh-ux/ovh-ui-angular/blob/master/CONTRIBUTING.md)
 * Report bugs: [https://github.com/ovh-ux/ovh-ui-angular/issues](https://github.com/ovh-ux/ovh-ui-angular/issues)
 * Get latest version: [https://github.com/ovh-ux/ovh-ui-angular](https://github.com/ovh-ux/ovh-ui-angular)

# Documentation

Documentation is available from the `packages/` folder, every package is self-documented throught a `README.md` file. But you can also check bellow.

# License

See [https://github.com/ovh-ux/ovh-ui-angular/blob/master/LICENSE](https://github.com/ovh-ux/ovh-ui-angular/blob/master/LICENSE)
