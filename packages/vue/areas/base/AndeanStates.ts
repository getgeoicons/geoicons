// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m14.696 14.908.184.605a1 1 0 0 0 .591.64l1.687.664a1 1 0 0 1 .585.62l.181.552a1 1 0 0 0 .315.461l.78.642a.6.6 0 0 1 .163.718l-.217.463a.6.6 0 0 1-.779.297l-.23-.098a1 1 0 0 0-.562-.065l-.3.051a1 1 0 0 0-.813.804l-.07.376a.6.6 0 0 1-.43.47l-1.957.537a.6.6 0 0 1-.733-.405l-.601-1.988a.6.6 0 0 0-.376-.392l-2.967-1.045a1 1 0 0 1-.542-.457L6.56 14.681a1 1 0 0 0-.363-.373l-1.057-.629a.6.6 0 0 1-.266-.336l-.154-.492a.6.6 0 0 1 .113-.566l.384-.456a.6.6 0 0 0 .116-.556l-.328-1.113a1 1 0 0 1 .2-.935l1.48-1.72a1 1 0 0 0 .237-.756l-.184-1.783a1 1 0 0 1 .193-.7l1.194-1.603a1 1 0 0 1 .353-.297l1.896-.952a.683.683 0 0 1 .73 1.146l-.965.765a.6.6 0 0 0-.152.763l.335.598a.6.6 0 0 0 .423.3l2.173.367a.6.6 0 0 1 .497.539l.134 1.524a.6.6 0 0 1-.515.647l-.531.073a.6.6 0 0 0-.517.595v2.202a1 1 0 0 1-.8.98l-.495.1a1 1 0 0 0-.676.5l-.245.447a1 1 0 0 0 .05 1.042l.348.513a1 1 0 0 0 .42.352l.927.414a1 1 0 0 0 .843-.013l1.503-.726a.6.6 0 0 1 .835.366Z\"/>";

export const AndeanStates = /*#__PURE__*/ defineComponent({
  name: 'GeoAndeanStates',
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
