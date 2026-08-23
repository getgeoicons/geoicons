// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmPortland = ({
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
      <path strokeLinejoin="round" d="M1.35 11.226a1 1 0 0 0 .018.767l.799 1.8a.89.89 0 0 0 1.36.342l.58-.451a1 1 0 0 1 1.127-.069l4.433 2.651a2 2 0 0 0 1.465.235l2.26-.508a2 2 0 0 1 1.116.069l5.79 2.08a2 2 0 0 0 .966.097l.695-.102a.6.6 0 0 0 .443-.874L19.1 11.02a1 1 0 0 0-.555-.476l-5.526-1.927a1 1 0 0 0-.367-.055l-2.873.109a1 1 0 0 1-.78-.33l-.618-.685a1 1 0 0 0-.908-.317l-1.06.178a1 1 0 0 1-.811-.223L4.19 6.1a.6.6 0 0 0-.947.24z"/>
    </svg>
  );
};
