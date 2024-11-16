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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AbsoluteCenter, Button as ChakraButton, Span, Spinner, } from "@chakra-ui/react";
import * as React from "react";
export var Button = React.forwardRef(function Button(props, ref) {
    var loading = props.loading, disabled = props.disabled, loadingText = props.loadingText, children = props.children, rest = __rest(props, ["loading", "disabled", "loadingText", "children"]);
    return (_jsx(ChakraButton, __assign({ disabled: loading || disabled, ref: ref }, rest, { children: loading && !loadingText ? (_jsxs(_Fragment, { children: [_jsx(AbsoluteCenter, { display: "inline-flex", children: _jsx(Spinner, { size: "inherit", color: "inherit" }) }), _jsx(Span, { opacity: 0, children: children })] })) : loading && loadingText ? (_jsxs(_Fragment, { children: [_jsx(Spinner, { size: "inherit", color: "inherit" }), loadingText] })) : (children) })));
});
