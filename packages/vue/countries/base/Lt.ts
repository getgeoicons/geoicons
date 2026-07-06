// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.918 9.948.104 1.48a.5.5 0 0 0 .284.416l2.337 1.115a.5.5 0 0 0 .239.048l1.627-.078a.5.5 0 0 1 .412.184l.808.994a.5.5 0 0 1 .054.548l-.536 1.02a.5.5 0 0 0-.05.324l.186.989a.5.5 0 0 0 .328.38L9.544 18a.5.5 0 0 1 .317.333l.372 1.27a.5.5 0 0 0 .519.358l1.442-.113a.5.5 0 0 1 .23.036l.721.297a.5.5 0 0 0 .31.023l.96-.237a.5.5 0 0 0 .353-.324l.21-.613a.5.5 0 0 1 .24-.281l1.459-.762a.5.5 0 0 1 .694.252l.22.537a.5.5 0 0 0 .762.21l.446-.333a.5.5 0 0 0 .058-.75l-.64-.654a.5.5 0 0 1-.133-.452l.494-2.366a.5.5 0 0 1 .133-.248l1.376-1.398a.5.5 0 0 1 .266-.14l1.465-.27a.5.5 0 0 0 .328-.219l.435-.665a.25.25 0 0 0-.18-.385l-.723-.088a.5.5 0 0 1-.41-.663l.334-.95a.5.5 0 0 0-.144-.545l-3.181-2.748a.5.5 0 0 0-.237-.114l-1.583-.29a.5.5 0 0 1-.364-.284l-.502-1.096a.5.5 0 0 0-.758-.19l-.796.608a.5.5 0 0 1-.35.1l-8.309-.784a1 1 0 0 0-.438.057l-1.644.603a.5.5 0 0 0-.157.093L1.54 6.213a.5.5 0 0 0-.167.32l-.159 1.401a.5.5 0 0 0 .031.24l.64 1.626a.5.5 0 0 1 .033.148Z\"/>";

export const Lt = /*#__PURE__*/ defineComponent({
  name: 'GeoLt',
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
