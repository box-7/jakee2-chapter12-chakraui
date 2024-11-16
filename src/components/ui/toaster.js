"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster as ChakraToaster, Portal, Spinner, Stack, Toast, createToaster, } from "@chakra-ui/react";
export var toaster = createToaster({
    placement: "bottom-end",
    pauseOnPageIdle: true,
});
export var Toaster = function () {
    return (_jsx(Portal, { children: _jsx(ChakraToaster, { toaster: toaster, insetInline: { mdDown: "4" }, children: function (toast) {
                var _a;
                return (_jsxs(Toast.Root, { width: { md: "sm" }, children: [toast.type === "loading" ? (_jsx(Spinner, { size: "sm", color: "blue.solid" })) : (_jsx(Toast.Indicator, {})), _jsxs(Stack, { gap: "1", flex: "1", maxWidth: "100%", children: [toast.title && _jsx(Toast.Title, { children: toast.title }), toast.description && (_jsx(Toast.Description, { children: toast.description }))] }), toast.action && (_jsx(Toast.ActionTrigger, { children: toast.action.label })), ((_a = toast.meta) === null || _a === void 0 ? void 0 : _a.closable) && _jsx(Toast.CloseTrigger, {})] }));
            } }) }));
};
