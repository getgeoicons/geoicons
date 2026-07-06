// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.702 3.99-1.63 2.043a.5.5 0 0 0-.079.483l.723 1.994a.5.5 0 0 0 .49.329l1.13-.045a.5.5 0 0 1 .503.628l-1.02 3.851a.5.5 0 0 0 .215.55l.103.065a.5.5 0 0 0 .584-.033l1.734-1.408a.5.5 0 0 1 .573-.041l.767.46a.5.5 0 0 0 .636-.102l.815-.944a.5.5 0 0 1 .424-.17l1.095.1a.5.5 0 0 1 .323.16l1.88 2.056a.5.5 0 0 1 .13.344l-.023 1.78a.5.5 0 0 0 .197.404l1.462 1.113a.5.5 0 0 1 .181.275l.476 1.877a.5.5 0 0 1-.065.395l-.873 1.346a.5.5 0 0 0 .225.732l.965.41a.5.5 0 0 0 .605-.173l.62-.884a.5.5 0 0 1 .702-.12l.47.34a.5.5 0 0 0 .495.05l1.03-.458a.5.5 0 0 0 .292-.383l.205-1.37a.5.5 0 0 0-.168-.453l-.543-.468a.5.5 0 0 1-.134-.575l.187-.44a.5.5 0 0 0-.168-.6l-1.15-.83a.5.5 0 0 1-.119-.123l-3.416-4.965a.5.5 0 0 0-.176-.157l-2.572-1.376a.5.5 0 0 1-.06-.844l1.6-1.167a.5.5 0 0 0 .094-.718L13.05 5.217a.5.5 0 0 0-.696-.08l-.701.549a.5.5 0 0 1-.582.024l-1.198-.785a.5.5 0 0 1-.226-.425l.02-1.345a.5.5 0 0 0-.155-.368L8.015 1.352a.5.5 0 0 0-.378-.138l-.988.064a.5.5 0 0 0-.444.652l.817 2.547-1.757-.644a.5.5 0 0 0-.563.157Z\"/>";

export const La = /*#__PURE__*/ defineComponent({
  name: 'GeoLa',
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
