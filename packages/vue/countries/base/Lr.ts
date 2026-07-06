// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"M5.017 12.581c-1.012-.789-2.834-2.144-3.396-2.692-.115-.113-.115-.277-.031-.414l.945-1.567a.5.5 0 0 1 .117-.133l3.12-2.477a.5.5 0 0 0 .189-.401l-.016-.8a.5.5 0 0 1 .296-.466l.953-.425a.5.5 0 0 0 .292-.395l.13-1.037a.5.5 0 0 1 .465-.437l2.038-.127a.5.5 0 0 1 .31.085l1.04.7a.5.5 0 0 1 .196.262l.818 2.55a.5.5 0 0 1 .003.297l-.374 1.24a.5.5 0 0 0 .155.525l1.104.935a.5.5 0 0 0 .528.075l.827-.371A.5.5 0 0 0 15 7.194l.71-2.4 1.332.404-.143.5a.5.5 0 0 0 .026.348l.887 1.924a.5.5 0 0 1 .037.304l-.349 1.814a.5.5 0 0 1-.142.264l-1.119 1.088a.25.25 0 0 0 .104.42l3.474 1.03a.5.5 0 0 1 .353.41l.105.743a.5.5 0 0 0 .271.378l1.198.6a.5.5 0 0 1 .258.312l.488 1.748a.5.5 0 0 1-.039.366l-.866 1.659a.5.5 0 0 0-.054.288l.3 2.638a.5.5 0 0 1-.649.532l-3.04-.973a.5.5 0 0 1-.092-.04l-5.332-2.985a.5.5 0 0 1-.097-.072L7.57 13.762a.5.5 0 0 0-.14-.092l-2.309-1.026a.5.5 0 0 1-.104-.063Z\"/>";

export const Lr = /*#__PURE__*/ defineComponent({
  name: 'GeoLr',
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
