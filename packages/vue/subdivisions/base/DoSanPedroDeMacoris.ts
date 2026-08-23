// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M16.772 10.587a1 1 0 0 0-1.178-.07l-1.263.812a1 1 0 0 0-.457.779l-.076 1.217a1 1 0 0 1-.314.667l-1.28 1.201a.6.6 0 0 1-.942-.157l-2.49-4.728a2 2 0 0 1-.226-1.075l.099-1.38a2 2 0 0 0-.294-1.194l-.234-.38a2 2 0 0 1-.297-1.144l.075-1.61a.569.569 0 0 0-1.03-.358l-2.133 2.97a2 2 0 0 0-.35.85l-.24 1.502a2 2 0 0 1-.412.932l-1.132 1.42a1 1 0 0 0-.176.91l.376 1.258a1 1 0 0 1-.176.908L1.603 15.2a1 1 0 0 0-.105 1.082l.236.454a1 1 0 0 0 .645.51l1.868.467a1 1 0 0 1 .758.979l-.013 1.412a.6.6 0 0 0 .738.589l3.076-.726q.441-.105.894-.107l3.258-.021q.419-.003.827-.092l2.727-.595a1 1 0 0 1 1.01.372l.397.523a1 1 0 0 0 .58.371l2.86.632a.6.6 0 0 0 .721-.68l-.08-.512a2 2 0 0 0-.546-1.087l-.15-.153a1 1 0 0 1-.115-1.257l.477-.71c.19-.281.33-.593.415-.921l.534-2.061a.6.6 0 0 0-.553-.75l-2.29-.108a1 1 0 0 1-.59-.229z\"/>";

export const DoSanPedroDeMacoris = /*#__PURE__*/ defineComponent({
  name: 'GeoDoSanPedroDeMacoris',
  inheritAttrs: false,
  props: {
    size: { type: [Number, String], default: 24 },
    strokeWidth: { type: [Number, String], default: 1 },
  },
  setup(props, { attrs }) {
    // Compliance nudge: warns once if icons render without the GeoiconsLicense plugin.
    // Client-only + deferred inside noteIconRender; no-op during SSR.
    noteIconRender();
    // uid is stable per instance — compute once. Prefer Vue 3.5+ useId()
    // (SSR-safe, cross-app-unique); fall back to the per-instance uid on 3.0–3.4.
    const uid =
      typeof Vue.useId === 'function'
        ? Vue.useId()
        : `geo-${Vue.getCurrentInstance()?.uid ?? 0}`;
    // Read attrs['aria-label'] inside the render fn (not setup) so a reactive
    // aria-label stays in sync — setup runs once, only the render fn re-runs.
    return () => {
      const label = attrs['aria-label'] as string | undefined;
      return h(
        'svg',
        {
          viewBox: '0 0 24 24',
          width: props.size,
          height: props.size,
          stroke: 'currentColor',
          'stroke-width': props.strokeWidth,
          fill: 'none',
          role: label ? 'img' : undefined,
          ...attrs,
          'aria-labelledby': label ? `${uid}-title` : undefined,
          'aria-hidden': label ? undefined : true,
        },
        [
          label ? h('title', { id: `${uid}-title` }, label) : null,
          h('g', { innerHTML: BODY }),
        ],
      );
    };
  },
});
