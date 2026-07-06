// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.477 19.213-1.625.626a1 1 0 0 1-1.192-.38l-1.836-2.764a1 1 0 0 1-.166-.508l-.162-3.566a1 1 0 0 0-.058-.293L1.74 10.39a1 1 0 0 1-.06-.339V8.882a1 1 0 0 1 .06-.338l.468-1.303a1 1 0 0 1 .555-.584l.51-.214a1 1 0 0 1 1.093.215l.316.315a1 1 0 0 0 .39.242l1.632.544a1 1 0 0 1 .317.174l.954.781a1 1 0 0 0 1.094.114l.86-.447a1 1 0 0 0 .395-.369l.585-.964a1 1 0 0 0-.21-1.282l-.246-.208a1 1 0 0 1-.338-.587l-.124-.691a1 1 0 0 1 .03-.476l.188-.599a1 1 0 0 1 .302-.459l1.496-1.287a.5.5 0 0 1 .62-.025l1.475 1.076a1 1 0 0 1 .376.548l.231.858a1 1 0 0 1 .01.48l-.157.7a1 1 0 0 0 .111.723l.52.895a1 1 0 0 0 .74.488l1.777.225a1 1 0 0 1 .582.286l.986.986a1 1 0 0 0 .342.224l2.125.835a.639.639 0 0 1-.365 1.22l-3.098-.649a1 1 0 0 0-.462.013l-5.21 1.388a1 1 0 0 1-.598-.027l-2.037-.739a.963.963 0 0 0-1.23 1.246l.589 1.563a1 1 0 0 1 .057.235l.266 2.24a1 1 0 0 1-.215.747l-1.546 1.913a1 1 0 0 1-.419.305Zm9.769-.69-.667 1.4a1 1 0 0 0-.097.43v.838a1 1 0 0 0 .469.847l.855.537a1 1 0 0 0 .771.123l.748-.184a1 1 0 0 0 .429-.228l.968-.871a1 1 0 0 0 .33-.743v-.537a1 1 0 0 0-.34-.753l-1.435-1.256a1 1 0 0 0-.816-.236l-.47.075a1 1 0 0 0-.745.558Z\"/>";

export const Gp = /*#__PURE__*/ defineComponent({
  name: 'GeoGp',
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
