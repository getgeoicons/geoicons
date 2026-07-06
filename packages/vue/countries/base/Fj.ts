// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.71 19.048-.333-.595a.5.5 0 0 1 .069-.583l.99-1.075a.5.5 0 0 0 .108-.497l-.19-.568a.5.5 0 0 1 .213-.585l2.376-1.458a.5.5 0 0 1 .425-.046l.788.271a.5.5 0 0 0 .337-.004l1.428-.53a.5.5 0 0 1 .521.108l2.188 2.111a.5.5 0 0 1 .152.342l.053 1.492a.5.5 0 0 0 .103.287l.501.65a.5.5 0 0 1-.046.662l-.339.334a.5.5 0 0 1-.451.133l-1.195-.245a.5.5 0 0 0-.407.094l-1.128.872a.5.5 0 0 1-.293.104l-1.752.044a.5.5 0 0 1-.152-.02l-3.668-1.062a.5.5 0 0 1-.297-.236Zm8.344-9.928c.099-.252.218-.548.32-.778a.44.44 0 0 1 .515-.24l.57.14a.5.5 0 0 0 .478-.138l1.16-1.194a.5.5 0 0 1 .254-.14l2.607-.56a.5.5 0 0 0 .118-.042l4.7-2.343a.494.494 0 0 1 .516.836l-2.89 2.17a.5.5 0 0 0-.048.758l.017.017a.5.5 0 0 0 .559.095l1.256-.582a.25.25 0 0 1 .353.255l-.143 1.263a.5.5 0 0 1-.451.441l-2.215.202a.5.5 0 0 1-.207-.025l-1.836-.627a.5.5 0 0 0-.572.188l-.87 1.252a.5.5 0 0 1-.624.166l-.518-.244a.5.5 0 0 0-.546.078l-.585.52a.5.5 0 0 1-.65.014l-1.12-.919a.49.49 0 0 1-.149-.562Zm11.74.307-1.247 1.487a.5.5 0 0 0 .106.738l.356.237a.5.5 0 0 0 .669-.105l1.165-1.464a.5.5 0 0 0-.047-.674l-.275-.26a.5.5 0 0 0-.727.041Z\"/>";

export const Fj = /*#__PURE__*/ defineComponent({
  name: 'GeoFj',
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
