// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M8.815 3.686 9.51 2.56a1 1 0 0 1 .269-.288l.935-.671a1 1 0 0 1 .404-.171l1.105-.2a1 1 0 0 1 .312-.008l.409.055c.376.05.665.357.693.736l.014.179a.619.619 0 0 0 1.044.402l.491-.469a.739.739 0 1 1 .992 1.095l-1.523 1.312a.91.91 0 0 0-.12 1.255l.046.058q.108.136.256.229l.435.27a1 1 0 0 1 .444 1.082l-.335 1.404a1 1 0 0 1-.355.554l-1.376 1.081a.951.951 0 0 0 .886 1.652l.311-.103a1 1 0 0 1 1.164.425l.866 1.404a1 1 0 0 1 .147.456l.093 1.364a1 1 0 0 1-.43.892l-2.609 1.795a1 1 0 0 0-.381 1.14l.28.842a1 1 0 0 1-.085.82l-.393.675a1 1 0 0 1-.417.39l-1.167.584-1.129-5.082a1 1 0 0 0-.397-.598l-1.02-.724a1 1 0 0 1-.417-.725l-.04-.447a1 1 0 0 0-.224-.545l-1.59-1.933a1 1 0 0 1-.225-.71l.049-.653a1 1 0 0 1 .372-.707l1.194-.955a1 1 0 0 0 .374-.823l-.195-4.645a1 1 0 0 1 .148-.567Z\"/>";

export const Tn = /*#__PURE__*/ defineComponent({
  name: 'GeoTn',
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
