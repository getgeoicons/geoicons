// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GdSaintPatrick = ({
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
      <path strokeLinejoin="round" d="M21.546 18.474a.6.6 0 0 0 .688-.556l.217-3.51a1 1 0 0 0-.04-.352l-.753-2.48a2 2 0 0 0-.353-.668l-.701-.877a1 1 0 0 1-.217-.695l.08-1.152a2 2 0 0 1 .186-.711l.703-1.492a1 1 0 0 0-.495-1.338l-2.09-.941a2 2 0 0 0-1.075-.16l-.965.123c-.238.03-.468.103-.68.215l-1.677.886a2 2 0 0 1-1.028.23l-1.353-.064a2 2 0 0 1-1.254-.52L8.802 2.648a1 1 0 0 0-.66-.261l-1.15-.017a1 1 0 0 0-.6.189L2.146 5.62a.6.6 0 0 0-.047.936l1.375 1.217a2 2 0 0 1 .578.882l.734 2.27a1 1 0 0 1-.251 1.022l-1.062 1.04a1 1 0 0 0-.258 1l1.052 3.536a1 1 0 0 1-.15.873l-.338.465a1 1 0 0 0-.156.848l.233.866a.6.6 0 0 0 1.024.247l1.306-1.442a2 2 0 0 1 .735-.512l.831-.335a2 2 0 0 1 1.43-.025l.781.283a2 2 0 0 0 1.18.057l2.34-.601.216 1.483 4.415-1.537a2 2 0 0 1 .953-.09z"/>
    </svg>
  );
};
