import { isServer as me, use as Z, insert as m, effect as B, classList as j, style as W, template as x, delegateEvents as ae, spread as ye, mergeProps as te, createComponent as u, className as pe, setAttribute as ne, addEventListener as Me, memo as ee, Portal as ln, render as an, Dynamic as Ji } from "solid-js/web";
import { createSignal as K, createEffect as Q, onMount as ge, onCleanup as he, splitProps as de, createContext as Ee, useContext as Se, children as Ge, untrack as Ie, For as le, Show as V, Switch as Ze, Match as fe, mergeProps as Zr, createComputed as dt, on as Qi, createUniqueId as Le, createMemo as je, batch as Re, createComponent as sn, $PROXY as et, $TRACK as rr, getListener as Mn } from "solid-js";
import { FeatherChevronRight as Xe, FeatherX as ze, FeatherChevronLeft as We, FeatherCheckCircle as pi, FeatherXCircle as cn, FeatherEye as Jr, FeatherEyeOff as el, FeatherChevronDown as tt, FeatherChevronsLeft as tl, FeatherChevronsRight as nl, FeatherClock as Qr, FeatherCalendar as pr, FeatherSearch as Gt, FeatherChevronUp as Zt, FeatherAlertCircle as rl, FeatherFileText as il, FeatherImage as ll, FeatherFilm as al, FeatherMusic as sl, FeatherLock as cl, FeatherSmartphone as ol, FeatherMail as dl, FeatherKey as ul, FeatherCheck as ei, FeatherAlertTriangle as hl, FeatherMinusSquare as fl, FeatherPlusSquare as gl, FeatherMoreHorizontal as ml, FeatherCopy as vl } from "cui-solid-icons/feather";
import { createStore as we, unwrap as ti, createMutable as En, produce as p } from "solid-js/store";
import { F7InfoCircleFill as gt, F7XmarkCircleFill as Rt, F7ExclamationmarkTriangleFill as It, F7CheckmarkAltCircleFill as zt, F7Person as yl, F7QuestionCircleFill as ni } from "cui-solid-icons/f7";
import ue from "dayjs";
import $l from "tinycolor2";
function U(e, ...t) {
  const n = {
    ...e.classList
  };
  if (e.class && (n[e.class] = !0), t)
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      if (typeof i == "string")
        n[i] = !0;
      else
        for (const l in i)
          n[l] = i[l];
    }
  return n;
}
function be(e, t) {
  let n = {
    ...t
  };
  if (e.style)
    if (typeof e.style == "string") {
      const r = document.createElement("div");
      r.setAttribute("style", e.style);
      const i = r.style, l = {};
      for (let a = 0; a < i.length; a++) {
        const s = i[a];
        l[s] = i.getPropertyValue(s);
      }
      Object.assign(n, l);
    } else
      typeof e.style == "object" && (n = {
        ...n,
        ...e.style
      });
  return n;
}
function De(e, t, n) {
  let r, i;
  return e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (r = e[t][0], i = e[t][1]) : [r, i] = K(e[t] || n), [r, i];
}
var wl = /* @__PURE__ */ x("<div>");
function bl(e) {
  const t = () => U(e, "cm-collapase");
  let n;
  function r() {
    const l = document.createElement("surface"), a = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (const s in a)
      if (l.style[s] !== void 0)
        return a[s];
  }
  function i() {
    e.open && n && (n.style.height = "auto"), e.onEnd && e.onEnd(e.open);
  }
  return Q(() => {
    if (!n)
      return;
    if (e.open) {
      n.style.height = "auto";
      const a = n.getBoundingClientRect().height;
      e.onOpen && e.onOpen(a), n.style.height = "0px", n.classList.add("cm-collapase-open"), setTimeout(() => {
        n.style.height = `${a}px`;
      }, 0);
    } else {
      const a = n.getBoundingClientRect().height;
      n.classList.add("animation"), n.classList.remove("cm-collapase-open"), n.style.height = `${a}px`, setTimeout(() => {
        n.style.height = "0px";
      }, 0);
    }
  }), ge(() => {
    if (n) {
      if (me)
        return;
      const l = r();
      n.addEventListener(l, i);
    }
  }), he(() => {
    if (me)
      return;
    const l = r();
    n && n.removeEventListener(l, i);
  }), e.ref && e.ref({
    getHeight() {
      const l = n.style.height;
      n.style.transition = "none", n.style.height = "auto";
      const a = n.offsetHeight;
      return n.style.transition = "", n.style.height = l, a;
    }
  }), (() => {
    var l = wl(), a = n;
    return typeof a == "function" ? Z(a, l) : n = l, m(l, () => e.children), B((s) => {
      var c = t(), d = e.style;
      return s.e = j(l, c, s.e), s.t = W(l, d, s.t), s;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })();
}
var xl = /* @__PURE__ */ x("<div class=cm-accordion-content>"), Cl = /* @__PURE__ */ x("<div><div class=cm-accordion-title><div class=cm-accordion-item-title-text>");
function kl(e) {
  const t = Sl(), n = t?.signal, r = t?.onSelect, i = t?.flex ? !1 : t?.multi, [l, a] = n, [s, c] = K(!1), [d, o] = K(!1), [h, g] = de(e, ["name", "title", "icon", "children", "class", "classList"]), $ = () => {
    let v, y = !1;
    if (i) {
      const C = l();
      if (C.includes(h.name)) {
        const _ = C.indexOf(h.name);
        C.splice(_, 1), v = [].concat(C), y = !1;
      } else
        C.push(h.name), v = [].concat(C), y = !0;
    } else if (l() === h.name) {
      if (t?.flex)
        return;
      v = "", y = !1;
    } else
      v = h.name, y = !0;
    a(v), r && r(h.name, y, v);
  };
  Q(() => {
    let v = !1;
    const y = l();
    i ? v = y.includes(h.name) : v = y === h.name, o(!1), c(v);
  });
  const w = () => U(h, "cm-accordion-item", {
    "cm-accordion-item-active": s(),
    "cm-accordion-item-full": s() && d()
  }), f = () => {
    o(!0);
  };
  return (() => {
    var v = Cl(), y = v.firstChild, C = y.firstChild;
    return ye(v, te({
      get classList() {
        return w();
      }
    }, g), !1, !0), y.$$click = $, m(y, () => h.icon, C), m(C, () => h.title), m(y, u(Xe, {
      class: "cm-accordion-title-arrow",
      size: 14
    }), null), m(v, u(bl, {
      get open() {
        return s();
      },
      onEnd: f,
      get children() {
        var _ = xl();
        return m(_, () => h.children), _;
      }
    }), null), v;
  })();
}
ae(["click"]);
var _l = /* @__PURE__ */ x("<div>");
const ri = Ee();
function Ll(e) {
  const [t, n] = de(e, ["multi", "onSelect", "activeKey", "flex", "class", "classList"]), r = () => U(t, "cm-accordion", {
    "cm-flex-accordion": t.flex
  }), [i, l] = De(t, "activeKey", t.multi ? [] : ""), a = {
    flex: t.flex,
    multi: t.multi,
    signal: [i, l],
    onSelect: t.onSelect
  };
  return u(ri.Provider, {
    value: a,
    get children() {
      var s = _l();
      return ye(s, te({
        get classList() {
          return r();
        }
      }, n), !1, !1), s;
    }
  });
}
Ll.Item = kl;
const Sl = () => Se(ri);
function ii(e, t = 0, n, r = 500, i) {
  window.requestAnimationFrame || (window.requestAnimationFrame = function(c) {
    return window.setTimeout(c, 1e3 / 60);
  });
  const l = Math.abs(t - n), a = Math.ceil(l / r * 50);
  function s(c, d, o) {
    if (c === d) {
      i && i();
      return;
    }
    let h = c + o > d ? d : c + o;
    c > d && (h = c - o < d ? d : c - o), e === window ? window.scrollTo(h, h) : e.scrollTop = h, window.requestAnimationFrame(() => s(h, d, o));
  }
  s(t, n, a);
}
function ir(e, t) {
  const n = new Uint32Array(1);
  me ? n[0] = Math.floor(Math.random() * (t - e + 1)) + e : window.crypto.getRandomValues(n);
  const r = n[0] / (4294967295 + 1);
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(r * (t - e + 1)) + e;
}
function Ue(e) {
  if (e && (e.startsWith("#") || e.startsWith("rgb") || e.startsWith("hsl"))) {
    const t = new Option().style;
    return t.color = e, t.color.startsWith("rgb");
  }
  return !1;
}
function Ml(e) {
  const t = Ge(() => e.children), n = () => t.toArray();
  return e.subItems = n, e;
}
var El = /* @__PURE__ */ x("<div class=cm-anchor-link><a class=cm-anchor-link-title>"), Fl = /* @__PURE__ */ x("<div><div class=cm-anchor-wrapper><div class=cm-anchor-inner><div><span class=cm-anchor-ink-ball>");
function Tl(e) {
  const [t, n] = de(e, ["children", "classList", "class", "container", "scrollContainer", "scrollOffset", "offsetTop", "bounds", "showInk", "mode", "onChange"]), r = () => U(t, "cm-anchor"), i = Ge(() => t.children), l = () => i.toArray(), [a, s] = we({
    inkTop: 0,
    inkHeight: 0,
    currentId: "",
    currentLink: "",
    animating: !1,
    links: [],
    upperFirstTitle: !0
  });
  Q(() => {
    s("links", l());
  }), Q(() => {
    t.onChange?.(a.currentId);
  });
  let c = null, d = null, o = 0;
  const h = t.bounds || 5;
  let g = [];
  const $ = t.mode ?? "hash", w = t.showInk ?? !1, f = () => {
    let E;
    if ($ === "hash") {
      const b = window.location.href;
      E = /#([^#]+)$/.exec(b);
    } else {
      const b = window.location.href, k = b.includes("?") ? b.split("?")[1] : "", M = new URLSearchParams(k);
      M.has("_to") && M.get("_to") && (E = [], E[0] = M.get("_to"), E[1] = M.get("_to")?.replace("#", ""));
    }
    if (!E) {
      setTimeout(() => {
        const b = document.documentElement.scrollTop || document.body.scrollTop;
        L(b);
      }, 10);
      return;
    }
    s("currentLink", E[0]), s("currentId", E[1]);
  }, v = () => {
    c && c.removeEventListener("scroll", y), window.removeEventListener("hashchange", f);
  }, y = (E) => {
    if (a.animating)
      return;
    const b = document.documentElement.scrollTop || document.body.scrollTop || E.target.scrollTop;
    L(b);
  }, C = () => {
    const E = document.getElementById(a.currentId), b = document.querySelector(`a[data-href="${a.currentLink}"]`);
    let k = t.scrollOffset || 0;
    if (b && (k = parseFloat(b.getAttribute("data-scroll-offset"))), !E)
      return;
    const M = E.offsetTop - o - k;
    s("animating", !0), ii(c, d.scrollTop, M, 600, () => {
      s("animating", !1);
    });
  };
  Q(() => {
    a.currentLink;
    const E = document.querySelector(`a[data-href="${a.currentLink}"]`)?.parentElement;
    if (!E)
      return;
    const b = E.offsetTop, k = E.getBoundingClientRect().height, M = k / 4, S = b < 0 ? t.offsetTop || 0 : b;
    Ie(() => {
      s("inkTop", S + M / 2), s("inkHeight", k * 3 / 4);
    });
  });
  const _ = () => {
    c = t.container ? typeof t.container == "string" ? document.querySelector(t.container) : t.container : window, d = t.container ? c : document.documentElement || document.body;
  }, L = (E) => {
    let b = -1;
    const k = g.length;
    let M = {
      link: "#",
      offset: 0
    };
    for (E += h; ++b < k; ) {
      const S = g[b], O = g[b + 1];
      if (E >= S?.offset && E < (O && O.offset || 1 / 0)) {
        M = g[b];
        break;
      }
    }
    s("currentLink", M.link);
  }, F = () => c === window, N = () => {
    f(), setTimeout(() => {
      v(), _(), o = F() ? 0 : d.offsetTop, C(), c.addEventListener("scroll", y), window.addEventListener("hashchange", f);
    }, 0);
  };
  Q(() => {
    const E = a.links.map((b) => b.href);
    Ie(() => {
      const b = E.map((M) => M.split("#")[1]);
      d || _();
      const k = [];
      b.forEach((M) => {
        const S = document.getElementById(M);
        S && k.push({
          link: `#${M}`,
          offset: S.offsetTop - d.offsetTop
        });
      }), g = k;
    });
  });
  const P = (E, b) => {
    if (b.stopPropagation && b.stopPropagation(), b.preventDefault && b.preventDefault(), s("currentLink", E), s("currentId", E.replace("#", "")), C(), $ === "hash")
      window.location.hash = E;
    else {
      const k = window.location.href, M = k.includes("?") ? k.split("?")[1] : "", S = location.hash.indexOf("?"), O = S > -1 ? location.hash.substring(0, S) : location.hash, R = new URLSearchParams(M);
      R.set("_to", E), window.history.replaceState({}, "", `${location.pathname}${O}?${R.toString()}`);
    }
  };
  ge(() => {
    if (me)
      return;
    N();
    const E = setInterval(() => {
      a.links.map((M) => M.href).map((M) => M.split("#")[1]).forEach((M, S) => {
        const O = document.getElementById(M);
        if (O) {
          const R = O.offsetTop - d.offsetTop;
          g[S] || (g[S] = {
            link: `#${M}`,
            offset: 0
          }), g[S] && g[S]?.offset !== R && (g[S].offset = R, g[S].link = `#${M}`);
        }
      });
    }, 500);
    he(() => {
      clearInterval(E);
    });
  }), he(() => {
    me || v();
  });
  const D = (E) => E && E.length ? u(le, {
    each: E,
    children: (b) => (() => {
      var k = El(), M = k.firstChild;
      return M.$$click = (S) => {
        P(b.href, S);
      }, m(M, () => b.title), m(k, () => D(b.subItems()), null), B((S) => {
        var O = b.href, R = t.scrollOffset || 0, T = b.href, I = b.title;
        return O !== S.e && ne(M, "href", S.e = O), R !== S.t && ne(M, "data-scroll-offset", S.t = R), T !== S.a && ne(M, "data-href", S.a = T), I !== S.o && ne(M, "title", S.o = I), S;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0
      }), k;
    })()
  }) : null;
  return (() => {
    var E = Fl(), b = E.firstChild, k = b.firstChild, M = k.firstChild, S = M.firstChild;
    return ye(E, te({
      get classList() {
        return r();
      }
    }, n), !1, !0), pe(M, "cm-anchor-ink " + (w ? "cm-anchor-show" : "")), m(k, () => D(a.links), null), B((O) => {
      var R = `${a.inkTop}px`, T = `${a.inkHeight}px`;
      return R !== O.e && ((O.e = R) != null ? S.style.setProperty("top", R) : S.style.removeProperty("top")), T !== O.t && ((O.t = T) != null ? S.style.setProperty("height", T) : S.style.removeProperty("height")), O;
    }, {
      e: void 0,
      t: void 0
    }), E;
  })();
}
Tl.Link = Ml;
ae(["click"]);
var Pl = /* @__PURE__ */ x("<div class=cm-avatar-hover>"), Dl = /* @__PURE__ */ x('<img alt="">'), Al = /* @__PURE__ */ x("<span>"), Rl = /* @__PURE__ */ x("<span class=cm-avatar-string>");
function lr(e) {
  if (e.asProps)
    return e;
  const [t, n] = K(!1), r = () => U(e, "cm-avatar", {
    [`cm-avatar-${e.size}`]: e.size,
    "cm-avatar-icon": e.icon,
    "cm-avatar-img": e.src,
    "cm-avatar-square": e.shape === "square"
  }), i = () => {
    l.style.Transform = "", l.style.webkitTransform = "", l.style.mozTransform = "";
    const h = a.clientWidth, $ = l.getBoundingClientRect().width, f = Math.acos(21 / h), v = Math.sin(f) * h, y = $ > h ? v / $ : 1;
    l.style.Transform = `scale(${y})`, l.style.webkitTransform = `scale(${y})`, l.style.mozTransform = `scale(${y})`;
  };
  let l, a, s;
  ge(() => {
    a && l && (i(), MutationObserver && (s = new MutationObserver(i), s.observe(l, {
      subtree: !0,
      childList: !0,
      characterData: !0
    })), he(() => {
      s && (s?.disconnect(), s = null);
    }));
  });
  const c = () => {
    const h = be(e, {});
    return typeof e.size == "number" && (h.width = e.size + "px", h.height = e.size + "px"), h;
  }, d = (h) => {
    n(!0), e.onMouseEnter && e.onMouseEnter(h);
  }, o = (h) => {
    n(!1), e.onMouseLeave && e.onMouseLeave(h);
  };
  return (() => {
    var h = Al();
    h.addEventListener("mouseleave", o), h.addEventListener("mouseenter", d);
    var g = a;
    return typeof g == "function" ? Z(g, h) : a = h, Me(h, "click", e.onClick, !0), m(h, u(V, {
      get when() {
        return t();
      },
      get children() {
        var $ = Pl();
        return m($, () => e.hoverMask), $;
      }
    }), null), m(h, u(Ze, {
      get fallback() {
        return (() => {
          var $ = Rl(), w = l;
          return typeof w == "function" ? Z(w, $) : l = $, m($, () => e.children), $;
        })();
      },
      get children() {
        return [u(fe, {
          get when() {
            return e.src;
          },
          get children() {
            var $ = Dl();
            return B(() => ne($, "src", e.src)), $;
          }
        }), u(fe, {
          get when() {
            return e.icon;
          },
          get children() {
            return e.icon;
          }
        })];
      }
    }), null), B(($) => {
      var w = r(), f = c();
      return $.e = j(h, w, $.e), $.t = W(h, f, $.t), $;
    }, {
      e: void 0,
      t: void 0
    }), h;
  })();
}
ae(["click"]);
function nt(e, t) {
  if (me)
    return;
  function n(a) {
    const s = document.createElement("div");
    return s.setAttribute("id", a), s;
  }
  function r(a) {
    document.body.appendChild(a);
  }
  const i = document.querySelector(`#${e}`), l = i || n(e);
  return i || r(l), l.classList.add(t), l;
}
function Fn(e, t) {
  const n = t.getBoundingClientRect();
  let r;
  return e === "bottom" && (r = {
    left: n.x + n.width / 2,
    top: n.y + n.height
  }), e === "top" && (r = {
    left: n.x + n.width / 2,
    top: n.y
  }), e === "left" && (r = {
    left: n.x,
    top: n.y + n.height / 2
  }), e === "right" && (r = {
    left: n.x + n.width,
    top: n.y + n.height / 2
  }), e === "bottomLeft" && (r = {
    left: n.x,
    top: n.y + n.height
  }), e === "bottomRight" && (r = {
    left: n.x + n.width,
    top: n.y + n.height
  }), e === "topLeft" && (r = {
    left: n.x,
    top: n.y
  }), e === "topRight" && (r = {
    left: n.x + n.width,
    top: n.y
  }), e === "rightTop" && (r = {
    left: n.x + n.width,
    top: n.y
  }), e === "rightBottom" && (r = {
    left: n.x + n.width,
    top: n.y + n.height
  }), e === "leftTop" && (r = {
    left: n.x,
    top: n.y
  }), e === "leftBottom" && (r = {
    left: n.x,
    top: n.y + n.height
  }), r;
}
function Tn(e, t, n) {
  if (me)
    return () => {
    };
  const r = (l) => {
    if (n && n(l), e instanceof Array) {
      let a = !1;
      e.forEach((s) => {
        s.contains && s.contains(l.target) && (a = !0), s.forEach && s.forEach((c) => {
          c.contains && c.contains(l.target) && (a = !0);
        });
      }), a || t && t();
    } else
      e.contains(l.target) || t && t();
  }, i = () => {
    document.removeEventListener("mousedown", r);
  };
  return document.addEventListener("mousedown", r), i;
}
let Il = 5e3;
function rt() {
  return Il++;
}
function zl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function Nt(e) {
  const {
    el: t
  } = e, n = (i) => {
    i.target && t().contains(i.target) && (t().classList.remove(e.startClass), e.onLeave && e.onLeave()), t().removeEventListener("transitionend", n);
  }, r = (i) => {
    i.target && t().contains(i.target) && e.enterEndClass && t().classList.add(e.enterEndClass), t().removeEventListener("transitionend", r);
  };
  return he(() => {
    t() && t().removeEventListener("transitionend", n), t() && t().removeEventListener("transitionend", r);
  }), {
    enter() {
      t() && (t().classList.add(e.startClass), t().removeEventListener("transitionend", n), t().removeEventListener("transitionend", r), zl(() => {
        t().addEventListener("transitionend", r), t().classList.add(e.activeClass), e.onEnter && e.onEnter();
      }));
    },
    leave() {
      t() && (t().classList.remove(e.activeClass), e.enterEndClass && t().classList.remove(e.enterEndClass), t().addEventListener("transitionend", n));
    }
  };
}
function Nl() {
  const [e, t] = K(!1);
  return [e, () => {
    t(!0), setTimeout(() => {
      t(!1);
    }, 1e3);
  }];
}
var Ol = /* @__PURE__ */ x('<span class=cm-loading><svg viewBox="25 25 50 50"width=1em height=1em stroke=currentColor><circle cx=50 cy=50 r=20>');
const mt = (e) => {
  const t = Zr({
    size: 14,
    color: "#fff"
  }, e);
  return (() => {
    var n = Ol(), r = n.firstChild, i = r.firstChild;
    return n.style.setProperty("display", "inline-flex"), r.style.setProperty("transform-origin", "center"), r.style.setProperty("animation", "cm-loading-rotate 2s linear infinite"), i.style.setProperty("fill", "none"), i.style.setProperty("stroke-width", "6"), i.style.setProperty("stroke-dasharray", "2, 200"), i.style.setProperty("stroke-dashoffset", "0"), i.style.setProperty("stroke-linecap", "round"), i.style.setProperty("animation", "cm-loading-dash 1.5s ease-in-out infinite"), B((l) => {
      var a = `${t.size}px`, s = t.color;
      return a !== l.e && ((l.e = a) != null ? n.style.setProperty("font-size", a) : n.style.removeProperty("font-size")), s !== l.t && ((l.t = s) != null ? n.style.setProperty("color", s) : n.style.removeProperty("color")), l;
    }, {
      e: void 0,
      t: void 0
    }), n;
  })();
};
var Bl = /* @__PURE__ */ x("<div>");
const li = Ee();
function ym(e) {
  const t = () => U(e, {
    "cm-button-group": !0
  }), [n, r] = de(e, ["classList", "children", "type", "theme", "size", "disabled"]);
  return u(li.Provider, {
    get value() {
      return {
        type: n.type,
        theme: n.theme,
        size: n.size,
        disabled: n.disabled
      };
    },
    get children() {
      var i = Bl();
      return ye(i, te({
        get classList() {
          return t();
        }
      }, r), !1, !0), m(i, () => n.children), i;
    }
  });
}
var ar = /* @__PURE__ */ x("<span class=cm-button-icon>"), Vl = /* @__PURE__ */ x("<button type=button>");
const Ne = (e) => {
  const [t, n] = Nl(), r = e.iconAlign || "left", i = Se(li), l = () => e.type || i?.type || "default", a = () => e.size || i?.size, s = () => e.theme || i?.theme || "solid", c = () => e.shape || i?.shape || "square", d = () => e.disabled || i?.disabled, o = () => U(e, {
    "cm-button": !0,
    [`cm-button-icon-${r}`]: !0,
    "cm-click-animating": t(),
    "cm-button-block": e.block,
    [`cm-button-${l()}`]: l(),
    [`cm-button-theme-${s()}`]: s(),
    [`cm-button-${a()}`]: a(),
    "cm-button-active": e.active,
    "cm-button-circle": c() === "circle",
    "cm-button-round": c() === "round",
    "cm-button-icon-only": !!e.icon && !e.children,
    "cm-button-empty": !e.icon && !e.children
  }), [h, g] = de(e, ["classList", "class", "onClick", "style", "title", "type", "block", "size", "active", "shape", "icon", "children", "iconAlign", "disabled", "loading", "ref"]);
  function $(f) {
    d() || h.loading || h.onClick && h.onClick(f);
  }
  const w = r === "left" ? [ee(() => ee(() => !!h.loading)() ? u(mt, {}) : ee(() => !!h.icon)() ? (() => {
    var f = ar();
    return m(f, () => h.icon), f;
  })() : null), ee(() => h.children)] : [ee(() => h.children), ee(() => ee(() => !!h.loading)() ? u(mt, {}) : ee(() => !!h.icon)() ? (() => {
    var f = ar();
    return m(f, () => h.icon), f;
  })() : null)];
  return (() => {
    var f = Vl(), v = h.ref;
    return typeof v == "function" ? Z(v, f) : h.ref = f, ye(f, te({
      get classList() {
        return o();
      },
      get style() {
        return h.style;
      },
      get title() {
        return h.title;
      },
      get disabled() {
        return d();
      }
    }, g, {
      onMouseUp: n,
      onClick: $
    }), !1, !0), m(f, w), f;
  })();
};
var Hl = /* @__PURE__ */ x("<div>");
const st = (e) => {
  const t = () => e.dir ?? "h", n = () => e.wrap ?? !1, r = () => e.inline ?? !1, i = () => e.size ?? 8, l = () => e.align ?? "", a = () => U(e, "cm-space", {
    [`cm-space-${t()}`]: t(),
    [`cm-space-align-${l()}`]: l(),
    [`cm-space-justify-${e.justify}`]: !!e.justify,
    "cm-space-wrap": n(),
    "cm-space-inline": r()
  }), s = () => be(e, {
    gap: i() + "px"
  });
  return (() => {
    var c = Hl();
    return m(c, () => e.children), B((d) => {
      var o = a(), h = s(), g = e.id, $ = e.title;
      return d.e = j(c, o, d.e), d.t = W(c, h, d.t), g !== d.a && ne(c, "id", d.a = g), $ !== d.o && ne(c, "title", d.o = $), d;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), c;
  })();
};
var Yl = /* @__PURE__ */ x("<div>");
function Zn(e) {
  const [t, n] = de(e, ["classList", "class", "style", "size", "children"]), r = () => U(e, "cm-view"), i = () => be(e, {
    flex: `0 1 ${t.size}`
  });
  return (() => {
    var l = Yl();
    return ye(l, te({
      get classList() {
        return r();
      },
      get style() {
        return i();
      }
    }, n), !1, !0), m(l, () => t.children), l;
  })();
}
function $m(e) {
  const t = () => U(e, "cm-h-view"), [n, r] = de(e, ["classList", "class"]);
  return u(Zn, te({
    get classList() {
      return t();
    }
  }, r));
}
function wm(e) {
  const t = () => U(e, "cm-v-view"), [n, r] = de(e, ["classList", "class"]);
  return u(Zn, te({
    get classList() {
      return t();
    }
  }, r));
}
function bm(e) {
  const t = () => U(e, "cm-fixed-view"), [n, r] = de(e, ["classList", "class"]);
  return u(Zn, te({
    get classList() {
      return t();
    }
  }, r));
}
var ql = /* @__PURE__ */ x("<div>");
function jl(e) {
  const t = () => U(e, "cm-both-side");
  return (() => {
    var n = ql();
    return m(n, () => e.children), B((r) => {
      var i = t(), l = e.style;
      return r.e = j(n, i, r.e), r.t = W(n, l, r.t), r;
    }, {
      e: void 0,
      t: void 0
    }), n;
  })();
}
var Wl = /* @__PURE__ */ x("<div>");
function xm(e) {
  const t = () => U(e, "cm-view-center"), n = be(e, {
    width: e.width + "px",
    height: e.height + "px"
  }), [r, i] = de(e, ["classList", "class", "style", "width", "height", "children"]);
  return (() => {
    var l = Wl();
    return ye(l, te({
      get classList() {
        return t();
      },
      get style() {
        return n();
      }
    }, i), !1, !0), m(l, () => r.children), l;
  })();
}
var Ul = /* @__PURE__ */ x("<span>"), Xl = /* @__PURE__ */ x("<div>"), Kl = /* @__PURE__ */ x('<svg width=24 height=8 xmlns=http://www.w3.org/2000/svg><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z"opacity=1></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z">'), Gl = /* @__PURE__ */ x("<div><div>");
function Jn(e) {
  const [t, n] = de(e, ["align", "trigger", "disabled", "arrow", "style", "class", "classList", "hideDelay", "onVisibleChange", "title", "content", "visible", "theme", "ref", "confirm", "okText", "okType", "cancelText", "cancelType", "onOk", "onCancel", "children", "contentStyle", "offset", "clsPrefix", "varName", "showCancel", "arrowPointAtCenter"]), [r, i] = De(t, "visible", !1), [l, a] = K(r()), [s, c] = K(ir(0, 1e6)), [d, o] = K(!1);
  let h;
  const g = t.clsPrefix ?? "cm-popover", $ = t.varName ?? "popover";
  let w, f, v;
  const y = () => t.offset || 0, C = () => t.align || "top", _ = () => t.confirm ? "click" : t.trigger || "hover", L = rt();
  let F = null;
  const N = t.hideDelay || 200, P = () => {
    F && (clearTimeout(F), F = null);
  }, D = () => {
    t.disabled || _() === "hover" && (P(), i(!0), t.onVisibleChange && t.onVisibleChange(!0));
  }, E = () => {
    _() === "hover" && P();
  }, b = () => {
    t.disabled || _() === "hover" && (F = setTimeout(() => {
      i(!1), t.onVisibleChange && t.onVisibleChange(!1);
    }, N));
  }, k = () => {
    b();
  }, M = () => {
    t.disabled || (P(), _() === "focus" && (i(!0), t.onVisibleChange && t.onVisibleChange(!0)));
  }, S = () => {
    _() === "focus" && (F = setTimeout(() => {
      i(!1), t.onVisibleChange && t.onVisibleChange(!1);
    }, N));
  }, O = (X) => {
    if (!t.disabled && (X.preventDefault(), X.stopPropagation(), _() === "click")) {
      const J = r();
      i(!J), t.onVisibleChange && t.onVisibleChange(!J);
    }
  }, R = Ue(t.theme) ? "" : t.theme, T = () => U(t, `${g}-inner`, {
    [`${g}-with-arrow`]: t.arrow,
    [`${g}-with-arrow-center`]: t.arrowPointAtCenter,
    [`${g}-confirm`]: t.confirm,
    [`${g}-${R}`]: R
  }), I = Nt({
    el: () => v,
    startClass: `${g}-inner-visible`,
    activeClass: `${g}-inner-show`,
    onLeave: () => {
      a(!1);
    },
    onEnter: () => {
      a(!0);
    }
  });
  dt(() => {
    r() ? I.enter() : I.leave();
  });
  const A = () => {
    if (l(), s(), w) {
      let X = C();
      t.arrowPointAtCenter && (["top", "topLeft", "topRight"].includes(X) && (X = "top"), ["bottom", "bottomLeft", "bottomRight"].includes(X) && (X = "bottom"), ["left", "leftTop", "leftBottom"].includes(X) && (X = "left"), ["right", "rightTop", "rightBottom"].includes(X) && (X = "right"));
      const J = Fn(X, w);
      return J.top = J.top + document.documentElement.scrollTop + "px", J.left = J.left + document.documentElement.scrollLeft + "px", J["z-index"] = L, Object.assign(J, t.style || {}, {
        [`--cui-${$}-background-color`]: Ue(t.theme) ? t.theme : "",
        [`--cui-${$}-offset`]: `${y()}px`
      }), J;
    }
  }, z = async () => {
    o(!0);
    const X = await t.onOk?.();
    o(!1), (X === void 0 || X === !0) && (i(!1), t.onVisibleChange && t.onVisibleChange(!1));
  }, H = () => {
    t.onCancel?.(), i(!1), t.onVisibleChange && t.onVisibleChange(!1);
  };
  ge(() => {
    me || (w = h.nextElementSibling, h.parentNode.removeChild(h), w && (_() === "hover" && (w.addEventListener("mouseenter", D, !1), w.addEventListener("mouseleave", b, !1)), _() === "click" && (w.addEventListener("click", O, !1), f = Tn([v, w], () => {
      d() || i(!1);
    })), _() === "focus" && (w.addEventListener("focus", M, !1), w.addEventListener("blur", S, !1))));
  }), he(() => {
    me || (w && (_() === "hover" && (w.removeEventListener("mouseenter", D), w.removeEventListener("mouseleave", b)), _() === "click" && w.removeEventListener("click", O), _() === "focus" && (w.removeEventListener("focus", M, !1), w.removeEventListener("blur", S, !1))), f && f());
  });
  const Y = `${g}-portal`;
  t.ref && t.ref({
    updatePosition() {
      c(ir(0, 1e6));
    }
  });
  const q = t.okText ?? "确 定", G = t.cancelText ?? "取 消";
  return [(() => {
    var X = Ul(), J = h;
    return typeof J == "function" ? Z(J, X) : h = X, X.style.setProperty("display", "none"), X;
  })(), ee(() => t.children), u(ln, {
    get mount() {
      return nt(Y, Y);
    },
    get children() {
      var X = Gl(), J = X.firstChild, ce = v;
      return typeof ce == "function" ? Z(ce, X) : v = X, ye(X, te(n, {
        get style() {
          return A();
        },
        get ["x-placement"]() {
          return C();
        },
        get classList() {
          return T();
        },
        onMouseEnter: E,
        onMouseLeave: k
      }), !1, !0), m(X, u(V, {
        get when() {
          return t.title;
        },
        get children() {
          var re = Xl();
          return pe(re, `${g}-title`), m(re, () => t.title), re;
        }
      }), J), pe(J, `${g}-body`), m(J, () => t.content), m(X, u(V, {
        get when() {
          return t.confirm;
        },
        get children() {
          return u(st, {
            class: `${g}-tools`,
            justify: "end",
            get children() {
              return [u(V, {
                get when() {
                  return t.showCancel;
                },
                get children() {
                  return u(Ne, {
                    get type() {
                      return t.cancelType || "default";
                    },
                    size: "small",
                    onClick: H,
                    children: G
                  });
                }
              }), u(Ne, {
                get type() {
                  return t.okType || "primary";
                },
                size: "small",
                onClick: z,
                get loading() {
                  return d();
                },
                children: q
              })];
            }
          });
        }
      }), null), m(X, u(V, {
        get when() {
          return t.arrow;
        },
        get children() {
          var re = Kl();
          return ne(re, "class", `${g}-icon-arrow`), re;
        }
      }), null), B((re) => W(J, t.contentStyle, re)), X;
    }
  })];
}
function Jt(e) {
  const t = e.align ?? "top", n = e.arrow ?? !0;
  return u(Jn, te(e, {
    clsPrefix: "cm-tooltip",
    varName: "tooltip",
    align: t,
    arrow: n,
    confirm: !1
  }));
}
var sr = /* @__PURE__ */ x("<div class=cm-avatar-list-item>"), Zl = /* @__PURE__ */ x("<div>");
function Cm(e) {
  const [t, n] = de(e, ["classList", "class", "size", "align", "gutter", "max", "excessStyle", "children"]), r = () => U(t, "cm-avatar-list", {
    [`cm-avatar-list-${t.size}`]: t.size
  }), i = () => t.max ?? Number.MAX_VALUE, l = Ge(() => t.children), a = () => l.toArray(), s = () => a().length, c = () => (t.gutter ?? (t.size === "small" ? -8 : -12)) + "px";
  return (() => {
    var d = Zl();
    return ye(d, te({
      get classList() {
        return r();
      }
    }, n), !1, !0), m(d, u(le, {
      get each() {
        return a();
      },
      children: (o, h) => {
        if (o.asProps = !1, h() < i())
          return (() => {
            var g = sr();
            return m(g, u(Jt, {
              get align() {
                return t.align || "top";
              },
              get content() {
                return o.title;
              },
              get children() {
                return u(lr, te(o, {
                  get size() {
                    return t.size;
                  }
                }));
              }
            })), B(($) => ($ = h() > 0 ? c() : 0) != null ? g.style.setProperty("margin-left", $) : g.style.removeProperty("margin-left")), g;
          })();
      }
    }), null), m(d, u(V, {
      get when() {
        return s() > i();
      },
      get children() {
        var o = sr();
        return m(o, u(lr, {
          get size() {
            return t.size;
          },
          get style() {
            return t.excessStyle;
          },
          get children() {
            return ["+", ee(() => s() - i())];
          }
        })), B((h) => (h = c()) != null ? o.style.setProperty("margin-left", h) : o.style.removeProperty("margin-left")), o;
      }
    }), null), d;
  })();
}
var Jl = /* @__PURE__ */ x("<div><div class=cm-back-top-inner>");
function km(e) {
  const [t, n] = K(!1), r = () => U(e, "cm-back-top", {
    "cm-back-top-show": t()
  }), i = e.bottom ?? 30, l = e.right ?? 30, a = e.height ?? 400, s = e.duration ?? 1e3, c = () => ({
    ...e.style,
    bottom: `${i}px`,
    right: `${l}px`
  }), d = () => {
    const h = document.documentElement.scrollTop || document.body.scrollTop;
    ii(window, h, 0, s), e.onClick && e.onClick();
  }, o = () => {
    n(window.pageYOffset >= a);
  };
  return ge(() => {
    window.addEventListener("scroll", o), window.addEventListener("resize", o);
  }), he(() => {
    window.removeEventListener("scroll", o), window.removeEventListener("resize", o);
  }), (() => {
    var h = Jl(), g = h.firstChild;
    return h.$$click = d, m(g, () => e.children), B(($) => {
      var w = r(), f = c();
      return $.e = j(h, w, $.e), $.t = W(h, f, $.t), $;
    }, {
      e: void 0,
      t: void 0
    }), h;
  })();
}
ae(["click"]);
var Ql = /* @__PURE__ */ x("<sup>"), pl = /* @__PURE__ */ x("<sup class=cm-badge-dot>"), cr = /* @__PURE__ */ x("<span>"), ea = /* @__PURE__ */ x("<span class=cm-badge-status-text>");
function ta(e) {
  if (e && (e.startsWith("#") || e.startsWith("rgb") || e.startsWith("hsl"))) {
    const t = new Option().style;
    return t.color = e, t.color.startsWith("rgb");
  }
  return !1;
}
function _m(e) {
  const t = e.overflowCount ?? 99, n = () => U(e, "cm-badge", {
    "cm-badge-status": e.status
  }), r = () => {
    const c = {};
    return e.offset && e.offset.length === 2 && (c["margin-top"] = `${e.offset[0]}px`, c["margin-right"] = `${e.offset[1]}px`), c;
  }, i = () => e.count && e.count > t ? Math.min(t, e.count) + "+" : e.count, l = () => ({
    "cm-badge-status-dot": !0,
    [`cm-badge-status-${e.status}`]: !!e.status,
    [`cm-badge-status-${e.color}`]: !!e.color && e.color.indexOf("#") === -1
  }), a = () => ({
    "background-color": ta(e.color) ? e.color : ""
  }), s = () => ({
    "cm-badge-count": !0,
    [`cm-badge-count-${e.type}`]: !!e.type
  });
  return (() => {
    var c = cr();
    return m(c, () => e.children, null), m(c, u(V, {
      get when() {
        return !e.status && !e.color;
      },
      get fallback() {
        return [(() => {
          var d = cr();
          return B((o) => {
            var h = l(), g = a();
            return o.e = j(d, h, o.e), o.t = W(d, g, o.t), o;
          }, {
            e: void 0,
            t: void 0
          }), d;
        })(), (() => {
          var d = ea();
          return m(d, () => e.text), d;
        })()];
      },
      get children() {
        return [u(V, {
          get when() {
            return e.count !== void 0 || e.text !== void 0;
          },
          get children() {
            var d = Ql();
            return m(d, i, null), m(d, () => e.text, null), B((o) => {
              var h = s(), g = r();
              return o.e = j(d, h, o.e), o.t = W(d, g, o.t), o;
            }, {
              e: void 0,
              t: void 0
            }), d;
          }
        }), u(V, {
          get when() {
            return e.dot !== void 0;
          },
          get children() {
            var d = pl();
            return B((o) => W(d, r(), o)), d;
          }
        })];
      }
    }), null), B((d) => j(c, n(), d)), c;
  })();
}
var na = /* @__PURE__ */ x("<div><div class=cm-badge-ribbon-inner><span class=cm-badge-ribbon-text></span><div class=cm-badge-ribbon-corner>");
function Lm(e) {
  const [t, n] = de(e, ["children", "text", "class", "classList", "status", "color", "style", "align"]), r = t.align ?? "end", i = () => U(e, "cm-badge-ribbon", {
    [`cm-badge-ribbon-status-${t.status}`]: !!t.status,
    [`cm-badge-ribbon-${r}`]: !!r,
    [`cm-badge-ribbon-${t.color}`]: !!t.color && !Ue(t.color)
  }), l = () => be(t, {
    "--cui-background-color": Ue(t.color) ? t.color : ""
  });
  return (() => {
    var a = na(), s = a.firstChild, c = s.firstChild;
    return ye(a, te({
      get classList() {
        return i();
      },
      get style() {
        return l();
      }
    }, n), !1, !0), m(a, () => e.children, s), m(c, () => t.text), a;
  })();
}
const ai = (e) => {
  const t = Ge(() => e), [n, r] = we({
    default: []
  });
  return dt(Qi(t, () => {
    r("default", []);
    for (const i of t.toArray()) {
      if (!i.name) {
        r("default", [...n.default, () => i]);
        continue;
      }
      r(i.name, () => i);
    }
  })), new Proxy(ti(n), {
    get(i, l) {
      return l === "default" ? i[l] : i[l]?.children;
    }
  });
};
var ra = /* @__PURE__ */ x("<div class=cm-banner-icon>"), ia = /* @__PURE__ */ x("<div class=cm-banner-title>"), la = /* @__PURE__ */ x("<div class=cm-banner-desc>"), aa = /* @__PURE__ */ x("<span class=cm-banner-close>"), sa = /* @__PURE__ */ x("<div class=cm-banner-extra>"), ca = /* @__PURE__ */ x("<div><div class=cm-banner-body><div class=cm-banner-content><div class=cm-banner-content-body>");
function Sm(e) {
  const [t, n] = De(e, "visible", !0), r = () => U(e, "cm-banner", {
    [`cm-banner-${e.type}`]: e.type,
    ["cm-banner-bordered"]: e.bordered,
    ["cm-banner-full"]: e.fullMode ?? !0,
    ["cm-banner-not-full"]: e.fullMode === !1
  }), i = () => {
    let c = null;
    switch (e.type) {
      case "info": {
        c = u(gt, {});
        break;
      }
      case "success": {
        c = u(zt, {});
        break;
      }
      case "warning": {
        c = u(It, {});
        break;
      }
      case "error": {
        c = u(Rt, {});
        break;
      }
      default:
        c = u(gt, {});
    }
    return c;
  }, l = () => {
    n(!1), e.onClose && e.onClose();
  }, a = ai(e.children), s = e.icon === null ? null : e.icon ?? i();
  return u(V, {
    get when() {
      return t();
    },
    get children() {
      var c = ca(), d = c.firstChild, o = d.firstChild, h = o.firstChild;
      return m(o, u(V, {
        when: s,
        get children() {
          var g = ra();
          return m(g, s), g;
        }
      }), h), m(h, u(V, {
        get when() {
          return e.title;
        },
        get children() {
          var g = ia();
          return m(g, () => e.title), g;
        }
      }), null), m(h, u(V, {
        get when() {
          return a.default;
        },
        get children() {
          var g = la();
          return m(g, () => a.default), g;
        }
      }), null), m(d, u(V, {
        get when() {
          return e.closeIcon !== null;
        },
        get children() {
          var g = aa();
          return g.$$click = l, m(g, () => e.closeIcon ?? u(ze, {})), g;
        }
      }), null), m(c, u(V, {
        get when() {
          return a.extra;
        },
        get children() {
          var g = sa();
          return m(g, () => a.extra), g;
        }
      }), null), B((g) => j(c, r(), g)), c;
    }
  });
}
ae(["click"]);
function oa(e) {
  return e;
}
var da = /* @__PURE__ */ x("<span>"), ua = /* @__PURE__ */ x("<span class=cm-breadcrumb-wrap><a></a><span class=cm-breadcrumb-separator>");
function ha(e) {
  const [t, n] = de(e, ["classList", "link", "icon", "children"]), r = () => U(e, "cm-breadcrumb-item");
  return (() => {
    var i = ua(), l = i.firstChild, a = l.nextSibling;
    return m(l, u(st, {
      size: 4,
      align: "center",
      get children() {
        return [u(V, {
          get when() {
            return t.icon;
          },
          get children() {
            return t.icon;
          }
        }), (() => {
          var s = da();
          return m(s, () => t.children), s;
        })()];
      }
    })), m(a, () => e.separator || "/"), B((s) => {
      var c = r(), d = e.link;
      return s.e = j(l, c, s.e), d !== s.t && ne(l, "href", s.t = d), s;
    }, {
      e: void 0,
      t: void 0
    }), i;
  })();
}
var fa = /* @__PURE__ */ x("<div>");
function ga(e) {
  const t = Ge(() => e.children), n = () => t.toArray(), r = () => U(e, "cm-breadcrumb");
  return (() => {
    var i = fa();
    return m(i, u(le, {
      get each() {
        return n();
      },
      children: (l) => (l.separator = e.separator ?? "/", u(ha, l))
    })), B((l) => {
      var a = r(), s = e.style;
      return l.e = j(i, a, l.e), l.t = W(i, s, l.t), l;
    }, {
      e: void 0,
      t: void 0
    }), i;
  })();
}
ga.Item = oa;
var ma = /* @__PURE__ */ x("<div class=cm-card-cover>"), va = /* @__PURE__ */ x("<div><div class=cm-card-body>"), ya = /* @__PURE__ */ x("<div class=cm-card-head>"), $a = /* @__PURE__ */ x("<div class=cm-card-footer>");
function Mm(e) {
  const t = () => U(e, "cm-card", {
    "cm-card-bordered": e.bordered,
    "cm-card-rised": e.rised,
    [`cm-card-${e.size}`]: e.size
  });
  return (() => {
    var n = va(), r = n.firstChild;
    return m(n, (() => {
      var i = ee(() => !!e.title);
      return () => i() ? (() => {
        var l = ya();
        return m(l, () => e.title), B((a) => W(l, e.headStyle, a)), l;
      })() : null;
    })(), r), m(n, u(V, {
      get when() {
        return e.cover;
      },
      get children() {
        var i = ma();
        return m(i, () => e.cover), i;
      }
    }), r), m(r, () => e.children), m(n, (() => {
      var i = ee(() => !!e.footer);
      return () => i() ? (() => {
        var l = $a();
        return m(l, () => e.footer), l;
      })() : null;
    })(), null), B((i) => {
      var l = t(), a = e.style, s = e.bodyStyle;
      return i.e = j(n, l, i.e), i.t = W(n, a, i.t), i.a = W(r, s, i.a), i;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), n;
  })();
}
function wa(e) {
  const t = Le();
  return e.id = t, e;
}
function ba(e, t) {
  const {
    threshold: n = 50,
    onSwipe: r,
    onSwipeEnd: i,
    onSwipeStart: l
  } = t, a = En({
    x: 0,
    y: 0
  }), s = (M, S) => {
    a.x = M, a.y = S;
  }, c = En({
    x: 0,
    y: 0
  }), d = (M, S) => {
    c.x = M, c.y = S;
  }, o = je(() => a.x - c.x), h = je(() => a.y - c.y), {
    max: g,
    abs: $
  } = Math, w = je(() => g($(o()), $(h())) >= n), [f, v] = K(!1), [y, C] = K(!1), [_, L] = K(0);
  let F;
  const N = je(() => w() ? $(o()) > $(h()) ? o() > 0 ? "left" : "right" : h() > 0 ? "up" : "down" : "none"), P = (M) => {
    const S = M.buttons === 0, O = M.buttons === 1;
    return t.pointerTypes?.includes(M.pointerType) ?? (S || O) ?? !0;
  }, D = (M) => {
    if (!P(M))
      return;
    M.preventDefault(), C(!0), F = performance.now(), e?.style?.setProperty("touch-action", "none"), M.target?.setPointerCapture(M.pointerId);
    const {
      clientX: O,
      clientY: R
    } = M;
    s(O, R), d(O, R), l?.(M);
  }, E = (M) => {
    if (!P(M) || !y())
      return;
    const {
      clientX: S,
      clientY: O
    } = M;
    d(S, O), !f() && w() && v(!0), f() && r?.(M);
  }, b = (M) => {
    if (!P(M))
      return;
    const S = performance.now() - F;
    L(S), f() && i?.(M, N(), S), C(!1), v(!1), e?.style?.setProperty("touch-action", "initial");
  };
  return e.addEventListener("pointerdown", D), e.addEventListener("pointermove", E), e.addEventListener("pointerup", b), {
    isSwiping: f,
    direction: N,
    posStart: a,
    posEnd: c,
    distanceX: o,
    distanceY: h,
    duration: _,
    stop: () => {
      e.removeEventListener("pointerdown", D), e.removeEventListener("pointermove", E), e.removeEventListener("pointerup", b);
    }
  };
}
var xa = /* @__PURE__ */ x("<div>");
function gn(e) {
  const t = Ma();
  let n, r;
  const [i, l] = K({});
  Q(() => {
    const s = t?.store.activeKey, c = t?.store.prevKey, d = t?.store.nextKey, o = {
      width: typeof t?.itemsPerView == "number" ? `${1 / t?.itemsPerView * 100}%` : ""
    };
    return t?.effect === "card" && (s === e.data.id ? Object.assign(o, {
      width: "60%",
      opacity: 1,
      "z-index": 1,
      transform: "translateX(-50%) translateZ(0)"
    }) : c === e.data.id ? Object.assign(o, {
      width: "60%",
      opacity: 0.4,
      transform: "translateX(-100%) translateZ(-200px)"
    }) : d === e.data.id ? Object.assign(o, {
      width: "60%",
      opacity: 0.4,
      transform: "translateX(0%) translateZ(-200px)"
    }) : Object.assign(o, {
      width: "50%",
      opacity: 0,
      transform: "translateX(-50%) translateZ(-400px)"
    })), l(be(e, o));
  });
  const a = () => U(e, "cm-carousel-item");
  return ge(() => {
    if (t?.draggable) {
      const s = ba(n, {
        threshold: 10,
        onSwipe: () => {
          t?.onSwipe(s);
        },
        onSwipeEnd: (c, d, o) => {
          t?.onSwipeEnd(d, o);
        },
        onSwipeStart: () => {
          t?.onSwipeStart(s);
        }
      });
      he(() => {
        s.stop();
      });
    }
    r = Nt({
      el: () => n,
      startClass: "cm-carousel-item-fade-start",
      activeClass: "cm-carousel-item-fade-active"
    });
  }), Q(() => {
    const s = t?.store.activeKey, c = t?.store.unActiveKey;
    t?.effect === "fade" && (s === e.data.id && r.enter(), c === e.data.id && r.leave());
  }), (() => {
    var s = xa(), c = n;
    return typeof c == "function" ? Z(c, s) : n = s, m(s, () => e.data.children), B((d) => {
      var o = a(), h = i();
      return d.e = j(s, o, d.e), d.t = W(s, h, d.t), d;
    }, {
      e: void 0,
      t: void 0
    }), s;
  })();
}
var Ca = /* @__PURE__ */ x("<div x-placement=left>"), ka = /* @__PURE__ */ x("<div x-placement=right>"), _a = /* @__PURE__ */ x("<div><div><ul></ul></div><div class=cm-carousel-list>"), La = /* @__PURE__ */ x("<li>");
const si = Ee();
function Sa(e) {
  const [t, n] = De(e, "activeIndex", 0), [r, i] = K(t()), l = () => e.arrow ?? !1, a = () => e.dotType ?? "dot", s = e.autoPlay ?? !1, c = e.duration ?? 4e3, d = e.draggable ?? !1, o = () => e.effect ?? "slide", h = e.itemsPerView ?? 1, g = () => e.dir ?? "h", $ = e.dotColor ?? "rgba(var(--cui-grey-8), 0.3)", w = e.dotActiveColor ?? "rgba(var(--cui-white), 1)", f = () => e.dotAlign ?? (g() === "h" ? "bottom" : "right"), v = e.gutter ?? 0, y = Ge(() => e.children), C = () => y.toArray(), _ = () => U(e, "cm-carousel", {
    [`cm-carousel-${o()}`]: o(),
    [`cm-carousel-${g()}`]: g()
  });
  let L, F, N = null;
  const P = () => ({
    "cm-carousel-arrow": !0,
    [`cm-carousel-arrow-${l()}`]: l()
  }), D = () => ({
    "cm-carousel-actions": !0,
    "cm-carousel-actions-with-arrow": l(),
    [`cm-carousel-actions-${f()}`]: !!f()
  }), E = () => ({
    "cm-carousel-dots": !0,
    [`cm-carousel-dots-${a()}`]: !!a(),
    [`cm-carousel-dots-${f()}`]: !!f()
  });
  let b = !1;
  const [k, M] = we({
    data: C(),
    activeIndex: t(),
    unActiveIndex: -1,
    activeKey: "",
    unActiveKey: "",
    nextKey: "",
    prevKey: "",
    startPos: 0,
    isSwiping: !1,
    currentPos: 0,
    dir: "normal"
  }), [S, O] = K(h !== "auto" ? new Array(Math.ceil(k.data.length / h)).fill(1) : []), R = () => o() === "slide" && h === 1 || o() === "card" || o() === "fade", [T, I] = K({}), A = () => F ? g() === "h" ? F.getBoundingClientRect().width : F.getBoundingClientRect().height : 0, z = () => {
    if (F) {
      const ie = F.querySelectorAll(".cm-carousel-item");
      return Array.from(ie).reduce((ke, Ce) => ke += g() === "h" ? Ce.getBoundingClientRect().width : Ce.getBoundingClientRect().height, 0) + v * (ie.length - 1);
    }
    return 0;
  };
  Q(() => {
    if (!F)
      return {};
    o() === "slide" && H();
  });
  const H = () => {
    const ie = r();
    if (t(), g(), ie === S().length) {
      F.style.transitionDuration = "0ms";
      let se = 0;
      Ie(() => {
        k.isSwiping && k.activeIndex === S().length - 1 && (se = k.currentPos - k.startPos), F.style.transform = g() === "h" ? `translateX(${se}px)` : `translateY(${se}px)`;
      });
    }
    if (ie === -1) {
      const se = A() + v;
      F.style.transitionDuration = "0ms";
      let ke = 0;
      Ie(() => {
        k.isSwiping && k.activeIndex === 0 && (ke = k.currentPos - k.startPos), F.style.transform = g() === "h" ? `translateX(${-(S().length + 1) * se + ke}px)` : `translateY(${-(S().length + 1) * se + ke}px)`;
      });
    }
    Ie(() => {
      Y();
    });
  }, Y = () => {
    o() === "slide" && setTimeout(() => {
      const ie = t() + (R() ? 1 : 0), se = A() + v, ke = b ? 300 : 0;
      let Ce = ie * se;
      const $e = z();
      Ce + A() > $e && (Ce = Ce - A() + $e % A());
      const Yt = g() === "h" ? `translateX(${-Ce}px)` : `translateY(${-Ce}px)`;
      I({
        gap: `${v}px`,
        "transition-duration": `${ke}ms`,
        transform: Yt
      }), F.setAttribute("data-offset", -Ce), b = !0;
    });
  }, q = () => {
    clearTimeout(N), G(), N = setTimeout(() => {
      q();
    }, c);
  };
  ge(() => {
    L && (setTimeout(() => {
      if (h === "auto") {
        const ie = A(), se = z(), ke = Math.ceil(se / ie);
        ie && O(new Array(ke).fill(1));
      } else
        O(new Array(Math.ceil(k.data.length / h)).fill(1));
    }), s && (N = setTimeout(() => {
      q();
    }, c)));
  }), he(() => {
    N && clearTimeout(N);
  }), Q(() => {
    k.unActiveIndex >= 0 && (o() === "fade" || o() === "card") && M("unActiveKey", k.data[k.unActiveIndex].id);
  }), Q(() => {
    const ie = t();
    Re(() => {
      M("activeIndex", ie), (o() === "fade" || o() === "card") && (M("prevKey", k.data[(S().length + ie - 1) % S().length].id), M("activeKey", k.data[ie].id), M("nextKey", k.data[(ie + 1) % S().length].id));
    });
  });
  const G = () => {
    Re(() => {
      if (M("unActiveIndex", k.activeIndex), R())
        i(k.activeIndex + 1), n((k.activeIndex + 1) % S().length);
      else {
        const ie = k.activeIndex, se = Math.min(ie + 1, S().length - 1);
        i(se), n(se), se === ie && d && Y();
      }
    }), e.onChange && e.onChange(t());
  }, X = () => {
    Re(() => {
      if (M("unActiveIndex", k.activeIndex), R())
        i(k.activeIndex - 1), n((S().length + k.activeIndex - 1) % S().length);
      else {
        const ie = k.activeIndex, se = Math.max(k.activeIndex - 1, 0);
        i(se), n(se), se === ie && d && Y();
      }
    }), e.onChange && e.onChange(t());
  }, J = (ie) => {
    Re(() => {
      M("unActiveIndex", k.activeIndex), i(ie), n(ie);
    }), e.onChange && e.onChange(t());
  }, ce = (ie) => {
    o() === "slide" && I({
      gap: `${v}px`,
      "transition-duration": "0ms",
      transform: g() === "h" ? `translateX(${k.startPos - ie.distanceX()}px)` : `translateY(${k.startPos - ie.distanceY()}px)`
    }), M("currentPos", k.startPos - (g() === "h" ? ie.distanceX() : ie.distanceY()));
  }, re = () => {
    const ie = F.getAttribute("data-offset");
    M("isSwiping", !0), M("startPos", parseFloat(ie));
  }, xe = (ie, se) => {
    if (se && se > 500) {
      o() === "slide" && Y();
      return;
    }
    g() === "h" && (ie === "right" ? X() : ie === "left" ? G() : o() === "slide" && Y()), g() === "v" && (ie === "down" ? X() : ie === "up" ? G() : o() === "slide" && Y()), M("isSwiping", !1);
  }, Te = () => be(e, {
    height: (e.height ?? 250) + "px"
  });
  return u(si.Provider, {
    get value() {
      return {
        store: k,
        effect: o(),
        itemsPerView: h,
        onSwipe: ce,
        onSwipeStart: re,
        onSwipeEnd: xe,
        draggable: d
      };
    },
    get children() {
      var ie = _a(), se = ie.firstChild, ke = se.firstChild, Ce = se.nextSibling, $e = L;
      typeof $e == "function" ? Z($e, ie) : L = ie, $ != null ? ke.style.setProperty("--cui-carousel-dot-color", $) : ke.style.removeProperty("--cui-carousel-dot-color"), w != null ? ke.style.setProperty("--cui-carousel-active-dot-color", w) : ke.style.removeProperty("--cui-carousel-active-dot-color"), m(ke, u(le, {
        get each() {
          return S();
        },
        children: (ve, Oe) => {
          const hn = () => ({
            "cm-carousel-dot": !0,
            "cm-carousel-dot-active": k.activeIndex === Oe()
          });
          return (() => {
            var xt = La();
            return xt.$$click = () => {
              J(Oe());
            }, B((fn) => j(xt, hn(), fn)), xt;
          })();
        }
      })), m(se, u(V, {
        get when() {
          return l();
        },
        get children() {
          return u(st, {
            get dir() {
              return f() === "bottom" || f() === "top" ? "h" : "v";
            },
            get children() {
              return [(() => {
                var ve = Ca();
                return ve.$$click = X, m(ve, (() => {
                  var Oe = ee(() => g() === "h");
                  return () => Oe() ? u(We, {}) : u(We, {
                    rotate: 90
                  });
                })()), B((Oe) => j(ve, P(), Oe)), ve;
              })(), (() => {
                var ve = ka();
                return ve.$$click = G, m(ve, (() => {
                  var Oe = ee(() => g() === "h");
                  return () => Oe() ? u(We, {
                    rotate: 180
                  }) : u(We, {
                    rotate: -90
                  });
                })()), B((Oe) => j(ve, P(), Oe)), ve;
              })()];
            }
          });
        }
      }), null);
      var Yt = F;
      return typeof Yt == "function" ? Z(Yt, Ce) : F = Ce, m(Ce, u(V, {
        get when() {
          return R();
        },
        get children() {
          return u(gn, te({
            index: -1,
            get data() {
              return k.data[k.data.length - 1];
            }
          }, () => k.data[k.data.length - 1]));
        }
      }), null), m(Ce, u(le, {
        get each() {
          return k.data;
        },
        children: (ve, Oe) => u(gn, te({
          get key() {
            return ve.id;
          },
          get index() {
            return Oe();
          },
          data: ve
        }, ve))
      }), null), m(Ce, u(V, {
        get when() {
          return R();
        },
        get children() {
          return u(gn, te({
            get index() {
              return k.data.length;
            },
            get data() {
              return k.data[0];
            }
          }, () => k.data[0]));
        }
      }), null), B((ve) => {
        var Oe = _(), hn = Te(), xt = D(), fn = E(), Zi = T();
        return ve.e = j(ie, Oe, ve.e), ve.t = W(ie, hn, ve.t), ve.a = j(se, xt, ve.a), ve.o = j(ke, fn, ve.o), ve.i = W(Ce, Zi, ve.i), ve;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0,
        i: void 0
      }), ie;
    }
  });
}
Sa.Item = wa;
const Ma = () => Se(si);
ae(["click"]);
const Ft = "cm-col", Pn = "cm-col-offset", _t = "cm-row", Dn = "cm-row-gap", yt = {
  xs: "576px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px"
}, ci = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), di = /* @__PURE__ */ new Set(), ui = /* @__PURE__ */ new Set(), hi = "lg";
let fi = !1;
function Ea() {
  for (const e in yt) {
    const t = "cm-grid-" + e;
    if (document.getElementById(t))
      continue;
    const n = document.createElement("style");
    n.id = t, document.head.appendChild(n);
  }
  fi = !0;
}
function on(e, t) {
  fi || Ea(), document.getElementById("cm-grid-" + t).innerHTML += e;
}
function Fa(e, t, n) {
  ci.add(t);
  const r = yt[n], i = n === "xs" ? `.${Ft}-${t}{width: ${e}%}` : `@media (min-width: ${r}) { .${Ft}-${t}{width: ${e}%} }`;
  on(i, n);
}
function Ta(e, t, n) {
  oi.add(t);
  const r = yt[n], i = n === "xs" ? `.${Pn}-${t}{margin-left: ${e}%}` : `@media (min-width: ${r}) { .${Pn}-${t}{margin-left: ${e}%} }`;
  on(i, n);
}
function Pa(e, t, n) {
  di.add(t);
  const r = yt[n], i = n === "xs" ? `.${_t}-${t}{margin-left: -${parseFloat(e) / 2}px; margin-right: -${parseFloat(e) / 2}px}
        .${_t}-${t} .${Ft}{padding-left: ${parseFloat(e) / 2}px; padding-right: ${parseFloat(e) / 2}px}` : `@media (min-width: ${r}) {
            .${_t}-${t}{margin-left: -${parseFloat(e) / 2}px; margin-right: -${parseFloat(e) / 2}px}
            .${_t}-${t} .${Ft}{padding-left: ${parseFloat(e) / 2}px; padding-right: ${parseFloat(e) / 2}px}
        }`;
  on(i, n);
}
function Da(e, t, n) {
  ui.add(t);
  const r = yt[n], i = n === "xs" ? `.${Dn}-${t}{row-gap: ${e}px;}` : `@media (min-width: ${r}) {
            .${Dn}-${t}{row-gap: ${e}px;}
        }`;
  on(i, n);
}
function gi(e, t, n) {
  let r = (e * 100).toFixed(4);
  r = r.substring(0, r.length - 1), n = n ?? hi;
  const i = n + "-" + r.replace(".", "-");
  return t === "grid" ? (ci.has(i) || Fa(r, i, n), `${Ft}-${i}`) : (oi.has(i) || Ta(r, i, n), `${Pn}-${i}`);
}
function Aa(e, t, n) {
  n = n ?? hi;
  const r = typeof e == "number" ? e.toFixed(2) : e[0].toFixed(2), i = typeof e == "number" ? e : e[0], l = typeof e == "number" ? e.toFixed(2) : e[1].toFixed(2), a = typeof e == "number" ? e : e[1];
  if (i || a) {
    const s = [];
    if (i) {
      const c = n + "-" + r.replace(".", "-");
      di.has(c) || Pa(r, c, n), s.push(`${_t}-${c}`);
    }
    if (a) {
      const c = n + "-" + l.replace(".", "-");
      ui.has(c) || Da(l, c, n), s.push(`${Dn}-${c}`);
    }
    return s;
  }
}
function Ra(e, t) {
  return e ? gi(e, "grid", t) : "";
}
function Ia(e, t) {
  return e ? gi(e, "offset", t) : "";
}
function za(e) {
  if (!e)
    return "";
  const t = {};
  if (!Array.isArray(e) && typeof e == "object")
    for (const n in yt) {
      const r = e[n];
      if (r) {
        const i = Aa(r, "gutter", n);
        i && i.forEach((l) => {
          t[l] = !0;
        });
      }
    }
  return t;
}
var Na = /* @__PURE__ */ x("<div>");
const mi = Ee(), Em = (e) => {
  const t = typeof e.gutter == "object" ? za(e.gutter) : {}, n = () => U(e, "cm-row", {
    ...t,
    [`cm-row-${e.justify}`]: e.justify,
    [`cm-row-${e.align}`]: e.align
  }), r = () => {
    const l = {
      ...e.style
    };
    let a = 0, s = 0;
    return typeof e.gutter == "number" && (a = e.gutter ? e.gutter / 2 : 0, s = e.gutter || 0), Array.isArray(e.gutter) && (a = e.gutter[0] ? e.gutter[0] / 2 : 0, s = e.gutter[1] || 0), a && (l["margin-left"] = `-${a}px`, l["margin-right"] = `-${a}px`), s && (l["row-gap"] = `${s}px`), l;
  }, i = Zr({
    gutter: e.gutter || 0
  });
  return u(mi.Provider, {
    value: i,
    get children() {
      var l = Na();
      return m(l, () => e.children), B((a) => {
        var s = n(), c = r();
        return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
      }, {
        e: void 0,
        t: void 0
      }), l;
    }
  });
};
var Oa = /* @__PURE__ */ x("<div>");
const Fm = (e) => {
  const t = Se(mi);
  let n;
  const r = {}, i = {};
  ["xs", "sm", "md", "lg", "xl", "xxl"].forEach((c) => {
    if (e[c]) {
      const d = typeof e[c] == "number" ? e[c] : e[c].grid, o = Ra(d, c);
      o && (r[o] = !0);
      const h = typeof e[c] == "object" ? e[c].offset : 0, g = Ia(h, c);
      g && (i[g] = !0);
    }
  });
  const a = () => {
    const c = Object.keys(r).length > 0, d = Object.keys(i).length > 0, o = {
      ...e.style
    };
    c || (o.flex = `0 0 ${(e.grid || 1) * 100}%`, e.fixWidth && (o["max-width"] = `${(e.grid || 1) * 100}%`)), e.push && (o.left = `${e.push * 100}%`), e.pull && (o.right = `${e.pull * 100}%`), e.offset && !d && (o["margin-left"] = `${e.offset * 100}%`);
    let h = 0;
    return typeof t?.gutter == "number" && (h = t.gutter ? t.gutter / 2 : 0), Array.isArray(t?.gutter) && (h = t.gutter[0] ? t.gutter[0] / 2 : 0), h && (o["padding-left"] = h + "px", o["padding-right"] = h + "px"), e.flex && (e.flex.indexOf(" ") > -1 ? o.flex = e.flex : o.flex = `0 0 ${e.flex}`), o;
  }, s = () => U(e, "cm-col", {
    ...r,
    ...i
  });
  return (() => {
    var c = Oa(), d = n;
    return typeof d == "function" ? Z(d, c) : n = c, m(c, () => e.children), B((o) => {
      var h = s(), g = a();
      return o.e = j(c, h, o.e), o.t = W(c, g, o.t), o;
    }, {
      e: void 0,
      t: void 0
    }), c;
  })();
};
var Ba = /* @__PURE__ */ x("<span class=cm-count-down-prefix>"), Va = /* @__PURE__ */ x("<span class=cm-count-down-suffix>"), Ha = /* @__PURE__ */ x("<span><span class=cm-count-down-value>");
function qt(e) {
  return `${e}`.padStart(2, "0");
}
function Tm(e) {
  let t;
  const [n, r] = K((/* @__PURE__ */ new Date()).getTime()), i = () => {
    let s = e.value;
    (typeof s == "string" || s instanceof Date) && (s = ue(s).toDate().getTime());
    let c = s - n();
    c <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), c = 0);
    const d = qt(parseInt(c / (1e3 * 60 * 60 * 24) + "", 10)), o = qt(parseInt(c / (1e3 * 60 * 60) + "", 10) % 24), h = qt(parseInt(c / (1e3 * 60) + "", 10) % 60), g = qt(parseInt(c / 1e3 + "", 10) % 60), $ = e.format ?? "HH:mm:ss";
    let w = $;
    return $.match(/D+/) && (w = w.replace(/D+/, d + "")), $.match(/H+/) && (w = w.replace(/H+/, o + "")), $.match(/m+/) && (w = w.replace(/m+/, h + "")), $.match(/s+/) && (w = w.replace(/s+/, g + "")), w;
  }, l = () => {
    t = setInterval(() => {
      r((/* @__PURE__ */ new Date()).getTime());
    }, 1e3);
  };
  ge(() => {
    l();
  }), he(() => {
    clearInterval(t), t = null;
  });
  const a = () => U(e, "cm-count-down");
  return (() => {
    var s = Ha(), c = s.firstChild;
    return m(s, u(V, {
      get when() {
        return e.prefix;
      },
      get children() {
        var d = Ba();
        return m(d, () => e.prefix), d;
      }
    }), c), m(c, i), m(s, u(V, {
      get when() {
        return e.suffix;
      },
      get children() {
        var d = Va();
        return m(d, () => e.suffix), d;
      }
    }), null), B((d) => {
      var o = a(), h = e.style;
      return d.e = j(s, o, d.e), d.t = W(s, h, d.t), d;
    }, {
      e: void 0,
      t: void 0
    }), s;
  })();
}
let Ya = class {
  constructor(t, n, r) {
    this.endVal = n, this.options = r, this.options = {
      ...this.defaults,
      ...r
    }, this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces ?? 0), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = !1), this.el = typeof t == "string" ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", typeof window < "u" && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(() => this.handleScroll(this)), window.onscroll = () => {
      window.onScrollFns.forEach((i) => i());
    }, this.handleScroll(this)));
  }
  version = "2.8.0";
  defaults = {
    startVal: 0,
    decimalPlaces: 0,
    duration: 2,
    useEasing: !0,
    useGrouping: !0,
    useIndianSeparators: !1,
    smartEasingThreshold: 999,
    smartEasingAmount: 333,
    separator: ",",
    decimal: ".",
    prefix: "",
    suffix: "",
    enableScrollSpy: !1,
    scrollSpyDelay: 200,
    scrollSpyOnce: !1
  };
  rAF;
  startTime;
  remaining = 0;
  finalEndVal = null;
  // for smart easing
  useEasing = !0;
  countDown = !1;
  el;
  formattingFn;
  easingFn;
  error = "";
  startVal = 0;
  duration = 0;
  paused = !0;
  frameVal;
  once = !1;
  handleScroll(t) {
    if (!t || !window || t.once)
      return;
    const n = window.innerHeight + window.scrollY, r = t.el.getBoundingClientRect(), i = r.top + window.pageYOffset, l = r.top + r.height + window.pageYOffset;
    l < n && l > window.scrollY && t.paused ? (t.paused = !1, setTimeout(() => t.start(), t.options?.scrollSpyDelay), t.options?.scrollSpyOnce && (t.once = !0)) : (window.scrollY > l || i > n) && !t.paused && t.reset();
  }
  /**
   * Smart easing works by breaking the animation into 2 parts, the second part being the
   * smartEasingAmount and first part being the total amount minus the smartEasingAmount. It works
   * by disabling easing for the first part and enabling it on the second part. It is used if
   * useEasing is true and the total animation amount exceeds the smartEasingThreshold.
   */
  determineDirectionAndSmartEasing() {
    const t = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t;
    const n = t - this.startVal;
    if (Math.abs(n) > (this.options.smartEasingThreshold ?? 0) && this.options?.useEasing) {
      this.finalEndVal = t;
      const r = this.countDown ? 1 : -1;
      this.endVal = t + r * (this.options.smartEasingAmount ?? 0), this.duration = (this.duration ?? 0) / 2;
    } else
      this.endVal = t, this.finalEndVal = null;
    this.finalEndVal !== null ? this.useEasing = !1 : this.useEasing = this.options.useEasing;
  }
  // start animation
  start(t) {
    this.error || (this.options.onStartCallback && this.options.onStartCallback(), t && (this.options.onCompleteCallback = t), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }
  // pause/resume animation
  pauseResume() {
    this.paused ? (this.startTime = void 0, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }
  // reset to startVal so animation can be run again
  reset() {
    cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }
  // pass a new endVal and start animation
  update(t) {
    cancelAnimationFrame(this.rAF), this.startTime = void 0, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }
  count = (t) => {
    this.startTime || (this.startTime = t);
    const n = t - this.startTime;
    this.remaining = this.duration - n, this.useEasing && this.easingFn ? this.countDown ? this.frameVal = this.startVal - this.easingFn(n, 0, this.startVal - this.endVal, this.duration) : this.frameVal = this.easingFn(n, this.startVal, this.endVal - this.startVal, this.duration) : this.frameVal = this.startVal + (this.endVal - this.startVal) * (n / this.duration);
    const r = this.countDown ? this.frameVal < this.endVal : this.frameVal > this.endVal;
    this.frameVal = r ? this.endVal : this.frameVal, this.frameVal = Number(this.frameVal.toFixed(this.options.decimalPlaces)), this.printValue(this.frameVal), n < this.duration ? this.rAF = requestAnimationFrame(this.count) : this.finalEndVal !== null ? this.update(this.finalEndVal) : this.options.onCompleteCallback && this.options.onCompleteCallback();
  };
  printValue(t) {
    if (!this.el)
      return;
    const n = this.formattingFn(t);
    if (this.options.plugin?.render) {
      this.options.plugin.render(this.el, n);
      return;
    }
    if (this.el.tagName === "INPUT") {
      const r = this.el;
      r.value = n;
    } else
      this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = n : this.el.innerHTML = n;
  }
  ensureNumber(t) {
    return typeof t == "number" && !isNaN(t);
  }
  validateValue(t) {
    const n = Number(t);
    return this.ensureNumber(n) ? n : (this.error = `[CountUp] invalid start or end value: ${t}`, 0);
  }
  resetDuration() {
    this.startTime = void 0, this.duration = Number(this.options.duration) * 1e3, this.remaining = this.duration;
  }
  // default format and easing functions
  formatNumber = (t) => {
    const n = t < 0 ? "-" : "";
    let r, i, l, a;
    r = Math.abs(t).toFixed(this.options.decimalPlaces), r += "";
    const s = r.split(".");
    if (i = s[0], l = s.length > 1 ? this.options.decimal + s[1] : "", this.options.useGrouping) {
      a = "";
      let c = 3, d = 0;
      for (let o = 0, h = i.length; o < h; ++o)
        this.options.useIndianSeparators && o === 4 && (c = 2, d = 1), o !== 0 && d % c === 0 && (a = this.options.separator + a), d++, a = i[h - o - 1] + a;
      i = a;
    }
    return this.options.numerals && this.options.numerals.length && (i = i.replace(/[0-9]/g, (c) => this.options.numerals?.[+c] + ""), l = l.replace(/[0-9]/g, (c) => this.options.numerals?.[+c] + "")), n + this.options.prefix + i + l + this.options.suffix;
  };
  // t: current time, b: beginning value, c: change in value, d: duration
  easeOutExpo = (t, n, r, i) => r * (-Math.pow(2, -10 * t / i) + 1) * 1024 / 1023 + n;
};
var qa = /* @__PURE__ */ x("<span>");
function Dm(e) {
  const t = e.start ?? 0;
  let n, r;
  ge(() => {
    r = new Ya(n, e.value, {
      startVal: t,
      duration: e.duration ?? 2,
      decimalPlaces: e.decimal ?? 0,
      useGrouping: e.useGrouping ?? !0,
      useEasing: e.useEasing ?? !0,
      separator: e.separator ?? ",",
      formattingFn: e.formattingFn,
      prefix: e.prefix ?? "",
      suffix: e.suffix ?? "",
      onCompleteCallback: i
    }), r.error ? console.error(r.error) : l();
  }), he(() => {
    r = null;
  });
  const i = () => {
    e.onEnd && e.onEnd();
  }, l = () => {
    r && r.start();
  }, a = (d) => {
    r && r.update(d);
  }, s = () => {
    r && r.pauseResume();
  };
  Q(() => {
    a(e.value);
  }), e.ref && e.ref({
    reset: () => {
      r && r.reset();
    },
    update: a,
    start: l,
    pauseResume: s
  });
  const c = () => U(e, "cm-count-up");
  return (() => {
    var d = qa(), o = n;
    return typeof o == "function" ? Z(o, d) : n = d, B((h) => {
      var g = c(), $ = e.style;
      return h.e = j(d, g, h.e), h.t = W(d, $, h.t), h;
    }, {
      e: void 0,
      t: void 0
    }), d;
  })();
}
var ja = /* @__PURE__ */ x("<div>"), Wa = /* @__PURE__ */ x("<span class=cm-divider-text>");
function Am(e) {
  const [t, n] = de(e, ["classList", "class", "dir", "align", "theme", "style", "dashed", "children", "margin", "textColor", "textMargin"]), r = Ue(t.theme) ? "" : t.theme, i = () => U(t, "cm-divider", {
    [`cm-divider-${t.dir || "h"}`]: t.dir || "h",
    [`cm-divider-${t.align}`]: t.align,
    [`cm-divider-${r}`]: r,
    "cm-divider-dashed": t.dashed
  }), l = () => be(t, {
    margin: `${t.margin}${typeof t.margin == "number" ? "px" : ""}`,
    "--cui-divider-border-color": Ue(t.theme) ? t.theme : ""
  }), a = () => ({
    margin: `${t.textMargin}${typeof t.textMargin == "number" ? "px" : ""}`,
    color: t.textColor
  });
  return (() => {
    var s = ja();
    return ye(s, te({
      get classList() {
        return i();
      },
      get style() {
        return l();
      }
    }, n), !1, !0), m(s, (() => {
      var c = ee(() => !!t.children);
      return () => c() ? (() => {
        var d = Wa();
        return m(d, () => t.children), B((o) => W(d, a(), o)), d;
      })() : null;
    })()), s;
  })();
}
function Ua(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Xa(e, t, n) {
  const i = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), l = (e.clientX + t.scrollLeft - i.left) / n, a = (e.clientY + t.scrollTop - i.top) / n;
  return {
    x: l,
    y: a
  };
}
function or(e, t) {
  for (let n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function Ka(e, t) {
  return e.targetTouches && or(e.targetTouches, (n) => t === n.identifier) || e.changedTouches && or(e.changedTouches, (n) => t === n.identifier);
}
function mn(e, t, n, r) {
  const i = typeof t == "number" ? Ka(e, t) : null;
  if (typeof t == "number" && !i)
    return null;
  const l = n.offsetParent || r.offsetParent || r.ownerDocument.body;
  return Xa(i || e, l, n.scale);
}
function vn(e, t, n, r, i) {
  return Number.isNaN(t) ? {
    node: e,
    deltaX: 0,
    deltaY: 0,
    lastX: r,
    lastY: i,
    x: r,
    y: i
  } : {
    node: e,
    deltaX: r - t,
    deltaY: i - n,
    lastX: t,
    lastY: n,
    x: r,
    y: i
  };
}
function dr(e, t, n, r) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...r
  };
  e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
}
function ur(e, t, n, r) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...r
  };
  e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
}
function Ga(e, t, n) {
  const r = Math.round(t / e[0]) * e[0], i = Math.round(n / e[1]) * e[1];
  return [r, i];
}
function Za(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && e.body.classList.add("react-draggable-transparent-selection");
}
function Ja(e) {
  if (e)
    try {
      if (e.body && e.body.classList.remove("react-draggable-transparent-selection"), e.selection)
        e.selection.empty();
      else {
        const t = (e.defaultView || window).getSelection();
        t && t.type !== "Caret" && t.removeAllRanges();
      }
    } catch {
    }
}
function yn(e, t, n) {
  return {
    node: n.node,
    x: e.x + n.deltaX / t,
    y: e.y + n.deltaY / t,
    deltaX: n.deltaX / t,
    deltaY: n.deltaY / t,
    lastX: e.x,
    lastY: e.y
  };
}
function Qa(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function Pe(e) {
  return parseInt(e, 10);
}
function pa(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t += Pe(n.borderTopWidth), t += Pe(n.borderBottomWidth), t;
}
function es(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t += Pe(n.borderLeftWidth), t += Pe(n.borderRightWidth), t;
}
function ts(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t -= Pe(n.paddingTop), t -= Pe(n.paddingBottom), t;
}
function ns(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t -= Pe(n.paddingLeft), t -= Pe(n.paddingRight), t;
}
function jt(e) {
  return typeof e == "number" && !isNaN(e);
}
function rs({
  bounds: e,
  node: t
}, n, r) {
  if (!e)
    return [n, r];
  if (e = typeof e == "string" ? e : Qa(e), typeof e == "string") {
    let i;
    if (e === "parent" ? i = t.parentNode : i = document.querySelector(e), !(i instanceof HTMLElement))
      throw new Error('Bounds selector "' + e + '" could not find an element.');
    const l = window.getComputedStyle(t), a = window.getComputedStyle(i);
    e = {
      left: -t.offsetLeft + Pe(a.paddingLeft) + Pe(l.marginLeft),
      top: -t.offsetTop + Pe(a.paddingTop) + Pe(l.marginTop),
      right: ns(i) - es(t) - t.offsetLeft + Pe(a.paddingRight) - Pe(l.marginRight),
      bottom: ts(i) - pa(t) - t.offsetTop + Pe(a.paddingBottom) - Pe(l.marginBottom)
    };
  }
  return jt(e.right) && (n = Math.min(n, e.right)), jt(e.bottom) && (r = Math.min(r, e.bottom)), jt(e.left) && (n = Math.max(n, e.left)), jt(e.top) && (r = Math.max(r, e.top)), [n, r];
}
function is(e) {
  return e === "both" || e === "x";
}
function ls(e) {
  return e === "both" || e === "y";
}
function as({
  x: e,
  y: t
}, n, r) {
  let i = `translate(${e}${r},${t}${r})`;
  if (n) {
    const l = `${typeof n.x == "string" ? n.x : n.x + r}`, a = `${typeof n.y == "string" ? n.y : n.y + r}`;
    i = `translate(${l}, ${a})` + i;
  }
  return i;
}
function ss(e, t) {
  return {
    transform: as(e, t, "px")
  };
}
var cs = /* @__PURE__ */ x("<div>");
function os(e) {
  const [t, n] = K(null), [r, i] = K(NaN), [l, a] = K(NaN), [s, c] = K(!1);
  let d;
  const o = (f) => {
    if (e.onMouseDown && e.onMouseDown(f), !e.allowAnyClick && typeof f.button == "number" && f.button !== 0)
      return !1;
    if (!d || !d.ownerDocument || !d.ownerDocument.body)
      throw new Error("<DraggableCore> not mounted on DragStart!");
    const {
      ownerDocument: v
    } = d;
    if (e.disabled || !(f.target instanceof v.defaultView.Node) || e.handle && !document.querySelector(e.handle).contains(f.target) || e.cancel && document.querySelector(e.cancel).contains(f.target))
      return;
    f.type === "touchstart" && f.preventDefault();
    const y = Ua(f);
    n(y);
    const C = mn(f, y, e, d);
    if (C == null)
      return;
    const {
      x: _,
      y: L
    } = C, F = vn(d, r(), l(), _, L);
    (e.onStart && e.onStart(f, F)) !== !1 && (Za(v), Re(() => {
      c(!0), i(_), a(L);
    }), dr(v, "mousemove", h), dr(v, "mouseup", g));
  }, h = (f) => {
    const v = mn(f, t(), e, d);
    if (v == null)
      return;
    let {
      x: y,
      y: C
    } = v;
    if (Array.isArray(e.grid)) {
      let F = y - r(), N = C - l();
      if ([F, N] = Ga(e.grid, F, N), !F && !N)
        return;
      y = r() + F, C = l() + N;
    }
    const _ = vn(d, r(), l(), y, C);
    if (e.onDrag(f, _) === !1) {
      try {
        g(new MouseEvent("mouseup"));
      } catch {
        const N = document.createEvent("MouseEvents");
        N.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), g(N);
      }
      return;
    }
    Re(() => {
      i(y), a(C);
    });
  }, g = (f) => {
    if (!s())
      return;
    const v = mn(f, t(), e, d);
    if (v == null)
      return;
    const {
      x: y,
      y: C
    } = v, _ = vn(d, r(), l(), y, C);
    if (e.onStop(f, _) === !1)
      return !1;
    d && Ja(d.ownerDocument), Re(() => {
      c(!1), i(NaN), a(NaN);
    }), d && (ur(d.ownerDocument, "mousemove", h), ur(d.ownerDocument, "mouseup", g));
  }, $ = (f) => o(f), w = (f) => g(f);
  return (() => {
    var f = cs(), v = d;
    return typeof v == "function" ? Z(v, f) : d = f, f.$$mouseup = w, f.$$mousedown = $, m(f, () => e.children), B((y) => {
      var C = e.classList, _ = e.style;
      return y.e = j(f, C, y.e), y.t = W(f, _, y.t), y;
    }, {
      e: void 0,
      t: void 0
    }), f;
  })();
}
ae(["mousedown", "mouseup"]);
function An(e) {
  const t = e.defaultPosition || {
    x: 0,
    y: 0
  }, [n, r] = we({
    // Whether or not we are currently dragging.
    dragging: !1,
    // Whether or not we have been dragged before.
    dragged: !1,
    // Current transform x and y.
    x: e.position ? e.position.x : t.x,
    y: e.position ? e.position.y : t.y,
    prevPropsPosition: {
      ...e.position
    },
    // Used for compensating for out-of-bounds drags
    slackX: 0,
    slackY: 0
  }), i = e.scale || 1, l = e.bounds || !1;
  let a;
  const s = (w, f) => {
    if ((e.onStart && e.onStart(w, yn(n, i, f))) === !1)
      return !1;
    r("dragging", !0), r("dragged", !0);
  }, c = (w, f) => {
    if (!n.dragging)
      return !1;
    const v = yn(n, i, f), y = {
      x: v.x,
      y: v.y,
      slackX: 0,
      slackY: 0
    };
    if (l) {
      const {
        x: _,
        y: L
      } = y;
      y.x += n.slackX, y.y += n.slackY;
      const [F, N] = rs({
        bounds: l,
        node: f.node
      }, y.x, y.y);
      y.x = F, y.y = N, y.slackX = n.slackX + (_ - y.x), y.slackY = n.slackY + (L - y.y), v.x = y.x, v.y = y.y, v.deltaX = y.x - n.x, v.deltaY = y.y - n.y;
    }
    if ((e.onDrag && e.onDrag(w, v)) === !1)
      return !1;
    r("x", y.x), r("y", y.y), r("slackX", y.slackX), r("slackY", y.slackY);
  }, d = (w, f) => {
    if (!n.dragging || (e.onStop && e.onStop(w, yn(n, i, f))) === !1)
      return !1;
    r("dragging", !1), r("slackX", 0), r("slackY", 0);
  };
  he(() => {
    r("dragging", !1);
  });
  const o = e.axis || "both", h = () => ({
    // Set left if horizontal drag is enabled
    x: is(o) ? n.x : t.x,
    // Set top if vertical drag is enabled
    y: ls(o) ? n.y : t.y
  }), g = () => ({
    ...e.style,
    ...ss(h(), e.positionOffset)
  }), $ = () => U(e, "cm-draggable", {
    "cm-draggable-dragging": n.dragging,
    "cm-draggable-dragged": n.dragged
  });
  return e.ref && e.ref({
    reset: () => {
      r("x", 0), r("y", 0);
    },
    setPosition(w) {
      r("x", w.x), r("y", w.y);
    }
  }), u(os, {
    get grid() {
      return e.grid;
    },
    get classList() {
      return $();
    },
    get disabled() {
      return e.disabled;
    },
    get handle() {
      return e.handle;
    },
    scale: i,
    get style() {
      return g();
    },
    onStart: s,
    onDrag: c,
    onStop: d,
    ref(w) {
      var f = a;
      typeof f == "function" ? f(w) : a = w;
    },
    get children() {
      return e.children;
    }
  });
}
var ds = /* @__PURE__ */ x("<div class=cm-drawer-title>"), us = /* @__PURE__ */ x("<div tabindex=1><div class=cm-drawer-mask></div><div class=cm-drawer-wrap><div class=cm-drawer-body>");
function Rm(e) {
  const [t, n] = De(e, "visible", !1), [r, i] = K(e.destroyOnClose && !t()), l = () => e.align ?? "right", a = e.maskCloseable ?? !0, s = () => (e.size ?? 256) + "px", c = () => ({
    [l() === "left" || l() === "right" ? "width" : "height"]: s()
  }), d = () => U(e, "cm-drawer", {
    [`cm-drawer-${l()}`]: l()
  });
  let o, h, g;
  const $ = Nt({
    el: () => o,
    target: () => h,
    startClass: "cm-drawer-visible",
    activeClass: "cm-drawer-open",
    onLeave: () => {
      e.onClose && e.onClose(), document.body.style.overflow = g, i(!0);
    },
    onEnter: () => {
      g = document.body.style.overflow, document.body.style.overflow = "hidden";
    }
  }), w = () => {
    a && f();
  }, f = () => {
    n(!1);
  };
  dt(() => {
    t() ? (i(!1), $.enter(), e.onShow && e.onShow()) : $.leave();
  });
  const v = (y) => {
    e.escClose && y.code === "Escape" && n(!1);
  };
  return (() => {
    var y = us(), C = y.firstChild, _ = C.nextSibling, L = _.firstChild;
    y.$$keyup = v;
    var F = o;
    typeof F == "function" ? Z(F, y) : o = y, C.$$click = w;
    var N = h;
    return typeof N == "function" ? Z(N, _) : h = _, m(_, u(V, {
      get when() {
        return e.title;
      },
      get children() {
        var P = ds();
        return m(P, () => e.title), P;
      }
    }), L), m(_, u(V, {
      get when() {
        return e.hasClose ?? !0;
      },
      get children() {
        return u(ze, {
          class: "cm-drawer-close",
          onClick: f
        });
      }
    }), L), m(L, () => r() ? null : e.children), B((P) => {
      var D = d(), E = e.style, b = c();
      return P.e = j(y, D, P.e), P.t = W(y, E, P.t), P.a = W(_, b, P.a), P;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), y;
  })();
}
ae(["keyup", "click"]);
function hs(e, t) {
  if (me)
    return;
  let n = null, r;
  const i = window.document.documentElement;
  function l() {
    clearTimeout(r), n?.disconnect(), n = null;
  }
  function a(s = !1, c = 1) {
    l();
    const {
      left: d,
      top: o,
      width: h,
      height: g
    } = e.getBoundingClientRect();
    if (s || t(), !h || !g)
      return;
    const $ = Math.floor(o), w = Math.floor(i.clientWidth - (d + h)), f = Math.floor(i.clientHeight - (o + g)), v = Math.floor(d), C = {
      rootMargin: `${-$}px ${-w}px ${-f}px ${-v}px`,
      threshold: Math.max(0, Math.min(1, c)) || 1
    };
    let _ = !0;
    function L(F) {
      const N = F[0].intersectionRatio;
      if (N !== c) {
        if (!_)
          return a();
        N ? a(!1, N) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      _ = !1;
    }
    try {
      n = new IntersectionObserver(L, {
        ...C,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(L, C);
    }
    n.observe(e);
  }
  return a(!0), l;
}
var fs = /* @__PURE__ */ x("<li>"), gs = /* @__PURE__ */ x("<span class=cm-dropdown-item-icon>");
function Rn(e) {
  const [t, n] = de(e, ["classList", "class", "theme", "disabled", "data", "name", "divided", "children", "arrow", "icon", "style", "selected"]), r = Ue(e.theme) ? "" : e.theme, i = () => U(t, "cm-dropdown-item", {
    "cm-dropdown-item-disabled": t.disabled,
    "cm-dropdown-item-divided": t.divided,
    "cm-dropdown-item-selected": t.selected,
    "cm-dropdown-item-with-arrow": t.arrow,
    [`cm-dropdown-item-${r}`]: r
  }), l = vi(), a = (c) => {
    t.disabled || (c.preventDefault(), c.stopPropagation(), l?.onSelect(t.name, t.data));
  }, s = () => be(t, {
    "--cui-dropdown-text-color": Ue(e.theme) ? e.theme : ""
  });
  return (() => {
    var c = fs();
    return ye(c, te({
      get classList() {
        return i();
      }
    }, n, {
      get style() {
        return s();
      },
      onClick: a
    }), !1, !0), m(c, (() => {
      var d = ee(() => !!t.icon);
      return () => d() ? (() => {
        var o = gs();
        return m(o, () => t.icon), o;
      })() : null;
    })(), null), m(c, () => t.children, null), m(c, (() => {
      var d = ee(() => !!t.arrow);
      return () => d() ? u(Xe, {
        class: "cm-dropdown-item-arrow"
      }) : null;
    })(), null), c;
  })();
}
var ms = /* @__PURE__ */ x("<ul>");
function In(e) {
  const t = () => U(e, "cm-dropdown-list"), n = vi(), r = () => be(e, {
    background: n?.gradient ? `linear-gradient(${n.gradient?.join(",")})` : ""
  });
  return (() => {
    var i = ms();
    return m(i, () => e.children), B((l) => {
      var a = t(), s = r();
      return l.e = j(i, a, l.e), l.t = W(i, s, l.t), l;
    }, {
      e: void 0,
      t: void 0
    }), i;
  })();
}
function vt(e, t) {
  let n = null;
  return function(...r) {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, e?.(...r);
    }, t);
  };
}
var vs = /* @__PURE__ */ x("<span>"), hr = /* @__PURE__ */ x("<div>"), fr = /* @__PURE__ */ x('<svg width=24 height=8 xmlns=http://www.w3.org/2000/svg class=cm-dropdown-arrow><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z"opacity=1></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z">');
const zn = Ee(), vi = () => Se(zn);
function Ae(e) {
  const [t, n] = De(e, "visible", !1), [r, i] = K(t()), [l, a] = K("");
  let s, c;
  const d = () => e.offset || 0;
  let o;
  const h = e.trigger || "hover";
  let g;
  const $ = e.align || "bottom", [w, f] = K($);
  let v;
  const y = rt(), C = e.revers ?? !0, _ = Ue(e.theme) ? "" : e.theme, L = () => U(e, "cm-dropdown", {
    [`cm-dropdown-${_}`]: _,
    "cm-dropdown-with-arrow": e.arrow
  });
  let F, N = null;
  const P = Nt({
    el: () => v,
    startClass: "cm-dropdown-visible",
    activeClass: "cm-dropdown-open",
    onLeave: () => {
      i(!1), N && N();
    },
    onEnter: () => {
      i(!0), N = hs(v, () => {
        a(Le());
      });
    }
  });
  dt(() => {
    t() ? P.enter() : P.leave();
  });
  const D = () => {
    g && (clearTimeout(g), g = null);
  }, E = (Y) => {
    if (!o.contains(Y.target))
      return !1;
    if (e.handler) {
      const G = document.querySelector(e.handler);
      if (!G || !Y.target.closest(e.handler) && !G.contains(Y.target))
        return;
    }
    if (e.disabled)
      return;
    Y.preventDefault && Y.preventDefault(), Y.stopPropagation && Y.stopPropagation(), s = Y.target, e.onMouseClick?.(Y);
    const q = e.onBeforeDrop && e.onBeforeDrop(t());
    (q === void 0 || q) && (F !== Y.target.closest(e.handler) && a(Le()), n(!0), e.handler && (F = Y.target.closest(e.handler)));
  }, b = () => {
    e.disabled || h === "hover" && (D(), n(!0), v && (v.removeEventListener("mouseleave", k), v.addEventListener("mouseleave", k, !1)));
  }, k = () => {
    e.disabled || h === "hover" && (g = setTimeout(() => {
      n(!1);
    }, 200));
  }, M = (Y, q) => {
    if (Y === "bottomRight" || Y === "topRight")
      return 0;
    if (Y === "top" || Y === "bottom")
      return q.width / 2;
    if (Y === "topLeft" || Y === "bottomLeft")
      return q.width;
    if (Y === "left" || Y === "leftTop" || Y === "leftBottom")
      return 0;
    if (Y === "right" || Y === "rightTop" || Y === "rightBottom")
      return q.width;
  }, S = (Y, q) => {
    if (Y === "leftBottom" || Y === "rightBottom" || Y === "top" || Y === "topLeft" || Y === "topRight")
      return 0;
    if (Y === "leftTop" || Y === "rightTop")
      return q.height;
    if (Y === "left" || Y === "right")
      return q.height / 2;
    if (Y === "bottom" || Y === "bottomLeft" || Y === "bottomRight")
      return q.height;
  }, O = (Y, q) => {
    const G = q.offsetParent;
    if (!G)
      return;
    const X = G.getBoundingClientRect(), J = Fn(Y, q);
    if (e.transfer) {
      const ce = q.getBoundingClientRect();
      J.top = J.top + document.documentElement.scrollTop, J.left = J.left + document.documentElement.scrollLeft, e.fixWidth && (J["min-width"] = ce.width + "px");
    } else
      J.top = J.top + G.scrollTop - X.top, J.left = J.left + G.scrollLeft - X.left;
    return J;
  }, R = () => {
    if (l(), r() && o) {
      let Y = o;
      if (e.handler && (Y = s?.closest(e.handler)), !Y)
        return;
      const q = Y.offsetParent;
      if (!q)
        return;
      if (e.position) {
        const $e = {
          left: e.position.x + "px",
          top: e.position.y + "px"
        };
        return Object.assign($e, e.style || {}, {
          "--cui-dropdown-background-color": Ue(e.theme) ? e.theme : "",
          "--cui-dropdown-text-color": e.color,
          "--cui-dropdown-offset": `${d()}px`
        }), $e;
      }
      const G = q.getBoundingClientRect();
      let X = Fn($, Y);
      const J = X.top, ce = X.left;
      if (e.transfer) {
        const $e = Y.getBoundingClientRect();
        X.top = X.top + document.documentElement.scrollTop, X.left = X.left + document.documentElement.scrollLeft, e.fixWidth && (X["min-width"] = $e.width + "px");
      } else
        X.top = X.top + q.scrollTop - G.top, X.left = X.left + q.scrollLeft - G.left;
      const re = v.getBoundingClientRect(), xe = M($, re), Te = S($, re), ie = J + Te, se = ce + xe, ke = window.innerHeight || document.documentElement.clientHeight, Ce = window.innerWidth || document.documentElement.clientWidth;
      if (Y.getBoundingClientRect(), C) {
        let $e = $;
        ie > ke && ($ === "bottom" || $ === "bottomLeft" || $ === "bottomRight" ? $e = $.replace("bottom", "top") : $ === "leftTop" || $ === "left" ? $e = "leftBottom" : ($ === "right" || $ === "rightTop") && ($e = "rightBottom")), se > Ce - 5 && ($ === "bottom" || $ === "bottomLeft" ? $e = "bottomRight" : $ === "top" || $ === "topLeft" ? $e = "topRight" : $ === "right" ? $e = "left" : $ === "rightTop" && ($e = "leftTop")), $e !== $ ? (X = O($e, Y), f($e)) : (X = O($, Y), f($));
      }
      return X.top = X.top + "px", X.left = X.left + "px", X["z-index"] = y, Object.assign(X, e.style || {}, {
        "--cui-dropdown-background-color": Ue(e.theme) ? e.theme : "",
        "--cui-dropdown-text-color": e.color,
        "--cui-dropdown-offset": `${d()}px`
      }), X;
    }
  };
  e.ref && e.ref({
    update: () => {
      a(Le());
    }
  });
  const T = vt((Y) => {
    a(Le());
  }, 100);
  let I;
  ge(() => {
    if (!me && (o = c.nextElementSibling, c.parentNode.removeChild(c), o)) {
      if (h === "hover" && (o.addEventListener("mouseenter", b, !1), o.addEventListener("mouseleave", k, !1)), (h === "click" || h === "custom") && (document.addEventListener("click", E), h === "click")) {
        const q = e.handler ? o.querySelectorAll(e.handler) : o;
        I = Tn([v, q], () => {
          n(!1);
        });
      }
      if (h === "contextMenu") {
        document.addEventListener("contextmenu", E);
        const q = e.handler ? o.querySelectorAll(e.handler) : o;
        I = Tn([v, q], () => {
          n(!1);
        });
      }
      const Y = new ResizeObserver((q) => {
        q.forEach((G) => T(G));
      });
      Y.observe(o), he(() => {
        Y.disconnect();
      });
    }
  }), he(() => {
    me || (o && (h === "hover" && (o.removeEventListener("mouseenter", b), o.removeEventListener("mouseleave", k)), (h === "click" || h === "custom") && document.removeEventListener("click", E), h === "contextMenu" && document.removeEventListener("contextmenu", E)), I && I(), N && N());
  });
  const A = (Y, q) => {
    e.onSelect && e.onSelect(Y, q), v.removeEventListener("mouseleave", k), n(!1);
  }, z = (Y) => Y ? u(In, {
    get children() {
      return u(le, {
        each: Y,
        children: (q) => {
          const [G, X] = de(q, ["children", "title"]);
          return u(Rn, te(X, {
            data: q,
            get arrow() {
              return !!G.children?.length;
            },
            get children() {
              return [ee(() => G.title), u(V, {
                get when() {
                  return G.children?.length;
                },
                get children() {
                  return z(G.children);
                }
              })];
            }
          }));
        }
      });
    }
  }) : null, H = "cm-dropdown-portal";
  return [(() => {
    var Y = vs(), q = c;
    return typeof q == "function" ? Z(q, Y) : c = Y, Y.style.setProperty("display", "none"), Y;
  })(), ee(() => e.children), u(V, {
    get when() {
      return e.transfer;
    },
    get fallback() {
      return u(zn.Provider, {
        get value() {
          return {
            onSelect: A,
            gradient: e.gradient,
            color: e.color
          };
        },
        get children() {
          var Y = hr(), q = v;
          return typeof q == "function" ? Z(q, Y) : v = Y, Y.addEventListener("mouseenter", b), m(Y, () => e.menu, null), m(Y, () => z(e.data), null), m(Y, (() => {
            var G = ee(() => !!e.arrow);
            return () => G() ? fr() : null;
          })(), null), B((G) => {
            var X = R(), J = L(), ce = w();
            return G.e = W(Y, X, G.e), G.t = j(Y, J, G.t), ce !== G.a && ne(Y, "x-placement", G.a = ce), G;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          }), Y;
        }
      });
    },
    get children() {
      return u(ln, {
        get mount() {
          return nt(H, H);
        },
        get children() {
          return u(zn.Provider, {
            get value() {
              return {
                onSelect: A,
                gradient: e.gradient,
                color: e.color
              };
            },
            get children() {
              var Y = hr(), q = v;
              return typeof q == "function" ? Z(q, Y) : v = Y, Y.addEventListener("mouseenter", b), m(Y, () => e.menu, null), m(Y, () => z(e.data), null), m(Y, (() => {
                var G = ee(() => !!e.arrow);
                return () => G() ? fr() : null;
              })(), null), B((G) => {
                var X = R(), J = L(), ce = w();
                return G.e = W(Y, X, G.e), G.t = j(Y, J, G.t), ce !== G.a && ne(Y, "x-placement", G.a = ce), G;
              }, {
                e: void 0,
                t: void 0,
                a: void 0
              }), Y;
            }
          });
        }
      });
    }
  })];
}
var ys = /* @__PURE__ */ x("<div class=cm-spin-pulse>"), $s = /* @__PURE__ */ x('<svg class=cm-spin-oval xmlns=http://www.w3.org/2000/svg width=100% height=100% viewBox="0 0 38 38"stroke=#2d8cf0><g fill=none fill-rule=evenodd><g transform="translate(1 1)"stroke-width=2><circle stroke-opacity=.5 cx=18 cy=18 r=18></circle><path d="M36 18c0-9.94-8.06-18-18-18"transform="rotate(113.635 18 18)"><animateTransform attributeName=transform type=rotate from="0 18 18"to="360 18 18"dur=1s repeatCount=indefinite>'), ws = /* @__PURE__ */ x(`<svg class=cm-spin-gears width=32px height=32px xmlns=http://www.w3.org/2000/svg viewBox="0 0 100 100"preserveAspectRatio=xMidYMid><g transform="translate(50 50)"><g transform="translate(-19 -19) scale(0.6)"><g transform=rotate(177)><animateTransform attributeName=transform type=rotate values=0;360 keyTimes=0;1 dur=2s begin=0s repeatCount=indefinite></animateTransform><path fill=#20a0ff d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7\r
                                            L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268\r
                                            L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154\r
                                            L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346\r
                                            A38 38 0 0 1 7.0000000000000036 37.3496987939662\r
                                            L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662\r
                                            L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1\r
                                            -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435\r
                                            L-28.531545636048154 38.431040572659825 L-38.43104057265982\r
                                            28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1\r
                                            -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007\r
                                            L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964\r
                                            L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435\r
                                            -21.460477824182675 L-31.35997276079435 -21.460477824182675\r
                                            L-38.431040572659825 -28.531545636048147 L-28.53154563604818\r
                                            -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1\r
                                            -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662\r
                                            L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662\r
                                            L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686\r
                                            -31.359972760794342 L21.460477824182686 -31.359972760794342\r
                                            L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818\r
                                            L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662\r
                                            -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23"></path></g></g><g transform="translate(19 19) scale(0.6)"><g transform=rotate(160.5)><animateTransform attributeName=transform type=rotate values=360;0 keyTimes=0;1 dur=2s begin=-0.125s repeatCount=indefinite></animateTransform><path fill=rgba(12.549019607843137%,62.74509803921568%,100%,0.382) d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7\r
                                            L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268\r
                                            L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154\r
                                            L28.531545636048154 38.431040572659825\r
                                            L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036\r
                                            37.3496987939662 L7.0000000000000036 37.3496987939662\r
                                            L7.000000000000004 47.3496987939662 L-6.999999999999999\r
                                            47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1\r
                                            -21.46047782418268 31.35997276079435 L-21.46047782418268\r
                                            31.35997276079435 L-28.531545636048154 38.431040572659825\r
                                            L-38.43104057265982 28.531545636048158 L-31.359972760794346\r
                                            21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007\r
                                            L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008\r
                                            L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997\r
                                            A38 38 0 0 1 -31.35997276079435 -21.460477824182675\r
                                            L-31.35997276079435 -21.460477824182675\r
                                            L-38.431040572659825 -28.531545636048147\r
                                            L-28.53154563604818 -38.4310405726598\r
                                            L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992\r
                                            -37.3496987939662 L-6.999999999999992 -37.3496987939662\r
                                            L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662\r
                                            L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686\r
                                            -31.359972760794342 L21.460477824182686 -31.359972760794342\r
                                            L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818\r
                                            L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662\r
                                            -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23">`), bs = /* @__PURE__ */ x("<div class=cm-spin-dot><div class=cm-spin-dot-point></div><div class=cm-spin-dot-point></div><div class=cm-spin-dot-point></div><div class=cm-spin-dot-point>"), xs = /* @__PURE__ */ x("<div><div class=cm-spin-inner><div class=cm-spin></div><div class=cm-spin-text>");
function yi(e) {
  const t = () => U(e, "cm-spin-wrap", {
    [`cm-spin-${e.size}`]: e.size && typeof e.size == "string"
  }), n = () => e.type || "dot";
  return (() => {
    var r = xs(), i = r.firstChild, l = i.firstChild, a = l.nextSibling;
    return m(l, u(Ze, {
      get children() {
        return [u(fe, {
          get when() {
            return n() === "pulse";
          },
          get children() {
            return ys();
          }
        }), u(fe, {
          get when() {
            return n() === "oval";
          },
          get children() {
            return $s();
          }
        }), u(fe, {
          get when() {
            return n() === "gear";
          },
          get children() {
            return ws();
          }
        }), u(fe, {
          get when() {
            return n() === "dot";
          },
          get children() {
            return bs();
          }
        })];
      }
    })), m(a, () => e.title ?? "loading..."), B((s) => {
      var c = t(), d = {
        width: e.size + "px",
        height: e.size + "px",
        ...e.style
      };
      return s.e = j(r, c, s.e), s.t = W(l, d, s.t), s;
    }, {
      e: void 0,
      t: void 0
    }), r;
  })();
}
var Cs = /* @__PURE__ */ x("<div class=cm-image-preview-mask>"), ks = /* @__PURE__ */ x("<div class=cm-image-preview-fail>"), _s = /* @__PURE__ */ x('<span><svg class=cm-image-preview-operations-item viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=7197 width=200 height=200><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"p-id=7198 fill=#ffffff></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"p-id=7199 fill=#ffffff>'), Ls = /* @__PURE__ */ x('<span><svg class=cm-image-preview-operations-item viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=7412 width=200 height=200><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"p-id=7413 fill=#ffffff></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"p-id=7414 fill=#ffffff>'), Ss = /* @__PURE__ */ x('<svg class=cm-image-preview-operations-item viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=1976 width=200 height=200><path d="M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z"p-id=1977 fill=#ffffff></path><path d="M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z"p-id=1978 fill=#ffffff></path><path d="M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"p-id=1979 fill=#ffffff></path><path d="M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"p-id=1980 fill=#ffffff>'), gr = /* @__PURE__ */ x("<span>"), Ms = /* @__PURE__ */ x('<span><svg class=cm-image-preview-operations-item viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=13308 width=200 height=200><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z"p-id=13309 fill=#ffffff>'), Es = /* @__PURE__ */ x('<span><svg class=cm-image-preview-operations-item viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=13521 width=200 height=200><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z"p-id=13522 fill=#ffffff>'), Fs = /* @__PURE__ */ x('<svg class="cm-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop"viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=7816 width=200 height=200><path d="M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z"p-id=7817 fill=#ffffff>'), Ts = /* @__PURE__ */ x("<div class=cm-image-preview-wrap><div class=cm-image-preview><img>"), Ps = /* @__PURE__ */ x('<svg class=cm-image-preview-operations-item viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=26672 width=200 height=200><path d="M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z"p-id=26673 fill=#ffffff>'), Ds = /* @__PURE__ */ x('<svg class=cm-image-preview-operations-item viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg p-id=8825 width=200 height=200><path d="M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"p-id=8826 fill=#ffffff></path><path d="M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z"p-id=8827 fill=#ffffff>');
async function As(e, t = "unnamed") {
  try {
    if (me)
      return;
    const r = await (await fetch(e)).blob();
    if (!r)
      return Promise.reject();
    const i = URL.createObjectURL(r), l = document.createElement("a");
    return l.setAttribute("href", i), l.setAttribute("download", t), l.click(), URL.revokeObjectURL(i), Promise.resolve();
  } catch (n) {
    return Promise.reject(n);
  }
}
function $i(e) {
  const [t, n] = De(e, "visible", !1), r = rt(), [i, l] = we({
    transition: !0,
    original: !1,
    translate: {
      x: 0,
      y: 0
    },
    currentIndex: e.initIndex || 0,
    scale: 1,
    degree: 0,
    startX: 0,
    startY: 0,
    prevOverflow: "",
    // prevent body scrolling
    status: "loading",
    // image status
    downloading: !1
  }), a = e.maskClosable ?? !0, s = e.infinite ?? !0, c = e.failInfo ?? "失败", d = (R) => {
    R.preventDefault && R.preventDefault(), R.stopPropagation && R.stopPropagation(), a && F(R);
  };
  Q(() => {
    t() && (l("currentIndex", e.initIndex || 0), _(), l("original", !1));
  }), Q(() => {
    i.currentIndex, l("status", "loading");
  });
  const o = (R) => {
    R.preventDefault && R.preventDefault(), R.stopPropagation && R.stopPropagation();
    const {
      pageX: T,
      pageY: I,
      which: A
    } = R;
    A === 1 && (l("startX", T), l("startY", I), l("transition", !1), document.addEventListener("mousemove", h), document.addEventListener("mouseup", g));
  }, h = (R) => {
    R.stopPropagation();
    const {
      pageX: T,
      pageY: I
    } = R, A = i.translate.x + (T - i.startX), z = i.translate.y + (I - i.startY);
    l("translate", "x", A), l("translate", "y", z), l("startX", T), l("startY", I);
  }, g = () => {
    l("transition", !0), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", g);
  }, $ = (R) => {
    if (!t())
      return;
    const {
      keyCode: T
    } = R;
    T === 37 && L(!1), T === 39 && L(!0), T === 38 && C(R, "zoomIn"), T === 40 && C(R, "zoomOut"), T === 32 && (R.preventDefault && R.preventDefault(), l("original", !i.original));
  }, w = (R) => {
    if (!t())
      return;
    const {
      keyCode: T
    } = R;
    T === 27 && F(R);
  }, f = (R) => {
    if (t())
      return R.preventDefault && R.preventDefault(), R.stopPropagation && R.stopPropagation(), R.stopImmediatePropagation && R.stopImmediatePropagation(), C(R, R.deltaY < 0 ? "zoomIn" : "zoomOut"), !1;
  };
  ge(() => {
    me || (document.addEventListener("wheel", f, {
      passive: !1
    }), document.addEventListener("keydown", $), document.addEventListener("keyup", w));
  }), he(() => {
    me || (document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", g), document.removeEventListener("wheel", f), document.removeEventListener("keydown", $), document.removeEventListener("keyup", w));
  });
  const v = () => {
    l("status", "loaded");
  }, y = () => {
    l("status", "failed");
  }, C = (R, T) => {
    R.stopPropagation && R.stopPropagation(), T === "zoomIn" && i.scale < 6 && l("scale", i.scale + 0.25), T === "zoomOut" && i.scale > 0.25 && l("scale", i.scale - 0.25), T === "rotateLeft" && l("degree", i.degree - 90), T === "rotateRight" && l("degree", i.degree + 90), T === "original" && (l("original", !i.original), l("transition", !1), _(), setTimeout(() => {
      l("transition", !0);
    }, 0)), T === "download" && (l("downloading", !0), As(e.previewList[i.currentIndex]).then(() => {
      l("downloading", !1);
    }).catch(() => {
      l("downloading", !1);
    }));
  }, _ = () => {
    l("scale", 1), l("degree", 0), l("translate", "x", 0), l("translate", "y", 0);
  }, L = (R) => {
    R ? i.currentIndex + 1 === e.previewList.length ? s && (_(), l("currentIndex", 0)) : (_(), l("currentIndex", i.currentIndex + 1)) : i.currentIndex === 0 ? s && (_(), l("currentIndex", e.previewList.length - 1)) : (_(), l("currentIndex", i.currentIndex - 1)), e.onSwitch && e.onSwitch(i.currentIndex);
  }, F = (R) => {
    n(!1), R.stopPropagation && R.stopPropagation(), e.onClose && e.onClose();
  }, N = () => ({
    "cm-image-preview-image": !0,
    "cm-image-preview-grabbing": !i.transition,
    "cm-image-preview-hidden": i.status === "failed",
    "cm-image-preview-transition": i.transition,
    "cm-image-preview-limit": !i.original
  }), P = () => {
    let R = i.translate.x / i.scale, T = i.translate.y / i.scale;
    const I = i.degree % 360;
    return [90, -270].includes(I) && ([R, T] = [T, -R]), [180, -180].includes(I) && ([R, T] = [-R, -T]), [270, -90].includes(I) && ([R, T] = [-T, R]), {
      transform: `
                scale(${i.scale})
                rotate(${i.degree}deg)
                translate(${R}px, ${T}px)
            `
    };
  }, D = () => s ? !1 : i.currentIndex === 0, E = () => {
    const R = e.previewList.length;
    return s ? !1 : i.currentIndex >= R - 1;
  }, b = () => ({
    "cm-image-preview-arrow-left": !0,
    "cm-image-preview-arrow-disabled": D()
  }), k = () => ({
    "cm-image-preview-arrow-right": !0,
    "cm-image-preview-arrow-disabled": E()
  }), M = () => e.previewList[i.currentIndex], S = (R) => {
    R.stopPropagation && R.stopPropagation(), R.preventDefault && R.preventDefault();
  }, O = "cm-image-preview-portal";
  return u(ln, {
    get mount() {
      return nt(O, O);
    },
    get children() {
      return u(V, {
        get when() {
          return t();
        },
        get children() {
          return [(() => {
            var R = Cs();
            return r - 1 != null ? R.style.setProperty("z-index", r - 1) : R.style.removeProperty("z-index"), R;
          })(), (() => {
            var R = Ts(), T = R.firstChild, I = T.firstChild;
            return r != null ? R.style.setProperty("z-index", r) : R.style.removeProperty("z-index"), T.$$click = d, m(T, u(V, {
              get when() {
                return i.status === "loading";
              },
              get children() {
                return u(yi, {
                  class: "cm-image-preview-loading",
                  type: "dot",
                  size: "large"
                });
              }
            }), I), m(T, u(V, {
              get when() {
                return i.status === "failed";
              },
              get children() {
                var A = ks();
                return m(A, c), A;
              }
            }), I), I.$$click = S, I.addEventListener("error", y), I.addEventListener("load", v), I.$$mousedown = o, m(T, u(st, {
              dir: "h",
              class: "cm-image-preview-operations",
              size: 0,
              get children() {
                return [(() => {
                  var A = _s(), z = A.firstChild;
                  return z.$$click = (H) => C(H, "zoomIn"), A;
                })(), (() => {
                  var A = Ls(), z = A.firstChild;
                  return z.$$click = (H) => C(H, "zoomOut"), A;
                })(), (() => {
                  var A = gr();
                  return m(A, u(V, {
                    get when() {
                      return i.original;
                    },
                    get fallback() {
                      return (() => {
                        var z = Ps();
                        return z.$$click = (H) => C(H, "original"), z;
                      })();
                    },
                    get children() {
                      var z = Ss();
                      return z.$$click = (H) => C(H, "original"), z;
                    }
                  })), A;
                })(), (() => {
                  var A = Ms(), z = A.firstChild;
                  return z.$$click = (H) => C(H, "rotateLeft"), A;
                })(), (() => {
                  var A = Es(), z = A.firstChild;
                  return z.$$click = (H) => C(H, "rotateRight"), A;
                })(), (() => {
                  var A = gr();
                  return m(A, u(V, {
                    get when() {
                      return i.downloading;
                    },
                    get fallback() {
                      return (() => {
                        var z = Ds();
                        return z.$$click = (H) => C(H, "download"), z;
                      })();
                    },
                    get children() {
                      return Fs();
                    }
                  })), A;
                })()];
              }
            }), null), m(T, u(V, {
              get when() {
                return e.previewList.length > 1;
              },
              get children() {
                return [u(We, {
                  get classList() {
                    return b();
                  },
                  onClick: (A) => {
                    S(A), L(!1);
                  }
                }), u(Xe, {
                  get classList() {
                    return k();
                  },
                  onClick: (A) => {
                    S(A), L(!0);
                  }
                })];
              }
            }), null), m(T, u(ze, {
              class: "cm-image-preview-arrow-close",
              onClick: F
            }), null), B((A) => {
              var z = N(), H = P(), Y = M();
              return A.e = j(I, z, A.e), A.t = W(I, H, A.t), Y !== A.a && ne(I, "src", A.a = Y), A;
            }, {
              e: void 0,
              t: void 0,
              a: void 0
            }), R;
          })()];
        }
      });
    }
  });
}
ae(["click", "mousedown"]);
var Rs = /* @__PURE__ */ x('<svg viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z"fill=#FFFFFF p-id=5339></path><path d="M640 396.8m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z"fill=#82D2F7 p-id=5340></path><path d="M479.6416 472.8832l88.448 176.896A64 64 0 0 1 510.848 742.4H333.952a64 64 0 0 1-57.2416-92.6208l88.448-176.896a64 64 0 0 1 114.4832 0z"fill=#046EA7 p-id=5341></path><path d="M674.3424 555.0976l65.8688 131.7248A38.4 38.4 0 0 1 705.8688 742.4H574.1312a38.4 38.4 0 0 1-34.3424-55.5776l65.8688-131.7248a38.4 38.4 0 0 1 68.6848 0z"fill=#FCCF0A>'), Is = /* @__PURE__ */ x("<div class=cm-image-placeholder>"), zs = /* @__PURE__ */ x('<svg viewBox="0 0 1024 1024"version=1.1 xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M948.622222 173.511111L506.311111 113.777778l-118.044444 133.688889 135.111111 251.733333L412.444444 750.933333l9.955556 99.555556-22.755556-99.555556 12.8-228.977777-193.422222-263.111112L307.2 113.777778 66.844444 180.622222c-25.6 7.111111-42.666667 32.711111-38.4 59.733334l95.288889 664.177777c4.266667 29.866667 31.288889 49.777778 61.155556 45.511111l237.511111-35.555555L851.911111 952.888889c28.444444 2.844444 54.044444-18.488889 58.311111-46.933333l85.333334-672.711112c4.266667-29.866667-17.066667-56.888889-46.933334-59.733333z m-164.977778 93.866667c35.555556 0 65.422222 29.866667 65.422223 65.422222S819.2 398.222222 783.644444 398.222222s-65.422222-29.866667-65.422222-65.422222 29.866667-65.422222 65.422222-65.422222z m88.177778 526.222222c-1.422222 11.377778-11.377778 21.333333-24.177778 19.911111l-304.355555-27.022222c-11.377778-1.422222-21.333333-11.377778-19.911111-24.177778 1.422222-11.377778 11.377778-21.333333 24.177778-19.911111l304.355555 27.022222c11.377778 1.422222 19.911111 11.377778 19.911111 24.177778z"fill=#BCC3C9 p-id=18709>'), Ns = /* @__PURE__ */ x("<div class=cm-image-error><span>"), Os = /* @__PURE__ */ x("<div class=cm-image-mark><span>"), Bs = /* @__PURE__ */ x("<div><img>"), Vs = /* @__PURE__ */ x("<div class=cm-image>");
function Nn(e) {
  const [t, n] = K(!1), [r, i] = K(!1), [l, a] = K(!1), [s, c] = K(!1), d = e.previewTip ?? "预览", o = e.fit ?? "";
  let h, g = null;
  const $ = () => ({
    "cm-image-inner": !0,
    "cm-image-cursor": e.preview
  }), w = () => ({
    "cm-image-img": !0,
    "cm-image-img-hidden": t() || r()
  }), f = () => {
    c(!0);
  }, v = () => ["fill", "contain", "cover", "none", "scale-down"].includes(o) ? `object-fit:${o};` : "", y = () => ({
    width: typeof e.width == "number" ? `${e.width}px` : e.width,
    height: typeof e.height == "number" ? `${e.height}px` : e.height
  }), C = () => {
    Re(() => {
      i(!1), n(!1);
    }), e.onLoad && e.onLoad();
  }, _ = () => {
    Re(() => {
      i(!1), n(!0), a(!1);
    }), e.onError && e.onError();
  }, L = () => {
    Re(() => {
      i(!0), n(!1), a(!0);
    });
  };
  Q(() => {
    e.src, e.lazy || L();
  });
  let F;
  const N = () => {
    F = new IntersectionObserver(D, {
      root: g,
      rootMargin: "0px",
      threshold: 0
    }), F.observe(h);
  }, P = () => {
    F && F.disconnect();
  }, D = (M) => {
    for (const S of M)
      S.isIntersecting && (P(), L());
  }, E = () => {
    const {
      scrollContainer: M
    } = e;
    typeof M == "object" && M instanceof HTMLElement ? g = M : M && typeof M == "string" && (g = document.querySelector(M)), N();
  }, b = () => {
    e.lazy ? E() : L();
  }, k = () => {
    e.onClose && e.onClose();
  };
  return ge(() => {
    b();
  }), he(() => {
    P();
  }), (() => {
    var M = Vs(), S = h;
    return typeof S == "function" ? Z(S, M) : h = M, m(M, u(V, {
      get when() {
        return r();
      },
      get children() {
        var O = Is();
        return m(O, u(V, {
          get when() {
            return !e.placeholder;
          },
          get fallback() {
            return e.placeholder;
          },
          get children() {
            return Rs();
          }
        })), O;
      }
    }), null), m(M, u(V, {
      get when() {
        return t();
      },
      get children() {
        var O = Ns(), R = O.firstChild;
        return m(R, u(V, {
          get when() {
            return !e.failInfo;
          },
          get fallback() {
            return e.failInfo;
          },
          get children() {
            return zs();
          }
        })), O;
      }
    }), null), m(M, u(V, {
      get when() {
        return l();
      },
      get children() {
        var O = Bs(), R = O.firstChild;
        return O.$$click = f, R.addEventListener("error", _), R.addEventListener("load", C), m(O, u(V, {
          get when() {
            return e.preview && d;
          },
          get children() {
            var T = Os(), I = T.firstChild;
            return m(I, d), T;
          }
        }), null), B((T) => {
          var I = $(), A = w(), z = v(), H = e.alt, Y = e.src, q = e.lazy ? "lazy" : "eager", G = e.referrerPolicy;
          return T.e = j(O, I, T.e), T.t = j(R, A, T.t), T.a = W(R, z, T.a), H !== T.o && ne(R, "alt", T.o = H), Y !== T.i && ne(R, "src", T.i = Y), q !== T.n && ne(R, "loading", T.n = q), G !== T.s && ne(R, "referrerpolicy", T.s = G), T;
        }, {
          e: void 0,
          t: void 0,
          a: void 0,
          o: void 0,
          i: void 0,
          n: void 0,
          s: void 0
        }), O;
      }
    }), null), m(M, u(V, {
      get when() {
        return e.preview;
      },
      get children() {
        return u($i, {
          get previewList() {
            return e.previewList || [];
          },
          get infinite() {
            return e.infinite;
          },
          get initIndex() {
            return e.previewIndex || 0;
          },
          get maskClosable() {
            return e.maskClosable;
          },
          onClose: k,
          visible: [s, c],
          get onSwitch() {
            return e.onSwitch;
          }
        });
      }
    }), null), B((O) => W(M, y(), O)), M;
  })();
}
ae(["click"]);
const Hs = {
  404: "https://cui.cqb325.cn/file/404.svg",
  403: "https://cui.cqb325.cn/file/403.svg",
  500: "https://cui.cqb325.cn/file/500.svg",
  empty: "https://cui.cqb325.cn/file/empty.svg",
  fail: "https://cui.cqb325.cn/file/fail.svg",
  deny: "https://cui.cqb325.cn/file/deny.svg"
};
function Ys(e) {
  return e ? Hs[e] : null;
}
var qs = /* @__PURE__ */ x("<span>"), js = /* @__PURE__ */ x("<mark>"), Ws = /* @__PURE__ */ x("<code>"), Us = /* @__PURE__ */ x("<a><span>");
function qe(e) {
  const [t, n] = de(e, ["classList", "class", "children", "type", "disabled", "link", "icon", "mark", "code", "underline", "deleted", "strong", "size", "onCopy", "gradient"]), r = () => t.size || "normal", i = () => U(e, "cm-text", {
    [`cm-text-${t.type}`]: t.type,
    "cm-text-disabled": t.disabled,
    "cm-text-underline": t.underline,
    "cm-text-link": t.link,
    "cm-text-deleted": t.deleted,
    "cm-text-strong": t.strong,
    [`cm-text-${r()}`]: r()
  }), l = () => be(e, {
    "background-image": t.gradient ? `linear-gradient(${t.gradient.join(",")})` : "",
    "-webkit-text-fill-color": e.gradient ? "transparent" : ""
  });
  return (() => {
    var a = qs();
    return ye(a, te({
      get classList() {
        return i();
      }
    }, n, {
      get style() {
        return l();
      }
    }), !1, !0), m(a, (() => {
      var s = ee(() => !!t.mark);
      return () => s() ? (() => {
        var c = js();
        return m(c, () => t.children), c;
      })() : (() => {
        var c = ee(() => !!t.code);
        return () => c() ? (() => {
          var d = Ws();
          return m(d, () => t.children), d;
        })() : (() => {
          var d = ee(() => !!t.link);
          return () => d() ? (() => {
            var o = Us(), h = o.firstChild;
            return m(o, () => t.icon, h), m(h, () => t.children), B(() => ne(o, "href", t.link)), o;
          })() : t.children;
        })();
      })();
    })()), a;
  })();
}
const Xs = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjY0IiBoZWlnaHQ9IjQxIiB2aWV3Qm94PSIwIDAgNjQgNDEiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGVsbGlwc2UgY2xhc3M9ImFudC1lbXB0eS1pbWctc2ltcGxlLWVsbGlwc2UiIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ij48L2VsbGlwc2U+PGcgY2xhc3M9ImFudC1lbXB0eS1pbWctc2ltcGxlLWciIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjRDlEOUQ5Ij48cGF0aCBkPSJNNTUgMTIuNzZMNDQuODU0IDEuMjU4QzQ0LjM2Ny40NzQgNDMuNjU2IDAgNDIuOTA3IDBIMjEuMDkzYy0uNzQ5IDAtMS40Ni40NzQtMS45NDcgMS4yNTdMOSAxMi43NjFWMjJoNDZ2LTkuMjR6Ij48L3BhdGg+PHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIiBjbGFzcz0iYW50LWVtcHR5LWltZy1zaW1wbGUtcGF0aCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+";
var Ks = /* @__PURE__ */ x("<div class=cm-exception-desc>"), Gs = /* @__PURE__ */ x("<div class=cm-exception-action>"), Zs = /* @__PURE__ */ x("<div><div class=cm-exception-img></div><div class=cm-exception-info>");
const Qn = Xs;
function pn(e) {
  const t = () => U(e, "cm-exception", {
    [`cm-exception-${e.type}`]: !!e.type
  }), n = e.showDesc ?? !0;
  return (() => {
    var r = Zs(), i = r.firstChild, l = i.nextSibling;
    return m(i, u(V, {
      get when() {
        return e.typeImage;
      },
      get fallback() {
        return u(Nn, {
          get src() {
            return Ys(e.type);
          },
          get width() {
            return e.width;
          },
          get height() {
            return e.height;
          }
        });
      },
      get children() {
        return u(Nn, {
          get src() {
            return e.typeImage;
          },
          get width() {
            return e.width;
          },
          get height() {
            return e.height;
          }
        });
      }
    })), m(l, u(V, {
      when: n,
      get children() {
        var a = Ks();
        return m(a, u(Ze, {
          get children() {
            return [u(fe, {
              get when() {
                return e.type === "403";
              },
              get children() {
                return u(qe, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你无权访问该页面";
                  }
                });
              }
            }), u(fe, {
              get when() {
                return e.type === "404";
              },
              get children() {
                return u(qe, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你访问的页面不存在";
                  }
                });
              }
            }), u(fe, {
              get when() {
                return e.type === "500";
              },
              get children() {
                return u(qe, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，服务器出错了";
                  }
                });
              }
            }), u(fe, {
              get when() {
                return e.type === "empty";
              },
              get children() {
                return u(qe, {
                  size: "large",
                  get children() {
                    return e.desc ?? "暂无数据";
                  }
                });
              }
            }), u(fe, {
              get when() {
                return e.type === "fail";
              },
              get children() {
                return u(qe, {
                  size: "large",
                  get children() {
                    return e.desc ?? "授权失败";
                  }
                });
              }
            }), u(fe, {
              get when() {
                return e.type === "deny";
              },
              get children() {
                return u(qe, {
                  size: "large",
                  get children() {
                    return e.desc ?? "拒绝访问";
                  }
                });
              }
            })];
          }
        })), a;
      }
    }), null), m(l, u(V, {
      get when() {
        return e.action;
      },
      get children() {
        var a = Gs();
        return m(a, () => e.action), a;
      }
    }), null), B((a) => j(r, t(), a)), r;
  })();
}
var Js = /* @__PURE__ */ x("<form><button type=submit>");
const dn = Ee(), Qs = () => Se(dn);
function ps(e) {
  Qs() && console.warn("Form can not be nested");
  const t = e.errorTransfer ?? !1, n = e.errorAlign ?? "right", r = () => U(e, "cm-form", {
    "cm-form-inline": e.inline
  }), [i, l] = de(e, ["labelWidth", "form", "inline", "classList", "class", "onChange", "children", "onBeforeSubmit"]), a = (d, o, h = !1) => {
    i.form && (h || i.form.setProxyValue(d, o), i.form.checkField(d)), i.onChange && i.onChange(d, i.form?.getValueByPath(d));
  }, s = {
    labelWidth: i.labelWidth,
    inline: i.inline,
    form: i.form,
    errorTransfer: t,
    errorAlign: n,
    onChange: a
  }, c = (d) => (d.preventDefault(), i.onBeforeSubmit ? i.onBeforeSubmit() : !1);
  return u(dn.Provider, {
    value: s,
    get children() {
      var d = Js(), o = d.firstChild;
      return d.addEventListener("submit", c), ye(d, te({
        get classList() {
          return r();
        }
      }, l, {
        get autocomplete() {
          return e.autocomplete;
        }
      }), !1, !0), o.style.setProperty("display", "none"), m(d, () => i.children, null), d;
    }
  });
}
var ec = /* @__PURE__ */ x("<li>");
function tc(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-group-wrap": e.data.children && e.data.children.length,
    "cm-select-option-active": e.checked,
    "cm-select-option-disabled": e.data.disabled
  }), n = e.data[e.valueField];
  return u(V, {
    get when() {
      return e.visible;
    },
    fallback: null,
    get children() {
      var r = ec();
      return r.$$click = () => e.onClick && e.onClick(n, e.data), m(r, (() => {
        var i = ee(() => !!e.renderOption);
        return () => i() ? e.renderOption(e.data) : e.data[e.textField];
      })()), B((i) => {
        var l = t(), a = e.style;
        return i.e = j(r, l, i.e), i.t = W(r, a, i.t), i;
      }, {
        e: void 0,
        t: void 0
      }), r;
    }
  });
}
ae(["click"]);
var nc = /* @__PURE__ */ x("<div><div class=cm-tag-content><div class=cm-tag-text>"), rc = /* @__PURE__ */ x("<span class=cm-tag-badge><span class=cm-tag-badge-text>");
function Ct(e) {
  const t = () => e.value || "", n = () => U(e, "cm-tag", {
    [`cm-tag-${e.theme}`]: e.theme,
    "cm-tag-has-badge": t() !== "",
    "cm-tag-border": e.border,
    "cm-tag-circle": !t() && e.circle,
    [`cm-tag-${e.size}`]: e.size,
    "cm-tag-has-avatar": e.avatar
  });
  let r;
  const [i, l] = De(e, "visible", !0), a = (c) => {
    e.onBeforeClose ? e.onBeforeClose(c) && s(c) : s(c);
  }, s = (c) => {
    l(!1), e.onClose && e.onClose(c);
  };
  return ge(() => {
    e.ref?.({
      el: r
    });
  }), u(V, {
    get when() {
      return i();
    },
    fallback: null,
    get children() {
      var c = nc(), d = c.firstChild, o = d.firstChild, h = r;
      return typeof h == "function" ? Z(h, c) : r = c, m(c, () => e.avatar, d), m(o, () => e.children), m(d, (() => {
        var g = ee(() => !!e.closable);
        return () => g() ? u(ze, {
          class: "cm-tag-close",
          size: 12,
          onClick: a
        }) : null;
      })(), null), m(c, (() => {
        var g = ee(() => t() !== "");
        return () => g() ? (() => {
          var $ = rc(), w = $.firstChild;
          return m(w, t), $;
        })() : null;
      })(), null), B((g) => {
        var $ = n(), w = e.style;
        return g.e = j(c, $, g.e), g.t = W(c, w, g.t), g;
      }, {
        e: void 0,
        t: void 0
      }), c;
    }
  });
}
function un(e) {
  const t = e.theme || "light";
  return u(Jn, te(e, {
    theme: t
  }));
}
var mr = /* @__PURE__ */ x("<span>+"), ic = /* @__PURE__ */ x("<div>"), lc = /* @__PURE__ */ x("<div class=cm-tag-group-more-wrap>");
function ac(e) {
  const t = () => U(e, "cm-tag-group", {
    "cm-tag-group-overflow": e.max === "auto"
  }), n = e.tooltipTheme ?? "light", r = e.tooltipAlign ?? "top", i = e.tooltipTrigger ?? "hover";
  let l;
  const a = {
    position: "",
    height: "",
    "point-event": "",
    overflow: ""
  }, s = {
    position: "absolute",
    height: "0px",
    "point-event": "none",
    overflow: "hidden"
  }, [c, d] = we({
    list: [],
    show: [],
    hide: []
  }), o = (w, f) => {
    const v = c.list.filter((y) => y.id !== w.id);
    d("list", v), e.onClose && e.onClose(w, f), queueMicrotask(() => {
      $();
    });
  };
  Q(() => {
    const w = e.data.map((f) => (f.id === void 0 && (f.id = Le()), e.max === "auto" && (f._style = {
      ...s
    }), f));
    d("list", w);
  }), Q(() => {
    const w = c.list, f = [], v = [];
    if (e.max === "auto")
      d("hide", v), queueMicrotask(() => {
        $();
      });
    else {
      const y = e.max ?? w.length;
      Ie(() => {
        for (let _ = 0; _ < y; _++)
          w[_] && f.push(w[_]);
        const C = w.length;
        for (let _ = y; _ < C; _++)
          v.push(w[_]);
        d("show", f), d("hide", v);
      });
    }
  });
  const h = (w) => {
    c.hide.includes(c.list[w]) || d("hide", c.hide.length, c.list[w]), d("list", w, "_style", {
      ...s
    });
  }, g = (w) => {
    const f = c.hide.indexOf(c.list[w]);
    f > -1 && d("hide", p((v) => {
      v.splice(f, 1);
    })), d("list", w, "_style", {
      ...a
    });
  }, $ = () => {
    if (e.max !== "auto")
      return;
    const w = l.getBoundingClientRect(), f = l.querySelectorAll(".cm-tag:not(.cm-tag-more)");
    let v = 0;
    const y = l.querySelector(".cm-tag-more"), C = [], _ = [];
    f.forEach((L, F) => {
      const N = y?.getBoundingClientRect(), P = N ? 5 + N?.width : 25, D = L.offsetWidth;
      v + (F === 0 ? 0 : 5) + D + P < w.width ? (v = v + (F === 0 ? 0 : 5) + D, L.style.height === "0px" && C.push(F)) : _.push(F);
    }), Re(() => {
      C.forEach((L) => {
        g(L);
      }), _.forEach((L) => {
        h(L);
      });
    });
  };
  return ge(() => {
    const w = new ResizeObserver(() => {
      $();
    });
    e.max === "auto" && w.observe(l), he(() => {
      w.disconnect();
    });
  }), (() => {
    var w = ic(), f = l;
    return typeof f == "function" ? Z(f, w) : l = w, m(w, u(V, {
      get when() {
        return e.max === "auto";
      },
      get fallback() {
        return u(le, {
          get each() {
            return c.show;
          },
          children: (v) => u(Ct, {
            get closable() {
              return e.closable;
            },
            get size() {
              return e.size;
            },
            get theme() {
              return v.theme;
            },
            get avatar() {
              return v.avatar;
            },
            onClose: (y) => {
              o(v, y);
            },
            get children() {
              return v.title;
            }
          })
        });
      },
      get children() {
        return u(le, {
          get each() {
            return c.list;
          },
          children: (v) => u(Ct, {
            get closable() {
              return e.closable;
            },
            get style() {
              return v._style;
            },
            get size() {
              return e.size;
            },
            get theme() {
              return v.theme;
            },
            get avatar() {
              return v.avatar;
            },
            onClose: (y) => {
              o(v, y);
            },
            get children() {
              return v.title;
            }
          })
        });
      }
    }), null), m(w, u(V, {
      get when() {
        return c.hide.length;
      },
      get children() {
        return u(V, {
          get when() {
            return e.showMore;
          },
          get fallback() {
            return u(Ct, {
              class: "cm-tag-more",
              get children() {
                return [mr(), ee(() => c.hide.length)];
              }
            });
          },
          get children() {
            return u(un, {
              class: "cm-tag-group-more-popover",
              align: r,
              arrow: !0,
              color: n,
              trigger: i,
              get style() {
                return e.tooltipStyle;
              },
              get content() {
                return (() => {
                  var v = lc();
                  return m(v, u(le, {
                    get each() {
                      return c.hide;
                    },
                    children: (y, C) => u(Ct, {
                      get size() {
                        return e.size;
                      },
                      get theme() {
                        return y.theme;
                      },
                      get closable() {
                        return e.moreCloseable;
                      },
                      onClose: (_) => {
                        o(y, _);
                      },
                      get avatar() {
                        return y.avatar;
                      },
                      get children() {
                        return y.title;
                      }
                    })
                  })), v;
                })();
              },
              get children() {
                return u(Ct, {
                  class: "cm-tag-more",
                  get children() {
                    return [mr(), ee(() => c.hide.length)];
                  }
                });
              }
            });
          }
        });
      }
    }), null), m(w, () => e.extra, null), B((v) => {
      var y = t(), C = e.style;
      return v.e = j(w, y, v.e), v.t = W(w, C, v.t), v;
    }, {
      e: void 0,
      t: void 0
    }), w;
  })();
}
function $t() {
  return {
    required(e) {
      return e == null ? !1 : e instanceof Array ? e.length > 0 : `${e}`.length > 0;
    },
    email(e) {
      return /^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
    },
    url(e) {
      return new RegExp("^(?:(?:(?:https?|ftp):)?//)(?:S+(?::S*)?@)?(?:(?!(?:10|127)(?:.d{1,3}){3})(?!(?:169.254|192.168)(?:.d{1,3}){2})(?!172.(?:1[6-9]|2d|3[0-1])(?:.d{1,3}){2})(?:[1-9]d?|1dd|2[01]d|22[0-3])(?:.(?:1?d{1,2}|2[0-4]d|25[0-5])){2}(?:.(?:[1-9]d?|1dd|2[0-4]d|25[0-4]))|(?:(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)(?:.(?:[a-z¡-￿0-9]-*)*[a-z¡-￿0-9]+)*(?:.(?:[a-z¡-￿]{2,})).?)(?::d{2,5})?(?:[/?#]S*)?$", "i").test(e);
    },
    minLength(e, t) {
      return (e ? e.length : 0) >= t;
    },
    maxLength(e, t) {
      return (e ? e.length : 0) <= t;
    },
    min(e, t) {
      return e >= t;
    },
    max(e, t) {
      return e <= t;
    },
    range(e, t) {
      return e >= t[0] && e <= t[1];
    },
    price(e) {
      return /^\d+(.\d{1,2})?$/.test(e);
    },
    idCard(e) {
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e);
    },
    noSpecial(e) {
      return /^[\u4E00-\u9FA5A-Za-z0-9_&]+$/.test(e);
    },
    userName(e) {
      return /^[\u4E00-\u9FA5A-Za-z0-9*]+$/.test(e);
    },
    mobile(e) {
      return /^1[3-8][0-9]{9}$/.test(e);
    },
    ip(e) {
      return /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(e);
    },
    equalTo(e, t, n) {
      const r = n[t];
      return e === r;
    }
  };
}
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, lt.apply(this, arguments);
}
function sc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Tt(e, t);
}
function On(e) {
  return On = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, On(e);
}
function Tt(e, t) {
  return Tt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Tt(e, t);
}
function cc() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Kt(e, t, n) {
  return cc() ? Kt = Reflect.construct.bind() : Kt = function(i, l, a) {
    var s = [null];
    s.push.apply(s, l);
    var c = Function.bind.apply(i, s), d = new c();
    return a && Tt(d, a.prototype), d;
  }, Kt.apply(null, arguments);
}
function oc(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Bn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Bn = function(r) {
    if (r === null || !oc(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, i);
    }
    function i() {
      return Kt(r, arguments, On(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Tt(i, r);
  }, Bn(e);
}
var dc = /%[sdj%]/g, wi = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (wi = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function Vn(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Ye(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = 0, l = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(dc, function(s) {
      if (s === "%%")
        return "%";
      if (i >= l)
        return s;
      switch (s) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return e;
}
function uc(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function _e(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || uc(t) && typeof e == "string" && !e);
}
function hc(e, t, n) {
  var r = [], i = 0, l = e.length;
  function a(s) {
    r.push.apply(r, s || []), i++, i === l && n(r);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function vr(e, t, n) {
  var r = 0, i = e.length;
  function l(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var s = r;
    r = r + 1, s < i ? t(e[s], l) : n([]);
  }
  l([]);
}
function fc(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var yr = /* @__PURE__ */ function(e) {
  sc(t, e);
  function t(n, r) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return t;
}(/* @__PURE__ */ Bn(Error));
function gc(e, t, n, r, i) {
  if (t.first) {
    var l = new Promise(function(g, $) {
      var w = function(y) {
        return r(y), y.length ? $(new yr(y, Vn(y))) : g(i);
      }, f = fc(e);
      vr(f, n, w);
    });
    return l.catch(function(g) {
      return g;
    }), l;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, d = 0, o = [], h = new Promise(function(g, $) {
    var w = function(v) {
      if (o.push.apply(o, v), d++, d === c)
        return r(o), o.length ? $(new yr(o, Vn(o))) : g(i);
    };
    s.length || (r(o), g(i)), s.forEach(function(f) {
      var v = e[f];
      a.indexOf(f) !== -1 ? vr(v, n, w) : hc(v, n, w);
    });
  });
  return h.catch(function(g) {
    return g;
  }), h;
}
function mc(e) {
  return !!(e && e.message !== void 0);
}
function vc(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function $r(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = vc(t, e.fullFields) : r = t[n.field || e.fullField], mc(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function wr(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = lt({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var bi = function(t, n, r, i, l, a) {
  t.required && (!r.hasOwnProperty(t.field) || _e(n, a || t.type)) && i.push(Ye(l.messages.required, t.fullField));
}, yc = function(t, n, r, i, l) {
  (/^\s+$/.test(n) || n === "") && i.push(Ye(l.messages.whitespace, t.fullField));
}, Wt, $c = function() {
  if (Wt)
    return Wt;
  var e = "[a-fA-F\\d:]", t = function(L) {
    return L && L.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), l = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), a = new RegExp("^" + n + "$"), s = new RegExp("^" + i + "$"), c = function(L) {
    return L && L.exact ? l : new RegExp("(?:" + t(L) + n + t(L) + ")|(?:" + t(L) + i + t(L) + ")", "g");
  };
  c.v4 = function(_) {
    return _ && _.exact ? a : new RegExp("" + t(_) + n + t(_), "g");
  }, c.v6 = function(_) {
    return _ && _.exact ? s : new RegExp("" + t(_) + i + t(_), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", o = "(?:\\S+(?::\\S*)?@)?", h = c.v4().source, g = c.v6().source, $ = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", w = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', C = "(?:" + d + "|www\\.)" + o + "(?:localhost|" + h + "|" + g + "|" + $ + w + f + ")" + v + y;
  return Wt = new RegExp("(?:^" + C + "$)", "i"), Wt;
}, br = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Lt = {
  integer: function(t) {
    return Lt.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Lt.number(t) && !Lt.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Lt.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(br.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match($c());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(br.hex);
  }
}, wc = function(t, n, r, i, l) {
  if (t.required && n === void 0) {
    bi(t, n, r, i, l);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Lt[s](n) || i.push(Ye(l.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && i.push(Ye(l.messages.types[s], t.fullField, t.type));
}, bc = function(t, n, r, i, l) {
  var a = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, o = n, h = null, g = typeof n == "number", $ = typeof n == "string", w = Array.isArray(n);
  if (g ? h = "number" : $ ? h = "string" : w && (h = "array"), !h)
    return !1;
  w && (o = n.length), $ && (o = n.replace(d, "_").length), a ? o !== t.len && i.push(Ye(l.messages[h].len, t.fullField, t.len)) : s && !c && o < t.min ? i.push(Ye(l.messages[h].min, t.fullField, t.min)) : c && !s && o > t.max ? i.push(Ye(l.messages[h].max, t.fullField, t.max)) : s && c && (o < t.min || o > t.max) && i.push(Ye(l.messages[h].range, t.fullField, t.min, t.max));
}, ut = "enum", xc = function(t, n, r, i, l) {
  t[ut] = Array.isArray(t[ut]) ? t[ut] : [], t[ut].indexOf(n) === -1 && i.push(Ye(l.messages[ut], t.fullField, t[ut].join(", ")));
}, Cc = function(t, n, r, i, l) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || i.push(Ye(l.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || i.push(Ye(l.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, oe = {
  required: bi,
  whitespace: yc,
  type: wc,
  range: bc,
  enum: xc,
  pattern: Cc
}, kc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n, "string") && !t.required)
      return r();
    oe.required(t, n, i, a, l, "string"), _e(n, "string") || (oe.type(t, n, i, a, l), oe.range(t, n, i, a, l), oe.pattern(t, n, i, a, l), t.whitespace === !0 && oe.whitespace(t, n, i, a, l));
  }
  r(a);
}, _c = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), n !== void 0 && oe.type(t, n, i, a, l);
  }
  r(a);
}, Lc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), _e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), n !== void 0 && (oe.type(t, n, i, a, l), oe.range(t, n, i, a, l));
  }
  r(a);
}, Sc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), n !== void 0 && oe.type(t, n, i, a, l);
  }
  r(a);
}, Mc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), _e(n) || oe.type(t, n, i, a, l);
  }
  r(a);
}, Ec = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), n !== void 0 && (oe.type(t, n, i, a, l), oe.range(t, n, i, a, l));
  }
  r(a);
}, Fc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), n !== void 0 && (oe.type(t, n, i, a, l), oe.range(t, n, i, a, l));
  }
  r(a);
}, Tc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    oe.required(t, n, i, a, l, "array"), n != null && (oe.type(t, n, i, a, l), oe.range(t, n, i, a, l));
  }
  r(a);
}, Pc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), n !== void 0 && oe.type(t, n, i, a, l);
  }
  r(a);
}, Dc = "enum", Ac = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l), n !== void 0 && oe[Dc](t, n, i, a, l);
  }
  r(a);
}, Rc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n, "string") && !t.required)
      return r();
    oe.required(t, n, i, a, l), _e(n, "string") || oe.pattern(t, n, i, a, l);
  }
  r(a);
}, Ic = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n, "date") && !t.required)
      return r();
    if (oe.required(t, n, i, a, l), !_e(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), oe.type(t, c, i, a, l), c && oe.range(t, c.getTime(), i, a, l);
    }
  }
  r(a);
}, zc = function(t, n, r, i, l) {
  var a = [], s = Array.isArray(n) ? "array" : typeof n;
  oe.required(t, n, i, a, l, s), r(a);
}, $n = function(t, n, r, i, l) {
  var a = t.type, s = [], c = t.required || !t.required && i.hasOwnProperty(t.field);
  if (c) {
    if (_e(n, a) && !t.required)
      return r();
    oe.required(t, n, i, s, l, a), _e(n, a) || oe.type(t, n, i, s, l);
  }
  r(s);
}, Nc = function(t, n, r, i, l) {
  var a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(n) && !t.required)
      return r();
    oe.required(t, n, i, a, l);
  }
  r(a);
}, Mt = {
  string: kc,
  method: _c,
  number: Lc,
  boolean: Sc,
  regexp: Mc,
  integer: Ec,
  float: Fc,
  array: Tc,
  object: Pc,
  enum: Ac,
  pattern: Rc,
  date: Ic,
  url: $n,
  hex: $n,
  email: $n,
  required: zc,
  any: Nc
};
function Hn() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Yn = Hn(), Ot = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Yn, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(l) {
      var a = r[l];
      i.rules[l] = Array.isArray(a) ? a : [a];
    });
  }, t.messages = function(r) {
    return r && (this._messages = wr(Hn(), r)), this._messages;
  }, t.validate = function(r, i, l) {
    var a = this;
    i === void 0 && (i = {}), l === void 0 && (l = function() {
    });
    var s = r, c = i, d = l;
    if (typeof c == "function" && (d = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return d && d(null, s), Promise.resolve(s);
    function o(f) {
      var v = [], y = {};
      function C(L) {
        if (Array.isArray(L)) {
          var F;
          v = (F = v).concat.apply(F, L);
        } else
          v.push(L);
      }
      for (var _ = 0; _ < f.length; _++)
        C(f[_]);
      v.length ? (y = Vn(v), d(v, y)) : d(null, s);
    }
    if (c.messages) {
      var h = this.messages();
      h === Yn && (h = Hn()), wr(h, c.messages), c.messages = h;
    } else
      c.messages = this.messages();
    var g = {}, $ = c.keys || Object.keys(this.rules);
    $.forEach(function(f) {
      var v = a.rules[f], y = s[f];
      v.forEach(function(C) {
        var _ = C;
        typeof _.transform == "function" && (s === r && (s = lt({}, s)), y = s[f] = _.transform(y)), typeof _ == "function" ? _ = {
          validator: _
        } : _ = lt({}, _), _.validator = a.getValidationMethod(_), _.validator && (_.field = f, _.fullField = _.fullField || f, _.type = a.getType(_), g[f] = g[f] || [], g[f].push({
          rule: _,
          value: y,
          source: s,
          field: f
        }));
      });
    });
    var w = {};
    return gc(g, c, function(f, v) {
      var y = f.rule, C = (y.type === "object" || y.type === "array") && (typeof y.fields == "object" || typeof y.defaultField == "object");
      C = C && (y.required || !y.required && f.value), y.field = f.field;
      function _(N, P) {
        return lt({}, P, {
          fullField: y.fullField + "." + N,
          fullFields: y.fullFields ? [].concat(y.fullFields, [N]) : [N]
        });
      }
      function L(N) {
        N === void 0 && (N = []);
        var P = Array.isArray(N) ? N : [N];
        !c.suppressWarning && P.length && e.warning("async-validator:", P), P.length && y.message !== void 0 && (P = [].concat(y.message));
        var D = P.map($r(y, s));
        if (c.first && D.length)
          return w[y.field] = 1, v(D);
        if (!C)
          v(D);
        else {
          if (y.required && !f.value)
            return y.message !== void 0 ? D = [].concat(y.message).map($r(y, s)) : c.error && (D = [c.error(y, Ye(c.messages.required, y.field))]), v(D);
          var E = {};
          y.defaultField && Object.keys(f.value).map(function(M) {
            E[M] = y.defaultField;
          }), E = lt({}, E, f.rule.fields);
          var b = {};
          Object.keys(E).forEach(function(M) {
            var S = E[M], O = Array.isArray(S) ? S : [S];
            b[M] = O.map(_.bind(null, M));
          });
          var k = new e(b);
          k.messages(c.messages), f.rule.options && (f.rule.options.messages = c.messages, f.rule.options.error = c.error), k.validate(f.value, f.rule.options || c, function(M) {
            var S = [];
            D && D.length && S.push.apply(S, D), M && M.length && S.push.apply(S, M), v(S.length ? S : null);
          });
        }
      }
      var F;
      if (y.asyncValidator)
        F = y.asyncValidator(y, f.value, L, f.source, c);
      else if (y.validator) {
        try {
          F = y.validator(y, f.value, L, f.source, c);
        } catch (N) {
          console.error?.(N), c.suppressValidatorError || setTimeout(function() {
            throw N;
          }, 0), L(N.message);
        }
        F === !0 ? L() : F === !1 ? L(typeof y.message == "function" ? y.message(y.fullField || y.field) : y.message || (y.fullField || y.field) + " fails") : F instanceof Array ? L(F) : F instanceof Error && L(F.message);
      }
      F && F.then && F.then(function() {
        return L();
      }, function(N) {
        return L(N);
      });
    }, function(f) {
      o(f);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Mt.hasOwnProperty(r.type))
      throw new Error(Ye("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), l = i.indexOf("message");
    return l !== -1 && i.splice(l, 1), i.length === 1 && i[0] === "required" ? Mt.required : Mt[this.getType(r)] || void 0;
  }, e;
}();
Ot.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Mt[t] = n;
};
Ot.warning = wi;
Ot.messages = Yn;
Ot.validators = Mt;
var Oc = /* @__PURE__ */ x("<div class=cm-form-item-element>"), Bc = /* @__PURE__ */ x("<div><label>"), Vc = /* @__PURE__ */ x("<div class=cm-form-item-element><div class=cm-form-item-error-tip>");
const xi = Ee();
function Bt(e) {
  const [t, n] = K(null), r = Se(dn), i = $t();
  let l;
  const a = e.labelAlign ?? "center", s = e.errorTransfer ?? r?.errorTransfer ?? !1, c = e.errorAlign ?? r?.errorAlign ?? "right", d = e.name;
  let o = !1;
  if (d && r?.form?.getValidation && r?.form?.getValidation(d)) {
    const v = r.form.getValidation(d);
    o = Array.isArray(v) ? v.some((y) => y.required) : v.required;
  }
  e.rules && (o = Array.isArray(e.rules) ? e.rules.some((v) => v.required) : e.rules.required);
  const h = () => U(e, "cm-form-item", {
    "cm-form-item-error": t(),
    "cm-form-item-inline": e.inline || r?.inline,
    "cm-form-item-required": o && e.label
  }), g = async (v, y, C) => {
    if (y.required) {
      const _ = await i.required(v, y.required, r?.form);
      if (!_)
        return n(C ? C.required : ""), _;
    }
    for (const _ in y)
      if (_ !== "required") {
        if (i[_]) {
          const L = await i[_](v, y[_], r?.form);
          if (!L)
            return n(C ? C[_] : ""), L;
        }
        if (y[_] && typeof y[_] == "function") {
          const L = await y[_](v, r?.form);
          if (!L)
            return n(C ? C[_] : ""), L;
        }
      }
    return n(null), !0;
  }, $ = async (v, y) => {
    const C = {
      [`${d}`]: y
    }, _ = new Ot(C), L = {
      [`${d}`]: v
    };
    return new Promise((F) => {
      _.validate(L, {
        firstFields: !0
      }, (N) => {
        N ? (n(N[0].message), F(!1)) : (n(null), F(!0));
      });
    });
  }, w = async (v) => {
    if (l) {
      const y = l.getBoundingClientRect();
      if (y.width === 0 || y.height === 0)
        return !0;
    }
    if (d && r?.form?.getValidation(d) || r && e.rules) {
      const y = r?.form?.getValidation(d) || e.rules, C = r?.form?.getMessage(d) || e.messages;
      return Array.isArray(y) ? $(v, y) : g(v, y, C);
    }
    return !0;
  };
  e.name || console.warn("formItem needs name property to check valid");
  const f = () => {
    n(null);
  };
  return e.name && r?.form?.setCheckValid && r.form?.setCheckValid(e.name, w), e.name && r?.form?.setClearValid && r.form?.setClearValid(e.name, f), u(xi.Provider, {
    get value() {
      return {
        name: e.name,
        propagation: !0
      };
    },
    get children() {
      var v = Bc(), y = v.firstChild;
      return m(y, () => e.label), m(v, u(V, {
        when: s,
        get fallback() {
          return (() => {
            var C = Vc(), _ = C.firstChild, L = l;
            return typeof L == "function" ? Z(L, C) : l = C, m(C, () => e.children, _), m(_, t), C;
          })();
        },
        get children() {
          return u(un, {
            class: "cm-form-item-error-popover",
            arrow: !0,
            align: c,
            theme: "error",
            get disabled() {
              return !t();
            },
            get content() {
              return t();
            },
            get children() {
              var C = Oc(), _ = l;
              return typeof _ == "function" ? Z(_, C) : l = C, m(C, () => e.children), C;
            }
          });
        }
      }), null), B((C) => {
        var _ = h(), L = e.style, F = {
          "cm-form-label": !0,
          [`cm-form-label-${a}`]: !0
        }, N = {
          width: r?.labelWidth + "px",
          ...e.labelStyle
        };
        return C.e = j(v, _, C.e), C.t = W(v, L, C.t), C.a = j(y, F, C.a), C.o = W(y, N, C.o), C;
      }, {
        e: void 0,
        t: void 0,
        a: void 0,
        o: void 0
      }), v;
    }
  });
}
const Hc = () => Se(xi);
function Fe(e, t, n) {
  arguments.length === 2 && (n = t, t = "value");
  let r, i;
  e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (r = e[t][0], i = e[t][1]) : [r, i] = K(e[t] || n);
  const l = Se(dn);
  l?.form?.getFormData && l.form?.getFormData();
  const a = Hc(), s = a?.propagation || e.asFormField, c = e.name || a?.name, d = c ? l?.form?.getValueByPath(c) : void 0;
  return d != null && s && i(d), l && l.form && c && s && (l.form.bindController(c, r, i), he(() => {
    l.form?.unBindController(c);
  })), a && (a.propagation = !1), [r, (h) => (i(h), s && (c && l?.onChange(c, h), c && a?.name && c !== a?.name && l?.onChange(a?.name, void 0, !0)), h)];
}
var xr = /* @__PURE__ */ x("<span class=cm-progress-info>"), Yc = /* @__PURE__ */ x("<div class=cm-progress-bar>"), qc = /* @__PURE__ */ x("<svg width=100% height=100% version=1.1 xmlns=http://www.w3.org/2000/svg><circle stroke=#f3f3f3 fill-opacity=0></circle><path class=cm-progress-bar-path stroke-linecap=round fill-opacity=0>"), jc = /* @__PURE__ */ x("<div><div class=cm-progress-outer><div class=cm-progress-inner>");
function Ci(e) {
  const t = () => e.max ?? 100, n = () => e.value && e.value < 0 ? 0 : e.value && e.value >= t() ? t() : e.value ?? 0, r = e.strokeWidth ?? 10, i = e.type ?? "line", l = () => e.radius ?? 60, a = () => n() === 100 ? "finished" : e.status ?? "normal", s = () => U(e, "cm-progress", {
    "cm-progress-hide-info": e.hidePercent,
    [`cm-progress-${a()}`]: !!a(),
    [`cm-progress-${i}`]: !!i
  }), c = () => `${n()}%`, d = () => {
    const y = a(), C = i === "line" ? 12 : 24;
    return e.infoRender ? e.infoRender(y, n()) : y === "finished" ? u(pi, {
      size: C
    }) : y === "error" ? u(cn, {
      size: C
    }) : `${n()}%`;
  }, o = () => {
    const y = {
      width: c(),
      height: `${r}px`
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (y["background-color"] = e.strokeColor), e.strokeColor instanceof Array)) {
      const C = e.strokeColor.length, _ = e.strokeColor.map((L, F) => L + " " + F / C * 100 + "%");
      y["background-image"] = `linear-gradient(to right, ${_.join(",")})`;
    }
    return y;
  }, h = 2 * Math.PI, g = () => (Math.sin(h) * l()).toFixed(2), $ = () => -(Math.cos(h) * l()).toFixed(2), w = () => l() + r / 2, f = () => ["M", 0, -l(), "A", l(), l(), 0, 1, 1, g(), -$(), "A", l(), l(), 0, 1, 1, g(), $()], v = () => {
    const y = () => n() / t(), C = () => h * l(), L = {
      "stroke-dashoffset": `${(() => C() * (1 - y()))()}`,
      "stroke-dasharray": C()
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (L.stroke = e.strokeColor), e.strokeColor instanceof Array))
      for (let F = 0; F < e.strokeColor.length; F++) {
        const N = e.strokeColor[F];
        y() * 100 >= N.percent && (L.stroke = N.color);
      }
    return L;
  };
  return (() => {
    var y = jc(), C = y.firstChild, _ = C.firstChild;
    return m(_, u(Ze, {
      get children() {
        return [u(fe, {
          when: i === "line",
          get children() {
            var L = Yc();
            return m(L, u(V, {
              get when() {
                return e.textInside;
              },
              get children() {
                var F = xr();
                return m(F, () => `${n()}%`), F;
              }
            })), B((F) => W(L, o(), F)), L;
          }
        }), u(fe, {
          when: i === "circle",
          get children() {
            var L = qc(), F = L.firstChild, N = F.nextSibling;
            return L.style.setProperty("display", "block"), ne(F, "stroke-width", r), ne(N, "stroke-width", r), B((P) => {
              var D = 2 * l() + r + "px", E = 2 * l() + r + "px", b = w(), k = w(), M = l(), S = f().join(" "), O = `translate(${w()},${w()})`, R = v();
              return D !== P.e && ((P.e = D) != null ? L.style.setProperty("width", D) : L.style.removeProperty("width")), E !== P.t && ((P.t = E) != null ? L.style.setProperty("height", E) : L.style.removeProperty("height")), b !== P.a && ne(F, "cx", P.a = b), k !== P.o && ne(F, "cy", P.o = k), M !== P.i && ne(F, "r", P.i = M), S !== P.n && ne(N, "d", P.n = S), O !== P.s && ne(N, "transform", P.s = O), P.h = W(N, R, P.h), P;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0,
              i: void 0,
              n: void 0,
              s: void 0,
              h: void 0
            }), L;
          }
        })];
      }
    })), m(y, u(V, {
      get when() {
        return !e.textInside;
      },
      get children() {
        var L = xr();
        return m(L, d), L;
      }
    }), null), B((L) => j(y, s(), L)), y;
  })();
}
var Wc = /* @__PURE__ */ x("<div>"), Uc = /* @__PURE__ */ x("<span class=cm-word-count-prefix>"), Cr = /* @__PURE__ */ x("<span>"), Xc = /* @__PURE__ */ x("<span>/"), Kc = /* @__PURE__ */ x("<span class=cm-word-count-suffix>");
function ki(e) {
  const t = () => (e.value ?? "").length > e.total, n = () => {
    const a = e.value ?? "";
    return e.overflow && t() ? a.length - e.total : a.length;
  }, r = () => {
    const a = e.value ?? "";
    return Math.min(a.length / e.total * 100, 100);
  }, i = e.radius ?? 10, l = () => U(e, "cm-word-count");
  return (() => {
    var a = Wc();
    return m(a, u(V, {
      get when() {
        return e.circle;
      },
      get fallback() {
        return [(() => {
          var s = Uc();
          return m(s, () => t() ? e.prefixOverflow : e.prefix), B(() => s.classList.toggle("cm-word-count-overflow", !!t())), s;
        })(), (() => {
          var s = Cr();
          return m(s, n), B(() => pe(s, t() ? "cm-word-count-overflow" : "")), s;
        })(), Xc(), (() => {
          var s = Cr();
          return m(s, () => e.total), s;
        })(), (() => {
          var s = Kc();
          return m(s, () => t() ? e.suffixOverflow : e.suffix), B(() => s.classList.toggle("cm-word-count-overflow", !!t())), s;
        })()];
      },
      get children() {
        return u(Ci, {
          type: "circle",
          radius: i,
          strokeWidth: 1,
          hidePercent: !0,
          get value() {
            return r();
          }
        });
      }
    })), B((s) => {
      var c = l(), d = e.style;
      return s.e = j(a, c, s.e), s.t = W(a, d, s.t), s;
    }, {
      e: void 0,
      t: void 0
    }), a;
  })();
}
var Gc = /* @__PURE__ */ x("<div class=cm-input-prefix>"), Zc = /* @__PURE__ */ x("<div class=cm-input-group-prepend>"), Jc = /* @__PURE__ */ x("<textarea class=cm-input>"), Qc = /* @__PURE__ */ x("<div class=cm-input-suffix>"), pc = /* @__PURE__ */ x("<div class=cm-input-group-append>"), eo = /* @__PURE__ */ x("<div>"), to = /* @__PURE__ */ x("<input class=cm-input>");
function Ve(e) {
  let t = e.suffix;
  e.password && (t = () => u(V, {
    get when() {
      return n() === "password";
    },
    get fallback() {
      return u(Jr, {
        class: "cm-input-password-icon",
        onClick: w
      });
    },
    get children() {
      return u(el, {
        class: "cm-input-password-icon",
        onClick: w
      });
    }
  }));
  const [n, r] = K(e.type || "text"), i = () => U(e, "cm-input-wrapper", {
    "cm-input-disabled": e.disabled,
    "cm-input-auto-height": e.autoHeight,
    "cm-textarea": n() === "textarea",
    "cm-input-hidden": n() === "hidden",
    [`cm-input-${e.size}`]: e.size,
    "cm-input-group-with-prefix": e.prefix,
    "cm-input-group-with-suffix": t,
    "cm-input-group-with-append": e.append,
    "cm-input-group-with-prepend": e.prepend
  }), [l, a] = de(e, ["classList", "class", "name", "style", "disabled", "size", "type", "append", "prepend", "prefix", "suffix", "suffixStyle", "prefixStyle", "clearable", "value", "onChange", "onEnter", "onKeyDown", "onKeyUp", "onInput", "trigger", "password"]), s = {};
  l.suffixStyle && l.suffixStyle.width && (s["padding-right"] = l.suffixStyle.width + "px"), l.prefixStyle && l.prefixStyle.width && (s["padding-left"] = l.prefixStyle.width + "px");
  const [c, d] = Fe(e, ""), [o, h] = K(c()), [g, $] = K(!1), w = () => {
    r(n() === "password" ? "text" : "password");
  }, f = l.trigger || "blur", v = (b) => {
    f === "input" && (g() || (d(b.target.value), l.onChange && l.onChange(b.target.value))), h(b.target.value), l.onInput && l.onInput(b.target.value, b), n() === "textarea" && e.autoHeight && L(b);
  }, y = (b) => {
    $(!0), e.onCompositionStart?.(b);
  }, C = (b) => {
    $(!1), v(b), e.onCompositionEnd?.(b);
  };
  let _;
  const L = (b) => {
    const k = b.target;
    _ || (_ = k.clientHeight), k.scrollHeight > _ && (k.value.split(`
`).length === 1 ? k.style.height = `${_}px` : k.style.height = "auto", k.style.overflowY = "hidden", k.scrollTop = 0, k.style.height = `${k.scrollHeight}px`);
  }, F = (b) => {
  }, N = (b) => {
    const k = b.target.value;
    d(k), f === "blur" && l.onChange && l.onChange(k), e.onBlur?.(b);
  }, P = () => {
    d(""), l.onChange && l.onChange("");
  }, D = (b) => {
    b.keyCode === 13 && l.onEnter && l.onEnter(c()), l.onKeyUp && l.onKeyUp(b);
  }, E = (b) => {
    b.keyCode === 13 && (d(b.target.value), l.onChange && l.onChange(b.target.value)), l.onKeyDown && l.onKeyDown(b);
  };
  return (() => {
    var b = eo();
    return m(b, u(V, {
      get when() {
        return l.prefix;
      },
      get children() {
        var k = Gc();
        return m(k, () => l.prefix), B((M) => W(k, l.prefixStyle, M)), k;
      }
    }), null), m(b, u(V, {
      get when() {
        return l.prepend;
      },
      get children() {
        var k = Zc();
        return m(k, () => l.prepend), k;
      }
    }), null), m(b, u(V, {
      get when() {
        return n() === "textarea";
      },
      get fallback() {
        return (() => {
          var k = to(), M = e.ref;
          return typeof M == "function" ? Z(M, k) : e.ref = k, ye(k, te(a, {
            get value() {
              return c();
            },
            get autocomplete() {
              return e.autocomplete || "off";
            },
            onChange: F,
            onInput: v,
            onBlur: N,
            get disabled() {
              return l.disabled;
            },
            style: s,
            onKeyDown: E,
            onKeyUp: D,
            get type() {
              return n();
            },
            onCompositionStart: y,
            onCompositionEnd: C
          }), !1, !1), k;
        })();
      },
      get children() {
        var k = Jc(), M = e.ref;
        return typeof M == "function" ? Z(M, k) : e.ref = k, ye(k, te(a, {
          get value() {
            return c();
          },
          spellcheck: !1,
          get autocomplete() {
            return e.autocomplete || "off";
          },
          wrap: "soft",
          onChange: F,
          onInput: v,
          onBlur: N,
          get disabled() {
            return l.disabled;
          },
          style: s,
          onKeyDown: E,
          onKeyUp: D
        }), !1, !1), k;
      }
    }), null), m(b, u(V, {
      get when() {
        return ee(() => !!l.clearable)() && c();
      },
      get children() {
        return u(cn, {
          class: "cm-input-clear",
          onClick: P,
          size: 14
        });
      }
    }), null), m(b, u(V, {
      get when() {
        return t || e.wordCount && e.maxLength;
      },
      get children() {
        var k = Qc();
        return m(k, u(V, {
          get when() {
            return e.wordCount && e.maxLength;
          },
          fallback: t,
          get children() {
            return u(ki, {
              get total() {
                return e.maxLength;
              },
              get value() {
                return o();
              }
            });
          }
        })), B((M) => W(k, l.suffixStyle, M)), k;
      }
    }), null), m(b, u(V, {
      get when() {
        return l.append;
      },
      get children() {
        var k = pc();
        return m(k, () => l.append), k;
      }
    }), null), B((k) => {
      var M = i(), S = l.style;
      return k.e = j(b, M, k.e), k.t = W(b, S, k.t), k;
    }, {
      e: void 0,
      t: void 0
    }), b;
  })();
}
var no = /* @__PURE__ */ x("<div class=cm-field-prepend>"), ro = /* @__PURE__ */ x("<div class=cm-field-selection>"), io = /* @__PURE__ */ x("<div class=cm-field-text>"), lo = /* @__PURE__ */ x("<div tabindex=1><input type=hidden><span>A</span><span class=cm-field-cert>"), ao = /* @__PURE__ */ x("<span>"), so = /* @__PURE__ */ x("<span class=cm-field-placeholder>");
function wt(e) {
  const [t, n] = e.query ?? [() => "", () => {
  }], [r, i] = K("");
  let l, a;
  const s = (v) => {
    v.stopImmediatePropagation && v.stopImmediatePropagation(), v.preventDefault && v.preventDefault(), v.stopPropagation && v.stopPropagation(), e.onClear && e.onClear(v);
  }, c = () => ({
    "cm-field-value": !0,
    "cm-field-clearable": e.clearable && !!e.text && !!e.text.length,
    "cm-field-disabled": e.disabled,
    [`cm-field-value-${e.size}`]: !!e.size
  }), d = () => (Promise.resolve().then(() => {
    e.filter && l && l.focus();
  }), e.multi && e.text && e.text instanceof Array ? e.text.map((v, y) => ({
    id: v.id,
    title: v.title
  })) : []), o = () => (e.filter && t(), h(), {
    width: "10px"
    // width: str !== undefined ? str.length * 12 + 20 + 'px' : '100%',
  }), h = () => {
    l.style.width = "10px", l.style.width = l.scrollWidth + "px", Promise.resolve().then(() => {
      l.style.width = "10px";
      const v = Math.floor(a?.getBoundingClientRect().width || 10);
      l.style.width = l.scrollWidth + "px", l.parentElement.style.width = Math.min(v - 20, l.scrollWidth) + "px";
    });
  }, g = (v, y) => {
    h(), i(v);
  }, $ = () => {
    e.filter && l && l.focus();
  }, w = (v) => {
    const y = t();
    (v.key === "Backspace" || v.code === "Backspace" || v.key === "Delete" || v.code === "Delete") && y.length === 0 && e.onDeleteLastValue && e.onDeleteLastValue();
  }, f = () => {
    e.onlyInput || e.filter && (i(""), setTimeout(() => {
      n("");
    }, 100));
  };
  return (() => {
    var v = lo(), y = v.firstChild, C = y.nextSibling, _ = C.nextSibling;
    return v.$$click = $, C.style.setProperty("width", "0px"), C.style.setProperty("font-size", "12px"), C.style.setProperty("visibility", "hidden"), C.style.setProperty("line-height", "initial"), m(v, u(V, {
      get when() {
        return e.prepend;
      },
      get children() {
        var L = no();
        return m(L, () => e.prepend), L;
      }
    }), _), m(v, u(Ze, {
      get children() {
        return [u(fe, {
          get when() {
            return e.multi;
          },
          get children() {
            var L = ro(), F = a;
            return typeof F == "function" ? Z(F, L) : a = L, m(L, u(ac, {
              get data() {
                return d();
              },
              get closable() {
                return e.valueClosable;
              },
              get max() {
                return e.showMax;
              },
              get showMore() {
                return e.showMore;
              },
              get onClose() {
                return e.onClose;
              },
              get size() {
                return e.size === "small" ? "small" : "large";
              },
              get extra() {
                return ee(() => !!e.filter)() ? u(Ve, {
                  ref(N) {
                    var P = l;
                    typeof P == "function" ? P(N) : l = N;
                  },
                  get style() {
                    return o();
                  },
                  class: "cm-select-filter",
                  onBlur: f,
                  trigger: "input",
                  get size() {
                    return e.size;
                  },
                  value: [t, n],
                  onKeyDown: w,
                  onInput: g
                }) : null;
              }
            })), L;
          }
        }), u(fe, {
          get when() {
            return !e.multi;
          },
          get children() {
            var L = io(), F = a;
            return typeof F == "function" ? Z(F, L) : a = L, m(L, u(V, {
              get when() {
                return !e.onlyInput;
              },
              get children() {
                return ee(() => !!e.text)() ? (() => {
                  var N = ao();
                  return m(N, () => e.text), B((P) => (P = r() ? "none" : "inline-block") != null ? N.style.setProperty("display", P) : N.style.removeProperty("display")), N;
                })() : (() => {
                  var N = so();
                  return m(N, () => e.placeholder ?? ""), B((P) => (P = r() ? "none" : "inline-block") != null ? N.style.setProperty("display", P) : N.style.removeProperty("display")), N;
                })();
              }
            }), null), m(L, u(V, {
              get when() {
                return e.filter;
              },
              get children() {
                return u(Ve, {
                  ref(N) {
                    var P = l;
                    typeof P == "function" ? P(N) : l = N;
                  },
                  get style() {
                    return o();
                  },
                  class: "cm-select-filter",
                  trigger: "input",
                  get size() {
                    return e.size;
                  },
                  value: [t, n],
                  onInput: g,
                  onBlur: f
                });
              }
            }), null), L;
          }
        })];
      }
    }), _), m(_, () => e.icon), m(v, u(V, {
      get when() {
        return e.clearable && e.text && e.text !== "";
      },
      get children() {
        return u(cn, {
          class: "cm-field-clear",
          onClick: s
        });
      }
    }), null), B((L) => j(v, c(), L)), v;
  })();
}
ae(["click"]);
var co = /* @__PURE__ */ x("<div>"), oo = /* @__PURE__ */ x("<div class=cm-select-options-wrap><div class=cm-select-options><ul class=cm-select-option-list>");
function Im(e) {
  const [t, n] = K(!1), r = e.align ?? "bottomLeft", [i, l] = Fe(e, ""), [a, s] = K(""), c = () => U(e, "cm-select", "cm-autocomplete", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && i().length !== 0,
    "cm-select-open": t(),
    "cm-select-with-prefix": e.prefix
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let d;
  const o = "label", h = e.valueField || "value";
  let g = !1, $ = [];
  e.data && ($ = e.data.map((L) => typeof L == "object" ? (L._show = !0, L) : {
    [h]: L,
    label: L,
    _show: !0
  }));
  const [w, f] = we({
    list: $
  });
  Q(() => {
    const L = i();
    f("list", (F) => F, p((F) => {
      F._checked = L === F[h];
    }));
  }), Q(() => {
    e.data && ($ = e.data.map((L) => typeof L == "object" ? (L._show = !0, L) : {
      [h]: L,
      label: L,
      _show: !0
    }), f("list", () => [...$]), $.length && n(!0));
  }), Q(() => {
    const L = a();
    g || L.length && e.onSearch && e.onSearch(L);
  });
  const v = (L, F) => {
    l(L), g = !0, s(F[o]), queueMicrotask(() => {
      g = !1;
    }), e.onChange && e.onChange(L, F), n(!1);
  }, y = () => {
    const L = i();
    let F;
    return Ie(() => {
      F = w.list.find((N) => N[h] === L);
    }), F ? F[o] : e.emptyOption ? e.emptyOption : "";
  }, C = (L) => {
    L.preventDefault && L.preventDefault(), L.stopPropagation && L.stopPropagation(), e.onChange && e.onChange(""), l("");
  }, _ = () => !!(w.list && w.list.length);
  return (() => {
    var L = co(), F = d;
    return typeof F == "function" ? Z(F, L) : d = L, m(L, u(Ae, {
      get transfer() {
        return e.transfer;
      },
      fixWidth: !0,
      align: r,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [t, n],
      onBeforeDrop: _,
      get menu() {
        return (() => {
          var N = oo(), P = N.firstChild, D = P.firstChild;
          return m(D, u(le, {
            get each() {
              return w.list;
            },
            children: (E) => u(tc, {
              get renderOption() {
                return e.renderOption;
              },
              get visible() {
                return E._show;
              },
              get disabled() {
                return E.disabled;
              },
              data: E,
              get checked() {
                return E._checked;
              },
              valueField: h,
              textField: o,
              onClick: v
            })
          })), N;
        })();
      },
      get children() {
        return u(wt, {
          get text() {
            return y();
          },
          get disabled() {
            return e.disabled;
          },
          filter: !0,
          query: [a, s],
          get clearable() {
            return e.clearable;
          },
          onClear: C,
          get placeholder() {
            return e.placeholder;
          },
          onlyInput: !0,
          get prepend() {
            return e.prefix;
          },
          get size() {
            return e.size;
          },
          get icon() {
            return u(tt, {
              class: "cm-select-cert"
            });
          }
        });
      }
    })), B((N) => {
      var P = c(), D = e.style;
      return N.e = j(L, P, N.e), N.t = W(L, D, N.t), N;
    }, {
      e: void 0,
      t: void 0
    }), L;
  })();
}
var uo = /* @__PURE__ */ x("<div><span>A</span><input><span class=cm-checkbox-outter><span class=cm-checkbox-inner>"), ho = /* @__PURE__ */ x("<label>");
function Ke(e) {
  const t = e.type || "checkbox", n = () => ({
    ...e.classList,
    [e.class]: !0,
    "cm-checkbox": !0,
    "cm-checkbox-checked": e.checked,
    "cm-checkbox-indeterminate": e.checked === "indeterminate",
    disabled: e.disabled
  }), r = () => {
    if (e.disabled || t == "radio" && e.checked)
      return;
    let i = e.checked;
    i === "indeterminate" ? i = !0 : i = !i, e.onChange && e.onChange(i, e.value);
  };
  return (() => {
    var i = uo(), l = i.firstChild, a = l.nextSibling, s = a.nextSibling;
    return i.$$click = r, l.style.setProperty("width", "0px"), l.style.setProperty("font-size", "12px"), l.style.setProperty("visibility", "hidden"), a.addEventListener("change", () => {
    }), ne(a, "type", t), a.style.setProperty("display", "none"), s.style.setProperty("position", "relative"), m(i, (() => {
      var c = ee(() => !!e.label);
      return () => c() ? (() => {
        var d = ho();
        return m(d, () => e.label), d;
      })() : null;
    })(), null), B((c) => {
      var d = n(), o = e.name;
      return c.e = j(i, d, c.e), o !== c.t && ne(a, "name", c.t = o), c;
    }, {
      e: void 0,
      t: void 0
    }), B(() => a.value = e.value), i;
  })();
}
ae(["click"]);
var fo = /* @__PURE__ */ x("<div><span class=cm-cascader-text>");
function go(e) {
  const t = e.store, n = t.valueField || "value", r = t.titleField || "title", i = () => t.selectedKey().includes(e.data[n]), l = () => ({
    "cm-cascader-item": !0,
    "cm-cascader-item-active": i(),
    "cm-cascader-item-disabled": e.data.disabled
  }), a = Li(), [s, c] = K(!1), d = async () => {
    if (!e.data.disabled) {
      if (e.data.loading && a && a.loadData)
        try {
          c(!0), await t.loadData(e.data, a.loadData);
        } catch {
        } finally {
          c(!1);
        }
      e.trigger === "click" && t.selectItem(e.data[n]), a && a.onSelect(e.data);
    }
  };
  let o = null;
  const h = () => {
    e.data.disabled || (o && clearTimeout(o), o = setTimeout(() => {
      !i() && t.selectItem(e.data[n]);
    }, 100));
  }, g = ($) => {
    t.checkNode(e.data[n], $);
  };
  return (() => {
    var $ = fo(), w = $.firstChild;
    return Me($, "mouseenter", e.trigger === "hover" ? h : void 0), $.$$click = d, m($, () => e.data.icon, w), m($, (() => {
      var f = ee(() => !!a.multi);
      return () => f() ? u(Ke, {
        get disabled() {
          return e.data.disabled;
        },
        get checked() {
          return e.data.checked;
        },
        onChange: g
      }) : null;
    })(), w), m(w, () => e.data[r]), m($, u(V, {
      get when() {
        return e.data.children && e.data.children.length || e.data.loading;
      },
      get children() {
        return u(V, {
          get when() {
            return s();
          },
          get fallback() {
            return u(Xe, {
              class: "cm-menu-submenu-cert"
            });
          },
          get children() {
            return u(mt, {
              color: "#1890ff"
            });
          }
        });
      }
    }), null), B((f) => j($, l(), f)), $;
  })();
}
ae(["click"]);
var mo = /* @__PURE__ */ x("<div class=cm-cascader-list>"), vo = /* @__PURE__ */ x("<div class=cm-cascader-empty>");
function yo(e) {
  const t = () => e.data;
  return (() => {
    var n = mo();
    return m(n, u(V, {
      get when() {
        return t().length;
      },
      get fallback() {
        return (() => {
          var r = vo();
          return m(r, u(pn, {
            width: 100,
            type: "empty",
            typeImage: Qn,
            get desc() {
              return e.emptyText;
            }
          })), r;
        })();
      },
      get children() {
        return u(le, {
          get each() {
            return t();
          },
          children: (r) => u(go, {
            get trigger() {
              return e.trigger;
            },
            get data() {
              return e.store.store.nodeMap[r];
            },
            get store() {
              return e.store;
            },
            get level() {
              return e.level;
            }
          })
        });
      }
    })), B(() => n.classList.toggle("cm-cascader-list-empty", !t().length)), n;
  })();
}
class $o {
  store;
  setStore;
  data = [];
  flatData = [];
  valueField = "value";
  titleField = "title";
  selectedKey;
  setSelectedKey;
  value;
  setValue;
  props;
  mode;
  valMap = {};
  constructor(t) {
    this.props = t, this.valueField = t.valueField || "value", this.titleField = t.titleField || "title", this.mode = t.mode ?? "HALF";
    const [n, r] = we({
      nodeMap: {},
      columns: [],
      filteredList: []
    });
    this.store = n, this.setStore = r;
    const [i, l] = K([]), [a, s] = Fe(t, "value", []);
    this.selectedKey = i, this.setSelectedKey = l, this.setValue = s, this.value = a, this.init(t.data), this.valMap.__ = this.data.map((c) => c[this.valueField]), Q(() => {
      this.data !== t.data && (this.init(t.data), this.valMap.__ = this.data.map((c) => c[this.valueField]));
    }), Q(() => {
      const c = i(), d = [this.valMap.__];
      c && c.length && c.forEach((o) => {
        if (this.valMap[o])
          d.push(this.valMap[o]);
        else {
          const h = n.nodeMap[o];
          if (h && h.children) {
            const g = h.children.map(($) => $[this.valueField]);
            this.valMap[o] = g, d.push(g);
          }
        }
      }), r("columns", d);
    }), Q(() => {
      const c = a();
      t.multi ? this.setCheckedByMod(c) : l(c || []);
    });
  }
  init(t) {
    this.data = t, this.flatData = this.getAllFlatNodes(this.data), this.setStore("nodeMap", {}), this.setStore("filteredList", []), this.buildRelation(this.data, null, 0);
  }
  /**
   * 构建父子关系和层级关系
   * @param data
   * @param parent
   * @param level
   */
  buildRelation = (t, n, r) => {
    const i = {};
    t.forEach((l) => {
      i[l[this.valueField]] = l, l._parent = n, l._level = r, l.children && this.buildRelation(l.children, l, r + 1);
    }), this.setStore("nodeMap", i);
  };
  /**
   * 获取显示的树节点
   * @param nodes
   * @returns
   */
  getAllFlatNodes = (t) => t.flatMap((r) => r.children?.length ? [r, this.getAllFlatNodes(r.children)].flat() : [r]);
  getStore() {
    return this.store;
  }
  clearSelect = () => {
  };
  /**
   * 过滤
   * @param keyword
   */
  filter(t) {
    if (t) {
      const i = this.flatData.filter((l) => !l.children || l.children.length === 0).map((l) => {
        const a = [];
        a.push(l);
        let s = l._parent;
        for (; s; )
          a.push(s), s = s._parent;
        return a.reverse(), a;
      }).filter((l) => l.some((a) => a[this.titleField].includes(t)));
      this.setStore("filteredList", i);
    } else
      this.setStore("filteredList", []);
  }
  getNode = (t) => this.store.nodeMap[t];
  /**
   * 选择节点
   * @param key
   */
  selectItem = (t) => {
    const n = this._getNode(t);
    if (n) {
      const r = [];
      for (let i = 0; i < n._level; i++)
        r.push(this.selectedKey()[i]);
      r[n._level] = n[this.valueField], this.setSelectedKey(r);
    }
  };
  _getNode = (t) => {
    let n;
    return typeof t == "string" || typeof t == "number" ? n = this.store.nodeMap[t] : (n = t, t = n[this.valueField]), n;
  };
  /**
   * 更新节点选择状态
   * @param nodeId
   */
  updateNodeCheckStatus = (t) => {
    if (!t)
      return;
    const n = this._getNode(t);
    n && (this.setStore("nodeMap", n[this.valueField], p((r) => {
      r.checked = this.getNodeChecked(r);
    })), this.setCheckedForwardUp(n));
  };
  checkNode = (t, n) => {
    const r = this._getNode(t);
    if (n && this.props.max && this.value().length >= this.props.max) {
      this.props.onExceed?.();
      return;
    }
    this.setStore("nodeMap", r[this.valueField], p((l) => {
      l.checked = n, this.setCheckedForwardDown(l, n), l.checked = this.getNodeChecked(r), this.setCheckedForwardUp(l);
    }));
    const i = this.getCheckedKeys(this.mode);
    this.setValue(i), this.props.onChange && this.props.onChange(i);
  };
  setCheckedForwardDown = (t, n) => {
    t.children && t.children.forEach((r) => {
      r.disabled || (this.setStore("nodeMap", r[this.valueField], p((i) => {
        i.checked = n;
      })), this.setCheckedForwardDown(r, n));
    });
  };
  getNodeChecked = (t) => {
    const n = this._getNode(t);
    if (!n.children || n.children.length === 0)
      return n.checked;
    {
      let r = !1, i = 0, l = 0;
      return n.children.forEach((a) => {
        a.checked === !0 && i++, a.checked === "indeterminate" && l++;
      }), i === n.children.length ? r = !0 : i > 0 && (r = "indeterminate"), !r && l > 0 && (r = "indeterminate"), r;
    }
  };
  setCheckedForwardUp = (t) => {
    const n = t._parent;
    if (n) {
      const r = this.getNodeChecked(n);
      this.setStore("nodeMap", n[this.valueField], p((i) => {
        i.checked = r;
      })), this.setCheckedForwardUp(n);
    }
  };
  checkAll = () => {
    this.setStore("nodeMap", p((n) => {
      for (const r in n)
        n[r].checked = !0;
    }));
    const t = this.getCheckedKeys(this.mode);
    this.setValue(t), this.props.onChange && this.props.onChange(t);
  };
  uncheckAll = () => {
    this.setStore("nodeMap", p((n) => {
      for (const r in n)
        n[r].checked = !1;
    }));
    const t = this.getCheckedKeys(this.mode);
    this.setValue(t), this.props.onChange && this.props.onChange(t);
  };
  loadData = async (t, n) => {
    try {
      const r = await n(t);
      r.length > 0 && (t.children = r, r.forEach((i) => {
        this.setStore("nodeMap", i[this.valueField], i);
      }));
    } catch {
    }
    this.setStore("nodeMap", t[this.valueField], p((r) => r.loading = !1));
  };
  /**
   *
   * @param mode
   * @returns
   */
  getChecked = (t = "HALF") => t === "FULL" ? this.getFullChecked() : t === "CHILD" ? this.getChildChecked() : t === "HALF" ? this.getHalfChecked() : t === "SHALLOW" ? this.getShallowChecked() : [];
  /**
   * 获取所有选中的节点包含父节点和子节点
   * @returns
   */
  getFullChecked = () => this.flatData.filter((t) => t.checked === !0);
  /**
   * 选中的子节点
   * @returns
   */
  getChildChecked = () => this.flatData.filter((t) => t.checked === !0 && (!t.children || t.children.length === 0));
  /**
   * 返回全部选中子节点和部分选中的父节点
   * @returns
   */
  getHalfChecked = () => this.flatData.filter((t) => t.checked === !0 || t.checked === "indeterminate");
  /**
   * 如果父节点下所有子节点全部选中，只返回父节点
   * @returns
   */
  getShallowChecked = () => {
    const t = [];
    return this.flatData.forEach((n) => {
      n.checked === !0 && ((() => {
        const i = n._parent;
        return i ? i.checked === !0 : !1;
      })() || t.push(n));
    }), t;
  };
  /**
   * 选中的节点标识
   * @param mode
   * @returns
   */
  getCheckedKeys = (t = "HALF") => this.getChecked(t).map((r) => r[this.valueField]);
  clearChecked = () => {
    this.flatData.forEach((t) => {
      this.setStore("nodeMap", t[this.valueField], "checked", !1);
    });
  };
  setCheckedByMod = (t) => {
    this.clearChecked(), this.mode === "FULL" && this.setCheckedByFull(t), this.mode === "HALF" && this.setCheckedByHalf(t), this.mode === "CHILD" && this.setCheckedByChild(t), this.mode === "SHALLOW" && this.setCheckedByShallow(t);
  };
  setCheckedByFull = (t) => {
    t.forEach((n) => {
      this.setStore("nodeMap", n, p((r) => {
        r.checked = !0, this.setCheckedForwardUp(r);
      }));
    });
  };
  setCheckedByHalf = (t) => {
    t.forEach((n) => {
      const r = this._getNode(n);
      (!r.children || r.children.length === 0) && this.setStore("nodeMap", n, p((i) => {
        i.checked = !0, this.setCheckedForwardUp(i);
      }));
    });
  };
  setCheckedByChild = (t) => {
    t.forEach((n) => {
      const r = this._getNode(n);
      (!r.children || r.children.length === 0) && this.setStore("nodeMap", n, p((i) => {
        i.checked = !0, this.setCheckedForwardUp(i);
      }));
    });
  };
  setCheckedByShallow = (t) => {
    t.forEach((n) => {
      this.setStore("nodeMap", n, p((r) => {
        r.checked = !0, this.setCheckedForwardUp(r), this.setCheckedForwardDown(r, !0);
      }));
    });
  };
}
var wo = /* @__PURE__ */ x("<div>");
function bo(e) {
  const {
    store: t
  } = e, n = Li(), r = () => e.data.map((a) => a[t.titleField]).join(" / "), i = () => {
    if (e.data[e.data.length - 1].disabled)
      return;
    const s = e.data.map((c) => c[t.valueField]);
    n?.multi ? (e.filter && n?.clearQuery(""), t.checkNode(s[s.length - 1], !0)) : (t.setSelectedKey(s), n?.onSelect(e.data[e.data.length - 1]));
  }, l = () => ({
    "cm-cascader-item": !0,
    "cm-cascader-item-disabled": e.data[e.data.length - 1].disabled
  });
  return (() => {
    var a = wo();
    return a.$$click = i, m(a, r), B((s) => j(a, l(), s)), a;
  })();
}
ae(["click"]);
var xo = /* @__PURE__ */ x("<span class=cm-cascader-trigger>"), Co = /* @__PURE__ */ x("<div tabindex=0>"), ko = /* @__PURE__ */ x("<div class=cm-cascader-wrap><div class=cm-cascader-list>"), _o = /* @__PURE__ */ x("<div class=cm-cascader-dropdown>"), Lo = /* @__PURE__ */ x("<div class=cm-cascader-wrap>"), So = /* @__PURE__ */ x("<div class=cm-cascader-empty>");
const _i = Ee();
function zm(e) {
  const [t, n] = De(e, "visible", !1), [r, i] = K(""), l = e.trigger ?? "click", a = e.emptyText ?? "暂无数据";
  let s;
  const c = [], d = e.titleField ?? "title", o = new $o(e), h = e.seperator ?? "/", g = e.align ?? "bottomLeft", $ = () => U(e, "cm-cascader", {
    "cm-cascader-disabled": e.disabled,
    "cm-cascader-clearable": !e.disabled && e.clearable && o.value() && o.value().length,
    [`cm-cascader-${e.size}`]: e.size
  }), w = () => {
    const F = o.value(), N = F ? F.map((P) => {
      const D = o.store.nodeMap[P];
      return e.multi ? D : D[d];
    }) : [];
    return e.multi ? N : N.length ? N.join(h) : "";
  }, f = (F) => {
    if (!e.multi && (!(F.children && F.children.length) || e.changeOnSelect)) {
      e.onSelect && e.onSelect(F);
      const P = [...o.selectedKey()];
      o.setValue(P), e.filter && i(""), e.onChange && e.onChange(P);
    }
    !(F.children && F.children.length) && !e.multi && n(!1);
  }, v = () => {
    o.setValue([]), e.onChange && e.onChange([]);
  };
  Q(() => {
    const F = r();
    F && (o.filter(F), queueMicrotask(() => {
      L(), y(F);
    }));
  });
  const y = (F) => {
    if (!CSS.highlights)
      return;
    CSS.highlights.delete("cm-search-results");
    const N = F.trim().toLowerCase();
    if (!N)
      return;
    const P = c.map((E) => ({
      el: E,
      text: E.textContent?.toLowerCase()
    })).map(({
      text: E,
      el: b
    }) => {
      const k = [];
      let M = 0;
      for (; E && M < E.length; ) {
        const S = E.indexOf(N, M);
        if (S === -1)
          break;
        k.push(S), M = S + N.length;
      }
      return k.map((S) => {
        const O = new Range();
        return O.setStart(b, S), O.setEnd(b, S + N.length), O;
      });
    }), D = new Highlight(...P.flat());
    CSS.highlights.set("cm-search-results", D);
  }, C = () => {
    if (e.multi) {
      const F = o.value();
      if (F.length > 0) {
        const N = F.pop();
        o.checkNode(N, !1);
      }
    }
  }, _ = () => {
    i("");
  }, L = () => {
    if (!CSS.highlights)
      return;
    const F = document.createTreeWalker(s, NodeFilter.SHOW_TEXT);
    let N = F.nextNode();
    for (; N; )
      c.push(N), N = F.nextNode();
  };
  return u(_i.Provider, {
    get value() {
      return {
        onSelect: f,
        loadData: e.loadData,
        multi: e.multi,
        clearQuery: _
      };
    },
    get children() {
      var F = Co();
      return m(F, u(Ae, {
        visible: [t, n],
        get transfer() {
          return e.transfer;
        },
        align: g,
        get revers() {
          return e.revers;
        },
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        get menu() {
          return (() => {
            var N = _o();
            return m(N, u(V, {
              get when() {
                return e.header;
              },
              get children() {
                return e.header;
              }
            }), null), m(N, u(V, {
              get when() {
                return r();
              },
              get fallback() {
                return (() => {
                  var P = Lo();
                  return m(P, u(le, {
                    get each() {
                      return o.store.columns;
                    },
                    children: (D, E) => u(yo, {
                      get key() {
                        return o.store.selectedKey()[E() - 1] || "root";
                      },
                      data: D,
                      trigger: l,
                      get titleField() {
                        return e.titleField;
                      },
                      store: o,
                      get level() {
                        return E();
                      },
                      get valueFile() {
                        return e.valueField;
                      },
                      get emptyText() {
                        return e.emptyText;
                      }
                    })
                  })), P;
                })();
              },
              get children() {
                var P = ko(), D = P.firstChild, E = s;
                return typeof E == "function" ? Z(E, P) : s = P, m(D, u(V, {
                  get when() {
                    return o.store.filteredList?.length;
                  },
                  get fallback() {
                    return (() => {
                      var b = So();
                      return m(b, u(pn, {
                        width: 100,
                        type: "empty",
                        typeImage: Qn,
                        desc: a
                      })), b;
                    })();
                  },
                  get children() {
                    return u(le, {
                      get each() {
                        return o.store.filteredList;
                      },
                      children: (b) => u(bo, {
                        get filter() {
                          return e.filter;
                        },
                        store: o,
                        data: b,
                        seperator: h
                      })
                    });
                  }
                })), B(() => D.classList.toggle("cm-cascader-list-empty", !o.store.filteredList?.length)), P;
              }
            }), null), m(N, u(V, {
              get when() {
                return e.footer;
              },
              get children() {
                return e.footer;
              }
            }), null), N;
          })();
        },
        get children() {
          return u(V, {
            get when() {
              return e.triggerRender;
            },
            get fallback() {
              return u(wt, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return w();
                },
                get showMore() {
                  return e.showMore;
                },
                get showMax() {
                  return e.showMax;
                },
                onClear: v,
                get clearable() {
                  return e.clearable;
                },
                get placeholder() {
                  return e.placeholder;
                },
                get disabled() {
                  return e.disabled;
                },
                get size() {
                  return e.size;
                },
                get multi() {
                  return e.multi;
                },
                query: [r, i],
                get filter() {
                  return e.filter;
                },
                onDeleteLastValue: C
              });
            },
            get children() {
              var N = xo();
              return m(N, () => e.triggerRender?.(w(), o.value())), N;
            }
          });
        }
      })), B((N) => j(F, $(), N)), F;
    }
  });
}
const Li = () => Se(_i);
function Mo(e) {
  const [t, n] = Fe(e, "checked", !1), [r, i] = de(e, ["checked", "onChange"]);
  return u(Ke, te({
    get checked() {
      return t();
    },
    onChange: (a, s) => {
      e.disabled || (n(a), r.onChange && r.onChange(a, s));
    }
  }, i));
}
var Eo = /* @__PURE__ */ x("<div>");
const Nm = Ee();
function Om(e) {
  const t = () => U(e, "cm-checkbox-group", {
    "cm-checkbox-group-stack": e.block
  }), [n, r] = Fe(e, []), i = (c, d) => {
    if (e.disabled)
      return;
    let o = n() || [];
    if (c)
      o.includes(d) || (o = o.concat(d));
    else {
      const g = o.indexOf(d);
      g > -1 && o.splice(g, 1);
    }
    const h = JSON.parse(JSON.stringify(o));
    r(h), e.onChange && e.onChange(h);
  }, l = e.textField || "label", a = e.valueField || "value", s = {};
  return e.data && e.data.forEach((c) => {
    const o = (n() || []).includes(c[a]);
    s[c[a]] = K(o);
  }), Q(() => {
    const c = n() ?? [];
    for (let d = 0; d < e.data.length; d++) {
      const o = e.data[d], h = c.includes(o[a]);
      s[o[a]] && s[o[a]][1](h);
    }
  }), (() => {
    var c = Eo();
    return m(c, u(le, {
      get each() {
        return e.data;
      },
      children: (d) => u(Ke, {
        inner: !0,
        get disabled() {
          return e.disabled || d.disabled;
        },
        get value() {
          return d[a];
        },
        get checked() {
          return s[d[a]][0]();
        },
        get label() {
          return d[l];
        },
        onChange: i
      })
    })), B((d) => {
      var o = t(), h = e.style;
      return d.e = j(c, o, d.e), d.t = W(c, h, d.t), d;
    }, {
      e: void 0,
      t: void 0
    }), c;
  })();
}
var Fo = /* @__PURE__ */ x("<div class=cm-select-color>"), To = /* @__PURE__ */ x("<div class=cm-color-picker-value tabindex=0><span>A</span><input type=hidden><div class=cm-select-color-wrap>"), Po = /* @__PURE__ */ x('<div class="cm-select-color cm-select-color-empty">');
function Do(e) {
  const [t, n] = K({});
  return Q(() => {
    const r = e.open ? {
      background: `rgba(${e.currentValue.rgba.r},${e.currentValue.rgba.g},${e.currentValue.rgba.b},${e.currentValue.rgba.a})`
    } : {
      background: e.value
    };
    n(r);
  }), (() => {
    var r = To(), i = r.firstChild, l = i.nextSibling, a = l.nextSibling;
    return i.style.setProperty("width", "0px"), i.style.setProperty("font-size", "12px"), i.style.setProperty("visibility", "hidden"), i.style.setProperty("line-height", "initial"), m(a, u(V, {
      get when() {
        return t().background;
      },
      get fallback() {
        return (() => {
          var s = Po();
          return m(s, u(ze, {})), s;
        })();
      },
      get children() {
        var s = Fo();
        return B((c) => W(s, t(), c)), s;
      }
    })), B(() => ne(l, "name", e.name)), B(() => l.value = e.value), r;
  })();
}
function at(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function wn(e, t) {
  const n = $l(e), {
    _a: r
  } = n;
  return r == null && n.setAlpha(t || 1), n;
}
function Ao(e, t) {
  const n = t && t.a;
  if (t) {
    if (t.hsl)
      return wn(t.hsl, n);
    if (t.hex && t.hex.length > 0)
      return wn(t.hex, n);
  }
  return wn(t, n);
}
function bn(e, t) {
  const n = e === "" ? "#2d8cf0" : e, r = Ao(e, n), i = r.toHsl(), l = r.toHsv();
  return i.s === 0 && (i.h = n.h || n.hsl && n.hsl.h || t || 0, l.h = i.h), l.v < 0.0164 && (l.h = n.h || n.hsv && n.hsv.h || 0, l.s = n.s || n.hsv && n.hsv.s || 0), i.l < 0.01 && (i.h = n.h || n.hsl && n.hsl.h || 0, i.s = n.s || n.hsl && n.hsl.s || 0), {
    hsl: i,
    hex: r.toHexString().toUpperCase(),
    rgba: r.toRgb(),
    hsv: l,
    oldHue: n.h || t || i.h,
    source: n.source,
    a: n.a || r.getAlpha()
  };
}
function qn(e) {
  const {
    r: t,
    g: n,
    b: r,
    a: i
  } = e;
  return `rgba(${[t, n, r, i].join(",")})`;
}
var Ro = /* @__PURE__ */ x("<div class=cm-saturation><div class=cm-saturation-white></div><div class=cm-saturation-black></div><div class=cm-saturation-pointer><div class=cm-saturation-circle>");
function Io(e) {
  let t;
  const n = (s) => {
    if (!me) {
      if (typeof s.button == "number" && s.button !== 0)
        return !1;
      i(s), document.addEventListener("mousemove", i, !1), document.addEventListener("mouseup", r, !1);
    }
  }, r = (s) => {
    me || (i(s), document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", r));
  };
  he(() => {
    me || (document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", r));
  });
  const i = (s) => {
    s.preventDefault(), s.stopPropagation();
    const {
      clientWidth: c,
      clientHeight: d
    } = t, o = t.getBoundingClientRect().left + window.screenX, h = t.getBoundingClientRect().top + window.screenY, g = at(s.clientX - o, 0, c), $ = at(s.clientY - h, 0, d), w = g / c, f = at(1 - $ / d, 0, 1);
    e.onChange && e.onChange({
      h: e.value.hsv.h,
      s: w,
      v: f,
      a: e.value.hsv.a,
      source: "hsva"
    });
  }, l = () => ({
    background: `hsl(${e.value.hsv.h}, 100%, 50%)`
  }), a = () => ({
    top: `${-(e.value.hsv.v * 100) + 1 + 100}%`,
    left: `${e.value.hsv.s * 100}%`
  });
  return (() => {
    var s = Ro(), c = s.firstChild, d = c.nextSibling, o = d.nextSibling, h = t;
    return typeof h == "function" ? Z(h, s) : t = s, s.$$mousedown = n, B((g) => {
      var $ = l(), w = a();
      return g.e = W(s, $, g.e), g.t = W(o, w, g.t), g;
    }, {
      e: void 0,
      t: void 0
    }), s;
  })();
}
ae(["mousedown"]);
var zo = /* @__PURE__ */ x("<div class=cm-color-picker-hue><div class=cm-color-picker-hue-wrap><div class=cm-color-picker-hue-pointer>");
function No(e) {
  const [t, n] = K(at(e.value.hsl.h * 100 / 360, 0, 100));
  let r;
  const i = (c) => {
    if (!me) {
      if (typeof c.button == "number" && c.button !== 0)
        return !1;
      a(c), document.addEventListener("mousemove", a, !1), document.addEventListener("mouseup", l, !1);
    }
  }, l = (c) => {
    me || (a(c), document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", l));
  };
  he(() => {
    me || (document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", l));
  });
  const a = (c) => {
    c.preventDefault(), c.stopPropagation();
    const {
      clientWidth: d
    } = r, o = r.getBoundingClientRect().left + window.screenX, h = c.clientX - o;
    if (h < 0) {
      s(0);
      return;
    }
    if (h > d) {
      s(100);
      return;
    }
    s(h * 100 / d);
  }, s = (c) => {
    n(at(c, 0, 100));
    const {
      h: d,
      s: o,
      l: h,
      a: g
    } = e.value.hsl, $ = at(c / 100 * 360, 0, 360);
    d !== $ && e.onChange && e.onChange({
      h: $,
      s: o,
      l: h,
      a: g,
      source: "hsl"
    });
  };
  return Q(() => {
    n(at(e.value.hsl.h * 100 / 360, 0, 100));
  }), (() => {
    var c = zo(), d = c.firstChild, o = d.firstChild, h = r;
    return typeof h == "function" ? Z(h, c) : r = c, d.$$mousedown = i, o.style.setProperty("top", "0"), B((g) => (g = `${t()}%`) != null ? o.style.setProperty("left", g) : o.style.removeProperty("left")), c;
  })();
}
ae(["mousedown"]);
var Oo = /* @__PURE__ */ x("<div class=cm-color-picker-alpha><div class=cm-color-picker-alpha-wrap><div class=cm-color-picker-alpha-picker>");
function Bo(e) {
  const [t, n] = K(e.value.hsl.a * 100), r = () => {
    const {
      r: d,
      g: o,
      b: h
    } = e.value.rgba, g = qn({
      r: d,
      g: o,
      b: h,
      a: 0
    }), $ = qn({
      r: d,
      g: o,
      b: h,
      a: 1
    });
    return {
      background: `linear-gradient(to right, ${g} 0%, ${$} 100%)`
    };
  };
  let i;
  const l = (d) => {
    if (!me) {
      if (typeof d.button == "number" && d.button !== 0)
        return !1;
      s(d), document.addEventListener("mousemove", s, !1), document.addEventListener("mouseup", a, !1);
    }
  }, a = (d) => {
    me || (s(d), document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", a));
  };
  he(() => {
    me || (document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", a));
  });
  const s = (d) => {
    d.preventDefault(), d.stopPropagation();
    const {
      clientWidth: o
    } = i, h = i.getBoundingClientRect().left + window.screenX, g = d.clientX - h;
    if (g < 0) {
      c(0);
      return;
    }
    if (g > o) {
      c(1);
      return;
    }
    c(Math.round(g * 100 / o) / 100);
  }, c = (d) => {
    n(d * 100);
    const {
      h: o,
      s: h,
      l: g,
      a: $
    } = e.value.hsl;
    $ !== d && e.onChange && e.onChange({
      h: o,
      s: h,
      l: g,
      a: d,
      source: "rgba"
    });
  };
  return Q(() => {
    n(e.value.hsl.a * 100);
  }), (() => {
    var d = Oo(), o = d.firstChild, h = o.firstChild, g = i;
    return typeof g == "function" ? Z(g, d) : i = d, o.$$mousedown = l, h.style.setProperty("top", "0px"), B(($) => {
      var w = r(), f = `${t()}%`;
      return $.e = W(o, w, $.e), f !== $.t && (($.t = f) != null ? h.style.setProperty("left", f) : h.style.removeProperty("left")), $;
    }, {
      e: void 0,
      t: void 0
    }), d;
  })();
}
ae(["mousedown"]);
var Vo = /* @__PURE__ */ x("<div class=cm-color-picker-recommend><div class=cm-color-picker-recommend-container>"), Ho = /* @__PURE__ */ x("<div class=cm-color-picker-recommend-color><div>"), Yo = /* @__PURE__ */ x("<br>");
function qo(e) {
  const t = e.colors ?? ["#2d8cf0", "#19be6b", "#ff9900", "#ed4014", "#00b5ff", "#19c919", "#f9e31c", "#ea1a1a", "#9b1dea", "#00c2b1", "#ac7a33", "#1d35ea", "#8bc34a", "#f16b62", "#ea4ca3", "#0d94aa", "#febd79", "#5d4037", "#00bcd4", "#f06292", "#cddc39", "#607d8b", "#000000", "#ffffff"], n = (r) => {
    e.onChange && e.onChange({
      hex: r,
      source: "hex"
    });
  };
  return (() => {
    var r = Vo(), i = r.firstChild;
    return m(i, u(le, {
      each: t,
      children: (l, a) => [(() => {
        var s = Ho(), c = s.firstChild;
        return s.$$click = () => n(l), l != null ? c.style.setProperty("background", l) : c.style.removeProperty("background"), s;
      })(), u(V, {
        get when() {
          return (a() + 1) % 12 === 0;
        },
        get children() {
          return Yo();
        }
      })]
    })), r;
  })();
}
ae(["click"]);
var jo = /* @__PURE__ */ x("<div class=cm-color-picker-confirm>"), kr = /* @__PURE__ */ x("<div>"), Wo = /* @__PURE__ */ x("<div class=cm-color-picker-wrap>");
function Bm(e) {
  const [t, n] = K(!1), r = e.align ?? "bottomLeft", [i, l] = Fe(e, ""), [a, s] = K(bn(i() || "#2D8CF0")), [c, d] = K("");
  let o = a();
  const h = () => U(e, "cm-color-picker", {
    [`cm-color-picker-${e.size}`]: e.size
  }), g = () => U(e, "cm-color-picker-wrap", {
    "cm-color-picker-inline": e.inline
  }), $ = (C) => {
    w(C);
  }, w = (C, _) => {
    o = a().hsl.h, s(bn(C, _ || o));
  }, f = () => {
    n(!1), l(c()), e.onChange && e.onChange(c());
  }, v = () => {
    n(!1), l(""), e.onChange && e.onChange("");
  };
  Q(() => {
    e.alpha ? d(qn(a().rgba)) : d(a().hex);
  }), Q(() => {
    const C = bn(c());
    s(C);
  });
  const y = () => u(st, {
    dir: "v",
    get children() {
      return [u(Io, {
        get value() {
          return a();
        },
        onChange: $
      }), u(No, {
        get value() {
          return a();
        },
        onChange: $
      }), u(V, {
        get when() {
          return e.alpha;
        },
        get children() {
          return u(Bo, {
            get value() {
              return a();
            },
            onChange: $
          });
        }
      }), u(V, {
        get when() {
          return e.recommend;
        },
        get children() {
          return u(qo, {
            get colors() {
              return e.colors;
            },
            onChange: $
          });
        }
      }), (() => {
        var C = jo();
        return m(C, u(st, {
          dir: "h",
          get children() {
            return [u(Ve, {
              size: "small",
              class: "cm-color-picker-input",
              value: [c, d]
            }), u(Ne, {
              size: "small",
              type: "default",
              onClick: v,
              children: "清除"
            }), u(Ne, {
              size: "small",
              type: "primary",
              onClick: f,
              children: "确定"
            })];
          }
        })), C;
      })()];
    }
  });
  return u(V, {
    get when() {
      return e.inline;
    },
    get fallback() {
      return (() => {
        var C = kr();
        return m(C, u(Ae, {
          get transfer() {
            return e.transfer;
          },
          align: r,
          get disabled() {
            return e.disabled;
          },
          trigger: "click",
          visible: [t, n],
          get menu() {
            return (() => {
              var _ = Wo();
              return m(_, y), _;
            })();
          },
          get children() {
            return u(Do, {
              get disabled() {
                return e.disabled;
              },
              get size() {
                return e.size;
              },
              get currentValue() {
                return a();
              },
              get value() {
                return i();
              },
              get open() {
                return t();
              }
            });
          }
        })), B((_) => {
          var L = h(), F = e.style;
          return _.e = j(C, L, _.e), _.t = W(C, F, _.t), _;
        }, {
          e: void 0,
          t: void 0
        }), C;
      })();
    },
    get children() {
      var C = kr();
      return m(C, y), B((_) => j(C, g(), _)), C;
    }
  });
}
var Uo = /* @__PURE__ */ x("<div><em>");
function _r(e, t) {
  if (!t)
    return !1;
  const n = pt(new Date(e[0])), r = pt(new Date(e[1]));
  return n ? e.length === 1 && n.getTime() === t.getTime() || e.length === 2 && n.getTime() <= t.getTime() && r.getTime() >= t.getTime() : !1;
}
function Lr(e, t) {
  return "" + e.getFullYear() + e.getMonth() + e.getDate() == "" + t.getFullYear() + t.getMonth() + t.getDate();
}
function Xo(e, t) {
  return "" + e.getFullYear() + e.getMonth() == "" + t.getFullYear() + t.getMonth();
}
function Ko(e) {
  const t = Vt(), n = pt(/* @__PURE__ */ new Date()), r = e.day ? n.toLocaleDateString() === e.day.toLocaleDateString() : !1, i = () => e.type === "dateRange" || e.type === "dateTimeRange" ? !1 : e.value && e.value instanceof Date && e.day ? e.value.toLocaleDateString() === e.day.toLocaleDateString() : !1;
  let l = e.day && t && t.disabledDate && t.disabledDate(e.day);
  e.month && e.day && Xo(e.month, e.day) || (l = !0);
  const a = () => e.range && e.day ? _r(e.range, e.day) : !1, s = () => e.range && e.range[0] && e.day && Lr(e.range[0], e.day), c = () => e.range && e.range[1] && e.day && Lr(e.range[1], e.day), d = () => {
    const $ = e.range && e.range.length === 1 && e.hoverDate ? [e.hoverDate, e.range[0]] : [];
    return $.length === 2 && $.sort((w, f) => w.getTime() - f.getTime()), $ && e.day ? _r($, e.day) : !1;
  }, o = () => ({
    "cm-date-picker-day": !0,
    "cm-date-picker-empty": !e.day,
    "cm-date-picker-today": r,
    "cm-date-picker-active": i(),
    "cm-date-picker-inrange": !l && a(),
    "cm-date-picker-inhover": !l && d(),
    "cm-date-picker-first-range": s(),
    "cm-date-picker-last-range": c(),
    "cm-date-picker-day-disabled": l
  }), h = () => {
    e.day && t && t.onSelectDate(e.day, e.name);
  }, g = () => {
    e.day && t && t.onMouseOver(e.day);
  };
  return (() => {
    var $ = Uo(), w = $.firstChild;
    return $.$$mouseover = g, $.$$click = h, m(w, (() => {
      var f = ee(() => !!e.day);
      return () => f() ? e.day.getDate() : "";
    })()), B((f) => j($, o(), f)), $;
  })();
}
ae(["click", "mouseover"]);
var Go = /* @__PURE__ */ x("<div class=cm-month-picker-cell><ul>"), Zo = /* @__PURE__ */ x("<li>");
function Sr(e) {
  const t = Vt(), n = (i, l) => {
    l || e.onSelect && e.onSelect(e.type, i);
  };
  let r;
  return Q(() => {
    if (r && t?.visible()) {
      const i = e.data[0], l = e.value ? e.value : e.type === "year" ? (/* @__PURE__ */ new Date()).getFullYear() : (/* @__PURE__ */ new Date()).getMonth() + 1;
      r.scrollTop = 26 * (l - i);
    }
  }), (() => {
    var i = Go(), l = i.firstChild, a = r;
    return typeof a == "function" ? Z(a, i) : r = i, m(l, u(le, {
      get each() {
        return e.data;
      },
      children: (s) => {
        const c = () => {
          let o = !1;
          const h = new Date(e.day);
          return e.type === "year" && (h.setFullYear(s), h.setMonth(1), h.setDate(1), o = t && t.disabledDate && t.disabledDate(h)), e.type === "month" && (h.setMonth(s - 1), o = t && t.disabledDate && t.disabledDate(h)), o;
        }, d = () => ({
          "cm-month-picker-item": !0,
          "cm-month-picker-item-active": e.value === s,
          "cm-month-picker-item-disabled": c()
        });
        return (() => {
          var o = Zo();
          return o.$$click = () => {
            n(s, c());
          }, m(o, s), B((h) => j(o, d(), h)), o;
        })();
      }
    })), i;
  })();
}
ae(["click"]);
var Jo = /* @__PURE__ */ x("<div class=cm-date-picker-month-header>"), Qo = /* @__PURE__ */ x("<div class=cm-date-picker-month><div class=cm-date-picker-month-body>");
function Qt(e) {
  const [t, n] = e.store, r = Vt(), i = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const o = e.name === "end" ? 1 : 0;
      return t.currentMonth[o] && t.currentMonth[o].getFullYear && t.currentMonth[o].getFullYear();
    } else
      return e.value && e.value.getFullYear && e.value.getFullYear();
  }, l = () => {
    const o = [];
    let h = (/* @__PURE__ */ new Date()).getFullYear();
    h = h - 60;
    for (let g = 0; g < 100; g++)
      o.push(h + g);
    return o;
  }, a = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat([]), s = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const o = e.name === "end" ? 1 : 0;
      return t.currentMonth[o] && t.currentMonth[o].getMonth && t.currentMonth[o].getMonth() + 1;
    } else
      return e.value && e.value.getMonth && e.value.getMonth() + 1;
  }, c = (o, h) => {
    const g = e.name === "end" ? 1 : 0, $ = new Date(t.currentMonth[g]);
    if (o === "year" && $.setFullYear(h), o === "month" && $.setMonth(h - 1), e.onMonthChange) {
      e.onMonthChange($, o, e.name);
      return;
    }
    n("currentMonth", e.name === "end" ? [t.currentMonth[0], $] : [$, t.currentMonth[1]]), e.type !== "dateRange" && e.type !== "date" && r && r.onSelectDate && r.onSelectDate($, e.name);
  }, d = () => {
    e.onBack && e.onBack();
  };
  return (() => {
    var o = Qo(), h = o.firstChild;
    return m(o, u(V, {
      get when() {
        return e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange";
      },
      get children() {
        var g = Jo();
        return m(g, u(Ne, {
          class: "cm-date-picker-month-back-btn",
          theme: "borderless",
          onClick: d,
          get icon() {
            return u(We, {
              size: 16
            });
          },
          children: "返回选择日期"
        })), g;
      }
    }), h), m(h, u(Sr, {
      get data() {
        return l();
      },
      get value() {
        return i();
      },
      get day() {
        return t.currentMonth[0];
      },
      type: "year",
      onSelect: c
    }), null), m(h, u(Sr, {
      get data() {
        return a();
      },
      get value() {
        return s();
      },
      get day() {
        return t.currentMonth[0];
      },
      type: "month",
      onSelect: c
    }), null), o;
  })();
}
var po = /* @__PURE__ */ x("<div class=cm-date-picker-date-inner><div class=cm-date-picker-date-header><div class=cm-date-picker-header-arrow></div><div class=cm-date-picker-header-arrow></div><span class=cm-date-picker-date-info></span><div class=cm-date-picker-header-arrow></div><div class=cm-date-picker-header-arrow></div></div><div class=cm-date-picker-date-body><div class=cm-date-picker-week-line></div><div class=cm-date-picker-date-days></div></div><div class=cm-date-picker-date-footer>"), ed = /* @__PURE__ */ x("<div class=cm-date-picker-date>"), td = /* @__PURE__ */ x("<div>");
const nd = ["日", "一", "二", "三", "四", "五", "六"];
function pt(e) {
  return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e;
}
const Ut = (e, t, n, r, i, l) => {
  const a = e.currentMonth[r === "end" ? 1 : 0];
  a[`set${n}`](a[`get${n}`]() + 1 * i);
  const s = [...e.currentMonth];
  if (l) {
    const c = s[r === "end" ? 0 : 1];
    c[`set${n}`](c[`get${n}`]() + 1 * i);
  } else if (ue(s[0]).format("YYYY-MM") === ue(s[1]).format("YYYY-MM") || s[0].getTime() > s[1].getTime()) {
    const c = s[r === "end" ? 0 : 1];
    c[`set${n}`](c[`get${n}`]() + 1 * i);
  }
  t("currentMonth", s);
};
function en(e) {
  const [t, n] = e.store;
  e.type;
  const [r, i] = K("date"), l = () => {
    Ut(t, n, "Month", e.name, 1, e.stick);
  }, a = () => {
    Ut(t, n, "Month", e.name, -1, e.stick);
  }, s = () => {
    Ut(t, n, "FullYear", e.name, -1, e.stick);
  }, c = () => {
    Ut(t, n, "FullYear", e.name, 1, e.stick);
  }, d = () => {
    i("month");
  }, o = () => {
    i("date");
  }, h = (w, f, v) => {
    const y = t.currentMonth[v === "end" ? 1 : 0];
    y.setFullYear(w.getFullYear()), y.setMonth(w.getMonth());
    const C = [...t.currentMonth], _ = f === "year" ? "FullYear" : "Month";
    if (e.stick) {
      const L = new Date(y);
      L.setMonth(L.getMonth() + 1 * (v === "end" ? -1 : 1)), C[v === "end" ? 0 : 1] = L;
    } else if (ue(C[0]).format("YYYY-MM") === ue(C[1]).format("YYYY-MM") || C[0].getTime() > C[1].getTime()) {
      const L = C[v === "end" ? 0 : 1];
      L[`set${_}`](L[`get${_}`]() + 1 * (v === "end" ? -1 : 1));
    }
    n("currentMonth", C);
  }, g = () => {
    const w = [], f = pt(new Date(t.currentMonth[e.name === "end" ? 1 : 0]));
    f.setDate(1);
    const v = new Date(f);
    v.setMonth(v.getMonth() + 1), v.setDate(0);
    const y = f.getDay() % 7, C = new Date(f);
    C.setDate(C.getDate() - y - 1);
    for (let L = 0; L < y; L++)
      w.push(new Date(C.setDate(C.getDate() + 1)));
    f.setDate(0);
    for (let L = 0; L < v.getDate(); L++)
      w.push(new Date(f.setDate(f.getDate() + 1)));
    let _ = w[w.length - 1];
    _ = new Date(_);
    for (let L = 0, F = 42 - w.length; L < F; L++)
      w.push(new Date(_.setDate(_.getDate() + 1)));
    return w;
  }, $ = () => ue(t.currentMonth[e.name === "end" ? 1 : 0]).format("YYYY年MM月");
  return (() => {
    var w = ed();
    return m(w, u(V, {
      get when() {
        return r() === "date";
      },
      get children() {
        var f = po(), v = f.firstChild, y = v.firstChild, C = y.nextSibling, _ = C.nextSibling, L = _.nextSibling, F = L.nextSibling, N = v.nextSibling, P = N.firstChild, D = P.nextSibling;
        return m(y, u(tl, {
          onClick: s
        })), m(C, u(We, {
          onClick: a
        })), _.$$click = d, m(_, $), m(L, u(Xe, {
          onClick: l
        })), m(F, u(nl, {
          onClick: c
        })), m(P, u(le, {
          each: nd,
          children: (E) => (() => {
            var b = td();
            return m(b, E), b;
          })()
        })), m(D, u(le, {
          get each() {
            return g();
          },
          children: (E) => u(Ko, {
            get range() {
              return t.range;
            },
            get hoverDate() {
              return t.hoverDate;
            },
            get type() {
              return e.type;
            },
            day: E,
            get value() {
              return e.value;
            },
            get name() {
              return e.name;
            },
            get month() {
              return t.currentMonth[e.name === "end" ? 1 : 0];
            }
          })
        })), f;
      }
    }), null), m(w, u(V, {
      get when() {
        return r() === "month";
      },
      get children() {
        return u(Qt, te(e, {
          onBack: o,
          onMonthChange: h
        }));
      }
    }), null), w;
  })();
}
ae(["click"]);
function rd(e) {
  const [t, n] = de(e, ["value"]), r = () => t.value ? t.value[0] : "", i = () => t.value ? t.value[1] : "";
  return [u(Qt, te({
    name: "start"
  }, n, {
    get value() {
      return r();
    }
  })), u(Qt, te({
    name: "end"
  }, n, {
    get value() {
      return i();
    }
  }))];
}
function id(e) {
  const [t, n] = de(e, ["value"]), r = () => t.value[0], i = () => t.value[1];
  return [u(en, te({
    name: "start",
    get value() {
      return r();
    }
  }, n)), u(en, te({
    name: "end",
    get value() {
      return i();
    }
  }, n))];
}
function ld(e) {
  const [t, n] = de(e, ["header", "footer", "value"]), r = () => t.value[0], i = () => t.value[1];
  return [u(tn, te({
    get value() {
      return r();
    },
    get header() {
      return t.header[0];
    },
    get footer() {
      return t.footer && t.footer.length && t.footer[0];
    }
  }, n, {
    name: "start"
  })), u(tn, te({
    get value() {
      return i();
    },
    get header() {
      return t.header[1];
    },
    get footer() {
      return t.footer && t.footer.length && t.footer[1];
    }
  }, n, {
    name: "end"
  }))];
}
var ad = /* @__PURE__ */ x("<div tabindex=1>"), sd = /* @__PURE__ */ x("<div class=cm-time-picker-wrap>");
const Si = Ee();
function Vm(e) {
  const [t, n] = Fe(e, e.type === "timeRange" ? [] : ""), [r, i] = K(t()), [l, a] = K(!1), s = e.align ?? "bottomLeft", c = e.format ?? "HH:mm:ss", d = e.seperator || "~", o = e.header ?? (e.type === "timeRange" ? ["开始时间", "结束时间"] : void 0), h = () => U(e, "cm-time-picker", {
    "cm-time-picker-disabled": e.disabled,
    [`cm-time-picker-${e.theme}`]: e.theme,
    [`cm-time-picker-${e.size}`]: e.size,
    "cm-time-picker-clearable": !e.disabled && e.clearable && t() !== "" && t().length !== 0
  });
  Q(() => {
    let f = t();
    if (f)
      if (typeof f == "string")
        if (e.type === "timeRange") {
          const v = f.split(d);
          f = [ue(ue().format("YYYY-MM-DD ") + v[0]).toDate(), ue(ue().format("YYYY-MM-DD ") + v[1]).toDate()];
        } else
          f = ue(ue().format("YYYY-MM-DD ") + f).toDate();
      else
        f instanceof Array && f[0] && typeof f[0] == "string" && (f = [ue(ue().format("YYYY-MM-DD ") + f[0]).toDate(), ue(ue().format("YYYY-MM-DD ") + f[1]).toDate()]);
    i(f);
  });
  const g = (f, v, y) => {
    const C = /* @__PURE__ */ new Date(), _ = r() || (e.type === "timeRange" ? [C, C] : C);
    e.type === "timeRange" && !_.length && (_.push(C), _.push(C));
    let L;
    if (y === "start" ? L = _[0] : y === "end" ? L = _[1] : L = _, f === "hour" && L.setHours(v), f === "minute" && L.setMinutes(v), f === "second" && L.setSeconds(v), e.type === "timeRange") {
      let F = [];
      y === "start" && (F = [new Date(L), _[1]]), y === "end" && (F = [_[0], new Date(L)]), F[0].getTime() > F[1].getTime() && (F = [F[1], F[0]]), n(F), e.onChange && e.onChange(F);
    } else {
      const F = new Date(L);
      n(F), e.onChange && e.onChange(F);
    }
  }, $ = () => {
    n(""), e.onChange && e.onChange("");
  }, w = () => {
    const f = r();
    return f ? typeof f == "string" ? f : e.type === "timeRange" ? f.length ? typeof f[0] == "string" ? f.join(d) : [ue(f[0]).format(c), ue(f[1]).format(c)].join(d) : "" : ue(f).format(c) : "";
  };
  return u(Si.Provider, {
    get value() {
      return {
        onSelect: g,
        disabledTime: e.disabledTime,
        visible: l
      };
    },
    get children() {
      var f = ad();
      return ne(f, "x-placement", s), m(f, u(Ae, {
        get transfer() {
          return e.transfer;
        },
        align: s,
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        visible: [l, a],
        get menu() {
          return (() => {
            var v = sd();
            return m(v, u(V, {
              get when() {
                return e.type === "timeRange";
              },
              get fallback() {
                return u(tn, {
                  get value() {
                    return r();
                  },
                  format: c,
                  get minuteStep() {
                    return e.minuteStep;
                  },
                  get secondStep() {
                    return e.secondStep;
                  },
                  get hourStep() {
                    return e.hourStep;
                  },
                  header: o,
                  get footer() {
                    return e.footer;
                  }
                });
              },
              get children() {
                return u(ld, {
                  get value() {
                    return r();
                  },
                  format: c,
                  get minuteStep() {
                    return e.minuteStep;
                  },
                  get secondStep() {
                    return e.secondStep;
                  },
                  get hourStep() {
                    return e.hourStep;
                  },
                  header: o,
                  get footer() {
                    return e.footer;
                  }
                });
              }
            })), v;
          })();
        },
        get children() {
          return u(V, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return ee(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return u(wt, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return w();
                },
                onClear: $,
                get clearable() {
                  return e.clearable;
                },
                get placeholder() {
                  return e.placeholder;
                },
                get disabled() {
                  return e.disabled;
                },
                get size() {
                  return e.size;
                },
                get icon() {
                  return u(Qr, {});
                }
              });
            }
          });
        }
      })), B((v) => j(f, h(), v)), f;
    }
  });
}
const cd = () => Se(Si);
var od = /* @__PURE__ */ x("<div class=cm-time-picker-cell><ul>"), dd = /* @__PURE__ */ x("<li>");
function xn(e) {
  const t = [];
  for (let a = 0; a < e.max; )
    t.push(a), a += e.step || 1;
  const n = cd(), r = Vt(), i = (a, s) => {
    s || (n && n.onSelect(e.type, a, e.name), e.onSelectTime && e.onSelectTime(e.type, a, e.name));
  };
  let l;
  return Q(() => {
    const a = n?.visible(), s = r?.visible();
    l && (a || s) && (l.scrollTop = 26 * (e.value / (e.step || 1)));
  }), (() => {
    var a = od(), s = a.firstChild, c = l;
    return typeof c == "function" ? Z(c, a) : l = a, m(s, u(le, {
      each: t,
      children: (d) => {
        const o = n && n.disabledTime && n.disabledTime(d, e.type), h = () => ({
          "cm-time-picker-item": !0,
          "cm-time-picker-item-active": e.value === d,
          "cm-time-picker-item-disabled": o
        });
        return (() => {
          var g = dd();
          return Me(g, "click", i.bind(null, d, o), !0), m(g, d), B(($) => j(g, h(), $)), g;
        })();
      }
    })), a;
  })();
}
ae(["click"]);
var ud = /* @__PURE__ */ x("<div class=cm-time-picker-header>"), hd = /* @__PURE__ */ x("<div class=cm-time-picker-footer>"), fd = /* @__PURE__ */ x("<div class=cm-time-picker-pane><div class=cm-time-picker-options>");
function tn(e) {
  const t = () => e.value && e.value.getHours && e.value.getHours(), n = () => e.value && e.value.getMinutes && e.value.getMinutes(), r = () => e.value && e.value.getSeconds && e.value.getSeconds(), i = () => e.format.indexOf("H") > -1, l = () => e.format.indexOf("m") > -1, a = () => e.format.indexOf("s") > -1;
  return (() => {
    var s = fd(), c = s.firstChild;
    return m(s, u(V, {
      get when() {
        return e.header;
      },
      get children() {
        var d = ud();
        return m(d, () => e.header), d;
      }
    }), c), m(c, u(V, {
      get when() {
        return i();
      },
      get children() {
        return u(xn, {
          max: 24,
          type: "hour",
          get value() {
            return t();
          },
          get step() {
            return e.hourStep;
          },
          get name() {
            return e.name;
          },
          get onSelectTime() {
            return e.onSelectTime;
          }
        });
      }
    }), null), m(c, u(V, {
      get when() {
        return l();
      },
      get children() {
        return u(xn, {
          max: 60,
          type: "minute",
          get value() {
            return n();
          },
          get step() {
            return e.minuteStep;
          },
          get name() {
            return e.name;
          },
          get onSelectTime() {
            return e.onSelectTime;
          }
        });
      }
    }), null), m(c, u(V, {
      get when() {
        return a();
      },
      get children() {
        return u(xn, {
          max: 60,
          type: "second",
          get value() {
            return r();
          },
          get step() {
            return e.secondStep;
          },
          get name() {
            return e.name;
          },
          get onSelectTime() {
            return e.onSelectTime;
          }
        });
      }
    }), null), m(s, u(V, {
      get when() {
        return e.footer;
      },
      get children() {
        var d = hd();
        return m(d, () => e.footer), d;
      }
    }), null), s;
  })();
}
var gd = /* @__PURE__ */ x("<div class=cm-date-picker-datetime><div class=cm-datetime-content></div><div class=cm-datetime-switch><div class=cm-datetime-switch-item></div><div class=cm-datetime-switch-item>");
function jn(e) {
  const [t, n] = K("date"), r = Vt(), i = () => e.store[0].currentMonth[e.name === "end" ? 1 : 0], l = () => ue(e.value || /* @__PURE__ */ new Date()).format("YYYY-MM-DD"), a = () => ue(i()).format("HH:mm:ss"), s = (d) => {
    n(d);
  }, c = (d, o, h) => {
    const g = new Date(i());
    d === "hour" && g.setHours(o), d === "minute" && g.setMinutes(o), d === "second" && g.setSeconds(o), r && r.onSelectTime(g, e.name);
  };
  return (() => {
    var d = gd(), o = d.firstChild, h = o.nextSibling, g = h.firstChild, $ = g.nextSibling;
    return m(o, u(V, {
      get when() {
        return t() === "date";
      },
      get children() {
        return u(en, e);
      }
    }), null), m(o, u(V, {
      get when() {
        return t() === "time";
      },
      get children() {
        return u(tn, te(e, {
          header: "选择时间",
          get value() {
            return i();
          },
          onSelectTime: c
        }));
      }
    }), null), Me(g, "click", s.bind(null, "date"), !0), m(g, u(pr, {
      size: 12
    }), null), m(g, l, null), Me($, "click", s.bind(null, "time"), !0), m($, u(Qr, {
      size: 12
    }), null), m($, a, null), B((w) => {
      var f = t() === "date", v = t() === "time";
      return f !== w.e && g.classList.toggle("active", w.e = f), v !== w.t && $.classList.toggle("active", w.t = v), w;
    }, {
      e: void 0,
      t: void 0
    }), d;
  })();
}
ae(["click"]);
function md(e) {
  const [t, n] = de(e, ["value"]), r = () => t.value && t.value[0], i = () => t.value && t.value[1];
  return [u(jn, te({
    name: "start",
    get value() {
      return r();
    }
  }, n)), u(jn, te({
    name: "end",
    get value() {
      return i();
    }
  }, n))];
}
var vd = /* @__PURE__ */ x("<div>"), yd = /* @__PURE__ */ x("<div class=cm-date-picker-shortcuts>"), $d = /* @__PURE__ */ x("<div class=cm-date-picker-wrap>");
const Mi = Ee();
function Hm(e) {
  const [t, n] = K(!1), r = e.type ?? "date", [i, l] = Fe(e, "value", r === "dateRange" || r === "dateTimeRange" ? [] : ""), [a, s] = K();
  let c = e.format ?? "YYYY-MM-DD";
  (r === "month" || r === "monthRange") && (c = e.format ?? "YYYY-MM"), (r === "dateTime" || r === "dateTimeRange") && (c = e.format ?? "YYYY-MM-DD HH:mm:ss");
  const d = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Date();
  o.setMonth(o.getMonth() + 1);
  const [h, g] = we({
    currentMonth: [d, o],
    range: [],
    hoverDate: void 0
  }), $ = e.align ?? "bottomLeft", w = e.seperator || "~";
  Q(() => {
    let P = i();
    P && P instanceof Array && typeof P[0] == "function" && (P = P[0]());
    let D;
    if (P) {
      if (typeof P == "string")
        if (r === "dateRange" || r === "monthRange" || r === "dateTimeRange") {
          const E = P.split(w);
          P = [ue(E[0]).toDate(), ue(E[1]).toDate()];
          const b = new Date(P[0]), k = new Date(P[1]);
          ue(b).format("YYYY-MM") === ue(k).format("YYYY-MM") && k.setMonth(k.getMonth() + 1), D = [b, k];
        } else {
          P = ue(P).toDate();
          const E = new Date(P), b = new Date(P);
          b.setMonth(b.getMonth() + 1), D = [E, b];
        }
      else {
        let E = /* @__PURE__ */ new Date(), b = /* @__PURE__ */ new Date();
        P instanceof Array && (typeof P[0] == "string" && (P[0] = ue(P[0]).toDate()), typeof P[1] == "string" && (P[1] = ue(P[1]).toDate()), E = P[0] === void 0 ? /* @__PURE__ */ new Date() : P[0] ? new Date(P[0]) : /* @__PURE__ */ new Date(), b = P[1] === void 0 ? /* @__PURE__ */ new Date() : P[1] ? new Date(P[1]) : /* @__PURE__ */ new Date()), r === "month" && P instanceof Date && (E = P, b = new Date(P)), ue(E).format("YYYY-MM") === ue(b).format("YYYY-MM") && b.setMonth(b.getMonth() + 1), D = [E, b];
      }
      (r === "dateRange" || r === "dateTimeRange") && g("range", P);
    } else
      D = [d, o];
    e.stick && (D[1] = new Date(D[0]), D[1].setMonth(D[1].getMonth() + 1)), D[0].setDate(1), D[1].setDate(1), g("currentMonth", D), s(P);
  });
  const f = () => U(e, "cm-date-picker", {
    [`cm-date-picker-${e.size}`]: e.size,
    "cm-date-picker-disabled": e.disabled,
    "cm-date-picker-clearable": !e.disabled && e.clearable && i() && i().length !== 0
  }), v = () => {
    l(""), r === "dateRange" && g("range", []), e.onChange && e.onChange("");
  }, y = (P, D) => {
    const E = new Date(P);
    if ((r === "month" || r === "monthRange") && (E.setDate(1), E.setHours(0), E.setMinutes(0), E.setSeconds(0), E.setMilliseconds(0)), r === "dateTime" || r === "dateTimeRange") {
      let S = a();
      r === "dateTimeRange" ? S = S && S.length ? S[h.range.length === 1 ? 1 : 0] : h.currentMonth[h.range.length === 1 ? 1 : 0] : S = S || h.currentMonth[h.range.length === 1 ? 1 : 0], E.setHours(S.getHours()), E.setMinutes(S.getMinutes()), E.setSeconds(S.getSeconds());
    }
    const b = /* @__PURE__ */ new Date(), k = a() || (r === "monthRange" || r === "dateRange" || r === "dateTimeRange" ? [b, b] : b);
    (r === "dateRange" || r === "dateTimeRange") && !k.length && (k.push(b), k.push(b));
    let M;
    if (D === "start" ? M = [E, k[1]] : D === "end" ? M = [k[0], E] : M = E, M instanceof Array && M[0].getTime() > M[1].getTime() && M.reverse(), r === "dateRange" || r === "dateTimeRange") {
      const S = h.range;
      let O = [];
      if ((S[0] && S[1] || !S[0] && !S[1]) && (O = [E], g("hoverDate", new Date(E))), S[0] && !S[1]) {
        if (L(S[0], E))
          return;
        if (O = [S[0], E], O[0].getTime() > O[1].getTime()) {
          O.reverse();
          const R = /* @__PURE__ */ new Date();
          C(R, h.currentMonth[0]), C(h.currentMonth[0], h.currentMonth[1]), C(h.currentMonth[1], R), g("currentMonth", [...h.currentMonth]);
        }
        l(O), r === "dateRange" && n(!1);
      }
      g("range", O);
      return;
    }
    l(M), e.onChange && e.onChange(M), r === "date" && n(!1);
  }, C = (P, D) => {
    P.setHours(D.getHours()), P.setMinutes(D.getMinutes()), P.setSeconds(D.getSeconds());
  }, _ = (P, D) => {
    let E = a(), b;
    D === "start" ? (b = h.currentMonth[0], E && E[0] ? (C(E[0], P), E[0].getTime() > E[1].getTime() ? (E.reverse(), C(h.currentMonth[0], E[0]), C(h.currentMonth[1], E[1])) : C(b, P), l([...E])) : C(b, P)) : D === "end" ? (b = h.currentMonth[1], E && E[1] ? (C(E[1], P), E[0].getTime() > E[1].getTime() ? (E.reverse(), C(h.currentMonth[0], E[0]), C(h.currentMonth[1], E[1])) : C(b, P), l([...E])) : C(b, P)) : (E || (E = /* @__PURE__ */ new Date()), C(E, P), b = h.currentMonth[0], C(b, P), l(new Date(E))), g("currentMonth", [...h.currentMonth]);
  }, L = (P, D) => {
    if (e.maxRange) {
      const E = P.getTime() - D.getTime();
      if (Math.abs(E / 1e3 / 60 / 60 / 24) > e.maxRange - 1)
        return !0;
    }
    return !1;
  }, F = (P) => {
    if (h.range && h.range[0]) {
      if (L(h.range[0], P) && e.maxRange) {
        const D = new Date(h.range[0]), E = P.getTime() > h.range[0].getTime() ? 1 : -1;
        D.setDate(D.getDate() + (e.maxRange - 1) * E), g("hoverDate", D);
        return;
      }
      g("hoverDate", new Date(P));
    }
  }, N = je(() => {
    const P = a();
    return P ? typeof P == "string" ? P : r === "dateRange" || r === "monthRange" || r === "dateTimeRange" ? P[0] ? [ue(P[0]).format(c), ue(P[1]).format(c)].join(w) : "" : ue(P).format(c) : "";
  });
  return u(Mi.Provider, {
    get value() {
      return {
        onSelectDate: y,
        onMouseOver: F,
        disabledDate: e.disabledDate,
        onSelectTime: _,
        visible: t
      };
    },
    get children() {
      var P = vd();
      return m(P, u(Ae, {
        visible: [t, n],
        get transfer() {
          return e.transfer;
        },
        align: $,
        get revers() {
          return e.revers;
        },
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        get menu() {
          return (() => {
            var D = $d();
            return m(D, u(V, {
              get when() {
                return e.shortCuts;
              },
              get children() {
                var E = yd();
                return m(E, (() => {
                  var b = ee(() => typeof e.shortCuts == "function");
                  return () => b() ? e.shortCuts() : e.shortCuts;
                })()), E;
              }
            }), null), m(D, u(Ze, {
              get children() {
                return [u(fe, {
                  when: r === "date",
                  get children() {
                    return u(en, {
                      store: [h, g],
                      get stick() {
                        return e.stick;
                      },
                      type: r,
                      get value() {
                        return a();
                      }
                    });
                  }
                }), u(fe, {
                  when: r === "month",
                  get children() {
                    return u(Qt, {
                      store: [h, g],
                      type: r,
                      get value() {
                        return a();
                      }
                    });
                  }
                }), u(fe, {
                  when: r === "monthRange",
                  get children() {
                    return u(rd, {
                      store: [h, g],
                      type: r,
                      get value() {
                        return a();
                      }
                    });
                  }
                }), u(fe, {
                  when: r === "dateRange",
                  get children() {
                    return u(id, {
                      store: [h, g],
                      get stick() {
                        return e.stick;
                      },
                      get value() {
                        return a();
                      },
                      type: r
                    });
                  }
                }), u(fe, {
                  when: r === "dateTime",
                  get children() {
                    return u(jn, {
                      store: [h, g],
                      get stick() {
                        return e.stick;
                      },
                      type: r,
                      get value() {
                        return a();
                      },
                      format: c
                    });
                  }
                }), u(fe, {
                  when: r === "dateTimeRange",
                  get children() {
                    return u(md, {
                      store: [h, g],
                      get stick() {
                        return e.stick;
                      },
                      type: r,
                      get value() {
                        return a();
                      },
                      format: c
                    });
                  }
                })];
              }
            }), null), D;
          })();
        },
        get children() {
          return u(V, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return ee(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return u(wt, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return N();
                },
                onClear: v,
                get clearable() {
                  return e.clearable;
                },
                get placeholder() {
                  return e.placeholder;
                },
                get disabled() {
                  return e.disabled;
                },
                get size() {
                  return e.size;
                },
                get icon() {
                  return u(pr, {});
                }
              });
            }
          });
        }
      })), B((D) => {
        var E = f(), b = e.style;
        return D.e = j(P, E, D.e), D.t = W(P, b, D.t), D;
      }, {
        e: void 0,
        t: void 0
      }), P;
    }
  });
}
const Vt = () => Se(Mi);
var wd = /* @__PURE__ */ x("<div>");
function Ym(e) {
  const t = () => U(e, "cm-input-group");
  let n;
  ge(() => {
    r();
  });
  const r = () => {
    if (n) {
      const l = n.children, a = l.length;
      for (let s = 0; s < a; s++) {
        const c = l[s];
        c.classList.remove("cm-input-compact-first-item"), c.classList.remove("cm-input-compact-last-item"), c.classList.remove("cm-input-compact-item"), c.classList.add("cm-input-compact-item"), s === 0 && c.classList.add("cm-input-compact-first-item"), s === a - 1 && c.classList.add("cm-input-compact-last-item");
      }
    }
  };
  Q(() => {
    i(), r();
  });
  const i = () => Ge(() => e.children).toArray();
  return (() => {
    var l = wd(), a = n;
    return typeof a == "function" ? Z(a, l) : n = l, m(l, () => e.children), B((s) => j(l, t(), s)), l;
  })();
}
function qm(e) {
  const t = () => U(e, "cm-radio");
  return u(Mo, te(e, {
    get classList() {
      return t();
    },
    type: "radio"
  }));
}
var bd = /* @__PURE__ */ x("<div class=cm-radio-group-thumb>"), xd = /* @__PURE__ */ x("<div>");
function jm(e) {
  const t = () => U(e, "cm-radio-group", {
    "cm-radio-group-stack": e.block,
    "cm-radio-group-stick": e.stick
  }), [n, r] = Fe(e, ""), [i, l] = K({});
  let a;
  const s = (h, g) => {
    e.disabled || (r(g), e.onChange && e.onChange(g));
  }, c = e.textField ?? "label", d = e.valueField ?? "value", o = (h) => n() === h[d];
  return Q(() => {
    const h = n() ?? "";
    let g = -1;
    for (let L = 0; L < e.data.length; L++) {
      const F = e.data[L];
      h === F[d] && (g = L);
    }
    const w = a.querySelectorAll(".cm-radio")[g];
    if (!w)
      return;
    const f = w.getBoundingClientRect(), v = a.getBoundingClientRect(), y = f.left - v.left, _ = {
      width: `${f.width}px`,
      left: `${y}px`
    };
    l(_);
  }), (() => {
    var h = xd(), g = a;
    return typeof g == "function" ? Z(g, h) : a = h, m(h, u(V, {
      get when() {
        return e.stick;
      },
      get children() {
        var $ = bd();
        return B((w) => W($, i(), w)), $;
      }
    }), null), m(h, u(le, {
      get each() {
        return e.data;
      },
      children: ($) => u(Ke, {
        get disabled() {
          return e.disabled || $.disabled;
        },
        class: "cm-radio",
        get type() {
          return e.type || "radio";
        },
        inner: !0,
        get value() {
          return $[d];
        },
        get checked() {
          return o($);
        },
        get label() {
          return $[c];
        },
        onChange: s
      })
    }), null), B(($) => {
      var w = t(), f = e.style;
      return $.e = j(h, w, $.e), $.t = W(h, f, $.t), $;
    }, {
      e: void 0,
      t: void 0
    }), h;
  })();
}
var Cd = /* @__PURE__ */ x("<div><span>"), kd = /* @__PURE__ */ x("<span class=cm-rate-star-content>");
function _d(e) {
  const [t, n] = e.current, r = () => {
    let i = !1, l = !1;
    return e.index <= t() - 1 && (l = !0), e.index > t() - 1 && e.index < t() && (i = !0), {
      "cm-rate-star": !0,
      "cm-rate-star-zero": !l && !i,
      "cm-rate-star-half": e.allowHalf && i,
      "cm-rate-star-full": l
    };
  };
  return (() => {
    var i = Cd(), l = i.firstChild;
    return Me(l, "click", e.onClickStar?.bind(null, e.index + 1), !0), Me(l, "mouseenter", e.onMouseEnter?.bind(null, e.index + 1)), m(l, () => e.icon), m(i, (() => {
      var a = ee(() => !!e.allowHalf);
      return () => a() ? (() => {
        var s = kd();
        return Me(s, "click", e.onClickHalfStar?.bind(null, e.index + 0.5), !0), Me(s, "mouseenter", e.onMouseEnterHalf?.bind(null, e.index + 0.5)), m(s, () => e.icon), s;
      })() : null;
    })(), null), B((a) => j(i, r(), a)), i;
  })();
}
ae(["click"]);
var Ld = /* @__PURE__ */ x("<div><span>");
function Wm(e) {
  const t = () => U(e, "cm-rate", {
    "cm-rate-disabled": e.disabled
  });
  if (!e.icon)
    return console.warn("need icon property"), null;
  const [n, r] = Fe(e, 0), [i, l] = K(n()), a = e.allowHalf || !1, s = (w) => {
    l(w);
  }, c = (w, f) => {
    a && (f.preventDefault(), f.stopPropagation(), l(w));
  }, d = () => {
    l(n());
  }, o = (w) => {
    r(w), e.onChange && e.onChange(w);
  }, h = (w, f) => {
    f.preventDefault(), f.stopPropagation(), a && (r(w), e.onChange && e.onChange(w));
  }, g = e.count || 5, $ = [];
  for (let w = 0; w < g; w++)
    $.push({
      id: w,
      value: w
    });
  return (() => {
    var w = Ld(), f = w.firstChild;
    return w.addEventListener("mouseleave", d), m(w, u(le, {
      each: $,
      children: (v, y) => u(_d, {
        get index() {
          return y();
        },
        onMouseEnterHalf: c,
        onClickHalfStar: h,
        onMouseEnter: s,
        onClickStar: o,
        get icon() {
          return e.icon;
        },
        allowHalf: a,
        current: [i, l]
      })
    }), f), m(f, () => e.children), B((v) => {
      var y = e.style, C = t();
      return v.e = W(w, y, v.e), v.t = j(w, C, v.t), v;
    }, {
      e: void 0,
      t: void 0
    }), w;
  })();
}
function Um(e) {
  const [t, n] = de(e, ["enterButton", "onEnter", "onSearch"]), r = t.enterButton ? null : u(Gt, {
    style: {
      cursor: "pointer"
    },
    get onClick() {
      return t.onSearch;
    }
  });
  let i = null;
  return t.enterButton && (i = typeof t.enterButton == "string" ? t.enterButton : u(Gt, {
    get onClick() {
      return t.onSearch;
    }
  })), u(Ve, te({
    get onEnter() {
      return t.onEnter;
    },
    suffix: r,
    append: i
  }, n));
}
var Sd = /* @__PURE__ */ x("<li>");
function Md(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-group-wrap": e.data.group,
    "cm-select-option-active": e.checked,
    "cm-select-option-disabled": e.data.disabled
  }), n = () => {
    e.disabled || e.onClick && e.onClick(r);
  }, r = e.data[e.valueField];
  return u(V, {
    get when() {
      return e.visible;
    },
    fallback: null,
    get children() {
      var i = Sd();
      i.$$click = n;
      var l = e.ref;
      return typeof l == "function" ? Z(l, i) : e.ref = i, m(i, (() => {
        var a = ee(() => !!e.renderOption);
        return () => a() ? e.renderOption(e.data) : e.data[e.textField];
      })()), B((a) => {
        var s = t(), c = e.style;
        return a.e = j(i, s, a.e), a.t = W(i, c, a.t), a;
      }, {
        e: void 0,
        t: void 0
      }), i;
    }
  });
}
ae(["click"]);
var Ed = /* @__PURE__ */ x("<li>");
function Fd(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-option-active": e.checked
  }), n = e.data.value;
  return (() => {
    var r = Ed();
    return r.$$click = () => e.onClick && e.onClick(n), m(r, () => e.data.label), B((i) => {
      var l = t(), a = e.style;
      return i.e = j(r, l, i.e), i.t = W(r, a, i.t), i;
    }, {
      e: void 0,
      t: void 0
    }), r;
  })();
}
ae(["click"]);
function Ei(e) {
  const t = e.scrollElement;
  e.bodyElement;
  const [n, r] = K(0), [i, l] = K({
    value: 0
  });
  let a = !1;
  const s = /* @__PURE__ */ new WeakMap(), c = (b) => {
    const k = e.items[b];
    return k && s.has(k) ? s.get(k) : null;
  }, d = (b) => c(b)?.offset || 0, o = (b, k) => {
    const M = e.items[b];
    if (M)
      if (s.has(M)) {
        const S = s.get(M);
        S.size = k.size, S.offset = k.offset;
      } else
        s.set(M, k);
  }, h = () => {
    const b = e.items.length;
    for (let k = 0; k < b; k++) {
      const M = c(k - 1), S = k === 0 ? 0 : M ? M.offset + M.size : 0;
      if (!s.has(e.items[k]))
        o(k, {
          size: e.itemEstimatedSize,
          offset: S
        });
      else {
        const O = c(k);
        o(k, {
          size: O.size,
          offset: S
        });
      }
    }
  };
  h();
  const g = ({
    low: b,
    high: k,
    scrollOffset: M
  }) => {
    let S = 0, O = 0;
    for (; b <= k; ) {
      if (S = b + Math.floor((k - b) / 2), O = d(S), O === M)
        return S;
      O < M ? b = S + 1 : k = S - 1;
    }
    return b > 0 ? b - 1 : 0;
  }, $ = (b) => {
    const k = e.items.length;
    let M = 1, S = 0;
    for (; S < k && d(S) < b; )
      S += M, M *= 2;
    return g({
      low: Math.floor(S / 2),
      high: Math.min(S, k - 1),
      scrollOffset: b
    });
  }, w = (b) => $(b), f = (b) => {
    const k = e.items.length;
    if (k === 0)
      return 0;
    const M = c(b), S = (M?.offset || 0) + (e.scrollElement.clientHeight ?? 0);
    let O = (M?.offset || 0) + (M?.size || 0), R = b;
    for (; O <= S && R < k - 1; ) {
      R++;
      const T = c(R);
      T && (O += T.size);
    }
    return R;
  }, v = (b) => {
    const k = e.items.length;
    if (k === 0)
      return [-1, -1];
    const M = w(b), S = f(M);
    return [Math.max(0, M - (e.overscan || 3)), Math.min(k - 1, S + (e.overscan || 3)), M, S];
  }, y = () => {
    const b = e.items.length;
    let k = 0;
    for (let M = 0; M < b; M++)
      k += c(M)?.size || 0;
    return k;
  }, [C, _] = K(y());
  dt(() => {
    if (!e.scrollElement)
      return;
    let b = e.height;
    e.maxHeight && (b = C() > e.maxHeight ? e.maxHeight : C()), e.scrollElement.style.height = b + "px", e.height || e.maxHeight || Promise.resolve().then(() => {
      b = t.parentElement?.clientHeight;
      const k = t.parentElement?.style.height || "", M = t.parentElement?.style.maxHeight || "", S = parseInt(k) || parseInt(M);
      S && (e.scrollElement.style.height = S + "px");
    });
  }), Q(() => {
    e.contentElement.style.height = C() + "px", setTimeout(() => {
      a = !1;
    }, 300);
  }), Q(() => {
    e.bodyElement.style.transform = `translateY(${c(i().value)?.offset}px)`;
  });
  const L = (b) => {
    const {
      scrollTop: k
    } = b.target;
    if (a) {
      k !== n() && (b.target.scrollTop = n());
      return;
    }
    e.onScroll && e.onScroll(k), r(k);
  }, F = (b, k) => {
    const M = b.offsetHeight, S = c(k);
    if (M === 0 || S && S.size === M)
      return;
    S && (S.size = M);
    const O = e.items.length;
    for (let R = k + 1; R < O; R++) {
      const T = c(R), I = c(R - 1);
      T && (T.offset = I ? I.offset + I.size : 0);
    }
    _(y());
  };
  Q(() => {
    a = !0, e.items, h(), _(y()), Ie(() => {
      r(n() + 1e-7);
    });
  }), e.ref && e.ref({
    update: () => {
      h(), _(y());
    },
    setScrollOffset: r,
    getScrollElement: () => e.scrollElement
  });
  const [N, P] = we([]);
  let D = [];
  je(() => {
    const b = t.getBoundingClientRect(), [k, M] = v(Math.ceil(n()));
    if (b.height === 0 && b.width === 0)
      return [];
    l({
      value: k
    });
    const S = [], O = [];
    if (k >= 0)
      for (let R = k; R <= M; R++) {
        const T = e.items[R];
        S.push(T), O.push(R);
      }
    P(S), D = O;
  });
  const E = async (b) => {
    b.target === t && Promise.resolve().then(() => {
      r(n() + 1e-7);
    });
  };
  return ge(() => {
    const b = new ResizeObserver((S) => {
      S.forEach((O) => E(O));
    }), k = t.getBoundingClientRect();
    let M = null;
    k.height === 0 && k.width === 0 && (M = new IntersectionObserver((S) => {
      S[0]?.isIntersecting && queueMicrotask(() => {
        r(n() + 1e-7), M?.disconnect(), M = null;
      });
    }, {
      root: e.scrollElement,
      threshold: 0.5
    }), M.observe(e.contentElement)), b.observe(t), he(() => {
      b.disconnect(), M?.disconnect(), M = null;
    }), b.observe(e.bodyElement), he(() => {
      b.unobserve(e.bodyElement);
    }), e.scrollElement.addEventListener("scroll", L, !1), he(() => {
      e.scrollElement.removeEventListener("scroll", L, !1);
    });
  }), u(le, {
    each: N,
    children: (b, k) => sn(e.itemComponent.component, {
      ...e.itemComponent.props,
      item: b,
      index: k(),
      ref: (S) => {
        Promise.resolve().then(() => {
          F(S, D[k()]);
        });
      }
    })
  });
}
var Td = /* @__PURE__ */ x("<div class=cm-virtual-list><div><div>");
const Mr = "cm-virtual-list";
let kt;
const Pd = () => {
  me || kt || (kt = document.createElement("style"), kt.type = "text/css", kt.textContent = `
        .${Mr} {
            position: relative !important;
            flex-shrink: 0 !important;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        .${Mr} > * {
            width: 100%;
            will-change: transform !important;
            box-sizing: border-box !important;
            contain: layout !important;
        }
      `, document.head.appendChild(kt));
};
function Pt(e) {
  Pd();
  let t, n, r, i;
  return (() => {
    var l = Td(), a = l.firstChild, s = a.firstChild, c = t;
    typeof c == "function" ? Z(c, l) : t = l;
    var d = n;
    typeof d == "function" ? Z(d, a) : n = a;
    var o = r;
    return typeof o == "function" ? Z(o, s) : r = s, m(s, u(Ei, te({
      ref(h) {
        var g = i;
        typeof g == "function" ? g(h) : i = h;
      },
      scrollElement: t,
      contentElement: n,
      bodyElement: r
    }, e))), l;
  })();
}
function Dd(e) {
  return e;
}
function Xm(e) {
  e.group = !0;
  const t = Ge(() => e.children), n = () => t.toArray();
  return e.items = n(), e;
}
var Ad = /* @__PURE__ */ x("<span class=cm-select-trigger>"), Rd = /* @__PURE__ */ x("<div>"), Id = /* @__PURE__ */ x("<ul class=cm-select-option-list>"), zd = /* @__PURE__ */ x("<div class=cm-select-options-wrap><div class=cm-select-options>"), Nd = /* @__PURE__ */ x("<div class=cm-select-header>"), Od = /* @__PURE__ */ x("<div class=cm-select-loading>加载中"), Bd = /* @__PURE__ */ x("<div class=cm-select-footer>");
function Vd(e) {
  let t;
  const n = e.textField || "label", r = e.valueField || "value", [i, l] = K(!1), a = e.align ?? "bottomLeft", s = Ge(() => e.children), c = () => s.toArray(), [d, o] = Fe(e, e.multi ? [] : ""), h = [];
  let g, $ = [];
  e.filter && e.defaultLabel && (e.multi && e.defaultLabel instanceof Array ? e.defaultLabel.forEach((A, z) => {
    $.push({
      [r]: d()[z],
      [n]: A
    });
  }) : $ = [{
    [r]: d(),
    [n]: e.defaultLabel
  }]);
  let w = !0;
  const [f, v] = K("");
  queueMicrotask(() => {
    w = !1;
  });
  const [y, C] = K($);
  let _ = null;
  const L = () => U(e, "cm-select", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && `${d()}`.length !== 0,
    "cm-select-multi": e.multi,
    "cm-select-open": i(),
    "cm-select-with-prefix": e.prefix,
    [`cm-select-status-${e.status}`]: e.status
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let F = {};
  function N(A, z) {
    A && A.forEach((H) => {
      z.push(H), H._show = !0, F[H[r]] = H, H.items && N(H.items, z);
    });
  }
  const P = je(() => {
    const A = e.data || c() || [];
    F = {};
    const z = [];
    return e.emptyOption && z.push({
      [r]: "",
      [n]: e.emptyOption,
      _show: !0,
      emptyOption: !0
    }), $ && $.forEach((H) => {
      z.push({
        ...H,
        _show: !0
      });
    }), A && N(A, z), z;
  }), [D, E] = we({
    list: []
  });
  Q(() => {
    const A = Ie(() => d());
    E("list", P());
    const z = [];
    E("list", (H) => H, p((H) => {
      e.multi ? H._checked = A.includes(H[r]) : H._checked = A === H[r], H._checked && z.push(H);
    })), C(z);
  }), Q(() => {
    const A = d(), z = [];
    E("list", (H) => H, p((H) => {
      e.multi ? H._checked = A.includes(H[r]) : H._checked = A === H[r], H._checked && z.push(H);
    })), C(z);
  });
  const b = (A, z) => {
    if (F[A] && F[A].items && F[A].items.length)
      return;
    let H = Ie(() => y());
    if (e.multi) {
      let Y = d();
      const q = Y.indexOf(A);
      if (q > -1)
        Y.splice(q, 1), H.splice(q, 1);
      else {
        if (e.max && Y.length >= e.max) {
          e.onExceed?.();
          return;
        }
        Y = [...Y], Y.push(A), H.push(z);
      }
      o([...Y]), v(""), C([...H]), e.onChange && e.onChange(Y, z);
    } else
      w = !0, H = [z], o(A), v(""), C([...H]), Promise.resolve().then(() => {
        w = !1;
      }), l(!1), e.onChange && e.onChange(A, z);
  }, k = je(() => {
    const A = [];
    return y().map((H) => {
      A.push({
        data: H,
        id: H[r],
        title: H[n]
      });
    }), e.multi ? A.length ? A.map((H) => (H.title = e.renderSelectedItem?.(H.data) || H.title, H)) : e.emptyOption ? [{
      id: "",
      title: e.renderSelectedItem?.(null) || e.emptyOption
    }] : [] : A.length ? e.renderSelectedItem?.(A[0].data) || A[0].title : e.emptyOption ? e.emptyOption : "";
  }), M = (A) => {
    C([]), e.multi ? (e.onChange && e.onChange([]), o([])) : (e.onChange && e.onChange(""), o(""), v(""), l(!1));
  };
  Q(() => {
    const A = f();
    if (e.remoteMethod) {
      if (w)
        return;
      A && ($ = [], clearTimeout(_), _ = setTimeout(() => {
        e.remoteMethod?.(A), l(!0);
      }, e.debounceTime || 300));
    } else
      E("list", (z) => z, p((z) => {
        z._show = z[n].indexOf(A) > -1;
      })), queueMicrotask(() => {
        S(), O(A);
      });
  });
  const S = () => {
    if (!CSS.highlights)
      return;
    const A = document.createTreeWalker(g, NodeFilter.SHOW_TEXT);
    let z = A.nextNode();
    for (; z; )
      h.push(z), z = A.nextNode();
  }, O = (A) => {
    if (!CSS.highlights)
      return;
    CSS.highlights.delete("cm-search-results");
    const z = A.trim().toLowerCase();
    if (!z)
      return;
    const H = h.map((q) => ({
      el: q,
      text: q.textContent?.toLowerCase()
    })).map(({
      text: q,
      el: G
    }) => {
      const X = [];
      let J = 0;
      for (; q && J < q.length; ) {
        const ce = q.indexOf(z, J);
        if (ce === -1)
          break;
        X.push(ce), J = ce + z.length;
      }
      return X.map((ce) => {
        const re = new Range();
        return re.setStart(G, ce), re.setEnd(G, ce + z.length), re;
      });
    }), Y = new window.Highlight(...H.flat());
    CSS.highlights.set("cm-search-results", Y);
  }, R = (A, z) => {
    if (e.multi) {
      const H = y(), Y = d(), q = Y.indexOf(A.id);
      q > -1 && (Y.splice(q, 1), H.splice(q, 1)), o([...Y]), C([...H]), e.onChange && e.onChange(Y);
    }
  }, T = () => {
    if (e.multi) {
      const A = y(), z = d();
      z.length > 0 && (z.pop(), A.pop(), o([...z]), C([...A]), e.onChange && e.onChange(z));
    }
  }, I = je(() => D.list.filter((A) => A._show));
  return (() => {
    var A = Rd(), z = t;
    return typeof z == "function" ? Z(z, A) : t = A, m(A, u(Ae, {
      get transfer() {
        return e.transfer;
      },
      fixWidth: !0,
      align: a,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [i, l],
      get menu() {
        return (() => {
          var H = zd(), Y = H.firstChild;
          return m(H, (() => {
            var q = ee(() => !!e.header);
            return () => q() ? (() => {
              var G = Nd();
              return m(G, () => e.header), G;
            })() : null;
          })(), Y), m(Y, u(V, {
            get when() {
              return !e.loading;
            },
            get fallback() {
              return Od();
            },
            get children() {
              var q = Id(), G = g;
              return typeof G == "function" ? Z(G, q) : g = q, m(q, u(V, {
                get when() {
                  return I().length;
                },
                get fallback() {
                  return u(pn, {
                    width: 100,
                    type: "empty",
                    typeImage: Qn,
                    get desc() {
                      return e.emptyText;
                    }
                  });
                },
                get children() {
                  return u(Pt, {
                    get items() {
                      return I();
                    },
                    itemEstimatedSize: 30,
                    get maxHeight() {
                      return e.maxHeight ?? 200;
                    },
                    get itemComponent() {
                      return {
                        component: Hd,
                        props: {
                          textField: n,
                          valueField: r,
                          renderOption: e.renderOption,
                          onClear: M,
                          onOptionClick: b,
                          value: d
                        }
                      };
                    }
                  });
                }
              })), q;
            }
          })), m(H, (() => {
            var q = ee(() => !!e.footer);
            return () => q() ? (() => {
              var G = Bd();
              return m(G, () => e.footer), G;
            })() : null;
          })(), null), B((q) => (q = e.maxHeight ? `${e.maxHeight}px` : "") != null ? Y.style.setProperty("max-height", q) : Y.style.removeProperty("max-height")), H;
        })();
      },
      get children() {
        return u(V, {
          get when() {
            return e.triggerRender;
          },
          get fallback() {
            return u(wt, {
              get text() {
                return k();
              },
              get multi() {
                return e.multi;
              },
              get showMax() {
                return e.showMax;
              },
              get disabled() {
                return e.disabled;
              },
              get showMore() {
                return e.showMore;
              },
              get valueClosable() {
                return e.valueClosable || e.filter;
              },
              get clearable() {
                return e.clearable;
              },
              onClear: M,
              get placeholder() {
                return e.placeholder;
              },
              get prepend() {
                return e.prefix;
              },
              get size() {
                return e.size;
              },
              get icon() {
                return u(tt, {
                  class: "cm-select-cert"
                });
              },
              onClose: R,
              query: [f, v],
              get filter() {
                return e.filter;
              },
              onDeleteLastValue: T
            });
          },
          get children() {
            var H = Ad();
            return m(H, () => e.triggerRender?.(k())), H;
          }
        });
      }
    })), B((H) => {
      var Y = L(), q = e.style;
      return H.e = j(A, Y, H.e), H.t = W(A, q, H.t), H;
    }, {
      e: void 0,
      t: void 0
    }), A;
  })();
}
const Hd = (e) => {
  const t = e.item;
  return u(V, {
    get when() {
      return t.emptyOption;
    },
    get fallback() {
      return u(Md, {
        ref(n) {
          var r = e.ref;
          typeof r == "function" ? r(n) : e.ref = n;
        },
        get renderOption() {
          return e.renderOption;
        },
        get visible() {
          return t._show;
        },
        get disabled() {
          return t.disabled;
        },
        data: t,
        get checked() {
          return t._checked;
        },
        get textField() {
          return e.textField;
        },
        get valueField() {
          return e.valueField;
        },
        onClick: (n) => e.onOptionClick(n, t)
      });
    },
    get children() {
      return u(Fd, {
        visible: !0,
        get data() {
          return {
            label: t[e.textField],
            value: ""
          };
        },
        get checked() {
          return e.value() === "";
        },
        get onClick() {
          return e.onClear;
        }
      });
    }
  });
};
var Yd = /* @__PURE__ */ x("<div class=cm-slider-handle tabindex=0>"), qd = /* @__PURE__ */ x("<div class=cm-slider-handle tabindex=1>"), jd = /* @__PURE__ */ x("<div class=cm-slider-marks>"), Wd = /* @__PURE__ */ x("<div><div class=cm-slider-rail></div><div class=cm-slider-track></div><div class=cm-slider-steps>"), Ud = /* @__PURE__ */ x("<span>"), Xd = /* @__PURE__ */ x("<span class=cm-slider-mark>");
function Km(e) {
  let t, n, r, i, l, a;
  const s = e.min ?? 0, c = e.max ?? 100, d = e.step ?? 1, o = e.range ?? !1, [h, g] = Fe(e, o ? [0, 0] : 0), $ = () => U(e, "cm-slider", {
    "cm-slider-disabled": e.disabled
  }), w = () => t.getBoundingClientRect().width / (c - s) * d, f = () => {
    const b = o ? h() : [s, h()], k = Math.abs(b[1] - b[0]) / (c - s) * 100, M = (b[0] - s) / (c - s) * 100, S = (b[1] - s) / (c - s) * 100;
    return {
      left: M,
      width: k,
      right: S
    };
  }, v = () => {
    const b = f();
    return {
      left: b.left + "%",
      width: b.width + "%"
    };
  }, y = () => {
    const b = o ? h()[0] : h();
    return e.tipFormatter ? e.tipFormatter(b) : b;
  }, C = () => e.tipFormatter ? e.tipFormatter(h()[1]) : h()[1];
  Q(() => {
    E();
  });
  const _ = (b) => {
    let k;
    try {
      k = d.toString().split(".")[1].length;
    } catch {
      k = 0;
    }
    const M = Math.pow(10, k);
    return Math.round(b * M) / M;
  }, L = (b, k) => {
    const S = t.getBoundingClientRect().width, O = _(k.x / S * (c - s) + s);
    if (setTimeout(() => {
      i && i.updatePosition();
    }), o && O > h()[1])
      return !1;
    const R = o ? [O, Math.max(O, h()[1])] : O;
    g(R), e.onChange && e.onChange(R);
  }, F = (b, k) => {
    const S = t.getBoundingClientRect().width, O = _(k.x / S * (c - s) + s);
    if (setTimeout(() => {
      l && l.updatePosition();
    }), o && O < h()[0])
      return !1;
    const R = o ? [Math.min(h()[0], O), O] : O;
    g(R), e.onChange && e.onChange(R);
  }, N = (b) => {
    if (e.disabled || b.target.classList.contains("cm-slider-handle"))
      return;
    const k = b.target.closest(".cm-slider");
    if (!k)
      return;
    const M = k.getBoundingClientRect(), S = b.pageX - M.left, R = t.getBoundingClientRect().width, T = _(Math.round(S / R * (c - s) / d + s) * d);
    let I = h();
    if (o) {
      const A = Math.abs(I[1] - T) > Math.abs(I[0] - T);
      I = A ? [T, I[1]] : [I[0], T], g(I), setTimeout(() => {
        A ? i && i.updatePosition() : l && l.updatePosition();
      }), e.onChange && e.onChange(I);
    } else
      g(T), setTimeout(() => {
        i && i.updatePosition();
      }), e.onChange && e.onChange(T);
  }, P = () => {
    if (!e.marks)
      return [];
    const b = [];
    for (let k = s; k <= c; k += d)
      e.marks[k] && b.push(k);
    return b;
  }, D = () => {
    if (e.marks) {
      const b = [];
      for (const k in e.marks)
        b.push({
          step: parseFloat(k),
          label: e.marks[k]
        });
      return b;
    }
    return [];
  }, E = () => {
    const b = f(), k = t.getBoundingClientRect(), M = o ? k.width * b.left / 100 : k.width * b.right / 100, S = o ? k.width * (b.left + b.width) / 100 : 0;
    n && n.setPosition({
      x: M,
      y: 0
    }), r && r.setPosition({
      x: S,
      y: 0
    });
  };
  return ge(() => {
    const b = new ResizeObserver(() => {
      E();
    });
    b.observe(a), he(() => b.disconnect());
  }), (() => {
    var b = Wd(), k = b.firstChild, M = k.nextSibling, S = M.nextSibling, O = a;
    typeof O == "function" ? Z(O, b) : a = b, b.$$mousedown = N;
    var R = t;
    return typeof R == "function" ? Z(R, k) : t = k, m(S, u(le, {
      get each() {
        return P();
      },
      children: (T) => {
        const I = o ? h() : [s, h()], A = T >= I[0] && T <= I[1], z = () => ({
          "cm-slider-step": !0,
          "cm-slider-step-active": A
        }), H = `${(T - s) / (c - s) * 100}%`;
        return (() => {
          var Y = Ud();
          return H != null ? Y.style.setProperty("left", H) : Y.style.removeProperty("left"), B((q) => j(Y, z(), q)), Y;
        })();
      }
    })), m(b, u(Jt, {
      get disabled() {
        return e.disabled;
      },
      get content() {
        return y();
      },
      align: "top",
      ref(T) {
        var I = i;
        typeof I == "function" ? I(T) : i = T;
      },
      arrow: !0,
      get children() {
        return u(An, {
          axis: "x",
          get disabled() {
            return e.disabled;
          },
          ref(T) {
            var I = n;
            typeof I == "function" ? I(T) : n = T;
          },
          onDrag: L,
          bounds: "parent",
          class: "cm-slider-handle-drag",
          get grid() {
            return [w(), w()];
          },
          get children() {
            return Yd();
          }
        });
      }
    }), null), m(b, u(V, {
      when: o,
      get children() {
        return u(Jt, {
          get disabled() {
            return e.disabled;
          },
          get content() {
            return C();
          },
          align: "top",
          ref(T) {
            var I = l;
            typeof I == "function" ? I(T) : l = T;
          },
          arrow: !0,
          get children() {
            return u(An, {
              axis: "x",
              get disabled() {
                return e.disabled;
              },
              ref(T) {
                var I = r;
                typeof I == "function" ? I(T) : r = T;
              },
              onDrag: F,
              bounds: "parent",
              class: "cm-slider-handle-drag",
              get grid() {
                return [w(), w()];
              },
              get children() {
                return qd();
              }
            });
          }
        });
      }
    }), null), m(b, u(V, {
      get when() {
        return e.marks;
      },
      get children() {
        var T = jd();
        return m(T, u(le, {
          get each() {
            return D();
          },
          children: (I) => {
            const A = `${(I.step - s) / (c - s) * 100}%`;
            return (() => {
              var z = Xd();
              return A != null ? z.style.setProperty("left", A) : z.style.removeProperty("left"), m(z, () => I.label), z;
            })();
          }
        })), T;
      }
    }), null), B((T) => {
      var I = $(), A = e.style, z = v();
      return T.e = j(b, I, T.e), T.t = W(b, A, T.t), T.a = W(M, z, T.a), T;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), b;
  })();
}
ae(["mousedown"]);
var Kd = /* @__PURE__ */ x("<span class=cm-spinner-plus>"), Gd = /* @__PURE__ */ x("<span class=cm-spinner-subs>");
function Gm(e) {
  const t = () => U(e, "cm-spinner", {
    [`cm-spinner-${e.size}`]: e.size,
    "cm-spinner-disabled": e.disabled
  }), [n, r] = Fe(e, Math.max(0, e.min ?? 0)), i = (g, $) => {
    g = g.replace(/[^0-9\.]/g, ""), $.target.value = g;
  }, l = (g) => {
    g.keyCode === 38 && d(), g.keyCode === 40 && o();
  }, a = e.min || 0, s = e.step || 1, c = (g) => {
    let $ = g;
    e.max !== void 0 && ($ = Math.min($, e.max)), a !== void 0 && ($ = Math.max($, a)), Promise.resolve().then(() => {
      r($);
    }), e.onChange && e.onChange($);
  }, d = () => {
    if (e.disabled)
      return;
    let g = h(n(), s);
    if (e.loop && e.max !== void 0 && a !== void 0 && g > e.max) {
      const $ = g - e.max;
      g = a + $ - 1;
    }
    e.max !== void 0 && (g = Math.min(e.max, g)), r(g), e.onChange && e.onChange(g), e.onPlus && e.onPlus(g, s);
  }, o = () => {
    if (e.disabled)
      return;
    let g = h(n(), -s);
    if (e.loop && e.max !== void 0 && a !== void 0 && g < a) {
      const $ = g - a;
      g = e.max + $ + 1;
    }
    a !== void 0 && (g = Math.max(a, g)), r(g), e.onChange && e.onChange(g), e.onSub && e.onSub(g, s);
  };
  function h(g, $) {
    let w, f;
    try {
      w = g.toString().split(".")[1].length;
    } catch {
      w = 0;
    }
    try {
      f = $.toString().split(".")[1].length;
    } catch {
      f = 0;
    }
    const v = Math.pow(10, Math.max(w, f));
    return (g * v + $ * v) / v;
  }
  return u(Ve, {
    get classList() {
      return t();
    },
    get style() {
      return e.style;
    },
    get size() {
      return e.size;
    },
    get placeholder() {
      return e.placeholder;
    },
    get disabled() {
      return e.disabled;
    },
    onInput: i,
    value: [n, r],
    onChange: c,
    onKeyDown: l,
    get append() {
      return [(() => {
        var g = Kd();
        return g.$$click = d, m(g, u(Zt, {})), g;
      })(), (() => {
        var g = Gd();
        return g.$$click = o, m(g, u(tt, {})), g;
      })()];
    }
  });
}
ae(["click"]);
var Zd = /* @__PURE__ */ x('<div tabindex=0><span>A</span><span class=cm-switch-inner-placeholder><span><span class=cm-switch-inner-button-placeholder></span></span><span><span class=cm-switch-inner-button-placeholder></span></span></span><span class=cm-switch-inner><span class="cm-switch-label cm-switch-label-left"></span><span class="cm-switch-label cm-switch-label-right"></span></span><input type=hidden>'), Jd = /* @__PURE__ */ x("<span class=cm-switch-inner-icon>");
function Zm(e) {
  const t = () => U(e, "cm-switch", {
    [`cm-switch-${e.size}`]: e.size,
    "cm-switch-disabled": e.disabled,
    "cm-switch-checked": n(),
    "cm-switch-loading": e.loading,
    "cm-switch-round": e.round ?? !0
  }), [n, r] = Fe(e, "checked", !1), i = () => be(e, {
    "--cm-switch-default-color": e.colors && e.colors[0],
    "--cm-switch-active-color": e.colors && e.colors[1]
  }), l = e.labels || [], a = e.values || [!0, !1], s = async () => {
    if (e.disabled || e.loading)
      return;
    let d = !0;
    if (e.onBeforeChange && (d = await e.onBeforeChange(n())), d) {
      const h = n() ? a[1] : a[0];
      e.onChange && e.onChange(h), r(h);
    }
  }, c = () => n() ? e.icon && e.icon instanceof Array ? e.icon[1] : e.icon : e.icon && e.icon instanceof Array ? e.icon[0] : e.icon;
  return (() => {
    var d = Zd(), o = d.firstChild, h = o.nextSibling, g = h.firstChild;
    g.firstChild;
    var $ = g.nextSibling;
    $.firstChild;
    var w = h.nextSibling, f = w.firstChild, v = f.nextSibling, y = w.nextSibling;
    return d.$$click = s, o.style.setProperty("width", "0px"), o.style.setProperty("font-size", "12px"), o.style.setProperty("visibility", "hidden"), m(g, () => l[0], null), m($, () => l[1], null), m(w, (() => {
      var C = ee(() => !!c());
      return () => C() ? (() => {
        var _ = Jd();
        return m(_, c), _;
      })() : null;
    })(), f), m(f, () => l[0]), m(v, () => l[1]), m(d, (() => {
      var C = ee(() => !!e.loading);
      return () => C() ? u(mt, {}) : null;
    })(), y), B((C) => {
      var _ = t(), L = i(), F = e.name;
      return C.e = j(d, _, C.e), C.t = W(d, L, C.t), F !== C.a && ne(y, "name", C.a = F), C;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), B(() => y.value = n() ? a[0] : a[1]), d;
  })();
}
ae(["click"]);
var Qd = /* @__PURE__ */ x("<div><textarea class=cm-input>"), pd = /* @__PURE__ */ x("<div class=cm-input-suffix>");
function Jm(e) {
  const [t, n] = de(e, ["classList", "class", "style", "value", "autoHeight", "disabled", "onChange", "onInput", "onKeyUp", "onEnter", "name", "trigger"]), r = () => U(t, "cm-textarea", "cm-input-wrapper", {
    "cm-input-disabled": t.disabled,
    "cm-input-auto-height": t.autoHeight
  }), [i, l] = Fe(e, ""), [a, s] = K(i()), c = t.trigger || "blur", d = (f) => {
  }, o = (f) => {
    l(f.target.value), t.onChange && t.onChange(f.target.value);
  }, h = (f) => {
    c === "input" && (l(f.target.value), t.onChange && t.onChange(f.target.value)), s(f.target.value), t.onInput && t.onInput(f.target.value, f), t.autoHeight && w(f);
  }, g = (f) => {
    t.onKeyUp && t.onKeyUp(f.target.value, f), f.keyCode === 13 && t.onEnter && t.onEnter(f.target.value, f);
  };
  let $;
  const w = (f) => {
    const v = f.target;
    $ || ($ = v.clientHeight), v.scrollHeight > $ && (v.value.split(`
`).length === 1 ? v.style.height = `${$}px` : v.style.height = "auto", v.style.overflowY = "hidden", v.scrollTop = 0, v.style.height = `${v.scrollHeight}px`);
  };
  return (() => {
    var f = Qd(), v = f.firstChild;
    return ye(v, te(n, {
      get value() {
        return i();
      },
      spellcheck: !1,
      autocomplete: "off",
      wrap: "soft",
      onChange: d,
      onInput: h,
      onKeyUp: g,
      onBlur: o
    }), !1, !1), m(f, (() => {
      var y = ee(() => !!(e.wordCount && e.maxLength));
      return () => y() ? (() => {
        var C = pd();
        return m(C, u(ki, {
          get total() {
            return e.maxLength;
          },
          get value() {
            return a();
          }
        })), C;
      })() : null;
    })(), null), B((y) => {
      var C = r(), _ = e.style;
      return y.e = j(f, C, y.e), y.t = W(f, _, y.t), y;
    }, {
      e: void 0,
      t: void 0
    }), f;
  })();
}
var eu = /* @__PURE__ */ x("<div class=cm-transfer-list-item><div>");
function tu(e) {
  const t = () => e.render ? e.render(e.data) : e.data.title, n = () => {
    e.data.disabled || e.onSelect(e.data);
  }, r = () => e.data._checked, i = () => ({
    display: e.data._hide ? "none" : "flex"
  });
  return (() => {
    var l = eu(), a = l.firstChild;
    return l.$$click = n, m(l, u(Ke, {
      get checked() {
        return r();
      },
      get disabled() {
        return e.data.disabled;
      }
    }), a), m(a, t), B((s) => W(l, i(), s)), l;
  })();
}
ae(["click"]);
var nu = /* @__PURE__ */ x("<div><span>"), ru = /* @__PURE__ */ x('<div class="">'), iu = /* @__PURE__ */ x("<div class=cm-transfer-filter-wrap>"), lu = /* @__PURE__ */ x("<div class=cm-transfer-list><div class=cm-transfer-list-header></div><div class=cm-transfer-list-body><div class=cm-transfer-list-content>");
function Er(e) {
  const t = () => ({
    width: e.width ? `${e.width}px` : "",
    height: e.height ? `${e.height}px` : ""
  }), n = () => {
    const o = e.value || [], h = {};
    return o.forEach((g) => {
      h[g] = !0;
    }), e.store.data.filter((g) => e.name === "source" ? !h[g.id] : h[g.id]);
  }, r = () => {
    let o = 0;
    return n().forEach((h) => {
      h.disabled || o++;
    }), o;
  }, i = (o) => {
    if (e.onSelect(o, !o._checked), o._checked) {
      const h = `${e.name}Ids`;
      e.setStore(h, [...e.store[`${e.name}Ids`], o.id]);
    } else {
      const h = `${e.name}Ids`;
      e.setStore(h, p((g) => {
        g.splice(g.indexOf(o.id), 1);
      }));
    }
  }, l = () => {
    const o = e.store[`${e.name}Ids`];
    return o.length > 0 ? r() === o.length ? !0 : "indeterminate" : !1;
  }, a = (o) => {
    const h = [], g = n();
    g.forEach(($) => {
      e.onSelect($, o);
    }), g.forEach(($) => {
      $._checked && h.push($.id);
    }), e.setStore(`${e.name}Ids`, h);
  };
  Q(() => {
    e.store[`${e.name}Ids`].length ? e.setStore && e.setStore(`${e.name}Disabled`, !1) : e.setStore && e.setStore(`${e.name}Disabled`, !0);
  });
  const s = (o) => {
    n().forEach((g) => {
      const $ = () => e.render ? e.render(g) : g.title;
      e.setStore("data", (w) => w.id === g.id, "_hide", !$().includes(o));
    });
  }, c = () => n().length, d = () => {
    const o = e.store[`${e.name}Ids`];
    return o.length ? o.length + "/" + c() : c();
  };
  return (() => {
    var o = lu(), h = o.firstChild, g = h.nextSibling, $ = g.firstChild;
    return m(h, u(jl, {
      get children() {
        return [(() => {
          var w = nu(), f = w.firstChild;
          return m(w, u(Ke, {
            get checked() {
              return l();
            },
            onChange: a
          }), f), m(f, () => e.name === "source" ? "源列表" : "目标列表"), w;
        })(), (() => {
          var w = ru();
          return m(w, d), w;
        })()];
      }
    })), m(g, u(V, {
      get when() {
        return e.filter;
      },
      get children() {
        var w = iu();
        return m(w, u(Ve, {
          get append() {
            return u(Gt, {});
          },
          size: "small",
          onInput: s
        })), w;
      }
    }), $), m($, u(le, {
      get each() {
        return n();
      },
      children: (w) => u(tu, {
        data: w,
        onSelect: i,
        get store() {
          return e.store;
        },
        get render() {
          return e.render;
        }
      })
    })), B((w) => W(o, t(), w)), o;
  })();
}
var au = /* @__PURE__ */ x("<div><div class=cm-transfer-operation>");
function Qm(e) {
  const [t, n] = Fe(e, []), r = () => U(e, "cm-transfer"), [i, l] = we({
    data: [],
    sourceDisabled: !0,
    targetDisabled: !0,
    sourceIds: [],
    targetIds: []
  }), a = e.rightText || "To Right", s = e.leftText || "To Left";
  Q(() => {
    l("data", e.data || []);
  });
  const c = (h, g) => {
    h.disabled || l("data", ($) => $.id === h.id, "_checked", g);
  }, d = () => {
    i.sourceIds.forEach((g) => {
      l("data", ($) => $.id === g, "_checked", !1);
    });
    let h = t();
    h = h.concat([...i.sourceIds]), l("sourceIds", []), n([...h]), e.onChange && e.onChange([...h]);
  }, o = () => {
    i.targetIds.forEach((g) => {
      l("data", ($) => $.id === g, "_checked", !1);
    });
    const h = t();
    i.targetIds.forEach((g) => {
      h.splice(h.indexOf(g), 1);
    }), l("targetIds", []), n([...h]), e.onChange && e.onChange([...h]);
  };
  return (() => {
    var h = au(), g = h.firstChild;
    return m(h, u(Er, {
      get width() {
        return e.width;
      },
      get height() {
        return e.height;
      },
      store: i,
      setStore: l,
      name: "source",
      get value() {
        return t();
      },
      onSelect: c,
      get filter() {
        return e.filter;
      },
      get render() {
        return e.render;
      }
    }), g), m(g, u(Ne, {
      get disabled() {
        return i.sourceDisabled;
      },
      get icon() {
        return u(Xe, {
          size: 14
        });
      },
      size: "small",
      onClick: d,
      children: a
    }), null), m(g, u(Ne, {
      get disabled() {
        return i.targetDisabled;
      },
      get icon() {
        return u(We, {
          size: 14
        });
      },
      size: "small",
      onClick: o,
      children: s
    }), null), m(h, u(Er, {
      get width() {
        return e.width;
      },
      get height() {
        return e.height;
      },
      store: i,
      setStore: l,
      name: "target",
      get value() {
        return t();
      },
      onSelect: c,
      get filter() {
        return e.filter;
      },
      get render() {
        return e.render;
      }
    }), null), B(($) => {
      var w = r(), f = e.style;
      return $.e = j(h, w, $.e), $.t = W(h, f, $.t), $;
    }, {
      e: void 0,
      t: void 0
    }), h;
  })();
}
var su = /* @__PURE__ */ x("<span class=cm-tree-item-folder>"), cu = /* @__PURE__ */ x("<span class=cm-tree-item-file>"), Fr = /* @__PURE__ */ x("<span class=cm-tree-item-icon>"), ou = /* @__PURE__ */ x("<div><div></div><div><span class=cm-tree-title><span class=cm-tree-text></span></span></div><div>"), du = /* @__PURE__ */ x("<span>"), uu = /* @__PURE__ */ x("<span class=cm-tree-patch>");
function hu(e) {
  const t = gu();
  let n;
  const [r, i] = K(!1), [l, a] = K(!1), [s, c] = K(!1), d = () => t.store.store.nodeMap[e.data[t.store.keyField]].expand, o = () => t.store.store.nodeMap[e.data[t.store.keyField]]._selected, h = () => t.store.store.nodeMap[e.data[t.store.keyField]]._dragging, g = () => ({
    "cm-tree-item": !0,
    "cm-tree-item-open": d(),
    "cm-tree-item-selected": o(),
    "cm-tree-item-dragging": h(),
    [`${t.draggingClass}`]: !!t.draggingClass && h(),
    [`${t.selectedClass}`]: t.selectedClass && o()
  }), $ = () => e.data.children && e.data.children.length || e.data.loading, w = () => {
    let T = t.directory ? $() ? su() : cu() : null;
    return t.customIcon && typeof t.customIcon == "function" && (T = (() => {
      var I = Fr();
      return m(I, () => t.customIcon(e.data)), I;
    })()), e.data.icon && (T = (() => {
      var I = Fr();
      return m(I, () => e.data.icon), I;
    })()), T;
  }, f = () => {
    t && t.contextMenu && t.onContextMenu && t.onContextMenu({
      ...e.data
    });
  }, v = () => {
    t.onOpenClose(e.data);
  }, y = () => {
    t.onNodeSelect(e.data);
  }, C = (T) => {
    e.data.disabled || t.draggable && (T.dataTransfer && T.dataTransfer.setData("node", e.data[t.store.keyField]), d() && t.onOpenClose(e.data), t.store.setNodeDragging(e.data[t.store.keyField], !0), t.onDragStart?.(T, e.data));
  }, _ = (T) => {
    t?.store && t.store.setNodeDragging(e.data[t.store.keyField], !1);
  }, L = (T) => {
    const I = n.getBoundingClientRect(), A = I.height, z = T.clientY - I.top;
    return z <= A * 0.3 ? it.before : z <= A * (0.3 + 0.4) ? it.body : it.after;
  }, F = (T) => {
    T.preventDefault();
    const I = L(T);
    E(I), t.onDragEnter?.(T, e.data, I);
  }, N = (T) => {
    T.preventDefault();
    const I = L(T);
    E(I), t.onDragOver?.(T, e.data, I);
  }, P = (T) => {
    const I = L(T);
    E(I, !0), t.onDragLeave?.(T, e.data, I);
  }, D = (T) => {
    const I = L(T);
    E(I, !0), t.onDrop?.(T, e.data[t.store.keyField], I);
  }, E = (T, I = !1) => {
    i(!1), a(!1), c(!1), I || (T === it.before ? i(!0) : T === it.body ? a(!0) : T === it.after && b() && c(!0));
  };
  Q(() => {
  });
  const b = () => {
    const T = e.data._parent;
    return !!(T && T.children.findIndex((A) => A[t.store.keyField] === e.data[t.store.keyField]) === T.children.length - 1);
  }, k = () => ({
    "padding-left": 16 * e.data._level + "px",
    height: "100%"
  }), M = () => ({
    "cm-tree-node-drop": !0,
    "cm-tree-node-drop_active": r()
  }), S = () => ({
    "cm-tree-node-drop": !0,
    "cm-tree-node-drop_active": s()
  }), O = () => ({
    "cm-tree-node-content": !0,
    "cm-tree-node-drop_active": l(),
    [`${t.dragHoverClass}`]: !!t.dragHoverClass && l()
  }), R = () => t.store.store.nodeMap[e.data[t.store.keyField]].__loading;
  return (() => {
    var T = ou(), I = T.firstChild, A = I.nextSibling, z = A.firstChild, H = z.firstChild, Y = A.nextSibling;
    return Z((q) => {
      n = q, e.ref(q);
    }, T), T.addEventListener("drop", D), T.addEventListener("dragleave", P), T.addEventListener("dragover", N), T.addEventListener("dragenter", F), A.addEventListener("dragend", _), A.addEventListener("dragstart", C), m(A, u(V, {
      get when() {
        return R();
      },
      get fallback() {
        return (() => {
          var q = du();
          return q.$$click = v, m(q, u(V, {
            get when() {
              return t.arrowIcon && typeof t.arrowIcon;
            },
            get fallback() {
              return u(Xe, {});
            },
            get children() {
              return t.arrowIcon?.();
            }
          })), B(() => pe(q, "cm-tree-arrow " + ($() ? "" : "hide"))), q;
        })();
      },
      get children() {
        return u(mt, {
          color: "#1890ff",
          size: 16
        });
      }
    }), z), m(A, u(V, {
      get when() {
        return t.checkable;
      },
      get children() {
        return u(Ke, {
          get disabled() {
            return t.store.store.nodeMap[e.data[t.store.keyField]].disabled;
          },
          get checked() {
            return t.store.store.nodeMap[e.data[t.store.keyField]].checked;
          },
          onChange: (q) => t.onNodeCheck(e.data, q)
        });
      }
    }), z), m(A, w, z), z.$$click = y, z.$$contextmenu = f, m(H, () => e.data.title), m(z, (() => {
      var q = ee(() => !!e.data.patch);
      return () => q() ? (() => {
        var G = uu();
        return m(G, () => e.data.patch), G;
      })() : null;
    })(), null), B((q) => {
      var G = g(), X = k(), J = M(), ce = O(), re = t.draggable && !e.data.disabled, xe = S();
      return q.e = j(T, G, q.e), q.t = W(T, X, q.t), q.a = j(I, J, q.a), q.o = j(A, ce, q.o), re !== q.i && ne(A, "draggable", q.i = re), q.n = j(Y, xe, q.n), q;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0
    }), T;
  })();
}
ae(["contextmenu", "click"]);
var Fi = /* @__PURE__ */ ((e) => (e.FULL = "FULL", e.HALF = "HALF", e.CHILD = "CHILD", e.SHALLOW = "SHALLOW", e))(Fi || {});
class fu {
  store;
  setStore;
  data = [];
  flatData = [];
  keyField = "id";
  titleField = "title";
  selectedKey;
  setSelectedKey;
  setSelected;
  setValue;
  value;
  checkable;
  draggable;
  checkRelation;
  props;
  mode;
  constructor(t) {
    this.props = t, this.checkable = t.checkable ?? !1, this.checkRelation = t.checkRelation ?? "related", this.draggable = t.draggable ?? !1, this.keyField = t.keyField || "id", this.titleField = t.titleField || "title", this.mode = t.mode ?? "HALF";
    const [n, r] = we({
      nodeMap: {},
      nodeList: []
    });
    this.store = n, this.setStore = r;
    const [i, l] = K(""), [a, s] = De(t, "selected", ""), [c, d] = De(t, "value", []);
    this.selectedKey = i, this.setSelectedKey = l, this.setSelected = s, this.setValue = d, this.value = c, Q(() => {
      const o = a();
      this.selectNode(o, !0);
    }), Q(() => {
      const o = c();
      this.setCheckedByMod(o);
    });
  }
  init(t) {
    if (this.data = t, this.flatData = this.getAllFlatNodes(this.data), this.setStore("nodeMap", {}), this.setStore("nodeList", []), this.buildRelation(this.data, null, 0), this.setRootFlatNodes(), this.checkable) {
      const n = this.value();
      this.setCheckedByMod(n);
    } else {
      const n = this.selectedKey();
      this.selectNode(n, !0);
    }
  }
  /**
   * 构建父子关系和层级关系
   * @param data
   * @param parent
   * @param level
   */
  buildRelation = (t, n, r) => {
    const i = {};
    t.forEach((l) => {
      i[l[this.keyField]] = l, l._parent = n, l._level = r, l.visible = !0, l.children && this.buildRelation(l.children, l, r + 1);
    }), this.setStore("nodeMap", i);
  };
  setRootFlatNodes = () => {
    const t = this.getFlatNodes(this.data);
    this.setStore("nodeList", t);
  };
  /**
   * 获取显示的树节点
   * @param nodes
   * @returns
   */
  getFlatNodes = (t) => t.flatMap((r) => r.expand && r.children?.length && r.visible ? [r, this.getFlatNodes(r.children)].flat() : r.visible ? [r] : []);
  /**
   * 获取显示的树节点
   * @param nodes
   * @returns
   */
  getAllFlatNodes = (t) => t.flatMap((r) => r.children?.length ? [r, this.getAllFlatNodes(r.children)].flat() : [r]);
  getStore() {
    return this.store;
  }
  openCloseNode = (t) => {
    this.setStore("nodeMap", t[this.keyField], p((n) => {
      n.expand = !n.expand;
    })), this.setRootFlatNodes();
  };
  /**
   * 选择节点
   * @param node
   * @param silence 不触发回调
   */
  selectNode = (t, n) => {
    const r = this._getNode(t);
    r && (this.setStore("nodeMap", this.selectedKey(), p((i) => {
      i._selected = !1;
    })), this.setStore("nodeMap", r[this.keyField], p((i) => {
      i._selected = !0, this.setSelectedKey(i[this.keyField]), this.setSelected(i[this.keyField]);
    })), !n && this.props.onNodeSelect?.(r));
  };
  clearSelect = () => {
    this.setStore("nodeMap", this.selectedKey(), p((t) => {
      t._selected = !1;
    })), this.setSelectedKey(""), this.setSelected("");
  };
  _storeNode = (t, n) => {
    n[t[this.keyField]] = t, t.visible = !0, t.children && t.children?.length > 0 && t.children.forEach((r) => {
      this._storeNode(r, n);
    });
  };
  storeNode = (t) => {
    const n = {};
    this._storeNode(t, n);
    const r = this.getAllFlatNodes([t]);
    this.flatData = this.flatData.concat(r), this.setStore("nodeMap", p((i) => {
      for (const l in n)
        i[l] = n[l];
    }));
  };
  getNode = (t) => this.store.nodeMap[t];
  _getNode = (t) => {
    let n;
    return typeof t == "string" || typeof t == "number" ? n = this.store.nodeMap[t] : (n = t, t = n[this.keyField]), n;
  };
  removeNode = (t) => {
    if (t) {
      const n = t._parent;
      if (n) {
        const r = n.children.findIndex((i) => i[this.keyField] === t[this.keyField]);
        this.setStore("nodeMap", n[this.keyField], p((i) => {
          i.children?.splice(r, 1);
        }));
      } else {
        const r = this.data.findIndex((i) => i[this.keyField] === t[this.keyField]);
        r > -1 && this.data.splice(r, 1);
      }
    }
  };
  remove = (t) => {
    const n = this._getNode(t);
    this.removeNode(n);
  };
  beforeNodeOperation = (t, n) => {
    if (!this.store.nodeMap[t])
      return console.error("targetKey not exist"), !1;
    const r = this._getNode(n);
    return this.store.nodeMap[r[this.keyField]] ? this.removeNode(r) : this.storeNode(r), r;
  };
  append = (t, n) => {
    const r = this.beforeNodeOperation(t, n);
    r && (this.setStore("nodeMap", p((i) => {
      const l = i[t];
      l.children || (l.children = []);
      const a = i[r[this.keyField]];
      this.updateLevels(r, l._level), a._parent = l, l.children.push(a), this.checkable && this.updateNodeCheckStatus(l);
    })), this.setRootFlatNodes());
  };
  /**
   * 更新节点选择状态
   * @param nodeId
   */
  updateNodeCheckStatus = (t) => {
    if (!t)
      return;
    const n = this._getNode(t);
    n && (this.setStore("nodeMap", n[this.keyField], p((r) => {
      r.checked = this.getNodeChecked(r);
    })), this.checkRelation === "related" && this.setCheckedForwardUp(n));
  };
  updateLevels = (t, n) => {
    this.setStore("nodeMap", t[this.keyField], p((r) => {
      r._level = n + 1;
    })), t.children && t.children.length > 0 && t.children.forEach((r) => {
      this.updateLevels(r, n + 1);
    });
  };
  prepend = (t, n) => {
    const r = this.beforeNodeOperation(t, n);
    r && (this.setStore("nodeMap", p((i) => {
      const l = i[t];
      l.children || (l.children = []);
      const a = i[r[this.keyField]];
      this.updateLevels(r, l._level), a._parent = l, l.children.unshift(a), this.checkable && this.updateNodeCheckStatus(l);
    })), this.setRootFlatNodes());
  };
  insertBefore = (t, n) => {
    const r = this.beforeNodeOperation(t, n);
    r && (this.setStore("nodeMap", p((i) => {
      const l = i[t], a = l._parent || {
        children: this.data
      }, s = a.children.findIndex((d) => d[this.keyField] === t);
      a.children.splice(s, 0, r);
      const c = i[r[this.keyField]];
      this.updateLevels(r, l._level - 1), c._parent = l._parent, this.checkable && this.updateNodeCheckStatus(l._parent);
    })), this.setRootFlatNodes());
  };
  insertAfter = (t, n) => {
    const r = this.beforeNodeOperation(t, n);
    r && (this.setStore("nodeMap", p((i) => {
      const l = i[t], a = l._parent || {
        children: this.data
      }, s = a.children.findIndex((d) => d[this.keyField] === t);
      a.children.splice(s + 1, 0, r);
      const c = i[r[this.keyField]];
      this.updateLevels(r, l._level - 1), c._parent = l._parent, this.checkable && this.updateNodeCheckStatus(l._parent);
    })), this.setRootFlatNodes());
  };
  filter = (t, n) => {
    n = n || ((a, s) => {
      const c = s[this.titleField];
      return c == null || !c.toString ? !1 : c.toString().toLowerCase().indexOf(a.toLowerCase()) > -1;
    });
    const i = [], l = {};
    this.flatData.forEach((a) => {
      l[a[this.keyField]] = a._parent && l[a._parent[this.keyField]] || n(t, a), this.setStore("nodeMap", a[this.keyField], p((s) => {
        s.visible = l[s[this.keyField]];
      })), l[a[this.keyField]] && i.push(a);
    }), i.forEach((a) => {
      const s = [];
      let c = a._parent;
      for (; c; )
        s.unshift(c), c = c._parent;
      s.forEach((d) => {
        this.setStore("nodeMap", d[this.keyField], p((o) => {
          o._filterVisible = !0, o.visible = (!o._parent || o._parent.visible) && o._filterVisible;
        }));
      }), this.setStore("nodeMap", a[this.keyField], p((d) => {
        d.visible = !d._parent || d._parent.visible;
      }));
    }), this.setRootFlatNodes();
  };
  getNodeIndexInShow = (t) => {
    const n = this._getNode(t);
    return !n || !n.visible ? -1 : this.store.nodeList.findIndex((i) => i[this.keyField] === n[this.keyField]);
  };
  expandAll = () => {
    this.flatData.forEach((t) => {
      t.visible && t.children && !t.expand && this.setStore("nodeMap", t[this.keyField], p((n) => {
        n.expand = !0;
      }));
    }), this.setRootFlatNodes();
  };
  collapseAll = () => {
    this.flatData.forEach((t) => {
      t.children && t.expand && this.setStore("nodeMap", t[this.keyField], p((n) => {
        n.expand = !1;
      }));
    }), this.setRootFlatNodes();
  };
  checkNode = (t, n) => {
    const r = this._getNode(t);
    this.setStore("nodeMap", r[this.keyField], p((l) => {
      l.checked = n, this.checkRelation === "related" && this.setCheckedForwardDown(l, n), this.checkRelation === "related" && (l.checked = this.getNodeChecked(r)), this.checkRelation === "related" && this.setCheckedForwardUp(l);
    }));
    const i = this.getCheckedKeys(this.mode);
    this.setValue(i), this.props.onChange && this.props.onChange(i);
  };
  setCheckedForwardDown = (t, n) => {
    t.children && t.children.forEach((r) => {
      r.disabled || (this.setStore("nodeMap", r[this.keyField], p((i) => {
        i.checked = n;
      })), this.setCheckedForwardDown(r, n));
    });
  };
  getNodeChecked = (t) => {
    const n = this._getNode(t);
    if (!n.children || n.children.length === 0)
      return n.checked;
    {
      let r = !1, i = 0, l = 0;
      return n.children.forEach((a) => {
        a.checked === !0 && i++, a.checked === "indeterminate" && l++;
      }), i === n.children.length ? r = !0 : i > 0 && (r = "indeterminate"), !r && l > 0 && (r = "indeterminate"), r;
    }
  };
  setCheckedForwardUp = (t) => {
    const n = t._parent;
    if (n) {
      const r = this.getNodeChecked(n);
      this.setStore("nodeMap", n[this.keyField], p((i) => {
        i.checked = r;
      })), this.setCheckedForwardUp(n);
    }
  };
  rename = (t, n) => {
    const r = this._getNode(t);
    this.setStore("nodeMap", r[this.keyField], this.titleField, n);
  };
  expandNode = (t, n) => {
    const r = this._getNode(t);
    this.setStore("nodeMap", r[this.keyField], "expand", n), n ? this.props.onNodeExpand?.(r) : this.props.onNodeCollapse?.(r), this.setRootFlatNodes();
  };
  checkAll = () => {
    this.setStore("nodeMap", p((n) => {
      for (const r in n)
        n[r].checked = !0;
    }));
    const t = this.getCheckedKeys(this.mode);
    this.setValue(t), this.props.onChange && this.props.onChange(t);
  };
  uncheckAll = () => {
    this.setStore("nodeMap", p((n) => {
      for (const r in n)
        n[r].checked = !1;
    }));
    const t = this.getCheckedKeys(this.mode);
    this.setValue(t), this.props.onChange && this.props.onChange(t);
  };
  loadData = async (t, n) => {
    this.setStore("nodeMap", t[this.keyField], p((r) => r.__loading = !0));
    try {
      const r = await n(t);
      r.length > 0 && r.forEach((i) => {
        this.append(t[this.keyField], i);
      });
    } catch {
    } finally {
      this.setStore("nodeMap", t[this.keyField], p((r) => r.__loading = !1));
    }
    this.setStore("nodeMap", t[this.keyField], p((r) => r.loading = !1));
  };
  /**
   *
   * @param mode
   * @returns
   */
  getChecked = (t = "HALF") => {
    if (this.checkRelation === "related") {
      if (t === "FULL")
        return this.getFullChecked();
      if (t === "CHILD")
        return this.getChildChecked();
      if (t === "HALF")
        return this.getHalfChecked();
      if (t === "SHALLOW")
        return this.getShallowChecked();
    } else
      return this.getFullChecked();
    return [];
  };
  /**
   * 获取所有选中的节点包含父节点和子节点
   * @returns
   */
  getFullChecked = () => this.flatData.filter((t) => t.checked === !0);
  /**
   * 选中的子节点
   * @returns
   */
  getChildChecked = () => this.flatData.filter((t) => t.checked === !0 && (!t.children || t.children.length === 0));
  /**
   * 返回全部选中子节点和部分选中的父节点
   * @returns
   */
  getHalfChecked = () => this.flatData.filter((t) => t.checked === !0 || t.checked === "indeterminate");
  /**
   * 如果父节点下所有子节点全部选中，只返回父节点
   * @returns
   */
  getShallowChecked = () => {
    const t = [];
    return this.flatData.forEach((n) => {
      n.checked === !0 && ((() => {
        const i = n._parent;
        return i ? i.checked === !0 : !1;
      })() || t.push(n));
    }), t;
  };
  /**
   * 选中的节点标识
   * @param mode
   * @returns
   */
  getCheckedKeys = (t = "HALF") => this.getChecked(t).map((r) => r[this.keyField]);
  setNodeDragging = (t, n) => {
    const r = this._getNode(t);
    r && this.setStore("nodeMap", r[this.keyField], p((i) => {
      i._dragging = n;
    }));
  };
  clearChecked = () => {
    this.flatData.forEach((t) => {
      this.setStore("nodeMap", t[this.keyField], "checked", !1);
    });
  };
  setCheckedByMod = (t) => {
    this.clearChecked(), this.checkRelation === "related" ? (this.mode === "FULL" && this.setCheckedByFull(t), this.mode === "HALF" && this.setCheckedByHalf(t), this.mode === "CHILD" && this.setCheckedByChild(t), this.mode === "SHALLOW" && this.setCheckedByShallow(t)) : this.setCheckedByFull(t);
  };
  setCheckedByFull = (t) => {
    t.forEach((n) => {
      this.setStore("nodeMap", n, p((r) => {
        r.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(r);
      }));
    });
  };
  setCheckedByHalf = (t) => {
    t.forEach((n) => {
      const r = this._getNode(n);
      (!r.children || r.children.length === 0) && this.setStore("nodeMap", n, p((i) => {
        i.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(i);
      }));
    });
  };
  setCheckedByChild = (t) => {
    t.forEach((n) => {
      const r = this._getNode(n);
      (!r.children || r.children.length === 0) && this.setStore("nodeMap", n, p((i) => {
        i.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(i);
      }));
    });
  };
  setCheckedByShallow = (t) => {
    t.forEach((n) => {
      this.setStore("nodeMap", n, p((r) => {
        r.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(r), this.checkRelation === "related" && this.setCheckedForwardDown(r, !0);
      }));
    });
  };
}
var Tr = /* @__PURE__ */ x("<div class=cm-tree>"), Pr = /* @__PURE__ */ x("<div class=cm-tree-empty>"), it = /* @__PURE__ */ ((e) => (e.before = "before", e.body = "body", e.after = "after", e))(it || {});
const Ti = Ee({}), gu = () => Se(Ti);
function mu(e) {
  let t;
  const [n, r] = K(!1), [i, l] = K(0), [a, s] = K(0), c = e.emptyText ?? "暂无数据", d = new fu(e), o = d.getStore();
  Q(() => {
    d.init(e.data);
  });
  const h = (f, v) => {
    d.checkNode(f, v), e.onNodeCheck && e.onNodeCheck(f, v);
  }, g = async (f) => {
    (!e.beforeExpand || await e.beforeExpand(f, !f.expand)) && (f.loading && e.loadData && await d.loadData(f, e.loadData), d.expandNode(f, !f.expand));
  };
  e.ref && e.ref({
    prepend: d.prepend,
    append: d.append,
    insertBefore: d.insertBefore,
    insertAfter: d.insertAfter,
    getNode: d.getNode,
    remove: d.remove,
    filter: d.filter,
    expandAll: d.expandAll,
    collapseAll: d.collapseAll,
    expandNode: async (f, v) => {
      const y = d._getNode(f);
      y && y.expand !== v && g(y);
    },
    scrollTo: (f, v = "top") => {
      const y = d.getNodeIndexInShow(f), C = 22;
      let _ = y * C;
      v === "center" && (_ = _ - t.getScrollElement().getBoundingClientRect().height / 2 + C / 2), v === "bottom" && (_ = _ - t.getScrollElement().getBoundingClientRect().height + C), t.getScrollElement().scrollTo({
        top: _,
        behavior: "smooth"
      });
    },
    rename: d.rename,
    checkNode: h,
    checkAll: d.checkAll,
    uncheckAll: d.uncheckAll,
    loadData: (f, v) => {
      const y = d._getNode(f);
      y && d.loadData(y, v);
    },
    selectNode: d.selectNode,
    getChecked: d.getChecked,
    getCheckedKeys: d.getCheckedKeys
  });
  const $ = async (f, v, y) => {
    if (f.dataTransfer)
      try {
        const C = d._getNode(v), _ = f.dataTransfer.getData("node"), L = d._getNode(_);
        if (e.beforeDropMethod ? await e.beforeDropMethod(C, L, y) : !0) {
          if (v === _)
            return;
          y === "before" ? d.insertBefore(v, _) : y === "body" || C.expand ? d.prepend(v, _) : y === "after" && d.insertAfter(v, _), e.onNodeDrop?.(f, C, L, y);
        }
      } catch (C) {
        throw new Error(C);
      }
  }, w = () => be(e, {});
  return u(Ti.Provider, {
    get value() {
      return {
        onOpenClose: g,
        onNodeSelect: d.selectNode,
        store: d,
        draggable: e.draggable,
        checkable: e.checkable || !1,
        onDrop: $,
        directory: e.directory,
        onContextMenu: e.onContextMenu,
        contextMenu: e.contextMenu,
        onNodeCheck: h,
        onDragStart: e.onNodeDragStart,
        onDragEnter: e.onNodeDragEnter,
        onDragLeave: e.onNodeDragLeave,
        onDragOver: e.onNodeDragOver,
        selectedClass: e.selectedClass,
        dragHoverClass: e.dragHoverClass,
        draggingClass: e.draggingClass,
        customIcon: e.customIcon,
        arrowIcon: e.arrowIcon
      };
    },
    get children() {
      return u(V, {
        get when() {
          return e.contextMenu;
        },
        get fallback() {
          return (() => {
            var f = Tr();
            return m(f, u(V, {
              get when() {
                return e.data && e.data.length;
              },
              get fallback() {
                return (() => {
                  var v = Pr();
                  return m(v, c), v;
                })();
              },
              get children() {
                return u(Pt, {
                  ref(v) {
                    var y = t;
                    typeof y == "function" ? y(v) : t = v;
                  },
                  get items() {
                    return o.nodeList;
                  },
                  itemEstimatedSize: 22,
                  itemComponent: {
                    component: Dr,
                    props: {}
                  }
                });
              }
            })), B((v) => W(f, w(), v)), f;
          })();
        },
        get children() {
          return u(V, {
            get when() {
              return e.data && e.data.length;
            },
            get fallback() {
              return (() => {
                var f = Pr();
                return m(f, c), f;
              })();
            },
            get children() {
              return u(Ae, {
                visible: [n, r],
                transfer: !0,
                trigger: "contextMenu",
                get position() {
                  return {
                    x: i(),
                    y: a()
                  };
                },
                onMouseClick: (f) => {
                  l(f.pageX), s(f.pageY + 5);
                },
                handler: ".cm-tree-text",
                align: "bottomLeft",
                get menu() {
                  return e.contextMenu;
                },
                get onSelect() {
                  return e.onSelectMenu;
                },
                get children() {
                  var f = Tr();
                  return m(f, u(Pt, {
                    onScroll: () => r(!1),
                    ref(v) {
                      var y = t;
                      typeof y == "function" ? y(v) : t = v;
                    },
                    get items() {
                      return o.nodeList;
                    },
                    itemEstimatedSize: 22,
                    itemComponent: {
                      component: Dr,
                      props: {}
                    }
                  })), B((v) => W(f, w(), v)), f;
                }
              });
            }
          });
        }
      });
    }
  });
}
const Dr = (e) => u(hu, {
  get data() {
    return e.item;
  },
  ref(t) {
    var n = e.ref;
    typeof n == "function" ? n(t) : e.ref = t;
  }
});
var vu = /* @__PURE__ */ x("<div tabindex=1>"), yu = /* @__PURE__ */ x("<div class=cm-tree-select-wrap>");
function pm(e) {
  const [t, n] = Fe(e, e.multi ? [] : ""), [r, i] = K(""), l = e.align ?? "bottomLeft";
  let a;
  const s = e.mode ?? Fi.HALF;
  e.checkRelation;
  const c = () => U(e, "cm-tree-select", {
    "cm-tree-select-disabled": e.disabled,
    [`cm-tree-select-${e.size}`]: e.size
  }), d = (w) => {
    e.multi || e.onChange && e.onChange(w.id);
  }, o = (w) => {
    n(w), e.onChange && e.onChange($());
  }, h = () => {
    const w = e.multi ? [] : "";
    n(w), e.onChange && e.onChange(w);
  }, g = (w, f) => {
    const v = t();
    v.splice(v.indexOf(w.id), 1), n([...v]);
  }, $ = () => a?.getCheckedKeys(s) || [];
  return Q(() => {
    const w = t();
    e.multi && (w.join(","), $().join(","));
  }), je(() => {
    let w = t();
    if (e.data, e.multi) {
      if (typeof w == "string") {
        w = w.split(","), n(w);
        return;
      }
      setTimeout(() => {
        const f = a?.getChecked(s).map((v) => ({
          id: v[e.keyField || "id"],
          title: v[e.titleField || "title"]
        })) || [];
        i(f);
      });
    } else
      setTimeout(() => {
        const f = a?.getNode(w);
        i(f ? f[e.titleField || "title"] : "");
      });
  }), e.ref && e.ref({
    ...a
  }), (() => {
    var w = vu();
    return m(w, u(Ae, {
      get transfer() {
        return e.transfer;
      },
      fixWidth: !0,
      align: l,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      get menu() {
        return (() => {
          var f = yu();
          return m(f, u(mu, {
            get data() {
              return e.data;
            },
            get checkable() {
              return e.multi;
            },
            onNodeSelect: d,
            onChange: o,
            ref(v) {
              var y = a;
              typeof y == "function" ? y(v) : a = v;
            },
            get value() {
              return e.multi ? [t, n] : [];
            },
            get selected() {
              return e.multi ? "" : [t, n];
            },
            get checkRelation() {
              return e.checkRelation;
            }
          })), f;
        })();
      },
      get children() {
        return u(wt, {
          get text() {
            return r();
          },
          get multi() {
            return e.multi;
          },
          get showMax() {
            return e.showMax;
          },
          get disabled() {
            return e.disabled;
          },
          get showMore() {
            return e.showMore;
          },
          get valueClosable() {
            return e.valueClosable;
          },
          get clearable() {
            return e.clearable;
          },
          onClear: h,
          get prepend() {
            return e.prepend;
          },
          get size() {
            return e.size;
          },
          get icon() {
            return u(tt, {});
          },
          onClose: g
        });
      }
    })), B((f) => {
      var v = c(), y = e.style;
      return f.e = j(w, v, f.e), f.t = W(w, y, f.t), f;
    }, {
      e: void 0,
      t: void 0
    }), w;
  })();
}
function $u(e, t, n) {
  const r = `fail to post ${e} ${n.status}'`, i = new Error(r);
  return i.status = n.status, i.method = "post", i.url = e, i;
}
function Ar(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Rr(e) {
  if (typeof XMLHttpRequest > "u")
    return;
  const t = new XMLHttpRequest(), n = e.action;
  t.upload && (t.upload.onprogress = function(a) {
    a.total > 0 && (a.percent = a.loaded / a.total * 100), e.onProgress(a);
  });
  const r = new FormData();
  e.data && Object.keys(e.data).map((l) => {
    r.append(l, e.data[l]);
  }), r.append(e.filename, e.file), t.onerror = function(a) {
    e.onError(a);
  }, t.onload = function() {
    if (t.status < 200 || t.status >= 300)
      return e.onError($u(n, e, t), Ar(t));
    e.onSuccess(Ar(t));
  }, t.open("post", n, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const i = e.headers || {};
  for (const l in i)
    Object.prototype.hasOwnProperty.call(i, l) && i[l] !== null && t.setRequestHeader(l, i[l]);
  t.send(r);
}
var wu = /* @__PURE__ */ x("<div class=cm-upload-list-title>"), bu = /* @__PURE__ */ x("<ul class=cm-upload-list><div class=cm-upload-files>"), xu = /* @__PURE__ */ x('<img class=cm-upload-file-preview-img alt="">'), Cu = /* @__PURE__ */ x("<div class=cm-upload-error>"), ku = /* @__PURE__ */ x("<li class=cm-upload-file-card><div class=cm-upload-file-preview></div><div class=cm-upload-file-card-body><div class=cm-upload-file-card-info><span class=cm-upload-file-card-info-name></span><span></span></div></div><div class=cm-upload-file-control>");
function _u(e) {
  const t = (r) => {
    const i = r.name.split(".").pop().toLocaleLowerCase() || "";
    let l = u(il, {
      size: 20
    });
    return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 && (l = u(ll, {
      size: 20
    })), ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 && (l = u(al, {
      size: 20
    })), ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 && (l = u(sl, {
      size: 20
    })), l;
  }, n = (r) => {
    if (r < 1024)
      return r + "B";
    if (r < 1048576)
      return Math.round(r / 1024 * 10) / 10 + "KB";
    if (r < 1073741824)
      return Math.round(r / 1024 / 1024 * 10) / 10 + "MB";
    if (r < 1099511627776)
      return Math.round(r / 1024 / 1024 / 1024 * 10) / 10 + "GB";
  };
  return (() => {
    var r = bu(), i = r.firstChild;
    return m(r, u(V, {
      get when() {
        return e.files && e.files.length;
      },
      get children() {
        var l = wu();
        return m(l, u(qe, {
          type: "secondary",
          children: "已上传文件"
        }), null), m(l, u(qe, {
          type: "primary",
          class: "cm-upload-clear",
          get onClick() {
            return e.onClear;
          },
          children: "清空"
        }), null), l;
      }
    }), i), m(i, u(le, {
      get each() {
        return e.files;
      },
      children: (l) => (() => {
        var a = ku(), s = a.firstChild, c = s.nextSibling, d = c.firstChild, o = d.firstChild, h = o.nextSibling, g = c.nextSibling;
        return m(s, u(V, {
          get when() {
            return l.url;
          },
          get fallback() {
            return t(l);
          },
          get children() {
            var $ = xu();
            return $.$$click = () => {
              e.onPreview && e.onPreview(l);
            }, B(() => ne($, "src", l.url)), $;
          }
        })), m(o, () => l.name), m(h, () => n(l.size)), m(c, u(V, {
          get when() {
            return l.showProgress && l.percentage !== 100;
          },
          get children() {
            return u(Ci, {
              strokeWidth: 4,
              get value() {
                return l.percentage;
              },
              hidePercent: !0
            });
          }
        }), null), m(c, u(V, {
          get when() {
            return l.status === "fail";
          },
          get children() {
            var $ = Cu();
            return m($, u(rl, {
              size: 12
            }), null), m($, u(qe, {
              type: "error",
              size: "small",
              class: "cm-upload-error-text",
              children: "上传失败"
            }), null), m($, u(qe, {
              type: "primary",
              class: "cm-upload-retry",
              size: "small",
              onClick: () => {
                e.onRetry && e.onRetry(l);
              },
              children: "重试"
            }), null), $;
          }
        }), null), m(g, u(Ne, {
          size: "small",
          theme: "borderless",
          get icon() {
            return u(ze, {});
          },
          onClick: () => {
            e.onRemove && e.onRemove(l);
          }
        })), B(() => ne(o, "title", l.name)), a;
      })()
    })), r;
  })();
}
ae(["click"]);
var Lu = /* @__PURE__ */ x('<ul class="cm-upload-list cm-upload-picture-list"><li class=cm-upload-picture-add>'), Su = /* @__PURE__ */ x('<li class=cm-upload-picture-card><img class=cm-upload-picture-img alt=""><div class=cm-upload-picture-remove></div><div class=cm-upload-picture-preview>');
function Mu(e) {
  return (() => {
    var t = Lu(), n = t.firstChild;
    return m(t, u(le, {
      get each() {
        return e.files;
      },
      children: (r) => (() => {
        var i = Su(), l = i.firstChild, a = l.nextSibling, s = a.nextSibling;
        return a.$$click = () => {
          e.onRemove && e.onRemove(r);
        }, m(a, u(ze, {})), s.$$click = () => {
          e.onPreview && e.onPreview(r);
        }, m(s, u(Jr, {
          size: 20
        })), B(() => ne(l, "src", r.url)), i;
      })()
    }), n), Me(n, "click", e.onClick, !0), m(n, () => e.children), t;
  })();
}
ae(["click"]);
var Eu = /* @__PURE__ */ x("<div class=cm-upload-out>"), Fu = /* @__PURE__ */ x("<div><input class=cm-upload-input type=file>");
function ev(e) {
  const [t, n] = K(!1), [r, i] = K(!1), l = e.format ?? [], a = [], s = e.type ?? "select", [c, d] = we({
    fileList: a,
    previewUrl: ""
  });
  let o = {};
  const h = e.name ?? "file", g = () => U(e, "cm-upload", {
    "cm-upload-select": s === "select",
    "cm-upload-drag": s === "drag",
    "cm-upload-dragOver": s === "drag" && t()
  });
  Q(() => {
    if (e.defaultFileList) {
      const I = e.defaultFileList.map((A) => (A.uid || (A.uid = Le()), A));
      d("fileList", I);
    }
  });
  const $ = (I) => {
    const A = I.target.files;
    A && (w(A), T.value = null);
  }, w = (I) => {
    let A = Array.prototype.slice.call(I);
    e.multiple || (A = A.slice(0, 1)), A.length !== 0 && A.forEach((z) => {
      f(z);
    });
  }, f = async (I) => {
    if (!e.beforeUpload)
      return v(I);
    const A = e.beforeUpload(I);
    typeof A == "object" && A.then ? A.then((z) => {
      Object.prototype.toString.call(z) === "[object File]" ? v(z) : v(I);
    }, () => {
    }) : A !== !1 && v(I);
  }, v = (I) => {
    if (l.length) {
      const A = I.name.split(".").pop().toLocaleLowerCase();
      if (!l.some((H) => H.toLocaleLowerCase() === A))
        return e.onFormatError && e.onFormatError(I, a), !1;
    }
    if (e.maxSize && I.size > e.maxSize * 1024)
      return e.onExceededSize && e.onExceededSize(I, a), !1;
    y(I), e.customRequest ? e.customRequest({
      file: I,
      onProgress: (A) => {
        _(A, I);
      },
      onSuccess: (A) => {
        L(A, I);
      },
      onError: (A, z) => {
        F(A, z, I);
      }
    }) : Rr({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: I,
      data: e.data,
      filename: h,
      action: e.action,
      onProgress: (A) => {
        _(A, I);
      },
      onSuccess: (A) => {
        L(A, I);
      },
      onError: (A, z) => {
        F(A, z, I);
      }
    });
  }, y = (I) => {
    I.uid = Le(), o[I.uid] = I;
    const A = {
      status: "uploading",
      name: I.name,
      size: I.size,
      percentage: 0,
      uid: I.uid,
      showProgress: !0
    };
    d("fileList", [...c.fileList, A]);
  }, C = (I) => {
    const A = c.fileList;
    let z;
    return A.every((H) => (z = I.uid === H.uid ? H : null, !z)), z;
  }, _ = (I, A) => {
    const z = C(A);
    e.onProgress && e.onProgress(I, z, c.fileList), d("fileList", (H) => H.uid === A.uid, "percentage", I.percent || 0);
  }, L = (I, A) => {
    const z = C(A);
    z && (d("fileList", (H) => H.uid === A.uid, p((H) => {
      H.status = "finished", H.response = I, H.url = e.getFileUrl && e.getFileUrl(I, H);
    })), e.onSuccess && e.onSuccess(I, z, c.fileList), setTimeout(() => {
      d("fileList", (H) => H.uid === A.uid, p((H) => {
        H.showProgress = !1;
      }));
    }, 1e3));
  }, F = (I, A, z) => {
    C(z), d("fileList", (H) => H.uid === z.uid, "status", "fail"), e.onError && e.onError(I, A, z);
  }, N = (I) => {
    d("fileList", p((A) => {
      A.splice(A.indexOf(I), 1);
    })), delete o[I.uid], e.onRemove && e.onRemove(I, c.fileList);
  }, P = (I) => {
    I.status === "finished" && (d("previewUrl", I.url), i(!0), e.onPreview && e.onPreview(I));
  }, D = () => {
    const I = ti(c.fileList);
    o = {}, d("fileList", []), e.onClear && e.onClear(I);
  }, E = () => {
    e.disabled || T.click();
  }, b = (I) => {
    const A = o[I.uid];
    A && Rr({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: A,
      data: e.data,
      filename: h,
      action: e.action,
      onProgress: (z) => {
        _(z, A);
      },
      onSuccess: (z) => {
        L(z, A);
      },
      onError: (z, H) => {
        F(z, H, A);
      }
    });
  }, k = (I) => {
    I.preventDefault && I.preventDefault(), n(!1), !e.disabled && w(I.dataTransfer.files);
  }, M = (I) => {
    e.disabled || e.paste && w(I.clipboardData.files);
  }, S = (I) => {
    I.preventDefault && I.preventDefault(), n(!0);
  }, O = (I) => {
    I.preventDefault && I.preventDefault(), n(!1);
  }, R = () => c.fileList.map((I) => ({
    ...I
  }));
  let T;
  return e.ref && e.ref({
    clearFiles: () => {
      o = {}, d("fileList", []);
    },
    getFileList: R
  }), (() => {
    var I = Fu(), A = I.firstChild;
    A.addEventListener("change", $);
    var z = T;
    return typeof z == "function" ? Z(z, A) : T = A, m(I, u(V, {
      get when() {
        return e.listType === "picture";
      },
      get children() {
        return u(Mu, {
          get files() {
            return c.fileList;
          },
          onRemove: N,
          onPreview: P,
          onClick: E,
          get children() {
            return e.children;
          }
        });
      }
    }), null), m(I, u(V, {
      get when() {
        return e.listType !== "picture";
      },
      get children() {
        return [(() => {
          var H = Eu();
          return H.addEventListener("dragleave", O), H.addEventListener("dragover", S), H.addEventListener("paste", M), H.addEventListener("drop", k), H.$$click = E, m(H, () => e.children), H;
        })(), u(_u, {
          get files() {
            return c.fileList;
          },
          onRemove: N,
          onPreview: P,
          onClear: D,
          onRetry: b
        })];
      }
    }), null), m(I, u($i, {
      get previewList() {
        return [c.previewUrl];
      },
      visible: [r, i]
    }), null), B((H) => {
      var Y = g(), q = e.style, G = e.multiple, X = e.webkitdirectory, J = e.accept;
      return H.e = j(I, Y, H.e), H.t = W(I, q, H.t), G !== H.a && (A.multiple = H.a = G), X !== H.o && ne(A, "webkitdirectory", H.o = X), J !== H.i && ne(A, "accept", H.i = J), H;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0
    }), I;
  })();
}
ae(["click"]);
var Ir = /* @__PURE__ */ x("<div>"), Tu = /* @__PURE__ */ x("<div><div class=cm-index-list-list></div><div class=cm-index-list-nav>"), Pu = /* @__PURE__ */ x("<dl><dt>"), Du = /* @__PURE__ */ x("<dd>");
function tv(e) {
  const t = () => e.promote ?? !0, [n, r] = De(e, "value", []), [i, l] = K(""), [a, s] = K(!1), [c, d] = K(""), [o, h] = we({
    list: [],
    listMap: {}
  });
  let g = {}, $;
  const w = {};
  dt(() => {
    const D = [];
    g = {};
    const E = {};
    e.data.forEach((b) => {
      (b.id === void 0 || b.id === null) && (b.id = Le());
      const k = {
        id: b.id
      };
      g[b.id] = b, E[b.id] = k, D.push(k), b.children && (k.children = [], b.children.forEach((M) => {
        (M.id === void 0 || M.id === null) && (M.id = Le()), g[M.id] = M;
        const S = {
          id: M.id
        };
        E[M.id] = S, k.children.push(S);
      }));
    }), h({
      list: D,
      listMap: E
    });
  });
  const f = () => U(e, "cm-index-list", {
    "cm-index-list-border": e.border
  }), v = (D) => {
    if (!e.selectable)
      return;
    const E = n(), b = D.id;
    if (D.active) {
      const k = E.indexOf(b);
      E.splice(k, 1), r(E);
    } else
      E.push(b), r([...E]);
    e.onChange && e.onChange(n()), h("listMap", D.id, "active", !D.active);
  };
  let y = null;
  const C = (D, E, b) => {
    b.preventDefault && b.preventDefault(), b.stopPropagation && b.stopPropagation();
    const k = document.querySelector(D);
    if (k) {
      t() && (d(E), s(!0), y && clearTimeout(y), y = setTimeout(() => {
        _();
      }, 1e3));
      const M = k.getBoundingClientRect().top, S = $.getBoundingClientRect().top, O = M - S;
      $.scrollTo({
        top: $.scrollTop + O,
        behavior: "smooth"
      });
    }
  }, _ = () => {
    s(!1);
  }, L = () => {
    const D = $.scrollTop, E = F(D);
    l(E);
  }, F = (D) => {
    let E = "", b = Number.MAX_VALUE;
    for (const k in w) {
      const M = Math.abs(w[k] - D);
      b > M && (b = M, E = k);
    }
    return E;
  }, N = (D, E) => {
    queueMicrotask(() => {
      w[E] = D.offsetTop;
    });
  }, P = () => ({
    "cm-index-list-promote": !0,
    "cm-index-list-promote-show": a()
  });
  return (() => {
    var D = Tu(), E = D.firstChild, b = E.nextSibling;
    E.addEventListener("scroll", L);
    var k = $;
    return typeof k == "function" ? Z(k, E) : $ = E, m(E, u(le, {
      get each() {
        return o.list;
      },
      children: (M) => {
        const S = g[M.id];
        return (() => {
          var O = Pu(), R = O.firstChild;
          return Z((T) => {
            N(T, M.id);
          }, O), m(R, () => S.name), m(O, u(le, {
            get each() {
              return M.children;
            },
            children: (T) => {
              const I = g[T.id];
              return (() => {
                var A = Du();
                return Me(A, "click", v.bind(null, T), !0), m(A, (() => {
                  var z = ee(() => !!e.renderItem);
                  return () => z() ? e.renderItem(I, T.active) : I.name;
                })()), B(() => pe(A, T.active ? "active" : "")), A;
              })();
            }
          }), null), B(() => ne(O, "id", `cm_index_list_${M.id}`)), O;
        })();
      }
    })), m(b, u(le, {
      get each() {
        return o.list;
      },
      children: (M) => {
        const S = g[M.id], O = () => i() === M.id, R = () => ({
          "cm-index-list-nav-item": !0,
          active: O()
        });
        return (() => {
          var T = Ir();
          return Me(T, "click", C.bind(null, `#cm_index_list_${M.id}`, S.id), !0), m(T, () => S.id), B((I) => j(T, R(), I)), T;
        })();
      }
    })), m(D, u(V, {
      get when() {
        return t();
      },
      get children() {
        var M = Ir();
        return m(M, c), B((S) => j(M, P(), S)), M;
      }
    }), null), B((M) => {
      var S = f(), O = e.style;
      return M.e = j(D, S, M.e), M.t = W(D, O, M.t), M;
    }, {
      e: void 0,
      t: void 0
    }), D;
  })();
}
ae(["click"]);
const nv = (e) => e;
var Au = /* @__PURE__ */ x("<div><div class=cm-list-item-main><div class=cm-list-item-meta></div><div class=cm-list-item-content>"), Ru = /* @__PURE__ */ x("<div class=cm-list-item-avatar>"), Iu = /* @__PURE__ */ x("<div class=cm-list-item-body><div class=cm-list-item-title></div><div class=cm-list-item-desc>"), zu = /* @__PURE__ */ x("<ul class=cm-list-item-addon>");
function Nu(e) {
  const t = Yu(), n = t?.signal[0], r = t?.signal[1], i = () => U(e, "cm-list-item", {
    "cm-list-item-active": n && n() === e.id
  }), l = () => {
    t?.selectable && (r && r(e.id), t?.onSelect && t.onSelect(e.data));
  };
  return (() => {
    var a = Au(), s = a.firstChild, c = s.firstChild, d = c.nextSibling;
    return a.$$click = l, m(c, (() => {
      var o = ee(() => !!e.avatar);
      return () => o() ? (() => {
        var h = Ru();
        return m(h, () => e.avatar), h;
      })() : null;
    })(), null), m(c, (() => {
      var o = ee(() => !!(e.title || e.desc));
      return () => o() ? (() => {
        var h = Iu(), g = h.firstChild, $ = g.nextSibling;
        return m(g, () => e.title), m($, () => e.desc), h;
      })() : null;
    })(), null), m(d, () => e.children), m(a, (() => {
      var o = ee(() => !!e.actions);
      return () => o() ? (() => {
        var h = zu();
        return m(h, () => e.actions), h;
      })() : null;
    })(), null), B((o) => {
      var h = i(), g = e.style;
      return o.e = j(a, h, o.e), o.t = W(a, g, o.t), o;
    }, {
      e: void 0,
      t: void 0
    }), a;
  })();
}
ae(["click"]);
var Ou = /* @__PURE__ */ x("<div>"), Bu = /* @__PURE__ */ x("<div class=cm-list-head>"), Vu = /* @__PURE__ */ x("<div class=cm-list-foot>");
const Pi = Ee();
function Hu(e) {
  const t = () => U(e, "cm-list", {
    "cm-list-border": e.border,
    "cm-list-selectable": e.selectable,
    [`cm-list-${e.size}`]: e.size
  }), [n, r] = De(e, "activeKey", "");
  return u(Pi.Provider, {
    get value() {
      return {
        signal: [n, r],
        selectable: e.selectable,
        onSelect: e.onSelect
      };
    },
    get children() {
      var i = Ou();
      return m(i, (() => {
        var l = ee(() => !!e.head);
        return () => l() ? (() => {
          var a = Bu();
          return m(a, () => e.head), a;
        })() : null;
      })(), null), m(i, () => e.children, null), m(i, (() => {
        var l = ee(() => !!e.foot);
        return () => l() ? (() => {
          var a = Vu();
          return m(a, () => e.foot), a;
        })() : null;
      })(), null), B((l) => {
        var a = t(), s = e.style;
        return l.e = j(i, a, l.e), l.t = W(i, s, l.t), l;
      }, {
        e: void 0,
        t: void 0
      }), i;
    }
  });
}
Hu.Item = Nu;
const Yu = () => Se(Pi);
var qu = /* @__PURE__ */ x("<div><div>");
function ju(e) {
  const [t, n] = we({
    show: !1,
    status: "success",
    percent: 0
  }), r = () => U(e, "cm-loading-bar", {
    "cm-loading-bar-show": t.show
  }), i = () => ({
    "cm-loading-bar-inner": !0,
    [`cm-loading-bar-status-${t.status}`]: !!t.status
  }), l = (s) => {
    s.percent !== void 0 && n("percent", s.percent), s.status !== void 0 && n("status", s.status), s.show !== void 0 && n("show", s.show);
  }, a = () => ({
    width: `${t.percent}%`
  });
  return e.ref && e.ref({
    update: l
  }), (() => {
    var s = qu(), c = s.firstChild;
    return B((d) => {
      var o = r(), h = i(), g = a();
      return d.e = j(s, o, d.e), d.t = j(c, h, d.t), d.a = W(c, g, d.a), d;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), s;
  })();
}
const Wu = 800;
let Et, Wn;
function Cn() {
  Et && (clearInterval(Et), Et = null);
}
function zr() {
  setTimeout(() => {
    ht({
      show: !1
    }), setTimeout(() => {
      ht({
        percent: 0
      });
    }, 200);
  }, Wu);
}
function ht(e) {
  Wn.update(e);
}
function Uu() {
  const e = nt("cm-loading-bar-portal", "cm-loading-bar-portal");
  return e && an(() => u(ju, {
    ref(t) {
      var n = Wn;
      typeof n == "function" ? n(t) : Wn = t;
    }
  }), e), {
    start() {
      if (Et)
        return;
      let t = 0;
      ht({
        percent: t,
        status: "success",
        show: !0
      }), Et = setInterval(() => {
        t += Math.floor(Math.random() * 3 + 1), t > 95 && Cn(), ht({
          percent: t,
          status: "success",
          show: !0
        });
      }, 200);
    },
    finish() {
      Cn(), ht({
        percent: 100,
        status: "success",
        show: !0
      }), zr();
    },
    error() {
      Cn(), ht({
        percent: 100,
        status: "error",
        show: !0
      }), zr();
    }
  };
}
const rv = Uu(), Un = Symbol("store-raw"), ft = Symbol("store-node"), Qe = Symbol("store-has"), Di = Symbol("store-self"), Xn = Symbol("store-setCallback"), Kn = Symbol("store-parent");
function Ai(e) {
  let t;
  return e != null && typeof e == "object" && (e[et] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function Dt(e, t = /* @__PURE__ */ new Set()) {
  let n, r, i, l;
  if (n = e != null && e[Un])
    return n;
  if (!Ai(e) || t.has(e))
    return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let a = 0, s = e.length; a < s; a++)
      i = e[a], (r = Dt(i, t)) !== i && (e[a] = r);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const a = Object.keys(e), s = Object.getOwnPropertyDescriptors(e);
    for (let c = 0, d = a.length; c < d; c++)
      l = a[c], !s[l].get && (i = e[l], (r = Dt(i, t)) !== i && (e[l] = r));
  }
  return e;
}
function nn(e, t) {
  let n = e[t];
  return n || Object.defineProperty(e, t, {
    value: n = /* @__PURE__ */ Object.create(null)
  }), n;
}
function At(e, t, n) {
  if (e[t])
    return e[t];
  const [r, i] = K(n, {
    equals: !1,
    internal: !0
  });
  return r.$ = i, e[t] = r;
}
function Ri(e) {
  Mn() && At(nn(e, ft), Di)();
}
function Xu(e) {
  return Ri(e), Reflect.ownKeys(e);
}
function Nr(e, t, n, r = !1) {
  if (!r && e[t] === n)
    return;
  const i = e[t], l = e.length;
  n === void 0 ? (delete e[t], e[Qe] && e[Qe][t] && i !== void 0 && e[Qe][t].$()) : (e[t] = n, e[Qe] && e[Qe][t] && i === void 0 && e[Qe][t].$());
  const a = nn(e, ft);
  let s;
  if ((s = At(a, t, i)) && s.$(() => n), Array.isArray(e) && e.length !== l) {
    for (let c = e.length; c < l; c++)
      (s = a[c]) && s.$();
    (s = At(a, "length", l)) && s.$(e.length);
  }
  (s = a[Di]) && s.$();
}
function Ku(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || n.set || !n.configurable || t === et || t === ft || (delete n.value, delete n.writable, n.get = () => e[et][t], n.set = (r) => e[et][t] = r), n;
}
const Gu = {
  get(e, t, n) {
    if (t === Un)
      return e;
    if (t === et)
      return n;
    if (t === rr)
      return Ri(e), n;
    const r = nn(e, ft), i = r[t];
    let l = i ? i() : e[t];
    if (t === ft || t === Qe || t === "__proto__")
      return l;
    if (!i) {
      const c = Object.getOwnPropertyDescriptor(e, t), d = typeof l == "function";
      if (Mn() && (!d || e.hasOwnProperty(t)) && !(c && c.get))
        l = At(r, t, l)();
      else if (l != null && d && l === Array.prototype[t])
        return (...o) => Re(() => Array.prototype[t].apply(n, o));
    }
    let a = Reflect.get(e, Kn);
    a = a === void 0 ? t : `${a}.${String(t)}`;
    const s = {
      onUpdateField: Reflect.get(e, Xn)
    };
    return Ai(l) ? Ii(l, a, s) : l;
  },
  has(e, t) {
    return t === Un || t === et || t === rr || t === ft || t === Qe || t === "__proto__" ? !0 : (Mn() && At(nn(e, Qe), t)(), t in e);
  },
  set(e, t, n) {
    let r = Reflect.get(e, Kn);
    return r = r === void 0 ? t : `${r}.${String(t)}`, Reflect.get(e, Xn)?.(t, Dt(n), r), Re(() => Nr(e, t, Dt(n))), !0;
  },
  deleteProperty(e, t) {
    return Re(() => Nr(e, t, void 0, !0)), !0;
  },
  ownKeys: Xu,
  getOwnPropertyDescriptor: Ku
};
function Ii(e, t, n) {
  let r = e[et];
  if (!r) {
    Object.defineProperty(e, et, {
      value: r = new Proxy(e, Gu)
    }), Object.defineProperty(e, Kn, {
      value: t
    }), Object.defineProperty(e, Xn, {
      value: n?.onUpdateField
    });
    const i = Object.keys(e), l = Object.getOwnPropertyDescriptors(e), a = Object.getPrototypeOf(e), s = a !== null && e !== null && typeof e == "object" && !Array.isArray(e) && a !== Object.prototype;
    if (s) {
      const c = Object.getOwnPropertyDescriptors(a);
      i.push(...Object.keys(c)), Object.assign(l, c);
    }
    for (let c = 0, d = i.length; c < d; c++) {
      const o = i[c];
      if (!(s && o === "constructor")) {
        if (l[o].get) {
          const h = l[o].get.bind(r);
          Object.defineProperty(e, o, {
            get: h,
            configurable: !0
          });
        }
        if (l[o].set) {
          const h = l[o].set;
          Object.defineProperty(e, o, {
            set: ($) => Re(() => h.call(r, $)),
            configurable: !0
          });
        }
      }
    }
  }
  return r;
}
function Zu(e, t) {
  const n = Dt(e || {});
  return Ii(n, void 0, t);
}
function Ju({
  data: e,
  validation: t = {},
  message: n = {}
}) {
  const r = /* @__PURE__ */ new Map(), i = {}, l = Object.assign({}, e), a = /* @__PURE__ */ new Map(), s = async () => {
    const D = r.keys();
    let E = !0;
    for (const b of D) {
      const k = r.get(b), M = d(b);
      await k?.(M) || (E = !1);
    }
    return E;
  }, c = (D, E) => E.includes(".") ? E.split(".").reduce((k, M) => k[M], D) : D[E], d = (D) => c(P, D), o = async (D) => {
    const E = r.get(D), b = d(D);
    return !(E && !await E(b));
  }, h = function(D) {
    return t ? t[D] : {};
  }, g = function(D) {
    return n ? n[D] : {};
  }, $ = function() {
    const D = Object.keys(e), E = {};
    return D.forEach((b) => {
      E[b] = P[b];
    }), E;
  }, w = function(D, E) {
    for (const b in e)
      E ? P[b] = D[b] : _(b, D[b]);
  }, f = (D, E) => {
    r.set(D, E);
  }, v = (D, E) => {
    i[D] = E;
  }, y = (D) => {
    if (D) {
      const E = i[D];
      E && E();
    } else {
      const E = Object.keys(i);
      for (const b of E) {
        const k = i[b];
        k && k();
      }
    }
  }, C = () => {
    w(l), y();
  }, _ = (D, E) => {
    if (a.has(D)) {
      const [b, k] = a.get(D);
      k(E);
    }
  }, P = Zu({
    isValid: s,
    // 别名
    validate: s,
    getFormData: $,
    setFormData: w,
    setCheckValid: f,
    getValidation: h,
    getMessage: g,
    bindController: (D, E, b) => {
      a.set(D, [E, b]);
    },
    unBindController: (D) => {
      a.delete(D), r.delete(D), delete i[D];
    },
    setClearValid: v,
    clearValidates: y,
    resetFieldsValidate: y,
    checkField: o,
    resetFields: C,
    setProxyValue: (D, E) => {
      if (a.has(D))
        if (D.includes(".")) {
          const b = D.split(".");
          let k = P;
          for (let M = 0; M < b.length - 1; M++) {
            const S = b[M];
            if (k[S])
              k = k[S];
            else {
              k = null;
              return;
            }
          }
          k && (k[b[b.length - 1]] = E);
        } else
          P[D] = E;
    },
    getValueByPath: d,
    ...e
  }, {
    onUpdateField(D, E, b) {
      _(b, E);
      const k = r.get(b);
      k && k(E);
    }
  });
  return P;
}
const zi = Ee();
function iv(e) {
  const t = Ju({
    data: e.data || {},
    validation: {},
    message: {}
  }), n = () => U(e, "cm-login"), r = async () => {
    const i = await t.isValid();
    e.onSubmit && e.onSubmit(i, t);
  };
  return u(zi.Provider, {
    value: {
      onSubmit: r,
      form: t
    },
    get children() {
      return u(ps, {
        form: t,
        onBeforeSubmit: r,
        autocomplete: "off",
        get classList() {
          return n();
        },
        get style() {
          return e.style;
        },
        get children() {
          return e.children;
        }
      });
    }
  });
}
const Ni = () => Se(zi);
function lv(e) {
  const t = e.type ?? "primary", n = Ni(), r = () => {
    n?.onSubmit && n?.onSubmit();
  }, i = e.size ?? "large";
  return u(Ne, te(e, {
    size: i,
    type: t,
    onClick: r,
    block: !0,
    children: "登 录"
  }));
}
function av(e) {
  const t = e.name ?? "username", n = e.icon ?? u(yl, {}), r = {
    require: $t().required,
    ...e.rules
  }, i = {
    require: "请输入用户名！",
    ...e.messages
  }, l = e.placeholder ?? "请输入用户名", a = e.size ?? "large";
  return u(Bt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return u(Ve, {
        prepend: n,
        size: a,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function sv(e) {
  const t = e.name ?? "password", n = e.icon ?? u(cl, {}), r = {
    require: $t().required,
    ...e.rules
  }, i = {
    require: "请输入密码！",
    ...e.messages
  }, l = e.placeholder ?? "请输入密码", a = e.size ?? "large";
  return u(Bt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return u(Ve, {
        type: "password",
        password: !0,
        prepend: n,
        size: a,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function cv(e) {
  const t = e.name ?? "mobile", n = e.icon ?? u(ol, {}), r = {
    require: $t().required,
    mobile: !0,
    ...e.rules
  }, i = {
    require: "请输入手机号码！",
    mobile: "输入的手机号码不正确！",
    ...e.messages
  }, l = e.placeholder ?? "请输入手机号码", a = e.size ?? "large";
  return u(Bt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return u(Ve, {
        prepend: n,
        size: a,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function ov(e) {
  const t = e.name ?? "email", n = e.icon ?? u(dl, {}), r = {
    require: $t().required,
    email: !0,
    ...e.rules
  }, i = {
    require: "请输入邮箱！",
    email: "输入的邮箱地址不正确！",
    ...e.messages
  }, l = e.placeholder ?? "请输入邮箱", a = e.size ?? "large";
  return u(Bt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return u(Ve, {
        prepend: n,
        size: a,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
var Qu = /* @__PURE__ */ x("<span class=cm-count-down-prefix>"), pu = /* @__PURE__ */ x("<span class=cm-count-down-suffix>"), eh = /* @__PURE__ */ x("<span><span class=cm-count-down-value>");
function th(e) {
  return `${e}`.padStart(2, "0");
}
function nh(e) {
  let t;
  const n = e.duration ?? 1e3, [r, i] = K(e.value), l = () => {
    let c = r();
    c <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), c = 0);
    const d = th(c), o = e.format ?? "s";
    let h = o;
    return o.match(/s+/) && (h = h.replace(/s+/, d + "")), h;
  }, a = () => {
    t = setInterval(() => {
      i(r() - 1);
    }, n);
  };
  ge(() => {
    a();
  }), he(() => {
    clearInterval(t), t = null;
  });
  const s = () => U(e, "cm-count-down");
  return (() => {
    var c = eh(), d = c.firstChild;
    return m(c, u(V, {
      get when() {
        return e.prefix;
      },
      get children() {
        var o = Qu();
        return m(o, () => e.prefix), o;
      }
    }), d), m(d, l), m(c, u(V, {
      get when() {
        return e.suffix;
      },
      get children() {
        var o = pu();
        return m(o, () => e.suffix), o;
      }
    }), null), B((o) => {
      var h = s(), g = e.style;
      return o.e = j(c, h, o.e), o.t = W(c, g, o.t), o;
    }, {
      e: void 0,
      t: void 0
    }), c;
  })();
}
function dv(e) {
  const [t, n] = K(e.action ?? ""), [r, i] = K(!1), l = e.name ?? "captcha", a = e.icon ?? u(ul, {}), s = {
    require: $t().required,
    ...e.rules
  }, c = {
    require: "请输入验证码！",
    ...e.messages
  }, d = e.placeholder ?? "请输入验证码", o = e.size ?? "large", h = e.countDownNumber ?? 60, g = () => t() ? u(Nn, {
    get src() {
      return t();
    }
  }) : r() ? u(nh, {
    value: h,
    format: "s秒",
    onEnd: () => {
      i(!1);
    }
  }) : "获取验证码", $ = Ni(), w = async () => {
    const f = t();
    if (f) {
      const v = f.split("?"), y = new URLSearchParams(v[1]);
      y.set("_", `${Date.now()}`), n(v[0] + "?" + y.toString());
    } else {
      const v = $?.form;
      if (e.field && v && !await v.checkField(e.field))
        return;
      i(!0), e.onGetCaptcha && e.onGetCaptcha();
    }
  };
  return u(Bt, {
    get label() {
      return e.label;
    },
    name: l,
    rules: s,
    messages: c,
    get children() {
      return u(st, {
        get children() {
          return [u(Ve, {
            prepend: a,
            size: o,
            placeholder: d
          }), u(Ne, {
            theme: "light",
            size: o,
            onClick: w,
            get disabled() {
              return r();
            },
            style: {
              flex: "0 0 120px"
            },
            get children() {
              return g();
            }
          })];
        }
      });
    }
  });
}
var rh = /* @__PURE__ */ x("<li><div class=cm-menu-item-icon>"), ih = /* @__PURE__ */ x("<div class=cm-menu-item-cert>"), lh = /* @__PURE__ */ x("<li><div class=cm-menu-item-icon></div><div class=cm-menu-item-text>"), ah = /* @__PURE__ */ x("<div class=cm-menu-item-text>");
function Gn(e) {
  !e.isSubmenuTitle && !e.name && console.warn("MenuItem need name prop");
  const [t, n] = K(!1), r = er(), i = () => U(e, "cm-menu-item", {
    "cm-menu-item-disabled": e.disabled,
    "cm-menu-item-active": !e.isSubmenuTitle && e.name && r?.store.activeName === e.name
  });
  Q(() => {
    let s = !1;
    if (r && l && !e.isSubmenuTitle) {
      const c = l.parentElement.getAttribute("x-name");
      s = r.store.min && c === "__root";
    }
    n(s), !s && r?.dir === "v" && setTimeout(() => {
      const c = l.parentElement.getAttribute("x-padding"), d = parseInt(c) + 16;
      l.style.paddingLeft = d + "px";
    }, 20);
  });
  let l;
  ge(() => {
    const s = l.parentElement.getAttribute("x-padding"), c = parseInt(s) + 16;
    if (l.style.paddingLeft = r?.dir === "h" ? "16px" : c + "px", !e.isSubmenuTitle) {
      const d = l.parentElement.getAttribute("x-name"), o = {
        name: e.name,
        parent: null,
        children: []
      };
      if (r && e.name)
        if (r.treeMap[e.name] = o, d === "__root")
          r?.tree.push(o);
        else {
          const h = r.treeMap[d];
          o.parent = h, h.children.push(o);
        }
    }
  });
  const a = () => {
    e.isSubmenuTitle && !r.store.min ? e.onSelect && e.onSelect() : r?.onSelect(e.name, e.data);
  };
  return u(V, {
    get when() {
      return t();
    },
    get fallback() {
      return (() => {
        var s = lh(), c = s.firstChild, d = c.nextSibling;
        s.$$click = a;
        var o = l;
        return typeof o == "function" ? Z(o, s) : l = s, m(c, () => e.icon), m(d, () => e.children), m(s, u(V, {
          get when() {
            return e.cert;
          },
          get children() {
            var h = ih();
            return m(h, u(tt, {
              size: 14
            })), h;
          }
        }), null), B((h) => j(s, i(), h)), s;
      })();
    },
    get children() {
      return u(un, {
        align: "right",
        arrow: !0,
        get theme() {
          return r.theme;
        },
        get content() {
          return (() => {
            var s = ah();
            return m(s, () => e.children), s;
          })();
        },
        get children() {
          var s = rh(), c = s.firstChild;
          s.$$click = a;
          var d = l;
          return typeof d == "function" ? Z(d, s) : l = s, m(c, () => e.icon), B((o) => j(s, i(), o)), s;
        }
      });
    }
  });
}
ae(["click"]);
var sh = /* @__PURE__ */ x("<li>"), ch = /* @__PURE__ */ x("<li><ul class=cm-menu-submenu-list>"), oh = /* @__PURE__ */ x("<ul class=cm-menu-submenu-list>");
function uv(e) {
  e.name || console.warn("SubMenu need name prop");
  const [t, n] = K(!1), r = er(), i = () => {
    let o = !1;
    r && r.store.openKeys && e.name && (o = r.store.openKeys[e.name]), s.style.transition = "none", s.style.height = "auto";
    const h = s.offsetHeight;
    return s.style.transition = "", o ? (s.style.height = "0px", setTimeout(() => {
      s.style.height = h + "px";
    }), setTimeout(() => {
      s.style.height = "auto";
    }, 250)) : (s.style.height = h + "px", setTimeout(() => {
      s.style.height = "0px";
    })), o;
  }, l = () => U(e, "cm-menu-submenu", {
    "cm-menu-submenu-open": i()
  });
  let a, s;
  Q(() => {
    let o = !1;
    if (r && a) {
      const h = a.parentElement.getAttribute("x-name");
      o = r.store.min && h === "__root";
    }
    n(o), !o && r?.dir === "v" && setTimeout(() => {
      const h = a.parentElement.getAttribute("x-padding"), g = parseInt(h) + 16;
      a.setAttribute("x-padding", h), s.setAttribute("x-padding", g);
    });
  }), ge(() => {
    const o = a.parentElement.getAttribute("x-padding"), h = parseInt(o) + 16;
    a.setAttribute("x-padding", o), s.setAttribute("x-padding", h);
    const g = a.parentElement.getAttribute("x-name"), $ = {
      name: e.name,
      parent: null,
      children: []
    };
    if (r && e.name)
      if (r.treeMap[e.name] = $, g === "__root")
        r?.tree.push($);
      else {
        const w = r.treeMap[g];
        $.parent = w, w.children.push($);
      }
  });
  const c = () => {
    r?.setOpen(e.name);
  }, d = e.align || (r?.dir === "h" ? "bottom" : "rightTop");
  return u(V, {
    get when() {
      return t() || r?.dir === "h";
    },
    get fallback() {
      return (() => {
        var o = ch(), h = o.firstChild, g = a;
        typeof g == "function" ? Z(g, o) : a = o, m(o, u(Gn, {
          get icon() {
            return e.icon;
          },
          cert: !0,
          isSubmenuTitle: !0,
          onSelect: c,
          get children() {
            return e.title;
          }
        }), h);
        var $ = s;
        return typeof $ == "function" ? Z($, h) : s = h, m(h, () => e.children), B((w) => {
          var f = l(), v = e.name;
          return w.e = j(o, f, w.e), v !== w.t && ne(h, "x-name", w.t = v), w;
        }, {
          e: void 0,
          t: void 0
        }), o;
      })();
    },
    get children() {
      var o = sh(), h = a;
      return typeof h == "function" ? Z(h, o) : a = o, m(o, u(Ae, {
        align: d,
        get theme() {
          return r?.theme;
        },
        revers: !1,
        get menu() {
          return (() => {
            var g = oh(), $ = s;
            return typeof $ == "function" ? Z($, g) : s = g, m(g, () => e.children), B(() => ne(g, "x-name", e.name)), g;
          })();
        },
        get children() {
          return u(Gn, {
            get icon() {
              return e.icon;
            },
            cert: !0,
            isSubmenuTitle: !0,
            onSelect: c,
            get children() {
              return e.title;
            }
          });
        }
      })), B((g) => j(o, l(), g)), o;
    }
  });
}
var dh = /* @__PURE__ */ x("<li><ul class=cm-menu-group-list>");
function hv(e) {
  e.name || console.warn("MenuGroup need name prop");
  const t = () => U(e, "cm-menu-group"), n = er();
  let r, i;
  return ge(() => {
    const l = r.parentElement.getAttribute("x-padding");
    r.setAttribute("x-padding", l), i.setAttribute("x-padding", l);
    const a = r.parentElement.getAttribute("x-name"), s = {
      name: e.name,
      parent: null,
      children: []
    };
    if (n && e.name)
      if (n.treeMap[e.name] = s, a === "__root")
        n?.tree.push(s);
      else {
        const c = n.treeMap[a];
        s.parent = c, c.children.push(s);
      }
  }), Q(() => {
    let l = !1;
    if (n && r) {
      const a = r.parentElement.getAttribute("x-name");
      l = n.store.min && a === "__root";
    }
    !l && n?.dir === "v" && setTimeout(() => {
      const a = r.parentElement.getAttribute("x-padding"), s = parseInt(a) + 16;
      r.setAttribute("x-padding", a), i.setAttribute("x-padding", s);
    });
  }), (() => {
    var l = dh(), a = l.firstChild, s = r;
    typeof s == "function" ? Z(s, l) : r = l, m(l, u(Gn, {
      get icon() {
        return e.icon;
      },
      isSubmenuTitle: !0,
      get children() {
        return e.title;
      }
    }), a);
    var c = i;
    return typeof c == "function" ? Z(c, a) : i = a, m(a, () => e.children), B((d) => {
      var o = t(), h = e.name;
      return d.e = j(l, o, d.e), h !== d.t && ne(a, "x-name", d.t = h), d;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })();
}
var uh = /* @__PURE__ */ x("<ul x-padding=0 x-name=__root x-level=0>");
const Oi = Ee();
function fv(e) {
  const [t, n] = De(e, "activeName", ""), r = () => e.accordion || !1, i = () => e.theme || "light", l = () => e.dir || "v", a = () => U(e, "cm-menu", {
    [`cm-menu-${l()}`]: l(),
    ["cm-menu-min"]: e.min,
    [`cm-menu-${i()}`]: i()
  }), s = [], c = {};
  Q(() => {
    const f = t();
    f && (h("activeName", f), Ie(() => {
      setTimeout(() => {
        d(f);
      });
    }));
  }), Q(() => {
    h("min", e.min);
  });
  const d = (f) => {
    let v = c && c[f] && c[f].parent;
    if (v)
      for (; v; )
        o.openKeys[v.name] || w(v.name), v = v.parent;
    else
      (l() === "h" || o.min) && w(f);
  }, [o, h] = we({
    openKeys: {},
    activeName: e.activeName,
    min: e.min
  }), g = (f, v) => {
    n(f), e.onSelect && e.onSelect(f, v);
  }, $ = (f, v) => {
    f.children && f.children.forEach((y) => {
      o.openKeys[y.name] && (v[y.name] = !0), $(y, v);
    });
  }, w = (f) => {
    r() || l() === "h" ? h("openKeys", p((v) => {
      if (v[f]) {
        delete v[f];
        return;
      }
      let y = c[f];
      const C = {
        [f]: !0
      };
      for (; y.parent; )
        C[y.parent.name] = !0, y = y.parent;
      $(y, C), Object.keys(v).forEach((L) => {
        C[L] || delete v[L];
      }), Object.assign(v, C);
    })) : h("openKeys", p((v) => {
      v[f] ? delete v[f] : v[f] = !0;
    }));
  };
  return u(Oi.Provider, {
    get value() {
      return {
        onSelect: g,
        store: o,
        setOpen: w,
        tree: s,
        treeMap: c,
        theme: i(),
        dir: l()
      };
    },
    get children() {
      var f = uh();
      return m(f, () => e.children), B((v) => j(f, a(), v)), f;
    }
  });
}
const er = () => Se(Oi);
var hh = /* @__PURE__ */ x("<div><div class=cm-message-inner><div class=cm-message-content>"), fh = /* @__PURE__ */ x("<div class=cm-message-close>");
function gh(e) {
  let t = null;
  switch (e) {
    case "info": {
      t = u(gt, {
        class: "cm-message-icon",
        size: 19
      });
      break;
    }
    case "success": {
      t = u(zt, {
        class: "cm-message-icon",
        size: 19
      });
      break;
    }
    case "warning": {
      t = u(It, {
        class: "cm-message-icon",
        size: 19
      });
      break;
    }
    case "error": {
      t = u(Rt, {
        class: "cm-message-icon",
        size: 19
      });
      break;
    }
  }
  return t;
}
function mh(e) {
  const [t, n] = K(!1), r = e.data;
  let i;
  const l = () => U(r, "cm-message", {
    "cm-message-visible": t(),
    [`cm-message-${r.type}`]: r.type,
    "cm-message-background": r.background
  });
  ge(() => {
    setTimeout(() => {
      n(!0);
    });
    let d = r.duration;
    d == null && (d = 4), d && setTimeout(() => {
      a();
    }, d * 1e3);
  });
  const a = () => {
    n(!1);
  }, s = () => {
    t() || (e.onClose(r), r.onClose && r.onClose());
  }, c = () => ({
    ...r.style,
    "z-index": rt()
  });
  return (() => {
    var d = hh(), o = d.firstChild, h = o.firstChild;
    d.addEventListener("transitionend", s);
    var g = i;
    return typeof g == "function" ? Z(g, d) : i = d, m(o, (() => {
      var $ = ee(() => !!r.loading);
      return () => $() ? u(mt, {}) : gh(r.type);
    })(), h), m(h, () => r.content), m(o, (() => {
      var $ = ee(() => !!r.closeable);
      return () => $() ? (() => {
        var w = fh();
        return m(w, u(ze, {
          class: "cm-message-close-icon",
          size: 14,
          onClick: a
        })), w;
      })() : null;
    })(), null), B(($) => {
      var w = l(), f = c();
      return $.e = j(d, w, $.e), $.t = W(d, f, $.t), $;
    }, {
      e: void 0,
      t: void 0
    }), d;
  })();
}
function vh(e) {
  return u(le, {
    get each() {
      return e.data;
    },
    children: (t) => u(mh, {
      data: t,
      get onClose() {
        return e.onClose;
      }
    })
  });
}
function yh() {
  const [e, t] = we({
    list: []
  }), n = nt("cm-message-portal", "cm-messages-wrap"), r = (i) => {
    const l = e.list.filter((a) => a.key !== i.key);
    t("list", () => [...l]);
  };
  return an(() => u(vh, {
    get data() {
      return e.list;
    },
    onClose: r
  }), n), {
    close: (i) => {
      const l = e.list.find((a) => a.key === i);
      r(l), l && l.onClose && l.onClose();
    },
    open: (i, l) => {
      typeof i == "string" && (i = {
        content: i
      }), i.key || (i.key = Le()), i.type = l, t("list", p((a) => {
        a.push(i);
      })), n.style.zIndex = rt();
    },
    info(i) {
      this.open(i, "info");
    },
    success(i) {
      this.open(i, "success");
    },
    warning(i) {
      this.open(i, "warning");
    },
    error(i) {
      this.open(i, "error");
    }
  };
}
const gv = yh();
var Or = /* @__PURE__ */ x("<div>"), $h = /* @__PURE__ */ x("<span class=cm-modal-close>"), wh = /* @__PURE__ */ x("<div><div class=cm-modal-header></div><div class=cm-modal-body>"), bh = /* @__PURE__ */ x("<div tabindex=1>"), xh = /* @__PURE__ */ x("<div class=cm-modal-title>"), Ch = /* @__PURE__ */ x("<div class=cm-modal-left><div class=cm-modal-icon>"), kh = /* @__PURE__ */ x("<div class=cm-modal-right>");
const _h = {
  info: gt,
  success: zt,
  warning: It,
  error: Rt,
  confirm: ni
};
function Lh(e) {
  let t, n, r;
  const [i, l] = De(e, "visible", !1), [a, s] = K(!1), [c, d] = K(i()), [o, h] = K(e.destroyOnClose && !open());
  let g = !1, $ = "";
  const w = e.footerAlign ?? "end", f = e.footerReverse ?? !1, v = e.okButtonType ?? "primary", y = e.cancleButtonType ?? "default", C = () => U(e, "cm-modal"), _ = rt(), L = () => ({
    "cm-modal-wrap": !0,
    // 'cm-modal-visible': visible(),
    "cm-modal-fullscreen": e.fullScreen
  }), F = () => ({
    "cm-modal-mask": !0,
    "cm-modal-mask-visible": i()
  }), N = () => {
    e.onClickClose && e.onClickClose(), P();
  }, P = () => {
    e.onClosed && e.onClosed(), l(!1);
  }, D = () => {
    P(), e.onCancel && e.onCancel();
  }, E = async () => {
    if (e.loading && (a() || s(!0)), e.onOk) {
      const q = await e.onOk?.();
      q === void 0 && !a() && P(), q === !0 && P(), q === !1 && s(!1);
    } else
      a() || P();
  };
  Q(() => {
    if (!c())
      s(!1), g && (document.body.style.overflow = $, g = !1);
    else {
      if (t) {
        const G = t.getBoundingClientRect().height;
        t.children[0].getBoundingClientRect().height > G ? (t.style.overflow = "auto", t.children[0].style.top = 0, $ = window.getComputedStyle(document.body, null).overflow, $ !== "hidden" && (document.body.style.overflow = "hidden", g = !0)) : (t.style.overflow = "none", g = !1), setTimeout(() => {
          t.focus();
        }, 300);
      }
      Y && r && r.reset();
    }
  });
  const b = Nt({
    el: () => t,
    startClass: "cm-modal-visible",
    activeClass: "cm-modal-open",
    enterEndClass: "cm-modal-opened",
    onLeave: () => {
      d(!1), e.destroyOnClose && h(!0);
    },
    onEnter: () => {
      d(!0);
    }
  });
  dt(() => {
    i() ? (e.destroyOnClose && h(!1), b.enter()) : b.leave();
  });
  const k = (q) => {
    H && q.target === n && l(!1);
  }, M = (q) => {
    q.keyCode === 27 && l(!1);
  }, S = "cm-modal-portal", O = e.footer ?? !0, R = e.hasCloseIcon ?? !0, T = Le(), I = e.okText || "确 定", A = e.cancleText || "取 消", z = e.mask ?? !0, H = e.maskClosable ?? !0, Y = e.resetPostion ?? !1;
  return u(ln, {
    get mount() {
      return nt(S, S);
    },
    get children() {
      return [u(V, {
        when: z,
        get children() {
          var q = Or(), G = n;
          return typeof G == "function" ? Z(G, q) : n = q, q.$$click = k, _ - 1 != null ? q.style.setProperty("z-index", _ - 1) : q.style.removeProperty("z-index"), B((X) => j(q, F(), X)), q;
        }
      }), (() => {
        var q = bh();
        q.$$keydown = M;
        var G = t;
        return typeof G == "function" ? Z(G, q) : t = q, _ != null ? q.style.setProperty("z-index", _) : q.style.removeProperty("z-index"), m(q, u(An, {
          ref(X) {
            var J = r;
            typeof J == "function" ? J(X) : r = X;
          },
          get bounds() {
            return e.bounds || "body";
          },
          get style() {
            return e.defaultPosition;
          },
          handle: '.cm-modal-header[data-id="' + T + '"]',
          get disabled() {
            return e.disabled;
          },
          get children() {
            var X = wh(), J = X.firstChild, ce = J.nextSibling;
            return ne(J, "data-id", `${T}`), m(J, (() => {
              var re = ee(() => !!e.title);
              return () => re() ? (() => {
                var xe = xh();
                return m(xe, () => e.title), xe;
              })() : null;
            })(), null), m(J, u(V, {
              when: R,
              get children() {
                var re = $h();
                return re.$$click = N, m(re, u(ze, {})), re;
              }
            }), null), m(ce, () => o() ? null : e.children), m(X, u(V, {
              when: O,
              get children() {
                var re = Or();
                return m(re, u(Ne, {
                  type: v,
                  get loading() {
                    return a();
                  },
                  onClick: E,
                  children: I
                }), null), m(re, u(Ne, {
                  type: y,
                  onClick: D,
                  children: A
                }), null), B((xe) => j(re, {
                  "cm-modal-footer": !0,
                  "cm-modal-footer-reverse": f,
                  [`cm-modal-footer-${w}`]: !!w
                }, xe)), re;
              }
            }), null), B((re) => {
              var xe = C(), Te = e.style, ie = e.headerStyle, se = e.bodyStyle;
              return re.e = j(X, xe, re.e), re.t = W(X, Te, re.t), re.a = W(J, ie, re.a), re.o = W(ce, se, re.o), re;
            }, {
              e: void 0,
              t: void 0,
              a: void 0,
              o: void 0
            }), X;
          }
        })), B((X) => j(q, L(), X)), q;
      })()];
    }
  });
}
function Sh() {
  let e;
  return {
    open(t) {
      const [n, r] = K(!1);
      let i = null;
      i = () => sn(_h[t.status], {
        class: `cm-modal-icon-${t.status}`,
        size: 24
      });
      const l = () => {
        setTimeout(() => {
          e?.();
        }, 250);
      };
      t.style = {
        "min-width": "24vw",
        ...t.style
      }, t.defaultPosition = {
        top: "200px",
        ...t.defaultPosition
      };
      const a = nt("cm-modal-portal-instance", "cm-modal-portal");
      setTimeout(() => {
        r(!0);
      }), e = a ? an(() => u(Lh, te(t, {
        visible: [n, r],
        onClosed: () => l(),
        class: "cm-modal-instance",
        get children() {
          return [(() => {
            var s = Ch(), c = s.firstChild;
            return m(c, i), s;
          })(), (() => {
            var s = kh();
            return m(s, (() => {
              var c = ee(() => typeof t.content == "function");
              return () => c() ? t.content() : t.content;
            })()), s;
          })()];
        }
      })), a) : null;
    },
    success(t) {
      return t.status = "success", this.open(t);
    },
    info(t) {
      return t.status = "info", this.open(t);
    },
    warning(t) {
      return t.status = "warning", this.open(t);
    },
    error(t) {
      return t.status = "error", this.open(t);
    },
    confirm(t) {
      return t.status = "confirm", this.open(t);
    },
    remove() {
      setTimeout(() => {
        e?.();
      }, 250);
    }
  };
}
const mv = Sh();
ae(["click", "keydown"]);
var Mh = /* @__PURE__ */ x("<div class=cm-notification-icon>"), Eh = /* @__PURE__ */ x("<div class=cm-notification-head><a class=cm-notification-close>"), Fh = /* @__PURE__ */ x("<span class=cm-notification-btn-wrap>"), Th = /* @__PURE__ */ x("<div><div class=cm-notification-item-wrap><div class=cm-notification-content><div class=cm-notification-body>"), Ph = /* @__PURE__ */ x("<div>"), Dh = /* @__PURE__ */ x("<div class=cm-notification>");
const kn = {
  info: gt,
  success: zt,
  warning: It,
  error: Rt,
  help: ni
};
function Ah(e) {
  const [t, n] = K(!1), [r, i] = K(!1);
  let l;
  const a = e.data, {
    style: s,
    icon: c,
    btn: d,
    theme: o,
    title: h,
    content: g
  } = a, $ = () => c === void 0 ? kn[o] ? sn(kn[o], {
    class: `cm-notice-icon-${o}`
  }) : null : c, w = () => c || (c === void 0 ? kn[o] : null), f = () => U(e, "cm-notification-item", {
    "cm-notification-item-width-icon": w(),
    "cm-notification-item-open": t(),
    "cm-notification-item-close": r(),
    [`cm-notification-item-${o}`]: o
  });
  ge(() => {
    setTimeout(() => {
      n(!0);
    }), a.duration && setTimeout(() => {
      v();
    }, a.duration * 1e3);
  });
  const v = () => {
    r() || (i(!0), setTimeout(() => {
      y();
    }, 250));
  }, y = () => {
    e.onClose(a.key, a.dock), a.onClose && a.onClose();
  };
  return (() => {
    var C = Th(), _ = C.firstChild, L = _.firstChild, F = L.firstChild, N = l;
    return typeof N == "function" ? Z(N, C) : l = C, m(_, u(V, {
      get when() {
        return w();
      },
      get children() {
        var P = Mh();
        return m(P, $), P;
      }
    }), L), m(L, u(V, {
      when: h,
      get children() {
        var P = Eh(), D = P.firstChild;
        return m(P, h, D), D.$$click = v, m(D, u(ze, {})), P;
      }
    }), F), m(F, g), m(L, u(V, {
      when: d,
      get children() {
        var P = Fh();
        return m(P, d), P;
      }
    }), null), B((P) => {
      var D = f(), E = s;
      return P.e = j(C, D, P.e), P.t = W(C, E, P.t), P;
    }, {
      e: void 0,
      t: void 0
    }), C;
  })();
}
function Xt(e) {
  const t = () => e.data, n = rt();
  return u(V, {
    get when() {
      return ee(() => !!t())() && t().length;
    },
    get children() {
      var r = Ph();
      return n != null ? r.style.setProperty("z-index", n) : r.style.removeProperty("z-index"), m(r, u(le, {
        get each() {
          return t();
        },
        children: (i) => u(Ah, {
          data: i,
          get onClose() {
            return e.onClose;
          }
        })
      })), B(() => pe(r, `cm-notification-box cm-notification-${e.docker}`)), r;
    }
  });
}
function Rh(e) {
  const t = () => e.data;
  return (() => {
    var n = Dh();
    return m(n, u(Xt, {
      get data() {
        return t().topLeft;
      },
      docker: "top-left",
      get onClose() {
        return e.onClose;
      }
    }), null), m(n, u(Xt, {
      get data() {
        return t().topRight;
      },
      docker: "top-right",
      get onClose() {
        return e.onClose;
      }
    }), null), m(n, u(Xt, {
      get data() {
        return t().bottomLeft;
      },
      docker: "bottom-left",
      get onClose() {
        return e.onClose;
      }
    }), null), m(n, u(Xt, {
      get data() {
        return t().bottomRight;
      },
      docker: "bottom-right",
      get onClose() {
        return e.onClose;
      }
    }), null), n;
  })();
}
ae(["click"]);
function Ih() {
  const [e, t] = we({
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: []
  }), n = (i, l) => {
    const a = e[l].filter((s) => s.key !== i);
    t(l, a);
  }, r = nt("cm-notice-portal", "cm-notices-wrap");
  return an(() => u(Rh, {
    data: e,
    onClose: n
  }), r), {
    open(i) {
      i.dock || (i.dock = "topRight"), i.key === void 0 && (i.key = Le()), i.duration === void 0 && (i.duration = 4.5), t(i.dock, p((l) => {
        l.push(i);
      })), r.style.zIndex = rt();
    },
    info(i) {
      i.theme = "info", this.open(i);
    },
    success(i) {
      i.theme = "success", this.open(i);
    },
    warning(i) {
      i.theme = "warning", this.open(i);
    },
    error(i) {
      i.theme = "error", this.open(i);
    },
    help(i) {
      i.theme = "help", this.open(i);
    }
  };
}
const vv = Ih();
var zh = /* @__PURE__ */ x("<div>");
function yv(e) {
  const t = () => U(e, "cm-footer-floor", {
    "cm-footer-floor-center": e.center,
    "cm-footer-floor-divider-top": e.dividerTop,
    "cm-footer-floor-divider-bottom": e.dividerBottom
  }), n = () => be(e, {
    padding: e.padding,
    color: e.color
  });
  return (() => {
    var r = zh();
    return m(r, () => e.children), B((i) => {
      var l = t(), a = n();
      return i.e = j(r, l, i.e), i.t = W(r, a, i.t), i;
    }, {
      e: void 0,
      t: void 0
    }), r;
  })();
}
var Nh = /* @__PURE__ */ x("<div class=cm-page-footer-navigations>"), Oh = /* @__PURE__ */ x("<div class=cm-page-footer-navigation><dl><dt>"), Bh = /* @__PURE__ */ x("<dd class=cm-page-footer-navigation-link><a target=_blank>");
function $v(e) {
  return (() => {
    var t = Nh();
    return m(t, () => e.children), t;
  })();
}
function Vh(e) {
  return (() => {
    var t = Oh(), n = t.firstChild, r = n.firstChild;
    return m(r, () => e.head), m(n, () => e.children, null), t;
  })();
}
function Hh(e) {
  return (() => {
    var t = Bh(), n = t.firstChild;
    return m(n, () => e.icon, null), m(n, () => e.children, null), B((r) => {
      var i = e.link, l = e.style;
      return i !== r.e && ne(n, "href", r.e = i), r.t = W(n, l, r.t), r;
    }, {
      e: void 0,
      t: void 0
    }), t;
  })();
}
Vh.Link = Hh;
var Yh = /* @__PURE__ */ x("<div>");
function wv(e) {
  const t = () => U(e, "cm-page-footer");
  return (() => {
    var n = Yh();
    return m(n, () => e.children), B((r) => {
      var i = t(), l = e.style;
      return r.e = j(n, i, r.e), r.t = W(n, l, r.t), r;
    }, {
      e: void 0,
      t: void 0
    }), n;
  })();
}
var qh = /* @__PURE__ */ x("<li>");
function Br(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-prev": !0,
    "cm-pagination-num-disabled": e.current === 1
  });
  return (() => {
    var n = qh();
    return Me(n, "click", e.onClick, !0), m(n, u(We, {})), B((r) => j(n, t(), r)), n;
  })();
}
ae(["click"]);
var jh = /* @__PURE__ */ x("<li>");
function Vr(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-next": !0,
    "cm-pagination-num-disabled": e.disabled
  });
  return (() => {
    var n = jh();
    return Me(n, "click", e.onClick, !0), m(n, u(Xe, {})), B((r) => j(n, t(), r)), n;
  })();
}
ae(["click"]);
var Wh = /* @__PURE__ */ x("<li>");
function _n(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-item-active": e.active
  });
  return (() => {
    var n = Wh();
    return Me(n, "click", e.onClick, !0), m(n, () => e.currentIndex), B((r) => j(n, t(), r)), n;
  })();
}
ae(["click"]);
var Hr = /* @__PURE__ */ x('<li class="cm-pagination-num cm-pagination-ellipse"><span class=ellipse>•••'), Uh = /* @__PURE__ */ x("<ul class=cm-pagination-num-list><span class=cm-pagination-mini-pages>/ "), Xh = /* @__PURE__ */ x('<span class="cm-pagination-text mr-5">共<!>条'), Kh = /* @__PURE__ */ x("<ul class=cm-pagination-num-list>"), Gh = /* @__PURE__ */ x("<span class=cm-pagination-sizer>"), Zh = /* @__PURE__ */ x("<span class=cm-pagination-jumper><span class=cm-pagination-text>跳至</span><span class=cm-pagination-text>页"), Jh = /* @__PURE__ */ x("<div>");
const Yr = [{
  value: 10,
  label: "10条/页"
}, {
  value: 20,
  label: "20条/页"
}, {
  value: 50,
  label: "50条/页"
}, {
  value: 100,
  label: "100条/页"
}];
function bv(e) {
  const t = () => U(e, "cm-pagination", {
    [`cm-pagination-${e.shape}`]: e.shape,
    [`cm-pagination-${e.size}`]: e.size
  }), n = () => e.current, r = () => e.total ?? 0, i = () => e.pageSize ?? 10, l = e.innerNear ?? 2, a = e.startEndShowNum ?? 2, s = e.showNums ?? !0, c = e.showTotal ?? !0, d = e.pages ?? Yr, o = e.showJumper ?? !0, h = e.showPage ?? !0, [g, $] = K(n());
  Q(() => {
    n() != g() && $(n());
  });
  const w = () => {
    n() > 1 && _(n() - 1);
  }, f = () => {
    n() < y() && _(n() + 1);
  }, v = (P) => {
    _(parseInt(P, 10));
  }, y = () => r() === 0 ? 1 : Math.floor((r() - 1) / i()) + 1, C = (P) => typeof P == "number" && P >= 1, _ = (P) => {
    let D = P;
    C(D) && D !== n() && (D > y() && (D = y()), $(D), e.onChange && e.onChange(D, i()));
  }, L = (P) => {
    const D = Math.floor((r() - 1) / P) + 1;
    e.onChangePageSize && e.onChangePageSize(P), n() > D && ($(1), e.onChange && e.onChange(1, i()));
  };
  function F() {
    const P = y(), D = n() > a + l + 1 ? n() - l : a + 1, E = n() + l + a >= P ? P - a : n() + l;
    return {
      start: D,
      end: E
    };
  }
  function N() {
    if (!s)
      return null;
    const P = y(), D = [], E = F(), b = n();
    for (let S = 1; S <= a; S++) {
      const O = b === S;
      D.push(u(_n, {
        active: O,
        get onClick() {
          return _.bind(null, S);
        },
        currentIndex: S
      }));
    }
    b > a + l + 1 && D.push(Hr());
    let k = E.start;
    const M = E.end;
    for (; k <= M; k++) {
      const S = b === k;
      D.push(u(_n, {
        get onClick() {
          return _.bind(null, k);
        },
        currentIndex: k,
        active: S
      }));
    }
    b + l + a < P && D.push(Hr());
    for (let S = P - a + 1; S <= P; S++) {
      const O = b === S;
      D.push(u(_n, {
        active: O,
        get onClick() {
          return _.bind(null, S);
        },
        currentIndex: S
      }));
    }
    return D;
  }
  return (() => {
    var P = Jh();
    return m(P, u(Ze, {
      get children() {
        return [u(fe, {
          get when() {
            return e.mini;
          },
          get children() {
            var D = Uh(), E = D.firstChild;
            return E.firstChild, m(D, u(Br, {
              current: n,
              onClick: w
            }), E), m(D, u(Ve, {
              get style() {
                return {
                  width: e.size === "small" ? "35px" : "50px"
                };
              },
              class: "mr-5",
              value: [g, $],
              get size() {
                return e.size;
              },
              onChange: v
            }), E), m(E, y, null), m(D, u(Vr, {
              current: n,
              onClick: f,
              get disabled() {
                return n() === y();
              }
            }), null), D;
          }
        }), u(fe, {
          get when() {
            return !e.mini;
          },
          get children() {
            return [u(V, {
              when: c,
              get children() {
                var D = Xh(), E = D.firstChild, b = E.nextSibling;
                return b.nextSibling, m(D, r, b), D;
              }
            }), (() => {
              var D = Kh();
              return m(D, u(Br, {
                current: n,
                onClick: w
              }), null), m(D, N, null), m(D, u(Vr, {
                current: n,
                onClick: f,
                get disabled() {
                  return n() === y();
                }
              }), null), D;
            })(), u(V, {
              when: h,
              get children() {
                var D = Gh();
                return m(D, u(Vd, {
                  get value() {
                    return i();
                  },
                  get size() {
                    return e.size;
                  },
                  onChange: L,
                  data: d,
                  get children() {
                    return u(le, {
                      each: Yr,
                      children: (E) => u(Dd, {
                        get label() {
                          return E.label;
                        },
                        get value() {
                          return E.value;
                        }
                      })
                    });
                  }
                })), D;
              }
            }), u(V, {
              when: o,
              get children() {
                var D = Zh(), E = D.firstChild, b = E.nextSibling;
                return m(D, u(Ve, {
                  get style() {
                    return {
                      width: e.size === "small" ? "35px" : "50px"
                    };
                  },
                  class: "mr-5",
                  value: [g, $],
                  get size() {
                    return e.size;
                  },
                  onChange: v
                }), b), D;
              }
            })];
          }
        })];
      }
    })), B((D) => {
      var E = t(), b = e.style;
      return D.e = j(P, E, D.e), D.t = W(P, b, D.t), D;
    }, {
      e: void 0,
      t: void 0
    }), P;
  })();
}
var Qh = /* @__PURE__ */ x("<div class=cm-popconfirm-title-text>");
function xv(e) {
  const [t, n] = de(e, ["okText", "theme", "cancelText", "title", "onOk", "onCancel", "okType", "cancelType", "icon", "align", "showCancel"]), r = () => [ee(() => t.icon), (() => {
    var l = Qh();
    return m(l, () => t.title), l;
  })()], i = t.showCancel ?? !0;
  return u(Jn, te(n, {
    clsPrefix: "cm-popconfirm",
    varName: "popconfirm",
    get theme() {
      return t.theme || "light";
    },
    confirm: !0,
    get okText() {
      return t.okText;
    },
    get align() {
      return t.align || "top";
    },
    get cancelText() {
      return t.cancelText;
    },
    get onOk() {
      return t.onOk;
    },
    get onCancel() {
      return t.onCancel;
    },
    get okType() {
      return t.okType;
    },
    get cancelType() {
      return t.cancelType;
    },
    get title() {
      return r();
    },
    showCancel: i
  }));
}
function Be(e, t, n) {
  if (t < 0 || t > 31 || e >>> t)
    throw new RangeError("Value out of range");
  for (let r = t - 1; r >= 0; r--)
    n.push(e >>> r & 1);
}
function Je(e, t) {
  return (e >>> t & 1) != 0;
}
function He(e) {
  if (!e)
    throw new Error("Assertion error");
}
var ct;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(i, l, a, s) {
      if (this.version = i, this.errorCorrectionLevel = l, i < t.MIN_VERSION || i > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (s < -1 || s > 7)
        throw new RangeError("Mask value out of range");
      this.size = i * 4 + 17;
      const c = [];
      for (let o = 0; o < this.size; o++)
        c.push(!1);
      for (let o = 0; o < this.size; o++)
        this.modules.push(c.slice()), this.isFunction.push(c.slice());
      this.drawFunctionPatterns();
      const d = this.addEccAndInterleave(a);
      if (this.drawCodewords(d), s == -1) {
        let o = 1e9;
        for (let h = 0; h < 8; h++) {
          this.applyMask(h), this.drawFormatBits(h);
          const g = this.getPenaltyScore();
          g < o && (s = h, o = g), this.applyMask(h);
        }
      }
      He(0 <= s && s <= 7), this.mask = s, this.applyMask(s), this.drawFormatBits(s), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(i, l) {
      const a = e.QrSegment.makeSegments(i);
      return t.encodeSegments(a, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(i, l) {
      const a = e.QrSegment.makeBytes(i);
      return t.encodeSegments([a], l);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(i, l, a = 1, s = 40, c = -1, d = !0) {
      if (!(t.MIN_VERSION <= a && a <= s && s <= t.MAX_VERSION) || c < -1 || c > 7)
        throw new RangeError("Invalid value");
      let o, h;
      for (o = a; ; o++) {
        const f = t.getNumDataCodewords(o, l) * 8, v = n.getTotalBits(i, o);
        if (v <= f) {
          h = v;
          break;
        }
        if (o >= s)
          throw new RangeError("Data too long");
      }
      for (const f of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        d && h <= t.getNumDataCodewords(o, f) * 8 && (l = f);
      const g = [];
      for (const f of i) {
        Be(f.mode.modeBits, 4, g), Be(f.numChars, f.mode.numCharCountBits(o), g);
        for (const v of f.getData())
          g.push(v);
      }
      He(g.length == h);
      const $ = t.getNumDataCodewords(o, l) * 8;
      He(g.length <= $), Be(0, Math.min(4, $ - g.length), g), Be(0, (8 - g.length % 8) % 8, g), He(g.length % 8 == 0);
      for (let f = 236; g.length < $; f ^= 253)
        Be(f, 8, g);
      const w = [];
      for (; w.length * 8 < g.length; )
        w.push(0);
      return g.forEach((f, v) => w[v >>> 3] |= f << 7 - (v & 7)), new t(o, l, w, c);
    }
    /*-- Fields --*/
    // The width and height of this QR Code, measured in modules, between
    // 21 and 177 (inclusive). This is equal to version * 4 + 17.
    size;
    // The index of the mask pattern used in this QR Code, which is between 0 and 7 (inclusive).
    // Even if a QR Code is created with automatic masking requested (mask = -1),
    // the resulting object still has a mask value between 0 and 7.
    mask;
    // The modules of this QR Code (false = light, true = dark).
    // Immutable after constructor finishes. Accessed through getModule().
    modules = [];
    // Indicates function modules that are not subjected to masking. Discarded when constructor finishes.
    isFunction = [];
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(i, l) {
      return 0 <= i && i < this.size && 0 <= l && l < this.size && this.modules[l][i];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let a = 0; a < this.size; a++)
        this.setFunctionModule(6, a, a % 2 == 0), this.setFunctionModule(a, 6, a % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const i = this.getAlignmentPatternPositions(), l = i.length;
      for (let a = 0; a < l; a++)
        for (let s = 0; s < l; s++)
          a == 0 && s == 0 || a == 0 && s == l - 1 || a == l - 1 && s == 0 || this.drawAlignmentPattern(i[a], i[s]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(i) {
      const l = this.errorCorrectionLevel.formatBits << 3 | i;
      let a = l;
      for (let c = 0; c < 10; c++)
        a = a << 1 ^ (a >>> 9) * 1335;
      const s = (l << 10 | a) ^ 21522;
      He(s >>> 15 == 0);
      for (let c = 0; c <= 5; c++)
        this.setFunctionModule(8, c, Je(s, c));
      this.setFunctionModule(8, 7, Je(s, 6)), this.setFunctionModule(8, 8, Je(s, 7)), this.setFunctionModule(7, 8, Je(s, 8));
      for (let c = 9; c < 15; c++)
        this.setFunctionModule(14 - c, 8, Je(s, c));
      for (let c = 0; c < 8; c++)
        this.setFunctionModule(this.size - 1 - c, 8, Je(s, c));
      for (let c = 8; c < 15; c++)
        this.setFunctionModule(8, this.size - 15 + c, Je(s, c));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let i = this.version;
      for (let a = 0; a < 12; a++)
        i = i << 1 ^ (i >>> 11) * 7973;
      const l = this.version << 12 | i;
      He(l >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const s = Je(l, a), c = this.size - 11 + a % 3, d = Math.floor(a / 3);
        this.setFunctionModule(c, d, s), this.setFunctionModule(d, c, s);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(i, l) {
      for (let a = -4; a <= 4; a++)
        for (let s = -4; s <= 4; s++) {
          const c = Math.max(Math.abs(s), Math.abs(a)), d = i + s, o = l + a;
          0 <= d && d < this.size && 0 <= o && o < this.size && this.setFunctionModule(d, o, c != 2 && c != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(i, l) {
      for (let a = -2; a <= 2; a++)
        for (let s = -2; s <= 2; s++)
          this.setFunctionModule(i + s, l + a, Math.max(Math.abs(s), Math.abs(a)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(i, l, a) {
      this.modules[l][i] = a, this.isFunction[l][i] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(i) {
      const l = this.version, a = this.errorCorrectionLevel;
      if (i.length != t.getNumDataCodewords(l, a))
        throw new RangeError("Invalid argument");
      const s = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][l], c = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][l], d = Math.floor(t.getNumRawDataModules(l) / 8), o = s - d % s, h = Math.floor(d / s), g = [], $ = t.reedSolomonComputeDivisor(c);
      for (let f = 0, v = 0; f < s; f++) {
        const y = i.slice(v, v + h - c + (f < o ? 0 : 1));
        v += y.length;
        const C = t.reedSolomonComputeRemainder(y, $);
        f < o && y.push(0), g.push(y.concat(C));
      }
      const w = [];
      for (let f = 0; f < g[0].length; f++)
        g.forEach((v, y) => {
          (f != h - c || y >= o) && w.push(v[f]);
        });
      return He(w.length == d), w;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(i) {
      if (i.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let s = 0; s < this.size; s++)
          for (let c = 0; c < 2; c++) {
            const d = a - c, h = (a + 1 & 2) == 0 ? this.size - 1 - s : s;
            !this.isFunction[h][d] && l < i.length * 8 && (this.modules[h][d] = Je(i[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      He(l == i.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(i) {
      if (i < 0 || i > 7)
        throw new RangeError("Mask value out of range");
      for (let l = 0; l < this.size; l++)
        for (let a = 0; a < this.size; a++) {
          let s;
          switch (i) {
            case 0:
              s = (a + l) % 2 == 0;
              break;
            case 1:
              s = l % 2 == 0;
              break;
            case 2:
              s = a % 3 == 0;
              break;
            case 3:
              s = (a + l) % 3 == 0;
              break;
            case 4:
              s = (Math.floor(a / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              s = a * l % 2 + a * l % 3 == 0;
              break;
            case 6:
              s = (a * l % 2 + a * l % 3) % 2 == 0;
              break;
            case 7:
              s = ((a + l) % 2 + a * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][a] && s && (this.modules[l][a] = !this.modules[l][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let i = 0;
      for (let c = 0; c < this.size; c++) {
        let d = !1, o = 0;
        const h = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[c][g] == d ? (o++, o == 5 ? i += t.PENALTY_N1 : o > 5 && i++) : (this.finderPenaltyAddHistory(o, h), d || (i += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), d = this.modules[c][g], o = 1);
        i += this.finderPenaltyTerminateAndCount(d, o, h) * t.PENALTY_N3;
      }
      for (let c = 0; c < this.size; c++) {
        let d = !1, o = 0;
        const h = [0, 0, 0, 0, 0, 0, 0];
        for (let g = 0; g < this.size; g++)
          this.modules[g][c] == d ? (o++, o == 5 ? i += t.PENALTY_N1 : o > 5 && i++) : (this.finderPenaltyAddHistory(o, h), d || (i += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), d = this.modules[g][c], o = 1);
        i += this.finderPenaltyTerminateAndCount(d, o, h) * t.PENALTY_N3;
      }
      for (let c = 0; c < this.size - 1; c++)
        for (let d = 0; d < this.size - 1; d++) {
          const o = this.modules[c][d];
          o == this.modules[c][d + 1] && o == this.modules[c + 1][d] && o == this.modules[c + 1][d + 1] && (i += t.PENALTY_N2);
        }
      let l = 0;
      for (const c of this.modules)
        l = c.reduce((d, o) => d + (o ? 1 : 0), l);
      const a = this.size * this.size, s = Math.ceil(Math.abs(l * 20 - a * 10) / a) - 1;
      return He(0 <= s && s <= 9), i += s * t.PENALTY_N4, He(0 <= i && i <= 2568888), i;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const i = Math.floor(this.version / 7) + 2, l = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (i * 2 - 2)) * 2, a = [6];
        for (let s = this.size - 7; a.length < i; s -= l)
          a.splice(1, 0, s);
        return a;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(i) {
      if (i < t.MIN_VERSION || i > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let l = (16 * i + 128) * i + 64;
      if (i >= 2) {
        const a = Math.floor(i / 7) + 2;
        l -= (25 * a - 10) * a - 55, i >= 7 && (l -= 36);
      }
      return He(208 <= l && l <= 29648), l;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(i, l) {
      return Math.floor(t.getNumRawDataModules(i) / 8) - t.ECC_CODEWORDS_PER_BLOCK[l.ordinal][i] * t.NUM_ERROR_CORRECTION_BLOCKS[l.ordinal][i];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(i) {
      if (i < 1 || i > 255)
        throw new RangeError("Degree out of range");
      const l = [];
      for (let s = 0; s < i - 1; s++)
        l.push(0);
      l.push(1);
      let a = 1;
      for (let s = 0; s < i; s++) {
        for (let c = 0; c < l.length; c++)
          l[c] = t.reedSolomonMultiply(l[c], a), c + 1 < l.length && (l[c] ^= l[c + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(i, l) {
      const a = l.map((s) => 0);
      for (const s of i) {
        const c = s ^ a.shift();
        a.push(0), l.forEach((d, o) => a[o] ^= t.reedSolomonMultiply(d, c));
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(i, l) {
      if (i >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let s = 7; s >= 0; s--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (l >>> s & 1) * i;
      return He(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(i) {
      const l = i[1];
      He(l <= this.size * 3);
      const a = l > 0 && i[2] == l && i[3] == l * 3 && i[4] == l && i[5] == l;
      return (a && i[0] >= l * 4 && i[6] >= l ? 1 : 0) + (a && i[6] >= l * 4 && i[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(i, l, a) {
      return i && (this.finderPenaltyAddHistory(l, a), l = 0), l += this.size, this.finderPenaltyAddHistory(l, a), this.finderPenaltyCountPatterns(a);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(i, l) {
      l[0] == 0 && (i += this.size), l.pop(), l.unshift(i);
    }
    /*-- Constants and tables --*/
    // The minimum version number supported in the QR Code Model 2 standard.
    static MIN_VERSION = 1;
    // The maximum version number supported in the QR Code Model 2 standard.
    static MAX_VERSION = 40;
    // For use in getPenaltyScore(), when evaluating which mask is best.
    static PENALTY_N1 = 3;
    static PENALTY_N2 = 3;
    static PENALTY_N3 = 40;
    static PENALTY_N4 = 10;
    static ECC_CODEWORDS_PER_BLOCK = [
      // Version: (note that index 0 is for padding, and is set to an illegal value)
      //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
      [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
      // Low
      [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
      // Medium
      [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
      // Quartile
      [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
      // High
    ];
    static NUM_ERROR_CORRECTION_BLOCKS = [
      // Version: (note that index 0 is for padding, and is set to an illegal value)
      //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
      [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
      // Low
      [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
      // Medium
      [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
      // Quartile
      [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
      // High
    ];
  }
  e.QrCode = t;
  class n {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(i, l, a) {
      if (this.mode = i, this.numChars = l, this.bitData = a, l < 0)
        throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(i) {
      const l = [];
      for (const a of i)
        Be(a, 8, l);
      return new n(n.Mode.BYTE, i.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(i) {
      if (!n.isNumeric(i))
        throw new RangeError("String contains non-numeric characters");
      const l = [];
      for (let a = 0; a < i.length; ) {
        const s = Math.min(i.length - a, 3);
        Be(parseInt(i.substring(a, a + s), 10), s * 3 + 1, l), a += s;
      }
      return new n(n.Mode.NUMERIC, i.length, l);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(i) {
      if (!n.isAlphanumeric(i))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      const l = [];
      let a;
      for (a = 0; a + 2 <= i.length; a += 2) {
        let s = n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(a)) * 45;
        s += n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(a + 1)), Be(s, 11, l);
      }
      return a < i.length && Be(n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(a)), 6, l), new n(n.Mode.ALPHANUMERIC, i.length, l);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(i) {
      return i == "" ? [] : n.isNumeric(i) ? [n.makeNumeric(i)] : n.isAlphanumeric(i) ? [n.makeAlphanumeric(i)] : [n.makeBytes(n.toUtf8ByteArray(i))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(i) {
      const l = [];
      if (i < 0)
        throw new RangeError("ECI assignment value out of range");
      if (i < 128)
        Be(i, 8, l);
      else if (i < 16384)
        Be(2, 2, l), Be(i, 14, l);
      else if (i < 1e6)
        Be(6, 3, l), Be(i, 21, l);
      else
        throw new RangeError("ECI assignment value out of range");
      return new n(n.Mode.ECI, 0, l);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(i) {
      return n.NUMERIC_REGEX.test(i);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(i) {
      return n.ALPHANUMERIC_REGEX.test(i);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(i, l) {
      let a = 0;
      for (const s of i) {
        const c = s.mode.numCharCountBits(l);
        if (s.numChars >= 1 << c)
          return 1 / 0;
        a += 4 + c + s.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(i) {
      i = encodeURI(i);
      const l = [];
      for (let a = 0; a < i.length; a++)
        i.charAt(a) != "%" ? l.push(i.charCodeAt(a)) : (l.push(parseInt(i.substring(a + 1, a + 3), 16)), a += 2);
      return l;
    }
    /*-- Constants --*/
    // Describes precisely all strings that are encodable in numeric mode.
    static NUMERIC_REGEX = /^[0-9]*$/;
    // Describes precisely all strings that are encodable in alphanumeric mode.
    static ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;
    // The set of all legal characters in alphanumeric mode,
    // where each character value maps to the index in the string.
    static ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  }
  e.QrSegment = n;
})(ct || (ct = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(i, l) {
        this.ordinal = i, this.formatBits = l;
      }
      /*-- Constants --*/
      static LOW = new n(0, 1);
      // The QR Code can tolerate about  7% erroneous codewords
      static MEDIUM = new n(1, 0);
      // The QR Code can tolerate about 15% erroneous codewords
      static QUARTILE = new n(2, 3);
      // The QR Code can tolerate about 25% erroneous codewords
      static HIGH = new n(3, 2);
    }
    t.Ecc = n;
  })(e.QrCode || (e.QrCode = {}));
})(ct || (ct = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(i, l) {
        this.modeBits = i, this.numBitsCharCount = l;
      }
      /*-- Constants --*/
      static NUMERIC = new n(1, [10, 12, 14]);
      static ALPHANUMERIC = new n(2, [9, 11, 13]);
      static BYTE = new n(4, [8, 16, 16]);
      static KANJI = new n(8, [8, 10, 12]);
      static ECI = new n(7, [0, 0, 0]);
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(i) {
        return this.numBitsCharCount[Math.floor((i + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(ct || (ct = {}));
const St = ct;
var ph = /* @__PURE__ */ x("<img>"), ef = /* @__PURE__ */ x("<canvas>"), tf = /* @__PURE__ */ x("<div>");
const nf = {
  L: St.QrCode.Ecc.LOW,
  M: St.QrCode.Ecc.MEDIUM,
  Q: St.QrCode.Ecc.QUARTILE,
  H: St.QrCode.Ecc.HIGH
}, rf = 128, lf = "L", Bi = "#FFFFFF", af = "#000000", sf = !1, cf = 0.25, of = 4, df = 0;
function uf(e, t = 0) {
  const n = [];
  return e.forEach(function(r, i) {
    let l = null;
    r.forEach(function(a, s) {
      if (!a && l !== null) {
        n.push(`M${l + t} ${i + t}h${s - l}v1H${l + t}z`), l = null;
        return;
      }
      if (s === r.length - 1) {
        if (!a)
          return;
        l === null ? n.push(`M${s + t},${i + t} h1v1H${s + t}z`) : n.push(`M${l + t},${i + t} h${s + 1 - l}v1H${l + t}z`);
        return;
      }
      a && l === null && (l = s);
    });
  }), n.join("");
}
function hf(e, t) {
  return t != null ? Math.floor(t) : e ? of : df;
}
function ff(e, t, n, r) {
  if (r == null)
    return null;
  const i = e.length + n * 2, l = Math.floor(t * cf), a = i / t, s = (r.width || l) * a, c = (r.height || l) * a, d = r.x == null ? e.length / 2 - s / 2 : r.x * a, o = r.y == null ? e.length / 2 - c / 2 : r.y * a;
  let h = null;
  if (r.excavate) {
    const g = Math.floor(d), $ = Math.floor(o), w = Math.ceil(s + d - g), f = Math.ceil(c + o - $);
    h = {
      x: g,
      y: $,
      w,
      h: f
    };
  }
  return {
    x: d,
    y: o,
    h: c,
    w: s,
    excavation: h
  };
}
function gf(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((i, l) => l < t.x || l >= t.x + t.w ? i : !1));
}
const mf = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function vf(e) {
  const {
    value: t,
    size: n = rf,
    level: r = lf,
    bgColor: i = Bi,
    color: l = af,
    includeMargin: a = sf,
    marginSize: s,
    style: c,
    icon: d,
    ref: o,
    ...h
  } = e;
  let {
    imageSettings: g
  } = e;
  g = g ?? d ? {
    excavate: !0
  } : void 0;
  const $ = d;
  let w, f;
  o && o({
    download: () => {
      const L = w.toDataURL("image/png");
      if ("download" in document.createElement("a")) {
        const F = document.createElement("a");
        F.download = "", F.style.display = "none", F.href = L, document.body.appendChild(F), F.click(), URL.revokeObjectURL(F.href), document.body.removeChild(F);
      }
    }
  });
  const [v, y] = K(!1);
  Q(() => {
    if (w) {
      const L = w.getContext("2d");
      if (!L)
        return;
      let F = St.QrCode.encodeText(e.value, nf[r]).getModules();
      const N = hf(a, s), P = F.length + N * 2;
      L.clearRect(0, 0, P, P);
      const D = ff(F, n, N, g), E = f, b = v() && D != null && E !== null && E.complete && E.naturalHeight !== 0 && E.naturalWidth !== 0;
      b && D.excavation != null && (F = gf(F, D.excavation));
      const k = window.devicePixelRatio || 1;
      w.height = w.width = n * k;
      const M = n / P * k;
      L.scale(M, M), L.fillStyle = i, L.fillRect(0, 0, P, P), L.fillStyle = l, mf ? L.fill(new Path2D(uf(F, N))) : F.forEach(function(S, O) {
        S.forEach(function(R, T) {
          R && L.fillRect(T + N, O + N, 1, 1);
        });
      }), b && L.drawImage(E, D.x + N, D.y + N, D.w, D.h);
    }
  }), Q(() => {
    y(!1);
  });
  const C = {
    height: n + "px",
    width: n + "px",
    ...c
  };
  let _ = null;
  return $ != null && (_ = (() => {
    var L = ph(), F = f;
    return typeof F == "function" ? Z(F, L) : f = L, L.addEventListener("load", () => {
      y(!0);
    }), ne(L, "src", $), L.style.setProperty("display", "none"), L;
  })()), [(() => {
    var L = ef(), F = w;
    return typeof F == "function" ? Z(F, L) : w = L, ne(L, "height", n), ne(L, "width", n), ye(L, h, !1, !1), B((N) => W(L, C, N)), L;
  })(), _];
}
function Cv(e) {
  const t = () => U(e, "cm-qrcode");
  return (() => {
    var n = tf();
    return m(n, u(vf, e)), B((r) => {
      var i = t(), l = e.bgColor || Bi;
      return r.e = j(n, i, r.e), l !== r.t && ((r.t = l) != null ? n.style.setProperty("background-color", l) : n.style.removeProperty("background-color")), r;
    }, {
      e: void 0,
      t: void 0
    }), n;
  })();
}
var yf = /* @__PURE__ */ x("<div class=cm-result-icon>"), $f = /* @__PURE__ */ x("<div class=cm-result-title>"), wf = /* @__PURE__ */ x("<div class=cm-result-subtitle>"), bf = /* @__PURE__ */ x("<div class=cm-result-extra>"), xf = /* @__PURE__ */ x("<div class=cm-result-desc>"), Cf = /* @__PURE__ */ x("<div>");
const kf = {
  info: gt,
  success: zt,
  warning: It,
  error: Rt
}, _f = (e) => sn(kf[e], {});
function kv(e) {
  const [t, n] = de(e, ["layout", "icon", "status", "title", "subTitle", "extra", "desc", "classList", "class"]), r = t.status ?? "info", i = t.icon ?? _f(r), l = () => U(t, "cm-result", {
    [`cm-result-${r}`]: !!r
  });
  return (() => {
    var a = Cf();
    return ye(a, te({
      get classList() {
        return l();
      }
    }, n), !1, !0), m(a, u(V, {
      when: i,
      get children() {
        var s = yf();
        return m(s, i), s;
      }
    }), null), m(a, u(V, {
      get when() {
        return t.title;
      },
      get children() {
        var s = $f();
        return m(s, () => t.title), s;
      }
    }), null), m(a, u(V, {
      get when() {
        return t.subTitle;
      },
      get children() {
        var s = wf();
        return m(s, () => t.subTitle), s;
      }
    }), null), m(a, u(V, {
      get when() {
        return t.extra;
      },
      get children() {
        var s = bf();
        return m(s, () => t.extra), s;
      }
    }), null), m(a, u(V, {
      get when() {
        return t.desc;
      },
      get children() {
        var s = xf();
        return m(s, () => t.desc), s;
      }
    }), null), a;
  })();
}
var Lf = /* @__PURE__ */ x("<div><div class=cm-sbs-right-panel></div><div class=cm-sbs-left-panel></div><div class=cm-sbs-handler><div class=cm-sbs-track><div class=cm-sbs-line></div><div class=cm-sbs-line></div><div class=cm-sbs-line>");
function _v(e) {
  const t = () => U(e, "cm-side-by-side"), [n, r] = K(50), [i, l] = we({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  });
  let a;
  Q(() => {
    const g = a.getBoundingClientRect();
    let $ = Ie(() => n());
    $ = $ + i.deltaX / g.width * 100, $ = Math.min($, 100), $ = Math.max($, 0), r($);
  });
  const s = (g) => {
    if (typeof g.button == "number" && g.button !== 0)
      return !1;
    l("dragging", !0);
    const $ = g.clientX, w = g.clientY;
    l("x", $), l("y", w), document.addEventListener("mousemove", c, !1), document.addEventListener("mouseup", d, !1);
  }, c = (g) => {
    const $ = g.clientX - i.x, w = g.clientY - i.y;
    l("x", g.clientX), l("y", g.clientY), l("deltaX", $), l("deltaY", w);
  }, d = (g) => {
    l("dragging", !1), document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", d), l("deltaX", 0), l("deltaY", 0);
  }, o = () => ({
    "clip-path": `inset(0 ${100 - n()}% 0 0)`
  }), h = () => ({
    left: `${n()}%`
  });
  return he(() => {
    me || (document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", d));
  }), (() => {
    var g = Lf(), $ = g.firstChild, w = $.nextSibling, f = w.nextSibling, v = a;
    return typeof v == "function" ? Z(v, g) : a = g, m($, () => e.right), m(w, () => e.left), f.$$mousedown = s, B((y) => {
      var C = t(), _ = e.style, L = o(), F = h();
      return y.e = j(g, C, y.e), y.t = W(g, _, y.t), y.a = W(w, L, y.a), y.o = W(f, F, y.o), y;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), g;
  })();
}
ae(["mousedown"]);
var Sf = /* @__PURE__ */ x("<div>"), Mf = /* @__PURE__ */ x("<ul>"), Ef = /* @__PURE__ */ x("<li>");
function Ff(e) {
  const t = e.size ?? "medium", n = e.shape ?? "circle", r = () => U(e, "cm-skeleton-item", {
    [`cm-skeleton-${e.type}`]: e.type,
    [`cm-skeleton-${e.type}-${t}`]: t,
    [`cm-skeleton-${e.type}-${n}`]: n,
    ["cm-skeleton-inline"]: e.inline
  }), i = () => be(e, {
    width: typeof e.size == "number" ? e.size + "px" : e.width,
    height: typeof e.size == "number" ? e.size + "px" : e.height
  });
  return (() => {
    var l = Sf();
    return B((a) => {
      var s = r(), c = i();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })();
}
const Ht = (e) => (t) => u(Ff, te({
  type: e
}, t)), Tf = Ht("avatar"), Pf = Ht("image"), Df = Ht("title"), Af = Ht("button"), Rf = Ht("item");
function If(e) {
  const t = e.rows ?? 4, n = () => U(e, "cm-skeleton-paragraph"), r = new Array(t).fill(1), i = () => be(e, {
    width: e.width
  });
  return (() => {
    var l = Mf();
    return m(l, u(le, {
      each: r,
      children: (a, s) => {
        const c = {};
        return e.width && e.width instanceof Array && (c.width = e.width[s()]), (() => {
          var d = Ef();
          return W(d, c), d;
        })();
      }
    })), B((a) => {
      var s = n(), c = i();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })();
}
var zf = /* @__PURE__ */ x("<div>");
function bt(e) {
  const t = () => U(e, "cm-skeleton", {
    "cm-skeleton-active": e.active
  }), n = () => be(e, {
    width: e.width,
    height: e.height
  });
  return u(V, {
    get when() {
      return e.loading;
    },
    get fallback() {
      return e.children;
    },
    get children() {
      var r = zf();
      return m(r, () => e.placeholder), B((i) => {
        var l = t(), a = n();
        return i.e = j(r, l, i.e), i.t = W(r, a, i.t), i;
      }, {
        e: void 0,
        t: void 0
      }), r;
    }
  });
}
bt.Avatar = Tf;
bt.Image = Pf;
bt.Title = Df;
bt.Button = Af;
bt.Item = Rf;
bt.Paragraph = If;
var Nf = /* @__PURE__ */ x("<div><div></div><div class=cm-slpit-handler-wrap><div><div class=cm-split-handler-bar-wrap></div></div></div><div>"), Of = /* @__PURE__ */ x("<div class=cm-split-handler-bar>");
function Lv(e) {
  const t = e.dir || "v", n = () => U(e, "cm-split-wrap", {
    [`cm-split-wrap-${t}`]: t
  });
  let r = e.split;
  r && r < 1 && (r = r * 100 + "%");
  const [i, l] = K(r || "50%"), a = e.min || 40;
  let s, c;
  const d = () => ({
    "cm-split-handler": !0,
    "cm-split-dragging": w.dragging,
    [`cm-split-handler-${t}`]: !!t
  }), o = ai(e.children);
  o.prev || console.warn("Split need prev Slot Element"), o.next || console.warn("Split need next Slot Element"), Q(() => {
    const _ = s.getBoundingClientRect(), L = t === "v" ? _.width : _.height;
    let F = t === "v" ? c.style.width : c.style.height;
    F.indexOf("px") > -1 ? F = parseFloat(F) / L * 100 : F = parseFloat(F);
    const N = e.max ? e.max / L * 100 : 100 - a / L * 100;
    F = F + (t === "v" ? w.deltaX : w.deltaY) / L * 100, F = Math.max(F, a / L * 100), F = Math.min(F, N), l(F + "%");
  });
  const h = () => ({
    [`${t === "v" ? "width" : "height"}`]: i()
  }), g = () => ({
    [`${t === "v" ? "left" : "top"}`]: i()
  }), $ = {
    flex: "1"
  }, [w, f] = we({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  }), v = (_) => {
    if (typeof _.button == "number" && _.button !== 0)
      return !1;
    f("dragging", !0);
    const L = _.clientX, F = _.clientY;
    f("x", L), f("y", F), document.addEventListener("mousemove", y, !1), document.addEventListener("mouseup", C, !1);
  }, y = (_) => {
    const L = _.clientX - w.x, F = _.clientY - w.y;
    f("x", _.clientX), f("y", _.clientY), f("deltaX", L), f("deltaY", F);
  }, C = (_) => {
    f("dragging", !1), document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", C), f("deltaX", 0), f("deltaY", 0);
  };
  return he(() => {
    me || (document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", C));
  }), (() => {
    var _ = Nf(), L = _.firstChild, F = L.nextSibling, N = F.firstChild, P = N.firstChild, D = F.nextSibling, E = s;
    typeof E == "function" ? Z(E, _) : s = _;
    var b = c;
    return typeof b == "function" ? Z(b, L) : c = L, pe(L, `cm-split-panel cm-split-${t === "v" ? "left" : "top"}`), m(L, () => o.prev), N.$$mousedown = v, m(P, u(le, {
      each: [1, 2, 3, 4, 5, 6, 7, 8],
      children: () => Of()
    })), W(D, $), pe(D, `cm-split-panel cm-split-${t === "v" ? "right" : "bottom"}`), m(D, () => o.next), B((k) => {
      var M = n(), S = h(), O = g(), R = d();
      return k.e = j(_, M, k.e), k.t = W(L, S, k.t), k.a = W(F, O, k.a), k.o = j(N, R, k.o), k;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    }), _;
  })();
}
ae(["mousedown"]);
var Bf = /* @__PURE__ */ x("<div class=cm-step-head-inner>"), Vf = /* @__PURE__ */ x("<div class=cm-step-head-inner><span>"), Hf = /* @__PURE__ */ x("<div class=cm-step-description>"), Yf = /* @__PURE__ */ x("<div><div class=cm-step-head></div><div class=cm-step-main><div class=cm-step-title>");
function qf(e) {
  const t = () => {
    if (e.status)
      return e.status;
    let l = "";
    return e.current + 1 > e.index && (l = "finished"), e.current + 1 === e.index && (l = "process"), l || "wait";
  }, n = () => {
    let l = "";
    return e.current + 1 > e.index && (l = "done"), e.current + 1 === e.index && (l = "active"), l;
  }, r = () => U(e, "cm-steps-item", {
    [`cm-steps-status-${t()}`]: t(),
    [`cm-steps-status-${n()}`]: n()
  }), i = () => {
    let l = "";
    return e.icon ? l = e.icon : t() === "finished" ? l = (() => {
      var a = Bf();
      return m(a, u(ei, {})), a;
    })() : t() === "error" ? l = u(cn, {
      size: 26
    }) : t() === "warning" ? l = u(hl, {
      size: 26
    }) : l = (() => {
      var a = Vf(), s = a.firstChild;
      return m(s, () => e.index), a;
    })(), l;
  };
  return (() => {
    var l = Yf(), a = l.firstChild, s = a.nextSibling, c = s.firstChild;
    return m(a, i), m(c, () => e.title), m(s, u(V, {
      get when() {
        return e.description;
      },
      get children() {
        var d = Hf();
        return m(d, () => e.description), d;
      }
    }), null), B((d) => {
      var o = r(), h = e.style;
      return d.e = j(l, o, d.e), d.t = W(l, h, d.t), d;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })();
}
function jf(e) {
  return e;
}
var Wf = /* @__PURE__ */ x("<div>");
function Uf(e) {
  const t = Ge(() => e.children), n = () => t.toArray(), r = () => U(e, "cm-steps", {
    [`cm-steps-${e.size}`]: e.size,
    "cm-steps-vertical": e.dir === "v"
  });
  return (() => {
    var i = Wf();
    return m(i, u(le, {
      get each() {
        return n();
      },
      children: (l, a) => u(qf, te(l, {
        get index() {
          return a() + 1;
        },
        get current() {
          return e.current || 0;
        }
      }))
    })), B((l) => {
      var a = r(), s = e.style;
      return l.e = j(i, a, l.e), l.t = W(i, s, l.t), l;
    }, {
      e: void 0,
      t: void 0
    }), i;
  })();
}
Uf.Step = jf;
var Xf = /* @__PURE__ */ x("<span class=cm-table-sort>"), Kf = /* @__PURE__ */ x("<span class=cm-table-resize>"), Gf = /* @__PURE__ */ x("<th><div class=cm-table-cell>"), Zf = /* @__PURE__ */ x("<span class=cm-table-tree-level>"), Jf = /* @__PURE__ */ x("<span class=cm-table-cell-tooltip-content>"), Qf = /* @__PURE__ */ x("<td><div class=cm-table-cell>"), pf = /* @__PURE__ */ x("<span class=cm-table-tree-icon-empty>"), eg = /* @__PURE__ */ x("<span class=cm-table-cell-ellipsis>"), tg = /* @__PURE__ */ x("<div>");
function ot(e) {
  let t;
  const n = e.column, r = e.colIndex, i = nr();
  ge(() => {
    setTimeout(() => {
      a();
    });
  });
  const l = () => ({
    "cm-table-head-col": e.type === "th",
    "cm-table-cell-fixed-left-last": n.fixedLeftLast && e.showFixedLeft,
    "cm-table-cell-fixed-right-first": n.fixedRightFirst && e.showFixedRight
  });
  Q(() => {
    n.width, n._, a();
  });
  const a = () => {
    if (n.fixed && t && !e.placeholder) {
      if (n.fixed === "left") {
        t.style.position = "static";
        const f = t.closest(".cm-table");
        if (f) {
          const v = f.querySelector("thead");
          let y = 0;
          for (let C = 1; C <= r; C++) {
            const _ = v.querySelector("th:nth-child(" + C + ")");
            _ && (y += _.getBoundingClientRect().width);
          }
          t.style.position = "sticky", t.style.left = y + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-left"), n.fixedLeftLast && e.showFixedLeft && t.classList.add("cm-table-cell-fixed-left-last");
        }
      }
      if (n.fixed === "right") {
        const f = t.closest(".cm-table");
        if (f) {
          const v = f.querySelector("thead"), y = v.querySelectorAll("th").length;
          let C = 0;
          for (let _ = r + 2; _ <= y; _++) {
            const L = v.querySelector("th:nth-child(" + _ + ")");
            C += L.getBoundingClientRect().width;
          }
          t.style.position = "sticky", t.style.right = C + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-right"), n.fixedRightFirst && e.showFixedRight && t.classList.add("cm-table-cell-fixed-right-first");
        }
      }
    }
  }, s = () => e.data._showChildren ? u(fl, {
    class: "cm-table-tree-icon",
    onClick: h
  }) : u(gl, {
    class: "cm-table-tree-icon",
    onClick: h
  }), c = (f) => {
    i && i.onRowChecked(e.data, f);
  }, d = (f) => {
    i && i.onHeadChecked(f);
  }, o = (f) => {
    i && i.onSort(n, f);
  }, h = () => {
    i && i.onShowChildren(e.data);
  }, g = () => {
    i && i.onExpand(n, e.data);
  }, $ = (f) => {
    i && i.onDragStart(n, f);
  }, w = () => {
    const f = e.column;
    return e.type === "td" ? e.summary ? e.data[f.name] : f.type === "index" ? e.index + 1 : f.type === "date" ? ue(e.data[f.name]).format("YYYY-MM-DD") : f.type === "datetime" ? ue(e.data[f.name]).format("YYYY-MM-DD HH:mm:ss") : f.type === "enum" ? f.enum?.[e.data[f.name]] : f.type === "checkbox" ? u(Ke, {
      get disabled() {
        return e.data._disabled;
      },
      get checked() {
        return e.data._checked;
      },
      onChange: c
    }) : e.data._type === "expandChildren" ? e.data.render ? e.data.render() : null : f.type === "expand" ? u(Xe, {
      get class() {
        return `cm-table-expand ${e.data._expand ? "cm-table-expand-open" : ""}`;
      },
      onClick: g
    }) : f.render && typeof f.render == "function" ? f.render(e.data[f.name], f, e.data, e.index) : e.data[f.name] : f.type === "checkbox" ? u(Ke, {
      get checked() {
        return e.checkedAll;
      },
      onChange: d
    }) : e.column.title;
  };
  return u(Ze, {
    get children() {
      return [u(fe, {
        get when() {
          return e.type === "th";
        },
        get children() {
          var f = Gf(), v = f.firstChild;
          return Z((y) => {
            t = y, e.ref && e.ref(y);
          }, f), m(v, w, null), m(v, u(V, {
            get when() {
              return n.sort;
            },
            get children() {
              var y = Xf();
              return m(y, u(Zt, {
                get class() {
                  return n.sortType === "asc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return o.bind(null, "asc");
                }
              }), null), m(y, u(tt, {
                get class() {
                  return n.sortType === "desc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return o.bind(null, "desc");
                }
              }), null), y;
            }
          }), null), m(v, u(V, {
            get when() {
              return n.resize && n.width && i && i.border;
            },
            get children() {
              var y = Kf();
              return y.$$mousedown = $, y;
            }
          }), null), B((y) => {
            var C = l(), _ = e.colSpan, L = e.rowSpan, F = e.colIndex;
            return y.e = j(f, C, y.e), _ !== y.t && ne(f, "colspan", y.t = _), L !== y.a && ne(f, "rowspan", y.a = L), F !== y.o && ne(f, "data-index", y.o = F), y;
          }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0
          }), f;
        }
      }), u(fe, {
        get when() {
          return e.type === "td";
        },
        get children() {
          var f = Qf(), v = f.firstChild, y = t;
          return typeof y == "function" ? Z(y, f) : t = f, m(v, u(V, {
            get when() {
              return n.tree;
            },
            get children() {
              return [(() => {
                var C = Zf();
                return B((_) => (_ = `${e.data._level * 16}px`) != null ? C.style.setProperty("padding-left", _) : C.style.removeProperty("padding-left")), C;
              })(), u(V, {
                get when() {
                  return e.data.children && e.data.children.length;
                },
                get fallback() {
                  return pf();
                },
                get children() {
                  return s();
                }
              })];
            }
          }), null), m(v, u(V, {
            get when() {
              return n.ellipsis || n.tooltip;
            },
            get fallback() {
              return w();
            },
            get children() {
              return u(V, {
                get when() {
                  return n.tooltip;
                },
                get fallback() {
                  return (() => {
                    var C = eg();
                    return m(C, w), C;
                  })();
                },
                get children() {
                  return u(un, {
                    arrow: !0,
                    get align() {
                      return n.tooltipAlign || "top";
                    },
                    get color() {
                      return n.tooltipTheme;
                    },
                    class: "cm-table-cell-tooltip",
                    get style() {
                      return {
                        ...n.tooltipStyle,
                        "max-width": `${n.tooltipMaxWidth || 200}px`
                      };
                    },
                    get content() {
                      return (() => {
                        var C = tg();
                        return m(C, w), C;
                      })();
                    },
                    get children() {
                      var C = Jf();
                      return m(C, w), C;
                    }
                  });
                }
              });
            }
          }), null), B((C) => {
            var _ = l(), L = e.colSpan, F = e.rowSpan;
            return C.e = j(f, _, C.e), L !== C.t && ne(f, "colspan", C.t = L), F !== C.a && ne(f, "rowspan", C.a = F), C;
          }, {
            e: void 0,
            t: void 0,
            a: void 0
          }), f;
        }
      })];
    }
  });
}
ae(["mousedown"]);
var ng = /* @__PURE__ */ x("<colgroup class=cm-table-colgroup>"), rg = /* @__PURE__ */ x("<col class=cm-table-col>");
function rn(e) {
  return (() => {
    var t = ng();
    return m(t, u(le, {
      get each() {
        return e.data.columns;
      },
      children: (n, r) => (() => {
        var i = rg();
        return B(() => ne(i, "width", n._width)), i;
      })()
    })), t;
  })();
}
var ig = /* @__PURE__ */ x("<div class=cm-table-header><table><thead>"), lg = /* @__PURE__ */ x("<tr>");
function ag(e) {
  let t, n;
  const r = vt((l) => {
    const a = l.target;
    if (a.tagName === "THEAD") {
      const s = a.getBoundingClientRect();
      e.onResizeHeader(s.width, s.height), n.style.height = s.height + "px";
    } else
      setTimeout(() => {
        const s = a.getBoundingClientRect(), c = a.closest(".cm-table-body").getBoundingClientRect();
        s.height > c.height ? n.style.overflowY = "scroll" : n.style.overflowY = "";
      });
  }, 100);
  ge(() => {
    const l = new ResizeObserver((c) => {
      c.forEach((d) => r(d));
    });
    l.observe(t);
    const s = t.closest(".cm-table").querySelector(".cm-table-body-wrap");
    l.observe(s), he(() => {
      l.unobserve(t), l.unobserve(s);
    });
  });
  const i = () => ({
    position: e.sticky ? "sticky" : "",
    // position: 'absolute',
    top: 0,
    "z-index": 2,
    "min-width": "100%",
    "overflow-x": "hidden"
  });
  return Q(() => {
    n && (n.scrollLeft = e.data.headerLeft);
  }), (() => {
    var l = ig(), a = l.firstChild, s = a.firstChild, c = n;
    typeof c == "function" ? Z(c, l) : n = l, m(a, u(rn, {
      get data() {
        return e.data;
      }
    }), s);
    var d = t;
    return typeof d == "function" ? Z(d, s) : t = s, m(s, u(le, {
      get each() {
        return e.data.columnsRows;
      },
      children: (o, h) => (() => {
        var g = lg();
        return m(g, u(le, {
          each: o,
          children: ($, w) => u(ot, {
            get colSpan() {
              return $._colspan;
            },
            get rowSpan() {
              return $._rowspan;
            },
            column: $,
            type: "th",
            get showFixedLeft() {
              return e.data.showFixedLeft;
            },
            get colIndex() {
              return w();
            },
            get showFixedRight() {
              return e.data.showFixedRight;
            },
            get checkedAll() {
              return e.data.checkedAll;
            },
            ref: (f) => {
            }
          })
        })), g;
      })()
    })), B((o) => W(l, i(), o)), l;
  })();
}
var sg = /* @__PURE__ */ x("<tr>"), cg = /* @__PURE__ */ x("<tr><td><div class=cm-table-emprty-cell>"), og = /* @__PURE__ */ x("<div><table class=cm-table-body-wrap><thead><tr></tr></thead><tbody>"), dg = /* @__PURE__ */ x("<table class=cm-table-body-wrap><thead><tr></tr></thead><tbody>"), ug = /* @__PURE__ */ x("<div class=cm-table-body>");
const hg = (e) => u(Vi, {
  get data() {
    return e.item;
  },
  get index() {
    return e.index;
  },
  get store() {
    return e.store;
  },
  ref(t) {
    var n = e.ref;
    typeof n == "function" ? n(t) : e.ref = t;
  }
});
function Vi(e) {
  const t = nr(), n = () => {
    e.data._type !== "expandChildren" && t && t.highlight && t.onSelectRow(e.data);
  }, r = () => ({
    "cm-table-row": !0,
    "cm-table-row-ood": e.index % 2 === 0,
    "cm-table-row-even": e.index % 2 !== 0,
    "cm-table-row-selected": e.data._highlight
  }), i = () => ({
    display: e.data._show ? "" : "none"
  });
  return (() => {
    var l = sg(), a = e.ref;
    return typeof a == "function" ? Z(a, l) : e.ref = l, l.$$click = n, m(l, u(Ze, {
      get children() {
        return [u(fe, {
          get when() {
            return e.data._type === "expandChildren";
          },
          get children() {
            return u(ot, {
              type: "td",
              get data() {
                return e.data;
              },
              get column() {
                return e.data.column;
              },
              get index() {
                return e.index;
              },
              get showFixedLeft() {
                return e.store.showFixedLeft;
              },
              get showFixedRight() {
                return e.store.showFixedRight;
              },
              get colSpan() {
                return e.store.columns.length;
              }
            });
          }
        }), u(fe, {
          get when() {
            return e.data._type !== "expandChildren";
          },
          get children() {
            return u(le, {
              get each() {
                return e.store.columns;
              },
              children: (s, c) => {
                let [d, o] = [1, 1];
                if (t && t.spanMethod) {
                  const h = t.spanMethod(e.data, s, e.index, c());
                  h && ([d, o] = h);
                }
                return u(V, {
                  when: d && o,
                  fallback: null,
                  get children() {
                    return u(ot, {
                      type: "td",
                      get data() {
                        return e.data;
                      },
                      column: s,
                      get index() {
                        return e.index;
                      },
                      get colIndex() {
                        return c();
                      },
                      get showFixedLeft() {
                        return e.store.showFixedLeft;
                      },
                      get showFixedRight() {
                        return e.store.showFixedRight;
                      },
                      rowSpan: d,
                      colSpan: o
                    });
                  }
                });
              }
            });
          }
        })];
      }
    })), B((s) => {
      var c = r(), d = i();
      return s.e = j(l, c, s.e), s.t = W(l, d, s.t), s;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })();
}
function qr(e) {
  const t = nr();
  return (() => {
    var n = cg(), r = n.firstChild, i = r.firstChild;
    return m(i, () => t?.empty || "暂无数据"), B(() => ne(r, "colspan", e.store.columns.length)), n;
  })();
}
function fg(e) {
  let t;
  const [n, r] = K(), i = () => {
    const c = e.data.columns;
    let d = 0;
    return c.forEach((o) => {
      d += o._width || 0;
    }), d;
  };
  Q(() => {
    e.data.data;
    const c = e.data.headerSize.height, d = e.data.summarySize.height;
    if (e.virtual) {
      const o = e.height ?? document.documentElement.clientHeight;
      r(o - c - d);
    } else
      Promise.resolve().then(() => {
        const h = t.querySelector(".cm-table-body-wrap").getBoundingClientRect().height;
        if (e.height && h > e.height - c - d) {
          const g = e.height - c - d;
          r(g);
        }
      });
  });
  const l = () => {
    e.onScroll(t.scrollLeft, t.clientWidth, t.scrollWidth);
  };
  let a, s;
  return (() => {
    var c = ug();
    c.addEventListener("scroll", l);
    var d = t;
    return typeof d == "function" ? Z(d, c) : t = c, c.style.setProperty("display", "block"), c.style.setProperty("width", "100%"), c.style.setProperty("overflow", "auto"), c.style.setProperty("position", "relative"), m(c, u(Ze, {
      get children() {
        return [u(fe, {
          get when() {
            return e.virtual;
          },
          get children() {
            var o = og(), h = o.firstChild, g = h.firstChild, $ = g.firstChild, w = g.nextSibling, f = a;
            typeof f == "function" ? Z(f, o) : a = o, o.style.setProperty("min-width", "100%"), o.style.setProperty("will-change", "transform"), o.style.setProperty("box-sizing", "border-box"), o.style.setProperty("contain", "strict"), o.style.setProperty("position", "absolute"), o.style.setProperty("top", "0"), o.style.setProperty("left", "0"), m(h, u(rn, {
              get data() {
                return e.data;
              }
            }), g), g.style.setProperty("display", "none"), m($, u(le, {
              get each() {
                return e.data.columns;
              },
              children: (y, C) => u(ot, {
                column: y,
                type: "th",
                placeholder: !0,
                get colIndex() {
                  return C();
                },
                get checkedAll() {
                  return e.data.checkedAll;
                }
              })
            }));
            var v = s;
            return typeof v == "function" ? Z(v, w) : s = w, m(w, u(Ei, {
              scrollElement: t,
              contentElement: a,
              bodyElement: s,
              get items() {
                return e.data.data;
              },
              itemEstimatedSize: 50,
              get maxHeight() {
                return n() || e.height;
              },
              get itemComponent() {
                return {
                  component: hg,
                  props: {
                    store: e.data
                  }
                };
              }
            }), null), m(w, u(V, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return u(qr, {
                  get store() {
                    return e.data;
                  }
                });
              }
            }), null), B((y) => (y = i() + "px") != null ? o.style.setProperty("width", y) : o.style.removeProperty("width")), o;
          }
        }), u(fe, {
          get when() {
            return !e.virtual;
          },
          get children() {
            var o = dg(), h = o.firstChild, g = h.firstChild, $ = h.nextSibling, w = s;
            return typeof w == "function" ? Z(w, o) : s = o, m(o, u(rn, {
              get data() {
                return e.data;
              }
            }), h), h.style.setProperty("display", "none"), m(g, u(le, {
              get each() {
                return e.data.columns;
              },
              children: (f, v) => u(ot, {
                column: f,
                type: "th",
                placeholder: !0,
                get colIndex() {
                  return v();
                },
                get checkedAll() {
                  return e.data.checkedAll;
                }
              })
            })), m($, u(le, {
              get each() {
                return e.data.data;
              },
              children: (f, v) => u(Vi, {
                data: f,
                get index() {
                  return v();
                },
                get store() {
                  return e.data;
                }
              })
            }), null), m($, u(V, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return u(qr, {
                  get store() {
                    return e.data;
                  }
                });
              }
            }), null), o;
          }
        })];
      }
    })), B((o) => (o = n() + "px") != null ? c.style.setProperty("height", o) : c.style.removeProperty("height")), c;
  })();
}
ae(["click"]);
function jr(e) {
  let t = -1, n = Number.MAX_VALUE;
  const r = [];
  qi(e, r, void 0);
  let i = 1;
  const l = (c, d) => {
    let o = 0;
    return c.forEach((h) => {
      if (d && (h._level = d._level + 1, i < h._level && (i = h._level)), h.children) {
        const g = l(h.children, h);
        o += g, h._colspan = g;
      } else
        h._colspan = 1, o += 1;
    }), o;
  };
  e.forEach((c) => {
    c._level = 1;
  }), l(e, void 0);
  const a = [];
  for (let c = 0; c < i; c++)
    a.push([]);
  return ji(e).forEach((c) => {
    c.children ? c._rowspan = 1 : c._rowspan = i - c._level + 1, a[c._level - 1].push(c);
  }), r && (r.forEach((c, d) => {
    c.id = c.id ?? Le(), c.fixed === "left" && (t = Math.max(t, d)), c.fixed === "right" && (n = Math.min(n, d));
  }), t > -1 && r[t] && (r[t].fixedLeftLast = !0), n < Number.MAX_VALUE && r[n] && (r[n].fixedRightFirst = !0)), {
    maxFixedLeft: t,
    minFixedRight: n,
    columnsRows: a,
    calcColumns: r
  };
}
function gg(e, t, n, r, i, l) {
  (e >= 0 || t < Number.MAX_VALUE) && (n("showFixedLeft", r > 0), n("showFixedRight", i + r < l));
}
function Wr(e, t) {
  let n = e ?? [];
  return n = [...n], n.forEach((r, i) => {
    r.id = r[t] ?? Le(), r._originSort = i;
  }), n = vg(e, t), n;
}
function mg(e, t, n) {
  const r = [...t.data];
  n.sortType === "" ? r.sort((i, l) => i._originSort - l._originSort > 0 ? 1 : -1) : n.sortMethod && typeof n.sortMethod == "function" ? r.sort(n.sortMethod) : r.sort((i, l) => {
    const a = n.name ?? "";
    return /^[0-9\.]+$/g.test(i[a]) ? (n.sortType === "asc" ? 1 : -1) * (i[a] - l[a]) > 0 ? 1 : -1 : (n.sortType === "asc" ? 1 : -1) * i[a].localeCompare(l[a]);
  }), e("data", r);
}
function Hi(e, t, n, r, i) {
  e.forEach((l) => {
    l.id = l[i] ?? Le(), l._level = n, l._show = r, t.push(l), l.children && l.children.length && Hi(l.children, t, n + 1, !!l._showChildren, i);
  });
}
function vg(e, t) {
  const n = [];
  return Hi(e, n, 0, !0, t), n;
}
const tr = (e, t) => {
  e[t] && e[t].children && e[t].children.forEach((n) => {
    n._show = !1, tr(e, n.id);
  });
}, yg = (e, t) => {
  const n = e[t];
  n && n.children && n.children.forEach((r) => {
    r._show = n._showChildren, tr(e, r.id);
  });
};
function $g(e, t) {
  e("data", (n) => n.id === t.id, p((n) => n._showChildren = !n._showChildren)), e("data", p((n) => {
    const r = t.children.map((l) => l.id), i = {};
    n.forEach((l) => {
      i[l.id] = l;
    }), r.forEach((l) => {
      i[l] && (i[l]._show = t._showChildren), t._showChildren ? yg(i, l) : tr(i, l);
    });
  }));
}
function wg(e, t, n, r) {
  e("columns", (i) => i.name === n.name, p((i) => {
    i.sortType === r ? i.sortType = "" : i.sortType = r;
  })), n.sort !== "custom" && mg(e, t, n);
}
function bg(e, t, n) {
  e("data", p((r) => {
    let i = -1;
    const l = r.find((a, s) => {
      const c = a.id === n.id;
      return c && (i = s), c;
    });
    l._expand ? (r.splice(i + 1, 1), l._expand = !1) : (l._expand = !0, r.splice(i + 1, 0, {
      _type: "expandChildren",
      _show: !0,
      column: t,
      render: t.render?.bind(null, n)
    }));
  }));
}
const xg = (e, t, n) => {
  if (typeof n.button == "number" && n.button !== 0)
    return !1;
  e("resizing", !0);
  const r = n.target.getBoundingClientRect().right, i = n.target.closest(".cm-table-wrap").getBoundingClientRect().left;
  e("posX", r - i), e("startX", r - i), e("x", n.clientX), e("resizeId", t.id);
}, Cg = (e, t, n) => {
  if (e.resizing) {
    const r = n.clientX - e.x;
    t("x", n.clientX);
    const i = e.posX + r;
    t("posX", i);
  }
}, kg = (e, t, n) => {
  t("resizing", !1), t("columns", (i) => i.id === e.resizeId, p((i) => {
    let l = i.width ? parseFloat(i.width) + (e.posX - e.startX) : void 0;
    l && i.minWidth && (l = Math.max(l, i.minWidth)), l && i.maxWidth && (l = Math.min(l, i.maxWidth)), i.width = l ? l + "px" : void 0;
  })), Yi(e, t, n);
  let r;
  e.columns.find((i, l) => {
    const a = i.id === e.resizeId;
    return a && (r = e.columns[l + 1] ? e.columns[l + 1].id : void 0), a;
  }), t("columns", (i) => i.id === r, p((i) => {
    i._ = Le();
  })), t("posX", 0);
}, Yi = vt((e, t, n) => {
  let r = n.querySelector(".cm-table").getBoundingClientRect().width;
  const i = n.querySelector(".cm-table-body");
  if (i.offsetHeight < i.scrollHeight) {
    const c = i.offsetWidth - i.clientWidth;
    r -= c;
  }
  const a = e.columns.filter((c) => c.width), s = a.reduce((c, d) => c + (d.width ? parseFloat(d.width) : 0), 0);
  t("columns", p((c) => {
    const d = c.filter((o) => !o.width);
    if (d.length > 0) {
      const o = Math.max(r - s, 0), h = o / d.length;
      let g = o;
      d.filter((f) => f.minWidth || f.maxWidth).forEach((f) => {
        let v = h;
        f.minWidth && (v = Math.max(v, f.minWidth)), f.maxWidth && (v = Math.min(v, f.maxWidth)), g -= v, f._width = v;
      });
      const $ = d.filter((f) => !(f.minWidth || f.maxWidth)), w = g / $.length;
      $.forEach((f) => {
        f._width = w;
      });
    }
  })), a.forEach((c) => {
    const d = c.width ? parseFloat(c.width) : 0;
    t("columns", (o) => c.id === o.id, p((o) => {
      o._width = d;
    }));
  });
}, 100), qi = (e, t = [], n) => {
  e.forEach((r) => {
    r.id = r.id ?? Le(), r.name || (r.name = r.id), r._parent = n, r.children ? qi(r.children, t, r) : t.push(r);
  });
}, ji = (e) => e.flatMap((t) => t.children ? [t, ...ji(t.children)] : [t]);
var _g = /* @__PURE__ */ x("<div class=cm-table-summary><table><thead><tr></tr></thead><tbody><tr>");
function Lg(e) {
  let t;
  const n = je(() => {
    let i = {};
    return e.summaryMethod ? i = e.summaryMethod(e.data.columns, e.data.data) : e.data.columns.forEach((l, a) => {
      const s = l.name;
      if (a === 0) {
        i[s] = "合计";
        return;
      }
      const c = e.data.data.map((d) => Number(d[s]));
      if (c.every((d) => isNaN(d)))
        i[s] = "";
      else {
        const d = c.reduce((o, h) => {
          const g = Number(h);
          return isNaN(g) ? o : o + h;
        }, 0);
        i[s] = d;
      }
    }), i;
  });
  Q(() => {
    t && (t.scrollLeft = e.data.headerLeft);
  });
  const r = vt((i) => {
    const l = i.target;
    if (l.classList.contains("cm-table-summary")) {
      const a = l.getBoundingClientRect(), s = l.children[0].getBoundingClientRect().height;
      e.onResizeSummary(a.width, s), t.style.height = s + "px";
    } else
      setTimeout(() => {
        const a = l.getBoundingClientRect(), s = l.closest(".cm-table-body").getBoundingClientRect();
        a.height > s.height ? t.style.overflowY = "scroll" : t.style.overflowY = "";
      });
  }, 100);
  return ge(() => {
    const i = new ResizeObserver((s) => {
      s.forEach((c) => r(c));
    });
    i.observe(t);
    const a = t.closest(".cm-table").querySelector(".cm-table-body-wrap");
    i.observe(a), he(() => {
      i.unobserve(t), i.unobserve(a);
    });
  }), (() => {
    var i = _g(), l = i.firstChild, a = l.firstChild, s = a.firstChild, c = a.nextSibling, d = c.firstChild, o = t;
    return typeof o == "function" ? Z(o, i) : t = i, m(l, u(rn, {
      get data() {
        return e.data;
      }
    }), a), a.style.setProperty("display", "none"), m(s, u(le, {
      get each() {
        return e.data.columns;
      },
      children: (h, g) => u(ot, {
        column: h,
        type: "th",
        placeholder: !0,
        get colIndex() {
          return g();
        },
        get checkedAll() {
          return e.data.checkedAll;
        }
      })
    })), m(d, u(le, {
      get each() {
        return e.data.columns;
      },
      children: (h, g) => u(ot, {
        type: "td",
        summary: !0,
        get data() {
          return n();
        },
        column: h,
        get colIndex() {
          return g();
        },
        get index() {
          return g();
        },
        get showFixedLeft() {
          return e.data.showFixedLeft;
        },
        get showFixedRight() {
          return e.data.showFixedRight;
        }
      })
    })), i;
  })();
}
var Sg = /* @__PURE__ */ x("<div class=cm-table-title>"), Mg = /* @__PURE__ */ x("<div class=cm-table-footer>"), Eg = /* @__PURE__ */ x("<div><div class=cm-table-resize-helper></div><div class=cm-table-loading></div><div class=cm-table>");
const Wi = Ee();
function Sv(e) {
  const t = () => U(e, "cm-table-wrap", {
    "cm-table-border": e.border,
    "cm-table-stripe": e.stripe,
    "cm-table-small": e.size === "small",
    "cm-table-with-title": e.title,
    "cm-table-with-footer": e.footer,
    "cm-table-with-summary": e.showSummary,
    "cm-table-resizing": d.resizing
  });
  let n;
  const {
    maxFixedLeft: r,
    minFixedRight: i
  } = jr(e.columns), l = e.rowKey ?? "id", [a, s] = e.selectedRowKeys ? e.selectedRowKeys : [];
  let c = Wr(e.data, l);
  Q(() => {
    c = Wr(e.data, l), o("data", c), o("checkedAll", !1);
  }), Q(() => {
    const {
      maxFixedLeft: S,
      minFixedRight: O,
      columnsRows: R,
      calcColumns: T
    } = jr(e.columns);
    o("columns", T), o("columnsRows", R), o("showFixedLeft", !1), o("showFixedRight", !0);
  });
  const [d, o] = we({
    columns: [],
    columnsRows: [],
    data: [],
    showFixedLeft: !1,
    showFixedRight: !0,
    checkedAll: !1,
    resizing: !1,
    x: 0,
    posX: 0,
    startX: 0,
    resizeId: void 0,
    headerSize: {
      with: 0,
      height: 48
    },
    summarySize: {
      with: 0,
      height: 0
    },
    headerLeft: 0
  }), h = (S) => {
    const O = d.data.find((R) => R._highlight);
    O && o("data", (R) => R.id === O.id, p((R) => R._highlight = !1)), o("data", (R) => R.id === S.id, p((R) => R._highlight = !0)), e.onRowSelect && e.onRowSelect(S, O);
  }, g = (S, O) => {
    o("data", (z) => z.id === S.id, p((z) => z._checked = O));
    let R = !1, T = 0, I = 0;
    const A = [];
    d.data.forEach((z) => {
      z._disabled || I++, z._checked && (A.push(z.id), T++, R = "indeterminate");
    }), T >= I && (R = !0), A.join(",") !== a?.().join(",") && s?.(A), o("checkedAll", R), e.onRowChecked && e.onRowChecked(S, O);
  };
  Q(() => {
    const S = a?.();
    d.data, S && S.length > 0 ? o("data", (I) => S.includes(I.id) && !I._checked, p((I) => I._checked = !0)) : o("data", (I) => I._checked, p((I) => I._checked = !1));
    let O = !1, R = 0, T = 0;
    Ie(() => {
      d.data.forEach((I) => {
        I._disabled || T++, I._checked && (R++, O = "indeterminate");
      });
    }), R >= T && (O = !0), o("checkedAll", O);
  });
  const $ = (S) => {
    o("checkedAll", S), o("data", (T) => S ? !T._disabled && !T._checked : !T._disabled && T._checked, p((T) => T._checked = S));
    const O = [], R = d.data.filter((T) => (T._checked && O.push(T.id), T._checked));
    O.join(",") !== a?.().join(",") && s?.(O), e.onCheckedAll && e.onCheckedAll(R);
  }, w = (S, O) => {
    wg(o, d, S, O), e.onSort && e.onSort(S, S.sortType);
  }, f = (S) => {
    $g(o, S);
  }, v = (S, O) => {
    bg(o, S, O);
  }, y = (S, O) => {
    xg(o, S, O), document.addEventListener("mousemove", C, !1), document.addEventListener("mouseup", _, !1);
  }, C = (S) => {
    Cg(d, o, S);
  }, _ = () => {
    document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", _), kg(d, o, n);
  }, L = () => ({
    display: d.resizing ? "block" : "none",
    left: d.posX + "px"
  }), F = () => d.data.filter((S) => S._checked), N = (S, O) => {
    const R = d.data.find((T) => {
      T.id;
    });
    g(R, O);
  }, P = (S, O) => {
    o("columns", S, "_width", O);
  }, D = (S, O) => {
    o("headerSize", "width", S), o("headerSize", "height", O);
  }, E = (S, O) => {
    o("summarySize", "width", S), o("summarySize", "height", O);
  }, b = (S, O, R) => {
    gg(r, i, o, S, O, R), d.headerLeft !== S && o("headerLeft", S);
  };
  e.ref && e.ref({
    clearSelect() {
      o("data", (S) => S._highlight, p((S) => S._highlight = !1));
    },
    checkAll(S) {
      $(S);
    },
    getAllChecked() {
      return F();
    },
    setChecked: N
  }), ge(() => {
    const S = n.querySelector(".cm-table-body"), O = new ResizeObserver((R) => {
      R.forEach((T) => {
        Yi(d, o, n);
      });
    });
    O.observe(S), he(() => {
      O.unobserve(S);
    });
  });
  const k = () => ({
    ...e.style,
    "max-height": e.height ? `${e.height}px` : ""
    // 'display': 'flex',
    // 'flex-direction': 'column'
  }), M = () => !!e.height;
  return u(Wi.Provider, {
    get value() {
      return {
        onSelectRow: h,
        onRowChecked: g,
        onHeadChecked: $,
        onSort: w,
        onShowChildren: f,
        onExpand: v,
        onDragStart: y,
        highlight: e.highlight,
        border: e.border,
        spanMethod: e.spanMethod,
        empty: e.empty
      };
    },
    get children() {
      var S = Eg(), O = S.firstChild, R = O.nextSibling, T = R.nextSibling, I = n;
      return typeof I == "function" ? Z(I, S) : n = S, m(S, u(V, {
        get when() {
          return e.loading;
        },
        fallback: null,
        get children() {
          return u(yi, {
            type: "dot",
            get title() {
              return e.loadingText || "";
            }
          });
        }
      }), T), m(S, u(V, {
        get when() {
          return e.title;
        },
        get children() {
          var A = Sg();
          return m(A, () => e.title), A;
        }
      }), T), m(T, u(V, {
        get when() {
          return e.showHeader ?? !0;
        },
        get children() {
          return u(ag, {
            data: d,
            get sticky() {
              return M();
            },
            onInitColumnWidth: P,
            onResizeHeader: D,
            get virtual() {
              return e.virtual;
            }
          });
        }
      }), null), m(T, u(fg, {
        data: d,
        onScroll: b,
        get height() {
          return e.height;
        },
        get virtual() {
          return e.virtual;
        }
      }), null), m(T, u(V, {
        get when() {
          return e.showSummary;
        },
        get children() {
          return u(Lg, {
            data: d,
            onResizeSummary: E,
            get summaryMethod() {
              return e.summaryMethod;
            }
          });
        }
      }), null), m(S, u(V, {
        get when() {
          return e.footer;
        },
        get children() {
          var A = Mg();
          return m(A, () => e.footer), A;
        }
      }), null), B((A) => {
        var z = t(), H = L(), Y = k();
        return A.e = j(S, z, A.e), A.t = W(O, H, A.t), A.a = W(T, Y, A.a), A;
      }, {
        e: void 0,
        t: void 0,
        a: void 0
      }), S;
    }
  });
}
const nr = () => Se(Wi);
var Fg = /* @__PURE__ */ x("<div>");
function Mv(e) {
  const [t, n] = de(e, ["class", "classList"]), r = () => U(t, "cm-table-style-layout-row");
  return (() => {
    var i = Fg();
    return ye(i, te({
      get classList() {
        return r();
      }
    }, n), !1, !1), i;
  })();
}
var Tg = /* @__PURE__ */ x("<div>");
function Ev(e) {
  const [t, n] = de(e, ["children", "class", "classList", "style"]), r = {};
  e.flex != null && (r.flex = `1 1 ${e.flex * 100}%`, r["min-width"] = 0);
  const i = () => be(t, r), l = () => U(t, "cm-table-style-layout-col");
  return (() => {
    var a = Tg();
    return ye(a, te({
      get classList() {
        return l();
      },
      get style() {
        return i();
      }
    }, n), !1, !0), m(a, () => t.children), a;
  })();
}
var Pg = /* @__PURE__ */ x("<div>");
function Fv(e) {
  const t = Rg(), [n, r] = de(e, ["children", "class", "classList", "style", "verticalAlign", "required", "width"]), i = () => U(n, "cm-table-style-layout-label", {
    [`cm-table-style-layout-label-${n.verticalAlign}`]: n.verticalAlign,
    required: !!n.required
  }), l = t.labelWidth, a = () => be(n, {
    flex: `0 0 ${(n.width || l) + "px"}`
  });
  return (() => {
    var s = Pg();
    return ye(s, te({
      get classList() {
        return i();
      },
      get style() {
        return a();
      }
    }, r), !1, !0), m(s, () => n.children), s;
  })();
}
var Dg = /* @__PURE__ */ x("<div>");
function Tv(e) {
  const [t, n] = de(e, ["children", "class", "classList", "style", "verticalAlign", "column", "row", "justify"]), r = () => U(t, "cm-table-style-layout-value", {
    column: !!t.column,
    row: !!t.row,
    [`cm-table-style-layout-value-${t.verticalAlign}`]: !!t.verticalAlign
  }), i = () => be(t, {
    "justify-content": t.justify
  });
  return (() => {
    var l = Dg();
    return ye(l, te({
      get classList() {
        return r();
      },
      get style() {
        return i();
      }
    }, n), !1, !0), m(l, () => t.children), l;
  })();
}
var Ag = /* @__PURE__ */ x("<div>");
const Ui = Ee({
  labelWidth: 100
}), Rg = () => Se(Ui);
function Pv(e) {
  const [t, n] = de(e, ["children", "class", "classList"]), r = () => U(t, "cm-table-style-layout");
  return u(Ui.Provider, {
    get value() {
      return {
        labelWidth: e.labelWidth || 100
      };
    },
    get children() {
      var i = Ag();
      return ye(i, te({
        get classList() {
          return r();
        }
      }, n), !1, !0), m(i, () => t.children), i;
    }
  });
}
const Dv = (e) => e;
var Ig = /* @__PURE__ */ x("<div class=cm-tabs-extra-prepend>"), Ur = /* @__PURE__ */ x("<div class=cm-tabs-prev>"), Xr = /* @__PURE__ */ x("<div class=cm-tabs-next>"), zg = /* @__PURE__ */ x("<div class=cm-tabs-scroll><div class=cm-tabs-active-line></div><ul class=cm-tabs-header>"), Ng = /* @__PURE__ */ x("<div class=cm-tabs-more>"), Og = /* @__PURE__ */ x("<div class=cm-tabs-extra-append>"), Bg = /* @__PURE__ */ x("<div><div class=cm-tabs-header-wrap></div><div class=cm-tabs-content-wrap><div class=cm-tabs-content>"), Vg = /* @__PURE__ */ x("<li><div><span class=cm-tabs-header-item-text>"), Hg = /* @__PURE__ */ x("<div>");
function Av(e) {
  let t, n, r;
  const i = () => e.type ?? "line", l = e.animation ?? !1, a = e.align ?? "top", s = () => U(e, "cm-tabs", {
    [`cm-tabs-${i()}`]: !!i(),
    [`cm-tabs-${a}`]: !!a,
    "cm-tabs-overflow": g.scroll,
    "cm-tabs-centered": e.centered,
    "cm-tabs-bordered": e.bordered,
    "cm-tabs-with-animation": l,
    "cm-tabs-keep-height": e.keepHeight
  }), [c, d] = K(e.activeName || ""), o = Ge(() => e.children), h = () => o.toArray(), [g, $] = we({
    tabs: [],
    moreList: [],
    morePrevList: [],
    moreNextList: [],
    scroll: !1,
    scrollLeft: 0
  });
  Q(() => {
    $("tabs", h()), Ie(() => {
      g.tabs.length === 1 && (d(g.tabs[0].name), e.onTabClick && e.onTabClick({
        ...g.tabs[0]
      }));
    });
  }), Q(() => {
    c();
    const R = r.querySelector(".cm-tabs-header-item-active");
    R && R.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest"
    });
  });
  const w = () => {
    const R = a === "top" || a === "bottom" ? "width" : "height", T = a === "top" || a === "bottom" ? "scrollLeft" : "scrollTop", I = a === "top" || a === "bottom" ? "left" : "top", A = n.getBoundingClientRect()[R], z = n[T] - A, H = {
      [`${I}`]: z,
      behavior: "smooth"
    };
    n.scrollTo(H);
  }, f = () => {
    const R = a === "top" || a === "bottom" ? "width" : "height", T = a === "top" || a === "bottom" ? "scrollLeft" : "scrollTop", I = a === "top" || a === "bottom" ? "left" : "top", A = n.getBoundingClientRect()[R], z = n[T] + A, H = {
      [`${I}`]: z,
      behavior: "smooth"
    };
    n.scrollTo(H);
  }, v = (R) => {
    $("tabs", p((T) => {
      T.push(R);
    })), queueMicrotask(() => {
      d(R.name);
    });
  }, y = (R) => {
    d(R.name), e.onTabClick && e.onTabClick({
      ...R
    });
  }, C = (R, T) => {
    y(T);
  }, _ = (R, T) => {
    T.preventDefault && T.preventDefault(), T.stopPropagation && T.stopPropagation();
    const I = g.tabs.findIndex((z) => z.name === R), A = g.tabs.filter((z) => z.name !== R);
    if (c() === R) {
      const z = Math.max(I - 1, 0);
      A.length && y(A[z]);
    }
    e.onRemove && e.onRemove(R), $("tabs", A);
  }, L = () => {
    const R = c();
    let T = 0;
    g.tabs.forEach((A, z) => {
      A.name === R && (T = z);
    });
    const I = {
      transform: `translate(${-T * 100}%, 0)`
    };
    return e.duration !== void 0 && typeof e.duration == "number" && (I["transition-duration"] = e.duration + "ms"), I;
  }, F = () => {
    D(), b();
  }, N = (R) => {
    g.scroll && (R.preventDefault && R.preventDefault(), a === "top" || a === "bottom" ? R.deltaY > 0 ? n.scrollLeft += 50 : n.scrollLeft -= 50 : R.deltaY > 0 ? n.scrollTop += 50 : n.scrollTop -= 50);
  };
  ge(() => {
    const R = new ResizeObserver((T) => {
      E();
    });
    R.observe(n), R.observe(r), E(), he(() => {
      R.disconnect();
    });
  });
  const D = vt(() => {
    const R = new IntersectionObserver((I) => {
      const A = [];
      let z = "";
      I.forEach((X) => {
        const J = X.target;
        X.intersectionRatio < 0.98 ? A.push(J.dataset.name) : z || (z = J.dataset.name);
      });
      const H = g.tabs.findIndex((X) => X.name === z), Y = [], q = [], G = [];
      A.forEach((X) => {
        const J = g.tabs.findIndex((re) => re.name === X), ce = g.tabs[J];
        Y.push(ce), J < H ? q.push(ce) : G.push(ce);
      }), $("moreList", Y), $("morePrevList", q), $("moreNextList", G), R.disconnect();
    }, {
      root: n,
      rootMargin: "0px",
      threshold: 0
    });
    r.querySelectorAll(".cm-tabs-header-item").forEach((I) => {
      R.observe(I);
    });
  }, 200), E = vt(() => {
    const R = a === "top" || a === "bottom" ? "width" : "height", T = n.getBoundingClientRect()[R], I = r.getBoundingClientRect()[R];
    I > T && !g.scroll && ($("scroll", !0), b()), I < T && g.scroll && ($("scroll", !1), b()), D();
  }, 100), b = () => {
    const R = c();
    if (i() === "line") {
      if (!r)
        return;
      let T = 0;
      g.tabs.forEach((ce, re) => {
        ce.name === R && (T = re);
      });
      const A = r.querySelectorAll(".cm-tabs-header-item")[T];
      if (!A)
        return;
      A.querySelector(".cm-tabs-close");
      const z = A.getBoundingClientRect(), H = n.getBoundingClientRect(), G = n[a === "top" || a === "bottom" ? "scrollLeft" : "scrollTop"] + (a === "top" || a === "bottom" ? z.left - H.left : z.top - H.top), X = z.width, J = z.height;
      return a === "top" || a === "bottom" ? (t.style.width = `${X}px`, t.style.left = `${G}px`) : (t.style.height = `${J}px`, t.style.top = `${G}px`), a === "top" || a === "bottom" ? {
        width: `${X}px`,
        left: `${G}px`
      } : {
        height: `${J}px`,
        top: `${G}px`
      };
    }
  };
  e.ref && e.ref({
    addTab: v
  });
  const k = (R) => u(In, {
    get children() {
      return u(le, {
        each: R,
        children: (T) => u(Rn, {
          data: T,
          get name() {
            return T.name;
          },
          get icon() {
            return T.icon;
          },
          get children() {
            return [ee(() => T.title), u(V, {
              get when() {
                return T.closeable;
              },
              get children() {
                return u(ze, {
                  get onClick() {
                    return _.bind(null, T.name);
                  },
                  size: 12
                });
              }
            })];
          }
        })
      });
    }
  }), M = () => {
    if (a === "bottom")
      return e.arrowPosition === "end" ? "topRight" : "topLeft";
    if (a === "left")
      return e.arrowPosition === "end" ? "rightBottom" : "rightTop";
    if (a === "right")
      return e.arrowPosition === "end" ? "leftBottom" : "leftTop";
    if (a === "top")
      return e.arrowPosition === "end" ? "bottomRight" : "bottomLeft";
  }, S = () => {
    if (a === "bottom")
      return e.arrowPosition === "start" ? "topLeft" : "topRight";
    if (a === "left")
      return e.arrowPosition === "start" ? "rightTop" : "rightBottom";
    if (a === "right")
      return e.arrowPosition === "start" ? "leftTop" : "leftBottom";
    if (a === "top")
      return e.arrowPosition === "start" ? "bottomLeft" : "bottomRight";
  }, O = () => {
    if (a === "bottom")
      return "topRight";
    if (a === "left")
      return "rightBottom";
    if (a === "right")
      return "leftBottom";
    if (a === "top")
      return "bottomRight";
  };
  return (() => {
    var R = Bg(), T = R.firstChild, I = T.nextSibling, A = I.firstChild;
    return m(T, u(V, {
      get when() {
        return e.prepend;
      },
      get children() {
        var z = Ig();
        return m(z, () => e.prepend), z;
      }
    }), null), m(T, u(V, {
      get when() {
        return e.arrowPosition === "start" || e.arrowPosition === "both";
      },
      get children() {
        return u(Ae, {
          get disabled() {
            return !e.more;
          },
          get align() {
            return M();
          },
          onSelect: C,
          class: "cm-tabs-more-dropdown",
          get menu() {
            return k(g.morePrevList);
          },
          get children() {
            var z = Ur();
            return z.$$click = w, m(z, u(V, {
              when: a === "top" || a === "bottom",
              get fallback() {
                return u(Zt, {
                  size: 16
                });
              },
              get children() {
                return u(We, {
                  size: 16
                });
              }
            })), B(() => z.classList.toggle("cm-tabs-prev-disabled", !g.morePrevList.length)), z;
          }
        });
      }
    }), null), m(T, u(V, {
      get when() {
        return e.arrowPosition === "start";
      },
      get children() {
        return u(Ae, {
          get disabled() {
            return !e.more;
          },
          get align() {
            return S();
          },
          onSelect: C,
          class: "cm-tabs-more-dropdown",
          get menu() {
            return k(g.moreNextList);
          },
          get children() {
            var z = Xr();
            return z.$$click = f, m(z, u(V, {
              when: a === "top" || a === "bottom",
              get fallback() {
                return u(tt, {
                  size: 16
                });
              },
              get children() {
                return u(Xe, {
                  size: 16
                });
              }
            })), B(() => z.classList.toggle("cm-tabs-next-disabled", !g.moreNextList.length)), z;
          }
        });
      }
    }), null), m(T, u(Ae, te({
      trigger: "contextMenu",
      transfer: !0,
      get menu() {
        return e.contextMenu;
      },
      handler: ".cm-tabs-header-item",
      align: "bottom",
      get onSelect() {
        return e.onSelectContextMenu;
      }
    }, () => e.dropdownProps, {
      get children() {
        var z = zg(), H = z.firstChild, Y = H.nextSibling;
        z.addEventListener("wheel", N), z.addEventListener("scroll", F);
        var q = n;
        typeof q == "function" ? Z(q, z) : n = z;
        var G = t;
        typeof G == "function" ? Z(G, H) : t = H;
        var X = r;
        return typeof X == "function" ? Z(X, Y) : r = Y, m(Y, u(le, {
          get each() {
            return g.tabs;
          },
          children: (J) => {
            const ce = () => ({
              "cm-tabs-header-item": !0,
              [`cm-tabs-header-item-${e.buttonTheme}`]: !!e.buttonTheme,
              "cm-tabs-header-item-active": J.name === c(),
              "cm-tabs-header-item-disabled": J.disabled
            }), re = () => (() => {
              var xe = Vg(), Te = xe.firstChild, ie = Te.firstChild;
              return Me(xe, "contextmenu", e.onContextMenu?.bind(null, {
                ...J
              }), !0), Me(xe, "click", y.bind(null, J), !0), m(Te, () => J.icon, ie), m(ie, () => J.title), m(Te, u(V, {
                get when() {
                  return J.closeable;
                },
                get children() {
                  return u(ze, {
                    get onClick() {
                      return _.bind(null, J.name);
                    },
                    class: "cm-tabs-close",
                    size: 12
                  });
                }
              }), null), B((se) => {
                var ke = ce(), Ce = J.name, $e = `${e.maxTabSize}px`;
                return se.e = j(xe, ke, se.e), Ce !== se.t && ne(xe, "data-name", se.t = Ce), $e !== se.a && ((se.a = $e) != null ? ie.style.setProperty("max-width", $e) : ie.style.removeProperty("max-width")), se;
              }, {
                e: void 0,
                t: void 0,
                a: void 0
              }), xe;
            })();
            return e.tooltip ? u(Jt, te({
              get content() {
                return J.title;
              },
              align: "bottom",
              theme: "light"
            }, () => e.tooltipProps, {
              get children() {
                return re();
              }
            })) : re();
          }
        })), B((J) => W(H, b(), J)), z;
      }
    })), null), m(T, u(V, {
      get when() {
        return g.scroll && e.more && g.moreList.length && !e.arrowPosition;
      },
      get children() {
        return u(Ae, te({
          get align() {
            return O();
          }
        }, () => e.moreDropdownProps, {
          onSelect: C,
          class: "cm-tabs-more-dropdown",
          get menu() {
            return u(In, {
              get children() {
                return u(le, {
                  get each() {
                    return g.moreList;
                  },
                  children: (z) => u(Rn, {
                    data: z,
                    get name() {
                      return z.name;
                    },
                    get children() {
                      return [ee(() => z.title), u(V, {
                        get when() {
                          return z.closeable;
                        },
                        get children() {
                          return u(ze, {
                            get onClick() {
                              return _.bind(null, z.name);
                            },
                            size: 12
                          });
                        }
                      })];
                    }
                  })
                });
              }
            });
          },
          get children() {
            var z = Ng();
            return m(z, () => e.renderMore?.() ?? u(ml, {
              size: 14
            })), z;
          }
        }));
      }
    }), null), m(T, u(V, {
      get when() {
        return e.arrowPosition === "end";
      },
      get children() {
        return u(Ae, {
          get disabled() {
            return !e.more;
          },
          get align() {
            return M();
          },
          onSelect: C,
          class: "cm-tabs-more-dropdown",
          get menu() {
            return k(g.morePrevList);
          },
          get children() {
            var z = Ur();
            return z.$$click = w, m(z, u(V, {
              when: a === "top" || a === "bottom",
              get fallback() {
                return u(Zt, {
                  size: 16
                });
              },
              get children() {
                return u(We, {
                  size: 16
                });
              }
            })), B(() => z.classList.toggle("cm-tabs-prev-disabled", !g.morePrevList.length)), z;
          }
        });
      }
    }), null), m(T, u(V, {
      get when() {
        return e.arrowPosition === "end" || e.arrowPosition === "both";
      },
      get children() {
        return u(Ae, {
          get disabled() {
            return !e.more;
          },
          get align() {
            return S();
          },
          onSelect: C,
          class: "cm-tabs-more-dropdown",
          get menu() {
            return k(g.moreNextList);
          },
          get children() {
            var z = Xr();
            return z.$$click = f, m(z, u(V, {
              when: a === "top" || a === "bottom",
              get fallback() {
                return u(tt, {
                  size: 16
                });
              },
              get children() {
                return u(Xe, {
                  size: 16
                });
              }
            })), B(() => z.classList.toggle("cm-tabs-next-disabled", !g.moreNextList.length)), z;
          }
        });
      }
    }), null), m(T, u(V, {
      get when() {
        return e.append;
      },
      get children() {
        var z = Og();
        return m(z, () => e.append), z;
      }
    }), null), m(A, u(le, {
      get each() {
        return g.tabs;
      },
      children: (z) => {
        const H = () => U(z, "cm-tab-panel", {
          "cm-tab-panel-active": z.name === c()
        });
        return (() => {
          var Y = Hg();
          return m(Y, () => z.children), B((q) => j(Y, H(), q)), Y;
        })();
      }
    })), B((z) => {
      var H = s(), Y = e.style, q = L();
      return z.e = j(R, H, z.e), z.t = W(R, Y, z.t), z.a = W(A, q, z.a), z;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    }), R;
  })();
}
ae(["click", "contextmenu"]);
var Xi = /* @__PURE__ */ x("<div class=cm-teleport-group-title>"), Ki = /* @__PURE__ */ x("<div class=cm-teleport-right-item>"), Yg = /* @__PURE__ */ x('<div><section class=cm-teleport-left><div class=cm-teleport-header><span class=cm-teleport-header-total>总个数：</span></div><div class=cm-teleport-filter></div><div class=cm-teleport-left-list></div></section><section class=cm-teleport-right><div class="cm-teleport-header cm-teleport-right-header"><span class=cm-teleport-header-total>已选个数：</span></div><div class=cm-teleport-right-list>'), Gi = /* @__PURE__ */ x("<div>");
function Rv(e) {
  const [t, n] = de(e, ["classList", "class", "data", "style", "onChange", "disabled", "renderSourceItem", "renderSelectedItem", "filter", "value", "defaultValue", "virtual"]), r = () => U(t, "cm-teleport-box", {
    "cm-teleport-box--disabled": t.disabled
  }), [i, l] = De(t, "value", []), a = En({
    leftList: [],
    rightList: [],
    originList: [],
    flatList: [],
    dataMap: {},
    checkedAll: !1
  }), s = (f) => {
    if (f) {
      const v = a.flatList?.filter((y) => t.filter ? t.filter(y, f) : y.children?.length ? y.children?.filter((_) => y.label.includes(f))?.length : y.label.includes(f));
      a.leftList = v || [];
    } else
      a.leftList = a.flatList || [];
  }, c = () => {
    const f = {};
    let v = [];
    const y = Ie(() => i());
    t.defaultValue && t.defaultValue.forEach((_) => {
      y.includes(_) || y.push(_);
    });
    const C = e.data?.flatMap((_) => (_.children?.length ? v = v.concat(_.children) : v.push(_), [_, ..._.children ? _.children : []].flat()));
    C?.forEach((_) => {
      y.includes(_.value) && (_.checked = !0), f[_.value] = _;
    }), a.originList = v, a.flatList = C || [], a.dataMap = f, a.leftList = C || [], l([...y]);
  };
  c(), Q(() => {
    c();
  }), Q(() => {
    const f = i(), v = a.originList.filter((C) => !C.disabled || C.disabled && C.checked).length;
    e.data?.length && f.length === v ? a.checkedAll = !0 : a.checkedAll = !1;
    const y = f.map((C) => a.dataMap[C]);
    a.rightList = y;
  });
  const d = (f, v) => {
    if (e.disabled || v.disabled)
      return;
    v.checked = f;
    let y = i() || [];
    const C = v.value;
    if (f)
      y.includes(C) || (y = y.concat(C));
    else {
      const _ = y.indexOf(C);
      _ > -1 && y.splice(_, 1);
    }
    l([...y]), e.onChange?.(i());
  }, o = (f) => {
    if (f.disabled)
      return;
    f.checked = !1;
    const v = i(), y = v.indexOf(f.value);
    y > -1 && v.splice(y, 1), l([...v]), e.onChange?.([...v]);
  }, h = () => {
    const f = i(), v = [];
    f.forEach((y) => {
      const C = a.dataMap[y];
      if (C.disabled) {
        v.push(C.value);
        return;
      }
      C.checked = !1;
    }), l(v), e.onChange?.(v);
  }, g = () => {
    const f = [];
    for (const v in a.dataMap) {
      const y = a.dataMap[v];
      if (!y.children?.length) {
        if (y.disabled) {
          y.checked && f.push(y.value);
          continue;
        }
        y.checked = !0, f.push(y.value);
      }
    }
    l(f);
  }, $ = () => u(le, {
    get each() {
      return a.leftList;
    },
    children: (f, v) => f.children?.length ? (() => {
      var y = Xi();
      return m(y, () => f.label), y;
    })() : t.renderSourceItem?.(f, (y) => {
      d(y, f);
    }) || u(Ke, {
      get disabled() {
        return f.disabled;
      },
      get checked() {
        return f.checked;
      },
      onChange: (y) => d(y, f),
      get label() {
        return f.label;
      }
    })
  }), w = () => u(le, {
    get each() {
      return i();
    },
    children: (f) => {
      const v = a.dataMap[f];
      return v ? t.renderSelectedItem?.(v, () => {
        o(v);
      }) || (() => {
        var y = Ki();
        return m(y, u(qe, {
          get children() {
            return v.label;
          }
        }), null), m(y, u(V, {
          get when() {
            return !v.disabled;
          },
          get children() {
            return u(ze, {
              class: "cm-teleport-right-item-close",
              onClick: () => o(v)
            });
          }
        }), null), y;
      })() : null;
    }
  });
  return (() => {
    var f = Yg(), v = f.firstChild, y = v.firstChild, C = y.firstChild;
    C.firstChild;
    var _ = y.nextSibling, L = _.nextSibling, F = v.nextSibling, N = F.firstChild, P = N.firstChild;
    P.firstChild;
    var D = N.nextSibling;
    return ye(f, te({
      get classList() {
        return r();
      },
      get style() {
        return t.style;
      }
    }, n), !1, !0), m(C, () => a.originList?.length, null), m(y, u(V, {
      get when() {
        return a.checkedAll;
      },
      get fallback() {
        return u(Ne, {
          size: "small",
          theme: "borderless",
          class: "cm-teleport-select-all",
          onClick: g,
          children: "全选"
        });
      },
      get children() {
        return u(Ne, {
          size: "small",
          theme: "borderless",
          class: "cm-teleport-select-all",
          onClick: h,
          children: "取消全选"
        });
      }
    }), null), m(_, u(Ve, {
      get suffix() {
        return u(Gt, {});
      },
      trigger: "input",
      onChange: s,
      placeholder: "搜索",
      clearable: !0
    })), m(L, u(V, {
      get when() {
        return t.virtual;
      },
      get fallback() {
        return $();
      },
      get children() {
        return u(Pt, {
          get items() {
            return a.leftList;
          },
          itemEstimatedSize: 30,
          get itemComponent() {
            return {
              component: qg,
              props: {
                renderSourceItem: t.renderSourceItem,
                onChecked: d
              }
            };
          }
        });
      }
    })), m(P, () => i().length, null), m(N, u(V, {
      get when() {
        return i().length;
      },
      get children() {
        return u(Ne, {
          size: "small",
          theme: "borderless",
          class: "cm-teleport-clear",
          onClick: h,
          children: "清空"
        });
      }
    }), null), m(D, u(V, {
      get when() {
        return t.virtual;
      },
      get fallback() {
        return w();
      },
      get children() {
        return u(Pt, {
          get items() {
            return a.rightList;
          },
          itemEstimatedSize: 30,
          get itemComponent() {
            return {
              component: jg,
              props: {
                renderSelectedItem: t.renderSelectedItem,
                onRemoveItem: o,
                store: a
              }
            };
          }
        });
      }
    })), f;
  })();
}
const qg = (e) => {
  const t = e.item;
  return u(V, {
    get when() {
      return t.children?.length;
    },
    get fallback() {
      return (() => {
        var n = Gi(), r = e.ref;
        return typeof r == "function" ? Z(r, n) : e.ref = n, m(n, () => e.renderSourceItem?.(t, (i) => {
          e.onChecked?.(i, t);
        }) || u(Ke, {
          ref(i) {
            var l = e.ref;
            typeof l == "function" ? l(i) : e.ref = i;
          },
          get disabled() {
            return t.disabled;
          },
          get checked() {
            return t.checked;
          },
          onChange: (i) => e.onChecked(i, t),
          get label() {
            return t.label;
          }
        })), n;
      })();
    },
    get children() {
      var n = Xi(), r = e.ref;
      return typeof r == "function" ? Z(r, n) : e.ref = n, m(n, () => t.label), n;
    }
  });
}, jg = (e) => {
  const t = e.item;
  return u(V, {
    when: !!t,
    get children() {
      return (() => {
        var n = Gi(), r = e.ref;
        return typeof r == "function" ? Z(r, n) : e.ref = n, m(n, () => e.renderSelectedItem?.(t, () => {
          e.onRemoveItem?.(t);
        }) || (() => {
          var i = Ki();
          return m(i, u(qe, {
            get children() {
              return t.label;
            }
          }), null), m(i, u(V, {
            get when() {
              return !t.disabled;
            },
            get children() {
              return u(ze, {
                class: "cm-teleport-right-item-close",
                onClick: () => e.onRemoveItem?.(t)
              });
            }
          }), null), i;
        })()), n;
      })();
    }
  });
};
var Wg = /* @__PURE__ */ x("<div class=cm-timeline-time>"), Ug = /* @__PURE__ */ x("<div class=cm-timeline-item><div class=cm-timeline-item-tail></div><div></div><div class=cm-timeline-item-content>");
function Xg(e) {
  const t = e.color ?? "blue", n = () => U(e, "cm-timeline-item-head", {
    [`cm-timeline-item-head-${t}`]: t,
    "cm-timeline-item-head-custom": e.icon,
    "cm-timeline-item-head-fill": e.fill
  });
  return (() => {
    var r = Ug(), i = r.firstChild, l = i.nextSibling, a = l.nextSibling;
    return m(l, () => e.icon), m(a, () => e.children, null), m(a, u(V, {
      get when() {
        return e.time;
      },
      get children() {
        var s = Wg();
        return m(s, () => e.time), s;
      }
    }), null), B((s) => j(l, n(), s)), r;
  })();
}
var Kg = /* @__PURE__ */ x("<div>");
function Gg(e) {
  const t = () => U(e, "cm-timeline", {
    [`cm-timeline-${e.mode}`]: e.mode
  });
  return (() => {
    var n = Kg();
    return m(n, () => e.children), B((r) => {
      var i = t(), l = e.style;
      return r.e = j(n, i, r.e), r.t = W(n, l, r.t), r;
    }, {
      e: void 0,
      t: void 0
    }), n;
  })();
}
Gg.Item = Xg;
async function Zg(e) {
  if (me)
    return !1;
  if (navigator.clipboard && window.isSecureContext)
    try {
      return await navigator.clipboard.writeText(e), !0;
    } catch {
      return !1;
    }
  else {
    const t = document.createElement("textarea");
    return document.body.appendChild(t), t.setAttribute("value", e), t.select(), document.execCommand("copy"), document.body.removeChild(t), !0;
  }
}
var Jg = /* @__PURE__ */ x("<span class=cm-typograghy-copyed>"), Qg = /* @__PURE__ */ x("<div>"), pg = /* @__PURE__ */ x("<span class=cm-typograghy-copy>");
function Iv(e) {
  const [t, n] = K(!1), r = () => e.size || "normal", i = () => U(e, "cm-typograghy-paragraph", {
    [`cm-typograghy-paragraph-${r()}`]: r(),
    [`cm-typograghy-paragraph-${e.type}`]: !!e.type,
    "cm-typograghy-extended": e.spacing === "extended"
  });
  let l;
  async function a() {
    const s = await Zg(e.copyText ?? l.innerText);
    n(s), s && (e.onCopy && e.onCopy(), setTimeout(() => {
      n(!1);
    }, 4e3));
  }
  return (() => {
    var s = Qg(), c = l;
    return typeof c == "function" ? Z(c, s) : l = s, m(s, () => e.children, null), m(s, u(V, {
      get when() {
        return e.copyable;
      },
      get children() {
        return u(V, {
          get when() {
            return t();
          },
          get fallback() {
            return (() => {
              var d = pg();
              return d.$$click = a, m(d, u(vl, {})), d;
            })();
          },
          get children() {
            var d = Jg();
            return m(d, u(ei, {})), d;
          }
        });
      }
    }), null), B((d) => {
      var o = e.style, h = i();
      return d.e = W(s, o, d.e), d.t = j(s, h, d.t), d;
    }, {
      e: void 0,
      t: void 0
    }), s;
  })();
}
ae(["click"]);
var em = /* @__PURE__ */ x("<h1>"), tm = /* @__PURE__ */ x("<h2>"), nm = /* @__PURE__ */ x("<h3>"), rm = /* @__PURE__ */ x("<h4>"), im = /* @__PURE__ */ x("<h5>"), lm = /* @__PURE__ */ x("<h6>");
function zv(e) {
  const t = () => e.heading || 1, n = () => U(e, "cm-typograghy-title", `cm-typograghy-h${t()}`, {
    "cm-typograghy-title-inline": e.inline,
    [`cm-typograghy-title-prefix-${e.prefix}`]: e.prefix
  }), r = () => be(e, {
    "background-image": e.gradient ? `linear-gradient(${e.gradient.join(",")})` : "",
    "-webkit-text-fill-color": e.gradient ? "transparent" : "",
    ["--cm-title-prefix-width"]: e.prefixWidth ?? (e.prefix === "bar" ? 4 : 8),
    ["--cm-title-prefix-gap"]: e.prefixGap ?? 16,
    ["--cm-title-prefix-color"]: typeof e.prefixColor == "string" ? e.prefixColor : "",
    ["--cm-title-prefix-gradient"]: e.prefixColor instanceof Array ? e.prefixColor.join(",") : ""
  }), i = [() => (() => {
    var l = em();
    return m(l, () => e.children), B((a) => {
      var s = n(), c = r();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })(), () => (() => {
    var l = tm();
    return m(l, () => e.children), B((a) => {
      var s = n(), c = r();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })(), () => (() => {
    var l = nm();
    return m(l, () => e.children), B((a) => {
      var s = n(), c = r();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })(), () => (() => {
    var l = rm();
    return m(l, () => e.children), B((a) => {
      var s = n(), c = r();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })(), () => (() => {
    var l = im();
    return m(l, () => e.children), B((a) => {
      var s = n(), c = r();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })(), () => (() => {
    var l = lm();
    return m(l, () => e.children), B((a) => {
      var s = n(), c = r();
      return a.e = j(l, s, a.e), a.t = W(l, c, a.t), a;
    }, {
      e: void 0,
      t: void 0
    }), l;
  })()];
  return u(Ji, {
    get component() {
      return i[t() - 1];
    }
  });
}
var am = /* @__PURE__ */ x("<span><a>");
function Nv(e) {
  const [t, n] = de(e, ["classList", "class", "children", "type", "disabled", "link", "icon", "mark", "code", "underline", "deleted", "strong", "size", "onCopy", "gradient"]), r = () => t.size || "normal", i = () => U(e, "cm-text cm-text-link", {
    [`cm-text-${t.type}`]: t.type,
    "cm-text-disabled": t.disabled,
    "cm-text-underline": t.underline,
    "cm-text-deleted": t.deleted,
    "cm-text-strong": t.strong,
    [`cm-text-${r()}`]: r()
  }), l = () => be(e, {
    "background-image": t.gradient ? `linear-gradient(${t.gradient.join(",")})` : "",
    "-webkit-text-fill-color": e.gradient ? "transparent" : ""
  });
  return (() => {
    var a = am(), s = a.firstChild;
    return ye(s, te(n, {
      get style() {
        return l();
      },
      get href() {
        return t.link;
      }
    }), !1, !0), m(s, () => t.icon, null), m(s, () => t.children, null), B((c) => j(a, i(), c)), a;
  })();
}
function sm(e) {
  return Object.keys(e).map((t) => `${t}: ${e[t]};`).join(" ");
}
function Kr() {
  return window.devicePixelRatio || 1;
}
function Ln(e, t, n, r) {
  e.translate(t, n), e.rotate(Math.PI / 180 * Number(r)), e.translate(-t, -n);
}
const cm = (e, t) => {
  let n = !1;
  return e.removedNodes.length && (n = Array.from(e.removedNodes).some((r) => r === t)), e.type === "attributes" && e.target === t && (n = !0), n;
};
var om = /* @__PURE__ */ x("<div>");
const Sn = 2, Gr = 3;
function Ov(e) {
  const t = () => U(e, "cm-watermark");
  let n, r, i = !1;
  const l = () => e.gap ?? [100, 100], a = () => l()?.[0] ?? 100, s = () => l()?.[1] ?? 100, c = () => a() / 2, d = () => s() / 2, o = () => e.offset?.[0] ?? c(), h = () => e.offset?.[1] ?? d(), g = () => e.font?.fontSize ?? 14, $ = () => e.font?.fontWeight ?? "normal", w = () => e.font?.fontStyle ?? "normal", f = () => e.font?.fontFamily ?? "sans-serif", v = () => e.font?.color ?? "rgba(0,0,0,.26)", y = () => {
    const b = {
      "z-index": e.zIndex ?? 9,
      position: "absolute",
      left: "0px",
      top: "0px",
      width: "100%",
      height: "100%",
      "pointer-events": "none",
      "background-repeat": "repeat",
      "background-position": ""
    };
    let k = o() - c(), M = h() - d();
    return k > 0 && (b.left = `${k}px`, b.width = `calc(100% - ${k}px)`, k = 0), M > 0 && (b.top = `${M}px`, b.height = `calc(100% - ${M}px)`, M = 0), b["background-position"] = `${k}px ${M}px`, b;
  }, C = () => {
    r && (r.remove(), r = void 0);
  }, _ = (b, k) => {
    n && r && (i = !0, r.setAttribute("style", sm({
      ...y(),
      "background-image": `url('${b}')`,
      "background-size": `${(a() + k) * Sn}px`
    })), n?.append(r), setTimeout(() => {
      i = !1;
    }));
  }, L = (b) => {
    let k = 120, M = 64;
    const S = e.content, O = e.image, R = e.width, T = e.height;
    if (!O && b.measureText) {
      b.font = `${Number(g())}px ${f()}`;
      const I = Array.isArray(S) ? S : [S], A = I.map((z) => b.measureText(z).width);
      k = Math.ceil(Math.max(...A)), M = Number(g()) * I.length + (I.length - 1) * Gr;
    }
    return [R ?? k, T ?? M];
  }, F = (b, k, M, S, O) => {
    const R = Kr(), T = e.content, I = Number(g()) * R;
    b.font = `${w()} normal ${$()} ${I}px/${O}px ${f()}`, b.fillStyle = v(), b.textAlign = "center", b.textBaseline = "top", b.translate(S / 2, 0), (Array.isArray(T) ? T : [T])?.forEach((z, H) => {
      b.fillText(z ?? "", k, M + H * (I + Gr * R));
    });
  };
  Q(() => {
    N();
  });
  const N = () => {
    const b = document.createElement("canvas"), k = b.getContext("2d"), M = e.image, S = e.rotate ?? -22;
    if (k) {
      r || (r = document.createElement("div"));
      const O = Kr(), [R, T] = L(k), I = (a() + R) * O, A = (s() + T) * O;
      b.setAttribute("width", `${I * Sn}px`), b.setAttribute("height", `${A * Sn}px`);
      const z = a() * O / 2, H = s() * O / 2, Y = R * O, q = T * O, G = (Y + a() * O) / 2, X = (q + s() * O) / 2, J = z + I, ce = H + A, re = G + I, xe = X + A;
      if (k.save(), Ln(k, G, X, S), M) {
        const Te = new Image();
        Te.onload = () => {
          k.drawImage(Te, z, H, Y, q), k.restore(), Ln(k, re, xe, S), k.drawImage(Te, J, ce, Y, q), _(b.toDataURL(), R);
        }, Te.crossOrigin = "anonymous", Te.referrerPolicy = "no-referrer", Te.src = M;
      } else
        F(k, z, H, Y, q), k.restore(), Ln(k, re, xe, S), F(k, J, ce, Y, q), _(b.toDataURL(), R);
    }
  };
  let P;
  const D = (b) => {
    i || b.forEach((k) => {
      cm(k, r) && (C(), N());
    });
  };
  ge(() => {
    P = new MutationObserver(D), P.observe(n, {
      attributes: !0,
      subtree: !0,
      childList: !0,
      attributeFilter: ["style", "class"]
    });
  }), he(() => {
    C(), P?.disconnect(), P = void 0;
  });
  const E = () => be(e, {
    position: "relative"
  });
  return (() => {
    var b = om(), k = n;
    return typeof k == "function" ? Z(k, b) : n = b, m(b, () => e.children), B((M) => {
      var S = t(), O = E();
      return M.e = j(b, S, M.e), M.t = W(b, O, M.t), M;
    }, {
      e: void 0,
      t: void 0
    }), b;
  })();
}
export {
  Ll as Accordion,
  ri as AccordionContext,
  Tl as Anchor,
  Im as AutoComplete,
  lr as Avatar,
  Cm as AvatarList,
  km as BackTop,
  _m as Badge,
  Lm as BadgeRibbon,
  Sm as Banner,
  jl as BothSide,
  ga as Breadcrumb,
  Ne as Button,
  ym as ButtonGroup,
  li as ButtonGroupContext,
  dv as Captcha,
  Mm as Card,
  Sa as Carousel,
  zm as Cascader,
  xm as Center,
  Mo as Checkbox,
  Om as CheckboxGroup,
  Nm as CheckboxGroupContext,
  Fm as Col,
  bl as Collapase,
  Bm as ColorPicker,
  mi as Context,
  Tm as CountDown,
  Dm as CountUp,
  Hm as Datepicker,
  Am as Divider,
  An as Draggable,
  Rm as Drawer,
  Ae as Dropdown,
  Rn as DropdownItem,
  In as DropdownMenu,
  ov as Email,
  pn as Exception,
  bm as FixedView,
  yv as Floor,
  Vh as FooterNavigation,
  $v as FooterNavigations,
  ps as Form,
  dn as FormContext,
  Bt as FormItem,
  xi as FormItemContext,
  $m as HView,
  Nn as Image,
  $i as ImagePreview,
  tv as IndexList,
  Ke as InnerCheckbox,
  Ve as Input,
  Ym as InputGroup,
  Nv as Link,
  Hu as List,
  mt as Loading,
  iv as Login,
  zi as LoginContext,
  fv as Menu,
  hv as MenuGroup,
  Gn as MenuItem,
  cv as Mobile,
  Lh as Modal,
  Qn as NO_DATA_IMAGE,
  Dd as Option,
  Xm as OptionGroup,
  wv as PageFooter,
  bv as Pagination,
  Iv as Paragraph,
  sv as Password,
  xv as Popconfirm,
  un as Popover,
  Ci as Progress,
  Cv as QRCode,
  vf as QRCodeCanvas,
  qm as Radio,
  jm as RadioGroup,
  Wm as Rate,
  kv as Result,
  Em as Row,
  Um as Search,
  Vd as Select,
  _v as SideBySide,
  bt as Skeleton,
  Km as Slider,
  nv as Slot,
  st as Space,
  yi as Spin,
  Gm as Spinner,
  Lv as Split,
  Uf as Steps,
  uv as SubMenu,
  lv as Submit,
  Zm as Switch,
  Dv as TabPane,
  Sv as Table,
  Pv as TableStyleLayout,
  Ev as TableStyleLayoutCol,
  Fv as TableStyleLayoutLabel,
  Mv as TableStyleLayoutRow,
  Tv as TableStyleLayoutValue,
  Av as Tabs,
  Ct as Tag,
  ac as TagGroup,
  Rv as TeleportBox,
  qe as Text,
  Jm as Textarea,
  Gg as Timeline,
  Vm as Timepicker,
  zv as Title,
  Jt as Tooltip,
  Qm as Transfer,
  mu as Tree,
  Fi as TreeCheckMod,
  Ti as TreeContext,
  pm as TreeSelect,
  fu as TreeStore,
  ev as Upload,
  av as UserName,
  wm as VView,
  wt as Value,
  Zn as View,
  Pt as VirtualList,
  Ei as VirtualListCore,
  Ov as Watermark,
  ki as WordCount,
  Fe as createField,
  De as createModel,
  As as downloadFile,
  it as dragHoverPartEnum,
  ir as getRandomIntInclusive,
  Ue as isColor,
  rv as loadingBar,
  gv as message,
  mv as modal,
  zl as nextFrame,
  vv as notice,
  ii as scrollTop,
  Sl as useAccordionContext,
  Fn as useAlignPostion,
  Ma as useCarouselContext,
  Li as useCascaderContext,
  U as useClassList,
  Nl as useClickAnimating,
  Tn as useClickOutside,
  Zg as useCopy,
  Vt as useDatepickerContext,
  vt as useDebounce,
  vi as useDropdownConext,
  Ju as useForm,
  Qs as useFormContext,
  Hc as useFormItem,
  Yu as useListContext,
  Ni as useLoginContext,
  er as useMenuContext,
  hs as useMoveObserver,
  nt as usePortal,
  ai as useSlots,
  be as useStyle,
  nr as useTableContext,
  Rg as useTableStyleLayoutContext,
  cd as useTimepickerContext,
  Nt as useTransition,
  gu as useTreeContext,
  $t as useValidation,
  rt as usezIndex
};
