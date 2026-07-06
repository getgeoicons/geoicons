// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pr = ({
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
      <path strokeLinejoin="round" d="m20.483 13.265-.697 1.479a.5.5 0 0 1-.339.274l-3.872.899a.5.5 0 0 1-.214.003l-3.336-.686a.5.5 0 0 0-.151-.008l-1.761.178a.5.5 0 0 1-.101 0l-1.709-.175a.5.5 0 0 0-.208.023l-1.912.638a.5.5 0 0 1-.313 0l-1.364-.443a.5.5 0 0 0-.237-.018l-2.177.362.551-3.308a.5.5 0 0 0-.078-.362L1.2 10.099l.991-.406a.56.56 0 0 0 .333-.453c.04-.295.139-.712.376-.912.32-.27.622-.238 1.04-.269.618-.045 1.477.308 1.782.445a.54.54 0 0 0 .24.048l6.118-.224 5.827.534a.5.5 0 0 1 .15.038l2.38 1.016a.5.5 0 0 0 .263.036l1.742-.232.301 2.036a.5.5 0 0 1-.297.533l-1.707.73a.5.5 0 0 0-.256.247Z"/>
    </svg>
  );
};
