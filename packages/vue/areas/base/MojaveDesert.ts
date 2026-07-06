// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M3.965 13.27 1.2 14.651l3.723 2.55a1 1 0 0 0 .562.176l2.44.008a1 1 0 0 1 .994 1.062l-.014.22a1 1 0 0 0 .392.856l1.765 1.348a1 1 0 0 0 1.555-.478l.043-.129a1 1 0 0 1 1.04-.68l3.637.336a1 1 0 0 0 .66-.173l1.445-1a1 1 0 0 1 .376-.16l2.015-.395a.6.6 0 0 0 .354-.962l-.525-.66a1 1 0 0 0-.918-.37l-.205.029a1 1 0 0 1-1.094-.71l-.4-1.36a1 1 0 0 1 .021-.63l.803-2.16a1 1 0 0 0 .054-.22l.245-1.902a1 1 0 0 1 .2-.482l.91-1.184a1 1 0 0 0 .086-1.089l-.429-.786a.6.6 0 0 0-1.076.046L19.21 7.23a1 1 0 0 1-.628.556l-1.458.437a1 1 0 0 1-1.278-.823l-.021-.155a1 1 0 0 0-.967-.865l-2.081-.05a1 1 0 0 1-.172-.02l-2.546-.509a1 1 0 0 1-.534-.297L6.503 2.278 6 8.963a1 1 0 0 1-.077.317l-1.486 3.487a1 1 0 0 1-.472.502Z\"/>";

export const MojaveDesert = /*#__PURE__*/ defineComponent({
  name: 'GeoMojaveDesert',
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
