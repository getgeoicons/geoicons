// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.081 11.02.214.733a.5.5 0 0 1-.255.587l-.905.456a.5.5 0 0 0-.155.12l-.633.737a.5.5 0 0 0-.116.395l.106.759a.5.5 0 0 0 .73.372l1.576-.838a.5.5 0 0 1 .342-.047l1.78.392a.5.5 0 0 1 .391.458l.025.4a.5.5 0 0 0 .024.126l.521 1.588a.5.5 0 0 0 .67.305l.69-.292a.5.5 0 0 0 .238-.21l.284-.492a.5.5 0 0 1 .474-.249l.226.02a.5.5 0 0 1 .421.307l.505 1.227a.5.5 0 0 0 .408.307l.027.002a.5.5 0 0 0 .48-.236l.396-.648a.5.5 0 0 1 .775-.098l.878.855a.5.5 0 0 0 .684.013l.09-.082a.5.5 0 0 0 .163-.322l.07-.712a.5.5 0 0 1 .214-.364l.886-.61a.5.5 0 0 0 .216-.402l.018-.914a.5.5 0 0 1 .216-.402l1.07-.74a.5.5 0 0 0 .212-.462l-.095-.912a.5.5 0 0 1 .326-.521l.84-.307a.5.5 0 0 1 .65.327l.331 1.113 2.263-2.22a.5.5 0 0 1 .089-.07l1.359-.833-1.84-1.052a.5.5 0 0 0-.265-.065l-1.22.038a.5.5 0 0 1-.253-.06l-1.51-.816a.5.5 0 0 0-.216-.06l-2.259-.097a.5.5 0 0 1-.477-.46l-.04-.512a.5.5 0 0 0-.256-.397l-.722-.402a.5.5 0 0 0-.49.002L10.195 7.49a.5.5 0 0 0-.221.26l-.267.71a.5.5 0 0 1-.34.307L7.35 9.3a.5.5 0 0 1-.396-.062l-1.142-.726a.5.5 0 0 0-.454-.043l-.797.32a.5.5 0 0 0-.218.169l-1.186 1.628a.5.5 0 0 0-.076.434Z\"/>";

export const Eurasia = /*#__PURE__*/ defineComponent({
  name: 'GeoEurasia',
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
