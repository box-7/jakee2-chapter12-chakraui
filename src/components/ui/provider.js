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
import { jsx as _jsx } from "react/jsx-runtime";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, } from "./color-mode";
export function Provider(props) {
    return (_jsx(ChakraProvider, { value: defaultSystem, children: _jsx(ColorModeProvider, __assign({}, props)) }));
}
