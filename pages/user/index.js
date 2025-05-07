(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/user/index"], {
    124:
      /*!**************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/main.js?{"page":"pages%2Fuser%2Findex"} ***!
        \**************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        (function(e, t) {
          var s = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          n( /*! uni-pages */ 26), n( /*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
          s(n( /*! vue */ 25));
          var o = s(n( /*! ./pages/user/index.vue */ 125));
          e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1).default, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).createPage)
      },
    125:
      /*!*******************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/user/index.vue ***!
        \*******************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n( /*! ./index.vue?vue&type=template&id=137d5072&scoped=true&name=skeleton& */ 126),
          o = n( /*! ./index.vue?vue&type=script&lang=js& */ 128);
        for (var i in o)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return o[e]
          }))
        }(i);
        n( /*! ./index.vue?vue&type=style&index=0&id=137d5072&lang=scss&scoped=true& */ 130);
        var r = n( /*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50),
          a = Object(r.default)(o.default, s.render, s.staticRenderFns, !1, null, "137d5072", null, !1, s.components, void 0);
        a.options.__file = "pages/user/index.vue", t.default = a.exports
      },
    126:
      /*!****************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/user/index.vue?vue&type=template&id=137d5072&scoped=true&name=skeleton& ***!
        \****************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=137d5072&scoped=true&name=skeleton& */ 127);
        n.d(t, "render", (function() {
          return s.render
        })), n.d(t, "staticRenderFns", (function() {
          return s.staticRenderFns
        })), n.d(t, "recyclableRender", (function() {
          return s.recyclableRender
        })), n.d(t, "components", (function() {
          return s.components
        }))
      },
    127:
      /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/user/index.vue?vue&type=template&id=137d5072&scoped=true&name=skeleton& ***!
        \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, t, n) {
        "use strict";
        var s;
        n.r(t), n.d(t, "render", (function() {
          return o
        })), n.d(t, "staticRenderFns", (function() {
          return r
        })), n.d(t, "recyclableRender", (function() {
          return i
        })), n.d(t, "components", (function() {
          return s
        }));
        try {
          s = {
            fixedBox: function() {
              return n.e( /*! import() | components/fixedBox/fixedBox */ "components/fixedBox/fixedBox").then(n.bind(null, /*! @/components/fixedBox/fixedBox.vue */ 657))
            }
          }
        } catch (e) {
          if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
          console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")
        }
        var o = function() {
            var e = this,
              t = e.$createElement,
              n = (e._self._c, e.userinfo.userPicture && "0" != e.userinfo.userPicture ? null : e.ossURL("image/bgInfo.png")),
              s = 0 != e.userinfo.viptp ? e.statusTxt(e.userinfo.viptp) : null,
              o = e.__map(e.navListX, (function(t, n) {
                return {
                  $orig: e.__get_orig(t),
                  m2: t.show ? e.ossURL(t.img) : null
                }
              })),
              i = e.isFx || 0 != e.userinfo.isJoin || 0 != e.userinfo.viptp ? null : e.ossURL("static/images/user/recommend.png"),
              r = e.isFx || 0 != e.userinfo.isJoin || 0 == e.userinfo.viptp || 1 != e.userinfo.viptp && 2 != e.userinfo.viptp ? null : e.ossURL("static/images/user/recommend_join.png"),
              a = e.group_chats_show ? e.ossURL("static/images/user/user_group_chats_bg.png") : null,
              c = e.group_chats_show ? e.ossURL("static/images/user/vip_group_chats_QRcode.png") : null,
              u = e.group_chats_show ? e.ossURL("static/images/user/icon_close.png") : null;
            e._isMounted || (e.e0 = function(t, n) {
              var s;
              n = ((s = arguments[arguments.length - 1].currentTarget.dataset).eventParams || s["event-params"]).index;
              e.stype = n
            }), e.$mp.data = Object.assign({}, {
              $root: {
                m0: n,
                m1: s,
                l0: o,
                m3: i,
                m4: r,
                m5: a,
                m6: c,
                m7: u
              }
            })
          },
          i = !1,
          r = [];
        o._withStripped = !0
      },
    128:
      /*!********************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/user/index.vue?vue&type=script&lang=js& ***!
        \********************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 129),
          o = n.n(s);
        for (var i in s)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return s[e]
          }))
        }(i);
        t.default = o.a
      },
    129:
      /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/user/index.vue?vue&type=script&lang=js& ***!
        \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        (function(e) {
          var s = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var o = s(n( /*! @babel/runtime/regenerator */ 28)),
            i = s(n( /*! @babel/runtime/helpers/defineProperty */ 11)),
            r = s(n( /*! @babel/runtime/helpers/asyncToGenerator */ 31));

          function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var s = Object.getOwnPropertySymbols(e);
              t && (s = s.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), n.push.apply(n, s)
            }
            return n
          }

          function c(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? a(Object(n), !0).forEach((function(t) {
                (0, i.default)(e, t, n[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }))
            }
            return e
          }
          var u = {
            data: function() {
              return {
                isFx: !1,
                isVip: this.$store.getters.isVip,
                qr_show: this.$store.getters.qr_show,
                stype: 0,
                userinfo: {
                  viptp: 0
                },
                user_id: "",
                token: "",
                group_chats_show: !1,
                navListX: [{
                  show: !0,
                  name: "我的收藏",
                  img: "image/my4.png",
                  path: "/pagesA/pages/user/collect"
                }, {
                  show: !0,
                  name: "兑换中心",
                  img: "image/my5.png",
                  path: "/pagesA/pages/card/index"
                }, {
                  show: !0,
                  name: "分享海报",
                  img: "image/my6.png",
                  path: "/pages/ag/index"
                }, {
                  show: !0,
                  name: "专属导师",
                  img: "image/my8.png",
                  path: "/pages/contact/contact?id=kfca6bff29e008fd328&contactbutton=咨询在线客服&img=contact.jpg"
                }, {
                  show: !1,
                  name: "邀请注册",
                  img: "image/my9.png",
                  path: "/pagesA/pages/qr/index?id=" + this.user_id + "&contactbutton=点击分享好友注册即可领取&img=contact22.jpg"
                }, {
                  show: !1,
                  name: "商务合作",
                  img: "image/my7.png",
                  path: "/pages/contact/contact?id=kfcce7cde983d95761a&contactbutton=咨询在线客服&img=contact22.png"
                }, {
                  show: !1,
                  name: "会员服务群",
                  img: "static/images/user/icon_vip_group_chats.png",
                  path: "/pages/contact/contact?id=kfcce7cde983d95761a&contactbutton=咨询在线客服&img=contact22.png"
                }, {
                  show: !0,
                  name: "用户服务群",
                  img: "static/images/user/icon_user_group_chats.svg",
                  path: null
                }, {
                  show: !1,
                  name: "分享优惠券",
                  img: "image/my6.png",
                  path: "/pages/ag/index"
                }],
                tabPropertyList: ["累计", "当月"],
                loading: !1
              }
            },
            onLoad: function(t) {
              var n = this,
                s = e.getStorageSync("id"),
                o = e.getStorageSync("token");
              t.flag, t.qr_code && this.$store.commit("setQr_code", t.qr_code), this.user_id = s, this.token = o, this.qr_show || this.$store.commit("setQr_show", 1), o ? this.getUserInfo() : (this.loading = !0, setTimeout((function(e) {
                n.$http.goPage("/pages/login/login?type=0&url=/pages/user/index")
              }), 700))
            },
            onShow: function() {
              this.loading && (this.user_id = e.getStorageSync("id"), this.token = e.getStorageSync("token")), this.token && (this.getUserInfo(), this.getMessage())
            },
            methods: {
              getMessage: function() {
                var t = this;
                t.$http.request("/news/message/pull-job").then((function(n) {
                  t.$http.request("/news/message/un-read-count").then((function(t) {
                    1 * t.data.count > 0 ? e.showTabBarRedDot({
                      index: 3
                    }) : e.hideTabBarRedDot({
                      index: 3
                    })
                  }))
                }))
              },
              goRecommend: function() {
                var e = 0,
                  t = this.userinfo.isJoin;
                1 != this.userinfo.viptp && 2 != this.userinfo.viptp || (e = 1), this.toPage("/pagesA/pages/user/recommend?isVip=" + e + "&isJoin=" + t)
              },
              courtship: function() {
                var t = this;
                this.user_id && this.token && e.showModal({
                  title: "欢迎加入",
                  content: "您的手机号为" + this.userinfo.userName + "，我们将在24小时内与您沟通相关事宜",
                  confirmText: "确定提交",
                  cancelText: "关闭",
                  success: function(e) {
                    e.confirm && t.submitConsit()
                  }
                })
              },
              submitConsit: function() {
                var e = this;
                this.$http.request("/news/channel-consult/create", {
                  ischeckLogin: 1,
                  username: this.userinfo.nickName,
                  phone: this.userinfo.userName,
                  channelId: 1,
                  businessId: 0,
                  source: 1,
                  remark: ""
                }, "POST").then((function(t) {
                  e.$http.showToast("提交成功", "success")
                }))
              },
              openDialog: function() {
                this.group_chats_show = !0
              },
              closeDialog: function() {
                this.group_chats_show = !1
              },
              loginOut: function() {
                var t = this;
                e.showModal({
                  title: "提示",
                  content: "您是否要退出登录？",
                  success: function(n) {
                    if (n.confirm) {
                      e.clearStorageSync(), t.$store.commit("setUserInfo", {
                        user_id: "",
                        token: "",
                        agid: "",
                        qr_code: "",
                        qr_show: "",
                        live_show: ""
                      }), t.$store.commit("setUserInfo2", {});
                      t.$http.goPage("/pages/login/login?type=0&url=/pages/index/index", "close")
                    }
                  }
                })
              },
              toPage: function(t) {
                var n = this;
                return (0, r.default)(o.default.mark((function s() {
                  var i;
                  return o.default.wrap((function(s) {
                    for (;;) switch (s.prev = s.next) {
                      case 0:
                        if (i = n, console.log(n.token), console.log(n.user_id), !n.token || !n.user_id) {
                          s.next = 8;
                          break
                        }
                        return s.next = 6, i.$http.goPage(t);
                      case 6:
                        s.next = 9;
                        break;
                      case 8:
                        e.showModal({
                          title: "提示",
                          content: "您还未登录，请先前往登录",
                          confirmText: "前往",
                          success: function(e) {
                            e.confirm && i.$http.goPage("/pages/login/login?type=0&url=/pages/user/index")
                          }
                        });
                      case 9:
                      case "end":
                        return s.stop()
                    }
                  }), s)
                })))()
              },
              getUserInfo: function() {
                var e = this;
                this.$http.request("/user/position/userinfo", {
                  ischeckLogin: 1
                }).then((function(t) {
                  var n = t.data;
                  e.userinfo = n, console.log(e.userinfo.isJoin), e.isFx = n.isFx, e.navListX[5].show = !n.isFx && 0 == n.drpParentId, e.navListX[2].show = !(!n.isFx && 1 != n.isJoin), e.$store.commit("setUserInfo2", n), console.log(e.isFx), 1 != n.isJoin || e.isFx || e.getStatiac()
                }))
              },
              getStatiac: function() {
                var e = this;
                this.$http.request("/user/position/stat", {}).then((function(t) {
                  e.userinfo = c(c({}, e.userinfo), t.data), e.loading = !0
                }))
              },
              isNavToPage: function(e) {
                e ? this.toPage(e) : this.openDialog()
              },
              IsVipToPage: function(e) {
                if (1 == e) {
                  var t = "/pagesA/pages/pay/userpay?isVip=" + (this.$store.getters.isVip ? 1 : 0);
                  this.toPage(t)
                }
                0 == e && this.toPage("/pagesA/pages/pay/userpay")
              },
              ossURL: function(e) {
                return this.$baseurl + e
              },
              statusTxt: function(e) {
                switch (e) {
                  case 1:
                    return "年卡会员";
                  case 2:
                    return "校园卡";
                  case 3:
                    return "体验卡"
                }
              }
            }
          };
          t.default = u
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    130:
      /*!*****************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/user/index.vue?vue&type=style&index=0&id=137d5072&lang=scss&scoped=true& ***!
        \*****************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=137d5072&lang=scss&scoped=true& */ 131),
          o = n.n(s);
        for (var i in s)["default"].indexOf(i) < 0 && function(e) {
          n.d(t, e, (function() {
            return s[e]
          }))
        }(i);
        t.default = o.a
      },
    131:
      /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/user/index.vue?vue&type=style&index=0&id=137d5072&lang=scss&scoped=true& ***!
        \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, n) {}
  },
  [
    [124, "common/runtime", "common/vendor"]
  ]
]);