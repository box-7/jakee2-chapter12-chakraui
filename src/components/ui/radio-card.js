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
import { RadioCard } from "@chakra-ui/react";
import * as React from "react";
export var RadioCardItem = React.forwardRef(function RadioCardItem(props, ref) {
    var inputProps = props.inputProps, label = props.label, description = props.description, addon = props.addon, icon = props.icon, _a = props.indicator, indicator = _a === void 0 ? _jsx(RadioCard.ItemIndicator, {}) : _a, _b = props.indicatorPlacement, indicatorPlacement = _b === void 0 ? "end" : _b, rest = __rest(props, ["inputProps", "label", "description", "addon", "icon", "indicator", "indicatorPlacement"]);
    var hasContent = label || description || icon;
    var ContentWrapper = indicator ? RadioCard.ItemContent : React.Fragment;
    return (_jsxs(RadioCard.Item, __assign({}, rest, { children: [_jsx(RadioCard.ItemHiddenInput, __assign({ ref: ref }, inputProps)), _jsxs(RadioCard.ItemControl, { children: [indicatorPlacement === "start" && indicator, hasContent && (_jsxs(ContentWrapper, { children: [icon, label && _jsx(RadioCard.ItemText, { children: label }), description && (_jsx(RadioCard.ItemDescription, { children: description })), indicatorPlacement === "inside" && indicator] })), indicatorPlacement === "end" && indicator] }), addon && _jsx(RadioCard.ItemAddon, { children: addon })] })));
});
export var RadioCardRoot = RadioCard.Root;
export var RadioCardLabel = RadioCard.Label;
export var RadioCardItemIndicator = RadioCard.ItemIndicator;
