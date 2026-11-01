// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.086 4.635 1.207.06a1.5 1.5 0 0 0 1.203-.509l.284-.323c.289-.33.42-.772.356-1.206a1 1 0 0 1 .666-1.092l.517-.177a1 1 0 0 1 .984.195l1.53 1.345a2 2 0 0 1 .607.972l.841 3.06a2 2 0 0 1-.15 1.445l-1.976 3.835a.8.8 0 0 1-.462.394l-.706.231a.8.8 0 0 0-.55.77l.09 7.927a1 1 0 0 1-.896 1.006l-1.607.166a1 1 0 0 1-.963-.485l-.266-.448a2 2 0 0 1-.28-1.012l-.023-6.86a2 2 0 0 0-.24-.942l-.465-.863a2 2 0 0 1-.239-.87l-.039-.971a1 1 0 0 0-.474-.81l-.874-.541a1 1 0 0 1-.434-1.133l.44-1.498a1 1 0 0 1 .238-.41l.91-.95a1 1 0 0 1 .771-.306Z\"/>";

export const Bj = /*#__PURE__*/ defineComponent({
  name: 'GeoBj',
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
