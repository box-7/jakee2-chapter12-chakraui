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
import { Slider as ChakraSlider, HStack } from "@chakra-ui/react";
import * as React from "react";
export var Slider = React.forwardRef(function Slider(props, ref) {
    var _a;
    var marksProp = props.marks, label = props.label, showValue = props.showValue, rest = __rest(props, ["marks", "label", "showValue"]);
    var value = (_a = props.defaultValue) !== null && _a !== void 0 ? _a : props.value;
    var marks = marksProp === null || marksProp === void 0 ? void 0 : marksProp.map(function (mark) {
        if (typeof mark === "number")
            return { value: mark, label: undefined };
        return mark;
    });
    var hasMarkLabel = !!(marks === null || marks === void 0 ? void 0 : marks.some(function (mark) { return mark.label; }));
    return (_jsxs(ChakraSlider.Root, __assign({ ref: ref, thumbAlignment: "center" }, rest, { children: [label && !showValue && (_jsx(ChakraSlider.Label, { fontWeight: "medium", children: label })), label && showValue && (_jsxs(HStack, { justify: "space-between", children: [_jsx(ChakraSlider.Label, { fontWeight: "medium", children: label }), _jsx(ChakraSlider.ValueText, {})] })), _jsxs(ChakraSlider.Control, { mb: hasMarkLabel ? "4" : undefined, children: [_jsx(ChakraSlider.Track, { children: _jsx(ChakraSlider.Range, {}) }), value === null || value === void 0 ? void 0 : value.map(function (_, index) { return (_jsx(ChakraSlider.Thumb, { index: index, children: _jsx(ChakraSlider.HiddenInput, {}) }, index)); })] }), (marks === null || marks === void 0 ? void 0 : marks.length) && (_jsx(ChakraSlider.MarkerGroup, { children: marks.map(function (mark, index) {
                    var value = typeof mark === "number" ? mark : mark.value;
                    var label = typeof mark === "number" ? undefined : mark.label;
                    return (_jsxs(ChakraSlider.Marker, { value: value, children: [_jsx(ChakraSlider.MarkerIndicator, {}), label] }, index));
                }) }))] })));
});
