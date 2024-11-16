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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Select as ChakraSelect, Portal } from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";
export var SelectTrigger = React.forwardRef(function SelectTrigger(props, ref) {
    var children = props.children, clearable = props.clearable, rest = __rest(props, ["children", "clearable"]);
    return (_jsxs(ChakraSelect.Control, __assign({}, rest, { children: [_jsx(ChakraSelect.Trigger, { ref: ref, children: children }), _jsxs(ChakraSelect.IndicatorGroup, { children: [clearable && _jsx(SelectClearTrigger, {}), _jsx(ChakraSelect.Indicator, {})] })] })));
});
var SelectClearTrigger = React.forwardRef(function SelectClearTrigger(props, ref) {
    return (_jsx(ChakraSelect.ClearTrigger, __assign({ asChild: true }, props, { ref: ref, children: _jsx(CloseButton, { size: "xs", variant: "plain", focusVisibleRing: "inside", focusRingWidth: "2px", pointerEvents: "auto" }) })));
});
export var SelectContent = React.forwardRef(function SelectContent(props, ref) {
    var _a = props.portalled, portalled = _a === void 0 ? true : _a, portalRef = props.portalRef, rest = __rest(props, ["portalled", "portalRef"]);
    return (_jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraSelect.Positioner, { children: _jsx(ChakraSelect.Content, __assign({}, rest, { ref: ref })) }) }));
});
export var SelectItem = React.forwardRef(function SelectItem(props, ref) {
    var item = props.item, children = props.children, rest = __rest(props, ["item", "children"]);
    return (_jsxs(ChakraSelect.Item, __assign({ item: item }, rest, { ref: ref, children: [children, _jsx(ChakraSelect.ItemIndicator, {})] }), item.value));
});
export var SelectValueText = React.forwardRef(function SelectValueText(props, ref) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (_jsx(ChakraSelect.ValueText, __assign({}, rest, { ref: ref, children: _jsx(ChakraSelect.Context, { children: function (select) {
                var items = select.selectedItems;
                if (items.length === 0)
                    return props.placeholder;
                if (children)
                    return children(items);
                if (items.length === 1)
                    return select.collection.stringifyItem(items[0]);
                return "".concat(items.length, " selected");
            } }) })));
});
export var SelectRoot = React.forwardRef(function SelectRoot(props, ref) {
    return (_jsx(ChakraSelect.Root, __assign({}, props, { ref: ref, positioning: __assign({ sameWidth: true }, props.positioning), children: props.asChild ? (props.children) : (_jsxs(_Fragment, { children: [_jsx(ChakraSelect.HiddenSelect, {}), props.children] })) })));
});
export var SelectItemGroup = React.forwardRef(function SelectItemGroup(props, ref) {
    var children = props.children, label = props.label, rest = __rest(props, ["children", "label"]);
    return (_jsxs(ChakraSelect.ItemGroup, __assign({}, rest, { ref: ref, children: [_jsx(ChakraSelect.ItemGroupLabel, { children: label }), children] })));
});
export var SelectLabel = ChakraSelect.Label;
export var SelectItemText = ChakraSelect.ItemText;
