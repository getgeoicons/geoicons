// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m18.853 12.795-13.84 8.977a.5.5 0 0 1-.51.02l-2.878-1.548a.5.5 0 0 1-.261-.399l-.151-1.791a.5.5 0 0 1 .064-.29l.868-1.518a.5.5 0 0 1 .137-.154l1.559-1.15a.5.5 0 0 0 .172-.575l-.422-1.15a.5.5 0 0 0-.47-.328h-.82a.5.5 0 0 1-.494-.423l-.494-3.18a.5.5 0 0 1 .023-.245l.358-1a.5.5 0 0 1 .227-.27L3.9 6.67a.5.5 0 0 0 .256-.455L4.1 4.687a.5.5 0 0 1 .694-.479l1.644.696a.5.5 0 0 0 .407-.007L9.213 3.79a.5.5 0 0 1 .491.038l1.271.856a.5.5 0 0 0 .32.084l3.046-.25a.5.5 0 0 0 .219-.071l2.512-1.524a.5.5 0 0 1 .377-.059l1.347.328a.5.5 0 0 0 .285-.014l2.707-.958a.5.5 0 0 1 .622.264l.246.544a.5.5 0 0 1-.103.56l-1.478 1.468a.5.5 0 0 1-.252.135l-1.263.259a.5.5 0 0 0-.4.483l-.079 6.447a.5.5 0 0 1-.228.414Z\"/>";

export const Sy = /*#__PURE__*/ defineComponent({
  name: 'GeoSy',
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
