// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.059 18.428a.8.8 0 0 0 .538.76l4.819 1.668a1 1 0 0 0 .972-.18l.607-.513a1 1 0 0 1 .641-.236l4.078-.017a2 2 0 0 0 1.053-.304l1.722-1.078a1 1 0 0 0 .468-.896l-.05-1.049a.8.8 0 0 1 .892-.833l.44.052a.8.8 0 0 0 .86-.562l.144-.479a1 1 0 0 0-.115-.83l-.457-.711a1 1 0 0 1-.156-.615l.041-.554a1 1 0 0 1 .453-.764l2.227-1.448a1 1 0 0 0 .437-1.027l-.044-.226a1 1 0 0 0-.488-.68l-1.166-.663a1 1 0 0 0-.818-.077l-1.468.502a1 1 0 0 1-.863-.104l-1.74-1.115a1 1 0 0 1-.459-.9l.016-.278a1 1 0 0 0-.347-.818l-1.433-1.228a1 1 0 0 0-.721-.238l-3.128.221a.6.6 0 0 0-.558.585l-.009.39a.8.8 0 0 1-.892.777l-1.992-.232a1 1 0 0 0-1.001.53l-.11.209a6 6 0 0 0-.624 1.935l-.023.16a1 1 0 0 1-.969.858l-.663.014a1 1 0 0 0-.69.298l-.987.999a1 1 0 0 0-.288.721l.062 3.275a1 1 0 0 0 .591.893l.62.279a1 1 0 0 1 .592.918z\"/>";

export const DoSanJuan = /*#__PURE__*/ defineComponent({
  name: 'GeoDoSanJuan',
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
