// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.974 11.739-1.67.14a.5.5 0 0 0-.303.86l7.717 7.383a.5.5 0 0 0 .298.137l5.326.513a.5.5 0 0 1 .19.059l3.149 1.71a.5.5 0 0 0 .412.03l.732-.271a.5.5 0 0 0 .317-.562l-.87-4.642a.5.5 0 0 1 .098-.401l1.544-1.97a.5.5 0 0 0 .104-.353l-.43-4.856a.5.5 0 0 1 .032-.227l1.646-4.174a.5.5 0 0 0 .03-.116l.392-2.833a.5.5 0 0 0-.663-.54l-5.368 1.905a.5.5 0 0 1-.38-.019l-1.471-.693a.5.5 0 0 0-.573.105L10.28 7.011a.5.5 0 0 1-.667.046l-.61-.477a.5.5 0 0 0-.5-.068L5.676 7.68a.5.5 0 0 0-.29.323l-.973 3.376a.5.5 0 0 1-.438.36Z\"/>";

export const Ni = /*#__PURE__*/ defineComponent({
  name: 'GeoNi',
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
