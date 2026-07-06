// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MalayPeninsula = ({
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
      <path strokeLinejoin="round" d="m6.555 3.245.49-1.614a.6.6 0 0 1 .581-.425l.965.011a.6.6 0 0 1 .552.817l-.58 1.5a1 1 0 0 0-.067.35l-.018 1.703a.6.6 0 0 0 .354.554l.531.238a.6.6 0 0 1 .327.366l1.078 3.407a1 1 0 0 0 .658.654l1.02.315a1 1 0 0 1 .44.278l2.506 2.722c.165.179.284.396.346.631l.352 1.328q.045.171.03.345l-.187 2.095a1 1 0 0 0 .234.736l.527.62q.075.087.127.19l.757 1.467a.6.6 0 0 1-.359.849l-1.06.322a.6.6 0 0 1-.563-.116l-3.509-2.983a1 1 0 0 1-.273-.372l-1.771-4.193a1 1 0 0 1-.07-.52l.175-1.319a1 1 0 0 0-.167-.699L7.593 9.034a1 1 0 0 0-.392-.335l-.653-.312a1 1 0 0 1-.53-1.175l.52-1.834a1 1 0 0 0 .037-.315l-.062-1.486a1 1 0 0 1 .042-.332Z"/>
    </svg>
  );
};
