// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" stroke-opacity=\".86\" d=\"m7.656 7.549-1.245-1.38a.615.615 0 0 1 .549-1.02l1.244.186a1 1 0 0 0 .372-.014l1.98-.457a1 1 0 0 0 .483-.267l.483-.483a1 1 0 0 0 .29-.63l.095-1.235a.726.726 0 0 1 1.414-.17l.213.655c.045.138.12.264.218.37l1.338 1.44a1 1 0 0 0 1.006.282l1.702-.484a.6.6 0 0 1 .755.68l-.112.639a1 1 0 0 1-.142.365L16.881 8.25a1 1 0 0 1-.236.258l-2.518 1.921a1 1 0 0 0-.324.428l-.447 1.132a1 1 0 0 0-.062.493l.5 3.946a1 1 0 0 1-.387.923l-1.599 1.211a1 1 0 0 0-.392.886l.11 1.231a1 1 0 0 1-.153.627l-.763 1.196a.54.54 0 0 1-.985-.184l-.293-1.452a1 1 0 0 0-.534-.697l-.495-.246a1 1 0 0 1-.38-.332l-.85-1.246a1 1 0 0 0-.36-.322l-.883-.463a1 1 0 0 1-.535-.907l.014-.696a1 1 0 0 1 .319-.711l.313-.292a1 1 0 0 1 1.005-.214l.33.113a1 1 0 0 0 1.137-.365l.515-.719a1 1 0 0 0 .116-.95l-.375-.947a1 1 0 0 1-.07-.363l-.005-1.114a1 1 0 0 1 .09-.421l.313-.684a1 1 0 0 0-.62-1.373l-.268-.08a1 1 0 0 1-.453-.288Zm8.046 12.098-.042-1.776a1 1 0 0 1 .394-.82l.275-.209a1 1 0 0 0 .234-.253l.41-.633a.593.593 0 0 1 1.09.297l.035.842a1 1 0 0 1-.11.5l-1.19 2.304a.58.58 0 0 1-1.096-.253Z\"/>";

export const EastAfrica = /*#__PURE__*/ defineComponent({
  name: 'GeoEastAfrica',
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
