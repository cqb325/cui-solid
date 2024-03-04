import { use as j, insert as g, effect as P, classList as O, style as Y, template as b, spread as _e, mergeProps as te, delegateEvents as J, createComponent as f, className as Le, setAttribute as G, addEventListener as de, memo as Z, Portal as ct, untrack as fn, render as at, Show as st, Dynamic as Yn } from "solid-js/web";
import { createSignal as q, createEffect as K, onMount as re, onCleanup as le, splitProps as ce, createContext as fe, useContext as he, children as xe, untrack as ye, For as p, Show as V, Switch as we, Match as Q, createComputed as Xe, on as Vn, createUniqueId as me, mergeProps as Hn, batch as Te, createMemo as et } from "solid-js";
import { createStore as ie, produce as ne, unwrap as Xn } from "solid-js/store";
import ee from "dayjs";
import { CountUp as Un } from "countup.js";
import qn from "tinycolor2";
import { VirtualList as Wn, VirtualListCore as jn } from "cui-virtual-list";
function H(e, ...t) {
  let n = {
    ...e.classList
  };
  if (e.class && (n[e.class] = !0), t)
    for (let l = 0; l < t.length; l++) {
      const r = t[l];
      if (typeof r == "string")
        n[r] = !0;
      else
        for (let i in r)
          n[i] = r[i];
    }
  return n;
}
function Ce(e, t) {
  let n = {
    ...t
  };
  return e.style && (typeof e.style == "string" ? n[e.style] = !0 : typeof e.style == "object" && (n = {
    ...n,
    ...e.style
  })), n;
}
function ue(e, t, n) {
  let l, r;
  return e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (l = e[t][0], r = e[t][1]) : [l, r] = q(e[t] || n), [l, r];
}
const Kn = /* @__PURE__ */ b("<div>");
function hn(e) {
  const t = () => H(e, "cm-collapase");
  let n;
  function l() {
    const i = document.createElement("surface"), s = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (let c in s)
      if (i.style[c] !== void 0)
        return s[c];
  }
  function r() {
    e.open && n && (n.style.height = "auto"), e.onEnd && e.onEnd(e.open);
  }
  return K(() => {
    if (!n)
      return;
    if (e.open) {
      n.style.height = "auto";
      const s = n.getBoundingClientRect().height;
      e.onOpen && e.onOpen(s), n.style.height = "0px", n.classList.add("cm-collapase-open"), setTimeout(() => {
        n.style.height = `${s}px`;
      }, 0);
    } else {
      const s = n.getBoundingClientRect().height;
      n.classList.add("animation"), n.classList.remove("cm-collapase-open"), n.style.height = `${s}px`, setTimeout(() => {
        n.style.height = "0px";
      }, 0);
    }
  }), re(() => {
    if (n) {
      const i = l();
      n.addEventListener(i, r);
    }
  }), le(() => {
    const i = l();
    n && n.removeEventListener(i, r);
  }), e.ref && e.ref({
    getHeight() {
      const i = n.style.height;
      n.style.transition = "none", n.style.height = "auto";
      const s = n.offsetHeight;
      return n.style.transition = "", n.style.height = i, s;
    }
  }), (() => {
    const i = Kn(), s = n;
    return typeof s == "function" ? j(s, i) : n = i, g(i, () => e.children), P((c) => {
      const d = t(), a = e.style;
      return c._v$ = O(i, d, c._v$), c._v$2 = Y(i, a, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
const Gn = /* @__PURE__ */ b("<div>"), W = (e) => {
  const t = () => H(e, "cm-icon", `cm-icon-${e.name}`, {
    "cm-icon-spin": e.spin
  }), [n, l] = ce(e, ["color", "size", "spin", "classList", "class", "name", "style", "children", "ref"]), r = () => Ce(e, {
    "font-size": (n.size || 14) + "px",
    color: n.color
  });
  return (() => {
    const i = Gn(), s = n.ref;
    return typeof s == "function" ? j(s, i) : n.ref = i, _e(i, te({
      get classList() {
        return t();
      },
      get style() {
        return r();
      }
    }, l), !1, !0), g(i, () => n.children), i;
  })();
}, Zn = /* @__PURE__ */ b('<div class="cm-accordion-content">'), Jn = /* @__PURE__ */ b('<div><div class="cm-accordion-title"><div class="cm-accordion-item-title-text">');
function Qn(e) {
  const t = ti(), n = t?.signal, l = t?.onSelect, r = t?.flex ? !1 : t?.multi, [i, s] = n, [c, d] = q(!1), [a, o] = q(!1), u = () => {
    let $, m = !1;
    if (r) {
      const C = i();
      if (C.includes(e.name)) {
        const w = C.indexOf(e.name);
        C.splice(w, 1), $ = [].concat(C), m = !1;
      } else
        C.push(e.name), $ = [].concat(C), m = !0;
    } else if (i() === e.name) {
      if (t?.flex)
        return;
      $ = "", m = !1;
    } else
      $ = e.name, m = !0;
    s($), l && l(e.name, m, $);
  };
  K(() => {
    let $ = !1;
    const m = i();
    r ? $ = m.includes(e.name) : $ = m === e.name, o(!1), d($);
  });
  const h = () => H(e, "cm-accordion-item", {
    "cm-accordion-item-active": c(),
    "cm-accordion-item-full": c() && a()
  }), v = () => {
    o(!0);
  };
  return (() => {
    const $ = Jn(), m = $.firstChild, C = m.firstChild;
    return m.$$click = u, g(m, () => e.icon, C), g(C, () => e.title), g(m, f(W, {
      class: "cm-accordion-title-arrow",
      name: "chevron-right"
    }), null), g($, f(hn, {
      get open() {
        return c();
      },
      onEnd: v,
      get children() {
        const w = Zn();
        return g(w, () => e.children), w;
      }
    }), null), P((w) => {
      const L = h(), S = e.style;
      return w._v$ = O($, L, w._v$), w._v$2 = Y($, S, w._v$2), w;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), $;
  })();
}
J(["click"]);
const pn = /* @__PURE__ */ b("<div>"), mn = fe();
function ei(e) {
  const t = () => H(e, "cm-accordion", {
    "cm-flex-accordion": e.flex
  }), [n, l] = ue(e, "activeKey", e.multi ? [] : ""), r = {
    flex: e.flex,
    multi: e.multi,
    signal: [n, l],
    onSelect: e.onSelect
  };
  return f(mn.Provider, {
    value: r,
    get children() {
      const i = pn();
      return g(i, () => e.children), P((s) => {
        const c = t(), d = e.style;
        return s._v$ = O(i, c, s._v$), s._v$2 = Y(i, d, s._v$2), s;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), i;
    }
  });
}
ei.Item = Qn;
const ti = () => he(mn);
function gn(e, t = 0, n, l = 500, r) {
  window.requestAnimationFrame || (window.requestAnimationFrame = function(d) {
    return window.setTimeout(d, 1e3 / 60);
  });
  const i = Math.abs(t - n), s = Math.ceil(i / l * 50);
  function c(d, a, o) {
    if (d === a) {
      r && r();
      return;
    }
    let u = d + o > a ? a : d + o;
    d > a && (u = d - o < a ? a : d - o), e === window ? window.scrollTo(u, u) : e.scrollTop = u, window.requestAnimationFrame(() => c(u, a, o));
  }
  c(t, n, s);
}
function ni(e) {
  const t = xe(() => e.children), n = () => t.toArray();
  return e.subItems = n, e;
}
const ii = /* @__PURE__ */ b('<div class="cm-anchor-link"><a class="cm-anchor-link-title">'), li = /* @__PURE__ */ b('<div><div class="cm-anchor-wrapper"><div class="cm-anchor-inner"><div><span class="cm-anchor-ink-ball">');
function ri(e) {
  const t = () => H(e, "cm-anchor"), n = xe(() => e.children), l = () => n.toArray(), [r, i] = ie({
    inkTop: 0,
    inkHeight: 0,
    currentId: "",
    currentLink: "",
    animating: !1,
    links: [],
    upperFirstTitle: !0
  });
  K(() => {
    i("links", l());
  });
  let s = null, c = null, d = 0, a = e.bounds || 5, o = [], u = e.mode ?? "hash", h = e.showInk ?? !1;
  const v = () => {
    let k;
    if (u === "hash") {
      const _ = window.location.href;
      k = /#([^#]+)$/.exec(_);
    } else {
      let _ = window.location.href;
      const y = _.includes("?") ? _.split("?")[1] : "", M = new URLSearchParams(y);
      M.has("_to") && M.get("_to") && (k = [], k[0] = M.get("_to"), k[1] = M.get("_to")?.replace("#", ""));
    }
    if (!k) {
      setTimeout(() => {
        const _ = document.documentElement.scrollTop || document.body.scrollTop;
        L(_);
      }, 10);
      return;
    }
    i("currentLink", k[0]), i("currentId", k[1]);
  }, $ = () => {
    s && s.removeEventListener("scroll", m), window.removeEventListener("hashchange", v);
  }, m = (k) => {
    if (r.animating)
      return;
    const _ = document.documentElement.scrollTop || document.body.scrollTop || k.target.scrollTop;
    L(_);
  }, C = () => {
    const k = document.getElementById(r.currentId), _ = document.querySelector(`a[data-href="${r.currentLink}"]`);
    let y = e.scrollOffset || 0;
    if (_ && (y = parseFloat(_.getAttribute("data-scroll-offset"))), !k)
      return;
    const M = k.offsetTop - d - y;
    i("animating", !0), gn(s, c.scrollTop, M, 600, () => {
      i("animating", !1);
    });
  };
  K(() => {
    r.currentLink;
    const k = document.querySelector(`a[data-href="${r.currentLink}"]`)?.parentElement;
    if (!k)
      return;
    const _ = k.offsetTop, y = k.getBoundingClientRect().height, M = y / 4, F = _ < 0 ? e.offsetTop || 0 : _;
    ye(() => {
      i("inkTop", F + M / 2), i("inkHeight", y * 3 / 4);
    });
  });
  const w = () => {
    s = e.container ? typeof e.container == "string" ? document.querySelector(e.container) : e.container : window, c = e.container ? s : document.documentElement || document.body;
  }, L = (k) => {
    let _ = -1, y = o.length, M = {
      link: "#",
      offset: 0
    };
    for (k += a; ++_ < y; ) {
      let F = o[_], z = o[_ + 1];
      if (k >= F.offset && k < (z && z.offset || 1 / 0)) {
        M = o[_];
        break;
      }
    }
    i("currentLink", M.link);
  }, S = () => s === window, x = () => {
    v(), setTimeout(() => {
      $(), w(), d = S() ? 0 : c.offsetTop, C(), s.addEventListener("scroll", m), window.addEventListener("hashchange", v);
    }, 0);
  };
  K(() => {
    const k = r.links.map((_) => _.href);
    ye(() => {
      const _ = k.map((M) => M.split("#")[1]);
      c || w();
      const y = [];
      _.forEach((M) => {
        const F = document.getElementById(M);
        F && y.push({
          link: `#${M}`,
          offset: F.offsetTop - c.offsetTop
        });
      }), o = y;
    });
  });
  const E = (k, _) => {
    if (_.stopPropagation && _.stopPropagation(), _.preventDefault && _.preventDefault(), i("currentLink", k), i("currentId", k.replace("#", "")), C(), u === "hash")
      window.location.hash = k;
    else {
      let y = window.location.href;
      const M = y.includes("?") ? y.split("?")[1] : "", F = location.hash.indexOf("?"), z = F > -1 ? location.hash.substring(0, F) : location.hash, D = new URLSearchParams(M);
      D.set("_to", k), window.history.replaceState({}, "", `${location.pathname}${z}?${D.toString()}`);
    }
  };
  re(() => {
    x();
    let k = setInterval(() => {
      r.links.map((M) => M.href).map((M) => M.split("#")[1]).forEach((M, F) => {
        const z = document.getElementById(M);
        if (z) {
          const D = z.offsetTop - c.offsetTop;
          o[F] && o[F].offset !== D && (o[F].offset = D);
        }
      });
    }, 500);
    le(() => {
      clearInterval(k);
    });
  }), le(() => {
    $();
  });
  const A = (k) => k && k.length ? f(p, {
    each: k,
    children: (_) => (() => {
      const y = ii(), M = y.firstChild;
      return M.$$click = (F) => {
        E(_.href, F);
      }, g(M, () => _.title), g(y, () => A(_.subItems()), null), P((F) => {
        const z = _.href, D = e.scrollOffset || 0, R = _.href, T = _.title;
        return z !== F._v$ && G(M, "href", F._v$ = z), D !== F._v$2 && G(M, "data-scroll-offset", F._v$2 = D), R !== F._v$3 && G(M, "data-href", F._v$3 = R), T !== F._v$4 && G(M, "title", F._v$4 = T), F;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      }), y;
    })()
  }) : null;
  return (() => {
    const k = li(), _ = k.firstChild, y = _.firstChild, M = y.firstChild, F = M.firstChild;
    return Le(M, "cm-anchor-ink " + (h ? "cm-anchor-show" : "")), g(y, () => A(r.links), null), P((z) => {
      const D = t(), R = `${r.inkTop}px`, T = `${r.inkHeight}px`;
      return z._v$5 = O(k, D, z._v$5), R !== z._v$6 && ((z._v$6 = R) != null ? F.style.setProperty("top", R) : F.style.removeProperty("top")), T !== z._v$7 && ((z._v$7 = T) != null ? F.style.setProperty("height", T) : F.style.removeProperty("height")), z;
    }, {
      _v$5: void 0,
      _v$6: void 0,
      _v$7: void 0
    }), k;
  })();
}
ri.Link = ni;
J(["click"]);
const ci = /* @__PURE__ */ b('<div class="cm-avatar-hover">'), ai = /* @__PURE__ */ b('<img alt="">'), si = /* @__PURE__ */ b("<span>"), oi = /* @__PURE__ */ b('<span class="cm-avatar-string">');
function It(e) {
  if (e.asProps)
    return e;
  const [t, n] = q(!1), l = () => H(e, "cm-avatar", {
    [`cm-avatar-${e.size}`]: e.size,
    "cm-avatar-icon": e.icon,
    "cm-avatar-img": e.src,
    "cm-avatar-square": e.shape === "square"
  });
  let r, i;
  re(() => {
    if (i && r) {
      r.style.Transform = "", r.style.webkitTransform = "", r.style.mozTransform = "";
      const a = i.clientWidth, u = r.getBoundingClientRect().width, v = Math.acos(21 / a), $ = Math.sin(v) * a, m = u > a ? $ / u : 1;
      r.style.Transform = `scale(${m})`, r.style.webkitTransform = `scale(${m})`, r.style.mozTransform = `scale(${m})`;
    }
  });
  const s = () => {
    let a = {
      ...e.style
    };
    return typeof e.size == "number" && (a.width = e.size + "px", a.height = e.size + "px"), a;
  }, c = (a) => {
    n(!0), e.onMouseEnter && e.onMouseEnter(a);
  }, d = (a) => {
    n(!1), e.onMouseLeave && e.onMouseLeave(a);
  };
  return (() => {
    const a = si();
    a.addEventListener("mouseleave", d), a.addEventListener("mouseenter", c);
    const o = i;
    return typeof o == "function" ? j(o, a) : i = a, de(a, "click", e.onClick, !0), g(a, f(V, {
      get when() {
        return t();
      },
      get children() {
        const u = ci();
        return g(u, () => e.hoverMask), u;
      }
    }), null), g(a, f(we, {
      get fallback() {
        return (() => {
          const u = oi(), h = r;
          return typeof h == "function" ? j(h, u) : r = u, g(u, () => e.children), u;
        })();
      },
      get children() {
        return [f(Q, {
          get when() {
            return e.src;
          },
          get children() {
            const u = ai();
            return P(() => G(u, "src", e.src)), u;
          }
        }), f(Q, {
          get when() {
            return e.icon;
          },
          get children() {
            return e.icon;
          }
        })];
      }
    }), null), P((u) => {
      const h = l(), v = s();
      return u._v$ = O(a, h, u._v$), u._v$2 = Y(a, v, u._v$2), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
J(["click"]);
const di = /* @__PURE__ */ b('<div><div class="cm-tooltip-rel"></div><div><div class="cm-tooltip-content"><svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-tooltip-arrow"><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1"></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)"></path></svg><div class="cm-tooltip-inner cm-tooltip-inner-with-width">');
function ui(e) {
  const [t, n] = q(!1), [l, r] = q({
    display: "none",
    visibility: "hidden"
  }), i = () => e.align ?? "bottom", s = () => {
    e.disabled || (n(!0), r({
      display: "block",
      visibility: "visible"
    }));
  }, c = () => {
    e.disabled || (n(!1), setTimeout(() => {
      r({
        display: "none",
        visibility: "hidden"
      });
    }, 250));
  }, d = () => H(e, "cm-tooltip", i(), {
    [`cm-tooltip-${e.theme}`]: e.theme
  }), a = () => ({
    "cm-tooltip-popper": !0,
    animation: t()
  });
  return (() => {
    const o = di(), u = o.firstChild, h = u.nextSibling, v = h.firstChild, $ = v.firstChild, m = $.nextSibling;
    return o.addEventListener("mouseleave", c), o.addEventListener("mouseenter", s), g(u, () => e.children), g(m, () => e.content), P((C) => {
      const w = d(), L = e.style, S = a(), x = i(), E = l();
      return C._v$ = O(o, w, C._v$), C._v$2 = Y(o, L, C._v$2), C._v$3 = O(h, S, C._v$3), x !== C._v$4 && G(h, "x-placement", C._v$4 = x), C._v$5 = Y(h, E, C._v$5), C;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), o;
  })();
}
const At = /* @__PURE__ */ b('<div class="cm-avatar-list-item">'), fi = /* @__PURE__ */ b("<div>");
function ou(e) {
  const t = () => H(e, "cm-avatar-list", {
    [`cm-avatar-list-${e.size}`]: e.size
  }), n = () => e.max ?? Number.MAX_VALUE, l = xe(() => e.children), r = () => l.toArray(), i = () => r().length;
  return (() => {
    const s = fi();
    return g(s, f(p, {
      get each() {
        return r();
      },
      children: (c, d) => {
        if (c.asProps = !1, d() < n())
          return (() => {
            const a = At();
            return g(a, f(ui, {
              get align() {
                return e.align || "top";
              },
              get content() {
                return c.title;
              },
              get children() {
                return f(It, te(c, {
                  get size() {
                    return e.size;
                  }
                }));
              }
            })), a;
          })();
      }
    }), null), g(s, f(V, {
      get when() {
        return i() > n();
      },
      get children() {
        const c = At();
        return g(c, f(It, {
          get size() {
            return e.size;
          },
          get style() {
            return e.excessStyle;
          },
          get children() {
            return ["+", Z(() => i() - n())];
          }
        })), c;
      }
    }), null), P((c) => O(s, t(), c)), s;
  })();
}
const hi = /* @__PURE__ */ b('<div><div class="cm-back-top-inner">');
function du(e) {
  const [t, n] = q(!1), l = () => H(e, "cm-back-top", {
    "cm-back-top-show": t()
  }), r = e.bottom ?? 30, i = e.right ?? 30, s = e.height ?? 400, c = e.duration ?? 1e3, d = () => ({
    ...e.style,
    bottom: `${r}px`,
    right: `${i}px`
  }), a = () => {
    const u = document.documentElement.scrollTop || document.body.scrollTop;
    gn(window, u, 0, c), e.onClick && e.onClick();
  }, o = () => {
    n(window.pageYOffset >= s);
  };
  return re(() => {
    window.addEventListener("scroll", o), window.addEventListener("resize", o);
  }), le(() => {
    window.removeEventListener("scroll", o), window.removeEventListener("resize", o);
  }), (() => {
    const u = hi(), h = u.firstChild;
    return u.$$click = a, g(h, () => e.children), P((v) => {
      const $ = l(), m = d();
      return v._v$ = O(u, $, v._v$), v._v$2 = Y(u, m, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), u;
  })();
}
J(["click"]);
const mi = /* @__PURE__ */ b("<sup>"), gi = /* @__PURE__ */ b('<sup class="cm-badge-dot">'), Ft = /* @__PURE__ */ b("<span>"), vi = /* @__PURE__ */ b('<span class="cm-badge-status-text">');
function $i(e) {
  if (e && (e.startsWith("#") || e.startsWith("rgb") || e.startsWith("hsl"))) {
    var t = new Option().style;
    return t.color = e, t.color.startsWith("rgb");
  }
  return !1;
}
function uu(e) {
  const t = e.overflowCount ?? 99, n = () => H(e, "cm-badge", {
    "cm-badge-status": e.status
  }), l = () => {
    const d = {};
    return e.offset && e.offset.length === 2 && (d["margin-top"] = `${e.offset[0]}px`, d["margin-right"] = `${e.offset[1]}px`), d;
  }, r = () => e.count && e.count > t ? Math.min(t, e.count) + "+" : e.count, i = () => ({
    "cm-badge-status-dot": !0,
    [`cm-badge-status-${e.status}`]: !!e.status,
    [`cm-badge-status-${e.color}`]: !!e.color && e.color.indexOf("#") === -1
  }), s = () => ({
    "background-color": $i(e.color) ? e.color : ""
  }), c = () => ({
    "cm-badge-count": !0,
    [`cm-badge-count-${e.type}`]: !!e.type
  });
  return (() => {
    const d = Ft();
    return g(d, () => e.children, null), g(d, f(V, {
      get when() {
        return !e.status && !e.color;
      },
      get fallback() {
        return [(() => {
          const a = Ft();
          return P((o) => {
            const u = i(), h = s();
            return o._v$3 = O(a, u, o._v$3), o._v$4 = Y(a, h, o._v$4), o;
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), a;
        })(), (() => {
          const a = vi();
          return g(a, () => e.text), a;
        })()];
      },
      get children() {
        return [f(V, {
          get when() {
            return e.count !== void 0 || e.text !== void 0;
          },
          get children() {
            const a = mi();
            return g(a, r, null), g(a, () => e.text, null), P((o) => {
              const u = c(), h = l();
              return o._v$ = O(a, u, o._v$), o._v$2 = Y(a, h, o._v$2), o;
            }, {
              _v$: void 0,
              _v$2: void 0
            }), a;
          }
        }), f(V, {
          get when() {
            return e.dot !== void 0;
          },
          get children() {
            const a = gi();
            return P((o) => Y(a, l(), o)), a;
          }
        })];
      }
    }), null), P((a) => O(d, n(), a)), d;
  })();
}
const vn = (e) => {
  const t = xe(() => e), [n, l] = ie({
    default: []
  });
  return Xe(Vn(t, () => {
    l("default", []);
    for (const r of t.toArray()) {
      if (!r.name) {
        l("default", [...n.default, () => r]);
        continue;
      }
      l(r.name, () => r.children);
    }
  })), n;
}, _i = /* @__PURE__ */ b('<div class="cm-banner-icon">'), yi = /* @__PURE__ */ b('<div class="cm-banner-title">'), wi = /* @__PURE__ */ b('<div class="cm-banner-desc">'), bi = /* @__PURE__ */ b('<span class="cm-banner-close">'), xi = /* @__PURE__ */ b('<div class="cm-banner-extra">'), Ci = /* @__PURE__ */ b('<div><div class="cm-banner-body"><div class="cm-banner-content"><div class="cm-banner-content-body">');
function fu(e) {
  const [t, n] = ue(e, "visible", !0), l = () => H(e, "cm-banner", {
    [`cm-banner-${e.type}`]: e.type,
    ["cm-banner-bordered"]: e.bordered,
    ["cm-banner-full"]: e.fullMode ?? !0,
    ["cm-banner-not-full"]: e.fullMode === !1
  }), r = () => {
    let d = "";
    switch (e.type) {
      case "info": {
        d = "info";
        break;
      }
      case "success": {
        d = "check-circle";
        break;
      }
      case "warning": {
        d = "alert-circle";
        break;
      }
      case "error": {
        d = "x-circle";
        break;
      }
      default:
        d = "info";
    }
    return f(W, {
      name: d,
      size: 20
    });
  }, i = () => {
    n(!1), e.onClose && e.onClose();
  }, s = vn(e.children), c = e.icon === null ? null : e.icon ?? r();
  return f(V, {
    get when() {
      return t();
    },
    get children() {
      const d = Ci(), a = d.firstChild, o = a.firstChild, u = o.firstChild;
      return g(o, f(V, {
        when: c,
        get children() {
          const h = _i();
          return g(h, c), h;
        }
      }), u), g(u, f(V, {
        get when() {
          return e.title;
        },
        get children() {
          const h = yi();
          return g(h, () => e.title), h;
        }
      }), null), g(u, f(V, {
        get when() {
          return s.default;
        },
        get children() {
          const h = wi();
          return g(h, () => s.default), h;
        }
      }), null), g(a, f(V, {
        get when() {
          return e.closeIcon !== null;
        },
        get children() {
          const h = bi();
          return h.$$click = i, g(h, () => e.closeIcon ?? f(W, {
            name: "x"
          })), h;
        }
      }), null), g(d, f(V, {
        get when() {
          return s.extra;
        },
        get children() {
          const h = xi();
          return g(h, () => s.extra), h;
        }
      }), null), P((h) => O(d, l(), h)), d;
    }
  });
}
J(["click"]);
function ki(e) {
  return e;
}
const Li = /* @__PURE__ */ b("<div>"), Pe = (e) => {
  const t = () => e.dir ?? "h", n = () => e.wrap ?? !1, l = () => e.inline ?? !1, r = () => e.size ?? 8, i = () => e.align ?? "", s = () => H(e, "cm-space", {
    [`cm-space-${t()}`]: t(),
    [`cm-space-align-${i()}`]: i(),
    [`cm-space-justify-${e.justify}`]: !!e.justify,
    "cm-space-wrap": n(),
    "cm-space-inline": l()
  }), c = () => Ce(e, {
    [t() === "h" ? "column-gap" : "row-gap"]: r() + "px"
  });
  return (() => {
    const d = Li();
    return g(d, () => e.children), P((a) => {
      const o = s(), u = c(), h = e.id, v = e.title;
      return a._v$ = O(d, o, a._v$), a._v$2 = Y(d, u, a._v$2), h !== a._v$3 && G(d, "id", a._v$3 = h), v !== a._v$4 && G(d, "title", a._v$4 = v), a;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), d;
  })();
}, Si = /* @__PURE__ */ b("<div>");
function Mt(e) {
  const [t, n] = ce(e, ["classList", "class", "style", "size", "children"]), l = () => H(e, "cm-view"), r = () => Ce(e, {
    flex: `0 1 ${t.size}`
  });
  return (() => {
    const i = Si();
    return _e(i, te({
      get classList() {
        return l();
      },
      get style() {
        return r();
      }
    }, n), !1, !0), g(i, () => t.children), i;
  })();
}
function hu(e) {
  const t = () => H(e, "cm-h-view"), [n, l] = ce(e, ["classList", "class"]);
  return f(Mt, te({
    get classList() {
      return t();
    }
  }, l));
}
function mu(e) {
  const t = () => H(e, "cm-v-view"), [n, l] = ce(e, ["classList", "class"]);
  return f(Mt, te({
    get classList() {
      return t();
    }
  }, l));
}
function gu(e) {
  const t = () => H(e, "cm-fixed-view"), [n, l] = ce(e, ["classList", "class"]);
  return f(Mt, te({
    get classList() {
      return t();
    }
  }, l));
}
const Mi = /* @__PURE__ */ b("<div>");
function Ei(e) {
  const t = () => H(e, "cm-both-side");
  return (() => {
    const n = Mi();
    return g(n, () => e.children), P((l) => {
      const r = t(), i = e.style;
      return l._v$ = O(n, r, l._v$), l._v$2 = Y(n, i, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Di = /* @__PURE__ */ b("<div>");
function vu(e) {
  const t = () => H(e, "cm-view-center"), n = Ce(e, {
    width: e.width + "px",
    height: e.height + "px"
  }), [l, r] = ce(e, ["classList", "class", "style", "width", "height", "children"]);
  return (() => {
    const i = Di();
    return _e(i, te({
      get classList() {
        return t();
      },
      get style() {
        return n();
      }
    }, r), !1, !0), g(i, () => l.children), i;
  })();
}
const Nt = /* @__PURE__ */ b("<span>"), Ti = /* @__PURE__ */ b('<span class="cm-breadcrumb-wrap"><a></a><span class="cm-breadcrumb-separator">');
function zi(e) {
  const [t, n] = ce(e, ["classList", "link", "icon", "children"]), l = () => H(e, "cm-breadcrumb-item");
  return (() => {
    const r = Ti(), i = r.firstChild, s = i.nextSibling;
    return g(i, f(Pe, {
      size: 4,
      get children() {
        return [f(V, {
          get when() {
            return t.icon;
          },
          get children() {
            const c = Nt();
            return g(c, () => t.icon), c;
          }
        }), (() => {
          const c = Nt();
          return g(c, () => t.children), c;
        })()];
      }
    })), g(s, () => e.separator || "/"), P((c) => {
      const d = l(), a = e.link;
      return c._v$ = O(i, d, c._v$), a !== c._v$2 && G(i, "href", c._v$2 = a), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const Ri = /* @__PURE__ */ b("<div>");
function Pi(e) {
  const t = xe(() => e.children), n = () => t.toArray(), l = () => H(e, "cm-breadcrumb");
  return (() => {
    const r = Ri();
    return g(r, f(p, {
      get each() {
        return n();
      },
      children: (i) => (i.separator = e.separator ?? "/", f(zi, i))
    })), P((i) => {
      const s = l(), c = e.style;
      return i._v$ = O(r, s, i._v$), i._v$2 = Y(r, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
Pi.Item = ki;
function Ii() {
  const [e, t] = q(!1);
  return [e, () => {
    t(!0), setTimeout(() => {
      t(!1);
    }, 1e3);
  }];
}
const Ai = /* @__PURE__ */ b('<span class="cm-loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(113.635 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite">'), Ie = ({
  size: e = 14,
  color: t = "#fff"
}) => (() => {
  const n = Ai(), l = n.firstChild;
  return G(l, "width", e), G(l, "height", e), G(l, "stroke", t), P((r) => Y(n, `width: ${e}px; height: ${e}px`, r)), n;
})(), Fi = /* @__PURE__ */ b("<div>"), $n = fe();
function $u(e) {
  const t = () => H(e, {
    "cm-button-group": !0
  }), [n, l] = ce(e, ["classList", "children", "type", "size", "disabled"]);
  return f($n.Provider, {
    get value() {
      return {
        type: n.type,
        size: n.size,
        disabled: n.disabled
      };
    },
    get children() {
      const r = Fi();
      return _e(r, te({
        get classList() {
          return t();
        }
      }, l), !1, !0), g(r, () => n.children), r;
    }
  });
}
const Bt = /* @__PURE__ */ b('<span class="cm-button-icon">'), Ni = /* @__PURE__ */ b('<button type="button">'), Bi = /* @__PURE__ */ b("<a>"), $e = (e) => {
  const [t, n] = Ii(), l = e.iconAlign || "left", r = he($n), i = () => e.type || r?.type, s = () => e.size || r?.size, c = () => e.disabled || r?.disabled, d = () => H(e, {
    "cm-button": !0,
    [`cm-button-icon-${l}`]: !0,
    "cm-click-animating": t(),
    "cm-button-ghost": e.ghost,
    "cm-button-block": e.block,
    [`cm-button-${i()}`]: i(),
    [`cm-button-${s()}`]: s(),
    "cm-button-active": e.active,
    "cm-button-circle": e.circle,
    "cm-button-icon-only": !!e.icon && !e.children,
    "cm-button-empty": !e.icon && !e.children
  }), [a, o] = ce(e, ["classList", "class", "onClick", "link", "style", "title", "type", "block", "size", "active", "circle", "icon", "children", "iconAlign", "disabled", "loading", "ghost", "ref"]);
  function u(v) {
    c() || a.loading || a.onClick && a.onClick(v);
  }
  const h = l === "left" ? [Z((() => {
    const v = Z(() => !!a.loading);
    return () => v() ? f(Ie, {}) : (() => {
      const $ = Z(() => !!a.icon);
      return () => $() ? (() => {
        const m = Bt();
        return g(m, () => a.icon), m;
      })() : null;
    })();
  })()), Z(() => a.children)] : [Z(() => a.children), Z((() => {
    const v = Z(() => !!a.loading);
    return () => v() ? f(Ie, {}) : (() => {
      const $ = Z(() => !!a.icon);
      return () => $() ? (() => {
        const m = Bt();
        return g(m, () => a.icon), m;
      })() : null;
    })();
  })())];
  return f(V, {
    get when() {
      return !a.link;
    },
    get fallback() {
      return (() => {
        const v = Bi(), $ = a.ref;
        return typeof $ == "function" ? j($, v) : a.ref = v, _e(v, te({
          get classList() {
            return d();
          },
          get style() {
            return a.style;
          },
          get title() {
            return a.title;
          }
        }, o, {
          onMouseUp: n,
          onClick: u
        }), !1, !0), g(v, h), v;
      })();
    },
    get children() {
      const v = Ni(), $ = a.ref;
      return typeof $ == "function" ? j($, v) : a.ref = v, _e(v, te({
        get classList() {
          return d();
        },
        get style() {
          return a.style;
        },
        get title() {
          return a.title;
        },
        get disabled() {
          return c();
        }
      }, o, {
        onMouseUp: n,
        onClick: u
      }), !1, !0), g(v, h), v;
    }
  });
}, Oi = /* @__PURE__ */ b('<div><div class="cm-card-body">'), Yi = /* @__PURE__ */ b('<div class="cm-card-head">'), Vi = /* @__PURE__ */ b('<div class="cm-card-footer">');
function _u(e) {
  const t = () => H(e, "cm-card", {
    "cm-card-bordered": e.bordered,
    "cm-card-rised": e.rised
  });
  return (() => {
    const n = Oi(), l = n.firstChild;
    return g(n, (() => {
      const r = Z(() => !!e.title);
      return () => r() ? (() => {
        const i = Yi();
        return g(i, () => e.title), i;
      })() : null;
    })(), l), g(l, () => e.children), g(n, (() => {
      const r = Z(() => !!e.footer);
      return () => r() ? (() => {
        const i = Vi();
        return g(i, () => e.footer), i;
      })() : null;
    })(), null), P((r) => {
      const i = t(), s = e.style, c = e.bodyStyle;
      return r._v$ = O(n, i, r._v$), r._v$2 = Y(n, s, r._v$2), r._v$3 = Y(l, c, r._v$3), r;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), n;
  })();
}
const Hi = /* @__PURE__ */ b("<div>");
function Xi(e) {
  const t = ji(), n = me(), l = () => H(e, "cm-carousel-item", {
    "cm-carousel-item-active-fade": t && t.effect === "fade" && t.store.activeKey === n,
    "cm-carousel-item-active": t && t.effect === "slide" && t.store.dir === "normal" && t.store.activeKey === n,
    "cm-carousel-item-active-next": t && t.effect === "slide" && t.store.dir === "normal" && t.store.prevKey === n,
    "cm-carousel-item-active-reverse": t && t.effect === "slide" && t.store.dir === "reverse" && t.store.activeKey === n,
    "cm-carousel-item-active-reverse-next": t && t.effect === "slide" && t.store.dir === "reverse" && t.store.nextKey === n
  });
  return re(() => {
    t && t.addItem({
      id: n
    });
  }), (() => {
    const r = Hi();
    return G(r, "data-id", n), g(r, () => e.children), P((i) => O(r, l(), i)), r;
  })();
}
const Ui = /* @__PURE__ */ b('<div><div x-placement="left"></div><div class="cm-carousel-list"></div><div x-placement="right"></div><ul>'), qi = /* @__PURE__ */ b("<li>"), _n = fe();
function Wi(e) {
  const t = () => H(e, "cm-carousel"), [n, l] = ue(e, "activeIndex", 0), r = e.arrow ?? "hover", i = e.dotType ?? "dot", s = e.dotAlign ?? "center", c = e.autoPlay ?? !1, d = e.duration ?? 4e3, a = e.effect ?? "slide";
  let o, u, h = null;
  const v = () => ({
    "cm-carousel-arrow": !0,
    [`cm-carousel-arrow-${r}`]: !!r
  }), $ = () => ({
    "cm-carousel-dots": !0,
    [`cm-carousel-dots-${i}`]: !!i,
    [`cm-carousel-dots-${s}`]: !!s
  });
  let m = !1;
  const [C, w] = ie({
    data: [],
    activeIndex: n(),
    activeKey: "",
    nextKey: "",
    prevKey: "",
    dir: "normal"
  }), L = (k) => {
    k.index = C.data.length, w("data", [...C.data, k]);
  }, S = () => {
    clearTimeout(h), x(), h = setTimeout(() => {
      S();
    }, d);
  };
  re(() => {
    if (o) {
      const k = o.querySelectorAll(".cm-carousel-item");
      if (k.length) {
        const _ = k[0].getBoundingClientRect();
        u.style.height = _.height + "px";
      }
      c && (h = setTimeout(() => {
        S();
      }, d));
    }
  }), le(() => {
    h && clearTimeout(h);
  }), K(() => {
    const k = n();
    w("activeIndex", k);
  }), K(() => {
    const k = C.activeIndex, _ = C.data;
    if (_ && _.length)
      if (!m)
        u.children[C.activeIndex].classList.add("cm-carousel-item-active-init"), m = !0;
      else {
        const y = u.querySelector(".cm-carousel-item-active-init");
        y && y.classList.remove("cm-carousel-item-active-init"), w("activeKey", _[k].id), w("prevKey", _[(_.length + k - 1) % _.length].id), w("nextKey", _[(_.length + k + 1) % _.length].id);
      }
  });
  const x = () => {
    l((C.activeIndex + 1) % C.data.length), w("dir", "normal"), e.onChange && e.onChange(n());
  }, E = () => {
    l((C.data.length + C.activeIndex - 1) % C.data.length), w("dir", "reverse"), e.onChange && e.onChange(n());
  }, A = (k) => {
    w("dir", C.activeIndex - k < 0 ? "normal" : "reverse"), l(k), e.onChange && e.onChange(n());
  };
  return f(_n.Provider, {
    value: {
      addItem: L,
      store: C,
      effect: a
    },
    get children() {
      const k = Ui(), _ = k.firstChild, y = _.nextSibling, M = y.nextSibling, F = M.nextSibling, z = o;
      typeof z == "function" ? j(z, k) : o = k, _.$$click = E, g(_, f(W, {
        name: "chevron-left",
        size: 24
      }));
      const D = u;
      return typeof D == "function" ? j(D, y) : u = y, g(y, () => e.children), M.$$click = x, g(M, f(W, {
        name: "chevron-right",
        size: 24
      })), g(F, f(p, {
        get each() {
          return C.data;
        },
        children: (R, T) => {
          const N = () => ({
            "cm-carousel-dot": !0,
            "cm-carousel-dot-active": C.activeIndex === T()
          });
          return (() => {
            const B = qi();
            return B.$$click = () => {
              A(T());
            }, P((I) => O(B, N(), I)), B;
          })();
        }
      })), P((R) => {
        const T = t(), N = e.style, B = v(), I = v(), U = $();
        return R._v$ = O(k, T, R._v$), R._v$2 = Y(k, N, R._v$2), R._v$3 = O(_, B, R._v$3), R._v$4 = O(M, I, R._v$4), R._v$5 = O(F, U, R._v$5), R;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0,
        _v$5: void 0
      }), k;
    }
  });
}
Wi.Item = Xi;
const ji = () => he(_n);
J(["click"]);
const Ki = /* @__PURE__ */ b("<div>"), yn = fe(), yu = (e) => {
  const t = () => H(e, "cm-row", {
    [`cm-row-${e.justify}`]: e.justify,
    [`cm-row-${e.align}`]: e.align
  }), n = () => {
    let r = e.gutter ? e.gutter / 2 : 0;
    const i = {
      ...e.style
    };
    return e.gutter && (i["margin-left"] = `-${r}px`, i["margin-right"] = `-${r}px`), i;
  }, l = Hn({
    gutter: e.gutter || 0
  });
  return f(yn.Provider, {
    value: l,
    get children() {
      const r = Ki();
      return g(r, () => e.children), P((i) => {
        const s = t(), c = n();
        return i._v$ = O(r, s, i._v$), i._v$2 = Y(r, c, i._v$2), i;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r;
    }
  });
}, Gi = /* @__PURE__ */ b("<div>"), wu = (e) => {
  const t = he(yn);
  let n;
  const l = () => {
    const i = {
      ...e.style,
      flex: `0 0 ${(e.grid || 1) * 100}%`
    };
    return e.push && (i.left = `${e.push * 100}%`), e.pull && (i.right = `${e.pull * 100}%`), e.offset && (i["margin-left"] = `${e.offset * 100}%`), t?.gutter && (i["padding-left"] = t?.gutter / 2 + "px", i["padding-right"] = t?.gutter / 2 + "px"), e.flex && (e.flex.indexOf(" ") > -1 ? i.flex = e.flex : i.flex = `0 0 ${e.flex}`), i;
  }, r = () => H(e, "cm-col");
  return (() => {
    const i = Gi(), s = n;
    return typeof s == "function" ? j(s, i) : n = i, g(i, () => e.children), P((c) => {
      const d = r(), a = l();
      return c._v$ = O(i, d, c._v$), c._v$2 = Y(i, a, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}, Zi = /* @__PURE__ */ b('<span class="cm-count-down-prefix">'), Ji = /* @__PURE__ */ b('<span class="cm-count-down-suffix">'), Qi = /* @__PURE__ */ b('<span><span class="cm-count-down-value">');
function Ke(e) {
  return `${e}`.padStart(2, "0");
}
function bu(e) {
  let t;
  const [n, l] = q((/* @__PURE__ */ new Date()).getTime()), r = () => {
    let c = e.value;
    (typeof c == "string" || c instanceof Date) && (c = ee(c).toDate().getTime());
    let d = c - n();
    d <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), d = 0);
    const a = Ke(parseInt(d / (1e3 * 60 * 60 * 24) + "", 10)), o = Ke(parseInt(d / (1e3 * 60 * 60) + "", 10) % 24), u = Ke(parseInt(d / (1e3 * 60) + "", 10) % 60), h = Ke(parseInt(d / 1e3 + "", 10) % 60), v = e.format ?? "HH:mm:ss";
    let $ = v;
    return v.match(/D+/) && ($ = $.replace(/D+/, a + "")), v.match(/H+/) && ($ = $.replace(/H+/, o + "")), v.match(/m+/) && ($ = $.replace(/m+/, u + "")), v.match(/s+/) && ($ = $.replace(/s+/, h + "")), $;
  }, i = () => {
    t = setInterval(() => {
      l((/* @__PURE__ */ new Date()).getTime());
    }, 1e3);
  };
  re(() => {
    i();
  }), le(() => {
    clearInterval(t), t = null;
  });
  const s = () => H(e, "cm-count-down");
  return (() => {
    const c = Qi(), d = c.firstChild;
    return g(c, f(V, {
      get when() {
        return e.prefix;
      },
      get children() {
        const a = Zi();
        return g(a, () => e.prefix), a;
      }
    }), d), g(d, r), g(c, f(V, {
      get when() {
        return e.suffix;
      },
      get children() {
        const a = Ji();
        return g(a, () => e.suffix), a;
      }
    }), null), P((a) => {
      const o = s(), u = e.style;
      return a._v$ = O(c, o, a._v$), a._v$2 = Y(c, u, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}
const pi = /* @__PURE__ */ b("<span>");
function xu(e) {
  const t = e.start ?? 0;
  let n, l;
  re(() => {
    l = new Un(n, e.value, {
      startVal: t,
      duration: e.duration ?? 2,
      decimalPlaces: e.decimal ?? 0,
      useGrouping: e.useGrouping ?? !0,
      useEasing: e.useEasing ?? !0,
      separator: e.separator ?? ",",
      formattingFn: e.formattingFn,
      prefix: e.prefix ?? "",
      suffix: e.suffix ?? "",
      onCompleteCallback: r
    }), l.error ? console.error(l.error) : i();
  }), le(() => {
    l = null;
  });
  const r = () => {
    e.onEnd && e.onEnd();
  }, i = () => {
    l && l.start();
  }, s = (a) => {
    l && l.update(a);
  }, c = () => {
    l && l.pauseResume();
  };
  K(() => {
    s(e.value);
  }), e.ref && e.ref({
    reset: () => {
      l && l.reset();
    },
    update: s,
    start: i,
    pauseResume: c
  });
  const d = () => H(e, "cm-count-up");
  return (() => {
    const a = pi(), o = n;
    return typeof o == "function" ? j(o, a) : n = a, P((u) => {
      const h = d(), v = e.style;
      return u._v$ = O(a, h, u._v$), u._v$2 = Y(a, v, u._v$2), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
const el = /* @__PURE__ */ b("<div>"), tl = /* @__PURE__ */ b('<span class="cm-divider-text">');
function Cu(e) {
  const t = () => H(e, "cm-divider", {
    [`cm-divider-${e.dir || "h"}`]: e.dir || "h",
    [`cm-divider-${e.align}`]: e.align,
    "cm-divider-dashed": e.dashed
  }), n = () => Ce(e, {
    height: e.height
  });
  return (() => {
    const l = el();
    return g(l, (() => {
      const r = Z(() => !!e.children);
      return () => r() ? (() => {
        const i = tl();
        return g(i, () => e.children), i;
      })() : null;
    })()), P((r) => {
      const i = t(), s = n();
      return r._v$ = O(l, i, r._v$), r._v$2 = Y(l, s, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
function nl(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function il(e, t, n) {
  const r = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), i = (e.clientX + t.scrollLeft - r.left) / n, s = (e.clientY + t.scrollTop - r.top) / n;
  return {
    x: i,
    y: s
  };
}
function Ot(e, t) {
  for (let n = 0, l = e.length; n < l; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function ll(e, t) {
  return e.targetTouches && Ot(e.targetTouches, (n) => t === n.identifier) || e.changedTouches && Ot(e.changedTouches, (n) => t === n.identifier);
}
function ot(e, t, n, l) {
  const r = typeof t == "number" ? ll(e, t) : null;
  if (typeof t == "number" && !r)
    return null;
  const i = n.offsetParent || l.offsetParent || l.ownerDocument.body;
  return il(r || e, i, n.scale);
}
function dt(e, t, n, l, r) {
  return Number.isNaN(t) ? {
    node: e,
    deltaX: 0,
    deltaY: 0,
    lastX: l,
    lastY: r,
    x: l,
    y: r
  } : {
    node: e,
    deltaX: l - t,
    deltaY: r - n,
    lastX: t,
    lastY: n,
    x: l,
    y: r
  };
}
function Yt(e, t, n, l) {
  if (!e)
    return;
  const r = {
    capture: !0,
    ...l
  };
  e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
}
function Vt(e, t, n, l) {
  if (!e)
    return;
  const r = {
    capture: !0,
    ...l
  };
  e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
}
function rl(e, t, n) {
  const l = Math.round(t / e[0]) * e[0], r = Math.round(n / e[1]) * e[1];
  return [l, r];
}
function cl(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && e.body.classList.add("react-draggable-transparent-selection");
}
function al(e) {
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
function ut(e, t, n) {
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
function sl(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function oe(e) {
  return parseInt(e, 10);
}
function ol(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t += oe(n.borderTopWidth), t += oe(n.borderBottomWidth), t;
}
function dl(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t += oe(n.borderLeftWidth), t += oe(n.borderRightWidth), t;
}
function ul(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t -= oe(n.paddingTop), t -= oe(n.paddingBottom), t;
}
function fl(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t -= oe(n.paddingLeft), t -= oe(n.paddingRight), t;
}
function Ge(e) {
  return typeof e == "number" && !isNaN(e);
}
function hl({
  bounds: e,
  node: t
}, n, l) {
  if (!e)
    return [n, l];
  if (e = typeof e == "string" ? e : sl(e), typeof e == "string") {
    let r;
    if (e === "parent" ? r = t.parentNode : r = document.querySelector(e), !(r instanceof HTMLElement))
      throw new Error('Bounds selector "' + e + '" could not find an element.');
    const i = window.getComputedStyle(t), s = window.getComputedStyle(r);
    e = {
      left: -t.offsetLeft + oe(s.paddingLeft) + oe(i.marginLeft),
      top: -t.offsetTop + oe(s.paddingTop) + oe(i.marginTop),
      right: fl(r) - dl(t) - t.offsetLeft + oe(s.paddingRight) - oe(i.marginRight),
      bottom: ul(r) - ol(t) - t.offsetTop + oe(s.paddingBottom) - oe(i.marginBottom)
    };
  }
  return Ge(e.right) && (n = Math.min(n, e.right)), Ge(e.bottom) && (l = Math.min(l, e.bottom)), Ge(e.left) && (n = Math.max(n, e.left)), Ge(e.top) && (l = Math.max(l, e.top)), [n, l];
}
function ml(e) {
  return e === "both" || e === "x";
}
function gl(e) {
  return e === "both" || e === "y";
}
function vl({
  x: e,
  y: t
}, n, l) {
  let r = `translate(${e}${l},${t}${l})`;
  if (n) {
    const i = `${typeof n.x == "string" ? n.x : n.x + l}`, s = `${typeof n.y == "string" ? n.y : n.y + l}`;
    r = `translate(${i}, ${s})` + r;
  }
  return r;
}
function $l(e, t) {
  return {
    transform: vl(e, t, "px")
  };
}
const _l = /* @__PURE__ */ b("<div>");
function yl(e) {
  const [t, n] = q(null), [l, r] = q(NaN), [i, s] = q(NaN), [c, d] = q(!1);
  let a;
  const o = (m) => {
    if (e.onMouseDown && e.onMouseDown(m), !e.allowAnyClick && typeof m.button == "number" && m.button !== 0)
      return !1;
    if (!a || !a.ownerDocument || !a.ownerDocument.body)
      throw new Error("<DraggableCore> not mounted on DragStart!");
    const {
      ownerDocument: C
    } = a;
    if (e.disabled || !(m.target instanceof C.defaultView.Node) || e.handle && !document.querySelector(e.handle).contains(m.target) || e.cancel && document.querySelector(e.cancel).contains(m.target))
      return;
    m.type === "touchstart" && m.preventDefault();
    const w = nl(m);
    n(w);
    const L = ot(m, w, e, a);
    if (L == null)
      return;
    const {
      x: S,
      y: x
    } = L, E = dt(a, l(), i(), S, x);
    (e.onStart && e.onStart(m, E)) !== !1 && (cl(C), Te(() => {
      d(!0), r(S), s(x);
    }), Yt(C, "mousemove", u), Yt(C, "mouseup", h));
  }, u = (m) => {
    const C = ot(m, t(), e, a);
    if (C == null)
      return;
    let {
      x: w,
      y: L
    } = C;
    if (Array.isArray(e.grid)) {
      let E = w - l(), A = L - i();
      if ([E, A] = rl(e.grid, E, A), !E && !A)
        return;
      w = l() + E, L = i() + A;
    }
    const S = dt(a, l(), i(), w, L);
    if (e.onDrag(m, S) === !1) {
      try {
        h(new MouseEvent("mouseup"));
      } catch {
        const A = document.createEvent("MouseEvents");
        A.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), h(A);
      }
      return;
    }
    Te(() => {
      r(w), s(L);
    });
  }, h = (m) => {
    if (!c())
      return;
    const C = ot(m, t(), e, a);
    if (C == null)
      return;
    const {
      x: w,
      y: L
    } = C, S = dt(a, l(), i(), w, L);
    if (e.onStop(m, S) === !1)
      return !1;
    a && al(a.ownerDocument), Te(() => {
      d(!1), r(NaN), s(NaN);
    }), a && (Vt(a.ownerDocument, "mousemove", u), Vt(a.ownerDocument, "mouseup", h));
  }, v = (m) => o(m), $ = (m) => h(m);
  return (() => {
    const m = _l(), C = a;
    return typeof C == "function" ? j(C, m) : a = m, m.$$mouseup = $, m.$$mousedown = v, g(m, () => e.children), P((w) => {
      const L = e.classList, S = e.style;
      return w._v$ = O(m, L, w._v$), w._v$2 = Y(m, S, w._v$2), w;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), m;
  })();
}
J(["mousedown", "mouseup"]);
function $t(e) {
  const t = e.defaultPosition || {
    x: 0,
    y: 0
  }, [n, l] = ie({
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
  });
  let r = e.scale || 1, i = e.bounds || !1, s;
  const c = ($, m) => {
    if ((e.onStart && e.onStart($, ut(n, r, m))) === !1)
      return !1;
    l("dragging", !0), l("dragged", !0);
  }, d = ($, m) => {
    if (!n.dragging)
      return !1;
    const C = ut(n, r, m), w = {
      x: C.x,
      y: C.y,
      slackX: 0,
      slackY: 0
    };
    if (i) {
      const {
        x: S,
        y: x
      } = w;
      w.x += n.slackX, w.y += n.slackY;
      const [E, A] = hl({
        bounds: i,
        node: m.node
      }, w.x, w.y);
      w.x = E, w.y = A, w.slackX = n.slackX + (S - w.x), w.slackY = n.slackY + (x - w.y), C.x = w.x, C.y = w.y, C.deltaX = w.x - n.x, C.deltaY = w.y - n.y;
    }
    if ((e.onDrag && e.onDrag($, C)) === !1)
      return !1;
    l("x", w.x), l("y", w.y), l("slackX", w.slackX), l("slackY", w.slackY);
  }, a = ($, m) => {
    if (!n.dragging || (e.onStop && e.onStop($, ut(n, r, m))) === !1)
      return !1;
    l("dragging", !1), l("slackX", 0), l("slackY", 0);
  };
  le(() => {
    l("dragging", !1);
  });
  const o = e.axis || "both", u = () => ({
    // Set left if horizontal drag is enabled
    x: ml(o) ? n.x : t.x,
    // Set top if vertical drag is enabled
    y: gl(o) ? n.y : t.y
  }), h = () => ({
    ...e.style,
    ...$l(u(), e.positionOffset)
  }), v = () => H(e, "cm-draggable", {
    "cm-draggable-dragging": n.dragging,
    "cm-draggable-dragged": n.dragged
  });
  return e.ref && e.ref({
    reset: () => {
      l("x", 0), l("y", 0);
    },
    setPosition($) {
      l("x", $.x), l("y", $.y);
    }
  }), f(yl, {
    get grid() {
      return e.grid;
    },
    get classList() {
      return v();
    },
    get disabled() {
      return e.disabled;
    },
    get handle() {
      return e.handle;
    },
    scale: r,
    get style() {
      return h();
    },
    onStart: c,
    onDrag: d,
    onStop: a,
    ref($) {
      const m = s;
      typeof m == "function" ? m($) : s = $;
    },
    get children() {
      return e.children;
    }
  });
}
function wl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function Et(e) {
  const {
    el: t
  } = e, n = (l) => {
    l.target && t().contains(l.target) && (t().classList.remove(e.startClass), e.onLeave && e.onLeave()), t().removeEventListener("transitionend", n);
  };
  return le(() => {
    t() && t().removeEventListener("transitionend", n);
  }), {
    enter() {
      t() && (t().classList.add(e.startClass), t().removeEventListener("transitionend", n), wl(() => {
        t().classList.add(e.activeClass), e.onEnter && e.onEnter();
      }));
    },
    leave() {
      t() && (t().classList.remove(e.activeClass), t().addEventListener("transitionend", n));
    }
  };
}
const bl = /* @__PURE__ */ b('<div class="cm-drawer-title">'), xl = /* @__PURE__ */ b('<div tabindex="1"><div class="cm-drawer-mask"></div><div class="cm-drawer-wrap"><div class="cm-drawer-body">');
function ku(e) {
  const [t, n] = ue(e, "visible", !1), l = () => e.align ?? "right", r = e.maskCloseable ?? !0, i = () => (e.size ?? 256) + "px", s = () => ({
    [l() === "left" || l() === "right" ? "width" : "height"]: i()
  }), c = () => H(e, "cm-drawer", {
    [`cm-drawer-${l()}`]: l()
  });
  let d, a;
  const o = Et({
    el: () => d,
    target: () => a,
    startClass: "cm-drawer-visible",
    activeClass: "cm-drawer-open",
    onLeave: () => {
      e.onClose && e.onClose();
    }
  }), u = () => {
    r && h();
  }, h = () => {
    n(!1);
  };
  Xe(() => {
    t() ? (o.enter(), e.onShow && e.onShow()) : o.leave();
  });
  const v = ($) => {
    e.escClose && $.code === "Escape" && n(!1);
  };
  return (() => {
    const $ = xl(), m = $.firstChild, C = m.nextSibling, w = C.firstChild;
    $.$$keyup = v;
    const L = d;
    typeof L == "function" ? j(L, $) : d = $, m.$$click = u;
    const S = a;
    return typeof S == "function" ? j(S, C) : a = C, g(C, f(V, {
      get when() {
        return e.title;
      },
      get children() {
        const x = bl();
        return g(x, () => e.title), x;
      }
    }), w), g(C, f(V, {
      get when() {
        return e.hasClose ?? !0;
      },
      get children() {
        return f(W, {
          name: "x",
          size: 18,
          class: "cm-drawer-close",
          onClick: h
        });
      }
    }), w), g(w, () => e.children), P((x) => {
      const E = c(), A = e.style, k = s();
      return x._v$ = O($, E, x._v$), x._v$2 = Y($, A, x._v$2), x._v$3 = Y(C, k, x._v$3), x;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), $;
  })();
}
J(["keyup", "click"]);
function Me(e, t) {
  function n(s) {
    const c = document.createElement("div");
    return c.setAttribute("id", s), c;
  }
  function l(s) {
    document.body.appendChild(s);
  }
  const r = document.querySelector(`#${e}`), i = r || n(e);
  return r || l(i), i.classList.add(t), i;
}
function wn(e, t) {
  const n = t.getBoundingClientRect();
  let l;
  return e === "bottom" && (l = {
    left: n.x + n.width / 2,
    top: n.y + n.height
  }), e === "top" && (l = {
    left: n.x + n.width / 2,
    top: n.y
  }), e === "left" && (l = {
    left: n.x,
    top: n.y + n.height / 2
  }), e === "right" && (l = {
    left: n.x + n.width,
    top: n.y + n.height / 2
  }), e === "bottomLeft" && (l = {
    left: n.x,
    top: n.y + n.height
  }), e === "bottomRight" && (l = {
    left: n.x + n.width,
    top: n.y + n.height
  }), e === "topLeft" && (l = {
    left: n.x,
    top: n.y
  }), e === "topRight" && (l = {
    left: n.x + n.width,
    top: n.y
  }), e === "rightTop" && (l = {
    left: n.x + n.width,
    top: n.y
  }), e === "rightBottom" && (l = {
    left: n.x + n.width,
    top: n.y + n.height
  }), e === "leftTop" && (l = {
    left: n.x,
    top: n.y
  }), e === "leftBottom" && (l = {
    left: n.x,
    top: n.y + n.height
  }), l;
}
function _t(e, t, n) {
  const l = (i) => {
    if (n && n(i), e instanceof Array) {
      let s = !1;
      e.forEach((c) => {
        c.contains && c.contains(i.target) && (s = !0), c.forEach && c.forEach((d) => {
          d.contains && d.contains(i.target) && (s = !0);
        });
      }), s || t && t();
    } else
      e.contains(i.target) || t && t();
  }, r = () => {
    document.removeEventListener("mousedown", l);
  };
  return document.addEventListener("mousedown", l), r;
}
let Cl = 5e3;
function Ee() {
  return Cl++;
}
const kl = /* @__PURE__ */ b("<ul>");
function Lu(e) {
  const t = () => H(e, "cm-dropdown-list");
  return (() => {
    const n = kl();
    return g(n, () => e.children), P((l) => {
      const r = t(), i = e.style;
      return l._v$ = O(n, r, l._v$), l._v$2 = Y(n, i, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Ll = /* @__PURE__ */ b("<li>");
function Su(e) {
  const [t, n] = ce(e, ["classList", "class", "disabled", "name", "children"]), l = () => H(t, "cm-dropdown-item", {
    "cm-dropdown-item-disabled": t.disabled,
    "cm-dropdown-item-divided": e.divided
  }), r = Ml(), i = (s) => {
    t.disabled || (s.preventDefault(), s.stopPropagation(), r?.onSelect(t.name));
  };
  return (() => {
    const s = Ll();
    return _e(s, te({
      get classList() {
        return l();
      }
    }, n, {
      onClick: i
    }), !1, !0), g(s, () => t.children), s;
  })();
}
const Sl = /* @__PURE__ */ b("<span>"), Ht = /* @__PURE__ */ b("<div>"), yt = fe(), Ml = () => he(yt);
function ke(e) {
  const [t, n] = ue(e, "visible", !1), [l, r] = q(t());
  let i, s, c = e.trigger || "hover", d, a = e.align || "bottom", o;
  const u = Ee(), h = e.revers ?? !0, v = () => H(e, "cm-dropdown", {
    // 'cm-dropdown-open': visible(),
    [`cm-dropdown-${e.theme}`]: e.theme
  }), $ = Et({
    el: () => o,
    startClass: "cm-dropdown-visible",
    activeClass: "cm-dropdown-open",
    onLeave: () => {
      r(!1);
    },
    onEnter: () => {
      r(!0);
    }
  });
  Xe(() => {
    t() ? $.enter() : $.leave();
  });
  const m = () => {
    d && (clearTimeout(d), d = null);
  }, C = (y) => {
    if (!s.nextElementSibling.contains(y.target))
      return !1;
    if (e.disabled || (y.preventDefault && y.preventDefault(), y.stopPropagation && y.stopPropagation(), i = y.target, e.handler && !i.closest(e.handler)))
      return;
    const M = e.onBeforeDrop && e.onBeforeDrop(t());
    (M === void 0 || M) && n(!t());
  }, w = () => {
    e.disabled || c === "hover" && (m(), n(!0), o && (o.removeEventListener("mouseleave", L), o.addEventListener("mouseleave", L, !1)));
  }, L = () => {
    e.disabled || c === "hover" && (d = setTimeout(() => {
      n(!1);
    }, 200));
  }, S = (y, M) => {
    if (y === "bottomRight" || y === "topRight")
      return 0;
    if (y === "top" || y === "bottom")
      return M.width / 2;
    if (y === "topLeft" || y === "bottomLeft")
      return M.width;
    if (y === "left" || y === "leftTop" || y === "leftBottom")
      return 0;
    if (y === "right" || y === "rightTop" || y === "rightBottom")
      return M.width;
  }, x = (y, M) => {
    if (y === "leftBottom" || y === "rightBottom" || y === "top" || y === "topLeft" || y === "topRight")
      return 0;
    if (y === "leftTop" || y === "rightTop")
      return M.height;
    if (y === "left" || y === "right")
      return M.height / 2;
    if (y === "bottom" || y === "bottomLeft" || y === "bottomRight")
      return M.height;
  }, E = () => {
    if (l(), s && s.nextElementSibling) {
      let y = s.nextElementSibling;
      if (e.handler && (y = i.closest(e.handler)), !y)
        return;
      const M = y.offsetParent;
      if (!M)
        return;
      const F = M.getBoundingClientRect(), z = wn(a, y), D = z.top, R = z.left;
      e.transfer ? (z.top = z.top + document.documentElement.scrollTop, z.left = z.left + document.documentElement.scrollLeft) : (z.top = z.top + M.scrollTop - F.top, z.left = z.left + M.scrollLeft - F.left);
      const T = o.getBoundingClientRect(), N = S(a, T), B = x(a, T), I = D + B, U = R + N, X = window.innerHeight || document.documentElement.clientHeight, ae = window.innerWidth || document.documentElement.clientWidth, ve = y.getBoundingClientRect();
      return h && (I > X && (a === "bottom" || a === "bottomLeft" || a === "bottomRight" ? z.top = z.top - T.height - ve.height - 12 : a === "left" || a === "right" ? z.top = z.top - (T.height - ve.height) / 2 : (a === "leftTop" || a === "rightTop") && (z.top = z.top - (T.height - ve.height))), U > ae - 5 && (a === "bottom" ? z.left = z.left - (T.width - ve.width) / 2 : a === "bottomLeft" ? z.left = z.left - T.width + ve.width : (a === "right" || a === "rightTop") && (z.left = z.left - T.width - ve.width))), z.top = z.top + "px", z.left = z.left + "px", z["z-index"] = u, z;
    }
  };
  let A;
  re(() => {
    if (s.nextElementSibling) {
      if (c === "hover" && (s.nextElementSibling.addEventListener("mouseenter", w, !1), s.nextElementSibling.addEventListener("mouseleave", L, !1)), (c === "click" || c === "custom") && (document.addEventListener("click", C), c === "click")) {
        const y = e.handler ? s.nextElementSibling.querySelectorAll(e.handler) : s.nextElementSibling;
        A = _t([o, y], () => {
          n(!1);
        });
      }
      if (c === "contextMenu") {
        document.addEventListener("contextmenu", C);
        const y = e.handler ? s.nextElementSibling.querySelectorAll(e.handler) : s.nextElementSibling;
        A = _t([o, y], () => {
          n(!1);
        });
      }
    }
  }), le(() => {
    s.nextElementSibling && (c === "hover" && (s.nextElementSibling.removeEventListener("mouseenter", w), s.nextElementSibling.removeEventListener("mouseleave", L)), (c === "click" || c === "custom") && document.removeEventListener("click", C), c === "contextMenu" && document.removeEventListener("contextmenu", C)), A && A();
  });
  const k = (y) => {
    e.onSelect && e.onSelect(y), o.removeEventListener("mouseleave", L), n(!1);
  }, _ = "cm-dropdown-portal";
  return [(() => {
    const y = Sl(), M = s;
    return typeof M == "function" ? j(M, y) : s = y, y.style.setProperty("display", "none"), y;
  })(), Z(() => e.children), f(V, {
    get when() {
      return e.transfer;
    },
    get fallback() {
      return f(yt.Provider, {
        value: {
          onSelect: k
        },
        get children() {
          const y = Ht(), M = o;
          return typeof M == "function" ? j(M, y) : o = y, y.addEventListener("mouseenter", w), G(y, "x-placement", a), g(y, () => e.menu), P((F) => {
            const z = E(), D = v();
            return F._v$3 = Y(y, z, F._v$3), F._v$4 = O(y, D, F._v$4), F;
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), y;
        }
      });
    },
    get children() {
      return f(ct, {
        get mount() {
          return Me(_, _);
        },
        get children() {
          return f(yt.Provider, {
            value: {
              onSelect: k
            },
            get children() {
              const y = Ht(), M = o;
              return typeof M == "function" ? j(M, y) : o = y, y.addEventListener("mouseenter", w), G(y, "x-placement", a), g(y, () => e.menu), P((F) => {
                const z = E(), D = v();
                return F._v$ = Y(y, z, F._v$), F._v$2 = O(y, D, F._v$2), F;
              }, {
                _v$: void 0,
                _v$2: void 0
              }), y;
            }
          });
        }
      });
    }
  })];
}
const El = /* @__PURE__ */ b('<div class="cm-spin-pulse">'), Dl = /* @__PURE__ */ b('<svg class="cm-spin-oval" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 38" stroke="#2d8cf0"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(113.635 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite">'), Tl = /* @__PURE__ */ b(`<svg class="cm-spin-gears" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g transform="translate(-19 -19) scale(0.6)"><g transform="rotate(177)"><animateTransform attributeName="transform" type="rotate" values="0;360" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"></animateTransform><path fill="#20a0ff" d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7
                                            L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268
                                            L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154
                                            L28.531545636048154 38.431040572659825 L21.46047782418268 31.359972760794346
                                            A38 38 0 0 1 7.0000000000000036 37.3496987939662
                                            L7.0000000000000036 37.3496987939662 L7.000000000000004 47.3496987939662
                                            L-6.999999999999999 47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1
                                            -21.46047782418268 31.35997276079435 L-21.46047782418268 31.35997276079435
                                            L-28.531545636048154 38.431040572659825 L-38.43104057265982
                                            28.531545636048158 L-31.359972760794346 21.460477824182682 A38 38 0 0 1
                                            -37.3496987939662 7.000000000000007 L-37.3496987939662 7.000000000000007
                                            L-47.3496987939662 7.000000000000008 L-47.3496987939662 -6.9999999999999964
                                            L-37.3496987939662 -6.999999999999997 A38 38 0 0 1 -31.35997276079435
                                            -21.460477824182675 L-31.35997276079435 -21.460477824182675
                                            L-38.431040572659825 -28.531545636048147 L-28.53154563604818
                                            -38.4310405726598 L-21.4604778241827 -31.35997276079433 A38 38 0 0 1
                                            -6.999999999999992 -37.3496987939662 L-6.999999999999992 -37.3496987939662
                                            L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662
                                            L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686
                                            -31.359972760794342 L21.460477824182686 -31.359972760794342
                                            L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818
                                            L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662
                                            -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23"></path></g></g><g transform="translate(19 19) scale(0.6)"><g transform="rotate(160.5)"><animateTransform attributeName="transform" type="rotate" values="360;0" keyTimes="0;1" dur="2s" begin="-0.125s" repeatCount="indefinite"></animateTransform><path fill="rgba(12.549019607843137%,62.74509803921568%,100%,0.382)" d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7
                                            L37.3496987939662 7 A38 38 0 0 1 31.359972760794346 21.46047782418268
                                            L31.359972760794346 21.46047782418268 L38.431040572659825 28.531545636048154
                                            L28.531545636048154 38.431040572659825
                                            L21.46047782418268 31.359972760794346 A38 38 0 0 1 7.0000000000000036
                                            37.3496987939662 L7.0000000000000036 37.3496987939662
                                            L7.000000000000004 47.3496987939662 L-6.999999999999999
                                            47.3496987939662 L-7 37.3496987939662 A38 38 0 0 1
                                            -21.46047782418268 31.35997276079435 L-21.46047782418268
                                            31.35997276079435 L-28.531545636048154 38.431040572659825
                                            L-38.43104057265982 28.531545636048158 L-31.359972760794346
                                            21.460477824182682 A38 38 0 0 1 -37.3496987939662 7.000000000000007
                                            L-37.3496987939662 7.000000000000007 L-47.3496987939662 7.000000000000008
                                            L-47.3496987939662 -6.9999999999999964 L-37.3496987939662 -6.999999999999997
                                            A38 38 0 0 1 -31.35997276079435 -21.460477824182675
                                            L-31.35997276079435 -21.460477824182675
                                            L-38.431040572659825 -28.531545636048147
                                            L-28.53154563604818 -38.4310405726598
                                            L-21.4604778241827 -31.35997276079433 A38 38 0 0 1 -6.999999999999992
                                            -37.3496987939662 L-6.999999999999992 -37.3496987939662
                                            L-6.999999999999994 -47.3496987939662 L6.999999999999977 -47.3496987939662
                                            L6.999999999999979 -37.3496987939662 A38 38 0 0 1 21.460477824182686
                                            -31.359972760794342 L21.460477824182686 -31.359972760794342
                                            L28.531545636048158 -38.43104057265982 L38.4310405726598 -28.53154563604818
                                            L31.35997276079433 -21.4604778241827 A38 38 0 0 1 37.3496987939662
                                            -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23">`), zl = /* @__PURE__ */ b('<div><div class="cm-spin-inner"><div class="cm-spin"></div><div class="cm-spin-text">');
function bn(e) {
  const t = () => H(e, "cm-spin-wrap"), n = () => e.type || "pulse";
  return (() => {
    const l = zl(), r = l.firstChild, i = r.firstChild, s = i.nextSibling;
    return g(i, f(we, {
      get children() {
        return [f(Q, {
          get when() {
            return n() === "pulse";
          },
          get children() {
            return El();
          }
        }), f(Q, {
          get when() {
            return n() === "oval";
          },
          get children() {
            return Dl();
          }
        }), f(Q, {
          get when() {
            return n() === "gear";
          },
          get children() {
            return Tl();
          }
        })];
      }
    })), g(s, () => e.title || "loading..."), P((c) => {
      const d = t(), a = e.size + "px", o = e.size + "px";
      return c._v$ = O(l, d, c._v$), a !== c._v$2 && ((c._v$2 = a) != null ? i.style.setProperty("width", a) : i.style.removeProperty("width")), o !== c._v$3 && ((c._v$3 = o) != null ? i.style.setProperty("height", o) : i.style.removeProperty("height")), c;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), l;
  })();
}
const Rl = /* @__PURE__ */ b('<div class="cm-image-preview-mask">'), Pl = /* @__PURE__ */ b('<div class="cm-image-preview-fail">'), Il = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7197" width="200" height="200"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7198" fill="#ffffff"></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7199" fill="#ffffff">'), Al = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7412" width="200" height="200"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7413" fill="#ffffff"></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7414" fill="#ffffff">'), Fl = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976" width="200" height="200"><path d="M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z" p-id="1977" fill="#ffffff"></path><path d="M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z" p-id="1978" fill="#ffffff"></path><path d="M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1979" fill="#ffffff"></path><path d="M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1980" fill="#ffffff">'), Xt = /* @__PURE__ */ b("<span>"), Nl = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13308" width="200" height="200"><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z" p-id="13309" fill="#ffffff">'), Bl = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13521" width="200" height="200"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z" p-id="13522" fill="#ffffff">'), Ol = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7816" width="200" height="200"><path d="M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z" p-id="7817" fill="#ffffff">'), Yl = /* @__PURE__ */ b('<div class="cm-image-preview-wrap"><div class="cm-image-preview"><img>'), Vl = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26672" width="200" height="200"><path d="M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z" p-id="26673" fill="#ffffff">'), Hl = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8825" width="200" height="200"><path d="M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z" p-id="8826" fill="#ffffff"></path><path d="M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z" p-id="8827" fill="#ffffff">');
async function Xl(e, t = "unnamed") {
  try {
    const l = await (await fetch(e)).blob();
    if (!l)
      return Promise.reject();
    const r = URL.createObjectURL(l), i = document.createElement("a");
    return i.setAttribute("href", r), i.setAttribute("download", t), i.click(), URL.revokeObjectURL(r), Promise.resolve();
  } catch (n) {
    return Promise.reject(n);
  }
}
function xn(e) {
  const [t, n] = ue(e, "visible", !1), l = Ee(), [r, i] = ie({
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
  }), s = e.maskClosable ?? !0, c = e.infinite ?? !0, d = e.failInfo ?? "失败", a = (T) => {
    T.preventDefault && T.preventDefault(), T.stopPropagation && T.stopPropagation(), s && E(T);
  };
  K(() => {
    t() && (i("currentIndex", e.initIndex || 0), S(), i("original", !1));
  }), K(() => {
    r.currentIndex, i("status", "loading");
  });
  const o = (T) => {
    T.preventDefault && T.preventDefault(), T.stopPropagation && T.stopPropagation();
    const {
      pageX: N,
      pageY: B,
      which: I
    } = T;
    I === 1 && (i("startX", N), i("startY", B), i("transition", !1), document.addEventListener("mousemove", u), document.addEventListener("mouseup", h));
  }, u = (T) => {
    T.stopPropagation();
    const {
      pageX: N,
      pageY: B
    } = T, I = r.translate.x + (N - r.startX), U = r.translate.y + (B - r.startY);
    i("translate", "x", I), i("translate", "y", U), i("startX", N), i("startY", B);
  }, h = () => {
    i("transition", !0), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", h);
  }, v = (T) => {
    if (!t())
      return;
    const {
      keyCode: N
    } = T;
    N === 37 && x(!1), N === 39 && x(!0), N === 38 && L(T, "zoomIn"), N === 40 && L(T, "zoomOut"), N === 32 && (T.preventDefault && T.preventDefault(), i("original", !r.original));
  }, $ = (T) => {
    if (!t())
      return;
    const {
      keyCode: N
    } = T;
    N === 27 && E(T);
  }, m = (T) => {
    if (t())
      return T.preventDefault && T.preventDefault(), T.stopPropagation && T.stopPropagation(), T.stopImmediatePropagation && T.stopImmediatePropagation(), L(T, T.deltaY < 0 ? "zoomIn" : "zoomOut"), !1;
  };
  re(() => {
    document.addEventListener("wheel", m, {
      passive: !1
    }), document.addEventListener("keydown", v), document.addEventListener("keyup", $);
  }), le(() => {
    document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", h), document.removeEventListener("wheel", m), document.removeEventListener("keydown", v), document.removeEventListener("keyup", $);
  });
  const C = () => {
    i("status", "loaded");
  }, w = () => {
    i("status", "failed");
  }, L = (T, N) => {
    T.stopPropagation && T.stopPropagation(), N === "zoomIn" && r.scale < 6 && i("scale", r.scale + 0.25), N === "zoomOut" && r.scale > 0.25 && i("scale", r.scale - 0.25), N === "rotateLeft" && i("degree", r.degree - 90), N === "rotateRight" && i("degree", r.degree + 90), N === "original" && (i("original", !r.original), i("transition", !1), S(), setTimeout(() => {
      i("transition", !0);
    }, 0)), N === "download" && (i("downloading", !0), Xl(e.previewList[r.currentIndex]).then(() => {
      i("downloading", !1);
    }).catch(() => {
      i("downloading", !1);
    }));
  }, S = () => {
    i("scale", 1), i("degree", 0), i("translate", "x", 0), i("translate", "y", 0);
  }, x = (T) => {
    T ? r.currentIndex + 1 === e.previewList.length ? c && (S(), i("currentIndex", 0)) : (S(), i("currentIndex", r.currentIndex + 1)) : r.currentIndex === 0 ? c && (S(), i("currentIndex", e.previewList.length - 1)) : (S(), i("currentIndex", r.currentIndex - 1)), e.onSwitch && e.onSwitch(r.currentIndex);
  }, E = (T) => {
    n(!1), T.stopPropagation && T.stopPropagation(), e.onClose && e.onClose();
  }, A = () => ({
    "cm-image-preview-image": !0,
    "cm-image-preview-grabbing": !r.transition,
    "cm-image-preview-hidden": r.status === "failed",
    "cm-image-preview-transition": r.transition,
    "cm-image-preview-limit": !r.original
  }), k = () => {
    let T = r.translate.x / r.scale, N = r.translate.y / r.scale;
    const B = r.degree % 360;
    return [90, -270].includes(B) && ([T, N] = [N, -T]), [180, -180].includes(B) && ([T, N] = [-T, -N]), [270, -90].includes(B) && ([T, N] = [-N, T]), {
      transform: `
                scale(${r.scale})
                rotate(${r.degree}deg)
                translate(${T}px, ${N}px)
            `
    };
  }, _ = () => c ? !1 : r.currentIndex === 0, y = () => {
    const T = e.previewList.length;
    return c ? !1 : r.currentIndex >= T - 1;
  }, M = () => ({
    "cm-image-preview-arrow-left": !0,
    "cm-image-preview-arrow-disabled": _()
  }), F = () => ({
    "cm-image-preview-arrow-right": !0,
    "cm-image-preview-arrow-disabled": y()
  }), z = () => e.previewList[r.currentIndex], D = (T) => {
    T.stopPropagation && T.stopPropagation(), T.preventDefault && T.preventDefault();
  }, R = "cm-image-preview-portal";
  return f(ct, {
    get mount() {
      return Me(R, R);
    },
    get children() {
      return f(V, {
        get when() {
          return t();
        },
        get children() {
          return [(() => {
            const T = Rl();
            return l - 1 != null ? T.style.setProperty("z-index", l - 1) : T.style.removeProperty("z-index"), T;
          })(), (() => {
            const T = Yl(), N = T.firstChild, B = N.firstChild;
            return l != null ? T.style.setProperty("z-index", l) : T.style.removeProperty("z-index"), N.$$click = a, g(N, f(V, {
              get when() {
                return r.status === "loading";
              },
              get children() {
                return f(bn, {
                  class: "cm-image-preview-loading"
                });
              }
            }), B), g(N, f(V, {
              get when() {
                return r.status === "failed";
              },
              get children() {
                const I = Pl();
                return g(I, d), I;
              }
            }), B), B.$$click = D, B.addEventListener("error", w), B.addEventListener("load", C), B.$$mousedown = o, g(N, f(Pe, {
              dir: "h",
              class: "cm-image-preview-operations",
              size: 0,
              get children() {
                return [(() => {
                  const I = Il(), U = I.firstChild;
                  return U.$$click = (X) => L(X, "zoomIn"), I;
                })(), (() => {
                  const I = Al(), U = I.firstChild;
                  return U.$$click = (X) => L(X, "zoomOut"), I;
                })(), (() => {
                  const I = Xt();
                  return g(I, f(V, {
                    get when() {
                      return r.original;
                    },
                    get fallback() {
                      return (() => {
                        const U = Vl();
                        return U.$$click = (X) => L(X, "original"), U;
                      })();
                    },
                    get children() {
                      const U = Fl();
                      return U.$$click = (X) => L(X, "original"), U;
                    }
                  })), I;
                })(), (() => {
                  const I = Nl(), U = I.firstChild;
                  return U.$$click = (X) => L(X, "rotateLeft"), I;
                })(), (() => {
                  const I = Bl(), U = I.firstChild;
                  return U.$$click = (X) => L(X, "rotateRight"), I;
                })(), (() => {
                  const I = Xt();
                  return g(I, f(V, {
                    get when() {
                      return r.downloading;
                    },
                    get fallback() {
                      return (() => {
                        const U = Hl();
                        return U.$$click = (X) => L(X, "download"), U;
                      })();
                    },
                    get children() {
                      return Ol();
                    }
                  })), I;
                })()];
              }
            }), null), g(N, f(V, {
              get when() {
                return e.previewList.length > 1;
              },
              get children() {
                return [f(W, {
                  get classList() {
                    return M();
                  },
                  name: "chevron-left",
                  size: 26,
                  onClick: (I) => {
                    D(I), x(!1);
                  }
                }), f(W, {
                  get classList() {
                    return F();
                  },
                  name: "chevron-right",
                  size: 26,
                  onClick: (I) => {
                    D(I), x(!0);
                  }
                })];
              }
            }), null), g(N, f(W, {
              class: "cm-image-preview-arrow-close",
              name: "x",
              onClick: E,
              size: 26
            }), null), P((I) => {
              const U = A(), X = k(), ae = z();
              return I._v$ = O(B, U, I._v$), I._v$2 = Y(B, X, I._v$2), ae !== I._v$3 && G(B, "src", I._v$3 = ae), I;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }), T;
          })()];
        }
      });
    }
  });
}
J(["click", "mousedown"]);
const Ul = /* @__PURE__ */ b('<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18708" width="24" height="24"><path d="M948.622222 173.511111L506.311111 113.777778l-118.044444 133.688889 135.111111 251.733333L412.444444 750.933333l9.955556 99.555556-22.755556-99.555556 12.8-228.977777-193.422222-263.111112L307.2 113.777778 66.844444 180.622222c-25.6 7.111111-42.666667 32.711111-38.4 59.733334l95.288889 664.177777c4.266667 29.866667 31.288889 49.777778 61.155556 45.511111l237.511111-35.555555L851.911111 952.888889c28.444444 2.844444 54.044444-18.488889 58.311111-46.933333l85.333334-672.711112c4.266667-29.866667-17.066667-56.888889-46.933334-59.733333z m-164.977778 93.866667c35.555556 0 65.422222 29.866667 65.422223 65.422222S819.2 398.222222 783.644444 398.222222s-65.422222-29.866667-65.422222-65.422222 29.866667-65.422222 65.422222-65.422222z m88.177778 526.222222c-1.422222 11.377778-11.377778 21.333333-24.177778 19.911111l-304.355555-27.022222c-11.377778-1.422222-21.333333-11.377778-19.911111-24.177778 1.422222-11.377778 11.377778-21.333333 24.177778-19.911111l304.355555 27.022222c11.377778 1.422222 19.911111 11.377778 19.911111 24.177778z" fill="#BCC3C9" p-id="18709">'), ql = /* @__PURE__ */ b('<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5338" width="24" height="24"><path d="M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z" fill="#FFFFFF" p-id="5339"></path><path d="M640 396.8m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill="#82D2F7" p-id="5340"></path><path d="M479.6416 472.8832l88.448 176.896A64 64 0 0 1 510.848 742.4H333.952a64 64 0 0 1-57.2416-92.6208l88.448-176.896a64 64 0 0 1 114.4832 0z" fill="#046EA7" p-id="5341"></path><path d="M674.3424 555.0976l65.8688 131.7248A38.4 38.4 0 0 1 705.8688 742.4H574.1312a38.4 38.4 0 0 1-34.3424-55.5776l65.8688-131.7248a38.4 38.4 0 0 1 68.6848 0z" fill="#FCCF0A" p-id="5342">'), Wl = /* @__PURE__ */ b('<div class="cm-image-placeholder">'), jl = /* @__PURE__ */ b('<div class="cm-image-error"><span>'), Kl = /* @__PURE__ */ b('<div class="cm-image-mark"><span>'), Gl = /* @__PURE__ */ b("<div><img>"), Zl = /* @__PURE__ */ b('<div class="cm-image">');
function wt(e) {
  const [t, n] = q(!1), [l, r] = q(!1), [i, s] = q(!1), [c, d] = q(!1), a = Ul(), o = ql(), u = e.failInfo ?? a, h = e.previewTip ?? "预览", v = e.fit ?? "", $ = e.placeholder ?? o;
  let m, C = null;
  const w = () => ({
    "cm-image-inner": !0,
    "cm-image-cursor": e.preview
  }), L = () => ({
    "cm-image-img": !0,
    "cm-image-img-hidden": t() || l()
  }), S = () => {
    d(!0);
  }, x = () => ["fill", "contain", "cover", "none", "scale-down"].includes(v) ? `object-fit:${v};` : "", E = () => ({
    width: typeof e.width == "number" ? `${e.width}px` : e.width,
    height: typeof e.height == "number" ? `${e.height}px` : e.height
  }), A = () => {
    Te(() => {
      r(!1), n(!1);
    }), e.onLoad && e.onLoad();
  }, k = () => {
    Te(() => {
      r(!1), n(!0), s(!1);
    }), e.onError && e.onError();
  }, _ = () => {
    Te(() => {
      r(!0), n(!1), s(!0);
    });
  };
  K(() => {
    e.src, _();
  });
  let y;
  const M = () => {
    y = new IntersectionObserver(z, {
      root: C,
      rootMargin: "0px",
      threshold: 0
    }), y.observe(m);
  }, F = () => {
    y && y.disconnect();
  }, z = (N) => {
    for (let B of N)
      B.isIntersecting && (F(), _());
  }, D = () => {
    const {
      scrollContainer: N
    } = e;
    typeof N == "object" && N instanceof HTMLElement ? C = N : N && typeof N == "string" && (C = document.querySelector(N)), M();
  }, R = () => {
    e.lazy ? D() : _();
  }, T = () => {
    e.onClose && e.onClose();
  };
  return re(() => {
    R();
  }), le(() => {
    F();
  }), (() => {
    const N = Zl(), B = m;
    return typeof B == "function" ? j(B, N) : m = N, g(N, f(V, {
      get when() {
        return l();
      },
      get children() {
        const I = Wl();
        return g(I, $), I;
      }
    }), null), g(N, f(V, {
      get when() {
        return t();
      },
      get children() {
        const I = jl(), U = I.firstChild;
        return g(U, u), I;
      }
    }), null), g(N, f(V, {
      get when() {
        return i();
      },
      get children() {
        const I = Gl(), U = I.firstChild;
        return I.$$click = S, U.addEventListener("error", k), U.addEventListener("load", A), g(I, f(V, {
          get when() {
            return e.preview && h;
          },
          get children() {
            const X = Kl(), ae = X.firstChild;
            return g(ae, h), X;
          }
        }), null), P((X) => {
          const ae = w(), ve = L(), je = x(), Be = e.alt, Oe = e.src, Rt = e.lazy ? "lazy" : "eager", Pt = e.referrerPolicy;
          return X._v$ = O(I, ae, X._v$), X._v$2 = O(U, ve, X._v$2), X._v$3 = Y(U, je, X._v$3), Be !== X._v$4 && G(U, "alt", X._v$4 = Be), Oe !== X._v$5 && G(U, "src", X._v$5 = Oe), Rt !== X._v$6 && G(U, "loading", X._v$6 = Rt), Pt !== X._v$7 && G(U, "referrerpolicy", X._v$7 = Pt), X;
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0,
          _v$4: void 0,
          _v$5: void 0,
          _v$6: void 0,
          _v$7: void 0
        }), I;
      }
    }), null), g(N, f(V, {
      get when() {
        return e.preview;
      },
      get children() {
        return f(xn, {
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
          onClose: T,
          visible: [c, d],
          get onSwitch() {
            return e.onSwitch;
          }
        });
      }
    }), null), P((I) => Y(N, E(), I)), N;
  })();
}
J(["click"]);
const Jl = {
  404: "https://cqb325.gitee.io/cui-solid-doc/file/404.svg",
  403: "https://cqb325.gitee.io/cui-solid-doc/file/403.svg",
  500: "https://cqb325.gitee.io/cui-solid-doc/file/500.svg",
  empty: "https://cqb325.gitee.io/cui-solid-doc/file/empty.svg",
  fail: "https://cqb325.gitee.io/cui-solid-doc/file/fail.svg",
  deny: "https://cqb325.gitee.io/cui-solid-doc/file/deny.svg"
};
function Ql(e) {
  return e ? Jl[e] : null;
}
const pl = /* @__PURE__ */ b("<span>"), er = /* @__PURE__ */ b("<mark>"), tr = /* @__PURE__ */ b("<code>"), nr = /* @__PURE__ */ b("<a><span>");
function be(e) {
  const [t, n] = ce(e, ["classList", "class", "children", "type", "disabled", "link", "icon", "mark", "code", "underline", "deleted", "strong", "size", "onCopy"]), l = () => t.size || "normal", r = () => H(e, "cm-text", {
    [`cm-text-${t.type}`]: t.type,
    "cm-text-disabled": t.disabled,
    "cm-text-underline": t.underline,
    "cm-text-link": t.link,
    "cm-text-deleted": t.deleted,
    "cm-text-strong": t.strong,
    [`cm-text-${l()}`]: l()
  });
  return (() => {
    const i = pl();
    return _e(i, te({
      get classList() {
        return r();
      }
    }, n), !1, !0), g(i, (() => {
      const s = Z(() => !!t.mark);
      return () => s() ? (() => {
        const c = er();
        return g(c, () => t.children), c;
      })() : (() => {
        const c = Z(() => !!t.code);
        return () => c() ? (() => {
          const d = tr();
          return g(d, () => t.children), d;
        })() : (() => {
          const d = Z(() => !!t.link);
          return () => d() ? (() => {
            const a = nr(), o = a.firstChild;
            return g(a, () => t.icon, o), g(o, () => t.children), P(() => G(a, "href", t.link)), a;
          })() : t.children;
        })();
      })();
    })()), i;
  })();
}
const ir = /* @__PURE__ */ b('<div class="cm-exception-desc">'), lr = /* @__PURE__ */ b('<div class="cm-exception-action">'), rr = /* @__PURE__ */ b('<div><div class="cm-exception-img"></div><div class="cm-exception-info">');
function Mu(e) {
  const t = () => H(e, "cm-exception", {
    [`cm-exception-${e.type}`]: !!e.type
  }), n = e.showDesc ?? !0, l = e.showAction ?? !0;
  return (() => {
    const r = rr(), i = r.firstChild, s = i.nextSibling;
    return g(i, f(V, {
      get when() {
        return e.typeImage;
      },
      get fallback() {
        return f(wt, {
          get src() {
            return Ql(e.type);
          }
        });
      },
      get children() {
        return f(wt, {
          get src() {
            return e.typeImage;
          }
        });
      }
    })), g(s, f(V, {
      when: n,
      get children() {
        const c = ir();
        return g(c, f(we, {
          get children() {
            return [f(Q, {
              get when() {
                return e.type === "403";
              },
              get children() {
                return f(be, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你无权访问该页面";
                  }
                });
              }
            }), f(Q, {
              get when() {
                return e.type === "404";
              },
              get children() {
                return f(be, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你访问的页面不存在";
                  }
                });
              }
            }), f(Q, {
              get when() {
                return e.type === "500";
              },
              get children() {
                return f(be, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，服务器出错了";
                  }
                });
              }
            }), f(Q, {
              get when() {
                return e.type === "empty";
              },
              get children() {
                return f(be, {
                  size: "large",
                  get children() {
                    return e.desc ?? "暂无数据";
                  }
                });
              }
            }), f(Q, {
              get when() {
                return e.type === "fail";
              },
              get children() {
                return f(be, {
                  size: "large",
                  get children() {
                    return e.desc ?? "授权失败";
                  }
                });
              }
            }), f(Q, {
              get when() {
                return e.type === "deny";
              },
              get children() {
                return f(be, {
                  size: "large",
                  get children() {
                    return e.desc ?? "拒绝访问";
                  }
                });
              }
            })];
          }
        })), c;
      }
    }), null), g(s, f(V, {
      when: l,
      get children() {
        const c = lr();
        return g(c, f($e, {
          get link() {
            return e.link;
          },
          type: "primary",
          children: "返回首页"
        })), c;
      }
    }), null), P((c) => O(r, t(), c)), r;
  })();
}
const cr = /* @__PURE__ */ b('<form><button type="submit">'), Dt = fe();
function ar(e) {
  const t = () => H(e, "cm-form", {
    "cm-form-inline": e.inline
  }), [n, l] = ce(e, ["labelWidth", "form", "inline", "classList", "class", "onChange", "children", "onBeforeSubmit"]), r = (c, d) => {
    n.form[c] = d, n.onChange && n.onChange(c, d);
  }, i = {
    labelWidth: n.labelWidth,
    inline: n.inline,
    form: n.form,
    onChange: r
  }, s = (c) => (c.preventDefault(), n.onBeforeSubmit ? n.onBeforeSubmit() : !1);
  return f(Dt.Provider, {
    value: i,
    get children() {
      const c = cr(), d = c.firstChild;
      return c.addEventListener("submit", s), _e(c, te({
        get classList() {
          return t();
        }
      }, l, {
        get autocomplete() {
          return e.autocomplete;
        }
      }), !1, !0), d.style.setProperty("display", "none"), g(c, () => n.children, null), c;
    }
  });
}
const sr = /* @__PURE__ */ b("<li>");
function or(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-group-wrap": e.data.children && e.data.children.length,
    "cm-select-option-active": e.checked,
    "cm-select-option-disabled": e.data.disabled
  }), n = e.data[e.valueField];
  return f(V, {
    get when() {
      return e.visible;
    },
    fallback: null,
    get children() {
      const l = sr();
      return l.$$click = () => e.onClick && e.onClick(n, e.data), g(l, (() => {
        const r = Z(() => !!e.renderOption);
        return () => r() ? e.renderOption(e.data) : e.data[e.textField];
      })()), P((r) => {
        const i = t(), s = e.style;
        return r._v$ = O(l, i, r._v$), r._v$2 = Y(l, s, r._v$2), r;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), l;
    }
  });
}
J(["click"]);
const dr = /* @__PURE__ */ b('<div><div class="cm-tag-content"><div class="cm-tag-text">'), ur = /* @__PURE__ */ b('<span class="cm-tag-badge"><span class="cm-tag-badge-text">');
function Ze(e) {
  const t = () => e.value || "", n = () => H(e, "cm-tag", {
    [`cm-tag-${e.theme}`]: e.theme,
    "cm-tag-has-badge": t() !== "",
    "cm-tag-border": e.border,
    "cm-tag-circle": !t() && e.circle,
    [`cm-tag-${e.size}`]: e.size,
    "cm-tag-has-avatar": e.avatar
  }), [l, r] = ue(e, "visible", !0), i = (c) => {
    e.onBeforeClose ? e.onBeforeClose(c) && s(c) : s(c);
  }, s = (c) => {
    r(!1), e.onClose && e.onClose(c);
  };
  return f(V, {
    get when() {
      return l();
    },
    fallback: null,
    get children() {
      const c = dr(), d = c.firstChild, a = d.firstChild;
      return g(c, () => e.avatar, d), g(a, () => e.children), g(d, (() => {
        const o = Z(() => !!e.closable);
        return () => o() ? f(W, {
          name: "x",
          class: "cm-tag-close",
          size: 12,
          onClick: i
        }) : null;
      })(), null), g(c, (() => {
        const o = Z(() => t() !== "");
        return () => o() ? (() => {
          const u = ur(), h = u.firstChild;
          return g(h, t), u;
        })() : null;
      })(), null), P((o) => {
        const u = n(), h = e.style;
        return o._v$ = O(c, u, o._v$), o._v$2 = Y(c, h, o._v$2), o;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), c;
    }
  });
}
const fr = /* @__PURE__ */ b("<span>"), hr = /* @__PURE__ */ b('<div><div class="cm-popover-body">'), mr = /* @__PURE__ */ b('<svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-popover-icon-arrow"><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1"></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)">');
function tt(e) {
  const [t, n] = ue(e, "visible", !1), [l, r] = q(t()), [i, s] = q(me()), [c, d] = q(!1);
  let a, o, u;
  const h = () => e.align || "right", v = () => e.confirm ? "click" : e.trigger || "hover", $ = Ee();
  let m = null;
  const C = e.hideDelay || 200, w = () => {
    m && (clearTimeout(m), m = null);
  }, L = () => {
    e.disabled || v() === "hover" && (w(), n(!0), e.onOpen && e.onOpen(!0));
  }, S = () => {
    e.disabled || v() === "hover" && (m = setTimeout(() => {
      n(!1), e.onOpen && e.onOpen(!1);
    }, C));
  }, x = (D) => {
    if (!e.disabled && (D.preventDefault(), D.stopPropagation(), v() === "click")) {
      const R = t();
      n(!R), e.onOpen && e.onOpen(!R);
    }
  }, E = () => H(e, "cm-popover-inner", {
    // 'cm-popover-inner-show': visible(),
    "cm-popover-with-arrow": e.arrow,
    "cm-popover-confirm": e.confirm,
    [`cm-popover-${e.theme}`]: e.theme
  }), A = Et({
    el: () => u,
    startClass: "cm-popover-inner-visible",
    activeClass: "cm-popover-inner-show",
    onLeave: () => {
      r(!1);
    },
    onEnter: () => {
      r(!0);
    }
  });
  Xe(() => {
    t() ? A.enter() : A.leave();
  });
  const k = () => {
    if (l(), i(), a && a.nextElementSibling) {
      const D = wn(h(), a.nextElementSibling);
      return D.top = D.top + document.documentElement.scrollTop + "px", D.left = D.left + document.documentElement.scrollLeft + "px", D["z-index"] = $, Object.assign(D, e.style || {}), D;
    }
  }, _ = async () => {
    if (e.onOk) {
      d(!0);
      const D = await e.onOk();
      d(!1), (D === void 0 || D === !0) && (n(!1), e.onOpen && e.onOpen(!1));
    }
  }, y = () => {
    e.onCancel && e.onCancel(), n(!1), e.onOpen && e.onOpen(!1);
  };
  re(() => {
    a.nextElementSibling && (v() === "hover" && (a.nextElementSibling.addEventListener("mouseenter", L, !1), a.nextElementSibling.addEventListener("mouseleave", S, !1)), v() === "click" && (a.nextElementSibling.addEventListener("click", x, !1), o = _t([u, a.nextElementSibling], () => {
      n(!1);
    })));
  }), le(() => {
    a.nextElementSibling && (v() === "hover" && (a.nextElementSibling.removeEventListener("mouseenter", L), a.nextElementSibling.removeEventListener("mouseleave", S)), v() === "click" && a.nextElementSibling.removeEventListener("click", x)), o && o();
  });
  const M = "cm-popover-portal";
  e.ref && e.ref({
    updatePosition() {
      s(me());
    }
  });
  const F = e.okText ?? "确 定", z = e.cancleText ?? "取 消";
  return [(() => {
    const D = fr(), R = a;
    return typeof R == "function" ? j(R, D) : a = D, D.style.setProperty("display", "none"), D;
  })(), Z(() => e.children), f(ct, {
    get mount() {
      return Me(M, M);
    },
    get children() {
      const D = hr(), R = D.firstChild, T = u;
      return typeof T == "function" ? j(T, D) : u = D, g(R, () => e.content), g(D, (() => {
        const N = Z(() => !!e.confirm);
        return () => N() ? f(Pe, {
          class: "cm-popover-tools",
          justify: "end",
          get children() {
            return [f($e, {
              type: "default",
              size: "small",
              onClick: y,
              children: z
            }), f($e, {
              type: "primary",
              size: "small",
              onClick: _,
              get loading() {
                return c();
              },
              children: F
            })];
          }
        }) : null;
      })(), null), g(D, (() => {
        const N = Z(() => !!e.arrow);
        return () => N() ? mr() : null;
      })(), null), P((N) => {
        const B = k(), I = h(), U = E();
        return N._v$ = Y(D, B, N._v$), I !== N._v$2 && G(D, "x-placement", N._v$2 = I), N._v$3 = O(D, U, N._v$3), N;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), D;
    }
  })];
}
const Ut = /* @__PURE__ */ b("<span>+"), gr = /* @__PURE__ */ b("<div>"), vr = /* @__PURE__ */ b('<div class="cm-tag-group-more-wrap">');
function $r(e) {
  const t = () => H(e, "cm-tag-group", {}), [n, l] = ie({
    list: [],
    show: [],
    hide: []
  }), r = (i, s) => {
    const c = n.list.filter((d) => d.id !== i.id);
    l("list", c), e.onClose && e.onClose(i, s);
  };
  return K(() => {
    l("list", e.data);
  }), K(() => {
    const i = n.list, s = e.max ?? i.length, c = [], d = [];
    fn(() => {
      for (let o = 0; o < s; o++)
        i[o] && c.push(i[o]);
      const a = e.data.length;
      for (let o = s; o < a; o++)
        d.push(i[o]);
      l("show", c), l("hide", d);
    });
  }), (() => {
    const i = gr();
    return g(i, f(p, {
      get each() {
        return n.show;
      },
      children: (s) => f(Ze, {
        get closable() {
          return e.closable;
        },
        get size() {
          return e.size;
        },
        get theme() {
          return s.theme;
        },
        get avatar() {
          return s.avatar;
        },
        onClose: (c) => {
          r(s, c);
        },
        get children() {
          return s.title;
        }
      })
    }), null), g(i, f(V, {
      get when() {
        return e.max && n.list.length > e.max;
      },
      get children() {
        return f(V, {
          get when() {
            return e.showMore;
          },
          get fallback() {
            return f(Ze, {
              class: "cm-tag-more",
              get children() {
                return [Ut(), Z(() => n.hide.length)];
              }
            });
          },
          get children() {
            return f(tt, {
              align: "top",
              arrow: !0,
              theme: "light",
              get content() {
                return (() => {
                  const s = vr();
                  return g(s, f(p, {
                    get each() {
                      return n.hide;
                    },
                    children: (c, d) => f(Ze, {
                      get size() {
                        return e.size;
                      },
                      get theme() {
                        return c.theme;
                      },
                      get avatar() {
                        return c.avatar;
                      },
                      get children() {
                        return c.title;
                      }
                    })
                  })), s;
                })();
              },
              get children() {
                return f(Ze, {
                  class: "cm-tag-more",
                  get children() {
                    return [Ut(), Z(() => n.hide.length)];
                  }
                });
              }
            });
          }
        });
      }
    }), null), P((s) => {
      const c = t(), d = e.style;
      return s._v$ = O(i, c, s._v$), s._v$2 = Y(i, d, s._v$2), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
function Ae() {
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
      const l = n[t];
      return e === l;
    }
  };
}
const _r = /* @__PURE__ */ b('<div><label class="cm-form-label"></label><div class="cm-form-item-element"><div class="cm-form-item-error-tip">'), Cn = fe();
function Ue(e) {
  const [t, n] = q(null), l = he(Dt), r = Ae();
  let i;
  const s = e.name;
  let c = !1;
  s && l && l.form.getValidation && l.form.getValidation(s) && (c = l.form.getValidation(s).required), e.rules && (c = e.rules.required);
  const d = () => H(e, "cm-form-item", {
    "cm-form-item-error": t(),
    "cm-form-item-inline": e.inline || l?.inline,
    "cm-form-item-required": c
  }), a = async (u) => {
    if (i) {
      const h = i.getBoundingClientRect();
      if (h.width === 0 || h.height === 0)
        return !0;
    }
    if (s && l && l.form.getValidation && l.form.getValidation(s) || l && e.rules) {
      const h = l.form.getValidation(s) || e.rules, v = l.form.getMessage(s) || e.messages;
      if (h.required) {
        const $ = await r.required(u, h.required, l.form);
        if (!$)
          return n(v ? v.required : ""), $;
      }
      for (let $ in h)
        if ($ !== "required") {
          if (r[$]) {
            const m = await r[$](u, h[$], l.form);
            if (!m)
              return n(v ? v[$] : ""), m;
          }
          if (h[$] && typeof h[$] == "function") {
            const m = await h[$](u, l.form);
            if (!m)
              return n(v ? v[$] : ""), m;
          }
        }
      return n(null), !0;
    }
    return !0;
  };
  e.name || console.warn("formItem needs name property to check valid");
  const o = () => {
    n(null);
  };
  return e.name && l?.form.setCheckValid && l.form.setCheckValid(e.name, a), e.name && l?.form.setClearValid && l.form.setClearValid(e.name, o), f(Cn.Provider, {
    get value() {
      return {
        name: e.name
      };
    },
    get children() {
      const u = _r(), h = u.firstChild, v = h.nextSibling, $ = v.firstChild;
      g(h, () => e.label);
      const m = i;
      return typeof m == "function" ? j(m, v) : i = v, g(v, () => e.children, $), g($, t), P((C) => {
        const w = d(), L = e.style, S = {
          width: l?.labelWidth + "px",
          ...e.labelStyle
        };
        return C._v$ = O(u, w, C._v$), C._v$2 = Y(u, L, C._v$2), C._v$3 = Y(h, S, C._v$3), C;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), u;
    }
  });
}
const yr = () => he(Cn);
function se(e, t, n) {
  arguments.length === 2 && (n = t, t = "value");
  let l, r;
  e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (l = e[t][0], r = e[t][1]) : [l, r] = q(e[t] || n);
  const i = he(Dt), s = i?.form.getFormData ? i.form.getFormData() : {}, d = yr()?.name || e.name, a = s && d ? s[d] : void 0;
  return a != null && !e.notCreateFiled && r(a), i && i.form && d && !e.notCreateFiled && i.form.bindController(d, l, r), [l, (u) => {
    r(u), e.notCreateFiled || i?.onChange(d, u);
  }];
}
const wr = /* @__PURE__ */ b('<div><input class="cm-input">'), br = /* @__PURE__ */ b('<div class="cm-input-prefix">'), xr = /* @__PURE__ */ b('<div class="cm-input-group-prepend">'), Cr = /* @__PURE__ */ b('<div class="cm-input-suffix">'), kr = /* @__PURE__ */ b('<div class="cm-input-group-append">');
function ge(e) {
  const t = () => H(e, "cm-input-wrapper", {
    "cm-input-disabled": e.disabled,
    "cm-input-hidden": e.type === "hidden",
    [`cm-input-${e.size}`]: e.size,
    // 'cm-input-group': append || prepend,
    "cm-input-group-with-prefix": e.prefix,
    "cm-input-group-with-suffix": e.suffix,
    "cm-input-group-with-append": e.append,
    "cm-input-group-with-prepend": e.prepend
  }), [n, l] = ce(e, ["classList", "class", "name", "style", "disabled", "size", "type", "append", "prepend", "prefix", "suffix", "suffixStyle", "prefixStyle", "clearable", "value", "onChange", "onEnter", "onKeyDown", "onKeyUp", "onInput", "trigger"]), r = {};
  n.suffixStyle && n.suffixStyle.width && (r["padding-right"] = n.suffixStyle.width + "px"), n.prefixStyle && n.prefixStyle.width && (r["padding-left"] = n.prefixStyle.width + "px");
  const [i, s] = se(e, ""), c = n.trigger || "blur", d = ($) => {
    c === "input" && (n.onChange && n.onChange($.target.value), s($.target.value)), n.onInput && n.onInput($.target.value, $);
  }, a = ($) => {
  }, o = ($) => {
    const m = $.target.value;
    c === "blur" && n.onChange && n.onChange(m), s(m);
  }, u = () => {
    n.onChange && n.onChange(""), s("");
  }, h = ($) => {
    $.keyCode === 13 && n.onEnter && n.onEnter(i()), n.onKeyUp && n.onKeyUp($);
  }, v = ($) => {
    $.keyCode === 13 && (s($.target.value), n.onChange && n.onChange($.target.value)), n.onKeyDown && n.onKeyDown($);
  };
  return (() => {
    const $ = wr(), m = $.firstChild;
    g($, (() => {
      const w = Z(() => !!n.prefix);
      return () => w() ? (() => {
        const L = br();
        return g(L, () => n.prefix), P((S) => Y(L, n.prefixStyle, S)), L;
      })() : null;
    })(), m), g($, (() => {
      const w = Z(() => !!n.prepend);
      return () => w() ? (() => {
        const L = xr();
        return g(L, () => n.prepend), L;
      })() : null;
    })(), m);
    const C = e.ref;
    return typeof C == "function" ? j(C, m) : e.ref = m, _e(m, te(l, {
      get value() {
        return i();
      },
      onChange: a,
      onInput: d,
      onBlur: o,
      get disabled() {
        return n.disabled;
      },
      style: r,
      onKeyDown: v,
      onKeyUp: h,
      get type() {
        return n.type;
      }
    }), !1, !1), g($, (() => {
      const w = Z(() => !!(n.clearable && i()));
      return () => w() ? f(W, {
        class: "cm-input-clear",
        name: "x-circle",
        onClick: u
      }) : null;
    })(), null), g($, (() => {
      const w = Z(() => !!n.suffix);
      return () => w() ? (() => {
        const L = Cr();
        return g(L, () => n.suffix), P((S) => Y(L, n.suffixStyle, S)), L;
      })() : null;
    })(), null), g($, (() => {
      const w = Z(() => !!n.append);
      return () => w() ? (() => {
        const L = kr();
        return g(L, () => n.append), L;
      })() : null;
    })(), null), P((w) => {
      const L = t(), S = n.style;
      return w._v$ = O($, L, w._v$), w._v$2 = Y($, S, w._v$2), w;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), $;
  })();
}
const Lr = /* @__PURE__ */ b('<div class="cm-field-prepend">'), Sr = /* @__PURE__ */ b('<div class="cm-field-selection">'), Mr = /* @__PURE__ */ b('<div class="cm-field-text">'), Er = /* @__PURE__ */ b('<div tabindex="1"><input type="hidden"><span>A</span><span class="cm-field-cert">'), Dr = /* @__PURE__ */ b('<span class="cm-field-placeholder">');
function Fe(e) {
  const [t, n] = e.query ?? [() => {
  }, () => {
  }];
  let l;
  const r = (o) => {
    o.stopImmediatePropagation && o.stopImmediatePropagation(), o.preventDefault && o.preventDefault(), o.stopPropagation && o.stopPropagation(), e.onClear && e.onClear();
  }, i = () => ({
    "cm-field-value": !0,
    "cm-field-clearable": e.clearable && !!e.text && !!e.text.length,
    "cm-field-disabled": e.disabled,
    [`cm-field-value-${e.size}`]: !!e.size
  }), s = () => (Promise.resolve().then(() => {
    e.filter && l && l.focus();
  }), e.multi && e.text && e.text instanceof Array ? e.text.map((o, u) => ({
    id: o.id,
    title: o.title
  })) : []), c = () => {
    const o = e.filter ? t() : "";
    return {
      width: o !== void 0 ? o.length * 12 + 20 + "px" : "100%"
    };
  }, d = () => {
    e.filter && l && l.focus();
  }, a = (o) => {
    const u = t();
    (o.key === "Backspace" || o.code === "Backspace" || o.key === "Delete" || o.code === "Delete") && u.length === 0 && e.onDeleteLastValue && e.onDeleteLastValue();
  };
  return (() => {
    const o = Er(), u = o.firstChild, h = u.nextSibling, v = h.nextSibling;
    return o.$$click = d, h.style.setProperty("width", "0px"), h.style.setProperty("font-size", "12px"), h.style.setProperty("visibility", "hidden"), h.style.setProperty("line-height", "initial"), g(o, f(V, {
      get when() {
        return e.prepend;
      },
      get children() {
        const $ = Lr();
        return g($, () => e.prepend), $;
      }
    }), v), g(o, f(we, {
      get children() {
        return [f(Q, {
          get when() {
            return e.multi;
          },
          get children() {
            const $ = Sr();
            return g($, f($r, {
              get data() {
                return s();
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
              }
            }), null), g($, (() => {
              const m = Z(() => !!e.filter);
              return () => m() ? f(ge, {
                ref(C) {
                  const w = l;
                  typeof w == "function" ? w(C) : l = C;
                },
                get style() {
                  return c();
                },
                notCreateFiled: !0,
                class: "cm-select-filter",
                trigger: "input",
                get size() {
                  return e.size;
                },
                value: [t, n],
                onKeyDown: a
              }) : null;
            })(), null), $;
          }
        }), f(Q, {
          get when() {
            return !e.multi;
          },
          get children() {
            const $ = Mr();
            return g($, f(V, {
              get when() {
                return !e.filter;
              },
              get children() {
                return Z(() => !!e.text)() ? e.text : (() => {
                  const m = Dr();
                  return g(m, () => e.placeholder ?? ""), m;
                })();
              }
            }), null), g($, f(V, {
              get when() {
                return e.filter;
              },
              get children() {
                return f(ge, {
                  ref(m) {
                    const C = l;
                    typeof C == "function" ? C(m) : l = m;
                  },
                  get style() {
                    return c();
                  },
                  notCreateFiled: !0,
                  class: "cm-select-filter",
                  trigger: "input",
                  get size() {
                    return e.size;
                  },
                  value: [t, n]
                });
              }
            }), null), $;
          }
        })];
      }
    }), v), g(v, () => e.icon), g(o, f(V, {
      get when() {
        return e.clearable && e.text && e.text !== "";
      },
      get children() {
        return f(W, {
          name: "x-circle",
          class: "cm-field-clear",
          onClick: r
        });
      }
    }), null), P(($) => O(o, i(), $)), o;
  })();
}
J(["click"]);
const Tr = /* @__PURE__ */ b("<div>"), zr = /* @__PURE__ */ b('<div class="cm-select-options"><ul class="cm-select-option-list">'), Rr = /* @__PURE__ */ b('<div class="cm-select-options-wrap">');
function Pr(e) {
  const [t, n] = q(!1), l = e.align ?? "bottomLeft", [r, i] = se(e, ""), [s, c] = q(""), d = () => H(e, "cm-select", "cm-autocomplete", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && r().length !== 0,
    "cm-select-open": t(),
    "cm-select-with-prefix": e.prefix
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let a;
  const o = "label", u = e.valueField || "value";
  let h = !1, v = [];
  e.data && (v = e.data.map((x) => typeof x == "object" ? (x._show = !0, x) : {
    [u]: x,
    label: x,
    _show: !0
  }));
  const [$, m] = ie({
    list: v
  });
  K(() => {
    const x = r();
    m("list", (E) => E, ne((E) => {
      E._checked = x === E[u];
    }));
  }), K(() => {
    e.data && (v = e.data.map((x) => typeof x == "object" ? (x._show = !0, x) : {
      [u]: x,
      label: x,
      _show: !0
    }), m("list", () => [...v]), v.length && n(!0));
  }), K(() => {
    const x = s();
    h || x.length && e.onSearch && e.onSearch(x);
  });
  const C = (x, E) => {
    i(x), h = !0, c(E[o]), queueMicrotask(() => {
      h = !1;
    }), e.onChange && e.onChange(x, E), n(!1);
  }, w = () => {
    const x = r();
    let E;
    return fn(() => {
      E = $.list.find((A) => A[u] === x);
    }), E ? E[o] : e.emptyOption ? e.emptyOption : "";
  }, L = (x) => {
    x.preventDefault && x.preventDefault(), x.stopPropagation && x.stopPropagation(), e.onChange && e.onChange(""), i("");
  }, S = () => !!($.list && $.list.length);
  return (() => {
    const x = Tr(), E = a;
    return typeof E == "function" ? j(E, x) : a = x, g(x, f(ke, {
      get transfer() {
        return e.transfer;
      },
      align: l,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [t, n],
      onBeforeDrop: S,
      get menu() {
        return (() => {
          const A = Rr();
          return g(A, f(hn, {
            get open() {
              return t();
            },
            get children() {
              const k = zr(), _ = k.firstChild;
              return g(_, f(p, {
                get each() {
                  return $.list;
                },
                children: (y) => f(or, {
                  get renderOption() {
                    return e.renderOption;
                  },
                  get visible() {
                    return y._show;
                  },
                  get disabled() {
                    return y.disabled;
                  },
                  data: y,
                  get checked() {
                    return y._checked;
                  },
                  valueField: u,
                  textField: o,
                  onClick: C
                })
              })), k;
            }
          })), A;
        })();
      },
      get children() {
        return f(Fe, {
          get text() {
            return w();
          },
          get disabled() {
            return e.disabled;
          },
          filter: !0,
          query: [s, c],
          get clearable() {
            return e.clearable;
          },
          onClear: L,
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
            return f(W, {
              name: "chevron-down",
              class: "cm-select-cert"
            });
          }
        });
      }
    })), P((A) => {
      const k = d(), _ = e.style;
      return A._v$ = O(x, k, A._v$), A._v$2 = Y(x, _, A._v$2), A;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), x;
  })();
}
const Ir = /* @__PURE__ */ b('<div><span class="cm-cascader-text">');
function Ar(e) {
  const [t, n] = e.store, l = () => t.selectedValue.includes(e.data.value), r = () => ({
    "cm-cascader-item": !0,
    "cm-cascader-item-active": l(),
    "cm-cascader-item-disabled": e.data.disabled
  }), i = Vr(), [s, c] = q(!1), d = async () => {
    if (!e.data.disabled) {
      if (e.data.loading && i && i.loadData)
        try {
          c(!0);
          const h = await i.loadData(e.data);
          i && i.addChildren(e.data, h), e.data.loading = !1;
        } catch {
        } finally {
          c(!1);
        }
      e.trigger === "click" && a(), i && i.onSelect(e.data);
    }
  }, a = () => {
    let h = [];
    for (let v = 0; v < e.level; v++)
      h.push(t.selectedValue[v]);
    h[e.level] = e.data.value, n("selectedValue", h);
  };
  let o = null;
  const u = () => {
    e.data.disabled || (o && clearTimeout(o), o = setTimeout(() => {
      a();
    }, 100));
  };
  return (() => {
    const h = Ir(), v = h.firstChild;
    return de(h, "mouseenter", e.trigger === "hover" ? u : void 0), h.$$click = d, g(h, () => e.data.icon, v), g(v, () => e.data.title), g(h, f(V, {
      get when() {
        return e.data.children && e.data.children.length || e.data.loading;
      },
      get children() {
        return f(V, {
          get when() {
            return s();
          },
          get fallback() {
            return f(W, {
              name: "chevron-right",
              class: "cm-menu-submenu-cert"
            });
          },
          get children() {
            return f(Ie, {
              color: "#1890ff"
            });
          }
        });
      }
    }), null), P(($) => O(h, r(), $)), h;
  })();
}
J(["click"]);
const Fr = /* @__PURE__ */ b('<div class="cm-cascader-list">');
function Nr(e) {
  const [t, n] = e.store, l = () => e.data;
  return (() => {
    const r = Fr();
    return g(r, f(p, {
      get each() {
        return l();
      },
      children: (i) => f(Ar, {
        get trigger() {
          return e.trigger;
        },
        get data() {
          return e.mapData[i];
        },
        store: [t, n],
        get level() {
          return e.level;
        }
      })
    })), r;
  })();
}
const Br = /* @__PURE__ */ b('<div tabindex="0">'), Or = /* @__PURE__ */ b('<div class="cm-cascader-wrap">'), kn = fe();
function Ln(e, t) {
  e && e.length && e.forEach((n) => {
    t.push(n), n.children && Ln(n.children, t);
  });
}
function Sn(e, t) {
  e && e.length && e.forEach((n) => {
    t[n.value] = n, n.children && Sn(n.children, t);
  });
}
function Yr(e) {
  const [t, n] = ue(e, "visible", !1), [l, r] = se(e, []), i = e.trigger ?? "click";
  let s = [], c = {};
  const d = JSON.parse(JSON.stringify(e.data));
  Ln(e.data, s), Sn(d, c);
  const [a, o] = ie({
    selectedValue: l() || [],
    columns: []
  }), u = e.seperator ?? "/", h = e.align ?? "bottomLeft", v = () => H(e, "cm-cascader", {
    "cm-cascader-disabled": e.disabled,
    "cm-cascader-clearable": !e.disabled && e.clearable && l() && l().length,
    [`cm-cascader-${e.size}`]: e.size
  });
  let $ = {}, m = e.data.map((x) => x.value);
  K(() => {
    let x = l() || [];
    o("selectedValue", [...x]);
  }), K(() => {
    let x = a.selectedValue, E = [m];
    x && x.length && x.forEach((A) => {
      if ($[A])
        E.push($[A]);
      else {
        let k = c[A];
        if (k && k.children) {
          let _ = k.children.map((y) => y.value);
          $[A] = _, E.push(_);
        }
      }
    }), o("columns", E);
  });
  const C = () => {
    const x = l(), E = x ? x.map((A) => c[A].title) : [];
    return E.length ? E.join(u) : "";
  }, w = (x) => {
    if (!(x.children && x.children.length) || e.changeOnSelect) {
      e.onSelect && e.onSelect(x);
      const A = a.selectedValue.map((k) => k);
      r(A), e.onChange && e.onChange(A);
    }
    x.children && x.children.length || n(!1);
  }, L = (x, E) => {
    x.loading = !1, x.children = E, E.forEach((A) => {
      c[A.value] = A;
    });
  }, S = () => {
    r([]), e.onChange && e.onChange([]);
  };
  return f(kn.Provider, {
    get value() {
      return {
        onSelect: w,
        loadData: e.loadData,
        addChildren: L
      };
    },
    get children() {
      const x = Br();
      return g(x, f(ke, {
        visible: [t, n],
        get transfer() {
          return e.transfer;
        },
        align: h,
        get revers() {
          return e.revers;
        },
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        get menu() {
          return (() => {
            const E = Or();
            return g(E, f(p, {
              get each() {
                return a.columns;
              },
              children: (A, k) => f(Nr, {
                data: A,
                trigger: i,
                store: [a, o],
                mapData: c,
                get level() {
                  return k();
                }
              })
            })), E;
          })();
        },
        get children() {
          return f(Fe, {
            get prepend() {
              return e.prepend;
            },
            get text() {
              return C();
            },
            onClear: S,
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
            }
          });
        }
      })), P((E) => O(x, v(), E)), x;
    }
  });
}
const Vr = () => he(kn), Hr = /* @__PURE__ */ b('<div><span>A</span><input><span class="cm-checkbox-outter">&nbsp;<span class="cm-checkbox-inner"></span></span><label>');
function Se(e) {
  let t = e.type || "checkbox";
  const n = () => ({
    ...e.classList,
    [e.class]: !0,
    "cm-checkbox": !0,
    "cm-checkbox-checked": e.checked,
    "cm-checkbox-indeterminate": e.checked === "indeterminate",
    disabled: e.disabled
  }), l = () => {
    if (e.disabled || t == "radio" && e.checked)
      return;
    let r = e.checked;
    r === "indeterminate" ? r = !0 : r = !r, e.onChange && e.onChange(r, e.value);
  };
  return (() => {
    const r = Hr(), i = r.firstChild, s = i.nextSibling, c = s.nextSibling, d = c.nextSibling;
    return r.$$click = l, i.style.setProperty("width", "0px"), i.style.setProperty("font-size", "12px"), i.style.setProperty("visibility", "hidden"), s.addEventListener("change", () => {
    }), G(s, "type", t), s.style.setProperty("display", "none"), c.style.setProperty("position", "relative"), g(d, () => e.label), P((a) => {
      const o = n(), u = e.name;
      return a._v$ = O(r, o, a._v$), u !== a._v$2 && G(s, "name", a._v$2 = u), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), P(() => s.value = e.value), r;
  })();
}
J(["click"]);
function Xr(e) {
  const [t, n] = se(e, "checked", !1), [l, r] = ce(e, ["checked", "onChange"]);
  return f(Se, te({
    get checked() {
      return t();
    },
    onChange: (s, c) => {
      e.disabled || (n(s), l.onChange && l.onChange(s, c));
    }
  }, r));
}
const Ur = /* @__PURE__ */ b("<div>"), Eu = fe();
function qr(e) {
  const t = () => H(e, "cm-checkbox-group", {
    "cm-checkbox-group-stack": e.block
  }), [n, l] = se(e, []), r = (d, a) => {
    if (e.disabled)
      return;
    let o = n() || [];
    if (d)
      o.includes(a) || (o = o.concat(a));
    else {
      const h = o.indexOf(a);
      h > -1 && o.splice(h, 1);
    }
    const u = JSON.parse(JSON.stringify(o));
    l(u), e.onChange && e.onChange(u);
  }, i = e.textField || "label", s = e.valueField || "value", c = {};
  return e.data && e.data.forEach((d) => {
    const o = (n() || []).includes(d[s]);
    c[d[s]] = q(o);
  }), K(() => {
    const d = n() ?? [];
    for (let a = 0; a < e.data.length; a++) {
      const o = e.data[a], u = d.includes(o[s]);
      c[o[s]] && c[o[s]][1](u);
    }
  }), (() => {
    const d = Ur();
    return g(d, () => e.data.map((a) => f(Se, {
      inner: !0,
      get disabled() {
        return e.disabled || a.disabled;
      },
      get value() {
        return a[s];
      },
      get checked() {
        return c[a[s]][0]();
      },
      get label() {
        return a[i];
      },
      onChange: r
    }))), P((a) => {
      const o = t(), u = e.style;
      return a._v$ = O(d, o, a._v$), a._v$2 = Y(d, u, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), d;
  })();
}
const Wr = /* @__PURE__ */ b('<div class="cm-select-color">'), jr = /* @__PURE__ */ b('<div class="cm-color-picker-value" tabindex="0"><span>A</span><input type="hidden"><div class="cm-select-color-wrap">'), Kr = /* @__PURE__ */ b('<div class="cm-select-color cm-select-color-empty">');
function Gr(e) {
  const [t, n] = q({});
  return K(() => {
    const l = e.open ? {
      background: `rgba(${e.currentValue.rgba.r},${e.currentValue.rgba.g},${e.currentValue.rgba.b},${e.currentValue.rgba.a})`
    } : {
      background: e.value
    };
    n(l);
  }), (() => {
    const l = jr(), r = l.firstChild, i = r.nextSibling, s = i.nextSibling;
    return r.style.setProperty("width", "0px"), r.style.setProperty("font-size", "12px"), r.style.setProperty("visibility", "hidden"), r.style.setProperty("line-height", "initial"), g(s, f(V, {
      get when() {
        return t().background;
      },
      get fallback() {
        return (() => {
          const c = Kr();
          return g(c, f(W, {
            name: "x",
            size: 12
          })), c;
        })();
      },
      get children() {
        const c = Wr();
        return P((d) => Y(c, t(), d)), c;
      }
    })), P(() => G(i, "name", e.name)), P(() => i.value = e.value), l;
  })();
}
function De(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function ft(e, t) {
  const n = qn(e), {
    _a: l
  } = n;
  return l == null && n.setAlpha(t || 1), n;
}
function Zr(e, t) {
  const n = t && t.a;
  if (t) {
    if (t.hsl)
      return ft(t.hsl, n);
    if (t.hex && t.hex.length > 0)
      return ft(t.hex, n);
  }
  return ft(t, n);
}
function ht(e, t) {
  const n = e === "" ? "#2d8cf0" : e, l = Zr(e, n), r = l.toHsl(), i = l.toHsv();
  return r.s === 0 && (r.h = n.h || n.hsl && n.hsl.h || t || 0, i.h = r.h), i.v < 0.0164 && (i.h = n.h || n.hsv && n.hsv.h || 0, i.s = n.s || n.hsv && n.hsv.s || 0), r.l < 0.01 && (r.h = n.h || n.hsl && n.hsl.h || 0, r.s = n.s || n.hsl && n.hsl.s || 0), {
    hsl: r,
    hex: l.toHexString().toUpperCase(),
    rgba: l.toRgb(),
    hsv: i,
    oldHue: n.h || t || r.h,
    source: n.source,
    a: n.a || l.getAlpha()
  };
}
function bt(e) {
  const {
    r: t,
    g: n,
    b: l,
    a: r
  } = e;
  return `rgba(${[t, n, l, r].join(",")})`;
}
const Jr = /* @__PURE__ */ b('<div class="cm-saturation"><div class="cm-saturation-white"></div><div class="cm-saturation-black"></div><div class="cm-saturation-pointer"><div class="cm-saturation-circle">');
function Qr(e) {
  let t;
  const n = (c) => {
    if (typeof c.button == "number" && c.button !== 0)
      return !1;
    r(c), document.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", l, !1);
  }, l = (c) => {
    r(c), document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", l);
  };
  le(() => {
    document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", l);
  });
  const r = (c) => {
    c.preventDefault(), c.stopPropagation();
    const {
      clientWidth: d,
      clientHeight: a
    } = t, o = t.getBoundingClientRect().left + window.screenX, u = t.getBoundingClientRect().top + window.screenY, h = De(c.clientX - o, 0, d), v = De(c.clientY - u, 0, a), $ = h / d, m = De(1 - v / a, 0, 1);
    e.onChange && e.onChange({
      h: e.value.hsv.h,
      s: $,
      v: m,
      a: e.value.hsv.a,
      source: "hsva"
    });
  }, i = () => ({
    background: `hsl(${e.value.hsv.h}, 100%, 50%)`
  }), s = () => ({
    top: `${-(e.value.hsv.v * 100) + 1 + 100}%`,
    left: `${e.value.hsv.s * 100}%`
  });
  return (() => {
    const c = Jr(), d = c.firstChild, a = d.nextSibling, o = a.nextSibling, u = t;
    return typeof u == "function" ? j(u, c) : t = c, c.$$mousedown = n, P((h) => {
      const v = i(), $ = s();
      return h._v$ = Y(c, v, h._v$), h._v$2 = Y(o, $, h._v$2), h;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}
J(["mousedown"]);
const pr = /* @__PURE__ */ b('<div class="cm-color-picker-hue"><div class="cm-color-picker-hue-wrap"><div class="cm-color-picker-hue-pointer">');
function ec(e) {
  const [t, n] = q(De(e.value.hsl.h * 100 / 360, 0, 100));
  let l;
  const r = (d) => {
    if (typeof d.button == "number" && d.button !== 0)
      return !1;
    s(d), document.addEventListener("mousemove", s, !1), document.addEventListener("mouseup", i, !1);
  }, i = (d) => {
    s(d), document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", i);
  };
  le(() => {
    document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", i);
  });
  const s = (d) => {
    d.preventDefault(), d.stopPropagation();
    const {
      clientWidth: a
    } = l, o = l.getBoundingClientRect().left + window.screenX, u = d.clientX - o;
    if (u < 0) {
      c(0);
      return;
    }
    if (u > a) {
      c(100);
      return;
    }
    c(u * 100 / a);
  }, c = (d) => {
    n(De(d, 0, 100));
    const {
      h: a,
      s: o,
      l: u,
      a: h
    } = e.value.hsl, v = De(d / 100 * 360, 0, 360);
    a !== v && e.onChange && e.onChange({
      h: v,
      s: o,
      l: u,
      a: h,
      source: "hsl"
    });
  };
  return K(() => {
    n(De(e.value.hsl.h * 100 / 360, 0, 100));
  }), (() => {
    const d = pr(), a = d.firstChild, o = a.firstChild, u = l;
    return typeof u == "function" ? j(u, d) : l = d, a.$$mousedown = r, o.style.setProperty("top", "0"), P(() => `${t()}%` != null ? o.style.setProperty("left", `${t()}%`) : o.style.removeProperty("left")), d;
  })();
}
J(["mousedown"]);
const tc = /* @__PURE__ */ b('<div class="cm-radio-group-thumb">'), nc = /* @__PURE__ */ b("<div>");
function ic(e) {
  const t = () => H(e, "cm-radio-group", {
    "cm-radio-group-stack": e.block,
    "cm-radio-group-stick": e.stick
  }), [n, l] = se(e, ""), [r, i] = q({});
  let s;
  const c = (u, h) => {
    e.disabled || (l(h), e.onChange && e.onChange(h));
  }, d = e.textField ?? "label", a = e.valueField ?? "value", o = (u) => n() === u[a];
  return K(() => {
    const u = n() ?? "";
    let h = -1;
    for (let x = 0; x < e.data.length; x++) {
      const E = e.data[x];
      u === E[a] && (h = x);
    }
    const $ = s.querySelectorAll(".cm-radio")[h];
    if (!$)
      return;
    const m = $.getBoundingClientRect(), C = s.getBoundingClientRect(), w = m.left - C.left, S = {
      width: `${m.width}px`,
      left: `${w}px`
    };
    i(S);
  }), (() => {
    const u = nc(), h = s;
    return typeof h == "function" ? j(h, u) : s = u, g(u, f(V, {
      get when() {
        return e.stick;
      },
      get children() {
        const v = tc();
        return P(($) => Y(v, r(), $)), v;
      }
    }), null), g(u, () => e.data.map((v) => f(Se, {
      get disabled() {
        return e.disabled || v.disabled;
      },
      class: "cm-radio",
      get type() {
        return e.type || "radio";
      },
      inner: !0,
      get value() {
        return v[a];
      },
      get checked() {
        return o(v);
      },
      get label() {
        return v[d];
      },
      onChange: c
    })), null), P((v) => {
      const $ = t(), m = e.style;
      return v._v$ = O(u, $, v._v$), v._v$2 = Y(u, m, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), u;
  })();
}
const lc = /* @__PURE__ */ b('<div><textarea class="cm-input">');
function rc(e) {
  const [t, n] = ce(e, ["classList", "class", "style", "value", "autoHeight", "disabled", "onChange", "onInput", "onKeyUp", "onEnter", "name", "trigger"]), l = () => H(t, "cm-textarea", "cm-input-wrapper", {
    "cm-input-disabled": t.disabled,
    "cm-input-auto-height": t.autoHeight
  }), [r, i] = se(e, ""), s = t.trigger || "blur", c = (v) => {
  }, d = (v) => {
    i(v.target.value), t.onChange && t.onChange(v.target.value);
  }, a = (v) => {
    s === "input" && (i(v.target.value), t.onChange && t.onChange(v.target.value)), t.onInput && t.onInput(v.target.value, v), t.autoHeight && h(v);
  }, o = (v) => {
    t.onKeyUp && t.onKeyUp(v.target.value, v), v.keyCode === 13 && t.onEnter && t.onEnter(v.target.value, v);
  };
  let u;
  const h = (v) => {
    const $ = v.target;
    u || (u = $.clientHeight), $.scrollHeight > u && ($.value.split(`
`).length === 1 ? $.style.height = `${u}px` : $.style.height = "auto", $.style.overflowY = "hidden", $.scrollTop = 0, $.style.height = `${$.scrollHeight}px`);
  };
  return (() => {
    const v = lc(), $ = v.firstChild;
    return _e($, te(n, {
      get value() {
        return r();
      },
      spellcheck: !1,
      autocomplete: "off",
      wrap: "soft",
      onChange: c,
      onInput: a,
      onKeyUp: o,
      onBlur: d
    }), !1, !1), P((m) => {
      const C = l(), w = e.style;
      return m._v$ = O(v, C, m._v$), m._v$2 = Y(v, w, m._v$2), m;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), v;
  })();
}
const cc = /* @__PURE__ */ b('<div tabindex="0"><span>A</span><span class="cm-switch-inner"></span><input type="hidden">');
function ac(e) {
  const t = () => H(e, "cm-switch", {
    [`cm-switch-${e.size}`]: e.size,
    "cm-switch-disabled": e.disabled,
    "cm-switch-checked": n(),
    "cm-switch-loading": e.loading
  }), [n, l] = se(e, "checked", !1), r = e.labels || [], i = e.values || [!0, !1], s = async () => {
    if (e.disabled || e.loading)
      return;
    let d = !0;
    if (e.onBeforeChange && (d = await e.onBeforeChange(n())), d) {
      let o = n() ? i[1] : i[0];
      e.onChange && e.onChange(o), l(o);
    }
  }, c = () => n() ? r[0] : r[1];
  return (() => {
    const d = cc(), a = d.firstChild, o = a.nextSibling, u = o.nextSibling;
    return d.$$click = s, a.style.setProperty("width", "0px"), a.style.setProperty("font-size", "12px"), a.style.setProperty("visibility", "hidden"), g(o, c), g(d, (() => {
      const h = Z(() => !!e.loading);
      return () => h() ? f(Ie, {}) : null;
    })(), u), P((h) => {
      const v = t(), $ = e.style, m = e.name;
      return h._v$ = O(d, v, h._v$), h._v$2 = Y(d, $, h._v$2), m !== h._v$3 && G(u, "name", h._v$3 = m), h;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), P(() => u.value = n() ? i[0] : i[1]), d;
  })();
}
J(["click"]);
function sc(e) {
  const [t, n] = ce(e, ["enterButton", "onEnter", "onSearch"]), l = t.enterButton ? null : f(W, {
    name: "search",
    style: {
      cursor: "pointer"
    },
    get onClick() {
      return t.onSearch;
    }
  });
  let r = null;
  return t.enterButton && (r = typeof t.enterButton == "string" ? t.enterButton : f(W, {
    name: "search",
    get onClick() {
      return t.onSearch;
    }
  })), f(ge, te({
    get onEnter() {
      return t.onEnter;
    },
    suffix: l,
    append: r
  }, n));
}
const oc = /* @__PURE__ */ b("<div>"), dc = /* @__PURE__ */ b('<span class="cm-spinner-plus">'), uc = /* @__PURE__ */ b('<span class="cm-spinner-subs">');
function fc(e) {
  const t = () => H(e, "cm-spinner", {
    [`cm-spinner-${e.size}`]: e.size,
    "cm-spinner-disabled": e.disabled
  }), [n, l] = se(e, Math.max(0, e.min ?? 0)), r = (h, v) => {
    h = h.replace(/[^0-9\.]/g, ""), v.target.value = h;
  }, i = (h) => {
    h.keyCode === 38 && a(), h.keyCode === 40 && o();
  };
  let s = e.min || 0, c = e.step || 1;
  const d = (h) => {
    let v = h;
    e.max !== void 0 && (v = Math.min(v, e.max)), s !== void 0 && (v = Math.max(v, s)), Promise.resolve().then(() => {
      l(v);
    }), e.onChange && e.onChange(v);
  }, a = () => {
    if (e.disabled)
      return;
    let h = u(n(), c);
    if (e.loop && e.max !== void 0 && s !== void 0 && h > e.max) {
      const v = h - e.max;
      h = s + v - 1;
    }
    e.max !== void 0 && (h = Math.min(e.max, h)), l(h), e.onChange && e.onChange(h), e.onPlus && e.onPlus(h, c);
  }, o = () => {
    if (e.disabled)
      return;
    let h = u(n(), -c);
    if (e.loop && e.max !== void 0 && s !== void 0 && h < s) {
      const v = h - s;
      h = e.max + v + 1;
    }
    s !== void 0 && (h = Math.max(s, h)), l(h), e.onChange && e.onChange(h), e.onSub && e.onSub(h, c);
  };
  function u(h, v) {
    let $, m, C;
    try {
      $ = h.toString().split(".")[1].length;
    } catch {
      $ = 0;
    }
    try {
      m = v.toString().split(".")[1].length;
    } catch {
      m = 0;
    }
    return C = Math.pow(10, Math.max($, m)), (h * C + v * C) / C;
  }
  return (() => {
    const h = oc();
    return g(h, f(ge, {
      get size() {
        return e.size;
      },
      get placeholder() {
        return e.placeholder;
      },
      get disabled() {
        return e.disabled;
      },
      onInput: r,
      notCreateFiled: !0,
      value: [n, l],
      onChange: d,
      onKeyDown: i,
      get append() {
        return [(() => {
          const v = dc();
          return v.$$click = a, g(v, f(W, {
            name: "chevron-up",
            size: 12
          })), v;
        })(), (() => {
          const v = uc();
          return v.$$click = o, g(v, f(W, {
            name: "chevron-down",
            size: 12
          })), v;
        })()];
      }
    })), P((v) => {
      const $ = t(), m = e.style;
      return v._v$ = O(h, $, v._v$), v._v$2 = Y(h, m, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), h;
  })();
}
J(["click"]);
const hc = /* @__PURE__ */ b("<div><span>"), mc = /* @__PURE__ */ b('<span class="cm-rate-star-content">');
function gc(e) {
  const [t, n] = e.current, l = () => {
    let r = !1, i = !1;
    return e.index <= t() - 1 && (i = !0), e.index > t() - 1 && e.index < t() && (r = !0), {
      "cm-rate-star": !0,
      "cm-rate-star-zero": !i && !r,
      "cm-rate-star-half": e.allowHalf && r,
      "cm-rate-star-full": i
    };
  };
  return (() => {
    const r = hc(), i = r.firstChild;
    return de(i, "click", e.onClickStar?.bind(null, e.index + 1), !0), de(i, "mouseenter", e.onMouseEnter?.bind(null, e.index + 1)), g(i, () => e.icon), g(r, (() => {
      const s = Z(() => !!e.allowHalf);
      return () => s() ? (() => {
        const c = mc();
        return de(c, "click", e.onClickHalfStar?.bind(null, e.index + 0.5), !0), de(c, "mouseenter", e.onMouseEnterHalf?.bind(null, e.index + 0.5)), g(c, () => e.icon), c;
      })() : null;
    })(), null), P((s) => O(r, l(), s)), r;
  })();
}
J(["click"]);
const vc = /* @__PURE__ */ b("<div><span>");
function $c(e) {
  const t = () => H(e, "cm-rate", {
    "cm-rate-disabled": e.disabled
  });
  if (!e.icon)
    return console.warn("need icon property"), null;
  const [n, l] = se(e, 0), [r, i] = q(n()), s = e.allowHalf || !1, c = ($) => {
    i($);
  }, d = ($, m) => {
    s && (m.preventDefault(), m.stopPropagation(), i($));
  }, a = () => {
    i(n());
  }, o = ($) => {
    l($), e.onChange && e.onChange($);
  }, u = ($, m) => {
    m.preventDefault(), m.stopPropagation(), s && (l($), e.onChange && e.onChange($));
  }, h = e.count || 5, v = [];
  for (let $ = 0; $ < h; $++)
    v.push({
      id: $,
      value: $
    });
  return (() => {
    const $ = vc(), m = $.firstChild;
    return $.addEventListener("mouseleave", a), g($, f(p, {
      each: v,
      children: (C, w) => f(gc, {
        get index() {
          return w();
        },
        onMouseEnterHalf: d,
        onClickHalfStar: u,
        onMouseEnter: c,
        onClickStar: o,
        get icon() {
          return e.icon;
        },
        allowHalf: s,
        current: [r, i]
      })
    }), m), g(m, () => e.children), P((C) => {
      const w = e.style, L = t();
      return C._v$ = Y($, w, C._v$), C._v$2 = O($, L, C._v$2), C;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), $;
  })();
}
const _c = /* @__PURE__ */ b("<li>");
function yc(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-group-wrap": e.data.group,
    "cm-select-option-active": e.checked,
    "cm-select-option-disabled": e.data.disabled
  }), n = () => {
    e.disabled || e.onClick && e.onClick(l);
  }, l = e.data[e.valueField];
  return f(V, {
    get when() {
      return e.visible;
    },
    fallback: null,
    get children() {
      const r = _c();
      r.$$click = n;
      const i = e.ref;
      return typeof i == "function" ? j(i, r) : e.ref = r, g(r, (() => {
        const s = Z(() => !!e.renderOption);
        return () => s() ? e.renderOption(e.data) : e.data[e.textField];
      })()), P((s) => {
        const c = t(), d = e.style;
        return s._v$ = O(r, c, s._v$), s._v$2 = Y(r, d, s._v$2), s;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r;
    }
  });
}
J(["click"]);
const wc = /* @__PURE__ */ b("<li>");
function bc(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-option-active": e.checked
  }), n = e.data.value;
  return (() => {
    const l = wc();
    return l.$$click = () => e.onClick && e.onClick(n), g(l, () => e.data.label), P((r) => {
      const i = t(), s = e.style;
      return r._v$ = O(l, i, r._v$), r._v$2 = Y(l, s, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
J(["click"]);
function xc(e) {
  return e;
}
function Du(e) {
  e.group = !0;
  const t = xe(() => e.children), n = () => t.toArray();
  return e.items = n(), e;
}
const Cc = /* @__PURE__ */ b("<div>"), kc = /* @__PURE__ */ b('<ul class="cm-select-option-list">'), Lc = /* @__PURE__ */ b('<div class="cm-select-options-wrap"><div class="cm-select-options">'), Sc = /* @__PURE__ */ b('<div class="cm-select-loading">加载中');
function Mn(e) {
  let t;
  const n = e.textField || "label", l = e.valueField || "value", [r, i] = q(!1), s = e.align ?? "bottomLeft", c = xe(() => e.children), d = () => c.toArray(), [a, o] = se(e, e.multi ? [] : "");
  let u = [];
  e.filter && e.defaultLabel && (e.multi && e.defaultLabel instanceof Array ? e.defaultLabel.forEach((R, T) => {
    u.push({
      [l]: a()[T],
      [n]: R
    });
  }) : u = [{
    [l]: a(),
    [n]: e.defaultLabel
  }]);
  let h = !0;
  const [v, $] = q(e.filter && e.multi ? "" : e.defaultLabel);
  queueMicrotask(() => {
    h = !1;
  });
  const [m, C] = q(u);
  let w = null;
  const L = () => H(e, "cm-select", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && `${a()}`.length !== 0,
    "cm-select-multi": e.multi,
    "cm-select-open": r(),
    "cm-select-with-prefix": e.prefix
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let S = {};
  function x(R, T) {
    R && R.forEach((N) => {
      T.push(N), N._show = !0, S[N[l]] = N, N.items && x(N.items, T);
    });
  }
  const E = et(() => {
    const R = d();
    S = {};
    let T = [];
    return e.emptyOption && T.push({
      [l]: "",
      [n]: e.emptyOption,
      _show: !0,
      emptyOption: !0
    }), u && u.forEach((N) => {
      T.push({
        ...N,
        _show: !0
      });
    }), R && x(R, T), T;
  }), [A, k] = ie({
    list: []
  });
  K(() => {
    const R = ye(() => a());
    k("list", E()), k("list", (T) => T, ne((T) => {
      e.multi ? T._checked = R.includes(T[l]) : T._checked = R === T[l];
    }));
  }), K(() => {
    const R = a();
    k("list", (T) => T, ne((T) => {
      e.multi ? T._checked = R.includes(T[l]) : T._checked = R === T[l];
    }));
  });
  const _ = (R, T) => {
    if (console.log(11), S[R] && S[R].items && S[R].items.length)
      return;
    let N = m();
    if (e.multi) {
      let B = a();
      const I = B.indexOf(R);
      I > -1 ? (B.splice(I, 1), N.splice(I, 1)) : (B = [...B], B.push(R), N.push(T)), o([...B]), $(""), C([...N]), e.onChange && e.onChange(B, T);
    } else
      h = !0, o(R), $(T[n]), C([...N]), Promise.resolve().then(() => {
        h = !1;
      }), N = [T], i(!1), e.onChange && e.onChange(R, T);
  }, y = () => {
    const R = [];
    return m().map((N) => {
      R.push({
        id: N[l],
        title: N[n]
      });
    }), e.multi ? R.length ? R : e.emptyOption ? [{
      id: "",
      title: e.emptyOption
    }] : [] : R.length ? R[0].title : e.emptyOption ? e.emptyOption : "";
  }, M = (R) => {
    C([]), e.multi ? (e.onChange && e.onChange([]), o([])) : (e.onChange && e.onChange(""), o(""), $(""), i(!1));
  };
  K(() => {
    const R = v();
    h || (e.remoteMethod ? R && (u = [], clearTimeout(w), w = setTimeout(() => {
      e.remoteMethod?.(R), i(!0);
    }, e.debounceTime || 300)) : k("list", (T) => T, ne((T) => {
      T._show = T[n].indexOf(R) > -1;
    })));
  }), K(() => {
    if (!r() && e.filter)
      if (e.multi)
        $("");
      else {
        const R = ye(() => m()), T = ye(() => v());
        R.length && R[0][n] !== T && (h = !0, $(R[0][n]), queueMicrotask(() => {
          h = !1;
        }));
      }
  });
  const F = (R, T) => {
    if (e.multi) {
      let N = m(), B = a();
      const I = B.indexOf(R.id);
      I > -1 && (B.splice(I, 1), N.splice(I, 1)), o([...B]), C([...N]), e.onChange && e.onChange(B);
    }
  }, z = () => {
    if (e.multi) {
      let R = m(), T = a();
      T.length > 0 && (T.pop(), R.pop(), o([...T]), C([...R]), e.onChange && e.onChange(T));
    }
  }, D = et(() => A.list.filter((R) => R._show));
  return (() => {
    const R = Cc(), T = t;
    return typeof T == "function" ? j(T, R) : t = R, g(R, f(ke, {
      get transfer() {
        return e.transfer;
      },
      align: s,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [r, i],
      get menu() {
        return (() => {
          const N = Lc(), B = N.firstChild;
          return g(B, f(V, {
            get when() {
              return !e.loading;
            },
            get fallback() {
              return Sc();
            },
            get children() {
              const I = kc();
              return g(I, f(Wn, {
                get items() {
                  return D();
                },
                itemEstimatedSize: 30,
                maxHeight: 200,
                children: (U) => {
                  const X = U.item;
                  return X.emptyOption ? f(bc, {
                    visible: !0,
                    get data() {
                      return {
                        label: X[n],
                        value: ""
                      };
                    },
                    get checked() {
                      return a() === "";
                    },
                    onClick: M
                  }) : f(yc, {
                    ref(ae) {
                      const ve = U.ref;
                      typeof ve == "function" ? ve(ae) : U.ref = ae;
                    },
                    get renderOption() {
                      return U.renderOption;
                    },
                    get visible() {
                      return X._show;
                    },
                    get disabled() {
                      return X.disabled;
                    },
                    data: X,
                    get checked() {
                      return X._checked;
                    },
                    textField: n,
                    valueField: l,
                    onClick: (ae) => _(ae, X)
                  });
                }
              })), I;
            }
          })), P(() => (e.maxHeight ? `${e.maxHeight}px` : "") != null ? B.style.setProperty("max-height", e.maxHeight ? `${e.maxHeight}px` : "") : B.style.removeProperty("max-height")), N;
        })();
      },
      get children() {
        return f(Fe, {
          get text() {
            return y();
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
            return f(W, {
              name: "chevron-down",
              class: "cm-select-cert"
            });
          },
          onClose: F,
          query: [v, $],
          get filter() {
            return e.filter;
          },
          onDeleteLastValue: z
        });
      }
    })), P((N) => {
      const B = L(), I = e.style;
      return N._v$ = O(R, B, N._v$), N._v$2 = Y(R, I, N._v$2), N;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), R;
  })();
}
const Mc = /* @__PURE__ */ b("<div><em>");
function qt(e, t) {
  if (!t)
    return !1;
  const n = it(new Date(e[0])), l = it(new Date(e[1]));
  return n ? e.length === 1 && n.getTime() === t.getTime() || e.length === 2 && n.getTime() <= t.getTime() && l.getTime() >= t.getTime() : !1;
}
function Wt(e, t) {
  return "" + e.getFullYear() + e.getMonth() + e.getDate() == "" + t.getFullYear() + t.getMonth() + t.getDate();
}
function Ec(e, t) {
  return "" + e.getFullYear() + e.getMonth() == "" + t.getFullYear() + t.getMonth();
}
function Dc(e) {
  const t = qe(), n = it(/* @__PURE__ */ new Date()), l = e.day ? n.toLocaleDateString() === e.day.toLocaleDateString() : !1, r = () => e.type === "dateRange" || e.type === "dateTimeRange" ? !1 : e.value && e.value instanceof Date && e.day ? e.value.toLocaleDateString() === e.day.toLocaleDateString() : !1;
  let i = e.day && t && t.disabledDate && t.disabledDate(e.day);
  e.month && e.day && Ec(e.month, e.day) || (i = !0);
  const s = () => e.range && e.day ? qt(e.range, e.day) : !1, c = () => e.range && e.range[0] && e.day && Wt(e.range[0], e.day), d = () => e.range && e.range[1] && e.day && Wt(e.range[1], e.day), a = () => {
    const v = e.range && e.range.length === 1 && e.hoverDate ? [e.hoverDate, e.range[0]] : [];
    return v.length === 2 && v.sort(($, m) => $.getTime() - m.getTime()), v && e.day ? qt(v, e.day) : !1;
  }, o = () => ({
    "cm-date-picker-day": !0,
    "cm-date-picker-empty": !e.day,
    "cm-date-picker-today": l,
    "cm-date-picker-active": r(),
    "cm-date-picker-inrange": !i && s(),
    "cm-date-picker-inhover": !i && a(),
    "cm-date-picker-first-range": c(),
    "cm-date-picker-last-range": d(),
    "cm-date-picker-day-disabled": i
  }), u = () => {
    e.day && t && t.onSelectDate(e.day, e.name);
  }, h = () => {
    e.day && t && t.onMouseOver(e.day);
  };
  return (() => {
    const v = Mc(), $ = v.firstChild;
    return v.$$mouseover = h, v.$$click = u, g($, (() => {
      const m = Z(() => !!e.day);
      return () => m() ? e.day.getDate() : "";
    })()), P((m) => O(v, o(), m)), v;
  })();
}
J(["click", "mouseover"]);
const Tc = /* @__PURE__ */ b('<div class="cm-month-picker-cell"><ul>'), zc = /* @__PURE__ */ b("<li>");
function jt(e) {
  const t = qe(), n = (r, i) => {
    i || e.onSelect && e.onSelect(e.type, r);
  };
  let l;
  return K(() => {
    if (l && t?.visible()) {
      const r = e.data[0], i = e.value ? e.value : e.type === "year" ? (/* @__PURE__ */ new Date()).getFullYear() : (/* @__PURE__ */ new Date()).getMonth() + 1;
      l.scrollTop = 26 * (i - r);
    }
  }), (() => {
    const r = Tc(), i = r.firstChild, s = l;
    return typeof s == "function" ? j(s, r) : l = r, g(i, f(p, {
      get each() {
        return e.data;
      },
      children: (c) => {
        let d = () => {
          let o = !1, u = new Date(e.day);
          return e.type === "year" && (u.setFullYear(c), u.setMonth(1), u.setDate(1), o = t && t.disabledDate && t.disabledDate(u)), e.type === "month" && (u.setMonth(c - 1), o = t && t.disabledDate && t.disabledDate(u)), o;
        };
        const a = () => ({
          "cm-month-picker-item": !0,
          "cm-month-picker-item-active": e.value === c,
          "cm-month-picker-item-disabled": d()
        });
        return (() => {
          const o = zc();
          return o.$$click = () => {
            n(c, d());
          }, g(o, c), P((u) => O(o, a(), u)), o;
        })();
      }
    })), r;
  })();
}
J(["click"]);
const Rc = /* @__PURE__ */ b('<div class="cm-date-picker-month-header">'), Pc = /* @__PURE__ */ b('<div class="cm-date-picker-month"><div class="cm-date-picker-month-body">');
function nt(e) {
  const [t, n] = e.store, l = qe(), r = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const o = e.name === "end" ? 1 : 0;
      return t.currentMonth[o] && t.currentMonth[o].getFullYear && t.currentMonth[o].getFullYear();
    } else
      return e.value && e.value.getFullYear && e.value.getFullYear();
  }, i = () => {
    const o = [];
    let u = (/* @__PURE__ */ new Date()).getFullYear();
    u = u - 60;
    for (let h = 0; h < 100; h++)
      o.push(u + h);
    return o;
  }, s = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat([]), c = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const o = e.name === "end" ? 1 : 0;
      return t.currentMonth[o] && t.currentMonth[o].getMonth && t.currentMonth[o].getMonth() + 1;
    } else
      return e.value && e.value.getMonth && e.value.getMonth() + 1;
  }, d = (o, u) => {
    const h = e.name === "end" ? 1 : 0, v = new Date(t.currentMonth[h]);
    if (o === "year" && v.setFullYear(u), o === "month" && v.setMonth(u - 1), e.onMonthChange) {
      e.onMonthChange(v, o, e.name);
      return;
    }
    n("currentMonth", e.name === "end" ? [t.currentMonth[0], v] : [v, t.currentMonth[1]]), e.type !== "dateRange" && e.type !== "date" && l && l.onSelectDate && l.onSelectDate(v, e.name);
  }, a = () => {
    e.onBack && e.onBack();
  };
  return (() => {
    const o = Pc(), u = o.firstChild;
    return g(o, f(V, {
      get when() {
        return e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange";
      },
      get children() {
        const h = Rc();
        return g(h, f($e, {
          type: "text",
          onClick: a,
          ghost: !0,
          get icon() {
            return f(W, {
              name: "chevron-left",
              size: 16
            });
          },
          children: "返回选择日期"
        })), h;
      }
    }), u), g(u, f(jt, {
      get data() {
        return i();
      },
      get value() {
        return r();
      },
      get day() {
        return t.currentMonth[0];
      },
      type: "year",
      onSelect: d
    }), null), g(u, f(jt, {
      get data() {
        return s();
      },
      get value() {
        return c();
      },
      get day() {
        return t.currentMonth[0];
      },
      type: "month",
      onSelect: d
    }), null), o;
  })();
}
const Ic = /* @__PURE__ */ b('<div class="cm-date-picker-date-inner"><div class="cm-date-picker-date-header"><div class="cm-date-picker-header-arrow"></div><div class="cm-date-picker-header-arrow"></div><span class="cm-date-picker-date-info"></span><div class="cm-date-picker-header-arrow"></div><div class="cm-date-picker-header-arrow"></div></div><div class="cm-date-picker-date-body"><div class="cm-date-picker-week-line"></div><div class="cm-date-picker-date-days"></div></div><div class="cm-date-picker-date-footer">'), Ac = /* @__PURE__ */ b('<div class="cm-date-picker-date">'), Fc = /* @__PURE__ */ b("<div>"), Nc = ["日", "一", "二", "三", "四", "五", "六"];
function it(e) {
  return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e;
}
const Je = (e, t, n, l, r, i) => {
  const s = e.currentMonth[l === "end" ? 1 : 0];
  s[`set${n}`](s[`get${n}`]() + 1 * r);
  const c = [...e.currentMonth];
  if (i) {
    const d = c[l === "end" ? 0 : 1];
    d[`set${n}`](d[`get${n}`]() + 1 * r);
  } else if (ee(c[0]).format("YYYY-MM") === ee(c[1]).format("YYYY-MM") || c[0].getTime() > c[1].getTime()) {
    const d = c[l === "end" ? 0 : 1];
    d[`set${n}`](d[`get${n}`]() + 1 * r);
  }
  t("currentMonth", c);
};
function lt(e) {
  const [t, n] = e.store;
  e.type;
  const [l, r] = q("date"), i = () => {
    Je(t, n, "Month", e.name, 1, e.stick);
  }, s = () => {
    Je(t, n, "Month", e.name, -1, e.stick);
  }, c = () => {
    Je(t, n, "FullYear", e.name, -1, e.stick);
  }, d = () => {
    Je(t, n, "FullYear", e.name, 1, e.stick);
  }, a = () => {
    r("month");
  }, o = () => {
    r("date");
  }, u = ($, m, C) => {
    const w = t.currentMonth[C === "end" ? 1 : 0];
    w.setFullYear($.getFullYear()), w.setMonth($.getMonth());
    const L = [...t.currentMonth], S = m === "year" ? "FullYear" : "Month";
    if (e.stick) {
      const x = new Date(w);
      x.setMonth(x.getMonth() + 1 * (C === "end" ? -1 : 1)), L[C === "end" ? 0 : 1] = x;
    } else if (ee(L[0]).format("YYYY-MM") === ee(L[1]).format("YYYY-MM") || L[0].getTime() > L[1].getTime()) {
      const x = L[C === "end" ? 0 : 1];
      x[`set${S}`](x[`get${S}`]() + 1 * (C === "end" ? -1 : 1));
    }
    n("currentMonth", L);
  }, h = () => {
    const $ = [], m = it(new Date(t.currentMonth[e.name === "end" ? 1 : 0]));
    m.setDate(1);
    const C = new Date(m);
    C.setMonth(C.getMonth() + 1), C.setDate(0);
    const w = m.getDay() % 7;
    let L = new Date(m);
    L.setDate(L.getDate() - w - 1);
    for (let x = 0; x < w; x++)
      $.push(new Date(L.setDate(L.getDate() + 1)));
    m.setDate(0);
    for (let x = 0; x < C.getDate(); x++)
      $.push(new Date(m.setDate(m.getDate() + 1)));
    let S = $[$.length - 1];
    S = new Date(S);
    for (let x = 0, E = 42 - $.length; x < E; x++)
      $.push(new Date(S.setDate(S.getDate() + 1)));
    return $;
  }, v = () => ee(t.currentMonth[e.name === "end" ? 1 : 0]).format("YYYY年MM月");
  return (() => {
    const $ = Ac();
    return g($, f(V, {
      get when() {
        return l() === "date";
      },
      get children() {
        const m = Ic(), C = m.firstChild, w = C.firstChild, L = w.nextSibling, S = L.nextSibling, x = S.nextSibling, E = x.nextSibling, A = C.nextSibling, k = A.firstChild, _ = k.nextSibling;
        return g(w, f(W, {
          name: "chevrons-left",
          onClick: c
        })), g(L, f(W, {
          name: "chevron-left",
          onClick: s
        })), S.$$click = a, g(S, v), g(x, f(W, {
          name: "chevron-right",
          onClick: i
        })), g(E, f(W, {
          name: "chevrons-right",
          onClick: d
        })), g(k, f(p, {
          each: Nc,
          children: (y) => (() => {
            const M = Fc();
            return g(M, y), M;
          })()
        })), g(_, f(p, {
          get each() {
            return h();
          },
          children: (y) => f(Dc, {
            get range() {
              return t.range;
            },
            get hoverDate() {
              return t.hoverDate;
            },
            get type() {
              return e.type;
            },
            day: y,
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
        })), m;
      }
    }), null), g($, f(V, {
      get when() {
        return l() === "month";
      },
      get children() {
        return f(nt, te(e, {
          onBack: o,
          onMonthChange: u
        }));
      }
    }), null), $;
  })();
}
J(["click"]);
function Bc(e) {
  const [t, n] = ce(e, ["value"]), l = () => t.value ? t.value[0] : "", r = () => t.value ? t.value[1] : "";
  return [f(nt, te({
    name: "start"
  }, n, {
    get value() {
      return l();
    }
  })), f(nt, te({
    name: "end"
  }, n, {
    get value() {
      return r();
    }
  }))];
}
function Oc(e) {
  const [t, n] = ce(e, ["value"]), l = () => t.value[0], r = () => t.value[1];
  return [f(lt, te({
    name: "start",
    get value() {
      return l();
    }
  }, n)), f(lt, te({
    name: "end",
    get value() {
      return r();
    }
  }, n))];
}
const Yc = /* @__PURE__ */ b('<div class="cm-date-picker-datetime"><div class="cm-datetime-content"></div><div class="cm-datetime-switch"><div class="cm-datetime-switch-item"></div><div class="cm-datetime-switch-item">');
function xt(e) {
  const [t, n] = q("date"), l = qe(), r = () => e.store[0].currentMonth[e.name === "end" ? 1 : 0], i = () => ee(e.value || /* @__PURE__ */ new Date()).format("YYYY-MM-DD"), s = () => ee(r()).format("HH:mm:ss"), c = (a) => {
    n(a);
  }, d = (a, o, u) => {
    let h = new Date(r());
    a === "hour" && h.setHours(o), a === "minute" && h.setMinutes(o), a === "second" && h.setSeconds(o), l && l.onSelectTime(h, e.name);
  };
  return (() => {
    const a = Yc(), o = a.firstChild, u = o.nextSibling, h = u.firstChild, v = h.nextSibling;
    return g(o, f(V, {
      get when() {
        return t() === "date";
      },
      get children() {
        return f(lt, e);
      }
    }), null), g(o, f(V, {
      get when() {
        return t() === "time";
      },
      get children() {
        return f(rt, te(e, {
          header: "选择时间",
          get value() {
            return r();
          },
          onSelectTime: d
        }));
      }
    }), null), de(h, "click", c.bind(null, "date"), !0), g(h, f(W, {
      name: "calendar1",
      size: 12
    }), null), g(h, i, null), de(v, "click", c.bind(null, "time"), !0), g(v, f(W, {
      name: "clock",
      size: 12
    }), null), g(v, s, null), P(($) => {
      const m = t() === "date", C = t() === "time";
      return m !== $._v$ && h.classList.toggle("active", $._v$ = m), C !== $._v$2 && v.classList.toggle("active", $._v$2 = C), $;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
J(["click"]);
function Vc(e) {
  const [t, n] = ce(e, ["value"]), l = () => t.value && t.value[0], r = () => t.value && t.value[1];
  return [f(xt, te({
    name: "start",
    get value() {
      return l();
    }
  }, n)), f(xt, te({
    name: "end",
    get value() {
      return r();
    }
  }, n))];
}
const Hc = /* @__PURE__ */ b("<div>"), Xc = /* @__PURE__ */ b('<div class="cm-date-picker-shortcuts">'), Uc = /* @__PURE__ */ b('<div class="cm-date-picker-wrap">'), En = fe();
function qc(e) {
  const [t, n] = q(!1), l = e.type ?? "date", [r, i] = se(e, "value", l === "dateRange" || l === "dateTimeRange" ? [] : ""), [s, c] = q();
  let d = e.format ?? "YYYY-MM-DD";
  (l === "month" || l === "monthRange") && (d = e.format ?? "YYYY-MM"), (l === "dateTime" || l === "dateTimeRange") && (d = e.format ?? "YYYY-MM-DD HH:mm:ss");
  const a = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Date();
  o.setMonth(o.getMonth() + 1);
  const [u, h] = ie({
    currentMonth: [a, o],
    range: [],
    hoverDate: void 0
  }), v = e.align ?? "bottomLeft", $ = e.seperator || "~";
  K(() => {
    let k = r();
    k && k instanceof Array && typeof k[0] == "function" && (k = k[0]());
    let _;
    if (k) {
      if (typeof k == "string")
        if (l === "dateRange" || l === "monthRange" || l === "dateTimeRange") {
          const y = k.split($);
          k = [ee(y[0]).toDate(), ee(y[1]).toDate()];
          const M = new Date(k[0]);
          let F = new Date(k[1]);
          ee(M).format("YYYY-MM") === ee(F).format("YYYY-MM") && F.setMonth(F.getMonth() + 1), _ = [M, F];
        } else {
          k = ee(k).toDate();
          const y = new Date(k);
          let M = new Date(k);
          M.setMonth(M.getMonth() + 1), _ = [y, M];
        }
      else {
        let y = /* @__PURE__ */ new Date(), M = /* @__PURE__ */ new Date();
        k instanceof Array && (typeof k[0] == "string" && (k[0] = ee(k[0]).toDate()), typeof k[1] == "string" && (k[1] = ee(k[1]).toDate()), y = k[0] === void 0 ? /* @__PURE__ */ new Date() : k[0] ? new Date(k[0]) : /* @__PURE__ */ new Date(), M = k[1] === void 0 ? /* @__PURE__ */ new Date() : k[1] ? new Date(k[1]) : /* @__PURE__ */ new Date()), l === "month" && k instanceof Date && (y = k, M = new Date(k)), ee(y).format("YYYY-MM") === ee(M).format("YYYY-MM") && M.setMonth(M.getMonth() + 1), _ = [y, M];
      }
      (l === "dateRange" || l === "dateTimeRange") && h("range", k);
    } else
      _ = [a, o];
    e.stick && (_[1] = new Date(_[0]), _[1].setMonth(_[1].getMonth() + 1)), _[0].setDate(1), _[1].setDate(1), h("currentMonth", _), c(k);
  });
  const m = () => H(e, "cm-date-picker", {
    [`cm-date-picker-${e.size}`]: e.size,
    "cm-date-picker-disabled": e.disabled,
    "cm-date-picker-clearable": !e.disabled && e.clearable && r() && r().length !== 0
  }), C = () => {
    i(""), l === "dateRange" && h("range", []), e.onChange && e.onChange("");
  }, w = (k, _) => {
    const y = new Date(k);
    if ((l === "month" || l === "monthRange") && (y.setDate(1), y.setHours(0), y.setMinutes(0), y.setSeconds(0), y.setMilliseconds(0)), l === "dateTime" || l === "dateTimeRange") {
      let D = s();
      l === "dateTimeRange" ? D = D && D.length ? D[u.range.length === 1 ? 1 : 0] : u.currentMonth[u.range.length === 1 ? 1 : 0] : D = D || u.currentMonth[u.range.length === 1 ? 1 : 0], y.setHours(D.getHours()), y.setMinutes(D.getMinutes()), y.setSeconds(D.getSeconds());
    }
    const M = /* @__PURE__ */ new Date();
    let F = s() || (l === "monthRange" || l === "dateRange" || l === "dateTimeRange" ? [M, M] : M);
    (l === "dateRange" || l === "dateTimeRange") && !F.length && (F.push(M), F.push(M));
    let z;
    if (_ === "start" ? z = [y, F[1]] : _ === "end" ? z = [F[0], y] : z = y, z instanceof Array && z[0].getTime() > z[1].getTime() && z.reverse(), l === "dateRange" || l === "dateTimeRange") {
      let D = u.range, R = [];
      if ((D[0] && D[1] || !D[0] && !D[1]) && (R = [y], h("hoverDate", new Date(y))), D[0] && !D[1]) {
        if (x(D[0], y))
          return;
        if (R = [D[0], y], R[0].getTime() > R[1].getTime()) {
          R.reverse();
          const T = /* @__PURE__ */ new Date();
          L(T, u.currentMonth[0]), L(u.currentMonth[0], u.currentMonth[1]), L(u.currentMonth[1], T), h("currentMonth", [...u.currentMonth]);
        }
        i(R), l === "dateRange" && n(!1);
      }
      h("range", R);
      return;
    }
    i(z), e.onChange && e.onChange(z), l === "date" && n(!1);
  }, L = (k, _) => {
    k.setHours(_.getHours()), k.setMinutes(_.getMinutes()), k.setSeconds(_.getSeconds());
  }, S = (k, _) => {
    let y = s(), M;
    _ === "start" ? (M = u.currentMonth[0], y && y[0] ? (L(y[0], k), y[0].getTime() > y[1].getTime() ? (y.reverse(), L(u.currentMonth[0], y[0]), L(u.currentMonth[1], y[1])) : L(M, k), i([...y])) : L(M, k)) : _ === "end" ? (M = u.currentMonth[1], y && y[1] ? (L(y[1], k), y[0].getTime() > y[1].getTime() ? (y.reverse(), L(u.currentMonth[0], y[0]), L(u.currentMonth[1], y[1])) : L(M, k), i([...y])) : L(M, k)) : (y || (y = /* @__PURE__ */ new Date()), L(y, k), M = u.currentMonth[0], L(M, k), i(new Date(y))), h("currentMonth", [...u.currentMonth]);
  }, x = (k, _) => {
    if (e.maxRange) {
      const y = k.getTime() - _.getTime();
      if (Math.abs(y / 1e3 / 60 / 60 / 24) > e.maxRange - 1)
        return !0;
    }
    return !1;
  }, E = (k) => {
    if (u.range && u.range[0]) {
      if (x(u.range[0], k) && e.maxRange) {
        const _ = new Date(u.range[0]), y = k.getTime() > u.range[0].getTime() ? 1 : -1;
        _.setDate(_.getDate() + (e.maxRange - 1) * y), h("hoverDate", _);
        return;
      }
      h("hoverDate", new Date(k));
    }
  }, A = et(() => {
    const k = s();
    return k ? typeof k == "string" ? k : l === "dateRange" || l === "monthRange" || l === "dateTimeRange" ? k[0] ? [ee(k[0]).format(d), ee(k[1]).format(d)].join($) : "" : ee(k).format(d) : "";
  });
  return f(En.Provider, {
    get value() {
      return {
        onSelectDate: w,
        onMouseOver: E,
        disabledDate: e.disabledDate,
        onSelectTime: S,
        visible: t
      };
    },
    get children() {
      const k = Hc();
      return g(k, f(ke, {
        visible: [t, n],
        get transfer() {
          return e.transfer;
        },
        align: v,
        get revers() {
          return e.revers;
        },
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        get menu() {
          return (() => {
            const _ = Uc();
            return g(_, f(V, {
              get when() {
                return e.shortCuts;
              },
              get children() {
                const y = Xc();
                return g(y, (() => {
                  const M = Z(() => typeof e.shortCuts == "function");
                  return () => M() ? e.shortCuts() : e.shortCuts;
                })()), y;
              }
            }), null), g(_, f(we, {
              get children() {
                return [f(Q, {
                  when: l === "date",
                  get children() {
                    return f(lt, {
                      store: [u, h],
                      get stick() {
                        return e.stick;
                      },
                      type: l,
                      get value() {
                        return s();
                      }
                    });
                  }
                }), f(Q, {
                  when: l === "month",
                  get children() {
                    return f(nt, {
                      store: [u, h],
                      type: l,
                      get value() {
                        return s();
                      }
                    });
                  }
                }), f(Q, {
                  when: l === "monthRange",
                  get children() {
                    return f(Bc, {
                      store: [u, h],
                      type: l,
                      get value() {
                        return s();
                      }
                    });
                  }
                }), f(Q, {
                  when: l === "dateRange",
                  get children() {
                    return f(Oc, {
                      store: [u, h],
                      get stick() {
                        return e.stick;
                      },
                      get value() {
                        return s();
                      },
                      type: l
                    });
                  }
                }), f(Q, {
                  when: l === "dateTime",
                  get children() {
                    return f(xt, {
                      store: [u, h],
                      get stick() {
                        return e.stick;
                      },
                      type: l,
                      get value() {
                        return s();
                      },
                      format: d
                    });
                  }
                }), f(Q, {
                  when: l === "dateTimeRange",
                  get children() {
                    return f(Vc, {
                      store: [u, h],
                      get stick() {
                        return e.stick;
                      },
                      type: l,
                      get value() {
                        return s();
                      },
                      format: d
                    });
                  }
                })];
              }
            }), null), _;
          })();
        },
        get children() {
          return f(V, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return Z(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return f(Fe, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return A();
                },
                onClear: C,
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
                  return f(W, {
                    name: "calendar1"
                  });
                }
              });
            }
          });
        }
      })), P((_) => {
        const y = m(), M = e.style;
        return _._v$ = O(k, y, _._v$), _._v$2 = Y(k, M, _._v$2), _;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), k;
    }
  });
}
const qe = () => he(En), Wc = /* @__PURE__ */ b('<div class="cm-time-picker-cell"><ul>'), jc = /* @__PURE__ */ b("<li>");
function mt(e) {
  const t = [];
  for (let s = 0; s < e.max; )
    t.push(s), s += e.step || 1;
  const n = ta(), l = qe(), r = (s, c) => {
    c || (n && n.onSelect(e.type, s, e.name), e.onSelectTime && e.onSelectTime(e.type, s, e.name));
  };
  let i;
  return K(() => {
    const s = n?.visible(), c = l?.visible();
    i && (s || c) && (i.scrollTop = 26 * (e.value / (e.step || 1)));
  }), (() => {
    const s = Wc(), c = s.firstChild, d = i;
    return typeof d == "function" ? j(d, s) : i = s, g(c, f(p, {
      each: t,
      children: (a) => {
        const o = n && n.disabledTime && n.disabledTime(a, e.type), u = () => ({
          "cm-time-picker-item": !0,
          "cm-time-picker-item-active": e.value === a,
          "cm-time-picker-item-disabled": o
        });
        return (() => {
          const h = jc();
          return de(h, "click", r.bind(null, a, o), !0), g(h, a), P((v) => O(h, u(), v)), h;
        })();
      }
    })), s;
  })();
}
J(["click"]);
const Kc = /* @__PURE__ */ b('<div class="cm-time-picker-header">'), Gc = /* @__PURE__ */ b('<div class="cm-time-picker-footer">'), Zc = /* @__PURE__ */ b('<div class="cm-time-picker-pane"><div class="cm-time-picker-options">');
function rt(e) {
  const t = () => e.value && e.value.getHours && e.value.getHours(), n = () => e.value && e.value.getMinutes && e.value.getMinutes(), l = () => e.value && e.value.getSeconds && e.value.getSeconds(), r = () => e.format.indexOf("H") > -1, i = () => e.format.indexOf("m") > -1, s = () => e.format.indexOf("s") > -1;
  return (() => {
    const c = Zc(), d = c.firstChild;
    return g(c, f(V, {
      get when() {
        return e.header;
      },
      get children() {
        const a = Kc();
        return g(a, () => e.header), a;
      }
    }), d), g(d, f(V, {
      get when() {
        return r();
      },
      get children() {
        return f(mt, {
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
    }), null), g(d, f(V, {
      get when() {
        return i();
      },
      get children() {
        return f(mt, {
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
    }), null), g(d, f(V, {
      get when() {
        return s();
      },
      get children() {
        return f(mt, {
          max: 60,
          type: "second",
          get value() {
            return l();
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
    }), null), g(c, f(V, {
      get when() {
        return e.footer;
      },
      get children() {
        const a = Gc();
        return g(a, () => e.footer), a;
      }
    }), null), c;
  })();
}
function Jc(e) {
  const [t, n] = ce(e, ["header", "footer", "value"]), l = () => t.value[0], r = () => t.value[1];
  return [f(rt, te({
    get value() {
      return l();
    },
    get header() {
      return t.header[0];
    },
    get footer() {
      return t.footer && t.footer.length && t.footer[0];
    }
  }, n, {
    name: "start"
  })), f(rt, te({
    get value() {
      return r();
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
const Qc = /* @__PURE__ */ b('<div tabindex="1">'), pc = /* @__PURE__ */ b('<div class="cm-time-picker-wrap">'), Dn = fe();
function ea(e) {
  const [t, n] = se(e, e.type === "timeRange" ? [] : ""), [l, r] = q(t()), [i, s] = q(!1), c = e.align ?? "bottomLeft", d = e.format ?? "HH:mm:ss", a = e.seperator || "~", o = e.header ?? (e.type === "timeRange" ? ["开始时间", "结束时间"] : void 0), u = () => H(e, "cm-time-picker", {
    "cm-time-picker-disabled": e.disabled,
    [`cm-time-picker-${e.theme}`]: e.theme,
    [`cm-time-picker-${e.size}`]: e.size,
    "cm-time-picker-clearable": !e.disabled && e.clearable && t() !== "" && t().length !== 0,
    "cm-time-picker-open": open
  });
  K(() => {
    let m = t();
    if (m)
      if (typeof m == "string")
        if (e.type === "timeRange") {
          const C = m.split(a);
          m = [ee(ee().format("YYYY-MM-DD ") + C[0]).toDate(), ee(ee().format("YYYY-MM-DD ") + C[1]).toDate()];
        } else
          m = ee(ee().format("YYYY-MM-DD ") + m).toDate();
      else
        m instanceof Array && m[0] && typeof m[0] == "string" && (m = [ee(ee().format("YYYY-MM-DD ") + m[0]).toDate(), ee(ee().format("YYYY-MM-DD ") + m[1]).toDate()]);
    r(m);
  });
  const h = (m, C, w) => {
    const L = /* @__PURE__ */ new Date();
    let S = l() || (e.type === "timeRange" ? [L, L] : L);
    e.type === "timeRange" && !S.length && (S.push(L), S.push(L));
    let x;
    if (w === "start" ? x = S[0] : w === "end" ? x = S[1] : x = S, m === "hour" && x.setHours(C), m === "minute" && x.setMinutes(C), m === "second" && x.setSeconds(C), e.type === "timeRange") {
      let E = [];
      w === "start" && (E = [new Date(x), S[1]]), w === "end" && (E = [S[0], new Date(x)]), E[0].getTime() > E[1].getTime() && (E = [E[1], E[0]]), n(E), e.onChange && e.onChange(E);
    } else {
      const E = new Date(x);
      n(E), e.onChange && e.onChange(E);
    }
  }, v = () => {
    n(""), e.onChange && e.onChange("");
  }, $ = () => {
    const m = l();
    return m ? typeof m == "string" ? m : e.type === "timeRange" ? m.length ? typeof m[0] == "string" ? m.join(a) : [ee(m[0]).format(d), ee(m[1]).format(d)].join(a) : "" : ee(m).format(d) : "";
  };
  return f(Dn.Provider, {
    get value() {
      return {
        onSelect: h,
        disabledTime: e.disabledTime,
        visible: i
      };
    },
    get children() {
      const m = Qc();
      return G(m, "x-placement", c), g(m, f(ke, {
        get transfer() {
          return e.transfer;
        },
        align: c,
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        visible: [i, s],
        get menu() {
          return (() => {
            const C = pc();
            return g(C, f(V, {
              get when() {
                return e.type === "timeRange";
              },
              get fallback() {
                return f(rt, {
                  get value() {
                    return l();
                  },
                  format: d,
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
                return f(Jc, {
                  get value() {
                    return l();
                  },
                  format: d,
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
            })), C;
          })();
        },
        get children() {
          return f(V, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return Z(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return f(Fe, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return $();
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
                  return f(W, {
                    name: "clock"
                  });
                }
              });
            }
          });
        }
      })), P((C) => O(m, u(), C)), m;
    }
  });
}
const ta = () => he(Dn), na = /* @__PURE__ */ b('<div class="cm-slider-handle" tabindex="0">'), ia = /* @__PURE__ */ b('<div class="cm-slider-handle" tabindex="1">'), la = /* @__PURE__ */ b('<div class="cm-slider-marks">'), ra = /* @__PURE__ */ b('<div><div class="cm-slider-rail"></div><div class="cm-slider-track"></div><div class="cm-slider-steps">'), ca = /* @__PURE__ */ b("<span>"), aa = /* @__PURE__ */ b('<span class="cm-slider-mark">');
function sa(e) {
  let t, n, l, r, i, s = e.min ?? 0, c = e.max ?? 100;
  const d = e.step ?? 1, a = e.range ?? !1, [o, u] = se(e, a ? [0, 0] : 0), h = () => H(e, "cm-slider", {
    "cm-slider-disabled": e.disabled
  });
  let v = () => t.getBoundingClientRect().width / (c - s) * d;
  const $ = () => {
    const _ = a ? o() : [s, o()], y = Math.abs(_[1] - _[0]) / (c - s) * 100, M = (_[0] - s) / (c - s) * 100, F = (_[1] - s) / (c - s) * 100;
    return {
      left: M,
      width: y,
      right: F
    };
  }, m = () => {
    const _ = $();
    return {
      left: _.left + "%",
      width: _.width + "%"
    };
  }, C = () => {
    const _ = a ? o()[0] : o();
    return e.tipFormatter ? e.tipFormatter(_) : _;
  }, w = () => e.tipFormatter ? e.tipFormatter(o()[1]) : o()[1];
  K(() => {
    const _ = $(), y = t.getBoundingClientRect(), M = a ? y.width * _.left / 100 : y.width * _.right / 100, F = a ? y.width * (_.left + _.width) / 100 : 0;
    n && n.setPosition({
      x: M,
      y: 0
    }), l && l.setPosition({
      x: F,
      y: 0
    });
  });
  const L = (_) => {
    let y;
    try {
      y = d.toString().split(".")[1].length;
    } catch {
      y = 0;
    }
    const M = Math.pow(10, y);
    return Math.round(_ * M) / M;
  }, S = (_, y) => {
    const F = t.getBoundingClientRect().width, z = L(y.x / F * (c - s) + s);
    if (setTimeout(() => {
      r && r.updatePosition();
    }), a && z > o()[1])
      return !1;
    let D = a ? [z, Math.max(z, o()[1])] : z;
    u(D), e.onChange && e.onChange(D);
  }, x = (_, y) => {
    const F = t.getBoundingClientRect().width, z = L(y.x / F * (c - s) + s);
    if (setTimeout(() => {
      i && i.updatePosition();
    }), a && z < o()[0])
      return !1;
    let D = a ? [Math.min(o()[0], z), z] : z;
    u(D), e.onChange && e.onChange(D);
  }, E = (_) => {
    if (e.disabled || _.target.classList.contains("cm-slider-handle"))
      return;
    const y = _.target.closest(".cm-slider");
    if (!y)
      return;
    const M = y.getBoundingClientRect(), F = _.pageX - M.left, D = t.getBoundingClientRect().width, R = L(Math.round(F / D * (c - s) / d + s) * d);
    let T = o();
    a ? (T = Math.abs(T[1] - R) > Math.abs(T[0] - R) ? [R, T[1]] : [T[0], R], u(T), e.onChange && e.onChange(T)) : (u(R), e.onChange && e.onChange(R));
  }, A = () => {
    if (!e.marks)
      return [];
    let _ = [];
    for (let y = s; y <= c; y += d)
      e.marks[y] && _.push(y);
    return _;
  }, k = () => {
    if (e.marks) {
      const _ = [];
      for (let y in e.marks)
        _.push({
          step: parseFloat(y),
          label: e.marks[y]
        });
      return _;
    }
    return [];
  };
  return (() => {
    const _ = ra(), y = _.firstChild, M = y.nextSibling, F = M.nextSibling;
    _.$$mousedown = E;
    const z = t;
    return typeof z == "function" ? j(z, y) : t = y, g(F, f(p, {
      get each() {
        return A();
      },
      children: (D) => {
        const R = a ? o() : [s, o()], T = D >= R[0] && D <= R[1], N = () => ({
          "cm-slider-step": !0,
          "cm-slider-step-active": T
        }), B = `${(D - s) / (c - s) * 100}%`;
        return (() => {
          const I = ca();
          return B != null ? I.style.setProperty("left", B) : I.style.removeProperty("left"), P((U) => O(I, N(), U)), I;
        })();
      }
    })), g(_, f(tt, {
      get disabled() {
        return e.disabled;
      },
      get content() {
        return C();
      },
      align: "top",
      ref(D) {
        const R = r;
        typeof R == "function" ? R(D) : r = D;
      },
      arrow: !0,
      get children() {
        return f($t, {
          axis: "x",
          get disabled() {
            return e.disabled;
          },
          ref(D) {
            const R = n;
            typeof R == "function" ? R(D) : n = D;
          },
          onDrag: S,
          bounds: "parent",
          class: "cm-slider-handle-drag",
          get grid() {
            return [v(), v()];
          },
          get children() {
            return na();
          }
        });
      }
    }), null), g(_, f(V, {
      when: a,
      get children() {
        return f(tt, {
          get disabled() {
            return e.disabled;
          },
          get content() {
            return w();
          },
          align: "top",
          ref(D) {
            const R = i;
            typeof R == "function" ? R(D) : i = D;
          },
          arrow: !0,
          get children() {
            return f($t, {
              axis: "x",
              get disabled() {
                return e.disabled;
              },
              ref(D) {
                const R = l;
                typeof R == "function" ? R(D) : l = D;
              },
              onDrag: x,
              bounds: "parent",
              class: "cm-slider-handle-drag",
              get grid() {
                return [v(), v()];
              },
              get children() {
                return ia();
              }
            });
          }
        });
      }
    }), null), g(_, f(V, {
      get when() {
        return e.marks;
      },
      get children() {
        const D = la();
        return g(D, f(p, {
          get each() {
            return k();
          },
          children: (R) => {
            const T = `${(R.step - s) / (c - s) * 100}%`;
            return (() => {
              const N = aa();
              return T != null ? N.style.setProperty("left", T) : N.style.removeProperty("left"), g(N, () => R.label), N;
            })();
          }
        })), D;
      }
    }), null), P((D) => {
      const R = h(), T = e.style, N = m();
      return D._v$ = O(_, R, D._v$), D._v$2 = Y(_, T, D._v$2), D._v$3 = Y(M, N, D._v$3), D;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), _;
  })();
}
J(["mousedown"]);
const Qe = {
  // 只返回全选数据，包含父节点和子节点
  Full: 0,
  // 返回全部选中子节点和部分选中的父节点
  Half: 1,
  // 只返回选中子节点
  Child: 2,
  // 如果父节点下所有子节点全部选中，只返回父节点
  Shallow: 3
};
class Kt {
  data = [];
  dataMap = {};
  valueMap = {};
  mode = 1;
  lastSelected = "";
  levels = [];
  checkRelation = "related";
  constructor(t) {
    this.data = t.data, this.checkRelation = t.checkRelation, this.setData(this.data), this.setValue(t.value), this.initDisabled(null, !1);
  }
  setData(t) {
    this.dataMap = {}, this.valueMap = {}, this.data = t, this.links = {}, this.levels = [], t && this.initData(null, t, 0);
  }
  initData(t, n, l) {
    const r = [];
    return this.levels[l] = [], n.forEach((i) => {
      i._level = l, r.push(i.id), this.dataMap[i.id] = i;
      const s = {};
      if (this.links[i.id] = s, s.parent = t ? t.id : null, this.levels[l].push(i.id), i.children) {
        const c = this.initData(i, i.children, l + 1);
        s.children = c;
      }
    }), r;
  }
  initValue(t, n) {
    if (!this.data || !n)
      return 0;
    t || (t = this.levels[0]);
    let l;
    return t?.forEach((r) => {
      const i = this.links[r].children;
      let s = n.includes(r) ? 1 : 0;
      i && i.length > 0 && (this.checkRelation === "related" ? s = this.initValue(i, n) : this.initValue(i, n)), this.setValueMap(r, s), l === void 0 ? l = s : l !== s && (l = 2);
    }), l;
  }
  initDisabled(t, n) {
    t || (t = this.levels[0]), t?.forEach((l) => {
      const r = this.dataMap[l].disabled || n;
      this.dataMap[l].disabled = r;
      const i = this.links[l].children;
      i && i.length > 0 && this.initDisabled(i, r);
    });
  }
  setValue(t) {
    this.initValue(null, t);
  }
  setValueMap(t, n) {
    this.valueMap[t] = n;
  }
  getAllChecked() {
    let t = [];
    for (let n in this.valueMap)
      this.valueMap[n] && t.push(n);
    return t;
  }
  getParentIds(t, n) {
    n.push(t);
    const l = this.links[t];
    l.parent && this.getParentIds(l.parent, n);
  }
  getOpened() {
    const t = [];
    return this.dataMap.forEach((n) => {
      n._open && t.push(n.id);
    }), t;
  }
  getValue(t) {
    const n = [];
    for (let l in this.valueMap) {
      const r = this.valueMap[l];
      switch (t) {
        case Qe.Full:
          r === 1 && n.push(l);
          break;
        case Qe.Half:
          r >= 1 && n.push(l);
          break;
        case Qe.Child: {
          const i = this.links[l].children;
          r === 1 && (!i || i.length === 0) && n.push(l);
          break;
        }
        case Qe.Shallow:
          r === 1 && ((() => {
            const s = this.links[l].parent;
            return s ? this.valueMap[s] === 1 : !1;
          })() || n.push(l));
          break;
      }
    }
    return n;
  }
  getAllCheckedData(t) {
    const n = [];
    return t.forEach((l) => {
      const r = this.dataMap[l];
      n.push(r);
    }), n;
  }
  getText(t) {
    const n = [];
    return t.forEach((l) => {
      const r = this.dataMap[l];
      n.push(r.title);
    }), n;
  }
  /**
   * 预先选择，返回被选择的节点
   * @param ids 
   * @param direction 
   */
  ifSets(t) {
    const n = {};
    t.forEach((r) => {
      this.ifSet(r, 1, "", n);
    });
    let l = [];
    for (let r in n)
      n[r] && l.push(r);
    return l;
  }
  ifSet(t, n, l, r) {
    this.isDisabled(t) || (r[t] = n);
    const {
      parent: i,
      children: s
    } = this.links[t];
    if (l !== "asc" && s && s.forEach((c) => {
      this.ifSet(c, n, "desc", r);
    }), l !== "desc" && i) {
      const c = i;
      let d = n;
      this.links[c].children.forEach((a) => {
        d !== r[a] && (d = 2);
      }), this.ifSet(c, d, "asc", r);
    }
  }
  set(t, n, l) {
    if (this.isDisabled(t) || this.setValueMap(t, n), this.checkRelation === "unRelated")
      return;
    const {
      parent: r,
      children: i
    } = this.links[t];
    if (l !== "asc" && i && i.forEach((s) => {
      this.set(s, n, "desc");
    }), l !== "desc" && r) {
      const s = r;
      let c = n;
      this.links[s].children.forEach((d) => {
        c !== this.valueMap[d] && (c = 2);
      }), this.set(s, c, "asc");
    }
  }
  // select (id) {
  //     if (this.lastSelected) {
  //         const update = this.nodeEvents[this.lastSelected];
  //         update && update();
  //     }
  //     const update = this.nodeEvents[id];
  //     update && update();
  //     this.lastSelected = id;
  // }
  // isSelected (id) {
  //     return this.lastSelected === id;
  // }
  // setOpened (ids, opened) {
  //     const temp = new Set(ids.split(','));
  //     for (const id in this.dataMap) {
  //         const item = this.dataMap[id];
  //         const hasChildren = item.children && item.children.length;
  //         if (hasChildren && temp.has(id)) {
  //             if (opened !== undefined) {
  //                 item.open = opened;
  //             }
  //             const update = this.nodeEvents[id];
  //             if (update) {
  //                 update();
  //             }
  //         }
  //     }
  // }
  disabledNode(t) {
    this.initDisabled([t], !0);
  }
  isDisabled(t) {
    const n = this.dataMap[t];
    return n ? n.disabled : !1;
  }
  /**
   * 动态添加子节点
   * @param id 
   * @param children 
   */
  addChildren(t, n) {
    this.dataMap[t] && n.forEach((s) => {
      this.dataMap[s.id] = s;
    });
    const r = this.links[t], i = n.map((s) => {
      const c = {};
      return this.links[s.id] = c, c.parent = t, s.id;
    });
    r.children = i;
  }
}
const oa = /* @__PURE__ */ b('<span class="cm-tree-item-folder">'), da = /* @__PURE__ */ b('<span class="cm-tree-item-file">'), ua = /* @__PURE__ */ b('<span class="cm-tree-item-icon">'), fa = /* @__PURE__ */ b('<li><div class="cm-tree-item-content"><span><span class="cm-tree-text">'), ha = /* @__PURE__ */ b('<span><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3571" width="16" height="16"><path d="M323.731 93.334c14.331 0 27.677 5.512 37.657 15.529l365.34 365.99c1.337 1.306 2.38 2.417 3.234 3.607l2.16 2.723c10.653 10.703 15.888 23.296 15.888 36.627 0 13.571-5.351 26.26-15.053 35.73l-367.853 363.953c-9.951 9.813-23.238 15.222-37.401 15.222-13.848 0-26.931-5.25-36.832-14.769-9.841-9.549-15.507-22.867-15.506-36.518 0-13.484 5.365-26.259 15.134-35.969l331.846-328.283-336.081-336.964c-9.607-9.666-14.915-22.296-14.915-35.619 0-13.958 5.673-27.055 15.937-36.876 9.768-9.271 22.734-14.381 36.444-14.381z" p-id="3572">'), ma = /* @__PURE__ */ b('<span class="cm-tree-patch">');
function ga(e) {
  const t = _a(), [n, l] = q(!1), r = () => ({
    "padding-left": e.level * e.gutter + "px"
  }), i = () => e.store.dataMap[e.data.id]._opened, s = () => e.store.dataMap[e.data.id]._selected, c = () => ({
    "cm-tree-item": !0,
    "cm-tree-item-open": i(),
    "cm-tree-item-selected": s()
  }), d = () => {
    let m = e.directory ? h() ? oa() : da() : null;
    return e.data.icon && (m = (() => {
      const C = ua();
      return g(C, () => e.data.icon), C;
    })()), m;
  }, a = () => {
    e.store.dataMap[e.data.id].disabled || t && t.onSelect && t.onSelect(e.data);
  }, o = async () => {
    if (t) {
      const m = e.store.dataMap[e.data.id];
      if (m.loading && t.loadData) {
        l(!0);
        try {
          const C = await t.loadData(e.data);
          C instanceof Array ? t.addChildren(m.id, e.data, C) : t.addChildren(m.id, e.data, [C]), t.cancelLoading(m.id);
        } catch {
        } finally {
          l(!1);
        }
      }
      t.onOpenClose(e.data.id);
    }
  }, u = (m) => {
    t && t.onChecked(e.data.id, m);
  }, h = () => e.data.children && e.data.children.length || e.data.loading, v = () => {
    let m = 0;
    return m = e.store.checkedMap[e.data.id], m === 2 ? "indeterminate" : m === 1;
  }, $ = (m) => {
    t && t.contextMenu && t.onContextMenu && t.onContextMenu({
      ...e.data
    });
  };
  return (() => {
    const m = fa(), C = m.firstChild, w = C.firstChild, L = w.firstChild;
    return g(C, f(V, {
      get when() {
        return n();
      },
      get fallback() {
        return (() => {
          const S = ha();
          return S.$$click = o, P(() => Le(S, `cm-tree-arrow ${h() ? "" : "hide"}`)), S;
        })();
      },
      get children() {
        return f(Ie, {
          color: "#1890ff",
          size: 16
        });
      }
    }), w), g(C, f(V, {
      get when() {
        return e.multi;
      },
      get children() {
        return f(Se, {
          get disabled() {
            return e.store.dataMap[e.data.id].disabled;
          },
          get checked() {
            return v();
          },
          onChange: u
        });
      }
    }), w), g(C, d, w), w.$$contextmenu = $, L.$$click = a, g(L, () => e.data.title), g(w, (() => {
      const S = Z(() => !!e.data.patch);
      return () => S() ? (() => {
        const x = ma();
        return g(x, () => e.data.patch), x;
      })() : null;
    })(), null), g(m, f(V, {
      get when() {
        return e.data.children && e.data.children.length;
      },
      get children() {
        return f(Ct, {
          onSelect: a,
          get multi() {
            return e.multi;
          },
          get directory() {
            return e.directory;
          },
          get store() {
            return e.store;
          },
          get data() {
            return e.data.children;
          },
          get level() {
            return e.level + 1;
          },
          get gutter() {
            return e.gutter;
          }
        });
      }
    }), null), P((S) => {
      const x = c(), E = r(), A = `cm-tree-title ${e.store.dataMap[e.data.id].disabled ? "disabled" : ""}`;
      return S._v$ = O(m, x, S._v$), S._v$2 = Y(C, E, S._v$2), A !== S._v$3 && Le(w, S._v$3 = A), S;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), m;
  })();
}
J(["contextmenu", "click"]);
const va = /* @__PURE__ */ b('<ul class="cm-tree-nodes">');
function Ct(e) {
  return (() => {
    const t = va();
    return g(t, f(p, {
      get each() {
        return e.data;
      },
      children: (n) => f(ga, {
        data: n,
        get store() {
          return e.store;
        },
        get level() {
          return e.level;
        },
        get gutter() {
          return e.gutter;
        },
        get multi() {
          return e.multi;
        },
        get directory() {
          return e.directory;
        }
      })
    })), t;
  })();
}
const Gt = /* @__PURE__ */ b("<div>"), Tn = fe();
function $a(e) {
  const t = () => H(e, "cm-tree"), [n, l] = ue(e, "value", ""), [r, i] = ue(e, "opened", []), [s, c] = ue(e, "selected", ""), d = e.gutter ?? 24, a = e.checkRelation ?? "related";
  let o = new Kt({
    value: n() || [],
    checkRelation: a,
    data: e.data
  });
  K(() => {
    o = new Kt({
      value: [],
      checkRelation: a,
      data: e.data
    }), Te(() => {
      h("data", e.data), h("dataMap", o.dataMap), h("selected", ""), h("openIds", []), h("checkedMap", {
        ...o.valueMap
      });
    }), ye(() => {
    });
  });
  const [u, h] = ie({
    data: e.data,
    dataMap: o.dataMap,
    selected: "",
    openIds: [],
    checkedMap: {
      ...o.valueMap
    }
  }), v = (k) => {
    const _ = r();
    _.includes(k) || (_.push(k), i([..._]));
  }, $ = (k) => {
    const _ = r();
    if (_.includes(k)) {
      const y = _.indexOf(k);
      _.splice(y, 1), i(_);
    }
  }, m = (k, _) => {
    o.set(k, _ ? 1 : 0, "");
    const y = o.getAllChecked();
    l(y);
  };
  K(() => {
    const k = r();
    ye(() => {
      u.openIds.forEach((_) => {
        k.includes(_) || h("dataMap", _, ne((y) => {
          y._opened && (y._opened = !1);
        }));
      });
    }), k.forEach((_) => {
      h("dataMap", _, ne((y) => {
        y._opened || (y._opened = !0);
      }));
    }), h("openIds", k.concat([]));
  }), K(() => {
    const k = s();
    h("dataMap", u.selected, ne((_) => {
      _._selected = !1;
    })), h("dataMap", k, ne((_) => {
      _._selected = !0;
    })), h("selected", k);
  }), K(() => {
    let k = n();
    e.multi && typeof k == "string" && (k = k.split(",")), o.setValue(k);
    const _ = o.getAllChecked();
    let y = [];
    ye(() => {
      for (let M in u.checkedMap)
        u.checkedMap[M] && !k.includes(M) && y.push(M);
    }), y.forEach((M) => {
      h("checkedMap", M, o.valueMap[M]);
    }), _ && _.forEach((M) => {
      h("checkedMap", M, o.valueMap[M]);
    });
  });
  const C = (k) => {
    const _ = r();
    if (_.includes(k)) {
      const y = _.indexOf(k);
      _.splice(y, 1);
    } else
      _.push(k);
    i([..._]);
  }, w = (k) => {
    c(k.id), e.onSelect && e.onSelect(k);
  }, L = (k) => {
    c(k);
  }, S = (k, _) => {
    o.set(k, _ ? 1 : 0, "");
    const y = o.getAllChecked();
    l(y), e.onChange && e.onChange(y);
  }, x = (k, _, y) => {
    if (u.dataMap[k]) {
      o.addChildren(k, y), o.set(k, 0, "");
      const F = o.getAllChecked();
      l(F), h("dataMap", k, ne((z) => {
        z.children = [], setTimeout(() => {
          z.children = y;
        });
      })), h("dataMap", ne((z) => {
        y.map((D) => {
          z[D.id] = D;
        });
      }));
    }
  }, E = (k) => {
    h("dataMap", k, "loading", !1);
  }, A = () => u.dataMap[u.selected];
  return e.ref && e.ref({
    openNode: v,
    closeNode: $,
    checkNode: m,
    getAllChecked: () => o.getValue(0),
    getAllCheckedData: (k) => o.getAllCheckedData(k),
    getHalfChecked: () => o.getValue(1),
    getChildChecked: () => o.getValue(2),
    getShallowChecked: () => o.getValue(3),
    getText: (k) => o.getText(k),
    disabledNode: o.disabledNode,
    selectNode: L,
    getSelectNode: A,
    setValue: (k) => {
      l(k);
    },
    getIfSets: (k) => o.ifSets(k)
  }), f(Tn.Provider, {
    get value() {
      return {
        signal: [u, h],
        onSelect: w,
        onOpenClose: C,
        onChecked: S,
        loadData: e.loadData,
        addChildren: x,
        cancelLoading: E,
        onContextMenu: e.onContextMenu,
        contextMenu: e.contextMenu
      };
    },
    get children() {
      return f(V, {
        get when() {
          return e.contextMenu;
        },
        get fallback() {
          return (() => {
            const k = Gt();
            return g(k, f(Ct, {
              store: u,
              get data() {
                return u.data;
              },
              level: 0,
              gutter: d,
              get multi() {
                return e.multi;
              },
              get directory() {
                return e.directory;
              }
            })), P((_) => O(k, t(), _)), k;
          })();
        },
        get children() {
          return f(ke, {
            trigger: "contextMenu",
            handler: ".cm-tree-text",
            align: "bottomLeft",
            get menu() {
              return e.contextMenu;
            },
            get onSelect() {
              return e.onSelectMenu;
            },
            get children() {
              const k = Gt();
              return g(k, f(Ct, {
                store: u,
                get data() {
                  return u.data;
                },
                level: 0,
                gutter: d,
                get multi() {
                  return e.multi;
                },
                get directory() {
                  return e.directory;
                }
              })), P((_) => O(k, t(), _)), k;
            }
          });
        }
      });
    }
  });
}
const _a = () => he(Tn), ya = /* @__PURE__ */ b('<div tabindex="1">'), wa = /* @__PURE__ */ b('<div class="cm-tree-select-wrap">'), ba = {
  All: 0,
  Half: 1,
  Leaf: 2,
  Shallow: 3
};
function xa(e) {
  const [t, n] = se(e, e.multi ? [] : ""), [l, r] = q(""), i = e.align ?? "bottomLeft";
  let s, c = ba[e.mode ?? "Half"];
  const d = e.checkRelation ?? "related", a = () => H(e, "cm-tree-select", {
    "cm-tree-select-disabled": e.disabled,
    [`cm-tree-select-${e.size}`]: e.size
  }), o = (m) => {
    e.multi || e.onChange && e.onChange(m.id);
  }, u = (m) => {
    d === "related" ? (n($()), e.onChange && e.onChange($())) : (n(m), e.onChange && e.onChange(m));
  }, h = () => {
    const m = e.multi ? [] : "";
    n(m), e.onChange && e.onChange(m);
  }, v = (m, C) => {
    let w = t();
    w.splice(w.indexOf(m.id), 1), n([...w]);
  }, $ = () => {
    let m = [];
    switch (c) {
      case 0: {
        m = s.getAllChecked();
        break;
      }
      case 1: {
        m = s.getHalfChecked();
        break;
      }
      case 2: {
        m = s.getChildChecked();
        break;
      }
      case 3: {
        m = s.getShallowChecked();
        break;
      }
    }
    return m;
  };
  return K(() => {
    const m = t();
    e.multi && m.join(",") === $().join(",") || e.multi && (d === "unRelated" ? s.setValue(m) : (c === 0 && s.setValue(m), c === 1 && s.setValue(m), c === 2 && s.setValue(m), c === 3 && (m.join(",") === $().join(",") ? s.setValue(s.getAllChecked()) : s.setValue(s.getIfSets(m)))));
  }), et(() => {
    let m = t();
    if (e.multi) {
      if (typeof m == "string") {
        m = m.split(","), n(m);
        return;
      }
      setTimeout(() => {
        let C = d === "related" ? $() : s.getAllChecked();
        const w = s.getAllCheckedData(C);
        r(w);
      });
    } else
      setTimeout(() => {
        const C = s.getSelectNode();
        r(C ? C.title : "");
      });
  }), e.ref && e.ref({
    ...s
  }), (() => {
    const m = ya();
    return g(m, f(ke, {
      get transfer() {
        return e.transfer;
      },
      align: i,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      get menu() {
        return (() => {
          const C = wa();
          return g(C, f($a, {
            get data() {
              return e.data;
            },
            get multi() {
              return e.multi;
            },
            onSelect: o,
            onChange: u,
            ref(w) {
              const L = s;
              typeof L == "function" ? L(w) : s = w;
            },
            get value() {
              return t();
            },
            get selected() {
              return e.multi ? "" : [t, n];
            },
            get checkRelation() {
              return e.checkRelation;
            }
          })), C;
        })();
      },
      get children() {
        return f(Fe, {
          get text() {
            return l();
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
            return f(W, {
              name: "chevron-down"
            });
          },
          onClose: v
        });
      }
    })), P((C) => {
      const w = a(), L = e.style;
      return C._v$ = O(m, w, C._v$), C._v$2 = Y(m, L, C._v$2), C;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), m;
  })();
}
function Ca(e) {
  return f(we, {
    get fallback() {
      return f(ge, e);
    },
    get children() {
      return [f(Q, {
        get when() {
          return e.type === "text" || !e.type || e.type === "password";
        },
        get children() {
          return f(ge, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "checkbox";
        },
        get children() {
          return f(qr, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "radio";
        },
        get children() {
          return f(ic, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "textarea";
        },
        get children() {
          return f(rc, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "switch";
        },
        get children() {
          return f(ac, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "search";
        },
        get children() {
          return f(sc, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "spinner";
        },
        get children() {
          return f(fc, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "rate";
        },
        get children() {
          return f($c, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "select";
        },
        get children() {
          return f(Mn, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "autocomplete";
        },
        get children() {
          return f(Pr, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "cascader";
        },
        get children() {
          return f(Yr, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "time" || e.type === "timeRange";
        },
        get children() {
          return f(ea, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "date" || e.type === "dateRange" || e.type === "month" || e.type === "monthRange" || e.type === "dateTime" || e.type === "dateTimeRange";
        },
        get children() {
          return f(qc, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "slider";
        },
        get children() {
          return f(sa, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "treeSelect";
        },
        get children() {
          return f(xa, e);
        }
      }), f(Q, {
        get when() {
          return e.type === "color";
        },
        get children() {
          return f(Pa, e);
        }
      })];
    }
  });
}
const ka = /* @__PURE__ */ b('<div class="cm-color-picker-alpha"><div class="cm-color-picker-alpha-wrap"><div class="cm-color-picker-alpha-picker">');
function La(e) {
  const [t, n] = q(e.value.hsl.a * 100), l = () => {
    const {
      r: a,
      g: o,
      b: u
    } = e.value.rgba, h = bt({
      r: a,
      g: o,
      b: u,
      a: 0
    }), v = bt({
      r: a,
      g: o,
      b: u,
      a: 1
    });
    return {
      background: `linear-gradient(to right, ${h} 0%, ${v} 100%)`
    };
  };
  let r;
  const i = (a) => {
    if (typeof a.button == "number" && a.button !== 0)
      return !1;
    c(a), document.addEventListener("mousemove", c, !1), document.addEventListener("mouseup", s, !1);
  }, s = (a) => {
    c(a), document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", s);
  };
  le(() => {
    document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", s);
  });
  const c = (a) => {
    a.preventDefault(), a.stopPropagation();
    const {
      clientWidth: o
    } = r, u = r.getBoundingClientRect().left + window.screenX, h = a.clientX - u;
    if (h < 0) {
      d(0);
      return;
    }
    if (h > o) {
      d(1);
      return;
    }
    d(Math.round(h * 100 / o) / 100);
  }, d = (a) => {
    n(a * 100);
    const {
      h: o,
      s: u,
      l: h,
      a: v
    } = e.value.hsl;
    v !== a && e.onChange && e.onChange({
      h: o,
      s: u,
      l: h,
      a,
      source: "rgba"
    });
  };
  return K(() => {
    n(e.value.hsl.a * 100);
  }), (() => {
    const a = ka(), o = a.firstChild, u = o.firstChild, h = r;
    return typeof h == "function" ? j(h, a) : r = a, o.$$mousedown = i, u.style.setProperty("top", "0px"), P((v) => {
      const $ = l(), m = `${t()}%`;
      return v._v$ = Y(o, $, v._v$), m !== v._v$2 && ((v._v$2 = m) != null ? u.style.setProperty("left", m) : u.style.removeProperty("left")), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
J(["mousedown"]);
const Sa = /* @__PURE__ */ b('<div class="cm-color-picker-recommend"><div class="cm-color-picker-recommend-container">'), Ma = /* @__PURE__ */ b('<div class="cm-color-picker-recommend-color"><div>'), Ea = /* @__PURE__ */ b("<br>");
function Da(e) {
  const t = e.colors ?? ["#2d8cf0", "#19be6b", "#ff9900", "#ed4014", "#00b5ff", "#19c919", "#f9e31c", "#ea1a1a", "#9b1dea", "#00c2b1", "#ac7a33", "#1d35ea", "#8bc34a", "#f16b62", "#ea4ca3", "#0d94aa", "#febd79", "#5d4037", "#00bcd4", "#f06292", "#cddc39", "#607d8b", "#000000", "#ffffff"], n = (l) => {
    e.onChange && e.onChange({
      hex: l,
      source: "hex"
    });
  };
  return (() => {
    const l = Sa(), r = l.firstChild;
    return g(r, f(p, {
      each: t,
      children: (i, s) => [(() => {
        const c = Ma(), d = c.firstChild;
        return c.$$click = () => n(i), i != null ? d.style.setProperty("background", i) : d.style.removeProperty("background"), c;
      })(), f(V, {
        get when() {
          return (s() + 1) % 12 === 0;
        },
        get children() {
          return Ea();
        }
      })]
    })), l;
  })();
}
J(["click"]);
const Ta = /* @__PURE__ */ b("<div>"), za = /* @__PURE__ */ b('<div class="cm-color-picker-confirm">'), Ra = /* @__PURE__ */ b('<div class="cm-color-picker-wrap">');
function Pa(e) {
  const [t, n] = q(!1), l = e.align ?? "bottomLeft", [r, i] = se(e, ""), [s, c] = q(ht(r() || "#2D8CF0")), [d, a] = q("");
  let o = s();
  const u = () => H(e, "cm-color-picker", {
    [`cm-color-picker-${e.size}`]: e.size
  }), h = (C) => {
    v(C);
  }, v = (C, w) => {
    o = s().hsl.h, c(ht(C, w || o));
  }, $ = () => {
    n(!1), i(d()), e.onChange && e.onChange(d());
  }, m = () => {
    n(!1), i(""), e.onChange && e.onChange("");
  };
  return K(() => {
    e.alpha ? a(bt(s().rgba)) : a(s().hex);
  }), K(() => {
    const C = ht(d());
    c(C);
  }), (() => {
    const C = Ta();
    return g(C, f(ke, {
      get transfer() {
        return e.transfer;
      },
      align: l,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [t, n],
      get menu() {
        return (() => {
          const w = Ra();
          return g(w, f(Pe, {
            dir: "v",
            get children() {
              return [f(Qr, {
                get value() {
                  return s();
                },
                onChange: h
              }), f(ec, {
                get value() {
                  return s();
                },
                onChange: h
              }), f(V, {
                get when() {
                  return e.alpha;
                },
                get children() {
                  return f(La, {
                    get value() {
                      return s();
                    },
                    onChange: h
                  });
                }
              }), f(V, {
                get when() {
                  return e.recommend;
                },
                get children() {
                  return f(Da, {
                    get colors() {
                      return e.colors;
                    },
                    onChange: h
                  });
                }
              }), (() => {
                const L = za();
                return g(L, f(Pe, {
                  dir: "h",
                  get children() {
                    return [f(Ca, {
                      size: "small",
                      class: "cm-color-picker-input",
                      value: [d, a]
                    }), f($e, {
                      size: "small",
                      type: "default",
                      onClick: m,
                      children: "清除"
                    }), f($e, {
                      size: "small",
                      type: "primary",
                      onClick: $,
                      children: "确定"
                    })];
                  }
                })), L;
              })()];
            }
          })), w;
        })();
      },
      get children() {
        return f(Gr, {
          get disabled() {
            return e.disabled;
          },
          get size() {
            return e.size;
          },
          get currentValue() {
            return s();
          },
          get value() {
            return r();
          },
          get open() {
            return t();
          }
        });
      }
    })), P((w) => {
      const L = u(), S = e.style;
      return w._v$ = O(C, L, w._v$), w._v$2 = Y(C, S, w._v$2), w;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), C;
  })();
}
function Tu(e) {
  const t = () => H(e, "cm-radio");
  return f(Xr, te(e, {
    get classList() {
      return t();
    },
    type: "radio"
  }));
}
const Ia = /* @__PURE__ */ b('<div class="cm-transfer-list-item"><div>');
function Aa(e) {
  const t = () => e.render ? e.render(e.data) : e.data.title, n = () => {
    e.data.disabled || e.onSelect(e.data);
  }, l = () => e.data._checked, r = () => ({
    display: e.data._hide ? "none" : "flex"
  });
  return (() => {
    const i = Ia(), s = i.firstChild;
    return i.$$click = n, g(i, f(Se, {
      get checked() {
        return l();
      },
      get disabled() {
        return e.data.disabled;
      }
    }), s), g(s, t), P((c) => Y(i, r(), c)), i;
  })();
}
J(["click"]);
const Fa = /* @__PURE__ */ b("<div><span>"), Na = /* @__PURE__ */ b('<div class="">'), Ba = /* @__PURE__ */ b('<div class="cm-transfer-filter-wrap">'), Oa = /* @__PURE__ */ b('<div class="cm-transfer-list"><div class="cm-transfer-list-header"></div><div class="cm-transfer-list-body"><div class="cm-transfer-list-content">');
function Zt(e) {
  const t = () => ({
    width: e.width ? `${e.width}px` : "",
    height: e.height ? `${e.height}px` : ""
  }), n = () => {
    const o = e.value || [], u = {};
    return o.forEach((h) => {
      u[h] = !0;
    }), e.store.data.filter((h) => e.name === "source" ? !u[h.id] : u[h.id]);
  }, l = () => {
    let o = 0;
    return n().forEach((u) => {
      u.disabled || o++;
    }), o;
  }, r = (o) => {
    e.onSelect(o, !o._checked), o._checked ? e.setStore(`${e.name}Ids`, [...e.store[`${e.name}Ids`], o.id]) : e.setStore(`${e.name}Ids`, ne((u) => {
      u.splice(u.indexOf(o.id), 1);
    }));
  }, i = () => {
    const o = e.store[`${e.name}Ids`];
    return o.length > 0 ? l() === o.length ? !0 : "indeterminate" : !1;
  }, s = (o) => {
    const u = [], h = n();
    h.forEach((v) => {
      e.onSelect(v, o);
    }), h.forEach((v) => {
      v._checked && u.push(v.id);
    }), e.setStore(`${e.name}Ids`, u);
  };
  K(() => {
    e.store[`${e.name}Ids`].length ? e.setStore && e.setStore(`${e.name}Disabled`, !1) : e.setStore && e.setStore(`${e.name}Disabled`, !0);
  });
  const c = (o) => {
    n().forEach((h) => {
      const v = () => e.render ? e.render(h) : h.title;
      e.setStore("data", ($) => $.id === h.id, "_hide", !v().includes(o));
    });
  }, d = () => n().length, a = () => {
    const o = e.store[`${e.name}Ids`];
    return o.length ? o.length + "/" + d() : d();
  };
  return (() => {
    const o = Oa(), u = o.firstChild, h = u.nextSibling, v = h.firstChild;
    return g(u, f(Ei, {
      get children() {
        return [(() => {
          const $ = Fa(), m = $.firstChild;
          return g($, f(Se, {
            get checked() {
              return i();
            },
            onChange: s
          }), m), g(m, () => e.name === "source" ? "源列表" : "目标列表"), $;
        })(), (() => {
          const $ = Na();
          return g($, a), $;
        })()];
      }
    })), g(h, f(V, {
      get when() {
        return e.filter;
      },
      get children() {
        const $ = Ba();
        return g($, f(ge, {
          get append() {
            return f(W, {
              name: "search"
            });
          },
          size: "small",
          onInput: c
        })), $;
      }
    }), v), g(v, f(p, {
      get each() {
        return n();
      },
      children: ($) => f(Aa, {
        data: $,
        onSelect: r,
        get store() {
          return e.store;
        },
        get render() {
          return e.render;
        }
      })
    })), P(($) => Y(o, t(), $)), o;
  })();
}
const Ya = /* @__PURE__ */ b('<div><div class="cm-transfer-operation">');
function zu(e) {
  const [t, n] = se(e, []), l = () => H(e, "cm-transfer"), [r, i] = ie({
    data: [],
    sourceDisabled: !0,
    targetDisabled: !0,
    sourceIds: [],
    targetIds: []
  });
  K(() => {
    i("data", e.data || []);
  });
  const s = (a, o) => {
    a.disabled || i("data", (u) => u.id === a.id, "_checked", o);
  }, c = () => {
    r.sourceIds.forEach((o) => {
      i("data", (u) => u.id === o, "_checked", !1);
    });
    let a = t();
    a = a.concat([...r.sourceIds]), i("sourceIds", []), n([...a]), e.onChange && e.onChange([...a]);
  }, d = () => {
    r.targetIds.forEach((o) => {
      i("data", (u) => u.id === o, "_checked", !1);
    });
    let a = t();
    r.targetIds.forEach((o) => {
      a.splice(a.indexOf(o), 1);
    }), i("targetIds", []), n([...a]), e.onChange && e.onChange([...a]);
  };
  return (() => {
    const a = Ya(), o = a.firstChild;
    return g(a, f(Zt, {
      get width() {
        return e.width;
      },
      get height() {
        return e.height;
      },
      store: r,
      setStore: i,
      name: "source",
      get value() {
        return t();
      },
      onSelect: s,
      get filter() {
        return e.filter;
      },
      get render() {
        return e.render;
      }
    }), o), g(o, f($e, {
      get disabled() {
        return r.sourceDisabled;
      },
      get icon() {
        return f(W, {
          name: "chevron-right"
        });
      },
      size: "small",
      onClick: c,
      children: "To Right"
    }), null), g(o, f($e, {
      get disabled() {
        return r.targetDisabled;
      },
      get icon() {
        return f(W, {
          name: "chevron-left"
        });
      },
      size: "small",
      onClick: d,
      children: "To Left"
    }), null), g(a, f(Zt, {
      get width() {
        return e.width;
      },
      get height() {
        return e.height;
      },
      store: r,
      setStore: i,
      name: "target",
      get value() {
        return t();
      },
      onSelect: s,
      get filter() {
        return e.filter;
      },
      get render() {
        return e.render;
      }
    }), null), P((u) => {
      const h = l(), v = e.style;
      return u._v$ = O(a, h, u._v$), u._v$2 = Y(a, v, u._v$2), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
function Va(e, t, n) {
  const l = `fail to post ${e} ${n.status}'`, r = new Error(l);
  return r.status = n.status, r.method = "post", r.url = e, r;
}
function Jt(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Qt(e) {
  if (typeof XMLHttpRequest > "u")
    return;
  const t = new XMLHttpRequest(), n = e.action;
  t.upload && (t.upload.onprogress = function(s) {
    s.total > 0 && (s.percent = s.loaded / s.total * 100), e.onProgress(s);
  });
  const l = new FormData();
  e.data && Object.keys(e.data).map((i) => {
    l.append(i, e.data[i]);
  }), l.append(e.filename, e.file), t.onerror = function(s) {
    e.onError(s);
  }, t.onload = function() {
    if (t.status < 200 || t.status >= 300)
      return e.onError(Va(n, e, t), Jt(t));
    e.onSuccess(Jt(t));
  }, t.open("post", n, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const r = e.headers || {};
  for (let i in r)
    r.hasOwnProperty(i) && r[i] !== null && t.setRequestHeader(i, r[i]);
  t.send(l);
}
const pt = /* @__PURE__ */ b('<span class="cm-progress-info">'), Ha = /* @__PURE__ */ b('<div class="cm-progress-bar">'), Xa = /* @__PURE__ */ b('<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle stroke="#f3f3f3" fill-opacity="0"></circle><path class="cm-progress-bar-path" stroke-linecap="round" fill-opacity="0">'), Ua = /* @__PURE__ */ b('<div><div class="cm-progress-outer"><div class="cm-progress-inner">');
function zn(e) {
  const t = () => e.max ?? 100, n = () => e.value && e.value < 0 ? 0 : e.value && e.value >= t() ? t() : e.value ?? 0, l = e.strokeWidth ?? 10, r = e.type ?? "line", i = () => e.radius ?? 60;
  let s = () => n() === 100 ? "finished" : e.status ?? "normal";
  const c = () => H(e, "cm-progress", {
    "cm-progress-hide-info": e.hidePercent,
    [`cm-progress-${s()}`]: !!s(),
    [`cm-progress-${r}`]: !!r
  }), d = () => `${n()}%`, a = () => {
    const w = s(), L = r === "line" ? 12 : 24;
    return e.infoRender ? e.infoRender(w, n()) : w === "finished" ? f(W, {
      name: "check-circle",
      size: L
    }) : w === "error" ? f(W, {
      name: "x-circle",
      size: L
    }) : `${n()}%`;
  }, o = () => {
    const w = {
      width: d(),
      height: `${l}px`
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (w["background-color"] = e.strokeColor), e.strokeColor instanceof Array)) {
      const L = e.strokeColor.length, S = e.strokeColor.map((x, E) => x + " " + E / L * 100 + "%");
      w["background-image"] = `linear-gradient(to right, ${S.join(",")})`;
    }
    return w;
  }, u = 2 * Math.PI, h = () => (Math.sin(u) * i()).toFixed(2), v = () => -(Math.cos(u) * i()).toFixed(2), $ = () => i() + l / 2, m = () => ["M", 0, -i(), "A", i(), i(), 0, 1, 1, h(), -v(), "A", i(), i(), 0, 1, 1, h(), v()], C = () => {
    const w = () => n() / t(), L = () => u * i(), x = {
      "stroke-dashoffset": `${(() => L() * (1 - w()))()}`,
      "stroke-dasharray": L()
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (x.stroke = e.strokeColor), e.strokeColor instanceof Array))
      for (let E = 0; E < e.strokeColor.length; E++) {
        const A = e.strokeColor[E];
        w() * 100 >= A.percent && (x.stroke = A.color);
      }
    return x;
  };
  return (() => {
    const w = Ua(), L = w.firstChild, S = L.firstChild;
    return g(S, f(we, {
      get children() {
        return [f(Q, {
          when: r === "line",
          get children() {
            const x = Ha();
            return g(x, f(V, {
              get when() {
                return e.textInside;
              },
              get children() {
                const E = pt();
                return g(E, () => `${n()}%`), E;
              }
            })), P((E) => Y(x, o(), E)), x;
          }
        }), f(Q, {
          when: r === "circle",
          get children() {
            const x = Xa(), E = x.firstChild, A = E.nextSibling;
            return x.style.setProperty("display", "block"), G(E, "stroke-width", l), G(A, "stroke-width", l), P((k) => {
              const _ = 2 * i() + l + "px", y = 2 * i() + l + "px", M = $(), F = $(), z = i(), D = m().join(" "), R = `translate(${$()},${$()})`, T = C();
              return _ !== k._v$ && ((k._v$ = _) != null ? x.style.setProperty("width", _) : x.style.removeProperty("width")), y !== k._v$2 && ((k._v$2 = y) != null ? x.style.setProperty("height", y) : x.style.removeProperty("height")), M !== k._v$3 && G(E, "cx", k._v$3 = M), F !== k._v$4 && G(E, "cy", k._v$4 = F), z !== k._v$5 && G(E, "r", k._v$5 = z), D !== k._v$6 && G(A, "d", k._v$6 = D), R !== k._v$7 && G(A, "transform", k._v$7 = R), k._v$8 = Y(A, T, k._v$8), k;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0
            }), x;
          }
        })];
      }
    })), g(w, f(V, {
      get when() {
        return !e.textInside;
      },
      get children() {
        const x = pt();
        return g(x, a), x;
      }
    }), null), P((x) => O(w, c(), x)), w;
  })();
}
const qa = /* @__PURE__ */ b('<div class="cm-upload-list-title">'), Wa = /* @__PURE__ */ b('<ul class="cm-upload-list"><div class="cm-upload-files">'), ja = /* @__PURE__ */ b('<img class="cm-upload-file-preview-img" alt="">'), Ka = /* @__PURE__ */ b('<div class="cm-upload-error">'), Ga = /* @__PURE__ */ b('<li class="cm-upload-file-card"><div class="cm-upload-file-preview"></div><div class="cm-upload-file-card-body"><div class="cm-upload-file-card-info"><span class="cm-upload-file-card-info-name"></span><span></span></div></div><div class="cm-upload-file-control">');
function Za(e) {
  const t = (l) => {
    const r = l.name.split(".").pop().toLocaleLowerCase() || "";
    let i = "file-text";
    return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(r) > -1 && (i = "image"), ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(r) > -1 && (i = "film1"), ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(r) > -1 && (i = "music"), i;
  }, n = (l) => {
    if (l < 1024)
      return l + "B";
    if (l < 1048576)
      return Math.round(l / 1024 * 10) / 10 + "KB";
    if (l < 1073741824)
      return Math.round(l / 1024 / 1024 * 10) / 10 + "MB";
    if (l < 1099511627776)
      return Math.round(l / 1024 / 1024 / 1024 * 10) / 10 + "GB";
  };
  return (() => {
    const l = Wa(), r = l.firstChild;
    return g(l, f(V, {
      get when() {
        return e.files && e.files.length;
      },
      get children() {
        const i = qa();
        return g(i, f(be, {
          type: "secondary",
          children: "已上传文件"
        }), null), g(i, f(be, {
          type: "primary",
          class: "cm-upload-clear",
          get onClick() {
            return e.onClear;
          },
          children: "清空"
        }), null), i;
      }
    }), r), g(r, f(p, {
      get each() {
        return e.files;
      },
      children: (i) => (() => {
        const s = Ga(), c = s.firstChild, d = c.nextSibling, a = d.firstChild, o = a.firstChild, u = o.nextSibling, h = d.nextSibling;
        return g(c, f(V, {
          get when() {
            return i.url;
          },
          get fallback() {
            return f(W, {
              get name() {
                return t(i);
              },
              size: 20
            });
          },
          get children() {
            const v = ja();
            return v.$$click = () => {
              e.onPreview && e.onPreview(i);
            }, P(() => G(v, "src", i.url)), v;
          }
        })), g(o, () => i.name), g(u, () => n(i.size)), g(d, f(V, {
          get when() {
            return i.showProgress && i.percentage !== 100;
          },
          get children() {
            return f(zn, {
              strokeWidth: 4,
              get value() {
                return i.percentage;
              },
              hidePercent: !0
            });
          }
        }), null), g(d, f(V, {
          get when() {
            return i.status === "fail";
          },
          get children() {
            const v = Ka();
            return g(v, f(W, {
              name: "alert-circle",
              size: 12
            }), null), g(v, f(be, {
              type: "error",
              size: "small",
              class: "cm-upload-error-text",
              children: "上传失败"
            }), null), g(v, f(be, {
              type: "primary",
              class: "cm-upload-retry",
              size: "small",
              onClick: () => {
                e.onRetry && e.onRetry(i);
              },
              children: "重试"
            }), null), v;
          }
        }), null), g(h, f($e, {
          size: "small",
          ghost: !0,
          get icon() {
            return f(W, {
              name: "x"
            });
          },
          onClick: () => {
            e.onRemove && e.onRemove(i);
          }
        })), P(() => G(o, "title", i.name)), s;
      })()
    })), l;
  })();
}
J(["click"]);
const Ja = /* @__PURE__ */ b('<ul class="cm-upload-list cm-upload-picture-list"><li class="cm-upload-picture-add">'), Qa = /* @__PURE__ */ b('<li class="cm-upload-picture-card"><img class="cm-upload-picture-img" alt=""><div class="cm-upload-picture-remove"></div><div class="cm-upload-picture-preview">');
function pa(e) {
  return (() => {
    const t = Ja(), n = t.firstChild;
    return g(t, f(p, {
      get each() {
        return e.files;
      },
      children: (l) => (() => {
        const r = Qa(), i = r.firstChild, s = i.nextSibling, c = s.nextSibling;
        return s.$$click = () => {
          e.onRemove && e.onRemove(l);
        }, g(s, f(W, {
          name: "x-circle"
        })), c.$$click = () => {
          e.onPreview && e.onPreview(l);
        }, g(c, f(W, {
          name: "eye",
          size: 20
        })), P(() => G(i, "src", l.url)), r;
      })()
    }), n), de(n, "click", e.onClick, !0), g(n, () => e.children), t;
  })();
}
J(["click"]);
const es = /* @__PURE__ */ b('<div class="cm-upload-out">'), ts = /* @__PURE__ */ b('<div><input class="cm-upload-input" type="file">');
function Ru(e) {
  const [t, n] = q(!1), [l, r] = q(!1), i = e.format ?? [], s = [], c = e.type ?? "select", [d, a] = ie({
    fileList: s,
    previewUrl: ""
  });
  let o = {};
  const u = e.name ?? "file", h = () => H(e, "cm-upload", {
    "cm-upload-select": c === "select",
    "cm-upload-drag": c === "drag",
    "cm-upload-dragOver": c === "drag" && t()
  });
  K(() => {
    if (e.defaultFileList) {
      const B = e.defaultFileList.map((I) => (I.uid || (I.uid = me()), I));
      a("fileList", B);
    }
  });
  const v = (B) => {
    const I = B.target.files;
    I && ($(I), N.value = null);
  }, $ = (B) => {
    let I = Array.prototype.slice.call(B);
    e.multiple || (I = I.slice(0, 1)), I.length !== 0 && I.forEach((U) => {
      m(U);
    });
  }, m = (B) => {
    if (!e.beforeUpload)
      return C(B);
    const I = e.beforeUpload(B);
    I && I.then ? I.then((U) => {
      Object.prototype.toString.call(U) === "[object File]" ? C(U) : C(B);
    }, () => {
    }) : I !== !1 && C(B);
  }, C = (B) => {
    if (i.length) {
      const I = B.name.split(".").pop().toLocaleLowerCase();
      if (!i.some((X) => X.toLocaleLowerCase() === I))
        return e.onFormatError && e.onFormatError(B, s), !1;
    }
    if (e.maxSize && B.size > e.maxSize * 1024)
      return e.onExceededSize && e.onExceededSize(B, s), !1;
    w(B), Qt({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: B,
      data: e.data,
      filename: u,
      action: e.action,
      onProgress: (I) => {
        S(I, B);
      },
      onSuccess: (I) => {
        x(I, B);
      },
      onError: (I, U) => {
        E(I, U, B);
      }
    });
  }, w = (B) => {
    B.uid = me(), o[B.uid] = B;
    const I = {
      status: "uploading",
      name: B.name,
      size: B.size,
      percentage: 0,
      uid: B.uid,
      showProgress: !0
    };
    a("fileList", [...d.fileList, I]);
  }, L = (B) => {
    const I = d.fileList;
    let U;
    return I.every((X) => (U = B.uid === X.uid ? X : null, !U)), U;
  }, S = (B, I) => {
    const U = L(I);
    e.onProgress && e.onProgress(B, U, d.fileList), a("fileList", (X) => X.uid === I.uid, "percentage", B.percent || 0);
  }, x = (B, I) => {
    const U = L(I);
    U && (a("fileList", (X) => X.uid === I.uid, ne((X) => {
      X.status = "finished", X.response = B, X.url = e.getFileUrl && e.getFileUrl(B, X);
    })), e.onSuccess && e.onSuccess(B, U, d.fileList), setTimeout(() => {
      a("fileList", (X) => X.uid === I.uid, ne((X) => {
        X.showProgress = !1;
      }));
    }, 1e3));
  }, E = (B, I, U) => {
    L(U), a("fileList", (X) => X.uid === U.uid, "status", "fail"), e.onError && e.onError(B, I, U);
  }, A = (B) => {
    a("fileList", ne((I) => {
      I.splice(I.indexOf(B), 1);
    })), delete o[B.uid], e.onRemove && e.onRemove(B, d.fileList);
  }, k = (B) => {
    B.status === "finished" && (a("previewUrl", B.url), r(!0), e.onPreview && e.onPreview(B));
  }, _ = () => {
    const B = Xn(d.fileList);
    o = {}, a("fileList", []), e.onClear && e.onClear(B);
  }, y = () => {
    e.disabled || N.click();
  }, M = (B) => {
    const I = o[B.uid];
    I && Qt({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: I,
      data: e.data,
      filename: u,
      action: e.action,
      onProgress: (U) => {
        S(U, I);
      },
      onSuccess: (U) => {
        x(U, I);
      },
      onError: (U, X) => {
        E(U, X, I);
      }
    });
  }, F = (B) => {
    B.preventDefault && B.preventDefault(), n(!1), !e.disabled && $(B.dataTransfer.files);
  }, z = (B) => {
    e.disabled || e.paste && $(B.clipboardData.files);
  }, D = (B) => {
    B.preventDefault && B.preventDefault(), n(!0);
  }, R = (B) => {
    B.preventDefault && B.preventDefault(), n(!1);
  }, T = () => d.fileList.map((B) => ({
    ...B
  }));
  let N;
  return e.ref && e.ref({
    clearFiles: () => {
      o = {}, a("fileList", []);
    },
    getFileList: T
  }), (() => {
    const B = ts(), I = B.firstChild;
    I.addEventListener("change", v);
    const U = N;
    return typeof U == "function" ? j(U, I) : N = I, g(B, f(V, {
      get when() {
        return e.listType === "picture";
      },
      get children() {
        return f(pa, {
          get files() {
            return d.fileList;
          },
          onRemove: A,
          onPreview: k,
          onClick: y,
          get children() {
            return e.children;
          }
        });
      }
    }), null), g(B, f(V, {
      get when() {
        return e.listType !== "picture";
      },
      get children() {
        return [(() => {
          const X = es();
          return X.addEventListener("dragleave", R), X.addEventListener("dragover", D), X.addEventListener("paste", z), X.addEventListener("drop", F), X.$$click = y, g(X, () => e.children), X;
        })(), f(Za, {
          get files() {
            return d.fileList;
          },
          onRemove: A,
          onPreview: k,
          onClear: _,
          onRetry: M
        })];
      }
    }), null), g(B, f(xn, {
      get previewList() {
        return [d.previewUrl];
      },
      visible: [l, r]
    }), null), P((X) => {
      const ae = h(), ve = e.style, je = e.multiple, Be = e.webkitdirectory, Oe = e.accept;
      return X._v$ = O(B, ae, X._v$), X._v$2 = Y(B, ve, X._v$2), je !== X._v$3 && (I.multiple = X._v$3 = je), Be !== X._v$4 && G(I, "webkitdirectory", X._v$4 = Be), Oe !== X._v$5 && G(I, "accept", X._v$5 = Oe), X;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), B;
  })();
}
J(["click"]);
const en = /* @__PURE__ */ b("<div>"), ns = /* @__PURE__ */ b('<div><div class="cm-index-list-list"></div><div class="cm-index-list-nav">'), is = /* @__PURE__ */ b("<dl><dt>"), ls = /* @__PURE__ */ b("<dd>");
function Pu(e) {
  const t = () => e.promote ?? !0, [n, l] = ue(e, "value", []), [r, i] = q(""), [s, c] = q(!1), [d, a] = q(""), [o, u] = ie({
    list: [],
    listMap: {}
  });
  let h = {}, v, $ = {};
  Xe(() => {
    const _ = [];
    h = {};
    let y = {};
    e.data.forEach((M) => {
      (M.id === void 0 || M.id === null) && (M.id = me());
      const F = {
        id: M.id
      };
      h[M.id] = M, y[M.id] = F, _.push(F), M.children && (F.children = [], M.children.forEach((z) => {
        (z.id === void 0 || z.id === null) && (z.id = me()), h[z.id] = z;
        const D = {
          id: z.id
        };
        y[z.id] = D, F.children.push(D);
      }));
    }), u({
      list: _,
      listMap: y
    });
  });
  const m = () => H(e, "cm-index-list", {
    "cm-index-list-border": e.border
  }), C = (_) => {
    if (!e.selectable)
      return;
    const y = n(), M = _.id;
    if (_.active) {
      const F = y.indexOf(M);
      y.splice(F, 1), l(y);
    } else
      y.push(M), l([...y]);
    e.onChange && e.onChange(n()), u("listMap", _.id, "active", !_.active);
  };
  let w = null;
  const L = (_, y, M) => {
    M.preventDefault && M.preventDefault(), M.stopPropagation && M.stopPropagation();
    const F = document.querySelector(_);
    if (F) {
      t() && (a(y), c(!0), w && clearTimeout(w), w = setTimeout(() => {
        S();
      }, 1e3));
      const z = F.getBoundingClientRect().top, D = v.getBoundingClientRect().top, R = z - D;
      v.scrollTo({
        top: v.scrollTop + R,
        behavior: "smooth"
      });
    }
  }, S = () => {
    c(!1);
  }, x = () => {
    const _ = v.scrollTop, y = E(_);
    i(y);
  }, E = (_) => {
    let y = "", M = Number.MAX_VALUE;
    for (let F in $) {
      const z = Math.abs($[F] - _);
      M > z && (M = z, y = F);
    }
    return y;
  }, A = (_, y) => {
    queueMicrotask(() => {
      $[y] = _.offsetTop;
    });
  }, k = () => ({
    "cm-index-list-promote": !0,
    "cm-index-list-promote-show": s()
  });
  return (() => {
    const _ = ns(), y = _.firstChild, M = y.nextSibling;
    y.addEventListener("scroll", x);
    const F = v;
    return typeof F == "function" ? j(F, y) : v = y, g(y, f(p, {
      get each() {
        return o.list;
      },
      children: (z) => {
        const D = h[z.id];
        return (() => {
          const R = is(), T = R.firstChild;
          return j((N) => {
            A(N, z.id);
          }, R), g(T, () => D.name), g(R, f(p, {
            get each() {
              return z.children;
            },
            children: (N) => {
              const B = h[N.id];
              return (() => {
                const I = ls();
                return de(I, "click", C.bind(null, N), !0), g(I, (() => {
                  const U = Z(() => !!e.renderItem);
                  return () => U() ? e.renderItem(B, N.active) : B.name;
                })()), P(() => Le(I, N.active ? "active" : "")), I;
              })();
            }
          }), null), P(() => G(R, "id", `cm_index_list_${z.id}`)), R;
        })();
      }
    })), g(M, f(p, {
      get each() {
        return o.list;
      },
      children: (z) => {
        const D = h[z.id], R = () => r() === z.id, T = () => ({
          "cm-index-list-nav-item": !0,
          active: R()
        });
        return (() => {
          const N = en();
          return de(N, "click", L.bind(null, `#cm_index_list_${z.id}`, D.id), !0), g(N, () => D.id), P((B) => O(N, T(), B)), N;
        })();
      }
    })), g(_, f(V, {
      get when() {
        return t();
      },
      get children() {
        const z = en();
        return g(z, d), P((D) => O(z, k(), D)), z;
      }
    }), null), P((z) => {
      const D = m(), R = e.style;
      return z._v$ = O(_, D, z._v$), z._v$2 = Y(_, R, z._v$2), z;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), _;
  })();
}
J(["click"]);
const Iu = (e) => e, rs = /* @__PURE__ */ b('<div><div class="cm-list-item-main"><div class="cm-list-item-meta"></div><div class="cm-list-item-content">'), cs = /* @__PURE__ */ b('<div class="cm-list-item-avatar">'), as = /* @__PURE__ */ b('<div class="cm-list-item-body"><div class="cm-list-item-title"></div><div class="cm-list-item-desc">'), ss = /* @__PURE__ */ b('<ul class="cm-list-item-addon">');
function os(e) {
  const t = ms(), n = t?.signal[0], l = t?.signal[1], r = () => H(e, "cm-list-item", {
    "cm-list-item-active": n && n() === e.id
  }), i = () => {
    l && l(e.id), t?.onSelect && t.onSelect(e.data);
  };
  return (() => {
    const s = rs(), c = s.firstChild, d = c.firstChild, a = d.nextSibling;
    return s.$$click = i, g(d, (() => {
      const o = Z(() => !!e.avatar);
      return () => o() ? (() => {
        const u = cs();
        return g(u, () => e.avatar), u;
      })() : null;
    })(), null), g(d, (() => {
      const o = Z(() => !!(e.title || e.desc));
      return () => o() ? (() => {
        const u = as(), h = u.firstChild, v = h.nextSibling;
        return g(h, () => e.title), g(v, () => e.desc), u;
      })() : null;
    })(), null), g(a, () => e.children), g(s, (() => {
      const o = Z(() => !!e.actions);
      return () => o() ? (() => {
        const u = ss();
        return g(u, () => e.actions), u;
      })() : null;
    })(), null), P((o) => {
      const u = r(), h = e.style;
      return o._v$ = O(s, u, o._v$), o._v$2 = Y(s, h, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
J(["click"]);
const ds = /* @__PURE__ */ b("<div>"), us = /* @__PURE__ */ b('<div class="cm-list-head">'), fs = /* @__PURE__ */ b('<div class="cm-list-foot">'), Rn = fe();
function hs(e) {
  const t = () => H(e, "cm-list", {
    "cm-list-border": e.border,
    [`cm-list-${e.size}`]: e.size
  }), [n, l] = ue(e, "activeKey", "");
  return f(Rn.Provider, {
    get value() {
      return {
        render: e.render,
        signal: [n, l],
        onSelect: e.onSelect
      };
    },
    get children() {
      const r = ds();
      return g(r, (() => {
        const i = Z(() => !!e.head);
        return () => i() ? (() => {
          const s = us();
          return g(s, () => e.head), s;
        })() : null;
      })(), null), g(r, () => e.children, null), g(r, (() => {
        const i = Z(() => !!e.foot);
        return () => i() ? (() => {
          const s = fs();
          return g(s, () => e.foot), s;
        })() : null;
      })(), null), P((i) => {
        const s = t(), c = e.style;
        return i._v$ = O(r, s, i._v$), i._v$2 = Y(r, c, i._v$2), i;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r;
    }
  });
}
hs.Item = os;
const ms = () => he(Rn), gs = /* @__PURE__ */ b("<div><div>");
function vs(e) {
  const [t, n] = ie({
    show: !1,
    status: "success",
    percent: 0
  }), l = () => H(e, "cm-loading-bar", {
    "cm-loading-bar-show": t.show
  }), r = () => ({
    "cm-loading-bar-inner": !0,
    [`cm-loading-bar-status-${t.status}`]: !!t.status
  }), i = (c) => {
    c.percent !== void 0 && n("percent", c.percent), c.status !== void 0 && n("status", c.status), c.show !== void 0 && n("show", c.show);
  }, s = () => ({
    width: `${t.percent}%`
  });
  return e.ref && e.ref({
    update: i
  }), (() => {
    const c = gs(), d = c.firstChild;
    return P((a) => {
      const o = l(), u = r(), h = s();
      return a._v$ = O(c, o, a._v$), a._v$2 = O(d, u, a._v$2), a._v$3 = Y(d, h, a._v$3), a;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), c;
  })();
}
let $s = 800, Ve, kt;
function gt() {
  Ve && (clearInterval(Ve), Ve = null);
}
function tn() {
  setTimeout(() => {
    Re({
      show: !1
    }), setTimeout(() => {
      Re({
        percent: 0
      });
    }, 200);
  }, $s);
}
function Re(e) {
  kt.update(e);
}
function _s() {
  const e = Me("cm-loading-bar-portal", "cm-loading-bar-portal");
  return at(() => f(vs, {
    ref(t) {
      const n = kt;
      typeof n == "function" ? n(t) : kt = t;
    }
  }), e), {
    start() {
      if (Ve)
        return;
      let t = 0;
      Re({
        percent: t,
        status: "success",
        show: !0
      }), Ve = setInterval(() => {
        t += Math.floor(Math.random() * 3 + 1), t > 95 && gt(), Re({
          percent: t,
          status: "success",
          show: !0
        });
      }, 200);
    },
    finish() {
      gt(), Re({
        percent: 100,
        status: "success",
        show: !0
      }), tn();
    },
    error() {
      gt(), Re({
        percent: 100,
        status: "error",
        show: !0
      }), tn();
    }
  };
}
const Au = _s();
function ys({
  data: e,
  validation: t = {},
  message: n = {}
}) {
  const l = {}, r = {}, i = /* @__PURE__ */ new Map(), s = async () => {
    const S = Object.keys(l);
    let x = !0;
    for (let E of S) {
      const A = l[E];
      if (!await A(w[E])) {
        x = !1;
        break;
      }
    }
    return x;
  }, c = async (S) => {
    const x = l[S];
    return !(x && !await x(w[S]));
  }, d = function(S) {
    return t ? t[S] : {};
  }, a = function(S) {
    return n ? n[S] : {};
  }, o = function() {
    const S = Object.keys(e), x = {};
    return S.forEach((E) => {
      x[E] = w[E];
    }), x;
  }, u = function(S, x) {
    Object.keys(e).forEach((A) => {
      x ? L[A] = S[A] : (w[A] = S[A], m(A, S[A]));
    });
  }, h = (S, x) => {
    l[S] = x;
  }, v = (S, x) => {
    r[S] = x;
  }, $ = (S) => {
    if (S) {
      const x = r[S];
      x && x();
    } else {
      const x = Object.keys(r);
      for (let E of x) {
        const A = r[E];
        A && A();
      }
    }
  }, m = (S, x) => {
    if (i.has(S)) {
      const [E, A] = i.get(S);
      A(x);
    }
  }, w = {
    ...e,
    isValid: s,
    getFormData: o,
    setFormData: u,
    setCheckValid: h,
    getValidation: d,
    getMessage: a,
    bindController: (S, x, E) => {
      i.set(S, [x, E]);
    },
    setClearValid: v,
    clearValidates: $,
    checkField: c
  }, L = new Proxy(w, {
    get(S, x, E) {
      if (i.has(x)) {
        const [A, k] = i.get(x);
        return A();
      }
      return S[x];
    },
    set(S, x, E, A) {
      S[x] = E, m(x, E);
      let k = l[x];
      return k && k(E), !0;
    }
  });
  return L;
}
const Pn = fe();
function Fu(e) {
  const t = ys({
    data: e.data || {},
    validation: {},
    message: {}
  }), n = () => H(e, "cm-login"), l = async () => {
    const r = await t.isValid();
    e.onSubmit && e.onSubmit(r, t);
  };
  return f(Pn.Provider, {
    value: {
      onSubmit: l,
      form: t
    },
    get children() {
      return f(ar, {
        form: t,
        onBeforeSubmit: l,
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
const In = () => he(Pn);
function Nu(e) {
  const t = e.type ?? "primary", n = In(), l = () => {
    n?.onSubmit && n?.onSubmit();
  }, r = e.size ?? "large";
  return f($e, te(e, {
    size: r,
    type: t,
    onClick: l,
    block: !0,
    children: "登 录"
  }));
}
function Bu(e) {
  const t = e.name ?? "username", n = e.icon ?? f(W, {
    name: "user"
  }), l = {
    require: Ae().required,
    ...e.rules
  }, r = {
    require: "请输入用户名！",
    ...e.messages
  }, i = e.placeholder ?? "请输入用户名", s = e.size ?? "large";
  return f(Ue, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: r,
    get children() {
      return f(ge, {
        prepend: n,
        size: s,
        placeholder: i,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Ou(e) {
  const t = e.name ?? "password", n = e.icon ?? f(W, {
    name: "lock"
  }), l = {
    require: Ae().required,
    ...e.rules
  }, r = {
    require: "请输入密码！",
    ...e.messages
  }, i = e.placeholder ?? "请输入密码", s = e.size ?? "large";
  return f(Ue, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: r,
    get children() {
      return f(ge, {
        type: "password",
        prepend: n,
        size: s,
        placeholder: i,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Yu(e) {
  const t = e.name ?? "mobile", n = e.icon ?? f(W, {
    name: "smartphone"
  }), l = {
    require: Ae().required,
    mobile: !0,
    ...e.rules
  }, r = {
    require: "请输入手机号码！",
    mobile: "输入的手机号码不正确！",
    ...e.messages
  }, i = e.placeholder ?? "请输入手机号码", s = e.size ?? "large";
  return f(Ue, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: r,
    get children() {
      return f(ge, {
        prepend: n,
        size: s,
        placeholder: i,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Vu(e) {
  const t = e.name ?? "email", n = e.icon ?? f(W, {
    name: "mail"
  }), l = {
    require: Ae().required,
    email: !0,
    ...e.rules
  }, r = {
    require: "请输入邮箱！",
    email: "输入的邮箱地址不正确！",
    ...e.messages
  }, i = e.placeholder ?? "请输入邮箱", s = e.size ?? "large";
  return f(Ue, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: r,
    get children() {
      return f(ge, {
        prepend: n,
        size: s,
        placeholder: i,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
const ws = /* @__PURE__ */ b('<span class="cm-count-down-prefix">'), bs = /* @__PURE__ */ b('<span class="cm-count-down-suffix">'), xs = /* @__PURE__ */ b('<span><span class="cm-count-down-value">');
function Cs(e) {
  return `${e}`.padStart(2, "0");
}
function ks(e) {
  let t;
  const n = e.duration ?? 1e3, [l, r] = q(e.value), i = () => {
    let d = l();
    d <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), d = 0);
    const a = Cs(d), o = e.format ?? "s";
    let u = o;
    return o.match(/s+/) && (u = u.replace(/s+/, a + "")), u;
  }, s = () => {
    t = setInterval(() => {
      r(l() - 1);
    }, n);
  };
  re(() => {
    s();
  }), le(() => {
    clearInterval(t), t = null;
  });
  const c = () => H(e, "cm-count-down");
  return (() => {
    const d = xs(), a = d.firstChild;
    return g(d, f(V, {
      get when() {
        return e.prefix;
      },
      get children() {
        const o = ws();
        return g(o, () => e.prefix), o;
      }
    }), a), g(a, i), g(d, f(V, {
      get when() {
        return e.suffix;
      },
      get children() {
        const o = bs();
        return g(o, () => e.suffix), o;
      }
    }), null), P((o) => {
      const u = c(), h = e.style;
      return o._v$ = O(d, u, o._v$), o._v$2 = Y(d, h, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), d;
  })();
}
function Hu(e) {
  const [t, n] = q(e.action ?? ""), [l, r] = q(!1), i = e.name ?? "captcha", s = e.icon ?? f(W, {
    name: "key"
  }), c = {
    require: Ae().required,
    ...e.rules
  }, d = {
    require: "请输入验证码！",
    ...e.messages
  }, a = e.placeholder ?? "请输入验证码", o = e.size ?? "large", u = e.countDownNumber ?? 60, h = () => t() ? f(wt, {
    get src() {
      return t();
    }
  }) : l() ? f(ks, {
    value: u,
    format: "s秒",
    onEnd: () => {
      r(!1);
    }
  }) : "获取验证码", v = In(), $ = async () => {
    const m = t();
    if (m) {
      const C = m.split("?"), w = new URLSearchParams(C[1]);
      w.set("_", `${Date.now()}`), n(C[0] + "?" + w.toString());
    } else {
      const C = v?.form;
      if (e.field && C && !await C.checkField(e.field))
        return;
      r(!0), e.onGetCaptcha && e.onGetCaptcha();
    }
  };
  return f(Ue, {
    get label() {
      return e.label;
    },
    name: i,
    rules: c,
    messages: d,
    get children() {
      return f(Pe, {
        get children() {
          return [f(ge, {
            prepend: s,
            size: o,
            placeholder: a
          }), f($e, {
            size: o,
            onClick: $,
            get disabled() {
              return l();
            },
            style: {
              flex: "0 0 120px"
            },
            get children() {
              return h();
            }
          })];
        }
      });
    }
  });
}
const Ls = /* @__PURE__ */ b('<li><div class="cm-menu-item-icon">'), Ss = /* @__PURE__ */ b('<div class="cm-menu-item-cert">'), Ms = /* @__PURE__ */ b('<li><div class="cm-menu-item-icon"></div><div class="cm-menu-item-text">'), Es = /* @__PURE__ */ b('<div class="cm-menu-item-text">');
function Lt(e) {
  !e.isSubmenuTitle && !e.name && console.warn("MenuItem need name prop");
  const [t, n] = q(!1), l = Tt(), r = () => H(e, "cm-menu-item", {
    "cm-menu-item-disabled": e.disabled,
    "cm-menu-item-active": !e.isSubmenuTitle && e.name && l?.store.activeName === e.name
  });
  K(() => {
    let c = !1;
    if (l && i && !e.isSubmenuTitle) {
      const d = i.parentElement.getAttribute("x-name");
      c = l.store.min && d === "__root";
    }
    n(c), !c && l?.dir === "v" && setTimeout(() => {
      const d = i.parentElement.getAttribute("x-padding"), a = parseInt(d) + 16;
      i.style.paddingLeft = a + "px";
    }, 20);
  });
  let i;
  re(() => {
    const c = i.parentElement.getAttribute("x-padding"), d = parseInt(c) + 16;
    if (i.style.paddingLeft = l?.dir === "h" ? "16px" : d + "px", !e.isSubmenuTitle) {
      const a = i.parentElement.getAttribute("x-name"), o = {
        name: e.name,
        parent: null,
        children: []
      };
      if (l && e.name)
        if (l.treeMap[e.name] = o, a === "__root")
          l?.tree.push(o);
        else {
          const u = l.treeMap[a];
          o.parent = u, u.children.push(o);
        }
    }
  });
  const s = () => {
    e.isSubmenuTitle && !l.store.min ? e.onSelect && e.onSelect() : l?.onSelect(e.name, e.data);
  };
  return f(V, {
    get when() {
      return t();
    },
    get fallback() {
      return (() => {
        const c = Ms(), d = c.firstChild, a = d.nextSibling;
        c.$$click = s;
        const o = i;
        return typeof o == "function" ? j(o, c) : i = c, g(d, () => e.icon), g(a, () => e.children), g(c, f(V, {
          get when() {
            return e.cert;
          },
          get children() {
            const u = Ss();
            return g(u, f(W, {
              name: "chevron-down",
              size: 14
            })), u;
          }
        }), null), P((u) => O(c, r(), u)), c;
      })();
    },
    get children() {
      return f(tt, {
        align: "right",
        arrow: !0,
        get content() {
          return (() => {
            const c = Es();
            return g(c, () => e.children), c;
          })();
        },
        get children() {
          const c = Ls(), d = c.firstChild;
          c.$$click = s;
          const a = i;
          return typeof a == "function" ? j(a, c) : i = c, g(d, () => e.icon), P((o) => O(c, r(), o)), c;
        }
      });
    }
  });
}
J(["click"]);
const Ds = /* @__PURE__ */ b("<li>"), Ts = /* @__PURE__ */ b('<li><ul class="cm-menu-submenu-list">'), zs = /* @__PURE__ */ b('<ul class="cm-menu-submenu-list">');
function Xu(e) {
  e.name || console.warn("SubMenu need name prop");
  const [t, n] = q(!1);
  let l = Tt(), r = () => {
    let o = !1;
    l && l.store.openKeys && e.name && (o = l.store.openKeys[e.name]), c.style.transition = "none", c.style.height = "auto";
    const u = c.offsetHeight;
    return c.style.transition = "", o ? (c.style.height = "0px", setTimeout(() => {
      c.style.height = u + "px";
    }), setTimeout(() => {
      c.style.height = "auto";
    }, 250)) : (c.style.height = u + "px", setTimeout(() => {
      c.style.height = "0px";
    })), o;
  };
  const i = () => H(e, "cm-menu-submenu", {
    "cm-menu-submenu-open": r()
  });
  let s, c;
  K(() => {
    let o = !1;
    if (l && s) {
      const u = s.parentElement.getAttribute("x-name");
      o = l.store.min && u === "__root";
    }
    n(o), !o && l?.dir === "v" && setTimeout(() => {
      const u = s.parentElement.getAttribute("x-padding"), h = parseInt(u) + 16;
      s.setAttribute("x-padding", u), c.setAttribute("x-padding", h);
    });
  }), re(() => {
    const o = s.parentElement.getAttribute("x-padding"), u = parseInt(o) + 16;
    s.setAttribute("x-padding", o), c.setAttribute("x-padding", u);
    const h = s.parentElement.getAttribute("x-name"), v = {
      name: e.name,
      parent: null,
      children: []
    };
    if (l && e.name)
      if (l.treeMap[e.name] = v, h === "__root")
        l?.tree.push(v);
      else {
        const $ = l.treeMap[h];
        v.parent = $, $.children.push(v);
      }
  });
  const d = () => {
    l?.setOpen(e.name);
  }, a = e.align || (l?.dir === "h" ? "bottom" : "rightTop");
  return f(V, {
    get when() {
      return t() || l?.dir === "h";
    },
    get fallback() {
      return (() => {
        const o = Ts(), u = o.firstChild, h = s;
        typeof h == "function" ? j(h, o) : s = o, g(o, f(Lt, {
          get icon() {
            return e.icon;
          },
          cert: !0,
          isSubmenuTitle: !0,
          onSelect: d,
          get children() {
            return e.title;
          }
        }), u);
        const v = c;
        return typeof v == "function" ? j(v, u) : c = u, g(u, () => e.children), P(($) => {
          const m = i(), C = e.name;
          return $._v$ = O(o, m, $._v$), C !== $._v$2 && G(u, "x-name", $._v$2 = C), $;
        }, {
          _v$: void 0,
          _v$2: void 0
        }), o;
      })();
    },
    get children() {
      const o = Ds(), u = s;
      return typeof u == "function" ? j(u, o) : s = o, g(o, f(ke, {
        align: a,
        get theme() {
          return l?.theme;
        },
        revers: !1,
        get menu() {
          return (() => {
            const h = zs(), v = c;
            return typeof v == "function" ? j(v, h) : c = h, g(h, () => e.children), P(() => G(h, "x-name", e.name)), h;
          })();
        },
        get children() {
          return f(Lt, {
            get icon() {
              return e.icon;
            },
            cert: !0,
            isSubmenuTitle: !0,
            onSelect: d,
            get children() {
              return e.title;
            }
          });
        }
      })), P((h) => O(o, i(), h)), o;
    }
  });
}
const Rs = /* @__PURE__ */ b('<li><ul class="cm-menu-group-list">');
function Uu(e) {
  e.name || console.warn("MenuGroup need name prop");
  const t = () => H(e, "cm-menu-group"), n = Tt();
  let l, r;
  return re(() => {
    const i = l.parentElement.getAttribute("x-padding");
    l.setAttribute("x-padding", i), r.setAttribute("x-padding", i);
    const s = l.parentElement.getAttribute("x-name"), c = {
      name: e.name,
      parent: null,
      children: []
    };
    if (n && e.name)
      if (n.treeMap[e.name] = c, s === "__root")
        n?.tree.push(c);
      else {
        const d = n.treeMap[s];
        c.parent = d, d.children.push(c);
      }
  }), K(() => {
    let i = !1;
    if (n && l) {
      const s = l.parentElement.getAttribute("x-name");
      i = n.store.min && s === "__root";
    }
    !i && n?.dir === "v" && setTimeout(() => {
      const s = l.parentElement.getAttribute("x-padding"), c = parseInt(s) + 16;
      l.setAttribute("x-padding", s), r.setAttribute("x-padding", c);
    });
  }), (() => {
    const i = Rs(), s = i.firstChild, c = l;
    typeof c == "function" ? j(c, i) : l = i, g(i, f(Lt, {
      get icon() {
        return e.icon;
      },
      isSubmenuTitle: !0,
      get children() {
        return e.title;
      }
    }), s);
    const d = r;
    return typeof d == "function" ? j(d, s) : r = s, g(s, () => e.children), P((a) => {
      const o = t(), u = e.name;
      return a._v$ = O(i, o, a._v$), u !== a._v$2 && G(s, "x-name", a._v$2 = u), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
const Ps = /* @__PURE__ */ b('<ul x-padding="0" x-name="__root" x-level="0">'), An = fe();
function qu(e) {
  const [t, n] = ue(e, "activeName", ""), l = () => e.accordion || !1, r = () => e.theme || "light", i = () => e.dir || "v", s = () => H(e, "cm-menu", {
    [`cm-menu-${i()}`]: i(),
    ["cm-menu-min"]: e.min,
    [`cm-menu-${r()}`]: r()
  }), c = [], d = {};
  K(() => {
    const m = t();
    m && (u("activeName", m), ye(() => {
      setTimeout(() => {
        a(m);
      });
    }));
  }), K(() => {
    u("min", e.min);
  });
  const a = (m) => {
    let C = d && d[m] && d[m].parent;
    if (C)
      for (; C; )
        o.openKeys[C.name] || $(C.name), C = C.parent;
    else
      (i() === "h" || o.min) && $(m);
  }, [o, u] = ie({
    openKeys: {},
    activeName: e.activeName,
    min: e.min
  }), h = (m, C) => {
    n(m), e.onSelect && e.onSelect(m, C);
  }, v = (m, C) => {
    m.children && m.children.forEach((w) => {
      o.openKeys[w.name] && (C[w.name] = !0), v(w, C);
    });
  }, $ = (m) => {
    l() || i() === "h" ? u("openKeys", ne((C) => {
      if (C[m]) {
        delete C[m];
        return;
      }
      let w = d[m];
      const L = {
        [m]: !0
      };
      for (; w.parent; )
        L[w.parent.name] = !0, w = w.parent;
      v(w, L), Object.keys(C).forEach((x) => {
        L[x] || delete C[x];
      }), Object.assign(C, L);
    })) : u("openKeys", ne((C) => {
      C[m] ? delete C[m] : C[m] = !0;
    }));
  };
  return f(An.Provider, {
    get value() {
      return {
        onSelect: h,
        store: o,
        setOpen: $,
        tree: c,
        treeMap: d,
        theme: r(),
        dir: i()
      };
    },
    get children() {
      const m = Ps();
      return g(m, () => e.children), P((C) => O(m, s(), C)), m;
    }
  });
}
const Tt = () => he(An), Is = /* @__PURE__ */ b('<div><div class="cm-message-inner"><div class="cm-message-content">'), As = /* @__PURE__ */ b('<div class="cm-message-close">'), Fs = /* @__PURE__ */ b("<div>");
function Ns(e) {
  let t = "";
  switch (e) {
    case "info": {
      t = "info";
      break;
    }
    case "success": {
      t = "check-circle";
      break;
    }
    case "warning": {
      t = "alert-circle";
      break;
    }
    case "error": {
      t = "x-circle";
      break;
    }
  }
  return t;
}
function Bs(e) {
  const [t, n] = q(!1), l = e.data;
  let r;
  const i = () => H(l, "cm-message", {
    "cm-message-visible": t(),
    [`cm-message-${l.type}`]: l.type,
    "cm-message-background": l.background
  });
  re(() => {
    setTimeout(() => {
      n(!0);
    });
    let a = l.duration;
    a == null && (a = 4), a && setTimeout(() => {
      s();
    }, a * 1e3);
  });
  const s = () => {
    n(!1);
  }, c = () => {
    t() || (e.onClose(l), l.onClose && l.onClose());
  }, d = () => ({
    ...l.style,
    "z-index": Ee()
  });
  return (() => {
    const a = Is(), o = a.firstChild, u = o.firstChild;
    a.addEventListener("transitionend", c);
    const h = r;
    return typeof h == "function" ? j(h, a) : r = a, g(o, (() => {
      const v = Z(() => !!l.loading);
      return () => v() ? f(Ie, {}) : f(W, {
        get name() {
          return Ns(l.type);
        },
        class: "cm-message-icon",
        size: 16
      });
    })(), u), g(u, () => l.content), g(o, (() => {
      const v = Z(() => !!l.closeable);
      return () => v() ? (() => {
        const $ = As();
        return g($, f(W, {
          name: "x",
          class: "cm-message-close-icon",
          size: 14,
          onClick: s
        })), $;
      })() : null;
    })(), null), P((v) => {
      const $ = i(), m = d();
      return v._v$ = O(a, $, v._v$), v._v$2 = Y(a, m, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
function Os(e) {
  return (() => {
    const t = Fs();
    return g(t, f(p, {
      get each() {
        return e.data;
      },
      children: (n) => f(Bs, {
        data: n,
        get onClose() {
          return e.onClose;
        }
      })
    })), t;
  })();
}
function Ys() {
  const [e, t] = ie({
    list: []
  }), n = Me("cm-message-portal", "cm-messages-wrap"), l = (r) => {
    const i = e.list.filter((s) => s.key !== r.key);
    t("list", () => [...i]);
  };
  return at(() => f(Os, {
    get data() {
      return e.list;
    },
    onClose: l
  }), n), {
    close: (r) => {
      const i = e.list.find((s) => s.key === r);
      l(i), i && i.onClose && i.onClose();
    },
    open: (r, i) => {
      typeof r == "string" && (r = {
        content: r
      }), r.key || (r.key = me()), r.type = i, t("list", ne((s) => {
        s.push(r);
      })), n.style.zIndex = Ee();
    },
    info(r) {
      this.open(r, "info");
    },
    success(r) {
      this.open(r, "success");
    },
    warning(r) {
      this.open(r, "warning");
    },
    error(r) {
      this.open(r, "error");
    }
  };
}
const Wu = Ys(), Vs = /* @__PURE__ */ b("<div>"), Hs = /* @__PURE__ */ b('<span class="cm-modal-close">'), Xs = /* @__PURE__ */ b('<div class="cm-modal-footer">'), Us = /* @__PURE__ */ b('<div><div class="cm-modal-header"></div><div class="cm-modal-body">'), qs = /* @__PURE__ */ b('<div tabindex="1">'), Ws = /* @__PURE__ */ b('<div class="cm-modal-title">'), js = /* @__PURE__ */ b('<div class="cm-modal-left"><div class="cm-modal-icon">'), Ks = /* @__PURE__ */ b('<div class="cm-modal-right">');
function Gs(e) {
  let t, n, l;
  const [r, i] = ue(e, "visible", !1), [s, c] = q(!1);
  let d = !1, a = "";
  const o = () => H(e, "cm-modal"), u = Ee(), h = () => ({
    "cm-modal-wrap": !0,
    "cm-modal-visible": r(),
    "cm-modal-fullscreen": e.fullScreen
  }), v = () => ({
    "cm-modal-mask": !0,
    "cm-modal-mask-visible": r()
  }), $ = () => {
    e.onClickClose && e.onClickClose(), m();
  }, m = () => {
    e.onClosed && e.onClosed(), i(!1);
  }, C = () => {
    m(), e.onCancel && e.onCancel();
  }, w = () => {
    if (e.onOk && e.onOk(), e.loading) {
      s() || c(!0);
      return;
    }
    m();
  };
  K(() => {
    if (!r())
      c(!1), d && (document.body.style.overflow = a, d = !1);
    else {
      if (t) {
        const R = t.getBoundingClientRect().height;
        t.children[0].getBoundingClientRect().height > R ? (t.style.overflow = "auto", t.children[0].style.top = 0, a = window.getComputedStyle(document.body, null).overflow, a !== "hidden" && (document.body.style.overflow = "hidden", d = !0)) : (t.style.overflow = "none", d = !1), setTimeout(() => {
          t.focus();
        }, 300);
      }
      z && l && l.reset();
    }
  });
  const L = (D) => {
    F && D.target === n && i(!1);
  }, S = (D) => {
    D.keyCode === 27 && i(!1);
  }, x = "cm-modal-portal", E = e.footer ?? !0, A = e.hasCloseIcon ?? !0, k = me(), _ = e.okText || "确 定", y = e.cancleText || "取 消", M = e.mask ?? !0, F = e.maskClosable ?? !0, z = e.resetPostion ?? !1;
  return f(ct, {
    get mount() {
      return Me(x, x);
    },
    get children() {
      return [f(st, {
        when: M,
        get children() {
          const D = Vs(), R = n;
          return typeof R == "function" ? j(R, D) : n = D, D.$$click = L, u - 1 != null ? D.style.setProperty("z-index", u - 1) : D.style.removeProperty("z-index"), P((T) => O(D, v(), T)), D;
        }
      }), (() => {
        const D = qs();
        D.$$keydown = S;
        const R = t;
        return typeof R == "function" ? j(R, D) : t = D, u != null ? D.style.setProperty("z-index", u) : D.style.removeProperty("z-index"), g(D, f($t, {
          ref(T) {
            const N = l;
            typeof N == "function" ? N(T) : l = T;
          },
          get bounds() {
            return e.bounds || "body";
          },
          get style() {
            return e.defaultPosition;
          },
          handle: '.cm-modal-header[data-id="' + k + '"]',
          get disabled() {
            return e.disabled;
          },
          get children() {
            const T = Us(), N = T.firstChild, B = N.nextSibling;
            return G(N, "data-id", `${k}`), g(N, (() => {
              const I = Z(() => !!e.title);
              return () => I() ? (() => {
                const U = Ws();
                return g(U, () => e.title), U;
              })() : null;
            })(), null), g(N, f(st, {
              when: A,
              get children() {
                const I = Hs();
                return I.$$click = $, g(I, f(W, {
                  name: "x"
                })), I;
              }
            }), null), g(B, () => e.children), g(T, f(st, {
              when: E,
              get children() {
                const I = Xs();
                return g(I, f($e, {
                  type: "primary",
                  get loading() {
                    return s();
                  },
                  onClick: w,
                  children: _
                }), null), g(I, f($e, {
                  type: "default",
                  className: "mr-10",
                  onClick: C,
                  children: y
                }), null), I;
              }
            }), null), P((I) => {
              const U = o(), X = e.style, ae = e.bodyStyle;
              return I._v$ = O(T, U, I._v$), I._v$2 = Y(T, X, I._v$2), I._v$3 = Y(B, ae, I._v$3), I;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }), T;
          }
        })), P((T) => O(D, h(), T)), D;
      })()];
    }
  });
}
function Zs() {
  const [e, t] = q(!0);
  return {
    open(n) {
      t(!0);
      let l = "";
      n.status === "success" && (l = "check-circle"), n.status === "info" && (l = "info"), n.status === "warning" && (l = "alert-circle"), n.status === "error" && (l = "x-circle"), n.status === "confirm" && (l = "help-circle");
      const r = (c) => {
        t(c), setTimeout(() => {
          s?.();
        }, 250);
      };
      n.style = {
        "min-width": "24vw",
        ...n.style
      }, n.visible = [e, r], n.defaultPosition = {
        top: "200px",
        ...n.defaultPosition
      };
      const i = Me("cm-modal-portal-instance", "cm-modal-portal"), s = at(() => f(Gs, te(n, {
        class: "cm-modal-instance",
        get children() {
          return [(() => {
            const c = js(), d = c.firstChild;
            return g(d, f(W, {
              name: l,
              size: 24
            })), c;
          })(), (() => {
            const c = Ks();
            return g(c, () => n.content), c;
          })()];
        }
      })), i);
    },
    success(n) {
      return n.status = "success", this.open(n);
    },
    info(n) {
      return n.status = "info", this.open(n);
    },
    warning(n) {
      return n.status = "warning", this.open(n);
    },
    error(n) {
      return n.status = "error", this.open(n);
    },
    confirm(n) {
      return n.status = "confirm", this.open(n);
    },
    remove() {
      t(!1), setTimeout(() => {
      }, 250);
    }
  };
}
const ju = Zs();
J(["click", "keydown"]);
const Js = /* @__PURE__ */ b('<div class="cm-notification-icon">'), Qs = /* @__PURE__ */ b('<div class="cm-notification-head">'), ps = /* @__PURE__ */ b('<span class="cm-notification-btn-wrap">'), eo = /* @__PURE__ */ b('<div><div class="cm-notification-item-wrap"><a class="cm-notification-close"></a><div class="cm-notification-content"><div class="cm-notification-body">'), to = /* @__PURE__ */ b("<div>"), no = /* @__PURE__ */ b('<div class="cm-notification">');
function io(e) {
  const [t, n] = q(!1), [l, r] = q(!1);
  let i;
  const s = e.data;
  let {
    style: c,
    icon: d,
    btn: a,
    theme: o,
    title: u,
    content: h
  } = s;
  const v = () => H(e, "cm-notification-item", {
    "cm-notification-item-width-icon": d,
    "cm-notification-item-open": t(),
    "cm-notification-item-close": l(),
    [`cm-notification-item-${o}`]: o
  });
  re(() => {
    setTimeout(() => {
      n(!0);
    }), s.duration && setTimeout(() => {
      $();
    }, s.duration * 1e3);
  });
  const $ = () => {
    l() || (r(!0), setTimeout(() => {
      m();
    }, 250));
  }, m = () => {
    e.onClose(s.key, s.dock), s.onClose && s.onClose();
  };
  return (() => {
    const C = eo(), w = C.firstChild, L = w.firstChild, S = L.nextSibling, x = S.firstChild, E = i;
    return typeof E == "function" ? j(E, C) : i = C, L.$$click = $, g(L, f(W, {
      name: "x",
      size: 16
    })), g(w, f(V, {
      when: d,
      get children() {
        const A = Js();
        return g(A, f(W, {
          name: d
        })), A;
      }
    }), S), g(S, f(V, {
      when: u,
      get children() {
        const A = Qs();
        return g(A, u), A;
      }
    }), x), g(x, h), g(S, f(V, {
      when: a,
      get children() {
        const A = ps();
        return g(A, a), A;
      }
    }), null), P((A) => {
      const k = v(), _ = c;
      return A._v$ = O(C, k, A._v$), A._v$2 = Y(C, _, A._v$2), A;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), C;
  })();
}
function pe(e) {
  const t = () => e.data, n = Ee();
  return f(V, {
    get when() {
      return Z(() => !!t())() && t().length;
    },
    get children() {
      const l = to();
      return n != null ? l.style.setProperty("z-index", n) : l.style.removeProperty("z-index"), g(l, f(p, {
        get each() {
          return t();
        },
        children: (r) => f(io, {
          data: r,
          get onClose() {
            return e.onClose;
          }
        })
      })), P(() => Le(l, `cm-notification-box cm-notification-${e.docker}`)), l;
    }
  });
}
function lo(e) {
  const t = () => e.data;
  return (() => {
    const n = no();
    return g(n, f(pe, {
      get data() {
        return t().topLeft;
      },
      docker: "top-left",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, f(pe, {
      get data() {
        return t().topRight;
      },
      docker: "top-right",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, f(pe, {
      get data() {
        return t().bottomLeft;
      },
      docker: "bottom-left",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, f(pe, {
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
J(["click"]);
function ro() {
  const [e, t] = ie({
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: []
  }), n = (r, i) => {
    const s = e[i].filter((c) => c.key !== r);
    t(i, s);
  }, l = Me("cm-notice-portal", "cm-notices-wrap");
  return at(() => f(lo, {
    data: e,
    onClose: n
  }), l), {
    open(r) {
      r.dock || (r.dock = "topRight"), r.key === void 0 && (r.key = me()), r.duration === void 0 && (r.duration = 4.5), t(r.dock, ne((i) => {
        i.push(r);
      })), l.style.zIndex = Ee();
    },
    info(r) {
      r.icon = "info", r.theme = "info", this.open(r);
    },
    success(r) {
      r.icon = "check-circle", r.theme = "success", this.open(r);
    },
    warning(r) {
      r.icon = "alert-circle", r.theme = "warning", this.open(r);
    },
    error(r) {
      r.icon = "x-circle", r.theme = "error", this.open(r);
    },
    help(r) {
      r.icon = "help-circle", r.theme = "info", this.open(r);
    }
  };
}
const Ku = ro(), co = /* @__PURE__ */ b("<div>");
function Gu(e) {
  const t = () => H(e, "cm-footer-floor", {
    "cm-footer-floor-center": e.center,
    "cm-footer-floor-divider-top": e.dividerTop,
    "cm-footer-floor-divider-bottom": e.dividerBottom
  }), n = () => Ce(e, {
    padding: e.padding,
    color: e.color
  });
  return (() => {
    const l = co();
    return g(l, () => e.children), P((r) => {
      const i = t(), s = n();
      return r._v$ = O(l, i, r._v$), r._v$2 = Y(l, s, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
const ao = /* @__PURE__ */ b('<div class="cm-page-footer-navigations">'), so = /* @__PURE__ */ b('<div class="cm-page-footer-navigation"><dl><dt>'), oo = /* @__PURE__ */ b('<dd class="cm-page-footer-navigation-link"><a target="_blank">');
function Zu(e) {
  return (() => {
    const t = ao();
    return g(t, () => e.children), t;
  })();
}
function uo(e) {
  return (() => {
    const t = so(), n = t.firstChild, l = n.firstChild;
    return g(l, () => e.head), g(n, () => e.children, null), t;
  })();
}
function fo(e) {
  return (() => {
    const t = oo(), n = t.firstChild;
    return g(n, () => e.icon, null), g(n, () => e.children, null), P((l) => {
      const r = e.link, i = e.style;
      return r !== l._v$ && G(n, "href", l._v$ = r), l._v$2 = Y(n, i, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), t;
  })();
}
uo.Link = fo;
const ho = /* @__PURE__ */ b("<div>");
function Ju(e) {
  const t = () => H(e, "cm-page-footer");
  return (() => {
    const n = ho();
    return g(n, () => e.children), P((l) => {
      const r = t(), i = e.style;
      return l._v$ = O(n, r, l._v$), l._v$2 = Y(n, i, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const mo = /* @__PURE__ */ b("<li>");
function nn(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-prev": !0,
    "cm-pagination-num-disabled": e.current === 1
  });
  return (() => {
    const n = mo();
    return de(n, "click", e.onClick, !0), g(n, f(W, {
      name: "chevron-left",
      size: 14
    })), P((l) => O(n, t(), l)), n;
  })();
}
J(["click"]);
const go = /* @__PURE__ */ b("<li>");
function ln(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-next": !0,
    "cm-pagination-num-disabled": e.disabled
  });
  return (() => {
    const n = go();
    return de(n, "click", e.onClick, !0), g(n, f(W, {
      name: "chevron-right",
      size: 14
    })), P((l) => O(n, t(), l)), n;
  })();
}
J(["click"]);
const vo = /* @__PURE__ */ b("<li>");
function vt(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-item-active": e.active
  });
  return (() => {
    const n = vo();
    return de(n, "click", e.onClick, !0), g(n, () => e.currentIndex), P((l) => O(n, t(), l)), n;
  })();
}
J(["click"]);
const rn = /* @__PURE__ */ b('<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••'), $o = /* @__PURE__ */ b('<ul class="cm-pagination-num-list"><span class="cm-pagination-mini-pages">/ '), _o = /* @__PURE__ */ b('<span class="cm-pagination-text mr-5">共<!>条'), yo = /* @__PURE__ */ b('<ul class="cm-pagination-num-list">'), wo = /* @__PURE__ */ b('<span class="cm-pagination-sizer">'), bo = /* @__PURE__ */ b('<span class="cm-pagination-jumper"><span class="cm-pagination-text">跳至</span><span class="cm-pagination-text">页'), xo = /* @__PURE__ */ b("<div>"), cn = [{
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
function Qu(e) {
  const t = () => H(e, "cm-pagination", {
    [`cm-pagination-${e.shape}`]: e.shape,
    [`cm-pagination-${e.size}`]: e.size
  }), n = () => e.current, l = () => e.total ?? 0, r = () => e.pageSize ?? 10, i = e.innerNear ?? 2, s = e.startEndShowNum ?? 2, c = e.showNums ?? !0, d = e.showTotal ?? !0, a = e.pages ?? cn, o = e.showJumper ?? !0, u = e.showPage ?? !0, [h, v] = q(n());
  K(() => {
    n() != h() && v(n());
  });
  const $ = () => {
    n() > 1 && S(n() - 1);
  }, m = () => {
    n() < w() && S(n() + 1);
  }, C = (k) => {
    S(parseInt(k, 10));
  }, w = () => l() === 0 ? 1 : Math.floor((l() - 1) / r()) + 1, L = (k) => typeof k == "number" && k >= 1, S = (k) => {
    let _ = k;
    L(_) && _ !== n() && (_ > w() && (_ = w()), v(_), e.onChange && e.onChange(_, r));
  }, x = (k) => {
    const _ = Math.floor((l() - 1) / k) + 1;
    e.onChangePageSize && e.onChangePageSize(k), n() > _ && (v(1), e.onChange && e.onChange(1, r));
  };
  function E() {
    const k = w(), _ = n() > s + i + 1 ? n() - i : s + 1, y = n() + i + s >= k ? k - s : n() + i;
    return {
      start: _,
      end: y
    };
  }
  function A() {
    if (!c)
      return null;
    const k = w(), _ = [], y = E(), M = n();
    for (let D = 1; D <= s; D++) {
      let R = M === D;
      _.push(f(vt, {
        active: R,
        get onClick() {
          return S.bind(null, D);
        },
        currentIndex: D
      }));
    }
    M > s + i + 1 && _.push(rn());
    let F = y.start;
    const z = y.end;
    for (; F <= z; F++) {
      let D = M === F;
      _.push(f(vt, {
        get onClick() {
          return S.bind(null, F);
        },
        currentIndex: F,
        active: D
      }));
    }
    M + i + s < k && _.push(rn());
    for (let D = k - s + 1; D <= k; D++) {
      let R = M === D;
      _.push(f(vt, {
        active: R,
        get onClick() {
          return S.bind(null, D);
        },
        currentIndex: D
      }));
    }
    return _;
  }
  return (() => {
    const k = xo();
    return g(k, f(we, {
      get children() {
        return [f(Q, {
          get when() {
            return e.mini;
          },
          get children() {
            const _ = $o(), y = _.firstChild;
            return y.firstChild, g(_, f(nn, {
              current: n,
              onClick: $
            }), y), g(_, f(ge, {
              get style() {
                return {
                  width: e.size === "small" ? "35px" : "50px"
                };
              },
              class: "mr-5",
              value: [h, v],
              get size() {
                return e.size;
              },
              onChange: C
            }), y), g(y, w, null), g(_, f(ln, {
              current: n,
              onClick: m,
              get disabled() {
                return n() === w();
              }
            }), null), _;
          }
        }), f(Q, {
          get when() {
            return !e.mini;
          },
          get children() {
            return [f(V, {
              when: d,
              get children() {
                const _ = _o(), y = _.firstChild, M = y.nextSibling;
                return M.nextSibling, g(_, l, M), _;
              }
            }), (() => {
              const _ = yo();
              return g(_, f(nn, {
                current: n,
                onClick: $
              }), null), g(_, A, null), g(_, f(ln, {
                current: n,
                onClick: m,
                get disabled() {
                  return n() === w();
                }
              }), null), _;
            })(), f(V, {
              when: u,
              get children() {
                const _ = wo();
                return g(_, f(Mn, {
                  get value() {
                    return r();
                  },
                  get size() {
                    return e.size;
                  },
                  onChange: x,
                  data: a,
                  get children() {
                    return f(p, {
                      each: cn,
                      children: (y) => f(xc, {
                        get label() {
                          return y.label;
                        },
                        get value() {
                          return y.value;
                        }
                      })
                    });
                  }
                })), _;
              }
            }), f(V, {
              when: o,
              get children() {
                const _ = bo(), y = _.firstChild, M = y.nextSibling;
                return g(_, f(ge, {
                  get style() {
                    return {
                      width: e.size === "small" ? "35px" : "50px"
                    };
                  },
                  class: "mr-5",
                  value: [h, v],
                  get size() {
                    return e.size;
                  },
                  onChange: C
                }), M), _;
              }
            })];
          }
        })];
      }
    })), P((_) => {
      const y = t(), M = e.style;
      return _._v$ = O(k, y, _._v$), _._v$2 = Y(k, M, _._v$2), _;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), k;
  })();
}
var ze;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(c, d, a, o) {
      if (this.version = c, this.errorCorrectionLevel = d, c < t.MIN_VERSION || c > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (o < -1 || o > 7)
        throw new RangeError("Mask value out of range");
      this.size = c * 4 + 17;
      let u = [];
      for (let v = 0; v < this.size; v++)
        u.push(!1);
      for (let v = 0; v < this.size; v++)
        this.modules.push(u.slice()), this.isFunction.push(u.slice());
      this.drawFunctionPatterns();
      const h = this.addEccAndInterleave(a);
      if (this.drawCodewords(h), o == -1) {
        let v = 1e9;
        for (let $ = 0; $ < 8; $++) {
          this.applyMask($), this.drawFormatBits($);
          const m = this.getPenaltyScore();
          m < v && (o = $, v = m), this.applyMask($);
        }
      }
      r(0 <= o && o <= 7), this.mask = o, this.applyMask(o), this.drawFormatBits(o), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(c, d) {
      const a = e.QrSegment.makeSegments(c);
      return t.encodeSegments(a, d);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(c, d) {
      const a = e.QrSegment.makeBytes(c);
      return t.encodeSegments([a], d);
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
    static encodeSegments(c, d, a = 1, o = 40, u = -1, h = !0) {
      if (!(t.MIN_VERSION <= a && a <= o && o <= t.MAX_VERSION) || u < -1 || u > 7)
        throw new RangeError("Invalid value");
      let v, $;
      for (v = a; ; v++) {
        const L = t.getNumDataCodewords(v, d) * 8, S = i.getTotalBits(c, v);
        if (S <= L) {
          $ = S;
          break;
        }
        if (v >= o)
          throw new RangeError("Data too long");
      }
      for (const L of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        h && $ <= t.getNumDataCodewords(v, L) * 8 && (d = L);
      let m = [];
      for (const L of c) {
        n(L.mode.modeBits, 4, m), n(L.numChars, L.mode.numCharCountBits(v), m);
        for (const S of L.getData())
          m.push(S);
      }
      r(m.length == $);
      const C = t.getNumDataCodewords(v, d) * 8;
      r(m.length <= C), n(0, Math.min(4, C - m.length), m), n(0, (8 - m.length % 8) % 8, m), r(m.length % 8 == 0);
      for (let L = 236; m.length < C; L ^= 253)
        n(L, 8, m);
      let w = [];
      for (; w.length * 8 < m.length; )
        w.push(0);
      return m.forEach((L, S) => w[S >>> 3] |= L << 7 - (S & 7)), new t(v, d, w, u);
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
    getModule(c, d) {
      return 0 <= c && c < this.size && 0 <= d && d < this.size && this.modules[d][c];
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
      const c = this.getAlignmentPatternPositions(), d = c.length;
      for (let a = 0; a < d; a++)
        for (let o = 0; o < d; o++)
          a == 0 && o == 0 || a == 0 && o == d - 1 || a == d - 1 && o == 0 || this.drawAlignmentPattern(c[a], c[o]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(c) {
      const d = this.errorCorrectionLevel.formatBits << 3 | c;
      let a = d;
      for (let u = 0; u < 10; u++)
        a = a << 1 ^ (a >>> 9) * 1335;
      const o = (d << 10 | a) ^ 21522;
      r(o >>> 15 == 0);
      for (let u = 0; u <= 5; u++)
        this.setFunctionModule(8, u, l(o, u));
      this.setFunctionModule(8, 7, l(o, 6)), this.setFunctionModule(8, 8, l(o, 7)), this.setFunctionModule(7, 8, l(o, 8));
      for (let u = 9; u < 15; u++)
        this.setFunctionModule(14 - u, 8, l(o, u));
      for (let u = 0; u < 8; u++)
        this.setFunctionModule(this.size - 1 - u, 8, l(o, u));
      for (let u = 8; u < 15; u++)
        this.setFunctionModule(8, this.size - 15 + u, l(o, u));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let c = this.version;
      for (let a = 0; a < 12; a++)
        c = c << 1 ^ (c >>> 11) * 7973;
      const d = this.version << 12 | c;
      r(d >>> 18 == 0);
      for (let a = 0; a < 18; a++) {
        const o = l(d, a), u = this.size - 11 + a % 3, h = Math.floor(a / 3);
        this.setFunctionModule(u, h, o), this.setFunctionModule(h, u, o);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(c, d) {
      for (let a = -4; a <= 4; a++)
        for (let o = -4; o <= 4; o++) {
          const u = Math.max(Math.abs(o), Math.abs(a)), h = c + o, v = d + a;
          0 <= h && h < this.size && 0 <= v && v < this.size && this.setFunctionModule(h, v, u != 2 && u != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(c, d) {
      for (let a = -2; a <= 2; a++)
        for (let o = -2; o <= 2; o++)
          this.setFunctionModule(c + o, d + a, Math.max(Math.abs(o), Math.abs(a)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(c, d, a) {
      this.modules[d][c] = a, this.isFunction[d][c] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(c) {
      const d = this.version, a = this.errorCorrectionLevel;
      if (c.length != t.getNumDataCodewords(d, a))
        throw new RangeError("Invalid argument");
      const o = t.NUM_ERROR_CORRECTION_BLOCKS[a.ordinal][d], u = t.ECC_CODEWORDS_PER_BLOCK[a.ordinal][d], h = Math.floor(t.getNumRawDataModules(d) / 8), v = o - h % o, $ = Math.floor(h / o);
      let m = [];
      const C = t.reedSolomonComputeDivisor(u);
      for (let L = 0, S = 0; L < o; L++) {
        let x = c.slice(S, S + $ - u + (L < v ? 0 : 1));
        S += x.length;
        const E = t.reedSolomonComputeRemainder(x, C);
        L < v && x.push(0), m.push(x.concat(E));
      }
      let w = [];
      for (let L = 0; L < m[0].length; L++)
        m.forEach((S, x) => {
          (L != $ - u || x >= v) && w.push(S[L]);
        });
      return r(w.length == h), w;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(c) {
      if (c.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let d = 0;
      for (let a = this.size - 1; a >= 1; a -= 2) {
        a == 6 && (a = 5);
        for (let o = 0; o < this.size; o++)
          for (let u = 0; u < 2; u++) {
            const h = a - u, $ = (a + 1 & 2) == 0 ? this.size - 1 - o : o;
            !this.isFunction[$][h] && d < c.length * 8 && (this.modules[$][h] = l(c[d >>> 3], 7 - (d & 7)), d++);
          }
      }
      r(d == c.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(c) {
      if (c < 0 || c > 7)
        throw new RangeError("Mask value out of range");
      for (let d = 0; d < this.size; d++)
        for (let a = 0; a < this.size; a++) {
          let o;
          switch (c) {
            case 0:
              o = (a + d) % 2 == 0;
              break;
            case 1:
              o = d % 2 == 0;
              break;
            case 2:
              o = a % 3 == 0;
              break;
            case 3:
              o = (a + d) % 3 == 0;
              break;
            case 4:
              o = (Math.floor(a / 3) + Math.floor(d / 2)) % 2 == 0;
              break;
            case 5:
              o = a * d % 2 + a * d % 3 == 0;
              break;
            case 6:
              o = (a * d % 2 + a * d % 3) % 2 == 0;
              break;
            case 7:
              o = ((a + d) % 2 + a * d % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[d][a] && o && (this.modules[d][a] = !this.modules[d][a]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let c = 0;
      for (let u = 0; u < this.size; u++) {
        let h = !1, v = 0, $ = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[u][m] == h ? (v++, v == 5 ? c += t.PENALTY_N1 : v > 5 && c++) : (this.finderPenaltyAddHistory(v, $), h || (c += this.finderPenaltyCountPatterns($) * t.PENALTY_N3), h = this.modules[u][m], v = 1);
        c += this.finderPenaltyTerminateAndCount(h, v, $) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size; u++) {
        let h = !1, v = 0, $ = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][u] == h ? (v++, v == 5 ? c += t.PENALTY_N1 : v > 5 && c++) : (this.finderPenaltyAddHistory(v, $), h || (c += this.finderPenaltyCountPatterns($) * t.PENALTY_N3), h = this.modules[m][u], v = 1);
        c += this.finderPenaltyTerminateAndCount(h, v, $) * t.PENALTY_N3;
      }
      for (let u = 0; u < this.size - 1; u++)
        for (let h = 0; h < this.size - 1; h++) {
          const v = this.modules[u][h];
          v == this.modules[u][h + 1] && v == this.modules[u + 1][h] && v == this.modules[u + 1][h + 1] && (c += t.PENALTY_N2);
        }
      let d = 0;
      for (const u of this.modules)
        d = u.reduce((h, v) => h + (v ? 1 : 0), d);
      const a = this.size * this.size, o = Math.ceil(Math.abs(d * 20 - a * 10) / a) - 1;
      return r(0 <= o && o <= 9), c += o * t.PENALTY_N4, r(0 <= c && c <= 2568888), c;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const c = Math.floor(this.version / 7) + 2, d = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (c * 2 - 2)) * 2;
        let a = [6];
        for (let o = this.size - 7; a.length < c; o -= d)
          a.splice(1, 0, o);
        return a;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(c) {
      if (c < t.MIN_VERSION || c > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let d = (16 * c + 128) * c + 64;
      if (c >= 2) {
        const a = Math.floor(c / 7) + 2;
        d -= (25 * a - 10) * a - 55, c >= 7 && (d -= 36);
      }
      return r(208 <= d && d <= 29648), d;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(c, d) {
      return Math.floor(t.getNumRawDataModules(c) / 8) - t.ECC_CODEWORDS_PER_BLOCK[d.ordinal][c] * t.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][c];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(c) {
      if (c < 1 || c > 255)
        throw new RangeError("Degree out of range");
      let d = [];
      for (let o = 0; o < c - 1; o++)
        d.push(0);
      d.push(1);
      let a = 1;
      for (let o = 0; o < c; o++) {
        for (let u = 0; u < d.length; u++)
          d[u] = t.reedSolomonMultiply(d[u], a), u + 1 < d.length && (d[u] ^= d[u + 1]);
        a = t.reedSolomonMultiply(a, 2);
      }
      return d;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(c, d) {
      let a = d.map((o) => 0);
      for (const o of c) {
        const u = o ^ a.shift();
        a.push(0), d.forEach((h, v) => a[v] ^= t.reedSolomonMultiply(h, u));
      }
      return a;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(c, d) {
      if (c >>> 8 || d >>> 8)
        throw new RangeError("Byte out of range");
      let a = 0;
      for (let o = 7; o >= 0; o--)
        a = a << 1 ^ (a >>> 7) * 285, a ^= (d >>> o & 1) * c;
      return r(a >>> 8 == 0), a;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(c) {
      const d = c[1];
      r(d <= this.size * 3);
      const a = d > 0 && c[2] == d && c[3] == d * 3 && c[4] == d && c[5] == d;
      return (a && c[0] >= d * 4 && c[6] >= d ? 1 : 0) + (a && c[6] >= d * 4 && c[0] >= d ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(c, d, a) {
      return c && (this.finderPenaltyAddHistory(d, a), d = 0), d += this.size, this.finderPenaltyAddHistory(d, a), this.finderPenaltyCountPatterns(a);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(c, d) {
      d[0] == 0 && (c += this.size), d.pop(), d.unshift(c);
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
  function n(s, c, d) {
    if (c < 0 || c > 31 || s >>> c)
      throw new RangeError("Value out of range");
    for (let a = c - 1; a >= 0; a--)
      d.push(s >>> a & 1);
  }
  function l(s, c) {
    return (s >>> c & 1) != 0;
  }
  function r(s) {
    if (!s)
      throw new Error("Assertion error");
  }
  class i {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(c, d, a) {
      if (this.mode = c, this.numChars = d, this.bitData = a, d < 0)
        throw new RangeError("Invalid argument");
      this.bitData = a.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(c) {
      let d = [];
      for (const a of c)
        n(a, 8, d);
      return new i(i.Mode.BYTE, c.length, d);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(c) {
      if (!i.isNumeric(c))
        throw new RangeError("String contains non-numeric characters");
      let d = [];
      for (let a = 0; a < c.length; ) {
        const o = Math.min(c.length - a, 3);
        n(parseInt(c.substring(a, a + o), 10), o * 3 + 1, d), a += o;
      }
      return new i(i.Mode.NUMERIC, c.length, d);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(c) {
      if (!i.isAlphanumeric(c))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let d = [], a;
      for (a = 0; a + 2 <= c.length; a += 2) {
        let o = i.ALPHANUMERIC_CHARSET.indexOf(c.charAt(a)) * 45;
        o += i.ALPHANUMERIC_CHARSET.indexOf(c.charAt(a + 1)), n(o, 11, d);
      }
      return a < c.length && n(i.ALPHANUMERIC_CHARSET.indexOf(c.charAt(a)), 6, d), new i(i.Mode.ALPHANUMERIC, c.length, d);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(c) {
      return c == "" ? [] : i.isNumeric(c) ? [i.makeNumeric(c)] : i.isAlphanumeric(c) ? [i.makeAlphanumeric(c)] : [i.makeBytes(i.toUtf8ByteArray(c))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(c) {
      let d = [];
      if (c < 0)
        throw new RangeError("ECI assignment value out of range");
      if (c < 128)
        n(c, 8, d);
      else if (c < 16384)
        n(2, 2, d), n(c, 14, d);
      else if (c < 1e6)
        n(6, 3, d), n(c, 21, d);
      else
        throw new RangeError("ECI assignment value out of range");
      return new i(i.Mode.ECI, 0, d);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(c) {
      return i.NUMERIC_REGEX.test(c);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(c) {
      return i.ALPHANUMERIC_REGEX.test(c);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(c, d) {
      let a = 0;
      for (const o of c) {
        const u = o.mode.numCharCountBits(d);
        if (o.numChars >= 1 << u)
          return 1 / 0;
        a += 4 + u + o.bitData.length;
      }
      return a;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(c) {
      c = encodeURI(c);
      let d = [];
      for (let a = 0; a < c.length; a++)
        c.charAt(a) != "%" ? d.push(c.charCodeAt(a)) : (d.push(parseInt(c.substring(a + 1, a + 3), 16)), a += 2);
      return d;
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
  e.QrSegment = i;
})(ze || (ze = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(r, i) {
        this.ordinal = r, this.formatBits = i;
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
})(ze || (ze = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(r, i) {
        this.modeBits = r, this.numBitsCharCount = i;
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
      numCharCountBits(r) {
        return this.numBitsCharCount[Math.floor((r + 7) / 17)];
      }
    }
    t.Mode = n;
  })(e.QrSegment || (e.QrSegment = {}));
})(ze || (ze = {}));
const Ye = ze, Co = /* @__PURE__ */ b("<img>"), ko = /* @__PURE__ */ b("<canvas>"), Lo = /* @__PURE__ */ b("<div>"), So = {
  L: Ye.QrCode.Ecc.LOW,
  M: Ye.QrCode.Ecc.MEDIUM,
  Q: Ye.QrCode.Ecc.QUARTILE,
  H: Ye.QrCode.Ecc.HIGH
}, Mo = 128, Eo = "L", Fn = "#FFFFFF", Do = "#000000", To = !1, zo = 0.25, Ro = 4, Po = 0;
function Io(e, t = 0) {
  const n = [];
  return e.forEach(function(l, r) {
    let i = null;
    l.forEach(function(s, c) {
      if (!s && i !== null) {
        n.push(`M${i + t} ${r + t}h${c - i}v1H${i + t}z`), i = null;
        return;
      }
      if (c === l.length - 1) {
        if (!s)
          return;
        i === null ? n.push(`M${c + t},${r + t} h1v1H${c + t}z`) : n.push(`M${i + t},${r + t} h${c + 1 - i}v1H${i + t}z`);
        return;
      }
      s && i === null && (i = c);
    });
  }), n.join("");
}
function Ao(e, t) {
  return t != null ? Math.floor(t) : e ? Ro : Po;
}
function Fo(e, t, n, l) {
  if (l == null)
    return null;
  const r = e.length + n * 2, i = Math.floor(t * zo), s = r / t, c = (l.width || i) * s, d = (l.height || i) * s, a = l.x == null ? e.length / 2 - c / 2 : l.x * s, o = l.y == null ? e.length / 2 - d / 2 : l.y * s;
  let u = null;
  if (l.excavate) {
    let h = Math.floor(a), v = Math.floor(o), $ = Math.ceil(c + a - h), m = Math.ceil(d + o - v);
    u = {
      x: h,
      y: v,
      w: $,
      h: m
    };
  }
  return {
    x: a,
    y: o,
    h: d,
    w: c,
    excavation: u
  };
}
function No(e, t) {
  return e.slice().map((n, l) => l < t.y || l >= t.y + t.h ? n : n.map((r, i) => i < t.x || i >= t.x + t.w ? r : !1));
}
const Bo = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function Oo(e) {
  let {
    value: t,
    size: n = Mo,
    level: l = Eo,
    bgColor: r = Fn,
    color: i = Do,
    includeMargin: s = To,
    marginSize: c,
    style: d,
    icon: a,
    imageSettings: o,
    ref: u,
    ...h
  } = e;
  o = o ?? a ? {
    excavate: !0
  } : void 0;
  const v = a;
  let $, m;
  u && u({
    download: () => {
      const x = $.toDataURL("image/png");
      if ("download" in document.createElement("a")) {
        const E = document.createElement("a");
        E.download = "", E.style.display = "none", E.href = x, document.body.appendChild(E), E.click(), URL.revokeObjectURL(E.href), document.body.removeChild(E);
      }
    }
  });
  const [C, w] = q(!1);
  K(() => {
    if ($) {
      const x = $.getContext("2d");
      if (!x)
        return;
      let E = Ye.QrCode.encodeText(e.value, So[l]).getModules();
      const A = Ao(s, c), k = E.length + A * 2;
      x.clearRect(0, 0, k, k);
      const _ = Fo(E, n, A, o), y = m, M = C() && _ != null && y !== null && y.complete && y.naturalHeight !== 0 && y.naturalWidth !== 0;
      M && _.excavation != null && (E = No(E, _.excavation));
      const F = window.devicePixelRatio || 1;
      $.height = $.width = n * F;
      const z = n / k * F;
      x.scale(z, z), x.fillStyle = r, x.fillRect(0, 0, k, k), x.fillStyle = i, Bo ? x.fill(new Path2D(Io(E, A))) : E.forEach(function(D, R) {
        D.forEach(function(T, N) {
          T && x.fillRect(N + A, R + A, 1, 1);
        });
      }), M && x.drawImage(y, _.x + A, _.y + A, _.w, _.h);
    }
  }), K(() => {
    w(!1);
  });
  const L = {
    height: n + "px",
    width: n + "px",
    ...d
  };
  let S = null;
  return v != null && (S = (() => {
    const x = Co(), E = m;
    return typeof E == "function" ? j(E, x) : m = x, x.addEventListener("load", () => {
      w(!0);
    }), G(x, "src", v), x.style.setProperty("display", "none"), x;
  })()), [(() => {
    const x = ko(), E = $;
    return typeof E == "function" ? j(E, x) : $ = x, G(x, "height", n), G(x, "width", n), _e(x, h, !1, !1), P((A) => Y(x, L, A)), x;
  })(), S];
}
function pu(e) {
  const t = () => H(e, "cm-qrcode");
  return (() => {
    const n = Lo();
    return g(n, f(Oo, e)), P((l) => {
      const r = t(), i = e.bgColor || Fn;
      return l._v$ = O(n, r, l._v$), i !== l._v$2 && ((l._v$2 = i) != null ? n.style.setProperty("background-color", i) : n.style.removeProperty("background-color")), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Yo = /* @__PURE__ */ b('<div><div class="cm-sbs-right-panel"></div><div class="cm-sbs-left-panel"></div><div class="cm-sbs-handler"><div class="cm-sbs-track"><div class="cm-sbs-line"></div><div class="cm-sbs-line"></div><div class="cm-sbs-line">');
function ef(e) {
  const t = () => H(e, "cm-side-by-side"), [n, l] = q(50), [r, i] = ie({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  });
  let s;
  K(() => {
    const h = s.getBoundingClientRect();
    let v = ye(() => n());
    v = v + r.deltaX / h.width * 100, v = Math.min(v, 100), v = Math.max(v, 0), l(v);
  });
  const c = (h) => {
    if (typeof h.button == "number" && h.button !== 0)
      return !1;
    i("dragging", !0);
    const v = h.clientX, $ = h.clientY;
    i("x", v), i("y", $), document.addEventListener("mousemove", d, !1), document.addEventListener("mouseup", a, !1);
  }, d = (h) => {
    const v = h.clientX - r.x, $ = h.clientY - r.y;
    i("x", h.clientX), i("y", h.clientY), i("deltaX", v), i("deltaY", $);
  }, a = (h) => {
    i("dragging", !1), document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", a), i("deltaX", 0), i("deltaY", 0);
  }, o = () => ({
    "clip-path": `inset(0 ${100 - n()}% 0 0)`
  }), u = () => ({
    left: `${n()}%`
  });
  return le(() => {
    document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", a);
  }), (() => {
    const h = Yo(), v = h.firstChild, $ = v.nextSibling, m = $.nextSibling, C = s;
    return typeof C == "function" ? j(C, h) : s = h, g(v, () => e.right), g($, () => e.left), m.$$mousedown = c, P((w) => {
      const L = t(), S = e.style, x = o(), E = u();
      return w._v$ = O(h, L, w._v$), w._v$2 = Y(h, S, w._v$2), w._v$3 = Y($, x, w._v$3), w._v$4 = Y(m, E, w._v$4), w;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), h;
  })();
}
J(["mousedown"]);
const Vo = /* @__PURE__ */ b("<div>"), Ho = /* @__PURE__ */ b("<ul>"), Xo = /* @__PURE__ */ b("<li>");
function Uo(e) {
  const t = e.size ?? "medium", n = e.shape ?? "circle", l = () => H(e, "cm-skeleton-item", {
    [`cm-skeleton-${e.type}`]: e.type,
    [`cm-skeleton-${e.type}-${t}`]: t,
    [`cm-skeleton-${e.type}-${n}`]: n,
    ["cm-skeleton-inline"]: e.inline
  }), r = () => Ce(e, {
    width: typeof e.size == "number" ? e.size + "px" : e.width,
    height: typeof e.size == "number" ? e.size + "px" : e.height
  });
  return (() => {
    const i = Vo();
    return P((s) => {
      const c = l(), d = r();
      return s._v$ = O(i, c, s._v$), s._v$2 = Y(i, d, s._v$2), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
const We = (e) => (t) => f(Uo, te({
  type: e
}, t)), qo = We("avatar"), Wo = We("image"), jo = We("title"), Ko = We("button"), Go = We("item");
function Zo(e) {
  const t = e.rows ?? 4, n = () => H(e, "cm-skeleton-paragraph"), l = new Array(t).fill(1), r = () => Ce(e, {
    width: e.width
  });
  return (() => {
    const i = Ho();
    return g(i, f(p, {
      each: l,
      children: (s, c) => {
        let d = {};
        return e.width && e.width instanceof Array && (d.width = e.width[c()]), (() => {
          const a = Xo();
          return Y(a, d), a;
        })();
      }
    })), P((s) => {
      const c = n(), d = r();
      return s._v$3 = O(i, c, s._v$3), s._v$4 = Y(i, d, s._v$4), s;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), i;
  })();
}
const Jo = /* @__PURE__ */ b("<div>");
function Ne(e) {
  const t = () => H(e, "cm-skeleton", {
    "cm-skeleton-active": e.active
  }), n = () => Ce(e, {
    width: e.width,
    height: e.height
  });
  return f(V, {
    get when() {
      return e.loading;
    },
    get fallback() {
      return e.children;
    },
    get children() {
      const l = Jo();
      return g(l, () => e.placeholder), P((r) => {
        const i = t(), s = n();
        return r._v$ = O(l, i, r._v$), r._v$2 = Y(l, s, r._v$2), r;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), l;
    }
  });
}
Ne.Avatar = qo;
Ne.Image = Wo;
Ne.Title = jo;
Ne.Button = Ko;
Ne.Item = Go;
Ne.Paragraph = Zo;
const Qo = /* @__PURE__ */ b('<div><div></div><div class="cm-slpit-handler-wrap"><div><div class="cm-split-handler-bar-wrap"></div></div></div><div>'), po = /* @__PURE__ */ b('<div class="cm-split-handler-bar">');
function tf(e) {
  const t = e.dir || "v", n = () => H(e, "cm-split-wrap", {
    [`cm-split-wrap-${t}`]: t
  });
  let l = e.split;
  l && l < 1 && (l = l * 100 + "%");
  const [r, i] = q(l || "50%"), s = e.min || 40;
  let c, d;
  const a = () => ({
    "cm-split-handler": !0,
    "cm-split-dragging": $.dragging,
    [`cm-split-handler-${t}`]: !!t
  }), o = vn(e.children);
  o.prev || console.warn("Split need prev Slot Element"), o.next || console.warn("Split need next Slot Element"), K(() => {
    const S = c.getBoundingClientRect(), x = t === "v" ? S.width : S.height;
    let E = t === "v" ? d.style.width : d.style.height;
    E.indexOf("px") > -1 ? E = parseFloat(E) / x * 100 : E = parseFloat(E);
    let A = e.max ? e.max / x * 100 : 100 - s / x * 100;
    E = E + (t === "v" ? $.deltaX : $.deltaY) / x * 100, E = Math.max(E, s / x * 100), E = Math.min(E, A), i(E + "%");
  });
  const u = () => ({
    [`${t === "v" ? "width" : "height"}`]: r()
  }), h = () => ({
    [`${t === "v" ? "left" : "top"}`]: r()
  }), v = {
    flex: "1"
  }, [$, m] = ie({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  }), C = (S) => {
    if (typeof S.button == "number" && S.button !== 0)
      return !1;
    m("dragging", !0);
    const x = S.clientX, E = S.clientY;
    m("x", x), m("y", E), document.addEventListener("mousemove", w, !1), document.addEventListener("mouseup", L, !1);
  }, w = (S) => {
    const x = S.clientX - $.x, E = S.clientY - $.y;
    m("x", S.clientX), m("y", S.clientY), m("deltaX", x), m("deltaY", E);
  }, L = (S) => {
    m("dragging", !1), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", L), m("deltaX", 0), m("deltaY", 0);
  };
  return le(() => {
    document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", L);
  }), (() => {
    const S = Qo(), x = S.firstChild, E = x.nextSibling, A = E.firstChild, k = A.firstChild, _ = E.nextSibling, y = c;
    typeof y == "function" ? j(y, S) : c = S;
    const M = d;
    return typeof M == "function" ? j(M, x) : d = x, Le(x, `cm-split-panel cm-split-${t === "v" ? "left" : "top"}`), g(x, () => o.prev), A.$$mousedown = C, g(k, f(p, {
      each: [1, 2, 3, 4, 5, 6, 7, 8],
      children: () => po()
    })), Y(_, v), Le(_, `cm-split-panel cm-split-${t === "v" ? "right" : "bottom"}`), g(_, () => o.next), P((F) => {
      const z = n(), D = u(), R = h(), T = a();
      return F._v$ = O(S, z, F._v$), F._v$2 = Y(x, D, F._v$2), F._v$3 = Y(E, R, F._v$3), F._v$4 = O(A, T, F._v$4), F;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), S;
  })();
}
J(["mousedown"]);
const ed = /* @__PURE__ */ b('<div class="cm-step-head-inner">'), td = /* @__PURE__ */ b('<div class="cm-step-head-inner"><span>'), nd = /* @__PURE__ */ b('<div><div class="cm-step-head"></div><div class="cm-step-main"><div class="cm-step-title"></div><div class="cm-step-description">');
function id(e) {
  let t = () => {
    if (e.status)
      return e.status;
    let i = "";
    return e.current + 1 > e.index && (i = "finished"), e.current + 1 === e.index && (i = "process"), i || "wait";
  }, n = () => {
    let i = "";
    return e.current + 1 > e.index && (i = "done"), e.current + 1 === e.index && (i = "active"), i;
  };
  const l = () => H(e, "cm-steps-item", {
    [`cm-steps-status-${t()}`]: t(),
    [`cm-steps-status-${n()}`]: n()
  }), r = () => {
    let i = "";
    return e.icon ? i = e.icon : t() === "finished" ? i = (() => {
      const s = ed();
      return g(s, f(W, {
        name: "check"
      })), s;
    })() : t() === "error" ? i = f(W, {
      name: "x-circle",
      size: 26
    }) : t() === "warning" ? i = f(W, {
      name: "alert-triangle",
      size: 26
    }) : i = (() => {
      const s = td(), c = s.firstChild;
      return g(c, () => e.index), s;
    })(), i;
  };
  return (() => {
    const i = nd(), s = i.firstChild, c = s.nextSibling, d = c.firstChild, a = d.nextSibling;
    return g(s, r), g(d, () => e.title), g(a, () => e.description), P((o) => {
      const u = l(), h = e.style;
      return o._v$ = O(i, u, o._v$), o._v$2 = Y(i, h, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
function ld(e) {
  return e;
}
const rd = /* @__PURE__ */ b("<div>");
function cd(e) {
  const t = xe(() => e.children), n = () => t.toArray(), l = () => H(e, "cm-steps", {
    [`cm-steps-${e.size}`]: e.size,
    "cm-steps-vertical": e.dir === "v"
  });
  return (() => {
    const r = rd();
    return g(r, f(p, {
      get each() {
        return n();
      },
      children: (i, s) => f(id, te(i, {
        get index() {
          return s() + 1;
        },
        get current() {
          return e.current || 0;
        }
      }))
    })), P((i) => {
      const s = l(), c = e.style;
      return i._v$ = O(r, s, i._v$), i._v$2 = Y(r, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
cd.Step = ld;
const ad = /* @__PURE__ */ b('<span class="cm-table-sort">'), sd = /* @__PURE__ */ b('<span class="cm-table-resize">'), od = /* @__PURE__ */ b('<th><div class="cm-table-cell">'), dd = /* @__PURE__ */ b('<span class="cm-table-tree-level">'), ud = /* @__PURE__ */ b('<td><div class="cm-table-cell">'), fd = /* @__PURE__ */ b('<span class="cm-table-tree-icon-empty">');
function He(e) {
  let t;
  const n = e.column, l = e.colIndex, r = On();
  re(() => {
    setTimeout(() => {
      s();
    });
  });
  const i = () => ({
    "cm-table-head-col": e.type === "th",
    "cm-table-cell-fixed-left-last": n.fixedLeftLast && e.showFixedLeft,
    "cm-table-cell-fixed-right-first": n.fixedRightFirst && e.showFixedRight
  });
  K(() => {
    n.width, n._, s();
  });
  const s = () => {
    if (n.fixed && t && !e.placeholder) {
      if (n.fixed === "left") {
        t.style.position = "static";
        const m = t.closest(".cm-table");
        if (m) {
          const C = m.querySelector("thead");
          let w = 0;
          for (let L = 1; L <= l; L++) {
            const S = C.querySelector("th:nth-child(" + L + ")");
            S && (w += S.getBoundingClientRect().width);
          }
          t.style.position = "sticky", t.style.left = w + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-left"), n.fixedLeftLast && e.showFixedLeft && t.classList.add("cm-table-cell-fixed-left-last");
        }
      }
      if (n.fixed === "right") {
        const m = t.closest(".cm-table");
        if (m) {
          const C = m.querySelector("thead"), w = C.querySelectorAll("th").length;
          let L = 0;
          for (let S = l + 2; S <= w; S++) {
            const x = C.querySelector("th:nth-child(" + S + ")");
            console.log(x), L += x.getBoundingClientRect().width;
          }
          t.style.position = "sticky", t.style.right = L + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-right"), n.fixedRightFirst && e.showFixedRight && t.classList.add("cm-table-cell-fixed-right-first");
        }
      }
    }
  }, c = () => e.data._showChildren ? "minus-square" : "plus-square", d = (m) => {
    r && r.onRowChecked(e.data, m);
  }, a = (m) => {
    r && r.onHeadChecked(m);
  }, o = (m) => {
    r && r.onSort(n, m);
  }, u = () => {
    r && r.onShowChildren(e.data);
  }, h = () => {
    r && r.onExpand(n, e.data);
  }, v = (m) => {
    r && r.onDragStart(n, m);
  }, $ = () => {
    const m = e.column;
    return e.type === "td" ? m.type === "index" ? e.index + 1 : m.type === "checkbox" ? f(Se, {
      get disabled() {
        return e.data._disabled;
      },
      get checked() {
        return e.data._checked;
      },
      onChange: d
    }) : e.data._type === "expandChildren" ? e.data.render ? e.data.render() : null : m.type === "expand" ? f(W, {
      name: "chevron-right",
      get class() {
        return `cm-table-expand ${e.data._expand ? "cm-table-expand-open" : ""}`;
      },
      onClick: h
    }) : m.render && typeof m.render == "function" ? m.render(e.data[m.name], m, e.data) : e.data[m.name] : m.type === "checkbox" ? f(Se, {
      get checked() {
        return e.checkedAll;
      },
      onChange: a
    }) : e.column.title;
  };
  return f(we, {
    get children() {
      return [f(Q, {
        get when() {
          return e.type === "th";
        },
        get children() {
          const m = od(), C = m.firstChild;
          return j((w) => {
            t = w, e.ref && e.ref(w);
          }, m), g(C, $, null), g(C, f(V, {
            get when() {
              return n.sort;
            },
            get children() {
              const w = ad();
              return g(w, f(W, {
                name: "chevron-up",
                get class() {
                  return n.sortType === "asc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return o.bind(null, "asc");
                }
              }), null), g(w, f(W, {
                name: "chevron-down",
                get class() {
                  return n.sortType === "desc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return o.bind(null, "desc");
                }
              }), null), w;
            }
          }), null), g(C, f(V, {
            get when() {
              return n.resize && n.width && r && r.border;
            },
            get children() {
              const w = sd();
              return w.$$mousedown = v, w;
            }
          }), null), P((w) => {
            const L = i(), S = e.colIndex;
            return w._v$ = O(m, L, w._v$), S !== w._v$2 && G(m, "data-index", w._v$2 = S), w;
          }, {
            _v$: void 0,
            _v$2: void 0
          }), m;
        }
      }), f(Q, {
        get when() {
          return e.type === "td";
        },
        get children() {
          const m = ud(), C = m.firstChild, w = t;
          return typeof w == "function" ? j(w, m) : t = m, g(C, f(V, {
            get when() {
              return n.tree;
            },
            get children() {
              return [(() => {
                const L = dd();
                return P(() => `${e.data._level * 16}px` != null ? L.style.setProperty("padding-left", `${e.data._level * 16}px`) : L.style.removeProperty("padding-left")), L;
              })(), f(V, {
                get when() {
                  return e.data.children && e.data.children.length;
                },
                get fallback() {
                  return fd();
                },
                get children() {
                  return f(W, {
                    get name() {
                      return c();
                    },
                    class: "cm-table-tree-icon",
                    onClick: u
                  });
                }
              })];
            }
          }), null), g(C, $, null), P((L) => {
            const S = i(), x = e.colSpan, E = e.rowSpan;
            return L._v$3 = O(m, S, L._v$3), x !== L._v$4 && G(m, "colspan", L._v$4 = x), E !== L._v$5 && G(m, "rowspan", L._v$5 = E), L;
          }, {
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0
          }), m;
        }
      })];
    }
  });
}
J(["mousedown"]);
const hd = /* @__PURE__ */ b('<colgroup class="cm-table-colgroup">'), md = /* @__PURE__ */ b('<col class="cm-table-col">');
function St(e) {
  return (() => {
    const t = hd();
    return g(t, f(p, {
      get each() {
        return e.data.columns;
      },
      children: (n, l) => {
        const r = () => ({
          width: n.width
        });
        return (() => {
          const i = md();
          return P((s) => Y(i, r(), s)), i;
        })();
      }
    })), t;
  })();
}
const gd = /* @__PURE__ */ b('<div class="cm-table-header"><table><thead><tr>');
function vd(e) {
  let t, n;
  const l = (c) => {
    const d = c.target, a = d.getAttribute("data-index");
    if (a) {
      const o = parseInt(a);
      d && e.onInitColumnWidth(o, d.getBoundingClientRect().width);
    }
  }, r = (c) => {
    const d = c.target;
    if (d.tagName === "THEAD") {
      const a = d.getBoundingClientRect();
      e.onResizeHeader(a.width, a.height), n.style.height = a.height + "px";
    } else
      setTimeout(() => {
        const a = d.getBoundingClientRect(), o = d.closest(".cm-table-body").getBoundingClientRect();
        a.height > o.height ? n.style.overflowY = "scroll" : n.style.overflowY = "";
      });
  }, i = new ResizeObserver((c) => {
    c.forEach((d) => l(d));
  });
  K(() => {
    e.data.columns.length && setTimeout(() => {
      const d = t.querySelectorAll("th"), a = d.length;
      for (let o = 0; o < a; o++)
        i.unobserve(d[o]), i.observe(d[o]);
    });
  }), le(() => {
    const c = t.querySelectorAll("th"), d = c.length;
    for (let a = 0; a < d; a++)
      c[a] && i.unobserve(c[a]);
  }), re(() => {
    const c = new ResizeObserver((o) => {
      o.forEach((u) => r(u));
    });
    c.observe(t);
    const a = t.closest(".cm-table").querySelector(".cm-table-body-wrap");
    c.observe(a), le(() => {
      c.unobserve(t), c.unobserve(a);
    });
  });
  const s = () => ({
    position: e.sticky ? "sticky" : "",
    // position: 'absolute',
    top: 0,
    "z-index": 2,
    "min-width": "100%",
    "overflow-x": "hidden"
  });
  return K(() => {
    n && (n.scrollLeft = e.data.headerLeft);
  }), (() => {
    const c = gd(), d = c.firstChild, a = d.firstChild, o = a.firstChild, u = n;
    typeof u == "function" ? j(u, c) : n = c, g(d, f(St, {
      get data() {
        return e.data;
      }
    }), a);
    const h = t;
    return typeof h == "function" ? j(h, a) : t = a, g(o, f(p, {
      get each() {
        return e.data.columns;
      },
      children: (v, $) => f(He, {
        column: v,
        type: "th",
        get showFixedLeft() {
          return e.data.showFixedLeft;
        },
        get colIndex() {
          return $();
        },
        get showFixedRight() {
          return e.data.showFixedRight;
        },
        get checkedAll() {
          return e.data.checkedAll;
        },
        ref: (m) => {
          Promise.resolve().then(() => {
            e.onInitColumnWidth($(), m.getBoundingClientRect().width);
          });
        }
      })
    })), P((v) => Y(c, s(), v)), c;
  })();
}
const $d = /* @__PURE__ */ b("<tr>"), _d = /* @__PURE__ */ b('<tr><td><div class="cm-table-emprty-cell">暂无数据'), yd = /* @__PURE__ */ b('<div><table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'), wd = /* @__PURE__ */ b('<table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'), bd = /* @__PURE__ */ b('<div class="cm-table-body">');
function an(e) {
  const t = On(), n = () => {
    e.data._type !== "expandChildren" && t && t.highlight && t.onSelectRow(e.data);
  }, l = () => ({
    "cm-table-row": !0,
    "cm-table-row-ood": e.index % 2 === 0,
    "cm-table-row-even": e.index % 2 !== 0,
    "cm-table-row-selected": e.data._highlight
  }), r = () => ({
    display: e.data._show ? "" : "none"
  });
  return (() => {
    const i = $d(), s = e.ref;
    return typeof s == "function" ? j(s, i) : e.ref = i, i.$$click = n, g(i, f(we, {
      get children() {
        return [f(Q, {
          get when() {
            return e.data._type === "expandChildren";
          },
          get children() {
            return f(He, {
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
        }), f(Q, {
          get when() {
            return e.data._type !== "expandChildren";
          },
          get children() {
            return f(p, {
              get each() {
                return e.store.columns;
              },
              children: (c, d) => {
                let [a, o] = [1, 1];
                if (t && t.spanMethod) {
                  const u = t.spanMethod(e.data, c, e.index, d());
                  u && ([a, o] = u);
                }
                return f(V, {
                  when: a && o,
                  fallback: null,
                  get children() {
                    return f(He, {
                      type: "td",
                      get data() {
                        return e.data;
                      },
                      column: c,
                      get index() {
                        return e.index;
                      },
                      get colIndex() {
                        return d();
                      },
                      get showFixedLeft() {
                        return e.store.showFixedLeft;
                      },
                      get showFixedRight() {
                        return e.store.showFixedRight;
                      },
                      rowSpan: a,
                      colSpan: o
                    });
                  }
                });
              }
            });
          }
        })];
      }
    })), P((c) => {
      const d = l(), a = r();
      return c._v$ = O(i, d, c._v$), c._v$2 = Y(i, a, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
function sn(e) {
  return (() => {
    const t = _d(), n = t.firstChild;
    return P(() => G(n, "colspan", e.store.columns.length)), t;
  })();
}
function xd(e) {
  let t;
  const [n, l] = q(), r = () => {
    const d = e.data.columns;
    let a = 0;
    return d.forEach((o) => {
      a += o._width || 0;
    }), a;
  };
  K(() => {
    e.data.data;
    const d = e.data.headerSize.height;
    if (e.virtual) {
      const a = e.height ?? document.documentElement.clientHeight;
      l(a - d);
    } else
      setTimeout(() => {
        const o = t.querySelector(".cm-table-body-wrap").getBoundingClientRect().height;
        if (e.height && o > e.height - d) {
          const u = e.height - d;
          l(u);
        }
      });
  });
  const i = () => {
    e.onScroll(t.scrollLeft, t.clientWidth, t.scrollWidth);
  };
  let s, c;
  return (() => {
    const d = bd();
    d.addEventListener("scroll", i);
    const a = t;
    return typeof a == "function" ? j(a, d) : t = d, d.style.setProperty("display", "block"), d.style.setProperty("width", "100%"), d.style.setProperty("overflow", "auto"), d.style.setProperty("position", "relative"), g(d, f(we, {
      get children() {
        return [f(Q, {
          get when() {
            return e.virtual;
          },
          get children() {
            const o = yd(), u = o.firstChild, h = u.firstChild, v = h.firstChild, $ = h.nextSibling, m = s;
            typeof m == "function" ? j(m, o) : s = o, o.style.setProperty("min-width", "100%"), o.style.setProperty("will-change", "transform"), o.style.setProperty("box-sizing", "border-box"), o.style.setProperty("contain", "strict"), o.style.setProperty("position", "absolute"), o.style.setProperty("top", "0"), o.style.setProperty("left", "0"), g(u, f(St, {
              get data() {
                return e.data;
              }
            }), h), h.style.setProperty("display", "none"), g(v, f(p, {
              get each() {
                return e.data.columns;
              },
              children: (w, L) => f(He, {
                column: w,
                type: "th",
                placeholder: !0,
                get colIndex() {
                  return L();
                },
                get checkedAll() {
                  return e.data.checkedAll;
                }
              })
            }));
            const C = c;
            return typeof C == "function" ? j(C, $) : c = $, g($, f(jn, {
              scrollElement: t,
              contentElement: s,
              bodyElement: c,
              get items() {
                return e.data.data;
              },
              itemEstimatedSize: 30,
              get maxHeight() {
                return n() || e.height;
              },
              children: (w) => {
                const L = w.item;
                return f(an, {
                  data: L,
                  get index() {
                    return w.index;
                  },
                  get store() {
                    return e.data;
                  },
                  ref(S) {
                    const x = w.ref;
                    typeof x == "function" ? x(S) : w.ref = S;
                  }
                });
              }
            }), null), g($, f(V, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return f(sn, {
                  get store() {
                    return e.data;
                  }
                });
              }
            }), null), P(() => r() + "px" != null ? o.style.setProperty("width", r() + "px") : o.style.removeProperty("width")), o;
          }
        }), f(Q, {
          get when() {
            return !e.virtual;
          },
          get children() {
            const o = wd(), u = o.firstChild, h = u.firstChild, v = u.nextSibling, $ = c;
            return typeof $ == "function" ? j($, o) : c = o, g(o, f(St, {
              get data() {
                return e.data;
              }
            }), u), u.style.setProperty("display", "none"), g(h, f(p, {
              get each() {
                return e.data.columns;
              },
              children: (m, C) => f(He, {
                column: m,
                type: "th",
                placeholder: !0,
                get colIndex() {
                  return C();
                },
                get checkedAll() {
                  return e.data.checkedAll;
                }
              })
            })), g(v, f(p, {
              get each() {
                return e.data.data;
              },
              children: (m, C) => f(an, {
                data: m,
                get index() {
                  return C();
                },
                get store() {
                  return e.data;
                }
              })
            }), null), g(v, f(V, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return f(sn, {
                  get store() {
                    return e.data;
                  }
                });
              }
            }), null), o;
          }
        })];
      }
    })), P(() => n() + "px" != null ? d.style.setProperty("height", n() + "px") : d.style.removeProperty("height")), d;
  })();
}
J(["click"]);
function on(e) {
  let t = -1, n = Number.MAX_VALUE;
  return e && (e.forEach((l, r) => {
    l.id = l.id ?? me(), l.fixed === "left" && (t = Math.max(t, r)), l.fixed === "right" && (n = Math.min(n, r));
  }), t > -1 && e[t] && (e[t].fixedLeftLast = !0), n < Number.MAX_VALUE && e[n] && (e[n].fixedRightFirst = !0)), {
    maxFixedLeft: t,
    minFixedRight: n
  };
}
function Cd(e, t, n, l, r, i) {
  (e >= 0 || t < Number.MAX_VALUE) && (n("showFixedLeft", l > 0), n("showFixedRight", r + l < i));
}
function dn(e) {
  let t = e ?? [];
  return t = [...t], t.forEach((n, l) => {
    n.id = n.id ?? me(), n._originSort = l;
  }), t = Ld(e), t;
}
function kd(e, t, n) {
  let l = [...t.data];
  n.sortType === "" ? l.sort((r, i) => r._originSort - i._originSort > 0 ? 1 : -1) : n.sortMethod && typeof n.sortMethod == "function" ? l.sort(n.sortMethod) : l.sort((r, i) => {
    const s = n.name ?? "";
    return /^[0-9\.]+$/g.test(r[s]) ? (n.sortType === "asc" ? 1 : -1) * (r[s] - i[s]) > 0 ? 1 : -1 : (n.sortType === "asc" ? 1 : -1) * r[s].localeCompare(i[s]);
  }), e("data", l);
}
function Nn(e, t, n, l) {
  e.forEach((r) => {
    r.id = r.id ?? me(), r._level = n, r._show = l, t.push(r), r.children && r.children.length && Nn(r.children, t, n + 1, !!r._showChildren);
  });
}
function Ld(e) {
  let t = [];
  return Nn(e, t, 0, !0), t;
}
const zt = (e, t) => {
  e[t] && e[t].children && e[t].children.forEach((n) => {
    n._show = !1, zt(e, n.id);
  });
}, Sd = (e, t) => {
  const n = e[t];
  n && n.children && n.children.forEach((l) => {
    l._show = n._showChildren, zt(e, l.id);
  });
};
function Md(e, t) {
  e("data", (n) => n.id === t.id, ne((n) => n._showChildren = !n._showChildren)), e("data", ne((n) => {
    const l = t.children.map((i) => i.id), r = {};
    n.forEach((i) => {
      r[i.id] = i;
    }), l.forEach((i) => {
      r[i] && (r[i]._show = t._showChildren), t._showChildren ? Sd(r, i) : zt(r, i);
    });
  }));
}
function Ed(e, t, n, l) {
  e("columns", (r) => r.name === n.name, ne((r) => {
    r.sortType === l ? r.sortType = "" : r.sortType = l;
  })), n.sort !== "custom" && kd(e, t, n);
}
function Dd(e, t, n) {
  e("data", ne((l) => {
    let r = -1;
    const i = l.find((s, c) => {
      const d = s.id === n.id;
      return d && (r = c), d;
    });
    i._expand ? (l.splice(r + 1, 1), i._expand = !1) : (i._expand = !0, l.splice(r + 1, 0, {
      _type: "expandChildren",
      _show: !0,
      column: t,
      render: t.render?.bind(null, n)
    }));
  }));
}
const Td = (e, t, n) => {
  if (typeof n.button == "number" && n.button !== 0)
    return !1;
  e("resizing", !0);
  const l = n.target.getBoundingClientRect().right, r = n.target.closest(".cm-table-wrap").getBoundingClientRect().left;
  e("posX", l - r), e("startX", l - r), e("x", n.clientX), e("resizeId", t.id);
}, zd = (e, t, n) => {
  if (e.resizing) {
    const l = n.clientX - e.x;
    t("x", n.clientX);
    const r = e.posX + l;
    t("posX", r);
  }
}, Rd = (e, t) => {
  t("resizing", !1), t("columns", (l) => l.id === e.resizeId, ne((l) => {
    l.width = l.width ? parseFloat(l.width) + (e.posX - e.startX) + "px" : void 0;
  }));
  let n;
  e.columns.find((l, r) => {
    const i = l.id === e.resizeId;
    return i && (n = e.columns[r + 1] ? e.columns[r + 1].id : void 0), i;
  }), t("columns", (l) => l.id === n, ne((l) => {
    l._ = me();
  })), t("posX", 0);
}, Pd = /* @__PURE__ */ b('<div><div class="cm-table-resize-helper"></div><div class="cm-table-loading"></div><div class="cm-table">'), Bn = fe();
function nf(e) {
  const t = () => H(e, "cm-table-wrap", {
    "cm-table-border": e.border,
    "cm-table-stripe": e.stripe,
    "cm-table-small": e.size === "small",
    "cm-table-resizing": i.resizing
  }), {
    maxFixedLeft: n,
    minFixedRight: l
  } = on(e.columns);
  let r = dn(e.data);
  K(() => {
    r = dn(e.data), s("data", r), s("checkedAll", !1);
  }), K(() => {
    on(e.columns), s("columns", e.columns ?? []), s("showFixedLeft", !1), s("showFixedRight", !0);
  });
  const [i, s] = ie({
    columns: [],
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
    headerLeft: 0
  }), c = (_) => {
    const y = i.data.find((M) => M._highlight);
    y && s("data", (M) => M.id === y.id, ne((M) => M._highlight = !1)), s("data", (M) => M.id === _.id, ne((M) => M._highlight = !0)), e.onRowSelect && e.onRowSelect(_, y);
  }, d = (_, y) => {
    s("data", (D) => D.id === _.id, ne((D) => D._checked = y));
    let M = !1, F = 0, z = 0;
    i.data.forEach((D) => {
      D._disabled || z++, D._checked && (F++, M = "indeterminate");
    }), F >= z && (M = !0), s("checkedAll", M), e.onRowChecked && e.onRowChecked(_, y);
  }, a = (_) => {
    s("checkedAll", _), s("data", (M) => _ ? !M._disabled && !M._checked : !M._disabled && M._checked, ne((M) => M._checked = _));
    const y = i.data.filter((M) => M._checked);
    e.onCheckedAll && e.onCheckedAll(y);
  }, o = (_, y) => {
    Ed(s, i, _, y), e.onSort && e.onSort(_, _.sortType);
  }, u = (_) => {
    Md(s, _);
  }, h = (_, y) => {
    Dd(s, _, y);
  }, v = (_, y) => {
    Td(s, _, y), document.addEventListener("mousemove", $, !1), document.addEventListener("mouseup", m, !1);
  }, $ = (_) => {
    zd(i, s, _);
  }, m = () => {
    console.log("end"), document.removeEventListener("mousemove", $), document.removeEventListener("mouseup", m), Rd(i, s);
  }, C = () => ({
    display: i.resizing ? "block" : "none",
    left: i.posX + "px"
  }), w = () => i.data.filter((_) => _._checked), L = (_, y) => {
    const M = i.data.find((F) => {
      F.id;
    });
    d(M, y);
  }, S = (_, y) => {
    s("columns", _, "_width", y);
  }, x = (_, y) => {
    s("headerSize", "width", _), s("headerSize", "height", y);
  }, E = (_, y, M) => {
    Cd(n, l, s, _, y, M), i.headerLeft !== _ && s("headerLeft", _);
  };
  e.ref && e.ref({
    clearSelect() {
      s("data", (_) => _._highlight, ne((_) => _._highlight = !1));
    },
    checkAll(_) {
      a(_);
    },
    getAllChecked() {
      return w();
    },
    setChecked: L
  });
  const A = () => ({
    ...e.style,
    "max-height": e.height ? `${e.height}px` : ""
    // 'display': 'flex',
    // 'flex-direction': 'column'
  }), k = () => !!e.height;
  return f(Bn.Provider, {
    get value() {
      return {
        onSelectRow: c,
        onRowChecked: d,
        onHeadChecked: a,
        onSort: o,
        onShowChildren: u,
        onExpand: h,
        onDragStart: v,
        highlight: e.highlight,
        border: e.border,
        spanMethod: e.spanMethod
      };
    },
    get children() {
      const _ = Pd(), y = _.firstChild, M = y.nextSibling, F = M.nextSibling;
      return g(_, f(V, {
        get when() {
          return e.loading;
        },
        fallback: null,
        get children() {
          return f(bn, {});
        }
      }), F), g(F, f(vd, {
        data: i,
        get sticky() {
          return k();
        },
        onInitColumnWidth: S,
        onResizeHeader: x,
        get virtual() {
          return e.virtual;
        }
      }), null), g(F, f(xd, {
        data: i,
        onScroll: E,
        get height() {
          return e.height;
        },
        get virtual() {
          return e.virtual;
        }
      }), null), P((z) => {
        const D = t(), R = C(), T = A();
        return z._v$ = O(_, D, z._v$), z._v$2 = Y(y, R, z._v$2), z._v$3 = Y(F, T, z._v$3), z;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), _;
    }
  });
}
const On = () => he(Bn), lf = (e) => e, Id = /* @__PURE__ */ b('<div><div class="cm-tabs-header-wrap"><div class="cm-tabs-active-line"></div><div class="cm-tabs-scroll"><ul class="cm-tabs-header"></ul></div><div class="cm-tabs-prev"></div><div class="cm-tabs-next"></div></div><div class="cm-tabs-content">'), Ad = /* @__PURE__ */ b("<li>"), Fd = /* @__PURE__ */ b("<div>");
function rf(e) {
  let t, n, l;
  const r = () => H(e, "cm-tabs", {
    "cm-tabs-card": e.card,
    "cm-tabs-overflow": c.scroll
  }), i = xe(() => e.children), s = () => i.toArray(), [c, d] = ie({
    activeName: "",
    tabs: [],
    scroll: !1,
    scrollLeft: 0
  });
  K(() => {
    d("tabs", s()), Promise.resolve().then(() => {
      m();
    });
  });
  const a = () => {
    const w = n.getBoundingClientRect().width;
    let L = c.scrollLeft + w;
    L = Math.min(0, L), l.style.transform = `translate(${L}px, 0)`, d("scrollLeft", L);
  }, o = () => {
    const w = n.getBoundingClientRect().width, L = l.getBoundingClientRect().width;
    let S = c.scrollLeft - w;
    const x = w - L;
    S = Math.max(x, S), l.style.transform = `translate(${S}px, 0)`, d("scrollLeft", S);
  }, u = (w) => {
    d("tabs", ne((L) => {
      L.push(w);
    })), setTimeout(() => {
      m();
    });
  }, h = (w) => {
    d("activeName", w.name), e.onTabClick && e.onTabClick(w);
  }, v = (w, L) => {
    L.preventDefault && L.preventDefault(), L.stopPropagation && L.stopPropagation();
    const S = c.tabs.filter((x) => x.name !== w);
    c.activeName === w && d("activeName", S[S.length - 1].name), d("tabs", S), e.onRemove && e.onRemove(w), m();
  }, $ = () => {
    const w = c.activeName;
    let L = 0;
    c.tabs.forEach((x, E) => {
      x.name === w && (L = E);
    });
    const S = {
      transform: `translate(${-L * 100}%, 0)`
    };
    return e.duration !== void 0 && typeof e.duration == "number" && (S["transition-duration"] = e.duration + "ms"), S;
  };
  K(() => {
    const w = ye(() => c.activeName);
    e.activeName && w !== e.activeName && d("activeName", e.activeName ?? "");
  }), K(() => {
    d("tabs", s());
  }), re(() => {
    m();
  });
  const m = () => {
    const w = n.getBoundingClientRect().width, L = l.getBoundingClientRect().width;
    L > w && !c.scroll && d("scroll", !0), L < w && c.scroll && (d("scroll", !1), a());
  }, C = () => {
    if (!e.card) {
      const w = c.activeName;
      let L = 0;
      c.tabs.forEach((z, D) => {
        z.name === w && (L = D);
      });
      const x = l.querySelectorAll(".cm-tabs-header-item")[L];
      if (!x)
        return;
      const E = l.closest(".cm-tabs-header-wrap"), A = x.querySelector(".cm-tabs-close"), k = A ? A.getBoundingClientRect().width : 0, _ = x.getBoundingClientRect(), y = E.getBoundingClientRect(), M = _.left - y.left, F = _.width - k;
      return t.style.width = `${F}px`, t.style.left = `${M}px`, {
        width: `${F}px`,
        left: `${M}px`
      };
    }
  };
  return e.ref && e.ref({
    addTab: u
  }), (() => {
    const w = Id(), L = w.firstChild, S = L.firstChild, x = S.nextSibling, E = x.firstChild, A = x.nextSibling, k = A.nextSibling, _ = L.nextSibling, y = t;
    typeof y == "function" ? j(y, S) : t = S;
    const M = n;
    typeof M == "function" ? j(M, x) : n = x;
    const F = l;
    return typeof F == "function" ? j(F, E) : l = E, g(E, f(p, {
      get each() {
        return c.tabs;
      },
      children: (z) => {
        const D = () => ({
          "cm-tabs-header-item": !0,
          "cm-tabs-header-item-active": z.name === c.activeName,
          "cm-tabs-header-item-disabled": z.disabled
        });
        return (() => {
          const R = Ad();
          return de(R, "click", h.bind(null, z), !0), g(R, () => z.icon, null), g(R, () => z.title, null), g(R, f(V, {
            get when() {
              return z.closeable;
            },
            get children() {
              return f(W, {
                name: "x",
                get onClick() {
                  return v.bind(null, z.name);
                },
                class: "cm-tabs-close",
                size: 12
              });
            }
          }), null), P((T) => O(R, D(), T)), R;
        })();
      }
    })), g(L, f(V, {
      get when() {
        return e.extra;
      },
      get children() {
        return e.extra;
      }
    }), A), A.$$click = a, g(A, f(W, {
      name: "chevron-left",
      size: 14
    })), k.$$click = o, g(k, f(W, {
      name: "chevron-right",
      size: 14
    })), g(_, f(p, {
      get each() {
        return c.tabs;
      },
      children: (z) => {
        const D = () => H(z, "cm-tab-panel", {
          "cm-tab-panel-active": z.name === c.activeName
        });
        return (() => {
          const R = Fd();
          return g(R, () => z.children), P((T) => O(R, D(), T)), R;
        })();
      }
    })), P((z) => {
      const D = r(), R = e.style, T = C(), N = $();
      return z._v$ = O(w, D, z._v$), z._v$2 = Y(w, R, z._v$2), z._v$3 = Y(S, T, z._v$3), z._v$4 = Y(_, N, z._v$4), z;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), w;
  })();
}
J(["click"]);
const Nd = /* @__PURE__ */ b('<div class="cm-timeline-time">'), Bd = /* @__PURE__ */ b('<div class="cm-timeline-item"><div class="cm-timeline-item-tail"></div><div></div><div class="cm-timeline-item-content">');
function Od(e) {
  const t = e.color ?? "blue", n = () => H(e, "cm-timeline-item-head", {
    [`cm-timeline-item-head-${t}`]: t,
    "cm-timeline-item-head-custom": e.icon,
    "cm-timeline-item-head-fill": e.fill
  });
  return (() => {
    const l = Bd(), r = l.firstChild, i = r.nextSibling, s = i.nextSibling;
    return g(i, () => e.icon), g(s, () => e.children, null), g(s, f(V, {
      get when() {
        return e.time;
      },
      get children() {
        const c = Nd();
        return g(c, () => e.time), c;
      }
    }), null), P((c) => O(i, n(), c)), l;
  })();
}
const Yd = /* @__PURE__ */ b("<div>");
function Vd(e) {
  const t = () => H(e, "cm-timeline", {
    [`cm-timeline-${e.mode}`]: e.mode
  });
  return (() => {
    const n = Yd();
    return g(n, () => e.children), P((l) => {
      const r = t(), i = e.style;
      return l._v$ = O(n, r, l._v$), l._v$2 = Y(n, i, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
Vd.Item = Od;
async function Hd(e) {
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
const Xd = /* @__PURE__ */ b("<p>"), Ud = /* @__PURE__ */ b('<span class="cm-typograghy-copyed">'), qd = /* @__PURE__ */ b('<span class="cm-typograghy-copy">');
function cf(e) {
  const [t, n] = q(!1), l = () => e.size || "normal", r = () => H(e, "cm-typograghy-paragraph", {
    [`cm-typograghy-paragraph-${l()}`]: l(),
    [`cm-typograghy-paragraph-${e.type}`]: !!e.type,
    "cm-typograghy-extended": e.spacing === "extended"
  });
  let i;
  async function s() {
    const c = await Hd(e.copyText ?? i.innerText);
    n(c), c && (e.onCopy && e.onCopy(), setTimeout(() => {
      n(!1);
    }, 4e3));
  }
  return (() => {
    const c = Xd(), d = i;
    return typeof d == "function" ? j(d, c) : i = c, g(c, () => e.children, null), g(c, (() => {
      const a = Z(() => !!e.copyable);
      return () => a() ? (() => {
        const o = Z(() => !!t());
        return () => o() ? (() => {
          const u = Ud();
          return g(u, f(W, {
            name: "check"
          })), u;
        })() : (() => {
          const u = qd();
          return u.$$click = s, g(u, f(W, {
            name: "copy"
          })), u;
        })();
      })() : null;
    })(), null), P((a) => {
      const o = e.style, u = r();
      return a._v$ = Y(c, o, a._v$), a._v$2 = O(c, u, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}
J(["click"]);
const Wd = /* @__PURE__ */ b("<h1>"), jd = /* @__PURE__ */ b("<h2>"), Kd = /* @__PURE__ */ b("<h3>"), Gd = /* @__PURE__ */ b("<h4>"), Zd = /* @__PURE__ */ b("<h5>"), Jd = /* @__PURE__ */ b("<h6>");
function af(e) {
  const t = () => e.heading || 1, n = () => H(e, "cm-typograghy-title", `cm-typograghy-h${t()}`), l = [() => (() => {
    const r = Wd();
    return g(r, () => e.children), P((i) => {
      const s = n(), c = e.style;
      return i._v$ = O(r, s, i._v$), i._v$2 = Y(r, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })(), () => (() => {
    const r = jd();
    return g(r, () => e.children), P((i) => {
      const s = n(), c = e.style;
      return i._v$3 = O(r, s, i._v$3), i._v$4 = Y(r, c, i._v$4), i;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), r;
  })(), () => (() => {
    const r = Kd();
    return g(r, () => e.children), P((i) => {
      const s = n(), c = e.style;
      return i._v$5 = O(r, s, i._v$5), i._v$6 = Y(r, c, i._v$6), i;
    }, {
      _v$5: void 0,
      _v$6: void 0
    }), r;
  })(), () => (() => {
    const r = Gd();
    return g(r, () => e.children), P((i) => {
      const s = n(), c = e.style;
      return i._v$7 = O(r, s, i._v$7), i._v$8 = Y(r, c, i._v$8), i;
    }, {
      _v$7: void 0,
      _v$8: void 0
    }), r;
  })(), () => (() => {
    const r = Zd();
    return g(r, () => e.children), P((i) => {
      const s = n(), c = e.style;
      return i._v$9 = O(r, s, i._v$9), i._v$10 = Y(r, c, i._v$10), i;
    }, {
      _v$9: void 0,
      _v$10: void 0
    }), r;
  })(), () => (() => {
    const r = Jd();
    return g(r, () => e.children), P((i) => {
      const s = n(), c = e.style;
      return i._v$11 = O(r, s, i._v$11), i._v$12 = Y(r, c, i._v$12), i;
    }, {
      _v$11: void 0,
      _v$12: void 0
    }), r;
  })()];
  return f(Yn, {
    get component() {
      return l[t() - 1];
    }
  });
}
const Qd = /* @__PURE__ */ b("<div>"), pd = /* @__PURE__ */ b('<span class="cm-word-count-prefix">'), un = /* @__PURE__ */ b("<span>"), eu = /* @__PURE__ */ b("<span>/"), tu = /* @__PURE__ */ b('<span class="cm-word-count-suffix">');
function sf(e) {
  const t = () => (e.value ?? "").length > e.total, n = () => {
    const s = e.value ?? "";
    return e.overflow && t() ? s.length - e.total : s.length;
  }, l = () => {
    const s = e.value ?? "";
    return Math.min(s.length / e.total * 100, 100);
  }, r = e.radius ?? 10, i = () => H(e, "cm-word-count");
  return (() => {
    const s = Qd();
    return g(s, f(V, {
      get when() {
        return e.circle;
      },
      get fallback() {
        return [(() => {
          const c = pd();
          return g(c, () => t() ? e.prefixOverflow : e.prefix), P(() => c.classList.toggle("cm-word-count-overflow", !!t())), c;
        })(), (() => {
          const c = un();
          return g(c, n), P(() => Le(c, t() ? "cm-word-count-overflow" : "")), c;
        })(), eu(), (() => {
          const c = un();
          return g(c, () => e.total), c;
        })(), (() => {
          const c = tu();
          return g(c, () => t() ? e.suffixOverflow : e.suffix), P(() => c.classList.toggle("cm-word-count-overflow", !!t())), c;
        })()];
      },
      get children() {
        return f(zn, {
          type: "circle",
          radius: r,
          strokeWidth: 1,
          hidePercent: !0,
          get value() {
            return l();
          }
        });
      }
    })), P((c) => {
      const d = i(), a = e.style;
      return c._v$ = O(s, d, c._v$), c._v$2 = Y(s, a, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
export {
  ei as Accordion,
  mn as AccordionContext,
  ri as Anchor,
  Pr as AutoComplete,
  It as Avatar,
  ou as AvatarList,
  du as BackTop,
  uu as Badge,
  fu as Banner,
  Ei as BothSide,
  Pi as Breadcrumb,
  $e as Button,
  $u as ButtonGroup,
  $n as ButtonGroupContext,
  Hu as Captcha,
  _u as Card,
  Wi as Carousel,
  Yr as Cascader,
  vu as Center,
  Xr as Checkbox,
  qr as CheckboxGroup,
  Eu as CheckboxGroupContext,
  wu as Col,
  hn as Collapase,
  Pa as ColorPicker,
  yn as Context,
  bu as CountDown,
  xu as CountUp,
  qc as Datepicker,
  Cu as Divider,
  $t as Draggable,
  ku as Drawer,
  ke as Dropdown,
  Su as DropdownItem,
  Lu as DropdownMenu,
  Vu as Email,
  Mu as Exception,
  gu as FixedView,
  Gu as Floor,
  uo as FooterNavigation,
  Zu as FooterNavigations,
  ar as Form,
  Dt as FormContext,
  Ue as FormItem,
  Cn as FormItemContext,
  hu as HView,
  W as Icon,
  wt as Image,
  xn as ImagePreview,
  Pu as IndexList,
  Se as InnerCheckbox,
  ge as InnerInput,
  Ca as Input,
  hs as List,
  Ie as Loading,
  Fu as Login,
  Pn as LoginContext,
  qu as Menu,
  Uu as MenuGroup,
  Lt as MenuItem,
  Yu as Mobile,
  Gs as Modal,
  xc as Option,
  Du as OptionGroup,
  Ju as PageFooter,
  Qu as Pagination,
  cf as Paragraph,
  Ou as Password,
  tt as Popover,
  zn as Progress,
  pu as QRCode,
  Oo as QRCodeCanvas,
  Tu as Radio,
  ic as RadioGroup,
  $c as Rate,
  yu as Row,
  sc as Search,
  Mn as Select,
  ef as SideBySide,
  Ne as Skeleton,
  sa as Slider,
  Iu as Slot,
  Pe as Space,
  bn as Spin,
  fc as Spinner,
  tf as Split,
  cd as Steps,
  Xu as SubMenu,
  Nu as Submit,
  ac as Switch,
  lf as Tab,
  nf as Table,
  rf as Tabs,
  Ze as Tag,
  $r as TagGroup,
  be as Text,
  rc as Textarea,
  Vd as Timeline,
  ea as Timepicker,
  af as Title,
  ui as Tooltip,
  zu as Transfer,
  $a as Tree,
  xa as TreeSelect,
  Ru as Upload,
  Bu as UserName,
  mu as VView,
  Fe as Value,
  Mt as View,
  sf as WordCount,
  Xl as downloadFile,
  Au as loadingBar,
  Wu as message,
  ju as modal,
  wl as nextFrame,
  Ku as notice,
  gn as scrollTop,
  ti as useAccordionContext,
  wn as useAlignPostion,
  ji as useCarouselContext,
  Vr as useCascaderContext,
  H as useClassList,
  Ii as useClickAnimating,
  _t as useClickOutside,
  Hd as useCopy,
  qe as useDatepickerContext,
  Ml as useDropdownConext,
  ys as useForm,
  yr as useFormItem,
  ms as useListContext,
  In as useLoginContext,
  Tt as useMenuContext,
  Me as usePortal,
  vn as useSlots,
  Ce as useStyle,
  On as useTableContext,
  ta as useTimepickerContext,
  Et as useTransition,
  _a as useTreeContext,
  Ae as useValidation,
  Ee as usezIndex
};
