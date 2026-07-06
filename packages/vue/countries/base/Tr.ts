// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.224 7.494-1.138.275a.5.5 0 0 0-.372.381l-.465 2.173a.5.5 0 0 0 .092.41l.862 1.12a.5.5 0 0 1 .088.429l-.248.966a.5.5 0 0 0 .055.38l.785 1.318a.5.5 0 0 0 .263.215l2.323.82a.5.5 0 0 0 .46-.068l.928-.677a.5.5 0 0 1 .564-.017l1.517.972a.5.5 0 0 0 .476.035l1.609-.731a.5.5 0 0 1 .477.034l1.25.802a.5.5 0 0 0 .664-.113l.594-.76a.5.5 0 0 1 .333-.189l5.505-.68a.5.5 0 0 1 .09-.004l2.163.124a.5.5 0 0 0 .51-.635l-.495-1.749a.5.5 0 0 1-.005-.25l.272-1.171a.5.5 0 0 0-.074-.396l-1.384-2.025a.5.5 0 0 0-.447-.217l-1.3.087a.5.5 0 0 0-.193.053l-1.265.641a.5.5 0 0 1-.255.053l-2.804-.162a.5.5 0 0 1-.193-.05l-2.615-1.29a.5.5 0 0 0-.237-.05l-2.346.077a.5.5 0 0 0-.278.096l-1.518 1.11a.5.5 0 0 1-.367.09l-2.418-.349a.5.5 0 0 1-.305-.165l-.664-.757a.5.5 0 0 0-.494-.156Z\"/>";

export const Tr = /*#__PURE__*/ defineComponent({
  name: 'GeoTr',
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
