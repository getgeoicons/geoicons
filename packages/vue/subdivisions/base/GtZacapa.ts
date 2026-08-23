// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M1.708 7.966a.3.3 0 0 0-.168.491l2.734 3.14a.3.3 0 0 1-.224.497l-1.597.013a.3.3 0 0 0-.26.447l1.218 2.17a.6.6 0 0 1-.071.689l-.795.908a.6.6 0 0 0-.027.757l2.032 2.684a1 1 0 0 0 .663.387l.634.086a1 1 0 0 0 1.057-.605l.138-.332a1 1 0 0 0 .05-.622l-.208-.854a1 1 0 0 1 .363-1.03l.406-.31a1 1 0 0 1 .68-.205l3.592.26a2 2 0 0 0 1.107-.243l1.16-.637a2 2 0 0 1 1.162-.237l2.854.285c.286.029.576-.005.848-.099l2.673-.918a1 1 0 0 0 .668-.832l.365-3.178a1 1 0 0 0-.129-.616l-1.238-2.133a1 1 0 0 1 .146-1.197l.48-.497a1 1 0 0 0 .28-.752l-.023-.406a1 1 0 0 0-.523-.823l-.825-.447a1 1 0 0 0-.572-.116l-3.091.296a1 1 0 0 0-.62.296l-1.27 1.298a2 2 0 0 1-.699.462L11.806 7.17a2 2 0 0 1-.676.138l-2.246.061a.6.6 0 0 0-.457.231l-.65.833a.6.6 0 0 1-.73.173L4.824 7.551a1 1 0 0 0-.622-.077z\"/>";

export const GtZacapa = /*#__PURE__*/ defineComponent({
  name: 'GeoGtZacapa',
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
