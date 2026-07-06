// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<g stroke-linejoin=\"round\"><path fill-rule=\"evenodd\" d=\"m20.924 13.662-2.691.59.961 1.07-1.451 1.208a1 1 0 0 0-.357.685l-.187 2.185 3.22-3.211a1 1 0 0 0 .289-.597z\" clip-rule=\"evenodd\"/><path d=\"m2.273 11.774-.332-.146a1 1 0 0 1-.586-.748l-.14-.819a1 1 0 0 1 .098-.632l.894-1.717q.065-.125.162-.227L4.356 5.39c.152-.16.353-.266.571-.3l3.017-.477a.925.925 0 0 1 1.066.821c.033.33.24.616.54.752l.942.424a.86.86 0 0 0 1.016-.236.86.86 0 0 1 1.04-.226l.87.423c.176.085.372.117.566.093l.674-.087c.376-.048.692-.304.818-.662l.258-.735a.6.6 0 0 1 .533-.401l1.46-.082a.6.6 0 0 1 .572.331l1.576 3.158c.269.538.948.72 1.45.388l.244-.162L22.8 9.414l-.518 1a1 1 0 0 1-.33.37l-1.202.808a1 1 0 0 1-.258.123l-1.926.607-.21-1.13a1 1 0 0 0-.105-.294l-1.53-2.827a.6.6 0 0 0-.762-.268l-.428.18a.6.6 0 0 0-.287.857l1.048 1.796a.6.6 0 0 1 .057.474l-.617 2.08a.6.6 0 0 1-.55.43l-2.22.096a.6.6 0 0 1-.581-.37l-.268-.646a1 1 0 0 1-.049-.62l.44-1.812-1.937-1.043a1 1 0 0 0-.465-.12L9.618 9.1a1 1 0 0 0-.594.187l-1.168.835c-.336.24-.785.25-1.13.024l-2.389-1.56.132 3.154-1.727.116c-.16.01-.321-.018-.469-.082Z\"/></g>";

export const TheArabWorld = /*#__PURE__*/ defineComponent({
  name: 'GeoTheArabWorld',
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
