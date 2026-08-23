// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M21.169 9.97a1 1 0 0 0-.925-.357l-6.095.92a1 1 0 0 1-.356-.01L7.96 9.29a1 1 0 0 0-.719.119l-.57.34a1 1 0 0 1-1.264-.2l-.901-1.03a1 1 0 0 0-.76-.341l-.841.006a1 1 0 0 0-.854.492l-.54.917a1 1 0 0 0 .016 1.043l2.038 3.219a1 1 0 0 0 1.09.434l.963-.243a1 1 0 0 1 1.075.411l.445.662a1 1 0 0 0 .726.436l2.195.23a1 1 0 0 0 .69-.186l2.353-1.704a1 1 0 0 1 .556-.19l7.772-.24a1 1 0 0 0 .849-.525l.204-.378a1 1 0 0 0-.105-1.106z\"/>";

export const HnAtlantida = /*#__PURE__*/ defineComponent({
  name: 'GeoHnAtlantida',
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
