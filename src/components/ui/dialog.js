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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";
export var DialogContent = React.forwardRef(function DialogContent(props, ref) {
    var children = props.children, _a = props.portalled, portalled = _a === void 0 ? true : _a, portalRef = props.portalRef, _b = props.backdrop, backdrop = _b === void 0 ? true : _b, rest = __rest(props, ["children", "portalled", "portalRef", "backdrop"]);
    return (_jsxs(Portal, { disabled: !portalled, container: portalRef, children: [backdrop && _jsx(ChakraDialog.Backdrop, {}), _jsx(ChakraDialog.Positioner, { children: _jsx(ChakraDialog.Content, __assign({ ref: ref }, rest, { asChild: false, children: children })) })] }));
});
export var DialogCloseTrigger = React.forwardRef(function DialogCloseTrigger(props, ref) {
    return (_jsx(ChakraDialog.CloseTrigger, __assign({ position: "absolute", top: "2", insetEnd: "2" }, props, { asChild: true, children: _jsx(CloseButton, { size: "sm", ref: ref, children: props.children }) })));
});
export var DialogRoot = ChakraDialog.Root;
export var DialogFooter = ChakraDialog.Footer;
export var DialogHeader = ChakraDialog.Header;
export var DialogBody = ChakraDialog.Body;
export var DialogBackdrop = ChakraDialog.Backdrop;
export var DialogTitle = ChakraDialog.Title;
export var DialogDescription = ChakraDialog.Description;
export var DialogTrigger = ChakraDialog.Trigger;
export var DialogActionTrigger = ChakraDialog.ActionTrigger;
