// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaNgabeBugle = ({
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
      <path strokeLinejoin="round" d="m5.46 11.697-2.988-.636a.3.3 0 0 1-.229-.363l.232-.973a1 1 0 0 0-.266-.938l-.85-.852a.3.3 0 0 1-.052-.355L2.7 5.007a.3.3 0 0 1 .538.022l1.726 3.925a1 1 0 0 0 1.296.522l1.195-.492a3 3 0 0 1 1.058-.224l2.79-.077a.3.3 0 0 0 .21-.506L9.241 5.78a.928.928 0 0 1 1.346-1.276l5.145 5.419a3 3 0 0 0 1.838.916l2.998.339a1 1 0 0 1 .86.759l1.26 5.227a.3.3 0 0 1-.354.364l-2.544-.534a1 1 0 0 0-.837.203l-2.322 1.891a3 3 0 0 1-1.335.622l-2.157.408a1 1 0 0 1-.758-.162l-1.012-.705a1 1 0 0 0-.715-.17l-1.197.173a1 1 0 0 1-1.077-.632l-.54-1.414a.6.6 0 0 0-.692-.37l-1.07.238a.6.6 0 0 1-.73-.633l.347-4.429a.3.3 0 0 0-.236-.317Z"/>
    </svg>
  );
};
