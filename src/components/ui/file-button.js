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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, FileUpload as ChakraFileUpload, Icon, IconButton, Span, Text, useFileUploadContext, useRecipe, } from "@chakra-ui/react";
import * as React from "react";
import { LuFile, LuUpload, LuX } from "react-icons/lu";
export var FileUploadRoot = React.forwardRef(function FileUploadRoot(props, ref) {
    var children = props.children, inputProps = props.inputProps, rest = __rest(props, ["children", "inputProps"]);
    return (_jsxs(ChakraFileUpload.Root, __assign({}, rest, { children: [_jsx(ChakraFileUpload.HiddenInput, __assign({ ref: ref }, inputProps)), children] })));
});
export var FileUploadDropzone = React.forwardRef(function FileUploadDropzone(props, ref) {
    var children = props.children, label = props.label, description = props.description, rest = __rest(props, ["children", "label", "description"]);
    return (_jsxs(ChakraFileUpload.Dropzone, __assign({ ref: ref }, rest, { children: [_jsx(Icon, { fontSize: "xl", color: "fg.muted", children: _jsx(LuUpload, {}) }), _jsxs(ChakraFileUpload.DropzoneContent, { children: [_jsx("div", { children: label }), description && _jsx(Text, { color: "fg.muted", children: description })] }), children] })));
});
var FileUploadItem = React.forwardRef(function FileUploadItem(props, ref) {
    var file = props.file, showSize = props.showSize, clearable = props.clearable;
    return (_jsxs(ChakraFileUpload.Item, { file: file, ref: ref, children: [_jsx(ChakraFileUpload.ItemPreview, { asChild: true, children: _jsx(Icon, { fontSize: "lg", color: "fg.muted", children: _jsx(LuFile, {}) }) }), showSize ? (_jsxs(ChakraFileUpload.ItemContent, { children: [_jsx(ChakraFileUpload.ItemName, {}), _jsx(ChakraFileUpload.ItemSizeText, {})] })) : (_jsx(ChakraFileUpload.ItemName, { flex: "1" })), clearable && (_jsx(ChakraFileUpload.ItemDeleteTrigger, { asChild: true, children: _jsx(IconButton, { variant: "ghost", color: "fg.muted", size: "xs", children: _jsx(LuX, {}) }) }))] }));
});
export var FileUploadList = React.forwardRef(function FileUploadList(props, ref) {
    var showSize = props.showSize, clearable = props.clearable, files = props.files, rest = __rest(props, ["showSize", "clearable", "files"]);
    var fileUpload = useFileUploadContext();
    var acceptedFiles = files !== null && files !== void 0 ? files : fileUpload.acceptedFiles;
    if (acceptedFiles.length === 0)
        return null;
    return (_jsx(ChakraFileUpload.ItemGroup, __assign({ ref: ref }, rest, { children: acceptedFiles.map(function (file) { return (_jsx(FileUploadItem, { file: file, showSize: showSize, clearable: clearable }, file.name)); }) })));
});
export var FileInput = React.forwardRef(function FileInput(props, ref) {
    var inputRecipe = useRecipe({ key: "input" });
    var _a = inputRecipe.splitVariantProps(props), recipeProps = _a[0], restProps = _a[1];
    var _b = restProps.placeholder, placeholder = _b === void 0 ? "Select file(s)" : _b, rest = __rest(restProps, ["placeholder"]);
    return (_jsx(ChakraFileUpload.Trigger, { asChild: true, children: _jsx(Button, __assign({ unstyled: true, py: "0", ref: ref }, rest, { css: [inputRecipe(recipeProps), props.css], children: _jsx(ChakraFileUpload.Context, { children: function (_a) {
                    var acceptedFiles = _a.acceptedFiles;
                    if (acceptedFiles.length === 1) {
                        return _jsx("span", { children: acceptedFiles[0].name });
                    }
                    if (acceptedFiles.length > 1) {
                        return _jsxs("span", { children: [acceptedFiles.length, " files"] });
                    }
                    return _jsx(Span, { color: "fg.subtle", children: placeholder });
                } }) })) }));
});
export var FileUploadLabel = ChakraFileUpload.Label;
export var FileUploadClearTrigger = ChakraFileUpload.ClearTrigger;
export var FileUploadTrigger = ChakraFileUpload.Trigger;
