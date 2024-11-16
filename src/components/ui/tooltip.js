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
import { Tooltip as ChakraTooltip, Portal } from "@chakra-ui/react";
import * as React from "react";
export var Tooltip = React.forwardRef(function Tooltip(props, ref) {
    var showArrow = props.showArrow, children = props.children, disabled = props.disabled, portalled = props.portalled, content = props.content, contentProps = props.contentProps, portalRef = props.portalRef, rest = __rest(props, ["showArrow", "children", "disabled", "portalled", "content", "contentProps", "portalRef"]);
    if (disabled)
        return children;
    return (_jsxs(ChakraTooltip.Root, __assign({}, rest, { children: [_jsx(ChakraTooltip.Trigger, { asChild: true, children: children }), _jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraTooltip.Positioner, { children: _jsxs(ChakraTooltip.Content, __assign({ ref: ref }, contentProps, { children: [showArrow && (_jsx(ChakraTooltip.Arrow, { children: _jsx(ChakraTooltip.ArrowTip, {}) })), content] })) }) })] })));
});
