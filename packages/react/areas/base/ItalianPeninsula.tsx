// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ItalianPeninsula = ({
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
      <path strokeLinejoin="round" d="m4.861 7.748-1.365.985a1 1 0 0 1-1.522-.46L1.216 6.25a1 1 0 0 1 .024-.76l.613-1.364a1 1 0 0 1 .426-.464l2.186-1.215a1 1 0 0 1 .642-.113l1.897.299a1 1 0 0 0 .62-.102l2.134-1.118a1 1 0 0 1 .836-.042l2.11.844a1 1 0 0 1 .62.806l.065.52a1 1 0 0 1-.673 1.07l-1.041.352a1 1 0 0 0-.678 1.024l.127 1.647a1 1 0 0 0 .534.81l1.463.764a1 1 0 0 1 .413.404l1.319 2.396a1 1 0 0 0 .766.512l1.755.194a1 1 0 0 1 .825.639l.18.476a1 1 0 0 0 .572.577l3.22 1.259a.835.835 0 1 1-.628 1.548l-1.208-.51a.826.826 0 0 0-1.056 1.139l.673 1.314a1 1 0 0 1-.028.964l-1.198 2.031a.844.844 0 0 1-1.529-.695l.563-1.69a1 1 0 0 0-.03-.71l-.63-1.474a1 1 0 0 0-.473-.5l-4.184-2.092a1 1 0 0 1-.215-.145l-3.692-3.266a1 1 0 0 1-.3-.481l-.583-2.096a1 1 0 0 0-.467-.6L5.942 7.69a1 1 0 0 0-1.08.057Z"/>
    </svg>
  );
};
