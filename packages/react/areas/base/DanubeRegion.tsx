// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DanubeRegion = ({
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
      <path strokeLinejoin="round" d="m14.809 17.469-3.458-1.195a1 1 0 0 1-.274-.145l-5.27-3.953a1 1 0 0 0-.886-.158l-1.988.593a.6.6 0 0 1-.726-.344l-.856-2.06a.6.6 0 0 1 .12-.646L3.539 7.41a1 1 0 0 1 1.364-.073l1.21 1.016a1 1 0 0 0 1.387-.1l1.24-1.384a1 1 0 0 1 .932-.316l6.378 1.219a1 1 0 0 0 .45-.017l2.417-.657a1 1 0 0 1 1.045.342l2.53 3.177a1 1 0 0 1 .187.868l-.543 2.15a1 1 0 0 1-.419.59l-4.289 2.83a1 1 0 0 1-.38.15l-1.742.304a1 1 0 0 1-.497-.04Z"/>
    </svg>
  );
};
