// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtPenalDebe = ({
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
      <path strokeLinejoin="round" d="M12.565 1.418a1 1 0 0 0-.294-.07l-1.613-.128a1 1 0 0 0-.48.08L4.423 3.806a.6.6 0 0 0-.158 1l1.578 1.392a1 1 0 0 0 .282.175l2.751 1.13a1 1 0 0 1 .62.964l-.228 5.883a1 1 0 0 1-.71.918l-2.424.73a1 1 0 0 0-.707.86l-.378 3.85a1 1 0 0 0 .208.715l.738.94a1 1 0 0 0 .898.375l5.486-.614a1 1 0 0 1 .171-.004l5.962.36a.6.6 0 0 0 .636-.605l-.11-11.697a.6.6 0 0 1 .55-.603l.192-.017a.6.6 0 0 0 .538-.71l-.394-2.056a1 1 0 0 1 .02-.46l.246-.873a1 1 0 0 0-.59-1.199z"/>
    </svg>
  );
};
