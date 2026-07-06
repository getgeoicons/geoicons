// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m11.923 22.3-.05-.068a1 1 0 0 1-.118-.206l-.632-1.504a1 1 0 0 1-.069-.25l-.166-1.198a1 1 0 0 0-.094-.305l-.537-1.09a1 1 0 0 1-.047-.774l.326-.928a1 1 0 0 0 .04-.52l-.222-1.155a1 1 0 0 0-.204-.44l-.513-.636a1 1 0 0 1-.209-.789l.048-.29a1 1 0 0 0-.602-1.084l-.665-.278a1 1 0 0 0-.667-.037l-1.108.325a1 1 0 0 1-.194.036l-1.138.1a1 1 0 0 1-.735-.235l-.968-.824a1 1 0 0 1-.172-.188L2.41 8.794a1 1 0 0 1-.179-.523l-.077-1.517a1 1 0 0 1 .088-.462l.394-.875a1 1 0 0 1 .236-.325l.829-.76a1 1 0 0 0 .313-.588l.07-.465a1 1 0 0 1 .225-.497l.53-.625a1 1 0 0 1 1.053-.311l.143.043a1 1 0 0 0 .745-.066l.843-.429a1 1 0 0 1 .408-.108l1.303-.059a.6.6 0 0 1 .627.574l.008.202a1 1 0 0 0 .599.873l1.05.459c.32.14.696.05.919-.219a.78.78 0 0 1 .874-.237l1.2.44a1 1 0 0 0 .554.04l.637-.138a.6.6 0 0 1 .724.643l-.083.882a1 1 0 0 0 .092.522l1.196 2.526a1 1 0 0 0 .21.292l.81.78a1 1 0 0 0 .797.274l1.61-.168-.066.653a1 1 0 0 1-.166.46l-.973 1.44a1 1 0 0 1-.181.202l-1.534 1.301a1 1 0 0 0-.344.895l.3 2.25a1 1 0 0 1-.461.98l-.685.428a1 1 0 0 0-.467.92l.047.64a1 1 0 0 1-.155.61l-.557.871-1.305 1.532a1 1 0 0 1-.586.336l-1.123.2a1 1 0 0 1-.98-.39Zm8.354-2.112-.069.011a.653.653 0 0 1-.76-.692l.047-.633a1 1 0 0 0-.01-.232l-.072-.444a1 1 0 0 1 .377-.952l.18-.139q.101-.077.18-.178l.486-.625a.656.656 0 0 1 1.17.468l-.066.67a1 1 0 0 1-.057.247l-.712 1.925a.9.9 0 0 1-.694.574Z\"/>";

export const Africa = /*#__PURE__*/ defineComponent({
  name: 'GeoAfrica',
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
