// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M2.33 21.738a.6.6 0 0 0 .91.512l1.102-.667c.2-.121.421-.206.651-.251l8.358-1.638a.6.6 0 0 0 .484-.613l-.117-2.982a1 1 0 0 1 .23-.68l1.018-1.221a2 2 0 0 0 .464-1.245l.051-2.864a1.5 1.5 0 0 1 1.167-1.436l4.468-1.018a.3.3 0 0 0 .13-.52l-2.867-2.458a2 2 0 0 1-.517-.685l-.597-1.303a1 1 0 0 0-.522-.506l-1.763-.739a1 1 0 0 0-.995.128l-1.134.868a1 1 0 0 0-.365.564l-.468 1.984a2 2 0 0 1-.448.865L9.037 8.701a1 1 0 0 1-1.324.157l-2.352-1.65a1 1 0 0 0-.902-.127l-1.483.514a1 1 0 0 0-.672.947z\"/>";

export const BzOrangeWalk = /*#__PURE__*/ defineComponent({
  name: 'GeoBzOrangeWalk',
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
