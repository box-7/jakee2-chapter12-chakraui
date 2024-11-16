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
import { jsx as _jsx } from "react/jsx-runtime";
import { Button, Pagination as ChakraPagination, IconButton, Text, createContext, usePaginationContext, } from "@chakra-ui/react";
import * as React from "react";
import { HiChevronLeft, HiChevronRight, HiMiniEllipsisHorizontal, } from "react-icons/hi2";
import { LinkButton } from "./link-button";
var _a = createContext({
    name: "RootPropsProvider",
}), RootPropsProvider = _a[0], useRootProps = _a[1];
var variantMap = {
    outline: { default: "ghost", ellipsis: "plain", current: "outline" },
    solid: { default: "outline", ellipsis: "outline", current: "solid" },
    subtle: { default: "ghost", ellipsis: "plain", current: "subtle" },
};
export var PaginationRoot = React.forwardRef(function PaginationRoot(props, ref) {
    var _a = props.size, size = _a === void 0 ? "sm" : _a, _b = props.variant, variant = _b === void 0 ? "outline" : _b, getHref = props.getHref, rest = __rest(props, ["size", "variant", "getHref"]);
    return (_jsx(RootPropsProvider, { value: { size: size, variantMap: variantMap[variant], getHref: getHref }, children: _jsx(ChakraPagination.Root, __assign({ ref: ref, type: getHref ? "link" : "button" }, rest)) }));
});
export var PaginationEllipsis = React.forwardRef(function PaginationEllipsis(props, ref) {
    var _a = useRootProps(), size = _a.size, variantMap = _a.variantMap;
    return (_jsx(ChakraPagination.Ellipsis, __assign({ ref: ref }, props, { asChild: true, children: _jsx(Button, { as: "span", variant: variantMap.ellipsis, size: size, children: _jsx(HiMiniEllipsisHorizontal, {}) }) })));
});
export var PaginationItem = React.forwardRef(function PaginationItem(props, ref) {
    var page = usePaginationContext().page;
    var _a = useRootProps(), size = _a.size, variantMap = _a.variantMap, getHref = _a.getHref;
    var current = page === props.value;
    var variant = current ? variantMap.current : variantMap.default;
    if (getHref) {
        return (_jsx(LinkButton, { href: getHref(props.value), variant: variant, size: size, children: props.value }));
    }
    return (_jsx(ChakraPagination.Item, __assign({ ref: ref }, props, { asChild: true, children: _jsx(Button, { variant: variant, size: size, children: props.value }) })));
});
export var PaginationPrevTrigger = React.forwardRef(function PaginationPrevTrigger(props, ref) {
    var _a = useRootProps(), size = _a.size, variantMap = _a.variantMap, getHref = _a.getHref;
    var previousPage = usePaginationContext().previousPage;
    if (getHref) {
        return (_jsx(LinkButton, { href: previousPage != null ? getHref(previousPage) : undefined, variant: variantMap.default, size: size, children: _jsx(HiChevronLeft, {}) }));
    }
    return (_jsx(ChakraPagination.PrevTrigger, __assign({ ref: ref, asChild: true }, props, { children: _jsx(IconButton, { variant: variantMap.default, size: size, children: _jsx(HiChevronLeft, {}) }) })));
});
export var PaginationNextTrigger = React.forwardRef(function PaginationNextTrigger(props, ref) {
    var _a = useRootProps(), size = _a.size, variantMap = _a.variantMap, getHref = _a.getHref;
    var nextPage = usePaginationContext().nextPage;
    if (getHref) {
        return (_jsx(LinkButton, { href: nextPage != null ? getHref(nextPage) : undefined, variant: variantMap.default, size: size, children: _jsx(HiChevronRight, {}) }));
    }
    return (_jsx(ChakraPagination.NextTrigger, __assign({ ref: ref, asChild: true }, props, { children: _jsx(IconButton, { variant: variantMap.default, size: size, children: _jsx(HiChevronRight, {}) }) })));
});
export var PaginationItems = function (props) {
    return (_jsx(ChakraPagination.Context, { children: function (_a) {
            var pages = _a.pages;
            return pages.map(function (page, index) {
                return page.type === "ellipsis" ? (_jsx(PaginationEllipsis, __assign({ index: index }, props), index)) : (_jsx(PaginationItem, __assign({ type: "page", value: page.value }, props), index));
            });
        } }));
};
export var PaginationPageText = React.forwardRef(function PaginationPageText(props, ref) {
    var _a = props.format, format = _a === void 0 ? "compact" : _a, rest = __rest(props, ["format"]);
    var _b = usePaginationContext(), page = _b.page, totalPages = _b.totalPages, pageRange = _b.pageRange, count = _b.count;
    var content = React.useMemo(function () {
        if (format === "short")
            return "".concat(page, " / ").concat(totalPages);
        if (format === "compact")
            return "".concat(page, " of ").concat(totalPages);
        return "".concat(pageRange.start + 1, " - ").concat(pageRange.end, " of ").concat(count);
    }, [format, page, totalPages, pageRange, count]);
    return (_jsx(Text, __assign({ fontWeight: "medium", ref: ref }, rest, { children: content })));
});
