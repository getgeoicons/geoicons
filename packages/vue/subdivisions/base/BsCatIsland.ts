// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.375 22.515-1.118-.848a.6.6 0 0 1 .155-1.04l2.212-.817a1.61 1.61 0 0 0 .89-2.223l-.058-.118a1.9 1.9 0 0 0-1.102-.969l-.533-.18a1 1 0 0 1-.542-.443l-3.755-6.422a2 2 0 0 0-.764-.744l-.919-.504a.6.6 0 0 1-.31-.534l.01-.868a2 2 0 0 0-.438-1.275l-.172-.215a2 2 0 0 0-.361-.35l-2.824-2.12a.6.6 0 0 1 .21-1.06l1.737-.45a1 1 0 0 1 .924.229l2.121 1.934a1 1 0 0 1 .326.706l.043 1.323a1 1 0 0 0 .22.594l1.094 1.361q.24.3.42.64l2.041 3.872q.165.31.425.548l3.16 2.869c.213.194.382.432.495.698l2.012 4.732a.6.6 0 0 1-.414.819l-4.35 1.03a1 1 0 0 1-.835-.176Z\"/>";

export const BsCatIsland = /*#__PURE__*/ defineComponent({
  name: 'GeoBsCatIsland',
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
