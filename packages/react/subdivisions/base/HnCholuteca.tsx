// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnCholuteca = ({
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
      <path strokeLinejoin="round" d="M5.513 9.668a1 1 0 0 1-.23 1.199L1.895 13.86a1 1 0 0 0-.134 1.354l.828 1.09a2 2 0 0 1 .35.736l.401 1.64a2 2 0 0 0 .535.945l2.628 2.604a1 1 0 0 0 .76.288l6.765-.384a1 1 0 0 0 .613-.256l2.074-1.871a1 1 0 0 0 .329-.693l.192-3.88a1 1 0 0 1 .453-.79l.948-.617a1 1 0 0 1 1.078-.009l1.053.662a1 1 0 0 0 1.109-.03l.409-.29a1 1 0 0 0 .409-.982l-1.542-9.156a1 1 0 0 0-1.226-.804l-2.932.724a1 1 0 0 0-.53.332L13.7 7.806a1 1 0 0 1-1.128.294l-2.123-.816a1 1 0 0 1-.615-.706l-.44-1.886a1 1 0 0 0-.825-.761l-2.728-.41a1 1 0 0 1-.804-.684l-.198-.62a1 1 0 0 0-1.04-.691l-.23.02a1 1 0 0 0-.883.759l-.112.459a2 2 0 0 0 .156 1.373z"/>
    </svg>
  );
};
