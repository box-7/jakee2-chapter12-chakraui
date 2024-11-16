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
import { AbsoluteCenter, ProgressCircle as ChakraProgressCircle, } from "@chakra-ui/react";
import * as React from "react";
export var ProgressCircleRing = React.forwardRef(function ProgressCircleRing(props, ref) {
    var trackColor = props.trackColor, cap = props.cap, color = props.color, rest = __rest(props, ["trackColor", "cap", "color"]);
    return (_jsxs(ChakraProgressCircle.Circle, __assign({}, rest, { ref: ref, children: [_jsx(ChakraProgressCircle.Track, { stroke: trackColor }), _jsx(ChakraProgressCircle.Range, { stroke: color, strokeLinecap: cap })] })));
});
export var ProgressCircleValueText = React.forwardRef(function ProgressCircleValueText(props, ref) {
    return (_jsx(AbsoluteCenter, { children: _jsx(ChakraProgressCircle.ValueText, __assign({}, props, { ref: ref })) }));
});
export var ProgressCircleRoot = ChakraProgressCircle.Root;
