// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.673 2.011a.6.6 0 0 0-.652-.721l-3.216.351a1 1 0 0 0-.779.532l-.461.886a1 1 0 0 0 .312 1.28l1.265.89a1 1 0 0 1 .402 1.035L8 13.22a1 1 0 0 0 .423 1.05l.717.476a1 1 0 0 1 .445.888l-.247 4.473a1 1 0 0 0 .073.433l.673 1.65a.8.8 0 0 0 .635.49l.35.047a.8.8 0 0 0 .808-.409l1.09-1.995a1 1 0 0 0 .03-.9l-.412-.885a.6.6 0 0 1 .505-.852l.892-.058a.6.6 0 0 0 .56-.572l.073-1.595a1 1 0 0 1 .882-.947l.493-.058a.6.6 0 0 0 .467-.864l-1.064-2.128a3 3 0 0 0-.628-.844l-2.03-1.909a.6.6 0 0 1-.146-.658l.324-.817a.8.8 0 0 0-.04-.676l-.663-1.226a1 1 0 0 1-.098-.684z\"/>";

export const SvSanSalvador = /*#__PURE__*/ defineComponent({
  name: 'GeoSvSanSalvador',
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
