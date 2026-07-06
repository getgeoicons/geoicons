// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.967 13.581-2.056 2.995a.5.5 0 0 0-.067.425l.687 2.307a.5.5 0 0 1 .02.13l.087 3.362 1.327-.008v-1.543a.5.5 0 0 1 .289-.453l2.487-1.162a.5.5 0 0 0 .288-.435l.096-2.614a.5.5 0 0 0-.04-.214l-.904-2.125a.5.5 0 0 1 .089-.53l2.555-2.833a.5.5 0 0 1 .162-.119l3.221-1.483a.5.5 0 0 0 .224-.203l1.053-1.82a.5.5 0 0 0 .067-.278l-.321-5.78-3.732 1.55a.5.5 0 0 1-.215.038l-2.896-.138-.222 2.377 1.355 1.57a.5.5 0 0 1 .098.478l-.766 2.407a.25.25 0 0 1-.436.077l-.865-1.126a.5.5 0 0 1-.102-.342l.105-1.393a.5.5 0 0 0-.287-.49l-.966-.454a.5.5 0 0 0-.372-.021L5.44 6.909l.274 1.483 2.792.764a.5.5 0 0 1 .367.458l.182 3.66a.5.5 0 0 1-.088.307Z\"/>";

export const Mz = /*#__PURE__*/ defineComponent({
  name: 'GeoMz',
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
