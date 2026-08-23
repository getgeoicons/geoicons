// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M7.098 4.286a1 1 0 0 0-.42.816l.01 4.3-.773 12.824a.526.526 0 0 0 .929.368l.666-.801a2 2 0 0 1 .877-.609l1.549-.54a3 3 0 0 0 .934-.53l1.794-1.5q.332-.278.572-.638l1.854-2.78c.133-.199.23-.42.284-.653l.343-1.466a1 1 0 0 1 .218-.426l1.26-1.456a1 1 0 0 0 .136-1.109l-.186-.363a1 1 0 0 1 .067-1.02l.695-1.012a1 1 0 0 0 .17-.673l-.525-4.932a.6.6 0 0 0-.88-.465l-2.136 1.144a2 2 0 0 1-.756.228l-5.345.505a1 1 0 0 0-.487.181z\"/>";

export const BzCayo = /*#__PURE__*/ defineComponent({
  name: 'GeoBzCayo',
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
