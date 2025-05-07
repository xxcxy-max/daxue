(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/ag/index"], {
    140:
      /*!************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/main.js?{"page":"pages%2Fag%2Findex"} ***!
        \************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        (function(t, e) {
          var r = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          n( /*! uni-pages */ 26), n( /*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
          r(n( /*! vue */ 25));
          var i = r(n( /*! ./pages/ag/index.vue */ 141));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(i.default)
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1).default, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).createPage)
      },
    141:
      /*!*****************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/index.vue ***!
        \*****************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n( /*! ./index.vue?vue&type=template&id=04b136a2& */ 142),
          i = n( /*! ./index.vue?vue&type=script&lang=js& */ 144);
        for (var u in i)["default"].indexOf(u) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(u);
        n( /*! ./index.vue?vue&type=style&index=0&lang=scss&scope=true& */ 146);
        var o = n( /*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50),
          c = Object(o.default)(i.default, r.render, r.staticRenderFns, !1, null, null, null, !1, r.components, void 0);
        c.options.__file = "pages/ag/index.vue", e.default = c.exports
      },
    142:
      /*!************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/index.vue?vue&type=template&id=04b136a2& ***!
        \************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=04b136a2& */ 143);
        n.d(e, "render", (function() {
          return r.render
        })), n.d(e, "staticRenderFns", (function() {
          return r.staticRenderFns
        })), n.d(e, "recyclableRender", (function() {
          return r.recyclableRender
        })), n.d(e, "components", (function() {
          return r.components
        }))
      },
    143:
      /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/index.vue?vue&type=template&id=04b136a2& ***!
        \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "render", (function() {
          return r
        })), n.d(e, "staticRenderFns", (function() {
          return u
        })), n.d(e, "recyclableRender", (function() {
          return i
        })), n.d(e, "components", (function() {}));
        var r = function() {
            var t = this.$createElement,
              e = (this._self._c, this.imageList.length),
              n = e > 0 ? this.getUrl("/images/prev.png") : null,
              r = e > 0 ? this.getUrl("/images/next.png") : null,
              i = this.imageList.length;
            this.$mp.data = Object.assign({}, {
              $root: {
                g0: e,
                m0: n,
                m1: r,
                g1: i
              }
            })
          },
          i = !1,
          u = [];
        r._withStripped = !0
      },
    144:
      /*!******************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/index.vue?vue&type=script&lang=js& ***!
        \******************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 145),
          i = n.n(r);
        for (var u in r)["default"].indexOf(u) < 0 && function(t) {
          n.d(e, t, (function() {
            return r[t]
          }))
        }(u);
        e.default = i.a
      },
    145:
      /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/index.vue?vue&type=script&lang=js& ***!
        \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        (function(t) {
          var r = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var i = r(n( /*! @babel/runtime/regenerator */ 28)),
            u = r(n( /*! @babel/runtime/helpers/asyncToGenerator */ 31)),
            o = {
              onLoad: function() {
                var e = this;
                return (0, u.default)(i.default.mark((function n() {
                  var r;
                  return i.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        e.token = t.getStorageSync("token"), e.token || (r = "/pages/login/login?type=0&url=/pages/ag/index", e.$http.goPage(r, "to"), e.$http.goPage(r)), e.getQrcode();
                      case 3:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              data: function() {
                return {
                  token: "",
                  imageList: [],
                  currentIndex: 0
                }
              },
              computed: {},
              methods: {
                getQrcode: function() {
                  var t = this;
                  this.$http.request("/user/qrcode/generate", {
                    ischeckLogin: 1
                  }).then((function(e) {
                    t.imageList = e.data.url
                  }))
                },
                getUrl: function(t) {
                  return this.$baseurl + t
                },
                slideLeft: function() {
                  0 == this.currentIndex ? this.currentIndex = 2 : this.currentIndex--
                },
                slideRight: function() {
                  2 == this.currentIndex ? this.currentIndex = 0 : this.currentIndex++
                },
                longPress: function(e) {
                  var n = this;
                  t.downloadFile({
                    url: e,
                    success: function(e) {
                      200 === e.statusCode && t.saveImageToPhotosAlbum({
                        filePath: e.tempFilePath,
                        success: function() {
                          n.$http.showToast("图片保存成功", "success")
                        },
                        fail: function(e) {
                          t.showModal({
                            title: "获取相册权限失败",
                            content: "请前往设置页手动授权该权限",
                            showCancel: !1,
                            confirmText: "去设置",
                            success: function(e) {
                              t.hideLoading(), e.confirm && t.openSetting({
                                success: function() {}
                              })
                            }
                          })
                        }
                      })
                    },
                    fail: function(t) {
                      n.$http.showToast("图片下载失败", "error")
                    }
                  })
                }
              }
            };
          e.default = o
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    146:
      /*!**************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/index.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
        \**************************************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=scss&scope=true& */ 147),
          i = n.n(r);
        for (var u in r)["default"].indexOf(u) < 0 && function(t) {
          n.d(e, t, (function() {
            return r[t]
          }))
        }(u);
        e.default = i.a
      },
    147:
      /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/index.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
        \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {}
  },
  [
    [140, "common/runtime", "common/vendor"]
  ]
]);