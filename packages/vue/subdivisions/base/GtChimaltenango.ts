// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.693 20.935a.3.3 0 0 0 .398.337l2.778-1.014a.3.3 0 0 1 .4.244l.224 1.745a.577.577 0 0 0 1.006.306l3.03-3.473a1 1 0 0 0 .228-.46l.433-2.147a1 1 0 0 1 .577-.717l1.376-.607a1 1 0 0 0 .557-.637l1.577-5.444a1 1 0 0 1 .301-.473l1.642-1.442a.8.8 0 0 0 .269-.677l-.102-1.079a.8.8 0 0 1 .553-.838l2.12-.674a.793.793 0 0 0-.088-1.534l-4.08-.801a11 11 0 0 0-1.923-.204l-7.317-.131a1 1 0 0 0-.996.795l-.58 2.77a1 1 0 0 1-.486.666l-.877.495a1 1 0 0 0-.483.647l-.226.985a1 1 0 0 0 .052.608l.408.978a1 1 0 0 1-.055.88l-1.198 2.102a4 4 0 0 0-.515 1.689l-.381 5.203a.3.3 0 0 0 .212.309l1.13.342a.3.3 0 0 1 .207.343z\"/>";

export const GtChimaltenango = /*#__PURE__*/ defineComponent({
  name: 'GeoGtChimaltenango',
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
