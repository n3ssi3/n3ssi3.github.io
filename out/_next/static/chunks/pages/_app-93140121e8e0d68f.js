;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    8679: function (e, t, n) {
      'use strict'
      var r = n(9864),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {}
      function u(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o
      }
      ;(s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }),
        (s[r.Memo] = a)
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        g = Object.getPrototypeOf,
        d = Object.prototype
      e.exports = function e(t, n, r) {
        if ('string' != typeof n) {
          if (d) {
            var o = g(n)
            o && o !== d && e(t, o, r)
          }
          var a = l(n)
          f && (a = a.concat(f(n)))
          for (var s = u(t), h = u(n), y = 0; y < a.length; ++y) {
            var v = a[y]
            if (!i[v] && !(r && r[v]) && !(h && h[v]) && !(s && s[v])) {
              var m = p(n, v)
              try {
                c(t, v, m)
              } catch (b) {}
            }
          }
        }
        return t
      }
    },
    6247: function (e, t, n) {
      'use strict'
      function r(e) {
        if (Array.isArray(e)) return e
      }
      function o(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function i(e, t) {
        if (e) {
          if ('string' == typeof e) return o(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          if (
            ('Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n)
          )
            return Array.from(e)
          if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return o(e, t)
        }
      }
      function a() {
        throw TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      function s(e) {
        return (s =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function u(e) {
        var t = (function (e, t) {
          if ('object' !== s(e) || null === e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(e, t || 'default')
            if ('object' !== s(r)) return r
            throw TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' === s(t) ? t : String(t)
      }
      function c(e, t, n) {
        return (
          (t = u(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[t] = n),
          e
        )
      }
      n.d(t, {
        Jc: function () {
          return eK
        },
        $G: function () {
          return N
        }
      })
      var l,
        f = n(7294)
      function p(e, t) {
        if (!(e instanceof t)) throw TypeError('Cannot call a class as a function')
      }
      function g(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, u(r.key), r)
        }
      }
      function d(e, t, n) {
        return (
          t && g(e.prototype, t),
          n && g(e, n),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        )
      }
      var h =
          /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
        y = {
          '&amp;': '&',
          '&#38;': '&',
          '&lt;': '<',
          '&#60;': '<',
          '&gt;': '>',
          '&#62;': '>',
          '&apos;': "'",
          '&#39;': "'",
          '&quot;': '"',
          '&#34;': '"',
          '&nbsp;': ' ',
          '&#160;': ' ',
          '&copy;': '\xa9',
          '&#169;': '\xa9',
          '&reg;': '\xae',
          '&#174;': '\xae',
          '&hellip;': '…',
          '&#8230;': '…',
          '&#x2F;': '/',
          '&#47;': '/'
        },
        v = function (e) {
          return y[e]
        },
        m = {
          bindI18n: 'languageChanged',
          bindI18nStore: '',
          transEmptyNodeValue: '',
          transSupportBasicHtmlNodes: !0,
          transWrapTextNodes: '',
          transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
          useSuspense: !0,
          unescape: function (e) {
            return e.replace(h, v)
          }
        },
        b = (0, f.createContext)(),
        O = (function () {
          function e() {
            p(this, e), (this.usedNamespaces = {})
          }
          return (
            d(e, [
              {
                key: 'addUsedNamespaces',
                value: function (e) {
                  var t = this
                  e.forEach(function (e) {
                    t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                  })
                }
              },
              {
                key: 'getUsedNamespaces',
                value: function () {
                  return Object.keys(this.usedNamespaces)
                }
              }
            ]),
            e
          )
        })()
      function k() {
        if (console && console.warn) {
          for (var e, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]
          'string' == typeof n[0] && (n[0] = 'react-i18next:: '.concat(n[0])),
            (e = console).warn.apply(e, n)
        }
      }
      var S = {}
      function w() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        ;('string' == typeof t[0] && S[t[0]]) ||
          ('string' == typeof t[0] && (S[t[0]] = new Date()), k.apply(void 0, t))
      }
      function x(e, t, n) {
        e.loadNamespaces(t, function () {
          e.isInitialized
            ? n()
            : e.on('initialized', function t() {
                setTimeout(function () {
                  e.off('initialized', t)
                }, 0),
                  n()
              })
        })
      }
      function j(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var L = function (e, t) {
        var n = (0, f.useRef)()
        return (
          (0, f.useEffect)(
            function () {
              n.current = t ? n.current : e
            },
            [e, t]
          ),
          n.current
        )
      }
      function N(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = n.i18n,
          s = (0, f.useContext)(b) || {},
          u = s.i18n,
          c = s.defaultNS,
          p = o || u || l
        if ((p && !p.reportNamespaces && (p.reportNamespaces = new O()), !p)) {
          w('You will need to pass in an i18next instance by using initReactI18next')
          var g = function (e) {
              return Array.isArray(e) ? e[e.length - 1] : e
            },
            d = [g, {}, !1]
          return (d.t = g), (d.i18n = {}), (d.ready = !1), d
        }
        p.options.react &&
          void 0 !== p.options.react.wait &&
          w(
            'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
          )
        var h = P(P(P({}, m), p.options.react), n),
          y = h.useSuspense,
          v = h.keyPrefix,
          k = e || c || (p.options && p.options.defaultNS)
        ;(k = 'string' == typeof k ? [k] : k || ['translation']),
          p.reportNamespaces.addUsedNamespaces && p.reportNamespaces.addUsedNamespaces(k)
        var S =
          (p.isInitialized || p.initializedStoreOnce) &&
          k.every(function (e) {
            return (function (e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              return t.languages && t.languages.length
                ? void 0 !== t.options.ignoreJSONStructure
                  ? t.hasLoadedNamespace(e, {
                      precheck: function (t, r) {
                        if (
                          n.bindI18n &&
                          n.bindI18n.indexOf('languageChanging') > -1 &&
                          t.services.backendConnector.backend &&
                          t.isLanguageChangingTo &&
                          !r(t.isLanguageChangingTo, e)
                        )
                          return !1
                      }
                    })
                  : (function (e, t) {
                      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.languages[0],
                        o = !!t.options && t.options.fallbackLng,
                        i = t.languages[t.languages.length - 1]
                      if ('cimode' === r.toLowerCase()) return !0
                      var a = function (e, n) {
                        var r = t.services.backendConnector.state[''.concat(e, '|').concat(n)]
                        return -1 === r || 2 === r
                      }
                      return (
                        (!(n.bindI18n && n.bindI18n.indexOf('languageChanging') > -1) ||
                          !t.services.backendConnector.backend ||
                          !t.isLanguageChangingTo ||
                          !!a(t.isLanguageChangingTo, e)) &&
                        !!(
                          t.hasResourceBundle(r, e) ||
                          !t.services.backendConnector.backend ||
                          (t.options.resources && !t.options.partialBundledLanguages) ||
                          (a(r, e) && (!o || a(i, e)))
                        )
                      )
                    })(e, t, n)
                : (w('i18n.languages were undefined or empty', t.languages), !0)
            })(e, p, h)
          })
        function j() {
          return p.getFixedT(null, 'fallback' === h.nsMode ? k : k[0], v)
        }
        var N =
            r((t = (0, f.useState)(j))) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (null != n) {
                var r,
                  o,
                  i,
                  a,
                  s = [],
                  u = !0,
                  c = !1
                try {
                  if (((i = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return
                    u = !1
                  } else
                    for (
                      ;
                      !(u = (r = i.call(n)).done) && (s.push(r.value), s.length !== t);
                      u = !0
                    );
                } catch (l) {
                  ;(c = !0), (o = l)
                } finally {
                  try {
                    if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return
                  } finally {
                    if (c) throw o
                  }
                }
                return s
              }
            })(t, 2) ||
            i(t, 2) ||
            a(),
          R = N[0],
          C = N[1],
          E = k.join(),
          D = L(E),
          I = (0, f.useRef)(!0)
        ;(0, f.useEffect)(
          function () {
            var e = h.bindI18n,
              t = h.bindI18nStore
            function n() {
              I.current && C(j)
            }
            return (
              (I.current = !0),
              S ||
                y ||
                x(p, k, function () {
                  I.current && C(j)
                }),
              S && D && D !== E && I.current && C(j),
              e && p && p.on(e, n),
              t && p && p.store.on(t, n),
              function () {
                ;(I.current = !1),
                  e &&
                    p &&
                    e.split(' ').forEach(function (e) {
                      return p.off(e, n)
                    }),
                  t &&
                    p &&
                    t.split(' ').forEach(function (e) {
                      return p.store.off(e, n)
                    })
              }
            )
          },
          [p, E]
        )
        var F = (0, f.useRef)(!0)
        ;(0, f.useEffect)(
          function () {
            I.current && !F.current && C(j), (F.current = !1)
          },
          [p, v]
        )
        var T = [R, p, S]
        if (((T.t = R), (T.i18n = p), (T.ready = S), S || (!S && !y))) return T
        throw new Promise(function (e) {
          x(p, k, function () {
            e()
          })
        })
      }
      function R() {
        return (R = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t]
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
              }
              return e
            }).apply(this, arguments)
      }
      var C = n(8679),
        E = n.n(C)
      function D(e) {
        var t = e.i18n,
          n = e.defaultNS,
          r = e.children,
          o = (0, f.useMemo)(
            function () {
              return { i18n: t, defaultNS: n }
            },
            [t, n]
          )
        return (0, f.createElement)(b.Provider, { value: o }, r)
      }
      function I(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              i = Object.keys(e)
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n])
        }
        return o
      }
      var F = {
          defaultNS: 'common',
          errorStackTraceLimit: 0,
          i18n: { defaultLocale: 'en', locales: ['en'] },
          get initImmediate() {
            return 'undefined' != typeof window
          },
          interpolation: { escapeValue: !1 },
          load: 'currentOnly',
          localeExtension: 'json',
          localePath: './public/locales',
          localeStructure: '{{lng}}/{{ns}}',
          react: { useSuspense: !1 },
          reloadOnPrerender: !1,
          serializeConfig: !0,
          strictMode: !0,
          use: []
        },
        T = ['i18n'],
        A = ['i18n']
      function V(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = ['backend', 'detection'],
        U = function (e) {
          if ('string' != typeof (null == e ? void 0 : e.lng))
            throw Error('config.lng was not passed into createConfig')
          var t,
            n = e.i18n,
            r = I(e, T),
            o = F.i18n,
            i = $($($($({}, I(F, A)), r), o), n),
            a = i.defaultNS,
            s = i.lng,
            u = (i.locales, i.localeExtension),
            c = i.localePath,
            l = i.localeStructure
          return (
            'cimode' === s ||
              (void 0 === i.fallbackLng && (i.fallbackLng = i.defaultLocale),
              (null == e
                ? void 0
                : null === (t = e.use) || void 0 === t
                ? void 0
                : t.some(function (e) {
                    return 'backend' === e.type
                  })) ||
                ('string' == typeof c
                  ? (i.backend = {
                      addPath: ''.concat(c, '/').concat(l, '.missing.').concat(u),
                      loadPath: ''.concat(c, '/').concat(l, '.').concat(u)
                    })
                  : 'function' != typeof c ||
                    (i.backend = {
                      addPath: function (e, t) {
                        return c(e, t, !0)
                      },
                      loadPath: function (e, t) {
                        return c(e, t, !1)
                      }
                    })),
              'string' == typeof i.ns || Array.isArray(i.ns) || (i.ns = [a]),
              M.forEach(function (t) {
                e[t] && (i[t] = $($({}, i[t]), e[t]))
              })),
            i
          )
        }
      function _(e) {
        if (void 0 === e)
          throw ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function B(e, t) {
        return (B = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
      }
      function K(e, t) {
        if ('function' != typeof t && null !== t)
          throw TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && B(e, t)
      }
      function z(e, t) {
        if (t && ('object' === s(t) || 'function' == typeof t)) return t
        if (void 0 !== t)
          throw TypeError('Derived constructors may only return object or undefined')
        return _(e)
      }
      function H(e) {
        return (H = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function J(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var W = {
          type: 'logger',
          log: function (e) {
            this.output('log', e)
          },
          warn: function (e) {
            this.output('warn', e)
          },
          error: function (e) {
            this.output('error', e)
          },
          output: function (e, t) {
            console && console[e] && console[e].apply(console, t)
          }
        },
        Y = new ((function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            p(this, e), this.init(t, n)
          }
          return (
            d(e, [
              {
                key: 'init',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  ;(this.prefix = t.prefix || 'i18next:'),
                    (this.logger = e || W),
                    (this.options = t),
                    (this.debug = t.debug)
                }
              },
              {
                key: 'setDebug',
                value: function (e) {
                  this.debug = e
                }
              },
              {
                key: 'log',
                value: function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'log', '', !0)
                }
              },
              {
                key: 'warn',
                value: function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'warn', '', !0)
                }
              },
              {
                key: 'error',
                value: function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'error', '')
                }
              },
              {
                key: 'deprecate',
                value: function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0)
                }
              },
              {
                key: 'forward',
                value: function (e, t, n, r) {
                  return r && !this.debug
                    ? null
                    : ('string' == typeof e[0] &&
                        (e[0] = ''.concat(n).concat(this.prefix, ' ').concat(e[0])),
                      this.logger[t](e))
                }
              },
              {
                key: 'create',
                value: function (t) {
                  return new e(
                    this.logger,
                    q(q({}, { prefix: ''.concat(this.prefix, ':').concat(t, ':') }), this.options)
                  )
                }
              },
              {
                key: 'clone',
                value: function (t) {
                  return (
                    ((t = t || this.options).prefix = t.prefix || this.prefix),
                    new e(this.logger, t)
                  )
                }
              }
            ]),
            e
          )
        })())(),
        G = (function () {
          function e() {
            p(this, e), (this.observers = {})
          }
          return (
            d(e, [
              {
                key: 'on',
                value: function (e, t) {
                  var n = this
                  return (
                    e.split(' ').forEach(function (e) {
                      ;(n.observers[e] = n.observers[e] || []), n.observers[e].push(t)
                    }),
                    this
                  )
                }
              },
              {
                key: 'off',
                value: function (e, t) {
                  if (this.observers[e]) {
                    if (!t) {
                      delete this.observers[e]
                      return
                    }
                    this.observers[e] = this.observers[e].filter(function (e) {
                      return e !== t
                    })
                  }
                }
              },
              {
                key: 'emit',
                value: function (e) {
                  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r]
                  this.observers[e] &&
                    [].concat(this.observers[e]).forEach(function (e) {
                      e.apply(void 0, n)
                    }),
                    this.observers['*'] &&
                      [].concat(this.observers['*']).forEach(function (t) {
                        t.apply(t, [e].concat(n))
                      })
                }
              }
            ]),
            e
          )
        })()
      function X() {
        var e,
          t,
          n = new Promise(function (n, r) {
            ;(e = n), (t = r)
          })
        return (n.resolve = e), (n.reject = t), n
      }
      function Q(e) {
        return null == e ? '' : '' + e
      }
      function Z(e, t, n) {
        function r(e) {
          return e && e.indexOf('###') > -1 ? e.replace(/###/g, '.') : e
        }
        function o() {
          return !e || 'string' == typeof e
        }
        for (var i = 'string' != typeof t ? [].concat(t) : t.split('.'); i.length > 1; ) {
          if (o()) return {}
          var a = r(i.shift())
          !e[a] && n && (e[a] = new n()),
            (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {})
        }
        return o() ? {} : { obj: e, k: r(i.shift()) }
      }
      function ee(e, t, n) {
        var r = Z(e, t, Object)
        r.obj[r.k] = n
      }
      function et(e, t) {
        var n = Z(e, t),
          r = n.obj,
          o = n.k
        if (r) return r[o]
      }
      function en(e, t, n) {
        var r = et(e, n)
        return void 0 !== r ? r : et(t, n)
      }
      function er(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
      }
      var eo = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;'
      }
      function ei(e) {
        return 'string' == typeof e
          ? e.replace(/[&<>"'\/]/g, function (e) {
              return eo[e]
            })
          : e
      }
      var ea =
          'undefined' != typeof window &&
          window.navigator &&
          void 0 === window.navigator.userAgentData &&
          window.navigator.userAgent &&
          window.navigator.userAgent.indexOf('MSIE') > -1,
        es = [' ', ',', '?', '!', ';']
      function eu(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eu(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eu(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var el = (function (e) {
          K(r, e)
          var t,
            n =
              ((t = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                  return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return (
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                  )
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  n = H(r)
                if (t) {
                  var o = H(this).constructor
                  e = Reflect.construct(n, arguments, o)
                } else e = n.apply(this, arguments)
                return z(this, e)
              })
          function r(e) {
            var t,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { ns: ['translation'], defaultNS: 'translation' }
            return (
              p(this, r),
              (t = n.call(this)),
              ea && G.call(_(t)),
              (t.data = e || {}),
              (t.options = o),
              void 0 === t.options.keySeparator && (t.options.keySeparator = '.'),
              void 0 === t.options.ignoreJSONStructure && (t.options.ignoreJSONStructure = !0),
              t
            )
          }
          return (
            d(r, [
              {
                key: 'addNamespaces',
                value: function (e) {
                  0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                }
              },
              {
                key: 'removeNamespaces',
                value: function (e) {
                  var t = this.options.ns.indexOf(e)
                  t > -1 && this.options.ns.splice(t, 1)
                }
              },
              {
                key: 'getResource',
                value: function (e, t, n) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                    i =
                      void 0 !== r.ignoreJSONStructure
                        ? r.ignoreJSONStructure
                        : this.options.ignoreJSONStructure,
                    a = [e, t]
                  n && 'string' != typeof n && (a = a.concat(n)),
                    n && 'string' == typeof n && (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf('.') > -1 && (a = e.split('.'))
                  var s = et(this.data, a)
                  return s || !i || 'string' != typeof n
                    ? s
                    : (function e(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '.'
                        if (t) {
                          if (t[n]) return t[n]
                          for (var o = n.split(r), i = t, a = 0; a < o.length; ++a) {
                            if (!i || ('string' == typeof i[o[a]] && a + 1 < o.length)) return
                            if (void 0 === i[o[a]]) {
                              for (
                                var s = 2, u = o.slice(a, a + s).join(r), c = i[u];
                                void 0 === c && o.length > a + s;

                              )
                                s++, (c = i[(u = o.slice(a, a + s).join(r))])
                              if (void 0 === c) return
                              if (null === c) return null
                              if (n.endsWith(u)) {
                                if ('string' == typeof c) return c
                                if (u && 'string' == typeof c[u]) return c[u]
                              }
                              var l = o.slice(a + s).join(r)
                              if (l) return e(c, l, r)
                              return
                            }
                            i = i[o[a]]
                          }
                          return i
                        }
                      })(this.data && this.data[e] && this.data[e][t], n, o)
                }
              },
              {
                key: 'addResource',
                value: function (e, t, n, r) {
                  var o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : { silent: !1 },
                    i = this.options.keySeparator
                  void 0 === i && (i = '.')
                  var a = [e, t]
                  n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf('.') > -1 && ((a = e.split('.')), (r = t), (t = a[1])),
                    this.addNamespaces(t),
                    ee(this.data, a, r),
                    o.silent || this.emit('added', e, t, n, r)
                }
              },
              {
                key: 'addResources',
                value: function (e, t, n) {
                  var r =
                    arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 }
                  for (var o in n)
                    ('string' == typeof n[o] ||
                      '[object Array]' === Object.prototype.toString.apply(n[o])) &&
                      this.addResource(e, t, o, n[o], { silent: !0 })
                  r.silent || this.emit('added', e, t, n)
                }
              },
              {
                key: 'addResourceBundle',
                value: function (e, t, n, r, o) {
                  var i =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : { silent: !1 },
                    a = [e, t]
                  e.indexOf('.') > -1 && ((a = e.split('.')), (r = n), (n = t), (t = a[1])),
                    this.addNamespaces(t)
                  var s = et(this.data, a) || {}
                  r
                    ? (function e(t, n, r) {
                        for (var o in n)
                          '__proto__' !== o &&
                            'constructor' !== o &&
                            (o in t
                              ? 'string' == typeof t[o] ||
                                t[o] instanceof String ||
                                'string' == typeof n[o] ||
                                n[o] instanceof String
                                ? r && (t[o] = n[o])
                                : e(t[o], n[o], r)
                              : (t[o] = n[o]))
                        return t
                      })(s, n, o)
                    : (s = ec(ec({}, s), n)),
                    ee(this.data, a, s),
                    i.silent || this.emit('added', e, t, n)
                }
              },
              {
                key: 'removeResourceBundle',
                value: function (e, t) {
                  this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit('removed', e, t)
                }
              },
              {
                key: 'hasResourceBundle',
                value: function (e, t) {
                  return void 0 !== this.getResource(e, t)
                }
              },
              {
                key: 'getResourceBundle',
                value: function (e, t) {
                  return (t || (t = this.options.defaultNS), 'v1' === this.options.compatibilityAPI)
                    ? ec(ec({}, {}), this.getResource(e, t))
                    : this.getResource(e, t)
                }
              },
              {
                key: 'getDataByLanguage',
                value: function (e) {
                  return this.data[e]
                }
              },
              {
                key: 'hasLanguageSomeTranslations',
                value: function (e) {
                  var t = this.getDataByLanguage(e)
                  return !!((t && Object.keys(t)) || []).find(function (e) {
                    return t[e] && Object.keys(t[e]).length > 0
                  })
                }
              },
              {
                key: 'toJSON',
                value: function () {
                  return this.data
                }
              }
            ]),
            r
          )
        })(G),
        ef = {
          processors: {},
          addPostProcessor: function (e) {
            this.processors[e.name] = e
          },
          handle: function (e, t, n, r, o) {
            var i = this
            return (
              e.forEach(function (e) {
                i.processors[e] && (t = i.processors[e].process(t, n, r, o))
              }),
              t
            )
          }
        }
      function ep(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function eg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ep(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ep(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ed = {},
        eh = (function (e) {
          K(r, e)
          var t,
            n =
              ((t = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                  return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return (
                    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})),
                    !0
                  )
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  n = H(r)
                if (t) {
                  var o = H(this).constructor
                  e = Reflect.construct(n, arguments, o)
                } else e = n.apply(this, arguments)
                return z(this, e)
              })
          function r(e) {
            var t,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            return (
              p(this, r),
              (t = n.call(this)),
              ea && G.call(_(t)),
              !(function (e, t, n) {
                e.forEach(function (e) {
                  t[e] && (n[e] = t[e])
                })
              })(
                [
                  'resourceStore',
                  'languageUtils',
                  'pluralResolver',
                  'interpolator',
                  'backendConnector',
                  'i18nFormat',
                  'utils'
                ],
                e,
                _(t)
              ),
              (t.options = o),
              void 0 === t.options.keySeparator && (t.options.keySeparator = '.'),
              (t.logger = Y.create('translator')),
              t
            )
          }
          return (
            d(
              r,
              [
                {
                  key: 'changeLanguage',
                  value: function (e) {
                    e && (this.language = e)
                  }
                },
                {
                  key: 'exists',
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : { interpolation: {} }
                    if (null == e) return !1
                    var n = this.resolve(e, t)
                    return n && void 0 !== n.res
                  }
                },
                {
                  key: 'extractFromKey',
                  value: function (e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator
                    void 0 === n && (n = ':')
                    var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                      o = t.ns || this.options.defaultNS || [],
                      i = n && e.indexOf(n) > -1,
                      a =
                        !this.options.userDefinedKeySeparator &&
                        !t.keySeparator &&
                        !this.options.userDefinedNsSeparator &&
                        !t.nsSeparator &&
                        !(function (e, t, n) {
                          ;(t = t || ''), (n = n || '')
                          var r = es.filter(function (e) {
                            return 0 > t.indexOf(e) && 0 > n.indexOf(e)
                          })
                          if (0 === r.length) return !0
                          var o = RegExp(
                              '('.concat(
                                r
                                  .map(function (e) {
                                    return '?' === e ? '\\?' : e
                                  })
                                  .join('|'),
                                ')'
                              )
                            ),
                            i = !o.test(e)
                          if (!i) {
                            var a = e.indexOf(n)
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0)
                          }
                          return i
                        })(e, n, r)
                    if (i && !a) {
                      var s = e.match(this.interpolator.nestingRegexp)
                      if (s && s.length > 0) return { key: e, namespaces: o }
                      var u = e.split(n)
                      ;(n !== r || (n === r && this.options.ns.indexOf(u[0]) > -1)) &&
                        (o = u.shift()),
                        (e = u.join(r))
                    }
                    return 'string' == typeof o && (o = [o]), { key: e, namespaces: o }
                  }
                },
                {
                  key: 'translate',
                  value: function (e, t, n) {
                    var o = this
                    if (
                      ('object' !== s(t) &&
                        this.options.overloadTranslationOptionHandler &&
                        (t = this.options.overloadTranslationOptionHandler(arguments)),
                      t || (t = {}),
                      null == e)
                    )
                      return ''
                    Array.isArray(e) || (e = [String(e)])
                    var i =
                        void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
                      a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                      u = this.extractFromKey(e[e.length - 1], t),
                      c = u.key,
                      l = u.namespaces,
                      f = l[l.length - 1],
                      p = t.lng || this.language,
                      g = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
                    if (p && 'cimode' === p.toLowerCase()) {
                      if (g) {
                        var d = t.nsSeparator || this.options.nsSeparator
                        return i
                          ? ((h.res = ''.concat(f).concat(d).concat(c)), h)
                          : ''.concat(f).concat(d).concat(c)
                      }
                      return i ? ((h.res = c), h) : c
                    }
                    var h = this.resolve(e, t),
                      y = h && h.res,
                      v = (h && h.usedKey) || c,
                      m = (h && h.exactUsedKey) || c,
                      b = Object.prototype.toString.apply(y),
                      O = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                      k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                      S = 'string' != typeof y && 'boolean' != typeof y && 'number' != typeof y
                    if (
                      k &&
                      y &&
                      S &&
                      0 > ['[object Number]', '[object Function]', '[object RegExp]'].indexOf(b) &&
                      !('string' == typeof O && '[object Array]' === b)
                    ) {
                      if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler ||
                          this.logger.warn(
                            'accessing an object - but returnObjects options is not enabled!'
                          )
                        var w = this.options.returnedObjectHandler
                          ? this.options.returnedObjectHandler(v, y, eg(eg({}, t), {}, { ns: l }))
                          : "key '"
                              .concat(c, ' (')
                              .concat(this.language, ")' returned an object instead of string.")
                        return i ? ((h.res = w), h) : w
                      }
                      if (a) {
                        var x = '[object Array]' === b,
                          j = x ? [] : {},
                          P = x ? m : v
                        for (var L in y)
                          if (Object.prototype.hasOwnProperty.call(y, L)) {
                            var N = ''.concat(P).concat(a).concat(L)
                            ;(j[L] = this.translate(N, eg(eg({}, t), { joinArrays: !1, ns: l }))),
                              j[L] === N && (j[L] = y[L])
                          }
                        y = j
                      }
                    } else if (k && 'string' == typeof O && '[object Array]' === b)
                      (y = y.join(O)) && (y = this.extendTranslation(y, e, t, n))
                    else {
                      var R = !1,
                        C = !1,
                        E = void 0 !== t.count && 'string' != typeof t.count,
                        D = r.hasDefaultValue(t),
                        I = E ? this.pluralResolver.getSuffix(p, t.count, t) : '',
                        F = t['defaultValue'.concat(I)] || t.defaultValue
                      !this.isValidLookup(y) && D && ((R = !0), (y = F)),
                        this.isValidLookup(y) || ((C = !0), (y = c))
                      var T =
                          (t.missingKeyNoValueFallbackToKey ||
                            this.options.missingKeyNoValueFallbackToKey) &&
                          C
                            ? void 0
                            : y,
                        A = D && F !== y && this.options.updateMissing
                      if (C || R || A) {
                        if (
                          (this.logger.log(A ? 'updateKey' : 'missingKey', p, f, c, A ? F : y), a)
                        ) {
                          var V = this.resolve(c, eg(eg({}, t), {}, { keySeparator: !1 }))
                          V &&
                            V.res &&
                            this.logger.warn(
                              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
                            )
                        }
                        var $ = [],
                          M = this.languageUtils.getFallbackCodes(
                            this.options.fallbackLng,
                            t.lng || this.language
                          )
                        if ('fallback' === this.options.saveMissingTo && M && M[0])
                          for (var U = 0; U < M.length; U++) $.push(M[U])
                        else
                          'all' === this.options.saveMissingTo
                            ? ($ = this.languageUtils.toResolveHierarchy(t.lng || this.language))
                            : $.push(t.lng || this.language)
                        var _ = function (e, n, r) {
                          var i = D && r !== y ? r : T
                          o.options.missingKeyHandler
                            ? o.options.missingKeyHandler(e, f, n, i, A, t)
                            : o.backendConnector &&
                              o.backendConnector.saveMissing &&
                              o.backendConnector.saveMissing(e, f, n, i, A, t),
                            o.emit('missingKey', e, f, n, y)
                        }
                        this.options.saveMissing &&
                          (this.options.saveMissingPlurals && E
                            ? $.forEach(function (e) {
                                o.pluralResolver.getSuffixes(e, t).forEach(function (n) {
                                  _([e], c + n, t['defaultValue'.concat(n)] || F)
                                })
                              })
                            : _($, c, F))
                      }
                      ;(y = this.extendTranslation(y, e, t, h, n)),
                        C &&
                          y === c &&
                          this.options.appendNamespaceToMissingKey &&
                          (y = ''.concat(f, ':').concat(c)),
                        (C || R) &&
                          this.options.parseMissingKeyHandler &&
                          (y =
                            'v1' !== this.options.compatibilityAPI
                              ? this.options.parseMissingKeyHandler(
                                  this.options.appendNamespaceToMissingKey
                                    ? ''.concat(f, ':').concat(c)
                                    : c,
                                  R ? y : void 0
                                )
                              : this.options.parseMissingKeyHandler(y))
                    }
                    return i ? ((h.res = y), h) : y
                  }
                },
                {
                  key: 'extendTranslation',
                  value: function (e, t, n, r, o) {
                    var i = this
                    if (this.i18nFormat && this.i18nFormat.parse)
                      e = this.i18nFormat.parse(
                        e,
                        eg(eg({}, this.options.interpolation.defaultVariables), n),
                        r.usedLng,
                        r.usedNS,
                        r.usedKey,
                        { resolved: r }
                      )
                    else if (!n.skipInterpolation) {
                      n.interpolation &&
                        this.interpolator.init(
                          eg(eg({}, n), {
                            interpolation: eg(eg({}, this.options.interpolation), n.interpolation)
                          })
                        )
                      var a,
                        s =
                          'string' == typeof e &&
                          (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables
                            ? n.interpolation.skipOnVariables
                            : this.options.interpolation.skipOnVariables)
                      if (s) {
                        var u = e.match(this.interpolator.nestingRegexp)
                        a = u && u.length
                      }
                      var c = n.replace && 'string' != typeof n.replace ? n.replace : n
                      if (
                        (this.options.interpolation.defaultVariables &&
                          (c = eg(eg({}, this.options.interpolation.defaultVariables), c)),
                        (e = this.interpolator.interpolate(e, c, n.lng || this.language, n)),
                        s)
                      ) {
                        var l = e.match(this.interpolator.nestingRegexp)
                        a < (l && l.length) && (n.nest = !1)
                      }
                      !1 !== n.nest &&
                        (e = this.interpolator.nest(
                          e,
                          function () {
                            for (var e = arguments.length, r = Array(e), a = 0; a < e; a++)
                              r[a] = arguments[a]
                            return o && o[0] === r[0] && !n.context
                              ? (i.logger.warn(
                                  'It seems you are nesting recursively key: '
                                    .concat(r[0], ' in key: ')
                                    .concat(t[0])
                                ),
                                null)
                              : i.translate.apply(i, r.concat([t]))
                          },
                          n
                        )),
                        n.interpolation && this.interpolator.reset()
                    }
                    var f = n.postProcess || this.options.postProcess,
                      p = 'string' == typeof f ? [f] : f
                    return (
                      null != e &&
                        p &&
                        p.length &&
                        !1 !== n.applyPostProcessor &&
                        (e = ef.handle(
                          p,
                          e,
                          t,
                          this.options && this.options.postProcessPassResolved
                            ? eg({ i18nResolved: r }, n)
                            : n,
                          this
                        )),
                      e
                    )
                  }
                },
                {
                  key: 'resolve',
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      i,
                      a = this,
                      s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    return (
                      'string' == typeof e && (e = [e]),
                      e.forEach(function (e) {
                        if (!a.isValidLookup(t)) {
                          var u = a.extractFromKey(e, s),
                            c = u.key
                          n = c
                          var l = u.namespaces
                          a.options.fallbackNS && (l = l.concat(a.options.fallbackNS))
                          var f = void 0 !== s.count && 'string' != typeof s.count,
                            p =
                              f &&
                              !s.ordinal &&
                              0 === s.count &&
                              a.pluralResolver.shouldUseIntlApi(),
                            g =
                              void 0 !== s.context &&
                              ('string' == typeof s.context || 'number' == typeof s.context) &&
                              '' !== s.context,
                            d = s.lngs
                              ? s.lngs
                              : a.languageUtils.toResolveHierarchy(
                                  s.lng || a.language,
                                  s.fallbackLng
                                )
                          l.forEach(function (e) {
                            a.isValidLookup(t) ||
                              ((i = e),
                              !ed[''.concat(d[0], '-').concat(e)] &&
                                a.utils &&
                                a.utils.hasLoadedNamespace &&
                                !a.utils.hasLoadedNamespace(i) &&
                                ((ed[''.concat(d[0], '-').concat(e)] = !0),
                                a.logger.warn(
                                  'key "'
                                    .concat(n, '" for languages "')
                                    .concat(d.join(', '), '" won\'t get resolved as namespace "')
                                    .concat(i, '" was not yet loaded'),
                                  'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                                )),
                              d.forEach(function (n) {
                                if (!a.isValidLookup(t)) {
                                  o = n
                                  var i,
                                    u = [c]
                                  if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                    a.i18nFormat.addLookupKeys(u, c, n, e, s)
                                  else {
                                    f && (l = a.pluralResolver.getSuffix(n, s.count, s))
                                    var l,
                                      d = ''.concat(a.options.pluralSeparator, 'zero')
                                    if ((f && (u.push(c + l), p && u.push(c + d)), g)) {
                                      var h = ''
                                        .concat(c)
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context)
                                      u.push(h), f && (u.push(h + l), p && u.push(h + d))
                                    }
                                  }
                                  for (; (i = u.pop()); )
                                    a.isValidLookup(t) || ((r = i), (t = a.getResource(n, e, i, s)))
                                }
                              }))
                          })
                        }
                      }),
                      { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
                    )
                  }
                },
                {
                  key: 'isValidLookup',
                  value: function (e) {
                    return (
                      void 0 !== e &&
                      !(!this.options.returnNull && null === e) &&
                      !(!this.options.returnEmptyString && '' === e)
                    )
                  }
                },
                {
                  key: 'getResource',
                  value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                    return this.i18nFormat && this.i18nFormat.getResource
                      ? this.i18nFormat.getResource(e, t, n, r)
                      : this.resourceStore.getResource(e, t, n, r)
                  }
                }
              ],
              [
                {
                  key: 'hasDefaultValue',
                  value: function (e) {
                    var t = 'defaultValue'
                    for (var n in e)
                      if (
                        Object.prototype.hasOwnProperty.call(e, n) &&
                        t === n.substring(0, t.length) &&
                        void 0 !== e[n]
                      )
                        return !0
                    return !1
                  }
                }
              ]
            ),
            r
          )
        })(G)
      function ey(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
      }
      var ev = (function () {
          function e(t) {
            p(this, e),
              (this.options = t),
              (this.supportedLngs = this.options.supportedLngs || !1),
              (this.logger = Y.create('languageUtils'))
          }
          return (
            d(e, [
              {
                key: 'getScriptPartFromCode',
                value: function (e) {
                  if (!e || 0 > e.indexOf('-')) return null
                  var t = e.split('-')
                  return 2 === t.length
                    ? null
                    : (t.pop(), 'x' === t[t.length - 1].toLowerCase())
                    ? null
                    : this.formatLanguageCode(t.join('-'))
                }
              },
              {
                key: 'getLanguagePartFromCode',
                value: function (e) {
                  if (!e || 0 > e.indexOf('-')) return e
                  var t = e.split('-')
                  return this.formatLanguageCode(t[0])
                }
              },
              {
                key: 'formatLanguageCode',
                value: function (e) {
                  if ('string' == typeof e && e.indexOf('-') > -1) {
                    var t = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'],
                      n = e.split('-')
                    return (
                      this.options.lowerCaseLng
                        ? (n = n.map(function (e) {
                            return e.toLowerCase()
                          }))
                        : 2 === n.length
                        ? ((n[0] = n[0].toLowerCase()),
                          (n[1] = n[1].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = ey(n[1].toLowerCase())))
                        : 3 === n.length &&
                          ((n[0] = n[0].toLowerCase()),
                          2 === n[1].length && (n[1] = n[1].toUpperCase()),
                          'sgn' !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                          t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = ey(n[1].toLowerCase())),
                          t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = ey(n[2].toLowerCase()))),
                      n.join('-')
                    )
                  }
                  return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
              },
              {
                key: 'isSupportedCode',
                value: function (e) {
                  return (
                    ('languageOnly' === this.options.load ||
                      this.options.nonExplicitSupportedLngs) &&
                      (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs ||
                      !this.supportedLngs.length ||
                      this.supportedLngs.indexOf(e) > -1
                  )
                }
              },
              {
                key: 'getBestMatchFromCodes',
                value: function (e) {
                  var t,
                    n = this
                  return e
                    ? (e.forEach(function (e) {
                        if (!t) {
                          var r = n.formatLanguageCode(e)
                          ;(!n.options.supportedLngs || n.isSupportedCode(r)) && (t = r)
                        }
                      }),
                      !t &&
                        this.options.supportedLngs &&
                        e.forEach(function (e) {
                          if (!t) {
                            var r = n.getLanguagePartFromCode(e)
                            if (n.isSupportedCode(r)) return (t = r)
                            t = n.options.supportedLngs.find(function (e) {
                              if (0 === e.indexOf(r)) return e
                            })
                          }
                        }),
                      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                      t)
                    : null
                }
              },
              {
                key: 'getFallbackCodes',
                value: function (e, t) {
                  if (!e) return []
                  if (
                    ('function' == typeof e && (e = e(t)),
                    'string' == typeof e && (e = [e]),
                    '[object Array]' === Object.prototype.toString.apply(e))
                  )
                    return e
                  if (!t) return e.default || []
                  var n = e[t]
                  return (
                    n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                  )
                }
              },
              {
                key: 'toResolveHierarchy',
                value: function (e, t) {
                  var n = this,
                    r = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                    o = [],
                    i = function (e) {
                      e &&
                        (n.isSupportedCode(e)
                          ? o.push(e)
                          : n.logger.warn(
                              'rejecting language code not found in supportedLngs: '.concat(e)
                            ))
                    }
                  return (
                    'string' == typeof e && e.indexOf('-') > -1
                      ? ('languageOnly' !== this.options.load && i(this.formatLanguageCode(e)),
                        'languageOnly' !== this.options.load &&
                          'currentOnly' !== this.options.load &&
                          i(this.getScriptPartFromCode(e)),
                        'currentOnly' !== this.options.load && i(this.getLanguagePartFromCode(e)))
                      : 'string' == typeof e && i(this.formatLanguageCode(e)),
                    r.forEach(function (e) {
                      0 > o.indexOf(e) && i(n.formatLanguageCode(e))
                    }),
                    o
                  )
                }
              }
            ]),
            e
          )
        })(),
        em = [
          {
            lngs: [
              'ach',
              'ak',
              'am',
              'arn',
              'br',
              'fil',
              'gun',
              'ln',
              'mfe',
              'mg',
              'mi',
              'oc',
              'pt',
              'pt-BR',
              'tg',
              'tl',
              'ti',
              'tr',
              'uz',
              'wa'
            ],
            nr: [1, 2],
            fc: 1
          },
          {
            lngs: [
              'af',
              'an',
              'ast',
              'az',
              'bg',
              'bn',
              'ca',
              'da',
              'de',
              'dev',
              'el',
              'en',
              'eo',
              'es',
              'et',
              'eu',
              'fi',
              'fo',
              'fur',
              'fy',
              'gl',
              'gu',
              'ha',
              'hi',
              'hu',
              'hy',
              'ia',
              'it',
              'kk',
              'kn',
              'ku',
              'lb',
              'mai',
              'ml',
              'mn',
              'mr',
              'nah',
              'nap',
              'nb',
              'ne',
              'nl',
              'nn',
              'no',
              'nso',
              'pa',
              'pap',
              'pms',
              'ps',
              'pt-PT',
              'rm',
              'sco',
              'se',
              'si',
              'so',
              'son',
              'sq',
              'sv',
              'sw',
              'ta',
              'te',
              'tk',
              'ur',
              'yo'
            ],
            nr: [1, 2],
            fc: 2
          },
          {
            lngs: [
              'ay',
              'bo',
              'cgg',
              'fa',
              'ht',
              'id',
              'ja',
              'jbo',
              'ka',
              'km',
              'ko',
              'ky',
              'lo',
              'ms',
              'sah',
              'su',
              'th',
              'tt',
              'ug',
              'vi',
              'wo',
              'zh'
            ],
            nr: [1],
            fc: 3
          },
          { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
          { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
          { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
          { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
          { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
          { lngs: ['fr'], nr: [1, 2], fc: 9 },
          { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
          { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
          { lngs: ['is'], nr: [1, 2], fc: 12 },
          { lngs: ['jv'], nr: [0, 1], fc: 13 },
          { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
          { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
          { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
          { lngs: ['mk'], nr: [1, 2], fc: 17 },
          { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
          { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
          { lngs: ['or'], nr: [2, 1], fc: 2 },
          { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
          { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
          { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 }
        ],
        eb = {
          1: function (e) {
            return Number(e > 1)
          },
          2: function (e) {
            return Number(1 != e)
          },
          3: function (e) {
            return 0
          },
          4: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          5: function (e) {
            return Number(
              0 == e
                ? 0
                : 1 == e
                ? 1
                : 2 == e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5
            )
          },
          6: function (e) {
            return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
          },
          7: function (e) {
            return Number(
              1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
            )
          },
          8: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
          },
          9: function (e) {
            return Number(e >= 2)
          },
          10: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
          },
          11: function (e) {
            return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
          },
          12: function (e) {
            return Number(e % 10 != 1 || e % 100 == 11)
          },
          13: function (e) {
            return Number(0 !== e)
          },
          14: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
          },
          15: function (e) {
            return Number(
              e % 10 == 1 && e % 100 != 11
                ? 0
                : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
                ? 1
                : 2
            )
          },
          16: function (e) {
            return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
          },
          17: function (e) {
            return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1)
          },
          18: function (e) {
            return Number(0 == e ? 0 : 1 == e ? 1 : 2)
          },
          19: function (e) {
            return Number(
              1 == e
                ? 0
                : 0 == e || (e % 100 > 1 && e % 100 < 11)
                ? 1
                : e % 100 > 10 && e % 100 < 20
                ? 2
                : 3
            )
          },
          20: function (e) {
            return Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2)
          },
          21: function (e) {
            return Number(
              e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0
            )
          },
          22: function (e) {
            return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
          }
        },
        eO = ['v1', 'v2', 'v3'],
        ek = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
        eS = (function () {
          function e(t) {
            var n,
              r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            p(this, e),
              (this.languageUtils = t),
              (this.options = r),
              (this.logger = Y.create('pluralResolver')),
              (this.options.compatibilityJSON && 'v4' !== this.options.compatibilityJSON) ||
                ('undefined' != typeof Intl && Intl.PluralRules) ||
                ((this.options.compatibilityJSON = 'v3'),
                this.logger.error(
                  'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
                )),
              (this.rules =
                ((n = {}),
                em.forEach(function (e) {
                  e.lngs.forEach(function (t) {
                    n[t] = { numbers: e.nr, plurals: eb[e.fc] }
                  })
                }),
                n))
          }
          return (
            d(e, [
              {
                key: 'addRule',
                value: function (e, t) {
                  this.rules[e] = t
                }
              },
              {
                key: 'getRule',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  if (this.shouldUseIntlApi())
                    try {
                      return new Intl.PluralRules(e, { type: t.ordinal ? 'ordinal' : 'cardinal' })
                    } catch (n) {
                      return
                    }
                  return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
              },
              {
                key: 'needsPlural',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = this.getRule(e, t)
                  return this.shouldUseIntlApi()
                    ? n && n.resolvedOptions().pluralCategories.length > 1
                    : n && n.numbers.length > 1
                }
              },
              {
                key: 'getPluralFormsOfKey',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  return this.getSuffixes(e, n).map(function (e) {
                    return ''.concat(t).concat(e)
                  })
                }
              },
              {
                key: 'getSuffixes',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = this.getRule(e, n)
                  return r
                    ? this.shouldUseIntlApi()
                      ? r
                          .resolvedOptions()
                          .pluralCategories.sort(function (e, t) {
                            return ek[e] - ek[t]
                          })
                          .map(function (e) {
                            return ''.concat(t.options.prepend).concat(e)
                          })
                      : r.numbers.map(function (r) {
                          return t.getSuffix(e, r, n)
                        })
                    : []
                }
              },
              {
                key: 'getSuffix',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = this.getRule(e, n)
                  return r
                    ? this.shouldUseIntlApi()
                      ? ''.concat(this.options.prepend).concat(r.select(t))
                      : this.getSuffixRetroCompatible(r, t)
                    : (this.logger.warn('no plural rule found for: '.concat(e)), '')
                }
              },
              {
                key: 'getSuffixRetroCompatible',
                value: function (e, t) {
                  var n = this,
                    r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                    o = e.numbers[r]
                  this.options.simplifyPluralSuffix &&
                    2 === e.numbers.length &&
                    1 === e.numbers[0] &&
                    (2 === o ? (o = 'plural') : 1 === o && (o = ''))
                  var i = function () {
                    return n.options.prepend && o.toString()
                      ? n.options.prepend + o.toString()
                      : o.toString()
                  }
                  return 'v1' === this.options.compatibilityJSON
                    ? 1 === o
                      ? ''
                      : 'number' == typeof o
                      ? '_plural_'.concat(o.toString())
                      : i()
                    : 'v2' === this.options.compatibilityJSON ||
                      (this.options.simplifyPluralSuffix &&
                        2 === e.numbers.length &&
                        1 === e.numbers[0])
                    ? i()
                    : this.options.prepend && r.toString()
                    ? this.options.prepend + r.toString()
                    : r.toString()
                }
              },
              {
                key: 'shouldUseIntlApi',
                value: function () {
                  return !eO.includes(this.options.compatibilityJSON)
                }
              }
            ]),
            e
          )
        })()
      function ew(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ex(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ew(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ew(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ej = (function () {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          p(this, e),
            (this.logger = Y.create('interpolator')),
            (this.options = t),
            (this.format =
              (t.interpolation && t.interpolation.format) ||
              function (e) {
                return e
              }),
            this.init(t)
        }
        return (
          d(e, [
            {
              key: 'init',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                e.interpolation || (e.interpolation = { escapeValue: !0 })
                var t = e.interpolation
                ;(this.escape = void 0 !== t.escape ? t.escape : ei),
                  (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                  (this.useRawValueToEscape =
                    void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                  (this.prefix = t.prefix ? er(t.prefix) : t.prefixEscaped || '{{'),
                  (this.suffix = t.suffix ? er(t.suffix) : t.suffixEscaped || '}}'),
                  (this.formatSeparator = t.formatSeparator
                    ? t.formatSeparator
                    : t.formatSeparator || ','),
                  (this.unescapePrefix = t.unescapeSuffix ? '' : t.unescapePrefix || '-'),
                  (this.unescapeSuffix = this.unescapePrefix ? '' : t.unescapeSuffix || ''),
                  (this.nestingPrefix = t.nestingPrefix
                    ? er(t.nestingPrefix)
                    : t.nestingPrefixEscaped || er('$t(')),
                  (this.nestingSuffix = t.nestingSuffix
                    ? er(t.nestingSuffix)
                    : t.nestingSuffixEscaped || er(')')),
                  (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                    ? t.nestingOptionsSeparator
                    : t.nestingOptionsSeparator || ','),
                  (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                  (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
                  this.resetRegExp()
              }
            },
            {
              key: 'reset',
              value: function () {
                this.options && this.init(this.options)
              }
            },
            {
              key: 'resetRegExp',
              value: function () {
                var e = ''.concat(this.prefix, '(.+?)').concat(this.suffix)
                this.regexp = RegExp(e, 'g')
                var t = ''
                  .concat(this.prefix)
                  .concat(this.unescapePrefix, '(.+?)')
                  .concat(this.unescapeSuffix)
                  .concat(this.suffix)
                this.regexpUnescape = RegExp(t, 'g')
                var n = ''.concat(this.nestingPrefix, '(.+?)').concat(this.nestingSuffix)
                this.nestingRegexp = RegExp(n, 'g')
              }
            },
            {
              key: 'interpolate',
              value: function (e, t, n, r) {
                var o,
                  i,
                  a,
                  s = this,
                  u =
                    (this.options &&
                      this.options.interpolation &&
                      this.options.interpolation.defaultVariables) ||
                    {}
                function c(e) {
                  return e.replace(/\$/g, '$$$$')
                }
                var l = function (e) {
                  if (0 > e.indexOf(s.formatSeparator)) {
                    var o = en(t, u, e)
                    return s.alwaysFormat
                      ? s.format(o, void 0, n, ex(ex(ex({}, r), t), {}, { interpolationkey: e }))
                      : o
                  }
                  var i = e.split(s.formatSeparator),
                    a = i.shift().trim(),
                    c = i.join(s.formatSeparator).trim()
                  return s.format(
                    en(t, u, a),
                    c,
                    n,
                    ex(ex(ex({}, r), t), {}, { interpolationkey: a })
                  )
                }
                this.resetRegExp()
                var f =
                    (r && r.missingInterpolationHandler) ||
                    this.options.missingInterpolationHandler,
                  p =
                    r && r.interpolation && void 0 !== r.interpolation.skipOnVariables
                      ? r.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables
                return (
                  [
                    {
                      regex: this.regexpUnescape,
                      safeValue: function (e) {
                        return c(e)
                      }
                    },
                    {
                      regex: this.regexp,
                      safeValue: function (e) {
                        return s.escapeValue ? c(s.escape(e)) : c(e)
                      }
                    }
                  ].forEach(function (t) {
                    for (a = 0; (o = t.regex.exec(e)); ) {
                      var n = o[1].trim()
                      if (void 0 === (i = l(n))) {
                        if ('function' == typeof f) {
                          var u = f(e, o, r)
                          i = 'string' == typeof u ? u : ''
                        } else if (r && r.hasOwnProperty(n)) i = ''
                        else if (p) {
                          i = o[0]
                          continue
                        } else
                          s.logger.warn(
                            'missed to pass in variable '.concat(n, ' for interpolating ').concat(e)
                          ),
                            (i = '')
                      } else 'string' == typeof i || s.useRawValueToEscape || (i = Q(i))
                      var c = t.safeValue(i)
                      if (
                        ((e = e.replace(o[0], c)),
                        p
                          ? ((t.regex.lastIndex += i.length), (t.regex.lastIndex -= o[0].length))
                          : (t.regex.lastIndex = 0),
                        ++a >= s.maxReplaces)
                      )
                        break
                    }
                  }),
                  e
                )
              }
            },
            {
              key: 'nest',
              value: function (e, t) {
                var n,
                  r,
                  o = this,
                  i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = ex({}, i)
                function s(e, t) {
                  var n = this.nestingOptionsSeparator
                  if (0 > e.indexOf(n)) return e
                  var r = e.split(RegExp(''.concat(n, '[ ]*{'))),
                    o = '{'.concat(r[1])
                  e = r[0]
                  var i = (o = this.interpolate(o, a)).match(/'/g),
                    s = o.match(/"/g)
                  ;((i && i.length % 2 == 0 && !s) || s.length % 2 != 0) &&
                    (o = o.replace(/'/g, '"'))
                  try {
                    ;(a = JSON.parse(o)), t && (a = ex(ex({}, t), a))
                  } catch (u) {
                    return (
                      this.logger.warn(
                        'failed parsing options string in nesting for key '.concat(e),
                        u
                      ),
                      ''.concat(e).concat(n).concat(o)
                    )
                  }
                  return delete a.defaultValue, e
                }
                for (
                  a.applyPostProcessor = !1, delete a.defaultValue;
                  (n = this.nestingRegexp.exec(e));

                ) {
                  var u = [],
                    c = !1
                  if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                    var l = n[1].split(this.formatSeparator).map(function (e) {
                      return e.trim()
                    })
                    ;(n[1] = l.shift()), (u = l), (c = !0)
                  }
                  if (
                    (r = t(s.call(this, n[1].trim(), a), a)) &&
                    n[0] === e &&
                    'string' != typeof r
                  )
                    return r
                  'string' != typeof r && (r = Q(r)),
                    r ||
                      (this.logger.warn(
                        'missed to resolve '.concat(n[1], ' for nesting ').concat(e)
                      ),
                      (r = '')),
                    c &&
                      (r = u.reduce(function (e, t) {
                        return o.format(
                          e,
                          t,
                          i.lng,
                          ex(ex({}, i), {}, { interpolationkey: n[1].trim() })
                        )
                      }, r.trim())),
                    (e = e.replace(n[0], r)),
                    (this.regexp.lastIndex = 0)
                }
                return e
              }
            }
          ]),
          e
        )
      })()
      function eP(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function eL(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eP(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eP(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function eN(e) {
        var t = {}
        return function (n, r, o) {
          var i = r + JSON.stringify(o),
            a = t[i]
          return a || ((a = e(r, o)), (t[i] = a)), a(n)
        }
      }
      var eR = (function () {
        function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          p(this, e),
            (this.logger = Y.create('formatter')),
            (this.options = t),
            (this.formats = {
              number: eN(function (e, t) {
                var n = new Intl.NumberFormat(e, t)
                return function (e) {
                  return n.format(e)
                }
              }),
              currency: eN(function (e, t) {
                var n = new Intl.NumberFormat(e, eL(eL({}, t), {}, { style: 'currency' }))
                return function (e) {
                  return n.format(e)
                }
              }),
              datetime: eN(function (e, t) {
                var n = new Intl.DateTimeFormat(e, eL({}, t))
                return function (e) {
                  return n.format(e)
                }
              }),
              relativetime: eN(function (e, t) {
                var n = new Intl.RelativeTimeFormat(e, eL({}, t))
                return function (e) {
                  return n.format(e, t.range || 'day')
                }
              }),
              list: eN(function (e, t) {
                var n = new Intl.ListFormat(e, eL({}, t))
                return function (e) {
                  return n.format(e)
                }
              })
            }),
            this.init(t)
        }
        return (
          d(e, [
            {
              key: 'init',
              value: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : { interpolation: {} },
                  n = t.interpolation
                this.formatSeparator = n.formatSeparator
                  ? n.formatSeparator
                  : n.formatSeparator || ','
              }
            },
            {
              key: 'add',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = t
              }
            },
            {
              key: 'addCached',
              value: function (e, t) {
                this.formats[e.toLowerCase().trim()] = eN(t)
              }
            },
            {
              key: 'format',
              value: function (e, t, n, o) {
                var s = this
                return t.split(this.formatSeparator).reduce(function (e, t) {
                  var u = (function (e) {
                      var t = e.toLowerCase().trim(),
                        n = {}
                      if (e.indexOf('(') > -1) {
                        var o = e.split('(')
                        t = o[0].toLowerCase().trim()
                        var s = o[1].substring(0, o[1].length - 1)
                        'currency' === t && 0 > s.indexOf(':')
                          ? n.currency || (n.currency = s.trim())
                          : 'relativetime' === t && 0 > s.indexOf(':')
                          ? n.range || (n.range = s.trim())
                          : s.split(';').forEach(function (e) {
                              if (e) {
                                var t,
                                  o =
                                    r((t = e.split(':'))) ||
                                    (function (e) {
                                      if (
                                        ('undefined' != typeof Symbol &&
                                          null != e[Symbol.iterator]) ||
                                        null != e['@@iterator']
                                      )
                                        return Array.from(e)
                                    })(t) ||
                                    i(t) ||
                                    a(),
                                  s = o[0],
                                  u = o
                                    .slice(1)
                                    .join(':')
                                    .trim()
                                    .replace(/^'+|'+$/g, '')
                                n[s.trim()] || (n[s.trim()] = u),
                                  'false' === u && (n[s.trim()] = !1),
                                  'true' === u && (n[s.trim()] = !0),
                                  isNaN(u) || (n[s.trim()] = parseInt(u, 10))
                              }
                            })
                      }
                      return { formatName: t, formatOptions: n }
                    })(t),
                    c = u.formatName,
                    l = u.formatOptions
                  if (s.formats[c]) {
                    var f = e
                    try {
                      var p = (o && o.formatParams && o.formatParams[o.interpolationkey]) || {},
                        g = p.locale || p.lng || o.locale || o.lng || n
                      f = s.formats[c](e, g, eL(eL(eL({}, l), o), p))
                    } catch (d) {
                      s.logger.warn(d)
                    }
                    return f
                  }
                  return s.logger.warn('there was no format function for '.concat(c)), e
                }, e)
              }
            }
          ]),
          e
        )
      })()
      function eC(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function eE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eC(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eC(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var eD = (function (e) {
        K(r, e)
        var t,
          n =
            ((t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                )
              } catch (e) {
                return !1
              }
            })()),
            function () {
              var e,
                n = H(r)
              if (t) {
                var o = H(this).constructor
                e = Reflect.construct(n, arguments, o)
              } else e = n.apply(this, arguments)
              return z(this, e)
            })
        function r(e, t, o) {
          var i,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
          return (
            p(this, r),
            (i = n.call(this)),
            ea && G.call(_(i)),
            (i.backend = e),
            (i.store = t),
            (i.services = o),
            (i.languageUtils = o.languageUtils),
            (i.options = a),
            (i.logger = Y.create('backendConnector')),
            (i.waitingReads = []),
            (i.maxParallelReads = a.maxParallelReads || 10),
            (i.readingCalls = 0),
            (i.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
            (i.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
            (i.state = {}),
            (i.queue = []),
            i.backend && i.backend.init && i.backend.init(o, a.backend, a),
            i
          )
        }
        return (
          d(r, [
            {
              key: 'queueLoad',
              value: function (e, t, n, r) {
                var o = this,
                  i = {},
                  a = {},
                  s = {},
                  u = {}
                return (
                  e.forEach(function (e) {
                    var r = !0
                    t.forEach(function (t) {
                      var s = ''.concat(e, '|').concat(t)
                      !n.reload && o.store.hasResourceBundle(e, t)
                        ? (o.state[s] = 2)
                        : o.state[s] < 0 ||
                          (1 === o.state[s]
                            ? void 0 === a[s] && (a[s] = !0)
                            : ((o.state[s] = 1),
                              (r = !1),
                              void 0 === a[s] && (a[s] = !0),
                              void 0 === i[s] && (i[s] = !0),
                              void 0 === u[t] && (u[t] = !0)))
                    }),
                      r || (s[e] = !0)
                  }),
                  (Object.keys(i).length || Object.keys(a).length) &&
                    this.queue.push({
                      pending: a,
                      pendingCount: Object.keys(a).length,
                      loaded: {},
                      errors: [],
                      callback: r
                    }),
                  {
                    toLoad: Object.keys(i),
                    pending: Object.keys(a),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(u)
                  }
                )
              }
            },
            {
              key: 'loaded',
              value: function (e, t, n) {
                var r = e.split('|'),
                  o = r[0],
                  i = r[1]
                t && this.emit('failedLoading', o, i, t),
                  n && this.store.addResourceBundle(o, i, n),
                  (this.state[e] = t ? -1 : 2)
                var a = {}
                this.queue.forEach(function (n) {
                  var r, s, u, c, l
                  ;((u = (s = Z(n.loaded, [o], Object)).obj)[(c = s.k)] = u[c] || []),
                    r && (u[c] = u[c].concat(i)),
                    r || u[c].push(i),
                    void 0 !== (l = n).pending[e] && (delete l.pending[e], l.pendingCount--),
                    t && n.errors.push(t),
                    0 !== n.pendingCount ||
                      n.done ||
                      (Object.keys(n.loaded).forEach(function (e) {
                        a[e] || (a[e] = {})
                        var t = n.loaded[e]
                        t.length &&
                          t.forEach(function (t) {
                            void 0 === a[e][t] && (a[e][t] = !0)
                          })
                      }),
                      (n.done = !0),
                      n.errors.length ? n.callback(n.errors) : n.callback())
                }),
                  this.emit('loaded', a),
                  (this.queue = this.queue.filter(function (e) {
                    return !e.done
                  }))
              }
            },
            {
              key: 'read',
              value: function (e, t, n) {
                var r = this,
                  o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                  i =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : this.retryTimeout,
                  a = arguments.length > 5 ? arguments[5] : void 0
                if (!e.length) return a(null, {})
                if (this.readingCalls >= this.maxParallelReads) {
                  this.waitingReads.push({
                    lng: e,
                    ns: t,
                    fcName: n,
                    tried: o,
                    wait: i,
                    callback: a
                  })
                  return
                }
                return (
                  this.readingCalls++,
                  this.backend[n](e, t, function (s, u) {
                    if ((r.readingCalls--, r.waitingReads.length > 0)) {
                      var c = r.waitingReads.shift()
                      r.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback)
                    }
                    if (s && u && o < r.maxRetries) {
                      setTimeout(function () {
                        r.read.call(r, e, t, n, o + 1, 2 * i, a)
                      }, i)
                      return
                    }
                    a(s, u)
                  })
                )
              }
            },
            {
              key: 'prepareLoading',
              value: function (e, t) {
                var n = this,
                  r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  o = arguments.length > 3 ? arguments[3] : void 0
                if (!this.backend)
                  return (
                    this.logger.warn(
                      'No backend was added via i18next.use. Will not load resources.'
                    ),
                    o && o()
                  )
                'string' == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                  'string' == typeof t && (t = [t])
                var i = this.queueLoad(e, t, r, o)
                if (!i.toLoad.length) return i.pending.length || o(), null
                i.toLoad.forEach(function (e) {
                  n.loadOne(e)
                })
              }
            },
            {
              key: 'load',
              value: function (e, t, n) {
                this.prepareLoading(e, t, {}, n)
              }
            },
            {
              key: 'reload',
              value: function (e, t, n) {
                this.prepareLoading(e, t, { reload: !0 }, n)
              }
            },
            {
              key: 'loadOne',
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                  r = e.split('|'),
                  o = r[0],
                  i = r[1]
                this.read(o, i, 'read', void 0, void 0, function (r, a) {
                  r &&
                    t.logger.warn(
                      ''
                        .concat(n, 'loading namespace ')
                        .concat(i, ' for language ')
                        .concat(o, ' failed'),
                      r
                    ),
                    !r &&
                      a &&
                      t.logger.log(
                        ''.concat(n, 'loaded namespace ').concat(i, ' for language ').concat(o),
                        a
                      ),
                    t.loaded(e, r, a)
                })
              }
            },
            {
              key: 'saveMissing',
              value: function (e, t, n, r, o) {
                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                if (
                  this.services.utils &&
                  this.services.utils.hasLoadedNamespace &&
                  !this.services.utils.hasLoadedNamespace(t)
                ) {
                  this.logger.warn(
                    'did not save key "'
                      .concat(n, '" as the namespace "')
                      .concat(t, '" was not yet loaded'),
                    'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
                  )
                  return
                }
                null != n &&
                  '' !== n &&
                  (this.backend &&
                    this.backend.create &&
                    this.backend.create(e, t, n, r, null, eE(eE({}, i), {}, { isUpdate: o })),
                  e && e[0] && this.store.addResource(e[0], t, n, r))
              }
            }
          ]),
          r
        )
      })(G)
      function eI(e) {
        return (
          'string' == typeof e.ns && (e.ns = [e.ns]),
          'string' == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
          'string' == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
          e.supportedLngs &&
            0 > e.supportedLngs.indexOf('cimode') &&
            (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
          e
        )
      }
      function eF(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function eT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? eF(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : eF(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function eA() {}
      var eV = (function (e) {
        K(r, e)
        var t,
          n =
            ((t = (function () {
              if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                return !1
              if ('function' == typeof Proxy) return !0
              try {
                return (
                  Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                )
              } catch (e) {
                return !1
              }
            })()),
            function () {
              var e,
                n = H(r)
              if (t) {
                var o = H(this).constructor
                e = Reflect.construct(n, arguments, o)
              } else e = n.apply(this, arguments)
              return z(this, e)
            })
        function r() {
          var e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = arguments.length > 1 ? arguments[1] : void 0
          if (
            (p(this, r),
            (e = n.call(this)),
            ea && G.call(_(e)),
            (e.options = eI(t)),
            (e.services = {}),
            (e.logger = Y),
            (e.modules = { external: [] }),
            !(function (e) {
              Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(function (t) {
                'function' == typeof e[t] && (e[t] = e[t].bind(e))
              })
            })(_(e)),
            o && !e.isInitialized && !t.isClone)
          ) {
            if (!e.options.initImmediate) return e.init(t, o), z(e, _(e))
            setTimeout(function () {
              e.init(t, o)
            }, 0)
          }
          return e
        }
        return (
          d(r, [
            {
              key: 'init',
              value: function () {
                var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = arguments.length > 1 ? arguments[1] : void 0
                'function' == typeof t && ((n = t), (t = {})),
                  !t.defaultNS &&
                    !1 !== t.defaultNS &&
                    t.ns &&
                    ('string' == typeof t.ns
                      ? (t.defaultNS = t.ns)
                      : 0 > t.ns.indexOf('translation') && (t.defaultNS = t.ns[0]))
                var r = {
                  debug: !1,
                  initImmediate: !0,
                  ns: ['translation'],
                  defaultNS: ['translation'],
                  fallbackLng: ['dev'],
                  fallbackNS: !1,
                  supportedLngs: !1,
                  nonExplicitSupportedLngs: !1,
                  load: 'all',
                  preload: !1,
                  simplifyPluralSuffix: !0,
                  keySeparator: '.',
                  nsSeparator: ':',
                  pluralSeparator: '_',
                  contextSeparator: '_',
                  partialBundledLanguages: !1,
                  saveMissing: !1,
                  updateMissing: !1,
                  saveMissingTo: 'fallback',
                  saveMissingPlurals: !0,
                  missingKeyHandler: !1,
                  missingInterpolationHandler: !1,
                  postProcess: !1,
                  postProcessPassResolved: !1,
                  returnNull: !0,
                  returnEmptyString: !0,
                  returnObjects: !1,
                  joinArrays: !1,
                  returnedObjectHandler: !1,
                  parseMissingKeyHandler: !1,
                  appendNamespaceToMissingKey: !1,
                  appendNamespaceToCIMode: !1,
                  overloadTranslationOptionHandler: function (e) {
                    var t = {}
                    if (
                      ('object' === s(e[1]) && (t = e[1]),
                      'string' == typeof e[1] && (t.defaultValue = e[1]),
                      'string' == typeof e[2] && (t.tDescription = e[2]),
                      'object' === s(e[2]) || 'object' === s(e[3]))
                    ) {
                      var n = e[3] || e[2]
                      Object.keys(n).forEach(function (e) {
                        t[e] = n[e]
                      })
                    }
                    return t
                  },
                  interpolation: {
                    escapeValue: !0,
                    format: function (e, t, n, r) {
                      return e
                    },
                    prefix: '{{',
                    suffix: '}}',
                    formatSeparator: ',',
                    unescapePrefix: '-',
                    nestingPrefix: '$t(',
                    nestingSuffix: ')',
                    nestingOptionsSeparator: ',',
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                  }
                }
                function o(e) {
                  return e ? ('function' == typeof e ? new e() : e) : null
                }
                if (
                  ((this.options = eT(eT(eT({}, r), this.options), eI(t))),
                  'v1' !== this.options.compatibilityAPI &&
                    (this.options.interpolation = eT(
                      eT({}, r.interpolation),
                      this.options.interpolation
                    )),
                  void 0 !== t.keySeparator &&
                    (this.options.userDefinedKeySeparator = t.keySeparator),
                  void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
                  !this.options.isClone)
                ) {
                  this.modules.logger
                    ? Y.init(o(this.modules.logger), this.options)
                    : Y.init(null, this.options),
                    this.modules.formatter
                      ? (i = this.modules.formatter)
                      : 'undefined' != typeof Intl && (i = eR)
                  var i,
                    a = new ev(this.options)
                  this.store = new el(this.options.resources, this.options)
                  var u = this.services
                  ;(u.logger = Y),
                    (u.resourceStore = this.store),
                    (u.languageUtils = a),
                    (u.pluralResolver = new eS(a, {
                      prepend: this.options.pluralSeparator,
                      compatibilityJSON: this.options.compatibilityJSON,
                      simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    })),
                    i &&
                      (!this.options.interpolation.format ||
                        this.options.interpolation.format === r.interpolation.format) &&
                      ((u.formatter = o(i)),
                      u.formatter.init(u, this.options),
                      (this.options.interpolation.format = u.formatter.format.bind(u.formatter))),
                    (u.interpolator = new ej(this.options)),
                    (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                    (u.backendConnector = new eD(
                      o(this.modules.backend),
                      u.resourceStore,
                      u,
                      this.options
                    )),
                    u.backendConnector.on('*', function (t) {
                      for (
                        var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o]
                      e.emit.apply(e, [t].concat(r))
                    }),
                    this.modules.languageDetector &&
                      ((u.languageDetector = o(this.modules.languageDetector)),
                      u.languageDetector.init(u, this.options.detection, this.options)),
                    this.modules.i18nFormat &&
                      ((u.i18nFormat = o(this.modules.i18nFormat)),
                      u.i18nFormat.init && u.i18nFormat.init(this)),
                    (this.translator = new eh(this.services, this.options)),
                    this.translator.on('*', function (t) {
                      for (
                        var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1;
                        o < n;
                        o++
                      )
                        r[o - 1] = arguments[o]
                      e.emit.apply(e, [t].concat(r))
                    }),
                    this.modules.external.forEach(function (t) {
                      t.init && t.init(e)
                    })
                }
                if (
                  ((this.format = this.options.interpolation.format),
                  n || (n = eA),
                  this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
                ) {
                  var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng)
                  c.length > 0 && 'dev' !== c[0] && (this.options.lng = c[0])
                }
                this.services.languageDetector ||
                  this.options.lng ||
                  this.logger.warn('init: no languageDetector is used and no lng is defined'),
                  [
                    'getResource',
                    'hasResourceBundle',
                    'getResourceBundle',
                    'getDataByLanguage'
                  ].forEach(function (t) {
                    e[t] = function () {
                      var n
                      return (n = e.store)[t].apply(n, arguments)
                    }
                  }),
                  [
                    'addResource',
                    'addResources',
                    'addResourceBundle',
                    'removeResourceBundle'
                  ].forEach(function (t) {
                    e[t] = function () {
                      var n
                      return (n = e.store)[t].apply(n, arguments), e
                    }
                  })
                var l = X(),
                  f = function () {
                    var t = function (t, r) {
                      e.isInitialized &&
                        !e.initializedStoreOnce &&
                        e.logger.warn(
                          'init: i18next is already initialized. You should call init just once!'
                        ),
                        (e.isInitialized = !0),
                        e.options.isClone || e.logger.log('initialized', e.options),
                        e.emit('initialized', e.options),
                        l.resolve(r),
                        n(t, r)
                    }
                    if (e.languages && 'v1' !== e.options.compatibilityAPI && !e.isInitialized)
                      return t(null, e.t.bind(e))
                    e.changeLanguage(e.options.lng, t)
                  }
                return (
                  this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0), l
                )
              }
            },
            {
              key: 'loadResources',
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA,
                  r = n,
                  o = 'string' == typeof e ? e : this.language
                if (
                  ('function' == typeof e && (r = e),
                  !this.options.resources || this.options.partialBundledLanguages)
                ) {
                  if (o && 'cimode' === o.toLowerCase()) return r()
                  var i = [],
                    a = function (e) {
                      e &&
                        t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                          0 > i.indexOf(e) && i.push(e)
                        })
                    }
                  o
                    ? a(o)
                    : this.services.languageUtils
                        .getFallbackCodes(this.options.fallbackLng)
                        .forEach(function (e) {
                          return a(e)
                        }),
                    this.options.preload &&
                      this.options.preload.forEach(function (e) {
                        return a(e)
                      }),
                    this.services.backendConnector.load(i, this.options.ns, function (e) {
                      e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language),
                        r(e)
                    })
                } else r(null)
              }
            },
            {
              key: 'reloadResources',
              value: function (e, t, n) {
                var r = X()
                return (
                  e || (e = this.languages),
                  t || (t = this.options.ns),
                  n || (n = eA),
                  this.services.backendConnector.reload(e, t, function (e) {
                    r.resolve(), n(e)
                  }),
                  r
                )
              }
            },
            {
              key: 'use',
              value: function (e) {
                if (!e)
                  throw Error(
                    'You are passing an undefined module! Please check the object you are passing to i18next.use()'
                  )
                if (!e.type)
                  throw Error(
                    'You are passing a wrong module! Please check the object you are passing to i18next.use()'
                  )
                return (
                  'backend' === e.type && (this.modules.backend = e),
                  ('logger' === e.type || (e.log && e.warn && e.error)) &&
                    (this.modules.logger = e),
                  'languageDetector' === e.type && (this.modules.languageDetector = e),
                  'i18nFormat' === e.type && (this.modules.i18nFormat = e),
                  'postProcessor' === e.type && ef.addPostProcessor(e),
                  'formatter' === e.type && (this.modules.formatter = e),
                  '3rdParty' === e.type && this.modules.external.push(e),
                  this
                )
              }
            },
            {
              key: 'setResolvedLanguage',
              value: function (e) {
                if (e && this.languages && !(['cimode', 'dev'].indexOf(e) > -1))
                  for (var t = 0; t < this.languages.length; t++) {
                    var n = this.languages[t]
                    if (
                      !(['cimode', 'dev'].indexOf(n) > -1) &&
                      this.store.hasLanguageSomeTranslations(n)
                    ) {
                      this.resolvedLanguage = n
                      break
                    }
                  }
              }
            },
            {
              key: 'changeLanguage',
              value: function (e, t) {
                var n = this
                this.isLanguageChangingTo = e
                var r = X()
                this.emit('languageChanging', e)
                var o = function (e) {
                    ;(n.language = e),
                      (n.languages = n.services.languageUtils.toResolveHierarchy(e)),
                      (n.resolvedLanguage = void 0),
                      n.setResolvedLanguage(e)
                  },
                  i = function (e, i) {
                    i
                      ? (o(i),
                        n.translator.changeLanguage(i),
                        (n.isLanguageChangingTo = void 0),
                        n.emit('languageChanged', i),
                        n.logger.log('languageChanged', i))
                      : (n.isLanguageChangingTo = void 0),
                      r.resolve(function () {
                        return n.t.apply(n, arguments)
                      }),
                      t &&
                        t(e, function () {
                          return n.t.apply(n, arguments)
                        })
                  },
                  a = function (t) {
                    e || t || !n.services.languageDetector || (t = [])
                    var r =
                      'string' == typeof t ? t : n.services.languageUtils.getBestMatchFromCodes(t)
                    r &&
                      (n.language || o(r),
                      n.translator.language || n.translator.changeLanguage(r),
                      n.services.languageDetector &&
                        n.services.languageDetector.cacheUserLanguage(r)),
                      n.loadResources(r, function (e) {
                        i(e, r)
                      })
                  }
                return (
                  e || !this.services.languageDetector || this.services.languageDetector.async
                    ? !e && this.services.languageDetector && this.services.languageDetector.async
                      ? this.services.languageDetector.detect(a)
                      : a(e)
                    : a(this.services.languageDetector.detect()),
                  r
                )
              }
            },
            {
              key: 'getFixedT',
              value: function (e, t, n) {
                var r = this,
                  o = function e(t, o) {
                    if ('object' !== s(o)) {
                      for (
                        var i, a = arguments.length, u = Array(a > 2 ? a - 2 : 0), c = 2;
                        c < a;
                        c++
                      )
                        u[c - 2] = arguments[c]
                      i = r.options.overloadTranslationOptionHandler([t, o].concat(u))
                    } else i = eT({}, o)
                    ;(i.lng = i.lng || e.lng),
                      (i.lngs = i.lngs || e.lngs),
                      (i.ns = i.ns || e.ns),
                      (i.keyPrefix = i.keyPrefix || n || e.keyPrefix)
                    var l = r.options.keySeparator || '.',
                      f = i.keyPrefix ? ''.concat(i.keyPrefix).concat(l).concat(t) : t
                    return r.t(f, i)
                  }
                return (
                  'string' == typeof e ? (o.lng = e) : (o.lngs = e),
                  (o.ns = t),
                  (o.keyPrefix = n),
                  o
                )
              }
            },
            {
              key: 't',
              value: function () {
                var e
                return this.translator && (e = this.translator).translate.apply(e, arguments)
              }
            },
            {
              key: 'exists',
              value: function () {
                var e
                return this.translator && (e = this.translator).exists.apply(e, arguments)
              }
            },
            {
              key: 'setDefaultNamespace',
              value: function (e) {
                this.options.defaultNS = e
              }
            },
            {
              key: 'hasLoadedNamespace',
              value: function (e) {
                var t = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                if (!this.isInitialized)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18next was not initialized',
                      this.languages
                    ),
                    !1
                  )
                if (!this.languages || !this.languages.length)
                  return (
                    this.logger.warn(
                      'hasLoadedNamespace: i18n.languages were undefined or empty',
                      this.languages
                    ),
                    !1
                  )
                var r = this.resolvedLanguage || this.languages[0],
                  o = !!this.options && this.options.fallbackLng,
                  i = this.languages[this.languages.length - 1]
                if ('cimode' === r.toLowerCase()) return !0
                var a = function (e, n) {
                  var r = t.services.backendConnector.state[''.concat(e, '|').concat(n)]
                  return -1 === r || 2 === r
                }
                if (n.precheck) {
                  var s = n.precheck(this, a)
                  if (void 0 !== s) return s
                }
                return !!(
                  this.hasResourceBundle(r, e) ||
                  !this.services.backendConnector.backend ||
                  (this.options.resources && !this.options.partialBundledLanguages) ||
                  (a(r, e) && (!o || a(i, e)))
                )
              }
            },
            {
              key: 'loadNamespaces',
              value: function (e, t) {
                var n = this,
                  r = X()
                return this.options.ns
                  ? ('string' == typeof e && (e = [e]),
                    e.forEach(function (e) {
                      0 > n.options.ns.indexOf(e) && n.options.ns.push(e)
                    }),
                    this.loadResources(function (e) {
                      r.resolve(), t && t(e)
                    }),
                    r)
                  : (t && t(), Promise.resolve())
              }
            },
            {
              key: 'loadLanguages',
              value: function (e, t) {
                var n = X()
                'string' == typeof e && (e = [e])
                var r = this.options.preload || [],
                  o = e.filter(function (e) {
                    return 0 > r.indexOf(e)
                  })
                return o.length
                  ? ((this.options.preload = r.concat(o)),
                    this.loadResources(function (e) {
                      n.resolve(), t && t(e)
                    }),
                    n)
                  : (t && t(), Promise.resolve())
              }
            },
            {
              key: 'dir',
              value: function (e) {
                return (e ||
                  (e =
                    this.resolvedLanguage ||
                    (this.languages && this.languages.length > 0
                      ? this.languages[0]
                      : this.language)),
                e)
                  ? [
                      'ar',
                      'shu',
                      'sqr',
                      'ssh',
                      'xaa',
                      'yhd',
                      'yud',
                      'aao',
                      'abh',
                      'abv',
                      'acm',
                      'acq',
                      'acw',
                      'acx',
                      'acy',
                      'adf',
                      'ads',
                      'aeb',
                      'aec',
                      'afb',
                      'ajp',
                      'apc',
                      'apd',
                      'arb',
                      'arq',
                      'ars',
                      'ary',
                      'arz',
                      'auz',
                      'avl',
                      'ayh',
                      'ayl',
                      'ayn',
                      'ayp',
                      'bbz',
                      'pga',
                      'he',
                      'iw',
                      'ps',
                      'pbt',
                      'pbu',
                      'pst',
                      'prp',
                      'prd',
                      'ug',
                      'ur',
                      'ydd',
                      'yds',
                      'yih',
                      'ji',
                      'yi',
                      'hbo',
                      'men',
                      'xmn',
                      'fa',
                      'jpr',
                      'peo',
                      'pes',
                      'prs',
                      'dv',
                      'sam',
                      'ckb'
                    ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 ||
                    e.toLowerCase().indexOf('-arab') > 1
                    ? 'rtl'
                    : 'ltr'
                  : 'rtl'
              }
            },
            {
              key: 'cloneInstance',
              value: function () {
                var e = this,
                  t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eA,
                  o = eT(eT(eT({}, this.options), t), { isClone: !0 }),
                  i = new r(o)
                return (
                  (void 0 !== t.debug || void 0 !== t.prefix) && (i.logger = i.logger.clone(t)),
                  ['store', 'services', 'language'].forEach(function (t) {
                    i[t] = e[t]
                  }),
                  (i.services = eT({}, this.services)),
                  (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
                  (i.translator = new eh(i.services, i.options)),
                  i.translator.on('*', function (e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                      n[r - 1] = arguments[r]
                    i.emit.apply(i, [e].concat(n))
                  }),
                  i.init(o, n),
                  (i.translator.options = i.options),
                  (i.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                  }),
                  i
                )
              }
            },
            {
              key: 'toJSON',
              value: function () {
                return {
                  options: this.options,
                  store: this.store,
                  language: this.language,
                  languages: this.languages,
                  resolvedLanguage: this.resolvedLanguage
                }
              }
            }
          ]),
          r
        )
      })(G)
      c(eV, 'createInstance', function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0
        return new eV(e, t)
      })
      var e$ = eV.createInstance()
      ;(e$.createInstance = eV.createInstance),
        e$.createInstance,
        e$.init,
        e$.loadResources,
        e$.reloadResources,
        e$.use,
        e$.changeLanguage,
        e$.getFixedT,
        e$.t,
        e$.exists,
        e$.setDefaultNamespace,
        e$.hasLoadedNamespace,
        e$.loadNamespaces,
        e$.loadLanguages
      var eM = function (e) {
          var t,
            n,
            r = e$.createInstance(e)
          return (
            r.isInitialized
              ? (t = Promise.resolve(e$.t))
              : (null == e ||
                  null === (n = e.use) ||
                  void 0 === n ||
                  n.forEach(function (e) {
                    return r.use(e)
                  }),
                (t = r.init(e))),
            { i18n: r, initPromise: t }
          )
        },
        eU = f.createElement
      function e_(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function eB(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? e_(Object(n), !0).forEach(function (t) {
                c(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : e_(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var eK = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        return E()(function (n) {
          var r,
            o,
            i = n.pageProps._nextI18Next,
            a =
              null !== (r = null == i ? void 0 : i.initialLocale) && void 0 !== r
                ? r
                : null == n
                ? void 0
                : null === (o = n.router) || void 0 === o
                ? void 0
                : o.locale,
            s = (0, f.useMemo)(
              function () {
                if (!i && !t) return null
                var e,
                  n,
                  r,
                  o = null != t ? t : null == i ? void 0 : i.userConfig
                if (!o && null === t)
                  throw Error('appWithTranslation was called without a next-i18next config')
                if ((null !== t && (o = t), !(null !== (e = o) && void 0 !== e && e.i18n)))
                  throw Error('appWithTranslation was called without config.i18n')
                if (
                  !(
                    null !== (n = o) &&
                    void 0 !== n &&
                    null !== (r = n.i18n) &&
                    void 0 !== r &&
                    r.defaultLocale
                  )
                )
                  throw Error('config.i18n does not include a defaultLocale property')
                var s = (i || {}).initialI18nStore,
                  u = null != t && t.resources ? t.resources : s
                return (
                  a || (a = o.i18n.defaultLocale),
                  eM(eB(eB({}, U(eB(eB({}, o), {}, { lng: a }))), {}, { lng: a, resources: u }))
                    .i18n
                )
              },
              [i, a, t]
            )
          return null !== s ? eU(D, { i18n: s }, eU(e, R({ key: a }, n))) : eU(e, R({ key: a }, n))
        }, e)
      }
    },
    6840: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return n(3847)
        }
      ])
    },
    1746: function (e, t, n) {
      'use strict'
      n.d(t, {
        F: function () {
          return s
        },
        f: function () {
          return a
        }
      })
      var r = n(5893),
        o = n(7294)
      let i = o.createContext(void 0)
      function a(e) {
        let { children: t } = e,
          [n, a] = o.useState(!1)
        return (0, r.jsx)(i.Provider, { value: [n, a], children: t })
      }
      function s() {
        let e = o.useContext(i)
        if (void 0 === e) throw Error('useTheme must be used within a ThemeProvider')
        return e
      }
    },
    3847: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(5893),
        o = n(6247),
        i = n(1746)
      n(4744)
      let a = e => {
        let { Component: t, pageProps: n } = e
        return (0, r.jsx)(i.f, { children: (0, r.jsx)(t, { ...n }) })
      }
      t.default = (0, o.Jc)(a)
    },
    4744: function () {},
    9921: function (e, t) {
      'use strict'
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = 'function' == typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        o = n ? Symbol.for('react.portal') : 60106,
        i = n ? Symbol.for('react.fragment') : 60107,
        a = n ? Symbol.for('react.strict_mode') : 60108,
        s = n ? Symbol.for('react.profiler') : 60114,
        u = n ? Symbol.for('react.provider') : 60109,
        c = n ? Symbol.for('react.context') : 60110,
        l = n ? Symbol.for('react.async_mode') : 60111,
        f = n ? Symbol.for('react.concurrent_mode') : 60111,
        p = n ? Symbol.for('react.forward_ref') : 60112,
        g = n ? Symbol.for('react.suspense') : 60113,
        d = n ? Symbol.for('react.suspense_list') : 60120,
        h = n ? Symbol.for('react.memo') : 60115,
        y = n ? Symbol.for('react.lazy') : 60116,
        v = n ? Symbol.for('react.block') : 60121,
        m = n ? Symbol.for('react.fundamental') : 60117,
        b = n ? Symbol.for('react.responder') : 60118,
        O = n ? Symbol.for('react.scope') : 60119
      function k(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case l:
                case f:
                case i:
                case s:
                case a:
                case g:
                  return e
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case p:
                    case y:
                    case h:
                    case u:
                      return e
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }
      function S(e) {
        return k(e) === f
      }
      ;(t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = y),
        (t.Memo = h),
        (t.Portal = o),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = g),
        (t.isAsyncMode = function (e) {
          return S(e) || k(e) === l
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return k(e) === c
        }),
        (t.isContextProvider = function (e) {
          return k(e) === u
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r
        }),
        (t.isForwardRef = function (e) {
          return k(e) === p
        }),
        (t.isFragment = function (e) {
          return k(e) === i
        }),
        (t.isLazy = function (e) {
          return k(e) === y
        }),
        (t.isMemo = function (e) {
          return k(e) === h
        }),
        (t.isPortal = function (e) {
          return k(e) === o
        }),
        (t.isProfiler = function (e) {
          return k(e) === s
        }),
        (t.isStrictMode = function (e) {
          return k(e) === a
        }),
        (t.isSuspense = function (e) {
          return k(e) === g
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === i ||
            e === f ||
            e === s ||
            e === a ||
            e === g ||
            e === d ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === y ||
                e.$$typeof === h ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === p ||
                e.$$typeof === m ||
                e.$$typeof === b ||
                e.$$typeof === O ||
                e.$$typeof === v))
          )
        }),
        (t.typeOf = k)
    },
    9864: function (e, t, n) {
      'use strict'
      e.exports = n(9921)
    }
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t))
    }
    e.O(0, [774, 179], function () {
      return t(6840), t(880)
    }),
      (_N_E = e.O())
  }
])
