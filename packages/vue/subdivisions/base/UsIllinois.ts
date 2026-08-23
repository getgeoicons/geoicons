// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.22 21.825a1 1 0 0 0 1.12.847l1.374-.18a1 1 0 0 0 .652-.368l.768-.963a1 1 0 0 0 .216-.542l.19-2.324a1 1 0 0 1 .214-.54l1.061-1.336a1 1 0 0 0 .217-.63l-.096-11.34q0-.129-.035-.253l-.736-2.726a.3.3 0 0 0-.288-.222l-8.175-.045a.3.3 0 0 0-.244.477l1.386 1.904a1 1 0 0 1 .005 1.17l-.26.365a1 1 0 0 1-.557.385l-1.094.29a1 1 0 0 0-.706.698l-.919 3.284a3 3 0 0 0 .317 2.351l1.36 2.268a1 1 0 0 0 .389.369l1.083.575a1 1 0 0 1 .49 1.166l-.297 1.008a1 1 0 0 0 .34 1.068l1.667 1.315a1 1 0 0 1 .37.64z\"/>";

export const UsIllinois = /*#__PURE__*/ defineComponent({
  name: 'GeoUsIllinois',
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
