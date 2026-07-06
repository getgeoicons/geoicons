// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Andes = ({
  size = 24,
  strokeWidth = 1,
  'aria-label': ariaLabel,
  role,
  ...props
}: Props) => {
  const uid = useId();
  // Compliance nudge: warns once if icons render without a licensed <IconProvider>.
  // noteIconRender is a plain guarded fn (no client-only React API), so it does NOT
  // taint this as a Client Component — it no-ops on the server (window guard) and
  // only schedules a deferred client-side check. Do NOT wrap in useEffect (that would
  // force "use client" and break RSC/SSG consumers like the site).
  noteIconRender();
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      fill="none"
      role={ariaLabel ? (role ?? 'img') : role}
      aria-labelledby={ariaLabel ? `${uid}-title` : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      {ariaLabel && <title id={`${uid}-title`}>{ariaLabel}</title>}
      <path strokeLinejoin="round" d="m11.685 4.253 1.42-2.104a.6.6 0 0 0-.536-.935l-1.917.127a1 1 0 0 0-.934.998v.61a1 1 0 0 1-.211.615l-1.015 1.3a1 1 0 0 0-.212.627l.023 2.137a1 1 0 0 0 .15.514l2.12 3.44a1 1 0 0 0 .251.275l1.046.786a1 1 0 0 1 .23.241l.5.744a1 1 0 0 1 .167.485l.331 4.473-.102 1.554a1 1 0 0 0 .04.352l.501 1.674a.73.73 0 0 0 1.33.156l.215-.372a1 1 0 0 0 .129-.61l-.15-1.368a1 1 0 0 1 .003-.237l.634-4.893a1 1 0 0 0-.025-.385l-.406-1.53a1 1 0 0 0-.216-.406l-1.753-1.989a1 1 0 0 0-.383-.269l-.956-.377a1 1 0 0 1-.506-.441l-1.21-2.161a1 1 0 0 1-.104-.705l.16-.727a1 1 0 0 1 .282-.505l.97-.934q.075-.073.134-.16Z"/>
    </svg>
  );
};
