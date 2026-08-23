// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.297 21.23a.603.603 0 0 0 .826-.87l-.606-.7a1 1 0 0 1-.224-.85l.145-.726c.038-.187.129-.36.261-.498l1.545-1.6a4 4 0 0 0 .515-.661l2.289-3.67a1 1 0 0 0 .147-.62l-.146-1.597a2 2 0 0 1 .187-1.044l.293-.613a.4.4 0 0 0-.358-.573l-6.94-.056a2 2 0 0 1-.893-.218L5.875 2.61a.536.536 0 0 0-.69.775l2.148 3.21a.6.6 0 0 1-.328.908l-3.127.926a1 1 0 0 0-.457.287l-.19.21a.88.88 0 0 0-.077 1.083.88.88 0 0 1-.241 1.224l-1.043.694a.877.877 0 0 0 .724 1.574l.789-.223a1 1 0 0 1 1.066.355l1.246 1.63q.282.368.662.635l3.897 2.73a2 2 0 0 0 .827.336l.84.136c.45.074.913-.018 1.301-.258a.95.95 0 0 1 1.082.058z\"/>";

export const CrCartago = /*#__PURE__*/ defineComponent({
  name: 'GeoCrCartago',
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
