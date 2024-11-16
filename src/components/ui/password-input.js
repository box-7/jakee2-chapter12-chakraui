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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, HStack, IconButton, Input, Stack, mergeRefs, useControllableState, } from "@chakra-ui/react";
import * as React from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { InputGroup } from "./input-group";
export var PasswordInput = React.forwardRef(function PasswordInput(props, ref) {
    var rootProps = props.rootProps, defaultVisible = props.defaultVisible, visibleProp = props.visible, onVisibleChange = props.onVisibleChange, _a = props.visibilityIcon, visibilityIcon = _a === void 0 ? { on: _jsx(LuEye, {}), off: _jsx(LuEyeOff, {}) } : _a, rest = __rest(props, ["rootProps", "defaultVisible", "visible", "onVisibleChange", "visibilityIcon"]);
    var _b = useControllableState({
        value: visibleProp,
        defaultValue: defaultVisible || false,
        onChange: onVisibleChange,
    }), visible = _b[0], setVisible = _b[1];
    var inputRef = React.useRef(null);
    return (_jsx(InputGroup, __assign({ width: "full", endElement: _jsx(VisibilityTrigger, { disabled: rest.disabled, onPointerDown: function (e) {
                if (rest.disabled)
                    return;
                if (e.button !== 0)
                    return;
                e.preventDefault();
                setVisible(!visible);
            }, children: visible ? visibilityIcon.off : visibilityIcon.on }) }, rootProps, { children: _jsx(Input, __assign({}, rest, { ref: mergeRefs(ref, inputRef), type: visible ? "text" : "password" })) })));
});
var VisibilityTrigger = React.forwardRef(function VisibilityTrigger(props, ref) {
    return (_jsx(IconButton, __assign({ tabIndex: -1, ref: ref, me: "-2", aspectRatio: "square", size: "sm", variant: "ghost", height: "calc(100% - {spacing.2})", "aria-label": "Toggle password visibility" }, props)));
});
export var PasswordStrengthMeter = React.forwardRef(function PasswordStrengthMeter(props, ref) {
    var _a = props.max, max = _a === void 0 ? 4 : _a, value = props.value, rest = __rest(props, ["max", "value"]);
    var percent = (value / max) * 100;
    var _b = getColorPalette(percent), label = _b.label, colorPalette = _b.colorPalette;
    return (_jsxs(Stack, __assign({ align: "flex-end", gap: "1", ref: ref }, rest, { children: [_jsx(HStack, __assign({ width: "full", ref: ref }, rest, { children: Array.from({ length: max }).map(function (_, index) { return (_jsx(Box, { height: "1", flex: "1", rounded: "sm", "data-selected": index < value ? "" : undefined, layerStyle: "fill.subtle", colorPalette: "gray", _selected: {
                        colorPalette: colorPalette,
                        layerStyle: "fill.solid",
                    } }, index)); }) })), label && _jsx(HStack, { textStyle: "xs", children: label })] })));
});
function getColorPalette(percent) {
    switch (true) {
        case percent < 33:
            return { label: "Low", colorPalette: "red" };
        case percent < 66:
            return { label: "Medium", colorPalette: "orange" };
        default:
            return { label: "High", colorPalette: "green" };
    }
}
