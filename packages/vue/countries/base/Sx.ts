// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m1.884 11.625-.087.128a1 1 0 0 0 .306 1.42l1.87 1.135a1 1 0 0 1 .272.243l.661.856a1 1 0 0 0 1.463.129l.019-.017a1 1 0 0 1 .974-.213l.084.027a1 1 0 0 1 .662.687l.189.682a1 1 0 0 0 .963.734h.13a1 1 0 0 1 .404.085l.975.431a1 1 0 0 0 .992-.105l.592-.43a.93.93 0 0 1 1.074-.01l.056.04a.83.83 0 0 1 .32.918l-.033.111a.755.755 0 0 0 1.322.678l1.038-1.345a1 1 0 0 0 .18-.371l.61-2.474a1 1 0 0 1 .266-.47l.3-.298a1 1 0 0 0 .125-1.268l-.416-.618a1 1 0 0 1-.069-.998l.154-.315a1 1 0 0 0-.287-1.231l-.154-.12a1 1 0 0 1-.389-.79V8.74a1 1 0 0 1 .457-.84l.173-.112a.75.75 0 0 0 .266-.96l-.496-1.01a1 1 0 0 0-.898-.56H14.72a1 1 0 0 0-.3.047l-.726.229a1 1 0 0 0-.675.729l-.222.963a1 1 0 0 1-1.087.77l-.418-.048a1 1 0 0 0-.856.324l-.839.932a1 1 0 0 0-.23.899l.14.594a1 1 0 0 1-.12.752l-.426.696a1 1 0 0 1-.853.478h-.845a1 1 0 0 1-.979-.795l-.1-.479a.5.5 0 0 0-.775-.308l-.656.456a1 1 0 0 1-1.003.081l-.607-.29a1 1 0 0 0-1.258.336Zm20.263-5.242-1.277.578a.806.806 0 0 1-.695-1.454l1.253-.63a.835.835 0 1 1 .719 1.506Z\"/>";

export const Sx = /*#__PURE__*/ defineComponent({
  name: 'GeoSx',
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
