// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sv = ({
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
      <path strokeLinejoin="round" d="m3.333 9.622-1.737 2.065a.5.5 0 0 0 .147.762l1.733.929a.5.5 0 0 1 .245.303l.092.323a.5.5 0 0 0 .444.361l4.078.302a.5.5 0 0 1 .18.048l4.343 2.087a.5.5 0 0 0 .156.045l7.697.945a.5.5 0 0 0 .415-.142l.945-.946a.5.5 0 0 0 .13-.226l.298-1.13a.5.5 0 0 0-.006-.275l-.331-1.071a.5.5 0 0 1 .004-.309l.556-1.638a.5.5 0 0 0-.056-.435l-.409-.623a.5.5 0 0 0-.542-.21l-1.225.315a.5.5 0 0 1-.542-.21l-.477-.723a.5.5 0 0 0-.637-.174l-2.638 1.29a.5.5 0 0 1-.56-.082l-5.25-4.89a.5.5 0 0 0-.344-.134l-3.49.03a.5.5 0 0 0-.489.582l.158.94a.5.5 0 0 1-.143.44L4.8 9.424a.5.5 0 0 1-.445.134l-.545-.105a.5.5 0 0 0-.477.169Z"/>
    </svg>
  );
};
