// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiChontales = ({
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
      <path strokeLinejoin="round" d="M20.445 17.697a1 1 0 0 0 .578.135l1.052-.077a.593.593 0 0 0 .401-.983l-.921-1.045a1 1 0 0 0-.358-.258l-2.096-.896a1 1 0 0 1-.603-.823l-.156-1.613a2 2 0 0 0-.203-.703l-1.682-3.36a2 2 0 0 1-.135-1.445l.186-.65a1 1 0 0 0-.105-.791l-1.096-1.815a1 1 0 0 0-.995-.473l-.017.002a1 1 0 0 0-.695.436l-1.567 2.356a3 3 0 0 1-1.519 1.174L6.162 8.37a3 3 0 0 1-1.634.092l-1.694-.379a.6.6 0 0 0-.72.474l-.815 4.303a.6.6 0 0 0 .407.683l1.108.354a1 1 0 0 1 .514.378l1.755 2.501a1 1 0 0 0 .753.424l.762.05a2 2 0 0 1 1.229.528l3.314 3.069a.6.6 0 0 0 .773.035l4.73-3.633a1.5 1.5 0 0 1 .965-.31l1.132.04a2 2 0 0 1 .942.272z"/>
    </svg>
  );
};
