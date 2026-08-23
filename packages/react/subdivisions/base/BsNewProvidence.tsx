// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsNewProvidence = ({
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
      <path d="m1.844 12.24-.16.261a1.287 1.287 0 0 0 1.164 1.956l2-.102a1 1 0 0 1 .792.328l.9.995a1 1 0 0 0 .723.328l4.834.095a2 2 0 0 0 .946-.217l2.985-1.52q.376-.19.788-.27l4.092-.796a1 1 0 0 0 .59-.357l.62-.776a1 1 0 0 0-.226-1.457L19.195 8.91a3 3 0 0 0-1.128-.456l-2.195-.4a3 3 0 0 0-1.755.211l-1.094.486a1 1 0 0 1-.603.067l-2.091-.422a3 3 0 0 0-1.44.064l-3.192.94a3 3 0 0 0-.974.494l-2.458 1.878a1.7 1.7 0 0 0-.421.468Z"/>
    </svg>
  );
};
