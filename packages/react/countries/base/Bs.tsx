// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bs = ({
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
      <path strokeLinejoin="round" d="m3.521 3.852 1.87-.316A.962.962 0 0 1 6.5 4.646a.962.962 0 0 0 .898 1.124l.117.006a1 1 0 0 0 1.016-.732l.367-1.325a1 1 0 0 0-.361-1.065L7.36 1.766a2 2 0 0 0-1.665-.35l-2.546.6a.937.937 0 0 0 .371 1.836Zm1.042 4.307.858-.146a1 1 0 0 1 1.116.67l1.114 3.34a1 1 0 0 1-.443 1.18l-.124.072a1 1 0 0 1-1.377-.37L3.86 9.637a1 1 0 0 1 .703-1.478Zm4.829.008 2.329 3.091a1 1 0 0 1 .175.83l-.274 1.164a1 1 0 0 0 .326.992l4.498 3.816a1 1 0 0 0 1.467-.19l.303-.434a1 1 0 0 0-.573-1.542l-1.429-.363a1 1 0 0 1-.723-.726l-.894-3.563a2 2 0 0 0-.478-.878l-3.226-3.457a.981.981 0 0 0-1.501 1.26Zm9.279 12.465 1.9-.744a1 1 0 0 1 1.288.55l.042.1a1 1 0 0 1-.602 1.328l-1.932.66a1.01 1.01 0 0 1-1.21-.483 1.01 1.01 0 0 1 .514-1.411Z"/>
    </svg>
  );
};
