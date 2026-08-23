// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m21.026 16.136.619-.657a3 3 0 0 0 .705-1.252l.264-.949-1.718-.732a2 2 0 0 1-.823-.65l-.034-.045a2 2 0 0 1-.392-1.168l-.034-3.03a.6.6 0 0 0-.208-.447l-1.434-1.238a.6.6 0 0 0-.5-.136l-.922.17a.6.6 0 0 1-.653-.338l-.577-1.24a4 4 0 0 0-.378-.646l-1.595-2.22a.6.6 0 0 0-.675-.22l-.96.317a3 3 0 0 1-1.662.063L8.927 1.44a.6.6 0 0 0-.606.199L6.991 3.24a3 3 0 0 1-1.292.906l-2.178.785a.3.3 0 0 0-.189.355l.67 2.653a3 3 0 0 1-.032 1.59l-.065.218a1 1 0 0 1-.754.694l-.907.188a.6.6 0 0 0-.47.681l.133.85a.6.6 0 0 0 .47.494l1.38.291-.143 2.026-1.374-.015a.6.6 0 0 0-.602.527l-.173 1.395a.6.6 0 0 0 .562.673l.261.015a.6.6 0 0 1 .563.667l-.101.885a2 2 0 0 0 .092.87l.448 1.323a1 1 0 0 0 .515.58l1.482.712a.6.6 0 0 0 .711-.146l.516-.59a3 3 0 0 1 1.167-.819l.02-.007a3 3 0 0 1 1.679-.147l.491.098a.6.6 0 0 0 .545-.168l3.869-3.933a1 1 0 0 1 .69-.299l2.267-.053a2 2 0 0 0 1.212-.445l1.624-1.316z\"/>";

export const BbSaintThomas = /*#__PURE__*/ defineComponent({
  name: 'GeoBbSaintThomas',
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
