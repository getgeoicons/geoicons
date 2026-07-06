// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m10.299 20.933-1.142 1.631a.5.5 0 0 1-.453.211l-.388-.033a.5.5 0 0 1-.415-.296l-.396-.895a.5.5 0 0 0-.423-.297l-2.508-.171a.5.5 0 0 1-.464-.465l-.055-.806a.5.5 0 0 1 .351-.512l.566-.175a.5.5 0 0 0 .312-.281l1.304-3.056a.5.5 0 0 0-.194-.62l-.627-.393a.392.392 0 0 0-.566.17.392.392 0 0 1-.576.163l-1.893-1.274a.5.5 0 0 1-.034-.804l.376-.303a.5.5 0 0 0 .172-.507l-.574-2.373A.5.5 0 0 1 2.9 9.3l.882-.532a.5.5 0 0 0 .239-.484l-.075-.668a.5.5 0 0 1 .17-.433l1.252-1.082a.5.5 0 0 0 .172-.406l-.104-1.911a.5.5 0 0 1 .357-.507l2.306-.685a.5.5 0 0 0 .204-.119L9.359 1.46a.5.5 0 0 1 .595-.073l3.83 2.188a.5.5 0 0 1 .243.527l-.036.194a.5.5 0 0 0 .388.582l2.36.494a.5.5 0 0 0 .387-.078l.727-.503a.5.5 0 0 1 .535-.02l2.37 1.372a.488.488 0 0 1 .12.745.49.49 0 0 0-.047.584l.826 1.306a.5.5 0 0 1-.232.729l-.447.185a.5.5 0 0 0-.2.15l-3.834 4.82a.5.5 0 0 1-.192.148l-5.214 2.258a.5.5 0 0 0-.285.332l-.88 3.373a.5.5 0 0 1-.074.16Z\"/>";

export const Ec = /*#__PURE__*/ defineComponent({
  name: 'GeoEc',
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
