// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.723 9.416-.644.02a.877.877 0 0 0-.635 1.451l.401.46a1 1 0 0 1 .228.853l-.095.473a1 1 0 0 0 .278.906l.683.676q.105.104.234.172l1.186.631a1 1 0 0 0 .38.113l.913.082c.14.012.28-.005.411-.05l.581-.197a.97.97 0 0 1 1.227 1.24l-.036.103a1 1 0 0 0 .127.91l.245.345a1 1 0 0 0 1.19.35l.726-.293a1 1 0 0 1 .81.029l.927.45a1 1 0 0 0 .758.047l1.406-.476a1 1 0 0 0 .329-.188l.9-.77a1 1 0 0 0 .269-.365l.398-.928a1 1 0 0 0 .081-.418l-.011-.491a1 1 0 0 0-.158-.515l-.653-1.021a.757.757 0 0 1 1.172-.946l.34.337a.72.72 0 0 0 1.177-.776l-.34-.862a1 1 0 0 1 .045-.833l.34-.646q.047-.09.075-.186l.375-1.287A.646.646 0 0 0 17.636 7l-.57.096a1 1 0 0 1-1.074-.567l-.112-.243a.91.91 0 0 0-1.712.174l-.02.086a1 1 0 0 1-.911.77l-1.525.096a1 1 0 0 1-.522-.11l-1.357-.703a1 1 0 0 0-1.044.077l-.304.22a1 1 0 0 1-.848.153l-.43-.117a1 1 0 0 0-.545.006l-1.944.572a1 1 0 0 0-.572.44l-.598.985a1 1 0 0 1-.825.48Zm19.241 3.507-1.778 1.428a.818.818 0 1 1-1.014-1.283l1.843-1.434a.25.25 0 0 0 .097-.2l-.02-2.38a.844.844 0 1 1 1.688.017l-.069 2.35a2 2 0 0 1-.747 1.502Z\"/>";

export const EastAsia = /*#__PURE__*/ defineComponent({
  name: 'GeoEastAsia',
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
