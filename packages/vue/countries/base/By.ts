// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.068 19.867 1.564-.648a3 3 0 0 1 1.751-.168l10.28 2.105a1 1 0 0 0 1.195-.871l.06-.548a1.41 1.41 0 0 1 1.228-1.245l.237-.03a.996.996 0 0 0 .786-1.398l-.939-2.079a.6.6 0 0 1 .266-.777l.128-.068a.6.6 0 0 1 .557-.002l.522.271a1 1 0 0 0 1.15-.163l.271-.258a1 1 0 0 0 .081-1.362L18.95 8.689a2 2 0 0 1-.449-1.48l.161-1.56a1 1 0 0 0-.424-.924l-1.116-.776a2 2 0 0 0-.657-.299l-3.356-.839a2 2 0 0 0-1.432.179L9.383 4.22a1 1 0 0 0-.526.858l-.02.896a1 1 0 0 1-.454.815l-1.19.776a1 1 0 0 0-.447.723L6.59 9.624a1 1 0 0 1-.736.852l-3.544.943a.6.6 0 0 0-.421.75l.853 2.886a1 1 0 0 1-.212.948l-.958 1.078a1 1 0 0 0-.21.956l.366 1.198a1 1 0 0 0 1.34.632Z\"/>";

export const By = /*#__PURE__*/ defineComponent({
  name: 'GeoBy',
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
