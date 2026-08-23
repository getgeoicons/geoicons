// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M14.656 20.342a1 1 0 0 0 .71-.197l1.413-1.068a1 1 0 0 1 .36-.172l1.295-.324a1 1 0 0 0 .709-.66l.296-.909a1 1 0 0 0-.282-1.053l-1.166-1.05a1 1 0 0 1-.31-.945l.553-2.68a1 1 0 0 0-.965-1.202l-.637-.009a.756.756 0 0 1-.003-1.511l2.49-.046a1 1 0 0 0 .85-.501l.63-1.098a1 1 0 0 1 .716-.49l.975-.15a.6.6 0 0 0 .51-.594l-.003-1.08a1 1 0 0 0-.157-.537l-.772-1.21a.6.6 0 0 0-.625-.266l-5.697 1.152a1 1 0 0 1-.347.01l-6.113-.92a1 1 0 0 0-.965.41L7.33 4.36a1 1 0 0 0-.183.605l.056 2.058A1 1 0 0 1 6.069 8.04l-2.927-.4a1 1 0 0 0-.6.106l-.921.483a.6.6 0 0 0-.303.681l1.008 3.916a2 2 0 0 1 .02.91l-.378 1.794a2 2 0 0 0-.003.81L2.911 21a.6.6 0 0 0 .6.481l2.513-.05a.6.6 0 0 0 .566-.438l.098-.35a.6.6 0 0 1 .88-.358l.947.55a1 1 0 0 0 1.197-.146l.481-.464a1 1 0 0 1 .801-.275z\"/>";

export const TtTunapunaPiarco = /*#__PURE__*/ defineComponent({
  name: 'GeoTtTunapunaPiarco',
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
