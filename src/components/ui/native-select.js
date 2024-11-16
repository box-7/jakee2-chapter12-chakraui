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
import { NativeSelect as Select } from "@chakra-ui/react";
import * as React from "react";
export var NativeSelectRoot = React.forwardRef(function NativeSelect(props, ref) {
    var icon = props.icon, children = props.children, rest = __rest(props, ["icon", "children"]);
    return (_jsxs(Select.Root, __assign({ ref: ref }, rest, { children: [children, _jsx(Select.Indicator, { children: icon })] })));
});
export var NativeSelectField = React.forwardRef(function NativeSelectField(props, ref) {
    var itemsProp = props.items, children = props.children, rest = __rest(props, ["items", "children"]);
    var items = React.useMemo(function () {
        return itemsProp === null || itemsProp === void 0 ? void 0 : itemsProp.map(function (item) {
            return typeof item === "string" ? { label: item, value: item } : item;
        });
    }, [itemsProp]);
    return (_jsxs(Select.Field, __assign({ ref: ref }, rest, { children: [children, items === null || items === void 0 ? void 0 : items.map(function (item) { return (_jsx("option", { value: item.value, disabled: item.disabled, children: item.label }, item.value)); })] })));
});
