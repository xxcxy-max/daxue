(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/login/login"], {
    60:
      /*!***************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
        \***************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        (function(e, t) {
          var r = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          n( /*! uni-pages */ 26), n( /*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
          r(n( /*! vue */ 25));
          var o = r(n( /*! ./pages/login/login.vue */ 61));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1).default, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).createPage)
      },
    61:
      /*!********************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/login/login.vue ***!
        \********************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n( /*! ./login.vue?vue&type=template&id=b237504c&scoped=true& */ 62),
          o = n( /*! ./login.vue?vue&type=script&lang=js& */ 64);
        for (var i in o)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(i);
        n( /*! ./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 66);
        var s = n( /*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50),
          a = Object(s.default)(o.default, r.render, r.staticRenderFns, !1, null, "b237504c", null, !1, r.components, void 0);
        a.options.__file = "pages/login/login.vue", t.default = a.exports
      },
    62:
      /*!***************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
        \***************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c&scoped=true& */ 63);
        n.d(t, "render", (function() {
          return r.render
        })), n.d(t, "staticRenderFns", (function() {
          return r.staticRenderFns
        })), n.d(t, "recyclableRender", (function() {
          return r.recyclableRender
        })), n.d(t, "components", (function() {
          return r.components
        }))
      },
    63:
      /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
        \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, t, n) {
        "use strict";
        var r;
        n.r(t), n.d(t, "render", (function() {
          return o
        })), n.d(t, "staticRenderFns", (function() {
          return s
        })), n.d(t, "recyclableRender", (function() {
          return i
        })), n.d(t, "components", (function() {
          return r
        }));
        try {
          r = {
            uniForms: function() {
              return Promise.all( /*! import() | uni_modules/uni-forms/components/uni-forms/uni-forms */ [n.e("common/vendor"), n.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(n.bind(null, /*! @/uni_modules/uni-forms/components/uni-forms/uni-forms.vue */ 713))
            },
            uniFormsItem: function() {
              return n.e( /*! import() | uni_modules/uni-forms/components/uni-forms-item/uni-forms-item */ "uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(n.bind(null, /*! @/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue */ 722))
            }
          }
        } catch (e) {
          if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
          console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")
        }
        var o = function() {
            var e = this,
              t = e.$createElement,
              n = (e._self._c, e.getUrl("/images/login_img.png")),
              r = e.loginSwitch && e.pswShow ? e.getUrl("/images/icon_show_password.png") : null,
              o = e.loginSwitch && !e.pswShow ? e.getUrl("/images/icon_show_password2.png") : null,
              i = e.radioBtnShow ? e.getUrl("/images/icon_radio2.png") : null,
              s = e.radioBtnShow ? null : e.getUrl("/images/icon_radio.png"),
              a = encodeURIComponent(e.reUrl),
              u = encodeURIComponent(e.reUrl);
            e._isMounted || (e.e0 = function(t) {
              e.pswShow = !e.pswShow
            }, e.e1 = function(t) {
              e.radioBtnShow = !e.radioBtnShow
            }, e.e2 = function(t) {
              e.radioBtnShow = !e.radioBtnShow
            }), e.$mp.data = Object.assign({}, {
              $root: {
                m0: n,
                m1: r,
                m2: o,
                m3: i,
                m4: s,
                m5: a,
                m6: u
              }
            })
          },
          i = !1,
          s = [];
        o._withStripped = !0
      },
    64:
      /*!*********************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/login/login.vue?vue&type=script&lang=js& ***!
        \*********************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 65),
          o = n.n(r);
        for (var i in r)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return r[e]
          }))
        }(i);
        t.default = o.a
      },
    65:
      /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/login/login.vue?vue&type=script&lang=js& ***!
        \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        (function(e) {
          var r = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var o = r(n( /*! @babel/runtime/regenerator */ 28)),
            i = r(n( /*! @babel/runtime/helpers/asyncToGenerator */ 31)),
            s = {
              onReady: function() {
                this.$refs.valiForm.setRules(this.rules)
              },
              onLoad: function(e) {
                var t = this;
                return (0, i.default)(o.default.mark((function n() {
                  return o.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        t.reType = e.type ? e.type : 0, e.url ? t.reUrl = decodeURIComponent(e.url) : t.reUrl = "/pages/index/index";
                      case 2:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              data: function() {
                return {
                  reUrl: "",
                  reType: "",
                  pswShow: !1,
                  radioBtnShow: !1,
                  loginSwitch: !1,
                  rules: {
                    phone: {
                      rules: [{
                        required: !0,
                        errorMessage: "手机号不能为空"
                      }, {
                        validateFunction: function(e, t, n, r) {
                          /^1[3456789]\d{9}$/.test(t) || r("手机号码格式不正确，请重新填写")
                        }
                      }]
                    },
                    code: {
                      rules: [{
                        required: !0,
                        errorMessage: "验证码不能为空"
                      }]
                    },
                    username: {
                      rules: [{
                        required: !0,
                        errorMessage: "账号不能为空"
                      }]
                    },
                    password: {
                      rules: [{
                        required: !0,
                        errorMessage: "密码不能为空"
                      }]
                    }
                  },
                  valiFormData: {
                    phone: "",
                    code: "",
                    username: "",
                    password: ""
                  },
                  timeOrTxt: "获取验证码",
                  countdown: 60
                }
              },
              methods: {
                getUrl: function(e) {
                  return this.$baseurl + e
                },
                url: function(e) {
                  this.$http.goPage(e)
                },
                submit: function() {
                  var t = this,
                    n = e.getDeviceInfo().deviceId;
                  this.radioBtnShow ? this.$refs.valiForm.validate().then(function() {
                    var r = (0, i.default)(o.default.mark((function r(i) {
                      var s, a, u, c;
                      return o.default.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            return s = {
                              agid: t.$store.getters.agid,
                              qr_code: t.$store.getters.qr_code,
                              device_id: n
                            }, t.loginSwitch ? (s.username = i.username, s.password = i.password, s.login_type = 1) : (s.username = i.phone, s.password = i.code, s.login_type = 0), r.next = 4, t.$store.dispatch("login", s);
                          case 4:
                            if (a = r.sent, console.log(a), !a || 1e4 != a.code) {
                              r.next = 28;
                              break
                            }
                            return t.$store.commit("setUser_id", a.data.user_id), t.$store.commit("setToken", a.data.token), e.setStorageSync("token", a.data.token), e.setStorageSync("id", a.data.user_id), r.next = 13, t.$http.request("/user/position/userinfo", {
                              ischeckLogin: 1
                            });
                          case 13:
                            if (u = r.sent, t.$store.commit("setUserInfo2", u.data), !a.data.is_register) {
                              r.next = 19;
                              break
                            }
                            t.$http.goPage("/pages/initialize/initialize", "to"), r.next = 28;
                            break;
                          case 19:
                            if (0 != t.reType) {
                              r.next = 27;
                              break
                            }
                            r.t0 = t.reUrl, r.next = "/pages/index/index" === r.t0 || "/pages/user/index" === r.t0 || "/pages/notice/index" === r.t0 || "/pages/lectureroom/lectureroom" === r.t0 || "/pages/vipCenter/vipCenter" === r.t0 ? 23 : 25;
                            break;
                          case 23:
                            return t.$http.goPage(t.reUrl, "tab"), r.abrupt("break", 27);
                          case 25:
                            return t.$http.goPage(t.reUrl, "to"), r.abrupt("break", 27);
                          case 27:
                            1 == t.reType && (c = "/pages/wxindex/index?urlapi=" + encodeURIComponent(t.reUrl + "?user_id=" + a.data.user_id), t.$http.goPage(c, "to"));
                          case 28:
                          case "end":
                            return r.stop()
                        }
                      }), r)
                    })));
                    return function(e) {
                      return r.apply(this, arguments)
                    }
                  }()) : e.showModal({
                    title: "提示",
                    content: "是否已阅读并同意《用户协议》和《隐私政策》",
                    success: function(e) {
                      e.confirm && (t.radioBtnShow = !0)
                    }
                  })
                },
                switchBtnClick: function() {
                  this.loginSwitch = !this.loginSwitch, this.radioBtnShow = !1, this.valiFormData = {
                    phone: "",
                    code: "",
                    username: "",
                    password: ""
                  }, this.$refs.valiForm.clearValidate()
                },
                saveUserInfo: function() {
                  var e = this;
                  this.valiFormData.phone ? 60 == this.countdown && (setTimeout((function() {
                    e.saveUserInfo2()
                  }), 100), this.$http.request("/user/login/sendcode", {
                    ischeckLogin: 0,
                    phone: this.valiFormData.phone
                  }).then((function(t) {
                    1e4 != t.code ? e.$http.showToast("发送失败") : e.$http.showToast("发送成功")
                  }))) : this.$http.showToast("请输入手机号")
                },
                saveUserInfo2: function() {
                  var e = this;
                  0 == this.countdown ? (this.timeOrTxt = "获取验证码", this.countdown = 60) : (this.timeOrTxt = "重新发送(" + this.countdown + ")", this.countdown--, setTimeout((function() {
                    e.saveUserInfo2()
                  }), 1e3))
                }
              }
            };
          t.default = s
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    66:
      /*!******************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
        \******************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& */ 67),
          o = n.n(r);
        for (var i in r)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return r[e]
          }))
        }(i);
        t.default = o.a
      },
    67:
      /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/login/login.vue?vue&type=style&index=0&id=b237504c&lang=scss&scoped=true& ***!
        \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {}
  },
  [
    [60, "common/runtime", "common/vendor"]
  ]
]);