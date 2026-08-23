// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.607 1.908a.3.3 0 0 0-.298.295l-.128 7.594a1 1 0 0 1-.999.984l-4.982.003 2.575 2.282a2 2 0 0 1 .623 1.05l.187.816a1 1 0 0 0 .46.634l1.068.64a1 1 0 0 0 1.39-.373l.318-.576a.6.6 0 0 1 .568-.308l1.466.105a.6.6 0 0 1 .476.298l3.226 5.584a1 1 0 0 0 .623.47l1.843.46a.6.6 0 0 0 .725-.74l-.04-.145a3 3 0 0 1 .496-2.593l.171-.227a4 4 0 0 1 1.38-1.16l3.116-1.588a1 1 0 0 0 .532-.723l.288-1.697a2 2 0 0 0-.177-1.22l-.49-.99a2 2 0 0 1-.205-.926l.038-1.838a.6.6 0 0 0-.418-.584l-1.103-.352a3 3 0 0 0-1.233-.125l-1.821.196a3 3 0 0 1-1.096-.085l-3.596-.962a.6.6 0 0 1-.444-.595l.08-3.318a.3.3 0 0 0-.301-.308z\"/>";

export const UsTexas = /*#__PURE__*/ defineComponent({
  name: 'GeoUsTexas',
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
