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
import { Alert as ChakraAlert } from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";
export var Alert = React.forwardRef(function Alert(props, ref) {
    var title = props.title, children = props.children, icon = props.icon, closable = props.closable, onClose = props.onClose, startElement = props.startElement, endElement = props.endElement, rest = __rest(props, ["title", "children", "icon", "closable", "onClose", "startElement", "endElement"]);
    return (_jsxs(ChakraAlert.Root, __assign({ ref: ref }, rest, { children: [startElement || _jsx(ChakraAlert.Indicator, { children: icon }), children ? (_jsxs(ChakraAlert.Content, { children: [_jsx(ChakraAlert.Title, { children: title }), _jsx(ChakraAlert.Description, { children: children })] })) : (_jsx(ChakraAlert.Title, { flex: "1", children: title })), endElement, closable && (_jsx(CloseButton, { size: "sm", pos: "relative", top: "-2", insetEnd: "-2", alignSelf: "flex-start", onClick: onClose }))] })));
});
