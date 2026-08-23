// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M13.044 1.525a.57.57 0 0 0-.527-.313l-9.583.329a.3.3 0 0 0-.285.351l1.534 8.78q.015.088.046.172l1.222 3.348a1 1 0 0 1-.047.796l-.347.682a4 4 0 0 0-.432 1.908l.03 1.198a4 4 0 0 0 .272 1.358l.44 1.125a.6.6 0 0 0 .494.378l10.183 1.105a.6.6 0 0 0 .65-.462l.106-.463a.6.6 0 0 1 .732-.448l1.111.282a.6.6 0 0 0 .731-.44l.746-3.085a4 4 0 0 1 .657-1.418l.418-.573a.6.6 0 0 0 .053-.622l-2.07-4.148a3 3 0 0 0-.331-.522l-4.432-5.6a2 2 0 0 0-.541-.476l-1.361-.813a.6.6 0 0 1-.189-.852l.682-1.005a.57.57 0 0 0 .037-.572Z\"/>";

export const UsGeorgia = /*#__PURE__*/ defineComponent({
  name: 'GeoUsGeorgia',
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
