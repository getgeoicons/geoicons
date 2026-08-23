// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnLempira = ({
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
      <path strokeLinejoin="round" d="M9.104 9.14a.8.8 0 0 0 .501.662l.241.096a.8.8 0 0 1 .48.95l-.21.79a1 1 0 0 1-.513.634l-3.987 2.031a1 1 0 0 0-.546.88l-.016 1.43a1 1 0 0 0 .464.856l5.117 3.248q.062.04.13.07l3.931 1.746a1 1 0 0 0 1.083-.177l2.843-2.615a1 1 0 0 0 .323-.75l-.018-1.233a1 1 0 0 0-.454-.823l-1.33-.868a1 1 0 0 1-.438-.657l-.21-1.138a1 1 0 0 0-.322-.57l-.926-.816a.983.983 0 0 1 .503-1.71l1.83-.276a1 1 0 0 0 .844-.872l.4-3.38a2 2 0 0 0-.157-1.04l-.508-1.155a1 1 0 0 0-.84-.595l-1.457-.11a1 1 0 0 1-.785-.488l-.92-1.554a1 1 0 0 0-.89-.49l-.352.01a1 1 0 0 0-.914.666l-.374 1.05c-.092.26-.13.537-.11.813l.115 1.61a.6.6 0 0 1-.53.64l-1.706.198a.6.6 0 0 0-.528.657z"/>
    </svg>
  );
};
