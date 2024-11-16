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
import { Popover as ChakraPopover, IconButton, Portal } from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
export var ToggleTip = React.forwardRef(function ToggleTip(props, ref) {
    var showArrow = props.showArrow, children = props.children, _a = props.portalled, portalled = _a === void 0 ? true : _a, content = props.content, portalRef = props.portalRef, rest = __rest(props, ["showArrow", "children", "portalled", "content", "portalRef"]);
    return (_jsxs(ChakraPopover.Root, __assign({}, rest, { positioning: __assign(__assign({}, rest.positioning), { gutter: 4 }), children: [_jsx(ChakraPopover.Trigger, { asChild: true, children: children }), _jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraPopover.Positioner, { children: _jsxs(ChakraPopover.Content, { width: "auto", px: "2", py: "1", textStyle: "xs", rounded: "sm", ref: ref, children: [showArrow && (_jsx(ChakraPopover.Arrow, { children: _jsx(ChakraPopover.ArrowTip, {}) })), content] }) }) })] })));
});
export var InfoTip = React.forwardRef(function InfoTip(props, ref) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (_jsx(ToggleTip, __assign({ content: children }, rest, { ref: ref, children: _jsx(IconButton, { variant: "ghost", "aria-label": "info", size: "2xs", colorPalette: "gray", children: _jsx(HiOutlineInformationCircle, {}) }) })));
});
