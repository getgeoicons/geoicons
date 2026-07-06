// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m7.312 7.985-.471-2.361a.5.5 0 0 1 .647-.573l1.108.366a.5.5 0 0 1 .335.383l.363 1.938a.5.5 0 0 1-.462.591l-1 .058a.5.5 0 0 1-.52-.402Zm1.744 4.04-.348-1.767a.25.25 0 0 1 .398-.246l1.838 1.424a.25.25 0 0 1-.049.425l-1.14.522a.5.5 0 0 1-.699-.358Zm3.564 4.665-.642-.779a.5.5 0 0 1 .091-.722l.604-.44a.5.5 0 0 1 .693.1l.652.857a.5.5 0 0 1-.144.733l-.614.363a.5.5 0 0 1-.64-.112ZM9.345 3.557 9.155 1.8a.5.5 0 0 1 .468-.553l.324-.019a.5.5 0 0 1 .524.424l.264 1.734a.5.5 0 0 1-.44.572L9.897 4a.5.5 0 0 1-.552-.443Zm3.635 5.646-.55-3.44a.5.5 0 0 0-.536-.42l-.327.029a.5.5 0 0 0-.451.579l.56 3.421a.5.5 0 0 0 .51.42l.316-.01a.5.5 0 0 0 .477-.58Zm.76 3.985h-.653a.5.5 0 0 1-.496-.435l-.067-.515a.5.5 0 0 1 .48-.565l.603-.017a.5.5 0 0 1 .503.391l.118.532a.5.5 0 0 1-.488.608Zm1.965 9.151-1.454-3.125a.5.5 0 0 1 .283-.68l.518-.188a.5.5 0 0 1 .622.257l1.443 3.065a.5.5 0 0 1-.233.662l-.506.247a.5.5 0 0 1-.673-.239Z\"/>";

export const Vu = /*#__PURE__*/ defineComponent({
  name: 'GeoVu',
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
