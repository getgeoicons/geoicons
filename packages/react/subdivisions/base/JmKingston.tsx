// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmKingston = ({
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
      <path strokeLinejoin="round" d="M1.536 10.834a.3.3 0 0 0 .231.477l1.327.047a1 1 0 0 1 .54.181l1.817 1.278a1 1 0 0 0 .634.18l11.218-.665a2 2 0 0 1 1.12.265l1.202.695a2 2 0 0 1 .678.647l.958 1.482a.3.3 0 0 0 .543-.092l.929-3.838a.3.3 0 0 0-.206-.358l-7.025-2.086a1 1 0 0 0-.416-.033l-3.202.425a2 2 0 0 1-1.066-.15L8.45 8.25a1 1 0 0 0-.915.057l-1.538.92a1 1 0 0 1-1.198-.13l-.93-.874a.3.3 0 0 0-.448.04z"/>
    </svg>
  );
};
