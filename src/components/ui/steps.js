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
import { Box, Steps as ChakraSteps } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck } from "react-icons/lu";
export var StepsItem = React.forwardRef(function StepsItem(props, ref) {
    var title = props.title, description = props.description, completedIcon = props.completedIcon, icon = props.icon, rest = __rest(props, ["title", "description", "completedIcon", "icon"]);
    return (_jsxs(ChakraSteps.Item, __assign({}, rest, { ref: ref, children: [_jsxs(ChakraSteps.Trigger, { children: [_jsx(ChakraSteps.Indicator, { children: _jsx(ChakraSteps.Status, { complete: completedIcon || _jsx(LuCheck, {}), incomplete: icon || _jsx(ChakraSteps.Number, {}) }) }), _jsx(StepInfo, { title: title, description: description })] }), _jsx(ChakraSteps.Separator, {})] })));
});
var StepInfo = function (props) {
    var title = props.title, description = props.description;
    if (title && description) {
        return (_jsxs(Box, { children: [_jsx(ChakraSteps.Title, { children: title }), _jsx(ChakraSteps.Description, { children: description })] }));
    }
    return (_jsxs(_Fragment, { children: [title && _jsx(ChakraSteps.Title, { children: title }), description && (_jsx(ChakraSteps.Description, { children: description }))] }));
};
export var StepsIndicator = React.forwardRef(function StepsIndicator(props, ref) {
    var _a = props.icon, icon = _a === void 0 ? _jsx(ChakraSteps.Number, {}) : _a, completedIcon = props.completedIcon;
    return (_jsx(ChakraSteps.Indicator, { ref: ref, children: _jsx(ChakraSteps.Status, { complete: completedIcon, incomplete: icon }) }));
});
export var StepsList = ChakraSteps.List;
export var StepsRoot = ChakraSteps.Root;
export var StepsContent = ChakraSteps.Content;
export var StepsCompletedContent = ChakraSteps.CompletedContent;
export var StepsNextTrigger = ChakraSteps.NextTrigger;
export var StepsPrevTrigger = ChakraSteps.PrevTrigger;
