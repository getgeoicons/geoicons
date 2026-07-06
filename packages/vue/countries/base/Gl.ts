// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.177 20.465-.35 1.452a.75.75 0 0 1-1.039.507l-.178-.08a1 1 0 0 1-.34-.254l-.642-.738a1 1 0 0 1-.206-.374l-.342-1.164a1 1 0 0 1-.03-.43l.147-.98a1 1 0 0 0-.05-.491l-.628-1.72a1 1 0 0 1-.06-.343v-2.113a1 1 0 0 0-.187-.582l-.506-.708a1 1 0 0 0-.648-.405l-1.268-.213a1 1 0 0 1-.728-.538l-.608-1.209a.768.768 0 0 1 .505-1.09l.587-.144a.952.952 0 0 0 .594-1.41l-.015-.025a1 1 0 0 1 .162-1.225l.38-.372a1 1 0 0 0 .275-.484l.149-.627a1 1 0 0 1 .363-.562l.026-.02a1 1 0 0 1 .457-.196l1.414-.22a1 1 0 0 0 .76-.581l.133-.297a1 1 0 0 1 .46-.485l1.882-.958a1 1 0 0 1 .31-.098l.351-.051a1 1 0 0 1 .492.052l1.411.523a1 1 0 0 1 .455.341l.602.81a1 1 0 0 1 .195.529l.057.83a.804.804 0 0 0 1.25.612l.337-.226a.5.5 0 0 1 .612.042l.488.434a.5.5 0 0 1 .052.694l-2.181 2.619a1 1 0 0 0-.003 1.277l.2.241a1 1 0 0 1 .212.82l-.123.66a1 1 0 0 0 .032.49l.16.5a1 1 0 0 1-.195.96l-.538.623a1 1 0 0 0-.24.742l.113 1.27a1 1 0 0 1-.243.745l-.589.676a1 1 0 0 1-.463.3l-.773.235a1 1 0 0 0-.58.465l-.34.603a1 1 0 0 1-.415.398l-.599.307a1 1 0 0 0-.516.656Z\"/>";

export const Gl = /*#__PURE__*/ defineComponent({
  name: 'GeoGl',
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
