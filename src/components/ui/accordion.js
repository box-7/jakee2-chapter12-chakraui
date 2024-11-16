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
import { Accordion, HStack } from "@chakra-ui/react";
import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
export var AccordionItemTrigger = React.forwardRef(function AccordionItemTrigger(props, ref) {
    var children = props.children, _a = props.indicatorPlacement, indicatorPlacement = _a === void 0 ? "end" : _a, rest = __rest(props, ["children", "indicatorPlacement"]);
    return (_jsxs(Accordion.ItemTrigger, __assign({}, rest, { ref: ref, children: [indicatorPlacement === "start" && (_jsx(Accordion.ItemIndicator, { rotate: { base: "-90deg", _open: "0deg" }, children: _jsx(LuChevronDown, {}) })), _jsx(HStack, { gap: "4", flex: "1", textAlign: "start", width: "full", children: children }), indicatorPlacement === "end" && (_jsx(Accordion.ItemIndicator, { children: _jsx(LuChevronDown, {}) }))] })));
});
export var AccordionItemContent = React.forwardRef(function AccordionItemContent(props, ref) {
    return (_jsx(Accordion.ItemContent, { children: _jsx(Accordion.ItemBody, __assign({}, props, { ref: ref })) }));
});
export var AccordionRoot = Accordion.Root;
export var AccordionItem = Accordion.Item;
