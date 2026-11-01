// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bf = ({
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
      <path strokeLinejoin="round" d="m8.864 18.71-.332-2.78a.6.6 0 0 1 .616-.671l4.64.164a2 2 0 0 0 .883-.171l.547-.244a2 2 0 0 1 1.176-.138l1.522.281a2 2 0 0 0 1.214-.156l2.78-1.305a1 1 0 0 0 .486-1.315l-.572-1.272a1 1 0 0 0-.698-.566l-.948-.208a1.315 1.315 0 0 1-1.033-1.277 1.32 1.32 0 0 0-.571-1.078l-.428-.294a2.95 2.95 0 0 1-1.28-2.343.985.985 0 0 0-.86-.946l-1.01-.128a2 2 0 0 0-1.052.15l-3.875 1.69a3 3 0 0 0-1.032.744L7.32 8.755a.95.95 0 0 1-1.207.168l-.026-.016A.91.91 0 0 0 5.002 9a1.8 1.8 0 0 0-.598 1.503 1.78 1.78 0 0 1-1.063 1.799l-1.123.486a1 1 0 0 0-.595.797l-.348 2.87a1 1 0 0 0 .448.959l1.681 1.093a2 2 0 0 0 1.612.254l.465-.125a2 2 0 0 1 1.402.135l1.12.55a.6.6 0 0 0 .86-.61Z"/>
    </svg>
  );
};
