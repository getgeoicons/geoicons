// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M10.15 7.32 8.88 8.489a1 1 0 0 0-.321.708l-.04 1.49a.669.669 0 0 0 1.09.537l.218-.177a.6.6 0 0 1 .918.204l.25.516a.72.72 0 0 0 1.307-.025l.454-1.037a1 1 0 0 0 .053-.645l-.328-1.302a1 1 0 0 1 .13-.786l1.122-1.74a.89.89 0 0 1 1.201-.283l.027.016a.834.834 0 0 1 .23 1.232l-.816 1.04a1 1 0 0 0-.184.86l.235.94a1 1 0 0 1-.006.51l-.643 2.319a1 1 0 0 1-.808.72l-1.478.234a1 1 0 0 1-.84-.258l-.142-.133a1 1 0 0 0-1.57.266l-.965 1.842a1 1 0 0 1-.457.44l-1.481.703a.6.6 0 0 0-.194.937l.425.485a.719.719 0 0 1-.602 1.19l-.996-.086a1 1 0 0 0-1.086.988l-.009 1.034a1 1 0 0 0 .49.87l.55.325a1 1 0 0 0 .89.064l.798-.328a1 1 0 0 0 .496-.442l.986-1.793a1 1 0 0 1 .54-.459l1.07-.383a1 1 0 0 1 1.014.205l3.108 2.856a1 1 0 0 0 1.42-.067l.137-.152a1 1 0 0 0 .254-.606l.052-.819a1 1 0 0 1 .168-.495l1.058-1.57a.6.6 0 0 1 .82-.171l.253.161a1 1 0 0 0 1.065.006l1.133-.704a1 1 0 0 0 .455-.669l.011-.058a1 1 0 0 0-.503-1.058l-2.01-1.1a1 1 0 0 1-.34-.307l-1.15-1.655a1 1 0 0 1-.178-.53l-.062-1.57a1 1 0 0 1 .133-.54l.855-1.48a1 1 0 0 0 .112-.71l-.843-3.934a1 1 0 0 1 .309-.953l.165-.149a.6.6 0 0 0-.061-.94l-.805-.553a1 1 0 0 0-.912-.115l-1.573.58a1 1 0 0 0-.272.152l-1.504 1.18a1 1 0 0 0-.34.496l-.934 3.063a1 1 0 0 1-.279.444Z\"/>";

export const EuropeMainland = /*#__PURE__*/ defineComponent({
  name: 'GeoEuropeMainland',
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
