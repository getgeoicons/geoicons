// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.087 4.018-.595-1.95a.595.595 0 0 0-1.163.225l.304 3.567a1 1 0 0 1-.015.272l-.377 1.976a1 1 0 0 0-.016.251l.113 1.79a1 1 0 0 1-.027.306l-.49 1.96a1 1 0 0 0-.03.255l.064 5.066.217 1.423a1 1 0 0 0 .043.176l.54 1.566a1 1 0 0 0 .157.287l.644.828a1 1 0 0 0 .442.324l.975.36a1 1 0 0 0 .552.041l1.158-.242a.58.58 0 0 0 .015-1.134l-.617-.146a1 1 0 0 1-.717-.658l-.185-.556a.6.6 0 0 1 .068-.52l.477-.723a.6.6 0 0 0-.037-.71l-.187-.229a.6.6 0 0 1-.135-.35l-.02-.387a.6.6 0 0 1 .37-.584l.323-.135a.6.6 0 0 0 .33-.343l.88-2.34a.6.6 0 0 1 .51-.386l.784-.067a1 1 0 0 0 .647-.315l.06-.064a.6.6 0 0 0 .144-.55l-.133-.55a.627.627 0 0 1 .819-.738l.338.12a.6.6 0 0 0 .618-.135l.272-.263a.6.6 0 0 0-.032-.892l-.99-.827a.6.6 0 0 1 .02-.938l1.7-1.296a.6.6 0 0 0 .222-.608l-.063-.282a.6.6 0 0 0-.56-.468l-2.805-.117a1 1 0 0 1-.52-.172l-1.161-.79a1 1 0 0 0-.722-.16l-1.539.249a.6.6 0 0 1-.67-.417Z\"/>";

export const SouthernSouthAmerica = /*#__PURE__*/ defineComponent({
  name: 'GeoSouthernSouthAmerica',
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
