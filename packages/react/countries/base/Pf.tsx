// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pf = ({
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
      <path strokeLinejoin="round" d="m2.039 8.429 1.34 1.116a.915.915 0 0 0 1.37-.231l.925-1.54a1.05 1.05 0 0 0-1.03-1.584l-2.02.25a1.13 1.13 0 0 0-.585 1.989Zm7.407 1.424.032.73a2 2 0 0 0 .133.634l.697 1.803a2 2 0 0 0 1.197 1.163l1.685.597a2 2 0 0 0 1.125.063l1.434-.337a2 2 0 0 1 2.252 1.065l.141.288c.109.22.257.42.437.586l.573.53a2 2 0 0 0 .916.483l1 .226A1.42 1.42 0 0 0 22.8 16.3v-.43a1.955 1.955 0 0 0-1.286-1.837l-1.246-.454a2 2 0 0 0-.414-.102l-.267-.037a1.957 1.957 0 0 1-1.65-2.345l.06-.282a2 2 0 0 0-.221-1.41l-.36-.63a2 2 0 0 0-1-.864l-1.469-.582a2 2 0 0 0-.332-.1l-1.133-.233a2 2 0 0 0-1.18.116l-1.243.523a2 2 0 0 0-.417.237l-.39.29a2 2 0 0 0-.806 1.693Z"/>
    </svg>
  );
};
