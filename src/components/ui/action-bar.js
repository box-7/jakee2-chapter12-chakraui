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
import { ActionBar, Portal } from "@chakra-ui/react";
import { CloseButton } from "./close-button";
import * as React from "react";
export var ActionBarContent = React.forwardRef(function ActionBarContent(props, ref) {
    var children = props.children, _a = props.portalled, portalled = _a === void 0 ? true : _a, portalRef = props.portalRef, rest = __rest(props, ["children", "portalled", "portalRef"]);
    return (_jsx(Portal, { disabled: !portalled, container: portalRef, children: _jsx(ActionBar.Positioner, { children: _jsx(ActionBar.Content, __assign({ ref: ref }, rest, { asChild: false, children: children })) }) }));
});
export var ActionBarCloseTrigger = React.forwardRef(function ActionBarCloseTrigger(props, ref) {
    return (_jsx(ActionBar.CloseTrigger, __assign({}, props, { asChild: true, ref: ref, children: _jsx(CloseButton, { size: "sm" }) })));
});
export var ActionBarRoot = ActionBar.Root;
export var ActionBarSelectionTrigger = ActionBar.SelectionTrigger;
export var ActionBarSeparator = ActionBar.Separator;
