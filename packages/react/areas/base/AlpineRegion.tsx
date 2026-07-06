// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AlpineRegion = ({
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
      <path strokeLinejoin="round" d="m4.04 19.036-1.107-.134a1 1 0 0 1-.652-.358l-.778-.945a1 1 0 0 1-.207-.836l.493-2.407a1 1 0 0 1 .307-.54l1.11-1.007q.162-.149.249-.352l.655-1.558a1 1 0 0 1 .307-.4l2.282-1.781a1 1 0 0 1 .286-.156L10.6 7.3a1 1 0 0 1 .196-.047l7.708-1.042a1 1 0 0 0 .393-.141l1.495-.927a1 1 0 0 1 .831-.103l.73.233a1 1 0 0 1 .694.868l.122 1.458a1 1 0 0 1-.18.662l-1.551 2.19a1 1 0 0 1-.524.378l-2.292.7a1 1 0 0 1-.562.007l-1.26-.356a1 1 0 0 0-.862.158l-1.97 1.448a1 1 0 0 1-.828.167l-3.84-.927a1 1 0 0 0-.717.096l-1.034.568a1 1 0 0 0-.375.362l-.403.672a1 1 0 0 0-.133.656l.054.373a1 1 0 0 0 1.106.852l.039-.005a.6.6 0 0 1 .614.85l-.083.177a1 1 0 0 1-.64.542l-1.162.32a1 1 0 0 0-.5.32l-.74.878a1 1 0 0 1-.885.348Z"/>
    </svg>
  );
};
