"use client";
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
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Toggle as ChakraToggle, useToggleContext, } from "@chakra-ui/react";
import * as React from "react";
var variantMap = {
    solid: { on: "solid", off: "outline" },
    surface: { on: "surface", off: "outline" },
    subtle: { on: "subtle", off: "ghost" },
    ghost: { on: "subtle", off: "ghost" },
};
export var Toggle = React.forwardRef(function Toggle(props, ref) {
    var _a = props.variant, variant = _a === void 0 ? "subtle" : _a, size = props.size, children = props.children, rest = __rest(props, ["variant", "size", "children"]);
    var variantConfig = variantMap[variant];
    return (_jsx(ChakraToggle.Root, __assign({ asChild: true }, rest, { children: _jsx(ToggleBaseButton, { size: size, variant: variantConfig, ref: ref, children: children }) })));
});
var ToggleBaseButton = React.forwardRef(function ToggleBaseButton(props, ref) {
    var toggle = useToggleContext();
    var variant = props.variant, rest = __rest(props, ["variant"]);
    return (_jsx(Button, __assign({ variant: toggle.pressed ? variant.on : variant.off, ref: ref }, rest)));
});
export var ToggleIndicator = ChakraToggle.Indicator;
