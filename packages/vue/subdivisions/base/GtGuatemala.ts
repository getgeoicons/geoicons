// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M15.423 3.58a.8.8 0 0 1-.598-.62l-.2-.998a.8.8 0 0 0-.918-.632l-5.365.913a2 2 0 0 0-.593.2l-1.56.819a1 1 0 0 0-.524.731l-.118.759a1 1 0 0 1-.264.536L3.846 6.796a.6.6 0 0 0-.06.755l.444.643a.6.6 0 0 0 .526.258l1.046-.055a1 1 0 0 1 .91.485l.916 1.532a1 1 0 0 1-.46 1.43l-.276.12a1 1 0 0 0-.594.793l-.245 1.956a1 1 0 0 0 .348.89L7.99 16.94a1 1 0 0 1 .342.923l-.295 1.847a1 1 0 0 0 .018.403l.5 1.972a.6.6 0 0 0 .843.393l1.398-.68a1 1 0 0 0 .509-.573l.544-1.584a1 1 0 0 1 .283-.424l1.4-1.238a1 1 0 0 0 .294-.458l.678-2.222a.6.6 0 0 1 .48-.418l2.636-.414a1 1 0 0 0 .76-.586l1.885-4.304a.6.6 0 0 0-.274-.774l-2.467-1.27a1 1 0 0 1-.536-.778l-.244-2.18a1 1 0 0 0-.76-.86z\"/>";

export const GtGuatemala = /*#__PURE__*/ defineComponent({
  name: 'GeoGtGuatemala',
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
