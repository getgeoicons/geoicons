// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.664 9.372-2.058-.348a.25.25 0 0 0-.28.323l1.26 3.918a.5.5 0 0 0 .201.265l2.006 1.312a.5.5 0 0 0 .28.082l.493-.005a.5.5 0 0 0 .43-.748l-.435-.762a.5.5 0 0 1-.064-.212l-.15-2.11a.5.5 0 0 0-.147-.32L3.933 9.51a.5.5 0 0 0-.27-.138Zm8.786 6.2-.81-1.16a.25.25 0 0 1 .227-.393l1.417.121a.5.5 0 0 0 .378-.127l.995-.9 3.263-2.315a.5.5 0 0 0 .136-.145l1.274-2.056a.5.5 0 0 1 .736-.128l2.313 1.838a.5.5 0 0 1 .057.73l-.995 1.082a.5.5 0 0 1-.44.156l-1.792-.262a.5.5 0 0 0-.533.3l-1.087 2.561a.5.5 0 0 1-.497.303l-1.829-.137a.5.5 0 0 0-.198.025l-2.045.695a.5.5 0 0 1-.57-.188Z\"/>";

export const My = /*#__PURE__*/ defineComponent({
  name: 'GeoMy',
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
