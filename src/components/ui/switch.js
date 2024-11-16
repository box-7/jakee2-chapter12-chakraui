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
import { Switch as ChakraSwitch } from "@chakra-ui/react";
import * as React from "react";
export var Switch = React.forwardRef(function Switch(props, ref) {
    var inputProps = props.inputProps, children = props.children, rootRef = props.rootRef, trackLabel = props.trackLabel, thumbLabel = props.thumbLabel, rest = __rest(props, ["inputProps", "children", "rootRef", "trackLabel", "thumbLabel"]);
    return (_jsxs(ChakraSwitch.Root, __assign({ ref: rootRef }, rest, { children: [_jsx(ChakraSwitch.HiddenInput, __assign({ ref: ref }, inputProps)), _jsxs(ChakraSwitch.Control, { children: [_jsx(ChakraSwitch.Thumb, { children: thumbLabel && (_jsx(ChakraSwitch.ThumbIndicator, { fallback: thumbLabel === null || thumbLabel === void 0 ? void 0 : thumbLabel.off, children: thumbLabel === null || thumbLabel === void 0 ? void 0 : thumbLabel.on })) }), trackLabel && (_jsx(ChakraSwitch.Indicator, { fallback: trackLabel.off, children: trackLabel.on }))] }), children != null && (_jsx(ChakraSwitch.Label, { children: children }))] })));
});
