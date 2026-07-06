// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WestUs = ({
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
      <path strokeLinejoin="round" d="M2.703 4.312 2.43 2.46a.6.6 0 0 1 .36-.64l1.297-.55a.6.6 0 0 1 .342-.038c4.888.862 11.71.544 14.539.273l.731 9.474 2.133-.152.548 4.753-1.401.122.518 5.88-3.302.258a1 1 0 0 0-.382.109l-1.264.655a1 1 0 0 1-.428.112l-2.438.077a1 1 0 0 1-.44-.087l-3.245-1.45a1 1 0 0 0-.437-.087l-2.297.068-.72-1.321a1 1 0 0 0-.5-.448l-1.46-.594a.6.6 0 0 1-.316-.3l-2.34-4.954a1 1 0 0 1-.094-.382l-.207-4.686a1 1 0 0 1 .038-.321l1.009-3.497a1 1 0 0 0 .029-.422Z"/>
    </svg>
  );
};
