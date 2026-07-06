// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.171 11.171 3.295 9.593a1 1 0 0 0-1.308.966l.01.734a1 1 0 0 1-.039.293l-.566 1.955a1 1 0 0 0 .36 1.078l.84.63a1 1 0 0 0 .804.178l1.713-.357a1 1 0 0 0 .69-.531l.422-.844a1 1 0 0 1 .376-.407l1.701-1.033a.6.6 0 0 0-.127-1.084Zm2.856-1.629.307.655a.6.6 0 0 0 .36.315l.694.223c.163.053.31.146.427.272l2.014 2.168a1 1 0 0 1-.13 1.478l-.305.23a.25.25 0 0 0 .042.426l1.441.694a.25.25 0 0 0 .335-.12l.71-1.525a1 1 0 0 0 .072-.627l-.16-.764a1 1 0 0 0-.265-.494l-1.649-1.684a.698.698 0 0 1 .946-1.025l2.116 1.761c.138.115.242.265.303.434l1.015 2.86a1 1 0 0 0 .537.579l.197.088a1 1 0 0 0 1.148-.244l.05-.055a1 1 0 0 0-.006-1.348l-.642-.697a.25.25 0 0 1 .104-.406l1.594-.544a.742.742 0 0 0-.433-1.418l-1.624.437a.25.25 0 0 1-.312-.204l-.118-.784a1 1 0 0 0-.383-.647l-1.34-1.021a1 1 0 0 0-.376-.178l-1.933-.457a1 1 0 0 0-.275-.026l-1.969.088a1 1 0 0 0-.299.06l-1.857.682a.6.6 0 0 0-.336.818Zm.095 4.705-.036-.93a.726.726 0 1 1 1.452-.028v.931a.708.708 0 0 1-1.416.027Z\"/>";

export const SouthernEurope = /*#__PURE__*/ defineComponent({
  name: 'GeoSouthernEurope',
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
