// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import * as Vue from 'vue';
import { noteIconRender } from '@geoicons/core';

const { defineComponent, h } = Vue;

const BODY = "<path stroke-linejoin=\"round\" d=\"m3.93 8.14-.004-.05a1 1 0 0 0-.712-.892l-.152-.045a.6.6 0 0 1-.401-.754l1.047-3.356a1 1 0 0 1 .444-.562l1.494-.886a.669.669 0 0 1 .862.995l-.625.775a.6.6 0 0 0 .311.956l.96.258a.6.6 0 0 1 .44.514l.111 1.022a.6.6 0 0 0 .867.471l1.98-.997a.6.6 0 0 1 .831.323l.222.587a.6.6 0 0 0 .789.343l2.795-1.144a.25.25 0 0 1 .326.137l.505 1.247a1 1 0 0 0 .41.48l1.768 1.07a1 1 0 0 0 .364.133l1.871.29a1 1 0 0 1 .415.166l1.503 1.038a1 1 0 0 1 .431.855l-.02.632a1 1 0 0 1-.301.684l-1.574 1.535a1 1 0 0 0-.285.535l-.36 1.963a1 1 0 0 1-.172.403l-.804 1.119a1 1 0 0 1-.637.4l-1.757.313a1 1 0 0 0-.812.826l-.144.896a1 1 0 0 1-.242.508l-1.4 1.565a.25.25 0 0 1-.314.048l-1.666-.992a.25.25 0 0 1-.036-.403l1.102-.955a1 1 0 0 0 .224-1.232l-1.143-2.114a1 1 0 0 0-.886-.524l-.303.002a1 1 0 0 0-.927.64l-.217.565a.25.25 0 0 1-.178.154l-1.888.429a.25.25 0 0 1-.294-.168l-.509-1.598a1 1 0 0 0-.542-.609l-2.375-1.07a1 1 0 0 1-.497-.492l-1.03-2.225a1 1 0 0 0-.465-.476l-.676-.334a.6.6 0 0 1-.31-.71l.137-.455a.6.6 0 0 1 .584-.429l.359.006a1 1 0 0 0 .586-.18l.493-.343a1 1 0 0 0 .426-.887Z\"/>";

export const AmazoniaCore = /*#__PURE__*/ defineComponent({
  name: 'GeoAmazoniaCore',
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
