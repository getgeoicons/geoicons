// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M9.918 3.282a1 1 0 0 0-.792-.268l-1.065.111a2 2 0 0 0-1.414.82L5.22 5.927a2 2 0 0 1-.679.593l-1.18.632a2 2 0 0 0-.475.355L1.57 8.83a.6.6 0 0 0-.048.79l.609.784a1 1 0 0 1 .151.95l-.158.442a1 1 0 0 0 .373 1.16l1.144.79a2 2 0 0 1 .681.812l1.186 2.583a2 2 0 0 1 .173 1.03l-.124 1.26a1 1 0 0 0 .295.81l.45.443a.6.6 0 0 0 .765.062l1.215-.853a2 2 0 0 1 .914-.349l1.982-.235c.291-.034.586-.005.864.088l2.109.698a2 2 0 0 0 1.557-.127l4.165-2.182a2 2 0 0 0 1.068-1.647l.034-.545a1 1 0 0 1 .332-.684l.683-.61a2 2 0 0 0 .666-1.42l.106-2.938a2 2 0 0 0-.767-1.648l-2.33-1.821a2 2 0 0 0-.997-.41L17.37 5.91a2 2 0 0 1-.808-.28l-.937-.571a1 1 0 0 0-1.037-.004l-1.06.638a1 1 0 0 1-1.204-.13z\"/>";

export const DmSaintJoseph = /*#__PURE__*/ defineComponent({
  name: 'GeoDmSaintJoseph',
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
