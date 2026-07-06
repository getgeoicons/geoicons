// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.1 13.31.602.232a1 1 0 0 1 .527 1.399l-.53 1.008a.6.6 0 0 0 .484.877l1.367.108a1 1 0 0 0 .575-.128l1.252-.716a1 1 0 0 1 .8-.084l.879.28a1 1 0 0 1 .59.506l.642 1.285a1 1 0 0 1 .05.773l-.285.828a1 1 0 0 0 .407 1.169l1.52.97a1 1 0 0 0 .573.157l1.393-.05a1 1 0 0 1 .384.062l1.26.468a1 1 0 0 0 1.283-.582l1.219-3.211a1 1 0 0 0-.06-.838l-.836-1.519a1 1 0 0 1-.034-.898l.314-.687a1 1 0 0 0-.013-.858l-.684-1.386a1 1 0 0 0-1.265-.488l-.904.358a.6.6 0 0 1-.604-.096l-.74-.615a.6.6 0 0 1 .004-.927l1.478-1.205a1 1 0 0 0 .215-1.308l-.296-.47a1 1 0 0 1 .078-1.173l.547-.655a1 1 0 0 0 .083-1.167l-1.596-2.581a.6.6 0 0 0-1.055.063l-.654 1.412a1 1 0 0 1-.538.51L9.529 5.72a1 1 0 0 0-.615.748l-.137.746a1 1 0 0 1-1.054.816l-1.434-.1a1 1 0 0 0-.636.172l-1.2.822a1 1 0 0 0-.412.608l-.228 1.025a1 1 0 0 0 .053.601l.669 1.605a1 1 0 0 0 .565.549Z\"/>";

export const Rhineland = /*#__PURE__*/ defineComponent({
  name: 'GeoRhineland',
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
