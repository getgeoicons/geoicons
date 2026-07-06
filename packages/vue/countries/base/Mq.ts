// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m5.143 8.317.142-.515a1 1 0 0 0-.24-.957L3.77 5.511a2 2 0 0 1-.526-1.052l-.035-.212A2 2 0 0 1 3.42 2.97l.2-.372a2 2 0 0 1 .888-.852l.598-.29a2 2 0 0 1 1.113-.187l1.01.122a2 2 0 0 1 .63.185l3.138 1.518q.13.063.236.16l1.433 1.3q.07.063.126.138l1.446 1.913a.5.5 0 0 0 .603.155l2.682-1.2a.833.833 0 1 1 .637 1.54l-2.21.847a.25.25 0 0 0-.04.446l.59.362a.5.5 0 0 1-.092.896l-.471.172a.64.64 0 0 0 .416 1.211l1.2-.388a.25.25 0 0 1 .32.296l-.197.817a1 1 0 0 0 .262.937l1.924 1.944a2 2 0 0 1 .501.858l.316 1.106q.021.075.03.15l.18 1.43a1 1 0 0 1 .002.225l-.163 1.598a1 1 0 0 1-.193.496l-1.2 1.611a.9.9 0 1 1-1.396-1.13l.75-.854a.667.667 0 0 0-.926-.955l-.205.169a.985.985 0 0 1-1.131.086l-.429-.256a1 1 0 0 0-.645-.133l-1.99.266a1 1 0 0 1-.62-.118l-.27-.151a1 1 0 0 0-1.088.072l-.298.223a1 1 0 0 1-1.477-.32l-.697-1.274a1 1 0 0 1 .322-1.312l.764-.51a1 1 0 0 1 1.258.12l.124.122a1 1 0 0 0 1.175.171l.216-.116a1 1 0 0 0 .407-1.358l-.608-1.123a1 1 0 0 0-1.356-.403l-.37.2a1 1 0 0 1-.589.116l-.854-.097a1 1 0 0 1-.739-.469l-.19-.309a1 1 0 0 0-.462-.396l-.722-.305A1 1 0 0 1 7 11.88l-.427-.395a1 1 0 0 1-.205-.267L5.223 9.05a1 1 0 0 1-.08-.732Z\"/>";

export const Mq = /*#__PURE__*/ defineComponent({
  name: 'GeoMq',
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
