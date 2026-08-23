// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.509 21.586a1 1 0 0 0 1.241-.628l.196-.566a1 1 0 0 1 .609-.615l1.195-.427a2 2 0 0 0 .76-.487l2.882-2.957a1 1 0 0 0 .244-.98l-.326-1.111a1 1 0 0 0-.454-.581l-3.647-2.14a1 1 0 0 1-.399-1.288l.385-.818a1 1 0 0 0 .059-.692l-.404-1.461a1 1 0 0 1 .072-.719l1.068-2.11a.6.6 0 0 0-.114-.698l-.76-.75a1 1 0 0 0-.623-.284l-.672-.054a3 3 0 0 0-1.174.14l-3.415 1.12a1 1 0 0 1-.842-.103l-1.29-.808a1 1 0 0 0-.4-.144l-1.425-.188a1 1 0 0 0-1.083.687L5.585 7.968a3 3 0 0 1-.828 1.298l-.161.148a3 3 0 0 1-1.625.764l-.529.072a1 1 0 0 0-.8.637l-.213.563a2 2 0 0 0-.06 1.23l.093.344a.8.8 0 0 0 .964.568l2.438-.602a4 4 0 0 1 1.171-.111l2.388.127a2 2 0 0 1 1.8 1.39l.4 1.26c.056.175.16.332.298.452l.882.763a1 1 0 0 1 .333.91l-.276 1.778a1 1 0 0 0 .692 1.108z\"/>";

export const NiEsteli = /*#__PURE__*/ defineComponent({
  name: 'GeoNiEsteli',
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
