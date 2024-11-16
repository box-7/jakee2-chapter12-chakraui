var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Drawer as ChakraDrawer, Portal } from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";
export var DrawerContent = React.forwardRef(function DrawerContent(props, ref) {
    var children = props.children, _a = props.portalled, portalled = _a === void 0 ? true : _a, portalRef = props.portalRef, offset = props.offset, rest = __rest(props, ["children", "portalled", "portalRef", "offset"]);
    return (_jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraDrawer.Positioner, { padding: offset, children: _jsx(ChakraDrawer.Content, __assign({ ref: ref }, rest, { asChild: false, children: children })) }) }));
});
export var DrawerCloseTrigger = React.forwardRef(function DrawerCloseTrigger(props, ref) {
    return (_jsx(ChakraDrawer.CloseTrigger, __assign({ position: "absolute", top: "2", insetEnd: "2" }, props, { asChild: true, children: _jsx(CloseButton, { size: "sm", ref: ref }) })));
});
export var DrawerTrigger = ChakraDrawer.Trigger;
export var DrawerRoot = ChakraDrawer.Root;
export var DrawerFooter = ChakraDrawer.Footer;
export var DrawerHeader = ChakraDrawer.Header;
export var DrawerBody = ChakraDrawer.Body;
export var DrawerBackdrop = ChakraDrawer.Backdrop;
export var DrawerDescription = ChakraDrawer.Description;
export var DrawerTitle = ChakraDrawer.Title;
export var DrawerActionTrigger = ChakraDrawer.ActionTrigger;
