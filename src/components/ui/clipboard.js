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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Clipboard as ChakraClipboard, IconButton, Input, } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck, LuClipboard, LuLink } from "react-icons/lu";
var ClipboardIcon = React.forwardRef(function ClipboardIcon(props, ref) {
    return (_jsx(ChakraClipboard.Indicator, __assign({ copied: _jsx(LuCheck, {}) }, props, { ref: ref, children: _jsx(LuClipboard, {}) })));
});
var ClipboardCopyText = React.forwardRef(function ClipboardCopyText(props, ref) {
    return (_jsx(ChakraClipboard.Indicator, __assign({ copied: "Copied" }, props, { ref: ref, children: "Copy" })));
});
export var ClipboardLabel = React.forwardRef(function ClipboardLabel(props, ref) {
    return (_jsx(ChakraClipboard.Label, __assign({ textStyle: "sm", fontWeight: "medium", display: "inline-block", mb: "1" }, props, { ref: ref })));
});
export var ClipboardButton = React.forwardRef(function ClipboardButton(props, ref) {
    return (_jsx(ChakraClipboard.Trigger, { asChild: true, children: _jsxs(Button, __assign({ ref: ref, size: "sm", variant: "surface" }, props, { children: [_jsx(ClipboardIcon, {}), _jsx(ClipboardCopyText, {})] })) }));
});
export var ClipboardLink = React.forwardRef(function ClipboardLink(props, ref) {
    return (_jsx(ChakraClipboard.Trigger, { asChild: true, children: _jsxs(Button, __assign({ unstyled: true, variant: "plain", size: "xs", display: "inline-flex", alignItems: "center", gap: "2", ref: ref }, props, { children: [_jsx(LuLink, {}), _jsx(ClipboardCopyText, {})] })) }));
});
export var ClipboardIconButton = React.forwardRef(function ClipboardIconButton(props, ref) {
    return (_jsx(ChakraClipboard.Trigger, { asChild: true, children: _jsxs(IconButton, __assign({ ref: ref, size: "xs", variant: "subtle" }, props, { children: [_jsx(ClipboardIcon, {}), _jsx(ClipboardCopyText, { srOnly: true })] })) }));
});
export var ClipboardInput = React.forwardRef(function ClipboardInputElement(props, ref) {
    return (_jsx(ChakraClipboard.Input, { asChild: true, children: _jsx(Input, __assign({ ref: ref }, props)) }));
});
export var ClipboardRoot = ChakraClipboard.Root;
