// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m13.14 20.365.184 1.116a.5.5 0 0 1-.21.493l-.981.675a.5.5 0 0 1-.467.053l-1.412-.558a.5.5 0 0 0-.317-.017l-2.034.561.94-2.667a.5.5 0 0 0 .027-.137l.147-2.526a.5.5 0 0 0-.48-.529l-.696-.027a.5.5 0 0 1-.32-.133l-.802-.744a.5.5 0 0 1-.157-.42l.248-2.313a.5.5 0 0 1 .125-.282l1.218-1.352a.5.5 0 0 0 .115-.221l1.139-4.872a.5.5 0 0 0 .002-.219L8.614 2.55l2.413-1.35.133 1.196a.5.5 0 0 0 .59.436l3.602-.688a.5.5 0 0 1 .588.42l.073.501a.5.5 0 0 0 .283.382l.473.22a.5.5 0 0 1 .118.83l-1.598 1.398a.5.5 0 0 0-.17.351l-.236 4.726a.5.5 0 0 1-.386.462l-1.78.414 1.908 2.313a.5.5 0 0 1 .048.568l-.737 1.281a.5.5 0 0 0 .024.536l.847 1.213a.5.5 0 0 1 .077.403l-.013.053a.5.5 0 0 1-.318.355l-.691.247a.5.5 0 0 0-.297.286l-.396.996a.5.5 0 0 0-.029.266Z\"/>";

export const Pt = /*#__PURE__*/ defineComponent({
  name: 'GeoPt',
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
