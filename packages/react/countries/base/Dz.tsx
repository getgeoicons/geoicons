// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dz = ({
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
      <path strokeLinejoin="round" d="M12.937 21.292 1.41 13.225a.5.5 0 0 1-.214-.403l-.015-1.208a.5.5 0 0 1 .32-.473l4.766-1.849a.5.5 0 0 0 .306-.581l-.125-.527a.5.5 0 0 1 .451-.614l1.574-.112a.5.5 0 0 0 .438-.659l-.918-2.728a.5.5 0 0 1 .307-.63l6.149-2.173a.5.5 0 0 1 .162-.029l4.065-.033a.5.5 0 0 1 .47.683l-1.037 2.637a.5.5 0 0 0 .047.457l1.555 2.367q.066.102.08.222l.801 7.606a.5.5 0 0 0 .149.306l1.658 1.613a.5.5 0 0 1-.054.762L16.9 21.834a.5.5 0 0 1-.165.08l-2.8.754a.5.5 0 0 1-.615-.36l-.186-.73a.5.5 0 0 0-.198-.286Z"/>
    </svg>
  );
};
