// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnBayIslands = ({
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
      <path strokeLinejoin="round" d="m1.917 16.574-.22-.268a.6.6 0 0 1 .222-.929l1.477-.656a.6.6 0 0 1 .762.247l.184.316a.6.6 0 0 1-.286.854l-1.441.609a.6.6 0 0 1-.698-.173Zm3.555-3.094.32-1.194a1 1 0 0 1 .557-.653l4.175-1.876a4 4 0 0 1 1.192-.327l4.863-.547a.6.6 0 0 1 .666.62l-.008.195a.6.6 0 0 1-.48.564l-4.7.954c-.398.08-.782.221-1.137.418L6.342 14.16a.6.6 0 0 1-.87-.68Zm15.421-5.896-1.748 2.272a.6.6 0 0 0 .114.844l.053.04a.6.6 0 0 0 .75-.02l2.205-1.866a.6.6 0 0 0 .007-.91l-.511-.446a.6.6 0 0 0-.87.086Z"/>
    </svg>
  );
};
