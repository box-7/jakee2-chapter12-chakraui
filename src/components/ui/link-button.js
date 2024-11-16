"use client";
import { createRecipeContext } from "@chakra-ui/react";
var withContext = createRecipeContext({ key: "button" }).withContext;
// Replace "a" with your framework's link component
export var LinkButton = withContext("a");
