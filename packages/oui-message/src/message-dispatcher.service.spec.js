describe("OuiMessageDispatcher: ", () => {
    beforeEach(angular.mock.module("oui.message"));

    describe("on initialization", () => {
        it("creates an empty array in _listeners", inject((OuiMessageDispatcher) => {
            expect(OuiMessageDispatcher._listeners).toEqual([]);
        }));
    });

    describe("register method", () => {
        it("registers the passed listener corresponding to the expected interface", inject((OuiMessageDispatcher) => {
            const listener = {
                onMessage: () => {}
            };

            OuiMessageDispatcher.register(listener);

            expect(OuiMessageDispatcher._listeners).toEqual([listener]);
        }));

        it("throws an error if the onMessage method is missing", inject((OuiMessageDispatcher) => {
            const listener = {
                onMessage2: () => {}
            };

            expect(() => OuiMessageDispatcher.register(listener))
                .toThrow(new Error("The registered object does not follow the expected interface."));
        }));
    });

    describe("unregister method", () => {
        it("unregisters the passed listener", inject((OuiMessageDispatcher) => {
            const listener1 = {
                onMessage: () => {}
            };

            const listener2 = {
                onMessage: () => {}
            };

            OuiMessageDispatcher.register(listener1);
            OuiMessageDispatcher.register(listener2);
            OuiMessageDispatcher.unregister(listener1);

            expect(OuiMessageDispatcher._listeners).toEqual([listener2]);
        }));
    });

    describe("dispatch method", () => {
        it("does nothing if no listeners", inject((OuiMessageDispatcher) => {
            OuiMessageDispatcher.dispatch("test");
        }));

        it("passes message to listeners", inject((OuiMessageDispatcher) => {
            const listener = {
                onMessage: jasmine.createSpy("listener1")
            };

            OuiMessageDispatcher.register(listener);

            OuiMessageDispatcher.dispatch("test");

            expect(listener.onMessage).toHaveBeenCalledWith("test");
        }));

        it("calls all listeners when no namespace is asked", inject((OuiMessageDispatcher) => {
            const listener1 = {
                namespace: "namespace1",
                onMessage: jasmine.createSpy("listener1")
            };

            const listener2 = {
                onMessage: jasmine.createSpy("listener2")
            };

            OuiMessageDispatcher.register(listener1);
            OuiMessageDispatcher.register(listener2);

            OuiMessageDispatcher.dispatch("test");

            expect(listener1.onMessage).toHaveBeenCalled();
            expect(listener2.onMessage).toHaveBeenCalled();
        }));

        it("calls all listeners when undefined namespace is asked", inject((OuiMessageDispatcher) => {
            const listener1 = {
                namespace: "namespace1",
                onMessage: jasmine.createSpy("listener1")
            };

            const listener2 = {
                onMessage: jasmine.createSpy("listener2")
            };

            OuiMessageDispatcher.register(listener1);
            OuiMessageDispatcher.register(listener2);

            OuiMessageDispatcher.dispatch(undefined, "test");

            expect(listener1.onMessage).toHaveBeenCalled();
            expect(listener2.onMessage).toHaveBeenCalled();
        }));

        it("calls all listeners when null namespace is asked", inject((OuiMessageDispatcher) => {
            const listener1 = {
                namespace: "namespace1",
                onMessage: jasmine.createSpy("listener1")
            };

            const listener2 = {
                onMessage: jasmine.createSpy("listener2")
            };

            OuiMessageDispatcher.register(listener1);
            OuiMessageDispatcher.register(listener2);

            OuiMessageDispatcher.dispatch(null, "test");

            expect(listener1.onMessage).toHaveBeenCalled();
            expect(listener2.onMessage).toHaveBeenCalled();
        }));

        it("calls all listeners when empty namespace is asked", inject((OuiMessageDispatcher) => {
            const listener1 = {
                namespace: "namespace1",
                onMessage: jasmine.createSpy("listener1")
            };

            const listener2 = {
                onMessage: jasmine.createSpy("listener2")
            };

            OuiMessageDispatcher.register(listener1);
            OuiMessageDispatcher.register(listener2);

            OuiMessageDispatcher.dispatch("", "test");

            expect(listener1.onMessage).toHaveBeenCalled();
            expect(listener2.onMessage).toHaveBeenCalled();
        }));

        it("calls only listeners with the asked namespace and without namespace", inject((OuiMessageDispatcher) => {
            const listener1 = {
                namespace: "namespace1",
                onMessage: jasmine.createSpy("listener1")
            };

            const listener2 = {
                namespace: "namespace2",
                onMessage: jasmine.createSpy("listener2")
            };

            const listener3 = {
                onMessage: jasmine.createSpy("listener3")
            };

            const listener4 = {
                namespace: null,
                onMessage: jasmine.createSpy("listener3")
            };

            const listener5 = {
                namespace: "",
                onMessage: jasmine.createSpy("listener3")
            };

            OuiMessageDispatcher.register(listener1);
            OuiMessageDispatcher.register(listener2);
            OuiMessageDispatcher.register(listener3);
            OuiMessageDispatcher.register(listener4);
            OuiMessageDispatcher.register(listener5);

            OuiMessageDispatcher.dispatch("namespace1", "test");

            expect(listener1.onMessage).toHaveBeenCalled();
            expect(listener2.onMessage).not.toHaveBeenCalled();
            expect(listener3.onMessage).toHaveBeenCalled();
            expect(listener4.onMessage).toHaveBeenCalled();
            expect(listener5.onMessage).toHaveBeenCalled();
        }));
    });
});
