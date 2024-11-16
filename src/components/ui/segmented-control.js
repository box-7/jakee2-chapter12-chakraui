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
import { For, SegmentGroup } from "@chakra-ui/react";
import * as React from "react";
function normalize(items) {
    return items.map(function (item) {
        if (typeof item === "string")
            return { value: item, label: item };
        return item;
    });
}
export var SegmentedControl = React.forwardRef(function SegmentedControl(props, ref) {
    var items = props.items, rest = __rest(props, ["items"]);
    var data = React.useMemo(function () { return normalize(items); }, [items]);
    return (_jsxs(SegmentGroup.Root, __assign({ ref: ref }, rest, { children: [_jsx(SegmentGroup.Indicator, {}), _jsx(For, { each: data, children: function (item) { return (_jsxs(SegmentGroup.Item, { value: item.value, disabled: item.disabled, children: [_jsx(SegmentGroup.ItemText, { children: item.label }), _jsx(SegmentGroup.ItemHiddenInput, {})] }, item.value)); } })] })));
});
