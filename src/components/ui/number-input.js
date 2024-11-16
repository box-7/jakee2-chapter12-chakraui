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
import { NumberInput as ChakraNumberInput } from "@chakra-ui/react";
import * as React from "react";
export var NumberInputRoot = React.forwardRef(function NumberInput(props, ref) {
    var children = props.children, rest = __rest(props, ["children"]);
    return (_jsxs(ChakraNumberInput.Root, __assign({ ref: ref, variant: "outline" }, rest, { children: [children, _jsxs(ChakraNumberInput.Control, { children: [_jsx(ChakraNumberInput.IncrementTrigger, {}), _jsx(ChakraNumberInput.DecrementTrigger, {})] })] })));
});
export var NumberInputField = ChakraNumberInput.Input;
export var NumberInputScruber = ChakraNumberInput.Scrubber;
export var NumberInputLabel = ChakraNumberInput.Label;
