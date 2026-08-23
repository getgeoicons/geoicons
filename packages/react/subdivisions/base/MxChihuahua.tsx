// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxChihuahua = ({
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
      <path strokeLinejoin="round" d="M20.743 11.301a.3.3 0 0 0-.105-.39l-3.08-1.964a2 2 0 0 1-.83-1.078l-.62-1.937a2 2 0 0 0-.599-.906L11.373 1.46a1 1 0 0 0-.65-.243l-4.536-.016a.3.3 0 0 0-.301.3v1.012a.3.3 0 0 1-.305.3L4.323 2.79a.6.6 0 0 0-.604.51l-.158 1.043a1 1 0 0 0 .238.81l.612.697a1 1 0 0 1 .244.77l-.346 3.143a3 3 0 0 0 .092 1.133l.483 1.732a.6.6 0 0 1-.476.753l-.57.098a.6.6 0 0 0-.46.797l1.104 3.028a1 1 0 0 0 .458.534l1.202.661a1 1 0 0 1 .462.547l.419 1.2a1.5 1.5 0 0 0 .485.683l1.945 1.54a1 1 0 0 0 .924.168l.081-.026a1 1 0 0 0 .66-.686l.717-2.59a1 1 0 0 1 1.307-.671L16.52 19.9a1 1 0 0 0 .81-.054l1.621-.854a1 1 0 0 0 .526-1.014l-.359-2.748a2 2 0 0 1 .206-1.176z"/>
    </svg>
  );
};
