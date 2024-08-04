import { isServer as le, use as j, insert as g, effect as N, classList as V, style as H, template as b, spread as Ce, mergeProps as ie, delegateEvents as Q, createComponent as f, className as Ve, setAttribute as J, addEventListener as ye, memo as Z, Portal as Ft, render as Tt, Dynamic as Wi } from "solid-js/web";
import { createSignal as U, createEffect as X, onMount as ae, onCleanup as ce, splitProps as oe, createContext as me, useContext as ge, children as ze, untrack as Me, For as te, Show as B, Switch as Te, Match as p, createComputed as pe, on as Ui, mergeProps as ei, createUniqueId as he, batch as Ge, createMemo as dt, createComponent as ji } from "solid-js";
import { createStore as se, unwrap as ti, produce as G } from "solid-js/store";
import re from "dayjs";
import Xi from "tinycolor2";
function q(e, ...t) {
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
function de(e, t) {
  let n = {
    ...t
  };
  return e.style && (typeof e.style == "string" ? n[e.style] = !0 : typeof e.style == "object" && (n = {
    ...n,
    ...e.style
  })), n;
}
function we(e, t, n) {
  let r, i;
  return e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (r = e[t][0], i = e[t][1]) : [r, i] = U(e[t] || n), [r, i];
}
const Ki = /* @__PURE__ */ b("<div>");
function ni(e) {
  const t = () => q(e, "cm-collapase");
  let n;
  function r() {
    const l = document.createElement("surface"), c = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (const a in c)
      if (l.style[a] !== void 0)
        return c[a];
  }
  function i() {
    e.open && n && (n.style.height = "auto"), e.onEnd && e.onEnd(e.open);
  }
  return X(() => {
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
  }), ae(() => {
    if (n) {
      if (le)
        return;
      const l = r();
      n.addEventListener(l, i);
    }
  }), ce(() => {
    if (le)
      return;
    const l = r();
    n && n.removeEventListener(l, i);
  }), e.ref && e.ref({
    getHeight() {
      const l = n.style.height;
      n.style.transition = "none", n.style.height = "auto";
      const c = n.offsetHeight;
      return n.style.transition = "", n.style.height = l, c;
    }
  }), (() => {
    const l = Ki(), c = n;
    return typeof c == "function" ? j(c, l) : n = l, g(l, () => e.children), N((a) => {
      const s = t(), o = e.style;
      return a._v$ = V(l, s, a._v$), a._v$2 = H(l, o, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
const Gi = /* @__PURE__ */ b("<div>"), K = (e) => {
  const t = () => q(e, "cm-icon", `cm-icon-${e.name}`, {
    "cm-icon-spin": e.spin
  }), [n, r] = oe(e, ["color", "size", "spin", "classList", "class", "name", "style", "children", "ref"]), i = () => de(e, {
    "font-size": (n.size || 14) + "px",
    color: n.color
  });
  return (() => {
    const l = Gi(), c = n.ref;
    return typeof c == "function" ? j(c, l) : n.ref = l, Ce(l, ie({
      get classList() {
        return t();
      },
      get style() {
        return i();
      }
    }, r), !1, !0), g(l, () => n.children), l;
  })();
}, Zi = /* @__PURE__ */ b('<div class="cm-accordion-content">'), Ji = /* @__PURE__ */ b('<div><div class="cm-accordion-title"><div class="cm-accordion-item-title-text">');
function Qi(e) {
  const t = tr(), n = t?.signal, r = t?.onSelect, i = t?.flex ? !1 : t?.multi, [l, c] = n, [a, s] = U(!1), [o, d] = U(!1), u = () => {
    let _, h = !1;
    if (i) {
      const $ = l();
      if ($.includes(e.name)) {
        const v = $.indexOf(e.name);
        $.splice(v, 1), _ = [].concat($), h = !1;
      } else
        $.push(e.name), _ = [].concat($), h = !0;
    } else if (l() === e.name) {
      if (t?.flex)
        return;
      _ = "", h = !1;
    } else
      _ = e.name, h = !0;
    c(_), r && r(e.name, h, _);
  };
  X(() => {
    let _ = !1;
    const h = l();
    i ? _ = h.includes(e.name) : _ = h === e.name, d(!1), s(_);
  });
  const m = () => q(e, "cm-accordion-item", {
    "cm-accordion-item-active": a(),
    "cm-accordion-item-full": a() && o()
  }), y = () => {
    d(!0);
  };
  return (() => {
    const _ = Ji(), h = _.firstChild, $ = h.firstChild;
    return h.$$click = u, g(h, () => e.icon, $), g($, () => e.title), g(h, f(K, {
      class: "cm-accordion-title-arrow",
      name: "chevron-right"
    }), null), g(_, f(ni, {
      get open() {
        return a();
      },
      onEnd: y,
      get children() {
        const v = Zi();
        return g(v, () => e.children), v;
      }
    }), null), N((v) => {
      const C = m(), k = e.style;
      return v._v$ = V(_, C, v._v$), v._v$2 = H(_, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), _;
  })();
}
Q(["click"]);
const pi = /* @__PURE__ */ b("<div>"), ii = me();
function er(e) {
  const t = () => q(e, "cm-accordion", {
    "cm-flex-accordion": e.flex
  }), [n, r] = we(e, "activeKey", e.multi ? [] : ""), i = {
    flex: e.flex,
    multi: e.multi,
    signal: [n, r],
    onSelect: e.onSelect
  };
  return f(ii.Provider, {
    value: i,
    get children() {
      const l = pi();
      return g(l, () => e.children), N((c) => {
        const a = t(), s = e.style;
        return c._v$ = V(l, a, c._v$), c._v$2 = H(l, s, c._v$2), c;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), l;
    }
  });
}
er.Item = Qi;
const tr = () => ge(ii);
function ri(e, t = 0, n, r = 500, i) {
  window.requestAnimationFrame || (window.requestAnimationFrame = function(s) {
    return window.setTimeout(s, 1e3 / 60);
  });
  const l = Math.abs(t - n), c = Math.ceil(l / r * 50);
  function a(s, o, d) {
    if (s === o) {
      i && i();
      return;
    }
    let u = s + d > o ? o : s + d;
    s > o && (u = s - d < o ? o : s - d), e === window ? window.scrollTo(u, u) : e.scrollTop = u, window.requestAnimationFrame(() => a(u, o, d));
  }
  a(t, n, c);
}
function nr(e) {
  const t = ze(() => e.children), n = () => t.toArray();
  return e.subItems = n, e;
}
const ir = /* @__PURE__ */ b('<div class="cm-anchor-link"><a class="cm-anchor-link-title">'), rr = /* @__PURE__ */ b('<div><div class="cm-anchor-wrapper"><div class="cm-anchor-inner"><div><span class="cm-anchor-ink-ball">');
function lr(e) {
  const t = () => q(e, "cm-anchor"), n = ze(() => e.children), r = () => n.toArray(), [i, l] = se({
    inkTop: 0,
    inkHeight: 0,
    currentId: "",
    currentLink: "",
    animating: !1,
    links: [],
    upperFirstTitle: !0
  });
  X(() => {
    l("links", r());
  }), X(() => {
    e.onChange?.(i.currentId);
  });
  let c = null, a = null, s = 0;
  const o = e.bounds || 5;
  let d = [];
  const u = e.mode ?? "hash", m = e.showInk ?? !1, y = () => {
    let M;
    if (u === "hash") {
      const S = window.location.href;
      M = /#([^#]+)$/.exec(S);
    } else {
      const S = window.location.href, A = S.includes("?") ? S.split("?")[1] : "", F = new URLSearchParams(A);
      F.has("_to") && F.get("_to") && (M = [], M[0] = F.get("_to"), M[1] = F.get("_to")?.replace("#", ""));
    }
    if (!M) {
      setTimeout(() => {
        const S = document.documentElement.scrollTop || document.body.scrollTop;
        C(S);
      }, 10);
      return;
    }
    l("currentLink", M[0]), l("currentId", M[1]);
  }, _ = () => {
    c && c.removeEventListener("scroll", h), window.removeEventListener("hashchange", y);
  }, h = (M) => {
    if (i.animating)
      return;
    const S = document.documentElement.scrollTop || document.body.scrollTop || M.target.scrollTop;
    C(S);
  }, $ = () => {
    const M = document.getElementById(i.currentId), S = document.querySelector(`a[data-href="${i.currentLink}"]`);
    let A = e.scrollOffset || 0;
    if (S && (A = parseFloat(S.getAttribute("data-scroll-offset"))), !M)
      return;
    const F = M.offsetTop - s - A;
    l("animating", !0), ri(c, a.scrollTop, F, 600, () => {
      l("animating", !1);
    });
  };
  X(() => {
    i.currentLink;
    const M = document.querySelector(`a[data-href="${i.currentLink}"]`)?.parentElement;
    if (!M)
      return;
    const S = M.offsetTop, A = M.getBoundingClientRect().height, F = A / 4, z = S < 0 ? e.offsetTop || 0 : S;
    Me(() => {
      l("inkTop", z + F / 2), l("inkHeight", A * 3 / 4);
    });
  });
  const v = () => {
    c = e.container ? typeof e.container == "string" ? document.querySelector(e.container) : e.container : window, a = e.container ? c : document.documentElement || document.body;
  }, C = (M) => {
    let S = -1;
    const A = d.length;
    let F = {
      link: "#",
      offset: 0
    };
    for (M += o; ++S < A; ) {
      const z = d[S], E = d[S + 1];
      if (M >= z?.offset && M < (E && E.offset || 1 / 0)) {
        F = d[S];
        break;
      }
    }
    l("currentLink", F.link);
  }, k = () => c === window, w = () => {
    y(), setTimeout(() => {
      _(), v(), s = k() ? 0 : a.offsetTop, $(), c.addEventListener("scroll", h), window.addEventListener("hashchange", y);
    }, 0);
  };
  X(() => {
    const M = i.links.map((S) => S.href);
    Me(() => {
      const S = M.map((F) => F.split("#")[1]);
      a || v();
      const A = [];
      S.forEach((F) => {
        const z = document.getElementById(F);
        z && A.push({
          link: `#${F}`,
          offset: z.offsetTop - a.offsetTop
        });
      }), d = A;
    });
  });
  const T = (M, S) => {
    if (S.stopPropagation && S.stopPropagation(), S.preventDefault && S.preventDefault(), l("currentLink", M), l("currentId", M.replace("#", "")), $(), u === "hash")
      window.location.hash = M;
    else {
      const A = window.location.href, F = A.includes("?") ? A.split("?")[1] : "", z = location.hash.indexOf("?"), E = z > -1 ? location.hash.substring(0, z) : location.hash, x = new URLSearchParams(F);
      x.set("_to", M), window.history.replaceState({}, "", `${location.pathname}${E}?${x.toString()}`);
    }
  };
  ae(() => {
    if (le)
      return;
    w();
    const M = setInterval(() => {
      i.links.map((F) => F.href).map((F) => F.split("#")[1]).forEach((F, z) => {
        const E = document.getElementById(F);
        if (E) {
          const x = E.offsetTop - a.offsetTop;
          d[z] || (d[z] = {
            link: `#${F}`,
            offset: 0
          }), d[z] && d[z]?.offset !== x && (d[z].offset = x, d[z].link = `#${F}`);
        }
      });
    }, 500);
    ce(() => {
      clearInterval(M);
    });
  }), ce(() => {
    le || _();
  });
  const I = (M) => M && M.length ? f(te, {
    each: M,
    children: (S) => (() => {
      const A = ir(), F = A.firstChild;
      return F.$$click = (z) => {
        T(S.href, z);
      }, g(F, () => S.title), g(A, () => I(S.subItems()), null), N((z) => {
        const E = S.href, x = e.scrollOffset || 0, L = S.href, R = S.title;
        return E !== z._v$ && J(F, "href", z._v$ = E), x !== z._v$2 && J(F, "data-scroll-offset", z._v$2 = x), L !== z._v$3 && J(F, "data-href", z._v$3 = L), R !== z._v$4 && J(F, "title", z._v$4 = R), z;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      }), A;
    })()
  }) : null;
  return (() => {
    const M = rr(), S = M.firstChild, A = S.firstChild, F = A.firstChild, z = F.firstChild;
    return Ve(F, "cm-anchor-ink " + (m ? "cm-anchor-show" : "")), g(A, () => I(i.links), null), N((E) => {
      const x = t(), L = `${i.inkTop}px`, R = `${i.inkHeight}px`;
      return E._v$5 = V(M, x, E._v$5), L !== E._v$6 && ((E._v$6 = L) != null ? z.style.setProperty("top", L) : z.style.removeProperty("top")), R !== E._v$7 && ((E._v$7 = R) != null ? z.style.setProperty("height", R) : z.style.removeProperty("height")), E;
    }, {
      _v$5: void 0,
      _v$6: void 0,
      _v$7: void 0
    }), M;
  })();
}
lr.Link = nr;
Q(["click"]);
const cr = /* @__PURE__ */ b('<div class="cm-avatar-hover">'), ar = /* @__PURE__ */ b('<img alt="">'), sr = /* @__PURE__ */ b("<span>"), or = /* @__PURE__ */ b('<span class="cm-avatar-string">');
function mn(e) {
  if (e.asProps)
    return e;
  const [t, n] = U(!1), r = () => q(e, "cm-avatar", {
    [`cm-avatar-${e.size}`]: e.size,
    "cm-avatar-icon": e.icon,
    "cm-avatar-img": e.src,
    "cm-avatar-square": e.shape === "square"
  }), i = () => {
    l.style.Transform = "", l.style.webkitTransform = "", l.style.mozTransform = "";
    const u = c.clientWidth, y = l.getBoundingClientRect().width, h = Math.acos(21 / u), $ = Math.sin(h) * u, v = y > u ? $ / y : 1;
    l.style.Transform = `scale(${v})`, l.style.webkitTransform = `scale(${v})`, l.style.mozTransform = `scale(${v})`;
  };
  let l, c, a;
  ae(() => {
    c && l && (i(), MutationObserver && (a = new MutationObserver(i), a.observe(l, {
      subtree: !0,
      childList: !0,
      characterData: !0
    })), ce(() => {
      a && (a?.disconnect(), a = null);
    }));
  });
  const s = () => {
    const u = {
      ...e.style
    };
    return typeof e.size == "number" && (u.width = e.size + "px", u.height = e.size + "px"), u;
  }, o = (u) => {
    n(!0), e.onMouseEnter && e.onMouseEnter(u);
  }, d = (u) => {
    n(!1), e.onMouseLeave && e.onMouseLeave(u);
  };
  return (() => {
    const u = sr();
    u.addEventListener("mouseleave", d), u.addEventListener("mouseenter", o);
    const m = c;
    return typeof m == "function" ? j(m, u) : c = u, ye(u, "click", e.onClick, !0), g(u, f(B, {
      get when() {
        return t();
      },
      get children() {
        const y = cr();
        return g(y, () => e.hoverMask), y;
      }
    }), null), g(u, f(Te, {
      get fallback() {
        return (() => {
          const y = or(), _ = l;
          return typeof _ == "function" ? j(_, y) : l = y, g(y, () => e.children), y;
        })();
      },
      get children() {
        return [f(p, {
          get when() {
            return e.src;
          },
          get children() {
            const y = ar();
            return N(() => J(y, "src", e.src)), y;
          }
        }), f(p, {
          get when() {
            return e.icon;
          },
          get children() {
            return e.icon;
          }
        })];
      }
    }), null), N((y) => {
      const _ = r(), h = s();
      return y._v$ = V(u, _, y._v$), y._v$2 = H(u, h, y._v$2), y;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), u;
  })();
}
Q(["click"]);
const dr = /* @__PURE__ */ b('<div><div class="cm-tooltip-rel"></div><div><div class="cm-tooltip-content"><svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-tooltip-arrow"><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1"></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)"></path></svg><div class="cm-tooltip-inner cm-tooltip-inner-with-width">');
function ur(e) {
  const [t, n] = U(!1), [r, i] = U({
    display: "none",
    visibility: "hidden"
  }), l = () => e.align ?? "bottom", c = () => {
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
  }, s = () => q(e, "cm-tooltip", l(), {
    [`cm-tooltip-${e.theme}`]: e.theme
  }), o = () => ({
    "cm-tooltip-popper": !0,
    animation: t()
  });
  return (() => {
    const d = dr(), u = d.firstChild, m = u.nextSibling, y = m.firstChild, _ = y.firstChild, h = _.nextSibling;
    return d.addEventListener("mouseleave", a), d.addEventListener("mouseenter", c), g(u, () => e.children), g(h, () => e.content), N(($) => {
      const v = s(), C = e.style, k = o(), w = l(), T = r();
      return $._v$ = V(d, v, $._v$), $._v$2 = H(d, C, $._v$2), $._v$3 = V(m, k, $._v$3), w !== $._v$4 && J(m, "x-placement", $._v$4 = w), $._v$5 = H(m, T, $._v$5), $;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), d;
  })();
}
const gn = /* @__PURE__ */ b('<div class="cm-avatar-list-item">'), fr = /* @__PURE__ */ b("<div>");
function yh(e) {
  const t = () => q(e, "cm-avatar-list", {
    [`cm-avatar-list-${e.size}`]: e.size
  }), n = () => e.max ?? Number.MAX_VALUE, r = ze(() => e.children), i = () => r.toArray(), l = () => i().length, c = () => (e.gutter ?? (e.size === "small" ? -8 : -12)) + "px";
  return (() => {
    const a = fr();
    return g(a, f(te, {
      get each() {
        return i();
      },
      children: (s, o) => {
        if (s.asProps = !1, o() < n())
          return (() => {
            const d = gn();
            return g(d, f(ur, {
              get align() {
                return e.align || "top";
              },
              get content() {
                return s.title;
              },
              get children() {
                return f(mn, ie(s, {
                  get size() {
                    return e.size;
                  }
                }));
              }
            })), N(() => (o() > 0 ? c() : 0) != null ? d.style.setProperty("margin-left", o() > 0 ? c() : 0) : d.style.removeProperty("margin-left")), d;
          })();
      }
    }), null), g(a, f(B, {
      get when() {
        return l() > n();
      },
      get children() {
        const s = gn();
        return g(s, f(mn, {
          get size() {
            return e.size;
          },
          get style() {
            return e.excessStyle;
          },
          get children() {
            return ["+", Z(() => l() - n())];
          }
        })), N(() => c() != null ? s.style.setProperty("margin-left", c()) : s.style.removeProperty("margin-left")), s;
      }
    }), null), N((s) => V(a, t(), s)), a;
  })();
}
const hr = /* @__PURE__ */ b('<div><div class="cm-back-top-inner">');
function _h(e) {
  const [t, n] = U(!1), r = () => q(e, "cm-back-top", {
    "cm-back-top-show": t()
  }), i = e.bottom ?? 30, l = e.right ?? 30, c = e.height ?? 400, a = e.duration ?? 1e3, s = () => ({
    ...e.style,
    bottom: `${i}px`,
    right: `${l}px`
  }), o = () => {
    const u = document.documentElement.scrollTop || document.body.scrollTop;
    ri(window, u, 0, a), e.onClick && e.onClick();
  }, d = () => {
    n(window.pageYOffset >= c);
  };
  return ae(() => {
    window.addEventListener("scroll", d), window.addEventListener("resize", d);
  }), ce(() => {
    window.removeEventListener("scroll", d), window.removeEventListener("resize", d);
  }), (() => {
    const u = hr(), m = u.firstChild;
    return u.$$click = o, g(m, () => e.children), N((y) => {
      const _ = r(), h = s();
      return y._v$ = V(u, _, y._v$), y._v$2 = H(u, h, y._v$2), y;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), u;
  })();
}
Q(["click"]);
const mr = /* @__PURE__ */ b("<sup>"), gr = /* @__PURE__ */ b('<sup class="cm-badge-dot">'), vn = /* @__PURE__ */ b("<span>"), vr = /* @__PURE__ */ b('<span class="cm-badge-status-text">');
function $r(e) {
  if (e && (e.startsWith("#") || e.startsWith("rgb") || e.startsWith("hsl"))) {
    const t = new Option().style;
    return t.color = e, t.color.startsWith("rgb");
  }
  return !1;
}
function wh(e) {
  const t = e.overflowCount ?? 99, n = () => q(e, "cm-badge", {
    "cm-badge-status": e.status
  }), r = () => {
    const s = {};
    return e.offset && e.offset.length === 2 && (s["margin-top"] = `${e.offset[0]}px`, s["margin-right"] = `${e.offset[1]}px`), s;
  }, i = () => e.count && e.count > t ? Math.min(t, e.count) + "+" : e.count, l = () => ({
    "cm-badge-status-dot": !0,
    [`cm-badge-status-${e.status}`]: !!e.status,
    [`cm-badge-status-${e.color}`]: !!e.color && e.color.indexOf("#") === -1
  }), c = () => ({
    "background-color": $r(e.color) ? e.color : ""
  }), a = () => ({
    "cm-badge-count": !0,
    [`cm-badge-count-${e.type}`]: !!e.type
  });
  return (() => {
    const s = vn();
    return g(s, () => e.children, null), g(s, f(B, {
      get when() {
        return !e.status && !e.color;
      },
      get fallback() {
        return [(() => {
          const o = vn();
          return N((d) => {
            const u = l(), m = c();
            return d._v$3 = V(o, u, d._v$3), d._v$4 = H(o, m, d._v$4), d;
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), o;
        })(), (() => {
          const o = vr();
          return g(o, () => e.text), o;
        })()];
      },
      get children() {
        return [f(B, {
          get when() {
            return e.count !== void 0 || e.text !== void 0;
          },
          get children() {
            const o = mr();
            return g(o, i, null), g(o, () => e.text, null), N((d) => {
              const u = a(), m = r();
              return d._v$ = V(o, u, d._v$), d._v$2 = H(o, m, d._v$2), d;
            }, {
              _v$: void 0,
              _v$2: void 0
            }), o;
          }
        }), f(B, {
          get when() {
            return e.dot !== void 0;
          },
          get children() {
            const o = gr();
            return N((d) => H(o, r(), d)), o;
          }
        })];
      }
    }), null), N((o) => V(s, n(), o)), s;
  })();
}
const li = (e) => {
  const t = ze(() => e), [n, r] = se({
    default: []
  });
  return pe(Ui(t, () => {
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
}, yr = /* @__PURE__ */ b('<div class="cm-banner-icon">'), _r = /* @__PURE__ */ b('<div class="cm-banner-title">'), wr = /* @__PURE__ */ b('<div class="cm-banner-desc">'), br = /* @__PURE__ */ b('<span class="cm-banner-close">'), xr = /* @__PURE__ */ b('<div class="cm-banner-extra">'), Cr = /* @__PURE__ */ b('<div><div class="cm-banner-body"><div class="cm-banner-content"><div class="cm-banner-content-body">');
function bh(e) {
  const [t, n] = we(e, "visible", !0), r = () => q(e, "cm-banner", {
    [`cm-banner-${e.type}`]: e.type,
    ["cm-banner-bordered"]: e.bordered,
    ["cm-banner-full"]: e.fullMode ?? !0,
    ["cm-banner-not-full"]: e.fullMode === !1
  }), i = () => {
    let s = "";
    switch (e.type) {
      case "info": {
        s = "info";
        break;
      }
      case "success": {
        s = "check-circle";
        break;
      }
      case "warning": {
        s = "alert-circle";
        break;
      }
      case "error": {
        s = "x-circle";
        break;
      }
      default:
        s = "info";
    }
    return f(K, {
      name: s,
      size: 20
    });
  }, l = () => {
    n(!1), e.onClose && e.onClose();
  }, c = li(e.children), a = e.icon === null ? null : e.icon ?? i();
  return f(B, {
    get when() {
      return t();
    },
    get children() {
      const s = Cr(), o = s.firstChild, d = o.firstChild, u = d.firstChild;
      return g(d, f(B, {
        when: a,
        get children() {
          const m = yr();
          return g(m, a), m;
        }
      }), u), g(u, f(B, {
        get when() {
          return e.title;
        },
        get children() {
          const m = _r();
          return g(m, () => e.title), m;
        }
      }), null), g(u, f(B, {
        get when() {
          return c.default;
        },
        get children() {
          const m = wr();
          return g(m, () => c.default), m;
        }
      }), null), g(o, f(B, {
        get when() {
          return e.closeIcon !== null;
        },
        get children() {
          const m = br();
          return m.$$click = l, g(m, () => e.closeIcon ?? f(K, {
            name: "x"
          })), m;
        }
      }), null), g(s, f(B, {
        get when() {
          return c.extra;
        },
        get children() {
          const m = xr();
          return g(m, () => c.extra), m;
        }
      }), null), N((m) => V(s, r(), m)), s;
    }
  });
}
Q(["click"]);
function kr(e) {
  return e;
}
const Lr = /* @__PURE__ */ b("<div>"), Ze = (e) => {
  const t = () => e.dir ?? "h", n = () => e.wrap ?? !1, r = () => e.inline ?? !1, i = () => e.size ?? 8, l = () => e.align ?? "", c = () => q(e, "cm-space", {
    [`cm-space-${t()}`]: t(),
    [`cm-space-align-${l()}`]: l(),
    [`cm-space-justify-${e.justify}`]: !!e.justify,
    "cm-space-wrap": n(),
    "cm-space-inline": r()
  }), a = () => de(e, {
    [t() === "h" ? "column-gap" : "row-gap"]: i() + "px"
  });
  return (() => {
    const s = Lr();
    return g(s, () => e.children), N((o) => {
      const d = c(), u = a(), m = e.id, y = e.title;
      return o._v$ = V(s, d, o._v$), o._v$2 = H(s, u, o._v$2), m !== o._v$3 && J(s, "id", o._v$3 = m), y !== o._v$4 && J(s, "title", o._v$4 = y), o;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), s;
  })();
}, Sr = /* @__PURE__ */ b("<div>");
function on(e) {
  const [t, n] = oe(e, ["classList", "class", "style", "size", "children"]), r = () => q(e, "cm-view"), i = () => de(e, {
    flex: `0 1 ${t.size}`
  });
  return (() => {
    const l = Sr();
    return Ce(l, ie({
      get classList() {
        return r();
      },
      get style() {
        return i();
      }
    }, n), !1, !0), g(l, () => t.children), l;
  })();
}
function xh(e) {
  const t = () => q(e, "cm-h-view"), [n, r] = oe(e, ["classList", "class"]);
  return f(on, ie({
    get classList() {
      return t();
    }
  }, r));
}
function Ch(e) {
  const t = () => q(e, "cm-v-view"), [n, r] = oe(e, ["classList", "class"]);
  return f(on, ie({
    get classList() {
      return t();
    }
  }, r));
}
function kh(e) {
  const t = () => q(e, "cm-fixed-view"), [n, r] = oe(e, ["classList", "class"]);
  return f(on, ie({
    get classList() {
      return t();
    }
  }, r));
}
const Er = /* @__PURE__ */ b("<div>");
function Mr(e) {
  const t = () => q(e, "cm-both-side");
  return (() => {
    const n = Er();
    return g(n, () => e.children), N((r) => {
      const i = t(), l = e.style;
      return r._v$ = V(n, i, r._v$), r._v$2 = H(n, l, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Dr = /* @__PURE__ */ b("<div>");
function Lh(e) {
  const t = () => q(e, "cm-view-center"), n = de(e, {
    width: e.width + "px",
    height: e.height + "px"
  }), [r, i] = oe(e, ["classList", "class", "style", "width", "height", "children"]);
  return (() => {
    const l = Dr();
    return Ce(l, ie({
      get classList() {
        return t();
      },
      get style() {
        return n();
      }
    }, i), !1, !0), g(l, () => r.children), l;
  })();
}
const $n = /* @__PURE__ */ b("<span>"), Fr = /* @__PURE__ */ b('<span class="cm-breadcrumb-wrap"><a></a><span class="cm-breadcrumb-separator">');
function Tr(e) {
  const [t, n] = oe(e, ["classList", "link", "icon", "children"]), r = () => q(e, "cm-breadcrumb-item");
  return (() => {
    const i = Fr(), l = i.firstChild, c = l.nextSibling;
    return g(l, f(Ze, {
      size: 4,
      get children() {
        return [f(B, {
          get when() {
            return t.icon;
          },
          get children() {
            const a = $n();
            return g(a, () => t.icon), a;
          }
        }), (() => {
          const a = $n();
          return g(a, () => t.children), a;
        })()];
      }
    })), g(c, () => e.separator || "/"), N((a) => {
      const s = r(), o = e.link;
      return a._v$ = V(l, s, a._v$), o !== a._v$2 && J(l, "href", a._v$2 = o), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
const Rr = /* @__PURE__ */ b("<div>");
function Ar(e) {
  const t = ze(() => e.children), n = () => t.toArray(), r = () => q(e, "cm-breadcrumb");
  return (() => {
    const i = Rr();
    return g(i, f(te, {
      get each() {
        return n();
      },
      children: (l) => (l.separator = e.separator ?? "/", f(Tr, l))
    })), N((l) => {
      const c = r(), a = e.style;
      return l._v$ = V(i, c, l._v$), l._v$2 = H(i, a, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
Ar.Item = kr;
function zr() {
  const [e, t] = U(!1);
  return [e, () => {
    t(!0), setTimeout(() => {
      t(!1);
    }, 1e3);
  }];
}
const Pr = /* @__PURE__ */ b('<span class="cm-loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(113.635 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite">'), Je = (e) => {
  const t = ei({
    size: 14,
    color: "#fff"
  }, e);
  return (() => {
    const n = Pr(), r = n.firstChild;
    return N((i) => {
      const l = `${t.size}px`, c = `${t.size}px`, a = t.size, s = t.size, o = t.color;
      return l !== i._v$ && ((i._v$ = l) != null ? n.style.setProperty("width", l) : n.style.removeProperty("width")), c !== i._v$2 && ((i._v$2 = c) != null ? n.style.setProperty("height", c) : n.style.removeProperty("height")), a !== i._v$3 && J(r, "width", i._v$3 = a), s !== i._v$4 && J(r, "height", i._v$4 = s), o !== i._v$5 && J(r, "stroke", i._v$5 = o), i;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), n;
  })();
}, Ir = /* @__PURE__ */ b("<div>"), ci = me();
function Sh(e) {
  const t = () => q(e, {
    "cm-button-group": !0
  }), [n, r] = oe(e, ["classList", "children", "type", "size", "disabled"]);
  return f(ci.Provider, {
    get value() {
      return {
        type: n.type,
        size: n.size,
        disabled: n.disabled
      };
    },
    get children() {
      const i = Ir();
      return Ce(i, ie({
        get classList() {
          return t();
        }
      }, r), !1, !0), g(i, () => n.children), i;
    }
  });
}
const yn = /* @__PURE__ */ b('<span class="cm-button-icon">'), Nr = /* @__PURE__ */ b('<button type="button">'), Or = /* @__PURE__ */ b("<a>"), Ee = (e) => {
  const [t, n] = zr(), r = e.iconAlign || "left", i = ge(ci), l = () => e.type || i?.type, c = () => e.size || i?.size, a = () => e.disabled || i?.disabled, s = () => q(e, {
    "cm-button": !0,
    [`cm-button-icon-${r}`]: !0,
    "cm-click-animating": t(),
    "cm-button-ghost": e.ghost,
    "cm-button-danger": e.danger,
    "cm-button-block": e.block,
    [`cm-button-${l()}`]: l(),
    [`cm-button-${c()}`]: c(),
    "cm-button-active": e.active,
    "cm-button-circle": e.circle,
    "cm-button-round": e.round,
    "cm-button-icon-only": !!e.icon && !e.children,
    "cm-button-empty": !e.icon && !e.children
  }), [o, d] = oe(e, ["classList", "class", "onClick", "link", "style", "title", "type", "block", "size", "active", "circle", "icon", "children", "iconAlign", "disabled", "loading", "ghost", "ref"]);
  function u(y) {
    a() || o.loading || o.onClick && o.onClick(y);
  }
  const m = r === "left" ? [Z((() => {
    const y = Z(() => !!o.loading);
    return () => y() ? f(Je, {}) : (() => {
      const _ = Z(() => !!o.icon);
      return () => _() ? (() => {
        const h = yn();
        return g(h, () => o.icon), h;
      })() : null;
    })();
  })()), Z(() => o.children)] : [Z(() => o.children), Z((() => {
    const y = Z(() => !!o.loading);
    return () => y() ? f(Je, {}) : (() => {
      const _ = Z(() => !!o.icon);
      return () => _() ? (() => {
        const h = yn();
        return g(h, () => o.icon), h;
      })() : null;
    })();
  })())];
  return f(B, {
    get when() {
      return !o.link;
    },
    get fallback() {
      return (() => {
        const y = Or(), _ = o.ref;
        return typeof _ == "function" ? j(_, y) : o.ref = y, Ce(y, ie({
          get classList() {
            return s();
          },
          get style() {
            return o.style;
          },
          get title() {
            return o.title;
          }
        }, d, {
          onMouseUp: n,
          onClick: u
        }), !1, !0), g(y, m), y;
      })();
    },
    get children() {
      const y = Nr(), _ = o.ref;
      return typeof _ == "function" ? j(_, y) : o.ref = y, Ce(y, ie({
        get classList() {
          return s();
        },
        get style() {
          return o.style;
        },
        get title() {
          return o.title;
        },
        get disabled() {
          return a();
        }
      }, d, {
        onMouseUp: n,
        onClick: u
      }), !1, !0), g(y, m), y;
    }
  });
}, Vr = /* @__PURE__ */ b('<div class="cm-card-cover">'), Br = /* @__PURE__ */ b('<div><div class="cm-card-body">'), Hr = /* @__PURE__ */ b('<div class="cm-card-head">'), Yr = /* @__PURE__ */ b('<div class="cm-card-footer">');
function Eh(e) {
  const t = () => q(e, "cm-card", {
    "cm-card-bordered": e.bordered,
    "cm-card-rised": e.rised,
    [`cm-card-${e.size}`]: e.size
  });
  return (() => {
    const n = Br(), r = n.firstChild;
    return g(n, (() => {
      const i = Z(() => !!e.title);
      return () => i() ? (() => {
        const l = Hr();
        return g(l, () => e.title), N((c) => H(l, e.headStyle, c)), l;
      })() : null;
    })(), r), g(n, f(B, {
      get when() {
        return e.cover;
      },
      get children() {
        const i = Vr();
        return g(i, () => e.cover), i;
      }
    }), r), g(r, () => e.children), g(n, (() => {
      const i = Z(() => !!e.footer);
      return () => i() ? (() => {
        const l = Yr();
        return g(l, () => e.footer), l;
      })() : null;
    })(), null), N((i) => {
      const l = t(), c = e.style, a = e.bodyStyle;
      return i._v$ = V(n, l, i._v$), i._v$2 = H(n, c, i._v$2), i._v$3 = H(r, a, i._v$3), i;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), n;
  })();
}
const qr = /* @__PURE__ */ b("<div>");
function Wr(e) {
  const t = Kr(), n = he(), r = () => q(e, "cm-carousel-item", {
    "cm-carousel-item-active-fade": t && t.effect === "fade" && t.store.activeKey === n,
    "cm-carousel-item-active": t && t.effect === "slide" && t.store.dir === "normal" && t.store.activeKey === n,
    "cm-carousel-item-active-next": t && t.effect === "slide" && t.store.dir === "normal" && t.store.prevKey === n,
    "cm-carousel-item-active-reverse": t && t.effect === "slide" && t.store.dir === "reverse" && t.store.activeKey === n,
    "cm-carousel-item-active-reverse-next": t && t.effect === "slide" && t.store.dir === "reverse" && t.store.nextKey === n
  });
  return ae(() => {
    t && t.addItem({
      id: n
    });
  }), (() => {
    const i = qr();
    return J(i, "data-id", n), g(i, () => e.children), N((l) => V(i, r(), l)), i;
  })();
}
const Ur = /* @__PURE__ */ b('<div><div x-placement="left"></div><div class="cm-carousel-list"></div><div x-placement="right"></div><ul>'), jr = /* @__PURE__ */ b("<li>"), ai = me();
function Xr(e) {
  const t = () => q(e, "cm-carousel"), [n, r] = we(e, "activeIndex", 0), i = e.arrow ?? "hover", l = e.dotType ?? "dot", c = e.dotAlign ?? "center", a = e.autoPlay ?? !1, s = e.duration ?? 4e3, o = e.effect ?? "slide";
  let d, u, m = null;
  const y = () => ({
    "cm-carousel-arrow": !0,
    [`cm-carousel-arrow-${i}`]: !!i
  }), _ = () => ({
    "cm-carousel-dots": !0,
    [`cm-carousel-dots-${l}`]: !!l,
    [`cm-carousel-dots-${c}`]: !!c
  });
  let h = !1;
  const [$, v] = se({
    data: [],
    activeIndex: n(),
    activeKey: "",
    nextKey: "",
    prevKey: "",
    dir: "normal"
  }), C = (M) => {
    M.index = $.data.length, v("data", [...$.data, M]);
  }, k = () => {
    clearTimeout(m), w(), m = setTimeout(() => {
      k();
    }, s);
  };
  ae(() => {
    if (d) {
      const M = d.querySelectorAll(".cm-carousel-item");
      if (M.length) {
        const S = M[0].getBoundingClientRect();
        u.style.height = S.height + "px";
      }
      a && (m = setTimeout(() => {
        k();
      }, s));
    }
  }), ce(() => {
    m && clearTimeout(m);
  }), X(() => {
    const M = n();
    v("activeIndex", M);
  }), X(() => {
    const M = $.activeIndex, S = $.data;
    if (S && S.length)
      if (!h)
        u.children[$.activeIndex].classList.add("cm-carousel-item-active-init"), h = !0;
      else {
        const A = u.querySelector(".cm-carousel-item-active-init");
        A && A.classList.remove("cm-carousel-item-active-init"), v("activeKey", S[M].id), v("prevKey", S[(S.length + M - 1) % S.length].id), v("nextKey", S[(S.length + M + 1) % S.length].id);
      }
  });
  const w = () => {
    r(($.activeIndex + 1) % $.data.length), v("dir", "normal"), e.onChange && e.onChange(n());
  }, T = () => {
    r(($.data.length + $.activeIndex - 1) % $.data.length), v("dir", "reverse"), e.onChange && e.onChange(n());
  }, I = (M) => {
    v("dir", $.activeIndex - M < 0 ? "normal" : "reverse"), r(M), e.onChange && e.onChange(n());
  };
  return f(ai.Provider, {
    value: {
      addItem: C,
      store: $,
      effect: o
    },
    get children() {
      const M = Ur(), S = M.firstChild, A = S.nextSibling, F = A.nextSibling, z = F.nextSibling, E = d;
      typeof E == "function" ? j(E, M) : d = M, S.$$click = T, g(S, f(K, {
        name: "chevron-left",
        size: 24
      }));
      const x = u;
      return typeof x == "function" ? j(x, A) : u = A, g(A, () => e.children), F.$$click = w, g(F, f(K, {
        name: "chevron-right",
        size: 24
      })), g(z, f(te, {
        get each() {
          return $.data;
        },
        children: (L, R) => {
          const D = () => ({
            "cm-carousel-dot": !0,
            "cm-carousel-dot-active": $.activeIndex === R()
          });
          return (() => {
            const P = jr();
            return P.$$click = () => {
              I(R());
            }, N((O) => V(P, D(), O)), P;
          })();
        }
      })), N((L) => {
        const R = t(), D = e.style, P = y(), O = y(), Y = _();
        return L._v$ = V(M, R, L._v$), L._v$2 = H(M, D, L._v$2), L._v$3 = V(S, P, L._v$3), L._v$4 = V(F, O, L._v$4), L._v$5 = V(z, Y, L._v$5), L;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0,
        _v$5: void 0
      }), M;
    }
  });
}
Xr.Item = Wr;
const Kr = () => ge(ai);
Q(["click"]);
const ut = "cm-col", Wt = "cm-col-offset", lt = "cm-row", Ut = "cm-row-gap", et = {
  xs: "576px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1600px"
}, si = /* @__PURE__ */ new Set(), oi = /* @__PURE__ */ new Set(), di = /* @__PURE__ */ new Set(), ui = /* @__PURE__ */ new Set(), fi = "lg";
let hi = !1;
function Gr() {
  for (const e in et) {
    const t = "cm-grid-" + e;
    if (document.getElementById(t))
      continue;
    const n = document.createElement("style");
    n.id = t, document.head.appendChild(n);
  }
  hi = !0;
}
function Rt(e, t) {
  hi || Gr(), document.getElementById("cm-grid-" + t).innerHTML += e;
}
function Zr(e, t, n) {
  si.add(t);
  const r = et[n], i = n === "xs" ? `.${ut}-${t}{width: ${e}%}` : `@media (min-width: ${r}) { .${ut}-${t}{width: ${e}%} }`;
  Rt(i, n);
}
function Jr(e, t, n) {
  oi.add(t);
  const r = et[n], i = n === "xs" ? `.${Wt}-${t}{margin-left: ${e}%}` : `@media (min-width: ${r}) { .${Wt}-${t}{margin-left: ${e}%} }`;
  Rt(i, n);
}
function Qr(e, t, n) {
  di.add(t);
  const r = et[n], i = n === "xs" ? `.${lt}-${t}{margin-left: -${parseFloat(e) / 2}px; margin-right: -${parseFloat(e) / 2}px}
        .${lt}-${t} .${ut}{padding-left: ${parseFloat(e) / 2}px; padding-right: ${parseFloat(e) / 2}px}` : `@media (min-width: ${r}) {
            .${lt}-${t}{margin-left: -${parseFloat(e) / 2}px; margin-right: -${parseFloat(e) / 2}px}
            .${lt}-${t} .${ut}{padding-left: ${parseFloat(e) / 2}px; padding-right: ${parseFloat(e) / 2}px}
        }`;
  Rt(i, n);
}
function pr(e, t, n) {
  ui.add(t);
  const r = et[n], i = n === "xs" ? `.${Ut}-${t}{row-gap: ${e}px;}` : `@media (min-width: ${r}) {
            .${Ut}-${t}{row-gap: ${e}px;}
        }`;
  Rt(i, n);
}
function mi(e, t, n) {
  let r = (e * 100).toFixed(4);
  r = r.substring(0, r.length - 1), n = n ?? fi;
  const i = n + "-" + r.replace(".", "-");
  return t === "grid" ? (si.has(i) || Zr(r, i, n), `${ut}-${i}`) : (oi.has(i) || Jr(r, i, n), `${Wt}-${i}`);
}
function el(e, t, n) {
  n = n ?? fi;
  const r = typeof e == "number" ? e.toFixed(2) : e[0].toFixed(2), i = typeof e == "number" ? e : e[0], l = typeof e == "number" ? e.toFixed(2) : e[1].toFixed(2), c = typeof e == "number" ? e : e[1];
  if (i || c) {
    const a = [];
    if (i) {
      const s = n + "-" + r.replace(".", "-");
      di.has(s) || Qr(r, s, n), a.push(`${lt}-${s}`);
    }
    if (c) {
      const s = n + "-" + l.replace(".", "-");
      ui.has(s) || pr(l, s, n), a.push(`${Ut}-${s}`);
    }
    return a;
  }
}
function tl(e, t) {
  return e ? mi(e, "grid", t) : "";
}
function nl(e, t) {
  return e ? mi(e, "offset", t) : "";
}
function il(e) {
  if (!e)
    return "";
  const t = {};
  if (!Array.isArray(e) && typeof e == "object")
    for (const n in et) {
      const r = e[n];
      if (r) {
        const i = el(r, "gutter", n);
        i && i.forEach((l) => {
          t[l] = !0;
        });
      }
    }
  return t;
}
const rl = /* @__PURE__ */ b("<div>"), gi = me(), Mh = (e) => {
  const t = typeof e.gutter == "object" ? il(e.gutter) : {}, n = () => q(e, "cm-row", {
    ...t,
    [`cm-row-${e.justify}`]: e.justify,
    [`cm-row-${e.align}`]: e.align
  }), r = () => {
    const l = {
      ...e.style
    };
    let c = 0, a = 0;
    return typeof e.gutter == "number" && (c = e.gutter ? e.gutter / 2 : 0, a = e.gutter || 0), Array.isArray(e.gutter) && (c = e.gutter[0] ? e.gutter[0] / 2 : 0, a = e.gutter[1] || 0), c && (l["margin-left"] = `-${c}px`, l["margin-right"] = `-${c}px`), a && (l["row-gap"] = `${a}px`), l;
  }, i = ei({
    gutter: e.gutter || 0
  });
  return f(gi.Provider, {
    value: i,
    get children() {
      const l = rl();
      return g(l, () => e.children), N((c) => {
        const a = n(), s = r();
        return c._v$ = V(l, a, c._v$), c._v$2 = H(l, s, c._v$2), c;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), l;
    }
  });
}, ll = /* @__PURE__ */ b("<div>"), Dh = (e) => {
  const t = ge(gi);
  let n;
  const r = {}, i = {};
  ["xs", "sm", "md", "lg", "xl", "xxl"].forEach((s) => {
    if (e[s]) {
      const o = typeof e[s] == "number" ? e[s] : e[s].grid, d = tl(o, s);
      d && (r[d] = !0);
      const u = typeof e[s] == "object" ? e[s].offset : 0, m = nl(u, s);
      m && (i[m] = !0);
    }
  });
  const c = () => {
    const s = Object.keys(r).length > 0, o = Object.keys(i).length > 0, d = {
      ...e.style
    };
    s || (d.flex = `0 0 ${(e.grid || 1) * 100}%`, e.fixWidth && (d["max-width"] = `${(e.grid || 1) * 100}%`)), e.push && (d.left = `${e.push * 100}%`), e.pull && (d.right = `${e.pull * 100}%`), e.offset && !o && (d["margin-left"] = `${e.offset * 100}%`);
    let u = 0;
    return typeof t?.gutter == "number" && (u = t.gutter ? t.gutter / 2 : 0), Array.isArray(t?.gutter) && (u = t.gutter[0] ? t.gutter[0] / 2 : 0), u && (d["padding-left"] = u + "px", d["padding-right"] = u + "px"), e.flex && (e.flex.indexOf(" ") > -1 ? d.flex = e.flex : d.flex = `0 0 ${e.flex}`), d;
  }, a = () => q(e, "cm-col", {
    ...r,
    ...i
  });
  return (() => {
    const s = ll(), o = n;
    return typeof o == "function" ? j(o, s) : n = s, g(s, () => e.children), N((d) => {
      const u = a(), m = c();
      return d._v$ = V(s, u, d._v$), d._v$2 = H(s, m, d._v$2), d;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}, cl = /* @__PURE__ */ b('<span class="cm-count-down-prefix">'), al = /* @__PURE__ */ b('<span class="cm-count-down-suffix">'), sl = /* @__PURE__ */ b('<span><span class="cm-count-down-value">');
function _t(e) {
  return `${e}`.padStart(2, "0");
}
function Fh(e) {
  let t;
  const [n, r] = U((/* @__PURE__ */ new Date()).getTime()), i = () => {
    let a = e.value;
    (typeof a == "string" || a instanceof Date) && (a = re(a).toDate().getTime());
    let s = a - n();
    s <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), s = 0);
    const o = _t(parseInt(s / (1e3 * 60 * 60 * 24) + "", 10)), d = _t(parseInt(s / (1e3 * 60 * 60) + "", 10) % 24), u = _t(parseInt(s / (1e3 * 60) + "", 10) % 60), m = _t(parseInt(s / 1e3 + "", 10) % 60), y = e.format ?? "HH:mm:ss";
    let _ = y;
    return y.match(/D+/) && (_ = _.replace(/D+/, o + "")), y.match(/H+/) && (_ = _.replace(/H+/, d + "")), y.match(/m+/) && (_ = _.replace(/m+/, u + "")), y.match(/s+/) && (_ = _.replace(/s+/, m + "")), _;
  }, l = () => {
    t = setInterval(() => {
      r((/* @__PURE__ */ new Date()).getTime());
    }, 1e3);
  };
  ae(() => {
    l();
  }), ce(() => {
    clearInterval(t), t = null;
  });
  const c = () => q(e, "cm-count-down");
  return (() => {
    const a = sl(), s = a.firstChild;
    return g(a, f(B, {
      get when() {
        return e.prefix;
      },
      get children() {
        const o = cl();
        return g(o, () => e.prefix), o;
      }
    }), s), g(s, i), g(a, f(B, {
      get when() {
        return e.suffix;
      },
      get children() {
        const o = al();
        return g(o, () => e.suffix), o;
      }
    }), null), N((o) => {
      const d = c(), u = e.style;
      return o._v$ = V(a, d, o._v$), o._v$2 = H(a, u, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
let ol = class {
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
    let r, i, l, c;
    r = Math.abs(t).toFixed(this.options.decimalPlaces), r += "";
    const a = r.split(".");
    if (i = a[0], l = a.length > 1 ? this.options.decimal + a[1] : "", this.options.useGrouping) {
      c = "";
      let s = 3, o = 0;
      for (let d = 0, u = i.length; d < u; ++d)
        this.options.useIndianSeparators && d === 4 && (s = 2, o = 1), d !== 0 && o % s === 0 && (c = this.options.separator + c), o++, c = i[u - d - 1] + c;
      i = c;
    }
    return this.options.numerals && this.options.numerals.length && (i = i.replace(/[0-9]/g, (s) => this.options.numerals?.[+s] + ""), l = l.replace(/[0-9]/g, (s) => this.options.numerals?.[+s] + "")), n + this.options.prefix + i + l + this.options.suffix;
  };
  // t: current time, b: beginning value, c: change in value, d: duration
  easeOutExpo = (t, n, r, i) => r * (-Math.pow(2, -10 * t / i) + 1) * 1024 / 1023 + n;
};
const dl = /* @__PURE__ */ b("<span>");
function Rh(e) {
  const t = e.start ?? 0;
  let n, r;
  ae(() => {
    r = new ol(n, e.value, {
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
  }), ce(() => {
    r = null;
  });
  const i = () => {
    e.onEnd && e.onEnd();
  }, l = () => {
    r && r.start();
  }, c = (o) => {
    r && r.update(o);
  }, a = () => {
    r && r.pauseResume();
  };
  X(() => {
    c(e.value);
  }), e.ref && e.ref({
    reset: () => {
      r && r.reset();
    },
    update: c,
    start: l,
    pauseResume: a
  });
  const s = () => q(e, "cm-count-up");
  return (() => {
    const o = dl(), d = n;
    return typeof d == "function" ? j(d, o) : n = o, N((u) => {
      const m = s(), y = e.style;
      return u._v$ = V(o, m, u._v$), u._v$2 = H(o, y, u._v$2), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
const ul = /* @__PURE__ */ b("<div>"), fl = /* @__PURE__ */ b('<span class="cm-divider-text">');
function Ah(e) {
  const t = () => q(e, "cm-divider", {
    [`cm-divider-${e.dir || "h"}`]: e.dir || "h",
    [`cm-divider-${e.align}`]: e.align,
    "cm-divider-dashed": e.dashed
  }), n = () => de(e, {
    margin: `${e.margin}${typeof e.margin == "number" ? "px" : ""}`
  });
  return (() => {
    const r = ul();
    return g(r, (() => {
      const i = Z(() => !!e.children);
      return () => i() ? (() => {
        const l = fl();
        return g(l, () => e.children), l;
      })() : null;
    })()), N((i) => {
      const l = t(), c = n();
      return i._v$ = V(r, l, i._v$), i._v$2 = H(r, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
function hl(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function ml(e, t, n) {
  const i = t === t.ownerDocument.body ? {
    left: 0,
    top: 0
  } : t.getBoundingClientRect(), l = (e.clientX + t.scrollLeft - i.left) / n, c = (e.clientY + t.scrollTop - i.top) / n;
  return {
    x: l,
    y: c
  };
}
function _n(e, t) {
  for (let n = 0, r = e.length; n < r; n++)
    if (t.apply(t, [e[n], n, e]))
      return e[n];
}
function gl(e, t) {
  return e.targetTouches && _n(e.targetTouches, (n) => t === n.identifier) || e.changedTouches && _n(e.changedTouches, (n) => t === n.identifier);
}
function At(e, t, n, r) {
  const i = typeof t == "number" ? gl(e, t) : null;
  if (typeof t == "number" && !i)
    return null;
  const l = n.offsetParent || r.offsetParent || r.ownerDocument.body;
  return ml(i || e, l, n.scale);
}
function zt(e, t, n, r, i) {
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
function wn(e, t, n, r) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...r
  };
  e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n;
}
function bn(e, t, n, r) {
  if (!e)
    return;
  const i = {
    capture: !0,
    ...r
  };
  e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null;
}
function vl(e, t, n) {
  const r = Math.round(t / e[0]) * e[0], i = Math.round(n / e[1]) * e[1];
  return [r, i];
}
function $l(e) {
  if (!e)
    return;
  let t = e.getElementById("react-draggable-style-el");
  t || (t = e.createElement("style"), t.type = "text/css", t.id = "react-draggable-style-el", t.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, t.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, e.getElementsByTagName("head")[0].appendChild(t)), e.body && e.body.classList.add("react-draggable-transparent-selection");
}
function yl(e) {
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
function Pt(e, t, n) {
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
function _l(e) {
  return {
    left: e.left,
    top: e.top,
    right: e.right,
    bottom: e.bottom
  };
}
function $e(e) {
  return parseInt(e, 10);
}
function wl(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t += $e(n.borderTopWidth), t += $e(n.borderBottomWidth), t;
}
function bl(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t += $e(n.borderLeftWidth), t += $e(n.borderRightWidth), t;
}
function xl(e) {
  let t = e.clientHeight;
  const n = window.getComputedStyle(e);
  return t -= $e(n.paddingTop), t -= $e(n.paddingBottom), t;
}
function Cl(e) {
  let t = e.clientWidth;
  const n = window.getComputedStyle(e);
  return t -= $e(n.paddingLeft), t -= $e(n.paddingRight), t;
}
function wt(e) {
  return typeof e == "number" && !isNaN(e);
}
function kl({
  bounds: e,
  node: t
}, n, r) {
  if (!e)
    return [n, r];
  if (e = typeof e == "string" ? e : _l(e), typeof e == "string") {
    let i;
    if (e === "parent" ? i = t.parentNode : i = document.querySelector(e), !(i instanceof HTMLElement))
      throw new Error('Bounds selector "' + e + '" could not find an element.');
    const l = window.getComputedStyle(t), c = window.getComputedStyle(i);
    e = {
      left: -t.offsetLeft + $e(c.paddingLeft) + $e(l.marginLeft),
      top: -t.offsetTop + $e(c.paddingTop) + $e(l.marginTop),
      right: Cl(i) - bl(t) - t.offsetLeft + $e(c.paddingRight) - $e(l.marginRight),
      bottom: xl(i) - wl(t) - t.offsetTop + $e(c.paddingBottom) - $e(l.marginBottom)
    };
  }
  return wt(e.right) && (n = Math.min(n, e.right)), wt(e.bottom) && (r = Math.min(r, e.bottom)), wt(e.left) && (n = Math.max(n, e.left)), wt(e.top) && (r = Math.max(r, e.top)), [n, r];
}
function Ll(e) {
  return e === "both" || e === "x";
}
function Sl(e) {
  return e === "both" || e === "y";
}
function El({
  x: e,
  y: t
}, n, r) {
  let i = `translate(${e}${r},${t}${r})`;
  if (n) {
    const l = `${typeof n.x == "string" ? n.x : n.x + r}`, c = `${typeof n.y == "string" ? n.y : n.y + r}`;
    i = `translate(${l}, ${c})` + i;
  }
  return i;
}
function Ml(e, t) {
  return {
    transform: El(e, t, "px")
  };
}
const Dl = /* @__PURE__ */ b("<div>");
function Fl(e) {
  const [t, n] = U(null), [r, i] = U(NaN), [l, c] = U(NaN), [a, s] = U(!1);
  let o;
  const d = (h) => {
    if (e.onMouseDown && e.onMouseDown(h), !e.allowAnyClick && typeof h.button == "number" && h.button !== 0)
      return !1;
    if (!o || !o.ownerDocument || !o.ownerDocument.body)
      throw new Error("<DraggableCore> not mounted on DragStart!");
    const {
      ownerDocument: $
    } = o;
    if (e.disabled || !(h.target instanceof $.defaultView.Node) || e.handle && !document.querySelector(e.handle).contains(h.target) || e.cancel && document.querySelector(e.cancel).contains(h.target))
      return;
    h.type === "touchstart" && h.preventDefault();
    const v = hl(h);
    n(v);
    const C = At(h, v, e, o);
    if (C == null)
      return;
    const {
      x: k,
      y: w
    } = C, T = zt(o, r(), l(), k, w);
    (e.onStart && e.onStart(h, T)) !== !1 && ($l($), Ge(() => {
      s(!0), i(k), c(w);
    }), wn($, "mousemove", u), wn($, "mouseup", m));
  }, u = (h) => {
    const $ = At(h, t(), e, o);
    if ($ == null)
      return;
    let {
      x: v,
      y: C
    } = $;
    if (Array.isArray(e.grid)) {
      let T = v - r(), I = C - l();
      if ([T, I] = vl(e.grid, T, I), !T && !I)
        return;
      v = r() + T, C = l() + I;
    }
    const k = zt(o, r(), l(), v, C);
    if (e.onDrag(h, k) === !1) {
      try {
        m(new MouseEvent("mouseup"));
      } catch {
        const I = document.createEvent("MouseEvents");
        I.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), m(I);
      }
      return;
    }
    Ge(() => {
      i(v), c(C);
    });
  }, m = (h) => {
    if (!a())
      return;
    const $ = At(h, t(), e, o);
    if ($ == null)
      return;
    const {
      x: v,
      y: C
    } = $, k = zt(o, r(), l(), v, C);
    if (e.onStop(h, k) === !1)
      return !1;
    o && yl(o.ownerDocument), Ge(() => {
      s(!1), i(NaN), c(NaN);
    }), o && (bn(o.ownerDocument, "mousemove", u), bn(o.ownerDocument, "mouseup", m));
  }, y = (h) => d(h), _ = (h) => m(h);
  return (() => {
    const h = Dl(), $ = o;
    return typeof $ == "function" ? j($, h) : o = h, h.$$mouseup = _, h.$$mousedown = y, g(h, () => e.children), N((v) => {
      const C = e.classList, k = e.style;
      return v._v$ = V(h, C, v._v$), v._v$2 = H(h, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), h;
  })();
}
Q(["mousedown", "mouseup"]);
function jt(e) {
  const t = e.defaultPosition || {
    x: 0,
    y: 0
  }, [n, r] = se({
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
  let c;
  const a = (_, h) => {
    if ((e.onStart && e.onStart(_, Pt(n, i, h))) === !1)
      return !1;
    r("dragging", !0), r("dragged", !0);
  }, s = (_, h) => {
    if (!n.dragging)
      return !1;
    const $ = Pt(n, i, h), v = {
      x: $.x,
      y: $.y,
      slackX: 0,
      slackY: 0
    };
    if (l) {
      const {
        x: k,
        y: w
      } = v;
      v.x += n.slackX, v.y += n.slackY;
      const [T, I] = kl({
        bounds: l,
        node: h.node
      }, v.x, v.y);
      v.x = T, v.y = I, v.slackX = n.slackX + (k - v.x), v.slackY = n.slackY + (w - v.y), $.x = v.x, $.y = v.y, $.deltaX = v.x - n.x, $.deltaY = v.y - n.y;
    }
    if ((e.onDrag && e.onDrag(_, $)) === !1)
      return !1;
    r("x", v.x), r("y", v.y), r("slackX", v.slackX), r("slackY", v.slackY);
  }, o = (_, h) => {
    if (!n.dragging || (e.onStop && e.onStop(_, Pt(n, i, h))) === !1)
      return !1;
    r("dragging", !1), r("slackX", 0), r("slackY", 0);
  };
  ce(() => {
    r("dragging", !1);
  });
  const d = e.axis || "both", u = () => ({
    // Set left if horizontal drag is enabled
    x: Ll(d) ? n.x : t.x,
    // Set top if vertical drag is enabled
    y: Sl(d) ? n.y : t.y
  }), m = () => ({
    ...e.style,
    ...Ml(u(), e.positionOffset)
  }), y = () => q(e, "cm-draggable", {
    "cm-draggable-dragging": n.dragging,
    "cm-draggable-dragged": n.dragged
  });
  return e.ref && e.ref({
    reset: () => {
      r("x", 0), r("y", 0);
    },
    setPosition(_) {
      r("x", _.x), r("y", _.y);
    }
  }), f(Fl, {
    get grid() {
      return e.grid;
    },
    get classList() {
      return y();
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
    onDrag: s,
    onStop: o,
    ref(_) {
      const h = c;
      typeof h == "function" ? h(_) : c = _;
    },
    get children() {
      return e.children;
    }
  });
}
function Tl(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
function dn(e) {
  const {
    el: t
  } = e, n = (r) => {
    r.target && t().contains(r.target) && (t().classList.remove(e.startClass), e.onLeave && e.onLeave()), t().removeEventListener("transitionend", n);
  };
  return ce(() => {
    t() && t().removeEventListener("transitionend", n);
  }), {
    enter() {
      t() && (t().classList.add(e.startClass), t().removeEventListener("transitionend", n), Tl(() => {
        t().classList.add(e.activeClass), e.onEnter && e.onEnter();
      }));
    },
    leave() {
      t() && (t().classList.remove(e.activeClass), t().addEventListener("transitionend", n));
    }
  };
}
const Rl = /* @__PURE__ */ b('<div class="cm-drawer-title">'), Al = /* @__PURE__ */ b('<div tabindex="1"><div class="cm-drawer-mask"></div><div class="cm-drawer-wrap"><div class="cm-drawer-body">');
function zh(e) {
  const [t, n] = we(e, "visible", !1), r = () => e.align ?? "right", i = e.maskCloseable ?? !0, l = () => (e.size ?? 256) + "px", c = () => ({
    [r() === "left" || r() === "right" ? "width" : "height"]: l()
  }), a = () => q(e, "cm-drawer", {
    [`cm-drawer-${r()}`]: r()
  });
  let s, o;
  const d = dn({
    el: () => s,
    target: () => o,
    startClass: "cm-drawer-visible",
    activeClass: "cm-drawer-open",
    onLeave: () => {
      e.onClose && e.onClose();
    }
  }), u = () => {
    i && m();
  }, m = () => {
    n(!1);
  };
  pe(() => {
    t() ? (d.enter(), e.onShow && e.onShow()) : d.leave();
  });
  const y = (_) => {
    e.escClose && _.code === "Escape" && n(!1);
  };
  return (() => {
    const _ = Al(), h = _.firstChild, $ = h.nextSibling, v = $.firstChild;
    _.$$keyup = y;
    const C = s;
    typeof C == "function" ? j(C, _) : s = _, h.$$click = u;
    const k = o;
    return typeof k == "function" ? j(k, $) : o = $, g($, f(B, {
      get when() {
        return e.title;
      },
      get children() {
        const w = Rl();
        return g(w, () => e.title), w;
      }
    }), v), g($, f(B, {
      get when() {
        return e.hasClose ?? !0;
      },
      get children() {
        return f(K, {
          name: "x",
          size: 18,
          class: "cm-drawer-close",
          onClick: m
        });
      }
    }), v), g(v, () => e.children), N((w) => {
      const T = a(), I = e.style, M = c();
      return w._v$ = V(_, T, w._v$), w._v$2 = H(_, I, w._v$2), w._v$3 = H($, M, w._v$3), w;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), _;
  })();
}
Q(["keyup", "click"]);
function He(e, t) {
  if (le)
    return;
  function n(c) {
    const a = document.createElement("div");
    return a.setAttribute("id", c), a;
  }
  function r(c) {
    document.body.appendChild(c);
  }
  const i = document.querySelector(`#${e}`), l = i || n(e);
  return i || r(l), l.classList.add(t), l;
}
function vi(e, t) {
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
function Xt(e, t, n) {
  if (le)
    return () => {
    };
  const r = (l) => {
    if (n && n(l), e instanceof Array) {
      let c = !1;
      e.forEach((a) => {
        a.contains && a.contains(l.target) && (c = !0), a.forEach && a.forEach((s) => {
          s.contains && s.contains(l.target) && (c = !0);
        });
      }), c || t && t();
    } else
      e.contains(l.target) || t && t();
  }, i = () => {
    document.removeEventListener("mousedown", r);
  };
  return document.addEventListener("mousedown", r), i;
}
let zl = 5e3;
function Ye() {
  return zl++;
}
function Pl(e, t) {
  if (le)
    return;
  let n = null, r;
  const i = window.document.documentElement;
  function l() {
    clearTimeout(r), n?.disconnect(), n = null;
  }
  function c(a = !1, s = 1) {
    l();
    const {
      left: o,
      top: d,
      width: u,
      height: m
    } = e.getBoundingClientRect();
    if (a || t(), !u || !m)
      return;
    const y = Math.floor(d), _ = Math.floor(i.clientWidth - (o + u)), h = Math.floor(i.clientHeight - (d + m)), $ = Math.floor(o), C = {
      rootMargin: `${-y}px ${-_}px ${-h}px ${-$}px`,
      threshold: Math.max(0, Math.min(1, s)) || 1
    };
    let k = !0;
    function w(T) {
      const I = T[0].intersectionRatio;
      if (I !== s) {
        if (!k)
          return c();
        I ? c(!1, I) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      k = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...C,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, C);
    }
    n.observe(e);
  }
  return c(!0), l;
}
const Il = /* @__PURE__ */ b("<ul>");
function Ph(e) {
  const t = () => q(e, "cm-dropdown-list"), n = $i(), r = () => de(e, {
    background: n?.gradient ? `linear-gradient(${n.gradient?.join(",")})` : ""
  });
  return (() => {
    const i = Il();
    return g(i, () => e.children), N((l) => {
      const c = t(), a = r();
      return l._v$ = V(i, c, l._v$), l._v$2 = H(i, a, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
const Nl = /* @__PURE__ */ b("<li>"), Ol = /* @__PURE__ */ b('<span class="cm-dropdown-item-icon">');
function Ih(e) {
  const [t, n] = oe(e, ["classList", "class", "disabled", "name", "children", "icon", "style"]), r = () => q(t, "cm-dropdown-item", {
    "cm-dropdown-item-disabled": t.disabled,
    "cm-dropdown-item-divided": e.divided,
    "cm-dropdown-item-with-arrow": e.arrow
  }), i = $i(), l = (a) => {
    t.disabled || (a.preventDefault(), a.stopPropagation(), i?.onSelect(t.name));
  }, c = () => de(t, {
    color: i?.color
  });
  return (() => {
    const a = Nl();
    return Ce(a, ie({
      get classList() {
        return r();
      }
    }, n, {
      get style() {
        return c();
      },
      onClick: l
    }), !1, !0), g(a, (() => {
      const s = Z(() => !!e.icon);
      return () => s() ? (() => {
        const o = Ol();
        return g(o, () => e.icon), o;
      })() : null;
    })(), null), g(a, () => t.children, null), g(a, (() => {
      const s = Z(() => !!e.arrow);
      return () => s() ? f(K, {
        class: "cm-dropdown-item-arrow",
        name: "chevron-right"
      }) : null;
    })(), null), a;
  })();
}
const Vl = /* @__PURE__ */ b("<span>"), xn = /* @__PURE__ */ b("<div>"), Kt = me(), $i = () => ge(Kt);
function Oe(e) {
  const [t, n] = we(e, "visible", !1), [r, i] = U(t()), [l, c] = U("");
  let a, s;
  const o = e.trigger || "hover";
  let d;
  const u = e.align || "bottom";
  let m;
  const y = Ye(), _ = e.revers ?? !0, h = () => q(e, "cm-dropdown", {
    // 'cm-dropdown-open': visible(),
    [`cm-dropdown-${e.theme}`]: e.theme
  });
  let $ = null;
  const v = dn({
    el: () => m,
    startClass: "cm-dropdown-visible",
    activeClass: "cm-dropdown-open",
    onLeave: () => {
      i(!1), $ && $();
    },
    onEnter: () => {
      i(!0), $ = Pl(m, () => {
        c(he());
      });
    }
  });
  pe(() => {
    t() ? v.enter() : v.leave();
  });
  const C = () => {
    d && (clearTimeout(d), d = null);
  }, k = (x) => {
    if (e.handler) {
      const R = document.querySelector(e.handler);
      if (!R || !x.target.closest(e.handler) && !R.contains(x.target))
        return;
    } else if (!s.nextElementSibling.contains(x.target))
      return !1;
    if (e.disabled)
      return;
    x.preventDefault && x.preventDefault(), x.stopPropagation && x.stopPropagation(), a = x.target, e.onMouseClick?.(x);
    const L = e.onBeforeDrop && e.onBeforeDrop(t());
    (L === void 0 || L) && n(!t());
  }, w = () => {
    e.disabled || o === "hover" && (C(), n(!0), m && (m.removeEventListener("mouseleave", T), m.addEventListener("mouseleave", T, !1)));
  }, T = () => {
    e.disabled || o === "hover" && (d = setTimeout(() => {
      n(!1);
    }, 200));
  }, I = (x, L) => {
    if (x === "bottomRight" || x === "topRight")
      return 0;
    if (x === "top" || x === "bottom")
      return L.width / 2;
    if (x === "topLeft" || x === "bottomLeft")
      return L.width;
    if (x === "left" || x === "leftTop" || x === "leftBottom")
      return 0;
    if (x === "right" || x === "rightTop" || x === "rightBottom")
      return L.width;
  }, M = (x, L) => {
    if (x === "leftBottom" || x === "rightBottom" || x === "top" || x === "topLeft" || x === "topRight")
      return 0;
    if (x === "leftTop" || x === "rightTop")
      return L.height;
    if (x === "left" || x === "right")
      return L.height / 2;
    if (x === "bottom" || x === "bottomLeft" || x === "bottomRight")
      return L.height;
  }, S = () => {
    if (r(), l(), s && s.nextElementSibling) {
      let x = s.nextElementSibling;
      if (e.handler && (x = a?.closest(e.handler)), !x)
        return;
      const L = x.offsetParent;
      if (!L)
        return;
      if (e.position) {
        const Re = {
          left: e.position.x + "px",
          top: e.position.y + "px"
        };
        return Object.assign(Re, e.style || {}), Re;
      }
      const R = L.getBoundingClientRect(), D = vi(u, x), P = D.top, O = D.left;
      if (e.transfer) {
        const Re = x.getBoundingClientRect();
        D.top = D.top + document.documentElement.scrollTop, D.left = D.left + document.documentElement.scrollLeft, e.fixWidth && (D["min-width"] = Re.width + "px");
      } else
        D.top = D.top + L.scrollTop - R.top, D.left = D.left + L.scrollLeft - R.left;
      const Y = m.getBoundingClientRect(), W = I(u, Y), ue = M(u, Y), ee = P + ue, _e = O + W, Pe = window.innerHeight || document.documentElement.clientHeight, Ie = window.innerWidth || document.documentElement.clientWidth, De = x.getBoundingClientRect();
      return _ && (ee > Pe && (u === "bottom" || u === "bottomLeft" || u === "bottomRight" ? D.top = D.top - Y.height - De.height - 12 : u === "left" || u === "right" ? D.top = D.top - (Y.height - De.height) / 2 : (u === "leftTop" || u === "rightTop") && (D.top = D.top - (Y.height - De.height))), _e > Ie - 5 && (u === "bottom" ? D.left = D.left - (Y.width - De.width) / 2 : u === "bottomLeft" ? D.left = D.left - Y.width + De.width : (u === "right" || u === "rightTop") && (D.left = D.left - Y.width - De.width))), D.top = D.top + "px", D.left = D.left + "px", D["z-index"] = y, Object.assign(D, e.style || {}), D;
    }
  };
  e.ref && e.ref({
    update: () => {
      c(he());
    }
  });
  const A = async (x) => {
    c(he());
  };
  let F;
  ae(() => {
    if (!le && s.nextElementSibling) {
      if (o === "hover" && (s.nextElementSibling.addEventListener("mouseenter", w, !1), s.nextElementSibling.addEventListener("mouseleave", T, !1)), (o === "click" || o === "custom") && (document.addEventListener("click", k), o === "click")) {
        const L = e.handler ? s.nextElementSibling.querySelectorAll(e.handler) : s.nextElementSibling;
        F = Xt([m, L], () => {
          n(!1);
        });
      }
      if (o === "contextMenu") {
        document.addEventListener("contextmenu", k);
        const L = e.handler ? s.nextElementSibling.querySelectorAll(e.handler) : s.nextElementSibling;
        F = Xt([m, L], () => {
          n(!1);
        });
      }
      const x = new ResizeObserver((L) => {
        L.forEach((R) => A());
      });
      x.observe(s.nextElementSibling), ce(() => {
        x.disconnect();
      });
    }
  }), ce(() => {
    le || (s.nextElementSibling && (o === "hover" && (s.nextElementSibling.removeEventListener("mouseenter", w), s.nextElementSibling.removeEventListener("mouseleave", T)), (o === "click" || o === "custom") && document.removeEventListener("click", k), o === "contextMenu" && document.removeEventListener("contextmenu", k)), F && F(), $ && $());
  });
  const z = (x) => {
    e.onSelect && e.onSelect(x), m.removeEventListener("mouseleave", T), n(!1);
  }, E = "cm-dropdown-portal";
  return [(() => {
    const x = Vl(), L = s;
    return typeof L == "function" ? j(L, x) : s = x, x.style.setProperty("display", "none"), x;
  })(), Z(() => e.children), f(B, {
    get when() {
      return e.transfer;
    },
    get fallback() {
      return f(Kt.Provider, {
        get value() {
          return {
            onSelect: z,
            gradient: e.gradient,
            color: e.color
          };
        },
        get children() {
          const x = xn(), L = m;
          return typeof L == "function" ? j(L, x) : m = x, x.addEventListener("mouseenter", w), J(x, "x-placement", u), g(x, () => e.menu), N((R) => {
            const D = S(), P = h();
            return R._v$3 = H(x, D, R._v$3), R._v$4 = V(x, P, R._v$4), R;
          }, {
            _v$3: void 0,
            _v$4: void 0
          }), x;
        }
      });
    },
    get children() {
      return f(Ft, {
        get mount() {
          return He(E, E);
        },
        get children() {
          return f(Kt.Provider, {
            get value() {
              return {
                onSelect: z,
                gradient: e.gradient,
                color: e.color
              };
            },
            get children() {
              const x = xn(), L = m;
              return typeof L == "function" ? j(L, x) : m = x, x.addEventListener("mouseenter", w), J(x, "x-placement", u), g(x, () => e.menu), N((R) => {
                const D = S(), P = h();
                return R._v$ = H(x, D, R._v$), R._v$2 = V(x, P, R._v$2), R;
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
const Bl = /* @__PURE__ */ b('<div class="cm-spin-pulse">'), Hl = /* @__PURE__ */ b('<svg class="cm-spin-oval" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 38 38" stroke="#2d8cf0"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(113.635 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite">'), Yl = /* @__PURE__ */ b(`<svg class="cm-spin-gears" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(50 50)"><g transform="translate(-19 -19) scale(0.6)"><g transform="rotate(177)"><animateTransform attributeName="transform" type="rotate" values="0;360" keyTimes="0;1" dur="2s" begin="0s" repeatCount="indefinite"></animateTransform><path fill="#20a0ff" d="M37.3496987939662 -7 L47.3496987939662 -7 L47.3496987939662 7
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
                                            -6.999999999999995 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23">`), ql = /* @__PURE__ */ b('<div class="cm-spin-dot"><div class="cm-spin-dot-point"></div><div class="cm-spin-dot-point"></div><div class="cm-spin-dot-point"></div><div class="cm-spin-dot-point">'), Wl = /* @__PURE__ */ b('<div><div class="cm-spin-inner"><div class="cm-spin"></div><div class="cm-spin-text">');
function yi(e) {
  const t = () => q(e, "cm-spin-wrap", {
    [`cm-spin-${e.size}`]: e.size && typeof e.size == "string"
  }), n = () => e.type || "pulse";
  return (() => {
    const r = Wl(), i = r.firstChild, l = i.firstChild, c = l.nextSibling;
    return g(l, f(Te, {
      get children() {
        return [f(p, {
          get when() {
            return n() === "pulse";
          },
          get children() {
            return Bl();
          }
        }), f(p, {
          get when() {
            return n() === "oval";
          },
          get children() {
            return Hl();
          }
        }), f(p, {
          get when() {
            return n() === "gear";
          },
          get children() {
            return Yl();
          }
        }), f(p, {
          get when() {
            return n() === "dot";
          },
          get children() {
            return ql();
          }
        })];
      }
    })), g(c, () => e.title ?? "loading..."), N((a) => {
      const s = t(), o = {
        width: e.size + "px",
        height: e.size + "px",
        ...e.style
      };
      return a._v$ = V(r, s, a._v$), a._v$2 = H(l, o, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const Ul = /* @__PURE__ */ b('<div class="cm-image-preview-mask">'), jl = /* @__PURE__ */ b('<div class="cm-image-preview-fail">'), Xl = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7197" width="200" height="200"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7198" fill="#ffffff"></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7199" fill="#ffffff">'), Kl = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7412" width="200" height="200"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" p-id="7413" fill="#ffffff"></path><path d="M921 867L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z" p-id="7414" fill="#ffffff">'), Gl = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1976" width="200" height="200"><path d="M864 128H160c-19.2 0-32 12.8-32 32v704c0 19.2 12.8 32 32 32h704c19.2 0 32-12.8 32-32V160c0-19.2-12.8-32-32-32z m-32 704H192V192h640v640z" p-id="1977" fill="#ffffff"></path><path d="M320 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32zM640 384v288c0 19.2 12.8 32 32 32s32-12.8 32-32V352c0-19.2-12.8-32-32-32h-32c-19.2 0-32 12.8-32 32s12.8 32 32 32z" p-id="1978" fill="#ffffff"></path><path d="M512 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1979" fill="#ffffff"></path><path d="M512 640m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="1980" fill="#ffffff">'), Cn = /* @__PURE__ */ b("<span>"), Zl = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13308" width="200" height="200"><path d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z m191.3-491.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z" p-id="13309" fill="#ffffff">'), Jl = /* @__PURE__ */ b('<span><svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13521" width="200" height="200"><path d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z" p-id="13522" fill="#ffffff">'), Ql = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item ivu-image-preview-operations-wait ivu-anim-loop" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7816" width="200" height="200"><path d="M512 64c247.2 0 448 200.8 448 448h-64c0-212-172-384-384-384V64z m0 832c-212 0-384-172-384-384H64c0 247.2 200.8 448 448 448v-64z" p-id="7817" fill="#ffffff">'), pl = /* @__PURE__ */ b('<div class="cm-image-preview-wrap"><div class="cm-image-preview"><img>'), ec = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26672" width="200" height="200"><path d="M358.058667 128H156.970667A28.970667 28.970667 0 0 0 128 157.013333v202.837334c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434666a14.506667 14.506667 0 0 0 14.506667-14.506666V200.448h157.610667a14.506667 14.506667 0 0 0 14.506666-14.506667V142.506667a14.506667 14.506667 0 0 0-14.506666-14.506667zM881.493333 649.642667h-43.434666a14.506667 14.506667 0 0 0-14.506667 14.506666v159.402667h-157.610667a14.506667 14.506667 0 0 0-14.506666 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506666 14.506667h201.088c16 0 28.970667-12.928 28.970667-29.013333v-202.837334a14.506667 14.506667 0 0 0-14.506667-14.506666zM358.058667 823.552H200.448v-159.402667a14.506667 14.506667 0 0 0-14.506667-14.506666H142.506667a14.506667 14.506667 0 0 0-14.506667 14.506666v202.88c0 16 12.970667 28.970667 29.013333 28.970667h201.045334a14.506667 14.506667 0 0 0 14.506666-14.506667v-43.434666a14.506667 14.506667 0 0 0-14.506666-14.506667zM866.986667 128h-201.088a14.506667 14.506667 0 0 0-14.506667 14.506667v43.434666c0 7.978667 6.570667 14.506667 14.506667 14.506667h157.610666v159.402667c0 7.978667 6.528 14.506667 14.506667 14.506666h43.434667a14.506667 14.506667 0 0 0 14.506666-14.506666V156.970667A28.928 28.928 0 0 0 866.986667 128z" p-id="26673" fill="#ffffff">'), tc = /* @__PURE__ */ b('<svg class="cm-image-preview-operations-item" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8825" width="200" height="200"><path d="M505.7 621c3.2 4.1 9.4 4.1 12.6 0l112-141.7c4.1-5.2 0.4-12.9-6.3-12.9h-72.1V120c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v346.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z" p-id="8826" fill="#ffffff"></path><path d="M903 516h-64c-4.4 0-8 3.6-8 8v300c0 4.4-3.6 8-8 8H199c-4.4 0-8-3.6-8-8V524c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v372c0 8.8 7.2 16 16 16h768c8.8 0 16-7.2 16-16V524c0-4.4-3.6-8-8-8z" p-id="8827" fill="#ffffff">');
async function nc(e, t = "unnamed") {
  try {
    if (le)
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
function _i(e) {
  const [t, n] = we(e, "visible", !1), r = Ye(), [i, l] = se({
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
  }), c = e.maskClosable ?? !0, a = e.infinite ?? !0, s = e.failInfo ?? "失败", o = (R) => {
    R.preventDefault && R.preventDefault(), R.stopPropagation && R.stopPropagation(), c && T(R);
  };
  X(() => {
    t() && (l("currentIndex", e.initIndex || 0), k(), l("original", !1));
  }), X(() => {
    i.currentIndex, l("status", "loading");
  });
  const d = (R) => {
    R.preventDefault && R.preventDefault(), R.stopPropagation && R.stopPropagation();
    const {
      pageX: D,
      pageY: P,
      which: O
    } = R;
    O === 1 && (l("startX", D), l("startY", P), l("transition", !1), document.addEventListener("mousemove", u), document.addEventListener("mouseup", m));
  }, u = (R) => {
    R.stopPropagation();
    const {
      pageX: D,
      pageY: P
    } = R, O = i.translate.x + (D - i.startX), Y = i.translate.y + (P - i.startY);
    l("translate", "x", O), l("translate", "y", Y), l("startX", D), l("startY", P);
  }, m = () => {
    l("transition", !0), document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", m);
  }, y = (R) => {
    if (!t())
      return;
    const {
      keyCode: D
    } = R;
    D === 37 && w(!1), D === 39 && w(!0), D === 38 && C(R, "zoomIn"), D === 40 && C(R, "zoomOut"), D === 32 && (R.preventDefault && R.preventDefault(), l("original", !i.original));
  }, _ = (R) => {
    if (!t())
      return;
    const {
      keyCode: D
    } = R;
    D === 27 && T(R);
  }, h = (R) => {
    if (t())
      return R.preventDefault && R.preventDefault(), R.stopPropagation && R.stopPropagation(), R.stopImmediatePropagation && R.stopImmediatePropagation(), C(R, R.deltaY < 0 ? "zoomIn" : "zoomOut"), !1;
  };
  ae(() => {
    le || (document.addEventListener("wheel", h, {
      passive: !1
    }), document.addEventListener("keydown", y), document.addEventListener("keyup", _));
  }), ce(() => {
    le || (document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", m), document.removeEventListener("wheel", h), document.removeEventListener("keydown", y), document.removeEventListener("keyup", _));
  });
  const $ = () => {
    l("status", "loaded");
  }, v = () => {
    l("status", "failed");
  }, C = (R, D) => {
    R.stopPropagation && R.stopPropagation(), D === "zoomIn" && i.scale < 6 && l("scale", i.scale + 0.25), D === "zoomOut" && i.scale > 0.25 && l("scale", i.scale - 0.25), D === "rotateLeft" && l("degree", i.degree - 90), D === "rotateRight" && l("degree", i.degree + 90), D === "original" && (l("original", !i.original), l("transition", !1), k(), setTimeout(() => {
      l("transition", !0);
    }, 0)), D === "download" && (l("downloading", !0), nc(e.previewList[i.currentIndex]).then(() => {
      l("downloading", !1);
    }).catch(() => {
      l("downloading", !1);
    }));
  }, k = () => {
    l("scale", 1), l("degree", 0), l("translate", "x", 0), l("translate", "y", 0);
  }, w = (R) => {
    R ? i.currentIndex + 1 === e.previewList.length ? a && (k(), l("currentIndex", 0)) : (k(), l("currentIndex", i.currentIndex + 1)) : i.currentIndex === 0 ? a && (k(), l("currentIndex", e.previewList.length - 1)) : (k(), l("currentIndex", i.currentIndex - 1)), e.onSwitch && e.onSwitch(i.currentIndex);
  }, T = (R) => {
    n(!1), R.stopPropagation && R.stopPropagation(), e.onClose && e.onClose();
  }, I = () => ({
    "cm-image-preview-image": !0,
    "cm-image-preview-grabbing": !i.transition,
    "cm-image-preview-hidden": i.status === "failed",
    "cm-image-preview-transition": i.transition,
    "cm-image-preview-limit": !i.original
  }), M = () => {
    let R = i.translate.x / i.scale, D = i.translate.y / i.scale;
    const P = i.degree % 360;
    return [90, -270].includes(P) && ([R, D] = [D, -R]), [180, -180].includes(P) && ([R, D] = [-R, -D]), [270, -90].includes(P) && ([R, D] = [-D, R]), {
      transform: `
                scale(${i.scale})
                rotate(${i.degree}deg)
                translate(${R}px, ${D}px)
            `
    };
  }, S = () => a ? !1 : i.currentIndex === 0, A = () => {
    const R = e.previewList.length;
    return a ? !1 : i.currentIndex >= R - 1;
  }, F = () => ({
    "cm-image-preview-arrow-left": !0,
    "cm-image-preview-arrow-disabled": S()
  }), z = () => ({
    "cm-image-preview-arrow-right": !0,
    "cm-image-preview-arrow-disabled": A()
  }), E = () => e.previewList[i.currentIndex], x = (R) => {
    R.stopPropagation && R.stopPropagation(), R.preventDefault && R.preventDefault();
  }, L = "cm-image-preview-portal";
  return f(Ft, {
    get mount() {
      return He(L, L);
    },
    get children() {
      return f(B, {
        get when() {
          return t();
        },
        get children() {
          return [(() => {
            const R = Ul();
            return r - 1 != null ? R.style.setProperty("z-index", r - 1) : R.style.removeProperty("z-index"), R;
          })(), (() => {
            const R = pl(), D = R.firstChild, P = D.firstChild;
            return r != null ? R.style.setProperty("z-index", r) : R.style.removeProperty("z-index"), D.$$click = o, g(D, f(B, {
              get when() {
                return i.status === "loading";
              },
              get children() {
                return f(yi, {
                  class: "cm-image-preview-loading"
                });
              }
            }), P), g(D, f(B, {
              get when() {
                return i.status === "failed";
              },
              get children() {
                const O = jl();
                return g(O, s), O;
              }
            }), P), P.$$click = x, P.addEventListener("error", v), P.addEventListener("load", $), P.$$mousedown = d, g(D, f(Ze, {
              dir: "h",
              class: "cm-image-preview-operations",
              size: 0,
              get children() {
                return [(() => {
                  const O = Xl(), Y = O.firstChild;
                  return Y.$$click = (W) => C(W, "zoomIn"), O;
                })(), (() => {
                  const O = Kl(), Y = O.firstChild;
                  return Y.$$click = (W) => C(W, "zoomOut"), O;
                })(), (() => {
                  const O = Cn();
                  return g(O, f(B, {
                    get when() {
                      return i.original;
                    },
                    get fallback() {
                      return (() => {
                        const Y = ec();
                        return Y.$$click = (W) => C(W, "original"), Y;
                      })();
                    },
                    get children() {
                      const Y = Gl();
                      return Y.$$click = (W) => C(W, "original"), Y;
                    }
                  })), O;
                })(), (() => {
                  const O = Zl(), Y = O.firstChild;
                  return Y.$$click = (W) => C(W, "rotateLeft"), O;
                })(), (() => {
                  const O = Jl(), Y = O.firstChild;
                  return Y.$$click = (W) => C(W, "rotateRight"), O;
                })(), (() => {
                  const O = Cn();
                  return g(O, f(B, {
                    get when() {
                      return i.downloading;
                    },
                    get fallback() {
                      return (() => {
                        const Y = tc();
                        return Y.$$click = (W) => C(W, "download"), Y;
                      })();
                    },
                    get children() {
                      return Ql();
                    }
                  })), O;
                })()];
              }
            }), null), g(D, f(B, {
              get when() {
                return e.previewList.length > 1;
              },
              get children() {
                return [f(K, {
                  get classList() {
                    return F();
                  },
                  name: "chevron-left",
                  size: 26,
                  onClick: (O) => {
                    x(O), w(!1);
                  }
                }), f(K, {
                  get classList() {
                    return z();
                  },
                  name: "chevron-right",
                  size: 26,
                  onClick: (O) => {
                    x(O), w(!0);
                  }
                })];
              }
            }), null), g(D, f(K, {
              class: "cm-image-preview-arrow-close",
              name: "x",
              onClick: T,
              size: 26
            }), null), N((O) => {
              const Y = I(), W = M(), ue = E();
              return O._v$ = V(P, Y, O._v$), O._v$2 = H(P, W, O._v$2), ue !== O._v$3 && J(P, "src", O._v$3 = ue), O;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }), R;
          })()];
        }
      });
    }
  });
}
Q(["click", "mousedown"]);
const ic = /* @__PURE__ */ b('<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M0 0m512 0l0 0q512 0 512 512l0 0q0 512-512 512l0 0q-512 0-512-512l0 0q0-512 512-512Z" fill="#FFFFFF" p-id="5339"></path><path d="M640 396.8m-51.2 0a51.2 51.2 0 1 0 102.4 0 51.2 51.2 0 1 0-102.4 0Z" fill="#82D2F7" p-id="5340"></path><path d="M479.6416 472.8832l88.448 176.896A64 64 0 0 1 510.848 742.4H333.952a64 64 0 0 1-57.2416-92.6208l88.448-176.896a64 64 0 0 1 114.4832 0z" fill="#046EA7" p-id="5341"></path><path d="M674.3424 555.0976l65.8688 131.7248A38.4 38.4 0 0 1 705.8688 742.4H574.1312a38.4 38.4 0 0 1-34.3424-55.5776l65.8688-131.7248a38.4 38.4 0 0 1 68.6848 0z" fill="#FCCF0A">'), rc = /* @__PURE__ */ b('<div class="cm-image-placeholder">'), lc = /* @__PURE__ */ b('<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M948.622222 173.511111L506.311111 113.777778l-118.044444 133.688889 135.111111 251.733333L412.444444 750.933333l9.955556 99.555556-22.755556-99.555556 12.8-228.977777-193.422222-263.111112L307.2 113.777778 66.844444 180.622222c-25.6 7.111111-42.666667 32.711111-38.4 59.733334l95.288889 664.177777c4.266667 29.866667 31.288889 49.777778 61.155556 45.511111l237.511111-35.555555L851.911111 952.888889c28.444444 2.844444 54.044444-18.488889 58.311111-46.933333l85.333334-672.711112c4.266667-29.866667-17.066667-56.888889-46.933334-59.733333z m-164.977778 93.866667c35.555556 0 65.422222 29.866667 65.422223 65.422222S819.2 398.222222 783.644444 398.222222s-65.422222-29.866667-65.422222-65.422222 29.866667-65.422222 65.422222-65.422222z m88.177778 526.222222c-1.422222 11.377778-11.377778 21.333333-24.177778 19.911111l-304.355555-27.022222c-11.377778-1.422222-21.333333-11.377778-19.911111-24.177778 1.422222-11.377778 11.377778-21.333333 24.177778-19.911111l304.355555 27.022222c11.377778 1.422222 19.911111 11.377778 19.911111 24.177778z" fill="#BCC3C9" p-id="18709">'), cc = /* @__PURE__ */ b('<div class="cm-image-error"><span>'), ac = /* @__PURE__ */ b('<div class="cm-image-mark"><span>'), sc = /* @__PURE__ */ b("<div><img>"), oc = /* @__PURE__ */ b('<div class="cm-image">');
function Gt(e) {
  const [t, n] = U(!1), [r, i] = U(!1), [l, c] = U(!1), [a, s] = U(!1), o = e.previewTip ?? "预览", d = e.fit ?? "";
  let u, m = null;
  const y = () => ({
    "cm-image-inner": !0,
    "cm-image-cursor": e.preview
  }), _ = () => ({
    "cm-image-img": !0,
    "cm-image-img-hidden": t() || r()
  }), h = () => {
    s(!0);
  }, $ = () => ["fill", "contain", "cover", "none", "scale-down"].includes(d) ? `object-fit:${d};` : "", v = () => ({
    width: typeof e.width == "number" ? `${e.width}px` : e.width,
    height: typeof e.height == "number" ? `${e.height}px` : e.height
  }), C = () => {
    Ge(() => {
      i(!1), n(!1);
    }), e.onLoad && e.onLoad();
  }, k = () => {
    Ge(() => {
      i(!1), n(!0), c(!1);
    }), e.onError && e.onError();
  }, w = () => {
    Ge(() => {
      i(!0), n(!1), c(!0);
    });
  };
  X(() => {
    e.src, w();
  });
  let T;
  const I = () => {
    T = new IntersectionObserver(S, {
      root: m,
      rootMargin: "0px",
      threshold: 0
    }), T.observe(u);
  }, M = () => {
    T && T.disconnect();
  }, S = (E) => {
    for (const x of E)
      x.isIntersecting && (M(), w());
  }, A = () => {
    const {
      scrollContainer: E
    } = e;
    typeof E == "object" && E instanceof HTMLElement ? m = E : E && typeof E == "string" && (m = document.querySelector(E)), I();
  }, F = () => {
    e.lazy ? A() : w();
  }, z = () => {
    e.onClose && e.onClose();
  };
  return ae(() => {
    F();
  }), ce(() => {
    M();
  }), (() => {
    const E = oc(), x = u;
    return typeof x == "function" ? j(x, E) : u = E, g(E, f(B, {
      get when() {
        return r();
      },
      get children() {
        const L = rc();
        return g(L, f(B, {
          get when() {
            return !e.placeholder;
          },
          get fallback() {
            return e.placeholder;
          },
          get children() {
            return ic();
          }
        })), L;
      }
    }), null), g(E, f(B, {
      get when() {
        return t();
      },
      get children() {
        const L = cc(), R = L.firstChild;
        return g(R, f(B, {
          get when() {
            return !e.failInfo;
          },
          get fallback() {
            return e.failInfo;
          },
          get children() {
            return lc();
          }
        })), L;
      }
    }), null), g(E, f(B, {
      get when() {
        return l();
      },
      get children() {
        const L = sc(), R = L.firstChild;
        return L.$$click = h, R.addEventListener("error", k), R.addEventListener("load", C), g(L, f(B, {
          get when() {
            return e.preview && o;
          },
          get children() {
            const D = ac(), P = D.firstChild;
            return g(P, o), D;
          }
        }), null), N((D) => {
          const P = y(), O = _(), Y = $(), W = e.alt, ue = e.src, ee = e.lazy ? "lazy" : "eager", _e = e.referrerPolicy;
          return D._v$ = V(L, P, D._v$), D._v$2 = V(R, O, D._v$2), D._v$3 = H(R, Y, D._v$3), W !== D._v$4 && J(R, "alt", D._v$4 = W), ue !== D._v$5 && J(R, "src", D._v$5 = ue), ee !== D._v$6 && J(R, "loading", D._v$6 = ee), _e !== D._v$7 && J(R, "referrerpolicy", D._v$7 = _e), D;
        }, {
          _v$: void 0,
          _v$2: void 0,
          _v$3: void 0,
          _v$4: void 0,
          _v$5: void 0,
          _v$6: void 0,
          _v$7: void 0
        }), L;
      }
    }), null), g(E, f(B, {
      get when() {
        return e.preview;
      },
      get children() {
        return f(_i, {
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
          onClose: z,
          visible: [a, s],
          get onSwitch() {
            return e.onSwitch;
          }
        });
      }
    }), null), N((L) => H(E, v(), L)), E;
  })();
}
Q(["click"]);
const dc = {
  404: "https://cqb325.gitee.io/cui-solid-doc/file/404.svg",
  403: "https://cqb325.gitee.io/cui-solid-doc/file/403.svg",
  500: "https://cqb325.gitee.io/cui-solid-doc/file/500.svg",
  empty: "https://cqb325.gitee.io/cui-solid-doc/file/empty.svg",
  fail: "https://cqb325.gitee.io/cui-solid-doc/file/fail.svg",
  deny: "https://cqb325.gitee.io/cui-solid-doc/file/deny.svg"
};
function uc(e) {
  return e ? dc[e] : null;
}
const fc = /* @__PURE__ */ b("<span>"), hc = /* @__PURE__ */ b("<mark>"), mc = /* @__PURE__ */ b("<code>"), gc = /* @__PURE__ */ b("<a><span>");
function Ae(e) {
  const [t, n] = oe(e, ["classList", "class", "children", "type", "disabled", "link", "icon", "mark", "code", "underline", "deleted", "strong", "size", "onCopy", "gradient"]), r = () => t.size || "normal", i = () => q(e, "cm-text", {
    [`cm-text-${t.type}`]: t.type,
    "cm-text-disabled": t.disabled,
    "cm-text-underline": t.underline,
    "cm-text-link": t.link,
    "cm-text-deleted": t.deleted,
    "cm-text-strong": t.strong,
    [`cm-text-${r()}`]: r()
  }), l = () => de(e, {
    "background-image": t.gradient ? `linear-gradient(${t.gradient.join(",")})` : "",
    color: e.gradient ? "transparent" : ""
  });
  return (() => {
    const c = fc();
    return Ce(c, ie({
      get classList() {
        return i();
      }
    }, n, {
      get style() {
        return l();
      }
    }), !1, !0), g(c, (() => {
      const a = Z(() => !!t.mark);
      return () => a() ? (() => {
        const s = hc();
        return g(s, () => t.children), s;
      })() : (() => {
        const s = Z(() => !!t.code);
        return () => s() ? (() => {
          const o = mc();
          return g(o, () => t.children), o;
        })() : (() => {
          const o = Z(() => !!t.link);
          return () => o() ? (() => {
            const d = gc(), u = d.firstChild;
            return g(d, () => t.icon, u), g(u, () => t.children), N(() => J(d, "href", t.link)), d;
          })() : t.children;
        })();
      })();
    })()), c;
  })();
}
const vc = /* @__PURE__ */ b('<div class="cm-exception-desc">'), $c = /* @__PURE__ */ b('<div class="cm-exception-action">'), yc = /* @__PURE__ */ b('<div><div class="cm-exception-img"></div><div class="cm-exception-info">');
function Nh(e) {
  const t = () => q(e, "cm-exception", {
    [`cm-exception-${e.type}`]: !!e.type
  }), n = e.showDesc ?? !0, r = e.showAction ?? !0;
  return (() => {
    const i = yc(), l = i.firstChild, c = l.nextSibling;
    return g(l, f(B, {
      get when() {
        return e.typeImage;
      },
      get fallback() {
        return f(Gt, {
          get src() {
            return uc(e.type);
          }
        });
      },
      get children() {
        return f(Gt, {
          get src() {
            return e.typeImage;
          }
        });
      }
    })), g(c, f(B, {
      when: n,
      get children() {
        const a = vc();
        return g(a, f(Te, {
          get children() {
            return [f(p, {
              get when() {
                return e.type === "403";
              },
              get children() {
                return f(Ae, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你无权访问该页面";
                  }
                });
              }
            }), f(p, {
              get when() {
                return e.type === "404";
              },
              get children() {
                return f(Ae, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，你访问的页面不存在";
                  }
                });
              }
            }), f(p, {
              get when() {
                return e.type === "500";
              },
              get children() {
                return f(Ae, {
                  size: "large",
                  get children() {
                    return e.desc ?? "抱歉，服务器出错了";
                  }
                });
              }
            }), f(p, {
              get when() {
                return e.type === "empty";
              },
              get children() {
                return f(Ae, {
                  size: "large",
                  get children() {
                    return e.desc ?? "暂无数据";
                  }
                });
              }
            }), f(p, {
              get when() {
                return e.type === "fail";
              },
              get children() {
                return f(Ae, {
                  size: "large",
                  get children() {
                    return e.desc ?? "授权失败";
                  }
                });
              }
            }), f(p, {
              get when() {
                return e.type === "deny";
              },
              get children() {
                return f(Ae, {
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
    }), null), g(c, f(B, {
      when: r,
      get children() {
        const a = $c();
        return g(a, f(Ee, {
          get link() {
            return e.link;
          },
          type: "primary",
          children: "返回首页"
        })), a;
      }
    }), null), N((a) => V(i, t(), a)), i;
  })();
}
const _c = /* @__PURE__ */ b('<form><button type="submit">'), un = me();
function wc(e) {
  const t = e.errorTransfer ?? !1, n = e.errorAlign ?? "right", r = () => q(e, "cm-form", {
    "cm-form-inline": e.inline
  }), [i, l] = oe(e, ["labelWidth", "form", "inline", "classList", "class", "onChange", "children", "onBeforeSubmit"]), c = (o, d) => {
    i.form && (i.form[o] = d), i.onChange && i.onChange(o, d);
  }, a = {
    labelWidth: i.labelWidth,
    inline: i.inline,
    form: i.form,
    errorTransfer: t,
    errorAlign: n,
    onChange: c
  }, s = (o) => (o.preventDefault(), i.onBeforeSubmit ? i.onBeforeSubmit() : !1);
  return f(un.Provider, {
    value: a,
    get children() {
      const o = _c(), d = o.firstChild;
      return o.addEventListener("submit", s), Ce(o, ie({
        get classList() {
          return r();
        }
      }, l, {
        get autocomplete() {
          return e.autocomplete;
        }
      }), !1, !0), d.style.setProperty("display", "none"), g(o, () => i.children, null), o;
    }
  });
}
const bc = /* @__PURE__ */ b("<li>");
function xc(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-group-wrap": e.data.children && e.data.children.length,
    "cm-select-option-active": e.checked,
    "cm-select-option-disabled": e.data.disabled
  }), n = e.data[e.valueField];
  return f(B, {
    get when() {
      return e.visible;
    },
    fallback: null,
    get children() {
      const r = bc();
      return r.$$click = () => e.onClick && e.onClick(n, e.data), g(r, (() => {
        const i = Z(() => !!e.renderOption);
        return () => i() ? e.renderOption(e.data) : e.data[e.textField];
      })()), N((i) => {
        const l = t(), c = e.style;
        return i._v$ = V(r, l, i._v$), i._v$2 = H(r, c, i._v$2), i;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r;
    }
  });
}
Q(["click"]);
const Cc = /* @__PURE__ */ b('<div><div class="cm-tag-content"><div class="cm-tag-text">'), kc = /* @__PURE__ */ b('<span class="cm-tag-badge"><span class="cm-tag-badge-text">');
function bt(e) {
  const t = () => e.value || "", n = () => q(e, "cm-tag", {
    [`cm-tag-${e.theme}`]: e.theme,
    "cm-tag-has-badge": t() !== "",
    "cm-tag-border": e.border,
    "cm-tag-circle": !t() && e.circle,
    [`cm-tag-${e.size}`]: e.size,
    "cm-tag-has-avatar": e.avatar
  }), [r, i] = we(e, "visible", !0), l = (a) => {
    e.onBeforeClose ? e.onBeforeClose(a) && c(a) : c(a);
  }, c = (a) => {
    i(!1), e.onClose && e.onClose(a);
  };
  return f(B, {
    get when() {
      return r();
    },
    fallback: null,
    get children() {
      const a = Cc(), s = a.firstChild, o = s.firstChild;
      return g(a, () => e.avatar, s), g(o, () => e.children), g(s, (() => {
        const d = Z(() => !!e.closable);
        return () => d() ? f(K, {
          name: "x",
          class: "cm-tag-close",
          size: 12,
          onClick: l
        }) : null;
      })(), null), g(a, (() => {
        const d = Z(() => t() !== "");
        return () => d() ? (() => {
          const u = kc(), m = u.firstChild;
          return g(m, t), u;
        })() : null;
      })(), null), N((d) => {
        const u = n(), m = e.style;
        return d._v$ = V(a, u, d._v$), d._v$2 = H(a, m, d._v$2), d;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), a;
    }
  });
}
const Lc = /* @__PURE__ */ b("<span>"), Sc = /* @__PURE__ */ b('<div><div class="cm-popover-body">'), Ec = /* @__PURE__ */ b('<svg width="24" height="8" xmlns="http://www.w3.org/2000/svg" class="cm-popover-icon-arrow"><path d="M0.5 0L1.5 0C1.5 4, 3 5.5, 5 7.5S8,10 8,12S7 14.5, 5 16.5S1.5,20 1.5,24L0.5 24L0.5 0z" fill="rgba(var(--semi-blue-4),1)" opacity="1"></path><path d="M0 0L1 0C1 4, 2 5.5, 4 7.5S7,10 7,12S6 14.5, 4 16.5S1,20 1,24L0 24L0 0z" fill="rgba(var(--semi-blue-4),1)">');
function Qe(e) {
  const [t, n] = we(e, "visible", !1), [r, i] = U(t()), [l, c] = U(he()), [a, s] = U(!1);
  let o, d, u;
  const m = () => e.align || "right", y = () => e.confirm ? "click" : e.trigger || "hover", _ = Ye();
  let h = null;
  const $ = e.hideDelay || 200, v = () => {
    h && (clearTimeout(h), h = null);
  }, C = () => {
    e.disabled || y() === "hover" && (v(), n(!0), e.onOpen && e.onOpen(!0));
  }, k = () => {
    e.disabled || y() === "hover" && (h = setTimeout(() => {
      n(!1), e.onOpen && e.onOpen(!1);
    }, $));
  }, w = (x) => {
    if (!e.disabled && (x.preventDefault(), x.stopPropagation(), y() === "click")) {
      const L = t();
      n(!L), e.onOpen && e.onOpen(!L);
    }
  }, T = () => q(e, "cm-popover-inner", {
    // 'cm-popover-inner-show': visible(),
    "cm-popover-with-arrow": e.arrow,
    "cm-popover-confirm": e.confirm,
    [`cm-popover-${e.theme}`]: e.theme
  }), I = dn({
    el: () => u,
    startClass: "cm-popover-inner-visible",
    activeClass: "cm-popover-inner-show",
    onLeave: () => {
      i(!1);
    },
    onEnter: () => {
      i(!0);
    }
  });
  pe(() => {
    t() ? I.enter() : I.leave();
  });
  const M = () => {
    if (r(), l(), o && o.nextElementSibling) {
      const x = vi(m(), o.nextElementSibling);
      return x.top = x.top + document.documentElement.scrollTop + "px", x.left = x.left + document.documentElement.scrollLeft + "px", x["z-index"] = _, Object.assign(x, e.style || {}), x;
    }
  }, S = async () => {
    if (e.onOk) {
      s(!0);
      const x = await e.onOk();
      s(!1), (x === void 0 || x === !0) && (n(!1), e.onOpen && e.onOpen(!1));
    }
  }, A = () => {
    e.onCancel && e.onCancel(), n(!1), e.onOpen && e.onOpen(!1);
  };
  ae(() => {
    le || o.nextElementSibling && (y() === "hover" && (o.nextElementSibling.addEventListener("mouseenter", C, !1), o.nextElementSibling.addEventListener("mouseleave", k, !1)), y() === "click" && (o.nextElementSibling.addEventListener("click", w, !1), d = Xt([u, o.nextElementSibling], () => {
      n(!1);
    })));
  }), ce(() => {
    le || (o.nextElementSibling && (y() === "hover" && (o.nextElementSibling.removeEventListener("mouseenter", C), o.nextElementSibling.removeEventListener("mouseleave", k)), y() === "click" && o.nextElementSibling.removeEventListener("click", w)), d && d());
  });
  const F = "cm-popover-portal";
  e.ref && e.ref({
    updatePosition() {
      c(he());
    }
  });
  const z = e.okText ?? "确 定", E = e.cancleText ?? "取 消";
  return [(() => {
    const x = Lc(), L = o;
    return typeof L == "function" ? j(L, x) : o = x, x.style.setProperty("display", "none"), x;
  })(), Z(() => e.children), f(Ft, {
    get mount() {
      return He(F, F);
    },
    get children() {
      const x = Sc(), L = x.firstChild, R = u;
      return typeof R == "function" ? j(R, x) : u = x, g(L, () => e.content), g(x, (() => {
        const D = Z(() => !!e.confirm);
        return () => D() ? f(Ze, {
          class: "cm-popover-tools",
          justify: "end",
          get children() {
            return [f(Ee, {
              type: "default",
              size: "small",
              onClick: A,
              children: E
            }), f(Ee, {
              type: "primary",
              size: "small",
              onClick: S,
              get loading() {
                return a();
              },
              children: z
            })];
          }
        }) : null;
      })(), null), g(x, (() => {
        const D = Z(() => !!e.arrow);
        return () => D() ? Ec() : null;
      })(), null), N((D) => {
        const P = M(), O = m(), Y = T();
        return D._v$ = H(x, P, D._v$), O !== D._v$2 && J(x, "x-placement", D._v$2 = O), D._v$3 = V(x, Y, D._v$3), D;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), x;
    }
  })];
}
const kn = /* @__PURE__ */ b("<span>+"), Mc = /* @__PURE__ */ b("<div>"), Dc = /* @__PURE__ */ b('<div class="cm-tag-group-more-wrap">');
function Fc(e) {
  const t = () => q(e, "cm-tag-group", {}), [n, r] = se({
    list: [],
    show: [],
    hide: []
  }), i = (l, c) => {
    const a = n.list.filter((s) => s.id !== l.id);
    r("list", a), e.onClose && e.onClose(l, c);
  };
  return X(() => {
    r("list", e.data);
  }), X(() => {
    const l = n.list, c = e.max ?? l.length, a = [], s = [];
    Me(() => {
      for (let d = 0; d < c; d++)
        l[d] && a.push(l[d]);
      const o = e.data.length;
      for (let d = c; d < o; d++)
        s.push(l[d]);
      r("show", a), r("hide", s);
    });
  }), (() => {
    const l = Mc();
    return g(l, f(te, {
      get each() {
        return n.show;
      },
      children: (c) => f(bt, {
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
    }), null), g(l, f(B, {
      get when() {
        return e.max && n.list.length > e.max;
      },
      get children() {
        return f(B, {
          get when() {
            return e.showMore;
          },
          get fallback() {
            return f(bt, {
              class: "cm-tag-more",
              get children() {
                return [kn(), Z(() => n.hide.length)];
              }
            });
          },
          get children() {
            return f(Qe, {
              align: "top",
              arrow: !0,
              theme: "light",
              get content() {
                return (() => {
                  const c = Dc();
                  return g(c, f(te, {
                    get each() {
                      return n.hide;
                    },
                    children: (a, s) => f(bt, {
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
                return f(bt, {
                  class: "cm-tag-more",
                  get children() {
                    return [kn(), Z(() => n.hide.length)];
                  }
                });
              }
            });
          }
        });
      }
    }), null), g(l, () => e.extra, null), N((c) => {
      const a = t(), s = e.style;
      return c._v$ = V(l, a, c._v$), c._v$2 = H(l, s, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
function tt() {
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
function qe() {
  return qe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, qe.apply(this, arguments);
}
function Tc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ft(e, t);
}
function Zt(e) {
  return Zt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Zt(e);
}
function ft(e, t) {
  return ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ft(e, t);
}
function Rc() {
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
function Lt(e, t, n) {
  return Rc() ? Lt = Reflect.construct.bind() : Lt = function(i, l, c) {
    var a = [null];
    a.push.apply(a, l);
    var s = Function.bind.apply(i, a), o = new s();
    return c && ft(o, c.prototype), o;
  }, Lt.apply(null, arguments);
}
function Ac(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Jt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Jt = function(r) {
    if (r === null || !Ac(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, i);
    }
    function i() {
      return Lt(r, arguments, Zt(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ft(i, r);
  }, Jt(e);
}
var zc = /%[sdj%]/g, wi = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (wi = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function Qt(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Se(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = 0, l = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var c = e.replace(zc, function(a) {
      if (a === "%%")
        return "%";
      if (i >= l)
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
function Pc(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function fe(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Pc(t) && typeof e == "string" && !e);
}
function Ic(e, t, n) {
  var r = [], i = 0, l = e.length;
  function c(a) {
    r.push.apply(r, a || []), i++, i === l && n(r);
  }
  e.forEach(function(a) {
    t(a, c);
  });
}
function Ln(e, t, n) {
  var r = 0, i = e.length;
  function l(c) {
    if (c && c.length) {
      n(c);
      return;
    }
    var a = r;
    r = r + 1, a < i ? t(e[a], l) : n([]);
  }
  l([]);
}
function Nc(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Sn = /* @__PURE__ */ function(e) {
  Tc(t, e);
  function t(n, r) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return t;
}(/* @__PURE__ */ Jt(Error));
function Oc(e, t, n, r, i) {
  if (t.first) {
    var l = new Promise(function(m, y) {
      var _ = function(v) {
        return r(v), v.length ? y(new Sn(v, Qt(v))) : m(i);
      }, h = Nc(e);
      Ln(h, n, _);
    });
    return l.catch(function(m) {
      return m;
    }), l;
  }
  var c = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], a = Object.keys(e), s = a.length, o = 0, d = [], u = new Promise(function(m, y) {
    var _ = function($) {
      if (d.push.apply(d, $), o++, o === s)
        return r(d), d.length ? y(new Sn(d, Qt(d))) : m(i);
    };
    a.length || (r(d), m(i)), a.forEach(function(h) {
      var $ = e[h];
      c.indexOf(h) !== -1 ? Ln($, n, _) : Ic($, n, _);
    });
  });
  return u.catch(function(m) {
    return m;
  }), u;
}
function Vc(e) {
  return !!(e && e.message !== void 0);
}
function Bc(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function En(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Bc(t, e.fullFields) : r = t[n.field || e.fullField], Vc(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Mn(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = qe({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var bi = function(t, n, r, i, l, c) {
  t.required && (!r.hasOwnProperty(t.field) || fe(n, c || t.type)) && i.push(Se(l.messages.required, t.fullField));
}, Hc = function(t, n, r, i, l) {
  (/^\s+$/.test(n) || n === "") && i.push(Se(l.messages.whitespace, t.fullField));
}, xt, Yc = function() {
  if (xt)
    return xt;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), l = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), c = new RegExp("^" + n + "$"), a = new RegExp("^" + i + "$"), s = function(w) {
    return w && w.exact ? l : new RegExp("(?:" + t(w) + n + t(w) + ")|(?:" + t(w) + i + t(w) + ")", "g");
  };
  s.v4 = function(k) {
    return k && k.exact ? c : new RegExp("" + t(k) + n + t(k), "g");
  }, s.v6 = function(k) {
    return k && k.exact ? a : new RegExp("" + t(k) + i + t(k), "g");
  };
  var o = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", u = s.v4().source, m = s.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", _ = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", h = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", $ = "(?::\\d{2,5})?", v = '(?:[/?#][^\\s"]*)?', C = "(?:" + o + "|www\\.)" + d + "(?:localhost|" + u + "|" + m + "|" + y + _ + h + ")" + $ + v;
  return xt = new RegExp("(?:^" + C + "$)", "i"), xt;
}, Dn = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ct = {
  integer: function(t) {
    return ct.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return ct.number(t) && !ct.integer(t);
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
    return typeof t == "object" && !ct.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Dn.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Yc());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Dn.hex);
  }
}, qc = function(t, n, r, i, l) {
  if (t.required && n === void 0) {
    bi(t, n, r, i, l);
    return;
  }
  var c = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], a = t.type;
  c.indexOf(a) > -1 ? ct[a](n) || i.push(Se(l.messages.types[a], t.fullField, t.type)) : a && typeof n !== t.type && i.push(Se(l.messages.types[a], t.fullField, t.type));
}, Wc = function(t, n, r, i, l) {
  var c = typeof t.len == "number", a = typeof t.min == "number", s = typeof t.max == "number", o = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, u = null, m = typeof n == "number", y = typeof n == "string", _ = Array.isArray(n);
  if (m ? u = "number" : y ? u = "string" : _ && (u = "array"), !u)
    return !1;
  _ && (d = n.length), y && (d = n.replace(o, "_").length), c ? d !== t.len && i.push(Se(l.messages[u].len, t.fullField, t.len)) : a && !s && d < t.min ? i.push(Se(l.messages[u].min, t.fullField, t.min)) : s && !a && d > t.max ? i.push(Se(l.messages[u].max, t.fullField, t.max)) : a && s && (d < t.min || d > t.max) && i.push(Se(l.messages[u].range, t.fullField, t.min, t.max));
}, Xe = "enum", Uc = function(t, n, r, i, l) {
  t[Xe] = Array.isArray(t[Xe]) ? t[Xe] : [], t[Xe].indexOf(n) === -1 && i.push(Se(l.messages[Xe], t.fullField, t[Xe].join(", ")));
}, jc = function(t, n, r, i, l) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || i.push(Se(l.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var c = new RegExp(t.pattern);
      c.test(n) || i.push(Se(l.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, ne = {
  required: bi,
  whitespace: Hc,
  type: qc,
  range: Wc,
  enum: Uc,
  pattern: jc
}, Xc = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n, "string") && !t.required)
      return r();
    ne.required(t, n, i, c, l, "string"), fe(n, "string") || (ne.type(t, n, i, c, l), ne.range(t, n, i, c, l), ne.pattern(t, n, i, c, l), t.whitespace === !0 && ne.whitespace(t, n, i, c, l));
  }
  r(c);
}, Kc = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), n !== void 0 && ne.type(t, n, i, c, l);
  }
  r(c);
}, Gc = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (n === "" && (n = void 0), fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), n !== void 0 && (ne.type(t, n, i, c, l), ne.range(t, n, i, c, l));
  }
  r(c);
}, Zc = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), n !== void 0 && ne.type(t, n, i, c, l);
  }
  r(c);
}, Jc = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), fe(n) || ne.type(t, n, i, c, l);
  }
  r(c);
}, Qc = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), n !== void 0 && (ne.type(t, n, i, c, l), ne.range(t, n, i, c, l));
  }
  r(c);
}, pc = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), n !== void 0 && (ne.type(t, n, i, c, l), ne.range(t, n, i, c, l));
  }
  r(c);
}, ea = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (n == null && !t.required)
      return r();
    ne.required(t, n, i, c, l, "array"), n != null && (ne.type(t, n, i, c, l), ne.range(t, n, i, c, l));
  }
  r(c);
}, ta = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), n !== void 0 && ne.type(t, n, i, c, l);
  }
  r(c);
}, na = "enum", ia = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l), n !== void 0 && ne[na](t, n, i, c, l);
  }
  r(c);
}, ra = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n, "string") && !t.required)
      return r();
    ne.required(t, n, i, c, l), fe(n, "string") || ne.pattern(t, n, i, c, l);
  }
  r(c);
}, la = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n, "date") && !t.required)
      return r();
    if (ne.required(t, n, i, c, l), !fe(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), ne.type(t, s, i, c, l), s && ne.range(t, s.getTime(), i, c, l);
    }
  }
  r(c);
}, ca = function(t, n, r, i, l) {
  var c = [], a = Array.isArray(n) ? "array" : typeof n;
  ne.required(t, n, i, c, l, a), r(c);
}, It = function(t, n, r, i, l) {
  var c = t.type, a = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (fe(n, c) && !t.required)
      return r();
    ne.required(t, n, i, a, l, c), fe(n, c) || ne.type(t, n, i, a, l);
  }
  r(a);
}, aa = function(t, n, r, i, l) {
  var c = [], a = t.required || !t.required && i.hasOwnProperty(t.field);
  if (a) {
    if (fe(n) && !t.required)
      return r();
    ne.required(t, n, i, c, l);
  }
  r(c);
}, st = {
  string: Xc,
  method: Kc,
  number: Gc,
  boolean: Zc,
  regexp: Jc,
  integer: Qc,
  float: pc,
  array: ea,
  object: ta,
  enum: ia,
  pattern: ra,
  date: la,
  url: It,
  hex: It,
  email: It,
  required: ca,
  any: aa
};
function pt() {
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
var en = pt(), mt = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = en, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(l) {
      var c = r[l];
      i.rules[l] = Array.isArray(c) ? c : [c];
    });
  }, t.messages = function(r) {
    return r && (this._messages = Mn(pt(), r)), this._messages;
  }, t.validate = function(r, i, l) {
    var c = this;
    i === void 0 && (i = {}), l === void 0 && (l = function() {
    });
    var a = r, s = i, o = l;
    if (typeof s == "function" && (o = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return o && o(null, a), Promise.resolve(a);
    function d(h) {
      var $ = [], v = {};
      function C(w) {
        if (Array.isArray(w)) {
          var T;
          $ = (T = $).concat.apply(T, w);
        } else
          $.push(w);
      }
      for (var k = 0; k < h.length; k++)
        C(h[k]);
      $.length ? (v = Qt($), o($, v)) : o(null, a);
    }
    if (s.messages) {
      var u = this.messages();
      u === en && (u = pt()), Mn(u, s.messages), s.messages = u;
    } else
      s.messages = this.messages();
    var m = {}, y = s.keys || Object.keys(this.rules);
    y.forEach(function(h) {
      var $ = c.rules[h], v = a[h];
      $.forEach(function(C) {
        var k = C;
        typeof k.transform == "function" && (a === r && (a = qe({}, a)), v = a[h] = k.transform(v)), typeof k == "function" ? k = {
          validator: k
        } : k = qe({}, k), k.validator = c.getValidationMethod(k), k.validator && (k.field = h, k.fullField = k.fullField || h, k.type = c.getType(k), m[h] = m[h] || [], m[h].push({
          rule: k,
          value: v,
          source: a,
          field: h
        }));
      });
    });
    var _ = {};
    return Oc(m, s, function(h, $) {
      var v = h.rule, C = (v.type === "object" || v.type === "array") && (typeof v.fields == "object" || typeof v.defaultField == "object");
      C = C && (v.required || !v.required && h.value), v.field = h.field;
      function k(I, M) {
        return qe({}, M, {
          fullField: v.fullField + "." + I,
          fullFields: v.fullFields ? [].concat(v.fullFields, [I]) : [I]
        });
      }
      function w(I) {
        I === void 0 && (I = []);
        var M = Array.isArray(I) ? I : [I];
        !s.suppressWarning && M.length && e.warning("async-validator:", M), M.length && v.message !== void 0 && (M = [].concat(v.message));
        var S = M.map(En(v, a));
        if (s.first && S.length)
          return _[v.field] = 1, $(S);
        if (!C)
          $(S);
        else {
          if (v.required && !h.value)
            return v.message !== void 0 ? S = [].concat(v.message).map(En(v, a)) : s.error && (S = [s.error(v, Se(s.messages.required, v.field))]), $(S);
          var A = {};
          v.defaultField && Object.keys(h.value).map(function(E) {
            A[E] = v.defaultField;
          }), A = qe({}, A, h.rule.fields);
          var F = {};
          Object.keys(A).forEach(function(E) {
            var x = A[E], L = Array.isArray(x) ? x : [x];
            F[E] = L.map(k.bind(null, E));
          });
          var z = new e(F);
          z.messages(s.messages), h.rule.options && (h.rule.options.messages = s.messages, h.rule.options.error = s.error), z.validate(h.value, h.rule.options || s, function(E) {
            var x = [];
            S && S.length && x.push.apply(x, S), E && E.length && x.push.apply(x, E), $(x.length ? x : null);
          });
        }
      }
      var T;
      if (v.asyncValidator)
        T = v.asyncValidator(v, h.value, w, h.source, s);
      else if (v.validator) {
        try {
          T = v.validator(v, h.value, w, h.source, s);
        } catch (I) {
          console.error?.(I), s.suppressValidatorError || setTimeout(function() {
            throw I;
          }, 0), w(I.message);
        }
        T === !0 ? w() : T === !1 ? w(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || (v.fullField || v.field) + " fails") : T instanceof Array ? w(T) : T instanceof Error && w(T.message);
      }
      T && T.then && T.then(function() {
        return w();
      }, function(I) {
        return w(I);
      });
    }, function(h) {
      d(h);
    }, a);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !st.hasOwnProperty(r.type))
      throw new Error(Se("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), l = i.indexOf("message");
    return l !== -1 && i.splice(l, 1), i.length === 1 && i[0] === "required" ? st.required : st[this.getType(r)] || void 0;
  }, e;
}();
mt.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  st[t] = n;
};
mt.warning = wi;
mt.messages = en;
mt.validators = st;
const sa = /* @__PURE__ */ b('<div class="cm-form-item-element">'), oa = /* @__PURE__ */ b("<div><label>"), da = /* @__PURE__ */ b('<div class="cm-form-item-element"><div class="cm-form-item-error-tip">'), xi = me();
function gt(e) {
  const [t, n] = U(null), r = ge(un), i = tt();
  let l;
  const c = e.labelAlign ?? "center", a = e.errorTransfer ?? r?.errorTransfer ?? !1, s = e.errorAlign ?? r?.errorAlign ?? "right", o = e.name;
  let d = !1;
  if (o && r?.form?.getValidation && r?.form?.getValidation(o)) {
    const $ = r.form.getValidation(o);
    d = Array.isArray($) ? $.some((v) => v.required) : $.required;
  }
  e.rules && (d = Array.isArray(e.rules) ? e.rules.some(($) => $.required) : e.rules.required);
  const u = () => q(e, "cm-form-item", {
    "cm-form-item-error": t(),
    "cm-form-item-inline": e.inline || r?.inline,
    "cm-form-item-required": d && e.label
  }), m = async ($, v, C) => {
    if (v.required) {
      const k = await i.required($, v.required, r?.form);
      if (!k)
        return n(C ? C.required : ""), k;
    }
    for (const k in v)
      if (k !== "required") {
        if (i[k]) {
          const w = await i[k]($, v[k], r?.form);
          if (!w)
            return n(C ? C[k] : ""), w;
        }
        if (v[k] && typeof v[k] == "function") {
          const w = await v[k]($, r?.form);
          if (!w)
            return n(C ? C[k] : ""), w;
        }
      }
    return n(null), !0;
  }, y = async ($, v) => {
    const C = {
      [`${o}`]: v
    }, k = new mt(C), w = {
      [`${o}`]: $
    };
    return new Promise((T) => {
      k.validate(w, {
        firstFields: !0
      }, (I) => {
        I ? (n(I[0].message), T(!1)) : (n(null), T(!0));
      });
    });
  }, _ = async ($) => {
    if (l) {
      const v = l.getBoundingClientRect();
      if (v.width === 0 || v.height === 0)
        return !0;
    }
    if (o && r && r.form?.getValidation && r.form?.getValidation(o) || r && e.rules) {
      const v = r.form.getValidation(o) || e.rules, C = r.form.getMessage(o) || e.messages;
      return Array.isArray(v) ? y($, v) : m($, v, C);
    }
    return !0;
  };
  e.name || console.warn("formItem needs name property to check valid");
  const h = () => {
    n(null);
  };
  return e.name && r?.form?.setCheckValid && r.form?.setCheckValid(e.name, _), e.name && r?.form?.setClearValid && r.form?.setClearValid(e.name, h), f(xi.Provider, {
    get value() {
      return {
        name: e.name
      };
    },
    get children() {
      const $ = oa(), v = $.firstChild;
      return g(v, () => e.label), g($, f(B, {
        when: a,
        get fallback() {
          return (() => {
            const C = da(), k = C.firstChild, w = l;
            return typeof w == "function" ? j(w, C) : l = C, g(C, () => e.children, k), g(k, t), C;
          })();
        },
        get children() {
          return f(Qe, {
            class: "cm-form-item-error-popover",
            arrow: !0,
            align: s,
            get disabled() {
              return !t();
            },
            get content() {
              return t();
            },
            get children() {
              const C = sa(), k = l;
              return typeof k == "function" ? j(k, C) : l = C, g(C, () => e.children), C;
            }
          });
        }
      }), null), N((C) => {
        const k = u(), w = e.style, T = {
          "cm-form-label": !0,
          [`cm-form-label-${c}`]: !0
        }, I = {
          width: r?.labelWidth + "px",
          ...e.labelStyle
        };
        return C._v$ = V($, k, C._v$), C._v$2 = H($, w, C._v$2), C._v$3 = V(v, T, C._v$3), C._v$4 = H(v, I, C._v$4), C;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0,
        _v$4: void 0
      }), $;
    }
  });
}
const ua = () => ge(xi);
function ve(e, t, n) {
  arguments.length === 2 && (n = t, t = "value");
  let r, i;
  e[t] && e[t].length === 2 && typeof e[t][0] == "function" ? (r = e[t][0], i = e[t][1]) : [r, i] = U(e[t] || n);
  const l = ge(un), c = l?.form?.getFormData ? l.form?.getFormData() : {}, s = ua()?.name || e.name, o = c && s ? c[s] : void 0;
  return o != null && !e.notCreateFiled && i(o), l && l.form && s && !e.notCreateFiled && l.form.bindController(s, r, i), [r, (u) => (i(u), e.notCreateFiled || l?.onChange(s, u), u)];
}
const Fn = /* @__PURE__ */ b('<span class="cm-progress-info">'), fa = /* @__PURE__ */ b('<div class="cm-progress-bar">'), ha = /* @__PURE__ */ b('<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle stroke="#f3f3f3" fill-opacity="0"></circle><path class="cm-progress-bar-path" stroke-linecap="round" fill-opacity="0">'), ma = /* @__PURE__ */ b('<div><div class="cm-progress-outer"><div class="cm-progress-inner">');
function Ci(e) {
  const t = () => e.max ?? 100, n = () => e.value && e.value < 0 ? 0 : e.value && e.value >= t() ? t() : e.value ?? 0, r = e.strokeWidth ?? 10, i = e.type ?? "line", l = () => e.radius ?? 60, c = () => n() === 100 ? "finished" : e.status ?? "normal", a = () => q(e, "cm-progress", {
    "cm-progress-hide-info": e.hidePercent,
    [`cm-progress-${c()}`]: !!c(),
    [`cm-progress-${i}`]: !!i
  }), s = () => `${n()}%`, o = () => {
    const v = c(), C = i === "line" ? 12 : 24;
    return e.infoRender ? e.infoRender(v, n()) : v === "finished" ? f(K, {
      name: "check-circle",
      size: C
    }) : v === "error" ? f(K, {
      name: "x-circle",
      size: C
    }) : `${n()}%`;
  }, d = () => {
    const v = {
      width: s(),
      height: `${r}px`
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (v["background-color"] = e.strokeColor), e.strokeColor instanceof Array)) {
      const C = e.strokeColor.length, k = e.strokeColor.map((w, T) => w + " " + T / C * 100 + "%");
      v["background-image"] = `linear-gradient(to right, ${k.join(",")})`;
    }
    return v;
  }, u = 2 * Math.PI, m = () => (Math.sin(u) * l()).toFixed(2), y = () => -(Math.cos(u) * l()).toFixed(2), _ = () => l() + r / 2, h = () => ["M", 0, -l(), "A", l(), l(), 0, 1, 1, m(), -y(), "A", l(), l(), 0, 1, 1, m(), y()], $ = () => {
    const v = () => n() / t(), C = () => u * l(), w = {
      "stroke-dashoffset": `${(() => C() * (1 - v()))()}`,
      "stroke-dasharray": C()
    };
    if (e.strokeColor && (typeof e.strokeColor == "string" && (w.stroke = e.strokeColor), e.strokeColor instanceof Array))
      for (let T = 0; T < e.strokeColor.length; T++) {
        const I = e.strokeColor[T];
        v() * 100 >= I.percent && (w.stroke = I.color);
      }
    return w;
  };
  return (() => {
    const v = ma(), C = v.firstChild, k = C.firstChild;
    return g(k, f(Te, {
      get children() {
        return [f(p, {
          when: i === "line",
          get children() {
            const w = fa();
            return g(w, f(B, {
              get when() {
                return e.textInside;
              },
              get children() {
                const T = Fn();
                return g(T, () => `${n()}%`), T;
              }
            })), N((T) => H(w, d(), T)), w;
          }
        }), f(p, {
          when: i === "circle",
          get children() {
            const w = ha(), T = w.firstChild, I = T.nextSibling;
            return w.style.setProperty("display", "block"), J(T, "stroke-width", r), J(I, "stroke-width", r), N((M) => {
              const S = 2 * l() + r + "px", A = 2 * l() + r + "px", F = _(), z = _(), E = l(), x = h().join(" "), L = `translate(${_()},${_()})`, R = $();
              return S !== M._v$ && ((M._v$ = S) != null ? w.style.setProperty("width", S) : w.style.removeProperty("width")), A !== M._v$2 && ((M._v$2 = A) != null ? w.style.setProperty("height", A) : w.style.removeProperty("height")), F !== M._v$3 && J(T, "cx", M._v$3 = F), z !== M._v$4 && J(T, "cy", M._v$4 = z), E !== M._v$5 && J(T, "r", M._v$5 = E), x !== M._v$6 && J(I, "d", M._v$6 = x), L !== M._v$7 && J(I, "transform", M._v$7 = L), M._v$8 = H(I, R, M._v$8), M;
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
    })), g(v, f(B, {
      get when() {
        return !e.textInside;
      },
      get children() {
        const w = Fn();
        return g(w, o), w;
      }
    }), null), N((w) => V(v, a(), w)), v;
  })();
}
const ga = /* @__PURE__ */ b("<div>"), va = /* @__PURE__ */ b('<span class="cm-word-count-prefix">'), Tn = /* @__PURE__ */ b("<span>"), $a = /* @__PURE__ */ b("<span>/"), ya = /* @__PURE__ */ b('<span class="cm-word-count-suffix">');
function ki(e) {
  const t = () => (e.value ?? "").length > e.total, n = () => {
    const c = e.value ?? "";
    return e.overflow && t() ? c.length - e.total : c.length;
  }, r = () => {
    const c = e.value ?? "";
    return Math.min(c.length / e.total * 100, 100);
  }, i = e.radius ?? 10, l = () => q(e, "cm-word-count");
  return (() => {
    const c = ga();
    return g(c, f(B, {
      get when() {
        return e.circle;
      },
      get fallback() {
        return [(() => {
          const a = va();
          return g(a, () => t() ? e.prefixOverflow : e.prefix), N(() => a.classList.toggle("cm-word-count-overflow", !!t())), a;
        })(), (() => {
          const a = Tn();
          return g(a, n), N(() => Ve(a, t() ? "cm-word-count-overflow" : "")), a;
        })(), $a(), (() => {
          const a = Tn();
          return g(a, () => e.total), a;
        })(), (() => {
          const a = ya();
          return g(a, () => t() ? e.suffixOverflow : e.suffix), N(() => a.classList.toggle("cm-word-count-overflow", !!t())), a;
        })()];
      },
      get children() {
        return f(Ci, {
          type: "circle",
          radius: i,
          strokeWidth: 1,
          hidePercent: !0,
          get value() {
            return r();
          }
        });
      }
    })), N((a) => {
      const s = l(), o = e.style;
      return a._v$ = V(c, s, a._v$), a._v$2 = H(c, o, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}
const _a = /* @__PURE__ */ b('<textarea class="cm-input">'), wa = /* @__PURE__ */ b("<div>"), ba = /* @__PURE__ */ b('<div class="cm-input-prefix">'), xa = /* @__PURE__ */ b('<div class="cm-input-group-prepend">'), Ca = /* @__PURE__ */ b('<input class="cm-input">'), ka = /* @__PURE__ */ b('<div class="cm-input-suffix">'), La = /* @__PURE__ */ b('<div class="cm-input-group-append">');
function ke(e) {
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
  }), [n, r] = oe(e, ["classList", "class", "name", "style", "disabled", "size", "type", "append", "prepend", "prefix", "suffix", "suffixStyle", "prefixStyle", "clearable", "value", "onChange", "onEnter", "onKeyDown", "onKeyUp", "onInput", "trigger"]), i = {};
  n.suffixStyle && n.suffixStyle.width && (i["padding-right"] = n.suffixStyle.width + "px"), n.prefixStyle && n.prefixStyle.width && (i["padding-left"] = n.prefixStyle.width + "px");
  const [l, c] = ve(e, ""), [a, s] = U(l()), o = n.trigger || "blur", d = (C) => {
    o === "input" && (n.onChange && n.onChange(C.target.value), c(C.target.value)), s(C.target.value), n.onInput && n.onInput(C.target.value, C), e.type === "textarea" && e.autoHeight && m(C);
  };
  let u;
  const m = (C) => {
    const k = C.target;
    u || (u = k.clientHeight), k.scrollHeight > u && (k.value.split(`
`).length === 1 ? k.style.height = `${u}px` : k.style.height = "auto", k.style.overflowY = "hidden", k.scrollTop = 0, k.style.height = `${k.scrollHeight}px`);
  }, y = (C) => {
  }, _ = (C) => {
    const k = C.target.value;
    o === "blur" && n.onChange && n.onChange(k), c(k);
  }, h = () => {
    n.onChange && n.onChange(""), c("");
  }, $ = (C) => {
    C.keyCode === 13 && n.onEnter && n.onEnter(l()), n.onKeyUp && n.onKeyUp(C);
  }, v = (C) => {
    C.keyCode === 13 && (c(C.target.value), n.onChange && n.onChange(C.target.value)), n.onKeyDown && n.onKeyDown(C);
  };
  return (() => {
    const C = wa();
    return g(C, (() => {
      const k = Z(() => !!n.prefix);
      return () => k() ? (() => {
        const w = ba();
        return g(w, () => n.prefix), N((T) => H(w, n.prefixStyle, T)), w;
      })() : null;
    })(), null), g(C, (() => {
      const k = Z(() => !!n.prepend);
      return () => k() ? (() => {
        const w = xa();
        return g(w, () => n.prepend), w;
      })() : null;
    })(), null), g(C, f(B, {
      get when() {
        return n.type === "textarea";
      },
      get fallback() {
        return (() => {
          const k = Ca(), w = e.ref;
          return typeof w == "function" ? j(w, k) : e.ref = k, Ce(k, ie(r, {
            get value() {
              return l();
            },
            get autocomplete() {
              return e.autocomplete || "off";
            },
            onChange: y,
            onInput: d,
            onBlur: _,
            get disabled() {
              return n.disabled;
            },
            style: i,
            onKeyDown: v,
            onKeyUp: $,
            get type() {
              return n.type;
            }
          }), !1, !1), k;
        })();
      },
      get children() {
        const k = _a(), w = e.ref;
        return typeof w == "function" ? j(w, k) : e.ref = k, Ce(k, ie(r, {
          get value() {
            return l();
          },
          spellcheck: !1,
          get autocomplete() {
            return e.autocomplete || "off";
          },
          wrap: "soft",
          onChange: y,
          onInput: d,
          onBlur: _,
          get disabled() {
            return n.disabled;
          },
          style: i,
          onKeyDown: v,
          onKeyUp: $
        }), !1, !1), k;
      }
    }), null), g(C, (() => {
      const k = Z(() => !!(n.clearable && l()));
      return () => k() ? f(K, {
        class: "cm-input-clear",
        name: "x-circle",
        onClick: h
      }) : null;
    })(), null), g(C, (() => {
      const k = Z(() => !!(n.suffix || e.wordCount && e.maxLength));
      return () => k() ? (() => {
        const w = ka();
        return g(w, f(B, {
          get when() {
            return e.wordCount && e.maxLength;
          },
          get fallback() {
            return n.suffix;
          },
          get children() {
            return f(ki, {
              get total() {
                return e.maxLength;
              },
              get value() {
                return a();
              }
            });
          }
        })), N((T) => H(w, n.suffixStyle, T)), w;
      })() : null;
    })(), null), g(C, (() => {
      const k = Z(() => !!n.append);
      return () => k() ? (() => {
        const w = La();
        return g(w, () => n.append), w;
      })() : null;
    })(), null), N((k) => {
      const w = t(), T = n.style;
      return k._v$ = V(C, w, k._v$), k._v$2 = H(C, T, k._v$2), k;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), C;
  })();
}
const Sa = /* @__PURE__ */ b('<div class="cm-field-prepend">'), Ea = /* @__PURE__ */ b('<div class="cm-field-selection">'), Ma = /* @__PURE__ */ b('<div class="cm-field-text">'), Da = /* @__PURE__ */ b('<div tabindex="1"><input type="hidden"><span>A</span><span class="cm-field-cert">'), Fa = /* @__PURE__ */ b('<span class="cm-field-placeholder">');
function nt(e) {
  const [t, n] = e.query ?? [() => "", () => {
  }];
  let r, i;
  const l = (u) => {
    u.stopImmediatePropagation && u.stopImmediatePropagation(), u.preventDefault && u.preventDefault(), u.stopPropagation && u.stopPropagation(), e.onClear && e.onClear(u);
  }, c = () => ({
    "cm-field-value": !0,
    "cm-field-clearable": e.clearable && !!e.text && !!e.text.length,
    "cm-field-disabled": e.disabled,
    [`cm-field-value-${e.size}`]: !!e.size
  }), a = () => (Promise.resolve().then(() => {
    e.filter && r && r.focus();
  }), e.multi && e.text && e.text instanceof Array ? e.text.map((u, m) => ({
    id: u.id,
    title: u.title
  })) : []), s = () => (e.filter && t(), r.style.width = "10px", r.style.width = r.scrollWidth + "px", Promise.resolve().then(() => {
    r.style.width = "10px";
    const u = Math.floor(i?.getBoundingClientRect().width || 10);
    r.style.width = r.scrollWidth + "px", r.parentElement.style.width = Math.min(u - 20, r.scrollWidth) + "px";
  }), {
    width: "10px"
    // width: str !== undefined ? str.length * 12 + 20 + 'px' : '100%',
  }), o = () => {
    e.filter && r && r.focus();
  }, d = (u) => {
    const m = t();
    (u.key === "Backspace" || u.code === "Backspace" || u.key === "Delete" || u.code === "Delete") && m.length === 0 && e.onDeleteLastValue && e.onDeleteLastValue();
  };
  return (() => {
    const u = Da(), m = u.firstChild, y = m.nextSibling, _ = y.nextSibling;
    return u.$$click = o, y.style.setProperty("width", "0px"), y.style.setProperty("font-size", "12px"), y.style.setProperty("visibility", "hidden"), y.style.setProperty("line-height", "initial"), g(u, f(B, {
      get when() {
        return e.prepend;
      },
      get children() {
        const h = Sa();
        return g(h, () => e.prepend), h;
      }
    }), _), g(u, f(Te, {
      get children() {
        return [f(p, {
          get when() {
            return e.multi;
          },
          get children() {
            const h = Ea(), $ = i;
            return typeof $ == "function" ? j($, h) : i = h, g(h, f(Fc, {
              get data() {
                return a();
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
                return Z(() => !!e.filter)() ? f(ke, {
                  ref(v) {
                    const C = r;
                    typeof C == "function" ? C(v) : r = v;
                  },
                  get style() {
                    return s();
                  },
                  notCreateFiled: !0,
                  class: "cm-select-filter",
                  trigger: "input",
                  get size() {
                    return e.size;
                  },
                  value: [t, n],
                  onKeyDown: d
                }) : null;
              }
            })), h;
          }
        }), f(p, {
          get when() {
            return !e.multi;
          },
          get children() {
            const h = Ma(), $ = i;
            return typeof $ == "function" ? j($, h) : i = h, g(h, f(B, {
              get when() {
                return !e.filter;
              },
              get children() {
                return Z(() => !!e.text)() ? e.text : (() => {
                  const v = Fa();
                  return g(v, () => e.placeholder ?? ""), v;
                })();
              }
            }), null), g(h, f(B, {
              get when() {
                return e.filter;
              },
              get children() {
                return f(ke, {
                  ref(v) {
                    const C = r;
                    typeof C == "function" ? C(v) : r = v;
                  },
                  get style() {
                    return s();
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
            }), null), h;
          }
        })];
      }
    }), _), g(_, () => e.icon), g(u, f(B, {
      get when() {
        return e.clearable && e.text && e.text !== "";
      },
      get children() {
        return f(K, {
          name: "x-circle",
          class: "cm-field-clear",
          onClick: l
        });
      }
    }), null), N((h) => V(u, c(), h)), u;
  })();
}
Q(["click"]);
const Ta = /* @__PURE__ */ b("<div>"), Ra = /* @__PURE__ */ b('<div class="cm-select-options"><ul class="cm-select-option-list">'), Aa = /* @__PURE__ */ b('<div class="cm-select-options-wrap">');
function za(e) {
  const [t, n] = U(!1), r = e.align ?? "bottomLeft", [i, l] = ve(e, ""), [c, a] = U(""), s = () => q(e, "cm-select", "cm-autocomplete", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && i().length !== 0,
    "cm-select-open": t(),
    "cm-select-with-prefix": e.prefix
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let o;
  const d = "label", u = e.valueField || "value";
  let m = !1, y = [];
  e.data && (y = e.data.map((w) => typeof w == "object" ? (w._show = !0, w) : {
    [u]: w,
    label: w,
    _show: !0
  }));
  const [_, h] = se({
    list: y
  });
  X(() => {
    const w = i();
    h("list", (T) => T, G((T) => {
      T._checked = w === T[u];
    }));
  }), X(() => {
    e.data && (y = e.data.map((w) => typeof w == "object" ? (w._show = !0, w) : {
      [u]: w,
      label: w,
      _show: !0
    }), h("list", () => [...y]), y.length && n(!0));
  }), X(() => {
    const w = c();
    m || w.length && e.onSearch && e.onSearch(w);
  });
  const $ = (w, T) => {
    l(w), m = !0, a(T[d]), queueMicrotask(() => {
      m = !1;
    }), e.onChange && e.onChange(w, T), n(!1);
  }, v = () => {
    const w = i();
    let T;
    return Me(() => {
      T = _.list.find((I) => I[u] === w);
    }), T ? T[d] : e.emptyOption ? e.emptyOption : "";
  }, C = (w) => {
    w.preventDefault && w.preventDefault(), w.stopPropagation && w.stopPropagation(), e.onChange && e.onChange(""), l("");
  }, k = () => !!(_.list && _.list.length);
  return (() => {
    const w = Ta(), T = o;
    return typeof T == "function" ? j(T, w) : o = w, g(w, f(Oe, {
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
      onBeforeDrop: k,
      get menu() {
        return (() => {
          const I = Aa();
          return g(I, f(ni, {
            get open() {
              return t();
            },
            get children() {
              const M = Ra(), S = M.firstChild;
              return g(S, f(te, {
                get each() {
                  return _.list;
                },
                children: (A) => f(xc, {
                  get renderOption() {
                    return e.renderOption;
                  },
                  get visible() {
                    return A._show;
                  },
                  get disabled() {
                    return A.disabled;
                  },
                  data: A,
                  get checked() {
                    return A._checked;
                  },
                  valueField: u,
                  textField: d,
                  onClick: $
                })
              })), M;
            }
          })), I;
        })();
      },
      get children() {
        return f(nt, {
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
          onClear: C,
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
            return f(K, {
              name: "chevron-down",
              class: "cm-select-cert"
            });
          }
        });
      }
    })), N((I) => {
      const M = s(), S = e.style;
      return I._v$ = V(w, M, I._v$), I._v$2 = H(w, S, I._v$2), I;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), w;
  })();
}
const Pa = /* @__PURE__ */ b('<div><span class="cm-cascader-text">');
function Ia(e) {
  const [t, n] = e.store, r = () => t.selectedValue.includes(e.data.value), i = () => ({
    "cm-cascader-item": !0,
    "cm-cascader-item-active": r(),
    "cm-cascader-item-disabled": e.data.disabled
  }), l = Ya(), [c, a] = U(!1), s = async () => {
    if (!e.data.disabled) {
      if (e.data.loading && l && l.loadData)
        try {
          a(!0);
          const m = await l.loadData(e.data);
          l && l.addChildren(e.data, m), e.data.loading = !1;
        } catch {
        } finally {
          a(!1);
        }
      e.trigger === "click" && o(), l && l.onSelect(e.data);
    }
  }, o = () => {
    const m = [];
    for (let y = 0; y < e.level; y++)
      m.push(t.selectedValue[y]);
    m[e.level] = e.data.value, n("selectedValue", m);
  };
  let d = null;
  const u = () => {
    e.data.disabled || (d && clearTimeout(d), d = setTimeout(() => {
      o();
    }, 100));
  };
  return (() => {
    const m = Pa(), y = m.firstChild;
    return ye(m, "mouseenter", e.trigger === "hover" ? u : void 0), m.$$click = s, g(m, () => e.data.icon, y), g(y, () => e.data.title), g(m, f(B, {
      get when() {
        return e.data.children && e.data.children.length || e.data.loading;
      },
      get children() {
        return f(B, {
          get when() {
            return c();
          },
          get fallback() {
            return f(K, {
              name: "chevron-right",
              class: "cm-menu-submenu-cert"
            });
          },
          get children() {
            return f(Je, {
              color: "#1890ff"
            });
          }
        });
      }
    }), null), N((_) => V(m, i(), _)), m;
  })();
}
Q(["click"]);
const Na = /* @__PURE__ */ b('<div class="cm-cascader-list">');
function Oa(e) {
  const [t, n] = e.store, r = () => e.data;
  return (() => {
    const i = Na();
    return g(i, f(te, {
      get each() {
        return r();
      },
      children: (l) => f(Ia, {
        get trigger() {
          return e.trigger;
        },
        get data() {
          return e.mapData[l];
        },
        store: [t, n],
        get level() {
          return e.level;
        }
      })
    })), i;
  })();
}
const Va = /* @__PURE__ */ b('<div tabindex="0">'), Ba = /* @__PURE__ */ b('<div class="cm-cascader-wrap">'), Li = me();
function Si(e, t) {
  e && e.length && e.forEach((n) => {
    t.push(n), n.children && Si(n.children, t);
  });
}
function Ei(e, t) {
  e && e.length && e.forEach((n) => {
    t[n.value] = n, n.children && Ei(n.children, t);
  });
}
function Ha(e) {
  const [t, n] = we(e, "visible", !1), [r, i] = ve(e, []), l = e.trigger ?? "click", c = [], a = {}, s = JSON.parse(JSON.stringify(e.data));
  Si(e.data, c), Ei(s, a);
  const [o, d] = se({
    selectedValue: r() || [],
    columns: []
  }), u = e.seperator ?? "/", m = e.align ?? "bottomLeft", y = () => q(e, "cm-cascader", {
    "cm-cascader-disabled": e.disabled,
    "cm-cascader-clearable": !e.disabled && e.clearable && r() && r().length,
    [`cm-cascader-${e.size}`]: e.size
  }), _ = {}, h = e.data.map((w) => w.value);
  X(() => {
    const w = r() || [];
    d("selectedValue", [...w]);
  }), X(() => {
    const w = o.selectedValue, T = [h];
    w && w.length && w.forEach((I) => {
      if (_[I])
        T.push(_[I]);
      else {
        const M = a[I];
        if (M && M.children) {
          const S = M.children.map((A) => A.value);
          _[I] = S, T.push(S);
        }
      }
    }), d("columns", T);
  });
  const $ = () => {
    const w = r(), T = w ? w.map((I) => a[I].title) : [];
    return T.length ? T.join(u) : "";
  }, v = (w) => {
    if (!(w.children && w.children.length) || e.changeOnSelect) {
      e.onSelect && e.onSelect(w);
      const I = o.selectedValue.map((M) => M);
      i(I), e.onChange && e.onChange(I);
    }
    w.children && w.children.length || n(!1);
  }, C = (w, T) => {
    w.loading = !1, w.children = T, T.forEach((I) => {
      a[I.value] = I;
    });
  }, k = () => {
    i([]), e.onChange && e.onChange([]);
  };
  return f(Li.Provider, {
    get value() {
      return {
        onSelect: v,
        loadData: e.loadData,
        addChildren: C
      };
    },
    get children() {
      const w = Va();
      return g(w, f(Oe, {
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
            const T = Ba();
            return g(T, f(te, {
              get each() {
                return o.columns;
              },
              children: (I, M) => f(Oa, {
                data: I,
                trigger: l,
                store: [o, d],
                mapData: a,
                get level() {
                  return M();
                }
              })
            })), T;
          })();
        },
        get children() {
          return f(nt, {
            get prepend() {
              return e.prepend;
            },
            get text() {
              return $();
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
      })), N((T) => V(w, y(), T)), w;
    }
  });
}
const Ya = () => ge(Li), qa = /* @__PURE__ */ b('<div><span>A</span><input><span class="cm-checkbox-outter">&nbsp;<span class="cm-checkbox-inner"></span></span><label>');
function Be(e) {
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
    const i = qa(), l = i.firstChild, c = l.nextSibling, a = c.nextSibling, s = a.nextSibling;
    return i.$$click = r, l.style.setProperty("width", "0px"), l.style.setProperty("font-size", "12px"), l.style.setProperty("visibility", "hidden"), c.addEventListener("change", () => {
    }), J(c, "type", t), c.style.setProperty("display", "none"), a.style.setProperty("position", "relative"), g(s, () => e.label), N((o) => {
      const d = n(), u = e.name;
      return o._v$ = V(i, d, o._v$), u !== o._v$2 && J(c, "name", o._v$2 = u), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), N(() => c.value = e.value), i;
  })();
}
Q(["click"]);
function Wa(e) {
  const [t, n] = ve(e, "checked", !1), [r, i] = oe(e, ["checked", "onChange"]);
  return f(Be, ie({
    get checked() {
      return t();
    },
    onChange: (c, a) => {
      e.disabled || (n(c), r.onChange && r.onChange(c, a));
    }
  }, i));
}
const Ua = /* @__PURE__ */ b("<div>"), Oh = me();
function ja(e) {
  const t = () => q(e, "cm-checkbox-group", {
    "cm-checkbox-group-stack": e.block
  }), [n, r] = ve(e, []), i = (s, o) => {
    if (e.disabled)
      return;
    let d = n() || [];
    if (s)
      d.includes(o) || (d = d.concat(o));
    else {
      const m = d.indexOf(o);
      m > -1 && d.splice(m, 1);
    }
    const u = JSON.parse(JSON.stringify(d));
    r(u), e.onChange && e.onChange(u);
  }, l = e.textField || "label", c = e.valueField || "value", a = {};
  return e.data && e.data.forEach((s) => {
    const d = (n() || []).includes(s[c]);
    a[s[c]] = U(d);
  }), X(() => {
    const s = n() ?? [];
    for (let o = 0; o < e.data.length; o++) {
      const d = e.data[o], u = s.includes(d[c]);
      a[d[c]] && a[d[c]][1](u);
    }
  }), (() => {
    const s = Ua();
    return g(s, f(te, {
      get each() {
        return e.data;
      },
      children: (o) => f(Be, {
        inner: !0,
        get disabled() {
          return e.disabled || o.disabled;
        },
        get value() {
          return o[c];
        },
        get checked() {
          return a[o[c]][0]();
        },
        get label() {
          return o[l];
        },
        onChange: i
      })
    })), N((o) => {
      const d = t(), u = e.style;
      return o._v$ = V(s, d, o._v$), o._v$2 = H(s, u, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
const Xa = /* @__PURE__ */ b('<div class="cm-select-color">'), Ka = /* @__PURE__ */ b('<div class="cm-color-picker-value" tabindex="0"><span>A</span><input type="hidden"><div class="cm-select-color-wrap">'), Ga = /* @__PURE__ */ b('<div class="cm-select-color cm-select-color-empty">');
function Za(e) {
  const [t, n] = U({});
  return X(() => {
    const r = e.open ? {
      background: `rgba(${e.currentValue.rgba.r},${e.currentValue.rgba.g},${e.currentValue.rgba.b},${e.currentValue.rgba.a})`
    } : {
      background: e.value
    };
    n(r);
  }), (() => {
    const r = Ka(), i = r.firstChild, l = i.nextSibling, c = l.nextSibling;
    return i.style.setProperty("width", "0px"), i.style.setProperty("font-size", "12px"), i.style.setProperty("visibility", "hidden"), i.style.setProperty("line-height", "initial"), g(c, f(B, {
      get when() {
        return t().background;
      },
      get fallback() {
        return (() => {
          const a = Ga();
          return g(a, f(K, {
            name: "x",
            size: 12
          })), a;
        })();
      },
      get children() {
        const a = Xa();
        return N((s) => H(a, t(), s)), a;
      }
    })), N(() => J(l, "name", e.name)), N(() => l.value = e.value), r;
  })();
}
function We(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function Nt(e, t) {
  const n = Xi(e), {
    _a: r
  } = n;
  return r == null && n.setAlpha(t || 1), n;
}
function Ja(e, t) {
  const n = t && t.a;
  if (t) {
    if (t.hsl)
      return Nt(t.hsl, n);
    if (t.hex && t.hex.length > 0)
      return Nt(t.hex, n);
  }
  return Nt(t, n);
}
function Ot(e, t) {
  const n = e === "" ? "#2d8cf0" : e, r = Ja(e, n), i = r.toHsl(), l = r.toHsv();
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
function tn(e) {
  const {
    r: t,
    g: n,
    b: r,
    a: i
  } = e;
  return `rgba(${[t, n, r, i].join(",")})`;
}
const Qa = /* @__PURE__ */ b('<div class="cm-saturation"><div class="cm-saturation-white"></div><div class="cm-saturation-black"></div><div class="cm-saturation-pointer"><div class="cm-saturation-circle">');
function pa(e) {
  let t;
  const n = (a) => {
    if (!le) {
      if (typeof a.button == "number" && a.button !== 0)
        return !1;
      i(a), document.addEventListener("mousemove", i, !1), document.addEventListener("mouseup", r, !1);
    }
  }, r = (a) => {
    le || (i(a), document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", r));
  };
  ce(() => {
    le || (document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", r));
  });
  const i = (a) => {
    a.preventDefault(), a.stopPropagation();
    const {
      clientWidth: s,
      clientHeight: o
    } = t, d = t.getBoundingClientRect().left + window.screenX, u = t.getBoundingClientRect().top + window.screenY, m = We(a.clientX - d, 0, s), y = We(a.clientY - u, 0, o), _ = m / s, h = We(1 - y / o, 0, 1);
    e.onChange && e.onChange({
      h: e.value.hsv.h,
      s: _,
      v: h,
      a: e.value.hsv.a,
      source: "hsva"
    });
  }, l = () => ({
    background: `hsl(${e.value.hsv.h}, 100%, 50%)`
  }), c = () => ({
    top: `${-(e.value.hsv.v * 100) + 1 + 100}%`,
    left: `${e.value.hsv.s * 100}%`
  });
  return (() => {
    const a = Qa(), s = a.firstChild, o = s.nextSibling, d = o.nextSibling, u = t;
    return typeof u == "function" ? j(u, a) : t = a, a.$$mousedown = n, N((m) => {
      const y = l(), _ = c();
      return m._v$ = H(a, y, m._v$), m._v$2 = H(d, _, m._v$2), m;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
Q(["mousedown"]);
const es = /* @__PURE__ */ b('<div class="cm-color-picker-hue"><div class="cm-color-picker-hue-wrap"><div class="cm-color-picker-hue-pointer">');
function ts(e) {
  const [t, n] = U(We(e.value.hsl.h * 100 / 360, 0, 100));
  let r;
  const i = (s) => {
    if (!le) {
      if (typeof s.button == "number" && s.button !== 0)
        return !1;
      c(s), document.addEventListener("mousemove", c, !1), document.addEventListener("mouseup", l, !1);
    }
  }, l = (s) => {
    le || (c(s), document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", l));
  };
  ce(() => {
    le || (document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", l));
  });
  const c = (s) => {
    s.preventDefault(), s.stopPropagation();
    const {
      clientWidth: o
    } = r, d = r.getBoundingClientRect().left + window.screenX, u = s.clientX - d;
    if (u < 0) {
      a(0);
      return;
    }
    if (u > o) {
      a(100);
      return;
    }
    a(u * 100 / o);
  }, a = (s) => {
    n(We(s, 0, 100));
    const {
      h: o,
      s: d,
      l: u,
      a: m
    } = e.value.hsl, y = We(s / 100 * 360, 0, 360);
    o !== y && e.onChange && e.onChange({
      h: y,
      s: d,
      l: u,
      a: m,
      source: "hsl"
    });
  };
  return X(() => {
    n(We(e.value.hsl.h * 100 / 360, 0, 100));
  }), (() => {
    const s = es(), o = s.firstChild, d = o.firstChild, u = r;
    return typeof u == "function" ? j(u, s) : r = s, o.$$mousedown = i, d.style.setProperty("top", "0"), N(() => `${t()}%` != null ? d.style.setProperty("left", `${t()}%`) : d.style.removeProperty("left")), s;
  })();
}
Q(["mousedown"]);
const ns = /* @__PURE__ */ b('<div class="cm-radio-group-thumb">'), is = /* @__PURE__ */ b("<div>");
function rs(e) {
  const t = () => q(e, "cm-radio-group", {
    "cm-radio-group-stack": e.block,
    "cm-radio-group-stick": e.stick
  }), [n, r] = ve(e, ""), [i, l] = U({});
  let c;
  const a = (u, m) => {
    e.disabled || (r(m), e.onChange && e.onChange(m));
  }, s = e.textField ?? "label", o = e.valueField ?? "value", d = (u) => n() === u[o];
  return X(() => {
    const u = n() ?? "";
    let m = -1;
    for (let w = 0; w < e.data.length; w++) {
      const T = e.data[w];
      u === T[o] && (m = w);
    }
    const _ = c.querySelectorAll(".cm-radio")[m];
    if (!_)
      return;
    const h = _.getBoundingClientRect(), $ = c.getBoundingClientRect(), v = h.left - $.left, k = {
      width: `${h.width}px`,
      left: `${v}px`
    };
    l(k);
  }), (() => {
    const u = is(), m = c;
    return typeof m == "function" ? j(m, u) : c = u, g(u, f(B, {
      get when() {
        return e.stick;
      },
      get children() {
        const y = ns();
        return N((_) => H(y, i(), _)), y;
      }
    }), null), g(u, f(te, {
      get each() {
        return e.data;
      },
      children: (y) => f(Be, {
        get disabled() {
          return e.disabled || y.disabled;
        },
        class: "cm-radio",
        get type() {
          return e.type || "radio";
        },
        inner: !0,
        get value() {
          return y[o];
        },
        get checked() {
          return d(y);
        },
        get label() {
          return y[s];
        },
        onChange: a
      })
    }), null), N((y) => {
      const _ = t(), h = e.style;
      return y._v$ = V(u, _, y._v$), y._v$2 = H(u, h, y._v$2), y;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), u;
  })();
}
const ls = /* @__PURE__ */ b('<div tabindex="0"><span>A</span><span class="cm-switch-inner-placeholder"><span><span class="cm-switch-inner-button-placeholder"></span></span><span><span class="cm-switch-inner-button-placeholder"></span></span></span><span class="cm-switch-inner"><span class="cm-switch-label cm-switch-label-left"></span><span class="cm-switch-label cm-switch-label-right"></span></span><input type="hidden">'), cs = /* @__PURE__ */ b('<span class="cm-switch-inner-icon">');
function as(e) {
  const t = () => q(e, "cm-switch", {
    [`cm-switch-${e.size}`]: e.size,
    "cm-switch-disabled": e.disabled,
    "cm-switch-checked": n(),
    "cm-switch-loading": e.loading,
    "cm-switch-round": e.round ?? !0
  }), [n, r] = ve(e, "checked", !1), i = () => de(e, {
    "--cm-switch-default-color": e.colors && e.colors[0],
    "--cm-switch-active-color": e.colors && e.colors[1]
  }), l = e.labels || [], c = e.values || [!0, !1], a = async () => {
    if (e.disabled || e.loading)
      return;
    let o = !0;
    if (e.onBeforeChange && (o = await e.onBeforeChange(n())), o) {
      const u = n() ? c[1] : c[0];
      e.onChange && e.onChange(u), r(u);
    }
  }, s = () => n() ? e.icon && e.icon instanceof Array ? e.icon[1] : e.icon : e.icon && e.icon instanceof Array ? e.icon[0] : e.icon;
  return (() => {
    const o = ls(), d = o.firstChild, u = d.nextSibling, m = u.firstChild;
    m.firstChild;
    const y = m.nextSibling;
    y.firstChild;
    const _ = u.nextSibling, h = _.firstChild, $ = h.nextSibling, v = _.nextSibling;
    return o.$$click = a, d.style.setProperty("width", "0px"), d.style.setProperty("font-size", "12px"), d.style.setProperty("visibility", "hidden"), g(m, () => l[0], null), g(y, () => l[1], null), g(_, (() => {
      const C = Z(() => !!s());
      return () => C() ? (() => {
        const k = cs();
        return g(k, s), k;
      })() : null;
    })(), h), g(h, () => l[0]), g($, () => l[1]), g(o, (() => {
      const C = Z(() => !!e.loading);
      return () => C() ? f(Je, {}) : null;
    })(), v), N((C) => {
      const k = t(), w = i(), T = e.name;
      return C._v$ = V(o, k, C._v$), C._v$2 = H(o, w, C._v$2), T !== C._v$3 && J(v, "name", C._v$3 = T), C;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), N(() => v.value = n() ? c[0] : c[1]), o;
  })();
}
Q(["click"]);
function ss(e) {
  const [t, n] = oe(e, ["enterButton", "onEnter", "onSearch"]), r = t.enterButton ? null : f(K, {
    name: "search",
    style: {
      cursor: "pointer"
    },
    get onClick() {
      return t.onSearch;
    }
  });
  let i = null;
  return t.enterButton && (i = typeof t.enterButton == "string" ? t.enterButton : f(K, {
    name: "search",
    get onClick() {
      return t.onSearch;
    }
  })), f(ke, ie({
    get onEnter() {
      return t.onEnter;
    },
    suffix: r,
    append: i
  }, n));
}
const os = /* @__PURE__ */ b('<span class="cm-spinner-plus">'), ds = /* @__PURE__ */ b('<span class="cm-spinner-subs">');
function us(e) {
  const t = () => q(e, "cm-spinner", {
    [`cm-spinner-${e.size}`]: e.size,
    "cm-spinner-disabled": e.disabled
  }), [n, r] = ve(e, Math.max(0, e.min ?? 0)), i = (m, y) => {
    m = m.replace(/[^0-9\.]/g, ""), y.target.value = m;
  }, l = (m) => {
    m.keyCode === 38 && o(), m.keyCode === 40 && d();
  }, c = e.min || 0, a = e.step || 1, s = (m) => {
    let y = m;
    e.max !== void 0 && (y = Math.min(y, e.max)), c !== void 0 && (y = Math.max(y, c)), Promise.resolve().then(() => {
      r(y);
    }), e.onChange && e.onChange(y);
  }, o = () => {
    if (e.disabled)
      return;
    let m = u(n(), a);
    if (e.loop && e.max !== void 0 && c !== void 0 && m > e.max) {
      const y = m - e.max;
      m = c + y - 1;
    }
    e.max !== void 0 && (m = Math.min(e.max, m)), r(m), e.onChange && e.onChange(m), e.onPlus && e.onPlus(m, a);
  }, d = () => {
    if (e.disabled)
      return;
    let m = u(n(), -a);
    if (e.loop && e.max !== void 0 && c !== void 0 && m < c) {
      const y = m - c;
      m = e.max + y + 1;
    }
    c !== void 0 && (m = Math.max(c, m)), r(m), e.onChange && e.onChange(m), e.onSub && e.onSub(m, a);
  };
  function u(m, y) {
    let _, h;
    try {
      _ = m.toString().split(".")[1].length;
    } catch {
      _ = 0;
    }
    try {
      h = y.toString().split(".")[1].length;
    } catch {
      h = 0;
    }
    const $ = Math.pow(10, Math.max(_, h));
    return (m * $ + y * $) / $;
  }
  return f(ke, {
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
    notCreateFiled: !0,
    value: [n, r],
    onChange: s,
    onKeyDown: l,
    get append() {
      return [(() => {
        const m = os();
        return m.$$click = o, g(m, f(K, {
          name: "chevron-up",
          size: 12
        })), m;
      })(), (() => {
        const m = ds();
        return m.$$click = d, g(m, f(K, {
          name: "chevron-down",
          size: 12
        })), m;
      })()];
    }
  });
}
Q(["click"]);
const fs = /* @__PURE__ */ b("<div><span>"), hs = /* @__PURE__ */ b('<span class="cm-rate-star-content">');
function ms(e) {
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
    const i = fs(), l = i.firstChild;
    return ye(l, "click", e.onClickStar?.bind(null, e.index + 1), !0), ye(l, "mouseenter", e.onMouseEnter?.bind(null, e.index + 1)), g(l, () => e.icon), g(i, (() => {
      const c = Z(() => !!e.allowHalf);
      return () => c() ? (() => {
        const a = hs();
        return ye(a, "click", e.onClickHalfStar?.bind(null, e.index + 0.5), !0), ye(a, "mouseenter", e.onMouseEnterHalf?.bind(null, e.index + 0.5)), g(a, () => e.icon), a;
      })() : null;
    })(), null), N((c) => V(i, r(), c)), i;
  })();
}
Q(["click"]);
const gs = /* @__PURE__ */ b("<div><span>");
function vs(e) {
  const t = () => q(e, "cm-rate", {
    "cm-rate-disabled": e.disabled
  });
  if (!e.icon)
    return console.warn("need icon property"), null;
  const [n, r] = ve(e, 0), [i, l] = U(n()), c = e.allowHalf || !1, a = (_) => {
    l(_);
  }, s = (_, h) => {
    c && (h.preventDefault(), h.stopPropagation(), l(_));
  }, o = () => {
    l(n());
  }, d = (_) => {
    r(_), e.onChange && e.onChange(_);
  }, u = (_, h) => {
    h.preventDefault(), h.stopPropagation(), c && (r(_), e.onChange && e.onChange(_));
  }, m = e.count || 5, y = [];
  for (let _ = 0; _ < m; _++)
    y.push({
      id: _,
      value: _
    });
  return (() => {
    const _ = gs(), h = _.firstChild;
    return _.addEventListener("mouseleave", o), g(_, f(te, {
      each: y,
      children: ($, v) => f(ms, {
        get index() {
          return v();
        },
        onMouseEnterHalf: s,
        onClickHalfStar: u,
        onMouseEnter: a,
        onClickStar: d,
        get icon() {
          return e.icon;
        },
        allowHalf: c,
        current: [i, l]
      })
    }), h), g(h, () => e.children), N(($) => {
      const v = e.style, C = t();
      return $._v$ = H(_, v, $._v$), $._v$2 = V(_, C, $._v$2), $;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), _;
  })();
}
const $s = /* @__PURE__ */ b("<li>");
function ys(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-group-wrap": e.data.group,
    "cm-select-option-active": e.checked,
    "cm-select-option-disabled": e.data.disabled
  }), n = () => {
    e.disabled || e.onClick && e.onClick(r);
  }, r = e.data[e.valueField];
  return f(B, {
    get when() {
      return e.visible;
    },
    fallback: null,
    get children() {
      const i = $s();
      i.$$click = n;
      const l = e.ref;
      return typeof l == "function" ? j(l, i) : e.ref = i, g(i, (() => {
        const c = Z(() => !!e.renderOption);
        return () => c() ? e.renderOption(e.data) : e.data[e.textField];
      })()), N((c) => {
        const a = t(), s = e.style;
        return c._v$ = V(i, a, c._v$), c._v$2 = H(i, s, c._v$2), c;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), i;
    }
  });
}
Q(["click"]);
const _s = /* @__PURE__ */ b("<li>");
function ws(e) {
  const t = () => ({
    "cm-select-option": !0,
    "cm-select-option-active": e.checked
  }), n = e.data.value;
  return (() => {
    const r = _s();
    return r.$$click = () => e.onClick && e.onClick(n), g(r, () => e.data.label), N((i) => {
      const l = t(), c = e.style;
      return i._v$ = V(r, l, i._v$), i._v$2 = H(r, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
Q(["click"]);
function Mi(e) {
  const t = e.scrollElement;
  e.bodyElement;
  const [n, r] = U(0), [i, l] = U({
    value: 0
  });
  let c = !1;
  const a = /* @__PURE__ */ new WeakMap(), s = (F) => {
    const z = e.items[F];
    return z && a.has(z) ? a.get(z) : null;
  }, o = (F) => s(F)?.offset || 0, d = (F, z) => {
    const E = e.items[F];
    if (E)
      if (a.has(E)) {
        const x = a.get(E);
        x.size = z.size, x.offset = z.offset;
      } else
        a.set(E, z);
  }, u = () => {
    const F = e.items.length;
    for (let z = 0; z < F; z++) {
      const E = s(z - 1), x = z === 0 ? 0 : E ? E.offset + E.size : 0;
      if (!a.has(e.items[z]))
        d(z, {
          size: e.itemEstimatedSize,
          offset: x
        });
      else {
        const L = s(z);
        d(z, {
          size: L.size,
          offset: x
        });
      }
    }
  };
  u();
  const m = ({
    low: F,
    high: z,
    scrollOffset: E
  }) => {
    let x = 0, L = 0;
    for (; F <= z; ) {
      if (x = F + Math.floor((z - F) / 2), L = o(x), L === E)
        return x;
      L < E ? F = x + 1 : z = x - 1;
    }
    return F > 0 ? F - 1 : 0;
  }, y = (F) => {
    const z = e.items.length;
    let E = 1, x = 0;
    for (; x < z && o(x) < F; )
      x += E, E *= 2;
    return m({
      low: Math.floor(x / 2),
      high: Math.min(x, z - 1),
      scrollOffset: F
    });
  }, _ = (F) => y(F), h = (F) => {
    const z = e.items.length;
    if (z === 0)
      return 0;
    const E = s(F), x = (E?.offset || 0) + (e.scrollElement.clientHeight ?? 0);
    let L = (E?.offset || 0) + (E?.size || 0), R = F;
    for (; L <= x && R < z - 1; ) {
      R++;
      const D = s(R);
      D && (L += D.size);
    }
    return R;
  }, $ = (F) => {
    const z = e.items.length;
    if (z === 0)
      return [-1, -1];
    const E = _(F), x = h(E);
    return [Math.max(0, E - (e.overscan || 3)), Math.min(z - 1, x + (e.overscan || 3)), E, x];
  }, v = () => {
    const F = e.items.length;
    let z = 0;
    for (let E = 0; E < F; E++)
      z += s(E)?.size || 0;
    return z;
  }, [C, k] = U(v());
  pe(() => {
    if (!e.scrollElement)
      return;
    let F = e.height;
    e.maxHeight && (F = C() > e.maxHeight ? e.maxHeight : C()), e.scrollElement.style.height = F + "px", e.height || e.maxHeight || Promise.resolve().then(() => {
      F = t.parentElement?.clientHeight;
      const z = t.parentElement?.style.height || "", E = t.parentElement?.style.maxHeight || "", x = parseInt(z) || parseInt(E);
      x && (e.scrollElement.style.height = x + "px");
    });
  }), X(() => {
    e.contentElement.style.height = C() + "px", setTimeout(() => {
      c = !1;
    }, 300);
  }), X(() => {
    e.bodyElement.style.transform = `translateY(${s(i().value)?.offset}px)`;
  });
  const w = (F) => {
    const {
      scrollTop: z
    } = F.target;
    if (c) {
      z !== n() && (F.target.scrollTop = n());
      return;
    }
    e.onScroll && e.onScroll(z), r(z);
  }, T = (F, z) => {
    const E = F.getBoundingClientRect(), x = s(z);
    if (E.height === 0 || x && x.size === E.height)
      return;
    x && (x.size = E.height);
    const L = e.items.length;
    for (let R = z + 1; R < L; R++) {
      const D = s(R), P = s(R - 1);
      D && (D.offset = P ? P.offset + P.size : 0);
    }
    k(v());
  };
  X(() => {
    c = !0, e.items, u(), k(v()), Me(() => {
      r(n() + 1e-7);
    });
  }), e.ref && e.ref({
    update: () => {
      u(), k(v());
    },
    setScrollOffset: r,
    getScrollElement: () => e.scrollElement
  });
  const [I, M] = se([]);
  let S = [];
  dt(() => {
    const [F, z] = $(Math.ceil(n()));
    l({
      value: F
    });
    const E = [], x = [];
    if (F >= 0)
      for (let L = F; L <= z; L++) {
        const R = e.items[L];
        E.push(R), x.push(L);
      }
    M(E), S = x;
  });
  const A = async (F) => {
    F.target === t && Promise.resolve().then(() => {
      r(n() + 1e-7);
    });
  };
  return ae(() => {
    const F = new ResizeObserver((z) => {
      z.forEach((E) => A(E));
    });
    F.observe(t), ce(() => {
      F.unobserve(t);
    }), F.observe(e.bodyElement), ce(() => {
      F.unobserve(e.bodyElement);
    }), e.scrollElement.addEventListener("scroll", w, !1), ce(() => {
      e.scrollElement.removeEventListener("scroll", w, !1);
    });
  }), f(te, {
    each: I,
    children: (F, z) => ji(e.itemComponent.component, {
      ...e.itemComponent.props,
      item: F,
      ref: (x) => {
        Promise.resolve().then(() => {
          T(x, S[z()]);
        });
      }
    })
  });
}
const bs = /* @__PURE__ */ b("<div><div><div>"), nn = `cm-virtual-${he()}`;
let rt;
const xs = () => {
  le || rt || (rt = document.createElement("style"), rt.type = "text/css", rt.textContent = `
        .${nn} {
            position: relative !important;
            flex-shrink: 0 !important;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        .${nn} > * {
            width: 100%;
            will-change: transform !important;
            box-sizing: border-box !important;
            contain: layout !important;
        }
      `, document.head.appendChild(rt));
};
function rn(e) {
  xs();
  let t, n, r, i;
  return (() => {
    const l = bs(), c = l.firstChild, a = c.firstChild, s = t;
    typeof s == "function" ? j(s, l) : t = l, Ve(l, nn);
    const o = n;
    typeof o == "function" ? j(o, c) : n = c;
    const d = r;
    return typeof d == "function" ? j(d, a) : r = a, g(a, f(Mi, ie({
      ref(u) {
        const m = i;
        typeof m == "function" ? m(u) : i = u;
      },
      scrollElement: t,
      contentElement: n,
      bodyElement: r
    }, e))), l;
  })();
}
function Cs(e) {
  return e;
}
function Vh(e) {
  e.group = !0;
  const t = ze(() => e.children), n = () => t.toArray();
  return e.items = n(), e;
}
const ks = /* @__PURE__ */ b("<div>"), Ls = /* @__PURE__ */ b('<ul class="cm-select-option-list">'), Ss = /* @__PURE__ */ b('<div class="cm-select-options-wrap"><div class="cm-select-options">'), Es = /* @__PURE__ */ b('<div class="cm-select-loading">加载中');
function Di(e) {
  let t;
  const n = e.textField || "label", r = e.valueField || "value", [i, l] = U(!1), c = e.align ?? "bottomLeft", a = ze(() => e.children), s = () => a.toArray(), [o, d] = ve(e, e.multi ? [] : "");
  let u = [];
  e.filter && e.defaultLabel && (e.multi && e.defaultLabel instanceof Array ? e.defaultLabel.forEach((L, R) => {
    u.push({
      [r]: o()[R],
      [n]: L
    });
  }) : u = [{
    [r]: o(),
    [n]: e.defaultLabel
  }]);
  let m = !0;
  const [y, _] = U(e.filter && e.multi ? "" : e.defaultLabel);
  queueMicrotask(() => {
    m = !1;
  });
  const [h, $] = U(u);
  let v = null;
  const C = () => q(e, "cm-select", {
    "cm-select-disabled": e.disabled,
    [`cm-select-${e.size}`]: e.size,
    "cm-select-clearable": !e.disabled && e.clearable && `${o()}`.length !== 0,
    "cm-select-multi": e.multi,
    "cm-select-open": i(),
    "cm-select-with-prefix": e.prefix
    // 'cm-select-hasEmptyOption': !props.multi && hasEmptyOption
  });
  let k = {};
  function w(L, R) {
    L && L.forEach((D) => {
      R.push(D), D._show = !0, k[D[r]] = D, D.items && w(D.items, R);
    });
  }
  const T = dt(() => {
    const L = s();
    k = {};
    const R = [];
    return e.emptyOption && R.push({
      [r]: "",
      [n]: e.emptyOption,
      _show: !0,
      emptyOption: !0
    }), u && u.forEach((D) => {
      R.push({
        ...D,
        _show: !0
      });
    }), L && w(L, R), R;
  }), [I, M] = se({
    list: []
  });
  X(() => {
    const L = Me(() => o());
    M("list", T()), M("list", (R) => R, G((R) => {
      e.multi ? R._checked = L.includes(R[r]) : R._checked = L === R[r];
    }));
  }), X(() => {
    const L = o(), R = [];
    M("list", (D) => D, G((D) => {
      e.multi ? D._checked = L.includes(D[r]) : D._checked = L === D[r], D._checked && R.push(D);
    })), $(R);
  });
  const S = (L, R) => {
    if (k[L] && k[L].items && k[L].items.length)
      return;
    let D = h();
    if (e.multi) {
      let P = o();
      const O = P.indexOf(L);
      O > -1 ? (P.splice(O, 1), D.splice(O, 1)) : (P = [...P], P.push(L), D.push(R)), d([...P]), _(""), $([...D]), e.onChange && e.onChange(P, R);
    } else
      m = !0, D = [R], d(L), _(R[n]), $([...D]), Promise.resolve().then(() => {
        m = !1;
      }), l(!1), e.onChange && e.onChange(L, R);
  }, A = () => {
    const L = [];
    return h().map((D) => {
      L.push({
        id: D[r],
        title: D[n]
      });
    }), e.multi ? L.length ? L : e.emptyOption ? [{
      id: "",
      title: e.emptyOption
    }] : [] : L.length ? L[0].title : e.emptyOption ? e.emptyOption : "";
  }, F = (L) => {
    $([]), e.multi ? (e.onChange && e.onChange([]), d([])) : (e.onChange && e.onChange(""), d(""), _(""), l(!1));
  };
  X(() => {
    const L = y();
    m || (e.remoteMethod ? L && (u = [], clearTimeout(v), v = setTimeout(() => {
      e.remoteMethod?.(L), l(!0);
    }, e.debounceTime || 300)) : M("list", (R) => R, G((R) => {
      R._show = R[n].indexOf(L) > -1;
    })));
  }), X(() => {
    if (!i() && e.filter)
      if (e.multi)
        _("");
      else {
        const L = Me(() => h()), R = Me(() => y());
        L.length && L[0][n] !== R && (m = !0, _(L[0][n]), queueMicrotask(() => {
          m = !1;
        }));
      }
  });
  const z = (L, R) => {
    if (e.multi) {
      const D = h(), P = o(), O = P.indexOf(L.id);
      O > -1 && (P.splice(O, 1), D.splice(O, 1)), d([...P]), $([...D]), e.onChange && e.onChange(P);
    }
  }, E = () => {
    if (e.multi) {
      const L = h(), R = o();
      R.length > 0 && (R.pop(), L.pop(), d([...R]), $([...L]), e.onChange && e.onChange(R));
    }
  }, x = dt(() => I.list.filter((L) => L._show));
  return (() => {
    const L = ks(), R = t;
    return typeof R == "function" ? j(R, L) : t = L, g(L, f(Oe, {
      get transfer() {
        return e.transfer;
      },
      fixWidth: !0,
      align: c,
      get disabled() {
        return e.disabled;
      },
      trigger: "click",
      visible: [i, l],
      get menu() {
        return (() => {
          const D = Ss(), P = D.firstChild;
          return g(P, f(B, {
            get when() {
              return !e.loading;
            },
            get fallback() {
              return Es();
            },
            get children() {
              const O = Ls();
              return g(O, f(rn, {
                get items() {
                  return x();
                },
                itemEstimatedSize: 30,
                get maxHeight() {
                  return e.maxHeight ?? 200;
                },
                get itemComponent() {
                  return {
                    component: Ms,
                    props: {
                      textField: n,
                      valueField: r,
                      renderOption: e.renderOption,
                      onClear: F,
                      onOptionClick: S,
                      value: o
                    }
                  };
                }
              })), O;
            }
          })), N(() => (e.maxHeight ? `${e.maxHeight}px` : "") != null ? P.style.setProperty("max-height", e.maxHeight ? `${e.maxHeight}px` : "") : P.style.removeProperty("max-height")), D;
        })();
      },
      get children() {
        return f(nt, {
          get text() {
            return A();
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
          onClear: F,
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
            return f(K, {
              name: "chevron-down",
              class: "cm-select-cert"
            });
          },
          onClose: z,
          query: [y, _],
          get filter() {
            return e.filter;
          },
          onDeleteLastValue: E
        });
      }
    })), N((D) => {
      const P = C(), O = e.style;
      return D._v$ = V(L, P, D._v$), D._v$2 = H(L, O, D._v$2), D;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), L;
  })();
}
const Ms = (e) => {
  const t = e.item;
  return f(B, {
    get when() {
      return t.emptyOption;
    },
    get fallback() {
      return f(ys, {
        ref(n) {
          const r = e.ref;
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
      return f(ws, {
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
}, Ds = /* @__PURE__ */ b("<div><em>");
function Rn(e, t) {
  if (!t)
    return !1;
  const n = Et(new Date(e[0])), r = Et(new Date(e[1]));
  return n ? e.length === 1 && n.getTime() === t.getTime() || e.length === 2 && n.getTime() <= t.getTime() && r.getTime() >= t.getTime() : !1;
}
function An(e, t) {
  return "" + e.getFullYear() + e.getMonth() + e.getDate() == "" + t.getFullYear() + t.getMonth() + t.getDate();
}
function Fs(e, t) {
  return "" + e.getFullYear() + e.getMonth() == "" + t.getFullYear() + t.getMonth();
}
function Ts(e) {
  const t = vt(), n = Et(/* @__PURE__ */ new Date()), r = e.day ? n.toLocaleDateString() === e.day.toLocaleDateString() : !1, i = () => e.type === "dateRange" || e.type === "dateTimeRange" ? !1 : e.value && e.value instanceof Date && e.day ? e.value.toLocaleDateString() === e.day.toLocaleDateString() : !1;
  let l = e.day && t && t.disabledDate && t.disabledDate(e.day);
  e.month && e.day && Fs(e.month, e.day) || (l = !0);
  const c = () => e.range && e.day ? Rn(e.range, e.day) : !1, a = () => e.range && e.range[0] && e.day && An(e.range[0], e.day), s = () => e.range && e.range[1] && e.day && An(e.range[1], e.day), o = () => {
    const y = e.range && e.range.length === 1 && e.hoverDate ? [e.hoverDate, e.range[0]] : [];
    return y.length === 2 && y.sort((_, h) => _.getTime() - h.getTime()), y && e.day ? Rn(y, e.day) : !1;
  }, d = () => ({
    "cm-date-picker-day": !0,
    "cm-date-picker-empty": !e.day,
    "cm-date-picker-today": r,
    "cm-date-picker-active": i(),
    "cm-date-picker-inrange": !l && c(),
    "cm-date-picker-inhover": !l && o(),
    "cm-date-picker-first-range": a(),
    "cm-date-picker-last-range": s(),
    "cm-date-picker-day-disabled": l
  }), u = () => {
    e.day && t && t.onSelectDate(e.day, e.name);
  }, m = () => {
    e.day && t && t.onMouseOver(e.day);
  };
  return (() => {
    const y = Ds(), _ = y.firstChild;
    return y.$$mouseover = m, y.$$click = u, g(_, (() => {
      const h = Z(() => !!e.day);
      return () => h() ? e.day.getDate() : "";
    })()), N((h) => V(y, d(), h)), y;
  })();
}
Q(["click", "mouseover"]);
const Rs = /* @__PURE__ */ b('<div class="cm-month-picker-cell"><ul>'), As = /* @__PURE__ */ b("<li>");
function zn(e) {
  const t = vt(), n = (i, l) => {
    l || e.onSelect && e.onSelect(e.type, i);
  };
  let r;
  return X(() => {
    if (r && t?.visible()) {
      const i = e.data[0], l = e.value ? e.value : e.type === "year" ? (/* @__PURE__ */ new Date()).getFullYear() : (/* @__PURE__ */ new Date()).getMonth() + 1;
      r.scrollTop = 26 * (l - i);
    }
  }), (() => {
    const i = Rs(), l = i.firstChild, c = r;
    return typeof c == "function" ? j(c, i) : r = i, g(l, f(te, {
      get each() {
        return e.data;
      },
      children: (a) => {
        const s = () => {
          let d = !1;
          const u = new Date(e.day);
          return e.type === "year" && (u.setFullYear(a), u.setMonth(1), u.setDate(1), d = t && t.disabledDate && t.disabledDate(u)), e.type === "month" && (u.setMonth(a - 1), d = t && t.disabledDate && t.disabledDate(u)), d;
        }, o = () => ({
          "cm-month-picker-item": !0,
          "cm-month-picker-item-active": e.value === a,
          "cm-month-picker-item-disabled": s()
        });
        return (() => {
          const d = As();
          return d.$$click = () => {
            n(a, s());
          }, g(d, a), N((u) => V(d, o(), u)), d;
        })();
      }
    })), i;
  })();
}
Q(["click"]);
const zs = /* @__PURE__ */ b('<div class="cm-date-picker-month-header">'), Ps = /* @__PURE__ */ b('<div class="cm-date-picker-month"><div class="cm-date-picker-month-body">');
function St(e) {
  const [t, n] = e.store, r = vt(), i = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const d = e.name === "end" ? 1 : 0;
      return t.currentMonth[d] && t.currentMonth[d].getFullYear && t.currentMonth[d].getFullYear();
    } else
      return e.value && e.value.getFullYear && e.value.getFullYear();
  }, l = () => {
    const d = [];
    let u = (/* @__PURE__ */ new Date()).getFullYear();
    u = u - 60;
    for (let m = 0; m < 100; m++)
      d.push(u + m);
    return d;
  }, c = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].concat([]), a = () => {
    if (e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange") {
      const d = e.name === "end" ? 1 : 0;
      return t.currentMonth[d] && t.currentMonth[d].getMonth && t.currentMonth[d].getMonth() + 1;
    } else
      return e.value && e.value.getMonth && e.value.getMonth() + 1;
  }, s = (d, u) => {
    const m = e.name === "end" ? 1 : 0, y = new Date(t.currentMonth[m]);
    if (d === "year" && y.setFullYear(u), d === "month" && y.setMonth(u - 1), e.onMonthChange) {
      e.onMonthChange(y, d, e.name);
      return;
    }
    n("currentMonth", e.name === "end" ? [t.currentMonth[0], y] : [y, t.currentMonth[1]]), e.type !== "dateRange" && e.type !== "date" && r && r.onSelectDate && r.onSelectDate(y, e.name);
  }, o = () => {
    e.onBack && e.onBack();
  };
  return (() => {
    const d = Ps(), u = d.firstChild;
    return g(d, f(B, {
      get when() {
        return e.type === "date" || e.type === "dateRange" || e.type === "dateTime" || e.type === "dateTimeRange";
      },
      get children() {
        const m = zs();
        return g(m, f(Ee, {
          type: "text",
          onClick: o,
          ghost: !0,
          get icon() {
            return f(K, {
              name: "chevron-left",
              size: 16
            });
          },
          children: "返回选择日期"
        })), m;
      }
    }), u), g(u, f(zn, {
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
      onSelect: s
    }), null), g(u, f(zn, {
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
      onSelect: s
    }), null), d;
  })();
}
const Is = /* @__PURE__ */ b('<div class="cm-date-picker-date-inner"><div class="cm-date-picker-date-header"><div class="cm-date-picker-header-arrow"></div><div class="cm-date-picker-header-arrow"></div><span class="cm-date-picker-date-info"></span><div class="cm-date-picker-header-arrow"></div><div class="cm-date-picker-header-arrow"></div></div><div class="cm-date-picker-date-body"><div class="cm-date-picker-week-line"></div><div class="cm-date-picker-date-days"></div></div><div class="cm-date-picker-date-footer">'), Ns = /* @__PURE__ */ b('<div class="cm-date-picker-date">'), Os = /* @__PURE__ */ b("<div>"), Vs = ["日", "一", "二", "三", "四", "五", "六"];
function Et(e) {
  return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e;
}
const Ct = (e, t, n, r, i, l) => {
  const c = e.currentMonth[r === "end" ? 1 : 0];
  c[`set${n}`](c[`get${n}`]() + 1 * i);
  const a = [...e.currentMonth];
  if (l) {
    const s = a[r === "end" ? 0 : 1];
    s[`set${n}`](s[`get${n}`]() + 1 * i);
  } else if (re(a[0]).format("YYYY-MM") === re(a[1]).format("YYYY-MM") || a[0].getTime() > a[1].getTime()) {
    const s = a[r === "end" ? 0 : 1];
    s[`set${n}`](s[`get${n}`]() + 1 * i);
  }
  t("currentMonth", a);
};
function Mt(e) {
  const [t, n] = e.store;
  e.type;
  const [r, i] = U("date"), l = () => {
    Ct(t, n, "Month", e.name, 1, e.stick);
  }, c = () => {
    Ct(t, n, "Month", e.name, -1, e.stick);
  }, a = () => {
    Ct(t, n, "FullYear", e.name, -1, e.stick);
  }, s = () => {
    Ct(t, n, "FullYear", e.name, 1, e.stick);
  }, o = () => {
    i("month");
  }, d = () => {
    i("date");
  }, u = (_, h, $) => {
    const v = t.currentMonth[$ === "end" ? 1 : 0];
    v.setFullYear(_.getFullYear()), v.setMonth(_.getMonth());
    const C = [...t.currentMonth], k = h === "year" ? "FullYear" : "Month";
    if (e.stick) {
      const w = new Date(v);
      w.setMonth(w.getMonth() + 1 * ($ === "end" ? -1 : 1)), C[$ === "end" ? 0 : 1] = w;
    } else if (re(C[0]).format("YYYY-MM") === re(C[1]).format("YYYY-MM") || C[0].getTime() > C[1].getTime()) {
      const w = C[$ === "end" ? 0 : 1];
      w[`set${k}`](w[`get${k}`]() + 1 * ($ === "end" ? -1 : 1));
    }
    n("currentMonth", C);
  }, m = () => {
    const _ = [], h = Et(new Date(t.currentMonth[e.name === "end" ? 1 : 0]));
    h.setDate(1);
    const $ = new Date(h);
    $.setMonth($.getMonth() + 1), $.setDate(0);
    const v = h.getDay() % 7, C = new Date(h);
    C.setDate(C.getDate() - v - 1);
    for (let w = 0; w < v; w++)
      _.push(new Date(C.setDate(C.getDate() + 1)));
    h.setDate(0);
    for (let w = 0; w < $.getDate(); w++)
      _.push(new Date(h.setDate(h.getDate() + 1)));
    let k = _[_.length - 1];
    k = new Date(k);
    for (let w = 0, T = 42 - _.length; w < T; w++)
      _.push(new Date(k.setDate(k.getDate() + 1)));
    return _;
  }, y = () => re(t.currentMonth[e.name === "end" ? 1 : 0]).format("YYYY年MM月");
  return (() => {
    const _ = Ns();
    return g(_, f(B, {
      get when() {
        return r() === "date";
      },
      get children() {
        const h = Is(), $ = h.firstChild, v = $.firstChild, C = v.nextSibling, k = C.nextSibling, w = k.nextSibling, T = w.nextSibling, I = $.nextSibling, M = I.firstChild, S = M.nextSibling;
        return g(v, f(K, {
          name: "chevrons-left",
          onClick: a
        })), g(C, f(K, {
          name: "chevron-left",
          onClick: c
        })), k.$$click = o, g(k, y), g(w, f(K, {
          name: "chevron-right",
          onClick: l
        })), g(T, f(K, {
          name: "chevrons-right",
          onClick: s
        })), g(M, f(te, {
          each: Vs,
          children: (A) => (() => {
            const F = Os();
            return g(F, A), F;
          })()
        })), g(S, f(te, {
          get each() {
            return m();
          },
          children: (A) => f(Ts, {
            get range() {
              return t.range;
            },
            get hoverDate() {
              return t.hoverDate;
            },
            get type() {
              return e.type;
            },
            day: A,
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
        })), h;
      }
    }), null), g(_, f(B, {
      get when() {
        return r() === "month";
      },
      get children() {
        return f(St, ie(e, {
          onBack: d,
          onMonthChange: u
        }));
      }
    }), null), _;
  })();
}
Q(["click"]);
function Bs(e) {
  const [t, n] = oe(e, ["value"]), r = () => t.value ? t.value[0] : "", i = () => t.value ? t.value[1] : "";
  return [f(St, ie({
    name: "start"
  }, n, {
    get value() {
      return r();
    }
  })), f(St, ie({
    name: "end"
  }, n, {
    get value() {
      return i();
    }
  }))];
}
function Hs(e) {
  const [t, n] = oe(e, ["value"]), r = () => t.value[0], i = () => t.value[1];
  return [f(Mt, ie({
    name: "start",
    get value() {
      return r();
    }
  }, n)), f(Mt, ie({
    name: "end",
    get value() {
      return i();
    }
  }, n))];
}
const Ys = /* @__PURE__ */ b('<div class="cm-date-picker-datetime"><div class="cm-datetime-content"></div><div class="cm-datetime-switch"><div class="cm-datetime-switch-item"></div><div class="cm-datetime-switch-item">');
function ln(e) {
  const [t, n] = U("date"), r = vt(), i = () => e.store[0].currentMonth[e.name === "end" ? 1 : 0], l = () => re(e.value || /* @__PURE__ */ new Date()).format("YYYY-MM-DD"), c = () => re(i()).format("HH:mm:ss"), a = (o) => {
    n(o);
  }, s = (o, d, u) => {
    const m = new Date(i());
    o === "hour" && m.setHours(d), o === "minute" && m.setMinutes(d), o === "second" && m.setSeconds(d), r && r.onSelectTime(m, e.name);
  };
  return (() => {
    const o = Ys(), d = o.firstChild, u = d.nextSibling, m = u.firstChild, y = m.nextSibling;
    return g(d, f(B, {
      get when() {
        return t() === "date";
      },
      get children() {
        return f(Mt, e);
      }
    }), null), g(d, f(B, {
      get when() {
        return t() === "time";
      },
      get children() {
        return f(Dt, ie(e, {
          header: "选择时间",
          get value() {
            return i();
          },
          onSelectTime: s
        }));
      }
    }), null), ye(m, "click", a.bind(null, "date"), !0), g(m, f(K, {
      name: "calendar1",
      size: 12
    }), null), g(m, l, null), ye(y, "click", a.bind(null, "time"), !0), g(y, f(K, {
      name: "clock",
      size: 12
    }), null), g(y, c, null), N((_) => {
      const h = t() === "date", $ = t() === "time";
      return h !== _._v$ && m.classList.toggle("active", _._v$ = h), $ !== _._v$2 && y.classList.toggle("active", _._v$2 = $), _;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
Q(["click"]);
function qs(e) {
  const [t, n] = oe(e, ["value"]), r = () => t.value && t.value[0], i = () => t.value && t.value[1];
  return [f(ln, ie({
    name: "start",
    get value() {
      return r();
    }
  }, n)), f(ln, ie({
    name: "end",
    get value() {
      return i();
    }
  }, n))];
}
const Ws = /* @__PURE__ */ b("<div>"), Us = /* @__PURE__ */ b('<div class="cm-date-picker-shortcuts">'), js = /* @__PURE__ */ b('<div class="cm-date-picker-wrap">'), Fi = me();
function Xs(e) {
  const [t, n] = U(!1), r = e.type ?? "date", [i, l] = ve(e, "value", r === "dateRange" || r === "dateTimeRange" ? [] : ""), [c, a] = U();
  let s = e.format ?? "YYYY-MM-DD";
  (r === "month" || r === "monthRange") && (s = e.format ?? "YYYY-MM"), (r === "dateTime" || r === "dateTimeRange") && (s = e.format ?? "YYYY-MM-DD HH:mm:ss");
  const o = /* @__PURE__ */ new Date(), d = /* @__PURE__ */ new Date();
  d.setMonth(d.getMonth() + 1);
  const [u, m] = se({
    currentMonth: [o, d],
    range: [],
    hoverDate: void 0
  }), y = e.align ?? "bottomLeft", _ = e.seperator || "~";
  X(() => {
    let M = i();
    M && M instanceof Array && typeof M[0] == "function" && (M = M[0]());
    let S;
    if (M) {
      if (typeof M == "string")
        if (r === "dateRange" || r === "monthRange" || r === "dateTimeRange") {
          const A = M.split(_);
          M = [re(A[0]).toDate(), re(A[1]).toDate()];
          const F = new Date(M[0]), z = new Date(M[1]);
          re(F).format("YYYY-MM") === re(z).format("YYYY-MM") && z.setMonth(z.getMonth() + 1), S = [F, z];
        } else {
          M = re(M).toDate();
          const A = new Date(M), F = new Date(M);
          F.setMonth(F.getMonth() + 1), S = [A, F];
        }
      else {
        let A = /* @__PURE__ */ new Date(), F = /* @__PURE__ */ new Date();
        M instanceof Array && (typeof M[0] == "string" && (M[0] = re(M[0]).toDate()), typeof M[1] == "string" && (M[1] = re(M[1]).toDate()), A = M[0] === void 0 ? /* @__PURE__ */ new Date() : M[0] ? new Date(M[0]) : /* @__PURE__ */ new Date(), F = M[1] === void 0 ? /* @__PURE__ */ new Date() : M[1] ? new Date(M[1]) : /* @__PURE__ */ new Date()), r === "month" && M instanceof Date && (A = M, F = new Date(M)), re(A).format("YYYY-MM") === re(F).format("YYYY-MM") && F.setMonth(F.getMonth() + 1), S = [A, F];
      }
      (r === "dateRange" || r === "dateTimeRange") && m("range", M);
    } else
      S = [o, d];
    e.stick && (S[1] = new Date(S[0]), S[1].setMonth(S[1].getMonth() + 1)), S[0].setDate(1), S[1].setDate(1), m("currentMonth", S), a(M);
  });
  const h = () => q(e, "cm-date-picker", {
    [`cm-date-picker-${e.size}`]: e.size,
    "cm-date-picker-disabled": e.disabled,
    "cm-date-picker-clearable": !e.disabled && e.clearable && i() && i().length !== 0
  }), $ = () => {
    l(""), r === "dateRange" && m("range", []), e.onChange && e.onChange("");
  }, v = (M, S) => {
    const A = new Date(M);
    if ((r === "month" || r === "monthRange") && (A.setDate(1), A.setHours(0), A.setMinutes(0), A.setSeconds(0), A.setMilliseconds(0)), r === "dateTime" || r === "dateTimeRange") {
      let x = c();
      r === "dateTimeRange" ? x = x && x.length ? x[u.range.length === 1 ? 1 : 0] : u.currentMonth[u.range.length === 1 ? 1 : 0] : x = x || u.currentMonth[u.range.length === 1 ? 1 : 0], A.setHours(x.getHours()), A.setMinutes(x.getMinutes()), A.setSeconds(x.getSeconds());
    }
    const F = /* @__PURE__ */ new Date(), z = c() || (r === "monthRange" || r === "dateRange" || r === "dateTimeRange" ? [F, F] : F);
    (r === "dateRange" || r === "dateTimeRange") && !z.length && (z.push(F), z.push(F));
    let E;
    if (S === "start" ? E = [A, z[1]] : S === "end" ? E = [z[0], A] : E = A, E instanceof Array && E[0].getTime() > E[1].getTime() && E.reverse(), r === "dateRange" || r === "dateTimeRange") {
      const x = u.range;
      let L = [];
      if ((x[0] && x[1] || !x[0] && !x[1]) && (L = [A], m("hoverDate", new Date(A))), x[0] && !x[1]) {
        if (w(x[0], A))
          return;
        if (L = [x[0], A], L[0].getTime() > L[1].getTime()) {
          L.reverse();
          const R = /* @__PURE__ */ new Date();
          C(R, u.currentMonth[0]), C(u.currentMonth[0], u.currentMonth[1]), C(u.currentMonth[1], R), m("currentMonth", [...u.currentMonth]);
        }
        l(L), r === "dateRange" && n(!1);
      }
      m("range", L);
      return;
    }
    l(E), e.onChange && e.onChange(E), r === "date" && n(!1);
  }, C = (M, S) => {
    M.setHours(S.getHours()), M.setMinutes(S.getMinutes()), M.setSeconds(S.getSeconds());
  }, k = (M, S) => {
    let A = c(), F;
    S === "start" ? (F = u.currentMonth[0], A && A[0] ? (C(A[0], M), A[0].getTime() > A[1].getTime() ? (A.reverse(), C(u.currentMonth[0], A[0]), C(u.currentMonth[1], A[1])) : C(F, M), l([...A])) : C(F, M)) : S === "end" ? (F = u.currentMonth[1], A && A[1] ? (C(A[1], M), A[0].getTime() > A[1].getTime() ? (A.reverse(), C(u.currentMonth[0], A[0]), C(u.currentMonth[1], A[1])) : C(F, M), l([...A])) : C(F, M)) : (A || (A = /* @__PURE__ */ new Date()), C(A, M), F = u.currentMonth[0], C(F, M), l(new Date(A))), m("currentMonth", [...u.currentMonth]);
  }, w = (M, S) => {
    if (e.maxRange) {
      const A = M.getTime() - S.getTime();
      if (Math.abs(A / 1e3 / 60 / 60 / 24) > e.maxRange - 1)
        return !0;
    }
    return !1;
  }, T = (M) => {
    if (u.range && u.range[0]) {
      if (w(u.range[0], M) && e.maxRange) {
        const S = new Date(u.range[0]), A = M.getTime() > u.range[0].getTime() ? 1 : -1;
        S.setDate(S.getDate() + (e.maxRange - 1) * A), m("hoverDate", S);
        return;
      }
      m("hoverDate", new Date(M));
    }
  }, I = dt(() => {
    const M = c();
    return M ? typeof M == "string" ? M : r === "dateRange" || r === "monthRange" || r === "dateTimeRange" ? M[0] ? [re(M[0]).format(s), re(M[1]).format(s)].join(_) : "" : re(M).format(s) : "";
  });
  return f(Fi.Provider, {
    get value() {
      return {
        onSelectDate: v,
        onMouseOver: T,
        disabledDate: e.disabledDate,
        onSelectTime: k,
        visible: t
      };
    },
    get children() {
      const M = Ws();
      return g(M, f(Oe, {
        visible: [t, n],
        get transfer() {
          return e.transfer;
        },
        align: y,
        get revers() {
          return e.revers;
        },
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        get menu() {
          return (() => {
            const S = js();
            return g(S, f(B, {
              get when() {
                return e.shortCuts;
              },
              get children() {
                const A = Us();
                return g(A, (() => {
                  const F = Z(() => typeof e.shortCuts == "function");
                  return () => F() ? e.shortCuts() : e.shortCuts;
                })()), A;
              }
            }), null), g(S, f(Te, {
              get children() {
                return [f(p, {
                  when: r === "date",
                  get children() {
                    return f(Mt, {
                      store: [u, m],
                      get stick() {
                        return e.stick;
                      },
                      type: r,
                      get value() {
                        return c();
                      }
                    });
                  }
                }), f(p, {
                  when: r === "month",
                  get children() {
                    return f(St, {
                      store: [u, m],
                      type: r,
                      get value() {
                        return c();
                      }
                    });
                  }
                }), f(p, {
                  when: r === "monthRange",
                  get children() {
                    return f(Bs, {
                      store: [u, m],
                      type: r,
                      get value() {
                        return c();
                      }
                    });
                  }
                }), f(p, {
                  when: r === "dateRange",
                  get children() {
                    return f(Hs, {
                      store: [u, m],
                      get stick() {
                        return e.stick;
                      },
                      get value() {
                        return c();
                      },
                      type: r
                    });
                  }
                }), f(p, {
                  when: r === "dateTime",
                  get children() {
                    return f(ln, {
                      store: [u, m],
                      get stick() {
                        return e.stick;
                      },
                      type: r,
                      get value() {
                        return c();
                      },
                      format: s
                    });
                  }
                }), f(p, {
                  when: r === "dateTimeRange",
                  get children() {
                    return f(qs, {
                      store: [u, m],
                      get stick() {
                        return e.stick;
                      },
                      type: r,
                      get value() {
                        return c();
                      },
                      format: s
                    });
                  }
                })];
              }
            }), null), S;
          })();
        },
        get children() {
          return f(B, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return Z(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return f(nt, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return I();
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
                  return f(K, {
                    name: "calendar1"
                  });
                }
              });
            }
          });
        }
      })), N((S) => {
        const A = h(), F = e.style;
        return S._v$ = V(M, A, S._v$), S._v$2 = H(M, F, S._v$2), S;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), M;
    }
  });
}
const vt = () => ge(Fi), Ks = /* @__PURE__ */ b('<div class="cm-time-picker-cell"><ul>'), Gs = /* @__PURE__ */ b("<li>");
function Vt(e) {
  const t = [];
  for (let c = 0; c < e.max; )
    t.push(c), c += e.step || 1;
  const n = io(), r = vt(), i = (c, a) => {
    a || (n && n.onSelect(e.type, c, e.name), e.onSelectTime && e.onSelectTime(e.type, c, e.name));
  };
  let l;
  return X(() => {
    const c = n?.visible(), a = r?.visible();
    l && (c || a) && (l.scrollTop = 26 * (e.value / (e.step || 1)));
  }), (() => {
    const c = Ks(), a = c.firstChild, s = l;
    return typeof s == "function" ? j(s, c) : l = c, g(a, f(te, {
      each: t,
      children: (o) => {
        const d = n && n.disabledTime && n.disabledTime(o, e.type), u = () => ({
          "cm-time-picker-item": !0,
          "cm-time-picker-item-active": e.value === o,
          "cm-time-picker-item-disabled": d
        });
        return (() => {
          const m = Gs();
          return ye(m, "click", i.bind(null, o, d), !0), g(m, o), N((y) => V(m, u(), y)), m;
        })();
      }
    })), c;
  })();
}
Q(["click"]);
const Zs = /* @__PURE__ */ b('<div class="cm-time-picker-header">'), Js = /* @__PURE__ */ b('<div class="cm-time-picker-footer">'), Qs = /* @__PURE__ */ b('<div class="cm-time-picker-pane"><div class="cm-time-picker-options">');
function Dt(e) {
  const t = () => e.value && e.value.getHours && e.value.getHours(), n = () => e.value && e.value.getMinutes && e.value.getMinutes(), r = () => e.value && e.value.getSeconds && e.value.getSeconds(), i = () => e.format.indexOf("H") > -1, l = () => e.format.indexOf("m") > -1, c = () => e.format.indexOf("s") > -1;
  return (() => {
    const a = Qs(), s = a.firstChild;
    return g(a, f(B, {
      get when() {
        return e.header;
      },
      get children() {
        const o = Zs();
        return g(o, () => e.header), o;
      }
    }), s), g(s, f(B, {
      get when() {
        return i();
      },
      get children() {
        return f(Vt, {
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
    }), null), g(s, f(B, {
      get when() {
        return l();
      },
      get children() {
        return f(Vt, {
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
    }), null), g(s, f(B, {
      get when() {
        return c();
      },
      get children() {
        return f(Vt, {
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
    }), null), g(a, f(B, {
      get when() {
        return e.footer;
      },
      get children() {
        const o = Js();
        return g(o, () => e.footer), o;
      }
    }), null), a;
  })();
}
function ps(e) {
  const [t, n] = oe(e, ["header", "footer", "value"]), r = () => t.value[0], i = () => t.value[1];
  return [f(Dt, ie({
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
  })), f(Dt, ie({
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
const eo = /* @__PURE__ */ b('<div tabindex="1">'), to = /* @__PURE__ */ b('<div class="cm-time-picker-wrap">'), Ti = me();
function no(e) {
  const [t, n] = ve(e, e.type === "timeRange" ? [] : ""), [r, i] = U(t()), [l, c] = U(!1), a = e.align ?? "bottomLeft", s = e.format ?? "HH:mm:ss", o = e.seperator || "~", d = e.header ?? (e.type === "timeRange" ? ["开始时间", "结束时间"] : void 0), u = () => q(e, "cm-time-picker", {
    "cm-time-picker-disabled": e.disabled,
    [`cm-time-picker-${e.theme}`]: e.theme,
    [`cm-time-picker-${e.size}`]: e.size,
    "cm-time-picker-clearable": !e.disabled && e.clearable && t() !== "" && t().length !== 0
  });
  X(() => {
    let h = t();
    if (h)
      if (typeof h == "string")
        if (e.type === "timeRange") {
          const $ = h.split(o);
          h = [re(re().format("YYYY-MM-DD ") + $[0]).toDate(), re(re().format("YYYY-MM-DD ") + $[1]).toDate()];
        } else
          h = re(re().format("YYYY-MM-DD ") + h).toDate();
      else
        h instanceof Array && h[0] && typeof h[0] == "string" && (h = [re(re().format("YYYY-MM-DD ") + h[0]).toDate(), re(re().format("YYYY-MM-DD ") + h[1]).toDate()]);
    i(h);
  });
  const m = (h, $, v) => {
    const C = /* @__PURE__ */ new Date(), k = r() || (e.type === "timeRange" ? [C, C] : C);
    e.type === "timeRange" && !k.length && (k.push(C), k.push(C));
    let w;
    if (v === "start" ? w = k[0] : v === "end" ? w = k[1] : w = k, h === "hour" && w.setHours($), h === "minute" && w.setMinutes($), h === "second" && w.setSeconds($), e.type === "timeRange") {
      let T = [];
      v === "start" && (T = [new Date(w), k[1]]), v === "end" && (T = [k[0], new Date(w)]), T[0].getTime() > T[1].getTime() && (T = [T[1], T[0]]), n(T), e.onChange && e.onChange(T);
    } else {
      const T = new Date(w);
      n(T), e.onChange && e.onChange(T);
    }
  }, y = () => {
    n(""), e.onChange && e.onChange("");
  }, _ = () => {
    const h = r();
    return h ? typeof h == "string" ? h : e.type === "timeRange" ? h.length ? typeof h[0] == "string" ? h.join(o) : [re(h[0]).format(s), re(h[1]).format(s)].join(o) : "" : re(h).format(s) : "";
  };
  return f(Ti.Provider, {
    get value() {
      return {
        onSelect: m,
        disabledTime: e.disabledTime,
        visible: l
      };
    },
    get children() {
      const h = eo();
      return J(h, "x-placement", a), g(h, f(Oe, {
        get transfer() {
          return e.transfer;
        },
        align: a,
        trigger: "click",
        get disabled() {
          return e.disabled;
        },
        visible: [l, c],
        get menu() {
          return (() => {
            const $ = to();
            return g($, f(B, {
              get when() {
                return e.type === "timeRange";
              },
              get fallback() {
                return f(Dt, {
                  get value() {
                    return r();
                  },
                  format: s,
                  get minuteStep() {
                    return e.minuteStep;
                  },
                  get secondStep() {
                    return e.secondStep;
                  },
                  get hourStep() {
                    return e.hourStep;
                  },
                  header: d,
                  get footer() {
                    return e.footer;
                  }
                });
              },
              get children() {
                return f(ps, {
                  get value() {
                    return r();
                  },
                  format: s,
                  get minuteStep() {
                    return e.minuteStep;
                  },
                  get secondStep() {
                    return e.secondStep;
                  },
                  get hourStep() {
                    return e.hourStep;
                  },
                  header: d,
                  get footer() {
                    return e.footer;
                  }
                });
              }
            })), $;
          })();
        },
        get children() {
          return f(B, {
            get when() {
              return !e.trigger;
            },
            get fallback() {
              return Z(() => !!e.trigger)() && e.trigger();
            },
            get children() {
              return f(nt, {
                get prepend() {
                  return e.prepend;
                },
                get text() {
                  return _();
                },
                onClear: y,
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
                  return f(K, {
                    name: "clock"
                  });
                }
              });
            }
          });
        }
      })), N(($) => V(h, u(), $)), h;
    }
  });
}
const io = () => ge(Ti), ro = /* @__PURE__ */ b('<div class="cm-slider-handle" tabindex="0">'), lo = /* @__PURE__ */ b('<div class="cm-slider-handle" tabindex="1">'), co = /* @__PURE__ */ b('<div class="cm-slider-marks">'), ao = /* @__PURE__ */ b('<div><div class="cm-slider-rail"></div><div class="cm-slider-track"></div><div class="cm-slider-steps">'), so = /* @__PURE__ */ b("<span>"), oo = /* @__PURE__ */ b('<span class="cm-slider-mark">');
function uo(e) {
  let t, n, r, i, l;
  const c = e.min ?? 0, a = e.max ?? 100, s = e.step ?? 1, o = e.range ?? !1, [d, u] = ve(e, o ? [0, 0] : 0), m = () => q(e, "cm-slider", {
    "cm-slider-disabled": e.disabled
  }), y = () => t.getBoundingClientRect().width / (a - c) * s, _ = () => {
    const S = o ? d() : [c, d()], A = Math.abs(S[1] - S[0]) / (a - c) * 100, F = (S[0] - c) / (a - c) * 100, z = (S[1] - c) / (a - c) * 100;
    return {
      left: F,
      width: A,
      right: z
    };
  }, h = () => {
    const S = _();
    return {
      left: S.left + "%",
      width: S.width + "%"
    };
  }, $ = () => {
    const S = o ? d()[0] : d();
    return e.tipFormatter ? e.tipFormatter(S) : S;
  }, v = () => e.tipFormatter ? e.tipFormatter(d()[1]) : d()[1];
  X(() => {
    const S = _(), A = t.getBoundingClientRect(), F = o ? A.width * S.left / 100 : A.width * S.right / 100, z = o ? A.width * (S.left + S.width) / 100 : 0;
    n && n.setPosition({
      x: F,
      y: 0
    }), r && r.setPosition({
      x: z,
      y: 0
    });
  });
  const C = (S) => {
    let A;
    try {
      A = s.toString().split(".")[1].length;
    } catch {
      A = 0;
    }
    const F = Math.pow(10, A);
    return Math.round(S * F) / F;
  }, k = (S, A) => {
    const z = t.getBoundingClientRect().width, E = C(A.x / z * (a - c) + c);
    if (setTimeout(() => {
      i && i.updatePosition();
    }), o && E > d()[1])
      return !1;
    const x = o ? [E, Math.max(E, d()[1])] : E;
    u(x), e.onChange && e.onChange(x);
  }, w = (S, A) => {
    const z = t.getBoundingClientRect().width, E = C(A.x / z * (a - c) + c);
    if (setTimeout(() => {
      l && l.updatePosition();
    }), o && E < d()[0])
      return !1;
    const x = o ? [Math.min(d()[0], E), E] : E;
    u(x), e.onChange && e.onChange(x);
  }, T = (S) => {
    if (e.disabled || S.target.classList.contains("cm-slider-handle"))
      return;
    const A = S.target.closest(".cm-slider");
    if (!A)
      return;
    const F = A.getBoundingClientRect(), z = S.pageX - F.left, x = t.getBoundingClientRect().width, L = C(Math.round(z / x * (a - c) / s + c) * s);
    let R = d();
    o ? (R = Math.abs(R[1] - L) > Math.abs(R[0] - L) ? [L, R[1]] : [R[0], L], u(R), e.onChange && e.onChange(R)) : (u(L), e.onChange && e.onChange(L));
  }, I = () => {
    if (!e.marks)
      return [];
    const S = [];
    for (let A = c; A <= a; A += s)
      e.marks[A] && S.push(A);
    return S;
  }, M = () => {
    if (e.marks) {
      const S = [];
      for (const A in e.marks)
        S.push({
          step: parseFloat(A),
          label: e.marks[A]
        });
      return S;
    }
    return [];
  };
  return (() => {
    const S = ao(), A = S.firstChild, F = A.nextSibling, z = F.nextSibling;
    S.$$mousedown = T;
    const E = t;
    return typeof E == "function" ? j(E, A) : t = A, g(z, f(te, {
      get each() {
        return I();
      },
      children: (x) => {
        const L = o ? d() : [c, d()], R = x >= L[0] && x <= L[1], D = () => ({
          "cm-slider-step": !0,
          "cm-slider-step-active": R
        }), P = `${(x - c) / (a - c) * 100}%`;
        return (() => {
          const O = so();
          return P != null ? O.style.setProperty("left", P) : O.style.removeProperty("left"), N((Y) => V(O, D(), Y)), O;
        })();
      }
    })), g(S, f(Qe, {
      get disabled() {
        return e.disabled;
      },
      get content() {
        return $();
      },
      align: "top",
      ref(x) {
        const L = i;
        typeof L == "function" ? L(x) : i = x;
      },
      arrow: !0,
      get children() {
        return f(jt, {
          axis: "x",
          get disabled() {
            return e.disabled;
          },
          ref(x) {
            const L = n;
            typeof L == "function" ? L(x) : n = x;
          },
          onDrag: k,
          bounds: "parent",
          class: "cm-slider-handle-drag",
          get grid() {
            return [y(), y()];
          },
          get children() {
            return ro();
          }
        });
      }
    }), null), g(S, f(B, {
      when: o,
      get children() {
        return f(Qe, {
          get disabled() {
            return e.disabled;
          },
          get content() {
            return v();
          },
          align: "top",
          ref(x) {
            const L = l;
            typeof L == "function" ? L(x) : l = x;
          },
          arrow: !0,
          get children() {
            return f(jt, {
              axis: "x",
              get disabled() {
                return e.disabled;
              },
              ref(x) {
                const L = r;
                typeof L == "function" ? L(x) : r = x;
              },
              onDrag: w,
              bounds: "parent",
              class: "cm-slider-handle-drag",
              get grid() {
                return [y(), y()];
              },
              get children() {
                return lo();
              }
            });
          }
        });
      }
    }), null), g(S, f(B, {
      get when() {
        return e.marks;
      },
      get children() {
        const x = co();
        return g(x, f(te, {
          get each() {
            return M();
          },
          children: (L) => {
            const R = `${(L.step - c) / (a - c) * 100}%`;
            return (() => {
              const D = oo();
              return R != null ? D.style.setProperty("left", R) : D.style.removeProperty("left"), g(D, () => L.label), D;
            })();
          }
        })), x;
      }
    }), null), N((x) => {
      const L = m(), R = e.style, D = h();
      return x._v$ = V(S, L, x._v$), x._v$2 = H(S, R, x._v$2), x._v$3 = H(F, D, x._v$3), x;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), S;
  })();
}
Q(["mousedown"]);
const fo = /* @__PURE__ */ b('<span class="cm-tree-item-folder">'), ho = /* @__PURE__ */ b('<span class="cm-tree-item-file">'), Pn = /* @__PURE__ */ b('<span class="cm-tree-item-icon">'), mo = /* @__PURE__ */ b('<div><div></div><div><span class="cm-tree-title"><span class="cm-tree-text"></span></span></div><div>'), go = /* @__PURE__ */ b("<span>"), vo = /* @__PURE__ */ b('<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3571" width="16" height="16"><path d="M323.731 93.334c14.331 0 27.677 5.512 37.657 15.529l365.34 365.99c1.337 1.306 2.38 2.417 3.234 3.607l2.16 2.723c10.653 10.703 15.888 23.296 15.888 36.627 0 13.571-5.351 26.26-15.053 35.73l-367.853 363.953c-9.951 9.813-23.238 15.222-37.401 15.222-13.848 0-26.931-5.25-36.832-14.769-9.841-9.549-15.507-22.867-15.506-36.518 0-13.484 5.365-26.259 15.134-35.969l331.846-328.283-336.081-336.964c-9.607-9.666-14.915-22.296-14.915-35.619 0-13.958 5.673-27.055 15.937-36.876 9.768-9.271 22.734-14.381 36.444-14.381z" p-id="3572">'), $o = /* @__PURE__ */ b('<span class="cm-tree-patch">');
function yo(e) {
  const t = wo();
  let n;
  const [r, i] = U(!1), [l, c] = U(!1), [a, s] = U(!1), o = () => t.store.store.nodeMap[e.data[t.store.keyField]].expand, d = () => t.store.store.nodeMap[e.data[t.store.keyField]]._selected, u = () => t.store.store.nodeMap[e.data[t.store.keyField]]._dragging, m = () => ({
    "cm-tree-item": !0,
    "cm-tree-item-open": o(),
    "cm-tree-item-selected": d(),
    "cm-tree-item-dragging": u(),
    [`${t.draggingClass}`]: !!t.draggingClass && u(),
    [`${t.selectedClass}`]: t.selectedClass && d()
  }), y = () => e.data.children && e.data.children.length || e.data.loading, _ = () => {
    let D = t.directory ? y() ? fo() : ho() : null;
    return t.customIcon && typeof t.customIcon == "function" && (D = (() => {
      const P = Pn();
      return g(P, () => t.customIcon(e.data)), P;
    })()), e.data.icon && (D = (() => {
      const P = Pn();
      return g(P, () => e.data.icon), P;
    })()), D;
  }, h = () => {
    t && t.contextMenu && t.onContextMenu && t.onContextMenu({
      ...e.data
    });
  }, $ = () => {
    t.onOpenClose(e.data);
  }, v = () => {
    t.onNodeSelect(e.data);
  }, C = (D) => {
    e.data.disabled || t.draggable && (D.dataTransfer && D.dataTransfer.setData("node", e.data[t.store.keyField]), o() && t.onOpenClose(e.data), t.store.setNodeDragging(e.data[t.store.keyField], !0), t.onDragStart?.(D, e.data));
  }, k = (D) => {
    t?.store && t.store.setNodeDragging(e.data[t.store.keyField], !1);
  }, w = (D) => {
    const P = n.getBoundingClientRect(), O = P.height, Y = D.clientY - P.top;
    return Y <= O * 0.3 ? Fe.before : Y <= O * (0.3 + 0.4) ? Fe.body : Fe.after;
  }, T = (D) => {
    D.preventDefault();
    const P = w(D);
    A(P), t.onDragEnter?.(D, e.data, P);
  }, I = (D) => {
    D.preventDefault();
    const P = w(D);
    A(P), t.onDragOver?.(D, e.data, P);
  }, M = (D) => {
    const P = w(D);
    A(P, !0), t.onDragLeave?.(D, e.data, P);
  }, S = (D) => {
    const P = w(D);
    A(P, !0), t.onDrop?.(D, e.data[t.store.keyField], P);
  }, A = (D, P = !1) => {
    i(!1), c(!1), s(!1), P || (D === Fe.before ? i(!0) : D === Fe.body ? c(!0) : D === Fe.after && F() && s(!0));
  };
  X(() => {
  });
  const F = () => {
    const D = e.data._parent;
    return !!(D && D.children.findIndex((O) => O[t.store.keyField] === e.data[t.store.keyField]) === D.children.length - 1);
  }, z = () => ({
    "padding-left": 16 * e.data._level + "px",
    height: "100%"
  }), E = () => ({
    "cm-tree-node-drop": !0,
    "cm-tree-node-drop_active": r()
  }), x = () => ({
    "cm-tree-node-drop": !0,
    "cm-tree-node-drop_active": a()
  }), L = () => ({
    "cm-tree-node-content": !0,
    "cm-tree-node-drop_active": l(),
    [`${t.dragHoverClass}`]: !!t.dragHoverClass && l()
  }), R = () => t.store.store.nodeMap[e.data[t.store.keyField]].__loading;
  return (() => {
    const D = mo(), P = D.firstChild, O = P.nextSibling, Y = O.firstChild, W = Y.firstChild, ue = O.nextSibling;
    return j((ee) => {
      n = ee, e.ref(ee);
    }, D), D.addEventListener("drop", S), D.addEventListener("dragleave", M), D.addEventListener("dragover", I), D.addEventListener("dragenter", T), O.addEventListener("dragend", k), O.addEventListener("dragstart", C), g(O, f(B, {
      get when() {
        return R();
      },
      get fallback() {
        return (() => {
          const ee = go();
          return ee.$$click = $, g(ee, f(B, {
            get when() {
              return t.arrowIcon && typeof t.arrowIcon;
            },
            get fallback() {
              return vo();
            },
            get children() {
              return t.arrowIcon?.();
            }
          })), N(() => Ve(ee, "cm-tree-arrow " + (y() ? "" : "hide"))), ee;
        })();
      },
      get children() {
        return f(Je, {
          color: "#1890ff",
          size: 16
        });
      }
    }), Y), g(O, f(B, {
      get when() {
        return t.checkable;
      },
      get children() {
        return f(Be, {
          get disabled() {
            return t.store.store.nodeMap[e.data[t.store.keyField]].disabled;
          },
          get checked() {
            return t.store.store.nodeMap[e.data[t.store.keyField]].checked;
          },
          onChange: (ee) => t.onNodeCheck(e.data, ee)
        });
      }
    }), Y), g(O, _, Y), Y.$$click = v, Y.$$contextmenu = h, g(W, () => e.data.title), g(Y, (() => {
      const ee = Z(() => !!e.data.patch);
      return () => ee() ? (() => {
        const _e = $o();
        return g(_e, () => e.data.patch), _e;
      })() : null;
    })(), null), N((ee) => {
      const _e = m(), Pe = z(), Ie = E(), De = L(), Re = t.draggable && !e.data.disabled, yt = x();
      return ee._v$ = V(D, _e, ee._v$), ee._v$2 = H(D, Pe, ee._v$2), ee._v$3 = V(P, Ie, ee._v$3), ee._v$4 = V(O, De, ee._v$4), Re !== ee._v$5 && J(O, "draggable", ee._v$5 = Re), ee._v$6 = V(ue, yt, ee._v$6), ee;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0,
      _v$6: void 0
    }), D;
  })();
}
Q(["contextmenu", "click"]);
let xe;
(function(e) {
  e.FULL = "FULL", e.HALF = "HALF", e.CHILD = "CHILD", e.SHALLOW = "SHALLOW";
})(xe || (xe = {}));
class _o {
  data = [];
  flatData = [];
  keyField = "id";
  titleField = "title";
  constructor(t) {
    this.props = t, this.checkable = t.checkable ?? !1, this.checkRelation = t.checkRelation ?? "related", this.draggable = t.draggable ?? !1, this.keyField = t.keyField || "id", this.titleField = t.titleField || "title", this.mode = t.mode ?? xe.HALF;
    const [n, r] = se({
      nodeMap: {},
      nodeList: []
    });
    this.store = n, this.setStore = r;
    const [i, l] = U(""), [c, a] = we(t, "selected", ""), [s, o] = we(t, "value", []);
    this.selectedKey = i, this.setSelectedKey = l, this.setSelected = a, this.setValue = o, X(() => {
      const d = c();
      this.selectNode(d, !0);
    }), X(() => {
      const d = s();
      this.setCheckedByMod(d);
    });
  }
  init(t) {
    this.data = t, this.flatData = this.getAllFlatNodes(this.data), this.setStore("nodeMap", {}), this.setStore("nodeList", []), this.buildRelation(this.data, null, 0), this.setRootFlatNodes();
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
    this.setStore("nodeMap", t[this.keyField], G((n) => {
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
    r && this.selectedKey() !== r[this.keyField] && (this.setStore("nodeMap", this.selectedKey(), G((i) => {
      i._selected = !1;
    })), this.setStore("nodeMap", r[this.keyField], G((i) => {
      i._selected = !0, this.setSelectedKey(i[this.keyField]), this.setSelected(i[this.keyField]);
    })), !n && this.props.onNodeSelect?.(r));
  };
  clearSelect = () => {
    this.setStore("nodeMap", this.selectedKey(), G((t) => {
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
    this.flatData = this.flatData.concat(r), this.setStore("nodeMap", G((i) => {
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
        this.setStore("nodeMap", n[this.keyField], G((i) => {
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
    r && (this.setStore("nodeMap", G((i) => {
      const l = i[t];
      l.children || (l.children = []);
      const c = i[r[this.keyField]];
      this.updateLevels(r, l._level), c._parent = l, l.children.push(c), this.checkable && this.updateNodeCheckStatus(l);
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
    n && (this.setStore("nodeMap", n[this.keyField], G((r) => {
      r.checked = this.getNodeChecked(r);
    })), this.checkRelation === "related" && this.setCheckedForwardUp(n));
  };
  updateLevels = (t, n) => {
    this.setStore("nodeMap", t[this.keyField], G((r) => {
      r._level = n + 1;
    })), t.children && t.children.length > 0 && t.children.forEach((r) => {
      this.updateLevels(r, n + 1);
    });
  };
  prepend = (t, n) => {
    const r = this.beforeNodeOperation(t, n);
    r && (this.setStore("nodeMap", G((i) => {
      const l = i[t];
      l.children || (l.children = []);
      const c = i[r[this.keyField]];
      this.updateLevels(r, l._level), c._parent = l, l.children.unshift(c), this.checkable && this.updateNodeCheckStatus(l);
    })), this.setRootFlatNodes());
  };
  insertBefore = (t, n) => {
    const r = this.beforeNodeOperation(t, n);
    r && (this.setStore("nodeMap", G((i) => {
      const l = i[t], c = l._parent || {
        children: this.data
      }, a = c.children.findIndex((o) => o[this.keyField] === t);
      c.children.splice(a, 0, r);
      const s = i[r[this.keyField]];
      this.updateLevels(r, l._level - 1), s._parent = l._parent, this.checkable && this.updateNodeCheckStatus(l._parent);
    })), this.setRootFlatNodes());
  };
  insertAfter = (t, n) => {
    const r = this.beforeNodeOperation(t, n);
    r && (this.setStore("nodeMap", G((i) => {
      const l = i[t], c = l._parent || {
        children: this.data
      }, a = c.children.findIndex((o) => o[this.keyField] === t);
      c.children.splice(a + 1, 0, r);
      const s = i[r[this.keyField]];
      this.updateLevels(r, l._level - 1), s._parent = l._parent, this.checkable && this.updateNodeCheckStatus(l._parent);
    })), this.setRootFlatNodes());
  };
  filter = (t, n) => {
    n = n || ((c, a) => {
      const s = a[this.titleField];
      return s == null || !s.toString ? !1 : s.toString().toLowerCase().indexOf(c.toLowerCase()) > -1;
    });
    const i = [], l = {};
    this.flatData.forEach((c) => {
      l[c[this.keyField]] = c._parent && l[c._parent[this.keyField]] || n(t, c), this.setStore("nodeMap", c[this.keyField], G((a) => {
        a.visible = l[a[this.keyField]];
      })), l[c[this.keyField]] && i.push(c);
    }), i.forEach((c) => {
      const a = [];
      let s = c._parent;
      for (; s; )
        a.unshift(s), s = s._parent;
      a.forEach((o) => {
        this.setStore("nodeMap", o[this.keyField], G((d) => {
          d._filterVisible = !0, d.visible = (!d._parent || d._parent.visible) && d._filterVisible;
        }));
      }), this.setStore("nodeMap", c[this.keyField], G((o) => {
        o.visible = !o._parent || o._parent.visible;
      }));
    }), this.setRootFlatNodes();
  };
  getNodeIndexInShow = (t) => {
    const n = this._getNode(t);
    return !n || !n.visible ? -1 : this.store.nodeList.findIndex((i) => i[this.keyField] === n[this.keyField]);
  };
  expandAll = () => {
    this.flatData.forEach((t) => {
      t.visible && t.children && !t.expand && this.setStore("nodeMap", t[this.keyField], G((n) => {
        n.expand = !0;
      }));
    }), this.setRootFlatNodes();
  };
  collapseAll = () => {
    this.flatData.forEach((t) => {
      t.children && t.expand && this.setStore("nodeMap", t[this.keyField], G((n) => {
        n.expand = !1;
      }));
    }), this.setRootFlatNodes();
  };
  checkNode = (t, n) => {
    const r = this._getNode(t);
    this.setStore("nodeMap", r[this.keyField], G((l) => {
      l.checked = n, this.checkRelation === "related" && this.setCheckedForwardDown(l, n), this.checkRelation === "related" && (l.checked = this.getNodeChecked(r)), this.checkRelation === "related" && this.setCheckedForwardUp(l);
    }));
    const i = this.getCheckedKeys(this.mode);
    this.setValue(i), this.props.onChange && this.props.onChange(i);
  };
  setCheckedForwardDown = (t, n) => {
    t.children && t.children.forEach((r) => {
      r.disabled || (this.setStore("nodeMap", r[this.keyField], G((i) => {
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
      return n.children.forEach((c) => {
        c.checked === !0 && i++, c.checked === "indeterminate" && l++;
      }), i === n.children.length ? r = !0 : i > 0 && (r = "indeterminate"), !r && l > 0 && (r = "indeterminate"), r;
    }
  };
  setCheckedForwardUp = (t) => {
    const n = t._parent;
    if (n) {
      const r = this.getNodeChecked(n);
      this.setStore("nodeMap", n[this.keyField], G((i) => {
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
    this.setStore("nodeMap", G((n) => {
      for (const r in n)
        n[r].checked = !0;
    }));
    const t = this.getCheckedKeys(this.mode);
    this.setValue(t), this.props.onChange && this.props.onChange(t);
  };
  uncheckAll = () => {
    this.setStore("nodeMap", G((n) => {
      for (const r in n)
        n[r].checked = !1;
    }));
    const t = this.getCheckedKeys(this.mode);
    this.setValue(t), this.props.onChange && this.props.onChange(t);
  };
  loadData = async (t, n) => {
    this.setStore("nodeMap", t[this.keyField], G((r) => r.__loading = !0));
    try {
      const r = await n(t);
      r.length > 0 && r.forEach((i) => {
        this.append(t[this.keyField], i);
      });
    } catch {
    } finally {
      this.setStore("nodeMap", t[this.keyField], G((r) => r.__loading = !1));
    }
    this.setStore("nodeMap", t[this.keyField], G((r) => r.loading = !1));
  };
  /**
   *
   * @param mode
   * @returns
   */
  getChecked = (t = xe.HALF) => {
    if (this.checkRelation === "related") {
      if (t === xe.FULL)
        return this.getFullChecked();
      if (t === xe.CHILD)
        return this.getChildChecked();
      if (t === xe.HALF)
        return this.getHalfChecked();
      if (t === xe.SHALLOW)
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
  getCheckedKeys = (t = xe.HALF) => this.getChecked(t).map((r) => r[this.keyField]);
  setNodeDragging = (t, n) => {
    const r = this._getNode(t);
    r && this.setStore("nodeMap", r[this.keyField], G((i) => {
      i._dragging = n;
    }));
  };
  clearChecked = () => {
    this.flatData.forEach((t) => {
      this.setStore("nodeMap", t[this.keyField], "checked", !1);
    });
  };
  setCheckedByMod = (t) => {
    this.clearChecked(), this.checkRelation === "related" ? (this.mode === xe.FULL && this.setCheckedByFull(t), this.mode === xe.HALF && this.setCheckedByHalf(t), this.mode === xe.CHILD && this.setCheckedByChild(t), this.mode === xe.SHALLOW && this.setCheckedByShallow(t)) : this.setCheckedByFull(t);
  };
  setCheckedByFull = (t) => {
    t.forEach((n) => {
      this.setStore("nodeMap", n, G((r) => {
        r.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(r);
      }));
    });
  };
  setCheckedByHalf = (t) => {
    t.forEach((n) => {
      const r = this._getNode(n);
      (!r.children || r.children.length === 0) && this.setStore("nodeMap", n, G((i) => {
        i.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(i);
      }));
    });
  };
  setCheckedByChild = (t) => {
    t.forEach((n) => {
      const r = this._getNode(n);
      (!r.children || r.children.length === 0) && this.setStore("nodeMap", n, G((i) => {
        i.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(i);
      }));
    });
  };
  setCheckedByShallow = (t) => {
    t.forEach((n) => {
      this.setStore("nodeMap", n, G((r) => {
        r.checked = !0, this.checkRelation === "related" && this.setCheckedForwardUp(r), this.checkRelation === "related" && this.setCheckedForwardDown(r, !0);
      }));
    });
  };
}
const In = /* @__PURE__ */ b('<div class="cm-tree">'), Nn = /* @__PURE__ */ b('<div class="cm-tree-empty">');
let Fe;
(function(e) {
  e.before = "before", e.body = "body", e.after = "after";
})(Fe || (Fe = {}));
const Ri = me({}), wo = () => ge(Ri);
function bo(e) {
  let t;
  const [n, r] = U(!1), [i, l] = U(0), [c, a] = U(0), s = e.emptyText ?? "暂无数据", o = new _o(e), d = o.getStore();
  X(() => {
    o.init(e.data);
  });
  const u = (h, $) => {
    o.checkNode(h, $), e.onNodeCheck && e.onNodeCheck(h, $);
  }, m = async (h) => {
    (!e.beforeExpand || await e.beforeExpand(h, !h.expand)) && (h.loading && e.loadData && await o.loadData(h, e.loadData), o.expandNode(h, !h.expand));
  };
  e.ref && e.ref({
    prepend: o.prepend,
    append: o.append,
    insertBefore: o.insertBefore,
    insertAfter: o.insertAfter,
    getNode: o.getNode,
    remove: o.remove,
    filter: o.filter,
    expandAll: o.expandAll,
    collapseAll: o.collapseAll,
    expandNode: async (h, $) => {
      const v = o._getNode(h);
      v && v.expand !== $ && m(v);
    },
    scrollTo: (h, $ = "top") => {
      const v = o.getNodeIndexInShow(h), C = 22;
      let k = v * C;
      $ === "center" && (k = k - t.getScrollElement().getBoundingClientRect().height / 2 + C / 2), $ === "bottom" && (k = k - t.getScrollElement().getBoundingClientRect().height + C), t.getScrollElement().scrollTo({
        top: k,
        behavior: "smooth"
      });
    },
    rename: o.rename,
    checkNode: u,
    checkAll: o.checkAll,
    uncheckAll: o.uncheckAll,
    loadData: (h, $) => {
      const v = o._getNode(h);
      v && o.loadData(v, $);
    },
    selectNode: o.selectNode,
    getChecked: o.getChecked,
    getCheckedKeys: o.getCheckedKeys
  });
  const y = async (h, $, v) => {
    if (h.dataTransfer)
      try {
        const C = o._getNode($), k = h.dataTransfer.getData("node"), w = o._getNode(k);
        if (e.beforeDropMethod ? await e.beforeDropMethod(C, w, v) : !0) {
          if ($ === k)
            return;
          v === Fe.before ? o.insertBefore($, k) : v === Fe.body || C.expand ? o.prepend($, k) : v === Fe.after && o.insertAfter($, k), e.onNodeDrop?.(h, C, w, v);
        }
      } catch (C) {
        throw new Error(C);
      }
  }, _ = () => de(e, {});
  return f(Ri.Provider, {
    get value() {
      return {
        onOpenClose: m,
        onNodeSelect: o.selectNode,
        store: o,
        draggable: e.draggable,
        checkable: e.checkable || !1,
        onDrop: y,
        directory: e.directory,
        onContextMenu: e.onContextMenu,
        contextMenu: e.contextMenu,
        onNodeCheck: u,
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
      return f(B, {
        get when() {
          return e.contextMenu;
        },
        get fallback() {
          return (() => {
            const h = In();
            return g(h, f(B, {
              get when() {
                return e.data && e.data.length;
              },
              get fallback() {
                return (() => {
                  const $ = Nn();
                  return g($, s), $;
                })();
              },
              get children() {
                return f(rn, {
                  ref($) {
                    const v = t;
                    typeof v == "function" ? v($) : t = $;
                  },
                  get items() {
                    return d.nodeList;
                  },
                  itemEstimatedSize: 22,
                  itemComponent: {
                    component: On,
                    props: {}
                  }
                });
              }
            })), N(($) => H(h, _(), $)), h;
          })();
        },
        get children() {
          return f(B, {
            get when() {
              return e.data && e.data.length;
            },
            get fallback() {
              return (() => {
                const h = Nn();
                return g(h, s), h;
              })();
            },
            get children() {
              return f(Oe, {
                visible: [n, r],
                transfer: !0,
                trigger: "contextMenu",
                get position() {
                  return {
                    x: i(),
                    y: c()
                  };
                },
                onMouseClick: (h) => {
                  l(h.pageX), a(h.pageY + 5);
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
                  const h = In();
                  return g(h, f(rn, {
                    onScroll: () => r(!1),
                    ref($) {
                      const v = t;
                      typeof v == "function" ? v($) : t = $;
                    },
                    get items() {
                      return d.nodeList;
                    },
                    itemEstimatedSize: 22,
                    itemComponent: {
                      component: On,
                      props: {}
                    }
                  })), N(($) => H(h, _(), $)), h;
                }
              });
            }
          });
        }
      });
    }
  });
}
const On = (e) => f(yo, {
  get data() {
    return e.item;
  },
  ref(t) {
    const n = e.ref;
    typeof n == "function" ? n(t) : e.ref = t;
  }
}), xo = /* @__PURE__ */ b('<div tabindex="1">'), Co = /* @__PURE__ */ b('<div class="cm-tree-select-wrap">');
function ko(e) {
  const [t, n] = ve(e, e.multi ? [] : ""), [r, i] = U(""), l = e.align ?? "bottomLeft";
  let c;
  const a = e.mode ?? xe.HALF;
  e.checkRelation;
  const s = () => q(e, "cm-tree-select", {
    "cm-tree-select-disabled": e.disabled,
    [`cm-tree-select-${e.size}`]: e.size
  }), o = (_) => {
    e.multi || e.onChange && e.onChange(_.id);
  }, d = (_) => {
    n(_), e.onChange && e.onChange(y());
  }, u = () => {
    const _ = e.multi ? [] : "";
    n(_), e.onChange && e.onChange(_);
  }, m = (_, h) => {
    const $ = t();
    $.splice($.indexOf(_.id), 1), n([...$]);
  }, y = () => c?.getCheckedKeys(a) || [];
  return X(() => {
    const _ = t();
    e.multi && (_.join(","), y().join(","));
  }), dt(() => {
    let _ = t();
    if (e.multi) {
      if (typeof _ == "string") {
        _ = _.split(","), n(_);
        return;
      }
      setTimeout(() => {
        const h = c?.getChecked(a).map(($) => ({
          id: $[e.keyField || "id"],
          title: $[e.titleField || "title"]
        })) || [];
        i(h);
      });
    } else
      setTimeout(() => {
        const h = c?.getNode(_);
        i(h ? h[e.titleField || "title"] : "");
      });
  }), e.ref && e.ref({
    ...c
  }), (() => {
    const _ = xo();
    return g(_, f(Oe, {
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
          const h = Co();
          return g(h, f(bo, {
            get data() {
              return e.data;
            },
            get checkable() {
              return e.multi;
            },
            onNodeSelect: o,
            onChange: d,
            ref($) {
              const v = c;
              typeof v == "function" ? v($) : c = $;
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
          })), h;
        })();
      },
      get children() {
        return f(nt, {
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
          onClear: u,
          get prepend() {
            return e.prepend;
          },
          get size() {
            return e.size;
          },
          get icon() {
            return f(K, {
              name: "chevron-down"
            });
          },
          onClose: m
        });
      }
    })), N((h) => {
      const $ = s(), v = e.style;
      return h._v$ = V(_, $, h._v$), h._v$2 = H(_, v, h._v$2), h;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), _;
  })();
}
function Lo(e) {
  return f(Te, {
    get fallback() {
      return f(ke, e);
    },
    get children() {
      return [f(p, {
        get when() {
          return e.type === "text" || !e.type || e.type === "password" || e.type === "textarea";
        },
        get children() {
          return f(ke, e);
        }
      }), f(p, {
        get when() {
          return e.type === "checkbox";
        },
        get children() {
          return f(ja, e);
        }
      }), f(p, {
        get when() {
          return e.type === "radio";
        },
        get children() {
          return f(rs, e);
        }
      }), f(p, {
        get when() {
          return e.type === "switch";
        },
        get children() {
          return f(as, e);
        }
      }), f(p, {
        get when() {
          return e.type === "search";
        },
        get children() {
          return f(ss, e);
        }
      }), f(p, {
        get when() {
          return e.type === "spinner";
        },
        get children() {
          return f(us, e);
        }
      }), f(p, {
        get when() {
          return e.type === "rate";
        },
        get children() {
          return f(vs, e);
        }
      }), f(p, {
        get when() {
          return e.type === "select";
        },
        get children() {
          return f(Di, e);
        }
      }), f(p, {
        get when() {
          return e.type === "autocomplete";
        },
        get children() {
          return f(za, e);
        }
      }), f(p, {
        get when() {
          return e.type === "cascader";
        },
        get children() {
          return f(Ha, e);
        }
      }), f(p, {
        get when() {
          return e.type === "time" || e.type === "timeRange";
        },
        get children() {
          return f(no, e);
        }
      }), f(p, {
        get when() {
          return e.type === "date" || e.type === "dateRange" || e.type === "month" || e.type === "monthRange" || e.type === "dateTime" || e.type === "dateTimeRange";
        },
        get children() {
          return f(Xs, e);
        }
      }), f(p, {
        get when() {
          return e.type === "slider";
        },
        get children() {
          return f(uo, e);
        }
      }), f(p, {
        get when() {
          return e.type === "treeSelect";
        },
        get children() {
          return f(ko, e);
        }
      }), f(p, {
        get when() {
          return e.type === "color";
        },
        get children() {
          return f(Po, e);
        }
      })];
    }
  });
}
const So = /* @__PURE__ */ b('<div class="cm-color-picker-alpha"><div class="cm-color-picker-alpha-wrap"><div class="cm-color-picker-alpha-picker">');
function Eo(e) {
  const [t, n] = U(e.value.hsl.a * 100), r = () => {
    const {
      r: o,
      g: d,
      b: u
    } = e.value.rgba, m = tn({
      r: o,
      g: d,
      b: u,
      a: 0
    }), y = tn({
      r: o,
      g: d,
      b: u,
      a: 1
    });
    return {
      background: `linear-gradient(to right, ${m} 0%, ${y} 100%)`
    };
  };
  let i;
  const l = (o) => {
    if (!le) {
      if (typeof o.button == "number" && o.button !== 0)
        return !1;
      a(o), document.addEventListener("mousemove", a, !1), document.addEventListener("mouseup", c, !1);
    }
  }, c = (o) => {
    le || (a(o), document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", c));
  };
  ce(() => {
    le || (document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", c));
  });
  const a = (o) => {
    o.preventDefault(), o.stopPropagation();
    const {
      clientWidth: d
    } = i, u = i.getBoundingClientRect().left + window.screenX, m = o.clientX - u;
    if (m < 0) {
      s(0);
      return;
    }
    if (m > d) {
      s(1);
      return;
    }
    s(Math.round(m * 100 / d) / 100);
  }, s = (o) => {
    n(o * 100);
    const {
      h: d,
      s: u,
      l: m,
      a: y
    } = e.value.hsl;
    y !== o && e.onChange && e.onChange({
      h: d,
      s: u,
      l: m,
      a: o,
      source: "rgba"
    });
  };
  return X(() => {
    n(e.value.hsl.a * 100);
  }), (() => {
    const o = So(), d = o.firstChild, u = d.firstChild, m = i;
    return typeof m == "function" ? j(m, o) : i = o, d.$$mousedown = l, u.style.setProperty("top", "0px"), N((y) => {
      const _ = r(), h = `${t()}%`;
      return y._v$ = H(d, _, y._v$), h !== y._v$2 && ((y._v$2 = h) != null ? u.style.setProperty("left", h) : u.style.removeProperty("left")), y;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
Q(["mousedown"]);
const Mo = /* @__PURE__ */ b('<div class="cm-color-picker-recommend"><div class="cm-color-picker-recommend-container">'), Do = /* @__PURE__ */ b('<div class="cm-color-picker-recommend-color"><div>'), Fo = /* @__PURE__ */ b("<br>");
function To(e) {
  const t = e.colors ?? ["#2d8cf0", "#19be6b", "#ff9900", "#ed4014", "#00b5ff", "#19c919", "#f9e31c", "#ea1a1a", "#9b1dea", "#00c2b1", "#ac7a33", "#1d35ea", "#8bc34a", "#f16b62", "#ea4ca3", "#0d94aa", "#febd79", "#5d4037", "#00bcd4", "#f06292", "#cddc39", "#607d8b", "#000000", "#ffffff"], n = (r) => {
    e.onChange && e.onChange({
      hex: r,
      source: "hex"
    });
  };
  return (() => {
    const r = Mo(), i = r.firstChild;
    return g(i, f(te, {
      each: t,
      children: (l, c) => [(() => {
        const a = Do(), s = a.firstChild;
        return a.$$click = () => n(l), l != null ? s.style.setProperty("background", l) : s.style.removeProperty("background"), a;
      })(), f(B, {
        get when() {
          return (c() + 1) % 12 === 0;
        },
        get children() {
          return Fo();
        }
      })]
    })), r;
  })();
}
Q(["click"]);
const Ro = /* @__PURE__ */ b("<div>"), Ao = /* @__PURE__ */ b('<div class="cm-color-picker-confirm">'), zo = /* @__PURE__ */ b('<div class="cm-color-picker-wrap">');
function Po(e) {
  const [t, n] = U(!1), r = e.align ?? "bottomLeft", [i, l] = ve(e, ""), [c, a] = U(Ot(i() || "#2D8CF0")), [s, o] = U("");
  let d = c();
  const u = () => q(e, "cm-color-picker", {
    [`cm-color-picker-${e.size}`]: e.size
  }), m = ($) => {
    y($);
  }, y = ($, v) => {
    d = c().hsl.h, a(Ot($, v || d));
  }, _ = () => {
    n(!1), l(s()), e.onChange && e.onChange(s());
  }, h = () => {
    n(!1), l(""), e.onChange && e.onChange("");
  };
  return X(() => {
    e.alpha ? o(tn(c().rgba)) : o(c().hex);
  }), X(() => {
    const $ = Ot(s());
    a($);
  }), (() => {
    const $ = Ro();
    return g($, f(Oe, {
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
          const v = zo();
          return g(v, f(Ze, {
            dir: "v",
            get children() {
              return [f(pa, {
                get value() {
                  return c();
                },
                onChange: m
              }), f(ts, {
                get value() {
                  return c();
                },
                onChange: m
              }), f(B, {
                get when() {
                  return e.alpha;
                },
                get children() {
                  return f(Eo, {
                    get value() {
                      return c();
                    },
                    onChange: m
                  });
                }
              }), f(B, {
                get when() {
                  return e.recommend;
                },
                get children() {
                  return f(To, {
                    get colors() {
                      return e.colors;
                    },
                    onChange: m
                  });
                }
              }), (() => {
                const C = Ao();
                return g(C, f(Ze, {
                  dir: "h",
                  get children() {
                    return [f(Lo, {
                      size: "small",
                      class: "cm-color-picker-input",
                      value: [s, o]
                    }), f(Ee, {
                      size: "small",
                      type: "default",
                      onClick: h,
                      children: "清除"
                    }), f(Ee, {
                      size: "small",
                      type: "primary",
                      onClick: _,
                      children: "确定"
                    })];
                  }
                })), C;
              })()];
            }
          })), v;
        })();
      },
      get children() {
        return f(Za, {
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
    })), N((v) => {
      const C = u(), k = e.style;
      return v._v$ = V($, C, v._v$), v._v$2 = H($, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), $;
  })();
}
const Io = /* @__PURE__ */ b("<div>");
function Bh(e) {
  const t = () => q(e, "cm-input-group");
  let n;
  ae(() => {
    r();
  });
  const r = () => {
    if (n) {
      const l = n.children, c = l.length;
      for (let a = 0; a < c; a++) {
        const s = l[a];
        s.classList.remove("cm-input-compact-first-item"), s.classList.remove("cm-input-compact-last-item"), s.classList.remove("cm-input-compact-item"), s.classList.add("cm-input-compact-item"), a === 0 && s.classList.add("cm-input-compact-first-item"), a === c - 1 && s.classList.add("cm-input-compact-last-item");
      }
    }
  };
  X(() => {
    i(), r();
  });
  const i = () => ze(() => e.children).toArray();
  return (() => {
    const l = Io(), c = n;
    return typeof c == "function" ? j(c, l) : n = l, g(l, () => e.children), N((a) => V(l, t(), a)), l;
  })();
}
function Hh(e) {
  const t = () => q(e, "cm-radio");
  return f(Wa, ie(e, {
    get classList() {
      return t();
    },
    type: "radio"
  }));
}
const No = /* @__PURE__ */ b('<div><textarea class="cm-input">'), Oo = /* @__PURE__ */ b('<div class="cm-input-suffix">');
function Yh(e) {
  const [t, n] = oe(e, ["classList", "class", "style", "value", "autoHeight", "disabled", "onChange", "onInput", "onKeyUp", "onEnter", "name", "trigger"]), r = () => q(t, "cm-textarea", "cm-input-wrapper", {
    "cm-input-disabled": t.disabled,
    "cm-input-auto-height": t.autoHeight
  }), [i, l] = ve(e, ""), [c, a] = U(i()), s = t.trigger || "blur", o = (h) => {
  }, d = (h) => {
    l(h.target.value), t.onChange && t.onChange(h.target.value);
  }, u = (h) => {
    s === "input" && (l(h.target.value), t.onChange && t.onChange(h.target.value)), a(h.target.value), t.onInput && t.onInput(h.target.value, h), t.autoHeight && _(h);
  }, m = (h) => {
    t.onKeyUp && t.onKeyUp(h.target.value, h), h.keyCode === 13 && t.onEnter && t.onEnter(h.target.value, h);
  };
  let y;
  const _ = (h) => {
    const $ = h.target;
    y || (y = $.clientHeight), $.scrollHeight > y && ($.value.split(`
`).length === 1 ? $.style.height = `${y}px` : $.style.height = "auto", $.style.overflowY = "hidden", $.scrollTop = 0, $.style.height = `${$.scrollHeight}px`);
  };
  return (() => {
    const h = No(), $ = h.firstChild;
    return Ce($, ie(n, {
      get value() {
        return i();
      },
      spellcheck: !1,
      autocomplete: "off",
      wrap: "soft",
      onChange: o,
      onInput: u,
      onKeyUp: m,
      onBlur: d
    }), !1, !1), g(h, (() => {
      const v = Z(() => !!(e.wordCount && e.maxLength));
      return () => v() ? (() => {
        const C = Oo();
        return g(C, f(ki, {
          get total() {
            return e.maxLength;
          },
          get value() {
            return c();
          }
        })), C;
      })() : null;
    })(), null), N((v) => {
      const C = r(), k = e.style;
      return v._v$ = V(h, C, v._v$), v._v$2 = H(h, k, v._v$2), v;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), h;
  })();
}
const Vo = /* @__PURE__ */ b('<div class="cm-transfer-list-item"><div>');
function Bo(e) {
  const t = () => e.render ? e.render(e.data) : e.data.title, n = () => {
    e.data.disabled || e.onSelect(e.data);
  }, r = () => e.data._checked, i = () => ({
    display: e.data._hide ? "none" : "flex"
  });
  return (() => {
    const l = Vo(), c = l.firstChild;
    return l.$$click = n, g(l, f(Be, {
      get checked() {
        return r();
      },
      get disabled() {
        return e.data.disabled;
      }
    }), c), g(c, t), N((a) => H(l, i(), a)), l;
  })();
}
Q(["click"]);
const Ho = /* @__PURE__ */ b("<div><span>"), Yo = /* @__PURE__ */ b('<div class="">'), qo = /* @__PURE__ */ b('<div class="cm-transfer-filter-wrap">'), Wo = /* @__PURE__ */ b('<div class="cm-transfer-list"><div class="cm-transfer-list-header"></div><div class="cm-transfer-list-body"><div class="cm-transfer-list-content">');
function Vn(e) {
  const t = () => ({
    width: e.width ? `${e.width}px` : "",
    height: e.height ? `${e.height}px` : ""
  }), n = () => {
    const d = e.value || [], u = {};
    return d.forEach((m) => {
      u[m] = !0;
    }), e.store.data.filter((m) => e.name === "source" ? !u[m.id] : u[m.id]);
  }, r = () => {
    let d = 0;
    return n().forEach((u) => {
      u.disabled || d++;
    }), d;
  }, i = (d) => {
    if (e.onSelect(d, !d._checked), d._checked) {
      const u = `${e.name}Ids`;
      e.setStore(u, [...e.store[`${e.name}Ids`], d.id]);
    } else {
      const u = `${e.name}Ids`;
      e.setStore(u, G((m) => {
        m.splice(m.indexOf(d.id), 1);
      }));
    }
  }, l = () => {
    const d = e.store[`${e.name}Ids`];
    return d.length > 0 ? r() === d.length ? !0 : "indeterminate" : !1;
  }, c = (d) => {
    const u = [], m = n();
    m.forEach((y) => {
      e.onSelect(y, d);
    }), m.forEach((y) => {
      y._checked && u.push(y.id);
    }), e.setStore(`${e.name}Ids`, u);
  };
  X(() => {
    e.store[`${e.name}Ids`].length ? e.setStore && e.setStore(`${e.name}Disabled`, !1) : e.setStore && e.setStore(`${e.name}Disabled`, !0);
  });
  const a = (d) => {
    n().forEach((m) => {
      const y = () => e.render ? e.render(m) : m.title;
      e.setStore("data", (_) => _.id === m.id, "_hide", !y().includes(d));
    });
  }, s = () => n().length, o = () => {
    const d = e.store[`${e.name}Ids`];
    return d.length ? d.length + "/" + s() : s();
  };
  return (() => {
    const d = Wo(), u = d.firstChild, m = u.nextSibling, y = m.firstChild;
    return g(u, f(Mr, {
      get children() {
        return [(() => {
          const _ = Ho(), h = _.firstChild;
          return g(_, f(Be, {
            get checked() {
              return l();
            },
            onChange: c
          }), h), g(h, () => e.name === "source" ? "源列表" : "目标列表"), _;
        })(), (() => {
          const _ = Yo();
          return g(_, o), _;
        })()];
      }
    })), g(m, f(B, {
      get when() {
        return e.filter;
      },
      get children() {
        const _ = qo();
        return g(_, f(ke, {
          get append() {
            return f(K, {
              name: "search"
            });
          },
          size: "small",
          onInput: a
        })), _;
      }
    }), y), g(y, f(te, {
      get each() {
        return n();
      },
      children: (_) => f(Bo, {
        data: _,
        onSelect: i,
        get store() {
          return e.store;
        },
        get render() {
          return e.render;
        }
      })
    })), N((_) => H(d, t(), _)), d;
  })();
}
const Uo = /* @__PURE__ */ b('<div><div class="cm-transfer-operation">');
function qh(e) {
  const [t, n] = ve(e, []), r = () => q(e, "cm-transfer"), [i, l] = se({
    data: [],
    sourceDisabled: !0,
    targetDisabled: !0,
    sourceIds: [],
    targetIds: []
  });
  X(() => {
    l("data", e.data || []);
  });
  const c = (o, d) => {
    o.disabled || l("data", (u) => u.id === o.id, "_checked", d);
  }, a = () => {
    i.sourceIds.forEach((d) => {
      l("data", (u) => u.id === d, "_checked", !1);
    });
    let o = t();
    o = o.concat([...i.sourceIds]), l("sourceIds", []), n([...o]), e.onChange && e.onChange([...o]);
  }, s = () => {
    i.targetIds.forEach((d) => {
      l("data", (u) => u.id === d, "_checked", !1);
    });
    const o = t();
    i.targetIds.forEach((d) => {
      o.splice(o.indexOf(d), 1);
    }), l("targetIds", []), n([...o]), e.onChange && e.onChange([...o]);
  };
  return (() => {
    const o = Uo(), d = o.firstChild;
    return g(o, f(Vn, {
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
    }), d), g(d, f(Ee, {
      get disabled() {
        return i.sourceDisabled;
      },
      get icon() {
        return f(K, {
          name: "chevron-right"
        });
      },
      size: "small",
      onClick: a,
      children: "To Right"
    }), null), g(d, f(Ee, {
      get disabled() {
        return i.targetDisabled;
      },
      get icon() {
        return f(K, {
          name: "chevron-left"
        });
      },
      size: "small",
      onClick: s,
      children: "To Left"
    }), null), g(o, f(Vn, {
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
    }), null), N((u) => {
      const m = r(), y = e.style;
      return u._v$ = V(o, m, u._v$), u._v$2 = H(o, y, u._v$2), u;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
function jo(e, t, n) {
  const r = `fail to post ${e} ${n.status}'`, i = new Error(r);
  return i.status = n.status, i.method = "post", i.url = e, i;
}
function Bn(e) {
  const t = e.responseText || e.response;
  if (!t)
    return t;
  try {
    return JSON.parse(t);
  } catch {
    return t;
  }
}
function Hn(e) {
  if (typeof XMLHttpRequest > "u")
    return;
  const t = new XMLHttpRequest(), n = e.action;
  t.upload && (t.upload.onprogress = function(c) {
    c.total > 0 && (c.percent = c.loaded / c.total * 100), e.onProgress(c);
  });
  const r = new FormData();
  e.data && Object.keys(e.data).map((l) => {
    r.append(l, e.data[l]);
  }), r.append(e.filename, e.file), t.onerror = function(c) {
    e.onError(c);
  }, t.onload = function() {
    if (t.status < 200 || t.status >= 300)
      return e.onError(jo(n, e, t), Bn(t));
    e.onSuccess(Bn(t));
  }, t.open("post", n, !0), e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const i = e.headers || {};
  for (const l in i)
    Object.prototype.hasOwnProperty.call(i, l) && i[l] !== null && t.setRequestHeader(l, i[l]);
  t.send(r);
}
const Xo = /* @__PURE__ */ b('<div class="cm-upload-list-title">'), Ko = /* @__PURE__ */ b('<ul class="cm-upload-list"><div class="cm-upload-files">'), Go = /* @__PURE__ */ b('<img class="cm-upload-file-preview-img" alt="">'), Zo = /* @__PURE__ */ b('<div class="cm-upload-error">'), Jo = /* @__PURE__ */ b('<li class="cm-upload-file-card"><div class="cm-upload-file-preview"></div><div class="cm-upload-file-card-body"><div class="cm-upload-file-card-info"><span class="cm-upload-file-card-info-name"></span><span></span></div></div><div class="cm-upload-file-control">');
function Qo(e) {
  const t = (r) => {
    const i = r.name.split(".").pop().toLocaleLowerCase() || "";
    let l = "file-text";
    return ["gif", "jpg", "jpeg", "png", "bmp", "webp"].indexOf(i) > -1 && (l = "image"), ["mp4", "m3u8", "rmvb", "avi", "swf", "3gp", "mkv", "flv"].indexOf(i) > -1 && (l = "film1"), ["mp3", "wav", "wma", "ogg", "aac", "flac"].indexOf(i) > -1 && (l = "music"), l;
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
    const r = Ko(), i = r.firstChild;
    return g(r, f(B, {
      get when() {
        return e.files && e.files.length;
      },
      get children() {
        const l = Xo();
        return g(l, f(Ae, {
          type: "secondary",
          children: "已上传文件"
        }), null), g(l, f(Ae, {
          type: "primary",
          class: "cm-upload-clear",
          get onClick() {
            return e.onClear;
          },
          children: "清空"
        }), null), l;
      }
    }), i), g(i, f(te, {
      get each() {
        return e.files;
      },
      children: (l) => (() => {
        const c = Jo(), a = c.firstChild, s = a.nextSibling, o = s.firstChild, d = o.firstChild, u = d.nextSibling, m = s.nextSibling;
        return g(a, f(B, {
          get when() {
            return l.url;
          },
          get fallback() {
            return f(K, {
              get name() {
                return t(l);
              },
              size: 20
            });
          },
          get children() {
            const y = Go();
            return y.$$click = () => {
              e.onPreview && e.onPreview(l);
            }, N(() => J(y, "src", l.url)), y;
          }
        })), g(d, () => l.name), g(u, () => n(l.size)), g(s, f(B, {
          get when() {
            return l.showProgress && l.percentage !== 100;
          },
          get children() {
            return f(Ci, {
              strokeWidth: 4,
              get value() {
                return l.percentage;
              },
              hidePercent: !0
            });
          }
        }), null), g(s, f(B, {
          get when() {
            return l.status === "fail";
          },
          get children() {
            const y = Zo();
            return g(y, f(K, {
              name: "alert-circle",
              size: 12
            }), null), g(y, f(Ae, {
              type: "error",
              size: "small",
              class: "cm-upload-error-text",
              children: "上传失败"
            }), null), g(y, f(Ae, {
              type: "primary",
              class: "cm-upload-retry",
              size: "small",
              onClick: () => {
                e.onRetry && e.onRetry(l);
              },
              children: "重试"
            }), null), y;
          }
        }), null), g(m, f(Ee, {
          size: "small",
          ghost: !0,
          get icon() {
            return f(K, {
              name: "x"
            });
          },
          onClick: () => {
            e.onRemove && e.onRemove(l);
          }
        })), N(() => J(d, "title", l.name)), c;
      })()
    })), r;
  })();
}
Q(["click"]);
const po = /* @__PURE__ */ b('<ul class="cm-upload-list cm-upload-picture-list"><li class="cm-upload-picture-add">'), ed = /* @__PURE__ */ b('<li class="cm-upload-picture-card"><img class="cm-upload-picture-img" alt=""><div class="cm-upload-picture-remove"></div><div class="cm-upload-picture-preview">');
function td(e) {
  return (() => {
    const t = po(), n = t.firstChild;
    return g(t, f(te, {
      get each() {
        return e.files;
      },
      children: (r) => (() => {
        const i = ed(), l = i.firstChild, c = l.nextSibling, a = c.nextSibling;
        return c.$$click = () => {
          e.onRemove && e.onRemove(r);
        }, g(c, f(K, {
          name: "x-circle"
        })), a.$$click = () => {
          e.onPreview && e.onPreview(r);
        }, g(a, f(K, {
          name: "eye",
          size: 20
        })), N(() => J(l, "src", r.url)), i;
      })()
    }), n), ye(n, "click", e.onClick, !0), g(n, () => e.children), t;
  })();
}
Q(["click"]);
const nd = /* @__PURE__ */ b('<div class="cm-upload-out">'), id = /* @__PURE__ */ b('<div><input class="cm-upload-input" type="file">');
function Wh(e) {
  const [t, n] = U(!1), [r, i] = U(!1), l = e.format ?? [], c = [], a = e.type ?? "select", [s, o] = se({
    fileList: c,
    previewUrl: ""
  });
  let d = {};
  const u = e.name ?? "file", m = () => q(e, "cm-upload", {
    "cm-upload-select": a === "select",
    "cm-upload-drag": a === "drag",
    "cm-upload-dragOver": a === "drag" && t()
  });
  X(() => {
    if (e.defaultFileList) {
      const P = e.defaultFileList.map((O) => (O.uid || (O.uid = he()), O));
      o("fileList", P);
    }
  });
  const y = (P) => {
    const O = P.target.files;
    O && (_(O), D.value = null);
  }, _ = (P) => {
    let O = Array.prototype.slice.call(P);
    e.multiple || (O = O.slice(0, 1)), O.length !== 0 && O.forEach((Y) => {
      h(Y);
    });
  }, h = async (P) => {
    if (!e.beforeUpload)
      return $(P);
    const O = e.beforeUpload(P);
    typeof O == "object" && O.then ? O.then((Y) => {
      Object.prototype.toString.call(Y) === "[object File]" ? $(Y) : $(P);
    }, () => {
    }) : O !== !1 && $(P);
  }, $ = (P) => {
    if (l.length) {
      const O = P.name.split(".").pop().toLocaleLowerCase();
      if (!l.some((W) => W.toLocaleLowerCase() === O))
        return e.onFormatError && e.onFormatError(P, c), !1;
    }
    if (e.maxSize && P.size > e.maxSize * 1024)
      return e.onExceededSize && e.onExceededSize(P, c), !1;
    v(P), Hn({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: P,
      data: e.data,
      filename: u,
      action: e.action,
      onProgress: (O) => {
        k(O, P);
      },
      onSuccess: (O) => {
        w(O, P);
      },
      onError: (O, Y) => {
        T(O, Y, P);
      }
    });
  }, v = (P) => {
    P.uid = he(), d[P.uid] = P;
    const O = {
      status: "uploading",
      name: P.name,
      size: P.size,
      percentage: 0,
      uid: P.uid,
      showProgress: !0
    };
    o("fileList", [...s.fileList, O]);
  }, C = (P) => {
    const O = s.fileList;
    let Y;
    return O.every((W) => (Y = P.uid === W.uid ? W : null, !Y)), Y;
  }, k = (P, O) => {
    const Y = C(O);
    e.onProgress && e.onProgress(P, Y, s.fileList), o("fileList", (W) => W.uid === O.uid, "percentage", P.percent || 0);
  }, w = (P, O) => {
    const Y = C(O);
    Y && (o("fileList", (W) => W.uid === O.uid, G((W) => {
      W.status = "finished", W.response = P, W.url = e.getFileUrl && e.getFileUrl(P, W);
    })), e.onSuccess && e.onSuccess(P, Y, s.fileList), setTimeout(() => {
      o("fileList", (W) => W.uid === O.uid, G((W) => {
        W.showProgress = !1;
      }));
    }, 1e3));
  }, T = (P, O, Y) => {
    C(Y), o("fileList", (W) => W.uid === Y.uid, "status", "fail"), e.onError && e.onError(P, O, Y);
  }, I = (P) => {
    o("fileList", G((O) => {
      O.splice(O.indexOf(P), 1);
    })), delete d[P.uid], e.onRemove && e.onRemove(P, s.fileList);
  }, M = (P) => {
    P.status === "finished" && (o("previewUrl", P.url), i(!0), e.onPreview && e.onPreview(P));
  }, S = () => {
    const P = ti(s.fileList);
    d = {}, o("fileList", []), e.onClear && e.onClear(P);
  }, A = () => {
    e.disabled || D.click();
  }, F = (P) => {
    const O = d[P.uid];
    O && Hn({
      headers: e.headers,
      withCredentials: e.withCredentials,
      file: O,
      data: e.data,
      filename: u,
      action: e.action,
      onProgress: (Y) => {
        k(Y, O);
      },
      onSuccess: (Y) => {
        w(Y, O);
      },
      onError: (Y, W) => {
        T(Y, W, O);
      }
    });
  }, z = (P) => {
    P.preventDefault && P.preventDefault(), n(!1), !e.disabled && _(P.dataTransfer.files);
  }, E = (P) => {
    e.disabled || e.paste && _(P.clipboardData.files);
  }, x = (P) => {
    P.preventDefault && P.preventDefault(), n(!0);
  }, L = (P) => {
    P.preventDefault && P.preventDefault(), n(!1);
  }, R = () => s.fileList.map((P) => ({
    ...P
  }));
  let D;
  return e.ref && e.ref({
    clearFiles: () => {
      d = {}, o("fileList", []);
    },
    getFileList: R
  }), (() => {
    const P = id(), O = P.firstChild;
    O.addEventListener("change", y);
    const Y = D;
    return typeof Y == "function" ? j(Y, O) : D = O, g(P, f(B, {
      get when() {
        return e.listType === "picture";
      },
      get children() {
        return f(td, {
          get files() {
            return s.fileList;
          },
          onRemove: I,
          onPreview: M,
          onClick: A,
          get children() {
            return e.children;
          }
        });
      }
    }), null), g(P, f(B, {
      get when() {
        return e.listType !== "picture";
      },
      get children() {
        return [(() => {
          const W = nd();
          return W.addEventListener("dragleave", L), W.addEventListener("dragover", x), W.addEventListener("paste", E), W.addEventListener("drop", z), W.$$click = A, g(W, () => e.children), W;
        })(), f(Qo, {
          get files() {
            return s.fileList;
          },
          onRemove: I,
          onPreview: M,
          onClear: S,
          onRetry: F
        })];
      }
    }), null), g(P, f(_i, {
      get previewList() {
        return [s.previewUrl];
      },
      visible: [r, i]
    }), null), N((W) => {
      const ue = m(), ee = e.style, _e = e.multiple, Pe = e.webkitdirectory, Ie = e.accept;
      return W._v$ = V(P, ue, W._v$), W._v$2 = H(P, ee, W._v$2), _e !== W._v$3 && (O.multiple = W._v$3 = _e), Pe !== W._v$4 && J(O, "webkitdirectory", W._v$4 = Pe), Ie !== W._v$5 && J(O, "accept", W._v$5 = Ie), W;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0,
      _v$5: void 0
    }), P;
  })();
}
Q(["click"]);
const Yn = /* @__PURE__ */ b("<div>"), rd = /* @__PURE__ */ b('<div><div class="cm-index-list-list"></div><div class="cm-index-list-nav">'), ld = /* @__PURE__ */ b("<dl><dt>"), cd = /* @__PURE__ */ b("<dd>");
function Uh(e) {
  const t = () => e.promote ?? !0, [n, r] = we(e, "value", []), [i, l] = U(""), [c, a] = U(!1), [s, o] = U(""), [d, u] = se({
    list: [],
    listMap: {}
  });
  let m = {}, y;
  const _ = {};
  pe(() => {
    const S = [];
    m = {};
    const A = {};
    e.data.forEach((F) => {
      (F.id === void 0 || F.id === null) && (F.id = he());
      const z = {
        id: F.id
      };
      m[F.id] = F, A[F.id] = z, S.push(z), F.children && (z.children = [], F.children.forEach((E) => {
        (E.id === void 0 || E.id === null) && (E.id = he()), m[E.id] = E;
        const x = {
          id: E.id
        };
        A[E.id] = x, z.children.push(x);
      }));
    }), u({
      list: S,
      listMap: A
    });
  });
  const h = () => q(e, "cm-index-list", {
    "cm-index-list-border": e.border
  }), $ = (S) => {
    if (!e.selectable)
      return;
    const A = n(), F = S.id;
    if (S.active) {
      const z = A.indexOf(F);
      A.splice(z, 1), r(A);
    } else
      A.push(F), r([...A]);
    e.onChange && e.onChange(n()), u("listMap", S.id, "active", !S.active);
  };
  let v = null;
  const C = (S, A, F) => {
    F.preventDefault && F.preventDefault(), F.stopPropagation && F.stopPropagation();
    const z = document.querySelector(S);
    if (z) {
      t() && (o(A), a(!0), v && clearTimeout(v), v = setTimeout(() => {
        k();
      }, 1e3));
      const E = z.getBoundingClientRect().top, x = y.getBoundingClientRect().top, L = E - x;
      y.scrollTo({
        top: y.scrollTop + L,
        behavior: "smooth"
      });
    }
  }, k = () => {
    a(!1);
  }, w = () => {
    const S = y.scrollTop, A = T(S);
    l(A);
  }, T = (S) => {
    let A = "", F = Number.MAX_VALUE;
    for (const z in _) {
      const E = Math.abs(_[z] - S);
      F > E && (F = E, A = z);
    }
    return A;
  }, I = (S, A) => {
    queueMicrotask(() => {
      _[A] = S.offsetTop;
    });
  }, M = () => ({
    "cm-index-list-promote": !0,
    "cm-index-list-promote-show": c()
  });
  return (() => {
    const S = rd(), A = S.firstChild, F = A.nextSibling;
    A.addEventListener("scroll", w);
    const z = y;
    return typeof z == "function" ? j(z, A) : y = A, g(A, f(te, {
      get each() {
        return d.list;
      },
      children: (E) => {
        const x = m[E.id];
        return (() => {
          const L = ld(), R = L.firstChild;
          return j((D) => {
            I(D, E.id);
          }, L), g(R, () => x.name), g(L, f(te, {
            get each() {
              return E.children;
            },
            children: (D) => {
              const P = m[D.id];
              return (() => {
                const O = cd();
                return ye(O, "click", $.bind(null, D), !0), g(O, (() => {
                  const Y = Z(() => !!e.renderItem);
                  return () => Y() ? e.renderItem(P, D.active) : P.name;
                })()), N(() => Ve(O, D.active ? "active" : "")), O;
              })();
            }
          }), null), N(() => J(L, "id", `cm_index_list_${E.id}`)), L;
        })();
      }
    })), g(F, f(te, {
      get each() {
        return d.list;
      },
      children: (E) => {
        const x = m[E.id], L = () => i() === E.id, R = () => ({
          "cm-index-list-nav-item": !0,
          active: L()
        });
        return (() => {
          const D = Yn();
          return ye(D, "click", C.bind(null, `#cm_index_list_${E.id}`, x.id), !0), g(D, () => x.id), N((P) => V(D, R(), P)), D;
        })();
      }
    })), g(S, f(B, {
      get when() {
        return t();
      },
      get children() {
        const E = Yn();
        return g(E, s), N((x) => V(E, M(), x)), E;
      }
    }), null), N((E) => {
      const x = h(), L = e.style;
      return E._v$ = V(S, x, E._v$), E._v$2 = H(S, L, E._v$2), E;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), S;
  })();
}
Q(["click"]);
const jh = (e) => e, ad = /* @__PURE__ */ b('<div><div class="cm-list-item-main"><div class="cm-list-item-meta"></div><div class="cm-list-item-content">'), sd = /* @__PURE__ */ b('<div class="cm-list-item-avatar">'), od = /* @__PURE__ */ b('<div class="cm-list-item-body"><div class="cm-list-item-title"></div><div class="cm-list-item-desc">'), dd = /* @__PURE__ */ b('<ul class="cm-list-item-addon">');
function ud(e) {
  const t = vd(), n = t?.signal[0], r = t?.signal[1], i = () => q(e, "cm-list-item", {
    "cm-list-item-active": n && n() === e.id
  }), l = () => {
    r && r(e.id), t?.onSelect && t.onSelect(e.data);
  };
  return (() => {
    const c = ad(), a = c.firstChild, s = a.firstChild, o = s.nextSibling;
    return c.$$click = l, g(s, (() => {
      const d = Z(() => !!e.avatar);
      return () => d() ? (() => {
        const u = sd();
        return g(u, () => e.avatar), u;
      })() : null;
    })(), null), g(s, (() => {
      const d = Z(() => !!(e.title || e.desc));
      return () => d() ? (() => {
        const u = od(), m = u.firstChild, y = m.nextSibling;
        return g(m, () => e.title), g(y, () => e.desc), u;
      })() : null;
    })(), null), g(o, () => e.children), g(c, (() => {
      const d = Z(() => !!e.actions);
      return () => d() ? (() => {
        const u = dd();
        return g(u, () => e.actions), u;
      })() : null;
    })(), null), N((d) => {
      const u = i(), m = e.style;
      return d._v$ = V(c, u, d._v$), d._v$2 = H(c, m, d._v$2), d;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), c;
  })();
}
Q(["click"]);
const fd = /* @__PURE__ */ b("<div>"), hd = /* @__PURE__ */ b('<div class="cm-list-head">'), md = /* @__PURE__ */ b('<div class="cm-list-foot">'), Ai = me();
function gd(e) {
  const t = () => q(e, "cm-list", {
    "cm-list-border": e.border,
    [`cm-list-${e.size}`]: e.size
  }), [n, r] = we(e, "activeKey", "");
  return f(Ai.Provider, {
    get value() {
      return {
        signal: [n, r],
        onSelect: e.onSelect
      };
    },
    get children() {
      const i = fd();
      return g(i, (() => {
        const l = Z(() => !!e.head);
        return () => l() ? (() => {
          const c = hd();
          return g(c, () => e.head), c;
        })() : null;
      })(), null), g(i, () => e.children, null), g(i, (() => {
        const l = Z(() => !!e.foot);
        return () => l() ? (() => {
          const c = md();
          return g(c, () => e.foot), c;
        })() : null;
      })(), null), N((l) => {
        const c = t(), a = e.style;
        return l._v$ = V(i, c, l._v$), l._v$2 = H(i, a, l._v$2), l;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), i;
    }
  });
}
gd.Item = ud;
const vd = () => ge(Ai), $d = /* @__PURE__ */ b("<div><div>");
function yd(e) {
  const [t, n] = se({
    show: !1,
    status: "success",
    percent: 0
  }), r = () => q(e, "cm-loading-bar", {
    "cm-loading-bar-show": t.show
  }), i = () => ({
    "cm-loading-bar-inner": !0,
    [`cm-loading-bar-status-${t.status}`]: !!t.status
  }), l = (a) => {
    a.percent !== void 0 && n("percent", a.percent), a.status !== void 0 && n("status", a.status), a.show !== void 0 && n("show", a.show);
  }, c = () => ({
    width: `${t.percent}%`
  });
  return e.ref && e.ref({
    update: l
  }), (() => {
    const a = $d(), s = a.firstChild;
    return N((o) => {
      const d = r(), u = i(), m = c();
      return o._v$ = V(a, d, o._v$), o._v$2 = V(s, u, o._v$2), o._v$3 = H(s, m, o._v$3), o;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0
    }), a;
  })();
}
const _d = 800;
let ot, cn;
function Bt() {
  ot && (clearInterval(ot), ot = null);
}
function qn() {
  setTimeout(() => {
    Ke({
      show: !1
    }), setTimeout(() => {
      Ke({
        percent: 0
      });
    }, 200);
  }, _d);
}
function Ke(e) {
  cn.update(e);
}
function wd() {
  const e = He("cm-loading-bar-portal", "cm-loading-bar-portal");
  return e && Tt(() => f(yd, {
    ref(t) {
      const n = cn;
      typeof n == "function" ? n(t) : cn = t;
    }
  }), e), {
    start() {
      if (ot)
        return;
      let t = 0;
      Ke({
        percent: t,
        status: "success",
        show: !0
      }), ot = setInterval(() => {
        t += Math.floor(Math.random() * 3 + 1), t > 95 && Bt(), Ke({
          percent: t,
          status: "success",
          show: !0
        });
      }, 200);
    },
    finish() {
      Bt(), Ke({
        percent: 100,
        status: "success",
        show: !0
      }), qn();
    },
    error() {
      Bt(), Ke({
        percent: 100,
        status: "error",
        show: !0
      }), qn();
    }
  };
}
const Xh = wd();
function bd({
  data: e,
  validation: t = {},
  message: n = {}
}) {
  const r = {}, i = {}, l = Object.assign({}, e), c = /* @__PURE__ */ new Map(), a = async () => {
    const T = Object.keys(r);
    let I = !0;
    for (const M of T) {
      const S = r[M];
      if (!await S(k[M])) {
        I = !1;
        break;
      }
    }
    return I;
  }, s = async (T) => {
    const I = r[T];
    return !(I && !await I(k[T]));
  }, o = function(T) {
    return t ? t[T] : {};
  }, d = function(T) {
    return n ? n[T] : {};
  }, u = function() {
    const T = Object.keys(e), I = {};
    return T.forEach((M) => {
      I[M] = k[M];
    }), I;
  }, m = function(T, I) {
    for (const M in e)
      I ? w[M] = T[M] : (k[M] = T[M], v(M, T[M]));
  }, y = (T, I) => {
    r[T] = I;
  }, _ = (T, I) => {
    i[T] = I;
  }, h = (T) => {
    if (T) {
      const I = i[T];
      I && I();
    } else {
      const I = Object.keys(i);
      for (const M of I) {
        const S = i[M];
        S && S();
      }
    }
  }, $ = () => {
    m(l), h();
  }, v = (T, I) => {
    if (c.has(T)) {
      const [M, S] = c.get(T);
      S(I);
    }
  }, k = {
    ...e,
    isValid: a,
    // 别名
    validate: a,
    getFormData: u,
    setFormData: m,
    setCheckValid: y,
    getValidation: o,
    getMessage: d,
    bindController: (T, I, M) => {
      c.set(T, [I, M]);
    },
    setClearValid: _,
    clearValidates: h,
    resetFieldsValidate: h,
    checkField: s,
    resetFields: $
  }, w = new Proxy(k, {
    get(T, I, M) {
      if (c.has(I)) {
        const [S, A] = c.get(I);
        return S();
      }
      return T[I];
    },
    set(T, I, M, S) {
      T[I] = M, v(I, M);
      const A = r[I];
      return A && A(M), !0;
    }
  });
  return w;
}
const zi = me();
function Kh(e) {
  const t = bd({
    data: e.data || {},
    validation: {},
    message: {}
  }), n = () => q(e, "cm-login"), r = async () => {
    const i = await t.isValid();
    e.onSubmit && e.onSubmit(i, t);
  };
  return f(zi.Provider, {
    value: {
      onSubmit: r,
      form: t
    },
    get children() {
      return f(wc, {
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
const Pi = () => ge(zi);
function Gh(e) {
  const t = e.type ?? "primary", n = Pi(), r = () => {
    n?.onSubmit && n?.onSubmit();
  }, i = e.size ?? "large";
  return f(Ee, ie(e, {
    size: i,
    type: t,
    onClick: r,
    block: !0,
    children: "登 录"
  }));
}
function Zh(e) {
  const t = e.name ?? "username", n = e.icon ?? f(K, {
    name: "user"
  }), r = {
    require: tt().required,
    ...e.rules
  }, i = {
    require: "请输入用户名！",
    ...e.messages
  }, l = e.placeholder ?? "请输入用户名", c = e.size ?? "large";
  return f(gt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return f(ke, {
        prepend: n,
        size: c,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Jh(e) {
  const t = e.name ?? "password", n = e.icon ?? f(K, {
    name: "lock"
  }), r = {
    require: tt().required,
    ...e.rules
  }, i = {
    require: "请输入密码！",
    ...e.messages
  }, l = e.placeholder ?? "请输入密码", c = e.size ?? "large";
  return f(gt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return f(ke, {
        type: "password",
        prepend: n,
        size: c,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function Qh(e) {
  const t = e.name ?? "mobile", n = e.icon ?? f(K, {
    name: "smartphone"
  }), r = {
    require: tt().required,
    mobile: !0,
    ...e.rules
  }, i = {
    require: "请输入手机号码！",
    mobile: "输入的手机号码不正确！",
    ...e.messages
  }, l = e.placeholder ?? "请输入手机号码", c = e.size ?? "large";
  return f(gt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return f(ke, {
        prepend: n,
        size: c,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
function ph(e) {
  const t = e.name ?? "email", n = e.icon ?? f(K, {
    name: "mail"
  }), r = {
    require: tt().required,
    email: !0,
    ...e.rules
  }, i = {
    require: "请输入邮箱！",
    email: "输入的邮箱地址不正确！",
    ...e.messages
  }, l = e.placeholder ?? "请输入邮箱", c = e.size ?? "large";
  return f(gt, {
    get label() {
      return e.label;
    },
    name: t,
    rules: r,
    messages: i,
    get children() {
      return f(ke, {
        prepend: n,
        size: c,
        placeholder: l,
        get onInput() {
          return e.onInput;
        },
        autocomplete: "off"
      });
    }
  });
}
const xd = /* @__PURE__ */ b('<span class="cm-count-down-prefix">'), Cd = /* @__PURE__ */ b('<span class="cm-count-down-suffix">'), kd = /* @__PURE__ */ b('<span><span class="cm-count-down-value">');
function Ld(e) {
  return `${e}`.padStart(2, "0");
}
function Sd(e) {
  let t;
  const n = e.duration ?? 1e3, [r, i] = U(e.value), l = () => {
    let s = r();
    s <= 0 && (t && (clearInterval(t), t = null), e.onEnd && e.onEnd(), s = 0);
    const o = Ld(s), d = e.format ?? "s";
    let u = d;
    return d.match(/s+/) && (u = u.replace(/s+/, o + "")), u;
  }, c = () => {
    t = setInterval(() => {
      i(r() - 1);
    }, n);
  };
  ae(() => {
    c();
  }), ce(() => {
    clearInterval(t), t = null;
  });
  const a = () => q(e, "cm-count-down");
  return (() => {
    const s = kd(), o = s.firstChild;
    return g(s, f(B, {
      get when() {
        return e.prefix;
      },
      get children() {
        const d = xd();
        return g(d, () => e.prefix), d;
      }
    }), o), g(o, l), g(s, f(B, {
      get when() {
        return e.suffix;
      },
      get children() {
        const d = Cd();
        return g(d, () => e.suffix), d;
      }
    }), null), N((d) => {
      const u = a(), m = e.style;
      return d._v$ = V(s, u, d._v$), d._v$2 = H(s, m, d._v$2), d;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), s;
  })();
}
function em(e) {
  const [t, n] = U(e.action ?? ""), [r, i] = U(!1), l = e.name ?? "captcha", c = e.icon ?? f(K, {
    name: "key"
  }), a = {
    require: tt().required,
    ...e.rules
  }, s = {
    require: "请输入验证码！",
    ...e.messages
  }, o = e.placeholder ?? "请输入验证码", d = e.size ?? "large", u = e.countDownNumber ?? 60, m = () => t() ? f(Gt, {
    get src() {
      return t();
    }
  }) : r() ? f(Sd, {
    value: u,
    format: "s秒",
    onEnd: () => {
      i(!1);
    }
  }) : "获取验证码", y = Pi(), _ = async () => {
    const h = t();
    if (h) {
      const $ = h.split("?"), v = new URLSearchParams($[1]);
      v.set("_", `${Date.now()}`), n($[0] + "?" + v.toString());
    } else {
      const $ = y?.form;
      if (e.field && $ && !await $.checkField(e.field))
        return;
      i(!0), e.onGetCaptcha && e.onGetCaptcha();
    }
  };
  return f(gt, {
    get label() {
      return e.label;
    },
    name: l,
    rules: a,
    messages: s,
    get children() {
      return f(Ze, {
        get children() {
          return [f(ke, {
            prepend: c,
            size: d,
            placeholder: o
          }), f(Ee, {
            size: d,
            onClick: _,
            get disabled() {
              return r();
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
const Ed = /* @__PURE__ */ b('<li><div class="cm-menu-item-icon">'), Md = /* @__PURE__ */ b('<div class="cm-menu-item-cert">'), Dd = /* @__PURE__ */ b('<li><div class="cm-menu-item-icon"></div><div class="cm-menu-item-text">'), Fd = /* @__PURE__ */ b('<div class="cm-menu-item-text">');
function an(e) {
  !e.isSubmenuTitle && !e.name && console.warn("MenuItem need name prop");
  const [t, n] = U(!1), r = fn(), i = () => q(e, "cm-menu-item", {
    "cm-menu-item-disabled": e.disabled,
    "cm-menu-item-active": !e.isSubmenuTitle && e.name && r?.store.activeName === e.name
  });
  X(() => {
    let a = !1;
    if (r && l && !e.isSubmenuTitle) {
      const s = l.parentElement.getAttribute("x-name");
      a = r.store.min && s === "__root";
    }
    n(a), !a && r?.dir === "v" && setTimeout(() => {
      const s = l.parentElement.getAttribute("x-padding"), o = parseInt(s) + 16;
      l.style.paddingLeft = o + "px";
    }, 20);
  });
  let l;
  ae(() => {
    const a = l.parentElement.getAttribute("x-padding"), s = parseInt(a) + 16;
    if (l.style.paddingLeft = r?.dir === "h" ? "16px" : s + "px", !e.isSubmenuTitle) {
      const o = l.parentElement.getAttribute("x-name"), d = {
        name: e.name,
        parent: null,
        children: []
      };
      if (r && e.name)
        if (r.treeMap[e.name] = d, o === "__root")
          r?.tree.push(d);
        else {
          const u = r.treeMap[o];
          d.parent = u, u.children.push(d);
        }
    }
  });
  const c = () => {
    e.isSubmenuTitle && !r.store.min ? e.onSelect && e.onSelect() : r?.onSelect(e.name, e.data);
  };
  return f(B, {
    get when() {
      return t();
    },
    get fallback() {
      return (() => {
        const a = Dd(), s = a.firstChild, o = s.nextSibling;
        a.$$click = c;
        const d = l;
        return typeof d == "function" ? j(d, a) : l = a, g(s, () => e.icon), g(o, () => e.children), g(a, f(B, {
          get when() {
            return e.cert;
          },
          get children() {
            const u = Md();
            return g(u, f(K, {
              name: "chevron-down",
              size: 14
            })), u;
          }
        }), null), N((u) => V(a, i(), u)), a;
      })();
    },
    get children() {
      return f(Qe, {
        align: "right",
        arrow: !0,
        get content() {
          return (() => {
            const a = Fd();
            return g(a, () => e.children), a;
          })();
        },
        get children() {
          const a = Ed(), s = a.firstChild;
          a.$$click = c;
          const o = l;
          return typeof o == "function" ? j(o, a) : l = a, g(s, () => e.icon), N((d) => V(a, i(), d)), a;
        }
      });
    }
  });
}
Q(["click"]);
const Td = /* @__PURE__ */ b("<li>"), Rd = /* @__PURE__ */ b('<li><ul class="cm-menu-submenu-list">'), Ad = /* @__PURE__ */ b('<ul class="cm-menu-submenu-list">');
function tm(e) {
  e.name || console.warn("SubMenu need name prop");
  const [t, n] = U(!1), r = fn(), i = () => {
    let d = !1;
    r && r.store.openKeys && e.name && (d = r.store.openKeys[e.name]), a.style.transition = "none", a.style.height = "auto";
    const u = a.offsetHeight;
    return a.style.transition = "", d ? (a.style.height = "0px", setTimeout(() => {
      a.style.height = u + "px";
    }), setTimeout(() => {
      a.style.height = "auto";
    }, 250)) : (a.style.height = u + "px", setTimeout(() => {
      a.style.height = "0px";
    })), d;
  }, l = () => q(e, "cm-menu-submenu", {
    "cm-menu-submenu-open": i()
  });
  let c, a;
  X(() => {
    let d = !1;
    if (r && c) {
      const u = c.parentElement.getAttribute("x-name");
      d = r.store.min && u === "__root";
    }
    n(d), !d && r?.dir === "v" && setTimeout(() => {
      const u = c.parentElement.getAttribute("x-padding"), m = parseInt(u) + 16;
      c.setAttribute("x-padding", u), a.setAttribute("x-padding", m);
    });
  }), ae(() => {
    const d = c.parentElement.getAttribute("x-padding"), u = parseInt(d) + 16;
    c.setAttribute("x-padding", d), a.setAttribute("x-padding", u);
    const m = c.parentElement.getAttribute("x-name"), y = {
      name: e.name,
      parent: null,
      children: []
    };
    if (r && e.name)
      if (r.treeMap[e.name] = y, m === "__root")
        r?.tree.push(y);
      else {
        const _ = r.treeMap[m];
        y.parent = _, _.children.push(y);
      }
  });
  const s = () => {
    r?.setOpen(e.name);
  }, o = e.align || (r?.dir === "h" ? "bottom" : "rightTop");
  return f(B, {
    get when() {
      return t() || r?.dir === "h";
    },
    get fallback() {
      return (() => {
        const d = Rd(), u = d.firstChild, m = c;
        typeof m == "function" ? j(m, d) : c = d, g(d, f(an, {
          get icon() {
            return e.icon;
          },
          cert: !0,
          isSubmenuTitle: !0,
          onSelect: s,
          get children() {
            return e.title;
          }
        }), u);
        const y = a;
        return typeof y == "function" ? j(y, u) : a = u, g(u, () => e.children), N((_) => {
          const h = l(), $ = e.name;
          return _._v$ = V(d, h, _._v$), $ !== _._v$2 && J(u, "x-name", _._v$2 = $), _;
        }, {
          _v$: void 0,
          _v$2: void 0
        }), d;
      })();
    },
    get children() {
      const d = Td(), u = c;
      return typeof u == "function" ? j(u, d) : c = d, g(d, f(Oe, {
        align: o,
        get theme() {
          return r?.theme;
        },
        revers: !1,
        get menu() {
          return (() => {
            const m = Ad(), y = a;
            return typeof y == "function" ? j(y, m) : a = m, g(m, () => e.children), N(() => J(m, "x-name", e.name)), m;
          })();
        },
        get children() {
          return f(an, {
            get icon() {
              return e.icon;
            },
            cert: !0,
            isSubmenuTitle: !0,
            onSelect: s,
            get children() {
              return e.title;
            }
          });
        }
      })), N((m) => V(d, l(), m)), d;
    }
  });
}
const zd = /* @__PURE__ */ b('<li><ul class="cm-menu-group-list">');
function nm(e) {
  e.name || console.warn("MenuGroup need name prop");
  const t = () => q(e, "cm-menu-group"), n = fn();
  let r, i;
  return ae(() => {
    const l = r.parentElement.getAttribute("x-padding");
    r.setAttribute("x-padding", l), i.setAttribute("x-padding", l);
    const c = r.parentElement.getAttribute("x-name"), a = {
      name: e.name,
      parent: null,
      children: []
    };
    if (n && e.name)
      if (n.treeMap[e.name] = a, c === "__root")
        n?.tree.push(a);
      else {
        const s = n.treeMap[c];
        a.parent = s, s.children.push(a);
      }
  }), X(() => {
    let l = !1;
    if (n && r) {
      const c = r.parentElement.getAttribute("x-name");
      l = n.store.min && c === "__root";
    }
    !l && n?.dir === "v" && setTimeout(() => {
      const c = r.parentElement.getAttribute("x-padding"), a = parseInt(c) + 16;
      r.setAttribute("x-padding", c), i.setAttribute("x-padding", a);
    });
  }), (() => {
    const l = zd(), c = l.firstChild, a = r;
    typeof a == "function" ? j(a, l) : r = l, g(l, f(an, {
      get icon() {
        return e.icon;
      },
      isSubmenuTitle: !0,
      get children() {
        return e.title;
      }
    }), c);
    const s = i;
    return typeof s == "function" ? j(s, c) : i = c, g(c, () => e.children), N((o) => {
      const d = t(), u = e.name;
      return o._v$ = V(l, d, o._v$), u !== o._v$2 && J(c, "x-name", o._v$2 = u), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
const Pd = /* @__PURE__ */ b('<ul x-padding="0" x-name="__root" x-level="0">'), Ii = me();
function im(e) {
  const [t, n] = we(e, "activeName", ""), r = () => e.accordion || !1, i = () => e.theme || "light", l = () => e.dir || "v", c = () => q(e, "cm-menu", {
    [`cm-menu-${l()}`]: l(),
    ["cm-menu-min"]: e.min,
    [`cm-menu-${i()}`]: i()
  }), a = [], s = {};
  X(() => {
    const h = t();
    h && (u("activeName", h), Me(() => {
      setTimeout(() => {
        o(h);
      });
    }));
  }), X(() => {
    u("min", e.min);
  });
  const o = (h) => {
    let $ = s && s[h] && s[h].parent;
    if ($)
      for (; $; )
        d.openKeys[$.name] || _($.name), $ = $.parent;
    else
      (l() === "h" || d.min) && _(h);
  }, [d, u] = se({
    openKeys: {},
    activeName: e.activeName,
    min: e.min
  }), m = (h, $) => {
    n(h), e.onSelect && e.onSelect(h, $);
  }, y = (h, $) => {
    h.children && h.children.forEach((v) => {
      d.openKeys[v.name] && ($[v.name] = !0), y(v, $);
    });
  }, _ = (h) => {
    r() || l() === "h" ? u("openKeys", G(($) => {
      if ($[h]) {
        delete $[h];
        return;
      }
      let v = s[h];
      const C = {
        [h]: !0
      };
      for (; v.parent; )
        C[v.parent.name] = !0, v = v.parent;
      y(v, C), Object.keys($).forEach((w) => {
        C[w] || delete $[w];
      }), Object.assign($, C);
    })) : u("openKeys", G(($) => {
      $[h] ? delete $[h] : $[h] = !0;
    }));
  };
  return f(Ii.Provider, {
    get value() {
      return {
        onSelect: m,
        store: d,
        setOpen: _,
        tree: a,
        treeMap: s,
        theme: i(),
        dir: l()
      };
    },
    get children() {
      const h = Pd();
      return g(h, () => e.children), N(($) => V(h, c(), $)), h;
    }
  });
}
const fn = () => ge(Ii), Id = /* @__PURE__ */ b('<div><div class="cm-message-inner"><div class="cm-message-content">'), Nd = /* @__PURE__ */ b('<div class="cm-message-close">'), Od = /* @__PURE__ */ b("<div>");
function Vd(e) {
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
function Bd(e) {
  const [t, n] = U(!1), r = e.data;
  let i;
  const l = () => q(r, "cm-message", {
    "cm-message-visible": t(),
    [`cm-message-${r.type}`]: r.type,
    "cm-message-background": r.background
  });
  ae(() => {
    setTimeout(() => {
      n(!0);
    });
    let o = r.duration;
    o == null && (o = 4), o && setTimeout(() => {
      c();
    }, o * 1e3);
  });
  const c = () => {
    n(!1);
  }, a = () => {
    t() || (e.onClose(r), r.onClose && r.onClose());
  }, s = () => ({
    ...r.style,
    "z-index": Ye()
  });
  return (() => {
    const o = Id(), d = o.firstChild, u = d.firstChild;
    o.addEventListener("transitionend", a);
    const m = i;
    return typeof m == "function" ? j(m, o) : i = o, g(d, (() => {
      const y = Z(() => !!r.loading);
      return () => y() ? f(Je, {}) : f(K, {
        get name() {
          return Vd(r.type);
        },
        class: "cm-message-icon",
        size: 16
      });
    })(), u), g(u, () => r.content), g(d, (() => {
      const y = Z(() => !!r.closeable);
      return () => y() ? (() => {
        const _ = Nd();
        return g(_, f(K, {
          name: "x",
          class: "cm-message-close-icon",
          size: 14,
          onClick: c
        })), _;
      })() : null;
    })(), null), N((y) => {
      const _ = l(), h = s();
      return y._v$ = V(o, _, y._v$), y._v$2 = H(o, h, y._v$2), y;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), o;
  })();
}
function Hd(e) {
  return (() => {
    const t = Od();
    return g(t, f(te, {
      get each() {
        return e.data;
      },
      children: (n) => f(Bd, {
        data: n,
        get onClose() {
          return e.onClose;
        }
      })
    })), t;
  })();
}
function Yd() {
  const [e, t] = se({
    list: []
  }), n = He("cm-message-portal", "cm-messages-wrap"), r = (i) => {
    const l = e.list.filter((c) => c.key !== i.key);
    t("list", () => [...l]);
  };
  return Tt(() => f(Hd, {
    get data() {
      return e.list;
    },
    onClose: r
  }), n), {
    close: (i) => {
      const l = e.list.find((c) => c.key === i);
      r(l), l && l.onClose && l.onClose();
    },
    open: (i, l) => {
      typeof i == "string" && (i = {
        content: i
      }), i.key || (i.key = he()), i.type = l, t("list", G((c) => {
        c.push(i);
      })), n.style.zIndex = Ye();
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
const rm = Yd(), Wn = /* @__PURE__ */ b("<div>"), qd = /* @__PURE__ */ b('<span class="cm-modal-close">'), Wd = /* @__PURE__ */ b('<div><div class="cm-modal-header"></div><div class="cm-modal-body">'), Ud = /* @__PURE__ */ b('<div tabindex="1">'), jd = /* @__PURE__ */ b('<div class="cm-modal-title">'), Xd = /* @__PURE__ */ b('<div class="cm-modal-left"><div class="cm-modal-icon">'), Kd = /* @__PURE__ */ b('<div class="cm-modal-right">');
function Gd(e) {
  let t, n, r;
  const [i, l] = we(e, "visible", !1), [c, a] = U(!1);
  let s = !1, o = "";
  const d = e.footerAlign ?? "center", u = () => q(e, "cm-modal"), m = Ye(), y = () => ({
    "cm-modal-wrap": !0,
    "cm-modal-visible": i(),
    "cm-modal-fullscreen": e.fullScreen
  }), _ = () => ({
    "cm-modal-mask": !0,
    "cm-modal-mask-visible": i()
  }), h = () => {
    e.onClickClose && e.onClickClose(), $();
  }, $ = () => {
    e.onClosed && e.onClosed(), l(!1);
  }, v = () => {
    $(), e.onCancel && e.onCancel();
  }, C = async () => {
    if (e.loading && (c() || a(!0)), e.onOk) {
      const L = await e.onOk?.();
      L === void 0 && !c() && $(), L === !0 && $(), L === !1 && a(!1);
    } else
      c() || $();
  };
  X(() => {
    if (!i())
      a(!1), s && (document.body.style.overflow = o, s = !1);
    else {
      if (t) {
        const R = t.getBoundingClientRect().height;
        t.children[0].getBoundingClientRect().height > R ? (t.style.overflow = "auto", t.children[0].style.top = 0, o = window.getComputedStyle(document.body, null).overflow, o !== "hidden" && (document.body.style.overflow = "hidden", s = !0)) : (t.style.overflow = "none", s = !1), setTimeout(() => {
          t.focus();
        }, 300);
      }
      x && r && r.reset();
    }
  });
  const k = (L) => {
    E && L.target === n && l(!1);
  }, w = (L) => {
    L.keyCode === 27 && l(!1);
  }, T = "cm-modal-portal", I = e.footer ?? !0, M = e.hasCloseIcon ?? !0, S = he(), A = e.okText || "确 定", F = e.cancleText || "取 消", z = e.mask ?? !0, E = e.maskClosable ?? !0, x = e.resetPostion ?? !1;
  return f(Ft, {
    get mount() {
      return He(T, T);
    },
    get children() {
      return [f(B, {
        when: z,
        get children() {
          const L = Wn(), R = n;
          return typeof R == "function" ? j(R, L) : n = L, L.$$click = k, m - 1 != null ? L.style.setProperty("z-index", m - 1) : L.style.removeProperty("z-index"), N((D) => V(L, _(), D)), L;
        }
      }), (() => {
        const L = Ud();
        L.$$keydown = w;
        const R = t;
        return typeof R == "function" ? j(R, L) : t = L, m != null ? L.style.setProperty("z-index", m) : L.style.removeProperty("z-index"), g(L, f(jt, {
          ref(D) {
            const P = r;
            typeof P == "function" ? P(D) : r = D;
          },
          get bounds() {
            return e.bounds || "body";
          },
          get style() {
            return e.defaultPosition;
          },
          handle: '.cm-modal-header[data-id="' + S + '"]',
          get disabled() {
            return e.disabled;
          },
          get children() {
            const D = Wd(), P = D.firstChild, O = P.nextSibling;
            return J(P, "data-id", `${S}`), g(P, (() => {
              const Y = Z(() => !!e.title);
              return () => Y() ? (() => {
                const W = jd();
                return g(W, () => e.title), W;
              })() : null;
            })(), null), g(P, f(B, {
              when: M,
              get children() {
                const Y = qd();
                return Y.$$click = h, g(Y, f(K, {
                  name: "x"
                })), Y;
              }
            }), null), g(O, () => e.children), g(D, f(B, {
              when: I,
              get children() {
                const Y = Wn();
                return g(Y, f(Ee, {
                  type: "primary",
                  get loading() {
                    return c();
                  },
                  onClick: C,
                  children: A
                }), null), g(Y, f(Ee, {
                  type: "default",
                  onClick: v,
                  children: F
                }), null), N((W) => V(Y, {
                  "cm-modal-footer": !0,
                  [`cm-modal-footer-${d}`]: !!d
                }, W)), Y;
              }
            }), null), N((Y) => {
              const W = u(), ue = e.style, ee = e.bodyStyle;
              return Y._v$ = V(D, W, Y._v$), Y._v$2 = H(D, ue, Y._v$2), Y._v$3 = H(O, ee, Y._v$3), Y;
            }, {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }), D;
          }
        })), N((D) => V(L, y(), D)), L;
      })()];
    }
  });
}
function Zd() {
  const [e, t] = U(!0);
  return {
    open(n) {
      t(!0);
      let r = "";
      n.status === "success" && (r = "check-circle"), n.status === "info" && (r = "info"), n.status === "warning" && (r = "alert-circle"), n.status === "error" && (r = "x-circle"), n.status === "confirm" && (r = "help-circle");
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
      const l = He("cm-modal-portal-instance", "cm-modal-portal"), c = l ? Tt(() => f(Gd, ie(n, {
        class: "cm-modal-instance",
        get children() {
          return [(() => {
            const a = Xd(), s = a.firstChild;
            return g(s, f(K, {
              name: r,
              size: 24
            })), a;
          })(), (() => {
            const a = Kd();
            return g(a, (() => {
              const s = Z(() => typeof n.content == "function");
              return () => s() ? n.content() : n.content;
            })()), a;
          })()];
        }
      })), l) : null;
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
const lm = Zd();
Q(["click", "keydown"]);
const Jd = /* @__PURE__ */ b('<div class="cm-notification-icon">'), Qd = /* @__PURE__ */ b('<div class="cm-notification-head">'), pd = /* @__PURE__ */ b('<span class="cm-notification-btn-wrap">'), eu = /* @__PURE__ */ b('<div><div class="cm-notification-item-wrap"><a class="cm-notification-close"></a><div class="cm-notification-content"><div class="cm-notification-body">'), tu = /* @__PURE__ */ b("<div>"), nu = /* @__PURE__ */ b('<div class="cm-notification">');
function iu(e) {
  const [t, n] = U(!1), [r, i] = U(!1);
  let l;
  const c = e.data, {
    style: a,
    icon: s,
    btn: o,
    theme: d,
    title: u,
    content: m
  } = c, y = () => q(e, "cm-notification-item", {
    "cm-notification-item-width-icon": s,
    "cm-notification-item-open": t(),
    "cm-notification-item-close": r(),
    [`cm-notification-item-${d}`]: d
  });
  ae(() => {
    setTimeout(() => {
      n(!0);
    }), c.duration && setTimeout(() => {
      _();
    }, c.duration * 1e3);
  });
  const _ = () => {
    r() || (i(!0), setTimeout(() => {
      h();
    }, 250));
  }, h = () => {
    e.onClose(c.key, c.dock), c.onClose && c.onClose();
  };
  return (() => {
    const $ = eu(), v = $.firstChild, C = v.firstChild, k = C.nextSibling, w = k.firstChild, T = l;
    return typeof T == "function" ? j(T, $) : l = $, C.$$click = _, g(C, f(K, {
      name: "x",
      size: 16
    })), g(v, f(B, {
      when: s,
      get children() {
        const I = Jd();
        return g(I, f(K, {
          name: s
        })), I;
      }
    }), k), g(k, f(B, {
      when: u,
      get children() {
        const I = Qd();
        return g(I, u), I;
      }
    }), w), g(w, m), g(k, f(B, {
      when: o,
      get children() {
        const I = pd();
        return g(I, o), I;
      }
    }), null), N((I) => {
      const M = y(), S = a;
      return I._v$ = V($, M, I._v$), I._v$2 = H($, S, I._v$2), I;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), $;
  })();
}
function kt(e) {
  const t = () => e.data, n = Ye();
  return f(B, {
    get when() {
      return Z(() => !!t())() && t().length;
    },
    get children() {
      const r = tu();
      return n != null ? r.style.setProperty("z-index", n) : r.style.removeProperty("z-index"), g(r, f(te, {
        get each() {
          return t();
        },
        children: (i) => f(iu, {
          data: i,
          get onClose() {
            return e.onClose;
          }
        })
      })), N(() => Ve(r, `cm-notification-box cm-notification-${e.docker}`)), r;
    }
  });
}
function ru(e) {
  const t = () => e.data;
  return (() => {
    const n = nu();
    return g(n, f(kt, {
      get data() {
        return t().topLeft;
      },
      docker: "top-left",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, f(kt, {
      get data() {
        return t().topRight;
      },
      docker: "top-right",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, f(kt, {
      get data() {
        return t().bottomLeft;
      },
      docker: "bottom-left",
      get onClose() {
        return e.onClose;
      }
    }), null), g(n, f(kt, {
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
Q(["click"]);
function lu() {
  const [e, t] = se({
    topLeft: [],
    topRight: [],
    bottomLeft: [],
    bottomRight: []
  }), n = (i, l) => {
    const c = e[l].filter((a) => a.key !== i);
    t(l, c);
  }, r = He("cm-notice-portal", "cm-notices-wrap");
  return Tt(() => f(ru, {
    data: e,
    onClose: n
  }), r), {
    open(i) {
      i.dock || (i.dock = "topRight"), i.key === void 0 && (i.key = he()), i.duration === void 0 && (i.duration = 4.5), t(i.dock, G((l) => {
        l.push(i);
      })), r.style.zIndex = Ye();
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
const cm = lu(), cu = /* @__PURE__ */ b("<div>");
function am(e) {
  const t = () => q(e, "cm-footer-floor", {
    "cm-footer-floor-center": e.center,
    "cm-footer-floor-divider-top": e.dividerTop,
    "cm-footer-floor-divider-bottom": e.dividerBottom
  }), n = () => de(e, {
    padding: e.padding,
    color: e.color
  });
  return (() => {
    const r = cu();
    return g(r, () => e.children), N((i) => {
      const l = t(), c = n();
      return i._v$ = V(r, l, i._v$), i._v$2 = H(r, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const au = /* @__PURE__ */ b('<div class="cm-page-footer-navigations">'), su = /* @__PURE__ */ b('<div class="cm-page-footer-navigation"><dl><dt>'), ou = /* @__PURE__ */ b('<dd class="cm-page-footer-navigation-link"><a target="_blank">');
function sm(e) {
  return (() => {
    const t = au();
    return g(t, () => e.children), t;
  })();
}
function du(e) {
  return (() => {
    const t = su(), n = t.firstChild, r = n.firstChild;
    return g(r, () => e.head), g(n, () => e.children, null), t;
  })();
}
function uu(e) {
  return (() => {
    const t = ou(), n = t.firstChild;
    return g(n, () => e.icon, null), g(n, () => e.children, null), N((r) => {
      const i = e.link, l = e.style;
      return i !== r._v$ && J(n, "href", r._v$ = i), r._v$2 = H(n, l, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), t;
  })();
}
du.Link = uu;
const fu = /* @__PURE__ */ b("<div>");
function om(e) {
  const t = () => q(e, "cm-page-footer");
  return (() => {
    const n = fu();
    return g(n, () => e.children), N((r) => {
      const i = t(), l = e.style;
      return r._v$ = V(n, i, r._v$), r._v$2 = H(n, l, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const hu = /* @__PURE__ */ b("<li>");
function Un(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-prev": !0,
    "cm-pagination-num-disabled": e.current === 1
  });
  return (() => {
    const n = hu();
    return ye(n, "click", e.onClick, !0), g(n, f(K, {
      name: "chevron-left",
      size: 14
    })), N((r) => V(n, t(), r)), n;
  })();
}
Q(["click"]);
const mu = /* @__PURE__ */ b("<li>");
function jn(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-next": !0,
    "cm-pagination-num-disabled": e.disabled
  });
  return (() => {
    const n = mu();
    return ye(n, "click", e.onClick, !0), g(n, f(K, {
      name: "chevron-right",
      size: 14
    })), N((r) => V(n, t(), r)), n;
  })();
}
Q(["click"]);
const gu = /* @__PURE__ */ b("<li>");
function Ht(e) {
  const t = () => ({
    "cm-pagination-num": !0,
    "cm-pagination-item-active": e.active
  });
  return (() => {
    const n = gu();
    return ye(n, "click", e.onClick, !0), g(n, () => e.currentIndex), N((r) => V(n, t(), r)), n;
  })();
}
Q(["click"]);
const Xn = /* @__PURE__ */ b('<li class="cm-pagination-num cm-pagination-ellipse"><span class="ellipse">•••'), vu = /* @__PURE__ */ b('<ul class="cm-pagination-num-list"><span class="cm-pagination-mini-pages">/ '), $u = /* @__PURE__ */ b('<span class="cm-pagination-text mr-5">共<!>条'), yu = /* @__PURE__ */ b('<ul class="cm-pagination-num-list">'), _u = /* @__PURE__ */ b('<span class="cm-pagination-sizer">'), wu = /* @__PURE__ */ b('<span class="cm-pagination-jumper"><span class="cm-pagination-text">跳至</span><span class="cm-pagination-text">页'), bu = /* @__PURE__ */ b("<div>"), Kn = [{
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
function dm(e) {
  const t = () => q(e, "cm-pagination", {
    [`cm-pagination-${e.shape}`]: e.shape,
    [`cm-pagination-${e.size}`]: e.size
  }), n = () => e.current, r = () => e.total ?? 0, i = () => e.pageSize ?? 10, l = e.innerNear ?? 2, c = e.startEndShowNum ?? 2, a = e.showNums ?? !0, s = e.showTotal ?? !0, o = e.pages ?? Kn, d = e.showJumper ?? !0, u = e.showPage ?? !0, [m, y] = U(n());
  X(() => {
    n() != m() && y(n());
  });
  const _ = () => {
    n() > 1 && k(n() - 1);
  }, h = () => {
    n() < v() && k(n() + 1);
  }, $ = (M) => {
    k(parseInt(M, 10));
  }, v = () => r() === 0 ? 1 : Math.floor((r() - 1) / i()) + 1, C = (M) => typeof M == "number" && M >= 1, k = (M) => {
    let S = M;
    C(S) && S !== n() && (S > v() && (S = v()), y(S), e.onChange && e.onChange(S, i()));
  }, w = (M) => {
    const S = Math.floor((r() - 1) / M) + 1;
    e.onChangePageSize && e.onChangePageSize(M), n() > S && (y(1), e.onChange && e.onChange(1, i()));
  };
  function T() {
    const M = v(), S = n() > c + l + 1 ? n() - l : c + 1, A = n() + l + c >= M ? M - c : n() + l;
    return {
      start: S,
      end: A
    };
  }
  function I() {
    if (!a)
      return null;
    const M = v(), S = [], A = T(), F = n();
    for (let x = 1; x <= c; x++) {
      const L = F === x;
      S.push(f(Ht, {
        active: L,
        get onClick() {
          return k.bind(null, x);
        },
        currentIndex: x
      }));
    }
    F > c + l + 1 && S.push(Xn());
    let z = A.start;
    const E = A.end;
    for (; z <= E; z++) {
      const x = F === z;
      S.push(f(Ht, {
        get onClick() {
          return k.bind(null, z);
        },
        currentIndex: z,
        active: x
      }));
    }
    F + l + c < M && S.push(Xn());
    for (let x = M - c + 1; x <= M; x++) {
      const L = F === x;
      S.push(f(Ht, {
        active: L,
        get onClick() {
          return k.bind(null, x);
        },
        currentIndex: x
      }));
    }
    return S;
  }
  return (() => {
    const M = bu();
    return g(M, f(Te, {
      get children() {
        return [f(p, {
          get when() {
            return e.mini;
          },
          get children() {
            const S = vu(), A = S.firstChild;
            return A.firstChild, g(S, f(Un, {
              current: n,
              onClick: _
            }), A), g(S, f(ke, {
              get style() {
                return {
                  width: e.size === "small" ? "35px" : "50px"
                };
              },
              class: "mr-5",
              value: [m, y],
              get size() {
                return e.size;
              },
              onChange: $
            }), A), g(A, v, null), g(S, f(jn, {
              current: n,
              onClick: h,
              get disabled() {
                return n() === v();
              }
            }), null), S;
          }
        }), f(p, {
          get when() {
            return !e.mini;
          },
          get children() {
            return [f(B, {
              when: s,
              get children() {
                const S = $u(), A = S.firstChild, F = A.nextSibling;
                return F.nextSibling, g(S, r, F), S;
              }
            }), (() => {
              const S = yu();
              return g(S, f(Un, {
                current: n,
                onClick: _
              }), null), g(S, I, null), g(S, f(jn, {
                current: n,
                onClick: h,
                get disabled() {
                  return n() === v();
                }
              }), null), S;
            })(), f(B, {
              when: u,
              get children() {
                const S = _u();
                return g(S, f(Di, {
                  get value() {
                    return i();
                  },
                  get size() {
                    return e.size;
                  },
                  onChange: w,
                  data: o,
                  get children() {
                    return f(te, {
                      each: Kn,
                      children: (A) => f(Cs, {
                        get label() {
                          return A.label;
                        },
                        get value() {
                          return A.value;
                        }
                      })
                    });
                  }
                })), S;
              }
            }), f(B, {
              when: d,
              get children() {
                const S = wu(), A = S.firstChild, F = A.nextSibling;
                return g(S, f(ke, {
                  get style() {
                    return {
                      width: e.size === "small" ? "35px" : "50px"
                    };
                  },
                  class: "mr-5",
                  value: [m, y],
                  get size() {
                    return e.size;
                  },
                  onChange: $
                }), F), S;
              }
            })];
          }
        })];
      }
    })), N((S) => {
      const A = t(), F = e.style;
      return S._v$ = V(M, A, S._v$), S._v$2 = H(M, F, S._v$2), S;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), M;
  })();
}
function be(e, t, n) {
  if (t < 0 || t > 31 || e >>> t)
    throw new RangeError("Value out of range");
  for (let r = t - 1; r >= 0; r--)
    n.push(e >>> r & 1);
}
function Ne(e, t) {
  return (e >>> t & 1) != 0;
}
function Le(e) {
  if (!e)
    throw new Error("Assertion error");
}
var Ue;
((e) => {
  class t {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(i, l, c, a) {
      if (this.version = i, this.errorCorrectionLevel = l, i < t.MIN_VERSION || i > t.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (a < -1 || a > 7)
        throw new RangeError("Mask value out of range");
      this.size = i * 4 + 17;
      const s = [];
      for (let d = 0; d < this.size; d++)
        s.push(!1);
      for (let d = 0; d < this.size; d++)
        this.modules.push(s.slice()), this.isFunction.push(s.slice());
      this.drawFunctionPatterns();
      const o = this.addEccAndInterleave(c);
      if (this.drawCodewords(o), a == -1) {
        let d = 1e9;
        for (let u = 0; u < 8; u++) {
          this.applyMask(u), this.drawFormatBits(u);
          const m = this.getPenaltyScore();
          m < d && (a = u, d = m), this.applyMask(u);
        }
      }
      Le(0 <= a && a <= 7), this.mask = a, this.applyMask(a), this.drawFormatBits(a), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(i, l) {
      const c = e.QrSegment.makeSegments(i);
      return t.encodeSegments(c, l);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(i, l) {
      const c = e.QrSegment.makeBytes(i);
      return t.encodeSegments([c], l);
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
    static encodeSegments(i, l, c = 1, a = 40, s = -1, o = !0) {
      if (!(t.MIN_VERSION <= c && c <= a && a <= t.MAX_VERSION) || s < -1 || s > 7)
        throw new RangeError("Invalid value");
      let d, u;
      for (d = c; ; d++) {
        const h = t.getNumDataCodewords(d, l) * 8, $ = n.getTotalBits(i, d);
        if ($ <= h) {
          u = $;
          break;
        }
        if (d >= a)
          throw new RangeError("Data too long");
      }
      for (const h of [t.Ecc.MEDIUM, t.Ecc.QUARTILE, t.Ecc.HIGH])
        o && u <= t.getNumDataCodewords(d, h) * 8 && (l = h);
      const m = [];
      for (const h of i) {
        be(h.mode.modeBits, 4, m), be(h.numChars, h.mode.numCharCountBits(d), m);
        for (const $ of h.getData())
          m.push($);
      }
      Le(m.length == u);
      const y = t.getNumDataCodewords(d, l) * 8;
      Le(m.length <= y), be(0, Math.min(4, y - m.length), m), be(0, (8 - m.length % 8) % 8, m), Le(m.length % 8 == 0);
      for (let h = 236; m.length < y; h ^= 253)
        be(h, 8, m);
      const _ = [];
      for (; _.length * 8 < m.length; )
        _.push(0);
      return m.forEach((h, $) => _[$ >>> 3] |= h << 7 - ($ & 7)), new t(d, l, _, s);
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
      for (let c = 0; c < this.size; c++)
        this.setFunctionModule(6, c, c % 2 == 0), this.setFunctionModule(c, 6, c % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const i = this.getAlignmentPatternPositions(), l = i.length;
      for (let c = 0; c < l; c++)
        for (let a = 0; a < l; a++)
          c == 0 && a == 0 || c == 0 && a == l - 1 || c == l - 1 && a == 0 || this.drawAlignmentPattern(i[c], i[a]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(i) {
      const l = this.errorCorrectionLevel.formatBits << 3 | i;
      let c = l;
      for (let s = 0; s < 10; s++)
        c = c << 1 ^ (c >>> 9) * 1335;
      const a = (l << 10 | c) ^ 21522;
      Le(a >>> 15 == 0);
      for (let s = 0; s <= 5; s++)
        this.setFunctionModule(8, s, Ne(a, s));
      this.setFunctionModule(8, 7, Ne(a, 6)), this.setFunctionModule(8, 8, Ne(a, 7)), this.setFunctionModule(7, 8, Ne(a, 8));
      for (let s = 9; s < 15; s++)
        this.setFunctionModule(14 - s, 8, Ne(a, s));
      for (let s = 0; s < 8; s++)
        this.setFunctionModule(this.size - 1 - s, 8, Ne(a, s));
      for (let s = 8; s < 15; s++)
        this.setFunctionModule(8, this.size - 15 + s, Ne(a, s));
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
      const l = this.version << 12 | i;
      Le(l >>> 18 == 0);
      for (let c = 0; c < 18; c++) {
        const a = Ne(l, c), s = this.size - 11 + c % 3, o = Math.floor(c / 3);
        this.setFunctionModule(s, o, a), this.setFunctionModule(o, s, a);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(i, l) {
      for (let c = -4; c <= 4; c++)
        for (let a = -4; a <= 4; a++) {
          const s = Math.max(Math.abs(a), Math.abs(c)), o = i + a, d = l + c;
          0 <= o && o < this.size && 0 <= d && d < this.size && this.setFunctionModule(o, d, s != 2 && s != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(i, l) {
      for (let c = -2; c <= 2; c++)
        for (let a = -2; a <= 2; a++)
          this.setFunctionModule(i + a, l + c, Math.max(Math.abs(a), Math.abs(c)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(i, l, c) {
      this.modules[l][i] = c, this.isFunction[l][i] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(i) {
      const l = this.version, c = this.errorCorrectionLevel;
      if (i.length != t.getNumDataCodewords(l, c))
        throw new RangeError("Invalid argument");
      const a = t.NUM_ERROR_CORRECTION_BLOCKS[c.ordinal][l], s = t.ECC_CODEWORDS_PER_BLOCK[c.ordinal][l], o = Math.floor(t.getNumRawDataModules(l) / 8), d = a - o % a, u = Math.floor(o / a), m = [], y = t.reedSolomonComputeDivisor(s);
      for (let h = 0, $ = 0; h < a; h++) {
        const v = i.slice($, $ + u - s + (h < d ? 0 : 1));
        $ += v.length;
        const C = t.reedSolomonComputeRemainder(v, y);
        h < d && v.push(0), m.push(v.concat(C));
      }
      const _ = [];
      for (let h = 0; h < m[0].length; h++)
        m.forEach(($, v) => {
          (h != u - s || v >= d) && _.push($[h]);
        });
      return Le(_.length == o), _;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(i) {
      if (i.length != Math.floor(t.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let l = 0;
      for (let c = this.size - 1; c >= 1; c -= 2) {
        c == 6 && (c = 5);
        for (let a = 0; a < this.size; a++)
          for (let s = 0; s < 2; s++) {
            const o = c - s, u = (c + 1 & 2) == 0 ? this.size - 1 - a : a;
            !this.isFunction[u][o] && l < i.length * 8 && (this.modules[u][o] = Ne(i[l >>> 3], 7 - (l & 7)), l++);
          }
      }
      Le(l == i.length * 8);
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
        for (let c = 0; c < this.size; c++) {
          let a;
          switch (i) {
            case 0:
              a = (c + l) % 2 == 0;
              break;
            case 1:
              a = l % 2 == 0;
              break;
            case 2:
              a = c % 3 == 0;
              break;
            case 3:
              a = (c + l) % 3 == 0;
              break;
            case 4:
              a = (Math.floor(c / 3) + Math.floor(l / 2)) % 2 == 0;
              break;
            case 5:
              a = c * l % 2 + c * l % 3 == 0;
              break;
            case 6:
              a = (c * l % 2 + c * l % 3) % 2 == 0;
              break;
            case 7:
              a = ((c + l) % 2 + c * l % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[l][c] && a && (this.modules[l][c] = !this.modules[l][c]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let i = 0;
      for (let s = 0; s < this.size; s++) {
        let o = !1, d = 0;
        const u = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[s][m] == o ? (d++, d == 5 ? i += t.PENALTY_N1 : d > 5 && i++) : (this.finderPenaltyAddHistory(d, u), o || (i += this.finderPenaltyCountPatterns(u) * t.PENALTY_N3), o = this.modules[s][m], d = 1);
        i += this.finderPenaltyTerminateAndCount(o, d, u) * t.PENALTY_N3;
      }
      for (let s = 0; s < this.size; s++) {
        let o = !1, d = 0;
        const u = [0, 0, 0, 0, 0, 0, 0];
        for (let m = 0; m < this.size; m++)
          this.modules[m][s] == o ? (d++, d == 5 ? i += t.PENALTY_N1 : d > 5 && i++) : (this.finderPenaltyAddHistory(d, u), o || (i += this.finderPenaltyCountPatterns(u) * t.PENALTY_N3), o = this.modules[m][s], d = 1);
        i += this.finderPenaltyTerminateAndCount(o, d, u) * t.PENALTY_N3;
      }
      for (let s = 0; s < this.size - 1; s++)
        for (let o = 0; o < this.size - 1; o++) {
          const d = this.modules[s][o];
          d == this.modules[s][o + 1] && d == this.modules[s + 1][o] && d == this.modules[s + 1][o + 1] && (i += t.PENALTY_N2);
        }
      let l = 0;
      for (const s of this.modules)
        l = s.reduce((o, d) => o + (d ? 1 : 0), l);
      const c = this.size * this.size, a = Math.ceil(Math.abs(l * 20 - c * 10) / c) - 1;
      return Le(0 <= a && a <= 9), i += a * t.PENALTY_N4, Le(0 <= i && i <= 2568888), i;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const i = Math.floor(this.version / 7) + 2, l = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (i * 2 - 2)) * 2, c = [6];
        for (let a = this.size - 7; c.length < i; a -= l)
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
      let l = (16 * i + 128) * i + 64;
      if (i >= 2) {
        const c = Math.floor(i / 7) + 2;
        l -= (25 * c - 10) * c - 55, i >= 7 && (l -= 36);
      }
      return Le(208 <= l && l <= 29648), l;
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
      for (let a = 0; a < i - 1; a++)
        l.push(0);
      l.push(1);
      let c = 1;
      for (let a = 0; a < i; a++) {
        for (let s = 0; s < l.length; s++)
          l[s] = t.reedSolomonMultiply(l[s], c), s + 1 < l.length && (l[s] ^= l[s + 1]);
        c = t.reedSolomonMultiply(c, 2);
      }
      return l;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(i, l) {
      const c = l.map((a) => 0);
      for (const a of i) {
        const s = a ^ c.shift();
        c.push(0), l.forEach((o, d) => c[d] ^= t.reedSolomonMultiply(o, s));
      }
      return c;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(i, l) {
      if (i >>> 8 || l >>> 8)
        throw new RangeError("Byte out of range");
      let c = 0;
      for (let a = 7; a >= 0; a--)
        c = c << 1 ^ (c >>> 7) * 285, c ^= (l >>> a & 1) * i;
      return Le(c >>> 8 == 0), c;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(i) {
      const l = i[1];
      Le(l <= this.size * 3);
      const c = l > 0 && i[2] == l && i[3] == l * 3 && i[4] == l && i[5] == l;
      return (c && i[0] >= l * 4 && i[6] >= l ? 1 : 0) + (c && i[6] >= l * 4 && i[0] >= l ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(i, l, c) {
      return i && (this.finderPenaltyAddHistory(l, c), l = 0), l += this.size, this.finderPenaltyAddHistory(l, c), this.finderPenaltyCountPatterns(c);
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
    constructor(i, l, c) {
      if (this.mode = i, this.numChars = l, this.bitData = c, l < 0)
        throw new RangeError("Invalid argument");
      this.bitData = c.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(i) {
      const l = [];
      for (const c of i)
        be(c, 8, l);
      return new n(n.Mode.BYTE, i.length, l);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(i) {
      if (!n.isNumeric(i))
        throw new RangeError("String contains non-numeric characters");
      const l = [];
      for (let c = 0; c < i.length; ) {
        const a = Math.min(i.length - c, 3);
        be(parseInt(i.substring(c, c + a), 10), a * 3 + 1, l), c += a;
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
      let c;
      for (c = 0; c + 2 <= i.length; c += 2) {
        let a = n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(c)) * 45;
        a += n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(c + 1)), be(a, 11, l);
      }
      return c < i.length && be(n.ALPHANUMERIC_CHARSET.indexOf(i.charAt(c)), 6, l), new n(n.Mode.ALPHANUMERIC, i.length, l);
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
        be(i, 8, l);
      else if (i < 16384)
        be(2, 2, l), be(i, 14, l);
      else if (i < 1e6)
        be(6, 3, l), be(i, 21, l);
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
      let c = 0;
      for (const a of i) {
        const s = a.mode.numCharCountBits(l);
        if (a.numChars >= 1 << s)
          return 1 / 0;
        c += 4 + s + a.bitData.length;
      }
      return c;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(i) {
      i = encodeURI(i);
      const l = [];
      for (let c = 0; c < i.length; c++)
        i.charAt(c) != "%" ? l.push(i.charCodeAt(c)) : (l.push(parseInt(i.substring(c + 1, c + 3), 16)), c += 2);
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
})(Ue || (Ue = {}));
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
})(Ue || (Ue = {}));
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
})(Ue || (Ue = {}));
const at = Ue, xu = /* @__PURE__ */ b("<img>"), Cu = /* @__PURE__ */ b("<canvas>"), ku = /* @__PURE__ */ b("<div>"), Lu = {
  L: at.QrCode.Ecc.LOW,
  M: at.QrCode.Ecc.MEDIUM,
  Q: at.QrCode.Ecc.QUARTILE,
  H: at.QrCode.Ecc.HIGH
}, Su = 128, Eu = "L", Ni = "#FFFFFF", Mu = "#000000", Du = !1, Fu = 0.25, Tu = 4, Ru = 0;
function Au(e, t = 0) {
  const n = [];
  return e.forEach(function(r, i) {
    let l = null;
    r.forEach(function(c, a) {
      if (!c && l !== null) {
        n.push(`M${l + t} ${i + t}h${a - l}v1H${l + t}z`), l = null;
        return;
      }
      if (a === r.length - 1) {
        if (!c)
          return;
        l === null ? n.push(`M${a + t},${i + t} h1v1H${a + t}z`) : n.push(`M${l + t},${i + t} h${a + 1 - l}v1H${l + t}z`);
        return;
      }
      c && l === null && (l = a);
    });
  }), n.join("");
}
function zu(e, t) {
  return t != null ? Math.floor(t) : e ? Tu : Ru;
}
function Pu(e, t, n, r) {
  if (r == null)
    return null;
  const i = e.length + n * 2, l = Math.floor(t * Fu), c = i / t, a = (r.width || l) * c, s = (r.height || l) * c, o = r.x == null ? e.length / 2 - a / 2 : r.x * c, d = r.y == null ? e.length / 2 - s / 2 : r.y * c;
  let u = null;
  if (r.excavate) {
    const m = Math.floor(o), y = Math.floor(d), _ = Math.ceil(a + o - m), h = Math.ceil(s + d - y);
    u = {
      x: m,
      y,
      w: _,
      h
    };
  }
  return {
    x: o,
    y: d,
    h: s,
    w: a,
    excavation: u
  };
}
function Iu(e, t) {
  return e.slice().map((n, r) => r < t.y || r >= t.y + t.h ? n : n.map((i, l) => l < t.x || l >= t.x + t.w ? i : !1));
}
const Nu = function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
}();
function Ou(e) {
  const {
    value: t,
    size: n = Su,
    level: r = Eu,
    bgColor: i = Ni,
    color: l = Mu,
    includeMargin: c = Du,
    marginSize: a,
    style: s,
    icon: o,
    ref: d,
    ...u
  } = e;
  let {
    imageSettings: m
  } = e;
  m = m ?? o ? {
    excavate: !0
  } : void 0;
  const y = o;
  let _, h;
  d && d({
    download: () => {
      const w = _.toDataURL("image/png");
      if ("download" in document.createElement("a")) {
        const T = document.createElement("a");
        T.download = "", T.style.display = "none", T.href = w, document.body.appendChild(T), T.click(), URL.revokeObjectURL(T.href), document.body.removeChild(T);
      }
    }
  });
  const [$, v] = U(!1);
  X(() => {
    if (_) {
      const w = _.getContext("2d");
      if (!w)
        return;
      let T = at.QrCode.encodeText(e.value, Lu[r]).getModules();
      const I = zu(c, a), M = T.length + I * 2;
      w.clearRect(0, 0, M, M);
      const S = Pu(T, n, I, m), A = h, F = $() && S != null && A !== null && A.complete && A.naturalHeight !== 0 && A.naturalWidth !== 0;
      F && S.excavation != null && (T = Iu(T, S.excavation));
      const z = window.devicePixelRatio || 1;
      _.height = _.width = n * z;
      const E = n / M * z;
      w.scale(E, E), w.fillStyle = i, w.fillRect(0, 0, M, M), w.fillStyle = l, Nu ? w.fill(new Path2D(Au(T, I))) : T.forEach(function(x, L) {
        x.forEach(function(R, D) {
          R && w.fillRect(D + I, L + I, 1, 1);
        });
      }), F && w.drawImage(A, S.x + I, S.y + I, S.w, S.h);
    }
  }), X(() => {
    v(!1);
  });
  const C = {
    height: n + "px",
    width: n + "px",
    ...s
  };
  let k = null;
  return y != null && (k = (() => {
    const w = xu(), T = h;
    return typeof T == "function" ? j(T, w) : h = w, w.addEventListener("load", () => {
      v(!0);
    }), J(w, "src", y), w.style.setProperty("display", "none"), w;
  })()), [(() => {
    const w = Cu(), T = _;
    return typeof T == "function" ? j(T, w) : _ = w, J(w, "height", n), J(w, "width", n), Ce(w, u, !1, !1), N((I) => H(w, C, I)), w;
  })(), k];
}
function um(e) {
  const t = () => q(e, "cm-qrcode");
  return (() => {
    const n = ku();
    return g(n, f(Ou, e)), N((r) => {
      const i = t(), l = e.bgColor || Ni;
      return r._v$ = V(n, i, r._v$), l !== r._v$2 && ((r._v$2 = l) != null ? n.style.setProperty("background-color", l) : n.style.removeProperty("background-color")), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
const Vu = /* @__PURE__ */ b('<div><div class="cm-sbs-right-panel"></div><div class="cm-sbs-left-panel"></div><div class="cm-sbs-handler"><div class="cm-sbs-track"><div class="cm-sbs-line"></div><div class="cm-sbs-line"></div><div class="cm-sbs-line">');
function fm(e) {
  const t = () => q(e, "cm-side-by-side"), [n, r] = U(50), [i, l] = se({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  });
  let c;
  X(() => {
    const m = c.getBoundingClientRect();
    let y = Me(() => n());
    y = y + i.deltaX / m.width * 100, y = Math.min(y, 100), y = Math.max(y, 0), r(y);
  });
  const a = (m) => {
    if (typeof m.button == "number" && m.button !== 0)
      return !1;
    l("dragging", !0);
    const y = m.clientX, _ = m.clientY;
    l("x", y), l("y", _), document.addEventListener("mousemove", s, !1), document.addEventListener("mouseup", o, !1);
  }, s = (m) => {
    const y = m.clientX - i.x, _ = m.clientY - i.y;
    l("x", m.clientX), l("y", m.clientY), l("deltaX", y), l("deltaY", _);
  }, o = (m) => {
    l("dragging", !1), document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", o), l("deltaX", 0), l("deltaY", 0);
  }, d = () => ({
    "clip-path": `inset(0 ${100 - n()}% 0 0)`
  }), u = () => ({
    left: `${n()}%`
  });
  return ce(() => {
    le || (document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", o));
  }), (() => {
    const m = Vu(), y = m.firstChild, _ = y.nextSibling, h = _.nextSibling, $ = c;
    return typeof $ == "function" ? j($, m) : c = m, g(y, () => e.right), g(_, () => e.left), h.$$mousedown = a, N((v) => {
      const C = t(), k = e.style, w = d(), T = u();
      return v._v$ = V(m, C, v._v$), v._v$2 = H(m, k, v._v$2), v._v$3 = H(_, w, v._v$3), v._v$4 = H(h, T, v._v$4), v;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), m;
  })();
}
Q(["mousedown"]);
const Bu = /* @__PURE__ */ b("<div>"), Hu = /* @__PURE__ */ b("<ul>"), Yu = /* @__PURE__ */ b("<li>");
function qu(e) {
  const t = e.size ?? "medium", n = e.shape ?? "circle", r = () => q(e, "cm-skeleton-item", {
    [`cm-skeleton-${e.type}`]: e.type,
    [`cm-skeleton-${e.type}-${t}`]: t,
    [`cm-skeleton-${e.type}-${n}`]: n,
    ["cm-skeleton-inline"]: e.inline
  }), i = () => de(e, {
    width: typeof e.size == "number" ? e.size + "px" : e.width,
    height: typeof e.size == "number" ? e.size + "px" : e.height
  });
  return (() => {
    const l = Bu();
    return N((c) => {
      const a = r(), s = i();
      return c._v$ = V(l, a, c._v$), c._v$2 = H(l, s, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
const $t = (e) => (t) => f(qu, ie({
  type: e
}, t)), Wu = $t("avatar"), Uu = $t("image"), ju = $t("title"), Xu = $t("button"), Ku = $t("item");
function Gu(e) {
  const t = e.rows ?? 4, n = () => q(e, "cm-skeleton-paragraph"), r = new Array(t).fill(1), i = () => de(e, {
    width: e.width
  });
  return (() => {
    const l = Hu();
    return g(l, f(te, {
      each: r,
      children: (c, a) => {
        const s = {};
        return e.width && e.width instanceof Array && (s.width = e.width[a()]), (() => {
          const o = Yu();
          return H(o, s), o;
        })();
      }
    })), N((c) => {
      const a = n(), s = i();
      return c._v$3 = V(l, a, c._v$3), c._v$4 = H(l, s, c._v$4), c;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), l;
  })();
}
const Zu = /* @__PURE__ */ b("<div>");
function it(e) {
  const t = () => q(e, "cm-skeleton", {
    "cm-skeleton-active": e.active
  }), n = () => de(e, {
    width: e.width,
    height: e.height
  });
  return f(B, {
    get when() {
      return e.loading;
    },
    get fallback() {
      return e.children;
    },
    get children() {
      const r = Zu();
      return g(r, () => e.placeholder), N((i) => {
        const l = t(), c = n();
        return i._v$ = V(r, l, i._v$), i._v$2 = H(r, c, i._v$2), i;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), r;
    }
  });
}
it.Avatar = Wu;
it.Image = Uu;
it.Title = ju;
it.Button = Xu;
it.Item = Ku;
it.Paragraph = Gu;
const Ju = /* @__PURE__ */ b('<div><div></div><div class="cm-slpit-handler-wrap"><div><div class="cm-split-handler-bar-wrap"></div></div></div><div>'), Qu = /* @__PURE__ */ b('<div class="cm-split-handler-bar">');
function hm(e) {
  const t = e.dir || "v", n = () => q(e, "cm-split-wrap", {
    [`cm-split-wrap-${t}`]: t
  });
  let r = e.split;
  r && r < 1 && (r = r * 100 + "%");
  const [i, l] = U(r || "50%"), c = e.min || 40;
  let a, s;
  const o = () => ({
    "cm-split-handler": !0,
    "cm-split-dragging": _.dragging,
    [`cm-split-handler-${t}`]: !!t
  }), d = li(e.children);
  d.prev || console.warn("Split need prev Slot Element"), d.next || console.warn("Split need next Slot Element"), X(() => {
    const k = a.getBoundingClientRect(), w = t === "v" ? k.width : k.height;
    let T = t === "v" ? s.style.width : s.style.height;
    T.indexOf("px") > -1 ? T = parseFloat(T) / w * 100 : T = parseFloat(T);
    const I = e.max ? e.max / w * 100 : 100 - c / w * 100;
    T = T + (t === "v" ? _.deltaX : _.deltaY) / w * 100, T = Math.max(T, c / w * 100), T = Math.min(T, I), l(T + "%");
  });
  const u = () => ({
    [`${t === "v" ? "width" : "height"}`]: i()
  }), m = () => ({
    [`${t === "v" ? "left" : "top"}`]: i()
  }), y = {
    flex: "1"
  }, [_, h] = se({
    dragging: !1,
    x: NaN,
    y: NaN,
    deltaX: 0,
    deltaY: 0
  }), $ = (k) => {
    if (typeof k.button == "number" && k.button !== 0)
      return !1;
    h("dragging", !0);
    const w = k.clientX, T = k.clientY;
    h("x", w), h("y", T), document.addEventListener("mousemove", v, !1), document.addEventListener("mouseup", C, !1);
  }, v = (k) => {
    const w = k.clientX - _.x, T = k.clientY - _.y;
    h("x", k.clientX), h("y", k.clientY), h("deltaX", w), h("deltaY", T);
  }, C = (k) => {
    h("dragging", !1), document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", C), h("deltaX", 0), h("deltaY", 0);
  };
  return ce(() => {
    le || (document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", C));
  }), (() => {
    const k = Ju(), w = k.firstChild, T = w.nextSibling, I = T.firstChild, M = I.firstChild, S = T.nextSibling, A = a;
    typeof A == "function" ? j(A, k) : a = k;
    const F = s;
    return typeof F == "function" ? j(F, w) : s = w, Ve(w, `cm-split-panel cm-split-${t === "v" ? "left" : "top"}`), g(w, () => d.prev), I.$$mousedown = $, g(M, f(te, {
      each: [1, 2, 3, 4, 5, 6, 7, 8],
      children: () => Qu()
    })), H(S, y), Ve(S, `cm-split-panel cm-split-${t === "v" ? "right" : "bottom"}`), g(S, () => d.next), N((z) => {
      const E = n(), x = u(), L = m(), R = o();
      return z._v$ = V(k, E, z._v$), z._v$2 = H(w, x, z._v$2), z._v$3 = H(T, L, z._v$3), z._v$4 = V(I, R, z._v$4), z;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), k;
  })();
}
Q(["mousedown"]);
const pu = /* @__PURE__ */ b('<div class="cm-step-head-inner">'), ef = /* @__PURE__ */ b('<div class="cm-step-head-inner"><span>'), tf = /* @__PURE__ */ b('<div class="cm-step-description">'), nf = /* @__PURE__ */ b('<div><div class="cm-step-head"></div><div class="cm-step-main"><div class="cm-step-title">');
function rf(e) {
  const t = () => {
    if (e.status)
      return e.status;
    let l = "";
    return e.current + 1 > e.index && (l = "finished"), e.current + 1 === e.index && (l = "process"), l || "wait";
  }, n = () => {
    let l = "";
    return e.current + 1 > e.index && (l = "done"), e.current + 1 === e.index && (l = "active"), l;
  }, r = () => q(e, "cm-steps-item", {
    [`cm-steps-status-${t()}`]: t(),
    [`cm-steps-status-${n()}`]: n()
  }), i = () => {
    let l = "";
    return e.icon ? l = e.icon : t() === "finished" ? l = (() => {
      const c = pu();
      return g(c, f(K, {
        name: "check"
      })), c;
    })() : t() === "error" ? l = f(K, {
      name: "x-circle",
      size: 26
    }) : t() === "warning" ? l = f(K, {
      name: "alert-triangle",
      size: 26
    }) : l = (() => {
      const c = ef(), a = c.firstChild;
      return g(a, () => e.index), c;
    })(), l;
  };
  return (() => {
    const l = nf(), c = l.firstChild, a = c.nextSibling, s = a.firstChild;
    return g(c, i), g(s, () => e.title), g(a, f(B, {
      get when() {
        return e.description;
      },
      get children() {
        const o = tf();
        return g(o, () => e.description), o;
      }
    }), null), N((o) => {
      const d = r(), u = e.style;
      return o._v$ = V(l, d, o._v$), o._v$2 = H(l, u, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
function lf(e) {
  return e;
}
const cf = /* @__PURE__ */ b("<div>");
function af(e) {
  const t = ze(() => e.children), n = () => t.toArray(), r = () => q(e, "cm-steps", {
    [`cm-steps-${e.size}`]: e.size,
    "cm-steps-vertical": e.dir === "v"
  });
  return (() => {
    const i = cf();
    return g(i, f(te, {
      get each() {
        return n();
      },
      children: (l, c) => f(rf, ie(l, {
        get index() {
          return c() + 1;
        },
        get current() {
          return e.current || 0;
        }
      }))
    })), N((l) => {
      const c = r(), a = e.style;
      return l._v$ = V(i, c, l._v$), l._v$2 = H(i, a, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
af.Step = lf;
const sf = /* @__PURE__ */ b('<span class="cm-table-sort">'), of = /* @__PURE__ */ b('<span class="cm-table-resize">'), df = /* @__PURE__ */ b('<th><div class="cm-table-cell">'), uf = /* @__PURE__ */ b('<span class="cm-table-tree-level">'), ff = /* @__PURE__ */ b('<span class="cm-table-cell-tooltip-content">'), hf = /* @__PURE__ */ b('<td><div class="cm-table-cell">'), mf = /* @__PURE__ */ b('<span class="cm-table-tree-icon-empty">'), gf = /* @__PURE__ */ b('<span class="cm-table-cell-ellipsis">'), vf = /* @__PURE__ */ b("<div>");
function ht(e) {
  let t;
  const n = e.column, r = e.colIndex, i = Yi();
  ae(() => {
    setTimeout(() => {
      c();
    });
  });
  const l = () => ({
    "cm-table-head-col": e.type === "th",
    "cm-table-cell-fixed-left-last": n.fixedLeftLast && e.showFixedLeft,
    "cm-table-cell-fixed-right-first": n.fixedRightFirst && e.showFixedRight
  });
  X(() => {
    n.width, n._, c();
  });
  const c = () => {
    if (n.fixed && t && !e.placeholder) {
      if (n.fixed === "left") {
        t.style.position = "static";
        const h = t.closest(".cm-table");
        if (h) {
          const $ = h.querySelector("thead");
          let v = 0;
          for (let C = 1; C <= r; C++) {
            const k = $.querySelector("th:nth-child(" + C + ")");
            k && (v += k.getBoundingClientRect().width);
          }
          t.style.position = "sticky", t.style.left = v + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-left"), n.fixedLeftLast && e.showFixedLeft && t.classList.add("cm-table-cell-fixed-left-last");
        }
      }
      if (n.fixed === "right") {
        const h = t.closest(".cm-table");
        if (h) {
          const $ = h.querySelector("thead"), v = $.querySelectorAll("th").length;
          let C = 0;
          for (let k = r + 2; k <= v; k++) {
            const w = $.querySelector("th:nth-child(" + k + ")");
            console.log(w), C += w.getBoundingClientRect().width;
          }
          t.style.position = "sticky", t.style.right = C + "px", t.style.zIndex = e.type === "th" ? 3 : 1, t.classList.add("cm-table-cell-fixed-right"), n.fixedRightFirst && e.showFixedRight && t.classList.add("cm-table-cell-fixed-right-first");
        }
      }
    }
  }, a = () => e.data._showChildren ? "minus-square" : "plus-square", s = (h) => {
    i && i.onRowChecked(e.data, h);
  }, o = (h) => {
    i && i.onHeadChecked(h);
  }, d = (h) => {
    i && i.onSort(n, h);
  }, u = () => {
    i && i.onShowChildren(e.data);
  }, m = () => {
    i && i.onExpand(n, e.data);
  }, y = (h) => {
    i && i.onDragStart(n, h);
  }, _ = () => {
    const h = e.column;
    return e.type === "td" ? h.type === "index" ? e.index + 1 : h.type === "checkbox" ? f(Be, {
      get disabled() {
        return e.data._disabled;
      },
      get checked() {
        return e.data._checked;
      },
      onChange: s
    }) : e.data._type === "expandChildren" ? e.data.render ? e.data.render() : null : h.type === "expand" ? f(K, {
      name: "chevron-right",
      get class() {
        return `cm-table-expand ${e.data._expand ? "cm-table-expand-open" : ""}`;
      },
      onClick: m
    }) : h.render && typeof h.render == "function" ? h.render(e.data[h.name], h, e.data) : e.data[h.name] : h.type === "checkbox" ? f(Be, {
      get checked() {
        return e.checkedAll;
      },
      onChange: o
    }) : e.column.title;
  };
  return f(Te, {
    get children() {
      return [f(p, {
        get when() {
          return e.type === "th";
        },
        get children() {
          const h = df(), $ = h.firstChild;
          return j((v) => {
            t = v, e.ref && e.ref(v);
          }, h), g($, _, null), g($, f(B, {
            get when() {
              return n.sort;
            },
            get children() {
              const v = sf();
              return g(v, f(K, {
                name: "chevron-up",
                get class() {
                  return n.sortType === "asc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return d.bind(null, "asc");
                }
              }), null), g(v, f(K, {
                name: "chevron-down",
                get class() {
                  return n.sortType === "desc" ? "cm-table-sort-active" : "";
                },
                get onClick() {
                  return d.bind(null, "desc");
                }
              }), null), v;
            }
          }), null), g($, f(B, {
            get when() {
              return n.resize && n.width && i && i.border;
            },
            get children() {
              const v = of();
              return v.$$mousedown = y, v;
            }
          }), null), N((v) => {
            const C = l(), k = e.colIndex;
            return v._v$ = V(h, C, v._v$), k !== v._v$2 && J(h, "data-index", v._v$2 = k), v;
          }, {
            _v$: void 0,
            _v$2: void 0
          }), h;
        }
      }), f(p, {
        get when() {
          return e.type === "td";
        },
        get children() {
          const h = hf(), $ = h.firstChild, v = t;
          return typeof v == "function" ? j(v, h) : t = h, g($, f(B, {
            get when() {
              return n.tree;
            },
            get children() {
              return [(() => {
                const C = uf();
                return N(() => `${e.data._level * 16}px` != null ? C.style.setProperty("padding-left", `${e.data._level * 16}px`) : C.style.removeProperty("padding-left")), C;
              })(), f(B, {
                get when() {
                  return e.data.children && e.data.children.length;
                },
                get fallback() {
                  return mf();
                },
                get children() {
                  return f(K, {
                    get name() {
                      return a();
                    },
                    class: "cm-table-tree-icon",
                    onClick: u
                  });
                }
              })];
            }
          }), null), g($, f(B, {
            get when() {
              return n.ellipsis || n.tooltip;
            },
            get fallback() {
              return _();
            },
            get children() {
              return f(B, {
                get when() {
                  return n.tooltip;
                },
                get fallback() {
                  return (() => {
                    const C = gf();
                    return g(C, _), C;
                  })();
                },
                get children() {
                  return f(Qe, {
                    arrow: !0,
                    get align() {
                      return n.tooltipAlign || "top";
                    },
                    get theme() {
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
                        const C = vf();
                        return g(C, _), C;
                      })();
                    },
                    get children() {
                      const C = ff();
                      return g(C, _), C;
                    }
                  });
                }
              });
            }
          }), null), N((C) => {
            const k = l(), w = e.colSpan, T = e.rowSpan;
            return C._v$3 = V(h, k, C._v$3), w !== C._v$4 && J(h, "colspan", C._v$4 = w), T !== C._v$5 && J(h, "rowspan", C._v$5 = T), C;
          }, {
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0
          }), h;
        }
      })];
    }
  });
}
Q(["mousedown"]);
const $f = /* @__PURE__ */ b('<colgroup class="cm-table-colgroup">'), yf = /* @__PURE__ */ b('<col class="cm-table-col">');
function sn(e) {
  return (() => {
    const t = $f();
    return g(t, f(te, {
      get each() {
        return e.data.columns;
      },
      children: (n, r) => (() => {
        const i = yf();
        return N(() => J(i, "width", n._width)), i;
      })()
    })), t;
  })();
}
const _f = /* @__PURE__ */ b('<div class="cm-table-header"><table><thead><tr>');
function wf(e) {
  let t, n;
  const r = (l) => {
    const c = l.target;
    if (c.tagName === "THEAD") {
      const a = c.getBoundingClientRect();
      e.onResizeHeader(a.width, a.height), n.style.height = a.height + "px";
    } else
      setTimeout(() => {
        const a = c.getBoundingClientRect(), s = c.closest(".cm-table-body").getBoundingClientRect();
        a.height > s.height ? n.style.overflowY = "scroll" : n.style.overflowY = "";
      });
  };
  ae(() => {
    const l = new ResizeObserver((s) => {
      s.forEach((o) => r(o));
    });
    l.observe(t);
    const a = t.closest(".cm-table").querySelector(".cm-table-body-wrap");
    l.observe(a), ce(() => {
      l.unobserve(t), l.unobserve(a);
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
  return X(() => {
    n && (n.scrollLeft = e.data.headerLeft);
  }), (() => {
    const l = _f(), c = l.firstChild, a = c.firstChild, s = a.firstChild, o = n;
    typeof o == "function" ? j(o, l) : n = l, g(c, f(sn, {
      get data() {
        return e.data;
      }
    }), a);
    const d = t;
    return typeof d == "function" ? j(d, a) : t = a, g(s, f(te, {
      get each() {
        return e.data.columns;
      },
      children: (u, m) => f(ht, {
        column: u,
        type: "th",
        get showFixedLeft() {
          return e.data.showFixedLeft;
        },
        get colIndex() {
          return m();
        },
        get showFixedRight() {
          return e.data.showFixedRight;
        },
        get checkedAll() {
          return e.data.checkedAll;
        },
        ref: (y) => {
        }
      })
    })), N((u) => H(l, i(), u)), l;
  })();
}
const bf = /* @__PURE__ */ b("<tr>"), xf = /* @__PURE__ */ b('<tr><td><div class="cm-table-emprty-cell">暂无数据'), Cf = /* @__PURE__ */ b('<div><table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'), kf = /* @__PURE__ */ b('<table class="cm-table-body-wrap"><thead><tr></tr></thead><tbody>'), Lf = /* @__PURE__ */ b('<div class="cm-table-body">'), Sf = (e) => f(Oi, {
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
    const n = e.ref;
    typeof n == "function" ? n(t) : e.ref = t;
  }
});
function Oi(e) {
  const t = Yi(), n = () => {
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
    const l = bf(), c = e.ref;
    return typeof c == "function" ? j(c, l) : e.ref = l, l.$$click = n, g(l, f(Te, {
      get children() {
        return [f(p, {
          get when() {
            return e.data._type === "expandChildren";
          },
          get children() {
            return f(ht, {
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
        }), f(p, {
          get when() {
            return e.data._type !== "expandChildren";
          },
          get children() {
            return f(te, {
              get each() {
                return e.store.columns;
              },
              children: (a, s) => {
                let [o, d] = [1, 1];
                if (t && t.spanMethod) {
                  const u = t.spanMethod(e.data, a, e.index, s());
                  u && ([o, d] = u);
                }
                return f(B, {
                  when: o && d,
                  fallback: null,
                  get children() {
                    return f(ht, {
                      type: "td",
                      get data() {
                        return e.data;
                      },
                      column: a,
                      get index() {
                        return e.index;
                      },
                      get colIndex() {
                        return s();
                      },
                      get showFixedLeft() {
                        return e.store.showFixedLeft;
                      },
                      get showFixedRight() {
                        return e.store.showFixedRight;
                      },
                      rowSpan: o,
                      colSpan: d
                    });
                  }
                });
              }
            });
          }
        })];
      }
    })), N((a) => {
      const s = r(), o = i();
      return a._v$ = V(l, s, a._v$), a._v$2 = H(l, o, a._v$2), a;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
function Gn(e) {
  return (() => {
    const t = xf(), n = t.firstChild;
    return N(() => J(n, "colspan", e.store.columns.length)), t;
  })();
}
function Ef(e) {
  let t;
  const [n, r] = U(), i = () => {
    const s = e.data.columns;
    let o = 0;
    return s.forEach((d) => {
      o += d._width || 0;
    }), o;
  };
  X(() => {
    e.data.data;
    const s = e.data.headerSize.height;
    if (e.virtual) {
      const o = e.height ?? document.documentElement.clientHeight;
      r(o - s);
    } else
      Promise.resolve().then(() => {
        const d = t.querySelector(".cm-table-body-wrap").getBoundingClientRect().height;
        if (e.height && d > e.height - s) {
          const u = e.height - s;
          r(u);
        }
      });
  });
  const l = () => {
    e.onScroll(t.scrollLeft, t.clientWidth, t.scrollWidth);
  };
  let c, a;
  return (() => {
    const s = Lf();
    s.addEventListener("scroll", l);
    const o = t;
    return typeof o == "function" ? j(o, s) : t = s, s.style.setProperty("display", "block"), s.style.setProperty("width", "100%"), s.style.setProperty("overflow", "auto"), s.style.setProperty("position", "relative"), g(s, f(Te, {
      get children() {
        return [f(p, {
          get when() {
            return e.virtual;
          },
          get children() {
            const d = Cf(), u = d.firstChild, m = u.firstChild, y = m.firstChild, _ = m.nextSibling, h = c;
            typeof h == "function" ? j(h, d) : c = d, d.style.setProperty("min-width", "100%"), d.style.setProperty("will-change", "transform"), d.style.setProperty("box-sizing", "border-box"), d.style.setProperty("contain", "strict"), d.style.setProperty("position", "absolute"), d.style.setProperty("top", "0"), d.style.setProperty("left", "0"), g(u, f(sn, {
              get data() {
                return e.data;
              }
            }), m), m.style.setProperty("display", "none"), g(y, f(te, {
              get each() {
                return e.data.columns;
              },
              children: (v, C) => f(ht, {
                column: v,
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
            const $ = a;
            return typeof $ == "function" ? j($, _) : a = _, g(_, f(Mi, {
              scrollElement: t,
              contentElement: c,
              bodyElement: a,
              get items() {
                return e.data.data;
              },
              itemEstimatedSize: 50,
              get maxHeight() {
                return n() || e.height;
              },
              get itemComponent() {
                return {
                  component: Sf,
                  props: {
                    store: e.data
                  }
                };
              }
            }), null), g(_, f(B, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return f(Gn, {
                  get store() {
                    return e.data;
                  }
                });
              }
            }), null), N(() => i() + "px" != null ? d.style.setProperty("width", i() + "px") : d.style.removeProperty("width")), d;
          }
        }), f(p, {
          get when() {
            return !e.virtual;
          },
          get children() {
            const d = kf(), u = d.firstChild, m = u.firstChild, y = u.nextSibling, _ = a;
            return typeof _ == "function" ? j(_, d) : a = d, g(d, f(sn, {
              get data() {
                return e.data;
              }
            }), u), u.style.setProperty("display", "none"), g(m, f(te, {
              get each() {
                return e.data.columns;
              },
              children: (h, $) => f(ht, {
                column: h,
                type: "th",
                placeholder: !0,
                get colIndex() {
                  return $();
                },
                get checkedAll() {
                  return e.data.checkedAll;
                }
              })
            })), g(y, f(te, {
              get each() {
                return e.data.data;
              },
              children: (h, $) => f(Oi, {
                data: h,
                get index() {
                  return $();
                },
                get store() {
                  return e.data;
                }
              })
            }), null), g(y, f(B, {
              get when() {
                return !e.data.data || !e.data.data.length;
              },
              get children() {
                return f(Gn, {
                  get store() {
                    return e.data;
                  }
                });
              }
            }), null), d;
          }
        })];
      }
    })), N(() => n() + "px" != null ? s.style.setProperty("height", n() + "px") : s.style.removeProperty("height")), s;
  })();
}
Q(["click"]);
function Zn(e) {
  let t = -1, n = Number.MAX_VALUE;
  return e && (e.forEach((r, i) => {
    r.id = r.id ?? he(), r.fixed === "left" && (t = Math.max(t, i)), r.fixed === "right" && (n = Math.min(n, i));
  }), t > -1 && e[t] && (e[t].fixedLeftLast = !0), n < Number.MAX_VALUE && e[n] && (e[n].fixedRightFirst = !0)), {
    maxFixedLeft: t,
    minFixedRight: n
  };
}
function Mf(e, t, n, r, i, l) {
  (e >= 0 || t < Number.MAX_VALUE) && (n("showFixedLeft", r > 0), n("showFixedRight", i + r < l));
}
function Jn(e, t) {
  let n = e ?? [];
  return n = [...n], n.forEach((r, i) => {
    r.id = r[t] ?? he(), r._originSort = i;
  }), n = Ff(e, t), n;
}
function Df(e, t, n) {
  const r = [...t.data];
  n.sortType === "" ? r.sort((i, l) => i._originSort - l._originSort > 0 ? 1 : -1) : n.sortMethod && typeof n.sortMethod == "function" ? r.sort(n.sortMethod) : r.sort((i, l) => {
    const c = n.name ?? "";
    return /^[0-9\.]+$/g.test(i[c]) ? (n.sortType === "asc" ? 1 : -1) * (i[c] - l[c]) > 0 ? 1 : -1 : (n.sortType === "asc" ? 1 : -1) * i[c].localeCompare(l[c]);
  }), e("data", r);
}
function Vi(e, t, n, r, i) {
  e.forEach((l) => {
    l.id = l[i] ?? he(), l._level = n, l._show = r, t.push(l), l.children && l.children.length && Vi(l.children, t, n + 1, !!l._showChildren, i);
  });
}
function Ff(e, t) {
  const n = [];
  return Vi(e, n, 0, !0, t), n;
}
const hn = (e, t) => {
  e[t] && e[t].children && e[t].children.forEach((n) => {
    n._show = !1, hn(e, n.id);
  });
}, Tf = (e, t) => {
  const n = e[t];
  n && n.children && n.children.forEach((r) => {
    r._show = n._showChildren, hn(e, r.id);
  });
};
function Rf(e, t) {
  e("data", (n) => n.id === t.id, G((n) => n._showChildren = !n._showChildren)), e("data", G((n) => {
    const r = t.children.map((l) => l.id), i = {};
    n.forEach((l) => {
      i[l.id] = l;
    }), r.forEach((l) => {
      i[l] && (i[l]._show = t._showChildren), t._showChildren ? Tf(i, l) : hn(i, l);
    });
  }));
}
function Af(e, t, n, r) {
  e("columns", (i) => i.name === n.name, G((i) => {
    i.sortType === r ? i.sortType = "" : i.sortType = r;
  })), n.sort !== "custom" && Df(e, t, n);
}
function zf(e, t, n) {
  e("data", G((r) => {
    let i = -1;
    const l = r.find((c, a) => {
      const s = c.id === n.id;
      return s && (i = a), s;
    });
    l._expand ? (r.splice(i + 1, 1), l._expand = !1) : (l._expand = !0, r.splice(i + 1, 0, {
      _type: "expandChildren",
      _show: !0,
      column: t,
      render: t.render?.bind(null, n)
    }));
  }));
}
const Pf = (e, t, n) => {
  if (typeof n.button == "number" && n.button !== 0)
    return !1;
  e("resizing", !0);
  const r = n.target.getBoundingClientRect().right, i = n.target.closest(".cm-table-wrap").getBoundingClientRect().left;
  e("posX", r - i), e("startX", r - i), e("x", n.clientX), e("resizeId", t.id);
}, If = (e, t, n) => {
  if (e.resizing) {
    const r = n.clientX - e.x;
    t("x", n.clientX);
    const i = e.posX + r;
    t("posX", i);
  }
}, Nf = (e, t, n) => {
  t("resizing", !1), t("columns", (i) => i.id === e.resizeId, G((i) => {
    let l = i.width ? parseFloat(i.width) + (e.posX - e.startX) : void 0;
    l && i.minWidth && (l = Math.max(l, i.minWidth)), l && i.maxWidth && (l = Math.min(l, i.maxWidth)), i.width = l ? l + "px" : void 0;
  })), Bi(e, t, n);
  let r;
  e.columns.find((i, l) => {
    const c = i.id === e.resizeId;
    return c && (r = e.columns[l + 1] ? e.columns[l + 1].id : void 0), c;
  }), t("columns", (i) => i.id === r, G((i) => {
    i._ = he();
  })), t("posX", 0);
}, Bi = (e, t, n) => {
  let r = n.querySelector(".cm-table").getBoundingClientRect().width;
  const i = n.querySelector(".cm-table-body");
  if (i.offsetHeight < i.scrollHeight) {
    const s = i.offsetWidth - i.clientWidth;
    r -= s;
  }
  const c = e.columns.filter((s) => s.width), a = c.reduce((s, o) => s + (o.width ? parseFloat(o.width) : 0), 0);
  t("columns", G((s) => {
    const o = s.filter((d) => !d.width);
    if (o.length > 0) {
      const d = Math.max(r - a, 0), u = d / o.length;
      let m = d;
      o.filter((h) => h.minWidth || h.maxWidth).forEach((h) => {
        let $ = u;
        h.minWidth && ($ = Math.max($, h.minWidth)), h.maxWidth && ($ = Math.min($, h.maxWidth)), m -= $, h._width = $;
      });
      const y = o.filter((h) => !(h.minWidth || h.maxWidth)), _ = m / y.length;
      y.forEach((h) => {
        h._width = _;
      });
    }
  })), c.forEach((s) => {
    const o = s.width ? parseFloat(s.width) : 0;
    t("columns", (d) => s.id === d.id, G((d) => {
      d._width = o;
    }));
  });
}, Of = /* @__PURE__ */ b('<div><div class="cm-table-resize-helper"></div><div class="cm-table-loading"></div><div class="cm-table">'), Hi = me();
function mm(e) {
  const t = () => q(e, "cm-table-wrap", {
    "cm-table-border": e.border,
    "cm-table-stripe": e.stripe,
    "cm-table-small": e.size === "small",
    "cm-table-resizing": o.resizing
  });
  let n;
  const {
    maxFixedLeft: r,
    minFixedRight: i
  } = Zn(e.columns), l = e.rowKey ?? "id", [c, a] = e.selectedRowKeys ? e.selectedRowKeys : [];
  let s = Jn(e.data, l);
  X(() => {
    s = Jn(e.data, l), d("data", s), d("checkedAll", !1);
  }), X(() => {
    Zn(e.columns), d("columns", e.columns ?? []), d("showFixedLeft", !1), d("showFixedRight", !0);
  });
  const [o, d] = se({
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
  }), u = (E) => {
    const x = o.data.find((L) => L._highlight);
    x && d("data", (L) => L.id === x.id, G((L) => L._highlight = !1)), d("data", (L) => L.id === E.id, G((L) => L._highlight = !0)), e.onRowSelect && e.onRowSelect(E, x);
  }, m = (E, x) => {
    d("data", (O) => O.id === E.id, G((O) => O._checked = x));
    let L = !1, R = 0, D = 0;
    const P = [];
    o.data.forEach((O) => {
      O._disabled || D++, O._checked && (P.push(O.id), R++, L = "indeterminate");
    }), R >= D && (L = !0), P.join(",") !== c?.().join(",") && a?.(P), d("checkedAll", L), e.onRowChecked && e.onRowChecked(E, x);
  };
  X(() => {
    const E = c?.();
    o.data, E && E.length > 0 ? d("data", (D) => E.includes(D.id) && !D._checked, G((D) => D._checked = !0)) : d("data", (D) => D._checked, G((D) => D._checked = !1));
    let x = !1, L = 0, R = 0;
    Me(() => {
      o.data.forEach((D) => {
        D._disabled || R++, D._checked && (L++, x = "indeterminate");
      });
    }), L >= R && (x = !0), d("checkedAll", x);
  });
  const y = (E) => {
    d("checkedAll", E), d("data", (R) => E ? !R._disabled && !R._checked : !R._disabled && R._checked, G((R) => R._checked = E));
    const x = [], L = o.data.filter((R) => (R._checked && x.push(R.id), R._checked));
    x.join(",") !== c?.().join(",") && a?.(x), e.onCheckedAll && e.onCheckedAll(L);
  }, _ = (E, x) => {
    Af(d, o, E, x), e.onSort && e.onSort(E, E.sortType);
  }, h = (E) => {
    Rf(d, E);
  }, $ = (E, x) => {
    zf(d, E, x);
  }, v = (E, x) => {
    Pf(d, E, x), document.addEventListener("mousemove", C, !1), document.addEventListener("mouseup", k, !1);
  }, C = (E) => {
    If(o, d, E);
  }, k = () => {
    document.removeEventListener("mousemove", C), document.removeEventListener("mouseup", k), Nf(o, d, n);
  }, w = () => ({
    display: o.resizing ? "block" : "none",
    left: o.posX + "px"
  }), T = () => o.data.filter((E) => E._checked), I = (E, x) => {
    const L = o.data.find((R) => {
      R.id;
    });
    m(L, x);
  }, M = (E, x) => {
    d("columns", E, "_width", x);
  }, S = (E, x) => {
    d("headerSize", "width", E), d("headerSize", "height", x);
  }, A = (E, x, L) => {
    Mf(r, i, d, E, x, L), o.headerLeft !== E && d("headerLeft", E);
  };
  e.ref && e.ref({
    clearSelect() {
      d("data", (E) => E._highlight, G((E) => E._highlight = !1));
    },
    checkAll(E) {
      y(E);
    },
    getAllChecked() {
      return T();
    },
    setChecked: I
  }), ae(() => {
    const E = n.querySelector(".cm-table-body"), x = new ResizeObserver((L) => {
      L.forEach((R) => {
        Bi(o, d, n);
      });
    });
    x.observe(E), ce(() => {
      x.unobserve(E);
    });
  });
  const F = () => ({
    ...e.style,
    "max-height": e.height ? `${e.height}px` : ""
    // 'display': 'flex',
    // 'flex-direction': 'column'
  }), z = () => !!e.height;
  return f(Hi.Provider, {
    get value() {
      return {
        onSelectRow: u,
        onRowChecked: m,
        onHeadChecked: y,
        onSort: _,
        onShowChildren: h,
        onExpand: $,
        onDragStart: v,
        highlight: e.highlight,
        border: e.border,
        spanMethod: e.spanMethod
      };
    },
    get children() {
      const E = Of(), x = E.firstChild, L = x.nextSibling, R = L.nextSibling, D = n;
      return typeof D == "function" ? j(D, E) : n = E, g(E, f(B, {
        get when() {
          return e.loading;
        },
        fallback: null,
        get children() {
          return f(yi, {
            type: "dot",
            get title() {
              return e.loadingText || "";
            }
          });
        }
      }), R), g(R, f(wf, {
        data: o,
        get sticky() {
          return z();
        },
        onInitColumnWidth: M,
        onResizeHeader: S,
        get virtual() {
          return e.virtual;
        }
      }), null), g(R, f(Ef, {
        data: o,
        onScroll: A,
        get height() {
          return e.height;
        },
        get virtual() {
          return e.virtual;
        }
      }), null), N((P) => {
        const O = t(), Y = w(), W = F();
        return P._v$ = V(E, O, P._v$), P._v$2 = H(x, Y, P._v$2), P._v$3 = H(R, W, P._v$3), P;
      }, {
        _v$: void 0,
        _v$2: void 0,
        _v$3: void 0
      }), E;
    }
  });
}
const Yi = () => ge(Hi), Vf = /* @__PURE__ */ b("<div>");
function gm(e) {
  const t = () => q(e, "cm-table-style-layout-row");
  return (() => {
    const n = Vf();
    return g(n, () => e.children), N((r) => V(n, t(), r)), n;
  })();
}
const Bf = /* @__PURE__ */ b("<div>");
function vm(e) {
  const t = {};
  e.flex != null && (t.flex = `1 1 ${e.flex * 100}%`);
  const n = () => de(e, t), r = () => q(e, "cm-table-style-layout-col");
  return (() => {
    const i = Bf();
    return g(i, () => e.children), N((l) => {
      const c = r(), a = n();
      return l._v$ = V(i, c, l._v$), l._v$2 = H(i, a, l._v$2), l;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), i;
  })();
}
const Hf = /* @__PURE__ */ b("<div>");
function $m(e) {
  const t = Wf(), n = () => q(e, "cm-table-style-layout-label", {
    [`cm-table-style-layout-label-${e.verticalAlign}`]: e.verticalAlign,
    required: !!e.required
  }), r = t.labelWidth, i = () => de(e, {
    flex: `0 0 ${(e.width || r) + "px"}`
  });
  return (() => {
    const l = Hf();
    return g(l, () => e.children), N((c) => {
      const a = n(), s = i();
      return c._v$ = V(l, a, c._v$), c._v$2 = H(l, s, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })();
}
const Yf = /* @__PURE__ */ b("<div>");
function ym(e) {
  const t = () => q(e, "cm-table-style-layout-value", {
    column: !!e.column,
    row: !!e.row,
    [`cm-table-style-layout-value-${e.verticalAlign}`]: !!e.verticalAlign
  }), n = () => de(e, {
    "justify-content": e.justify
  });
  return (() => {
    const r = Yf();
    return g(r, () => e.children), N((i) => {
      const l = t(), c = n();
      return i._v$ = V(r, l, i._v$), i._v$2 = H(r, c, i._v$2), i;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), r;
  })();
}
const qf = /* @__PURE__ */ b("<div>"), qi = me({
  labelWidth: 100
}), Wf = () => ge(qi);
function _m(e) {
  const t = () => q(e, "cm-table-style-layout");
  return f(qi.Provider, {
    get value() {
      return {
        labelWidth: e.labelWidth || 100
      };
    },
    get children() {
      const n = qf();
      return g(n, () => e.children), N((r) => {
        const i = t(), l = e.style;
        return r._v$ = V(n, i, r._v$), r._v$2 = H(n, l, r._v$2), r;
      }, {
        _v$: void 0,
        _v$2: void 0
      }), n;
    }
  });
}
const wm = (e) => e, Uf = /* @__PURE__ */ b('<div><div class="cm-tabs-header-wrap"><div class="cm-tabs-active-line"></div><div class="cm-tabs-scroll"><ul class="cm-tabs-header"></ul></div><div class="cm-tabs-prev"></div><div class="cm-tabs-next"></div></div><div class="cm-tabs-content">'), jf = /* @__PURE__ */ b("<li>"), Xf = /* @__PURE__ */ b("<div>");
function bm(e) {
  let t, n, r;
  const i = () => q(e, "cm-tabs", {
    "cm-tabs-card": e.card,
    "cm-tabs-overflow": a.scroll
  }), l = ze(() => e.children), c = () => l.toArray(), [a, s] = se({
    activeName: "",
    tabs: [],
    scroll: !1,
    scrollLeft: 0
  });
  X(() => {
    s("tabs", c()), Promise.resolve().then(() => {
      h();
    });
  });
  const o = () => {
    const v = n.getBoundingClientRect().width;
    let C = a.scrollLeft + v;
    C = Math.min(0, C), r.style.transform = `translate(${C}px, 0)`, s("scrollLeft", C);
  }, d = () => {
    const v = n.getBoundingClientRect().width, C = r.getBoundingClientRect().width;
    let k = a.scrollLeft - v;
    const w = v - C;
    k = Math.max(w, k), r.style.transform = `translate(${k}px, 0)`, s("scrollLeft", k);
  }, u = (v) => {
    s("tabs", G((C) => {
      C.push(v);
    })), setTimeout(() => {
      h();
    });
  }, m = (v) => {
    s("activeName", v.name), e.onTabClick && e.onTabClick(v);
  }, y = (v, C) => {
    C.preventDefault && C.preventDefault(), C.stopPropagation && C.stopPropagation();
    const k = a.tabs.filter((w) => w.name !== v);
    a.activeName === v && s("activeName", k[k.length - 1].name), s("tabs", k), e.onRemove && e.onRemove(v), h();
  }, _ = () => {
    const v = a.activeName;
    let C = 0;
    a.tabs.forEach((w, T) => {
      w.name === v && (C = T);
    });
    const k = {
      transform: `translate(${-C * 100}%, 0)`
    };
    return e.duration !== void 0 && typeof e.duration == "number" && (k["transition-duration"] = e.duration + "ms"), k;
  };
  X(() => {
    const v = Me(() => a.activeName);
    e.activeName && v !== e.activeName && s("activeName", e.activeName ?? "");
  }), X(() => {
    s("tabs", c());
  }), ae(() => {
    h();
  });
  const h = () => {
    const v = n.getBoundingClientRect().width, C = r.getBoundingClientRect().width;
    C > v && !a.scroll && s("scroll", !0), C < v && a.scroll && (s("scroll", !1), o());
  }, $ = () => {
    if (!e.card) {
      if (!r)
        return;
      const v = a.activeName;
      let C = 0;
      a.tabs.forEach((E, x) => {
        E.name === v && (C = x);
      });
      const w = r.querySelectorAll(".cm-tabs-header-item")[C];
      if (!w)
        return;
      const T = r.closest(".cm-tabs-header-wrap"), I = w.querySelector(".cm-tabs-close"), M = I ? I.getBoundingClientRect().width : 0, S = w.getBoundingClientRect(), A = T.getBoundingClientRect(), F = S.left - A.left, z = S.width - M;
      return t.style.width = `${z}px`, t.style.left = `${F}px`, {
        width: `${z}px`,
        left: `${F}px`
      };
    }
  };
  return e.ref && e.ref({
    addTab: u
  }), (() => {
    const v = Uf(), C = v.firstChild, k = C.firstChild, w = k.nextSibling, T = w.firstChild, I = w.nextSibling, M = I.nextSibling, S = C.nextSibling, A = t;
    typeof A == "function" ? j(A, k) : t = k;
    const F = n;
    typeof F == "function" ? j(F, w) : n = w;
    const z = r;
    return typeof z == "function" ? j(z, T) : r = T, g(T, f(te, {
      get each() {
        return a.tabs;
      },
      children: (E) => {
        const x = () => ({
          "cm-tabs-header-item": !0,
          "cm-tabs-header-item-active": E.name === a.activeName,
          "cm-tabs-header-item-disabled": E.disabled
        });
        return (() => {
          const L = jf();
          return ye(L, "click", m.bind(null, E), !0), g(L, () => E.icon, null), g(L, () => E.title, null), g(L, f(B, {
            get when() {
              return E.closeable;
            },
            get children() {
              return f(K, {
                name: "x",
                get onClick() {
                  return y.bind(null, E.name);
                },
                class: "cm-tabs-close",
                size: 12
              });
            }
          }), null), N((R) => V(L, x(), R)), L;
        })();
      }
    })), g(C, f(B, {
      get when() {
        return e.extra;
      },
      get children() {
        return e.extra;
      }
    }), I), I.$$click = o, g(I, f(K, {
      name: "chevron-left",
      size: 14
    })), M.$$click = d, g(M, f(K, {
      name: "chevron-right",
      size: 14
    })), g(S, f(te, {
      get each() {
        return a.tabs;
      },
      children: (E) => {
        const x = () => q(E, "cm-tab-panel", {
          "cm-tab-panel-active": E.name === a.activeName
        });
        return (() => {
          const L = Xf();
          return g(L, () => E.children), N((R) => V(L, x(), R)), L;
        })();
      }
    })), N((E) => {
      const x = i(), L = e.style, R = $(), D = _();
      return E._v$ = V(v, x, E._v$), E._v$2 = H(v, L, E._v$2), E._v$3 = H(k, R, E._v$3), E._v$4 = H(S, D, E._v$4), E;
    }, {
      _v$: void 0,
      _v$2: void 0,
      _v$3: void 0,
      _v$4: void 0
    }), v;
  })();
}
Q(["click"]);
const Kf = /* @__PURE__ */ b('<div class="cm-timeline-time">'), Gf = /* @__PURE__ */ b('<div class="cm-timeline-item"><div class="cm-timeline-item-tail"></div><div></div><div class="cm-timeline-item-content">');
function Zf(e) {
  const t = e.color ?? "blue", n = () => q(e, "cm-timeline-item-head", {
    [`cm-timeline-item-head-${t}`]: t,
    "cm-timeline-item-head-custom": e.icon,
    "cm-timeline-item-head-fill": e.fill
  });
  return (() => {
    const r = Gf(), i = r.firstChild, l = i.nextSibling, c = l.nextSibling;
    return g(l, () => e.icon), g(c, () => e.children, null), g(c, f(B, {
      get when() {
        return e.time;
      },
      get children() {
        const a = Kf();
        return g(a, () => e.time), a;
      }
    }), null), N((a) => V(l, n(), a)), r;
  })();
}
const Jf = /* @__PURE__ */ b("<div>");
function Qf(e) {
  const t = () => q(e, "cm-timeline", {
    [`cm-timeline-${e.mode}`]: e.mode
  });
  return (() => {
    const n = Jf();
    return g(n, () => e.children), N((r) => {
      const i = t(), l = e.style;
      return r._v$ = V(n, i, r._v$), r._v$2 = H(n, l, r._v$2), r;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), n;
  })();
}
Qf.Item = Zf;
async function pf(e) {
  if (le)
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
const eh = /* @__PURE__ */ b('<span class="cm-typograghy-copyed">'), th = /* @__PURE__ */ b("<div>"), nh = /* @__PURE__ */ b('<span class="cm-typograghy-copy">');
function xm(e) {
  const [t, n] = U(!1), r = () => e.size || "normal", i = () => q(e, "cm-typograghy-paragraph", {
    [`cm-typograghy-paragraph-${r()}`]: r(),
    [`cm-typograghy-paragraph-${e.type}`]: !!e.type,
    "cm-typograghy-extended": e.spacing === "extended"
  });
  let l;
  async function c() {
    const a = await pf(e.copyText ?? l.innerText);
    n(a), a && (e.onCopy && e.onCopy(), setTimeout(() => {
      n(!1);
    }, 4e3));
  }
  return (() => {
    const a = th(), s = l;
    return typeof s == "function" ? j(s, a) : l = a, g(a, () => e.children, null), g(a, f(B, {
      get when() {
        return e.copyable;
      },
      get children() {
        return f(B, {
          get when() {
            return t();
          },
          get fallback() {
            return (() => {
              const o = nh();
              return o.$$click = c, g(o, f(K, {
                name: "copy"
              })), o;
            })();
          },
          get children() {
            const o = eh();
            return g(o, f(K, {
              name: "check"
            })), o;
          }
        });
      }
    }), null), N((o) => {
      const d = e.style, u = i();
      return o._v$ = H(a, d, o._v$), o._v$2 = V(a, u, o._v$2), o;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), a;
  })();
}
Q(["click"]);
const ih = /* @__PURE__ */ b("<h1>"), rh = /* @__PURE__ */ b("<h2>"), lh = /* @__PURE__ */ b("<h3>"), ch = /* @__PURE__ */ b("<h4>"), ah = /* @__PURE__ */ b("<h5>"), sh = /* @__PURE__ */ b("<h6>");
function Cm(e) {
  const t = () => e.heading || 1, n = () => q(e, "cm-typograghy-title", `cm-typograghy-h${t()}`, {
    "cm-typograghy-title-inline": e.inline,
    [`cm-typograghy-title-prefix-${e.prefix}`]: e.prefix
  }), r = () => de(e, {
    "background-image": e.gradient ? `linear-gradient(${e.gradient.join(",")})` : "",
    color: e.gradient ? "transparent" : "",
    ["--cm-title-prefix-width"]: e.prefixWidth ?? (e.prefix === "bar" ? 4 : 8),
    ["--cm-title-prefix-gap"]: e.prefixGap ?? 16,
    ["--cm-title-prefix-color"]: typeof e.prefixColor == "string" ? e.prefixColor : "",
    ["--cm-title-prefix-gradient"]: e.prefixColor instanceof Array ? e.prefixColor.join(",") : ""
  }), i = [() => (() => {
    const l = ih();
    return g(l, () => e.children), N((c) => {
      const a = n(), s = r();
      return c._v$ = V(l, a, c._v$), c._v$2 = H(l, s, c._v$2), c;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), l;
  })(), () => (() => {
    const l = rh();
    return g(l, () => e.children), N((c) => {
      const a = n(), s = r();
      return c._v$3 = V(l, a, c._v$3), c._v$4 = H(l, s, c._v$4), c;
    }, {
      _v$3: void 0,
      _v$4: void 0
    }), l;
  })(), () => (() => {
    const l = lh();
    return g(l, () => e.children), N((c) => {
      const a = n(), s = r();
      return c._v$5 = V(l, a, c._v$5), c._v$6 = H(l, s, c._v$6), c;
    }, {
      _v$5: void 0,
      _v$6: void 0
    }), l;
  })(), () => (() => {
    const l = ch();
    return g(l, () => e.children), N((c) => {
      const a = n(), s = r();
      return c._v$7 = V(l, a, c._v$7), c._v$8 = H(l, s, c._v$8), c;
    }, {
      _v$7: void 0,
      _v$8: void 0
    }), l;
  })(), () => (() => {
    const l = ah();
    return g(l, () => e.children), N((c) => {
      const a = n(), s = r();
      return c._v$9 = V(l, a, c._v$9), c._v$10 = H(l, s, c._v$10), c;
    }, {
      _v$9: void 0,
      _v$10: void 0
    }), l;
  })(), () => (() => {
    const l = sh();
    return g(l, () => e.children), N((c) => {
      const a = n(), s = r();
      return c._v$11 = V(l, a, c._v$11), c._v$12 = H(l, s, c._v$12), c;
    }, {
      _v$11: void 0,
      _v$12: void 0
    }), l;
  })()];
  return f(Wi, {
    get component() {
      return i[t() - 1];
    }
  });
}
const oh = /* @__PURE__ */ b("<span><a>");
function km(e) {
  const [t, n] = oe(e, ["classList", "class", "children", "type", "disabled", "link", "icon", "mark", "code", "underline", "deleted", "strong", "size", "onCopy", "gradient"]), r = () => t.size || "normal", i = () => q(e, "cm-text cm-text-link", {
    [`cm-text-${t.type}`]: t.type,
    "cm-text-disabled": t.disabled,
    "cm-text-underline": t.underline,
    "cm-text-deleted": t.deleted,
    "cm-text-strong": t.strong,
    [`cm-text-${r()}`]: r()
  }), l = () => de(e, {
    "background-image": t.gradient ? `linear-gradient(${t.gradient.join(",")})` : "",
    color: e.gradient ? "transparent" : ""
  });
  return (() => {
    const c = oh(), a = c.firstChild;
    return Ce(a, ie(n, {
      get style() {
        return l();
      },
      get href() {
        return t.link;
      }
    }), !1, !0), g(a, () => t.icon, null), g(a, () => t.children, null), N((s) => V(c, i(), s)), c;
  })();
}
function dh(e) {
  return Object.keys(e).map((t) => `${t}: ${e[t]};`).join(" ");
}
function Qn() {
  return window.devicePixelRatio || 1;
}
function Yt(e, t, n, r) {
  e.translate(t, n), e.rotate(Math.PI / 180 * Number(r)), e.translate(-t, -n);
}
const uh = (e, t) => {
  let n = !1;
  return e.removedNodes.length && (n = Array.from(e.removedNodes).some((r) => r === t)), e.type === "attributes" && e.target === t && (n = !0), n;
}, fh = /* @__PURE__ */ b("<div>"), qt = 2, pn = 3;
function Lm(e) {
  const t = () => q(e, "cm-watermark");
  let n, r, i = !1;
  const l = () => e.gap ?? [100, 100], c = () => l()?.[0] ?? 100, a = () => l()?.[1] ?? 100, s = () => c() / 2, o = () => a() / 2, d = () => e.offset?.[0] ?? s(), u = () => e.offset?.[1] ?? o(), m = () => e.font?.fontSize ?? 14, y = () => e.font?.fontWeight ?? "normal", _ = () => e.font?.fontStyle ?? "normal", h = () => e.font?.fontFamily ?? "sans-serif", $ = () => e.font?.color ?? "rgba(0,0,0,.26)", v = () => {
    const F = {
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
    let z = d() - s(), E = u() - o();
    return z > 0 && (F.left = `${z}px`, F.width = `calc(100% - ${z}px)`, z = 0), E > 0 && (F.top = `${E}px`, F.height = `calc(100% - ${E}px)`, E = 0), F["background-position"] = `${z}px ${E}px`, F;
  }, C = () => {
    r && (r.remove(), r = void 0);
  }, k = (F, z) => {
    n && r && (i = !0, r.setAttribute("style", dh({
      ...v(),
      "background-image": `url('${F}')`,
      "background-size": `${(c() + z) * qt}px`
    })), n?.append(r), setTimeout(() => {
      i = !1;
    }));
  }, w = (F) => {
    let z = 120, E = 64;
    const x = e.content, L = e.image, R = e.width, D = e.height;
    if (!L && F.measureText) {
      F.font = `${Number(m())}px ${h()}`;
      const P = Array.isArray(x) ? x : [x], O = P.map((Y) => F.measureText(Y).width);
      z = Math.ceil(Math.max(...O)), E = Number(m()) * P.length + (P.length - 1) * pn;
    }
    return [R ?? z, D ?? E];
  }, T = (F, z, E, x, L) => {
    const R = Qn(), D = e.content, P = Number(m()) * R;
    F.font = `${_()} normal ${y()} ${P}px/${L}px ${h()}`, F.fillStyle = $(), F.textAlign = "center", F.textBaseline = "top", F.translate(x / 2, 0), (Array.isArray(D) ? D : [D])?.forEach((Y, W) => {
      F.fillText(Y ?? "", z, E + W * (P + pn * R));
    });
  };
  X(() => {
    I();
  });
  const I = () => {
    const F = document.createElement("canvas"), z = F.getContext("2d"), E = e.image, x = e.rotate ?? -22;
    if (z) {
      r || (r = document.createElement("div"));
      const L = Qn(), [R, D] = w(z), P = (c() + R) * L, O = (a() + D) * L;
      F.setAttribute("width", `${P * qt}px`), F.setAttribute("height", `${O * qt}px`);
      const Y = c() * L / 2, W = a() * L / 2, ue = R * L, ee = D * L, _e = (ue + c() * L) / 2, Pe = (ee + a() * L) / 2, Ie = Y + P, De = W + O, Re = _e + P, yt = Pe + O;
      if (z.save(), Yt(z, _e, Pe, x), E) {
        const je = new Image();
        je.onload = () => {
          z.drawImage(je, Y, W, ue, ee), z.restore(), Yt(z, Re, yt, x), z.drawImage(je, Ie, De, ue, ee), k(F.toDataURL(), R);
        }, je.crossOrigin = "anonymous", je.referrerPolicy = "no-referrer", je.src = E;
      } else
        T(z, Y, W, ue, ee), z.restore(), Yt(z, Re, yt, x), T(z, Ie, De, ue, ee), k(F.toDataURL(), R);
    }
  };
  let M;
  const S = (F) => {
    i || F.forEach((z) => {
      uh(z, r) && (C(), I());
    });
  };
  ae(() => {
    M = new MutationObserver(S), M.observe(n, {
      attributes: !0,
      subtree: !0,
      childList: !0,
      attributeFilter: ["style", "class"]
    });
  }), ce(() => {
    C(), M?.disconnect(), M = void 0;
  });
  const A = () => de(e, {
    position: "relative"
  });
  return (() => {
    const F = fh(), z = n;
    return typeof z == "function" ? j(z, F) : n = F, g(F, () => e.children), N((E) => {
      const x = t(), L = A();
      return E._v$ = V(F, x, E._v$), E._v$2 = H(F, L, E._v$2), E;
    }, {
      _v$: void 0,
      _v$2: void 0
    }), F;
  })();
}
export {
  er as Accordion,
  ii as AccordionContext,
  lr as Anchor,
  za as AutoComplete,
  mn as Avatar,
  yh as AvatarList,
  _h as BackTop,
  wh as Badge,
  bh as Banner,
  Mr as BothSide,
  Ar as Breadcrumb,
  Ee as Button,
  Sh as ButtonGroup,
  ci as ButtonGroupContext,
  em as Captcha,
  Eh as Card,
  Xr as Carousel,
  Ha as Cascader,
  Lh as Center,
  Wa as Checkbox,
  ja as CheckboxGroup,
  Oh as CheckboxGroupContext,
  Dh as Col,
  ni as Collapase,
  Po as ColorPicker,
  gi as Context,
  Fh as CountDown,
  Rh as CountUp,
  Xs as Datepicker,
  Ah as Divider,
  jt as Draggable,
  zh as Drawer,
  Oe as Dropdown,
  Ih as DropdownItem,
  Ph as DropdownMenu,
  ph as Email,
  Nh as Exception,
  kh as FixedView,
  am as Floor,
  du as FooterNavigation,
  sm as FooterNavigations,
  wc as Form,
  un as FormContext,
  gt as FormItem,
  xi as FormItemContext,
  xh as HView,
  K as Icon,
  Gt as Image,
  _i as ImagePreview,
  Uh as IndexList,
  Be as InnerCheckbox,
  ke as InnerInput,
  Lo as Input,
  Bh as InputGroup,
  km as Link,
  gd as List,
  Je as Loading,
  Kh as Login,
  zi as LoginContext,
  im as Menu,
  nm as MenuGroup,
  an as MenuItem,
  Qh as Mobile,
  Gd as Modal,
  Cs as Option,
  Vh as OptionGroup,
  om as PageFooter,
  dm as Pagination,
  xm as Paragraph,
  Jh as Password,
  Qe as Popover,
  Ci as Progress,
  um as QRCode,
  Ou as QRCodeCanvas,
  Hh as Radio,
  rs as RadioGroup,
  vs as Rate,
  Mh as Row,
  ss as Search,
  Di as Select,
  fm as SideBySide,
  it as Skeleton,
  uo as Slider,
  jh as Slot,
  Ze as Space,
  yi as Spin,
  us as Spinner,
  hm as Split,
  af as Steps,
  tm as SubMenu,
  Gh as Submit,
  as as Switch,
  wm as Tab,
  mm as Table,
  _m as TableStyleLayout,
  vm as TableStyleLayoutCol,
  $m as TableStyleLayoutLabel,
  gm as TableStyleLayoutRow,
  ym as TableStyleLayoutValue,
  bm as Tabs,
  bt as Tag,
  Fc as TagGroup,
  Ae as Text,
  Yh as Textarea,
  Qf as Timeline,
  no as Timepicker,
  Cm as Title,
  ur as Tooltip,
  qh as Transfer,
  bo as Tree,
  xe as TreeCheckMod,
  Ri as TreeContext,
  ko as TreeSelect,
  _o as TreeStore,
  Wh as Upload,
  Zh as UserName,
  Ch as VView,
  nt as Value,
  on as View,
  rn as VirtualList,
  Mi as VirtualListCore,
  Lm as Watermark,
  ki as WordCount,
  nc as downloadFile,
  Fe as dragHoverPartEnum,
  Xh as loadingBar,
  rm as message,
  lm as modal,
  Tl as nextFrame,
  cm as notice,
  ri as scrollTop,
  tr as useAccordionContext,
  vi as useAlignPostion,
  Kr as useCarouselContext,
  Ya as useCascaderContext,
  q as useClassList,
  zr as useClickAnimating,
  Xt as useClickOutside,
  pf as useCopy,
  vt as useDatepickerContext,
  $i as useDropdownConext,
  bd as useForm,
  ua as useFormItem,
  vd as useListContext,
  Pi as useLoginContext,
  fn as useMenuContext,
  Pl as useMoveObserver,
  He as usePortal,
  li as useSlots,
  de as useStyle,
  Yi as useTableContext,
  Wf as useTableStyleLayoutContext,
  io as useTimepickerContext,
  dn as useTransition,
  wo as useTreeContext,
  tt as useValidation,
  Ye as usezIndex
};
