// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.565 1.418a1 1 0 0 0-.294-.07l-1.613-.128a1 1 0 0 0-.48.08L4.423 3.806a.6.6 0 0 0-.158 1l1.578 1.392a1 1 0 0 0 .282.175l2.751 1.13a1 1 0 0 1 .62.964l-.228 5.883a1 1 0 0 1-.71.918l-2.424.73a1 1 0 0 0-.707.86l-.378 3.85a1 1 0 0 0 .208.715l.738.94a1 1 0 0 0 .898.375l5.486-.614a1 1 0 0 1 .171-.004l5.962.36a.6.6 0 0 0 .636-.605l-.11-11.697a.6.6 0 0 1 .55-.603l.192-.017a.6.6 0 0 0 .538-.71l-.394-2.056a1 1 0 0 1 .02-.46l.246-.873a1 1 0 0 0-.59-1.199z\"/>";

export const TtPenalDebe = /*#__PURE__*/ defineComponent({
  name: 'GeoTtPenalDebe',
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
