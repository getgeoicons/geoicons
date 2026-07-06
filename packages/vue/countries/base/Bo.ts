// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m2.589 13.534 2.486 8.46a.5.5 0 0 0 .797.246l1.154-.945a.5.5 0 0 1 .37-.11l1.918.205a.5.5 0 0 1 .308.152l1.007 1.053a.25.25 0 0 0 .375-.014l.911-1.117a.5.5 0 0 1 .376-.183l.81-.018a.5.5 0 0 0 .463-.34l1.152-3.404a.5.5 0 0 1 .387-.333l3.385-.595a.5.5 0 0 1 .346.065l1.318.8a.25.25 0 0 0 .362-.12l.855-2.126a.5.5 0 0 0-.092-.522l-1.05-1.166a.5.5 0 0 1-.128-.344l.018-.947a.5.5 0 0 0-.485-.509l-2.094-.064a.5.5 0 0 1-.483-.451l-.3-3.108a.5.5 0 0 0-.29-.406L9.627 4.545a.5.5 0 0 1-.29-.445L9.29 1.735a.5.5 0 0 0-.544-.488l-1.094.096a.5.5 0 0 0-.244.089L5.551 2.735a.5.5 0 0 1-.228.087l-2.35.282a.25.25 0 0 0-.186.375l1.155 1.945a.5.5 0 0 1 .048.402L2.92 9.314a.5.5 0 0 0 .03.37l.806 1.612a.5.5 0 0 1-.06.54l-1.015 1.24a.5.5 0 0 0-.092.458Z\"/>";

export const Bo = /*#__PURE__*/ defineComponent({
  name: 'GeoBo',
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
