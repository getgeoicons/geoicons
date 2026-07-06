// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.594 17.36-.028-5.866a.5.5 0 0 1 .493-.502l1.11-.016a.5.5 0 0 0 .494-.495l.08-7.614a.5.5 0 0 1 .424-.489l4.14-.646a.5.5 0 0 1 .476.193l.457.606a.5.5 0 0 0 .609.153l2.755-1.272a.5.5 0 0 1 .665.248l1.527 3.39a.5.5 0 0 0 .167.203l3.058 2.16a.5.5 0 0 1 .188.257l.643 2.026a.5.5 0 0 0 .41.344l1.78.24a.5.5 0 0 1 .263.12l1.131.993-2.884.971a.5.5 0 0 0-.16.09l-2.548 2.123a.5.5 0 0 0-.17.285l-.23 1.13a.5.5 0 0 1-.245.337l-1.693.946a.5.5 0 0 0-.23.28l-.59 1.793a.5.5 0 0 1-.453.343l-2.186.098a.5.5 0 0 1-.309-.09l-1.413-.983A.5.5 0 0 0 9 18.628l-.716.056a.5.5 0 0 0-.39.243L6.13 21.891a.5.5 0 0 1-.313.23l-2.444.587a.25.25 0 0 1-.303-.295l.42-1.993a.5.5 0 0 0-.085-.396L1.69 17.651a.5.5 0 0 1-.095-.29Z\"/>";

export const Bw = /*#__PURE__*/ defineComponent({
  name: 'GeoBw',
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
