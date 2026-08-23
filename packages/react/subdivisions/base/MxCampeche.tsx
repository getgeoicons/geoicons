// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxCampeche = ({
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
      <path strokeLinejoin="round" d="m1.625 16.8 2.695-.192a7 7 0 0 0 1.2-.184c2.639-.66 4.13-1.493 6.157-3.273.319-.28.58-.619.781-.992.15-.279.227-.59.224-.908l-.003-.36a3.28 3.28 0 0 1 .826-2.205l.113-.128a1.86 1.86 0 0 0 .444-1.543l-.37-2.209a3 3 0 0 1 .021-1.104l.387-1.865a.658.658 0 0 1 1.3.086l.109 1.499a.6.6 0 0 0 .362.508l1.415.607a1 1 0 0 1 .474.422l1.993 3.484q.227.397.54.734l2.183 2.354a1 1 0 0 1 .267.675l.055 10.18a.3.3 0 0 1-.3.301H11.32a.3.3 0 0 1-.3-.298l-.005-1a.3.3 0 0 0-.213-.286l-3.347-1.007a.3.3 0 0 0-.386.265l-.092 1.246a.3.3 0 0 1-.427.25L4.262 20.78a1 1 0 0 1-.573-.869l-.044-1.218a.3.3 0 0 0-.313-.29l-1 .045a.6.6 0 0 1-.575-.357l-.385-.87a.3.3 0 0 1 .253-.42Z"/>
    </svg>
  );
};
