// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m8.3 22.747-3.458-.377a.6.6 0 0 1-.512-.762l1.181-4.111a1 1 0 0 0 .022-.46l-.73-3.903a1 1 0 0 1 .059-.569l.653-1.567a1 1 0 0 0 .07-.508l-.262-2.096a1 1 0 0 1 .125-.62l.999-1.748a1 1 0 0 0 .1-.246l.563-2.182a1 1 0 0 0 .032-.25v-.773a1 1 0 0 1 .51-.872l.184-.103a1 1 0 0 1 1.245.217l.653.753a1 1 0 0 1 .243.709l-.072 1.35a1 1 0 0 0 .483.91l.576.347a1 1 0 0 1 .413.487L12.425 9q.069.174.07.362l.024 2.942q.002.175.063.34l.582 1.565a1 1 0 0 0 1.343.565l1.094-.485a1 1 0 0 1 1.077.173l2.247 2.036a1 1 0 0 1 .314.574l.58 3.425a1 1 0 0 1-.058.54l-.395.985a.6.6 0 0 1-.913.26l-.714-.527a1 1 0 0 0-.907-.145l-1.017.335a1 1 0 0 1-1.062-.286l-.15-.17a1 1 0 0 0-.72-.337l-3.778-.108a1 1 0 0 0-.982.698l-.187.59a.6.6 0 0 1-.637.415Z\"/>";

export const CapeYorkPeninsula = /*#__PURE__*/ defineComponent({
  name: 'GeoCapeYorkPeninsula',
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
