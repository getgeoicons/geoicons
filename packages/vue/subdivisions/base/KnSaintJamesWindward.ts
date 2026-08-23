// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.83 10.7 1.545 5.985a.6.6 0 0 1-.023-.78l.618-.769a.6.6 0 0 0 .09-.6l-.181-.448a.6.6 0 0 1 .136-.653l.448-.439a.6.6 0 0 1 .663-.12l1.007.445a1 1 0 0 0 .713.036l2.459-.798a1 1 0 0 1 .551-.02l1.199.3a1 1 0 0 0 .425.013l1.258-.234a1.5 1.5 0 0 1 1.376.457l2.345 2.536a1 1 0 0 0 .63.316l2.127.222a1 1 0 0 1 .687.383l3.042 3.93a1 1 0 0 1 .207.677l-.204 3.168c-.014.21.006.422.059.627l1.501 5.837c.08.311.084.637.012.95l-.073.316a1 1 0 0 1-1.115.765l-.251-.035a1 1 0 0 1-.55-.268l-.673-.643a2 2 0 0 0-.883-.491l-9.693-2.501a.6.6 0 0 1-.399-.337l-3.05-6.862a1 1 0 0 0-.173-.267Z\"/>";

export const KnSaintJamesWindward = /*#__PURE__*/ defineComponent({
  name: 'GeoKnSaintJamesWindward',
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
