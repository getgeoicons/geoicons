// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VcSaintPatrick = ({
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
      <path strokeLinejoin="round" d="M22.387 8.12a1 1 0 0 0-.168-1.145l-.915-.958A1 1 0 0 0 20.1 5.83l-1.334.734a3 3 0 0 1-.956.33l-4.314.716a1 1 0 0 1-.693-.139L5.467 2.893a.6.6 0 0 0-.812.17l-.232.338a.6.6 0 0 0 .024.712l.625.789a.6.6 0 0 1-.093.84L2.574 7.683a1 1 0 0 0-.368.684L1.181 19.234a1 1 0 0 0 .641 1.03l1.964.743a1 1 0 0 0 .918-.11l2.983-2.035a3 3 0 0 1 .997-.441l3.903-.928a1 1 0 0 0 .74-.74l.362-1.503a1 1 0 0 1 .339-.54l1.342-1.1a1 1 0 0 1 .624-.226l2.452-.024a1 1 0 0 0 .636-.236l.862-.73c.304-.257.554-.572.735-.927z"/>
    </svg>
  );
};
