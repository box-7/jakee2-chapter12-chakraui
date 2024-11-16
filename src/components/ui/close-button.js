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
import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import * as React from "react";
import { LuX } from "react-icons/lu";
export var CloseButton = React.forwardRef(function CloseButton(props, ref) {
    var _a;
    return (_jsx(ChakraIconButton, __assign({ variant: "ghost", "aria-label": "Close", ref: ref }, props, { children: (_a = props.children) !== null && _a !== void 0 ? _a : _jsx(LuX, {}) })));
});
