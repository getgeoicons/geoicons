// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Vi = ({
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
      <path strokeLinejoin="round" d="m8.706 18.058-.477 3.2a.5.5 0 0 0 .527.573l7.836-.519a.5.5 0 0 0 .146-.032l5.602-2.154a.5.5 0 0 0 .29-.639l-.262-.712a.5.5 0 0 0-.45-.328l-7.634-.28-5.129.467a.5.5 0 0 0-.449.424ZM4.957 2.176l-2.421.69a.5.5 0 0 0-.057.941L7.738 6.02a.5.5 0 0 0 .508-.073L9.651 4.81a.5.5 0 0 0-.123-.85L5.286 2.194a.5.5 0 0 0-.33-.019Zm9.888.071-1.876 1.108a.5.5 0 0 0-.234.318l-.36 1.571a.5.5 0 0 0 .47.612l3.846.134a.5.5 0 0 0 .419-.202l1.724-2.324-3.568-1.258a.5.5 0 0 0-.421.04Z"/>
    </svg>
  );
};
