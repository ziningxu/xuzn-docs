import { defineComponent as C, openBlock as b, createElementBlock as T, createElementVNode as I, renderSlot as J, computed as z, reactive as q, resolveComponent as A, normalizeClass as G, createVNode as s, withCtx as _, Fragment as le, renderList as oe, createBlock as H, unref as u, createTextVNode as M, toDisplayString as fe, useAttrs as te, markRaw as re, shallowRef as X, onBeforeUnmount as Ae, watch as j, createCommentVNode as W, useSlots as Y, isVNode as de, cloneVNode as Oe, ref as ae, h as K, onUnmounted as ze, inject as Ue, provide as Fe, normalizeProps as Me, guardReactiveProps as Ve, withDirectives as Be, vShow as He, nextTick as De } from "vue";
import { ElIcon as P, ElSubMenu as Ne, ElMenuItem as Pe, useDraggable as je, ElForm as Ke, ElFormItem as Ge, ElInput as We, ElButton as ue, ElLoading as Je, ElTableColumn as qe, ElCheckbox as me, ElPopover as Qe, ElTooltip as Q, ElScrollbar as Xe, ElTable as Ye, ElPagination as Ze, ElProgress as et, ElSelect as tt, ElOption as nt, ElRadioGroup as lt, ElRadio as ot, ElCheckboxGroup as at, ElAlert as rt, ElInputNumber as st } from "element-plus";
import ut from "sortablejs";
const it = { class: "uni-layout-header" }, ct = { class: "uni-layout-header-logo" }, ft = { class: "uni-layout-header-menu" }, dt = { class: "uni-layout-header-left" }, pt = { class: "uni-layout-header-right" }, _t = /* @__PURE__ */ C({
  __name: "LayoutHeader",
  setup(n) {
    return (t, e) => (b(), T("div", it, [
      I("div", ct, [
        J(t.$slots, "logo")
      ]),
      I("div", ft, [
        I("div", dt, [
          J(t.$slots, "left")
        ]),
        I("div", pt, [
          J(t.$slots, "right")
        ])
      ])
    ]));
  }
});
/*! Element Plus Icons Vue v2.3.1 */
var mt = /* @__PURE__ */ C({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), gt = mt, ht = /* @__PURE__ */ C({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), vt = ht, yt = /* @__PURE__ */ C({
  name: "Close",
  __name: "close",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), pe = yt, bt = /* @__PURE__ */ C({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), wt = bt, kt = /* @__PURE__ */ C({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), Ct = kt, St = /* @__PURE__ */ C({
  name: "Fold",
  __name: "fold",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M896 192H128v128h768zm0 256H384v128h512zm0 256H128v128h768zM320 384 128 512l192 128z"
      })
    ]));
  }
}), Tt = St, xt = /* @__PURE__ */ C({
  name: "FullScreen",
  __name: "full-screen",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
      })
    ]));
  }
}), Se = xt, Lt = /* @__PURE__ */ C({
  name: "Monitor",
  __name: "monitor",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64z"
      })
    ]));
  }
}), It = Lt, $t = /* @__PURE__ */ C({
  name: "Moon",
  __name: "moon",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696"
      })
    ]));
  }
}), Et = $t, Rt = /* @__PURE__ */ C({
  name: "Operation",
  __name: "operation",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), At = Rt, Ot = /* @__PURE__ */ C({
  name: "Rank",
  __name: "rank",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
      })
    ]));
  }
}), Te = Ot, zt = /* @__PURE__ */ C({
  name: "Refresh",
  __name: "refresh",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), xe = zt, Ut = /* @__PURE__ */ C({
  name: "ScaleToOriginal",
  __name: "scale-to-original",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512"
      })
    ]));
  }
}), Ft = Ut, Mt = /* @__PURE__ */ C({
  name: "Search",
  __name: "search",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), Vt = Mt, Bt = /* @__PURE__ */ C({
  name: "Setting",
  __name: "setting",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"
      })
    ]));
  }
}), Ht = Bt, Dt = /* @__PURE__ */ C({
  name: "Sunny",
  __name: "sunny",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32M195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248M64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32m768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32M195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0"
      })
    ]));
  }
}), Nt = Dt, Pt = /* @__PURE__ */ C({
  name: "Switch",
  __name: "switch",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32"
      })
    ]));
  }
}), jt = Pt, Kt = /* @__PURE__ */ C({
  name: "Tickets",
  __name: "tickets",
  setup(n) {
    return (t, e) => (b(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M192 128v768h640V128zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h192v64H320zm0 384h384v64H320z"
      })
    ]));
  }
}), Gt = Kt;
const Wt = /* @__PURE__ */ C({
  __name: "LayoutMenu",
  props: {
    menus: {},
    active: {}
  },
  emits: ["click"],
  setup(n, {
    emit: t
  }) {
    const e = n, o = t, l = z(() => e.menus || []), a = q({
      collapse: !1
    }), c = /* @__PURE__ */ C({
      props: ["item"],
      setup(r) {
        const d = r.item || {}, f = d.subset || [];
        return () => {
          const h = d.icon && typeof d.icon == "string" ? A(d.icon) : d.icon, m = [h ? s(P, null, {
            default: () => [s(h, null, null)]
          }) : null, s("span", null, [d.title || d.name])];
          return f.length ? s(Ne, {
            index: d.name + ""
          }, {
            default() {
              return f.map((p) => s(c, {
                item: p
              }, null));
            },
            title() {
              return m;
            }
          }) : s(Pe, {
            index: d.name + "",
            onClick: (p) => g(d, p)
          }, {
            default() {
              return m;
            }
          });
        };
      }
    });
    function g(r, d) {
      o("click", {
        sourceItem: r,
        instanceItem: d
      });
    }
    return (r, d) => {
      const f = A("ElMenu"), h = A("ElScrollbar"), m = A("el-button");
      return b(), T("div", {
        class: G(["uni-layout-menu", {
          "uni-layout-menu-active": a.collapse
        }])
      }, [s(h, null, {
        default: _(() => [s(f, {
          "default-active": r.active,
          collapse: a.collapse
        }, {
          default: _(() => [(b(!0), T(le, null, oe(l.value, (p) => (b(), H(u(c), {
            key: p.name,
            item: p
          }, null, 8, ["item"]))), 128))]),
          _: 1
        }, 8, ["default-active", "collapse"])]),
        _: 1
      }), s(m, {
        class: "uni-layout-collapse",
        icon: u(Tt),
        onClick: d[0] || (d[0] = (p) => a.collapse = !a.collapse)
      }, null, 8, ["icon"])], 2);
    };
  }
}), Jt = {
  class: "uni-layout-tags"
}, qt = {
  class: "uni-layout-tags-ul"
}, Qt = ["onClick"], Xt = /* @__PURE__ */ C({
  __name: "LayoutTags",
  props: {
    active: {},
    tags: {}
  },
  emits: ["click"],
  setup(n, {
    emit: t
  }) {
    const e = n, o = t, l = z(() => e.tags || []);
    function a(g, r) {
      const d = [...e.tags || []];
      let f = [...e.tags || []];
      if (r === "close" || r === "closeCurrent")
        f = f.filter((p) => p.name !== g.name);
      else if (r === "closeOther")
        f = [g];
      else if (r === "closeLeft") {
        const p = f.findIndex((y) => y.name === g.name);
        f = f.slice(p);
      } else if (r === "closeRight") {
        const p = f.findIndex((y) => y.name === g.name);
        f = f.slice(0, p + 1);
      }
      const h = f.find((p) => p.name === e.active);
      let m;
      r === "cickCurrent" ? m = g : f && f.length !== d.length && (h || (f.length ? m = f[0] : m = "/")), o("click", {
        sourceItem: g,
        toItem: m,
        type: r,
        currentItem: h,
        tags: f
      });
    }
    function c() {
      document.body.click();
    }
    return (g, r) => {
      const d = A("el-icon"), f = A("el-dropdown-item"), h = A("el-dropdown-menu"), m = A("el-dropdown"), p = A("ElScrollbar");
      return b(), T("div", Jt, [s(p, null, {
        default: _(() => [I("div", qt, [(b(!0), T(le, null, oe(l.value, (y, k) => (b(), H(m, {
          key: y.name,
          trigger: "contextmenu",
          onVisibleChange: c
        }, {
          dropdown: _(() => [s(h, null, {
            default: _(() => [s(f, {
              icon: u(xe),
              onClick: (w) => a(y, "refresh"),
              disabled: y.name !== g.active
            }, {
              default: _(() => [M("刷新")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), s(f, {
              icon: u(Se),
              onClick: (w) => a(y, "fullpage"),
              disabled: y.name !== g.active
            }, {
              default: _(() => [M("最大化")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), s(f, {
              icon: u(Te),
              onClick: (w) => a(y, "fullscreen"),
              disabled: y.name !== g.active
            }, {
              default: _(() => [M("全屏")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), s(f, {
              icon: u(pe),
              onClick: (w) => a(y, "closeCurrent")
            }, {
              default: _(() => [M("关闭当前")]),
              _: 2
            }, 1032, ["icon", "onClick"]), s(f, {
              icon: u(wt),
              onClick: (w) => a(y, "closeLeft"),
              disabled: !(k > 0)
            }, {
              default: _(() => [M("关闭左边")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), s(f, {
              icon: u(Ct),
              onClick: (w) => a(y, "closeRight"),
              disabled: !(k < l.value.length - 1)
            }, {
              default: _(() => [M("关闭右边")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), s(f, {
              icon: u(jt),
              onClick: (w) => a(y, "closeOther"),
              disabled: !(l.value.length > 1)
            }, {
              default: _(() => [M("关闭其他")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"])]),
            _: 2
          }, 1024)]),
          default: _(() => [I("div", {
            class: G(["uni-layout-tags-item", {
              "uni-layout-tags-active": y.name === g.active
            }])
          }, [I("div", {
            class: "uni-layout-tags-btn",
            onClick: (w) => a(y, "cickCurrent")
          }, fe(y.title || y.name), 9, Qt), s(d, {
            class: "uni-layout-tags-close",
            onClick: (w) => a(y, "close")
          }, {
            default: _(() => [s(u(pe))]),
            _: 2
          }, 1032, ["onClick"])], 2)]),
          _: 2
        }, 1024))), 128))])]),
        _: 1
      })]);
    };
  }
});
function Fn(n = 3e3) {
  return new Promise((t) => {
    setTimeout(() => {
      t(0);
    }, n);
  });
}
async function he(n, t) {
  var l, a;
  const e = t instanceof HTMLElement ? t : document.documentElement;
  if (typeof n == "boolean" ? n : !document.fullscreenElement)
    return document.fullscreenElement && e === document.fullscreenElement || (l = e.requestFullscreen) == null ? void 0 : l.call(e);
  if (e === document.fullscreenElement)
    return (a = document.exitFullscreen) == null ? void 0 : a.call(document);
}
async function Mn(n) {
  const t = typeof n == "string" ? n : JSON.stringify(n);
  return t ? navigator.clipboard.writeText(t) : Promise.reject();
}
function ve(n) {
  return n !== null && typeof n == "object" ? JSON.parse(JSON.stringify(n)) : n;
}
function Vn(n, t) {
  const e = window.URL.createObjectURL(n), o = document.createElement("a");
  o.style.display = "none", o.href = e, t && o.setAttribute("download", t), document.body.appendChild(o), o.click(), URL.revokeObjectURL(o.href), document.body.removeChild(o);
}
function Bn(n, t = ",") {
  return (n + "").replace(/\B(?=(\d{3})+(?!\d))/g, t);
}
function Yt(n, t = !1) {
  return n.split("-").map((e, o) => !t && o === 0 ? e : e.length > 0 ? e[0].toUpperCase() + e.slice(1) : e).join("");
}
function Le(n, t = !1) {
  const e = {};
  for (let o in n)
    e[Yt(o, t)] = n[o];
  return e;
}
function Hn() {
  return Le(te() || {});
}
function Zt(n, t) {
  return Math.floor(Math.random() * (t - n + 1) + n);
}
function Dn(n) {
  if (typeof n == "number") {
    const t = n + "";
    return t === "NaN" ? t : t === "Infinity" || t === "-Infinity" ? "Infinity" : "number";
  }
  return Object.prototype.toString.call(n).slice(8, -1).toLocaleLowerCase();
}
function ge(n = location.href) {
  return (n.match(new RegExp("(?<=\\?)[^#?]+", "g")) || []).join("&").split("&").map((e) => e.split("=").map((o) => o.trim()));
}
function Nn(n = location.href) {
  return ge(n).reduce(
    (t, e) => (t[e[0]] = e[1], t),
    {}
  );
}
function Pn(n = location.href) {
  return ge(n).reduce(
    (t, e) => (t[e[0]] ? t[e[0]].push(e[1]) : t[e[0]] = [e[1]], t),
    {}
  );
}
function jn(n = location.href) {
  return ge(n).reduce(
    (t, e) => {
      const o = t[e[0]], l = e[1];
      return typeof o == "string" ? t[e[0]] = [o, l] : Array.isArray(o) ? o.push(l) : t[e[0]] = l, t;
    },
    {}
  );
}
function Ie(n) {
  return n = n.replace("#", ""), [n.slice(0, 2), n.slice(2, 4), n.slice(4, 6)].map((e) => parseInt(e, 16) || 0);
}
function $e(n, t, e) {
  return "#" + [n.toString(16), t.toString(16), e.toString(16)].map((l) => l.padStart(2, "0")).join("");
}
function en(n, t) {
  const e = Ie(n).map((o) => Math.floor(o * (1 - t)));
  return $e(...e);
}
function tn(n, t) {
  const e = Ie(n).map((o) => Math.floor((255 - o) * t + o));
  return $e(...e);
}
function nn(n) {
  const t = `--el-color-primary: ${n}`, e = new Array(9).fill("").map((l, a) => {
    const c = a + 1;
    return `--el-color-primary-dark-${c}: ${en(n, c / 10)}`;
  }), o = new Array(9).fill("").map((l, a) => {
    const c = a + 1;
    return `--el-color-primary-light-${c}: ${tn(n, c / 10)}`;
  });
  return [t, ...e, ...o];
}
const _e = [
  ["backInDown", "backOutDown"],
  ["backInLeft", "backOutLeft"],
  ["backInRight", "backOutRight"],
  ["backInUp", "backOutUp"],
  ["bounceIn", "bounceOut"],
  ["bounceInDown", "bounceOutDown"],
  ["bounceInLeft", "bounceOutLeft"],
  ["bounceInRight", "bounceOutRight"],
  ["bounceInUp", "bounceOutUp"],
  ["fadeIn", "fadeOut"],
  ["fadeInDown", "fadeOutDown"],
  ["fadeInDownBig", "fadeOutDownBig"],
  ["fadeInLeft", "fadeOutLeft"],
  ["fadeInLeftBig", "fadeOutLeftBig"],
  ["fadeInRight", "fadeOutRight"],
  ["fadeInRightBig", "fadeOutRightBig"],
  ["fadeInUp", "fadeOutUp"],
  ["fadeInUpBig", "fadeOutUpBig"],
  ["fadeInTopLeft", "fadeOutTopLeft"],
  ["fadeInTopRight", "fadeOutTopRight"],
  ["fadeInBottomLeft", "fadeOutBottomLeft"],
  ["fadeInBottomRight", "fadeOutBottomRight"],
  ["flipInX", "flipOutX"],
  ["flipInY", "flipOutY"],
  ["lightSpeedInRight", "lightSpeedOutRight"],
  ["lightSpeedInLeft", "lightSpeedOutLeft"],
  ["rotateIn", "rotateOut"],
  ["rotateInDownLeft", "rotateOutDownLeft"],
  ["rotateInDownRight", "rotateOutDownRight"],
  ["rotateInUpLeft", "rotateOutUpLeft"],
  ["rotateInUpRight", "rotateOutUpRight"],
  ["rollIn", "rollOut"],
  ["zoomIn", "zoomOut"],
  ["zoomInDown", "zoomOutDown"],
  ["zoomInLeft", "zoomOutLeft"],
  ["zoomInRight", "zoomOutRight"],
  ["zoomInUp", "zoomOutUp"],
  ["slideInDown", "slideOutDown"],
  ["slideInLeft", "slideOutLeft"],
  ["slideInRight", "slideOutRight"],
  ["slideInUp", "slideOutUp"]
];
function Kn(n = "", t) {
  const e = t || _e[Zt(0, _e.length - 1)];
  return {
    appearClass: `${n || ""} animate__animated animate__${e[0]}`,
    enterClass: `${n || ""} animate__animated animate__${e[0]}`,
    leaveClass: `${n || ""} animate__animated animate__${e[1]}`
  };
}
function Gn(n) {
  const { isMarkRaw: t = !0, localPaging: e = !1, syncServer: o = !0 } = n, l = { ...n.tableData || {} };
  let a;
  const c = q(g());
  function g() {
    return {
      total: 0,
      current: 1,
      rows: f([]),
      size: 10,
      loading: !1,
      ...l
    };
  }
  async function r() {
    return e && !o && a ? d(ve(a)) : (c.loading = !0, n.api(c).then((y) => (e && !o && (a = ve(y)), d(y))).finally(() => {
      c.loading = !1;
    }));
  }
  function d(y) {
    let k = y.rows || [], w = y.total > 0 ? y.total : 0;
    if (e && (w = k.length, w > c.size)) {
      const x = (c.current - 1) * c.size, R = x + c.size;
      k = k.slice(x, R);
    }
    return c.rows = f(k), c.total = w, c;
  }
  function f(y) {
    return t !== !1 ? re(y) : y;
  }
  function h(y) {
    return c.current = y, r();
  }
  function m(y) {
    return c.current = 1, c.size = y, r();
  }
  function p() {
    Object.assign(c, g());
  }
  return { tableData: c, onSearch: r, onCurrentChange: h, onSizeChange: m, reset: p };
}
function Wn(n, t) {
  const e = q({
    loading: !1,
    show: !1,
    type: "",
    readonly: !1
  }), o = q({}), l = X(), a = (t == null ? void 0 : t.hash) || {
    add: "新增",
    edit: "编辑",
    show: "查看"
  };
  c();
  function c(m = l.value) {
    const p = n(m), y = { ...o, ...p };
    for (let k in y)
      o[k] = p[k];
  }
  function g(m = e.type) {
    return a[m];
  }
  function r() {
  }
  function d(m) {
    l.value = m, c(), e.readonly = !0, e.type = "show", e.show = !0;
  }
  function f(m) {
    l.value = m, c(), e.readonly = !1, e.type = "edit", e.show = !0;
  }
  function h(m) {
    l.value = m, c(), e.readonly = !1, e.type = "add", e.show = !0;
  }
  return { state: e, model: o, onSubmit: r, onShow: d, onEdit: f, onAdd: h, modifyRow: l, getTypeText: g };
}
function Ee() {
  const n = q({
    fullpage: !1,
    fullscreen: !1
  }), t = c();
  Ae(() => {
    t();
  });
  async function e(r) {
    const d = typeof r == "boolean" ? r : !0;
    n.fullpage = d, n.fullscreen && (n.fullscreen = !1, await he(!1));
  }
  async function o(r) {
    const d = typeof r == "boolean" ? r : !0;
    n.fullpage = !1, n.fullscreen = d, await he(d);
  }
  function l() {
    document.addEventListener("keydown", r);
    function r(d) {
      d.key === "Escape" && (n.fullpage = !1);
    }
    return () => {
      document.removeEventListener("keydown", r);
    };
  }
  function a() {
    document.addEventListener("fullscreenchange", r);
    function r() {
      !g() && n.fullscreen && (n.fullscreen = !1);
    }
    return () => {
      document.removeEventListener("fullscreenchange", r);
    };
  }
  function c() {
    const r = [l(), a()];
    return () => {
      r.forEach((d) => d());
    };
  }
  function g() {
    return document.fullscreenElement === document.documentElement;
  }
  return { state: n, onFullpage: e, onFullscreen: o };
}
const ee = {
  // 全局缓存key值，不污染全局
  uniStorageKey: "$UNI_STORAGE$",
  // uni table的缓存前缀
  uniTableStateKeyPre: "$UNI_TABLE_STATE$_",
  uniTableColumnsKeyPre: "$UNI_TABLE_COLUMNS$_",
  // 全局缓存key
  uniGlobalStateKey: "$UNI_GLOBAL_STORAGE$"
};
function ne(n, t, e) {
  if (typeof Storage < "u") {
    const o = e === !0 ? sessionStorage : localStorage;
    if (t == null) {
      let l = o.getItem(n);
      return l && l.startsWith("obj-") ? (l = l.slice(4), JSON.parse(l)) : l;
    } else {
      let l = t + "";
      return t instanceof Object && (l = "obj-" + JSON.stringify(t)), o.setItem(n, l), t;
    }
  }
}
function Z(n, t) {
  typeof Storage < "u" && n && (t === !0 ? sessionStorage : localStorage).removeItem(n);
}
function Jn(n) {
  typeof Storage < "u" && (n === !0 ? sessionStorage : localStorage).clear();
}
function ln(n, t = 7 * 24 * 60 * 60 * 1e3) {
  if (typeof Storage < "u") {
    if (!(t > 0)) {
      Z(n, !0), Z(n, !1);
      return;
    }
    e(ne(n, null, !0) || {}, !0), e(ne(n, null, !1) || {}, !1);
  }
  function e(o, l) {
    const a = Date.now();
    for (let c in o) {
      const g = o[c];
      (!(a - (g == null ? void 0 : g.tt) < t) || (g == null ? void 0 : g.val) === void 0 || (g == null ? void 0 : g.val) === null) && (o[c] = void 0);
    }
    return Object.keys(o).some((c) => o[c] !== void 0) ? ne(n, o, l) : Z(n, l), o;
  }
}
function ie(n, t, e) {
  var o;
  if (typeof Storage < "u") {
    const l = S.uniUserStorageKeyPre + ee.uniStorageKey;
    ln(l);
    const a = ne(l, null, e) || {};
    return t == null && (t = (o = a[n]) == null ? void 0 : o.val), a[n] = t === void 0 ? void 0 : { val: t, tt: Date.now() }, Object.keys(a).some((c) => a[c] !== void 0) ? ne(l, a, e) : Z(l, e), t;
  }
}
function Re(n) {
  return (t, e, o) => {
    if (!t) {
      console.warn("创建独立存储集合，请添加前缀key");
      return;
    }
    t = n + t;
    let l = ie(t, null, o) || {};
    return e != null && (l = { ...l, ...e }, ie(t, l, o)), l;
  };
}
function on(n) {
  return (t, e) => {
    let o = ie(n, null, e) || {};
    return t != null && (o = { ...o, ...t }, ie(n, o, e)), o;
  };
}
const S = q({
  uniUserStorageKeyPre: "",
  maxTags: 10,
  showTags: !0,
  routeTags: re([]),
  uniTable: { stripe: !1, size: "default", filterForm: !0 },
  uniForm: { size: "default" }
}), ye = on(ee.uniGlobalStateKey);
function qn(n) {
  const t = typeof n.name == "string" ? n.name : "";
  if (S.routeTags.some((a) => a.name === t))
    return;
  const e = S.maxTags;
  let o = [...S.routeTags || []];
  if (o.length >= e) {
    const a = Math.min(...o.map((c) => c.tt));
    o = o.filter((c) => c.tt !== a);
  }
  const l = n.meta || {};
  o.push({
    name: t,
    // 唯一值
    tt: Date.now(),
    title: l.title,
    query: n.query,
    params: n.params
  }), S.routeTags = re(o);
}
function Qn(n) {
  const t = (Array.isArray(n) ? n : [n]).map((e) => e.name);
  S.routeTags = re(S.routeTags.filter((e) => !t.includes(e.name)));
}
an();
function an() {
  t(), n();
  function n() {
    Object.assign(S, ye());
  }
  function t() {
    j(S, (e) => {
      ye(e);
    }), j(
      () => S.primary,
      (e) => {
        sn(e);
      }
    ), j(
      () => S.dark,
      (e) => {
        rn(e);
      }
    );
  }
}
function rn(n) {
  const t = document;
  t.startViewTransition ? t.startViewTransition(() => {
    be(n);
  }) : be(n);
}
function be(n) {
  const t = "dark", e = document.documentElement;
  (typeof n == "boolean" ? n : !e.classList.contains(t)) ? e.classList.add(t) : e.classList.remove(t);
}
function sn(n = "") {
  const t = "dark", e = "uni_primary_var_css";
  if (!n) {
    document.documentElement.classList.remove(e);
    return;
  }
  const o = "uni_primary_var_css_style";
  let l = document.querySelector("." + o);
  l || (l = document.createElement("style"), l.classList.add(o), document.head.appendChild(l));
  const a = nn(n);
  l.innerHTML = `.${e},html.${e},.${e}.${t}{${a.join(";")}}`, document.documentElement.classList.add(e);
}
const un = {
  ref: "closeFullpageHandRef",
  class: "uni-layout-close-move"
}, cn = /* @__PURE__ */ C({
  __name: "LayoutIndex",
  props: {
    menus: {},
    menuActive: {},
    tagActive: {}
  },
  emits: ["menuItemClick", "tagItemClick"],
  setup(n, { emit: t }) {
    const e = t, o = X(), l = z(() => S.routeTags), a = z(() => !0);
    je(o, o, a);
    const c = q({
      forceFlush: !0
    }), g = Ee();
    function r(f) {
      e("menuItemClick", f);
    }
    function d(f) {
      const { type: h, tags: m } = f;
      h === "refresh" ? (c.forceFlush = !1, Promise.resolve().then(() => {
        c.forceFlush = !0;
      })) : h === "fullpage" ? g.onFullpage() : h === "fullscreen" && g.onFullscreen(), m && m.length !== S.routeTags.length && (S.routeTags = re([...m])), e("tagItemClick", f);
    }
    return (f, h) => {
      const m = A("el-header"), p = A("el-aside"), y = A("ElDivider"), k = A("el-main"), w = A("el-container"), x = A("el-icon");
      return b(), H(w, {
        class: G(["uni-layout-index", { "uni-layout-main-fullpage": u(g).state.fullpage || u(g).state.fullscreen }])
      }, {
        default: _(() => [
          s(m, { class: "uni-layout-index-header" }, {
            default: _(() => [
              s(_t, null, {
                logo: _(() => [
                  J(f.$slots, "header_logo", {}, void 0, !0)
                ]),
                left: _(() => [
                  J(f.$slots, "header_left", {}, void 0, !0)
                ]),
                right: _(() => [
                  J(f.$slots, "header_right", {}, void 0, !0)
                ]),
                _: 3
              })
            ]),
            _: 3
          }),
          s(w, { class: "uni-layout-index-container" }, {
            default: _(() => [
              f.menus && f.menus.length ? (b(), H(p, {
                key: 0,
                class: "uni-layout-index-aside"
              }, {
                default: _(() => [
                  s(Wt, {
                    active: f.menuActive,
                    menus: f.menus,
                    onClick: r
                  }, null, 8, ["active", "menus"])
                ]),
                _: 1
              })) : W("", !0),
              s(w, null, {
                default: _(() => [
                  u(S).showTags && (l.value && l.value.length) ? (b(), H(m, {
                    key: 0,
                    class: "uni-layout-index-tags"
                  }, {
                    default: _(() => [
                      s(Xt, {
                        active: f.tagActive,
                        tags: l.value,
                        onClick: d
                      }, null, 8, ["active", "tags"]),
                      s(y, { style: { padding: "0", margin: "0" } })
                    ]),
                    _: 1
                  })) : W("", !0),
                  c.forceFlush ? (b(), H(k, {
                    key: 1,
                    class: "uni-layout-index-main"
                  }, {
                    default: _(() => [
                      J(f.$slots, "default", {}, void 0, !0)
                    ]),
                    _: 3
                  })) : W("", !0)
                ]),
                _: 3
              })
            ]),
            _: 3
          }),
          u(g).state.fullpage ? (b(), T("div", {
            key: 0,
            ref_key: "closeFullpageRef",
            ref: o,
            class: "uni-layout-close-fullpage"
          }, [
            I("div", un, null, 512),
            s(x, {
              class: "uni-layout-close-icon",
              onClick: h[0] || (h[0] = (R) => u(g).onFullpage(!1))
            }, {
              default: _(() => [
                s(u(pe))
              ]),
              _: 1
            })
          ], 512)) : W("", !0)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}), fn = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [o, l] of t)
    e[o] = l;
  return e;
}, Xn = /* @__PURE__ */ fn(cn, [["__scopeId", "data-v-3309df96"]]), Yn = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "UniForm",
  props: {
    items: {},
    formStyle: {},
    itemMinWidth: {},
    formRef: {
      type: Function
    },
    onSubmit: {
      type: Function
    },
    onReset: {
      type: Function
    }
  },
  setup(n, {
    expose: t
  }) {
    const e = X(), o = X(), l = n, a = te(), c = q({});
    let g;
    const r = X(!1), d = Y(), f = z(k), h = /* @__PURE__ */ C({
      render() {
        return s(Ke, f.value, {
          ...d,
          default: y
        });
      }
    });
    j(() => a.model, () => {
      g = JSON.parse(JSON.stringify(m()));
    }, {
      immediate: !0
    });
    function m() {
      return a.model || c;
    }
    function p() {
      const i = m(), v = g || {}, L = {
        ...v,
        ...i
      };
      for (let V in L)
        i[V] = v[V];
    }
    function y() {
      var v;
      const i = l.items || [];
      return i.length ? i.map((L) => s(w, {
        item: L
      }, null)) : (v = d.default) == null ? void 0 : v.call(d, ...arguments);
    }
    function k() {
      return {
        ...S.uniForm,
        labelWidth: "120px",
        ...a || {},
        style: {
          gridTemplateColumns: `repeat(auto-fill, minmax(${l.itemMinWidth || "240px"}, 1fr))`,
          ...l.formStyle || {}
        },
        model: m(),
        ref(i) {
          var v;
          (v = l.formRef) == null || v.call(l, i), o.value = i;
        }
      };
    }
    const w = /* @__PURE__ */ C({
      props: ["item"],
      render() {
        const i = this.$props.item, v = "hidden" in i && r.value ? !i.hidden : i.hidden;
        if (!(i && !v))
          return null;
        const L = {
          prop: i.key,
          ...i,
          component: void 0
        }, O = i.key + "_", E = Object.keys(d).filter((D) => D.startsWith(O)).reduce((D, B) => (D[B.slice(O.length)] = d[B], D), {});
        return s(Ge, L, {
          ...E,
          ...i.slots || {},
          default: x(i)
        });
      }
    });
    function x(i) {
      if (i.key === "btns")
        return d[i.key] ? d[i.key] : U;
      let v = (i.prop || i.key) + "";
      function L(V, O) {
        const E = V.type || {}, B = ((E.name || E.__name || "") + "").toLocaleLowerCase().includes("select") ? "请选择" : "请输入", N = m();
        return Oe(V, {
          clearable: !0,
          placeholder: i.label ? `${B}${i.label}` : void 0,
          modelValue: F(N, O),
          "onUpdate:modelValue"(se) {
            F(N, O, se);
          },
          ...V.props || {}
        });
      }
      return (...V) => {
        var D;
        const O = ((D = i.slots) == null ? void 0 : D.default) || d[i.key] || i.component;
        let E = typeof O == "function" ? O(...V) : O;
        return E === void 0 && (E = s(We, null, null)), Array.isArray(E) && E.length === 1 && (E = E[0]), de(E) ? E = L(E, R(E) || v) : Array.isArray(E) && (E = E.map((B) => {
          const N = de(B) && R(B);
          return N && typeof N == "string" ? L(B, N) : B;
        })), E;
      };
    }
    function R(i) {
      const L = Le(i.props || {}).dataProp;
      return L ? L + "" : "";
    }
    function F(i, v, L) {
      if (!(v && typeof v == "string" && i))
        return;
      const V = arguments.length;
      return v.split(".").reduce((E, D, B, N) => (E = E && typeof E == "object" ? E : {}, V === 3 && B === N.length - 1 && (E[D] = L), E = E[D], E), i);
    }
    function U() {
      const i = l.items || [], v = s(ue, {
        type: "primary",
        onClick: () => {
          var O;
          return (O = l.onSubmit) == null ? void 0 : O.call(l, m());
        }
      }, {
        default: () => [M("搜索")]
      }), L = s(ue, {
        onClick: () => {
          var O;
          p(), (O = l.onReset) == null || O.call(l, m());
        }
      }, {
        default: () => [M("重置")]
      }), V = i.some((O) => "hidden" in O) ? s(ue, {
        type: "primary",
        link: !0,
        onClick: () => {
          $();
        }
      }, {
        default: () => [r.value ? "收起" : "展开"]
      }) : null;
      return [v, L, V];
    }
    function $(i) {
      r.value = typeof i == "boolean" ? i : !r.value;
    }
    return t({
      switchHidden: $,
      get validate() {
        var i;
        return (i = o.value) == null ? void 0 : i.validate;
      },
      resetFormModel: p,
      formExpose(i) {
        var v;
        return (v = o.value) == null ? void 0 : v[i];
      },
      get formRef() {
        return o.value;
      },
      get $el() {
        return e.value;
      }
    }), (i, v) => (b(), T("div", {
      class: "uni-form",
      ref_key: "uniFormRef",
      ref: e
    }, [s(u(h))], 512));
  }
}), we = Re(ee.uniTableColumnsKeyPre), ke = Re(ee.uniTableStateKeyPre);
function dn(n, t) {
  let e;
  j(
    () => ({ loading: n.tableApi.tableData.loading, el: t.value }),
    ({ loading: o, el: l }) => {
      l && (o ? e = Je.service({
        target: l
      }) : e == null || e.close());
    }
  );
}
function pn(n) {
  const t = Y(), e = [], o = z(() => n.columns || g()), l = JSON.stringify(p(o.value)), a = ae(h(m(o.value)));
  j(
    () => o.value,
    () => {
      c();
    }
  ), j(
    () => {
      if (n.cacheKey) {
        const k = p(a.value);
        if (k)
          return JSON.stringify(k);
      }
    },
    (k) => {
      const w = n.cacheKey || "";
      w && k && k !== l && we(w, { columns: JSON.parse(k), columnsStr: l });
    }
  );
  function c(k = o.value) {
    a.value = h(k);
  }
  function g() {
    var x;
    return (((x = t.default) == null ? void 0 : x.call(t)) || []).filter((R) => d(R)).map((R) => r(R));
  }
  function r(k) {
    const w = k.children, x = { key: k.key, ...k.props || {}, subset: [] };
    if (w && typeof w.default == "function") {
      const R = w.default({
        row: {},
        column: {},
        $index: -1
      });
      Array.isArray(R) && (x.subset = R.filter((F) => d(F)).map((F) => r(F)));
    }
    return x.slots = { ...w || {} }, x;
  }
  function d(k) {
    return de(k) && k.type && k.type.name === "ElTableColumn";
  }
  function f(k) {
    k = k.filter(($) => $.hidden !== !0);
    const w = [], x = [], R = [];
    k.forEach(($) => {
      $.fixed === !0 && ($.fixed = "left"), $.fixed === "left" ? w.push($) : $.fixed === "right" ? x.push($) : R.push($);
    });
    const F = [...w, ...R, ...x];
    function U($) {
      const i = { ...$.slots || {} }, v = $.subset && $.subset.length ? $.subset : [];
      return v.length && (i.default = () => v.map((L) => U(L))), K(qe, $, i);
    }
    return F.map(($) => U($));
  }
  function h(k) {
    return e.length = 0, k.map((w) => {
      const x = w.key || w.id || w.prop;
      x && !e.includes(x) ? e.push(x) : console.warn(`请保证 key(${x}) 必须存在且是不重复的字符串，否则排序将会出错，依次可以将key，id，prop三种属性识别为key`, w);
      const R = x + "_", F = Object.keys(t).filter(($) => $.startsWith(R)).reduce(
        ($, i) => ($[i.slice(R.length)] = t[i], $),
        {}
      );
      return {
        label: x,
        prop: x,
        ...w,
        key: x,
        subset: w.subset && h(w.subset),
        slots: {
          ...F,
          default: t[x] || F.defalut || w.component,
          ...w.slots || {}
        }
      };
    });
  }
  function m(k) {
    const w = n.cacheKey || "", x = w && we(w);
    let R = !0;
    function F(U, $) {
      return $.map((i) => {
        const v = U.find((L) => i.key && L.key === i.key);
        if (v)
          return { ...v, ...i, subset: v.subset && i.subset ? F(v.subset, i.subset) : void 0 };
        R = !1;
      }).filter(Boolean);
    }
    if (x && x.columnsStr === l && x.columns) {
      const U = F(k, x.columns);
      if (R)
        return U;
    }
    return k;
  }
  function p(k) {
    let w = !0;
    function x(F) {
      return F.map((U) => {
        const $ = U.key || "";
        if ($)
          return { key: $, label: U.label, fixed: U.fixed, hidden: U.hidden, width: U.width, subset: U.subset ? x(U.subset) : void 0 };
        w = !1;
      }).filter(Boolean);
    }
    const R = x(k);
    if (w)
      return R;
  }
  const y = z(() => f(a.value));
  return { columns: a, components: y, sourceColumns: o, resetColumns: c };
}
function _n(n, t) {
  const e = n.cacheKey || "", o = e && ke(e) || {}, l = "stripe" in t && t.stripe !== !1 ? !0 : S.uniTable.stripe, a = q({
    stripe: l,
    headerSticky: !1,
    size: t.size || S.uniTable.size,
    filterForm: S.uniTable.filterForm,
    ...o
  });
  return j(
    () => ({ ...S.uniTable }),
    (c) => {
      Object.assign(a, c);
    }
  ), j(
    () => e && { ...a },
    (c) => {
      e && c && ke(e, c);
    }
  ), a;
}
const mn = { class: "uni-table-bar" }, gn = { class: "uni-table-bar-items uni-table-bar-left" }, hn = { class: "uni-table-bar-items uni-table-bar-right" }, vn = /* @__PURE__ */ C({
  __name: "UniTableBar",
  props: {
    items: {},
    slots: {}
  },
  emits: ["btns-click"],
  setup(n, { emit: t }) {
    const e = t, o = Y(), l = n, a = z(() => (l.items || []).filter((h) => h.position !== "right")), c = z(() => (l.items || []).filter((h) => h.position === "right")), g = z(() => ({ ...o, ...l.slots || {} }));
    function r(f) {
      e("btns-click", f);
    }
    const d = C({
      props: ["item"],
      render() {
        var h, m, p;
        const f = this.item;
        return K(
          "div",
          {
            class: "uni-table-bar-item",
            onClick() {
              r(f);
            }
          },
          ((m = (h = g.value)[f.key]) == null ? void 0 : m.call(h, { item: f })) || ((p = f.render) == null ? void 0 : p.call(f, { item: f })) || null
        );
      }
    });
    return (f, h) => (b(), T("div", mn, [
      I("div", gn, [
        (b(!0), T(le, null, oe(a.value, (m) => (b(), H(u(d), {
          key: m.key,
          item: m
        }, null, 8, ["item"]))), 128))
      ]),
      I("div", hn, [
        (b(!0), T(le, null, oe(c.value, (m) => (b(), H(u(d), {
          key: m.key,
          item: m
        }, null, 8, ["item"]))), 128))
      ])
    ]));
  }
}), yn = { class: "uni-table-column-setting-li" }, bn = { class: "uni-table-column-setting-move" }, wn = ["placeholder", "onChange"], kn = { class: "uni-table-column-setting-label" }, Cn = {
  key: 0,
  class: "uni-table-column-setting-position"
}, Sn = /* @__PURE__ */ C({
  name: "UniTableMenu",
  __name: "UniTableMenu",
  props: {
    columns: {},
    parentColumn: {}
  },
  setup(n) {
    const t = n, e = ae();
    let o;
    j(
      () => e.value,
      (r) => {
        g(), r instanceof HTMLElement && (o = new ut(r, {
          handle: ".uni-table-column-setting-move",
          onEnd(d) {
            const f = t.columns, h = d.newIndex || 0, m = d.oldIndex || 0;
            Array.isArray(f) && (h > 0 || m > 0) && f.splice(h, 0, f.splice(m, 1)[0]);
          }
        }));
      }
    ), ze(() => {
      g();
    });
    function l(r, d) {
      r && (r.fixed = r.fixed === d ? void 0 : d);
    }
    function a(r) {
      r.hidden = !r.hidden;
    }
    function c(r, d) {
      const f = r.target;
      if (f instanceof HTMLInputElement) {
        let h = +f.value;
        h = h < 0 ? 0 : h >= t.columns.length ? t.columns.length - 1 : h;
        const m = t.columns;
        m.splice(h, 0, m.splice(d, 1)[0]), f.value = "";
      }
    }
    function g() {
      o && (o.destroy(), o = void 0);
    }
    return (r, d) => {
      const f = A("UniTableMenu", !0);
      return b(), T("div", {
        class: "uni-table-column-setting",
        ref_key: "UniTableColumnSettingRef",
        ref: e
      }, [
        (b(!0), T(le, null, oe(r.columns, (h, m) => (b(), T("div", {
          class: "uni-table-column-setting-item",
          key: h.key
        }, [
          I("div", yn, [
            s(u(me), {
              modelValue: !h.hidden,
              onChange: () => a(h)
            }, null, 8, ["modelValue", "onChange"]),
            I("div", bn, [
              s(u(P), null, {
                default: _(() => [
                  s(u(Te))
                ]),
                _: 1
              })
            ]),
            I("input", {
              class: "uni-table-column-setting-ipt",
              placeholder: m + "",
              onChange: (p) => c(p, m)
            }, null, 40, wn),
            I("div", kn, fe(h.key) + " - " + fe(h.label), 1),
            r.parentColumn ? W("", !0) : (b(), T("div", Cn, [
              s(u(P), {
                class: G({ "uni-table-column-setting-fixed-active": h.fixed === "left" }),
                onClick: (p) => l(h, "left")
              }, {
                default: _(() => [
                  s(u(gt))
                ]),
                _: 2
              }, 1032, ["class", "onClick"]),
              s(u(P), {
                class: G({ "uni-table-column-setting-fixed-active": h.fixed === "right" }),
                onClick: (p) => l(h, "right")
              }, {
                default: _(() => [
                  s(u(vt))
                ]),
                _: 2
              }, 1032, ["class", "onClick"])
            ]))
          ]),
          h.hidden !== !0 && h.subset && h.subset.length ? (b(), H(f, {
            key: 0,
            columns: h.subset,
            parentColumn: h
          }, null, 8, ["columns", "parentColumn"])) : W("", !0)
        ]))), 128))
      ], 512);
    };
  }
}), Tn = { class: "uni-table-setting" }, xn = { class: "uni-table-setting-popover-title" }, Ln = /* @__PURE__ */ C({
  __name: "UniTableSetting",
  setup(n) {
    const t = Ue("columnsApi"), e = z(() => {
      const g = [], r = [];
      function d(h) {
        h.forEach((m) => {
          m.hidden === !0 ? g.push(m) : (r.push(m), m.subset && m.subset.length && d(m.subset));
        });
      }
      const f = (t == null ? void 0 : t.columns.value) || [];
      return d(f), { unchecked: g, checked: r };
    }), o = z(() => e.value.unchecked.length === 0 && e.value.checked.length > 0), l = z(() => e.value.unchecked.length > 0 && e.value.checked.length > 0);
    function a() {
      t == null || t.resetColumns();
    }
    function c() {
      const g = (t == null ? void 0 : t.columns.value) || [];
      o.value ? g.map((r) => r.hidden = !0) : g.map((r) => r.hidden = !1);
    }
    return (g, r) => (b(), T("div", Tn, [
      s(u(Qe), {
        trigger: "click",
        width: "auto",
        "popper-class": "uni-table-setting-popover"
      }, {
        reference: _(() => [
          I("div", null, [
            s(u(Q), { content: "设置" }, {
              default: _(() => [
                s(u(P), { style: { cursor: "pointer" } }, {
                  default: _(() => [
                    s(u(Ht))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        default: _(() => [
          I("div", xn, [
            s(u(me), {
              "model-value": o.value,
              indeterminate: l.value,
              onChange: c
            }, {
              default: _(() => [
                M(" 选中所有 ")
              ]),
              _: 1
            }, 8, ["model-value", "indeterminate"]),
            s(u(ue), {
              text: "",
              type: "primary",
              onClick: a
            }, {
              default: _(() => [
                M("重置")
              ]),
              _: 1
            })
          ]),
          s(u(Xe), {
            class: "uni-table-setting-popover-content",
            "max-height": "320px"
          }, {
            default: _(() => {
              var d;
              return [
                s(Sn, {
                  columns: ((d = u(t)) == null ? void 0 : d.columns.value) || []
                }, null, 8, ["columns"])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      })
    ]));
  }
}), In = {
  key: 0,
  class: "uni-table-filter-form"
}, $n = { class: "uni-el-table" }, En = {
  key: 2,
  class: "uni-table-pagination"
}, Zn = /* @__PURE__ */ C({
  __name: "UniTable",
  props: {
    tableApi: {},
    columns: {},
    paginationAttrs: {},
    cacheKey: {},
    hiddenBar: { type: Boolean },
    hiddenPagination: { type: Boolean },
    formatBarItems: { type: Function },
    tableRef: { type: Function },
    onBarClick: { type: Function }
  },
  setup(n, { expose: t }) {
    const e = X(), o = X(), l = n, a = te(), c = Y(), g = pn(l), { columns: r, components: d } = g;
    dn(l, e), Fe("columnsApi", g);
    const f = z($), h = z(F), m = z(w), p = _n(l, a), y = Ee(), k = C({
      render() {
        return K(Ye, m.value, { ...c, default: () => d.value });
      }
    });
    t({
      get getSelectionRows() {
        var i;
        return (i = o.value) == null ? void 0 : i.getSelectionRows;
      },
      tableExpose(i) {
        var v;
        return (v = o.value) == null ? void 0 : v[i];
      },
      get tableRef() {
        return o.value;
      },
      get $el() {
        return e.value;
      }
    });
    function w() {
      const { tableData: i } = l.tableApi;
      return {
        ...R(),
        border: !0,
        data: i.rows,
        ...a || {},
        stripe: p.stripe,
        size: p.size,
        onHeaderDragend() {
          x(...arguments);
          const v = l.onHeaderDragend;
          typeof v == "function" && v(...arguments);
        },
        ref(v) {
          var L;
          o.value = v, (L = l.tableRef) == null || L.call(l, v);
        }
      };
    }
    function x(...i) {
      const [v, L, V] = i, { level: O, no: E, rawColumnKey: D } = V || {};
      function B(N, se = 1) {
        if (O === se) {
          if (N[E] && N[E].key === D)
            return N[E].width = v, !0;
        } else
          N.some((ce) => {
            if (ce.subset && ce.subset.length)
              return B(ce.subset, se + 1);
          });
      }
      B(r.value);
    }
    function R() {
      const i = {}, v = "table_";
      let L;
      for (L in S)
        L.startsWith(v) && (i[L.slice(v.length)] = S[L]);
      return i;
    }
    function F() {
      const { tableData: i, onSizeChange: v, onCurrentChange: L } = l.tableApi;
      return {
        currentPage: i.current,
        pageSize: i.size,
        layout: "total, sizes, prev, pager, next, jumper",
        total: i.total,
        onSizeChange: v,
        onCurrentChange: L,
        pageSizes: [10, 20, 50, 100],
        ...l.paginationAttrs || {}
      };
    }
    async function U(i) {
      var v, L;
      i.key === "uni_reload" ? await ((v = l.tableApi) == null ? void 0 : v.onSearch()) : i.key === "uni_density" ? p.size = p.size === "default" ? "large" : p.size === "large" ? "small" : "default" : i.key === "uni_sticky" ? p.headerSticky = !p.headerSticky : i.key === "uni_stripe" ? p.stripe = !p.stripe : i.key === "uni_fullpage" ? y.onFullpage(!y.state.fullpage) : i.key === "uni_filter" ? p.filterForm = !p.filterForm : i.key === "uni_fullscreen" && y.onFullscreen(!y.state.fullscreen), (L = l.onBarClick) == null || L.call(l, i);
    }
    function $() {
      let i = [
        { key: "uni_setting" },
        { key: "uni_stripe" },
        { key: "uni_reload" },
        { key: "uni_density" },
        { key: "uni_fullpage" },
        { key: "uni_fullscreen" }
        // { key: 'uni_sticky' },
      ];
      return c.filter_form && i.push({ key: "uni_filter" }), Object.keys(c).forEach((v) => {
        i.some((L) => L.key === v) || (v.startsWith("bar_left") && i.push({ key: v, position: "left" }), v.startsWith("bar_right") && i.push({ key: v, position: "right" }));
      }), typeof l.formatBarItems == "function" && (i = l.formatBarItems(i)), i;
    }
    return (i, v) => (b(), T("div", {
      class: G(["uni-table", { "uni-table-fullpage": u(y).state.fullpage || u(y).state.fullscreen, "uni-table-header-sticky": u(p).headerSticky }]),
      ref_key: "uniTableRef",
      ref: e
    }, [
      u(c).filter_form && u(p).filterForm ? (b(), T("div", In, [
        J(i.$slots, "filter_form")
      ])) : W("", !0),
      i.hiddenBar ? W("", !0) : (b(), H(vn, {
        key: 1,
        items: f.value,
        onBtnsClick: U,
        slots: u(c)
      }, {
        uni_setting: _(() => [
          s(Ln)
        ]),
        uni_stripe: _(() => [
          s(u(Q), { content: "斑马纹" }, {
            default: _(() => [
              s(u(P), {
                style: { cursor: "pointer" },
                class: G({ "uni-table-color-primary": u(p).stripe })
              }, {
                default: _(() => [
                  s(u(At))
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        uni_reload: _(() => [
          s(u(Q), { content: "刷新" }, {
            default: _(() => [
              s(u(P), { style: { cursor: "pointer" } }, {
                default: _(() => [
                  s(u(xe))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        uni_density: _(() => [
          s(u(Q), {
            content: `密度 - ${u(p).size}`
          }, {
            default: _(() => [
              s(u(P), { style: { cursor: "pointer" } }, {
                default: _(() => [
                  s(u(Ft))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["content"])
        ]),
        uni_fullpage: _(() => [
          s(u(Q), { content: "页内全屏" }, {
            default: _(() => [
              s(u(P), {
                style: { cursor: "pointer" },
                class: G({ "uni-table-color-primary": u(y).state.fullpage })
              }, {
                default: _(() => [
                  s(u(It))
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        uni_fullscreen: _(() => [
          s(u(Q), { content: "全屏" }, {
            default: _(() => [
              s(u(P), {
                style: { cursor: "pointer" },
                class: G({ "uni-table-color-primary": u(y).state.fullscreen })
              }, {
                default: _(() => [
                  s(u(Se))
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        uni_sticky: _(() => [
          s(u(Q), { content: "悬浮" }, {
            default: _(() => [
              s(u(P), {
                style: { cursor: "pointer" },
                class: G({ "uni-table-color-primary": u(p).headerSticky })
              }, {
                default: _(() => [
                  s(u(Gt))
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        uni_filter: _(() => [
          s(u(Q), { content: "过滤" }, {
            default: _(() => [
              s(u(P), {
                style: { cursor: "pointer" },
                class: G({ "uni-table-color-primary": u(p).filterForm })
              }, {
                default: _(() => [
                  s(u(Vt))
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["items", "slots"])),
      I("div", $n, [
        s(u(k))
      ]),
      i.hiddenPagination ? W("", !0) : (b(), T("div", En, [
        s(u(Ze), Me(Ve(h.value)), null, 16)
      ]))
    ], 2));
  }
}), Rn = {
  class: "uni-top-progress",
  style: { position: "fixed", top: "0", left: "0", right: "0", "z-index": "9999", padding: "2px 0", "background-color": "#fff" }
}, el = /* @__PURE__ */ C({
  __name: "UniTopProgress",
  props: {
    show: { type: Boolean }
  },
  setup(n) {
    const t = n, e = ae(0), o = ae();
    j(
      () => t.show,
      (a) => {
        a === !0 ? (e.value = 0, l()) : clearTimeout(o.value);
      },
      { immediate: !0 }
    );
    function l() {
      let a = 30;
      e.value >= 60 && (a = 10), e.value >= 90 && (a = 1), e.value >= 95 && (a = 0.01), !(e.value >= 99) && (o.value = setTimeout(() => {
        e.value += a, l();
      }, 50));
    }
    return (a, c) => Be((b(), T("div", Rn, [
      s(u(et), {
        percentage: e.value,
        "show-text": !1,
        "stroke-width": 2
      }, null, 8, ["percentage"])
    ], 512)), [
      [He, a.show]
    ]);
  }
}), An = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "UniSelect",
  props: {
    options: {}
  },
  setup(n) {
    const t = n, e = Y(), o = te(), l = z(g), a = C({
      render() {
        return K(tt, l.value, {
          ...e,
          default() {
            const r = t.options || [];
            return r.length ? r.map((d) => K(c, d)) : e.default;
          }
        });
      }
    }), c = C({
      props: ["option"],
      render() {
        const r = this.$props.option || {};
        return K(nt, { ...r, slots: void 0 }, { ...r.slots || {} });
      }
    });
    function g() {
      return { ...o };
    }
    return (r, d) => (b(), H(u(a)));
  }
}), Ce = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "UniRadioGroup",
  props: {
    options: {}
  },
  setup(n) {
    const t = n, e = Y(), o = te(), l = z(g), a = C({
      render() {
        return K(lt, l.value, {
          ...e,
          default() {
            const r = t.options || [];
            return r.length ? r.map((d) => K(c, d)) : e.default;
          }
        });
      }
    }), c = C({
      props: ["option"],
      render() {
        const r = this.$props.option || {};
        return K(ot, { ...r, slots: void 0 }, { ...r.slots || {} });
      }
    });
    function g() {
      return { ...o };
    }
    return (r, d) => (b(), H(u(a)));
  }
}), tl = /* @__PURE__ */ C({
  inheritAttrs: !1,
  __name: "UniCheckboxGroup",
  props: {
    options: {}
  },
  setup(n) {
    const t = n, e = Y(), o = te(), l = z(g), a = C({
      render() {
        return K(at, l.value, {
          ...e,
          default() {
            const r = t.options || [];
            return r.length ? r.map((d) => K(c, d)) : e.default;
          }
        });
      }
    }), c = C({
      props: ["option"],
      render() {
        const r = this.$props.option || {};
        return K(me, { ...r, slots: void 0 }, { ...r.slots || {} });
      }
    });
    function g() {
      return { ...o };
    }
    return (r, d) => (b(), H(u(a)));
  }
}), nl = /* @__PURE__ */ C({
  __name: "UniGlobalSetting",
  props: {
    defaultPrimaryColors: {}
  },
  setup(n) {
    const t = z(() => {
      const l = _e.map((a) => {
        const c = a.join(",");
        return {
          value: c,
          label: c
        };
      });
      return l.unshift({ value: "0", label: "随机" }), l;
    }), e = [
      { value: "small", label: "紧凑" },
      { value: "default", label: "默认" },
      { value: "large", label: "宽松" }
    ];
    function o() {
      Z(ee.uniStorageKey), Z(ee.uniStorageKey, !0), location.reload();
    }
    return (l, a) => {
      const c = A("ElDivider"), g = A("el-color-picker"), r = A("ElFormItem"), d = A("el-switch"), f = A("ElSwitch"), h = A("ElButton"), m = A("ElForm");
      return b(), H(m, { style: { padding: "15px" } }, {
        default: _(() => [
          s(u(rt), { type: "warning" }, {
            default: _(() => [
              M("有些配置需要刷新界面才会生效")
            ]),
            _: 1
          }),
          s(c, { "border-style": "dashed" }, {
            default: _(() => [
              M(" 主题/布局 ")
            ]),
            _: 1
          }),
          s(r, { label: "主题色" }, {
            default: _(() => [
              s(g, {
                predefine: l.defaultPrimaryColors,
                modelValue: u(S).primary,
                "onUpdate:modelValue": a[0] || (a[0] = (p) => u(S).primary = p)
              }, null, 8, ["predefine", "modelValue"])
            ]),
            _: 1
          }),
          s(r, { label: "暗黑模式" }, {
            default: _(() => [
              s(d, {
                modelValue: u(S).dark,
                "onUpdate:modelValue": a[1] || (a[1] = (p) => u(S).dark = p),
                style: { "--el-switch-on-color": "var(--el-bg-color)", "--el-switch-off-color": "var(--el-color-primary)" },
                "inline-prompt": "",
                "active-icon": u(Et),
                "inactive-icon": u(Nt)
              }, null, 8, ["modelValue", "active-icon", "inactive-icon"])
            ]),
            _: 1
          }),
          s(r, { label: "显示标签栏" }, {
            default: _(() => [
              s(f, {
                modelValue: u(S).showTags,
                "onUpdate:modelValue": a[2] || (a[2] = (p) => u(S).showTags = p)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          s(r, { label: "标签最多" }, {
            default: _(() => [
              s(u(st), {
                precision: 0,
                min: 1,
                modelValue: u(S).maxTags,
                "onUpdate:modelValue": a[3] || (a[3] = (p) => u(S).maxTags = p)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          s(r, { label: "路由切换动效" }, {
            default: _(() => [
              s(u(An), {
                options: t.value,
                modelValue: u(S).ani,
                "onUpdate:modelValue": a[4] || (a[4] = (p) => u(S).ani = p)
              }, null, 8, ["options", "modelValue"])
            ]),
            _: 1
          }),
          s(c, { "border-style": "dashed" }, {
            default: _(() => [
              M(" 表格设置 ")
            ]),
            _: 1
          }),
          s(r, { label: "斑马纹" }, {
            default: _(() => [
              s(f, {
                modelValue: u(S).uniTable.stripe,
                "onUpdate:modelValue": a[5] || (a[5] = (p) => u(S).uniTable.stripe = p)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          s(r, { label: "密度" }, {
            default: _(() => [
              s(u(Ce), {
                modelValue: u(S).uniTable.size,
                "onUpdate:modelValue": a[6] || (a[6] = (p) => u(S).uniTable.size = p),
                options: e
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          s(r, { label: "展示查询表单" }, {
            default: _(() => [
              s(f, {
                modelValue: u(S).uniTable.filterForm,
                "onUpdate:modelValue": a[7] || (a[7] = (p) => u(S).uniTable.filterForm = p)
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          s(c, { "border-style": "dashed" }, {
            default: _(() => [
              M(" 表单设置 ")
            ]),
            _: 1
          }),
          s(r, { label: "密度" }, {
            default: _(() => [
              s(u(Ce), {
                modelValue: u(S).uniForm.size,
                "onUpdate:modelValue": a[8] || (a[8] = (p) => u(S).uniForm.size = p),
                options: e
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          s(c, { "border-style": "dashed" }, {
            default: _(() => [
              M(" 缓存 ")
            ]),
            _: 1
          }),
          s(r, { label: "用户缓存" }, {
            default: _(() => [
              s(h, {
                type: "danger",
                onClick: a[9] || (a[9] = (p) => o())
              }, {
                default: _(() => [
                  M("清除")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), ll = /* @__PURE__ */ C({
  __name: "UniForceFlush",
  props: {
    modelValue: {}
  },
  setup(n) {
    const t = n, e = ae(!0);
    return j(
      () => t.modelValue,
      () => {
        e.value = !1, De().then(() => {
          e.value = !0;
        });
      }
    ), (o, l) => e.value ? J(o.$slots, "default", { key: 0 }) : W("", !0);
  }
});
export {
  _t as LayoutHeader,
  Xn as LayoutIndex,
  Wt as LayoutMenu,
  Xt as LayoutTags,
  tl as UniCheckboxGroup,
  ll as UniForceFlush,
  Yn as UniForm,
  nl as UniGlobalSetting,
  Ce as UniRadioGroup,
  An as UniSelect,
  Zn as UniTable,
  el as UniTopProgress,
  qn as addTags,
  _e as anis,
  Yt as centerLineToHump,
  Mn as clipboardWriteText,
  ve as cloneJson,
  en as darken,
  Vn as downloadFile,
  Kn as getAniClass,
  nn as getElePrimaryColor,
  Dn as getType,
  Nn as getUrlQuery,
  Pn as getUrlQueryArray,
  jn as getUrlQueryHasArray,
  ge as getUrlQueryToArray,
  Ie as hexToRgb,
  an as initGlobalState,
  tn as lighten,
  Zt as randomNum,
  Qn as removeTags,
  $e as rgbToHex,
  Z as rmStorageL,
  Jn as rmStorageLAll,
  Fn as sleep,
  Bn as splitNumber,
  ne as storageL,
  be as switchDarkMode,
  rn as switchDarkModeAni,
  sn as switchRootPrimaryCss,
  Le as toHumpObj,
  he as toggleFullScreen,
  on as uniCreateKeyStorage,
  Re as uniCreateStorage,
  S as uniGlobalState,
  ye as uniGlobalStateCache,
  ie as uniStorage,
  ln as uniStorageClear,
  ee as uniStorageKeys,
  pn as useColumns,
  Ee as useFullscreen,
  dn as useLoading,
  Wn as useModify,
  Gn as useTable,
  _n as useTableState,
  Hn as useUniAttrs
};
