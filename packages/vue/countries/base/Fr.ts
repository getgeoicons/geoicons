// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.356 17.388-.493.721a.5.5 0 0 0 .306.77l6.208 1.36a.5.5 0 0 0 .604-.541l-.062-.583a.5.5 0 0 1 .248-.486l.983-.567a.5.5 0 0 1 .42-.037l2.697.975a.5.5 0 0 0 .504-.098l1.681-1.508a.5.5 0 0 0-.091-.81l-.69-.382a.5.5 0 0 1-.255-.477l.21-2.605a.5.5 0 0 0-.25-.475l-.689-.393a.5.5 0 0 1-.092-.801l1.826-1.69a.5.5 0 0 0 .14-.222l.843-2.792a.5.5 0 0 0-.312-.616L15.64 4.553a.5.5 0 0 1-.157-.09L12.07 1.555a.5.5 0 0 0-.436-.106l-.551.127a.5.5 0 0 0-.388.481l-.015 1.317a.5.5 0 0 1-.164.364l-1.73 1.57a.5.5 0 0 1-.496.102l-1.918-.653a.5.5 0 0 0-.657.537l.169 1.32a.5.5 0 0 1-.356.544l-.912.266a.5.5 0 0 1-.52-.156l-.37-.432a.5.5 0 0 0-.53-.153l-1.467.46a.5.5 0 0 0-.309.677l.417.96a.5.5 0 0 0 .384.295l1.893.286a.5.5 0 0 1 .382.291l.556 1.249a.5.5 0 0 0 .135.18l1.49 1.248a.5.5 0 0 1 .176.438c-.082.75-.315 2.925-.411 4.37a.5.5 0 0 1-.087.25Zm14.55 4.134-.049-1.082a.5.5 0 0 1 .165-.395l.71-.64a.5.5 0 0 1 .795.175l.198.463a.5.5 0 0 1 .014.355l-.514 1.534a.5.5 0 0 1-.784.233l-.346-.274a.5.5 0 0 1-.189-.37Z\"/>";

export const Fr = /*#__PURE__*/ defineComponent({
  name: 'GeoFr',
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
