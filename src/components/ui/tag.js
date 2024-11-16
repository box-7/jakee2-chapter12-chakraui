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
import { Tag as ChakraTag } from "@chakra-ui/react";
import * as React from "react";
export var Tag = React.forwardRef(function Tag(props, ref) {
    var startElement = props.startElement, endElement = props.endElement, onClose = props.onClose, _a = props.closable, closable = _a === void 0 ? !!onClose : _a, children = props.children, rest = __rest(props, ["startElement", "endElement", "onClose", "closable", "children"]);
    return (_jsxs(ChakraTag.Root, __assign({ ref: ref }, rest, { children: [startElement && (_jsx(ChakraTag.StartElement, { children: startElement })), _jsx(ChakraTag.Label, { children: children }), endElement && (_jsx(ChakraTag.EndElement, { children: endElement })), closable && (_jsx(ChakraTag.EndElement, { children: _jsx(ChakraTag.CloseTrigger, { onClick: onClose }) }))] })));
});
