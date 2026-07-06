// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.329 5.084-2.779.873a.5.5 0 0 0-.35.477v5.783l1.557.27v-1.07a.5.5 0 0 1 .205-.404l1.331-.971a.5.5 0 0 1 .517-.045l1.207.597a.5.5 0 0 1 .272.372l.158 1.027a.5.5 0 0 0 .456.422l1.39.108a.5.5 0 0 1 .432.329l.589 1.636a.5.5 0 0 0 .219.263l4.538 2.641a.5.5 0 0 1 .247.467l-.051.753 1.62.37.655-1.439a.5.5 0 0 0-.039-.483l-1.034-1.562a.25.25 0 0 1 .19-.387l1.16-.088a.5.5 0 0 0 .277-.11l1.379-1.12a.5.5 0 0 1 .5-.076l1.626.648a.5.5 0 0 0 .47-.054l1.458-1.014a.25.25 0 0 0 .016-.398l-2.54-2.088a.5.5 0 0 0-.653.015l-2.326 2.104a.5.5 0 0 1-.457.114l-1.704-.424a.5.5 0 0 1-.364-.365l-.617-2.509a.5.5 0 0 0-.139-.24L12.577 8.38a.5.5 0 0 0-.408-.136l-3.155.39a.5.5 0 0 1-.429-.158L6.413 6.123a.5.5 0 0 0-.118-.094l-1.567-.902a.5.5 0 0 0-.4-.043Z\"/>";

export const Uz = /*#__PURE__*/ defineComponent({
  name: 'GeoUz',
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
