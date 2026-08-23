// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintThomasLowland = ({
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
      <path strokeLinejoin="round" d="M7.04 6.33c-2.553 3.525-2.715 8.59-1.906 12.082.072.31-.001.632-.17.902a3.88 3.88 0 0 0-.538 2.726c3.022-.366 5.587.133 6.902.556.37.119.762.168 1.145.1l1.302-.234a2 2 0 0 0 1.079-.571l4.632-4.745a.3.3 0 0 0 .06-.33l-3.75-8.517a4 4 0 0 0-.708-1.087L9.984 1.627a.6.6 0 0 0-.832-.052l-.561.477a.6.6 0 0 0-.115.784l.24.37a.6.6 0 0 1 .013.63l-.287.488c-.413.704-.924 1.345-1.403 2.006Z"/>
    </svg>
  );
};
