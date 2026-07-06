// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.075 10.935 1.2 13.503l4.106.8a.5.5 0 0 1 .394.39l.233 1.119a.5.5 0 0 0 .241.332l1.428.816a.5.5 0 0 0 .404.041l.978-.32a.5.5 0 0 0 .22-.145l1.463-1.661a.5.5 0 0 1 .106-.092l1.368-.87-.148-1.076a.5.5 0 0 1 .268-.512l.866-.445a.5.5 0 0 0 .249-.596l-.522-1.652 2.119-.173.13 1.233h1.438a.5.5 0 0 0 .26-.073l1.505-.912a.5.5 0 0 1 .674.148l.447.664 2.669-.799a.5.5 0 0 0 .348-.389l.356-1.947-1.431.095a.5.5 0 0 0-.324.15l-.626.639a.5.5 0 0 1-.505.128l-2.048-.634a.5.5 0 0 0-.211-.019l-1.724.22a.5.5 0 0 1-.364-.096l-1.243-.937-2.282 1.14a.5.5 0 0 0-.164.133l-1.532 1.885a.5.5 0 0 1-.216.154l-1.895.696a.5.5 0 0 1-.195.03l-3.61-.16a.5.5 0 0 0-.355.127Z\"/>";

export const As = /*#__PURE__*/ defineComponent({
  name: 'GeoAs',
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
