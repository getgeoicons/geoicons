// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.917 13.288a.6.6 0 0 0 .14.226l3.286 3.349a.6.6 0 0 0 .305.167l.538.113a.6.6 0 0 0 .686-.378l.466-1.257a.6.6 0 0 0-.216-.698l-.44-.312a.904.904 0 0 1 .893-1.563l1.935.873a.84.84 0 0 1 .495.78.84.84 0 0 0 .76.849l4.81.456a.8.8 0 0 1 .686.55l.176.543a.6.6 0 0 0 .475.408l.34.055a.6.6 0 0 0 .694-.64l-.016-.197a.6.6 0 0 1 .598-.648h.098a1 1 0 0 1 .774.367l.786.96a1 1 0 0 0 .679.362l.278.027a.6.6 0 0 0 .657-.597v-1.624a.6.6 0 0 0-.495-.59l-1.789-.32a1 1 0 0 1-.718-.538l-.144-.287a1 1 0 0 1 .076-1.021l.556-.794a2 2 0 0 0 .362-1.195l-.032-1.348a.6.6 0 0 0-.317-.515l-.863-.461a.6.6 0 0 0-.501-.03l-2.46.96a2 2 0 0 0-.712.475l-1.16 1.202a.6.6 0 0 1-.942-.103L11.765 7.8a1 1 0 0 0-.836-.478l-2.025-.034a1 1 0 0 0-.6.189l-1.334.96a1 1 0 0 1-.87.146l-1.495-.446a2 2 0 0 1-.958-.628l-.82-.972a.6.6 0 0 0-.592-.198l-.317.072a.6.6 0 0 0-.413.834l.682 1.496a2 2 0 0 1 .168 1.047l-.106.958a2 2 0 0 0 .096.864z\"/>";

export const DoSantoDomingo = /*#__PURE__*/ defineComponent({
  name: 'GeoDoSantoDomingo',
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
