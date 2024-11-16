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
import { Timeline as ChakraTimeline } from "@chakra-ui/react";
import * as React from "react";
export var TimelineConnector = React.forwardRef(function TimelineConnector(props, ref) {
    return (_jsxs(ChakraTimeline.Connector, { ref: ref, children: [_jsx(ChakraTimeline.Separator, {}), _jsx(ChakraTimeline.Indicator, __assign({}, props))] }));
});
export var TimelineRoot = ChakraTimeline.Root;
export var TimelineContent = ChakraTimeline.Content;
export var TimelineItem = ChakraTimeline.Item;
export var TimelineIndicator = ChakraTimeline.Indicator;
export var TimelineTitle = ChakraTimeline.Title;
export var TimelineDescription = ChakraTimeline.Description;
