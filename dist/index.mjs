"use client";
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.tsx
import { sendUserFeedback } from "phospho";

// src/components/send-feedback.tsx
import { useState } from "react";
import { Fragment, jsx } from "react/jsx-runtime";
function OpenFeedbackDrawer() {
  const [goal, setGoal] = useState(350);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("p", { children: "Hello!!" }) });
}
__name(OpenFeedbackDrawer, "OpenFeedbackDrawer");
export {
  OpenFeedbackDrawer,
  sendUserFeedback
};
