// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtSolola = ({
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
      <path strokeLinejoin="round" d="M19.643 21.403a.5.5 0 0 0 .813-.362l.244-4.394a3 3 0 0 1 .232-1.003l1.25-2.957a2 2 0 0 0 .134-1.092l-.233-1.465a2 2 0 0 1 .063-.897l.528-1.73a.6.6 0 0 0-.225-.664l-.233-.166a.6.6 0 0 0-.858.172l-.51.82a.6.6 0 0 1-.827.192l-.604-.377a.6.6 0 0 1-.158-.875l.923-1.199a.6.6 0 0 0-.06-.8l-1.872-1.79a1 1 0 0 0-1.055-.21l-.636.249a1 1 0 0 0-.553.533l-.233.536a1 1 0 0 1-.661.567l-1.53.406a1 1 0 0 1-.611-.032l-2.83-1.075a1 1 0 0 0-1.01.179L6.592 6.165a3 3 0 0 0-.408.43l-3.957 5.102a1 1 0 0 0-.198.767l.374 2.39a1 1 0 0 1-.09.597l-.7 1.422a.6.6 0 0 0 .52.865l1.348.04a.6.6 0 0 0 .538-.302l.782-1.365a1 1 0 0 1 .817-.502l3.732-.19a1 1 0 0 1 .852.4l1.308 1.75a1 1 0 0 1 .18.4l.646 3.189a.57.57 0 0 0 .958.294l2.512-2.46a.6.6 0 0 1 .796-.038z"/>
    </svg>
  );
};
