// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmSaintJames = ({
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
      <path strokeLinejoin="round" d="M20.72 2.747a.6.6 0 0 0-.492-.67L17.17 1.55a15 15 0 0 0-4.048-.146l-.467.047A12.4 12.4 0 0 0 8.79 2.487a1.65 1.65 0 0 0-.934 1.17l-.19.926A2 2 0 0 1 5.652 6.18l-1.274-.035a.8.8 0 0 0-.786.562l-.21.679a.8.8 0 0 0 .318.902l1.098.736a2 2 0 0 1 .737.903l.977 2.386a3 3 0 0 0 .614.942l1.862 1.937a3 3 0 0 1 .542.782l1.664 3.468a1 1 0 0 1-.137 1.078l-.626.741a.6.6 0 0 0-.094.62l.17.407a.6.6 0 0 0 .742.338l6.817-2.25a.6.6 0 0 0 .407-.49z"/>
    </svg>
  );
};
