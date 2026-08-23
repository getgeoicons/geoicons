// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HtNordOuest = ({
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
      <path strokeLinejoin="round" d="M20.829 11.435a1 1 0 0 0 .491-.199l1.152-.88a.761.761 0 0 0-.297-1.348l-4.663-1.043a2 2 0 0 0-.785-.018l-3.65.646a2 2 0 0 1-.434.029l-4-.172a2 2 0 0 0-1.095.27l-3.1 1.811a1 1 0 0 1-.544.136l-.978-.039a1 1 0 0 0-.927.538l-.468.9a2.9 2.9 0 0 0-.324 1.353l.002.12a2.52 2.52 0 0 0 1.217 2.126c.468.28 1.015.4 1.558.341l2.567-.28a3 3 0 0 1 .976.054l.966.215a.6.6 0 0 0 .713-.443l.236-.967a1.744 1.744 0 0 1 1.935-1.313l3.715.517a1 1 0 0 0 .837-.275l1.264-1.235a2 2 0 0 1 1.165-.556z"/>
    </svg>
  );
};
