// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.879 7.632 2.57 4.83a.53.53 0 0 0-.83.613l1.252 2.93a1 1 0 0 0 .268.365l2.098 1.803 2.112 2.313a1 1 0 0 0 .297.223l2.123 1.046a1 1 0 0 1 .166.103l2.097 1.605q.1.077.216.126l2.155.92a1 1 0 0 1 .265.165l.553.482a1.005 1.005 0 0 0 1.548-1.228l-.184-.348a1 1 0 0 0-.446-.432l-.962-.469a1 1 0 0 1-.238-.162l-1.986-1.823a1 1 0 0 0-.162-.12l-2.763-1.659a1 1 0 0 1-.289-.262L8.224 8.81a1 1 0 0 0-.421-.33l-1.66-.687a1 1 0 0 1-.264-.16ZM16.778 8.94l.096-.255a.884.884 0 0 1 1.6-.122l.632 1.128a.87.87 0 0 1-1.376 1.037l-.726-.733a1 1 0 0 1-.226-1.055Zm4.141 4.21-.038-.147a.95.95 0 1 1 1.866-.306l.01.152a.935.935 0 0 1-1.838.3ZM14.08 6.135l-.701 1.037a.728.728 0 1 0 1.226.781l.644-1.073a.694.694 0 0 0-1.17-.745Zm5.772 11.848-.068-.056a.887.887 0 1 0-.977 1.47l.078.042a.878.878 0 0 0 .967-1.456Z\"/>";

export const Nc = /*#__PURE__*/ defineComponent({
  name: 'GeoNc',
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
