"use strict";Object.defineProperty(exports, "__esModule", {value: true});"use client";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.tsx
var _phospho = require('phospho');

// src/components/send-feedback.tsx
var _react = require('react');
var _jsxruntime = require('react/jsx-runtime');
function OpenFeedbackDrawer() {
  const [goal, setGoal] = _react.useState.call(void 0, 350);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _jsxruntime.Fragment, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { children: "Hello!!" }) });
}
__name(OpenFeedbackDrawer, "OpenFeedbackDrawer");



exports.OpenFeedbackDrawer = OpenFeedbackDrawer; exports.sendUserFeedback = _phospho.sendUserFeedback;
