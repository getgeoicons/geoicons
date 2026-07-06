// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M6.977 3.375 5.97 6.613a1 1 0 0 0 .162.907l1.373 1.785a1 1 0 0 1 .196.756l-.074.501a.875.875 0 0 0 1.364.846l.166-.115a.6.6 0 0 1 .915.316l.36 1.168a1 1 0 0 1 .044.312l-.06 3.653a1 1 0 0 0 .217.641l1.061 1.33a1 1 0 0 1 .139.232l.927 2.174a1 1 0 0 0 .315.404l1.36 1.032a.622.622 0 0 0 .873-.87l-.235-.311a.96.96 0 0 1-.193-.579v-.593a1 1 0 0 0-.07-.366l-.223-.569a1 1 0 0 0-.287-.4l-1.37-1.15a1 1 0 0 1-.286-.398l-.556-1.403a1 1 0 0 1-.07-.363l-.011-2.095a.524.524 0 0 1 .927-.337l1.606 1.938a1 1 0 0 1 .195.378l.409 1.512 2.613-1.952a1 1 0 0 0 .401-.777l.02-.79a1 1 0 0 0-.073-.4l-.525-1.298a1 1 0 0 0-.251-.362l-1.983-1.822a1 1 0 0 1-.323-.7l-.001-.032a1 1 0 0 1 .412-.846l.51-.37a.6.6 0 0 0 .01-.963L14.84 5.79a1 1 0 0 0-1.167-.03l-1.604 1.092a1 1 0 0 1-1.244-.094L9.65 5.666a1 1 0 0 1-.27-1.04l.341-1.062a1 1 0 0 0-.113-.852l-.375-.575a.847.847 0 0 0-1.347-.095l-.76 1.04a1 1 0 0 0-.148.293Z\"/>";

export const IndochinaPeninsula = /*#__PURE__*/ defineComponent({
  name: 'GeoIndochinaPeninsula',
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
