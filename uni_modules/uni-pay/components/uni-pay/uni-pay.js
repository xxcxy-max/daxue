(global.webpackJsonp = global.webpackJsonp || []).push([
  ["uni_modules/uni-pay/components/uni-pay/uni-pay"], {
    833:
      /*!*************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/components/uni-pay/uni-pay.vue ***!
        \*************************************************************************************************/
      /*! no static exports found */
      function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r( /*! ./uni-pay.vue?vue&type=template&id=1f87f297&scoped=true& */ 834),
          a = r( /*! ./uni-pay.vue?vue&type=script&lang=js& */ 836);
        for (var o in a)["default"].indexOf(o) < 0 && function(e) {
          r.d(t, e, (function() {
            return a[e]
          }))
        }(o);
        r( /*! ./uni-pay.vue?vue&type=style&index=0&id=1f87f297&lang=scss&scoped=true& */ 838);
        var i = r( /*! ../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 50),
          c = Object(i.default)(a.default, n.render, n.staticRenderFns, !1, null, "1f87f297", null, !1, n.components, void 0);
        c.options.__file = "uni_modules/uni-pay/components/uni-pay/uni-pay.vue", t.default = c.exports
      },
    834:
      /*!********************************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/components/uni-pay/uni-pay.vue?vue&type=template&id=1f87f297&scoped=true& ***!
        \********************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r( /*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-pay.vue?vue&type=template&id=1f87f297&scoped=true& */ 835);
        r.d(t, "render", (function() {
          return n.render
        })), r.d(t, "staticRenderFns", (function() {
          return n.staticRenderFns
        })), r.d(t, "recyclableRender", (function() {
          return n.recyclableRender
        })), r.d(t, "components", (function() {
          return n.components
        }))
      },
    835:
      /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/components/uni-pay/uni-pay.vue?vue&type=template&id=1f87f297&scoped=true& ***!
        \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: render, staticRenderFns, recyclableRender, components */
      function(e, t, r) {
        "use strict";
        var n;
        r.r(t), r.d(t, "render", (function() {
          return a
        })), r.d(t, "staticRenderFns", (function() {
          return i
        })), r.d(t, "recyclableRender", (function() {
          return o
        })), r.d(t, "components", (function() {
          return n
        }));
        try {
          n = {
            uniPopup: function() {
              return r.e( /*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(r.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 745))
            },
            uniList: function() {
              return r.e( /*! import() | uni_modules/uni-list/components/uni-list/uni-list */ "uni_modules/uni-list/components/uni-list/uni-list").then(r.bind(null, /*! @/uni_modules/uni-list/components/uni-list/uni-list.vue */ 847))
            },
            uniListItem: function() {
              return r.e( /*! import() | uni_modules/uni-list/components/uni-list-item/uni-list-item */ "uni_modules/uni-list/components/uni-list-item/uni-list-item").then(r.bind(null, /*! @/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue */ 854))
            }
          }
        } catch (e) {
          if (-1 === e.message.indexOf("Cannot find module") || -1 === e.message.indexOf(".vue")) throw e;
          console.error(e.message), console.error("1. 排查组件名称拼写是否正确"), console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"), console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")
        }
        var a = function() {
            var e = this,
              t = e.$createElement,
              r = (e._self._c, "pc" === e.modeCom ? (e.options.total_fee / 100).toFixed(2) : null),
              n = "pc" === e.modeCom ? e.currentProviders.indexOf("wxpay") : null,
              a = "pc" === e.modeCom ? e.currentProviders.indexOf("alipay") : null,
              o = "pc" !== e.modeCom ? (e.options.total_fee / 100).toFixed(2) : null,
              i = "pc" !== e.modeCom ? e.currentProviders.indexOf("wxpay") : null,
              c = (e.options.total_fee / 100).toFixed(2);
            e.$mp.data = Object.assign({}, {
              $root: {
                g0: r,
                g1: n,
                g2: a,
                g3: o,
                g4: i,
                g5: c
              }
            })
          },
          o = !1,
          i = [];
        a._withStripped = !0
      },
    836:
      /*!**************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/components/uni-pay/uni-pay.vue?vue&type=script&lang=js& ***!
        \**************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r( /*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-pay.vue?vue&type=script&lang=js& */ 837),
          a = r.n(n);
        for (var o in n)["default"].indexOf(o) < 0 && function(e) {
          r.d(t, e, (function() {
            return n[e]
          }))
        }(o);
        t.default = a.a
      },
    837:
      /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/components/uni-pay/uni-pay.vue?vue&type=script&lang=js& ***!
        \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, r) {
        "use strict";
        (function(e, n) {
          var a = r( /*! @babel/runtime/helpers/interopRequireDefault */ 4);
          Object.defineProperty(t, "__esModule", {
            value: !0
          }), t.default = void 0;
          var o = a(r( /*! @babel/runtime/regenerator */ 28)),
            i = a(r( /*! @babel/runtime/helpers/defineProperty */ 11)),
            c = a(r( /*! @babel/runtime/helpers/asyncToGenerator */ 31)),
            u = a(r( /*! ../../js_sdk/js_sdk.js */ 641));

          function s(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              }))), r.push.apply(r, n)
            }
            return r
          }

          function p(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? s(Object(r), !0).forEach((function(t) {
                (0, i.default)(e, t, r[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }))
            }
            return e
          }
          var d, f = e.importObject("uni-pay-co"),
            l = {
              name: "uni-pay",
              emits: ["success", "cancel", "fail", "create", "mounted", "qrcode"],
              props: {
                adpid: {
                  Type: String,
                  default: ""
                },
                toSuccessPage: {
                  Type: Boolean,
                  default: !0
                },
                returnUrl: {
                  Type: String,
                  default: ""
                },
                mainColor: {
                  Type: String,
                  default: ""
                },
                mode: {
                  Type: String,
                  default: ""
                },
                logo: {
                  Type: String,
                  default: "/static/logo.png"
                },
                height: {
                  Type: [String],
                  default: "70vh"
                },
                debug: {
                  Type: Boolean,
                  default: !1
                }
              },
              data: function() {
                return {
                  options: {},
                  res: {},
                  images: {
                    wxpay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABC9JREFUeF7tWk1a20AMlUzv0bDr13AAYAOcpLCBcoqQU1DYEE6C2QAHIP26q3sPPOqniU2cZMYj+SeGxN5kEXlm9ObpjaQxwpY/uOX+Qw9Az4AtR6APgS0nQC+CfQi0FQLfrvcHXwAGPP4bQMK/fy5f7O9HehphwPfb/dOIogEhHQHBcamDCDESPoIxMQPTNSi1ABj+OrwDpNMaO5og4P2bMZOugFADwNTewWhU0/FVzAgnKZnxuoFQAbB3vX9MET7U2PHgq4R09vv8ZRI0bMhADMDw9uAhGN8NLQrWyAYRAGt1PgcRIU5TOms7JIIAdOL8nElJauikTRBKAdi7ObwioFFTzHaMw3mBzRV8DwKOXy+ertpagxcAq/YR/g2d6TlNrUDu4EiiE0Why4T1rgyINoXRC4DgjE+mF8+7RYAkp4RrRyVztRUKTgCkuz89fz4pAiB5z7WbklBrKxScAEgWxI6joZPXy5c4B0H0nkPdhzcHFIxxhHgZ8OA7AgMnAMObA479UnF6H5twQpF5RBMdibPDvB4AAAL6IZ0rNbTb9IngAyC8IwJ0K5okQBgzqFEKSV4wcXg17bxl8fIiJXFc0bHAgYLjYlHEFaZlVUQDoAIbcVZaN1VRrgAgUfImASiKW6Yh4pAohmHVQqpLABI0dMYiKhJPCeoV0ueuQsDmEJrkSeJ/bqNJnOqfApqVzWznzrdYWkvzhnUDYGnPKLTdV5gpfLiOqJUIaTefF8RKH6wxtAOX2IdA8NcCmmRItmBLfVF5jRBnR58kGQtWlGUJlBeAxpQ5A4eFKTu/ufLzPQv1f2mRRDiZ/nyyYwYrypI0OlQOc/9PsgshDsh2v+BUwTFnD3K5DglVlD4WlDZEsqywNgiK2F9gQBkLi7EtyV59WhBsiTURCjy5QZMgYRn9cxbZWgCQ+IKlnH2sFQYTURHmCYMgAJaKs9aYPkXNXGK6QhQdt9xeC4UhTC+eV/wVASASmrKj6IMA4NIBMQDsX1VN4IlbuU0K7vmiQS0G5EOpmiW6I1Dpjtp8pYc5yxYVj0RtXcMJcwDFSiqYLh2x+QgqAJwnAuEEydxbkZtdj+fKPVfwbPIq7KngqvMVX4WoAmDBAcH9HTMmXw23s0LJSlPOOsZx0l8VAu/0Fzjuc2Td3aY5zf1VoZgBvPgmvuhoIrFSMSXQThcDoJo0YLxGLfBSv5IINgVC1XxCOb/oZrkTBtRJqkQgKG6ROgPgPbGq/6HVIiYK51WngAj5ikbBhoZi3FALbHmozhlQXFChTc75g6wRM2ufzb9N/IwMcG0wg8HZJf9HBF/tFZnBBBH+cW/BpBDnd4XLDNJcon4oBiiY7jS194mEI0IaSz+12ygAclSYEcXvFsqA3UgANEzqAdCgtYm2PQM2cVc1PvUM0KC1ibY9AzZxVzU+bT0D/gPs/oxfcUEcJAAAAABJRU5ErkJggg==",
                    alipay: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA2FJREFUeF7tmU122jAQx2cMB2hp9yULeK+naHISwhJyiIRDBJaQkwRO0fdgEWff0h4ANH0yFc+m+hhbckKNvJUsaX76z4ckhAv/8MLthwggKuDCCUQXuHABxCAYXSC6wIUTiC7wFgL4MPveTaj9optrO+696ya8yeQRQFRAdIEYAxoVBD/PNtdCwHWpDIJwr+1PMCk1DgAkCSx/jHrLsv/p+lfKAp3HzQOYDAqxKtcYBJPtXe/B1Y3TXgmATGst0WIrgAC7JmBINOQsNN8HE0zfVQFlFxzrgFgHNLQOkNJuQ7vrcgkS1CXEua5fgnDj+l+172CX/h59Tbn9Of0qBUE1cGe2ngPhLWeiEH0krFDBT63HC8Cnx/VtFuFDfgl90UOldDvuX4WcSo7lBSD0YuR4H6ebZwRNkRUw9xdSah1G+IzZmW5IW7ERDX/e9Rc+YwerBEMvQo1nrhfqkf/ZuYCxxK5J/t4AjkFQBi71CXxFoFSWq2XTlkn+AndXodNf5SwgT4J7gnttoNL6BqUEmCZET/tkvzQZYj5g1Sf/0goIkfcJYIkEK5HsFnkYnen6BXQptUb5lwJgMz4zCihXD/BqAwVDuoy+Uqx399kACrkZaYECVjY5qxJZXpoQwrcDHB6UghfVvPssAMo35W4R7oZVg5EMmAJxUCZ2CNzfVJ2Pm6qdleDBNwFClaHZdRrQAEhWe25VSPCuAMo1tnQhdIzMNUixfDYBqAOGVQEKQB15OFMCwXPV3QsFww7g73E39Pudr/Gn0EyplQPXCkBF/5AKsBtPKRA+AdKAEx/0BhYLL9nHFkhZLiBvbkOcxFzG5wPtoe7gBUrrTiMttqO+8ebZCkAtWErs17jHvrrSLcj+lkCpKeV5g/ABIA05lqgVM4Er2nPhZgev7DHGnToLG+ALIC9budgWwoRzyuMUPlzj8waVBuELIFOB5iksi7xIKQh8PS4wu8/j+a3vBScbRAgABVfg5BZbH6SFgP0kVIl7UCjNja4RCkAGwecaPLDhp4yNsSYkADlp/mncdNLLu8fpud9XQK7//wERGoBrAefSfgRBsLI9pTtPg+diUNV1yLuJypVg1Un/p/8arwDXZkQALkJNb48KaPoOu+yLCnARanp7VEDTd9hlX1SAi1DT2/8AaakVXysj5qkAAAAASUVORK5CYII="
                  },
                  originalRroviders: ["wxpay", "alipay"],
                  currentProviders: ["wxpay", "alipay"],
                  openid: ""
                }
              },
              mounted: function() {
                var e = this;
                return (0, c.default)(o.default.mark((function t() {
                  var r, n;
                  return o.default.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                      case 0:
                        if (d) {
                          t.next = 8;
                          break
                        }
                        return t.next = 3, e.getCode();
                      case 3:
                        return r = t.sent, t.next = 6, e.getOpenid({
                          provider: "wxpay",
                          code: r
                        });
                      case 6:
                        (n = t.sent) && (d = n.openid, e.openid = n.openid);
                      case 8:
                        e.originalRroviders = ["wxpay"], e.currentProviders = JSON.parse(JSON.stringify(e.originalRroviders)), e.$emit("mounted", {
                          images: e.images,
                          originalRroviders: e.originalRroviders,
                          currentProviders: e.currentProviders
                        });
                      case 11:
                      case "end":
                        return t.stop()
                    }
                  }), t)
                })))()
              },
              methods: {
                open: function() {
                  var e = arguments,
                    t = this;
                  return (0, c.default)(o.default.mark((function r() {
                    var n, a;
                    return o.default.wrap((function(r) {
                      for (;;) switch (r.prev = r.next) {
                        case 0:
                          (n = e.length > 0 && void 0 !== e[0] ? e[0] : {}).provider ? (a = [], t.originalRroviders.map((function(e, t) {
                            n.provider.indexOf(e) > -1 && a.push(e)
                          })), t.currentProviders = a, delete n.provider) : t.currentProviders = JSON.parse(JSON.stringify(t.originalRroviders)), t.options = n, 1 === t.currentProviders.length ? t.createOrder({
                            provider: t.currentProviders[0]
                          }) : ("pc" === t.modeCom && t._pcChooseProvider(t.currentProviders[0]), t.openPopup("payPopup"));
                        case 4:
                        case "end":
                          return r.stop()
                      }
                    }), r)
                  })))()
                },
                createOrder: function() {
                  var e = arguments,
                    t = this;
                  return (0, c.default)(o.default.mark((function r() {
                    var n, a, i, c;
                    return o.default.wrap((function(r) {
                      for (;;) switch (r.prev = r.next) {
                        case 0:
                          if (n = e.length > 0 && void 0 !== e[0] ? e[0] : {}, a = t.options, Object.assign(a, n), "appleiap" !== a.provider) {
                            r.next = 5;
                            break
                          }
                          return r.abrupt("return", t._appleiapCreateOrder(a));
                        case 5:
                          return i = {
                            provider: a.provider,
                            total_fee: a.total_fee,
                            openid: d,
                            order_no: a.order_no,
                            out_trade_no: a.out_trade_no,
                            description: a.description,
                            type: a.type,
                            qr_code: a.qr_code,
                            custom: a.custom,
                            other: a.other,
                            wxpay_virtual: a.wxpay_virtual
                          }, d && (i.openid = d), r.prev = 7, r.next = 10, f.createOrder(i);
                        case 10:
                          (c = r.sent).errCode ? t.$emit("fail", c) : (t.$emit("create", c), c.qr_code && !a.cancel_popup ? (t.res = c, "pc" === t.modeCom ? (t.openPopup("payPopup"), t._pcChooseProvider(a.provider)) : t.openPopup("qrcodePopup")) : t.orderPayment(c)), r.next = 17;
                          break;
                        case 14:
                          r.prev = 14, r.t0 = r.catch(7), t.$emit("fail", r.t0);
                        case 17:
                        case "end":
                          return r.stop()
                      }
                    }), r, null, [
                      [7, 14]
                    ])
                  })))()
                },
                orderPayment: function(e) {
                  var t = this;
                  this.res = e, e.qr_code ? this.$emit("qrcode", e) : e.order && ("wxpay-virtual" === e.provider ? n.requestVirtualPayment(p(p({}, e.order), {}, {
                    success: function(e) {
                      t._getOrder()
                    },
                    fail: function(e) {
                      -1 == e.errMsg.indexOf("fail cancel") ? (console.error("uni.requestVirtualPayment:fail", e), t.$emit("fail", e)) : t.$emit("cancel", e)
                    }
                  })) : n.requestPayment(p(p(p({}, e.order), e.order), {}, {
                    success: function(e) {
                      t._getOrder()
                    },
                    fail: function(e) {
                      -1 == e.errMsg.indexOf("fail cancel") ? (console.error("uni.requestPayment:fail", e), t.$emit("fail", e)) : t.$emit("cancel", e)
                    }
                  })))
                },
                openPopup: function(e) {
                  this.$refs[e].showPopup || this.$refs[e].open()
                },
                closePopup: function(e) {
                  this.$refs[e].close()
                },
                getOrder: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.getOrder(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                refund: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.refund(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                getRefund: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.getRefund(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                closeOrder: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.closeOrder(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                getPayProviderFromCloud: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.getPayProviderFromCloud(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                getProviderAppId: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.getProviderAppId(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                getOpenid: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.getOpenid(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                verifyReceiptFromAppleiap: function() {
                  var e = arguments;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, n;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, t.prev = 1, t.next = 4, f.verifyReceiptFromAppleiap(r);
                        case 4:
                          return n = t.sent, "function" == typeof r.success && r.success(n), t.abrupt("return", n);
                        case 9:
                          t.prev = 9, t.t0 = t.catch(1), "function" == typeof r.fail && r.fail(t.t0);
                        case 12:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [1, 9]
                    ])
                  })))()
                },
                getCode: function() {
                  return (0, c.default)(o.default.mark((function e() {
                    return o.default.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.abrupt("return", u.default.getWeixinCode());
                        case 1:
                        case "end":
                          return e.stop()
                      }
                    }), e)
                  })))()
                },
                paySuccess: function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  this.closePopup("payPopup"), this.closePopup("payConfirmPopup"), this.clearQrcode(), this.toSuccessPage && this.pageToSuccess(e), this.$emit("success", e)
                },
                pageToSuccess: function(e) {
                  if ("pc" !== this.modeCom) n.navigateTo({
                    url: "/uni_modules/uni-pay/pages/success/success?out_trade_no=".concat(e.out_trade_no, "&order_no=").concat(e.pay_order.order_no, "&pay_date=").concat(e.pay_order.pay_date, "&total_fee=").concat(e.pay_order.total_fee, "&adpid=").concat(this.adpid, "&return_url=").concat(this.returnUrl, "&main_color=").concat(this.mainColor)
                  });
                  else if (this.returnUrl) {
                    var t = this.returnUrl + "?out_trade_no=".concat(e.out_trade_no, "&order_no=").concat(e.pay_order.order_no);
                    0 !== t.indexOf("/") && (t = "/".concat(t)), n.navigateTo({
                      url: t
                    })
                  }
                },
                clearQrcode: function() {
                  this.res.codeUrl = "", this.res.qr_code_image = ""
                },
                _getOrder: function() {
                  var e = this;
                  return (0, c.default)(o.default.mark((function t() {
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          e.getOrder({
                            out_trade_no: e.res.out_trade_no,
                            await_notify: !0,
                            success: function(t) {
                              t.has_paid && (e.closePopup("qrcodePopup"), e.paySuccess(t))
                            }
                          });
                        case 1:
                        case "end":
                          return t.stop()
                      }
                    }), t)
                  })))()
                },
                _afreshPayment: function() {
                  this.orderPayment(this.res)
                },
                _pcChooseProvider: function(e) {
                  if (e !== this.options.provider) return this.createOrder({
                    provider: e
                  })
                },
                _appleiapCreateOrder: function(e) {
                  var t = this;
                  return (0, c.default)(o.default.mark((function r() {
                    var a, i, c, u, s, p, d;
                    return o.default.wrap((function(r) {
                      for (;;) switch (r.prev = r.next) {
                        case 0:
                          return a = new appleiapSdk.Iap({
                            products: [e.productid]
                          }), n.showLoading({
                            title: "加载中..."
                          }), r.next = 4, a.init();
                        case 4:
                          return r.next = 6, a.getProduct();
                        case 6:
                          return i = r.sent, c = i[0], e.total_fee = 100 * c.price, e.description = c.description, u = {
                            provider: e.provider,
                            total_fee: e.total_fee,
                            order_no: e.order_no,
                            out_trade_no: e.out_trade_no,
                            description: e.description,
                            type: e.type,
                            custom: e.custom
                          }, r.next = 13, f.createOrder(u);
                        case 13:
                          if (0 !== (s = r.sent).errCode) {
                            r.next = 49;
                            break
                          }
                          return t.$emit("create", s), t.res = s, n.showLoading({
                            title: "支付请求中..."
                          }), r.prev = 18, t.debug && console.log("正在请求苹果服务器", e.productid, s.out_trade_no), r.next = 22, a.requestPayment({
                            productid: e.productid,
                            username: s.out_trade_no
                          });
                        case 22:
                          if (p = r.sent, t.debug && console.log("用户支付成功", p), n.showLoading({
                              title: "正在处理支付结果..."
                            }), p.payment.username || (p.payment.username = t.getAppleiapUserName(p)), p.payment.username) {
                            r.next = 32;
                            break
                          }
                          return r.next = 29, a.finishTransaction(p);
                        case 29:
                          return n.hideLoading(), console.log("您可能已支付成功，但很抱歉丢单了，请联系客服处理。", p), r.abrupt("return", !1);
                        case 32:
                          return t.addAppleiapOrder(p), r.next = 35, t.verifyReceiptFromAppleiap({
                            out_trade_no: p.payment.username,
                            transaction_receipt: p.transactionReceipt,
                            transaction_identifier: p.transactionIdentifier
                          });
                        case 35:
                          if (0 !== (d = r.sent).errCode) {
                            r.next = 42;
                            break
                          }
                          return r.next = 39, a.finishTransaction(p);
                        case 39:
                          t.removeAppleiapOrder(p), n.hideLoading(), t.paySuccess(d);
                        case 42:
                          r.next = 49;
                          break;
                        case 44:
                          r.prev = 44, r.t0 = r.catch(18), 2 === (r.t0.errCode || r.t0.code) ? (t.debug && console.log("用户取消支付"), t.$emit("cancel", r.t0)) : (console.error("appleiapCreateOrder:fail", r.t0), t.$emit("fail", r.t0)), n.hideLoading();
                        case 49:
                        case "end":
                          return r.stop()
                      }
                    }), r, null, [
                      [18, 44]
                    ])
                  })))()
                },
                appleiapRestore: function() {
                  var e = this;
                  return (0, c.default)(o.default.mark((function t() {
                    var r, a, i, c, u;
                    return o.default.wrap((function(t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          return n.showLoading({
                            title: "检测支付环境..."
                          }), r = new appleiapSdk.Iap, t.next = 4, r.init();
                        case 4:
                          return t.prev = 4, e.debug && console.log("正在查询是否有漏单信息"), t.next = 8, r.restoreCompletedTransactions({
                            username: ""
                          });
                        case 8:
                          if (a = t.sent, e.debug && console.log("漏单查询结果：" + (0 === a.length ? "未漏单" : "有漏单"), a), a.length) {
                            t.next = 12;
                            break
                          }
                          return t.abrupt("return");
                        case 12:
                          i = 0;
                        case 13:
                          if (!(i < a.length)) {
                            t.next = 42;
                            break
                          }
                          c = a[i], t.t0 = c.transactionState, t.next = t.t0 === appleiapSdk.IapTransactionState.purchased ? 18 : t.t0 === appleiapSdk.IapTransactionState.failed ? 35 : 38;
                          break;
                        case 18:
                          if (c.payment.username || (c.payment.username = e.getAppleiapUserName(c)), c.payment.username) {
                            t.next = 24;
                            break
                          }
                          return t.next = 22, r.finishTransaction(c);
                        case 22:
                          return console.log("您可能已支付成功，但很抱歉丢单了，请联系客服处理。", c), t.abrupt("continue", 39);
                        case 24:
                          return console.log("requestPaymentRes: ", c), t.next = 27, e.verifyReceiptFromAppleiap({
                            out_trade_no: c.payment.username,
                            transaction_receipt: c.transactionReceipt,
                            transaction_identifier: c.transactionIdentifier
                          });
                        case 27:
                          if (u = t.sent, console.log("verifyRes: ", u), 0 !== u.errCode) {
                            t.next = 34;
                            break
                          }
                          return console.log("完结订单：" + c.payment.username), t.next = 33, r.finishTransaction(c);
                        case 33:
                          e.removeAppleiapOrder(c);
                        case 34:
                          return t.abrupt("break", 39);
                        case 35:
                          return t.next = 37, r.finishTransaction(c);
                        case 37:
                        case 38:
                          return t.abrupt("break", 39);
                        case 39:
                          i++, t.next = 13;
                          break;
                        case 42:
                          t.next = 47;
                          break;
                        case 44:
                          t.prev = 44, t.t1 = t.catch(4), console.error(t.t1);
                        case 47:
                          return t.prev = 47, n.hideLoading(), t.finish(47);
                        case 50:
                        case "end":
                          return t.stop()
                      }
                    }), t, null, [
                      [4, 44, 47, 50]
                    ])
                  })))()
                },
                addAppleiapOrder: function(e) {
                  var t = "uni-pay-appleiap-order",
                    r = n.getStorageSync(t) || [];
                  r.push(e), n.setStorageSync(t, r)
                },
                getAppleiapUserName: function(e) {
                  var t = (n.getStorageSync("uni-pay-appleiap-order") || []).find((function(t) {
                    return t.transactionIdentifier === e.transactionIdentifier && t.transactionDate === e.transactionDate
                  }));
                  return t && t.payment && t.payment.username
                },
                removeAppleiapOrder: function(e) {
                  var t = "uni-pay-appleiap-order",
                    r = n.getStorageSync(t) || [],
                    a = r.findIndex((function(t) {
                      return t.transactionIdentifier === e.transactionIdentifier && t.transactionDate === e.transactionDate
                    }));
                  a > -1 && r.splice(a, 1), n.setStorageSync(t, r)
                }
              },
              watch: {},
              computed: {
                modeCom: function() {
                  if (this.mode) return this.mode;
                  var e = n.getSystemInfoSync();
                  return e && "pc" === e.deviceType ? "pc" : "mobile"
                }
              }
            };
          t.default = l
        }).call(this, r( /*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27).uniCloud, r( /*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2).default)
      },
    838:
      /*!***********************************************************************************************************************************************************!*\
        !*** D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/components/uni-pay/uni-pay.vue?vue&type=style&index=0&id=1f87f297&lang=scss&scoped=true& ***!
        \***********************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r( /*! -!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-pay.vue?vue&type=style&index=0&id=1f87f297&lang=scss&scoped=true& */ 839),
          a = r.n(n);
        for (var o in n)["default"].indexOf(o) < 0 && function(e) {
          r.d(t, e, (function() {
            return n[e]
          }))
        }(o);
        t.default = a.a
      },
    839:
      /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
        !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/soft/phpstudy_pro/WWW/uniapp/wechat/uni_modules/uni-pay/components/uni-pay/uni-pay.vue?vue&type=style&index=0&id=1f87f297&lang=scss&scoped=true& ***!
        \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      function(e, t, r) {}
  }
]), (global.webpackJsonp = global.webpackJsonp || []).push(["uni_modules/uni-pay/components/uni-pay/uni-pay-create-component", {
    "uni_modules/uni-pay/components/uni-pay/uni-pay-create-component": function(e, t, r) {
      r("2").createComponent(r(833))
    }
  },
  [
    ["uni_modules/uni-pay/components/uni-pay/uni-pay-create-component"]
  ]
]);