// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.67 12.524a.3.3 0 0 0-.258-.399l-4.085-.337a.6.6 0 0 1-.46-.28l-1.102-1.77a.6.6 0 0 0-.822-.194l-.654.4a1 1 0 0 1-1.024.01l-.143-.083a1 1 0 0 1-.49-.979L13.7 8.3a1 1 0 0 0-.864-1.106l-.244-.032a1 1 0 0 1-.757-.53l-.654-1.259a1 1 0 0 0-.672-.515l-.074-.017a.8.8 0 0 0-.921.499l-.374.988a1 1 0 0 1-.65.605l-1.95.579a.6.6 0 0 1-.662-.232l-.407-.583a.6.6 0 0 0-.548-.254l-.228.022a.6.6 0 0 0-.483.333l-.412.839a1 1 0 0 1-.77.55l-.803.104a.95.95 0 0 0-.7 1.423l1.578 2.703a1 1 0 0 1-.034 1.062l-1.439 2.14a.6.6 0 0 0 .299.9l6.489 2.288c.461.162.941.268 1.429.314l.486.046a6 6 0 0 0 2.862-.43l2.738-1.134a6 6 0 0 1 2.161-.456l.635-.014a6 6 0 0 1 1.53.163l1.443.345a.3.3 0 0 0 .368-.33l-.258-2.039a1 1 0 0 1 .05-.458z\"/>";

export const MxOaxaca = /*#__PURE__*/ defineComponent({
  name: 'GeoMxOaxaca',
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
