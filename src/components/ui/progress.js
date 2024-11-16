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
import { Progress as ChakraProgress } from "@chakra-ui/react";
import { InfoTip } from "./toggle-tip";
import * as React from "react";
export var ProgressBar = React.forwardRef(function ProgressBar(props, ref) {
    return (_jsx(ChakraProgress.Track, __assign({}, props, { ref: ref, children: _jsx(ChakraProgress.Range, {}) })));
});
export var ProgressLabel = React.forwardRef(function ProgressLabel(props, ref) {
    var children = props.children, info = props.info, rest = __rest(props, ["children", "info"]);
    return (_jsxs(ChakraProgress.Label, __assign({}, rest, { ref: ref, children: [children, info && _jsx(InfoTip, { children: info })] })));
});
export var ProgressRoot = ChakraProgress.Root;
export var ProgressValueText = ChakraProgress.ValueText;
