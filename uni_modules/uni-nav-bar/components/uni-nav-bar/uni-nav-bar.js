(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar"], {
    650:
      /*!*************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue ***!
        \*************************************************************************************************************/
      /*! no static exports found */
      function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e( /*! ./uni-nav-bar.vue?vue&type=template&id=6bda1a90&scoped=true& */ 651),
          r = e( /*! ./uni-nav-bar.vue?vue&type=script&lang=js& */ 653);
        for (var i in r)["default"].indexOf(i) < 0 && function(n) {
          e.d(t, n, (function() {
            return r[n]
          }))
        }(i);
        e( /*! ./uni-nav-bar.vue?vue&type=style&index=0&id=6bda1a90&lang=scss&scoped=true& */ 655);
        var u = e( /*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50),
          a = Object(u.default)(r.default, o.render, o.staticRenderFns, !1, null, "6bda1a90", null, !1, o.components, void 0);
        a.options.__file = "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue", t.default = a.exports
      },
    651:
      /*!********************************************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=6bda1a90&scoped=true& ***!
        \********************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e( /*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-nav-bar.vue?vue&type=template&id=6bda1a90&scoped=true& */ 652);
        e.d(t, "render", (function() {
          return o.render
        })), e.d(t, "staticRenderFns", (function() {
          return o.staticRenderFns
        })), e.d(t, "recyclableRender", (function() {
          return o.recyclableRender
        })), e.d(t, "components", (function() {
          return o.components
        }))
      },
    652:
      /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=6bda1a90&scoped=true& ***!
        \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(n, t, e) {
        "use strict";
        var o;
        e.r(t), e.d(t, "render", (function() {
          return r
        })), e.d(t, "staticRenderFns", (function() {
          return u
        })), e.d(t, "recyclableRender", (function() {
          return i
        })), e.d(t, "components", (function() {
          return o
        }));
        try {
          o = {
            uniIcons: function() {
              return Promise.all( /*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */ [e.e("common/vendor"), e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 737))
            }
          }
        } catch (n) {
          if (-1 === n.message.indexOf("Cannot find module") || -1 === n.message.indexOf(".vue")) throw n;
          console.error(n.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")
        }
        var r = function() {
            var n = this,
              t = n.$createElement,
              e = (n._self._c, n.leftIcon.length),
              o = n.leftText.length,
              r = o ? n.leftIcon.length : null,
              i = n.title.length,
              u = n.rightIcon.length,
              a = n.rightText.length && !n.rightIcon.length;
            n.$mp.data = Object.assign({}, {
              $root: {
                g0: e,
                g1: o,
                g2: r,
                g3: i,
                g4: u,
                g5: a
              }
            })
          },
          i = !1,
          u = [];
        r._withStripped = !0
      },
    653:
      /*!**************************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
        \**************************************************************************************************************************************/
      /*! no static exports found */
      function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e( /*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-nav-bar.vue?vue&type=script&lang=js& */ 654),
          r = e.n(o);
        for (var i in o)["default"].indexOf(i) < 0 && function(n) {
          e.d(t, n, (function() {
            return o[n]
          }))
        }(i);
        t.default = r.a
      },
    654:
      /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
        \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(n, t, e) {
        "use strict";
        (function(n) {
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var o = function(n) {
              return "number" == typeof n ? n + "px" : n
            },
            r = {
              name: "UniNavBar",
              components: {
                statusBar: function() {
                  e.e( /*! require.ensure | uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar */ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar").then(function() {
                    return resolve(e( /*! ./uni-status-bar.vue */ 840))
                  }.bind(null, e)).catch(e.oe)
                }
              },
              emits: ["clickLeft", "clickRight", "clickTitle"],
              props: {
                dark: {
                  type: Boolean,
                  default: !1
                },
                title: {
                  type: String,
                  default: ""
                },
                leftText: {
                  type: String,
                  default: ""
                },
                rightText: {
                  type: String,
                  default: ""
                },
                leftIcon: {
                  type: String,
                  default: ""
                },
                rightIcon: {
                  type: String,
                  default: ""
                },
                fixed: {
                  type: [Boolean, String],
                  default: !1
                },
                color: {
                  type: String,
                  default: ""
                },
                backgroundColor: {
                  type: String,
                  default: ""
                },
                statusBar: {
                  type: [Boolean, String],
                  default: !1
                },
                shadow: {
                  type: [Boolean, String],
                  default: !1
                },
                border: {
                  type: [Boolean, String],
                  default: !0
                },
                height: {
                  type: [Number, String],
                  default: 44
                },
                leftWidth: {
                  type: [Number, String],
                  default: 60
                },
                rightWidth: {
                  type: [Number, String],
                  default: 60
                },
                stat: {
                  type: [Boolean, String],
                  default: ""
                }
              },
              computed: {
                themeBgColor: function() {
                  return this.dark ? this.backgroundColor ? this.backgroundColor : this.dark ? "#333" : "#FFF" : this.backgroundColor || "#FFF"
                },
                themeColor: function() {
                  return this.dark ? this.color ? this.color : this.dark ? "#fff" : "#333" : this.color || "#333"
                },
                navbarHeight: function() {
                  return o(this.height)
                },
                leftIconWidth: function() {
                  return o(this.leftWidth)
                },
                rightIconWidth: function() {
                  return o(this.rightWidth)
                }
              },
              mounted: function() {
                n.report && this.stat && "" !== this.title && n.report("title", this.title)
              },
              methods: {
                onClickLeft: function() {
                  this.$emit("clickLeft")
                },
                onClickRight: function() {
                  this.$emit("clickRight")
                },
                onClickTitle: function() {
                  this.$emit("clickTitle")
                }
              }
            };
          t.default = r
        }).call(this, e( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    655:
      /*!***********************************************************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=6bda1a90&lang=scss&scoped=true& ***!
        \***********************************************************************************************************************************************************************/
      /*! no static exports found */
      function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e( /*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-nav-bar.vue?vue&type=style&index=0&id=6bda1a90&lang=scss&scoped=true& */ 656),
          r = e.n(o);
        for (var i in o)["default"].indexOf(i) < 0 && function(n) {
          e.d(t, n, (function() {
            return o[n]
          }))
        }(i);
        t.default = r.a
      },
    656:
      /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=6bda1a90&lang=scss&scoped=true& ***!
        \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(n, t, e) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component", {
    "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component": function(n, t, e) {
      e("2").createComponent(e(650))
    }
  },
  [
    ["uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar-create-component"]
  ]
]);