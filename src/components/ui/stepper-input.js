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
import { HStack, IconButton, NumberInput } from "@chakra-ui/react";
import * as React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
export var StepperInput = React.forwardRef(function StepperInput(props, ref) {
    var label = props.label, rest = __rest(props, ["label"]);
    return (_jsxs(NumberInput.Root, __assign({}, rest, { unstyled: true, ref: ref, children: [label && _jsx(NumberInput.Label, { children: label }), _jsxs(HStack, { gap: "2", children: [_jsx(DecrementTrigger, {}), _jsx(NumberInput.ValueText, { textAlign: "center", fontSize: "lg", minW: "3ch" }), _jsx(IncrementTrigger, {})] })] })));
});
var DecrementTrigger = React.forwardRef(function DecrementTrigger(props, ref) {
    return (_jsx(NumberInput.DecrementTrigger, __assign({}, props, { asChild: true, ref: ref, children: _jsx(IconButton, { variant: "outline", size: "sm", children: _jsx(LuMinus, {}) }) })));
});
var IncrementTrigger = React.forwardRef(function IncrementTrigger(props, ref) {
    return (_jsx(NumberInput.IncrementTrigger, __assign({}, props, { asChild: true, ref: ref, children: _jsx(IconButton, { variant: "outline", size: "sm", children: _jsx(LuPlus, {}) }) })));
});
