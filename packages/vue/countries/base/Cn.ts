// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m15.595 18.985.074-.03a4 4 0 0 0 1.782-1.48l.434-.657a1.5 1.5 0 0 0 .112-1.452l-.422-.92a1 1 0 0 1 .094-.998l.986-1.383a2 2 0 0 1 .8-.659l1.037-.472a2 2 0 0 0 .93-.867l1.05-1.938a.6.6 0 0 0-.315-.847l-1.613-.609a1 1 0 0 1-.607-.656l-.175-.6a1 1 0 0 0-.901-.719l-.407-.024a1 1 0 0 0-.858.397L16.545 6.47a.6.6 0 0 0-.01.707l.491.697a.6.6 0 0 1-.23.887l-3.76 1.803a2 2 0 0 1-1.644.038L7.907 9.127a2 2 0 0 1-.974-.88l-.304-.555a.8.8 0 0 0-1.262-.186L3.963 8.882a1 1 0 0 0-.299.68l-.014.422a1 1 0 0 1-.637.898l-.958.372a1.008 1.008 0 0 0 .029 1.886l.574.206a.976.976 0 0 1 .64 1.036 1.464 1.464 0 0 0 .986 1.562l2.745.925a1 1 0 0 0 .669-.01l.597-.223a1 1 0 0 1 1.268.542l.564 1.312a1 1 0 0 0 .848.603l2.783.197a4 4 0 0 0 1.837-.305Z\"/>";

export const Cn = /*#__PURE__*/ defineComponent({
  name: 'GeoCn',
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
