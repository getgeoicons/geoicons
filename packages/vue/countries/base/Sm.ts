// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m17.573 19.683-.953 2.38a.5.5 0 0 1-.426.313l-5.322.401a.5.5 0 0 1-.46-.23L9.22 20.673a.5.5 0 0 0-.587-.204l-3.594 1.263a.5.5 0 0 1-.343-.004l-.929-.352a.5.5 0 0 1-.267-.697l.625-1.213a.5.5 0 0 0 .037-.364l-.678-2.422a.5.5 0 0 1 .105-.463l1.084-1.244a.5.5 0 0 0 .04-.604l-1.558-2.36a.5.5 0 0 1-.082-.266L3.019 9.09l1.316.673a.5.5 0 0 0 .644-.168l.491-.74a.5.5 0 0 1 .497-.217l1.786.291a.5.5 0 0 0 .483-.197L9.572 6.92a.5.5 0 0 1 .118-.115l3.508-2.428a.5.5 0 0 1 .131-.065l3.296-1.063a.5.5 0 0 0 .184-.107l1.81-1.66a.5.5 0 0 1 .291-.129l1.143-.107a.5.5 0 0 1 .543.434l.127.99a.5.5 0 0 1-.168.441l-.436.378a.5.5 0 0 0-.169.438l.16 1.314a.5.5 0 0 1-.175.443l-.49.412a.5.5 0 0 0-.177.378l-.02 2.117a.5.5 0 0 0 .043.208l1.588 3.587a.5.5 0 0 1-.022.45l-1.748 3.07a.5.5 0 0 1-.18.184l-1.404.83a.5.5 0 0 0-.24.51l.317 1.99a.5.5 0 0 1-.03.264Z\"/>";

export const Sm = /*#__PURE__*/ defineComponent({
  name: 'GeoSm',
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
