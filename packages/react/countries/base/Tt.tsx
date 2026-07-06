// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tt = ({
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
      <path strokeLinejoin="round" d="m14.874 9.318-8.367 1.498a.5.5 0 0 0-.164.06l-2.674 1.56 3.258-.08a1 1 0 0 1 .87.467l.506.803a1 1 0 0 1 .12.794L8.1 15.625a1 1 0 0 0 .116.788l.223.357a1 1 0 0 1 .122.765l-.046.188a1 1 0 0 1-1.229.729l-.927-.247a.5.5 0 0 0-.476.124l-.917.89a.5.5 0 0 1-.14.095l-3.215 1.47a.5.5 0 0 0-.265.615l.083.246a.5.5 0 0 0 .633.314l2.522-.845a1 1 0 0 1 .66.008l.87.316a1 1 0 0 0 .45.054l4.218-.466a1 1 0 0 1 .338.02l1.187.277a1 1 0 0 0 .68-.081l1.994-1.012a1 1 0 0 0 .538-.751l.294-2.07a1 1 0 0 0-.013-.35l-.96-4.452a.5.5 0 0 1 .147-.47l2.19-2.047a.25.25 0 0 0-.13-.429l-1.999-.344a.5.5 0 0 0-.173 0Zm5.201-6.628L17.85 4.507a.582.582 0 0 0 .539 1.008l1.432-.439q.072-.022.14-.055l2.224-1.068a.946.946 0 0 0-.674-1.761l-1.082.314a1 1 0 0 0-.354.186Z"/>
    </svg>
  );
};
