(global.webpackJsonp = global.webpackJsonp || []).push([
  ["pages/ag/qrcode"], {
    132:
      /*!*************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/main.js?{"page":"pages%2Fag%2Fqrcode"} ***!
        \*************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        (function(t, e) {
          var i = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          n( /*! uni-pages */ 26), n( /*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
          i(n( /*! vue */ 25));
          var r = i(n( /*! ./pages/ag/qrcode.vue */ 133));
          t.__webpack_require_UNI_MP_PLUGIN__ = n, e(r.default)
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1).default, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).createPage)
      },
    133:
      /*!******************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/qrcode.vue ***!
        \******************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n( /*! ./qrcode.vue?vue&type=template&id=0eb571ee& */ 134),
          r = n( /*! ./qrcode.vue?vue&type=script&lang=js& */ 136);
        for (var o in r)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return r[t]
          }))
        }(o);
        n( /*! ./qrcode.vue?vue&type=style&index=0&lang=scss&scope=true& */ 138);
        var c = n( /*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50),
          u = Object(c.default)(r.default, i.render, i.staticRenderFns, !1, null, null, null, !1, i.components, void 0);
        u.options.__file = "pages/ag/qrcode.vue", e.default = u.exports
      },
    134:
      /*!*************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/qrcode.vue?vue&type=template&id=0eb571ee& ***!
        \*************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./qrcode.vue?vue&type=template&id=0eb571ee& */ 135);
        n.d(e, "render", (function() {
          return i.render
        })), n.d(e, "staticRenderFns", (function() {
          return i.staticRenderFns
        })), n.d(e, "recyclableRender", (function() {
          return i.recyclableRender
        })), n.d(e, "components", (function() {
          return i.components
        }))
      },
    135:
      /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/qrcode.vue?vue&type=template&id=0eb571ee& ***!
        \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "render", (function() {
          return i
        })), n.d(e, "staticRenderFns", (function() {
          return o
        })), n.d(e, "recyclableRender", (function() {
          return r
        })), n.d(e, "components", (function() {}));
        var i = function() {
            var t = this.$createElement,
              e = (this._self._c, this.imageList.length),
              n = this.imageList.length,
              i = n > 0 ? this.getUrl(this.imageList[0]) : null,
              r = this.imageList.length;
            this.$mp.data = Object.assign({}, {
              $root: {
                g0: e,
                g1: n,
                m0: i,
                g2: r
              }
            })
          },
          r = !1,
          o = [];
        i._withStripped = !0
      },
    136:
      /*!*******************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/qrcode.vue?vue&type=script&lang=js& ***!
        \*******************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./qrcode.vue?vue&type=script&lang=js& */ 137),
          r = n.n(i);
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        e.default = r.a
      },
    137:
      /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/qrcode.vue?vue&type=script&lang=js& ***!
        \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        (function(t) {
          var i = n( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.default = void 0;
          var r = i(n( /*! @babel/runtime/regenerator */ 28)),
            o = i(n( /*! @babel/runtime/helpers/asyncToGenerator */ 31)),
            c = {
              onLoad: function() {
                var e = this;
                return (0, o.default)(r.default.mark((function n() {
                  return r.default.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                      case 0:
                        e.token = t.getStorageSync("token"), e.token || e.$http.goPage("/pages/login/login?type=0&url=/pages/ag/qrcode"), e.getQrcode();
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
                  this.$http.request("/weixin/weixin/generate", {
                    ischeckLogin: 1
                  }).then((function(e) {
                    t.imageList = e.data.imageList
                  }))
                },
                getUrl: function(t) {
                  return this.$https1 + t
                },
                slideLeft: function() {
                  this.currentIndex = (this.currentIndex - 1 + 3) % 3
                },
                slideRight: function() {
                  this.currentIndex = (this.currentIndex + 1) % 3
                },
                longPress: function(e) {
                  var n = this;
                  t.downloadFile({
                    url: n.$https1 + e,
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
          e.default = c
        }).call(this, n( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    138:
      /*!***************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/qrcode.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
        \***************************************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n( /*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./qrcode.vue?vue&type=style&index=0&lang=scss&scope=true& */ 139),
          r = n.n(i);
        for (var o in i)["default"].indexOf(o) < 0 && function(t) {
          n.d(e, t, (function() {
            return i[t]
          }))
        }(o);
        e.default = r.a
      },
    139:
      /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/pages/ag/qrcode.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
        \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(t, e, n) {}
  },
  [
    [132, "common/runtime", "common/vendor"]
  ]
]);