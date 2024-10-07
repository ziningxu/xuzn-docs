import { defineComponent as S, openBlock as c, createElementBlock as L, createElementVNode as $, renderSlot as D, resolveComponent as H, createBlock as I, resolveDynamicComponent as te, Fragment as V, withCtx as g, toDisplayString as Y, createCommentVNode as F, shallowReactive as rt, onUpdated as it, onMounted as ut, shallowRef as j, computed as A, createVNode as u, unref as r, renderList as ne, normalizeClass as ee, normalizeStyle as Be, reactive as se, mergeProps as re, createTextVNode as E, markRaw as ve, onBeforeUnmount as Qe, watch as q, normalizeProps as de, guardReactiveProps as $e, useAttrs as ae, useSlots as oe, isVNode as we, cloneVNode as ct, ref as fe, h as Q, onUnmounted as dt, inject as ke, withModifiers as Xe, provide as ye, withDirectives as ft, vShow as pt, nextTick as mt, Comment as _t, Teleport as ht } from "vue";
import { ElScrollbar as Ee, ElMenu as gt, ElIcon as Z, ElSubMenu as vt, ElMenuItem as yt, ElDropdown as he, ElDropdownMenu as ge, ElDropdownItem as N, useDraggable as bt, ElForm as kt, ElFormItem as wt, ElInput as Ct, ElLoading as $t, ElTableColumn as Lt, ElCheckbox as Oe, ElTooltip as He, ElButton as le, ElSwitch as ie, ElTable as Tt, ElPagination as St, ElProgress as It, ElSelect as xt, ElOption as Rt, ElRadioGroup as At, ElRadio as Bt, ElCheckboxGroup as Et, ElAlert as Ot, ElDivider as be, ElColorPicker as Mt, ElInputNumber as Ft, ElMessageBox as Ut, ElSpace as zt, ElDialog as Ht, ElDrawer as Dt, ElTabs as Vt } from "element-plus";
import jt from "sortablejs";
const Pt = { class: "uni-layout-header" }, Nt = { class: "uni-layout-header-menu" }, Kt = { class: "uni-layout-header-left" }, Gt = { class: "uni-layout-header-right" }, Wt = /* @__PURE__ */ S({
  __name: "LayoutHeader",
  props: {
    onLogoClick: { type: Function }
  },
  setup(n) {
    return (e, t) => (c(), L("div", Pt, [
      $("div", {
        class: "uni-layout-header-logo",
        onClick: t[0] || (t[0] = //@ts-ignore
        (...l) => e.onLogoClick && e.onLogoClick(...l))
      }, [
        D(e.$slots, "logo")
      ]),
      $("div", Nt, [
        $("div", Kt, [
          D(e.$slots, "left")
        ]),
        $("div", Gt, [
          D(e.$slots, "right")
        ])
      ])
    ]));
  }
}), qt = { class: "uni-layout-index-header-icon" }, Jt = { key: 1 }, Zt = {
  key: 2,
  class: "uni-layout-index-header-bubble"
}, Qt = { class: "uni-layout-index-header-txt" }, Ye = /* @__PURE__ */ S({
  __name: "LayoutHeaderItem",
  props: {
    slots: {},
    item: {},
    onBtnClick: { type: Function }
  },
  setup(n) {
    return (e, t) => {
      const l = H("ElIcon");
      return c(), L("div", {
        class: "uni-layout-index-header-item",
        onClick: t[0] || (t[0] = (o) => e.onBtnClick(e.item, o))
      }, [
        e.slots[e.item.key] ? D(e.$slots, e.item.key, {
          key: 0,
          item: e.item
        }) : e.item.component ? (c(), I(te(e.item.component), {
          key: 1,
          item: e.item
        }, null, 8, ["item"])) : (c(), L(V, { key: 2 }, [
          $("div", qt, [
            e.item.icon ? (c(), I(l, { key: 0 }, {
              default: g(() => [
                (c(), I(te(e.item.icon)))
              ]),
              _: 1
            })) : (c(), L("span", Jt, Y((e.item.title || e.item.key)[0]), 1)),
            e.item.bubble ? (c(), L("div", Zt)) : F("", !0)
          ]),
          $("div", Qt, Y(e.item.title || e.item.key), 1)
        ], 64))
      ]);
    };
  }
});
function et(n, e) {
  const t = rt({ width: 0, left: 0 });
  it(() => {
    l();
  }), ut(() => {
    l();
  });
  function l() {
    const o = e();
    if (!(o instanceof HTMLElement)) {
      t.left = 0, t.width = 0;
      return;
    }
    const i = o.offsetLeft, a = o.offsetWidth;
    t.left = i, t.width = a;
    const p = n.value, s = p == null ? void 0 : p.wrapRef;
    if (p && s instanceof HTMLElement) {
      const d = s.scrollLeft, m = s.clientWidth;
      if (s.scrollWidth > m) {
        let f = 0;
        i < 0 ? f = d + i : d + m < i + a && (f = i), p.setScrollLeft(f);
      }
    }
  }
  return t;
}
const Xt = {
  class: "uni-layout-top-menu-ul"
}, Yt = ["onClick"], en = /* @__PURE__ */ $("div", {
  class: "uni-layout-top-menu-bg"
}, null, -1), tn = /* @__PURE__ */ S({
  inheritAttrs: !1,
  __name: "LayoutTopMenu",
  props: {
    menus: {},
    active: {}
  },
  emits: ["click"],
  setup(n, {
    emit: e
  }) {
    const t = n, l = e, o = j(), i = j(), a = et(i, () => {
      const f = o.value instanceof HTMLElement ? o.value : null;
      return f == null ? void 0 : f.querySelector(".uni-layout-top-menu-li-active");
    }), p = A(() => t.menus || []), s = A(() => {
      const f = p.value.find((h) => d(h));
      return (f == null ? void 0 : f.name) || "";
    });
    function d(f) {
      var h;
      return f.name === t.active ? !0 : (h = f.subset) != null && h.length ? f.subset.some((k) => d(k)) : !1;
    }
    function m(f, h) {
      l("click", f, h);
    }
    return (f, h) => (c(), L("div", {
      class: "uni-layout-top-menu",
      ref_key: "topMenuRef",
      ref: o
    }, [u(r(Ee), {
      ref_key: "scrollbarRef",
      ref: i
    }, {
      default: g(() => [$("div", Xt, [(c(!0), L(V, null, ne(p.value, (k) => (c(), L("div", {
        class: ee(["uni-layout-top-menu-li", {
          "uni-layout-top-menu-li-active": k.name === s.value
        }]),
        key: k.name,
        onClick: (_) => m(k, _)
      }, [$("span", null, Y(k.title || k.name), 1), en], 10, Yt))), 128)), $("div", {
        class: "uni-layout-top-menu-ab",
        style: Be({
          width: r(a).width + "px",
          left: r(a).left + "px"
        })
      }, null, 4)])]),
      _: 1
    }, 512)], 512));
  }
});
/*! Element Plus Icons Vue v2.3.1 */
var nn = /* @__PURE__ */ S({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Me = nn, on = /* @__PURE__ */ S({
  name: "Close",
  __name: "close",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ue = on, ln = /* @__PURE__ */ S({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), De = ln, sn = /* @__PURE__ */ S({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), Se = sn, an = /* @__PURE__ */ S({
  name: "Download",
  __name: "download",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"
      })
    ]));
  }
}), Ie = an, rn = /* @__PURE__ */ S({
  name: "Fold",
  __name: "fold",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M896 192H128v128h768zm0 256H384v128h512zm0 256H128v128h768zM320 384 128 512l192 128z"
      })
    ]));
  }
}), un = rn, cn = /* @__PURE__ */ S({
  name: "FullScreen",
  __name: "full-screen",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
      })
    ]));
  }
}), xe = cn, dn = /* @__PURE__ */ S({
  name: "Moon",
  __name: "moon",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696"
      })
    ]));
  }
}), fn = dn, pn = /* @__PURE__ */ S({
  name: "MoreFilled",
  __name: "more-filled",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), mn = pn, _n = /* @__PURE__ */ S({
  name: "Rank",
  __name: "rank",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
      })
    ]));
  }
}), Ve = _n, hn = /* @__PURE__ */ S({
  name: "RefreshRight",
  __name: "refresh-right",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
      })
    ]));
  }
}), tt = hn, gn = /* @__PURE__ */ S({
  name: "Refresh",
  __name: "refresh",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), je = gn, vn = /* @__PURE__ */ S({
  name: "Search",
  __name: "search",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"
      })
    ]));
  }
}), yn = vn, bn = /* @__PURE__ */ S({
  name: "Sunny",
  __name: "sunny",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32M195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248M64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32m768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32M195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0"
      })
    ]));
  }
}), kn = bn, wn = /* @__PURE__ */ S({
  name: "Switch",
  __name: "switch",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32"
      })
    ]));
  }
}), Pe = wn, Cn = /* @__PURE__ */ S({
  name: "Upload",
  __name: "upload",
  setup(n) {
    return (e, t) => (c(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248z"
      })
    ]));
  }
}), $n = Cn;
const Ln = {
  class: "uni-layout-collapse"
}, Tn = /* @__PURE__ */ S({
  inheritAttrs: !1,
  __name: "LayoutMenu",
  props: {
    menus: {},
    active: {}
  },
  emits: ["click"],
  setup(n, {
    emit: e
  }) {
    const t = n, l = e, o = A(() => t.menus || []), i = se({
      collapse: !1
    }), a = /* @__PURE__ */ S({
      props: ["item"],
      setup(s) {
        const d = s.item || {}, m = d.subset || [];
        return () => {
          const f = d.icon && typeof d.icon == "string" ? H(d.icon) : d.icon, h = [f ? u(Z, null, {
            default: () => [u(f, null, null)]
          }) : null, u("span", null, [d.title || d.name])];
          return m.length ? u(vt, {
            index: d.name + ""
          }, {
            default() {
              return m.map((k) => u(a, {
                item: k
              }, null));
            },
            title() {
              return h;
            }
          }) : u(yt, {
            index: d.name + "",
            onClick: (k) => p(d, k)
          }, {
            default() {
              return h;
            }
          });
        };
      }
    });
    function p(s, d) {
      l("click", {
        sourceItem: s,
        instanceItem: d
      });
    }
    return (s, d) => {
      const m = H("el-button");
      return c(), L("div", {
        class: ee(["uni-layout-menu", {
          "uni-layout-menu-active": i.collapse
        }])
      }, [u(r(Ee), null, {
        default: g(() => [u(r(gt), re({
          "default-active": s.active,
          collapse: i.collapse,
          "unique-opened": ""
        }, s.$attrs), {
          default: g(() => [(c(!0), L(V, null, ne(o.value, (f) => (c(), I(r(a), {
            key: f.name,
            item: f
          }, null, 8, ["item"]))), 128))]),
          _: 1
        }, 16, ["default-active", "collapse"])]),
        _: 1
      }), $("div", Ln, [u(m, {
        link: "",
        icon: r(un),
        onClick: d[0] || (d[0] = (f) => i.collapse = !i.collapse)
      }, null, 8, ["icon"])])], 2);
    };
  }
}), Sn = {
  class: "uni-layout-tags-items"
}, In = {
  class: "uni-layout-tags-ul"
}, xn = {
  class: "uni-layout-tags-item"
}, Rn = ["onClick"], An = {
  key: 0,
  class: "uni-layout-tags-options"
}, Bn = {
  class: "uni-layout-tags-option"
}, En = /* @__PURE__ */ S({
  __name: "LayoutTags",
  props: {
    active: {},
    tags: {}
  },
  emits: ["click"],
  setup(n, {
    emit: e
  }) {
    const t = n, l = e, o = j(), i = j(), a = et(i, () => {
      const k = o.value instanceof HTMLElement ? o.value : null;
      return k == null ? void 0 : k.querySelector(".uni-layout-tags-active");
    }), p = A(() => t.tags || []), s = A(() => p.value.find((k) => k.name === t.active) || p.value[0]), d = A(() => p.value.findIndex((k) => k.name === t.active) || 0);
    function m(k, _) {
      const C = [...t.tags || []];
      let b = [...t.tags || []];
      if (_ === "close" || _ === "closeCurrent")
        b = b.filter((x) => x.name !== k.name);
      else if (_ === "closeOther")
        b = [k];
      else if (_ === "closeLeft") {
        const x = b.findIndex((B) => B.name === k.name);
        b = b.slice(x);
      } else if (_ === "closeRight") {
        const x = b.findIndex((B) => B.name === k.name);
        b = b.slice(0, x + 1);
      }
      const y = b.find((x) => x.name === t.active);
      let w;
      _ === "cickCurrent" ? w = k : b && b.length !== C.length && (y || (b.length ? w = f(b) : w = "/")), l("click", {
        sourceItem: k,
        toItem: w,
        type: _,
        currentItem: y,
        tags: b
      });
    }
    function f(k) {
      return k.reduce((_, C) => ((_ && C.tt > _.tt || !_) && (_ = C), _));
    }
    function h() {
      document.body.click();
    }
    return (k, _) => {
      const C = H("el-icon"), b = H("ElScrollbar");
      return c(), L("div", {
        class: "uni-layout-tags",
        ref_key: "tagsRef",
        ref: o
      }, [$("div", Sn, [u(b, {
        ref_key: "scrollbarRef",
        ref: i
      }, {
        default: g(() => [$("div", In, [(c(!0), L(V, null, ne(p.value, (y, w) => (c(), I(r(he), {
          key: y.name,
          trigger: "contextmenu",
          onVisibleChange: h,
          class: ee({
            "uni-layout-tags-active": y.name === k.active
          })
        }, {
          dropdown: g(() => [u(r(ge), null, {
            default: g(() => [u(r(N), {
              icon: r(je),
              onClick: (x) => m(y, "refresh"),
              disabled: y.name !== k.active
            }, {
              default: g(() => [E("刷新")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), u(r(N), {
              icon: r(xe),
              onClick: (x) => m(y, "fullpage"),
              disabled: y.name !== k.active
            }, {
              default: g(() => [E("最大化")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), u(r(N), {
              icon: r(Ve),
              onClick: (x) => m(y, "fullscreen"),
              disabled: y.name !== k.active
            }, {
              default: g(() => [E("全屏")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), u(r(N), {
              icon: r(ue),
              onClick: (x) => m(y, "closeCurrent")
            }, {
              default: g(() => [E("关闭当前")]),
              _: 2
            }, 1032, ["icon", "onClick"]), u(r(N), {
              icon: r(De),
              onClick: (x) => m(y, "closeLeft"),
              disabled: !(w > 0)
            }, {
              default: g(() => [E("关闭左边")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), u(r(N), {
              icon: r(Se),
              onClick: (x) => m(y, "closeRight"),
              disabled: !(w < p.value.length - 1)
            }, {
              default: g(() => [E("关闭右边")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"]), u(r(N), {
              icon: r(Pe),
              onClick: (x) => m(y, "closeOther"),
              disabled: !(p.value.length > 1)
            }, {
              default: g(() => [E("关闭其他")]),
              _: 2
            }, 1032, ["icon", "onClick", "disabled"])]),
            _: 2
          }, 1024)]),
          default: g(() => [$("div", xn, [$("div", {
            class: "uni-layout-tags-btn",
            onClick: (x) => m(y, "cickCurrent")
          }, Y(y.title || y.name), 9, Rn), u(C, {
            class: "uni-layout-tags-close",
            onClick: (x) => m(y, "close")
          }, {
            default: g(() => [u(r(ue))]),
            _: 2
          }, 1032, ["onClick"])])]),
          _: 2
        }, 1032, ["class"]))), 128)), $("div", {
          class: "uni-layout-tags-ab",
          style: Be({
            width: r(a).width + "px",
            left: r(a).left + "px"
          })
        }, null, 4)])]),
        _: 1
      }, 512)]), s.value ? (c(), L("div", An, [$("div", {
        class: "uni-layout-tags-option",
        onClick: _[0] || (_[0] = (y) => m(s.value, "refresh"))
      }, [u(C, null, {
        default: g(() => [u(r(tt))]),
        _: 1
      })]), u(r(he), {
        trigger: "click",
        onVisibleChange: h
      }, {
        dropdown: g(() => [u(r(ge), null, {
          default: g(() => [u(r(N), {
            icon: r(je),
            onClick: _[1] || (_[1] = (y) => m(s.value, "refresh")),
            disabled: s.value.name !== k.active
          }, {
            default: g(() => [E("刷新")]),
            _: 1
          }, 8, ["icon", "disabled"]), u(r(N), {
            icon: r(xe),
            onClick: _[2] || (_[2] = (y) => m(s.value, "fullpage")),
            disabled: s.value.name !== k.active
          }, {
            default: g(() => [E("最大化")]),
            _: 1
          }, 8, ["icon", "disabled"]), u(r(N), {
            icon: r(Ve),
            onClick: _[3] || (_[3] = (y) => m(s.value, "fullscreen")),
            disabled: s.value.name !== k.active
          }, {
            default: g(() => [E("全屏")]),
            _: 1
          }, 8, ["icon", "disabled"]), u(r(N), {
            icon: r(ue),
            onClick: _[4] || (_[4] = (y) => m(s.value, "closeCurrent"))
          }, {
            default: g(() => [E("关闭当前")]),
            _: 1
          }, 8, ["icon"]), u(r(N), {
            icon: r(De),
            onClick: _[5] || (_[5] = (y) => m(s.value, "closeLeft")),
            disabled: !(d.value > 0)
          }, {
            default: g(() => [E("关闭左边")]),
            _: 1
          }, 8, ["icon", "disabled"]), u(r(N), {
            icon: r(Se),
            onClick: _[6] || (_[6] = (y) => m(s.value, "closeRight")),
            disabled: !(d.value < p.value.length - 1)
          }, {
            default: g(() => [E("关闭右边")]),
            _: 1
          }, 8, ["icon", "disabled"]), u(r(N), {
            icon: r(Pe),
            onClick: _[7] || (_[7] = (y) => m(s.value, "closeOther")),
            disabled: !(p.value.length > 1)
          }, {
            default: g(() => [E("关闭其他")]),
            _: 1
          }, 8, ["icon", "disabled"])]),
          _: 1
        })]),
        default: g(() => [$("div", Bn, [u(C, null, {
          default: g(() => [u(r(Me))]),
          _: 1
        })])]),
        _: 1
      })])) : F("", !0)], 512);
    };
  }
});
function Yo(n = 3e3) {
  return new Promise((e) => {
    setTimeout(() => {
      e(0);
    }, n);
  });
}
async function Ne(n, e) {
  var o, i;
  const t = e instanceof HTMLElement ? e : document.documentElement;
  if (typeof n == "boolean" ? n : !document.fullscreenElement)
    return document.fullscreenElement && t === document.fullscreenElement || (o = t.requestFullscreen) == null ? void 0 : o.call(t);
  if (t === document.fullscreenElement)
    return (i = document.exitFullscreen) == null ? void 0 : i.call(document);
}
async function el(n) {
  const e = typeof n == "string" ? n : JSON.stringify(n);
  return e ? navigator.clipboard.writeText(e) : Promise.reject();
}
function Re(n) {
  return n !== null && typeof n == "object" ? JSON.parse(JSON.stringify(n)) : n;
}
function tl(n, e) {
  const t = window.URL.createObjectURL(n), l = document.createElement("a");
  l.style.display = "none", l.href = t, e && l.setAttribute("download", e), document.body.appendChild(l), l.click(), URL.revokeObjectURL(l.href), document.body.removeChild(l);
}
function nl(n, e = ",") {
  return (n + "").replace(/\B(?=(\d{3})+(?!\d))/g, e);
}
function On(n, e = !1, t = "-") {
  return n.split(t).map((l, o) => !e && o === 0 ? l : l.length > 0 ? l[0].toUpperCase() + l.slice(1) : l).join("");
}
function Fe(n, e = !1) {
  const t = {};
  for (let l in n)
    t[On(l, e)] = n[l];
  return t;
}
function Mn(n, e) {
  return Math.floor(Math.random() * (e - n + 1) + n);
}
function ol(n) {
  if (typeof n == "number") {
    const e = n + "";
    return e === "NaN" ? e : e === "Infinity" || e === "-Infinity" ? "Infinity" : "number";
  }
  return Object.prototype.toString.call(n).slice(8, -1).toLocaleLowerCase();
}
function Ke(n) {
  return n.split(";").map((e) => e.split(":").map((t) => t.trim())).filter((e) => e.length === 2).reduce(
    (e, t) => (e[t[0]] = t[1], e),
    {}
  );
}
function Fn(n) {
  return Object.keys(n).reduce((e, t) => (e.push(`${t}: ${n[t]}`), e), []).join("; ");
}
function Ue(n = location.href) {
  return (n.match(new RegExp("(?<=\\?)[^#?]+", "g")) || []).join("&").split("&").map((t) => t.split("=").map((l) => l.trim()));
}
function ll(n = location.href) {
  return Ue(n).reduce(
    (e, t) => (e[t[0]] = t[1], e),
    {}
  );
}
function sl(n = location.href) {
  return Ue(n).reduce(
    (e, t) => (e[t[0]] ? e[t[0]].push(t[1]) : e[t[0]] = [t[1]], e),
    {}
  );
}
function al(n = location.href) {
  return Ue(n).reduce(
    (e, t) => {
      const l = e[t[0]], o = t[1];
      return typeof l == "string" ? e[t[0]] = [l, o] : Array.isArray(l) ? l.push(o) : e[t[0]] = o, e;
    },
    {}
  );
}
function nt(n) {
  return n = n.replace("#", ""), [n.slice(0, 2), n.slice(2, 4), n.slice(4, 6)].map((t) => parseInt(t, 16) || 0);
}
function ot(n, e, t) {
  return "#" + [n.toString(16), e.toString(16), t.toString(16)].map((o) => o.padStart(2, "0")).join("");
}
function Un(n, e) {
  const t = nt(n).map((l) => Math.floor(l * (1 - e)));
  return ot(...t);
}
function zn(n, e) {
  const t = nt(n).map((l) => Math.floor((255 - l) * e + l));
  return ot(...t);
}
function Ge(n) {
  const e = `--el-color-primary: ${n}`, t = new Array(9).fill("").map((o, i) => {
    const a = i + 1;
    return `--el-color-primary-dark-${a}: ${Un(n, a / 10)}`;
  }), l = new Array(9).fill("").map((o, i) => {
    const a = i + 1;
    return `--el-color-primary-light-${a}: ${zn(n, a / 10)}`;
  });
  return [e, ...t, ...l];
}
const Ae = [
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
function rl(n = "", e) {
  const t = e || Ae[Mn(0, Ae.length - 1)];
  return {
    appearClass: `${n || ""} animate__animated animate__${t[0]}`,
    enterClass: `${n || ""} animate__animated animate__${t[0]}`,
    leaveClass: `${n || ""} animate__animated animate__${t[1]}`
  };
}
function il(n) {
  const { isMarkRaw: e = !0, localPaging: t = !1, syncServer: l = !0 } = n, o = { ...n.tableData || {} };
  let i;
  const a = se(p());
  function p() {
    return {
      total: 0,
      current: 1,
      rows: m([]),
      size: 10,
      loading: !1,
      ...o
    };
  }
  async function s() {
    return t && !l && i ? d(Re(i)) : (a.loading = !0, n.api(a).then((_) => (t && !l && (i = Re(_)), d(_))).finally(() => {
      a.loading = !1;
    }));
  }
  function d(_) {
    let C = _.rows || [], b = _.total > 0 ? _.total : 0;
    if (t && (b = C.length, b > a.size)) {
      const y = (a.current - 1) * a.size, w = y + a.size;
      C = C.slice(y, w);
    }
    return a.rows = m(C), a.total = b, a;
  }
  function m(_) {
    return e !== !1 ? ve(_) : _;
  }
  function f(_) {
    return a.current = _, s();
  }
  function h(_) {
    return a.current = 1, a.size = _, s();
  }
  function k() {
    Object.assign(a, p());
  }
  return { tableData: a, onSearch: s, onCurrentChange: f, onSizeChange: h, reset: k };
}
function ul(n, e) {
  const t = se({
    loading: !1,
    show: !1,
    type: "",
    readonly: !1
  }), l = se({}), o = j(), i = (e == null ? void 0 : e.hash) || {
    add: "新增",
    edit: "编辑",
    show: "详情"
  };
  a();
  function a(h = o.value) {
    const k = n(h), _ = { ...l, ...k };
    for (let C in _)
      l[C] = k[C];
  }
  function p(h = t.type) {
    return i[h];
  }
  function s() {
  }
  function d(h) {
    o.value = h, a(), t.readonly = !0, t.type = "show", t.show = !0;
  }
  function m(h) {
    o.value = h, a(), t.readonly = !1, t.type = "edit", t.show = !0;
  }
  function f(h) {
    o.value = h, a(), t.readonly = !1, t.type = "add", t.show = !0;
  }
  return { state: t, model: l, onSubmit: s, onShow: d, onEdit: m, onAdd: f, modifyRow: o, getTypeText: p };
}
function lt() {
  const n = se({
    fullpage: !1,
    fullscreen: !1
  }), e = a();
  Qe(() => {
    e();
  });
  async function t(s) {
    const d = typeof s == "boolean" ? s : !0;
    n.fullpage = d, n.fullscreen && (n.fullscreen = !1, await Ne(!1));
  }
  async function l(s) {
    const d = typeof s == "boolean" ? s : !0;
    n.fullpage = !1, n.fullscreen = d, await Ne(d);
  }
  function o() {
    document.addEventListener("keydown", s);
    function s(d) {
      d.key === "Escape" && (n.fullpage = !1);
    }
    return () => {
      document.removeEventListener("keydown", s);
    };
  }
  function i() {
    document.addEventListener("fullscreenchange", s);
    function s() {
      !p() && n.fullscreen && (n.fullscreen = !1);
    }
    return () => {
      document.removeEventListener("fullscreenchange", s);
    };
  }
  function a() {
    const s = [o(), i()];
    return () => {
      s.forEach((d) => d());
    };
  }
  function p() {
    return document.fullscreenElement === document.documentElement;
  }
  return { state: n, onFullpage: t, onFullscreen: l };
}
const pe = {
  // 全局缓存key值，不污染全局
  uniStorageKey: "$UNI_STORAGE$",
  // uni table的缓存前缀
  uniTableStateKeyPre: "$UNI_TABLE_STATE$_",
  uniTableColumnsKeyPre: "$UNI_TABLE_COLUMNS$_",
  // 全局缓存key
  uniGlobalStateKey: "$UNI_GLOBAL_STORAGE$"
};
function _e(n, e, t) {
  if (typeof Storage < "u") {
    const l = t === !0 ? sessionStorage : localStorage;
    if (e == null) {
      let o = l.getItem(n);
      return o && o.startsWith("obj-") ? (o = o.slice(4), JSON.parse(o)) : o;
    } else {
      let o = e + "";
      return e instanceof Object && (o = "obj-" + JSON.stringify(e)), l.setItem(n, o), e;
    }
  }
}
function ce(n, e) {
  typeof Storage < "u" && n && (e === !0 ? sessionStorage : localStorage).removeItem(n);
}
function cl(n) {
  typeof Storage < "u" && (n === !0 ? sessionStorage : localStorage).clear();
}
function Hn(n, e = 7 * 24 * 60 * 60 * 1e3) {
  if (typeof Storage < "u") {
    if (!(e > 0)) {
      ce(n, !0), ce(n, !1);
      return;
    }
    t(_e(n, null, !0) || {}, !0), t(_e(n, null, !1) || {}, !1);
  }
  function t(l, o) {
    const i = Date.now();
    for (let a in l) {
      const p = l[a];
      (!(i - (p == null ? void 0 : p.tt) < e) || (p == null ? void 0 : p.val) === void 0 || (p == null ? void 0 : p.val) === null) && (l[a] = void 0);
    }
    return Object.keys(l).some((a) => l[a] !== void 0) ? _e(n, l, o) : ce(n, o), l;
  }
}
function Ce(n, e, t) {
  var l;
  if (typeof Storage < "u") {
    const o = z.uniUserStorageKeyPre + pe.uniStorageKey;
    Hn(o);
    const i = _e(o, null, t) || {};
    return e == null ? e = (l = i[n]) == null ? void 0 : l.val : e === "" && (e = void 0), i[n] = e === void 0 ? void 0 : { val: e, tt: Date.now() }, Object.keys(i).some((a) => i[a] !== void 0) ? _e(o, i, t) : ce(o, t), e;
  }
}
function st(n) {
  return (e, t, l) => {
    if (!e) {
      console.warn("创建独立存储集合，请添加前缀key");
      return;
    }
    e = n + e;
    const o = Ce(e, null, l);
    return t != null ? Ce(e, t, l) : o;
  };
}
function Dn(n) {
  return (e, t) => {
    let l = Ce(n, null, t) || {};
    return e != null && (l = e, Ce(n, l, t)), l;
  };
}
const z = se({
  uniUserStorageKeyPre: "",
  ani: "0",
  topMenu: !0,
  maxTags: 10,
  showTags: !0,
  routeTags: ve([]),
  uniTable: { stripe: !0, size: "large", filterForm: !0 },
  uniForm: { size: "default" }
}), We = Dn(pe.uniGlobalStateKey);
function dl(n) {
  const e = typeof n.name == "string" ? n.name : "", t = n.meta || {}, l = {
    name: e,
    // 唯一值
    tt: Date.now(),
    title: t.title,
    query: n.query,
    params: n.params
  };
  let o = [...z.routeTags || []];
  const i = o.findIndex((a) => a.name === e);
  if (i >= 0)
    o[i] = l;
  else {
    const a = z.maxTags;
    a > 0 && o.length >= a && (o = o.slice(0, a - 1)), o.push(l);
  }
  z.routeTags = ve(o);
}
function fl(n) {
  const e = (Array.isArray(n) ? n : [n]).map((t) => t.name);
  z.routeTags = ve(z.routeTags.filter((t) => !e.includes(t.name)));
}
Vn();
function Vn() {
  e(), n();
  function n() {
    Object.assign(z, We());
  }
  function e() {
    q(z, (t) => {
      We(t);
    }), q(
      () => z.primary,
      (t) => {
        Pn(t);
      }
    ), q(
      () => z.dark,
      (t) => {
        jn(t);
      }
    );
  }
}
function jn(n) {
  const e = document;
  e.startViewTransition ? e.startViewTransition(() => {
    qe(n);
  }) : qe(n);
}
function qe(n) {
  const e = "dark", t = document.documentElement;
  (typeof n == "boolean" ? n : !t.classList.contains(e)) ? t.classList.add(e) : t.classList.remove(e);
}
function Pn(n = "") {
  const e = document.documentElement, t = Ge(n || "#0e6ee4"), l = Ke(t.join(";")), o = {
    "--uni-layout-header-bg": l["--el-color-primary"],
    "--uni-layout-top-menu-hover-bg": l["--el-color-primary-dark-2"]
  };
  if (!n) {
    o["--uni-layout-header-bg"] = "#0e6ee4", o["--uni-layout-top-menu-hover-bg"] = "#0054ca";
    for (let a in l)
      l[a] = void 0;
  }
  const i = Re({ ...Ke(e.style.cssText), ...l, ...o });
  e.style.cssText = Fn(i);
}
const Nn = { key: 0 }, Kn = /* @__PURE__ */ S({
  __name: "LayoutHeaderDownItem",
  props: {
    slots: {},
    item: {},
    onBtnClick: { type: Function }
  },
  setup(n) {
    const e = n, t = A(() => {
      var l;
      return {
        ...e.item.dropdown || {},
        options: ((l = e.item.dropdown) == null ? void 0 : l.options) || []
      };
    });
    return (l, o) => (c(), I(r(he), re({ class: "uni-layout-index-header-downitem" }, t.value), {
      dropdown: g(() => [
        u(r(ge), null, {
          default: g(() => [
            (c(!0), L(V, null, ne(t.value.options, (i) => (c(), I(r(N), re({ ref_for: !0 }, i), {
              default: g(() => [
                i.title ? (c(), L("span", Nn, Y(i.title), 1)) : i.component ? (c(), I(te(i.component), { key: 1 })) : F("", !0)
              ]),
              _: 2
            }, 1040))), 256))
          ]),
          _: 1
        })
      ]),
      default: g(() => [
        u(Ye, de($e(e)), null, 16)
      ]),
      _: 1
    }, 16));
  }
}), Gn = ["src"], Wn = { class: "uni-layout-index-logo-txt" }, qn = {
  ref: "closeFullpageHandRef",
  class: "uni-layout-close-move"
}, Jn = /* @__PURE__ */ S({
  __name: "LayoutIndex",
  props: {
    menus: {},
    menuActive: {},
    tagActive: {},
    logoSrc: {},
    logoTitle: {},
    onLogoClick: { type: Function },
    headerBtns: {}
  },
  emits: ["menuItemClick", "tagItemClick", "headerItemClick"],
  setup(n, { emit: e }) {
    const t = n, l = e, o = j(), i = A(() => z.routeTags), a = A(() => !0);
    bt(o, o, a);
    const p = se({
      forceFlush: !0
    }), s = lt();
    function d(C, b) {
      var y;
      (y = C.onClick) == null || y.call(C, C, b), l("headerItemClick", C, b);
    }
    function m(C) {
      l("menuItemClick", C);
    }
    function f(C) {
      let b = null;
      y(C), b && m({
        sourceItem: b,
        instanceItem: {
          index: "",
          indexPath: [],
          active: !1
        }
      });
      function y(w) {
        var x;
        return (x = w.subset) != null && x.length ? w.subset.some((B) => y(B)) : (b = w, w);
      }
    }
    function h(C) {
      const { type: b, tags: y } = C;
      b === "refresh" ? (p.forceFlush = !1, Promise.resolve().then(() => {
        p.forceFlush = !0;
      })) : b === "fullpage" ? s.onFullpage() : b === "fullscreen" && s.onFullscreen(), y && y.length !== z.routeTags.length && (z.routeTags = ve([...y])), l("tagItemClick", C);
    }
    const k = A(() => {
      const C = t.menus || [];
      if (z.topMenu !== !0)
        return C;
      const b = C.find((y) => _([y]));
      return (b == null ? void 0 : b.subset) || [];
    });
    function _(C) {
      return C.some((b) => {
        if (b.name === t.menuActive)
          return !0;
        if (b.subset)
          return _(b.subset);
      });
    }
    return (C, b) => {
      const y = H("el-header"), w = H("el-aside"), x = H("el-main"), B = H("el-container");
      return c(), I(B, {
        class: ee(["uni-layout-index", { "uni-layout-main-fullpage": r(s).state.fullpage || r(s).state.fullscreen }])
      }, {
        default: g(() => [
          u(y, { class: "uni-layout-index-header" }, {
            default: g(() => [
              u(Wt, { onLogoClick: C.onLogoClick }, {
                logo: g(() => [
                  C.$slots.header_logo ? D(C.$slots, "header_logo", { key: 0 }, void 0, !0) : (c(), L(V, { key: 1 }, [
                    C.logoSrc ? (c(), L("img", {
                      key: 0,
                      class: "uni-layout-index-logo-img",
                      src: C.logoSrc
                    }, null, 8, Gn)) : F("", !0),
                    $("span", Wn, Y(C.logoTitle || "xuzn Admin"), 1)
                  ], 64))
                ]),
                left: g(() => [
                  r(z).topMenu ? (c(), I(tn, {
                    key: 0,
                    active: C.menuActive,
                    menus: C.menus,
                    onClick: f
                  }, null, 8, ["active", "menus"])) : F("", !0)
                ]),
                right: g(() => [
                  (c(!0), L(V, null, ne(C.headerBtns, (U) => (c(), L(V, {
                    key: U.key
                  }, [
                    U.dropdown ? (c(), I(Kn, {
                      key: 0,
                      item: U,
                      onBtnClick: d,
                      slots: C.$slots
                    }, null, 8, ["item", "slots"])) : (c(), I(Ye, {
                      key: 1,
                      item: U,
                      onBtnClick: d,
                      slots: C.$slots
                    }, null, 8, ["item", "slots"]))
                  ], 64))), 128))
                ]),
                _: 3
              }, 8, ["onLogoClick"])
            ]),
            _: 3
          }),
          u(B, { class: "uni-layout-index-container" }, {
            default: g(() => [
              k.value && k.value.length ? (c(), I(w, {
                key: 0,
                class: "uni-layout-index-aside"
              }, {
                default: g(() => [
                  u(Tn, {
                    active: C.menuActive,
                    menus: k.value,
                    onClick: m
                  }, null, 8, ["active", "menus"])
                ]),
                _: 1
              })) : F("", !0),
              u(B, null, {
                default: g(() => [
                  r(z).showTags && (i.value && i.value.length) ? (c(), I(y, {
                    key: 0,
                    class: "uni-layout-index-tags"
                  }, {
                    default: g(() => [
                      u(En, {
                        active: C.tagActive,
                        tags: i.value,
                        onClick: h
                      }, null, 8, ["active", "tags"])
                    ]),
                    _: 1
                  })) : F("", !0),
                  p.forceFlush ? (c(), I(x, {
                    key: 1,
                    class: "uni-layout-index-main"
                  }, {
                    default: g(() => [
                      D(C.$slots, "default", {}, void 0, !0)
                    ]),
                    _: 3
                  })) : F("", !0)
                ]),
                _: 3
              })
            ]),
            _: 3
          }),
          r(s).state.fullpage ? (c(), L("div", {
            key: 0,
            ref_key: "closeFullpageRef",
            ref: o,
            class: "uni-layout-close-fullpage"
          }, [
            $("div", qn, null, 512),
            u(r(Z), {
              class: "uni-layout-close-icon",
              onClick: b[0] || (b[0] = (U) => r(s).onFullpage(!1))
            }, {
              default: g(() => [
                u(r(ue))
              ]),
              _: 1
            })
          ], 512)) : F("", !0)
        ]),
        _: 3
      }, 8, ["class"]);
    };
  }
}), at = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [l, o] of e)
    t[l] = o;
  return t;
}, pl = /* @__PURE__ */ at(Jn, [["__scopeId", "data-v-d1619a3b"]]);
function Zn(n, e = 3) {
  const t = j(0), l = new MutationObserver((o) => {
    var i;
    if (o.some((a) => a.type === "childList")) {
      const a = ((i = n.value) == null ? void 0 : i.querySelectorAll(".el-form > .el-form-item")) || [];
      t.value = Math.ceil(a.length / e);
    }
  });
  return Qe(() => {
    l.disconnect();
  }), q(
    () => {
      var o;
      return (o = n.value) == null ? void 0 : o.querySelector(".el-form");
    },
    (o) => {
      var i;
      if (l.disconnect(), o instanceof HTMLElement) {
        const a = ((i = n.value) == null ? void 0 : i.querySelectorAll(".el-form > .el-form-item")) || [];
        t.value = Math.ceil(a.length / e), l.observe(o, { childList: !0 });
      }
    },
    { immediate: !0 }
  ), t;
}
const Qn = { class: "uni-form-left" }, Xn = { class: "uni-form-right" }, Yn = { class: "uni-form-right-btns" }, eo = { class: "uni-form-right-submit" }, to = { class: "uni-form-right-reset" }, no = { class: "uni-form-more" }, oo = /* @__PURE__ */ S({
  __name: "UniFormLayoutLR",
  props: {
    hasHiddenBtn: { type: Boolean },
    switchHidden: { type: Boolean },
    switchHiddenFn: { type: Function },
    uniForm: {},
    onSubmit: { type: Function },
    onReset: { type: Function }
  },
  setup(n) {
    const e = j(), t = Zn(e, 3);
    return (l, o) => {
      const i = H("ElButton"), a = H("el-icon");
      return c(), L(V, null, [
        $("div", {
          class: ee(["uni-form-lr", { "uni-form-lr1": r(t) <= 1 }]),
          ref_key: "formLRRef",
          ref: e
        }, [
          $("div", Qn, [
            D(l.$slots, "default")
          ]),
          $("div", Xn, [
            $("div", Yn, [
              $("div", eo, [
                u(i, {
                  type: "primary",
                  icon: r(yn),
                  onClick: l.onSubmit
                }, {
                  default: g(() => [
                    E("查询")
                  ]),
                  _: 1
                }, 8, ["icon", "onClick"])
              ]),
              $("div", to, [
                u(i, {
                  icon: r(tt),
                  onClick: l.onReset
                }, {
                  default: g(() => [
                    E("重置")
                  ]),
                  _: 1
                }, 8, ["icon", "onClick"])
              ])
            ])
          ])
        ], 2),
        $("div", no, [
          l.hasHiddenBtn ? (c(), L("div", {
            key: 0,
            class: ee(["uni-form-more-btn", { "uni-form-more-btn-hidden": l.switchHidden }]),
            onClick: o[0] || (o[0] = (p) => l.switchHiddenFn())
          }, [
            u(a, null, {
              default: g(() => [
                u(r(Se))
              ]),
              _: 1
            })
          ], 2)) : F("", !0)
        ])
      ], 64);
    };
  }
}), lo = /* @__PURE__ */ S({
  __name: "UniFormBtns",
  props: {
    hasHiddenBtn: { type: Boolean },
    switchHidden: { type: Boolean },
    switchHiddenFn: { type: Function },
    uniForm: {},
    onSubmit: { type: Function },
    onReset: { type: Function }
  },
  setup(n) {
    return (e, t) => {
      const l = H("ElButton");
      return c(), L(V, null, [
        u(l, {
          type: "primary",
          onClick: e.onSubmit
        }, {
          default: g(() => [
            E(" 搜索 ")
          ]),
          _: 1
        }, 8, ["onClick"]),
        u(l, { onClick: e.onReset }, {
          default: g(() => [
            E(" 重置 ")
          ]),
          _: 1
        }, 8, ["onClick"]),
        e.hasHiddenBtn ? (c(), I(l, {
          key: 0,
          type: "primary",
          link: "",
          onClick: e.switchHiddenFn
        }, {
          default: g(() => [
            E(Y(e.switchHidden ? "收起" : "展开"), 1)
          ]),
          _: 1
        }, 8, ["onClick"])) : F("", !0)
      ], 64);
    };
  }
}), so = /* @__PURE__ */ S({
  inheritAttrs: !1,
  __name: "UniForm",
  props: {
    items: {},
    itemMinWidth: {
      default: "1fr"
    },
    formRef: {},
    layoutType: {},
    onSubmit: {},
    onReset: {}
  },
  setup(n, {
    expose: e
  }) {
    const t = j(), l = j(), o = n, i = ae(), a = se({});
    let p;
    const s = j(!1), d = oe(), m = A(b), f = /* @__PURE__ */ S({
      render() {
        return u(kt, m.value, {
          ...d,
          default: C
        });
      }
    }), h = A(() => (o.items || []).some((v) => "hidden" in v));
    q(() => i.model, () => {
      p = JSON.parse(JSON.stringify(k()));
    }, {
      immediate: !0
    });
    function k() {
      return i.model || a;
    }
    function _() {
      const v = k(), R = p || {}, P = {
        ...R,
        ...v
      };
      for (let J in P)
        v[J] = R[J];
    }
    function C() {
      var R;
      const v = o.items || [];
      return v.length ? v.map((P) => u(y, {
        item: P
      }, null)) : (R = d.default) == null ? void 0 : R.call(d, ...arguments);
    }
    function b() {
      return {
        ...z.uniForm,
        labelSuffix: "：",
        ...i || {},
        model: k(),
        ref(v) {
          var R;
          (R = o.formRef) == null || R.call(o, v), l.value = v;
        }
      };
    }
    const y = /* @__PURE__ */ S({
      props: ["item"],
      render() {
        const v = this.$props.item, R = "hidden" in v && s.value ? !v.hidden : v.hidden;
        if (!(v && !R))
          return null;
        const P = {
          prop: v.key,
          ...v,
          component: void 0
        }, G = v.key + "_", M = Object.keys(d).filter((W) => W.startsWith(G)).reduce((W, K) => (W[K.slice(G.length)] = d[K], W), {});
        return u(wt, P, {
          ...M,
          ...v.slots || {},
          default: w(v)
        });
      }
    });
    function w(v) {
      if (v.key === "btns")
        return d[v.key] ? d[v.key] : () => u(lo, {
          hasHiddenBtn: h.value,
          switchHidden: s.value,
          switchHiddenFn: T,
          onSubmit: O,
          onReset: U
        }, null);
      let R = (v.prop || v.key) + "";
      function P(J, G) {
        const M = J.type || {}, K = ((M.name || M.__name || "") + "").toLocaleLowerCase().includes("select") ? "请选择" : "请输入", X = k();
        return ct(J, {
          clearable: !0,
          placeholder: v.label ? `${K}${v.label}` : void 0,
          modelValue: B(X, G),
          "onUpdate:modelValue"(me) {
            B(X, G, me);
          },
          ...J.props || {}
        });
      }
      return (...J) => {
        var W;
        const G = ((W = v.slots) == null ? void 0 : W.default) || d[v.key] || v.component;
        let M = typeof G == "function" ? G(...J) : G;
        return M === void 0 && (M = u(Ct, null, null)), Array.isArray(M) && M.length === 1 && (M = M[0]), we(M) ? M = P(M, x(M) || R) : Array.isArray(M) && (M = M.map((K) => {
          const X = we(K) && x(K);
          return X && typeof X == "string" ? P(K, X) : K;
        })), M;
      };
    }
    function x(v) {
      const P = Fe(v.props || {}).dataProp;
      return P ? P + "" : "";
    }
    function B(v, R, P) {
      if (!(R && typeof R == "string" && v))
        return;
      const J = arguments.length;
      return R.split(".").reduce((M, W, K, X) => (M = M && typeof M == "object" ? M : {}, J === 3 && K === X.length - 1 && (M[W] = P), M = M[W], M), v);
    }
    function U() {
      var v;
      _(), (v = o.onReset) == null || v.call(o, k());
    }
    function O() {
      var v;
      (v = o.onSubmit) == null || v.call(o, k());
    }
    function T(v) {
      s.value = typeof v == "boolean" ? v : !s.value;
    }
    return e({
      switchHidden: T,
      get validate() {
        var v;
        return (v = l.value) == null ? void 0 : v.validate;
      },
      resetFormModel: _,
      formExpose(v) {
        var R;
        return (R = l.value) == null ? void 0 : R[v];
      },
      get formRef() {
        return l.value;
      },
      get $el() {
        return t.value;
      }
    }), (v, R) => (c(), L("div", {
      class: "uni-form",
      ref_key: "uniFormRef",
      ref: t,
      style: Be(`--uni-form-item-min-width: ${o.itemMinWidth}`)
    }, [v.layoutType === "lr" ? (c(), I(oo, {
      key: 0,
      hasHiddenBtn: h.value,
      switchHidden: s.value,
      switchHiddenFn: T,
      onSubmit: O,
      onReset: U
    }, {
      default: g(() => [u(r(f))]),
      _: 1
    }, 8, ["hasHiddenBtn", "switchHidden"])) : (c(), I(r(f), {
      key: 1
    }))], 4));
  }
}), Le = st(pe.uniTableColumnsKeyPre), Te = st(pe.uniTableStateKeyPre);
function ao(n, e) {
  let t;
  q(
    () => ({ loading: n.tableApi.tableData.loading, el: e.value }),
    ({ loading: l, el: o }) => {
      o && (l ? t = $t.service({
        target: o
      }) : t == null || t.close());
    }
  );
}
function ro(n, e) {
  const t = oe(), l = [], o = A(() => n.columns || s()), i = JSON.stringify(_(o.value)), a = fe(h(k(o.value)));
  q(
    () => o.value,
    () => {
      p();
    }
  ), q(
    () => {
      if (e.cache && n.cacheKey) {
        const b = _(a.value);
        if (b)
          return JSON.stringify(b);
      }
    },
    (b) => {
      const y = n.cacheKey || "";
      y && b && b !== i ? Le(y, { columns: JSON.parse(b), columnsStr: i }) : y && !b && Le(y, "");
    }
  );
  function p(b = o.value) {
    a.value = h(b);
  }
  function s() {
    var w;
    return (((w = t.default) == null ? void 0 : w.call(t)) || []).filter((x) => m(x)).map((x) => d(x));
  }
  function d(b) {
    const y = b.children, w = { key: b.key, ...b.props || {}, subset: [] };
    if (y && typeof y.default == "function") {
      const x = y.default({
        row: {},
        column: {},
        $index: -1
      });
      Array.isArray(x) && (w.subset = x.filter((B) => m(B)).map((B) => d(B)));
    }
    return w.slots = { ...y || {} }, w;
  }
  function m(b) {
    return we(b) && b.type && b.type.name === "ElTableColumn";
  }
  function f(b) {
    b = b.filter((O) => O.hidden !== !0);
    const y = [], w = [], x = [];
    b.forEach((O) => {
      O.fixed === !0 && (O.fixed = "left"), O.fixed === "left" ? y.push(O) : O.fixed === "right" ? w.push(O) : x.push(O);
    });
    const B = [...y, ...x, ...w];
    function U(O) {
      const T = { ...O.slots || {} }, v = O.subset && O.subset.length ? O.subset : [];
      return v.length && (T.default = () => v.map((R) => U(R))), Q(Lt, O, T);
    }
    return B.map((O) => U(O));
  }
  function h(b) {
    return l.length = 0, b.map((y) => {
      const w = y.key || y.id || y.prop;
      w && !l.includes(w) ? l.push(w) : console.warn(`请保证 key(${w}) 必须存在且是不重复的字符串，否则排序将会出错，依次可以将key，id，prop三种属性识别为key`, y);
      const x = w + "_", B = Object.keys(t).filter((O) => O.startsWith(x)).reduce(
        (O, T) => (O[T.slice(x.length)] = t[T], O),
        {}
      );
      return {
        label: w,
        prop: w,
        ...y,
        key: w,
        subset: y.subset && h(y.subset),
        slots: {
          ...B,
          default: t[w] || B.defalut || y.component,
          ...y.slots || {}
        }
      };
    });
  }
  function k(b) {
    const y = e.cache && n.cacheKey || "", w = y && Le(y);
    let x = !0;
    function B(U, O) {
      return O.map((T) => {
        const v = U.find((R) => T.key && R.key === T.key);
        if (v)
          return { ...v, ...T, subset: v.subset && T.subset ? B(v.subset, T.subset) : void 0 };
        x = !1;
      }).filter(Boolean);
    }
    if (w && w.columnsStr === i && w.columns) {
      const U = B(b, w.columns);
      if (x)
        return U;
    }
    return b;
  }
  function _(b) {
    let y = !0;
    function w(B) {
      return B.map((U) => {
        const O = U.key || "";
        if (O)
          return { key: O, label: U.label, fixed: U.fixed, hidden: U.hidden, width: U.width, subset: U.subset ? w(U.subset) : void 0 };
        y = !1;
      }).filter(Boolean);
    }
    const x = w(b);
    if (y)
      return x;
  }
  const C = A(() => f(a.value));
  return { columns: a, components: C, sourceColumns: o, resetColumns: p };
}
function io(n, e) {
  const t = n.cacheKey || "", l = t && Te(t) || {}, o = typeof e.stripe == "boolean" ? e.stripe : z.uniTable.stripe, i = se({
    stripe: o,
    size: e.size || z.uniTable.size,
    filterForm: z.uniTable.filterForm,
    cache: !!t,
    ...l
  });
  return q(
    () => ({ ...z.uniTable }),
    (a) => {
      Object.assign(i, a);
    }
  ), q(
    () => t && i.cache && { ...i },
    (a) => {
      t && a ? Te(t, a) : t && Te(t, { cache: !1 });
    }
  ), i;
}
const uo = { class: "uni-table-bar" }, co = { class: "uni-table-bar-items uni-table-bar-left" }, fo = { class: "uni-table-bar-items uni-table-bar-right" }, po = /* @__PURE__ */ S({
  __name: "UniTableBar",
  props: {
    items: {},
    slots: {}
  },
  emits: ["btns-click"],
  setup(n, { emit: e }) {
    const t = e, l = oe(), o = n, i = A(() => (o.items || []).filter((f) => f.position === "left")), a = A(() => (o.items || []).filter((f) => f.position !== "left")), p = A(() => ({ ...l, ...o.slots || {} }));
    function s(m) {
      t("btns-click", m);
    }
    const d = S({
      props: ["item"],
      render() {
        var f, h, k;
        const m = this.item;
        return Q(
          "div",
          {
            class: "uni-table-bar-item",
            onClick() {
              s(m);
            }
          },
          ((h = (f = p.value)[m.key]) == null ? void 0 : h.call(f, { item: m })) || ((k = m.render) == null ? void 0 : k.call(m, { item: m })) || null
        );
      }
    });
    return (m, f) => (c(), L("div", uo, [
      $("div", co, [
        (c(!0), L(V, null, ne(i.value, (h) => (c(), I(r(d), {
          key: h.key,
          item: h
        }, null, 8, ["item"]))), 128))
      ]),
      $("div", fo, [
        (c(!0), L(V, null, ne(a.value, (h) => (c(), I(r(d), {
          key: h.key,
          item: h
        }, null, 8, ["item"]))), 128))
      ])
    ]));
  }
}), mo = { class: "uni-title-bar" }, _o = { class: "uni-title-bar-left" }, ho = { class: "uni-title-bar-icon" }, go = { key: 1 }, vo = { class: "uni-title-bar-title" }, yo = { key: 1 }, bo = { class: "uni-title-bar-right" }, ze = /* @__PURE__ */ S({
  __name: "UniTitleBar",
  props: {
    title: {}
  },
  setup(n) {
    return (e, t) => (c(), L("div", mo, [
      $("div", _o, [
        $("div", ho, [
          e.$slots.icon ? D(e.$slots, "icon", { key: 0 }) : (c(), L("span", go))
        ]),
        $("div", vo, [
          e.$slots.title ? D(e.$slots, "title", { key: 0 }) : (c(), L("span", yo, Y(e.title), 1))
        ])
      ]),
      $("div", bo, [
        D(e.$slots, "default")
      ])
    ]));
  }
}), ko = {}, wo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "5.214667320251465",
  height: "12.892667770385742",
  viewBox: "0 0 5.214667320251465 12.892667770385742"
}, Co = /* @__PURE__ */ $("g", null, [
  /* @__PURE__ */ $("path", {
    d: "M0,0L1.59333,0L1.59333,1.59333L0,1.59333L0,0ZM3.62133,0L5.21467,0L5.21467,1.59333L3.62133,1.59333L3.62133,0ZM0,3.76667L1.59333,3.76667L1.59333,5.36L0,5.36L0,3.76667ZM3.62133,3.76667L5.21467,3.76667L5.21467,5.36L3.62133,5.36L3.62133,3.76667ZM0,7.532L1.59333,7.532L1.59333,9.12533L0,9.12533L0,7.532ZM3.62133,7.532L5.21467,7.532L5.21467,9.12533L3.62133,9.12533L3.62133,7.532ZM0,11.2993L1.59333,11.2993L1.59333,12.8927L0,12.8927L0,11.2993ZM3.62133,11.2993L5.21467,11.2993L5.21467,12.8927L3.62133,12.8927L3.62133,11.2993Z",
    fill: "#606266",
    "fill-opacity": "1"
  })
], -1), $o = [
  Co
];
function Lo(n, e) {
  return c(), L("svg", wo, $o);
}
const To = /* @__PURE__ */ at(ko, [["render", Lo]]), So = { class: "uni-table-column-setting-li" }, Io = { class: "uni-table-column-setting-move" }, xo = ["placeholder", "onChange"], Ro = { class: "uni-table-column-setting-label" }, Ao = {
  key: 0,
  class: "uni-table-column-setting-position"
}, Bo = /* @__PURE__ */ $("div", { class: "uni-table-column-setting-divider" }, null, -1), Eo = /* @__PURE__ */ S({
  name: "UniTableMenu",
  __name: "UniTableMenu",
  props: {
    columns: {},
    parentColumn: {}
  },
  setup(n) {
    const e = n, t = fe();
    let l;
    q(
      () => t.value,
      (s) => {
        p(), s instanceof HTMLElement && (l = new jt(s, {
          handle: ".uni-table-column-setting-move",
          onEnd(d) {
            const m = e.columns, f = d.newIndex || 0, h = d.oldIndex || 0;
            Array.isArray(m) && (f > 0 || h > 0) && m.splice(f, 0, m.splice(h, 1)[0]);
          }
        }));
      }
    ), dt(() => {
      p();
    });
    function o(s, d) {
      s && (s.fixed = s.fixed === d ? void 0 : d);
    }
    function i(s) {
      s.hidden = !s.hidden;
    }
    function a(s, d) {
      const m = s.target;
      if (m instanceof HTMLInputElement) {
        let f = +m.value;
        f = f < 0 ? 0 : f >= e.columns.length ? e.columns.length - 1 : f;
        const h = e.columns;
        h.splice(f, 0, h.splice(d, 1)[0]), m.value = "";
      }
    }
    function p() {
      l && (l.destroy(), l = void 0);
    }
    return (s, d) => {
      const m = H("UniTableMenu", !0);
      return c(), L("div", {
        class: "uni-table-column-setting",
        ref_key: "UniTableColumnSettingRef",
        ref: t
      }, [
        (c(!0), L(V, null, ne(s.columns, (f, h) => (c(), L("div", {
          class: "uni-table-column-setting-item",
          key: f.key
        }, [
          $("div", So, [
            u(r(Oe), {
              modelValue: !f.hidden,
              onChange: () => i(f)
            }, null, 8, ["modelValue", "onChange"]),
            $("div", Io, [
              u(r(Z), null, {
                default: g(() => [
                  u(r(To))
                ]),
                _: 1
              })
            ]),
            $("input", {
              class: "uni-table-column-setting-ipt",
              placeholder: h + "",
              onChange: (k) => a(k, h)
            }, null, 40, xo),
            $("div", Ro, Y(f.label), 1),
            s.parentColumn ? F("", !0) : (c(), L("div", Ao, [
              u(r(He), {
                content: "固定到左侧",
                placement: "left",
                "append-to": t.value
              }, {
                default: g(() => [
                  u(r(Z), {
                    style: { transform: "rotate(90deg)" },
                    class: ee({ "uni-table-column-setting-fixed-active": f.fixed === "left" }),
                    onClick: (k) => o(f, "left")
                  }, {
                    default: g(() => [
                      u(r(Ie))
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick"])
                ]),
                _: 2
              }, 1032, ["append-to"]),
              Bo,
              u(r(He), {
                content: "固定到右侧",
                placement: "left",
                "append-to": t.value
              }, {
                default: g(() => [
                  u(r(Z), {
                    style: { transform: "rotate(-90deg)" },
                    class: ee({ "uni-table-column-setting-fixed-active": f.fixed === "right" }),
                    onClick: (k) => o(f, "right")
                  }, {
                    default: g(() => [
                      u(r(Ie))
                    ]),
                    _: 2
                  }, 1032, ["class", "onClick"])
                ]),
                _: 2
              }, 1032, ["append-to"])
            ]))
          ]),
          f.hidden !== !0 && f.subset && f.subset.length ? (c(), I(m, {
            key: 0,
            columns: f.subset,
            parentColumn: f
          }, null, 8, ["columns", "parentColumn"])) : F("", !0)
        ]))), 128))
      ], 512);
    };
  }
}), Oo = { class: "uni-table-setting-popover" }, Mo = { class: "uni-table-setting-popover-title" }, Fo = /* @__PURE__ */ S({
  __name: "UniTableSetting",
  setup(n) {
    const e = ke("columnsApi"), t = A(() => {
      const p = [], s = [];
      function d(f) {
        f.forEach((h) => {
          h.hidden === !0 ? p.push(h) : (s.push(h), h.subset && h.subset.length && d(h.subset));
        });
      }
      const m = (e == null ? void 0 : e.columns.value) || [];
      return d(m), { unchecked: p, checked: s };
    }), l = A(() => t.value.unchecked.length === 0 && t.value.checked.length > 0), o = A(() => t.value.unchecked.length > 0 && t.value.checked.length > 0);
    function i() {
      e == null || e.resetColumns();
    }
    function a() {
      const p = (e == null ? void 0 : e.columns.value) || [];
      l.value ? p.map((s) => s.hidden = !0) : p.map((s) => s.hidden = !1);
    }
    return (p, s) => (c(), L("div", Oo, [
      $("div", Mo, [
        u(r(Oe), {
          "model-value": l.value,
          indeterminate: o.value,
          onChange: a
        }, {
          default: g(() => [
            E(" 列展示 ")
          ]),
          _: 1
        }, 8, ["model-value", "indeterminate"]),
        u(r(le), {
          link: "",
          type: "primary",
          onClick: i
        }, {
          default: g(() => [
            E("重置")
          ]),
          _: 1
        })
      ]),
      u(r(Ee), {
        class: "uni-table-setting-popover-content",
        "max-height": "320px"
      }, {
        default: g(() => {
          var d;
          return [
            u(Eo, {
              columns: ((d = r(e)) == null ? void 0 : d.columns.value) || []
            }, null, 8, ["columns"])
          ];
        }),
        _: 1
      })
    ]));
  }
}), Uo = /* @__PURE__ */ $("span", { style: { "margin-right": "6px" } }, "更多", -1), zo = /* @__PURE__ */ $("span", null, "数据导入", -1), Ho = /* @__PURE__ */ $("span", null, "数据导出", -1), Do = /* @__PURE__ */ $("span", { style: { "margin-right": "5px" } }, "列表页面全屏", -1), Vo = /* @__PURE__ */ $("span", { style: { "margin-right": "5px" } }, "搜索条件显隐", -1), jo = /* @__PURE__ */ S({
  __name: "UniTableMore",
  props: {
    options: {},
    onClick: { type: Function }
  },
  setup(n) {
    const e = n, t = ke("tableState"), l = ke("fullscreenApi"), o = ke("tableSlots"), i = A(() => e.options || []), a = A(() => {
      const f = ["download", "upload"];
      return i.value.filter((h) => !f.includes(h.key));
    }), p = A(() => i.value.some((f) => f.key === "download")), s = A(() => i.value.some((f) => f.key === "upload"));
    function d(f) {
      var k, _;
      (k = e.onClick) == null || k.call(e, f);
      const h = i.value.find((C) => C.key === f);
      h && ((_ = h.onClick) == null || _.call(h, h));
    }
    function m(f) {
      return typeof f.subItem == "string" && (o == null ? void 0 : o[f.subItem]) || f.subItem;
    }
    return (f, h) => {
      const k = H("ElButton"), _ = H("el-menu-item"), C = H("el-sub-menu"), b = H("el-menu");
      return c(), I(b, {
        ellipsis: !1,
        mode: "horizontal",
        class: "uni-table-more uni-table-more-main",
        "popper-class": "uni-table-more uni-table-more-popper"
      }, {
        default: g(() => [
          u(C, { index: "1" }, {
            title: g(() => [
              u(k, null, {
                default: g(() => [
                  Uo,
                  u(r(Z), { style: { transform: "rotate(90deg)" } }, {
                    default: g(() => [
                      u(r(mn))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: g(() => {
              var y;
              return [
                (c(!0), L(V, null, ne(a.value, (w) => (c(), L(V, null, [
                  w.subItem ? (c(), I(C, {
                    key: 0,
                    disabled: w.disabled,
                    index: `1-1-${w.key}`
                  }, {
                    title: g(() => {
                      var x, B;
                      return [
                        (x = r(o)) != null && x[w.key] ? (c(), I(te((B = r(o)) == null ? void 0 : B[w.key]), { key: 0 })) : (c(), L(V, { key: 1 }, [
                          w.icon ? (c(), I(r(Z), { key: 0 }, {
                            default: g(() => [
                              (c(), I(te(w.icon)))
                            ]),
                            _: 2
                          }, 1024)) : F("", !0),
                          E(" " + Y(w.key), 1)
                        ], 64))
                      ];
                    }),
                    default: g(() => [
                      u(_, {
                        index: `1-1-${w.key}-1`,
                        style: { height: "auto" },
                        class: "uni-table-more-l3"
                      }, {
                        default: g(() => [
                          (c(), I(te(m(w))))
                        ]),
                        _: 2
                      }, 1032, ["index"])
                    ]),
                    _: 2
                  }, 1032, ["disabled", "index"])) : (c(), I(_, {
                    key: 1,
                    index: `1-1-${w.key}`,
                    disabled: w.disabled,
                    onClick: () => d(w.key)
                  }, {
                    default: g(() => {
                      var x, B;
                      return [
                        (x = r(o)) != null && x[w.key] ? (c(), I(te((B = r(o)) == null ? void 0 : B[w.key]), { key: 0 })) : (c(), L(V, { key: 1 }, [
                          w.icon ? (c(), I(r(Z), { key: 0 }, {
                            default: g(() => [
                              (c(), I(te(w.icon)))
                            ]),
                            _: 2
                          }, 1024)) : F("", !0),
                          E(" " + Y(w.key), 1)
                        ], 64))
                      ];
                    }),
                    _: 2
                  }, 1032, ["index", "disabled", "onClick"]))
                ], 64))), 256)),
                p.value || s.value ? (c(), I(_, {
                  key: 0,
                  index: "1-2",
                  disabled: ""
                }, {
                  default: g(() => [
                    E("导入导出")
                  ]),
                  _: 1
                })) : F("", !0),
                p.value ? (c(), I(_, {
                  key: 1,
                  index: "1-3",
                  onClick: h[0] || (h[0] = () => d("download"))
                }, {
                  default: g(() => [
                    u(r(Z), null, {
                      default: g(() => [
                        u(r(Ie))
                      ]),
                      _: 1
                    }),
                    zo
                  ]),
                  _: 1
                })) : F("", !0),
                s.value ? (c(), I(_, {
                  key: 2,
                  index: "1-4",
                  onClick: h[1] || (h[1] = () => d("upload"))
                }, {
                  default: g(() => [
                    u(r(Z), null, {
                      default: g(() => [
                        u(r($n))
                      ]),
                      _: 1
                    }),
                    Ho
                  ]),
                  _: 1
                })) : F("", !0),
                u(_, {
                  index: "1-5",
                  disabled: ""
                }, {
                  default: g(() => [
                    E("列表设置")
                  ]),
                  _: 1
                }),
                u(C, { index: "1-6" }, {
                  title: g(() => [
                    E("自定义列显示")
                  ]),
                  default: g(() => [
                    u(_, {
                      index: "1-6-1",
                      style: { height: "auto" },
                      class: "uni-table-more-l3"
                    }, {
                      default: g(() => [
                        $("div", {
                          onClick: h[2] || (h[2] = Xe(() => {
                          }, ["stop"]))
                        }, [
                          u(Fo)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                u(_, {
                  index: "1-8",
                  onClick: h[3] || (h[3] = () => d("uni_fullpage"))
                }, {
                  default: g(() => {
                    var w;
                    return [
                      Do,
                      u(r(ie), {
                        modelValue: (w = r(l)) == null ? void 0 : w.state.fullpage
                      }, null, 8, ["modelValue"])
                    ];
                  }),
                  _: 1
                }),
                (y = r(o)) != null && y.filter_form ? (c(), I(_, {
                  key: 3,
                  index: "1-9",
                  onClick: h[4] || (h[4] = () => d("uni_filter"))
                }, {
                  default: g(() => {
                    var w;
                    return [
                      Vo,
                      u(r(ie), {
                        modelValue: (w = r(t)) == null ? void 0 : w.filterForm
                      }, null, 8, ["modelValue"])
                    ];
                  }),
                  _: 1
                })) : F("", !0)
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), Po = {
  key: 1,
  class: "uni-table-filter-form"
}, No = { class: "uni-el-table" }, Ko = {
  key: 2,
  class: "uni-table-pagination"
}, ml = /* @__PURE__ */ S({
  __name: "UniTable",
  props: {
    moreOptions: {},
    tableApi: {},
    columns: {},
    paginationAttrs: {},
    cacheKey: {},
    hiddenBar: { type: Boolean },
    title: {},
    hiddenPagination: { type: Boolean },
    formatBarItems: { type: Function },
    tableRef: { type: Function },
    onBarClick: { type: Function }
  },
  setup(n, { expose: e }) {
    const t = j(), l = j(), o = n, i = ae(), a = oe(), p = io(o, i), s = ro(o, p), { columns: d, components: m } = s;
    ao(o, t);
    const f = A(O), h = A(x), k = A(b), _ = lt();
    ye("columnsApi", s), ye("tableState", p), ye("fullscreenApi", _), ye("tableSlots", a);
    const C = S({
      render() {
        return Q(Tt, k.value, { ...a, default: () => m.value });
      }
    });
    e({
      get getSelectionRows() {
        var T;
        return (T = l.value) == null ? void 0 : T.getSelectionRows;
      },
      tableExpose(T) {
        var v;
        return (v = l.value) == null ? void 0 : v[T];
      },
      get tableRef() {
        return l.value;
      },
      get $el() {
        return t.value;
      }
    });
    function b() {
      const { tableData: T } = o.tableApi;
      return {
        ...w(),
        border: !0,
        data: T.rows,
        ...i || {},
        stripe: p.stripe,
        size: p.size,
        onHeaderDragend() {
          y(...arguments);
          const v = o.onHeaderDragend;
          typeof v == "function" && v(...arguments);
        },
        ref(v) {
          var R;
          l.value = v, (R = o.tableRef) == null || R.call(o, v);
        }
      };
    }
    function y(...T) {
      const [v, R, P] = T, { level: J, no: G, rawColumnKey: M } = P || {};
      function W(K, X = 1) {
        if (J === X) {
          if (K[G] && K[G].key === M)
            return K[G].width = v, !0;
        } else
          K.some((me) => {
            if (me.subset && me.subset.length)
              return W(me.subset, X + 1);
          });
      }
      W(d.value);
    }
    function w() {
      const T = {}, v = "table_";
      let R;
      for (R in z)
        R.startsWith(v) && (T[R.slice(v.length)] = z[R]);
      return T;
    }
    function x() {
      const { tableData: T, onSizeChange: v, onCurrentChange: R } = o.tableApi;
      return {
        currentPage: T.current,
        pageSize: T.size,
        layout: "total, sizes, prev, pager, next, jumper",
        total: T.total,
        onSizeChange: v,
        onCurrentChange: R,
        pageSizes: [10, 20, 50, 100],
        background: !0,
        ...o.paginationAttrs || {}
      };
    }
    async function B(T) {
      var v;
      (v = o.onBarClick) == null || v.call(o, T);
    }
    async function U(T) {
      var v;
      T === "uni_reload" ? await ((v = o.tableApi) == null ? void 0 : v.onSearch()) : T === "uni_density" ? p.size = p.size === "default" ? "large" : p.size === "large" ? "small" : "default" : T === "uni_stripe" ? p.stripe = !p.stripe : T === "uni_fullpage" ? await _.onFullpage(!_.state.fullpage) : T === "uni_cache" ? p.cache = !p.cache : T === "uni_filter" ? p.filterForm = !p.filterForm : T === "uni_fullscreen" && await _.onFullscreen(!_.state.fullscreen);
    }
    function O() {
      let T = [{ key: "uni_title", position: "left" }];
      const v = [{ key: "uni_more", position: "right" }];
      return Object.keys(a).forEach((R) => {
        T.some((P) => P.key === R) || (R.startsWith("bar_left") && T.push({ key: R, position: "left" }), R.startsWith("bar_right") && T.push({ key: R, position: "right" }));
      }), T.push(...v), typeof o.formatBarItems == "function" && (T = o.formatBarItems(T)), T;
    }
    return (T, v) => (c(), L("div", {
      class: ee(["uni-table", { "uni-table-fullpage": r(_).state.fullpage || r(_).state.fullscreen }]),
      ref_key: "uniTableRef",
      ref: t
    }, [
      T.hiddenBar ? F("", !0) : (c(), I(po, {
        key: 0,
        items: f.value,
        onBtnsClick: B,
        slots: r(a)
      }, {
        uni_title: g(() => [
          T.title ? (c(), I(r(ze), {
            key: 0,
            title: T.title
          }, null, 8, ["title"])) : F("", !0)
        ]),
        uni_more: g(() => [
          u(jo, {
            onClick: U,
            options: T.moreOptions
          }, null, 8, ["options"])
        ]),
        _: 1
      }, 8, ["items", "slots"])),
      r(a).filter_form && r(p).filterForm ? (c(), L("div", Po, [
        D(T.$slots, "filter_form")
      ])) : F("", !0),
      $("div", No, [
        u(r(C))
      ]),
      T.hiddenPagination ? F("", !0) : (c(), L("div", Ko, [
        u(r(St), de($e(h.value)), null, 16)
      ]))
    ], 2));
  }
}), Go = {
  class: "uni-top-progress",
  style: { position: "fixed", top: "0", left: "0", right: "0", "z-index": "9999", padding: "2px 0", "background-color": "#fff" }
}, _l = /* @__PURE__ */ S({
  __name: "UniTopProgress",
  props: {
    show: { type: Boolean }
  },
  setup(n) {
    const e = n, t = fe(0), l = fe();
    q(
      () => e.show,
      (i) => {
        i === !0 ? (t.value = 0, o()) : clearTimeout(l.value);
      },
      { immediate: !0 }
    );
    function o() {
      let i = 30;
      t.value >= 60 && (i = 10), t.value >= 90 && (i = 1), t.value >= 95 && (i = 0.01), !(t.value >= 99) && (l.value = setTimeout(() => {
        t.value += i, o();
      }, 50));
    }
    return (i, a) => ft((c(), L("div", Go, [
      u(r(It), {
        percentage: t.value,
        "show-text": !1,
        "stroke-width": 2
      }, null, 8, ["percentage"])
    ], 512)), [
      [pt, i.show]
    ]);
  }
}), Wo = /* @__PURE__ */ S({
  inheritAttrs: !1,
  __name: "UniSelect",
  props: {
    options: {}
  },
  setup(n) {
    const e = n, t = oe(), l = ae(), o = A(p), i = S({
      render() {
        return Q(xt, o.value, {
          ...t,
          default() {
            const s = e.options || [];
            return s.length ? s.map((d) => Q(a, d)) : t.default;
          }
        });
      }
    }), a = S({
      props: ["option"],
      render() {
        const s = this.$props.option || {};
        return Q(Rt, { ...s, slots: void 0 }, { ...s.slots || {} });
      }
    });
    function p() {
      return { ...l };
    }
    return (s, d) => (c(), I(r(i)));
  }
}), Je = /* @__PURE__ */ S({
  inheritAttrs: !1,
  __name: "UniRadioGroup",
  props: {
    options: {}
  },
  setup(n) {
    const e = n, t = oe(), l = ae(), o = A(p), i = S({
      render() {
        return Q(At, o.value, {
          ...t,
          default() {
            const s = e.options || [];
            return s.length ? s.map((d) => Q(a, d)) : t.default;
          }
        });
      }
    }), a = S({
      props: ["option"],
      render() {
        const s = this.$props.option || {};
        return Q(Bt, { ...s, slots: void 0 }, { ...s.slots || {} });
      }
    });
    function p() {
      return { ...l };
    }
    return (s, d) => (c(), I(r(i)));
  }
}), hl = /* @__PURE__ */ S({
  inheritAttrs: !1,
  __name: "UniCheckboxGroup",
  props: {
    options: {}
  },
  setup(n) {
    const e = n, t = oe(), l = ae(), o = A(p), i = S({
      render() {
        return Q(Et, o.value, {
          ...t,
          default() {
            const s = e.options || [];
            return s.length ? s.map((d) => Q(a, d)) : t.default;
          }
        });
      }
    }), a = S({
      props: ["option"],
      render() {
        const s = this.$props.option || {};
        return Q(Oe, { ...s, slots: void 0 }, { ...s.slots || {} });
      }
    });
    function p() {
      return { ...l };
    }
    return (s, d) => (c(), I(r(i)));
  }
}), qo = {
  class: "uni-global-setting"
}, Jo = "--el-switch-on-color: var(--el-bg-color); --el-switch-off-color: var(--el-color-primary)", gl = /* @__PURE__ */ S({
  __name: "UniGlobalSetting",
  props: {
    defaultPrimaryColors: {},
    formatItems: {
      type: Function
    }
  },
  setup(n) {
    const e = n, t = A(() => {
      const a = Ae.map((p) => {
        const s = p.join(",");
        return {
          value: s,
          label: s
        };
      });
      return a.unshift({
        value: "-1",
        label: "关闭"
      }, {
        value: "0",
        label: "随机"
      }), a;
    }), l = [{
      value: "small",
      label: "紧凑"
    }, {
      value: "default",
      label: "默认"
    }, {
      value: "large",
      label: "宽松"
    }], o = A(() => {
      var p;
      let a = [{
        key: "layoutTitle",
        component: () => u(be, {
          "border-style": "dashed"
        }, {
          default: () => [E(" 主题/布局 ")]
        })
      }, {
        key: "primary",
        label: "主题色",
        component: () => u(Mt, {
          pointer: e.defaultPrimaryColors
        }, null)
      }, {
        key: "dark",
        label: "暗黑模式",
        component: () => u(H("el-switch"), {
          style: Jo,
          inlinePrompt: !0,
          activeIcon: fn,
          inactiveIcon: kn
        }, null)
      }, {
        key: "topMenu",
        label: "顶部菜单",
        component: () => u(ie, null, null)
      }, {
        key: "showTags",
        label: "显示标签栏",
        component: () => u(ie, null, null)
      }, {
        key: "maxTags",
        label: "标签最多",
        component: () => u(Ft, {
          precision: 0,
          min: 0
        }, null)
      }, {
        key: "ani",
        label: "路由切换动效",
        component: () => u(Wo, {
          options: t.value
        }, null)
      }, {
        key: "uniTableTitle",
        component: () => u(be, {
          "border-style": "dashed"
        }, {
          default: () => [E(" 表格 ")]
        })
      }, {
        key: "uniTable.stripe",
        label: "斑马纹",
        component: () => u(ie, null, null)
      }, {
        key: "uniTable.size",
        label: "密度",
        component: () => u(Je, {
          options: l
        }, null)
      }, {
        key: "uniTable.filterForm",
        label: "展示查询表单",
        component: () => u(ie, null, null)
      }, {
        key: "uniFormTitle",
        component: () => u(be, {
          "border-style": "dashed"
        }, {
          default: () => [E(" 表单 ")]
        })
      }, {
        key: "uniForm.size",
        label: "密度",
        component: () => u(Je, {
          options: l
        }, null)
      }, {
        key: "cacheTitle",
        component: () => u(be, {
          "border-style": "dashed"
        }, {
          default: () => [E(" 缓存 ")]
        })
      }, {
        key: "userCache",
        label: "用户缓存",
        component: () => u(le, {
          type: "danger",
          onClick: () => i()
        }, {
          default: () => [E("清除")]
        })
      }];
      return a = ((p = e.formatItems) == null ? void 0 : p.call(e, a)) || a, a;
    });
    function i() {
      ce(pe.uniStorageKey), ce(pe.uniStorageKey, !0), location.reload();
    }
    return (a, p) => (c(), L("div", qo, [u(r(Ot), {
      type: "warning"
    }, {
      default: g(() => [E("有些配置需要刷新界面才会生效")]),
      _: 1
    }), u(r(so), {
      lableWidth: "auto",
      model: r(z),
      items: o.value
    }, null, 8, ["model", "items"])]));
  }
}), vl = /* @__PURE__ */ S({
  __name: "UniForceFlush",
  props: {
    modelValue: {}
  },
  setup(n) {
    const e = n, t = fe(!0);
    return q(
      () => e.modelValue,
      () => {
        t.value = !1, mt().then(() => {
          t.value = !0;
        });
      }
    ), (l, o) => t.value ? D(l.$slots, "default", { key: 0 }) : F("", !0);
  }
});
function Ze(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !we(n);
}
const yl = /* @__PURE__ */ S({
  __name: "UniOperateBtns",
  props: {
    options: {},
    max: {},
    attrs: {},
    clickParams: {},
    onClick: {
      type: Function
    }
  },
  setup(n) {
    const e = n, t = oe(), l = A(() => Math.floor(e.max !== void 0 && e.max > 0 ? e.max : 3)), o = A(() => e.options || []), i = A(() => ({
      link: !0,
      type: "primary",
      ...e.attrs || {}
    }));
    async function a(s, d, m) {
      var f, h;
      try {
        d.confirmText && s === "b2" && await Ut.confirm(d.confirmText, "提示");
        const k = {
          ...e.clickParams || {},
          item: d,
          event: m
        };
        (f = d.onClick) == null || f.call(d, k), (h = e.onClick) == null || h.call(e, k);
      } catch (k) {
        console.error(k);
      }
    }
    const p = /* @__PURE__ */ S({
      setup() {
        function s(m) {
          return typeof m.component == "string" ? m.component : m.key;
        }
        function d(m) {
          return (...f) => {
            var C;
            const h = s(m), k = typeof m.component == "function" ? m.component : () => h;
            return (((C = m.slots) == null ? void 0 : C.default) || t[m.key] || k)(...f);
          };
        }
        return () => {
          const m = l.value, f = o.value.filter((_) => _.hidden !== !0), h = (f.length > m ? f.slice(0, m - 1) : f).map((_) => _.confirmText ? u(H("el-popconfirm"), {
            title: _.confirmText,
            onConfirm: (C) => a("b1", _, C)
          }, {
            reference() {
              return u(le, re(i.value, {
                ..._,
                onClick: void 0
              }, {
                key: _.key
              }), {
                ..._.slots,
                default: d(_)
              });
            }
          }) : u(le, re(i.value, {
            ..._,
            onClick: void 0
          }, {
            key: _.key,
            onClick: (C) => a("b1", _, C)
          }), {
            ..._.slots,
            default: d(_)
          })), k = f.slice(m - 1);
          return k.length > 1 && (t.more ? t.more({
            options: k,
            all: o.value,
            showOPtions: f
          }) : h.push(u(he, null, {
            default() {
              return u(le, i.value, {
                default: () => [E("更多"), u(Z, null, {
                  default: () => [u(Me, null, null)]
                })]
              });
            },
            dropdown() {
              let _;
              return u(ge, null, Ze(_ = k.map((C) => {
                let b;
                return u(N, {
                  key: C.key,
                  onClick: (y) => a("b2", C, y)
                }, Ze(b = s(C)) ? b : {
                  default: () => [b]
                });
              })) ? _ : {
                default: () => [_]
              });
            }
          }))), u("div", {
            class: "uni-operate-btns"
          }, [h.map((_) => u("div", {
            class: "uni-operate-item"
          }, [_]))]);
        };
      }
    });
    return (s, d) => (c(), I(r(p)));
  }
}), bl = /* @__PURE__ */ S({
  __name: "UniOperateContent",
  props: {
    size: {},
    max: {}
  },
  setup(n) {
    const e = n, t = oe(), l = A(o);
    function o() {
      var d;
      const i = e.max && e.max > 0 ? e.max : 3, a = (((d = t.default) == null ? void 0 : d.call(t)) || []).filter((m) => m.type !== _t).filter((m) => !(m.dirs || []).some((f) => {
        var h;
        return ((h = f.dir) == null ? void 0 : h.name) === "show" && f.value === !1;
      })), p = a.length > i ? a.slice(0, i - 1) : a, s = a.length > i ? a.slice(i - 1) : [];
      return { ns1: p, ns2: s };
    }
    return (i, a) => l.value.ns1.length ? (c(), I(r(zt), {
      key: 0,
      size: e.size
    }, {
      default: g(() => [
        (c(), I(te(() => l.value.ns1))),
        l.value.ns2.length ? (c(), I(r(he), { key: 0 }, {
          dropdown: g(() => [
            u(r(ge), null, {
              default: g(() => [
                (c(!0), L(V, null, ne(l.value.ns2, (p) => (c(), I(r(N), {
                  onClick: a[0] || (a[0] = Xe(() => {
                  }, ["stop", "prevent"]))
                }, {
                  default: g(() => [
                    $("div", null, [
                      (c(), I(te(() => p)))
                    ])
                  ]),
                  _: 2
                }, 1024))), 256))
              ]),
              _: 1
            })
          ]),
          default: g(() => [
            u(r(le), null, {
              default: g(() => [
                E(" 更多 "),
                u(r(Z), null, {
                  default: g(() => [
                    u(r(Me))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : F("", !0)
      ]),
      _: 1
    }, 8, ["size"])) : F("", !0);
  }
}), kl = /* @__PURE__ */ S({
  __name: "UniDialog",
  props: {
    dialogRef: { type: Function },
    title: {},
    showClose: {}
  },
  setup(n) {
    const e = n, t = j(), l = ae(), o = A(i);
    function i() {
      const a = Fe(l);
      return {
        ...l,
        ref(p) {
          var s;
          t.value = p, (s = e.dialogRef) == null || s.call(e, p);
        },
        modalClass: `uni-dialog-overlay ${a.modalClass || ""}`,
        showClose: !1
      };
    }
    return (a, p) => (c(), I(r(Ht), de($e(o.value)), {
      header: g((s) => [
        a.$slots.header ? D(a.$slots, "header", de(re({ key: 0 }, s))) : (c(), I(r(ze), {
          key: 1,
          title: e.title || "提示",
          id: s.titleId,
          class: ee(s.titleClass)
        }, {
          default: g(() => [
            D(a.$slots, "btns"),
            e.showClose !== !1 ? (c(), I(r(le), {
              key: 0,
              class: "uni-drawer-close",
              icon: r(ue),
              onClick: s.close
            }, null, 8, ["icon", "onClick"])) : F("", !0)
          ]),
          _: 2
        }, 1032, ["title", "id", "class"]))
      ]),
      default: g(() => [
        D(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wl = /* @__PURE__ */ S({
  __name: "UniDrawer",
  props: {
    type: {},
    drawerRef: { type: Function },
    btnsSpace: {},
    title: {},
    showClose: {}
  },
  setup(n) {
    const e = n, t = {
      modal: "uni-drawer-overlay-modal",
      drawer: "uni-drawer-overlay-drawer",
      source: "uni-drawer-overlay-source"
    }, l = j(), o = fe(s() || "drawer"), i = ae(), a = A(p);
    q(
      () => e.type,
      () => {
        const m = s();
        m && (o.value = m);
      }
    );
    function p() {
      const m = Fe(i);
      return {
        ...i,
        ref(f) {
          var h;
          l.value = f, (h = e.drawerRef) == null || h.call(e, f);
        },
        modalClass: `uni-drawer-overlay ${t[o.value]} ${m.modalClass || ""}`,
        showClose: !1
      };
    }
    function s() {
      return e.type && e.type in t ? e.type : void 0;
    }
    function d() {
      o.value === "drawer" ? o.value = "modal" : (o.value = "modal") && (o.value = "drawer");
    }
    return (m, f) => (c(), I(r(Dt), de($e(a.value)), {
      header: g((h) => [
        m.$slots.header ? D(m.$slots, "header", de(re({ key: 0 }, h))) : (c(), I(r(ze), {
          key: 1,
          title: m.title || "提示",
          id: h.titleId,
          class: ee(h.titleClass)
        }, {
          default: g(() => [
            D(m.$slots, "btns"),
            m.type !== "source" ? (c(), I(r(le), {
              key: 0,
              class: "uni-drawer-full",
              icon: r(xe),
              onClick: d
            }, null, 8, ["icon"])) : F("", !0),
            m.showClose !== !1 ? (c(), I(r(le), {
              key: 1,
              class: "uni-drawer-close",
              icon: r(ue),
              onClick: h.close
            }, null, 8, ["icon", "onClick"])) : F("", !0)
          ]),
          _: 2
        }, 1032, ["title", "id", "class"]))
      ]),
      default: g(() => [
        D(m.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cl = /* @__PURE__ */ S({
  inheritAttrs: !1,
  __name: "UniTopTabs",
  setup(n) {
    const e = ae(), t = j(), l = j(), o = j(), i = oe(), a = A(s), p = /* @__PURE__ */ S({
      setup() {
        return () => u(Vt, a.value, {
          ...i
        });
      }
    });
    function s() {
      return {
        ...e,
        ref(d) {
          l.value = d, o.value = t.value instanceof HTMLElement ? t.value.querySelector(".el-tabs__header") : null;
        },
        tabPosition: "top",
        editable: !1
      };
    }
    return (d, m) => (c(), L("div", {
      class: "uni-top-tabs",
      ref_key: "topTabsRef",
      ref: t
    }, [u(r(p)), o.value ? (c(), I(ht, {
      key: 0,
      to: o.value
    }, [D(d.$slots, "btns")], 8, ["to"])) : F("", !0)], 512));
  }
});
export {
  Wt as LayoutHeader,
  Ye as LayoutHeaderItem,
  pl as LayoutIndex,
  Tn as LayoutMenu,
  En as LayoutTags,
  hl as UniCheckboxGroup,
  kl as UniDialog,
  wl as UniDrawer,
  vl as UniForceFlush,
  so as UniForm,
  gl as UniGlobalSetting,
  yl as UniOperateBtns,
  bl as UniOperateContent,
  Je as UniRadioGroup,
  Wo as UniSelect,
  ml as UniTable,
  ze as UniTitleBar,
  _l as UniTopProgress,
  Cl as UniTopTabs,
  dl as addTags,
  Ae as anis,
  On as centerLineToHump,
  el as clipboardWriteText,
  Re as cloneJson,
  Ke as cssTextToObj,
  Un as darken,
  tl as downloadFile,
  rl as getAniClass,
  Ge as getElePrimaryColor,
  ol as getType,
  ll as getUrlQuery,
  sl as getUrlQueryArray,
  al as getUrlQueryHasArray,
  Ue as getUrlQueryToArray,
  nt as hexToRgb,
  Vn as initGlobalState,
  zn as lighten,
  Fn as objToCssText,
  Mn as randomNum,
  fl as removeTags,
  ot as rgbToHex,
  ce as rmStorageL,
  cl as rmStorageLAll,
  Yo as sleep,
  nl as splitNumber,
  _e as storageL,
  qe as switchDarkMode,
  jn as switchDarkModeAni,
  Pn as switchRootPrimaryCss,
  Fe as toHumpObj,
  Ne as toggleFullScreen,
  Dn as uniCreateKeyStorage,
  st as uniCreateStorage,
  z as uniGlobalState,
  We as uniGlobalStateCache,
  Ce as uniStorage,
  Hn as uniStorageClear,
  pe as uniStorageKeys,
  ro as useColumns,
  Zn as useFormItemsLine,
  lt as useFullscreen,
  ao as useLoading,
  ul as useModify,
  il as useTable,
  io as useTableState
};
