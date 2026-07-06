// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.016 17.466-.507.866a.6.6 0 0 0 .226.827l.874.488a.6.6 0 0 0 .604-.012l.714-.434a1 1 0 0 1 1.372.33l.815 1.329a1 1 0 0 0 .68.462l5.209.911a1 1 0 0 0 .34 0l2.407-.412a1 1 0 0 0 .711-.511l.595-1.104a.6.6 0 0 1 .877-.203l.596.426a.669.669 0 0 0 1.055-.61l-.21-2.128a1 1 0 0 1 .103-.55l.716-1.413a1 1 0 0 0-.05-.992l-.196-.305a1 1 0 0 1 .646-1.521l1.135-.226a1 1 0 0 0 .801-1.067l-.068-.788a1 1 0 0 1 .08-.488l1.027-2.338a1 1 0 0 0-.112-.996L20.888 4.88a1 1 0 0 0-.805-.406h-2.695a.94.94 0 0 1-.94-.991.94.94 0 0 0-.547-.906l-1.437-.658a1 1 0 0 0-.8-.014l-1.004.418a1 1 0 0 0-.362.258l-.986 1.106a1 1 0 0 0-.219.403L9.77 8.947a1 1 0 0 1-.133.292l-1.299 1.948a1 1 0 0 1-.254.261l-2.302 1.629a1 1 0 0 1-.368.162l-2.49.532a1 1 0 0 0-.646.459l-.288.474a1 1 0 0 0-.125.715l.269 1.346a1 1 0 0 1-.118.701Z\"/>";

export const MurrayDarlingBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoMurrayDarlingBasin',
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
