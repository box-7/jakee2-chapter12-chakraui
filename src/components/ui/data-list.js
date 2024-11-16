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
import { DataList as ChakraDataList } from "@chakra-ui/react";
import { InfoTip } from "./toggle-tip";
import * as React from "react";
export var DataListRoot = ChakraDataList.Root;
export var DataListItem = React.forwardRef(function DataListItem(props, ref) {
    var label = props.label, info = props.info, value = props.value, children = props.children, grow = props.grow, rest = __rest(props, ["label", "info", "value", "children", "grow"]);
    return (_jsxs(ChakraDataList.Item, __assign({ ref: ref }, rest, { children: [_jsxs(ChakraDataList.ItemLabel, { flex: grow ? "1" : undefined, children: [label, info && _jsx(InfoTip, { children: info })] }), _jsx(ChakraDataList.ItemValue, { flex: grow ? "1" : undefined, children: value }), children] })));
});
