// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.077 22.503a.3.3 0 0 0 .3.297h12.097a.6.6 0 0 0 .579-.76l-.261-.944a1 1 0 0 0-.404-.562l-2.714-1.836a1 1 0 0 1-.438-.785l-.108-2.48a1 1 0 0 1 .335-.79l.756-.673a1 1 0 0 0 .336-.743l.005-1.292a1 1 0 0 1 .32-.729l2.747-2.55a1 1 0 0 1 .218-.154l1.62-.845c.825-.43.668-1.653-.239-1.86l-.91-.21a1 1 0 0 0-.39-.01l-1.754.297a1 1 0 0 1-.66-.116L13.163 4.43a1 1 0 0 0-.659-.116l-1.402.237a1 1 0 0 1-.62-.094l-1.407-.715L8.673 1.3l-1.609-.1.015 1.522-4.601.03a.3.3 0 0 0-.295.347l1.546 9.674a1 1 0 0 1-.097.613l-.648 1.266a1 1 0 0 0 .021.95l.885 1.557a1 1 0 0 1 .13.482z\"/>";

export const UsMinnesota = /*#__PURE__*/ defineComponent({
  name: 'GeoUsMinnesota',
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
