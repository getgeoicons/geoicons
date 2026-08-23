// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M17.33 21.498a1 1 0 0 0 .71-.039l.962-.427a1 1 0 0 0 .585-.78l.507-3.771a1 1 0 0 0-.345-.896l-1.375-1.165a1 1 0 0 0-.621-.237l-1.952-.048a.768.768 0 0 1-.245-1.489l2.201-.804c.335-.122.645-.303.916-.534l2.664-2.268a2 2 0 0 0 .542-.737l.581-1.36a1 1 0 0 0-.398-1.245l-2.438-1.492a1 1 0 0 0-.61-.143l-3.353.295a1 1 0 0 1-.67-.184l-2.069-1.485a1 1 0 0 0-1.08-.056l-3.105 1.78a1 1 0 0 1-1.075-.052l-.604-.428a1 1 0 0 0-1.398.244l-.948 1.358a1 1 0 0 0-.152.806l.8 3.323a1 1 0 0 1 .026.296l-.332 5.36a1 1 0 0 1-1.037.936l-2.127-.083a.554.554 0 0 0-.276 1.046l3.53 1.82a2 2 0 0 1 .653.54l1.24 1.574a1 1 0 0 0 1.072.339l4.158-1.244a2 2 0 0 1 1.181.011z\"/>";

export const HtCentre = /*#__PURE__*/ defineComponent({
  name: 'GeoHtCentre',
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
