import { jsxs as te, jsx as L } from "react/jsx-runtime";
import { useMemo as Ot, useState as Ys, useRef as Os, useCallback as xs, useEffect as Ts } from "react";
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ft;
function l() {
  return Ft.apply(null, arguments);
}
function bs(e) {
  Ft = e;
}
function R(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ae(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function w(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function at(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (w(e, t))
      return !1;
  return !0;
}
function x(e) {
  return e === void 0;
}
function q(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function De(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ct(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function X(e, t) {
  for (var s in t)
    w(t, s) && (e[s] = t[s]);
  return w(t, "toString") && (e.toString = t.toString), w(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function H(e, t, s, r) {
  return as(e, t, s, r, !0).utc();
}
function Ns() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function c(e) {
  return e._pf == null && (e._pf = Ns()), e._pf;
}
var Qe;
Array.prototype.some ? Qe = Array.prototype.some : Qe = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function nt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = c(e), s = Qe.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Le(e) {
  var t = H(NaN);
  return e != null ? X(c(t), e) : c(t).userInvalidated = !0, t;
}
var xt = l.momentProperties = [], $e = !1;
function it(e, t) {
  var s, r, a, n = xt.length;
  if (x(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), x(t._i) || (e._i = t._i), x(t._f) || (e._f = t._f), x(t._l) || (e._l = t._l), x(t._strict) || (e._strict = t._strict), x(t._tzm) || (e._tzm = t._tzm), x(t._isUTC) || (e._isUTC = t._isUTC), x(t._offset) || (e._offset = t._offset), x(t._pf) || (e._pf = c(t)), x(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = xt[s], a = t[r], x(a) || (e[r] = a);
  return e;
}
function ve(e) {
  it(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), $e === !1 && ($e = !0, l.updateOffset(this), $e = !1);
}
function F(e) {
  return e instanceof ve || e != null && e._isAMomentObject != null;
}
function Lt(e) {
  l.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function N(e, t) {
  var s = !0;
  return X(function() {
    if (l.deprecationHandler != null && l.deprecationHandler(null, e), s) {
      var r = [], a, n, i, u = arguments.length;
      for (n = 0; n < u; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            w(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      Lt(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Tt = {};
function Ut(e, t) {
  l.deprecationHandler != null && l.deprecationHandler(e, t), Tt[e] || (Lt(t), Tt[e] = !0);
}
l.suppressDeprecationWarnings = !1;
l.deprecationHandler = null;
function E(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ws(e) {
  var t, s;
  for (s in e)
    w(e, s) && (t = e[s], E(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Xe(e, t) {
  var s = X({}, e), r;
  for (r in t)
    w(t, r) && (ae(e[r]) && ae(t[r]) ? (s[r] = {}, X(s[r], e[r]), X(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    w(e, r) && !w(t, r) && ae(e[r]) && (s[r] = X({}, s[r]));
  return s;
}
function ot(e) {
  e != null && this.set(e);
}
var Ke;
Object.keys ? Ke = Object.keys : Ke = function(e) {
  var t, s = [];
  for (t in e)
    w(e, t) && s.push(t);
  return s;
};
var Ps = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Rs(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return E(r) ? r.call(t, s) : r;
}
function I(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var lt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Oe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, qe = {}, ue = {};
function h(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (ue[e] = a), t && (ue[t[0]] = function() {
    return I(a.apply(this, arguments), t[1], t[2]);
  }), s && (ue[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Fs(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Cs(e) {
  var t = e.match(lt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    ue[t[s]] ? t[s] = ue[t[s]] : t[s] = Fs(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += E(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Te(e, t) {
  return e.isValid() ? (t = It(t, e.localeData()), qe[t] = qe[t] || Cs(t), qe[t](e)) : e.localeData().invalidDate();
}
function It(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Oe.lastIndex = 0; s >= 0 && Oe.test(e); )
    e = e.replace(
      Oe,
      r
    ), Oe.lastIndex = 0, s -= 1;
  return e;
}
var Ls = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Us(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(lt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Is = "Invalid date";
function Hs() {
  return this._invalidDate;
}
var Es = "%d", As = /\d{1,2}/;
function Vs(e) {
  return this._ordinal.replace("%d", e);
}
var Gs = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function js(e, t, s, r) {
  var a = this._relativeTime[s];
  return E(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function zs(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return E(s) ? s(t) : s.replace(/%s/i, t);
}
var bt = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function W(e) {
  return typeof e == "string" ? bt[e] || bt[e.toLowerCase()] : void 0;
}
function ut(e) {
  var t = {}, s, r;
  for (r in e)
    w(e, r) && (s = W(r), s && (t[s] = e[r]));
  return t;
}
var Zs = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function $s(e) {
  var t = [], s;
  for (s in e)
    w(e, s) && t.push({ unit: s, priority: Zs[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var Ht = /\d/, T = /\d\d/, Et = /\d{3}/, dt = /\d{4}/, Ue = /[+-]?\d{6}/, M = /\d\d?/, At = /\d\d\d\d?/, Vt = /\d\d\d\d\d\d?/, Ie = /\d{1,3}/, ht = /\d{1,4}/, He = /[+-]?\d{1,6}/, fe = /\d+/, Ee = /[+-]?\d+/, qs = /Z|[+-]\d\d:?\d\d/gi, Ae = /Z|[+-]\d\d(?::?\d\d)?/gi, Bs = /[+-]?\d+(\.\d{1,3})?/, pe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ce = /^[1-9]\d?/, ft = /^([1-9]\d|\d)/, We;
We = {};
function d(e, t, s) {
  We[e] = E(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function Js(e, t) {
  return w(We, e) ? We[e](t._strict, t._locale) : new RegExp(Qs(e));
}
function Qs(e) {
  return Z(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function Z(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function b(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = b(t)), s;
}
var et = {};
function g(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), q(t) && (r = function(n, i) {
    i[t] = _(n);
  }), a = e.length, s = 0; s < a; s++)
    et[e[s]] = r;
}
function Ye(e, t) {
  g(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function Xs(e, t, s) {
  t != null && w(et, e) && et[e](t, s._a, s, e);
}
function Ve(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Y = 0, j = 1, U = 2, p = 3, P = 4, z = 5, re = 6, Ks = 7, er = 8;
h("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? I(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
d("Y", Ee);
d("YY", M, T);
d("YYYY", ht, dt);
d("YYYYY", He, Ue);
d("YYYYYY", He, Ue);
g(["YYYYY", "YYYYYY"], Y);
g("YYYY", function(e, t) {
  t[Y] = e.length === 2 ? l.parseTwoDigitYear(e) : _(e);
});
g("YY", function(e, t) {
  t[Y] = l.parseTwoDigitYear(e);
});
g("Y", function(e, t) {
  t[Y] = parseInt(e, 10);
});
function we(e) {
  return Ve(e) ? 366 : 365;
}
l.parseTwoDigitYear = function(e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var Gt = me("FullYear", !0);
function tr() {
  return Ve(this.year());
}
function me(e, t) {
  return function(s) {
    return s != null ? (jt(this, e, s), l.updateOffset(this, t), this) : ke(this, e);
  };
}
function ke(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function jt(e, t, s) {
  var r, a, n, i, u;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    n = s, i = e.month(), u = e.date(), u = u === 29 && i === 1 && !Ve(n) ? 28 : u, a ? r.setUTCFullYear(n, i, u) : r.setFullYear(n, i, u);
  }
}
function sr(e) {
  return e = W(e), E(this[e]) ? this[e]() : this;
}
function rr(e, t) {
  if (typeof e == "object") {
    e = ut(e);
    var s = $s(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = W(e), E(this[e]))
    return this[e](t);
  return this;
}
function ar(e, t) {
  return (e % t + t) % t;
}
var v;
Array.prototype.indexOf ? v = Array.prototype.indexOf : v = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ct(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = ar(t, 12);
  return e += (t - s) / 12, s === 1 ? Ve(e) ? 29 : 28 : 31 - s % 7 % 2;
}
h("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
h("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
d("M", M, ce);
d("MM", M, T);
d("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
d("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
g(["M", "MM"], function(e, t) {
  t[j] = _(e) - 1;
});
g(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[j] = a : c(s).invalidMonth = e;
});
var nr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), zt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Zt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ir = pe, or = pe;
function lr(e, t) {
  return e ? R(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Zt).test(t) ? "format" : "standalone"][e.month()] : R(this._months) ? this._months : this._months.standalone;
}
function ur(e, t) {
  return e ? R(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Zt.test(t) ? "format" : "standalone"][e.month()] : R(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function dr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = H([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = v.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = v.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = v.call(this._shortMonthsParse, i), a !== -1 ? a : (a = v.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = v.call(this._longMonthsParse, i), a !== -1 ? a : (a = v.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function hr(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return dr.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = H([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function $t(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = _(t);
    else if (t = e.localeData().monthsParse(t), !q(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, ct(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function qt(e) {
  return e != null ? ($t(this, e), l.updateOffset(this, !0), this) : ke(this, "Month");
}
function fr() {
  return ct(this.year(), this.month());
}
function cr(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Bt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (w(this, "_monthsShortRegex") || (this._monthsShortRegex = ir), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function mr(e) {
  return this._monthsParseExact ? (w(this, "_monthsRegex") || Bt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (w(this, "_monthsRegex") || (this._monthsRegex = or), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Bt() {
  function e(f, m) {
    return m.length - f.length;
  }
  var t = [], s = [], r = [], a, n, i, u;
  for (a = 0; a < 12; a++)
    n = H([2e3, a]), i = Z(this.monthsShort(n, "")), u = Z(this.months(n, "")), t.push(i), s.push(u), r.push(u), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function _r(e, t, s, r, a, n, i) {
  var u;
  return e < 100 && e >= 0 ? (u = new Date(e + 400, t, s, r, a, n, i), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, s, r, a, n, i), u;
}
function ge(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Pe(e, t, s) {
  var r = 7 + t - s, a = (7 + ge(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function Jt(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = Pe(e, r, a), u = 1 + 7 * (t - 1) + n + i, f, m;
  return u <= 0 ? (f = e - 1, m = we(f) + u) : u > we(e) ? (f = e + 1, m = u - we(e)) : (f = e, m = u), {
    year: f,
    dayOfYear: m
  };
}
function Se(e, t, s) {
  var r = Pe(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + $(i, t, s)) : a > $(e.year(), t, s) ? (n = a - $(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function $(e, t, s) {
  var r = Pe(e, t, s), a = Pe(e + 1, t, s);
  return (we(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
d("w", M, ce);
d("ww", M, T);
d("W", M, ce);
d("WW", M, T);
Ye(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = _(e);
  }
);
function yr(e) {
  return Se(e, this._week.dow, this._week.doy).week;
}
var wr = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function kr() {
  return this._week.dow;
}
function gr() {
  return this._week.doy;
}
function Sr(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Mr(e) {
  var t = Se(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
d("d", M);
d("e", M);
d("E", M);
d("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
d("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
d("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ye(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : c(s).invalidWeekday = e;
});
Ye(["d", "e", "E"], function(e, t, s, r) {
  t[r] = _(e);
});
function Dr(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function vr(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function mt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var pr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Qt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Yr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Or = pe, xr = pe, Tr = pe;
function br(e, t) {
  var s = R(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? mt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Nr(e) {
  return e === !0 ? mt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Wr(e) {
  return e === !0 ? mt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Pr(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = H([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = v.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = v.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = v.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = v.call(this._weekdaysParse, i), a !== -1 || (a = v.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = v.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = v.call(this._shortWeekdaysParse, i), a !== -1 || (a = v.call(this._weekdaysParse, i), a !== -1) ? a : (a = v.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = v.call(this._minWeekdaysParse, i), a !== -1 || (a = v.call(this._weekdaysParse, i), a !== -1) ? a : (a = v.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function Rr(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return Pr.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = H([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Fr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ke(this, "Day");
  return e != null ? (e = Dr(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Cr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Lr(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = vr(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Ur(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || _t.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (w(this, "_weekdaysRegex") || (this._weekdaysRegex = Or), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Ir(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || _t.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (w(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = xr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Hr(e) {
  return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || _t.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (w(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Tr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function _t() {
  function e(O, A) {
    return A.length - O.length;
  }
  var t = [], s = [], r = [], a = [], n, i, u, f, m;
  for (n = 0; n < 7; n++)
    i = H([2e3, 1]).day(n), u = Z(this.weekdaysMin(i, "")), f = Z(this.weekdaysShort(i, "")), m = Z(this.weekdays(i, "")), t.push(u), s.push(f), r.push(m), a.push(u), a.push(f), a.push(m);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function yt() {
  return this.hours() % 12 || 12;
}
function Er() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, yt);
h("k", ["kk", 2], 0, Er);
h("hmm", 0, 0, function() {
  return "" + yt.apply(this) + I(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + yt.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + I(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2);
});
function Xt(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Xt("a", !0);
Xt("A", !1);
function Kt(e, t) {
  return t._meridiemParse;
}
d("a", Kt);
d("A", Kt);
d("H", M, ft);
d("h", M, ce);
d("k", M, ce);
d("HH", M, T);
d("hh", M, T);
d("kk", M, T);
d("hmm", At);
d("hmmss", Vt);
d("Hmm", At);
d("Hmmss", Vt);
g(["H", "HH"], p);
g(["k", "kk"], function(e, t, s) {
  var r = _(e);
  t[p] = r === 24 ? 0 : r;
});
g(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
g(["h", "hh"], function(e, t, s) {
  t[p] = _(e), c(s).bigHour = !0;
});
g("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[p] = _(e.substr(0, r)), t[P] = _(e.substr(r)), c(s).bigHour = !0;
});
g("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[p] = _(e.substr(0, r)), t[P] = _(e.substr(r, 2)), t[z] = _(e.substr(a)), c(s).bigHour = !0;
});
g("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[p] = _(e.substr(0, r)), t[P] = _(e.substr(r));
});
g("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[p] = _(e.substr(0, r)), t[P] = _(e.substr(r, 2)), t[z] = _(e.substr(a));
});
function Ar(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Vr = /[ap]\.?m?\.?/i, Gr = me("Hours", !0);
function jr(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var es = {
  calendar: Ps,
  longDateFormat: Ls,
  invalidDate: Is,
  ordinal: Es,
  dayOfMonthOrdinalParse: As,
  relativeTime: Gs,
  months: nr,
  monthsShort: zt,
  week: wr,
  weekdays: pr,
  weekdaysMin: Yr,
  weekdaysShort: Qt,
  meridiemParse: Vr
}, D = {}, _e = {}, Me;
function zr(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function Nt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Zr(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = Nt(e[t]).split("-"), s = n.length, r = Nt(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = Ge(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && zr(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Me;
}
function $r(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Ge(e) {
  var t = null, s;
  if (D[e] === void 0 && typeof module < "u" && module && module.exports && $r(e))
    try {
      t = Me._abbr, s = require, s("./locale/" + e), ee(t);
    } catch {
      D[e] = null;
    }
  return D[e];
}
function ee(e, t) {
  var s;
  return e && (x(t) ? s = B(e) : s = wt(e, t), s ? Me = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Me._abbr;
}
function wt(e, t) {
  if (t !== null) {
    var s, r = es;
    if (t.abbr = e, D[e] != null)
      Ut(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = D[e]._config;
    else if (t.parentLocale != null)
      if (D[t.parentLocale] != null)
        r = D[t.parentLocale]._config;
      else if (s = Ge(t.parentLocale), s != null)
        r = s._config;
      else
        return _e[t.parentLocale] || (_e[t.parentLocale] = []), _e[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return D[e] = new ot(Xe(r, t)), _e[e] && _e[e].forEach(function(a) {
      wt(a.name, a.config);
    }), ee(e), D[e];
  } else
    return delete D[e], null;
}
function qr(e, t) {
  if (t != null) {
    var s, r, a = es;
    D[e] != null && D[e].parentLocale != null ? D[e].set(Xe(D[e]._config, t)) : (r = Ge(e), r != null && (a = r._config), t = Xe(a, t), r == null && (t.abbr = e), s = new ot(t), s.parentLocale = D[e], D[e] = s), ee(e);
  } else
    D[e] != null && (D[e].parentLocale != null ? (D[e] = D[e].parentLocale, e === ee() && ee(e)) : D[e] != null && delete D[e]);
  return D[e];
}
function B(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Me;
  if (!R(e)) {
    if (t = Ge(e), t)
      return t;
    e = [e];
  }
  return Zr(e);
}
function Br() {
  return Ke(D);
}
function kt(e) {
  var t, s = e._a;
  return s && c(e).overflow === -2 && (t = s[j] < 0 || s[j] > 11 ? j : s[U] < 1 || s[U] > ct(s[Y], s[j]) ? U : s[p] < 0 || s[p] > 24 || s[p] === 24 && (s[P] !== 0 || s[z] !== 0 || s[re] !== 0) ? p : s[P] < 0 || s[P] > 59 ? P : s[z] < 0 || s[z] > 59 ? z : s[re] < 0 || s[re] > 999 ? re : -1, c(e)._overflowDayOfYear && (t < Y || t > U) && (t = U), c(e)._overflowWeeks && t === -1 && (t = Ks), c(e)._overflowWeekday && t === -1 && (t = er), c(e).overflow = t), e;
}
var Jr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Qr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Xr = /Z|[+-]\d\d(?::?\d\d)?/, xe = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Be = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Kr = /^\/?Date\((-?\d+)/i, ea = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ta = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function ts(e) {
  var t, s, r = e._i, a = Jr.exec(r) || Qr.exec(r), n, i, u, f, m = xe.length, O = Be.length;
  if (a) {
    for (c(e).iso = !0, t = 0, s = m; t < s; t++)
      if (xe[t][1].exec(a[1])) {
        i = xe[t][0], n = xe[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = O; t < s; t++)
        if (Be[t][1].exec(a[3])) {
          u = (a[2] || " ") + Be[t][0];
          break;
        }
      if (u == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && u != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Xr.exec(a[4]))
        f = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (u || "") + (f || ""), St(e);
  } else
    e._isValid = !1;
}
function sa(e, t, s, r, a, n) {
  var i = [
    ra(e),
    zt.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function ra(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function aa(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function na(e, t, s) {
  if (e) {
    var r = Qt.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return c(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function ia(e, t, s) {
  if (e)
    return ta[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function ss(e) {
  var t = ea.exec(aa(e._i)), s;
  if (t) {
    if (s = sa(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !na(t[1], s, e))
      return;
    e._a = s, e._tzm = ia(t[8], t[9], t[10]), e._d = ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), c(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function oa(e) {
  var t = Kr.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (ts(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (ss(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : l.createFromInputFallback(e);
}
l.createFromInputFallback = N(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function oe(e, t, s) {
  return e ?? t ?? s;
}
function la(e) {
  var t = new Date(l.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function gt(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = la(e), e._w && e._a[U] == null && e._a[j] == null && ua(e), e._dayOfYear != null && (i = oe(e._a[Y], a[Y]), (e._dayOfYear > we(i) || e._dayOfYear === 0) && (c(e)._overflowDayOfYear = !0), s = ge(i, 0, e._dayOfYear), e._a[j] = s.getUTCMonth(), e._a[U] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[p] === 24 && e._a[P] === 0 && e._a[z] === 0 && e._a[re] === 0 && (e._nextDay = !0, e._a[p] = 0), e._d = (e._useUTC ? ge : _r).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[p] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (c(e).weekdayMismatch = !0);
  }
}
function ua(e) {
  var t, s, r, a, n, i, u, f, m;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = oe(
    t.GG,
    e._a[Y],
    Se(S(), 1, 4).year
  ), r = oe(t.W, 1), a = oe(t.E, 1), (a < 1 || a > 7) && (f = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, m = Se(S(), n, i), s = oe(t.gg, e._a[Y], m.year), r = oe(t.w, m.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (f = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (f = !0)) : a = n), r < 1 || r > $(s, n, i) ? c(e)._overflowWeeks = !0 : f != null ? c(e)._overflowWeekday = !0 : (u = Jt(s, r, a, n, i), e._a[Y] = u.year, e._dayOfYear = u.dayOfYear);
}
l.ISO_8601 = function() {
};
l.RFC_2822 = function() {
};
function St(e) {
  if (e._f === l.ISO_8601) {
    ts(e);
    return;
  }
  if (e._f === l.RFC_2822) {
    ss(e);
    return;
  }
  e._a = [], c(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, u = t.length, f = 0, m, O;
  for (a = It(e._f, e._locale).match(lt) || [], O = a.length, s = 0; s < O; s++)
    n = a[s], r = (t.match(Js(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && c(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), f += r.length), ue[n] ? (r ? c(e).empty = !1 : c(e).unusedTokens.push(n), Xs(n, r, e)) : e._strict && !r && c(e).unusedTokens.push(n);
  c(e).charsLeftOver = u - f, t.length > 0 && c(e).unusedInput.push(t), e._a[p] <= 12 && c(e).bigHour === !0 && e._a[p] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[p] = da(
    e._locale,
    e._a[p],
    e._meridiem
  ), m = c(e).era, m !== null && (e._a[Y] = e._locale.erasConvertYear(m, e._a[Y])), gt(e), kt(e);
}
function da(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function ha(e) {
  var t, s, r, a, n, i, u = !1, f = e._f.length;
  if (f === 0) {
    c(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < f; a++)
    n = 0, i = !1, t = it({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], St(t), nt(t) && (i = !0), n += c(t).charsLeftOver, n += c(t).unusedTokens.length * 10, c(t).score = n, u ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (u = !0));
  X(e, s || t);
}
function fa(e) {
  if (!e._d) {
    var t = ut(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Ct(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), gt(e);
  }
}
function ca(e) {
  var t = new ve(kt(rs(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function rs(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || B(e._l), t === null || s === void 0 && t === "" ? Le({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), F(t) ? new ve(kt(t)) : (De(t) ? e._d = t : R(s) ? ha(e) : s ? St(e) : ma(e), nt(e) || (e._d = null), e));
}
function ma(e) {
  var t = e._i;
  x(t) ? e._d = new Date(l.now()) : De(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? oa(e) : R(t) ? (e._a = Ct(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), gt(e)) : ae(t) ? fa(e) : q(t) ? e._d = new Date(t) : l.createFromInputFallback(e);
}
function as(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ae(e) && at(e) || R(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, ca(n);
}
function S(e, t, s, r) {
  return as(e, t, s, r, !1);
}
var _a = N(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Le();
  }
), ya = N(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Le();
  }
);
function ns(e, t) {
  var s, r;
  if (t.length === 1 && R(t[0]) && (t = t[0]), !t.length)
    return S();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function wa() {
  var e = [].slice.call(arguments, 0);
  return ns("isBefore", e);
}
function ka() {
  var e = [].slice.call(arguments, 0);
  return ns("isAfter", e);
}
var ga = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ye = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Sa(e) {
  var t, s = !1, r, a = ye.length;
  for (t in e)
    if (w(e, t) && !(v.call(ye, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[ye[r]]) {
      if (s)
        return !1;
      parseFloat(e[ye[r]]) !== _(e[ye[r]]) && (s = !0);
    }
  return !0;
}
function Ma() {
  return this._isValid;
}
function Da() {
  return C(NaN);
}
function je(e) {
  var t = ut(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, u = t.hour || 0, f = t.minute || 0, m = t.second || 0, O = t.millisecond || 0;
  this._isValid = Sa(t), this._milliseconds = +O + m * 1e3 + // 1000
  f * 6e4 + // 1000 * 60
  u * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = B(), this._bubble();
}
function be(e) {
  return e instanceof je;
}
function tt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function va(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    _(e[i]) !== _(t[i]) && n++;
  return n + a;
}
function is(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + I(~~(s / 60), 2) + t + I(~~s % 60, 2);
  });
}
is("Z", ":");
is("ZZ", "");
d("Z", Ae);
d("ZZ", Ae);
g(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Mt(Ae, e);
});
var pa = /([\+\-]|\d\d)/gi;
function Mt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(pa) || ["-", 0, 0], n = +(a[1] * 60) + _(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function Dt(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (F(e) || De(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), l.updateOffset(s, !1), s) : S(e).local();
}
function st(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
l.updateOffset = function() {
};
function Ya(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Mt(Ae, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = st(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? us(
      this,
      C(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, l.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : st(this);
}
function Oa(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function xa(e) {
  return this.utcOffset(0, e);
}
function Ta(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(st(this), "m")), this;
}
function ba() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Mt(qs, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Na(e) {
  return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Wa() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Pa() {
  if (!x(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return it(e, this), e = rs(e), e._a ? (t = e._isUTC ? H(e._a) : S(e._a), this._isDSTShifted = this.isValid() && va(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Ra() {
  return this.isValid() ? !this._isUTC : !1;
}
function Fa() {
  return this.isValid() ? this._isUTC : !1;
}
function os() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ca = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, La = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function C(e, t) {
  var s = e, r = null, a, n, i;
  return be(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : q(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Ca.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: _(r[U]) * a,
    h: _(r[p]) * a,
    m: _(r[P]) * a,
    s: _(r[z]) * a,
    ms: _(tt(r[re] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = La.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: se(r[2], a),
    M: se(r[3], a),
    w: se(r[4], a),
    d: se(r[5], a),
    h: se(r[6], a),
    m: se(r[7], a),
    s: se(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = Ua(
    S(s.from),
    S(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new je(s), be(e) && w(e, "_locale") && (n._locale = e._locale), be(e) && w(e, "_isValid") && (n._isValid = e._isValid), n;
}
C.fn = je.prototype;
C.invalid = Da;
function se(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Wt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Ua(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = Dt(t, e), e.isBefore(t) ? s = Wt(e, t) : (s = Wt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function ls(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (Ut(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = C(s, r), us(this, a, e), this;
  };
}
function us(e, t, s, r) {
  var a = t._milliseconds, n = tt(t._days), i = tt(t._months);
  e.isValid() && (r = r ?? !0, i && $t(e, ke(e, "Month") + i * s), n && jt(e, "Date", ke(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && l.updateOffset(e, n || i));
}
var Ia = ls(1, "add"), Ha = ls(-1, "subtract");
function ds(e) {
  return typeof e == "string" || e instanceof String;
}
function Ea(e) {
  return F(e) || De(e) || ds(e) || q(e) || Va(e) || Aa(e) || e === null || e === void 0;
}
function Aa(e) {
  var t = ae(e) && !at(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], a, n, i = r.length;
  for (a = 0; a < i; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function Va(e) {
  var t = R(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !q(r) && ds(e);
  }).length === 0), t && s;
}
function Ga(e) {
  var t = ae(e) && !at(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || w(e, n);
  return t && s;
}
function ja(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function za(e, t) {
  arguments.length === 1 && (arguments[0] ? Ea(arguments[0]) ? (e = arguments[0], t = void 0) : Ga(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || S(), r = Dt(s, this).startOf("day"), a = l.calendarFormat(this, r) || "sameElse", n = t && (E(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, S(s))
  );
}
function Za() {
  return new ve(this);
}
function $a(e, t) {
  var s = F(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function qa(e, t) {
  var s = F(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Ba(e, t, s, r) {
  var a = F(e) ? e : S(e), n = F(t) ? t : S(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function Ja(e, t) {
  var s = F(e) ? e : S(e), r;
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Qa(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Xa(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Ka(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = Dt(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = W(t), t) {
    case "year":
      n = Ne(this, r) / 12;
      break;
    case "month":
      n = Ne(this, r);
      break;
    case "quarter":
      n = Ne(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    case "minute":
      n = (this - r) / 6e4;
      break;
    case "hour":
      n = (this - r) / 36e5;
      break;
    case "day":
      n = (this - r - a) / 864e5;
      break;
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    default:
      n = this - r;
  }
  return s ? n : b(n);
}
function Ne(e, t) {
  if (e.date() < t.date())
    return -Ne(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
l.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
l.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function en() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function tn(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Te(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : E(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Te(s, "Z")) : Te(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function sn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function rn(e) {
  e || (e = this.isUtc() ? l.defaultFormatUtc : l.defaultFormat);
  var t = Te(this, e);
  return this.localeData().postformat(t);
}
function an(e, t) {
  return this.isValid() && (F(e) && e.isValid() || S(e).isValid()) ? C({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function nn(e) {
  return this.from(S(), e);
}
function on(e, t) {
  return this.isValid() && (F(e) && e.isValid() || S(e).isValid()) ? C({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ln(e) {
  return this.to(S(), e);
}
function hs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = B(e), t != null && (this._locale = t), this);
}
var fs = N(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function cs() {
  return this._locale;
}
var Re = 1e3, de = 60 * Re, Fe = 60 * de, ms = (365 * 400 + 97) * 24 * Fe;
function he(e, t) {
  return (e % t + t) % t;
}
function _s(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - ms : new Date(e, t, s).valueOf();
}
function ys(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - ms : Date.UTC(e, t, s);
}
function un(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ys : _s, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= he(
        t + (this._isUTC ? 0 : this.utcOffset() * de),
        Fe
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= he(t, de);
      break;
    case "second":
      t = this._d.valueOf(), t -= he(t, Re);
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function dn(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? ys : _s, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Fe - he(
        t + (this._isUTC ? 0 : this.utcOffset() * de),
        Fe
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += de - he(t, de) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Re - he(t, Re) - 1;
      break;
  }
  return this._d.setTime(t), l.updateOffset(this, !0), this;
}
function hn() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function fn() {
  return Math.floor(this.valueOf() / 1e3);
}
function cn() {
  return new Date(this.valueOf());
}
function mn() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function _n() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function yn() {
  return this.isValid() ? this.toISOString() : null;
}
function wn() {
  return nt(this);
}
function kn() {
  return X({}, c(this));
}
function gn() {
  return c(this).overflow;
}
function Sn() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
d("N", vt);
d("NN", vt);
d("NNN", vt);
d("NNNN", Wn);
d("NNNNN", Pn);
g(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? c(s).era = a : c(s).invalidEra = e;
  }
);
d("y", fe);
d("yy", fe);
d("yyy", fe);
d("yyyy", fe);
d("yo", Rn);
g(["y", "yy", "yyy", "yyyy"], Y);
g(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[Y] = s._locale.eraYearOrdinalParse(e, a) : t[Y] = parseInt(e, 10);
});
function Mn(e, t) {
  var s, r, a, n = this._eras || B("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = l(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = l(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function Dn(e, t, s) {
  var r, a, n = this.eras(), i, u, f;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), u = n[r].abbr.toUpperCase(), f = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (u === e)
            return n[r];
          break;
        case "NNNN":
          if (i === e)
            return n[r];
          break;
        case "NNNNN":
          if (f === e)
            return n[r];
          break;
      }
    else if ([i, u, f].indexOf(e) >= 0)
      return n[r];
}
function vn(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? l(e.since).year() : l(e.since).year() + (t - e.offset) * s;
}
function pn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Yn() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function On() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function xn() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - l(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Tn(e) {
  return w(this, "_erasNameRegex") || pt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function bn(e) {
  return w(this, "_erasAbbrRegex") || pt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Nn(e) {
  return w(this, "_erasNarrowRegex") || pt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function vt(e, t) {
  return t.erasAbbrRegex(e);
}
function Wn(e, t) {
  return t.erasNameRegex(e);
}
function Pn(e, t) {
  return t.erasNarrowRegex(e);
}
function Rn(e, t) {
  return t._eraYearOrdinalRegex || fe;
}
function pt() {
  var e = [], t = [], s = [], r = [], a, n, i, u, f, m = this.eras();
  for (a = 0, n = m.length; a < n; ++a)
    i = Z(m[a].name), u = Z(m[a].abbr), f = Z(m[a].narrow), t.push(i), e.push(u), s.push(f), r.push(i), r.push(u), r.push(f);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
h(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function ze(e, t) {
  h(0, [e, e.length], 0, t);
}
ze("gggg", "weekYear");
ze("ggggg", "weekYear");
ze("GGGG", "isoWeekYear");
ze("GGGGG", "isoWeekYear");
d("G", Ee);
d("g", Ee);
d("GG", M, T);
d("gg", M, T);
d("GGGG", ht, dt);
d("gggg", ht, dt);
d("GGGGG", He, Ue);
d("ggggg", He, Ue);
Ye(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = _(e);
  }
);
Ye(["gg", "GG"], function(e, t, s, r) {
  t[r] = l.parseTwoDigitYear(e);
});
function Fn(e) {
  return ws.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Cn(e) {
  return ws.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Ln() {
  return $(this.year(), 1, 4);
}
function Un() {
  return $(this.isoWeekYear(), 1, 4);
}
function In() {
  var e = this.localeData()._week;
  return $(this.year(), e.dow, e.doy);
}
function Hn() {
  var e = this.localeData()._week;
  return $(this.weekYear(), e.dow, e.doy);
}
function ws(e, t, s, r, a) {
  var n;
  return e == null ? Se(this, r, a).year : (n = $(e, r, a), t > n && (t = n), En.call(this, e, t, s, r, a));
}
function En(e, t, s, r, a) {
  var n = Jt(e, t, s, r, a), i = ge(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
d("Q", Ht);
g("Q", function(e, t) {
  t[j] = (_(e) - 1) * 3;
});
function An(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
d("D", M, ce);
d("DD", M, T);
d("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
g(["D", "DD"], U);
g("Do", function(e, t) {
  t[U] = _(e.match(M)[0]);
});
var ks = me("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
d("DDD", Ie);
d("DDDD", Et);
g(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = _(e);
});
function Vn(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
d("m", M, ft);
d("mm", M, T);
g(["m", "mm"], P);
var Gn = me("Minutes", !1);
h("s", ["ss", 2], 0, "second");
d("s", M, ft);
d("ss", M, T);
g(["s", "ss"], z);
var jn = me("Seconds", !1);
h("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
d("S", Ie, Ht);
d("SS", Ie, T);
d("SSS", Ie, Et);
var K, gs;
for (K = "SSSS"; K.length <= 9; K += "S")
  d(K, fe);
function zn(e, t) {
  t[re] = _(("0." + e) * 1e3);
}
for (K = "S"; K.length <= 9; K += "S")
  g(K, zn);
gs = me("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function Zn() {
  return this._isUTC ? "UTC" : "";
}
function $n() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var o = ve.prototype;
o.add = Ia;
o.calendar = za;
o.clone = Za;
o.diff = Ka;
o.endOf = dn;
o.format = rn;
o.from = an;
o.fromNow = nn;
o.to = on;
o.toNow = ln;
o.get = sr;
o.invalidAt = gn;
o.isAfter = $a;
o.isBefore = qa;
o.isBetween = Ba;
o.isSame = Ja;
o.isSameOrAfter = Qa;
o.isSameOrBefore = Xa;
o.isValid = wn;
o.lang = fs;
o.locale = hs;
o.localeData = cs;
o.max = ya;
o.min = _a;
o.parsingFlags = kn;
o.set = rr;
o.startOf = un;
o.subtract = Ha;
o.toArray = mn;
o.toObject = _n;
o.toDate = cn;
o.toISOString = tn;
o.inspect = sn;
typeof Symbol < "u" && Symbol.for != null && (o[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
o.toJSON = yn;
o.toString = en;
o.unix = fn;
o.valueOf = hn;
o.creationData = Sn;
o.eraName = pn;
o.eraNarrow = Yn;
o.eraAbbr = On;
o.eraYear = xn;
o.year = Gt;
o.isLeapYear = tr;
o.weekYear = Fn;
o.isoWeekYear = Cn;
o.quarter = o.quarters = An;
o.month = qt;
o.daysInMonth = fr;
o.week = o.weeks = Sr;
o.isoWeek = o.isoWeeks = Mr;
o.weeksInYear = In;
o.weeksInWeekYear = Hn;
o.isoWeeksInYear = Ln;
o.isoWeeksInISOWeekYear = Un;
o.date = ks;
o.day = o.days = Fr;
o.weekday = Cr;
o.isoWeekday = Lr;
o.dayOfYear = Vn;
o.hour = o.hours = Gr;
o.minute = o.minutes = Gn;
o.second = o.seconds = jn;
o.millisecond = o.milliseconds = gs;
o.utcOffset = Ya;
o.utc = xa;
o.local = Ta;
o.parseZone = ba;
o.hasAlignedHourOffset = Na;
o.isDST = Wa;
o.isLocal = Ra;
o.isUtcOffset = Fa;
o.isUtc = os;
o.isUTC = os;
o.zoneAbbr = Zn;
o.zoneName = $n;
o.dates = N(
  "dates accessor is deprecated. Use date instead.",
  ks
);
o.months = N(
  "months accessor is deprecated. Use month instead",
  qt
);
o.years = N(
  "years accessor is deprecated. Use year instead",
  Gt
);
o.zone = N(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Oa
);
o.isDSTShifted = N(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Pa
);
function qn(e) {
  return S(e * 1e3);
}
function Bn() {
  return S.apply(null, arguments).parseZone();
}
function Ss(e) {
  return e;
}
var k = ot.prototype;
k.calendar = Rs;
k.longDateFormat = Us;
k.invalidDate = Hs;
k.ordinal = Vs;
k.preparse = Ss;
k.postformat = Ss;
k.relativeTime = js;
k.pastFuture = zs;
k.set = Ws;
k.eras = Mn;
k.erasParse = Dn;
k.erasConvertYear = vn;
k.erasAbbrRegex = bn;
k.erasNameRegex = Tn;
k.erasNarrowRegex = Nn;
k.months = lr;
k.monthsShort = ur;
k.monthsParse = hr;
k.monthsRegex = mr;
k.monthsShortRegex = cr;
k.week = yr;
k.firstDayOfYear = gr;
k.firstDayOfWeek = kr;
k.weekdays = br;
k.weekdaysMin = Wr;
k.weekdaysShort = Nr;
k.weekdaysParse = Rr;
k.weekdaysRegex = Ur;
k.weekdaysShortRegex = Ir;
k.weekdaysMinRegex = Hr;
k.isPM = Ar;
k.meridiem = jr;
function Ce(e, t, s, r) {
  var a = B(), n = H().set(r, t);
  return a[s](n, e);
}
function Ms(e, t, s) {
  if (q(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ce(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Ce(e, r, s, "month");
  return a;
}
function Yt(e, t, s, r) {
  typeof e == "boolean" ? (q(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, q(t) && (s = t, t = void 0), t = t || "");
  var a = B(), n = e ? a._week.dow : 0, i, u = [];
  if (s != null)
    return Ce(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    u[i] = Ce(t, (i + n) % 7, r, "day");
  return u;
}
function Jn(e, t) {
  return Ms(e, t, "months");
}
function Qn(e, t) {
  return Ms(e, t, "monthsShort");
}
function Xn(e, t, s) {
  return Yt(e, t, s, "weekdays");
}
function Kn(e, t, s) {
  return Yt(e, t, s, "weekdaysShort");
}
function ei(e, t, s) {
  return Yt(e, t, s, "weekdaysMin");
}
ee("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
l.lang = N(
  "moment.lang is deprecated. Use moment.locale instead.",
  ee
);
l.langData = N(
  "moment.langData is deprecated. Use moment.localeData instead.",
  B
);
var V = Math.abs;
function ti() {
  var e = this._data;
  return this._milliseconds = V(this._milliseconds), this._days = V(this._days), this._months = V(this._months), e.milliseconds = V(e.milliseconds), e.seconds = V(e.seconds), e.minutes = V(e.minutes), e.hours = V(e.hours), e.months = V(e.months), e.years = V(e.years), this;
}
function Ds(e, t, s, r) {
  var a = C(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function si(e, t) {
  return Ds(this, e, t, 1);
}
function ri(e, t) {
  return Ds(this, e, t, -1);
}
function Pt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ai() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, u, f;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += Pt(rt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = b(e / 1e3), r.seconds = a % 60, n = b(a / 60), r.minutes = n % 60, i = b(n / 60), r.hours = i % 24, t += b(i / 24), f = b(vs(t)), s += f, t -= Pt(rt(f)), u = b(s / 12), s %= 12, r.days = t, r.months = s, r.years = u, this;
}
function vs(e) {
  return e * 4800 / 146097;
}
function rt(e) {
  return e * 146097 / 4800;
}
function ni(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = W(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + vs(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(rt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function J(e) {
  return function() {
    return this.as(e);
  };
}
var ps = J("ms"), ii = J("s"), oi = J("m"), li = J("h"), ui = J("d"), di = J("w"), hi = J("M"), fi = J("Q"), ci = J("y"), mi = ps;
function _i() {
  return C(this);
}
function yi(e) {
  return e = W(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ne(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var wi = ne("milliseconds"), ki = ne("seconds"), gi = ne("minutes"), Si = ne("hours"), Mi = ne("days"), Di = ne("months"), vi = ne("years");
function pi() {
  return b(this.days() / 7);
}
var G = Math.round, le = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Yi(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function Oi(e, t, s, r) {
  var a = C(e).abs(), n = G(a.as("s")), i = G(a.as("m")), u = G(a.as("h")), f = G(a.as("d")), m = G(a.as("M")), O = G(a.as("w")), A = G(a.as("y")), Q = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || u <= 1 && ["h"] || u < s.h && ["hh", u] || f <= 1 && ["d"] || f < s.d && ["dd", f];
  return s.w != null && (Q = Q || O <= 1 && ["w"] || O < s.w && ["ww", O]), Q = Q || m <= 1 && ["M"] || m < s.M && ["MM", m] || A <= 1 && ["y"] || ["yy", A], Q[2] = t, Q[3] = +e > 0, Q[4] = r, Yi.apply(null, Q);
}
function xi(e) {
  return e === void 0 ? G : typeof e == "function" ? (G = e, !0) : !1;
}
function Ti(e, t) {
  return le[e] === void 0 ? !1 : t === void 0 ? le[e] : (le[e] = t, e === "s" && (le.ss = t - 1), !0);
}
function bi(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = le, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, le, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = Oi(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var Je = Math.abs;
function ie(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ze() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Je(this._milliseconds) / 1e3, t = Je(this._days), s = Je(this._months), r, a, n, i, u = this.asSeconds(), f, m, O, A;
  return u ? (r = b(e / 60), a = b(r / 60), e %= 60, r %= 60, n = b(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", f = u < 0 ? "-" : "", m = ie(this._months) !== ie(u) ? "-" : "", O = ie(this._days) !== ie(u) ? "-" : "", A = ie(this._milliseconds) !== ie(u) ? "-" : "", f + "P" + (n ? m + n + "Y" : "") + (s ? m + s + "M" : "") + (t ? O + t + "D" : "") + (a || r || e ? "T" : "") + (a ? A + a + "H" : "") + (r ? A + r + "M" : "") + (e ? A + i + "S" : "")) : "P0D";
}
var y = je.prototype;
y.isValid = Ma;
y.abs = ti;
y.add = si;
y.subtract = ri;
y.as = ni;
y.asMilliseconds = ps;
y.asSeconds = ii;
y.asMinutes = oi;
y.asHours = li;
y.asDays = ui;
y.asWeeks = di;
y.asMonths = hi;
y.asQuarters = fi;
y.asYears = ci;
y.valueOf = mi;
y._bubble = ai;
y.clone = _i;
y.get = yi;
y.milliseconds = wi;
y.seconds = ki;
y.minutes = gi;
y.hours = Si;
y.days = Mi;
y.weeks = pi;
y.months = Di;
y.years = vi;
y.humanize = bi;
y.toISOString = Ze;
y.toString = Ze;
y.toJSON = Ze;
y.locale = hs;
y.localeData = cs;
y.toIsoString = N(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ze
);
y.lang = fs;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
d("x", Ee);
d("X", Bs);
g("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
g("x", function(e, t, s) {
  s._d = new Date(_(e));
});
//! moment.js
l.version = "2.30.1";
bs(S);
l.fn = o;
l.min = wa;
l.max = ka;
l.now = ga;
l.utc = H;
l.unix = qn;
l.months = Jn;
l.isDate = De;
l.locale = ee;
l.invalid = Le;
l.duration = C;
l.isMoment = F;
l.weekdays = Xn;
l.parseZone = Bn;
l.localeData = B;
l.isDuration = be;
l.monthsShort = Qn;
l.weekdaysMin = ei;
l.defineLocale = wt;
l.updateLocale = qr;
l.locales = Br;
l.weekdaysShort = Kn;
l.normalizeUnits = W;
l.relativeTimeRounding = xi;
l.relativeTimeThreshold = Ti;
l.calendarFormat = ja;
l.prototype = o;
l.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Rt = (e) => l.duration(
  Math.max(e - Math.floor(Date.now() / 1e3), 0),
  "seconds"
), Pi = ({ date: e = /* @__PURE__ */ new Date("12/31/2024") }) => {
  const t = Ot(() => {
    const u = e.toLocaleString("default", { year: "numeric" }), f = e.toLocaleString("default", { month: "long" }), m = e.toLocaleString("default", { day: "2-digit" });
    return /* @__PURE__ */ te("h2", { children: [
      f,
      " ",
      m,
      /* @__PURE__ */ L("sup", { children: "th" }),
      ", ",
      u
    ] });
  }, [e]), s = Ot(() => l(e).startOf("day").unix(), []), [r, a] = Ys(Rt(s)), n = Os(), i = xs(() => {
    a(Rt(s));
  }, [s]);
  return Ts(() => (n.current = setInterval(i, 1e3), () => {
    clearInterval(n.current);
  }), [s]), /* @__PURE__ */ L("section", { className: "flex items-center w-full justify-center bg-primary", children: /* @__PURE__ */ te("div", { className: "flex flex-col items-center gap-[3rem] xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl w-full py-24 text-white", children: [
    t,
    /* @__PURE__ */ te("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ te("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ L("div", { className: "text-5xl", children: Math.floor(r.asDays()).toString().padStart(2, "0") }),
        /* @__PURE__ */ L("p", { className: "text-lg", children: "Days" })
      ] }),
      /* @__PURE__ */ te("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ L("div", { className: "text-5xl", children: r.hours().toString().padStart(2, "0") }),
        /* @__PURE__ */ L("p", { className: "text-lg", children: "Hours" })
      ] }),
      /* @__PURE__ */ te("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ L("div", { className: "text-5xl", children: r.minutes().toString().padStart(2, "0") }),
        /* @__PURE__ */ L("p", { className: "text-lg", children: "Minutes" })
      ] }),
      /* @__PURE__ */ te("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ L("div", { className: "text-5xl", children: r.seconds().toString().padStart(2, "0") }),
        /* @__PURE__ */ L("p", { className: "text-lg", children: "Seconds" })
      ] })
    ] })
  ] }) });
};
export {
  Pi as CountdownSection
};
//# sourceMappingURL=countdown.js.map
