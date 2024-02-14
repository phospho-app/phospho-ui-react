"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var __defProp = Object.defineProperty;
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
var _phospho = require('phospho');

// components/send-feedback.tsx

var _lucidereact = require('lucide-react');
var _zod = require('zod');
var _reacthookform = require('react-hook-form');
var _zod3 = require('@hookform/resolvers/zod');

// components/ui/input.tsx
var _react = require('react'); var React = _interopRequireWildcard(_react); var React2 = _interopRequireWildcard(_react); var React3 = _interopRequireWildcard(_react); var React5 = _interopRequireWildcard(_react); var React4 = _interopRequireWildcard(_react);

// lib/utils.ts
var _clsx = require('clsx');
var _tailwindmerge = require('tailwind-merge');
function cn(...inputs) {
  return _tailwindmerge.twMerge.call(void 0, _clsx.clsx.call(void 0, inputs));
}
__name(cn, "cn");

// components/ui/input.tsx
var _jsxruntime = require('react/jsx-runtime');
var Input = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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

var _reactslot = require('@radix-ui/react-slot');
var _classvarianceauthority = require('class-variance-authority');

var buttonVariants = _classvarianceauthority.cva.call(void 0, 
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
    const Comp = asChild ? _reactslot.Slot : "button";
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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

var _vaul = require('vaul');

var DrawerTrigger = _vaul.Drawer.Trigger;
var DrawerPortal = _vaul.Drawer.Portal;
var DrawerClose = _vaul.Drawer.Close;
var DrawerOverlay = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _vaul.Drawer.Overlay,
    __spreadValues({
      ref,
      className: cn("fixed inset-0 z-50 bg-black/80", className)
    }, props)
  );
});
DrawerOverlay.displayName = _vaul.Drawer.Overlay.displayName;
var DrawerContent = React3.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DrawerPortal, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerOverlay, {}),
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 
      _vaul.Drawer.Content,
      __spreadProps(__spreadValues({
        ref,
        className: cn(
          "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
          className
        )
      }, props), {
        children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
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
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "div",
    __spreadValues({
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
}, "DrawerFooter");
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _vaul.Drawer.Title,
    __spreadValues({
      ref,
      className: cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )
    }, props)
  );
});
DrawerTitle.displayName = _vaul.Drawer.Title.displayName;
var DrawerDescription = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    _vaul.Drawer.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-muted-foreground", className)
    }, props)
  );
});
DrawerDescription.displayName = _vaul.Drawer.Description.displayName;

// components/ui/toggle-group.tsx

var _reacttogglegroup = require('@radix-ui/react-toggle-group'); var ToggleGroupPrimitive = _interopRequireWildcard(_reacttogglegroup);

// components/ui/toggle.tsx

var _reacttoggle = require('@radix-ui/react-toggle'); var TogglePrimitive = _interopRequireWildcard(_reacttoggle);


var toggleVariants = _classvarianceauthority.cva.call(void 0, 
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
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    TogglePrimitive.Root,
    __spreadValues({
      ref,
      className: cn(toggleVariants({ variant, size, className }))
    }, props)
  );
});
Toggle.displayName = TogglePrimitive.Root.displayName;

// components/ui/toggle-group.tsx

var ToggleGroupContext = React5.createContext({
  size: "default",
  variant: "default"
});
var ToggleGroup = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, size, children } = _b, props = __objRest(_b, ["className", "variant", "size", "children"]);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    ToggleGroupPrimitive.Root,
    __spreadProps(__spreadValues({
      ref,
      className: cn("flex items-center justify-center gap-1", className)
    }, props), {
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, ToggleGroupContext.Provider, { value: { variant, size }, children })
    })
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = React5.forwardRef((_a, ref) => {
  var _b = _a, { className, children, variant, size } = _b, props = __objRest(_b, ["className", "children", "variant", "size"]);
  const context = React5.useContext(ToggleGroupContext);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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

var OpenFeedbackDrawer = /* @__PURE__ */ __name(({
  title = null,
  description = null,
  projectId = null,
  taskId = null,
  onSubmit = null,
  onClose = null,
  source = null
}) => {
  const feedbackSchema = _zod.z.object({
    flag: _zod.z.enum(["success", "failure"]),
    notes: _zod.z.string().max(1e3),
    source: _zod.z.string().optional()
  });
  const form = _reacthookform.useForm.call(void 0, {
    resolver: _zod3.zodResolver.call(void 0, feedbackSchema)
  });
  const onSubmitFunc = /* @__PURE__ */ __name((feedback) => __async(void 0, null, function* () {
    _phospho.sendUserFeedback.call(void 0, {
      projectId,
      taskId,
      flag: feedback.flag,
      notes: feedback.notes,
      source
    });
    if (onSubmit !== null) {
      try {
        yield onSubmit(feedback);
      } catch (error) {
        console.error("Error submitting feedback", error);
      }
    }
    if (onClose !== null) {
      onClose();
    }
  }), "onSubmitFunc");
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _vaul.Drawer.Root, { children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerTrigger, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Button, { variant: "outline", children: "Send Feedback" }) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerContent, { children: /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DrawerHeader, { children: [
        title !== null && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerTitle, { children: title }),
        description !== null && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerDescription, { children: description })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { className: "p-4 pb-0", children: [
        /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, ToggleGroup, { type: "single", children: [
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            ToggleGroupItem,
            {
              value: "success",
              onClick: () => {
                form.setValue("flag", "success");
              },
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ThumbsUp, {})
            }
          ),
          /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
            ToggleGroupItem,
            {
              value: "failure",
              onClick: () => {
                form.setValue("flag", "failure");
              },
              children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _lucidereact.ThumbsDown, {})
            }
          )
        ] }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Input, { placeholder: "Tell us how it went.", type: "textarea" })
      ] }),
      /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DrawerFooter, { children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            onClick: () => {
              form.handleSubmit(onSubmitFunc);
            },
            children: "Send"
          }
        ),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DrawerClose, { asChild: true, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
          Button,
          {
            variant: "outline",
            onClick: () => {
              if (onClose !== null) {
                onClose();
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



exports.OpenFeedbackDrawer = send_feedback_default; exports.sendUserFeedback = _phospho.sendUserFeedback;
