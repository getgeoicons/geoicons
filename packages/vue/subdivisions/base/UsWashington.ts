// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.483 5.378a.3.3 0 0 0-.297-.301l-15.097-.12a.3.3 0 0 0-.302.309l.062 2.044a1 1 0 0 1-1.217 1.006l-3.693-.82a.6.6 0 0 0-.729.547l-.001.026a.6.6 0 0 0 .039.256l1.266 3.268a7 7 0 0 1 .42 1.671l.294 2.381a.6.6 0 0 0 .515.521l1.866.253a1 1 0 0 1 .853.835l.12.753a1 1 0 0 0 .8.826l.767.146a1 1 0 0 0 .665-.104l.914-.498a1 1 0 0 1 .475-.122l2.955-.01a4 4 0 0 0 1.113-.163l2.332-.686c.358-.106.729-.16 1.102-.163l4.759-.032a.3.3 0 0 0 .296-.336l-.308-2.56z\"/>";

export const UsWashington = /*#__PURE__*/ defineComponent({
  name: 'GeoUsWashington',
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
