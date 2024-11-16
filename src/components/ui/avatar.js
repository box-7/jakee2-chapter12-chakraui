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
import { Avatar as ChakraAvatar, Group } from "@chakra-ui/react";
import * as React from "react";
export var Avatar = React.forwardRef(function Avatar(props, ref) {
    var name = props.name, src = props.src, srcSet = props.srcSet, loading = props.loading, icon = props.icon, fallback = props.fallback, children = props.children, rest = __rest(props, ["name", "src", "srcSet", "loading", "icon", "fallback", "children"]);
    return (_jsxs(ChakraAvatar.Root, __assign({ ref: ref }, rest, { children: [_jsx(AvatarFallback, { name: name, icon: icon, children: fallback }), _jsx(ChakraAvatar.Image, { src: src, srcSet: srcSet, loading: loading }), children] })));
});
var AvatarFallback = React.forwardRef(function AvatarFallback(props, ref) {
    var name = props.name, icon = props.icon, children = props.children, rest = __rest(props, ["name", "icon", "children"]);
    return (_jsxs(ChakraAvatar.Fallback, __assign({ ref: ref }, rest, { children: [children, name != null && children == null && _jsx(_Fragment, { children: getInitials(name) }), name == null && children == null && (_jsx(ChakraAvatar.Icon, { asChild: !!icon, children: icon }))] })));
});
function getInitials(name) {
    var names = name.trim().split(" ");
    var firstName = names[0] != null ? names[0] : "";
    var lastName = names.length > 1 ? names[names.length - 1] : "";
    return firstName && lastName
        ? "".concat(firstName.charAt(0)).concat(lastName.charAt(0))
        : firstName.charAt(0);
}
export var AvatarGroup = React.forwardRef(function AvatarGroup(props, ref) {
    var size = props.size, variant = props.variant, borderless = props.borderless, rest = __rest(props, ["size", "variant", "borderless"]);
    return (_jsx(ChakraAvatar.PropsProvider, { value: { size: size, variant: variant, borderless: borderless }, children: _jsx(Group, __assign({ gap: "0", spaceX: "-3", ref: ref }, rest)) }));
});
