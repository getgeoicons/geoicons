// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.891 9.832a1 1 0 0 0 .044-.296l-.039-7.886a.3.3 0 0 0-.416-.275L13.374 4.79a1 1 0 0 1-.822-.02L8.657 2.897a1 1 0 0 0-.469-.099l-5.753.203a.3.3 0 0 0-.29.298l-.08 15.022a.3.3 0 0 0 .262.3l1.288.167a1 1 0 0 1 .807.64l.223.595a1 1 0 0 0 .531.563l1.953.864a1 1 0 0 0 .579.07l3.001-.53a.6.6 0 0 1 .578.22l.985 1.26a.6.6 0 0 0 .657.2l.682-.22a.6.6 0 0 0 .37-.34l1.159-2.789a.6.6 0 0 1 .212-.263l4.44-3.074a1 1 0 0 0 .386-.53z\"/>";

export const UsOhio = /*#__PURE__*/ defineComponent({
  name: 'GeoUsOhio',
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
