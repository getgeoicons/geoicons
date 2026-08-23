// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BzToledo = ({
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
      <path strokeLinejoin="round" d="M2.154 9.027a1 1 0 0 0-.193.54l-.677 12.527a.6.6 0 0 0 .664.63l2.283-.25a8 8 0 0 1 1.617-.012l2.71.254a.6.6 0 0 0 .632-.762l-.299-1.049a1 1 0 0 1 .304-1.026l3.962-3.466a1 1 0 0 0 .333-.619l.18-1.328a1 1 0 0 1 .483-.728l1.522-.895a1 1 0 0 1 1.039.015l.566.355a.6.6 0 0 0 .802-.152l4.52-6.138a.616.616 0 0 0-.504-.982l-3.115.043a.6.6 0 0 1-.607-.649l.062-.764a1.5 1.5 0 0 0-.252-.959L16.864 1.65a1 1 0 0 0-.846-.441l-2.238.037a2 2 0 0 0-.884.223l-.751.388a.84.84 0 0 0-.452.78 1.67 1.67 0 0 1-.882 1.546l-2.798 1.5a6 6 0 0 1-.819.362l-3.28 1.168a2 2 0 0 0-.94.699z"/>
    </svg>
  );
};
