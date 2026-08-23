// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.799 6.88a1 1 0 0 0-.257-.671l-2.57-2.859a1 1 0 0 0-1.1-.266l-.415.158a1 1 0 0 1-.823-.052l-3.017-1.6a1 1 0 0 0-.999.037l-2.938 1.84a1 1 0 0 1-.899.083l-4.46-1.764a1 1 0 0 0-.5-.061l-1.292.173a1 1 0 0 0-.577.286L1.89 3.254a1 1 0 0 0-.011 1.399l1.82 1.892a1 1 0 0 0 .463.273l3.7.988a1 1 0 0 1 .614.478l.652 1.165a1 1 0 0 0 .437.412l2.509 1.212a1 1 0 0 1 .552 1.06l-.331 2.063c-.037.227.01.46.129.658l.128.21a.67.67 0 0 0 .81.28.672.672 0 0 1 .909.61l.029.957a2 2 0 0 0 .42 1.167l.803 1.032a1 1 0 0 1-.288 1.48L14 21.303a.528.528 0 0 0 .16.975l1.504.303a1 1 0 0 0 .855-.227l.708-.617a2 2 0 0 1 1.204-.49l2.357-.129a1 1 0 0 0 .512-.175l1.03-.71a1 1 0 0 0 .433-.82z\"/>";

export const CrAlajuela = /*#__PURE__*/ defineComponent({
  name: 'GeoCrAlajuela',
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
