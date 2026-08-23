// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxMorelos = ({
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
      <path strokeLinejoin="round" d="M6.852 2.02a1 1 0 0 0-1.014.294l-.28.312a1 1 0 0 0-.252.768l.268 2.69a1 1 0 0 1-.388.893l-2.06 1.576a1 1 0 0 0-.299.371l-1.42 3.04a1 1 0 0 0 .016.879l2.89 5.637a1 1 0 0 0 .695.524l2.445.486a1 1 0 0 0 .569-.053l.944-.38a1 1 0 0 1 1.263.47l1.013 1.968a.6.6 0 0 0 .908.195l4.581-3.66a1 1 0 0 1 1.344.086l1.503 1.557a.599.599 0 0 0 1.025-.483l-.703-6.212a3 3 0 0 1 .188-1.433l2.487-6.338a.61.61 0 0 0-1.029-.625l-1.181 1.35a2 2 0 0 1-.929.598l-.214.064a2 2 0 0 1-1.4-.093l-.468-.211a2 2 0 0 1-1.009-1.022l-.486-1.112a1 1 0 0 0-.677-.57l-1.943-.48a1 1 0 0 0-.996.316l-.155.18a1 1 0 0 1-1.002.315l-.533-.134a1 1 0 0 1-.612-.455L9.83 3.14a1 1 0 0 0-.587-.449z"/>
    </svg>
  );
};
