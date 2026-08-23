// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.8 15.877a.671.671 0 0 0-.207 1.274l1.46.687a.6.6 0 0 1 .13 1.002l-.56.47a.724.724 0 0 0 .422 1.277l2.612.157a1 1 0 0 0 .463-.083l4.474-1.97a4 4 0 0 1 1.832-.334l9.57.527a.6.6 0 0 0 .631-.555l.127-1.73a1 1 0 0 0-.499-.94l-.86-.494a1 1 0 0 1-.395-.418l-1.514-3.014a1 1 0 0 0-.736-.538l-.2-.032a1 1 0 0 1-.806-.724l-.174-.633a1 1 0 0 1 .349-1.052l.567-.443a1 1 0 0 0 .101-1.484L15.405 3.55a1 1 0 0 0-.732-.303l-.403.006a1 1 0 0 0-.616.224l-1.164.947c-.26.211-.553.378-.867.492L8.226 6.154a1 1 0 0 0-.655.857l-.189 2.293a2 2 0 0 1-.355.984l-.413.589a1 1 0 0 0-.164.76l.157.831a3 3 0 0 1-.086 1.46l-.26.827a1 1 0 0 1-.837.693z\"/>";

export const DoPeravia = /*#__PURE__*/ defineComponent({
  name: 'GeoDoPeravia',
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
