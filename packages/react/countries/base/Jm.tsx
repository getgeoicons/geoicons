// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Jm = ({
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
      <path strokeLinejoin="round" d="m1.438 9.01-.153.946a.5.5 0 0 0 .444.577l1.715.173a.5.5 0 0 1 .378.238l.884 1.461a.5.5 0 0 0 .417.241l.642.014a.5.5 0 0 1 .488.493l.01.679a.5.5 0 0 0 .323.46l.807.306a.5.5 0 0 0 .208.031l2.57-.16a.5.5 0 0 1 .383.145l1.688 1.677a.5.5 0 0 0 .68.024l.253-.22a.5.5 0 0 0 .087-.658l-.339-.502a.5.5 0 0 1 .019-.585l.343-.445a.5.5 0 0 1 .708-.085l.586.468a.5.5 0 0 0 .752-.154l.338-.626a.5.5 0 0 1 .705-.186l2.224 1.39 3.389-.352a.5.5 0 0 0 .367-.77l-1.47-2.259a.5.5 0 0 0-.294-.21l-3.924-1.018a.5.5 0 0 1-.203-.107l-1.397-1.217a.5.5 0 0 0-.218-.11l-4.315-.977-.077-.012-4.22-.285a.5.5 0 0 0-.357.118l-.722.612a.5.5 0 0 1-.362.117l-2.03-.159a.5.5 0 0 0-.308.078l-.795.509a.5.5 0 0 0-.224.34Z"/>
    </svg>
  );
};
