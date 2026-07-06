// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m4.478 18.817-.855.284a.5.5 0 0 1-.605-.25l-.9-1.803a.5.5 0 0 1-.037-.352l.22-.832a.5.5 0 0 1 .275-.326l.549-.252a.5.5 0 0 0 .264-.616l-.409-1.195a.5.5 0 0 0-.258-.29l-.801-.38a.5.5 0 0 1-.25-.268l-.391-.984a.5.5 0 0 1 .012-.397l.335-.713a.5.5 0 0 0 .022-.371l-.365-1.096a.5.5 0 0 1-.025-.135l-.056-1.185.469-.124a.5.5 0 0 1 .375.049l1.265.718a.5.5 0 0 0 .31.061l2.172-.276a.5.5 0 0 0 .41-.334l.323-.94a.5.5 0 0 1 .335-.317l2.08-.595a.5.5 0 0 0 .152-.072l1.079-.765 1.018-.747a.5.5 0 0 1 .632.033l.547.498a.5.5 0 0 1 .164.365l.007.77a.5.5 0 0 0 .297.452l1.462.65a.5.5 0 0 0 .336.025l1.38-.38a.5.5 0 0 1 .337.024l2.436 1.086a.5.5 0 0 0 .215.043l1.688-.04a.5.5 0 0 1 .302.093l1.202.86a.5.5 0 0 1-.023.828l-1.647 1.046a.5.5 0 0 0-.187.213l-.69 1.499-.04.07-.832 1.236a.5.5 0 0 1-.427.22l-.43-.01.113-2.037.01-.079.125-.573a.5.5 0 0 0-.712-.553l-1.422.711a.5.5 0 0 0-.246.618l.36.994a.5.5 0 0 1-.075.476l-.932 1.202a.5.5 0 0 1-.183.147l-1.255.587a.5.5 0 0 0-.283.525l.134.915a.5.5 0 0 1-.307.536l-.796.323a.5.5 0 0 0-.311.427l-.07.972a.5.5 0 0 1-.345.44l-.55.178a.5.5 0 0 1-.653-.46l-.008-.257a.5.5 0 0 0-.174-.364l-.511-.437a.5.5 0 0 0-.662.01l-.4.364a.5.5 0 0 0-.131.193l-.314.828a.5.5 0 0 1-.44.322l-.013.001a.5.5 0 0 1-.514-.379l-.36-1.46a.5.5 0 0 0-.284-.337l-.615-.272a.5.5 0 0 0-.602.157l-.774 1.03a.5.5 0 0 1-.242.174Z\"/>";

export const AsiaRussiaSimplified = /*#__PURE__*/ defineComponent({
  name: 'GeoAsiaRussiaSimplified',
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
