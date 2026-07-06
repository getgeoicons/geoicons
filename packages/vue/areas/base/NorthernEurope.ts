// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m12.851 9.827-2.556 2.41a1 1 0 0 0-.313.779l.134 2.607a.6.6 0 0 0 .347.513l.584.27a.6.6 0 0 0 .591-.05l.774-.531a.6.6 0 0 1 .86.196l1.22 2.128a.99.99 0 0 0 1.846-.57l-.098-1.222a1 1 0 0 1 .29-.787l.447-.447a.6.6 0 0 0-.034-.88l-.484-.414a1 1 0 0 1-.327-.549l-.278-1.289a1 1 0 0 1 .045-.571l1.173-3.038a.957.957 0 0 1 1.724-.13l.127.222a1 1 0 0 1 .02.958l-.74 1.422a1 1 0 0 0-.1.619l.21 1.313a1 1 0 0 0 .616.77l.506.203a.6.6 0 0 0 .546-.052l1.637-1.047a1 1 0 0 0 .413-.536l.661-2.051a.6.6 0 0 0-.13-.591l-1.73-1.874a1 1 0 0 1-.211-.355L19.507 3.99a1 1 0 0 0-.14-.268l-.44-.6a1 1 0 0 0-1.135-.353l-1.079.375a1 1 0 0 0-.419.28l-1.8 2.025a1 1 0 0 0-.203.354l-1.175 3.605a1 1 0 0 1-.265.417ZM2.462 8.7l-.71-.65a1 1 0 0 1-.304-.535l-.126-.613a1 1 0 0 1 .34-.972l.193-.16a.947.947 0 0 1 1.336.126.95.95 0 0 0 .664.342l.853.06a1 1 0 0 1 .843.591l.18.407a1 1 0 0 1-.275 1.175l-.232.193a1 1 0 0 1-.59.23l-1.448.068a1 1 0 0 1-.724-.262Zm8.683 11.522.01-1.044a.866.866 0 0 1 1.65-.359l.04.086a.97.97 0 0 1 .035.733l-.299.84a.74.74 0 0 1-1.436-.256Z\"/>";

export const NorthernEurope = /*#__PURE__*/ defineComponent({
  name: 'GeoNorthernEurope',
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
