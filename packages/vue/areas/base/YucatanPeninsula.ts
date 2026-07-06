// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.076 8.09-.681 2.194a1 1 0 0 1-.327.481l-1.914 1.548a1 1 0 0 0-.153.153l-.742.928a1 1 0 0 0-.17.314l-.226.693a1 1 0 0 0 .3 1.07l.86.738a1 1 0 0 1 .323.53l.305 1.295a1 1 0 0 0 .37.568l1.469 1.113a1 1 0 0 1 .246.27l.746 1.204a1 1 0 0 0 .116.152l1.033 1.117a1 1 0 0 0 .78.32l3.512-.161a1 1 0 0 0 .689-.32l.979-1.06a1 1 0 0 0 .197-.316l.524-1.346a1 1 0 0 0 .068-.374l-.038-3.327a1 1 0 0 1 .226-.644l.768-.942a1 1 0 0 0 .197-.394l1.005-4.101q.037-.153.027-.31l-.193-2.675a1 1 0 0 1 .196-.67l1.438-1.925a1 1 0 0 0 .175-.382l.1-.452a1 1 0 0 0-.038-.562l-.217-.59a1 1 0 0 0-.308-.431l-.28-.228a1 1 0 0 0-.996-.155l-.892.35a1 1 0 0 1-.458.065l-2.028-.188a1 1 0 0 0-.53.096l-1.688.82a1 1 0 0 1-.272.087l-2.457.41a1 1 0 0 0-.434.184L8.45 4.16a1 1 0 0 0-.402.828l.073 2.78a1 1 0 0 1-.044.322Z\"/>";

export const YucatanPeninsula = /*#__PURE__*/ defineComponent({
  name: 'GeoYucatanPeninsula',
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
