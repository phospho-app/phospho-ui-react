var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.tsx
import { sendUserFeedback as sendUserFeedback2 } from "phospho";

// components/send-feedback.tsx
import { sendUserFeedback } from "phospho";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components/ui/input.tsx
import * as React from "react";

// lib/utils.tsx
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
__name(cn, "cn");

// components/ui/input.tsx
import { jsx } from "react/jsx-runtime";
var Input = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ jsx(
      "input",
      __spreadValues({
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref
      }, props)
    );
  }
);
Input.displayName = "Input";

// components/ui/button.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React2.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, size, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "asChild"]);
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx2(
      Comp,
      __spreadValues({
        className: cn(buttonVariants({ variant, size, className })),
        ref
      }, props)
    );
  }
);
Button.displayName = "Button";

// components/ui/drawer.tsx
import * as React3 from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerPortal = DrawerPrimitive.Portal;
var DrawerClose = DrawerPrimitive.Close;
var DrawerOverlay = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    DrawerPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn("fixed inset-0 z-50 bg-black/80", className)
    }, props)
  );
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
var DrawerContent = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ jsxs(DrawerPortal, { children: [
    /* @__PURE__ */ jsx3(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      DrawerPrimitive.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ jsx3("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
          children
        ]
      })
    )
  ] });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = /* @__PURE__ */ __name((_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx3(
    "div",
    __spreadValues({
      className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props)
  );
}, "DrawerHeader");
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = /* @__PURE__ */ __name((_a) => {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsx3(
    "div",
    __spreadValues({
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
}, "DrawerFooter");
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    DrawerPrimitive.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
var DrawerDescription = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx3(
    DrawerPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

// components/ui/toggle-group.tsx
import * as React5 from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

// components/ui/toggle.tsx
import * as React4 from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var toggleVariants = cva2(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Toggle = React4.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size } = _b, props = __objRest(_b, ["className", "variant", "size"]);
  return /* @__PURE__ */ jsx4(
    TogglePrimitive.Root,
    __spreadValues({
      ref,
      className: cn(toggleVariants({ variant, size, className }))
    }, props)
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

// components/ui/toggle-group.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var ToggleGroupContext = React5.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size, children } = _b, props = __objRest(_b, ["className", "variant", "size", "children"]);
  return /* @__PURE__ */ jsx5(
    ToggleGroupPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex items-center justify-center gap-1", className)
    }, props), {
      children: /* @__PURE__ */ jsx5(ToggleGroupContext.Provider, { value: { variant, size }, children })
    })
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, variant, size } = _b, props = __objRest(_b, ["className", "children", "variant", "size"]);
  const context = React5.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx5(
    ToggleGroupPrimitive.Item,
    __spreadProps(__spreadValues({
      ref,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      )
    }, props), {
      children
    })
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

// components/send-feedback.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var OpenFeedbackDrawer = /* @__PURE__ */ __name((props) => {
  const feedbackSchema = z.object({
    flag: z.enum(["success", "failure"]),
    notes: z.string().max(1e3),
    source: z.string().optional()
  });
  const form = useForm({
    resolver: zodResolver(feedbackSchema)
  });
  const onSubmit = /* @__PURE__ */ __name((feedback) => __async(void 0, null, function* () {
    sendUserFeedback({
      projectId: props.projectId,
      taskId: props.taskId,
      flag: feedback.flag,
      notes: feedback.notes,
      source: props.source
    });
    if (props.onSubmit !== null) {
      try {
        yield props.onSubmit(feedback);
      } catch (error) {
        console.error("Error submitting feedback", error);
      }
    }
    if (props.onClose !== null) {
      props.onClose();
    }
  }), "onSubmit");
  return /* @__PURE__ */ jsxs2(DrawerPrimitive.Root, { children: [
    /* @__PURE__ */ jsx6(DrawerTrigger, { asChild: true, children: /* @__PURE__ */ jsx6(Button, { variant: "outline", children: "Send Feedback" }) }),
    /* @__PURE__ */ jsx6(DrawerContent, { children: /* @__PURE__ */ jsxs2("div", { className: "mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ jsxs2(DrawerHeader, { children: [
        props.title !== null && /* @__PURE__ */ jsx6(DrawerTitle, { children: props.title }),
        props.description !== null && /* @__PURE__ */ jsx6(DrawerDescription, { children: "props.description" })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "p-4 pb-0", children: [
        /* @__PURE__ */ jsxs2(ToggleGroup, { type: "single", children: [
          /* @__PURE__ */ jsx6(
            ToggleGroupItem,
            {
              value: "success",
              onClick: () => {
                form.setValue("flag", "success");
              },
              children: /* @__PURE__ */ jsx6(ThumbsUp, {})
            }
          ),
          /* @__PURE__ */ jsx6(
            ToggleGroupItem,
            {
              value: "failure",
              onClick: () => {
                form.setValue("flag", "failure");
              },
              children: /* @__PURE__ */ jsx6(ThumbsDown, {})
            }
          )
        ] }),
        /* @__PURE__ */ jsx6(Input, { placeholder: "Tell us how it went.", type: "textarea" })
      ] }),
      /* @__PURE__ */ jsxs2(DrawerFooter, { children: [
        /* @__PURE__ */ jsx6(
          Button,
          {
            onClick: () => {
              form.handleSubmit(onSubmit);
            },
            children: "Send"
          }
        ),
        /* @__PURE__ */ jsx6(DrawerClose, { asChild: true, children: /* @__PURE__ */ jsx6(
          Button,
          {
            variant: "outline",
            onClick: () => {
              if (props.onClose !== null) {
                props.onClose();
              }
            },
            children: "Cancel"
          }
        ) })
      ] })
    ] }) })
  ] });
}, "OpenFeedbackDrawer");
var send_feedback_default = OpenFeedbackDrawer;
export {
  send_feedback_default as OpenFeedbackDrawer,
  sendUserFeedback2 as sendUserFeedback
};
