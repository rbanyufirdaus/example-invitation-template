import { jsxs as r, jsx as e } from "react/jsx-runtime";
const n = ({ title: l = "We are Getting Married", brideName: t = "Bride Name", groomName: a = "Groom Name" }) => /* @__PURE__ */ r("section", { className: "flex flex-col items-center w-full justify-center bg-secondary", children: [
  /* @__PURE__ */ e("div", { className: "w-0 h-0 border-l-[calc(100vw/2-15px)] border-r-[calc(100vw/2-15px)] border-l-transparent border-r-transparent border-t-[50px] border-t-white" }),
  /* @__PURE__ */ r("div", { className: "flex flex-col items-center gap-[3rem] xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl w-full py-12", children: [
    /* @__PURE__ */ e("h2", { className: "text-[2rem] text-center", children: l }),
    /* @__PURE__ */ r("div", { className: "flex w-full text-primary-foreground", children: [
      /* @__PURE__ */ e("h4", { className: "flex-1 text-center", children: t }),
      /* @__PURE__ */ e("div", { className: "text-[9rem] font-semibold leading-none text-black", children: "&" }),
      /* @__PURE__ */ e("h4", { className: "flex-1 text-center", children: a })
    ] })
  ] })
] });
export {
  n as GreetingSection
};
//# sourceMappingURL=greeting.js.map
