// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ge = ({
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
      <path strokeLinejoin="round" d="m9.907 15.292-3.288.311a.5.5 0 0 1-.48-.746l.6-1.05a.5.5 0 0 0 .042-.401l-.87-2.716a.5.5 0 0 0-.215-.275L1.578 7.901a.5.5 0 0 1-.195-.633l.286-.632a.5.5 0 0 1 .645-.256l4.172 1.711a.5.5 0 0 0 .177.037l3.695.096a.5.5 0 0 1 .31.117l2.827 2.38a.5.5 0 0 0 .473.093l2.546-.81a.5.5 0 0 1 .336.011l2.39.947a.5.5 0 0 1 .295.605l-.156.536a.5.5 0 0 0 .276.597l1.623.723a.5.5 0 0 1 .169.79l-.215.24a.5.5 0 0 0 .056.722l1.183.962a.5.5 0 0 1 .119.636l-.335.587a.5.5 0 0 1-.69.183l-3.061-1.818a.5.5 0 0 0-.598.066l-.773.727a.5.5 0 0 1-.286.132l-4.388.497a.5.5 0 0 1-.39-.126l-1.78-1.602a.5.5 0 0 0-.382-.127Z"/>
    </svg>
  );
};
