// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.968 19.244-.609.89a.5.5 0 0 0 .306.77l7.097 1.555a.5.5 0 0 0 .604-.542l-.082-.768a.5.5 0 0 1 .247-.486l1.155-.667a.5.5 0 0 1 .42-.037l3.07 1.11a.5.5 0 0 0 .504-.097l1.965-1.763a.5.5 0 0 0-.092-.81l-.874-.484a.5.5 0 0 1-.256-.478l.24-2.984a.5.5 0 0 0-.25-.474l-.87-.497a.5.5 0 0 1-.092-.801l2.11-1.952a.5.5 0 0 0 .139-.223l.962-3.186a.5.5 0 0 0-.311-.616l-5.035-1.785a.5.5 0 0 1-.157-.091l-3.84-3.272a.5.5 0 0 0-.437-.106l-.689.159a.5.5 0 0 0-.387.48l-.019 1.543a.5.5 0 0 1-.164.364L9.648 5.789a.5.5 0 0 1-.497.103L6.89 5.12a.5.5 0 0 0-.658.537l.207 1.617a.5.5 0 0 1-.356.543L4.98 8.14a.5.5 0 0 1-.52-.155l-.463-.541c-.13-.153-.338-.213-.53-.153l-1.737.545a.5.5 0 0 0-.309.677l.504 1.16a.5.5 0 0 0 .384.296l2.178.33a.5.5 0 0 1 .381.29l.64 1.436a.5.5 0 0 0 .136.18l1.697 1.423a.5.5 0 0 1 .176.437c-.089.81-.355 3.295-.463 4.929a.5.5 0 0 1-.086.25Z\"/>";

export const FrMainland = /*#__PURE__*/ defineComponent({
  name: 'GeoFrMainland',
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
