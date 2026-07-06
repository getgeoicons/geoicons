// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.314 14.672-.332-.145a1 1 0 0 1-.585-.747l-.14-.817a1 1 0 0 1 .099-.63l.892-1.714a1 1 0 0 1 .161-.227L4.393 8.3a1 1 0 0 1 .57-.3l3.01-.476a.924.924 0 0 1 1.064.82.92.92 0 0 0 .54.75l.94.423a.86.86 0 0 0 1.014-.235.86.86 0 0 1 1.036-.226l.87.423a1 1 0 0 0 .564.092l.673-.086a1 1 0 0 0 .816-.66l.258-.735a.6.6 0 0 1 .532-.4l1.457-.082a.6.6 0 0 1 .57.331l1.574 3.152a1 1 0 0 0 1.446.387l.244-.161 1.229 1-.517.998a1 1 0 0 1-.33.37l-1.2.806a1 1 0 0 1-.256.123l-1.923.606-.21-1.128a1 1 0 0 0-.104-.293l-1.528-2.822a.6.6 0 0 0-.76-.268l-.427.18a.6.6 0 0 0-.286.855l1.046 1.793a.6.6 0 0 1 .057.473l-.616 2.076a.6.6 0 0 1-.55.429l-2.215.095a.6.6 0 0 1-.58-.369l-.267-.644a1 1 0 0 1-.048-.62l.438-1.807-1.933-1.042a1 1 0 0 0-.464-.12l-.483-.005a1 1 0 0 0-.593.187l-1.165.834a1 1 0 0 1-1.129.023l-2.383-1.556.131 3.148-1.724.115a1 1 0 0 1-.467-.082Z\"/>";

export const TheArabWorldWithoutSomalia = /*#__PURE__*/ defineComponent({
  name: 'GeoTheArabWorldWithoutSomalia',
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
