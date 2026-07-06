// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.897 21.467-.1-.135a1 1 0 0 1-.118-.206l-.706-1.68a1 1 0 0 1-.069-.25l-.187-1.349a1 1 0 0 0-.094-.305l-.618-1.253a1 1 0 0 1-.046-.774l.382-1.088a1 1 0 0 0 .039-.52l-.253-1.324a1 1 0 0 0-.204-.44l-.61-.756a1 1 0 0 1-.208-.788l.072-.444a1 1 0 0 0-.602-1.083l-.84-.35a1 1 0 0 0-.666-.038l-1.265.37a1 1 0 0 1-.193.037l-1.306.114a1 1 0 0 1-.735-.234l-1.11-.944a1 1 0 0 1-.172-.189L1.382 6.54a1 1 0 0 1-.18-.572L1.2 3.756l1.527-.015.046-1.678 1.03-.023a1 1 0 0 1 .622.2L6.99 4.16a1 1 0 0 0 1.182.013l1.37-.981a1 1 0 0 1 .565-.187l.521-.009a1 1 0 0 1 .505.127l2.195 1.225.716-1.074 2.986.01 2.184 3.413a1 1 0 0 0 1.063.436l1.753-.396-.075.746a1 1 0 0 1-.166.459L20.697 9.56a1 1 0 0 1-.182.203l-1.742 1.478a1 1 0 0 0-.344.895l.347 2.597a1 1 0 0 1-.462.98l-.86.539a1 1 0 0 0-.468.92l.058.798a1 1 0 0 1-.154.612l-.631.987-1.462 1.715a1 1 0 0 1-.585.336l-1.335.238a1 1 0 0 1-.98-.39Zm9.163-2.377-.075.013a.72.72 0 0 1-.837-.762l.051-.71a1 1 0 0 0-.01-.231l-.09-.56a1 1 0 0 1 .377-.953l.256-.197a1 1 0 0 0 .18-.178l.544-.7a.722.722 0 0 1 1.288.516l-.074.75a1 1 0 0 1-.057.248l-.789 2.133a.99.99 0 0 1-.764.631Z\"/>";

export const SubSaharanAfrica = /*#__PURE__*/ defineComponent({
  name: 'GeoSubSaharanAfrica',
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
