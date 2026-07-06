// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.313 8.89c.055.332.111.713.153 1.041.058.44.369.83.795.956l4.003 1.172a1 1 0 0 1 .354.189l3.3 2.72a1 1 0 0 0 .539.223l2.786.272a1 1 0 0 1 .83.62l.354.876a1 1 0 0 0 .625.579l3.535 1.122a.6.6 0 0 0 .777-.65l-.097-.742a1 1 0 0 1 .344-.891l.336-.286a1 1 0 0 0 .33-.975l-.175-.801a1 1 0 0 0-.477-.654l-.208-.12a1 1 0 0 1-.457-1.157l.617-2.022q.052-.172.162-.316l2.747-3.59a.6.6 0 0 0-.044-.781l-.241-.251a.6.6 0 0 0-.776-.076l-2.229 1.555a1 1 0 0 1-.956.103l-.646-.268a1 1 0 0 0-.876.053l-1.77 1a1 1 0 0 1-.622.121l-2.258-.296a1 1 0 0 0-.56.088l-1.039.494a1 1 0 0 1-.986-.073l-2.06-1.381a1 1 0 0 0-1.15.025l-.66.486a1 1 0 0 1-1.291-.09l-.458-.446a.6.6 0 0 0-.811-.024L1.656 7.904c-.28.242-.405.62-.343.986Z\"/>";

export const SicilyRegion = /*#__PURE__*/ defineComponent({
  name: 'GeoSicilyRegion',
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
