// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.845 8.487-.682.897a1 1 0 0 1-.796.394h-.265a.803.803 0 0 0-.709 1.178l.192.363a1 1 0 0 0 .878.532l2.329.013a.6.6 0 0 1 .585.715l-.4 2.038a.6.6 0 0 0 .499.708l.488.075a1 1 0 0 1 .783.633l.551 1.448a1 1 0 0 0 .684.612l2.853.739a1 1 0 0 0 .68-.065l2.212-1.053c.15-.072.28-.18.378-.315l.986-1.355a1 1 0 0 1 1.16-.348l.356.133a1 1 0 0 0 .952-.137l.94-.706a1 1 0 0 0 .322-.414l.524-1.252a1 1 0 0 1 1.113-.596l.21.04a1 1 0 0 0 1.15-.7l.62-2.122a1 1 0 0 0-.925-1.28l-.113-.004a1 1 0 0 1-.93-1.261l.03-.116a1 1 0 0 0-.12-.795l-.297-.472a1 1 0 0 0-.74-.46l-.85-.09a1 1 0 0 0-1.095.853l-.021.146a1 1 0 0 1-.448.699l-.418.27a1 1 0 0 1-1.211-.098l-.167-.15a1 1 0 0 0-1.232-.082l-.68.463a1 1 0 0 0-.215.199l-.58.72a1 1 0 0 1-.695.37l-.836.07a1 1 0 0 1-.832-.331L8.417 6.74a1 1 0 0 0-.308-.234L5.813 5.383a1 1 0 0 0-1.13.175l-.53.506a1 1 0 0 0-.282.957l.15.628a1 1 0 0 1-.176.838Z\"/>";

export const StLawrenceBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoStLawrenceBasin',
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
