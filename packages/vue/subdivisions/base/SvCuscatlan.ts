// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.972 1.665a.6.6 0 0 0-.315.496L5.52 4.603a2 2 0 0 1-.136.622l-.582 1.478a1 1 0 0 0 .111.941l1.612 2.297a.6.6 0 0 1-.13.824l-.775.583a.6.6 0 0 0-.024.94l3.159 2.642a2 2 0 0 1 .536.704l1.633 3.576a.6.6 0 0 0 .6.348l.768-.07a.6.6 0 0 1 .65.677l-.138 1.03a.6.6 0 0 0 .36.632l1.812.77a1 1 0 0 0 .921-.074L18.7 20.77a1 1 0 0 0 .467-.785l.18-2.898a1 1 0 0 0-.706-1.018l-1.318-.402a1 1 0 0 1-.7-.835l-.078-.637a1 1 0 0 0-.476-.735l-1.949-1.18a1 1 0 0 1-.483-.878l.022-.96a1 1 0 0 1 .245-.636l.902-1.034a.6.6 0 0 0-.35-.985l-1.857-.323a1 1 0 0 1-.789-.704l-.51-1.738a1 1 0 0 0-.47-.59L8.563 3.158a2 2 0 0 1-.597-.513L7.15 1.599a.6.6 0 0 0-.756-.16z\"/>";

export const SvCuscatlan = /*#__PURE__*/ defineComponent({
  name: 'GeoSvCuscatlan',
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
