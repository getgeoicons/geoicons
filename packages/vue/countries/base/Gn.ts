// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.793 12.48-2.488 2.316a.5.5 0 0 1-.753-.083l-1.62-2.36a.5.5 0 0 0-.122-.124L1.566 9.912a.5.5 0 0 1-.145-.653l.754-1.339a.5.5 0 0 1 .335-.244l2.381-.493a.5.5 0 0 0 .396-.545L5.08 4.802a.5.5 0 0 1 .683-.52l2.84 1.142a.5.5 0 0 0 .278.027l2.566-.477a.5.5 0 0 1 .492.193l.674.905a.5.5 0 0 0 .421.202l3.002-.123a.5.5 0 0 0 .302-.116l1.398-1.175a.5.5 0 0 1 .742.112l1.435 2.22a.5.5 0 0 1 .067.387l-.333 1.407a.5.5 0 0 0 .182.511l1.587 1.223a.5.5 0 0 1 .161.576l-.55 1.427a.5.5 0 0 0 .035.431l1.424 2.446a.5.5 0 0 1-.279.728l-1.035.333a.5.5 0 0 0-.347.46l-.05 1.644a.5.5 0 0 1-.346.461l-1.969.632a.5.5 0 0 1-.643-.38l-.49-2.494a.5.5 0 0 0-.624-.385l-2.269.633a.5.5 0 0 1-.419-.07l-.34-.236a.5.5 0 0 1-.147-.662l.626-1.079a.5.5 0 0 0-.022-.536l-1.488-2.146a.5.5 0 0 0-.425-.215l-2.1.057a.5.5 0 0 0-.327.134Z\"/>";

export const Gn = /*#__PURE__*/ defineComponent({
  name: 'GeoGn',
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
