import { use as X, insert as g, effect as P, classList as B, style as Y, template as C, spread as Ce, mergeProps as ne, delegateEvents as J, createComponent as u, className as Re, setAttribute as Z, addEventListener as fe, memo as G, Portal as wt, render as bt, Dynamic as hi } from "solid-js/web";
import { createSignal as j, createEffect as K, onMount as ce, onCleanup as le, splitProps as ae, createContext as me, useContext as ge, children as Me, untrack as xe, For as p, Show as V, Switch as Le, Match as Q, createComputed as nt, on as mi, mergeProps as Fn, createUniqueId as $e, batch as Oe, createMemo as gt } from "solid-js";
import { createStore as re, produce as ie, unwrap as gi } from "solid-js/store";
import te from "dayjs";
import { CountUp as vi } from "countup.js";
import $i from "tinycolor2";
import { VirtualList as _i, VirtualListCore as yi } from "cui-virtual-list";
function q(e, ...t) {
  const n = {
    ...e.classList
  };
  if (e.class && (n[e.class] = !0), t)
    for (let l = 0; l < t.length; l++) {
      const i = t[l];
      if (typeof i == "string")
        n[i] = !0;
      else
        for (const r in i)
          n[r] = i[r];
    }
  return n;
}
function De(e, t) {
  let n = {
    ...t
  };
  return e.style && (typeof e.style == "string" ? n[e.style] = !0 : typeof e.style == "object" && (n = {
    ...n,
    ...e.style
  })), n;
}
function he(e, t, n) {
  let l, i;
  return e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (l = e[t][0], i = e[t][1]) : [l, i] = j(e[t] || n), [l, i];
}
const wi = /* @__PURE__ */ C("<div>");
function On(e) {
  const t = () => q(e, "cm-collapase");
  let n;
  function l() {
    const r = document.createElement("surface"), c = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (const a in c)
      if (r.style[a] !== void 0)
        return c[a];
  }
  function i() {
    e.open && n && (n.style.height = "auto"), e.onEnd && e.onEnd(e.open);
  }
  return K(() => {
    if (!n)
      return;
    if (e.open) {
      n.style.height = "auto";
      const c = n.getBoundingClientRect().height;
      e.onOpen && e.onOpen(c), n.style.height = "0px", n.classList.add("cm-collapase-open"), setTimeout(() => {
        n.style.height = `${c}px`;
      }, 0);
    } else {
      const c = n.getBoundingClientRect().height;
      n.classList.add("animation"), n.classList.remove("cm-collapase-open"), n.style.height = `${c}px`, setTimeout(() => {
        n.style.height = "0px";
      }, 0);
    }
  }), ce(() => {
    if (n) {
      const r = l();
      n.addEventListener(r, i);
    }
  }), le(() => {
    const r = l();
    n && n.removeEventListener(r, i);
  }), e.ref && e.ref({
    getHeight() {
      const r = n.style.height;
      n.style.transition = "none", n.style.height = "auto";
      const c = n.offsetHeight;
      return n.style.transition = "", n.style.height = r, c;
    }
  }), (() => {
    const r = wi(), c = n;
    return typeof c == "function" ? X(c, r) : n = r, g(r, () => e.children), P((a) => {
      const d = t(), s = e.style;
      return a._v$ = B(r, d, a._v$), a._v$2 = Y(r, s, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const bi = /* @__PURE__ */ C("<div>"), W = (e) => {
  const t = () => q(e, "cm-icon", `cm-icon-${e.name}`, {
    "cm-icon-spin": e.spin
  }), [n, l] = ae(e, ["color", "size", "spin", "classList", "class", "name", "style", "children", "ref"]), i = () => De(e, {
    "font-size": (n.size || 14) + "px",
    color: n.color
  });
  return (() => {
    const r = bi(), c = n.ref;
    return typeof c == "function" ? X(c, r) : n.ref = r, Ce(r, ne({
      get classList() {
        return t();
      },
      get style() {
        return i();
      }
    }, l), !1, !0), g(r, () => n.children), r;
  })();
}, xi = /* @__PURE__ */ C('<div class="cm-accordion-content">'), Ci = /* @__PURE__ */ C('<div><div class="cm-accordion-title"><div class="cm-accordion-item-title-text">');
function ki(e) {
  const t = Ei(), n = t?.signal, l = t?.onSelect, i = t?.flex ? !1 : t?.multi, [r, c] = n, [a, d] = j(!1), [s, o] = j(!1), h = () => {
    let b, f = !1;
    if (i) {
      const _ = r();
      if (_.includes(e.name)) {
        const v = _.indexOf(e.name);
        _.splice(v, 1), b = [].concat(_), f = !1;
      } else
        _.push(e.name), b = [].concat(_), f = !0;
    } else if (r() === e.name) {
      if (t?.flex)
        return;
      b = "", f = !1;
    } else
      b = e.name, f = !0;
    c(b), l && l(e.name, f, b);
  };
  K(() => {
    let b = !1;
    const f = r();
    i ? b = f.includes(e.name) : b = f === e.name, o(!1), d(b);
  });
  const m = () => q(e, "cm-accordion-item", {
    "cm-accordion-item-active": a(),
    "cm-accordion-item-full": a() && s()
  }), $ = () => {
    o(!0);
  };
  return (() => {
    const b = Ci(), f = b.firstChild, _ = f.firstChild;
    return f.$$click = h, g(f, () => e.icon, _), g(_, () => e.title), g(f, u(W, {
      class: "cm-accordion-title-arrow",
      name: "chevron-right"
    }), null), g(b, u(On, {
      get open() {
        return a();
      },
      onEnd: $,
      get children() {
        const v = xi();
        return g(v, () => e.children), v;
      }
    }), null), P((v) => {
      const S = m(), k = e.style;
      return v._v$ = B(b, S, v._v$), v._v$2 = Y(b, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), b;
  })();
}
J(["click"]);
const Li = /* @__PURE__ */ C("<div>"), Nn = me();
function Si(e) {
  const t = () => q(e, "cm-accordion", {
    "cm-flex-accordion": e.flex
  }), [n, l] = he(e, "activeKey", e.multi ? [] : ""), i = {
    flex: e.flex,
    multi: e.multi,
    signal: [n, l],
    onSelect: e.onSelect
  };
  return u(Nn.Provider, {
    value: i,
    get children() {
      const r = Li();
      return g(r, () => e.children), P((c) => {
        const a = t(), d = e.style;
        return c._v$ = B(r, a, c._v$), c._v$2 = Y(r, d, c._v$2), c;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r;
    }
  });
}
Si.Item = ki;
const Ei = () => ge(Nn);
function Bn(e, t = 0, n, l = 500, i) {
  window.requestAnimationFrame || (window.requestAnimationFrame = function(d) {
    return window.setTimeout(d, 1e3 / 60);
  });
  const r = Math.abs(t - n), c = Math.ceil(r / l * 50);
  function a(d, s, o) {
    if (d === s) {
      i && i();
      return;
    }
    let h = d + o > s ? s : d + o;
    d > s && (h = d - o < s ? s : d - o), e === window ? window.scrollTo(h, h) : e.scrollTop = h, window.requestAnimationFrame(() => a(h, s, o));
  }
  a(t, n, c);
}
function Mi(e) {
  const t = Me(() => e.children), n = () => t.toArray();
  return e.subItems = n, e;
}
const Di = /* @__PURE__ */ C('<div class="cm-anchor-link"><a class="cm-anchor-link-title">'), Ti = /* @__PURE__ */ C('<div><div class="cm-anchor-wrapper"><div class="cm-anchor-inner"><div><span class="cm-anchor-ink-ball">');
function Ri(e) {
  const t = () => q(e, "cm-anchor"), n = Me(() => e.children), l = () => n.toArray(), [i, r] = re({
    inkTop: 0,
    inkHeight: 0,
    currentId: "",
    currentLink: "",
    animating: !1,
    links: [],
    upperFirstTitle: !0
  });
  K(() => {
    r("links", l());
  });
  let c = null, a = null, d = 0;
  const s = e.bounds || 5;
  let o = [];
  const h = e.mode ?? "hash", m = e.showInk ?? !1, $ = () => {
    let L;
    if (h === "hash") {
      const y = window.location.href;
      L = /#([^#]+)$/.exec(y);
    } else {
      const y = window.location.href, x = y.includes("?") ? y.split("?")[1] : "", E = new URLSearchParams(x);
      E.has("_to") && E.get("_to") && (L = [], L[0] = E.get("_to"), L[1] = E.get("_to")?.replace("#", ""));
    }
    if (!L) {
      setTimeout(() => {
        const y = document.documentElement.scrollTop || document.body.scrollTop;
        S(y);
      }, 10);
      return;
    }
    r("currentLink", L[0]), r("currentId", L[1]);
  }, b = () => {
    c && c.removeEventListener("scroll", f), window.removeEventListener("hashchange", $);
  }, f = (L) => {
    if (i.animating)
      return;
    const y = document.documentElement.scrollTop || document.body.scrollTop || L.target.scrollTop;
    S(y);
  }, _ = () => {
    const L = document.getElementById(i.currentId), y = document.querySelector(`a[data-href="${i.currentLink}"]`);
    let x = e.scrollOffset || 0;
    if (y && (x = parseFloat(y.getAttribute("data-scroll-offset"))), !L)
      return;
    const E = L.offsetTop - d - x;
    r("animating", !0), Bn(c, a.scrollTop, E, 600, () => {
      r("animating", !1);
    });
  };
  K(() => {
    i.currentLink;
    const L = document.querySelector(`a[data-href="${i.currentLink}"]`)?.parentElement;
    if (!L)
      return;
    const y = L.offsetTop, x = L.getBoundingClientRect().height, E = x / 4, F = y < 0 ? e.offsetTop || 0 : y;
    xe(() => {
      r("inkTop", F + E / 2), r("inkHeight", x * 3 / 4);
    });
  });
  const v = () => {
    c = e.container ? typeof e.container == "string" ? document.querySelector(e.container) : e.container : window, a = e.container ? c : document.documentElement || document.body;
  }, S = (L) => {
    let y = -1;
    const x = o.length;
    let E = {
      link: "#",
      offset: 0
    };
    for (L += s; ++y < x; ) {
      const F = o[y], R = o[y + 1];
      if (L >= F.offset && L < (R && R.offset || 1 / 0)) {
        E = o[y];
        break;
      }
    }
    r("currentLink", E.link);
  }, k = () => c === window, w = () => {
    $(), setTimeout(() => {
      b(), v(), d = k() ? 0 : a.offsetTop, _(), c.addEventListener("scroll", f), window.addEventListener("hashchange", $);
    }, 0);
  };
  K(() => {
    const L = i.links.map((y) => y.href);
    xe(() => {
      const y = L.map((E) => E.split("#")[1]);
      a || v();
      const x = [];
      y.forEach((E) => {
        const F = document.getElementById(E);
        F && x.push({
          link: `#${E}`,
          offset: F.offsetTop - a.offsetTop
        });
      }), o = x;
    });
  });
  const M = (L, y) => {
    if (y.stopPropagation && y.stopPropagation(), y.preventDefault && y.preventDefault(), r("currentLink", L), r("currentId", L.replace("#", "")), _(), h === "hash")
      window.location.hash = L;
    else {
      const x = window.location.href, E = x.includes("?") ? x.split("?")[1] : "", F = location.hash.indexOf("?"), R = F > -1 ? location.hash.substring(0, F) : location.hash, D = new URLSearchParams(E);
      D.set("_to", L), window.history.replaceState({}, "", `${location.pathname}${R}?${D.toString()}`);
    }
  };
  ce(() => {
    w();
    const L = setInterval(() => {
      i.links.map((E) => E.href).map((E) => E.split("#")[1]).forEach((E, F) => {
        const R = document.getElementById(E);
        if (R) {
          const D = R.offsetTop - a.offsetTop;
          o[F] && o[F].offset !== D && (o[F].offset = D);
        }
      });
    }, 500);
    le(() => {
      clearInterval(L);
    });
  }), le(() => {
    b();
  });
  const A = (L) => L && L.length ? u(p, {
    each: L,
    children: (y) => (() => {
      const x = Di(), E = x.firstChild;
      return E.$$click = (F) => {
        M(y.href, F);
      }, g(E, () => y.title), g(x, () => A(y.subItems()), null), P((F) => {
        const R = y.href, D = e.scrollOffset || 0, z = y.href, T = y.title;
        return R !== F._v$ && Z(E, "href", F._v$ = R), D !== F._v$2 && Z(E, "data-scroll-offset", F._v$2 = D), z !== F._v$3 && Z(E, "data-href", F._v$3 = z), T !== F._v$4 && Z(E, "title", F._v$4 = T), F;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      }), x;
    })()
  }) : null;
  return (() => {
    const L = Ti(), y = L.firstChild, x = y.firstChild, E = x.firstChild, F = E.firstChild;
    return Re(E, "cm-anchor-ink " + (m ? "cm-anchor-show" : "")), g(x, () => A(i.links), null), P((R) => {
      const D = t(), z = `${i.inkTop}px`, T = `${i.inkHeight}px`;
      return R._v$5 = B(L, D, R._v$5), z !== R._v$6 && ((R._v$6 = z) != null ? F.style.setProperty("top", z) : F.style.removeProperty("top")), T !== R._v$7 && ((R._v$7 = T) != null ? F.style.setProperty("height", T) : F.style.removeProperty("height")), R;
    }, {
      _v$5: void 0,
      _v$6: void 0,
      _v$7: void 0
    }), L;
  })();
}
Ri.Link = Mi;
J(["click"]);
const zi = /* @__PURE__ */ C('<div class="cm-avatar-hover">'), Pi = /* @__PURE__ */ C('<img alt="">'), Ai = /* @__PURE__ */ C("<span>"), Ii = /* @__PURE__ */ C('<span class="cm-avatar-string">');
function pt(e) {
  if (e.asProps)
    return e;
  const [t, n] = j(!1), l = () => q(e, "cm-avatar", {
    [`cm-avatar-${e.size}`]: e.size,
    "cm-avatar-icon": e.icon,
    "cm-avatar-img": e.src,
    "cm-avatar-square": e.shape === "square"
  });
  let i, r;
  ce(() => {
    if (r && i) {
      i.style.Transform = "", i.style.webkitTransform = "", i.style.mozTransform = "";
      const s = r.clientWidth, h = i.getBoundingClientRect().width, $ = Math.acos(21 / s), b = Math.sin($) * s, f = h > s ? b / h : 1;
      i.style.Transform = `scale(${f})`, i.style.webkitTransform = `scale(${f})`, i.style.mozTransform = `scale(${f})`;
    }
  });
  const c = () => {
    const s = {
      ...e.style
    };
    return typeof e.size == "number" && (s.width = e.size + "px", s.height = e.size + "px"), s;
  }, a = (s) => {
    n(!0), e.onMouseEnter && e.onMouseEnter(s);
  }, d = (s) => {
    n(!1), e.onMouseLeave && e.onMouseLeave(s);
  };
  return (() => {
    const s = Ai();
    s.addEventListener("mouseleave", d), s.addEventListener("mouseenter", a);
    const o = r;
    return typeof o == "function" ? X(o, s) : r = s, fe(s, "click", e.onClick, !0), g(s, u(V, {
      get when() {
        return t();
      },
      get children() {
        const h = zi();
        return g(h, () => e.hoverMask), h;
      }
    }), null), g(s, u(Le, {
      get fallback() {
        return (() => {
          const h = Ii(), m = i;
          return typeof m == "function" ? X(m, h) : i = h, g(h, () => e.children), h;
        })();
      },
      get children() {
        return [u(Q, {
          get when() {
            return e.src;
          },
          get children() {
            const h = Pi();
            return P(() => Z(h, "src", e.src)), h;
          }
        }), u(Q, {
          get when() {
            return e.icon;
          },
          get children() {
            return e.icon;
          }
        })];
      }
    }), null), P((h) => {
      const m = l(), $ = c();
      return h._v$ = B(s, m, h._v$), h._v$2 = Y(s, $, h._v$2), h;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
J(["click"]);
const Fi = /* @__PURE__ */ C('<div><div class="cm-tooltip-rel"></div><div><div class="cm-tooltip-content"><svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-tooltip-arrow"><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1"></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)"></path></svg><div class="cm-tooltip-inner cm-tooltip-inner-with-width">');
function Oi(e) {
  const [t, n] = j(!1), [l, i] = j({
    display: "none",
    visibility: "hidden"
  }), r = () => e.align ?? "bottom", c = () => {
    e.disabled || (n(!0), i({
      display: "block",
      visibility: "visible"
    }));
  }, a = () => {
    e.disabled || (n(!1), setTimeout(() => {
      i({
        display: "none",
        visibility: "hidden"
      });
    }, 250));
  }, d = () => q(e, "cm-tooltip", r(), {
    [`cm-tooltip-${e.theme}`]: e.theme
  }), s = () => ({
    "cm-tooltip-popper": !0,
    animation: t()
  });
  return (() => {
    const o = Fi(), h = o.firstChild, m = h.nextSibling, $ = m.firstChild, b = $.firstChild, f = b.nextSibling;
    return o.addEventListener("mouseleave", a), o.addEventListener("mouseenter", c), g(h, () => e.children), g(f, () => e.content), P((_) => {
      const v = d(), S = e.style, k = s(), w = r(), M = l();
      return _._v$ = B(o, v, _._v$), _._v$2 = Y(o, S, _._v$2), _._v$3 = B(m, k, _._v$3), w !== _._v$4 && Z(m, "x-placement", _._v$4 = w), _._v$5 = Y(m, M, _._v$5), _;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), o;
  })();
}
const en = /* @__PURE__ */ C('<div class="cm-avatar-list-item">'), Ni = /* @__PURE__ */ C("<div>");
function $f(e) {
  const t = () => q(e, "cm-avatar-list", {
    [`cm-avatar-list-${e.size}`]: e.size
  }), n = () => e.max ?? Number.MAX_VALUE, l = Me(() => e.children), i = () => l.toArray(), r = () => i().length;
  return (() => {
    const c = Ni();
    return g(c, u(p, {
      get each() {
        return i();
      },
      children: (a, d) => {
        if (a.asProps = !1, d() < n())
          return (() => {
            const s = en();
            return g(s, u(Oi, {
              get align() {
                return e.align || "top";
              },
              get content() {
                return a.title;
              },
              get children() {
                return u(pt, ne(a, {
                  get size() {
                    return e.size;
                  }
                }));
              }
            })), s;
          })();
      }
    }), null), g(c, u(V, {
      get when() {
        return r() > n();
      },
      get children() {
        const a = en();
        return g(a, u(pt, {
          get size() {
            return e.size;
          },
          get style() {
            return e.excessStyle;
          },
          get children() {
            return ["+", G(() => r() - n())];
          }
        })), a;
      }
    }), null), P((a) => B(c, t(), a)), c;
  })();
}
const Bi = /* @__PURE__ */ C('<div><div class="cm-back-top-inner">');
function _f(e) {
  const [t, n] = j(!1), l = () => q(e, "cm-back-top", {
    "cm-back-top-show": t()
  }), i = e.bottom ?? 30, r = e.right ?? 30, c = e.height ?? 400, a = e.duration ?? 1e3, d = () => ({
    ...e.style,
    bottom: `${i}px`,
    right: `${r}px`
  }), s = () => {
    const h = document.documentElement.scrollTop || document.body.scrollTop;
    Bn(window, h, 0, a), e.onClick && e.onClick();
  }, o = () => {
    n(window.pageYOffset >= c);
  };
  return ce(() => {
    window.addEventListener("scroll", o), window.addEventListener("resize", o);
  }), le(() => {
    window.removeEventListener("scroll", o), window.removeEventListener("resize", o);
  }), (() => {
    const h = Bi(), m = h.firstChild;
    return h.$$click = s, g(m, () => e.children), P(($) => {
      const b = l(), f = d();
      return $._v$ = B(h, b, $._v$), $._v$2 = Y(h, f, $._v$2), $;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), h;
  })();
}
J(["click"]);
const Vi = /* @__PURE__ */ C("<sup>"), Yi = /* @__PURE__ */ C('<sup class="cm-badge-dot">'), tn = /* @__PURE__ */ C("<span>"), qi = /* @__PURE__ */ C('<span class="cm-badge-status-text">');
function Hi(e) {
  if (e && (e.startsWith("#") || e.startsWith("rgb") || e.startsWith("hsl"))) {
    const t = new Option().style;
    return t.color = e, t.color.startsWith("rgb");
  }
  return !1;
}
function yf(e) {
  const t = e.overflowCount ?? 99, n = () => q(e, "cm-badge", {
    "cm-badge-status": e.status
  }), l = () => {
    const d = {};
    return e.offset && e.offset.length === 2 && (d["margin-top"] = `${e.offset[0]}px`, d["margin-right"] = `${e.offset[1]}px`), d;
  }, i = () => e.count && e.count > t ? Math.min(t, e.count) + "+" : e.count, r = () => ({
    "cm-badge-status-dot": !0,
    [`cm-badge-status-${e.status}`]: !!e.status,
    [`cm-badge-status-${e.color}`]: !!e.color && e.color.indexOf("#") === -1
  }), c = () => ({
    "background-color": Hi(e.color) ? e.color : ""
  }), a = () => ({
    "cm-badge-count": !0,
    [`cm-badge-count-${e.type}`]: !!e.type
  });
  return (() => {
    const d = tn();
    return g(d, () => e.children, null), g(d, u(V, {
      get when() {
        return !e.status && !e.color;
      },
      get fallback() {
        return [(() => {
          const s = tn();
          return P((o) => {
            const h = r(), m = c();
            return o._v$3 = B(s, h, o._v$3), o._v$4 = Y(s, m, o._v$4), o;
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), s;
        })(), (() => {
          const s = qi();
          return g(s, () => e.text), s;
        })()];
      },
      get children() {
        return [u(V, {
          get when() {
            return e.count !== void 0 || e.text !== void 0;
          },
          get children() {
            const s = Vi();
            return g(s, i, null), g(s, () => e.text, null), P((o) => {
              const h = a(), m = l();
              return o._v$ = B(s, h, o._v$), o._v$2 = Y(s, m, o._v$2), o;
            }, {
              _v$: void 0,
              _v$2: void 0
            }), s;
          }
        }), u(V, {
          get when() {
            return e.dot !== void 0;
          },
          get children() {
            const s = Yi();
            return P((o) => Y(s, l(), o)), s;
          }
        })];
      }
    }), null), P((s) => B(d, n(), s)), d;
  })();
}
const Vn = (e) => {
  const t = Me(() => e), [n, l] = re({
    default: []
  });
  return nt(mi(t, () => {
    l("default", []);
    for (const i of t.toArray()) {
      if (!i.name) {
        l("default", [...n.default, () => i]);
        continue;
      }
      l(i.name, () => i.children);
    }
  })), n;
}, Ui = /* @__PURE__ */ C('<div class="cm-banner-icon">'), ji = /* @__PURE__ */ C('<div class="cm-banner-title">'), Xi = /* @__PURE__ */ C('<div class="cm-banner-desc">'), Wi = /* @__PURE__ */ C('<span class="cm-banner-close">'), Ki = /* @__PURE__ */ C('<div class="cm-banner-extra">'), Gi = /* @__PURE__ */ C('<div><div class="cm-banner-body"><div class="cm-banner-content"><div class="cm-banner-content-body">');
function wf(e) {
  const [t, n] = he(e, "visible", !0), l = () => q(e, "cm-banner", {
    [`cm-banner-${e.type}`]: e.type,
    ["cm-banner-bordered"]: e.bordered,
    ["cm-banner-full"]: e.fullMode ?? !0,
    ["cm-banner-not-full"]: e.fullMode === !1
  }), i = () => {
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
    return u(W, {
      name: d,
      size: 20
    });
  }, r = () => {
    n(!1), e.onClose && e.onClose();
  }, c = Vn(e.children), a = e.icon === null ? null : e.icon ?? i();
  return u(V, {
    get when() {
      return t();
    },
    get children() {
      const d = Gi(), s = d.firstChild, o = s.firstChild, h = o.firstChild;
      return g(o, u(V, {
        when: a,
        get children() {
          const m = Ui();
          return g(m, a), m;
        }
      }), h), g(h, u(V, {
        get when() {
          return e.title;
        },
        get children() {
          const m = ji();
          return g(m, () => e.title), m;
        }
      }), null), g(h, u(V, {
        get when() {
          return c.default;
        },
        get children() {
          const m = Xi();
          return g(m, () => c.default), m;
        }
      }), null), g(s, u(V, {
        get when() {
          return e.closeIcon !== null;
        },
        get children() {
          const m = Wi();
          return m.$$click = r, g(m, () => e.closeIcon ?? u(W, {
            name: "x"
          })), m;
        }
      }), null), g(d, u(V, {
        get when() {
          return c.extra;
        },
        get children() {
          const m = Ki();
          return g(m, () => c.extra), m;
        }
      }), null), P((m) => B(d, l(), m)), d;
    }
  });
}
J(["click"]);
function Zi(e) {
  return e;
}
const Ji = /* @__PURE__ */ C("<div>"), qe = (e) => {
  const t = () => e.dir ?? "h", n = () => e.wrap ?? !1, l = () => e.inline ?? !1, i = () => e.size ?? 8, r = () => e.align ?? "", c = () => q(e, "cm-space", {
    [`cm-space-${t()}`]: t(),
    [`cm-space-align-${r()}`]: r(),
    [`cm-space-justify-${e.justify}`]: !!e.justify,
    "cm-space-wrap": n(),
    "cm-space-inline": l()
  }), a = () => De(e, {
    [t() === "h" ? "column-gap" : "row-gap"]: i() + "px"
  });
  return (() => {
    const d = Ji();
    return g(d, () => e.children), P((s) => {
      const o = c(), h = a(), m = e.id, $ = e.title;
      return s._v$ = B(d, o, s._v$), s._v$2 = Y(d, h, s._v$2), m !== s._v$3 && Z(d, "id", s._v$3 = m), $ !== s._v$4 && Z(d, "title", s._v$4 = $), s;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), d;
  })();
}, Qi = /* @__PURE__ */ C("<div>");
function Xt(e) {
  const [t, n] = ae(e, ["classList", "class", "style", "size", "children"]), l = () => q(e, "cm-view"), i = () => De(e, {
    flex: `0 1 ${t.size}`
  });
  return (() => {
    const r = Qi();
    return Ce(r, ne({
      get classList() {
        return l();
      },
      get style() {
        return i();
      }
    }, n), !1, !0), g(r, () => t.children), r;
  })();
}
function bf(e) {
  const t = () => q(e, "cm-h-view"), [n, l] = ae(e, ["classList", "class"]);
  return u(Xt, ne({
    get classList() {
      return t();
    }
  }, l));
}
function xf(e) {
  const t = () => q(e, "cm-v-view"), [n, l] = ae(e, ["classList", "class"]);
  return u(Xt, ne({
    get classList() {
      return t();
    }
  }, l));
}
function Cf(e) {
  const t = () => q(e, "cm-fixed-view"), [n, l] = ae(e, ["classList", "class"]);
  return u(Xt, ne({
    get classList() {
      return t();
    }
  }, l));
}
const pi = /* @__PURE__ */ C("<div>");
function er(e) {
  const t = () => q(e, "cm-both-side");
  return (() => {
    const n = pi();
    return g(n, () => e.children), P((l) => {
      const i = t(), r = e.style;
      return l._v$ = B(n, i, l._v$), l._v$2 = Y(n, r, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const tr = /* @__PURE__ */ C("<div>");
function kf(e) {
  const t = () => q(e, "cm-view-center"), n = De(e, {
    width: e.width + "px",
    height: e.height + "px"
  }), [l, i] = ae(e, ["classList", "class", "style", "width", "height", "children"]);
  return (() => {
    const r = tr();
    return Ce(r, ne({
      get classList() {
        return t();
      },
      get style() {
        return n();
      }
    }, i), !1, !0), g(r, () => l.children), r;
  })();
}
const nn = /* @__PURE__ */ C("<span>"), nr = /* @__PURE__ */ C('<span class="cm-breadcrumb-wrap"><a></a><span class="cm-breadcrumb-separator">');
function ir(e) {
  const [t, n] = ae(e, ["classList", "link", "icon", "children"]), l = () => q(e, "cm-breadcrumb-item");
  return (() => {
    const i = nr(), r = i.firstChild, c = r.nextSibling;
    return g(r, u(qe, {
      size: 4,
      get children() {
        return [u(V, {
          get when() {
            return t.icon;
          },
          get children() {
            const a = nn();
            return g(a, () => t.icon), a;
          }
        }), (() => {
          const a = nn();
          return g(a, () => t.children), a;
        })()];
      }
    })), g(c, () => e.separator || "/"), P((a) => {
      const d = l(), s = e.link;
      return a._v$ = B(r, d, a._v$), s !== a._v$2 && Z(r, "href", a._v$2 = s), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
const rr = /* @__PURE__ */ C("<div>");
function lr(e) {
  const t = Me(() => e.children), n = () => t.toArray(), l = () => q(e, "cm-breadcrumb");
  return (() => {
    const i = rr();
    return g(i, u(p, {
      get each() {
        return n();
      },
      children: (r) => (r.separator = e.separator ?? "/", u(ir, r))
    })), P((r) => {
      const c = l(), a = e.style;
      return r._v$ = B(i, c, r._v$), r._v$2 = Y(i, a, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
lr.Item = Zi;
function cr() {
  const [e, t] = j(!1);
  return [e, () => {
    t(!0), setTimeout(() => {
      t(!1);
    }, 1e3);
  }];
}
const ar = /* @__PURE__ */ C('<span class="cm-loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(113.635 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite">'), He = (e) => {
  const t = Fn({
    size: 14,
    color: "#fff"
  }, e);
  return (() => {
    const n = ar(), l = n.firstChild;
    return P((i) => {
      const r = `${t.size}px`, c = `${t.size}px`, a = t.size, d = t.size, s = t.color;
      return r !== i._v$ && ((i._v$ = r) != null ? n.style.setProperty("width", r) : n.style.removeProperty("width")), c !== i._v$2 && ((i._v$2 = c) != null ? n.style.setProperty("height", c) : n.style.removeProperty("height")), a !== i._v$3 && Z(l, "width", i._v$3 = a), d !== i._v$4 && Z(l, "height", i._v$4 = d), s !== i._v$5 && Z(l, "stroke", i._v$5 = s), i;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), n;
  })();
}, sr = /* @__PURE__ */ C("<div>"), Yn = me();
function Lf(e) {
  const t = () => q(e, {
    "cm-button-group": !0
  }), [n, l] = ae(e, ["classList", "children", "type", "size", "disabled"]);
  return u(Yn.Provider, {
    get value() {
      return {
        type: n.type,
        size: n.size,
        disabled: n.disabled
      };
    },
    get children() {
      const i = sr();
      return Ce(i, ne({
        get classList() {
          return t();
        }
      }, l), !1, !0), g(i, () => n.children), i;
    }
  });
}
const rn = /* @__PURE__ */ C('<span class="cm-button-icon">'), or = /* @__PURE__ */ C('<button type="button">'), dr = /* @__PURE__ */ C("<a>"), ke = (e) => {
  const [t, n] = cr(), l = e.iconAlign || "left", i = ge(Yn), r = () => e.type || i?.type, c = () => e.size || i?.size, a = () => e.disabled || i?.disabled, d = () => q(e, {
    "cm-button": !0,
    [`cm-button-icon-${l}`]: !0,
    "cm-click-animating": t(),
    "cm-button-ghost": e.ghost,
    "cm-button-block": e.block,
    [`cm-button-${r()}`]: r(),
    [`cm-button-${c()}`]: c(),
    "cm-button-active": e.active,
    "cm-button-circle": e.circle,
    "cm-button-icon-only": !!e.icon && !e.children,
    "cm-button-empty": !e.icon && !e.children
  }), [s, o] = ae(e, ["classList", "class", "onClick", "link", "style", "title", "type", "block", "size", "active", "circle", "icon", "children", "iconAlign", "disabled", "loading", "ghost", "ref"]);
  function h($) {
    a() || s.loading || s.onClick && s.onClick($);
  }
  const m = l === "left" ? [G((() => {
    const $ = G(() => !!s.loading);
    return () => $() ? u(He, {}) : (() => {
      const b = G(() => !!s.icon);
      return () => b() ? (() => {
        const f = rn();
        return g(f, () => s.icon), f;
      })() : null;
    })();
  })()), G(() => s.children)] : [G(() => s.children), G((() => {
    const $ = G(() => !!s.loading);
    return () => $() ? u(He, {}) : (() => {
      const b = G(() => !!s.icon);
      return () => b() ? (() => {
        const f = rn();
        return g(f, () => s.icon), f;
      })() : null;
    })();
  })())];
  return u(V, {
    get when() {
      return !s.link;
    },
    get fallback() {
      return (() => {
        const $ = dr(), b = s.ref;
        return typeof b == "function" ? X(b, $) : s.ref = $, Ce($, ne({
          get classList() {
            return d();
          },
          get style() {
            return s.style;
          },
          get title() {
            return s.title;
          }
        }, o, {
          onMouseUp: n,
          onClick: h
        }), !1, !0), g($, m), $;
      })();
    },
    get children() {
      const $ = or(), b = s.ref;
      return typeof b == "function" ? X(b, $) : s.ref = $, Ce($, ne({
        get classList() {
          return d();
        },
        get style() {
          return s.style;
        },
        get title() {
          return s.title;
        },
        get disabled() {
          return a();
        }
      }, o, {
        onMouseUp: n,
        onClick: h
      }), !1, !0), g($, m), $;
    }
  });
}, ur = /* @__PURE__ */ C('<div><div class="cm-card-body">'), fr = /* @__PURE__ */ C('<div class="cm-card-head">'), hr = /* @__PURE__ */ C('<div class="cm-card-footer">');
function Sf(e) {
  const t = () => q(e, "cm-card", {
    "cm-card-bordered": e.bordered,
    "cm-card-rised": e.rised
  });
  return (() => {
    const n = ur(), l = n.firstChild;
    return g(n, (() => {
      const i = G(() => !!e.title);
      return () => i() ? (() => {
        const r = fr();
        return g(r, () => e.title), r;
      })() : null;
    })(), l), g(l, () => e.children), g(n, (() => {
      const i = G(() => !!e.footer);
      return () => i() ? (() => {
        const r = hr();
        return g(r, () => e.footer), r;
      })() : null;
    })(), null), P((i) => {
      const r = t(), c = e.style, a = e.bodyStyle;
      return i._v$ = B(n, r, i._v$), i._v$2 = Y(n, c, i._v$2), i._v$3 = Y(l, a, i._v$3), i;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), n;
  })();
}
const mr = /* @__PURE__ */ C("<div>");
function gr(e) {
  const t = yr(), n = $e(), l = () => q(e, "cm-carousel-item", {
    "cm-carousel-item-active-fade": t && t.effect === "fade" && t.store.activeKey === n,
    "cm-carousel-item-active": t && t.effect === "slide" && t.store.dir === "normal" && t.store.activeKey === n,
    "cm-carousel-item-active-next": t && t.effect === "slide" && t.store.dir === "normal" && t.store.prevKey === n,
    "cm-carousel-item-active-reverse": t && t.effect === "slide" && t.store.dir === "reverse" && t.store.activeKey === n,
    "cm-carousel-item-active-reverse-next": t && t.effect === "slide" && t.store.dir === "reverse" && t.store.nextKey === n
  });
  return ce(() => {
    t && t.addItem({
      id: n
    });
  }), (() => {
    const i = mr();
    return Z(i, "data-id", n), g(i, () => e.children), P((r) => B(i, l(), r)), i;
  })();
}
const vr = /* @__PURE__ */ C('<div><div x-placement="left"></div><div class="cm-carousel-list"></div><div x-placement="right"></div><ul>'), $r = /* @__PURE__ */ C("<li>"), qn = me();
function _r(e) {
  const t = () => q(e, "cm-carousel"), [n, l] = he(e, "activeIndex", 0), i = e.arrow ?? "hover", r = e.dotType ?? "dot", c = e.dotAlign ?? "center", a = e.autoPlay ?? !1, d = e.duration ?? 4e3, s = e.effect ?? "slide";
  let o, h, m = null;
  const $ = () => ({
    "cm-carousel-arrow": !0,
    [`cm-carousel-arrow-${i}`]: !!i
  }), b = () => ({
    "cm-carousel-dots": !0,
    [`cm-carousel-dots-${r}`]: !!r,
    [`cm-carousel-dots-${c}`]: !!c
  });
  let f = !1;
  const [_, v] = re({
    data: [],
    activeIndex: n(),
    activeKey: "",
    nextKey: "",
    prevKey: "",
    dir: "normal"
  }), S = (L) => {
    L.index = _.data.length, v("data", [..._.data, L]);
  }, k = () => {
    clearTimeout(m), w(), m = setTimeout(() => {
      k();
    }, d);
  };
  ce(() => {
    if (o) {
      const L = o.querySelectorAll(".cm-carousel-item");
      if (L.length) {
        const y = L[0].getBoundingClientRect();
        h.style.height = y.height + "px";
      }
      a && (m = setTimeout(() => {
        k();
      }, d));
    }
  }), le(() => {
    m && clearTimeout(m);
  }), K(() => {
    const L = n();
    v("activeIndex", L);
  }), K(() => {
    const L = _.activeIndex, y = _.data;
    if (y && y.length)
      if (!f)
        h.children[_.activeIndex].classList.add("cm-carousel-item-active-init"), f = !0;
      else {
        const x = h.querySelector(".cm-carousel-item-active-init");
        x && x.classList.remove("cm-carousel-item-active-init"), v("activeKey", y[L].id), v("prevKey", y[(y.length + L - 1) % y.length].id), v("nextKey", y[(y.length + L + 1) % y.length].id);
      }
  });
  const w = () => {
    l((_.activeIndex + 1) % _.data.length), v("dir", "normal"), e.onChange && e.onChange(n());
  }, M = () => {
    l((_.data.length + _.activeIndex - 1) % _.data.length), v("dir", "reverse"), e.onChange && e.onChange(n());
  }, A = (L) => {
    v("dir", _.activeIndex - L < 0 ? "normal" : "reverse"), l(L), e.onChange && e.onChange(n());
  };
  return u(qn.Provider, {
    value: {
      addItem: S,
      store: _,
      effect: s
    },
    get children() {
      const L = vr(), y = L.firstChild, x = y.nextSibling, E = x.nextSibling, F = E.nextSibling, R = o;
      typeof R == "function" ? X(R, L) : o = L, y.$$click = M, g(y, u(W, {
        name: "chevron-left",
        size: 24
      }));
      const D = h;
      return typeof D == "function" ? X(D, x) : h = x, g(x, () => e.children), E.$$click = w, g(E, u(W, {
        name: "chevron-right",
        size: 24
      })), g(F, u(p, {
        get each() {
          return _.data;
        },
        children: (z, T) => {
          const O = () => ({
            "cm-carousel-dot": !0,
            "cm-carousel-dot-active": _.activeIndex === T()
          });
          return (() => {
            const N = $r();
            return N.$$click = () => {
              A(T());
            }, P((I) => B(N, O(), I)), N;
          })();
        }
      })), P((z) => {
        const T = t(), O = e.style, N = $(), I = $(), U = b();
        return z._v$ = B(L, T, z._v$), z._v$2 = Y(L, O, z._v$2), z._v$3 = B(y, N, z._v$3), z._v$4 = B(E, I, z._v$4), z._v$5 = B(F, U, z._v$5), z;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0,
        _v$5: void 0
      }), L;
    }
  });
}
_r.Item = gr;
const yr = () => ge(qn);
J(["click"]);
const wr = /* @__PURE__ */ C("<div>"), Hn = me(), Ef = (e) => {
  const t = () => q(e, "cm-row", {
    [`cm-row-${e.justify}`]: e.justify,
    [`cm-row-${e.align}`]: e.align
  }), n = () => {
    const i = e.gutter ? e.gutter / 2 : 0, r = {
      ...e.style
    };
    return e.gutter && (r["margin-left"] = `-${i}px`, r["margin-right"] = `-${i}px`), r;
  }, l = Fn({
    gutter: e.gutter || 0
  });
  return u(Hn.Provider, {
    value: l,
    get children() {
      const i = wr();
      return g(i, () => e.children), P((r) => {
        const c = t(), a = n();
        return r._v$ = B(i, c, r._v$), r._v$2 = Y(i, a, r._v$2), r;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), i;
    }
  });
}, br = /* @__PURE__ */ C("<div>"), Mf = (e) => {
  const t = ge(Hn);
  let n;
  const l = () => {
    const r = {
      ...e.style,
      flex: `0 0 ${(e.grid || 1) * 100}%`
    };
    return e.push && (r.left = `${e.push * 100}%`), e.pull && (r.right = `${e.pull * 100}%`), e.offset && (r["margin-left"] = `${e.offset * 100}%`), t?.gutter && (r["padding-left"] = t?.gutter / 2 + "px", r["padding-right"] = t?.gutter / 2 + "px"), e.flex && (e.flex.indexOf(" ") > -1 ? r.flex = e.flex : r.flex = `0 0 ${e.flex}`), r;
  }, i = () => q(e, "cm-col");
  return (() => {
    const r = br(), c = n;
    return typeof c == "function" ? X(c, r) : n = r, g(r, () => e.children), P((a) => {
      const d = i(), s = l();
      return a._v$ = B(r, d, a._v$), a._v$2 = Y(r, s, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}, xr = /* @__PURE__ */ C('<span class="cm-count-down-prefix">'), Cr = /* @__PURE__ */ C('<span class="cm-count-down-suffix">'), kr = /* @__PURE__ */ C('<span><span class="cm-count-down-value">');
function at(e) {
  return `${e}`.padStart(2, "0");
}
function Df(e) {
  let t;
  const [n, l] = j((/* @__PURE__ */ new Date()).getTime()), i = () => {
    let a = e.value;
    (typeof a == "string" || a instanceof Date) && (a = te(a).toDate().getTime());
    let d = a - n();
    d <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), d = 0);
    const s = at(parseInt(d / (1e3 * 60 * 60 * 24) + "", 10)), o = at(parseInt(d / (1e3 * 60 * 60) + "", 10) % 24), h = at(parseInt(d / (1e3 * 60) + "", 10) % 60), m = at(parseInt(d / 1e3 + "", 10) % 60), $ = e.format ?? "HH:mm:ss";
    let b = $;
    return $.match(/D+/) && (b = b.replace(/D+/, s + "")), $.match(/H+/) && (b = b.replace(/H+/, o + "")), $.match(/m+/) && (b = b.replace(/m+/, h + "")), $.match(/s+/) && (b = b.replace(/s+/, m + "")), b;
  }, r = () => {
    t = setInterval(() => {
      l((/* @__PURE__ */ new Date()).getTime());
    }, 1e3);
  };
  ce(() => {
    r();
  }), le(() => {
    clearInterval(t), t = null;
  });
  const c = () => q(e, "cm-count-down");
  return (() => {
    const a = kr(), d = a.firstChild;
    return g(a, u(V, {
      get when() {
        return e.prefix;
      },
      get children() {
        const s = xr();
        return g(s, () => e.prefix), s;
      }
    }), d), g(d, i), g(a, u(V, {
      get when() {
        return e.suffix;
      },
      get children() {
        const s = Cr();
        return g(s, () => e.suffix), s;
      }
    }), null), P((s) => {
      const o = c(), h = e.style;
      return s._v$ = B(a, o, s._v$), s._v$2 = Y(a, h, s._v$2), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
const Lr = /* @__PURE__ */ C("<span>");
function Tf(e) {
  const t = e.start ?? 0;
  let n, l;
  ce(() => {
    l = new vi(n, e.value, {
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
    }), l.error ? console.error(l.error) : r();
  }), le(() => {
    l = null;
  });
  const i = () => {
    e.onEnd && e.onEnd();
  }, r = () => {
    l && l.start();
  }, c = (s) => {
    l && l.update(s);
  }, a = () => {
    l && l.pauseResume();
  };
  K(() => {
    c(e.value);
  }), e.ref && e.ref({
    reset: () => {
      l && l.reset();
    },
    update: c,
    start: r,
    pauseResume: a
  });
  const d = () => q(e, "cm-count-up");
  return (() => {
    const s = Lr(), o = n;
    return typeof o == "function" ? X(o, s) : n = s, P((h) => {
      const m = d(), $ = e.style;
      return h._v$ = B(s, m, h._v$), h._v$2 = Y(s, $, h._v$2), h;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
const Sr = /* @__PURE__ */ C("<div>"), Er = /* @__PURE__ */ C('<span class="cm-divider-text">');
function Rf(e) {
  const t = () => q(e, "cm-divider", {
    [`cm-divider-${e.dir || "h"}`]: e.dir || "h",
    [`cm-divider-${e.align}`]: e.align,
    "cm-divider-dashed": e.dashed
  }), n = () => De(e, {
    height: e.height
  });
  return (() => {
    const l = Sr();
    return g(l, (() => {
      const i = G(() => !!e.children);
      return () => i() ? (() => {
        const r = Er();
        return g(r, () => e.children), r;
      })() : null;
    })()), P((i) => {
      const r = t(), c = n();
      return i._v$ = B(l, r, i._v$), i._v$2 = Y(l, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
function Mr(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function Dr(e, t, n) {
  const i = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), r = (e.clientX + t.scrollLeft - i.left) / n, c = (e.clientY + t.scrollTop - i.top) / n;
  return {
    x: r,
    y: c
  };
}
function ln(e, t) {
  for (let n = 0, l = e.length; n < l; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function Tr(e, t) {
  return e.targetTouches && ln(e.targetTouches, (n) => t === n.identifier) || e.changedTouches && ln(e.changedTouches, (n) => t === n.identifier);
}
function xt(e, t, n, l) {
  const i = typeof t == "number" ? Tr(e, t) : null;
  if (typeof t == "number" && !i)
    return null;
  const r = n.offsetParent || l.offsetParent || l.ownerDocument.body;
  return Dr(i || e, r, n.scale);
}
function Ct(e, t, n, l, i) {
  return Number.isNaN(t) ? {
    node: e,
    deltaX: 0,
    deltaY: 0,
    lastX: l,
    lastY: i,
    x: l,
    y: i
  } : {
    node: e,
    deltaX: l - t,
    deltaY: i - n,
    lastX: t,
    lastY: n,
    x: l,
    y: i
  };
}
function cn(e, t, n, l) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...l
  };
  e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
}
function an(e, t, n, l) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...l
  };
  e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
}
function Rr(e, t, n) {
  const l = Math.round(t / e[0]) * e[0], i = Math.round(n / e[1]) * e[1];
  return [l, i];
}
function zr(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && e.body.classList.add("react-draggable-transparent-selection");
}
function Pr(e) {
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
function kt(e, t, n) {
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
function Ar(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function ue(e) {
  return parseInt(e, 10);
}
function Ir(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t += ue(n.borderTopWidth), t += ue(n.borderBottomWidth), t;
}
function Fr(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t += ue(n.borderLeftWidth), t += ue(n.borderRightWidth), t;
}
function Or(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t -= ue(n.paddingTop), t -= ue(n.paddingBottom), t;
}
function Nr(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t -= ue(n.paddingLeft), t -= ue(n.paddingRight), t;
}
function st(e) {
  return typeof e == "number" && !isNaN(e);
}
function Br({
  bounds: e,
  node: t
}, n, l) {
  if (!e)
    return [n, l];
  if (e = typeof e == "string" ? e : Ar(e), typeof e == "string") {
    let i;
    if (e === "parent" ? i = t.parentNode : i = document.querySelector(e), !(i instanceof HTMLElement))
      throw new Error('Bounds selector "' + e + '" could not find an element.');
    const r = window.getComputedStyle(t), c = window.getComputedStyle(i);
    e = {
      left: -t.offsetLeft + ue(c.paddingLeft) + ue(r.marginLeft),
      top: -t.offsetTop + ue(c.paddingTop) + ue(r.marginTop),
      right: Nr(i) - Fr(t) - t.offsetLeft + ue(c.paddingRight) - ue(r.marginRight),
      bottom: Or(i) - Ir(t) - t.offsetTop + ue(c.paddingBottom) - ue(r.marginBottom)
    };
  }
  return st(e.right) && (n = Math.min(n, e.right)), st(e.bottom) && (l = Math.min(l, e.bottom)), st(e.left) && (n = Math.max(n, e.left)), st(e.top) && (l = Math.max(l, e.top)), [n, l];
}
function Vr(e) {
  return e === "both" || e === "x";
}
function Yr(e) {
  return e === "both" || e === "y";
}
function qr({
  x: e,
  y: t
}, n, l) {
  let i = `translate(${e}${l},${t}${l})`;
  if (n) {
    const r = `${typeof n.x == "string" ? n.x : n.x + l}`, c = `${typeof n.y == "string" ? n.y : n.y + l}`;
    i = `translate(${r}, ${c})` + i;
  }
  return i;
}
function Hr(e, t) {
  return {
    transform: qr(e, t, "px")
  };
}
const Ur = /* @__PURE__ */ C("<div>");
function jr(e) {
  const [t, n] = j(null), [l, i] = j(NaN), [r, c] = j(NaN), [a, d] = j(!1);
  let s;
  const o = (f) => {
    if (e.onMouseDown && e.onMouseDown(f), !e.allowAnyClick && typeof f.button == "number" && f.button !== 0)
      return !1;
    if (!s || !s.ownerDocument || !s.ownerDocument.body)
      throw new Error("<DraggableCore> not mounted on DragStart!");
    const {
      ownerDocument: _
    } = s;
    if (e.disabled || !(f.target instanceof _.defaultView.Node) || e.handle && !document.querySelector(e.handle).contains(f.target) || e.cancel && document.querySelector(e.cancel).contains(f.target))
      return;
    f.type === "touchstart" && f.preventDefault();
    const v = Mr(f);
    n(v);
    const S = xt(f, v, e, s);
    if (S == null)
      return;
    const {
      x: k,
      y: w
    } = S, M = Ct(s, l(), r(), k, w);
    (e.onStart && e.onStart(f, M)) !== !1 && (zr(_), Oe(() => {
      d(!0), i(k), c(w);
    }), cn(_, "mousemove", h), cn(_, "mouseup", m));
  }, h = (f) => {
    const _ = xt(f, t(), e, s);
    if (_ == null)
      return;
    let {
      x: v,
      y: S
    } = _;
    if (Array.isArray(e.grid)) {
      let M = v - l(), A = S - r();
      if ([M, A] = Rr(e.grid, M, A), !M && !A)
        return;
      v = l() + M, S = r() + A;
    }
    const k = Ct(s, l(), r(), v, S);
    if (e.onDrag(f, k) === !1) {
      try {
        m(new MouseEvent("mouseup"));
      } catch {
        const A = document.createEvent("MouseEvents");
        A.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), m(A);
      }
      return;
    }
    Oe(() => {
      i(v), c(S);
    });
  }, m = (f) => {
    if (!a())
      return;
    const _ = xt(f, t(), e, s);
    if (_ == null)
      return;
    const {
      x: v,
      y: S
    } = _, k = Ct(s, l(), r(), v, S);
    if (e.onStop(f, k) === !1)
      return !1;
    s && Pr(s.ownerDocument), Oe(() => {
      d(!1), i(NaN), c(NaN);
    }), s && (an(s.ownerDocument, "mousemove", h), an(s.ownerDocument, "mouseup", m));
  }, $ = (f) => o(f), b = (f) => m(f);
  return (() => {
    const f = Ur(), _ = s;
    return typeof _ == "function" ? X(_, f) : s = f, f.$$mouseup = b, f.$$mousedown = $, g(f, () => e.children), P((v) => {
      const S = e.classList, k = e.style;
      return v._v$ = B(f, S, v._v$), v._v$2 = Y(f, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
}
J(["mousedown", "mouseup"]);
function Rt(e) {
  const t = e.defaultPosition || {
    x: 0,
    y: 0
  }, [n, l] = re({
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
  }), i = e.scale || 1, r = e.bounds || !1;
  let c;
  const a = (b, f) => {
    if ((e.onStart && e.onStart(b, kt(n, i, f))) === !1)
      return !1;
    l("dragging", !0), l("dragged", !0);
  }, d = (b, f) => {
    if (!n.dragging)
      return !1;
    const _ = kt(n, i, f), v = {
      x: _.x,
      y: _.y,
      slackX: 0,
      slackY: 0
    };
    if (r) {
      const {
        x: k,
        y: w
      } = v;
      v.x += n.slackX, v.y += n.slackY;
      const [M, A] = Br({
        bounds: r,
        node: f.node
      }, v.x, v.y);
      v.x = M, v.y = A, v.slackX = n.slackX + (k - v.x), v.slackY = n.slackY + (w - v.y), _.x = v.x, _.y = v.y, _.deltaX = v.x - n.x, _.deltaY = v.y - n.y;
    }
    if ((e.onDrag && e.onDrag(b, _)) === !1)
      return !1;
    l("x", v.x), l("y", v.y), l("slackX", v.slackX), l("slackY", v.slackY);
  }, s = (b, f) => {
    if (!n.dragging || (e.onStop && e.onStop(b, kt(n, i, f))) === !1)
      return !1;
    l("dragging", !1), l("slackX", 0), l("slackY", 0);
  };
  le(() => {
    l("dragging", !1);
  });
  const o = e.axis || "both", h = () => ({
    // Set left if horizontal drag is enabled
    x: Vr(o) ? n.x : t.x,
    // Set top if vertical drag is enabled
    y: Yr(o) ? n.y : t.y
  }), m = () => ({
    ...e.style,
    ...Hr(h(), e.positionOffset)
  }), $ = () => q(e, "cm-draggable", {
    "cm-draggable-dragging": n.dragging,
    "cm-draggable-dragged": n.dragged
  });
  return e.ref && e.ref({
    reset: () => {
      l("x", 0), l("y", 0);
    },
    setPosition(b) {
      l("x", b.x), l("y", b.y);
    }
  }), u(jr, {
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
      return m();
    },
    onStart: a,
    onDrag: d,
    onStop: s,
    ref(b) {
      const f = c;
      typeof f == "function" ? f(b) : c = b;
    },
    get children() {
      return e.children;
    }
  });
}
function Xr(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function Wt(e) {
  const {
    el: t
  } = e, n = (l) => {
    l.target && t().contains(l.target) && (t().classList.remove(e.startClass), e.onLeave && e.onLeave()), t().removeEventListener("transitionend", n);
  };
  return le(() => {
    t() && t().removeEventListener("transitionend", n);
  }), {
    enter() {
      t() && (t().classList.add(e.startClass), t().removeEventListener("transitionend", n), Xr(() => {
        t().classList.add(e.activeClass), e.onEnter && e.onEnter();
      }));
    },
    leave() {
      t() && (t().classList.remove(e.activeClass), t().addEventListener("transitionend", n));
    }
  };
}
const Wr = /* @__PURE__ */ C('<div class="cm-drawer-title">'), Kr = /* @__PURE__ */ C('<div tabindex="1"><div class="cm-drawer-mask"></div><div class="cm-drawer-wrap"><div class="cm-drawer-body">');
function zf(e) {
  const [t, n] = he(e, "visible", !1), l = () => e.align ?? "right", i = e.maskCloseable ?? !0, r = () => (e.size ?? 256) + "px", c = () => ({
    [l() === "left" || l() === "right" ? "width" : "height"]: r()
  }), a = () => q(e, "cm-drawer", {
    [`cm-drawer-${l()}`]: l()
  });
  let d, s;
  const o = Wt({
    el: () => d,
    target: () => s,
    startClass: "cm-drawer-visible",
    activeClass: "cm-drawer-open",
    onLeave: () => {
      e.onClose && e.onClose();
    }
  }), h = () => {
    i && m();
  }, m = () => {
    n(!1);
  };
  nt(() => {
    t() ? (o.enter(), e.onShow && e.onShow()) : o.leave();
  });
  const $ = (b) => {
    e.escClose && b.code === "Escape" && n(!1);
  };
  return (() => {
    const b = Kr(), f = b.firstChild, _ = f.nextSibling, v = _.firstChild;
    b.$$keyup = $;
    const S = d;
    typeof S == "function" ? X(S, b) : d = b, f.$$click = h;
    const k = s;
    return typeof k == "function" ? X(k, _) : s = _, g(_, u(V, {
      get when() {
        return e.title;
      },
      get children() {
        const w = Wr();
        return g(w, () => e.title), w;
      }
    }), v), g(_, u(V, {
      get when() {
        return e.hasClose ?? !0;
      },
      get children() {
        return u(W, {
          name: "x",
          size: 18,
          class: "cm-drawer-close",
          onClick: m
        });
      }
    }), v), g(v, () => e.children), P((w) => {
      const M = a(), A = e.style, L = c();
      return w._v$ = B(b, M, w._v$), w._v$2 = Y(b, A, w._v$2), w._v$3 = Y(_, L, w._v$3), w;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), b;
  })();
}
J(["keyup", "click"]);
function Pe(e, t) {
  function n(c) {
    const a = document.createElement("div");
    return a.setAttribute("id", c), a;
  }
  function l(c) {
    document.body.appendChild(c);
  }
  const i = document.querySelector(`#${e}`), r = i || n(e);
  return i || l(r), r.classList.add(t), r;
}
function Un(e, t) {
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
function zt(e, t, n) {
  const l = (r) => {
    if (n && n(r), e instanceof Array) {
      let c = !1;
      e.forEach((a) => {
        a.contains && a.contains(r.target) && (c = !0), a.forEach && a.forEach((d) => {
          d.contains && d.contains(r.target) && (c = !0);
        });
      }), c || t && t();
    } else
      e.contains(r.target) || t && t();
  }, i = () => {
    document.removeEventListener("mousedown", l);
  };
  return document.addEventListener("mousedown", l), i;
}
let Gr = 5e3;
function Ae() {
  return Gr++;
}
const Zr = /* @__PURE__ */ C("<ul>");
function Pf(e) {
  const t = () => q(e, "cm-dropdown-list");
  return (() => {
    const n = Zr();
    return g(n, () => e.children), P((l) => {
      const i = t(), r = e.style;
      return l._v$ = B(n, i, l._v$), l._v$2 = Y(n, r, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Jr = /* @__PURE__ */ C("<li>");
function Af(e) {
  const [t, n] = ae(e, ["classList", "class", "disabled", "name", "children"]), l = () => q(t, "cm-dropdown-item", {
    "cm-dropdown-item-disabled": t.disabled,
    "cm-dropdown-item-divided": e.divided
  }), i = pr(), r = (c) => {
    t.disabled || (c.preventDefault(), c.stopPropagation(), i?.onSelect(t.name));
  };
  return (() => {
    const c = Jr();
    return Ce(c, ne({
      get classList() {
        return l();
      }
    }, n, {
      onClick: r
    }), !1, !0), g(c, () => t.children), c;
  })();
}
const Qr = /* @__PURE__ */ C("<span>"), sn = /* @__PURE__ */ C("<div>"), Pt = me(), pr = () => ge(Pt);
function Te(e) {
  const [t, n] = he(e, "visible", !1), [l, i] = j(t());
  let r, c;
  const a = e.trigger || "hover";
  let d;
  const s = e.align || "bottom";
  let o;
  const h = Ae(), m = e.revers ?? !0, $ = () => q(e, "cm-dropdown", {
    // 'cm-dropdown-open': visible(),
    [`cm-dropdown-${e.theme}`]: e.theme
  }), b = Wt({
    el: () => o,
    startClass: "cm-dropdown-visible",
    activeClass: "cm-dropdown-open",
    onLeave: () => {
      i(!1);
    },
    onEnter: () => {
      i(!0);
    }
  });
  nt(() => {
    t() ? b.enter() : b.leave();
  });
  const f = () => {
    d && (clearTimeout(d), d = null);
  }, _ = (x) => {
    if (!c.nextElementSibling.contains(x.target))
      return !1;
    if (e.disabled || (x.preventDefault && x.preventDefault(), x.stopPropagation && x.stopPropagation(), r = x.target, e.handler && !r.closest(e.handler)))
      return;
    const E = e.onBeforeDrop && e.onBeforeDrop(t());
    (E === void 0 || E) && n(!t());
  }, v = () => {
    e.disabled || a === "hover" && (f(), n(!0), o && (o.removeEventListener("mouseleave", S), o.addEventListener("mouseleave", S, !1)));
  }, S = () => {
    e.disabled || a === "hover" && (d = setTimeout(() => {
      n(!1);
    }, 200));
  }, k = (x, E) => {
    if (x === "bottomRight" || x === "topRight")
      return 0;
    if (x === "top" || x === "bottom")
      return E.width / 2;
    if (x === "topLeft" || x === "bottomLeft")
      return E.width;
    if (x === "left" || x === "leftTop" || x === "leftBottom")
      return 0;
    if (x === "right" || x === "rightTop" || x === "rightBottom")
      return E.width;
  }, w = (x, E) => {
    if (x === "leftBottom" || x === "rightBottom" || x === "top" || x === "topLeft" || x === "topRight")
      return 0;
    if (x === "leftTop" || x === "rightTop")
      return E.height;
    if (x === "left" || x === "right")
      return E.height / 2;
    if (x === "bottom" || x === "bottomLeft" || x === "bottomRight")
      return E.height;
  }, M = () => {
    if (l(), c && c.nextElementSibling) {
      let x = c.nextElementSibling;
      if (e.handler && (x = r.closest(e.handler)), !x)
        return;
      const E = x.offsetParent;
      if (!E)
        return;
      const F = E.getBoundingClientRect(), R = Un(s, x), D = R.top, z = R.left;
      if (e.transfer) {
        const Be = x.getBoundingClientRect();
        R.top = R.top + document.documentElement.scrollTop, R.left = R.left + document.documentElement.scrollLeft, e.fixWidth && (R["min-width"] = Be.width + "px");
      } else
        R.top = R.top + E.scrollTop - F.top, R.left = R.left + E.scrollLeft - F.left;
      const T = o.getBoundingClientRect(), O = k(s, T), N = w(s, T), I = D + N, U = z + O, H = window.innerHeight || document.documentElement.clientHeight, oe = window.innerWidth || document.documentElement.clientWidth, ye = x.getBoundingClientRect();
      return m && (I > H && (s === "bottom" || s === "bottomLeft" || s === "bottomRight" ? R.top = R.top - T.height - ye.height - 12 : s === "left" || s === "right" ? R.top = R.top - (T.height - ye.height) / 2 : (s === "leftTop" || s === "rightTop") && (R.top = R.top - (T.height - ye.height))), U > oe - 5 && (s === "bottom" ? R.left = R.left - (T.width - ye.width) / 2 : s === "bottomLeft" ? R.left = R.left - T.width + ye.width : (s === "right" || s === "rightTop") && (R.left = R.left - T.width - ye.width))), R.top = R.top + "px", R.left = R.left + "px", R["z-index"] = h, R;
    }
  };
  let A;
  ce(() => {
    if (c.nextElementSibling) {
      if (a === "hover" && (c.nextElementSibling.addEventListener("mouseenter", v, !1), c.nextElementSibling.addEventListener("mouseleave", S, !1)), (a === "click" || a === "custom") && (document.addEventListener("click", _), a === "click")) {
        const x = e.handler ? c.nextElementSibling.querySelectorAll(e.handler) : c.nextElementSibling;
        A = zt([o, x], () => {
          n(!1);
        });
      }
      if (a === "contextMenu") {
        document.addEventListener("contextmenu", _);
        const x = e.handler ? c.nextElementSibling.querySelectorAll(e.handler) : c.nextElementSibling;
        A = zt([o, x], () => {
          n(!1);
        });
      }
    }
  }), le(() => {
    c.nextElementSibling && (a === "hover" && (c.nextElementSibling.removeEventListener("mouseenter", v), c.nextElementSibling.removeEventListener("mouseleave", S)), (a === "click" || a === "custom") && document.removeEventListener("click", _), a === "contextMenu" && document.removeEventListener("contextmenu", _)), A && A();
  });
  const L = (x) => {
    e.onSelect && e.onSelect(x), o.removeEventListener("mouseleave", S), n(!1);
  }, y = "cm-dropdown-portal";
  return [(() => {
    const x = Qr(), E = c;
    return typeof E == "function" ? X(E, x) : c = x, x.style.setProperty("display", "none"), x;
  })(), G(() => e.children), u(V, {
    get when() {
      return e.transfer;
    },
    get fallback() {
      return u(Pt.Provider, {
        value: {
          onSelect: L
        },
        get children() {
          const x = sn(), E = o;
          return typeof E == "function" ? X(E, x) : o = x, x.addEventListener("mouseenter", v), Z(x, "x-placement", s), g(x, () => e.menu), P((F) => {
            const R = M(), D = $();
            return F._v$3 = Y(x, R, F._v$3), F._v$4 = B(x, D, F._v$4), F;
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), x;
        }
      });
    },
    get children() {
      return u(wt, {
        get mount() {
          return Pe(y, y);
        },
        get children() {
          return u(Pt.Provider, {
            value: {
              onSelect: L
            },
            get children() {
              const x = sn(), E = o;
              return typeof E == "function" ? X(E, x) : o = x, x.addEventListener("mouseenter", v), Z(x, "x-placement", s), g(x, () => e.menu), P((F) => {
                const R = M(), D = $();
                return F._v$ = Y(x, R, F._v$), F._v$2 = B(x, D, F._v$2), F;
              }, {
                _v$: void 0,
                _v$2: void 0
              }), x;
            }
          });
        }
      });
    }
  })];
}
const el = /* @__PURE__ */ C('<div class="cm-spin-pulse">'), tl = /* @__PURE__ */ C('<svg class="cm-spin-oval" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 38" stroke="#2d8cf0"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(113.635 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite">'), nl = /* @__PURE__ */ C(`<svg class="cm-spin-gears" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g transform="translate(-19 -19) scale(0.6)"><g transform="rotate(177)"><animateTransform attributeName="transform" type="rotate" values="0;360" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"></animateTransform><path fill="#20a0ff" d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7
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
                                            -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23">`), il = /* @__PURE__ */ C('<div><div class="cm-spin-inner"><div class="cm-spin"></div><div class="cm-spin-text">');
function jn(e) {
  const t = () => q(e, "cm-spin-wrap"), n = () => e.type || "pulse";
  return (() => {
    const l = il(), i = l.firstChild, r = i.firstChild, c = r.nextSibling;
    return g(r, u(Le, {
      get children() {
        return [u(Q, {
          get when() {
            return n() === "pulse";
          },
          get children() {
            return el();
          }
        }), u(Q, {
          get when() {
            return n() === "oval";
          },
          get children() {
            return tl();
          }
        }), u(Q, {
          get when() {
            return n() === "gear";
          },
          get children() {
            return nl();
          }
        })];
      }
    })), g(c, () => e.title || "loading..."), P((a) => {
      const d = t(), s = e.size + "px", o = e.size + "px";
      return a._v$ = B(l, d, a._v$), s !== a._v$2 && ((a._v$2 = s) != null ? r.style.setProperty("width", s) : r.style.removeProperty("width")), o !== a._v$3 && ((a._v$3 = o) != null ? r.style.setProperty("height", o) : r.style.removeProperty("height")), a;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), l;
  })();
}
const rl = /* @__PURE__ */ C('<div class="cm-image-preview-mask">'), ll = /* @__PURE__ */ C('<div class="cm-image-preview-fail">'), cl = /* @__PURE__ */ C('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7197" width="200" height="200"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7198" fill="#ffffff"></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7199" fill="#ffffff">'), al = /* @__PURE__ */ C('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7412" width="200" height="200"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7413" fill="#ffffff"></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7414" fill="#ffffff">'), sl = /* @__PURE__ */ C('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976" width="200" height="200"><path d="M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z" p-id="1977" fill="#ffffff"></path><path d="M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z" p-id="1978" fill="#ffffff"></path><path d="M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1979" fill="#ffffff"></path><path d="M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1980" fill="#ffffff">'), on = /* @__PURE__ */ C("<span>"), ol = /* @__PURE__ */ C('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13308" width="200" height="200"><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z" p-id="13309" fill="#ffffff">'), dl = /* @__PURE__ */ C('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13521" width="200" height="200"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z" p-id="13522" fill="#ffffff">'), ul = /* @__PURE__ */ C('<svg class="cm-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7816" width="200" height="200"><path d="M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z" p-id="7817" fill="#ffffff">'), fl = /* @__PURE__ */ C('<div class="cm-image-preview-wrap"><div class="cm-image-preview"><img>'), hl = /* @__PURE__ */ C('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26672" width="200" height="200"><path d="M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z" p-id="26673" fill="#ffffff">'), ml = /* @__PURE__ */ C('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8825" width="200" height="200"><path d="M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z" p-id="8826" fill="#ffffff"></path><path d="M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z" p-id="8827" fill="#ffffff">');
async function gl(e, t = "unnamed") {
  try {
    const l = await (await fetch(e)).blob();
    if (!l)
      return Promise.reject();
    const i = URL.createObjectURL(l), r = document.createElement("a");
    return r.setAttribute("href", i), r.setAttribute("download", t), r.click(), URL.revokeObjectURL(i), Promise.resolve();
  } catch (n) {
    return Promise.reject(n);
  }
}
function Xn(e) {
  const [t, n] = he(e, "visible", !1), l = Ae(), [i, r] = re({
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
  }), c = e.maskClosable ?? !0, a = e.infinite ?? !0, d = e.failInfo ?? "失败", s = (T) => {
    T.preventDefault && T.preventDefault(), T.stopPropagation && T.stopPropagation(), c && M(T);
  };
  K(() => {
    t() && (r("currentIndex", e.initIndex || 0), k(), r("original", !1));
  }), K(() => {
    i.currentIndex, r("status", "loading");
  });
  const o = (T) => {
    T.preventDefault && T.preventDefault(), T.stopPropagation && T.stopPropagation();
    const {
      pageX: O,
      pageY: N,
      which: I
    } = T;
    I === 1 && (r("startX", O), r("startY", N), r("transition", !1), document.addEventListener("mousemove", h), document.addEventListener("mouseup", m));
  }, h = (T) => {
    T.stopPropagation();
    const {
      pageX: O,
      pageY: N
    } = T, I = i.translate.x + (O - i.startX), U = i.translate.y + (N - i.startY);
    r("translate", "x", I), r("translate", "y", U), r("startX", O), r("startY", N);
  }, m = () => {
    r("transition", !0), document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", m);
  }, $ = (T) => {
    if (!t())
      return;
    const {
      keyCode: O
    } = T;
    O === 37 && w(!1), O === 39 && w(!0), O === 38 && S(T, "zoomIn"), O === 40 && S(T, "zoomOut"), O === 32 && (T.preventDefault && T.preventDefault(), r("original", !i.original));
  }, b = (T) => {
    if (!t())
      return;
    const {
      keyCode: O
    } = T;
    O === 27 && M(T);
  }, f = (T) => {
    if (t())
      return T.preventDefault && T.preventDefault(), T.stopPropagation && T.stopPropagation(), T.stopImmediatePropagation && T.stopImmediatePropagation(), S(T, T.deltaY < 0 ? "zoomIn" : "zoomOut"), !1;
  };
  ce(() => {
    document.addEventListener("wheel", f, {
      passive: !1
    }), document.addEventListener("keydown", $), document.addEventListener("keyup", b);
  }), le(() => {
    document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", m), document.removeEventListener("wheel", f), document.removeEventListener("keydown", $), document.removeEventListener("keyup", b);
  });
  const _ = () => {
    r("status", "loaded");
  }, v = () => {
    r("status", "failed");
  }, S = (T, O) => {
    T.stopPropagation && T.stopPropagation(), O === "zoomIn" && i.scale < 6 && r("scale", i.scale + 0.25), O === "zoomOut" && i.scale > 0.25 && r("scale", i.scale - 0.25), O === "rotateLeft" && r("degree", i.degree - 90), O === "rotateRight" && r("degree", i.degree + 90), O === "original" && (r("original", !i.original), r("transition", !1), k(), setTimeout(() => {
      r("transition", !0);
    }, 0)), O === "download" && (r("downloading", !0), gl(e.previewList[i.currentIndex]).then(() => {
      r("downloading", !1);
    }).catch(() => {
      r("downloading", !1);
    }));
  }, k = () => {
    r("scale", 1), r("degree", 0), r("translate", "x", 0), r("translate", "y", 0);
  }, w = (T) => {
    T ? i.currentIndex + 1 === e.previewList.length ? a && (k(), r("currentIndex", 0)) : (k(), r("currentIndex", i.currentIndex + 1)) : i.currentIndex === 0 ? a && (k(), r("currentIndex", e.previewList.length - 1)) : (k(), r("currentIndex", i.currentIndex - 1)), e.onSwitch && e.onSwitch(i.currentIndex);
  }, M = (T) => {
    n(!1), T.stopPropagation && T.stopPropagation(), e.onClose && e.onClose();
  }, A = () => ({
    "cm-image-preview-image": !0,
    "cm-image-preview-grabbing": !i.transition,
    "cm-image-preview-hidden": i.status === "failed",
    "cm-image-preview-transition": i.transition,
    "cm-image-preview-limit": !i.original
  }), L = () => {
    let T = i.translate.x / i.scale, O = i.translate.y / i.scale;
    const N = i.degree % 360;
    return [90, -270].includes(N) && ([T, O] = [O, -T]), [180, -180].includes(N) && ([T, O] = [-T, -O]), [270, -90].includes(N) && ([T, O] = [-O, T]), {
      transform: `
                scale(${i.scale})
                rotate(${i.degree}deg)
                translate(${T}px, ${O}px)
            `
    };
  }, y = () => a ? !1 : i.currentIndex === 0, x = () => {
    const T = e.previewList.length;
    return a ? !1 : i.currentIndex >= T - 1;
  }, E = () => ({
    "cm-image-preview-arrow-left": !0,
    "cm-image-preview-arrow-disabled": y()
  }), F = () => ({
    "cm-image-preview-arrow-right": !0,
    "cm-image-preview-arrow-disabled": x()
  }), R = () => e.previewList[i.currentIndex], D = (T) => {
    T.stopPropagation && T.stopPropagation(), T.preventDefault && T.preventDefault();
  }, z = "cm-image-preview-portal";
  return u(wt, {
    get mount() {
      return Pe(z, z);
    },
    get children() {
      return u(V, {
        get when() {
          return t();
        },
        get children() {
          return [(() => {
            const T = rl();
            return l - 1 != null ? T.style.setProperty("z-index", l - 1) : T.style.removeProperty("z-index"), T;
          })(), (() => {
            const T = fl(), O = T.firstChild, N = O.firstChild;
            return l != null ? T.style.setProperty("z-index", l) : T.style.removeProperty("z-index"), O.$$click = s, g(O, u(V, {
              get when() {
                return i.status === "loading";
              },
              get children() {
                return u(jn, {
                  class: "cm-image-preview-loading"
                });
              }
            }), N), g(O, u(V, {
              get when() {
                return i.status === "failed";
              },
              get children() {
                const I = ll();
                return g(I, d), I;
              }
            }), N), N.$$click = D, N.addEventListener("error", v), N.addEventListener("load", _), N.$$mousedown = o, g(O, u(qe, {
              dir: "h",
              class: "cm-image-preview-operations",
              size: 0,
              get children() {
                return [(() => {
                  const I = cl(), U = I.firstChild;
                  return U.$$click = (H) => S(H, "zoomIn"), I;
                })(), (() => {
                  const I = al(), U = I.firstChild;
                  return U.$$click = (H) => S(H, "zoomOut"), I;
                })(), (() => {
                  const I = on();
                  return g(I, u(V, {
                    get when() {
                      return i.original;
                    },
                    get fallback() {
                      return (() => {
                        const U = hl();
                        return U.$$click = (H) => S(H, "original"), U;
                      })();
                    },
                    get children() {
                      const U = sl();
                      return U.$$click = (H) => S(H, "original"), U;
                    }
                  })), I;
                })(), (() => {
                  const I = ol(), U = I.firstChild;
                  return U.$$click = (H) => S(H, "rotateLeft"), I;
                })(), (() => {
                  const I = dl(), U = I.firstChild;
                  return U.$$click = (H) => S(H, "rotateRight"), I;
                })(), (() => {
                  const I = on();
                  return g(I, u(V, {
                    get when() {
                      return i.downloading;
                    },
                    get fallback() {
                      return (() => {
                        const U = ml();
                        return U.$$click = (H) => S(H, "download"), U;
                      })();
                    },
                    get children() {
                      return ul();
                    }
                  })), I;
                })()];
              }
            }), null), g(O, u(V, {
              get when() {
                return e.previewList.length > 1;
              },
              get children() {
                return [u(W, {
                  get classList() {
                    return E();
                  },
                  name: "chevron-left",
                  size: 26,
                  onClick: (I) => {
                    D(I), w(!1);
                  }
                }), u(W, {
                  get classList() {
                    return F();
                  },
                  name: "chevron-right",
                  size: 26,
                  onClick: (I) => {
                    D(I), w(!0);
                  }
                })];
              }
            }), null), g(O, u(W, {
              class: "cm-image-preview-arrow-close",
              name: "x",
              onClick: M,
              size: 26
            }), null), P((I) => {
              const U = A(), H = L(), oe = R();
              return I._v$ = B(N, U, I._v$), I._v$2 = Y(N, H, I._v$2), oe !== I._v$3 && Z(N, "src", I._v$3 = oe), I;
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
const vl = /* @__PURE__ */ C('<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18708" width="24" height="24"><path d="M948.622222 173.511111L506.311111 113.777778l-118.044444 133.688889 135.111111 251.733333L412.444444 750.933333l9.955556 99.555556-22.755556-99.555556 12.8-228.977777-193.422222-263.111112L307.2 113.777778 66.844444 180.622222c-25.6 7.111111-42.666667 32.711111-38.4 59.733334l95.288889 664.177777c4.266667 29.866667 31.288889 49.777778 61.155556 45.511111l237.511111-35.555555L851.911111 952.888889c28.444444 2.844444 54.044444-18.488889 58.311111-46.933333l85.333334-672.711112c4.266667-29.866667-17.066667-56.888889-46.933334-59.733333z m-164.977778 93.866667c35.555556 0 65.422222 29.866667 65.422223 65.422222S819.2 398.222222 783.644444 398.222222s-65.422222-29.866667-65.422222-65.422222 29.866667-65.422222 65.422222-65.422222z m88.177778 526.222222c-1.422222 11.377778-11.377778 21.333333-24.177778 19.911111l-304.355555-27.022222c-11.377778-1.422222-21.333333-11.377778-19.911111-24.177778 1.422222-11.377778 11.377778-21.333333 24.177778-19.911111l304.355555 27.022222c11.377778 1.422222 19.911111 11.377778 19.911111 24.177778z" fill="#BCC3C9" p-id="18709">'), $l = /* @__PURE__ */ C('<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5338" width="24" height="24"><path d="M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z" fill="#FFFFFF" p-id="5339"></path><path d="M640 396.8m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill="#82D2F7" p-id="5340"></path><path d="M479.6416 472.8832l88.448 176.896A64 64 0 0 1 510.848 742.4H333.952a64 64 0 0 1-57.2416-92.6208l88.448-176.896a64 64 0 0 1 114.4832 0z" fill="#046EA7" p-id="5341"></path><path d="M674.3424 555.0976l65.8688 131.7248A38.4 38.4 0 0 1 705.8688 742.4H574.1312a38.4 38.4 0 0 1-34.3424-55.5776l65.8688-131.7248a38.4 38.4 0 0 1 68.6848 0z" fill="#FCCF0A" p-id="5342">'), _l = /* @__PURE__ */ C('<div class="cm-image-placeholder">'), yl = /* @__PURE__ */ C('<div class="cm-image-error"><span>'), wl = /* @__PURE__ */ C('<div class="cm-image-mark"><span>'), bl = /* @__PURE__ */ C("<div><img>"), xl = /* @__PURE__ */ C('<div class="cm-image">');
function At(e) {
  const [t, n] = j(!1), [l, i] = j(!1), [r, c] = j(!1), [a, d] = j(!1), s = vl(), o = $l(), h = e.failInfo ?? s, m = e.previewTip ?? "预览", $ = e.fit ?? "", b = e.placeholder ?? o;
  let f, _ = null;
  const v = () => ({
    "cm-image-inner": !0,
    "cm-image-cursor": e.preview
  }), S = () => ({
    "cm-image-img": !0,
    "cm-image-img-hidden": t() || l()
  }), k = () => {
    d(!0);
  }, w = () => ["fill", "contain", "cover", "none", "scale-down"].includes($) ? `object-fit:${$};` : "", M = () => ({
    width: typeof e.width == "number" ? `${e.width}px` : e.width,
    height: typeof e.height == "number" ? `${e.height}px` : e.height
  }), A = () => {
    Oe(() => {
      i(!1), n(!1);
    }), e.onLoad && e.onLoad();
  }, L = () => {
    Oe(() => {
      i(!1), n(!0), c(!1);
    }), e.onError && e.onError();
  }, y = () => {
    Oe(() => {
      i(!0), n(!1), c(!0);
    });
  };
  K(() => {
    e.src, y();
  });
  let x;
  const E = () => {
    x = new IntersectionObserver(R, {
      root: _,
      rootMargin: "0px",
      threshold: 0
    }), x.observe(f);
  }, F = () => {
    x && x.disconnect();
  }, R = (O) => {
    for (const N of O)
      N.isIntersecting && (F(), y());
  }, D = () => {
    const {
      scrollContainer: O
    } = e;
    typeof O == "object" && O instanceof HTMLElement ? _ = O : O && typeof O == "string" && (_ = document.querySelector(O)), E();
  }, z = () => {
    e.lazy ? D() : y();
  }, T = () => {
    e.onClose && e.onClose();
  };
  return ce(() => {
    z();
  }), le(() => {
    F();
  }), (() => {
    const O = xl(), N = f;
    return typeof N == "function" ? X(N, O) : f = O, g(O, u(V, {
      get when() {
        return l();
      },
      get children() {
        const I = _l();
        return g(I, b), I;
      }
    }), null), g(O, u(V, {
      get when() {
        return t();
      },
      get children() {
        const I = yl(), U = I.firstChild;
        return g(U, h), I;
      }
    }), null), g(O, u(V, {
      get when() {
        return r();
      },
      get children() {
        const I = bl(), U = I.firstChild;
        return I.$$click = k, U.addEventListener("error", L), U.addEventListener("load", A), g(I, u(V, {
          get when() {
            return e.preview && m;
          },
          get children() {
            const H = wl(), oe = H.firstChild;
            return g(oe, m), H;
          }
        }), null), P((H) => {
          const oe = v(), ye = S(), Be = w(), We = e.alt, Ke = e.src, Jt = e.lazy ? "lazy" : "eager", Qt = e.referrerPolicy;
          return H._v$ = B(I, oe, H._v$), H._v$2 = B(U, ye, H._v$2), H._v$3 = Y(U, Be, H._v$3), We !== H._v$4 && Z(U, "alt", H._v$4 = We), Ke !== H._v$5 && Z(U, "src", H._v$5 = Ke), Jt !== H._v$6 && Z(U, "loading", H._v$6 = Jt), Qt !== H._v$7 && Z(U, "referrerpolicy", H._v$7 = Qt), H;
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
    }), null), g(O, u(V, {
      get when() {
        return e.preview;
      },
      get children() {
        return u(Xn, {
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
          visible: [a, d],
          get onSwitch() {
            return e.onSwitch;
          }
        });
      }
    }), null), P((I) => Y(O, M(), I)), O;
  })();
}
J(["click"]);
const Cl = {
  404: "https://cqb325.gitee.io/cui-solid-doc/file/404.svg",
  403: "https://cqb325.gitee.io/cui-solid-doc/file/403.svg",
  500: "https://cqb325.gitee.io/cui-solid-doc/file/500.svg",
  empty: "https://cqb325.gitee.io/cui-solid-doc/file/empty.svg",
  fail: "https://cqb325.gitee.io/cui-solid-doc/file/fail.svg",
  deny: "https://cqb325.gitee.io/cui-solid-doc/file/deny.svg"
};
function kl(e) {
  return e ? Cl[e] : null;
}
const Ll = /* @__PURE__ */ C("<span>"), Sl = /* @__PURE__ */ C("<mark>"), El = /* @__PURE__ */ C("<code>"), Ml = /* @__PURE__ */ C("<a><span>");
function Se(e) {
  const [t, n] = ae(e, ["classList", "class", "children", "type", "disabled", "link", "icon", "mark", "code", "underline", "deleted", "strong", "size", "onCopy"]), l = () => t.size || "normal", i = () => q(e, "cm-text", {
    [`cm-text-${t.type}`]: t.type,
    "cm-text-disabled": t.disabled,
    "cm-text-underline": t.underline,
    "cm-text-link": t.link,
    "cm-text-deleted": t.deleted,
    "cm-text-strong": t.strong,
    [`cm-text-${l()}`]: l()
  });
  return (() => {
    const r = Ll();
    return Ce(r, ne({
      get classList() {
        return i();
      }
    }, n), !1, !0), g(r, (() => {
      const c = G(() => !!t.mark);
      return () => c() ? (() => {
        const a = Sl();
        return g(a, () => t.children), a;
      })() : (() => {
        const a = G(() => !!t.code);
        return () => a() ? (() => {
          const d = El();
          return g(d, () => t.children), d;
        })() : (() => {
          const d = G(() => !!t.link);
          return () => d() ? (() => {
            const s = Ml(), o = s.firstChild;
            return g(s, () => t.icon, o), g(o, () => t.children), P(() => Z(s, "href", t.link)), s;
          })() : t.children;
        })();
      })();
    })()), r;
  })();
}
const Dl = /* @__PURE__ */ C('<div class="cm-exception-desc">'), Tl = /* @__PURE__ */ C('<div class="cm-exception-action">'), Rl = /* @__PURE__ */ C('<div><div class="cm-exception-img"></div><div class="cm-exception-info">');
function If(e) {
  const t = () => q(e, "cm-exception", {
    [`cm-exception-${e.type}`]: !!e.type
  }), n = e.showDesc ?? !0, l = e.showAction ?? !0;
  return (() => {
    const i = Rl(), r = i.firstChild, c = r.nextSibling;
    return g(r, u(V, {
      get when() {
        return e.typeImage;
      },
      get fallback() {
        return u(At, {
          get src() {
            return kl(e.type);
          }
        });
      },
      get children() {
        return u(At, {
          get src() {
            return e.typeImage;
          }
        });
      }
    })), g(c, u(V, {
      when: n,
      get children() {
        const a = Dl();
        return g(a, u(Le, {
          get children() {
            return [u(Q, {
              get when() {
                return e.type === "403";
              },
              get children() {
                return u(Se, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你无权访问该页面";
                  }
                });
              }
            }), u(Q, {
              get when() {
                return e.type === "404";
              },
              get children() {
                return u(Se, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你访问的页面不存在";
                  }
                });
              }
            }), u(Q, {
              get when() {
                return e.type === "500";
              },
              get children() {
                return u(Se, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，服务器出错了";
                  }
                });
              }
            }), u(Q, {
              get when() {
                return e.type === "empty";
              },
              get children() {
                return u(Se, {
                  size: "large",
                  get children() {
                    return e.desc ?? "暂无数据";
                  }
                });
              }
            }), u(Q, {
              get when() {
                return e.type === "fail";
              },
              get children() {
                return u(Se, {
                  size: "large",
                  get children() {
                    return e.desc ?? "授权失败";
                  }
                });
              }
            }), u(Q, {
              get when() {
                return e.type === "deny";
              },
              get children() {
                return u(Se, {
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
    }), null), g(c, u(V, {
      when: l,
      get children() {
        const a = Tl();
        return g(a, u(ke, {
          get link() {
            return e.link;
          },
          type: "primary",
          children: "返回首页"
        })), a;
      }
    }), null), P((a) => B(i, t(), a)), i;
  })();
}
const zl = /* @__PURE__ */ C('<form><button type="submit">'), Kt = me();
function Pl(e) {
  const t = e.errorTransfer ?? !1, n = e.errorAlign ?? "right", l = () => q(e, "cm-form", {
    "cm-form-inline": e.inline
  }), [i, r] = ae(e, ["labelWidth", "form", "inline", "classList", "class", "onChange", "children", "onBeforeSubmit"]), c = (s, o) => {
    i.form && (i.form[s] = o), i.onChange && i.onChange(s, o);
  }, a = {
    labelWidth: i.labelWidth,
    inline: i.inline,
    form: i.form,
    errorTransfer: t,
    errorAlign: n,
    onChange: c
  }, d = (s) => (s.preventDefault(), i.onBeforeSubmit ? i.onBeforeSubmit() : !1);
  return u(Kt.Provider, {
    value: a,
    get children() {
      const s = zl(), o = s.firstChild;
      return s.addEventListener("submit", d), Ce(s, ne({
        get classList() {
          return l();
        }
      }, r, {
        get autocomplete() {
          return e.autocomplete;
        }
      }), !1, !0), o.style.setProperty("display", "none"), g(s, () => i.children, null), s;
    }
  });
}
const Al = /* @__PURE__ */ C("<li>");
function Il(e) {
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
      const l = Al();
      return l.$$click = () => e.onClick && e.onClick(n, e.data), g(l, (() => {
        const i = G(() => !!e.renderOption);
        return () => i() ? e.renderOption(e.data) : e.data[e.textField];
      })()), P((i) => {
        const r = t(), c = e.style;
        return i._v$ = B(l, r, i._v$), i._v$2 = Y(l, c, i._v$2), i;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), l;
    }
  });
}
J(["click"]);
const Fl = /* @__PURE__ */ C('<div><div class="cm-tag-content"><div class="cm-tag-text">'), Ol = /* @__PURE__ */ C('<span class="cm-tag-badge"><span class="cm-tag-badge-text">');
function ot(e) {
  const t = () => e.value || "", n = () => q(e, "cm-tag", {
    [`cm-tag-${e.theme}`]: e.theme,
    "cm-tag-has-badge": t() !== "",
    "cm-tag-border": e.border,
    "cm-tag-circle": !t() && e.circle,
    [`cm-tag-${e.size}`]: e.size,
    "cm-tag-has-avatar": e.avatar
  }), [l, i] = he(e, "visible", !0), r = (a) => {
    e.onBeforeClose ? e.onBeforeClose(a) && c(a) : c(a);
  }, c = (a) => {
    i(!1), e.onClose && e.onClose(a);
  };
  return u(V, {
    get when() {
      return l();
    },
    fallback: null,
    get children() {
      const a = Fl(), d = a.firstChild, s = d.firstChild;
      return g(a, () => e.avatar, d), g(s, () => e.children), g(d, (() => {
        const o = G(() => !!e.closable);
        return () => o() ? u(W, {
          name: "x",
          class: "cm-tag-close",
          size: 12,
          onClick: r
        }) : null;
      })(), null), g(a, (() => {
        const o = G(() => t() !== "");
        return () => o() ? (() => {
          const h = Ol(), m = h.firstChild;
          return g(m, t), h;
        })() : null;
      })(), null), P((o) => {
        const h = n(), m = e.style;
        return o._v$ = B(a, h, o._v$), o._v$2 = Y(a, m, o._v$2), o;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), a;
    }
  });
}
const Nl = /* @__PURE__ */ C("<span>"), Bl = /* @__PURE__ */ C('<div><div class="cm-popover-body">'), Vl = /* @__PURE__ */ C('<svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-popover-icon-arrow"><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1"></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)">');
function pe(e) {
  const [t, n] = he(e, "visible", !1), [l, i] = j(t()), [r, c] = j($e()), [a, d] = j(!1);
  let s, o, h;
  const m = () => e.align || "right", $ = () => e.confirm ? "click" : e.trigger || "hover", b = Ae();
  let f = null;
  const _ = e.hideDelay || 200, v = () => {
    f && (clearTimeout(f), f = null);
  }, S = () => {
    e.disabled || $() === "hover" && (v(), n(!0), e.onOpen && e.onOpen(!0));
  }, k = () => {
    e.disabled || $() === "hover" && (f = setTimeout(() => {
      n(!1), e.onOpen && e.onOpen(!1);
    }, _));
  }, w = (D) => {
    if (!e.disabled && (D.preventDefault(), D.stopPropagation(), $() === "click")) {
      const z = t();
      n(!z), e.onOpen && e.onOpen(!z);
    }
  }, M = () => q(e, "cm-popover-inner", {
    // 'cm-popover-inner-show': visible(),
    "cm-popover-with-arrow": e.arrow,
    "cm-popover-confirm": e.confirm,
    [`cm-popover-${e.theme}`]: e.theme
  }), A = Wt({
    el: () => h,
    startClass: "cm-popover-inner-visible",
    activeClass: "cm-popover-inner-show",
    onLeave: () => {
      i(!1);
    },
    onEnter: () => {
      i(!0);
    }
  });
  nt(() => {
    t() ? A.enter() : A.leave();
  });
  const L = () => {
    if (l(), r(), s && s.nextElementSibling) {
      const D = Un(m(), s.nextElementSibling);
      return D.top = D.top + document.documentElement.scrollTop + "px", D.left = D.left + document.documentElement.scrollLeft + "px", D["z-index"] = b, Object.assign(D, e.style || {}), D;
    }
  }, y = async () => {
    if (e.onOk) {
      d(!0);
      const D = await e.onOk();
      d(!1), (D === void 0 || D === !0) && (n(!1), e.onOpen && e.onOpen(!1));
    }
  }, x = () => {
    e.onCancel && e.onCancel(), n(!1), e.onOpen && e.onOpen(!1);
  };
  ce(() => {
    s.nextElementSibling && ($() === "hover" && (s.nextElementSibling.addEventListener("mouseenter", S, !1), s.nextElementSibling.addEventListener("mouseleave", k, !1)), $() === "click" && (s.nextElementSibling.addEventListener("click", w, !1), o = zt([h, s.nextElementSibling], () => {
      n(!1);
    })));
  }), le(() => {
    s.nextElementSibling && ($() === "hover" && (s.nextElementSibling.removeEventListener("mouseenter", S), s.nextElementSibling.removeEventListener("mouseleave", k)), $() === "click" && s.nextElementSibling.removeEventListener("click", w)), o && o();
  });
  const E = "cm-popover-portal";
  e.ref && e.ref({
    updatePosition() {
      c($e());
    }
  });
  const F = e.okText ?? "确 定", R = e.cancleText ?? "取 消";
  return [(() => {
    const D = Nl(), z = s;
    return typeof z == "function" ? X(z, D) : s = D, D.style.setProperty("display", "none"), D;
  })(), G(() => e.children), u(wt, {
    get mount() {
      return Pe(E, E);
    },
    get children() {
      const D = Bl(), z = D.firstChild, T = h;
      return typeof T == "function" ? X(T, D) : h = D, g(z, () => e.content), g(D, (() => {
        const O = G(() => !!e.confirm);
        return () => O() ? u(qe, {
          class: "cm-popover-tools",
          justify: "end",
          get children() {
            return [u(ke, {
              type: "default",
              size: "small",
              onClick: x,
              children: R
            }), u(ke, {
              type: "primary",
              size: "small",
              onClick: y,
              get loading() {
                return a();
              },
              children: F
            })];
          }
        }) : null;
      })(), null), g(D, (() => {
        const O = G(() => !!e.arrow);
        return () => O() ? Vl() : null;
      })(), null), P((O) => {
        const N = L(), I = m(), U = M();
        return O._v$ = Y(D, N, O._v$), I !== O._v$2 && Z(D, "x-placement", O._v$2 = I), O._v$3 = B(D, U, O._v$3), O;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), D;
    }
  })];
}
const dn = /* @__PURE__ */ C("<span>+"), Yl = /* @__PURE__ */ C("<div>"), ql = /* @__PURE__ */ C('<div class="cm-tag-group-more-wrap">');
function Hl(e) {
  const t = () => q(e, "cm-tag-group", {}), [n, l] = re({
    list: [],
    show: [],
    hide: []
  }), i = (r, c) => {
    const a = n.list.filter((d) => d.id !== r.id);
    l("list", a), e.onClose && e.onClose(r, c);
  };
  return K(() => {
    l("list", e.data);
  }), K(() => {
    const r = n.list, c = e.max ?? r.length, a = [], d = [];
    xe(() => {
      for (let o = 0; o < c; o++)
        r[o] && a.push(r[o]);
      const s = e.data.length;
      for (let o = c; o < s; o++)
        d.push(r[o]);
      l("show", a), l("hide", d);
    });
  }), (() => {
    const r = Yl();
    return g(r, u(p, {
      get each() {
        return n.show;
      },
      children: (c) => u(ot, {
        get closable() {
          return e.closable;
        },
        get size() {
          return e.size;
        },
        get theme() {
          return c.theme;
        },
        get avatar() {
          return c.avatar;
        },
        onClose: (a) => {
          i(c, a);
        },
        get children() {
          return c.title;
        }
      })
    }), null), g(r, u(V, {
      get when() {
        return e.max && n.list.length > e.max;
      },
      get children() {
        return u(V, {
          get when() {
            return e.showMore;
          },
          get fallback() {
            return u(ot, {
              class: "cm-tag-more",
              get children() {
                return [dn(), G(() => n.hide.length)];
              }
            });
          },
          get children() {
            return u(pe, {
              align: "top",
              arrow: !0,
              theme: "light",
              get content() {
                return (() => {
                  const c = ql();
                  return g(c, u(p, {
                    get each() {
                      return n.hide;
                    },
                    children: (a, d) => u(ot, {
                      get size() {
                        return e.size;
                      },
                      get theme() {
                        return a.theme;
                      },
                      get avatar() {
                        return a.avatar;
                      },
                      get children() {
                        return a.title;
                      }
                    })
                  })), c;
                })();
              },
              get children() {
                return u(ot, {
                  class: "cm-tag-more",
                  get children() {
                    return [dn(), G(() => n.hide.length)];
                  }
                });
              }
            });
          }
        });
      }
    }), null), P((c) => {
      const a = t(), d = e.style;
      return c._v$ = B(r, a, c._v$), c._v$2 = Y(r, d, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
function Ue() {
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
function Ie() {
  return Ie = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
  }, Ie.apply(this, arguments);
}
function Ul(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, et(e, t);
}
function It(e) {
  return It = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, It(e);
}
function et(e, t) {
  return et = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, i) {
    return l.__proto__ = i, l;
  }, et(e, t);
}
function jl() {
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
function mt(e, t, n) {
  return jl() ? mt = Reflect.construct.bind() : mt = function(i, r, c) {
    var a = [null];
    a.push.apply(a, r);
    var d = Function.bind.apply(i, a), s = new d();
    return c && et(s, c.prototype), s;
  }, mt.apply(null, arguments);
}
function Xl(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ft(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ft = function(l) {
    if (l === null || !Xl(l))
      return l;
    if (typeof l != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(l))
        return t.get(l);
      t.set(l, i);
    }
    function i() {
      return mt(l, arguments, It(this).constructor);
    }
    return i.prototype = Object.create(l.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), et(i, l);
  }, Ft(e);
}
var Wl = /%[sdj%]/g, Wn = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Wn = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(l) {
    return typeof l == "string";
  }) && console.warn(t, n);
});
function Ot(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var l = n.field;
    t[l] = t[l] || [], t[l].push(n);
  }), t;
}
function be(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  var i = 0, r = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var c = e.replace(Wl, function(a) {
      if (a === "%%")
        return "%";
      if (i >= r)
        return a;
      switch (a) {
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
          return a;
      }
    });
    return c;
  }
  return e;
}
function Kl(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function se(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Kl(t) && typeof e == "string" && !e);
}
function Gl(e, t, n) {
  var l = [], i = 0, r = e.length;
  function c(a) {
    l.push.apply(l, a || []), i++, i === r && n(l);
  }
  e.forEach(function(a) {
    t(a, c);
  });
}
function un(e, t, n) {
  var l = 0, i = e.length;
  function r(c) {
    if (c && c.length) {
      n(c);
      return;
    }
    var a = l;
    l = l + 1, a < i ? t(e[a], r) : n([]);
  }
  r([]);
}
function Zl(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var fn = /* @__PURE__ */ function(e) {
  Ul(t, e);
  function t(n, l) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = n, i.fields = l, i;
  }
  return t;
}(/* @__PURE__ */ Ft(Error));
function Jl(e, t, n, l, i) {
  if (t.first) {
    var r = new Promise(function(m, $) {
      var b = function(v) {
        return l(v), v.length ? $(new fn(v, Ot(v))) : m(i);
      }, f = Zl(e);
      un(f, n, b);
    });
    return r.catch(function(m) {
      return m;
    }), r;
  }
  var c = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], a = Object.keys(e), d = a.length, s = 0, o = [], h = new Promise(function(m, $) {
    var b = function(_) {
      if (o.push.apply(o, _), s++, s === d)
        return l(o), o.length ? $(new fn(o, Ot(o))) : m(i);
    };
    a.length || (l(o), m(i)), a.forEach(function(f) {
      var _ = e[f];
      c.indexOf(f) !== -1 ? un(_, n, b) : Gl(_, n, b);
    });
  });
  return h.catch(function(m) {
    return m;
  }), h;
}
function Ql(e) {
  return !!(e && e.message !== void 0);
}
function pl(e, t) {
  for (var n = e, l = 0; l < t.length; l++) {
    if (n == null)
      return n;
    n = n[t[l]];
  }
  return n;
}
function hn(e, t) {
  return function(n) {
    var l;
    return e.fullFields ? l = pl(t, e.fullFields) : l = t[n.field || e.fullField], Ql(n) ? (n.field = n.field || e.fullField, n.fieldValue = l, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: l,
      field: n.field || e.fullField
    };
  };
}
function mn(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var l = t[n];
        typeof l == "object" && typeof e[n] == "object" ? e[n] = Ie({}, e[n], l) : e[n] = l;
      }
  }
  return e;
}
var Kn = function(t, n, l, i, r, c) {
  t.required && (!l.hasOwnProperty(t.field) || se(n, c || t.type)) && i.push(be(r.messages.required, t.fullField));
}, ec = function(t, n, l, i, r) {
  (/^\s+$/.test(n) || n === "") && i.push(be(r.messages.whitespace, t.fullField));
}, dt, tc = function() {
  if (dt)
    return dt;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", l = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + l + ":){7}(?:" + l + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + l + ":){6}(?:" + n + "|:" + l + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + l + ":){5}(?::" + n + "|(?::" + l + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + l + ":){4}(?:(?::" + l + "){0,1}:" + n + "|(?::" + l + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + l + ":){3}(?:(?::" + l + "){0,2}:" + n + "|(?::" + l + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + l + ":){2}(?:(?::" + l + "){0,3}:" + n + "|(?::" + l + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + l + ":){1}(?:(?::" + l + "){0,4}:" + n + "|(?::" + l + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + l + "){0,5}:" + n + "|(?::" + l + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), r = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), c = new RegExp("^" + n + "$"), a = new RegExp("^" + i + "$"), d = function(w) {
    return w && w.exact ? r : new RegExp("(?:" + t(w) + n + t(w) + ")|(?:" + t(w) + i + t(w) + ")", "g");
  };
  d.v4 = function(k) {
    return k && k.exact ? c : new RegExp("" + t(k) + n + t(k), "g");
  }, d.v6 = function(k) {
    return k && k.exact ? a : new RegExp("" + t(k) + i + t(k), "g");
  };
  var s = "(?:(?:[a-z]+:)?//)", o = "(?:\\S+(?::\\S*)?@)?", h = d.v4().source, m = d.v6().source, $ = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", b = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", _ = "(?::\\d{2,5})?", v = '(?:[/?#][^\\s"]*)?', S = "(?:" + s + "|www\\.)" + o + "(?:localhost|" + h + "|" + m + "|" + $ + b + f + ")" + _ + v;
  return dt = new RegExp("(?:^" + S + "$)", "i"), dt;
}, gn = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Ge = {
  integer: function(t) {
    return Ge.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ge.number(t) && !Ge.integer(t);
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
    return typeof t == "object" && !Ge.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(gn.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(tc());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(gn.hex);
  }
}, nc = function(t, n, l, i, r) {
  if (t.required && n === void 0) {
    Kn(t, n, l, i, r);
    return;
  }
  var c = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], a = t.type;
  c.indexOf(a) > -1 ? Ge[a](n) || i.push(be(r.messages.types[a], t.fullField, t.type)) : a && typeof n !== t.type && i.push(be(r.messages.types[a], t.fullField, t.type));
}, ic = function(t, n, l, i, r) {
  var c = typeof t.len == "number", a = typeof t.min == "number", d = typeof t.max == "number", s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, o = n, h = null, m = typeof n == "number", $ = typeof n == "string", b = Array.isArray(n);
  if (m ? h = "number" : $ ? h = "string" : b && (h = "array"), !h)
    return !1;
  b && (o = n.length), $ && (o = n.replace(s, "_").length), c ? o !== t.len && i.push(be(r.messages[h].len, t.fullField, t.len)) : a && !d && o < t.min ? i.push(be(r.messages[h].min, t.fullField, t.min)) : d && !a && o > t.max ? i.push(be(r.messages[h].max, t.fullField, t.max)) : a && d && (o < t.min || o > t.max) && i.push(be(r.messages[h].range, t.fullField, t.min, t.max));
}, Ve = "enum", rc = function(t, n, l, i, r) {
  t[Ve] = Array.isArray(t[Ve]) ? t[Ve] : [], t[Ve].indexOf(n) === -1 && i.push(be(r.messages[Ve], t.fullField, t[Ve].join(", ")));
}, lc = function(t, n, l, i, r) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || i.push(be(r.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var c = new RegExp(t.pattern);
      c.test(n) || i.push(be(r.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, ee = {
  required: Kn,
  whitespace: ec,
  type: nc,
  range: ic,
  enum: rc,
  pattern: lc
}, cc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n, "string") && !t.required)
      return l();
    ee.required(t, n, i, c, r, "string"), se(n, "string") || (ee.type(t, n, i, c, r), ee.range(t, n, i, c, r), ee.pattern(t, n, i, c, r), t.whitespace === !0 && ee.whitespace(t, n, i, c, r));
  }
  l(c);
}, ac = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), n !== void 0 && ee.type(t, n, i, c, r);
  }
  l(c);
}, sc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (n === "" && (n = void 0), se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), n !== void 0 && (ee.type(t, n, i, c, r), ee.range(t, n, i, c, r));
  }
  l(c);
}, oc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), n !== void 0 && ee.type(t, n, i, c, r);
  }
  l(c);
}, dc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), se(n) || ee.type(t, n, i, c, r);
  }
  l(c);
}, uc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), n !== void 0 && (ee.type(t, n, i, c, r), ee.range(t, n, i, c, r));
  }
  l(c);
}, fc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), n !== void 0 && (ee.type(t, n, i, c, r), ee.range(t, n, i, c, r));
  }
  l(c);
}, hc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (n == null && !t.required)
      return l();
    ee.required(t, n, i, c, r, "array"), n != null && (ee.type(t, n, i, c, r), ee.range(t, n, i, c, r));
  }
  l(c);
}, mc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), n !== void 0 && ee.type(t, n, i, c, r);
  }
  l(c);
}, gc = "enum", vc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r), n !== void 0 && ee[gc](t, n, i, c, r);
  }
  l(c);
}, $c = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n, "string") && !t.required)
      return l();
    ee.required(t, n, i, c, r), se(n, "string") || ee.pattern(t, n, i, c, r);
  }
  l(c);
}, _c = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n, "date") && !t.required)
      return l();
    if (ee.required(t, n, i, c, r), !se(n, "date")) {
      var d;
      n instanceof Date ? d = n : d = new Date(n), ee.type(t, d, i, c, r), d && ee.range(t, d.getTime(), i, c, r);
    }
  }
  l(c);
}, yc = function(t, n, l, i, r) {
  var c = [], a = Array.isArray(n) ? "array" : typeof n;
  ee.required(t, n, i, c, r, a), l(c);
}, Lt = function(t, n, l, i, r) {
  var c = t.type, a = [], d = t.required || !t.required && i.hasOwnProperty(t.field);
  if (d) {
    if (se(n, c) && !t.required)
      return l();
    ee.required(t, n, i, a, r, c), se(n, c) || ee.type(t, n, i, a, r);
  }
  l(a);
}, wc = function(t, n, l, i, r) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (se(n) && !t.required)
      return l();
    ee.required(t, n, i, c, r);
  }
  l(c);
}, Je = {
  string: cc,
  method: ac,
  number: sc,
  boolean: oc,
  regexp: dc,
  integer: uc,
  float: fc,
  array: hc,
  object: mc,
  enum: vc,
  pattern: $c,
  date: _c,
  url: Lt,
  hex: Lt,
  email: Lt,
  required: yc,
  any: wc
};
function Nt() {
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
var Bt = Nt(), it = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = Bt, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(l) {
    var i = this;
    if (!l)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof l != "object" || Array.isArray(l))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(l).forEach(function(r) {
      var c = l[r];
      i.rules[r] = Array.isArray(c) ? c : [c];
    });
  }, t.messages = function(l) {
    return l && (this._messages = mn(Nt(), l)), this._messages;
  }, t.validate = function(l, i, r) {
    var c = this;
    i === void 0 && (i = {}), r === void 0 && (r = function() {
    });
    var a = l, d = i, s = r;
    if (typeof d == "function" && (s = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return s && s(null, a), Promise.resolve(a);
    function o(f) {
      var _ = [], v = {};
      function S(w) {
        if (Array.isArray(w)) {
          var M;
          _ = (M = _).concat.apply(M, w);
        } else
          _.push(w);
      }
      for (var k = 0; k < f.length; k++)
        S(f[k]);
      _.length ? (v = Ot(_), s(_, v)) : s(null, a);
    }
    if (d.messages) {
      var h = this.messages();
      h === Bt && (h = Nt()), mn(h, d.messages), d.messages = h;
    } else
      d.messages = this.messages();
    var m = {}, $ = d.keys || Object.keys(this.rules);
    $.forEach(function(f) {
      var _ = c.rules[f], v = a[f];
      _.forEach(function(S) {
        var k = S;
        typeof k.transform == "function" && (a === l && (a = Ie({}, a)), v = a[f] = k.transform(v)), typeof k == "function" ? k = {
          validator: k
        } : k = Ie({}, k), k.validator = c.getValidationMethod(k), k.validator && (k.field = f, k.fullField = k.fullField || f, k.type = c.getType(k), m[f] = m[f] || [], m[f].push({
          rule: k,
          value: v,
          source: a,
          field: f
        }));
      });
    });
    var b = {};
    return Jl(m, d, function(f, _) {
      var v = f.rule, S = (v.type === "object" || v.type === "array") && (typeof v.fields == "object" || typeof v.defaultField == "object");
      S = S && (v.required || !v.required && f.value), v.field = f.field;
      function k(A, L) {
        return Ie({}, L, {
          fullField: v.fullField + "." + A,
          fullFields: v.fullFields ? [].concat(v.fullFields, [A]) : [A]
        });
      }
      function w(A) {
        A === void 0 && (A = []);
        var L = Array.isArray(A) ? A : [A];
        !d.suppressWarning && L.length && e.warning("async-validator:", L), L.length && v.message !== void 0 && (L = [].concat(v.message));
        var y = L.map(hn(v, a));
        if (d.first && y.length)
          return b[v.field] = 1, _(y);
        if (!S)
          _(y);
        else {
          if (v.required && !f.value)
            return v.message !== void 0 ? y = [].concat(v.message).map(hn(v, a)) : d.error && (y = [d.error(v, be(d.messages.required, v.field))]), _(y);
          var x = {};
          v.defaultField && Object.keys(f.value).map(function(R) {
            x[R] = v.defaultField;
          }), x = Ie({}, x, f.rule.fields);
          var E = {};
          Object.keys(x).forEach(function(R) {
            var D = x[R], z = Array.isArray(D) ? D : [D];
            E[R] = z.map(k.bind(null, R));
          });
          var F = new e(E);
          F.messages(d.messages), f.rule.options && (f.rule.options.messages = d.messages, f.rule.options.error = d.error), F.validate(f.value, f.rule.options || d, function(R) {
            var D = [];
            y && y.length && D.push.apply(D, y), R && R.length && D.push.apply(D, R), _(D.length ? D : null);
          });
        }
      }
      var M;
      if (v.asyncValidator)
        M = v.asyncValidator(v, f.value, w, f.source, d);
      else if (v.validator) {
        try {
          M = v.validator(v, f.value, w, f.source, d);
        } catch (A) {
          console.error?.(A), d.suppressValidatorError || setTimeout(function() {
            throw A;
          }, 0), w(A.message);
        }
        M === !0 ? w() : M === !1 ? w(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || (v.fullField || v.field) + " fails") : M instanceof Array ? w(M) : M instanceof Error && w(M.message);
      }
      M && M.then && M.then(function() {
        return w();
      }, function(A) {
        return w(A);
      });
    }, function(f) {
      o(f);
    }, a);
  }, t.getType = function(l) {
    if (l.type === void 0 && l.pattern instanceof RegExp && (l.type = "pattern"), typeof l.validator != "function" && l.type && !Je.hasOwnProperty(l.type))
      throw new Error(be("Unknown rule type %s", l.type));
    return l.type || "string";
  }, t.getValidationMethod = function(l) {
    if (typeof l.validator == "function")
      return l.validator;
    var i = Object.keys(l), r = i.indexOf("message");
    return r !== -1 && i.splice(r, 1), i.length === 1 && i[0] === "required" ? Je.required : Je[this.getType(l)] || void 0;
  }, e;
}();
it.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Je[t] = n;
};
it.warning = Wn;
it.messages = Bt;
it.validators = Je;
const bc = /* @__PURE__ */ C('<div class="cm-form-item-element">'), xc = /* @__PURE__ */ C('<div><label class="cm-form-label">'), Cc = /* @__PURE__ */ C('<div class="cm-form-item-element"><div class="cm-form-item-error-tip">'), Gn = me();
function rt(e) {
  const [t, n] = j(null), l = ge(Kt), i = Ue();
  let r;
  const c = e.errorTransfer ?? l?.errorTransfer ?? !1, a = e.errorAlign ?? l?.errorAlign ?? "right", d = e.name;
  let s = !1;
  if (d && l?.form?.getValidation && l?.form?.getValidation(d)) {
    const f = l.form.getValidation(d);
    s = Array.isArray(f) ? f.some((_) => _.required) : f.required;
  }
  e.rules && (s = Array.isArray(e.rules) ? e.rules.some((f) => f.required) : e.rules.required);
  const o = () => q(e, "cm-form-item", {
    "cm-form-item-error": t(),
    "cm-form-item-inline": e.inline || l?.inline,
    "cm-form-item-required": s
  }), h = async (f, _, v) => {
    if (_.required) {
      const S = await i.required(f, _.required, l?.form);
      if (!S)
        return n(v ? v.required : ""), S;
    }
    for (const S in _)
      if (S !== "required") {
        if (i[S]) {
          const k = await i[S](f, _[S], l?.form);
          if (!k)
            return n(v ? v[S] : ""), k;
        }
        if (_[S] && typeof _[S] == "function") {
          const k = await _[S](f, l?.form);
          if (!k)
            return n(v ? v[S] : ""), k;
        }
      }
    return n(null), !0;
  }, m = async (f, _) => {
    const v = {
      [`${d}`]: _
    }, S = new it(v), k = {
      [`${d}`]: f
    };
    return new Promise((w) => {
      S.validate(k, {
        firstFields: !0
      }, (M) => {
        M ? (n(M[0].message), w(!1)) : (n(null), w(!0));
      });
    });
  }, $ = async (f) => {
    if (r) {
      const _ = r.getBoundingClientRect();
      if (_.width === 0 || _.height === 0)
        return !0;
    }
    if (d && l && l.form?.getValidation && l.form?.getValidation(d) || l && e.rules) {
      const _ = l.form.getValidation(d) || e.rules, v = l.form.getMessage(d) || e.messages;
      return Array.isArray(_) ? m(f, _) : h(f, _, v);
    }
    return !0;
  };
  e.name || console.warn("formItem needs name property to check valid");
  const b = () => {
    n(null);
  };
  return e.name && l?.form?.setCheckValid && l.form?.setCheckValid(e.name, $), e.name && l?.form?.setClearValid && l.form?.setClearValid(e.name, b), u(Gn.Provider, {
    get value() {
      return {
        name: e.name
      };
    },
    get children() {
      const f = xc(), _ = f.firstChild;
      return g(_, () => e.label), g(f, u(V, {
        when: c,
        get fallback() {
          return (() => {
            const v = Cc(), S = v.firstChild, k = r;
            return typeof k == "function" ? X(k, v) : r = v, g(v, () => e.children, S), g(S, t), v;
          })();
        },
        get children() {
          return u(pe, {
            class: "cm-form-item-error-popover",
            arrow: !0,
            align: a,
            get disabled() {
              return !t();
            },
            get content() {
              return t();
            },
            get children() {
              const v = bc(), S = r;
              return typeof S == "function" ? X(S, v) : r = v, g(v, () => e.children), v;
            }
          });
        }
      }), null), P((v) => {
        const S = o(), k = e.style, w = {
          width: l?.labelWidth + "px",
          ...e.labelStyle
        };
        return v._v$ = B(f, S, v._v$), v._v$2 = Y(f, k, v._v$2), v._v$3 = Y(_, w, v._v$3), v;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), f;
    }
  });
}
const kc = () => ge(Gn);
function de(e, t, n) {
  arguments.length === 2 && (n = t, t = "value");
  let l, i;
  e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (l = e[t][0], i = e[t][1]) : [l, i] = j(e[t] || n);
  const r = ge(Kt), c = r?.form?.getFormData ? r.form?.getFormData() : {}, d = kc()?.name || e.name, s = c && d ? c[d] : void 0;
  return s != null && !e.notCreateFiled && i(s), r && r.form && d && !e.notCreateFiled && r.form.bindController(d, l, i), [l, (h) => (i(h), e.notCreateFiled || r?.onChange(d, h), h)];
}
const vn = /* @__PURE__ */ C('<span class="cm-progress-info">'), Lc = /* @__PURE__ */ C('<div class="cm-progress-bar">'), Sc = /* @__PURE__ */ C('<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle stroke="#f3f3f3" fill-opacity="0"></circle><path class="cm-progress-bar-path" stroke-linecap="round" fill-opacity="0">'), Ec = /* @__PURE__ */ C('<div><div class="cm-progress-outer"><div class="cm-progress-inner">');
function Zn(e) {
  const t = () => e.max ?? 100, n = () => e.value && e.value < 0 ? 0 : e.value && e.value >= t() ? t() : e.value ?? 0, l = e.strokeWidth ?? 10, i = e.type ?? "line", r = () => e.radius ?? 60, c = () => n() === 100 ? "finished" : e.status ?? "normal", a = () => q(e, "cm-progress", {
    "cm-progress-hide-info": e.hidePercent,
    [`cm-progress-${c()}`]: !!c(),
    [`cm-progress-${i}`]: !!i
  }), d = () => `${n()}%`, s = () => {
    const v = c(), S = i === "line" ? 12 : 24;
    return e.infoRender ? e.infoRender(v, n()) : v === "finished" ? u(W, {
      name: "check-circle",
      size: S
    }) : v === "error" ? u(W, {
      name: "x-circle",
      size: S
    }) : `${n()}%`;
  }, o = () => {
    const v = {
      width: d(),
      height: `${l}px`
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (v["background-color"] = e.strokeColor), e.strokeColor instanceof Array)) {
      const S = e.strokeColor.length, k = e.strokeColor.map((w, M) => w + " " + M / S * 100 + "%");
      v["background-image"] = `linear-gradient(to right, ${k.join(",")})`;
    }
    return v;
  }, h = 2 * Math.PI, m = () => (Math.sin(h) * r()).toFixed(2), $ = () => -(Math.cos(h) * r()).toFixed(2), b = () => r() + l / 2, f = () => ["M", 0, -r(), "A", r(), r(), 0, 1, 1, m(), -$(), "A", r(), r(), 0, 1, 1, m(), $()], _ = () => {
    const v = () => n() / t(), S = () => h * r(), w = {
      "stroke-dashoffset": `${(() => S() * (1 - v()))()}`,
      "stroke-dasharray": S()
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (w.stroke = e.strokeColor), e.strokeColor instanceof Array))
      for (let M = 0; M < e.strokeColor.length; M++) {
        const A = e.strokeColor[M];
        v() * 100 >= A.percent && (w.stroke = A.color);
      }
    return w;
  };
  return (() => {
    const v = Ec(), S = v.firstChild, k = S.firstChild;
    return g(k, u(Le, {
      get children() {
        return [u(Q, {
          when: i === "line",
          get children() {
            const w = Lc();
            return g(w, u(V, {
              get when() {
                return e.textInside;
              },
              get children() {
                const M = vn();
                return g(M, () => `${n()}%`), M;
              }
            })), P((M) => Y(w, o(), M)), w;
          }
        }), u(Q, {
          when: i === "circle",
          get children() {
            const w = Sc(), M = w.firstChild, A = M.nextSibling;
            return w.style.setProperty("display", "block"), Z(M, "stroke-width", l), Z(A, "stroke-width", l), P((L) => {
              const y = 2 * r() + l + "px", x = 2 * r() + l + "px", E = b(), F = b(), R = r(), D = f().join(" "), z = `translate(${b()},${b()})`, T = _();
              return y !== L._v$ && ((L._v$ = y) != null ? w.style.setProperty("width", y) : w.style.removeProperty("width")), x !== L._v$2 && ((L._v$2 = x) != null ? w.style.setProperty("height", x) : w.style.removeProperty("height")), E !== L._v$3 && Z(M, "cx", L._v$3 = E), F !== L._v$4 && Z(M, "cy", L._v$4 = F), R !== L._v$5 && Z(M, "r", L._v$5 = R), D !== L._v$6 && Z(A, "d", L._v$6 = D), z !== L._v$7 && Z(A, "transform", L._v$7 = z), L._v$8 = Y(A, T, L._v$8), L;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0
            }), w;
          }
        })];
      }
    })), g(v, u(V, {
      get when() {
        return !e.textInside;
      },
      get children() {
        const w = vn();
        return g(w, s), w;
      }
    }), null), P((w) => B(v, a(), w)), v;
  })();
}
const Mc = /* @__PURE__ */ C("<div>"), Dc = /* @__PURE__ */ C('<span class="cm-word-count-prefix">'), $n = /* @__PURE__ */ C("<span>"), Tc = /* @__PURE__ */ C("<span>/"), Rc = /* @__PURE__ */ C('<span class="cm-word-count-suffix">');
function Jn(e) {
  const t = () => (e.value ?? "").length > e.total, n = () => {
    const c = e.value ?? "";
    return e.overflow && t() ? c.length - e.total : c.length;
  }, l = () => {
    const c = e.value ?? "";
    return Math.min(c.length / e.total * 100, 100);
  }, i = e.radius ?? 10, r = () => q(e, "cm-word-count");
  return (() => {
    const c = Mc();
    return g(c, u(V, {
      get when() {
        return e.circle;
      },
      get fallback() {
        return [(() => {
          const a = Dc();
          return g(a, () => t() ? e.prefixOverflow : e.prefix), P(() => a.classList.toggle("cm-word-count-overflow", !!t())), a;
        })(), (() => {
          const a = $n();
          return g(a, n), P(() => Re(a, t() ? "cm-word-count-overflow" : "")), a;
        })(), Tc(), (() => {
          const a = $n();
          return g(a, () => e.total), a;
        })(), (() => {
          const a = Rc();
          return g(a, () => t() ? e.suffixOverflow : e.suffix), P(() => a.classList.toggle("cm-word-count-overflow", !!t())), a;
        })()];
      },
      get children() {
        return u(Zn, {
          type: "circle",
          radius: i,
          strokeWidth: 1,
          hidePercent: !0,
          get value() {
            return l();
          }
        });
      }
    })), P((a) => {
      const d = r(), s = e.style;
      return a._v$ = B(c, d, a._v$), a._v$2 = Y(c, s, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}
const zc = /* @__PURE__ */ C('<textarea class="cm-input">'), Pc = /* @__PURE__ */ C("<div>"), Ac = /* @__PURE__ */ C('<div class="cm-input-prefix">'), Ic = /* @__PURE__ */ C('<div class="cm-input-group-prepend">'), Fc = /* @__PURE__ */ C('<input class="cm-input">'), Oc = /* @__PURE__ */ C('<div class="cm-input-suffix">'), Nc = /* @__PURE__ */ C('<div class="cm-input-group-append">');
function _e(e) {
  const t = () => q(e, "cm-input-wrapper", {
    "cm-input-disabled": e.disabled,
    "cm-input-auto-height": e.autoHeight,
    "cm-textarea": e.type === "textarea",
    "cm-input-hidden": e.type === "hidden",
    [`cm-input-${e.size}`]: e.size,
    // 'cm-input-group': append || prepend,
    "cm-input-group-with-prefix": e.prefix,
    "cm-input-group-with-suffix": e.suffix,
    "cm-input-group-with-append": e.append,
    "cm-input-group-with-prepend": e.prepend
  }), [n, l] = ae(e, ["classList", "class", "name", "style", "disabled", "size", "type", "append", "prepend", "prefix", "suffix", "suffixStyle", "prefixStyle", "clearable", "value", "onChange", "onEnter", "onKeyDown", "onKeyUp", "onInput", "trigger"]), i = {};
  n.suffixStyle && n.suffixStyle.width && (i["padding-right"] = n.suffixStyle.width + "px"), n.prefixStyle && n.prefixStyle.width && (i["padding-left"] = n.prefixStyle.width + "px");
  const [r, c] = de(e, ""), [a, d] = j(r()), s = n.trigger || "blur", o = (S) => {
    s === "input" && (n.onChange && n.onChange(S.target.value), c(S.target.value)), d(S.target.value), n.onInput && n.onInput(S.target.value, S), e.type === "textarea" && e.autoHeight && m(S);
  };
  let h;
  const m = (S) => {
    const k = S.target;
    h || (h = k.clientHeight), k.scrollHeight > h && (k.value.split(`
`).length === 1 ? k.style.height = `${h}px` : k.style.height = "auto", k.style.overflowY = "hidden", k.scrollTop = 0, k.style.height = `${k.scrollHeight}px`);
  }, $ = (S) => {
  }, b = (S) => {
    const k = S.target.value;
    s === "blur" && n.onChange && n.onChange(k), c(k);
  }, f = () => {
    n.onChange && n.onChange(""), c("");
  }, _ = (S) => {
    S.keyCode === 13 && n.onEnter && n.onEnter(r()), n.onKeyUp && n.onKeyUp(S);
  }, v = (S) => {
    S.keyCode === 13 && (c(S.target.value), n.onChange && n.onChange(S.target.value)), n.onKeyDown && n.onKeyDown(S);
  };
  return (() => {
    const S = Pc();
    return g(S, (() => {
      const k = G(() => !!n.prefix);
      return () => k() ? (() => {
        const w = Ac();
        return g(w, () => n.prefix), P((M) => Y(w, n.prefixStyle, M)), w;
      })() : null;
    })(), null), g(S, (() => {
      const k = G(() => !!n.prepend);
      return () => k() ? (() => {
        const w = Ic();
        return g(w, () => n.prepend), w;
      })() : null;
    })(), null), g(S, u(V, {
      get when() {
        return n.type === "textarea";
      },
      get fallback() {
        return (() => {
          const k = Fc(), w = e.ref;
          return typeof w == "function" ? X(w, k) : e.ref = k, Ce(k, ne(l, {
            get value() {
              return r();
            },
            get autocomplete() {
              return e.autocomplete || "off";
            },
            onChange: $,
            onInput: o,
            onBlur: b,
            get disabled() {
              return n.disabled;
            },
            style: i,
            onKeyDown: v,
            onKeyUp: _,
            get type() {
              return n.type;
            }
          }), !1, !1), k;
        })();
      },
      get children() {
        const k = zc(), w = e.ref;
        return typeof w == "function" ? X(w, k) : e.ref = k, Ce(k, ne(l, {
          get value() {
            return r();
          },
          spellcheck: !1,
          get autocomplete() {
            return e.autocomplete || "off";
          },
          wrap: "soft",
          onChange: $,
          onInput: o,
          onBlur: b,
          get disabled() {
            return n.disabled;
          },
          style: i,
          onKeyDown: v,
          onKeyUp: _
        }), !1, !1), k;
      }
    }), null), g(S, (() => {
      const k = G(() => !!(n.clearable && r()));
      return () => k() ? u(W, {
        class: "cm-input-clear",
        name: "x-circle",
        onClick: f
      }) : null;
    })(), null), g(S, (() => {
      const k = G(() => !!(n.suffix || e.wordCount && e.maxLength));
      return () => k() ? (() => {
        const w = Oc();
        return g(w, u(V, {
          get when() {
            return e.wordCount && e.maxLength;
          },
          get fallback() {
            return n.suffix;
          },
          get children() {
            return u(Jn, {
              get total() {
                return e.maxLength;
              },
              get value() {
                return a();
              }
            });
          }
        })), P((M) => Y(w, n.suffixStyle, M)), w;
      })() : null;
    })(), null), g(S, (() => {
      const k = G(() => !!n.append);
      return () => k() ? (() => {
        const w = Nc();
        return g(w, () => n.append), w;
      })() : null;
    })(), null), P((k) => {
      const w = t(), M = n.style;
      return k._v$ = B(S, w, k._v$), k._v$2 = Y(S, M, k._v$2), k;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), S;
  })();
}
const Bc = /* @__PURE__ */ C('<div class="cm-field-prepend">'), Vc = /* @__PURE__ */ C('<div class="cm-field-selection">'), Yc = /* @__PURE__ */ C('<div class="cm-field-text">'), qc = /* @__PURE__ */ C('<div tabindex="1"><input type="hidden"><span>A</span><span class="cm-field-cert">'), Hc = /* @__PURE__ */ C('<span class="cm-field-placeholder">');
function je(e) {
  const [t, n] = e.query ?? [() => "", () => {
  }];
  let l;
  const i = (o) => {
    o.stopImmediatePropagation && o.stopImmediatePropagation(), o.preventDefault && o.preventDefault(), o.stopPropagation && o.stopPropagation(), e.onClear && e.onClear(o);
  }, r = () => ({
    "cm-field-value": !0,
    "cm-field-clearable": e.clearable && !!e.text && !!e.text.length,
    "cm-field-disabled": e.disabled,
    [`cm-field-value-${e.size}`]: !!e.size
  }), c = () => (Promise.resolve().then(() => {
    e.filter && l && l.focus();
  }), e.multi && e.text && e.text instanceof Array ? e.text.map((o, h) => ({
    id: o.id,
    title: o.title
  })) : []), a = () => {
    const o = e.filter ? t() : "";
    return {
      width: o !== void 0 ? o.length * 12 + 20 + "px" : "100%"
    };
  }, d = () => {
    e.filter && l && l.focus();
  }, s = (o) => {
    const h = t();
    (o.key === "Backspace" || o.code === "Backspace" || o.key === "Delete" || o.code === "Delete") && h.length === 0 && e.onDeleteLastValue && e.onDeleteLastValue();
  };
  return (() => {
    const o = qc(), h = o.firstChild, m = h.nextSibling, $ = m.nextSibling;
    return o.$$click = d, m.style.setProperty("width", "0px"), m.style.setProperty("font-size", "12px"), m.style.setProperty("visibility", "hidden"), m.style.setProperty("line-height", "initial"), g(o, u(V, {
      get when() {
        return e.prepend;
      },
      get children() {
        const b = Bc();
        return g(b, () => e.prepend), b;
      }
    }), $), g(o, u(Le, {
      get children() {
        return [u(Q, {
          get when() {
            return e.multi;
          },
          get children() {
            const b = Vc();
            return g(b, u(Hl, {
              get data() {
                return c();
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
            }), null), g(b, (() => {
              const f = G(() => !!e.filter);
              return () => f() ? u(_e, {
                ref(_) {
                  const v = l;
                  typeof v == "function" ? v(_) : l = _;
                },
                get style() {
                  return a();
                },
                notCreateFiled: !0,
                class: "cm-select-filter",
                trigger: "input",
                get size() {
                  return e.size;
                },
                value: [t, n],
                onKeyDown: s
              }) : null;
            })(), null), b;
          }
        }), u(Q, {
          get when() {
            return !e.multi;
          },
          get children() {
            const b = Yc();
            return g(b, u(V, {
              get when() {
                return !e.filter;
              },
              get children() {
                return G(() => !!e.text)() ? e.text : (() => {
                  const f = Hc();
                  return g(f, () => e.placeholder ?? ""), f;
                })();
              }
            }), null), g(b, u(V, {
              get when() {
                return e.filter;
              },
              get children() {
                return u(_e, {
                  ref(f) {
                    const _ = l;
                    typeof _ == "function" ? _(f) : l = f;
                  },
                  get style() {
                    return a();
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
            }), null), b;
          }
        })];
      }
    }), $), g($, () => e.icon), g(o, u(V, {
      get when() {
        return e.clearable && e.text && e.text !== "";
      },
      get children() {
        return u(W, {
          name: "x-circle",
          class: "cm-field-clear",
          onClick: i
        });
      }
    }), null), P((b) => B(o, r(), b)), o;
  })();
}
J(["click"]);
const Uc = /* @__PURE__ */ C("<div>"), jc = /* @__PURE__ */ C('<div class="cm-select-options"><ul class="cm-select-option-list">'), Xc = /* @__PURE__ */ C('<div class="cm-select-options-wrap">');
function Wc(e) {
  const [t, n] = j(!1), l = e.align ?? "bottomLeft", [i, r] = de(e, ""), [c, a] = j(""), d = () => q(e, "cm-select", "cm-autocomplete", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && i().length !== 0,
    "cm-select-open": t(),
    "cm-select-with-prefix": e.prefix
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let s;
  const o = "label", h = e.valueField || "value";
  let m = !1, $ = [];
  e.data && ($ = e.data.map((w) => typeof w == "object" ? (w._show = !0, w) : {
    [h]: w,
    label: w,
    _show: !0
  }));
  const [b, f] = re({
    list: $
  });
  K(() => {
    const w = i();
    f("list", (M) => M, ie((M) => {
      M._checked = w === M[h];
    }));
  }), K(() => {
    e.data && ($ = e.data.map((w) => typeof w == "object" ? (w._show = !0, w) : {
      [h]: w,
      label: w,
      _show: !0
    }), f("list", () => [...$]), $.length && n(!0));
  }), K(() => {
    const w = c();
    m || w.length && e.onSearch && e.onSearch(w);
  });
  const _ = (w, M) => {
    r(w), m = !0, a(M[o]), queueMicrotask(() => {
      m = !1;
    }), e.onChange && e.onChange(w, M), n(!1);
  }, v = () => {
    const w = i();
    let M;
    return xe(() => {
      M = b.list.find((A) => A[h] === w);
    }), M ? M[o] : e.emptyOption ? e.emptyOption : "";
  }, S = (w) => {
    w.preventDefault && w.preventDefault(), w.stopPropagation && w.stopPropagation(), e.onChange && e.onChange(""), r("");
  }, k = () => !!(b.list && b.list.length);
  return (() => {
    const w = Uc(), M = s;
    return typeof M == "function" ? X(M, w) : s = w, g(w, u(Te, {
      get transfer() {
        return e.transfer;
      },
      fixWidth: !0,
      align: l,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [t, n],
      onBeforeDrop: k,
      get menu() {
        return (() => {
          const A = Xc();
          return g(A, u(On, {
            get open() {
              return t();
            },
            get children() {
              const L = jc(), y = L.firstChild;
              return g(y, u(p, {
                get each() {
                  return b.list;
                },
                children: (x) => u(Il, {
                  get renderOption() {
                    return e.renderOption;
                  },
                  get visible() {
                    return x._show;
                  },
                  get disabled() {
                    return x.disabled;
                  },
                  data: x,
                  get checked() {
                    return x._checked;
                  },
                  valueField: h,
                  textField: o,
                  onClick: _
                })
              })), L;
            }
          })), A;
        })();
      },
      get children() {
        return u(je, {
          get text() {
            return v();
          },
          get disabled() {
            return e.disabled;
          },
          filter: !0,
          query: [c, a],
          get clearable() {
            return e.clearable;
          },
          onClear: S,
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
            return u(W, {
              name: "chevron-down",
              class: "cm-select-cert"
            });
          }
        });
      }
    })), P((A) => {
      const L = d(), y = e.style;
      return A._v$ = B(w, L, A._v$), A._v$2 = Y(w, y, A._v$2), A;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), w;
  })();
}
const Kc = /* @__PURE__ */ C('<div><span class="cm-cascader-text">');
function Gc(e) {
  const [t, n] = e.store, l = () => t.selectedValue.includes(e.data.value), i = () => ({
    "cm-cascader-item": !0,
    "cm-cascader-item-active": l(),
    "cm-cascader-item-disabled": e.data.disabled
  }), r = ta(), [c, a] = j(!1), d = async () => {
    if (!e.data.disabled) {
      if (e.data.loading && r && r.loadData)
        try {
          a(!0);
          const m = await r.loadData(e.data);
          r && r.addChildren(e.data, m), e.data.loading = !1;
        } catch {
        } finally {
          a(!1);
        }
      e.trigger === "click" && s(), r && r.onSelect(e.data);
    }
  }, s = () => {
    const m = [];
    for (let $ = 0; $ < e.level; $++)
      m.push(t.selectedValue[$]);
    m[e.level] = e.data.value, n("selectedValue", m);
  };
  let o = null;
  const h = () => {
    e.data.disabled || (o && clearTimeout(o), o = setTimeout(() => {
      s();
    }, 100));
  };
  return (() => {
    const m = Kc(), $ = m.firstChild;
    return fe(m, "mouseenter", e.trigger === "hover" ? h : void 0), m.$$click = d, g(m, () => e.data.icon, $), g($, () => e.data.title), g(m, u(V, {
      get when() {
        return e.data.children && e.data.children.length || e.data.loading;
      },
      get children() {
        return u(V, {
          get when() {
            return c();
          },
          get fallback() {
            return u(W, {
              name: "chevron-right",
              class: "cm-menu-submenu-cert"
            });
          },
          get children() {
            return u(He, {
              color: "#1890ff"
            });
          }
        });
      }
    }), null), P((b) => B(m, i(), b)), m;
  })();
}
J(["click"]);
const Zc = /* @__PURE__ */ C('<div class="cm-cascader-list">');
function Jc(e) {
  const [t, n] = e.store, l = () => e.data;
  return (() => {
    const i = Zc();
    return g(i, u(p, {
      get each() {
        return l();
      },
      children: (r) => u(Gc, {
        get trigger() {
          return e.trigger;
        },
        get data() {
          return e.mapData[r];
        },
        store: [t, n],
        get level() {
          return e.level;
        }
      })
    })), i;
  })();
}
const Qc = /* @__PURE__ */ C('<div tabindex="0">'), pc = /* @__PURE__ */ C('<div class="cm-cascader-wrap">'), Qn = me();
function pn(e, t) {
  e && e.length && e.forEach((n) => {
    t.push(n), n.children && pn(n.children, t);
  });
}
function ei(e, t) {
  e && e.length && e.forEach((n) => {
    t[n.value] = n, n.children && ei(n.children, t);
  });
}
function ea(e) {
  const [t, n] = he(e, "visible", !1), [l, i] = de(e, []), r = e.trigger ?? "click", c = [], a = {}, d = JSON.parse(JSON.stringify(e.data));
  pn(e.data, c), ei(d, a);
  const [s, o] = re({
    selectedValue: l() || [],
    columns: []
  }), h = e.seperator ?? "/", m = e.align ?? "bottomLeft", $ = () => q(e, "cm-cascader", {
    "cm-cascader-disabled": e.disabled,
    "cm-cascader-clearable": !e.disabled && e.clearable && l() && l().length,
    [`cm-cascader-${e.size}`]: e.size
  }), b = {}, f = e.data.map((w) => w.value);
  K(() => {
    const w = l() || [];
    o("selectedValue", [...w]);
  }), K(() => {
    const w = s.selectedValue, M = [f];
    w && w.length && w.forEach((A) => {
      if (b[A])
        M.push(b[A]);
      else {
        const L = a[A];
        if (L && L.children) {
          const y = L.children.map((x) => x.value);
          b[A] = y, M.push(y);
        }
      }
    }), o("columns", M);
  });
  const _ = () => {
    const w = l(), M = w ? w.map((A) => a[A].title) : [];
    return M.length ? M.join(h) : "";
  }, v = (w) => {
    if (!(w.children && w.children.length) || e.changeOnSelect) {
      e.onSelect && e.onSelect(w);
      const A = s.selectedValue.map((L) => L);
      i(A), e.onChange && e.onChange(A);
    }
    w.children && w.children.length || n(!1);
  }, S = (w, M) => {
    w.loading = !1, w.children = M, M.forEach((A) => {
      a[A.value] = A;
    });
  }, k = () => {
    i([]), e.onChange && e.onChange([]);
  };
  return u(Qn.Provider, {
    get value() {
      return {
        onSelect: v,
        loadData: e.loadData,
        addChildren: S
      };
    },
    get children() {
      const w = Qc();
      return g(w, u(Te, {
        visible: [t, n],
        get transfer() {
          return e.transfer;
        },
        align: m,
        get revers() {
          return e.revers;
        },
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        get menu() {
          return (() => {
            const M = pc();
            return g(M, u(p, {
              get each() {
                return s.columns;
              },
              children: (A, L) => u(Jc, {
                data: A,
                trigger: r,
                store: [s, o],
                mapData: a,
                get level() {
                  return L();
                }
              })
            })), M;
          })();
        },
        get children() {
          return u(je, {
            get prepend() {
              return e.prepend;
            },
            get text() {
              return _();
            },
            onClear: k,
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
      })), P((M) => B(w, $(), M)), w;
    }
  });
}
const ta = () => ge(Qn), na = /* @__PURE__ */ C('<div><span>A</span><input><span class="cm-checkbox-outter">&nbsp;<span class="cm-checkbox-inner"></span></span><label>');
function ze(e) {
  const t = e.type || "checkbox", n = () => ({
    ...e.classList,
    [e.class]: !0,
    "cm-checkbox": !0,
    "cm-checkbox-checked": e.checked,
    "cm-checkbox-indeterminate": e.checked === "indeterminate",
    disabled: e.disabled
  }), l = () => {
    if (e.disabled || t == "radio" && e.checked)
      return;
    let i = e.checked;
    i === "indeterminate" ? i = !0 : i = !i, e.onChange && e.onChange(i, e.value);
  };
  return (() => {
    const i = na(), r = i.firstChild, c = r.nextSibling, a = c.nextSibling, d = a.nextSibling;
    return i.$$click = l, r.style.setProperty("width", "0px"), r.style.setProperty("font-size", "12px"), r.style.setProperty("visibility", "hidden"), c.addEventListener("change", () => {
    }), Z(c, "type", t), c.style.setProperty("display", "none"), a.style.setProperty("position", "relative"), g(d, () => e.label), P((s) => {
      const o = n(), h = e.name;
      return s._v$ = B(i, o, s._v$), h !== s._v$2 && Z(c, "name", s._v$2 = h), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), P(() => c.value = e.value), i;
  })();
}
J(["click"]);
function ia(e) {
  const [t, n] = de(e, "checked", !1), [l, i] = ae(e, ["checked", "onChange"]);
  return u(ze, ne({
    get checked() {
      return t();
    },
    onChange: (c, a) => {
      e.disabled || (n(c), l.onChange && l.onChange(c, a));
    }
  }, i));
}
const ra = /* @__PURE__ */ C("<div>"), Ff = me();
function la(e) {
  const t = () => q(e, "cm-checkbox-group", {
    "cm-checkbox-group-stack": e.block
  }), [n, l] = de(e, []), i = (d, s) => {
    if (e.disabled)
      return;
    let o = n() || [];
    if (d)
      o.includes(s) || (o = o.concat(s));
    else {
      const m = o.indexOf(s);
      m > -1 && o.splice(m, 1);
    }
    const h = JSON.parse(JSON.stringify(o));
    l(h), e.onChange && e.onChange(h);
  }, r = e.textField || "label", c = e.valueField || "value", a = {};
  return e.data && e.data.forEach((d) => {
    const o = (n() || []).includes(d[c]);
    a[d[c]] = j(o);
  }), K(() => {
    const d = n() ?? [];
    for (let s = 0; s < e.data.length; s++) {
      const o = e.data[s], h = d.includes(o[c]);
      a[o[c]] && a[o[c]][1](h);
    }
  }), (() => {
    const d = ra();
    return g(d, u(p, {
      get each() {
        return e.data;
      },
      children: (s) => u(ze, {
        inner: !0,
        get disabled() {
          return e.disabled || s.disabled;
        },
        get value() {
          return s[c];
        },
        get checked() {
          return a[s[c]][0]();
        },
        get label() {
          return s[r];
        },
        onChange: i
      })
    })), P((s) => {
      const o = t(), h = e.style;
      return s._v$ = B(d, o, s._v$), s._v$2 = Y(d, h, s._v$2), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), d;
  })();
}
const ca = /* @__PURE__ */ C('<div class="cm-select-color">'), aa = /* @__PURE__ */ C('<div class="cm-color-picker-value" tabindex="0"><span>A</span><input type="hidden"><div class="cm-select-color-wrap">'), sa = /* @__PURE__ */ C('<div class="cm-select-color cm-select-color-empty">');
function oa(e) {
  const [t, n] = j({});
  return K(() => {
    const l = e.open ? {
      background: `rgba(${e.currentValue.rgba.r},${e.currentValue.rgba.g},${e.currentValue.rgba.b},${e.currentValue.rgba.a})`
    } : {
      background: e.value
    };
    n(l);
  }), (() => {
    const l = aa(), i = l.firstChild, r = i.nextSibling, c = r.nextSibling;
    return i.style.setProperty("width", "0px"), i.style.setProperty("font-size", "12px"), i.style.setProperty("visibility", "hidden"), i.style.setProperty("line-height", "initial"), g(c, u(V, {
      get when() {
        return t().background;
      },
      get fallback() {
        return (() => {
          const a = sa();
          return g(a, u(W, {
            name: "x",
            size: 12
          })), a;
        })();
      },
      get children() {
        const a = ca();
        return P((d) => Y(a, t(), d)), a;
      }
    })), P(() => Z(r, "name", e.name)), P(() => r.value = e.value), l;
  })();
}
function Fe(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function St(e, t) {
  const n = $i(e), {
    _a: l
  } = n;
  return l == null && n.setAlpha(t || 1), n;
}
function da(e, t) {
  const n = t && t.a;
  if (t) {
    if (t.hsl)
      return St(t.hsl, n);
    if (t.hex && t.hex.length > 0)
      return St(t.hex, n);
  }
  return St(t, n);
}
function Et(e, t) {
  const n = e === "" ? "#2d8cf0" : e, l = da(e, n), i = l.toHsl(), r = l.toHsv();
  return i.s === 0 && (i.h = n.h || n.hsl && n.hsl.h || t || 0, r.h = i.h), r.v < 0.0164 && (r.h = n.h || n.hsv && n.hsv.h || 0, r.s = n.s || n.hsv && n.hsv.s || 0), i.l < 0.01 && (i.h = n.h || n.hsl && n.hsl.h || 0, i.s = n.s || n.hsl && n.hsl.s || 0), {
    hsl: i,
    hex: l.toHexString().toUpperCase(),
    rgba: l.toRgb(),
    hsv: r,
    oldHue: n.h || t || i.h,
    source: n.source,
    a: n.a || l.getAlpha()
  };
}
function Vt(e) {
  const {
    r: t,
    g: n,
    b: l,
    a: i
  } = e;
  return `rgba(${[t, n, l, i].join(",")})`;
}
const ua = /* @__PURE__ */ C('<div class="cm-saturation"><div class="cm-saturation-white"></div><div class="cm-saturation-black"></div><div class="cm-saturation-pointer"><div class="cm-saturation-circle">');
function fa(e) {
  let t;
  const n = (a) => {
    if (typeof a.button == "number" && a.button !== 0)
      return !1;
    i(a), document.addEventListener("mousemove", i, !1), document.addEventListener("mouseup", l, !1);
  }, l = (a) => {
    i(a), document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", l);
  };
  le(() => {
    document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", l);
  });
  const i = (a) => {
    a.preventDefault(), a.stopPropagation();
    const {
      clientWidth: d,
      clientHeight: s
    } = t, o = t.getBoundingClientRect().left + window.screenX, h = t.getBoundingClientRect().top + window.screenY, m = Fe(a.clientX - o, 0, d), $ = Fe(a.clientY - h, 0, s), b = m / d, f = Fe(1 - $ / s, 0, 1);
    e.onChange && e.onChange({
      h: e.value.hsv.h,
      s: b,
      v: f,
      a: e.value.hsv.a,
      source: "hsva"
    });
  }, r = () => ({
    background: `hsl(${e.value.hsv.h}, 100%, 50%)`
  }), c = () => ({
    top: `${-(e.value.hsv.v * 100) + 1 + 100}%`,
    left: `${e.value.hsv.s * 100}%`
  });
  return (() => {
    const a = ua(), d = a.firstChild, s = d.nextSibling, o = s.nextSibling, h = t;
    return typeof h == "function" ? X(h, a) : t = a, a.$$mousedown = n, P((m) => {
      const $ = r(), b = c();
      return m._v$ = Y(a, $, m._v$), m._v$2 = Y(o, b, m._v$2), m;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
J(["mousedown"]);
const ha = /* @__PURE__ */ C('<div class="cm-color-picker-hue"><div class="cm-color-picker-hue-wrap"><div class="cm-color-picker-hue-pointer">');
function ma(e) {
  const [t, n] = j(Fe(e.value.hsl.h * 100 / 360, 0, 100));
  let l;
  const i = (d) => {
    if (typeof d.button == "number" && d.button !== 0)
      return !1;
    c(d), document.addEventListener("mousemove", c, !1), document.addEventListener("mouseup", r, !1);
  }, r = (d) => {
    c(d), document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", r);
  };
  le(() => {
    document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", r);
  });
  const c = (d) => {
    d.preventDefault(), d.stopPropagation();
    const {
      clientWidth: s
    } = l, o = l.getBoundingClientRect().left + window.screenX, h = d.clientX - o;
    if (h < 0) {
      a(0);
      return;
    }
    if (h > s) {
      a(100);
      return;
    }
    a(h * 100 / s);
  }, a = (d) => {
    n(Fe(d, 0, 100));
    const {
      h: s,
      s: o,
      l: h,
      a: m
    } = e.value.hsl, $ = Fe(d / 100 * 360, 0, 360);
    s !== $ && e.onChange && e.onChange({
      h: $,
      s: o,
      l: h,
      a: m,
      source: "hsl"
    });
  };
  return K(() => {
    n(Fe(e.value.hsl.h * 100 / 360, 0, 100));
  }), (() => {
    const d = ha(), s = d.firstChild, o = s.firstChild, h = l;
    return typeof h == "function" ? X(h, d) : l = d, s.$$mousedown = i, o.style.setProperty("top", "0"), P(() => `${t()}%` != null ? o.style.setProperty("left", `${t()}%`) : o.style.removeProperty("left")), d;
  })();
}
J(["mousedown"]);
const ga = /* @__PURE__ */ C('<div class="cm-radio-group-thumb">'), va = /* @__PURE__ */ C("<div>");
function $a(e) {
  const t = () => q(e, "cm-radio-group", {
    "cm-radio-group-stack": e.block,
    "cm-radio-group-stick": e.stick
  }), [n, l] = de(e, ""), [i, r] = j({});
  let c;
  const a = (h, m) => {
    e.disabled || (l(m), e.onChange && e.onChange(m));
  }, d = e.textField ?? "label", s = e.valueField ?? "value", o = (h) => n() === h[s];
  return K(() => {
    const h = n() ?? "";
    let m = -1;
    for (let w = 0; w < e.data.length; w++) {
      const M = e.data[w];
      h === M[s] && (m = w);
    }
    const b = c.querySelectorAll(".cm-radio")[m];
    if (!b)
      return;
    const f = b.getBoundingClientRect(), _ = c.getBoundingClientRect(), v = f.left - _.left, k = {
      width: `${f.width}px`,
      left: `${v}px`
    };
    r(k);
  }), (() => {
    const h = va(), m = c;
    return typeof m == "function" ? X(m, h) : c = h, g(h, u(V, {
      get when() {
        return e.stick;
      },
      get children() {
        const $ = ga();
        return P((b) => Y($, i(), b)), $;
      }
    }), null), g(h, u(p, {
      get each() {
        return e.data;
      },
      children: ($) => u(ze, {
        get disabled() {
          return e.disabled || $.disabled;
        },
        class: "cm-radio",
        get type() {
          return e.type || "radio";
        },
        inner: !0,
        get value() {
          return $[s];
        },
        get checked() {
          return o($);
        },
        get label() {
          return $[d];
        },
        onChange: a
      })
    }), null), P(($) => {
      const b = t(), f = e.style;
      return $._v$ = B(h, b, $._v$), $._v$2 = Y(h, f, $._v$2), $;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), h;
  })();
}
const _a = /* @__PURE__ */ C('<div tabindex="0"><span>A</span><span class="cm-switch-inner"></span><input type="hidden">');
function ya(e) {
  const t = () => q(e, "cm-switch", {
    [`cm-switch-${e.size}`]: e.size,
    "cm-switch-disabled": e.disabled,
    "cm-switch-checked": n(),
    "cm-switch-loading": e.loading
  }), [n, l] = de(e, "checked", !1), i = e.labels || [], r = e.values || [!0, !1], c = async () => {
    if (e.disabled || e.loading)
      return;
    let d = !0;
    if (e.onBeforeChange && (d = await e.onBeforeChange(n())), d) {
      const o = n() ? r[1] : r[0];
      e.onChange && e.onChange(o), l(o);
    }
  }, a = () => n() ? i[0] : i[1];
  return (() => {
    const d = _a(), s = d.firstChild, o = s.nextSibling, h = o.nextSibling;
    return d.$$click = c, s.style.setProperty("width", "0px"), s.style.setProperty("font-size", "12px"), s.style.setProperty("visibility", "hidden"), g(o, a), g(d, (() => {
      const m = G(() => !!e.loading);
      return () => m() ? u(He, {}) : null;
    })(), h), P((m) => {
      const $ = t(), b = e.style, f = e.name;
      return m._v$ = B(d, $, m._v$), m._v$2 = Y(d, b, m._v$2), f !== m._v$3 && Z(h, "name", m._v$3 = f), m;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), P(() => h.value = n() ? r[0] : r[1]), d;
  })();
}
J(["click"]);
function wa(e) {
  const [t, n] = ae(e, ["enterButton", "onEnter", "onSearch"]), l = t.enterButton ? null : u(W, {
    name: "search",
    style: {
      cursor: "pointer"
    },
    get onClick() {
      return t.onSearch;
    }
  });
  let i = null;
  return t.enterButton && (i = typeof t.enterButton == "string" ? t.enterButton : u(W, {
    name: "search",
    get onClick() {
      return t.onSearch;
    }
  })), u(_e, ne({
    get onEnter() {
      return t.onEnter;
    },
    suffix: l,
    append: i
  }, n));
}
const ba = /* @__PURE__ */ C("<div>"), xa = /* @__PURE__ */ C('<span class="cm-spinner-plus">'), Ca = /* @__PURE__ */ C('<span class="cm-spinner-subs">');
function ka(e) {
  const t = () => q(e, "cm-spinner", {
    [`cm-spinner-${e.size}`]: e.size,
    "cm-spinner-disabled": e.disabled
  }), [n, l] = de(e, Math.max(0, e.min ?? 0)), i = (m, $) => {
    m = m.replace(/[^0-9\.]/g, ""), $.target.value = m;
  }, r = (m) => {
    m.keyCode === 38 && s(), m.keyCode === 40 && o();
  }, c = e.min || 0, a = e.step || 1, d = (m) => {
    let $ = m;
    e.max !== void 0 && ($ = Math.min($, e.max)), c !== void 0 && ($ = Math.max($, c)), Promise.resolve().then(() => {
      l($);
    }), e.onChange && e.onChange($);
  }, s = () => {
    if (e.disabled)
      return;
    let m = h(n(), a);
    if (e.loop && e.max !== void 0 && c !== void 0 && m > e.max) {
      const $ = m - e.max;
      m = c + $ - 1;
    }
    e.max !== void 0 && (m = Math.min(e.max, m)), l(m), e.onChange && e.onChange(m), e.onPlus && e.onPlus(m, a);
  }, o = () => {
    if (e.disabled)
      return;
    let m = h(n(), -a);
    if (e.loop && e.max !== void 0 && c !== void 0 && m < c) {
      const $ = m - c;
      m = e.max + $ + 1;
    }
    c !== void 0 && (m = Math.max(c, m)), l(m), e.onChange && e.onChange(m), e.onSub && e.onSub(m, a);
  };
  function h(m, $) {
    let b, f;
    try {
      b = m.toString().split(".")[1].length;
    } catch {
      b = 0;
    }
    try {
      f = $.toString().split(".")[1].length;
    } catch {
      f = 0;
    }
    const _ = Math.pow(10, Math.max(b, f));
    return (m * _ + $ * _) / _;
  }
  return (() => {
    const m = ba();
    return g(m, u(_e, {
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
      notCreateFiled: !0,
      value: [n, l],
      onChange: d,
      onKeyDown: r,
      get append() {
        return [(() => {
          const $ = xa();
          return $.$$click = s, g($, u(W, {
            name: "chevron-up",
            size: 12
          })), $;
        })(), (() => {
          const $ = Ca();
          return $.$$click = o, g($, u(W, {
            name: "chevron-down",
            size: 12
          })), $;
        })()];
      }
    })), P(($) => {
      const b = t(), f = e.style;
      return $._v$ = B(m, b, $._v$), $._v$2 = Y(m, f, $._v$2), $;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), m;
  })();
}
J(["click"]);
const La = /* @__PURE__ */ C("<div><span>"), Sa = /* @__PURE__ */ C('<span class="cm-rate-star-content">');
function Ea(e) {
  const [t, n] = e.current, l = () => {
    let i = !1, r = !1;
    return e.index <= t() - 1 && (r = !0), e.index > t() - 1 && e.index < t() && (i = !0), {
      "cm-rate-star": !0,
      "cm-rate-star-zero": !r && !i,
      "cm-rate-star-half": e.allowHalf && i,
      "cm-rate-star-full": r
    };
  };
  return (() => {
    const i = La(), r = i.firstChild;
    return fe(r, "click", e.onClickStar?.bind(null, e.index + 1), !0), fe(r, "mouseenter", e.onMouseEnter?.bind(null, e.index + 1)), g(r, () => e.icon), g(i, (() => {
      const c = G(() => !!e.allowHalf);
      return () => c() ? (() => {
        const a = Sa();
        return fe(a, "click", e.onClickHalfStar?.bind(null, e.index + 0.5), !0), fe(a, "mouseenter", e.onMouseEnterHalf?.bind(null, e.index + 0.5)), g(a, () => e.icon), a;
      })() : null;
    })(), null), P((c) => B(i, l(), c)), i;
  })();
}
J(["click"]);
const Ma = /* @__PURE__ */ C("<div><span>");
function Da(e) {
  const t = () => q(e, "cm-rate", {
    "cm-rate-disabled": e.disabled
  });
  if (!e.icon)
    return console.warn("need icon property"), null;
  const [n, l] = de(e, 0), [i, r] = j(n()), c = e.allowHalf || !1, a = (b) => {
    r(b);
  }, d = (b, f) => {
    c && (f.preventDefault(), f.stopPropagation(), r(b));
  }, s = () => {
    r(n());
  }, o = (b) => {
    l(b), e.onChange && e.onChange(b);
  }, h = (b, f) => {
    f.preventDefault(), f.stopPropagation(), c && (l(b), e.onChange && e.onChange(b));
  }, m = e.count || 5, $ = [];
  for (let b = 0; b < m; b++)
    $.push({
      id: b,
      value: b
    });
  return (() => {
    const b = Ma(), f = b.firstChild;
    return b.addEventListener("mouseleave", s), g(b, u(p, {
      each: $,
      children: (_, v) => u(Ea, {
        get index() {
          return v();
        },
        onMouseEnterHalf: d,
        onClickHalfStar: h,
        onMouseEnter: a,
        onClickStar: o,
        get icon() {
          return e.icon;
        },
        allowHalf: c,
        current: [i, r]
      })
    }), f), g(f, () => e.children), P((_) => {
      const v = e.style, S = t();
      return _._v$ = Y(b, v, _._v$), _._v$2 = B(b, S, _._v$2), _;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), b;
  })();
}
const Ta = /* @__PURE__ */ C("<li>");
function Ra(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-group-wrap": e.data.group,
    "cm-select-option-active": e.checked,
    "cm-select-option-disabled": e.data.disabled
  }), n = () => {
    e.disabled || e.onClick && e.onClick(l);
  }, l = e.data[e.valueField];
  return u(V, {
    get when() {
      return e.visible;
    },
    fallback: null,
    get children() {
      const i = Ta();
      i.$$click = n;
      const r = e.ref;
      return typeof r == "function" ? X(r, i) : e.ref = i, g(i, (() => {
        const c = G(() => !!e.renderOption);
        return () => c() ? e.renderOption(e.data) : e.data[e.textField];
      })()), P((c) => {
        const a = t(), d = e.style;
        return c._v$ = B(i, a, c._v$), c._v$2 = Y(i, d, c._v$2), c;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), i;
    }
  });
}
J(["click"]);
const za = /* @__PURE__ */ C("<li>");
function Pa(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-option-active": e.checked
  }), n = e.data.value;
  return (() => {
    const l = za();
    return l.$$click = () => e.onClick && e.onClick(n), g(l, () => e.data.label), P((i) => {
      const r = t(), c = e.style;
      return i._v$ = B(l, r, i._v$), i._v$2 = Y(l, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
J(["click"]);
function Aa(e) {
  return e;
}
function Of(e) {
  e.group = !0;
  const t = Me(() => e.children), n = () => t.toArray();
  return e.items = n(), e;
}
const Ia = /* @__PURE__ */ C("<div>"), Fa = /* @__PURE__ */ C('<ul class="cm-select-option-list">'), Oa = /* @__PURE__ */ C('<div class="cm-select-options-wrap"><div class="cm-select-options">'), Na = /* @__PURE__ */ C('<div class="cm-select-loading">加载中');
function ti(e) {
  let t;
  const n = e.textField || "label", l = e.valueField || "value", [i, r] = j(!1), c = e.align ?? "bottomLeft", a = Me(() => e.children), d = () => a.toArray(), [s, o] = de(e, e.multi ? [] : "");
  let h = [];
  e.filter && e.defaultLabel && (e.multi && e.defaultLabel instanceof Array ? e.defaultLabel.forEach((z, T) => {
    h.push({
      [l]: s()[T],
      [n]: z
    });
  }) : h = [{
    [l]: s(),
    [n]: e.defaultLabel
  }]);
  let m = !0;
  const [$, b] = j(e.filter && e.multi ? "" : e.defaultLabel);
  queueMicrotask(() => {
    m = !1;
  });
  const [f, _] = j(h);
  let v = null;
  const S = () => q(e, "cm-select", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && `${s()}`.length !== 0,
    "cm-select-multi": e.multi,
    "cm-select-open": i(),
    "cm-select-with-prefix": e.prefix
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let k = {};
  function w(z, T) {
    z && z.forEach((O) => {
      T.push(O), O._show = !0, k[O[l]] = O, O.items && w(O.items, T);
    });
  }
  const M = gt(() => {
    const z = d();
    k = {};
    const T = [];
    return e.emptyOption && T.push({
      [l]: "",
      [n]: e.emptyOption,
      _show: !0,
      emptyOption: !0
    }), h && h.forEach((O) => {
      T.push({
        ...O,
        _show: !0
      });
    }), z && w(z, T), T;
  }), [A, L] = re({
    list: []
  });
  K(() => {
    const z = xe(() => s());
    L("list", M()), L("list", (T) => T, ie((T) => {
      e.multi ? T._checked = z.includes(T[l]) : T._checked = z === T[l];
    }));
  }), K(() => {
    const z = s();
    L("list", (T) => T, ie((T) => {
      e.multi ? T._checked = z.includes(T[l]) : T._checked = z === T[l];
    }));
  });
  const y = (z, T) => {
    if (k[z] && k[z].items && k[z].items.length)
      return;
    let O = f();
    if (e.multi) {
      let N = s();
      const I = N.indexOf(z);
      I > -1 ? (N.splice(I, 1), O.splice(I, 1)) : (N = [...N], N.push(z), O.push(T)), o([...N]), b(""), _([...O]), e.onChange && e.onChange(N, T);
    } else
      m = !0, O = [T], o(z), b(T[n]), _([...O]), Promise.resolve().then(() => {
        m = !1;
      }), r(!1), e.onChange && e.onChange(z, T);
  }, x = () => {
    const z = [];
    return f().map((O) => {
      z.push({
        id: O[l],
        title: O[n]
      });
    }), e.multi ? z.length ? z : e.emptyOption ? [{
      id: "",
      title: e.emptyOption
    }] : [] : z.length ? z[0].title : e.emptyOption ? e.emptyOption : "";
  }, E = (z) => {
    _([]), e.multi ? (e.onChange && e.onChange([]), o([])) : (e.onChange && e.onChange(""), o(""), b(""), r(!1));
  };
  K(() => {
    const z = $();
    m || (e.remoteMethod ? z && (h = [], clearTimeout(v), v = setTimeout(() => {
      e.remoteMethod?.(z), r(!0);
    }, e.debounceTime || 300)) : L("list", (T) => T, ie((T) => {
      T._show = T[n].indexOf(z) > -1;
    })));
  }), K(() => {
    if (!i() && e.filter)
      if (e.multi)
        b("");
      else {
        const z = xe(() => f()), T = xe(() => $());
        z.length && z[0][n] !== T && (m = !0, b(z[0][n]), queueMicrotask(() => {
          m = !1;
        }));
      }
  });
  const F = (z, T) => {
    if (e.multi) {
      const O = f(), N = s(), I = N.indexOf(z.id);
      I > -1 && (N.splice(I, 1), O.splice(I, 1)), o([...N]), _([...O]), e.onChange && e.onChange(N);
    }
  }, R = () => {
    if (e.multi) {
      const z = f(), T = s();
      T.length > 0 && (T.pop(), z.pop(), o([...T]), _([...z]), e.onChange && e.onChange(T));
    }
  }, D = gt(() => A.list.filter((z) => z._show));
  return (() => {
    const z = Ia(), T = t;
    return typeof T == "function" ? X(T, z) : t = z, g(z, u(Te, {
      get transfer() {
        return e.transfer;
      },
      fixWidth: !0,
      align: c,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [i, r],
      get menu() {
        return (() => {
          const O = Oa(), N = O.firstChild;
          return g(N, u(V, {
            get when() {
              return !e.loading;
            },
            get fallback() {
              return Na();
            },
            get children() {
              const I = Fa();
              return g(I, u(_i, {
                get items() {
                  return D();
                },
                itemEstimatedSize: 30,
                maxHeight: 200,
                children: (U) => {
                  const H = U.item;
                  return H.emptyOption ? u(Pa, {
                    visible: !0,
                    get data() {
                      return {
                        label: H[n],
                        value: ""
                      };
                    },
                    get checked() {
                      return s() === "";
                    },
                    onClick: E
                  }) : u(Ra, {
                    ref(oe) {
                      const ye = U.ref;
                      typeof ye == "function" ? ye(oe) : U.ref = oe;
                    },
                    get renderOption() {
                      return U.renderOption;
                    },
                    get visible() {
                      return H._show;
                    },
                    get disabled() {
                      return H.disabled;
                    },
                    data: H,
                    get checked() {
                      return H._checked;
                    },
                    textField: n,
                    valueField: l,
                    onClick: (oe) => y(oe, H)
                  });
                }
              })), I;
            }
          })), P(() => (e.maxHeight ? `${e.maxHeight}px` : "") != null ? N.style.setProperty("max-height", e.maxHeight ? `${e.maxHeight}px` : "") : N.style.removeProperty("max-height")), O;
        })();
      },
      get children() {
        return u(je, {
          get text() {
            return x();
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
          onClear: E,
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
            return u(W, {
              name: "chevron-down",
              class: "cm-select-cert"
            });
          },
          onClose: F,
          query: [$, b],
          get filter() {
            return e.filter;
          },
          onDeleteLastValue: R
        });
      }
    })), P((O) => {
      const N = S(), I = e.style;
      return O._v$ = B(z, N, O._v$), O._v$2 = Y(z, I, O._v$2), O;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), z;
  })();
}
const Ba = /* @__PURE__ */ C("<div><em>");
function _n(e, t) {
  if (!t)
    return !1;
  const n = $t(new Date(e[0])), l = $t(new Date(e[1]));
  return n ? e.length === 1 && n.getTime() === t.getTime() || e.length === 2 && n.getTime() <= t.getTime() && l.getTime() >= t.getTime() : !1;
}
function yn(e, t) {
  return "" + e.getFullYear() + e.getMonth() + e.getDate() == "" + t.getFullYear() + t.getMonth() + t.getDate();
}
function Va(e, t) {
  return "" + e.getFullYear() + e.getMonth() == "" + t.getFullYear() + t.getMonth();
}
function Ya(e) {
  const t = lt(), n = $t(/* @__PURE__ */ new Date()), l = e.day ? n.toLocaleDateString() === e.day.toLocaleDateString() : !1, i = () => e.type === "dateRange" || e.type === "dateTimeRange" ? !1 : e.value && e.value instanceof Date && e.day ? e.value.toLocaleDateString() === e.day.toLocaleDateString() : !1;
  let r = e.day && t && t.disabledDate && t.disabledDate(e.day);
  e.month && e.day && Va(e.month, e.day) || (r = !0);
  const c = () => e.range && e.day ? _n(e.range, e.day) : !1, a = () => e.range && e.range[0] && e.day && yn(e.range[0], e.day), d = () => e.range && e.range[1] && e.day && yn(e.range[1], e.day), s = () => {
    const $ = e.range && e.range.length === 1 && e.hoverDate ? [e.hoverDate, e.range[0]] : [];
    return $.length === 2 && $.sort((b, f) => b.getTime() - f.getTime()), $ && e.day ? _n($, e.day) : !1;
  }, o = () => ({
    "cm-date-picker-day": !0,
    "cm-date-picker-empty": !e.day,
    "cm-date-picker-today": l,
    "cm-date-picker-active": i(),
    "cm-date-picker-inrange": !r && c(),
    "cm-date-picker-inhover": !r && s(),
    "cm-date-picker-first-range": a(),
    "cm-date-picker-last-range": d(),
    "cm-date-picker-day-disabled": r
  }), h = () => {
    e.day && t && t.onSelectDate(e.day, e.name);
  }, m = () => {
    e.day && t && t.onMouseOver(e.day);
  };
  return (() => {
    const $ = Ba(), b = $.firstChild;
    return $.$$mouseover = m, $.$$click = h, g(b, (() => {
      const f = G(() => !!e.day);
      return () => f() ? e.day.getDate() : "";
    })()), P((f) => B($, o(), f)), $;
  })();
}
J(["click", "mouseover"]);
const qa = /* @__PURE__ */ C('<div class="cm-month-picker-cell"><ul>'), Ha = /* @__PURE__ */ C("<li>");
function wn(e) {
  const t = lt(), n = (i, r) => {
    r || e.onSelect && e.onSelect(e.type, i);
  };
  let l;
  return K(() => {
    if (l && t?.visible()) {
      const i = e.data[0], r = e.value ? e.value : e.type === "year" ? (/* @__PURE__ */ new Date()).getFullYear() : (/* @__PURE__ */ new Date()).getMonth() + 1;
      l.scrollTop = 26 * (r - i);
    }
  }), (() => {
    const i = qa(), r = i.firstChild, c = l;
    return typeof c == "function" ? X(c, i) : l = i, g(r, u(p, {
      get each() {
        return e.data;
      },
      children: (a) => {
        const d = () => {
          let o = !1;
          const h = new Date(e.day);
          return e.type === "year" && (h.setFullYear(a), h.setMonth(1), h.setDate(1), o = t && t.disabledDate && t.disabledDate(h)), e.type === "month" && (h.setMonth(a - 1), o = t && t.disabledDate && t.disabledDate(h)), o;
        }, s = () => ({
          "cm-month-picker-item": !0,
          "cm-month-picker-item-active": e.value === a,
          "cm-month-picker-item-disabled": d()
        });
        return (() => {
          const o = Ha();
          return o.$$click = () => {
            n(a, d());
          }, g(o, a), P((h) => B(o, s(), h)), o;
        })();
      }
    })), i;
  })();
}
J(["click"]);
const Ua = /* @__PURE__ */ C('<div class="cm-date-picker-month-header">'), ja = /* @__PURE__ */ C('<div class="cm-date-picker-month"><div class="cm-date-picker-month-body">');
function vt(e) {
  const [t, n] = e.store, l = lt(), i = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const o = e.name === "end" ? 1 : 0;
      return t.currentMonth[o] && t.currentMonth[o].getFullYear && t.currentMonth[o].getFullYear();
    } else
      return e.value && e.value.getFullYear && e.value.getFullYear();
  }, r = () => {
    const o = [];
    let h = (/* @__PURE__ */ new Date()).getFullYear();
    h = h - 60;
    for (let m = 0; m < 100; m++)
      o.push(h + m);
    return o;
  }, c = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat([]), a = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const o = e.name === "end" ? 1 : 0;
      return t.currentMonth[o] && t.currentMonth[o].getMonth && t.currentMonth[o].getMonth() + 1;
    } else
      return e.value && e.value.getMonth && e.value.getMonth() + 1;
  }, d = (o, h) => {
    const m = e.name === "end" ? 1 : 0, $ = new Date(t.currentMonth[m]);
    if (o === "year" && $.setFullYear(h), o === "month" && $.setMonth(h - 1), e.onMonthChange) {
      e.onMonthChange($, o, e.name);
      return;
    }
    n("currentMonth", e.name === "end" ? [t.currentMonth[0], $] : [$, t.currentMonth[1]]), e.type !== "dateRange" && e.type !== "date" && l && l.onSelectDate && l.onSelectDate($, e.name);
  }, s = () => {
    e.onBack && e.onBack();
  };
  return (() => {
    const o = ja(), h = o.firstChild;
    return g(o, u(V, {
      get when() {
        return e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange";
      },
      get children() {
        const m = Ua();
        return g(m, u(ke, {
          type: "text",
          onClick: s,
          ghost: !0,
          get icon() {
            return u(W, {
              name: "chevron-left",
              size: 16
            });
          },
          children: "返回选择日期"
        })), m;
      }
    }), h), g(h, u(wn, {
      get data() {
        return r();
      },
      get value() {
        return i();
      },
      get day() {
        return t.currentMonth[0];
      },
      type: "year",
      onSelect: d
    }), null), g(h, u(wn, {
      get data() {
        return c();
      },
      get value() {
        return a();
      },
      get day() {
        return t.currentMonth[0];
      },
      type: "month",
      onSelect: d
    }), null), o;
  })();
}
const Xa = /* @__PURE__ */ C('<div class="cm-date-picker-date-inner"><div class="cm-date-picker-date-header"><div class="cm-date-picker-header-arrow"></div><div class="cm-date-picker-header-arrow"></div><span class="cm-date-picker-date-info"></span><div class="cm-date-picker-header-arrow"></div><div class="cm-date-picker-header-arrow"></div></div><div class="cm-date-picker-date-body"><div class="cm-date-picker-week-line"></div><div class="cm-date-picker-date-days"></div></div><div class="cm-date-picker-date-footer">'), Wa = /* @__PURE__ */ C('<div class="cm-date-picker-date">'), Ka = /* @__PURE__ */ C("<div>"), Ga = ["日", "一", "二", "三", "四", "五", "六"];
function $t(e) {
  return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e;
}
const ut = (e, t, n, l, i, r) => {
  const c = e.currentMonth[l === "end" ? 1 : 0];
  c[`set${n}`](c[`get${n}`]() + 1 * i);
  const a = [...e.currentMonth];
  if (r) {
    const d = a[l === "end" ? 0 : 1];
    d[`set${n}`](d[`get${n}`]() + 1 * i);
  } else if (te(a[0]).format("YYYY-MM") === te(a[1]).format("YYYY-MM") || a[0].getTime() > a[1].getTime()) {
    const d = a[l === "end" ? 0 : 1];
    d[`set${n}`](d[`get${n}`]() + 1 * i);
  }
  t("currentMonth", a);
};
function _t(e) {
  const [t, n] = e.store;
  e.type;
  const [l, i] = j("date"), r = () => {
    ut(t, n, "Month", e.name, 1, e.stick);
  }, c = () => {
    ut(t, n, "Month", e.name, -1, e.stick);
  }, a = () => {
    ut(t, n, "FullYear", e.name, -1, e.stick);
  }, d = () => {
    ut(t, n, "FullYear", e.name, 1, e.stick);
  }, s = () => {
    i("month");
  }, o = () => {
    i("date");
  }, h = (b, f, _) => {
    const v = t.currentMonth[_ === "end" ? 1 : 0];
    v.setFullYear(b.getFullYear()), v.setMonth(b.getMonth());
    const S = [...t.currentMonth], k = f === "year" ? "FullYear" : "Month";
    if (e.stick) {
      const w = new Date(v);
      w.setMonth(w.getMonth() + 1 * (_ === "end" ? -1 : 1)), S[_ === "end" ? 0 : 1] = w;
    } else if (te(S[0]).format("YYYY-MM") === te(S[1]).format("YYYY-MM") || S[0].getTime() > S[1].getTime()) {
      const w = S[_ === "end" ? 0 : 1];
      w[`set${k}`](w[`get${k}`]() + 1 * (_ === "end" ? -1 : 1));
    }
    n("currentMonth", S);
  }, m = () => {
    const b = [], f = $t(new Date(t.currentMonth[e.name === "end" ? 1 : 0]));
    f.setDate(1);
    const _ = new Date(f);
    _.setMonth(_.getMonth() + 1), _.setDate(0);
    const v = f.getDay() % 7, S = new Date(f);
    S.setDate(S.getDate() - v - 1);
    for (let w = 0; w < v; w++)
      b.push(new Date(S.setDate(S.getDate() + 1)));
    f.setDate(0);
    for (let w = 0; w < _.getDate(); w++)
      b.push(new Date(f.setDate(f.getDate() + 1)));
    let k = b[b.length - 1];
    k = new Date(k);
    for (let w = 0, M = 42 - b.length; w < M; w++)
      b.push(new Date(k.setDate(k.getDate() + 1)));
    return b;
  }, $ = () => te(t.currentMonth[e.name === "end" ? 1 : 0]).format("YYYY年MM月");
  return (() => {
    const b = Wa();
    return g(b, u(V, {
      get when() {
        return l() === "date";
      },
      get children() {
        const f = Xa(), _ = f.firstChild, v = _.firstChild, S = v.nextSibling, k = S.nextSibling, w = k.nextSibling, M = w.nextSibling, A = _.nextSibling, L = A.firstChild, y = L.nextSibling;
        return g(v, u(W, {
          name: "chevrons-left",
          onClick: a
        })), g(S, u(W, {
          name: "chevron-left",
          onClick: c
        })), k.$$click = s, g(k, $), g(w, u(W, {
          name: "chevron-right",
          onClick: r
        })), g(M, u(W, {
          name: "chevrons-right",
          onClick: d
        })), g(L, u(p, {
          each: Ga,
          children: (x) => (() => {
            const E = Ka();
            return g(E, x), E;
          })()
        })), g(y, u(p, {
          get each() {
            return m();
          },
          children: (x) => u(Ya, {
            get range() {
              return t.range;
            },
            get hoverDate() {
              return t.hoverDate;
            },
            get type() {
              return e.type;
            },
            day: x,
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
    }), null), g(b, u(V, {
      get when() {
        return l() === "month";
      },
      get children() {
        return u(vt, ne(e, {
          onBack: o,
          onMonthChange: h
        }));
      }
    }), null), b;
  })();
}
J(["click"]);
function Za(e) {
  const [t, n] = ae(e, ["value"]), l = () => t.value ? t.value[0] : "", i = () => t.value ? t.value[1] : "";
  return [u(vt, ne({
    name: "start"
  }, n, {
    get value() {
      return l();
    }
  })), u(vt, ne({
    name: "end"
  }, n, {
    get value() {
      return i();
    }
  }))];
}
function Ja(e) {
  const [t, n] = ae(e, ["value"]), l = () => t.value[0], i = () => t.value[1];
  return [u(_t, ne({
    name: "start",
    get value() {
      return l();
    }
  }, n)), u(_t, ne({
    name: "end",
    get value() {
      return i();
    }
  }, n))];
}
const Qa = /* @__PURE__ */ C('<div class="cm-date-picker-datetime"><div class="cm-datetime-content"></div><div class="cm-datetime-switch"><div class="cm-datetime-switch-item"></div><div class="cm-datetime-switch-item">');
function Yt(e) {
  const [t, n] = j("date"), l = lt(), i = () => e.store[0].currentMonth[e.name === "end" ? 1 : 0], r = () => te(e.value || /* @__PURE__ */ new Date()).format("YYYY-MM-DD"), c = () => te(i()).format("HH:mm:ss"), a = (s) => {
    n(s);
  }, d = (s, o, h) => {
    const m = new Date(i());
    s === "hour" && m.setHours(o), s === "minute" && m.setMinutes(o), s === "second" && m.setSeconds(o), l && l.onSelectTime(m, e.name);
  };
  return (() => {
    const s = Qa(), o = s.firstChild, h = o.nextSibling, m = h.firstChild, $ = m.nextSibling;
    return g(o, u(V, {
      get when() {
        return t() === "date";
      },
      get children() {
        return u(_t, e);
      }
    }), null), g(o, u(V, {
      get when() {
        return t() === "time";
      },
      get children() {
        return u(yt, ne(e, {
          header: "选择时间",
          get value() {
            return i();
          },
          onSelectTime: d
        }));
      }
    }), null), fe(m, "click", a.bind(null, "date"), !0), g(m, u(W, {
      name: "calendar1",
      size: 12
    }), null), g(m, r, null), fe($, "click", a.bind(null, "time"), !0), g($, u(W, {
      name: "clock",
      size: 12
    }), null), g($, c, null), P((b) => {
      const f = t() === "date", _ = t() === "time";
      return f !== b._v$ && m.classList.toggle("active", b._v$ = f), _ !== b._v$2 && $.classList.toggle("active", b._v$2 = _), b;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
J(["click"]);
function pa(e) {
  const [t, n] = ae(e, ["value"]), l = () => t.value && t.value[0], i = () => t.value && t.value[1];
  return [u(Yt, ne({
    name: "start",
    get value() {
      return l();
    }
  }, n)), u(Yt, ne({
    name: "end",
    get value() {
      return i();
    }
  }, n))];
}
const es = /* @__PURE__ */ C("<div>"), ts = /* @__PURE__ */ C('<div class="cm-date-picker-shortcuts">'), ns = /* @__PURE__ */ C('<div class="cm-date-picker-wrap">'), ni = me();
function is(e) {
  const [t, n] = j(!1), l = e.type ?? "date", [i, r] = de(e, "value", l === "dateRange" || l === "dateTimeRange" ? [] : ""), [c, a] = j();
  let d = e.format ?? "YYYY-MM-DD";
  (l === "month" || l === "monthRange") && (d = e.format ?? "YYYY-MM"), (l === "dateTime" || l === "dateTimeRange") && (d = e.format ?? "YYYY-MM-DD HH:mm:ss");
  const s = /* @__PURE__ */ new Date(), o = /* @__PURE__ */ new Date();
  o.setMonth(o.getMonth() + 1);
  const [h, m] = re({
    currentMonth: [s, o],
    range: [],
    hoverDate: void 0
  }), $ = e.align ?? "bottomLeft", b = e.seperator || "~";
  K(() => {
    let L = i();
    L && L instanceof Array && typeof L[0] == "function" && (L = L[0]());
    let y;
    if (L) {
      if (typeof L == "string")
        if (l === "dateRange" || l === "monthRange" || l === "dateTimeRange") {
          const x = L.split(b);
          L = [te(x[0]).toDate(), te(x[1]).toDate()];
          const E = new Date(L[0]), F = new Date(L[1]);
          te(E).format("YYYY-MM") === te(F).format("YYYY-MM") && F.setMonth(F.getMonth() + 1), y = [E, F];
        } else {
          L = te(L).toDate();
          const x = new Date(L), E = new Date(L);
          E.setMonth(E.getMonth() + 1), y = [x, E];
        }
      else {
        let x = /* @__PURE__ */ new Date(), E = /* @__PURE__ */ new Date();
        L instanceof Array && (typeof L[0] == "string" && (L[0] = te(L[0]).toDate()), typeof L[1] == "string" && (L[1] = te(L[1]).toDate()), x = L[0] === void 0 ? /* @__PURE__ */ new Date() : L[0] ? new Date(L[0]) : /* @__PURE__ */ new Date(), E = L[1] === void 0 ? /* @__PURE__ */ new Date() : L[1] ? new Date(L[1]) : /* @__PURE__ */ new Date()), l === "month" && L instanceof Date && (x = L, E = new Date(L)), te(x).format("YYYY-MM") === te(E).format("YYYY-MM") && E.setMonth(E.getMonth() + 1), y = [x, E];
      }
      (l === "dateRange" || l === "dateTimeRange") && m("range", L);
    } else
      y = [s, o];
    e.stick && (y[1] = new Date(y[0]), y[1].setMonth(y[1].getMonth() + 1)), y[0].setDate(1), y[1].setDate(1), m("currentMonth", y), a(L);
  });
  const f = () => q(e, "cm-date-picker", {
    [`cm-date-picker-${e.size}`]: e.size,
    "cm-date-picker-disabled": e.disabled,
    "cm-date-picker-clearable": !e.disabled && e.clearable && i() && i().length !== 0
  }), _ = () => {
    r(""), l === "dateRange" && m("range", []), e.onChange && e.onChange("");
  }, v = (L, y) => {
    const x = new Date(L);
    if ((l === "month" || l === "monthRange") && (x.setDate(1), x.setHours(0), x.setMinutes(0), x.setSeconds(0), x.setMilliseconds(0)), l === "dateTime" || l === "dateTimeRange") {
      let D = c();
      l === "dateTimeRange" ? D = D && D.length ? D[h.range.length === 1 ? 1 : 0] : h.currentMonth[h.range.length === 1 ? 1 : 0] : D = D || h.currentMonth[h.range.length === 1 ? 1 : 0], x.setHours(D.getHours()), x.setMinutes(D.getMinutes()), x.setSeconds(D.getSeconds());
    }
    const E = /* @__PURE__ */ new Date(), F = c() || (l === "monthRange" || l === "dateRange" || l === "dateTimeRange" ? [E, E] : E);
    (l === "dateRange" || l === "dateTimeRange") && !F.length && (F.push(E), F.push(E));
    let R;
    if (y === "start" ? R = [x, F[1]] : y === "end" ? R = [F[0], x] : R = x, R instanceof Array && R[0].getTime() > R[1].getTime() && R.reverse(), l === "dateRange" || l === "dateTimeRange") {
      const D = h.range;
      let z = [];
      if ((D[0] && D[1] || !D[0] && !D[1]) && (z = [x], m("hoverDate", new Date(x))), D[0] && !D[1]) {
        if (w(D[0], x))
          return;
        if (z = [D[0], x], z[0].getTime() > z[1].getTime()) {
          z.reverse();
          const T = /* @__PURE__ */ new Date();
          S(T, h.currentMonth[0]), S(h.currentMonth[0], h.currentMonth[1]), S(h.currentMonth[1], T), m("currentMonth", [...h.currentMonth]);
        }
        r(z), l === "dateRange" && n(!1);
      }
      m("range", z);
      return;
    }
    r(R), e.onChange && e.onChange(R), l === "date" && n(!1);
  }, S = (L, y) => {
    L.setHours(y.getHours()), L.setMinutes(y.getMinutes()), L.setSeconds(y.getSeconds());
  }, k = (L, y) => {
    let x = c(), E;
    y === "start" ? (E = h.currentMonth[0], x && x[0] ? (S(x[0], L), x[0].getTime() > x[1].getTime() ? (x.reverse(), S(h.currentMonth[0], x[0]), S(h.currentMonth[1], x[1])) : S(E, L), r([...x])) : S(E, L)) : y === "end" ? (E = h.currentMonth[1], x && x[1] ? (S(x[1], L), x[0].getTime() > x[1].getTime() ? (x.reverse(), S(h.currentMonth[0], x[0]), S(h.currentMonth[1], x[1])) : S(E, L), r([...x])) : S(E, L)) : (x || (x = /* @__PURE__ */ new Date()), S(x, L), E = h.currentMonth[0], S(E, L), r(new Date(x))), m("currentMonth", [...h.currentMonth]);
  }, w = (L, y) => {
    if (e.maxRange) {
      const x = L.getTime() - y.getTime();
      if (Math.abs(x / 1e3 / 60 / 60 / 24) > e.maxRange - 1)
        return !0;
    }
    return !1;
  }, M = (L) => {
    if (h.range && h.range[0]) {
      if (w(h.range[0], L) && e.maxRange) {
        const y = new Date(h.range[0]), x = L.getTime() > h.range[0].getTime() ? 1 : -1;
        y.setDate(y.getDate() + (e.maxRange - 1) * x), m("hoverDate", y);
        return;
      }
      m("hoverDate", new Date(L));
    }
  }, A = gt(() => {
    const L = c();
    return L ? typeof L == "string" ? L : l === "dateRange" || l === "monthRange" || l === "dateTimeRange" ? L[0] ? [te(L[0]).format(d), te(L[1]).format(d)].join(b) : "" : te(L).format(d) : "";
  });
  return u(ni.Provider, {
    get value() {
      return {
        onSelectDate: v,
        onMouseOver: M,
        disabledDate: e.disabledDate,
        onSelectTime: k,
        visible: t
      };
    },
    get children() {
      const L = es();
      return g(L, u(Te, {
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
            const y = ns();
            return g(y, u(V, {
              get when() {
                return e.shortCuts;
              },
              get children() {
                const x = ts();
                return g(x, (() => {
                  const E = G(() => typeof e.shortCuts == "function");
                  return () => E() ? e.shortCuts() : e.shortCuts;
                })()), x;
              }
            }), null), g(y, u(Le, {
              get children() {
                return [u(Q, {
                  when: l === "date",
                  get children() {
                    return u(_t, {
                      store: [h, m],
                      get stick() {
                        return e.stick;
                      },
                      type: l,
                      get value() {
                        return c();
                      }
                    });
                  }
                }), u(Q, {
                  when: l === "month",
                  get children() {
                    return u(vt, {
                      store: [h, m],
                      type: l,
                      get value() {
                        return c();
                      }
                    });
                  }
                }), u(Q, {
                  when: l === "monthRange",
                  get children() {
                    return u(Za, {
                      store: [h, m],
                      type: l,
                      get value() {
                        return c();
                      }
                    });
                  }
                }), u(Q, {
                  when: l === "dateRange",
                  get children() {
                    return u(Ja, {
                      store: [h, m],
                      get stick() {
                        return e.stick;
                      },
                      get value() {
                        return c();
                      },
                      type: l
                    });
                  }
                }), u(Q, {
                  when: l === "dateTime",
                  get children() {
                    return u(Yt, {
                      store: [h, m],
                      get stick() {
                        return e.stick;
                      },
                      type: l,
                      get value() {
                        return c();
                      },
                      format: d
                    });
                  }
                }), u(Q, {
                  when: l === "dateTimeRange",
                  get children() {
                    return u(pa, {
                      store: [h, m],
                      get stick() {
                        return e.stick;
                      },
                      type: l,
                      get value() {
                        return c();
                      },
                      format: d
                    });
                  }
                })];
              }
            }), null), y;
          })();
        },
        get children() {
          return u(V, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return G(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return u(je, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return A();
                },
                onClear: _,
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
                  return u(W, {
                    name: "calendar1"
                  });
                }
              });
            }
          });
        }
      })), P((y) => {
        const x = f(), E = e.style;
        return y._v$ = B(L, x, y._v$), y._v$2 = Y(L, E, y._v$2), y;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), L;
    }
  });
}
const lt = () => ge(ni), rs = /* @__PURE__ */ C('<div class="cm-time-picker-cell"><ul>'), ls = /* @__PURE__ */ C("<li>");
function Mt(e) {
  const t = [];
  for (let c = 0; c < e.max; )
    t.push(c), c += e.step || 1;
  const n = hs(), l = lt(), i = (c, a) => {
    a || (n && n.onSelect(e.type, c, e.name), e.onSelectTime && e.onSelectTime(e.type, c, e.name));
  };
  let r;
  return K(() => {
    const c = n?.visible(), a = l?.visible();
    r && (c || a) && (r.scrollTop = 26 * (e.value / (e.step || 1)));
  }), (() => {
    const c = rs(), a = c.firstChild, d = r;
    return typeof d == "function" ? X(d, c) : r = c, g(a, u(p, {
      each: t,
      children: (s) => {
        const o = n && n.disabledTime && n.disabledTime(s, e.type), h = () => ({
          "cm-time-picker-item": !0,
          "cm-time-picker-item-active": e.value === s,
          "cm-time-picker-item-disabled": o
        });
        return (() => {
          const m = ls();
          return fe(m, "click", i.bind(null, s, o), !0), g(m, s), P(($) => B(m, h(), $)), m;
        })();
      }
    })), c;
  })();
}
J(["click"]);
const cs = /* @__PURE__ */ C('<div class="cm-time-picker-header">'), as = /* @__PURE__ */ C('<div class="cm-time-picker-footer">'), ss = /* @__PURE__ */ C('<div class="cm-time-picker-pane"><div class="cm-time-picker-options">');
function yt(e) {
  const t = () => e.value && e.value.getHours && e.value.getHours(), n = () => e.value && e.value.getMinutes && e.value.getMinutes(), l = () => e.value && e.value.getSeconds && e.value.getSeconds(), i = () => e.format.indexOf("H") > -1, r = () => e.format.indexOf("m") > -1, c = () => e.format.indexOf("s") > -1;
  return (() => {
    const a = ss(), d = a.firstChild;
    return g(a, u(V, {
      get when() {
        return e.header;
      },
      get children() {
        const s = cs();
        return g(s, () => e.header), s;
      }
    }), d), g(d, u(V, {
      get when() {
        return i();
      },
      get children() {
        return u(Mt, {
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
    }), null), g(d, u(V, {
      get when() {
        return r();
      },
      get children() {
        return u(Mt, {
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
    }), null), g(d, u(V, {
      get when() {
        return c();
      },
      get children() {
        return u(Mt, {
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
    }), null), g(a, u(V, {
      get when() {
        return e.footer;
      },
      get children() {
        const s = as();
        return g(s, () => e.footer), s;
      }
    }), null), a;
  })();
}
function os(e) {
  const [t, n] = ae(e, ["header", "footer", "value"]), l = () => t.value[0], i = () => t.value[1];
  return [u(yt, ne({
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
  })), u(yt, ne({
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
const ds = /* @__PURE__ */ C('<div tabindex="1">'), us = /* @__PURE__ */ C('<div class="cm-time-picker-wrap">'), ii = me();
function fs(e) {
  const [t, n] = de(e, e.type === "timeRange" ? [] : ""), [l, i] = j(t()), [r, c] = j(!1), a = e.align ?? "bottomLeft", d = e.format ?? "HH:mm:ss", s = e.seperator || "~", o = e.header ?? (e.type === "timeRange" ? ["开始时间", "结束时间"] : void 0), h = () => q(e, "cm-time-picker", {
    "cm-time-picker-disabled": e.disabled,
    [`cm-time-picker-${e.theme}`]: e.theme,
    [`cm-time-picker-${e.size}`]: e.size,
    "cm-time-picker-clearable": !e.disabled && e.clearable && t() !== "" && t().length !== 0,
    "cm-time-picker-open": open
  });
  K(() => {
    let f = t();
    if (f)
      if (typeof f == "string")
        if (e.type === "timeRange") {
          const _ = f.split(s);
          f = [te(te().format("YYYY-MM-DD ") + _[0]).toDate(), te(te().format("YYYY-MM-DD ") + _[1]).toDate()];
        } else
          f = te(te().format("YYYY-MM-DD ") + f).toDate();
      else
        f instanceof Array && f[0] && typeof f[0] == "string" && (f = [te(te().format("YYYY-MM-DD ") + f[0]).toDate(), te(te().format("YYYY-MM-DD ") + f[1]).toDate()]);
    i(f);
  });
  const m = (f, _, v) => {
    const S = /* @__PURE__ */ new Date(), k = l() || (e.type === "timeRange" ? [S, S] : S);
    e.type === "timeRange" && !k.length && (k.push(S), k.push(S));
    let w;
    if (v === "start" ? w = k[0] : v === "end" ? w = k[1] : w = k, f === "hour" && w.setHours(_), f === "minute" && w.setMinutes(_), f === "second" && w.setSeconds(_), e.type === "timeRange") {
      let M = [];
      v === "start" && (M = [new Date(w), k[1]]), v === "end" && (M = [k[0], new Date(w)]), M[0].getTime() > M[1].getTime() && (M = [M[1], M[0]]), n(M), e.onChange && e.onChange(M);
    } else {
      const M = new Date(w);
      n(M), e.onChange && e.onChange(M);
    }
  }, $ = () => {
    n(""), e.onChange && e.onChange("");
  }, b = () => {
    const f = l();
    return f ? typeof f == "string" ? f : e.type === "timeRange" ? f.length ? typeof f[0] == "string" ? f.join(s) : [te(f[0]).format(d), te(f[1]).format(d)].join(s) : "" : te(f).format(d) : "";
  };
  return u(ii.Provider, {
    get value() {
      return {
        onSelect: m,
        disabledTime: e.disabledTime,
        visible: r
      };
    },
    get children() {
      const f = ds();
      return Z(f, "x-placement", a), g(f, u(Te, {
        get transfer() {
          return e.transfer;
        },
        align: a,
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        visible: [r, c],
        get menu() {
          return (() => {
            const _ = us();
            return g(_, u(V, {
              get when() {
                return e.type === "timeRange";
              },
              get fallback() {
                return u(yt, {
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
                return u(os, {
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
            })), _;
          })();
        },
        get children() {
          return u(V, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return G(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return u(je, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return b();
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
                  return u(W, {
                    name: "clock"
                  });
                }
              });
            }
          });
        }
      })), P((_) => B(f, h(), _)), f;
    }
  });
}
const hs = () => ge(ii), ms = /* @__PURE__ */ C('<div class="cm-slider-handle" tabindex="0">'), gs = /* @__PURE__ */ C('<div class="cm-slider-handle" tabindex="1">'), vs = /* @__PURE__ */ C('<div class="cm-slider-marks">'), $s = /* @__PURE__ */ C('<div><div class="cm-slider-rail"></div><div class="cm-slider-track"></div><div class="cm-slider-steps">'), _s = /* @__PURE__ */ C("<span>"), ys = /* @__PURE__ */ C('<span class="cm-slider-mark">');
function ws(e) {
  let t, n, l, i, r;
  const c = e.min ?? 0, a = e.max ?? 100, d = e.step ?? 1, s = e.range ?? !1, [o, h] = de(e, s ? [0, 0] : 0), m = () => q(e, "cm-slider", {
    "cm-slider-disabled": e.disabled
  }), $ = () => t.getBoundingClientRect().width / (a - c) * d, b = () => {
    const y = s ? o() : [c, o()], x = Math.abs(y[1] - y[0]) / (a - c) * 100, E = (y[0] - c) / (a - c) * 100, F = (y[1] - c) / (a - c) * 100;
    return {
      left: E,
      width: x,
      right: F
    };
  }, f = () => {
    const y = b();
    return {
      left: y.left + "%",
      width: y.width + "%"
    };
  }, _ = () => {
    const y = s ? o()[0] : o();
    return e.tipFormatter ? e.tipFormatter(y) : y;
  }, v = () => e.tipFormatter ? e.tipFormatter(o()[1]) : o()[1];
  K(() => {
    const y = b(), x = t.getBoundingClientRect(), E = s ? x.width * y.left / 100 : x.width * y.right / 100, F = s ? x.width * (y.left + y.width) / 100 : 0;
    n && n.setPosition({
      x: E,
      y: 0
    }), l && l.setPosition({
      x: F,
      y: 0
    });
  });
  const S = (y) => {
    let x;
    try {
      x = d.toString().split(".")[1].length;
    } catch {
      x = 0;
    }
    const E = Math.pow(10, x);
    return Math.round(y * E) / E;
  }, k = (y, x) => {
    const F = t.getBoundingClientRect().width, R = S(x.x / F * (a - c) + c);
    if (setTimeout(() => {
      i && i.updatePosition();
    }), s && R > o()[1])
      return !1;
    const D = s ? [R, Math.max(R, o()[1])] : R;
    h(D), e.onChange && e.onChange(D);
  }, w = (y, x) => {
    const F = t.getBoundingClientRect().width, R = S(x.x / F * (a - c) + c);
    if (setTimeout(() => {
      r && r.updatePosition();
    }), s && R < o()[0])
      return !1;
    const D = s ? [Math.min(o()[0], R), R] : R;
    h(D), e.onChange && e.onChange(D);
  }, M = (y) => {
    if (e.disabled || y.target.classList.contains("cm-slider-handle"))
      return;
    const x = y.target.closest(".cm-slider");
    if (!x)
      return;
    const E = x.getBoundingClientRect(), F = y.pageX - E.left, D = t.getBoundingClientRect().width, z = S(Math.round(F / D * (a - c) / d + c) * d);
    let T = o();
    s ? (T = Math.abs(T[1] - z) > Math.abs(T[0] - z) ? [z, T[1]] : [T[0], z], h(T), e.onChange && e.onChange(T)) : (h(z), e.onChange && e.onChange(z));
  }, A = () => {
    if (!e.marks)
      return [];
    const y = [];
    for (let x = c; x <= a; x += d)
      e.marks[x] && y.push(x);
    return y;
  }, L = () => {
    if (e.marks) {
      const y = [];
      for (const x in e.marks)
        y.push({
          step: parseFloat(x),
          label: e.marks[x]
        });
      return y;
    }
    return [];
  };
  return (() => {
    const y = $s(), x = y.firstChild, E = x.nextSibling, F = E.nextSibling;
    y.$$mousedown = M;
    const R = t;
    return typeof R == "function" ? X(R, x) : t = x, g(F, u(p, {
      get each() {
        return A();
      },
      children: (D) => {
        const z = s ? o() : [c, o()], T = D >= z[0] && D <= z[1], O = () => ({
          "cm-slider-step": !0,
          "cm-slider-step-active": T
        }), N = `${(D - c) / (a - c) * 100}%`;
        return (() => {
          const I = _s();
          return N != null ? I.style.setProperty("left", N) : I.style.removeProperty("left"), P((U) => B(I, O(), U)), I;
        })();
      }
    })), g(y, u(pe, {
      get disabled() {
        return e.disabled;
      },
      get content() {
        return _();
      },
      align: "top",
      ref(D) {
        const z = i;
        typeof z == "function" ? z(D) : i = D;
      },
      arrow: !0,
      get children() {
        return u(Rt, {
          axis: "x",
          get disabled() {
            return e.disabled;
          },
          ref(D) {
            const z = n;
            typeof z == "function" ? z(D) : n = D;
          },
          onDrag: k,
          bounds: "parent",
          class: "cm-slider-handle-drag",
          get grid() {
            return [$(), $()];
          },
          get children() {
            return ms();
          }
        });
      }
    }), null), g(y, u(V, {
      when: s,
      get children() {
        return u(pe, {
          get disabled() {
            return e.disabled;
          },
          get content() {
            return v();
          },
          align: "top",
          ref(D) {
            const z = r;
            typeof z == "function" ? z(D) : r = D;
          },
          arrow: !0,
          get children() {
            return u(Rt, {
              axis: "x",
              get disabled() {
                return e.disabled;
              },
              ref(D) {
                const z = l;
                typeof z == "function" ? z(D) : l = D;
              },
              onDrag: w,
              bounds: "parent",
              class: "cm-slider-handle-drag",
              get grid() {
                return [$(), $()];
              },
              get children() {
                return gs();
              }
            });
          }
        });
      }
    }), null), g(y, u(V, {
      get when() {
        return e.marks;
      },
      get children() {
        const D = vs();
        return g(D, u(p, {
          get each() {
            return L();
          },
          children: (z) => {
            const T = `${(z.step - c) / (a - c) * 100}%`;
            return (() => {
              const O = ys();
              return T != null ? O.style.setProperty("left", T) : O.style.removeProperty("left"), g(O, () => z.label), O;
            })();
          }
        })), D;
      }
    }), null), P((D) => {
      const z = m(), T = e.style, O = f();
      return D._v$ = B(y, z, D._v$), D._v$2 = Y(y, T, D._v$2), D._v$3 = Y(E, O, D._v$3), D;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), y;
  })();
}
J(["mousedown"]);
const ft = {
  // 只返回全选数据，包含父节点和子节点
  Full: 0,
  // 返回全部选中子节点和部分选中的父节点
  Half: 1,
  // 只返回选中子节点
  Child: 2,
  // 如果父节点下所有子节点全部选中，只返回父节点
  Shallow: 3
};
class bn {
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
    const i = [];
    return this.levels[l] = [], n.forEach((r) => {
      r._level = l, i.push(r.id), this.dataMap[r.id] = r;
      const c = {};
      if (this.links[r.id] = c, c.parent = t ? t.id : null, this.levels[l].push(r.id), r.children) {
        const a = this.initData(r, r.children, l + 1);
        c.children = a;
      }
    }), i;
  }
  initValue(t, n) {
    if (!this.data || !n)
      return 0;
    t || (t = this.levels[0]);
    let l;
    return t?.forEach((i) => {
      const r = this.links[i].children;
      let c = n.includes(i) ? 1 : 0;
      r && r.length > 0 && (this.checkRelation === "related" ? c = this.initValue(r, n) : this.initValue(r, n)), this.setValueMap(i, c), l === void 0 ? l = c : l !== c && (l = 2);
    }), l;
  }
  initDisabled(t, n) {
    t || (t = this.levels[0]), t?.forEach((l) => {
      const i = this.dataMap[l].disabled || n;
      this.dataMap[l].disabled = i;
      const r = this.links[l].children;
      r && r.length > 0 && this.initDisabled(r, i);
    });
  }
  setValue(t) {
    this.initValue(null, t);
  }
  setValueMap(t, n) {
    this.valueMap[t] = n;
  }
  getAllChecked() {
    const t = [];
    for (const n in this.valueMap)
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
    for (const l in this.valueMap) {
      const i = this.valueMap[l];
      switch (t) {
        case ft.Full:
          i === 1 && n.push(l);
          break;
        case ft.Half:
          i >= 1 && n.push(l);
          break;
        case ft.Child: {
          const r = this.links[l].children;
          i === 1 && (!r || r.length === 0) && n.push(l);
          break;
        }
        case ft.Shallow:
          i === 1 && ((() => {
            const c = this.links[l].parent;
            return c ? this.valueMap[c] === 1 : !1;
          })() || n.push(l));
          break;
      }
    }
    return n;
  }
  getAllCheckedData(t) {
    const n = [];
    return t.forEach((l) => {
      const i = this.dataMap[l];
      n.push(i);
    }), n;
  }
  getText(t) {
    const n = [];
    return t.forEach((l) => {
      const i = this.dataMap[l];
      n.push(i.title);
    }), n;
  }
  /**
   * 预先选择，返回被选择的节点
   * @param ids
   * @param direction
   */
  ifSets(t) {
    const n = {};
    t.forEach((i) => {
      this.ifSet(i, 1, "", n);
    });
    const l = [];
    for (const i in n)
      n[i] && l.push(i);
    return l;
  }
  ifSet(t, n, l, i) {
    this.isDisabled(t) || (i[t] = n);
    const {
      parent: r,
      children: c
    } = this.links[t];
    if (l !== "asc" && c && c.forEach((a) => {
      this.ifSet(a, n, "desc", i);
    }), l !== "desc" && r) {
      const a = r;
      let d = n;
      this.links[a].children.forEach((s) => {
        d !== i[s] && (d = 2);
      }), this.ifSet(a, d, "asc", i);
    }
  }
  set(t, n, l) {
    if (this.isDisabled(t) || this.setValueMap(t, n), this.checkRelation === "unRelated")
      return;
    const {
      parent: i,
      children: r
    } = this.links[t];
    if (l !== "asc" && r && r.forEach((c) => {
      this.set(c, n, "desc");
    }), l !== "desc" && i) {
      const c = i;
      let a = n;
      this.links[c].children.forEach((d) => {
        a !== this.valueMap[d] && (a = 2);
      }), this.set(c, a, "asc");
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
    this.dataMap[t] && n.forEach((c) => {
      this.dataMap[c.id] = c;
    });
    const i = this.links[t], r = n.map((c) => {
      const a = {};
      return this.links[c.id] = a, a.parent = t, c.id;
    });
    i.children = r;
  }
}
const bs = /* @__PURE__ */ C('<span class="cm-tree-item-folder">'), xs = /* @__PURE__ */ C('<span class="cm-tree-item-file">'), Cs = /* @__PURE__ */ C('<span class="cm-tree-item-icon">'), ks = /* @__PURE__ */ C('<li><div class="cm-tree-item-content"><span><span class="cm-tree-text">'), Ls = /* @__PURE__ */ C('<span><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3571" width="16" height="16"><path d="M323.731 93.334c14.331 0 27.677 5.512 37.657 15.529l365.34 365.99c1.337 1.306 2.38 2.417 3.234 3.607l2.16 2.723c10.653 10.703 15.888 23.296 15.888 36.627 0 13.571-5.351 26.26-15.053 35.73l-367.853 363.953c-9.951 9.813-23.238 15.222-37.401 15.222-13.848 0-26.931-5.25-36.832-14.769-9.841-9.549-15.507-22.867-15.506-36.518 0-13.484 5.365-26.259 15.134-35.969l331.846-328.283-336.081-336.964c-9.607-9.666-14.915-22.296-14.915-35.619 0-13.958 5.673-27.055 15.937-36.876 9.768-9.271 22.734-14.381 36.444-14.381z" p-id="3572">'), Ss = /* @__PURE__ */ C('<span class="cm-tree-patch">');
function Es(e) {
  const t = Ts(), [n, l] = j(!1), i = () => ({
    "padding-left": e.level * e.gutter + "px"
  }), r = () => e.store.dataMap[e.data.id]._opened, c = () => e.store.dataMap[e.data.id]._selected, a = () => ({
    "cm-tree-item": !0,
    "cm-tree-item-open": r(),
    "cm-tree-item-selected": c()
  }), d = () => {
    let f = e.directory ? m() ? bs() : xs() : null;
    return e.data.icon && (f = (() => {
      const _ = Cs();
      return g(_, () => e.data.icon), _;
    })()), f;
  }, s = () => {
    e.store.dataMap[e.data.id].disabled || t && t.onSelect && t.onSelect(e.data);
  }, o = async () => {
    if (t) {
      const f = e.store.dataMap[e.data.id];
      if (f.loading && t.loadData) {
        l(!0);
        try {
          const _ = await t.loadData(e.data);
          _ instanceof Array ? t.addChildren(f.id, e.data, _) : t.addChildren(f.id, e.data, [_]), t.cancelLoading(f.id);
        } catch {
        } finally {
          l(!1);
        }
      }
      t.onOpenClose(e.data.id);
    }
  }, h = (f) => {
    t && t.onChecked(e.data.id, f);
  }, m = () => e.data.children && e.data.children.length || e.data.loading, $ = () => {
    let f = 0;
    return f = e.store.checkedMap[e.data.id], f === 2 ? "indeterminate" : f === 1;
  }, b = (f) => {
    t && t.contextMenu && t.onContextMenu && t.onContextMenu({
      ...e.data
    });
  };
  return (() => {
    const f = ks(), _ = f.firstChild, v = _.firstChild, S = v.firstChild;
    return g(_, u(V, {
      get when() {
        return n();
      },
      get fallback() {
        return (() => {
          const k = Ls();
          return k.$$click = o, P(() => Re(k, `cm-tree-arrow ${m() ? "" : "hide"}`)), k;
        })();
      },
      get children() {
        return u(He, {
          color: "#1890ff",
          size: 16
        });
      }
    }), v), g(_, u(V, {
      get when() {
        return e.multi;
      },
      get children() {
        return u(ze, {
          get disabled() {
            return e.store.dataMap[e.data.id].disabled;
          },
          get checked() {
            return $();
          },
          onChange: h
        });
      }
    }), v), g(_, d, v), v.$$contextmenu = b, S.$$click = s, g(S, () => e.data.title), g(v, (() => {
      const k = G(() => !!e.data.patch);
      return () => k() ? (() => {
        const w = Ss();
        return g(w, () => e.data.patch), w;
      })() : null;
    })(), null), g(f, u(V, {
      get when() {
        return e.data.children && e.data.children.length;
      },
      get children() {
        return u(qt, {
          onSelect: s,
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
    }), null), P((k) => {
      const w = a(), M = i(), A = `cm-tree-title ${e.store.dataMap[e.data.id].disabled ? "disabled" : ""}`;
      return k._v$ = B(f, w, k._v$), k._v$2 = Y(_, M, k._v$2), A !== k._v$3 && Re(v, k._v$3 = A), k;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), f;
  })();
}
J(["contextmenu", "click"]);
const Ms = /* @__PURE__ */ C('<ul class="cm-tree-nodes">');
function qt(e) {
  return (() => {
    const t = Ms();
    return g(t, u(p, {
      get each() {
        return e.data;
      },
      children: (n) => u(Es, {
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
const xn = /* @__PURE__ */ C("<div>"), ri = me();
function Ds(e) {
  const t = () => q(e, "cm-tree"), [n, l] = he(e, "value", ""), [i, r] = he(e, "opened", []), [c, a] = he(e, "selected", ""), d = e.gutter ?? 24, s = e.checkRelation ?? "related";
  let o = new bn({
    value: n() || [],
    checkRelation: s,
    data: e.data
  });
  K(() => {
    o = new bn({
      value: [],
      checkRelation: s,
      data: e.data
    }), Oe(() => {
      m("data", e.data), m("dataMap", o.dataMap), m("selected", ""), m("openIds", []), m("checkedMap", {
        ...o.valueMap
      });
    }), xe(() => {
    });
  });
  const [h, m] = re({
    data: e.data,
    dataMap: o.dataMap,
    selected: "",
    openIds: [],
    checkedMap: {
      ...o.valueMap
    }
  }), $ = (L) => {
    const y = i();
    y.includes(L) || (y.push(L), r([...y]));
  }, b = (L) => {
    const y = i();
    if (y.includes(L)) {
      const x = y.indexOf(L);
      y.splice(x, 1), r(y);
    }
  }, f = (L, y) => {
    o.set(L, y ? 1 : 0, "");
    const x = o.getAllChecked();
    l(x);
  };
  K(() => {
    const L = i();
    xe(() => {
      h.openIds.forEach((y) => {
        L.includes(y) || m("dataMap", y, ie((x) => {
          x._opened && (x._opened = !1);
        }));
      });
    }), L.forEach((y) => {
      m("dataMap", y, ie((x) => {
        x._opened || (x._opened = !0);
      }));
    }), m("openIds", L.concat([]));
  }), K(() => {
    const L = c();
    m("dataMap", h.selected, ie((y) => {
      y._selected = !1;
    })), m("dataMap", L, ie((y) => {
      y._selected = !0;
    })), m("selected", L);
  }), K(() => {
    let L = n();
    e.multi && typeof L == "string" && (L = L.split(",")), o.setValue(L);
    const y = o.getAllChecked(), x = [];
    xe(() => {
      for (const E in h.checkedMap)
        h.checkedMap[E] && !L.includes(E) && x.push(E);
    }), x.forEach((E) => {
      m("checkedMap", E, o.valueMap[E]);
    }), y && y.forEach((E) => {
      m("checkedMap", E, o.valueMap[E]);
    });
  });
  const _ = (L) => {
    const y = i();
    if (y.includes(L)) {
      const x = y.indexOf(L);
      y.splice(x, 1);
    } else
      y.push(L);
    r([...y]);
  }, v = (L) => {
    a(L.id), e.onSelect && e.onSelect(L);
  }, S = (L) => {
    a(L);
  }, k = (L, y) => {
    o.set(L, y ? 1 : 0, "");
    const x = o.getAllChecked();
    l(x), e.onChange && e.onChange(x);
  }, w = (L, y, x) => {
    if (h.dataMap[L]) {
      o.addChildren(L, x), o.set(L, 0, "");
      const F = o.getAllChecked();
      l(F), m("dataMap", L, ie((R) => {
        R.children = [], setTimeout(() => {
          R.children = x;
        });
      })), m("dataMap", ie((R) => {
        x.map((D) => {
          R[D.id] = D;
        });
      }));
    }
  }, M = (L) => {
    m("dataMap", L, "loading", !1);
  }, A = () => h.dataMap[h.selected];
  return e.ref && e.ref({
    openNode: $,
    closeNode: b,
    checkNode: f,
    getAllChecked: () => o.getValue(0),
    getAllCheckedData: (L) => o.getAllCheckedData(L),
    getHalfChecked: () => o.getValue(1),
    getChildChecked: () => o.getValue(2),
    getShallowChecked: () => o.getValue(3),
    getText: (L) => o.getText(L),
    disabledNode: o.disabledNode,
    selectNode: S,
    getSelectNode: A,
    setValue: (L) => {
      l(L);
    },
    getIfSets: (L) => o.ifSets(L)
  }), u(ri.Provider, {
    get value() {
      return {
        signal: [h, m],
        onSelect: v,
        onOpenClose: _,
        onChecked: k,
        loadData: e.loadData,
        addChildren: w,
        cancelLoading: M,
        onContextMenu: e.onContextMenu,
        contextMenu: e.contextMenu
      };
    },
    get children() {
      return u(V, {
        get when() {
          return e.contextMenu;
        },
        get fallback() {
          return (() => {
            const L = xn();
            return g(L, u(qt, {
              store: h,
              get data() {
                return h.data;
              },
              level: 0,
              gutter: d,
              get multi() {
                return e.multi;
              },
              get directory() {
                return e.directory;
              }
            })), P((y) => B(L, t(), y)), L;
          })();
        },
        get children() {
          return u(Te, {
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
              const L = xn();
              return g(L, u(qt, {
                store: h,
                get data() {
                  return h.data;
                },
                level: 0,
                gutter: d,
                get multi() {
                  return e.multi;
                },
                get directory() {
                  return e.directory;
                }
              })), P((y) => B(L, t(), y)), L;
            }
          });
        }
      });
    }
  });
}
const Ts = () => ge(ri), Rs = /* @__PURE__ */ C('<div tabindex="1">'), zs = /* @__PURE__ */ C('<div class="cm-tree-select-wrap">'), Ps = {
  All: 0,
  Half: 1,
  Leaf: 2,
  Shallow: 3
};
function As(e) {
  const [t, n] = de(e, e.multi ? [] : ""), [l, i] = j(""), r = e.align ?? "bottomLeft";
  let c;
  const a = Ps[e.mode ?? "Half"], d = e.checkRelation ?? "related", s = () => q(e, "cm-tree-select", {
    "cm-tree-select-disabled": e.disabled,
    [`cm-tree-select-${e.size}`]: e.size
  }), o = (f) => {
    e.multi || e.onChange && e.onChange(f.id);
  }, h = (f) => {
    d === "related" ? (n(b()), e.onChange && e.onChange(b())) : (n(f), e.onChange && e.onChange(f));
  }, m = () => {
    const f = e.multi ? [] : "";
    n(f), e.onChange && e.onChange(f);
  }, $ = (f, _) => {
    const v = t();
    v.splice(v.indexOf(f.id), 1), n([...v]);
  }, b = () => {
    let f = [];
    switch (a) {
      case 0: {
        f = c.getAllChecked();
        break;
      }
      case 1: {
        f = c.getHalfChecked();
        break;
      }
      case 2: {
        f = c.getChildChecked();
        break;
      }
      case 3: {
        f = c.getShallowChecked();
        break;
      }
    }
    return f;
  };
  return K(() => {
    const f = t();
    e.multi && f.join(",") === b().join(",") || e.multi && (d === "unRelated" ? c.setValue(f) : (a === 0 && c.setValue(f), a === 1 && c.setValue(f), a === 2 && c.setValue(f), a === 3 && (f.join(",") === b().join(",") ? c.setValue(c.getAllChecked()) : c.setValue(c.getIfSets(f)))));
  }), gt(() => {
    let f = t();
    if (e.multi) {
      if (typeof f == "string") {
        f = f.split(","), n(f);
        return;
      }
      setTimeout(() => {
        const _ = d === "related" ? b() : c.getAllChecked(), v = c.getAllCheckedData(_);
        i(v);
      });
    } else
      setTimeout(() => {
        const _ = c.getSelectNode();
        i(_ ? _.title : "");
      });
  }), e.ref && e.ref({
    ...c
  }), (() => {
    const f = Rs();
    return g(f, u(Te, {
      get transfer() {
        return e.transfer;
      },
      fixWidth: !0,
      align: r,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      get menu() {
        return (() => {
          const _ = zs();
          return g(_, u(Ds, {
            get data() {
              return e.data;
            },
            get multi() {
              return e.multi;
            },
            onSelect: o,
            onChange: h,
            ref(v) {
              const S = c;
              typeof S == "function" ? S(v) : c = v;
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
          })), _;
        })();
      },
      get children() {
        return u(je, {
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
          onClear: m,
          get prepend() {
            return e.prepend;
          },
          get size() {
            return e.size;
          },
          get icon() {
            return u(W, {
              name: "chevron-down"
            });
          },
          onClose: $
        });
      }
    })), P((_) => {
      const v = s(), S = e.style;
      return _._v$ = B(f, v, _._v$), _._v$2 = Y(f, S, _._v$2), _;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
}
function Is(e) {
  return u(Le, {
    get fallback() {
      return u(_e, e);
    },
    get children() {
      return [u(Q, {
        get when() {
          return e.type === "text" || !e.type || e.type === "password" || e.type === "textarea";
        },
        get children() {
          return u(_e, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "checkbox";
        },
        get children() {
          return u(la, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "radio";
        },
        get children() {
          return u($a, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "switch";
        },
        get children() {
          return u(ya, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "search";
        },
        get children() {
          return u(wa, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "spinner";
        },
        get children() {
          return u(ka, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "rate";
        },
        get children() {
          return u(Da, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "select";
        },
        get children() {
          return u(ti, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "autocomplete";
        },
        get children() {
          return u(Wc, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "cascader";
        },
        get children() {
          return u(ea, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "time" || e.type === "timeRange";
        },
        get children() {
          return u(fs, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "date" || e.type === "dateRange" || e.type === "month" || e.type === "monthRange" || e.type === "dateTime" || e.type === "dateTimeRange";
        },
        get children() {
          return u(is, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "slider";
        },
        get children() {
          return u(ws, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "treeSelect";
        },
        get children() {
          return u(As, e);
        }
      }), u(Q, {
        get when() {
          return e.type === "color";
        },
        get children() {
          return u(js, e);
        }
      })];
    }
  });
}
const Fs = /* @__PURE__ */ C('<div class="cm-color-picker-alpha"><div class="cm-color-picker-alpha-wrap"><div class="cm-color-picker-alpha-picker">');
function Os(e) {
  const [t, n] = j(e.value.hsl.a * 100), l = () => {
    const {
      r: s,
      g: o,
      b: h
    } = e.value.rgba, m = Vt({
      r: s,
      g: o,
      b: h,
      a: 0
    }), $ = Vt({
      r: s,
      g: o,
      b: h,
      a: 1
    });
    return {
      background: `linear-gradient(to right, ${m} 0%, ${$} 100%)`
    };
  };
  let i;
  const r = (s) => {
    if (typeof s.button == "number" && s.button !== 0)
      return !1;
    a(s), document.addEventListener("mousemove", a, !1), document.addEventListener("mouseup", c, !1);
  }, c = (s) => {
    a(s), document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", c);
  };
  le(() => {
    document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", c);
  });
  const a = (s) => {
    s.preventDefault(), s.stopPropagation();
    const {
      clientWidth: o
    } = i, h = i.getBoundingClientRect().left + window.screenX, m = s.clientX - h;
    if (m < 0) {
      d(0);
      return;
    }
    if (m > o) {
      d(1);
      return;
    }
    d(Math.round(m * 100 / o) / 100);
  }, d = (s) => {
    n(s * 100);
    const {
      h: o,
      s: h,
      l: m,
      a: $
    } = e.value.hsl;
    $ !== s && e.onChange && e.onChange({
      h: o,
      s: h,
      l: m,
      a: s,
      source: "rgba"
    });
  };
  return K(() => {
    n(e.value.hsl.a * 100);
  }), (() => {
    const s = Fs(), o = s.firstChild, h = o.firstChild, m = i;
    return typeof m == "function" ? X(m, s) : i = s, o.$$mousedown = r, h.style.setProperty("top", "0px"), P(($) => {
      const b = l(), f = `${t()}%`;
      return $._v$ = Y(o, b, $._v$), f !== $._v$2 && (($._v$2 = f) != null ? h.style.setProperty("left", f) : h.style.removeProperty("left")), $;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
J(["mousedown"]);
const Ns = /* @__PURE__ */ C('<div class="cm-color-picker-recommend"><div class="cm-color-picker-recommend-container">'), Bs = /* @__PURE__ */ C('<div class="cm-color-picker-recommend-color"><div>'), Vs = /* @__PURE__ */ C("<br>");
function Ys(e) {
  const t = e.colors ?? ["#2d8cf0", "#19be6b", "#ff9900", "#ed4014", "#00b5ff", "#19c919", "#f9e31c", "#ea1a1a", "#9b1dea", "#00c2b1", "#ac7a33", "#1d35ea", "#8bc34a", "#f16b62", "#ea4ca3", "#0d94aa", "#febd79", "#5d4037", "#00bcd4", "#f06292", "#cddc39", "#607d8b", "#000000", "#ffffff"], n = (l) => {
    e.onChange && e.onChange({
      hex: l,
      source: "hex"
    });
  };
  return (() => {
    const l = Ns(), i = l.firstChild;
    return g(i, u(p, {
      each: t,
      children: (r, c) => [(() => {
        const a = Bs(), d = a.firstChild;
        return a.$$click = () => n(r), r != null ? d.style.setProperty("background", r) : d.style.removeProperty("background"), a;
      })(), u(V, {
        get when() {
          return (c() + 1) % 12 === 0;
        },
        get children() {
          return Vs();
        }
      })]
    })), l;
  })();
}
J(["click"]);
const qs = /* @__PURE__ */ C("<div>"), Hs = /* @__PURE__ */ C('<div class="cm-color-picker-confirm">'), Us = /* @__PURE__ */ C('<div class="cm-color-picker-wrap">');
function js(e) {
  const [t, n] = j(!1), l = e.align ?? "bottomLeft", [i, r] = de(e, ""), [c, a] = j(Et(i() || "#2D8CF0")), [d, s] = j("");
  let o = c();
  const h = () => q(e, "cm-color-picker", {
    [`cm-color-picker-${e.size}`]: e.size
  }), m = (_) => {
    $(_);
  }, $ = (_, v) => {
    o = c().hsl.h, a(Et(_, v || o));
  }, b = () => {
    n(!1), r(d()), e.onChange && e.onChange(d());
  }, f = () => {
    n(!1), r(""), e.onChange && e.onChange("");
  };
  return K(() => {
    e.alpha ? s(Vt(c().rgba)) : s(c().hex);
  }), K(() => {
    const _ = Et(d());
    a(_);
  }), (() => {
    const _ = qs();
    return g(_, u(Te, {
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
          const v = Us();
          return g(v, u(qe, {
            dir: "v",
            get children() {
              return [u(fa, {
                get value() {
                  return c();
                },
                onChange: m
              }), u(ma, {
                get value() {
                  return c();
                },
                onChange: m
              }), u(V, {
                get when() {
                  return e.alpha;
                },
                get children() {
                  return u(Os, {
                    get value() {
                      return c();
                    },
                    onChange: m
                  });
                }
              }), u(V, {
                get when() {
                  return e.recommend;
                },
                get children() {
                  return u(Ys, {
                    get colors() {
                      return e.colors;
                    },
                    onChange: m
                  });
                }
              }), (() => {
                const S = Hs();
                return g(S, u(qe, {
                  dir: "h",
                  get children() {
                    return [u(Is, {
                      size: "small",
                      class: "cm-color-picker-input",
                      value: [d, s]
                    }), u(ke, {
                      size: "small",
                      type: "default",
                      onClick: f,
                      children: "清除"
                    }), u(ke, {
                      size: "small",
                      type: "primary",
                      onClick: b,
                      children: "确定"
                    })];
                  }
                })), S;
              })()];
            }
          })), v;
        })();
      },
      get children() {
        return u(oa, {
          get disabled() {
            return e.disabled;
          },
          get size() {
            return e.size;
          },
          get currentValue() {
            return c();
          },
          get value() {
            return i();
          },
          get open() {
            return t();
          }
        });
      }
    })), P((v) => {
      const S = h(), k = e.style;
      return v._v$ = B(_, S, v._v$), v._v$2 = Y(_, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), _;
  })();
}
function Nf(e) {
  const t = () => q(e, "cm-radio");
  return u(ia, ne(e, {
    get classList() {
      return t();
    },
    type: "radio"
  }));
}
const Xs = /* @__PURE__ */ C('<div><textarea class="cm-input">'), Ws = /* @__PURE__ */ C('<div class="cm-input-suffix">');
function Bf(e) {
  const [t, n] = ae(e, ["classList", "class", "style", "value", "autoHeight", "disabled", "onChange", "onInput", "onKeyUp", "onEnter", "name", "trigger"]), l = () => q(t, "cm-textarea", "cm-input-wrapper", {
    "cm-input-disabled": t.disabled,
    "cm-input-auto-height": t.autoHeight
  }), [i, r] = de(e, ""), [c, a] = j(i()), d = t.trigger || "blur", s = (f) => {
  }, o = (f) => {
    r(f.target.value), t.onChange && t.onChange(f.target.value);
  }, h = (f) => {
    d === "input" && (r(f.target.value), t.onChange && t.onChange(f.target.value)), a(f.target.value), t.onInput && t.onInput(f.target.value, f), t.autoHeight && b(f);
  }, m = (f) => {
    t.onKeyUp && t.onKeyUp(f.target.value, f), f.keyCode === 13 && t.onEnter && t.onEnter(f.target.value, f);
  };
  let $;
  const b = (f) => {
    const _ = f.target;
    $ || ($ = _.clientHeight), _.scrollHeight > $ && (_.value.split(`
`).length === 1 ? _.style.height = `${$}px` : _.style.height = "auto", _.style.overflowY = "hidden", _.scrollTop = 0, _.style.height = `${_.scrollHeight}px`);
  };
  return (() => {
    const f = Xs(), _ = f.firstChild;
    return Ce(_, ne(n, {
      get value() {
        return i();
      },
      spellcheck: !1,
      autocomplete: "off",
      wrap: "soft",
      onChange: s,
      onInput: h,
      onKeyUp: m,
      onBlur: o
    }), !1, !1), g(f, (() => {
      const v = G(() => !!(e.wordCount && e.maxLength));
      return () => v() ? (() => {
        const S = Ws();
        return g(S, u(Jn, {
          get total() {
            return e.maxLength;
          },
          get value() {
            return c();
          }
        })), S;
      })() : null;
    })(), null), P((v) => {
      const S = l(), k = e.style;
      return v._v$ = B(f, S, v._v$), v._v$2 = Y(f, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), f;
  })();
}
const Ks = /* @__PURE__ */ C('<div class="cm-transfer-list-item"><div>');
function Gs(e) {
  const t = () => e.render ? e.render(e.data) : e.data.title, n = () => {
    e.data.disabled || e.onSelect(e.data);
  }, l = () => e.data._checked, i = () => ({
    display: e.data._hide ? "none" : "flex"
  });
  return (() => {
    const r = Ks(), c = r.firstChild;
    return r.$$click = n, g(r, u(ze, {
      get checked() {
        return l();
      },
      get disabled() {
        return e.data.disabled;
      }
    }), c), g(c, t), P((a) => Y(r, i(), a)), r;
  })();
}
J(["click"]);
const Zs = /* @__PURE__ */ C("<div><span>"), Js = /* @__PURE__ */ C('<div class="">'), Qs = /* @__PURE__ */ C('<div class="cm-transfer-filter-wrap">'), ps = /* @__PURE__ */ C('<div class="cm-transfer-list"><div class="cm-transfer-list-header"></div><div class="cm-transfer-list-body"><div class="cm-transfer-list-content">');
function Cn(e) {
  const t = () => ({
    width: e.width ? `${e.width}px` : "",
    height: e.height ? `${e.height}px` : ""
  }), n = () => {
    const o = e.value || [], h = {};
    return o.forEach((m) => {
      h[m] = !0;
    }), e.store.data.filter((m) => e.name === "source" ? !h[m.id] : h[m.id]);
  }, l = () => {
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
      e.setStore(h, ie((m) => {
        m.splice(m.indexOf(o.id), 1);
      }));
    }
  }, r = () => {
    const o = e.store[`${e.name}Ids`];
    return o.length > 0 ? l() === o.length ? !0 : "indeterminate" : !1;
  }, c = (o) => {
    const h = [], m = n();
    m.forEach(($) => {
      e.onSelect($, o);
    }), m.forEach(($) => {
      $._checked && h.push($.id);
    }), e.setStore(`${e.name}Ids`, h);
  };
  K(() => {
    e.store[`${e.name}Ids`].length ? e.setStore && e.setStore(`${e.name}Disabled`, !1) : e.setStore && e.setStore(`${e.name}Disabled`, !0);
  });
  const a = (o) => {
    n().forEach((m) => {
      const $ = () => e.render ? e.render(m) : m.title;
      e.setStore("data", (b) => b.id === m.id, "_hide", !$().includes(o));
    });
  }, d = () => n().length, s = () => {
    const o = e.store[`${e.name}Ids`];
    return o.length ? o.length + "/" + d() : d();
  };
  return (() => {
    const o = ps(), h = o.firstChild, m = h.nextSibling, $ = m.firstChild;
    return g(h, u(er, {
      get children() {
        return [(() => {
          const b = Zs(), f = b.firstChild;
          return g(b, u(ze, {
            get checked() {
              return r();
            },
            onChange: c
          }), f), g(f, () => e.name === "source" ? "源列表" : "目标列表"), b;
        })(), (() => {
          const b = Js();
          return g(b, s), b;
        })()];
      }
    })), g(m, u(V, {
      get when() {
        return e.filter;
      },
      get children() {
        const b = Qs();
        return g(b, u(_e, {
          get append() {
            return u(W, {
              name: "search"
            });
          },
          size: "small",
          onInput: a
        })), b;
      }
    }), $), g($, u(p, {
      get each() {
        return n();
      },
      children: (b) => u(Gs, {
        data: b,
        onSelect: i,
        get store() {
          return e.store;
        },
        get render() {
          return e.render;
        }
      })
    })), P((b) => Y(o, t(), b)), o;
  })();
}
const eo = /* @__PURE__ */ C('<div><div class="cm-transfer-operation">');
function Vf(e) {
  const [t, n] = de(e, []), l = () => q(e, "cm-transfer"), [i, r] = re({
    data: [],
    sourceDisabled: !0,
    targetDisabled: !0,
    sourceIds: [],
    targetIds: []
  });
  K(() => {
    r("data", e.data || []);
  });
  const c = (s, o) => {
    s.disabled || r("data", (h) => h.id === s.id, "_checked", o);
  }, a = () => {
    i.sourceIds.forEach((o) => {
      r("data", (h) => h.id === o, "_checked", !1);
    });
    let s = t();
    s = s.concat([...i.sourceIds]), r("sourceIds", []), n([...s]), e.onChange && e.onChange([...s]);
  }, d = () => {
    i.targetIds.forEach((o) => {
      r("data", (h) => h.id === o, "_checked", !1);
    });
    const s = t();
    i.targetIds.forEach((o) => {
      s.splice(s.indexOf(o), 1);
    }), r("targetIds", []), n([...s]), e.onChange && e.onChange([...s]);
  };
  return (() => {
    const s = eo(), o = s.firstChild;
    return g(s, u(Cn, {
      get width() {
        return e.width;
      },
      get height() {
        return e.height;
      },
      store: i,
      setStore: r,
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
    }), o), g(o, u(ke, {
      get disabled() {
        return i.sourceDisabled;
      },
      get icon() {
        return u(W, {
          name: "chevron-right"
        });
      },
      size: "small",
      onClick: a,
      children: "To Right"
    }), null), g(o, u(ke, {
      get disabled() {
        return i.targetDisabled;
      },
      get icon() {
        return u(W, {
          name: "chevron-left"
        });
      },
      size: "small",
      onClick: d,
      children: "To Left"
    }), null), g(s, u(Cn, {
      get width() {
        return e.width;
      },
      get height() {
        return e.height;
      },
      store: i,
      setStore: r,
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
    }), null), P((h) => {
      const m = l(), $ = e.style;
      return h._v$ = B(s, m, h._v$), h._v$2 = Y(s, $, h._v$2), h;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
function to(e, t, n) {
  const l = `fail to post ${e} ${n.status}'`, i = new Error(l);
  return i.status = n.status, i.method = "post", i.url = e, i;
}
function kn(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Ln(e) {
  if (typeof XMLHttpRequest > "u")
    return;
  const t = new XMLHttpRequest(), n = e.action;
  t.upload && (t.upload.onprogress = function(c) {
    c.total > 0 && (c.percent = c.loaded / c.total * 100), e.onProgress(c);
  });
  const l = new FormData();
  e.data && Object.keys(e.data).map((r) => {
    l.append(r, e.data[r]);
  }), l.append(e.filename, e.file), t.onerror = function(c) {
    e.onError(c);
  }, t.onload = function() {
    if (t.status < 200 || t.status >= 300)
      return e.onError(to(n, e, t), kn(t));
    e.onSuccess(kn(t));
  }, t.open("post", n, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const i = e.headers || {};
  for (const r in i)
    Object.prototype.hasOwnProperty.call(i, r) && i[r] !== null && t.setRequestHeader(r, i[r]);
  t.send(l);
}
const no = /* @__PURE__ */ C('<div class="cm-upload-list-title">'), io = /* @__PURE__ */ C('<ul class="cm-upload-list"><div class="cm-upload-files">'), ro = /* @__PURE__ */ C('<img class="cm-upload-file-preview-img" alt="">'), lo = /* @__PURE__ */ C('<div class="cm-upload-error">'), co = /* @__PURE__ */ C('<li class="cm-upload-file-card"><div class="cm-upload-file-preview"></div><div class="cm-upload-file-card-body"><div class="cm-upload-file-card-info"><span class="cm-upload-file-card-info-name"></span><span></span></div></div><div class="cm-upload-file-control">');
function ao(e) {
  const t = (l) => {
    const i = l.name.split(".").pop().toLocaleLowerCase() || "";
    let r = "file-text";
    return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 && (r = "image"), ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 && (r = "film1"), ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 && (r = "music"), r;
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
    const l = io(), i = l.firstChild;
    return g(l, u(V, {
      get when() {
        return e.files && e.files.length;
      },
      get children() {
        const r = no();
        return g(r, u(Se, {
          type: "secondary",
          children: "已上传文件"
        }), null), g(r, u(Se, {
          type: "primary",
          class: "cm-upload-clear",
          get onClick() {
            return e.onClear;
          },
          children: "清空"
        }), null), r;
      }
    }), i), g(i, u(p, {
      get each() {
        return e.files;
      },
      children: (r) => (() => {
        const c = co(), a = c.firstChild, d = a.nextSibling, s = d.firstChild, o = s.firstChild, h = o.nextSibling, m = d.nextSibling;
        return g(a, u(V, {
          get when() {
            return r.url;
          },
          get fallback() {
            return u(W, {
              get name() {
                return t(r);
              },
              size: 20
            });
          },
          get children() {
            const $ = ro();
            return $.$$click = () => {
              e.onPreview && e.onPreview(r);
            }, P(() => Z($, "src", r.url)), $;
          }
        })), g(o, () => r.name), g(h, () => n(r.size)), g(d, u(V, {
          get when() {
            return r.showProgress && r.percentage !== 100;
          },
          get children() {
            return u(Zn, {
              strokeWidth: 4,
              get value() {
                return r.percentage;
              },
              hidePercent: !0
            });
          }
        }), null), g(d, u(V, {
          get when() {
            return r.status === "fail";
          },
          get children() {
            const $ = lo();
            return g($, u(W, {
              name: "alert-circle",
              size: 12
            }), null), g($, u(Se, {
              type: "error",
              size: "small",
              class: "cm-upload-error-text",
              children: "上传失败"
            }), null), g($, u(Se, {
              type: "primary",
              class: "cm-upload-retry",
              size: "small",
              onClick: () => {
                e.onRetry && e.onRetry(r);
              },
              children: "重试"
            }), null), $;
          }
        }), null), g(m, u(ke, {
          size: "small",
          ghost: !0,
          get icon() {
            return u(W, {
              name: "x"
            });
          },
          onClick: () => {
            e.onRemove && e.onRemove(r);
          }
        })), P(() => Z(o, "title", r.name)), c;
      })()
    })), l;
  })();
}
J(["click"]);
const so = /* @__PURE__ */ C('<ul class="cm-upload-list cm-upload-picture-list"><li class="cm-upload-picture-add">'), oo = /* @__PURE__ */ C('<li class="cm-upload-picture-card"><img class="cm-upload-picture-img" alt=""><div class="cm-upload-picture-remove"></div><div class="cm-upload-picture-preview">');
function uo(e) {
  return (() => {
    const t = so(), n = t.firstChild;
    return g(t, u(p, {
      get each() {
        return e.files;
      },
      children: (l) => (() => {
        const i = oo(), r = i.firstChild, c = r.nextSibling, a = c.nextSibling;
        return c.$$click = () => {
          e.onRemove && e.onRemove(l);
        }, g(c, u(W, {
          name: "x-circle"
        })), a.$$click = () => {
          e.onPreview && e.onPreview(l);
        }, g(a, u(W, {
          name: "eye",
          size: 20
        })), P(() => Z(r, "src", l.url)), i;
      })()
    }), n), fe(n, "click", e.onClick, !0), g(n, () => e.children), t;
  })();
}
J(["click"]);
const fo = /* @__PURE__ */ C('<div class="cm-upload-out">'), ho = /* @__PURE__ */ C('<div><input class="cm-upload-input" type="file">');
function Yf(e) {
  const [t, n] = j(!1), [l, i] = j(!1), r = e.format ?? [], c = [], a = e.type ?? "select", [d, s] = re({
    fileList: c,
    previewUrl: ""
  });
  let o = {};
  const h = e.name ?? "file", m = () => q(e, "cm-upload", {
    "cm-upload-select": a === "select",
    "cm-upload-drag": a === "drag",
    "cm-upload-dragOver": a === "drag" && t()
  });
  K(() => {
    if (e.defaultFileList) {
      const N = e.defaultFileList.map((I) => (I.uid || (I.uid = $e()), I));
      s("fileList", N);
    }
  });
  const $ = (N) => {
    const I = N.target.files;
    I && (b(I), O.value = null);
  }, b = (N) => {
    let I = Array.prototype.slice.call(N);
    e.multiple || (I = I.slice(0, 1)), I.length !== 0 && I.forEach((U) => {
      f(U);
    });
  }, f = async (N) => {
    if (!e.beforeUpload)
      return _(N);
    const I = e.beforeUpload(N);
    typeof I == "object" && I.then ? I.then((U) => {
      Object.prototype.toString.call(U) === "[object File]" ? _(U) : _(N);
    }, () => {
    }) : I !== !1 && _(N);
  }, _ = (N) => {
    if (r.length) {
      const I = N.name.split(".").pop().toLocaleLowerCase();
      if (!r.some((H) => H.toLocaleLowerCase() === I))
        return e.onFormatError && e.onFormatError(N, c), !1;
    }
    if (e.maxSize && N.size > e.maxSize * 1024)
      return e.onExceededSize && e.onExceededSize(N, c), !1;
    v(N), Ln({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: N,
      data: e.data,
      filename: h,
      action: e.action,
      onProgress: (I) => {
        k(I, N);
      },
      onSuccess: (I) => {
        w(I, N);
      },
      onError: (I, U) => {
        M(I, U, N);
      }
    });
  }, v = (N) => {
    N.uid = $e(), o[N.uid] = N;
    const I = {
      status: "uploading",
      name: N.name,
      size: N.size,
      percentage: 0,
      uid: N.uid,
      showProgress: !0
    };
    s("fileList", [...d.fileList, I]);
  }, S = (N) => {
    const I = d.fileList;
    let U;
    return I.every((H) => (U = N.uid === H.uid ? H : null, !U)), U;
  }, k = (N, I) => {
    const U = S(I);
    e.onProgress && e.onProgress(N, U, d.fileList), s("fileList", (H) => H.uid === I.uid, "percentage", N.percent || 0);
  }, w = (N, I) => {
    const U = S(I);
    U && (s("fileList", (H) => H.uid === I.uid, ie((H) => {
      H.status = "finished", H.response = N, H.url = e.getFileUrl && e.getFileUrl(N, H);
    })), e.onSuccess && e.onSuccess(N, U, d.fileList), setTimeout(() => {
      s("fileList", (H) => H.uid === I.uid, ie((H) => {
        H.showProgress = !1;
      }));
    }, 1e3));
  }, M = (N, I, U) => {
    S(U), s("fileList", (H) => H.uid === U.uid, "status", "fail"), e.onError && e.onError(N, I, U);
  }, A = (N) => {
    s("fileList", ie((I) => {
      I.splice(I.indexOf(N), 1);
    })), delete o[N.uid], e.onRemove && e.onRemove(N, d.fileList);
  }, L = (N) => {
    N.status === "finished" && (s("previewUrl", N.url), i(!0), e.onPreview && e.onPreview(N));
  }, y = () => {
    const N = gi(d.fileList);
    o = {}, s("fileList", []), e.onClear && e.onClear(N);
  }, x = () => {
    e.disabled || O.click();
  }, E = (N) => {
    const I = o[N.uid];
    I && Ln({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: I,
      data: e.data,
      filename: h,
      action: e.action,
      onProgress: (U) => {
        k(U, I);
      },
      onSuccess: (U) => {
        w(U, I);
      },
      onError: (U, H) => {
        M(U, H, I);
      }
    });
  }, F = (N) => {
    N.preventDefault && N.preventDefault(), n(!1), !e.disabled && b(N.dataTransfer.files);
  }, R = (N) => {
    e.disabled || e.paste && b(N.clipboardData.files);
  }, D = (N) => {
    N.preventDefault && N.preventDefault(), n(!0);
  }, z = (N) => {
    N.preventDefault && N.preventDefault(), n(!1);
  }, T = () => d.fileList.map((N) => ({
    ...N
  }));
  let O;
  return e.ref && e.ref({
    clearFiles: () => {
      o = {}, s("fileList", []);
    },
    getFileList: T
  }), (() => {
    const N = ho(), I = N.firstChild;
    I.addEventListener("change", $);
    const U = O;
    return typeof U == "function" ? X(U, I) : O = I, g(N, u(V, {
      get when() {
        return e.listType === "picture";
      },
      get children() {
        return u(uo, {
          get files() {
            return d.fileList;
          },
          onRemove: A,
          onPreview: L,
          onClick: x,
          get children() {
            return e.children;
          }
        });
      }
    }), null), g(N, u(V, {
      get when() {
        return e.listType !== "picture";
      },
      get children() {
        return [(() => {
          const H = fo();
          return H.addEventListener("dragleave", z), H.addEventListener("dragover", D), H.addEventListener("paste", R), H.addEventListener("drop", F), H.$$click = x, g(H, () => e.children), H;
        })(), u(ao, {
          get files() {
            return d.fileList;
          },
          onRemove: A,
          onPreview: L,
          onClear: y,
          onRetry: E
        })];
      }
    }), null), g(N, u(Xn, {
      get previewList() {
        return [d.previewUrl];
      },
      visible: [l, i]
    }), null), P((H) => {
      const oe = m(), ye = e.style, Be = e.multiple, We = e.webkitdirectory, Ke = e.accept;
      return H._v$ = B(N, oe, H._v$), H._v$2 = Y(N, ye, H._v$2), Be !== H._v$3 && (I.multiple = H._v$3 = Be), We !== H._v$4 && Z(I, "webkitdirectory", H._v$4 = We), Ke !== H._v$5 && Z(I, "accept", H._v$5 = Ke), H;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), N;
  })();
}
J(["click"]);
const Sn = /* @__PURE__ */ C("<div>"), mo = /* @__PURE__ */ C('<div><div class="cm-index-list-list"></div><div class="cm-index-list-nav">'), go = /* @__PURE__ */ C("<dl><dt>"), vo = /* @__PURE__ */ C("<dd>");
function qf(e) {
  const t = () => e.promote ?? !0, [n, l] = he(e, "value", []), [i, r] = j(""), [c, a] = j(!1), [d, s] = j(""), [o, h] = re({
    list: [],
    listMap: {}
  });
  let m = {}, $;
  const b = {};
  nt(() => {
    const y = [];
    m = {};
    const x = {};
    e.data.forEach((E) => {
      (E.id === void 0 || E.id === null) && (E.id = $e());
      const F = {
        id: E.id
      };
      m[E.id] = E, x[E.id] = F, y.push(F), E.children && (F.children = [], E.children.forEach((R) => {
        (R.id === void 0 || R.id === null) && (R.id = $e()), m[R.id] = R;
        const D = {
          id: R.id
        };
        x[R.id] = D, F.children.push(D);
      }));
    }), h({
      list: y,
      listMap: x
    });
  });
  const f = () => q(e, "cm-index-list", {
    "cm-index-list-border": e.border
  }), _ = (y) => {
    if (!e.selectable)
      return;
    const x = n(), E = y.id;
    if (y.active) {
      const F = x.indexOf(E);
      x.splice(F, 1), l(x);
    } else
      x.push(E), l([...x]);
    e.onChange && e.onChange(n()), h("listMap", y.id, "active", !y.active);
  };
  let v = null;
  const S = (y, x, E) => {
    E.preventDefault && E.preventDefault(), E.stopPropagation && E.stopPropagation();
    const F = document.querySelector(y);
    if (F) {
      t() && (s(x), a(!0), v && clearTimeout(v), v = setTimeout(() => {
        k();
      }, 1e3));
      const R = F.getBoundingClientRect().top, D = $.getBoundingClientRect().top, z = R - D;
      $.scrollTo({
        top: $.scrollTop + z,
        behavior: "smooth"
      });
    }
  }, k = () => {
    a(!1);
  }, w = () => {
    const y = $.scrollTop, x = M(y);
    r(x);
  }, M = (y) => {
    let x = "", E = Number.MAX_VALUE;
    for (const F in b) {
      const R = Math.abs(b[F] - y);
      E > R && (E = R, x = F);
    }
    return x;
  }, A = (y, x) => {
    queueMicrotask(() => {
      b[x] = y.offsetTop;
    });
  }, L = () => ({
    "cm-index-list-promote": !0,
    "cm-index-list-promote-show": c()
  });
  return (() => {
    const y = mo(), x = y.firstChild, E = x.nextSibling;
    x.addEventListener("scroll", w);
    const F = $;
    return typeof F == "function" ? X(F, x) : $ = x, g(x, u(p, {
      get each() {
        return o.list;
      },
      children: (R) => {
        const D = m[R.id];
        return (() => {
          const z = go(), T = z.firstChild;
          return X((O) => {
            A(O, R.id);
          }, z), g(T, () => D.name), g(z, u(p, {
            get each() {
              return R.children;
            },
            children: (O) => {
              const N = m[O.id];
              return (() => {
                const I = vo();
                return fe(I, "click", _.bind(null, O), !0), g(I, (() => {
                  const U = G(() => !!e.renderItem);
                  return () => U() ? e.renderItem(N, O.active) : N.name;
                })()), P(() => Re(I, O.active ? "active" : "")), I;
              })();
            }
          }), null), P(() => Z(z, "id", `cm_index_list_${R.id}`)), z;
        })();
      }
    })), g(E, u(p, {
      get each() {
        return o.list;
      },
      children: (R) => {
        const D = m[R.id], z = () => i() === R.id, T = () => ({
          "cm-index-list-nav-item": !0,
          active: z()
        });
        return (() => {
          const O = Sn();
          return fe(O, "click", S.bind(null, `#cm_index_list_${R.id}`, D.id), !0), g(O, () => D.id), P((N) => B(O, T(), N)), O;
        })();
      }
    })), g(y, u(V, {
      get when() {
        return t();
      },
      get children() {
        const R = Sn();
        return g(R, d), P((D) => B(R, L(), D)), R;
      }
    }), null), P((R) => {
      const D = f(), z = e.style;
      return R._v$ = B(y, D, R._v$), R._v$2 = Y(y, z, R._v$2), R;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), y;
  })();
}
J(["click"]);
const Hf = (e) => e, $o = /* @__PURE__ */ C('<div><div class="cm-list-item-main"><div class="cm-list-item-meta"></div><div class="cm-list-item-content">'), _o = /* @__PURE__ */ C('<div class="cm-list-item-avatar">'), yo = /* @__PURE__ */ C('<div class="cm-list-item-body"><div class="cm-list-item-title"></div><div class="cm-list-item-desc">'), wo = /* @__PURE__ */ C('<ul class="cm-list-item-addon">');
function bo(e) {
  const t = So(), n = t?.signal[0], l = t?.signal[1], i = () => q(e, "cm-list-item", {
    "cm-list-item-active": n && n() === e.id
  }), r = () => {
    l && l(e.id), t?.onSelect && t.onSelect(e.data);
  };
  return (() => {
    const c = $o(), a = c.firstChild, d = a.firstChild, s = d.nextSibling;
    return c.$$click = r, g(d, (() => {
      const o = G(() => !!e.avatar);
      return () => o() ? (() => {
        const h = _o();
        return g(h, () => e.avatar), h;
      })() : null;
    })(), null), g(d, (() => {
      const o = G(() => !!(e.title || e.desc));
      return () => o() ? (() => {
        const h = yo(), m = h.firstChild, $ = m.nextSibling;
        return g(m, () => e.title), g($, () => e.desc), h;
      })() : null;
    })(), null), g(s, () => e.children), g(c, (() => {
      const o = G(() => !!e.actions);
      return () => o() ? (() => {
        const h = wo();
        return g(h, () => e.actions), h;
      })() : null;
    })(), null), P((o) => {
      const h = i(), m = e.style;
      return o._v$ = B(c, h, o._v$), o._v$2 = Y(c, m, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}
J(["click"]);
const xo = /* @__PURE__ */ C("<div>"), Co = /* @__PURE__ */ C('<div class="cm-list-head">'), ko = /* @__PURE__ */ C('<div class="cm-list-foot">'), li = me();
function Lo(e) {
  const t = () => q(e, "cm-list", {
    "cm-list-border": e.border,
    [`cm-list-${e.size}`]: e.size
  }), [n, l] = he(e, "activeKey", "");
  return u(li.Provider, {
    get value() {
      return {
        signal: [n, l],
        onSelect: e.onSelect
      };
    },
    get children() {
      const i = xo();
      return g(i, (() => {
        const r = G(() => !!e.head);
        return () => r() ? (() => {
          const c = Co();
          return g(c, () => e.head), c;
        })() : null;
      })(), null), g(i, () => e.children, null), g(i, (() => {
        const r = G(() => !!e.foot);
        return () => r() ? (() => {
          const c = ko();
          return g(c, () => e.foot), c;
        })() : null;
      })(), null), P((r) => {
        const c = t(), a = e.style;
        return r._v$ = B(i, c, r._v$), r._v$2 = Y(i, a, r._v$2), r;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), i;
    }
  });
}
Lo.Item = bo;
const So = () => ge(li), Eo = /* @__PURE__ */ C("<div><div>");
function Mo(e) {
  const [t, n] = re({
    show: !1,
    status: "success",
    percent: 0
  }), l = () => q(e, "cm-loading-bar", {
    "cm-loading-bar-show": t.show
  }), i = () => ({
    "cm-loading-bar-inner": !0,
    [`cm-loading-bar-status-${t.status}`]: !!t.status
  }), r = (a) => {
    a.percent !== void 0 && n("percent", a.percent), a.status !== void 0 && n("status", a.status), a.show !== void 0 && n("show", a.show);
  }, c = () => ({
    width: `${t.percent}%`
  });
  return e.ref && e.ref({
    update: r
  }), (() => {
    const a = Eo(), d = a.firstChild;
    return P((s) => {
      const o = l(), h = i(), m = c();
      return s._v$ = B(a, o, s._v$), s._v$2 = B(d, h, s._v$2), s._v$3 = Y(d, m, s._v$3), s;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), a;
  })();
}
const Do = 800;
let Qe, Ht;
function Dt() {
  Qe && (clearInterval(Qe), Qe = null);
}
function En() {
  setTimeout(() => {
    Ye({
      show: !1
    }), setTimeout(() => {
      Ye({
        percent: 0
      });
    }, 200);
  }, Do);
}
function Ye(e) {
  Ht.update(e);
}
function To() {
  const e = Pe("cm-loading-bar-portal", "cm-loading-bar-portal");
  return bt(() => u(Mo, {
    ref(t) {
      const n = Ht;
      typeof n == "function" ? n(t) : Ht = t;
    }
  }), e), {
    start() {
      if (Qe)
        return;
      let t = 0;
      Ye({
        percent: t,
        status: "success",
        show: !0
      }), Qe = setInterval(() => {
        t += Math.floor(Math.random() * 3 + 1), t > 95 && Dt(), Ye({
          percent: t,
          status: "success",
          show: !0
        });
      }, 200);
    },
    finish() {
      Dt(), Ye({
        percent: 100,
        status: "success",
        show: !0
      }), En();
    },
    error() {
      Dt(), Ye({
        percent: 100,
        status: "error",
        show: !0
      }), En();
    }
  };
}
const Uf = To();
function Ro({
  data: e,
  validation: t = {},
  message: n = {}
}) {
  const l = {}, i = {}, r = /* @__PURE__ */ new Map(), c = async () => {
    const k = Object.keys(l);
    let w = !0;
    for (const M of k) {
      const A = l[M];
      if (!await A(v[M])) {
        w = !1;
        break;
      }
    }
    return w;
  }, a = async (k) => {
    const w = l[k];
    return !(w && !await w(v[k]));
  }, d = function(k) {
    return t ? t[k] : {};
  }, s = function(k) {
    return n ? n[k] : {};
  }, o = function() {
    const k = Object.keys(e), w = {};
    return k.forEach((M) => {
      w[M] = v[M];
    }), w;
  }, h = function(k, w) {
    Object.keys(e).forEach((A) => {
      w ? S[A] = k[A] : (v[A] = k[A], f(A, k[A]));
    });
  }, m = (k, w) => {
    l[k] = w;
  }, $ = (k, w) => {
    i[k] = w;
  }, b = (k) => {
    if (k) {
      const w = i[k];
      w && w();
    } else {
      const w = Object.keys(i);
      for (const M of w) {
        const A = i[M];
        A && A();
      }
    }
  }, f = (k, w) => {
    if (r.has(k)) {
      const [M, A] = r.get(k);
      A(w);
    }
  }, v = {
    ...e,
    isValid: c,
    // 别名
    validate: c,
    getFormData: o,
    setFormData: h,
    setCheckValid: m,
    getValidation: d,
    getMessage: s,
    bindController: (k, w, M) => {
      r.set(k, [w, M]);
    },
    setClearValid: $,
    clearValidates: b,
    resetFieldsValidate: b,
    checkField: a
  }, S = new Proxy(v, {
    get(k, w, M) {
      if (r.has(w)) {
        const [A, L] = r.get(w);
        return A();
      }
      return k[w];
    },
    set(k, w, M, A) {
      k[w] = M, f(w, M);
      const L = l[w];
      return L && L(M), !0;
    }
  });
  return S;
}
const ci = me();
function jf(e) {
  const t = Ro({
    data: e.data || {},
    validation: {},
    message: {}
  }), n = () => q(e, "cm-login"), l = async () => {
    const i = await t.isValid();
    e.onSubmit && e.onSubmit(i, t);
  };
  return u(ci.Provider, {
    value: {
      onSubmit: l,
      form: t
    },
    get children() {
      return u(Pl, {
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
const ai = () => ge(ci);
function Xf(e) {
  const t = e.type ?? "primary", n = ai(), l = () => {
    n?.onSubmit && n?.onSubmit();
  }, i = e.size ?? "large";
  return u(ke, ne(e, {
    size: i,
    type: t,
    onClick: l,
    block: !0,
    children: "登 录"
  }));
}
function Wf(e) {
  const t = e.name ?? "username", n = e.icon ?? u(W, {
    name: "user"
  }), l = {
    require: Ue().required,
    ...e.rules
  }, i = {
    require: "请输入用户名！",
    ...e.messages
  }, r = e.placeholder ?? "请输入用户名", c = e.size ?? "large";
  return u(rt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: i,
    get children() {
      return u(_e, {
        prepend: n,
        size: c,
        placeholder: r,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Kf(e) {
  const t = e.name ?? "password", n = e.icon ?? u(W, {
    name: "lock"
  }), l = {
    require: Ue().required,
    ...e.rules
  }, i = {
    require: "请输入密码！",
    ...e.messages
  }, r = e.placeholder ?? "请输入密码", c = e.size ?? "large";
  return u(rt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: i,
    get children() {
      return u(_e, {
        type: "password",
        prepend: n,
        size: c,
        placeholder: r,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Gf(e) {
  const t = e.name ?? "mobile", n = e.icon ?? u(W, {
    name: "smartphone"
  }), l = {
    require: Ue().required,
    mobile: !0,
    ...e.rules
  }, i = {
    require: "请输入手机号码！",
    mobile: "输入的手机号码不正确！",
    ...e.messages
  }, r = e.placeholder ?? "请输入手机号码", c = e.size ?? "large";
  return u(rt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: i,
    get children() {
      return u(_e, {
        prepend: n,
        size: c,
        placeholder: r,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Zf(e) {
  const t = e.name ?? "email", n = e.icon ?? u(W, {
    name: "mail"
  }), l = {
    require: Ue().required,
    email: !0,
    ...e.rules
  }, i = {
    require: "请输入邮箱！",
    email: "输入的邮箱地址不正确！",
    ...e.messages
  }, r = e.placeholder ?? "请输入邮箱", c = e.size ?? "large";
  return u(rt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: l,
    messages: i,
    get children() {
      return u(_e, {
        prepend: n,
        size: c,
        placeholder: r,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
const zo = /* @__PURE__ */ C('<span class="cm-count-down-prefix">'), Po = /* @__PURE__ */ C('<span class="cm-count-down-suffix">'), Ao = /* @__PURE__ */ C('<span><span class="cm-count-down-value">');
function Io(e) {
  return `${e}`.padStart(2, "0");
}
function Fo(e) {
  let t;
  const n = e.duration ?? 1e3, [l, i] = j(e.value), r = () => {
    let d = l();
    d <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), d = 0);
    const s = Io(d), o = e.format ?? "s";
    let h = o;
    return o.match(/s+/) && (h = h.replace(/s+/, s + "")), h;
  }, c = () => {
    t = setInterval(() => {
      i(l() - 1);
    }, n);
  };
  ce(() => {
    c();
  }), le(() => {
    clearInterval(t), t = null;
  });
  const a = () => q(e, "cm-count-down");
  return (() => {
    const d = Ao(), s = d.firstChild;
    return g(d, u(V, {
      get when() {
        return e.prefix;
      },
      get children() {
        const o = zo();
        return g(o, () => e.prefix), o;
      }
    }), s), g(s, r), g(d, u(V, {
      get when() {
        return e.suffix;
      },
      get children() {
        const o = Po();
        return g(o, () => e.suffix), o;
      }
    }), null), P((o) => {
      const h = a(), m = e.style;
      return o._v$ = B(d, h, o._v$), o._v$2 = Y(d, m, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), d;
  })();
}
function Jf(e) {
  const [t, n] = j(e.action ?? ""), [l, i] = j(!1), r = e.name ?? "captcha", c = e.icon ?? u(W, {
    name: "key"
  }), a = {
    require: Ue().required,
    ...e.rules
  }, d = {
    require: "请输入验证码！",
    ...e.messages
  }, s = e.placeholder ?? "请输入验证码", o = e.size ?? "large", h = e.countDownNumber ?? 60, m = () => t() ? u(At, {
    get src() {
      return t();
    }
  }) : l() ? u(Fo, {
    value: h,
    format: "s秒",
    onEnd: () => {
      i(!1);
    }
  }) : "获取验证码", $ = ai(), b = async () => {
    const f = t();
    if (f) {
      const _ = f.split("?"), v = new URLSearchParams(_[1]);
      v.set("_", `${Date.now()}`), n(_[0] + "?" + v.toString());
    } else {
      const _ = $?.form;
      if (e.field && _ && !await _.checkField(e.field))
        return;
      i(!0), e.onGetCaptcha && e.onGetCaptcha();
    }
  };
  return u(rt, {
    get label() {
      return e.label;
    },
    name: r,
    rules: a,
    messages: d,
    get children() {
      return u(qe, {
        get children() {
          return [u(_e, {
            prepend: c,
            size: o,
            placeholder: s
          }), u(ke, {
            size: o,
            onClick: b,
            get disabled() {
              return l();
            },
            style: {
              flex: "0 0 120px"
            },
            get children() {
              return m();
            }
          })];
        }
      });
    }
  });
}
const Oo = /* @__PURE__ */ C('<li><div class="cm-menu-item-icon">'), No = /* @__PURE__ */ C('<div class="cm-menu-item-cert">'), Bo = /* @__PURE__ */ C('<li><div class="cm-menu-item-icon"></div><div class="cm-menu-item-text">'), Vo = /* @__PURE__ */ C('<div class="cm-menu-item-text">');
function Ut(e) {
  !e.isSubmenuTitle && !e.name && console.warn("MenuItem need name prop");
  const [t, n] = j(!1), l = Gt(), i = () => q(e, "cm-menu-item", {
    "cm-menu-item-disabled": e.disabled,
    "cm-menu-item-active": !e.isSubmenuTitle && e.name && l?.store.activeName === e.name
  });
  K(() => {
    let a = !1;
    if (l && r && !e.isSubmenuTitle) {
      const d = r.parentElement.getAttribute("x-name");
      a = l.store.min && d === "__root";
    }
    n(a), !a && l?.dir === "v" && setTimeout(() => {
      const d = r.parentElement.getAttribute("x-padding"), s = parseInt(d) + 16;
      r.style.paddingLeft = s + "px";
    }, 20);
  });
  let r;
  ce(() => {
    const a = r.parentElement.getAttribute("x-padding"), d = parseInt(a) + 16;
    if (r.style.paddingLeft = l?.dir === "h" ? "16px" : d + "px", !e.isSubmenuTitle) {
      const s = r.parentElement.getAttribute("x-name"), o = {
        name: e.name,
        parent: null,
        children: []
      };
      if (l && e.name)
        if (l.treeMap[e.name] = o, s === "__root")
          l?.tree.push(o);
        else {
          const h = l.treeMap[s];
          o.parent = h, h.children.push(o);
        }
    }
  });
  const c = () => {
    e.isSubmenuTitle && !l.store.min ? e.onSelect && e.onSelect() : l?.onSelect(e.name, e.data);
  };
  return u(V, {
    get when() {
      return t();
    },
    get fallback() {
      return (() => {
        const a = Bo(), d = a.firstChild, s = d.nextSibling;
        a.$$click = c;
        const o = r;
        return typeof o == "function" ? X(o, a) : r = a, g(d, () => e.icon), g(s, () => e.children), g(a, u(V, {
          get when() {
            return e.cert;
          },
          get children() {
            const h = No();
            return g(h, u(W, {
              name: "chevron-down",
              size: 14
            })), h;
          }
        }), null), P((h) => B(a, i(), h)), a;
      })();
    },
    get children() {
      return u(pe, {
        align: "right",
        arrow: !0,
        get content() {
          return (() => {
            const a = Vo();
            return g(a, () => e.children), a;
          })();
        },
        get children() {
          const a = Oo(), d = a.firstChild;
          a.$$click = c;
          const s = r;
          return typeof s == "function" ? X(s, a) : r = a, g(d, () => e.icon), P((o) => B(a, i(), o)), a;
        }
      });
    }
  });
}
J(["click"]);
const Yo = /* @__PURE__ */ C("<li>"), qo = /* @__PURE__ */ C('<li><ul class="cm-menu-submenu-list">'), Ho = /* @__PURE__ */ C('<ul class="cm-menu-submenu-list">');
function Qf(e) {
  e.name || console.warn("SubMenu need name prop");
  const [t, n] = j(!1), l = Gt(), i = () => {
    let o = !1;
    l && l.store.openKeys && e.name && (o = l.store.openKeys[e.name]), a.style.transition = "none", a.style.height = "auto";
    const h = a.offsetHeight;
    return a.style.transition = "", o ? (a.style.height = "0px", setTimeout(() => {
      a.style.height = h + "px";
    }), setTimeout(() => {
      a.style.height = "auto";
    }, 250)) : (a.style.height = h + "px", setTimeout(() => {
      a.style.height = "0px";
    })), o;
  }, r = () => q(e, "cm-menu-submenu", {
    "cm-menu-submenu-open": i()
  });
  let c, a;
  K(() => {
    let o = !1;
    if (l && c) {
      const h = c.parentElement.getAttribute("x-name");
      o = l.store.min && h === "__root";
    }
    n(o), !o && l?.dir === "v" && setTimeout(() => {
      const h = c.parentElement.getAttribute("x-padding"), m = parseInt(h) + 16;
      c.setAttribute("x-padding", h), a.setAttribute("x-padding", m);
    });
  }), ce(() => {
    const o = c.parentElement.getAttribute("x-padding"), h = parseInt(o) + 16;
    c.setAttribute("x-padding", o), a.setAttribute("x-padding", h);
    const m = c.parentElement.getAttribute("x-name"), $ = {
      name: e.name,
      parent: null,
      children: []
    };
    if (l && e.name)
      if (l.treeMap[e.name] = $, m === "__root")
        l?.tree.push($);
      else {
        const b = l.treeMap[m];
        $.parent = b, b.children.push($);
      }
  });
  const d = () => {
    l?.setOpen(e.name);
  }, s = e.align || (l?.dir === "h" ? "bottom" : "rightTop");
  return u(V, {
    get when() {
      return t() || l?.dir === "h";
    },
    get fallback() {
      return (() => {
        const o = qo(), h = o.firstChild, m = c;
        typeof m == "function" ? X(m, o) : c = o, g(o, u(Ut, {
          get icon() {
            return e.icon;
          },
          cert: !0,
          isSubmenuTitle: !0,
          onSelect: d,
          get children() {
            return e.title;
          }
        }), h);
        const $ = a;
        return typeof $ == "function" ? X($, h) : a = h, g(h, () => e.children), P((b) => {
          const f = r(), _ = e.name;
          return b._v$ = B(o, f, b._v$), _ !== b._v$2 && Z(h, "x-name", b._v$2 = _), b;
        }, {
          _v$: void 0,
          _v$2: void 0
        }), o;
      })();
    },
    get children() {
      const o = Yo(), h = c;
      return typeof h == "function" ? X(h, o) : c = o, g(o, u(Te, {
        align: s,
        get theme() {
          return l?.theme;
        },
        revers: !1,
        get menu() {
          return (() => {
            const m = Ho(), $ = a;
            return typeof $ == "function" ? X($, m) : a = m, g(m, () => e.children), P(() => Z(m, "x-name", e.name)), m;
          })();
        },
        get children() {
          return u(Ut, {
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
      })), P((m) => B(o, r(), m)), o;
    }
  });
}
const Uo = /* @__PURE__ */ C('<li><ul class="cm-menu-group-list">');
function pf(e) {
  e.name || console.warn("MenuGroup need name prop");
  const t = () => q(e, "cm-menu-group"), n = Gt();
  let l, i;
  return ce(() => {
    const r = l.parentElement.getAttribute("x-padding");
    l.setAttribute("x-padding", r), i.setAttribute("x-padding", r);
    const c = l.parentElement.getAttribute("x-name"), a = {
      name: e.name,
      parent: null,
      children: []
    };
    if (n && e.name)
      if (n.treeMap[e.name] = a, c === "__root")
        n?.tree.push(a);
      else {
        const d = n.treeMap[c];
        a.parent = d, d.children.push(a);
      }
  }), K(() => {
    let r = !1;
    if (n && l) {
      const c = l.parentElement.getAttribute("x-name");
      r = n.store.min && c === "__root";
    }
    !r && n?.dir === "v" && setTimeout(() => {
      const c = l.parentElement.getAttribute("x-padding"), a = parseInt(c) + 16;
      l.setAttribute("x-padding", c), i.setAttribute("x-padding", a);
    });
  }), (() => {
    const r = Uo(), c = r.firstChild, a = l;
    typeof a == "function" ? X(a, r) : l = r, g(r, u(Ut, {
      get icon() {
        return e.icon;
      },
      isSubmenuTitle: !0,
      get children() {
        return e.title;
      }
    }), c);
    const d = i;
    return typeof d == "function" ? X(d, c) : i = c, g(c, () => e.children), P((s) => {
      const o = t(), h = e.name;
      return s._v$ = B(r, o, s._v$), h !== s._v$2 && Z(c, "x-name", s._v$2 = h), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const jo = /* @__PURE__ */ C('<ul x-padding="0" x-name="__root" x-level="0">'), si = me();
function eh(e) {
  const [t, n] = he(e, "activeName", ""), l = () => e.accordion || !1, i = () => e.theme || "light", r = () => e.dir || "v", c = () => q(e, "cm-menu", {
    [`cm-menu-${r()}`]: r(),
    ["cm-menu-min"]: e.min,
    [`cm-menu-${i()}`]: i()
  }), a = [], d = {};
  K(() => {
    const f = t();
    f && (h("activeName", f), xe(() => {
      setTimeout(() => {
        s(f);
      });
    }));
  }), K(() => {
    h("min", e.min);
  });
  const s = (f) => {
    let _ = d && d[f] && d[f].parent;
    if (_)
      for (; _; )
        o.openKeys[_.name] || b(_.name), _ = _.parent;
    else
      (r() === "h" || o.min) && b(f);
  }, [o, h] = re({
    openKeys: {},
    activeName: e.activeName,
    min: e.min
  }), m = (f, _) => {
    n(f), e.onSelect && e.onSelect(f, _);
  }, $ = (f, _) => {
    f.children && f.children.forEach((v) => {
      o.openKeys[v.name] && (_[v.name] = !0), $(v, _);
    });
  }, b = (f) => {
    l() || r() === "h" ? h("openKeys", ie((_) => {
      if (_[f]) {
        delete _[f];
        return;
      }
      let v = d[f];
      const S = {
        [f]: !0
      };
      for (; v.parent; )
        S[v.parent.name] = !0, v = v.parent;
      $(v, S), Object.keys(_).forEach((w) => {
        S[w] || delete _[w];
      }), Object.assign(_, S);
    })) : h("openKeys", ie((_) => {
      _[f] ? delete _[f] : _[f] = !0;
    }));
  };
  return u(si.Provider, {
    get value() {
      return {
        onSelect: m,
        store: o,
        setOpen: b,
        tree: a,
        treeMap: d,
        theme: i(),
        dir: r()
      };
    },
    get children() {
      const f = jo();
      return g(f, () => e.children), P((_) => B(f, c(), _)), f;
    }
  });
}
const Gt = () => ge(si), Xo = /* @__PURE__ */ C('<div><div class="cm-message-inner"><div class="cm-message-content">'), Wo = /* @__PURE__ */ C('<div class="cm-message-close">'), Ko = /* @__PURE__ */ C("<div>");
function Go(e) {
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
function Zo(e) {
  const [t, n] = j(!1), l = e.data;
  let i;
  const r = () => q(l, "cm-message", {
    "cm-message-visible": t(),
    [`cm-message-${l.type}`]: l.type,
    "cm-message-background": l.background
  });
  ce(() => {
    setTimeout(() => {
      n(!0);
    });
    let s = l.duration;
    s == null && (s = 4), s && setTimeout(() => {
      c();
    }, s * 1e3);
  });
  const c = () => {
    n(!1);
  }, a = () => {
    t() || (e.onClose(l), l.onClose && l.onClose());
  }, d = () => ({
    ...l.style,
    "z-index": Ae()
  });
  return (() => {
    const s = Xo(), o = s.firstChild, h = o.firstChild;
    s.addEventListener("transitionend", a);
    const m = i;
    return typeof m == "function" ? X(m, s) : i = s, g(o, (() => {
      const $ = G(() => !!l.loading);
      return () => $() ? u(He, {}) : u(W, {
        get name() {
          return Go(l.type);
        },
        class: "cm-message-icon",
        size: 16
      });
    })(), h), g(h, () => l.content), g(o, (() => {
      const $ = G(() => !!l.closeable);
      return () => $() ? (() => {
        const b = Wo();
        return g(b, u(W, {
          name: "x",
          class: "cm-message-close-icon",
          size: 14,
          onClick: c
        })), b;
      })() : null;
    })(), null), P(($) => {
      const b = r(), f = d();
      return $._v$ = B(s, b, $._v$), $._v$2 = Y(s, f, $._v$2), $;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
function Jo(e) {
  return (() => {
    const t = Ko();
    return g(t, u(p, {
      get each() {
        return e.data;
      },
      children: (n) => u(Zo, {
        data: n,
        get onClose() {
          return e.onClose;
        }
      })
    })), t;
  })();
}
function Qo() {
  const [e, t] = re({
    list: []
  }), n = Pe("cm-message-portal", "cm-messages-wrap"), l = (i) => {
    const r = e.list.filter((c) => c.key !== i.key);
    t("list", () => [...r]);
  };
  return bt(() => u(Jo, {
    get data() {
      return e.list;
    },
    onClose: l
  }), n), {
    close: (i) => {
      const r = e.list.find((c) => c.key === i);
      l(r), r && r.onClose && r.onClose();
    },
    open: (i, r) => {
      typeof i == "string" && (i = {
        content: i
      }), i.key || (i.key = $e()), i.type = r, t("list", ie((c) => {
        c.push(i);
      })), n.style.zIndex = Ae();
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
const th = Qo(), po = /* @__PURE__ */ C("<div>"), ed = /* @__PURE__ */ C('<span class="cm-modal-close">'), td = /* @__PURE__ */ C('<div class="cm-modal-footer">'), nd = /* @__PURE__ */ C('<div><div class="cm-modal-header"></div><div class="cm-modal-body">'), id = /* @__PURE__ */ C('<div tabindex="1">'), rd = /* @__PURE__ */ C('<div class="cm-modal-title">'), ld = /* @__PURE__ */ C('<div class="cm-modal-left"><div class="cm-modal-icon">'), cd = /* @__PURE__ */ C('<div class="cm-modal-right">');
function ad(e) {
  let t, n, l;
  const [i, r] = he(e, "visible", !1), [c, a] = j(!1);
  let d = !1, s = "";
  const o = () => q(e, "cm-modal"), h = Ae(), m = () => ({
    "cm-modal-wrap": !0,
    "cm-modal-visible": i(),
    "cm-modal-fullscreen": e.fullScreen
  }), $ = () => ({
    "cm-modal-mask": !0,
    "cm-modal-mask-visible": i()
  }), b = () => {
    e.onClickClose && e.onClickClose(), f();
  }, f = () => {
    e.onClosed && e.onClosed(), r(!1);
  }, _ = () => {
    f(), e.onCancel && e.onCancel();
  }, v = () => {
    if (e.onOk && e.onOk(), e.loading) {
      c() || a(!0);
      return;
    }
    f();
  };
  K(() => {
    if (!i())
      a(!1), d && (document.body.style.overflow = s, d = !1);
    else {
      if (t) {
        const z = t.getBoundingClientRect().height;
        t.children[0].getBoundingClientRect().height > z ? (t.style.overflow = "auto", t.children[0].style.top = 0, s = window.getComputedStyle(document.body, null).overflow, s !== "hidden" && (document.body.style.overflow = "hidden", d = !0)) : (t.style.overflow = "none", d = !1), setTimeout(() => {
          t.focus();
        }, 300);
      }
      R && l && l.reset();
    }
  });
  const S = (D) => {
    F && D.target === n && r(!1);
  }, k = (D) => {
    D.keyCode === 27 && r(!1);
  }, w = "cm-modal-portal", M = e.footer ?? !0, A = e.hasCloseIcon ?? !0, L = $e(), y = e.okText || "确 定", x = e.cancleText || "取 消", E = e.mask ?? !0, F = e.maskClosable ?? !0, R = e.resetPostion ?? !1;
  return u(wt, {
    get mount() {
      return Pe(w, w);
    },
    get children() {
      return [u(V, {
        when: E,
        get children() {
          const D = po(), z = n;
          return typeof z == "function" ? X(z, D) : n = D, D.$$click = S, h - 1 != null ? D.style.setProperty("z-index", h - 1) : D.style.removeProperty("z-index"), P((T) => B(D, $(), T)), D;
        }
      }), (() => {
        const D = id();
        D.$$keydown = k;
        const z = t;
        return typeof z == "function" ? X(z, D) : t = D, h != null ? D.style.setProperty("z-index", h) : D.style.removeProperty("z-index"), g(D, u(Rt, {
          ref(T) {
            const O = l;
            typeof O == "function" ? O(T) : l = T;
          },
          get bounds() {
            return e.bounds || "body";
          },
          get style() {
            return e.defaultPosition;
          },
          handle: '.cm-modal-header[data-id="' + L + '"]',
          get disabled() {
            return e.disabled;
          },
          get children() {
            const T = nd(), O = T.firstChild, N = O.nextSibling;
            return Z(O, "data-id", `${L}`), g(O, (() => {
              const I = G(() => !!e.title);
              return () => I() ? (() => {
                const U = rd();
                return g(U, () => e.title), U;
              })() : null;
            })(), null), g(O, u(V, {
              when: A,
              get children() {
                const I = ed();
                return I.$$click = b, g(I, u(W, {
                  name: "x"
                })), I;
              }
            }), null), g(N, () => e.children), g(T, u(V, {
              when: M,
              get children() {
                const I = td();
                return g(I, u(ke, {
                  type: "primary",
                  get loading() {
                    return c();
                  },
                  onClick: v,
                  children: y
                }), null), g(I, u(ke, {
                  type: "default",
                  class: "mr-10",
                  onClick: _,
                  children: x
                }), null), I;
              }
            }), null), P((I) => {
              const U = o(), H = e.style, oe = e.bodyStyle;
              return I._v$ = B(T, U, I._v$), I._v$2 = Y(T, H, I._v$2), I._v$3 = Y(N, oe, I._v$3), I;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }), T;
          }
        })), P((T) => B(D, m(), T)), D;
      })()];
    }
  });
}
function sd() {
  const [e, t] = j(!0);
  return {
    open(n) {
      t(!0);
      let l = "";
      n.status === "success" && (l = "check-circle"), n.status === "info" && (l = "info"), n.status === "warning" && (l = "alert-circle"), n.status === "error" && (l = "x-circle"), n.status === "confirm" && (l = "help-circle");
      const i = (a) => {
        t(a), setTimeout(() => {
          c?.();
        }, 250);
      };
      n.style = {
        "min-width": "24vw",
        ...n.style
      }, n.visible = [e, i], n.defaultPosition = {
        top: "200px",
        ...n.defaultPosition
      };
      const r = Pe("cm-modal-portal-instance", "cm-modal-portal"), c = bt(() => u(ad, ne(n, {
        class: "cm-modal-instance",
        get children() {
          return [(() => {
            const a = ld(), d = a.firstChild;
            return g(d, u(W, {
              name: l,
              size: 24
            })), a;
          })(), (() => {
            const a = cd();
            return g(a, (() => {
              const d = G(() => typeof n.content == "function");
              return () => d() ? n.content() : n.content;
            })()), a;
          })()];
        }
      })), r);
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
const nh = sd();
J(["click", "keydown"]);
const od = /* @__PURE__ */ C('<div class="cm-notification-icon">'), dd = /* @__PURE__ */ C('<div class="cm-notification-head">'), ud = /* @__PURE__ */ C('<span class="cm-notification-btn-wrap">'), fd = /* @__PURE__ */ C('<div><div class="cm-notification-item-wrap"><a class="cm-notification-close"></a><div class="cm-notification-content"><div class="cm-notification-body">'), hd = /* @__PURE__ */ C("<div>"), md = /* @__PURE__ */ C('<div class="cm-notification">');
function gd(e) {
  const [t, n] = j(!1), [l, i] = j(!1);
  let r;
  const c = e.data, {
    style: a,
    icon: d,
    btn: s,
    theme: o,
    title: h,
    content: m
  } = c, $ = () => q(e, "cm-notification-item", {
    "cm-notification-item-width-icon": d,
    "cm-notification-item-open": t(),
    "cm-notification-item-close": l(),
    [`cm-notification-item-${o}`]: o
  });
  ce(() => {
    setTimeout(() => {
      n(!0);
    }), c.duration && setTimeout(() => {
      b();
    }, c.duration * 1e3);
  });
  const b = () => {
    l() || (i(!0), setTimeout(() => {
      f();
    }, 250));
  }, f = () => {
    e.onClose(c.key, c.dock), c.onClose && c.onClose();
  };
  return (() => {
    const _ = fd(), v = _.firstChild, S = v.firstChild, k = S.nextSibling, w = k.firstChild, M = r;
    return typeof M == "function" ? X(M, _) : r = _, S.$$click = b, g(S, u(W, {
      name: "x",
      size: 16
    })), g(v, u(V, {
      when: d,
      get children() {
        const A = od();
        return g(A, u(W, {
          name: d
        })), A;
      }
    }), k), g(k, u(V, {
      when: h,
      get children() {
        const A = dd();
        return g(A, h), A;
      }
    }), w), g(w, m), g(k, u(V, {
      when: s,
      get children() {
        const A = ud();
        return g(A, s), A;
      }
    }), null), P((A) => {
      const L = $(), y = a;
      return A._v$ = B(_, L, A._v$), A._v$2 = Y(_, y, A._v$2), A;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), _;
  })();
}
function ht(e) {
  const t = () => e.data, n = Ae();
  return u(V, {
    get when() {
      return G(() => !!t())() && t().length;
    },
    get children() {
      const l = hd();
      return n != null ? l.style.setProperty("z-index", n) : l.style.removeProperty("z-index"), g(l, u(p, {
        get each() {
          return t();
        },
        children: (i) => u(gd, {
          data: i,
          get onClose() {
            return e.onClose;
          }
        })
      })), P(() => Re(l, `cm-notification-box cm-notification-${e.docker}`)), l;
    }
  });
}
function vd(e) {
  const t = () => e.data;
  return (() => {
    const n = md();
    return g(n, u(ht, {
      get data() {
        return t().topLeft;
      },
      docker: "top-left",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, u(ht, {
      get data() {
        return t().topRight;
      },
      docker: "top-right",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, u(ht, {
      get data() {
        return t().bottomLeft;
      },
      docker: "bottom-left",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, u(ht, {
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
function $d() {
  const [e, t] = re({
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: []
  }), n = (i, r) => {
    const c = e[r].filter((a) => a.key !== i);
    t(r, c);
  }, l = Pe("cm-notice-portal", "cm-notices-wrap");
  return bt(() => u(vd, {
    data: e,
    onClose: n
  }), l), {
    open(i) {
      i.dock || (i.dock = "topRight"), i.key === void 0 && (i.key = $e()), i.duration === void 0 && (i.duration = 4.5), t(i.dock, ie((r) => {
        r.push(i);
      })), l.style.zIndex = Ae();
    },
    info(i) {
      i.icon = "info", i.theme = "info", this.open(i);
    },
    success(i) {
      i.icon = "check-circle", i.theme = "success", this.open(i);
    },
    warning(i) {
      i.icon = "alert-circle", i.theme = "warning", this.open(i);
    },
    error(i) {
      i.icon = "x-circle", i.theme = "error", this.open(i);
    },
    help(i) {
      i.icon = "help-circle", i.theme = "info", this.open(i);
    }
  };
}
const ih = $d(), _d = /* @__PURE__ */ C("<div>");
function rh(e) {
  const t = () => q(e, "cm-footer-floor", {
    "cm-footer-floor-center": e.center,
    "cm-footer-floor-divider-top": e.dividerTop,
    "cm-footer-floor-divider-bottom": e.dividerBottom
  }), n = () => De(e, {
    padding: e.padding,
    color: e.color
  });
  return (() => {
    const l = _d();
    return g(l, () => e.children), P((i) => {
      const r = t(), c = n();
      return i._v$ = B(l, r, i._v$), i._v$2 = Y(l, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
const yd = /* @__PURE__ */ C('<div class="cm-page-footer-navigations">'), wd = /* @__PURE__ */ C('<div class="cm-page-footer-navigation"><dl><dt>'), bd = /* @__PURE__ */ C('<dd class="cm-page-footer-navigation-link"><a target="_blank">');
function lh(e) {
  return (() => {
    const t = yd();
    return g(t, () => e.children), t;
  })();
}
function xd(e) {
  return (() => {
    const t = wd(), n = t.firstChild, l = n.firstChild;
    return g(l, () => e.head), g(n, () => e.children, null), t;
  })();
}
function Cd(e) {
  return (() => {
    const t = bd(), n = t.firstChild;
    return g(n, () => e.icon, null), g(n, () => e.children, null), P((l) => {
      const i = e.link, r = e.style;
      return i !== l._v$ && Z(n, "href", l._v$ = i), l._v$2 = Y(n, r, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), t;
  })();
}
xd.Link = Cd;
const kd = /* @__PURE__ */ C("<div>");
function ch(e) {
  const t = () => q(e, "cm-page-footer");
  return (() => {
    const n = kd();
    return g(n, () => e.children), P((l) => {
      const i = t(), r = e.style;
      return l._v$ = B(n, i, l._v$), l._v$2 = Y(n, r, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Ld = /* @__PURE__ */ C("<li>");
function Mn(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-prev": !0,
    "cm-pagination-num-disabled": e.current === 1
  });
  return (() => {
    const n = Ld();
    return fe(n, "click", e.onClick, !0), g(n, u(W, {
      name: "chevron-left",
      size: 14
    })), P((l) => B(n, t(), l)), n;
  })();
}
J(["click"]);
const Sd = /* @__PURE__ */ C("<li>");
function Dn(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-next": !0,
    "cm-pagination-num-disabled": e.disabled
  });
  return (() => {
    const n = Sd();
    return fe(n, "click", e.onClick, !0), g(n, u(W, {
      name: "chevron-right",
      size: 14
    })), P((l) => B(n, t(), l)), n;
  })();
}
J(["click"]);
const Ed = /* @__PURE__ */ C("<li>");
function Tt(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-item-active": e.active
  });
  return (() => {
    const n = Ed();
    return fe(n, "click", e.onClick, !0), g(n, () => e.currentIndex), P((l) => B(n, t(), l)), n;
  })();
}
J(["click"]);
const Tn = /* @__PURE__ */ C('<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••'), Md = /* @__PURE__ */ C('<ul class="cm-pagination-num-list"><span class="cm-pagination-mini-pages">/ '), Dd = /* @__PURE__ */ C('<span class="cm-pagination-text mr-5">共<!>条'), Td = /* @__PURE__ */ C('<ul class="cm-pagination-num-list">'), Rd = /* @__PURE__ */ C('<span class="cm-pagination-sizer">'), zd = /* @__PURE__ */ C('<span class="cm-pagination-jumper"><span class="cm-pagination-text">跳至</span><span class="cm-pagination-text">页'), Pd = /* @__PURE__ */ C("<div>"), Rn = [{
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
function ah(e) {
  const t = () => q(e, "cm-pagination", {
    [`cm-pagination-${e.shape}`]: e.shape,
    [`cm-pagination-${e.size}`]: e.size
  }), n = () => e.current, l = () => e.total ?? 0, i = () => e.pageSize ?? 10, r = e.innerNear ?? 2, c = e.startEndShowNum ?? 2, a = e.showNums ?? !0, d = e.showTotal ?? !0, s = e.pages ?? Rn, o = e.showJumper ?? !0, h = e.showPage ?? !0, [m, $] = j(n());
  K(() => {
    n() != m() && $(n());
  });
  const b = () => {
    n() > 1 && k(n() - 1);
  }, f = () => {
    n() < v() && k(n() + 1);
  }, _ = (L) => {
    k(parseInt(L, 10));
  }, v = () => l() === 0 ? 1 : Math.floor((l() - 1) / i()) + 1, S = (L) => typeof L == "number" && L >= 1, k = (L) => {
    let y = L;
    S(y) && y !== n() && (y > v() && (y = v()), $(y), e.onChange && e.onChange(y, i()));
  }, w = (L) => {
    const y = Math.floor((l() - 1) / L) + 1;
    e.onChangePageSize && e.onChangePageSize(L), n() > y && ($(1), e.onChange && e.onChange(1, i()));
  };
  function M() {
    const L = v(), y = n() > c + r + 1 ? n() - r : c + 1, x = n() + r + c >= L ? L - c : n() + r;
    return {
      start: y,
      end: x
    };
  }
  function A() {
    if (!a)
      return null;
    const L = v(), y = [], x = M(), E = n();
    for (let D = 1; D <= c; D++) {
      const z = E === D;
      y.push(u(Tt, {
        active: z,
        get onClick() {
          return k.bind(null, D);
        },
        currentIndex: D
      }));
    }
    E > c + r + 1 && y.push(Tn());
    let F = x.start;
    const R = x.end;
    for (; F <= R; F++) {
      const D = E === F;
      y.push(u(Tt, {
        get onClick() {
          return k.bind(null, F);
        },
        currentIndex: F,
        active: D
      }));
    }
    E + r + c < L && y.push(Tn());
    for (let D = L - c + 1; D <= L; D++) {
      const z = E === D;
      y.push(u(Tt, {
        active: z,
        get onClick() {
          return k.bind(null, D);
        },
        currentIndex: D
      }));
    }
    return y;
  }
  return (() => {
    const L = Pd();
    return g(L, u(Le, {
      get children() {
        return [u(Q, {
          get when() {
            return e.mini;
          },
          get children() {
            const y = Md(), x = y.firstChild;
            return x.firstChild, g(y, u(Mn, {
              current: n,
              onClick: b
            }), x), g(y, u(_e, {
              get style() {
                return {
                  width: e.size === "small" ? "35px" : "50px"
                };
              },
              class: "mr-5",
              value: [m, $],
              get size() {
                return e.size;
              },
              onChange: _
            }), x), g(x, v, null), g(y, u(Dn, {
              current: n,
              onClick: f,
              get disabled() {
                return n() === v();
              }
            }), null), y;
          }
        }), u(Q, {
          get when() {
            return !e.mini;
          },
          get children() {
            return [u(V, {
              when: d,
              get children() {
                const y = Dd(), x = y.firstChild, E = x.nextSibling;
                return E.nextSibling, g(y, l, E), y;
              }
            }), (() => {
              const y = Td();
              return g(y, u(Mn, {
                current: n,
                onClick: b
              }), null), g(y, A, null), g(y, u(Dn, {
                current: n,
                onClick: f,
                get disabled() {
                  return n() === v();
                }
              }), null), y;
            })(), u(V, {
              when: h,
              get children() {
                const y = Rd();
                return g(y, u(ti, {
                  get value() {
                    return i();
                  },
                  get size() {
                    return e.size;
                  },
                  onChange: w,
                  data: s,
                  get children() {
                    return u(p, {
                      each: Rn,
                      children: (x) => u(Aa, {
                        get label() {
                          return x.label;
                        },
                        get value() {
                          return x.value;
                        }
                      })
                    });
                  }
                })), y;
              }
            }), u(V, {
              when: o,
              get children() {
                const y = zd(), x = y.firstChild, E = x.nextSibling;
                return g(y, u(_e, {
                  get style() {
                    return {
                      width: e.size === "small" ? "35px" : "50px"
                    };
                  },
                  class: "mr-5",
                  value: [m, $],
                  get size() {
                    return e.size;
                  },
                  onChange: _
                }), E), y;
              }
            })];
          }
        })];
      }
    })), P((y) => {
      const x = t(), E = e.style;
      return y._v$ = B(L, x, y._v$), y._v$2 = Y(L, E, y._v$2), y;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), L;
  })();
}
function ve(e, t, n) {
  if (t < 0 || t > 31 || e >>> t)
    throw new RangeError("Value out of range");
  for (let l = t - 1; l >= 0; l--)
    n.push(e >>> l & 1);
}
function Ee(e, t) {
  return (e >>> t & 1) != 0;
}
function we(e) {
  if (!e)
    throw new Error("Assertion error");
}
var Ne;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(i, r, c, a) {
      if (this.version = i, this.errorCorrectionLevel = r, i < t.MIN_VERSION || i > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (a < -1 || a > 7)
        throw new RangeError("Mask value out of range");
      this.size = i * 4 + 17;
      const d = [];
      for (let o = 0; o < this.size; o++)
        d.push(!1);
      for (let o = 0; o < this.size; o++)
        this.modules.push(d.slice()), this.isFunction.push(d.slice());
      this.drawFunctionPatterns();
      const s = this.addEccAndInterleave(c);
      if (this.drawCodewords(s), a == -1) {
        let o = 1e9;
        for (let h = 0; h < 8; h++) {
          this.applyMask(h), this.drawFormatBits(h);
          const m = this.getPenaltyScore();
          m < o && (a = h, o = m), this.applyMask(h);
        }
      }
      we(0 <= a && a <= 7), this.mask = a, this.applyMask(a), this.drawFormatBits(a), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(i, r) {
      const c = e.QrSegment.makeSegments(i);
      return t.encodeSegments(c, r);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(i, r) {
      const c = e.QrSegment.makeBytes(i);
      return t.encodeSegments([c], r);
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
    static encodeSegments(i, r, c = 1, a = 40, d = -1, s = !0) {
      if (!(t.MIN_VERSION <= c && c <= a && a <= t.MAX_VERSION) || d < -1 || d > 7)
        throw new RangeError("Invalid value");
      let o, h;
      for (o = c; ; o++) {
        const f = t.getNumDataCodewords(o, r) * 8, _ = n.getTotalBits(i, o);
        if (_ <= f) {
          h = _;
          break;
        }
        if (o >= a)
          throw new RangeError("Data too long");
      }
      for (const f of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        s && h <= t.getNumDataCodewords(o, f) * 8 && (r = f);
      const m = [];
      for (const f of i) {
        ve(f.mode.modeBits, 4, m), ve(f.numChars, f.mode.numCharCountBits(o), m);
        for (const _ of f.getData())
          m.push(_);
      }
      we(m.length == h);
      const $ = t.getNumDataCodewords(o, r) * 8;
      we(m.length <= $), ve(0, Math.min(4, $ - m.length), m), ve(0, (8 - m.length % 8) % 8, m), we(m.length % 8 == 0);
      for (let f = 236; m.length < $; f ^= 253)
        ve(f, 8, m);
      const b = [];
      for (; b.length * 8 < m.length; )
        b.push(0);
      return m.forEach((f, _) => b[_ >>> 3] |= f << 7 - (_ & 7)), new t(o, r, b, d);
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
    getModule(i, r) {
      return 0 <= i && i < this.size && 0 <= r && r < this.size && this.modules[r][i];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const i = this.getAlignmentPatternPositions(), r = i.length;
      for (let c = 0; c < r; c++)
        for (let a = 0; a < r; a++)
          c == 0 && a == 0 || c == 0 && a == r - 1 || c == r - 1 && a == 0 || this.drawAlignmentPattern(i[c], i[a]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(i) {
      const r = this.errorCorrectionLevel.formatBits << 3 | i;
      let c = r;
      for (let d = 0; d < 10; d++)
        c = c << 1 ^ (c >>> 9) * 1335;
      const a = (r << 10 | c) ^ 21522;
      we(a >>> 15 == 0);
      for (let d = 0; d <= 5; d++)
        this.setFunctionModule(8, d, Ee(a, d));
      this.setFunctionModule(8, 7, Ee(a, 6)), this.setFunctionModule(8, 8, Ee(a, 7)), this.setFunctionModule(7, 8, Ee(a, 8));
      for (let d = 9; d < 15; d++)
        this.setFunctionModule(14 - d, 8, Ee(a, d));
      for (let d = 0; d < 8; d++)
        this.setFunctionModule(this.size - 1 - d, 8, Ee(a, d));
      for (let d = 8; d < 15; d++)
        this.setFunctionModule(8, this.size - 15 + d, Ee(a, d));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let i = this.version;
      for (let c = 0; c < 12; c++)
        i = i << 1 ^ (i >>> 11) * 7973;
      const r = this.version << 12 | i;
      we(r >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const a = Ee(r, c), d = this.size - 11 + c % 3, s = Math.floor(c / 3);
        this.setFunctionModule(d, s, a), this.setFunctionModule(s, d, a);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(i, r) {
      for (let c = -4; c <= 4; c++)
        for (let a = -4; a <= 4; a++) {
          const d = Math.max(Math.abs(a), Math.abs(c)), s = i + a, o = r + c;
          0 <= s && s < this.size && 0 <= o && o < this.size && this.setFunctionModule(s, o, d != 2 && d != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(i, r) {
      for (let c = -2; c <= 2; c++)
        for (let a = -2; a <= 2; a++)
          this.setFunctionModule(i + a, r + c, Math.max(Math.abs(a), Math.abs(c)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(i, r, c) {
      this.modules[r][i] = c, this.isFunction[r][i] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(i) {
      const r = this.version, c = this.errorCorrectionLevel;
      if (i.length != t.getNumDataCodewords(r, c))
        throw new RangeError("Invalid argument");
      const a = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][r], d = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][r], s = Math.floor(t.getNumRawDataModules(r) / 8), o = a - s % a, h = Math.floor(s / a), m = [], $ = t.reedSolomonComputeDivisor(d);
      for (let f = 0, _ = 0; f < a; f++) {
        const v = i.slice(_, _ + h - d + (f < o ? 0 : 1));
        _ += v.length;
        const S = t.reedSolomonComputeRemainder(v, $);
        f < o && v.push(0), m.push(v.concat(S));
      }
      const b = [];
      for (let f = 0; f < m[0].length; f++)
        m.forEach((_, v) => {
          (f != h - d || v >= o) && b.push(_[f]);
        });
      return we(b.length == s), b;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(i) {
      if (i.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let r = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let a = 0; a < this.size; a++)
          for (let d = 0; d < 2; d++) {
            const s = c - d, h = (c + 1 & 2) == 0 ? this.size - 1 - a : a;
            !this.isFunction[h][s] && r < i.length * 8 && (this.modules[h][s] = Ee(i[r >>> 3], 7 - (r & 7)), r++);
          }
      }
      we(r == i.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(i) {
      if (i < 0 || i > 7)
        throw new RangeError("Mask value out of range");
      for (let r = 0; r < this.size; r++)
        for (let c = 0; c < this.size; c++) {
          let a;
          switch (i) {
            case 0:
              a = (c + r) % 2 == 0;
              break;
            case 1:
              a = r % 2 == 0;
              break;
            case 2:
              a = c % 3 == 0;
              break;
            case 3:
              a = (c + r) % 3 == 0;
              break;
            case 4:
              a = (Math.floor(c / 3) + Math.floor(r / 2)) % 2 == 0;
              break;
            case 5:
              a = c * r % 2 + c * r % 3 == 0;
              break;
            case 6:
              a = (c * r % 2 + c * r % 3) % 2 == 0;
              break;
            case 7:
              a = ((c + r) % 2 + c * r % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[r][c] && a && (this.modules[r][c] = !this.modules[r][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let i = 0;
      for (let d = 0; d < this.size; d++) {
        let s = !1, o = 0;
        const h = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[d][m] == s ? (o++, o == 5 ? i += t.PENALTY_N1 : o > 5 && i++) : (this.finderPenaltyAddHistory(o, h), s || (i += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), s = this.modules[d][m], o = 1);
        i += this.finderPenaltyTerminateAndCount(s, o, h) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size; d++) {
        let s = !1, o = 0;
        const h = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][d] == s ? (o++, o == 5 ? i += t.PENALTY_N1 : o > 5 && i++) : (this.finderPenaltyAddHistory(o, h), s || (i += this.finderPenaltyCountPatterns(h) * t.PENALTY_N3), s = this.modules[m][d], o = 1);
        i += this.finderPenaltyTerminateAndCount(s, o, h) * t.PENALTY_N3;
      }
      for (let d = 0; d < this.size - 1; d++)
        for (let s = 0; s < this.size - 1; s++) {
          const o = this.modules[d][s];
          o == this.modules[d][s + 1] && o == this.modules[d + 1][s] && o == this.modules[d + 1][s + 1] && (i += t.PENALTY_N2);
        }
      let r = 0;
      for (const d of this.modules)
        r = d.reduce((s, o) => s + (o ? 1 : 0), r);
      const c = this.size * this.size, a = Math.ceil(Math.abs(r * 20 - c * 10) / c) - 1;
      return we(0 <= a && a <= 9), i += a * t.PENALTY_N4, we(0 <= i && i <= 2568888), i;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const i = Math.floor(this.version / 7) + 2, r = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (i * 2 - 2)) * 2, c = [6];
        for (let a = this.size - 7; c.length < i; a -= r)
          c.splice(1, 0, a);
        return c;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(i) {
      if (i < t.MIN_VERSION || i > t.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let r = (16 * i + 128) * i + 64;
      if (i >= 2) {
        const c = Math.floor(i / 7) + 2;
        r -= (25 * c - 10) * c - 55, i >= 7 && (r -= 36);
      }
      return we(208 <= r && r <= 29648), r;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(i, r) {
      return Math.floor(t.getNumRawDataModules(i) / 8) - t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][i] * t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][i];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(i) {
      if (i < 1 || i > 255)
        throw new RangeError("Degree out of range");
      const r = [];
      for (let a = 0; a < i - 1; a++)
        r.push(0);
      r.push(1);
      let c = 1;
      for (let a = 0; a < i; a++) {
        for (let d = 0; d < r.length; d++)
          r[d] = t.reedSolomonMultiply(r[d], c), d + 1 < r.length && (r[d] ^= r[d + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return r;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(i, r) {
      const c = r.map((a) => 0);
      for (const a of i) {
        const d = a ^ c.shift();
        c.push(0), r.forEach((s, o) => c[o] ^= t.reedSolomonMultiply(s, d));
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(i, r) {
      if (i >>> 8 || r >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let a = 7; a >= 0; a--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (r >>> a & 1) * i;
      return we(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(i) {
      const r = i[1];
      we(r <= this.size * 3);
      const c = r > 0 && i[2] == r && i[3] == r * 3 && i[4] == r && i[5] == r;
      return (c && i[0] >= r * 4 && i[6] >= r ? 1 : 0) + (c && i[6] >= r * 4 && i[0] >= r ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(i, r, c) {
      return i && (this.finderPenaltyAddHistory(r, c), r = 0), r += this.size, this.finderPenaltyAddHistory(r, c), this.finderPenaltyCountPatterns(c);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(i, r) {
      r[0] == 0 && (i += this.size), r.pop(), r.unshift(i);
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
    constructor(i, r, c) {
      if (this.mode = i, this.numChars = r, this.bitData = c, r < 0)
        throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(i) {
      const r = [];
      for (const c of i)
        ve(c, 8, r);
      return new n(n.Mode.BYTE, i.length, r);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(i) {
      if (!n.isNumeric(i))
        throw new RangeError("String contains non-numeric characters");
      const r = [];
      for (let c = 0; c < i.length; ) {
        const a = Math.min(i.length - c, 3);
        ve(parseInt(i.substring(c, c + a), 10), a * 3 + 1, r), c += a;
      }
      return new n(n.Mode.NUMERIC, i.length, r);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(i) {
      if (!n.isAlphanumeric(i))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      const r = [];
      let c;
      for (c = 0; c + 2 <= i.length; c += 2) {
        let a = n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(c)) * 45;
        a += n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(c + 1)), ve(a, 11, r);
      }
      return c < i.length && ve(n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(c)), 6, r), new n(n.Mode.ALPHANUMERIC, i.length, r);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(i) {
      return i == "" ? [] : n.isNumeric(i) ? [n.makeNumeric(i)] : n.isAlphanumeric(i) ? [n.makeAlphanumeric(i)] : [n.makeBytes(n.toUtf8ByteArray(i))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(i) {
      const r = [];
      if (i < 0)
        throw new RangeError("ECI assignment value out of range");
      if (i < 128)
        ve(i, 8, r);
      else if (i < 16384)
        ve(2, 2, r), ve(i, 14, r);
      else if (i < 1e6)
        ve(6, 3, r), ve(i, 21, r);
      else
        throw new RangeError("ECI assignment value out of range");
      return new n(n.Mode.ECI, 0, r);
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
    static getTotalBits(i, r) {
      let c = 0;
      for (const a of i) {
        const d = a.mode.numCharCountBits(r);
        if (a.numChars >= 1 << d)
          return 1 / 0;
        c += 4 + d + a.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(i) {
      i = encodeURI(i);
      const r = [];
      for (let c = 0; c < i.length; c++)
        i.charAt(c) != "%" ? r.push(i.charCodeAt(c)) : (r.push(parseInt(i.substring(c + 1, c + 3), 16)), c += 2);
      return r;
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
})(Ne || (Ne = {}));
((e) => {
  ((t) => {
    class n {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(i, r) {
        this.ordinal = i, this.formatBits = r;
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
})(Ne || (Ne = {}));
((e) => {
  ((t) => {
    class n {
      /*-- Constructor and fields --*/
      constructor(i, r) {
        this.modeBits = i, this.numBitsCharCount = r;
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
})(Ne || (Ne = {}));
const Ze = Ne, Ad = /* @__PURE__ */ C("<img>"), Id = /* @__PURE__ */ C("<canvas>"), Fd = /* @__PURE__ */ C("<div>"), Od = {
  L: Ze.QrCode.Ecc.LOW,
  M: Ze.QrCode.Ecc.MEDIUM,
  Q: Ze.QrCode.Ecc.QUARTILE,
  H: Ze.QrCode.Ecc.HIGH
}, Nd = 128, Bd = "L", oi = "#FFFFFF", Vd = "#000000", Yd = !1, qd = 0.25, Hd = 4, Ud = 0;
function jd(e, t = 0) {
  const n = [];
  return e.forEach(function(l, i) {
    let r = null;
    l.forEach(function(c, a) {
      if (!c && r !== null) {
        n.push(`M${r + t} ${i + t}h${a - r}v1H${r + t}z`), r = null;
        return;
      }
      if (a === l.length - 1) {
        if (!c)
          return;
        r === null ? n.push(`M${a + t},${i + t} h1v1H${a + t}z`) : n.push(`M${r + t},${i + t} h${a + 1 - r}v1H${r + t}z`);
        return;
      }
      c && r === null && (r = a);
    });
  }), n.join("");
}
function Xd(e, t) {
  return t != null ? Math.floor(t) : e ? Hd : Ud;
}
function Wd(e, t, n, l) {
  if (l == null)
    return null;
  const i = e.length + n * 2, r = Math.floor(t * qd), c = i / t, a = (l.width || r) * c, d = (l.height || r) * c, s = l.x == null ? e.length / 2 - a / 2 : l.x * c, o = l.y == null ? e.length / 2 - d / 2 : l.y * c;
  let h = null;
  if (l.excavate) {
    const m = Math.floor(s), $ = Math.floor(o), b = Math.ceil(a + s - m), f = Math.ceil(d + o - $);
    h = {
      x: m,
      y: $,
      w: b,
      h: f
    };
  }
  return {
    x: s,
    y: o,
    h: d,
    w: a,
    excavation: h
  };
}
function Kd(e, t) {
  return e.slice().map((n, l) => l < t.y || l >= t.y + t.h ? n : n.map((i, r) => r < t.x || r >= t.x + t.w ? i : !1));
}
const Gd = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function Zd(e) {
  const {
    value: t,
    size: n = Nd,
    level: l = Bd,
    bgColor: i = oi,
    color: r = Vd,
    includeMargin: c = Yd,
    marginSize: a,
    style: d,
    icon: s,
    ref: o,
    ...h
  } = e;
  let {
    imageSettings: m
  } = e;
  m = m ?? s ? {
    excavate: !0
  } : void 0;
  const $ = s;
  let b, f;
  o && o({
    download: () => {
      const w = b.toDataURL("image/png");
      if ("download" in document.createElement("a")) {
        const M = document.createElement("a");
        M.download = "", M.style.display = "none", M.href = w, document.body.appendChild(M), M.click(), URL.revokeObjectURL(M.href), document.body.removeChild(M);
      }
    }
  });
  const [_, v] = j(!1);
  K(() => {
    if (b) {
      const w = b.getContext("2d");
      if (!w)
        return;
      let M = Ze.QrCode.encodeText(e.value, Od[l]).getModules();
      const A = Xd(c, a), L = M.length + A * 2;
      w.clearRect(0, 0, L, L);
      const y = Wd(M, n, A, m), x = f, E = _() && y != null && x !== null && x.complete && x.naturalHeight !== 0 && x.naturalWidth !== 0;
      E && y.excavation != null && (M = Kd(M, y.excavation));
      const F = window.devicePixelRatio || 1;
      b.height = b.width = n * F;
      const R = n / L * F;
      w.scale(R, R), w.fillStyle = i, w.fillRect(0, 0, L, L), w.fillStyle = r, Gd ? w.fill(new Path2D(jd(M, A))) : M.forEach(function(D, z) {
        D.forEach(function(T, O) {
          T && w.fillRect(O + A, z + A, 1, 1);
        });
      }), E && w.drawImage(x, y.x + A, y.y + A, y.w, y.h);
    }
  }), K(() => {
    v(!1);
  });
  const S = {
    height: n + "px",
    width: n + "px",
    ...d
  };
  let k = null;
  return $ != null && (k = (() => {
    const w = Ad(), M = f;
    return typeof M == "function" ? X(M, w) : f = w, w.addEventListener("load", () => {
      v(!0);
    }), Z(w, "src", $), w.style.setProperty("display", "none"), w;
  })()), [(() => {
    const w = Id(), M = b;
    return typeof M == "function" ? X(M, w) : b = w, Z(w, "height", n), Z(w, "width", n), Ce(w, h, !1, !1), P((A) => Y(w, S, A)), w;
  })(), k];
}
function sh(e) {
  const t = () => q(e, "cm-qrcode");
  return (() => {
    const n = Fd();
    return g(n, u(Zd, e)), P((l) => {
      const i = t(), r = e.bgColor || oi;
      return l._v$ = B(n, i, l._v$), r !== l._v$2 && ((l._v$2 = r) != null ? n.style.setProperty("background-color", r) : n.style.removeProperty("background-color")), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Jd = /* @__PURE__ */ C('<div><div class="cm-sbs-right-panel"></div><div class="cm-sbs-left-panel"></div><div class="cm-sbs-handler"><div class="cm-sbs-track"><div class="cm-sbs-line"></div><div class="cm-sbs-line"></div><div class="cm-sbs-line">');
function oh(e) {
  const t = () => q(e, "cm-side-by-side"), [n, l] = j(50), [i, r] = re({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  });
  let c;
  K(() => {
    const m = c.getBoundingClientRect();
    let $ = xe(() => n());
    $ = $ + i.deltaX / m.width * 100, $ = Math.min($, 100), $ = Math.max($, 0), l($);
  });
  const a = (m) => {
    if (typeof m.button == "number" && m.button !== 0)
      return !1;
    r("dragging", !0);
    const $ = m.clientX, b = m.clientY;
    r("x", $), r("y", b), document.addEventListener("mousemove", d, !1), document.addEventListener("mouseup", s, !1);
  }, d = (m) => {
    const $ = m.clientX - i.x, b = m.clientY - i.y;
    r("x", m.clientX), r("y", m.clientY), r("deltaX", $), r("deltaY", b);
  }, s = (m) => {
    r("dragging", !1), document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", s), r("deltaX", 0), r("deltaY", 0);
  }, o = () => ({
    "clip-path": `inset(0 ${100 - n()}% 0 0)`
  }), h = () => ({
    left: `${n()}%`
  });
  return le(() => {
    document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", s);
  }), (() => {
    const m = Jd(), $ = m.firstChild, b = $.nextSibling, f = b.nextSibling, _ = c;
    return typeof _ == "function" ? X(_, m) : c = m, g($, () => e.right), g(b, () => e.left), f.$$mousedown = a, P((v) => {
      const S = t(), k = e.style, w = o(), M = h();
      return v._v$ = B(m, S, v._v$), v._v$2 = Y(m, k, v._v$2), v._v$3 = Y(b, w, v._v$3), v._v$4 = Y(f, M, v._v$4), v;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), m;
  })();
}
J(["mousedown"]);
const Qd = /* @__PURE__ */ C("<div>"), pd = /* @__PURE__ */ C("<ul>"), eu = /* @__PURE__ */ C("<li>");
function tu(e) {
  const t = e.size ?? "medium", n = e.shape ?? "circle", l = () => q(e, "cm-skeleton-item", {
    [`cm-skeleton-${e.type}`]: e.type,
    [`cm-skeleton-${e.type}-${t}`]: t,
    [`cm-skeleton-${e.type}-${n}`]: n,
    ["cm-skeleton-inline"]: e.inline
  }), i = () => De(e, {
    width: typeof e.size == "number" ? e.size + "px" : e.width,
    height: typeof e.size == "number" ? e.size + "px" : e.height
  });
  return (() => {
    const r = Qd();
    return P((c) => {
      const a = l(), d = i();
      return c._v$ = B(r, a, c._v$), c._v$2 = Y(r, d, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const ct = (e) => (t) => u(tu, ne({
  type: e
}, t)), nu = ct("avatar"), iu = ct("image"), ru = ct("title"), lu = ct("button"), cu = ct("item");
function au(e) {
  const t = e.rows ?? 4, n = () => q(e, "cm-skeleton-paragraph"), l = new Array(t).fill(1), i = () => De(e, {
    width: e.width
  });
  return (() => {
    const r = pd();
    return g(r, u(p, {
      each: l,
      children: (c, a) => {
        const d = {};
        return e.width && e.width instanceof Array && (d.width = e.width[a()]), (() => {
          const s = eu();
          return Y(s, d), s;
        })();
      }
    })), P((c) => {
      const a = n(), d = i();
      return c._v$3 = B(r, a, c._v$3), c._v$4 = Y(r, d, c._v$4), c;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), r;
  })();
}
const su = /* @__PURE__ */ C("<div>");
function Xe(e) {
  const t = () => q(e, "cm-skeleton", {
    "cm-skeleton-active": e.active
  }), n = () => De(e, {
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
      const l = su();
      return g(l, () => e.placeholder), P((i) => {
        const r = t(), c = n();
        return i._v$ = B(l, r, i._v$), i._v$2 = Y(l, c, i._v$2), i;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), l;
    }
  });
}
Xe.Avatar = nu;
Xe.Image = iu;
Xe.Title = ru;
Xe.Button = lu;
Xe.Item = cu;
Xe.Paragraph = au;
const ou = /* @__PURE__ */ C('<div><div></div><div class="cm-slpit-handler-wrap"><div><div class="cm-split-handler-bar-wrap"></div></div></div><div>'), du = /* @__PURE__ */ C('<div class="cm-split-handler-bar">');
function dh(e) {
  const t = e.dir || "v", n = () => q(e, "cm-split-wrap", {
    [`cm-split-wrap-${t}`]: t
  });
  let l = e.split;
  l && l < 1 && (l = l * 100 + "%");
  const [i, r] = j(l || "50%"), c = e.min || 40;
  let a, d;
  const s = () => ({
    "cm-split-handler": !0,
    "cm-split-dragging": b.dragging,
    [`cm-split-handler-${t}`]: !!t
  }), o = Vn(e.children);
  o.prev || console.warn("Split need prev Slot Element"), o.next || console.warn("Split need next Slot Element"), K(() => {
    const k = a.getBoundingClientRect(), w = t === "v" ? k.width : k.height;
    let M = t === "v" ? d.style.width : d.style.height;
    M.indexOf("px") > -1 ? M = parseFloat(M) / w * 100 : M = parseFloat(M);
    const A = e.max ? e.max / w * 100 : 100 - c / w * 100;
    M = M + (t === "v" ? b.deltaX : b.deltaY) / w * 100, M = Math.max(M, c / w * 100), M = Math.min(M, A), r(M + "%");
  });
  const h = () => ({
    [`${t === "v" ? "width" : "height"}`]: i()
  }), m = () => ({
    [`${t === "v" ? "left" : "top"}`]: i()
  }), $ = {
    flex: "1"
  }, [b, f] = re({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  }), _ = (k) => {
    if (typeof k.button == "number" && k.button !== 0)
      return !1;
    f("dragging", !0);
    const w = k.clientX, M = k.clientY;
    f("x", w), f("y", M), document.addEventListener("mousemove", v, !1), document.addEventListener("mouseup", S, !1);
  }, v = (k) => {
    const w = k.clientX - b.x, M = k.clientY - b.y;
    f("x", k.clientX), f("y", k.clientY), f("deltaX", w), f("deltaY", M);
  }, S = (k) => {
    f("dragging", !1), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", S), f("deltaX", 0), f("deltaY", 0);
  };
  return le(() => {
    document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", S);
  }), (() => {
    const k = ou(), w = k.firstChild, M = w.nextSibling, A = M.firstChild, L = A.firstChild, y = M.nextSibling, x = a;
    typeof x == "function" ? X(x, k) : a = k;
    const E = d;
    return typeof E == "function" ? X(E, w) : d = w, Re(w, `cm-split-panel cm-split-${t === "v" ? "left" : "top"}`), g(w, () => o.prev), A.$$mousedown = _, g(L, u(p, {
      each: [1, 2, 3, 4, 5, 6, 7, 8],
      children: () => du()
    })), Y(y, $), Re(y, `cm-split-panel cm-split-${t === "v" ? "right" : "bottom"}`), g(y, () => o.next), P((F) => {
      const R = n(), D = h(), z = m(), T = s();
      return F._v$ = B(k, R, F._v$), F._v$2 = Y(w, D, F._v$2), F._v$3 = Y(M, z, F._v$3), F._v$4 = B(A, T, F._v$4), F;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), k;
  })();
}
J(["mousedown"]);
const uu = /* @__PURE__ */ C('<div class="cm-step-head-inner">'), fu = /* @__PURE__ */ C('<div class="cm-step-head-inner"><span>'), hu = /* @__PURE__ */ C('<div><div class="cm-step-head"></div><div class="cm-step-main"><div class="cm-step-title"></div><div class="cm-step-description">');
function mu(e) {
  const t = () => {
    if (e.status)
      return e.status;
    let r = "";
    return e.current + 1 > e.index && (r = "finished"), e.current + 1 === e.index && (r = "process"), r || "wait";
  }, n = () => {
    let r = "";
    return e.current + 1 > e.index && (r = "done"), e.current + 1 === e.index && (r = "active"), r;
  }, l = () => q(e, "cm-steps-item", {
    [`cm-steps-status-${t()}`]: t(),
    [`cm-steps-status-${n()}`]: n()
  }), i = () => {
    let r = "";
    return e.icon ? r = e.icon : t() === "finished" ? r = (() => {
      const c = uu();
      return g(c, u(W, {
        name: "check"
      })), c;
    })() : t() === "error" ? r = u(W, {
      name: "x-circle",
      size: 26
    }) : t() === "warning" ? r = u(W, {
      name: "alert-triangle",
      size: 26
    }) : r = (() => {
      const c = fu(), a = c.firstChild;
      return g(a, () => e.index), c;
    })(), r;
  };
  return (() => {
    const r = hu(), c = r.firstChild, a = c.nextSibling, d = a.firstChild, s = d.nextSibling;
    return g(c, i), g(d, () => e.title), g(s, () => e.description), P((o) => {
      const h = l(), m = e.style;
      return o._v$ = B(r, h, o._v$), o._v$2 = Y(r, m, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
function gu(e) {
  return e;
}
const vu = /* @__PURE__ */ C("<div>");
function $u(e) {
  const t = Me(() => e.children), n = () => t.toArray(), l = () => q(e, "cm-steps", {
    [`cm-steps-${e.size}`]: e.size,
    "cm-steps-vertical": e.dir === "v"
  });
  return (() => {
    const i = vu();
    return g(i, u(p, {
      get each() {
        return n();
      },
      children: (r, c) => u(mu, ne(r, {
        get index() {
          return c() + 1;
        },
        get current() {
          return e.current || 0;
        }
      }))
    })), P((r) => {
      const c = l(), a = e.style;
      return r._v$ = B(i, c, r._v$), r._v$2 = Y(i, a, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
$u.Step = gu;
const _u = /* @__PURE__ */ C('<span class="cm-table-sort">'), yu = /* @__PURE__ */ C('<span class="cm-table-resize">'), wu = /* @__PURE__ */ C('<th><div class="cm-table-cell">'), bu = /* @__PURE__ */ C('<span class="cm-table-tree-level">'), xu = /* @__PURE__ */ C('<td><div class="cm-table-cell">'), Cu = /* @__PURE__ */ C('<span class="cm-table-tree-icon-empty">');
function tt(e) {
  let t;
  const n = e.column, l = e.colIndex, i = fi();
  ce(() => {
    setTimeout(() => {
      c();
    });
  });
  const r = () => ({
    "cm-table-head-col": e.type === "th",
    "cm-table-cell-fixed-left-last": n.fixedLeftLast && e.showFixedLeft,
    "cm-table-cell-fixed-right-first": n.fixedRightFirst && e.showFixedRight
  });
  K(() => {
    n.width, n._, c();
  });
  const c = () => {
    if (n.fixed && t && !e.placeholder) {
      if (n.fixed === "left") {
        t.style.position = "static";
        const f = t.closest(".cm-table");
        if (f) {
          const _ = f.querySelector("thead");
          let v = 0;
          for (let S = 1; S <= l; S++) {
            const k = _.querySelector("th:nth-child(" + S + ")");
            k && (v += k.getBoundingClientRect().width);
          }
          t.style.position = "sticky", t.style.left = v + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-left"), n.fixedLeftLast && e.showFixedLeft && t.classList.add("cm-table-cell-fixed-left-last");
        }
      }
      if (n.fixed === "right") {
        const f = t.closest(".cm-table");
        if (f) {
          const _ = f.querySelector("thead"), v = _.querySelectorAll("th").length;
          let S = 0;
          for (let k = l + 2; k <= v; k++) {
            const w = _.querySelector("th:nth-child(" + k + ")");
            console.log(w), S += w.getBoundingClientRect().width;
          }
          t.style.position = "sticky", t.style.right = S + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-right"), n.fixedRightFirst && e.showFixedRight && t.classList.add("cm-table-cell-fixed-right-first");
        }
      }
    }
  }, a = () => e.data._showChildren ? "minus-square" : "plus-square", d = (f) => {
    i && i.onRowChecked(e.data, f);
  }, s = (f) => {
    i && i.onHeadChecked(f);
  }, o = (f) => {
    i && i.onSort(n, f);
  }, h = () => {
    i && i.onShowChildren(e.data);
  }, m = () => {
    i && i.onExpand(n, e.data);
  }, $ = (f) => {
    i && i.onDragStart(n, f);
  }, b = () => {
    const f = e.column;
    return e.type === "td" ? f.type === "index" ? e.index + 1 : f.type === "checkbox" ? u(ze, {
      get disabled() {
        return e.data._disabled;
      },
      get checked() {
        return e.data._checked;
      },
      onChange: d
    }) : e.data._type === "expandChildren" ? e.data.render ? e.data.render() : null : f.type === "expand" ? u(W, {
      name: "chevron-right",
      get class() {
        return `cm-table-expand ${e.data._expand ? "cm-table-expand-open" : ""}`;
      },
      onClick: m
    }) : f.render && typeof f.render == "function" ? f.render(e.data[f.name], f, e.data) : e.data[f.name] : f.type === "checkbox" ? u(ze, {
      get checked() {
        return e.checkedAll;
      },
      onChange: s
    }) : e.column.title;
  };
  return u(Le, {
    get children() {
      return [u(Q, {
        get when() {
          return e.type === "th";
        },
        get children() {
          const f = wu(), _ = f.firstChild;
          return X((v) => {
            t = v, e.ref && e.ref(v);
          }, f), g(_, b, null), g(_, u(V, {
            get when() {
              return n.sort;
            },
            get children() {
              const v = _u();
              return g(v, u(W, {
                name: "chevron-up",
                get class() {
                  return n.sortType === "asc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return o.bind(null, "asc");
                }
              }), null), g(v, u(W, {
                name: "chevron-down",
                get class() {
                  return n.sortType === "desc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return o.bind(null, "desc");
                }
              }), null), v;
            }
          }), null), g(_, u(V, {
            get when() {
              return n.resize && n.width && i && i.border;
            },
            get children() {
              const v = yu();
              return v.$$mousedown = $, v;
            }
          }), null), P((v) => {
            const S = r(), k = e.colIndex;
            return v._v$ = B(f, S, v._v$), k !== v._v$2 && Z(f, "data-index", v._v$2 = k), v;
          }, {
            _v$: void 0,
            _v$2: void 0
          }), f;
        }
      }), u(Q, {
        get when() {
          return e.type === "td";
        },
        get children() {
          const f = xu(), _ = f.firstChild, v = t;
          return typeof v == "function" ? X(v, f) : t = f, g(_, u(V, {
            get when() {
              return n.tree;
            },
            get children() {
              return [(() => {
                const S = bu();
                return P(() => `${e.data._level * 16}px` != null ? S.style.setProperty("padding-left", `${e.data._level * 16}px`) : S.style.removeProperty("padding-left")), S;
              })(), u(V, {
                get when() {
                  return e.data.children && e.data.children.length;
                },
                get fallback() {
                  return Cu();
                },
                get children() {
                  return u(W, {
                    get name() {
                      return a();
                    },
                    class: "cm-table-tree-icon",
                    onClick: h
                  });
                }
              })];
            }
          }), null), g(_, b, null), P((S) => {
            const k = r(), w = e.colSpan, M = e.rowSpan;
            return S._v$3 = B(f, k, S._v$3), w !== S._v$4 && Z(f, "colspan", S._v$4 = w), M !== S._v$5 && Z(f, "rowspan", S._v$5 = M), S;
          }, {
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0
          }), f;
        }
      })];
    }
  });
}
J(["mousedown"]);
const ku = /* @__PURE__ */ C('<colgroup class="cm-table-colgroup">'), Lu = /* @__PURE__ */ C('<col class="cm-table-col">');
function jt(e) {
  return (() => {
    const t = ku();
    return g(t, u(p, {
      get each() {
        return e.data.columns;
      },
      children: (n, l) => {
        const i = () => ({
          width: n.width
        });
        return (() => {
          const r = Lu();
          return P((c) => Y(r, i(), c)), r;
        })();
      }
    })), t;
  })();
}
const Su = /* @__PURE__ */ C('<div class="cm-table-header"><table><thead><tr>');
function Eu(e) {
  let t, n;
  const l = (a) => {
    const d = a.target, s = d.getAttribute("data-index");
    if (s) {
      const o = parseInt(s);
      d && e.onInitColumnWidth(o, d.getBoundingClientRect().width);
    }
  }, i = (a) => {
    const d = a.target;
    if (d.tagName === "THEAD") {
      const s = d.getBoundingClientRect();
      e.onResizeHeader(s.width, s.height), n.style.height = s.height + "px";
    } else
      setTimeout(() => {
        const s = d.getBoundingClientRect(), o = d.closest(".cm-table-body").getBoundingClientRect();
        s.height > o.height ? n.style.overflowY = "scroll" : n.style.overflowY = "";
      });
  }, r = new ResizeObserver((a) => {
    a.forEach((d) => l(d));
  });
  K(() => {
    e.data.columns.length && setTimeout(() => {
      const d = t.querySelectorAll("th"), s = d.length;
      for (let o = 0; o < s; o++)
        r.unobserve(d[o]), r.observe(d[o]);
    });
  }), le(() => {
    const a = t.querySelectorAll("th"), d = a.length;
    for (let s = 0; s < d; s++)
      a[s] && r.unobserve(a[s]);
  }), ce(() => {
    const a = new ResizeObserver((o) => {
      o.forEach((h) => i(h));
    });
    a.observe(t);
    const s = t.closest(".cm-table").querySelector(".cm-table-body-wrap");
    a.observe(s), le(() => {
      a.unobserve(t), a.unobserve(s);
    });
  });
  const c = () => ({
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
    const a = Su(), d = a.firstChild, s = d.firstChild, o = s.firstChild, h = n;
    typeof h == "function" ? X(h, a) : n = a, g(d, u(jt, {
      get data() {
        return e.data;
      }
    }), s);
    const m = t;
    return typeof m == "function" ? X(m, s) : t = s, g(o, u(p, {
      get each() {
        return e.data.columns;
      },
      children: ($, b) => u(tt, {
        column: $,
        type: "th",
        get showFixedLeft() {
          return e.data.showFixedLeft;
        },
        get colIndex() {
          return b();
        },
        get showFixedRight() {
          return e.data.showFixedRight;
        },
        get checkedAll() {
          return e.data.checkedAll;
        },
        ref: (f) => {
          Promise.resolve().then(() => {
            e.onInitColumnWidth(b(), f.getBoundingClientRect().width);
          });
        }
      })
    })), P(($) => Y(a, c(), $)), a;
  })();
}
const Mu = /* @__PURE__ */ C("<tr>"), Du = /* @__PURE__ */ C('<tr><td><div class="cm-table-emprty-cell">暂无数据'), Tu = /* @__PURE__ */ C('<div><table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'), Ru = /* @__PURE__ */ C('<table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'), zu = /* @__PURE__ */ C('<div class="cm-table-body">');
function zn(e) {
  const t = fi(), n = () => {
    e.data._type !== "expandChildren" && t && t.highlight && t.onSelectRow(e.data);
  }, l = () => ({
    "cm-table-row": !0,
    "cm-table-row-ood": e.index % 2 === 0,
    "cm-table-row-even": e.index % 2 !== 0,
    "cm-table-row-selected": e.data._highlight
  }), i = () => ({
    display: e.data._show ? "" : "none"
  });
  return (() => {
    const r = Mu(), c = e.ref;
    return typeof c == "function" ? X(c, r) : e.ref = r, r.$$click = n, g(r, u(Le, {
      get children() {
        return [u(Q, {
          get when() {
            return e.data._type === "expandChildren";
          },
          get children() {
            return u(tt, {
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
        }), u(Q, {
          get when() {
            return e.data._type !== "expandChildren";
          },
          get children() {
            return u(p, {
              get each() {
                return e.store.columns;
              },
              children: (a, d) => {
                let [s, o] = [1, 1];
                if (t && t.spanMethod) {
                  const h = t.spanMethod(e.data, a, e.index, d());
                  h && ([s, o] = h);
                }
                return u(V, {
                  when: s && o,
                  fallback: null,
                  get children() {
                    return u(tt, {
                      type: "td",
                      get data() {
                        return e.data;
                      },
                      column: a,
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
                      rowSpan: s,
                      colSpan: o
                    });
                  }
                });
              }
            });
          }
        })];
      }
    })), P((a) => {
      const d = l(), s = i();
      return a._v$ = B(r, d, a._v$), a._v$2 = Y(r, s, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
function Pn(e) {
  return (() => {
    const t = Du(), n = t.firstChild;
    return P(() => Z(n, "colspan", e.store.columns.length)), t;
  })();
}
function Pu(e) {
  let t;
  const [n, l] = j(), i = () => {
    const d = e.data.columns;
    let s = 0;
    return d.forEach((o) => {
      s += o._width || 0;
    }), s;
  };
  K(() => {
    e.data.data;
    const d = e.data.headerSize.height;
    if (e.virtual) {
      const s = e.height ?? document.documentElement.clientHeight;
      l(s - d);
    } else
      setTimeout(() => {
        const o = t.querySelector(".cm-table-body-wrap").getBoundingClientRect().height;
        if (e.height && o > e.height - d) {
          const h = e.height - d;
          l(h);
        }
      });
  });
  const r = () => {
    e.onScroll(t.scrollLeft, t.clientWidth, t.scrollWidth);
  };
  let c, a;
  return (() => {
    const d = zu();
    d.addEventListener("scroll", r);
    const s = t;
    return typeof s == "function" ? X(s, d) : t = d, d.style.setProperty("display", "block"), d.style.setProperty("width", "100%"), d.style.setProperty("overflow", "auto"), d.style.setProperty("position", "relative"), g(d, u(Le, {
      get children() {
        return [u(Q, {
          get when() {
            return e.virtual;
          },
          get children() {
            const o = Tu(), h = o.firstChild, m = h.firstChild, $ = m.firstChild, b = m.nextSibling, f = c;
            typeof f == "function" ? X(f, o) : c = o, o.style.setProperty("min-width", "100%"), o.style.setProperty("will-change", "transform"), o.style.setProperty("box-sizing", "border-box"), o.style.setProperty("contain", "strict"), o.style.setProperty("position", "absolute"), o.style.setProperty("top", "0"), o.style.setProperty("left", "0"), g(h, u(jt, {
              get data() {
                return e.data;
              }
            }), m), m.style.setProperty("display", "none"), g($, u(p, {
              get each() {
                return e.data.columns;
              },
              children: (v, S) => u(tt, {
                column: v,
                type: "th",
                placeholder: !0,
                get colIndex() {
                  return S();
                },
                get checkedAll() {
                  return e.data.checkedAll;
                }
              })
            }));
            const _ = a;
            return typeof _ == "function" ? X(_, b) : a = b, g(b, u(yi, {
              scrollElement: t,
              contentElement: c,
              bodyElement: a,
              get items() {
                return e.data.data;
              },
              itemEstimatedSize: 30,
              get maxHeight() {
                return n() || e.height;
              },
              children: (v) => {
                const S = v.item;
                return u(zn, {
                  data: S,
                  get index() {
                    return v.index;
                  },
                  get store() {
                    return e.data;
                  },
                  ref(k) {
                    const w = v.ref;
                    typeof w == "function" ? w(k) : v.ref = k;
                  }
                });
              }
            }), null), g(b, u(V, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return u(Pn, {
                  get store() {
                    return e.data;
                  }
                });
              }
            }), null), P(() => i() + "px" != null ? o.style.setProperty("width", i() + "px") : o.style.removeProperty("width")), o;
          }
        }), u(Q, {
          get when() {
            return !e.virtual;
          },
          get children() {
            const o = Ru(), h = o.firstChild, m = h.firstChild, $ = h.nextSibling, b = a;
            return typeof b == "function" ? X(b, o) : a = o, g(o, u(jt, {
              get data() {
                return e.data;
              }
            }), h), h.style.setProperty("display", "none"), g(m, u(p, {
              get each() {
                return e.data.columns;
              },
              children: (f, _) => u(tt, {
                column: f,
                type: "th",
                placeholder: !0,
                get colIndex() {
                  return _();
                },
                get checkedAll() {
                  return e.data.checkedAll;
                }
              })
            })), g($, u(p, {
              get each() {
                return e.data.data;
              },
              children: (f, _) => u(zn, {
                data: f,
                get index() {
                  return _();
                },
                get store() {
                  return e.data;
                }
              })
            }), null), g($, u(V, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return u(Pn, {
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
function An(e) {
  let t = -1, n = Number.MAX_VALUE;
  return e && (e.forEach((l, i) => {
    l.id = l.id ?? $e(), l.fixed === "left" && (t = Math.max(t, i)), l.fixed === "right" && (n = Math.min(n, i));
  }), t > -1 && e[t] && (e[t].fixedLeftLast = !0), n < Number.MAX_VALUE && e[n] && (e[n].fixedRightFirst = !0)), {
    maxFixedLeft: t,
    minFixedRight: n
  };
}
function Au(e, t, n, l, i, r) {
  (e >= 0 || t < Number.MAX_VALUE) && (n("showFixedLeft", l > 0), n("showFixedRight", i + l < r));
}
function In(e) {
  let t = e ?? [];
  return t = [...t], t.forEach((n, l) => {
    n.id = n.id ?? $e(), n._originSort = l;
  }), t = Fu(e), t;
}
function Iu(e, t, n) {
  const l = [...t.data];
  n.sortType === "" ? l.sort((i, r) => i._originSort - r._originSort > 0 ? 1 : -1) : n.sortMethod && typeof n.sortMethod == "function" ? l.sort(n.sortMethod) : l.sort((i, r) => {
    const c = n.name ?? "";
    return /^[0-9\.]+$/g.test(i[c]) ? (n.sortType === "asc" ? 1 : -1) * (i[c] - r[c]) > 0 ? 1 : -1 : (n.sortType === "asc" ? 1 : -1) * i[c].localeCompare(r[c]);
  }), e("data", l);
}
function di(e, t, n, l) {
  e.forEach((i) => {
    i.id = i.id ?? $e(), i._level = n, i._show = l, t.push(i), i.children && i.children.length && di(i.children, t, n + 1, !!i._showChildren);
  });
}
function Fu(e) {
  const t = [];
  return di(e, t, 0, !0), t;
}
const Zt = (e, t) => {
  e[t] && e[t].children && e[t].children.forEach((n) => {
    n._show = !1, Zt(e, n.id);
  });
}, Ou = (e, t) => {
  const n = e[t];
  n && n.children && n.children.forEach((l) => {
    l._show = n._showChildren, Zt(e, l.id);
  });
};
function Nu(e, t) {
  e("data", (n) => n.id === t.id, ie((n) => n._showChildren = !n._showChildren)), e("data", ie((n) => {
    const l = t.children.map((r) => r.id), i = {};
    n.forEach((r) => {
      i[r.id] = r;
    }), l.forEach((r) => {
      i[r] && (i[r]._show = t._showChildren), t._showChildren ? Ou(i, r) : Zt(i, r);
    });
  }));
}
function Bu(e, t, n, l) {
  e("columns", (i) => i.name === n.name, ie((i) => {
    i.sortType === l ? i.sortType = "" : i.sortType = l;
  })), n.sort !== "custom" && Iu(e, t, n);
}
function Vu(e, t, n) {
  e("data", ie((l) => {
    let i = -1;
    const r = l.find((c, a) => {
      const d = c.id === n.id;
      return d && (i = a), d;
    });
    r._expand ? (l.splice(i + 1, 1), r._expand = !1) : (r._expand = !0, l.splice(i + 1, 0, {
      _type: "expandChildren",
      _show: !0,
      column: t,
      render: t.render?.bind(null, n)
    }));
  }));
}
const Yu = (e, t, n) => {
  if (typeof n.button == "number" && n.button !== 0)
    return !1;
  e("resizing", !0);
  const l = n.target.getBoundingClientRect().right, i = n.target.closest(".cm-table-wrap").getBoundingClientRect().left;
  e("posX", l - i), e("startX", l - i), e("x", n.clientX), e("resizeId", t.id);
}, qu = (e, t, n) => {
  if (e.resizing) {
    const l = n.clientX - e.x;
    t("x", n.clientX);
    const i = e.posX + l;
    t("posX", i);
  }
}, Hu = (e, t) => {
  t("resizing", !1), t("columns", (l) => l.id === e.resizeId, ie((l) => {
    l.width = l.width ? parseFloat(l.width) + (e.posX - e.startX) + "px" : void 0;
  }));
  let n;
  e.columns.find((l, i) => {
    const r = l.id === e.resizeId;
    return r && (n = e.columns[i + 1] ? e.columns[i + 1].id : void 0), r;
  }), t("columns", (l) => l.id === n, ie((l) => {
    l._ = $e();
  })), t("posX", 0);
}, Uu = /* @__PURE__ */ C('<div><div class="cm-table-resize-helper"></div><div class="cm-table-loading"></div><div class="cm-table">'), ui = me();
function uh(e) {
  const t = () => q(e, "cm-table-wrap", {
    "cm-table-border": e.border,
    "cm-table-stripe": e.stripe,
    "cm-table-small": e.size === "small",
    "cm-table-resizing": r.resizing
  }), {
    maxFixedLeft: n,
    minFixedRight: l
  } = An(e.columns);
  let i = In(e.data);
  K(() => {
    i = In(e.data), c("data", i), c("checkedAll", !1);
  }), K(() => {
    An(e.columns), c("columns", e.columns ?? []), c("showFixedLeft", !1), c("showFixedRight", !0);
  });
  const [r, c] = re({
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
  }), a = (y) => {
    const x = r.data.find((E) => E._highlight);
    x && c("data", (E) => E.id === x.id, ie((E) => E._highlight = !1)), c("data", (E) => E.id === y.id, ie((E) => E._highlight = !0)), e.onRowSelect && e.onRowSelect(y, x);
  }, d = (y, x) => {
    c("data", (D) => D.id === y.id, ie((D) => D._checked = x));
    let E = !1, F = 0, R = 0;
    r.data.forEach((D) => {
      D._disabled || R++, D._checked && (F++, E = "indeterminate");
    }), F >= R && (E = !0), c("checkedAll", E), e.onRowChecked && e.onRowChecked(y, x);
  }, s = (y) => {
    c("checkedAll", y), c("data", (E) => y ? !E._disabled && !E._checked : !E._disabled && E._checked, ie((E) => E._checked = y));
    const x = r.data.filter((E) => E._checked);
    e.onCheckedAll && e.onCheckedAll(x);
  }, o = (y, x) => {
    Bu(c, r, y, x), e.onSort && e.onSort(y, y.sortType);
  }, h = (y) => {
    Nu(c, y);
  }, m = (y, x) => {
    Vu(c, y, x);
  }, $ = (y, x) => {
    Yu(c, y, x), document.addEventListener("mousemove", b, !1), document.addEventListener("mouseup", f, !1);
  }, b = (y) => {
    qu(r, c, y);
  }, f = () => {
    console.log("end"), document.removeEventListener("mousemove", b), document.removeEventListener("mouseup", f), Hu(r, c);
  }, _ = () => ({
    display: r.resizing ? "block" : "none",
    left: r.posX + "px"
  }), v = () => r.data.filter((y) => y._checked), S = (y, x) => {
    const E = r.data.find((F) => {
      F.id;
    });
    d(E, x);
  }, k = (y, x) => {
    c("columns", y, "_width", x);
  }, w = (y, x) => {
    c("headerSize", "width", y), c("headerSize", "height", x);
  }, M = (y, x, E) => {
    Au(n, l, c, y, x, E), r.headerLeft !== y && c("headerLeft", y);
  };
  e.ref && e.ref({
    clearSelect() {
      c("data", (y) => y._highlight, ie((y) => y._highlight = !1));
    },
    checkAll(y) {
      s(y);
    },
    getAllChecked() {
      return v();
    },
    setChecked: S
  });
  const A = () => ({
    ...e.style,
    "max-height": e.height ? `${e.height}px` : ""
    // 'display': 'flex',
    // 'flex-direction': 'column'
  }), L = () => !!e.height;
  return u(ui.Provider, {
    get value() {
      return {
        onSelectRow: a,
        onRowChecked: d,
        onHeadChecked: s,
        onSort: o,
        onShowChildren: h,
        onExpand: m,
        onDragStart: $,
        highlight: e.highlight,
        border: e.border,
        spanMethod: e.spanMethod
      };
    },
    get children() {
      const y = Uu(), x = y.firstChild, E = x.nextSibling, F = E.nextSibling;
      return g(y, u(V, {
        get when() {
          return e.loading;
        },
        fallback: null,
        get children() {
          return u(jn, {});
        }
      }), F), g(F, u(Eu, {
        data: r,
        get sticky() {
          return L();
        },
        onInitColumnWidth: k,
        onResizeHeader: w,
        get virtual() {
          return e.virtual;
        }
      }), null), g(F, u(Pu, {
        data: r,
        onScroll: M,
        get height() {
          return e.height;
        },
        get virtual() {
          return e.virtual;
        }
      }), null), P((R) => {
        const D = t(), z = _(), T = A();
        return R._v$ = B(y, D, R._v$), R._v$2 = Y(x, z, R._v$2), R._v$3 = Y(F, T, R._v$3), R;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), y;
    }
  });
}
const fi = () => ge(ui), fh = (e) => e, ju = /* @__PURE__ */ C('<div><div class="cm-tabs-header-wrap"><div class="cm-tabs-active-line"></div><div class="cm-tabs-scroll"><ul class="cm-tabs-header"></ul></div><div class="cm-tabs-prev"></div><div class="cm-tabs-next"></div></div><div class="cm-tabs-content">'), Xu = /* @__PURE__ */ C("<li>"), Wu = /* @__PURE__ */ C("<div>");
function hh(e) {
  let t, n, l;
  const i = () => q(e, "cm-tabs", {
    "cm-tabs-card": e.card,
    "cm-tabs-overflow": a.scroll
  }), r = Me(() => e.children), c = () => r.toArray(), [a, d] = re({
    activeName: "",
    tabs: [],
    scroll: !1,
    scrollLeft: 0
  });
  K(() => {
    d("tabs", c()), Promise.resolve().then(() => {
      f();
    });
  });
  const s = () => {
    const v = n.getBoundingClientRect().width;
    let S = a.scrollLeft + v;
    S = Math.min(0, S), l.style.transform = `translate(${S}px, 0)`, d("scrollLeft", S);
  }, o = () => {
    const v = n.getBoundingClientRect().width, S = l.getBoundingClientRect().width;
    let k = a.scrollLeft - v;
    const w = v - S;
    k = Math.max(w, k), l.style.transform = `translate(${k}px, 0)`, d("scrollLeft", k);
  }, h = (v) => {
    d("tabs", ie((S) => {
      S.push(v);
    })), setTimeout(() => {
      f();
    });
  }, m = (v) => {
    d("activeName", v.name), e.onTabClick && e.onTabClick(v);
  }, $ = (v, S) => {
    S.preventDefault && S.preventDefault(), S.stopPropagation && S.stopPropagation();
    const k = a.tabs.filter((w) => w.name !== v);
    a.activeName === v && d("activeName", k[k.length - 1].name), d("tabs", k), e.onRemove && e.onRemove(v), f();
  }, b = () => {
    const v = a.activeName;
    let S = 0;
    a.tabs.forEach((w, M) => {
      w.name === v && (S = M);
    });
    const k = {
      transform: `translate(${-S * 100}%, 0)`
    };
    return e.duration !== void 0 && typeof e.duration == "number" && (k["transition-duration"] = e.duration + "ms"), k;
  };
  K(() => {
    const v = xe(() => a.activeName);
    e.activeName && v !== e.activeName && d("activeName", e.activeName ?? "");
  }), K(() => {
    d("tabs", c());
  }), ce(() => {
    f();
  });
  const f = () => {
    const v = n.getBoundingClientRect().width, S = l.getBoundingClientRect().width;
    S > v && !a.scroll && d("scroll", !0), S < v && a.scroll && (d("scroll", !1), s());
  }, _ = () => {
    if (!e.card) {
      const v = a.activeName;
      let S = 0;
      a.tabs.forEach((R, D) => {
        R.name === v && (S = D);
      });
      const w = l.querySelectorAll(".cm-tabs-header-item")[S];
      if (!w)
        return;
      const M = l.closest(".cm-tabs-header-wrap"), A = w.querySelector(".cm-tabs-close"), L = A ? A.getBoundingClientRect().width : 0, y = w.getBoundingClientRect(), x = M.getBoundingClientRect(), E = y.left - x.left, F = y.width - L;
      return t.style.width = `${F}px`, t.style.left = `${E}px`, {
        width: `${F}px`,
        left: `${E}px`
      };
    }
  };
  return e.ref && e.ref({
    addTab: h
  }), (() => {
    const v = ju(), S = v.firstChild, k = S.firstChild, w = k.nextSibling, M = w.firstChild, A = w.nextSibling, L = A.nextSibling, y = S.nextSibling, x = t;
    typeof x == "function" ? X(x, k) : t = k;
    const E = n;
    typeof E == "function" ? X(E, w) : n = w;
    const F = l;
    return typeof F == "function" ? X(F, M) : l = M, g(M, u(p, {
      get each() {
        return a.tabs;
      },
      children: (R) => {
        const D = () => ({
          "cm-tabs-header-item": !0,
          "cm-tabs-header-item-active": R.name === a.activeName,
          "cm-tabs-header-item-disabled": R.disabled
        });
        return (() => {
          const z = Xu();
          return fe(z, "click", m.bind(null, R), !0), g(z, () => R.icon, null), g(z, () => R.title, null), g(z, u(V, {
            get when() {
              return R.closeable;
            },
            get children() {
              return u(W, {
                name: "x",
                get onClick() {
                  return $.bind(null, R.name);
                },
                class: "cm-tabs-close",
                size: 12
              });
            }
          }), null), P((T) => B(z, D(), T)), z;
        })();
      }
    })), g(S, u(V, {
      get when() {
        return e.extra;
      },
      get children() {
        return e.extra;
      }
    }), A), A.$$click = s, g(A, u(W, {
      name: "chevron-left",
      size: 14
    })), L.$$click = o, g(L, u(W, {
      name: "chevron-right",
      size: 14
    })), g(y, u(p, {
      get each() {
        return a.tabs;
      },
      children: (R) => {
        const D = () => q(R, "cm-tab-panel", {
          "cm-tab-panel-active": R.name === a.activeName
        });
        return (() => {
          const z = Wu();
          return g(z, () => R.children), P((T) => B(z, D(), T)), z;
        })();
      }
    })), P((R) => {
      const D = i(), z = e.style, T = _(), O = b();
      return R._v$ = B(v, D, R._v$), R._v$2 = Y(v, z, R._v$2), R._v$3 = Y(k, T, R._v$3), R._v$4 = Y(y, O, R._v$4), R;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), v;
  })();
}
J(["click"]);
const Ku = /* @__PURE__ */ C('<div class="cm-timeline-time">'), Gu = /* @__PURE__ */ C('<div class="cm-timeline-item"><div class="cm-timeline-item-tail"></div><div></div><div class="cm-timeline-item-content">');
function Zu(e) {
  const t = e.color ?? "blue", n = () => q(e, "cm-timeline-item-head", {
    [`cm-timeline-item-head-${t}`]: t,
    "cm-timeline-item-head-custom": e.icon,
    "cm-timeline-item-head-fill": e.fill
  });
  return (() => {
    const l = Gu(), i = l.firstChild, r = i.nextSibling, c = r.nextSibling;
    return g(r, () => e.icon), g(c, () => e.children, null), g(c, u(V, {
      get when() {
        return e.time;
      },
      get children() {
        const a = Ku();
        return g(a, () => e.time), a;
      }
    }), null), P((a) => B(r, n(), a)), l;
  })();
}
const Ju = /* @__PURE__ */ C("<div>");
function Qu(e) {
  const t = () => q(e, "cm-timeline", {
    [`cm-timeline-${e.mode}`]: e.mode
  });
  return (() => {
    const n = Ju();
    return g(n, () => e.children), P((l) => {
      const i = t(), r = e.style;
      return l._v$ = B(n, i, l._v$), l._v$2 = Y(n, r, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
Qu.Item = Zu;
async function pu(e) {
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
const ef = /* @__PURE__ */ C("<p>"), tf = /* @__PURE__ */ C('<span class="cm-typograghy-copyed">'), nf = /* @__PURE__ */ C('<span class="cm-typograghy-copy">');
function mh(e) {
  const [t, n] = j(!1), l = () => e.size || "normal", i = () => q(e, "cm-typograghy-paragraph", {
    [`cm-typograghy-paragraph-${l()}`]: l(),
    [`cm-typograghy-paragraph-${e.type}`]: !!e.type,
    "cm-typograghy-extended": e.spacing === "extended"
  });
  let r;
  async function c() {
    const a = await pu(e.copyText ?? r.innerText);
    n(a), a && (e.onCopy && e.onCopy(), setTimeout(() => {
      n(!1);
    }, 4e3));
  }
  return (() => {
    const a = ef(), d = r;
    return typeof d == "function" ? X(d, a) : r = a, g(a, () => e.children, null), g(a, (() => {
      const s = G(() => !!e.copyable);
      return () => s() ? (() => {
        const o = G(() => !!t());
        return () => o() ? (() => {
          const h = tf();
          return g(h, u(W, {
            name: "check"
          })), h;
        })() : (() => {
          const h = nf();
          return h.$$click = c, g(h, u(W, {
            name: "copy"
          })), h;
        })();
      })() : null;
    })(), null), P((s) => {
      const o = e.style, h = i();
      return s._v$ = Y(a, o, s._v$), s._v$2 = B(a, h, s._v$2), s;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
J(["click"]);
const rf = /* @__PURE__ */ C("<h1>"), lf = /* @__PURE__ */ C("<h2>"), cf = /* @__PURE__ */ C("<h3>"), af = /* @__PURE__ */ C("<h4>"), sf = /* @__PURE__ */ C("<h5>"), of = /* @__PURE__ */ C("<h6>");
function gh(e) {
  const t = () => e.heading || 1, n = () => q(e, "cm-typograghy-title", `cm-typograghy-h${t()}`), l = [() => (() => {
    const i = rf();
    return g(i, () => e.children), P((r) => {
      const c = n(), a = e.style;
      return r._v$ = B(i, c, r._v$), r._v$2 = Y(i, a, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })(), () => (() => {
    const i = lf();
    return g(i, () => e.children), P((r) => {
      const c = n(), a = e.style;
      return r._v$3 = B(i, c, r._v$3), r._v$4 = Y(i, a, r._v$4), r;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), i;
  })(), () => (() => {
    const i = cf();
    return g(i, () => e.children), P((r) => {
      const c = n(), a = e.style;
      return r._v$5 = B(i, c, r._v$5), r._v$6 = Y(i, a, r._v$6), r;
    }, {
      _v$5: void 0,
      _v$6: void 0
    }), i;
  })(), () => (() => {
    const i = af();
    return g(i, () => e.children), P((r) => {
      const c = n(), a = e.style;
      return r._v$7 = B(i, c, r._v$7), r._v$8 = Y(i, a, r._v$8), r;
    }, {
      _v$7: void 0,
      _v$8: void 0
    }), i;
  })(), () => (() => {
    const i = sf();
    return g(i, () => e.children), P((r) => {
      const c = n(), a = e.style;
      return r._v$9 = B(i, c, r._v$9), r._v$10 = Y(i, a, r._v$10), r;
    }, {
      _v$9: void 0,
      _v$10: void 0
    }), i;
  })(), () => (() => {
    const i = of();
    return g(i, () => e.children), P((r) => {
      const c = n(), a = e.style;
      return r._v$11 = B(i, c, r._v$11), r._v$12 = Y(i, a, r._v$12), r;
    }, {
      _v$11: void 0,
      _v$12: void 0
    }), i;
  })()];
  return u(hi, {
    get component() {
      return l[t() - 1];
    }
  });
}
export {
  Si as Accordion,
  Nn as AccordionContext,
  Ri as Anchor,
  Wc as AutoComplete,
  pt as Avatar,
  $f as AvatarList,
  _f as BackTop,
  yf as Badge,
  wf as Banner,
  er as BothSide,
  lr as Breadcrumb,
  ke as Button,
  Lf as ButtonGroup,
  Yn as ButtonGroupContext,
  Jf as Captcha,
  Sf as Card,
  _r as Carousel,
  ea as Cascader,
  kf as Center,
  ia as Checkbox,
  la as CheckboxGroup,
  Ff as CheckboxGroupContext,
  Mf as Col,
  On as Collapase,
  js as ColorPicker,
  Hn as Context,
  Df as CountDown,
  Tf as CountUp,
  is as Datepicker,
  Rf as Divider,
  Rt as Draggable,
  zf as Drawer,
  Te as Dropdown,
  Af as DropdownItem,
  Pf as DropdownMenu,
  Zf as Email,
  If as Exception,
  Cf as FixedView,
  rh as Floor,
  xd as FooterNavigation,
  lh as FooterNavigations,
  Pl as Form,
  Kt as FormContext,
  rt as FormItem,
  Gn as FormItemContext,
  bf as HView,
  W as Icon,
  At as Image,
  Xn as ImagePreview,
  qf as IndexList,
  ze as InnerCheckbox,
  _e as InnerInput,
  Is as Input,
  Lo as List,
  He as Loading,
  jf as Login,
  ci as LoginContext,
  eh as Menu,
  pf as MenuGroup,
  Ut as MenuItem,
  Gf as Mobile,
  ad as Modal,
  Aa as Option,
  Of as OptionGroup,
  ch as PageFooter,
  ah as Pagination,
  mh as Paragraph,
  Kf as Password,
  pe as Popover,
  Zn as Progress,
  sh as QRCode,
  Zd as QRCodeCanvas,
  Nf as Radio,
  $a as RadioGroup,
  Da as Rate,
  Ef as Row,
  wa as Search,
  ti as Select,
  oh as SideBySide,
  Xe as Skeleton,
  ws as Slider,
  Hf as Slot,
  qe as Space,
  jn as Spin,
  ka as Spinner,
  dh as Split,
  $u as Steps,
  Qf as SubMenu,
  Xf as Submit,
  ya as Switch,
  fh as Tab,
  uh as Table,
  hh as Tabs,
  ot as Tag,
  Hl as TagGroup,
  Se as Text,
  Bf as Textarea,
  Qu as Timeline,
  fs as Timepicker,
  gh as Title,
  Oi as Tooltip,
  Vf as Transfer,
  Ds as Tree,
  As as TreeSelect,
  Yf as Upload,
  Wf as UserName,
  xf as VView,
  je as Value,
  Xt as View,
  Jn as WordCount,
  gl as downloadFile,
  Uf as loadingBar,
  th as message,
  nh as modal,
  Xr as nextFrame,
  ih as notice,
  Bn as scrollTop,
  Ei as useAccordionContext,
  Un as useAlignPostion,
  yr as useCarouselContext,
  ta as useCascaderContext,
  q as useClassList,
  cr as useClickAnimating,
  zt as useClickOutside,
  pu as useCopy,
  lt as useDatepickerContext,
  pr as useDropdownConext,
  Ro as useForm,
  kc as useFormItem,
  So as useListContext,
  ai as useLoginContext,
  Gt as useMenuContext,
  Pe as usePortal,
  Vn as useSlots,
  De as useStyle,
  fi as useTableContext,
  hs as useTimepickerContext,
  Wt as useTransition,
  Ts as useTreeContext,
  Ue as useValidation,
  Ae as usezIndex
};
