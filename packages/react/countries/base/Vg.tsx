// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Vg = ({
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
      <path strokeLinejoin="round" d="m8.377 11.663-2.765 2.81 1.832.475a.5.5 0 0 0 .402-.067l1.6-1.06a.5.5 0 0 1 .241-.081l1.245-.085a.5.5 0 0 0 .266-.1l.97-.73a.5.5 0 0 1 .412-.088l1.043.24a.5.5 0 0 0 .576-.3l.18-.447a.5.5 0 0 0-.316-.665l-1.605-.496a.5.5 0 0 0-.213-.018l-3.576.466a.5.5 0 0 0-.292.146Zm10.635-2.294L18.2 12.17l4.6-3.059-3.292-.103a.5.5 0 0 0-.496.36ZM3.856 12.17H1.43l-.085-.233a.5.5 0 0 1 .223-.606l1.09-.619a.5.5 0 0 1 .313-.06l1.865.247-.54 1.008a.5.5 0 0 1-.44.264Z"/>
    </svg>
  );
};
