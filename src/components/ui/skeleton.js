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
import { Skeleton as ChakraSkeleton, Circle, Stack } from "@chakra-ui/react";
import * as React from "react";
export var SkeletonCircle = React.forwardRef(function SkeletonCircle(props, ref) {
    var size = props.size, rest = __rest(props, ["size"]);
    return (_jsx(Circle, { size: size, asChild: true, ref: ref, children: _jsx(ChakraSkeleton, __assign({}, rest)) }));
});
export var SkeletonText = React.forwardRef(function SkeletonText(props, ref) {
    var _a = props.noOfLines, noOfLines = _a === void 0 ? 3 : _a, gap = props.gap, rest = __rest(props, ["noOfLines", "gap"]);
    return (_jsx(Stack, { gap: gap, width: "full", ref: ref, children: Array.from({ length: noOfLines }).map(function (_, index) { return (_jsx(ChakraSkeleton, __assign({ height: "4" }, props, { _last: { maxW: "80%" } }, rest), index)); }) }));
});
export var Skeleton = ChakraSkeleton;
