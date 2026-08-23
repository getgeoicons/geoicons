// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M11.194 1.219a1 1 0 0 0-.404.046L5.173 3.109a1 1 0 0 0-.477.335L2.755 5.93a.6.6 0 0 0 .045.79l.57.58a.6.6 0 0 1 .128.646L2.02 11.594a1 1 0 0 0-.022.692l.153.459a1 1 0 0 0 1.07.676l2.043-.25a1 1 0 0 1 .562.095l1.246.61a1 1 0 0 1 .56.876l.063 2.72a1 1 0 0 0 .506.846l1.163.66a1 1 0 0 1 .477.625l.166.663a1 1 0 0 0 .344.535l2.191 1.763a1 1 0 0 0 .672.22l7.781-.347a1 1 0 0 0 .942-1.16l-1.147-7.026-1.94-6.925a1 1 0 0 1-.037-.226l-.201-4.679a.6.6 0 0 0-.545-.571z\"/>";

export const JmSaintElizabeth = /*#__PURE__*/ defineComponent({
  name: 'GeoJmSaintElizabeth',
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
