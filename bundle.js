!(function(t) {
  var e = {};
  function i(s) {
    if (e[s]) return e[s].exports;
    var n = (e[s] = { i: s, l: !1, exports: {} });
    return t[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function(t, e, s) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (i.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (i.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          i.d(
            s,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return s;
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 7));
})([
  function(t, e, i) {
    var s = i(4),
      n = i(5),
      a = null;
    function r(t) {
      return setTimeout(t, 0);
    }
    t.exports = function(t, e) {
      var i = document,
        o = "string" == typeof t ? i.querySelector(t) : t,
        d = n({ returnFocusOnDeactivate: !0, escapeDeactivates: !0 }, e),
        c = {
          firstTabbableNode: null,
          lastTabbableNode: null,
          nodeFocusedBeforeActivation: null,
          mostRecentlyFocusedNode: null,
          active: !1,
          paused: !1
        },
        l = {
          activate: function(t) {
            if (!c.active) {
              T(),
                (c.active = !0),
                (c.paused = !1),
                (c.nodeFocusedBeforeActivation = i.activeElement);
              var e = t && t.onActivate ? t.onActivate : d.onActivate;
              return e && e(), u(), l;
            }
          },
          deactivate: h,
          pause: function() {
            !c.paused && c.active && ((c.paused = !0), _());
          },
          unpause: function() {
            c.paused && c.active && ((c.paused = !1), u());
          }
        };
      return l;
      function h(t) {
        if (c.active) {
          _(), (c.active = !1), (c.paused = !1);
          var e =
            t && void 0 !== t.onDeactivate ? t.onDeactivate : d.onDeactivate;
          return (
            e && e(),
            (t && void 0 !== t.returnFocus
              ? t.returnFocus
              : d.returnFocusOnDeactivate) &&
              r(function() {
                v(c.nodeFocusedBeforeActivation);
              }),
            l
          );
        }
      }
      function u() {
        if (c.active)
          return (
            a && a.pause(),
            (a = l),
            T(),
            r(function() {
              v(p());
            }),
            i.addEventListener("focusin", f, !0),
            i.addEventListener("mousedown", E, !0),
            i.addEventListener("touchstart", E, !0),
            i.addEventListener("click", g, !0),
            i.addEventListener("keydown", C, !0),
            l
          );
      }
      function _() {
        if (c.active && a === l)
          return (
            i.removeEventListener("focusin", f, !0),
            i.removeEventListener("mousedown", E, !0),
            i.removeEventListener("touchstart", E, !0),
            i.removeEventListener("click", g, !0),
            i.removeEventListener("keydown", C, !0),
            (a = null),
            l
          );
      }
      function m(t) {
        var e = d[t],
          s = e;
        if (!e) return null;
        if ("string" == typeof e && !(s = i.querySelector(e)))
          throw new Error("`" + t + "` refers to no known node");
        if ("function" == typeof e && !(s = e()))
          throw new Error("`" + t + "` did not return a node");
        return s;
      }
      function p() {
        var t;
        if (
          !(t =
            null !== m("initialFocus")
              ? m("initialFocus")
              : o.contains(i.activeElement)
                ? i.activeElement
                : c.firstTabbableNode || m("fallbackFocus"))
        )
          throw new Error(
            "You can't have a focus-trap without at least one focusable element"
          );
        return t;
      }
      function E(t) {
        o.contains(t.target) ||
          (d.clickOutsideDeactivates
            ? h({ returnFocus: !s.isFocusable(t.target) })
            : t.preventDefault());
      }
      function f(t) {
        o.contains(t.target) ||
          t.target instanceof Document ||
          (t.stopImmediatePropagation(), v(c.mostRecentlyFocusedNode || p()));
      }
      function C(t) {
        if (
          !1 !== d.escapeDeactivates &&
          (function(t) {
            return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode;
          })(t)
        )
          return t.preventDefault(), void h();
        (function(t) {
          return "Tab" === t.key || 9 === t.keyCode;
        })(t) &&
          (function(t) {
            if ((T(), t.shiftKey && t.target === c.firstTabbableNode))
              return t.preventDefault(), void v(c.lastTabbableNode);
            t.shiftKey ||
              t.target !== c.lastTabbableNode ||
              (t.preventDefault(), v(c.firstTabbableNode));
          })(t);
      }
      function g(t) {
        d.clickOutsideDeactivates ||
          o.contains(t.target) ||
          (t.preventDefault(), t.stopImmediatePropagation());
      }
      function T() {
        var t = s(o);
        (c.firstTabbableNode = t[0] || p()),
          (c.lastTabbableNode = t[t.length - 1] || p());
      }
      function v(t) {
        t !== i.activeElement &&
          (t && t.focus
            ? (t.focus(),
              (c.mostRecentlyFocusedNode = t),
              (function(t) {
                return (
                  t.tagName &&
                  "input" === t.tagName.toLowerCase() &&
                  "function" == typeof t.select
                );
              })(t) && t.select())
            : v(p()));
      }
    };
  },
  function(t, e, i) {
    var s = i(6),
      n = null;
    function a(t) {
      t &&
        t.focus &&
        t !== document.activeElement &&
        (t.focus(), "input" === t.tagName.toLowerCase() && t.select());
    }
    t.exports = function(t, e) {
      var i = [],
        r = null,
        o = null,
        d = null,
        c = !1,
        l = !1,
        h = null,
        u = "string" == typeof t ? document.querySelector(t) : t,
        _ = e || {};
      (_.returnFocusOnDeactivate =
        !e ||
        void 0 === e.returnFocusOnDeactivate ||
        e.returnFocusOnDeactivate),
        (_.escapeDeactivates =
          !e || void 0 === e.escapeDeactivates || e.escapeDeactivates);
      var m = {
        activate: function(t) {
          if (!c) {
            var e = {
              onActivate:
                t && void 0 !== t.onActivate ? t.onActivate : _.onActivate
            };
            return (
              (c = !0),
              (l = !1),
              (d = document.activeElement),
              e.onActivate && e.onActivate(),
              E(),
              m
            );
          }
        },
        deactivate: p,
        pause: function() {
          !l && c && ((l = !0), f());
        },
        unpause: function() {
          l && c && ((l = !1), E());
        }
      };
      return m;
      function p(t) {
        if (c) {
          var e = {
            returnFocus:
              t && void 0 !== t.returnFocus
                ? t.returnFocus
                : _.returnFocusOnDeactivate,
            onDeactivate:
              t && void 0 !== t.onDeactivate ? t.onDeactivate : _.onDeactivate
          };
          return (
            f(),
            e.onDeactivate && e.onDeactivate(),
            e.returnFocus &&
              setTimeout(function() {
                a(d);
              }, 0),
            (c = !1),
            (l = !1),
            this
          );
        }
      }
      function E() {
        if (c)
          return (
            n && n.pause(),
            (n = m),
            A(),
            setTimeout(function() {
              a(
                (function() {
                  var t;
                  if (
                    !(t =
                      null !== C("initialFocus")
                        ? C("initialFocus")
                        : u.contains(document.activeElement)
                          ? document.activeElement
                          : i[0] || C("fallbackFocus"))
                  )
                    throw new Error(
                      "You can't have a focus-trap without at least one focusable element"
                    );
                  return t;
                })()
              );
            }, 0),
            document.addEventListener("focus", v, !0),
            document.addEventListener("click", T, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("keydown", L, !0),
            m
          );
      }
      function f() {
        if (c && n === m)
          return (
            document.removeEventListener("focus", v, !0),
            document.removeEventListener("click", T, !0),
            document.removeEventListener("mousedown", g, !0),
            document.removeEventListener("touchstart", g, !0),
            document.removeEventListener("keydown", L, !0),
            (n = null),
            m
          );
      }
      function C(t) {
        var e = _[t],
          i = e;
        if (!e) return null;
        if ("string" == typeof e && !(i = document.querySelector(e)))
          throw new Error("`" + t + "` refers to no known node");
        if ("function" == typeof e && !(i = e()))
          throw new Error("`" + t + "` did not return a node");
        return i;
      }
      function g(t) {
        _.clickOutsideDeactivates &&
          !u.contains(t.target) &&
          p({ returnFocus: !1 });
      }
      function T(t) {
        _.clickOutsideDeactivates ||
          u.contains(t.target) ||
          (t.preventDefault(), t.stopImmediatePropagation());
      }
      function v(t) {
        u.contains(t.target) ||
          (t.preventDefault(),
          t.stopImmediatePropagation(),
          "function" == typeof t.target.blur && t.target.blur(),
          h &&
            (function(t) {
              if (t.shiftKey) return a(o);
              a(r);
            })(h));
      }
      function L(t) {
        ("Tab" !== t.key && 9 !== t.keyCode) ||
          (function(t) {
            if (
              (A(),
              t.target.hasAttribute("tabindex") &&
                Number(t.target.getAttribute("tabindex")) < 0)
            )
              return (h = t);
            t.preventDefault();
            var e = i.indexOf(t.target);
            t.shiftKey
              ? t.target === r || -1 === i.indexOf(t.target)
                ? a(o)
                : a(i[e - 1])
              : t.target === o
                ? a(r)
                : a(i[e + 1]);
          })(t),
          !1 !== _.escapeDeactivates &&
            (function(t) {
              return "Escape" === t.key || "Esc" === t.key || 27 === t.keyCode;
            })(t) &&
            p();
      }
      function A() {
        (i = s(u)), (r = i[0]), (o = i[i.length - 1]);
      }
    };
  },
  function(t, e, i) {},
  ,
  function(t, e) {
    var i = [
        "input",
        "select",
        "textarea",
        "a[href]",
        "button",
        "[tabindex]",
        "audio[controls]",
        "video[controls]",
        '[contenteditable]:not([contenteditable="false"])'
      ],
      s = i.join(","),
      n =
        "undefined" == typeof Element
          ? function() {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector;
    function a(t, e) {
      e = e || {};
      var i,
        a,
        o,
        d = [],
        h = [],
        _ = new u(t.ownerDocument || t),
        m = t.querySelectorAll(s);
      for (
        e.includeContainer &&
          n.call(t, s) &&
          (m = Array.prototype.slice.apply(m)).unshift(t),
          i = 0;
        i < m.length;
        i++
      )
        r((a = m[i]), _) &&
          (0 === (o = c(a))
            ? d.push(a)
            : h.push({ documentOrder: i, tabIndex: o, node: a }));
      return h
        .sort(l)
        .map(function(t) {
          return t.node;
        })
        .concat(d);
    }
    function r(t, e) {
      return !(
        !o(t, e) ||
        (function(t) {
          return (
            (function(t) {
              return h(t) && "radio" === t.type;
            })(t) &&
            !(function(t) {
              if (!t.name) return !0;
              var e = (function(t) {
                for (var e = 0; e < t.length; e++)
                  if (t[e].checked) return t[e];
              })(
                t.ownerDocument.querySelectorAll(
                  'input[type="radio"][name="' + t.name + '"]'
                )
              );
              return !e || e === t;
            })(t)
          );
        })(t) ||
        c(t) < 0
      );
    }
    function o(t, e) {
      return (
        (e = e || new u(t.ownerDocument || t)),
        !(
          t.disabled ||
          (function(t) {
            return h(t) && "hidden" === t.type;
          })(t) ||
          e.isUntouchable(t)
        )
      );
    }
    (a.isTabbable = function(t, e) {
      if (!t) throw new Error("No node provided");
      return !1 !== n.call(t, s) && r(t, e);
    }),
      (a.isFocusable = function(t, e) {
        if (!t) throw new Error("No node provided");
        return !1 !== n.call(t, d) && o(t, e);
      });
    var d = i.concat("iframe").join(",");
    function c(t) {
      var e = parseInt(t.getAttribute("tabindex"), 10);
      return isNaN(e)
        ? (function(t) {
            return "true" === t.contentEditable;
          })(t)
          ? 0
          : t.tabIndex
        : e;
    }
    function l(t, e) {
      return t.tabIndex === e.tabIndex
        ? t.documentOrder - e.documentOrder
        : t.tabIndex - e.tabIndex;
    }
    function h(t) {
      return "INPUT" === t.tagName;
    }
    function u(t) {
      (this.doc = t), (this.cache = []);
    }
    (u.prototype.hasDisplayNone = function(t, e) {
      if (t === this.doc.documentElement) return !1;
      var i = (function(t, e) {
        for (var i = 0, s = t.length; i < s; i++) if (e(t[i])) return t[i];
      })(this.cache, function(e) {
        return e === t;
      });
      if (i) return i[1];
      var s = !1;
      return (
        "none" === (e = e || this.doc.defaultView.getComputedStyle(t)).display
          ? (s = !0)
          : t.parentNode && (s = this.hasDisplayNone(t.parentNode)),
        this.cache.push([t, s]),
        s
      );
    }),
      (u.prototype.isUntouchable = function(t) {
        if (t === this.doc.documentElement) return !1;
        var e = this.doc.defaultView.getComputedStyle(t);
        return !!this.hasDisplayNone(t, e) || "hidden" === e.visibility;
      }),
      (t.exports = a);
  },
  function(t, e) {
    t.exports = function() {
      for (var t = {}, e = 0; e < arguments.length; e++) {
        var s = arguments[e];
        for (var n in s) i.call(s, n) && (t[n] = s[n]);
      }
      return t;
    };
    var i = Object.prototype.hasOwnProperty;
  },
  function(t, e) {
    t.exports = function(t, e) {
      e = e || {};
      var i,
        s,
        n,
        a = t.ownerDocument || t,
        r = [],
        o = [],
        d = (function(t) {
          var e = [];
          return function(i) {
            if (i === t.documentElement) return !1;
            var s = t.defaultView.getComputedStyle(i);
            return (
              !!(function i(s, n) {
                if (s === t.documentElement) return !1;
                for (var a = 0, r = e.length; a < r; a++)
                  if (e[a][0] === s) return e[a][1];
                n = n || t.defaultView.getComputedStyle(s);
                var o = !1;
                "none" === n.display
                  ? (o = !0)
                  : s.parentNode && (o = i(s.parentNode));
                e.push([s, o]);
                return o;
              })(i, s) || "hidden" === s.visibility
            );
          };
        })(a),
        c = ["input", "select", "a[href]", "textarea", "button", "[tabindex]"],
        l = t.querySelectorAll(c.join(","));
      if (e.includeContainer) {
        var h =
          Element.prototype.matches ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector;
        c.some(function(e) {
          return h.call(t, e);
        }) && (l = Array.prototype.slice.apply(l)).unshift(t);
      }
      for (var u = 0, _ = l.length; u < _; u++)
        (i = l[u]),
          (s = parseInt(i.getAttribute("tabindex"), 10)),
          (n = isNaN(s) ? i.tabIndex : s) < 0 ||
            ("INPUT" === i.tagName && "hidden" === i.type) ||
            i.disabled ||
            d(i, a) ||
            (0 === n ? r.push(i) : o.push({ index: u, tabIndex: n, node: i }));
      var m = o
        .sort(function(t, e) {
          return t.tabIndex === e.tabIndex
            ? t.index - e.index
            : t.tabIndex - e.tabIndex;
        })
        .map(function(t) {
          return t.node;
        });
      return Array.prototype.push.apply(m, r), m;
    };
  },
  function(t, e, i) {
    "use strict";
    i.r(e);
    i(2);
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var s =
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      class {
        static get cssClasses() {
          return {};
        }
        static get strings() {
          return {};
        }
        static get numbers() {
          return {};
        }
        static get defaultAdapter() {
          return {};
        }
        constructor(t = {}) {
          this.adapter_ = t;
        }
        init() {}
        destroy() {}
      };
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class n {
      static attachTo(t) {
        return new n(t, new s());
      }
      constructor(t, e, ...i) {
        (this.root_ = t),
          this.initialize(...i),
          (this.foundation_ = void 0 === e ? this.getDefaultFoundation() : e),
          this.foundation_.init(),
          this.initialSyncWithDOM();
      }
      initialize() {}
      getDefaultFoundation() {
        throw new Error(
          "Subclasses must override getDefaultFoundation to return a properly configured foundation class"
        );
      }
      initialSyncWithDOM() {}
      destroy() {
        this.foundation_.destroy();
      }
      listen(t, e) {
        this.root_.addEventListener(t, e);
      }
      unlisten(t, e) {
        this.root_.removeEventListener(t, e);
      }
      emit(t, e, i = !1) {
        let s;
        "function" == typeof CustomEvent
          ? (s = new CustomEvent(t, { detail: e, bubbles: i }))
          : (s = document.createEvent("CustomEvent")).initCustomEvent(
              t,
              i,
              !1,
              e
            ),
          this.root_.dispatchEvent(s);
      }
    }
    var a = n;
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const r = {
        ROOT: "mdc-ripple-upgraded",
        UNBOUNDED: "mdc-ripple-upgraded--unbounded",
        BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
        FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
        FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation"
      },
      o = {
        VAR_LEFT: "--mdc-ripple-left",
        VAR_TOP: "--mdc-ripple-top",
        VAR_FG_SIZE: "--mdc-ripple-fg-size",
        VAR_FG_SCALE: "--mdc-ripple-fg-scale",
        VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
        VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end"
      },
      d = {
        PADDING: 10,
        INITIAL_ORIGIN_SCALE: 0.6,
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        TAP_DELAY_MS: 300
      };
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    let c, l;
    function h(t = window, e = !1) {
      if (void 0 === l || e) {
        let e = !1;
        try {
          t.document.addEventListener("test", null, {
            get passive() {
              return (e = !0);
            }
          });
        } catch (t) {}
        l = e;
      }
      return !!l && { passive: !0 };
    }
    function u(t) {
      const e = ["matches", "webkitMatchesSelector", "msMatchesSelector"];
      let i = "matches";
      for (let s = 0; s < e.length; s++) {
        const n = e[s];
        if (n in t) {
          i = n;
          break;
        }
      }
      return i;
    }
    const _ = ["touchstart", "pointerdown", "mousedown", "keydown"],
      m = ["touchend", "pointerup", "mouseup"];
    let p = [];
    class E extends s {
      static get cssClasses() {
        return r;
      }
      static get strings() {
        return o;
      }
      static get numbers() {
        return d;
      }
      static get defaultAdapter() {
        return {
          browserSupportsCssVars: () => {},
          isUnbounded: () => {},
          isSurfaceActive: () => {},
          isSurfaceDisabled: () => {},
          addClass: () => {},
          removeClass: () => {},
          containsEventTarget: () => {},
          registerInteractionHandler: () => {},
          deregisterInteractionHandler: () => {},
          registerDocumentInteractionHandler: () => {},
          deregisterDocumentInteractionHandler: () => {},
          registerResizeHandler: () => {},
          deregisterResizeHandler: () => {},
          updateCssVariable: () => {},
          computeBoundingRect: () => {},
          getWindowPageOffset: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(E.defaultAdapter, t)),
          (this.layoutFrame_ = 0),
          (this.frame_ = { width: 0, height: 0 }),
          (this.activationState_ = this.defaultActivationState_()),
          (this.initialSize_ = 0),
          (this.maxRadius_ = 0),
          (this.activateHandler_ = t => this.activate_(t)),
          (this.deactivateHandler_ = () => this.deactivate_()),
          (this.focusHandler_ = () => this.handleFocus()),
          (this.blurHandler_ = () => this.handleBlur()),
          (this.resizeHandler_ = () => this.layout()),
          (this.unboundedCoords_ = { left: 0, top: 0 }),
          (this.fgScale_ = 0),
          (this.activationTimer_ = 0),
          (this.fgDeactivationRemovalTimer_ = 0),
          (this.activationAnimationHasEnded_ = !1),
          (this.activationTimerCallback_ = () => {
            (this.activationAnimationHasEnded_ = !0),
              this.runDeactivationUXLogicIfReady_();
          }),
          this.previousActivationEvent_;
      }
      supportsPressRipple_() {
        return this.adapter_.browserSupportsCssVars();
      }
      defaultActivationState_() {
        return {
          isActivated: !1,
          hasDeactivationUXRun: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1,
          activationEvent: void 0,
          isProgrammatic: !1
        };
      }
      init() {
        const t = this.supportsPressRipple_();
        if ((this.registerRootHandlers_(t), t)) {
          const { ROOT: t, UNBOUNDED: e } = E.cssClasses;
          requestAnimationFrame(() => {
            this.adapter_.addClass(t),
              this.adapter_.isUnbounded() &&
                (this.adapter_.addClass(e), this.layoutInternal_());
          });
        }
      }
      destroy() {
        if (this.supportsPressRipple_()) {
          this.activationTimer_ &&
            (clearTimeout(this.activationTimer_),
            (this.activationTimer_ = 0),
            this.adapter_.removeClass(E.cssClasses.FG_ACTIVATION)),
            this.fgDeactivationRemovalTimer_ &&
              (clearTimeout(this.fgDeactivationRemovalTimer_),
              (this.fgDeactivationRemovalTimer_ = 0),
              this.adapter_.removeClass(E.cssClasses.FG_DEACTIVATION));
          const { ROOT: t, UNBOUNDED: e } = E.cssClasses;
          requestAnimationFrame(() => {
            this.adapter_.removeClass(t),
              this.adapter_.removeClass(e),
              this.removeCssVars_();
          });
        }
        this.deregisterRootHandlers_(), this.deregisterDeactivationHandlers_();
      }
      registerRootHandlers_(t) {
        t &&
          (_.forEach(t => {
            this.adapter_.registerInteractionHandler(t, this.activateHandler_);
          }),
          this.adapter_.isUnbounded() &&
            this.adapter_.registerResizeHandler(this.resizeHandler_)),
          this.adapter_.registerInteractionHandler("focus", this.focusHandler_),
          this.adapter_.registerInteractionHandler("blur", this.blurHandler_);
      }
      registerDeactivationHandlers_(t) {
        "keydown" === t.type
          ? this.adapter_.registerInteractionHandler(
              "keyup",
              this.deactivateHandler_
            )
          : m.forEach(t => {
              this.adapter_.registerDocumentInteractionHandler(
                t,
                this.deactivateHandler_
              );
            });
      }
      deregisterRootHandlers_() {
        _.forEach(t => {
          this.adapter_.deregisterInteractionHandler(t, this.activateHandler_);
        }),
          this.adapter_.deregisterInteractionHandler(
            "focus",
            this.focusHandler_
          ),
          this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_),
          this.adapter_.isUnbounded() &&
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
      deregisterDeactivationHandlers_() {
        this.adapter_.deregisterInteractionHandler(
          "keyup",
          this.deactivateHandler_
        ),
          m.forEach(t => {
            this.adapter_.deregisterDocumentInteractionHandler(
              t,
              this.deactivateHandler_
            );
          });
      }
      removeCssVars_() {
        const { strings: t } = E;
        Object.keys(t).forEach(e => {
          0 === e.indexOf("VAR_") &&
            this.adapter_.updateCssVariable(t[e], null);
        });
      }
      activate_(t) {
        if (this.adapter_.isSurfaceDisabled()) return;
        const e = this.activationState_;
        if (e.isActivated) return;
        const i = this.previousActivationEvent_;
        (i && void 0 !== t && i.type !== t.type) ||
          ((e.isActivated = !0),
          (e.isProgrammatic = void 0 === t),
          (e.activationEvent = t),
          (e.wasActivatedByPointer =
            !e.isProgrammatic &&
            (void 0 !== t &&
              ("mousedown" === t.type ||
                "touchstart" === t.type ||
                "pointerdown" === t.type))),
          void 0 !== t &&
          p.length > 0 &&
          p.some(t => this.adapter_.containsEventTarget(t))
            ? this.resetActivationState_()
            : (void 0 !== t &&
                (p.push(t.target), this.registerDeactivationHandlers_(t)),
              (e.wasElementMadeActive = this.checkElementMadeActive_(t)),
              e.wasElementMadeActive && this.animateActivation_(),
              requestAnimationFrame(() => {
                (p = []),
                  e.wasElementMadeActive ||
                    void 0 === t ||
                    (" " !== t.key && 32 !== t.keyCode) ||
                    ((e.wasElementMadeActive = this.checkElementMadeActive_(t)),
                    e.wasElementMadeActive && this.animateActivation_()),
                  e.wasElementMadeActive ||
                    (this.activationState_ = this.defaultActivationState_());
              })));
      }
      checkElementMadeActive_(t) {
        return (
          void 0 === t ||
          "keydown" !== t.type ||
          this.adapter_.isSurfaceActive()
        );
      }
      activate(t) {
        this.activate_(t);
      }
      animateActivation_() {
        const {
            VAR_FG_TRANSLATE_START: t,
            VAR_FG_TRANSLATE_END: e
          } = E.strings,
          { FG_DEACTIVATION: i, FG_ACTIVATION: s } = E.cssClasses,
          { DEACTIVATION_TIMEOUT_MS: n } = E.numbers;
        this.layoutInternal_();
        let a = "",
          r = "";
        if (!this.adapter_.isUnbounded()) {
          const {
            startPoint: t,
            endPoint: e
          } = this.getFgTranslationCoordinates_();
          (a = `${t.x}px, ${t.y}px`), (r = `${e.x}px, ${e.y}px`);
        }
        this.adapter_.updateCssVariable(t, a),
          this.adapter_.updateCssVariable(e, r),
          clearTimeout(this.activationTimer_),
          clearTimeout(this.fgDeactivationRemovalTimer_),
          this.rmBoundedActivationClasses_(),
          this.adapter_.removeClass(i),
          this.adapter_.computeBoundingRect(),
          this.adapter_.addClass(s),
          (this.activationTimer_ = setTimeout(
            () => this.activationTimerCallback_(),
            n
          ));
      }
      getFgTranslationCoordinates_() {
        const {
          activationEvent: t,
          wasActivatedByPointer: e
        } = this.activationState_;
        let i;
        return {
          startPoint: (i = {
            x:
              (i = e
                ? (function(t, e, i) {
                    const { x: s, y: n } = e,
                      a = s + i.left,
                      r = n + i.top;
                    let o, d;
                    return (
                      "touchstart" === t.type
                        ? ((o = (t = t).changedTouches[0].pageX - a),
                          (d = t.changedTouches[0].pageY - r))
                        : ((o = (t = t).pageX - a), (d = t.pageY - r)),
                      { x: o, y: d }
                    );
                  })(
                    /**
                     * @license
                     * Copyright 2016 Google Inc.
                     *
                     * Permission is hereby granted, free of charge, to any person obtaining a copy
                     * of this software and associated documentation files (the "Software"), to deal
                     * in the Software without restriction, including without limitation the rights
                     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                     * copies of the Software, and to permit persons to whom the Software is
                     * furnished to do so, subject to the following conditions:
                     *
                     * The above copyright notice and this permission notice shall be included in
                     * all copies or substantial portions of the Software.
                     *
                     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                     * THE SOFTWARE.
                     */ t,
                    this.adapter_.getWindowPageOffset(),
                    this.adapter_.computeBoundingRect()
                  )
                : { x: this.frame_.width / 2, y: this.frame_.height / 2 }).x -
              this.initialSize_ / 2,
            y: i.y - this.initialSize_ / 2
          }),
          endPoint: {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
          }
        };
      }
      runDeactivationUXLogicIfReady_() {
        const { FG_DEACTIVATION: t } = E.cssClasses,
          { hasDeactivationUXRun: e, isActivated: i } = this.activationState_;
        (e || !i) &&
          this.activationAnimationHasEnded_ &&
          (this.rmBoundedActivationClasses_(),
          this.adapter_.addClass(t),
          (this.fgDeactivationRemovalTimer_ = setTimeout(() => {
            this.adapter_.removeClass(t);
          }, d.FG_DEACTIVATION_MS)));
      }
      rmBoundedActivationClasses_() {
        const { FG_ACTIVATION: t } = E.cssClasses;
        this.adapter_.removeClass(t),
          (this.activationAnimationHasEnded_ = !1),
          this.adapter_.computeBoundingRect();
      }
      resetActivationState_() {
        (this.previousActivationEvent_ = this.activationState_.activationEvent),
          (this.activationState_ = this.defaultActivationState_()),
          setTimeout(
            () => (this.previousActivationEvent_ = void 0),
            E.numbers.TAP_DELAY_MS
          );
      }
      deactivate_() {
        const t = this.activationState_;
        if (!t.isActivated) return;
        const e = Object.assign({}, t);
        t.isProgrammatic
          ? (requestAnimationFrame(() => this.animateDeactivation_(e)),
            this.resetActivationState_())
          : (this.deregisterDeactivationHandlers_(),
            requestAnimationFrame(() => {
              (this.activationState_.hasDeactivationUXRun = !0),
                this.animateDeactivation_(e),
                this.resetActivationState_();
            }));
      }
      deactivate() {
        this.deactivate_();
      }
      animateDeactivation_({
        wasActivatedByPointer: t,
        wasElementMadeActive: e
      }) {
        (t || e) && this.runDeactivationUXLogicIfReady_();
      }
      layout() {
        this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
          (this.layoutFrame_ = requestAnimationFrame(() => {
            this.layoutInternal_(), (this.layoutFrame_ = 0);
          }));
      }
      layoutInternal_() {
        this.frame_ = this.adapter_.computeBoundingRect();
        const t = Math.max(this.frame_.height, this.frame_.width);
        (this.maxRadius_ = this.adapter_.isUnbounded()
          ? t
          : (() => {
              return (
                Math.sqrt(
                  Math.pow(this.frame_.width, 2) +
                    Math.pow(this.frame_.height, 2)
                ) + E.numbers.PADDING
              );
            })()),
          (this.initialSize_ = Math.floor(t * E.numbers.INITIAL_ORIGIN_SCALE)),
          (this.fgScale_ = this.maxRadius_ / this.initialSize_),
          this.updateLayoutCssVars_();
      }
      updateLayoutCssVars_() {
        const {
          VAR_FG_SIZE: t,
          VAR_LEFT: e,
          VAR_TOP: i,
          VAR_FG_SCALE: s
        } = E.strings;
        this.adapter_.updateCssVariable(t, `${this.initialSize_}px`),
          this.adapter_.updateCssVariable(s, this.fgScale_),
          this.adapter_.isUnbounded() &&
            ((this.unboundedCoords_ = {
              left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
              top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            }),
            this.adapter_.updateCssVariable(
              e,
              `${this.unboundedCoords_.left}px`
            ),
            this.adapter_.updateCssVariable(
              i,
              `${this.unboundedCoords_.top}px`
            ));
      }
      setUnbounded(t) {
        const { UNBOUNDED: e } = E.cssClasses;
        t ? this.adapter_.addClass(e) : this.adapter_.removeClass(e);
      }
      handleFocus() {
        requestAnimationFrame(() =>
          this.adapter_.addClass(E.cssClasses.BG_FOCUSED)
        );
      }
      handleBlur() {
        requestAnimationFrame(() =>
          this.adapter_.removeClass(E.cssClasses.BG_FOCUSED)
        );
      }
    }
    var f = E;
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class C extends a {
      constructor(...t) {
        super(...t), (this.disabled = !1), this.unbounded_;
      }
      static attachTo(t, { isUnbounded: e } = {}) {
        const i = new C(t);
        return void 0 !== e && (i.unbounded = e), i;
      }
      static createAdapter(t) {
        const e = u(HTMLElement.prototype);
        return {
          browserSupportsCssVars: () =>
            (function(t, e = !1) {
              let i = c;
              if ("boolean" == typeof c && !e) return i;
              if (!t.CSS || "function" != typeof t.CSS.supports) return;
              const s = t.CSS.supports("--css-vars", "yes"),
                n =
                  t.CSS.supports("(--css-vars: yes)") &&
                  t.CSS.supports("color", "#00000000");
              return (
                (i = !(
                  (!s && !n) ||
                  (function(t) {
                    const e = t.document,
                      i = e.createElement("div");
                    (i.className = "mdc-ripple-surface--test-edge-var-bug"),
                      e.body.appendChild(i);
                    const s = t.getComputedStyle(i),
                      n = null !== s && "solid" === s.borderTopStyle;
                    return i.remove(), n;
                  })(t)
                )),
                e || (c = i),
                i
              );
            })(window),
          isUnbounded: () => t.unbounded,
          isSurfaceActive: () => t.root_[e](":active"),
          isSurfaceDisabled: () => t.disabled,
          addClass: e => t.root_.classList.add(e),
          removeClass: e => t.root_.classList.remove(e),
          containsEventTarget: e => t.root_.contains(e),
          registerInteractionHandler: (e, i) =>
            t.root_.addEventListener(e, i, h()),
          deregisterInteractionHandler: (e, i) =>
            t.root_.removeEventListener(e, i, h()),
          registerDocumentInteractionHandler: (t, e) =>
            document.documentElement.addEventListener(t, e, h()),
          deregisterDocumentInteractionHandler: (t, e) =>
            document.documentElement.removeEventListener(t, e, h()),
          registerResizeHandler: t => window.addEventListener("resize", t),
          deregisterResizeHandler: t => window.removeEventListener("resize", t),
          updateCssVariable: (e, i) => t.root_.style.setProperty(e, i),
          computeBoundingRect: () => t.root_.getBoundingClientRect(),
          getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset
          })
        };
      }
      get unbounded() {
        return this.unbounded_;
      }
      set unbounded(t) {
        (this.unbounded_ = Boolean(t)), this.setUnbounded_();
      }
      setUnbounded_() {
        this.foundation_.setUnbounded(this.unbounded_);
      }
      activate() {
        this.foundation_.activate();
      }
      deactivate() {
        this.foundation_.deactivate();
      }
      layout() {
        this.foundation_.layout();
      }
      getDefaultFoundation() {
        return new f(C.createAdapter(this));
      }
      initialSyncWithDOM() {
        this.unbounded = "mdcRippleIsUnbounded" in this.root_.dataset;
      }
    }
    class g {}
    g.prototype.root_, g.prototype.unbounded, g.prototype.disabled;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const T = {
        FIXED_CLASS: "mdc-top-app-bar--fixed",
        FIXED_SCROLLED_CLASS: "mdc-top-app-bar--fixed-scrolled",
        SHORT_CLASS: "mdc-top-app-bar--short",
        SHORT_HAS_ACTION_ITEM_CLASS: "mdc-top-app-bar--short-has-action-item",
        SHORT_COLLAPSED_CLASS: "mdc-top-app-bar--short-collapsed"
      },
      v = {
        DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
        MAX_TOP_APP_BAR_HEIGHT: 128
      },
      L = {
        ACTION_ITEM_SELECTOR: ".mdc-top-app-bar__action-item",
        NAVIGATION_EVENT: "MDCTopAppBar:nav",
        NAVIGATION_ICON_SELECTOR: ".mdc-top-app-bar__navigation-icon",
        ROOT_SELECTOR: ".mdc-top-app-bar",
        TITLE_SELECTOR: ".mdc-top-app-bar__title"
      };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class A extends s {
      static get strings() {
        return L;
      }
      static get cssClasses() {
        return T;
      }
      static get numbers() {
        return v;
      }
      static get defaultAdapter() {
        return {
          hasClass: () => {},
          addClass: () => {},
          removeClass: () => {},
          setStyle: () => {},
          getTopAppBarHeight: () => {},
          registerNavigationIconInteractionHandler: () => {},
          deregisterNavigationIconInteractionHandler: () => {},
          notifyNavigationIconClicked: () => {},
          registerScrollHandler: () => {},
          deregisterScrollHandler: () => {},
          registerResizeHandler: () => {},
          deregisterResizeHandler: () => {},
          getViewportScrollY: () => 0,
          getTotalActionItems: () => 0
        };
      }
      constructor(t) {
        super(Object.assign(A.defaultAdapter, t)),
          (this.navClickHandler_ = () =>
            this.adapter_.notifyNavigationIconClicked()),
          (this.scrollHandler_ = () => {});
      }
      init() {
        this.adapter_.registerNavigationIconInteractionHandler(
          "click",
          this.navClickHandler_
        );
      }
      destroy() {
        this.adapter_.deregisterNavigationIconInteractionHandler(
          "click",
          this.navClickHandler_
        );
      }
      initScrollHandler() {
        this.adapter_.registerScrollHandler(this.scrollHandler_);
      }
      destroyScrollHandler() {
        this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      }
    }
    var b = A;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var S = class extends b {
      constructor(t) {
        super(t),
          (this.wasScrolled_ = !1),
          (this.scrollHandler_ = () => this.fixedScrollHandler_());
      }
      init() {
        super.init(), this.adapter_.registerScrollHandler(this.scrollHandler_);
      }
      destroy() {
        super.destroy(),
          this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      }
      fixedScrollHandler_() {
        this.adapter_.getViewportScrollY() <= 0
          ? this.wasScrolled_ &&
            (this.adapter_.removeClass(T.FIXED_SCROLLED_CLASS),
            (this.wasScrolled_ = !1))
          : this.wasScrolled_ ||
            (this.adapter_.addClass(T.FIXED_SCROLLED_CLASS),
            (this.wasScrolled_ = !0));
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var I = class extends b {
      constructor(t) {
        super(t),
          (this.isCollapsed = !1),
          (this.scrollHandler_ = () => this.shortAppBarScrollHandler_());
      }
      init() {
        super.init();
        const t = this.adapter_.hasClass(T.SHORT_COLLAPSED_CLASS);
        this.adapter_.getTotalActionItems() > 0 &&
          this.adapter_.addClass(T.SHORT_HAS_ACTION_ITEM_CLASS),
          t ||
            (this.adapter_.registerScrollHandler(this.scrollHandler_),
            this.shortAppBarScrollHandler_());
      }
      destroy() {
        super.destroy(),
          this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      }
      shortAppBarScrollHandler_() {
        this.adapter_.getViewportScrollY() <= 0
          ? this.isCollapsed &&
            (this.adapter_.removeClass(T.SHORT_COLLAPSED_CLASS),
            (this.isCollapsed = !1))
          : this.isCollapsed ||
            (this.adapter_.addClass(T.SHORT_COLLAPSED_CLASS),
            (this.isCollapsed = !0));
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ const y = 0;
    var O = class extends b {
      constructor(t) {
        super(t),
          (this.lastScrollPosition_ = this.adapter_.getViewportScrollY()),
          (this.topAppBarHeight_ = this.adapter_.getTopAppBarHeight()),
          (this.wasDocked_ = !0),
          (this.isDockedShowing_ = !0),
          (this.currentAppBarOffsetTop_ = 0),
          (this.isCurrentlyBeingResized_ = !1),
          (this.resizeThrottleId_ = y),
          (this.resizeDebounceId_ = y),
          (this.scrollHandler_ = () => this.topAppBarScrollHandler_()),
          (this.resizeHandler_ = () => this.topAppBarResizeHandler_());
      }
      init() {
        super.init(),
          this.adapter_.registerScrollHandler(this.scrollHandler_),
          this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
      destroy() {
        super.destroy(),
          this.adapter_.deregisterScrollHandler(this.scrollHandler_),
          this.adapter_.deregisterResizeHandler(this.resizeHandler_),
          this.adapter_.setStyle("top", "");
      }
      checkForUpdate_() {
        const t = -this.topAppBarHeight_,
          e = this.currentAppBarOffsetTop_ < 0,
          i = this.currentAppBarOffsetTop_ > t,
          s = e && i;
        if (s) this.wasDocked_ = !1;
        else {
          if (!this.wasDocked_) return (this.wasDocked_ = !0), !0;
          if (this.isDockedShowing_ !== i)
            return (this.isDockedShowing_ = i), !0;
        }
        return s;
      }
      moveTopAppBar_() {
        if (this.checkForUpdate_()) {
          let t = this.currentAppBarOffsetTop_;
          Math.abs(t) >= this.topAppBarHeight_ &&
            (t = -v.MAX_TOP_APP_BAR_HEIGHT),
            this.adapter_.setStyle("top", t + "px");
        }
      }
      topAppBarScrollHandler_() {
        const t = Math.max(this.adapter_.getViewportScrollY(), 0),
          e = t - this.lastScrollPosition_;
        (this.lastScrollPosition_ = t),
          this.isCurrentlyBeingResized_ ||
            ((this.currentAppBarOffsetTop_ -= e),
            this.currentAppBarOffsetTop_ > 0
              ? (this.currentAppBarOffsetTop_ = 0)
              : Math.abs(this.currentAppBarOffsetTop_) >
                  this.topAppBarHeight_ &&
                (this.currentAppBarOffsetTop_ = -this.topAppBarHeight_),
            this.moveTopAppBar_());
      }
      topAppBarResizeHandler_() {
        this.resizeThrottleId_ ||
          (this.resizeThrottleId_ = setTimeout(() => {
            (this.resizeThrottleId_ = y), this.throttledResizeHandler_();
          }, v.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),
          (this.isCurrentlyBeingResized_ = !0),
          this.resizeDebounceId_ && clearTimeout(this.resizeDebounceId_),
          (this.resizeDebounceId_ = setTimeout(() => {
            this.topAppBarScrollHandler_(),
              (this.isCurrentlyBeingResized_ = !1),
              (this.resizeDebounceId_ = y);
          }, v.DEBOUNCE_THROTTLE_RESIZE_TIME_MS));
      }
      throttledResizeHandler_() {
        const t = this.adapter_.getTopAppBarHeight();
        this.topAppBarHeight_ !== t &&
          ((this.wasDocked_ = !1),
          (this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - t),
          (this.topAppBarHeight_ = t)),
          this.topAppBarScrollHandler_();
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class x extends a {
      constructor(...t) {
        super(...t), this.navIcon_, this.iconRipples_, this.scrollTarget_;
      }
      initialize(t = t => C.attachTo(t)) {
        this.navIcon_ = this.root_.querySelector(L.NAVIGATION_ICON_SELECTOR);
        const e = [].slice.call(
          this.root_.querySelectorAll(L.ACTION_ITEM_SELECTOR)
        );
        this.navIcon_ && e.push(this.navIcon_),
          (this.iconRipples_ = e.map(e => {
            const i = t(e);
            return (i.unbounded = !0), i;
          }));
      }
      destroy() {
        this.iconRipples_.forEach(t => t.destroy()), super.destroy();
      }
      setScrollTarget(t) {
        this.foundation_.destroyScrollHandler(),
          (this.scrollTarget_ = t),
          this.foundation_.initScrollHandler();
      }
      static attachTo(t) {
        return new x(t);
      }
      getDefaultFoundation() {
        const t = Object.assign({
          hasClass: t => this.root_.classList.contains(t),
          addClass: t => this.root_.classList.add(t),
          removeClass: t => this.root_.classList.remove(t),
          setStyle: (t, e) => this.root_.style.setProperty(t, e),
          getTopAppBarHeight: () => this.root_.clientHeight,
          registerNavigationIconInteractionHandler: (t, e) => {
            this.navIcon_ && this.navIcon_.addEventListener(t, e);
          },
          deregisterNavigationIconInteractionHandler: (t, e) => {
            this.navIcon_ && this.navIcon_.removeEventListener(t, e);
          },
          notifyNavigationIconClicked: () => {
            this.emit(L.NAVIGATION_EVENT, {});
          },
          registerScrollHandler: t =>
            this.scrollTarget_.addEventListener("scroll", t),
          deregisterScrollHandler: t =>
            this.scrollTarget_.removeEventListener("scroll", t),
          registerResizeHandler: t => window.addEventListener("resize", t),
          deregisterResizeHandler: t => window.removeEventListener("resize", t),
          getViewportScrollY: () =>
            this.scrollTarget_[
              this.scrollTarget_ === window ? "pageYOffset" : "scrollTop"
            ],
          getTotalActionItems: () =>
            this.root_.querySelectorAll(L.ACTION_ITEM_SELECTOR).length
        });
        let e;
        return (
          (this.scrollTarget_ = window),
          (e = this.root_.classList.contains(T.SHORT_CLASS)
            ? new I(t)
            : this.root_.classList.contains(T.FIXED_CLASS)
              ? new S(t)
              : new O(t))
        );
      }
    }
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const R = {
        ROOT: "mdc-drawer",
        DISMISSIBLE: "mdc-drawer--dismissible",
        MODAL: "mdc-drawer--modal",
        OPEN: "mdc-drawer--open",
        ANIMATE: "mdc-drawer--animate",
        OPENING: "mdc-drawer--opening",
        CLOSING: "mdc-drawer--closing"
      },
      w = {
        APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
        SCRIM_SELECTOR: ".mdc-drawer-scrim",
        CLOSE_EVENT: "MDCDrawer:closed",
        OPEN_EVENT: "MDCDrawer:opened"
      };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class D extends s {
      static get strings() {
        return w;
      }
      static get cssClasses() {
        return R;
      }
      static get defaultAdapter() {
        return {
          addClass: () => {},
          removeClass: () => {},
          hasClass: () => {},
          elementHasClass: () => {},
          notifyClose: () => {},
          notifyOpen: () => {},
          saveFocus: () => {},
          restoreFocus: () => {},
          focusActiveNavigationItem: () => {},
          trapFocus: () => {},
          releaseFocus: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(D.defaultAdapter, t)),
          (this.animationFrame_ = 0),
          (this.animationTimer_ = 0);
      }
      destroy() {
        this.animationFrame_ && cancelAnimationFrame(this.animationFrame_),
          this.animationTimer_ && clearTimeout(this.animationTimer_);
      }
      open() {
        this.isOpen() ||
          this.isOpening() ||
          this.isClosing() ||
          (this.adapter_.addClass(R.OPEN),
          this.adapter_.addClass(R.ANIMATE),
          this.runNextAnimationFrame_(() => {
            this.adapter_.addClass(R.OPENING);
          }),
          this.adapter_.saveFocus());
      }
      close() {
        !this.isOpen() ||
          this.isOpening() ||
          this.isClosing() ||
          this.adapter_.addClass(R.CLOSING);
      }
      opened() {}
      closed() {}
      isOpen() {
        return this.adapter_.hasClass(R.OPEN);
      }
      isOpening() {
        return this.adapter_.hasClass(R.OPENING);
      }
      isClosing() {
        return this.adapter_.hasClass(R.CLOSING);
      }
      handleKeydown(t) {
        const { keyCode: e, key: i } = t;
        ("Escape" === i || 27 === e) && this.close();
      }
      handleTransitionEnd(t) {
        const { OPENING: e, CLOSING: i, OPEN: s, ANIMATE: n, ROOT: a } = R;
        t.target instanceof Element &&
          this.adapter_.elementHasClass(t.target, a) &&
          (this.isClosing()
            ? (this.adapter_.removeClass(s),
              this.adapter_.restoreFocus(),
              this.closed(),
              this.adapter_.notifyClose())
            : (this.adapter_.focusActiveNavigationItem(),
              this.opened(),
              this.adapter_.notifyOpen()),
          this.adapter_.removeClass(n),
          this.adapter_.removeClass(e),
          this.adapter_.removeClass(i));
      }
      runNextAnimationFrame_(t) {
        cancelAnimationFrame(this.animationFrame_),
          (this.animationFrame_ = requestAnimationFrame(() => {
            (this.animationFrame_ = 0),
              clearTimeout(this.animationTimer_),
              (this.animationTimer_ = setTimeout(t, 0));
          }));
      }
    }
    var N = D;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var F = class extends N {
      opened() {
        this.adapter_.trapFocus();
      }
      closed() {
        this.adapter_.releaseFocus();
      }
      handleScrimClick() {
        this.close();
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const M = {
        ROOT: "mdc-list",
        LIST_ITEM_CLASS: "mdc-list-item",
        LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
        LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated"
      },
      k = {
        ARIA_ORIENTATION: "aria-orientation",
        ARIA_ORIENTATION_HORIZONTAL: "horizontal",
        ARIA_SELECTED: "aria-selected",
        CHECKBOX_RADIO_SELECTOR:
          'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
        CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `.${
          M.LIST_ITEM_CLASS
        } button:not(:disabled), \n  .${M.LIST_ITEM_CLASS} a`,
        FOCUSABLE_CHILD_ELEMENTS: `.${
          M.LIST_ITEM_CLASS
        } button:not(:disabled), .${M.LIST_ITEM_CLASS} a,\n  .${
          M.LIST_ITEM_CLASS
        } input[type="radio"]:not(:disabled),\n  .${
          M.LIST_ITEM_CLASS
        } input[type="checkbox"]:not(:disabled)`,
        ENABLED_ITEMS_SELECTOR: ".mdc-list-item:not(.mdc-list-item--disabled)"
      },
      H = ["input", "button", "textarea", "select"];
    class P extends s {
      static get strings() {
        return k;
      }
      static get cssClasses() {
        return M;
      }
      static get defaultAdapter() {
        return {
          getListItemCount: () => {},
          getFocusedElementIndex: () => {},
          setAttributeForElementIndex: () => {},
          removeAttributeForElementIndex: () => {},
          addClassForElementIndex: () => {},
          removeClassForElementIndex: () => {},
          focusItemAtIndex: () => {},
          setTabIndexForListItemChildren: () => {},
          followHref: () => {},
          toggleCheckbox: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(P.defaultAdapter, t)),
          (this.wrapFocus_ = !1),
          (this.isVertical_ = !0),
          (this.isSingleSelectionList_ = !1),
          (this.selectedIndex_ = -1),
          (this.useActivatedClass_ = !1);
      }
      setWrapFocus(t) {
        this.wrapFocus_ = t;
      }
      setVerticalOrientation(t) {
        this.isVertical_ = t;
      }
      setSingleSelection(t) {
        this.isSingleSelectionList_ = t;
      }
      setUseActivatedClass(t) {
        this.useActivatedClass_ = t;
      }
      setSelectedIndex(t) {
        if (t === this.selectedIndex_) return;
        const e = this.useActivatedClass_
          ? M.LIST_ITEM_ACTIVATED_CLASS
          : M.LIST_ITEM_SELECTED_CLASS;
        this.selectedIndex_ >= 0 &&
          (this.adapter_.removeAttributeForElementIndex(
            this.selectedIndex_,
            k.ARIA_SELECTED
          ),
          this.adapter_.removeClassForElementIndex(this.selectedIndex_, e),
          this.adapter_.setAttributeForElementIndex(
            this.selectedIndex_,
            "tabindex",
            -1
          )),
          t >= 0 &&
            this.adapter_.getListItemCount() > t &&
            ((this.selectedIndex_ = t),
            this.adapter_.setAttributeForElementIndex(
              this.selectedIndex_,
              k.ARIA_SELECTED,
              !0
            ),
            this.adapter_.addClassForElementIndex(this.selectedIndex_, e),
            this.adapter_.setAttributeForElementIndex(
              this.selectedIndex_,
              "tabindex",
              0
            ),
            0 !== this.selectedIndex_ &&
              this.adapter_.setAttributeForElementIndex(0, "tabindex", -1));
      }
      handleFocusIn(t, e) {
        e >= 0 && this.adapter_.setTabIndexForListItemChildren(e, 0);
      }
      handleFocusOut(t, e) {
        e >= 0 && this.adapter_.setTabIndexForListItemChildren(e, -1);
      }
      handleKeydown(t, e, i) {
        const s = "ArrowLeft" === t.key || 37 === t.keyCode,
          n = "ArrowUp" === t.key || 38 === t.keyCode,
          a = "ArrowRight" === t.key || 39 === t.keyCode,
          r = "ArrowDown" === t.key || 40 === t.keyCode,
          o = "Home" === t.key || 36 === t.keyCode,
          d = "End" === t.key || 35 === t.keyCode,
          c = "Enter" === t.key || 13 === t.keyCode,
          l = "Space" === t.key || 32 === t.keyCode;
        let h = this.adapter_.getFocusedElementIndex();
        if (!(-1 === h && (h = i) < 0))
          if ((this.isVertical_ && r) || (!this.isVertical_ && a))
            this.preventDefaultEvent_(t), this.focusNextElement(h);
          else if ((this.isVertical_ && n) || (!this.isVertical_ && s))
            this.preventDefaultEvent_(t), this.focusPrevElement(h);
          else if (o) this.preventDefaultEvent_(t), this.focusFirstElement();
          else if (d) this.preventDefaultEvent_(t), this.focusLastElement();
          else if (c || l) {
            e &&
              (this.isSingleSelectionList_ &&
                (this.setSelectedIndex(h), this.preventDefaultEvent_(t)),
              this.adapter_.followHref(h)),
              this.adapter_.toggleCheckbox(i) && this.preventDefaultEvent_(t);
          }
      }
      handleClick(t, e) {
        -1 !== t &&
          (e && this.adapter_.toggleCheckbox(t),
          this.isSingleSelectionList_ && this.setSelectedIndex(t));
      }
      preventDefaultEvent_(t) {
        const e = `${t.target.tagName}`.toLowerCase();
        -1 === H.indexOf(e) && t.preventDefault();
      }
      focusNextElement(t) {
        let e = t + 1;
        if (e >= this.adapter_.getListItemCount()) {
          if (!this.wrapFocus_) return;
          e = 0;
        }
        this.adapter_.focusItemAtIndex(e);
      }
      focusPrevElement(t) {
        let e = t - 1;
        if (e < 0) {
          if (!this.wrapFocus_) return;
          e = this.adapter_.getListItemCount() - 1;
        }
        this.adapter_.focusItemAtIndex(e);
      }
      focusFirstElement() {
        this.adapter_.getListItemCount() > 0 &&
          this.adapter_.focusItemAtIndex(0);
      }
      focusLastElement() {
        const t = this.adapter_.getListItemCount() - 1;
        t >= 0 && this.adapter_.focusItemAtIndex(t);
      }
    }
    var B = P;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ function V(t, e) {
      return (t.matches || t.webkitMatchesSelector || t.msMatchesSelector).call(
        t,
        e
      );
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class K extends a {
      constructor(...t) {
        super(...t),
          this.handleKeydown_,
          this.handleClick_,
          this.focusInEventListener_,
          this.focusOutEventListener_;
      }
      static attachTo(t) {
        return new K(t);
      }
      destroy() {
        this.root_.removeEventListener("keydown", this.handleKeydown_),
          this.root_.removeEventListener("click", this.handleClick_),
          this.root_.removeEventListener("focusin", this.focusInEventListener_),
          this.root_.removeEventListener(
            "focusout",
            this.focusOutEventListener_
          );
      }
      initialSyncWithDOM() {
        (this.handleClick_ = this.handleClickEvent_.bind(this)),
          (this.handleKeydown_ = this.handleKeydownEvent_.bind(this)),
          (this.focusInEventListener_ = this.handleFocusInEvent_.bind(this)),
          (this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this)),
          this.root_.addEventListener("keydown", this.handleKeydown_),
          this.root_.addEventListener("focusin", this.focusInEventListener_),
          this.root_.addEventListener("focusout", this.focusOutEventListener_),
          this.root_.addEventListener("click", this.handleClick_),
          this.layout(),
          this.initializeListType();
      }
      layout() {
        const t = this.root_.getAttribute(k.ARIA_ORIENTATION);
        (this.vertical = t !== k.ARIA_ORIENTATION_HORIZONTAL),
          [].slice
            .call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])"))
            .forEach(t => {
              t.setAttribute("tabindex", -1);
            }),
          [].slice
            .call(this.root_.querySelectorAll(k.FOCUSABLE_CHILD_ELEMENTS))
            .forEach(t => t.setAttribute("tabindex", -1));
      }
      getListItemIndex_(t) {
        let e = t.target,
          i = -1;
        for (
          ;
          !e.classList.contains(M.LIST_ITEM_CLASS) &&
          !e.classList.contains(M.ROOT);

        )
          e = e.parentElement;
        return (
          e.classList.contains(M.LIST_ITEM_CLASS) &&
            (i = this.listElements.indexOf(e)),
          i
        );
      }
      handleFocusInEvent_(t) {
        const e = this.getListItemIndex_(t);
        this.foundation_.handleFocusIn(t, e);
      }
      handleFocusOutEvent_(t) {
        const e = this.getListItemIndex_(t);
        this.foundation_.handleFocusOut(t, e);
      }
      handleKeydownEvent_(t) {
        const e = this.getListItemIndex_(t);
        e >= 0 &&
          this.foundation_.handleKeydown(
            t,
            t.target.classList.contains(M.LIST_ITEM_CLASS),
            e
          );
      }
      handleClickEvent_(t) {
        const e = this.getListItemIndex_(t),
          i = !V(t.target, k.CHECKBOX_RADIO_SELECTOR);
        this.foundation_.handleClick(e, i);
      }
      initializeListType() {
        const t = this.root_.querySelector(
          `.${M.LIST_ITEM_ACTIVATED_CLASS}, .${M.LIST_ITEM_SELECTED_CLASS}`
        );
        t &&
          (t.classList.contains(M.LIST_ITEM_ACTIVATED_CLASS) &&
            this.foundation_.setUseActivatedClass(!0),
          (this.singleSelection = !0),
          (this.selectedIndex = this.listElements.indexOf(t)));
      }
      set vertical(t) {
        this.foundation_.setVerticalOrientation(t);
      }
      get listElements() {
        return [].slice.call(
          this.root_.querySelectorAll(k.ENABLED_ITEMS_SELECTOR)
        );
      }
      set wrapFocus(t) {
        this.foundation_.setWrapFocus(t);
      }
      set singleSelection(t) {
        this.foundation_.setSingleSelection(t);
      }
      set selectedIndex(t) {
        this.foundation_.setSelectedIndex(t);
      }
      getDefaultFoundation() {
        return new B(
          Object.assign({
            getListItemCount: () => this.listElements.length,
            getFocusedElementIndex: () =>
              this.listElements.indexOf(document.activeElement),
            setAttributeForElementIndex: (t, e, i) => {
              const s = this.listElements[t];
              s && s.setAttribute(e, i);
            },
            removeAttributeForElementIndex: (t, e) => {
              const i = this.listElements[t];
              i && i.removeAttribute(e);
            },
            addClassForElementIndex: (t, e) => {
              const i = this.listElements[t];
              i && i.classList.add(e);
            },
            removeClassForElementIndex: (t, e) => {
              const i = this.listElements[t];
              i && i.classList.remove(e);
            },
            focusItemAtIndex: t => {
              const e = this.listElements[t];
              e && e.focus();
            },
            setTabIndexForListItemChildren: (t, e) => {
              const i = this.listElements[t];
              [].slice
                .call(i.querySelectorAll(k.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX))
                .forEach(t => t.setAttribute("tabindex", e));
            },
            followHref: t => {
              const e = this.listElements[t];
              e && e.href && e.click();
            },
            toggleCheckbox: t => {
              let e = !1;
              const i = this.listElements[t];
              return (
                [].slice
                  .call(i.querySelectorAll(k.CHECKBOX_RADIO_SELECTOR))
                  .forEach(t => {
                    const i = document.createEvent("Event");
                    i.initEvent("change", !0, !0),
                      (t.checked && "radio" === t.type) ||
                        ((t.checked = !t.checked), t.dispatchEvent(i)),
                      (e = !0);
                  }),
                e
              );
            }
          })
        );
      }
    }
    var G = i(0),
      $ = i.n(G);
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class q extends a {
      constructor(...t) {
        super(...t),
          this.previousFocus_,
          this.handleKeydown_,
          this.handleTransitionEnd_,
          this.focusTrapFactory_,
          this.focusTrap_,
          this.scrim_,
          this.handleScrimClick_,
          this.list_;
      }
      static attachTo(t) {
        return new q(t);
      }
      get open() {
        return this.foundation_.isOpen();
      }
      set open(t) {
        t ? this.foundation_.open() : this.foundation_.close();
      }
      initialize(t = $.a, e = t => new K(t)) {
        const i = this.root_.querySelector(`.${B.cssClasses.ROOT}`);
        i && ((this.list_ = e(i)), (this.list_.wrapFocus = !0)),
          (this.focusTrapFactory_ = t);
      }
      initialSyncWithDOM() {
        const { MODAL: t } = N.cssClasses;
        if (this.root_.classList.contains(t)) {
          const { SCRIM_SELECTOR: t } = N.strings;
          (this.scrim_ = this.root_.parentElement.querySelector(t)),
            (this.handleScrimClick_ = () =>
              this.foundation_.handleScrimClick()),
            this.scrim_.addEventListener("click", this.handleScrimClick_),
            (this.focusTrap_ =
              /**
               * @license
               * Copyright 2016 Google Inc.
               *
               * Permission is hereby granted, free of charge, to any person obtaining a copy
               * of this software and associated documentation files (the "Software"), to deal
               * in the Software without restriction, including without limitation the rights
               * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
               * copies of the Software, and to permit persons to whom the Software is
               * furnished to do so, subject to the following conditions:
               *
               * The above copyright notice and this permission notice shall be included in
               * all copies or substantial portions of the Software.
               *
               * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
               * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
               * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
               * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
               * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
               * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
               * THE SOFTWARE.
               */
              (function(t, e = $.a) {
                return e(t, {
                  clickOutsideDeactivates: !0,
                  initialFocus: !1,
                  escapeDeactivates: !1,
                  returnFocusOnDeactivate: !1
                });
              })(this.root_, this.focusTrapFactory_));
        }
        (this.handleKeydown_ = t => this.foundation_.handleKeydown(t)),
          (this.handleTransitionEnd_ = t =>
            this.foundation_.handleTransitionEnd(t)),
          this.root_.addEventListener("keydown", this.handleKeydown_),
          this.root_.addEventListener(
            "transitionend",
            this.handleTransitionEnd_
          );
      }
      destroy() {
        this.root_.removeEventListener("keydown", this.handleKeydown_),
          this.root_.removeEventListener(
            "transitionend",
            this.handleTransitionEnd_
          ),
          this.list_ && this.list_.destroy();
        const { MODAL: t } = N.cssClasses;
        this.root_.classList.contains(t) &&
          (this.scrim_.removeEventListener("click", this.handleScrimClick_),
          (this.open = !1));
      }
      getDefaultFoundation() {
        const t = Object.assign({
            addClass: t => this.root_.classList.add(t),
            removeClass: t => this.root_.classList.remove(t),
            hasClass: t => this.root_.classList.contains(t),
            elementHasClass: (t, e) => t.classList.contains(e),
            saveFocus: () => {
              this.previousFocus_ = document.activeElement;
            },
            restoreFocus: () => {
              const t = this.previousFocus_ && this.previousFocus_.focus;
              this.root_.contains(document.activeElement) &&
                t &&
                this.previousFocus_.focus();
            },
            focusActiveNavigationItem: () => {
              const t = this.root_.querySelector(
                `.${B.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`
              );
              t && t.focus();
            },
            notifyClose: () => this.emit(w.CLOSE_EVENT, {}, !0),
            notifyOpen: () => this.emit(w.OPEN_EVENT, {}, !0),
            trapFocus: () => this.focusTrap_.activate(),
            releaseFocus: () => this.focusTrap_.deactivate()
          }),
          { DISMISSIBLE: e, MODAL: i } = N.cssClasses;
        if (this.root_.classList.contains(e)) return new N(t);
        if (this.root_.classList.contains(i)) return new F(t);
        throw new Error(
          `MDCDrawer: Failed to instantiate component. Supported variants are ${e} and ${i}.`
        );
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const U = {
        ROOT: "mdc-menu",
        MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
        MENU_SELECTION_GROUP: "mdc-menu__selection-group"
      },
      z = {
        SELECTED_EVENT: "MDCMenu:selected",
        ARIA_SELECTED_ATTR: "aria-selected",
        LIST_SELECTOR: ".mdc-list",
        CHECKBOX_SELECTOR: 'input[type="checkbox"]'
      };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const W = {
        ANCHOR: "mdc-menu-surface--anchor",
        ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
        ANIMATING_OPEN: "mdc-menu-surface--animating-open",
        FIXED: "mdc-menu-surface--fixed",
        OPEN: "mdc-menu-surface--open",
        ROOT: "mdc-menu-surface"
      },
      Y = {
        CLOSED_EVENT: "MDCMenuSurface:closed",
        OPENED_EVENT: "MDCMenuSurface:opened",
        FOCUSABLE_ELEMENTS:
          'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
      },
      X = {
        TRANSITION_OPEN_DURATION: 120,
        TRANSITION_CLOSE_DURATION: 75,
        MARGIN_TO_EDGE: 32,
        ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
      },
      j = { BOTTOM: 1, CENTER: 2, RIGHT: 4, FLIP_RTL: 8 },
      Q = {
        TOP_LEFT: 0,
        TOP_RIGHT: j.RIGHT,
        BOTTOM_LEFT: j.BOTTOM,
        BOTTOM_RIGHT: j.BOTTOM | j.RIGHT,
        TOP_START: j.FLIP_RTL,
        TOP_END: j.FLIP_RTL | j.RIGHT,
        BOTTOM_START: j.BOTTOM | j.FLIP_RTL,
        BOTTOM_END: j.BOTTOM | j.RIGHT | j.FLIP_RTL
      };
    class Z extends s {
      static get cssClasses() {
        return W;
      }
      static get strings() {
        return Y;
      }
      static get numbers() {
        return X;
      }
      static get Corner() {
        return Q;
      }
      static get defaultAdapter() {
        return {
          addClass: () => {},
          removeClass: () => {},
          hasClass: () => !1,
          hasAnchor: () => !1,
          notifyClose: () => {},
          notifyOpen: () => {},
          isElementInContainer: () => !1,
          isRtl: () => !1,
          setTransformOrigin: () => {},
          isFocused: () => !1,
          saveFocus: () => {},
          restoreFocus: () => {},
          isFirstElementFocused: () => {},
          isLastElementFocused: () => {},
          focusFirstElement: () => {},
          focusLastElement: () => {},
          getInnerDimensions: () => ({}),
          getAnchorDimensions: () => ({}),
          getWindowDimensions: () => ({}),
          getBodyDimensions: () => ({}),
          getWindowScroll: () => ({}),
          setPosition: () => {},
          setMaxHeight: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(Z.defaultAdapter, t)),
          (this.isOpen_ = !1),
          (this.openAnimationEndTimerId_ = 0),
          (this.closeAnimationEndTimerId_ = 0),
          (this.animationRequestId_ = 0),
          this.dimensions_,
          (this.anchorCorner_ = Q.TOP_START),
          (this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 }),
          (this.measures_ = null),
          (this.quickOpen_ = !1),
          (this.hoistedElement_ = !1),
          (this.isFixedPosition_ = !1),
          (this.position_ = { x: 0, y: 0 });
      }
      init() {
        const { ROOT: t, OPEN: e } = Z.cssClasses;
        if (!this.adapter_.hasClass(t))
          throw new Error(`${t} class required in root element.`);
        this.adapter_.hasClass(e) && (this.isOpen_ = !0);
      }
      destroy() {
        clearTimeout(this.openAnimationEndTimerId_),
          clearTimeout(this.closeAnimationEndTimerId_),
          cancelAnimationFrame(this.animationRequestId_);
      }
      setAnchorCorner(t) {
        this.anchorCorner_ = t;
      }
      setAnchorMargin(t) {
        (this.anchorMargin_.top = "number" == typeof t.top ? t.top : 0),
          (this.anchorMargin_.right = "number" == typeof t.right ? t.right : 0),
          (this.anchorMargin_.bottom =
            "number" == typeof t.bottom ? t.bottom : 0),
          (this.anchorMargin_.left = "number" == typeof t.left ? t.left : 0);
      }
      setIsHoisted(t) {
        this.hoistedElement_ = t;
      }
      setFixedPosition(t) {
        this.isFixedPosition_ = t;
      }
      setAbsolutePosition(t, e) {
        (this.position_.x = this.typeCheckisFinite_(t) ? t : 0),
          (this.position_.y = this.typeCheckisFinite_(e) ? e : 0);
      }
      setQuickOpen(t) {
        this.quickOpen_ = t;
      }
      handleBodyClick(t) {
        const e = t.target;
        this.adapter_.isElementInContainer(e) || this.close();
      }
      handleKeydown(t) {
        const { keyCode: e, key: i, shiftKey: s } = t,
          n = "Tab" === i || 9 === e;
        "Escape" === i || 27 === e
          ? this.close()
          : n &&
            (this.adapter_.isLastElementFocused() && !s
              ? (this.adapter_.focusFirstElement(), t.preventDefault())
              : this.adapter_.isFirstElementFocused() &&
                s &&
                (this.adapter_.focusLastElement(), t.preventDefault()));
      }
      getAutoLayoutMeasurements_() {
        let t = this.adapter_.getAnchorDimensions();
        const e = this.adapter_.getWindowDimensions(),
          i = this.adapter_.getBodyDimensions(),
          s = this.adapter_.getWindowScroll();
        return (
          t ||
            (t = {
              x: this.position_.x,
              y: this.position_.y,
              top: this.position_.y,
              bottom: this.position_.y,
              left: this.position_.x,
              right: this.position_.x,
              height: 0,
              width: 0
            }),
          {
            viewport: e,
            bodyDimensions: i,
            windowScroll: s,
            viewportDistance: {
              top: t.top,
              right: e.width - t.right,
              left: t.left,
              bottom: e.height - t.bottom
            },
            anchorHeight: t.height,
            anchorWidth: t.width,
            surfaceHeight: this.dimensions_.height,
            surfaceWidth: this.dimensions_.width
          }
        );
      }
      getOriginCorner_() {
        let t = Q.TOP_LEFT;
        const {
            viewportDistance: e,
            anchorHeight: i,
            anchorWidth: s,
            surfaceHeight: n,
            surfaceWidth: a
          } = this.measures_,
          r = Boolean(this.anchorCorner_ & j.BOTTOM),
          o = r
            ? e.top + i + this.anchorMargin_.bottom
            : e.top + this.anchorMargin_.top,
          d =
            n -
            (r
              ? e.bottom - this.anchorMargin_.bottom
              : e.bottom + i - this.anchorMargin_.top);
        d > 0 && n - o < d && (t |= j.BOTTOM);
        const c = this.adapter_.isRtl(),
          l = Boolean(this.anchorCorner_ & j.FLIP_RTL),
          h = Boolean(this.anchorCorner_ & j.RIGHT),
          u = (h && !c) || (!h && l && c),
          _ =
            a -
            (u
              ? e.left + s + this.anchorMargin_.right
              : e.left + this.anchorMargin_.left),
          m =
            a -
            (u
              ? e.right - this.anchorMargin_.right
              : e.right + s - this.anchorMargin_.left);
        return (
          ((_ < 0 && u && c) || (h && !u && _ < 0) || (m > 0 && _ < m)) &&
            (t |= j.RIGHT),
          t
        );
      }
      getHorizontalOriginOffset_(t) {
        const { anchorWidth: e } = this.measures_,
          i = Boolean(t & j.RIGHT),
          s = Boolean(this.anchorCorner_ & j.RIGHT);
        if (i) {
          const t = s ? e - this.anchorMargin_.left : this.anchorMargin_.right;
          return this.hoistedElement_ || this.isFixedPosition_
            ? t -
                (this.measures_.viewport.width -
                  this.measures_.bodyDimensions.width)
            : t;
        }
        return s ? e - this.anchorMargin_.right : this.anchorMargin_.left;
      }
      getVerticalOriginOffset_(t) {
        const { anchorHeight: e } = this.measures_,
          i = Boolean(t & j.BOTTOM),
          s = Boolean(this.anchorCorner_ & j.BOTTOM);
        let n = 0;
        return (n = i
          ? s
            ? e - this.anchorMargin_.top
            : -this.anchorMargin_.bottom
          : s
            ? e + this.anchorMargin_.bottom
            : this.anchorMargin_.top);
      }
      getMenuSurfaceMaxHeight_(t) {
        let e = 0;
        const { viewportDistance: i } = this.measures_,
          s = Boolean(t & j.BOTTOM),
          { MARGIN_TO_EDGE: n } = Z.numbers;
        return (
          s
            ? ((e = i.top + this.anchorMargin_.top - n),
              this.anchorCorner_ & j.BOTTOM ||
                (e += this.measures_.anchorHeight))
            : ((e =
                i.bottom -
                this.anchorMargin_.bottom +
                this.measures_.anchorHeight -
                n),
              this.anchorCorner_ & j.BOTTOM &&
                (e -= this.measures_.anchorHeight)),
          e
        );
      }
      autoPosition_() {
        this.measures_ = this.getAutoLayoutMeasurements_();
        const t = this.getOriginCorner_(),
          e = this.getMenuSurfaceMaxHeight_(t),
          i = t & j.BOTTOM ? "bottom" : "top";
        let s = t & j.RIGHT ? "right" : "left";
        const n = this.getHorizontalOriginOffset_(t),
          a = this.getVerticalOriginOffset_(t);
        let r = { [s]: n || "0", [i]: a || "0" };
        const { anchorWidth: o, surfaceWidth: d } = this.measures_;
        o / d > X.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"),
          (this.hoistedElement_ || this.isFixedPosition_) &&
            (r = this.adjustPositionForHoistedElement_(r));
        for (const t in r)
          r.hasOwnProperty(t) &&
            "0" !== r[t] &&
            (r[t] = `${parseInt(r[t], 10)}px`);
        this.adapter_.setTransformOrigin(`${s} ${i}`),
          this.adapter_.setPosition(r),
          this.adapter_.setMaxHeight(e ? e + "px" : ""),
          (this.measures_ = null);
      }
      adjustPositionForHoistedElement_(t) {
        const { windowScroll: e, viewportDistance: i } = this.measures_;
        for (const s in t)
          t.hasOwnProperty(s) &&
            (i.hasOwnProperty(s) && (t[s] = parseInt(t[s], 10) + i[s]),
            this.isFixedPosition_ ||
              ("top" === s
                ? (t[s] = parseInt(t[s], 10) + e.y)
                : "bottom" === s
                  ? (t[s] = parseInt(t[s], 10) - e.y)
                  : "left" === s
                    ? (t[s] = parseInt(t[s], 10) + e.x)
                    : "right" === s && (t[s] = parseInt(t[s], 10) - e.x)));
        return t;
      }
      open() {
        this.adapter_.saveFocus(),
          this.quickOpen_ ||
            this.adapter_.addClass(Z.cssClasses.ANIMATING_OPEN),
          (this.animationRequestId_ = requestAnimationFrame(() => {
            this.adapter_.addClass(Z.cssClasses.OPEN),
              (this.dimensions_ = this.adapter_.getInnerDimensions()),
              this.autoPosition_(),
              this.quickOpen_
                ? this.adapter_.notifyOpen()
                : (this.openAnimationEndTimerId_ = setTimeout(() => {
                    (this.openAnimationEndTimerId_ = 0),
                      this.adapter_.removeClass(Z.cssClasses.ANIMATING_OPEN),
                      this.adapter_.notifyOpen();
                  }, X.TRANSITION_OPEN_DURATION));
          })),
          (this.isOpen_ = !0);
      }
      close() {
        this.quickOpen_ ||
          this.adapter_.addClass(Z.cssClasses.ANIMATING_CLOSED),
          requestAnimationFrame(() => {
            this.adapter_.removeClass(Z.cssClasses.OPEN),
              this.quickOpen_
                ? this.adapter_.notifyClose()
                : (this.closeAnimationEndTimerId_ = setTimeout(() => {
                    (this.closeAnimationEndTimerId_ = 0),
                      this.adapter_.removeClass(Z.cssClasses.ANIMATING_CLOSED),
                      this.adapter_.notifyClose();
                  }, X.TRANSITION_CLOSE_DURATION));
          }),
          (this.isOpen_ = !1),
          this.maybeRestoreFocus_();
      }
      maybeRestoreFocus_() {
        (this.adapter_.isFocused() ||
          this.adapter_.isElementInContainer(document.activeElement)) &&
          this.adapter_.restoreFocus();
      }
      isOpen() {
        return this.isOpen_;
      }
      typeCheckisFinite_(t) {
        return "number" == typeof t && isFinite(t);
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ const J = ["input", "button", "textarea", "select"];
    class tt extends s {
      static get cssClasses() {
        return U;
      }
      static get strings() {
        return z;
      }
      static get defaultAdapter() {
        return {
          addClassToElementAtIndex: () => {},
          removeClassFromElementAtIndex: () => {},
          addAttributeToElementAtIndex: () => {},
          removeAttributeFromElementAtIndex: () => {},
          elementContainsClass: () => {},
          closeSurface: () => {},
          getElementIndex: () => {},
          getParentElement: () => {},
          getSelectedElementIndex: () => {},
          notifySelected: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(tt.defaultAdapter, t)),
          (this.closeAnimationEndTimerId_ = 0);
      }
      destroy() {
        this.closeAnimationEndTimerId_ &&
          clearTimeout(this.closeAnimationEndTimerId_),
          this.adapter_.closeSurface();
      }
      handleKeydown(t) {
        const { key: e, keyCode: i } = t,
          s = "Tab" === e || 9 === i;
        "Space" === e || 32 === i || ("Enter" === e || 13 === i)
          ? this.handleAction_(t)
          : s && this.adapter_.closeSurface();
      }
      handleClick(t) {
        this.handleAction_(t);
      }
      handleAction_(t) {
        const e = this.getListItem_(t.target);
        e && (this.handleSelection_(e), this.preventDefaultEvent_(t));
      }
      handleSelection_(t) {
        const e = this.adapter_.getElementIndex(t);
        e < 0 ||
          (this.adapter_.notifySelected({ index: e }),
          this.adapter_.closeSurface(),
          (this.closeAnimationEndTimerId_ = setTimeout(() => {
            const i = this.getSelectionGroup_(t);
            null !== i && this.handleSelectionGroup_(i, e);
          }, Z.numbers.TRANSITION_CLOSE_DURATION)));
      }
      handleSelectionGroup_(t, e) {
        const i = this.adapter_.getSelectedElementIndex(t);
        i >= 0 &&
          (this.adapter_.removeAttributeFromElementAtIndex(
            i,
            z.ARIA_SELECTED_ATTR
          ),
          this.adapter_.removeClassFromElementAtIndex(
            i,
            U.MENU_SELECTED_LIST_ITEM
          )),
          this.adapter_.addClassToElementAtIndex(e, U.MENU_SELECTED_LIST_ITEM),
          this.adapter_.addAttributeToElementAtIndex(
            e,
            z.ARIA_SELECTED_ATTR,
            "true"
          );
      }
      getSelectionGroup_(t) {
        let e = this.adapter_.getParentElement(t),
          i = this.adapter_.elementContainsClass(e, U.MENU_SELECTION_GROUP);
        for (
          ;
          !i && !this.adapter_.elementContainsClass(e, B.cssClasses.ROOT);

        )
          (e = this.adapter_.getParentElement(e)),
            (i = this.adapter_.elementContainsClass(e, U.MENU_SELECTION_GROUP));
        return i ? e : null;
      }
      getListItem_(t) {
        let e = this.adapter_.elementContainsClass(
          t,
          B.cssClasses.LIST_ITEM_CLASS
        );
        for (; !e; ) {
          if (!(t = this.adapter_.getParentElement(t))) return null;
          e = this.adapter_.elementContainsClass(
            t,
            B.cssClasses.LIST_ITEM_CLASS
          );
        }
        return t;
      }
      preventDefaultEvent_(t) {
        const e = `${t.target.tagName}`.toLowerCase();
        -1 === J.indexOf(e) && t.preventDefault();
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ let et;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class it extends a {
      constructor(...t) {
        super(...t),
          this.previousFocus_,
          this.anchorElement,
          this.firstFocusableElement_,
          this.lastFocusableElement_,
          this.handleKeydown_,
          this.handleBodyClick_,
          this.registerBodyClickListener_,
          this.deregisterBodyClickListener_;
      }
      static attachTo(t) {
        return new it(t);
      }
      initialSyncWithDOM() {
        this.root_.parentElement &&
          this.root_.parentElement.classList.contains(W.ANCHOR) &&
          (this.anchorElement = this.root_.parentElement),
          this.root_.classList.contains(W.FIXED) && this.setFixedPosition(!0),
          (this.handleKeydown_ = t => this.foundation_.handleKeydown(t)),
          (this.handleBodyClick_ = t => this.foundation_.handleBodyClick(t)),
          (this.registerBodyClickListener_ = () =>
            document.body.addEventListener("click", this.handleBodyClick_)),
          (this.deregisterBodyClickListener_ = () =>
            document.body.removeEventListener("click", this.handleBodyClick_)),
          this.root_.addEventListener("keydown", this.handleKeydown_),
          this.root_.addEventListener(
            Y.OPENED_EVENT,
            this.registerBodyClickListener_
          ),
          this.root_.addEventListener(
            Y.CLOSED_EVENT,
            this.deregisterBodyClickListener_
          );
      }
      destroy() {
        this.root_.removeEventListener("keydown", this.handleKeydown_),
          this.root_.removeEventListener(
            Y.OPENED_EVENT,
            this.registerBodyClickListener_
          ),
          this.root_.removeEventListener(
            Y.CLOSED_EVENT,
            this.deregisterBodyClickListener_
          ),
          super.destroy();
      }
      get open() {
        return this.foundation_.isOpen();
      }
      set open(t) {
        if (t) {
          const t = this.root_.querySelectorAll(Y.FOCUSABLE_ELEMENTS);
          (this.firstFocusableElement_ = t.length > 0 ? t[0] : null),
            (this.lastFocusableElement_ =
              t.length > 0 ? t[t.length - 1] : null),
            this.foundation_.open();
        } else this.foundation_.close();
      }
      hoistMenuToBody() {
        document.body.appendChild(
          this.root_.parentElement.removeChild(this.root_)
        ),
          this.setIsHoisted(!0);
      }
      setIsHoisted(t) {
        this.foundation_.setIsHoisted(t);
      }
      setMenuSurfaceAnchorElement(t) {
        this.anchorElement = t;
      }
      setFixedPosition(t) {
        t
          ? this.root_.classList.add(W.FIXED)
          : this.root_.classList.remove(W.FIXED),
          this.foundation_.setFixedPosition(t);
      }
      setAbsolutePosition(t, e) {
        this.foundation_.setAbsolutePosition(t, e), this.setIsHoisted(!0);
      }
      setAnchorCorner(t) {
        this.foundation_.setAnchorCorner(t);
      }
      setAnchorMargin(t) {
        this.foundation_.setAnchorMargin(t);
      }
      set quickOpen(t) {
        this.foundation_.setQuickOpen(t);
      }
      getDefaultFoundation() {
        return new Z(
          Object.assign(
            {
              addClass: t => this.root_.classList.add(t),
              removeClass: t => this.root_.classList.remove(t),
              hasClass: t => this.root_.classList.contains(t),
              hasAnchor: () => !!this.anchorElement,
              notifyClose: () => this.emit(Z.strings.CLOSED_EVENT, {}),
              notifyOpen: () => this.emit(Z.strings.OPENED_EVENT, {}),
              isElementInContainer: t =>
                this.root_ === t || this.root_.contains(t),
              isRtl: () =>
                "rtl" ===
                getComputedStyle(this.root_).getPropertyValue("direction"),
              setTransformOrigin: t => {
                this.root_.style[
                  `${(function(t, e = !1) {
                    if (void 0 === et || e) {
                      const e =
                        "transform" in t.document.createElement("div").style
                          ? "transform"
                          : "webkitTransform";
                      et = e;
                    }
                    return et;
                  })(window)}-origin`
                ] = t;
              }
            },
            this.getFocusAdapterMethods_(),
            this.getDimensionAdapterMethods_()
          )
        );
      }
      getFocusAdapterMethods_() {
        return {
          isFocused: () => document.activeElement === this.root_,
          saveFocus: () => {
            this.previousFocus_ = document.activeElement;
          },
          restoreFocus: () => {
            this.root_.contains(document.activeElement) &&
              this.previousFocus_ &&
              this.previousFocus_.focus &&
              this.previousFocus_.focus();
          },
          isFirstElementFocused: () =>
            this.firstFocusableElement_ &&
            this.firstFocusableElement_ === document.activeElement,
          isLastElementFocused: () =>
            this.lastFocusableElement_ &&
            this.lastFocusableElement_ === document.activeElement,
          focusFirstElement: () =>
            this.firstFocusableElement_ &&
            this.firstFocusableElement_.focus &&
            this.firstFocusableElement_.focus(),
          focusLastElement: () =>
            this.lastFocusableElement_ &&
            this.lastFocusableElement_.focus &&
            this.lastFocusableElement_.focus()
        };
      }
      getDimensionAdapterMethods_() {
        return {
          getInnerDimensions: () => ({
            width: this.root_.offsetWidth,
            height: this.root_.offsetHeight
          }),
          getAnchorDimensions: () =>
            this.anchorElement && this.anchorElement.getBoundingClientRect(),
          getWindowDimensions: () => ({
            width: window.innerWidth,
            height: window.innerHeight
          }),
          getBodyDimensions: () => ({
            width: document.body.clientWidth,
            height: document.body.clientHeight
          }),
          getWindowScroll: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset
          }),
          setPosition: t => {
            (this.root_.style.left = "left" in t ? t.left : null),
              (this.root_.style.right = "right" in t ? t.right : null),
              (this.root_.style.top = "top" in t ? t.top : null),
              (this.root_.style.bottom = "bottom" in t ? t.bottom : null);
          },
          setMaxHeight: t => {
            this.root_.style.maxHeight = t;
          }
        };
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class st extends a {
      constructor(...t) {
        super(...t),
          this.menuSurface_,
          this.list_,
          this.handleKeydown_,
          this.handleClick_,
          this.afterOpenedCallback_;
      }
      static attachTo(t) {
        return new st(t);
      }
      initialize(t = t => new it(t), e = t => new K(t)) {
        this.menuSurface_ = t(this.root_);
        const i = this.root_.querySelector(z.LIST_SELECTOR);
        i && ((this.list_ = e(i)), (this.list_.wrapFocus = !0));
      }
      initialSyncWithDOM() {
        (this.afterOpenedCallback_ = () => this.handleAfterOpened_()),
          (this.handleKeydown_ = t => this.foundation_.handleKeydown(t)),
          (this.handleClick_ = t => this.foundation_.handleClick(t)),
          this.menuSurface_.listen(
            Z.strings.OPENED_EVENT,
            this.afterOpenedCallback_
          ),
          this.listen("keydown", this.handleKeydown_),
          this.listen("click", this.handleClick_);
      }
      destroy() {
        this.list_ && this.list_.destroy(),
          this.menuSurface_.destroy(),
          this.menuSurface_.unlisten(
            Z.strings.OPENED_EVENT,
            this.afterOpenedCallback_
          ),
          this.unlisten("keydown", this.handleKeydown_),
          this.unlisten("click", this.handleClick_),
          super.destroy();
      }
      get open() {
        return this.menuSurface_.open;
      }
      set open(t) {
        this.menuSurface_.open = t;
      }
      setAnchorCorner(t) {
        this.menuSurface_.setAnchorCorner(t);
      }
      setAnchorMargin(t) {
        this.menuSurface_.setAnchorMargin(t);
      }
      get items() {
        return this.list_.listElements;
      }
      getOptionByIndex(t) {
        return t < this.items.length ? this.items[t] : null;
      }
      set quickOpen(t) {
        this.menuSurface_.quickOpen = t;
      }
      setFixedPosition(t) {
        this.menuSurface_.setFixedPosition(t);
      }
      hoistMenuToBody() {
        this.menuSurface_.hoistMenuToBody();
      }
      setIsHoisted(t) {
        this.menuSurface_.setIsHoisted(t);
      }
      setAbsolutePosition(t, e) {
        this.menuSurface_.setAbsolutePosition(t, e);
      }
      setAnchorElement(t) {
        this.menuSurface_.anchorElement = t;
      }
      handleAfterOpened_() {
        const t = this.items;
        t.length > 0 && t[0].focus();
      }
      getDefaultFoundation() {
        return new tt({
          addClassToElementAtIndex: (t, e) => {
            this.items[t].classList.add(e);
          },
          removeClassFromElementAtIndex: (t, e) => {
            this.items[t].classList.remove(e);
          },
          addAttributeToElementAtIndex: (t, e, i) => {
            this.items[t].setAttribute(e, i);
          },
          removeAttributeFromElementAtIndex: (t, e) => {
            this.items[t].removeAttribute(e);
          },
          elementContainsClass: (t, e) => t.classList.contains(e),
          closeSurface: () => (this.open = !1),
          getElementIndex: t => this.items.indexOf(t),
          getParentElement: t => t.parentElement,
          getSelectedElementIndex: t =>
            this.items.indexOf(
              t.querySelector(`.${U.MENU_SELECTED_LIST_ITEM}`)
            ),
          notifySelected: t =>
            this.emit(z.SELECTED_EVENT, {
              index: t.index,
              item: this.items[t.index]
            })
        });
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const nt = {
        ACTIVE: "mdc-tab-indicator--active",
        FADE: "mdc-tab-indicator--fade",
        NO_TRANSITION: "mdc-tab-indicator--no-transition"
      },
      at = { CONTENT_SELECTOR: ".mdc-tab-indicator__content" };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class rt extends s {
      static get cssClasses() {
        return nt;
      }
      static get strings() {
        return at;
      }
      static get defaultAdapter() {
        return {
          addClass: () => {},
          removeClass: () => {},
          computeContentClientRect: () => {},
          setContentStyleProperty: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(rt.defaultAdapter, t));
      }
      computeContentClientRect() {
        return this.adapter_.computeContentClientRect();
      }
      activate(t) {}
      deactivate() {}
    }
    var ot = rt;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var dt = class extends ot {
      activate(t) {
        if (!t) return void this.adapter_.addClass(ot.cssClasses.ACTIVE);
        const e = this.computeContentClientRect(),
          i = t.width / e.width,
          s = t.left - e.left;
        this.adapter_.addClass(ot.cssClasses.NO_TRANSITION),
          this.adapter_.setContentStyleProperty(
            "transform",
            `translateX(${s}px) scaleX(${i})`
          ),
          this.computeContentClientRect(),
          this.adapter_.removeClass(ot.cssClasses.NO_TRANSITION),
          this.adapter_.addClass(ot.cssClasses.ACTIVE),
          this.adapter_.setContentStyleProperty("transform", "");
      }
      deactivate() {
        this.adapter_.removeClass(ot.cssClasses.ACTIVE);
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var ct = class extends ot {
      activate() {
        this.adapter_.addClass(ot.cssClasses.ACTIVE);
      }
      deactivate() {
        this.adapter_.removeClass(ot.cssClasses.ACTIVE);
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class lt extends a {
      static attachTo(t) {
        return new lt(t);
      }
      constructor(...t) {
        super(...t), this.content_;
      }
      initialize() {
        this.content_ = this.root_.querySelector(ot.strings.CONTENT_SELECTOR);
      }
      computeContentClientRect() {
        return this.foundation_.computeContentClientRect();
      }
      getDefaultFoundation() {
        const t = Object.assign({
          addClass: t => this.root_.classList.add(t),
          removeClass: t => this.root_.classList.remove(t),
          computeContentClientRect: () => this.content_.getBoundingClientRect(),
          setContentStyleProperty: (t, e) =>
            this.content_.style.setProperty(t, e)
        });
        return this.root_.classList.contains(ot.cssClasses.FADE)
          ? new ct(t)
          : new dt(t);
      }
      activate(t) {
        this.foundation_.activate(t);
      }
      deactivate() {
        this.foundation_.deactivate();
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const ht = { ACTIVE: "mdc-tab--active" },
      ut = {
        ARIA_SELECTED: "aria-selected",
        RIPPLE_SELECTOR: ".mdc-tab__ripple",
        CONTENT_SELECTOR: ".mdc-tab__content",
        TAB_INDICATOR_SELECTOR: ".mdc-tab-indicator",
        TABINDEX: "tabIndex",
        INTERACTED_EVENT: "MDCTab:interacted"
      };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class _t extends s {
      static get cssClasses() {
        return ht;
      }
      static get strings() {
        return ut;
      }
      static get defaultAdapter() {
        return {
          addClass: () => {},
          removeClass: () => {},
          hasClass: () => {},
          setAttr: () => {},
          activateIndicator: () => {},
          deactivateIndicator: () => {},
          notifyInteracted: () => {},
          getOffsetLeft: () => {},
          getOffsetWidth: () => {},
          getContentOffsetLeft: () => {},
          getContentOffsetWidth: () => {},
          focus: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(_t.defaultAdapter, t)),
          (this.handleClick_ = () => this.handleClick());
      }
      handleClick() {
        this.adapter_.notifyInteracted();
      }
      isActive() {
        return this.adapter_.hasClass(ht.ACTIVE);
      }
      activate(t) {
        this.adapter_.addClass(ht.ACTIVE),
          this.adapter_.setAttr(ut.ARIA_SELECTED, "true"),
          this.adapter_.setAttr(ut.TABINDEX, "0"),
          this.adapter_.activateIndicator(t),
          this.adapter_.focus();
      }
      deactivate() {
        this.isActive() &&
          (this.adapter_.removeClass(ht.ACTIVE),
          this.adapter_.setAttr(ut.ARIA_SELECTED, "false"),
          this.adapter_.setAttr(ut.TABINDEX, "-1"),
          this.adapter_.deactivateIndicator());
      }
      computeDimensions() {
        const t = this.adapter_.getOffsetWidth(),
          e = this.adapter_.getOffsetLeft(),
          i = this.adapter_.getContentOffsetWidth(),
          s = this.adapter_.getContentOffsetLeft();
        return {
          rootLeft: e,
          rootRight: e + t,
          contentLeft: e + s,
          contentRight: e + s + i
        };
      }
    }
    var mt = _t;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class pt extends a {
      constructor(...t) {
        super(...t),
          this.ripple_,
          this.tabIndicator_,
          this.content_,
          this.handleClick_;
      }
      static attachTo(t) {
        return new pt(t);
      }
      initialize(t = (t, e) => new C(t, e), e = t => new lt(t)) {
        const i = this.root_.querySelector(mt.strings.RIPPLE_SELECTOR),
          s = Object.assign(C.createAdapter(this), {
            addClass: t => i.classList.add(t),
            removeClass: t => i.classList.remove(t),
            updateCssVariable: (t, e) => i.style.setProperty(t, e)
          }),
          n = new f(s);
        this.ripple_ = t(this.root_, n);
        const a = this.root_.querySelector(mt.strings.TAB_INDICATOR_SELECTOR);
        (this.tabIndicator_ = e(a)),
          (this.content_ = this.root_.querySelector(
            mt.strings.CONTENT_SELECTOR
          ));
      }
      initialSyncWithDOM() {
        (this.handleClick_ = this.foundation_.handleClick.bind(
          this.foundation_
        )),
          this.listen("click", this.handleClick_);
      }
      destroy() {
        this.unlisten("click", this.handleClick_),
          this.ripple_.destroy(),
          super.destroy();
      }
      getDefaultFoundation() {
        return new mt({
          setAttr: (t, e) => this.root_.setAttribute(t, e),
          addClass: t => this.root_.classList.add(t),
          removeClass: t => this.root_.classList.remove(t),
          hasClass: t => this.root_.classList.contains(t),
          activateIndicator: t => this.tabIndicator_.activate(t),
          deactivateIndicator: () => this.tabIndicator_.deactivate(),
          notifyInteracted: () =>
            this.emit(mt.strings.INTERACTED_EVENT, { tab: this }, !0),
          getOffsetLeft: () => this.root_.offsetLeft,
          getOffsetWidth: () => this.root_.offsetWidth,
          getContentOffsetLeft: () => this.content_.offsetLeft,
          getContentOffsetWidth: () => this.content_.offsetWidth,
          focus: () => this.root_.focus()
        });
      }
      get active() {
        return this.foundation_.isActive();
      }
      activate(t) {
        this.foundation_.activate(t);
      }
      deactivate() {
        this.foundation_.deactivate();
      }
      computeIndicatorClientRect() {
        return this.tabIndicator_.computeContentClientRect();
      }
      computeDimensions() {
        return this.foundation_.computeDimensions();
      }
      focus() {
        this.root_.focus();
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const Et = {
        ANIMATING: "mdc-tab-scroller--animating",
        SCROLL_TEST: "mdc-tab-scroller__test",
        SCROLL_AREA_SCROLL: "mdc-tab-scroller__scroll-area--scroll"
      },
      ft = {
        AREA_SELECTOR: ".mdc-tab-scroller__scroll-area",
        CONTENT_SELECTOR: ".mdc-tab-scroller__scroll-content"
      };
    var Ct =
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      class {
        constructor(t) {
          this.adapter_ = t;
        }
        getScrollPositionRTL(t) {}
        scrollToRTL(t) {}
        incrementScrollRTL(t) {}
        getAnimatingScrollPosition(t, e) {}
      };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var gt = class extends Ct {
      getScrollPositionRTL() {
        const t = this.adapter_.getScrollAreaScrollLeft(),
          { right: e } = this.calculateScrollEdges_();
        return Math.round(e - t);
      }
      scrollToRTL(t) {
        const e = this.calculateScrollEdges_(),
          i = this.adapter_.getScrollAreaScrollLeft(),
          s = this.clampScrollValue_(e.right - t);
        return { finalScrollPosition: s, scrollDelta: s - i };
      }
      incrementScrollRTL(t) {
        const e = this.adapter_.getScrollAreaScrollLeft(),
          i = this.clampScrollValue_(e - t);
        return { finalScrollPosition: i, scrollDelta: i - e };
      }
      getAnimatingScrollPosition(t) {
        return t;
      }
      calculateScrollEdges_() {
        return {
          left: 0,
          right:
            this.adapter_.getScrollContentOffsetWidth() -
            this.adapter_.getScrollAreaOffsetWidth()
        };
      }
      clampScrollValue_(t) {
        const e = this.calculateScrollEdges_();
        return Math.min(Math.max(e.left, t), e.right);
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var Tt = class extends Ct {
      getScrollPositionRTL(t) {
        const e = this.adapter_.getScrollAreaScrollLeft();
        return Math.round(t - e);
      }
      scrollToRTL(t) {
        const e = this.adapter_.getScrollAreaScrollLeft(),
          i = this.clampScrollValue_(-t);
        return { finalScrollPosition: i, scrollDelta: i - e };
      }
      incrementScrollRTL(t) {
        const e = this.adapter_.getScrollAreaScrollLeft(),
          i = this.clampScrollValue_(e - t);
        return { finalScrollPosition: i, scrollDelta: i - e };
      }
      getAnimatingScrollPosition(t, e) {
        return t - e;
      }
      calculateScrollEdges_() {
        const t = this.adapter_.getScrollContentOffsetWidth();
        return { left: this.adapter_.getScrollAreaOffsetWidth() - t, right: 0 };
      }
      clampScrollValue_(t) {
        const e = this.calculateScrollEdges_();
        return Math.max(Math.min(e.right, t), e.left);
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ var vt = class extends Ct {
      getScrollPositionRTL(t) {
        const e = this.adapter_.getScrollAreaScrollLeft();
        return Math.round(e - t);
      }
      scrollToRTL(t) {
        const e = this.adapter_.getScrollAreaScrollLeft(),
          i = this.clampScrollValue_(t);
        return { finalScrollPosition: i, scrollDelta: e - i };
      }
      incrementScrollRTL(t) {
        const e = this.adapter_.getScrollAreaScrollLeft(),
          i = this.clampScrollValue_(e + t);
        return { finalScrollPosition: i, scrollDelta: e - i };
      }
      getAnimatingScrollPosition(t, e) {
        return t + e;
      }
      calculateScrollEdges_() {
        return {
          left:
            this.adapter_.getScrollContentOffsetWidth() -
            this.adapter_.getScrollAreaOffsetWidth(),
          right: 0
        };
      }
      clampScrollValue_(t) {
        const e = this.calculateScrollEdges_();
        return Math.min(Math.max(e.right, t), e.left);
      }
    };
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class Lt extends s {
      static get cssClasses() {
        return Et;
      }
      static get strings() {
        return ft;
      }
      static get defaultAdapter() {
        return {
          eventTargetMatchesSelector: () => {},
          addClass: () => {},
          removeClass: () => {},
          addScrollAreaClass: () => {},
          setScrollAreaStyleProperty: () => {},
          setScrollContentStyleProperty: () => {},
          getScrollContentStyleValue: () => {},
          setScrollAreaScrollLeft: () => {},
          getScrollAreaScrollLeft: () => {},
          getScrollContentOffsetWidth: () => {},
          getScrollAreaOffsetWidth: () => {},
          computeScrollAreaClientRect: () => {},
          computeScrollContentClientRect: () => {},
          computeHorizontalScrollbarHeight: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(Lt.defaultAdapter, t)),
          (this.isAnimating_ = !1),
          this.rtlScrollerInstance_;
      }
      init() {
        const t = this.adapter_.computeHorizontalScrollbarHeight();
        this.adapter_.setScrollAreaStyleProperty("margin-bottom", -t + "px"),
          this.adapter_.addScrollAreaClass(Lt.cssClasses.SCROLL_AREA_SCROLL);
      }
      getScrollPosition() {
        if (this.isRTL_()) return this.computeCurrentScrollPositionRTL_();
        const t = this.calculateCurrentTranslateX_();
        return this.adapter_.getScrollAreaScrollLeft() - t;
      }
      handleInteraction() {
        this.isAnimating_ && this.stopScrollAnimation_();
      }
      handleTransitionEnd(t) {
        this.isAnimating_ &&
          this.adapter_.eventTargetMatchesSelector(
            t.target,
            Lt.strings.CONTENT_SELECTOR
          ) &&
          ((this.isAnimating_ = !1),
          this.adapter_.removeClass(Lt.cssClasses.ANIMATING));
      }
      incrementScroll(t) {
        if (0 !== t)
          return this.isRTL_()
            ? this.incrementScrollRTL_(t)
            : void this.incrementScroll_(t);
      }
      scrollTo(t) {
        if (this.isRTL_()) return this.scrollToRTL_(t);
        this.scrollTo_(t);
      }
      getRTLScroller() {
        return (
          this.rtlScrollerInstance_ ||
            (this.rtlScrollerInstance_ = this.rtlScrollerFactory_()),
          this.rtlScrollerInstance_
        );
      }
      calculateCurrentTranslateX_() {
        const t = this.adapter_.getScrollContentStyleValue("transform");
        if ("none" === t) return 0;
        const e = /\((.+)\)/.exec(t)[1].split(",");
        return parseFloat(e[4]);
      }
      clampScrollValue_(t) {
        const e = this.calculateScrollEdges_();
        return Math.min(Math.max(e.left, t), e.right);
      }
      computeCurrentScrollPositionRTL_() {
        const t = this.calculateCurrentTranslateX_();
        return this.getRTLScroller().getScrollPositionRTL(t);
      }
      calculateScrollEdges_() {
        return {
          left: 0,
          right:
            this.adapter_.getScrollContentOffsetWidth() -
            this.adapter_.getScrollAreaOffsetWidth()
        };
      }
      scrollTo_(t) {
        const e = this.getScrollPosition(),
          i = this.clampScrollValue_(t),
          s = i - e;
        this.animate_({ finalScrollPosition: i, scrollDelta: s });
      }
      scrollToRTL_(t) {
        const e = this.getRTLScroller().scrollToRTL(t);
        this.animate_(e);
      }
      incrementScroll_(t) {
        const e = this.getScrollPosition(),
          i = t + e,
          s = this.clampScrollValue_(i),
          n = s - e;
        this.animate_({ finalScrollPosition: s, scrollDelta: n });
      }
      incrementScrollRTL_(t) {
        const e = this.getRTLScroller().incrementScrollRTL(t);
        this.animate_(e);
      }
      animate_(t) {
        0 !== t.scrollDelta &&
          (this.stopScrollAnimation_(),
          this.adapter_.setScrollAreaScrollLeft(t.finalScrollPosition),
          this.adapter_.setScrollContentStyleProperty(
            "transform",
            `translateX(${t.scrollDelta}px)`
          ),
          this.adapter_.computeScrollAreaClientRect(),
          requestAnimationFrame(() => {
            this.adapter_.addClass(Lt.cssClasses.ANIMATING),
              this.adapter_.setScrollContentStyleProperty("transform", "none");
          }),
          (this.isAnimating_ = !0));
      }
      stopScrollAnimation_() {
        this.isAnimating_ = !1;
        const t = this.getAnimatingScrollPosition_();
        this.adapter_.removeClass(Lt.cssClasses.ANIMATING),
          this.adapter_.setScrollContentStyleProperty(
            "transform",
            "translateX(0px)"
          ),
          this.adapter_.setScrollAreaScrollLeft(t);
      }
      getAnimatingScrollPosition_() {
        const t = this.calculateCurrentTranslateX_(),
          e = this.adapter_.getScrollAreaScrollLeft();
        return this.isRTL_()
          ? this.getRTLScroller().getAnimatingScrollPosition(e, t)
          : e - t;
      }
      rtlScrollerFactory_() {
        const t = this.adapter_.getScrollAreaScrollLeft();
        this.adapter_.setScrollAreaScrollLeft(t - 1);
        const e = this.adapter_.getScrollAreaScrollLeft();
        if (e < 0)
          return (
            this.adapter_.setScrollAreaScrollLeft(t), new Tt(this.adapter_)
          );
        const i = this.adapter_.computeScrollAreaClientRect(),
          s = this.adapter_.computeScrollContentClientRect(),
          n = Math.round(s.right - i.right);
        return (
          this.adapter_.setScrollAreaScrollLeft(t),
          n === e ? new vt(this.adapter_) : new gt(this.adapter_)
        );
      }
      isRTL_() {
        return "rtl" === this.adapter_.getScrollContentStyleValue("direction");
      }
    }
    var At = Lt;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ let bt;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class St extends a {
      static attachTo(t) {
        return new St(t);
      }
      constructor(...t) {
        super(...t),
          this.content_,
          this.area_,
          this.handleInteraction_,
          this.handleTransitionEnd_;
      }
      initialize() {
        (this.area_ = this.root_.querySelector(At.strings.AREA_SELECTOR)),
          (this.content_ = this.root_.querySelector(
            At.strings.CONTENT_SELECTOR
          ));
      }
      initialSyncWithDOM() {
        (this.handleInteraction_ = () => this.foundation_.handleInteraction()),
          (this.handleTransitionEnd_ = t =>
            this.foundation_.handleTransitionEnd(t)),
          this.area_.addEventListener("wheel", this.handleInteraction_),
          this.area_.addEventListener("touchstart", this.handleInteraction_),
          this.area_.addEventListener("pointerdown", this.handleInteraction_),
          this.area_.addEventListener("mousedown", this.handleInteraction_),
          this.area_.addEventListener("keydown", this.handleInteraction_),
          this.content_.addEventListener(
            "transitionend",
            this.handleTransitionEnd_
          );
      }
      destroy() {
        super.destroy(),
          this.area_.removeEventListener("wheel", this.handleInteraction_),
          this.area_.removeEventListener("touchstart", this.handleInteraction_),
          this.area_.removeEventListener(
            "pointerdown",
            this.handleInteraction_
          ),
          this.area_.removeEventListener("mousedown", this.handleInteraction_),
          this.area_.removeEventListener("keydown", this.handleInteraction_),
          this.content_.removeEventListener(
            "transitionend",
            this.handleTransitionEnd_
          );
      }
      getDefaultFoundation() {
        return new At({
          eventTargetMatchesSelector: (t, e) => {
            return t[
              (function(t) {
                return ["msMatchesSelector", "matches"]
                  .filter(e => e in t)
                  .pop();
              })(HTMLElement.prototype)
            ](e);
          },
          addClass: t => this.root_.classList.add(t),
          removeClass: t => this.root_.classList.remove(t),
          addScrollAreaClass: t => this.area_.classList.add(t),
          setScrollAreaStyleProperty: (t, e) =>
            this.area_.style.setProperty(t, e),
          setScrollContentStyleProperty: (t, e) =>
            this.content_.style.setProperty(t, e),
          getScrollContentStyleValue: t =>
            window.getComputedStyle(this.content_).getPropertyValue(t),
          setScrollAreaScrollLeft: t => (this.area_.scrollLeft = t),
          getScrollAreaScrollLeft: () => this.area_.scrollLeft,
          getScrollContentOffsetWidth: () => this.content_.offsetWidth,
          getScrollAreaOffsetWidth: () => this.area_.offsetWidth,
          computeScrollAreaClientRect: () => this.area_.getBoundingClientRect(),
          computeScrollContentClientRect: () =>
            this.content_.getBoundingClientRect(),
          computeHorizontalScrollbarHeight: () =>
            (function(t, e = !0) {
              if (e && void 0 !== bt) return bt;
              const i = t.createElement("div");
              i.classList.add(Et.SCROLL_TEST), t.body.appendChild(i);
              const s = i.offsetHeight - i.clientHeight;
              return t.body.removeChild(i), e && (bt = s), s;
            })(document)
        });
      }
      getScrollPosition() {
        return this.foundation_.getScrollPosition();
      }
      getScrollContentWidth() {
        return this.content_.offsetWidth;
      }
      incrementScroll(t) {
        this.foundation_.incrementScroll(t);
      }
      scrollTo(t) {
        this.foundation_.scrollTo(t);
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const It = {
        TAB_ACTIVATED_EVENT: "MDCTabBar:activated",
        TAB_SCROLLER_SELECTOR: ".mdc-tab-scroller",
        TAB_SELECTOR: ".mdc-tab",
        ARROW_LEFT_KEY: "ArrowLeft",
        ARROW_RIGHT_KEY: "ArrowRight",
        END_KEY: "End",
        HOME_KEY: "Home",
        ENTER_KEY: "Enter",
        SPACE_KEY: "Space"
      },
      yt = {
        EXTRA_SCROLL_AMOUNT: 20,
        ARROW_LEFT_KEYCODE: 37,
        ARROW_RIGHT_KEYCODE: 39,
        END_KEYCODE: 35,
        HOME_KEYCODE: 36,
        ENTER_KEYCODE: 13,
        SPACE_KEYCODE: 32
      },
      Ot = new Set();
    Ot.add(It.ARROW_LEFT_KEY),
      Ot.add(It.ARROW_RIGHT_KEY),
      Ot.add(It.END_KEY),
      Ot.add(It.HOME_KEY),
      Ot.add(It.ENTER_KEY),
      Ot.add(It.SPACE_KEY);
    const xt = new Map();
    xt.set(yt.ARROW_LEFT_KEYCODE, It.ARROW_LEFT_KEY),
      xt.set(yt.ARROW_RIGHT_KEYCODE, It.ARROW_RIGHT_KEY),
      xt.set(yt.END_KEYCODE, It.END_KEY),
      xt.set(yt.HOME_KEYCODE, It.HOME_KEY),
      xt.set(yt.ENTER_KEYCODE, It.ENTER_KEY),
      xt.set(yt.SPACE_KEYCODE, It.SPACE_KEY);
    class Rt extends s {
      static get strings() {
        return It;
      }
      static get numbers() {
        return yt;
      }
      static get defaultAdapter() {
        return {
          scrollTo: () => {},
          incrementScroll: () => {},
          getScrollPosition: () => {},
          getScrollContentWidth: () => {},
          getOffsetWidth: () => {},
          isRTL: () => {},
          setActiveTab: () => {},
          activateTabAtIndex: () => {},
          deactivateTabAtIndex: () => {},
          focusTabAtIndex: () => {},
          getTabIndicatorClientRectAtIndex: () => {},
          getTabDimensionsAtIndex: () => {},
          getPreviousActiveTabIndex: () => {},
          getFocusedTabIndex: () => {},
          getIndexOfTab: () => {},
          getTabListLength: () => {},
          notifyTabActivated: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(Rt.defaultAdapter, t)),
          (this.useAutomaticActivation_ = !1);
      }
      setUseAutomaticActivation(t) {
        this.useAutomaticActivation_ = t;
      }
      activateTab(t) {
        const e = this.adapter_.getPreviousActiveTabIndex();
        this.indexIsInRange_(t) &&
          t !== e &&
          (this.adapter_.deactivateTabAtIndex(e),
          this.adapter_.activateTabAtIndex(
            t,
            this.adapter_.getTabIndicatorClientRectAtIndex(e)
          ),
          this.scrollIntoView(t),
          this.adapter_.notifyTabActivated(t));
      }
      handleKeyDown(t) {
        const e = this.getKeyFromEvent_(t);
        if (void 0 !== e)
          if (
            (this.isActivationKey_(e) || t.preventDefault(),
            this.useAutomaticActivation_)
          ) {
            if (this.isActivationKey_(e)) return;
            const t = this.determineTargetFromKey_(
              this.adapter_.getPreviousActiveTabIndex(),
              e
            );
            this.adapter_.setActiveTab(t), this.scrollIntoView(t);
          } else {
            const t = this.adapter_.getFocusedTabIndex();
            if (this.isActivationKey_(e)) this.adapter_.setActiveTab(t);
            else {
              const i = this.determineTargetFromKey_(t, e);
              this.adapter_.focusTabAtIndex(i), this.scrollIntoView(i);
            }
          }
      }
      handleTabInteraction(t) {
        this.adapter_.setActiveTab(this.adapter_.getIndexOfTab(t.detail.tab));
      }
      scrollIntoView(t) {
        if (this.indexIsInRange_(t))
          return 0 === t
            ? this.adapter_.scrollTo(0)
            : t === this.adapter_.getTabListLength() - 1
              ? this.adapter_.scrollTo(this.adapter_.getScrollContentWidth())
              : this.isRTL_()
                ? this.scrollIntoViewRTL_(t)
                : void this.scrollIntoView_(t);
      }
      determineTargetFromKey_(t, e) {
        const i = this.isRTL_(),
          s = this.adapter_.getTabListLength() - 1,
          n = e === It.END_KEY,
          a =
            (e === It.ARROW_LEFT_KEY && !i) || (e === It.ARROW_RIGHT_KEY && i),
          r =
            (e === It.ARROW_RIGHT_KEY && !i) || (e === It.ARROW_LEFT_KEY && i);
        let o = t;
        return (
          n ? (o = s) : a ? (o -= 1) : r ? (o += 1) : (o = 0),
          o < 0 ? (o = s) : o > s && (o = 0),
          o
        );
      }
      calculateScrollIncrement_(t, e, i, s) {
        const n = this.adapter_.getTabDimensionsAtIndex(e),
          a = n.contentLeft - i - s,
          r = n.contentRight - i - yt.EXTRA_SCROLL_AMOUNT,
          o = a + yt.EXTRA_SCROLL_AMOUNT;
        return e < t ? Math.min(r, 0) : Math.max(o, 0);
      }
      calculateScrollIncrementRTL_(t, e, i, s, n) {
        const a = this.adapter_.getTabDimensionsAtIndex(e),
          r = n - a.contentLeft - i,
          o = n - a.contentRight - i - s + yt.EXTRA_SCROLL_AMOUNT,
          d = r - yt.EXTRA_SCROLL_AMOUNT;
        return e > t ? Math.max(o, 0) : Math.min(d, 0);
      }
      findAdjacentTabIndexClosestToEdge_(t, e, i, s) {
        const n = e.rootLeft - i,
          a = e.rootRight - i - s,
          r = n + a;
        return n < 0 || r < 0 ? t - 1 : a > 0 || r > 0 ? t + 1 : -1;
      }
      findAdjacentTabIndexClosestToEdgeRTL_(t, e, i, s, n) {
        const a = n - e.rootLeft - s - i,
          r = n - e.rootRight - i,
          o = a + r;
        return a > 0 || o > 0 ? t + 1 : r < 0 || o < 0 ? t - 1 : -1;
      }
      getKeyFromEvent_(t) {
        return Ot.has(t.key) ? t.key : xt.get(t.keyCode);
      }
      isActivationKey_(t) {
        return t === It.SPACE_KEY || t === It.ENTER_KEY;
      }
      indexIsInRange_(t) {
        return t >= 0 && t < this.adapter_.getTabListLength();
      }
      isRTL_() {
        return this.adapter_.isRTL();
      }
      scrollIntoView_(t) {
        const e = this.adapter_.getScrollPosition(),
          i = this.adapter_.getOffsetWidth(),
          s = this.adapter_.getTabDimensionsAtIndex(t),
          n = this.findAdjacentTabIndexClosestToEdge_(t, s, e, i);
        if (!this.indexIsInRange_(n)) return;
        const a = this.calculateScrollIncrement_(t, n, e, i);
        this.adapter_.incrementScroll(a);
      }
      scrollIntoViewRTL_(t) {
        const e = this.adapter_.getScrollPosition(),
          i = this.adapter_.getOffsetWidth(),
          s = this.adapter_.getTabDimensionsAtIndex(t),
          n = this.adapter_.getScrollContentWidth(),
          a = this.findAdjacentTabIndexClosestToEdgeRTL_(t, s, e, i, n);
        if (!this.indexIsInRange_(a)) return;
        const r = this.calculateScrollIncrementRTL_(t, a, e, i, n);
        this.adapter_.incrementScroll(r);
      }
    }
    var wt = Rt;
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ class Dt extends a {
      constructor(...t) {
        super(...t),
          this.tabList_,
          this.tabFactory_,
          this.tabScroller_,
          this.tabScrollerFactory_,
          this.handleTabInteraction_,
          this.handleKeyDown_;
      }
      static attachTo(t) {
        return new Dt(t);
      }
      set useAutomaticActivation(t) {
        this.foundation_.setUseAutomaticActivation(t);
      }
      initialize(t = t => new pt(t), e = t => new St(t)) {
        (this.tabFactory_ = t),
          (this.tabScrollerFactory_ = e),
          (this.tabList_ = this.getTabElements_().map(t =>
            this.tabFactory_(t)
          ));
        const i = this.root_.querySelector(wt.strings.TAB_SCROLLER_SELECTOR);
        i && (this.tabScroller_ = this.tabScrollerFactory_(i));
      }
      initialSyncWithDOM() {
        (this.handleTabInteraction_ = t =>
          this.foundation_.handleTabInteraction(t)),
          (this.handleKeyDown_ = t => this.foundation_.handleKeyDown(t)),
          this.root_.addEventListener(
            mt.strings.INTERACTED_EVENT,
            this.handleTabInteraction_
          ),
          this.root_.addEventListener("keydown", this.handleKeyDown_);
        for (let t = 0; t < this.tabList_.length; t++)
          if (this.tabList_[t].active) {
            this.scrollIntoView(t);
            break;
          }
      }
      destroy() {
        super.destroy(),
          this.root_.removeEventListener(
            mt.strings.INTERACTED_EVENT,
            this.handleTabInteraction_
          ),
          this.root_.removeEventListener("keydown", this.handleKeyDown_),
          this.tabList_.forEach(t => t.destroy()),
          this.tabScroller_.destroy();
      }
      getDefaultFoundation() {
        return new wt({
          scrollTo: t => this.tabScroller_.scrollTo(t),
          incrementScroll: t => this.tabScroller_.incrementScroll(t),
          getScrollPosition: () => this.tabScroller_.getScrollPosition(),
          getScrollContentWidth: () =>
            this.tabScroller_.getScrollContentWidth(),
          getOffsetWidth: () => this.root_.offsetWidth,
          isRTL: () =>
            "rtl" ===
            window.getComputedStyle(this.root_).getPropertyValue("direction"),
          setActiveTab: t => this.foundation_.activateTab(t),
          activateTabAtIndex: (t, e) => this.tabList_[t].activate(e),
          deactivateTabAtIndex: t => this.tabList_[t].deactivate(),
          focusTabAtIndex: t => this.tabList_[t].focus(),
          getTabIndicatorClientRectAtIndex: t =>
            this.tabList_[t].computeIndicatorClientRect(),
          getTabDimensionsAtIndex: t => this.tabList_[t].computeDimensions(),
          getPreviousActiveTabIndex: () => {
            for (let t = 0; t < this.tabList_.length; t++)
              if (this.tabList_[t].active) return t;
            return -1;
          },
          getFocusedTabIndex: () => {
            const t = this.getTabElements_(),
              e = document.activeElement;
            return t.indexOf(e);
          },
          getIndexOfTab: t => this.tabList_.indexOf(t),
          getTabListLength: () => this.tabList_.length,
          notifyTabActivated: t =>
            this.emit(wt.strings.TAB_ACTIVATED_EVENT, { index: t }, !0)
        });
      }
      activateTab(t) {
        this.foundation_.activateTab(t);
      }
      scrollIntoView(t) {
        this.foundation_.scrollIntoView(t);
      }
      getTabElements_() {
        return [].slice.call(
          this.root_.querySelectorAll(wt.strings.TAB_SELECTOR)
        );
      }
    }
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const Nt = {
        OPEN: "mdc-dialog--open",
        OPENING: "mdc-dialog--opening",
        CLOSING: "mdc-dialog--closing",
        SCROLLABLE: "mdc-dialog--scrollable",
        STACKED: "mdc-dialog--stacked",
        SCROLL_LOCK: "mdc-dialog-scroll-lock"
      },
      Ft = {
        SCRIM_SELECTOR: ".mdc-dialog__scrim",
        CONTAINER_SELECTOR: ".mdc-dialog__container",
        SURFACE_SELECTOR: ".mdc-dialog__surface",
        CONTENT_SELECTOR: ".mdc-dialog__content",
        BUTTON_SELECTOR: ".mdc-dialog__button",
        DEFAULT_BUTTON_SELECTOR: ".mdc-dialog__button--default",
        SUPPRESS_DEFAULT_PRESS_SELECTOR: [
          "textarea",
          ".mdc-menu .mdc-list-item"
        ].join(", "),
        OPENING_EVENT: "MDCDialog:opening",
        OPENED_EVENT: "MDCDialog:opened",
        CLOSING_EVENT: "MDCDialog:closing",
        CLOSED_EVENT: "MDCDialog:closed",
        ACTION_ATTRIBUTE: "data-mdc-dialog-action",
        CLOSE_ACTION: "close",
        DESTROY_ACTION: "destroy"
      },
      Mt = {
        DIALOG_ANIMATION_OPEN_TIME_MS: 150,
        DIALOG_ANIMATION_CLOSE_TIME_MS: 75
      };
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    class kt extends s {
      static get cssClasses() {
        return Nt;
      }
      static get strings() {
        return Ft;
      }
      static get numbers() {
        return Mt;
      }
      static get defaultAdapter() {
        return {
          addClass: () => {},
          removeClass: () => {},
          hasClass: () => {},
          addBodyClass: () => {},
          removeBodyClass: () => {},
          eventTargetMatches: () => {},
          trapFocus: () => {},
          releaseFocus: () => {},
          isContentScrollable: () => {},
          areButtonsStacked: () => {},
          getActionFromEvent: () => {},
          clickDefaultButton: () => {},
          reverseButtons: () => {},
          notifyOpening: () => {},
          notifyOpened: () => {},
          notifyClosing: () => {},
          notifyClosed: () => {}
        };
      }
      constructor(t) {
        super(Object.assign(kt.defaultAdapter, t)),
          (this.isOpen_ = !1),
          (this.animationFrame_ = 0),
          (this.animationTimer_ = 0),
          (this.layoutFrame_ = 0),
          (this.escapeKeyAction_ = Ft.CLOSE_ACTION),
          (this.scrimClickAction_ = Ft.CLOSE_ACTION),
          (this.autoStackButtons_ = !0),
          (this.areButtonsStacked_ = !1);
      }
      init() {
        this.adapter_.hasClass(Nt.STACKED) && this.setAutoStackButtons(!1);
      }
      destroy() {
        this.isOpen_ && this.close(Ft.DESTROY_ACTION),
          this.animationFrame_ && cancelAnimationFrame(this.animationFrame_),
          this.animationTimer_ &&
            (clearTimeout(this.animationTimer_),
            this.handleAnimationTimerEnd_()),
          this.layoutFrame_ &&
            (cancelAnimationFrame(this.layoutFrame_), (this.layoutFrame_ = 0));
      }
      open() {
        (this.isOpen_ = !0),
          this.adapter_.notifyOpening(),
          this.adapter_.addClass(Nt.OPENING),
          this.runNextAnimationFrame_(() => {
            this.adapter_.addClass(Nt.OPEN),
              this.adapter_.addBodyClass(Nt.SCROLL_LOCK),
              this.layout(),
              (this.animationTimer_ = setTimeout(() => {
                this.handleAnimationTimerEnd_(),
                  this.adapter_.trapFocus(),
                  this.adapter_.notifyOpened();
              }, Mt.DIALOG_ANIMATION_OPEN_TIME_MS));
          });
      }
      close(t = "") {
        this.isOpen_ &&
          ((this.isOpen_ = !1),
          this.adapter_.notifyClosing(t),
          this.adapter_.releaseFocus(),
          this.adapter_.addClass(Nt.CLOSING),
          this.adapter_.removeClass(Nt.OPEN),
          this.adapter_.removeBodyClass(Nt.SCROLL_LOCK),
          clearTimeout(this.animationTimer_),
          (this.animationTimer_ = setTimeout(() => {
            this.handleAnimationTimerEnd_(), this.adapter_.notifyClosed(t);
          }, Mt.DIALOG_ANIMATION_CLOSE_TIME_MS)));
      }
      isOpen() {
        return this.isOpen_;
      }
      getEscapeKeyAction() {
        return this.escapeKeyAction_;
      }
      setEscapeKeyAction(t) {
        this.escapeKeyAction_ = t;
      }
      getScrimClickAction() {
        return this.scrimClickAction_;
      }
      setScrimClickAction(t) {
        this.scrimClickAction_ = t;
      }
      getAutoStackButtons() {
        return this.autoStackButtons_;
      }
      setAutoStackButtons(t) {
        this.autoStackButtons_ = t;
      }
      layout() {
        this.layoutFrame_ && cancelAnimationFrame(this.layoutFrame_),
          (this.layoutFrame_ = requestAnimationFrame(() => {
            this.layoutInternal_(), (this.layoutFrame_ = 0);
          }));
      }
      layoutInternal_() {
        this.autoStackButtons_ && this.detectStackedButtons_(),
          this.detectScrollableContent_();
      }
      detectStackedButtons_() {
        this.adapter_.removeClass(Nt.STACKED);
        const t = this.adapter_.areButtonsStacked();
        t && this.adapter_.addClass(Nt.STACKED),
          t !== this.areButtonsStacked_ &&
            (this.adapter_.reverseButtons(), (this.areButtonsStacked_ = t));
      }
      detectScrollableContent_() {
        this.adapter_.removeClass(Nt.SCROLLABLE),
          this.adapter_.isContentScrollable() &&
            this.adapter_.addClass(Nt.SCROLLABLE);
      }
      handleInteraction(t) {
        const e = "click" === t.type,
          i = "Enter" === t.key || 13 === t.keyCode;
        if (
          e &&
          this.adapter_.eventTargetMatches(t.target, Ft.SCRIM_SELECTOR) &&
          "" !== this.scrimClickAction_
        )
          this.close(this.scrimClickAction_);
        else if (e || "Space" === t.key || 32 === t.keyCode || i) {
          const e = this.adapter_.getActionFromEvent(t);
          e
            ? this.close(e)
            : i &&
              !this.adapter_.eventTargetMatches(
                t.target,
                Ft.SUPPRESS_DEFAULT_PRESS_SELECTOR
              ) &&
              this.adapter_.clickDefaultButton();
        }
      }
      handleDocumentKeydown(t) {
        ("Escape" !== t.key && 27 !== t.keyCode) ||
          "" === this.escapeKeyAction_ ||
          this.close(this.escapeKeyAction_);
      }
      handleAnimationTimerEnd_() {
        (this.animationTimer_ = 0),
          this.adapter_.removeClass(Nt.OPENING),
          this.adapter_.removeClass(Nt.CLOSING);
      }
      runNextAnimationFrame_(t) {
        cancelAnimationFrame(this.animationFrame_),
          (this.animationFrame_ = requestAnimationFrame(() => {
            (this.animationFrame_ = 0),
              clearTimeout(this.animationTimer_),
              (this.animationTimer_ = setTimeout(t, 0));
          }));
      }
    }
    var Ht = kt,
      Pt = i(1),
      Bt = i.n(Pt);
    /**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */
    const Vt = Ht.strings;
    class Kt extends a {
      constructor(...t) {
        super(...t),
          this.buttonRipples_,
          this.buttons_,
          this.defaultButton_,
          this.container_,
          this.content_,
          this.initialFocusEl_,
          this.focusTrapFactory_,
          this.focusTrap_,
          this.handleInteraction_,
          this.handleDocumentKeydown_,
          this.handleOpening_,
          this.handleClosing_,
          this.layout_;
      }
      static attachTo(t) {
        return new Kt(t);
      }
      get isOpen() {
        return this.foundation_.isOpen();
      }
      get escapeKeyAction() {
        return this.foundation_.getEscapeKeyAction();
      }
      set escapeKeyAction(t) {
        this.foundation_.setEscapeKeyAction(t);
      }
      get scrimClickAction() {
        return this.foundation_.getScrimClickAction();
      }
      set scrimClickAction(t) {
        this.foundation_.setScrimClickAction(t);
      }
      get autoStackButtons() {
        return this.foundation_.getAutoStackButtons();
      }
      set autoStackButtons(t) {
        this.foundation_.setAutoStackButtons(t);
      }
      initialize(t = Bt.a, e = null) {
        (this.container_ = this.root_.querySelector(Vt.CONTAINER_SELECTOR)),
          (this.content_ = this.root_.querySelector(Vt.CONTENT_SELECTOR)),
          (this.buttons_ = [].slice.call(
            this.root_.querySelectorAll(Vt.BUTTON_SELECTOR)
          )),
          (this.defaultButton_ = this.root_.querySelector(
            Vt.DEFAULT_BUTTON_SELECTOR
          )),
          (this.buttonRipples_ = []),
          (this.focusTrapFactory_ = t),
          (this.initialFocusEl_ = e);
        for (let t, e = 0; (t = this.buttons_[e]); e++)
          this.buttonRipples_.push(new C(t));
      }
      initialSyncWithDOM() {
        (this.focusTrap_ =
          /**
           * @license
           * Copyright 2016 Google Inc.
           *
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           *
           * The above copyright notice and this permission notice shall be included in
           * all copies or substantial portions of the Software.
           *
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
           * THE SOFTWARE.
           */
          (function(t, e = Bt.a, i = null) {
            return e(t, {
              initialFocus: i,
              escapeDeactivates: !1,
              clickOutsideDeactivates: !0
            });
          })(this.container_, this.focusTrapFactory_, this.initialFocusEl_)),
          (this.handleInteraction_ = this.foundation_.handleInteraction.bind(
            this.foundation_
          )),
          (this.handleDocumentKeydown_ = this.foundation_.handleDocumentKeydown.bind(
            this.foundation_
          )),
          (this.layout_ = this.layout.bind(this));
        const t = ["resize", "orientationchange"];
        (this.handleOpening_ = () => {
          t.forEach(t => window.addEventListener(t, this.layout_)),
            document.addEventListener("keydown", this.handleDocumentKeydown_);
        }),
          (this.handleClosing_ = () => {
            t.forEach(t => window.removeEventListener(t, this.layout_)),
              document.removeEventListener(
                "keydown",
                this.handleDocumentKeydown_
              );
          }),
          this.listen("click", this.handleInteraction_),
          this.listen("keydown", this.handleInteraction_),
          this.listen(Vt.OPENING_EVENT, this.handleOpening_),
          this.listen(Vt.CLOSING_EVENT, this.handleClosing_);
      }
      destroy() {
        this.unlisten("click", this.handleInteraction_),
          this.unlisten("keydown", this.handleInteraction_),
          this.unlisten(Vt.OPENING_EVENT, this.handleOpening_),
          this.unlisten(Vt.CLOSING_EVENT, this.handleClosing_),
          this.handleClosing_(),
          this.buttonRipples_.forEach(t => t.destroy()),
          super.destroy();
      }
      layout() {
        this.foundation_.layout();
      }
      open() {
        this.foundation_.open();
      }
      close(t = "") {
        this.foundation_.close(t);
      }
      getDefaultFoundation() {
        return new Ht({
          addClass: t => this.root_.classList.add(t),
          removeClass: t => this.root_.classList.remove(t),
          hasClass: t => this.root_.classList.contains(t),
          addBodyClass: t => document.body.classList.add(t),
          removeBodyClass: t => document.body.classList.remove(t),
          eventTargetMatches: (t, e) => V(t, e),
          trapFocus: () => this.focusTrap_.activate(),
          releaseFocus: () => this.focusTrap_.deactivate(),
          isContentScrollable: () =>
            !!this.content_ &&
            (function(t) {
              return t.scrollHeight > t.offsetHeight;
            })(this.content_),
          areButtonsStacked: () =>
            (function(t) {
              const e = new Set();
              return [].forEach.call(t, t => e.add(t.offsetTop)), e.size > 1;
            })(this.buttons_),
          getActionFromEvent: t => {
            const e = (function(t, e) {
              if (t.closest) return t.closest(e);
              let i = t;
              for (; i; ) {
                if (V(i, e)) return i;
                i = i.parentElement;
              }
              return null;
            })(t.target, `[${Vt.ACTION_ATTRIBUTE}]`);
            return e && e.getAttribute(Vt.ACTION_ATTRIBUTE);
          },
          clickDefaultButton: () => {
            this.defaultButton_ && this.defaultButton_.click();
          },
          reverseButtons: () => {
            this.buttons_.reverse(),
              this.buttons_.forEach(t => t.parentElement.appendChild(t));
          },
          notifyOpening: () => this.emit(Vt.OPENING_EVENT, {}),
          notifyOpened: () => this.emit(Vt.OPENED_EVENT, {}),
          notifyClosing: t =>
            this.emit(Vt.CLOSING_EVENT, t ? { action: t } : {}),
          notifyClosed: t => this.emit(Vt.CLOSED_EVENT, t ? { action: t } : {})
        });
      }
    }
    /**
     * @license
     * Copyright 2016 Google Inc.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     */ let Gt = 0;
    class $t {
      constructor(t, e) {
        (this._name = t),
          (this._info = e),
          (this._isOn = !1),
          (this._id = Gt++);
      }
      get name() {
        return this._name;
      }
      set name(t) {
        this._name = t;
      }
      get info() {
        return this._info;
      }
      set info(t) {
        this._info = t;
      }
      get id() {
        return this._id;
      }
      get isOn() {
        return this._isOn;
      }
      turnOn() {
        !1 === this._isOn && (this._isOn = !0);
      }
      turnOff() {
        !0 === this._isOn && (this._isOn = !1);
      }
      switchOnOff() {
        this._isOn ? (this._isOn = !1) : (this._isOn = !0);
      }
    }
    class qt extends $t {
      constructor(t, e) {
        super(t, e),
          (this._intensity = 8),
          (this._minIntensity = 0),
          (this._maxIntensity = 10),
          (this._modeList = ["Constant", "Blinking", "Fading"]),
          (this._mode = this._modeList[0]),
          (this._colorList = ["Yellow", "Green", "Orange"]),
          (this._color = this._modeList[0]);
      }
      get intensity() {
        return this._intensity;
      }
      set intensity(t) {
        this._intensity = t;
      }
      get mode() {
        return this._mode;
      }
      set mode(t) {
        if (-1 === this._mode.indexOf(this._modelList))
          throw new Error("The value is incorrect");
        this._mode = t;
      }
      get color() {
        return this._color;
      }
      set color(t) {
        if (-1 === this._color.indexOf(this._colorlList))
          throw new Error("The value is incorrect");
        this._color = t;
      }
      incriseIntensity() {
        if (!(this._intensity < this._maxIntensity))
          throw new Error("The value is incorrect");
        this._intensity++;
      }
      decreaseIntensity() {
        if (!(this._intensity > this._minIntensity))
          throw new Error("The value is incorrect");
        this._intensity--;
      }
    }
    class Ut extends $t {
      constructor(t, e) {
        super(t, e),
          (this._coffeeList = ["Americano", "Latte", "Black"]),
          (this._typeOfCoffee = this._coffeeList[0]),
          (this._sugarQty = 2),
          (this._sizeList = ["S", "M", "XL"]),
          (this._size = this._sizeList[1]),
          (this._spices = !1);
      }
      get sugarQty() {
        return this._sugarQty;
      }
      set sugarQty(t) {
        this._sugarQty = t;
      }
      get size() {
        return this._size;
      }
      set size(t) {
        if (-1 === this._sizeList.indexOf(t))
          throw new Error("The value is incorrect");
        this._size = t;
      }
      get typeOfCoffee() {
        return this._typeOfCoffee;
      }
      set typeOfCoffee(t) {
        if (-1 === this._coffeeList.indexOf(t))
          throw new Error("The value is incorrect");
        this._typeOfCoffee = t;
      }
      get coffeeList() {
        return this._coffeeList;
      }
      get sizeList() {
        return this._sizeList;
      }
      get spices() {
        return this._spices;
      }
      set spices(t) {
        this._spices = t;
      }
    }
    class zt extends $t {
      constructor(t, e) {
        super(t, e),
          (this._channelList = [
            "Western",
            "Ukraine_Today",
            "Animal_Planet",
            "Football-1",
            "Fantasy",
            "1+1"
          ]),
          (this._currentChannel = this._channelList[0]),
          (this._soundVolume = 5),
          (this._minVolume = 0),
          (this._maxVolume = 10);
      }
      get name() {
        return this._name;
      }
      set name(t) {
        this._name = t;
      }
      get channelList() {
        return this._channelList;
      }
      get currentChannel() {
        return this._currentChannel;
      }
      set currentChannel(t) {
        if (-1 === this._currentChannel.indexOf(this._channelList))
          throw new Error("The channel does not exist");
        this._currentChannel = t;
      }
      get soundVolume() {
        return this._soundVolume;
      }
      set soundVolume(t) {
        if (!(t <= this._maxVolume && t >= this._minVolume))
          throw new Error("The value is incorrect");
        this._soundVolume = t;
      }
      nextChannel() {
        const t = this._channelList.indexOf(this._currentChannel),
          e = this._channelList.length;
        this._currentChannel === this._channelList[e - 1]
          ? (this._currentChannel = this._channelList[0])
          : (this._currentChannel = this._channelList[t + 1]);
      }
      previousChannel() {
        const t = this._channelList.indexOf(this._currentChannel),
          e = this._channelList.length;
        this._currentChannel === this._channelList[0]
          ? (this._currentChannel = this._channelList[e - 1])
          : (this._currentChannel = this._channelList[t - 1]);
      }
      increaseSound() {
        if (this._soundVolume === this._maxVolume)
          throw new Error("Maximum is reached");
        this.soundVolume++;
      }
      decreaseSound() {
        if (this._soundVolume === this._minVolume)
          throw new Error("Minimum is reached");
        this.soundVolume--;
      }
    }
    const Wt = new class {
      constructor(t, e) {
        (this._address = t), (this._owner = e), (this._devices = new Map());
      }
      get address() {
        return this._address;
      }
      get owner() {
        return this._owner;
      }
      set owner(t) {
        this._owner = t;
      }
      get devices() {
        return [...this._devices.values()];
      }
      addNewDevice(t) {
        if (this._devices.has(t.name))
          throw new Error("The device name is exist already");
        this._devices.set(t.id, t);
      }
      removeDevice(t) {
        if (!this._devices.has(t.id))
          throw new Error("The device does not exist");
        this._devices.delete(t.id);
      }
      deleteAllDevices() {
        this._devices.forEach(t => removeDevice(t));
      }
      turnOffAllDevices() {
        this._devices.clear;
      }
    }("Kharkiv, Akademika Proskury str.,app.73", "Pavlo Baranchuk");
    Wt.addNewDevice(new qt("Light System SunShine", "Light text")),
      Wt.addNewDevice(new zt("LG flatron B112", "TV text")),
      Wt.addNewDevice(new Ut("Coffee Machine Espresso", "Coffee text")),
      new class {
        constructor(t, e) {
          (this._home = t), (this._root = e);
        }
        render() {
          (root.innerText = ""),
            document.getElementsByTagName("body")[0].classList.add("page");
          let t = document.createElement("aside");
          t.classList.add(
            "mdc-drawer",
            "mdc-drawer__content",
            "mdc-drawer--dismissible"
          );
          let e = document.createElement("div");
          e.classList.add("mdc-list");
          let i = document.createElement("a");
          i.classList.add("mdc-list-item", "mdc-list-home"), (i.href = "#home");
          let s = document.createElement("i");
          s.classList.add("material-icons", "mdc-list-item__graphic"),
            (s.innerText = "home");
          let n = document.createElement("span");
          n.classList.add("mdc-list-item__text"), (n.innerText = "Start page");
          let a = document.createElement("a");
          a.classList.add("mdc-list-item", "mdc-list-devices"),
            (a.href = "#devices");
          let r = document.createElement("i");
          r.classList.add("material-icons", "mdc-list-item__graphic"),
            (r.innerText = "dashboard");
          let o = document.createElement("span");
          o.classList.add("mdc-list-item__text"),
            (o.innerText = "Your Devices");
          let d = document.createElement("a");
          d.classList.add("mdc-list-item", "mdc-list-author"),
            (d.href = "#author");
          let c = document.createElement("i");
          c.classList.add("material-icons", "mdc-list-item__graphic"),
            (c.innerText = "person");
          let l = document.createElement("span");
          l.classList.add("mdc-list-item__text"),
            (l.innerText = "Author"),
            root.appendChild(t),
            t.appendChild(e),
            e.appendChild(i),
            i.appendChild(s),
            i.appendChild(n),
            e.appendChild(a),
            a.appendChild(r),
            a.appendChild(o),
            e.appendChild(d),
            d.appendChild(c),
            d.appendChild(l);
          let h = document.createElement("div");
          h.classList.add("mdc-drawer-app-content");
          let u = document.createElement("header");
          u.classList.add("mdc-top-app-bar", "app-bar"),
            u.setAttribute("id", "app-bar");
          let _ = document.createElement("div");
          _.classList.add("mdc-top-app-bar__row"),
            root.appendChild(h),
            h.appendChild(u),
            u.appendChild(_);
          let m = document.createElement("section");
          m.classList.add(
            "mdc-top-app-bar__section",
            "mdc-top-app-bar__section--align-start"
          );
          let p = document.createElement("a");
          p.classList.add("material-icons", "mdc-top-app-bar__navigation-icon"),
            (p.innerText = "menu");
          let E = document.createElement("span");
          E.classList.add("mdc-top-app-bar__title"),
            (E.innerText = "Smart House with MDC"),
            _.appendChild(m),
            m.appendChild(p),
            m.appendChild(E);
          let f = document.createElement("div");
          f.classList.add(
            "main-devices",
            "main-content",
            "main",
            "mdc-top-app-bar--fixed-adjust"
          ),
            f.setAttribute("id", "main-content"),
            root.appendChild(f),
            this._home.devices.forEach(t => {
              if (t instanceof qt) {
                let e = document.createElement("main");
                e.classList.add(
                  "main-light",
                  "mdc-top-app-bar--fixed-adjust",
                  "main",
                  "mdc-hidden",
                  `main__${t.id}`
                );
                let i = document.createElement("div");
                f.appendChild(e), e.appendChild(i);
                let s = document.createElement("h2");
                (s.innerText = `${t.name}`),
                  s.classList.add("device__title", `device__${t.id}`);
                let n = document.createElement("div");
                n.classList.add(
                  "mdc-card",
                  "mdc-card__light",
                  "mdc-card-first",
                  `mdc-card-first-${t.id}`,
                  "card__light"
                );
                let a = document.createElement("div");
                a.classList.add("card__light");
                let r = document.createElement("img");
                r.classList.add("mdc-card__image", "mdc__color-yellow"),
                  r.setAttribute(
                    "src",
                    "./assets/img/yellow_light_cropped.png"
                  );
                let o = document.createElement("div");
                o.classList.add(
                  "mdc-card",
                  "mdc-card-second",
                  `mdc-card-second-${t.id}`,
                  "mdc-hidden"
                );
                let d = document.createElement("h3");
                d.classList.add("card__title", `card__title__${t.id}`),
                  (d.innerText = "Light specification");
                let c = document.createElement("p");
                c.classList.add("card__paragraph"),
                  (c.innerText = `${t.info}`),
                  i.appendChild(s),
                  i.appendChild(n),
                  n.appendChild(a),
                  a.appendChild(r),
                  i.appendChild(o),
                  o.appendChild(d),
                  o.appendChild(c);
                let l = document.createElement("div");
                l.classList.add("mdc-tab-bar");
                let h = document.createElement("div");
                h.classList.add("mdc-tab-scroller");
                let u = document.createElement("div");
                u.classList.add("mdc-tab-scroller__scroll-area");
                let _ = document.createElement("div");
                _.classList.add("mdc-tab-scroller__scroll-content");
                let m = document.createElement("button");
                m.classList.add(
                  "mdc-tab",
                  "mdc-tab-first",
                  `mdc-tab-first-${t.id}`,
                  "mdc-tab--active"
                ),
                  m.setAttribute("role", "tab"),
                  m.setAttribute("aria-selected", "true"),
                  m.setAttribute("tabindex", "0");
                let p = document.createElement("span");
                p.classList.add("mdc-tab__content");
                let E = document.createElement("span");
                E.classList.add("mdc-tab__icon", "material-icons"),
                  (E.innerText = "location_city");
                let C = document.createElement("span");
                C.classList.add("mdc-tab__text-label"), (C.innerText = "Main");
                let g = document.createElement("span");
                g.classList.add("mdc-tab__ripple");
                let T = document.createElement("button");
                T.classList.add(
                  "mdc-tab",
                  "mdc-tab-second",
                  "mdc-tab-second-light",
                  `mdc-tab-second-${t.id}`,
                  "mdc-tab--active"
                ),
                  T.setAttribute("role", "tab"),
                  T.setAttribute("aria-selected", "true"),
                  T.setAttribute("tabindex", "1");
                let v = document.createElement("span");
                v.classList.add("mdc-tab__content");
                let L = document.createElement("span");
                L.classList.add("mdc-tab__icon", "material-icons"),
                  (L.innerText = "info");
                let A = document.createElement("span");
                A.classList.add("mdc-tab__text-label"),
                  (A.innerText = "Information");
                let b = document.createElement("span");
                b.classList.add("mdc-tab__ripple"),
                  i.appendChild(l),
                  l.appendChild(h),
                  h.appendChild(u),
                  u.appendChild(_),
                  _.appendChild(m),
                  m.appendChild(p),
                  p.appendChild(E),
                  p.appendChild(C),
                  m.appendChild(g),
                  _.appendChild(T),
                  T.appendChild(v),
                  v.appendChild(L),
                  v.appendChild(A),
                  T.appendChild(b);
                let S = document.createElement("div");
                S.classList.add("select__wrapper"), e.appendChild(S);
                let I = document.createElement("div");
                I.classList.add("mdc-text-field");
                let y = document.createElement("input");
                y.classList.add(
                  "mdc-text-field__input",
                  "mdc-text-field__input_light_name",
                  `mdc-text-field-${t.id}`
                ),
                  y.setAttribute("type", "text"),
                  y.setAttribute("placeholder", "Name your device"),
                  y.setAttribute("id", "my-text-field"),
                  y.setAttribute(
                    "oninput",
                    `document.querySelector(".device__${
                      t.id
                    }").innerHTML = document.querySelector(".mdc-text-field-${
                      t.id
                    }").value;`
                  );
                let O = document.createElement("div");
                O.classList.add("mdc-line-ripple");
                let x = document.createElement("div");
                x.classList.add("mdc-text-field");
                let R = document.createElement("input");
                R.classList.add(
                  "mdc-text-field__input",
                  "mdc-text-field__input_light_descripion"
                ),
                  R.setAttribute("type", "text"),
                  R.setAttribute("placeholder", "Change the description"),
                  R.setAttribute("id", "my-text-field");
                let w = document.createElement("div");
                w.classList.add("mdc-line-ripple");
                let D = document.createElement("div");
                D.classList.add("mdc-select");
                let N = document.createElement("select");
                N.classList.add("mdc-select__native-control");
                let F = document.createElement("option");
                F.innerText = "Constant";
                let M = document.createElement("option");
                M.innerText = "Blinking";
                let k = document.createElement("option");
                k.innerText = "Fadingt";
                let H = document.createElement("label");
                H.classList.add(
                  "mdc-floating-label",
                  "mdc-floating-label--float-above"
                ),
                  (H.innerText = "Change the mode");
                let P = document.createElement("div");
                P.classList.add("mdc-line-ripple");
                let B = document.createElement("div");
                B.classList.add("mdc-select");
                let V = document.createElement("select");
                V.classList.add("mdc-select__native-control");
                let K = document.createElement("option");
                K.innerText = "Yellow";
                let G = document.createElement("option");
                G.innerText = "Green";
                let $ = document.createElement("option");
                $.innerText = "Orange";
                let q = document.createElement("label");
                q.classList.add(
                  "mdc-floating-label",
                  "mdc-floating-label--float-above"
                ),
                  (q.innerText = "Change color");
                let U = document.createElement("div");
                U.classList.add("mdc-line-ripple"),
                  S.appendChild(I),
                  I.appendChild(y),
                  I.appendChild(O),
                  S.appendChild(x),
                  x.appendChild(R),
                  x.appendChild(w),
                  S.appendChild(D),
                  D.appendChild(N),
                  N.appendChild(F),
                  N.appendChild(M),
                  N.appendChild(k),
                  D.appendChild(H),
                  D.appendChild(P),
                  S.appendChild(B),
                  B.appendChild(V),
                  V.appendChild(K),
                  V.appendChild(G),
                  V.appendChild($),
                  B.appendChild(q),
                  B.appendChild(U);
                let z = document.createElement("div");
                z.classList.add("control__wrapper", "control__light");
                let W = document.createElement("img");
                W.classList.add("control__image"),
                  W.setAttribute("src", "./assets/img/remote_control.png");
                let Y = document.createElement("button");
                Y.classList.add("light__onOff", "mdc-fab", "mdc-button-add");
                let X = document.createElement("i");
                X.classList.add("fas", "fa-power-off");
                let j = document.createElement("div");
                j.classList.add("control__horizontal");
                let Q = document.createElement("button");
                Q.classList.add("mdc-fab", "mdc-button-channel-up");
                let Z = document.createElement("i");
                Z.classList.add("fas", "fa-caret-left");
                let J = document.createElement("button");
                J.classList.add("mdc-fab", "mdc-button-channel-down");
                let tt = document.createElement("i");
                tt.classList.add("fas", "fa-caret-right");
                let et = document.createElement("div"),
                  it = document.createElement("div");
                it.classList.add("control__mode");
                let st = document.createElement("button");
                st.classList.add("mdc-fab", "mdc-button-channel"),
                  (st.innerText = "1");
                let nt = document.createElement("button");
                nt.classList.add("mdc-fab", "mdc-button-channel"),
                  (nt.innerText = "2");
                let at = document.createElement("button");
                at.classList.add("mdc-fab", "mdc-button-channel"),
                  (at.innerText = "3");
                let rt = document.createElement("div");
                rt.classList.add("control__volume");
                let ot = document.createElement("h2");
                ot.classList.add("volume__title"),
                  (ot.innerText = "Brightness");
                let dt = document.createElement("input");
                dt.classList.add("e-range"),
                  dt.setAttribute("type", "range"),
                  dt.setAttribute("min", "0"),
                  dt.setAttribute("max", "10"),
                  S.appendChild(z),
                  z.appendChild(W),
                  z.appendChild(Y),
                  Y.appendChild(X),
                  z.appendChild(j),
                  j.appendChild(Q),
                  Q.appendChild(Z),
                  j.appendChild(J),
                  J.appendChild(tt),
                  z.appendChild(et),
                  et.appendChild(it),
                  it.appendChild(st),
                  it.appendChild(nt),
                  it.appendChild(at),
                  z.appendChild(rt),
                  rt.appendChild(ot),
                  rt.appendChild(dt);
                let ct = document.createElement("div");
                ct.classList.add(
                  "mdc-dialog",
                  "mdc-dialog-light",
                  `mdc-dialog-${t.id}`
                ),
                  ct.setAttribute("role", "alertdialog"),
                  ct.setAttribute("aria-modal", "true"),
                  ct.setAttribute("aria-labelledby", "my-dialog-title"),
                  ct.setAttribute("aria-describedby", "my-dialog-content");
                let lt = document.createElement("div");
                lt.classList.add("mdc-dialog__container");
                let ht = document.createElement("div");
                ht.classList.add("mdc-dialog__surface");
                let ut = document.createElement("h2");
                ut.classList.add("mdc-dialog__title"),
                  ut.setAttribute("id", "my-dialog-title"),
                  (ut.innerText =
                    "Are you sure you want to delete this device?");
                let _t = document.createElement("img");
                _t.classList.add("dialog__image"),
                  _t.setAttribute("src", "./assets/img/nooo.png");
                let mt = document.createElement("footer");
                mt.classList.add("mdc-dialog__actions");
                let pt = document.createElement("button");
                pt.classList.add("mdc-button", "mdc-dialog__button"),
                  pt.setAttribute("type", "button"),
                  pt.setAttribute("data-mdc-dialog-action", "close"),
                  (pt.innerText = "Cancel");
                let Et = document.createElement("button");
                Et.classList.add(
                  "mdc-button",
                  "mdc-dialog__button",
                  `mdc-dialog__${t.id}`
                ),
                  Et.setAttribute("type", "button"),
                  Et.setAttribute("data-mdc-dialog-action", "accept"),
                  (Et.innerText = "Delete");
                let ft = document.createElement("div");
                ft.classList.add("mdc-dialog__scrim");
                let Ct = document.createElement("button");
                Ct.classList.add(
                  "mdc-button",
                  "mdc-button-dialog-light",
                  "mdc-button-delete-light",
                  "mdc-button-delete",
                  "mdc-button-dialog",
                  "mdc-button--raised",
                  `mdc-button-dialog-${t.id}`
                ),
                  (Ct.innerText = "Delete device"),
                  z.appendChild(ct),
                  ct.appendChild(lt),
                  lt.appendChild(ht),
                  ht.appendChild(ut),
                  ht.appendChild(_t),
                  ht.appendChild(mt),
                  mt.appendChild(pt),
                  mt.appendChild(Et),
                  ct.appendChild(ft),
                  z.appendChild(Ct);
              } else if (t instanceof zt) {
                let e = document.createElement("main");
                e.classList.add(
                  "main-tv",
                  "main",
                  "mdc-hidden",
                  `main__${t.id}`
                );
                let i = document.createElement("div");
                f.appendChild(e), e.appendChild(i);
                let s = document.createElement("h2");
                (s.innerText = `${t.name}`), s.classList.add("device__title");
                let n = document.createElement("div");
                n.classList.add(
                  "mdc-card",
                  "mdc-card-first",
                  `mdc-card-first-${t.id}`
                );
                let a = document.createElement("div");
                a.classList.add("card__tv");
                let r = document.createElement("iframe");
                r.classList.add("giphy-embed"),
                  r.setAttribute(
                    "src",
                    "https://giphy.com/embed/1zqkzJMV89QHK"
                  ),
                  r.setAttribute("height", "280"),
                  r.setAttribute("width", "500"),
                  r.setAttribute("frameBorder", "0");
                let o = document.createElement("div");
                o.classList.add(
                  "mdc-card__media",
                  "card__tv-image",
                  "mdc-card__media--square"
                );
                let d = document.createElement("div");
                d.classList.add("mdc-card__media-content");
                let c = document.createElement("div");
                c.classList.add(
                  "mdc-card",
                  "mdc-card-second",
                  `mdc-card-second-${t.id}`,
                  "mdc-hidden"
                );
                let l = document.createElement("h3");
                l.classList.add("card__title"),
                  (l.innerText = "TV specification");
                let h = document.createElement("p");
                h.classList.add("card__paragraph"),
                  (h.innerText = `${t.info}`),
                  i.appendChild(s),
                  i.appendChild(n),
                  n.appendChild(a),
                  a.appendChild(r),
                  n.appendChild(o),
                  o.appendChild(d),
                  i.appendChild(c),
                  c.appendChild(l),
                  c.appendChild(h);
                let u = document.createElement("div");
                u.classList.add("mdc-tab-bar");
                let _ = document.createElement("div");
                _.classList.add("mdc-tab-scroller");
                let m = document.createElement("div");
                m.classList.add("mdc-tab-scroller__scroll-area");
                let p = document.createElement("div");
                p.classList.add("mdc-tab-scroller__scroll-content");
                let E = document.createElement("button");
                E.classList.add(
                  "mdc-tab",
                  "mdc-tab-first",
                  "mdc-tab-first-tv",
                  `mdc-tab-first-${t.id}`,
                  "mdc-tab--active"
                ),
                  E.setAttribute("role", "tab"),
                  E.setAttribute("aria-selected", "true"),
                  E.setAttribute("tabindex", "0");
                let C = document.createElement("span");
                C.classList.add("mdc-tab__content");
                let g = document.createElement("span");
                g.classList.add("mdc-tab__icon", "material-icons"),
                  (g.innerText = "location_city");
                let T = document.createElement("span");
                T.classList.add("mdc-tab__text-label"), (T.innerText = "Main");
                let v = document.createElement("span");
                v.classList.add("mdc-tab__ripple");
                let L = document.createElement("button");
                L.classList.add(
                  "mdc-tab",
                  "mdc-tab-second",
                  "mdc-tab-second-tv",
                  `mdc-tab-second-${t.id}`,
                  "mdc-tab--active"
                ),
                  L.setAttribute("role", "tab"),
                  L.setAttribute("aria-selected", "true"),
                  L.setAttribute("tabindex", "1");
                let A = document.createElement("span");
                A.classList.add("mdc-tab__content");
                let b = document.createElement("span");
                b.classList.add("mdc-tab__icon", "material-icons"),
                  (b.innerText = "info");
                let S = document.createElement("span");
                S.classList.add("mdc-tab__text-label"),
                  (S.innerText = "Information");
                let I = document.createElement("span");
                I.classList.add("mdc-tab__ripple"),
                  i.appendChild(u),
                  u.appendChild(_),
                  _.appendChild(m),
                  m.appendChild(p),
                  p.appendChild(E),
                  E.appendChild(C),
                  C.appendChild(g),
                  C.appendChild(T),
                  E.appendChild(v),
                  p.appendChild(L),
                  L.appendChild(A),
                  A.appendChild(b),
                  A.appendChild(S),
                  L.appendChild(I);
                let y = document.createElement("div");
                y.classList.add("select__wrapper"), e.appendChild(y);
                let O = document.createElement("div");
                O.classList.add("mdc-text-field");
                let x = document.createElement("input");
                x.classList.add("mdc-text-field__input"),
                  x.setAttribute("type", "text"),
                  x.setAttribute("placeholder", "Name your device"),
                  x.setAttribute("id", "my-text-field");
                let R = document.createElement("div");
                R.classList.add("mdc-line-ripple");
                let w = document.createElement("div");
                w.classList.add("mdc-text-field");
                let D = document.createElement("input");
                D.classList.add("mdc-text-field__input"),
                  D.setAttribute("type", "text"),
                  D.setAttribute("placeholder", "Change the description"),
                  D.setAttribute("id", "my-text-field");
                let N = document.createElement("div");
                N.classList.add("mdc-line-ripple"),
                  y.appendChild(O),
                  O.appendChild(x),
                  O.appendChild(R),
                  y.appendChild(w),
                  w.appendChild(D),
                  w.appendChild(N);
                let F = document.createElement("div");
                F.classList.add("control__wrapper", "control__tv");
                let M = document.createElement("img");
                M.classList.add("control__image"),
                  M.setAttribute("src", "./assets/img/remote_control.png");
                let k = document.createElement("button");
                k.classList.add("tv__onOff", "mdc-fab", "mdc-button-add");
                let H = document.createElement("i");
                H.classList.add("fas", "fa-power-off");
                let P = document.createElement("div");
                P.classList.add("control__horizontal");
                let B = document.createElement("button");
                B.classList.add("mdc-fab", "mdc-button-channel-up");
                let V = document.createElement("i");
                V.classList.add("fas", "fa-caret-left");
                let K = document.createElement("button");
                K.classList.add("mdc-fab", "mdc-button-channel-down");
                let G = document.createElement("i");
                G.classList.add("fas", "fa-caret-right");
                let $ = document.createElement("div"),
                  q = document.createElement("div");
                q.classList.add("control__left");
                let U = document.createElement("button");
                U.classList.add("mdc-fab", "mdc-button-channel"),
                  (U.innerText = "1");
                let z = document.createElement("button");
                z.classList.add("mdc-fab", "mdc-button-channel"),
                  (z.innerText = "2");
                let W = document.createElement("button");
                W.classList.add("mdc-fab", "mdc-button-channel"),
                  (W.innerText = "3");
                let Y = document.createElement("div");
                Y.classList.add("control__right");
                let X = document.createElement("button");
                X.classList.add("mdc-fab", "mdc-button-channel"),
                  (X.innerText = "4");
                let j = document.createElement("button");
                j.classList.add("mdc-fab", "mdc-button-channel"),
                  (j.innerText = "5");
                let Q = document.createElement("button");
                Q.classList.add("mdc-fab", "mdc-button-channel"),
                  (Q.innerText = "6");
                let Z = document.createElement("div");
                Z.classList.add("control__volume");
                let J = document.createElement("h2");
                J.classList.add("volume__title-tv"), (J.innerText = "Volume");
                let tt = document.createElement("input");
                tt.classList.add("e-range"),
                  tt.setAttribute("type", "range"),
                  tt.setAttribute("min", "0"),
                  tt.setAttribute("max", "10"),
                  y.appendChild(F),
                  F.appendChild(M),
                  F.appendChild(k),
                  k.appendChild(H),
                  F.appendChild(P),
                  P.appendChild(B),
                  B.appendChild(V),
                  P.appendChild(K),
                  K.appendChild(G),
                  F.appendChild($),
                  $.appendChild(q),
                  q.appendChild(U),
                  q.appendChild(z),
                  q.appendChild(W),
                  $.appendChild(Y),
                  Y.appendChild(X),
                  Y.appendChild(j),
                  Y.appendChild(Q),
                  F.appendChild(Z),
                  Z.appendChild(J),
                  Z.appendChild(tt);
                let et = document.createElement("div");
                et.classList.add(
                  "mdc-dialog",
                  "mdc-dialog-tv",
                  `mdc-dialog-${t.id}`
                ),
                  et.setAttribute("role", "alertdialog"),
                  et.setAttribute("aria-modal", "true"),
                  et.setAttribute("aria-labelledby", "my-dialog-title"),
                  et.setAttribute("aria-describedby", "my-dialog-content");
                let it = document.createElement("div");
                it.classList.add("mdc-dialog__container");
                let st = document.createElement("div");
                st.classList.add("mdc-dialog__surface");
                let nt = document.createElement("h2");
                nt.classList.add("mdc-dialog__title"),
                  nt.setAttribute("id", "my-dialog-title"),
                  (nt.innerText =
                    "Are you sure you want to delete this device?");
                let at = document.createElement("img");
                at.classList.add("dialog__image"),
                  at.setAttribute("src", "./assets/img/nooo.png");
                let rt = document.createElement("footer");
                rt.classList.add("mdc-dialog__actions");
                let ot = document.createElement("button");
                ot.classList.add("mdc-button", "mdc-dialog__button"),
                  ot.setAttribute("type", "button"),
                  ot.setAttribute("data-mdc-dialog-action", "close"),
                  (ot.innerText = "Cancel");
                let dt = document.createElement("button");
                dt.classList.add(
                  "mdc-button",
                  "mdc-dialog__button",
                  `mdc-dialog__${t.id}`
                ),
                  dt.setAttribute("type", "button"),
                  dt.setAttribute("data-mdc-dialog-action", "accept"),
                  (dt.innerText = "Delete");
                let ct = document.createElement("div");
                ct.classList.add("mdc-dialog__scrim");
                let lt = document.createElement("button");
                lt.classList.add(
                  "mdc-button",
                  "mdc-button-dialog-tv",
                  "mdc-button-delete-tv",
                  "mdc-button-delete",
                  "mdc-button-dialog",
                  "mdc-button--raised",
                  `mdc-button-dialog-${t.id}`
                ),
                  (lt.innerText = "Delete device"),
                  F.appendChild(et),
                  et.appendChild(it),
                  it.appendChild(st),
                  st.appendChild(nt),
                  st.appendChild(at),
                  st.appendChild(rt),
                  rt.appendChild(ot),
                  rt.appendChild(dt),
                  et.appendChild(ct),
                  F.appendChild(lt);
              } else if (t instanceof Ut) {
                let e = document.createElement("main");
                e.classList.add(
                  "main-coffee",
                  "mdc-hidden",
                  "mdc-top-app-bar--fixed-adjust",
                  "main",
                  `main__${t.id}`
                );
                let i = document.createElement("div");
                f.appendChild(e), e.appendChild(i);
                let s = document.createElement("h2");
                (s.innerText = `${t.name}`), s.classList.add("device__title");
                let n = document.createElement("div");
                n.classList.add(
                  "mdc-card",
                  "mdc-card-first",
                  `mdc-card-first-${t.id}`
                );
                let a = document.createElement("div");
                a.classList.add("card__coffee");
                let r = document.createElement("img");
                r.classList.add("card__image", "card__image-coffee"),
                  r.setAttribute("src", "./assets/img/coffee.png");
                let o = document.createElement("div");
                o.classList.add(
                  "mdc-card",
                  "mdc-card-second",
                  `mdc-card-second-${t.id}`,
                  "mdc-hidden"
                );
                let d = document.createElement("h3");
                d.classList.add("card__title"),
                  (d.innerText = "Coffee Machine specification");
                let c = document.createElement("p");
                c.classList.add("card__paragraph"),
                  (c.innerText = `${t.info}`),
                  i.appendChild(s),
                  i.appendChild(n),
                  n.appendChild(a),
                  a.appendChild(r),
                  i.appendChild(o),
                  o.appendChild(d),
                  o.appendChild(c);
                let l = document.createElement("div");
                l.classList.add("mdc-tab-bar");
                let h = document.createElement("div");
                h.classList.add("mdc-tab-scroller");
                let u = document.createElement("div");
                u.classList.add("mdc-tab-scroller__scroll-area");
                let _ = document.createElement("div");
                _.classList.add("mdc-tab-scroller__scroll-content");
                let m = document.createElement("button");
                m.classList.add(
                  "mdc-tab",
                  "mdc-tab-first",
                  "mdc-tab-first-coffee",
                  `mdc-tab-first-${t.id}`,
                  "mdc-tab--active"
                ),
                  m.setAttribute("role", "tab"),
                  m.setAttribute("aria-selected", "true"),
                  m.setAttribute("tabindex", "0");
                let p = document.createElement("span");
                p.classList.add("mdc-tab__content");
                let E = document.createElement("span");
                E.classList.add("mdc-tab__icon", "material-icons"),
                  (E.innerText = "location_city");
                let C = document.createElement("span");
                C.classList.add("mdc-tab__text-label"), (C.innerText = "Main");
                let g = document.createElement("span");
                g.classList.add("mdc-tab__ripple");
                let T = document.createElement("button");
                T.classList.add(
                  "mdc-tab",
                  "mdc-tab-second",
                  "mdc-tab-second-coffee",
                  `mdc-tab-second-${t.id}`,
                  "mdc-tab--active"
                ),
                  T.setAttribute("role", "tab"),
                  T.setAttribute("aria-selected", "true"),
                  T.setAttribute("tabindex", "1");
                let v = document.createElement("span");
                v.classList.add("mdc-tab__content");
                let L = document.createElement("span");
                L.classList.add("mdc-tab__icon", "material-icons"),
                  (L.innerText = "info");
                let A = document.createElement("span");
                A.classList.add("mdc-tab__text-label"),
                  (A.innerText = "Information");
                let b = document.createElement("span");
                b.classList.add("mdc-tab__ripple"),
                  i.appendChild(l),
                  l.appendChild(h),
                  h.appendChild(u),
                  u.appendChild(_),
                  _.appendChild(m),
                  m.appendChild(p),
                  p.appendChild(E),
                  p.appendChild(C),
                  m.appendChild(g),
                  _.appendChild(T),
                  T.appendChild(v),
                  v.appendChild(L),
                  v.appendChild(A),
                  T.appendChild(b);
                let S = document.createElement("div");
                S.classList.add("select__wrapper"), e.appendChild(S);
                let I = document.createElement("div");
                I.classList.add("mdc-text-field");
                let y = document.createElement("input");
                y.classList.add("mdc-text-field__input"),
                  y.setAttribute("type", "text"),
                  y.setAttribute("placeholder", "Name your device"),
                  y.setAttribute("id", "my-text-field");
                let O = document.createElement("div");
                O.classList.add("mdc-line-ripple");
                let x = document.createElement("div");
                x.classList.add("mdc-text-field");
                let R = document.createElement("input");
                R.classList.add("mdc-text-field__input"),
                  R.setAttribute("type", "text"),
                  R.setAttribute("placeholder", "Change the description"),
                  R.setAttribute("id", "my-text-field");
                let w = document.createElement("div");
                w.classList.add("mdc-line-ripple");
                let D = document.createElement("div");
                D.classList.add("mdc-select");
                let N = document.createElement("select");
                N.classList.add("mdc-select__native-control");
                let F = document.createElement("option");
                F.innerText = "0";
                let M = document.createElement("option");
                M.innerText = "1";
                let k = document.createElement("option");
                (k.innerText = "2"), k.setAttribute("selected", "");
                let H = document.createElement("label");
                H.classList.add(
                  "mdc-floating-label",
                  "mdc-floating-label--float-above"
                ),
                  (H.innerText = "Sugar Quantity");
                let P = document.createElement("div");
                P.classList.add("mdc-line-ripple");
                let B = document.createElement("div");
                B.classList.add("mdc-select");
                let V = document.createElement("select");
                V.classList.add("mdc-select__native-control");
                let K = document.createElement("option");
                K.innerText = "Small";
                let G = document.createElement("option");
                G.innerText = "Medium";
                let $ = document.createElement("option");
                ($.innerText = "XXL"), $.setAttribute("selected", "");
                let q = document.createElement("label");
                q.classList.add(
                  "mdc-floating-label",
                  "mdc-floating-label--float-above"
                ),
                  (q.innerText = "Choose the coffee size");
                let U = document.createElement("div");
                U.classList.add("mdc-line-ripple"),
                  S.appendChild(I),
                  I.appendChild(y),
                  I.appendChild(O),
                  S.appendChild(x),
                  x.appendChild(R),
                  x.appendChild(w),
                  S.appendChild(D),
                  D.appendChild(N),
                  N.appendChild(F),
                  N.appendChild(M),
                  N.appendChild(k),
                  D.appendChild(H),
                  D.appendChild(P),
                  S.appendChild(B),
                  B.appendChild(V),
                  V.appendChild(K),
                  V.appendChild(G),
                  V.appendChild($),
                  B.appendChild(q),
                  B.appendChild(U);
                let z = document.createElement("button");
                z.classList.add(
                  "mdc-button",
                  "mdc-button-onoff",
                  "mdc-button--raised"
                ),
                  (z.innerText = "Turn On / Off"),
                  S.appendChild(z);
                let W = document.createElement("div");
                W.classList.add(
                  "mdc-dialog",
                  "mdc-dialog-coffee",
                  `mdc-dialog-${t.id}`
                ),
                  W.setAttribute("role", "alertdialog"),
                  W.setAttribute("aria-modal", "true"),
                  W.setAttribute("aria-labelledby", "my-dialog-title"),
                  W.setAttribute("aria-describedby", "my-dialog-content");
                let Y = document.createElement("div");
                Y.classList.add("mdc-dialog__container");
                let X = document.createElement("div");
                X.classList.add("mdc-dialog__surface");
                let j = document.createElement("h2");
                j.classList.add("mdc-dialog__title"),
                  j.setAttribute("id", "my-dialog-title"),
                  (j.innerText =
                    "Are you sure you want to delete this device?");
                let Q = document.createElement("img");
                Q.classList.add("dialog__image"),
                  Q.setAttribute("src", "./assets/img/nooo.png");
                let Z = document.createElement("footer");
                Z.classList.add("mdc-dialog__actions");
                let J = document.createElement("button");
                J.classList.add("mdc-button", "mdc-dialog__button"),
                  J.setAttribute("type", "button"),
                  J.setAttribute("data-mdc-dialog-action", "close"),
                  (J.innerText = "Cancel");
                let tt = document.createElement("button");
                tt.classList.add(
                  "mdc-button",
                  "mdc-dialog__button",
                  `mdc-dialog__${t.id}`
                ),
                  tt.setAttribute("type", "button"),
                  tt.setAttribute("data-mdc-dialog-action", "accept"),
                  (tt.innerText = "Delete");
                let et = document.createElement("div");
                et.classList.add("mdc-dialog__scrim");
                let it = document.createElement("button");
                it.classList.add(
                  "mdc-button",
                  "mdc-button-delete",
                  "mdc-button-delete-coffee",
                  "mdc-button-dialog-coffee",
                  "mdc-button-dialog",
                  "mdc-button--raised",
                  `mdc-button-dialog-${t.id}`
                ),
                  (it.innerText = "Delete device"),
                  S.appendChild(W),
                  W.appendChild(Y),
                  Y.appendChild(X),
                  X.appendChild(j),
                  X.appendChild(Q),
                  X.appendChild(Z),
                  Z.appendChild(J),
                  Z.appendChild(tt),
                  W.appendChild(et),
                  S.appendChild(it);
              }
            });
          let g = document.createElement("div");
          g.classList.add("device__wrapper"), _.appendChild(g);
          let T = document.createElement("div");
          T.classList.add("mdc-menu-surface--anchor");
          let v = document.createElement("button");
          v.classList.add(
            "mdc-button",
            "mdc-button-left",
            "mdc-button--raised"
          ),
            (v.innerText = "List of your devices");
          let L = document.createElement("div");
          L.classList.add("mdc-menu-left", "mdc-menu-surface");
          let A = document.createElement("ul");
          A.classList.add("mdc-list"),
            g.appendChild(T),
            T.appendChild(v),
            T.appendChild(L),
            L.appendChild(A);
          let b = [],
            S = [];
          this._home.devices.forEach(t => {
            let e = document.createElement("a");
            e.classList.add("mdc-list-item", `list__${t.id}`), (e.href = "");
            let i = document.createElement("span");
            i.classList.add("mdc-list-item__text"),
              (i.innerText = `${t.name}`),
              A.appendChild(e),
              e.appendChild(i),
              (b[`${t.id}`] = K.attachTo(
                document.querySelector(`.list__${t.id}`)
              )),
              (S[`${t.id}`] = document.querySelector(`.main__${t.id}`));
          }),
            b.forEach((t, e) => {
              t.listen("click", () => {
                S.forEach((t, i) => {
                  e === i
                    ? t.classList.remove("mdc-hidden")
                    : t.classList.add("mdc-hidden");
                });
              });
            }),
            S[S.length - 1].classList.remove("mdc-hidden");
          const I = C.attachTo(document.querySelector(".mdc-button-left")),
            y = new st(document.querySelector(".mdc-menu-left"));
          I.listen("click", () => {
            y.open = !y.open;
          });
          let O = document.createElement("div");
          O.classList.add("mdc-menu-surface--anchor");
          let R = document.createElement("button");
          R.classList.add(
            "mdc-button",
            "mdc-button-right",
            "mdc-button--raised"
          ),
            (R.innerText = "Add new device");
          let w = document.createElement("div");
          w.classList.add("mdc-menu-right", "mdc-menu-surface");
          let D = document.createElement("ul");
          D.classList.add("mdc-list");
          let N = document.createElement("a");
          N.classList.add("mdc-list-item", "list-item-light"), (N.href = "");
          let F = document.createElement("span");
          F.classList.add("mdc-list-item__text"), (F.innerText = "Light");
          let M = document.createElement("a");
          M.classList.add("mdc-list-item", "list-item-tv"), (M.href = "");
          let k = document.createElement("span");
          k.classList.add("mdc-list-item__text"), (k.innerText = "TV");
          let H = document.createElement("a");
          H.classList.add("mdc-list-item", "list-item-coffee"), (H.href = "");
          let P = document.createElement("span");
          P.classList.add("mdc-list-item__text"),
            (P.innerText = "Coffee Machine"),
            g.appendChild(O),
            O.appendChild(R),
            O.appendChild(w),
            w.appendChild(D),
            D.appendChild(N),
            N.appendChild(F),
            D.appendChild(M),
            M.appendChild(k),
            D.appendChild(H),
            H.appendChild(P);
          const B = C.attachTo(document.querySelector(".mdc-button-right")),
            V = new st(document.querySelector(".mdc-menu-right"));
          B.listen("click", () => {
            V.open = !V.open;
          });
          let G = K.attachTo(document.querySelector(".list-item-light")),
            $ = K.attachTo(document.querySelector(".list-item-tv")),
            U = K.attachTo(document.querySelector(".list-item-coffee"));
          G.listen("click", () => {
            this._home.addNewDevice(
              new qt(
                "Light title",
                "Please, fill the fields at the right side and write the device description"
              )
            ),
              this.render();
          }),
            $.listen("click", () => {
              this._home.addNewDevice(
                new zt(
                  "TV title",
                  "Please, fill the fields at the right side and write the device description"
                )
              ),
                this.render();
            }),
            U.listen("click", () => {
              this._home.addNewDevice(
                new Ut(
                  "Coffee title",
                  "Please, fill the fields at the right side and write the device description"
                )
              ),
                this.render();
            });
          let z = document.createElement("section");
          z.classList.add(
            "mdc-top-app-bar__section",
            "mdc-top-app-bar__section--align-end"
          );
          let W = document.createElement("button");
          W.classList.add(
            "mdc-icon-button",
            "mdc-icon-button-print",
            "material-icons"
          ),
            (W.innerText = "print"),
            _.appendChild(z),
            z.appendChild(W);
          let Y = document.createElement("main");
          Y.classList.add("main-content", "main-author", "mdc-hidden"),
            Y.setAttribute("id", "main-content");
          let X = document.createElement("div");
          X.classList.add("mdc-top-app-bar--fixed-adjust", "author__wrapper");
          let j = document.createElement("h2");
          j.classList.add("author__title"), (j.innerText = "Made by Pavlo");
          let Q = document.createElement("img");
          Q.classList.add("author__image"),
            Q.setAttribute("src", "./assets/img/ava.jpg");
          let Z = document.createElement("p");
          Z.classList.add("author__info"),
            (Z.innerText = "©2018 Smart House. All Rights Reserved."),
            root.appendChild(Y),
            Y.appendChild(X),
            X.appendChild(j),
            X.appendChild(Q),
            X.appendChild(Z);
          const J = x.attachTo(document.getElementById("app-bar"));
          J.setScrollTarget(document.getElementById("main-content")),
            J.listen("MDCTopAppBar:nav", () => {
              tt.open = !tt.open;
            });
          const tt = q.attachTo(document.querySelector(".mdc-drawer")),
            et = new C(document.querySelector(".mdc-icon-button-print"));
          (et.unbounded = !0),
            et.listen("click", () => {
              window.print();
            });
          let it = document.createElement("main");
          it.classList.add("main-content", "main-home", "mdc-hidden"),
            it.setAttribute("id", "main-content");
          let nt = document.createElement("div");
          nt.classList.add("mdc-top-app-bar--fixed-adjust");
          let at = document.createElement("div");
          at.classList.add("button-wrapper__start");
          let rt = document.createElement("img");
          rt.classList.add("start__image"),
            rt.setAttribute("src", "./assets/img/smart.png");
          let ot = document.createElement("div");
          ot.classList.add(
            "mdc-text-field",
            "mdc-text-field--textarea",
            "mdc-text-field--fullwidth",
            "mdc-text-field--disabled"
          );
          let dt = document.createElement("textarea");
          dt.classList.add("mdc-text-field__input"),
            dt.setAttribute("rows", "4"),
            dt.setAttribute("cols", "40"),
            dt.setAttribute("id", "textarea"),
            dt.setAttribute(
              "placeholder",
              "Click General Information button to get more information about the House"
            );
          let ct = document.createElement("div");
          ct.classList.add(
            "mdc-menu-surface--anchor",
            "mdc-button-general__wrapper"
          );
          let lt = document.createElement("button");
          lt.classList.add(
            "mdc-button",
            "mdc-button-general",
            "mdc-button--raised"
          ),
            (lt.innerText = "General information");
          let ht = document.createElement("div");
          ht.classList.add("mdc-menu-general", "mdc-menu-surface");
          let ut = document.createElement("ul");
          ut.classList.add("mdc-list"),
            ut.setAttribute("role", "menu"),
            ut.setAttribute("aria-hidden", "true"),
            ut.setAttribute("aria-orientation", "vertical");
          let _t = document.createElement("li");
          _t.classList.add("mdc-list-item", "mdc-list-get-address");
          let mt = document.createElement("span");
          mt.classList.add("mdc-list-item__text"),
            (mt.innerText = "Get Home address");
          let pt = document.createElement("li");
          pt.classList.add("mdc-list-item", "mdc-list-get-devices");
          let Et = document.createElement("span");
          Et.classList.add("mdc-list-item__text"),
            (Et.innerText = "Get List of all devices");
          let ft = document.createElement("li");
          ft.classList.add("mdc-list-item", "mdc-list-get-owner");
          let Ct = document.createElement("span");
          Ct.classList.add("mdc-list-item__text"),
            (Ct.innerText = "Get owner name"),
            root.appendChild(it),
            it.appendChild(nt),
            nt.appendChild(at),
            at.appendChild(rt),
            at.appendChild(ct),
            ct.appendChild(lt),
            ct.appendChild(ht),
            ht.appendChild(ut),
            ut.appendChild(_t),
            _t.appendChild(mt),
            ut.appendChild(pt),
            pt.appendChild(Et),
            ut.appendChild(ft),
            ft.appendChild(Ct),
            at.appendChild(ot),
            ot.appendChild(dt),
            K.attachTo(document.querySelector(".mdc-list-get-address")).listen(
              "click",
              () => {
                dt.value = `${this._home.address}`;
              }
            ),
            K.attachTo(document.querySelector(".mdc-list-get-devices")).listen(
              "click",
              () => {
                (dt.value = ""),
                  this._home.devices.forEach(
                    t =>
                      (dt.value += `Device name: ${t.name},  \n IsOn: ${
                        t.isOn
                      } \n`)
                  );
              }
            ),
            K.attachTo(document.querySelector(".mdc-list-get-owner")).listen(
              "click",
              () => {
                dt.value = `${this._home.owner}`;
              }
            );
          const gt = C.attachTo(document.querySelector(".mdc-button-general")),
            Tt = new st(document.querySelector(".mdc-menu-general"));
          gt.listen("click", () => {
            Tt.open = !Tt.open;
          });
          const vt = document.querySelector(".main-home"),
            Lt = document.querySelector(".main-devices"),
            At = document.querySelector(".main-author"),
            bt = K.attachTo(document.querySelector(".mdc-list-home")),
            St = K.attachTo(document.querySelector(".mdc-list-devices")),
            It = K.attachTo(document.querySelector(".mdc-list-author"));
          bt.listen("click", () => {
            vt.classList.remove("mdc-hidden"),
              Lt.classList.add("mdc-hidden"),
              At.classList.add("mdc-hidden");
          }),
            St.listen("click", () => {
              vt.classList.add("mdc-hidden"),
                Lt.classList.remove("mdc-hidden"),
                At.classList.add("mdc-hidden");
            }),
            It.listen("click", () => {
              vt.classList.add("mdc-hidden"),
                Lt.classList.add("mdc-hidden"),
                At.classList.remove("mdc-hidden");
            });
          const yt = [],
            Ot = [],
            xt = [],
            Rt = [];
          this._home.devices.forEach(t => {
            (yt[`${t.id}`] = document.querySelector(`.mdc-card-first-${t.id}`)),
              (Ot[`${t.id}`] = document.querySelector(
                `.mdc-card-second-${t.id}`
              )),
              (xt[`${t.id}`] = Dt.attachTo(
                document.querySelector(`.mdc-tab-first-${t.id}`)
              )),
              (Rt[`${t.id}`] = Dt.attachTo(
                document.querySelector(`.mdc-tab-second-${t.id}`)
              )),
              xt[`${t.id}`].listen("click", () => {
                yt[`${t.id}`].classList.remove("mdc-hidden"),
                  Ot[`${t.id}`].classList.add("mdc-hidden");
              }),
              Rt[`${t.id}`].listen("click", () => {
                yt[`${t.id}`].classList.add("mdc-hidden"),
                  Ot[`${t.id}`].classList.remove("mdc-hidden");
              });
          }),
            this._home.devices.forEach(t => {
              let e = [],
                i = 0;
              (e[i] = C.attachTo(
                document.querySelector(`.mdc-dialog__${t.id}`)
              )),
                e[i].listen("click", () => {
                  this._home.removeDevice(t), this.render();
                }),
                i++;
            }),
            this._home.devices.forEach(t => {
              let e = [],
                i = [];
              (e[`${t.id}`] = new Kt(
                document.querySelector(`.mdc-dialog-${t.id}`)
              )),
                (i[`${t.id}`] = C.attachTo(
                  document.querySelector(`.mdc-button-dialog-${t.id}`)
                )),
                i[`${t.id}`].listen("click", () => {
                  e[`${t.id}`].open();
                });
            });
        }
      }(Wt, document.getElementById("root")).render();
  }
]);
