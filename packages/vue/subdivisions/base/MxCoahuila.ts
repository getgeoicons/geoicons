// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M4.813 13.026a1 1 0 0 0 .404.7l.655.478a2 2 0 0 1 .798 1.915l-.5 3.31a1 1 0 0 0 .293.87l1.272 1.228a.6.6 0 0 0 .894-.068l.614-.805a.6.6 0 0 1 .703-.192l5.388 2.189a.3.3 0 0 0 .411-.245l.122-1.103a1 1 0 0 1 .778-.867l1.065-.235a.3.3 0 0 0 .173-.477l-3.173-4.083a.3.3 0 0 1 .017-.387l1.485-1.606a2 2 0 0 0 .433-.736l.766-2.343a.3.3 0 0 1 .406-.181l.713.314a.6.6 0 0 0 .81-.356l.166-.491a.6.6 0 0 0-.062-.516l-2.927-4.595a5 5 0 0 0-.484-.64l-1.736-1.95a2 2 0 0 0-1.252-.654l-1.876-.228a3 3 0 0 0-1.157.085l-.38.104a1 1 0 0 0-.672.614l-.615 1.643a1 1 0 0 1-.59.587l-.74.274a1 1 0 0 0-.548.493L4.53 8.975a1 1 0 0 0-.098.552z\"/>";

export const MxCoahuila = /*#__PURE__*/ defineComponent({
  name: 'GeoMxCoahuila',
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
