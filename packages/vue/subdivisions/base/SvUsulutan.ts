// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M12.205 3.781a1 1 0 0 0-.909.138l-1.012.735a2 2 0 0 0-.564.63l-.555.976a1 1 0 0 1-.734.496l-.925.127a1 1 0 0 0-.613.328l-.748.844a1 1 0 0 0-.242.527l-.271 1.968a2 2 0 0 1-.336.863l-.879 1.273a1 1 0 0 0-.175.518l-.052 1.037a1 1 0 0 1-.327.691l-2.286 2.07a.3.3 0 0 0 .104.507l2.222.76 9.038 1.899a10 10 0 0 0 2.052.214l7.221.003a.3.3 0 0 0 .244-.476l-.863-1.198a1 1 0 0 0-.637-.4l-1.163-.207a.3.3 0 0 1-.212-.439l.483-.886a.3.3 0 0 0-.162-.426l-3.852-1.375a2 2 0 0 1-1.037-.846l-.18-.296a2 2 0 0 1-.29-1.08l.157-7.389a1 1 0 0 0-.679-.968z\"/>";

export const SvUsulutan = /*#__PURE__*/ defineComponent({
  name: 'GeoSvUsulutan',
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
