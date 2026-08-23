// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.563 9.369a.6.6 0 0 0-.52-.472l-3.21-.356a1.97 1.97 0 0 1-1.65-1.328l-.177-.524a1 1 0 0 0-.445-.544l-1.467-.854a4 4 0 0 0-.917-.39l-1.462-.415a3 3 0 0 1-.974-.482L8.27 2.159a3 3 0 0 0-1.516-.583l-3.447-.322a1 1 0 0 0-.908.415l-.293.412a1 1 0 0 0-.185.605l.032 1.297a2 2 0 0 0 .122.638L3.74 9.168a3 3 0 0 1 .07 1.848l-.45 1.591a2 2 0 0 0 .153 1.473l1.785 3.404q.298.568.47 1.188l1.002 3.63a.55.55 0 0 0 .939.222l2.887-3.19q.111-.122.255-.203l2.3-1.282a2 2 0 0 0 .808-.837l1.357-2.658q.134-.261.336-.473l1.424-1.489a2 2 0 0 1 1.476-.617l2.781.043a.6.6 0 0 0 .596-.725z\"/>";

export const DmSaintPeter = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintPeter',
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
