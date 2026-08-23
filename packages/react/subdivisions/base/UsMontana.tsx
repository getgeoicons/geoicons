// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMontana = ({
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
      <path strokeLinejoin="round" d="M10.186 16.798a1 1 0 0 1 .369-.072L22.5 16.7a.3.3 0 0 0 .3-.3l-.008-10.193a.3.3 0 0 0-.3-.3H1.503a.3.3 0 0 0-.3.303l.02 2.184a1 1 0 0 0 .062.338l.508 1.374a1 1 0 0 0 .277.404l1.99 1.75a.6.6 0 0 1 .194.552l-.278 1.627a.6.6 0 0 0 .502.695l.708.106a.6.6 0 0 1 .443.317l1.065 2.055a.6.6 0 0 0 .755.28z"/>
    </svg>
  );
};
