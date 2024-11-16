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
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import * as React from "react";
import { LuMoon, LuSun } from "react-icons/lu";
export function ColorModeProvider(props) {
    return (_jsx(ThemeProvider, __assign({ attribute: "class", disableTransitionOnChange: true }, props)));
}
export function useColorMode() {
    var _a = useTheme(), resolvedTheme = _a.resolvedTheme, setTheme = _a.setTheme;
    var toggleColorMode = function () {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };
    return {
        colorMode: resolvedTheme,
        setColorMode: setTheme,
        toggleColorMode: toggleColorMode,
    };
}
export function useColorModeValue(light, dark) {
    var colorMode = useColorMode().colorMode;
    return colorMode === "light" ? light : dark;
}
export function ColorModeIcon() {
    var colorMode = useColorMode().colorMode;
    return colorMode === "light" ? _jsx(LuSun, {}) : _jsx(LuMoon, {});
}
export var ColorModeButton = React.forwardRef(function ColorModeButton(props, ref) {
    var toggleColorMode = useColorMode().toggleColorMode;
    return (_jsx(ClientOnly, { fallback: _jsx(Skeleton, { boxSize: "8" }), children: _jsx(IconButton, __assign({ onClick: toggleColorMode, variant: "ghost", "aria-label": "Toggle color mode", size: "sm", ref: ref }, props, { css: {
                _icon: {
                    width: "5",
                    height: "5",
                },
            }, children: _jsx(ColorModeIcon, {}) })) }));
});
