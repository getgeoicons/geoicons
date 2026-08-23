// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M22.464 15.049a1 1 0 0 1-.52.988l-.504.273a1 1 0 0 1-1.118-.115l-1.068-.899a1 1 0 0 1-.356-.724l-.102-2.47a1 1 0 0 0-.139-.469L17.648 9.93a.6.6 0 0 0-.952-.107l-1.594 1.686a1 1 0 0 0-.271.76l.285 3.865a1 1 0 0 1-.128.569l-1.219 2.134a1 1 0 0 1-1.307.403l-.834-.406a1 1 0 0 0-.994.067l-5.399 3.605a1 1 0 0 1-.73.153l-.026-.005a1 1 0 0 1-.708-.516l-.847-1.595a1 1 0 0 1-.03-.878l.193-.43a1 1 0 0 0-.56-1.344l-.798-.302a.77.77 0 0 1-.21-1.32l1.294-1.04a4 4 0 0 0 1.011-1.212l1.54-2.837a1 1 0 0 0 .11-.62l-.285-1.955a1 1 0 0 1 .26-.827l1.066-1.14a1 1 0 0 0 .202-1.044l-.186-.48a1 1 0 0 1 .152-.987L8.54 1.805a1 1 0 0 1 1.08-.33l2.966.932a1 1 0 0 1 .668.703l.827 3.187a.775.775 0 0 0 1.444.153l.93-1.856a1 1 0 0 1 .636-.519l.694-.185a1 1 0 0 1 .989.284l.28.3a1 1 0 0 1 .22.375l.232.713a1 1 0 0 0 .824.684l1.362.175a1 1 0 0 1 .82.67l.155.458a1 1 0 0 1-.05.763l-.598 1.213a1 1 0 0 0-.096.55z\"/>";

export const MxMexico = /*#__PURE__*/ defineComponent({
  name: 'GeoMxMexico',
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
