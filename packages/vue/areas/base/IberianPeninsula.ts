// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.33 15.731-.304 1.667a.6.6 0 0 0 .468.695l.952.198a1 1 0 0 0 .604-.062l.547-.239a1 1 0 0 1 .978.101l.333.236a1 1 0 0 1 .382.538l.234.81a1 1 0 0 0 .514.616l.249.125a1 1 0 0 0 1.118-.153l1.037-.94a1 1 0 0 1 .705-.258l2.936.1a1 1 0 0 0 .976-.662l.094-.263a1 1 0 0 1 .709-.636l.736-.177a.6.6 0 0 0 .436-.412l.285-.962a1 1 0 0 1 .336-.498l.724-.576a.6.6 0 0 0 .123-.806l-.575-.846a1 1 0 0 1-.022-1.09l1.457-2.342a1 1 0 0 1 .398-.364l3.662-1.855a.6.6 0 0 0 .324-.611l-.077-.607a.6.6 0 0 0-.682-.517l-1.949.285a1 1 0 0 1-.565-.082l-1.054-.49a1 1 0 0 0-.466-.091l-1.748.078a1 1 0 0 1-.617-.18l-1.401-.977a1 1 0 0 0-.618-.18l-3.535.162a1 1 0 0 1-.3-.032l-1.68-.442a1 1 0 0 0-.316-.03l-1.36.083a1 1 0 0 1-.596-.152l-.486-.307a1 1 0 0 0-.999-.04l-1.475.775A1 1 0 0 0 2.3 5.367l.691 4.255a1 1 0 0 1-.064.546l-1.41 3.375a.97.97 0 0 0 .376 1.194.97.97 0 0 1 .436.994Z\"/>";

export const IberianPeninsula = /*#__PURE__*/ defineComponent({
  name: 'GeoIberianPeninsula',
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
