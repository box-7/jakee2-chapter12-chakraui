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
import { EmptyState as ChakraEmptyState, VStack } from "@chakra-ui/react";
import * as React from "react";
export var EmptyState = React.forwardRef(function EmptyState(props, ref) {
    var title = props.title, description = props.description, icon = props.icon, children = props.children, rest = __rest(props, ["title", "description", "icon", "children"]);
    return (_jsx(ChakraEmptyState.Root, __assign({ ref: ref }, rest, { children: _jsxs(ChakraEmptyState.Content, { children: [icon && (_jsx(ChakraEmptyState.Indicator, { children: icon })), description ? (_jsxs(VStack, { textAlign: "center", children: [_jsx(ChakraEmptyState.Title, { children: title }), _jsx(ChakraEmptyState.Description, { children: description })] })) : (_jsx(ChakraEmptyState.Title, { children: title })), children] }) })));
});
