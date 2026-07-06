// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.988 15.718 1.386 11.31a1 1 0 0 1-.125-.676l.386-2.275a1 1 0 0 1 .171-.412l.862-1.212a1 1 0 0 1 .352-.307l.52-.271a1 1 0 0 1 .8-.055l1.168.418a1 1 0 0 0 .838-.077l.819-.474a1 1 0 0 1 .564-.133l1.439.09a1 1 0 0 0 .48-.09l2.51-1.152a.6.6 0 0 1 .848.5l.042.572a1 1 0 0 0 1.174.91l1.22-.219a1 1 0 0 0 .807-.806l.022-.12a.982.982 0 0 1 1.925-.032l.298 1.376a1 1 0 0 0 .6.716l3.194 1.3a.6.6 0 0 1 .35.723l-.321 1.108a1 1 0 0 1-.852.716l-.352.039a1 1 0 0 0-.835.662l-.096.276a1 1 0 0 0-.046.482l.453 2.96a.6.6 0 0 1-.356.642l-3.296 1.424a.6.6 0 0 1-.78-.296l-.625-1.33a.6.6 0 0 0-.613-.34l-1.262.147a.6.6 0 0 0-.485.368l-.815 1.985a1 1 0 0 1-.47.512l-1.102.561a.6.6 0 0 1-.593-.027l-1.041-.656a1 1 0 0 1-.361-.398l-.968-1.93a1 1 0 0 0-.345-.388l-.131-.086a1 1 0 0 0-1.253.126l-.09.089a.6.6 0 0 1-.579.153l-.848-.23a1 1 0 0 1-.6-.456Z\"/>";

export const AmazonBasin = /*#__PURE__*/ defineComponent({
  name: 'GeoAmazonBasin',
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
