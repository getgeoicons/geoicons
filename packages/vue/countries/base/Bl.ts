// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.7 14.203-1.945-1.77a1 1 0 0 1-.278-1.05l.168-.513a.963.963 0 0 1 1.782-.119l.191.397a1 1 0 0 0 1.07.553l.702-.12a1 1 0 0 1 1.057.526l1.048 2.026c.308.596 1.11.72 1.591.252a1 1 0 0 1 .95-.25.994.994 0 0 0 1.118-.468l.523-.915a.75.75 0 0 1 1.114-.218l1.15.902a1 1 0 0 0 .66.213l1.282-.055a.75.75 0 0 1 .773.867l-.24 1.5a.75.75 0 0 1-1.005.584l-.176-.066a1 1 0 0 0-.707 0l-.75.283a1 1 0 0 0-.645.875l-.013.23a.695.695 0 0 1-1.061.548l-.086-.053a.82.82 0 0 0-1.103.224.82.82 0 0 1-.847.327l-.45-.1a.82.82 0 0 0-.835.31.822.822 0 0 1-1.289.032l-1.832-2.205a1 1 0 0 1-.197-.893l.08-.306a1 1 0 0 0-.121-.789l-.006-.009a1 1 0 0 0-.75-.461l-.347-.034a1 1 0 0 1-.577-.255ZM1.987 6.145l-.157-.162a.964.964 0 0 1 1.23-1.471l.187.126a.987.987 0 1 1-1.26 1.507ZM12.864 9.41l-.56.45a.797.797 0 1 1-.963-1.27l.583-.418a.778.778 0 0 1 .94 1.238Zm4.41-2.464-1.492.09a.697.697 0 1 0 .102 1.391l1.49-.129a.678.678 0 0 0-.1-1.352Z\"/>";

export const Bl = /*#__PURE__*/ defineComponent({
  name: 'GeoBl',
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
