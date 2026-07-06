// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m9.806 22.506-2.613.275a.5.5 0 0 1-.333-.084l-1.286-.875a.5.5 0 0 1-.197-.266l-.61-1.974a.5.5 0 0 1 .112-.488l.493-.531a.5.5 0 0 1 .41-.158l.645.057a.5.5 0 0 0 .541-.552l-.113-1.054a.5.5 0 0 1 .088-.34l1.366-1.947a.5.5 0 0 1 .355-.21l.755-.082a.5.5 0 0 0 .445-.475l.022-.505a.5.5 0 0 0-.554-.519l-1.834.202a.5.5 0 0 1-.33-.08l-.993-.652a.5.5 0 0 1-.115-.732l.713-.885a.5.5 0 0 0-.064-.693l-.769-.66a.5.5 0 0 1-.153-.523l.33-1.099a.5.5 0 0 1 .552-.35l3.157.466a.5.5 0 0 0 .463-.18l1.27-1.58-1.418-.408a.25.25 0 0 1-.135-.385l1.71-2.41a.5.5 0 0 1 .35-.206l1.494-.174a.5.5 0 0 0 .299-.146l.807-.822a.5.5 0 0 1 .582-.096l1.153.582a.5.5 0 0 1 .043.868l-1.179.751a.5.5 0 0 0-.135.128l-2.177 2.99a.5.5 0 0 0 .11.699l1.218.884a.5.5 0 0 0 .701-.116l.649-.914a.5.5 0 0 1 .68-.13l2.654 1.718-.662.632a.5.5 0 0 0-.098.592l.97 1.864a.5.5 0 0 1 .056.21l.083 2.04a.5.5 0 0 1-.03.193l-1.075 2.907a.5.5 0 0 0-.012.311l.24.831a.5.5 0 0 1-.464.638l-3.108.109a.5.5 0 0 0-.269.09l-4.557 3.177a.5.5 0 0 1-.233.087Z\"/>";

export const Ie = /*#__PURE__*/ defineComponent({
  name: 'GeoIe',
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
