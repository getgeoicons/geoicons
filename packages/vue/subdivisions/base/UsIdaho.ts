// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.665 9.67a.6.6 0 0 0 .09.325l.961 1.552a1 1 0 0 1 .05.963L5.46 15.202a1 1 0 0 0-.067.693l.388 1.463q.071.262.067.535l-.05 4.603a.3.3 0 0 0 .3.304l12.304-.01a.3.3 0 0 0 .3-.301l-.027-6.832a.6.6 0 0 0-.737-.582l-2.4.562a1 1 0 0 1-1.105-.495l-1.29-2.366a1 1 0 0 0-.796-.518l-.172-.014a1 1 0 0 1-.906-1.152l.31-1.978a.6.6 0 0 0-.218-.561L9.26 6.868a1 1 0 0 1-.266-.326L7.987 4.569a1 1 0 0 1-.11-.465l.027-2.6a.3.3 0 0 0-.3-.303l-1.525.008a.3.3 0 0 0-.298.295z\"/>";

export const UsIdaho = /*#__PURE__*/ defineComponent({
  name: 'GeoUsIdaho',
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
