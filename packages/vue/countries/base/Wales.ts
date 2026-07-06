// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.837 19.182-.225-1.11a1 1 0 0 1 .257-.889l.994-1.042a1 1 0 0 1 .347-.236l5.161-2.098c.198-.08.364-.222.476-.403l.554-.902a1 1 0 0 0 .108-.806l-.282-.957a1 1 0 0 1 .102-.797l.283-.47a1 1 0 0 0 .07-.889l-.279-.692a1 1 0 0 0-.867-.625l-.229-.014a1 1 0 0 0-.864.402l-.252.34a1 1 0 0 1-.902.4l-1.792-.177.922-1.446a1 1 0 0 1 .434-.375l1.19-.534a1 1 0 0 0 .53-.565l.026-.072a1 1 0 0 0-.316-1.131L8.155 3.2a1 1 0 0 1-.135-1.438l.147-.17a1 1 0 0 1 .854-.341l.665.065a1 1 0 0 1 .777.51l.412.741a1 1 0 0 0 1.387.373l.341-.204a1 1 0 0 1 .664-.13l1.178.179a1 1 0 0 0 .518-.06l.95-.376a1 1 0 0 1 .97.131l1.64 1.234a1 1 0 0 1 .202.204l1.364 1.837a.78.78 0 0 1-.942 1.18l-.44-.195a.826.826 0 0 0-.93 1.328l.188.196a1 1 0 0 1 .14 1.2l-.765 1.3a1 1 0 0 0 .277 1.319l.435.313a1 1 0 0 1 .235 1.384l-.546.781a1 1 0 0 0-.145.838l.284 1.034a1 1 0 0 0 .887.733l.327.025a1 1 0 0 1 .58.245l.56.49a.75.75 0 0 1 .257.564v1.513a.75.75 0 0 1-.535.718l-1.173.35a1 1 0 0 0-.574.449l-.46.777a1 1 0 0 1-.883.49l-1.727-.04a1 1 0 0 1-.782-.405l-.916-1.243a1 1 0 0 0-1.065-.372l-1.206.325a1 1 0 0 1-1.203-.632l-.161-.456a1 1 0 0 0-.547-.585l-.169-.073a1 1 0 0 0-.97.1l-1.517 1.063a1 1 0 0 1-1.055.057l-1.213-.666a1 1 0 0 1-.498-.678Z\"/>";

export const Wales = /*#__PURE__*/ defineComponent({
  name: 'GeoWales',
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
