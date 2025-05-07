(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/card/receive"], {
    164:
      /*!****************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/main.js?{"page":"pages%2Fcard%2Freceive"} ***!
        \****************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e, n) {
          var s = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          t( /*! uni-pages */ 26), t( /*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
          s(t( /*! vue */ 25));
          var o = s(t( /*! ./pages/card/receive.vue */ 165));
          e.__webpack_require_UNI_MP_PLUGIN__ = t, n(o.default)
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1).default, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).createPage)
      },
    165:
      /*!*********************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/card/receive.vue ***!
        \*********************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        t.r(n);
        var s = t( /*! ./receive.vue?vue&type=template&id=1c351ddd&scoped=true& */ 166),
          o = t( /*! ./receive.vue?vue&type=script&lang=js& */ 168);
        for (var r in o)["default"].indexOf(r) < 0 && function(e) {
          t.d(n, e, (function() {
            return o[e]
          }))
        }(r);
        t( /*! ./receive.vue?vue&type=style&index=0&id=1c351ddd&lang=scss&scoped=true& */ 170);
        var a = t( /*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50),
          i = Object(a.default)(o.default, s.render, s.staticRenderFns, !1, null, "1c351ddd", null, !1, s.components, void 0);
        i.options.__file = "pages/card/receive.vue", n.default = i.exports
      },
    166:
      /*!****************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/card/receive.vue?vue&type=template&id=1c351ddd&scoped=true& ***!
        \****************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, n, t) {
        "use strict";
        t.r(n);
        var s = t( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./receive.vue?vue&type=template&id=1c351ddd&scoped=true& */ 167);
        t.d(n, "render", (function() {
          return s.render
        })), t.d(n, "staticRenderFns", (function() {
          return s.staticRenderFns
        })), t.d(n, "recyclableRender", (function() {
          return s.recyclableRender
        })), t.d(n, "components", (function() {
          return s.components
        }))
      },
    167:
      /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/card/receive.vue?vue&type=template&id=1c351ddd&scoped=true& ***!
        \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, n, t) {
        "use strict";
        var s;
        t.r(n), t.d(n, "render", (function() {
          return o
        })), t.d(n, "staticRenderFns", (function() {
          return a
        })), t.d(n, "recyclableRender", (function() {
          return r
        })), t.d(n, "components", (function() {
          return s
        }));
        try {
          s = {
            uniNavBar: function() {
              return t.e( /*! import() | uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar */ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null, /*! @/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue */ 650))
            },
            uniPopup: function() {
              return t.e( /*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 745))
            }
          }
        } catch (e) {
          if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
          console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")
        }
        var o = function() {
            var e = this,
              n = e.$createElement,
              t = (e._self._c, e.ossURL("static/images/caika/ck_bg.png")),
              s = e.ossURL("static/images/caika/ck_active_title.png"),
              o = e.ossURL("static/images/caika/ck_title.png"),
              r = e.ossURL("static/images/caika/ck_img.png"),
              a = e.ossURL("static/images/caika/ck_icon_hat.png"),
              i = e.ossURL("static/images/caika/ck_p2.png"),
              c = e.ossURL("static/images/caika/ck_p3.png"),
              u = e.isSuccess ? e.ossURL("static/images/caika/ck_icon_success.png") : null,
              d = e.isSuccess ? null : e.ossURL("static/images/caika/ck_icon_fail.png");
            e.$mp.data = Object.assign({}, {
              $root: {
                m0: t,
                m1: s,
                m2: o,
                m3: r,
                m4: a,
                m5: i,
                m6: c,
                m7: u,
                m8: d
              }
            })
          },
          r = !1,
          a = [];
        o._withStripped = !0
      },
    168:
      /*!**********************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/card/receive.vue?vue&type=script&lang=js& ***!
        \**********************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        t.r(n);
        var s = t( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./receive.vue?vue&type=script&lang=js& */ 169),
          o = t.n(s);
        for (var r in s)["default"].indexOf(r) < 0 && function(e) {
          t.d(n, e, (function() {
            return s[e]
          }))
        }(r);
        n.default = o.a
      },
    169:
      /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/card/receive.vue?vue&type=script&lang=js& ***!
        \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        (function(e) {
          var s = t( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(n, "__esModule", {
            value: !0
          }), n.default = void 0;
          var o = s(t( /*! @babel/runtime/regenerator */ 28)),
            r = s(t( /*! @babel/runtime/helpers/asyncToGenerator */ 31)),
            a = {
              onReady: function() {
                var n = this;
                e.createSelectorQuery().in(this).select("#head").boundingClientRect((function(e) {
                  var t = n.$store.getters.safeAreaInsets;
                  n.head = t + e.height
                })).exec()
              },
              data: function() {
                return {
                  head: 0,
                  top: 0,
                  isFx: !1,
                  isVip: !1,
                  isJoin: !1,
                  isLoading: !1,
                  ckUserId: "",
                  token: "",
                  user_id: "",
                  isSuccess: 0,
                  msg: "",
                  school: {
                    schoolName: "",
                    remainingNum: 0
                  },
                  radioval: !1
                }
              },
              onLoad: function(n) {
                var t = this;
                return (0, r.default)(o.default.mark((function s() {
                  return o.default.wrap((function(s) {
                    for (;;) switch (s.prev = s.next) {
                      case 0:
                        console.log(n), n.userId ? (t.ckUserId = n.userId, t.ckUserLogin()) : e.showToast({
                          icon: "none",
                          title: "该学校领取量已达上限",
                          duration: 2e3
                        });
                      case 2:
                      case "end":
                        return s.stop()
                    }
                  }), s)
                })))()
              },
              onShow: function() {},
              methods: {
                toPage: function(e) {
                  var n = this;
                  return (0, r.default)(o.default.mark((function t() {
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return t.next = 2, n.$http.goPage(e, "tab");
                        case 2:
                        case "end":
                          return t.stop()
                      }
                    }), t)
                  })))()
                },
                getUserInfo: function() {
                  var e = this;
                  this.$http.request("/user/position/userinfo", {
                    ischeckLogin: 1
                  }).then((function(n) {
                    var t = n.data;
                    e.userinfo = t, e.isFx = t.isFx
                  }))
                },
                ossURL: function(e) {
                  return this.$baseurl + e
                },
                scrollEvent: function(e) {
                  var n = e.detail.scrollTop;
                  this.top = -n
                },
                closeRef: function() {
                  this.$refs.popup.close()
                },
                receive: function() {
                  var n = this;
                  return (0, r.default)(o.default.mark((function t() {
                    var s;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          if (s = n, console.log("sss"), e.showLoading({
                              title: "领取中",
                              mask: !0
                            }), !s.isLoading) {
                            t.next = 5;
                            break
                          }
                          return t.abrupt("return", !1);
                        case 5:
                          return s.isLoading = !0, t.next = 8, s.$http.request("/main/caika/receive-card", {
                            ischeckLogin: 1,
                            schoolId: s.school.id
                          }, "post").then((function(n) {
                            s.isLoading = !1, setTimeout((function() {
                              e.hideLoading(), 1e4 == n.code && (s.isSuccess = n.data.isSuccess, s.msg = n.msg, s.$refs.popup.open("center"))
                            }), 500)
                          }));
                        case 8:
                        case "end":
                          return t.stop()
                      }
                    }), t)
                  })))()
                },
                ckUserLogin: function() {
                  var n = this;
                  return (0, r.default)(o.default.mark((function t() {
                    var s, r, a, i;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return s = n, console.log("abc"), r = {
                            ckUserId: s.ckUserId
                          }, t.next = 5, s.$store.dispatch("caikaLogin", r);
                        case 5:
                          if (!(a = t.sent) || 1e4 != a.code) {
                            t.next = 18;
                            break
                          }
                          return s.$store.commit("setUser_id", a.data.userId), s.$store.commit("setToken", a.data.token), s.token = a.data.token, s.user_id = a.data.userId, e.setStorageSync("token", a.data.token), e.setStorageSync("id", a.data.userId), s.school = a.data.schoolinfo, t.next = 16, s.$http.request("/user/position/userinfo", {
                            ischeckLogin: 1
                          });
                        case 16:
                          i = t.sent, s.$store.commit("setUserInfo2", i.data);
                        case 18:
                        case "end":
                          return t.stop()
                      }
                    }), t)
                  })))()
                }
              }
            };
          n.default = a
        }).call(this, t( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    170:
      /*!*******************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/card/receive.vue?vue&type=style&index=0&id=1c351ddd&lang=scss&scoped=true& ***!
        \*******************************************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {
        "use strict";
        t.r(n);
        var s = t( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./receive.vue?vue&type=style&index=0&id=1c351ddd&lang=scss&scoped=true& */ 171),
          o = t.n(s);
        for (var r in s)["default"].indexOf(r) < 0 && function(e) {
          t.d(n, e, (function() {
            return s[e]
          }))
        }(r);
        n.default = o.a
      },
    171:
      /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/card/receive.vue?vue&type=style&index=0&id=1c351ddd&lang=scss&scoped=true& ***!
        \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, n, t) {}
  },
  [
    [164, "common/runtime", "common/vendor"]
  ]
]);