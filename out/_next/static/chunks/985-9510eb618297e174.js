;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [985],
  {
    7814: function (t, n, e) {
      'use strict'
      e.d(n, {
        G: function () {
          return y
        }
      })
      var a = e(3636),
        r = e(5697),
        i = e.n(r),
        o = e(7294)
      function s(t, n) {
        var e = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t)
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable
            })),
            e.push.apply(e, a)
        }
        return e
      }
      function c(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? s(Object(e), !0).forEach(function (n) {
                l(t, n, e[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : s(Object(e)).forEach(function (n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
              })
        }
        return t
      }
      function f(t) {
        return (f =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      function l(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[n] = e),
          t
        )
      }
      function u(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return m(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          (function (t, n) {
            if (t) {
              if ('string' == typeof t) return m(t, n)
              var e = Object.prototype.toString.call(t).slice(8, -1)
              if (
                ('Object' === e && t.constructor && (e = t.constructor.name),
                'Map' === e || 'Set' === e)
              )
                return Array.from(t)
              if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                return m(t, n)
            }
          })(t) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function m(t, n) {
        ;(null == n || n > t.length) && (n = t.length)
        for (var e = 0, a = Array(n); e < n; e++) a[e] = t[e]
        return a
      }
      function d(t) {
        var n
        return (n = t - 0) == n
          ? t
          : (t = t.replace(/[\-_\s]+(.)?/g, function (t, n) {
              return n ? n.toUpperCase() : ''
            }))
              .substr(0, 1)
              .toLowerCase() + t.substr(1)
      }
      var p = ['style'],
        b = !1
      try {
        b = !0
      } catch (v) {}
      function g(t) {
        return t && 'object' === f(t) && t.prefix && t.iconName && t.icon
          ? t
          : a.Qc.icon
          ? a.Qc.icon(t)
          : null === t
          ? null
          : t && 'object' === f(t) && t.prefix && t.iconName
          ? t
          : Array.isArray(t) && 2 === t.length
          ? { prefix: t[0], iconName: t[1] }
          : 'string' == typeof t
          ? { prefix: 'fas', iconName: t }
          : void 0
      }
      function h(t, n) {
        return (Array.isArray(n) && n.length > 0) || (!Array.isArray(n) && n) ? l({}, t, n) : {}
      }
      var y = o.forwardRef(function (t, n) {
        var e,
          r,
          i,
          o,
          s,
          f,
          m,
          d,
          p,
          v,
          w,
          x,
          O,
          A,
          j,
          P,
          C,
          S,
          E,
          N = t.icon,
          z = t.mask,
          M = t.symbol,
          I = t.className,
          R = t.title,
          _ = t.titleId,
          L = t.maskId,
          T = g(N),
          D = h(
            'classes',
            [].concat(
              u(
                ((r = t.beat),
                (i = t.fade),
                (o = t.beatFade),
                (s = t.bounce),
                (f = t.shake),
                (m = t.flash),
                (d = t.spin),
                (p = t.spinPulse),
                (v = t.spinReverse),
                (w = t.pulse),
                (x = t.fixedWidth),
                (O = t.inverse),
                (A = t.border),
                (j = t.listItem),
                (P = t.flip),
                (C = t.size),
                (S = t.rotation),
                (E = t.pull),
                Object.keys(
                  (l(
                    (e = {
                      'fa-beat': r,
                      'fa-fade': i,
                      'fa-beat-fade': o,
                      'fa-bounce': s,
                      'fa-shake': f,
                      'fa-flash': m,
                      'fa-spin': d,
                      'fa-spin-reverse': v,
                      'fa-spin-pulse': p,
                      'fa-pulse': w,
                      'fa-fw': x,
                      'fa-inverse': O,
                      'fa-border': A,
                      'fa-li': j,
                      'fa-flip': !0 === P,
                      'fa-flip-horizontal': 'horizontal' === P || 'both' === P,
                      'fa-flip-vertical': 'vertical' === P || 'both' === P
                    }),
                    'fa-'.concat(C),
                    null != C
                  ),
                  l(e, 'fa-rotate-'.concat(S), null != S && 0 !== S),
                  l(e, 'fa-pull-'.concat(E), null != E),
                  l(e, 'fa-swap-opacity', t.swapOpacity),
                  e)
                )
                  .map(function (t) {
                    return e[t] ? t : null
                  })
                  .filter(function (t) {
                    return t
                  }))
              ),
              u(I.split(' '))
            )
          ),
          Y = h(
            'transform',
            'string' == typeof t.transform ? a.Qc.transform(t.transform) : t.transform
          ),
          F = h('mask', g(z)),
          W = (0, a.qv)(
            T,
            c(c(c(c({}, D), Y), F), {}, { symbol: M, title: R, titleId: _, maskId: L })
          )
        if (!W)
          return (
            !(function () {
              if (!b && console && 'function' == typeof console.error) {
                var t
                ;(t = console).error.apply(t, arguments)
              }
            })('Could not find icon', T),
            null
          )
        var U = W.abstract,
          H = { ref: n }
        return (
          Object.keys(t).forEach(function (n) {
            y.defaultProps.hasOwnProperty(n) || (H[n] = t[n])
          }),
          k(U[0], H)
        )
      })
      ;(y.displayName = 'FontAwesomeIcon'),
        (y.propTypes = {
          beat: i().bool,
          border: i().bool,
          beatFade: i().bool,
          bounce: i().bool,
          className: i().string,
          fade: i().bool,
          flash: i().bool,
          mask: i().oneOfType([i().object, i().array, i().string]),
          maskId: i().string,
          fixedWidth: i().bool,
          inverse: i().bool,
          flip: i().oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
          icon: i().oneOfType([i().object, i().array, i().string]),
          listItem: i().bool,
          pull: i().oneOf(['right', 'left']),
          pulse: i().bool,
          rotation: i().oneOf([0, 90, 180, 270]),
          shake: i().bool,
          size: i().oneOf([
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            '1x',
            '2x',
            '3x',
            '4x',
            '5x',
            '6x',
            '7x',
            '8x',
            '9x',
            '10x'
          ]),
          spin: i().bool,
          spinPulse: i().bool,
          spinReverse: i().bool,
          symbol: i().oneOfType([i().bool, i().string]),
          title: i().string,
          titleId: i().string,
          transform: i().oneOfType([i().string, i().object]),
          swapOpacity: i().bool
        }),
        (y.defaultProps = {
          border: !1,
          className: '',
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: '',
          titleId: null,
          transform: null,
          swapOpacity: !1
        })
      var k = function t(n, e) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        if ('string' == typeof e) return e
        var r = (e.children || []).map(function (e) {
            return t(n, e)
          }),
          i = Object.keys(e.attributes || {}).reduce(
            function (t, n) {
              var a = e.attributes[n]
              switch (n) {
                case 'class':
                  ;(t.attrs.className = a), delete e.attributes.class
                  break
                case 'style':
                  t.attrs.style = a
                    .split(';')
                    .map(function (t) {
                      return t.trim()
                    })
                    .filter(function (t) {
                      return t
                    })
                    .reduce(function (t, n) {
                      var e,
                        a = n.indexOf(':'),
                        r = d(n.slice(0, a)),
                        i = n.slice(a + 1).trim()
                      return (
                        r.startsWith('webkit')
                          ? (t[(e = r).charAt(0).toUpperCase() + e.slice(1)] = i)
                          : (t[r] = i),
                        t
                      )
                    }, {})
                  break
                default:
                  0 === n.indexOf('aria-') || 0 === n.indexOf('data-')
                    ? (t.attrs[n.toLowerCase()] = a)
                    : (t.attrs[d(n)] = a)
              }
              return t
            },
            { attrs: {} }
          ),
          o = a.style,
          s = (function (t, n) {
            if (null == t) return {}
            var e,
              a,
              r = (function (t, n) {
                if (null == t) return {}
                var e,
                  a,
                  r = {},
                  i = Object.keys(t)
                for (a = 0; a < i.length; a++) (e = i[a]), n.indexOf(e) >= 0 || (r[e] = t[e])
                return r
              })(t, n)
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(t)
              for (a = 0; a < i.length; a++)
                (e = i[a]),
                  !(n.indexOf(e) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(t, e) &&
                    (r[e] = t[e])
            }
            return r
          })(a, p)
        return (
          (i.attrs.style = c(c({}, i.attrs.style), void 0 === o ? {} : o)),
          n.apply(void 0, [e.tag, c(c({}, i.attrs), s)].concat(u(r)))
        )
      }.bind(null, o.createElement)
    },
    6010: function (t, n, e) {
      'use strict'
      n.Z = function () {
        for (var t, n, e = 0, a = ''; e < arguments.length; )
          (t = arguments[e++]) &&
            (n = (function t(n) {
              var e,
                a,
                r = ''
              if ('string' == typeof n || 'number' == typeof n) r += n
              else if ('object' == typeof n) {
                if (Array.isArray(n))
                  for (e = 0; e < n.length; e++)
                    n[e] && (a = t(n[e])) && (r && (r += ' '), (r += a))
                else for (e in n) n[e] && (r && (r += ' '), (r += e))
              }
              return r
            })(t)) &&
            (a && (a += ' '), (a += n))
        return a
      }
    },
    227: function (t, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.getDomainLocale = function (t, n, e, a) {
          return !1
        }),
        ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, '__esModule', { value: !0 }),
          Object.assign(n.default, n),
          (t.exports = n.default))
    },
    9749: function (t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = void 0)
      var a = e(6495).Z,
        r = e(2648).Z,
        i = e(1598).Z,
        o = e(7273).Z,
        s = i(e(7294)),
        c = r(e(3121)),
        f = e(2675),
        l = e(139),
        u = e(8730)
      e(7238)
      var m = r(e(9824))
      let d = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        dangerouslyAllowSVG: !1,
        unoptimized: !0
      }
      function p(t) {
        return void 0 !== t.default
      }
      function b(t) {
        return 'number' == typeof t || void 0 === t
          ? t
          : 'string' == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN
      }
      function v(t, n, e, r, i, o, s) {
        if (!t || t['data-loaded-src'] === n) return
        t['data-loaded-src'] = n
        let c = 'decode' in t ? t.decode() : Promise.resolve()
        c.catch(() => {}).then(() => {
          if (t.parentNode) {
            if (('blur' === e && o(!0), null == r ? void 0 : r.current)) {
              let n = new Event('load')
              Object.defineProperty(n, 'target', { writable: !1, value: t })
              let s = !1,
                c = !1
              r.current(
                a({}, n, {
                  nativeEvent: n,
                  currentTarget: t,
                  target: t,
                  isDefaultPrevented: () => s,
                  isPropagationStopped: () => c,
                  persist: () => {},
                  preventDefault: () => {
                    ;(s = !0), n.preventDefault()
                  },
                  stopPropagation: () => {
                    ;(c = !0), n.stopPropagation()
                  }
                })
              )
            }
            ;(null == i ? void 0 : i.current) && i.current(t)
          }
        })
      }
      let g = s.forwardRef((t, n) => {
          var {
              imgAttributes: e,
              heightInt: r,
              widthInt: i,
              qualityInt: c,
              className: f,
              imgStyle: l,
              blurStyle: u,
              isLazy: m,
              fill: d,
              placeholder: p,
              loading: b,
              srcString: g,
              config: h,
              unoptimized: y,
              loader: k,
              onLoadRef: w,
              onLoadingCompleteRef: x,
              setBlurComplete: O,
              setShowAltText: A,
              onLoad: j,
              onError: P
            } = t,
            C = o(t, [
              'imgAttributes',
              'heightInt',
              'widthInt',
              'qualityInt',
              'className',
              'imgStyle',
              'blurStyle',
              'isLazy',
              'fill',
              'placeholder',
              'loading',
              'srcString',
              'config',
              'unoptimized',
              'loader',
              'onLoadRef',
              'onLoadingCompleteRef',
              'setBlurComplete',
              'setShowAltText',
              'onLoad',
              'onError'
            ])
          return (
            (b = m ? 'lazy' : b),
            s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement(
                'img',
                Object.assign({}, C, e, {
                  width: i,
                  height: r,
                  decoding: 'async',
                  'data-nimg': d ? 'fill' : '1',
                  className: f,
                  loading: b,
                  style: a({}, l, u),
                  ref: s.useCallback(
                    t => {
                      n &&
                        ('function' == typeof n ? n(t) : 'object' == typeof n && (n.current = t)),
                        t && (P && (t.src = t.src), t.complete && v(t, g, p, w, x, O, y))
                    },
                    [g, p, w, x, O, P, y, n]
                  ),
                  onLoad: t => {
                    let n = t.currentTarget
                    v(n, g, p, w, x, O, y)
                  },
                  onError: t => {
                    A(!0), 'blur' === p && O(!0), P && P(t)
                  }
                })
              )
            )
          )
        }),
        h = s.forwardRef((t, n) => {
          let e, r
          var i,
            {
              src: v,
              sizes: h,
              unoptimized: y = !1,
              priority: k = !1,
              loading: w,
              className: x,
              quality: O,
              width: A,
              height: j,
              fill: P,
              style: C,
              onLoad: S,
              onLoadingComplete: E,
              placeholder: N = 'empty',
              blurDataURL: z,
              layout: M,
              objectFit: I,
              objectPosition: R,
              lazyBoundary: _,
              lazyRoot: L
            } = t,
            T = o(t, [
              'src',
              'sizes',
              'unoptimized',
              'priority',
              'loading',
              'className',
              'quality',
              'width',
              'height',
              'fill',
              'style',
              'onLoad',
              'onLoadingComplete',
              'placeholder',
              'blurDataURL',
              'layout',
              'objectFit',
              'objectPosition',
              'lazyBoundary',
              'lazyRoot'
            ])
          let D = s.useContext(u.ImageConfigContext),
            Y = s.useMemo(() => {
              let t = d || D || l.imageConfigDefault,
                n = [...t.deviceSizes, ...t.imageSizes].sort((t, n) => t - n),
                e = t.deviceSizes.sort((t, n) => t - n)
              return a({}, t, { allSizes: n, deviceSizes: e })
            }, [D]),
            F = T,
            W = F.loader || m.default
          delete F.loader
          let U = '__next_img_default' in W
          if (U) {
            if ('custom' === Y.loader)
              throw Error(
                'Image with src "'.concat(v, '" is missing "loader" prop.') +
                  '\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              )
          } else {
            let H = W
            W = t => {
              let { config: n } = t,
                e = o(t, ['config'])
              return H(e)
            }
          }
          if (M) {
            'fill' === M && (P = !0)
            let B = {
              intrinsic: { maxWidth: '100%', height: 'auto' },
              responsive: { width: '100%', height: 'auto' }
            }[M]
            B && (C = a({}, C, B))
            let q = { responsive: '100vw', fill: '100vw' }[M]
            q && !h && (h = q)
          }
          let V = '',
            G = b(A),
            X = b(j)
          if ('object' == typeof (i = v) && (p(i) || void 0 !== i.src)) {
            let K = p(v) ? v.default : v
            if (!K.src)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received '.concat(
                  JSON.stringify(K)
                )
              )
            if (!K.height || !K.width)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received '.concat(
                  JSON.stringify(K)
                )
              )
            if (
              ((e = K.blurWidth), (r = K.blurHeight), (z = z || K.blurDataURL), (V = K.src), !P)
            ) {
              if (G || X) {
                if (G && !X) {
                  let Z = G / K.width
                  X = Math.round(K.height * Z)
                } else if (!G && X) {
                  let Q = X / K.height
                  G = Math.round(K.width * Q)
                }
              } else (G = K.width), (X = K.height)
            }
          }
          let J = !k && ('lazy' === w || void 0 === w)
          ;((v = 'string' == typeof v ? v : V).startsWith('data:') || v.startsWith('blob:')) &&
            ((y = !0), (J = !1)),
            Y.unoptimized && (y = !0),
            U && v.endsWith('.svg') && !Y.dangerouslyAllowSVG && (y = !0)
          let [$, tt] = s.useState(!1),
            [tn, te] = s.useState(!1),
            ta = b(O),
            tr = Object.assign(
              P
                ? {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: I,
                    objectPosition: R
                  }
                : {},
              tn ? {} : { color: 'transparent' },
              C
            ),
            ti =
              'blur' === N && z && !$
                ? {
                    backgroundSize: tr.objectFit || 'cover',
                    backgroundPosition: tr.objectPosition || '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(
                      f.getImageBlurSvg({
                        widthInt: G,
                        heightInt: X,
                        blurWidth: e,
                        blurHeight: r,
                        blurDataURL: z
                      }),
                      '")'
                    )
                  }
                : {},
            to = (function (t) {
              let {
                config: n,
                src: e,
                unoptimized: a,
                width: r,
                quality: i,
                sizes: o,
                loader: s
              } = t
              if (a) return { src: e, srcSet: void 0, sizes: void 0 }
              let { widths: c, kind: f } = (function (t, n, e) {
                  let { deviceSizes: a, allSizes: r } = t
                  if (e) {
                    let i = /(^|\s)(1?\d?\d)vw/g,
                      o = []
                    for (let s; (s = i.exec(e)); s) o.push(parseInt(s[2]))
                    if (o.length) {
                      let c = 0.01 * Math.min(...o)
                      return { widths: r.filter(t => t >= a[0] * c), kind: 'w' }
                    }
                    return { widths: r, kind: 'w' }
                  }
                  if ('number' != typeof n) return { widths: a, kind: 'w' }
                  let f = [...new Set([n, 2 * n].map(t => r.find(n => n >= t) || r[r.length - 1]))]
                  return { widths: f, kind: 'x' }
                })(n, r, o),
                l = c.length - 1
              return {
                sizes: o || 'w' !== f ? o : '100vw',
                srcSet: c
                  .map((t, a) =>
                    ''
                      .concat(s({ config: n, src: e, quality: i, width: t }), ' ')
                      .concat('w' === f ? t : a + 1)
                      .concat(f)
                  )
                  .join(', '),
                src: s({ config: n, src: e, quality: i, width: c[l] })
              }
            })({ config: Y, src: v, unoptimized: y, width: G, quality: ta, sizes: h, loader: W }),
            ts = v,
            tc = { imageSrcSet: to.srcSet, imageSizes: to.sizes, crossOrigin: F.crossOrigin },
            tf = s.useRef(S)
          s.useEffect(() => {
            tf.current = S
          }, [S])
          let tl = s.useRef(E)
          s.useEffect(() => {
            tl.current = E
          }, [E])
          let tu = a(
            {
              isLazy: J,
              imgAttributes: to,
              heightInt: X,
              widthInt: G,
              qualityInt: ta,
              className: x,
              imgStyle: tr,
              blurStyle: ti,
              loading: w,
              config: Y,
              fill: P,
              unoptimized: y,
              placeholder: N,
              loader: W,
              srcString: ts,
              onLoadRef: tf,
              onLoadingCompleteRef: tl,
              setBlurComplete: tt,
              setShowAltText: te
            },
            F
          )
          return s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(g, Object.assign({}, tu, { ref: n })),
            k
              ? s.default.createElement(
                  c.default,
                  null,
                  s.default.createElement(
                    'link',
                    Object.assign(
                      {
                        key: '__nimg-' + to.src + to.srcSet + to.sizes,
                        rel: 'preload',
                        as: 'image',
                        href: to.srcSet ? void 0 : to.src
                      },
                      tc
                    )
                  )
                )
              : null
          )
        })
      ;(n.default = h),
        ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, '__esModule', { value: !0 }),
          Object.assign(n.default, n),
          (t.exports = n.default))
    },
    1551: function (t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = void 0)
      var a = e(2648).Z,
        r = e(7273).Z,
        i = a(e(7294)),
        o = e(1003),
        s = e(7795),
        c = e(4465),
        f = e(2692),
        l = e(8245),
        u = e(9246),
        m = e(227),
        d = e(3468)
      let p = new Set()
      function b(t, n, e, a) {
        if (o.isLocalURL(n)) {
          if (!a.bypassPrefetchedCheck) {
            let r = void 0 !== a.locale ? a.locale : 'locale' in t ? t.locale : void 0,
              i = n + '%' + e + '%' + r
            if (p.has(i)) return
            p.add(i)
          }
          Promise.resolve(t.prefetch(n, e, a)).catch(t => {})
        }
      }
      function v(t) {
        return 'string' == typeof t ? t : s.formatUrl(t)
      }
      let g = i.default.forwardRef(function (t, n) {
        let e, a
        let {
            href: s,
            as: p,
            children: g,
            prefetch: h,
            passHref: y,
            replace: k,
            shallow: w,
            scroll: x,
            locale: O,
            onClick: A,
            onMouseEnter: j,
            onTouchStart: P,
            legacyBehavior: C = !1
          } = t,
          S = r(t, [
            'href',
            'as',
            'children',
            'prefetch',
            'passHref',
            'replace',
            'shallow',
            'scroll',
            'locale',
            'onClick',
            'onMouseEnter',
            'onTouchStart',
            'legacyBehavior'
          ])
        ;(e = g),
          C &&
            ('string' == typeof e || 'number' == typeof e) &&
            (e = i.default.createElement('a', null, e))
        let E = !1 !== h,
          N = i.default.useContext(f.RouterContext),
          z = i.default.useContext(l.AppRouterContext),
          M = null != N ? N : z,
          I = !N,
          { href: R, as: _ } = i.default.useMemo(() => {
            if (!N) {
              let t = v(s)
              return { href: t, as: p ? v(p) : t }
            }
            let [n, e] = o.resolveHref(N, s, !0)
            return { href: n, as: p ? o.resolveHref(N, p) : e || n }
          }, [N, s, p]),
          L = i.default.useRef(R),
          T = i.default.useRef(_)
        C && (a = i.default.Children.only(e))
        let D = C ? a && 'object' == typeof a && a.ref : n,
          [Y, F, W] = u.useIntersection({ rootMargin: '200px' }),
          U = i.default.useCallback(
            t => {
              ;(T.current !== _ || L.current !== R) && (W(), (T.current = _), (L.current = R)),
                Y(t),
                D && ('function' == typeof D ? D(t) : 'object' == typeof D && (D.current = t))
            },
            [_, D, R, W, Y]
          )
        i.default.useEffect(() => {
          M && F && E && b(M, R, _, { locale: O })
        }, [_, R, F, O, E, null == N ? void 0 : N.locale, M])
        let H = {
          ref: U,
          onClick(t) {
            C || 'function' != typeof A || A(t),
              C && a.props && 'function' == typeof a.props.onClick && a.props.onClick(t),
              M &&
                !t.defaultPrevented &&
                (function (t, n, e, a, r, s, c, f, l, u) {
                  let { nodeName: m } = t.currentTarget,
                    d = 'A' === m.toUpperCase()
                  if (
                    d &&
                    ((function (t) {
                      let { target: n } = t.currentTarget
                      return (
                        (n && '_self' !== n) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      )
                    })(t) ||
                      !o.isLocalURL(e))
                  )
                    return
                  t.preventDefault()
                  let p = () => {
                    'beforePopState' in n
                      ? n[r ? 'replace' : 'push'](e, a, { shallow: s, locale: f, scroll: c })
                      : n[r ? 'replace' : 'push'](a || e, { forceOptimisticNavigation: !u })
                  }
                  l ? i.default.startTransition(p) : p()
                })(t, M, R, _, k, w, x, O, I, E)
          },
          onMouseEnter(t) {
            C || 'function' != typeof j || j(t),
              C && a.props && 'function' == typeof a.props.onMouseEnter && a.props.onMouseEnter(t),
              M && (E || !I) && b(M, R, _, { locale: O, priority: !0, bypassPrefetchedCheck: !0 })
          },
          onTouchStart(t) {
            C || 'function' != typeof P || P(t),
              C && a.props && 'function' == typeof a.props.onTouchStart && a.props.onTouchStart(t),
              M && (E || !I) && b(M, R, _, { locale: O, priority: !0, bypassPrefetchedCheck: !0 })
          }
        }
        if (!C || y || ('a' === a.type && !('href' in a.props))) {
          let B = void 0 !== O ? O : null == N ? void 0 : N.locale,
            q =
              (null == N ? void 0 : N.isLocaleDomain) &&
              m.getDomainLocale(
                _,
                B,
                null == N ? void 0 : N.locales,
                null == N ? void 0 : N.domainLocales
              )
          H.href = q || d.addBasePath(c.addLocale(_, B, null == N ? void 0 : N.defaultLocale))
        }
        return C
          ? i.default.cloneElement(a, H)
          : i.default.createElement('a', Object.assign({}, S, H), e)
      })
      ;(n.default = g),
        ('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
          void 0 === n.default.__esModule &&
          (Object.defineProperty(n.default, '__esModule', { value: !0 }),
          Object.assign(n.default, n),
          (t.exports = n.default))
    },
    9246: function (t, n, e) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.useIntersection = function (t) {
          let { rootRef: n, rootMargin: e, disabled: c } = t,
            f = c || !i,
            [l, u] = a.useState(!1),
            [m, d] = a.useState(null)
          a.useEffect(() => {
            if (i) {
              if (!f && !l && m && m.tagName) {
                let t = (function (t, n, e) {
                  let {
                    id: a,
                    observer: r,
                    elements: i
                  } = (function (t) {
                    let n
                    let e = { root: t.root || null, margin: t.rootMargin || '' },
                      a = s.find(t => t.root === e.root && t.margin === e.margin)
                    if (a && (n = o.get(a))) return n
                    let r = new Map(),
                      i = new IntersectionObserver(t => {
                        t.forEach(t => {
                          let n = r.get(t.target),
                            e = t.isIntersecting || t.intersectionRatio > 0
                          n && e && n(e)
                        })
                      }, t)
                    return (n = { id: e, observer: i, elements: r }), s.push(e), o.set(e, n), n
                  })(e)
                  return (
                    i.set(t, n),
                    r.observe(t),
                    function () {
                      if ((i.delete(t), r.unobserve(t), 0 === i.size)) {
                        r.disconnect(), o.delete(a)
                        let n = s.findIndex(t => t.root === a.root && t.margin === a.margin)
                        n > -1 && s.splice(n, 1)
                      }
                    }
                  )
                })(m, t => t && u(t), { root: null == n ? void 0 : n.current, rootMargin: e })
                return t
              }
            } else if (!l) {
              let a = r.requestIdleCallback(() => u(!0))
              return () => r.cancelIdleCallback(a)
            }
          }, [m, f, e, n, l])
          let p = a.useCallback(() => {
            u(!1)
          }, [])
          return [d, l, p]
        })
      var a = e(7294),
        r = e(4686)
      let i = 'function' == typeof IntersectionObserver,
        o = new Map(),
        s = []
      ;('function' == typeof n.default || ('object' == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, '__esModule', { value: !0 }),
        Object.assign(n.default, n),
        (t.exports = n.default))
    },
    2675: function (t, n) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.getImageBlurSvg = function (t) {
          let { widthInt: n, heightInt: e, blurWidth: a, blurHeight: r, blurDataURL: i } = t,
            o = a || n,
            s = r || e,
            c = i.startsWith('data:image/jpeg')
              ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
              : ''
          return o && s
            ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "
                .concat(o, ' ')
                .concat(
                  s,
                  "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"
                )
                .concat(a && r ? '1' : '20', "'/%3E")
                .concat(
                  c,
                  "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"
                )
                .concat(i, "'/%3E%3C/svg%3E")
            : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(
                i,
                "'/%3E%3C/svg%3E"
              )
        })
    },
    9824: function (t, n) {
      'use strict'
      function e(t) {
        let { config: n, src: e, width: a, quality: r } = t
        return ''
          .concat(n.path, '?url=')
          .concat(encodeURIComponent(e), '&w=')
          .concat(a, '&q=')
          .concat(r || 75)
      }
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.default = void 0),
        (e.__next_img_default = !0),
        (n.default = e)
    },
    450: function (t) {
      t.exports = {
        style: { fontFamily: "'__myFont_21efbc', '__myFont_Fallback_21efbc'" },
        className: '__className_21efbc'
      }
    },
    7522: function () {},
    9008: function (t, n, e) {
      t.exports = e(3121)
    },
    5675: function (t, n, e) {
      t.exports = e(9749)
    },
    1664: function (t, n, e) {
      t.exports = e(1551)
    },
    1163: function (t, n, e) {
      t.exports = e(880)
    },
    2703: function (t, n, e) {
      'use strict'
      var a = e(414)
      function r() {}
      function i() {}
      ;(i.resetWarningCache = r),
        (t.exports = function () {
          function t(t, n, e, r, i, o) {
            if (o !== a) {
              var s = Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              )
              throw ((s.name = 'Invariant Violation'), s)
            }
          }
          function n() {
            return t
          }
          t.isRequired = t
          var e = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: n,
            element: t,
            elementType: t,
            instanceOf: n,
            node: t,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n,
            exact: n,
            checkPropTypes: i,
            resetWarningCache: r
          }
          return (e.PropTypes = e), e
        })
    },
    5697: function (t, n, e) {
      t.exports = e(2703)()
    },
    414: function (t) {
      'use strict'
      t.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    3636: function (t, n, e) {
      'use strict'
      function a(t, n) {
        var e = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t)
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable
            })),
            e.push.apply(e, a)
        }
        return e
      }
      function r(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? a(Object(e), !0).forEach(function (n) {
                s(t, n, e[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : a(Object(e)).forEach(function (n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
              })
        }
        return t
      }
      function i(t) {
        return (i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      function o(t, n) {
        for (var e = 0; e < n.length; e++) {
          var a = n[e]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(t, a.key, a)
        }
      }
      function s(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (t[n] = e),
          t
        )
      }
      function c(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t
          })(t) ||
          (function (t, n) {
            var e,
              a,
              r =
                null == t
                  ? null
                  : ('undefined' != typeof Symbol && t[Symbol.iterator]) || t['@@iterator']
            if (null != r) {
              var i = [],
                o = !0,
                s = !1
              try {
                for (
                  r = r.call(t);
                  !(o = (e = r.next()).done) && (i.push(e.value), !n || i.length !== n);
                  o = !0
                );
              } catch (c) {
                ;(s = !0), (a = c)
              } finally {
                try {
                  o || null == r.return || r.return()
                } finally {
                  if (s) throw a
                }
              }
              return i
            }
          })(t, n) ||
          l(t, n) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function f(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return u(t)
          })(t) ||
          (function (t) {
            if (
              ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t['@@iterator']
            )
              return Array.from(t)
          })(t) ||
          l(t) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function l(t, n) {
        if (t) {
          if ('string' == typeof t) return u(t, n)
          var e = Object.prototype.toString.call(t).slice(8, -1)
          if (
            ('Object' === e && t.constructor && (e = t.constructor.name),
            'Map' === e || 'Set' === e)
          )
            return Array.from(t)
          if ('Arguments' === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
            return u(t, n)
        }
      }
      function u(t, n) {
        ;(null == n || n > t.length) && (n = t.length)
        for (var e = 0, a = Array(n); e < n; e++) a[e] = t[e]
        return a
      }
      e.d(n, {
        Qc: function () {
          return nY
        },
        qv: function () {
          return nF
        },
        vc: function () {
          return nD
        }
      })
      var m,
        d,
        p,
        b,
        v,
        g,
        h,
        y,
        k,
        w,
        x = function () {},
        O = {},
        A = {},
        j = null,
        P = { mark: x, measure: x }
      try {
        'undefined' != typeof window && (O = window),
          'undefined' != typeof document && (A = document),
          'undefined' != typeof MutationObserver && (j = MutationObserver),
          'undefined' != typeof performance && (P = performance)
      } catch (C) {}
      var S = (O.navigator || {}).userAgent,
        E = void 0 === S ? '' : S,
        N = O,
        z = A,
        M = j,
        I = P
      N.document
      var R =
          !!z.documentElement &&
          !!z.head &&
          'function' == typeof z.addEventListener &&
          'function' == typeof z.createElement,
        _ = ~E.indexOf('MSIE') || ~E.indexOf('Trident/'),
        L = '___FONT_AWESOME___',
        T = 'svg-inline--fa',
        D = 'data-fa-i2svg',
        Y = 'data-fa-pseudo-element',
        F = 'data-prefix',
        W = 'data-icon',
        U = 'fontawesome-i2svg',
        H = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
        B = (function () {
          try {
            return !0
          } catch (t) {
            return !1
          }
        })(),
        q = 'classic',
        V = 'sharp',
        G = [q, V]
      function X(t) {
        return new Proxy(t, {
          get: function (t, n) {
            return n in t ? t[n] : t[q]
          }
        })
      }
      var K = X(
          (s((p = {}), q, {
            fa: 'solid',
            fas: 'solid',
            'fa-solid': 'solid',
            far: 'regular',
            'fa-regular': 'regular',
            fal: 'light',
            'fa-light': 'light',
            fat: 'thin',
            'fa-thin': 'thin',
            fad: 'duotone',
            'fa-duotone': 'duotone',
            fab: 'brands',
            'fa-brands': 'brands',
            fak: 'kit',
            'fa-kit': 'kit'
          }),
          s(p, V, { fa: 'solid', fass: 'solid', 'fa-solid': 'solid' }),
          p)
        ),
        Z = X(
          (s((b = {}), q, {
            solid: 'fas',
            regular: 'far',
            light: 'fal',
            thin: 'fat',
            duotone: 'fad',
            brands: 'fab',
            kit: 'fak'
          }),
          s(b, V, { solid: 'fass' }),
          b)
        ),
        Q = X(
          (s((v = {}), q, {
            fab: 'fa-brands',
            fad: 'fa-duotone',
            fak: 'fa-kit',
            fal: 'fa-light',
            far: 'fa-regular',
            fas: 'fa-solid',
            fat: 'fa-thin'
          }),
          s(v, V, { fass: 'fa-solid' }),
          v)
        ),
        J = X(
          (s((g = {}), q, {
            'fa-brands': 'fab',
            'fa-duotone': 'fad',
            'fa-kit': 'fak',
            'fa-light': 'fal',
            'fa-regular': 'far',
            'fa-solid': 'fas',
            'fa-thin': 'fat'
          }),
          s(g, V, { 'fa-solid': 'fass' }),
          g)
        ),
        $ = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,
        tt = 'fa-layers-text',
        tn =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
        te = X(
          (s((h = {}), q, { 900: 'fas', 400: 'far', normal: 'far', 300: 'fal', 100: 'fat' }),
          s(h, V, { 900: 'fass' }),
          h)
        ),
        ta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        tr = ta.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        ti = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'],
        to = {
          GROUP: 'duotone-group',
          SWAP_OPACITY: 'swap-opacity',
          PRIMARY: 'primary',
          SECONDARY: 'secondary'
        },
        ts = new Set()
      Object.keys(Z[q]).map(ts.add.bind(ts)), Object.keys(Z[V]).map(ts.add.bind(ts))
      var tc = []
          .concat(G, f(ts), [
            '2xs',
            'xs',
            'sm',
            'lg',
            'xl',
            '2xl',
            'beat',
            'border',
            'fade',
            'beat-fade',
            'bounce',
            'flip-both',
            'flip-horizontal',
            'flip-vertical',
            'flip',
            'fw',
            'inverse',
            'layers-counter',
            'layers-text',
            'layers',
            'li',
            'pull-left',
            'pull-right',
            'pulse',
            'rotate-180',
            'rotate-270',
            'rotate-90',
            'rotate-by',
            'shake',
            'spin-pulse',
            'spin-reverse',
            'spin',
            'stack-1x',
            'stack-2x',
            'stack',
            'ul',
            to.GROUP,
            to.SWAP_OPACITY,
            to.PRIMARY,
            to.SECONDARY
          ])
          .concat(
            ta.map(function (t) {
              return ''.concat(t, 'x')
            })
          )
          .concat(
            tr.map(function (t) {
              return 'w-'.concat(t)
            })
          ),
        tf = N.FontAwesomeConfig || {}
      z &&
        'function' == typeof z.querySelector &&
        [
          ['data-family-prefix', 'familyPrefix'],
          ['data-css-prefix', 'cssPrefix'],
          ['data-family-default', 'familyDefault'],
          ['data-style-default', 'styleDefault'],
          ['data-replacement-class', 'replacementClass'],
          ['data-auto-replace-svg', 'autoReplaceSvg'],
          ['data-auto-add-css', 'autoAddCss'],
          ['data-auto-a11y', 'autoA11y'],
          ['data-search-pseudo-elements', 'searchPseudoElements'],
          ['data-observe-mutations', 'observeMutations'],
          ['data-mutate-approach', 'mutateApproach'],
          ['data-keep-original-source', 'keepOriginalSource'],
          ['data-measure-performance', 'measurePerformance'],
          ['data-show-missing-icons', 'showMissingIcons']
        ].forEach(function (t) {
          var n,
            e = c(t, 2),
            a = e[0],
            r = e[1],
            i =
              '' ===
                (n = (function (t) {
                  var n = z.querySelector('script[' + t + ']')
                  if (n) return n.getAttribute(t)
                })(a)) ||
              ('false' !== n && ('true' === n || n))
          null != i && (tf[r] = i)
        })
      var tl = {
        styleDefault: 'solid',
        familyDefault: 'classic',
        cssPrefix: 'fa',
        replacementClass: T,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: 'async',
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0
      }
      tf.familyPrefix && (tf.cssPrefix = tf.familyPrefix)
      var tu = r(r({}, tl), tf)
      tu.autoReplaceSvg || (tu.observeMutations = !1)
      var tm = {}
      Object.keys(tl).forEach(function (t) {
        Object.defineProperty(tm, t, {
          enumerable: !0,
          set: function (n) {
            ;(tu[t] = n),
              td.forEach(function (t) {
                return t(tm)
              })
          },
          get: function () {
            return tu[t]
          }
        })
      }),
        Object.defineProperty(tm, 'familyPrefix', {
          enumerable: !0,
          set: function (t) {
            ;(tu.cssPrefix = t),
              td.forEach(function (t) {
                return t(tm)
              })
          },
          get: function () {
            return tu.cssPrefix
          }
        }),
        (N.FontAwesomeConfig = tm)
      var td = [],
        tp = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 }
      function tb() {
        for (var t = 12, n = ''; t-- > 0; )
          n += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[
            (62 * Math.random()) | 0
          ]
        return n
      }
      function tv(t) {
        for (var n = [], e = (t || []).length >>> 0; e--; ) n[e] = t[e]
        return n
      }
      function tg(t) {
        return t.classList
          ? tv(t.classList)
          : (t.getAttribute('class') || '').split(' ').filter(function (t) {
              return t
            })
      }
      function th(t) {
        return ''
          .concat(t)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
      }
      function ty(t) {
        return Object.keys(t || {}).reduce(function (n, e) {
          return n + ''.concat(e, ': ').concat(t[e].trim(), ';')
        }, '')
      }
      function tk(t) {
        return (
          t.size !== tp.size ||
          t.x !== tp.x ||
          t.y !== tp.y ||
          t.rotate !== tp.rotate ||
          t.flipX ||
          t.flipY
        )
      }
      function tw() {
        var t = tm.cssPrefix,
          n = tm.replacementClass,
          e =
            ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-counter-scale, 0.25));\n          transform: scale(var(--fa-counter-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  -webkit-transform: scale(var(--fa-layers-scale, 0.25));\n          transform: scale(var(--fa-layers-scale, 0.25));\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(var(--fa-li-width, 2em) * -1);\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  -webkit-animation-name: fa-beat;\n          animation-name: fa-beat;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  -webkit-animation-name: fa-bounce;\n          animation-name: fa-bounce;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  -webkit-animation-name: fa-fade;\n          animation-name: fa-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  -webkit-animation-name: fa-beat-fade;\n          animation-name: fa-beat-fade;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  -webkit-animation-name: fa-flip;\n          animation-name: fa-flip;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n          animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  -webkit-animation-name: fa-shake;\n          animation-name: fa-shake;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-delay: var(--fa-animation-delay, 0s);\n          animation-delay: var(--fa-animation-delay, 0s);\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 2s);\n          animation-duration: var(--fa-animation-duration, 2s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, linear);\n          animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  -webkit-animation-name: fa-spin;\n          animation-name: fa-spin;\n  -webkit-animation-direction: var(--fa-animation-direction, normal);\n          animation-direction: var(--fa-animation-direction, normal);\n  -webkit-animation-duration: var(--fa-animation-duration, 1s);\n          animation-duration: var(--fa-animation-duration, 1s);\n  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n          animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n          animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    -webkit-animation-delay: -1ms;\n            animation-delay: -1ms;\n    -webkit-animation-duration: 1ms;\n            animation-duration: 1ms;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@-webkit-keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  45% {\n    -webkit-transform: scale(var(--fa-beat-scale, 1.25));\n            transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@-webkit-keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    -webkit-transform: scale(1, 1) translateY(0);\n            transform: scale(1, 1) translateY(0);\n  }\n}\n@-webkit-keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@-webkit-keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n            transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@-webkit-keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@-webkit-keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes fa-shake {\n  0% {\n    -webkit-transform: rotate(-15deg);\n            transform: rotate(-15deg);\n  }\n  4% {\n    -webkit-transform: rotate(15deg);\n            transform: rotate(15deg);\n  }\n  8%, 24% {\n    -webkit-transform: rotate(-18deg);\n            transform: rotate(-18deg);\n  }\n  12%, 28% {\n    -webkit-transform: rotate(18deg);\n            transform: rotate(18deg);\n  }\n  16% {\n    -webkit-transform: rotate(-22deg);\n            transform: rotate(-22deg);\n  }\n  20% {\n    -webkit-transform: rotate(22deg);\n            transform: rotate(22deg);\n  }\n  32% {\n    -webkit-transform: rotate(-12deg);\n            transform: rotate(-12deg);\n  }\n  36% {\n    -webkit-transform: rotate(12deg);\n            transform: rotate(12deg);\n  }\n  40%, 100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  -webkit-transform: rotate(var(--fa-rotate-angle, none));\n          transform: rotate(var(--fa-rotate-angle, none));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}'
        if ('fa' !== t || n !== T) {
          var a = RegExp('\\.'.concat('fa', '\\-'), 'g'),
            r = RegExp('\\--'.concat('fa', '\\-'), 'g'),
            i = RegExp('\\.'.concat(T), 'g')
          e = e
            .replace(a, '.'.concat(t, '-'))
            .replace(r, '--'.concat(t, '-'))
            .replace(i, '.'.concat(n))
        }
        return e
      }
      var tx = !1
      function tO() {
        tm.autoAddCss &&
          !tx &&
          (!(function (t) {
            if (t && R) {
              var n = z.createElement('style')
              n.setAttribute('type', 'text/css'), (n.innerHTML = t)
              for (var e = z.head.childNodes, a = null, r = e.length - 1; r > -1; r--) {
                var i = e[r]
                ;['STYLE', 'LINK'].indexOf((i.tagName || '').toUpperCase()) > -1 && (a = i)
              }
              z.head.insertBefore(n, a)
            }
          })(tw()),
          (tx = !0))
      }
      var tA = N || {}
      tA[L] || (tA[L] = {}),
        tA[L].styles || (tA[L].styles = {}),
        tA[L].hooks || (tA[L].hooks = {}),
        tA[L].shims || (tA[L].shims = [])
      var tj = tA[L],
        tP = [],
        tC = !1
      function tS(t) {
        var n,
          e = t.tag,
          a = t.attributes,
          r = t.children
        return 'string' == typeof t
          ? th(t)
          : '<'
              .concat(e, ' ')
              .concat(
                Object.keys((n = void 0 === a ? {} : a) || {})
                  .reduce(function (t, e) {
                    return t + ''.concat(e, '="').concat(th(n[e]), '" ')
                  }, '')
                  .trim(),
                '>'
              )
              .concat((void 0 === r ? [] : r).map(tS).join(''), '</')
              .concat(e, '>')
      }
      function tE(t, n, e) {
        if (t && t[n] && t[n][e]) return { prefix: n, iconName: e, icon: t[n][e] }
      }
      !R ||
        (tC = (z.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(z.readyState)) ||
        z.addEventListener('DOMContentLoaded', function t() {
          z.removeEventListener('DOMContentLoaded', t),
            (tC = 1),
            tP.map(function (t) {
              return t()
            })
        })
      var tN = function (t, n, e, a) {
        var r,
          i,
          o,
          s = Object.keys(t),
          c = s.length,
          f =
            void 0 !== a
              ? function (t, e, r, i) {
                  return n.call(a, t, e, r, i)
                }
              : n
        for (void 0 === e ? ((r = 1), (o = t[s[0]])) : ((r = 0), (o = e)); r < c; r++)
          o = f(o, t[(i = s[r])], i, t)
        return o
      }
      function tz(t) {
        var n = (function (t) {
          for (var n = [], e = 0, a = t.length; e < a; ) {
            var r = t.charCodeAt(e++)
            if (r >= 55296 && r <= 56319 && e < a) {
              var i = t.charCodeAt(e++)
              ;(64512 & i) == 56320
                ? n.push(((1023 & r) << 10) + (1023 & i) + 65536)
                : (n.push(r), e--)
            } else n.push(r)
          }
          return n
        })(t)
        return 1 === n.length ? n[0].toString(16) : null
      }
      function tM(t) {
        return Object.keys(t).reduce(function (n, e) {
          var a = t[e]
          return a.icon ? (n[a.iconName] = a.icon) : (n[e] = a), n
        }, {})
      }
      function tI(t, n) {
        var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = e.skipHooks,
          i = tM(n)
        'function' != typeof tj.hooks.addPack || (void 0 !== a && a)
          ? (tj.styles[t] = r(r({}, tj.styles[t] || {}), i))
          : tj.hooks.addPack(t, tM(n)),
          'fas' === t && tI('fa', n)
      }
      var tR = tj.styles,
        t_ = tj.shims,
        tL = (s((y = {}), q, Object.values(Q[q])), s(y, V, Object.values(Q[V])), y),
        tT = null,
        tD = {},
        tY = {},
        tF = {},
        tW = {},
        tU = {},
        tH = (s((k = {}), q, Object.keys(K[q])), s(k, V, Object.keys(K[V])), k),
        tB = function () {
          var t = function (t) {
            return tN(
              tR,
              function (n, e, a) {
                return (n[a] = tN(e, t, {})), n
              },
              {}
            )
          }
          ;(tD = t(function (t, n, e) {
            return (
              n[3] && (t[n[3]] = e),
              n[2] &&
                n[2]
                  .filter(function (t) {
                    return 'number' == typeof t
                  })
                  .forEach(function (n) {
                    t[n.toString(16)] = e
                  }),
              t
            )
          })),
            (tY = t(function (t, n, e) {
              return (
                (t[e] = e),
                n[2] &&
                  n[2]
                    .filter(function (t) {
                      return 'string' == typeof t
                    })
                    .forEach(function (n) {
                      t[n] = e
                    }),
                t
              )
            })),
            (tU = t(function (t, n, e) {
              var a = n[2]
              return (
                (t[e] = e),
                a.forEach(function (n) {
                  t[n] = e
                }),
                t
              )
            }))
          var n = 'far' in tR || tm.autoFetchSvg,
            e = tN(
              t_,
              function (t, e) {
                var a = e[0],
                  r = e[1],
                  i = e[2]
                return (
                  'far' !== r || n || (r = 'fas'),
                  'string' == typeof a && (t.names[a] = { prefix: r, iconName: i }),
                  'number' == typeof a && (t.unicodes[a.toString(16)] = { prefix: r, iconName: i }),
                  t
                )
              },
              { names: {}, unicodes: {} }
            )
          ;(tF = e.names),
            (tW = e.unicodes),
            (tT = tK(tm.styleDefault, { family: tm.familyDefault }))
        }
      function tq(t, n) {
        return (tD[t] || {})[n]
      }
      function tV(t, n) {
        return (tU[t] || {})[n]
      }
      function tG(t) {
        return tF[t] || { prefix: null, iconName: null }
      }
      td.push(function (t) {
        tT = tK(t.styleDefault, { family: tm.familyDefault })
      }),
        tB()
      var tX = function () {
        return { prefix: null, iconName: null, rest: [] }
      }
      function tK(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = n.family,
          a = void 0 === e ? q : e,
          r = K[a][t],
          i = Z[a][t] || Z[a][r],
          o = t in tj.styles ? t : null
        return i || o || null
      }
      var tZ = (s((w = {}), q, Object.keys(Q[q])), s(w, V, Object.keys(Q[V])), w)
      function tQ(t) {
        var n,
          e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = e.skipLookups,
          r = void 0 !== a && a,
          i =
            (s((n = {}), q, ''.concat(tm.cssPrefix, '-').concat(q)),
            s(n, V, ''.concat(tm.cssPrefix, '-').concat(V)),
            n),
          o = null,
          c = q
        ;(t.includes(i[q]) ||
          t.some(function (t) {
            return tZ[q].includes(t)
          })) &&
          (c = q),
          (t.includes(i[V]) ||
            t.some(function (t) {
              return tZ[V].includes(t)
            })) &&
            (c = V)
        var f = t.reduce(function (t, n) {
          var e,
            a,
            s,
            f,
            l =
              ((e = tm.cssPrefix),
              (s = (a = n.split('-'))[0]),
              (f = a.slice(1).join('-')),
              s !== e || '' === f || ~tc.indexOf(f) ? null : f)
          if (
            (tR[n]
              ? ((o = n = tL[c].includes(n) ? J[c][n] : n), (t.prefix = n))
              : tH[c].indexOf(n) > -1
              ? ((o = n), (t.prefix = tK(n, { family: c })))
              : l
              ? (t.iconName = l)
              : n !== tm.replacementClass && n !== i[q] && n !== i[V] && t.rest.push(n),
            !r && t.prefix && t.iconName)
          ) {
            var u = 'fa' === o ? tG(t.iconName) : {},
              m = tV(t.prefix, t.iconName)
            u.prefix && (o = null),
              (t.iconName = u.iconName || m || t.iconName),
              (t.prefix = u.prefix || t.prefix),
              'far' !== t.prefix || tR.far || !tR.fas || tm.autoFetchSvg || (t.prefix = 'fas')
          }
          return t
        }, tX())
        return (
          (t.includes('fa-brands') || t.includes('fab')) && (f.prefix = 'fab'),
          (t.includes('fa-duotone') || t.includes('fad')) && (f.prefix = 'fad'),
          !f.prefix &&
            c === V &&
            (tR.fass || tm.autoFetchSvg) &&
            ((f.prefix = 'fass'), (f.iconName = tV(f.prefix, f.iconName) || f.iconName)),
          ('fa' === f.prefix || 'fa' === o) && (f.prefix = tT || 'fas'),
          f
        )
      }
      var tJ = (function () {
          var t, n
          function e() {
            !(function (t, n) {
              if (!(t instanceof n)) throw TypeError('Cannot call a class as a function')
            })(this, e),
              (this.definitions = {})
          }
          return (
            (t = [
              {
                key: 'add',
                value: function () {
                  for (var t = this, n = arguments.length, e = Array(n), a = 0; a < n; a++)
                    e[a] = arguments[a]
                  var i = e.reduce(this._pullDefinitions, {})
                  Object.keys(i).forEach(function (n) {
                    ;(t.definitions[n] = r(r({}, t.definitions[n] || {}), i[n])), tI(n, i[n])
                    var e = Q[q][n]
                    e && tI(e, i[n]), tB()
                  })
                }
              },
              {
                key: 'reset',
                value: function () {
                  this.definitions = {}
                }
              },
              {
                key: '_pullDefinitions',
                value: function (t, n) {
                  var e = n.prefix && n.iconName && n.icon ? { 0: n } : n
                  return (
                    Object.keys(e).map(function (n) {
                      var a = e[n],
                        r = a.prefix,
                        i = a.iconName,
                        o = a.icon,
                        s = o[2]
                      t[r] || (t[r] = {}),
                        s.length > 0 &&
                          s.forEach(function (n) {
                            'string' == typeof n && (t[r][n] = o)
                          }),
                        (t[r][i] = o)
                    }),
                    t
                  )
                }
              }
            ]),
            o(e.prototype, t),
            n && o(e, n),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          )
        })(),
        t$ = [],
        t1 = {},
        t0 = {},
        t2 = Object.keys(t0)
      function t5(t, n) {
        for (var e = arguments.length, a = Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++)
          a[r - 2] = arguments[r]
        return (
          (t1[t] || []).forEach(function (t) {
            n = t.apply(null, [n].concat(a))
          }),
          n
        )
      }
      function t4(t) {
        for (var n = arguments.length, e = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          e[a - 1] = arguments[a]
        ;(t1[t] || []).forEach(function (t) {
          t.apply(null, e)
        })
      }
      function t3() {
        var t = arguments[0],
          n = Array.prototype.slice.call(arguments, 1)
        return t0[t] ? t0[t].apply(null, n) : void 0
      }
      function t6(t) {
        'fa' === t.prefix && (t.prefix = 'fas')
        var n = t.iconName,
          e = t.prefix || tT
        if (n) return (n = tV(e, n) || n), tE(t7.definitions, e, n) || tE(tj.styles, e, n)
      }
      var t7 = new tJ(),
        t9 = {
          noAuto: function () {
            ;(tm.autoReplaceSvg = !1), (tm.observeMutations = !1), t4('noAuto')
          },
          config: tm,
          dom: {
            i2svg: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              return R
                ? (t4('beforeI2svg', t), t3('pseudoElements2svg', t), t3('i2svg', t))
                : Promise.reject('Operation requires a DOM of some kind.')
            },
            watch: function () {
              var t,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = n.autoReplaceSvgRoot
              !1 === tm.autoReplaceSvg && (tm.autoReplaceSvg = !0),
                (tm.observeMutations = !0),
                (t = function () {
                  t8({ autoReplaceSvgRoot: e }), t4('watch', n)
                }),
                R && (tC ? setTimeout(t, 0) : tP.push(t))
            }
          },
          parse: {
            icon: function (t) {
              if (null === t) return null
              if ('object' === i(t) && t.prefix && t.iconName)
                return { prefix: t.prefix, iconName: tV(t.prefix, t.iconName) || t.iconName }
              if (Array.isArray(t) && 2 === t.length) {
                var n = 0 === t[1].indexOf('fa-') ? t[1].slice(3) : t[1],
                  e = tK(t[0])
                return { prefix: e, iconName: tV(e, n) || n }
              }
              if (
                'string' == typeof t &&
                (t.indexOf(''.concat(tm.cssPrefix, '-')) > -1 || t.match($))
              ) {
                var a = tQ(t.split(' '), { skipLookups: !0 })
                return { prefix: a.prefix || tT, iconName: tV(a.prefix, a.iconName) || a.iconName }
              }
              if ('string' == typeof t) {
                var r = tT
                return { prefix: r, iconName: tV(r, t) || t }
              }
            }
          },
          library: t7,
          findIconDefinition: t6,
          toHtml: tS
        },
        t8 = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.autoReplaceSvgRoot
          ;(Object.keys(tj.styles).length > 0 || tm.autoFetchSvg) &&
            R &&
            tm.autoReplaceSvg &&
            t9.dom.i2svg({ node: void 0 === n ? z : n })
        }
      function nt(t, n) {
        return (
          Object.defineProperty(t, 'abstract', { get: n }),
          Object.defineProperty(t, 'html', {
            get: function () {
              return t.abstract.map(function (t) {
                return tS(t)
              })
            }
          }),
          Object.defineProperty(t, 'node', {
            get: function () {
              if (R) {
                var n = z.createElement('div')
                return (n.innerHTML = t.html), n.children
              }
            }
          }),
          t
        )
      }
      function nn(t) {
        var n,
          e,
          a,
          i,
          o,
          s,
          c = t.icons,
          f = c.main,
          l = c.mask,
          u = t.prefix,
          m = t.iconName,
          d = t.transform,
          p = t.symbol,
          b = t.title,
          v = t.maskId,
          g = t.titleId,
          h = t.extra,
          y = t.watchable,
          k = l.found ? l : f,
          w = k.width,
          x = k.height,
          O = [tm.replacementClass, m ? ''.concat(tm.cssPrefix, '-').concat(m) : '']
            .filter(function (t) {
              return -1 === h.classes.indexOf(t)
            })
            .filter(function (t) {
              return '' !== t || !!t
            })
            .concat(h.classes)
            .join(' '),
          A = {
            children: [],
            attributes: r(
              r({}, h.attributes),
              {},
              {
                'data-prefix': u,
                'data-icon': m,
                class: O,
                role: h.attributes.role || 'img',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 '.concat(w, ' ').concat(x)
              }
            )
          },
          j =
            'fak' !== u || ~h.classes.indexOf('fa-fw')
              ? {}
              : { width: ''.concat((w / x) * 1, 'em') }
        void 0 !== y && y && (A.attributes[D] = ''),
          b &&
            (A.children.push({
              tag: 'title',
              attributes: { id: A.attributes['aria-labelledby'] || 'title-'.concat(g || tb()) },
              children: [b]
            }),
            delete A.attributes.title)
        var P = r(
            r({}, A),
            {},
            {
              prefix: u,
              iconName: m,
              main: f,
              mask: l,
              maskId: v,
              transform: d,
              symbol: p,
              styles: r(r({}, j), h.styles)
            }
          ),
          C =
            l.found && f.found
              ? t3('generateAbstractMask', P) || { children: [], attributes: {} }
              : t3('generateAbstractIcon', P) || { children: [], attributes: {} },
          S = C.children,
          E = C.attributes
        return ((P.children = S), (P.attributes = E), p)
          ? ((n = P.prefix),
            (e = P.iconName),
            (a = P.children),
            (i = P.attributes),
            (s = !0 === (o = P.symbol) ? ''.concat(n, '-').concat(tm.cssPrefix, '-').concat(e) : o),
            [
              {
                tag: 'svg',
                attributes: { style: 'display: none;' },
                children: [{ tag: 'symbol', attributes: r(r({}, i), {}, { id: s }), children: a }]
              }
            ])
          : (function (t) {
              var n = t.children,
                e = t.main,
                a = t.mask,
                i = t.attributes,
                o = t.styles,
                s = t.transform
              if (tk(s) && e.found && !a.found) {
                var c = { x: e.width / e.height / 2, y: 0.5 }
                i.style = ty(
                  r(
                    r({}, o),
                    {},
                    {
                      'transform-origin': ''
                        .concat(c.x + s.x / 16, 'em ')
                        .concat(c.y + s.y / 16, 'em')
                    }
                  )
                )
              }
              return [{ tag: 'svg', attributes: i, children: n }]
            })(P)
      }
      function ne(t) {
        var n,
          e,
          a,
          i,
          o,
          s,
          c,
          f = t.content,
          l = t.width,
          u = t.height,
          m = t.transform,
          d = t.title,
          p = t.extra,
          b = t.watchable,
          v = r(r(r({}, p.attributes), d ? { title: d } : {}), {}, { class: p.classes.join(' ') })
        void 0 !== b && b && (v[D] = '')
        var g = r({}, p.styles)
        tk(m) &&
          ((g.transform =
            ((e = (n = { transform: m, startCentered: !0, width: l, height: u }).transform),
            (a = n.width),
            (i = n.height),
            (s = void 0 !== (o = n.startCentered) && o),
            (c = ''),
            s && _
              ? (c += 'translate('
                  .concat(e.x / 16 - (void 0 === a ? 16 : a) / 2, 'em, ')
                  .concat(e.y / 16 - (void 0 === i ? 16 : i) / 2, 'em) '))
              : s
              ? (c += 'translate(calc(-50% + '
                  .concat(e.x / 16, 'em), calc(-50% + ')
                  .concat(e.y / 16, 'em)) '))
              : (c += 'translate('.concat(e.x / 16, 'em, ').concat(e.y / 16, 'em) ')),
            (c +=
              'scale('
                .concat((e.size / 16) * (e.flipX ? -1 : 1), ', ')
                .concat((e.size / 16) * (e.flipY ? -1 : 1), ') ') +
              'rotate('.concat(e.rotate, 'deg) ')))),
          (g['-webkit-transform'] = g.transform))
        var h = ty(g)
        h.length > 0 && (v.style = h)
        var y = []
        return (
          y.push({ tag: 'span', attributes: v, children: [f] }),
          d && y.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [d] }),
          y
        )
      }
      var na = tj.styles
      function nr(t) {
        var n = t[0],
          e = t[1],
          a = c(t.slice(4), 1)[0]
        return {
          found: !0,
          width: n,
          height: e,
          icon: Array.isArray(a)
            ? {
                tag: 'g',
                attributes: { class: ''.concat(tm.cssPrefix, '-').concat(to.GROUP) },
                children: [
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(tm.cssPrefix, '-').concat(to.SECONDARY),
                      fill: 'currentColor',
                      d: a[0]
                    }
                  },
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(tm.cssPrefix, '-').concat(to.PRIMARY),
                      fill: 'currentColor',
                      d: a[1]
                    }
                  }
                ]
              }
            : { tag: 'path', attributes: { fill: 'currentColor', d: a } }
        }
      }
      var ni = { found: !1, width: 512, height: 512 }
      function no(t, n) {
        var e = n
        return (
          'fa' === n && null !== tm.styleDefault && (n = tT),
          new Promise(function (a, i) {
            if ((t3('missingIconAbstract'), 'fa' === e)) {
              var o,
                s,
                c = tG(t) || {}
              ;(t = c.iconName || t), (n = c.prefix || n)
            }
            if (t && n && na[n] && na[n][t]) return a(nr(na[n][t]))
            ;(o = t),
              (s = n),
              B ||
                tm.showMissingIcons ||
                !o ||
                console.error(
                  'Icon with name "'.concat(o, '" and prefix "').concat(s, '" is missing.')
                ),
              a(
                r(
                  r({}, ni),
                  {},
                  { icon: (tm.showMissingIcons && t && t3('missingIconAbstract')) || {} }
                )
              )
          })
        )
      }
      var ns = function () {},
        nc = tm.measurePerformance && I && I.mark && I.measure ? I : { mark: ns, measure: ns },
        nf = 'FA "6.2.1"',
        nl = function (t) {
          nc.mark(''.concat(nf, ' ').concat(t, ' ends')),
            nc.measure(
              ''.concat(nf, ' ').concat(t),
              ''.concat(nf, ' ').concat(t, ' begins'),
              ''.concat(nf, ' ').concat(t, ' ends')
            )
        },
        nu = {
          begin: function (t) {
            return (
              nc.mark(''.concat(nf, ' ').concat(t, ' begins')),
              function () {
                return nl(t)
              }
            )
          },
          end: nl
        },
        nm = function () {}
      function nd(t) {
        return 'string' == typeof (t.getAttribute ? t.getAttribute(D) : null)
      }
      function np(t) {
        return z.createElementNS('http://www.w3.org/2000/svg', t)
      }
      function nb(t) {
        return z.createElement(t)
      }
      var nv = {
        replace: function (t) {
          var n = t[0]
          if (n.parentNode) {
            if (
              (t[1].forEach(function (t) {
                n.parentNode.insertBefore(
                  (function t(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                      a = e.ceFn,
                      r = void 0 === a ? ('svg' === n.tag ? np : nb) : a
                    if ('string' == typeof n) return z.createTextNode(n)
                    var i = r(n.tag)
                    return (
                      Object.keys(n.attributes || []).forEach(function (t) {
                        i.setAttribute(t, n.attributes[t])
                      }),
                      (n.children || []).forEach(function (n) {
                        i.appendChild(t(n, { ceFn: r }))
                      }),
                      i
                    )
                  })(t),
                  n
                )
              }),
              null === n.getAttribute(D) && tm.keepOriginalSource)
            ) {
              var e,
                a = z.createComment(
                  ((e = ' '.concat(n.outerHTML, ' ')),
                  (e = ''.concat(e, 'Font Awesome fontawesome.com ')))
                )
              n.parentNode.replaceChild(a, n)
            } else n.remove()
          }
        },
        nest: function (t) {
          var n = t[0],
            e = t[1]
          if (~tg(n).indexOf(tm.replacementClass)) return nv.replace(t)
          var a = RegExp(''.concat(tm.cssPrefix, '-.*'))
          if ((delete e[0].attributes.id, e[0].attributes.class)) {
            var r = e[0].attributes.class.split(' ').reduce(
              function (t, n) {
                return (
                  n === tm.replacementClass || n.match(a) ? t.toSvg.push(n) : t.toNode.push(n), t
                )
              },
              { toNode: [], toSvg: [] }
            )
            ;(e[0].attributes.class = r.toSvg.join(' ')),
              0 === r.toNode.length
                ? n.removeAttribute('class')
                : n.setAttribute('class', r.toNode.join(' '))
          }
          var i = e
            .map(function (t) {
              return tS(t)
            })
            .join('\n')
          n.setAttribute(D, ''), (n.innerHTML = i)
        }
      }
      function ng(t) {
        t()
      }
      function nh(t, n) {
        var e = 'function' == typeof n ? n : nm
        if (0 === t.length) e()
        else {
          var a = ng
          'async' === tm.mutateApproach && (a = N.requestAnimationFrame || ng),
            a(function () {
              var n = !0 === tm.autoReplaceSvg ? nv.replace : nv[tm.autoReplaceSvg] || nv.replace,
                a = nu.begin('mutate')
              t.map(n), a(), e()
            })
        }
      }
      var ny = !1,
        nk = null
      function nw(t) {
        if (M && tm.observeMutations) {
          var n = t.treeCallback,
            e = void 0 === n ? nm : n,
            a = t.nodeCallback,
            r = void 0 === a ? nm : a,
            i = t.pseudoElementsCallback,
            o = void 0 === i ? nm : i,
            s = t.observeMutationsRoot
          ;(nk = new M(function (t) {
            if (!ny) {
              var n = tT
              tv(t).forEach(function (t) {
                if (
                  ('childList' === t.type &&
                    t.addedNodes.length > 0 &&
                    !nd(t.addedNodes[0]) &&
                    (tm.searchPseudoElements && o(t.target), e(t.target)),
                  'attributes' === t.type &&
                    t.target.parentNode &&
                    tm.searchPseudoElements &&
                    o(t.target.parentNode),
                  'attributes' === t.type && nd(t.target) && ~ti.indexOf(t.attributeName))
                ) {
                  if (
                    'class' === t.attributeName &&
                    ((i = (a = t.target).getAttribute ? a.getAttribute(F) : null),
                    (s = a.getAttribute ? a.getAttribute(W) : null),
                    i && s)
                  ) {
                    var a,
                      i,
                      s,
                      c,
                      f = tQ(tg(t.target)),
                      l = f.prefix,
                      u = f.iconName
                    t.target.setAttribute(F, l || n), u && t.target.setAttribute(W, u)
                  } else
                    (c = t.target) &&
                      c.classList &&
                      c.classList.contains &&
                      c.classList.contains(tm.replacementClass) &&
                      r(t.target)
                }
              })
            }
          })),
            R &&
              nk.observe(void 0 === s ? z : s, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0
              })
        }
      }
      function nx(t) {
        var n,
          e,
          a,
          i,
          o,
          s,
          c,
          f,
          l,
          u,
          m,
          d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { styleParser: !0 },
          p =
            ((a = t.getAttribute('data-prefix')),
            (i = t.getAttribute('data-icon')),
            (o = void 0 !== t.innerText ? t.innerText.trim() : ''),
            (s = tQ(tg(t))).prefix || (s.prefix = tT),
            a && i && ((s.prefix = a), (s.iconName = i)),
            (s.iconName && s.prefix) ||
              (s.prefix &&
                o.length > 0 &&
                (s.iconName =
                  ((n = s.prefix),
                  (e = t.innerText),
                  (tY[n] || {})[e] || tq(s.prefix, tz(t.innerText)))),
              !s.iconName &&
                tm.autoFetchSvg &&
                t.firstChild &&
                t.firstChild.nodeType === Node.TEXT_NODE &&
                (s.iconName = t.firstChild.data)),
            s),
          b = p.iconName,
          v = p.prefix,
          g = p.rest,
          h =
            ((c = tv(t.attributes).reduce(function (t, n) {
              return 'class' !== t.name && 'style' !== t.name && (t[n.name] = n.value), t
            }, {})),
            (f = t.getAttribute('title')),
            (l = t.getAttribute('data-fa-title-id')),
            tm.autoA11y &&
              (f
                ? (c['aria-labelledby'] = ''
                    .concat(tm.replacementClass, '-title-')
                    .concat(l || tb()))
                : ((c['aria-hidden'] = 'true'), (c.focusable = 'false'))),
            c),
          y = t5('parseNodeAttributes', {}, t),
          k = d.styleParser
            ? ((u = t.getAttribute('style')),
              (m = []),
              u &&
                (m = u.split(';').reduce(function (t, n) {
                  var e = n.split(':'),
                    a = e[0],
                    r = e.slice(1)
                  return a && r.length > 0 && (t[a] = r.join(':').trim()), t
                }, {})),
              m)
            : []
        return r(
          {
            iconName: b,
            title: t.getAttribute('title'),
            titleId: t.getAttribute('data-fa-title-id'),
            prefix: v,
            transform: tp,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: { classes: g, styles: k, attributes: h }
          },
          y
        )
      }
      var nO = tj.styles
      function nA(t) {
        var n = 'nest' === tm.autoReplaceSvg ? nx(t, { styleParser: !1 }) : nx(t)
        return ~n.extra.classes.indexOf(tt)
          ? t3('generateLayersText', t, n)
          : t3('generateSvgReplacementMutation', t, n)
      }
      var nj = new Set()
      function nP(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        if (!R) return Promise.resolve()
        var e = z.documentElement.classList,
          a = function (t) {
            return e.add(''.concat(U, '-').concat(t))
          },
          r = function (t) {
            return e.remove(''.concat(U, '-').concat(t))
          },
          i = tm.autoFetchSvg
            ? nj
            : G.map(function (t) {
                return 'fa-'.concat(t)
              }).concat(Object.keys(nO))
        i.includes('fa') || i.push('fa')
        var o = ['.'.concat(tt, ':not([').concat(D, '])')]
          .concat(
            i.map(function (t) {
              return '.'.concat(t, ':not([').concat(D, '])')
            })
          )
          .join(', ')
        if (0 === o.length) return Promise.resolve()
        var s = []
        try {
          s = tv(t.querySelectorAll(o))
        } catch (c) {}
        if (!(s.length > 0)) return Promise.resolve()
        a('pending'), r('complete')
        var f = nu.begin('onTree'),
          l = s.reduce(function (t, n) {
            try {
              var e = nA(n)
              e && t.push(e)
            } catch (a) {
              B || 'MissingIcon' !== a.name || console.error(a)
            }
            return t
          }, [])
        return new Promise(function (t, e) {
          Promise.all(l)
            .then(function (e) {
              nh(e, function () {
                a('active'), a('complete'), r('pending'), 'function' == typeof n && n(), f(), t()
              })
            })
            .catch(function (t) {
              f(), e(t)
            })
        })
      }
      function nC(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        nA(t).then(function (t) {
          t && nh([t], n)
        })
      }
      G.map(function (t) {
        nj.add('fa-'.concat(t))
      }),
        Object.keys(K[q]).map(nj.add.bind(nj)),
        Object.keys(K[V]).map(nj.add.bind(nj)),
        (nj = f(nj))
      var nS = function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            e = n.transform,
            a = void 0 === e ? tp : e,
            i = n.symbol,
            o = void 0 !== i && i,
            s = n.mask,
            c = void 0 === s ? null : s,
            f = n.maskId,
            l = void 0 === f ? null : f,
            u = n.title,
            m = void 0 === u ? null : u,
            d = n.titleId,
            p = void 0 === d ? null : d,
            b = n.classes,
            v = void 0 === b ? [] : b,
            g = n.attributes,
            h = void 0 === g ? {} : g,
            y = n.styles,
            k = void 0 === y ? {} : y
          if (t) {
            var w = t.prefix,
              x = t.iconName,
              O = t.icon
            return nt(r({ type: 'icon' }, t), function () {
              return (
                t4('beforeDOMElementCreation', { iconDefinition: t, params: n }),
                tm.autoA11y &&
                  (m
                    ? (h['aria-labelledby'] = ''
                        .concat(tm.replacementClass, '-title-')
                        .concat(p || tb()))
                    : ((h['aria-hidden'] = 'true'), (h.focusable = 'false'))),
                nn({
                  icons: {
                    main: nr(O),
                    mask: c ? nr(c.icon) : { found: !1, width: null, height: null, icon: {} }
                  },
                  prefix: w,
                  iconName: x,
                  transform: r(r({}, tp), a),
                  symbol: o,
                  title: m,
                  maskId: l,
                  titleId: p,
                  extra: { attributes: h, styles: k, classes: v }
                })
              )
            })
          }
        },
        nE = RegExp('"', 'ug')
      function nN(t, n) {
        var e = ''.concat('data-fa-pseudo-element-pending').concat(n.replace(':', '-'))
        return new Promise(function (a, i) {
          if (null !== t.getAttribute(e)) return a()
          var o = tv(t.children).filter(function (t) {
              return t.getAttribute(Y) === n
            })[0],
            s = N.getComputedStyle(t, n),
            c = s.getPropertyValue('font-family').match(tn),
            f = s.getPropertyValue('font-weight'),
            l = s.getPropertyValue('content')
          if (o && !c) return t.removeChild(o), a()
          if (c && 'none' !== l && '' !== l) {
            var u = s.getPropertyValue('content'),
              m = ~['Sharp'].indexOf(c[2]) ? V : q,
              d = ~['Solid', 'Regular', 'Light', 'Thin', 'Duotone', 'Brands', 'Kit'].indexOf(c[2])
                ? Z[m][c[2].toLowerCase()]
                : te[m][f],
              p =
                ((O = (w = k = u.replace(nE, '')).length),
                (j =
                  (A = w.charCodeAt(0)) >= 55296 &&
                  A <= 56319 &&
                  O > 1 &&
                  (x = w.charCodeAt(1)) >= 56320 &&
                  x <= 57343
                    ? (A - 55296) * 1024 + x - 56320 + 65536
                    : A),
                {
                  value: (P = 2 === k.length && k[0] === k[1]) ? tz(k[0]) : tz(k),
                  isSecondary: (j >= 1105920 && j <= 1112319) || P
                }),
              b = p.value,
              v = p.isSecondary,
              g = c[0].startsWith('FontAwesome'),
              h = tq(d, b),
              y = h
            if (g) {
              var k,
                w,
                x,
                O,
                A,
                j,
                P,
                C,
                S,
                E =
                  ((C = tW[b]),
                  (S = tq('fas', b)),
                  C ||
                    (S ? { prefix: 'fas', iconName: S } : null) || { prefix: null, iconName: null })
              E.iconName && E.prefix && ((h = E.iconName), (d = E.prefix))
            }
            if (!h || v || (o && o.getAttribute(F) === d && o.getAttribute(W) === y)) a()
            else {
              t.setAttribute(e, y), o && t.removeChild(o)
              var M = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: tp,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} }
                },
                I = M.extra
              ;(I.attributes[Y] = n),
                no(h, d)
                  .then(function (i) {
                    var o = nn(
                        r(
                          r({}, M),
                          {},
                          {
                            icons: { main: i, mask: tX() },
                            prefix: d,
                            iconName: y,
                            extra: I,
                            watchable: !0
                          }
                        )
                      ),
                      s = z.createElement('svg')
                    '::before' === n ? t.insertBefore(s, t.firstChild) : t.appendChild(s),
                      (s.outerHTML = o
                        .map(function (t) {
                          return tS(t)
                        })
                        .join('\n')),
                      t.removeAttribute(e),
                      a()
                  })
                  .catch(i)
            }
          } else a()
        })
      }
      function nz(t) {
        return Promise.all([nN(t, '::before'), nN(t, '::after')])
      }
      function nM(t) {
        return (
          t.parentNode !== document.head &&
          !~H.indexOf(t.tagName.toUpperCase()) &&
          !t.getAttribute(Y) &&
          (!t.parentNode || 'svg' !== t.parentNode.tagName)
        )
      }
      function nI(t) {
        if (R)
          return new Promise(function (n, e) {
            var a = tv(t.querySelectorAll('*')).filter(nM).map(nz),
              r = nu.begin('searchPseudoElements')
            ;(ny = !0),
              Promise.all(a)
                .then(function () {
                  r(), (ny = !1), n()
                })
                .catch(function () {
                  r(), (ny = !1), e()
                })
          })
      }
      var nR = !1,
        n_ = function (t) {
          return t
            .toLowerCase()
            .split(' ')
            .reduce(
              function (t, n) {
                var e = n.toLowerCase().split('-'),
                  a = e[0],
                  r = e.slice(1).join('-')
                if (a && 'h' === r) return (t.flipX = !0), t
                if (a && 'v' === r) return (t.flipY = !0), t
                if (isNaN((r = parseFloat(r)))) return t
                switch (a) {
                  case 'grow':
                    t.size = t.size + r
                    break
                  case 'shrink':
                    t.size = t.size - r
                    break
                  case 'left':
                    t.x = t.x - r
                    break
                  case 'right':
                    t.x = t.x + r
                    break
                  case 'up':
                    t.y = t.y - r
                    break
                  case 'down':
                    t.y = t.y + r
                    break
                  case 'rotate':
                    t.rotate = t.rotate + r
                }
                return t
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
            )
        },
        nL = { x: 0, y: 0, width: '100%', height: '100%' }
      function nT(t) {
        var n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1]
        return t.attributes && (t.attributes.fill || n) && (t.attributes.fill = 'black'), t
      }
      ;(m = [
        {
          mixout: function () {
            return { dom: { css: tw, insertCss: tO } }
          },
          hooks: function () {
            return {
              beforeDOMElementCreation: function () {
                tO()
              },
              beforeI2svg: function () {
                tO()
              }
            }
          }
        },
        {
          mixout: function () {
            return {
              icon: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  e = (t || {}).icon ? t : t6(t || {}),
                  a = n.mask
                return (
                  a && (a = (a || {}).icon ? a : t6(a || {})), nS(e, r(r({}, n), {}, { mask: a }))
                )
              }
            }
          },
          hooks: function () {
            return {
              mutationObserverCallbacks: function (t) {
                return (t.treeCallback = nP), (t.nodeCallback = nC), t
              }
            }
          },
          provides: function (t) {
            ;(t.i2svg = function (t) {
              var n = t.node,
                e = t.callback
              return nP(void 0 === n ? z : n, void 0 === e ? function () {} : e)
            }),
              (t.generateSvgReplacementMutation = function (t, n) {
                var e = n.iconName,
                  a = n.title,
                  r = n.titleId,
                  i = n.prefix,
                  o = n.transform,
                  s = n.symbol,
                  f = n.mask,
                  l = n.maskId,
                  u = n.extra
                return new Promise(function (n, m) {
                  Promise.all([
                    no(e, i),
                    f.iconName
                      ? no(f.iconName, f.prefix)
                      : Promise.resolve({ found: !1, width: 512, height: 512, icon: {} })
                  ])
                    .then(function (f) {
                      var m = c(f, 2)
                      n([
                        t,
                        nn({
                          icons: { main: m[0], mask: m[1] },
                          prefix: i,
                          iconName: e,
                          transform: o,
                          symbol: s,
                          maskId: l,
                          title: a,
                          titleId: r,
                          extra: u,
                          watchable: !0
                        })
                      ])
                    })
                    .catch(m)
                })
              }),
              (t.generateAbstractIcon = function (t) {
                var n,
                  e = t.children,
                  a = t.attributes,
                  r = t.main,
                  i = t.transform,
                  o = ty(t.styles)
                return (
                  o.length > 0 && (a.style = o),
                  tk(i) &&
                    (n = t3('generateAbstractTransformGrouping', {
                      main: r,
                      transform: i,
                      containerWidth: r.width,
                      iconWidth: r.width
                    })),
                  e.push(n || r.icon),
                  { children: e, attributes: a }
                )
              })
          }
        },
        {
          mixout: function () {
            return {
              layer: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  e = n.classes,
                  a = void 0 === e ? [] : e
                return nt({ type: 'layer' }, function () {
                  t4('beforeDOMElementCreation', { assembler: t, params: n })
                  var e = []
                  return (
                    t(function (t) {
                      Array.isArray(t)
                        ? t.map(function (t) {
                            e = e.concat(t.abstract)
                          })
                        : (e = e.concat(t.abstract))
                    }),
                    [
                      {
                        tag: 'span',
                        attributes: {
                          class: [''.concat(tm.cssPrefix, '-layers')].concat(f(a)).join(' ')
                        },
                        children: e
                      }
                    ]
                  )
                })
              }
            }
          }
        },
        {
          mixout: function () {
            return {
              counter: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  e = n.title,
                  a = void 0 === e ? null : e,
                  i = n.classes,
                  o = void 0 === i ? [] : i,
                  s = n.attributes,
                  c = void 0 === s ? {} : s,
                  l = n.styles,
                  u = void 0 === l ? {} : l
                return nt({ type: 'counter', content: t }, function () {
                  var e, i, s, l, m, d, p
                  return (
                    t4('beforeDOMElementCreation', { content: t, params: n }),
                    (i = (e = {
                      content: t.toString(),
                      title: a,
                      extra: {
                        attributes: c,
                        styles: u,
                        classes: [''.concat(tm.cssPrefix, '-layers-counter')].concat(f(o))
                      }
                    }).content),
                    (s = e.title),
                    (m = r(
                      r(r({}, (l = e.extra).attributes), s ? { title: s } : {}),
                      {},
                      { class: l.classes.join(' ') }
                    )),
                    (d = ty(l.styles)).length > 0 && (m.style = d),
                    (p = []).push({ tag: 'span', attributes: m, children: [i] }),
                    s && p.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [s] }),
                    p
                  )
                })
              }
            }
          }
        },
        {
          mixout: function () {
            return {
              text: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  e = n.transform,
                  a = void 0 === e ? tp : e,
                  i = n.title,
                  o = void 0 === i ? null : i,
                  s = n.classes,
                  c = void 0 === s ? [] : s,
                  l = n.attributes,
                  u = void 0 === l ? {} : l,
                  m = n.styles,
                  d = void 0 === m ? {} : m
                return nt({ type: 'text', content: t }, function () {
                  return (
                    t4('beforeDOMElementCreation', { content: t, params: n }),
                    ne({
                      content: t,
                      transform: r(r({}, tp), a),
                      title: o,
                      extra: {
                        attributes: u,
                        styles: d,
                        classes: [''.concat(tm.cssPrefix, '-layers-text')].concat(f(c))
                      }
                    })
                  )
                })
              }
            }
          },
          provides: function (t) {
            t.generateLayersText = function (t, n) {
              var e = n.title,
                a = n.transform,
                r = n.extra,
                i = null,
                o = null
              if (_) {
                var s = parseInt(getComputedStyle(t).fontSize, 10),
                  c = t.getBoundingClientRect()
                ;(i = c.width / s), (o = c.height / s)
              }
              return (
                tm.autoA11y && !e && (r.attributes['aria-hidden'] = 'true'),
                Promise.resolve([
                  t,
                  ne({
                    content: t.innerHTML,
                    width: i,
                    height: o,
                    transform: a,
                    title: e,
                    extra: r,
                    watchable: !0
                  })
                ])
              )
            }
          }
        },
        {
          hooks: function () {
            return {
              mutationObserverCallbacks: function (t) {
                return (t.pseudoElementsCallback = nI), t
              }
            }
          },
          provides: function (t) {
            t.pseudoElements2svg = function (t) {
              var n = t.node
              tm.searchPseudoElements && nI(void 0 === n ? z : n)
            }
          }
        },
        {
          mixout: function () {
            return {
              dom: {
                unwatch: function () {
                  ;(ny = !0), (nR = !0)
                }
              }
            }
          },
          hooks: function () {
            return {
              bootstrap: function () {
                nw(t5('mutationObserverCallbacks', {}))
              },
              noAuto: function () {
                nk && nk.disconnect()
              },
              watch: function (t) {
                var n = t.observeMutationsRoot
                nR ? (ny = !1) : nw(t5('mutationObserverCallbacks', { observeMutationsRoot: n }))
              }
            }
          }
        },
        {
          mixout: function () {
            return {
              parse: {
                transform: function (t) {
                  return n_(t)
                }
              }
            }
          },
          hooks: function () {
            return {
              parseNodeAttributes: function (t, n) {
                var e = n.getAttribute('data-fa-transform')
                return e && (t.transform = n_(e)), t
              }
            }
          },
          provides: function (t) {
            t.generateAbstractTransformGrouping = function (t) {
              var n = t.main,
                e = t.transform,
                a = t.containerWidth,
                i = t.iconWidth,
                o = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') '),
                s = 'scale('
                  .concat((e.size / 16) * (e.flipX ? -1 : 1), ', ')
                  .concat((e.size / 16) * (e.flipY ? -1 : 1), ') '),
                c = 'rotate('.concat(e.rotate, ' 0 0)'),
                f = { transform: ''.concat(o, ' ').concat(s, ' ').concat(c) },
                l = {
                  outer: { transform: 'translate('.concat(a / 2, ' 256)') },
                  inner: f,
                  path: { transform: 'translate('.concat(-((i / 2) * 1), ' -256)') }
                }
              return {
                tag: 'g',
                attributes: r({}, l.outer),
                children: [
                  {
                    tag: 'g',
                    attributes: r({}, l.inner),
                    children: [
                      {
                        tag: n.icon.tag,
                        children: n.icon.children,
                        attributes: r(r({}, n.icon.attributes), l.path)
                      }
                    ]
                  }
                ]
              }
            }
          }
        },
        {
          hooks: function () {
            return {
              parseNodeAttributes: function (t, n) {
                var e = n.getAttribute('data-fa-mask'),
                  a = e
                    ? tQ(
                        e.split(' ').map(function (t) {
                          return t.trim()
                        })
                      )
                    : tX()
                return (
                  a.prefix || (a.prefix = tT),
                  (t.mask = a),
                  (t.maskId = n.getAttribute('data-fa-mask-id')),
                  t
                )
              }
            }
          },
          provides: function (t) {
            t.generateAbstractMask = function (t) {
              var n,
                e,
                a,
                i,
                o,
                s,
                c,
                f,
                l = t.children,
                u = t.attributes,
                m = t.main,
                d = t.mask,
                p = t.maskId,
                b = t.transform,
                v = m.width,
                g = m.icon,
                h = d.width,
                y = d.icon,
                k =
                  ((e = (n = { transform: b, containerWidth: h, iconWidth: v }).transform),
                  (a = n.containerWidth),
                  (i = n.iconWidth),
                  (o = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') ')),
                  (s = 'scale('
                    .concat((e.size / 16) * (e.flipX ? -1 : 1), ', ')
                    .concat((e.size / 16) * (e.flipY ? -1 : 1), ') ')),
                  (c = 'rotate('.concat(e.rotate, ' 0 0)')),
                  (f = { transform: ''.concat(o, ' ').concat(s, ' ').concat(c) }),
                  {
                    outer: { transform: 'translate('.concat(a / 2, ' 256)') },
                    inner: f,
                    path: { transform: 'translate('.concat(-((i / 2) * 1), ' -256)') }
                  }),
                w = { tag: 'rect', attributes: r(r({}, nL), {}, { fill: 'white' }) },
                x = g.children ? { children: g.children.map(nT) } : {},
                O = {
                  tag: 'g',
                  attributes: r({}, k.inner),
                  children: [nT(r({ tag: g.tag, attributes: r(r({}, g.attributes), k.path) }, x))]
                },
                A = { tag: 'g', attributes: r({}, k.outer), children: [O] },
                j = 'mask-'.concat(p || tb()),
                P = 'clip-'.concat(p || tb()),
                C = {
                  tag: 'mask',
                  attributes: r(
                    r({}, nL),
                    {},
                    { id: j, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }
                  ),
                  children: [w, A]
                },
                S = {
                  tag: 'defs',
                  children: [
                    {
                      tag: 'clipPath',
                      attributes: { id: P },
                      children: 'g' === y.tag ? y.children : [y]
                    },
                    C
                  ]
                }
              return (
                l.push(S, {
                  tag: 'rect',
                  attributes: r(
                    {
                      fill: 'currentColor',
                      'clip-path': 'url(#'.concat(P, ')'),
                      mask: 'url(#'.concat(j, ')')
                    },
                    nL
                  )
                }),
                { children: l, attributes: u }
              )
            }
          }
        },
        {
          provides: function (t) {
            var n = !1
            N.matchMedia && (n = N.matchMedia('(prefers-reduced-motion: reduce)').matches),
              (t.missingIconAbstract = function () {
                var t = [],
                  e = { fill: 'currentColor' },
                  a = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' }
                t.push({
                  tag: 'path',
                  attributes: r(
                    r({}, e),
                    {},
                    {
                      d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
                    }
                  )
                })
                var i = r(r({}, a), {}, { attributeName: 'opacity' }),
                  o = {
                    tag: 'circle',
                    attributes: r(r({}, e), {}, { cx: '256', cy: '364', r: '28' }),
                    children: []
                  }
                return (
                  n ||
                    o.children.push(
                      {
                        tag: 'animate',
                        attributes: r(
                          r({}, a),
                          {},
                          { attributeName: 'r', values: '28;14;28;28;14;28;' }
                        )
                      },
                      { tag: 'animate', attributes: r(r({}, i), {}, { values: '1;0;1;1;0;1;' }) }
                    ),
                  t.push(o),
                  t.push({
                    tag: 'path',
                    attributes: r(
                      r({}, e),
                      {},
                      {
                        opacity: '1',
                        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
                      }
                    ),
                    children: n
                      ? []
                      : [
                          {
                            tag: 'animate',
                            attributes: r(r({}, i), {}, { values: '1;0;0;0;0;1;' })
                          }
                        ]
                  }),
                  n ||
                    t.push({
                      tag: 'path',
                      attributes: r(
                        r({}, e),
                        {},
                        {
                          opacity: '0',
                          d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
                        }
                      ),
                      children: [
                        { tag: 'animate', attributes: r(r({}, i), {}, { values: '0;0;1;1;0;0;' }) }
                      ]
                    }),
                  { tag: 'g', attributes: { class: 'missing' }, children: t }
                )
              })
          }
        },
        {
          hooks: function () {
            return {
              parseNodeAttributes: function (t, n) {
                var e = n.getAttribute('data-fa-symbol')
                return (t.symbol = null !== e && ('' === e || e)), t
              }
            }
          }
        }
      ]),
        (d = t9),
        (t$ = m),
        (t1 = {}),
        Object.keys(t0).forEach(function (t) {
          ;-1 === t2.indexOf(t) && delete t0[t]
        }),
        t$.forEach(function (t) {
          var n = t.mixout ? t.mixout() : {}
          if (
            (Object.keys(n).forEach(function (t) {
              'function' == typeof n[t] && (d[t] = n[t]),
                'object' === i(n[t]) &&
                  Object.keys(n[t]).forEach(function (e) {
                    d[t] || (d[t] = {}), (d[t][e] = n[t][e])
                  })
            }),
            t.hooks)
          ) {
            var e = t.hooks()
            Object.keys(e).forEach(function (t) {
              t1[t] || (t1[t] = []), t1[t].push(e[t])
            })
          }
          t.provides && t.provides(t0)
        }),
        t9.noAuto
      var nD = t9.config
      t9.library, t9.dom
      var nY = t9.parse
      t9.findIconDefinition, t9.toHtml
      var nF = t9.icon
      t9.layer, t9.text, t9.counter
    }
  }
])