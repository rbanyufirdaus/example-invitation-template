import { jsx as m, Fragment as N } from "react/jsx-runtime";
import * as s from "react";
import { cn as R } from "../../lib/utils.js";
function j(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function E(...e) {
  return (t) => e.forEach((n) => j(n, t));
}
var x = s.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = s.Children.toArray(n), i = o.find(A);
  if (i) {
    const a = i.props.children, u = o.map((v) => v === i ? s.Children.count(a) > 1 ? s.Children.only(null) : s.isValidElement(a) ? a.props.children : null : v);
    return /* @__PURE__ */ m(g, { ...r, ref: t, children: s.isValidElement(a) ? s.cloneElement(a, void 0, u) : null });
  }
  return /* @__PURE__ */ m(g, { ...r, ref: t, children: n });
});
x.displayName = "Slot";
var g = s.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (s.isValidElement(n)) {
    const o = S(n);
    return s.cloneElement(n, {
      ...P(r, n.props),
      // @ts-ignore
      ref: t ? E(t, o) : o
    });
  }
  return s.Children.count(n) > 1 ? s.Children.only(null) : null;
});
g.displayName = "SlotClone";
var O = ({ children: e }) => /* @__PURE__ */ m(N, { children: e });
function A(e) {
  return s.isValidElement(e) && e.type === O;
}
function P(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...u) => {
      i(...u), o(...u);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function S(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function C(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = C(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function k() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = C(e)) && (r && (r += " "), r += t);
  return r;
}
const p = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, b = k, W = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return b(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((l) => {
    const d = n == null ? void 0 : n[l], f = i == null ? void 0 : i[l];
    if (d === null) return null;
    const c = p(d) || p(f);
    return o[l][c];
  }), u = n && Object.entries(n).reduce((l, d) => {
    let [f, c] = d;
    return c === void 0 || (l[f] = c), l;
  }, {}), v = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: f, className: c, ...V } = d;
    return Object.entries(V).every((w) => {
      let [h, y] = w;
      return Array.isArray(y) ? y.includes({
        ...i,
        ...u
      }[h]) : {
        ...i,
        ...u
      }[h] === y;
    }) ? [
      ...l,
      f,
      c
    ] : l;
  }, []);
  return b(e, a, v, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, z = W(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), B = s.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => /* @__PURE__ */ m(
    r ? x : "button",
    {
      className: R(z({ variant: t, size: n, className: e })),
      ref: i,
      ...o
    }
  )
);
B.displayName = "Button";
export {
  B as Button,
  z as buttonVariants
};
//# sourceMappingURL=button.js.map
