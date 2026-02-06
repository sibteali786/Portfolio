(self.webpackChunk = self.webpackChunk || []).push([
  ["951"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new k.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          X.debug && window && window.console.warn(e);
        }
        var c,
          s,
          l,
          d = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(c, s) {
              function l() {
                var e = new d();
                return (i(e.init) && e.init.apply(e, arguments), e);
              }
              function d() {}
              (s === n && ((s = c), (c = Object)), (l.Bare = d));
              var f,
                u = (o[e] = c[e]),
                p = (d[e] = l[e] = new o());
              return (
                (p.constructor = l),
                (l.mixin = function (t) {
                  return ((d[e] = l[e] = r(l, t)[e]), l);
                }),
                (l.open = function (e) {
                  if (
                    ((f = {}),
                    i(e) ? (f = e.call(l, p, u, l, c)) : a(e) && (f = e),
                    a(f))
                  )
                    for (var n in f) t.call(f, n) && (p[n] = f[n]);
                  return (i(p.init) || (p.init = c), l);
                }),
                l.open(s)
              );
            };
          })("prototype", {}.hasOwnProperty),
          f = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                    ? t + n
                    : (e /= a / 2) < 1
                      ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                      : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          u = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          I = /[\-\.0-9]/g,
          T = /[A-Z]/,
          y = "number",
          m = /^(rgb|#)/,
          g = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          _ = /(all|none) 0s ease 0s/,
          L = /^(width|height)$/,
          h = document.createElement("a"),
          N = ["Webkit", "Moz", "O", "ms"],
          R = ["-webkit-", "-moz-", "-o-", "-ms-"],
          S = function (e) {
            if (e in h.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < N.length; t++)
              if ((n = N[t] + a) in h.style) return { dom: n, css: R[t] + e };
          },
          C = (t.support = {
            bind: Function.prototype.bind,
            transform: S("transform"),
            transition: S("transition"),
            backface: S("backface-visibility"),
            timing: S("transition-timing-function"),
          });
        if (C.transition) {
          var M = C.timing.dom;
          if (((h.style[M] = f["ease-in-back"][0]), !h.style[M]))
            for (var A in u) f[A][0] = u[A];
        }
        var w = (t.frame =
            (c =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && C.bind
              ? c.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          F = (t.now =
            (l =
              (s = p.performance) &&
              (s.now || s.webkitNow || s.msNow || s.mozNow)) && C.bind
              ? l.bind(s)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          B = d(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = z[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  c = this.props[a];
                return (
                  c || (c = this.props[a] = new o.Bare()),
                  c.init(this.$el, n, i, t),
                  c
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new G({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      s.call(this);
                      break;
                    case "stop":
                      c.call(this);
                      break;
                    case "redraw":
                      l.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var u = 0;
                  (f.call(
                    this,
                    e,
                    function (e, t) {
                      (e.span > u && (u = e.span), e.stop(), e.animate(t));
                    },
                    function (e) {
                      "wait" in e && (u = o(e.wait, 0));
                    },
                  ),
                    d.call(this),
                    u > 0 &&
                      ((this.timer = new G({ duration: u, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i)));
                  var p = this,
                    E = !1,
                    I = {};
                  w(function () {
                    (f.call(p, e, function (e) {
                      e.active && ((E = !0), (I[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(I));
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function c(e) {
              var t;
              (this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                f.call(this, t, u),
                d.call(this));
            }
            function s() {
              (c.call(this), (this.el.style.display = "none"));
            }
            function l() {
              this.el.offsetHeight;
            }
            function d() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              ((n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[C.transition.dom] = n)));
            }
            function f(e, t, a) {
              var i,
                o,
                r,
                c,
                s = t !== u,
                l = {};
              for (i in e)
                ((r = e[i]),
                  i in Y
                    ? (l.transform || (l.transform = {}), (l.transform[i] = r))
                    : (T.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in z ? (l[i] = r) : (c || (c = {}), (c[i] = r))));
              for (i in l) {
                if (((r = l[i]), !(o = this.props[i]))) {
                  if (!s) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && c && a.call(this, c);
            }
            function u(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function I(e) {
              this.$el.css(e);
            }
            function y(e, n) {
              t[e] = function () {
                return this.children
                  ? m.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function m(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            ((t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                X.keepInherited && !X.fallback)
              ) {
                var n = j(this.el, "transition");
                n && !_.test(n) && (this.upstream = n);
              }
              C.backface &&
                X.hideBackface &&
                Q(this.el, C.backface.css, "hidden");
            }),
              y("add", n),
              y("start", a),
              y("wait", function (e) {
                ((e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new G({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0)));
              }),
              y("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then().",
                    );
              }),
              y("next", i),
              y("stop", c),
              y("set", function (e) {
                (c.call(this, e), f.call(this, e, p, I));
              }),
              y("show", function (e) {
                ("string" != typeof e && (e = "block"),
                  (this.el.style.display = e));
              }),
              y("hide", s),
              y("redraw", l),
              y("destroy", function () {
                (c.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null));
              }));
          }),
          k = d(B, function (t) {
            function n(t, n) {
              var a = e.data(t, E) || e.data(t, E, new B.Bare());
              return (a.el || a.init(t), n ? a.start(n) : a);
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          V = d(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return (this.update(e), t);
            }
            ((e.init = function (e, t, n, a) {
              ((this.$el = e), (this.el = e[0]));
              var i,
                r,
                c,
                s = t[0];
              (n[2] && (s = n[2]),
                H[s] && (s = H[s]),
                (this.name = s),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (r = this.ease),
                  (c = "ease"),
                  void 0 !== r && (c = r),
                  i in f ? i : c)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = L.test(this.name)),
                (this.unit = a.unit || this.unit || X.defaultUnit),
                (this.angle = a.angle || this.angle || X.defaultAngle),
                X.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + f[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : ""))));
            }),
              (e.set = function (e) {
                ((e = this.convert(e, this.type)),
                  this.update(e),
                  this.redraw());
              }),
              (e.transition = function (e) {
                ((this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e));
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                ((e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new D({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  })));
              }),
              (e.get = function () {
                return j(this.el, this.name);
              }),
              (e.update = function (e) {
                Q(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  Q(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  c = "string" == typeof e;
                switch (t) {
                  case y:
                    if (o) return e;
                    if (c && "" === e.replace(I, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case m:
                    if (c) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case g:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (c && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (c && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (c && b.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e,
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              }));
          }),
          P = d(V, function (e, t) {
            e.init = function () {
              (t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), m)));
            };
          }),
          U = d(V, function (e, t) {
            ((e.init = function () {
              (t.init.apply(this, arguments), (this.animate = this.fallback));
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              }));
          }),
          x = d(V, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                ((i = (o = Y[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i));
            }
            ((e.init = function () {
              (t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Y.perspective &&
                    X.perspective &&
                    ((this.current.perspective = X.perspective),
                    Q(this.el, this.name, this.style(this.current)),
                    this.redraw())));
            }),
              (e.set = function (e) {
                (n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  Q(this.el, this.name, this.style(this.current)),
                  this.redraw());
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new W({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                ((this.active = !0), (this.nextStyle = this.style(a)));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new W({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                Q(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    ((a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i))));
                  }),
                  a
                );
              }));
          }),
          D = d(function (t) {
            function o() {
              var e,
                t,
                n,
                a = s.length;
              if (a)
                for (w(o), t = F(), e = a; e--; ) (n = s[e]) && n.render(t);
            }
            var c = { ease: f.ease[1], from: 0, to: 1 };
            ((t.init = function (e) {
              ((this.duration = e.duration || 0), (this.delay = e.delay || 0));
              var t = e.ease || c.ease;
              (f[t] && (t = f[t][1]),
                "function" != typeof t && (t = c.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name));
              var n = e.from,
                a = e.to;
              (void 0 === n && (n = c.from),
                void 0 === a && (a = c.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = F()),
                !1 !== e.autoplay && this.play());
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = F()),
                  (this.active = !0),
                  1 === s.push(this) && w(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, s)) >= 0 &&
                    ((t = s.slice(n + 1)),
                    (s.length = n),
                    t.length && (s = s.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2]),
                        ))
                      : Math.round((this.begin + r * this.change) * l) / l),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                ((t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy());
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(I, "");
                  (a !== e.replace(I, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a));
                }
                ((t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t));
              }),
              (t.destroy = function () {
                (this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i));
              }));
            var s = [],
              l = 1e3;
          }),
          G = d(D, function (e) {
            ((e.init = function (e) {
              ((this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play());
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              }));
          }),
          W = d(D, function (e, t) {
            ((e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                ((n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new D({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      }),
                    ));
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  ((this.tweens = null), (this.current = null));
                }
              }));
          }),
          X = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !C.transition,
            agentTests: [],
          });
        ((t.fallback = function (e) {
          if (!C.transition) return (X.fallback = !0);
          X.agentTests.push("(" + e + ")");
          var t = RegExp(X.agentTests.join("|"), "i");
          X.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new D(e);
          }),
          (t.delay = function (e, t, n) {
            return new G({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          }));
        var Q = e.style,
          j = e.css,
          H = { transform: C.transform && C.transform.css },
          z = {
            color: [P, m],
            background: [P, m, "background-color"],
            "outline-color": [P, m],
            "border-color": [P, m],
            "border-top-color": [P, m],
            "border-right-color": [P, m],
            "border-bottom-color": [P, m],
            "border-left-color": [P, m],
            "border-width": [V, g],
            "border-top-width": [V, g],
            "border-right-width": [V, g],
            "border-bottom-width": [V, g],
            "border-left-width": [V, g],
            "border-spacing": [V, g],
            "letter-spacing": [V, g],
            margin: [V, g],
            "margin-top": [V, g],
            "margin-right": [V, g],
            "margin-bottom": [V, g],
            "margin-left": [V, g],
            padding: [V, g],
            "padding-top": [V, g],
            "padding-right": [V, g],
            "padding-bottom": [V, g],
            "padding-left": [V, g],
            "outline-width": [V, g],
            opacity: [V, y],
            top: [V, b],
            right: [V, b],
            bottom: [V, b],
            left: [V, b],
            "font-size": [V, b],
            "text-indent": [V, b],
            "word-spacing": [V, b],
            width: [V, b],
            "min-width": [V, b],
            "max-width": [V, b],
            height: [V, b],
            "min-height": [V, b],
            "max-height": [V, b],
            "line-height": [V, v],
            "scroll-top": [U, y, "scrollTop"],
            "scroll-left": [U, y, "scrollLeft"],
          },
          Y = {};
        (C.transform &&
          ((z.transform = [x]),
          (Y = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          C.transform &&
            C.backface &&
            ((Y.z = [b, "translateZ"]),
            (Y.rotateZ = [O]),
            (Y.scaleZ = [y]),
            (Y.perspective = [g])));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        c,
        s,
        l,
        d,
        f,
        u,
        p,
        E,
        I,
        T,
        y,
        m,
        g,
        b,
        O,
        v,
        _ = window.$,
        L = n(5487) && _.tram;
      (((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (c = Function.prototype),
        o.push,
        (s = o.slice),
        o.concat,
        r.toString,
        (l = r.hasOwnProperty),
        (d = o.forEach),
        (f = o.map),
        o.reduce,
        o.reduceRight,
        (u = o.filter),
        o.every,
        (p = o.some),
        (E = o.indexOf),
        o.lastIndexOf,
        (I = Object.keys),
        c.bind,
        (T =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (d && e.forEach === d) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var c = a.keys(e), o = 0, r = c.length; o < r; o++)
                  if (t.call(n, e[c[o]], c[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.map === f
                ? e.map(t, n)
                : (T(e, function (e, i, o) {
                    a.push(t.call(n, e, i, o));
                  }),
                  a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              y(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return ((a = e), !0);
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.filter === u
                ? e.filter(t, n)
                : (T(e, function (e, i, o) {
                    t.call(n, e, i, o) && a.push(e);
                  }),
                  a);
          }),
        (y =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                  ? e.some(t, n)
                  : (T(e, function (e, a, r) {
                      if (o || (o = t.call(n, e, a, r))) return i;
                    }),
                    !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = s.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(s.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              L.frame(function () {
                ((t = !1), e.apply(a, n));
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            c,
            s,
            l = function () {
              var d = a.now() - c;
              d < t
                ? (i = setTimeout(l, t - d))
                : ((i = null), n || ((s = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            ((r = this), (o = arguments), (c = a.now()));
            var d = n && !i;
            return (
              i || (i = setTimeout(l, t)),
              d && ((s = e.apply(r, o)), (r = o = null)),
              s
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (I) return I(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return l.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (m = /(.)^/),
        (g = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + g[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || m)
                  .source,
                (t.interpolate || m).source,
                (t.evaluate || m).source,
              ].join("|") + "|$",
              "g",
            ),
            r = 0,
            c = "__p+='";
          (e.replace(o, function (t, n, a, i, o) {
            return (
              (c += e.slice(r, o).replace(b, O)),
              (r = o + t.length),
              n
                ? (c += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                  ? (c += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                  : i && (c += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (c += "';\n"));
          var s = t.variable;
          if (s) {
            if (!v.test(s))
              throw Error("variable is not a bare identifier: " + s);
          } else ((c = "with(obj||{}){\n" + c + "}\n"), (s = "obj"));
          c =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            c +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", c);
          } catch (e) {
            throw ((e.source = c), e);
          }
          var l = function (e) {
            return i.call(this, e, a);
          };
          return ((l.source = "function(" + s + "){\n" + c + "}"), l);
        }),
        (e.exports = a));
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define("brand", (e.exports = function () {}), function (e) {
        var t,
          n = {},
          i = document,
          o = e("html"),
          r = e("body"),
          c = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          l =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function d() {
          var n =
            i.fullScreen ||
            i.mozFullScreen ||
            i.webkitIsFullScreen ||
            i.msFullscreenElement ||
            !!i.webkitFullscreenElement;
          e(t).attr("style", n ? "display: none !important;" : "");
        }
        function f() {
          var e = r.children(".w-webflow-badge"),
            n = e.length && e.get(0) === t,
            i = a.env("editor");
          if (n) {
            i && e.remove();
            return;
          }
          (e.length && e.remove(), i || r.append(t));
        }
        return (
          (n.ready = function () {
            var n,
              a,
              r,
              u = o.attr("data-wf-status"),
              p = o.attr("data-wf-domain") || "";
            (/\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
              u &&
                !s &&
                ((t =
                  t ||
                  ((n = e('<a class="w-webflow-badge"></a>').attr(
                    "href",
                    "https://webflow.com?utm_campaign=brandjs",
                  )),
                  (a = e("<img>")
                    .attr(
                      "src",
                      "../images/webflow-badge-icon-d2.89e12c322e.svg",
                    )
                    .attr("alt", "")
                    .css({ marginRight: "4px", width: "26px" })),
                  (r = e("<img>")
                    .attr(
                      "src",
                      "../images/webflow-badge-text-d2.c82cec3b78.svg",
                    )
                    .attr("alt", "Made in Webflow")),
                  n.append(a, r),
                  n[0])),
                f(),
                setTimeout(f, 500),
                e(i).off(l, d).on(l, d)));
          }),
          n
        );
      });
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            c = document.location,
            s = "hashchange",
            l =
              n.load ||
              function () {
                var t, n, a;
                ((i = !0),
                  (window.WebflowEditor = !0),
                  o.off(s, f),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data",
                            );
                          ((t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, u));
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    (E(n, a), t(!1));
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n));
              },
            d = !1;
          try {
            d =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function f() {
            !i && /\?edit/.test(c.hash) && l();
          }
          function u(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            (window.removeEventListener("message", t, !1), e.remove());
          }
          return (
            /[?&](update)(?:[=&?]|$)/.test(c.search) || /\?update$/.test(c.href)
              ? (function () {
                  var e = document.documentElement,
                    t = e.getAttribute("data-wf-site"),
                    n = e.getAttribute("data-wf-page"),
                    a = e.getAttribute("data-wf-item-slug"),
                    i = e.getAttribute("data-wf-collection"),
                    o = e.getAttribute("data-wf-domain");
                  if (t && n) {
                    var r = "pageId=" + n + "&mode=edit";
                    ((r += "&simulateRole=editor"),
                      a &&
                        i &&
                        o &&
                        (r +=
                          "&domain=" +
                          encodeURIComponent(o) +
                          "&itemSlug=" +
                          encodeURIComponent(a) +
                          "&collectionId=" +
                          i),
                      (window.location.href =
                        "https://webflow.com/external/designer/" +
                        t +
                        "?" +
                        r));
                  }
                })()
              : d
                ? l()
                : c.search
                  ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) ||
                      /\?edit$/.test(c.href)) &&
                    l()
                  : o.on(s, f).triggerHandler(s),
            {}
          );
        }),
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function r(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function c() {
                      t = !1;
                    }
                    function s() {
                      (document.addEventListener("mousemove", l),
                        document.addEventListener("mousedown", l),
                        document.addEventListener("mouseup", l),
                        document.addEventListener("pointermove", l),
                        document.addEventListener("pointerdown", l),
                        document.addEventListener("pointerup", l),
                        document.addEventListener("touchmove", l),
                        document.addEventListener("touchstart", l),
                        document.addEventListener("touchend", l));
                    }
                    function l(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", l),
                        document.removeEventListener("mousedown", l),
                        document.removeEventListener("mouseup", l),
                        document.removeEventListener("pointermove", l),
                        document.removeEventListener("pointerdown", l),
                        document.removeEventListener("pointerup", l),
                        document.removeEventListener("touchmove", l),
                        document.removeEventListener("touchstart", l),
                        document.removeEventListener("touchend", l));
                    }
                    (document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && r(e.activeElement), (t = !0));
                      },
                      !0,
                    ),
                      document.addEventListener("mousedown", c, !0),
                      document.addEventListener("pointerdown", c, !0),
                      document.addEventListener("touchstart", c, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), s());
                        },
                        !0,
                      ),
                      s(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, c;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (c = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === c && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              r(e.target);
                          }
                        },
                        !0,
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            ((n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible",
                              ) && t.removeAttribute("data-wf-focus-visible"));
                          }
                        },
                        !0,
                      ));
                  })(document);
                }
            },
          };
        }),
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            ((i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0)));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        }),
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      ((n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          ((a = []), t.extend(n.triggers, o));
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n));
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t, n) {
        var a = document.createEvent("CustomEvent");
        (a.initCustomEvent(t, !0, !0, n || null), e.dispatchEvent(a));
      }
      var o = window.jQuery,
        r = {},
        c = ".w-ix";
      ((r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + c, OUTRO: "w-ix-outro" + c }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            (a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE"));
          },
          outro: function (e, t) {
            (a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE"));
          },
        }),
        (r.dispatchCustomEvent = i),
        (e.exports = r));
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      (i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          }),
        ));
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        c = [],
        s = window.Webflow || [],
        l = window.jQuery,
        d = l(window),
        f = l(document),
        u = l.isFunction,
        p = (o._ = n(5756)),
        E = (o.tram = n(5487) && l.tram),
        I = !1,
        T = !1;
      function y(e) {
        (o.env() &&
          (u(e.design) && d.on("__wf_design", e.design),
          u(e.preview) && d.on("__wf_preview", e.preview)),
          u(e.destroy) && d.on("__wf_destroy", e.destroy),
          e.ready &&
            u(e.ready) &&
            (function (e) {
              if (I) return e.ready();
              p.contains(c, e.ready) || c.push(e.ready);
            })(e));
      }
      function m(e) {
        var t;
        (u(e.design) && d.off("__wf_design", e.design),
          u(e.preview) && d.off("__wf_preview", e.preview),
          u(e.destroy) && d.off("__wf_destroy", e.destroy),
          e.ready &&
            u(e.ready) &&
            ((t = e),
            (c = p.filter(c, function (e) {
              return e !== t.ready;
            }))));
      }
      ((E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && m(r[e]);
          var a = (r[e] = t(l, p, n) || {});
          return (y(a), a);
        }),
        (o.require = function (e) {
          return r[e];
        }),
        (o.push = function (e) {
          if (I) {
            u(e) && e();
            return;
          }
          s.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
                ? n && !t
                : "slug" === e
                  ? n && window.__wf_slug
                  : "editor" === e
                    ? window.WebflowEditor
                    : "test" === e
                      ? window.__wf_test
                      : "frame" === e
                        ? window !== window.top
                        : void 0
            : n;
        }));
      var g = navigator.userAgent.toLowerCase(),
        b = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(g) &&
          /Google/.test(navigator.vendor) &&
          parseInt(g.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(g));
      ((o.env.safari = /safari/.test(g) && !O && !v),
        b &&
          f.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = b
          ? function (e) {
              return e === a || l.contains(e, a);
            }
          : function () {
              return !0;
            }));
      var _ = "resize.webflow orientationchange.webflow load.webflow",
        L = "scroll.webflow " + _;
      function h(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function N(e) {
        u(e) && e();
      }
      function R() {
        (i && (i.reject(), d.off("load", i.resolve)),
          (i = new l.Deferred()),
          d.on("load", i.resolve));
      }
      ((o.resize = h(d, _)),
        (o.scroll = h(d, L)),
        (o.redraw = h()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          ((I = !0),
            T ? ((T = !1), p.each(r, y)) : p.each(c, N),
            p.each(s, N),
            o.resize.up());
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          ((e = e || {}),
            (T = !0),
            d.triggerHandler("__wf_destroy"),
            null != e.domready && (I = e.domready),
            p.each(r, m),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (c = []),
            (s = []),
            "pending" === i.state() && R());
        }),
        l(o.ready),
        R(),
        (e.exports = window.Webflow = o));
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            c = e(window),
            s = a.env(),
            l = window.location,
            d = document.createElement("a"),
            f = "w--current",
            u = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = c.scrollTop(),
              n = c.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  r = i.outerHeight(),
                  c = 0.5 * n,
                  s = i.is(":visible") && o + r - c >= e && o + c <= e + n;
                t.active !== s && ((t.active = s), I(a, f, s));
              }
            });
          }
          function I(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (r.ready =
              r.design =
              r.preview =
                function () {
                  ((n = s && a.env("design")),
                    (o = a.env("slug") || l.pathname || ""),
                    a.scroll.off(E),
                    (i = []));
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((d.href = a), !(a.indexOf(":") >= 0))) {
                          var r = e(t);
                          if (
                            d.hash.length > 1 &&
                            d.host + d.pathname === l.host + l.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(d.hash)) return;
                            var c = e(d.hash);
                            c.length && i.push({ link: r, sec: c, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            I(
                              r,
                              f,
                              (!s && d.href === l.href) ||
                                a === o ||
                                (u.test(a) && p.test(o)),
                            );
                        }
                      }
                    })(t[r]);
                  i.length && (a.scroll.on(E), E());
                }),
            r
          );
        }),
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            r = e(document),
            c = e(document.body),
            s =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            l = a.env("editor") ? ".w-editor-body" : "body",
            d =
              "header, " +
              l +
              " > .header, " +
              l +
              " > .w-nav:not([data-no-scroll])",
            f = 'a[href="#"]',
            u = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
            ),
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let I =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function T(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function y(t) {
            var r = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
              )
            ) {
              var l =
                E.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                  ? r.hash
                  : "";
              if ("" !== l) {
                var f,
                  u = e(l);
                u.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (f = l),
                  n.hash !== f &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== f &&
                    i.pushState({ hash: f }, "", f),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(d),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              c = t.outerHeight();
                            c < r && (i -= Math.round((r - c) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion",
                                ) ||
                              I.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              c.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time"),
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          l = Date.now(),
                          f = function () {
                            var e,
                              t,
                              o,
                              c,
                              d,
                              u = Date.now() - l;
                            (window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = u) > (c = r)
                                ? t
                                : e +
                                  (t - e) *
                                    ((d = o / c) < 0.5
                                      ? 4 * d * d * d
                                      : (d - 1) * (2 * d - 2) * (2 * d - 2) +
                                        1)),
                            ),
                              u <= r ? s(f) : "function" == typeof n && n());
                          };
                        s(f);
                      }
                    })(u, function () {
                      (T(u, "add"),
                        u.get(0).focus({ preventScroll: !0 }),
                        T(u, "remove"));
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              (r.on(n, u, y),
                r.on(e, f, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild));
            },
          };
        }),
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              c = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function s(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function l(t) {
              if (o) {
                if (r && "mousemove" === t.type) {
                  (t.preventDefault(), t.stopPropagation());
                  return;
                }
                var a,
                  s,
                  l,
                  d,
                  u = t.touches,
                  p = u ? u[0].clientX : t.clientX,
                  E = p - i;
                ((i = p),
                  Math.abs(E) > c &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (s = t),
                    (l = { direction: E > 0 ? "right" : "left" }),
                    (d = e.Event(a, { originalEvent: s })),
                    e(s.target).trigger(d, l),
                    f()));
              }
            }
            function d(e) {
              if (o && ((o = !1), r && "mouseup" === e.type)) {
                (e.preventDefault(), e.stopPropagation(), (r = !1));
                return;
              }
            }
            function f() {
              o = !1;
            }
            (t.addEventListener("touchstart", s, !1),
              t.addEventListener("touchmove", l, !1),
              t.addEventListener("touchend", d, !1),
              t.addEventListener("touchcancel", f, !1),
              t.addEventListener("mousedown", s, !1),
              t.addEventListener("mousemove", l, !1),
              t.addEventListener("mouseup", d, !1),
              t.addEventListener("mouseout", f, !1),
              (this.destroy = function () {
                (t.removeEventListener("touchstart", s, !1),
                  t.removeEventListener("touchmove", l, !1),
                  t.removeEventListener("touchend", d, !1),
                  t.removeEventListener("touchcancel", f, !1),
                  t.removeEventListener("mousedown", s, !1),
                  t.removeEventListener("mousemove", l, !1),
                  t.removeEventListener("mouseup", d, !1),
                  t.removeEventListener("mouseout", f, !1),
                  (t = null));
              }));
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        }),
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      function r(e, t) {
        i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
          component: "navbar",
          state: t,
        });
      }
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            c,
            s,
            l,
            d = {},
            f = e.tram,
            u = e(window),
            p = e(document),
            E = t.debounce,
            I = a.env(),
            T = ".w-nav",
            y = "w--open",
            m = "w--nav-dropdown-open",
            g = "w--nav-dropdown-toggle-open",
            b = "w--nav-dropdown-list-open",
            O = "w--nav-link-open",
            v = i.triggers,
            _ = e();
          function L() {
            a.resize.off(h);
          }
          function h() {
            c.each(k);
          }
          function N(n, a) {
            var i,
              r,
              c,
              d,
              f,
              E = e(a),
              I = e.data(a, T);
            (I ||
              (I = e.data(a, T, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (I.menu = E.find(".w-nav-menu")),
              (I.links = I.menu.find(".w-nav-link")),
              (I.dropdowns = I.menu.find(".w-dropdown")),
              (I.dropdownToggle = I.menu.find(".w-dropdown-toggle")),
              (I.dropdownList = I.menu.find(".w-dropdown-list")),
              (I.button = E.find(".w-nav-button")),
              (I.container = E.find(".w-container")),
              (I.overlayContainerId = "w-nav-overlay-" + n),
              (I.outside =
                ((i = I).outside && p.off("click" + T, i.outside),
                function (t) {
                  var n = e(t.target);
                  (l && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    B(i, n);
                })));
            var y = E.find(".w-nav-brand");
            (y &&
              "/" === y.attr("href") &&
              null == y.attr("aria-label") &&
              y.attr("aria-label", "home"),
              I.button.attr("style", "-webkit-user-select: text;"),
              null == I.button.attr("aria-label") &&
                I.button.attr("aria-label", "menu"),
              I.button.attr("role", "button"),
              I.button.attr("tabindex", "0"),
              I.button.attr("aria-controls", I.overlayContainerId),
              I.button.attr("aria-haspopup", "menu"),
              I.button.attr("aria-expanded", "false"),
              I.el.off(T),
              I.button.off(T),
              I.menu.off(T),
              C(I),
              s
                ? (S(I),
                  I.el.on(
                    "setting" + T,
                    ((r = I),
                    function (e, n) {
                      n = n || {};
                      var a = u.width();
                      (C(r),
                        !0 === n.open && x(r, !0),
                        !1 === n.open && G(r, !0),
                        r.open &&
                          t.defer(function () {
                            a !== u.width() && A(r);
                          }));
                    }),
                  ))
                : ((c = I).overlay ||
                    ((c.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />',
                    ).appendTo(c.el)),
                    c.overlay.attr("id", c.overlayContainerId),
                    (c.parent = c.menu.parent()),
                    G(c, !0)),
                  I.button.on("click" + T, w(I)),
                  I.menu.on("click" + T, "a", F(I)),
                  I.button.on(
                    "keydown" + T,
                    ((d = I),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            w(d)(),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return (
                            G(d),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!d.open)
                            return (e.preventDefault(), e.stopPropagation());
                          return (
                            e.keyCode === o.END
                              ? (d.selectedIdx = d.links.length - 1)
                              : (d.selectedIdx = 0),
                            M(d),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    }),
                  ),
                  I.el.on(
                    "keydown" + T,
                    ((f = I),
                    function (e) {
                      if (f.open)
                        switch (
                          ((f.selectedIdx = f.links.index(
                            document.activeElement,
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (f.selectedIdx = f.links.length - 1)
                                : (f.selectedIdx = 0),
                              M(f),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              G(f),
                              f.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (f.selectedIdx = Math.max(-1, f.selectedIdx - 1)),
                              M(f),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (f.selectedIdx = Math.min(
                                f.links.length - 1,
                                f.selectedIdx + 1,
                              )),
                              M(f),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    }),
                  )),
              k(n, a));
          }
          function R(t, n) {
            var a = e.data(n, T);
            a && (S(a), e.removeData(n, T));
          }
          function S(e) {
            e.overlay && (G(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function C(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            ((n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(A, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease"));
            var o = e.el.attr("data-duration");
            ((n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n));
          }
          function M(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              (t.focus(), F(t));
            }
          }
          function A(e) {
            e.open && (G(e, !0), x(e, !0));
          }
          function w(e) {
            return E(function () {
              e.open ? G(e) : x(e);
            });
          }
          function F(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && G(t);
            };
          }
          ((d.ready =
            d.design =
            d.preview =
              function () {
                ((s = I && a.env("design")),
                  (l = a.env("editor")),
                  (n = e(document.body)),
                  (c = p.find(T)).length && (c.each(N), L(), a.resize.on(h)));
              }),
            (d.destroy = function () {
              ((_ = e()), L(), c && c.length && c.each(R));
            }));
          var B = E(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || G(e);
            }
          });
          function k(t, n) {
            var a = e.data(n, T),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || s || G(a, !0), a.container.length)) {
              var o,
                r =
                  ("none" === (o = a.container.css(V)) && (o = ""),
                  function (t, n) {
                    ((n = e(n)).css(V, ""), "none" === n.css(V) && n.css(V, o));
                  });
              (a.links.each(r), a.dropdowns.each(r));
            }
            a.open && D(a);
          }
          var V = "max-width";
          function P(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function U(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function x(e, t) {
            if (!e.open) {
              ((e.open = !0),
                e.menu.each(P),
                e.links.addClass(O),
                e.dropdowns.addClass(m),
                e.dropdownToggle.addClass(g),
                e.dropdownList.addClass(b),
                e.button.addClass(y));
              var n = e.config;
              ("none" === n.animation ||
                !f.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = D(e),
                o = e.menu.outerHeight(!0),
                c = e.menu.outerWidth(!0),
                l = e.el.height(),
                d = e.el[0];
              if (
                (k(0, d),
                v.intro(0, d),
                r(d, "open"),
                a.redraw.up(),
                s || p.on("click" + T, e.outside),
                t)
              )
                return void E();
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((_ = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                (f(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * c, height: i })
                  .start({ x: 0 })
                  .then(E),
                  e.overlay && e.overlay.width(c));
                return;
              }
              f(e.menu)
                .add(u)
                .set({ y: -(l + o) })
                .start({ y: 0 })
                .then(E);
            }
            function E() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function D(e) {
            var t = e.config,
              a = t.docHeight ? p.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function G(e, t) {
            if (e.open) {
              ((e.open = !1), e.button.removeClass(y));
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !f.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                v.outro(0, e.el[0]),
                r(e.el[0], "close"),
                p.off("click" + T, e.outside),
                t)
              ) {
                (f(e.menu).stop(), s());
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                c = e.el.height();
              if (n.animOver)
                return void f(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(s);
              f(e.menu)
                .add(a)
                .start({ y: -(c + i) })
                .then(s);
            }
            function s() {
              (e.menu.height(""),
                f(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(U),
                e.links.removeClass(O),
                e.dropdowns.removeClass(m),
                e.dropdownToggle.removeClass(g),
                e.dropdownList.removeClass(b),
                e.overlay &&
                  e.overlay.children().length &&
                  (_.length
                    ? e.menu.insertAfter(_)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false"));
            }
          }
          return d;
        }),
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return j;
        },
        animationFrameChanged: function () {
          return x;
        },
        clearRequested: function () {
          return k;
        },
        elementStateChanged: function () {
          return Q;
        },
        eventListenerAdded: function () {
          return V;
        },
        eventStateChanged: function () {
          return U;
        },
        instanceAdded: function () {
          return G;
        },
        instanceRemoved: function () {
          return X;
        },
        instanceStarted: function () {
          return W;
        },
        mediaQueriesDefined: function () {
          return z;
        },
        parameterChanged: function () {
          return D;
        },
        playbackRequested: function () {
          return F;
        },
        previewRequested: function () {
          return w;
        },
        rawDataImported: function () {
          return S;
        },
        sessionInitialized: function () {
          return C;
        },
        sessionStarted: function () {
          return M;
        },
        sessionStopped: function () {
          return A;
        },
        stopRequested: function () {
          return B;
        },
        testFrameRendered: function () {
          return P;
        },
        viewportWidthChanged: function () {
          return H;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        r = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: c,
          IX2_SESSION_INITIALIZED: s,
          IX2_SESSION_STARTED: l,
          IX2_SESSION_STOPPED: d,
          IX2_PREVIEW_REQUESTED: f,
          IX2_PLAYBACK_REQUESTED: u,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: T,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: m,
          IX2_PARAMETER_CHANGED: g,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: _,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: L,
          IX2_VIEWPORT_WIDTH_CHANGED: h,
          IX2_MEDIA_QUERIES_DEFINED: N,
        } = o.IX2EngineActionTypes,
        { reifyState: R } = r.IX2VanillaUtils,
        S = (e) => ({ type: c, payload: { ...R(e) } }),
        C = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: s,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        M = () => ({ type: l }),
        A = () => ({ type: d }),
        w = ({ rawData: e, defer: t }) => ({
          type: f,
          payload: { defer: t, rawData: e },
        }),
        F = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: r,
          testManual: c,
          verbose: s,
          rawData: l,
        }) => ({
          type: u,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: c,
            eventId: a,
            allowEvents: i,
            immediate: r,
            verbose: s,
            rawData: l,
          },
        }),
        B = (e) => ({ type: p, payload: { actionListId: e } }),
        k = () => ({ type: E }),
        V = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        P = (e = 1) => ({ type: T, payload: { step: e } }),
        U = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        x = (e, t) => ({ type: m, payload: { now: e, parameters: t } }),
        D = (e, t) => ({ type: g, payload: { key: e, value: t } }),
        G = (e) => ({ type: b, payload: { ...e } }),
        W = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        X = (e) => ({ type: v, payload: { instanceId: e } }),
        Q = (e, t, n, a) => ({
          type: _,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        j = ({ actionListId: e, isPlaying: t }) => ({
          type: L,
          payload: { actionListId: e, isPlaying: t },
        }),
        H = ({ width: e, mediaQueries: t }) => ({
          type: h,
          payload: { width: e, mediaQueries: t },
        }),
        z = () => ({ type: N });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return l;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return u;
          },
          store: function () {
            return f;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = n(9516),
        c = (a = n(7243)) && a.__esModule ? a : { default: a },
        s = n(1970),
        l = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(3946));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      let f = (0, r.createStore)(c.default);
      function u(e) {
        e() && (0, s.observeRequests)(f);
      }
      function p(e) {
        (E(), (0, s.startEngine)({ store: f, rawData: e, allowEvents: !0 }));
      }
      function E() {
        (0, s.stopEngine)(f);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return g;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return _;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return T;
        },
        getRefType: function () {
          return L;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return y;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return I;
        },
        queryDocument: function () {
          return m;
        },
        setStyle: function () {
          return u;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        r = n(7087),
        { ELEMENT_MATCHES: c } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: s,
          HTML_ELEMENT: l,
          PLAIN_OBJECT: d,
          WF_PAGE: f,
        } = r.IX2EngineConstants;
      function u(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
            ? e.style[t]
            : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function I(e) {
        return (t) => t[c](e);
      }
      function T({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(s)) {
            let n = e.split(s),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(f)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function y(e) {
        return null == e || e === document.documentElement.getAttribute(f)
          ? document
          : null;
      }
      function m(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e),
        );
      }
      function g(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            (-1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling));
        }
        return t;
      }
      let _ = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[c] && n[c](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function L(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? l
            : d
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return eu;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = m(n(9777)),
        r = m(n(4738)),
        c = m(n(4659)),
        s = m(n(3452)),
        l = m(n(6633)),
        d = m(n(3729)),
        f = m(n(2397)),
        u = m(n(5082)),
        p = n(7087),
        E = n(9468),
        I = n(3946),
        T = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = g(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(5012)),
        y = m(n(8955));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function g(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (g = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: _,
          HTML_ELEMENT: L,
          RENDER_GENERAL: h,
          W_MOD_IX: N,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: R,
          getElementId: S,
          getDestinationValues: C,
          observeStore: M,
          getInstanceId: A,
          renderHTMLElement: w,
          clearAllStyles: F,
          getMaxDurationItemIndex: B,
          getComputedStyle: k,
          getInstanceOrigin: V,
          reduceListToGroup: P,
          shouldNamespaceEventParameter: U,
          getNamespacedParameterId: x,
          shouldAllowMediaQuery: D,
          cleanupHTMLElement: G,
          clearObjectCache: W,
          stringifyTarget: X,
          mediaQueriesEqual: Q,
          shallowEqual: j,
        } = E.IX2VanillaUtils,
        {
          isPluginType: H,
          createPluginInstance: z,
          getPluginDuration: Y,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        (M({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          M({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          M({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          M({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en }));
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          (ea({ store: n, rawData: e, allowEvents: !0 }), J());
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: c,
            testManual: s,
            verbose: l = !0,
          } = e,
          { rawData: d } = e;
        if (a && i && d && c) {
          let e = d.actionLists[a];
          e && (d = P({ actionList: e, actionItemId: i, rawData: d }));
        }
        if (
          (ea({ store: t, rawData: d, allowEvents: r, testManual: s }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          (ep({ store: t, actionListId: a }),
            ef({ store: t, actionListId: a, eventId: o }));
          let e = eE({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: c,
            verbose: l,
          });
          l &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !c,
              }),
            );
        }
      }
      function et({ actionListId: e }, t) {
        (e ? ep({ store: t, actionListId: e }) : eu({ store: t }), ei(t));
      }
      function en(e, t) {
        (ei(t), F({ store: t, elementApi: T }));
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(_),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            }),
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              (ec(e),
                (0, f.default)(n, (t, n) => {
                  let a = y.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`,
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          r = T.getQuerySelector(o);
                        t[r] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[r] = !0),
                            (n +=
                              r +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        ((e.textContent = n), document.body.appendChild(e));
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: s } = t.getState(),
                      { actionLists: l } = s,
                      d = es(n, ed);
                    if (!(0, c.default)(d)) return;
                    (0, f.default)(d, (e, a) => {
                      let i = n[a],
                        {
                          action: c,
                          id: d,
                          mediaQueries: f = s.mediaQueryKeys,
                        } = i,
                        { actionListId: u } = c.config;
                      (Q(f, s.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, r.default)(
                                l,
                                `${u}.continuousParameterGroups`,
                                [],
                              ),
                              c = (0, o.default)(i, ({ id: e }) => e === a),
                              s = (n.smoothing || 0) / 100,
                              f = (n.restingState || 0) / 100;
                            c &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: c,
                                  smoothing: s,
                                  restingValue: l,
                                }) {
                                  let { ixData: d, ixSession: f } =
                                      e.getState(),
                                    { events: u } = d,
                                    E = u[a],
                                    { eventTypeId: I } = E,
                                    y = {},
                                    m = {},
                                    g = [],
                                    { continuousActionGroups: b } = c,
                                    { id: O } = c;
                                  U(I, i) && (O = x(t, O));
                                  let L =
                                    f.hasBoundaryNodes && n
                                      ? T.getClosestElement(n, _)
                                      : null;
                                  (b.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? L : null,
                                        r = X(i) + v + a;
                                      if (
                                        ((m[r] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0),
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(m[r], t, e)),
                                        !y[r])
                                      ) {
                                        y[r] = !0;
                                        let { config: t } = e;
                                        R({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: T,
                                        }).forEach((e) => {
                                          g.push({ element: e, key: r });
                                        });
                                      }
                                    });
                                  }),
                                    g.forEach(({ element: t, key: n }) => {
                                      let i = m[n],
                                        c = (0, r.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {},
                                        ),
                                        { actionTypeId: d } = c,
                                        f = (
                                          d === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                c.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : H(d)
                                        )
                                          ? z(d)?.(t, c)
                                          : null,
                                        u = C(
                                          {
                                            element: t,
                                            actionItem: c,
                                            elementApi: T,
                                          },
                                          f,
                                        );
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: c,
                                        destination: u,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: s,
                                        restingValue: l,
                                        pluginInstance: f,
                                      });
                                    }));
                                })({
                                  store: t,
                                  eventStateKey: d + v + a,
                                  eventTarget: e,
                                  eventId: d,
                                  eventConfig: n,
                                  actionListId: u,
                                  parameterGroup: c,
                                  smoothing: s,
                                  restingValue: f,
                                });
                              });
                          }),
                        (c.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(c.actionTypeId)) &&
                          ef({ store: t, actionListId: u, eventId: d }));
                    });
                    let E = (e) => {
                        let { ixSession: a } = t.getState();
                        el(d, (o, r, c) => {
                          let l = n[r],
                            d = a.eventState[c],
                            { action: f, mediaQueries: u = s.mediaQueryKeys } =
                              l;
                          if (!D(u, a.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: l,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: c,
                              },
                              d,
                            );
                            j(a, d) ||
                              t.dispatch((0, I.eventStateChanged)(c, a));
                          };
                          f.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(l.config)
                                ? l.config
                                : [l.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      y = (0, u.default)(E, 12),
                      m = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? y : E;
                            (e.addEventListener(n, i),
                              t.dispatch((0, I.eventListenerAdded)(e, [n, i])));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(m)
                      : "string" == typeof a && m(e);
                  })({ logic: a, store: e, events: t });
                }));
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    ec(e);
                  };
                  (er.forEach((n) => {
                    (window.addEventListener(n, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [n, t])));
                  }),
                    t());
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(N) && (e.className += ` ${N}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              M({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  (ei(e),
                    F({ store: e, elementApi: T }),
                    ea({ store: e, allowEvents: !0 }),
                    J());
                },
              }));
          (e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(a, o)), t)) {
                    let t = M({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        (n(e), t());
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a));
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          (n.forEach(eo), W(), e.dispatch((0, I.sessionStopped)()));
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let er = ["resize", "orientationchange"];
      function ec(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, I.viewportWidthChanged)({ width: a, mediaQueries: t }),
          );
        }
      }
      let es = (e, t) => (0, s.default)((0, d.default)(e, t), l.default),
        el = (e, t) => {
          (0, f.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a);
            });
          });
        },
        ed = (e) =>
          R({
            config: { target: e.target, targets: e.targets },
            elementApi: T,
          });
      function ef({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: c } = a,
          s = c[n],
          l = o[t];
        if (l && l.useFirstGroupAsInitialState) {
          let o = (0, r.default)(l, "actionItemGroups[0].actionItems", []);
          if (
            !D(
              (0, r.default)(s, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey,
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = R({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: s.target, targets: s.targets }
                    : i,
                event: s,
                elementApi: T,
              }),
              c = H(o);
            r.forEach((i) => {
              let r = c ? z(o)?.(i, a) : null;
              eI({
                destination: C({ element: i, actionItem: a, elementApi: T }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function eu({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, f.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            (eT(t, e),
              a &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: c } = e.getState(),
          s = c.hasBoundaryNodes && n ? T.getClosestElement(n, _) : null;
        (0, f.default)(o, (n) => {
          let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
            c = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && c) {
            if (s && o && !T.elementContains(s, n.element)) return;
            (eT(n, e),
              n.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  }),
                ));
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: c,
        verbose: s,
      }) {
        let { ixData: l, ixSession: d } = e.getState(),
          { events: f } = l,
          u = f[t] || {},
          { mediaQueries: p = l.mediaQueryKeys } = u,
          { actionItemGroups: E, useFirstGroupAsInitialState: I } = (0,
          r.default)(l, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        (o >= E.length && (0, r.default)(u, "config.loop") && (o = 0),
          0 === o && I && o++);
        let y =
            (0 === o || (1 === o && I)) && O(u.action?.actionTypeId)
              ? u.config.delay
              : void 0,
          m = (0, r.default)(E, [o, "actionItems"], []);
        if (!m.length || !D(p, d.mediaQueryKey)) return !1;
        let g = d.hasBoundaryNodes && n ? T.getClosestElement(n, _) : null,
          b = B(m),
          v = !1;
        return (
          m.forEach((r, l) => {
            let { config: d, actionTypeId: f } = r,
              p = H(f),
              { target: E } = d;
            E &&
              R({
                config: d,
                event: u,
                eventTarget: n,
                elementRoot: E.boundaryMode ? g : null,
                elementApi: T,
              }).forEach((d, u) => {
                let E = p ? z(f)?.(d, r) : null,
                  I = p ? Y(f)(d, r) : null;
                v = !0;
                let m = k({ element: d, actionItem: r }),
                  g = C({ element: d, actionItem: r, elementApi: T }, E);
                eI({
                  store: e,
                  element: d,
                  actionItem: r,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: b === l && 0 === u,
                  computedStyle: m,
                  destination: g,
                  immediate: c,
                  verbose: s,
                  pluginInstance: E,
                  pluginDuration: I,
                  instanceDelay: y,
                });
              });
          }),
          v
        );
      }
      function eI(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: c,
            pluginInstance: s,
            continuous: l,
            restingValue: d,
            eventId: f,
          } = i,
          u = A(),
          { ixElements: E, ixSession: y, ixData: m } = n.getState(),
          g = S(E, o),
          { refState: b } = E[g] || {},
          O = T.getRefType(o),
          v = y.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
        if (v && l)
          switch (m.events[f]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = d;
              break;
            default:
              t = 0.5;
          }
        let _ = V(o, b, a, r, T, s);
        if (
          (n.dispatch(
            (0, I.instanceAdded)({
              instanceId: u,
              elementId: g,
              origin: _,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            }),
          ),
          ey(document.body, "ix2-animation-started", u),
          c)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            (e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), n)));
            let { ixInstances: a } = e.getState();
            em(a[t], e);
          })(n, u);
        (M({ store: n, select: ({ ixInstances: e }) => e[u], onChange: em }),
          l || n.dispatch((0, I.instanceStarted)(u, y.tick)));
      }
      function eT(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        (r === L && G(o, a, T), t.dispatch((0, I.instanceRemoved)(e.id)));
      }
      function ey(e, t, n) {
        let a = document.createEvent("CustomEvent");
        (a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a));
      }
      function em(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: c,
            renderType: s,
            current: l,
            groupIndex: d,
            eventId: f,
            eventTarget: u,
            eventStateKey: p,
            actionListId: E,
            isCarrier: y,
            styleProp: m,
            verbose: g,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: _ } = O,
          { mediaQueries: N = O.mediaQueryKeys } = _ && _[f] ? _[f] : {};
        if (D(N, v.mediaQueryKey) && (a || n || i)) {
          if (l || (s === h && i)) {
            t.dispatch((0, I.elementStateChanged)(o, c, l, r));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              d = i && i[c];
            (a === L || H(c)) && w(n, i, d, f, r, m, T, s, b);
          }
          if (i) {
            if (y) {
              let e = eE({
                store: t,
                eventId: f,
                eventTarget: u,
                eventStateKey: p,
                actionListId: E,
                groupIndex: d + 1,
                verbose: g,
              });
              g &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  }),
                );
            }
            eT(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        }));
      let i = f(n(5801)),
        o = f(n(4738)),
        r = f(n(3789)),
        c = n(7087),
        s = n(1970),
        l = n(3946),
        d = n(9468);
      function f(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: u,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: I,
          MOUSE_OVER: T,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: m,
          DROPDOWN_OPEN: g,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: _,
          NAVBAR_CLOSE: L,
          NAVBAR_OPEN: h,
          MOUSE_MOVE: N,
          PAGE_SCROLL_DOWN: R,
          SCROLL_INTO_VIEW: S,
          SCROLL_OUT_OF_VIEW: C,
          PAGE_SCROLL_UP: M,
          SCROLLING_IN_VIEW: A,
          PAGE_FINISH: w,
          ECOMMERCE_CART_CLOSE: F,
          ECOMMERCE_CART_OPEN: B,
          PAGE_START: k,
          PAGE_SCROLL: V,
        } = c.EventTypeConsts,
        P = "COMPONENT_ACTIVE",
        U = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: x } = c.IX2EngineConstants,
        { getNamespacedParameterId: D } = d.IX2VanillaUtils,
        G = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        W = G(({ element: e, nativeEvent: t }) => e === t.target),
        X = G(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        Q = (0, i.default)([W, X]),
        j = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        H = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!j(e, a);
        },
        z = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: r, id: c } = t,
            { actionListId: l, autoStopEventId: d } = r.config,
            f = j(e, d);
          return (
            f &&
              (0, s.stopActionGroup)({
                store: e,
                eventId: d,
                eventTarget: n,
                eventStateKey: d + x + a.split(x)[1],
                actionListId: (0, o.default)(f, "action.config.actionListId"),
              }),
            (0, s.stopActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: l,
            }),
            (0, s.startActionGroup)({
              store: e,
              eventId: c,
              eventTarget: n,
              eventStateKey: a,
              actionListId: l,
            }),
            i
          );
        },
        Y = (e, t) => (n, a) => (!0 === e(n, a) ? t(n, a) : a),
        $ = { handler: Y(Q, z) },
        q = { ...$, types: [P, U].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: k, PAGE_FINISH: w },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight,
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return "mouseout" === n && !!o && !!r;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: a,
            bottom: i - r,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [P, U].indexOf(a) ? a === P : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        er = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        ec =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: r, innerHeight: c } = et(),
              {
                event: { config: s, eventTypeId: l },
              } = t,
              { scrollOffsetValue: d, scrollOffsetUnit: f } = s,
              u = r - c,
              p = Number((o / u).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === f ? d : (c * (d || 0)) / 100) / u,
              I = 0;
            n &&
              ((a = p > n.percentTop),
              (I = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let T = l === R ? p >= I + E : p <= I - E,
              y = {
                ...n,
                percentTop: p,
                inBounds: T,
                anchorTop: I,
                scrollingDown: a,
              };
            return (n && T && (i || y.inBounds !== n.inBounds) && e(t, y)) || y;
          },
        es = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        el =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        ed = (e = !0) => ({
          ...q,
          handler: Y(
            e ? Q : W,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t)),
          ),
        }),
        ef = (e = !0) => ({
          ...q,
          handler: Y(
            e ? Q : W,
            eo((e, t) => (t.isActive ? t : $.handler(e, t))),
          ),
        }),
        eu = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: r } = o;
              return !r[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === S) === n
                  ? (z(e), { ...t, triggered: !0 })
                  : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: ed(),
          [O]: ef(),
          [g]: ed(),
          [m]: ef(),
          [h]: ed(!1),
          [L]: ef(!1),
          [v]: ed(),
          [_]: ef(),
          [B]: { types: "ecommerce-cart-open", handler: Y(Q, z) },
          [F]: { types: "ecommerce-cart-close", handler: Y(Q, z) },
          [u]: {
            types: "click",
            handler: Y(
              Q,
              el((e, { clickCount: t }) => {
                H(e) ? 1 === t && z(e) : z(e);
              }),
            ),
          },
          [p]: {
            types: "click",
            handler: Y(
              Q,
              el((e, { clickCount: t }) => {
                2 === t && z(e);
              }),
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [I]: { ...$, types: "mouseup" },
          [T]: {
            types: Z,
            handler: Y(
              Q,
              er((e, t) => {
                t.elementHovered && z(e);
              }),
            ),
          },
          [y]: {
            types: Z,
            handler: Y(
              Q,
              er((e, t) => {
                t.elementHovered || z(e);
              }),
            ),
          },
          [N]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: s,
                  continuousParameterGroupId: d,
                  reverse: f,
                  restingState: u = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: E = o.clientY,
                  pageX: I = o.pageX,
                  pageY: T = o.pageY,
                } = a,
                y = "X_AXIS" === s,
                m = "mouseout" === a.type,
                g = u / 100,
                b = d,
                O = !1;
              switch (r) {
                case c.EventBasedOn.VIEWPORT:
                  g = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case c.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  g = y ? Math.min(e + I, n) / n : Math.min(t + T, a) / a;
                  break;
                }
                case c.EventBasedOn.ELEMENT:
                default: {
                  b = D(i, d);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== Q({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: c, height: s } = n;
                  if (!e && !es({ left: p, top: E }, n)) break;
                  ((O = !0), (g = y ? (p - o) / c : (E - r) / s));
                }
              }
              return (
                m && (g > 0.95 || g < 0.05) && (g = Math.round(g)),
                (r !== c.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((g = f ? 1 - g : g),
                  e.dispatch((0, l.parameterChanged)(b, g))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: I,
                  pageY: T,
                }
              );
            },
          },
          [V]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                c = i / (o - r);
              ((c = a ? 1 - c : c), e.dispatch((0, l.parameterChanged)(n, c)));
            },
          },
          [A]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 },
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: s,
                  scrollHeight: d,
                  clientHeight: f,
                } = et(),
                {
                  basedOn: u,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: I,
                  startsExiting: T,
                  addEndOffset: y,
                  addStartOffset: m,
                  addOffsetValue: g = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (u === c.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / s : r / d;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, l.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = D(a, E),
                  o = e.getBoundingClientRect(),
                  r = (m ? g : 0) / 100,
                  c = (y ? b : 0) / 100;
                ((r = I ? r : 1 - r), (c = T ? c : 1 - c));
                let s = o.top + Math.min(o.height * r, f),
                  u = Math.min(f + (o.top + o.height * c - s), d),
                  p = Math.min(Math.max(0, f - s), u) / u;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, l.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [S]: eu,
          [C]: eu,
          [R]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown && z(e);
            }),
          },
          [M]: {
            ...J,
            handler: ec((e, t) => {
              t.scrollingDown || z(e);
            }),
          },
          [w]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(W, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return (n.finished && !(t && t.finshed) && z(e), n);
            }),
          },
          [k]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(W, (e, t) => (t || z(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        }));
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: c,
          IX2_INSTANCE_ADDED: s,
          IX2_INSTANCE_STARTED: l,
          IX2_INSTANCE_REMOVED: d,
          IX2_ANIMATION_FRAME_CHANGED: f,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: u,
          applyEasing: p,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = a.IX2EngineConstants,
        {
          getItemConfigByKey: T,
          getRenderType: y,
          getStyleProp: m,
        } = i.IX2VanillaUtils,
        g = (e, t) => {
          let n,
            a,
            i,
            r,
            {
              position: c,
              parameterId: s,
              actionGroups: l,
              destinationKeys: d,
              smoothing: f,
              restingValue: E,
              actionTypeId: I,
              customEasingFn: y,
              skipMotion: m,
              skipToValue: g,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - f, 0.01),
            v = b[s];
          null == v && ((O = 1), (v = E));
          let _ = u((Math.max(v, 0) || 0) - c),
            L = m ? g : u(c + _ * O),
            h = 100 * L;
          if (L === c && e.current) return e;
          for (let e = 0, { length: t } = l; e < t; e++) {
            let { keyframe: t, actionItems: o } = l[e];
            if ((0 === e && (n = o[0]), h >= t)) {
              n = o[0];
              let c = l[e + 1],
                s = c && h !== t;
              ((a = s ? c.actionItems[0] : null),
                s && ((i = t / 100), (r = (c.keyframe - t) / 100)));
            }
          }
          let N = {};
          if (n && !a)
            for (let e = 0, { length: t } = d; e < t; e++) {
              let t = d[e];
              N[t] = T(I, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (L - i) / r,
              t = p(n.config.easing, e, y);
            for (let e = 0, { length: i } = d; e < i; e++) {
              let i = d[e],
                o = T(I, i, n.config),
                r = (T(I, i, a.config) - o) * t + o;
              N[i] = r;
            }
          }
          return (0, o.merge)(e, { position: L, current: N });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: c,
              verbose: s,
              actionItem: l,
              destination: d,
              destinationKeys: f,
              pluginDuration: E,
              instanceDelay: T,
              customEasingFn: y,
              skipMotion: m,
            } = e,
            g = l.config.easing,
            { duration: b, delay: O } = l.config;
          (null != E && (b = E),
            (O = null != T ? T : O),
            c === I ? (b = 0) : (r || m) && (b = O = 0));
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (s) {
              let t = b + O,
                n = u(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = u(Math.min(Math.max(0, t / b), 1)),
              r = p(g, n, y),
              c = {},
              l = null;
            return (
              f.length &&
                (l = f.reduce((e, t) => {
                  let n = d[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return ((e[t] = o * r + i), e);
                }, {})),
              (c.current = l),
              (c.position = n),
              1 === n && ((c.active = !1), (c.complete = !0)),
              (0, o.merge)(e, c)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case c:
              return Object.freeze({});
            case s: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: c,
                  eventStateKey: s,
                  actionListId: l,
                  groupIndex: d,
                  isCarrier: f,
                  origin: u,
                  destination: p,
                  immediate: I,
                  verbose: T,
                  continuous: g,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: _,
                  pluginInstance: L,
                  pluginDuration: h,
                  instanceDelay: N,
                  skipMotion: R,
                  skipToValue: S,
                } = t.payload,
                { actionTypeId: C } = i,
                M = y(C),
                A = m(M, C),
                w = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e],
                ),
                { easing: F } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: u,
                destination: p,
                destinationKeys: w,
                immediate: I,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: C,
                eventId: r,
                eventTarget: c,
                eventStateKey: s,
                actionListId: l,
                groupIndex: d,
                renderType: M,
                isCarrier: f,
                styleProp: A,
                continuous: g,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: _,
                pluginInstance: L,
                pluginDuration: h,
                instanceDelay: N,
                skipMotion: R,
                skipToValue: S,
                customEasingFn:
                  Array.isArray(F) && 4 === F.length ? E(F) : void 0,
              });
            }
            case l: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case d: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case f: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  c = e[i],
                  s = c.continuous ? g : b;
                n = (0, o.set)(n, i, s(c, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return ((e[n] = a), e);
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return f;
          },
        }));
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        c = n(9468),
        s = n(7718),
        l = n(1540),
        { ixElements: d } = c.IX2ElementsReducer,
        f = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: d,
          ixInstances: s.ixInstances,
          ixParameters: l.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return f;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: c,
          IX2_CLEAR_REQUESTED: s,
        } = a.IX2EngineActionTypes,
        l = { preview: {}, playback: {}, stop: {}, clear: {} },
        d = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [c]: { value: "stop" },
          [s]: { value: "clear" },
        }),
        f = (e = l, t) => {
          if (t.type in d) {
            let n = [d[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return T;
          },
        }));
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: c,
          IX2_SESSION_STOPPED: s,
          IX2_EVENT_LISTENER_ADDED: l,
          IX2_EVENT_STATE_CHANGED: d,
          IX2_ANIMATION_FRAME_CHANGED: f,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: u,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = a.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        T = (e = I, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case c: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case s:
              return I;
            case f: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case l: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case d: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case u: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return d;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return l;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        r = (e) => e || { value: 0 },
        c = (e) => ({ value: e.value }),
        s = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return (n.stop(), n.setSubframe(!0), n);
        },
        l = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        d = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        c = () => window.Webflow.require("rive"),
        s = (e, t) => e.value.inputs[t],
        l = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        f = (e) => e.value.inputs ?? {},
        u = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = c();
          if (!a) return;
          let r = a.getInstance(e),
            s = a.rive.StateMachineInputType,
            { name: l, inputs: d = {} } = n.config.value || {};
          function f(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                (n(), e?.off("load", t));
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(l);
              if (null != n) {
                if ((e.isPlaying || e.play(l, !1), i in d || o in d)) {
                  let t = e.layout,
                    n = d[i] ?? t.fit,
                    a = d[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in d) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case s.Boolean:
                        null != d[e] && (a.value = !!d[e]);
                        break;
                      case s.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case s.Trigger:
                        d[e] && a.fire();
                    }
                }
              }
            }
          }
          r?.rive ? f(r.rive) : a.setLoadHandler(e, f);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return u;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        r = (e, t) => e.filter((e) => !t.includes(e)),
        c = (e, t) => e.value[t],
        s = () => null,
        l = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        d = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = r(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = l[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = l[t]), e), {});
        },
        f = (e) => e.value,
        u = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            r = n.config.target.objectId,
            c = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              (null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ));
            };
          i ? c(i.spline) : a.setLoadHandler(e, c);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return u;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        r = (e, t) => e.value[t],
        c = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
              ? { size: parseFloat(i) }
              : null != n.red && null != n.green && null != n.blue
                ? (0, o.normalizeColor)(i)
                : void 0;
        },
        l = (e) => e.value,
        d = () => null,
        f = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        u = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(f).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let a = n(7087),
        i = l(n(7377)),
        o = l(n(2866)),
        r = l(n(2570)),
        c = l(n(1407));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
      let d = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...c }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return f;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return g;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return u;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return T;
        },
        IX2_INSTANCE_REMOVED: function () {
          return m;
        },
        IX2_INSTANCE_STARTED: function () {
          return y;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return I;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return l;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return s;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return r;
        },
        IX2_SESSION_STOPPED: function () {
          return c;
        },
        IX2_STOP_REQUESTED: function () {
          return d;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return _;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        r = "IX2_SESSION_STARTED",
        c = "IX2_SESSION_STOPPED",
        s = "IX2_PREVIEW_REQUESTED",
        l = "IX2_PLAYBACK_REQUESTED",
        d = "IX2_STOP_REQUESTED",
        f = "IX2_CLEAR_REQUESTED",
        u = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        T = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        m = "IX2_INSTANCE_REMOVED",
        g = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        _ = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return Q;
        },
        BACKGROUND: function () {
          return U;
        },
        BACKGROUND_COLOR: function () {
          return P;
        },
        BAR_DELIMITER: function () {
          return z;
        },
        BORDER_COLOR: function () {
          return x;
        },
        BOUNDARY_SELECTOR: function () {
          return s;
        },
        CHILDREN: function () {
          return Y;
        },
        COLON_DELIMITER: function () {
          return H;
        },
        COLOR: function () {
          return D;
        },
        COMMA_DELIMITER: function () {
          return j;
        },
        CONFIG_UNIT: function () {
          return T;
        },
        CONFIG_VALUE: function () {
          return u;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return l;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return d;
        },
        CONFIG_Z_UNIT: function () {
          return I;
        },
        CONFIG_Z_VALUE: function () {
          return f;
        },
        DISPLAY: function () {
          return G;
        },
        FILTER: function () {
          return F;
        },
        FLEX: function () {
          return W;
        },
        FONT_VARIATION_SETTINGS: function () {
          return B;
        },
        HEIGHT: function () {
          return V;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return w;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return N;
        },
        ROTATE_Y: function () {
          return R;
        },
        ROTATE_Z: function () {
          return S;
        },
        SCALE_3D: function () {
          return h;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return _;
        },
        SCALE_Z: function () {
          return L;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return C;
        },
        SKEW_X: function () {
          return M;
        },
        SKEW_Y: function () {
          return A;
        },
        TRANSFORM: function () {
          return y;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return m;
        },
        TRANSLATE_Y: function () {
          return g;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return k;
        },
        WILL_CHANGE: function () {
          return X;
        },
        W_MOD_IX: function () {
          return c;
        },
        W_MOD_JS: function () {
          return r;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "data-wf-page",
        r = "w-mod-js",
        c = "w-mod-ix",
        s = ".w-dyn-item",
        l = "xValue",
        d = "yValue",
        f = "zValue",
        u = "value",
        p = "xUnit",
        E = "yUnit",
        I = "zUnit",
        T = "unit",
        y = "transform",
        m = "translateX",
        g = "translateY",
        b = "translateZ",
        O = "translate3d",
        v = "scaleX",
        _ = "scaleY",
        L = "scaleZ",
        h = "scale3d",
        N = "rotateX",
        R = "rotateY",
        S = "rotateZ",
        C = "skew",
        M = "skewX",
        A = "skewY",
        w = "opacity",
        F = "filter",
        B = "font-variation-settings",
        k = "width",
        V = "height",
        P = "backgroundColor",
        U = "background",
        x = "borderColor",
        D = "color",
        G = "display",
        W = "flex",
        X = "willChange",
        Q = "AUTO",
        j = ",",
        H = ":",
        z = "|",
        Y = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return r.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return c;
        },
        IX2EngineConstants: function () {
          return s;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = l(n(1833), t),
        r = l(n(262), t);
      (l(n(8704), t), l(n(3213), t));
      let c = f(n(8023)),
        s = f(n(2686));
      function l(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    3213: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return d;
          },
        }));
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: c,
          STYLE_FILTER: s,
          STYLE_FONT_VARIATION: l,
        } = n(262).ActionTypeConsts,
        d = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [c]: !0, [s]: !0, [l]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return r;
        },
        EventContinuousMouseAxes: function () {
          return c;
        },
        EventLimitAffectedElements: function () {
          return s;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return d;
        },
        QuickEffectIds: function () {
          return l;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        c = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        s = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        l = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        d = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          c = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (c.startsWith("#")) {
          let e = c.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (c.startsWith("rgba")) {
          let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3])));
        } else if (c.startsWith("rgb")) {
          let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
          ((t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)));
        } else if (c.startsWith("hsla")) {
          let e,
            n,
            r,
            s = c.match(/hsla\(([^)]+)\)/)[1].split(","),
            l = parseFloat(s[0]),
            d = parseFloat(s[1].replace("%", "")) / 100,
            f = parseFloat(s[2].replace("%", "")) / 100;
          o = parseFloat(s[3]);
          let u = (1 - Math.abs(2 * f - 1)) * d,
            p = u * (1 - Math.abs(((l / 60) % 2) - 1)),
            E = f - u / 2;
          (l >= 0 && l < 60
            ? ((e = u), (n = p), (r = 0))
            : l >= 60 && l < 120
              ? ((e = p), (n = u), (r = 0))
              : l >= 120 && l < 180
                ? ((e = 0), (n = u), (r = p))
                : l >= 180 && l < 240
                  ? ((e = 0), (n = p), (r = u))
                  : l >= 240 && l < 300
                    ? ((e = p), (n = 0), (r = u))
                    : ((e = u), (n = 0), (r = p)),
            (t = Math.round((e + E) * 255)),
            (a = Math.round((n + E) * 255)),
            (i = Math.round((r + E) * 255)));
        } else if (c.startsWith("hsl")) {
          let e,
            n,
            o,
            r = c.match(/hsl\(([^)]+)\)/)[1].split(","),
            s = parseFloat(r[0]),
            l = parseFloat(r[1].replace("%", "")) / 100,
            d = parseFloat(r[2].replace("%", "")) / 100,
            f = (1 - Math.abs(2 * d - 1)) * l,
            u = f * (1 - Math.abs(((s / 60) % 2) - 1)),
            p = d - f / 2;
          (s >= 0 && s < 60
            ? ((e = f), (n = u), (o = 0))
            : s >= 60 && s < 120
              ? ((e = u), (n = f), (o = 0))
              : s >= 120 && s < 180
                ? ((e = 0), (n = f), (o = u))
                : s >= 180 && s < 240
                  ? ((e = 0), (n = u), (o = f))
                  : s >= 240 && s < 300
                    ? ((e = u), (n = 0), (o = f))
                    : ((e = f), (n = 0), (o = u)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255)));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`,
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return c;
        },
        IX2Easings: function () {
          return r;
        },
        IX2ElementsReducer: function () {
          return s;
        },
        IX2VanillaPlugins: function () {
          return l;
        },
        IX2VanillaUtils: function () {
          return d;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = u(n(2662)),
        r = u(n(8686)),
        c = u(n(3767)),
        s = u(n(5861)),
        l = u(n(1799)),
        d = u(n(4124));
      function f(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (f = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = f(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return ((a.default = e), n && n.set(e, a), a);
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return l;
          },
          FLEX_PREFIXED: function () {
            return d;
          },
          IS_BROWSER_ENV: function () {
            return c;
          },
          TRANSFORM_PREFIXED: function () {
            return f;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return s;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(9777)) && a.__esModule ? a : { default: a },
        c = "undefined" != typeof window,
        s = (e, t) => (c ? e() : t),
        l = s(() =>
          (0, r.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype,
          ),
        ),
        d = s(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        f = s(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        u = f.split("transform")[0],
        p = u ? u + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return f;
          },
          createBezierEasing: function () {
            return d;
          },
          optimizeFloat: function () {
            return l;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return ((a.default = e), n && n.set(e, a), a);
        })(n(8686)),
        c = (a = n(1361)) && a.__esModule ? a : { default: a };
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function l(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function d(e) {
        return (0, c.default)(...e);
      }
      function f(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
            ? 1
            : n
              ? l(t > 0 ? n(t) : t)
              : l(t > 0 && e && r[e] ? r[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return W;
          },
          bouncePast: function () {
            return X;
          },
          ease: function () {
            return c;
          },
          easeIn: function () {
            return s;
          },
          easeInOut: function () {
            return d;
          },
          easeOut: function () {
            return l;
          },
          inBack: function () {
            return F;
          },
          inCirc: function () {
            return C;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return V;
          },
          inExpo: function () {
            return N;
          },
          inOutBack: function () {
            return k;
          },
          inOutCirc: function () {
            return A;
          },
          inOutCubic: function () {
            return T;
          },
          inOutElastic: function () {
            return U;
          },
          inOutExpo: function () {
            return S;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return g;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return h;
          },
          inQuad: function () {
            return f;
          },
          inQuart: function () {
            return y;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return _;
          },
          outBack: function () {
            return B;
          },
          outBounce: function () {
            return w;
          },
          outCirc: function () {
            return M;
          },
          outCubic: function () {
            return I;
          },
          outElastic: function () {
            return P;
          },
          outExpo: function () {
            return R;
          },
          outQuad: function () {
            return u;
          },
          outQuart: function () {
            return m;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return L;
          },
          swingFrom: function () {
            return D;
          },
          swingFromTo: function () {
            return x;
          },
          swingTo: function () {
            return G;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(1361)) && a.__esModule ? a : { default: a },
        c = (0, r.default)(0.25, 0.1, 0.25, 1),
        s = (0, r.default)(0.42, 0, 1, 1),
        l = (0, r.default)(0, 0, 0.58, 1),
        d = (0, r.default)(0.42, 0, 0.58, 1);
      function f(e) {
        return Math.pow(e, 2);
      }
      function u(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function I(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function y(e) {
        return Math.pow(e, 4);
      }
      function m(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function g(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function _(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function L(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function h(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function N(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function R(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function S(e) {
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function C(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function M(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function A(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function w(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function k(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              -(
                a *
                Math.pow(2, 10 * (e -= 1)) *
                Math.sin((2 * Math.PI * (e - t)) / n)
              ));
      }
      function P(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
            ? 1
            : (n || (n = 0.3),
              a < 1
                ? ((a = 1), (t = n / 4))
                : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
              a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
                1);
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
            ? 1
            : (n || (n = 0.3 * 1.5),
                a < 1
                  ? ((a = 1), (t = n / 4))
                  : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
                e < 1)
              ? -0.5 *
                (a *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n))
              : a *
                  Math.pow(2, -10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e - t)) / n) *
                  0.5 +
                1;
      }
      function x(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function D(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function G(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function W(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
            : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
            ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
            : e < 2.5 / 2.75
              ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
              : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return f;
        },
        getPluginOrigin: function () {
          return d;
        },
        isPluginType: function () {
          return c;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        r = n(3690);
      function c(e) {
        return r.pluginMethodMap.has(e);
      }
      let s = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = r.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        l = s("getPluginConfig"),
        d = s("getPluginOrigin"),
        f = s("getPluginDuration"),
        u = s("getPluginDestination"),
        p = s("createPluginInstance"),
        E = s("renderPlugin"),
        I = s("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return ej;
        },
        clearAllStyles: function () {
          return eW;
        },
        clearObjectCache: function () {
          return ef;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eC;
        },
        getElementId: function () {
          return eI;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eh;
        },
        getItemConfigByKey: function () {
          return eS;
        },
        getMaxDurationItemIndex: function () {
          return eY;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eM;
        },
        getStyleProp: function () {
          return eA;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return em;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eT;
        },
        renderHTMLElement: function () {
          return ew;
        },
        shallowEqual: function () {
          return d.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = I(n(4075)),
        r = I(n(1455)),
        c = I(n(5720)),
        s = n(1185),
        l = n(7087),
        d = I(n(7164)),
        f = n(3767),
        u = n(380),
        p = n(1799),
        E = n(2662);
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: T,
          TRANSFORM: y,
          TRANSLATE_3D: m,
          SCALE_3D: g,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: _,
          PRESERVE_3D: L,
          FLEX: h,
          OPACITY: N,
          FILTER: R,
          FONT_VARIATION_SETTINGS: S,
          WIDTH: C,
          HEIGHT: M,
          BACKGROUND_COLOR: A,
          BORDER_COLOR: w,
          COLOR: F,
          CHILDREN: B,
          IMMEDIATE_CHILDREN: k,
          SIBLINGS: V,
          PARENT: P,
          DISPLAY: U,
          WILL_CHANGE: x,
          AUTO: D,
          COMMA_DELIMITER: G,
          COLON_DELIMITER: W,
          BAR_DELIMITER: X,
          RENDER_TRANSFORM: Q,
          RENDER_GENERAL: j,
          RENDER_STYLE: H,
          RENDER_PLUGIN: z,
        } = l.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Y,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: er,
        } = l.ActionTypeConsts,
        ec = (e) => e.trim(),
        es = Object.freeze({ [en]: A, [ea]: w, [ei]: F }),
        el = Object.freeze({
          [E.TRANSFORM_PREFIXED]: y,
          [A]: T,
          [N]: N,
          [R]: R,
          [C]: C,
          [M]: M,
          [S]: S,
        }),
        ed = new Map();
      function ef() {
        ed.clear();
      }
      let eu = 1;
      function ep() {
        return "i" + eu++;
      }
      let eE = 1;
      function eI(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eE++;
      }
      function eT({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, r.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return (e[n] || (e[n] = {}), (e[n][t.id] = t), e);
            },
            {},
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let ey = (e, t) => e === t;
      function em({ store: e, select: t, onChange: n, comparator: a = ey }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) return void r();
            a(o, c) || n((c = o), e);
          }),
          c = t(i());
        return r;
      }
      function eg(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, c;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: s } = e;
        if (Array.isArray(s) && s.length > 0)
          return s.reduce(
            (e, o) =>
              e.concat(
                eb({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                }),
              ),
            [],
          );
        let {
            getValidDocument: d,
            getQuerySelector: f,
            queryDocument: u,
            getChildElements: p,
            getSiblingElements: I,
            matchSelector: T,
            elementContains: y,
            isSiblingNode: m,
          } = i,
          { target: g } = e;
        if (!g) return [];
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: _,
          appliesTo: L,
          useEventTarget: h,
        } = eg(g);
        if (O) return [ed.has(O) ? ed.get(O) : ed.set(O, {}).get(O)];
        if (L === l.EventAppliesTo.PAGE) {
          let e = d(b);
          return e ? [e] : [];
        }
        let N = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          R = !!(N.id || N.selector),
          S = t && f(eg(t.target));
        if (
          (R
            ? ((o = N.limitAffectedElements), (r = S), (c = f(N)))
            : (r = c = f({ id: b, selector: v, selectorGuids: _ })),
          t && h)
        ) {
          let e = n && (c || !0 === h) ? [n] : u(S);
          if (c) {
            if (h === P) return u(c).filter((t) => e.some((e) => y(t, e)));
            if (h === B) return u(c).filter((t) => e.some((e) => y(e, t)));
            if (h === V) return u(c).filter((t) => e.some((e) => m(e, t)));
          }
          return e;
        }
        return null == r || null == c
          ? []
          : E.IS_BROWSER_ENV && a
            ? u(c).filter((e) => a.contains(e))
            : o === B
              ? u(r, c)
              : o === k
                ? p(u(r)).filter(T(c))
                : o === V
                  ? I(u(r)).filter(T(c))
                  : u(c);
      }
      function eO({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eB[t.type]), e),
            e || {},
          ),
        eL = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = ek[t.type] || t.defaultValue || 0),
              e
            ),
            e || {},
          );
      function eh(e, t = {}, n = {}, a, i) {
        let { getStyle: r } = i,
          { actionTypeId: c } = a;
        if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], a);
        switch (a.actionTypeId) {
          case Y:
          case $:
          case q:
          case K:
            return t[a.actionTypeId] || eF[a.actionTypeId];
          case J:
            return e_(t[a.actionTypeId], a.config.filters);
          case ee:
            return eL(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, o.default)(parseFloat(r(e, N)), 1) };
          case et: {
            let t,
              i = r(e, C),
              c = r(e, M);
            return {
              widthValue:
                a.config.widthUnit === D
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === D
                  ? ev.test(c)
                    ? parseFloat(c)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(c), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = es[t],
                r = a(e, i),
                c = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(ex, eU.test(r) ? r : n[i]).split(G);
              return {
                rValue: (0, o.default)(parseInt(c[0], 10), 255),
                gValue: (0, o.default)(parseInt(c[1], 10), 255),
                bValue: (0, o.default)(parseInt(c[2], 10), 255),
                aValue: (0, o.default)(parseFloat(c[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case eo:
            return { value: (0, o.default)(r(e, U), n.display) };
          case er:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, c.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, c.default)(
                n.fontVariations,
                ({ type: e }) => e === t,
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eC({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Y:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: c } = t.config,
              { widthValue: s, heightValue: l } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: s, heightValue: l };
            if (r === D) {
              let t = a(e, C);
              (i(e, C, ""), (s = o(e, "offsetWidth")), i(e, C, t));
            }
            if (c === D) {
              let t = a(e, M);
              (i(e, M, ""), (l = o(e, "offsetHeight")), i(e, M, t));
            }
            return { widthValue: s, heightValue: l };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: c,
            } = t.config;
            if (c && c.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, c),
                i = (0, u.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case J:
            return t.config.filters.reduce(eN, {});
          case ee:
            return t.config.fontVariations.reduce(eR, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eM(e) {
        return /^TRANSFORM_/.test(e)
          ? Q
          : /^STYLE_/.test(e)
            ? H
            : /^GENERAL_/.test(e)
              ? j
              : /^PLUGIN_/.test(e)
                ? z
                : void 0;
      }
      function eA(e, t) {
        return e === H ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function ew(e, t, n, a, i, o, c, s, l) {
        switch (s) {
          case Q:
            var d = e,
              f = t,
              u = n,
              I = i,
              T = c;
            let y = eP
                .map((e) => {
                  let t = eF[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: r = "",
                      zUnit: c = "",
                    } = f[e] || {};
                  switch (e) {
                    case Y:
                      return `${m}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case $:
                      return `${g}(${n}${o}, ${a}${r}, ${i}${c})`;
                    case q:
                      return `${b}(${n}${o}) ${O}(${a}${r}) ${v}(${i}${c})`;
                    case K:
                      return `${_}(${n}${o}, ${a}${r})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: N } = T;
            (eD(d, E.TRANSFORM_PREFIXED, T),
              N(d, E.TRANSFORM_PREFIXED, y),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a },
              ) {
                return (
                  (e === Y && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(I, u) && N(d, E.TRANSFORM_STYLE_PREFIXED, L));
            return;
          case H:
            return (function (e, t, n, a, i, o) {
              let { setStyle: c } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: r, heightValue: s } = n;
                  (void 0 !== r &&
                    (t === D && (t = "px"), eD(e, C, o), c(e, C, r + t)),
                    void 0 !== s &&
                      (i === D && (i = "px"), eD(e, M, o), c(e, M, s + i)));
                  break;
                }
                case J:
                  var s = a.config;
                  let l = (0, r.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${eV(n, s)})`,
                      "",
                    ),
                    { setStyle: d } = o;
                  (eD(e, R, o), d(e, R, l));
                  break;
                case ee:
                  a.config;
                  let f = (0, r.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      [],
                    ).join(", "),
                    { setStyle: u } = o;
                  (eD(e, S, o), u(e, S, f));
                  break;
                case en:
                case ea:
                case ei: {
                  let t = es[a.actionTypeId],
                    i = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    s = Math.round(n.bValue),
                    l = n.aValue;
                  (eD(e, t, o),
                    c(
                      e,
                      t,
                      l >= 1
                        ? `rgb(${i},${r},${s})`
                        : `rgba(${i},${r},${s},${l})`,
                    ));
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  (eD(e, i, o), c(e, i, n.value + t));
                }
              }
            })(e, 0, n, i, o, c);
          case j:
            var A = e,
              w = i,
              F = c;
            let { setStyle: B } = F;
            if (w.actionTypeId === eo) {
              let { value: e } = w.config;
              B(A, U, e === h && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case z: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(l, t, i);
          }
        }
      }
      let eF = {
          [Y]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eB = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        ek = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        eV = (e, t) => {
          let n = (0, c.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eP = Object.keys(eF),
        eU = /^rgb/,
        ex = RegExp("rgba?\\(([^)]+)\\)");
      function eD(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = el[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, x);
        if (!r) return void o(e, x, a);
        let c = r.split(G).map(ec);
        -1 === c.indexOf(a) && o(e, x, c.concat(a).join(G));
      }
      function eG(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = el[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, x);
        r &&
          -1 !== r.indexOf(a) &&
          o(
            e,
            x,
            r
              .split(G)
              .map(ec)
              .filter((e) => e !== a)
              .join(G),
          );
      }
      function eW({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        (Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            c = i[r];
          c && eX({ actionList: c, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            eX({ actionList: i[e], elementApi: t });
          }));
      }
      function eX({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        (a &&
          a.forEach((e) => {
            eQ({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                eQ({ actionGroup: e, event: t, elementApi: n });
              });
            }));
      }
      function eQ({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          ((a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eH({ effect: ez, actionTypeId: i, elementApi: n })),
            eb({ config: o, event: t, elementApi: n }).forEach(a));
        });
      }
      function ej(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          (n.widthUnit === D && a(e, C, ""), n.heightUnit === D && a(e, M, ""));
        }
        i(e, x) && eH({ effect: eG, actionTypeId: o, elementApi: n })(e);
      }
      let eH =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case Y:
            case $:
            case q:
            case K:
              e(a, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, R, n);
              break;
            case ee:
              e(a, S, n);
              break;
            case Z:
              e(a, N, n);
              break;
            case et:
              (e(a, C, n), e(a, M, n));
              break;
            case en:
            case ea:
            case ei:
              e(a, es[t], n);
              break;
            case eo:
              e(a, U, n);
          }
        };
      function ez(e, t, n) {
        let { setStyle: a } = n;
        (eG(e, t, n),
          a(e, t, ""),
          t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, ""));
      }
      function eY(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          c = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              s = n[eY(n)],
              { config: l, actionTypeId: d } = s;
            i.id === s.id && (c = r + o);
            let f = eM(d) === j ? 0 : l.duration;
            r += l.delay + f;
          }),
          r > 0 ? (0, f.optimizeFloat)(c / r) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, s.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, s.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === l.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === l.EventBasedOn.ELEMENT || null == t)) ||
          (e === l.EventTypeConsts.MOUSE_MOVE && t === l.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + W + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, d.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + X + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + X + n + X + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return _;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return L;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        r = n(7087),
        {
          HTML_ELEMENT: c,
          PLAIN_OBJECT: s,
          ABSTRACT_NODE: l,
          CONFIG_X_VALUE: d,
          CONFIG_Y_VALUE: f,
          CONFIG_Z_VALUE: u,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: T,
          CONFIG_UNIT: y,
        } = r.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: m,
          IX2_INSTANCE_ADDED: g,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = r.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case m:
              return O;
            case g: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: r,
                  refType: c,
                } = t.payload,
                { actionTypeId: s } = r,
                l = e;
              return (
                (0, o.getIn)(l, [n, a]) !== a && (l = _(l, a, c, n, r)),
                L(l, n, s, i, r)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return L(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function _(e, t, n, a, i) {
        let r =
          n === s ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
      }
      function L(e, t, n, a, i) {
        let r = (function (e) {
          let { config: t } = e;
          return h.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return (null != o && null != r && (e[i] = r), e);
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, r);
      }
      let h = [
        [d, E],
        [f, I],
        [u, T],
        [p, y],
      ];
    },
    9363: function () {
      Webflow.require("ix2").init({
        events: {
          "e-327": {
            id: "e-327",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-328" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723bf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723bf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 150,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1882bd1624f,
          },
          "e-329": {
            id: "e-329",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-330",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bd1624f,
          },
          "e-337": {
            id: "e-337",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-338",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bd1624f,
          },
          "e-339": {
            id: "e-339",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-340" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1882bd1624f,
          },
          "e-341": {
            id: "e-341",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-342" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|d360245b-73e6-49c1-1b52-ac23199723d3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1882bd1624f,
          },
          "e-357": {
            id: "e-357",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-358",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543270",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543270",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bfbfe2a,
          },
          "e-359": {
            id: "e-359",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-360",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543273",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543273",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bfc1d68,
          },
          "e-361": {
            id: "e-361",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-362",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543276",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be543276",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bfc4289,
          },
          "e-363": {
            id: "e-363",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-364",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|55c9ac3b-97fd-0264-8863-9f987b0fa604",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|55c9ac3b-97fd-0264-8863-9f987b0fa604",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bfc63ab,
          },
          "e-365": {
            id: "e-365",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-366",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|788c60c9-4bd4-cbf4-e7e5-a125802a2312",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|788c60c9-4bd4-cbf4-e7e5-a125802a2312",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 700,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bfc88e9,
          },
          "e-367": {
            id: "e-367",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-368",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|43a37d4d-4f1a-252f-d23f-9819f5e8e2ff",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|43a37d4d-4f1a-252f-d23f-9819f5e8e2ff",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 800,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882bfcb115,
          },
          "e-369": {
            id: "e-369",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-370" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54326b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54326b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 50,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1882bfd3870,
          },
          "e-373": {
            id: "e-373",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54328b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|ec44f1a0-5d4b-7f40-7d6c-aaf6be54328b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1882c006d5b,
          },
          "e-374": {
            id: "e-374",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6481ba5a742a9244c20dec42|a8272e16-146b-170d-0e3c-e3750c1dc10c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|a8272e16-146b-170d-0e3c-e3750c1dc10c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1882c00bc4b,
          },
          "e-377": {
            id: "e-377",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6481ba5a742a9244c20dec42|689bf62e-73fb-1a37-1cc4-03e6e84917bc",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|689bf62e-73fb-1a37-1cc4-03e6e84917bc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1882c023ec0,
          },
          "e-383": {
            id: "e-383",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6481ba5a742a9244c20dec42|d2389e6d-37cf-a193-526e-e84e405d2099",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|d2389e6d-37cf-a193-526e-e84e405d2099",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1882c08f98c,
          },
          "e-384": {
            id: "e-384",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "6481ba5a742a9244c20dec42|2e701a76-72f2-6cbb-cb37-7a1d03b96253",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|2e701a76-72f2-6cbb-cb37-7a1d03b96253",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 80,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1882c122919,
          },
          "e-385": {
            id: "e-385",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-386" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|a74fbe45-80c6-8b95-59fb-fe18f35f0a61",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|a74fbe45-80c6-8b95-59fb-fe18f35f0a61",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1882c15b9de,
          },
          "e-387": {
            id: "e-387",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-388",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|fd869808-84f8-b1e9-b29e-5b0ea4860327",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|fd869808-84f8-b1e9-b29e-5b0ea4860327",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882c15da4a,
          },
          "e-389": {
            id: "e-389",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-390",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6481ba5a742a9244c20dec42|2819ad58-bbd8-4298-4c4d-45c00b5b13c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6481ba5a742a9244c20dec42|2819ad58-bbd8-4298-4c4d-45c00b5b13c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1882c15fbe4,
          },
          "e-582": {
            id: "e-582",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1889ba6e5d7,
          },
          "e-804": {
            id: "e-804",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-805",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "648c9004889d5b94bfab633e|1f877bd2-aed6-40e9-e78a-bd1d71e0c547",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "648c9004889d5b94bfab633e|1f877bd2-aed6-40e9-e78a-bd1d71e0c547",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188ac63b4c3,
          },
          "e-806": {
            id: "e-806",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-807" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "648c9004889d5b94bfab633e|6d87273d-de29-4b56-5119-cbad8b907ba7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "648c9004889d5b94bfab633e|6d87273d-de29-4b56-5119-cbad8b907ba7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x188ac73ec13,
          },
          "e-838": {
            id: "e-838",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-45",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "648c9004889d5b94bfab633e|4205e74b-0761-ee44-6979-4aea38315b5b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "648c9004889d5b94bfab633e|4205e74b-0761-ee44-6979-4aea38315b5b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-45-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x181137cf453,
          },
          "e-839": {
            id: "e-839",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-46",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
              id: "648c9004889d5b94bfab633e|4205e74b-0761-ee44-6979-4aea38315b5b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "648c9004889d5b94bfab633e|4205e74b-0761-ee44-6979-4aea38315b5b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-46-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18113f3b099,
          },
          "e-842": {
            id: "e-842",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-843",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "648c9004889d5b94bfab633e|77421bb0-f855-e77f-b9dd-59dc4e075cb8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "648c9004889d5b94bfab633e|77421bb0-f855-e77f-b9dd-59dc4e075cb8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 550,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188af0c6bba,
          },
          "e-935": {
            id: "e-935",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-936",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529a|60d3fa3a5a19c1169cd58c4100000000000e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529a|60d3fa3a5a19c1169cd58c4100000000000e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188b58be901,
          },
          "e-937": {
            id: "e-937",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-938",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529a|60d3fa3a5a19c1169cd58c41000000000012",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529a|60d3fa3a5a19c1169cd58c41000000000012",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188b58c1da5,
          },
          "e-939": {
            id: "e-939",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-940",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529a|60d3fa3a5a19c1169cd58c41000000000013",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529a|60d3fa3a5a19c1169cd58c41000000000013",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188b58c42c7,
          },
          "e-941": {
            id: "e-941",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-942",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529b|60d3fe8d16a07670a7e520bf00000000000d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529b|60d3fe8d16a07670a7e520bf00000000000d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188b58c80e6,
          },
          "e-943": {
            id: "e-943",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-944",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529b|a65a1401-941b-812d-6837-8fc27c9f4db5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529b|a65a1401-941b-812d-6837-8fc27c9f4db5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188b58ca23f,
          },
          "e-945": {
            id: "e-945",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-946",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529b|f7e51fb9-2444-74ed-f2a4-3e5338dc3f4d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529b|f7e51fb9-2444-74ed-f2a4-3e5338dc3f4d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x188b58cc0aa,
          },
          "e-1586": {
            id: "e-1586",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1587",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529d|812a9e19-0ded-bc29-3e22-926525905392",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529d|812a9e19-0ded-bc29-3e22-926525905392",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 900,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18930579cf6,
          },
          "e-1588": {
            id: "e-1588",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1589",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529d|812a9e19-0ded-bc29-3e22-92652590539b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529d|812a9e19-0ded-bc29-3e22-92652590539b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 1100,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18930579cf6,
          },
          "e-1592": {
            id: "e-1592",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1593",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529c|f9f4e930-466f-1bdd-3c01-1c85bafc8981",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529c|f9f4e930-466f-1bdd-3c01-1c85bafc8981",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 900,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1893070e8b1,
          },
          "e-1596": {
            id: "e-1596",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1597",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca0529c|1ecbc7a3-1cbf-b759-cca1-7b2e9ed915f6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529c|1ecbc7a3-1cbf-b759-cca1-7b2e9ed915f6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 850,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1883a898c6d,
          },
          "e-1598": {
            id: "e-1598",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1599",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|b42b7f0e-4236-cb1c-723c-8dfa0ffe7158",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|b42b7f0e-4236-cb1c-723c-8dfa0ffe7158",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f50e6e80,
          },
          "e-1599": {
            id: "e-1599",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1598",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|b42b7f0e-4236-cb1c-723c-8dfa0ffe7158",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|b42b7f0e-4236-cb1c-723c-8dfa0ffe7158",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f50e6e81,
          },
          "e-1600": {
            id: "e-1600",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1601",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|2f623296-9279-3d69-2d9b-31197d00599e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|2f623296-9279-3d69-2d9b-31197d00599e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f51089ea,
          },
          "e-1601": {
            id: "e-1601",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1600",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|2f623296-9279-3d69-2d9b-31197d00599e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|2f623296-9279-3d69-2d9b-31197d00599e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f51089ea,
          },
          "e-1602": {
            id: "e-1602",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1614",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|decf3d13-22b7-2f37-cc12-1097db26b6da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|decf3d13-22b7-2f37-cc12-1097db26b6da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510bb1f,
          },
          "e-1603": {
            id: "e-1603",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1613",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|decf3d13-22b7-2f37-cc12-1097db26b6da",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|decf3d13-22b7-2f37-cc12-1097db26b6da",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510bb1f,
          },
          "e-1604": {
            id: "e-1604",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1605",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|34a22646-6813-e601-37dc-7f0376c1e1a2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|34a22646-6813-e601-37dc-7f0376c1e1a2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510e10b,
          },
          "e-1605": {
            id: "e-1605",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1604",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca0529e|34a22646-6813-e601-37dc-7f0376c1e1a2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca0529e|34a22646-6813-e601-37dc-7f0376c1e1a2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510e10c,
          },
          "e-1608": {
            id: "e-1608",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-55",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-55-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x184addda4f9,
          },
          "e-1609": {
            id: "e-1609",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-56",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-56-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x184d13db6b2,
          },
          "e-1610": {
            id: "e-1610",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-57",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "c7a48850-583e-560b-556b-43b7a35cd7f8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "c7a48850-583e-560b-556b-43b7a35cd7f8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-57-p",
                smoothing: 90,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x185b97ea2c2,
          },
          "e-1611": {
            id: "e-1611",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-58",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1612",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d199289f-e495-5c49-2cd9-60a87f86a023",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d199289f-e495-5c49-2cd9-60a87f86a023",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183d5d6ba7f,
          },
          "e-1612": {
            id: "e-1612",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-59",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1611",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "d199289f-e495-5c49-2cd9-60a87f86a023",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "d199289f-e495-5c49-2cd9-60a87f86a023",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x183d5d6ba7f,
          },
          "e-1613": {
            id: "e-1613",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1614",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|1d6a95ff-0ebb-f50f-dcce-50cc3c0a5fa4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|1d6a95ff-0ebb-f50f-dcce-50cc3c0a5fa4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510bb1f,
          },
          "e-1614": {
            id: "e-1614",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1613",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|1d6a95ff-0ebb-f50f-dcce-50cc3c0a5fa4",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|1d6a95ff-0ebb-f50f-dcce-50cc3c0a5fa4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510bb1f,
          },
          "e-1615": {
            id: "e-1615",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1616",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|d173955d-f2c7-fc59-be42-fe2b584fe214",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|d173955d-f2c7-fc59-be42-fe2b584fe214",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510bb1f,
          },
          "e-1616": {
            id: "e-1616",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1615",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|d173955d-f2c7-fc59-be42-fe2b584fe214",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|d173955d-f2c7-fc59-be42-fe2b584fe214",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190f510bb1f,
          },
          "e-1617": {
            id: "e-1617",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1618",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "22384c17-123f-8d71-8e56-33428ac23afe",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "22384c17-123f-8d71-8e56-33428ac23afe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fdfa8b97,
          },
          "e-1618": {
            id: "e-1618",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1617",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "22384c17-123f-8d71-8e56-33428ac23afe",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "22384c17-123f-8d71-8e56-33428ac23afe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fdfa8b97,
          },
          "e-1619": {
            id: "e-1619",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1620",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|e89a97af-eb10-138c-5414-077209999239",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|e89a97af-eb10-138c-5414-077209999239",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fdfbb247,
          },
          "e-1620": {
            id: "e-1620",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1619",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|e89a97af-eb10-138c-5414-077209999239",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|e89a97af-eb10-138c-5414-077209999239",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fdfbb247,
          },
          "e-1621": {
            id: "e-1621",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a0|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x190fe0a1cb8,
          },
          "e-1630": {
            id: "e-1630",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a2|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x190fe354f0c,
          },
          "e-1637": {
            id: "e-1637",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1638",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a2|e89a97af-eb10-138c-5414-077209999239",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|e89a97af-eb10-138c-5414-077209999239",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fe354f0c,
          },
          "e-1638": {
            id: "e-1638",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1637",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a2|e89a97af-eb10-138c-5414-077209999239",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|e89a97af-eb10-138c-5414-077209999239",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fe354f0c,
          },
          "e-1639": {
            id: "e-1639",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-60",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1471",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80135",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80135",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17e66e3be0b,
          },
          "e-1640": {
            id: "e-1640",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1639",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80135",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80135",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17e66e3be0b,
          },
          "e-1641": {
            id: "e-1641",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-60",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1927",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80138",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80138",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2400d22,
          },
          "e-1642": {
            id: "e-1642",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1941",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80138",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80138",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb2400d22,
          },
          "e-1643": {
            id: "e-1643",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-60",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1482",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf8013b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf8013b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb240095b,
          },
          "e-1644": {
            id: "e-1644",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-61",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-616",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf8013b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf8013b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17eb240095b,
          },
          "e-1645": {
            id: "e-1645",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-62",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919712",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919712",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-62-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18dd11c6e8d,
          },
          "e-1646": {
            id: "e-1646",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-63",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919712",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919712",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-63-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x18e384c1035,
          },
          "e-1647": {
            id: "e-1647",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1648",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a0|c43bcd29-a5f4-33fb-79d4-f32010e56e7e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|c43bcd29-a5f4-33fb-79d4-f32010e56e7e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fe0a1cb8,
          },
          "e-1648": {
            id: "e-1648",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1647",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a0|c43bcd29-a5f4-33fb-79d4-f32010e56e7e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|c43bcd29-a5f4-33fb-79d4-f32010e56e7e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x190fe0a1cb8,
          },
          "e-1649": {
            id: "e-1649",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1650",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a0|79a4d926-c220-0fd5-2429-4d4c3d393f5e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|79a4d926-c220-0fd5-2429-4d4c3d393f5e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19104549cb3,
          },
          "e-1650": {
            id: "e-1650",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1649",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a0|79a4d926-c220-0fd5-2429-4d4c3d393f5e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|79a4d926-c220-0fd5-2429-4d4c3d393f5e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19104549cb3,
          },
          "e-1651": {
            id: "e-1651",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-64",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-2193",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|15262966-5d09-ed4a-4f80-f06036235a45",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|15262966-5d09-ed4a-4f80-f06036235a45",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x17c91d6a854,
          },
          "e-1655": {
            id: "e-1655",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1656",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073abe",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073abe",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047da712,
          },
          "e-1657": {
            id: "e-1657",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1658",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047dc370,
          },
          "e-1659": {
            id: "e-1659",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-1660" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac3",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ac3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 900,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191047de23c,
          },
          "e-1661": {
            id: "e-1661",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1662" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073aae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073aae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191047dfcb9,
          },
          "e-1663": {
            id: "e-1663",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1664" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ab8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ab8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191047e3093,
          },
          "e-1665": {
            id: "e-1665",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1666" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ab0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073ab0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191047e4e4e,
          },
          "e-1667": {
            id: "e-1667",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1668" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073aba",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|831fd5ea-27b8-7437-5716-582c4e073aba",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191047e83fa,
          },
          "e-1669": {
            id: "e-1669",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1670",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|a36b875f-8e5c-d0ab-646f-20d8d278705c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|a36b875f-8e5c-d0ab-646f-20d8d278705c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047ef4bd,
          },
          "e-1671": {
            id: "e-1671",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1672",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|a36b875f-8e5c-d0ab-646f-20d8d278705e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|a36b875f-8e5c-d0ab-646f-20d8d278705e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047f0d3d,
          },
          "e-1673": {
            id: "e-1673",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1674" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|a36b875f-8e5c-d0ab-646f-20d8d2787061",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|a36b875f-8e5c-d0ab-646f-20d8d2787061",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191047f2316,
          },
          "e-1675": {
            id: "e-1675",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1676",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|01fe231a-c26f-5431-a9d2-eb07c475ec64",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|01fe231a-c26f-5431-a9d2-eb07c475ec64",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047f449a,
          },
          "e-1677": {
            id: "e-1677",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1678",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|01fe231a-c26f-5431-a9d2-eb07c475ec67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|01fe231a-c26f-5431-a9d2-eb07c475ec67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047f5c23,
          },
          "e-1679": {
            id: "e-1679",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1680",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|01fe231a-c26f-5431-a9d2-eb07c475ec69",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|01fe231a-c26f-5431-a9d2-eb07c475ec69",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047f87aa,
          },
          "e-1681": {
            id: "e-1681",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1682",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611d7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611d7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047faa80,
          },
          "e-1683": {
            id: "e-1683",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1684",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047fc0b0,
          },
          "e-1685": {
            id: "e-1685",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1686",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca05289|00d3fab5-43cb-9118-0754-9b86002ddd49",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|00d3fab5-43cb-9118-0754-9b86002ddd49",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191047fe1ee,
          },
          "e-1689": {
            id: "e-1689",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1690",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "5d53571d-05a3-3001-8aed-4eb278bd7aaf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "5d53571d-05a3-3001-8aed-4eb278bd7aaf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910480a37f,
          },
          "e-1691": {
            id: "e-1691",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1692",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611d7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611d7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910480cd27,
          },
          "e-1693": {
            id: "e-1693",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1694",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611d9",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611d9",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910480ef69,
          },
          "e-1695": {
            id: "e-1695",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1696",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a2|00d3fab5-43cb-9118-0754-9b86002ddd49",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|00d3fab5-43cb-9118-0754-9b86002ddd49",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 800,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104810788,
          },
          "e-1697": {
            id: "e-1697",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1698",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791971a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791971a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910481949c,
          },
          "e-1699": {
            id: "e-1699",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1700",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791971c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791971c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910481aaa0,
          },
          "e-1701": {
            id: "e-1701",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-1702" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791971f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791971f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 700,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910481c109,
          },
          "e-1703": {
            id: "e-1703",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1704" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919728",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919728",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910481d828,
          },
          "e-1705": {
            id: "e-1705",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1706" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919726",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f27919726",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 500,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910481ef64,
          },
          "e-1707": {
            id: "e-1707",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1708" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791972a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e5b25780-d9a9-a524-9f70-298f2791972a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910482036a,
          },
          "e-1709": {
            id: "e-1709",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1710",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|a36b875f-8e5c-d0ab-646f-20d8d278705c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|a36b875f-8e5c-d0ab-646f-20d8d278705c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104822e81,
          },
          "e-1711": {
            id: "e-1711",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1712",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|a36b875f-8e5c-d0ab-646f-20d8d278705e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|a36b875f-8e5c-d0ab-646f-20d8d278705e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191048249d3,
          },
          "e-1713": {
            id: "e-1713",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1714" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e562de8e-2f64-cb69-3f8a-ae47d01f2538",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e562de8e-2f64-cb69-3f8a-ae47d01f2538",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19104826627,
          },
          "e-1715": {
            id: "e-1715",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1716" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|e562de8e-2f64-cb69-3f8a-ae47d01f253e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|e562de8e-2f64-cb69-3f8a-ae47d01f253e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 650,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910482952c,
          },
          "e-1717": {
            id: "e-1717",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1718" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|a36b875f-8e5c-d0ab-646f-20d8d2787061",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|a36b875f-8e5c-d0ab-646f-20d8d2787061",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910482ad39,
          },
          "e-1719": {
            id: "e-1719",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1720",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|01fe231a-c26f-5431-a9d2-eb07c475ec64",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|01fe231a-c26f-5431-a9d2-eb07c475ec64",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910482d252,
          },
          "e-1721": {
            id: "e-1721",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1722",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|01fe231a-c26f-5431-a9d2-eb07c475ec67",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|01fe231a-c26f-5431-a9d2-eb07c475ec67",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910482e70b,
          },
          "e-1723": {
            id: "e-1723",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1724",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|01fe231a-c26f-5431-a9d2-eb07c475ec69",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|01fe231a-c26f-5431-a9d2-eb07c475ec69",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910482fe36,
          },
          "e-1725": {
            id: "e-1725",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1726",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|15262966-5d09-ed4a-4f80-f06036235a4c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|15262966-5d09-ed4a-4f80-f06036235a4c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104831fa3,
          },
          "e-1727": {
            id: "e-1727",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1728",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|a5697586-09aa-bf1c-9b4e-f77543d52248",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|a5697586-09aa-bf1c-9b4e-f77543d52248",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104834371,
          },
          "e-1729": {
            id: "e-1729",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1730",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|a5697586-09aa-bf1c-9b4e-f77543d5224a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|a5697586-09aa-bf1c-9b4e-f77543d5224a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191048357f4,
          },
          "e-1731": {
            id: "e-1731",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1732",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a0|a5697586-09aa-bf1c-9b4e-f77543d5224c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a0|a5697586-09aa-bf1c-9b4e-f77543d5224c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191048377e6,
          },
          "e-1733": {
            id: "e-1733",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1734" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d353f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d353f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910483ca0c,
          },
          "e-1735": {
            id: "e-1735",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1736",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d3518",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d3518",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910483fb2d,
          },
          "e-1737": {
            id: "e-1737",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1738",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d351a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d351a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 800,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104841423,
          },
          "e-1739": {
            id: "e-1739",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1740",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d351c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d351c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 900,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104842dac,
          },
          "e-1741": {
            id: "e-1741",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1742" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d3526",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|a88256af-7997-c642-0ddc-1058084d3526",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 800,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191048449f7,
          },
          "e-1743": {
            id: "e-1743",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1744",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|056cf0ad-be6d-2031-ab77-36ff76b7bc12",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|056cf0ad-be6d-2031-ab77-36ff76b7bc12",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104848929,
          },
          "e-1745": {
            id: "e-1745",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1746",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|056cf0ad-be6d-2031-ab77-36ff76b7bc15",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|056cf0ad-be6d-2031-ab77-36ff76b7bc15",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19104849da7,
          },
          "e-1747": {
            id: "e-1747",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1748",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf8012e",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf8012e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910484ba06,
          },
          "e-1749": {
            id: "e-1749",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1750",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80130",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80130",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910484cf72,
          },
          "e-1751": {
            id: "e-1751",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1752",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80132",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|4f693294-cad1-9363-5740-820ebbf80132",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1910484ed8a,
          },
          "e-1753": {
            id: "e-1753",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1754" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a1|0869c1e8-37ee-2b22-001c-ff49d29c7efb",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a1|0869c1e8-37ee-2b22-001c-ff49d29c7efb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 300,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1910485107e,
          },
          "e-1755": {
            id: "e-1755",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a3|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a3|39f29836-f6b3-7e0e-f2e5-07ee11c33065",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19109033cdd,
          },
          "e-1756": {
            id: "e-1756",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-65",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1757",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611de",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611de",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191092e8e97,
          },
          "e-1757": {
            id: "e-1757",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1756",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611de",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|4ebf1909-cf5c-d43c-0109-b095f71611de",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191092e8e98,
          },
          "e-1758": {
            id: "e-1758",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-65",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1759",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611de",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611de",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191092fb44a,
          },
          "e-1759": {
            id: "e-1759",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-66",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1758",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611de",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a2|4ebf1909-cf5c-d43c-0109-b095f71611de",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191092fb44a,
          },
          "e-1760": {
            id: "e-1760",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-47",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1761",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|e62bd4bf-43a0-49c7-131f-f7e7b3fd420c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|e62bd4bf-43a0-49c7-131f-f7e7b3fd420c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1910933a6ec,
          },
          "e-1761": {
            id: "e-1761",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-48",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-1760",
              },
            },
            mediaQueries: ["main"],
            target: {
              id: "68fcf76dce908baaeca05289|e62bd4bf-43a0-49c7-131f-f7e7b3fd420c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca05289|e62bd4bf-43a0-49c7-131f-f7e7b3fd420c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1910933a6ec,
          },
          "e-1762": {
            id: "e-1762",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1763",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5ef94",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5ef94",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 200,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191093866cc,
          },
          "e-1764": {
            id: "e-1764",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1765",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5ef96",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5ef96",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 400,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19109387d78,
          },
          "e-1766": {
            id: "e-1766",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-1767",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5ef98",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5ef98",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 600,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19109389adc,
          },
          "e-1768": {
            id: "e-1768",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-1769" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5efa8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68fcf76dce908baaeca052a3|f8fb373e-a797-7673-13c3-495bdbb5efa8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1912da25a84,
          },
        },
        actionLists: {
          "a-8": {
            id: "a-8",
            title: "Parallax image",
            continuousParameterGroups: [
              {
                id: "a-8-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-8-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "648c9004889d5b94bfab633e|32bd3cca-51b2-c39f-8dda-c2e81090c5b3",
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-8-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "648c9004889d5b94bfab633e|32bd3cca-51b2-c39f-8dda-c2e81090c5b3",
                          },
                          yValue: 9,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-8-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "648c9004889d5b94bfab633e|32bd3cca-51b2-c39f-8dda-c2e81090c5b3",
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-8-n-4",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "648c9004889d5b94bfab633e|32bd3cca-51b2-c39f-8dda-c2e81090c5b3",
                          },
                          xValue: 1.2,
                          yValue: 1.2,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x188173f7bd1,
          },
          "a-45": {
            id: "a-45",
            title: "Header [Scroll] [Desktop]",
            continuousParameterGroups: [
              {
                id: "a-45-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-45-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-45-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 16,
                    actionItems: [
                      {
                        id: "a-45-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0.95,
                          yValue: 0.95,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-45-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x181137d1dc1,
          },
          "a-46": {
            id: "a-46",
            title: "Header [Scroll] [Tablet]",
            continuousParameterGroups: [
              {
                id: "a-46-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-46-n",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-46-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 25,
                    actionItems: [
                      {
                        id: "a-46-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0.95,
                          yValue: 0.95,
                          locked: !0,
                        },
                      },
                      {
                        id: "a-46-n-4",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x181137d1dc1,
          },
          "a-47": {
            id: "a-47",
            title: "Button [Hover In]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-47-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow",
                        selectorGuids: ["ec7a8456-e0e5-096c-9f66-872315212505"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190f50eed38,
          },
          "a-48": {
            id: "a-48",
            title: "Button [Hover Out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-48-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 350,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-arrow",
                        selectorGuids: ["ec7a8456-e0e5-096c-9f66-872315212505"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x190f50eed38,
          },
          "a-55": {
            id: "a-55",
            title: "Header [Scroll] [Desktop]",
            continuousParameterGroups: [
              {
                id: "a-55-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-55-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-55-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list.image-list-right",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                              "5070e7d6-0452-1903-a309-57aab4fe204c",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-55-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                            ],
                          },
                          yValue: -85,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-55-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list.image-list-right",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                              "5070e7d6-0452-1903-a309-57aab4fe204c",
                            ],
                          },
                          yValue: -60,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x184addebe24,
          },
          "a-56": {
            id: "a-56",
            title: "Header [Scroll] [Mobile]",
            continuousParameterGroups: [
              {
                id: "a-56-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-56-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-56-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list.image-list-right",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                              "5070e7d6-0452-1903-a309-57aab4fe204c",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 65,
                    actionItems: [
                      {
                        id: "a-56-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                            ],
                          },
                          yValue: -85,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-56-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            selector: ".header-image-list.image-list-right",
                            selectorGuids: [
                              "5070e7d6-0452-1903-a309-57aab4fe2042",
                              "5070e7d6-0452-1903-a309-57aab4fe204c",
                            ],
                          },
                          yValue: -85,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x184addebe24,
          },
          "a-57": {
            id: "a-57",
            title: "Banner heading [Scroll]",
            continuousParameterGroups: [
              {
                id: "a-57-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-57-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-heading-top",
                            selectorGuids: [
                              "4b68b97c-0d14-65fa-71f5-9af84f3dc805",
                            ],
                          },
                          xValue: 10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-57-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-heading-bottom",
                            selectorGuids: [
                              "4b68b97c-0d14-65fa-71f5-9af84f3dc806",
                            ],
                          },
                          xValue: -10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-57-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-heading-top",
                            selectorGuids: [
                              "4b68b97c-0d14-65fa-71f5-9af84f3dc805",
                            ],
                          },
                          xValue: -10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-57-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".cta-heading-bottom",
                            selectorGuids: [
                              "4b68b97c-0d14-65fa-71f5-9af84f3dc806",
                            ],
                          },
                          xValue: 10,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x185b9595327,
          },
          "a-58": {
            id: "a-58",
            title: "Navbar menu [Open]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-58-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar-menu",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdaf"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-58-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar-menu",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdaf"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-58-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-top",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdba"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-58-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inQuint",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-bottom",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdbe"],
                      },
                      widthValue: 0,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-58-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar-menu",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdaf"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-58-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar-menu",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdaf"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-58-n-7",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-middle-base",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdbd"],
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-58-n-8",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-middle-base",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdbd"],
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-58-n-9",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-middle",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdbb"],
                      },
                      zValue: 45,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x17aa315f880,
          },
          "a-59": {
            id: "a-59",
            title: "Navbar menu [Close]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-59-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-middle-base",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdbd"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-59-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuint",
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-middle",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdbb"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-59-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar-menu",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdaf"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-59-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-bottom",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdbe"],
                      },
                      widthValue: 24,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-59-n-5",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 200,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".menu-icon-line-top",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdba"],
                      },
                      widthValue: 24,
                      widthUnit: "px",
                      heightUnit: "PX",
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-59-n-6",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".navbar-menu",
                        selectorGuids: ["6933776d-eb13-6ec3-bf3d-9016f05acdaf"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17aa32ea158,
          },
          "a-60": {
            id: "a-60",
            title: "Gallery [Slide In]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-60-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".gallery-image-wrapper",
                        selectorGuids: ["7c359b06-1a3d-d3ac-0f95-23fde914d4e0"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17e43eee124,
          },
          "a-61": {
            id: "a-61",
            title: "Gallery [Slide Out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-61-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "ease",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".gallery-image-wrapper",
                        selectorGuids: ["7c359b06-1a3d-d3ac-0f95-23fde914d4e0"],
                      },
                      value: 0.3,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17e43eee124,
          },
          "a-62": {
            id: "a-62",
            title: "Header [Scroll] [Desktop]",
            continuousParameterGroups: [
              {
                id: "a-62-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-62-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-1",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a3",
                            ],
                          },
                          yValue: 30,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-62-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-2",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a1",
                            ],
                          },
                          yValue: -30,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-62-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 40,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 70,
                    actionItems: [
                      {
                        id: "a-62-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: -20,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-62-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-2",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a1",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 90,
                    actionItems: [
                      {
                        id: "a-62-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-1",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a3",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18dd11efed4,
          },
          "a-63": {
            id: "a-63",
            title: "Header [Scroll] [Mobile]",
            continuousParameterGroups: [
              {
                id: "a-63-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 20,
                    actionItems: [
                      {
                        id: "a-63-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-1",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a3",
                            ],
                          },
                          yValue: 30,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 30,
                    actionItems: [
                      {
                        id: "a-63-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-2",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a1",
                            ],
                          },
                          yValue: -30,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-63-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: 40,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 80,
                    actionItems: [
                      {
                        id: "a-63-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          yValue: -20,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 90,
                    actionItems: [
                      {
                        id: "a-63-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-2",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a1",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-63-n-6",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".about-header-image-wrapper-1",
                            selectorGuids: [
                              "a2eb2f8d-c05f-38be-a46f-d14db25354a3",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x18dd11efed4,
          },
          "a-64": {
            id: "a-64",
            title: "Companies [Loop]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-64-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".logo-component",
                        selectorGuids: ["11d7187a-1d4b-75f1-0bc8-5766b9f2ecc9"],
                      },
                      xValue: -112,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-64-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".logo-component",
                        selectorGuids: ["11d7187a-1d4b-75f1-0bc8-5766b9f2ecc9"],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x17c7d1bcb82,
          },
          "a-65": {
            id: "a-65",
            title: "Project [Hover In]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-65-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-image",
                        selectorGuids: ["b6eb7221-f599-45c6-b9ec-2e8f224910eb"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-65-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-image",
                        selectorGuids: ["b6eb7221-f599-45c6-b9ec-2e8f224910eb"],
                      },
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191092ea2db,
          },
          "a-66": {
            id: "a-66",
            title: "Project [Hover Out]",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-66-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: [0.165, 0.84, 0.44, 1],
                      duration: 400,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".portfolio-image",
                        selectorGuids: ["b6eb7221-f599-45c6-b9ec-2e8f224910eb"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191092ea2db,
          },
          fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0.7500000000000001,
                      yValue: 0.7500000000000001,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
