// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.798 21.139.711-2.105a.6.6 0 0 0-.325-.74l-2.027-.9a1 1 0 0 1-.588-.803L3.993 11.4a1 1 0 0 1 .31-.84l1.279-1.196a1 1 0 0 0 .317-.725l.014-2.352a1 1 0 0 1 .798-.974l1.17-.24a1 1 0 0 0 .795-1.064L8.507 2.02a.6.6 0 0 1 .733-.635l1.232.283a2 2 0 0 1 1.013.584l1.433 1.534a1 1 0 0 0 1.243.176l2.081-1.24a1 1 0 0 1 1.278.215l1.06 1.262a1 1 0 0 1 .233.688l-.11 2.473a2 2 0 0 0 .114.763l1.155 3.233a1 1 0 0 1 .042.518l-.15.807a1 1 0 0 1-.69.775l-3.709 1.14a.6.6 0 0 0-.293.947l2.595 3.257a.6.6 0 0 1-.232.925l-.92.396a1 1 0 0 0-.604.896l-.018.79a.6.6 0 0 1-.531.582l-3.097.355a2 2 0 0 1-.946-.12l-1.341-.516a2 2 0 0 0-.988-.115l-1.426.194a.8.8 0 0 1-.866-1.048Z\"/>";

export const De = /*#__PURE__*/ defineComponent({
  name: 'GeoDe',
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
