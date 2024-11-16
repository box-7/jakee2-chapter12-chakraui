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
import { Badge, Stat as ChakraStat, FormatNumber, } from "@chakra-ui/react";
import { InfoTip } from "./toggle-tip";
import * as React from "react";
export var StatLabel = React.forwardRef(function StatLabel(props, ref) {
    var info = props.info, children = props.children, rest = __rest(props, ["info", "children"]);
    return (_jsxs(ChakraStat.Label, __assign({}, rest, { ref: ref, children: [children, info && _jsx(InfoTip, { children: info })] })));
});
export var StatValueText = React.forwardRef(function StatValueText(props, ref) {
    var value = props.value, formatOptions = props.formatOptions, children = props.children, rest = __rest(props, ["value", "formatOptions", "children"]);
    return (_jsx(ChakraStat.ValueText, __assign({}, rest, { ref: ref, children: children ||
            (value != null && _jsx(FormatNumber, __assign({ value: value }, formatOptions))) })));
});
export var StatUpTrend = React.forwardRef(function StatUpTrend(props, ref) {
    return (_jsxs(Badge, __assign({ colorPalette: "green", gap: "0" }, props, { ref: ref, children: [_jsx(ChakraStat.UpIndicator, {}), props.children] })));
});
export var StatDownTrend = React.forwardRef(function StatDownTrend(props, ref) {
    return (_jsxs(Badge, __assign({ colorPalette: "red", gap: "0" }, props, { ref: ref, children: [_jsx(ChakraStat.DownIndicator, {}), props.children] })));
});
export var StatRoot = ChakraStat.Root;
export var StatHelpText = ChakraStat.HelpText;
export var StatValueUnit = ChakraStat.ValueUnit;
