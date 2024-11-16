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
import { Popover as ChakraPopover, Portal } from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";
export var PopoverContent = React.forwardRef(function PopoverContent(props, ref) {
    var _a = props.portalled, portalled = _a === void 0 ? true : _a, portalRef = props.portalRef, rest = __rest(props, ["portalled", "portalRef"]);
    return (_jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraPopover.Positioner, { children: _jsx(ChakraPopover.Content, __assign({ ref: ref }, rest)) }) }));
});
export var PopoverArrow = React.forwardRef(function PopoverArrow(props, ref) {
    return (_jsx(ChakraPopover.Arrow, __assign({}, props, { ref: ref, children: _jsx(ChakraPopover.ArrowTip, {}) })));
});
export var PopoverCloseTrigger = React.forwardRef(function PopoverCloseTrigger(props, ref) {
    return (_jsx(ChakraPopover.CloseTrigger, __assign({ position: "absolute", top: "1", insetEnd: "1" }, props, { asChild: true, ref: ref, children: _jsx(CloseButton, { size: "sm" }) })));
});
export var PopoverTitle = ChakraPopover.Title;
export var PopoverDescription = ChakraPopover.Description;
export var PopoverFooter = ChakraPopover.Footer;
export var PopoverHeader = ChakraPopover.Header;
export var PopoverRoot = ChakraPopover.Root;
export var PopoverBody = ChakraPopover.Body;
export var PopoverTrigger = ChakraPopover.Trigger;
