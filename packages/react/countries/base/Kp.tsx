// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Kp = ({
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
      <path strokeLinejoin="round" d="m7.715 9.891-5.04 3.616a.5.5 0 0 0 .087.863l2.608 1.162a.5.5 0 0 1 .263.637l-1.731 4.485a.5.5 0 0 0 .31.655l4.307 1.42a.5.5 0 0 0 .413-.046l5.436-3.24a.5.5 0 0 0 .037-.836L12.52 17.25a.5.5 0 0 1-.204-.463l.282-2.43a.5.5 0 0 1 .23-.366l5.98-3.745a.5.5 0 0 0 .226-.511l-.379-2.147a.5.5 0 0 1 .145-.446l2.887-2.785a.5.5 0 0 0 .024-.694l-1.77-1.966a.5.5 0 0 0-.796.071l-1.923 3.108a.5.5 0 0 1-.419.237l-2.428.03a.5.5 0 0 0-.49.434L13.628 7.5a.5.5 0 0 1-.782.343L10.428 6.15a.5.5 0 0 0-.727.172l-1.837 3.4a.5.5 0 0 1-.149.17Z"/>
    </svg>
  );
};
