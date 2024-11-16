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
import { AbsoluteCenter, Menu as ChakraMenu, Portal } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck, LuChevronRight } from "react-icons/lu";
export var MenuContent = React.forwardRef(function MenuContent(props, ref) {
    var _a = props.portalled, portalled = _a === void 0 ? true : _a, portalRef = props.portalRef, rest = __rest(props, ["portalled", "portalRef"]);
    return (_jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ChakraMenu.Positioner, { children: _jsx(ChakraMenu.Content, __assign({ ref: ref }, rest)) }) }));
});
export var MenuArrow = React.forwardRef(function MenuArrow(props, ref) {
    return (_jsx(ChakraMenu.Arrow, __assign({ ref: ref }, props, { children: _jsx(ChakraMenu.ArrowTip, {}) })));
});
export var MenuCheckboxItem = React.forwardRef(function MenuCheckboxItem(props, ref) {
    return (_jsxs(ChakraMenu.CheckboxItem, __assign({ ref: ref }, props, { children: [_jsx(ChakraMenu.ItemIndicator, { hidden: false, children: _jsx(LuCheck, {}) }), props.children] })));
});
export var MenuRadioItem = React.forwardRef(function MenuRadioItem(props, ref) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (_jsxs(ChakraMenu.RadioItem, __assign({ ps: "8", ref: ref }, rest, { children: [_jsx(AbsoluteCenter, { axis: "horizontal", left: "4", asChild: true, children: _jsx(ChakraMenu.ItemIndicator, { children: _jsx(LuCheck, {}) }) }), _jsx(ChakraMenu.ItemText, { children: children })] })));
});
export var MenuItemGroup = React.forwardRef(function MenuItemGroup(props, ref) {
    var title = props.title, children = props.children, rest = __rest(props, ["title", "children"]);
    return (_jsxs(ChakraMenu.ItemGroup, __assign({ ref: ref }, rest, { children: [title && (_jsx(ChakraMenu.ItemGroupLabel, { userSelect: "none", children: title })), children] })));
});
export var MenuTriggerItem = React.forwardRef(function MenuTriggerItem(props, ref) {
    var startIcon = props.startIcon, children = props.children, rest = __rest(props, ["startIcon", "children"]);
    return (_jsxs(ChakraMenu.TriggerItem, __assign({ ref: ref }, rest, { children: [startIcon, children, _jsx(LuChevronRight, {})] })));
});
export var MenuRadioItemGroup = ChakraMenu.RadioItemGroup;
export var MenuContextTrigger = ChakraMenu.ContextTrigger;
export var MenuRoot = ChakraMenu.Root;
export var MenuSeparator = ChakraMenu.Separator;
export var MenuItem = ChakraMenu.Item;
export var MenuItemText = ChakraMenu.ItemText;
export var MenuItemCommand = ChakraMenu.ItemCommand;
export var MenuTrigger = ChakraMenu.Trigger;
