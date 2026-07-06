// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.633 15.475-.953 3.2a.6.6 0 0 0 .362.732l3.861 1.465a.6.6 0 0 0 .694-.203l.367-.492a1 1 0 0 1 1.24-.302l.77.376a1 1 0 0 0 1.081-.133l.618-.518a1 1 0 0 0 .345-.92l-.247-1.582a1 1 0 0 1 .713-1.115l3.61-1.034a1 1 0 0 1 .531-.006l2.16.573a1 1 0 0 0 .558-.013l1.03-.326a1 1 0 0 0 .545-.421l.663-1.055a1 1 0 0 0 .13-.749l-.051-.23a1 1 0 0 0-1.069-.779l-1.57.145a1 1 0 0 1-.872-.37l-.899-1.124a.6.6 0 0 1 .274-.942l1.318-.451a1 1 0 0 0 .649-1.178l-.847-3.564a1 1 0 0 0-1.348-.696l-1.05.424a1 1 0 0 1-.898-.075l-1.107-.68a.6.6 0 0 0-.906.408l-.13.754a1 1 0 0 1-.7.788l-1.948.578a1 1 0 0 0-.429.258L7.515 9.902a1 1 0 0 1-1.121.213l-.633-.282a.6.6 0 0 0-.842.502l-.016.206a.6.6 0 0 1-.769.53l-.899-.267a1 1 0 0 0-.32-.041l-.643.023a.945.945 0 0 0-.345 1.81l1.507.662a1 1 0 0 1 .443.38l.643 1.016a1 1 0 0 1 .113.82Z\"/>";

export const WesternEuropeSimplified = /*#__PURE__*/ defineComponent({
  name: 'GeoWesternEuropeSimplified',
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
