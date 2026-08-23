// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.693 21.81a.8.8 0 0 0 .7.832l.726.091a.8.8 0 0 0 .799-.405l1.428-2.568a.6.6 0 0 1 .549-.308l1.575.063a.6.6 0 0 1 .573.55l.139 1.65a.602.602 0 0 0 1.178.118l1.896-6.495a4 4 0 0 0 .15-1.413l-.21-2.876a4 4 0 0 1 .464-2.183l.239-.445c.173-.322.39-.62.643-.883l1.855-1.927a2 2 0 0 0 .556-1.281l.029-.537a2 2 0 0 0-.399-1.309l-.758-1.007a.6.6 0 0 0-.552-.235l-1.892.23a.6.6 0 0 0-.527.606l.04 2.293a1 1 0 0 1-.226.652l-2.689 3.28a1 1 0 0 1-.53.337l-1.938.484a1 1 0 0 0-.435.235l-3.899 3.59a.3.3 0 0 0-.038.399l.773 1.047a.6.6 0 0 1 .116.385z\"/>";

export const MxQuintanaRoo = /*#__PURE__*/ defineComponent({
  name: 'GeoMxQuintanaRoo',
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
