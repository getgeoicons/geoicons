// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cf = ({
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
      <path strokeLinejoin="round" d="m1.363 15.2 2.242 3.804a.25.25 0 0 0 .436-.01l.893-1.688a.5.5 0 0 1 .436-.267l2.069-.025a.5.5 0 0 0 .403-.213l1.365-1.946a.5.5 0 0 1 .57-.186l4.298 1.452a.5.5 0 0 0 .346-.01l4.508-1.803a.5.5 0 0 1 .244-.032l3.062.36a.25.25 0 0 0 .232-.395l-3.136-4.34a.5.5 0 0 0-.15-.138l-2.57-1.519a.5.5 0 0 1-.232-.543l.246-1.066a.5.5 0 0 0-.102-.43l-1.155-1.402a.5.5 0 0 0-.408-.181l-1.356.059a.5.5 0 0 0-.398.227L11.784 7.1a.5.5 0 0 1-.349.223l-2.558.367a.5.5 0 0 0-.382.284L7.811 9.44a.5.5 0 0 1-.388.284l-4.575.606a.5.5 0 0 0-.356.227l-1.208 1.898a.5.5 0 0 0-.078.288l.089 2.224a.5.5 0 0 0 .068.234Z"/>
    </svg>
  );
};
