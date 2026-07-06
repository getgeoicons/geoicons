// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.853 15.657 2.625 2.229a.5.5 0 0 0 .678-.028l.81-.814a.5.5 0 0 0 .105-.153l.988-2.265a.5.5 0 0 1 .417-.299l1.006-.083a.5.5 0 0 0 .259-.098l1.333-1a.5.5 0 0 1 .28-.1l3.42-.139a.5.5 0 0 0 .478-.532l-.08-1.23a.5.5 0 0 0-.175-.35l-1.166-.987a.5.5 0 0 1 .03-.787l1.636-1.178a.5.5 0 0 0 .18-.571l-.385-1.096a.5.5 0 0 0-.47-.335l-9.68-.025a.5.5 0 0 0-.256.07L9.112 7.535a.5.5 0 0 1-.372.056l-2.579-.62a.5.5 0 0 0-.216-.004l-4.203.846a.25.25 0 0 0-.102.444L2.96 9.26a.5.5 0 0 0 .395.093l.952-.18a.5.5 0 0 1 .588.565l-.229 1.524a.5.5 0 0 0 .332.547l1.604.554a.5.5 0 0 0 .343-.005l2.22-.852a.5.5 0 0 1 .651.301l.648 1.845a.5.5 0 0 1-.065.457l-.628.876a.5.5 0 0 0 .083.672Zm-4.02 1.463-.942-.404a.5.5 0 0 1-.303-.472l.01-.389a.5.5 0 0 1 .433-.482l1.878-.255a.5.5 0 0 1 .566.463l.06.929a.5.5 0 0 1-.44.529l-1.007.118a.5.5 0 0 1-.255-.037Z\"/>";

export const Gw = /*#__PURE__*/ defineComponent({
  name: 'GeoGw',
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
