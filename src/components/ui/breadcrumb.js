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
import { Breadcrumb } from "@chakra-ui/react";
import * as React from "react";
export var BreadcrumbRoot = React.forwardRef(function BreadcrumbRoot(props, ref) {
    var separator = props.separator, separatorGap = props.separatorGap, children = props.children, rest = __rest(props, ["separator", "separatorGap", "children"]);
    var validChildren = React.Children.toArray(children).filter(React.isValidElement);
    return (_jsx(Breadcrumb.Root, __assign({ ref: ref }, rest, { children: _jsx(Breadcrumb.List, { gap: separatorGap, children: validChildren.map(function (child, index) {
                var last = index === validChildren.length - 1;
                return (_jsxs(React.Fragment, { children: [_jsx(Breadcrumb.Item, { children: child }), !last && (_jsx(Breadcrumb.Separator, { children: separator }))] }, index));
            }) }) })));
});
export var BreadcrumbLink = Breadcrumb.Link;
export var BreadcrumbCurrentLink = Breadcrumb.CurrentLink;
export var BreadcrumbEllipsis = Breadcrumb.Ellipsis;
