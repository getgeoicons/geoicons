// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m6.29 12.014 1.728 6.94a.5.5 0 0 0 .597.366l4.717-1.082a.5.5 0 0 0 .187-.087l2.111-1.573a.5.5 0 0 1 .79.31l.46 2.506q.017.089.063.166l1.575 2.641a.25.25 0 0 0 .462-.09l.7-4.604a.5.5 0 0 0-.004-.177l-.964-4.601a.5.5 0 0 0-.896-.188l-1.025 1.436a.5.5 0 0 1-.862-.084l-1.004-2.205a.5.5 0 0 1 .256-.666l3.097-1.344a.5.5 0 0 0 .241-.221l.867-1.61a.5.5 0 0 0-.217-.684l-1.348-.674a.5.5 0 0 0-.225-.053l-6.308.02a.5.5 0 0 1-.501-.529l.105-1.839a.5.5 0 0 0-.093-.32l-.786-1.095a.25.25 0 0 0-.383-.027l-.488.506a.5.5 0 0 1-.655.057L6.264 1.582a.5.5 0 0 0-.76.218l-.68 1.71a.5.5 0 0 0 .149.571l2.161 1.767a.5.5 0 0 1-.039.803l-2.06 1.374a.5.5 0 0 0 .06.866l1.513.73a.5.5 0 0 1 .251.626l-.551 1.47a.5.5 0 0 0-.017.297Z\"/>";

export const Bd = /*#__PURE__*/ defineComponent({
  name: 'GeoBd',
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
