// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.052 3.907-.619.514a.5.5 0 0 0 .028.79l1.3.935a.5.5 0 0 1 .175.582l-.294.785a.5.5 0 0 1-.7.268L4.24 5.845a.5.5 0 0 0-.616.123l-.629.755a.5.5 0 0 0 .12.745l1.52.943a.5.5 0 0 1 .166.682l-.383.637a.5.5 0 0 0 .148.67l1.362.927a.5.5 0 0 1 .18.608l-.511 1.21a.5.5 0 0 0 .092.532l.93 1.017a.5.5 0 0 0 .471.152l.468-.098a.5.5 0 0 1 .597.41l.414 2.608a.25.25 0 0 0 .404.155l4.227-3.413a.5.5 0 0 1 .703.076l.666.826a.5.5 0 0 1 .11.307l.021 1.499a.5.5 0 0 1-.194.403l-.525.405a.5.5 0 0 0-.033.763l1.51 1.396a.5.5 0 0 0 .47.116l.401-.108a.5.5 0 0 0 .371-.49l-.04-2.479a.5.5 0 0 1 .45-.506l.79-.079a.5.5 0 0 0 .442-.41l.68-3.808a.5.5 0 0 1 .434-.409l2.86-.336a.25.25 0 0 0 .155-.417l-1.018-1.111a.5.5 0 0 0-.322-.16l-1.818-.172a.5.5 0 0 1-.386-.247l-2.991-5.16a.25.25 0 0 0-.396-.048L12.907 7.06a.5.5 0 0 1-.693.023L8.707 3.92a.5.5 0 0 0-.655-.013ZM2.403 14.2l-.816.186a.25.25 0 0 0-.14.399l2.303 2.908a.5.5 0 0 0 .272.175l2.175.537c.2.05.37-.149.29-.338l-1.032-2.485a.5.5 0 0 0-.6-.289l-.462.132a.5.5 0 0 1-.478-.115l-1.06-.988a.5.5 0 0 0-.452-.122Z\"/>";

export const Az = /*#__PURE__*/ defineComponent({
  name: 'GeoAz',
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
