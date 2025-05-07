(global.webpackJsonp = global.webpackJsonp || []).push([
  ["common/vendor"], {
    1:
      /*!*********************************************************!*\
        !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
        \*********************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = ["qy", "env", "error", "version", "lanDebug", "cloud", "serviceMarket", "router", "worklet", "__webpack_require_UNI_MP_PLUGIN__"],
          a = ["lanDebug", "router", "worklet"],
          r = "undefined" != typeof globalThis ? globalThis : function() {
            return this
          }(),
          c = ["w", "x"].join(""),
          i = r[c],
          s = i.getLaunchOptionsSync ? i.getLaunchOptionsSync() : null;

        function d(e) {
          return (!s || 1154 !== s.scene || !a.includes(e)) && (o.indexOf(e) > -1 || "function" == typeof i[e])
        }
        r[c] = function() {
          var e = {};
          for (var n in i) d(n) && (e[n] = i[n]);
          return e
        }();
        var u = r[c];
        n.default = u
      },
    10:
      /*!****************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
        \****************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    11:
      /*!***************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
        \***************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./toPropertyKey.js */ 12);
        e.exports = function(e, n, t) {
          return (n = o(n)) in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = t, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    12:
      /*!**************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
        \**************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./typeof.js */ 13).default,
          a = t( /*! ./toPrimitive.js */ 14);
        e.exports = function(e) {
          var n = a(e, "string");
          return "symbol" == o(n) ? n : n + ""
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    13:
      /*!*******************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
        \*******************************************************/
      /*! no static exports found */
      function(e, n) {
        function t(n) {
          return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
        }
        e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    14:
      /*!************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
        \************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./typeof.js */ 13).default;
        e.exports = function(e, n) {
          if ("object" != o(e) || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var a = t.call(e, n || "default");
            if ("object" != o(a)) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return ("string" === n ? String : Number)(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    15:
      /*!**********************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
        \**********************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./setPrototypeOf.js */ 16),
          a = t( /*! ./isNativeReflectConstruct.js */ 17);
        e.exports = function(e, n, t) {
          if (a()) return Reflect.construct.apply(null, arguments);
          var r = [null];
          r.push.apply(r, n);
          var c = new(e.bind.apply(e, r));
          return t && o(c, t.prototype), c
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    16:
      /*!***************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
        \***************************************************************/
      /*! no static exports found */
      function(e, n) {
        function t(n, o) {
          return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
            return e.__proto__ = n, e
          }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, o)
        }
        e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    17:
      /*!*************************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
        \*************************************************************************/
      /*! no static exports found */
      function(e, n) {
        function t() {
          try {
            var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
          } catch (n) {}
          return (e.exports = t = function() {
            return !!n
          }, e.exports.__esModule = !0, e.exports.default = e.exports)()
        }
        e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    18:
      /*!******************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
        \******************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./arrayWithoutHoles.js */ 19),
          a = t( /*! ./iterableToArray.js */ 20),
          r = t( /*! ./unsupportedIterableToArray.js */ 8),
          c = t( /*! ./nonIterableSpread.js */ 21);
        e.exports = function(e) {
          return o(e) || a(e) || r(e) || c()
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    19:
      /*!******************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
        \******************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./arrayLikeToArray.js */ 9);
        e.exports = function(e) {
          if (Array.isArray(e)) return o(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    2:
      /*!************************************************************!*\
        !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
        \************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e, o) {
          var a = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.createApp = Tn, n.createComponent = Rn, n.createPage = Nn, n.createPlugin = Fn, n.createSubpackageApp = Un, n.default = void 0;
          var r, c = a(t( /*! @babel/runtime/helpers/slicedToArray */ 5)),
            i = a(t( /*! @babel/runtime/helpers/defineProperty */ 11)),
            s = a(t( /*! @babel/runtime/helpers/construct */ 15)),
            d = a(t( /*! @babel/runtime/helpers/toConsumableArray */ 18)),
            u = a(t( /*! @babel/runtime/helpers/typeof */ 13)),
            l = t( /*! @dcloudio/uni-i18n */ 22),
            m = a(t( /*! vue */ 25));

          function f(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
              }))), t.push.apply(t, o)
            }
            return t
          }

          function p(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2 ? f(Object(t), !0).forEach((function(n) {
                (0, i.default)(e, n, t[n])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }))
            }
            return e
          }
          var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            v = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

          function g() {
            var n, t, o = e.getStorageSync("uni_id_token") || "",
              a = o.split(".");
            if (!o || 3 !== a.length) return {
              uid: null,
              role: [],
              permission: [],
              tokenExpired: 0
            };
            try {
              n = JSON.parse((t = a[1], decodeURIComponent(r(t).split("").map((function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
              })).join(""))))
            } catch (e) {
              throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message)
            }
            return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n
          }
          r = "function" != typeof atob ? function(e) {
            if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !v.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
            var n;
            e += "==".slice(2 - (3 & e.length));
            for (var t, o, a = "", r = 0; r < e.length;) n = h.indexOf(e.charAt(r++)) << 18 | h.indexOf(e.charAt(r++)) << 12 | (t = h.indexOf(e.charAt(r++))) << 6 | (o = h.indexOf(e.charAt(r++))), a += 64 === t ? String.fromCharCode(n >> 16 & 255) : 64 === o ? String.fromCharCode(n >> 16 & 255, n >> 8 & 255) : String.fromCharCode(n >> 16 & 255, n >> 8 & 255, 255 & n);
            return a
          } : atob;
          var y = Object.prototype.toString,
            _ = Object.prototype.hasOwnProperty;

          function b(e) {
            return "function" == typeof e
          }

          function w(e) {
            return "string" == typeof e
          }

          function x(e) {
            return "[object Object]" === y.call(e)
          }

          function k(e, n) {
            return _.call(e, n)
          }

          function O() {}

          function A(e) {
            var n = Object.create(null);
            return function(t) {
              return n[t] || (n[t] = e(t))
            }
          }
          var S = /-(\w)/g,
            P = A((function(e) {
              return e.replace(S, (function(e, n) {
                return n ? n.toUpperCase() : ""
              }))
            }));

          function T(e) {
            var n = {};
            return x(e) && Object.keys(e).sort().forEach((function(t) {
              n[t] = e[t]
            })), Object.keys(n) ? n : e
          }
          var I = ["invoke", "success", "fail", "complete", "returnValue"],
            E = {},
            C = {};

          function j(e, n) {
            Object.keys(n).forEach((function(t) {
              -1 !== I.indexOf(t) && b(n[t]) && (e[t] = function(e, n) {
                var t = n ? e ? e.concat(n) : Array.isArray(n) ? n : [n] : e;
                return t ? function(e) {
                  for (var n = [], t = 0; t < e.length; t++) - 1 === n.indexOf(e[t]) && n.push(e[t]);
                  return n
                }(t) : t
              }(e[t], n[t]))
            }))
          }

          function $(e, n) {
            e && n && Object.keys(n).forEach((function(t) {
              -1 !== I.indexOf(t) && b(n[t]) && function(e, n) {
                var t = e.indexOf(n); - 1 !== t && e.splice(t, 1)
              }(e[t], n[t])
            }))
          }

          function L(e, n) {
            return function(t) {
              return e(t, n) || t
            }
          }

          function M(e) {
            return !!e && ("object" === (0, u.default)(e) || "function" == typeof e) && "function" == typeof e.then
          }

          function D(e, n, t) {
            for (var o = !1, a = 0; a < e.length; a++) {
              var r = e[a];
              if (o) o = Promise.resolve(L(r, t));
              else {
                var c = r(n, t);
                if (M(c) && (o = Promise.resolve(c)), !1 === c) return {
                  then: function() {}
                }
              }
            }
            return o || {
              then: function(e) {
                return e(n)
              }
            }
          }

          function N(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return ["success", "fail", "complete"].forEach((function(t) {
              if (Array.isArray(e[t])) {
                var o = n[t];
                n[t] = function(a) {
                  D(e[t], a, n).then((function(e) {
                    return b(o) && o(e) || e
                  }))
                }
              }
            })), n
          }

          function R(e, n) {
            var t = [];
            Array.isArray(E.returnValue) && t.push.apply(t, (0, d.default)(E.returnValue));
            var o = C[e];
            return o && Array.isArray(o.returnValue) && t.push.apply(t, (0, d.default)(o.returnValue)), t.forEach((function(e) {
              n = e(n) || n
            })), n
          }

          function U(e) {
            var n = Object.create(null);
            Object.keys(E).forEach((function(e) {
              "returnValue" !== e && (n[e] = E[e].slice())
            }));
            var t = C[e];
            return t && Object.keys(t).forEach((function(e) {
              "returnValue" !== e && (n[e] = (n[e] || []).concat(t[e]))
            })), n
          }

          function F(e, n, t) {
            for (var o = arguments.length, a = new Array(o > 3 ? o - 3 : 0), r = 3; r < o; r++) a[r - 3] = arguments[r];
            var c = U(e);
            if (c && Object.keys(c).length) {
              if (Array.isArray(c.invoke)) {
                var i = D(c.invoke, t);
                return i.then((function(t) {
                  return n.apply(void 0, [N(U(e), t)].concat(a))
                }))
              }
              return n.apply(void 0, [N(c, t)].concat(a))
            }
            return n.apply(void 0, [t].concat(a))
          }
          var B = {
              returnValue: function(e) {
                return M(e) ? new Promise((function(n, t) {
                  e.then((function(e) {
                    e ? e[0] ? t(e[0]) : n(e[1]) : n(e)
                  }))
                })) : e
              }
            },
            q = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|rpx2px|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/,
            V = /^create|Manager$/,
            H = ["createBLEConnection"],
            K = ["createBLEConnection", "createPushMessage"],
            z = /^on|^off/;

          function W(e) {
            return V.test(e) && -1 === H.indexOf(e)
          }

          function J(e) {
            return q.test(e) && -1 === K.indexOf(e)
          }

          function G(e) {
            return e.then((function(e) {
              return [null, e]
            })).catch((function(e) {
              return [e]
            }))
          }

          function Y(e) {
            return !(W(e) || J(e) || function(e) {
              return z.test(e) && "onPush" !== e
            }(e))
          }

          function X(e, n) {
            return Y(e) && b(n) ? function() {
              for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) a[r - 1] = arguments[r];
              return b(t.success) || b(t.fail) || b(t.complete) ? R(e, F.apply(void 0, [e, n, t].concat(a))) : R(e, G(new Promise((function(o, r) {
                F.apply(void 0, [e, n, Object.assign({}, t, {
                  success: o,
                  fail: r
                })].concat(a))
              }))))
            } : n
          }
          Promise.prototype.finally || (Promise.prototype.finally = function(e) {
            var n = this.constructor;
            return this.then((function(t) {
              return n.resolve(e()).then((function() {
                return t
              }))
            }), (function(t) {
              return n.resolve(e()).then((function() {
                throw t
              }))
            }))
          });
          var Q = !1,
            Z = 0,
            ee = 0;

          function ne(n, t) {
            var o, a, r, c;
            if (0 === Z && (o = Object.assign({}, e.getWindowInfo(), {
                platform: e.getDeviceInfo().platform
              }), a = o.windowWidth, r = o.pixelRatio, c = o.platform, Z = a, ee = r, Q = "ios" === c), 0 === (n = Number(n))) return 0;
            var i = n / 750 * (t || Z);
            return i < 0 && (i = -i), 0 === (i = Math.floor(i + 1e-4)) && (i = 1 !== ee && Q ? .5 : 1), n < 0 ? -i : i
          }
          var te, oe = {};
          te = ce(e.getAppBaseInfo().language) || "en",
            function() {
              if ("undefined" != typeof __uniConfig && __uniConfig.locales && Object.keys(__uniConfig.locales).length) {
                var e = Object.keys(__uniConfig.locales);
                e.length && e.forEach((function(e) {
                  var n = oe[e],
                    t = __uniConfig.locales[e];
                  n ? Object.assign(n, t) : oe[e] = t
                }))
              }
            }();
          var ae = (0, l.initVueI18n)(te, {}),
            re = ae.t;
          ae.mixin = {
            beforeCreate: function() {
              var e = this,
                n = ae.i18n.watchLocale((function() {
                  e.$forceUpdate()
                }));
              this.$once("hook:beforeDestroy", (function() {
                n()
              }))
            },
            methods: {
              $$t: function(e, n) {
                return re(e, n)
              }
            }
          }, ae.setLocale, ae.getLocale;

          function ce(e, n) {
            if (e) {
              if (e = e.trim().replace(/_/g, "-"), n && n[e]) return e;
              if ("chinese" === (e = e.toLowerCase())) return "zh-Hans";
              if (0 === e.indexOf("zh")) return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 ? "zh-Hant" : (t = e, ["-tw", "-hk", "-mo", "-cht"].find((function(e) {
                return -1 !== t.indexOf(e)
              })) ? "zh-Hant" : "zh-Hans");
              var t, o = function(e, n) {
                return n.find((function(n) {
                  return 0 === e.indexOf(n)
                }))
              }(e, ["en", "fr", "es"]);
              return o || void 0
            }
          }

          function ie() {
            if (b(getApp)) {
              var n = getApp({
                allowDefault: !0
              });
              if (n && n.$vm) return n.$vm.$locale
            }
            return ce(e.getAppBaseInfo().language) || "en"
          }
          var se = [];
          void 0 !== o && (o.getLocale = ie);
          var de = {
              promiseInterceptor: B
            },
            ue = Object.freeze({
              __proto__: null,
              upx2px: ne,
              rpx2px: ne,
              getLocale: ie,
              setLocale: function(e) {
                var n = !!b(getApp) && getApp();
                return !!n && (n.$vm.$locale !== e && (n.$vm.$locale = e, se.forEach((function(n) {
                  return n({
                    locale: e
                  })
                })), !0))
              },
              onLocaleChange: function(e) {
                -1 === se.indexOf(e) && se.push(e)
              },
              addInterceptor: function(e, n) {
                "string" == typeof e && x(n) ? j(C[e] || (C[e] = {}), n) : x(e) && j(E, e)
              },
              removeInterceptor: function(e, n) {
                "string" == typeof e ? x(n) ? $(C[e], n) : delete C[e] : x(e) && $(E, e)
              },
              interceptors: de
            });
          var le;

          function me(n) {
            (le = le || e.getStorageSync("__DC_STAT_UUID")) || (le = Date.now() + "" + Math.floor(1e7 * Math.random()), e.setStorage({
              key: "__DC_STAT_UUID",
              data: le
            })), n.deviceId = le
          }

          function fe(e) {
            if (e.safeArea) {
              var n = e.safeArea;
              e.safeAreaInsets = {
                top: n.top,
                left: n.left,
                right: e.windowWidth - n.right,
                bottom: e.screenHeight - n.bottom
              }
            }
          }

          function pe(e, n) {
            for (var t = e.deviceType || "phone", o = {
                ipad: "pad",
                windows: "pc",
                mac: "pc"
              }, a = Object.keys(o), r = n.toLocaleLowerCase(), c = 0; c < a.length; c++) {
              var i = a[c];
              if (-1 !== r.indexOf(i)) {
                t = o[i];
                break
              }
            }
            return t
          }

          function he(e) {
            var n = e;
            return n && (n = e.toLocaleLowerCase()), n
          }

          function ve(e) {
            return ie ? ie() : e
          }

          function ge(e) {
            var n = e.hostName || "WeChat";
            return e.environment ? n = e.environment : e.host && e.host.env && (n = e.host.env), n
          }
          var ye = {
              returnValue: function(e) {
                me(e), fe(e),
                  function(e) {
                    var n, t = e.brand,
                      o = void 0 === t ? "" : t,
                      a = e.model,
                      r = void 0 === a ? "" : a,
                      c = e.system,
                      i = void 0 === c ? "" : c,
                      s = e.language,
                      d = void 0 === s ? "" : s,
                      u = e.theme,
                      l = e.version,
                      m = (e.platform, e.fontSizeSetting),
                      f = e.SDKVersion,
                      p = e.pixelRatio,
                      h = e.deviceOrientation,
                      v = "";
                    v = i.split(" ")[0] || "", n = i.split(" ")[1] || "";
                    var g = l,
                      y = pe(e, r),
                      _ = he(o),
                      b = ge(e),
                      w = h,
                      x = p,
                      k = f,
                      O = (d || "").replace(/_/g, "-"),
                      A = {
                        appId: "__UNI__C8B40C3",
                        appName: "大学生求职神器",
                        appVersion: "1.0.7",
                        appVersionCode: "107",
                        appLanguage: ve(O),
                        uniCompileVersion: "4.45",
                        uniCompilerVersion: "4.45",
                        uniRuntimeVersion: "4.45",
                        uniPlatform: "mp-weixin",
                        deviceBrand: _,
                        deviceModel: r,
                        deviceType: y,
                        devicePixelRatio: x,
                        deviceOrientation: w,
                        osName: v.toLocaleLowerCase(),
                        osVersion: n,
                        hostTheme: u,
                        hostVersion: g,
                        hostLanguage: O,
                        hostName: b,
                        hostSDKVersion: k,
                        hostFontSizeSetting: m,
                        windowTop: 0,
                        windowBottom: 0,
                        osLanguage: void 0,
                        osTheme: void 0,
                        ua: void 0,
                        hostPackageName: void 0,
                        browserName: void 0,
                        browserVersion: void 0,
                        isUniAppX: !1
                      };
                    Object.assign(e, A, {})
                  }(e)
              }
            },
            _e = {
              redirectTo: {
                name: function(e) {
                  return "back" === e.exists && e.delta ? "navigateBack" : "redirectTo"
                },
                args: function(e) {
                  if ("back" === e.exists && e.url) {
                    var n = function(e) {
                      for (var n = getCurrentPages(), t = n.length; t--;) {
                        var o = n[t];
                        if (o.$page && o.$page.fullPath === e) return t
                      }
                      return -1
                    }(e.url);
                    if (-1 !== n) {
                      var t = getCurrentPages().length - 1 - n;
                      t > 0 && (e.delta = t)
                    }
                  }
                }
              },
              previewImage: {
                args: function(e) {
                  var n = parseInt(e.current);
                  if (!isNaN(n)) {
                    var t = e.urls;
                    if (Array.isArray(t)) {
                      var o = t.length;
                      if (o) return n < 0 ? n = 0 : n >= o && (n = o - 1), n > 0 ? (e.current = t[n], e.urls = t.filter((function(e, o) {
                        return !(o < n) || e !== t[n]
                      }))) : e.current = t[0], {
                        indicator: !1,
                        loop: !1
                      }
                    }
                  }
                }
              },
              getSystemInfo: ye,
              getSystemInfoSync: ye,
              showActionSheet: {
                args: function(e) {
                  "object" === (0, u.default)(e) && (e.alertText = e.title)
                }
              },
              getAppBaseInfo: {
                returnValue: function(e) {
                  var n = e,
                    t = n.version,
                    o = n.language,
                    a = n.SDKVersion,
                    r = n.theme,
                    c = ge(e),
                    i = (o || "").replace("_", "-");
                  e = T(Object.assign(e, {
                    appId: "__UNI__C8B40C3",
                    appName: "大学生求职神器",
                    appVersion: "1.0.7",
                    appVersionCode: "107",
                    appLanguage: ve(i),
                    hostVersion: t,
                    hostLanguage: i,
                    hostName: c,
                    hostSDKVersion: a,
                    hostTheme: r,
                    isUniAppX: !1,
                    uniPlatform: "mp-weixin",
                    uniCompileVersion: "4.45",
                    uniCompilerVersion: "4.45",
                    uniRuntimeVersion: "4.45"
                  }))
                }
              },
              getDeviceInfo: {
                returnValue: function(e) {
                  var n = e,
                    t = n.brand,
                    o = n.model,
                    a = pe(e, o),
                    r = he(t);
                  me(e), e = T(Object.assign(e, {
                    deviceType: a,
                    deviceBrand: r,
                    deviceModel: o
                  }))
                }
              },
              getWindowInfo: {
                returnValue: function(e) {
                  fe(e), e = T(Object.assign(e, {
                    windowTop: 0,
                    windowBottom: 0
                  }))
                }
              },
              getAppAuthorizeSetting: {
                returnValue: function(e) {
                  var n = e.locationReducedAccuracy;
                  e.locationAccuracy = "unsupported", !0 === n ? e.locationAccuracy = "reduced" : !1 === n && (e.locationAccuracy = "full")
                }
              },
              compressImage: {
                args: function(e) {
                  e.compressedHeight && !e.compressHeight && (e.compressHeight = e.compressedHeight), e.compressedWidth && !e.compressWidth && (e.compressWidth = e.compressedWidth)
                }
              }
            },
            be = ["success", "fail", "cancel", "complete"];

          function we(e, n, t) {
            return function(o) {
              return n(ke(e, o, t))
            }
          }

          function xe(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
              a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (x(n)) {
              var r = !0 === a ? n : {};
              for (var c in b(t) && (t = t(n, r) || {}), n)
                if (k(t, c)) {
                  var i = t[c];
                  b(i) && (i = i(n[c], n, r)), i ? w(i) ? r[i] = n[c] : x(i) && (r[i.name ? i.name : c] = i.value) : console.warn("The '".concat(e, "' method of platform '微信小程序' does not support option '").concat(c, "'"))
                } else - 1 !== be.indexOf(c) ? b(n[c]) && (r[c] = we(e, n[c], o)) : a || (r[c] = n[c]);
              return r
            }
            return b(n) && (n = we(e, n, o)), n
          }

          function ke(e, n, t) {
            var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            return b(_e.returnValue) && (n = _e.returnValue(e, n)), xe(e, n, t, {}, o)
          }

          function Oe(n, t) {
            if (k(_e, n)) {
              var o = _e[n];
              return o ? function(t, a) {
                var r = o;
                b(o) && (r = o(t));
                var c = [t = xe(n, t, r.args, r.returnValue)];
                void 0 !== a && c.push(a), b(r.name) ? n = r.name(t) : w(r.name) && (n = r.name);
                var i = e[n].apply(e, c);
                return J(n) ? ke(n, i, r.returnValue, W(n)) : i
              } : function() {
                console.error("Platform '微信小程序' does not support '".concat(n, "'."))
              }
            }
            return t
          }
          var Ae = Object.create(null);
          ["onTabBarMidButtonTap", "subscribePush", "unsubscribePush", "onPush", "offPush", "share"].forEach((function(e) {
            Ae[e] = function(e) {
              return function(n) {
                var t = n.fail,
                  o = n.complete,
                  a = {
                    errMsg: "".concat(e, ":fail method '").concat(e, "' not supported")
                  };
                b(t) && t(a), b(o) && o(a)
              }
            }(e)
          }));
          var Se = {
            oauth: ["weixin"],
            share: ["weixin"],
            payment: ["wxpay"],
            push: ["weixin"]
          };
          var Pe, Te = Object.freeze({
              __proto__: null,
              getProvider: function(e) {
                var n = e.service,
                  t = e.success,
                  o = e.fail,
                  a = e.complete,
                  r = !1;
                Se[n] ? (r = {
                  errMsg: "getProvider:ok",
                  service: n,
                  provider: Se[n]
                }, b(t) && t(r)) : (r = {
                  errMsg: "getProvider:fail service not found"
                }, b(o) && o(r)), b(a) && a(r)
              }
            }),
            Ie = function() {
              return Pe || (Pe = new m.default), Pe
            };

          function Ee(e, n, t) {
            return e[n].apply(e, t)
          }
          var Ce, je, $e, Le = Object.freeze({
            __proto__: null,
            $on: function() {
              return Ee(Ie(), "$on", Array.prototype.slice.call(arguments))
            },
            $off: function() {
              return Ee(Ie(), "$off", Array.prototype.slice.call(arguments))
            },
            $once: function() {
              return Ee(Ie(), "$once", Array.prototype.slice.call(arguments))
            },
            $emit: function() {
              return Ee(Ie(), "$emit", Array.prototype.slice.call(arguments))
            }
          });

          function Me(e) {
            return function() {
              try {
                return e.apply(e, arguments)
              } catch (e) {
                console.error(e)
              }
            }
          }

          function De(e) {
            try {
              return JSON.parse(e)
            } catch (e) {}
            return e
          }
          var Ne = [];

          function Re(e, n) {
            Ne.forEach((function(t) {
              t(e, n)
            })), Ne.length = 0
          }
          var Ue = [],
            Fe = e.getAppBaseInfo && e.getAppBaseInfo();
          Fe || (Fe = e.getSystemInfoSync());
          var Be = Fe ? Fe.host : null,
            qe = Be && "SAAASDK" === Be.env ? e.miniapp.shareVideoMessage : e.shareVideoMessage,
            Ve = Object.freeze({
              __proto__: null,
              shareVideoMessage: qe,
              getPushClientId: function(e) {
                x(e) || (e = {});
                var n = function(e) {
                    var n = {};
                    for (var t in e) {
                      var o = e[t];
                      b(o) && (n[t] = Me(o), delete e[t])
                    }
                    return n
                  }(e),
                  t = n.success,
                  o = n.fail,
                  a = n.complete,
                  r = b(t),
                  c = b(o),
                  i = b(a);
                Promise.resolve().then((function() {
                  void 0 === $e && ($e = !1, Ce = "", je = "uniPush is not enabled"), Ne.push((function(e, n) {
                    var s;
                    e ? (s = {
                      errMsg: "getPushClientId:ok",
                      cid: e
                    }, r && t(s)) : (s = {
                      errMsg: "getPushClientId:fail" + (n ? " " + n : "")
                    }, c && o(s)), i && a(s)
                  })), void 0 !== Ce && Re(Ce, je)
                }))
              },
              onPushMessage: function(e) {
                -1 === Ue.indexOf(e) && Ue.push(e)
              },
              offPushMessage: function(e) {
                if (e) {
                  var n = Ue.indexOf(e);
                  n > -1 && Ue.splice(n, 1)
                } else Ue.length = 0
              },
              invokePushCallback: function(e) {
                if ("enabled" === e.type) $e = !0;
                else if ("clientId" === e.type) Ce = e.cid, je = e.errMsg, Re(Ce, e.errMsg);
                else if ("pushMsg" === e.type)
                  for (var n = {
                      type: "receive",
                      data: De(e.message)
                    }, t = 0; t < Ue.length; t++) {
                    if ((0, Ue[t])(n), n.stopped) break
                  } else "click" === e.type && Ue.forEach((function(n) {
                    n({
                      type: "click",
                      data: De(e.message)
                    })
                  }))
              }
            }),
            He = ["__route__", "__wxExparserNodeId__", "__wxWebviewId__"];

          function Ke(e) {
            return Behavior(e)
          }

          function ze() {
            return !!this.route
          }

          function We(e) {
            this.triggerEvent("__l", e)
          }

          function Je(e) {
            var n = e.$scope,
              t = {};
            Object.defineProperty(e, "$refs", {
              get: function() {
                var e = {};
                return function e(n, t, o) {
                    (n.selectAllComponents(t) || []).forEach((function(n) {
                      var a = n.dataset.ref;
                      o[a] = n.$vm || Xe(n), "scoped" === n.dataset.vueGeneric && n.selectAllComponents(".scoped-ref").forEach((function(n) {
                        e(n, t, o)
                      }))
                    }))
                  }(n, ".vue-ref", e), (n.selectAllComponents(".vue-ref-in-for") || []).forEach((function(n) {
                    var t = n.dataset.ref;
                    e[t] || (e[t] = []), e[t].push(n.$vm || Xe(n))
                  })),
                  function(e, n) {
                    var t = (0, s.default)(Set, (0, d.default)(Object.keys(e)));
                    return Object.keys(n).forEach((function(o) {
                      var a = e[o],
                        r = n[o];
                      Array.isArray(a) && Array.isArray(r) && a.length === r.length && r.every((function(e) {
                        return a.includes(e)
                      })) || (e[o] = r, t.delete(o))
                    })), t.forEach((function(n) {
                      delete e[n]
                    })), e
                  }(t, e)
              }
            })
          }

          function Ge(e) {
            var n, t = e.detail || e.value,
              o = t.vuePid,
              a = t.vueOptions;
            o && (n = function e(n, t) {
              for (var o, a = n.$children, r = a.length - 1; r >= 0; r--) {
                var c = a[r];
                if (c.$scope._$vueId === t) return c
              }
              for (var i = a.length - 1; i >= 0; i--)
                if (o = e(a[i], t)) return o
            }(this.$vm, o)), n || (n = this.$vm), a.parent = n
          }

          function Ye(e) {
            return Object.defineProperty(e, "__v_isMPComponent", {
              configurable: !0,
              enumerable: !1,
              value: !0
            }), e
          }

          function Xe(e) {
            return function(e) {
              return null !== e && "object" === (0, u.default)(e)
            }(e) && Object.isExtensible(e) && Object.defineProperty(e, "__ob__", {
              configurable: !0,
              enumerable: !1,
              value: (0, i.default)({}, "__v_skip", !0)
            }), e
          }
          var Qe = /_(.*)_worklet_factory_/;
          var Ze = Page,
            en = Component,
            nn = /:/g,
            tn = A((function(e) {
              return P(e.replace(nn, "-"))
            }));

          function on(e) {
            var n = e.triggerEvent,
              t = function(e) {
                for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) o[a - 1] = arguments[a];
                if (this.$vm || this.dataset && this.dataset.comType) e = tn(e);
                else {
                  var r = tn(e);
                  r !== e && n.apply(this, [r].concat(o))
                }
                return n.apply(this, [e].concat(o))
              };
            try {
              e.triggerEvent = t
            } catch (n) {
              e._triggerEvent = t
            }
          }

          function an(e, n, t) {
            var o = n[e];
            n[e] = function() {
              if (Ye(this), on(this), o) {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return o.apply(this, n)
              }
            }
          }
          Ze.__$wrappered || (Ze.__$wrappered = !0, Page = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return an("onLoad", e), Ze(e)
          }, Page.after = Ze.after, Component = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return an("created", e), en(e)
          });

          function rn(e, n, t) {
            n.forEach((function(n) {
              (function e(n, t) {
                if (!t) return !0;
                if (m.default.options && Array.isArray(m.default.options[n])) return !0;
                if (b(t = t.default || t)) return !!b(t.extendOptions[n]) || !!(t.super && t.super.options && Array.isArray(t.super.options[n]));
                if (b(t[n]) || Array.isArray(t[n])) return !0;
                var o = t.mixins;
                return Array.isArray(o) ? !!o.find((function(t) {
                  return e(n, t)
                })) : void 0
              })(n, t) && (e[n] = function(e) {
                return this.$vm && this.$vm.__call_hook(n, e)
              })
            }))
          }

          function cn(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            sn(n).forEach((function(n) {
              return dn(e, n, t)
            }))
          }

          function sn(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return e && Object.keys(e).forEach((function(t) {
              0 === t.indexOf("on") && b(e[t]) && n.push(t)
            })), n
          }

          function dn(e, n, t) {
            -1 !== t.indexOf(n) || k(e, n) || (e[n] = function(e) {
              return this.$vm && this.$vm.__call_hook(n, e)
            })
          }

          function un(e, n) {
            var t;
            return [t = b(n = n.default || n) ? n : e.extend(n), n = t.options]
          }

          function ln(e, n) {
            if (Array.isArray(n) && n.length) {
              var t = Object.create(null);
              n.forEach((function(e) {
                t[e] = !0
              })), e.$scopedSlots = e.$slots = t
            }
          }

          function mn(e, n) {
            var t = (e = (e || "").split(",")).length;
            1 === t ? n._$vueId = e[0] : 2 === t && (n._$vueId = e[0], n._$vuePid = e[1])
          }

          function fn(e, n) {
            var t = e.data || {},
              o = e.methods || {};
            if ("function" == typeof t) try {
              t = t.call(n)
            } catch (e) {
              Object({
                NODE_ENV: "development",
                VUE_APP_DARK_MODE: "false",
                VUE_APP_NAME: "大学生求职神器",
                VUE_APP_PLATFORM: "mp-weixin",
                BASE_URL: "/"
              }).VUE_APP_DEBUG && console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。", t)
            } else try {
              t = JSON.parse(JSON.stringify(t))
            } catch (e) {}
            return x(t) || (t = {}), Object.keys(o).forEach((function(e) {
              -1 !== n.__lifecycle_hooks__.indexOf(e) || k(t, e) || (t[e] = o[e])
            })), t
          }
          var pn = [String, Number, Boolean, Object, Array, null];

          function hn(e) {
            return function(n, t) {
              this.$vm && (this.$vm[e] = n)
            }
          }

          function vn(e, n) {
            var t = e.behaviors,
              o = e.extends,
              a = e.mixins,
              r = e.props;
            r || (e.props = r = []);
            var c = [];
            return Array.isArray(t) && t.forEach((function(e) {
              c.push(e.replace("uni://", "wx".concat("://"))), "uni://form-field" === e && (Array.isArray(r) ? (r.push("name"), r.push("value")) : (r.name = {
                type: String,
                default: ""
              }, r.value = {
                type: [String, Number, Boolean, Array, Object, Date],
                default: ""
              }))
            })), x(o) && o.props && c.push(n({
              properties: yn(o.props, !0)
            })), Array.isArray(a) && a.forEach((function(e) {
              x(e) && e.props && c.push(n({
                properties: yn(e.props, !0)
              }))
            })), c
          }

          function gn(e, n, t, o) {
            return Array.isArray(n) && 1 === n.length ? n[0] : n
          }

          function yn(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = arguments.length > 3 ? arguments[3] : void 0,
              o = {};
            return n || (o.vueId = {
              type: String,
              value: ""
            }, t.virtualHost && (o.virtualHostStyle = {
              type: null,
              value: ""
            }, o.virtualHostClass = {
              type: null,
              value: ""
            }), o.scopedSlotsCompiler = {
              type: String,
              value: ""
            }, o.vueSlots = {
              type: null,
              value: [],
              observer: function(e, n) {
                var t = Object.create(null);
                e.forEach((function(e) {
                  t[e] = !0
                })), this.setData({
                  $slots: t
                })
              }
            }), Array.isArray(e) ? e.forEach((function(e) {
              o[e] = {
                type: null,
                observer: hn(e)
              }
            })) : x(e) && Object.keys(e).forEach((function(n) {
              var t = e[n];
              if (x(t)) {
                var a = t.default;
                b(a) && (a = a()), t.type = gn(0, t.type), o[n] = {
                  type: -1 !== pn.indexOf(t.type) ? t.type : null,
                  value: a,
                  observer: hn(n)
                }
              } else {
                var r = gn(0, t);
                o[n] = {
                  type: -1 !== pn.indexOf(r) ? r : null,
                  observer: hn(n)
                }
              }
            })), o
          }

          function _n(e, n, t, o) {
            var a = {};
            return Array.isArray(n) && n.length && n.forEach((function(n, r) {
              "string" == typeof n ? n ? "$event" === n ? a["$" + r] = t : "arguments" === n ? a["$" + r] = t.detail && t.detail.__args__ || o : 0 === n.indexOf("$event.") ? a["$" + r] = e.__get_value(n.replace("$event.", ""), t) : a["$" + r] = e.__get_value(n) : a["$" + r] = e : a["$" + r] = function(e, n) {
                var t = e;
                return n.forEach((function(n) {
                  var o = n[0],
                    a = n[2];
                  if (o || void 0 !== a) {
                    var r, c = n[1],
                      i = n[3];
                    Number.isInteger(o) ? r = o : o ? "string" == typeof o && o && (r = 0 === o.indexOf("#s#") ? o.substr(3) : e.__get_value(o, t)) : r = t, Number.isInteger(r) ? t = a : c ? Array.isArray(r) ? t = r.find((function(n) {
                      return e.__get_value(c, n) === a
                    })) : x(r) ? t = Object.keys(r).find((function(n) {
                      return e.__get_value(c, r[n]) === a
                    })) : console.error("v-for 暂不支持循环数据：", r) : t = r[a], i && (t = e.__get_value(i, t))
                  }
                })), t
              }(e, n)
            })), a
          }

          function bn(e) {
            for (var n = {}, t = 1; t < e.length; t++) {
              var o = e[t];
              n[o[0]] = o[1]
            }
            return n
          }

          function wn(e, n) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
              o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
              a = arguments.length > 4 ? arguments[4] : void 0,
              r = arguments.length > 5 ? arguments[5] : void 0,
              c = !1,
              i = x(n.detail) && n.detail.__args__ || [n.detail];
            if (a && (c = n.currentTarget && n.currentTarget.dataset && "wx" === n.currentTarget.dataset.comType, !t.length)) return c ? [n] : i;
            var s = _n(e, o, n, i),
              d = [];
            return t.forEach((function(e) {
              "$event" === e ? "__set_model" !== r || a ? a && !c ? d.push(i[0]) : d.push(n) : d.push(n.target.value) : Array.isArray(e) && "o" === e[0] ? d.push(bn(e)) : "string" == typeof e && k(s, e) ? d.push(s[e]) : d.push(e)
            })), d
          }

          function xn(e) {
            var n = this,
              t = ((e = function(e) {
                try {
                  e.mp = JSON.parse(JSON.stringify(e))
                } catch (e) {}
                return e.stopPropagation = O, e.preventDefault = O, e.target = e.target || {}, k(e, "detail") || (e.detail = {}), k(e, "markerId") && (e.detail = "object" === (0, u.default)(e.detail) ? e.detail : {}, e.detail.markerId = e.markerId), x(e.detail) && (e.target = Object.assign({}, e.target, e.detail)), e
              }(e)).currentTarget || e.target).dataset;
            if (!t) return console.warn("事件信息不存在");
            var o = t.eventOpts || t["event-opts"];
            if (!o) return console.warn("事件信息不存在");
            var a = e.type,
              r = [];
            return o.forEach((function(t) {
              var o = t[0],
                c = t[1],
                i = "^" === o.charAt(0),
                s = "~" === (o = i ? o.slice(1) : o).charAt(0);
              o = s ? o.slice(1) : o, c && function(e, n) {
                return e === n || "regionchange" === n && ("begin" === e || "end" === e)
              }(a, o) && c.forEach((function(t) {
                var o = t[0];
                if (o) {
                  var a = n.$vm;
                  if (a.$options.generic && (a = function(e) {
                      for (var n = e.$parent; n && n.$parent && (n.$options.generic || n.$parent.$options.generic || n.$scope._$vuePid);) n = n.$parent;
                      return n && n.$parent
                    }(a) || a), "$emit" === o) return void a.$emit.apply(a, wn(n.$vm, e, t[1], t[2], i, o));
                  var c = a[o];
                  if (!b(c)) {
                    var d = "page" === n.$vm.mpType ? "Page" : "Component",
                      u = n.route || n.is;
                    throw new Error("".concat(d, ' "').concat(u, '" does not have a method "').concat(o, '"'))
                  }
                  if (s) {
                    if (c.once) return;
                    c.once = !0
                  }
                  var l = wn(n.$vm, e, t[1], t[2], i, o);
                  l = Array.isArray(l) ? l : [], /=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(c.toString()) && (l = l.concat([, , , , , , , , , , e])), r.push(c.apply(a, l))
                }
              }))
            })), "input" === a && 1 === r.length && void 0 !== r[0] ? r[0] : void 0
          }
          var kn = {};
          var On = ["onShow", "onHide", "onError", "onPageNotFound", "onThemeChange", "onUnhandledRejection"];

          function An() {
            m.default.prototype.getOpenerEventChannel = function() {
              return this.$scope.getOpenerEventChannel()
            };
            var e = m.default.prototype.__call_hook;
            m.default.prototype.__call_hook = function(n, t) {
              var o, a;
              return "onLoad" === n && t && t.__id__ && (this.__eventChannel__ = (o = t.__id__, a = kn[o], delete kn[o], a), delete t.__id__), e.call(this, n, t)
            }
          }

          function Sn(n, t) {
            var o, a = t.mocks,
              r = t.initRefs;
            An(),
              function() {
                var e = {},
                  n = {};

                function t(e) {
                  var n = this.$options.propsData.vueId;
                  n && e(n.split(",")[0])
                }
                m.default.prototype.$hasSSP = function(t) {
                  var o = e[t];
                  return o || (n[t] = this, this.$on("hook:destroyed", (function() {
                    delete n[t]
                  }))), o
                }, m.default.prototype.$getSSP = function(n, t, o) {
                  var a = e[n];
                  if (a) {
                    var r = a[t] || [];
                    return o ? r : r[0]
                  }
                }, m.default.prototype.$setSSP = function(n, o) {
                  var a = 0;
                  return t.call(this, (function(t) {
                    var r = e[t],
                      c = r[n] = r[n] || [];
                    c.push(o), a = c.length - 1
                  })), a
                }, m.default.prototype.$initSSP = function() {
                  t.call(this, (function(n) {
                    e[n] = {}
                  }))
                }, m.default.prototype.$callSSP = function() {
                  t.call(this, (function(e) {
                    n[e] && n[e].$forceUpdate()
                  }))
                }, m.default.mixin({
                  destroyed: function() {
                    var t = this.$options.propsData,
                      o = t && t.vueId;
                    o && (delete e[o], delete n[o])
                  }
                })
              }(), n.$options.store && (m.default.prototype.$store = n.$options.store), (o = m.default).prototype.uniIDHasRole = function(e) {
                return g().role.indexOf(e) > -1
              }, o.prototype.uniIDHasPermission = function(e) {
                var n = g().permission;
                return this.uniIDHasRole("admin") || n.indexOf(e) > -1
              }, o.prototype.uniIDTokenValid = function() {
                return g().tokenExpired > Date.now()
              }, m.default.prototype.mpHost = "mp-weixin", m.default.mixin({
                beforeCreate: function() {
                  if (this.$options.mpType) {
                    if (this.mpType = this.$options.mpType, this.$mp = (0, i.default)({
                        data: {}
                      }, this.mpType, this.$options.mpInstance), this.$scope = this.$options.mpInstance, delete this.$options.mpType, delete this.$options.mpInstance, "page" === this.mpType && "function" == typeof getApp) {
                      var e = getApp();
                      e.$vm && e.$vm.$i18n && (this._i18n = e.$vm.$i18n)
                    }
                    "app" !== this.mpType && (r(this), function(e, n) {
                      var t = e.$mp[e.mpType];
                      n.forEach((function(n) {
                        k(t, n) && (e[n] = t[n])
                      }))
                    }(this, a))
                  }
                }
              });
            var c = {
              onLaunch: function(t) {
                this.$vm || (e.canIUse && !e.canIUse("nextTick") && console.error("当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上"), this.$vm = n, this.$vm.$mp = {
                  app: this
                }, this.$vm.$scope = this, this.$vm.globalData = this.globalData, this.$vm._isMounted = !0, this.$vm.__call_hook("mounted", t), this.$vm.__call_hook("onLaunch", t))
              }
            };
            c.globalData = n.$options.globalData || {};
            var s = n.$options.methods;
            return s && Object.keys(s).forEach((function(e) {
                c[e] = s[e]
              })),
              function(e, n, t) {
                var o = e.observable({
                    locale: t || ae.getLocale()
                  }),
                  a = [];
                n.$watchLocale = function(e) {
                  a.push(e)
                }, Object.defineProperty(n, "$locale", {
                  get: function() {
                    return o.locale
                  },
                  set: function(e) {
                    o.locale = e, a.forEach((function(n) {
                      return n(e)
                    }))
                  }
                })
              }(m.default, n, ce(e.getAppBaseInfo().language) || "en"), rn(c, On), cn(c, n.$options), c
          }

          function Pn(e) {
            return Sn(e, {
              mocks: He,
              initRefs: Je
            })
          }

          function Tn(e) {
            return App(Pn(e)), e
          }
          var In = /[!'()*]/g,
            En = function(e) {
              return "%" + e.charCodeAt(0).toString(16)
            },
            Cn = /%2C/g,
            jn = function(e) {
              return encodeURIComponent(e).replace(In, En).replace(Cn, ",")
            };

          function $n(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jn,
              t = e ? Object.keys(e).map((function(t) {
                var o = e[t];
                if (void 0 === o) return "";
                if (null === o) return n(t);
                if (Array.isArray(o)) {
                  var a = [];
                  return o.forEach((function(e) {
                    void 0 !== e && (null === e ? a.push(n(t)) : a.push(n(t) + "=" + n(e)))
                  })), a.join("&")
                }
                return n(t) + "=" + n(o)
              })).filter((function(e) {
                return e.length > 0
              })).join("&") : null;
            return t ? "?".concat(t) : ""
          }

          function Ln(e, n) {
            return function(e) {
              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = n.isPage,
                o = n.initRelation,
                a = arguments.length > 2 ? arguments[2] : void 0,
                r = un(m.default, e),
                i = (0, c.default)(r, 2),
                s = i[0],
                d = i[1],
                u = p({
                  multipleSlots: !0,
                  addGlobalClass: !0
                }, d.options || {});
              d["mp-weixin"] && d["mp-weixin"].options && Object.assign(u, d["mp-weixin"].options);
              var l = {
                options: u,
                data: fn(d, m.default.prototype),
                behaviors: vn(d, Ke),
                properties: yn(d.props, !1, d.__file, u),
                lifetimes: {
                  attached: function() {
                    var e = this.properties,
                      n = {
                        mpType: t.call(this) ? "page" : "component",
                        mpInstance: this,
                        propsData: e
                      };
                    mn(e.vueId, this), o.call(this, {
                      vuePid: this._$vuePid,
                      vueOptions: n
                    }), this.$vm = new s(n), ln(this.$vm, e.vueSlots), this.$vm.$mount()
                  },
                  ready: function() {
                    this.$vm && (this.$vm._isMounted = !0, this.$vm.__call_hook("mounted"), this.$vm.__call_hook("onReady"))
                  },
                  detached: function() {
                    this.$vm && this.$vm.$destroy()
                  }
                },
                pageLifetimes: {
                  show: function(e) {
                    this.$vm && this.$vm.__call_hook("onPageShow", e)
                  },
                  hide: function() {
                    this.$vm && this.$vm.__call_hook("onPageHide")
                  },
                  resize: function(e) {
                    this.$vm && this.$vm.__call_hook("onPageResize", e)
                  }
                },
                methods: {
                  __l: Ge,
                  __e: xn
                }
              };
              return d.externalClasses && (l.externalClasses = d.externalClasses), Array.isArray(d.wxsCallMethods) && d.wxsCallMethods.forEach((function(e) {
                l.methods[e] = function(n) {
                  return this.$vm[e](n)
                }
              })), a ? [l, d, s] : t ? l : [l, s]
            }(e, {
              isPage: ze,
              initRelation: We
            }, n)
          }
          var Mn = ["onShow", "onHide", "onUnload"];

          function Dn(e) {
            var n, t, o = Ln(e, !0),
              a = (0, c.default)(o, 2),
              r = a[0],
              i = a[1];
            return rn(r.methods, Mn, i), r.methods.onLoad = function(e) {
              this.options = e;
              var n = Object.assign({}, e);
              delete n.__id__, this.$page = {
                fullPath: "/" + (this.route || this.is) + $n(n)
              }, this.$vm.$mp.query = e, this.$vm.__call_hook("onLoad", e)
            }, cn(r.methods, e, ["onReady"]), n = r.methods, (t = i.methods) && Object.keys(t).forEach((function(e) {
              var o = e.match(Qe);
              if (o) {
                var a = o[1];
                n[e] = t[e], n[a] = t[a]
              }
            })), r
          }

          function Nn(e) {
            return Component(function(e) {
              return Dn(e)
            }(e))
          }

          function Rn(e) {
            return Component(Ln(e))
          }

          function Un(n) {
            var t = Pn(n),
              o = getApp({
                allowDefault: !0
              });
            n.$scope = o;
            var a = o.globalData;
            if (a && Object.keys(t.globalData).forEach((function(e) {
                k(a, e) || (a[e] = t.globalData[e])
              })), Object.keys(t).forEach((function(e) {
                k(o, e) || (o[e] = t[e])
              })), b(t.onShow) && e.onAppShow && e.onAppShow((function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                n.__call_hook("onShow", t)
              })), b(t.onHide) && e.onAppHide && e.onAppHide((function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                n.__call_hook("onHide", t)
              })), b(t.onLaunch)) {
              var r = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
              n.__call_hook("onLaunch", r)
            }
            return n
          }

          function Fn(n) {
            var t = Pn(n);
            if (b(t.onShow) && e.onAppShow && e.onAppShow((function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                n.__call_hook("onShow", t)
              })), b(t.onHide) && e.onAppHide && e.onAppHide((function() {
                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                n.__call_hook("onHide", t)
              })), b(t.onLaunch)) {
              var o = e.getLaunchOptionsSync && e.getLaunchOptionsSync();
              n.__call_hook("onLaunch", o)
            }
            return n
          }
          Mn.push.apply(Mn, ["onPullDownRefresh", "onReachBottom", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onPageScroll", "onResize", "onTabItemTap"]), ["vibrate", "preloadPage", "unPreloadPage", "loadSubPackage"].forEach((function(e) {
            _e[e] = !1
          })), [].forEach((function(n) {
            var t = _e[n] && _e[n].name ? _e[n].name : n;
            e.canIUse(t) || (_e[n] = !1)
          }));
          var Bn = {};
          "undefined" != typeof Proxy ? Bn = new Proxy({}, {
            get: function(n, t) {
              return k(n, t) ? n[t] : ue[t] ? ue[t] : Ve[t] ? X(t, Ve[t]) : Te[t] ? X(t, Te[t]) : Ae[t] ? X(t, Ae[t]) : Le[t] ? Le[t] : X(t, Oe(t, e[t]))
            },
            set: function(e, n, t) {
              return e[n] = t, !0
            }
          }) : (Object.keys(ue).forEach((function(e) {
            Bn[e] = ue[e]
          })), Object.keys(Ae).forEach((function(e) {
            Bn[e] = X(e, Ae[e])
          })), Object.keys(Te).forEach((function(e) {
            Bn[e] = X(e, Te[e])
          })), Object.keys(Le).forEach((function(e) {
            Bn[e] = Le[e]
          })), Object.keys(Ve).forEach((function(e) {
            Bn[e] = X(e, Ve[e])
          })), Object.keys(e).forEach((function(n) {
            (k(e, n) || k(_e, n)) && (Bn[n] = X(n, Oe(n, e[n])))
          }))), e.createApp = Tn, e.createPage = Nn, e.createComponent = Rn, e.createSubpackageApp = Un, e.createPlugin = Fn;
          var qn = Bn;
          n.default = qn
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1).default, t( /*! ./../../../webpack/buildin/global.js */ 3))
      },
    20:
      /*!****************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
        \****************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    21:
      /*!******************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
        \******************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    22:
      /*!*************************************************************!*\
        !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
        \*************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e, o) {
          var a = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.LOCALE_ZH_HANT = n.LOCALE_ZH_HANS = n.LOCALE_FR = n.LOCALE_ES = n.LOCALE_EN = n.I18n = n.Formatter = void 0, n.compileI18nJsonStr = function(e, n) {
            var t = n.locale,
              o = n.locales,
              a = n.delimiters;
            if (!A(e, a)) return e;
            k || (k = new l);
            var r = [];
            Object.keys(o).forEach((function(e) {
              e !== t && r.push({
                locale: e,
                values: o[e]
              })
            })), r.unshift({
              locale: t,
              values: o[t]
            });
            try {
              return JSON.stringify(P(JSON.parse(e), r, a), null, 2)
            } catch (e) {}
            return e
          }, n.hasI18nJson = function e(n, t) {
            k || (k = new l);
            return T(n, (function(n, o) {
              var a = n[o];
              return O(a) ? !!A(a, t) || void 0 : e(a, t)
            }))
          }, n.initVueI18n = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = arguments.length > 2 ? arguments[2] : void 0,
              o = arguments.length > 3 ? arguments[3] : void 0;
            if ("string" != typeof e) {
              var a = [n, e];
              e = a[0], n = a[1]
            }
            "string" != typeof e && (e = x());
            "string" != typeof t && (t = "undefined" != typeof __uniConfig && __uniConfig.fallbackLocale || "en");
            var r = new b({
                locale: e,
                fallbackLocale: t,
                messages: n,
                watcher: o
              }),
              c = function(e, n) {
                if ("function" != typeof getApp) c = function(e, n) {
                  return r.t(e, n)
                };
                else {
                  var t = !1;
                  c = function(e, n) {
                    var o = getApp().$vm;
                    return o && (o.$locale, t || (t = !0, w(o, r))), r.t(e, n)
                  }
                }
                return c(e, n)
              };
            return {
              i18n: r,
              f: function(e, n, t) {
                return r.f(e, n, t)
              },
              t: function(e, n) {
                return c(e, n)
              },
              add: function(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return r.add(e, n, t)
              },
              watch: function(e) {
                return r.watchLocale(e)
              },
              getLocale: function() {
                return r.getLocale()
              },
              setLocale: function(e) {
                return r.setLocale(e)
              }
            }
          }, n.isI18nStr = A, n.isString = void 0, n.normalizeLocale = _, n.parseI18nJson = function e(n, t, o) {
            k || (k = new l);
            return T(n, (function(n, a) {
              var r = n[a];
              O(r) ? A(r, o) && (n[a] = S(r, t, o)) : e(r, t, o)
            })), n
          }, n.resolveLocale = function(e) {
            return function(n) {
              return n ? function(e) {
                var n = [],
                  t = e.split("-");
                for (; t.length;) n.push(t.join("-")), t.pop();
                return n
              }(n = _(n) || n).find((function(n) {
                return e.indexOf(n) > -1
              })) : n
            }
          };
          var r = a(t( /*! @babel/runtime/helpers/slicedToArray */ 5)),
            c = a(t( /*! @babel/runtime/helpers/classCallCheck */ 23)),
            i = a(t( /*! @babel/runtime/helpers/createClass */ 24)),
            s = a(t( /*! @babel/runtime/helpers/typeof */ 13)),
            d = function(e) {
              return null !== e && "object" === (0, s.default)(e)
            },
            u = ["{", "}"],
            l = function() {
              function e() {
                (0, c.default)(this, e), this._caches = Object.create(null)
              }
              return (0, i.default)(e, [{
                key: "interpolate",
                value: function(e, n) {
                  var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u;
                  if (!n) return [e];
                  var o = this._caches[e];
                  return o || (o = p(e, t), this._caches[e] = o), h(o, n)
                }
              }]), e
            }();
          n.Formatter = l;
          var m = /^(?:\d)+/,
            f = /^(?:\w)+/;

          function p(e, n) {
            for (var t = (0, r.default)(n, 2), o = t[0], a = t[1], c = [], i = 0, s = ""; i < e.length;) {
              var d = e[i++];
              if (d === o) {
                s && c.push({
                  type: "text",
                  value: s
                }), s = "";
                var u = "";
                for (d = e[i++]; void 0 !== d && d !== a;) u += d, d = e[i++];
                var l = d === a,
                  p = m.test(u) ? "list" : l && f.test(u) ? "named" : "unknown";
                c.push({
                  value: u,
                  type: p
                })
              } else s += d
            }
            return s && c.push({
              type: "text",
              value: s
            }), c
          }

          function h(e, n) {
            var t = [],
              o = 0,
              a = Array.isArray(n) ? "list" : d(n) ? "named" : "unknown";
            if ("unknown" === a) return t;
            for (; o < e.length;) {
              var r = e[o];
              switch (r.type) {
                case "text":
                  t.push(r.value);
                  break;
                case "list":
                  t.push(n[parseInt(r.value, 10)]);
                  break;
                case "named":
                  "named" === a ? t.push(n[r.value]) : console.warn("Type of token '".concat(r.type, "' and format of value '").concat(a, "' don't match!"));
                  break;
                case "unknown":
                  console.warn("Detect 'unknown' type of token!")
              }
              o++
            }
            return t
          }
          n.LOCALE_ZH_HANS = "zh-Hans";
          n.LOCALE_ZH_HANT = "zh-Hant";
          n.LOCALE_EN = "en";
          n.LOCALE_FR = "fr";
          n.LOCALE_ES = "es";
          var v = Object.prototype.hasOwnProperty,
            g = function(e, n) {
              return v.call(e, n)
            },
            y = new l;

          function _(e, n) {
            if (e) {
              if (e = e.trim().replace(/_/g, "-"), n && n[e]) return e;
              if ("chinese" === (e = e.toLowerCase())) return "zh-Hans";
              if (0 === e.indexOf("zh")) return e.indexOf("-hans") > -1 ? "zh-Hans" : e.indexOf("-hant") > -1 ? "zh-Hant" : (t = e, ["-tw", "-hk", "-mo", "-cht"].find((function(e) {
                return -1 !== t.indexOf(e)
              })) ? "zh-Hant" : "zh-Hans");
              var t, o = ["en", "fr", "es"];
              n && Object.keys(n).length > 0 && (o = Object.keys(n));
              var a = function(e, n) {
                return n.find((function(n) {
                  return 0 === e.indexOf(n)
                }))
              }(e, o);
              return a || void 0
            }
          }
          var b = function() {
            function e(n) {
              var t = n.locale,
                o = n.fallbackLocale,
                a = n.messages,
                r = n.watcher,
                i = n.formater;
              (0, c.default)(this, e), this.locale = "en", this.fallbackLocale = "en", this.message = {}, this.messages = {}, this.watchers = [], o && (this.fallbackLocale = o), this.formater = i || y, this.messages = a || {}, this.setLocale(t || "en"), r && this.watchLocale(r)
            }
            return (0, i.default)(e, [{
              key: "setLocale",
              value: function(e) {
                var n = this,
                  t = this.locale;
                this.locale = _(e, this.messages) || this.fallbackLocale, this.messages[this.locale] || (this.messages[this.locale] = {}), this.message = this.messages[this.locale], t !== this.locale && this.watchers.forEach((function(e) {
                  e(n.locale, t)
                }))
              }
            }, {
              key: "getLocale",
              value: function() {
                return this.locale
              }
            }, {
              key: "watchLocale",
              value: function(e) {
                var n = this,
                  t = this.watchers.push(e) - 1;
                return function() {
                  n.watchers.splice(t, 1)
                }
              }
            }, {
              key: "add",
              value: function(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                  o = this.messages[e];
                o ? t ? Object.assign(o, n) : Object.keys(n).forEach((function(e) {
                  g(o, e) || (o[e] = n[e])
                })) : this.messages[e] = n
              }
            }, {
              key: "f",
              value: function(e, n, t) {
                return this.formater.interpolate(e, n, t).join("")
              }
            }, {
              key: "t",
              value: function(e, n, t) {
                var o = this.message;
                return "string" == typeof n ? (n = _(n, this.messages)) && (o = this.messages[n]) : t = n, g(o, e) ? this.formater.interpolate(o[e], t).join("") : (console.warn("Cannot translate the value of keypath ".concat(e, ". Use the value of keypath as default.")), e)
              }
            }]), e
          }();

          function w(e, n) {
            e.$watchLocale ? e.$watchLocale((function(e) {
              n.setLocale(e)
            })) : e.$watch((function() {
              return e.$locale
            }), (function(e) {
              n.setLocale(e)
            }))
          }

          function x() {
            return void 0 !== e && e.getLocale ? e.getLocale() : void 0 !== o && o.getLocale ? o.getLocale() : "en"
          }
          n.I18n = b;
          var k, O = function(e) {
            return "string" == typeof e
          };

          function A(e, n) {
            return e.indexOf(n[0]) > -1
          }

          function S(e, n, t) {
            return k.interpolate(e, n, t).join("")
          }

          function P(e, n, t) {
            return T(e, (function(e, o) {
              ! function(e, n, t, o) {
                var a = e[n];
                if (O(a)) {
                  if (A(a, o) && (e[n] = S(a, t[0].values, o), t.length > 1)) {
                    var r = e[n + "Locales"] = {};
                    t.forEach((function(e) {
                      r[e.locale] = S(a, e.values, o)
                    }))
                  }
                } else P(a, t, o)
              }(e, o, n, t)
            })), e
          }

          function T(e, n) {
            if (Array.isArray(e)) {
              for (var t = 0; t < e.length; t++)
                if (n(e, t)) return !0
            } else if (d(e))
              for (var o in e)
                if (n(e, o)) return !0;
            return !1
          }
          n.isString = O
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default, t( /*! ./../../../webpack/buildin/global.js */ 3))
      },
    23:
      /*!***************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
        \***************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e, n) {
          if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    24:
      /*!************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
        \************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./toPropertyKey.js */ 12);

        function a(e, n) {
          for (var t = 0; t < n.length; t++) {
            var a = n[t];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, o(a.key), a)
          }
        }
        e.exports = function(e, n, t) {
          return n && a(e.prototype, n), t && a(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
          }), e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    25:
      /*!******************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
        \******************************************************************************************/
      /*! exports provided: default */
      function(e, n, t) {
        "use strict";
        t.r(n),
          function(e) {
            /*!
             * Vue.js v2.6.11
             * (c) 2014-2024 Evan You
             * Released under the MIT License.
             */
            var t = Object.freeze({});

            function o(e) {
              return null == e
            }

            function a(e) {
              return null != e
            }

            function r(e) {
              return !0 === e
            }

            function c(e) {
              return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e
            }

            function i(e) {
              return null !== e && "object" == typeof e
            }
            var s = Object.prototype.toString;

            function d(e) {
              return s.call(e).slice(8, -1)
            }

            function u(e) {
              return "[object Object]" === s.call(e)
            }

            function l(e) {
              var n = parseFloat(String(e));
              return n >= 0 && Math.floor(n) === n && isFinite(e)
            }

            function m(e) {
              return a(e) && "function" == typeof e.then && "function" == typeof e.catch
            }

            function f(e) {
              return null == e ? "" : Array.isArray(e) || u(e) && e.toString === s ? JSON.stringify(e, null, 2) : String(e)
            }

            function p(e) {
              var n = parseFloat(e);
              return isNaN(n) ? e : n
            }

            function h(e, n) {
              for (var t = Object.create(null), o = e.split(","), a = 0; a < o.length; a++) t[o[a]] = !0;
              return n ? function(e) {
                return t[e.toLowerCase()]
              } : function(e) {
                return t[e]
              }
            }
            var v = h("slot,component", !0),
              g = h("key,ref,slot,slot-scope,is");

            function y(e, n) {
              if (e.length) {
                var t = e.indexOf(n);
                if (t > -1) return e.splice(t, 1)
              }
            }
            var _ = Object.prototype.hasOwnProperty;

            function b(e, n) {
              return _.call(e, n)
            }

            function w(e) {
              var n = Object.create(null);
              return function(t) {
                return n[t] || (n[t] = e(t))
              }
            }
            var x = /-(\w)/g,
              k = w((function(e) {
                return e.replace(x, (function(e, n) {
                  return n ? n.toUpperCase() : ""
                }))
              })),
              O = w((function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
              })),
              A = /\B([A-Z])/g,
              S = w((function(e) {
                return e.replace(A, "-$1").toLowerCase()
              }));
            var P = Function.prototype.bind ? function(e, n) {
              return e.bind(n)
            } : function(e, n) {
              function t(t) {
                var o = arguments.length;
                return o ? o > 1 ? e.apply(n, arguments) : e.call(n, t) : e.call(n)
              }
              return t._length = e.length, t
            };

            function T(e, n) {
              n = n || 0;
              for (var t = e.length - n, o = new Array(t); t--;) o[t] = e[t + n];
              return o
            }

            function I(e, n) {
              for (var t in n) e[t] = n[t];
              return e
            }

            function E(e) {
              for (var n = {}, t = 0; t < e.length; t++) e[t] && I(n, e[t]);
              return n
            }

            function C(e, n, t) {}
            var j = function(e, n, t) {
                return !1
              },
              $ = function(e) {
                return e
              };

            function L(e, n) {
              if (e === n) return !0;
              var t = i(e),
                o = i(n);
              if (!t || !o) return !t && !o && String(e) === String(n);
              try {
                var a = Array.isArray(e),
                  r = Array.isArray(n);
                if (a && r) return e.length === n.length && e.every((function(e, t) {
                  return L(e, n[t])
                }));
                if (e instanceof Date && n instanceof Date) return e.getTime() === n.getTime();
                if (a || r) return !1;
                var c = Object.keys(e),
                  s = Object.keys(n);
                return c.length === s.length && c.every((function(t) {
                  return L(e[t], n[t])
                }))
              } catch (e) {
                return !1
              }
            }

            function M(e, n) {
              for (var t = 0; t < e.length; t++)
                if (L(e[t], n)) return t;
              return -1
            }

            function D(e) {
              var n = !1;
              return function() {
                n || (n = !0, e.apply(this, arguments))
              }
            }
            var N = ["component", "directive", "filter"],
              R = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
              U = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                productionTip: !0,
                devtools: !0,
                performance: !1,
                errorHandler: null,
                warnHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: j,
                isReservedAttr: j,
                isUnknownElement: j,
                getTagNamespace: C,
                parsePlatformTagName: $,
                mustUseProp: j,
                async: !0,
                _lifecycleHooks: R
              },
              F = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

            function B(e) {
              var n = (e + "").charCodeAt(0);
              return 36 === n || 95 === n
            }

            function q(e, n, t, o) {
              Object.defineProperty(e, n, {
                value: t,
                enumerable: !!o,
                writable: !0,
                configurable: !0
              })
            }
            var V = new RegExp("[^" + F.source + ".$_\\d]");
            var H, K = "__proto__" in {},
              z = "undefined" != typeof window,
              W = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
              J = W && WXEnvironment.platform.toLowerCase(),
              G = z && window.navigator && window.navigator.userAgent.toLowerCase(),
              Y = G && /msie|trident/.test(G),
              X = (G && G.indexOf("msie 9.0"), G && G.indexOf("edge/") > 0),
              Q = (G && G.indexOf("android"), G && /iphone|ipad|ipod|ios/.test(G) || "ios" === J),
              Z = (G && /chrome\/\d+/.test(G), G && /phantomjs/.test(G), G && G.match(/firefox\/(\d+)/), {}.watch);
            if (z) try {
              var ee = {};
              Object.defineProperty(ee, "passive", {
                get: function() {}
              }), window.addEventListener("test-passive", null, ee)
            } catch (e) {}
            var ne = function() {
                return void 0 === H && (H = !z && !W && void 0 !== e && (e.process && "server" === e.process.env.VUE_ENV)), H
              },
              te = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function oe(e) {
              return "function" == typeof e && /native code/.test(e.toString())
            }
            var ae, re = "undefined" != typeof Symbol && oe(Symbol) && "undefined" != typeof Reflect && oe(Reflect.ownKeys);
            ae = "undefined" != typeof Set && oe(Set) ? Set : function() {
              function e() {
                this.set = Object.create(null)
              }
              return e.prototype.has = function(e) {
                return !0 === this.set[e]
              }, e.prototype.add = function(e) {
                this.set[e] = !0
              }, e.prototype.clear = function() {
                this.set = Object.create(null)
              }, e
            }();
            var ce = C,
              ie = C,
              se = C,
              de = C,
              ue = "undefined" != typeof console,
              le = /(?:^|[-_])(\w)/g;
            ce = function(e, n) {
              var t = n ? se(n) : "";
              U.warnHandler ? U.warnHandler.call(null, e, n, t) : ue && !U.silent && console.error("[Vue warn]: " + e + t)
            }, ie = function(e, n) {
              ue && !U.silent && console.warn("[Vue tip]: " + e + (n ? se(n) : ""))
            }, de = function(e, n) {
              if (e.$root === e) return e.$options && e.$options.__file ? "" + e.$options.__file : "<Root>";
              var t = "function" == typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e,
                o = t.name || t._componentTag,
                a = t.__file;
              if (!o && a) {
                var r = a.match(/([^/\\]+)\.vue$/);
                o = r && r[1]
              }
              return (o ? "<" + (o.replace(le, (function(e) {
                return e.toUpperCase()
              })).replace(/[-_]/g, "") + ">") : "<Anonymous>") + (a && !1 !== n ? " at " + a : "")
            };
            se = function(e) {
              if (e._isVue && e.$parent) {
                for (var n = [], t = 0; e && "PageBody" !== e.$options.name;) {
                  if (n.length > 0) {
                    var o = n[n.length - 1];
                    if (o.constructor === e.constructor) {
                      t++, e = e.$parent;
                      continue
                    }
                    t > 0 && (n[n.length - 1] = [o, t], t = 0)
                  }!e.$options.isReserved && n.push(e), e = e.$parent
                }
                return "\n\nfound in\n\n" + n.map((function(e, n) {
                  return "" + (0 === n ? "---\x3e " : function(e, n) {
                    for (var t = ""; n;) n % 2 == 1 && (t += e), n > 1 && (e += e), n >>= 1;
                    return t
                  }(" ", 5 + 2 * n)) + (Array.isArray(e) ? de(e[0]) + "... (" + e[1] + " recursive calls)" : de(e))
                })).join("\n")
              }
              return "\n\n(found in " + de(e) + ")"
            };
            var me = 0,
              fe = function() {
                this.id = me++, this.subs = []
              };

            function pe(e) {
              fe.SharedObject.targetStack.push(e), fe.SharedObject.target = e, fe.target = e
            }

            function he() {
              fe.SharedObject.targetStack.pop(), fe.SharedObject.target = fe.SharedObject.targetStack[fe.SharedObject.targetStack.length - 1], fe.target = fe.SharedObject.target
            }
            fe.prototype.addSub = function(e) {
              this.subs.push(e)
            }, fe.prototype.removeSub = function(e) {
              y(this.subs, e)
            }, fe.prototype.depend = function() {
              fe.SharedObject.target && fe.SharedObject.target.addDep(this)
            }, fe.prototype.notify = function() {
              var e = this.subs.slice();
              U.async || e.sort((function(e, n) {
                return e.id - n.id
              }));
              for (var n = 0, t = e.length; n < t; n++) e[n].update()
            }, (fe.SharedObject = {}).target = null, fe.SharedObject.targetStack = [];
            var ve = function(e, n, t, o, a, r, c, i) {
                this.tag = e, this.data = n, this.children = t, this.text = o, this.elm = a, this.ns = void 0, this.context = r, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = n && n.key, this.componentOptions = c, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = i, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
              },
              ge = {
                child: {
                  configurable: !0
                }
              };
            ge.child.get = function() {
              return this.componentInstance
            }, Object.defineProperties(ve.prototype, ge);
            var ye = function(e) {
              void 0 === e && (e = "");
              var n = new ve;
              return n.text = e, n.isComment = !0, n
            };

            function _e(e) {
              return new ve(void 0, void 0, void 0, String(e))
            }
            var be = Array.prototype,
              we = Object.create(be);
            ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach((function(e) {
              var n = be[e];
              q(we, e, (function() {
                for (var t = [], o = arguments.length; o--;) t[o] = arguments[o];
                var a, r = n.apply(this, t),
                  c = this.__ob__;
                switch (e) {
                  case "push":
                  case "unshift":
                    a = t;
                    break;
                  case "splice":
                    a = t.slice(2)
                }
                return a && c.observeArray(a), c.dep.notify(), r
              }))
            }));
            var xe = Object.getOwnPropertyNames(we),
              ke = !0;

            function Oe(e) {
              ke = e
            }
            var Ae = function(e) {
              this.value = e, this.dep = new fe, this.vmCount = 0, q(e, "__ob__", this), Array.isArray(e) ? (K ? e.push !== e.__proto__.push ? Se(e, we, xe) : function(e, n) {
                e.__proto__ = n
              }(e, we) : Se(e, we, xe), this.observeArray(e)) : this.walk(e)
            };

            function Se(e, n, t) {
              for (var o = 0, a = t.length; o < a; o++) {
                var r = t[o];
                q(e, r, n[r])
              }
            }

            function Pe(e, n) {
              var t;
              if (i(e) && !(e instanceof ve)) return b(e, "__ob__") && e.__ob__ instanceof Ae ? t = e.__ob__ : !ke || ne() || !Array.isArray(e) && !u(e) || !Object.isExtensible(e) || e._isVue || e.__v_isMPComponent || (t = new Ae(e)), n && t && t.vmCount++, t
            }

            function Te(e, n, t, o, a) {
              var r = new fe,
                c = Object.getOwnPropertyDescriptor(e, n);
              if (!c || !1 !== c.configurable) {
                var i = c && c.get,
                  s = c && c.set;
                i && !s || 2 !== arguments.length || (t = e[n]);
                var d = !a && Pe(t);
                Object.defineProperty(e, n, {
                  enumerable: !0,
                  configurable: !0,
                  get: function() {
                    var n = i ? i.call(e) : t;
                    return fe.SharedObject.target && (r.depend(), d && (d.dep.depend(), Array.isArray(n) && Ce(n))), n
                  },
                  set: function(n) {
                    var c = i ? i.call(e) : t;
                    n === c || n != n && c != c || (o && o(), i && !s || (s ? s.call(e, n) : t = n, d = !a && Pe(n), r.notify()))
                  }
                })
              }
            }

            function Ie(e, n, t) {
              if ((o(e) || c(e)) && ce("Cannot set reactive property on undefined, null, or primitive value: " + e), Array.isArray(e) && l(n)) return e.length = Math.max(e.length, n), e.splice(n, 1, t), t;
              if (n in e && !(n in Object.prototype)) return e[n] = t, t;
              var a = e.__ob__;
              return e._isVue || a && a.vmCount ? (ce("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), t) : a ? (Te(a.value, n, t), a.dep.notify(), t) : (e[n] = t, t)
            }

            function Ee(e, n) {
              if ((o(e) || c(e)) && ce("Cannot delete reactive property on undefined, null, or primitive value: " + e), Array.isArray(e) && l(n)) e.splice(n, 1);
              else {
                var t = e.__ob__;
                e._isVue || t && t.vmCount ? ce("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : b(e, n) && (delete e[n], t && t.dep.notify())
              }
            }

            function Ce(e) {
              for (var n = void 0, t = 0, o = e.length; t < o; t++)(n = e[t]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && Ce(n)
            }
            Ae.prototype.walk = function(e) {
              for (var n = Object.keys(e), t = 0; t < n.length; t++) Te(e, n[t])
            }, Ae.prototype.observeArray = function(e) {
              for (var n = 0, t = e.length; n < t; n++) Pe(e[n])
            };
            var je = U.optionMergeStrategies;

            function $e(e, n) {
              if (!n) return e;
              for (var t, o, a, r = re ? Reflect.ownKeys(n) : Object.keys(n), c = 0; c < r.length; c++) "__ob__" !== (t = r[c]) && (o = e[t], a = n[t], b(e, t) ? o !== a && u(o) && u(a) && $e(o, a) : Ie(e, t, a));
              return e
            }

            function Le(e, n, t) {
              return t ? function() {
                var o = "function" == typeof n ? n.call(t, t) : n,
                  a = "function" == typeof e ? e.call(t, t) : e;
                return o ? $e(o, a) : a
              } : n ? e ? function() {
                return $e("function" == typeof n ? n.call(this, this) : n, "function" == typeof e ? e.call(this, this) : e)
              } : n : e
            }

            function Me(e, n) {
              var t = n ? e ? e.concat(n) : Array.isArray(n) ? n : [n] : e;
              return t ? function(e) {
                for (var n = [], t = 0; t < e.length; t++) - 1 === n.indexOf(e[t]) && n.push(e[t]);
                return n
              }(t) : t
            }

            function De(e, n, t, o) {
              var a = Object.create(e || null);
              return n ? (Ue(o, n, t), I(a, n)) : a
            }
            je.el = je.propsData = function(e, n, t, o) {
              return t || ce('option "' + o + '" can only be used during instance creation with the `new` keyword.'), Ne(e, n)
            }, je.data = function(e, n, t) {
              return t ? Le(e, n, t) : n && "function" != typeof n ? (ce('The "data" option should be a function that returns a per-instance value in component definitions.', t), e) : Le(e, n)
            }, R.forEach((function(e) {
              je[e] = Me
            })), N.forEach((function(e) {
              je[e + "s"] = De
            })), je.watch = function(e, n, t, o) {
              if (e === Z && (e = void 0), n === Z && (n = void 0), !n) return Object.create(e || null);
              if (Ue(o, n, t), !e) return n;
              var a = {};
              for (var r in I(a, e), n) {
                var c = a[r],
                  i = n[r];
                c && !Array.isArray(c) && (c = [c]), a[r] = c ? c.concat(i) : Array.isArray(i) ? i : [i]
              }
              return a
            }, je.props = je.methods = je.inject = je.computed = function(e, n, t, o) {
              if (n && Ue(o, n, t), !e) return n;
              var a = Object.create(null);
              return I(a, e), n && I(a, n), a
            }, je.provide = Le;
            var Ne = function(e, n) {
              return void 0 === n ? e : n
            };

            function Re(e) {
              new RegExp("^[a-zA-Z][\\-\\.0-9_" + F.source + "]*$").test(e) || ce('Invalid component name: "' + e + '". Component names should conform to valid custom element name in html5 specification.'), (v(e) || U.isReservedTag(e)) && ce("Do not use built-in or reserved HTML elements as component id: " + e)
            }

            function Ue(e, n, t) {
              u(n) || ce('Invalid value for option "' + e + '": expected an Object, but got ' + d(n) + ".", t)
            }

            function Fe(e, n, t) {
              if (function(e) {
                  for (var n in e.components) Re(n)
                }(n), "function" == typeof n && (n = n.options), function(e, n) {
                  var t = e.props;
                  if (t) {
                    var o, a, r = {};
                    if (Array.isArray(t))
                      for (o = t.length; o--;) "string" == typeof(a = t[o]) ? r[k(a)] = {
                        type: null
                      } : ce("props must be strings when using array syntax.");
                    else if (u(t))
                      for (var c in t) a = t[c], r[k(c)] = u(a) ? a : {
                        type: a
                      };
                    else ce('Invalid value for option "props": expected an Array or an Object, but got ' + d(t) + ".", n);
                    e.props = r
                  }
                }(n, t), function(e, n) {
                  var t = e.inject;
                  if (t) {
                    var o = e.inject = {};
                    if (Array.isArray(t))
                      for (var a = 0; a < t.length; a++) o[t[a]] = {
                        from: t[a]
                      };
                    else if (u(t))
                      for (var r in t) {
                        var c = t[r];
                        o[r] = u(c) ? I({
                          from: r
                        }, c) : {
                          from: c
                        }
                      } else ce('Invalid value for option "inject": expected an Array or an Object, but got ' + d(t) + ".", n)
                  }
                }(n, t), function(e) {
                  var n = e.directives;
                  if (n)
                    for (var t in n) {
                      var o = n[t];
                      "function" == typeof o && (n[t] = {
                        bind: o,
                        update: o
                      })
                    }
                }(n), !n._base && (n.extends && (e = Fe(e, n.extends, t)), n.mixins))
                for (var o = 0, a = n.mixins.length; o < a; o++) e = Fe(e, n.mixins[o], t);
              var r, c = {};
              for (r in e) i(r);
              for (r in n) b(e, r) || i(r);

              function i(o) {
                var a = je[o] || Ne;
                c[o] = a(e[o], n[o], t, o)
              }
              return c
            }

            function Be(e, n, t, o) {
              if ("string" == typeof t) {
                var a = e[n];
                if (b(a, t)) return a[t];
                var r = k(t);
                if (b(a, r)) return a[r];
                var c = O(r);
                if (b(a, c)) return a[c];
                var i = a[t] || a[r] || a[c];
                return o && !i && ce("Failed to resolve " + n.slice(0, -1) + ": " + t, e), i
              }
            }

            function qe(e, n, t, o) {
              var a = n[e],
                r = !b(t, e),
                c = t[e],
                s = We(Boolean, a.type);
              if (s > -1)
                if (r && !b(a, "default")) c = !1;
                else if ("" === c || c === S(e)) {
                var u = We(String, a.type);
                (u < 0 || s < u) && (c = !0)
              }
              if (void 0 === c) {
                c = function(e, n, t) {
                  if (!b(n, "default")) return;
                  var o = n.default;
                  i(o) && ce('Invalid default value for prop "' + t + '": Props with type Object/Array must use a factory function to return the default value.', e);
                  if (e && e.$options.propsData && void 0 === e.$options.propsData[t] && void 0 !== e._props[t]) return e._props[t];
                  return "function" == typeof o && "Function" !== Ke(n.type) ? o.call(e) : o
                }(o, a, e);
                var l = ke;
                Oe(!0), Pe(c), Oe(l)
              }
              return function(e, n, t, o, a) {
                if (e.required && a) return void ce('Missing required prop: "' + n + '"', o);
                if (null == t && !e.required) return;
                var r = e.type,
                  c = !r || !0 === r,
                  i = [];
                if (r) {
                  Array.isArray(r) || (r = [r]);
                  for (var s = 0; s < r.length && !c; s++) {
                    var u = He(t, r[s]);
                    i.push(u.expectedType || ""), c = u.valid
                  }
                }
                if (!c) return void ce(function(e, n, t) {
                  var o = 'Invalid prop: type check failed for prop "' + e + '". Expected ' + t.map(O).join(", "),
                    a = t[0],
                    r = d(n),
                    c = Je(n, a),
                    i = Je(n, r);
                  1 === t.length && Ge(a) && ! function() {
                    var e = [],
                      n = arguments.length;
                    for (; n--;) e[n] = arguments[n];
                    return e.some((function(e) {
                      return "boolean" === e.toLowerCase()
                    }))
                  }(a, r) && (o += " with value " + c);
                  o += ", got " + r + " ", Ge(r) && (o += "with value " + i + ".");
                  return o
                }(n, t, i), o);
                var l = e.validator;
                l && (l(t) || ce('Invalid prop: custom validator check failed for prop "' + n + '".', o))
              }(a, e, c, o, r), c
            }
            var Ve = /^(String|Number|Boolean|Function|Symbol)$/;

            function He(e, n) {
              var t, o = Ke(n);
              if (Ve.test(o)) {
                var a = typeof e;
                (t = a === o.toLowerCase()) || "object" !== a || (t = e instanceof n)
              } else t = "Object" === o ? u(e) : "Array" === o ? Array.isArray(e) : e instanceof n;
              return {
                valid: t,
                expectedType: o
              }
            }

            function Ke(e) {
              var n = e && e.toString().match(/^\s*function (\w+)/);
              return n ? n[1] : ""
            }

            function ze(e, n) {
              return Ke(e) === Ke(n)
            }

            function We(e, n) {
              if (!Array.isArray(n)) return ze(n, e) ? 0 : -1;
              for (var t = 0, o = n.length; t < o; t++)
                if (ze(n[t], e)) return t;
              return -1
            }

            function Je(e, n) {
              return "String" === n ? '"' + e + '"' : "Number" === n ? "" + Number(e) : "" + e
            }

            function Ge(e) {
              return ["string", "number", "boolean"].some((function(n) {
                return e.toLowerCase() === n
              }))
            }

            function Ye(e, n, t) {
              pe();
              try {
                if (n)
                  for (var o = n; o = o.$parent;) {
                    var a = o.$options.errorCaptured;
                    if (a)
                      for (var r = 0; r < a.length; r++) try {
                        if (!1 === a[r].call(o, e, n, t)) return
                      } catch (e) {
                        Qe(e, o, "errorCaptured hook")
                      }
                  }
                Qe(e, n, t)
              } finally {
                he()
              }
            }

            function Xe(e, n, t, o, a) {
              var r;
              try {
                (r = t ? e.apply(n, t) : e.call(n)) && !r._isVue && m(r) && !r._handled && (r.catch((function(e) {
                  return Ye(e, o, a + " (Promise/async)")
                })), r._handled = !0)
              } catch (e) {
                Ye(e, o, a)
              }
              return r
            }

            function Qe(e, n, t) {
              if (U.errorHandler) try {
                return U.errorHandler.call(null, e, n, t)
              } catch (n) {
                n !== e && Ze(n, null, "config.errorHandler")
              }
              Ze(e, n, t)
            }

            function Ze(e, n, t) {
              if (ce("Error in " + t + ': "' + e.toString() + '"', n), !z && !W || "undefined" == typeof console) throw e;
              console.error(e)
            }
            var en, nn, tn = [],
              on = !1;

            function an() {
              on = !1;
              var e = tn.slice(0);
              tn.length = 0;
              for (var n = 0; n < e.length; n++) e[n]()
            }
            if ("undefined" != typeof Promise && oe(Promise)) {
              var rn = Promise.resolve();
              en = function() {
                rn.then(an), Q && setTimeout(C)
              }
            } else if (Y || "undefined" == typeof MutationObserver || !oe(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) en = "undefined" != typeof setImmediate && oe(setImmediate) ? function() {
              setImmediate(an)
            } : function() {
              setTimeout(an, 0)
            };
            else {
              var cn = 1,
                sn = new MutationObserver(an),
                dn = document.createTextNode(String(cn));
              sn.observe(dn, {
                characterData: !0
              }), en = function() {
                cn = (cn + 1) % 2, dn.data = String(cn)
              }
            }

            function un(e, n) {
              var t;
              if (tn.push((function() {
                  if (e) try {
                    e.call(n)
                  } catch (e) {
                    Ye(e, n, "nextTick")
                  } else t && t(n)
                })), on || (on = !0, en()), !e && "undefined" != typeof Promise) return new Promise((function(e) {
                t = e
              }))
            }
            var ln = h("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"),
              mn = function(e, n) {
                ce('Property or method "' + n + '" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property. See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', e)
              },
              fn = function(e, n) {
                ce('Property "' + n + '" must be accessed with "$data.' + n + '" because properties starting with "$" or "_" are not proxied in the Vue instance to prevent conflicts with Vue internals. See: https://vuejs.org/v2/api/#data', e)
              },
              pn = "undefined" != typeof Proxy && oe(Proxy);
            if (pn) {
              var hn = h("stop,prevent,self,ctrl,shift,alt,meta,exact");
              U.keyCodes = new Proxy(U.keyCodes, {
                set: function(e, n, t) {
                  return hn(n) ? (ce("Avoid overwriting built-in modifier in config.keyCodes: ." + n), !1) : (e[n] = t, !0)
                }
              })
            }
            var vn = {
                has: function(e, n) {
                  var t = n in e,
                    o = ln(n) || "string" == typeof n && "_" === n.charAt(0) && !(n in e.$data);
                  return t || o || (n in e.$data ? fn(e, n) : mn(e, n)), t || !o
                }
              },
              gn = {
                get: function(e, n) {
                  return "string" != typeof n || n in e || (n in e.$data ? fn(e, n) : mn(e, n)), e[n]
                }
              };
            nn = function(e) {
              if (pn) {
                var n = e.$options,
                  t = n.render && n.render._withStripped ? gn : vn;
                e._renderProxy = new Proxy(e, t)
              } else e._renderProxy = e
            };
            var yn, _n, bn = new ae;

            function wn(e) {
              ! function e(n, t) {
                var o, a, r = Array.isArray(n);
                if (!r && !i(n) || Object.isFrozen(n) || n instanceof ve) return;
                if (n.__ob__) {
                  var c = n.__ob__.dep.id;
                  if (t.has(c)) return;
                  t.add(c)
                }
                if (r)
                  for (o = n.length; o--;) e(n[o], t);
                else
                  for (a = Object.keys(n), o = a.length; o--;) e(n[a[o]], t)
              }(e, bn), bn.clear()
            }
            var xn = z && window.performance;
            xn && xn.mark && xn.measure && xn.clearMarks && xn.clearMeasures && (yn = function(e) {
              return xn.mark(e)
            }, _n = function(e, n, t) {
              xn.measure(e, n, t), xn.clearMarks(n), xn.clearMarks(t)
            });
            var kn = w((function(e) {
              var n = "&" === e.charAt(0),
                t = "~" === (e = n ? e.slice(1) : e).charAt(0),
                o = "!" === (e = t ? e.slice(1) : e).charAt(0);
              return {
                name: e = o ? e.slice(1) : e,
                once: t,
                capture: o,
                passive: n
              }
            }));

            function On(e, n) {
              function t() {
                var e = arguments,
                  o = t.fns;
                if (!Array.isArray(o)) return Xe(o, null, arguments, n, "v-on handler");
                for (var a = o.slice(), r = 0; r < a.length; r++) Xe(a[r], null, e, n, "v-on handler")
              }
              return t.fns = e, t
            }

            function An(e, n, t, r) {
              var c = n.options.mpOptions && n.options.mpOptions.properties;
              if (o(c)) return t;
              var i = n.options.mpOptions.externalClasses || [],
                s = e.attrs,
                d = e.props;
              if (a(s) || a(d))
                for (var u in c) {
                  var l = S(u);
                  (Sn(t, d, u, l, !0) || Sn(t, s, u, l, !1)) && t[u] && -1 !== i.indexOf(l) && r[k(t[u])] && (t[u] = r[k(t[u])])
                }
              return t
            }

            function Sn(e, n, t, o, r) {
              if (a(n)) {
                if (b(n, t)) return e[t] = n[t], r || delete n[t], !0;
                if (b(n, o)) return e[t] = n[o], r || delete n[o], !0
              }
              return !1
            }

            function Pn(e) {
              return c(e) ? [_e(e)] : Array.isArray(e) ? function e(n, t) {
                var i, s, d, u, l = [];
                for (i = 0; i < n.length; i++) o(s = n[i]) || "boolean" == typeof s || (d = l.length - 1, u = l[d], Array.isArray(s) ? s.length > 0 && (Tn((s = e(s, (t || "") + "_" + i))[0]) && Tn(u) && (l[d] = _e(u.text + s[0].text), s.shift()), l.push.apply(l, s)) : c(s) ? Tn(u) ? l[d] = _e(u.text + s) : "" !== s && l.push(_e(s)) : Tn(s) && Tn(u) ? l[d] = _e(u.text + s.text) : (r(n._isVList) && a(s.tag) && o(s.key) && a(t) && (s.key = "__vlist" + t + "_" + i + "__"), l.push(s)));
                return l
              }(e) : void 0
            }

            function Tn(e) {
              return a(e) && a(e.text) && !1 === e.isComment
            }

            function In(e) {
              var n = e.$options.provide;
              n && (e._provided = "function" == typeof n ? n.call(e) : n)
            }

            function En(e) {
              var n = Cn(e.$options.inject, e);
              n && (Oe(!1), Object.keys(n).forEach((function(t) {
                Te(e, t, n[t], (function() {
                  ce('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + t + '"', e)
                }))
              })), Oe(!0))
            }

            function Cn(e, n) {
              if (e) {
                for (var t = Object.create(null), o = re ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < o.length; a++) {
                  var r = o[a];
                  if ("__ob__" !== r) {
                    for (var c = e[r].from, i = n; i;) {
                      if (i._provided && b(i._provided, c)) {
                        t[r] = i._provided[c];
                        break
                      }
                      i = i.$parent
                    }
                    if (!i)
                      if ("default" in e[r]) {
                        var s = e[r].default;
                        t[r] = "function" == typeof s ? s.call(n) : s
                      } else ce('Injection "' + r + '" not found', n)
                  }
                }
                return t
              }
            }

            function jn(e, n) {
              if (!e || !e.length) return {};
              for (var t = {}, o = 0, a = e.length; o < a; o++) {
                var r = e[o],
                  c = r.data;
                if (c && c.attrs && c.attrs.slot && delete c.attrs.slot, r.context !== n && r.fnContext !== n || !c || null == c.slot) r.asyncMeta && r.asyncMeta.data && "page" === r.asyncMeta.data.slot ? (t.page || (t.page = [])).push(r) : (t.default || (t.default = [])).push(r);
                else {
                  var i = c.slot,
                    s = t[i] || (t[i] = []);
                  "template" === r.tag ? s.push.apply(s, r.children || []) : s.push(r)
                }
              }
              for (var d in t) t[d].every($n) && delete t[d];
              return t
            }

            function $n(e) {
              return e.isComment && !e.asyncFactory || " " === e.text
            }

            function Ln(e, n, o) {
              var a, r = Object.keys(n).length > 0,
                c = e ? !!e.$stable : !r,
                i = e && e.$key;
              if (e) {
                if (e._normalized) return e._normalized;
                if (c && o && o !== t && i === o.$key && !r && !o.$hasNormal) return o;
                for (var s in a = {}, e) e[s] && "$" !== s[0] && (a[s] = Mn(n, s, e[s]))
              } else a = {};
              for (var d in n) d in a || (a[d] = Dn(n, d));
              return e && Object.isExtensible(e) && (e._normalized = a), q(a, "$stable", c), q(a, "$key", i), q(a, "$hasNormal", r), a
            }

            function Mn(e, n, t) {
              var o = function() {
                var e = arguments.length ? t.apply(null, arguments) : t({});
                return (e = e && "object" == typeof e && !Array.isArray(e) ? [e] : Pn(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e
              };
              return t.proxy && Object.defineProperty(e, n, {
                get: o,
                enumerable: !0,
                configurable: !0
              }), o
            }

            function Dn(e, n) {
              return function() {
                return e[n]
              }
            }

            function Nn(e, n) {
              var t, o, r, c, s;
              if (Array.isArray(e) || "string" == typeof e)
                for (t = new Array(e.length), o = 0, r = e.length; o < r; o++) t[o] = n(e[o], o, o, o);
              else if ("number" == typeof e)
                for (t = new Array(e), o = 0; o < e; o++) t[o] = n(o + 1, o, o, o);
              else if (i(e))
                if (re && e[Symbol.iterator]) {
                  t = [];
                  for (var d = e[Symbol.iterator](), u = d.next(); !u.done;) t.push(n(u.value, t.length, o, o++)), u = d.next()
                } else
                  for (c = Object.keys(e), t = new Array(c.length), o = 0, r = c.length; o < r; o++) s = c[o], t[o] = n(e[s], s, o, o);
              return a(t) || (t = []), t._isVList = !0, t
            }

            function Rn(e, n, t, o) {
              var a, r = this.$scopedSlots[e];
              r ? (t = t || {}, o && (i(o) || ce("slot v-bind without argument expects an Object", this), t = I(I({}, o), t)), a = r(t, this, t._i) || n) : a = this.$slots[e] || n;
              var c = t && t.slot;
              return c ? this.$createElement("template", {
                slot: c
              }, a) : a
            }

            function Un(e) {
              return Be(this.$options, "filters", e, !0) || $
            }

            function Fn(e, n) {
              return Array.isArray(e) ? -1 === e.indexOf(n) : e !== n
            }

            function Bn(e, n, t, o, a) {
              var r = U.keyCodes[n] || t;
              return a && o && !U.keyCodes[n] ? Fn(a, o) : r ? Fn(r, e) : o ? S(o) !== n : void 0
            }

            function qn(e, n, t, o, a) {
              if (t)
                if (i(t)) {
                  var r;
                  Array.isArray(t) && (t = E(t));
                  var c = function(c) {
                    if ("class" === c || "style" === c || g(c)) r = e;
                    else {
                      var i = e.attrs && e.attrs.type;
                      r = o || U.mustUseProp(n, i, c) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                    }
                    var s = k(c),
                      d = S(c);
                    s in r || d in r || (r[c] = t[c], a && ((e.on || (e.on = {}))["update:" + c] = function(e) {
                      t[c] = e
                    }))
                  };
                  for (var s in t) c(s)
                } else ce("v-bind without argument expects an Object or Array value", this);
              return e
            }

            function Vn(e, n) {
              var t = this._staticTrees || (this._staticTrees = []),
                o = t[e];
              return o && !n || Kn(o = t[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), o
            }

            function Hn(e, n, t) {
              return Kn(e, "__once__" + n + (t ? "_" + t : ""), !0), e
            }

            function Kn(e, n, t) {
              if (Array.isArray(e))
                for (var o = 0; o < e.length; o++) e[o] && "string" != typeof e[o] && zn(e[o], n + "_" + o, t);
              else zn(e, n, t)
            }

            function zn(e, n, t) {
              e.isStatic = !0, e.key = n, e.isOnce = t
            }

            function Wn(e, n) {
              if (n)
                if (u(n)) {
                  var t = e.on = e.on ? I({}, e.on) : {};
                  for (var o in n) {
                    var a = t[o],
                      r = n[o];
                    t[o] = a ? [].concat(a, r) : r
                  }
                } else ce("v-on without argument expects an Object value", this);
              return e
            }

            function Jn(e, n, t, o) {
              n = n || {
                $stable: !t
              };
              for (var a = 0; a < e.length; a++) {
                var r = e[a];
                Array.isArray(r) ? Jn(r, n, t) : r && (r.proxy && (r.fn.proxy = !0), n[r.key] = r.fn)
              }
              return o && (n.$key = o), n
            }

            function Gn(e, n) {
              for (var t = 0; t < n.length; t += 2) {
                var o = n[t];
                "string" == typeof o && o ? e[n[t]] = n[t + 1] : "" !== o && null !== o && ce("Invalid value for dynamic directive argument (expected string or null): " + o, this)
              }
              return e
            }

            function Yn(e, n) {
              return "string" == typeof e ? n + e : e
            }

            function Xn(e) {
              e._o = Hn, e._n = p, e._s = f, e._l = Nn, e._t = Rn, e._q = L, e._i = M, e._m = Vn, e._f = Un, e._k = Bn, e._b = qn, e._v = _e, e._e = ye, e._u = Jn, e._g = Wn, e._d = Gn, e._p = Yn
            }

            function Qn(e, n, o, a, c) {
              var i, s = this,
                d = c.options;
              b(a, "_uid") ? (i = Object.create(a))._original = a : (i = a, a = a._original);
              var u = r(d._compiled),
                l = !u;
              this.data = e, this.props = n, this.children = o, this.parent = a, this.listeners = e.on || t, this.injections = Cn(d.inject, a), this.slots = function() {
                return s.$slots || Ln(e.scopedSlots, s.$slots = jn(o, a)), s.$slots
              }, Object.defineProperty(this, "scopedSlots", {
                enumerable: !0,
                get: function() {
                  return Ln(e.scopedSlots, this.slots())
                }
              }), u && (this.$options = d, this.$slots = this.slots(), this.$scopedSlots = Ln(e.scopedSlots, this.$slots)), d._scopeId ? this._c = function(e, n, t, o) {
                var r = rt(i, e, n, t, o, l);
                return r && !Array.isArray(r) && (r.fnScopeId = d._scopeId, r.fnContext = a), r
              } : this._c = function(e, n, t, o) {
                return rt(i, e, n, t, o, l)
              }
            }

            function Zn(e, n, t, o, a) {
              var r = function(e) {
                var n = new ve(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                return n.ns = e.ns, n.isStatic = e.isStatic, n.key = e.key, n.isComment = e.isComment, n.fnContext = e.fnContext, n.fnOptions = e.fnOptions, n.fnScopeId = e.fnScopeId, n.asyncMeta = e.asyncMeta, n.isCloned = !0, n
              }(e);
              return r.fnContext = t, r.fnOptions = o, (r.devtoolsMeta = r.devtoolsMeta || {}).renderContext = a, n.slot && ((r.data || (r.data = {})).slot = n.slot), r
            }

            function et(e, n) {
              for (var t in n) e[k(t)] = n[t]
            }
            Xn(Qn.prototype);
            var nt = {
                init: function(e, n) {
                  if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                    var t = e;
                    nt.prepatch(t, t)
                  } else {
                    (e.componentInstance = function(e, n) {
                      var t = {
                          _isComponent: !0,
                          _parentVnode: e,
                          parent: n
                        },
                        o = e.data.inlineTemplate;
                      a(o) && (t.render = o.render, t.staticRenderFns = o.staticRenderFns);
                      return new e.componentOptions.Ctor(t)
                    }(e, ft)).$mount(n ? e.elm : void 0, n)
                  }
                },
                prepatch: function(e, n) {
                  var o = n.componentOptions;
                  ! function(e, n, o, a, r) {
                    pt = !0;
                    var c = a.data.scopedSlots,
                      i = e.$scopedSlots,
                      s = !!(c && !c.$stable || i !== t && !i.$stable || c && e.$scopedSlots.$key !== c.$key),
                      d = !!(r || e.$options._renderChildren || s);
                    e.$options._parentVnode = a, e.$vnode = a, e._vnode && (e._vnode.parent = a);
                    if (e.$options._renderChildren = r, e.$attrs = a.data.attrs || t, e.$listeners = o || t, n && e.$options.props) {
                      Oe(!1);
                      for (var u = e._props, l = e.$options._propKeys || [], m = 0; m < l.length; m++) {
                        var f = l[m],
                          p = e.$options.props;
                        u[f] = qe(f, p, n, e)
                      }
                      Oe(!0), e.$options.propsData = n
                    }
                    e._$updateProperties && e._$updateProperties(e), o = o || t;
                    var h = e.$options._parentListeners;
                    e.$options._parentListeners = o, mt(e, o, h), d && (e.$slots = jn(r, a.context), e.$forceUpdate());
                    pt = !1
                  }(n.componentInstance = e.componentInstance, o.propsData, o.listeners, n, o.children)
                },
                insert: function(e) {
                  var n, t = e.context,
                    o = e.componentInstance;
                  o._isMounted || (gt(o, "onServiceCreated"), gt(o, "onServiceAttached"), o._isMounted = !0, gt(o, "mounted")), e.data.keepAlive && (t._isMounted ? ((n = o)._inactive = !1, _t.push(n)) : vt(o, !0))
                },
                destroy: function(e) {
                  var n = e.componentInstance;
                  n._isDestroyed || (e.data.keepAlive ? function e(n, t) {
                    if (t && (n._directInactive = !0, ht(n))) return;
                    if (!n._inactive) {
                      n._inactive = !0;
                      for (var o = 0; o < n.$children.length; o++) e(n.$children[o]);
                      gt(n, "deactivated")
                    }
                  }(n, !0) : n.$destroy())
                }
              },
              tt = Object.keys(nt);

            function ot(e, n, c, s, d) {
              if (!o(e)) {
                var u = c.$options._base;
                if (i(e) && (e = u.extend(e)), "function" == typeof e) {
                  var l;
                  if (o(e.cid) && void 0 === (e = function(e, n) {
                      if (r(e.error) && a(e.errorComp)) return e.errorComp;
                      if (a(e.resolved)) return e.resolved;
                      var t = it;
                      t && a(e.owners) && -1 === e.owners.indexOf(t) && e.owners.push(t);
                      if (r(e.loading) && a(e.loadingComp)) return e.loadingComp;
                      if (t && !a(e.owners)) {
                        var c = e.owners = [t],
                          s = !0,
                          d = null,
                          u = null;
                        t.$on("hook:destroyed", (function() {
                          return y(c, t)
                        }));
                        var l = function(e) {
                            for (var n = 0, t = c.length; n < t; n++) c[n].$forceUpdate();
                            e && (c.length = 0, null !== d && (clearTimeout(d), d = null), null !== u && (clearTimeout(u), u = null))
                          },
                          f = D((function(t) {
                            e.resolved = st(t, n), s ? c.length = 0 : l(!0)
                          })),
                          p = D((function(n) {
                            ce("Failed to resolve async component: " + String(e) + (n ? "\nReason: " + n : "")), a(e.errorComp) && (e.error = !0, l(!0))
                          })),
                          h = e(f, p);
                        return i(h) && (m(h) ? o(e.resolved) && h.then(f, p) : m(h.component) && (h.component.then(f, p), a(h.error) && (e.errorComp = st(h.error, n)), a(h.loading) && (e.loadingComp = st(h.loading, n), 0 === h.delay ? e.loading = !0 : d = setTimeout((function() {
                          d = null, o(e.resolved) && o(e.error) && (e.loading = !0, l(!1))
                        }), h.delay || 200)), a(h.timeout) && (u = setTimeout((function() {
                          u = null, o(e.resolved) && p("timeout (" + h.timeout + "ms)")
                        }), h.timeout)))), s = !1, e.loading ? e.loadingComp : e.resolved
                      }
                    }(l = e, u))) return function(e, n, t, o, a) {
                    var r = ye();
                    return r.asyncFactory = e, r.asyncMeta = {
                      data: n,
                      context: t,
                      children: o,
                      tag: a
                    }, r
                  }(l, n, c, s, d);
                  n = n || {}, Ut(e), a(n.model) && function(e, n) {
                    var t = e.model && e.model.prop || "value",
                      o = e.model && e.model.event || "input";
                    (n.attrs || (n.attrs = {}))[t] = n.model.value;
                    var r = n.on || (n.on = {}),
                      c = r[o],
                      i = n.model.callback;
                    a(c) ? (Array.isArray(c) ? -1 === c.indexOf(i) : c !== i) && (r[o] = [i].concat(c)) : r[o] = i
                  }(e.options, n);
                  var f = function(e, n, t, r) {
                    var c = n.options.props;
                    if (o(c)) return An(e, n, {}, r);
                    var i = {},
                      s = e.attrs,
                      d = e.props;
                    if (a(s) || a(d))
                      for (var u in c) {
                        var l = S(u),
                          m = u.toLowerCase();
                        u !== m && s && b(s, m) && ie('Prop "' + m + '" is passed to component ' + de(t || n) + ', but the declared prop name is "' + u + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + l + '" instead of "' + u + '".'), Sn(i, d, u, l, !0) || Sn(i, s, u, l, !1)
                      }
                    return An(e, n, i, r)
                  }(n, e, d, c);
                  if (r(e.options.functional)) return function(e, n, o, r, c) {
                    var i = e.options,
                      s = {},
                      d = i.props;
                    if (a(d))
                      for (var u in d) s[u] = qe(u, d, n || t);
                    else a(o.attrs) && et(s, o.attrs), a(o.props) && et(s, o.props);
                    var l = new Qn(o, s, c, r, e),
                      m = i.render.call(null, l._c, l);
                    if (m instanceof ve) return Zn(m, o, l.parent, i, l);
                    if (Array.isArray(m)) {
                      for (var f = Pn(m) || [], p = new Array(f.length), h = 0; h < f.length; h++) p[h] = Zn(f[h], o, l.parent, i, l);
                      return p
                    }
                  }(e, f, n, c, s);
                  var p = n.on;
                  if (n.on = n.nativeOn, r(e.options.abstract)) {
                    var h = n.slot;
                    n = {}, h && (n.slot = h)
                  }! function(e) {
                    for (var n = e.hook || (e.hook = {}), t = 0; t < tt.length; t++) {
                      var o = tt[t],
                        a = n[o],
                        r = nt[o];
                      a === r || a && a._merged || (n[o] = a ? at(r, a) : r)
                    }
                  }(n);
                  var v = e.options.name || d;
                  return new ve("vue-component-" + e.cid + (v ? "-" + v : ""), n, void 0, void 0, void 0, c, {
                    Ctor: e,
                    propsData: f,
                    listeners: p,
                    tag: d,
                    children: s
                  }, l)
                }
                ce("Invalid Component definition: " + String(e), c)
              }
            }

            function at(e, n) {
              var t = function(t, o) {
                e(t, o), n(t, o)
              };
              return t._merged = !0, t
            }

            function rt(e, n, t, s, d, u) {
              return (Array.isArray(t) || c(t)) && (d = s, s = t, t = void 0), r(u) && (d = 2),
                function(e, n, t, s, d) {
                  if (a(t) && a(t.__ob__)) return ce("Avoid using observed data object as vnode data: " + JSON.stringify(t) + "\nAlways create fresh vnode data objects in each render!", e), ye();
                  a(t) && a(t.is) && (n = t.is);
                  if (!n) return ye();
                  a(t) && a(t.key) && !c(t.key) && ce("Avoid using non-primitive value as key, use string/number value instead.", e);
                  Array.isArray(s) && "function" == typeof s[0] && ((t = t || {}).scopedSlots = {
                    default: s[0]
                  }, s.length = 0);
                  2 === d ? s = Pn(s) : 1 === d && (s = function(e) {
                    for (var n = 0; n < e.length; n++)
                      if (Array.isArray(e[n])) return Array.prototype.concat.apply([], e);
                    return e
                  }(s));
                  var u, l;
                  if ("string" == typeof n) {
                    var m;
                    l = e.$vnode && e.$vnode.ns || U.getTagNamespace(n), U.isReservedTag(n) ? (a(t) && a(t.nativeOn) && ce("The .native modifier for v-on is only valid on components but it was used on <" + n + ">.", e), u = new ve(U.parsePlatformTagName(n), t, s, void 0, void 0, e)) : u = t && t.pre || !a(m = Be(e.$options, "components", n)) ? new ve(n, t, s, void 0, void 0, e) : ot(m, t, e, s, n)
                  } else u = ot(n, t, e, s);
                  return Array.isArray(u) ? u : a(u) ? (a(l) && function e(n, t, c) {
                    n.ns = t, "foreignObject" === n.tag && (t = void 0, c = !0);
                    if (a(n.children))
                      for (var i = 0, s = n.children.length; i < s; i++) {
                        var d = n.children[i];
                        a(d.tag) && (o(d.ns) || r(c) && "svg" !== d.tag) && e(d, t, c)
                      }
                  }(u, l), a(t) && function(e) {
                    i(e.style) && wn(e.style);
                    i(e.class) && wn(e.class)
                  }(t), u) : ye()
                }(e, n, t, s, d)
            }
            var ct, it = null;

            function st(e, n) {
              return (e.__esModule || re && "Module" === e[Symbol.toStringTag]) && (e = e.default), i(e) ? n.extend(e) : e
            }

            function dt(e, n) {
              ct.$on(e, n)
            }

            function ut(e, n) {
              ct.$off(e, n)
            }

            function lt(e, n) {
              var t = ct;
              return function o() {
                var a = n.apply(null, arguments);
                null !== a && t.$off(e, o)
              }
            }

            function mt(e, n, t) {
              ct = e,
                function(e, n, t, a, c, i) {
                  var s, d, u, l;
                  for (s in e) d = e[s], u = n[s], l = kn(s), o(d) ? ce('Invalid handler for event "' + l.name + '": got ' + String(d), i) : o(u) ? (o(d.fns) && (d = e[s] = On(d, i)), r(l.once) && (d = e[s] = c(l.name, d, l.capture)), t(l.name, d, l.capture, l.passive, l.params)) : d !== u && (u.fns = d, e[s] = u);
                  for (s in n) o(e[s]) && a((l = kn(s)).name, n[s], l.capture)
                }(n, t || {}, dt, ut, lt, e), ct = void 0
            }
            var ft = null,
              pt = !1;

            function ht(e) {
              for (; e && (e = e.$parent);)
                if (e._inactive) return !0;
              return !1
            }

            function vt(e, n) {
              if (n) {
                if (e._directInactive = !1, ht(e)) return
              } else if (e._directInactive) return;
              if (e._inactive || null === e._inactive) {
                e._inactive = !1;
                for (var t = 0; t < e.$children.length; t++) vt(e.$children[t]);
                gt(e, "activated")
              }
            }

            function gt(e, n) {
              pe();
              var t = e.$options[n],
                o = n + " hook";
              if (t)
                for (var a = 0, r = t.length; a < r; a++) Xe(t[a], e, null, e, o);
              e._hasHookEvent && e.$emit("hook:" + n), he()
            }
            var yt = [],
              _t = [],
              bt = {},
              wt = {},
              xt = !1,
              kt = !1,
              Ot = 0;
            var At = Date.now;
            if (z && !Y) {
              var St = window.performance;
              St && "function" == typeof St.now && At() > document.createEvent("Event").timeStamp && (At = function() {
                return St.now()
              })
            }

            function Pt() {
              var e, n;
              for (At(), kt = !0, yt.sort((function(e, n) {
                  return e.id - n.id
                })), Ot = 0; Ot < yt.length; Ot++)
                if ((e = yt[Ot]).before && e.before(), n = e.id, bt[n] = null, e.run(), null != bt[n] && (wt[n] = (wt[n] || 0) + 1, wt[n] > 100)) {
                  ce("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
                  break
                } var t = _t.slice(),
                o = yt.slice();
              Ot = yt.length = _t.length = 0, bt = {}, wt = {}, xt = kt = !1,
                function(e) {
                  for (var n = 0; n < e.length; n++) e[n]._inactive = !0, vt(e[n], !0)
                }(t),
                function(e) {
                  var n = e.length;
                  for (; n--;) {
                    var t = e[n],
                      o = t.vm;
                    o._watcher === t && o._isMounted && !o._isDestroyed && gt(o, "updated")
                  }
                }(o), te && U.devtools && te.emit("flush")
            }
            var Tt = 0,
              It = function(e, n, t, o, a) {
                this.vm = e, a && (e._watcher = this), e._watchers.push(this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync, this.before = o.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = t, this.id = ++Tt, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ae, this.newDepIds = new ae, this.expression = n.toString(), "function" == typeof n ? this.getter = n : (this.getter = function(e) {
                  if (!V.test(e)) {
                    var n = e.split(".");
                    return function(e) {
                      for (var t = 0; t < n.length; t++) {
                        if (!e) return;
                        e = e[n[t]]
                      }
                      return e
                    }
                  }
                }(n), this.getter || (this.getter = C, ce('Failed watching path: "' + n + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e))), this.value = this.lazy ? void 0 : this.get()
              };
            It.prototype.get = function() {
              var e;
              pe(this);
              var n = this.vm;
              try {
                e = this.getter.call(n, n)
              } catch (e) {
                if (!this.user) throw e;
                Ye(e, n, 'getter for watcher "' + this.expression + '"')
              } finally {
                this.deep && wn(e), he(), this.cleanupDeps()
              }
              return e
            }, It.prototype.addDep = function(e) {
              var n = e.id;
              this.newDepIds.has(n) || (this.newDepIds.add(n), this.newDeps.push(e), this.depIds.has(n) || e.addSub(this))
            }, It.prototype.cleanupDeps = function() {
              for (var e = this.deps.length; e--;) {
                var n = this.deps[e];
                this.newDepIds.has(n.id) || n.removeSub(this)
              }
              var t = this.depIds;
              this.depIds = this.newDepIds, this.newDepIds = t, this.newDepIds.clear(), t = this.deps, this.deps = this.newDeps, this.newDeps = t, this.newDeps.length = 0
            }, It.prototype.update = function() {
              this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
                var n = e.id;
                if (null == bt[n]) {
                  if (bt[n] = !0, kt) {
                    for (var t = yt.length - 1; t > Ot && yt[t].id > e.id;) t--;
                    yt.splice(t + 1, 0, e)
                  } else yt.push(e);
                  if (!xt) {
                    if (xt = !0, !U.async) return void Pt();
                    un(Pt)
                  }
                }
              }(this)
            }, It.prototype.run = function() {
              if (this.active) {
                var e = this.get();
                if (e !== this.value || i(e) || this.deep) {
                  var n = this.value;
                  if (this.value = e, this.user) try {
                    this.cb.call(this.vm, e, n)
                  } catch (e) {
                    Ye(e, this.vm, 'callback for watcher "' + this.expression + '"')
                  } else this.cb.call(this.vm, e, n)
                }
              }
            }, It.prototype.evaluate = function() {
              this.value = this.get(), this.dirty = !1
            }, It.prototype.depend = function() {
              for (var e = this.deps.length; e--;) this.deps[e].depend()
            }, It.prototype.teardown = function() {
              if (this.active) {
                this.vm._isBeingDestroyed || y(this.vm._watchers, this);
                for (var e = this.deps.length; e--;) this.deps[e].removeSub(this);
                this.active = !1
              }
            };
            var Et = {
              enumerable: !0,
              configurable: !0,
              get: C,
              set: C
            };

            function Ct(e, n, t) {
              Et.get = function() {
                return this[n][t]
              }, Et.set = function(e) {
                this[n][t] = e
              }, Object.defineProperty(e, t, Et)
            }

            function jt(e) {
              e._watchers = [];
              var n = e.$options;
              n.props && function(e, n) {
                var t = e.$options.propsData || {},
                  o = e._props = {},
                  a = e.$options._propKeys = [],
                  r = !e.$parent;
                r || Oe(!1);
                var c = function(c) {
                  a.push(c);
                  var i = qe(c, n, t, e),
                    s = S(c);
                  (g(s) || U.isReservedAttr(s)) && ce('"' + s + '" is a reserved attribute and cannot be used as component prop.', e), Te(o, c, i, (function() {
                    if (!r && !pt) {
                      if ("mp-baidu" === e.mpHost || "mp-kuaishou" === e.mpHost || "mp-xhs" === e.mpHost) return;
                      if ("value" === c && Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field")) return;
                      if (e._getFormData) return;
                      for (var n = e.$parent; n;) {
                        if (n.__next_tick_pending) return;
                        n = n.$parent
                      }
                      ce("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + c + '"', e)
                    }
                  })), c in e || Ct(e, "_props", c)
                };
                for (var i in n) c(i);
                Oe(!0)
              }(e, n.props), n.methods && function(e, n) {
                var t = e.$options.props;
                for (var o in n) "function" != typeof n[o] && ce('Method "' + o + '" has type "' + typeof n[o] + '" in the component definition. Did you reference the function correctly?', e), t && b(t, o) && ce('Method "' + o + '" has already been defined as a prop.', e), o in e && B(o) && ce('Method "' + o + '" conflicts with an existing Vue instance method. Avoid defining component methods that start with _ or $.'), e[o] = "function" != typeof n[o] ? C : P(n[o], e)
              }(e, n.methods), n.data ? function(e) {
                var n = e.$options.data;
                u(n = e._data = "function" == typeof n ? function(e, n) {
                  pe();
                  try {
                    return e.call(n, n)
                  } catch (e) {
                    return Ye(e, n, "data()"), {}
                  } finally {
                    he()
                  }
                }(n, e) : n || {}) || (n = {}, ce("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e));
                var t = Object.keys(n),
                  o = e.$options.props,
                  a = e.$options.methods,
                  r = t.length;
                for (; r--;) {
                  var c = t[r];
                  a && b(a, c) && ce('Method "' + c + '" has already been defined as a data property.', e), o && b(o, c) ? ce('The data property "' + c + '" is already declared as a prop. Use prop default value instead.', e) : B(c) || Ct(e, "_data", c)
                }
                Pe(n, !0)
              }(e) : Pe(e._data = {}, !0), n.computed && function(e, n) {
                var t = e._computedWatchers = Object.create(null),
                  o = ne();
                for (var a in n) {
                  var r = n[a],
                    c = "function" == typeof r ? r : r.get;
                  null == c && ce('Getter is missing for computed property "' + a + '".', e), o || (t[a] = new It(e, c || C, C, $t)), a in e ? a in e.$data ? ce('The computed property "' + a + '" is already defined in data.', e) : e.$options.props && a in e.$options.props && ce('The computed property "' + a + '" is already defined as a prop.', e) : Lt(e, a, r)
                }
              }(e, n.computed), n.watch && n.watch !== Z && function(e, n) {
                for (var t in n) {
                  var o = n[t];
                  if (Array.isArray(o))
                    for (var a = 0; a < o.length; a++) Nt(e, t, o[a]);
                  else Nt(e, t, o)
                }
              }(e, n.watch)
            }
            var $t = {
              lazy: !0
            };

            function Lt(e, n, t) {
              var o = !ne();
              "function" == typeof t ? (Et.get = o ? Mt(n) : Dt(t), Et.set = C) : (Et.get = t.get ? o && !1 !== t.cache ? Mt(n) : Dt(t.get) : C, Et.set = t.set || C), Et.set === C && (Et.set = function() {
                ce('Computed property "' + n + '" was assigned to but it has no setter.', this)
              }), Object.defineProperty(e, n, Et)
            }

            function Mt(e) {
              return function() {
                var n = this._computedWatchers && this._computedWatchers[e];
                if (n) return n.dirty && n.evaluate(), fe.SharedObject.target && n.depend(), n.value
              }
            }

            function Dt(e) {
              return function() {
                return e.call(this, this)
              }
            }

            function Nt(e, n, t, o) {
              return u(t) && (o = t, t = t.handler), "string" == typeof t && (t = e[t]), e.$watch(n, t, o)
            }
            var Rt = 0;

            function Ut(e) {
              var n = e.options;
              if (e.super) {
                var t = Ut(e.super);
                if (t !== e.superOptions) {
                  e.superOptions = t;
                  var o = function(e) {
                    var n, t = e.options,
                      o = e.sealedOptions;
                    for (var a in t) t[a] !== o[a] && (n || (n = {}), n[a] = t[a]);
                    return n
                  }(e);
                  o && I(e.extendOptions, o), (n = e.options = Fe(t, e.extendOptions)).name && (n.components[n.name] = e)
                }
              }
              return n
            }

            function Ft(e) {
              this instanceof Ft || ce("Vue is a constructor and should be called with the `new` keyword"), this._init(e)
            }

            function Bt(e) {
              e.cid = 0;
              var n = 1;
              e.extend = function(e) {
                e = e || {};
                var t = this,
                  o = t.cid,
                  a = e._Ctor || (e._Ctor = {});
                if (a[o]) return a[o];
                var r = e.name || t.options.name;
                r && Re(r);
                var c = function(e) {
                  this._init(e)
                };
                return (c.prototype = Object.create(t.prototype)).constructor = c, c.cid = n++, c.options = Fe(t.options, e), c.super = t, c.options.props && function(e) {
                  var n = e.options.props;
                  for (var t in n) Ct(e.prototype, "_props", t)
                }(c), c.options.computed && function(e) {
                  var n = e.options.computed;
                  for (var t in n) Lt(e.prototype, t, n[t])
                }(c), c.extend = t.extend, c.mixin = t.mixin, c.use = t.use, N.forEach((function(e) {
                  c[e] = t[e]
                })), r && (c.options.components[r] = c), c.superOptions = t.options, c.extendOptions = e, c.sealedOptions = I({}, c.options), a[o] = c, c
              }
            }

            function qt(e) {
              return e && (e.Ctor.options.name || e.tag)
            }

            function Vt(e, n) {
              return Array.isArray(e) ? e.indexOf(n) > -1 : "string" == typeof e ? e.split(",").indexOf(n) > -1 : (t = e, "[object RegExp]" === s.call(t) && e.test(n));
              var t
            }

            function Ht(e, n) {
              var t = e.cache,
                o = e.keys,
                a = e._vnode;
              for (var r in t) {
                var c = t[r];
                if (c) {
                  var i = qt(c.componentOptions);
                  i && !n(i) && Kt(t, r, o, a)
                }
              }
            }

            function Kt(e, n, t, o) {
              var a = e[n];
              !a || o && a.tag === o.tag || a.componentInstance.$destroy(), e[n] = null, y(t, n)
            }! function(e) {
              e.prototype._init = function(e) {
                var n, o, a = this;
                a._uid = Rt++, U.performance && yn && (n = "vue-perf-start:" + a._uid, o = "vue-perf-end:" + a._uid, yn(n)), a._isVue = !0, e && e._isComponent ? function(e, n) {
                    var t = e.$options = Object.create(e.constructor.options),
                      o = n._parentVnode;
                    t.parent = n.parent, t._parentVnode = o;
                    var a = o.componentOptions;
                    t.propsData = a.propsData, t._parentListeners = a.listeners, t._renderChildren = a.children, t._componentTag = a.tag, n.render && (t.render = n.render, t.staticRenderFns = n.staticRenderFns)
                  }(a, e) : a.$options = Fe(Ut(a.constructor), e || {}, a), nn(a), a._self = a,
                  function(e) {
                    var n = e.$options,
                      t = n.parent;
                    if (t && !n.abstract) {
                      for (; t.$options.abstract && t.$parent;) t = t.$parent;
                      t.$children.push(e)
                    }
                    e.$parent = t, e.$root = t ? t.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
                  }(a),
                  function(e) {
                    e._events = Object.create(null), e._hasHookEvent = !1;
                    var n = e.$options._parentListeners;
                    n && mt(e, n)
                  }(a),
                  function(e) {
                    e._vnode = null, e._staticTrees = null;
                    var n = e.$options,
                      o = e.$vnode = n._parentVnode,
                      a = o && o.context;
                    e.$slots = jn(n._renderChildren, a), e.$scopedSlots = t, e._c = function(n, t, o, a) {
                      return rt(e, n, t, o, a, !1)
                    }, e.$createElement = function(n, t, o, a) {
                      return rt(e, n, t, o, a, !0)
                    };
                    var r = o && o.data;
                    Te(e, "$attrs", r && r.attrs || t, (function() {
                      !pt && ce("$attrs is readonly.", e)
                    }), !0), Te(e, "$listeners", n._parentListeners || t, (function() {
                      !pt && ce("$listeners is readonly.", e)
                    }), !0)
                  }(a), gt(a, "beforeCreate"), !a._$fallback && En(a), jt(a), !a._$fallback && In(a), !a._$fallback && gt(a, "created"), U.performance && yn && (a._name = de(a, !1), yn(o), _n("vue " + a._name + " init", n, o)), a.$options.el && a.$mount(a.$options.el)
              }
            }(Ft),
            function(e) {
              var n = {
                  get: function() {
                    return this._data
                  }
                },
                t = {
                  get: function() {
                    return this._props
                  }
                };
              n.set = function() {
                ce("Avoid replacing instance root $data. Use nested data properties instead.", this)
              }, t.set = function() {
                ce("$props is readonly.", this)
              }, Object.defineProperty(e.prototype, "$data", n), Object.defineProperty(e.prototype, "$props", t), e.prototype.$set = Ie, e.prototype.$delete = Ee, e.prototype.$watch = function(e, n, t) {
                if (u(n)) return Nt(this, e, n, t);
                (t = t || {}).user = !0;
                var o = new It(this, e, n, t);
                if (t.immediate) try {
                  n.call(this, o.value)
                } catch (e) {
                  Ye(e, this, 'callback for immediate watcher "' + o.expression + '"')
                }
                return function() {
                  o.teardown()
                }
              }
            }(Ft),
            function(e) {
              var n = /^hook:/;
              e.prototype.$on = function(e, t) {
                var o = this;
                if (Array.isArray(e))
                  for (var a = 0, r = e.length; a < r; a++) o.$on(e[a], t);
                else(o._events[e] || (o._events[e] = [])).push(t), n.test(e) && (o._hasHookEvent = !0);
                return o
              }, e.prototype.$once = function(e, n) {
                var t = this;

                function o() {
                  t.$off(e, o), n.apply(t, arguments)
                }
                return o.fn = n, t.$on(e, o), t
              }, e.prototype.$off = function(e, n) {
                var t = this;
                if (!arguments.length) return t._events = Object.create(null), t;
                if (Array.isArray(e)) {
                  for (var o = 0, a = e.length; o < a; o++) t.$off(e[o], n);
                  return t
                }
                var r, c = t._events[e];
                if (!c) return t;
                if (!n) return t._events[e] = null, t;
                for (var i = c.length; i--;)
                  if ((r = c[i]) === n || r.fn === n) {
                    c.splice(i, 1);
                    break
                  } return t
              }, e.prototype.$emit = function(e) {
                var n = this,
                  t = e.toLowerCase();
                t !== e && n._events[t] && ie('Event "' + t + '" is emitted in component ' + de(n) + ' but the handler is registered for "' + e + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + S(e) + '" instead of "' + e + '".');
                var o = n._events[e];
                if (o) {
                  o = o.length > 1 ? T(o) : o;
                  for (var a = T(arguments, 1), r = 'event handler for "' + e + '"', c = 0, i = o.length; c < i; c++) Xe(o[c], n, a, n, r)
                }
                return n
              }
            }(Ft),
            function(e) {
              e.prototype._update = function(e, n) {
                var t = this,
                  o = t.$el,
                  a = t._vnode,
                  r = function(e) {
                    var n = ft;
                    return ft = e,
                      function() {
                        ft = n
                      }
                  }(t);
                t._vnode = e, t.$el = a ? t.__patch__(a, e) : t.__patch__(t.$el, e, n, !1), r(), o && (o.__vue__ = null), t.$el && (t.$el.__vue__ = t), t.$vnode && t.$parent && t.$vnode === t.$parent._vnode && (t.$parent.$el = t.$el)
              }, e.prototype.$forceUpdate = function() {
                this._watcher && this._watcher.update()
              }, e.prototype.$destroy = function() {
                var e = this;
                if (!e._isBeingDestroyed) {
                  gt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                  var n = e.$parent;
                  !n || n._isBeingDestroyed || e.$options.abstract || y(n.$children, e), e._watcher && e._watcher.teardown();
                  for (var t = e._watchers.length; t--;) e._watchers[t].teardown();
                  e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), gt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                }
              }
            }(Ft),
            function(e) {
              Xn(e.prototype), e.prototype.$nextTick = function(e) {
                return un(e, this)
              }, e.prototype._render = function() {
                var e, n = this,
                  t = n.$options,
                  o = t.render,
                  a = t._parentVnode;
                a && (n.$scopedSlots = Ln(a.data.scopedSlots, n.$slots, n.$scopedSlots)), n.$vnode = a;
                try {
                  it = n, e = o.call(n._renderProxy, n.$createElement)
                } catch (t) {
                  if (Ye(t, n, "render"), n.$options.renderError) try {
                    e = n.$options.renderError.call(n._renderProxy, n.$createElement, t)
                  } catch (t) {
                    Ye(t, n, "renderError"), e = n._vnode
                  } else e = n._vnode
                } finally {
                  it = null
                }
                return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof ve || (Array.isArray(e) && ce("Multiple root nodes returned from render function. Render function should return a single root node.", n), e = ye()), e.parent = a, e
              }
            }(Ft);
            var zt = [String, RegExp, Array],
              Wt = {
                KeepAlive: {
                  name: "keep-alive",
                  abstract: !0,
                  props: {
                    include: zt,
                    exclude: zt,
                    max: [String, Number]
                  },
                  created: function() {
                    this.cache = Object.create(null), this.keys = []
                  },
                  destroyed: function() {
                    for (var e in this.cache) Kt(this.cache, e, this.keys)
                  },
                  mounted: function() {
                    var e = this;
                    this.$watch("include", (function(n) {
                      Ht(e, (function(e) {
                        return Vt(n, e)
                      }))
                    })), this.$watch("exclude", (function(n) {
                      Ht(e, (function(e) {
                        return !Vt(n, e)
                      }))
                    }))
                  },
                  render: function() {
                    var e = this.$slots.default,
                      n = function(e) {
                        if (Array.isArray(e))
                          for (var n = 0; n < e.length; n++) {
                            var t = e[n];
                            if (a(t) && (a(t.componentOptions) || (o = t).isComment && o.asyncFactory)) return t
                          }
                        var o
                      }(e),
                      t = n && n.componentOptions;
                    if (t) {
                      var o = qt(t),
                        r = this.include,
                        c = this.exclude;
                      if (r && (!o || !Vt(r, o)) || c && o && Vt(c, o)) return n;
                      var i = this.cache,
                        s = this.keys,
                        d = null == n.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : n.key;
                      i[d] ? (n.componentInstance = i[d].componentInstance, y(s, d), s.push(d)) : (i[d] = n, s.push(d), this.max && s.length > parseInt(this.max) && Kt(i, s[0], s, this._vnode)), n.data.keepAlive = !0
                    }
                    return n || e && e[0]
                  }
                }
              };
            ! function(e) {
              var n = {
                get: function() {
                  return U
                },
                set: function() {
                  ce("Do not replace the Vue.config object, set individual fields instead.")
                }
              };
              Object.defineProperty(e, "config", n), e.util = {
                  warn: ce,
                  extend: I,
                  mergeOptions: Fe,
                  defineReactive: Te
                }, e.set = Ie, e.delete = Ee, e.nextTick = un, e.observable = function(e) {
                  return Pe(e), e
                }, e.options = Object.create(null), N.forEach((function(n) {
                  e.options[n + "s"] = Object.create(null)
                })), e.options._base = e, I(e.options.components, Wt),
                function(e) {
                  e.use = function(e) {
                    var n = this._installedPlugins || (this._installedPlugins = []);
                    if (n.indexOf(e) > -1) return this;
                    var t = T(arguments, 1);
                    return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : "function" == typeof e && e.apply(null, t), n.push(e), this
                  }
                }(e),
                function(e) {
                  e.mixin = function(e) {
                    return this.options = Fe(this.options, e), this
                  }
                }(e), Bt(e),
                function(e) {
                  N.forEach((function(n) {
                    e[n] = function(e, t) {
                      return t ? ("component" === n && Re(e), "component" === n && u(t) && (t.name = t.name || e, t = this.options._base.extend(t)), "directive" === n && "function" == typeof t && (t = {
                        bind: t,
                        update: t
                      }), this.options[n + "s"][e] = t, t) : this.options[n + "s"][e]
                    }
                  }))
                }(e)
            }(Ft), Object.defineProperty(Ft.prototype, "$isServer", {
              get: ne
            }), Object.defineProperty(Ft.prototype, "$ssrContext", {
              get: function() {
                return this.$vnode && this.$vnode.ssrContext
              }
            }), Object.defineProperty(Ft, "FunctionalRenderContext", {
              value: Qn
            }), Ft.version = "2.6.11";
            var Jt = "[object Array]",
              Gt = "[object Object]";

            function Yt(e, n) {
              var t = {};
              return function e(n, t) {
                  if (n === t) return;
                  var o = Qt(n),
                    a = Qt(t);
                  if (o == Gt && a == Gt) {
                    if (Object.keys(n).length >= Object.keys(t).length)
                      for (var r in t) {
                        var c = n[r];
                        void 0 === c ? n[r] = null : e(c, t[r])
                      }
                  } else o == Jt && a == Jt && n.length >= t.length && t.forEach((function(t, o) {
                    e(n[o], t)
                  }))
                }(e, n),
                function e(n, t, o, a) {
                  if (n === t) return;
                  var r = Qt(n),
                    c = Qt(t);
                  if (r == Gt)
                    if (c != Gt || Object.keys(n).length < Object.keys(t).length) Xt(a, o, n);
                    else {
                      var i = function(r) {
                        var c = n[r],
                          i = t[r],
                          s = Qt(c),
                          d = Qt(i);
                        if (s != Jt && s != Gt) c !== t[r] && function(e, n) {
                          if (!("[object Null]" !== e && "[object Undefined]" !== e || "[object Null]" !== n && "[object Undefined]" !== n)) return !1;
                          return !0
                        }(s, d) && Xt(a, ("" == o ? "" : o + ".") + r, c);
                        else if (s == Jt) d != Jt || c.length < i.length ? Xt(a, ("" == o ? "" : o + ".") + r, c) : c.forEach((function(n, t) {
                          e(n, i[t], ("" == o ? "" : o + ".") + r + "[" + t + "]", a)
                        }));
                        else if (s == Gt)
                          if (d != Gt || Object.keys(c).length < Object.keys(i).length) Xt(a, ("" == o ? "" : o + ".") + r, c);
                          else
                            for (var u in c) e(c[u], i[u], ("" == o ? "" : o + ".") + r + "." + u, a)
                      };
                      for (var s in n) i(s)
                    }
                  else r == Jt ? c != Jt || n.length < t.length ? Xt(a, o, n) : n.forEach((function(n, r) {
                    e(n, t[r], o + "[" + r + "]", a)
                  })) : Xt(a, o, n)
                }(e, n, "", t), t
            }

            function Xt(e, n, t) {
              e[n] = t
            }

            function Qt(e) {
              return Object.prototype.toString.call(e)
            }

            function Zt(e) {
              if (e.__next_tick_callbacks && e.__next_tick_callbacks.length) {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_DARK_MODE: "false",
                    VUE_APP_NAME: "大学生求职神器",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                  }).VUE_APP_DEBUG) {
                  var n = e.$scope;
                  console.log("[" + +new Date + "][" + (n.is || n.route) + "][" + e._uid + "]:flushCallbacks[" + e.__next_tick_callbacks.length + "]")
                }
                var t = e.__next_tick_callbacks.slice(0);
                e.__next_tick_callbacks.length = 0;
                for (var o = 0; o < t.length; o++) t[o]()
              }
            }

            function eo(e, n) {
              if (!e.__next_tick_pending && ! function(e) {
                  return yt.find((function(n) {
                    return e._watcher === n
                  }))
                }(e)) {
                if (Object({
                    NODE_ENV: "development",
                    VUE_APP_DARK_MODE: "false",
                    VUE_APP_NAME: "大学生求职神器",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                  }).VUE_APP_DEBUG) {
                  var t = e.$scope;
                  console.log("[" + +new Date + "][" + (t.is || t.route) + "][" + e._uid + "]:nextVueTick")
                }
                return un(n, e)
              }
              if (Object({
                  NODE_ENV: "development",
                  VUE_APP_DARK_MODE: "false",
                  VUE_APP_NAME: "大学生求职神器",
                  VUE_APP_PLATFORM: "mp-weixin",
                  BASE_URL: "/"
                }).VUE_APP_DEBUG) {
                var o = e.$scope;
                console.log("[" + +new Date + "][" + (o.is || o.route) + "][" + e._uid + "]:nextMPTick")
              }
              var a;
              if (e.__next_tick_callbacks || (e.__next_tick_callbacks = []), e.__next_tick_callbacks.push((function() {
                  if (n) try {
                    n.call(e)
                  } catch (n) {
                    Ye(n, e, "nextTick")
                  } else a && a(e)
                })), !n && "undefined" != typeof Promise) return new Promise((function(e) {
                a = e
              }))
            }

            function no(e, n) {
              return n && (n._isVue || n.__v_isMPComponent) ? {} : n
            }

            function to() {}

            function oo(e) {
              return Array.isArray(e) ? function(e) {
                for (var n, t = "", o = 0, r = e.length; o < r; o++) a(n = oo(e[o])) && "" !== n && (t && (t += " "), t += n);
                return t
              }(e) : i(e) ? function(e) {
                var n = "";
                for (var t in e) e[t] && (n && (n += " "), n += t);
                return n
              }(e) : "string" == typeof e ? e : ""
            }
            var ao = w((function(e) {
              var n = {},
                t = /:(.+)/;
              return e.split(/;(?![^(]*\))/g).forEach((function(e) {
                if (e) {
                  var o = e.split(t);
                  o.length > 1 && (n[o[0].trim()] = o[1].trim())
                }
              })), n
            }));
            var ro = ["createSelectorQuery", "createIntersectionObserver", "selectAllComponents", "selectComponent"];
            var co = ["onLaunch", "onShow", "onHide", "onUniNViewMessage", "onPageNotFound", "onThemeChange", "onError", "onUnhandledRejection", "onInit", "onLoad", "onReady", "onUnload", "onPullDownRefresh", "onReachBottom", "onTabItemTap", "onAddToFavorites", "onShareTimeline", "onShareAppMessage", "onResize", "onPageScroll", "onNavigationBarButtonTap", "onBackPress", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputClicked", "onUploadDouyinVideo", "onNFCReadMessage", "onPageShow", "onPageHide", "onPageResize"];
            Ft.prototype.__patch__ = function(e, n) {
                var t = this;
                if (null !== n && ("page" === this.mpType || "component" === this.mpType)) {
                  var o = this.$scope,
                    a = Object.create(null);
                  try {
                    a = function(e) {
                      var n = Object.create(null);
                      [].concat(Object.keys(e._data || {}), Object.keys(e._computedWatchers || {})).reduce((function(n, t) {
                        return n[t] = e[t], n
                      }), n);
                      var t = e.__composition_api_state__ || e.__secret_vfa_state__,
                        o = t && t.rawBindings;
                      return o && Object.keys(o).forEach((function(t) {
                        n[t] = e[t]
                      })), Object.assign(n, e.$mp.data || {}), Array.isArray(e.$options.behaviors) && -1 !== e.$options.behaviors.indexOf("uni://form-field") && (n.name = e.name, n.value = e.value), JSON.parse(JSON.stringify(n, no))
                    }(this)
                  } catch (e) {
                    console.error(e)
                  }
                  a.__webviewId__ = o.data.__webviewId__;
                  var r = Object.create(null);
                  Object.keys(a).forEach((function(e) {
                    r[e] = o.data[e]
                  }));
                  var c = !1 === this.$shouldDiffData ? a : Yt(a, r);
                  Object.keys(c).length ? (Object({
                    NODE_ENV: "development",
                    VUE_APP_DARK_MODE: "false",
                    VUE_APP_NAME: "大学生求职神器",
                    VUE_APP_PLATFORM: "mp-weixin",
                    BASE_URL: "/"
                  }).VUE_APP_DEBUG && console.log("[" + +new Date + "][" + (o.is || o.route) + "][" + this._uid + "]差量更新", JSON.stringify(c)), this.__next_tick_pending = !0, o.setData(c, (function() {
                    t.__next_tick_pending = !1, Zt(t)
                  }))) : Zt(this)
                }
              }, Ft.prototype.$mount = function(e, n) {
                return function(e, n, t) {
                  return e.mpType ? ("app" === e.mpType && (e.$options.render = to), e.$options.render || (e.$options.render = to, e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || n ? ce("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : ce("Failed to mount component: template or render function not defined.", e)), !e._$fallback && gt(e, "beforeMount"), new It(e, (function() {
                    e._update(e._render(), t)
                  }), C, {
                    before: function() {
                      e._isMounted && !e._isDestroyed && gt(e, "beforeUpdate")
                    }
                  }, !0), t = !1, e) : e
                }(this, e, n)
              },
              function(e) {
                var n = e.extend;
                e.extend = function(e) {
                  var t = (e = e || {}).methods;
                  return t && Object.keys(t).forEach((function(n) {
                    -1 !== co.indexOf(n) && (e[n] = t[n], delete t[n])
                  })), n.call(this, e)
                };
                var t = e.config.optionMergeStrategies,
                  o = t.created;
                co.forEach((function(e) {
                  t[e] = o
                })), e.prototype.__lifecycle_hooks__ = co
              }(Ft),
              function(e) {
                e.config.errorHandler = function(n, t, o) {
                  e.util.warn("Error in " + o + ': "' + n.toString() + '"', t), console.error(n);
                  var a = "function" == typeof getApp && getApp();
                  a && a.onError && a.onError(n)
                };
                var n = e.prototype.$emit;
                e.prototype.$emit = function(e) {
                  if (this.$scope && e) {
                    var t = this.$scope._triggerEvent || this.$scope.triggerEvent;
                    if (t) try {
                      t.call(this.$scope, e, {
                        __args__: T(arguments, 1)
                      })
                    } catch (e) {}
                  }
                  return n.apply(this, arguments)
                }, e.prototype.$nextTick = function(e) {
                  return eo(this, e)
                }, ro.forEach((function(n) {
                  e.prototype[n] = function(e) {
                    return this.$scope && this.$scope[n] ? this.$scope[n](e) : "undefined" != typeof my ? "createSelectorQuery" === n ? my.createSelectorQuery(e) : "createIntersectionObserver" === n ? my.createIntersectionObserver(e) : void 0 : void 0
                  }
                })), e.prototype.__init_provide = In, e.prototype.__init_injections = En, e.prototype.__call_hook = function(e, n) {
                  var t = this;
                  pe();
                  var o, a = t.$options[e],
                    r = e + " hook";
                  if (a)
                    for (var c = 0, i = a.length; c < i; c++) o = Xe(a[c], t, n ? [n] : null, t, r);
                  return t._hasHookEvent && t.$emit("hook:" + e, n), he(), o
                }, e.prototype.__set_model = function(n, t, o, a) {
                  Array.isArray(a) && (-1 !== a.indexOf("trim") && (o = o.trim()), -1 !== a.indexOf("number") && (o = this._n(o))), n || (n = this), e.set(n, t, o)
                }, e.prototype.__set_sync = function(n, t, o) {
                  n || (n = this), e.set(n, t, o)
                }, e.prototype.__get_orig = function(e) {
                  return u(e) && e.$orig || e
                }, e.prototype.__get_value = function(e, n) {
                  return function e(n, t) {
                    var o = t.split("."),
                      a = o[0];
                    return 0 === a.indexOf("__$n") && (a = parseInt(a.replace("__$n", ""))), 1 === o.length ? n[a] : e(n[a], o.slice(1).join("."))
                  }(n || this, e)
                }, e.prototype.__get_class = function(e, n) {
                  return function(e, n) {
                    return a(e) || a(n) ? (t = e, o = oo(n), t ? o ? t + " " + o : t : o || "") : "";
                    var t, o
                  }(n, e)
                }, e.prototype.__get_style = function(e, n) {
                  if (!e && !n) return "";
                  var t, o = (t = e, Array.isArray(t) ? E(t) : "string" == typeof t ? ao(t) : t),
                    a = n ? I(n, o) : o;
                  return Object.keys(a).map((function(e) {
                    return S(e) + ":" + a[e]
                  })).join(";")
                }, e.prototype.__map = function(e, n) {
                  var t, o, a, r, c;
                  if (Array.isArray(e)) {
                    for (t = new Array(e.length), o = 0, a = e.length; o < a; o++) t[o] = n(e[o], o);
                    return t
                  }
                  if (i(e)) {
                    for (r = Object.keys(e), t = Object.create(null), o = 0, a = r.length; o < a; o++) t[c = r[o]] = n(e[c], c, o);
                    return t
                  }
                  if ("number" == typeof e) {
                    for (t = new Array(e), o = 0, a = e; o < a; o++) t[o] = n(o, o);
                    return t
                  }
                  return []
                }
              }(Ft), n.default = Ft
          }.call(this, t( /*! ./../../../../../webpack/buildin/global.js */ 3))
      },
    256:
      /*!************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/util/index.js ***!
        \************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.debounce = void 0, n.formatDate = function(e) {
          if (null == e || "" == e) return "";
          var n = new Date(e),
            t = n.getFullYear(),
            o = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1,
            a = n.getDate() < 10 ? "0" + n.getDate() : n.getDate(),
            r = n.getHours() < 10 ? "0" + n.getHours() : n.getHours(),
            c = n.getMinutes() < 10 ? "0" + n.getMinutes() : n.getMinutes(),
            i = n.getSeconds() < 10 ? "0" + n.getSeconds() : n.getSeconds();
          return t + "-" + o + "-" + a + " " + r + ":" + c + ":" + i
        }, n.formatDateDay = function(e) {
          if (null == e || "" == e) return "";
          var n = new Date(e),
            t = n.getFullYear(),
            o = n.getMonth() + 1 < 10 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1,
            a = n.getDate() < 10 ? "0" + n.getDate() : n.getDate();
          return t + "-" + o + "-" + a
        }, n.throttle = n.numToCapital = void 0;
        n.debounce = function(e, n) {
          var t = null;
          return function() {
            var o = this,
              a = arguments;
            t && clearTimeout(t), t = setTimeout((function() {
              t = null, e.apply(o, a)
            }), n)
          }
        };
        n.throttle = function(e, n) {
          var t = 0,
            o = null;
          return function() {
            var a = this,
              r = arguments,
              c = new Date,
              i = n - (c - t);
            clearTimeout(o), i <= 0 ? (e.apply(a, r), t = new Date) : o = setTimeout((function() {
              e.apply(a, r)
            }), n)
          }
        };
        n.numToCapital = function(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          if (!e) return 0;
          var t = Number((e + "").replace(/[,,]*/g, "")) + "";
          e = parseInt(Number(t));
          var o = "零一二三四五六七八九十",
            a = ["十", "百", "千", "万", "十", "百", "千", "亿", "十", "百", "千"];
          n && (o = "零壹贰叁肆伍陆柒捌玖拾", a = ["拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟"]);
          var r = [],
            c = t.length - 1,
            i = 0,
            s = 10,
            d = function e(n, c, s) {
              var d = n / c,
                u = o[Number(t[s])];
              if (d < 1) return r.push(u), 1 !== Number(t[s]) || 2 !== t.length && 6 !== t.length && 10 !== t.length || r.pop(), !1;
              "零" === u && (["万", "亿"].includes(r[r.length - 1]) || r.pop(), "零" === r[r.length - 1] && r.pop()), r.push(u), ["万", "亿"].includes(r[r.length - 2]) && "零" === u && r.pop(), "万" === r[0] && "亿" === r[1] && r.shift(), "零" === r[0] && r.pop(), r.push(a[i++]), e(n, 10 * c, --s)
            };
          return d(e, s, c), r.reverse().join("")
        }
      },
    26:
      /*!*********************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages.json ***!
        \*********************************************************/
      /*! no static exports found */
      function(e, n) {},
    27:
      /*!************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
        \************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e, o, a) {
          var r = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.uniCloud = n.default = n.UniCloudError = void 0;
          var c = r(t( /*! @babel/runtime/regenerator */ 28)),
            i = r(t( /*! @babel/runtime/helpers/assertThisInitialized */ 30)),
            s = r(t( /*! @babel/runtime/helpers/slicedToArray */ 5)),
            d = r(t( /*! @babel/runtime/helpers/typeof */ 13)),
            u = r(t( /*! @babel/runtime/helpers/toConsumableArray */ 18)),
            l = r(t( /*! @babel/runtime/helpers/asyncToGenerator */ 31)),
            m = r(t( /*! @babel/runtime/helpers/defineProperty */ 11)),
            f = r(t( /*! @babel/runtime/helpers/inherits */ 32)),
            p = r(t( /*! @babel/runtime/helpers/possibleConstructorReturn */ 33)),
            h = r(t( /*! @babel/runtime/helpers/getPrototypeOf */ 34)),
            v = r(t( /*! @babel/runtime/helpers/wrapNativeSuper */ 35)),
            g = r(t( /*! @babel/runtime/helpers/classCallCheck */ 23)),
            y = r(t( /*! @babel/runtime/helpers/createClass */ 24)),
            _ = r(t( /*! @/pages.json */ 37));

          function b(e, n) {
            var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!t) {
              if (Array.isArray(e) || (t = function(e, n) {
                  if (!e) return;
                  if ("string" == typeof e) return w(e, n);
                  var t = Object.prototype.toString.call(e).slice(8, -1);
                  "Object" === t && e.constructor && (t = e.constructor.name);
                  if ("Map" === t || "Set" === t) return Array.from(e);
                  if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return w(e, n)
                }(e)) || n && e && "number" == typeof e.length) {
                t && (e = t);
                var o = 0,
                  a = function() {};
                return {
                  s: a,
                  n: function() {
                    return o >= e.length ? {
                      done: !0
                    } : {
                      done: !1,
                      value: e[o++]
                    }
                  },
                  e: function(e) {
                    throw e
                  },
                  f: a
                }
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, c = !0,
              i = !1;
            return {
              s: function() {
                t = t.call(e)
              },
              n: function() {
                var e = t.next();
                return c = e.done, e
              },
              e: function(e) {
                i = !0, r = e
              },
              f: function() {
                try {
                  c || null == t.return || t.return()
                } finally {
                  if (i) throw r
                }
              }
            }
          }

          function w(e, n) {
            (null == n || n > e.length) && (n = e.length);
            for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
            return o
          }

          function x(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
              }))), t.push.apply(t, o)
            }
            return t
          }

          function k(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2 ? x(Object(t), !0).forEach((function(n) {
                (0, m.default)(e, n, t[n])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }))
            }
            return e
          }

          function O(e) {
            var n = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
              } catch (e) {
                return !1
              }
            }();
            return function() {
              var t, o = (0, h.default)(e);
              if (n) {
                var a = (0, h.default)(this).constructor;
                t = Reflect.construct(o, arguments, a)
              } else t = o.apply(this, arguments);
              return (0, p.default)(this, t)
            }
          }

          function A(e, n, t) {
            return e(t = {
              path: n,
              exports: {},
              require: function(e, n) {
                return function() {
                  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == n && t.path)
              }
            }, t.exports), t.exports
          }
          "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
          var S = A((function(e, n) {
              var t;
              e.exports = t = t || function(e, n) {
                var t = Object.create || function() {
                    function e() {}
                    return function(n) {
                      var t;
                      return e.prototype = n, t = new e, e.prototype = null, t
                    }
                  }(),
                  o = {},
                  a = o.lib = {},
                  r = a.Base = {
                    extend: function(e) {
                      var n = t(this);
                      return e && n.mixIn(e), n.hasOwnProperty("init") && this.init !== n.init || (n.init = function() {
                        n.$super.init.apply(this, arguments)
                      }), n.init.prototype = n, n.$super = this, n
                    },
                    create: function() {
                      var e = this.extend();
                      return e.init.apply(e, arguments), e
                    },
                    init: function() {},
                    mixIn: function(e) {
                      for (var n in e) e.hasOwnProperty(n) && (this[n] = e[n]);
                      e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                      return this.init.prototype.extend(this)
                    }
                  },
                  c = a.WordArray = r.extend({
                    init: function(e, n) {
                      e = this.words = e || [], this.sigBytes = null != n ? n : 4 * e.length
                    },
                    toString: function(e) {
                      return (e || s).stringify(this)
                    },
                    concat: function(e) {
                      var n = this.words,
                        t = e.words,
                        o = this.sigBytes,
                        a = e.sigBytes;
                      if (this.clamp(), o % 4)
                        for (var r = 0; r < a; r++) {
                          var c = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                          n[o + r >>> 2] |= c << 24 - (o + r) % 4 * 8
                        } else
                          for (r = 0; r < a; r += 4) n[o + r >>> 2] = t[r >>> 2];
                      return this.sigBytes += a, this
                    },
                    clamp: function() {
                      var n = this.words,
                        t = this.sigBytes;
                      n[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, n.length = e.ceil(t / 4)
                    },
                    clone: function() {
                      var e = r.clone.call(this);
                      return e.words = this.words.slice(0), e
                    },
                    random: function(n) {
                      for (var t, o = [], a = function(n) {
                          var t = 987654321,
                            o = 4294967295;
                          return function() {
                            var a = ((t = 36969 * (65535 & t) + (t >> 16) & o) << 16) + (n = 18e3 * (65535 & n) + (n >> 16) & o) & o;
                            return a /= 4294967296, (a += .5) * (e.random() > .5 ? 1 : -1)
                          }
                        }, r = 0; r < n; r += 4) {
                        var i = a(4294967296 * (t || e.random()));
                        t = 987654071 * i(), o.push(4294967296 * i() | 0)
                      }
                      return new c.init(o, n)
                    }
                  }),
                  i = o.enc = {},
                  s = i.Hex = {
                    stringify: function(e) {
                      for (var n = e.words, t = e.sigBytes, o = [], a = 0; a < t; a++) {
                        var r = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        o.push((r >>> 4).toString(16)), o.push((15 & r).toString(16))
                      }
                      return o.join("")
                    },
                    parse: function(e) {
                      for (var n = e.length, t = [], o = 0; o < n; o += 2) t[o >>> 3] |= parseInt(e.substr(o, 2), 16) << 24 - o % 8 * 4;
                      return new c.init(t, n / 2)
                    }
                  },
                  d = i.Latin1 = {
                    stringify: function(e) {
                      for (var n = e.words, t = e.sigBytes, o = [], a = 0; a < t; a++) {
                        var r = n[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                        o.push(String.fromCharCode(r))
                      }
                      return o.join("")
                    },
                    parse: function(e) {
                      for (var n = e.length, t = [], o = 0; o < n; o++) t[o >>> 2] |= (255 & e.charCodeAt(o)) << 24 - o % 4 * 8;
                      return new c.init(t, n)
                    }
                  },
                  u = i.Utf8 = {
                    stringify: function(e) {
                      try {
                        return decodeURIComponent(escape(d.stringify(e)))
                      } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                      }
                    },
                    parse: function(e) {
                      return d.parse(unescape(encodeURIComponent(e)))
                    }
                  },
                  l = a.BufferedBlockAlgorithm = r.extend({
                    reset: function() {
                      this._data = new c.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                      "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(n) {
                      var t = this._data,
                        o = t.words,
                        a = t.sigBytes,
                        r = this.blockSize,
                        i = a / (4 * r),
                        s = (i = n ? e.ceil(i) : e.max((0 | i) - this._minBufferSize, 0)) * r,
                        d = e.min(4 * s, a);
                      if (s) {
                        for (var u = 0; u < s; u += r) this._doProcessBlock(o, u);
                        var l = o.splice(0, s);
                        t.sigBytes -= d
                      }
                      return new c.init(l, d)
                    },
                    clone: function() {
                      var e = r.clone.call(this);
                      return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                  });
                a.Hasher = l.extend({
                  cfg: r.extend(),
                  init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset()
                  },
                  reset: function() {
                    l.reset.call(this), this._doReset()
                  },
                  update: function(e) {
                    return this._append(e), this._process(), this
                  },
                  finalize: function(e) {
                    return e && this._append(e), this._doFinalize()
                  },
                  blockSize: 16,
                  _createHelper: function(e) {
                    return function(n, t) {
                      return new e.init(t).finalize(n)
                    }
                  },
                  _createHmacHelper: function(e) {
                    return function(n, t) {
                      return new m.HMAC.init(e, t).finalize(n)
                    }
                  }
                });
                var m = o.algo = {};
                return o
              }(Math)
            })),
            P = (A((function(e, n) {
              var t;
              e.exports = (t = S, function(e) {
                var n = t,
                  o = n.lib,
                  a = o.WordArray,
                  r = o.Hasher,
                  c = n.algo,
                  i = [];
                ! function() {
                  for (var n = 0; n < 64; n++) i[n] = 4294967296 * e.abs(e.sin(n + 1)) | 0
                }();
                var s = c.MD5 = r.extend({
                  _doReset: function() {
                    this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
                  },
                  _doProcessBlock: function(e, n) {
                    for (var t = 0; t < 16; t++) {
                      var o = n + t,
                        a = e[o];
                      e[o] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8)
                    }
                    var r = this._hash.words,
                      c = e[n + 0],
                      s = e[n + 1],
                      f = e[n + 2],
                      p = e[n + 3],
                      h = e[n + 4],
                      v = e[n + 5],
                      g = e[n + 6],
                      y = e[n + 7],
                      _ = e[n + 8],
                      b = e[n + 9],
                      w = e[n + 10],
                      x = e[n + 11],
                      k = e[n + 12],
                      O = e[n + 13],
                      A = e[n + 14],
                      S = e[n + 15],
                      P = r[0],
                      T = r[1],
                      I = r[2],
                      E = r[3];
                    P = d(P, T, I, E, c, 7, i[0]), E = d(E, P, T, I, s, 12, i[1]), I = d(I, E, P, T, f, 17, i[2]), T = d(T, I, E, P, p, 22, i[3]), P = d(P, T, I, E, h, 7, i[4]), E = d(E, P, T, I, v, 12, i[5]), I = d(I, E, P, T, g, 17, i[6]), T = d(T, I, E, P, y, 22, i[7]), P = d(P, T, I, E, _, 7, i[8]), E = d(E, P, T, I, b, 12, i[9]), I = d(I, E, P, T, w, 17, i[10]), T = d(T, I, E, P, x, 22, i[11]), P = d(P, T, I, E, k, 7, i[12]), E = d(E, P, T, I, O, 12, i[13]), I = d(I, E, P, T, A, 17, i[14]), P = u(P, T = d(T, I, E, P, S, 22, i[15]), I, E, s, 5, i[16]), E = u(E, P, T, I, g, 9, i[17]), I = u(I, E, P, T, x, 14, i[18]), T = u(T, I, E, P, c, 20, i[19]), P = u(P, T, I, E, v, 5, i[20]), E = u(E, P, T, I, w, 9, i[21]), I = u(I, E, P, T, S, 14, i[22]), T = u(T, I, E, P, h, 20, i[23]), P = u(P, T, I, E, b, 5, i[24]), E = u(E, P, T, I, A, 9, i[25]), I = u(I, E, P, T, p, 14, i[26]), T = u(T, I, E, P, _, 20, i[27]), P = u(P, T, I, E, O, 5, i[28]), E = u(E, P, T, I, f, 9, i[29]), I = u(I, E, P, T, y, 14, i[30]), P = l(P, T = u(T, I, E, P, k, 20, i[31]), I, E, v, 4, i[32]), E = l(E, P, T, I, _, 11, i[33]), I = l(I, E, P, T, x, 16, i[34]), T = l(T, I, E, P, A, 23, i[35]), P = l(P, T, I, E, s, 4, i[36]), E = l(E, P, T, I, h, 11, i[37]), I = l(I, E, P, T, y, 16, i[38]), T = l(T, I, E, P, w, 23, i[39]), P = l(P, T, I, E, O, 4, i[40]), E = l(E, P, T, I, c, 11, i[41]), I = l(I, E, P, T, p, 16, i[42]), T = l(T, I, E, P, g, 23, i[43]), P = l(P, T, I, E, b, 4, i[44]), E = l(E, P, T, I, k, 11, i[45]), I = l(I, E, P, T, S, 16, i[46]), P = m(P, T = l(T, I, E, P, f, 23, i[47]), I, E, c, 6, i[48]), E = m(E, P, T, I, y, 10, i[49]), I = m(I, E, P, T, A, 15, i[50]), T = m(T, I, E, P, v, 21, i[51]), P = m(P, T, I, E, k, 6, i[52]), E = m(E, P, T, I, p, 10, i[53]), I = m(I, E, P, T, w, 15, i[54]), T = m(T, I, E, P, s, 21, i[55]), P = m(P, T, I, E, _, 6, i[56]), E = m(E, P, T, I, S, 10, i[57]), I = m(I, E, P, T, g, 15, i[58]), T = m(T, I, E, P, O, 21, i[59]), P = m(P, T, I, E, h, 6, i[60]), E = m(E, P, T, I, x, 10, i[61]), I = m(I, E, P, T, f, 15, i[62]), T = m(T, I, E, P, b, 21, i[63]), r[0] = r[0] + P | 0, r[1] = r[1] + T | 0, r[2] = r[2] + I | 0, r[3] = r[3] + E | 0
                  },
                  _doFinalize: function() {
                    var n = this._data,
                      t = n.words,
                      o = 8 * this._nDataBytes,
                      a = 8 * n.sigBytes;
                    t[a >>> 5] |= 128 << 24 - a % 32;
                    var r = e.floor(o / 4294967296),
                      c = o;
                    t[15 + (a + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8), t[14 + (a + 64 >>> 9 << 4)] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8), n.sigBytes = 4 * (t.length + 1), this._process();
                    for (var i = this._hash, s = i.words, d = 0; d < 4; d++) {
                      var u = s[d];
                      s[d] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8)
                    }
                    return i
                  },
                  clone: function() {
                    var e = r.clone.call(this);
                    return e._hash = this._hash.clone(), e
                  }
                });

                function d(e, n, t, o, a, r, c) {
                  var i = e + (n & t | ~n & o) + a + c;
                  return (i << r | i >>> 32 - r) + n
                }

                function u(e, n, t, o, a, r, c) {
                  var i = e + (n & o | t & ~o) + a + c;
                  return (i << r | i >>> 32 - r) + n
                }

                function l(e, n, t, o, a, r, c) {
                  var i = e + (n ^ t ^ o) + a + c;
                  return (i << r | i >>> 32 - r) + n
                }

                function m(e, n, t, o, a, r, c) {
                  var i = e + (t ^ (n | ~o)) + a + c;
                  return (i << r | i >>> 32 - r) + n
                }
                n.MD5 = r._createHelper(s), n.HmacMD5 = r._createHmacHelper(s)
              }(Math), t.MD5)
            })), A((function(e, n) {
              var t;
              e.exports = (t = S, void
                function() {
                  var e = t,
                    n = e.lib.Base,
                    o = e.enc.Utf8;
                  e.algo.HMAC = n.extend({
                    init: function(e, n) {
                      e = this._hasher = new e.init, "string" == typeof n && (n = o.parse(n));
                      var t = e.blockSize,
                        a = 4 * t;
                      n.sigBytes > a && (n = e.finalize(n)), n.clamp();
                      for (var r = this._oKey = n.clone(), c = this._iKey = n.clone(), i = r.words, s = c.words, d = 0; d < t; d++) i[d] ^= 1549556828, s[d] ^= 909522486;
                      r.sigBytes = c.sigBytes = a, this.reset()
                    },
                    reset: function() {
                      var e = this._hasher;
                      e.reset(), e.update(this._iKey)
                    },
                    update: function(e) {
                      return this._hasher.update(e), this
                    },
                    finalize: function(e) {
                      var n = this._hasher,
                        t = n.finalize(e);
                      return n.reset(), n.finalize(this._oKey.clone().concat(t))
                    }
                  })
                }())
            })), A((function(e, n) {
              e.exports = S.HmacMD5
            }))),
            T = A((function(e, n) {
              e.exports = S.enc.Utf8
            })),
            I = A((function(e, n) {
              var t;
              e.exports = (t = S, function() {
                var e = t,
                  n = e.lib.WordArray;

                function o(e, t, o) {
                  for (var a = [], r = 0, c = 0; c < t; c++)
                    if (c % 4) {
                      var i = o[e.charCodeAt(c - 1)] << c % 4 * 2,
                        s = o[e.charCodeAt(c)] >>> 6 - c % 4 * 2;
                      a[r >>> 2] |= (i | s) << 24 - r % 4 * 8, r++
                    } return n.create(a, r)
                }
                e.enc.Base64 = {
                  stringify: function(e) {
                    var n = e.words,
                      t = e.sigBytes,
                      o = this._map;
                    e.clamp();
                    for (var a = [], r = 0; r < t; r += 3)
                      for (var c = (n[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (n[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | n[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, i = 0; i < 4 && r + .75 * i < t; i++) a.push(o.charAt(c >>> 6 * (3 - i) & 63));
                    var s = o.charAt(64);
                    if (s)
                      for (; a.length % 4;) a.push(s);
                    return a.join("")
                  },
                  parse: function(e) {
                    var n = e.length,
                      t = this._map,
                      a = this._reverseMap;
                    if (!a) {
                      a = this._reverseMap = [];
                      for (var r = 0; r < t.length; r++) a[t.charCodeAt(r)] = r
                    }
                    var c = t.charAt(64);
                    if (c) {
                      var i = e.indexOf(c); - 1 !== i && (n = i)
                    }
                    return o(e, n, a)
                  },
                  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
              }(), t.enc.Base64)
            })),
            E = "uni_id_token",
            C = "uni_id_token_expired",
            j = "FUNCTION",
            $ = "OBJECT",
            L = "CLIENT_DB",
            M = "pending",
            D = "fulfilled",
            N = "rejected";

          function R(e) {
            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
          }

          function U(e) {
            return "object" === R(e)
          }

          function F(e) {
            return "function" == typeof e
          }

          function B(e) {
            return function() {
              try {
                return e.apply(e, arguments)
              } catch (e) {
                console.error(e)
              }
            }
          }
          var q = "REJECTED",
            V = "NOT_PENDING",
            H = function() {
              function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = n.createPromise,
                  o = n.retryRule,
                  a = void 0 === o ? q : o;
                (0, g.default)(this, e), this.createPromise = t, this.status = null, this.promise = null, this.retryRule = a
              }
              return (0, y.default)(e, [{
                key: "needRetry",
                get: function() {
                  if (!this.status) return !0;
                  switch (this.retryRule) {
                    case q:
                      return this.status === N;
                    case V:
                      return this.status !== M
                  }
                }
              }, {
                key: "exec",
                value: function() {
                  var e = this;
                  return this.needRetry ? (this.status = M, this.promise = this.createPromise().then((function(n) {
                    return e.status = D, Promise.resolve(n)
                  }), (function(n) {
                    return e.status = N, Promise.reject(n)
                  })), this.promise) : this.promise
                }
              }]), e
            }(),
            K = function() {
              function e() {
                (0, g.default)(this, e), this._callback = {}
              }
              return (0, y.default)(e, [{
                key: "addListener",
                value: function(e, n) {
                  this._callback[e] || (this._callback[e] = []), this._callback[e].push(n)
                }
              }, {
                key: "on",
                value: function(e, n) {
                  return this.addListener(e, n)
                }
              }, {
                key: "removeListener",
                value: function(e, n) {
                  if (!n) throw new Error('The "listener" argument must be of type function. Received undefined');
                  var t = this._callback[e];
                  if (t) {
                    var o = function(e, n) {
                      for (var t = e.length - 1; t >= 0; t--)
                        if (e[t] === n) return t;
                      return -1
                    }(t, n);
                    t.splice(o, 1)
                  }
                }
              }, {
                key: "off",
                value: function(e, n) {
                  return this.removeListener(e, n)
                }
              }, {
                key: "removeAllListener",
                value: function(e) {
                  delete this._callback[e]
                }
              }, {
                key: "emit",
                value: function(e) {
                  for (var n = this._callback[e], t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) o[a - 1] = arguments[a];
                  if (n)
                    for (var r = 0; r < n.length; r++) n[r].apply(n, o)
                }
              }]), e
            }();

          function z(e) {
            return e && "string" == typeof e ? JSON.parse(e) : e
          }
          var W = "mp-weixin",
            J = z([]),
            G = W,
            Y = z({
              address: ["127.0.0.1", "192.168.18.34"],
              servePort: 7e3,
              debugPort: 9e3,
              initialLaunchType: "remote",
              skipFiles: ["<node_internals>/**", "D:/soft/HBuilderX/plugins/unicloud/**/*.js"]
            }),
            X = z([{
              provider: "aliyun",
              spaceName: "qizhibang",
              spaceId: "mp-f78ad6dd-852b-419f-b949-49d8bd593e06",
              clientSecret: "KeX0XC09aD7Nnws7alNunA==",
              endpoint: "https://api.next.bspapp.com"
            }]) || [];
          try {
            (t( /*! uni-stat-config */ 38).default || t( /*! uni-stat-config */ 38)).appid
          } catch ($e) {}
          var Q, Z = {};

          function ee(e) {
            var n, t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return n = Z, t = e, Object.prototype.hasOwnProperty.call(n, t) || (Z[e] = o), Z[e]
          }
          "app" === G && (Z = o._globalUniCloudObj ? o._globalUniCloudObj : o._globalUniCloudObj = {});
          var ne = ["invoke", "success", "fail", "complete"],
            te = ee("_globalUniCloudInterceptor");

          function oe(e, n) {
            te[e] || (te[e] = {}), U(n) && Object.keys(n).forEach((function(t) {
              ne.indexOf(t) > -1 && function(e, n, t) {
                var o = te[e][n];
                o || (o = te[e][n] = []), -1 === o.indexOf(t) && F(t) && o.push(t)
              }(e, t, n[t])
            }))
          }

          function ae(e, n) {
            te[e] || (te[e] = {}), U(n) ? Object.keys(n).forEach((function(t) {
              ne.indexOf(t) > -1 && function(e, n, t) {
                var o = te[e][n];
                if (o) {
                  var a = o.indexOf(t);
                  a > -1 && o.splice(a, 1)
                }
              }(e, t, n[t])
            })) : delete te[e]
          }

          function re(e, n) {
            return e && 0 !== e.length ? e.reduce((function(e, t) {
              return e.then((function() {
                return t(n)
              }))
            }), Promise.resolve()) : Promise.resolve()
          }

          function ce(e, n) {
            return te[e] && te[e][n] || []
          }

          function ie(e) {
            oe("callObject", e)
          }
          var se = ee("_globalUniCloudListener"),
            de = "response",
            ue = "needLogin",
            le = "refreshToken",
            me = "clientdb",
            fe = "cloudfunction",
            pe = "cloudobject";

          function he(e) {
            return se[e] || (se[e] = []), se[e]
          }

          function ve(e, n) {
            var t = he(e);
            t.includes(n) || t.push(n)
          }

          function ge(e, n) {
            var t = he(e),
              o = t.indexOf(n); - 1 !== o && t.splice(o, 1)
          }

          function ye(e, n) {
            for (var t = he(e), o = 0; o < t.length; o++)(0, t[o])(n)
          }
          var _e, be = !1;

          function we() {
            return _e || (_e = new Promise((function(e) {
              be && e(),
                function n() {
                  if ("function" == typeof getCurrentPages) {
                    var t = getCurrentPages();
                    t && t[0] && (be = !0, e())
                  }
                  be || setTimeout((function() {
                    n()
                  }), 30)
                }()
            })))
          }

          function xe(e) {
            var n = {};
            for (var t in e) {
              var o = e[t];
              F(o) && (n[t] = B(o))
            }
            return n
          }
          var ke = function(e) {
            (0, f.default)(t, e);
            var n = O(t);

            function t(e) {
              var o;
              return (0, g.default)(this, t), (o = n.call(this, e.message)).errMsg = e.message || e.errMsg || "unknown system error", o.code = o.errCode = e.code || e.errCode || "SYSTEM_ERROR", o.errSubject = o.subject = e.subject || e.errSubject, o.cause = e.cause, o.requestId = e.requestId, o
            }
            return (0, y.default)(t, [{
              key: "toJson",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (!(e >= 10)) return e++, {
                  errCode: this.errCode,
                  errMsg: this.errMsg,
                  errSubject: this.errSubject,
                  cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
                }
              }
            }]), t
          }((0, v.default)(Error));
          n.UniCloudError = ke;
          var Oe, Ae, Se = {
            request: function(e) {
              return o.request(e)
            },
            uploadFile: function(e) {
              return o.uploadFile(e)
            },
            setStorageSync: function(e, n) {
              return o.setStorageSync(e, n)
            },
            getStorageSync: function(e) {
              return o.getStorageSync(e)
            },
            removeStorageSync: function(e) {
              return o.removeStorageSync(e)
            },
            clearStorageSync: function() {
              return o.clearStorageSync()
            },
            connectSocket: function(e) {
              return o.connectSocket(e)
            }
          };

          function Pe() {
            return {
              token: Se.getStorageSync(E) || Se.getStorageSync("uniIdToken"),
              tokenExpired: Se.getStorageSync(C)
            }
          }

          function Te() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.token,
              t = e.tokenExpired;
            n && Se.setStorageSync(E, n), t && Se.setStorageSync(C, t)
          }

          function Ie() {
            return Oe || (Oe = o.getSystemInfoSync()), Oe
          }
          var Ee = {};

          function Ce() {
            var e = o.getLocale && o.getLocale() || "en";
            if (Ae) return k(k(k({}, Ee), Ae), {}, {
              locale: e,
              LOCALE: e
            });
            var n = Ie(),
              t = n.deviceId,
              a = n.osName,
              r = n.uniPlatform,
              c = n.appId,
              i = ["appId", "appLanguage", "appName", "appVersion", "appVersionCode", "appWgtVersion", "browserName", "browserVersion", "deviceBrand", "deviceId", "deviceModel", "deviceType", "osName", "osVersion", "romName", "romVersion", "ua", "hostName", "hostVersion", "uniPlatform", "uniRuntimeVersion", "uniRuntimeVersionCode", "uniCompilerVersion", "uniCompilerVersionCode"];
            for (var s in n) Object.hasOwnProperty.call(n, s) && -1 === i.indexOf(s) && delete n[s];
            return Ae = k(k({
              PLATFORM: r,
              OS: a,
              APPID: c,
              DEVICEID: t
            }, function() {
              var e, n;
              try {
                if (o.getLaunchOptionsSync) {
                  if (o.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
                  var t = o.getLaunchOptionsSync(),
                    a = t.scene;
                  e = t.channel, n = a
                }
              } catch (e) {}
              return {
                channel: e,
                scene: n
              }
            }()), n), k(k(k({}, Ee), Ae), {}, {
              locale: e,
              LOCALE: e
            })
          }
          var je, $e, Le = function(e, n) {
              var t = "";
              return Object.keys(e).sort().forEach((function(n) {
                e[n] && (t = t + "&" + n + "=" + e[n])
              })), t = t.slice(1), P(t, n).toString()
            },
            Me = function(e, n) {
              return new Promise((function(t, o) {
                n(Object.assign(e, {
                  complete: function(e) {
                    e || (e = {}), "web" === G && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
                    var n = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
                    if (!e.statusCode || e.statusCode >= 400) {
                      var a = e.data && e.data.error && e.data.error.code || "SYS_ERR",
                        r = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
                      return o(new ke({
                        code: a,
                        message: r,
                        requestId: n
                      }))
                    }
                    var c = e.data;
                    if (c.error) return o(new ke({
                      code: c.error.code,
                      message: c.error.message,
                      requestId: n
                    }));
                    c.result = c.data, c.requestId = n, delete c.data, t(c)
                  }
                }))
              }))
            },
            De = function(e) {
              return I.stringify(T.parse(e))
            },
            Ne = function() {
              function e(n) {
                var t = this;
                (0, g.default)(this, e), ["spaceId", "clientSecret"].forEach((function(e) {
                  if (!Object.prototype.hasOwnProperty.call(n, e)) throw new Error("".concat(e, " required"))
                })), this.config = Object.assign({}, {
                  endpoint: 0 === n.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
                }, n), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = Se, this._getAccessTokenPromiseHub = new H({
                  createPromise: function() {
                    return t.requestAuth(t.setupRequest({
                      method: "serverless.auth.user.anonymousAuthorize",
                      params: "{}"
                    }, "auth")).then((function(e) {
                      if (!e.result || !e.result.accessToken) throw new ke({
                        code: "AUTH_FAILED",
                        message: "获取accessToken失败"
                      });
                      t.setAccessToken(e.result.accessToken)
                    }))
                  },
                  retryRule: V
                })
              }
              var n, t, o;
              return (0, y.default)(e, [{
                key: "hasAccessToken",
                get: function() {
                  return !!this.accessToken
                }
              }, {
                key: "setAccessToken",
                value: function(e) {
                  this.accessToken = e
                }
              }, {
                key: "requestWrapped",
                value: function(e) {
                  return Me(e, this.adapter.request)
                }
              }, {
                key: "requestAuth",
                value: function(e) {
                  return this.requestWrapped(e)
                }
              }, {
                key: "request",
                value: function(e, n) {
                  var t = this;
                  return Promise.resolve().then((function() {
                    return t.hasAccessToken ? n ? t.requestWrapped(e) : t.requestWrapped(e).catch((function(n) {
                      return new Promise((function(e, t) {
                        !n || "GATEWAY_INVALID_TOKEN" !== n.code && "InvalidParameter.InvalidToken" !== n.code ? t(n) : e()
                      })).then((function() {
                        return t.getAccessToken()
                      })).then((function() {
                        var n = t.rebuildRequest(e);
                        return t.request(n, !0)
                      }))
                    })) : t.getAccessToken().then((function() {
                      var n = t.rebuildRequest(e);
                      return t.request(n, !0)
                    }))
                  }))
                }
              }, {
                key: "rebuildRequest",
                value: function(e) {
                  var n = Object.assign({}, e);
                  return n.data.token = this.accessToken, n.header["x-basement-token"] = this.accessToken, n.header["x-serverless-sign"] = Le(n.data, this.config.clientSecret), n
                }
              }, {
                key: "setupRequest",
                value: function(e, n) {
                  var t = Object.assign({}, e, {
                      spaceId: this.config.spaceId,
                      timestamp: Date.now()
                    }),
                    o = {
                      "Content-Type": "application/json"
                    };
                  return "auth" !== n && (t.token = this.accessToken, o["x-basement-token"] = this.accessToken), o["x-serverless-sign"] = Le(t, this.config.clientSecret), {
                    url: this.config.requestUrl,
                    method: "POST",
                    data: t,
                    dataType: "json",
                    header: o
                  }
                }
              }, {
                key: "getAccessToken",
                value: function() {
                  return this._getAccessTokenPromiseHub.exec()
                }
              }, {
                key: "authorize",
                value: (o = (0, l.default)(c.default.mark((function e() {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this.getAccessToken();
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return o.apply(this, arguments)
                })
              }, {
                key: "callFunction",
                value: function(e) {
                  var n = {
                    method: "serverless.function.runtime.invoke",
                    params: JSON.stringify({
                      functionTarget: e.name,
                      functionArgs: e.data || {}
                    })
                  };
                  return this.request(k(k({}, this.setupRequest(n)), {}, {
                    timeout: e.timeout
                  }))
                }
              }, {
                key: "getOSSUploadOptionsFromPath",
                value: function(e) {
                  var n = {
                    method: "serverless.file.resource.generateProximalSign",
                    params: JSON.stringify(e)
                  };
                  return this.request(this.setupRequest(n))
                }
              }, {
                key: "uploadFileToOSS",
                value: function(e) {
                  var n = this,
                    t = e.url,
                    o = e.formData,
                    a = e.name,
                    r = e.filePath,
                    c = e.fileType,
                    i = e.onUploadProgress;
                  return new Promise((function(e, s) {
                    var d = n.adapter.uploadFile({
                      url: t,
                      formData: o,
                      name: a,
                      filePath: r,
                      fileType: c,
                      header: {
                        "X-OSS-server-side-encrpytion": "AES256"
                      },
                      success: function(n) {
                        n && n.statusCode < 400 ? e(n) : s(new ke({
                          code: "UPLOAD_FAILED",
                          message: "文件上传失败"
                        }))
                      },
                      fail: function(e) {
                        s(new ke({
                          code: e.code || "UPLOAD_FAILED",
                          message: e.message || e.errMsg || "文件上传失败"
                        }))
                      }
                    });
                    "function" == typeof i && d && "function" == typeof d.onProgressUpdate && d.onProgressUpdate((function(e) {
                      i({
                        loaded: e.totalBytesSent,
                        total: e.totalBytesExpectedToSend
                      })
                    }))
                  }))
                }
              }, {
                key: "reportOSSUpload",
                value: function(e) {
                  var n = {
                    method: "serverless.file.resource.report",
                    params: JSON.stringify(e)
                  };
                  return this.request(this.setupRequest(n))
                }
              }, {
                key: "uploadFile",
                value: (t = (0, l.default)(c.default.mark((function e(n) {
                  var t, o, a, r, i, s, d, u, l, m, f, p, h, v, g, y, _, b, w, x, k, O;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = n.filePath, o = n.cloudPath, a = n.fileType, r = void 0 === a ? "image" : a, i = n.cloudPathAsRealPath, s = void 0 !== i && i, d = n.onUploadProgress, u = n.config, "string" === R(o)) {
                          e.next = 3;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "cloudPath必须为字符串类型"
                        });
                      case 3:
                        if (o = o.trim()) {
                          e.next = 5;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "cloudPath不可为空"
                        });
                      case 5:
                        if (!/:\/\//.test(o)) {
                          e.next = 7;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "cloudPath不合法"
                        });
                      case 7:
                        if (l = u && u.envType || this.config.envType, !(s && ("/" !== o[0] && (o = "/" + o), o.indexOf("\\") > -1))) {
                          e.next = 10;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                        });
                      case 10:
                        return e.next = 12, this.getOSSUploadOptionsFromPath({
                          env: l,
                          filename: s ? o.split("/").pop() : o,
                          fileId: s ? o : void 0
                        });
                      case 12:
                        return m = e.sent.result, f = "https://" + m.cdnDomain + "/" + m.ossPath, p = m.securityToken, h = m.accessKeyId, v = m.signature, g = m.host, y = m.ossPath, _ = m.id, b = m.policy, w = m.ossCallbackUrl, x = {
                          "Cache-Control": "max-age=2592000",
                          "Content-Disposition": "attachment",
                          OSSAccessKeyId: h,
                          Signature: v,
                          host: g,
                          id: _,
                          key: y,
                          policy: b,
                          success_action_status: 200
                        }, p && (x["x-oss-security-token"] = p), w && (k = JSON.stringify({
                          callbackUrl: w,
                          callbackBody: JSON.stringify({
                            fileId: _,
                            spaceId: this.config.spaceId
                          }),
                          callbackBodyType: "application/json"
                        }), x.callback = De(k)), O = {
                          url: "https://" + m.host,
                          formData: x,
                          fileName: "file",
                          name: "file",
                          filePath: t,
                          fileType: r
                        }, e.next = 27, this.uploadFileToOSS(Object.assign({}, O, {
                          onUploadProgress: d
                        }));
                      case 27:
                        if (!w) {
                          e.next = 29;
                          break
                        }
                        return e.abrupt("return", {
                          success: !0,
                          filePath: t,
                          fileID: f
                        });
                      case 29:
                        return e.next = 31, this.reportOSSUpload({
                          id: _
                        });
                      case 31:
                        if (!e.sent.success) {
                          e.next = 33;
                          break
                        }
                        return e.abrupt("return", {
                          success: !0,
                          filePath: t,
                          fileID: f
                        });
                      case 33:
                        throw new ke({
                          code: "UPLOAD_FAILED",
                          message: "文件上传失败"
                        });
                      case 34:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return t.apply(this, arguments)
                })
              }, {
                key: "getTempFileURL",
                value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.fileList;
                  return new Promise((function(e, t) {
                    Array.isArray(n) && 0 !== n.length || t(new ke({
                      code: "INVALID_PARAM",
                      message: "fileList的元素必须是非空的字符串"
                    })), e({
                      fileList: n.map((function(e) {
                        return {
                          fileID: e,
                          tempFileURL: e
                        }
                      }))
                    })
                  }))
                }
              }, {
                key: "getFileInfo",
                value: (n = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a = arguments;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = a.length > 0 && void 0 !== a[0] ? a[0] : {}, t = n.fileList, Array.isArray(t) && 0 !== t.length) {
                          e.next = 3;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "fileList的元素必须是非空的字符串"
                        });
                      case 3:
                        return o = {
                          method: "serverless.file.resource.info",
                          params: JSON.stringify({
                            id: t.map((function(e) {
                              return e.split("?")[0]
                            })).join(",")
                          })
                        }, e.next = 6, this.request(this.setupRequest(o));
                      case 6:
                        return e.t0 = e.sent.result, e.abrupt("return", {
                          fileList: e.t0
                        });
                      case 8:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return n.apply(this, arguments)
                })
              }]), e
            }(),
            Re = {
              init: function(e) {
                var n = new Ne(e),
                  t = {
                    signInAnonymously: function() {
                      return n.authorize()
                    },
                    getLoginState: function() {
                      return Promise.resolve(!1)
                    }
                  };
                return n.auth = function() {
                  return t
                }, n.customAuth = n.auth, n
              }
            },
            Ue = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
          ($e = je || (je = {})).local = "local", $e.none = "none", $e.session = "session";
          var Fe, Be = function() {},
            qe = A((function(e, n) {
              var t;
              e.exports = (t = S, function(e) {
                var n = t,
                  o = n.lib,
                  a = o.WordArray,
                  r = o.Hasher,
                  c = n.algo,
                  i = [],
                  s = [];
                ! function() {
                  function n(n) {
                    for (var t = e.sqrt(n), o = 2; o <= t; o++)
                      if (!(n % o)) return !1;
                    return !0
                  }

                  function t(e) {
                    return 4294967296 * (e - (0 | e)) | 0
                  }
                  for (var o = 2, a = 0; a < 64;) n(o) && (a < 8 && (i[a] = t(e.pow(o, .5))), s[a] = t(e.pow(o, 1 / 3)), a++), o++
                }();
                var d = [],
                  u = c.SHA256 = r.extend({
                    _doReset: function() {
                      this._hash = new a.init(i.slice(0))
                    },
                    _doProcessBlock: function(e, n) {
                      for (var t = this._hash.words, o = t[0], a = t[1], r = t[2], c = t[3], i = t[4], u = t[5], l = t[6], m = t[7], f = 0; f < 64; f++) {
                        if (f < 16) d[f] = 0 | e[n + f];
                        else {
                          var p = d[f - 15],
                            h = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                            v = d[f - 2],
                            g = (v << 15 | v >>> 17) ^ (v << 13 | v >>> 19) ^ v >>> 10;
                          d[f] = h + d[f - 7] + g + d[f - 16]
                        }
                        var y = o & a ^ o & r ^ a & r,
                          _ = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22),
                          b = m + ((i << 26 | i >>> 6) ^ (i << 21 | i >>> 11) ^ (i << 7 | i >>> 25)) + (i & u ^ ~i & l) + s[f] + d[f];
                        m = l, l = u, u = i, i = c + b | 0, c = r, r = a, a = o, o = b + (_ + y) | 0
                      }
                      t[0] = t[0] + o | 0, t[1] = t[1] + a | 0, t[2] = t[2] + r | 0, t[3] = t[3] + c | 0, t[4] = t[4] + i | 0, t[5] = t[5] + u | 0, t[6] = t[6] + l | 0, t[7] = t[7] + m | 0
                    },
                    _doFinalize: function() {
                      var n = this._data,
                        t = n.words,
                        o = 8 * this._nDataBytes,
                        a = 8 * n.sigBytes;
                      return t[a >>> 5] |= 128 << 24 - a % 32, t[14 + (a + 64 >>> 9 << 4)] = e.floor(o / 4294967296), t[15 + (a + 64 >>> 9 << 4)] = o, n.sigBytes = 4 * t.length, this._process(), this._hash
                    },
                    clone: function() {
                      var e = r.clone.call(this);
                      return e._hash = this._hash.clone(), e
                    }
                  });
                n.SHA256 = r._createHelper(u), n.HmacSHA256 = r._createHmacHelper(u)
              }(Math), t.SHA256)
            })),
            Ve = A((function(e, n) {
              e.exports = S.HmacSHA256
            })),
            He = function() {
              var e;
              if (!Promise) {
                (e = function() {}).promise = {};
                var n = function() {
                  throw new ke({
                    message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
                  })
                };
                return Object.defineProperty(e.promise, "then", {
                  get: n
                }), Object.defineProperty(e.promise, "catch", {
                  get: n
                }), e
              }
              var t = new Promise((function(n, t) {
                e = function(e, o) {
                  return e ? t(e) : n(o)
                }
              }));
              return e.promise = t, e
            };

          function Ke(e) {
            return void 0 === e
          }

          function ze(e) {
            return "[object Null]" === Object.prototype.toString.call(e)
          }

          function We() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.replace(/([\s\S]+)\s+(请前往云开发AI小助手查看问题：.*)/, "$1")
          }

          function Je() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = "", o = 0; o < e; o++) t += n.charAt(Math.floor(62 * Math.random()));
            return t
          }! function(e) {
            e.WEB = "web", e.WX_MP = "wx_mp"
          }(Fe || (Fe = {}));
          var Ge = {
              adapter: null,
              runtime: void 0
            },
            Ye = ["anonymousUuidKey"],
            Xe = function(e) {
              (0, f.default)(t, e);
              var n = O(t);

              function t() {
                var e;
                return (0, g.default)(this, t), e = n.call(this), Ge.adapter.root.tcbObject || (Ge.adapter.root.tcbObject = {}), e
              }
              return (0, y.default)(t, [{
                key: "setItem",
                value: function(e, n) {
                  Ge.adapter.root.tcbObject[e] = n
                }
              }, {
                key: "getItem",
                value: function(e) {
                  return Ge.adapter.root.tcbObject[e]
                }
              }, {
                key: "removeItem",
                value: function(e) {
                  delete Ge.adapter.root.tcbObject[e]
                }
              }, {
                key: "clear",
                value: function() {
                  delete Ge.adapter.root.tcbObject
                }
              }]), t
            }(Be);

          function Qe(e, n) {
            switch (e) {
              case "local":
                return n.localStorage || new Xe;
              case "none":
                return new Xe;
              default:
                return n.sessionStorage || new Xe
            }
          }
          var Ze = function() {
              function e(n) {
                if ((0, g.default)(this, e), !this._storage) {
                  this._persistence = Ge.adapter.primaryStorage || n.persistence, this._storage = Qe(this._persistence, Ge.adapter);
                  var t = "access_token_".concat(n.env),
                    o = "access_token_expire_".concat(n.env),
                    a = "refresh_token_".concat(n.env),
                    r = "anonymous_uuid_".concat(n.env),
                    c = "login_type_".concat(n.env),
                    i = "token_type_".concat(n.env),
                    s = "user_info_".concat(n.env);
                  this.keys = {
                    accessTokenKey: t,
                    accessTokenExpireKey: o,
                    refreshTokenKey: a,
                    anonymousUuidKey: r,
                    loginTypeKey: c,
                    userInfoKey: s,
                    deviceIdKey: "device_id",
                    tokenTypeKey: i
                  }
                }
              }
              return (0, y.default)(e, [{
                key: "updatePersistence",
                value: function(e) {
                  if (e !== this._persistence) {
                    var n = "local" === this._persistence;
                    this._persistence = e;
                    var t = Qe(e, Ge.adapter);
                    for (var o in this.keys) {
                      var a = this.keys[o];
                      if (!n || !Ye.includes(o)) {
                        var r = this._storage.getItem(a);
                        Ke(r) || ze(r) || (t.setItem(a, r), this._storage.removeItem(a))
                      }
                    }
                    this._storage = t
                  }
                }
              }, {
                key: "setStore",
                value: function(e, n, t) {
                  if (this._storage) {
                    var o = {
                        version: t || "localCachev1",
                        content: n
                      },
                      a = JSON.stringify(o);
                    try {
                      this._storage.setItem(e, a)
                    } catch (e) {
                      throw e
                    }
                  }
                }
              }, {
                key: "getStore",
                value: function(e, n) {
                  try {
                    if (!this._storage) return
                  } catch (e) {
                    return ""
                  }
                  n = n || "localCachev1";
                  var t = this._storage.getItem(e);
                  return t && t.indexOf(n) >= 0 ? JSON.parse(t).content : ""
                }
              }, {
                key: "removeStore",
                value: function(e) {
                  this._storage.removeItem(e)
                }
              }]), e
            }(),
            en = {},
            nn = {};

          function tn(e) {
            return en[e]
          }
          var on = (0, y.default)((function e(n, t) {
              (0, g.default)(this, e), this.data = t || null, this.name = n
            })),
            an = function(e) {
              (0, f.default)(t, e);
              var n = O(t);

              function t(e, o) {
                var a;
                return (0, g.default)(this, t), (a = n.call(this, "error", {
                  error: e,
                  data: o
                })).error = e, a
              }
              return (0, y.default)(t)
            }(on),
            rn = new(function() {
              function e() {
                (0, g.default)(this, e), this._listeners = {}
              }
              return (0, y.default)(e, [{
                key: "on",
                value: function(e, n) {
                  return function(e, n, t) {
                    t[e] = t[e] || [], t[e].push(n)
                  }(e, n, this._listeners), this
                }
              }, {
                key: "off",
                value: function(e, n) {
                  return function(e, n, t) {
                    if (t && t[e]) {
                      var o = t[e].indexOf(n); - 1 !== o && t[e].splice(o, 1)
                    }
                  }(e, n, this._listeners), this
                }
              }, {
                key: "fire",
                value: function(e, n) {
                  if (e instanceof an) return console.error(e.error), this;
                  var t = "string" == typeof e ? new on(e, n || {}) : e,
                    o = t.name;
                  if (this._listens(o)) {
                    t.target = this;
                    var a, r = b(this._listeners[o] ? (0, u.default)(this._listeners[o]) : []);
                    try {
                      for (r.s(); !(a = r.n()).done;) {
                        a.value.call(this, t)
                      }
                    } catch (e) {
                      r.e(e)
                    } finally {
                      r.f()
                    }
                  }
                  return this
                }
              }, {
                key: "_listens",
                value: function(e) {
                  return this._listeners[e] && this._listeners[e].length > 0
                }
              }]), e
            }());

          function cn(e, n) {
            rn.on(e, n)
          }

          function sn(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            rn.fire(e, n)
          }

          function dn(e, n) {
            rn.off(e, n)
          }
          var un, ln = "loginStateChanged",
            mn = "loginStateExpire",
            fn = "loginTypeChanged",
            pn = "anonymousConverted",
            hn = "refreshAccessToken";
          ! function(e) {
            e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL"
          }(un || (un = {}));
          var vn = function() {
              function e() {
                (0, g.default)(this, e), this._fnPromiseMap = new Map
              }
              var n;
              return (0, y.default)(e, [{
                key: "run",
                value: (n = (0, l.default)(c.default.mark((function e(n, t) {
                  var o, a = this;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return o = this._fnPromiseMap.get(n), e.abrupt("return", (o || (o = new Promise(function() {
                          var e = (0, l.default)(c.default.mark((function e(o, r) {
                            var i;
                            return c.default.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                case 0:
                                  return e.prev = 0, e.next = 3, a._runIdlePromise();
                                case 3:
                                  return i = t(), e.t0 = o, e.next = 7, i;
                                case 7:
                                  e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 14;
                                  break;
                                case 11:
                                  e.prev = 11, e.t2 = e.catch(0), r(e.t2);
                                case 14:
                                  return e.prev = 14, a._fnPromiseMap.delete(n), e.finish(14);
                                case 17:
                                case "end":
                                  return e.stop()
                              }
                            }), e, null, [
                              [0, 11, 14, 17]
                            ])
                          })));
                          return function(n, t) {
                            return e.apply(this, arguments)
                          }
                        }()), this._fnPromiseMap.set(n, o)), o));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, t) {
                  return n.apply(this, arguments)
                })
              }, {
                key: "_runIdlePromise",
                value: function() {
                  return Promise.resolve()
                }
              }]), e
            }(),
            gn = function() {
              function e(n) {
                (0, g.default)(this, e), this._singlePromise = new vn, this._cache = tn(n.env), this._baseURL = "https://".concat(n.env, ".ap-shanghai.tcb-api.tencentcloudapi.com"), this._reqClass = new Ge.adapter.reqClass({
                  timeout: n.timeout,
                  timeoutMsg: "请求在".concat(n.timeout / 1e3, "s内未完成，已中断"),
                  restrictedMethods: ["post"]
                })
              }
              var n, t, o, a, r;
              return (0, y.default)(e, [{
                key: "_getDeviceId",
                value: function() {
                  if (this._deviceID) return this._deviceID;
                  var e = this._cache.keys.deviceIdKey,
                    n = this._cache.getStore(e);
                  return "string" == typeof n && n.length >= 16 && n.length <= 48 || (n = Je(), this._cache.setStore(e, n)), this._deviceID = n, n
                }
              }, {
                key: "_request",
                value: (r = (0, l.default)(c.default.mark((function e(n, t) {
                  var o, a, r, i, s, d = arguments;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = d.length > 2 && void 0 !== d[2] ? d[2] : {}, a = {
                            "x-request-id": Je(),
                            "x-device-id": this._getDeviceId()
                          }, !o.withAccessToken) {
                          e.next = 9;
                          break
                        }
                        return r = this._cache.keys.tokenTypeKey, e.next = 6, this.getAccessToken();
                      case 6:
                        i = e.sent, s = this._cache.getStore(r), a.authorization = "".concat(s, " ").concat(i);
                      case 9:
                        return e.abrupt("return", this._reqClass["get" === o.method ? "get" : "post"]({
                          url: "".concat(this._baseURL).concat(n),
                          data: t,
                          headers: a
                        }));
                      case 10:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, n) {
                  return r.apply(this, arguments)
                })
              }, {
                key: "_fetchAccessToken",
                value: (a = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a, r, i, s, d, u, m, f = this;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = this._cache.keys, t = n.loginTypeKey, o = n.accessTokenKey, a = n.accessTokenExpireKey, r = n.tokenTypeKey, !(i = this._cache.getStore(t)) || i === un.ANONYMOUS) {
                          e.next = 3;
                          break
                        }
                        throw new ke({
                          code: "INVALID_OPERATION",
                          message: "非匿名登录不支持刷新 access token"
                        });
                      case 3:
                        return e.next = 5, this._singlePromise.run("fetchAccessToken", (0, l.default)(c.default.mark((function e() {
                          return c.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, f._request("/auth/v1/signin/anonymously", {}, {
                                  method: "post"
                                });
                              case 2:
                                return e.abrupt("return", e.sent.data);
                              case 3:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        }))));
                      case 5:
                        return s = e.sent, d = s.access_token, u = s.expires_in, m = s.token_type, e.abrupt("return", (this._cache.setStore(r, m), this._cache.setStore(o, d), this._cache.setStore(a, Date.now() + 1e3 * u), d));
                      case 10:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return a.apply(this, arguments)
                })
              }, {
                key: "isAccessTokenExpired",
                value: function(e, n) {
                  var t = !0;
                  return e && n && (t = n < Date.now()), t
                }
              }, {
                key: "getAccessToken",
                value: (o = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a, r;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = this._cache.keys, t = n.accessTokenKey, o = n.accessTokenExpireKey, a = this._cache.getStore(t), r = this._cache.getStore(o), e.abrupt("return", this.isAccessTokenExpired(a, r) ? this._fetchAccessToken() : a);
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return o.apply(this, arguments)
                })
              }, {
                key: "refreshAccessToken",
                value: (t = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return n = this._cache.keys, t = n.accessTokenKey, o = n.accessTokenExpireKey, a = n.loginTypeKey, e.abrupt("return", (this._cache.removeStore(t), this._cache.removeStore(o), this._cache.setStore(a, un.ANONYMOUS), this.getAccessToken()));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return t.apply(this, arguments)
                })
              }, {
                key: "getUserInfo",
                value: (n = (0, l.default)(c.default.mark((function e() {
                  var n = this;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._singlePromise.run("getUserInfo", (0, l.default)(c.default.mark((function e() {
                          return c.default.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, n._request("/auth/v1/user/me", {}, {
                                  withAccessToken: !0,
                                  method: "get"
                                });
                              case 2:
                                return e.abrupt("return", e.sent.data);
                              case 3:
                              case "end":
                                return e.stop()
                            }
                          }), e)
                        })))));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return n.apply(this, arguments)
                })
              }]), e
            }(),
            yn = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
            _n = {
              "X-SDK-Version": "1.3.5"
            };

          function bn(e, n, t) {
            var o = e[n];
            e[n] = function(n) {
              var a = {},
                r = {};
              t.forEach((function(t) {
                var o = t.call(e, n),
                  c = o.data,
                  i = o.headers;
                Object.assign(a, c), Object.assign(r, i)
              }));
              var c = n.data;
              return c && function() {
                var e;
                if (e = c, "[object FormData]" !== Object.prototype.toString.call(e)) n.data = k(k({}, c), a);
                else
                  for (var t in a) c.append(t, a[t])
              }(), n.headers = k(k({}, n.headers || {}), r), o.call(e, n)
            }
          }

          function wn() {
            var e = Math.random().toString(16).slice(2);
            return {
              data: {
                seqId: e
              },
              headers: k(k({}, _n), {}, {
                "x-seqid": e
              })
            }
          }
          var xn = function() {
              function e() {
                var n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0, g.default)(this, e), this.config = t, this._reqClass = new Ge.adapter.reqClass({
                  timeout: this.config.timeout,
                  timeoutMsg: "请求在".concat(this.config.timeout / 1e3, "s内未完成，已中断"),
                  restrictedMethods: ["post"]
                }), this._cache = tn(this.config.env), this._localCache = (n = this.config.env, nn[n]), this.oauth = new gn(this.config), bn(this._reqClass, "post", [wn]), bn(this._reqClass, "upload", [wn]), bn(this._reqClass, "download", [wn])
              }
              var n, t, o, a, r, i, s, d;
              return (0, y.default)(e, [{
                key: "post",
                value: (d = (0, l.default)(c.default.mark((function e(n) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._reqClass.post(n);
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return d.apply(this, arguments)
                })
              }, {
                key: "upload",
                value: (s = (0, l.default)(c.default.mark((function e(n) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._reqClass.upload(n);
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return s.apply(this, arguments)
                })
              }, {
                key: "download",
                value: (i = (0, l.default)(c.default.mark((function e(n) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._reqClass.download(n);
                      case 2:
                        return e.abrupt("return", e.sent);
                      case 3:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return i.apply(this, arguments)
                })
              }, {
                key: "refreshAccessToken",
                value: (r = (0, l.default)(c.default.mark((function e() {
                  var n, t;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), e.prev = 1, e.next = 4, this._refreshAccessTokenPromise;
                      case 4:
                        n = e.sent, e.next = 10;
                        break;
                      case 7:
                        e.prev = 7, e.t0 = e.catch(1), t = e.t0;
                      case 10:
                        if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, !t) {
                          e.next = 12;
                          break
                        }
                        throw t;
                      case 12:
                        return e.abrupt("return", n);
                      case 13:
                      case "end":
                        return e.stop()
                    }
                  }), e, this, [
                    [1, 7]
                  ])
                }))), function() {
                  return r.apply(this, arguments)
                })
              }, {
                key: "_refreshAccessToken",
                value: (a = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a, r, i, s, d, u, l, m, f, p;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = this._cache.keys, t = n.accessTokenKey, o = n.accessTokenExpireKey, a = n.refreshTokenKey, r = n.loginTypeKey, i = n.anonymousUuidKey, this._cache.removeStore(t), this._cache.removeStore(o), s = this._cache.getStore(a)) {
                          e.next = 5;
                          break
                        }
                        throw new ke({
                          message: "未登录CloudBase"
                        });
                      case 5:
                        return d = {
                          refresh_token: s
                        }, e.next = 8, this.request("auth.fetchAccessTokenWithRefreshToken", d);
                      case 8:
                        if (!(u = e.sent).data.code) {
                          e.next = 21;
                          break
                        }
                        if ("SIGN_PARAM_INVALID" !== (l = u.data.code) && "REFRESH_TOKEN_EXPIRED" !== l && "INVALID_REFRESH_TOKEN" !== l) {
                          e.next = 20;
                          break
                        }
                        if (this._cache.getStore(r) !== un.ANONYMOUS || "INVALID_REFRESH_TOKEN" !== l) {
                          e.next = 19;
                          break
                        }
                        return m = this._cache.getStore(i), f = this._cache.getStore(a), e.next = 17, this.send("auth.signInAnonymously", {
                          anonymous_uuid: m,
                          refresh_token: f
                        });
                      case 17:
                        return p = e.sent, e.abrupt("return", (this.setRefreshToken(p.refresh_token), this._refreshAccessToken()));
                      case 19:
                        sn(mn), this._cache.removeStore(a);
                      case 20:
                        throw new ke({
                          code: u.data.code,
                          message: "刷新access token失败：".concat(u.data.code)
                        });
                      case 21:
                        if (!u.data.access_token) {
                          e.next = 23;
                          break
                        }
                        return e.abrupt("return", (sn(hn), this._cache.setStore(t, u.data.access_token), this._cache.setStore(o, u.data.access_token_expire + Date.now()), {
                          accessToken: u.data.access_token,
                          accessTokenExpire: u.data.access_token_expire
                        }));
                      case 23:
                        u.data.refresh_token && (this._cache.removeStore(a), this._cache.setStore(a, u.data.refresh_token), this._refreshAccessToken());
                      case 24:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return a.apply(this, arguments)
                })
              }, {
                key: "getAccessToken",
                value: (o = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a, r, i, s;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (n = this._cache.keys, t = n.accessTokenKey, o = n.accessTokenExpireKey, a = n.refreshTokenKey, this._cache.getStore(a)) {
                          e.next = 3;
                          break
                        }
                        throw new ke({
                          message: "refresh token不存在，登录状态异常"
                        });
                      case 3:
                        if (r = this._cache.getStore(t), i = this._cache.getStore(o), s = !0, e.t0 = this._shouldRefreshAccessTokenHook, !e.t0) {
                          e.next = 9;
                          break
                        }
                        return e.next = 8, this._shouldRefreshAccessTokenHook(r, i);
                      case 8:
                        e.t0 = !e.sent;
                      case 9:
                        if (e.t1 = e.t0, !e.t1) {
                          e.next = 12;
                          break
                        }
                        s = !1;
                      case 12:
                        return e.abrupt("return", (!r || !i || i < Date.now()) && s ? this.refreshAccessToken() : {
                          accessToken: r,
                          accessTokenExpire: i
                        });
                      case 13:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return o.apply(this, arguments)
                })
              }, {
                key: "request",
                value: (t = (0, l.default)(c.default.mark((function e(n, t, o) {
                  var a, r, i, s, d, u, l, m, f, p, h, v, g, y, _;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (a = "x-tcb-trace_".concat(this.config.env), r = "application/x-www-form-urlencoded", i = k({
                            action: n,
                            env: this.config.env,
                            dataVersion: "2019-08-16"
                          }, t), e.t0 = -1 === yn.indexOf(n), !e.t0) {
                          e.next = 9;
                          break
                        }
                        return this._cache.keys, e.next = 8, this.oauth.getAccessToken();
                      case 8:
                        i.access_token = e.sent;
                      case 9:
                        if ("storage.uploadFile" !== n) {
                          e.next = 15;
                          break
                        }
                        for (d in s = new FormData) s.hasOwnProperty(d) && void 0 !== s[d] && s.append(d, i[d]);
                        r = "multipart/form-data", e.next = 17;
                        break;
                      case 15:
                        for (u in r = "application/json", s = {}, i) void 0 !== i[u] && (s[u] = i[u]);
                      case 17:
                        return l = {
                          headers: {
                            "content-type": r
                          }
                        }, o && o.timeout && (l.timeout = o.timeout), o && o.onUploadProgress && (l.onUploadProgress = o.onUploadProgress), (m = this._localCache.getStore(a)) && (l.headers["X-TCB-Trace"] = m), f = t.parse, p = t.inQuery, h = t.search, v = {
                          env: this.config.env
                        }, f && (v.parse = !0), p && (v = k(k({}, p), v)), g = function(e, n) {
                          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = /\?/.test(n),
                            a = "";
                          for (var r in t) "" === a ? !o && (n += "?") : a += "&", a += "".concat(r, "=").concat(encodeURIComponent(t[r]));
                          return /^http(s)?\:\/\//.test(n += a) ? n : "".concat(e).concat(n)
                        }(Ue, "//tcb-api.tencentcloudapi.com/web", v), h && (g += h), e.next = 28, this.post(k({
                          url: g,
                          data: s
                        }, l));
                      case 28:
                        if (y = e.sent, (_ = y.header && y.header["x-tcb-trace"]) && this._localCache.setStore(a, _), (200 === Number(y.status) || 200 === Number(y.statusCode)) && y.data) {
                          e.next = 32;
                          break
                        }
                        throw new ke({
                          code: "NETWORK_ERROR",
                          message: "network request error"
                        });
                      case 32:
                        return e.abrupt("return", y);
                      case 33:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, n, o) {
                  return t.apply(this, arguments)
                })
              }, {
                key: "send",
                value: (n = (0, l.default)(c.default.mark((function e(n) {
                  var t, o, a, r, i = arguments;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = i.length > 1 && void 0 !== i[1] ? i[1] : {}, o = i.length > 2 && void 0 !== i[2] ? i[2] : {}, e.next = 4, this.request(n, t, k(k({}, o), {}, {
                          onUploadProgress: t.onUploadProgress
                        }));
                      case 4:
                        if ("ACCESS_TOKEN_DISABLED" !== (a = e.sent).data.code && "ACCESS_TOKEN_EXPIRED" !== a.data.code || -1 !== yn.indexOf(n)) {
                          e.next = 14;
                          break
                        }
                        return e.next = 8, this.oauth.refreshAccessToken();
                      case 8:
                        return e.next = 10, this.request(n, t, k(k({}, o), {}, {
                          onUploadProgress: t.onUploadProgress
                        }));
                      case 10:
                        if (!(r = e.sent).data.code) {
                          e.next = 13;
                          break
                        }
                        throw new ke({
                          code: r.data.code,
                          message: We(r.data.message)
                        });
                      case 13:
                        return e.abrupt("return", r.data);
                      case 14:
                        if (!a.data.code) {
                          e.next = 16;
                          break
                        }
                        throw new ke({
                          code: a.data.code,
                          message: We(a.data.message)
                        });
                      case 16:
                        return e.abrupt("return", a.data);
                      case 17:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return n.apply(this, arguments)
                })
              }, {
                key: "setRefreshToken",
                value: function(e) {
                  var n = this._cache.keys,
                    t = n.accessTokenKey,
                    o = n.accessTokenExpireKey,
                    a = n.refreshTokenKey;
                  this._cache.removeStore(t), this._cache.removeStore(o), this._cache.setStore(a, e)
                }
              }]), e
            }(),
            kn = {};

          function On(e) {
            return kn[e]
          }
          var An = function() {
              function e(n) {
                (0, g.default)(this, e), this.config = n, this._cache = tn(n.env), this._request = On(n.env)
              }
              var n;
              return (0, y.default)(e, [{
                key: "setRefreshToken",
                value: function(e) {
                  var n = this._cache.keys,
                    t = n.accessTokenKey,
                    o = n.accessTokenExpireKey,
                    a = n.refreshTokenKey;
                  this._cache.removeStore(t), this._cache.removeStore(o), this._cache.setStore(a, e)
                }
              }, {
                key: "setAccessToken",
                value: function(e, n) {
                  var t = this._cache.keys,
                    o = t.accessTokenKey,
                    a = t.accessTokenExpireKey;
                  this._cache.setStore(o, e), this._cache.setStore(a, n)
                }
              }, {
                key: "refreshUserInfo",
                value: (n = (0, l.default)(c.default.mark((function e() {
                  var n, t;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.send("auth.getUserInfo", {});
                      case 2:
                        return n = e.sent, t = n.data, e.abrupt("return", (this.setLocalUserInfo(t), t));
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return n.apply(this, arguments)
                })
              }, {
                key: "setLocalUserInfo",
                value: function(e) {
                  var n = this._cache.keys.userInfoKey;
                  this._cache.setStore(n, e)
                }
              }]), e
            }(),
            Sn = function() {
              function e(n) {
                if ((0, g.default)(this, e), !n) throw new ke({
                  code: "PARAM_ERROR",
                  message: "envId is not defined"
                });
                this._envId = n, this._cache = tn(this._envId), this._request = On(this._envId), this.setUserInfo()
              }
              var n, t, o;
              return (0, y.default)(e, [{
                key: "linkWithTicket",
                value: function(e) {
                  if ("string" != typeof e) throw new ke({
                    code: "PARAM_ERROR",
                    message: "ticket must be string"
                  });
                  return this._request.send("auth.linkWithTicket", {
                    ticket: e
                  })
                }
              }, {
                key: "linkWithRedirect",
                value: function(e) {
                  e.signInWithRedirect()
                }
              }, {
                key: "updatePassword",
                value: function(e, n) {
                  return this._request.send("auth.updatePassword", {
                    oldPassword: n,
                    newPassword: e
                  })
                }
              }, {
                key: "updateEmail",
                value: function(e) {
                  return this._request.send("auth.updateEmail", {
                    newEmail: e
                  })
                }
              }, {
                key: "updateUsername",
                value: function(e) {
                  if ("string" != typeof e) throw new ke({
                    code: "PARAM_ERROR",
                    message: "username must be a string"
                  });
                  return this._request.send("auth.updateUsername", {
                    username: e
                  })
                }
              }, {
                key: "getLinkedUidList",
                value: (o = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.send("auth.getLinkedUidList", {});
                      case 2:
                        return n = e.sent, t = n.data, o = !1, a = t.users, e.abrupt("return", (a.forEach((function(e) {
                          e.wxOpenId && e.wxPublicId && (o = !0)
                        })), {
                          users: a,
                          hasPrimaryUid: o
                        }));
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return o.apply(this, arguments)
                })
              }, {
                key: "setPrimaryUid",
                value: function(e) {
                  return this._request.send("auth.setPrimaryUid", {
                    uid: e
                  })
                }
              }, {
                key: "unlink",
                value: function(e) {
                  return this._request.send("auth.unlink", {
                    platform: e
                  })
                }
              }, {
                key: "update",
                value: (t = (0, l.default)(c.default.mark((function e(n) {
                  var t, o, a, r, i, s, d, u;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = n.nickName, o = n.gender, a = n.avatarUrl, r = n.province, i = n.country, s = n.city, e.next = 8, this._request.send("auth.updateUserInfo", {
                          nickName: t,
                          gender: o,
                          avatarUrl: a,
                          province: r,
                          country: i,
                          city: s
                        });
                      case 8:
                        d = e.sent, u = d.data, this.setLocalUserInfo(u);
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return t.apply(this, arguments)
                })
              }, {
                key: "refresh",
                value: (n = (0, l.default)(c.default.mark((function e() {
                  var n;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.oauth.getUserInfo();
                      case 2:
                        return n = e.sent, e.abrupt("return", (this.setLocalUserInfo(n), n));
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return n.apply(this, arguments)
                })
              }, {
                key: "setUserInfo",
                value: function() {
                  var e = this,
                    n = this._cache.keys.userInfoKey,
                    t = this._cache.getStore(n);
                  ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((function(n) {
                    e[n] = t[n]
                  })), this.location = {
                    country: t.country,
                    province: t.province,
                    city: t.city
                  }
                }
              }, {
                key: "setLocalUserInfo",
                value: function(e) {
                  var n = this._cache.keys.userInfoKey;
                  this._cache.setStore(n, e), this.setUserInfo()
                }
              }]), e
            }(),
            Pn = function() {
              function e(n) {
                if ((0, g.default)(this, e), !n) throw new ke({
                  code: "PARAM_ERROR",
                  message: "envId is not defined"
                });
                this._cache = tn(n);
                var t = this._cache.keys,
                  o = t.refreshTokenKey,
                  a = t.accessTokenKey,
                  r = t.accessTokenExpireKey,
                  c = this._cache.getStore(o),
                  i = this._cache.getStore(a),
                  s = this._cache.getStore(r);
                this.credential = {
                  refreshToken: c,
                  accessToken: i,
                  accessTokenExpire: s
                }, this.user = new Sn(n)
              }
              return (0, y.default)(e, [{
                key: "isAnonymousAuth",
                get: function() {
                  return this.loginType === un.ANONYMOUS
                }
              }, {
                key: "isCustomAuth",
                get: function() {
                  return this.loginType === un.CUSTOM
                }
              }, {
                key: "isWeixinAuth",
                get: function() {
                  return this.loginType === un.WECHAT || this.loginType === un.WECHAT_OPEN || this.loginType === un.WECHAT_PUBLIC
                }
              }, {
                key: "loginType",
                get: function() {
                  return this._cache.getStore(this._cache.keys.loginTypeKey)
                }
              }]), e
            }(),
            Tn = function(e) {
              (0, f.default)(a, e);
              var n, t, o = O(a);

              function a() {
                return (0, g.default)(this, a), o.apply(this, arguments)
              }
              return (0, y.default)(a, [{
                key: "signIn",
                value: (t = (0, l.default)(c.default.mark((function e() {
                  var n;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this._cache.updatePersistence("local"), e.next = 3, this._request.oauth.getAccessToken();
                      case 3:
                        return sn(ln), sn(fn, {
                          env: this.config.env,
                          loginType: un.ANONYMOUS,
                          persistence: "local"
                        }), n = new Pn(this.config.env), e.next = 8, n.user.refresh();
                      case 8:
                        return e.abrupt("return", n);
                      case 9:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return t.apply(this, arguments)
                })
              }, {
                key: "linkAndRetrieveDataWithTicket",
                value: (n = (0, l.default)(c.default.mark((function e(n) {
                  var t, o, a, r, i, s;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = this._cache.keys, o = t.anonymousUuidKey, a = t.refreshTokenKey, r = this._cache.getStore(o), i = this._cache.getStore(a), e.next = 7, this._request.send("auth.linkAndRetrieveDataWithTicket", {
                          anonymous_uuid: r,
                          refresh_token: i,
                          ticket: n
                        });
                      case 7:
                        if (!(s = e.sent).refresh_token) {
                          e.next = 16;
                          break
                        }
                        return this._clearAnonymousUUID(), this.setRefreshToken(s.refresh_token), e.next = 13, this._request.refreshAccessToken();
                      case 13:
                        return sn(pn, {
                          env: this.config.env
                        }), sn(fn, {
                          loginType: un.CUSTOM,
                          persistence: "local"
                        }), e.abrupt("return", {
                          credential: {
                            refreshToken: s.refresh_token
                          }
                        });
                      case 16:
                        throw new ke({
                          message: "匿名转化失败"
                        });
                      case 17:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return n.apply(this, arguments)
                })
              }, {
                key: "_setAnonymousUUID",
                value: function(e) {
                  var n = this._cache.keys,
                    t = n.anonymousUuidKey,
                    o = n.loginTypeKey;
                  this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(o, un.ANONYMOUS)
                }
              }, {
                key: "_clearAnonymousUUID",
                value: function() {
                  this._cache.removeStore(this._cache.keys.anonymousUuidKey)
                }
              }]), a
            }(An),
            In = function(e) {
              (0, f.default)(o, e);
              var n, t = O(o);

              function o() {
                return (0, g.default)(this, o), t.apply(this, arguments)
              }
              return (0, y.default)(o, [{
                key: "signIn",
                value: (n = (0, l.default)(c.default.mark((function e(n) {
                  var t, o;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof n) {
                          e.next = 2;
                          break
                        }
                        throw new ke({
                          code: "PARAM_ERROR",
                          message: "ticket must be a string"
                        });
                      case 2:
                        return t = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signInWithTicket", {
                          ticket: n,
                          refresh_token: this._cache.getStore(t) || ""
                        });
                      case 5:
                        if (!(o = e.sent).refresh_token) {
                          e.next = 15;
                          break
                        }
                        return this.setRefreshToken(o.refresh_token), e.next = 10, this._request.refreshAccessToken();
                      case 10:
                        return sn(ln), sn(fn, {
                          env: this.config.env,
                          loginType: un.CUSTOM,
                          persistence: this.config.persistence
                        }), e.next = 14, this.refreshUserInfo();
                      case 14:
                        return e.abrupt("return", new Pn(this.config.env));
                      case 15:
                        throw new ke({
                          message: "自定义登录失败"
                        });
                      case 16:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return n.apply(this, arguments)
                })
              }]), o
            }(An),
            En = function(e) {
              (0, f.default)(r, e);
              var n, t, o, a = O(r);

              function r() {
                return (0, g.default)(this, r), a.apply(this, arguments)
              }
              return (0, y.default)(r, [{
                key: "signIn",
                value: (o = (0, l.default)(c.default.mark((function e(n, t) {
                  var o, a, r, i, s;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof n) {
                          e.next = 2;
                          break
                        }
                        throw new ke({
                          code: "PARAM_ERROR",
                          message: "email must be a string"
                        });
                      case 2:
                        return o = this._cache.keys.refreshTokenKey, e.next = 5, this._request.send("auth.signIn", {
                          loginType: "EMAIL",
                          email: n,
                          password: t,
                          refresh_token: this._cache.getStore(o) || ""
                        });
                      case 5:
                        if (a = e.sent, r = a.refresh_token, i = a.access_token, s = a.access_token_expire, !r) {
                          e.next = 22;
                          break
                        }
                        if (this.setRefreshToken(r), !i || !s) {
                          e.next = 15;
                          break
                        }
                        this.setAccessToken(i, s), e.next = 17;
                        break;
                      case 15:
                        return e.next = 17, this._request.refreshAccessToken();
                      case 17:
                        return e.next = 19, this.refreshUserInfo();
                      case 19:
                        return sn(ln), sn(fn, {
                          env: this.config.env,
                          loginType: un.EMAIL,
                          persistence: this.config.persistence
                        }), e.abrupt("return", new Pn(this.config.env));
                      case 22:
                        throw a.code ? new ke({
                          code: a.code,
                          message: "邮箱登录失败: ".concat(a.message)
                        }) : new ke({
                          message: "邮箱登录失败"
                        });
                      case 23:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, n) {
                  return o.apply(this, arguments)
                })
              }, {
                key: "activate",
                value: (t = (0, l.default)(c.default.mark((function e(n) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.activateEndUserMail", {
                          token: n
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return t.apply(this, arguments)
                })
              }, {
                key: "resetPasswordWithToken",
                value: (n = (0, l.default)(c.default.mark((function e(n, t) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                          token: n,
                          newPassword: t
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, t) {
                  return n.apply(this, arguments)
                })
              }]), r
            }(An),
            Cn = function(e) {
              (0, f.default)(o, e);
              var n, t = O(o);

              function o() {
                return (0, g.default)(this, o), t.apply(this, arguments)
              }
              return (0, y.default)(o, [{
                key: "signIn",
                value: (n = (0, l.default)(c.default.mark((function e(n, t) {
                  var o, a, r, i, s;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof n) {
                          e.next = 2;
                          break
                        }
                        throw new ke({
                          code: "PARAM_ERROR",
                          message: "username must be a string"
                        });
                      case 2:
                        return "string" != typeof t && (t = "", console.warn("password is empty")), o = this._cache.keys.refreshTokenKey, e.next = 6, this._request.send("auth.signIn", {
                          loginType: un.USERNAME,
                          username: n,
                          password: t,
                          refresh_token: this._cache.getStore(o) || ""
                        });
                      case 6:
                        if (a = e.sent, r = a.refresh_token, i = a.access_token_expire, s = a.access_token, !r) {
                          e.next = 23;
                          break
                        }
                        if (this.setRefreshToken(r), !s || !i) {
                          e.next = 16;
                          break
                        }
                        this.setAccessToken(s, i), e.next = 18;
                        break;
                      case 16:
                        return e.next = 18, this._request.refreshAccessToken();
                      case 18:
                        return e.next = 20, this.refreshUserInfo();
                      case 20:
                        return sn(ln), sn(fn, {
                          env: this.config.env,
                          loginType: un.USERNAME,
                          persistence: this.config.persistence
                        }), e.abrupt("return", new Pn(this.config.env));
                      case 23:
                        throw a.code ? new ke({
                          code: a.code,
                          message: "用户名密码登录失败: ".concat(a.message)
                        }) : new ke({
                          message: "用户名密码登录失败"
                        });
                      case 24:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, t) {
                  return n.apply(this, arguments)
                })
              }]), o
            }(An),
            jn = function() {
              function e(n) {
                (0, g.default)(this, e), this.config = n, this._cache = tn(n.env), this._request = On(n.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), cn(fn, this._onLoginTypeChanged)
              }
              var n, t, o, a, r, i, s, d, u;
              return (0, y.default)(e, [{
                key: "currentUser",
                get: function() {
                  var e = this.hasLoginState();
                  return e && e.user || null
                }
              }, {
                key: "loginType",
                get: function() {
                  return this._cache.getStore(this._cache.keys.loginTypeKey)
                }
              }, {
                key: "anonymousAuthProvider",
                value: function() {
                  return new Tn(this.config)
                }
              }, {
                key: "customAuthProvider",
                value: function() {
                  return new In(this.config)
                }
              }, {
                key: "emailAuthProvider",
                value: function() {
                  return new En(this.config)
                }
              }, {
                key: "usernameAuthProvider",
                value: function() {
                  return new Cn(this.config)
                }
              }, {
                key: "signInAnonymously",
                value: (u = (0, l.default)(c.default.mark((function e() {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new Tn(this.config).signIn());
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return u.apply(this, arguments)
                })
              }, {
                key: "signInWithEmailAndPassword",
                value: (d = (0, l.default)(c.default.mark((function e(n, t) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new En(this.config).signIn(n, t));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, n) {
                  return d.apply(this, arguments)
                })
              }, {
                key: "signInWithUsernameAndPassword",
                value: function(e, n) {
                  return new Cn(this.config).signIn(e, n)
                }
              }, {
                key: "linkAndRetrieveDataWithTicket",
                value: (s = (0, l.default)(c.default.mark((function e(n) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return this._anonymousAuthProvider || (this._anonymousAuthProvider = new Tn(this.config)), cn(pn, this._onAnonymousConverted), e.next = 3, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(n);
                      case 3:
                        return e.abrupt("return", e.sent);
                      case 4:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return s.apply(this, arguments)
                })
              }, {
                key: "signOut",
                value: (i = (0, l.default)(c.default.mark((function e() {
                  var n, t, o, a, r, i;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (this.loginType !== un.ANONYMOUS) {
                          e.next = 2;
                          break
                        }
                        throw new ke({
                          message: "匿名用户不支持登出操作"
                        });
                      case 2:
                        if (n = this._cache.keys, t = n.refreshTokenKey, o = n.accessTokenKey, a = n.accessTokenExpireKey, r = this._cache.getStore(t)) {
                          e.next = 5;
                          break
                        }
                        return e.abrupt("return");
                      case 5:
                        return e.next = 7, this._request.send("auth.logout", {
                          refresh_token: r
                        });
                      case 7:
                        return i = e.sent, e.abrupt("return", (this._cache.removeStore(t), this._cache.removeStore(o), this._cache.removeStore(a), sn(ln), sn(fn, {
                          env: this.config.env,
                          loginType: un.NULL,
                          persistence: this.config.persistence
                        }), i));
                      case 9:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return i.apply(this, arguments)
                })
              }, {
                key: "signUpWithEmailAndPassword",
                value: (r = (0, l.default)(c.default.mark((function e(n, t) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                          email: n,
                          password: t
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, n) {
                  return r.apply(this, arguments)
                })
              }, {
                key: "sendPasswordResetEmail",
                value: (a = (0, l.default)(c.default.mark((function e(n) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                          email: n
                        }));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return a.apply(this, arguments)
                })
              }, {
                key: "onLoginStateChanged",
                value: function(e) {
                  var n = this;
                  cn(ln, (function() {
                    var t = n.hasLoginState();
                    e.call(n, t)
                  }));
                  var t = this.hasLoginState();
                  e.call(this, t)
                }
              }, {
                key: "onLoginStateExpired",
                value: function(e) {
                  cn(mn, e.bind(this))
                }
              }, {
                key: "onAccessTokenRefreshed",
                value: function(e) {
                  cn(hn, e.bind(this))
                }
              }, {
                key: "onAnonymousConverted",
                value: function(e) {
                  cn(pn, e.bind(this))
                }
              }, {
                key: "onLoginTypeChanged",
                value: function(e) {
                  var n = this;
                  cn(fn, (function() {
                    var t = n.hasLoginState();
                    e.call(n, t)
                  }))
                }
              }, {
                key: "getAccessToken",
                value: (o = (0, l.default)(c.default.mark((function e() {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, this._request.getAccessToken();
                      case 2:
                        return e.t0 = e.sent.accessToken, e.t1 = this.config.env, e.abrupt("return", {
                          accessToken: e.t0,
                          env: e.t1
                        });
                      case 5:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function() {
                  return o.apply(this, arguments)
                })
              }, {
                key: "hasLoginState",
                value: function() {
                  var e = this._cache.keys,
                    n = e.accessTokenKey,
                    t = e.accessTokenExpireKey,
                    o = this._cache.getStore(n),
                    a = this._cache.getStore(t);
                  return this._request.oauth.isAccessTokenExpired(o, a) ? null : new Pn(this.config.env)
                }
              }, {
                key: "isUsernameRegistered",
                value: (t = (0, l.default)(c.default.mark((function e(n) {
                  var t, o;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if ("string" == typeof n) {
                          e.next = 2;
                          break
                        }
                        throw new ke({
                          code: "PARAM_ERROR",
                          message: "username must be a string"
                        });
                      case 2:
                        return e.next = 4, this._request.send("auth.isUsernameRegistered", {
                          username: n
                        });
                      case 4:
                        return t = e.sent, o = t.data, e.abrupt("return", o && o.isRegistered);
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return t.apply(this, arguments)
                })
              }, {
                key: "getLoginState",
                value: function() {
                  return Promise.resolve(this.hasLoginState())
                }
              }, {
                key: "signInWithTicket",
                value: (n = (0, l.default)(c.default.mark((function e(n) {
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.abrupt("return", new In(this.config).signIn(n));
                      case 1:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return n.apply(this, arguments)
                })
              }, {
                key: "shouldRefreshAccessToken",
                value: function(e) {
                  this._request._shouldRefreshAccessTokenHook = e.bind(this)
                }
              }, {
                key: "getUserInfo",
                value: function() {
                  return this._request.send("auth.getUserInfo", {}).then((function(e) {
                    return e.code ? e : k(k({}, e.data), {}, {
                      requestId: e.seqId
                    })
                  }))
                }
              }, {
                key: "getAuthHeader",
                value: function() {
                  var e = this._cache.keys,
                    n = e.refreshTokenKey,
                    t = e.accessTokenKey,
                    o = this._cache.getStore(n);
                  return {
                    "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + o
                  }
                }
              }, {
                key: "_onAnonymousConverted",
                value: function(e) {
                  e.data.env === this.config.env && this._cache.updatePersistence(this.config.persistence)
                }
              }, {
                key: "_onLoginTypeChanged",
                value: function(e) {
                  var n = e.data,
                    t = n.loginType,
                    o = n.persistence;
                  n.env === this.config.env && (this._cache.updatePersistence(o), this._cache.setStore(this._cache.keys.loginTypeKey, t))
                }
              }]), e
            }(),
            $n = function(e, n) {
              n = n || He();
              var t = On(this.config.env),
                o = e.cloudPath,
                a = e.filePath,
                r = e.onUploadProgress,
                c = e.fileType,
                i = void 0 === c ? "image" : c;
              return t.send("storage.getUploadMetadata", {
                path: o
              }).then((function(e) {
                var c = e.data,
                  s = c.url,
                  d = c.authorization,
                  u = c.token,
                  l = c.fileId,
                  m = c.cosFileId,
                  f = e.requestId,
                  p = {
                    key: o,
                    signature: d,
                    "x-cos-meta-fileid": m,
                    success_action_status: "201",
                    "x-cos-security-token": u
                  };
                t.upload({
                  url: s,
                  data: p,
                  file: a,
                  name: o,
                  fileType: i,
                  onUploadProgress: r
                }).then((function(e) {
                  201 === e.statusCode ? n(null, {
                    fileID: l,
                    requestId: f
                  }) : n(new ke({
                    code: "STORAGE_REQUEST_FAIL",
                    message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
                  }))
                })).catch((function(e) {
                  n(e)
                }))
              })).catch((function(e) {
                n(e)
              })), n.promise
            },
            Ln = function(e, n) {
              n = n || He();
              var t = On(this.config.env),
                o = e.cloudPath;
              return t.send("storage.getUploadMetadata", {
                path: o
              }).then((function(e) {
                n(null, e)
              })).catch((function(e) {
                n(e)
              })), n.promise
            },
            Mn = function(e, n) {
              var t = e.fileList;
              if (n = n || He(), !t || !Array.isArray(t)) return {
                code: "INVALID_PARAM",
                message: "fileList必须是非空的数组"
              };
              var o, a = b(t);
              try {
                for (a.s(); !(o = a.n()).done;) {
                  var r = o.value;
                  if (!r || "string" != typeof r) return {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是非空的字符串"
                  }
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              var c = {
                fileid_list: t
              };
              return On(this.config.env).send("storage.batchDeleteFile", c).then((function(e) {
                e.code ? n(null, e) : n(null, {
                  fileList: e.data.delete_list,
                  requestId: e.requestId
                })
              })).catch((function(e) {
                n(e)
              })), n.promise
            },
            Dn = function(e, n) {
              var t = e.fileList;
              n = n || He(), t && Array.isArray(t) || n(null, {
                code: "INVALID_PARAM",
                message: "fileList必须是非空的数组"
              });
              var o, a = [],
                r = b(t);
              try {
                for (r.s(); !(o = r.n()).done;) {
                  var c = o.value;
                  "object" == (0, d.default)(c) ? (c.hasOwnProperty("fileID") && c.hasOwnProperty("maxAge") || n(null, {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是包含fileID和maxAge的对象"
                  }), a.push({
                    fileid: c.fileID,
                    max_age: c.maxAge
                  })) : "string" == typeof c ? a.push({
                    fileid: c
                  }) : n(null, {
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是字符串"
                  })
                }
              } catch (e) {
                r.e(e)
              } finally {
                r.f()
              }
              var i = {
                file_list: a
              };
              return On(this.config.env).send("storage.batchGetDownloadUrl", i).then((function(e) {
                e.code ? n(null, e) : n(null, {
                  fileList: e.data.download_list,
                  requestId: e.requestId
                })
              })).catch((function(e) {
                n(e)
              })), n.promise
            },
            Nn = function() {
              var e = (0, l.default)(c.default.mark((function e(n, t) {
                var o, a, r, i;
                return c.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return o = n.fileID, e.next = 3, Dn.call(this, {
                        fileList: [{
                          fileID: o,
                          maxAge: 600
                        }]
                      });
                    case 3:
                      if ("SUCCESS" === (a = e.sent.fileList[0]).code) {
                        e.next = 6;
                        break
                      }
                      return e.abrupt("return", t ? t(a) : new Promise((function(e) {
                        e(a)
                      })));
                    case 6:
                      if (r = On(this.config.env), i = a.download_url, i = encodeURI(i), t) {
                        e.next = 10;
                        break
                      }
                      return e.abrupt("return", r.download({
                        url: i
                      }));
                    case 10:
                      return e.t0 = t, e.next = 13, r.download({
                        url: i
                      });
                    case 13:
                      e.t1 = e.sent, (0, e.t0)(e.t1);
                    case 15:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              })));
              return function(n, t) {
                return e.apply(this, arguments)
              }
            }(),
            Rn = function(e, n) {
              var t, o = e.name,
                a = e.data,
                r = e.query,
                c = e.parse,
                i = e.search,
                s = e.timeout,
                d = n || He();
              try {
                t = a ? JSON.stringify(a) : ""
              } catch (o) {
                return Promise.reject(o)
              }
              if (!o) return Promise.reject(new ke({
                code: "PARAM_ERROR",
                message: "函数名不能为空"
              }));
              var u = {
                inQuery: r,
                parse: c,
                search: i,
                function_name: o,
                request_data: t
              };
              return On(this.config.env).send("functions.invokeFunction", u, {
                timeout: s
              }).then((function(e) {
                if (e.code) d(null, e);
                else {
                  var n = e.data.response_data;
                  if (c) d(null, {
                    result: n,
                    requestId: e.requestId
                  });
                  else try {
                    n = JSON.parse(e.data.response_data), d(null, {
                      result: n,
                      requestId: e.requestId
                    })
                  } catch (e) {
                    d(new ke({
                      message: "response data must be json"
                    }))
                  }
                }
                return d.promise
              })).catch((function(e) {
                d(e)
              })), d.promise
            },
            Un = {
              timeout: 15e3,
              persistence: "session"
            },
            Fn = {},
            Bn = new(function() {
              function e(n) {
                (0, g.default)(this, e), this.config = n || this.config, this.authObj = void 0
              }
              var n;
              return (0, y.default)(e, [{
                key: "init",
                value: function(n) {
                  switch (Ge.adapter || (this.requestClient = new Ge.adapter.reqClass({
                      timeout: n.timeout || 5e3,
                      timeoutMsg: "请求在".concat((n.timeout || 5e3) / 1e3, "s内未完成，已中断")
                    })), this.config = k(k({}, Un), n), !0) {
                    case this.config.timeout > 6e5:
                      console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
                      break;
                    case this.config.timeout < 100:
                      console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100
                  }
                  return new e(this.config)
                }
              }, {
                key: "auth",
                value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.persistence;
                  if (this.authObj) return this.authObj;
                  var t, o = n || Ge.adapter.primaryStorage || Un.persistence;
                  return o !== this.config.persistence && (this.config.persistence = o),
                    function(e) {
                      var n = e.env;
                      en[n] = new Ze(e), nn[n] = new Ze(k(k({}, e), {}, {
                        persistence: "local"
                      }))
                    }(this.config), t = this.config, kn[t.env] = new xn(t), this.authObj = new jn(this.config), this.authObj
                }
              }, {
                key: "on",
                value: function(e, n) {
                  return cn.apply(this, [e, n])
                }
              }, {
                key: "off",
                value: function(e, n) {
                  return dn.apply(this, [e, n])
                }
              }, {
                key: "callFunction",
                value: function(e, n) {
                  return Rn.apply(this, [e, n])
                }
              }, {
                key: "deleteFile",
                value: function(e, n) {
                  return Mn.apply(this, [e, n])
                }
              }, {
                key: "getTempFileURL",
                value: function(e, n) {
                  return Dn.apply(this, [e, n])
                }
              }, {
                key: "downloadFile",
                value: function(e, n) {
                  return Nn.apply(this, [e, n])
                }
              }, {
                key: "uploadFile",
                value: function(e, n) {
                  return $n.apply(this, [e, n])
                }
              }, {
                key: "getUploadMetadata",
                value: function(e, n) {
                  return Ln.apply(this, [e, n])
                }
              }, {
                key: "registerExtension",
                value: function(e) {
                  Fn[e.name] = e
                }
              }, {
                key: "invokeExtension",
                value: (n = (0, l.default)(c.default.mark((function e(n, t) {
                  var o;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (o = Fn[n]) {
                          e.next = 3;
                          break
                        }
                        throw new ke({
                          message: "扩展".concat(n, " 必须先注册")
                        });
                      case 3:
                        return e.next = 5, o.invoke(t, this);
                      case 5:
                        return e.abrupt("return", e.sent);
                      case 6:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e, t) {
                  return n.apply(this, arguments)
                })
              }, {
                key: "useAdapters",
                value: function(e) {
                  var n = function(e) {
                      var n, t, o = b((n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]));
                      try {
                        for (o.s(); !(t = o.n()).done;) {
                          var a = t.value,
                            r = a.isMatch,
                            c = a.genAdapter,
                            i = a.runtime;
                          if (r()) return {
                            adapter: c(),
                            runtime: i
                          }
                        }
                      } catch (e) {
                        o.e(e)
                      } finally {
                        o.f()
                      }
                    }(e) || {},
                    t = n.adapter,
                    o = n.runtime;
                  t && (Ge.adapter = t), o && (Ge.runtime = o)
                }
              }]), e
            }());

          function qn(e, n, t) {
            void 0 === t && (t = {});
            var o = /\?/.test(n),
              a = "";
            for (var r in t) "" === a ? !o && (n += "?") : a += "&", a += r + "=" + encodeURIComponent(t[r]);
            return /^http(s)?:\/\//.test(n += a) ? n : "" + e + n
          }
          var Vn = function() {
              function e() {
                (0, g.default)(this, e)
              }
              return (0, y.default)(e, [{
                key: "get",
                value: function(e) {
                  var n = e.url,
                    t = e.data,
                    o = e.headers,
                    a = e.timeout;
                  return new Promise((function(e, r) {
                    Se.request({
                      url: qn("https:", n),
                      data: t,
                      method: "GET",
                      header: o,
                      timeout: a,
                      success: function(n) {
                        e(n)
                      },
                      fail: function(e) {
                        r(e)
                      }
                    })
                  }))
                }
              }, {
                key: "post",
                value: function(e) {
                  var n = e.url,
                    t = e.data,
                    o = e.headers,
                    a = e.timeout;
                  return new Promise((function(e, r) {
                    Se.request({
                      url: qn("https:", n),
                      data: t,
                      method: "POST",
                      header: o,
                      timeout: a,
                      success: function(n) {
                        e(n)
                      },
                      fail: function(e) {
                        r(e)
                      }
                    })
                  }))
                }
              }, {
                key: "upload",
                value: function(e) {
                  return new Promise((function(n, t) {
                    var o = e.url,
                      a = e.file,
                      r = e.data,
                      c = e.headers,
                      i = e.fileType,
                      s = Se.uploadFile({
                        url: qn("https:", o),
                        name: "file",
                        formData: Object.assign({}, r),
                        filePath: a,
                        fileType: i,
                        header: c,
                        success: function(e) {
                          var t = {
                            statusCode: e.statusCode,
                            data: e.data || {}
                          };
                          200 === e.statusCode && r.success_action_status && (t.statusCode = parseInt(r.success_action_status, 10)), n(t)
                        },
                        fail: function(e) {
                          t(new Error(e.errMsg || "uploadFile:fail"))
                        }
                      });
                    "function" == typeof e.onUploadProgress && s && "function" == typeof s.onProgressUpdate && s.onProgressUpdate((function(n) {
                      e.onUploadProgress({
                        loaded: n.totalBytesSent,
                        total: n.totalBytesExpectedToSend
                      })
                    }))
                  }))
                }
              }]), e
            }(),
            Hn = {
              setItem: function(e, n) {
                Se.setStorageSync(e, n)
              },
              getItem: function(e) {
                return Se.getStorageSync(e)
              },
              removeItem: function(e) {
                Se.removeStorageSync(e)
              },
              clear: function() {
                Se.clearStorageSync()
              }
            },
            Kn = {
              genAdapter: function() {
                return {
                  root: {},
                  reqClass: Vn,
                  localStorage: Hn,
                  primaryStorage: "local"
                }
              },
              isMatch: function() {
                return !0
              },
              runtime: "uni_app"
            };
          Bn.useAdapters(Kn);
          var zn = Bn,
            Wn = zn.init;
          zn.init = function(e) {
            e.env = e.spaceId;
            var n = Wn.call(this, e);
            n.config.provider = "tencent", n.config.spaceId = e.spaceId;
            var t = n.auth;
            return n.auth = function(e) {
              var n = t.call(this, e);
              return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((function(e) {
                var t;
                n[e] = (t = n[e], function(e) {
                  var n = xe(e = e || {}),
                    o = n.success,
                    a = n.fail,
                    r = n.complete;
                  if (!(o || a || r)) return t.call(this, e);
                  t.call(this, e).then((function(e) {
                    o && o(e), r && r(e)
                  }), (function(e) {
                    a && a(e), r && r(e)
                  }))
                }).bind(n)
              })), n
            }, n.customAuth = n.auth, n
          };
          var Jn = zn;

          function Gn(e, n) {
            return Yn.apply(this, arguments)
          }

          function Yn() {
            return (Yn = (0, l.default)(c.default.mark((function e(n, t) {
              var o, a, r;
              return c.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = "http://".concat(n, ":").concat(t, "/system/ping"), e.prev = 1, e.next = 4, r = {
                      url: o,
                      timeout: 500
                    }, new Promise((function(e, n) {
                      Se.request(k(k({}, r), {}, {
                        success: function(n) {
                          e(n)
                        },
                        fail: function(e) {
                          n(e)
                        }
                      }))
                    }));
                  case 4:
                    return a = e.sent, e.abrupt("return", !(!a.data || 0 !== a.data.code));
                  case 8:
                    return e.prev = 8, e.t0 = e.catch(1), e.abrupt("return", !1);
                  case 11:
                  case "end":
                    return e.stop()
                }
              }), e, null, [
                [1, 8]
              ])
            })))).apply(this, arguments)
          }

          function Xn(e, n) {
            return Qn.apply(this, arguments)
          }

          function Qn() {
            return (Qn = (0, l.default)(c.default.mark((function e(n, t) {
              var o, a, r;
              return c.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    a = 0;
                  case 1:
                    if (!(a < n.length)) {
                      e.next = 11;
                      break
                    }
                    return r = n[a], e.next = 5, Gn(r, t);
                  case 5:
                    if (!e.sent) {
                      e.next = 8;
                      break
                    }
                    return o = r, e.abrupt("break", 11);
                  case 8:
                    a++, e.next = 1;
                    break;
                  case 11:
                    return e.abrupt("return", {
                      address: o,
                      port: t
                    });
                  case 12:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))).apply(this, arguments)
          }
          var Zn = {
              "serverless.file.resource.generateProximalSign": "storage/generate-proximal-sign",
              "serverless.file.resource.report": "storage/report",
              "serverless.file.resource.delete": "storage/delete",
              "serverless.file.resource.getTempFileURL": "storage/get-temp-file-url"
            },
            et = function() {
              function e(n) {
                if ((0, g.default)(this, e), ["spaceId", "clientSecret"].forEach((function(e) {
                    if (!Object.prototype.hasOwnProperty.call(n, e)) throw new Error("".concat(e, " required"))
                  })), !n.endpoint) throw new Error("集群空间未配置ApiEndpoint，配置后需要重新关联服务空间后生效");
                this.config = Object.assign({}, n), this.config.provider = "dcloud", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.adapter = Se
              }
              var n, t;
              return (0, y.default)(e, [{
                key: "request",
                value: (t = (0, l.default)(c.default.mark((function e(n) {
                  var t, o, a = this,
                    r = arguments;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = !(r.length > 1 && void 0 !== r[1]) || r[1], !(o = t)) {
                          e.next = 8;
                          break
                        }
                        return e.next = 5, this.setupLocalRequest(n);
                      case 5:
                        e.t0 = e.sent, e.next = 9;
                        break;
                      case 8:
                        e.t0 = this.setupRequest(n);
                      case 9:
                        return n = e.t0, e.abrupt("return", Promise.resolve().then((function() {
                          return o ? a.requestLocal(n) : Me(n, a.adapter.request)
                        })));
                      case 11:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return t.apply(this, arguments)
                })
              }, {
                key: "requestLocal",
                value: function(e) {
                  var n = this;
                  return new Promise((function(t, o) {
                    n.adapter.request(Object.assign(e, {
                      complete: function(e) {
                        if (e || (e = {}), !e.statusCode || e.statusCode >= 400) {
                          var n = e.data && e.data.code || "SYS_ERR",
                            a = e.data && e.data.message || "request:fail";
                          return o(new ke({
                            code: n,
                            message: a
                          }))
                        }
                        t({
                          success: !0,
                          result: e.data
                        })
                      }
                    }))
                  }))
                }
              }, {
                key: "setupRequest",
                value: function(e) {
                  var n = Object.assign({}, e, {
                      spaceId: this.config.spaceId,
                      timestamp: Date.now()
                    }),
                    t = {
                      "Content-Type": "application/json"
                    };
                  t["x-serverless-sign"] = Le(n, this.config.clientSecret);
                  var o = Ce();
                  t["x-client-info"] = encodeURIComponent(JSON.stringify(o));
                  var a = Pe().token;
                  return t["x-client-token"] = a, {
                    url: this.config.requestUrl,
                    method: "POST",
                    data: n,
                    dataType: "json",
                    header: JSON.parse(JSON.stringify(t))
                  }
                }
              }, {
                key: "setupLocalRequest",
                value: (n = (0, l.default)(c.default.mark((function e(n) {
                  var t, o, a, r, i, s, d, u, l;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = Ce(), o = Pe(), a = o.token, r = Object.assign({}, n, {
                          spaceId: this.config.spaceId,
                          timestamp: Date.now(),
                          clientInfo: t,
                          token: a
                        }), i = this.__dev__ && this.__dev__.debugInfo || {}, s = i.address, d = i.servePort, e.next = 9, Xn(s, d);
                      case 9:
                        return u = e.sent, l = u.address, e.abrupt("return", {
                          url: "http://".concat(l, ":").concat(d, "/").concat(Zn[n.method]),
                          method: "POST",
                          data: r,
                          dataType: "json",
                          header: JSON.parse(JSON.stringify({
                            "Content-Type": "application/json"
                          }))
                        });
                      case 12:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return n.apply(this, arguments)
                })
              }, {
                key: "callFunction",
                value: function(e) {
                  var n = {
                    method: "serverless.function.runtime.invoke",
                    params: JSON.stringify({
                      functionTarget: e.name,
                      functionArgs: e.data || {}
                    })
                  };
                  return this.request(n, !1)
                }
              }, {
                key: "getUploadFileOptions",
                value: function(e) {
                  var n = {
                    method: "serverless.file.resource.generateProximalSign",
                    params: JSON.stringify(e)
                  };
                  return this.request(n)
                }
              }, {
                key: "reportUploadFile",
                value: function(e) {
                  var n = {
                    method: "serverless.file.resource.report",
                    params: JSON.stringify(e)
                  };
                  return this.request(n)
                }
              }, {
                key: "uploadFile",
                value: function(e) {
                  var n, t = this,
                    o = e.filePath,
                    a = e.cloudPath,
                    r = e.fileType,
                    c = void 0 === r ? "image" : r,
                    i = e.onUploadProgress;
                  if (!a) throw new ke({
                    code: "CLOUDPATH_REQUIRED",
                    message: "cloudPath不可为空"
                  });
                  return this.getUploadFileOptions({
                    cloudPath: a
                  }).then((function(e) {
                    var a = e.result,
                      r = a.url,
                      s = a.formData,
                      d = a.name;
                    return n = e.result.fileUrl, new Promise((function(e, n) {
                      var a = t.adapter.uploadFile({
                        url: r,
                        formData: s,
                        name: d,
                        filePath: o,
                        fileType: c,
                        success: function(t) {
                          t && t.statusCode < 400 ? e(t) : n(new ke({
                            code: "UPLOAD_FAILED",
                            message: "文件上传失败"
                          }))
                        },
                        fail: function(e) {
                          n(new ke({
                            code: e.code || "UPLOAD_FAILED",
                            message: e.message || e.errMsg || "文件上传失败"
                          }))
                        }
                      });
                      "function" == typeof i && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate((function(e) {
                        i({
                          loaded: e.totalBytesSent,
                          total: e.totalBytesExpectedToSend
                        })
                      }))
                    }))
                  })).then((function() {
                    return t.reportUploadFile({
                      cloudPath: a
                    })
                  })).then((function(e) {
                    return new Promise((function(t, a) {
                      e.success ? t({
                        success: !0,
                        filePath: o,
                        fileID: n
                      }) : a(new ke({
                        code: "UPLOAD_FAILED",
                        message: "文件上传失败"
                      }))
                    }))
                  }))
                }
              }, {
                key: "deleteFile",
                value: function(e) {
                  var n = e.fileList,
                    t = {
                      method: "serverless.file.resource.delete",
                      params: JSON.stringify({
                        fileList: n
                      })
                    };
                  return this.request(t).then((function(e) {
                    if (e.success) return e.result;
                    throw new ke({
                      code: "DELETE_FILE_FAILED",
                      message: "删除文件失败"
                    })
                  }))
                }
              }, {
                key: "getTempFileURL",
                value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.fileList,
                    t = e.maxAge;
                  if (!Array.isArray(n) || 0 === n.length) throw new ke({
                    code: "INVALID_PARAM",
                    message: "fileList的元素必须是非空的字符串"
                  });
                  var o = {
                    method: "serverless.file.resource.getTempFileURL",
                    params: JSON.stringify({
                      fileList: n,
                      maxAge: t
                    })
                  };
                  return this.request(o).then((function(e) {
                    if (e.success) return {
                      fileList: e.result.fileList.map((function(e) {
                        return {
                          fileID: e.fileID,
                          tempFileURL: e.tempFileURL
                        }
                      }))
                    };
                    throw new ke({
                      code: "GET_TEMP_FILE_URL_FAILED",
                      message: "获取临时文件链接失败"
                    })
                  }))
                }
              }]), e
            }(),
            nt = {
              init: function(e) {
                var n = new et(e),
                  t = {
                    signInAnonymously: function() {
                      return Promise.resolve()
                    },
                    getLoginState: function() {
                      return Promise.resolve(!1)
                    }
                  };
                return n.auth = function() {
                  return t
                }, n.customAuth = n.auth, n
              }
            },
            tt = A((function(e, n) {
              e.exports = S.enc.Hex
            }));

          function ot() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
              var n = 16 * Math.random() | 0;
              return ("x" === e ? n : 3 & n | 8).toString(16)
            }))
          }

          function at() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = n.data,
              o = n.functionName,
              a = n.method,
              r = n.headers,
              c = n.signHeaderKeys,
              i = void 0 === c ? [] : c,
              d = n.config,
              u = String(Date.now()),
              l = ot(),
              m = Object.assign({}, r, {
                "x-from-app-id": d.spaceAppId,
                "x-from-env-id": d.spaceId,
                "x-to-env-id": d.spaceId,
                "x-from-instance-id": u,
                "x-from-function-name": o,
                "x-client-timestamp": u,
                "x-alipay-source": "client",
                "x-request-id": l,
                "x-alipay-callid": l,
                "x-trace-id": l
              }),
              f = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(i),
              p = e.split("?") || [],
              h = (0, s.default)(p, 2),
              v = h[0],
              g = void 0 === v ? "" : v,
              y = h[1],
              _ = void 0 === y ? "" : y,
              b = function(e) {
                var n = "HMAC-SHA256",
                  t = e.signedHeaders.join(";"),
                  o = e.signedHeaders.map((function(n) {
                    return "".concat(n.toLowerCase(), ":").concat(e.headers[n], "\n")
                  })).join(""),
                  a = qe(e.body).toString(tt),
                  r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(o, "\n").concat(t, "\n").concat(a, "\n"),
                  c = qe(r).toString(tt),
                  i = "".concat(n, "\n").concat(e.timestamp, "\n").concat(c, "\n"),
                  s = Ve(i, e.secretKey).toString(tt);
                return "".concat(n, " Credential=").concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(s)
              }({
                path: g,
                query: _,
                method: a,
                headers: m,
                timestamp: u,
                body: JSON.stringify(t),
                secretId: d.accessKey,
                secretKey: d.secretKey,
                signedHeaders: f.sort()
              });
            return {
              url: "".concat(d.endpoint).concat(e),
              headers: Object.assign({}, m, {
                Authorization: b
              })
            }
          }

          function rt(e) {
            var n = e.url,
              t = e.data,
              o = e.method,
              a = void 0 === o ? "POST" : o,
              r = e.headers,
              c = void 0 === r ? {} : r,
              i = e.timeout;
            return new Promise((function(e, o) {
              Se.request({
                url: n,
                method: a,
                data: "object" == (0, d.default)(t) ? JSON.stringify(t) : t,
                header: c,
                dataType: "json",
                timeout: i,
                complete: function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = c["x-trace-id"] || "";
                  if (!n.statusCode || n.statusCode >= 400) {
                    var a = n.data || {},
                      r = a.message,
                      i = a.errMsg,
                      s = a.trace_id;
                    return o(new ke({
                      code: "SYS_ERR",
                      message: r || i || "request:fail",
                      requestId: s || t
                    }))
                  }
                  e({
                    status: n.statusCode,
                    data: n.data,
                    headers: n.header,
                    requestId: t
                  })
                }
              })
            }))
          }

          function ct(e, n) {
            var t = e.path,
              o = e.data,
              a = e.method,
              r = void 0 === a ? "GET" : a,
              c = at(t, {
                functionName: "",
                data: o,
                method: r,
                headers: {
                  "x-alipay-cloud-mode": "oss",
                  "x-data-api-type": "oss",
                  "x-expire-timestamp": Date.now() + 6e4
                },
                signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
                config: n
              });
            return rt({
              url: c.url,
              data: o,
              method: r,
              headers: c.headers
            }).then((function(e) {
              var n = e.data || {};
              if (!n.success) throw new ke({
                code: e.errCode,
                message: e.errMsg,
                requestId: e.requestId
              });
              return n.data || {}
            })).catch((function(e) {
              throw new ke({
                code: e.errCode,
                message: e.errMsg,
                requestId: e.requestId
              })
            }))
          }

          function it() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = e.trim().replace(/^cloud:\/\//, ""),
              t = n.indexOf("/");
            if (t <= 0) throw new ke({
              code: "INVALID_PARAM",
              message: "fileID不合法"
            });
            var o = n.substring(0, t),
              a = n.substring(t + 1);
            return o !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), a
          }

          function st() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""))
          }
          var dt = function() {
              function e(n) {
                (0, g.default)(this, e), this.config = n
              }
              return (0, y.default)(e, [{
                key: "signedURL",
                value: function(e) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = "/ws/function/".concat(e),
                    o = this.config.wsEndpoint.replace(/^ws(s)?:\/\//, ""),
                    a = Object.assign({}, n, {
                      accessKeyId: this.config.accessKey,
                      signatureNonce: ot(),
                      timestamp: "" + Date.now()
                    }),
                    r = [t, ["accessKeyId", "authorization", "signatureNonce", "timestamp"].sort().map((function(e) {
                      return a[e] ? "".concat(e, "=").concat(a[e]) : null
                    })).filter(Boolean).join("&"), "host:".concat(o)].join("\n"),
                    c = ["HMAC-SHA256", qe(r).toString(tt)].join("\n"),
                    i = Ve(c, this.config.secretKey).toString(tt),
                    s = Object.keys(a).map((function(e) {
                      return "".concat(e, "=").concat(encodeURIComponent(a[e]))
                    })).join("&");
                  return "".concat(this.config.wsEndpoint).concat(t, "?").concat(s, "&signature=").concat(i)
                }
              }]), e
            }(),
            ut = function() {
              function e(n) {
                if ((0, g.default)(this, e), ["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach((function(e) {
                    if (!Object.prototype.hasOwnProperty.call(n, e)) throw new Error("".concat(e, " required"))
                  })), n.endpoint) {
                  if ("string" != typeof n.endpoint) throw new Error("endpoint must be string");
                  if (!/^https:\/\//.test(n.endpoint)) throw new Error("endpoint must start with https://");
                  n.endpoint = n.endpoint.replace(/\/$/, "")
                }
                this.config = Object.assign({}, n, {
                  endpoint: n.endpoint || "https://".concat(n.spaceId, ".api-hz.cloudbasefunction.cn"),
                  wsEndpoint: n.wsEndpoint || "wss://".concat(n.spaceId, ".api-hz.cloudbasefunction.cn")
                }), this._websocket = new dt(this.config)
              }
              var n, t, o;
              return (0, y.default)(e, [{
                key: "callFunction",
                value: function(e) {
                  return function(e, n) {
                    var t = e.name,
                      o = e.data,
                      a = e.async,
                      r = void 0 !== a && a,
                      c = e.timeout,
                      i = "POST",
                      s = {
                        "x-to-function-name": t
                      };
                    r && (s["x-function-invoke-type"] = "async");
                    var d = at("/functions/invokeFunction", {
                      functionName: t,
                      data: o,
                      method: i,
                      headers: s,
                      signHeaderKeys: ["x-to-function-name"],
                      config: n
                    });
                    return rt({
                      url: d.url,
                      data: o,
                      method: i,
                      headers: d.headers,
                      timeout: c
                    }).then((function(e) {
                      var n = 0;
                      if (r) {
                        var t = e.data || {};
                        n = "200" === t.errCode ? 0 : t.errCode, e.data = t.data || {}, e.errMsg = t.errMsg
                      }
                      if (0 !== n) throw new ke({
                        code: n,
                        message: e.errMsg,
                        requestId: e.requestId
                      });
                      return {
                        errCode: n,
                        success: 0 === n,
                        requestId: e.requestId,
                        result: e.data
                      }
                    })).catch((function(e) {
                      throw new ke({
                        code: e.errCode,
                        message: e.errMsg,
                        requestId: e.requestId
                      })
                    }))
                  }(e, this.config)
                }
              }, {
                key: "uploadFileToOSS",
                value: function(e) {
                  var n = e.url,
                    t = e.filePath,
                    o = e.fileType,
                    a = e.formData,
                    r = e.onUploadProgress;
                  return new Promise((function(e, c) {
                    var i = Se.uploadFile({
                      url: n,
                      filePath: t,
                      fileType: o,
                      formData: a,
                      name: "file",
                      success: function(n) {
                        n && n.statusCode < 400 ? e(n) : c(new ke({
                          code: "UPLOAD_FAILED",
                          message: "文件上传失败"
                        }))
                      },
                      fail: function(e) {
                        c(new ke({
                          code: e.code || "UPLOAD_FAILED",
                          message: e.message || e.errMsg || "文件上传失败"
                        }))
                      }
                    });
                    "function" == typeof r && i && "function" == typeof i.onProgressUpdate && i.onProgressUpdate((function(e) {
                      r({
                        loaded: e.totalBytesSent,
                        total: e.totalBytesExpectedToSend
                      })
                    }))
                  }))
                }
              }, {
                key: "uploadFile",
                value: (o = (0, l.default)(c.default.mark((function e(n) {
                  var t, o, a, r, i, s, d, u, l, m, f;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (t = n.filePath, o = n.cloudPath, a = void 0 === o ? "" : o, r = n.fileType, i = void 0 === r ? "image" : r, s = n.onUploadProgress, "string" === R(a)) {
                          e.next = 3;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "cloudPath必须为字符串类型"
                        });
                      case 3:
                        if (a = a.trim()) {
                          e.next = 5;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "cloudPath不可为空"
                        });
                      case 5:
                        if (!/:\/\//.test(a)) {
                          e.next = 7;
                          break
                        }
                        throw new ke({
                          code: "INVALID_PARAM",
                          message: "cloudPath不合法"
                        });
                      case 7:
                        return e.next = 9, ct({
                          path: "/".concat(a.replace(/^\//, ""), "?post_url")
                        }, this.config);
                      case 9:
                        return d = e.sent, u = d.file_id, l = d.upload_url, m = d.form_data, f = m && m.reduce((function(e, n) {
                          return e[n.key] = n.value, e
                        }), {}), e.abrupt("return", this.uploadFileToOSS({
                          url: l,
                          filePath: t,
                          fileType: i,
                          formData: f,
                          onUploadProgress: s
                        }).then((function() {
                          return {
                            fileID: u
                          }
                        })));
                      case 15:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return o.apply(this, arguments)
                })
              }, {
                key: "getTempFileURL",
                value: (t = (0, l.default)(c.default.mark((function e(n) {
                  var t, o = this;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = n.fileList, e.abrupt("return", new Promise((function(e, n) {
                          (!t || t.length < 0) && e({
                            code: "INVALID_PARAM",
                            message: "fileList不能为空数组"
                          }), t.length > 50 && e({
                            code: "INVALID_PARAM",
                            message: "fileList数组长度不能超过50"
                          });
                          var a, r = [],
                            c = b(t);
                          try {
                            for (c.s(); !(a = c.n()).done;) {
                              var i = a.value,
                                s = void 0;
                              "string" !== R(i) && e({
                                code: "INVALID_PARAM",
                                message: "fileList的元素必须是非空的字符串"
                              });
                              try {
                                s = it.call(o, i)
                              } catch (e) {
                                console.warn(e.errCode, e.errMsg), s = i
                              }
                              r.push({
                                file_id: s,
                                expire: 600
                              })
                            }
                          } catch (e) {
                            c.e(e)
                          } finally {
                            c.f()
                          }
                          ct({
                            path: "/?download_url",
                            data: {
                              file_list: r
                            },
                            method: "POST"
                          }, o.config).then((function(n) {
                            var t = n.file_list;
                            e({
                              fileList: (void 0 === t ? [] : t).map((function(e) {
                                return {
                                  fileID: st.call(o, e.file_id),
                                  tempFileURL: e.download_url
                                }
                              }))
                            })
                          })).catch((function(e) {
                            return n(e)
                          }))
                        })));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e)
                }))), function(e) {
                  return t.apply(this, arguments)
                })
              }, {
                key: "connectWebSocket",
                value: (n = (0, l.default)(c.default.mark((function e(n) {
                  var t, o;
                  return c.default.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return t = n.name, o = n.query, e.abrupt("return", Se.connectSocket({
                          url: this._websocket.signedURL(t, o),
                          complete: function() {}
                        }));
                      case 2:
                      case "end":
                        return e.stop()
                    }
                  }), e, this)
                }))), function(e) {
                  return n.apply(this, arguments)
                })
              }]), e
            }(),
            lt = {
              init: function(e) {
                e.provider = "alipay";
                var n = new ut(e);
                return n.auth = function() {
                  return {
                    signInAnonymously: function() {
                      return Promise.resolve()
                    },
                    getLoginState: function() {
                      return Promise.resolve(!0)
                    }
                  }
                }, n
              }
            };

          function mt(e) {
            var n, t = e.data;
            n = Ce();
            var o = JSON.parse(JSON.stringify(t || {}));
            if (Object.assign(o, {
                clientInfo: n
              }), !o.uniIdToken) {
              var a = Pe().token;
              a && (o.uniIdToken = a)
            }
            return o
          }

          function ft() {
            return pt.apply(this, arguments)
          }

          function pt() {
            return (pt = (0, l.default)(c.default.mark((function e() {
              var n, t, o, a, r, i, s, d, u = this,
                l = arguments;
              return c.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return n = l.length > 0 && void 0 !== l[0] ? l[0] : {}, e.next = 3, this.__dev__.initLocalNetwork();
                  case 3:
                    return t = this.__dev__, o = t.localAddress, a = t.localPort, r = {
                      aliyun: "aliyun",
                      tencent: "tcb",
                      alipay: "alipay",
                      dcloud: "dcloud"
                    } [this.config.provider], i = this.config.spaceId, s = "http://".concat(o, ":").concat(a, "/system/check-function"), d = "http://".concat(o, ":").concat(a, "/cloudfunctions/").concat(n.name), e.abrupt("return", new Promise((function(e, t) {
                      Se.request({
                        method: "POST",
                        url: s,
                        data: {
                          name: n.name,
                          platform: G,
                          provider: r,
                          spaceId: i
                        },
                        timeout: 3e3,
                        success: function(n) {
                          e(n)
                        },
                        fail: function() {
                          e({
                            data: {
                              code: "NETWORK_ERROR",
                              message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                            }
                          })
                        }
                      })
                    })).then((function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.data,
                        t = n || {},
                        o = t.code,
                        a = t.message;
                      return {
                        code: 0 === o ? 0 : o || "SYS_ERR",
                        message: a || "SYS_ERR"
                      }
                    })).then((function(e) {
                      var t = e.code,
                        o = e.message;
                      if (0 !== t) {
                        switch (t) {
                          case "MODULE_ENCRYPTED":
                            console.error("此云函数（".concat(n.name, "）依赖加密公共模块不可本地调试，自动切换为云端已部署的云函数"));
                            break;
                          case "FUNCTION_ENCRYPTED":
                            console.error("此云函数（".concat(n.name, "）已加密不可本地调试，自动切换为云端已部署的云函数"));
                            break;
                          case "ACTION_ENCRYPTED":
                            console.error(o || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                            break;
                          case "NETWORK_ERROR":
                            console.error(o || "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下");
                            break;
                          case "SWITCH_TO_CLOUD":
                            break;
                          default:
                            var a = "检测本地调试服务出现错误：".concat(o, "，请检查网络环境或重启客户端再试");
                            throw console.error(a), new Error(a)
                        }
                        return u._callCloudFunction(n)
                      }
                      return new Promise((function(e, t) {
                        var o = mt.call(u, {
                          data: n.data
                        });
                        Se.request({
                          method: "POST",
                          url: d,
                          data: {
                            provider: r,
                            platform: G,
                            param: o
                          },
                          timeout: n.timeout,
                          success: function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                              o = n.statusCode,
                              a = n.data;
                            return !o || o >= 400 ? t(new ke({
                              code: a.code || "SYS_ERR",
                              message: a.message || "request:fail"
                            })) : e({
                              result: a
                            })
                          },
                          fail: function(e) {
                            t(new ke({
                              code: e.code || e.errCode || "SYS_ERR",
                              message: e.message || e.errMsg || "request:fail"
                            }))
                          }
                        })
                      }))
                    })));
                  case 5:
                  case "end":
                    return e.stop()
                }
              }), e, this)
            })))).apply(this, arguments)
          }
          var ht = [{
              rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
              content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
              mode: "append"
            }],
            vt = /[\\^$.*+?()[\]{}|]/g,
            gt = RegExp(vt.source);

          function yt(e, n, t) {
            return e.replace(new RegExp((o = n) && gt.test(o) ? o.replace(vt, "\\$&") : o, "g"), t);
            var o
          }
          var _t = "request",
            bt = "response",
            wt = "both",
            xt = "_globalUniCloudStatus",
            kt = "_globalUniCloudSecureNetworkCache__{spaceId}";
          var Ot;
          Ot = "0123456789abcdef";
          var At = "uni-secure-network",
            St = {
              code: 2e4,
              message: "System error"
            },
            Pt = {
              code: 20101,
              message: "Invalid client"
            };

          function Tt(e) {
            var n = e || {},
              t = n.errSubject,
              o = n.subject,
              a = n.errCode,
              r = n.errMsg,
              c = n.code,
              i = n.message,
              s = n.cause;
            return new ke({
              subject: t || o || At,
              code: a || c || St.code,
              message: r || i,
              cause: s
            })
          }
          var It;

          function Et() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.secretType;
            return n === _t || n === bt || n === wt
          }

          function Ct() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.name,
              t = e.data,
              o = void 0 === t ? {} : t;
            return "app" === G && "DCloud-clientDB" === n && "encryption" === o.redirectTo && "getAppClientKey" === o.action
          }

          function jt(e) {
            var n = e.functionName,
              t = e.result,
              o = e.logPvd;
            if (this.__dev__.debugLog && t && t.requestId) {
              var a = JSON.stringify({
                spaceId: this.config.spaceId,
                functionName: n,
                requestId: t.requestId
              });
              console.log("[".concat(o, "-request]").concat(a, "[/").concat(o, "-request]"))
            }
          }

          function $t(e) {
            var n = e.callFunction,
              t = function(t) {
                var o = this,
                  a = t.name;
                t.data = mt.call(e, {
                  data: t.data
                });
                var r = {
                    aliyun: "aliyun",
                    tencent: "tcb",
                    tcb: "tcb",
                    alipay: "alipay",
                    dcloud: "dcloud"
                  } [this.config.provider],
                  c = Et(t),
                  i = Ct(t),
                  s = c || i;
                return n.call(this, t).then((function(e) {
                  return e.errCode = 0, !s && jt.call(o, {
                    functionName: a,
                    result: e,
                    logPvd: r
                  }), Promise.resolve(e)
                }), (function(e) {
                  return !s && jt.call(o, {
                    functionName: a,
                    result: e,
                    logPvd: r
                  }), e && e.message && (e.message = function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.message, t = void 0 === n ? "" : n, o = e.extraInfo, a = void 0 === o ? {} : o, r = e.formatter, c = void 0 === r ? [] : r, i = 0; i < c.length; i++) {
                      var s = c[i],
                        d = s.rule,
                        u = s.content,
                        l = s.mode,
                        m = t.match(d);
                      if (m) {
                        for (var f = u, p = 1; p < m.length; p++) f = yt(f, "{$".concat(p, "}"), m[p]);
                        for (var h in a) f = yt(f, "{".concat(h, "}"), a[h]);
                        return "replace" === l ? f : t + f
                      }
                    }
                    return t
                  }({
                    message: "[".concat(t.name, "]: ").concat(e.message),
                    formatter: ht,
                    extraInfo: {
                      functionName: a
                    }
                  })), Promise.reject(e)
                }))
              };
            e.callFunction = function(n) {
              var o, a, r = e.config,
                c = r.provider,
                i = r.spaceId,
                s = n.name;
              return n.data = n.data || {}, e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && X ? (e._callCloudFunction || (e._callCloudFunction = t, e._callLocalFunction = ft), o = ft) : o = t, o = o.bind(e), a = Ct(n) ? t.call(e, n) : function(e) {
                var n = e.name,
                  t = e.data;
                return "mp-weixin" === G && "uni-id-co" === n && "secureNetworkHandshakeByWeixin" === (void 0 === t ? {} : t).method
              }(n) ? o.call(e, n) : Et(n) ? new It({
                secretType: n.secretType,
                uniCloudIns: e
              }).wrapEncryptDataCallFunction(t.bind(e))(n) : function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = e.provider,
                  t = e.spaceId,
                  o = e.functionName,
                  a = Ie(),
                  r = a.appId,
                  c = a.uniPlatform,
                  i = a.osName,
                  s = c;
                "app" === c && (s = i);
                var d = function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.provider,
                    t = e.spaceId,
                    o = J;
                  if (!o) return {};
                  n = function(e) {
                    return "tencent" === e ? "tcb" : e
                  }(n);
                  var a = o.find((function(e) {
                    return e.provider === n && e.spaceId === t
                  }));
                  return a && a.config
                }({
                  provider: n,
                  spaceId: t
                });
                if (!d || !d.accessControl || !d.accessControl.enable) return !1;
                var u = d.accessControl.function || {},
                  l = Object.keys(u);
                if (0 === l.length) return !0;
                var m = function(e, n) {
                  for (var t, o, a, r = 0; r < e.length; r++) {
                    var c = e[r];
                    c !== n ? "*" !== c ? c.split(",").map((function(e) {
                      return e.trim()
                    })).indexOf(n) > -1 && (o = c) : a = c : t = c
                  }
                  return t || o || a
                }(l, o);
                if (!m) return !1;
                if ((u[m] || []).find((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e.appId === r && (e.platform || "").toLowerCase() === s.toLowerCase()
                  }))) return !0;
                throw console.error("此应用[appId: ".concat(r, ", platform: ").concat(s, "]不在云端配置的允许访问的应用列表内，参考：https://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), Tt(Pt)
              }({
                provider: c,
                spaceId: i,
                functionName: s
              }) ? new It({
                secretType: n.secretType,
                uniCloudIns: e
              }).wrapVerifyClientCallFunction(t.bind(e))(n) : o(n), Object.defineProperty(a, "result", {
                get: function() {
                  return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}
                }
              }), a.then((function(e) {
                return "undefined" != typeof UTSJSONObject && (e.result = new UTSJSONObject(e.result)), e
              }))
            }
          }
          It = "mp-weixin" !== G && "app" !== G ? function() {
            return (0, y.default)((function e() {
              throw (0, g.default)(this, e), Tt({
                message: "Platform ".concat(G, " is not supported by secure network")
              })
            }))
          }() : function() {
            return (0, y.default)((function e() {
              throw (0, g.default)(this, e), Tt({
                message: "Platform ".concat(G, " is not enabled, please check whether secure network module is enabled in your manifest.json")
              })
            }))
          }();
          var Lt = Symbol("CLIENT_DB_INTERNAL");

          function Mt(e, n) {
            return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Lt, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
              get: function(e, t, o) {
                if ("_uniClient" === t) return null;
                if ("symbol" == (0, d.default)(t)) return e[t];
                if (t in e || "string" != typeof t) {
                  var a = e[t];
                  return "function" == typeof a ? a.bind(e) : a
                }
                return n.get(e, t, o)
              }
            })
          }

          function Dt(e) {
            return {
              on: function(n, t) {
                e[n] = e[n] || [], e[n].indexOf(t) > -1 || e[n].push(t)
              },
              off: function(n, t) {
                e[n] = e[n] || [];
                var o = e[n].indexOf(t); - 1 !== o && e[n].splice(o, 1)
              }
            }
          }
          var Nt = ["db.Geo", "db.command", "command.aggregate"];

          function Rt(e, n) {
            return Nt.indexOf("".concat(e, ".").concat(n)) > -1
          }

          function Ut(e) {
            switch (R(e)) {
              case "array":
                return e.map((function(e) {
                  return Ut(e)
                }));
              case "object":
                return e._internalType === Lt || Object.keys(e).forEach((function(n) {
                  e[n] = Ut(e[n])
                })), e;
              case "regexp":
                return {
                  $regexp: {
                    source: e.source,
                    flags: e.flags
                  }
                };
              case "date":
                return {
                  $date: e.toISOString()
                };
              default:
                return e
            }
          }

          function Ft(e) {
            return e && e.content && e.content.$method
          }
          var Bt = function() {
            function e(n, t, o) {
              (0, g.default)(this, e), this.content = n, this.prevStage = t || null, this.udb = null, this._database = o
            }
            return (0, y.default)(e, [{
              key: "toJSON",
              value: function() {
                for (var e = this, n = [e.content]; e.prevStage;) e = e.prevStage, n.push(e.content);
                return {
                  $db: n.reverse().map((function(e) {
                    return {
                      $method: e.$method,
                      $param: Ut(e.$param)
                    }
                  }))
                }
              }
            }, {
              key: "toString",
              value: function() {
                return JSON.stringify(this.toJSON())
              }
            }, {
              key: "getAction",
              value: function() {
                var e = this.toJSON().$db.find((function(e) {
                  return "action" === e.$method
                }));
                return e && e.$param && e.$param[0]
              }
            }, {
              key: "getCommand",
              value: function() {
                return {
                  $db: this.toJSON().$db.filter((function(e) {
                    return "action" !== e.$method
                  }))
                }
              }
            }, {
              key: "isAggregate",
              get: function() {
                for (var e = this; e;) {
                  var n = Ft(e),
                    t = Ft(e.prevStage);
                  if ("aggregate" === n && "collection" === t || "pipeline" === n) return !0;
                  e = e.prevStage
                }
                return !1
              }
            }, {
              key: "isCommand",
              get: function() {
                for (var e = this; e;) {
                  if ("command" === Ft(e)) return !0;
                  e = e.prevStage
                }
                return !1
              }
            }, {
              key: "isAggregateCommand",
              get: function() {
                for (var e = this; e;) {
                  var n = Ft(e),
                    t = Ft(e.prevStage);
                  if ("aggregate" === n && "command" === t) return !0;
                  e = e.prevStage
                }
                return !1
              }
            }, {
              key: "getNextStageFn",
              value: function(e) {
                var n = this;
                return function() {
                  return qt({
                    $method: e,
                    $param: Ut(Array.from(arguments))
                  }, n, n._database)
                }
              }
            }, {
              key: "count",
              get: function() {
                return this.isAggregate ? this.getNextStageFn("count") : function() {
                  return this._send("count", Array.from(arguments))
                }
              }
            }, {
              key: "remove",
              get: function() {
                return this.isCommand ? this.getNextStageFn("remove") : function() {
                  return this._send("remove", Array.from(arguments))
                }
              }
            }, {
              key: "get",
              value: function() {
                return this._send("get", Array.from(arguments))
              }
            }, {
              key: "add",
              get: function() {
                return this.isCommand ? this.getNextStageFn("add") : function() {
                  return this._send("add", Array.from(arguments))
                }
              }
            }, {
              key: "update",
              value: function() {
                return this._send("update", Array.from(arguments))
              }
            }, {
              key: "end",
              value: function() {
                return this._send("end", Array.from(arguments))
              }
            }, {
              key: "set",
              get: function() {
                return this.isCommand ? this.getNextStageFn("set") : function() {
                  throw new Error("JQL禁止使用set方法")
                }
              }
            }, {
              key: "_send",
              value: function(e, n) {
                var t = this.getAction(),
                  o = this.getCommand();
                o.$db.push({
                  $method: e,
                  $param: Ut(n)
                });
                var a = o.$db.find((function(e) {
                    return "collection" === e.$method
                  })),
                  r = a && a.$param;
                return r && 1 === r.length && "string" == typeof a.$param[0] && a.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。"), this._database._callCloudFunction({
                  action: t,
                  command: o
                })
              }
            }]), e
          }();

          function qt(e, n, t) {
            return Mt(new Bt(e, n, t), {
              get: function(e, n) {
                var o = "db";
                return e && e.content && (o = e.content.$method), Rt(o, n) ? qt({
                  $method: n
                }, e, t) : function() {
                  return qt({
                    $method: n,
                    $param: Ut(Array.from(arguments))
                  }, e, t)
                }
              }
            })
          }

          function Vt(e) {
            var n = e.path,
              t = e.method;
            return function() {
              function e() {
                (0, g.default)(this, e), this.param = Array.from(arguments)
              }
              return (0, y.default)(e, [{
                key: "toJSON",
                value: function() {
                  return {
                    $newDb: [].concat((0, u.default)(n.map((function(e) {
                      return {
                        $method: e
                      }
                    }))), [{
                      $method: t,
                      $param: this.param
                    }])
                  }
                }
              }, {
                key: "toString",
                value: function() {
                  return JSON.stringify(this.toJSON())
                }
              }]), e
            }()
          }

          function Ht(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Mt(new e(n), {
              get: function(e, n) {
                return Rt("db", n) ? qt({
                  $method: n
                }, null, e) : function() {
                  return qt({
                    $method: n,
                    $param: Ut(Array.from(arguments))
                  }, null, e)
                }
              }
            })
          }
          var Kt = function(e) {
              (0, f.default)(t, e);
              var n = O(t);

              function t() {
                return (0, g.default)(this, t), n.apply(this, arguments)
              }
              return (0, y.default)(t, [{
                key: "_parseResult",
                value: function(e) {
                  return this._isJQL ? e.result : e
                }
              }, {
                key: "_callCloudFunction",
                value: function(e) {
                  var n = this,
                    t = e.action,
                    o = e.command,
                    a = e.multiCommand,
                    r = e.queryList;

                  function c(e, n) {
                    if (a && r)
                      for (var t = 0; t < r.length; t++) {
                        var o = r[t];
                        o.udb && "function" == typeof o.udb.setResult && (n ? o.udb.setResult(n) : o.udb.setResult(e.result.dataList[t]))
                      }
                  }
                  var i = this,
                    s = this._isJQL ? "databaseForJQL" : "database";

                  function d(e) {
                    return i._callback("error", [e]), re(ce(s, "fail"), e).then((function() {
                      return re(ce(s, "complete"), e)
                    })).then((function() {
                      return c(null, e), ye(de, {
                        type: me,
                        content: e
                      }), Promise.reject(e)
                    }))
                  }
                  var u = re(ce(s, "invoke")),
                    l = this._uniClient;
                  return u.then((function() {
                    return l.callFunction({
                      name: "DCloud-clientDB",
                      type: L,
                      data: {
                        action: t,
                        command: o,
                        multiCommand: a
                      }
                    })
                  })).then((function(e) {
                    var t = e.result,
                      o = t.code,
                      a = t.message,
                      r = t.token,
                      u = t.tokenExpired,
                      l = t.systemInfo,
                      m = void 0 === l ? [] : l;
                    if (m)
                      for (var f = 0; f < m.length; f++) {
                        var p = m[f],
                          h = p.level,
                          v = p.message,
                          g = p.detail,
                          y = "[System Info]" + v;
                        g && (y = "".concat(y, "\n详细信息：").concat(g)), (console["app" === G && "warn" === h ? "error" : h] || console.log)(y)
                      }
                    if (o) return d(new ke({
                      code: o,
                      message: a,
                      requestId: e.requestId
                    }));
                    e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, r && u && (Te({
                      token: r,
                      tokenExpired: u
                    }), n._callbackAuth("refreshToken", [{
                      token: r,
                      tokenExpired: u
                    }]), n._callback("refreshToken", [{
                      token: r,
                      tokenExpired: u
                    }]), ye(le, {
                      token: r,
                      tokenExpired: u
                    }));
                    for (var _ = [{
                        prop: "affectedDocs",
                        tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
                      }, {
                        prop: "code",
                        tips: "code不再推荐使用，请使用errCode替代"
                      }, {
                        prop: "message",
                        tips: "message不再推荐使用，请使用errMsg替代"
                      }], b = function(n) {
                        var t = _[n],
                          o = t.prop,
                          a = t.tips;
                        if (o in e.result) {
                          var r = e.result[o];
                          Object.defineProperty(e.result, o, {
                            get: function() {
                              return console.warn(a), r
                            }
                          })
                        }
                      }, w = 0; w < _.length; w++) b(w);
                    return function(e) {
                      return re(ce(s, "success"), e).then((function() {
                        return re(ce(s, "complete"), e)
                      })).then((function() {
                        c(e, null);
                        var n = i._parseResult(e);
                        return ye(de, {
                          type: me,
                          content: n
                        }), Promise.resolve(n)
                      }))
                    }(e)
                  }), (function(e) {
                    return /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), d(new ke({
                      code: e.code || "SYSTEM_ERROR",
                      message: e.message,
                      requestId: e.requestId
                    }))
                  }))
                }
              }]), t
            }(function() {
              function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = n.uniClient,
                  o = void 0 === t ? {} : t,
                  a = n.isJQL,
                  r = void 0 !== a && a;
                (0, g.default)(this, e), this._uniClient = o, this._authCallBacks = {}, this._dbCallBacks = {}, o._isDefault && (this._dbCallBacks = ee("_globalUniCloudDatabaseCallback")), r || (this.auth = Dt(this._authCallBacks)), this._isJQL = r, Object.assign(this, Dt(this._dbCallBacks)), this.env = Mt({}, {
                  get: function(e, n) {
                    return {
                      $env: n
                    }
                  }
                }), this.Geo = Mt({}, {
                  get: function(e, n) {
                    return Vt({
                      path: ["Geo"],
                      method: n
                    })
                  }
                }), this.serverDate = Vt({
                  path: [],
                  method: "serverDate"
                }), this.RegExp = Vt({
                  path: [],
                  method: "RegExp"
                })
              }
              return (0, y.default)(e, [{
                key: "getCloudEnv",
                value: function(e) {
                  if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
                  return {
                    $env: e.replace("$cloudEnv_", "")
                  }
                }
              }, {
                key: "_callback",
                value: function(e, n) {
                  var t = this._dbCallBacks;
                  t[e] && t[e].forEach((function(e) {
                    e.apply(void 0, (0, u.default)(n))
                  }))
                }
              }, {
                key: "_callbackAuth",
                value: function(e, n) {
                  var t = this._authCallBacks;
                  t[e] && t[e].forEach((function(e) {
                    e.apply(void 0, (0, u.default)(n))
                  }))
                }
              }, {
                key: "multiSend",
                value: function() {
                  var e = Array.from(arguments),
                    n = e.map((function(e) {
                      var n = e.getAction(),
                        t = e.getCommand();
                      if ("getTemp" !== t.$db[t.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
                      return {
                        action: n,
                        command: t
                      }
                    }));
                  return this._callCloudFunction({
                    multiCommand: n,
                    queryList: e
                  })
                }
              }]), e
            }()),
            zt = "token无效，跳转登录页面",
            Wt = "token过期，跳转登录页面",
            Jt = {
              TOKEN_INVALID_TOKEN_EXPIRED: Wt,
              TOKEN_INVALID_INVALID_CLIENTID: zt,
              TOKEN_INVALID: zt,
              TOKEN_INVALID_WRONG_TOKEN: zt,
              TOKEN_INVALID_ANONYMOUS_USER: zt
            },
            Gt = {
              "uni-id-token-expired": Wt,
              "uni-id-check-token-failed": zt,
              "uni-id-token-not-exist": zt,
              "uni-id-check-device-feature-failed": zt
            };

          function Yt(e, n) {
            return (e ? "".concat(e, "/").concat(n) : n).replace(/^\//, "")
          }

          function Xt() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
              t = [],
              o = [];
            return e.forEach((function(e) {
              !0 === e.needLogin ? t.push(Yt(n, e.path)) : !1 === e.needLogin && o.push(Yt(n, e.path))
            })), {
              needLoginPage: t,
              notNeedLoginPage: o
            }
          }

          function Qt(e) {
            return e.split("?")[0].replace(/^\//, "")
          }

          function Zt() {
            return function(e) {
              var n = e && e.$page && e.$page.fullPath || "";
              return n ? ("/" !== n.charAt(0) && (n = "/" + n), n) : n
            }(function() {
              var e = getCurrentPages();
              return e[e.length - 1]
            }())
          }

          function eo() {
            return Qt(Zt())
          }

          function no() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e) return !1;
            if (!(n && n.list && n.list.length)) return !1;
            var t = n.list,
              o = Qt(e);
            return t.some((function(e) {
              return e.pagePath === o
            }))
          }
          var to, oo = !!_.default.uniIdRouter,
            ao = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.default,
                n = e.pages,
                t = void 0 === n ? [] : n,
                o = e.subPackages,
                a = void 0 === o ? [] : o,
                r = e.uniIdRouter,
                c = void 0 === r ? {} : r,
                i = e.tabBar,
                s = void 0 === i ? {} : i,
                d = c.loginPage,
                l = c.needLogin,
                m = void 0 === l ? [] : l,
                f = c.resToLogin,
                p = void 0 === f || f,
                h = Xt(t),
                v = h.needLoginPage,
                g = h.notNeedLoginPage,
                y = function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = [],
                    t = [];
                  return e.forEach((function(e) {
                    var o = e.root,
                      a = e.pages,
                      r = Xt(void 0 === a ? [] : a, o),
                      c = r.needLoginPage,
                      i = r.notNeedLoginPage;
                    n.push.apply(n, (0, u.default)(c)), t.push.apply(t, (0, u.default)(i))
                  })), {
                    needLoginPage: n,
                    notNeedLoginPage: t
                  }
                }(a),
                b = y.needLoginPage,
                w = y.notNeedLoginPage;
              return {
                loginPage: d,
                routerNeedLogin: m,
                resToLogin: p,
                needLoginPage: [].concat((0, u.default)(v), (0, u.default)(b)),
                notNeedLoginPage: [].concat((0, u.default)(g), (0, u.default)(w)),
                loginPageInTabBar: no(d, s)
              }
            }(),
            ro = ao.loginPage,
            co = ao.routerNeedLogin,
            io = ao.resToLogin,
            so = ao.needLoginPage,
            uo = ao.notNeedLoginPage,
            lo = ao.loginPageInTabBar;
          if (so.indexOf(ro) > -1) throw new Error("Login page [".concat(ro, '] should not be "needLogin", please check your pages.json'));

          function mo(e) {
            var n = eo();
            if ("/" === e.charAt(0)) return e;
            var t = e.split("?"),
              o = (0, s.default)(t, 2),
              a = o[0],
              r = o[1],
              c = a.replace(/^\//, "").split("/"),
              i = n.split("/");
            i.pop();
            for (var d = 0; d < c.length; d++) {
              var u = c[d];
              ".." === u ? i.pop() : "." !== u && i.push(u)
            }
            return "" === i[0] && i.shift(), "/" + i.join("/") + (r ? "?" + r : "")
          }

          function fo(e) {
            var n = Qt(mo(e));
            return !(uo.indexOf(n) > -1) && (so.indexOf(n) > -1 || co.some((function(n) {
              return function(e, n) {
                return new RegExp(n).test(e)
              }(e, n)
            })))
          }

          function po(e) {
            var n = Qt(e.redirect),
              t = Qt(ro);
            return eo() !== t && n !== t
          }

          function ho() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.api,
              t = e.redirect;
            if (t && po({
                redirect: t
              })) {
              var a = function(e, n) {
                return "/" !== e.charAt(0) && (e = "/" + e), n ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(n)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(n)) : e
              }(ro, t);
              lo ? "navigateTo" !== n && "redirectTo" !== n || (n = "switchTab") : "switchTab" === n && (n = "navigateTo");
              var r = {
                navigateTo: o.navigateTo,
                redirectTo: o.redirectTo,
                switchTab: o.switchTab,
                reLaunch: o.reLaunch
              };
              setTimeout((function() {
                r[n]({
                  url: a
                })
              }), 0)
            }
          }

          function vo() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              n = e.url,
              t = {
                abortLoginPageJump: !1,
                autoToLoginPage: !1
              },
              o = function() {
                var e, n = Pe(),
                  t = n.token,
                  o = n.tokenExpired;
                if (t) {
                  if (o < Date.now()) {
                    var a = "uni-id-token-expired";
                    e = {
                      errCode: a,
                      errMsg: Gt[a]
                    }
                  }
                } else {
                  var r = "uni-id-check-token-failed";
                  e = {
                    errCode: r,
                    errMsg: Gt[r]
                  }
                }
                return e
              }();
            if (fo(n) && o) {
              if (o.uniIdRedirectUrl = n, he(ue).length > 0) return setTimeout((function() {
                ye(ue, o)
              }), 0), t.abortLoginPageJump = !0, t;
              t.autoToLoginPage = !0
            }
            return t
          }

          function go() {
            ! function() {
              var e = Zt(),
                n = vo({
                  url: e
                }),
                t = n.abortLoginPageJump,
                o = n.autoToLoginPage;
              t || o && ho({
                api: "redirectTo",
                redirect: e
              })
            }();
            for (var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"], n = function(n) {
                var t = e[n];
                o.addInterceptor(t, {
                  invoke: function(e) {
                    var n = vo({
                        url: e.url
                      }),
                      o = n.abortLoginPageJump,
                      a = n.autoToLoginPage;
                    return o ? e : a ? (ho({
                      api: t,
                      redirect: mo(e.url)
                    }), !1) : e
                  }
                })
              }, t = 0; t < e.length; t++) n(t)
          }

          function yo() {
            this.onResponse((function(e) {
              var n = e.type,
                t = e.content,
                o = !1;
              switch (n) {
                case "cloudobject":
                  o = function(e) {
                    return "object" == (0, d.default)(e) && (e || {}).errCode in Gt
                  }(t);
                  break;
                case "clientdb":
                  o = function(e) {
                    return "object" == (0, d.default)(e) && (e || {}).errCode in Jt
                  }(t)
              }
              o && function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = he(ue);
                we().then((function() {
                  var t = Zt();
                  if (t && po({
                      redirect: t
                    })) return n.length > 0 ? ye(ue, Object.assign({
                    uniIdRedirectUrl: t
                  }, e)) : void(ro && ho({
                    api: "navigateTo",
                    redirect: t
                  }))
                }))
              }(t)
            }))
          }

          function _o(e) {
            ! function(e) {
              e.onResponse = function(e) {
                ve(de, e)
              }, e.offResponse = function(e) {
                ge(de, e)
              }
            }(e),
            function(e) {
              e.onNeedLogin = function(e) {
                ve(ue, e)
              }, e.offNeedLogin = function(e) {
                ge(ue, e)
              }, oo && (ee(xt).needLoginInit || (ee(xt).needLoginInit = !0, we().then((function() {
                go.call(e)
              })), io && yo.call(e)))
            }(e),
            function(e) {
              e.onRefreshToken = function(e) {
                ve(le, e)
              }, e.offRefreshToken = function(e) {
                ge(le, e)
              }
            }(e)
          }
          var bo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            wo = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

          function xo() {
            var e, n, t = Pe().token || "",
              o = t.split(".");
            if (!t || 3 !== o.length) return {
              uid: null,
              role: [],
              permission: [],
              tokenExpired: 0
            };
            try {
              e = JSON.parse((n = o[1], decodeURIComponent(to(n).split("").map((function(e) {
                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
              })).join(""))))
            } catch (t) {
              throw new Error("获取当前用户信息出错，详细错误信息为：" + t.message)
            }
            return e.tokenExpired = 1e3 * e.exp, delete e.exp, delete e.iat, e
          }
          to = "function" != typeof atob ? function(e) {
            if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !wo.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
            var n;
            e += "==".slice(2 - (3 & e.length));
            for (var t, o, a = "", r = 0; r < e.length;) n = bo.indexOf(e.charAt(r++)) << 18 | bo.indexOf(e.charAt(r++)) << 12 | (t = bo.indexOf(e.charAt(r++))) << 6 | (o = bo.indexOf(e.charAt(r++))), a += 64 === t ? String.fromCharCode(n >> 16 & 255) : 64 === o ? String.fromCharCode(n >> 16 & 255, n >> 8 & 255) : String.fromCharCode(n >> 16 & 255, n >> 8 & 255, 255 & n);
            return a
          } : atob;
          var ko = function(e) {
              return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
            }(A((function(e, n) {
              Object.defineProperty(n, "__esModule", {
                value: !0
              });
              var t = "chooseAndUploadFile:ok",
                r = "chooseAndUploadFile:fail";

              function c(e, n) {
                return e.tempFiles.forEach((function(e, t) {
                  e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), n && (e.fileType = n), e.cloudPath = Date.now() + "_" + t + e.name.substring(e.name.lastIndexOf("."))
                })), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map((function(e) {
                  return e.path
                }))), e
              }

              function i(e, n, o) {
                var a = o.onChooseFile,
                  r = o.onUploadProgress;
                return n.then((function(e) {
                  if (a) {
                    var n = a(e);
                    if (void 0 !== n) return Promise.resolve(n).then((function(n) {
                      return void 0 === n ? e : n
                    }))
                  }
                  return e
                })).then((function(n) {
                  return !1 === n ? {
                    errMsg: t,
                    tempFilePaths: [],
                    tempFiles: []
                  } : function(e, n) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                      a = arguments.length > 3 ? arguments[3] : void 0;
                    (n = Object.assign({}, n)).errMsg = t;
                    var r = n.tempFiles,
                      c = r.length,
                      i = 0;
                    return new Promise((function(t) {
                      for (; i < o;) s();

                      function s() {
                        var o = i++;
                        if (o >= c) !r.find((function(e) {
                          return !e.url && !e.errMsg
                        })) && t(n);
                        else {
                          var d = r[o];
                          e.uploadFile({
                            provider: d.provider,
                            filePath: d.path,
                            cloudPath: d.cloudPath,
                            fileType: d.fileType,
                            cloudPathAsRealPath: d.cloudPathAsRealPath,
                            onUploadProgress: function(e) {
                              e.index = o, e.tempFile = d, e.tempFilePath = d.path, a && a(e)
                            }
                          }).then((function(e) {
                            d.url = e.fileID, o < c && s()
                          })).catch((function(e) {
                            d.errMsg = e.errMsg || e.message, o < c && s()
                          }))
                        }
                      }
                    }))
                  }(e, n, 5, r)
                }))
              }
              n.initChooseAndUploadFile = function(e) {
                return function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    type: "all"
                  };
                  return "image" === n.type ? i(e, function(e) {
                    var n = e.count,
                      t = e.sizeType,
                      a = e.sourceType,
                      i = void 0 === a ? ["album", "camera"] : a,
                      s = e.extension;
                    return new Promise((function(e, a) {
                      o.chooseImage({
                        count: n,
                        sizeType: t,
                        sourceType: i,
                        extension: s,
                        success: function(n) {
                          e(c(n, "image"))
                        },
                        fail: function(e) {
                          a({
                            errMsg: e.errMsg.replace("chooseImage:fail", r)
                          })
                        }
                      })
                    }))
                  }(n), n) : "video" === n.type ? i(e, function(e) {
                    var n = e.camera,
                      t = e.compressed,
                      a = e.maxDuration,
                      i = e.sourceType,
                      s = void 0 === i ? ["album", "camera"] : i,
                      d = e.extension;
                    return new Promise((function(e, i) {
                      o.chooseVideo({
                        camera: n,
                        compressed: t,
                        maxDuration: a,
                        sourceType: s,
                        extension: d,
                        success: function(n) {
                          var t = n.tempFilePath,
                            o = n.duration,
                            a = n.size,
                            r = n.height,
                            i = n.width;
                          e(c({
                            errMsg: "chooseVideo:ok",
                            tempFilePaths: [t],
                            tempFiles: [{
                              name: n.tempFile && n.tempFile.name || "",
                              path: t,
                              size: a,
                              type: n.tempFile && n.tempFile.type || "",
                              width: i,
                              height: r,
                              duration: o,
                              fileType: "video",
                              cloudPath: ""
                            }]
                          }, "video"))
                        },
                        fail: function(e) {
                          i({
                            errMsg: e.errMsg.replace("chooseVideo:fail", r)
                          })
                        }
                      })
                    }))
                  }(n), n) : i(e, function(e) {
                    var n = e.count,
                      t = e.extension;
                    return new Promise((function(e, i) {
                      var s = o.chooseFile;
                      if (void 0 !== a && "function" == typeof a.chooseMessageFile && (s = a.chooseMessageFile), "function" != typeof s) return i({
                        errMsg: r + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
                      });
                      s({
                        type: "all",
                        count: n,
                        extension: t,
                        success: function(n) {
                          e(c(n))
                        },
                        fail: function(e) {
                          i({
                            errMsg: e.errMsg.replace("chooseFile:fail", r)
                          })
                        }
                      })
                    }))
                  }(n), n)
                }
              }
            }))),
            Oo = "manual";

          function Ao(e) {
            return {
              props: {
                localdata: {
                  type: Array,
                  default: function() {
                    return []
                  }
                },
                options: {
                  type: [Object, Array],
                  default: function() {
                    return {}
                  }
                },
                spaceInfo: {
                  type: Object,
                  default: function() {
                    return {}
                  }
                },
                collection: {
                  type: [String, Array],
                  default: ""
                },
                action: {
                  type: String,
                  default: ""
                },
                field: {
                  type: String,
                  default: ""
                },
                orderby: {
                  type: String,
                  default: ""
                },
                where: {
                  type: [String, Object],
                  default: ""
                },
                pageData: {
                  type: String,
                  default: "add"
                },
                pageCurrent: {
                  type: Number,
                  default: 1
                },
                pageSize: {
                  type: Number,
                  default: 20
                },
                getcount: {
                  type: [Boolean, String],
                  default: !1
                },
                gettree: {
                  type: [Boolean, String],
                  default: !1
                },
                gettreepath: {
                  type: [Boolean, String],
                  default: !1
                },
                startwith: {
                  type: String,
                  default: ""
                },
                limitlevel: {
                  type: Number,
                  default: 10
                },
                groupby: {
                  type: String,
                  default: ""
                },
                groupField: {
                  type: String,
                  default: ""
                },
                distinct: {
                  type: [Boolean, String],
                  default: !1
                },
                foreignKey: {
                  type: String,
                  default: ""
                },
                loadtime: {
                  type: String,
                  default: "auto"
                },
                manual: {
                  type: Boolean,
                  default: !1
                }
              },
              data: function() {
                return {
                  mixinDatacomLoading: !1,
                  mixinDatacomHasMore: !1,
                  mixinDatacomResData: [],
                  mixinDatacomErrorMessage: "",
                  mixinDatacomPage: {},
                  mixinDatacomError: null
                }
              },
              created: function() {
                var e = this;
                this.mixinDatacomPage = {
                  current: this.pageCurrent,
                  size: this.pageSize,
                  count: 0
                }, this.$watch((function() {
                  var n = [];
                  return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((function(t) {
                    n.push(e[t])
                  })), n
                }), (function(n, t) {
                  if (e.loadtime !== Oo) {
                    for (var o = !1, a = [], r = 2; r < n.length; r++) n[r] !== t[r] && (a.push(n[r]), o = !0);
                    n[0] !== t[0] && (e.mixinDatacomPage.current = e.pageCurrent), e.mixinDatacomPage.size = e.pageSize, e.onMixinDatacomPropsChange(o, a)
                  }
                }))
              },
              methods: {
                onMixinDatacomPropsChange: function(e, n) {},
                mixinDatacomEasyGet: function() {
                  var e = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = n.getone,
                    o = void 0 !== t && t,
                    a = n.success,
                    r = n.fail;
                  this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then((function(n) {
                    e.mixinDatacomLoading = !1;
                    var t = n.result,
                      r = t.data,
                      c = t.count;
                    e.getcount && (e.mixinDatacomPage.count = c), e.mixinDatacomHasMore = r.length < e.pageSize;
                    var i = o ? r.length ? r[0] : void 0 : r;
                    e.mixinDatacomResData = i, a && a(i)
                  })).catch((function(n) {
                    e.mixinDatacomLoading = !1, e.mixinDatacomErrorMessage = n, e.mixinDatacomError = n, r && r(n)
                  })))
                },
                mixinDatacomGet: function() {
                  var n, t, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  o = o || {}, t = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
                  var a = o.action || this.action;
                  a && (t = t.action(a));
                  var r = o.collection || this.collection;
                  t = Array.isArray(r) ? (n = t).collection.apply(n, (0, u.default)(r)) : t.collection(r);
                  var c = o.where || this.where;
                  c && Object.keys(c).length && (t = t.where(c));
                  var i = o.field || this.field;
                  i && (t = t.field(i));
                  var s = o.foreignKey || this.foreignKey;
                  s && (t = t.foreignKey(s));
                  var d = o.groupby || this.groupby;
                  d && (t = t.groupBy(d));
                  var l = o.groupField || this.groupField;
                  l && (t = t.groupField(l)), !0 === (void 0 !== o.distinct ? o.distinct : this.distinct) && (t = t.distinct());
                  var m = o.orderby || this.orderby;
                  m && (t = t.orderBy(m));
                  var f = void 0 !== o.pageCurrent ? o.pageCurrent : this.mixinDatacomPage.current,
                    p = void 0 !== o.pageSize ? o.pageSize : this.mixinDatacomPage.size,
                    h = void 0 !== o.getcount ? o.getcount : this.getcount,
                    v = void 0 !== o.gettree ? o.gettree : this.gettree,
                    g = void 0 !== o.gettreepath ? o.gettreepath : this.gettreepath,
                    y = {
                      getCount: h
                    },
                    _ = {
                      limitLevel: void 0 !== o.limitlevel ? o.limitlevel : this.limitlevel,
                      startWith: void 0 !== o.startwith ? o.startwith : this.startwith
                    };
                  return v && (y.getTree = _), g && (y.getTreePath = _), t = t.skip(p * (f - 1)).limit(p).get(y)
                }
              }
            }
          }

          function So(e) {
            return ee(kt.replace("{spaceId}", e.config.spaceId))
          }

          function Po() {
            return To.apply(this, arguments)
          }

          function To() {
            return (To = (0, l.default)(c.default.mark((function e() {
              var n, t, a, r, i, s, d, u = arguments;
              return c.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (n = u.length > 0 && void 0 !== u[0] ? u[0] : {}, t = n.openid, a = n.callLoginByWeixin, r = void 0 !== a && a, i = So(this), "mp-weixin" === G) {
                      e.next = 4;
                      break
                    }
                    throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(G, "`"));
                  case 4:
                    if (!t || !r) {
                      e.next = 6;
                      break
                    }
                    throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
                  case 6:
                    if (!t) {
                      e.next = 8;
                      break
                    }
                    return e.abrupt("return", (i.mpWeixinOpenid = t, {}));
                  case 8:
                    return e.next = 10, new Promise((function(e, n) {
                      o.login({
                        success: function(n) {
                          e(n.code)
                        },
                        fail: function(e) {
                          n(new Error(e.errMsg))
                        }
                      })
                    }));
                  case 10:
                    return s = e.sent, d = this.importObject("uni-id-co", {
                      customUI: !0
                    }), e.next = 14, d.secureNetworkHandshakeByWeixin({
                      code: s,
                      callLoginByWeixin: r
                    });
                  case 14:
                    return i.mpWeixinCode = s, e.abrupt("return", {
                      code: s
                    });
                  case 16:
                  case "end":
                    return e.stop()
                }
              }), e, this)
            })))).apply(this, arguments)
          }

          function Io(e) {
            return Eo.apply(this, arguments)
          }

          function Eo() {
            return (Eo = (0, l.default)(c.default.mark((function e(n) {
              var t;
              return c.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return t = So(this), e.abrupt("return", (t.initPromise || (t.initPromise = Po.call(this, n).then((function(e) {
                      return e
                    })).catch((function(e) {
                      throw delete t.initPromise, e
                    }))), t.initPromise));
                  case 2:
                  case "end":
                    return e.stop()
                }
              }), e, this)
            })))).apply(this, arguments)
          }

          function Co(e) {
            ! function(e) {
              Ee = e
            }(e)
          }

          function jo(e) {
            var n = {
              getSystemInfo: o.getSystemInfo,
              getPushClientId: o.getPushClientId
            };
            return function(t) {
              return new Promise((function(o, a) {
                n[e](k(k({}, t), {}, {
                  success: function(e) {
                    o(e)
                  },
                  fail: function(e) {
                    a(e)
                  }
                }))
              }))
            }
          }
          var $o = function(e) {
            (0, f.default)(a, e);
            var n, t = O(a);

            function a() {
              var e;
              return (0, g.default)(this, a), (e = t.call(this))._uniPushMessageCallback = e._receivePushMessage.bind((0, i.default)(e)), e._currentMessageId = -1, e._payloadQueue = [], e
            }
            return (0, y.default)(a, [{
              key: "init",
              value: function() {
                var e = this;
                return Promise.all([jo("getSystemInfo")(), jo("getPushClientId")()]).then((function() {
                  var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = (0, s.default)(n, 2),
                    o = t[0],
                    a = (o = void 0 === o ? {} : o).appId,
                    r = t[1],
                    c = (r = void 0 === r ? {} : r).cid;
                  if (!a) throw new Error("Invalid appId, please check the manifest.json file");
                  if (!c) throw new Error("Invalid push client id");
                  e._appId = a, e._pushClientId = c, e._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), e.emit("open"), e._initMessageListener()
                }), (function(n) {
                  throw e.emit("error", n), e.close(), n
                }))
              }
            }, {
              key: "open",
              value: (n = (0, l.default)(c.default.mark((function e() {
                return c.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", this.init());
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              }))), function() {
                return n.apply(this, arguments)
              })
            }, {
              key: "_isUniCloudSSE",
              value: function(e) {
                if ("receive" !== e.type) return !1;
                var n = e && e.data && e.data.payload;
                return !(!n || "UNI_CLOUD_SSE" !== n.channel || n.seqId !== this._seqId)
              }
            }, {
              key: "_receivePushMessage",
              value: function(e) {
                if (this._isUniCloudSSE(e)) {
                  var n = e && e.data && e.data.payload,
                    t = n.action,
                    o = n.messageId,
                    a = n.message;
                  this._payloadQueue.push({
                    action: t,
                    messageId: o,
                    message: a
                  }), this._consumMessage()
                }
              }
            }, {
              key: "_consumMessage",
              value: function() {
                for (var e = this;;) {
                  var n = this._payloadQueue.find((function(n) {
                    return n.messageId === e._currentMessageId + 1
                  }));
                  if (!n) break;
                  this._currentMessageId++, this._parseMessagePayload(n)
                }
              }
            }, {
              key: "_parseMessagePayload",
              value: function(e) {
                var n = e.action,
                  t = e.messageId,
                  o = e.message;
                "end" === n ? this._end({
                  messageId: t,
                  message: o
                }) : "message" === n && this._appendMessage({
                  messageId: t,
                  message: o
                })
              }
            }, {
              key: "_appendMessage",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = (e.messageId, e.message);
                this.emit("message", n)
              }
            }, {
              key: "_end",
              value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  n = (e.messageId, e.message);
                this.emit("end", n), this.close()
              }
            }, {
              key: "_initMessageListener",
              value: function() {
                o.onPushMessage(this._uniPushMessageCallback)
              }
            }, {
              key: "_destroy",
              value: function() {
                o.offPushMessage(this._uniPushMessageCallback)
              }
            }, {
              key: "toJSON",
              value: function() {
                return {
                  appId: this._appId,
                  pushClientId: this._pushClientId,
                  seqId: this._seqId
                }
              }
            }, {
              key: "close",
              value: function() {
                this._destroy(), this.emit("close")
              }
            }]), a
          }(K);

          function Lo() {
            return (Lo = (0, l.default)(c.default.mark((function e(n) {
              var t, o, a, r, i, s, d, u, l, m, f;
              return c.default.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2;
                    break;
                  case 2:
                    if ("app" === G && (t = Ie(), o = t.osName, a = t.osVersion, "ios" === o && function(e) {
                        if (!e || "string" != typeof e) return 0;
                        var n = e.match(/^(\d+)./);
                        return n && n[1] ? parseInt(n[1]) : 0
                      }(a) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）")), (r = n.__dev__).debugInfo) {
                      e.next = 6;
                      break
                    }
                    return e.abrupt("return");
                  case 6:
                    return i = r.debugInfo, s = i.address, d = i.servePort, e.next = 11, Xn(s, d);
                  case 11:
                    if (u = e.sent, !(l = u.address)) {
                      e.next = 15;
                      break
                    }
                    return e.abrupt("return", (r.localAddress = l, void(r.localPort = d)));
                  case 15:
                    if (m = console["app" === G ? "error" : "warn"], f = "", "remote" === r.debugInfo.initialLaunchType ? (r.debugInfo.forceRemote = !0, f = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : f = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", f += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === G && (f += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === G.indexOf("mp-") && (f += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), r.debugInfo.forceRemote) {
                      e.next = 19;
                      break
                    }
                    throw new Error(f);
                  case 19:
                    m(f);
                  case 20:
                  case "end":
                    return e.stop()
                }
              }), e)
            })))).apply(this, arguments)
          }
          var Mo = {
              tcb: Jn,
              tencent: Jn,
              aliyun: Re,
              private: nt,
              dcloud: nt,
              alipay: lt
            },
            Do = new(function() {
              function e() {
                (0, g.default)(this, e)
              }
              return (0, y.default)(e, [{
                key: "init",
                value: function(e) {
                  var n = {},
                    t = Mo[e.provider];
                  if (!t) throw new Error("未提供正确的provider参数");
                  return function(e) {
                      var n = {};
                      e.__dev__ = n, n.debugLog = "web" === G && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === G || "mp-harmony" === G;
                      var t = Y;
                      t && !t.code && (n.debugInfo = t);
                      var o = new H({
                        createPromise: function() {
                          return function(e) {
                            return Lo.apply(this, arguments)
                          }(e)
                        }
                      });
                      n.initLocalNetwork = function() {
                        return o.exec()
                      }
                    }(n = t.init(e)),
                    function(e) {
                      e._initPromiseHub || (e._initPromiseHub = new H({
                        createPromise: function() {
                          var n = Promise.resolve();
                          n = new Promise((function(e) {
                            setTimeout((function() {
                              e()
                            }), 1)
                          }));
                          var t = e.auth();
                          return n.then((function() {
                            return t.getLoginState()
                          })).then((function(e) {
                            return e ? Promise.resolve() : t.signInAnonymously()
                          }))
                        }
                      }))
                    }(n), $t(n),
                    function(e) {
                      var n = e.uploadFile;
                      e.uploadFile = function(e) {
                        return n.call(this, e)
                      }
                    }(n),
                    function(e) {
                      e.database = function(n) {
                        if (n && Object.keys(n).length > 0) return e.init(n).database();
                        if (this._database) return this._database;
                        var t = Ht(Kt, {
                          uniClient: e
                        });
                        return this._database = t, t
                      }, e.databaseForJQL = function(n) {
                        if (n && Object.keys(n).length > 0) return e.init(n).databaseForJQL();
                        if (this._databaseForJQL) return this._databaseForJQL;
                        var t = Ht(Kt, {
                          uniClient: e,
                          isJQL: !0
                        });
                        return this._databaseForJQL = t, t
                      }
                    }(n),
                    function(e) {
                      e.getCurrentUserInfo = xo, e.chooseAndUploadFile = ko.initChooseAndUploadFile(e), Object.assign(e, {
                        get mixinDatacom() {
                          return Ao(e)
                        }
                      }), e.SSEChannel = $o, e.initSecureNetworkByWeixin = function(e) {
                        return function() {
                          var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = n.openid,
                            o = n.callLoginByWeixin,
                            a = void 0 !== o && o;
                          return Io.call(e, {
                            openid: t,
                            callLoginByWeixin: a
                          })
                        }
                      }(e), e.setCustomClientInfo = Co, e.importObject = function(e) {
                        return function(n) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = t = function(e) {
                              var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                              return e.customUI = n.customUI || e.customUI, e.parseSystemError = n.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, n.loadingOptions), Object.assign(e.errorOptions, n.errorOptions), "object" == (0, d.default)(n.secretMethods) && (e.secretMethods = n.secretMethods), e
                            }({
                              customUI: !1,
                              loadingOptions: {
                                title: "加载中...",
                                mask: !0
                              },
                              errorOptions: {
                                type: "modal",
                                retry: !1
                              }
                            }, t),
                            r = a.customUI,
                            i = a.loadingOptions,
                            s = a.errorOptions,
                            u = a.parseSystemError,
                            m = !r;
                          return new Proxy({}, {
                            get: function(a, r) {
                              switch (r) {
                                case "toString":
                                  return "[object UniCloudObject]";
                                case "toJSON":
                                  return {}
                              }
                              return function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                  n = e.fn,
                                  t = e.interceptorName,
                                  o = e.getCallbackArgs;
                                return (0, l.default)(c.default.mark((function e() {
                                  var a, r, i, s, d, u, l = arguments;
                                  return c.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        for (a = l.length, r = new Array(a), i = 0; i < a; i++) r[i] = l[i];
                                        return s = o ? o({
                                          params: r
                                        }) : {}, e.prev = 2, e.next = 5, re(ce(t, "invoke"), k({}, s));
                                      case 5:
                                        return e.next = 7, n.apply(void 0, r);
                                      case 7:
                                        return d = e.sent, e.next = 10, re(ce(t, "success"), k(k({}, s), {}, {
                                          result: d
                                        }));
                                      case 10:
                                        return e.abrupt("return", d);
                                      case 13:
                                        return e.prev = 13, e.t0 = e.catch(2), u = e.t0, e.next = 18, re(ce(t, "fail"), k(k({}, s), {}, {
                                          error: u
                                        }));
                                      case 18:
                                        throw u;
                                      case 19:
                                        return e.prev = 19, e.next = 22, re(ce(t, "complete"), k(k({}, s), {}, u ? {
                                          error: u
                                        } : {
                                          result: d
                                        }));
                                      case 22:
                                        return e.finish(19);
                                      case 23:
                                      case "end":
                                        return e.stop()
                                    }
                                  }), e, null, [
                                    [2, 13, 19, 23]
                                  ])
                                })))
                              }({
                                fn: function() {
                                  var a = (0, l.default)(c.default.mark((function a() {
                                    var p, h, v, g, y, _, b, w, x, O, A, S, P, T, I, E = arguments;
                                    return c.default.wrap((function(a) {
                                      for (;;) switch (a.prev = a.next) {
                                        case 0:
                                          for (m && o.showLoading({
                                              title: i.title,
                                              mask: i.mask
                                            }), h = E.length, v = new Array(h), g = 0; g < h; g++) v[g] = E[g];
                                          return y = {
                                            name: n,
                                            type: $,
                                            data: {
                                              method: r,
                                              params: v
                                            }
                                          }, "object" == (0, d.default)(t.secretMethods) && function(e, n) {
                                            var t = n.data.method,
                                              o = e.secretMethods || {},
                                              a = o[t] || o["*"];
                                            a && (n.secretType = a)
                                          }(t, y), _ = !1, a.prev = 5, a.next = 8, e.callFunction(y);
                                        case 8:
                                          p = a.sent, a.next = 14;
                                          break;
                                        case 11:
                                          a.prev = 11, a.t0 = a.catch(5), _ = !0, p = {
                                            result: new ke(a.t0)
                                          };
                                        case 14:
                                          if (b = p.result || {}, w = b.errSubject, x = b.errCode, O = b.errMsg, A = b.newToken, m && o.hideLoading(), A && A.token && A.tokenExpired && (Te(A), ye(le, k({}, A))), !x) {
                                            a.next = 39;
                                            break
                                          }
                                          if (S = O, !_ || !u) {
                                            a.next = 24;
                                            break
                                          }
                                          return a.next = 20, u({
                                            objectName: n,
                                            methodName: r,
                                            params: v,
                                            errSubject: w,
                                            errCode: x,
                                            errMsg: O
                                          });
                                        case 20:
                                          if (a.t1 = a.sent.errMsg, a.t1) {
                                            a.next = 23;
                                            break
                                          }
                                          a.t1 = O;
                                        case 23:
                                          S = a.t1;
                                        case 24:
                                          if (!m) {
                                            a.next = 37;
                                            break
                                          }
                                          if ("toast" !== s.type) {
                                            a.next = 29;
                                            break
                                          }
                                          o.showToast({
                                            title: S,
                                            icon: "none"
                                          }), a.next = 37;
                                          break;
                                        case 29:
                                          if ("modal" === s.type) {
                                            a.next = 31;
                                            break
                                          }
                                          throw new Error("Invalid errorOptions.type: ".concat(s.type));
                                        case 31:
                                          return a.next = 33, (0, l.default)(c.default.mark((function e() {
                                            var n, t, a, r, i, s, d = arguments;
                                            return c.default.wrap((function(e) {
                                              for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                  return n = d.length > 0 && void 0 !== d[0] ? d[0] : {}, t = n.title, a = n.content, r = n.showCancel, i = n.cancelText, s = n.confirmText, e.abrupt("return", new Promise((function(e, n) {
                                                    o.showModal({
                                                      title: t,
                                                      content: a,
                                                      showCancel: r,
                                                      cancelText: i,
                                                      confirmText: s,
                                                      success: function(n) {
                                                        e(n)
                                                      },
                                                      fail: function() {
                                                        e({
                                                          confirm: !1,
                                                          cancel: !0
                                                        })
                                                      }
                                                    })
                                                  })));
                                                case 2:
                                                case "end":
                                                  return e.stop()
                                              }
                                            }), e)
                                          })))({
                                            title: "提示",
                                            content: S,
                                            showCancel: s.retry,
                                            cancelText: "取消",
                                            confirmText: s.retry ? "重试" : "确定"
                                          });
                                        case 33:
                                          if (P = a.sent, T = P.confirm, !s.retry || !T) {
                                            a.next = 37;
                                            break
                                          }
                                          return a.abrupt("return", f.apply(void 0, v));
                                        case 37:
                                          throw (I = new ke({
                                            subject: w,
                                            code: x,
                                            message: O,
                                            requestId: p.requestId
                                          })).detail = p.result, ye(de, {
                                            type: pe,
                                            content: I
                                          }), I;
                                        case 39:
                                          return a.abrupt("return", (ye(de, {
                                            type: pe,
                                            content: p.result
                                          }), p.result));
                                        case 40:
                                        case "end":
                                          return a.stop()
                                      }
                                    }), a, null, [
                                      [5, 11]
                                    ])
                                  })));

                                  function f() {
                                    return a.apply(this, arguments)
                                  }
                                  return f
                                }(),
                                interceptorName: "callObject",
                                getCallbackArgs: function() {
                                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = e.params;
                                  return {
                                    objectName: n,
                                    methodName: r,
                                    params: t
                                  }
                                }
                              })
                            }
                          })
                        }
                      }(e)
                    }(n), ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((function(e) {
                      if (n[e]) {
                        var t = n[e];
                        n[e] = function() {
                          return t.apply(n, Array.from(arguments))
                        }, n[e] = function(e, n) {
                          return function(t) {
                            var o = this,
                              a = !1;
                            if ("callFunction" === n) {
                              var r = t && t.type || j;
                              a = r !== j
                            }
                            var c = "callFunction" === n && !a,
                              i = this._initPromiseHub.exec(),
                              s = xe(t = t || {}),
                              d = s.success,
                              u = s.fail,
                              l = s.complete,
                              m = i.then((function() {
                                return a ? Promise.resolve() : re(ce(n, "invoke"), t)
                              })).then((function() {
                                return e.call(o, t)
                              })).then((function(e) {
                                return a ? Promise.resolve(e) : re(ce(n, "success"), e).then((function() {
                                  return re(ce(n, "complete"), e)
                                })).then((function() {
                                  return c && ye(de, {
                                    type: fe,
                                    content: e
                                  }), Promise.resolve(e)
                                }))
                              }), (function(e) {
                                return a ? Promise.reject(e) : re(ce(n, "fail"), e).then((function() {
                                  return re(ce(n, "complete"), e)
                                })).then((function() {
                                  return ye(de, {
                                    type: fe,
                                    content: e
                                  }), Promise.reject(e)
                                }))
                              }));
                            if (!(d || u || l)) return m;
                            m.then((function(e) {
                              d && d(e), l && l(e), c && ye(de, {
                                type: fe,
                                content: e
                              })
                            }), (function(e) {
                              u && u(e), l && l(e), c && ye(de, {
                                type: fe,
                                content: e
                              })
                            }))
                          }
                        }(n[e], e).bind(n)
                      }
                    })), n.init = this.init, n
                }
              }]), e
            }());
          n.uniCloud = Do,
            function() {
              var e = X,
                t = {};
              if (e && 1 === e.length) t = e[0], n.uniCloud = Do = Do.init(t), Do._isDefault = !0;
              else {
                var a;
                a = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在uniCloud目录右键关联服务空间", ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"].forEach((function(e) {
                  Do[e] = function() {
                    return console.error(a), Promise.reject(new ke({
                      code: "SYS_ERR",
                      message: a
                    }))
                  }
                }))
              }
              if (Object.assign(Do, {
                  get mixinDatacom() {
                    return Ao(Do)
                  }
                }), _o(Do), Do.addInterceptor = oe, Do.removeInterceptor = ae, Do.interceptObject = ie, "web" === G && (window.uniCloud = Do), "app" === G && (o.__uniCloud = Do), "app" === G || "web" === G) {
                var r = Q || (Q = function() {
                  if ("undefined" != typeof globalThis) return globalThis;
                  if ("undefined" != typeof self) return self;
                  if ("undefined" != typeof window) return window;

                  function e() {
                    return this
                  }
                  return void 0 !== e() ? e() : new Function("return this")()
                }());
                r.uniCloud = Do, r.UniCloudError = ke
              }
            }();
          var No = Do;
          n.default = No
        }).call(this, t( /*! ./../../../../../webpack/buildin/global.js */ 3), t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1).default)
      },
    28:
      /*!************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
        \************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! @babel/runtime/helpers/regeneratorRuntime */ 29)();
        e.exports = o
      },
    29:
      /*!*******************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
        \*******************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./typeof.js */ 13).default;

        function a() {
          "use strict";
          /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
          e.exports = a = function() {
            return t
          }, e.exports.__esModule = !0, e.exports.default = e.exports;
          var n, t = {},
            r = Object.prototype,
            c = r.hasOwnProperty,
            i = Object.defineProperty || function(e, n, t) {
              e[n] = t.value
            },
            s = "function" == typeof Symbol ? Symbol : {},
            d = s.iterator || "@@iterator",
            u = s.asyncIterator || "@@asyncIterator",
            l = s.toStringTag || "@@toStringTag";

          function m(e, n, t) {
            return Object.defineProperty(e, n, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), e[n]
          }
          try {
            m({}, "")
          } catch (n) {
            m = function(e, n, t) {
              return e[n] = t
            }
          }

          function f(e, n, t, o) {
            var a = n && n.prototype instanceof _ ? n : _,
              r = Object.create(a.prototype),
              c = new j(o || []);
            return i(r, "_invoke", {
              value: T(e, t, c)
            }), r
          }

          function p(e, n, t) {
            try {
              return {
                type: "normal",
                arg: e.call(n, t)
              }
            } catch (e) {
              return {
                type: "throw",
                arg: e
              }
            }
          }
          t.wrap = f;
          var h = "suspendedStart",
            v = "executing",
            g = "completed",
            y = {};

          function _() {}

          function b() {}

          function w() {}
          var x = {};
          m(x, d, (function() {
            return this
          }));
          var k = Object.getPrototypeOf,
            O = k && k(k($([])));
          O && O !== r && c.call(O, d) && (x = O);
          var A = w.prototype = _.prototype = Object.create(x);

          function S(e) {
            ["next", "throw", "return"].forEach((function(n) {
              m(e, n, (function(e) {
                return this._invoke(n, e)
              }))
            }))
          }

          function P(e, n) {
            function t(a, r, i, s) {
              var d = p(e[a], e, r);
              if ("throw" !== d.type) {
                var u = d.arg,
                  l = u.value;
                return l && "object" == o(l) && c.call(l, "__await") ? n.resolve(l.__await).then((function(e) {
                  t("next", e, i, s)
                }), (function(e) {
                  t("throw", e, i, s)
                })) : n.resolve(l).then((function(e) {
                  u.value = e, i(u)
                }), (function(e) {
                  return t("throw", e, i, s)
                }))
              }
              s(d.arg)
            }
            var a;
            i(this, "_invoke", {
              value: function(e, o) {
                function r() {
                  return new n((function(n, a) {
                    t(e, o, n, a)
                  }))
                }
                return a = a ? a.then(r, r) : r()
              }
            })
          }

          function T(e, t, o) {
            var a = h;
            return function(r, c) {
              if (a === v) throw Error("Generator is already running");
              if (a === g) {
                if ("throw" === r) throw c;
                return {
                  value: n,
                  done: !0
                }
              }
              for (o.method = r, o.arg = c;;) {
                var i = o.delegate;
                if (i) {
                  var s = I(i, o);
                  if (s) {
                    if (s === y) continue;
                    return s
                  }
                }
                if ("next" === o.method) o.sent = o._sent = o.arg;
                else if ("throw" === o.method) {
                  if (a === h) throw a = g, o.arg;
                  o.dispatchException(o.arg)
                } else "return" === o.method && o.abrupt("return", o.arg);
                a = v;
                var d = p(e, t, o);
                if ("normal" === d.type) {
                  if (a = o.done ? g : "suspendedYield", d.arg === y) continue;
                  return {
                    value: d.arg,
                    done: o.done
                  }
                }
                "throw" === d.type && (a = g, o.method = "throw", o.arg = d.arg)
              }
            }
          }

          function I(e, t) {
            var o = t.method,
              a = e.iterator[o];
            if (a === n) return t.delegate = null, "throw" === o && e.iterator.return && (t.method = "return", t.arg = n, I(e, t), "throw" === t.method) || "return" !== o && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + o + "' method")), y;
            var r = p(a, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, y;
            var c = r.arg;
            return c ? c.done ? (t[e.resultName] = c.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, y) : c : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, y)
          }

          function E(e) {
            var n = {
              tryLoc: e[0]
            };
            1 in e && (n.catchLoc = e[1]), 2 in e && (n.finallyLoc = e[2], n.afterLoc = e[3]), this.tryEntries.push(n)
          }

          function C(e) {
            var n = e.completion || {};
            n.type = "normal", delete n.arg, e.completion = n
          }

          function j(e) {
            this.tryEntries = [{
              tryLoc: "root"
            }], e.forEach(E, this), this.reset(!0)
          }

          function $(e) {
            if (e || "" === e) {
              var t = e[d];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var a = -1,
                  r = function t() {
                    for (; ++a < e.length;)
                      if (c.call(e, a)) return t.value = e[a], t.done = !1, t;
                    return t.value = n, t.done = !0, t
                  };
                return r.next = r
              }
            }
            throw new TypeError(o(e) + " is not iterable")
          }
          return b.prototype = w, i(A, "constructor", {
            value: w,
            configurable: !0
          }), i(w, "constructor", {
            value: b,
            configurable: !0
          }), b.displayName = m(w, l, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var n = "function" == typeof e && e.constructor;
            return !!n && (n === b || "GeneratorFunction" === (n.displayName || n.name))
          }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, w) : (e.__proto__ = w, m(e, l, "GeneratorFunction")), e.prototype = Object.create(A), e
          }, t.awrap = function(e) {
            return {
              __await: e
            }
          }, S(P.prototype), m(P.prototype, u, (function() {
            return this
          })), t.AsyncIterator = P, t.async = function(e, n, o, a, r) {
            void 0 === r && (r = Promise);
            var c = new P(f(e, n, o, a), r);
            return t.isGeneratorFunction(n) ? c : c.next().then((function(e) {
              return e.done ? e.value : c.next()
            }))
          }, S(A), m(A, l, "Generator"), m(A, d, (function() {
            return this
          })), m(A, "toString", (function() {
            return "[object Generator]"
          })), t.keys = function(e) {
            var n = Object(e),
              t = [];
            for (var o in n) t.push(o);
            return t.reverse(),
              function e() {
                for (; t.length;) {
                  var o = t.pop();
                  if (o in n) return e.value = o, e.done = !1, e
                }
                return e.done = !0, e
              }
          }, t.values = $, j.prototype = {
            constructor: j,
            reset: function(e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(C), !e)
                for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;

              function o(o, a) {
                return i.type = "throw", i.arg = e, t.next = o, a && (t.method = "next", t.arg = n), !!a
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var r = this.tryEntries[a],
                  i = r.completion;
                if ("root" === r.tryLoc) return o("end");
                if (r.tryLoc <= this.prev) {
                  var s = c.call(r, "catchLoc"),
                    d = c.call(r, "finallyLoc");
                  if (s && d) {
                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                  } else if (s) {
                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0)
                  } else {
                    if (!d) throw Error("try statement without catch or finally");
                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                  }
                }
              }
            },
            abrupt: function(e, n) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var o = this.tryEntries[t];
                if (o.tryLoc <= this.prev && c.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var a = o;
                  break
                }
              }
              a && ("break" === e || "continue" === e) && a.tryLoc <= n && n <= a.finallyLoc && (a = null);
              var r = a ? a.completion : {};
              return r.type = e, r.arg = n, a ? (this.method = "next", this.next = a.finallyLoc, y) : this.complete(r)
            },
            complete: function(e, n) {
              if ("throw" === e.type) throw e.arg;
              return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && n && (this.next = n), y
            },
            finish: function(e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.finallyLoc === e) return this.complete(t.completion, t.afterLoc), C(t), y
              }
            },
            catch: function(e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var t = this.tryEntries[n];
                if (t.tryLoc === e) {
                  var o = t.completion;
                  if ("throw" === o.type) {
                    var a = o.arg;
                    C(t)
                  }
                  return a
                }
              }
              throw Error("illegal catch attempt")
            },
            delegateYield: function(e, t, o) {
              return this.delegate = {
                iterator: $(e),
                resultName: t,
                nextLoc: o
              }, "next" === this.method && (this.arg = n), y
            }
          }, t
        }
        e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    3:
      /*!***********************************!*\
        !*** (webpack)/buildin/global.js ***!
        \***********************************/
      /*! no static exports found */
      function(e, n) {
        var t;
        t = function() {
          return this
        }();
        try {
          t = t || new Function("return this")()
        } catch (e) {
          "object" == typeof window && (t = window)
        }
        e.exports = t
      },
    30:
      /*!**********************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
        \**********************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    31:
      /*!*****************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
        \*****************************************************************/
      /*! no static exports found */
      function(e, n) {
        function t(e, n, t, o, a, r, c) {
          try {
            var i = e[r](c),
              s = i.value
          } catch (e) {
            return void t(e)
          }
          i.done ? n(s) : Promise.resolve(s).then(o, a)
        }
        e.exports = function(e) {
          return function() {
            var n = this,
              o = arguments;
            return new Promise((function(a, r) {
              var c = e.apply(n, o);

              function i(e) {
                t(c, a, r, i, s, "next", e)
              }

              function s(e) {
                t(c, a, r, i, s, "throw", e)
              }
              i(void 0)
            }))
          }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    32:
      /*!*********************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
        \*********************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./setPrototypeOf.js */ 16);
        e.exports = function(e, n) {
          if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), n && o(e, n)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    33:
      /*!**************************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
        \**************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./typeof.js */ 13).default,
          a = t( /*! ./assertThisInitialized.js */ 30);
        e.exports = function(e, n) {
          if (n && ("object" === o(n) || "function" == typeof n)) return n;
          if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
          return a(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    34:
      /*!***************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
        \***************************************************************/
      /*! no static exports found */
      function(e, n) {
        function t(n) {
          return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n)
        }
        e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    35:
      /*!****************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
        \****************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./getPrototypeOf.js */ 34),
          a = t( /*! ./setPrototypeOf.js */ 16),
          r = t( /*! ./isNativeFunction.js */ 36),
          c = t( /*! ./construct.js */ 15);

        function i(n) {
          var t = "function" == typeof Map ? new Map : void 0;
          return e.exports = i = function(e) {
            if (null === e || !r(e)) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n)
            }

            function n() {
              return c(e, arguments, o(this).constructor)
            }
            return n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), a(n, e)
          }, e.exports.__esModule = !0, e.exports.default = e.exports, i(n)
        }
        e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    36:
      /*!*****************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
        \*****************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e) {
          try {
            return -1 !== Function.toString.call(e).indexOf("[native code]")
          } catch (n) {
            return "function" == typeof e
          }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    37:
      /*!**************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages.json?{"type":"origin-pages-json"} ***!
        \**************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        n.default = {
          pages: [{
            path: "pages/index/index",
            style: {
              navigationStyle: "custom"
            }
          }, {
            path: "pages/login/login",
            style: {
              navigationBarTitleText: "大学生求职神器"
            }
          }, {
            path: "pages/initialize/initialize",
            style: {
              navigationBarTitleText: "个人信息"
            }
          }, {
            path: "pages/vipCenter/vipCenter",
            style: {
              navigationBarTitleText: "会员专区"
            }
          }, {
            path: "pages/notice/index",
            style: {
              navigationBarTitleText: "消息"
            }
          }, {
            path: "pages/lectureroom/lectureroom",
            style: {
              navigationBarTitleText: "名师大讲堂",
              enablePullDownRefresh: !0
            }
          }, {
            path: "pages/wxindex/index",
            style: {
              navigationBarTitleText: "大学生求职神器"
            }
          }, {
            path: "pages/url/index",
            style: {
              navigationBarTitleText: "企职帮"
            }
          }, {
            path: "pages/contact/contact",
            style: {
              navigationBarTitleText: "客服中心"
            }
          }, {
            path: "pages/user/index",
            style: {
              navigationBarTitleText: "个人中心"
            }
          }, {
            path: "pages/ag/qrcode",
            style: {
              navigationBarTitleText: "分享海报"
            }
          }, {
            path: "pages/ag/index",
            style: {
              navigationBarTitleText: "分享领券"
            }
          }, {
            path: "pages/privacy/index",
            style: {
              navigationBarTitleText: "用户协议与隐私政策"
            }
          }, {
            path: "pages/privacy/recommend",
            style: {
              navigationBarTitleText: "会员推荐计划用户协议"
            }
          }, {
            path: "pages/card/receive",
            style: {
              navigationStyle: "custom"
            }
          }],
          subPackages: [{
            root: "pagesA",
            pages: [{
              path: "pages/order/index",
              style: {
                navigationBarTitleText: "我的订单"
              }
            }, {
              path: "pages/user/career/index",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/user/career/basic",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/user/career/advantage",
              style: {
                navigationBarTitleText: "个人优势"
              }
            }, {
              path: "pages/user/career/edu",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/user/career/work",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/user/perfect",
              style: {
                navigationBarTitleText: "个人信息"
              }
            }, {
              path: "pages/user/change_passwd",
              style: {
                navigationBarTitleText: "修改密码"
              }
            }, {
              path: "pages/qr/index",
              style: {
                navigationBarTitleText: "分享中心"
              }
            }, {
              path: "pages/user/collect",
              style: {
                navigationBarTitleText: "收藏中心"
              }
            }, {
              path: "pages/user/bank",
              style: {
                navigationBarTitleText: "银行卡管理"
              }
            }, {
              path: "pages/user/bill",
              style: {
                navigationBarTitleText: "账单明细"
              }
            }, {
              path: "pages/user/recommend",
              style: {
                navigationBarTitleText: "会员推荐计划"
              }
            }, {
              path: "pages/book/index",
              style: {
                navigationBarTitleText: "央国企宝典",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/book/detail",
              style: {
                navigationBarTitleText: "公司详情"
              }
            }, {
              path: "pages/book/sonDetail",
              style: {
                navigationBarTitleText: "公司详情",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/course/analyze",
              style: {
                navigationBarTitleText: "就业分析"
              }
            }, {
              path: "pages/course/curriculum_detail",
              style: {
                navigationBarTitleText: "课程详情",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/course/curriculum_video",
              style: {
                navigationBarTitleText: "课程播放",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/course/curriculum_search",
              style: {
                navigationBarTitleText: "搜索",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/course/question_detail",
              style: {
                navigationBarTitleText: "题库详情",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/course/resume_detail",
              style: {
                navigationBarTitleText: "简历详情",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/course/explain",
              style: {
                navigationBarTitleText: "专业解读"
              }
            }, {
              path: "pages/course/explain_detail",
              style: {
                navigationBarTitleText: "专业分析"
              }
            }, {
              path: "pages/lectureroom/detail",
              style: {
                navigationBarTitleText: "直播详情"
              }
            }, {
              path: "pages/referral/index",
              style: {
                navigationBarTitleText: "大学生求职神器",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/referral/detail",
              style: {
                navigationBarTitleText: "企业详情",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/school/index",
              style: {
                navigationBarTitleText: "高校解析"
              }
            }, {
              path: "pages/school/schoolDetail",
              style: {
                navigationBarTitleText: "学校"
              }
            }, {
              path: "pages/school/majorDetail",
              style: {
                navigationBarTitleText: "专业详情"
              }
            }, {
              path: "pages/teacher/index",
              style: {
                navigationBarTitleText: "名师指导",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/teacher/detail",
              style: {
                navigationBarTitleText: "名师详情",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/profit/index",
              style: {
                navigationBarTitleText: "收益详情"
              }
            }, {
              path: "pages/profit/withdraw",
              style: {
                navigationBarTitleText: "申请提现"
              }
            }, {
              path: "pages/profit/guide",
              style: {
                navigationBarTitleText: "推广奖励指南"
              }
            }, {
              path: "pages/card/index",
              style: {
                navigationBarTitleText: "兑换中心"
              }
            }, {
              path: "pages/card/exchange",
              style: {
                navigationBarTitleText: "兑换中心"
              }
            }, {
              path: "pages/match/index",
              style: {
                navigationBarTitleText: "大学生求职神器",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/match/seach_now",
              style: {
                navigationBarTitleText: "大学生求职神器"
              }
            }, {
              path: "pages/match/seach_before",
              style: {
                navigationBarTitleText: "大学生求职神器"
              }
            }, {
              path: "pages/station/index",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/station/major",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/station/search",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/station/company",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/station/improve",
              style: {}
            }, {
              path: "pages/station/area",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/station/school",
              style: {
                navigationStyle: "custom"
              }
            }, {
              path: "pages/pay/pay",
              style: {
                navigationBarTitleText: "结算中心"
              }
            }, {
              path: "pages/pay/userpay",
              style: {
                navigationBarTitleText: "央国企求职学习卡"
              }
            }, {
              path: "pages/pay/index",
              style: {
                navigationBarTitleText: "央国企求职学习卡"
              }
            }, {
              path: "pages/search/index",
              style: {
                navigationBarTitleText: "搜索"
              }
            }, {
              path: "pages/search/all",
              style: {
                navigationBarTitleText: "搜索"
              }
            }, {
              path: "pages/tip/tip",
              style: {
                navigationBarTitleText: "求职技巧",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/tip/index",
              style: {
                navigationBarTitleText: "求职技巧",
                enablePullDownRefresh: !0
              }
            }, {
              path: "pages/tip/tipDetail",
              style: {
                navigationBarTitleText: "技巧详情"
              }
            }, {
              path: "pages/tip/list",
              style: {
                navigationBarTitleText: "求职技巧"
              }
            }, {
              path: "pages/notice/notice",
              style: {
                navigationBarTitleText: "推送岗位"
              }
            }]
          }, {
            root: "uni_modules/uni-pay/pages",
            pages: [{
              path: "success/success",
              style: {
                navigationBarTitleText: ""
              }
            }, {
              path: "ad-interactive-webview/ad-interactive-webview",
              style: {
                navigationBarTitleText: "ad"
              }
            }]
          }],
          globalStyle: {
            navigationBarTextStyle: "black",
            navigationBarTitleText: "大学生求职神器",
            navigationBarBackgroundColor: "#ffffff",
            backgroundColor: "#F8F8F8"
          },
          tabBar: {
            color: "#000000",
            selectedColor: "#000000",
            backgroundColor: "#ffffff",
            list: [{
              iconPath: "static/image/home.png",
              selectedIconPath: "static/image/home_action.png",
              pagePath: "pages/index/index",
              text: "首页"
            }, {
              iconPath: "static/image/msdjt.png",
              selectedIconPath: "static/image/msdjt_action.png",
              pagePath: "pages/lectureroom/lectureroom",
              text: "名师大讲堂"
            }, {
              iconPath: "static/image/vip.png",
              selectedIconPath: "static/image/vip_action.png",
              pagePath: "pages/vipCenter/vipCenter",
              text: "会员专区"
            }, {
              iconPath: "static/image/tab_notice.png",
              selectedIconPath: "static/image/tab_notice_active.png",
              pagePath: "pages/notice/index",
              text: "消息"
            }, {
              iconPath: "static/image/user.png",
              selectedIconPath: "static/image/user_action.png",
              pagePath: "pages/user/index",
              text: "我的"
            }]
          },
          preloadRule: {
            "pages/index/index": {
              network: "all",
              packages: ["pagesA"]
            }
          },
          condition: {
            current: 0,
            list: [{
              name: "",
              path: "",
              query: ""
            }]
          },
          navigateToMiniProgramAppIdList: ["wx5b5f6ca78f2de410"]
        }
      },
    38:
      /*!*************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages.json?{"type":"stat"} ***!
        \*************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        n.default = {
          appid: "__UNI__C8B40C3"
        }
      },
    4:
      /*!**********************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
        \**********************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    42:
      /*!***********************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/util/http.js ***!
        \***********************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e) {
          var o = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var a = o(t( /*! @babel/runtime/helpers/defineProperty */ 11)),
            r = o(t( /*! @/util/md5.js */ 43));

          function c(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
              }))), t.push.apply(t, o)
            }
            return t
          }

          function i(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2 ? c(Object(t), !0).forEach((function(n) {
                (0, a.default)(e, n, t[n])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }))
            }
            return e
          }
          var s = "https://qzb.cntjhr.com/newapi/api",
            d = !0,
            u = function(n) {
              return !n || -1 != n.code && 401 != n.code && 2e5 != n.code || (e.clearStorageSync(), e.showToast({
                title: "未登录",
                icon: "none"
              }), e.navigateTo({
                url: "/pages/login/login"
              })), n
            },
            l = {
              request: function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET",
                  a = this,
                  c = e.getStorageSync("token"),
                  i = a.ksort(t);
                n = s + n;
                var d = c ? "Bearer " + c : "",
                  u = Date.now(),
                  l = u.toString().slice(0, 8),
                  m = r.default.hex_md5_32(i + "d5aaacbkgy988cpdtq5m97720j1t5u8m" + l),
                  f = {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                    Authorization: d,
                    timestamp: Math.floor(u / 1e3),
                    appkey: "ZBE36LCpWHtL",
                    sign: m
                  };
                return new Promise((function(r, c) {
                  e.request({
                    url: n,
                    data: t,
                    header: f,
                    method: o,
                    success: function(n) {
                      var t = n.data,
                        o = t.code,
                        i = t.msg;
                      switch (o) {
                        case 1e4:
                          r(n.data);
                          break;
                        case 10003:
                          e.clearStorageSync(), setTimeout((function(e) {
                            a.goPage("/pages/login/login?type=0&url=/pages/index/index")
                          }), 700);
                          break;
                        case 10004:
                          a.showToast(i), e.clearStorageSync(), setTimeout((function(e) {
                            a.goPage("/pages/login/login?type=0&url=/pages/index/index")
                          }), 700);
                          break;
                        default:
                          a.showToast(i), c(n.data)
                      }
                    }
                  })
                }))
              },
              goPage: function(n, t) {
                if (d) {
                  switch (t) {
                    case "to":
                      e.redirectTo({
                        url: n
                      });
                      break;
                    case "tab":
                      e.switchTab({
                        url: n
                      });
                      break;
                    case "close":
                      e.reLaunch({
                        url: n
                      });
                    case "back":
                      e.navigateBack({
                        delta: n
                      });
                      break;
                    default:
                      e.navigateTo({
                        url: n
                      })
                  }
                  d = !1;
                  var o = setTimeout((function(e) {
                    d = !0, clearTimeout(o)
                  }), 600)
                }
              },
              showToast: function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "none",
                  o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3;
                e.showToast({
                  title: n,
                  icon: t,
                  duration: o
                })
              },
              ksort: function(e) {
                var n = Object.keys(e).sort(),
                  t = {};
                n.forEach((function(n) {
                  t[n] = e[n]
                }));
                var o = "",
                  a = 0;
                for (var r in t) t.hasOwnProperty(r) && (o += 0 == a ? r + "=" + t[r] : "&" + r + "=" + t[r], a++);
                return o
              },
              post: function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  o = e.getDeviceInfo(),
                  a = o.deviceId,
                  c = n.split("?");
                if (c.length > 1) {
                  var d = c[1],
                    u = d.split("&");
                  u.forEach((function(e) {
                    var n = e.split("=");
                    t[n[0]] = n[1]
                  }))
                }
                console.log(f);
                var l = Date.now(),
                  m = l.toString().slice(0, 8),
                  f = this.ksort(t);
                console.log(f), console.log(n), console.log(f + "d5aaacbkgy988cpdtq5m97720j1t5u8m" + m);
                var p = r.default.hex_md5_32(f + "d5aaacbkgy988cpdtq5m97720j1t5u8m" + m);
                return console.log(p), new Promise((function(o, r) {
                  e.request({
                    url: s + n,
                    data: i({}, t),
                    method: "POST",
                    header: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                      Authorization: e.getStorageSync("token") ? "Bearer " + e.getStorageSync("token") : "",
                      timestamp: Math.floor(l / 1e3),
                      appkey: "ZBE36LCpWHtL",
                      DeviceId: a,
                      sign: p
                    },
                    success: function(n) {
                      10003 != n.data.code && 10004 != n.data.code || (e.showToast({
                        icon: "none",
                        title: n.data.msg,
                        duration: 2e3
                      }), setTimeout((function() {
                        e.clearStorageSync(), e.redirectTo({
                          url: "/pages/login/login?type=0&url=/pages/index/index"
                        })
                      }), 500)), o(n.data)
                    },
                    fail: function(e) {
                      r(e)
                    }
                  })
                }))
              },
              get: function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  o = 0,
                  a = e.getDeviceInfo(),
                  c = a.deviceId;
                t.hasOwnProperty("ischeckLogin") && (o = t.ischeckLogin);
                var d = n.split("?");
                if (d.length > 1) {
                  var u = d[1],
                    l = u.split("&");
                  l.forEach((function(e) {
                    var n = e.split("=");
                    t[n[0]] = n[1]
                  }))
                }
                var m = Date.now(),
                  f = m.toString().slice(0, 8),
                  p = this.ksort(t),
                  h = r.default.hex_md5_32(p + "d5aaacbkgy988cpdtq5m97720j1t5u8m" + f);
                return new Promise((function(a, r) {
                  e.request({
                    url: s + n,
                    data: i({}, t),
                    method: "GET",
                    dataType: "json",
                    header: {
                      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
                      Authorization: e.getStorageSync("token") ? "Bearer " + e.getStorageSync("token") : "",
                      timestamp: Math.floor(m / 1e3),
                      appkey: "ZBE36LCpWHtL",
                      DeviceId: c,
                      sign: h
                    },
                    success: function(n) {
                      10003 != n.data.code && 10004 != n.data.code || 1 == o && (e.showToast({
                        icon: "none",
                        title: n.data.msg,
                        duration: 2e3
                      }), setTimeout((function() {
                        e.clearStorageSync(), e.redirectTo({
                          url: "/pages/login/login?type=0&url=/pages/index/index"
                        })
                      }), 500)), a(n.data)
                    },
                    fail: function(e) {
                      r(e)
                    }
                  })
                }))
              },
              uploadImg: function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return e.uploadFile({
                  url: s + n,
                  filePath: t,
                  name: "file",
                  header: {
                    Authorization: e.getStorageSync("token") ? "Bearer " + e.getStorageSync("token") : ""
                  }
                }).then((function(e) {
                  return u(e.data)
                }))
              },
              ossUpload: function(n, t) {
                var o = n.url,
                  a = n.url.lastIndexOf("."),
                  r = ""; - 1 !== a && (r = n.url.substring(a));
                var c = (new Date).getTime() + r,
                  i = t.dir + c;
                return e.uploadFile({
                  url: t.host,
                  filePath: o,
                  name: "file",
                  formData: {
                    key: i,
                    accessid: t.accessid,
                    policy: t.policy,
                    OSSAccessKeyId: t.accessid,
                    success_action_status: "200",
                    signature: t.signature
                  }
                }).then((function(e) {
                  return res.data = {
                    url: t.host + "/" + t.dir + c
                  }, u(e.data)
                })).catch((function(e) {
                  console.log("错误：", e)
                }))
              },
              baseUrl: s
            };
          n.default = l
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    43:
      /*!**********************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/util/md5.js ***!
        \**********************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = {};

        function a(e, n) {
          function t(e, n) {
            return e << n | e >>> 32 - n
          }

          function o(e, n) {
            var t, o, a, r, c;
            return a = 2147483648 & e, r = 2147483648 & n, c = (1073741823 & e) + (1073741823 & n), (t = 1073741824 & e) & (o = 1073741824 & n) ? 2147483648 ^ c ^ a ^ r : t | o ? 1073741824 & c ? 3221225472 ^ c ^ a ^ r : 1073741824 ^ c ^ a ^ r : c ^ a ^ r
          }

          function a(e, n, a, r, c, i, s) {
            return e = o(e, o(o(function(e, n, t) {
              return e & n | ~e & t
            }(n, a, r), c), s)), o(t(e, i), n)
          }

          function r(e, n, a, r, c, i, s) {
            return e = o(e, o(o(function(e, n, t) {
              return e & t | n & ~t
            }(n, a, r), c), s)), o(t(e, i), n)
          }

          function c(e, n, a, r, c, i, s) {
            return e = o(e, o(o(function(e, n, t) {
              return e ^ n ^ t
            }(n, a, r), c), s)), o(t(e, i), n)
          }

          function i(e, n, a, r, c, i, s) {
            return e = o(e, o(o(function(e, n, t) {
              return n ^ (e | ~t)
            }(n, a, r), c), s)), o(t(e, i), n)
          }

          function s(e) {
            var n, t = "",
              o = "";
            for (n = 0; n <= 3; n++) t += (o = "0" + (e >>> 8 * n & 255).toString(16)).substr(o.length - 2, 2);
            return t
          }
          var d, u, l, m, f, p, h, v, g, y = Array();
          for (y = function(e) {
              for (var n, t = e.length, o = t + 8, a = 16 * ((o - o % 64) / 64 + 1), r = Array(a - 1), c = 0, i = 0; i < t;) c = i % 4 * 8, r[n = (i - i % 4) / 4] = r[n] | e.charCodeAt(i) << c, i++;
              return c = i % 4 * 8, r[n = (i - i % 4) / 4] = r[n] | 128 << c, r[a - 2] = t << 3, r[a - 1] = t >>> 29, r
            }(e = function(e) {
              e = e.replace(/\r\n/g, "\n");
              for (var n = "", t = 0; t < e.length; t++) {
                var o = e.charCodeAt(t);
                o < 128 ? n += String.fromCharCode(o) : o > 127 && o < 2048 ? (n += String.fromCharCode(o >> 6 | 192), n += String.fromCharCode(63 & o | 128)) : (n += String.fromCharCode(o >> 12 | 224), n += String.fromCharCode(o >> 6 & 63 | 128), n += String.fromCharCode(63 & o | 128))
              }
              return n
            }(e)), p = 1732584193, h = 4023233417, v = 2562383102, g = 271733878, d = 0; d < y.length; d += 16) u = p, l = h, m = v, f = g, p = a(p, h, v, g, y[d + 0], 7, 3614090360), g = a(g, p, h, v, y[d + 1], 12, 3905402710), v = a(v, g, p, h, y[d + 2], 17, 606105819), h = a(h, v, g, p, y[d + 3], 22, 3250441966), p = a(p, h, v, g, y[d + 4], 7, 4118548399), g = a(g, p, h, v, y[d + 5], 12, 1200080426), v = a(v, g, p, h, y[d + 6], 17, 2821735955), h = a(h, v, g, p, y[d + 7], 22, 4249261313), p = a(p, h, v, g, y[d + 8], 7, 1770035416), g = a(g, p, h, v, y[d + 9], 12, 2336552879), v = a(v, g, p, h, y[d + 10], 17, 4294925233), h = a(h, v, g, p, y[d + 11], 22, 2304563134), p = a(p, h, v, g, y[d + 12], 7, 1804603682), g = a(g, p, h, v, y[d + 13], 12, 4254626195), v = a(v, g, p, h, y[d + 14], 17, 2792965006), p = r(p, h = a(h, v, g, p, y[d + 15], 22, 1236535329), v, g, y[d + 1], 5, 4129170786), g = r(g, p, h, v, y[d + 6], 9, 3225465664), v = r(v, g, p, h, y[d + 11], 14, 643717713), h = r(h, v, g, p, y[d + 0], 20, 3921069994), p = r(p, h, v, g, y[d + 5], 5, 3593408605), g = r(g, p, h, v, y[d + 10], 9, 38016083), v = r(v, g, p, h, y[d + 15], 14, 3634488961), h = r(h, v, g, p, y[d + 4], 20, 3889429448), p = r(p, h, v, g, y[d + 9], 5, 568446438), g = r(g, p, h, v, y[d + 14], 9, 3275163606), v = r(v, g, p, h, y[d + 3], 14, 4107603335), h = r(h, v, g, p, y[d + 8], 20, 1163531501), p = r(p, h, v, g, y[d + 13], 5, 2850285829), g = r(g, p, h, v, y[d + 2], 9, 4243563512), v = r(v, g, p, h, y[d + 7], 14, 1735328473), p = c(p, h = r(h, v, g, p, y[d + 12], 20, 2368359562), v, g, y[d + 5], 4, 4294588738), g = c(g, p, h, v, y[d + 8], 11, 2272392833), v = c(v, g, p, h, y[d + 11], 16, 1839030562), h = c(h, v, g, p, y[d + 14], 23, 4259657740), p = c(p, h, v, g, y[d + 1], 4, 2763975236), g = c(g, p, h, v, y[d + 4], 11, 1272893353), v = c(v, g, p, h, y[d + 7], 16, 4139469664), h = c(h, v, g, p, y[d + 10], 23, 3200236656), p = c(p, h, v, g, y[d + 13], 4, 681279174), g = c(g, p, h, v, y[d + 0], 11, 3936430074), v = c(v, g, p, h, y[d + 3], 16, 3572445317), h = c(h, v, g, p, y[d + 6], 23, 76029189), p = c(p, h, v, g, y[d + 9], 4, 3654602809), g = c(g, p, h, v, y[d + 12], 11, 3873151461), v = c(v, g, p, h, y[d + 15], 16, 530742520), p = i(p, h = c(h, v, g, p, y[d + 2], 23, 3299628645), v, g, y[d + 0], 6, 4096336452), g = i(g, p, h, v, y[d + 7], 10, 1126891415), v = i(v, g, p, h, y[d + 14], 15, 2878612391), h = i(h, v, g, p, y[d + 5], 21, 4237533241), p = i(p, h, v, g, y[d + 12], 6, 1700485571), g = i(g, p, h, v, y[d + 3], 10, 2399980690), v = i(v, g, p, h, y[d + 10], 15, 4293915773), h = i(h, v, g, p, y[d + 1], 21, 2240044497), p = i(p, h, v, g, y[d + 8], 6, 1873313359), g = i(g, p, h, v, y[d + 15], 10, 4264355552), v = i(v, g, p, h, y[d + 6], 15, 2734768916), h = i(h, v, g, p, y[d + 13], 21, 1309151649), p = i(p, h, v, g, y[d + 4], 6, 4149444226), g = i(g, p, h, v, y[d + 11], 10, 3174756917), v = i(v, g, p, h, y[d + 2], 15, 718787259), h = i(h, v, g, p, y[d + 9], 21, 3951481745), p = o(p, u), h = o(h, l), v = o(v, m), g = o(g, f);
          return 32 == n ? (s(p) + s(h) + s(v) + s(g)).toLowerCase() : (s(h) + s(v)).toLowerCase()
        }
        o.hex_md5_16 = function(e) {
          return a(e, 16)
        }, o.hex_md5_16Upper = function(e) {
          return a(e, 16).toUpperCase()
        }, o.hex_md5_32 = function(e) {
          return a(e, 32)
        }, o.hex_md5_32Upper = function(e) {
          return a(e, 32).toUpperCase()
        };
        var r = o;
        n.default = r
      },
    44:
      /*!*************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/store/index.js ***!
        \*************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        var o = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = o(t( /*! ./userStore.js */ 45)),
          r = o(t( /*! ./getters */ 46)),
          c = o(t( /*! vue */ 25)),
          i = o(t( /*! vuex */ 47));
        c.default.use(i.default);
        var s = new i.default.Store({
          modules: {
            userStore: a.default
          },
          state: {},
          getters: r.default,
          mutations: {},
          actions: {},
          strict: !0
        });
        n.default = s
      },
    45:
      /*!*****************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/store/userStore.js ***!
        \*****************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        var o = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = o(t( /*! ../util/http */ 42)),
          r = {
            state: {
              userInfo: {
                user_id: "",
                token: "",
                agid: "",
                qr_code: "",
                qr_show: "",
                live_show: ""
              },
              safeAreaInsets: null,
              userInfo2: {
                isActive: 0,
                viptp: 0
              }
            },
            mutations: {
              setUser_id: function(e, n) {
                e.userInfo.user_id = n
              },
              setToken: function(e, n) {
                e.userInfo.token = n
              },
              setAgid: function(e, n) {
                e.userInfo.agid = n
              },
              setQr_code: function(e, n) {
                e.userInfo.qr_code = n
              },
              setQr_show: function(e, n) {
                e.userInfo.qr_show = n
              },
              setLive_show: function(e, n) {
                e.userInfo.live_show = n
              },
              setUserInfo: function(e, n) {
                e.userInfo = n
              },
              setUserInfo2: function(e, n) {
                e.userInfo2 = n
              },
              setSafeAreaInsets: function(e, n) {
                e.safeAreaInsets = n
              }
            },
            actions: {
              login: function(e, n) {
                return a.default.request("/user/login/login", {
                  username: n.username,
                  password: n.password,
                  login_type: n.login_type,
                  agid: n.agid,
                  device_id: n.device_id,
                  qr_code: n.qr_code
                }, "POST").catch((function(e) {
                  console.log("失败")
                }))
              },
              caikaLogin: function(e, n) {
                return a.default.request("/main/caika/caika-user-login", {
                  ckUserId: n.ckUserId
                }, "POST").catch((function(e) {
                  console.log("参数错误")
                }))
              }
            }
          };
        n.default = r
      },
    46:
      /*!***************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/store/getters.js ***!
        \***************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = {
          user_id: function(e) {
            return e.userStore.userInfo.user_id
          },
          token: function(e) {
            return e.userStore.userInfo.token
          },
          agid: function(e) {
            return e.userStore.userInfo.agid
          },
          qr_code: function(e) {
            return e.userStore.userInfo.qr_code
          },
          isVip: function(e) {
            return e.userStore.userInfo2.isActive
          },
          viptp: function(e) {
            return e.userStore.userInfo2.viptp
          },
          qr_show: function(e) {
            return e.userStore.userInfo.qr_show
          },
          live_show: function(e) {
            return e.userStore.userInfo.live_show
          },
          info: function(e) {
            return e.userStore.userInfo2
          },
          safeAreaInsets: function(e) {
            var n;
            return null === (n = e.userStore.safeAreaInsets) || void 0 === n ? void 0 : n.bottom
          }
        };
        n.default = o
      },
    47:
      /*!**************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
        \**************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(n) {
          var t = ("undefined" != typeof window ? window : void 0 !== n ? n : {}).__VUE_DEVTOOLS_GLOBAL_HOOK__;

          function o(e, n) {
            if (void 0 === n && (n = []), null === e || "object" != typeof e) return e;
            var t, a = (t = function(n) {
              return n.original === e
            }, n.filter(t)[0]);
            if (a) return a.copy;
            var r = Array.isArray(e) ? [] : {};
            return n.push({
              original: e,
              copy: r
            }), Object.keys(e).forEach((function(t) {
              r[t] = o(e[t], n)
            })), r
          }

          function a(e, n) {
            Object.keys(e).forEach((function(t) {
              return n(e[t], t)
            }))
          }

          function r(e) {
            return null !== e && "object" == typeof e
          }

          function c(e, n) {
            if (!e) throw new Error("[vuex] " + n)
          }
          var i = function(e, n) {
              this.runtime = n, this._children = Object.create(null), this._rawModule = e;
              var t = e.state;
              this.state = ("function" == typeof t ? t() : t) || {}
            },
            s = {
              namespaced: {
                configurable: !0
              }
            };
          s.namespaced.get = function() {
            return !!this._rawModule.namespaced
          }, i.prototype.addChild = function(e, n) {
            this._children[e] = n
          }, i.prototype.removeChild = function(e) {
            delete this._children[e]
          }, i.prototype.getChild = function(e) {
            return this._children[e]
          }, i.prototype.hasChild = function(e) {
            return e in this._children
          }, i.prototype.update = function(e) {
            this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters)
          }, i.prototype.forEachChild = function(e) {
            a(this._children, e)
          }, i.prototype.forEachGetter = function(e) {
            this._rawModule.getters && a(this._rawModule.getters, e)
          }, i.prototype.forEachAction = function(e) {
            this._rawModule.actions && a(this._rawModule.actions, e)
          }, i.prototype.forEachMutation = function(e) {
            this._rawModule.mutations && a(this._rawModule.mutations, e)
          }, Object.defineProperties(i.prototype, s);
          var d = function(e) {
            this.register([], e, !1)
          };
          d.prototype.get = function(e) {
            return e.reduce((function(e, n) {
              return e.getChild(n)
            }), this.root)
          }, d.prototype.getNamespace = function(e) {
            var n = this.root;
            return e.reduce((function(e, t) {
              return e + ((n = n.getChild(t)).namespaced ? t + "/" : "")
            }), "")
          }, d.prototype.update = function(e) {
            ! function e(n, t, o) {
              f(n, o);
              if (t.update(o), o.modules)
                for (var a in o.modules) {
                  if (!t.getChild(a)) return void console.warn("[vuex] trying to add a new module '" + a + "' on hot reloading, manual reload is needed");
                  e(n.concat(a), t.getChild(a), o.modules[a])
                }
            }([], this.root, e)
          }, d.prototype.register = function(e, n, t) {
            var o = this;
            void 0 === t && (t = !0), f(e, n);
            var r = new i(n, t);
            0 === e.length ? this.root = r : this.get(e.slice(0, -1)).addChild(e[e.length - 1], r);
            n.modules && a(n.modules, (function(n, a) {
              o.register(e.concat(a), n, t)
            }))
          }, d.prototype.unregister = function(e) {
            var n = this.get(e.slice(0, -1)),
              t = e[e.length - 1],
              o = n.getChild(t);
            o ? o.runtime && n.removeChild(t) : console.warn("[vuex] trying to unregister module '" + t + "', which is not registered")
          }, d.prototype.isRegistered = function(e) {
            var n = this.get(e.slice(0, -1)),
              t = e[e.length - 1];
            return !!n && n.hasChild(t)
          };
          var u, l = {
              assert: function(e) {
                return "function" == typeof e
              },
              expected: "function"
            },
            m = {
              getters: l,
              mutations: l,
              actions: {
                assert: function(e) {
                  return "function" == typeof e || "object" == typeof e && "function" == typeof e.handler
                },
                expected: 'function or object with "handler" function'
              }
            };

          function f(e, n) {
            Object.keys(m).forEach((function(t) {
              if (n[t]) {
                var o = m[t];
                a(n[t], (function(n, a) {
                  c(o.assert(n), function(e, n, t, o, a) {
                    var r = n + " should be " + a + ' but "' + n + "." + t + '"';
                    e.length > 0 && (r += ' in module "' + e.join(".") + '"');
                    return r += " is " + JSON.stringify(o) + "."
                  }(e, t, a, n, o.expected))
                }))
              }
            }))
          }
          var p = function e(n) {
              var o = this;
              void 0 === n && (n = {}), !u && "undefined" != typeof window && window.Vue && x(window.Vue), c(u, "must call Vue.use(Vuex) before creating a store instance."), c("undefined" != typeof Promise, "vuex requires a Promise polyfill in this browser."), c(this instanceof e, "store must be called with the new operator.");
              var a = n.plugins;
              void 0 === a && (a = []);
              var r = n.strict;
              void 0 === r && (r = !1), this._committing = !1, this._actions = Object.create(null), this._actionSubscribers = [], this._mutations = Object.create(null), this._wrappedGetters = Object.create(null), this._modules = new d(n), this._modulesNamespaceMap = Object.create(null), this._subscribers = [], this._watcherVM = new u, this._makeLocalGettersCache = Object.create(null);
              var i = this,
                s = this.dispatch,
                l = this.commit;
              this.dispatch = function(e, n) {
                return s.call(i, e, n)
              }, this.commit = function(e, n, t) {
                return l.call(i, e, n, t)
              }, this.strict = r;
              var m = this._modules.root.state;
              _(this, m, [], this._modules.root), y(this, m), a.forEach((function(e) {
                return e(o)
              })), (void 0 !== n.devtools ? n.devtools : u.config.devtools) && function(e) {
                t && (e._devtoolHook = t, t.emit("vuex:init", e), t.on("vuex:travel-to-state", (function(n) {
                  e.replaceState(n)
                })), e.subscribe((function(e, n) {
                  t.emit("vuex:mutation", e, n)
                }), {
                  prepend: !0
                }), e.subscribeAction((function(e, n) {
                  t.emit("vuex:action", e, n)
                }), {
                  prepend: !0
                }))
              }(this)
            },
            h = {
              state: {
                configurable: !0
              }
            };

          function v(e, n, t) {
            return n.indexOf(e) < 0 && (t && t.prepend ? n.unshift(e) : n.push(e)),
              function() {
                var t = n.indexOf(e);
                t > -1 && n.splice(t, 1)
              }
          }

          function g(e, n) {
            e._actions = Object.create(null), e._mutations = Object.create(null), e._wrappedGetters = Object.create(null), e._modulesNamespaceMap = Object.create(null);
            var t = e.state;
            _(e, t, [], e._modules.root, !0), y(e, t, n)
          }

          function y(e, n, t) {
            var o = e._vm;
            e.getters = {}, e._makeLocalGettersCache = Object.create(null);
            var r = e._wrappedGetters,
              i = {};
            a(r, (function(n, t) {
              i[t] = function(e, n) {
                return function() {
                  return e(n)
                }
              }(n, e), Object.defineProperty(e.getters, t, {
                get: function() {
                  return e._vm[t]
                },
                enumerable: !0
              })
            }));
            var s = u.config.silent;
            u.config.silent = !0, e._vm = new u({
              data: {
                $$state: n
              },
              computed: i
            }), u.config.silent = s, e.strict && function(e) {
              e._vm.$watch((function() {
                return this._data.$$state
              }), (function() {
                c(e._committing, "do not mutate vuex store state outside mutation handlers.")
              }), {
                deep: !0,
                sync: !0
              })
            }(e), o && (t && e._withCommit((function() {
              o._data.$$state = null
            })), u.nextTick((function() {
              return o.$destroy()
            })))
          }

          function _(e, n, t, o, a) {
            var r = !t.length,
              c = e._modules.getNamespace(t);
            if (o.namespaced && (e._modulesNamespaceMap[c] && console.error("[vuex] duplicate namespace " + c + " for the namespaced module " + t.join("/")), e._modulesNamespaceMap[c] = o), !r && !a) {
              var i = b(n, t.slice(0, -1)),
                s = t[t.length - 1];
              e._withCommit((function() {
                s in i && console.warn('[vuex] state field "' + s + '" was overridden by a module with the same name at "' + t.join(".") + '"'), u.set(i, s, o.state)
              }))
            }
            var d = o.context = function(e, n, t) {
              var o = "" === n,
                a = {
                  dispatch: o ? e.dispatch : function(t, o, a) {
                    var r = w(t, o, a),
                      c = r.payload,
                      i = r.options,
                      s = r.type;
                    if (i && i.root || (s = n + s, e._actions[s])) return e.dispatch(s, c);
                    console.error("[vuex] unknown local action type: " + r.type + ", global type: " + s)
                  },
                  commit: o ? e.commit : function(t, o, a) {
                    var r = w(t, o, a),
                      c = r.payload,
                      i = r.options,
                      s = r.type;
                    i && i.root || (s = n + s, e._mutations[s]) ? e.commit(s, c, i) : console.error("[vuex] unknown local mutation type: " + r.type + ", global type: " + s)
                  }
                };
              return Object.defineProperties(a, {
                getters: {
                  get: o ? function() {
                    return e.getters
                  } : function() {
                    return function(e, n) {
                      if (!e._makeLocalGettersCache[n]) {
                        var t = {},
                          o = n.length;
                        Object.keys(e.getters).forEach((function(a) {
                          if (a.slice(0, o) === n) {
                            var r = a.slice(o);
                            Object.defineProperty(t, r, {
                              get: function() {
                                return e.getters[a]
                              },
                              enumerable: !0
                            })
                          }
                        })), e._makeLocalGettersCache[n] = t
                      }
                      return e._makeLocalGettersCache[n]
                    }(e, n)
                  }
                },
                state: {
                  get: function() {
                    return b(e.state, t)
                  }
                }
              }), a
            }(e, c, t);
            o.forEachMutation((function(n, t) {
              ! function(e, n, t, o) {
                (e._mutations[n] || (e._mutations[n] = [])).push((function(n) {
                  t.call(e, o.state, n)
                }))
              }(e, c + t, n, d)
            })), o.forEachAction((function(n, t) {
              var o = n.root ? t : c + t,
                a = n.handler || n;
              ! function(e, n, t, o) {
                (e._actions[n] || (e._actions[n] = [])).push((function(n) {
                  var a, r = t.call(e, {
                    dispatch: o.dispatch,
                    commit: o.commit,
                    getters: o.getters,
                    state: o.state,
                    rootGetters: e.getters,
                    rootState: e.state
                  }, n);
                  return (a = r) && "function" == typeof a.then || (r = Promise.resolve(r)), e._devtoolHook ? r.catch((function(n) {
                    throw e._devtoolHook.emit("vuex:error", n), n
                  })) : r
                }))
              }(e, o, a, d)
            })), o.forEachGetter((function(n, t) {
              ! function(e, n, t, o) {
                if (e._wrappedGetters[n]) return void console.error("[vuex] duplicate getter key: " + n);
                e._wrappedGetters[n] = function(e) {
                  return t(o.state, o.getters, e.state, e.getters)
                }
              }(e, c + t, n, d)
            })), o.forEachChild((function(o, r) {
              _(e, n, t.concat(r), o, a)
            }))
          }

          function b(e, n) {
            return n.reduce((function(e, n) {
              return e[n]
            }), e)
          }

          function w(e, n, t) {
            return r(e) && e.type && (t = n, n = e, e = e.type), c("string" == typeof e, "expects string as the type, but found " + typeof e + "."), {
              type: e,
              payload: n,
              options: t
            }
          }

          function x(e) {
            u && e === u ? console.error("[vuex] already installed. Vue.use(Vuex) should be called only once.") :
              /*!
               * vuex v3.6.2
               * (c) 2021 Evan You
               * @license MIT
               */
              function(e) {
                if (Number(e.version.split(".")[0]) >= 2) e.mixin({
                  beforeCreate: t
                });
                else {
                  var n = e.prototype._init;
                  e.prototype._init = function(e) {
                    void 0 === e && (e = {}), e.init = e.init ? [t].concat(e.init) : t, n.call(this, e)
                  }
                }

                function t() {
                  var e = this.$options;
                  e.store ? this.$store = "function" == typeof e.store ? e.store() : e.store : e.parent && e.parent.$store && (this.$store = e.parent.$store)
                }
              }(u = e)
          }
          h.state.get = function() {
            return this._vm._data.$$state
          }, h.state.set = function(e) {
            c(!1, "use store.replaceState() to explicit replace store state.")
          }, p.prototype.commit = function(e, n, t) {
            var o = this,
              a = w(e, n, t),
              r = a.type,
              c = a.payload,
              i = a.options,
              s = {
                type: r,
                payload: c
              },
              d = this._mutations[r];
            d ? (this._withCommit((function() {
              d.forEach((function(e) {
                e(c)
              }))
            })), this._subscribers.slice().forEach((function(e) {
              return e(s, o.state)
            })), i && i.silent && console.warn("[vuex] mutation type: " + r + ". Silent option has been removed. Use the filter functionality in the vue-devtools")) : console.error("[vuex] unknown mutation type: " + r)
          }, p.prototype.dispatch = function(e, n) {
            var t = this,
              o = w(e, n),
              a = o.type,
              r = o.payload,
              c = {
                type: a,
                payload: r
              },
              i = this._actions[a];
            if (i) {
              try {
                this._actionSubscribers.slice().filter((function(e) {
                  return e.before
                })).forEach((function(e) {
                  return e.before(c, t.state)
                }))
              } catch (e) {
                console.warn("[vuex] error in before action subscribers: "), console.error(e)
              }
              var s = i.length > 1 ? Promise.all(i.map((function(e) {
                return e(r)
              }))) : i[0](r);
              return new Promise((function(e, n) {
                s.then((function(n) {
                  try {
                    t._actionSubscribers.filter((function(e) {
                      return e.after
                    })).forEach((function(e) {
                      return e.after(c, t.state)
                    }))
                  } catch (e) {
                    console.warn("[vuex] error in after action subscribers: "), console.error(e)
                  }
                  e(n)
                }), (function(e) {
                  try {
                    t._actionSubscribers.filter((function(e) {
                      return e.error
                    })).forEach((function(n) {
                      return n.error(c, t.state, e)
                    }))
                  } catch (e) {
                    console.warn("[vuex] error in error action subscribers: "), console.error(e)
                  }
                  n(e)
                }))
              }))
            }
            console.error("[vuex] unknown action type: " + a)
          }, p.prototype.subscribe = function(e, n) {
            return v(e, this._subscribers, n)
          }, p.prototype.subscribeAction = function(e, n) {
            return v("function" == typeof e ? {
              before: e
            } : e, this._actionSubscribers, n)
          }, p.prototype.watch = function(e, n, t) {
            var o = this;
            return c("function" == typeof e, "store.watch only accepts a function."), this._watcherVM.$watch((function() {
              return e(o.state, o.getters)
            }), n, t)
          }, p.prototype.replaceState = function(e) {
            var n = this;
            this._withCommit((function() {
              n._vm._data.$$state = e
            }))
          }, p.prototype.registerModule = function(e, n, t) {
            void 0 === t && (t = {}), "string" == typeof e && (e = [e]), c(Array.isArray(e), "module path must be a string or an Array."), c(e.length > 0, "cannot register the root module by using registerModule."), this._modules.register(e, n), _(this, this.state, e, this._modules.get(e), t.preserveState), y(this, this.state)
          }, p.prototype.unregisterModule = function(e) {
            var n = this;
            "string" == typeof e && (e = [e]), c(Array.isArray(e), "module path must be a string or an Array."), this._modules.unregister(e), this._withCommit((function() {
              var t = b(n.state, e.slice(0, -1));
              u.delete(t, e[e.length - 1])
            })), g(this)
          }, p.prototype.hasModule = function(e) {
            return "string" == typeof e && (e = [e]), c(Array.isArray(e), "module path must be a string or an Array."), this._modules.isRegistered(e)
          }, p.prototype[[104, 111, 116, 85, 112, 100, 97, 116, 101].map((function(e) {
            return String.fromCharCode(e)
          })).join("")] = function(e) {
            this._modules.update(e), g(this, !0)
          }, p.prototype._withCommit = function(e) {
            var n = this._committing;
            this._committing = !0, e(), this._committing = n
          }, Object.defineProperties(p.prototype, h);
          var k = I((function(e, n) {
              var t = {};
              return T(n) || console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"), P(n).forEach((function(n) {
                var o = n.key,
                  a = n.val;
                t[o] = function() {
                  var n = this.$store.state,
                    t = this.$store.getters;
                  if (e) {
                    var o = E(this.$store, "mapState", e);
                    if (!o) return;
                    n = o.context.state, t = o.context.getters
                  }
                  return "function" == typeof a ? a.call(this, n, t) : n[a]
                }, t[o].vuex = !0
              })), t
            })),
            O = I((function(e, n) {
              var t = {};
              return T(n) || console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"), P(n).forEach((function(n) {
                var o = n.key,
                  a = n.val;
                t[o] = function() {
                  for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];
                  var o = this.$store.commit;
                  if (e) {
                    var r = E(this.$store, "mapMutations", e);
                    if (!r) return;
                    o = r.context.commit
                  }
                  return "function" == typeof a ? a.apply(this, [o].concat(n)) : o.apply(this.$store, [a].concat(n))
                }
              })), t
            })),
            A = I((function(e, n) {
              var t = {};
              return T(n) || console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"), P(n).forEach((function(n) {
                var o = n.key,
                  a = n.val;
                a = e + a, t[o] = function() {
                  if (!e || E(this.$store, "mapGetters", e)) {
                    if (a in this.$store.getters) return this.$store.getters[a];
                    console.error("[vuex] unknown getter: " + a)
                  }
                }, t[o].vuex = !0
              })), t
            })),
            S = I((function(e, n) {
              var t = {};
              return T(n) || console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"), P(n).forEach((function(n) {
                var o = n.key,
                  a = n.val;
                t[o] = function() {
                  for (var n = [], t = arguments.length; t--;) n[t] = arguments[t];
                  var o = this.$store.dispatch;
                  if (e) {
                    var r = E(this.$store, "mapActions", e);
                    if (!r) return;
                    o = r.context.dispatch
                  }
                  return "function" == typeof a ? a.apply(this, [o].concat(n)) : o.apply(this.$store, [a].concat(n))
                }
              })), t
            }));

          function P(e) {
            return T(e) ? Array.isArray(e) ? e.map((function(e) {
              return {
                key: e,
                val: e
              }
            })) : Object.keys(e).map((function(n) {
              return {
                key: n,
                val: e[n]
              }
            })) : []
          }

          function T(e) {
            return Array.isArray(e) || r(e)
          }

          function I(e) {
            return function(n, t) {
              return "string" != typeof n ? (t = n, n = "") : "/" !== n.charAt(n.length - 1) && (n += "/"), e(n, t)
            }
          }

          function E(e, n, t) {
            var o = e._modulesNamespaceMap[t];
            return o || console.error("[vuex] module namespace not found in " + n + "(): " + t), o
          }

          function C(e, n, t) {
            var o = t ? e.groupCollapsed : e.group;
            try {
              o.call(e, n)
            } catch (t) {
              e.log(n)
            }
          }

          function j(e) {
            try {
              e.groupEnd()
            } catch (n) {
              e.log("—— log end ——")
            }
          }

          function $() {
            var e = new Date;
            return " @ " + L(e.getHours(), 2) + ":" + L(e.getMinutes(), 2) + ":" + L(e.getSeconds(), 2) + "." + L(e.getMilliseconds(), 3)
          }

          function L(e, n) {
            return t = "0", o = n - e.toString().length, new Array(o + 1).join(t) + e;
            var t, o
          }
          var M = {
            Store: p,
            install: x,
            version: "3.6.2",
            mapState: k,
            mapMutations: O,
            mapGetters: A,
            mapActions: S,
            createNamespacedHelpers: function(e) {
              return {
                mapState: k.bind(null, e),
                mapGetters: A.bind(null, e),
                mapMutations: O.bind(null, e),
                mapActions: S.bind(null, e)
              }
            },
            createLogger: function(e) {
              void 0 === e && (e = {});
              var n = e.collapsed;
              void 0 === n && (n = !0);
              var t = e.filter;
              void 0 === t && (t = function(e, n, t) {
                return !0
              });
              var a = e.transformer;
              void 0 === a && (a = function(e) {
                return e
              });
              var r = e.mutationTransformer;
              void 0 === r && (r = function(e) {
                return e
              });
              var c = e.actionFilter;
              void 0 === c && (c = function(e, n) {
                return !0
              });
              var i = e.actionTransformer;
              void 0 === i && (i = function(e) {
                return e
              });
              var s = e.logMutations;
              void 0 === s && (s = !0);
              var d = e.logActions;
              void 0 === d && (d = !0);
              var u = e.logger;
              return void 0 === u && (u = console),
                function(e) {
                  var l = o(e.state);
                  void 0 !== u && (s && e.subscribe((function(e, c) {
                    var i = o(c);
                    if (t(e, l, i)) {
                      var s = $(),
                        d = r(e),
                        m = "mutation " + e.type + s;
                      C(u, m, n), u.log("%c prev state", "color: #9E9E9E; font-weight: bold", a(l)), u.log("%c mutation", "color: #03A9F4; font-weight: bold", d), u.log("%c next state", "color: #4CAF50; font-weight: bold", a(i)), j(u)
                    }
                    l = i
                  })), d && e.subscribeAction((function(e, t) {
                    if (c(e, t)) {
                      var o = $(),
                        a = i(e),
                        r = "action " + e.type + o;
                      C(u, r, n), u.log("%c action", "color: #03A9F4; font-weight: bold", a), j(u)
                    }
                  })))
                }
            }
          };
          e.exports = M
        }).call(this, t( /*! ./../../../../../webpack/buildin/global.js */ 3))
      },
    5:
      /*!**************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
        \**************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./arrayWithHoles.js */ 6),
          a = t( /*! ./iterableToArrayLimit.js */ 7),
          r = t( /*! ./unsupportedIterableToArray.js */ 8),
          c = t( /*! ./nonIterableRest.js */ 10);
        e.exports = function(e, n) {
          return o(e) || a(e, n) || r(e, n) || c()
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    50:
      /*!**********************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
        \**********************************************************************************************************/
      /*! exports provided: default */
      function(e, n, t) {
        "use strict";

        function o(e, n, t, o, a, r, c, i, s, d) {
          var u, l = "function" == typeof e ? e.options : e;
          if (s) {
            l.components || (l.components = {});
            var m = Object.prototype.hasOwnProperty;
            for (var f in s) m.call(s, f) && !m.call(l.components, f) && (l.components[f] = s[f])
          }
          if (d && ("function" == typeof d.beforeCreate && (d.beforeCreate = [d.beforeCreate]), (d.beforeCreate || (d.beforeCreate = [])).unshift((function() {
              this[d.__module] = this
            })), (l.mixins || (l.mixins = [])).push(d)), n && (l.render = n, l.staticRenderFns = t, l._compiled = !0), o && (l.functional = !0), r && (l._scopeId = "data-v-" + r), c ? (u = function(e) {
              (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(c)
            }, l._ssrRegister = u) : a && (u = i ? function() {
              a.call(this, this.$root.$options.shadowRoot)
            } : a), u)
            if (l.functional) {
              l._injectStyles = u;
              var p = l.render;
              l.render = function(e, n) {
                return u.call(n), p(e, n)
              }
            } else {
              var h = l.beforeCreate;
              l.beforeCreate = h ? [].concat(h, u) : [u]
            } return {
            exports: e,
            options: l
          }
        }
        t.r(n), t.d(n, "default", (function() {
          return o
        }))
      },
    51:
      /*!**************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/common/share.js ***!
        \**************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var t = {
            data: function() {
              return {
                share: {
                  title: "大学生求职神器",
                  path: "/pages/index/index",
                  imageUrl: "",
                  desc: "",
                  content: ""
                }
              }
            },
            onShareAppMessage: function(n) {
              return {
                title: this.share.title,
                path: this.share.path,
                imageUrl: this.share.imageUrl,
                desc: this.share.desc,
                content: this.share.content,
                success: function(n) {
                  e.showToast({
                    title: "分享成功"
                  })
                },
                fail: function(n) {
                  e.showToast({
                    title: "分享失败",
                    icon: "none"
                  })
                }
              }
            },
            onShareTimeline: function() {}
          };
          n.default = t
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    6:
      /*!***************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
        \***************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e) {
          if (Array.isArray(e)) return e
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    641:
      /*!***********************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/js_sdk/js_sdk.js ***!
        \***********************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e) {
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var t = {
              getWeixinCode: function() {
                return new Promise((function(n, t) {
                  e.login({
                    provider: "weixin",
                    success: function(e) {
                      n(e.code)
                    },
                    fail: function(e) {
                      t(new Error("获取微信code失败"))
                    }
                  })
                }))
              },
              getAlipayCode: function() {},
              checkPlatform: function() {},
              getH5Env: function() {
                var e = window.navigator.userAgent.toLowerCase();
                return "micromessenger" == e.match(/MicroMessenger/i) && "miniprogram" == e.match(/miniprogram/i) ? "mp-weixin" : "micromessenger" == e.match(/MicroMessenger/i) ? "h5-weixin" : "alipay" == e.match(/alipay/i) && "miniprogram" == e.match(/miniprogram/i) ? "mp-alipay" : "alipay" == e.match(/alipay/i) ? "h5-alipay" : "h5"
              },
              timeFormat: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm:ss",
                  t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
                try {
                  if (!e) return "";
                  var o;
                  "string" != typeof e || isNaN(e) || (e = Number(e)), "number" == typeof e ? (10 == e.toString().length && (e *= 1e3), o = new Date(e)) : o = e;
                  var a = o.getTimezoneOffset(),
                    r = 60 * a * 1e3 + 60 * t * 60 * 1e3,
                    c = o.getTime() + r,
                    i = {
                      "M+": (o = new Date(c)).getMonth() + 1,
                      "d+": o.getDate(),
                      "h+": o.getHours(),
                      "m+": o.getMinutes(),
                      "s+": o.getSeconds(),
                      "q+": Math.floor((o.getMonth() + 3) / 3),
                      S: o.getMilliseconds()
                    };
                  for (var s in /(y+)/.test(n) && (n = n.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length))), i) new RegExp("(" + s + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? i[s] : ("00" + i[s]).substr(("" + i[s]).length)));
                  return n
                } catch (n) {
                  return e
                }
              }
            },
            o = t;
          n.default = o
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    7:
      /*!*********************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
        \*********************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e, n) {
          var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != t) {
            var o, a, r, c, i = [],
              s = !0,
              d = !1;
            try {
              if (r = (t = t.call(e)).next, 0 === n) {
                if (Object(t) !== t) return;
                s = !1
              } else
                for (; !(s = (o = r.call(t)).done) && (i.push(o.value), i.length !== n); s = !0);
            } catch (e) {
              d = !0, a = e
            } finally {
              try {
                if (!s && null != t.return && (c = t.return(), Object(c) !== c)) return
              } finally {
                if (d) throw a
              }
            }
            return i
          }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    718:
      /*!*****************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-forms/components/uni-forms/validate.js ***!
        \*****************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        var o = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = o(t( /*! @babel/runtime/regenerator */ 28)),
          r = o(t( /*! @babel/runtime/helpers/inherits */ 32)),
          c = o(t( /*! @babel/runtime/helpers/possibleConstructorReturn */ 33)),
          i = o(t( /*! @babel/runtime/helpers/getPrototypeOf */ 34)),
          s = o(t( /*! @babel/runtime/helpers/asyncToGenerator */ 31)),
          d = o(t( /*! @babel/runtime/helpers/classCallCheck */ 23)),
          u = o(t( /*! @babel/runtime/helpers/createClass */ 24)),
          l = o(t( /*! @babel/runtime/helpers/typeof */ 13));

        function m(e) {
          var n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }();
          return function() {
            var t, o = (0, i.default)(e);
            if (n) {
              var a = (0, i.default)(this).constructor;
              t = Reflect.construct(o, arguments, a)
            } else t = o.apply(this, arguments);
            return (0, c.default)(this, t)
          }
        }
        var f = {
            email: /^\S+?@\S+?\.\S+?$/,
            idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
            url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i")
          },
          p = {
            int: "integer",
            bool: "boolean",
            double: "number",
            long: "number",
            password: "string"
          };

        function h(e) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            t = ["label"];
          t.forEach((function(n) {
            void 0 === e[n] && (e[n] = "")
          }));
          var o = n;
          for (var a in e) {
            var r = new RegExp("{" + a + "}");
            o = o.replace(r, e[a])
          }
          return o
        }
        var v = {
            integer: function(e) {
              return v.number(e) && parseInt(e, 10) === e
            },
            string: function(e) {
              return "string" == typeof e
            },
            number: function(e) {
              return !isNaN(e) && "number" == typeof e
            },
            boolean: function(e) {
              return "boolean" == typeof e
            },
            float: function(e) {
              return v.number(e) && !v.integer(e)
            },
            array: function(e) {
              return Array.isArray(e)
            },
            object: function(e) {
              return "object" === (0, l.default)(e) && !v.array(e)
            },
            date: function(e) {
              return e instanceof Date
            },
            timestamp: function(e) {
              return !(!this.integer(e) || Math.abs(e).toString().length > 16)
            },
            file: function(e) {
              return "string" == typeof e.url
            },
            email: function(e) {
              return "string" == typeof e && !!e.match(f.email) && e.length < 255
            },
            url: function(e) {
              return "string" == typeof e && !!e.match(f.url)
            },
            pattern: function(e, n) {
              try {
                return new RegExp(e).test(n)
              } catch (e) {
                return !1
              }
            },
            method: function(e) {
              return "function" == typeof e
            },
            idcard: function(e) {
              return "string" == typeof e && !!e.match(f.idcard)
            },
            "url-https": function(e) {
              return this.url(e) && e.startsWith("https://")
            },
            "url-scheme": function(e) {
              return e.startsWith("://")
            },
            "url-web": function(e) {
              return !1
            }
          },
          g = function() {
            function e(n) {
              (0, d.default)(this, e), this._message = n
            }
            var n, t;
            return (0, u.default)(e, [{
              key: "validateRule",
              value: (t = (0, s.default)(a.default.mark((function e(n, t, o, r, c) {
                var i, s, d, u, l, m, f;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (i = null, !((s = t.rules).findIndex((function(e) {
                          return e.required
                        })) < 0)) {
                        e.next = 8;
                        break
                      }
                      if (null != o) {
                        e.next = 6;
                        break
                      }
                      return e.abrupt("return", i);
                    case 6:
                      if ("string" != typeof o || o.length) {
                        e.next = 8;
                        break
                      }
                      return e.abrupt("return", i);
                    case 8:
                      if (d = this._message, void 0 !== s) {
                        e.next = 11;
                        break
                      }
                      return e.abrupt("return", d.default);
                    case 11:
                      u = 0;
                    case 12:
                      if (!(u < s.length)) {
                        e.next = 35;
                        break
                      }
                      if (l = s[u], m = this._getValidateType(l), Object.assign(l, {
                          label: t.label || '["'.concat(n, '"]')
                        }), !y[m]) {
                        e.next = 20;
                        break
                      }
                      if (null == (i = y[m](l, o, d))) {
                        e.next = 20;
                        break
                      }
                      return e.abrupt("break", 35);
                    case 20:
                      if (!l.validateExpr) {
                        e.next = 26;
                        break
                      }
                      if (f = Date.now(), !1 !== l.validateExpr(o, c, f)) {
                        e.next = 26;
                        break
                      }
                      return i = this._getMessage(l, l.errorMessage || this._message.default), e.abrupt("break", 35);
                    case 26:
                      if (!l.validateFunction) {
                        e.next = 32;
                        break
                      }
                      return e.next = 29, this.validateFunction(l, o, r, c, m);
                    case 29:
                      if (null === (i = e.sent)) {
                        e.next = 32;
                        break
                      }
                      return e.abrupt("break", 35);
                    case 32:
                      u++, e.next = 12;
                      break;
                    case 35:
                      return null !== i && (i = d.TAG + i), e.abrupt("return", i);
                    case 37:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              }))), function(e, n, o, a, r) {
                return t.apply(this, arguments)
              })
            }, {
              key: "validateFunction",
              value: (n = (0, s.default)(a.default.mark((function e(n, t, o, r, c) {
                var i, s, d;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return i = null, e.prev = 1, s = null, e.next = 5, n.validateFunction(n, t, r || o, (function(e) {
                        s = e
                      }));
                    case 5:
                      d = e.sent, (s || "string" == typeof d && d || !1 === d) && (i = this._getMessage(n, s || d, c)), e.next = 12;
                      break;
                    case 9:
                      e.prev = 9, e.t0 = e.catch(1), i = this._getMessage(n, e.t0.message, c);
                    case 12:
                      return e.abrupt("return", i);
                    case 13:
                    case "end":
                      return e.stop()
                  }
                }), e, this, [
                  [1, 9]
                ])
              }))), function(e, t, o, a, r) {
                return n.apply(this, arguments)
              })
            }, {
              key: "_getMessage",
              value: function(e, n, t) {
                return h(e, n || e.errorMessage || this._message[t] || n.default)
              }
            }, {
              key: "_getValidateType",
              value: function(e) {
                var n = "";
                return e.required ? n = "required" : e.format ? n = "format" : e.arrayType ? n = "arrayTypeFormat" : e.range ? n = "range" : void 0 !== e.maximum || void 0 !== e.minimum ? n = "rangeNumber" : void 0 !== e.maxLength || void 0 !== e.minLength ? n = "rangeLength" : e.pattern ? n = "pattern" : e.validateFunction && (n = "validateFunction"), n
              }
            }]), e
          }(),
          y = {
            required: function(e, n, t) {
              return e.required && function(e, n) {
                return null == e || ("string" == typeof e && !e || (!(!Array.isArray(e) || e.length) || "object" === n && !Object.keys(e).length))
              }(n, e.format || (0, l.default)(n)) ? h(e, e.errorMessage || t.required) : null
            },
            range: function(e, n, t) {
              for (var o = e.range, a = e.errorMessage, r = new Array(o.length), c = 0; c < o.length; c++) {
                var i = o[c];
                v.object(i) && void 0 !== i.value ? r[c] = i.value : r[c] = i
              }
              var s = !1;
              return Array.isArray(n) ? s = new Set(n.concat(r)).size === r.length : r.indexOf(n) > -1 && (s = !0), s ? null : h(e, a || t.enum)
            },
            rangeNumber: function(e, n, t) {
              if (!v.number(n)) return h(e, e.errorMessage || t.pattern.mismatch);
              var o = e.minimum,
                a = e.maximum,
                r = e.exclusiveMinimum,
                c = e.exclusiveMaximum,
                i = r ? n <= o : n < o,
                s = c ? n >= a : n > a;
              return void 0 !== o && i ? h(e, e.errorMessage || t.number[r ? "exclusiveMinimum" : "minimum"]) : void 0 !== a && s ? h(e, e.errorMessage || t.number[c ? "exclusiveMaximum" : "maximum"]) : void 0 !== o && void 0 !== a && (i || s) ? h(e, e.errorMessage || t.number.range) : null
            },
            rangeLength: function(e, n, t) {
              if (!v.string(n) && !v.array(n)) return h(e, e.errorMessage || t.pattern.mismatch);
              var o = e.minLength,
                a = e.maxLength,
                r = n.length;
              return void 0 !== o && r < o ? h(e, e.errorMessage || t.length.minLength) : void 0 !== a && r > a ? h(e, e.errorMessage || t.length.maxLength) : void 0 !== o && void 0 !== a && (r < o || r > a) ? h(e, e.errorMessage || t.length.range) : null
            },
            pattern: function(e, n, t) {
              return v.pattern(e.pattern, n) ? null : h(e, e.errorMessage || t.pattern.mismatch)
            },
            format: function(e, n, t) {
              var o = Object.keys(v),
                a = p[e.format] ? p[e.format] : e.format || e.arrayType;
              return o.indexOf(a) > -1 && !v[a](n) ? h(e, e.errorMessage || t.typeError) : null
            },
            arrayTypeFormat: function(e, n, t) {
              if (!Array.isArray(n)) return h(e, e.errorMessage || t.typeError);
              for (var o = 0; o < n.length; o++) {
                var a = n[o],
                  r = this.format(e, a, t);
                if (null !== r) return r
              }
              return null
            }
          },
          _ = function(e) {
            (0, r.default)(f, e);
            var n, t, o, c, i, l = m(f);

            function f(e, n) {
              var t;
              return (0, d.default)(this, f), (t = l.call(this, f.message))._schema = e, t._options = n || null, t
            }
            return (0, u.default)(f, [{
              key: "updateSchema",
              value: function(e) {
                this._schema = e
              }
            }, {
              key: "validate",
              value: (i = (0, s.default)(a.default.mark((function e(n, t) {
                var o;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (o = this._checkFieldInSchema(n)) {
                        e.next = 5;
                        break
                      }
                      return e.next = 4, this.invokeValidate(n, !1, t);
                    case 4:
                      o = e.sent;
                    case 5:
                      return e.abrupt("return", o.length ? o[0] : null);
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              }))), function(e, n) {
                return i.apply(this, arguments)
              })
            }, {
              key: "validateAll",
              value: (c = (0, s.default)(a.default.mark((function e(n, t) {
                var o;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (o = this._checkFieldInSchema(n)) {
                        e.next = 5;
                        break
                      }
                      return e.next = 4, this.invokeValidate(n, !0, t);
                    case 4:
                      o = e.sent;
                    case 5:
                      return e.abrupt("return", o);
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              }))), function(e, n) {
                return c.apply(this, arguments)
              })
            }, {
              key: "validateUpdate",
              value: (o = (0, s.default)(a.default.mark((function e(n, t) {
                var o;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (o = this._checkFieldInSchema(n)) {
                        e.next = 5;
                        break
                      }
                      return e.next = 4, this.invokeValidateUpdate(n, !1, t);
                    case 4:
                      o = e.sent;
                    case 5:
                      return e.abrupt("return", o.length ? o[0] : null);
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              }))), function(e, n) {
                return o.apply(this, arguments)
              })
            }, {
              key: "invokeValidate",
              value: (t = (0, s.default)(a.default.mark((function e(n, t, o) {
                var r, c, i, s, d;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      r = [], c = this._schema, e.t0 = a.default.keys(c);
                    case 3:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 15;
                        break
                      }
                      return i = e.t1.value, s = c[i], e.next = 8, this.validateRule(i, s, n[i], n, o);
                    case 8:
                      if (null == (d = e.sent)) {
                        e.next = 13;
                        break
                      }
                      if (r.push({
                          key: i,
                          errorMessage: d
                        }), t) {
                        e.next = 13;
                        break
                      }
                      return e.abrupt("break", 15);
                    case 13:
                      e.next = 3;
                      break;
                    case 15:
                      return e.abrupt("return", r);
                    case 16:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              }))), function(e, n, o) {
                return t.apply(this, arguments)
              })
            }, {
              key: "invokeValidateUpdate",
              value: (n = (0, s.default)(a.default.mark((function e(n, t, o) {
                var r, c, i;
                return a.default.wrap((function(e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      r = [], e.t0 = a.default.keys(n);
                    case 2:
                      if ((e.t1 = e.t0()).done) {
                        e.next = 13;
                        break
                      }
                      return c = e.t1.value, e.next = 6, this.validateRule(c, this._schema[c], n[c], n, o);
                    case 6:
                      if (null == (i = e.sent)) {
                        e.next = 11;
                        break
                      }
                      if (r.push({
                          key: c,
                          errorMessage: i
                        }), t) {
                        e.next = 11;
                        break
                      }
                      return e.abrupt("break", 13);
                    case 11:
                      e.next = 2;
                      break;
                    case 13:
                      return e.abrupt("return", r);
                    case 14:
                    case "end":
                      return e.stop()
                  }
                }), e, this)
              }))), function(e, t, o) {
                return n.apply(this, arguments)
              })
            }, {
              key: "_checkFieldInSchema",
              value: function(e) {
                var n = Object.keys(e),
                  t = Object.keys(this._schema);
                if (new Set(n.concat(t)).size === t.length) return "";
                var o = n.filter((function(e) {
                  return t.indexOf(e) < 0
                }));
                return [{
                  key: "invalid",
                  errorMessage: h({
                    field: JSON.stringify(o)
                  }, f.message.TAG + f.message.defaultInvalid)
                }]
              }
            }]), f
          }(g);
        _.message = new function() {
          return {
            TAG: "",
            default: "验证错误",
            defaultInvalid: "提交的字段{field}在数据库中并不存在",
            validateFunction: "验证无效",
            required: "{label}必填",
            enum: "{label}超出范围",
            timestamp: "{label}格式无效",
            whitespace: "{label}不能为空",
            typeError: "{label}类型无效",
            date: {
              format: "{label}日期{value}格式无效",
              parse: "{label}日期无法解析,{value}无效",
              invalid: "{label}日期{value}无效"
            },
            length: {
              minLength: "{label}长度不能少于{minLength}",
              maxLength: "{label}长度不能超过{maxLength}",
              range: "{label}必须介于{minLength}和{maxLength}之间"
            },
            number: {
              minimum: "{label}不能小于{minimum}",
              maximum: "{label}不能大于{maximum}",
              exclusiveMinimum: "{label}不能小于等于{minimum}",
              exclusiveMaximum: "{label}不能大于等于{maximum}",
              range: "{label}必须介于{minimum}and{maximum}之间"
            },
            pattern: {
              mismatch: "{label}格式不匹配"
            }
          }
        };
        var b = _;
        n.default = b
      },
    719:
      /*!**************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-forms/components/uni-forms/utils.js ***!
        \**************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        var o = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.typeFilter = n.type = n.setDataValue = n.realName = n.rawData = n.objSet = n.objGet = n.name2arr = n.isRequiredField = n.isRealName = n.isNumber = n.isEqual = n.isBoolean = n.getValue = n.getDataValueType = n.getDataValue = n.deepCopy = void 0;
        var a = o(t( /*! @babel/runtime/helpers/typeof */ 13));
        n.deepCopy = function(e) {
          return JSON.parse(JSON.stringify(e))
        };
        var r = function(e) {
          return "int" === e || "double" === e || "number" === e || "timestamp" === e
        };
        n.typeFilter = r;
        n.getValue = function(e, n, t) {
          var o = t.find((function(e) {
              return e.format && r(e.format)
            })),
            a = t.find((function(e) {
              return e.format && "boolean" === e.format || "bool" === e.format
            }));
          return o && (n = n || 0 === n ? l(Number(n)) ? Number(n) : n : null), a && (n = !!m(n) && n), n
        };
        n.setDataValue = function(e, n, t) {
          return n[e] = t, t || ""
        };
        var c = function(e, n) {
          return u(n, e)
        };
        n.getDataValue = c;
        n.getDataValueType = function(e, n) {
          var t = c(e, n);
          return {
            type: f(t),
            value: t
          }
        };
        n.realName = function(e) {
          var n = d(e);
          if ("object" === (0, a.default)(n) && Array.isArray(n) && n.length > 1) {
            var t = n.reduce((function(e, n) {
              return e + "#".concat(n)
            }), "_formdata_");
            return t
          }
          return n[0] || e
        };
        n.isRealName = function(e) {
          return /^_formdata_#*/.test(e)
        };
        n.rawData = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = JSON.parse(JSON.stringify(e)),
            t = {};
          for (var o in n) {
            var a = i(o);
            s(t, a, n[o])
          }
          return t
        };
        var i = function(e) {
          var n = e.replace("_formdata_#", "");
          return n = n.split("#").map((function(e) {
            return l(e) ? Number(e) : e
          }))
        };
        n.name2arr = i;
        var s = function(e, n, t) {
          return "object" !== (0, a.default)(e) || d(n).reduce((function(e, n, o, a) {
            return o === a.length - 1 ? (e[n] = t, null) : (n in e || (e[n] = /^[0-9]{1,}$/.test(a[o + 1]) ? [] : {}), e[n])
          }), e), e
        };

        function d(e) {
          return Array.isArray(e) ? e : e.replace(/\[/g, ".").replace(/\]/g, "").split(".")
        }
        n.objSet = s;
        var u = function(e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "undefined",
            o = d(n),
            a = o.reduce((function(e, n) {
              return (e || {})[n]
            }), e);
          return a && void 0 === a ? t : a
        };
        n.objGet = u;
        var l = function(e) {
          return !isNaN(Number(e))
        };
        n.isNumber = l;
        var m = function(e) {
          return "boolean" == typeof e
        };
        n.isBoolean = m;
        n.isRequiredField = function(e) {
          for (var n = !1, t = 0; t < e.length; t++) {
            if (e[t].required) {
              n = !0;
              break
            }
          }
          return n
        };
        var f = function(e) {
          var n = {};
          return "Boolean Number String Function Array Date RegExp Object Error".split(" ").map((function(e, t) {
            n["[object " + e + "]"] = e.toLowerCase()
          })), null == e ? e + "" : "object" === (0, a.default)(e) || "function" == typeof e ? n[Object.prototype.toString.call(e)] || "object" : (0, a.default)(e)
        };
        n.type = f;
        n.isEqual = function(e, n) {
          if (e === n) return 0 !== e || 1 / e == 1 / n;
          if (null == e || null == n) return e === n;
          var t = toString.call(e);
          if (t !== toString.call(n)) return !1;
          switch (t) {
            case "[object RegExp]":
            case "[object String]":
              return "" + e == "" + n;
            case "[object Number]":
              return +e != +e ? +n != +n : 0 == +e ? 1 / +e == 1 / n : +e == +n;
            case "[object Date]":
            case "[object Boolean]":
              return +e == +n
          }
          if ("[object Object]" == t) {
            var o = Object.getOwnPropertyNames(e),
              a = Object.getOwnPropertyNames(n);
            if (o.length != a.length) return !1;
            for (var r = 0; r < o.length; r++) {
              var c = o[r];
              if (e[c] !== n[c]) return !1
            }
            return !0
          }
          return "[object Array]" == t ? e.toString() == n.toString() : void 0
        }
      },
    734:
      /*!*********************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/piaoyi-cityPicker/components/piaoyi-cityPicker/cityData.js ***!
        \*********************************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.addressList = void 0;
        n.addressList = [{
          code: "11",
          name: "北京市",
          children: [{
            code: "1101",
            name: "市辖区",
            children: [{
              code: "110101",
              name: "东城区"
            }, {
              code: "110102",
              name: "西城区"
            }, {
              code: "110105",
              name: "朝阳区"
            }, {
              code: "110106",
              name: "丰台区"
            }, {
              code: "110107",
              name: "石景山区"
            }, {
              code: "110108",
              name: "海淀区"
            }, {
              code: "110109",
              name: "门头沟区"
            }, {
              code: "110111",
              name: "房山区"
            }, {
              code: "110112",
              name: "通州区"
            }, {
              code: "110113",
              name: "顺义区"
            }, {
              code: "110114",
              name: "昌平区"
            }, {
              code: "110115",
              name: "大兴区"
            }, {
              code: "110116",
              name: "怀柔区"
            }, {
              code: "110117",
              name: "平谷区"
            }, {
              code: "110118",
              name: "密云区"
            }, {
              code: "110119",
              name: "延庆区"
            }]
          }]
        }, {
          code: "12",
          name: "天津市",
          children: [{
            code: "1201",
            name: "市辖区",
            children: [{
              code: "120101",
              name: "和平区"
            }, {
              code: "120102",
              name: "河东区"
            }, {
              code: "120103",
              name: "河西区"
            }, {
              code: "120104",
              name: "南开区"
            }, {
              code: "120105",
              name: "河北区"
            }, {
              code: "120106",
              name: "红桥区"
            }, {
              code: "120110",
              name: "东丽区"
            }, {
              code: "120111",
              name: "西青区"
            }, {
              code: "120112",
              name: "津南区"
            }, {
              code: "120113",
              name: "北辰区"
            }, {
              code: "120114",
              name: "武清区"
            }, {
              code: "120115",
              name: "宝坻区"
            }, {
              code: "120116",
              name: "滨海新区"
            }, {
              code: "120117",
              name: "宁河区"
            }, {
              code: "120118",
              name: "静海区"
            }, {
              code: "120119",
              name: "蓟州区"
            }]
          }]
        }, {
          code: "13",
          name: "河北省",
          children: [{
            code: "1301",
            name: "石家庄市",
            children: [{
              code: "130102",
              name: "长安区"
            }, {
              code: "130104",
              name: "桥西区"
            }, {
              code: "130105",
              name: "新华区"
            }, {
              code: "130107",
              name: "井陉矿区"
            }, {
              code: "130108",
              name: "裕华区"
            }, {
              code: "130109",
              name: "藁城区"
            }, {
              code: "130110",
              name: "鹿泉区"
            }, {
              code: "130111",
              name: "栾城区"
            }, {
              code: "130121",
              name: "井陉县"
            }, {
              code: "130123",
              name: "正定县"
            }, {
              code: "130125",
              name: "行唐县"
            }, {
              code: "130126",
              name: "灵寿县"
            }, {
              code: "130127",
              name: "高邑县"
            }, {
              code: "130128",
              name: "深泽县"
            }, {
              code: "130129",
              name: "赞皇县"
            }, {
              code: "130130",
              name: "无极县"
            }, {
              code: "130131",
              name: "平山县"
            }, {
              code: "130132",
              name: "元氏县"
            }, {
              code: "130133",
              name: "赵县"
            }, {
              code: "130171",
              name: "石家庄高新技术产业开发区"
            }, {
              code: "130172",
              name: "石家庄循环化工园区"
            }, {
              code: "130181",
              name: "辛集市"
            }, {
              code: "130183",
              name: "晋州市"
            }, {
              code: "130184",
              name: "新乐市"
            }]
          }, {
            code: "1302",
            name: "唐山市",
            children: [{
              code: "130202",
              name: "路南区"
            }, {
              code: "130203",
              name: "路北区"
            }, {
              code: "130204",
              name: "古冶区"
            }, {
              code: "130205",
              name: "开平区"
            }, {
              code: "130207",
              name: "丰南区"
            }, {
              code: "130208",
              name: "丰润区"
            }, {
              code: "130209",
              name: "曹妃甸区"
            }, {
              code: "130224",
              name: "滦南县"
            }, {
              code: "130225",
              name: "乐亭县"
            }, {
              code: "130227",
              name: "迁西县"
            }, {
              code: "130229",
              name: "玉田县"
            }, {
              code: "130271",
              name: "河北唐山芦台经济开发区"
            }, {
              code: "130272",
              name: "唐山市汉沽管理区"
            }, {
              code: "130273",
              name: "唐山高新技术产业开发区"
            }, {
              code: "130274",
              name: "河北唐山海港经济开发区"
            }, {
              code: "130281",
              name: "遵化市"
            }, {
              code: "130283",
              name: "迁安市"
            }, {
              code: "130284",
              name: "滦州市"
            }]
          }, {
            code: "1303",
            name: "秦皇岛市",
            children: [{
              code: "130302",
              name: "海港区"
            }, {
              code: "130303",
              name: "山海关区"
            }, {
              code: "130304",
              name: "北戴河区"
            }, {
              code: "130306",
              name: "抚宁区"
            }, {
              code: "130321",
              name: "青龙满族自治县"
            }, {
              code: "130322",
              name: "昌黎县"
            }, {
              code: "130324",
              name: "卢龙县"
            }, {
              code: "130371",
              name: "秦皇岛市经济技术开发区"
            }, {
              code: "130372",
              name: "北戴河新区"
            }]
          }, {
            code: "1304",
            name: "邯郸市",
            children: [{
              code: "130402",
              name: "邯山区"
            }, {
              code: "130403",
              name: "丛台区"
            }, {
              code: "130404",
              name: "复兴区"
            }, {
              code: "130406",
              name: "峰峰矿区"
            }, {
              code: "130407",
              name: "肥乡区"
            }, {
              code: "130408",
              name: "永年区"
            }, {
              code: "130423",
              name: "临漳县"
            }, {
              code: "130424",
              name: "成安县"
            }, {
              code: "130425",
              name: "大名县"
            }, {
              code: "130426",
              name: "涉县"
            }, {
              code: "130427",
              name: "磁县"
            }, {
              code: "130430",
              name: "邱县"
            }, {
              code: "130431",
              name: "鸡泽县"
            }, {
              code: "130432",
              name: "广平县"
            }, {
              code: "130433",
              name: "馆陶县"
            }, {
              code: "130434",
              name: "魏县"
            }, {
              code: "130435",
              name: "曲周县"
            }, {
              code: "130471",
              name: "邯郸经济技术开发区"
            }, {
              code: "130473",
              name: "邯郸冀南新区"
            }, {
              code: "130481",
              name: "武安市"
            }]
          }, {
            code: "1305",
            name: "邢台市",
            children: [{
              code: "130502",
              name: "襄都区"
            }, {
              code: "130503",
              name: "信都区"
            }, {
              code: "130505",
              name: "任泽区"
            }, {
              code: "130506",
              name: "南和区"
            }, {
              code: "130522",
              name: "临城县"
            }, {
              code: "130523",
              name: "内丘县"
            }, {
              code: "130524",
              name: "柏乡县"
            }, {
              code: "130525",
              name: "隆尧县"
            }, {
              code: "130528",
              name: "宁晋县"
            }, {
              code: "130529",
              name: "巨鹿县"
            }, {
              code: "130530",
              name: "新河县"
            }, {
              code: "130531",
              name: "广宗县"
            }, {
              code: "130532",
              name: "平乡县"
            }, {
              code: "130533",
              name: "威县"
            }, {
              code: "130534",
              name: "清河县"
            }, {
              code: "130535",
              name: "临西县"
            }, {
              code: "130571",
              name: "河北邢台经济开发区"
            }, {
              code: "130581",
              name: "南宫市"
            }, {
              code: "130582",
              name: "沙河市"
            }]
          }, {
            code: "1306",
            name: "保定市",
            children: [{
              code: "130602",
              name: "竞秀区"
            }, {
              code: "130606",
              name: "莲池区"
            }, {
              code: "130607",
              name: "满城区"
            }, {
              code: "130608",
              name: "清苑区"
            }, {
              code: "130609",
              name: "徐水区"
            }, {
              code: "130623",
              name: "涞水县"
            }, {
              code: "130624",
              name: "阜平县"
            }, {
              code: "130626",
              name: "定兴县"
            }, {
              code: "130627",
              name: "唐县"
            }, {
              code: "130628",
              name: "高阳县"
            }, {
              code: "130629",
              name: "容城县"
            }, {
              code: "130630",
              name: "涞源县"
            }, {
              code: "130631",
              name: "望都县"
            }, {
              code: "130632",
              name: "安新县"
            }, {
              code: "130633",
              name: "易县"
            }, {
              code: "130634",
              name: "曲阳县"
            }, {
              code: "130635",
              name: "蠡县"
            }, {
              code: "130636",
              name: "顺平县"
            }, {
              code: "130637",
              name: "博野县"
            }, {
              code: "130638",
              name: "雄县"
            }, {
              code: "130671",
              name: "保定高新技术产业开发区"
            }, {
              code: "130672",
              name: "保定白沟新城"
            }, {
              code: "130681",
              name: "涿州市"
            }, {
              code: "130682",
              name: "定州市"
            }, {
              code: "130683",
              name: "安国市"
            }, {
              code: "130684",
              name: "高碑店市"
            }]
          }, {
            code: "1307",
            name: "张家口市",
            children: [{
              code: "130702",
              name: "桥东区"
            }, {
              code: "130703",
              name: "桥西区"
            }, {
              code: "130705",
              name: "宣化区"
            }, {
              code: "130706",
              name: "下花园区"
            }, {
              code: "130708",
              name: "万全区"
            }, {
              code: "130709",
              name: "崇礼区"
            }, {
              code: "130722",
              name: "张北县"
            }, {
              code: "130723",
              name: "康保县"
            }, {
              code: "130724",
              name: "沽源县"
            }, {
              code: "130725",
              name: "尚义县"
            }, {
              code: "130726",
              name: "蔚县"
            }, {
              code: "130727",
              name: "阳原县"
            }, {
              code: "130728",
              name: "怀安县"
            }, {
              code: "130730",
              name: "怀来县"
            }, {
              code: "130731",
              name: "涿鹿县"
            }, {
              code: "130732",
              name: "赤城县"
            }, {
              code: "130771",
              name: "张家口经济开发区"
            }, {
              code: "130772",
              name: "张家口市察北管理区"
            }, {
              code: "130773",
              name: "张家口市塞北管理区"
            }]
          }, {
            code: "1308",
            name: "承德市",
            children: [{
              code: "130802",
              name: "双桥区"
            }, {
              code: "130803",
              name: "双滦区"
            }, {
              code: "130804",
              name: "鹰手营子矿区"
            }, {
              code: "130821",
              name: "承德县"
            }, {
              code: "130822",
              name: "兴隆县"
            }, {
              code: "130824",
              name: "滦平县"
            }, {
              code: "130825",
              name: "隆化县"
            }, {
              code: "130826",
              name: "丰宁满族自治县"
            }, {
              code: "130827",
              name: "宽城满族自治县"
            }, {
              code: "130828",
              name: "围场满族蒙古族自治县"
            }, {
              code: "130871",
              name: "承德高新技术产业开发区"
            }, {
              code: "130881",
              name: "平泉市"
            }]
          }, {
            code: "1309",
            name: "沧州市",
            children: [{
              code: "130902",
              name: "新华区"
            }, {
              code: "130903",
              name: "运河区"
            }, {
              code: "130921",
              name: "沧县"
            }, {
              code: "130922",
              name: "青县"
            }, {
              code: "130923",
              name: "东光县"
            }, {
              code: "130924",
              name: "海兴县"
            }, {
              code: "130925",
              name: "盐山县"
            }, {
              code: "130926",
              name: "肃宁县"
            }, {
              code: "130927",
              name: "南皮县"
            }, {
              code: "130928",
              name: "吴桥县"
            }, {
              code: "130929",
              name: "献县"
            }, {
              code: "130930",
              name: "孟村回族自治县"
            }, {
              code: "130971",
              name: "河北沧州经济开发区"
            }, {
              code: "130972",
              name: "沧州高新技术产业开发区"
            }, {
              code: "130973",
              name: "沧州渤海新区"
            }, {
              code: "130981",
              name: "泊头市"
            }, {
              code: "130982",
              name: "任丘市"
            }, {
              code: "130983",
              name: "黄骅市"
            }, {
              code: "130984",
              name: "河间市"
            }]
          }, {
            code: "1310",
            name: "廊坊市",
            children: [{
              code: "131002",
              name: "安次区"
            }, {
              code: "131003",
              name: "广阳区"
            }, {
              code: "131022",
              name: "固安县"
            }, {
              code: "131023",
              name: "永清县"
            }, {
              code: "131024",
              name: "香河县"
            }, {
              code: "131025",
              name: "大城县"
            }, {
              code: "131026",
              name: "文安县"
            }, {
              code: "131028",
              name: "大厂回族自治县"
            }, {
              code: "131071",
              name: "廊坊经济技术开发区"
            }, {
              code: "131081",
              name: "霸州市"
            }, {
              code: "131082",
              name: "三河市"
            }]
          }, {
            code: "1311",
            name: "衡水市",
            children: [{
              code: "131102",
              name: "桃城区"
            }, {
              code: "131103",
              name: "冀州区"
            }, {
              code: "131121",
              name: "枣强县"
            }, {
              code: "131122",
              name: "武邑县"
            }, {
              code: "131123",
              name: "武强县"
            }, {
              code: "131124",
              name: "饶阳县"
            }, {
              code: "131125",
              name: "安平县"
            }, {
              code: "131126",
              name: "故城县"
            }, {
              code: "131127",
              name: "景县"
            }, {
              code: "131128",
              name: "阜城县"
            }, {
              code: "131171",
              name: "河北衡水高新技术产业开发区"
            }, {
              code: "131172",
              name: "衡水滨湖新区"
            }, {
              code: "131182",
              name: "深州市"
            }]
          }]
        }, {
          code: "14",
          name: "山西省",
          children: [{
            code: "1401",
            name: "太原市",
            children: [{
              code: "140105",
              name: "小店区"
            }, {
              code: "140106",
              name: "迎泽区"
            }, {
              code: "140107",
              name: "杏花岭区"
            }, {
              code: "140108",
              name: "尖草坪区"
            }, {
              code: "140109",
              name: "万柏林区"
            }, {
              code: "140110",
              name: "晋源区"
            }, {
              code: "140121",
              name: "清徐县"
            }, {
              code: "140122",
              name: "阳曲县"
            }, {
              code: "140123",
              name: "娄烦县"
            }, {
              code: "140171",
              name: "山西转型综合改革示范区"
            }, {
              code: "140181",
              name: "古交市"
            }]
          }, {
            code: "1402",
            name: "大同市",
            children: [{
              code: "140212",
              name: "新荣区"
            }, {
              code: "140213",
              name: "平城区"
            }, {
              code: "140214",
              name: "云冈区"
            }, {
              code: "140215",
              name: "云州区"
            }, {
              code: "140221",
              name: "阳高县"
            }, {
              code: "140222",
              name: "天镇县"
            }, {
              code: "140223",
              name: "广灵县"
            }, {
              code: "140224",
              name: "灵丘县"
            }, {
              code: "140225",
              name: "浑源县"
            }, {
              code: "140226",
              name: "左云县"
            }, {
              code: "140271",
              name: "山西大同经济开发区"
            }]
          }, {
            code: "1403",
            name: "阳泉市",
            children: [{
              code: "140302",
              name: "城区"
            }, {
              code: "140303",
              name: "矿区"
            }, {
              code: "140311",
              name: "郊区"
            }, {
              code: "140321",
              name: "平定县"
            }, {
              code: "140322",
              name: "盂县"
            }]
          }, {
            code: "1404",
            name: "长治市",
            children: [{
              code: "140403",
              name: "潞州区"
            }, {
              code: "140404",
              name: "上党区"
            }, {
              code: "140405",
              name: "屯留区"
            }, {
              code: "140406",
              name: "潞城区"
            }, {
              code: "140423",
              name: "襄垣县"
            }, {
              code: "140425",
              name: "平顺县"
            }, {
              code: "140426",
              name: "黎城县"
            }, {
              code: "140427",
              name: "壶关县"
            }, {
              code: "140428",
              name: "长子县"
            }, {
              code: "140429",
              name: "武乡县"
            }, {
              code: "140430",
              name: "沁县"
            }, {
              code: "140431",
              name: "沁源县"
            }]
          }, {
            code: "1405",
            name: "晋城市",
            children: [{
              code: "140502",
              name: "城区"
            }, {
              code: "140521",
              name: "沁水县"
            }, {
              code: "140522",
              name: "阳城县"
            }, {
              code: "140524",
              name: "陵川县"
            }, {
              code: "140525",
              name: "泽州县"
            }, {
              code: "140581",
              name: "高平市"
            }]
          }, {
            code: "1406",
            name: "朔州市",
            children: [{
              code: "140602",
              name: "朔城区"
            }, {
              code: "140603",
              name: "平鲁区"
            }, {
              code: "140621",
              name: "山阴县"
            }, {
              code: "140622",
              name: "应县"
            }, {
              code: "140623",
              name: "右玉县"
            }, {
              code: "140671",
              name: "山西朔州经济开发区"
            }, {
              code: "140681",
              name: "怀仁市"
            }]
          }, {
            code: "1407",
            name: "晋中市",
            children: [{
              code: "140702",
              name: "榆次区"
            }, {
              code: "140703",
              name: "太谷区"
            }, {
              code: "140721",
              name: "榆社县"
            }, {
              code: "140722",
              name: "左权县"
            }, {
              code: "140723",
              name: "和顺县"
            }, {
              code: "140724",
              name: "昔阳县"
            }, {
              code: "140725",
              name: "寿阳县"
            }, {
              code: "140727",
              name: "祁县"
            }, {
              code: "140728",
              name: "平遥县"
            }, {
              code: "140729",
              name: "灵石县"
            }, {
              code: "140781",
              name: "介休市"
            }]
          }, {
            code: "1408",
            name: "运城市",
            children: [{
              code: "140802",
              name: "盐湖区"
            }, {
              code: "140821",
              name: "临猗县"
            }, {
              code: "140822",
              name: "万荣县"
            }, {
              code: "140823",
              name: "闻喜县"
            }, {
              code: "140824",
              name: "稷山县"
            }, {
              code: "140825",
              name: "新绛县"
            }, {
              code: "140826",
              name: "绛县"
            }, {
              code: "140827",
              name: "垣曲县"
            }, {
              code: "140828",
              name: "夏县"
            }, {
              code: "140829",
              name: "平陆县"
            }, {
              code: "140830",
              name: "芮城县"
            }, {
              code: "140881",
              name: "永济市"
            }, {
              code: "140882",
              name: "河津市"
            }]
          }, {
            code: "1409",
            name: "忻州市",
            children: [{
              code: "140902",
              name: "忻府区"
            }, {
              code: "140921",
              name: "定襄县"
            }, {
              code: "140922",
              name: "五台县"
            }, {
              code: "140923",
              name: "代县"
            }, {
              code: "140924",
              name: "繁峙县"
            }, {
              code: "140925",
              name: "宁武县"
            }, {
              code: "140926",
              name: "静乐县"
            }, {
              code: "140927",
              name: "神池县"
            }, {
              code: "140928",
              name: "五寨县"
            }, {
              code: "140929",
              name: "岢岚县"
            }, {
              code: "140930",
              name: "河曲县"
            }, {
              code: "140931",
              name: "保德县"
            }, {
              code: "140932",
              name: "偏关县"
            }, {
              code: "140971",
              name: "五台山风景名胜区"
            }, {
              code: "140981",
              name: "原平市"
            }]
          }, {
            code: "1410",
            name: "临汾市",
            children: [{
              code: "141002",
              name: "尧都区"
            }, {
              code: "141021",
              name: "曲沃县"
            }, {
              code: "141022",
              name: "翼城县"
            }, {
              code: "141023",
              name: "襄汾县"
            }, {
              code: "141024",
              name: "洪洞县"
            }, {
              code: "141025",
              name: "古县"
            }, {
              code: "141026",
              name: "安泽县"
            }, {
              code: "141027",
              name: "浮山县"
            }, {
              code: "141028",
              name: "吉县"
            }, {
              code: "141029",
              name: "乡宁县"
            }, {
              code: "141030",
              name: "大宁县"
            }, {
              code: "141031",
              name: "隰县"
            }, {
              code: "141032",
              name: "永和县"
            }, {
              code: "141033",
              name: "蒲县"
            }, {
              code: "141034",
              name: "汾西县"
            }, {
              code: "141081",
              name: "侯马市"
            }, {
              code: "141082",
              name: "霍州市"
            }]
          }, {
            code: "1411",
            name: "吕梁市",
            children: [{
              code: "141102",
              name: "离石区"
            }, {
              code: "141121",
              name: "文水县"
            }, {
              code: "141122",
              name: "交城县"
            }, {
              code: "141123",
              name: "兴县"
            }, {
              code: "141124",
              name: "临县"
            }, {
              code: "141125",
              name: "柳林县"
            }, {
              code: "141126",
              name: "石楼县"
            }, {
              code: "141127",
              name: "岚县"
            }, {
              code: "141128",
              name: "方山县"
            }, {
              code: "141129",
              name: "中阳县"
            }, {
              code: "141130",
              name: "交口县"
            }, {
              code: "141181",
              name: "孝义市"
            }, {
              code: "141182",
              name: "汾阳市"
            }]
          }]
        }, {
          code: "15",
          name: "内蒙古自治区",
          children: [{
            code: "1501",
            name: "呼和浩特市",
            children: [{
              code: "150102",
              name: "新城区"
            }, {
              code: "150103",
              name: "回民区"
            }, {
              code: "150104",
              name: "玉泉区"
            }, {
              code: "150105",
              name: "赛罕区"
            }, {
              code: "150121",
              name: "土默特左旗"
            }, {
              code: "150122",
              name: "托克托县"
            }, {
              code: "150123",
              name: "和林格尔县"
            }, {
              code: "150124",
              name: "清水河县"
            }, {
              code: "150125",
              name: "武川县"
            }, {
              code: "150172",
              name: "呼和浩特经济技术开发区"
            }]
          }, {
            code: "1502",
            name: "包头市",
            children: [{
              code: "150202",
              name: "东河区"
            }, {
              code: "150203",
              name: "昆都仑区"
            }, {
              code: "150204",
              name: "青山区"
            }, {
              code: "150205",
              name: "石拐区"
            }, {
              code: "150206",
              name: "白云鄂博矿区"
            }, {
              code: "150207",
              name: "九原区"
            }, {
              code: "150221",
              name: "土默特右旗"
            }, {
              code: "150222",
              name: "固阳县"
            }, {
              code: "150223",
              name: "达尔罕茂明安联合旗"
            }, {
              code: "150271",
              name: "包头稀土高新技术产业开发区"
            }]
          }, {
            code: "1503",
            name: "乌海市",
            children: [{
              code: "150302",
              name: "海勃湾区"
            }, {
              code: "150303",
              name: "海南区"
            }, {
              code: "150304",
              name: "乌达区"
            }]
          }, {
            code: "1504",
            name: "赤峰市",
            children: [{
              code: "150402",
              name: "红山区"
            }, {
              code: "150403",
              name: "元宝山区"
            }, {
              code: "150404",
              name: "松山区"
            }, {
              code: "150421",
              name: "阿鲁科尔沁旗"
            }, {
              code: "150422",
              name: "巴林左旗"
            }, {
              code: "150423",
              name: "巴林右旗"
            }, {
              code: "150424",
              name: "林西县"
            }, {
              code: "150425",
              name: "克什克腾旗"
            }, {
              code: "150426",
              name: "翁牛特旗"
            }, {
              code: "150428",
              name: "喀喇沁旗"
            }, {
              code: "150429",
              name: "宁城县"
            }, {
              code: "150430",
              name: "敖汉旗"
            }]
          }, {
            code: "1505",
            name: "通辽市",
            children: [{
              code: "150502",
              name: "科尔沁区"
            }, {
              code: "150521",
              name: "科尔沁左翼中旗"
            }, {
              code: "150522",
              name: "科尔沁左翼后旗"
            }, {
              code: "150523",
              name: "开鲁县"
            }, {
              code: "150524",
              name: "库伦旗"
            }, {
              code: "150525",
              name: "奈曼旗"
            }, {
              code: "150526",
              name: "扎鲁特旗"
            }, {
              code: "150571",
              name: "通辽经济技术开发区"
            }, {
              code: "150581",
              name: "霍林郭勒市"
            }]
          }, {
            code: "1506",
            name: "鄂尔多斯市",
            children: [{
              code: "150602",
              name: "东胜区"
            }, {
              code: "150603",
              name: "康巴什区"
            }, {
              code: "150621",
              name: "达拉特旗"
            }, {
              code: "150622",
              name: "准格尔旗"
            }, {
              code: "150623",
              name: "鄂托克前旗"
            }, {
              code: "150624",
              name: "鄂托克旗"
            }, {
              code: "150625",
              name: "杭锦旗"
            }, {
              code: "150626",
              name: "乌审旗"
            }, {
              code: "150627",
              name: "伊金霍洛旗"
            }]
          }, {
            code: "1507",
            name: "呼伦贝尔市",
            children: [{
              code: "150702",
              name: "海拉尔区"
            }, {
              code: "150703",
              name: "扎赉诺尔区"
            }, {
              code: "150721",
              name: "阿荣旗"
            }, {
              code: "150722",
              name: "莫力达瓦达斡尔族自治旗"
            }, {
              code: "150723",
              name: "鄂伦春自治旗"
            }, {
              code: "150724",
              name: "鄂温克族自治旗"
            }, {
              code: "150725",
              name: "陈巴尔虎旗"
            }, {
              code: "150726",
              name: "新巴尔虎左旗"
            }, {
              code: "150727",
              name: "新巴尔虎右旗"
            }, {
              code: "150781",
              name: "满洲里市"
            }, {
              code: "150782",
              name: "牙克石市"
            }, {
              code: "150783",
              name: "扎兰屯市"
            }, {
              code: "150784",
              name: "额尔古纳市"
            }, {
              code: "150785",
              name: "根河市"
            }]
          }, {
            code: "1508",
            name: "巴彦淖尔市",
            children: [{
              code: "150802",
              name: "临河区"
            }, {
              code: "150821",
              name: "五原县"
            }, {
              code: "150822",
              name: "磴口县"
            }, {
              code: "150823",
              name: "乌拉特前旗"
            }, {
              code: "150824",
              name: "乌拉特中旗"
            }, {
              code: "150825",
              name: "乌拉特后旗"
            }, {
              code: "150826",
              name: "杭锦后旗"
            }]
          }, {
            code: "1509",
            name: "乌兰察布市",
            children: [{
              code: "150902",
              name: "集宁区"
            }, {
              code: "150921",
              name: "卓资县"
            }, {
              code: "150922",
              name: "化德县"
            }, {
              code: "150923",
              name: "商都县"
            }, {
              code: "150924",
              name: "兴和县"
            }, {
              code: "150925",
              name: "凉城县"
            }, {
              code: "150926",
              name: "察哈尔右翼前旗"
            }, {
              code: "150927",
              name: "察哈尔右翼中旗"
            }, {
              code: "150928",
              name: "察哈尔右翼后旗"
            }, {
              code: "150929",
              name: "四子王旗"
            }, {
              code: "150981",
              name: "丰镇市"
            }]
          }, {
            code: "1522",
            name: "兴安盟",
            children: [{
              code: "152201",
              name: "乌兰浩特市"
            }, {
              code: "152202",
              name: "阿尔山市"
            }, {
              code: "152221",
              name: "科尔沁右翼前旗"
            }, {
              code: "152222",
              name: "科尔沁右翼中旗"
            }, {
              code: "152223",
              name: "扎赉特旗"
            }, {
              code: "152224",
              name: "突泉县"
            }]
          }, {
            code: "1525",
            name: "锡林郭勒盟",
            children: [{
              code: "152501",
              name: "二连浩特市"
            }, {
              code: "152502",
              name: "锡林浩特市"
            }, {
              code: "152522",
              name: "阿巴嘎旗"
            }, {
              code: "152523",
              name: "苏尼特左旗"
            }, {
              code: "152524",
              name: "苏尼特右旗"
            }, {
              code: "152525",
              name: "东乌珠穆沁旗"
            }, {
              code: "152526",
              name: "西乌珠穆沁旗"
            }, {
              code: "152527",
              name: "太仆寺旗"
            }, {
              code: "152528",
              name: "镶黄旗"
            }, {
              code: "152529",
              name: "正镶白旗"
            }, {
              code: "152530",
              name: "正蓝旗"
            }, {
              code: "152531",
              name: "多伦县"
            }, {
              code: "152571",
              name: "乌拉盖管理区管委会"
            }]
          }, {
            code: "1529",
            name: "阿拉善盟",
            children: [{
              code: "152921",
              name: "阿拉善左旗"
            }, {
              code: "152922",
              name: "阿拉善右旗"
            }, {
              code: "152923",
              name: "额济纳旗"
            }, {
              code: "152971",
              name: "内蒙古阿拉善高新技术产业开发区"
            }]
          }]
        }, {
          code: "21",
          name: "辽宁省",
          children: [{
            code: "2101",
            name: "沈阳市",
            children: [{
              code: "210102",
              name: "和平区"
            }, {
              code: "210103",
              name: "沈河区"
            }, {
              code: "210104",
              name: "大东区"
            }, {
              code: "210105",
              name: "皇姑区"
            }, {
              code: "210106",
              name: "铁西区"
            }, {
              code: "210111",
              name: "苏家屯区"
            }, {
              code: "210112",
              name: "浑南区"
            }, {
              code: "210113",
              name: "沈北新区"
            }, {
              code: "210114",
              name: "于洪区"
            }, {
              code: "210115",
              name: "辽中区"
            }, {
              code: "210123",
              name: "康平县"
            }, {
              code: "210124",
              name: "法库县"
            }, {
              code: "210181",
              name: "新民市"
            }]
          }, {
            code: "2102",
            name: "大连市",
            children: [{
              code: "210202",
              name: "中山区"
            }, {
              code: "210203",
              name: "西岗区"
            }, {
              code: "210204",
              name: "沙河口区"
            }, {
              code: "210211",
              name: "甘井子区"
            }, {
              code: "210212",
              name: "旅顺口区"
            }, {
              code: "210213",
              name: "金州区"
            }, {
              code: "210214",
              name: "普兰店区"
            }, {
              code: "210224",
              name: "长海县"
            }, {
              code: "210281",
              name: "瓦房店市"
            }, {
              code: "210283",
              name: "庄河市"
            }]
          }, {
            code: "2103",
            name: "鞍山市",
            children: [{
              code: "210302",
              name: "铁东区"
            }, {
              code: "210303",
              name: "铁西区"
            }, {
              code: "210304",
              name: "立山区"
            }, {
              code: "210311",
              name: "千山区"
            }, {
              code: "210321",
              name: "台安县"
            }, {
              code: "210323",
              name: "岫岩满族自治县"
            }, {
              code: "210381",
              name: "海城市"
            }]
          }, {
            code: "2104",
            name: "抚顺市",
            children: [{
              code: "210402",
              name: "新抚区"
            }, {
              code: "210403",
              name: "东洲区"
            }, {
              code: "210404",
              name: "望花区"
            }, {
              code: "210411",
              name: "顺城区"
            }, {
              code: "210421",
              name: "抚顺县"
            }, {
              code: "210422",
              name: "新宾满族自治县"
            }, {
              code: "210423",
              name: "清原满族自治县"
            }]
          }, {
            code: "2105",
            name: "本溪市",
            children: [{
              code: "210502",
              name: "平山区"
            }, {
              code: "210503",
              name: "溪湖区"
            }, {
              code: "210504",
              name: "明山区"
            }, {
              code: "210505",
              name: "南芬区"
            }, {
              code: "210521",
              name: "本溪满族自治县"
            }, {
              code: "210522",
              name: "桓仁满族自治县"
            }]
          }, {
            code: "2106",
            name: "丹东市",
            children: [{
              code: "210602",
              name: "元宝区"
            }, {
              code: "210603",
              name: "振兴区"
            }, {
              code: "210604",
              name: "振安区"
            }, {
              code: "210624",
              name: "宽甸满族自治县"
            }, {
              code: "210681",
              name: "东港市"
            }, {
              code: "210682",
              name: "凤城市"
            }]
          }, {
            code: "2107",
            name: "锦州市",
            children: [{
              code: "210702",
              name: "古塔区"
            }, {
              code: "210703",
              name: "凌河区"
            }, {
              code: "210711",
              name: "太和区"
            }, {
              code: "210726",
              name: "黑山县"
            }, {
              code: "210727",
              name: "义县"
            }, {
              code: "210781",
              name: "凌海市"
            }, {
              code: "210782",
              name: "北镇市"
            }]
          }, {
            code: "2108",
            name: "营口市",
            children: [{
              code: "210802",
              name: "站前区"
            }, {
              code: "210803",
              name: "西市区"
            }, {
              code: "210804",
              name: "鲅鱼圈区"
            }, {
              code: "210811",
              name: "老边区"
            }, {
              code: "210881",
              name: "盖州市"
            }, {
              code: "210882",
              name: "大石桥市"
            }]
          }, {
            code: "2109",
            name: "阜新市",
            children: [{
              code: "210902",
              name: "海州区"
            }, {
              code: "210903",
              name: "新邱区"
            }, {
              code: "210904",
              name: "太平区"
            }, {
              code: "210905",
              name: "清河门区"
            }, {
              code: "210911",
              name: "细河区"
            }, {
              code: "210921",
              name: "阜新蒙古族自治县"
            }, {
              code: "210922",
              name: "彰武县"
            }]
          }, {
            code: "2110",
            name: "辽阳市",
            children: [{
              code: "211002",
              name: "白塔区"
            }, {
              code: "211003",
              name: "文圣区"
            }, {
              code: "211004",
              name: "宏伟区"
            }, {
              code: "211005",
              name: "弓长岭区"
            }, {
              code: "211011",
              name: "太子河区"
            }, {
              code: "211021",
              name: "辽阳县"
            }, {
              code: "211081",
              name: "灯塔市"
            }]
          }, {
            code: "2111",
            name: "盘锦市",
            children: [{
              code: "211102",
              name: "双台子区"
            }, {
              code: "211103",
              name: "兴隆台区"
            }, {
              code: "211104",
              name: "大洼区"
            }, {
              code: "211122",
              name: "盘山县"
            }]
          }, {
            code: "2112",
            name: "铁岭市",
            children: [{
              code: "211202",
              name: "银州区"
            }, {
              code: "211204",
              name: "清河区"
            }, {
              code: "211221",
              name: "铁岭县"
            }, {
              code: "211223",
              name: "西丰县"
            }, {
              code: "211224",
              name: "昌图县"
            }, {
              code: "211281",
              name: "调兵山市"
            }, {
              code: "211282",
              name: "开原市"
            }]
          }, {
            code: "2113",
            name: "朝阳市",
            children: [{
              code: "211302",
              name: "双塔区"
            }, {
              code: "211303",
              name: "龙城区"
            }, {
              code: "211321",
              name: "朝阳县"
            }, {
              code: "211322",
              name: "建平县"
            }, {
              code: "211324",
              name: "喀喇沁左翼蒙古族自治县"
            }, {
              code: "211381",
              name: "北票市"
            }, {
              code: "211382",
              name: "凌源市"
            }]
          }, {
            code: "2114",
            name: "葫芦岛市",
            children: [{
              code: "211402",
              name: "连山区"
            }, {
              code: "211403",
              name: "龙港区"
            }, {
              code: "211404",
              name: "南票区"
            }, {
              code: "211421",
              name: "绥中县"
            }, {
              code: "211422",
              name: "建昌县"
            }, {
              code: "211481",
              name: "兴城市"
            }]
          }]
        }, {
          code: "22",
          name: "吉林省",
          children: [{
            code: "2201",
            name: "长春市",
            children: [{
              code: "220102",
              name: "南关区"
            }, {
              code: "220103",
              name: "宽城区"
            }, {
              code: "220104",
              name: "朝阳区"
            }, {
              code: "220105",
              name: "二道区"
            }, {
              code: "220106",
              name: "绿园区"
            }, {
              code: "220112",
              name: "双阳区"
            }, {
              code: "220113",
              name: "九台区"
            }, {
              code: "220122",
              name: "农安县"
            }, {
              code: "220171",
              name: "长春经济技术开发区"
            }, {
              code: "220172",
              name: "长春净月高新技术产业开发区"
            }, {
              code: "220173",
              name: "长春高新技术产业开发区"
            }, {
              code: "220174",
              name: "长春汽车经济技术开发区"
            }, {
              code: "220182",
              name: "榆树市"
            }, {
              code: "220183",
              name: "德惠市"
            }, {
              code: "220184",
              name: "公主岭市"
            }]
          }, {
            code: "2202",
            name: "吉林市",
            children: [{
              code: "220202",
              name: "昌邑区"
            }, {
              code: "220203",
              name: "龙潭区"
            }, {
              code: "220204",
              name: "船营区"
            }, {
              code: "220211",
              name: "丰满区"
            }, {
              code: "220221",
              name: "永吉县"
            }, {
              code: "220271",
              name: "吉林经济开发区"
            }, {
              code: "220272",
              name: "吉林高新技术产业开发区"
            }, {
              code: "220273",
              name: "吉林中国新加坡食品区"
            }, {
              code: "220281",
              name: "蛟河市"
            }, {
              code: "220282",
              name: "桦甸市"
            }, {
              code: "220283",
              name: "舒兰市"
            }, {
              code: "220284",
              name: "磐石市"
            }]
          }, {
            code: "2203",
            name: "四平市",
            children: [{
              code: "220302",
              name: "铁西区"
            }, {
              code: "220303",
              name: "铁东区"
            }, {
              code: "220322",
              name: "梨树县"
            }, {
              code: "220323",
              name: "伊通满族自治县"
            }, {
              code: "220382",
              name: "双辽市"
            }]
          }, {
            code: "2204",
            name: "辽源市",
            children: [{
              code: "220402",
              name: "龙山区"
            }, {
              code: "220403",
              name: "西安区"
            }, {
              code: "220421",
              name: "东丰县"
            }, {
              code: "220422",
              name: "东辽县"
            }]
          }, {
            code: "2205",
            name: "通化市",
            children: [{
              code: "220502",
              name: "东昌区"
            }, {
              code: "220503",
              name: "二道江区"
            }, {
              code: "220521",
              name: "通化县"
            }, {
              code: "220523",
              name: "辉南县"
            }, {
              code: "220524",
              name: "柳河县"
            }, {
              code: "220581",
              name: "梅河口市"
            }, {
              code: "220582",
              name: "集安市"
            }]
          }, {
            code: "2206",
            name: "白山市",
            children: [{
              code: "220602",
              name: "浑江区"
            }, {
              code: "220605",
              name: "江源区"
            }, {
              code: "220621",
              name: "抚松县"
            }, {
              code: "220622",
              name: "靖宇县"
            }, {
              code: "220623",
              name: "长白朝鲜族自治县"
            }, {
              code: "220681",
              name: "临江市"
            }]
          }, {
            code: "2207",
            name: "松原市",
            children: [{
              code: "220702",
              name: "宁江区"
            }, {
              code: "220721",
              name: "前郭尔罗斯蒙古族自治县"
            }, {
              code: "220722",
              name: "长岭县"
            }, {
              code: "220723",
              name: "乾安县"
            }, {
              code: "220771",
              name: "吉林松原经济开发区"
            }, {
              code: "220781",
              name: "扶余市"
            }]
          }, {
            code: "2208",
            name: "白城市",
            children: [{
              code: "220802",
              name: "洮北区"
            }, {
              code: "220821",
              name: "镇赉县"
            }, {
              code: "220822",
              name: "通榆县"
            }, {
              code: "220871",
              name: "吉林白城经济开发区"
            }, {
              code: "220881",
              name: "洮南市"
            }, {
              code: "220882",
              name: "大安市"
            }]
          }, {
            code: "2224",
            name: "延边朝鲜族自治州",
            children: [{
              code: "222401",
              name: "延吉市"
            }, {
              code: "222402",
              name: "图们市"
            }, {
              code: "222403",
              name: "敦化市"
            }, {
              code: "222404",
              name: "珲春市"
            }, {
              code: "222405",
              name: "龙井市"
            }, {
              code: "222406",
              name: "和龙市"
            }, {
              code: "222424",
              name: "汪清县"
            }, {
              code: "222426",
              name: "安图县"
            }]
          }]
        }, {
          code: "23",
          name: "黑龙江省",
          children: [{
            code: "2301",
            name: "哈尔滨市",
            children: [{
              code: "230102",
              name: "道里区"
            }, {
              code: "230103",
              name: "南岗区"
            }, {
              code: "230104",
              name: "道外区"
            }, {
              code: "230108",
              name: "平房区"
            }, {
              code: "230109",
              name: "松北区"
            }, {
              code: "230110",
              name: "香坊区"
            }, {
              code: "230111",
              name: "呼兰区"
            }, {
              code: "230112",
              name: "阿城区"
            }, {
              code: "230113",
              name: "双城区"
            }, {
              code: "230123",
              name: "依兰县"
            }, {
              code: "230124",
              name: "方正县"
            }, {
              code: "230125",
              name: "宾县"
            }, {
              code: "230126",
              name: "巴彦县"
            }, {
              code: "230127",
              name: "木兰县"
            }, {
              code: "230128",
              name: "通河县"
            }, {
              code: "230129",
              name: "延寿县"
            }, {
              code: "230183",
              name: "尚志市"
            }, {
              code: "230184",
              name: "五常市"
            }]
          }, {
            code: "2302",
            name: "齐齐哈尔市",
            children: [{
              code: "230202",
              name: "龙沙区"
            }, {
              code: "230203",
              name: "建华区"
            }, {
              code: "230204",
              name: "铁锋区"
            }, {
              code: "230205",
              name: "昂昂溪区"
            }, {
              code: "230206",
              name: "富拉尔基区"
            }, {
              code: "230207",
              name: "碾子山区"
            }, {
              code: "230208",
              name: "梅里斯达斡尔族区"
            }, {
              code: "230221",
              name: "龙江县"
            }, {
              code: "230223",
              name: "依安县"
            }, {
              code: "230224",
              name: "泰来县"
            }, {
              code: "230225",
              name: "甘南县"
            }, {
              code: "230227",
              name: "富裕县"
            }, {
              code: "230229",
              name: "克山县"
            }, {
              code: "230230",
              name: "克东县"
            }, {
              code: "230231",
              name: "拜泉县"
            }, {
              code: "230281",
              name: "讷河市"
            }]
          }, {
            code: "2303",
            name: "鸡西市",
            children: [{
              code: "230302",
              name: "鸡冠区"
            }, {
              code: "230303",
              name: "恒山区"
            }, {
              code: "230304",
              name: "滴道区"
            }, {
              code: "230305",
              name: "梨树区"
            }, {
              code: "230306",
              name: "城子河区"
            }, {
              code: "230307",
              name: "麻山区"
            }, {
              code: "230321",
              name: "鸡东县"
            }, {
              code: "230381",
              name: "虎林市"
            }, {
              code: "230382",
              name: "密山市"
            }]
          }, {
            code: "2304",
            name: "鹤岗市",
            children: [{
              code: "230402",
              name: "向阳区"
            }, {
              code: "230403",
              name: "工农区"
            }, {
              code: "230404",
              name: "南山区"
            }, {
              code: "230405",
              name: "兴安区"
            }, {
              code: "230406",
              name: "东山区"
            }, {
              code: "230407",
              name: "兴山区"
            }, {
              code: "230421",
              name: "萝北县"
            }, {
              code: "230422",
              name: "绥滨县"
            }]
          }, {
            code: "2305",
            name: "双鸭山市",
            children: [{
              code: "230502",
              name: "尖山区"
            }, {
              code: "230503",
              name: "岭东区"
            }, {
              code: "230505",
              name: "四方台区"
            }, {
              code: "230506",
              name: "宝山区"
            }, {
              code: "230521",
              name: "集贤县"
            }, {
              code: "230522",
              name: "友谊县"
            }, {
              code: "230523",
              name: "宝清县"
            }, {
              code: "230524",
              name: "饶河县"
            }]
          }, {
            code: "2306",
            name: "大庆市",
            children: [{
              code: "230602",
              name: "萨尔图区"
            }, {
              code: "230603",
              name: "龙凤区"
            }, {
              code: "230604",
              name: "让胡路区"
            }, {
              code: "230605",
              name: "红岗区"
            }, {
              code: "230606",
              name: "大同区"
            }, {
              code: "230621",
              name: "肇州县"
            }, {
              code: "230622",
              name: "肇源县"
            }, {
              code: "230623",
              name: "林甸县"
            }, {
              code: "230624",
              name: "杜尔伯特蒙古族自治县"
            }, {
              code: "230671",
              name: "大庆高新技术产业开发区"
            }]
          }, {
            code: "2307",
            name: "伊春市",
            children: [{
              code: "230717",
              name: "伊美区"
            }, {
              code: "230718",
              name: "乌翠区"
            }, {
              code: "230719",
              name: "友好区"
            }, {
              code: "230722",
              name: "嘉荫县"
            }, {
              code: "230723",
              name: "汤旺县"
            }, {
              code: "230724",
              name: "丰林县"
            }, {
              code: "230725",
              name: "大箐山县"
            }, {
              code: "230726",
              name: "南岔县"
            }, {
              code: "230751",
              name: "金林区"
            }, {
              code: "230781",
              name: "铁力市"
            }]
          }, {
            code: "2308",
            name: "佳木斯市",
            children: [{
              code: "230803",
              name: "向阳区"
            }, {
              code: "230804",
              name: "前进区"
            }, {
              code: "230805",
              name: "东风区"
            }, {
              code: "230811",
              name: "郊区"
            }, {
              code: "230822",
              name: "桦南县"
            }, {
              code: "230826",
              name: "桦川县"
            }, {
              code: "230828",
              name: "汤原县"
            }, {
              code: "230881",
              name: "同江市"
            }, {
              code: "230882",
              name: "富锦市"
            }, {
              code: "230883",
              name: "抚远市"
            }]
          }, {
            code: "2309",
            name: "七台河市",
            children: [{
              code: "230902",
              name: "新兴区"
            }, {
              code: "230903",
              name: "桃山区"
            }, {
              code: "230904",
              name: "茄子河区"
            }, {
              code: "230921",
              name: "勃利县"
            }]
          }, {
            code: "2310",
            name: "牡丹江市",
            children: [{
              code: "231002",
              name: "东安区"
            }, {
              code: "231003",
              name: "阳明区"
            }, {
              code: "231004",
              name: "爱民区"
            }, {
              code: "231005",
              name: "西安区"
            }, {
              code: "231025",
              name: "林口县"
            }, {
              code: "231081",
              name: "绥芬河市"
            }, {
              code: "231083",
              name: "海林市"
            }, {
              code: "231084",
              name: "宁安市"
            }, {
              code: "231085",
              name: "穆棱市"
            }, {
              code: "231086",
              name: "东宁市"
            }]
          }, {
            code: "2311",
            name: "黑河市",
            children: [{
              code: "231102",
              name: "爱辉区"
            }, {
              code: "231123",
              name: "逊克县"
            }, {
              code: "231124",
              name: "孙吴县"
            }, {
              code: "231181",
              name: "北安市"
            }, {
              code: "231182",
              name: "五大连池市"
            }, {
              code: "231183",
              name: "嫩江市"
            }]
          }, {
            code: "2312",
            name: "绥化市",
            children: [{
              code: "231202",
              name: "北林区"
            }, {
              code: "231221",
              name: "望奎县"
            }, {
              code: "231222",
              name: "兰西县"
            }, {
              code: "231223",
              name: "青冈县"
            }, {
              code: "231224",
              name: "庆安县"
            }, {
              code: "231225",
              name: "明水县"
            }, {
              code: "231226",
              name: "绥棱县"
            }, {
              code: "231281",
              name: "安达市"
            }, {
              code: "231282",
              name: "肇东市"
            }, {
              code: "231283",
              name: "海伦市"
            }]
          }, {
            code: "2327",
            name: "大兴安岭地区",
            children: [{
              code: "232701",
              name: "漠河市"
            }, {
              code: "232721",
              name: "呼玛县"
            }, {
              code: "232722",
              name: "塔河县"
            }, {
              code: "232761",
              name: "加格达奇区"
            }, {
              code: "232762",
              name: "松岭区"
            }, {
              code: "232763",
              name: "新林区"
            }, {
              code: "232764",
              name: "呼中区"
            }]
          }]
        }, {
          code: "31",
          name: "上海市",
          children: [{
            code: "3101",
            name: "市辖区",
            children: [{
              code: "310101",
              name: "黄浦区"
            }, {
              code: "310104",
              name: "徐汇区"
            }, {
              code: "310105",
              name: "长宁区"
            }, {
              code: "310106",
              name: "静安区"
            }, {
              code: "310107",
              name: "普陀区"
            }, {
              code: "310109",
              name: "虹口区"
            }, {
              code: "310110",
              name: "杨浦区"
            }, {
              code: "310112",
              name: "闵行区"
            }, {
              code: "310113",
              name: "宝山区"
            }, {
              code: "310114",
              name: "嘉定区"
            }, {
              code: "310115",
              name: "浦东新区"
            }, {
              code: "310116",
              name: "金山区"
            }, {
              code: "310117",
              name: "松江区"
            }, {
              code: "310118",
              name: "青浦区"
            }, {
              code: "310120",
              name: "奉贤区"
            }, {
              code: "310151",
              name: "崇明区"
            }]
          }]
        }, {
          code: "32",
          name: "江苏省",
          children: [{
            code: "3201",
            name: "南京市",
            children: [{
              code: "320102",
              name: "玄武区"
            }, {
              code: "320104",
              name: "秦淮区"
            }, {
              code: "320105",
              name: "建邺区"
            }, {
              code: "320106",
              name: "鼓楼区"
            }, {
              code: "320111",
              name: "浦口区"
            }, {
              code: "320113",
              name: "栖霞区"
            }, {
              code: "320114",
              name: "雨花台区"
            }, {
              code: "320115",
              name: "江宁区"
            }, {
              code: "320116",
              name: "六合区"
            }, {
              code: "320117",
              name: "溧水区"
            }, {
              code: "320118",
              name: "高淳区"
            }]
          }, {
            code: "3202",
            name: "无锡市",
            children: [{
              code: "320205",
              name: "锡山区"
            }, {
              code: "320206",
              name: "惠山区"
            }, {
              code: "320211",
              name: "滨湖区"
            }, {
              code: "320213",
              name: "梁溪区"
            }, {
              code: "320214",
              name: "新吴区"
            }, {
              code: "320281",
              name: "江阴市"
            }, {
              code: "320282",
              name: "宜兴市"
            }]
          }, {
            code: "3203",
            name: "徐州市",
            children: [{
              code: "320302",
              name: "鼓楼区"
            }, {
              code: "320303",
              name: "云龙区"
            }, {
              code: "320305",
              name: "贾汪区"
            }, {
              code: "320311",
              name: "泉山区"
            }, {
              code: "320312",
              name: "铜山区"
            }, {
              code: "320321",
              name: "丰县"
            }, {
              code: "320322",
              name: "沛县"
            }, {
              code: "320324",
              name: "睢宁县"
            }, {
              code: "320371",
              name: "徐州经济技术开发区"
            }, {
              code: "320381",
              name: "新沂市"
            }, {
              code: "320382",
              name: "邳州市"
            }]
          }, {
            code: "3204",
            name: "常州市",
            children: [{
              code: "320402",
              name: "天宁区"
            }, {
              code: "320404",
              name: "钟楼区"
            }, {
              code: "320411",
              name: "新北区"
            }, {
              code: "320412",
              name: "武进区"
            }, {
              code: "320413",
              name: "金坛区"
            }, {
              code: "320481",
              name: "溧阳市"
            }]
          }, {
            code: "3205",
            name: "苏州市",
            children: [{
              code: "320505",
              name: "虎丘区"
            }, {
              code: "320506",
              name: "吴中区"
            }, {
              code: "320507",
              name: "相城区"
            }, {
              code: "320508",
              name: "姑苏区"
            }, {
              code: "320509",
              name: "吴江区"
            }, {
              code: "320576",
              name: "苏州工业园区"
            }, {
              code: "320581",
              name: "常熟市"
            }, {
              code: "320582",
              name: "张家港市"
            }, {
              code: "320583",
              name: "昆山市"
            }, {
              code: "320585",
              name: "太仓市"
            }]
          }, {
            code: "3206",
            name: "南通市",
            children: [{
              code: "320612",
              name: "通州区"
            }, {
              code: "320613",
              name: "崇川区"
            }, {
              code: "320614",
              name: "海门区"
            }, {
              code: "320623",
              name: "如东县"
            }, {
              code: "320671",
              name: "南通经济技术开发区"
            }, {
              code: "320681",
              name: "启东市"
            }, {
              code: "320682",
              name: "如皋市"
            }, {
              code: "320685",
              name: "海安市"
            }]
          }, {
            code: "3207",
            name: "连云港市",
            children: [{
              code: "320703",
              name: "连云区"
            }, {
              code: "320706",
              name: "海州区"
            }, {
              code: "320707",
              name: "赣榆区"
            }, {
              code: "320722",
              name: "东海县"
            }, {
              code: "320723",
              name: "灌云县"
            }, {
              code: "320724",
              name: "灌南县"
            }, {
              code: "320771",
              name: "连云港经济技术开发区"
            }]
          }, {
            code: "3208",
            name: "淮安市",
            children: [{
              code: "320803",
              name: "淮安区"
            }, {
              code: "320804",
              name: "淮阴区"
            }, {
              code: "320812",
              name: "清江浦区"
            }, {
              code: "320813",
              name: "洪泽区"
            }, {
              code: "320826",
              name: "涟水县"
            }, {
              code: "320830",
              name: "盱眙县"
            }, {
              code: "320831",
              name: "金湖县"
            }, {
              code: "320871",
              name: "淮安经济技术开发区"
            }]
          }, {
            code: "3209",
            name: "盐城市",
            children: [{
              code: "320902",
              name: "亭湖区"
            }, {
              code: "320903",
              name: "盐都区"
            }, {
              code: "320904",
              name: "大丰区"
            }, {
              code: "320921",
              name: "响水县"
            }, {
              code: "320922",
              name: "滨海县"
            }, {
              code: "320923",
              name: "阜宁县"
            }, {
              code: "320924",
              name: "射阳县"
            }, {
              code: "320925",
              name: "建湖县"
            }, {
              code: "320971",
              name: "盐城经济技术开发区"
            }, {
              code: "320981",
              name: "东台市"
            }]
          }, {
            code: "3210",
            name: "扬州市",
            children: [{
              code: "321002",
              name: "广陵区"
            }, {
              code: "321003",
              name: "邗江区"
            }, {
              code: "321012",
              name: "江都区"
            }, {
              code: "321023",
              name: "宝应县"
            }, {
              code: "321071",
              name: "扬州经济技术开发区"
            }, {
              code: "321081",
              name: "仪征市"
            }, {
              code: "321084",
              name: "高邮市"
            }]
          }, {
            code: "3211",
            name: "镇江市",
            children: [{
              code: "321102",
              name: "京口区"
            }, {
              code: "321111",
              name: "润州区"
            }, {
              code: "321112",
              name: "丹徒区"
            }, {
              code: "321171",
              name: "镇江新区"
            }, {
              code: "321181",
              name: "丹阳市"
            }, {
              code: "321182",
              name: "扬中市"
            }, {
              code: "321183",
              name: "句容市"
            }]
          }, {
            code: "3212",
            name: "泰州市",
            children: [{
              code: "321202",
              name: "海陵区"
            }, {
              code: "321203",
              name: "高港区"
            }, {
              code: "321204",
              name: "姜堰区"
            }, {
              code: "321281",
              name: "兴化市"
            }, {
              code: "321282",
              name: "靖江市"
            }, {
              code: "321283",
              name: "泰兴市"
            }]
          }, {
            code: "3213",
            name: "宿迁市",
            children: [{
              code: "321302",
              name: "宿城区"
            }, {
              code: "321311",
              name: "宿豫区"
            }, {
              code: "321322",
              name: "沭阳县"
            }, {
              code: "321323",
              name: "泗阳县"
            }, {
              code: "321324",
              name: "泗洪县"
            }, {
              code: "321371",
              name: "宿迁经济技术开发区"
            }]
          }]
        }, {
          code: "33",
          name: "浙江省",
          children: [{
            code: "3301",
            name: "杭州市",
            children: [{
              code: "330102",
              name: "上城区"
            }, {
              code: "330105",
              name: "拱墅区"
            }, {
              code: "330106",
              name: "西湖区"
            }, {
              code: "330108",
              name: "滨江区"
            }, {
              code: "330109",
              name: "萧山区"
            }, {
              code: "330110",
              name: "余杭区"
            }, {
              code: "330111",
              name: "富阳区"
            }, {
              code: "330112",
              name: "临安区"
            }, {
              code: "330113",
              name: "临平区"
            }, {
              code: "330114",
              name: "钱塘区"
            }, {
              code: "330122",
              name: "桐庐县"
            }, {
              code: "330127",
              name: "淳安县"
            }, {
              code: "330182",
              name: "建德市"
            }]
          }, {
            code: "3302",
            name: "宁波市",
            children: [{
              code: "330203",
              name: "海曙区"
            }, {
              code: "330205",
              name: "江北区"
            }, {
              code: "330206",
              name: "北仑区"
            }, {
              code: "330211",
              name: "镇海区"
            }, {
              code: "330212",
              name: "鄞州区"
            }, {
              code: "330213",
              name: "奉化区"
            }, {
              code: "330225",
              name: "象山县"
            }, {
              code: "330226",
              name: "宁海县"
            }, {
              code: "330281",
              name: "余姚市"
            }, {
              code: "330282",
              name: "慈溪市"
            }]
          }, {
            code: "3303",
            name: "温州市",
            children: [{
              code: "330302",
              name: "鹿城区"
            }, {
              code: "330303",
              name: "龙湾区"
            }, {
              code: "330304",
              name: "瓯海区"
            }, {
              code: "330305",
              name: "洞头区"
            }, {
              code: "330324",
              name: "永嘉县"
            }, {
              code: "330326",
              name: "平阳县"
            }, {
              code: "330327",
              name: "苍南县"
            }, {
              code: "330328",
              name: "文成县"
            }, {
              code: "330329",
              name: "泰顺县"
            }, {
              code: "330381",
              name: "瑞安市"
            }, {
              code: "330382",
              name: "乐清市"
            }, {
              code: "330383",
              name: "龙港市"
            }]
          }, {
            code: "3304",
            name: "嘉兴市",
            children: [{
              code: "330402",
              name: "南湖区"
            }, {
              code: "330411",
              name: "秀洲区"
            }, {
              code: "330421",
              name: "嘉善县"
            }, {
              code: "330424",
              name: "海盐县"
            }, {
              code: "330481",
              name: "海宁市"
            }, {
              code: "330482",
              name: "平湖市"
            }, {
              code: "330483",
              name: "桐乡市"
            }]
          }, {
            code: "3305",
            name: "湖州市",
            children: [{
              code: "330502",
              name: "吴兴区"
            }, {
              code: "330503",
              name: "南浔区"
            }, {
              code: "330521",
              name: "德清县"
            }, {
              code: "330522",
              name: "长兴县"
            }, {
              code: "330523",
              name: "安吉县"
            }]
          }, {
            code: "3306",
            name: "绍兴市",
            children: [{
              code: "330602",
              name: "越城区"
            }, {
              code: "330603",
              name: "柯桥区"
            }, {
              code: "330604",
              name: "上虞区"
            }, {
              code: "330624",
              name: "新昌县"
            }, {
              code: "330681",
              name: "诸暨市"
            }, {
              code: "330683",
              name: "嵊州市"
            }]
          }, {
            code: "3307",
            name: "金华市",
            children: [{
              code: "330702",
              name: "婺城区"
            }, {
              code: "330703",
              name: "金东区"
            }, {
              code: "330723",
              name: "武义县"
            }, {
              code: "330726",
              name: "浦江县"
            }, {
              code: "330727",
              name: "磐安县"
            }, {
              code: "330781",
              name: "兰溪市"
            }, {
              code: "330782",
              name: "义乌市"
            }, {
              code: "330783",
              name: "东阳市"
            }, {
              code: "330784",
              name: "永康市"
            }]
          }, {
            code: "3308",
            name: "衢州市",
            children: [{
              code: "330802",
              name: "柯城区"
            }, {
              code: "330803",
              name: "衢江区"
            }, {
              code: "330822",
              name: "常山县"
            }, {
              code: "330824",
              name: "开化县"
            }, {
              code: "330825",
              name: "龙游县"
            }, {
              code: "330881",
              name: "江山市"
            }]
          }, {
            code: "3309",
            name: "舟山市",
            children: [{
              code: "330902",
              name: "定海区"
            }, {
              code: "330903",
              name: "普陀区"
            }, {
              code: "330921",
              name: "岱山县"
            }, {
              code: "330922",
              name: "嵊泗县"
            }]
          }, {
            code: "3310",
            name: "台州市",
            children: [{
              code: "331002",
              name: "椒江区"
            }, {
              code: "331003",
              name: "黄岩区"
            }, {
              code: "331004",
              name: "路桥区"
            }, {
              code: "331022",
              name: "三门县"
            }, {
              code: "331023",
              name: "天台县"
            }, {
              code: "331024",
              name: "仙居县"
            }, {
              code: "331081",
              name: "温岭市"
            }, {
              code: "331082",
              name: "临海市"
            }, {
              code: "331083",
              name: "玉环市"
            }]
          }, {
            code: "3311",
            name: "丽水市",
            children: [{
              code: "331102",
              name: "莲都区"
            }, {
              code: "331121",
              name: "青田县"
            }, {
              code: "331122",
              name: "缙云县"
            }, {
              code: "331123",
              name: "遂昌县"
            }, {
              code: "331124",
              name: "松阳县"
            }, {
              code: "331125",
              name: "云和县"
            }, {
              code: "331126",
              name: "庆元县"
            }, {
              code: "331127",
              name: "景宁畲族自治县"
            }, {
              code: "331181",
              name: "龙泉市"
            }]
          }]
        }, {
          code: "34",
          name: "安徽省",
          children: [{
            code: "3401",
            name: "合肥市",
            children: [{
              code: "340102",
              name: "瑶海区"
            }, {
              code: "340103",
              name: "庐阳区"
            }, {
              code: "340104",
              name: "蜀山区"
            }, {
              code: "340111",
              name: "包河区"
            }, {
              code: "340121",
              name: "长丰县"
            }, {
              code: "340122",
              name: "肥东县"
            }, {
              code: "340123",
              name: "肥西县"
            }, {
              code: "340124",
              name: "庐江县"
            }, {
              code: "340176",
              name: "合肥高新技术产业开发区"
            }, {
              code: "340177",
              name: "合肥经济技术开发区"
            }, {
              code: "340178",
              name: "合肥新站高新技术产业开发区"
            }, {
              code: "340181",
              name: "巢湖市"
            }]
          }, {
            code: "3402",
            name: "芜湖市",
            children: [{
              code: "340202",
              name: "镜湖区"
            }, {
              code: "340207",
              name: "鸠江区"
            }, {
              code: "340209",
              name: "弋江区"
            }, {
              code: "340210",
              name: "湾沚区"
            }, {
              code: "340212",
              name: "繁昌区"
            }, {
              code: "340223",
              name: "南陵县"
            }, {
              code: "340271",
              name: "芜湖经济技术开发区"
            }, {
              code: "340272",
              name: "安徽芜湖三山经济开发区"
            }, {
              code: "340281",
              name: "无为市"
            }]
          }, {
            code: "3403",
            name: "蚌埠市",
            children: [{
              code: "340302",
              name: "龙子湖区"
            }, {
              code: "340303",
              name: "蚌山区"
            }, {
              code: "340304",
              name: "禹会区"
            }, {
              code: "340311",
              name: "淮上区"
            }, {
              code: "340321",
              name: "怀远县"
            }, {
              code: "340322",
              name: "五河县"
            }, {
              code: "340323",
              name: "固镇县"
            }, {
              code: "340371",
              name: "蚌埠市高新技术开发区"
            }, {
              code: "340372",
              name: "蚌埠市经济开发区"
            }]
          }, {
            code: "3404",
            name: "淮南市",
            children: [{
              code: "340402",
              name: "大通区"
            }, {
              code: "340403",
              name: "田家庵区"
            }, {
              code: "340404",
              name: "谢家集区"
            }, {
              code: "340405",
              name: "八公山区"
            }, {
              code: "340406",
              name: "潘集区"
            }, {
              code: "340421",
              name: "凤台县"
            }, {
              code: "340422",
              name: "寿县"
            }]
          }, {
            code: "3405",
            name: "马鞍山市",
            children: [{
              code: "340503",
              name: "花山区"
            }, {
              code: "340504",
              name: "雨山区"
            }, {
              code: "340506",
              name: "博望区"
            }, {
              code: "340521",
              name: "当涂县"
            }, {
              code: "340522",
              name: "含山县"
            }, {
              code: "340523",
              name: "和县"
            }]
          }, {
            code: "3406",
            name: "淮北市",
            children: [{
              code: "340602",
              name: "杜集区"
            }, {
              code: "340603",
              name: "相山区"
            }, {
              code: "340604",
              name: "烈山区"
            }, {
              code: "340621",
              name: "濉溪县"
            }]
          }, {
            code: "3407",
            name: "铜陵市",
            children: [{
              code: "340705",
              name: "铜官区"
            }, {
              code: "340706",
              name: "义安区"
            }, {
              code: "340711",
              name: "郊区"
            }, {
              code: "340722",
              name: "枞阳县"
            }]
          }, {
            code: "3408",
            name: "安庆市",
            children: [{
              code: "340802",
              name: "迎江区"
            }, {
              code: "340803",
              name: "大观区"
            }, {
              code: "340811",
              name: "宜秀区"
            }, {
              code: "340822",
              name: "怀宁县"
            }, {
              code: "340825",
              name: "太湖县"
            }, {
              code: "340826",
              name: "宿松县"
            }, {
              code: "340827",
              name: "望江县"
            }, {
              code: "340828",
              name: "岳西县"
            }, {
              code: "340871",
              name: "安徽安庆经济开发区"
            }, {
              code: "340881",
              name: "桐城市"
            }, {
              code: "340882",
              name: "潜山市"
            }]
          }, {
            code: "3410",
            name: "黄山市",
            children: [{
              code: "341002",
              name: "屯溪区"
            }, {
              code: "341003",
              name: "黄山区"
            }, {
              code: "341004",
              name: "徽州区"
            }, {
              code: "341021",
              name: "歙县"
            }, {
              code: "341022",
              name: "休宁县"
            }, {
              code: "341023",
              name: "黟县"
            }, {
              code: "341024",
              name: "祁门县"
            }]
          }, {
            code: "3411",
            name: "滁州市",
            children: [{
              code: "341102",
              name: "琅琊区"
            }, {
              code: "341103",
              name: "南谯区"
            }, {
              code: "341122",
              name: "来安县"
            }, {
              code: "341124",
              name: "全椒县"
            }, {
              code: "341125",
              name: "定远县"
            }, {
              code: "341126",
              name: "凤阳县"
            }, {
              code: "341171",
              name: "中新苏滁高新技术产业开发区"
            }, {
              code: "341172",
              name: "滁州经济技术开发区"
            }, {
              code: "341181",
              name: "天长市"
            }, {
              code: "341182",
              name: "明光市"
            }]
          }, {
            code: "3412",
            name: "阜阳市",
            children: [{
              code: "341202",
              name: "颍州区"
            }, {
              code: "341203",
              name: "颍东区"
            }, {
              code: "341204",
              name: "颍泉区"
            }, {
              code: "341221",
              name: "临泉县"
            }, {
              code: "341222",
              name: "太和县"
            }, {
              code: "341225",
              name: "阜南县"
            }, {
              code: "341226",
              name: "颍上县"
            }, {
              code: "341271",
              name: "阜阳合肥现代产业园区"
            }, {
              code: "341272",
              name: "阜阳经济技术开发区"
            }, {
              code: "341282",
              name: "界首市"
            }]
          }, {
            code: "3413",
            name: "宿州市",
            children: [{
              code: "341302",
              name: "埇桥区"
            }, {
              code: "341321",
              name: "砀山县"
            }, {
              code: "341322",
              name: "萧县"
            }, {
              code: "341323",
              name: "灵璧县"
            }, {
              code: "341324",
              name: "泗县"
            }, {
              code: "341371",
              name: "宿州马鞍山现代产业园区"
            }, {
              code: "341372",
              name: "宿州经济技术开发区"
            }]
          }, {
            code: "3415",
            name: "六安市",
            children: [{
              code: "341502",
              name: "金安区"
            }, {
              code: "341503",
              name: "裕安区"
            }, {
              code: "341504",
              name: "叶集区"
            }, {
              code: "341522",
              name: "霍邱县"
            }, {
              code: "341523",
              name: "舒城县"
            }, {
              code: "341524",
              name: "金寨县"
            }, {
              code: "341525",
              name: "霍山县"
            }]
          }, {
            code: "3416",
            name: "亳州市",
            children: [{
              code: "341602",
              name: "谯城区"
            }, {
              code: "341621",
              name: "涡阳县"
            }, {
              code: "341622",
              name: "蒙城县"
            }, {
              code: "341623",
              name: "利辛县"
            }]
          }, {
            code: "3417",
            name: "池州市",
            children: [{
              code: "341702",
              name: "贵池区"
            }, {
              code: "341721",
              name: "东至县"
            }, {
              code: "341722",
              name: "石台县"
            }, {
              code: "341723",
              name: "青阳县"
            }]
          }, {
            code: "3418",
            name: "宣城市",
            children: [{
              code: "341802",
              name: "宣州区"
            }, {
              code: "341821",
              name: "郎溪县"
            }, {
              code: "341823",
              name: "泾县"
            }, {
              code: "341824",
              name: "绩溪县"
            }, {
              code: "341825",
              name: "旌德县"
            }, {
              code: "341871",
              name: "宣城市经济开发区"
            }, {
              code: "341881",
              name: "宁国市"
            }, {
              code: "341882",
              name: "广德市"
            }]
          }]
        }, {
          code: "35",
          name: "福建省",
          children: [{
            code: "3501",
            name: "福州市",
            children: [{
              code: "350102",
              name: "鼓楼区"
            }, {
              code: "350103",
              name: "台江区"
            }, {
              code: "350104",
              name: "仓山区"
            }, {
              code: "350105",
              name: "马尾区"
            }, {
              code: "350111",
              name: "晋安区"
            }, {
              code: "350112",
              name: "长乐区"
            }, {
              code: "350121",
              name: "闽侯县"
            }, {
              code: "350122",
              name: "连江县"
            }, {
              code: "350123",
              name: "罗源县"
            }, {
              code: "350124",
              name: "闽清县"
            }, {
              code: "350125",
              name: "永泰县"
            }, {
              code: "350128",
              name: "平潭县"
            }, {
              code: "350181",
              name: "福清市"
            }]
          }, {
            code: "3502",
            name: "厦门市",
            children: [{
              code: "350203",
              name: "思明区"
            }, {
              code: "350205",
              name: "海沧区"
            }, {
              code: "350206",
              name: "湖里区"
            }, {
              code: "350211",
              name: "集美区"
            }, {
              code: "350212",
              name: "同安区"
            }, {
              code: "350213",
              name: "翔安区"
            }]
          }, {
            code: "3503",
            name: "莆田市",
            children: [{
              code: "350302",
              name: "城厢区"
            }, {
              code: "350303",
              name: "涵江区"
            }, {
              code: "350304",
              name: "荔城区"
            }, {
              code: "350305",
              name: "秀屿区"
            }, {
              code: "350322",
              name: "仙游县"
            }]
          }, {
            code: "3504",
            name: "三明市",
            children: [{
              code: "350404",
              name: "三元区"
            }, {
              code: "350405",
              name: "沙县区"
            }, {
              code: "350421",
              name: "明溪县"
            }, {
              code: "350423",
              name: "清流县"
            }, {
              code: "350424",
              name: "宁化县"
            }, {
              code: "350425",
              name: "大田县"
            }, {
              code: "350426",
              name: "尤溪县"
            }, {
              code: "350428",
              name: "将乐县"
            }, {
              code: "350429",
              name: "泰宁县"
            }, {
              code: "350430",
              name: "建宁县"
            }, {
              code: "350481",
              name: "永安市"
            }]
          }, {
            code: "3505",
            name: "泉州市",
            children: [{
              code: "350502",
              name: "鲤城区"
            }, {
              code: "350503",
              name: "丰泽区"
            }, {
              code: "350504",
              name: "洛江区"
            }, {
              code: "350505",
              name: "泉港区"
            }, {
              code: "350521",
              name: "惠安县"
            }, {
              code: "350524",
              name: "安溪县"
            }, {
              code: "350525",
              name: "永春县"
            }, {
              code: "350526",
              name: "德化县"
            }, {
              code: "350527",
              name: "金门县"
            }, {
              code: "350581",
              name: "石狮市"
            }, {
              code: "350582",
              name: "晋江市"
            }, {
              code: "350583",
              name: "南安市"
            }]
          }, {
            code: "3506",
            name: "漳州市",
            children: [{
              code: "350602",
              name: "芗城区"
            }, {
              code: "350603",
              name: "龙文区"
            }, {
              code: "350604",
              name: "龙海区"
            }, {
              code: "350605",
              name: "长泰区"
            }, {
              code: "350622",
              name: "云霄县"
            }, {
              code: "350623",
              name: "漳浦县"
            }, {
              code: "350624",
              name: "诏安县"
            }, {
              code: "350626",
              name: "东山县"
            }, {
              code: "350627",
              name: "南靖县"
            }, {
              code: "350628",
              name: "平和县"
            }, {
              code: "350629",
              name: "华安县"
            }]
          }, {
            code: "3507",
            name: "南平市",
            children: [{
              code: "350702",
              name: "延平区"
            }, {
              code: "350703",
              name: "建阳区"
            }, {
              code: "350721",
              name: "顺昌县"
            }, {
              code: "350722",
              name: "浦城县"
            }, {
              code: "350723",
              name: "光泽县"
            }, {
              code: "350724",
              name: "松溪县"
            }, {
              code: "350725",
              name: "政和县"
            }, {
              code: "350781",
              name: "邵武市"
            }, {
              code: "350782",
              name: "武夷山市"
            }, {
              code: "350783",
              name: "建瓯市"
            }]
          }, {
            code: "3508",
            name: "龙岩市",
            children: [{
              code: "350802",
              name: "新罗区"
            }, {
              code: "350803",
              name: "永定区"
            }, {
              code: "350821",
              name: "长汀县"
            }, {
              code: "350823",
              name: "上杭县"
            }, {
              code: "350824",
              name: "武平县"
            }, {
              code: "350825",
              name: "连城县"
            }, {
              code: "350881",
              name: "漳平市"
            }]
          }, {
            code: "3509",
            name: "宁德市",
            children: [{
              code: "350902",
              name: "蕉城区"
            }, {
              code: "350921",
              name: "霞浦县"
            }, {
              code: "350922",
              name: "古田县"
            }, {
              code: "350923",
              name: "屏南县"
            }, {
              code: "350924",
              name: "寿宁县"
            }, {
              code: "350925",
              name: "周宁县"
            }, {
              code: "350926",
              name: "柘荣县"
            }, {
              code: "350981",
              name: "福安市"
            }, {
              code: "350982",
              name: "福鼎市"
            }]
          }]
        }, {
          code: "36",
          name: "江西省",
          children: [{
            code: "3601",
            name: "南昌市",
            children: [{
              code: "360102",
              name: "东湖区"
            }, {
              code: "360103",
              name: "西湖区"
            }, {
              code: "360104",
              name: "青云谱区"
            }, {
              code: "360111",
              name: "青山湖区"
            }, {
              code: "360112",
              name: "新建区"
            }, {
              code: "360113",
              name: "红谷滩区"
            }, {
              code: "360121",
              name: "南昌县"
            }, {
              code: "360123",
              name: "安义县"
            }, {
              code: "360124",
              name: "进贤县"
            }]
          }, {
            code: "3602",
            name: "景德镇市",
            children: [{
              code: "360202",
              name: "昌江区"
            }, {
              code: "360203",
              name: "珠山区"
            }, {
              code: "360222",
              name: "浮梁县"
            }, {
              code: "360281",
              name: "乐平市"
            }]
          }, {
            code: "3603",
            name: "萍乡市",
            children: [{
              code: "360302",
              name: "安源区"
            }, {
              code: "360313",
              name: "湘东区"
            }, {
              code: "360321",
              name: "莲花县"
            }, {
              code: "360322",
              name: "上栗县"
            }, {
              code: "360323",
              name: "芦溪县"
            }]
          }, {
            code: "3604",
            name: "九江市",
            children: [{
              code: "360402",
              name: "濂溪区"
            }, {
              code: "360403",
              name: "浔阳区"
            }, {
              code: "360404",
              name: "柴桑区"
            }, {
              code: "360423",
              name: "武宁县"
            }, {
              code: "360424",
              name: "修水县"
            }, {
              code: "360425",
              name: "永修县"
            }, {
              code: "360426",
              name: "德安县"
            }, {
              code: "360428",
              name: "都昌县"
            }, {
              code: "360429",
              name: "湖口县"
            }, {
              code: "360430",
              name: "彭泽县"
            }, {
              code: "360481",
              name: "瑞昌市"
            }, {
              code: "360482",
              name: "共青城市"
            }, {
              code: "360483",
              name: "庐山市"
            }]
          }, {
            code: "3605",
            name: "新余市",
            children: [{
              code: "360502",
              name: "渝水区"
            }, {
              code: "360521",
              name: "分宜县"
            }]
          }, {
            code: "3606",
            name: "鹰潭市",
            children: [{
              code: "360602",
              name: "月湖区"
            }, {
              code: "360603",
              name: "余江区"
            }, {
              code: "360681",
              name: "贵溪市"
            }]
          }, {
            code: "3607",
            name: "赣州市",
            children: [{
              code: "360702",
              name: "章贡区"
            }, {
              code: "360703",
              name: "南康区"
            }, {
              code: "360704",
              name: "赣县区"
            }, {
              code: "360722",
              name: "信丰县"
            }, {
              code: "360723",
              name: "大余县"
            }, {
              code: "360724",
              name: "上犹县"
            }, {
              code: "360725",
              name: "崇义县"
            }, {
              code: "360726",
              name: "安远县"
            }, {
              code: "360728",
              name: "定南县"
            }, {
              code: "360729",
              name: "全南县"
            }, {
              code: "360730",
              name: "宁都县"
            }, {
              code: "360731",
              name: "于都县"
            }, {
              code: "360732",
              name: "兴国县"
            }, {
              code: "360733",
              name: "会昌县"
            }, {
              code: "360734",
              name: "寻乌县"
            }, {
              code: "360735",
              name: "石城县"
            }, {
              code: "360781",
              name: "瑞金市"
            }, {
              code: "360783",
              name: "龙南市"
            }]
          }, {
            code: "3608",
            name: "吉安市",
            children: [{
              code: "360802",
              name: "吉州区"
            }, {
              code: "360803",
              name: "青原区"
            }, {
              code: "360821",
              name: "吉安县"
            }, {
              code: "360822",
              name: "吉水县"
            }, {
              code: "360823",
              name: "峡江县"
            }, {
              code: "360824",
              name: "新干县"
            }, {
              code: "360825",
              name: "永丰县"
            }, {
              code: "360826",
              name: "泰和县"
            }, {
              code: "360827",
              name: "遂川县"
            }, {
              code: "360828",
              name: "万安县"
            }, {
              code: "360829",
              name: "安福县"
            }, {
              code: "360830",
              name: "永新县"
            }, {
              code: "360881",
              name: "井冈山市"
            }]
          }, {
            code: "3609",
            name: "宜春市",
            children: [{
              code: "360902",
              name: "袁州区"
            }, {
              code: "360921",
              name: "奉新县"
            }, {
              code: "360922",
              name: "万载县"
            }, {
              code: "360923",
              name: "上高县"
            }, {
              code: "360924",
              name: "宜丰县"
            }, {
              code: "360925",
              name: "靖安县"
            }, {
              code: "360926",
              name: "铜鼓县"
            }, {
              code: "360981",
              name: "丰城市"
            }, {
              code: "360982",
              name: "樟树市"
            }, {
              code: "360983",
              name: "高安市"
            }]
          }, {
            code: "3610",
            name: "抚州市",
            children: [{
              code: "361002",
              name: "临川区"
            }, {
              code: "361003",
              name: "东乡区"
            }, {
              code: "361021",
              name: "南城县"
            }, {
              code: "361022",
              name: "黎川县"
            }, {
              code: "361023",
              name: "南丰县"
            }, {
              code: "361024",
              name: "崇仁县"
            }, {
              code: "361025",
              name: "乐安县"
            }, {
              code: "361026",
              name: "宜黄县"
            }, {
              code: "361027",
              name: "金溪县"
            }, {
              code: "361028",
              name: "资溪县"
            }, {
              code: "361030",
              name: "广昌县"
            }]
          }, {
            code: "3611",
            name: "上饶市",
            children: [{
              code: "361102",
              name: "信州区"
            }, {
              code: "361103",
              name: "广丰区"
            }, {
              code: "361104",
              name: "广信区"
            }, {
              code: "361123",
              name: "玉山县"
            }, {
              code: "361124",
              name: "铅山县"
            }, {
              code: "361125",
              name: "横峰县"
            }, {
              code: "361126",
              name: "弋阳县"
            }, {
              code: "361127",
              name: "余干县"
            }, {
              code: "361128",
              name: "鄱阳县"
            }, {
              code: "361129",
              name: "万年县"
            }, {
              code: "361130",
              name: "婺源县"
            }, {
              code: "361181",
              name: "德兴市"
            }]
          }]
        }, {
          code: "37",
          name: "山东省",
          children: [{
            code: "3701",
            name: "济南市",
            children: [{
              code: "370102",
              name: "历下区"
            }, {
              code: "370103",
              name: "市中区"
            }, {
              code: "370104",
              name: "槐荫区"
            }, {
              code: "370105",
              name: "天桥区"
            }, {
              code: "370112",
              name: "历城区"
            }, {
              code: "370113",
              name: "长清区"
            }, {
              code: "370114",
              name: "章丘区"
            }, {
              code: "370115",
              name: "济阳区"
            }, {
              code: "370116",
              name: "莱芜区"
            }, {
              code: "370117",
              name: "钢城区"
            }, {
              code: "370124",
              name: "平阴县"
            }, {
              code: "370126",
              name: "商河县"
            }, {
              code: "370176",
              name: "济南高新技术产业开发区"
            }]
          }, {
            code: "3702",
            name: "青岛市",
            children: [{
              code: "370202",
              name: "市南区"
            }, {
              code: "370203",
              name: "市北区"
            }, {
              code: "370211",
              name: "黄岛区"
            }, {
              code: "370212",
              name: "崂山区"
            }, {
              code: "370213",
              name: "李沧区"
            }, {
              code: "370214",
              name: "城阳区"
            }, {
              code: "370215",
              name: "即墨区"
            }, {
              code: "370281",
              name: "胶州市"
            }, {
              code: "370283",
              name: "平度市"
            }, {
              code: "370285",
              name: "莱西市"
            }]
          }, {
            code: "3703",
            name: "淄博市",
            children: [{
              code: "370302",
              name: "淄川区"
            }, {
              code: "370303",
              name: "张店区"
            }, {
              code: "370304",
              name: "博山区"
            }, {
              code: "370305",
              name: "临淄区"
            }, {
              code: "370306",
              name: "周村区"
            }, {
              code: "370321",
              name: "桓台县"
            }, {
              code: "370322",
              name: "高青县"
            }, {
              code: "370323",
              name: "沂源县"
            }]
          }, {
            code: "3704",
            name: "枣庄市",
            children: [{
              code: "370402",
              name: "市中区"
            }, {
              code: "370403",
              name: "薛城区"
            }, {
              code: "370404",
              name: "峄城区"
            }, {
              code: "370405",
              name: "台儿庄区"
            }, {
              code: "370406",
              name: "山亭区"
            }, {
              code: "370481",
              name: "滕州市"
            }]
          }, {
            code: "3705",
            name: "东营市",
            children: [{
              code: "370502",
              name: "东营区"
            }, {
              code: "370503",
              name: "河口区"
            }, {
              code: "370505",
              name: "垦利区"
            }, {
              code: "370522",
              name: "利津县"
            }, {
              code: "370523",
              name: "广饶县"
            }, {
              code: "370571",
              name: "东营经济技术开发区"
            }, {
              code: "370572",
              name: "东营港经济开发区"
            }]
          }, {
            code: "3706",
            name: "烟台市",
            children: [{
              code: "370602",
              name: "芝罘区"
            }, {
              code: "370611",
              name: "福山区"
            }, {
              code: "370612",
              name: "牟平区"
            }, {
              code: "370613",
              name: "莱山区"
            }, {
              code: "370614",
              name: "蓬莱区"
            }, {
              code: "370671",
              name: "烟台高新技术产业开发区"
            }, {
              code: "370676",
              name: "烟台经济技术开发区"
            }, {
              code: "370681",
              name: "龙口市"
            }, {
              code: "370682",
              name: "莱阳市"
            }, {
              code: "370683",
              name: "莱州市"
            }, {
              code: "370685",
              name: "招远市"
            }, {
              code: "370686",
              name: "栖霞市"
            }, {
              code: "370687",
              name: "海阳市"
            }]
          }, {
            code: "3707",
            name: "潍坊市",
            children: [{
              code: "370702",
              name: "潍城区"
            }, {
              code: "370703",
              name: "寒亭区"
            }, {
              code: "370704",
              name: "坊子区"
            }, {
              code: "370705",
              name: "奎文区"
            }, {
              code: "370724",
              name: "临朐县"
            }, {
              code: "370725",
              name: "昌乐县"
            }, {
              code: "370772",
              name: "潍坊滨海经济技术开发区"
            }, {
              code: "370781",
              name: "青州市"
            }, {
              code: "370782",
              name: "诸城市"
            }, {
              code: "370783",
              name: "寿光市"
            }, {
              code: "370784",
              name: "安丘市"
            }, {
              code: "370785",
              name: "高密市"
            }, {
              code: "370786",
              name: "昌邑市"
            }]
          }, {
            code: "3708",
            name: "济宁市",
            children: [{
              code: "370811",
              name: "任城区"
            }, {
              code: "370812",
              name: "兖州区"
            }, {
              code: "370826",
              name: "微山县"
            }, {
              code: "370827",
              name: "鱼台县"
            }, {
              code: "370828",
              name: "金乡县"
            }, {
              code: "370829",
              name: "嘉祥县"
            }, {
              code: "370830",
              name: "汶上县"
            }, {
              code: "370831",
              name: "泗水县"
            }, {
              code: "370832",
              name: "梁山县"
            }, {
              code: "370871",
              name: "济宁高新技术产业开发区"
            }, {
              code: "370881",
              name: "曲阜市"
            }, {
              code: "370883",
              name: "邹城市"
            }]
          }, {
            code: "3709",
            name: "泰安市",
            children: [{
              code: "370902",
              name: "泰山区"
            }, {
              code: "370911",
              name: "岱岳区"
            }, {
              code: "370921",
              name: "宁阳县"
            }, {
              code: "370923",
              name: "东平县"
            }, {
              code: "370982",
              name: "新泰市"
            }, {
              code: "370983",
              name: "肥城市"
            }]
          }, {
            code: "3710",
            name: "威海市",
            children: [{
              code: "371002",
              name: "环翠区"
            }, {
              code: "371003",
              name: "文登区"
            }, {
              code: "371071",
              name: "威海火炬高技术产业开发区"
            }, {
              code: "371072",
              name: "威海经济技术开发区"
            }, {
              code: "371073",
              name: "威海临港经济技术开发区"
            }, {
              code: "371082",
              name: "荣成市"
            }, {
              code: "371083",
              name: "乳山市"
            }]
          }, {
            code: "3711",
            name: "日照市",
            children: [{
              code: "371102",
              name: "东港区"
            }, {
              code: "371103",
              name: "岚山区"
            }, {
              code: "371121",
              name: "五莲县"
            }, {
              code: "371122",
              name: "莒县"
            }, {
              code: "371171",
              name: "日照经济技术开发区"
            }]
          }, {
            code: "3713",
            name: "临沂市",
            children: [{
              code: "371302",
              name: "兰山区"
            }, {
              code: "371311",
              name: "罗庄区"
            }, {
              code: "371312",
              name: "河东区"
            }, {
              code: "371321",
              name: "沂南县"
            }, {
              code: "371322",
              name: "郯城县"
            }, {
              code: "371323",
              name: "沂水县"
            }, {
              code: "371324",
              name: "兰陵县"
            }, {
              code: "371325",
              name: "费县"
            }, {
              code: "371326",
              name: "平邑县"
            }, {
              code: "371327",
              name: "莒南县"
            }, {
              code: "371328",
              name: "蒙阴县"
            }, {
              code: "371329",
              name: "临沭县"
            }, {
              code: "371371",
              name: "临沂高新技术产业开发区"
            }]
          }, {
            code: "3714",
            name: "德州市",
            children: [{
              code: "371402",
              name: "德城区"
            }, {
              code: "371403",
              name: "陵城区"
            }, {
              code: "371422",
              name: "宁津县"
            }, {
              code: "371423",
              name: "庆云县"
            }, {
              code: "371424",
              name: "临邑县"
            }, {
              code: "371425",
              name: "齐河县"
            }, {
              code: "371426",
              name: "平原县"
            }, {
              code: "371427",
              name: "夏津县"
            }, {
              code: "371428",
              name: "武城县"
            }, {
              code: "371471",
              name: "德州天衢新区"
            }, {
              code: "371481",
              name: "乐陵市"
            }, {
              code: "371482",
              name: "禹城市"
            }]
          }, {
            code: "3715",
            name: "聊城市",
            children: [{
              code: "371502",
              name: "东昌府区"
            }, {
              code: "371503",
              name: "茌平区"
            }, {
              code: "371521",
              name: "阳谷县"
            }, {
              code: "371522",
              name: "莘县"
            }, {
              code: "371524",
              name: "东阿县"
            }, {
              code: "371525",
              name: "冠县"
            }, {
              code: "371526",
              name: "高唐县"
            }, {
              code: "371581",
              name: "临清市"
            }]
          }, {
            code: "3716",
            name: "滨州市",
            children: [{
              code: "371602",
              name: "滨城区"
            }, {
              code: "371603",
              name: "沾化区"
            }, {
              code: "371621",
              name: "惠民县"
            }, {
              code: "371622",
              name: "阳信县"
            }, {
              code: "371623",
              name: "无棣县"
            }, {
              code: "371625",
              name: "博兴县"
            }, {
              code: "371681",
              name: "邹平市"
            }]
          }, {
            code: "3717",
            name: "菏泽市",
            children: [{
              code: "371702",
              name: "牡丹区"
            }, {
              code: "371703",
              name: "定陶区"
            }, {
              code: "371721",
              name: "曹县"
            }, {
              code: "371722",
              name: "单县"
            }, {
              code: "371723",
              name: "成武县"
            }, {
              code: "371724",
              name: "巨野县"
            }, {
              code: "371725",
              name: "郓城县"
            }, {
              code: "371726",
              name: "鄄城县"
            }, {
              code: "371728",
              name: "东明县"
            }, {
              code: "371771",
              name: "菏泽经济技术开发区"
            }, {
              code: "371772",
              name: "菏泽高新技术开发区"
            }]
          }]
        }, {
          code: "41",
          name: "河南省",
          children: [{
            code: "4101",
            name: "郑州市",
            children: [{
              code: "410102",
              name: "中原区"
            }, {
              code: "410103",
              name: "二七区"
            }, {
              code: "410104",
              name: "管城回族区"
            }, {
              code: "410105",
              name: "金水区"
            }, {
              code: "410106",
              name: "上街区"
            }, {
              code: "410108",
              name: "惠济区"
            }, {
              code: "410122",
              name: "中牟县"
            }, {
              code: "410171",
              name: "郑州经济技术开发区"
            }, {
              code: "410172",
              name: "郑州高新技术产业开发区"
            }, {
              code: "410173",
              name: "郑州航空港经济综合实验区"
            }, {
              code: "410181",
              name: "巩义市"
            }, {
              code: "410182",
              name: "荥阳市"
            }, {
              code: "410183",
              name: "新密市"
            }, {
              code: "410184",
              name: "新郑市"
            }, {
              code: "410185",
              name: "登封市"
            }]
          }, {
            code: "4102",
            name: "开封市",
            children: [{
              code: "410202",
              name: "龙亭区"
            }, {
              code: "410203",
              name: "顺河回族区"
            }, {
              code: "410204",
              name: "鼓楼区"
            }, {
              code: "410205",
              name: "禹王台区"
            }, {
              code: "410212",
              name: "祥符区"
            }, {
              code: "410221",
              name: "杞县"
            }, {
              code: "410222",
              name: "通许县"
            }, {
              code: "410223",
              name: "尉氏县"
            }, {
              code: "410225",
              name: "兰考县"
            }]
          }, {
            code: "4103",
            name: "洛阳市",
            children: [{
              code: "410302",
              name: "老城区"
            }, {
              code: "410303",
              name: "西工区"
            }, {
              code: "410304",
              name: "瀍河回族区"
            }, {
              code: "410305",
              name: "涧西区"
            }, {
              code: "410307",
              name: "偃师区"
            }, {
              code: "410308",
              name: "孟津区"
            }, {
              code: "410311",
              name: "洛龙区"
            }, {
              code: "410323",
              name: "新安县"
            }, {
              code: "410324",
              name: "栾川县"
            }, {
              code: "410325",
              name: "嵩县"
            }, {
              code: "410326",
              name: "汝阳县"
            }, {
              code: "410327",
              name: "宜阳县"
            }, {
              code: "410328",
              name: "洛宁县"
            }, {
              code: "410329",
              name: "伊川县"
            }, {
              code: "410371",
              name: "洛阳高新技术产业开发区"
            }]
          }, {
            code: "4104",
            name: "平顶山市",
            children: [{
              code: "410402",
              name: "新华区"
            }, {
              code: "410403",
              name: "卫东区"
            }, {
              code: "410404",
              name: "石龙区"
            }, {
              code: "410411",
              name: "湛河区"
            }, {
              code: "410421",
              name: "宝丰县"
            }, {
              code: "410422",
              name: "叶县"
            }, {
              code: "410423",
              name: "鲁山县"
            }, {
              code: "410425",
              name: "郏县"
            }, {
              code: "410471",
              name: "平顶山高新技术产业开发区"
            }, {
              code: "410472",
              name: "平顶山市城乡一体化示范区"
            }, {
              code: "410481",
              name: "舞钢市"
            }, {
              code: "410482",
              name: "汝州市"
            }]
          }, {
            code: "4105",
            name: "安阳市",
            children: [{
              code: "410502",
              name: "文峰区"
            }, {
              code: "410503",
              name: "北关区"
            }, {
              code: "410505",
              name: "殷都区"
            }, {
              code: "410506",
              name: "龙安区"
            }, {
              code: "410522",
              name: "安阳县"
            }, {
              code: "410523",
              name: "汤阴县"
            }, {
              code: "410526",
              name: "滑县"
            }, {
              code: "410527",
              name: "内黄县"
            }, {
              code: "410571",
              name: "安阳高新技术产业开发区"
            }, {
              code: "410581",
              name: "林州市"
            }]
          }, {
            code: "4106",
            name: "鹤壁市",
            children: [{
              code: "410602",
              name: "鹤山区"
            }, {
              code: "410603",
              name: "山城区"
            }, {
              code: "410611",
              name: "淇滨区"
            }, {
              code: "410621",
              name: "浚县"
            }, {
              code: "410622",
              name: "淇县"
            }, {
              code: "410671",
              name: "鹤壁经济技术开发区"
            }]
          }, {
            code: "4107",
            name: "新乡市",
            children: [{
              code: "410702",
              name: "红旗区"
            }, {
              code: "410703",
              name: "卫滨区"
            }, {
              code: "410704",
              name: "凤泉区"
            }, {
              code: "410711",
              name: "牧野区"
            }, {
              code: "410721",
              name: "新乡县"
            }, {
              code: "410724",
              name: "获嘉县"
            }, {
              code: "410725",
              name: "原阳县"
            }, {
              code: "410726",
              name: "延津县"
            }, {
              code: "410727",
              name: "封丘县"
            }, {
              code: "410771",
              name: "新乡高新技术产业开发区"
            }, {
              code: "410772",
              name: "新乡经济技术开发区"
            }, {
              code: "410773",
              name: "新乡市平原城乡一体化示范区"
            }, {
              code: "410781",
              name: "卫辉市"
            }, {
              code: "410782",
              name: "辉县市"
            }, {
              code: "410783",
              name: "长垣市"
            }]
          }, {
            code: "4108",
            name: "焦作市",
            children: [{
              code: "410802",
              name: "解放区"
            }, {
              code: "410803",
              name: "中站区"
            }, {
              code: "410804",
              name: "马村区"
            }, {
              code: "410811",
              name: "山阳区"
            }, {
              code: "410821",
              name: "修武县"
            }, {
              code: "410822",
              name: "博爱县"
            }, {
              code: "410823",
              name: "武陟县"
            }, {
              code: "410825",
              name: "温县"
            }, {
              code: "410871",
              name: "焦作城乡一体化示范区"
            }, {
              code: "410882",
              name: "沁阳市"
            }, {
              code: "410883",
              name: "孟州市"
            }]
          }, {
            code: "4109",
            name: "濮阳市",
            children: [{
              code: "410902",
              name: "华龙区"
            }, {
              code: "410922",
              name: "清丰县"
            }, {
              code: "410923",
              name: "南乐县"
            }, {
              code: "410926",
              name: "范县"
            }, {
              code: "410927",
              name: "台前县"
            }, {
              code: "410928",
              name: "濮阳县"
            }, {
              code: "410971",
              name: "河南濮阳工业园区"
            }, {
              code: "410972",
              name: "濮阳经济技术开发区"
            }]
          }, {
            code: "4110",
            name: "许昌市",
            children: [{
              code: "411002",
              name: "魏都区"
            }, {
              code: "411003",
              name: "建安区"
            }, {
              code: "411024",
              name: "鄢陵县"
            }, {
              code: "411025",
              name: "襄城县"
            }, {
              code: "411071",
              name: "许昌经济技术开发区"
            }, {
              code: "411081",
              name: "禹州市"
            }, {
              code: "411082",
              name: "长葛市"
            }]
          }, {
            code: "4111",
            name: "漯河市",
            children: [{
              code: "411102",
              name: "源汇区"
            }, {
              code: "411103",
              name: "郾城区"
            }, {
              code: "411104",
              name: "召陵区"
            }, {
              code: "411121",
              name: "舞阳县"
            }, {
              code: "411122",
              name: "临颍县"
            }, {
              code: "411171",
              name: "漯河经济技术开发区"
            }]
          }, {
            code: "4112",
            name: "三门峡市",
            children: [{
              code: "411202",
              name: "湖滨区"
            }, {
              code: "411203",
              name: "陕州区"
            }, {
              code: "411221",
              name: "渑池县"
            }, {
              code: "411224",
              name: "卢氏县"
            }, {
              code: "411271",
              name: "河南三门峡经济开发区"
            }, {
              code: "411281",
              name: "义马市"
            }, {
              code: "411282",
              name: "灵宝市"
            }]
          }, {
            code: "4113",
            name: "南阳市",
            children: [{
              code: "411302",
              name: "宛城区"
            }, {
              code: "411303",
              name: "卧龙区"
            }, {
              code: "411321",
              name: "南召县"
            }, {
              code: "411322",
              name: "方城县"
            }, {
              code: "411323",
              name: "西峡县"
            }, {
              code: "411324",
              name: "镇平县"
            }, {
              code: "411325",
              name: "内乡县"
            }, {
              code: "411326",
              name: "淅川县"
            }, {
              code: "411327",
              name: "社旗县"
            }, {
              code: "411328",
              name: "唐河县"
            }, {
              code: "411329",
              name: "新野县"
            }, {
              code: "411330",
              name: "桐柏县"
            }, {
              code: "411371",
              name: "南阳高新技术产业开发区"
            }, {
              code: "411372",
              name: "南阳市城乡一体化示范区"
            }, {
              code: "411381",
              name: "邓州市"
            }]
          }, {
            code: "4114",
            name: "商丘市",
            children: [{
              code: "411402",
              name: "梁园区"
            }, {
              code: "411403",
              name: "睢阳区"
            }, {
              code: "411421",
              name: "民权县"
            }, {
              code: "411422",
              name: "睢县"
            }, {
              code: "411423",
              name: "宁陵县"
            }, {
              code: "411424",
              name: "柘城县"
            }, {
              code: "411425",
              name: "虞城县"
            }, {
              code: "411426",
              name: "夏邑县"
            }, {
              code: "411471",
              name: "豫东综合物流产业聚集区"
            }, {
              code: "411472",
              name: "河南商丘经济开发区"
            }, {
              code: "411481",
              name: "永城市"
            }]
          }, {
            code: "4115",
            name: "信阳市",
            children: [{
              code: "411502",
              name: "浉河区"
            }, {
              code: "411503",
              name: "平桥区"
            }, {
              code: "411521",
              name: "罗山县"
            }, {
              code: "411522",
              name: "光山县"
            }, {
              code: "411523",
              name: "新县"
            }, {
              code: "411524",
              name: "商城县"
            }, {
              code: "411525",
              name: "固始县"
            }, {
              code: "411526",
              name: "潢川县"
            }, {
              code: "411527",
              name: "淮滨县"
            }, {
              code: "411528",
              name: "息县"
            }, {
              code: "411571",
              name: "信阳高新技术产业开发区"
            }]
          }, {
            code: "4116",
            name: "周口市",
            children: [{
              code: "411602",
              name: "川汇区"
            }, {
              code: "411603",
              name: "淮阳区"
            }, {
              code: "411621",
              name: "扶沟县"
            }, {
              code: "411622",
              name: "西华县"
            }, {
              code: "411623",
              name: "商水县"
            }, {
              code: "411624",
              name: "沈丘县"
            }, {
              code: "411625",
              name: "郸城县"
            }, {
              code: "411627",
              name: "太康县"
            }, {
              code: "411628",
              name: "鹿邑县"
            }, {
              code: "411671",
              name: "周口临港开发区"
            }, {
              code: "411681",
              name: "项城市"
            }]
          }, {
            code: "4117",
            name: "驻马店市",
            children: [{
              code: "411702",
              name: "驿城区"
            }, {
              code: "411721",
              name: "西平县"
            }, {
              code: "411722",
              name: "上蔡县"
            }, {
              code: "411723",
              name: "平舆县"
            }, {
              code: "411724",
              name: "正阳县"
            }, {
              code: "411725",
              name: "确山县"
            }, {
              code: "411726",
              name: "泌阳县"
            }, {
              code: "411727",
              name: "汝南县"
            }, {
              code: "411728",
              name: "遂平县"
            }, {
              code: "411729",
              name: "新蔡县"
            }, {
              code: "411771",
              name: "河南驻马店经济开发区"
            }]
          }, {
            code: "4190",
            name: "省直辖县级行政区划",
            children: [{
              code: "419001",
              name: "济源市"
            }]
          }]
        }, {
          code: "42",
          name: "湖北省",
          children: [{
            code: "4201",
            name: "武汉市",
            children: [{
              code: "420102",
              name: "江岸区"
            }, {
              code: "420103",
              name: "江汉区"
            }, {
              code: "420104",
              name: "硚口区"
            }, {
              code: "420105",
              name: "汉阳区"
            }, {
              code: "420106",
              name: "武昌区"
            }, {
              code: "420107",
              name: "青山区"
            }, {
              code: "420111",
              name: "洪山区"
            }, {
              code: "420112",
              name: "东西湖区"
            }, {
              code: "420113",
              name: "汉南区"
            }, {
              code: "420114",
              name: "蔡甸区"
            }, {
              code: "420115",
              name: "江夏区"
            }, {
              code: "420116",
              name: "黄陂区"
            }, {
              code: "420117",
              name: "新洲区"
            }]
          }, {
            code: "4202",
            name: "黄石市",
            children: [{
              code: "420202",
              name: "黄石港区"
            }, {
              code: "420203",
              name: "西塞山区"
            }, {
              code: "420204",
              name: "下陆区"
            }, {
              code: "420205",
              name: "铁山区"
            }, {
              code: "420222",
              name: "阳新县"
            }, {
              code: "420281",
              name: "大冶市"
            }]
          }, {
            code: "4203",
            name: "十堰市",
            children: [{
              code: "420302",
              name: "茅箭区"
            }, {
              code: "420303",
              name: "张湾区"
            }, {
              code: "420304",
              name: "郧阳区"
            }, {
              code: "420322",
              name: "郧西县"
            }, {
              code: "420323",
              name: "竹山县"
            }, {
              code: "420324",
              name: "竹溪县"
            }, {
              code: "420325",
              name: "房县"
            }, {
              code: "420381",
              name: "丹江口市"
            }]
          }, {
            code: "4205",
            name: "宜昌市",
            children: [{
              code: "420502",
              name: "西陵区"
            }, {
              code: "420503",
              name: "伍家岗区"
            }, {
              code: "420504",
              name: "点军区"
            }, {
              code: "420505",
              name: "猇亭区"
            }, {
              code: "420506",
              name: "夷陵区"
            }, {
              code: "420525",
              name: "远安县"
            }, {
              code: "420526",
              name: "兴山县"
            }, {
              code: "420527",
              name: "秭归县"
            }, {
              code: "420528",
              name: "长阳土家族自治县"
            }, {
              code: "420529",
              name: "五峰土家族自治县"
            }, {
              code: "420581",
              name: "宜都市"
            }, {
              code: "420582",
              name: "当阳市"
            }, {
              code: "420583",
              name: "枝江市"
            }]
          }, {
            code: "4206",
            name: "襄阳市",
            children: [{
              code: "420602",
              name: "襄城区"
            }, {
              code: "420606",
              name: "樊城区"
            }, {
              code: "420607",
              name: "襄州区"
            }, {
              code: "420624",
              name: "南漳县"
            }, {
              code: "420625",
              name: "谷城县"
            }, {
              code: "420626",
              name: "保康县"
            }, {
              code: "420682",
              name: "老河口市"
            }, {
              code: "420683",
              name: "枣阳市"
            }, {
              code: "420684",
              name: "宜城市"
            }]
          }, {
            code: "4207",
            name: "鄂州市",
            children: [{
              code: "420702",
              name: "梁子湖区"
            }, {
              code: "420703",
              name: "华容区"
            }, {
              code: "420704",
              name: "鄂城区"
            }]
          }, {
            code: "4208",
            name: "荆门市",
            children: [{
              code: "420802",
              name: "东宝区"
            }, {
              code: "420804",
              name: "掇刀区"
            }, {
              code: "420822",
              name: "沙洋县"
            }, {
              code: "420881",
              name: "钟祥市"
            }, {
              code: "420882",
              name: "京山市"
            }]
          }, {
            code: "4209",
            name: "孝感市",
            children: [{
              code: "420902",
              name: "孝南区"
            }, {
              code: "420921",
              name: "孝昌县"
            }, {
              code: "420922",
              name: "大悟县"
            }, {
              code: "420923",
              name: "云梦县"
            }, {
              code: "420981",
              name: "应城市"
            }, {
              code: "420982",
              name: "安陆市"
            }, {
              code: "420984",
              name: "汉川市"
            }]
          }, {
            code: "4210",
            name: "荆州市",
            children: [{
              code: "421002",
              name: "沙市区"
            }, {
              code: "421003",
              name: "荆州区"
            }, {
              code: "421022",
              name: "公安县"
            }, {
              code: "421024",
              name: "江陵县"
            }, {
              code: "421071",
              name: "荆州经济技术开发区"
            }, {
              code: "421081",
              name: "石首市"
            }, {
              code: "421083",
              name: "洪湖市"
            }, {
              code: "421087",
              name: "松滋市"
            }, {
              code: "421088",
              name: "监利市"
            }]
          }, {
            code: "4211",
            name: "黄冈市",
            children: [{
              code: "421102",
              name: "黄州区"
            }, {
              code: "421121",
              name: "团风县"
            }, {
              code: "421122",
              name: "红安县"
            }, {
              code: "421123",
              name: "罗田县"
            }, {
              code: "421124",
              name: "英山县"
            }, {
              code: "421125",
              name: "浠水县"
            }, {
              code: "421126",
              name: "蕲春县"
            }, {
              code: "421127",
              name: "黄梅县"
            }, {
              code: "421171",
              name: "龙感湖管理区"
            }, {
              code: "421181",
              name: "麻城市"
            }, {
              code: "421182",
              name: "武穴市"
            }]
          }, {
            code: "4212",
            name: "咸宁市",
            children: [{
              code: "421202",
              name: "咸安区"
            }, {
              code: "421221",
              name: "嘉鱼县"
            }, {
              code: "421222",
              name: "通城县"
            }, {
              code: "421223",
              name: "崇阳县"
            }, {
              code: "421224",
              name: "通山县"
            }, {
              code: "421281",
              name: "赤壁市"
            }]
          }, {
            code: "4213",
            name: "随州市",
            children: [{
              code: "421303",
              name: "曾都区"
            }, {
              code: "421321",
              name: "随县"
            }, {
              code: "421381",
              name: "广水市"
            }]
          }, {
            code: "4228",
            name: "恩施土家族苗族自治州",
            children: [{
              code: "422801",
              name: "恩施市"
            }, {
              code: "422802",
              name: "利川市"
            }, {
              code: "422822",
              name: "建始县"
            }, {
              code: "422823",
              name: "巴东县"
            }, {
              code: "422825",
              name: "宣恩县"
            }, {
              code: "422826",
              name: "咸丰县"
            }, {
              code: "422827",
              name: "来凤县"
            }, {
              code: "422828",
              name: "鹤峰县"
            }]
          }, {
            code: "4290",
            name: "省直辖县级行政区划",
            children: [{
              code: "429004",
              name: "仙桃市"
            }, {
              code: "429005",
              name: "潜江市"
            }, {
              code: "429006",
              name: "天门市"
            }, {
              code: "429021",
              name: "神农架林区"
            }]
          }]
        }, {
          code: "43",
          name: "湖南省",
          children: [{
            code: "4301",
            name: "长沙市",
            children: [{
              code: "430102",
              name: "芙蓉区"
            }, {
              code: "430103",
              name: "天心区"
            }, {
              code: "430104",
              name: "岳麓区"
            }, {
              code: "430105",
              name: "开福区"
            }, {
              code: "430111",
              name: "雨花区"
            }, {
              code: "430112",
              name: "望城区"
            }, {
              code: "430121",
              name: "长沙县"
            }, {
              code: "430181",
              name: "浏阳市"
            }, {
              code: "430182",
              name: "宁乡市"
            }]
          }, {
            code: "4302",
            name: "株洲市",
            children: [{
              code: "430202",
              name: "荷塘区"
            }, {
              code: "430203",
              name: "芦淞区"
            }, {
              code: "430204",
              name: "石峰区"
            }, {
              code: "430211",
              name: "天元区"
            }, {
              code: "430212",
              name: "渌口区"
            }, {
              code: "430223",
              name: "攸县"
            }, {
              code: "430224",
              name: "茶陵县"
            }, {
              code: "430225",
              name: "炎陵县"
            }, {
              code: "430281",
              name: "醴陵市"
            }]
          }, {
            code: "4303",
            name: "湘潭市",
            children: [{
              code: "430302",
              name: "雨湖区"
            }, {
              code: "430304",
              name: "岳塘区"
            }, {
              code: "430321",
              name: "湘潭县"
            }, {
              code: "430371",
              name: "湖南湘潭高新技术产业园区"
            }, {
              code: "430372",
              name: "湘潭昭山示范区"
            }, {
              code: "430373",
              name: "湘潭九华示范区"
            }, {
              code: "430381",
              name: "湘乡市"
            }, {
              code: "430382",
              name: "韶山市"
            }]
          }, {
            code: "4304",
            name: "衡阳市",
            children: [{
              code: "430405",
              name: "珠晖区"
            }, {
              code: "430406",
              name: "雁峰区"
            }, {
              code: "430407",
              name: "石鼓区"
            }, {
              code: "430408",
              name: "蒸湘区"
            }, {
              code: "430412",
              name: "南岳区"
            }, {
              code: "430421",
              name: "衡阳县"
            }, {
              code: "430422",
              name: "衡南县"
            }, {
              code: "430423",
              name: "衡山县"
            }, {
              code: "430424",
              name: "衡东县"
            }, {
              code: "430426",
              name: "祁东县"
            }, {
              code: "430473",
              name: "湖南衡阳松木经济开发区"
            }, {
              code: "430476",
              name: "湖南衡阳高新技术产业园区"
            }, {
              code: "430481",
              name: "耒阳市"
            }, {
              code: "430482",
              name: "常宁市"
            }]
          }, {
            code: "4305",
            name: "邵阳市",
            children: [{
              code: "430502",
              name: "双清区"
            }, {
              code: "430503",
              name: "大祥区"
            }, {
              code: "430511",
              name: "北塔区"
            }, {
              code: "430522",
              name: "新邵县"
            }, {
              code: "430523",
              name: "邵阳县"
            }, {
              code: "430524",
              name: "隆回县"
            }, {
              code: "430525",
              name: "洞口县"
            }, {
              code: "430527",
              name: "绥宁县"
            }, {
              code: "430528",
              name: "新宁县"
            }, {
              code: "430529",
              name: "城步苗族自治县"
            }, {
              code: "430581",
              name: "武冈市"
            }, {
              code: "430582",
              name: "邵东市"
            }]
          }, {
            code: "4306",
            name: "岳阳市",
            children: [{
              code: "430602",
              name: "岳阳楼区"
            }, {
              code: "430603",
              name: "云溪区"
            }, {
              code: "430611",
              name: "君山区"
            }, {
              code: "430621",
              name: "岳阳县"
            }, {
              code: "430623",
              name: "华容县"
            }, {
              code: "430624",
              name: "湘阴县"
            }, {
              code: "430626",
              name: "平江县"
            }, {
              code: "430671",
              name: "岳阳市屈原管理区"
            }, {
              code: "430681",
              name: "汨罗市"
            }, {
              code: "430682",
              name: "临湘市"
            }]
          }, {
            code: "4307",
            name: "常德市",
            children: [{
              code: "430702",
              name: "武陵区"
            }, {
              code: "430703",
              name: "鼎城区"
            }, {
              code: "430721",
              name: "安乡县"
            }, {
              code: "430722",
              name: "汉寿县"
            }, {
              code: "430723",
              name: "澧县"
            }, {
              code: "430724",
              name: "临澧县"
            }, {
              code: "430725",
              name: "桃源县"
            }, {
              code: "430726",
              name: "石门县"
            }, {
              code: "430771",
              name: "常德市西洞庭管理区"
            }, {
              code: "430781",
              name: "津市市"
            }]
          }, {
            code: "4308",
            name: "张家界市",
            children: [{
              code: "430802",
              name: "永定区"
            }, {
              code: "430811",
              name: "武陵源区"
            }, {
              code: "430821",
              name: "慈利县"
            }, {
              code: "430822",
              name: "桑植县"
            }]
          }, {
            code: "4309",
            name: "益阳市",
            children: [{
              code: "430902",
              name: "资阳区"
            }, {
              code: "430903",
              name: "赫山区"
            }, {
              code: "430921",
              name: "南县"
            }, {
              code: "430922",
              name: "桃江县"
            }, {
              code: "430923",
              name: "安化县"
            }, {
              code: "430971",
              name: "益阳市大通湖管理区"
            }, {
              code: "430972",
              name: "湖南益阳高新技术产业园区"
            }, {
              code: "430981",
              name: "沅江市"
            }]
          }, {
            code: "4310",
            name: "郴州市",
            children: [{
              code: "431002",
              name: "北湖区"
            }, {
              code: "431003",
              name: "苏仙区"
            }, {
              code: "431021",
              name: "桂阳县"
            }, {
              code: "431022",
              name: "宜章县"
            }, {
              code: "431023",
              name: "永兴县"
            }, {
              code: "431024",
              name: "嘉禾县"
            }, {
              code: "431025",
              name: "临武县"
            }, {
              code: "431026",
              name: "汝城县"
            }, {
              code: "431027",
              name: "桂东县"
            }, {
              code: "431028",
              name: "安仁县"
            }, {
              code: "431081",
              name: "资兴市"
            }]
          }, {
            code: "4311",
            name: "永州市",
            children: [{
              code: "431102",
              name: "零陵区"
            }, {
              code: "431103",
              name: "冷水滩区"
            }, {
              code: "431122",
              name: "东安县"
            }, {
              code: "431123",
              name: "双牌县"
            }, {
              code: "431124",
              name: "道县"
            }, {
              code: "431125",
              name: "江永县"
            }, {
              code: "431126",
              name: "宁远县"
            }, {
              code: "431127",
              name: "蓝山县"
            }, {
              code: "431128",
              name: "新田县"
            }, {
              code: "431129",
              name: "江华瑶族自治县"
            }, {
              code: "431171",
              name: "永州经济技术开发区"
            }, {
              code: "431173",
              name: "永州市回龙圩管理区"
            }, {
              code: "431181",
              name: "祁阳市"
            }]
          }, {
            code: "4312",
            name: "怀化市",
            children: [{
              code: "431202",
              name: "鹤城区"
            }, {
              code: "431221",
              name: "中方县"
            }, {
              code: "431222",
              name: "沅陵县"
            }, {
              code: "431223",
              name: "辰溪县"
            }, {
              code: "431224",
              name: "溆浦县"
            }, {
              code: "431225",
              name: "会同县"
            }, {
              code: "431226",
              name: "麻阳苗族自治县"
            }, {
              code: "431227",
              name: "新晃侗族自治县"
            }, {
              code: "431228",
              name: "芷江侗族自治县"
            }, {
              code: "431229",
              name: "靖州苗族侗族自治县"
            }, {
              code: "431230",
              name: "通道侗族自治县"
            }, {
              code: "431271",
              name: "怀化市洪江管理区"
            }, {
              code: "431281",
              name: "洪江市"
            }]
          }, {
            code: "4313",
            name: "娄底市",
            children: [{
              code: "431302",
              name: "娄星区"
            }, {
              code: "431321",
              name: "双峰县"
            }, {
              code: "431322",
              name: "新化县"
            }, {
              code: "431381",
              name: "冷水江市"
            }, {
              code: "431382",
              name: "涟源市"
            }]
          }, {
            code: "4331",
            name: "湘西土家族苗族自治州",
            children: [{
              code: "433101",
              name: "吉首市"
            }, {
              code: "433122",
              name: "泸溪县"
            }, {
              code: "433123",
              name: "凤凰县"
            }, {
              code: "433124",
              name: "花垣县"
            }, {
              code: "433125",
              name: "保靖县"
            }, {
              code: "433126",
              name: "古丈县"
            }, {
              code: "433127",
              name: "永顺县"
            }, {
              code: "433130",
              name: "龙山县"
            }]
          }]
        }, {
          code: "44",
          name: "广东省",
          children: [{
            code: "4401",
            name: "广州市",
            children: [{
              code: "440103",
              name: "荔湾区"
            }, {
              code: "440104",
              name: "越秀区"
            }, {
              code: "440105",
              name: "海珠区"
            }, {
              code: "440106",
              name: "天河区"
            }, {
              code: "440111",
              name: "白云区"
            }, {
              code: "440112",
              name: "黄埔区"
            }, {
              code: "440113",
              name: "番禺区"
            }, {
              code: "440114",
              name: "花都区"
            }, {
              code: "440115",
              name: "南沙区"
            }, {
              code: "440117",
              name: "从化区"
            }, {
              code: "440118",
              name: "增城区"
            }]
          }, {
            code: "4402",
            name: "韶关市",
            children: [{
              code: "440203",
              name: "武江区"
            }, {
              code: "440204",
              name: "浈江区"
            }, {
              code: "440205",
              name: "曲江区"
            }, {
              code: "440222",
              name: "始兴县"
            }, {
              code: "440224",
              name: "仁化县"
            }, {
              code: "440229",
              name: "翁源县"
            }, {
              code: "440232",
              name: "乳源瑶族自治县"
            }, {
              code: "440233",
              name: "新丰县"
            }, {
              code: "440281",
              name: "乐昌市"
            }, {
              code: "440282",
              name: "南雄市"
            }]
          }, {
            code: "4403",
            name: "深圳市",
            children: [{
              code: "440303",
              name: "罗湖区"
            }, {
              code: "440304",
              name: "福田区"
            }, {
              code: "440305",
              name: "南山区"
            }, {
              code: "440306",
              name: "宝安区"
            }, {
              code: "440307",
              name: "龙岗区"
            }, {
              code: "440308",
              name: "盐田区"
            }, {
              code: "440309",
              name: "龙华区"
            }, {
              code: "440310",
              name: "坪山区"
            }, {
              code: "440311",
              name: "光明区"
            }]
          }, {
            code: "4404",
            name: "珠海市",
            children: [{
              code: "440402",
              name: "香洲区"
            }, {
              code: "440403",
              name: "斗门区"
            }, {
              code: "440404",
              name: "金湾区"
            }]
          }, {
            code: "4405",
            name: "汕头市",
            children: [{
              code: "440507",
              name: "龙湖区"
            }, {
              code: "440511",
              name: "金平区"
            }, {
              code: "440512",
              name: "濠江区"
            }, {
              code: "440513",
              name: "潮阳区"
            }, {
              code: "440514",
              name: "潮南区"
            }, {
              code: "440515",
              name: "澄海区"
            }, {
              code: "440523",
              name: "南澳县"
            }]
          }, {
            code: "4406",
            name: "佛山市",
            children: [{
              code: "440604",
              name: "禅城区"
            }, {
              code: "440605",
              name: "南海区"
            }, {
              code: "440606",
              name: "顺德区"
            }, {
              code: "440607",
              name: "三水区"
            }, {
              code: "440608",
              name: "高明区"
            }]
          }, {
            code: "4407",
            name: "江门市",
            children: [{
              code: "440703",
              name: "蓬江区"
            }, {
              code: "440704",
              name: "江海区"
            }, {
              code: "440705",
              name: "新会区"
            }, {
              code: "440781",
              name: "台山市"
            }, {
              code: "440783",
              name: "开平市"
            }, {
              code: "440784",
              name: "鹤山市"
            }, {
              code: "440785",
              name: "恩平市"
            }]
          }, {
            code: "4408",
            name: "湛江市",
            children: [{
              code: "440802",
              name: "赤坎区"
            }, {
              code: "440803",
              name: "霞山区"
            }, {
              code: "440804",
              name: "坡头区"
            }, {
              code: "440811",
              name: "麻章区"
            }, {
              code: "440823",
              name: "遂溪县"
            }, {
              code: "440825",
              name: "徐闻县"
            }, {
              code: "440881",
              name: "廉江市"
            }, {
              code: "440882",
              name: "雷州市"
            }, {
              code: "440883",
              name: "吴川市"
            }]
          }, {
            code: "4409",
            name: "茂名市",
            children: [{
              code: "440902",
              name: "茂南区"
            }, {
              code: "440904",
              name: "电白区"
            }, {
              code: "440981",
              name: "高州市"
            }, {
              code: "440982",
              name: "化州市"
            }, {
              code: "440983",
              name: "信宜市"
            }]
          }, {
            code: "4412",
            name: "肇庆市",
            children: [{
              code: "441202",
              name: "端州区"
            }, {
              code: "441203",
              name: "鼎湖区"
            }, {
              code: "441204",
              name: "高要区"
            }, {
              code: "441223",
              name: "广宁县"
            }, {
              code: "441224",
              name: "怀集县"
            }, {
              code: "441225",
              name: "封开县"
            }, {
              code: "441226",
              name: "德庆县"
            }, {
              code: "441284",
              name: "四会市"
            }]
          }, {
            code: "4413",
            name: "惠州市",
            children: [{
              code: "441302",
              name: "惠城区"
            }, {
              code: "441303",
              name: "惠阳区"
            }, {
              code: "441322",
              name: "博罗县"
            }, {
              code: "441323",
              name: "惠东县"
            }, {
              code: "441324",
              name: "龙门县"
            }]
          }, {
            code: "4414",
            name: "梅州市",
            children: [{
              code: "441402",
              name: "梅江区"
            }, {
              code: "441403",
              name: "梅县区"
            }, {
              code: "441422",
              name: "大埔县"
            }, {
              code: "441423",
              name: "丰顺县"
            }, {
              code: "441424",
              name: "五华县"
            }, {
              code: "441426",
              name: "平远县"
            }, {
              code: "441427",
              name: "蕉岭县"
            }, {
              code: "441481",
              name: "兴宁市"
            }]
          }, {
            code: "4415",
            name: "汕尾市",
            children: [{
              code: "441502",
              name: "城区"
            }, {
              code: "441521",
              name: "海丰县"
            }, {
              code: "441523",
              name: "陆河县"
            }, {
              code: "441581",
              name: "陆丰市"
            }]
          }, {
            code: "4416",
            name: "河源市",
            children: [{
              code: "441602",
              name: "源城区"
            }, {
              code: "441621",
              name: "紫金县"
            }, {
              code: "441622",
              name: "龙川县"
            }, {
              code: "441623",
              name: "连平县"
            }, {
              code: "441624",
              name: "和平县"
            }, {
              code: "441625",
              name: "东源县"
            }]
          }, {
            code: "4417",
            name: "阳江市",
            children: [{
              code: "441702",
              name: "江城区"
            }, {
              code: "441704",
              name: "阳东区"
            }, {
              code: "441721",
              name: "阳西县"
            }, {
              code: "441781",
              name: "阳春市"
            }]
          }, {
            code: "4418",
            name: "清远市",
            children: [{
              code: "441802",
              name: "清城区"
            }, {
              code: "441803",
              name: "清新区"
            }, {
              code: "441821",
              name: "佛冈县"
            }, {
              code: "441823",
              name: "阳山县"
            }, {
              code: "441825",
              name: "连山壮族瑶族自治县"
            }, {
              code: "441826",
              name: "连南瑶族自治县"
            }, {
              code: "441881",
              name: "英德市"
            }, {
              code: "441882",
              name: "连州市"
            }]
          }, {
            code: "4419",
            name: "东莞市",
            children: [{
              code: "441900003",
              name: "东城街道"
            }, {
              code: "441900004",
              name: "南城街道"
            }, {
              code: "441900005",
              name: "万江街道"
            }, {
              code: "441900006",
              name: "莞城街道"
            }, {
              code: "441900101",
              name: "石碣镇"
            }, {
              code: "441900102",
              name: "石龙镇"
            }, {
              code: "441900103",
              name: "茶山镇"
            }, {
              code: "441900104",
              name: "石排镇"
            }, {
              code: "441900105",
              name: "企石镇"
            }, {
              code: "441900106",
              name: "横沥镇"
            }, {
              code: "441900107",
              name: "桥头镇"
            }, {
              code: "441900108",
              name: "谢岗镇"
            }, {
              code: "441900109",
              name: "东坑镇"
            }, {
              code: "441900110",
              name: "常平镇"
            }, {
              code: "441900111",
              name: "寮步镇"
            }, {
              code: "441900112",
              name: "樟木头镇"
            }, {
              code: "441900113",
              name: "大朗镇"
            }, {
              code: "441900114",
              name: "黄江镇"
            }, {
              code: "441900115",
              name: "清溪镇"
            }, {
              code: "441900116",
              name: "塘厦镇"
            }, {
              code: "441900117",
              name: "凤岗镇"
            }, {
              code: "441900118",
              name: "大岭山镇"
            }, {
              code: "441900119",
              name: "长安镇"
            }, {
              code: "441900121",
              name: "虎门镇"
            }, {
              code: "441900122",
              name: "厚街镇"
            }, {
              code: "441900123",
              name: "沙田镇"
            }, {
              code: "441900124",
              name: "道滘镇"
            }, {
              code: "441900125",
              name: "洪梅镇"
            }, {
              code: "441900126",
              name: "麻涌镇"
            }, {
              code: "441900127",
              name: "望牛墩镇"
            }, {
              code: "441900128",
              name: "中堂镇"
            }, {
              code: "441900129",
              name: "高埗镇"
            }, {
              code: "441900401",
              name: "松山湖"
            }, {
              code: "441900402",
              name: "东莞港"
            }, {
              code: "441900403",
              name: "东莞生态园"
            }, {
              code: "441900404",
              name: "东莞滨海湾新区"
            }]
          }, {
            code: "4420",
            name: "中山市",
            children: [{
              code: "442000001",
              name: "石岐街道"
            }, {
              code: "442000002",
              name: "东区街道"
            }, {
              code: "442000003",
              name: "中山港街道"
            }, {
              code: "442000004",
              name: "西区街道"
            }, {
              code: "442000005",
              name: "南区街道"
            }, {
              code: "442000006",
              name: "五桂山街道"
            }, {
              code: "442000007",
              name: "民众街道"
            }, {
              code: "442000008",
              name: "南朗街道"
            }, {
              code: "442000101",
              name: "黄圃镇"
            }, {
              code: "442000103",
              name: "东凤镇"
            }, {
              code: "442000105",
              name: "古镇镇"
            }, {
              code: "442000106",
              name: "沙溪镇"
            }, {
              code: "442000107",
              name: "坦洲镇"
            }, {
              code: "442000108",
              name: "港口镇"
            }, {
              code: "442000109",
              name: "三角镇"
            }, {
              code: "442000110",
              name: "横栏镇"
            }, {
              code: "442000111",
              name: "南头镇"
            }, {
              code: "442000112",
              name: "阜沙镇"
            }, {
              code: "442000114",
              name: "三乡镇"
            }, {
              code: "442000115",
              name: "板芙镇"
            }, {
              code: "442000116",
              name: "大涌镇"
            }, {
              code: "442000117",
              name: "神湾镇"
            }, {
              code: "442000118",
              name: "小榄镇"
            }]
          }, {
            code: "4451",
            name: "潮州市",
            children: [{
              code: "445102",
              name: "湘桥区"
            }, {
              code: "445103",
              name: "潮安区"
            }, {
              code: "445122",
              name: "饶平县"
            }]
          }, {
            code: "4452",
            name: "揭阳市",
            children: [{
              code: "445202",
              name: "榕城区"
            }, {
              code: "445203",
              name: "揭东区"
            }, {
              code: "445222",
              name: "揭西县"
            }, {
              code: "445224",
              name: "惠来县"
            }, {
              code: "445281",
              name: "普宁市"
            }]
          }, {
            code: "4453",
            name: "云浮市",
            children: [{
              code: "445302",
              name: "云城区"
            }, {
              code: "445303",
              name: "云安区"
            }, {
              code: "445321",
              name: "新兴县"
            }, {
              code: "445322",
              name: "郁南县"
            }, {
              code: "445381",
              name: "罗定市"
            }]
          }]
        }, {
          code: "45",
          name: "广西壮族自治区",
          children: [{
            code: "4501",
            name: "南宁市",
            children: [{
              code: "450102",
              name: "兴宁区"
            }, {
              code: "450103",
              name: "青秀区"
            }, {
              code: "450105",
              name: "江南区"
            }, {
              code: "450107",
              name: "西乡塘区"
            }, {
              code: "450108",
              name: "良庆区"
            }, {
              code: "450109",
              name: "邕宁区"
            }, {
              code: "450110",
              name: "武鸣区"
            }, {
              code: "450123",
              name: "隆安县"
            }, {
              code: "450124",
              name: "马山县"
            }, {
              code: "450125",
              name: "上林县"
            }, {
              code: "450126",
              name: "宾阳县"
            }, {
              code: "450181",
              name: "横州市"
            }]
          }, {
            code: "4502",
            name: "柳州市",
            children: [{
              code: "450202",
              name: "城中区"
            }, {
              code: "450203",
              name: "鱼峰区"
            }, {
              code: "450204",
              name: "柳南区"
            }, {
              code: "450205",
              name: "柳北区"
            }, {
              code: "450206",
              name: "柳江区"
            }, {
              code: "450222",
              name: "柳城县"
            }, {
              code: "450223",
              name: "鹿寨县"
            }, {
              code: "450224",
              name: "融安县"
            }, {
              code: "450225",
              name: "融水苗族自治县"
            }, {
              code: "450226",
              name: "三江侗族自治县"
            }]
          }, {
            code: "4503",
            name: "桂林市",
            children: [{
              code: "450302",
              name: "秀峰区"
            }, {
              code: "450303",
              name: "叠彩区"
            }, {
              code: "450304",
              name: "象山区"
            }, {
              code: "450305",
              name: "七星区"
            }, {
              code: "450311",
              name: "雁山区"
            }, {
              code: "450312",
              name: "临桂区"
            }, {
              code: "450321",
              name: "阳朔县"
            }, {
              code: "450323",
              name: "灵川县"
            }, {
              code: "450324",
              name: "全州县"
            }, {
              code: "450325",
              name: "兴安县"
            }, {
              code: "450326",
              name: "永福县"
            }, {
              code: "450327",
              name: "灌阳县"
            }, {
              code: "450328",
              name: "龙胜各族自治县"
            }, {
              code: "450329",
              name: "资源县"
            }, {
              code: "450330",
              name: "平乐县"
            }, {
              code: "450332",
              name: "恭城瑶族自治县"
            }, {
              code: "450381",
              name: "荔浦市"
            }]
          }, {
            code: "4504",
            name: "梧州市",
            children: [{
              code: "450403",
              name: "万秀区"
            }, {
              code: "450405",
              name: "长洲区"
            }, {
              code: "450406",
              name: "龙圩区"
            }, {
              code: "450421",
              name: "苍梧县"
            }, {
              code: "450422",
              name: "藤县"
            }, {
              code: "450423",
              name: "蒙山县"
            }, {
              code: "450481",
              name: "岑溪市"
            }]
          }, {
            code: "4505",
            name: "北海市",
            children: [{
              code: "450502",
              name: "海城区"
            }, {
              code: "450503",
              name: "银海区"
            }, {
              code: "450512",
              name: "铁山港区"
            }, {
              code: "450521",
              name: "合浦县"
            }]
          }, {
            code: "4506",
            name: "防城港市",
            children: [{
              code: "450602",
              name: "港口区"
            }, {
              code: "450603",
              name: "防城区"
            }, {
              code: "450621",
              name: "上思县"
            }, {
              code: "450681",
              name: "东兴市"
            }]
          }, {
            code: "4507",
            name: "钦州市",
            children: [{
              code: "450702",
              name: "钦南区"
            }, {
              code: "450703",
              name: "钦北区"
            }, {
              code: "450721",
              name: "灵山县"
            }, {
              code: "450722",
              name: "浦北县"
            }]
          }, {
            code: "4508",
            name: "贵港市",
            children: [{
              code: "450802",
              name: "港北区"
            }, {
              code: "450803",
              name: "港南区"
            }, {
              code: "450804",
              name: "覃塘区"
            }, {
              code: "450821",
              name: "平南县"
            }, {
              code: "450881",
              name: "桂平市"
            }]
          }, {
            code: "4509",
            name: "玉林市",
            children: [{
              code: "450902",
              name: "玉州区"
            }, {
              code: "450903",
              name: "福绵区"
            }, {
              code: "450921",
              name: "容县"
            }, {
              code: "450922",
              name: "陆川县"
            }, {
              code: "450923",
              name: "博白县"
            }, {
              code: "450924",
              name: "兴业县"
            }, {
              code: "450981",
              name: "北流市"
            }]
          }, {
            code: "4510",
            name: "百色市",
            children: [{
              code: "451002",
              name: "右江区"
            }, {
              code: "451003",
              name: "田阳区"
            }, {
              code: "451022",
              name: "田东县"
            }, {
              code: "451024",
              name: "德保县"
            }, {
              code: "451026",
              name: "那坡县"
            }, {
              code: "451027",
              name: "凌云县"
            }, {
              code: "451028",
              name: "乐业县"
            }, {
              code: "451029",
              name: "田林县"
            }, {
              code: "451030",
              name: "西林县"
            }, {
              code: "451031",
              name: "隆林各族自治县"
            }, {
              code: "451081",
              name: "靖西市"
            }, {
              code: "451082",
              name: "平果市"
            }]
          }, {
            code: "4511",
            name: "贺州市",
            children: [{
              code: "451102",
              name: "八步区"
            }, {
              code: "451103",
              name: "平桂区"
            }, {
              code: "451121",
              name: "昭平县"
            }, {
              code: "451122",
              name: "钟山县"
            }, {
              code: "451123",
              name: "富川瑶族自治县"
            }]
          }, {
            code: "4512",
            name: "河池市",
            children: [{
              code: "451202",
              name: "金城江区"
            }, {
              code: "451203",
              name: "宜州区"
            }, {
              code: "451221",
              name: "南丹县"
            }, {
              code: "451222",
              name: "天峨县"
            }, {
              code: "451223",
              name: "凤山县"
            }, {
              code: "451224",
              name: "东兰县"
            }, {
              code: "451225",
              name: "罗城仫佬族自治县"
            }, {
              code: "451226",
              name: "环江毛南族自治县"
            }, {
              code: "451227",
              name: "巴马瑶族自治县"
            }, {
              code: "451228",
              name: "都安瑶族自治县"
            }, {
              code: "451229",
              name: "大化瑶族自治县"
            }]
          }, {
            code: "4513",
            name: "来宾市",
            children: [{
              code: "451302",
              name: "兴宾区"
            }, {
              code: "451321",
              name: "忻城县"
            }, {
              code: "451322",
              name: "象州县"
            }, {
              code: "451323",
              name: "武宣县"
            }, {
              code: "451324",
              name: "金秀瑶族自治县"
            }, {
              code: "451381",
              name: "合山市"
            }]
          }, {
            code: "4514",
            name: "崇左市",
            children: [{
              code: "451402",
              name: "江州区"
            }, {
              code: "451421",
              name: "扶绥县"
            }, {
              code: "451422",
              name: "宁明县"
            }, {
              code: "451423",
              name: "龙州县"
            }, {
              code: "451424",
              name: "大新县"
            }, {
              code: "451425",
              name: "天等县"
            }, {
              code: "451481",
              name: "凭祥市"
            }]
          }]
        }, {
          code: "46",
          name: "海南省",
          children: [{
            code: "4601",
            name: "海口市",
            children: [{
              code: "460105",
              name: "秀英区"
            }, {
              code: "460106",
              name: "龙华区"
            }, {
              code: "460107",
              name: "琼山区"
            }, {
              code: "460108",
              name: "美兰区"
            }]
          }, {
            code: "4602",
            name: "三亚市",
            children: [{
              code: "460202",
              name: "海棠区"
            }, {
              code: "460203",
              name: "吉阳区"
            }, {
              code: "460204",
              name: "天涯区"
            }, {
              code: "460205",
              name: "崖州区"
            }]
          }, {
            code: "4603",
            name: "三沙市",
            children: [{
              code: "460321",
              name: "西沙群岛"
            }, {
              code: "460322",
              name: "南沙群岛"
            }, {
              code: "460323",
              name: "中沙群岛的岛礁及其海域"
            }]
          }, {
            code: "4604",
            name: "儋州市",
            children: [{
              code: "460400100",
              name: "那大镇"
            }, {
              code: "460400101",
              name: "和庆镇"
            }, {
              code: "460400102",
              name: "南丰镇"
            }, {
              code: "460400103",
              name: "大成镇"
            }, {
              code: "460400104",
              name: "雅星镇"
            }, {
              code: "460400105",
              name: "兰洋镇"
            }, {
              code: "460400106",
              name: "光村镇"
            }, {
              code: "460400107",
              name: "木棠镇"
            }, {
              code: "460400108",
              name: "海头镇"
            }, {
              code: "460400109",
              name: "峨蔓镇"
            }, {
              code: "460400111",
              name: "王五镇"
            }, {
              code: "460400112",
              name: "白马井镇"
            }, {
              code: "460400113",
              name: "中和镇"
            }, {
              code: "460400114",
              name: "排浦镇"
            }, {
              code: "460400115",
              name: "东成镇"
            }, {
              code: "460400116",
              name: "新州镇"
            }, {
              code: "460400499",
              name: "洋浦经济开发区"
            }, {
              code: "460400500",
              name: "华南热作学院"
            }]
          }, {
            code: "4690",
            name: "省直辖县级行政区划",
            children: [{
              code: "469001",
              name: "五指山市"
            }, {
              code: "469002",
              name: "琼海市"
            }, {
              code: "469005",
              name: "文昌市"
            }, {
              code: "469006",
              name: "万宁市"
            }, {
              code: "469007",
              name: "东方市"
            }, {
              code: "469021",
              name: "定安县"
            }, {
              code: "469022",
              name: "屯昌县"
            }, {
              code: "469023",
              name: "澄迈县"
            }, {
              code: "469024",
              name: "临高县"
            }, {
              code: "469025",
              name: "白沙黎族自治县"
            }, {
              code: "469026",
              name: "昌江黎族自治县"
            }, {
              code: "469027",
              name: "乐东黎族自治县"
            }, {
              code: "469028",
              name: "陵水黎族自治县"
            }, {
              code: "469029",
              name: "保亭黎族苗族自治县"
            }, {
              code: "469030",
              name: "琼中黎族苗族自治县"
            }]
          }]
        }, {
          code: "50",
          name: "重庆市",
          children: [{
            code: "5001",
            name: "市辖区",
            children: [{
              code: "500101",
              name: "万州区"
            }, {
              code: "500102",
              name: "涪陵区"
            }, {
              code: "500103",
              name: "渝中区"
            }, {
              code: "500104",
              name: "大渡口区"
            }, {
              code: "500105",
              name: "江北区"
            }, {
              code: "500106",
              name: "沙坪坝区"
            }, {
              code: "500107",
              name: "九龙坡区"
            }, {
              code: "500108",
              name: "南岸区"
            }, {
              code: "500109",
              name: "北碚区"
            }, {
              code: "500110",
              name: "綦江区"
            }, {
              code: "500111",
              name: "大足区"
            }, {
              code: "500112",
              name: "渝北区"
            }, {
              code: "500113",
              name: "巴南区"
            }, {
              code: "500114",
              name: "黔江区"
            }, {
              code: "500115",
              name: "长寿区"
            }, {
              code: "500116",
              name: "江津区"
            }, {
              code: "500117",
              name: "合川区"
            }, {
              code: "500118",
              name: "永川区"
            }, {
              code: "500119",
              name: "南川区"
            }, {
              code: "500120",
              name: "璧山区"
            }, {
              code: "500151",
              name: "铜梁区"
            }, {
              code: "500152",
              name: "潼南区"
            }, {
              code: "500153",
              name: "荣昌区"
            }, {
              code: "500154",
              name: "开州区"
            }, {
              code: "500155",
              name: "梁平区"
            }, {
              code: "500156",
              name: "武隆区"
            }]
          }, {
            code: "5002",
            name: "县",
            children: [{
              code: "500229",
              name: "城口县"
            }, {
              code: "500230",
              name: "丰都县"
            }, {
              code: "500231",
              name: "垫江县"
            }, {
              code: "500233",
              name: "忠县"
            }, {
              code: "500235",
              name: "云阳县"
            }, {
              code: "500236",
              name: "奉节县"
            }, {
              code: "500237",
              name: "巫山县"
            }, {
              code: "500238",
              name: "巫溪县"
            }, {
              code: "500240",
              name: "石柱土家族自治县"
            }, {
              code: "500241",
              name: "秀山土家族苗族自治县"
            }, {
              code: "500242",
              name: "酉阳土家族苗族自治县"
            }, {
              code: "500243",
              name: "彭水苗族土家族自治县"
            }]
          }]
        }, {
          code: "51",
          name: "四川省",
          children: [{
            code: "5101",
            name: "成都市",
            children: [{
              code: "510104",
              name: "锦江区"
            }, {
              code: "510105",
              name: "青羊区"
            }, {
              code: "510106",
              name: "金牛区"
            }, {
              code: "510107",
              name: "武侯区"
            }, {
              code: "510108",
              name: "成华区"
            }, {
              code: "510112",
              name: "龙泉驿区"
            }, {
              code: "510113",
              name: "青白江区"
            }, {
              code: "510114",
              name: "新都区"
            }, {
              code: "510115",
              name: "温江区"
            }, {
              code: "510116",
              name: "双流区"
            }, {
              code: "510117",
              name: "郫都区"
            }, {
              code: "510118",
              name: "新津区"
            }, {
              code: "510121",
              name: "金堂县"
            }, {
              code: "510129",
              name: "大邑县"
            }, {
              code: "510131",
              name: "蒲江县"
            }, {
              code: "510181",
              name: "都江堰市"
            }, {
              code: "510182",
              name: "彭州市"
            }, {
              code: "510183",
              name: "邛崃市"
            }, {
              code: "510184",
              name: "崇州市"
            }, {
              code: "510185",
              name: "简阳市"
            }]
          }, {
            code: "5103",
            name: "自贡市",
            children: [{
              code: "510302",
              name: "自流井区"
            }, {
              code: "510303",
              name: "贡井区"
            }, {
              code: "510304",
              name: "大安区"
            }, {
              code: "510311",
              name: "沿滩区"
            }, {
              code: "510321",
              name: "荣县"
            }, {
              code: "510322",
              name: "富顺县"
            }]
          }, {
            code: "5104",
            name: "攀枝花市",
            children: [{
              code: "510402",
              name: "东区"
            }, {
              code: "510403",
              name: "西区"
            }, {
              code: "510411",
              name: "仁和区"
            }, {
              code: "510421",
              name: "米易县"
            }, {
              code: "510422",
              name: "盐边县"
            }]
          }, {
            code: "5105",
            name: "泸州市",
            children: [{
              code: "510502",
              name: "江阳区"
            }, {
              code: "510503",
              name: "纳溪区"
            }, {
              code: "510504",
              name: "龙马潭区"
            }, {
              code: "510521",
              name: "泸县"
            }, {
              code: "510522",
              name: "合江县"
            }, {
              code: "510524",
              name: "叙永县"
            }, {
              code: "510525",
              name: "古蔺县"
            }]
          }, {
            code: "5106",
            name: "德阳市",
            children: [{
              code: "510603",
              name: "旌阳区"
            }, {
              code: "510604",
              name: "罗江区"
            }, {
              code: "510623",
              name: "中江县"
            }, {
              code: "510681",
              name: "广汉市"
            }, {
              code: "510682",
              name: "什邡市"
            }, {
              code: "510683",
              name: "绵竹市"
            }]
          }, {
            code: "5107",
            name: "绵阳市",
            children: [{
              code: "510703",
              name: "涪城区"
            }, {
              code: "510704",
              name: "游仙区"
            }, {
              code: "510705",
              name: "安州区"
            }, {
              code: "510722",
              name: "三台县"
            }, {
              code: "510723",
              name: "盐亭县"
            }, {
              code: "510725",
              name: "梓潼县"
            }, {
              code: "510726",
              name: "北川羌族自治县"
            }, {
              code: "510727",
              name: "平武县"
            }, {
              code: "510781",
              name: "江油市"
            }]
          }, {
            code: "5108",
            name: "广元市",
            children: [{
              code: "510802",
              name: "利州区"
            }, {
              code: "510811",
              name: "昭化区"
            }, {
              code: "510812",
              name: "朝天区"
            }, {
              code: "510821",
              name: "旺苍县"
            }, {
              code: "510822",
              name: "青川县"
            }, {
              code: "510823",
              name: "剑阁县"
            }, {
              code: "510824",
              name: "苍溪县"
            }]
          }, {
            code: "5109",
            name: "遂宁市",
            children: [{
              code: "510903",
              name: "船山区"
            }, {
              code: "510904",
              name: "安居区"
            }, {
              code: "510921",
              name: "蓬溪县"
            }, {
              code: "510923",
              name: "大英县"
            }, {
              code: "510981",
              name: "射洪市"
            }]
          }, {
            code: "5110",
            name: "内江市",
            children: [{
              code: "511002",
              name: "市中区"
            }, {
              code: "511011",
              name: "东兴区"
            }, {
              code: "511024",
              name: "威远县"
            }, {
              code: "511025",
              name: "资中县"
            }, {
              code: "511083",
              name: "隆昌市"
            }]
          }, {
            code: "5111",
            name: "乐山市",
            children: [{
              code: "511102",
              name: "市中区"
            }, {
              code: "511111",
              name: "沙湾区"
            }, {
              code: "511112",
              name: "五通桥区"
            }, {
              code: "511113",
              name: "金口河区"
            }, {
              code: "511123",
              name: "犍为县"
            }, {
              code: "511124",
              name: "井研县"
            }, {
              code: "511126",
              name: "夹江县"
            }, {
              code: "511129",
              name: "沐川县"
            }, {
              code: "511132",
              name: "峨边彝族自治县"
            }, {
              code: "511133",
              name: "马边彝族自治县"
            }, {
              code: "511181",
              name: "峨眉山市"
            }]
          }, {
            code: "5113",
            name: "南充市",
            children: [{
              code: "511302",
              name: "顺庆区"
            }, {
              code: "511303",
              name: "高坪区"
            }, {
              code: "511304",
              name: "嘉陵区"
            }, {
              code: "511321",
              name: "南部县"
            }, {
              code: "511322",
              name: "营山县"
            }, {
              code: "511323",
              name: "蓬安县"
            }, {
              code: "511324",
              name: "仪陇县"
            }, {
              code: "511325",
              name: "西充县"
            }, {
              code: "511381",
              name: "阆中市"
            }]
          }, {
            code: "5114",
            name: "眉山市",
            children: [{
              code: "511402",
              name: "东坡区"
            }, {
              code: "511403",
              name: "彭山区"
            }, {
              code: "511421",
              name: "仁寿县"
            }, {
              code: "511423",
              name: "洪雅县"
            }, {
              code: "511424",
              name: "丹棱县"
            }, {
              code: "511425",
              name: "青神县"
            }]
          }, {
            code: "5115",
            name: "宜宾市",
            children: [{
              code: "511502",
              name: "翠屏区"
            }, {
              code: "511503",
              name: "南溪区"
            }, {
              code: "511504",
              name: "叙州区"
            }, {
              code: "511523",
              name: "江安县"
            }, {
              code: "511524",
              name: "长宁县"
            }, {
              code: "511525",
              name: "高县"
            }, {
              code: "511526",
              name: "珙县"
            }, {
              code: "511527",
              name: "筠连县"
            }, {
              code: "511528",
              name: "兴文县"
            }, {
              code: "511529",
              name: "屏山县"
            }]
          }, {
            code: "5116",
            name: "广安市",
            children: [{
              code: "511602",
              name: "广安区"
            }, {
              code: "511603",
              name: "前锋区"
            }, {
              code: "511621",
              name: "岳池县"
            }, {
              code: "511622",
              name: "武胜县"
            }, {
              code: "511623",
              name: "邻水县"
            }, {
              code: "511681",
              name: "华蓥市"
            }]
          }, {
            code: "5117",
            name: "达州市",
            children: [{
              code: "511702",
              name: "通川区"
            }, {
              code: "511703",
              name: "达川区"
            }, {
              code: "511722",
              name: "宣汉县"
            }, {
              code: "511723",
              name: "开江县"
            }, {
              code: "511724",
              name: "大竹县"
            }, {
              code: "511725",
              name: "渠县"
            }, {
              code: "511781",
              name: "万源市"
            }]
          }, {
            code: "5118",
            name: "雅安市",
            children: [{
              code: "511802",
              name: "雨城区"
            }, {
              code: "511803",
              name: "名山区"
            }, {
              code: "511822",
              name: "荥经县"
            }, {
              code: "511823",
              name: "汉源县"
            }, {
              code: "511824",
              name: "石棉县"
            }, {
              code: "511825",
              name: "天全县"
            }, {
              code: "511826",
              name: "芦山县"
            }, {
              code: "511827",
              name: "宝兴县"
            }]
          }, {
            code: "5119",
            name: "巴中市",
            children: [{
              code: "511902",
              name: "巴州区"
            }, {
              code: "511903",
              name: "恩阳区"
            }, {
              code: "511921",
              name: "通江县"
            }, {
              code: "511922",
              name: "南江县"
            }, {
              code: "511923",
              name: "平昌县"
            }]
          }, {
            code: "5120",
            name: "资阳市",
            children: [{
              code: "512002",
              name: "雁江区"
            }, {
              code: "512021",
              name: "安岳县"
            }, {
              code: "512022",
              name: "乐至县"
            }]
          }, {
            code: "5132",
            name: "阿坝藏族羌族自治州",
            children: [{
              code: "513201",
              name: "马尔康市"
            }, {
              code: "513221",
              name: "汶川县"
            }, {
              code: "513222",
              name: "理县"
            }, {
              code: "513223",
              name: "茂县"
            }, {
              code: "513224",
              name: "松潘县"
            }, {
              code: "513225",
              name: "九寨沟县"
            }, {
              code: "513226",
              name: "金川县"
            }, {
              code: "513227",
              name: "小金县"
            }, {
              code: "513228",
              name: "黑水县"
            }, {
              code: "513230",
              name: "壤塘县"
            }, {
              code: "513231",
              name: "阿坝县"
            }, {
              code: "513232",
              name: "若尔盖县"
            }, {
              code: "513233",
              name: "红原县"
            }]
          }, {
            code: "5133",
            name: "甘孜藏族自治州",
            children: [{
              code: "513301",
              name: "康定市"
            }, {
              code: "513322",
              name: "泸定县"
            }, {
              code: "513323",
              name: "丹巴县"
            }, {
              code: "513324",
              name: "九龙县"
            }, {
              code: "513325",
              name: "雅江县"
            }, {
              code: "513326",
              name: "道孚县"
            }, {
              code: "513327",
              name: "炉霍县"
            }, {
              code: "513328",
              name: "甘孜县"
            }, {
              code: "513329",
              name: "新龙县"
            }, {
              code: "513330",
              name: "德格县"
            }, {
              code: "513331",
              name: "白玉县"
            }, {
              code: "513332",
              name: "石渠县"
            }, {
              code: "513333",
              name: "色达县"
            }, {
              code: "513334",
              name: "理塘县"
            }, {
              code: "513335",
              name: "巴塘县"
            }, {
              code: "513336",
              name: "乡城县"
            }, {
              code: "513337",
              name: "稻城县"
            }, {
              code: "513338",
              name: "得荣县"
            }]
          }, {
            code: "5134",
            name: "凉山彝族自治州",
            children: [{
              code: "513401",
              name: "西昌市"
            }, {
              code: "513402",
              name: "会理市"
            }, {
              code: "513422",
              name: "木里藏族自治县"
            }, {
              code: "513423",
              name: "盐源县"
            }, {
              code: "513424",
              name: "德昌县"
            }, {
              code: "513426",
              name: "会东县"
            }, {
              code: "513427",
              name: "宁南县"
            }, {
              code: "513428",
              name: "普格县"
            }, {
              code: "513429",
              name: "布拖县"
            }, {
              code: "513430",
              name: "金阳县"
            }, {
              code: "513431",
              name: "昭觉县"
            }, {
              code: "513432",
              name: "喜德县"
            }, {
              code: "513433",
              name: "冕宁县"
            }, {
              code: "513434",
              name: "越西县"
            }, {
              code: "513435",
              name: "甘洛县"
            }, {
              code: "513436",
              name: "美姑县"
            }, {
              code: "513437",
              name: "雷波县"
            }]
          }]
        }, {
          code: "52",
          name: "贵州省",
          children: [{
            code: "5201",
            name: "贵阳市",
            children: [{
              code: "520102",
              name: "南明区"
            }, {
              code: "520103",
              name: "云岩区"
            }, {
              code: "520111",
              name: "花溪区"
            }, {
              code: "520112",
              name: "乌当区"
            }, {
              code: "520113",
              name: "白云区"
            }, {
              code: "520115",
              name: "观山湖区"
            }, {
              code: "520121",
              name: "开阳县"
            }, {
              code: "520122",
              name: "息烽县"
            }, {
              code: "520123",
              name: "修文县"
            }, {
              code: "520181",
              name: "清镇市"
            }]
          }, {
            code: "5202",
            name: "六盘水市",
            children: [{
              code: "520201",
              name: "钟山区"
            }, {
              code: "520203",
              name: "六枝特区"
            }, {
              code: "520204",
              name: "水城区"
            }, {
              code: "520281",
              name: "盘州市"
            }]
          }, {
            code: "5203",
            name: "遵义市",
            children: [{
              code: "520302",
              name: "红花岗区"
            }, {
              code: "520303",
              name: "汇川区"
            }, {
              code: "520304",
              name: "播州区"
            }, {
              code: "520322",
              name: "桐梓县"
            }, {
              code: "520323",
              name: "绥阳县"
            }, {
              code: "520324",
              name: "正安县"
            }, {
              code: "520325",
              name: "道真仡佬族苗族自治县"
            }, {
              code: "520326",
              name: "务川仡佬族苗族自治县"
            }, {
              code: "520327",
              name: "凤冈县"
            }, {
              code: "520328",
              name: "湄潭县"
            }, {
              code: "520329",
              name: "余庆县"
            }, {
              code: "520330",
              name: "习水县"
            }, {
              code: "520381",
              name: "赤水市"
            }, {
              code: "520382",
              name: "仁怀市"
            }]
          }, {
            code: "5204",
            name: "安顺市",
            children: [{
              code: "520402",
              name: "西秀区"
            }, {
              code: "520403",
              name: "平坝区"
            }, {
              code: "520422",
              name: "普定县"
            }, {
              code: "520423",
              name: "镇宁布依族苗族自治县"
            }, {
              code: "520424",
              name: "关岭布依族苗族自治县"
            }, {
              code: "520425",
              name: "紫云苗族布依族自治县"
            }]
          }, {
            code: "5205",
            name: "毕节市",
            children: [{
              code: "520502",
              name: "七星关区"
            }, {
              code: "520521",
              name: "大方县"
            }, {
              code: "520523",
              name: "金沙县"
            }, {
              code: "520524",
              name: "织金县"
            }, {
              code: "520525",
              name: "纳雍县"
            }, {
              code: "520526",
              name: "威宁彝族回族苗族自治县"
            }, {
              code: "520527",
              name: "赫章县"
            }, {
              code: "520581",
              name: "黔西市"
            }]
          }, {
            code: "5206",
            name: "铜仁市",
            children: [{
              code: "520602",
              name: "碧江区"
            }, {
              code: "520603",
              name: "万山区"
            }, {
              code: "520621",
              name: "江口县"
            }, {
              code: "520622",
              name: "玉屏侗族自治县"
            }, {
              code: "520623",
              name: "石阡县"
            }, {
              code: "520624",
              name: "思南县"
            }, {
              code: "520625",
              name: "印江土家族苗族自治县"
            }, {
              code: "520626",
              name: "德江县"
            }, {
              code: "520627",
              name: "沿河土家族自治县"
            }, {
              code: "520628",
              name: "松桃苗族自治县"
            }]
          }, {
            code: "5223",
            name: "黔西南布依族苗族自治州",
            children: [{
              code: "522301",
              name: "兴义市"
            }, {
              code: "522302",
              name: "兴仁市"
            }, {
              code: "522323",
              name: "普安县"
            }, {
              code: "522324",
              name: "晴隆县"
            }, {
              code: "522325",
              name: "贞丰县"
            }, {
              code: "522326",
              name: "望谟县"
            }, {
              code: "522327",
              name: "册亨县"
            }, {
              code: "522328",
              name: "安龙县"
            }]
          }, {
            code: "5226",
            name: "黔东南苗族侗族自治州",
            children: [{
              code: "522601",
              name: "凯里市"
            }, {
              code: "522622",
              name: "黄平县"
            }, {
              code: "522623",
              name: "施秉县"
            }, {
              code: "522624",
              name: "三穗县"
            }, {
              code: "522625",
              name: "镇远县"
            }, {
              code: "522626",
              name: "岑巩县"
            }, {
              code: "522627",
              name: "天柱县"
            }, {
              code: "522628",
              name: "锦屏县"
            }, {
              code: "522629",
              name: "剑河县"
            }, {
              code: "522630",
              name: "台江县"
            }, {
              code: "522631",
              name: "黎平县"
            }, {
              code: "522632",
              name: "榕江县"
            }, {
              code: "522633",
              name: "从江县"
            }, {
              code: "522634",
              name: "雷山县"
            }, {
              code: "522635",
              name: "麻江县"
            }, {
              code: "522636",
              name: "丹寨县"
            }]
          }, {
            code: "5227",
            name: "黔南布依族苗族自治州",
            children: [{
              code: "522701",
              name: "都匀市"
            }, {
              code: "522702",
              name: "福泉市"
            }, {
              code: "522722",
              name: "荔波县"
            }, {
              code: "522723",
              name: "贵定县"
            }, {
              code: "522725",
              name: "瓮安县"
            }, {
              code: "522726",
              name: "独山县"
            }, {
              code: "522727",
              name: "平塘县"
            }, {
              code: "522728",
              name: "罗甸县"
            }, {
              code: "522729",
              name: "长顺县"
            }, {
              code: "522730",
              name: "龙里县"
            }, {
              code: "522731",
              name: "惠水县"
            }, {
              code: "522732",
              name: "三都水族自治县"
            }]
          }]
        }, {
          code: "53",
          name: "云南省",
          children: [{
            code: "5301",
            name: "昆明市",
            children: [{
              code: "530102",
              name: "五华区"
            }, {
              code: "530103",
              name: "盘龙区"
            }, {
              code: "530111",
              name: "官渡区"
            }, {
              code: "530112",
              name: "西山区"
            }, {
              code: "530113",
              name: "东川区"
            }, {
              code: "530114",
              name: "呈贡区"
            }, {
              code: "530115",
              name: "晋宁区"
            }, {
              code: "530124",
              name: "富民县"
            }, {
              code: "530125",
              name: "宜良县"
            }, {
              code: "530126",
              name: "石林彝族自治县"
            }, {
              code: "530127",
              name: "嵩明县"
            }, {
              code: "530128",
              name: "禄劝彝族苗族自治县"
            }, {
              code: "530129",
              name: "寻甸回族彝族自治县"
            }, {
              code: "530181",
              name: "安宁市"
            }]
          }, {
            code: "5303",
            name: "曲靖市",
            children: [{
              code: "530302",
              name: "麒麟区"
            }, {
              code: "530303",
              name: "沾益区"
            }, {
              code: "530304",
              name: "马龙区"
            }, {
              code: "530322",
              name: "陆良县"
            }, {
              code: "530323",
              name: "师宗县"
            }, {
              code: "530324",
              name: "罗平县"
            }, {
              code: "530325",
              name: "富源县"
            }, {
              code: "530326",
              name: "会泽县"
            }, {
              code: "530381",
              name: "宣威市"
            }]
          }, {
            code: "5304",
            name: "玉溪市",
            children: [{
              code: "530402",
              name: "红塔区"
            }, {
              code: "530403",
              name: "江川区"
            }, {
              code: "530423",
              name: "通海县"
            }, {
              code: "530424",
              name: "华宁县"
            }, {
              code: "530425",
              name: "易门县"
            }, {
              code: "530426",
              name: "峨山彝族自治县"
            }, {
              code: "530427",
              name: "新平彝族傣族自治县"
            }, {
              code: "530428",
              name: "元江哈尼族彝族傣族自治县"
            }, {
              code: "530481",
              name: "澄江市"
            }]
          }, {
            code: "5305",
            name: "保山市",
            children: [{
              code: "530502",
              name: "隆阳区"
            }, {
              code: "530521",
              name: "施甸县"
            }, {
              code: "530523",
              name: "龙陵县"
            }, {
              code: "530524",
              name: "昌宁县"
            }, {
              code: "530581",
              name: "腾冲市"
            }]
          }, {
            code: "5306",
            name: "昭通市",
            children: [{
              code: "530602",
              name: "昭阳区"
            }, {
              code: "530621",
              name: "鲁甸县"
            }, {
              code: "530622",
              name: "巧家县"
            }, {
              code: "530623",
              name: "盐津县"
            }, {
              code: "530624",
              name: "大关县"
            }, {
              code: "530625",
              name: "永善县"
            }, {
              code: "530626",
              name: "绥江县"
            }, {
              code: "530627",
              name: "镇雄县"
            }, {
              code: "530628",
              name: "彝良县"
            }, {
              code: "530629",
              name: "威信县"
            }, {
              code: "530681",
              name: "水富市"
            }]
          }, {
            code: "5307",
            name: "丽江市",
            children: [{
              code: "530702",
              name: "古城区"
            }, {
              code: "530721",
              name: "玉龙纳西族自治县"
            }, {
              code: "530722",
              name: "永胜县"
            }, {
              code: "530723",
              name: "华坪县"
            }, {
              code: "530724",
              name: "宁蒗彝族自治县"
            }]
          }, {
            code: "5308",
            name: "普洱市",
            children: [{
              code: "530802",
              name: "思茅区"
            }, {
              code: "530821",
              name: "宁洱哈尼族彝族自治县"
            }, {
              code: "530822",
              name: "墨江哈尼族自治县"
            }, {
              code: "530823",
              name: "景东彝族自治县"
            }, {
              code: "530824",
              name: "景谷傣族彝族自治县"
            }, {
              code: "530825",
              name: "镇沅彝族哈尼族拉祜族自治县"
            }, {
              code: "530826",
              name: "江城哈尼族彝族自治县"
            }, {
              code: "530827",
              name: "孟连傣族拉祜族佤族自治县"
            }, {
              code: "530828",
              name: "澜沧拉祜族自治县"
            }, {
              code: "530829",
              name: "西盟佤族自治县"
            }]
          }, {
            code: "5309",
            name: "临沧市",
            children: [{
              code: "530902",
              name: "临翔区"
            }, {
              code: "530921",
              name: "凤庆县"
            }, {
              code: "530922",
              name: "云县"
            }, {
              code: "530923",
              name: "永德县"
            }, {
              code: "530924",
              name: "镇康县"
            }, {
              code: "530925",
              name: "双江拉祜族佤族布朗族傣族自治县"
            }, {
              code: "530926",
              name: "耿马傣族佤族自治县"
            }, {
              code: "530927",
              name: "沧源佤族自治县"
            }]
          }, {
            code: "5323",
            name: "楚雄彝族自治州",
            children: [{
              code: "532301",
              name: "楚雄市"
            }, {
              code: "532302",
              name: "禄丰市"
            }, {
              code: "532322",
              name: "双柏县"
            }, {
              code: "532323",
              name: "牟定县"
            }, {
              code: "532324",
              name: "南华县"
            }, {
              code: "532325",
              name: "姚安县"
            }, {
              code: "532326",
              name: "大姚县"
            }, {
              code: "532327",
              name: "永仁县"
            }, {
              code: "532328",
              name: "元谋县"
            }, {
              code: "532329",
              name: "武定县"
            }]
          }, {
            code: "5325",
            name: "红河哈尼族彝族自治州",
            children: [{
              code: "532501",
              name: "个旧市"
            }, {
              code: "532502",
              name: "开远市"
            }, {
              code: "532503",
              name: "蒙自市"
            }, {
              code: "532504",
              name: "弥勒市"
            }, {
              code: "532523",
              name: "屏边苗族自治县"
            }, {
              code: "532524",
              name: "建水县"
            }, {
              code: "532525",
              name: "石屏县"
            }, {
              code: "532527",
              name: "泸西县"
            }, {
              code: "532528",
              name: "元阳县"
            }, {
              code: "532529",
              name: "红河县"
            }, {
              code: "532530",
              name: "金平苗族瑶族傣族自治县"
            }, {
              code: "532531",
              name: "绿春县"
            }, {
              code: "532532",
              name: "河口瑶族自治县"
            }]
          }, {
            code: "5326",
            name: "文山壮族苗族自治州",
            children: [{
              code: "532601",
              name: "文山市"
            }, {
              code: "532622",
              name: "砚山县"
            }, {
              code: "532623",
              name: "西畴县"
            }, {
              code: "532624",
              name: "麻栗坡县"
            }, {
              code: "532625",
              name: "马关县"
            }, {
              code: "532626",
              name: "丘北县"
            }, {
              code: "532627",
              name: "广南县"
            }, {
              code: "532628",
              name: "富宁县"
            }]
          }, {
            code: "5328",
            name: "西双版纳傣族自治州",
            children: [{
              code: "532801",
              name: "景洪市"
            }, {
              code: "532822",
              name: "勐海县"
            }, {
              code: "532823",
              name: "勐腊县"
            }]
          }, {
            code: "5329",
            name: "大理白族自治州",
            children: [{
              code: "532901",
              name: "大理市"
            }, {
              code: "532922",
              name: "漾濞彝族自治县"
            }, {
              code: "532923",
              name: "祥云县"
            }, {
              code: "532924",
              name: "宾川县"
            }, {
              code: "532925",
              name: "弥渡县"
            }, {
              code: "532926",
              name: "南涧彝族自治县"
            }, {
              code: "532927",
              name: "巍山彝族回族自治县"
            }, {
              code: "532928",
              name: "永平县"
            }, {
              code: "532929",
              name: "云龙县"
            }, {
              code: "532930",
              name: "洱源县"
            }, {
              code: "532931",
              name: "剑川县"
            }, {
              code: "532932",
              name: "鹤庆县"
            }]
          }, {
            code: "5331",
            name: "德宏傣族景颇族自治州",
            children: [{
              code: "533102",
              name: "瑞丽市"
            }, {
              code: "533103",
              name: "芒市"
            }, {
              code: "533122",
              name: "梁河县"
            }, {
              code: "533123",
              name: "盈江县"
            }, {
              code: "533124",
              name: "陇川县"
            }]
          }, {
            code: "5333",
            name: "怒江傈僳族自治州",
            children: [{
              code: "533301",
              name: "泸水市"
            }, {
              code: "533323",
              name: "福贡县"
            }, {
              code: "533324",
              name: "贡山独龙族怒族自治县"
            }, {
              code: "533325",
              name: "兰坪白族普米族自治县"
            }]
          }, {
            code: "5334",
            name: "迪庆藏族自治州",
            children: [{
              code: "533401",
              name: "香格里拉市"
            }, {
              code: "533422",
              name: "德钦县"
            }, {
              code: "533423",
              name: "维西傈僳族自治县"
            }]
          }]
        }, {
          code: "54",
          name: "西藏自治区",
          children: [{
            code: "5401",
            name: "拉萨市",
            children: [{
              code: "540102",
              name: "城关区"
            }, {
              code: "540103",
              name: "堆龙德庆区"
            }, {
              code: "540104",
              name: "达孜区"
            }, {
              code: "540121",
              name: "林周县"
            }, {
              code: "540122",
              name: "当雄县"
            }, {
              code: "540123",
              name: "尼木县"
            }, {
              code: "540124",
              name: "曲水县"
            }, {
              code: "540127",
              name: "墨竹工卡县"
            }, {
              code: "540171",
              name: "格尔木藏青工业园区"
            }, {
              code: "540172",
              name: "拉萨经济技术开发区"
            }, {
              code: "540173",
              name: "西藏文化旅游创意园区"
            }, {
              code: "540174",
              name: "达孜工业园区"
            }]
          }, {
            code: "5402",
            name: "日喀则市",
            children: [{
              code: "540202",
              name: "桑珠孜区"
            }, {
              code: "540221",
              name: "南木林县"
            }, {
              code: "540222",
              name: "江孜县"
            }, {
              code: "540223",
              name: "定日县"
            }, {
              code: "540224",
              name: "萨迦县"
            }, {
              code: "540225",
              name: "拉孜县"
            }, {
              code: "540226",
              name: "昂仁县"
            }, {
              code: "540227",
              name: "谢通门县"
            }, {
              code: "540228",
              name: "白朗县"
            }, {
              code: "540229",
              name: "仁布县"
            }, {
              code: "540230",
              name: "康马县"
            }, {
              code: "540231",
              name: "定结县"
            }, {
              code: "540232",
              name: "仲巴县"
            }, {
              code: "540233",
              name: "亚东县"
            }, {
              code: "540234",
              name: "吉隆县"
            }, {
              code: "540235",
              name: "聂拉木县"
            }, {
              code: "540236",
              name: "萨嘎县"
            }, {
              code: "540237",
              name: "岗巴县"
            }]
          }, {
            code: "5403",
            name: "昌都市",
            children: [{
              code: "540302",
              name: "卡若区"
            }, {
              code: "540321",
              name: "江达县"
            }, {
              code: "540322",
              name: "贡觉县"
            }, {
              code: "540323",
              name: "类乌齐县"
            }, {
              code: "540324",
              name: "丁青县"
            }, {
              code: "540325",
              name: "察雅县"
            }, {
              code: "540326",
              name: "八宿县"
            }, {
              code: "540327",
              name: "左贡县"
            }, {
              code: "540328",
              name: "芒康县"
            }, {
              code: "540329",
              name: "洛隆县"
            }, {
              code: "540330",
              name: "边坝县"
            }]
          }, {
            code: "5404",
            name: "林芝市",
            children: [{
              code: "540402",
              name: "巴宜区"
            }, {
              code: "540421",
              name: "工布江达县"
            }, {
              code: "540423",
              name: "墨脱县"
            }, {
              code: "540424",
              name: "波密县"
            }, {
              code: "540425",
              name: "察隅县"
            }, {
              code: "540426",
              name: "朗县"
            }, {
              code: "540481",
              name: "米林市"
            }]
          }, {
            code: "5405",
            name: "山南市",
            children: [{
              code: "540502",
              name: "乃东区"
            }, {
              code: "540521",
              name: "扎囊县"
            }, {
              code: "540522",
              name: "贡嘎县"
            }, {
              code: "540523",
              name: "桑日县"
            }, {
              code: "540524",
              name: "琼结县"
            }, {
              code: "540525",
              name: "曲松县"
            }, {
              code: "540526",
              name: "措美县"
            }, {
              code: "540527",
              name: "洛扎县"
            }, {
              code: "540528",
              name: "加查县"
            }, {
              code: "540529",
              name: "隆子县"
            }, {
              code: "540531",
              name: "浪卡子县"
            }, {
              code: "540581",
              name: "错那市"
            }]
          }, {
            code: "5406",
            name: "那曲市",
            children: [{
              code: "540602",
              name: "色尼区"
            }, {
              code: "540621",
              name: "嘉黎县"
            }, {
              code: "540622",
              name: "比如县"
            }, {
              code: "540623",
              name: "聂荣县"
            }, {
              code: "540624",
              name: "安多县"
            }, {
              code: "540625",
              name: "申扎县"
            }, {
              code: "540626",
              name: "索县"
            }, {
              code: "540627",
              name: "班戈县"
            }, {
              code: "540628",
              name: "巴青县"
            }, {
              code: "540629",
              name: "尼玛县"
            }, {
              code: "540630",
              name: "双湖县"
            }]
          }, {
            code: "5425",
            name: "阿里地区",
            children: [{
              code: "542521",
              name: "普兰县"
            }, {
              code: "542522",
              name: "札达县"
            }, {
              code: "542523",
              name: "噶尔县"
            }, {
              code: "542524",
              name: "日土县"
            }, {
              code: "542525",
              name: "革吉县"
            }, {
              code: "542526",
              name: "改则县"
            }, {
              code: "542527",
              name: "措勤县"
            }]
          }]
        }, {
          code: "61",
          name: "陕西省",
          children: [{
            code: "6101",
            name: "西安市",
            children: [{
              code: "610102",
              name: "新城区"
            }, {
              code: "610103",
              name: "碑林区"
            }, {
              code: "610104",
              name: "莲湖区"
            }, {
              code: "610111",
              name: "灞桥区"
            }, {
              code: "610112",
              name: "未央区"
            }, {
              code: "610113",
              name: "雁塔区"
            }, {
              code: "610114",
              name: "阎良区"
            }, {
              code: "610115",
              name: "临潼区"
            }, {
              code: "610116",
              name: "长安区"
            }, {
              code: "610117",
              name: "高陵区"
            }, {
              code: "610118",
              name: "鄠邑区"
            }, {
              code: "610122",
              name: "蓝田县"
            }, {
              code: "610124",
              name: "周至县"
            }]
          }, {
            code: "6102",
            name: "铜川市",
            children: [{
              code: "610202",
              name: "王益区"
            }, {
              code: "610203",
              name: "印台区"
            }, {
              code: "610204",
              name: "耀州区"
            }, {
              code: "610222",
              name: "宜君县"
            }]
          }, {
            code: "6103",
            name: "宝鸡市",
            children: [{
              code: "610302",
              name: "渭滨区"
            }, {
              code: "610303",
              name: "金台区"
            }, {
              code: "610304",
              name: "陈仓区"
            }, {
              code: "610305",
              name: "凤翔区"
            }, {
              code: "610323",
              name: "岐山县"
            }, {
              code: "610324",
              name: "扶风县"
            }, {
              code: "610326",
              name: "眉县"
            }, {
              code: "610327",
              name: "陇县"
            }, {
              code: "610328",
              name: "千阳县"
            }, {
              code: "610329",
              name: "麟游县"
            }, {
              code: "610330",
              name: "凤县"
            }, {
              code: "610331",
              name: "太白县"
            }]
          }, {
            code: "6104",
            name: "咸阳市",
            children: [{
              code: "610402",
              name: "秦都区"
            }, {
              code: "610403",
              name: "杨陵区"
            }, {
              code: "610404",
              name: "渭城区"
            }, {
              code: "610422",
              name: "三原县"
            }, {
              code: "610423",
              name: "泾阳县"
            }, {
              code: "610424",
              name: "乾县"
            }, {
              code: "610425",
              name: "礼泉县"
            }, {
              code: "610426",
              name: "永寿县"
            }, {
              code: "610428",
              name: "长武县"
            }, {
              code: "610429",
              name: "旬邑县"
            }, {
              code: "610430",
              name: "淳化县"
            }, {
              code: "610431",
              name: "武功县"
            }, {
              code: "610481",
              name: "兴平市"
            }, {
              code: "610482",
              name: "彬州市"
            }]
          }, {
            code: "6105",
            name: "渭南市",
            children: [{
              code: "610502",
              name: "临渭区"
            }, {
              code: "610503",
              name: "华州区"
            }, {
              code: "610522",
              name: "潼关县"
            }, {
              code: "610523",
              name: "大荔县"
            }, {
              code: "610524",
              name: "合阳县"
            }, {
              code: "610525",
              name: "澄城县"
            }, {
              code: "610526",
              name: "蒲城县"
            }, {
              code: "610527",
              name: "白水县"
            }, {
              code: "610528",
              name: "富平县"
            }, {
              code: "610581",
              name: "韩城市"
            }, {
              code: "610582",
              name: "华阴市"
            }]
          }, {
            code: "6106",
            name: "延安市",
            children: [{
              code: "610602",
              name: "宝塔区"
            }, {
              code: "610603",
              name: "安塞区"
            }, {
              code: "610621",
              name: "延长县"
            }, {
              code: "610622",
              name: "延川县"
            }, {
              code: "610625",
              name: "志丹县"
            }, {
              code: "610626",
              name: "吴起县"
            }, {
              code: "610627",
              name: "甘泉县"
            }, {
              code: "610628",
              name: "富县"
            }, {
              code: "610629",
              name: "洛川县"
            }, {
              code: "610630",
              name: "宜川县"
            }, {
              code: "610631",
              name: "黄龙县"
            }, {
              code: "610632",
              name: "黄陵县"
            }, {
              code: "610681",
              name: "子长市"
            }]
          }, {
            code: "6107",
            name: "汉中市",
            children: [{
              code: "610702",
              name: "汉台区"
            }, {
              code: "610703",
              name: "南郑区"
            }, {
              code: "610722",
              name: "城固县"
            }, {
              code: "610723",
              name: "洋县"
            }, {
              code: "610724",
              name: "西乡县"
            }, {
              code: "610725",
              name: "勉县"
            }, {
              code: "610726",
              name: "宁强县"
            }, {
              code: "610727",
              name: "略阳县"
            }, {
              code: "610728",
              name: "镇巴县"
            }, {
              code: "610729",
              name: "留坝县"
            }, {
              code: "610730",
              name: "佛坪县"
            }]
          }, {
            code: "6108",
            name: "榆林市",
            children: [{
              code: "610802",
              name: "榆阳区"
            }, {
              code: "610803",
              name: "横山区"
            }, {
              code: "610822",
              name: "府谷县"
            }, {
              code: "610824",
              name: "靖边县"
            }, {
              code: "610825",
              name: "定边县"
            }, {
              code: "610826",
              name: "绥德县"
            }, {
              code: "610827",
              name: "米脂县"
            }, {
              code: "610828",
              name: "佳县"
            }, {
              code: "610829",
              name: "吴堡县"
            }, {
              code: "610830",
              name: "清涧县"
            }, {
              code: "610831",
              name: "子洲县"
            }, {
              code: "610881",
              name: "神木市"
            }]
          }, {
            code: "6109",
            name: "安康市",
            children: [{
              code: "610902",
              name: "汉滨区"
            }, {
              code: "610921",
              name: "汉阴县"
            }, {
              code: "610922",
              name: "石泉县"
            }, {
              code: "610923",
              name: "宁陕县"
            }, {
              code: "610924",
              name: "紫阳县"
            }, {
              code: "610925",
              name: "岚皋县"
            }, {
              code: "610926",
              name: "平利县"
            }, {
              code: "610927",
              name: "镇坪县"
            }, {
              code: "610929",
              name: "白河县"
            }, {
              code: "610981",
              name: "旬阳市"
            }]
          }, {
            code: "6110",
            name: "商洛市",
            children: [{
              code: "611002",
              name: "商州区"
            }, {
              code: "611021",
              name: "洛南县"
            }, {
              code: "611022",
              name: "丹凤县"
            }, {
              code: "611023",
              name: "商南县"
            }, {
              code: "611024",
              name: "山阳县"
            }, {
              code: "611025",
              name: "镇安县"
            }, {
              code: "611026",
              name: "柞水县"
            }]
          }]
        }, {
          code: "62",
          name: "甘肃省",
          children: [{
            code: "6201",
            name: "兰州市",
            children: [{
              code: "620102",
              name: "城关区"
            }, {
              code: "620103",
              name: "七里河区"
            }, {
              code: "620104",
              name: "西固区"
            }, {
              code: "620105",
              name: "安宁区"
            }, {
              code: "620111",
              name: "红古区"
            }, {
              code: "620121",
              name: "永登县"
            }, {
              code: "620122",
              name: "皋兰县"
            }, {
              code: "620123",
              name: "榆中县"
            }, {
              code: "620171",
              name: "兰州新区"
            }]
          }, {
            code: "6202",
            name: "嘉峪关市",
            children: [{
              code: "620201001",
              name: "雄关街道"
            }, {
              code: "620201002",
              name: "钢城街道"
            }, {
              code: "620201100",
              name: "新城镇"
            }, {
              code: "620201101",
              name: "峪泉镇"
            }, {
              code: "620201102",
              name: "文殊镇"
            }]
          }, {
            code: "6203",
            name: "金昌市",
            children: [{
              code: "620302",
              name: "金川区"
            }, {
              code: "620321",
              name: "永昌县"
            }]
          }, {
            code: "6204",
            name: "白银市",
            children: [{
              code: "620402",
              name: "白银区"
            }, {
              code: "620403",
              name: "平川区"
            }, {
              code: "620421",
              name: "靖远县"
            }, {
              code: "620422",
              name: "会宁县"
            }, {
              code: "620423",
              name: "景泰县"
            }]
          }, {
            code: "6205",
            name: "天水市",
            children: [{
              code: "620502",
              name: "秦州区"
            }, {
              code: "620503",
              name: "麦积区"
            }, {
              code: "620521",
              name: "清水县"
            }, {
              code: "620522",
              name: "秦安县"
            }, {
              code: "620523",
              name: "甘谷县"
            }, {
              code: "620524",
              name: "武山县"
            }, {
              code: "620525",
              name: "张家川回族自治县"
            }]
          }, {
            code: "6206",
            name: "武威市",
            children: [{
              code: "620602",
              name: "凉州区"
            }, {
              code: "620621",
              name: "民勤县"
            }, {
              code: "620622",
              name: "古浪县"
            }, {
              code: "620623",
              name: "天祝藏族自治县"
            }]
          }, {
            code: "6207",
            name: "张掖市",
            children: [{
              code: "620702",
              name: "甘州区"
            }, {
              code: "620721",
              name: "肃南裕固族自治县"
            }, {
              code: "620722",
              name: "民乐县"
            }, {
              code: "620723",
              name: "临泽县"
            }, {
              code: "620724",
              name: "高台县"
            }, {
              code: "620725",
              name: "山丹县"
            }]
          }, {
            code: "6208",
            name: "平凉市",
            children: [{
              code: "620802",
              name: "崆峒区"
            }, {
              code: "620821",
              name: "泾川县"
            }, {
              code: "620822",
              name: "灵台县"
            }, {
              code: "620823",
              name: "崇信县"
            }, {
              code: "620825",
              name: "庄浪县"
            }, {
              code: "620826",
              name: "静宁县"
            }, {
              code: "620881",
              name: "华亭市"
            }]
          }, {
            code: "6209",
            name: "酒泉市",
            children: [{
              code: "620902",
              name: "肃州区"
            }, {
              code: "620921",
              name: "金塔县"
            }, {
              code: "620922",
              name: "瓜州县"
            }, {
              code: "620923",
              name: "肃北蒙古族自治县"
            }, {
              code: "620924",
              name: "阿克塞哈萨克族自治县"
            }, {
              code: "620981",
              name: "玉门市"
            }, {
              code: "620982",
              name: "敦煌市"
            }]
          }, {
            code: "6210",
            name: "庆阳市",
            children: [{
              code: "621002",
              name: "西峰区"
            }, {
              code: "621021",
              name: "庆城县"
            }, {
              code: "621022",
              name: "环县"
            }, {
              code: "621023",
              name: "华池县"
            }, {
              code: "621024",
              name: "合水县"
            }, {
              code: "621025",
              name: "正宁县"
            }, {
              code: "621026",
              name: "宁县"
            }, {
              code: "621027",
              name: "镇原县"
            }]
          }, {
            code: "6211",
            name: "定西市",
            children: [{
              code: "621102",
              name: "安定区"
            }, {
              code: "621121",
              name: "通渭县"
            }, {
              code: "621122",
              name: "陇西县"
            }, {
              code: "621123",
              name: "渭源县"
            }, {
              code: "621124",
              name: "临洮县"
            }, {
              code: "621125",
              name: "漳县"
            }, {
              code: "621126",
              name: "岷县"
            }]
          }, {
            code: "6212",
            name: "陇南市",
            children: [{
              code: "621202",
              name: "武都区"
            }, {
              code: "621221",
              name: "成县"
            }, {
              code: "621222",
              name: "文县"
            }, {
              code: "621223",
              name: "宕昌县"
            }, {
              code: "621224",
              name: "康县"
            }, {
              code: "621225",
              name: "西和县"
            }, {
              code: "621226",
              name: "礼县"
            }, {
              code: "621227",
              name: "徽县"
            }, {
              code: "621228",
              name: "两当县"
            }]
          }, {
            code: "6229",
            name: "临夏回族自治州",
            children: [{
              code: "622901",
              name: "临夏市"
            }, {
              code: "622921",
              name: "临夏县"
            }, {
              code: "622922",
              name: "康乐县"
            }, {
              code: "622923",
              name: "永靖县"
            }, {
              code: "622924",
              name: "广河县"
            }, {
              code: "622925",
              name: "和政县"
            }, {
              code: "622926",
              name: "东乡族自治县"
            }, {
              code: "622927",
              name: "积石山保安族东乡族撒拉族自治县"
            }]
          }, {
            code: "6230",
            name: "甘南藏族自治州",
            children: [{
              code: "623001",
              name: "合作市"
            }, {
              code: "623021",
              name: "临潭县"
            }, {
              code: "623022",
              name: "卓尼县"
            }, {
              code: "623023",
              name: "舟曲县"
            }, {
              code: "623024",
              name: "迭部县"
            }, {
              code: "623025",
              name: "玛曲县"
            }, {
              code: "623026",
              name: "碌曲县"
            }, {
              code: "623027",
              name: "夏河县"
            }]
          }]
        }, {
          code: "63",
          name: "青海省",
          children: [{
            code: "6301",
            name: "西宁市",
            children: [{
              code: "630102",
              name: "城东区"
            }, {
              code: "630103",
              name: "城中区"
            }, {
              code: "630104",
              name: "城西区"
            }, {
              code: "630105",
              name: "城北区"
            }, {
              code: "630106",
              name: "湟中区"
            }, {
              code: "630121",
              name: "大通回族土族自治县"
            }, {
              code: "630123",
              name: "湟源县"
            }]
          }, {
            code: "6302",
            name: "海东市",
            children: [{
              code: "630202",
              name: "乐都区"
            }, {
              code: "630203",
              name: "平安区"
            }, {
              code: "630222",
              name: "民和回族土族自治县"
            }, {
              code: "630223",
              name: "互助土族自治县"
            }, {
              code: "630224",
              name: "化隆回族自治县"
            }, {
              code: "630225",
              name: "循化撒拉族自治县"
            }]
          }, {
            code: "6322",
            name: "海北藏族自治州",
            children: [{
              code: "632221",
              name: "门源回族自治县"
            }, {
              code: "632222",
              name: "祁连县"
            }, {
              code: "632223",
              name: "海晏县"
            }, {
              code: "632224",
              name: "刚察县"
            }]
          }, {
            code: "6323",
            name: "黄南藏族自治州",
            children: [{
              code: "632301",
              name: "同仁市"
            }, {
              code: "632322",
              name: "尖扎县"
            }, {
              code: "632323",
              name: "泽库县"
            }, {
              code: "632324",
              name: "河南蒙古族自治县"
            }]
          }, {
            code: "6325",
            name: "海南藏族自治州",
            children: [{
              code: "632521",
              name: "共和县"
            }, {
              code: "632522",
              name: "同德县"
            }, {
              code: "632523",
              name: "贵德县"
            }, {
              code: "632524",
              name: "兴海县"
            }, {
              code: "632525",
              name: "贵南县"
            }]
          }, {
            code: "6326",
            name: "果洛藏族自治州",
            children: [{
              code: "632621",
              name: "玛沁县"
            }, {
              code: "632622",
              name: "班玛县"
            }, {
              code: "632623",
              name: "甘德县"
            }, {
              code: "632624",
              name: "达日县"
            }, {
              code: "632625",
              name: "久治县"
            }, {
              code: "632626",
              name: "玛多县"
            }]
          }, {
            code: "6327",
            name: "玉树藏族自治州",
            children: [{
              code: "632701",
              name: "玉树市"
            }, {
              code: "632722",
              name: "杂多县"
            }, {
              code: "632723",
              name: "称多县"
            }, {
              code: "632724",
              name: "治多县"
            }, {
              code: "632725",
              name: "囊谦县"
            }, {
              code: "632726",
              name: "曲麻莱县"
            }]
          }, {
            code: "6328",
            name: "海西蒙古族藏族自治州",
            children: [{
              code: "632801",
              name: "格尔木市"
            }, {
              code: "632802",
              name: "德令哈市"
            }, {
              code: "632803",
              name: "茫崖市"
            }, {
              code: "632821",
              name: "乌兰县"
            }, {
              code: "632822",
              name: "都兰县"
            }, {
              code: "632823",
              name: "天峻县"
            }, {
              code: "632857",
              name: "大柴旦行政委员会"
            }]
          }]
        }, {
          code: "64",
          name: "宁夏回族自治区",
          children: [{
            code: "6401",
            name: "银川市",
            children: [{
              code: "640104",
              name: "兴庆区"
            }, {
              code: "640105",
              name: "西夏区"
            }, {
              code: "640106",
              name: "金凤区"
            }, {
              code: "640121",
              name: "永宁县"
            }, {
              code: "640122",
              name: "贺兰县"
            }, {
              code: "640181",
              name: "灵武市"
            }]
          }, {
            code: "6402",
            name: "石嘴山市",
            children: [{
              code: "640202",
              name: "大武口区"
            }, {
              code: "640205",
              name: "惠农区"
            }, {
              code: "640221",
              name: "平罗县"
            }]
          }, {
            code: "6403",
            name: "吴忠市",
            children: [{
              code: "640302",
              name: "利通区"
            }, {
              code: "640303",
              name: "红寺堡区"
            }, {
              code: "640323",
              name: "盐池县"
            }, {
              code: "640324",
              name: "同心县"
            }, {
              code: "640381",
              name: "青铜峡市"
            }]
          }, {
            code: "6404",
            name: "固原市",
            children: [{
              code: "640402",
              name: "原州区"
            }, {
              code: "640422",
              name: "西吉县"
            }, {
              code: "640423",
              name: "隆德县"
            }, {
              code: "640424",
              name: "泾源县"
            }, {
              code: "640425",
              name: "彭阳县"
            }]
          }, {
            code: "6405",
            name: "中卫市",
            children: [{
              code: "640502",
              name: "沙坡头区"
            }, {
              code: "640521",
              name: "中宁县"
            }, {
              code: "640522",
              name: "海原县"
            }]
          }]
        }, {
          code: "65",
          name: "新疆维吾尔自治区",
          children: [{
            code: "6501",
            name: "乌鲁木齐市",
            children: [{
              code: "650102",
              name: "天山区"
            }, {
              code: "650103",
              name: "沙依巴克区"
            }, {
              code: "650104",
              name: "新市区"
            }, {
              code: "650105",
              name: "水磨沟区"
            }, {
              code: "650106",
              name: "头屯河区"
            }, {
              code: "650107",
              name: "达坂城区"
            }, {
              code: "650109",
              name: "米东区"
            }, {
              code: "650121",
              name: "乌鲁木齐县"
            }]
          }, {
            code: "6502",
            name: "克拉玛依市",
            children: [{
              code: "650202",
              name: "独山子区"
            }, {
              code: "650203",
              name: "克拉玛依区"
            }, {
              code: "650204",
              name: "白碱滩区"
            }, {
              code: "650205",
              name: "乌尔禾区"
            }]
          }, {
            code: "6504",
            name: "吐鲁番市",
            children: [{
              code: "650402",
              name: "高昌区"
            }, {
              code: "650421",
              name: "鄯善县"
            }, {
              code: "650422",
              name: "托克逊县"
            }]
          }, {
            code: "6505",
            name: "哈密市",
            children: [{
              code: "650502",
              name: "伊州区"
            }, {
              code: "650521",
              name: "巴里坤哈萨克自治县"
            }, {
              code: "650522",
              name: "伊吾县"
            }]
          }, {
            code: "6523",
            name: "昌吉回族自治州",
            children: [{
              code: "652301",
              name: "昌吉市"
            }, {
              code: "652302",
              name: "阜康市"
            }, {
              code: "652323",
              name: "呼图壁县"
            }, {
              code: "652324",
              name: "玛纳斯县"
            }, {
              code: "652325",
              name: "奇台县"
            }, {
              code: "652327",
              name: "吉木萨尔县"
            }, {
              code: "652328",
              name: "木垒哈萨克自治县"
            }]
          }, {
            code: "6527",
            name: "博尔塔拉蒙古自治州",
            children: [{
              code: "652701",
              name: "博乐市"
            }, {
              code: "652702",
              name: "阿拉山口市"
            }, {
              code: "652722",
              name: "精河县"
            }, {
              code: "652723",
              name: "温泉县"
            }]
          }, {
            code: "6528",
            name: "巴音郭楞蒙古自治州",
            children: [{
              code: "652801",
              name: "库尔勒市"
            }, {
              code: "652822",
              name: "轮台县"
            }, {
              code: "652823",
              name: "尉犁县"
            }, {
              code: "652824",
              name: "若羌县"
            }, {
              code: "652825",
              name: "且末县"
            }, {
              code: "652826",
              name: "焉耆回族自治县"
            }, {
              code: "652827",
              name: "和静县"
            }, {
              code: "652828",
              name: "和硕县"
            }, {
              code: "652829",
              name: "博湖县"
            }]
          }, {
            code: "6529",
            name: "阿克苏地区",
            children: [{
              code: "652901",
              name: "阿克苏市"
            }, {
              code: "652902",
              name: "库车市"
            }, {
              code: "652922",
              name: "温宿县"
            }, {
              code: "652924",
              name: "沙雅县"
            }, {
              code: "652925",
              name: "新和县"
            }, {
              code: "652926",
              name: "拜城县"
            }, {
              code: "652927",
              name: "乌什县"
            }, {
              code: "652928",
              name: "阿瓦提县"
            }, {
              code: "652929",
              name: "柯坪县"
            }]
          }, {
            code: "6530",
            name: "克孜勒苏柯尔克孜自治州",
            children: [{
              code: "653001",
              name: "阿图什市"
            }, {
              code: "653022",
              name: "阿克陶县"
            }, {
              code: "653023",
              name: "阿合奇县"
            }, {
              code: "653024",
              name: "乌恰县"
            }]
          }, {
            code: "6531",
            name: "喀什地区",
            children: [{
              code: "653101",
              name: "喀什市"
            }, {
              code: "653121",
              name: "疏附县"
            }, {
              code: "653122",
              name: "疏勒县"
            }, {
              code: "653123",
              name: "英吉沙县"
            }, {
              code: "653124",
              name: "泽普县"
            }, {
              code: "653125",
              name: "莎车县"
            }, {
              code: "653126",
              name: "叶城县"
            }, {
              code: "653127",
              name: "麦盖提县"
            }, {
              code: "653128",
              name: "岳普湖县"
            }, {
              code: "653129",
              name: "伽师县"
            }, {
              code: "653130",
              name: "巴楚县"
            }, {
              code: "653131",
              name: "塔什库尔干塔吉克自治县"
            }]
          }, {
            code: "6532",
            name: "和田地区",
            children: [{
              code: "653201",
              name: "和田市"
            }, {
              code: "653221",
              name: "和田县"
            }, {
              code: "653222",
              name: "墨玉县"
            }, {
              code: "653223",
              name: "皮山县"
            }, {
              code: "653224",
              name: "洛浦县"
            }, {
              code: "653225",
              name: "策勒县"
            }, {
              code: "653226",
              name: "于田县"
            }, {
              code: "653227",
              name: "民丰县"
            }]
          }, {
            code: "6540",
            name: "伊犁哈萨克自治州",
            children: [{
              code: "654002",
              name: "伊宁市"
            }, {
              code: "654003",
              name: "奎屯市"
            }, {
              code: "654004",
              name: "霍尔果斯市"
            }, {
              code: "654021",
              name: "伊宁县"
            }, {
              code: "654022",
              name: "察布查尔锡伯自治县"
            }, {
              code: "654023",
              name: "霍城县"
            }, {
              code: "654024",
              name: "巩留县"
            }, {
              code: "654025",
              name: "新源县"
            }, {
              code: "654026",
              name: "昭苏县"
            }, {
              code: "654027",
              name: "特克斯县"
            }, {
              code: "654028",
              name: "尼勒克县"
            }]
          }, {
            code: "6542",
            name: "塔城地区",
            children: [{
              code: "654201",
              name: "塔城市"
            }, {
              code: "654202",
              name: "乌苏市"
            }, {
              code: "654203",
              name: "沙湾市"
            }, {
              code: "654221",
              name: "额敏县"
            }, {
              code: "654224",
              name: "托里县"
            }, {
              code: "654225",
              name: "裕民县"
            }, {
              code: "654226",
              name: "和布克赛尔蒙古自治县"
            }]
          }, {
            code: "6543",
            name: "阿勒泰地区",
            children: [{
              code: "654301",
              name: "阿勒泰市"
            }, {
              code: "654321",
              name: "布尔津县"
            }, {
              code: "654322",
              name: "富蕴县"
            }, {
              code: "654323",
              name: "福海县"
            }, {
              code: "654324",
              name: "哈巴河县"
            }, {
              code: "654325",
              name: "青河县"
            }, {
              code: "654326",
              name: "吉木乃县"
            }]
          }, {
            code: "6590",
            name: "自治区直辖县级行政区划",
            children: [{
              code: "659001",
              name: "石河子市"
            }, {
              code: "659002",
              name: "阿拉尔市"
            }, {
              code: "659003",
              name: "图木舒克市"
            }, {
              code: "659004",
              name: "五家渠市"
            }, {
              code: "659005",
              name: "北屯市"
            }, {
              code: "659006",
              name: "铁门关市"
            }, {
              code: "659007",
              name: "双河市"
            }, {
              code: "659008",
              name: "可克达拉市"
            }, {
              code: "659009",
              name: "昆玉市"
            }, {
              code: "659010",
              name: "胡杨河市"
            }, {
              code: "659011",
              name: "新星市"
            }, {
              code: "659012",
              name: "白杨市"
            }]
          }]
        }]
      },
    742:
      /*!**************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-icons/components/uni-icons/uniicons_file_vue.js ***!
        \**************************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.fontData = void 0;
        n.fontData = [{
          font_class: "arrow-down",
          unicode: ""
        }, {
          font_class: "arrow-left",
          unicode: ""
        }, {
          font_class: "arrow-right",
          unicode: ""
        }, {
          font_class: "arrow-up",
          unicode: ""
        }, {
          font_class: "auth",
          unicode: ""
        }, {
          font_class: "auth-filled",
          unicode: ""
        }, {
          font_class: "back",
          unicode: ""
        }, {
          font_class: "bars",
          unicode: ""
        }, {
          font_class: "calendar",
          unicode: ""
        }, {
          font_class: "calendar-filled",
          unicode: ""
        }, {
          font_class: "camera",
          unicode: ""
        }, {
          font_class: "camera-filled",
          unicode: ""
        }, {
          font_class: "cart",
          unicode: ""
        }, {
          font_class: "cart-filled",
          unicode: ""
        }, {
          font_class: "chat",
          unicode: ""
        }, {
          font_class: "chat-filled",
          unicode: ""
        }, {
          font_class: "chatboxes",
          unicode: ""
        }, {
          font_class: "chatboxes-filled",
          unicode: ""
        }, {
          font_class: "chatbubble",
          unicode: ""
        }, {
          font_class: "chatbubble-filled",
          unicode: ""
        }, {
          font_class: "checkbox",
          unicode: ""
        }, {
          font_class: "checkbox-filled",
          unicode: ""
        }, {
          font_class: "checkmarkempty",
          unicode: ""
        }, {
          font_class: "circle",
          unicode: ""
        }, {
          font_class: "circle-filled",
          unicode: ""
        }, {
          font_class: "clear",
          unicode: ""
        }, {
          font_class: "close",
          unicode: ""
        }, {
          font_class: "closeempty",
          unicode: ""
        }, {
          font_class: "cloud-download",
          unicode: ""
        }, {
          font_class: "cloud-download-filled",
          unicode: ""
        }, {
          font_class: "cloud-upload",
          unicode: ""
        }, {
          font_class: "cloud-upload-filled",
          unicode: ""
        }, {
          font_class: "color",
          unicode: ""
        }, {
          font_class: "color-filled",
          unicode: ""
        }, {
          font_class: "compose",
          unicode: ""
        }, {
          font_class: "contact",
          unicode: ""
        }, {
          font_class: "contact-filled",
          unicode: ""
        }, {
          font_class: "down",
          unicode: ""
        }, {
          font_class: "bottom",
          unicode: ""
        }, {
          font_class: "download",
          unicode: ""
        }, {
          font_class: "download-filled",
          unicode: ""
        }, {
          font_class: "email",
          unicode: ""
        }, {
          font_class: "email-filled",
          unicode: ""
        }, {
          font_class: "eye",
          unicode: ""
        }, {
          font_class: "eye-filled",
          unicode: ""
        }, {
          font_class: "eye-slash",
          unicode: ""
        }, {
          font_class: "eye-slash-filled",
          unicode: ""
        }, {
          font_class: "fire",
          unicode: ""
        }, {
          font_class: "fire-filled",
          unicode: ""
        }, {
          font_class: "flag",
          unicode: ""
        }, {
          font_class: "flag-filled",
          unicode: ""
        }, {
          font_class: "folder-add",
          unicode: ""
        }, {
          font_class: "folder-add-filled",
          unicode: ""
        }, {
          font_class: "font",
          unicode: ""
        }, {
          font_class: "forward",
          unicode: ""
        }, {
          font_class: "gear",
          unicode: ""
        }, {
          font_class: "gear-filled",
          unicode: ""
        }, {
          font_class: "gift",
          unicode: ""
        }, {
          font_class: "gift-filled",
          unicode: ""
        }, {
          font_class: "hand-down",
          unicode: ""
        }, {
          font_class: "hand-down-filled",
          unicode: ""
        }, {
          font_class: "hand-up",
          unicode: ""
        }, {
          font_class: "hand-up-filled",
          unicode: ""
        }, {
          font_class: "headphones",
          unicode: ""
        }, {
          font_class: "heart",
          unicode: ""
        }, {
          font_class: "heart-filled",
          unicode: ""
        }, {
          font_class: "help",
          unicode: ""
        }, {
          font_class: "help-filled",
          unicode: ""
        }, {
          font_class: "home",
          unicode: ""
        }, {
          font_class: "home-filled",
          unicode: ""
        }, {
          font_class: "image",
          unicode: ""
        }, {
          font_class: "image-filled",
          unicode: ""
        }, {
          font_class: "images",
          unicode: ""
        }, {
          font_class: "images-filled",
          unicode: ""
        }, {
          font_class: "info",
          unicode: ""
        }, {
          font_class: "info-filled",
          unicode: ""
        }, {
          font_class: "left",
          unicode: ""
        }, {
          font_class: "link",
          unicode: ""
        }, {
          font_class: "list",
          unicode: ""
        }, {
          font_class: "location",
          unicode: ""
        }, {
          font_class: "location-filled",
          unicode: ""
        }, {
          font_class: "locked",
          unicode: ""
        }, {
          font_class: "locked-filled",
          unicode: ""
        }, {
          font_class: "loop",
          unicode: ""
        }, {
          font_class: "mail-open",
          unicode: ""
        }, {
          font_class: "mail-open-filled",
          unicode: ""
        }, {
          font_class: "map",
          unicode: ""
        }, {
          font_class: "map-filled",
          unicode: ""
        }, {
          font_class: "map-pin",
          unicode: ""
        }, {
          font_class: "map-pin-ellipse",
          unicode: ""
        }, {
          font_class: "medal",
          unicode: ""
        }, {
          font_class: "medal-filled",
          unicode: ""
        }, {
          font_class: "mic",
          unicode: ""
        }, {
          font_class: "mic-filled",
          unicode: ""
        }, {
          font_class: "micoff",
          unicode: ""
        }, {
          font_class: "micoff-filled",
          unicode: ""
        }, {
          font_class: "minus",
          unicode: ""
        }, {
          font_class: "minus-filled",
          unicode: ""
        }, {
          font_class: "more",
          unicode: ""
        }, {
          font_class: "more-filled",
          unicode: ""
        }, {
          font_class: "navigate",
          unicode: ""
        }, {
          font_class: "navigate-filled",
          unicode: ""
        }, {
          font_class: "notification",
          unicode: ""
        }, {
          font_class: "notification-filled",
          unicode: ""
        }, {
          font_class: "paperclip",
          unicode: ""
        }, {
          font_class: "paperplane",
          unicode: ""
        }, {
          font_class: "paperplane-filled",
          unicode: ""
        }, {
          font_class: "person",
          unicode: ""
        }, {
          font_class: "person-filled",
          unicode: ""
        }, {
          font_class: "personadd",
          unicode: ""
        }, {
          font_class: "personadd-filled",
          unicode: ""
        }, {
          font_class: "personadd-filled-copy",
          unicode: ""
        }, {
          font_class: "phone",
          unicode: ""
        }, {
          font_class: "phone-filled",
          unicode: ""
        }, {
          font_class: "plus",
          unicode: ""
        }, {
          font_class: "plus-filled",
          unicode: ""
        }, {
          font_class: "plusempty",
          unicode: ""
        }, {
          font_class: "pulldown",
          unicode: ""
        }, {
          font_class: "pyq",
          unicode: ""
        }, {
          font_class: "qq",
          unicode: ""
        }, {
          font_class: "redo",
          unicode: ""
        }, {
          font_class: "redo-filled",
          unicode: ""
        }, {
          font_class: "refresh",
          unicode: ""
        }, {
          font_class: "refresh-filled",
          unicode: ""
        }, {
          font_class: "refreshempty",
          unicode: ""
        }, {
          font_class: "reload",
          unicode: ""
        }, {
          font_class: "right",
          unicode: ""
        }, {
          font_class: "scan",
          unicode: ""
        }, {
          font_class: "search",
          unicode: ""
        }, {
          font_class: "settings",
          unicode: ""
        }, {
          font_class: "settings-filled",
          unicode: ""
        }, {
          font_class: "shop",
          unicode: ""
        }, {
          font_class: "shop-filled",
          unicode: ""
        }, {
          font_class: "smallcircle",
          unicode: ""
        }, {
          font_class: "smallcircle-filled",
          unicode: ""
        }, {
          font_class: "sound",
          unicode: ""
        }, {
          font_class: "sound-filled",
          unicode: ""
        }, {
          font_class: "spinner-cycle",
          unicode: ""
        }, {
          font_class: "staff",
          unicode: ""
        }, {
          font_class: "staff-filled",
          unicode: ""
        }, {
          font_class: "star",
          unicode: ""
        }, {
          font_class: "star-filled",
          unicode: ""
        }, {
          font_class: "starhalf",
          unicode: ""
        }, {
          font_class: "trash",
          unicode: ""
        }, {
          font_class: "trash-filled",
          unicode: ""
        }, {
          font_class: "tune",
          unicode: ""
        }, {
          font_class: "tune-filled",
          unicode: ""
        }, {
          font_class: "undo",
          unicode: ""
        }, {
          font_class: "undo-filled",
          unicode: ""
        }, {
          font_class: "up",
          unicode: ""
        }, {
          font_class: "top",
          unicode: ""
        }, {
          font_class: "upload",
          unicode: ""
        }, {
          font_class: "upload-filled",
          unicode: ""
        }, {
          font_class: "videocam",
          unicode: ""
        }, {
          font_class: "videocam-filled",
          unicode: ""
        }, {
          font_class: "vip",
          unicode: ""
        }, {
          font_class: "vip-filled",
          unicode: ""
        }, {
          font_class: "wallet",
          unicode: ""
        }, {
          font_class: "wallet-filled",
          unicode: ""
        }, {
          font_class: "weibo",
          unicode: ""
        }, {
          font_class: "weixin",
          unicode: ""
        }]
      },
    785:
      /*!**********************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
        \**********************************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e) {
          var o = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.createAnimation = function(e, n) {
            if (!n) return;
            return clearTimeout(n.timer), new d(e, n)
          };
          var a = o(t( /*! @babel/runtime/helpers/defineProperty */ 11)),
            r = o(t( /*! @babel/runtime/helpers/classCallCheck */ 23)),
            c = o(t( /*! @babel/runtime/helpers/createClass */ 24));

          function i(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
              }))), t.push.apply(t, o)
            }
            return t
          }

          function s(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {};
              n % 2 ? i(Object(t), !0).forEach((function(n) {
                (0, a.default)(e, n, t[n])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : i(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }))
            }
            return e
          }
          var d = function() {
              function n(t, o) {
                (0, r.default)(this, n), this.options = t, this.animation = e.createAnimation(s({}, t)), this.currentStepAnimates = {}, this.next = 0, this.$ = o
              }
              return (0, c.default)(n, [{
                key: "_nvuePushAnimates",
                value: function(e, n) {
                  var t = this.currentStepAnimates[this.next],
                    o = {};
                  if (o = t || {
                      styles: {},
                      config: {}
                    }, u.includes(e)) {
                    o.styles.transform || (o.styles.transform = "");
                    var a = "";
                    "rotate" === e && (a = "deg"), o.styles.transform += "".concat(e, "(").concat(n + a, ") ")
                  } else o.styles[e] = "".concat(n);
                  this.currentStepAnimates[this.next] = o
                }
              }, {
                key: "_animateRun",
                value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = this.$.$refs.ani.ref;
                  if (t) return new Promise((function(o, a) {
                    nvueAnimation.transition(t, s({
                      styles: e
                    }, n), (function(e) {
                      o()
                    }))
                  }))
                }
              }, {
                key: "_nvueNextAnimate",
                value: function(e) {
                  var n = this,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    o = arguments.length > 2 ? arguments[2] : void 0,
                    a = e[t];
                  if (a) {
                    var r = a.styles,
                      c = a.config;
                    this._animateRun(r, c).then((function() {
                      t += 1, n._nvueNextAnimate(e, t, o)
                    }))
                  } else this.currentStepAnimates = {}, "function" == typeof o && o(), this.isEnd = !0
                }
              }, {
                key: "step",
                value: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  return this.animation.step(e), this
                }
              }, {
                key: "run",
                value: function(e) {
                  this.$.animationData = this.animation.export(), this.$.timer = setTimeout((function() {
                    "function" == typeof e && e()
                  }), this.$.durationTime)
                }
              }]), n
            }(),
            u = ["matrix", "matrix3d", "rotate", "rotate3d", "rotateX", "rotateY", "rotateZ", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "translate", "translate3d", "translateX", "translateY", "translateZ"];
          u.concat(["opacity", "backgroundColor"], ["width", "height", "left", "right", "top", "bottom"]).forEach((function(e) {
            d.prototype[e] = function() {
              var n;
              return (n = this.animation)[e].apply(n, arguments), this
            }
          }))
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    798:
      /*!**************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-popup/components/uni-popup/popup.js ***!
        \**************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = {
          data: function() {
            return {}
          },
          created: function() {
            this.popup = this.getParent()
          },
          methods: {
            getParent: function() {
              for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uniPopup", n = this.$parent, t = n.$options.name; t !== e;) {
                if (!(n = n.$parent)) return !1;
                t = n.$options.name
              }
              return n
            }
          }
        };
        n.default = o
      },
    799:
      /*!*******************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-popup/components/uni-popup/i18n/index.js ***!
        \*******************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        var o = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = o(t( /*! ./en.json */ 800)),
          r = o(t( /*! ./zh-Hans.json */ 801)),
          c = o(t( /*! ./zh-Hant.json */ 802)),
          i = {
            en: a.default,
            "zh-Hans": r.default,
            "zh-Hant": c.default
          };
        n.default = i
      },
    8:
      /*!***************************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
        \***************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        var o = t( /*! ./arrayLikeToArray.js */ 9);
        e.exports = function(e, n) {
          if (e) {
            if ("string" == typeof e) return o(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, n) : void 0
          }
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      },
    800:
      /*!******************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-popup/components/uni-popup/i18n/en.json ***!
        \******************************************************************************************************/
      /*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
      function(e) {
        e.exports = JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')
      },
    801:
      /*!***********************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
        \***********************************************************************************************************/
      /*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
      function(e) {
        e.exports = JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')
      },
    802:
      /*!***********************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
        \***********************************************************************************************************/
      /*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
      function(e) {
        e.exports = JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')
      },
    9:
      /*!*****************************************************************!*\
        !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
        \*****************************************************************/
      /*! no static exports found */
      function(e, n) {
        e.exports = function(e, n) {
          (null == n || n > e.length) && (n = e.length);
          for (var t = 0, o = new Array(n); t < n; t++) o[t] = e[t];
          return o
        }, e.exports.__esModule = !0, e.exports.default = e.exports
      }
  }
]);