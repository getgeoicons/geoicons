// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VcSaintAndrew = ({
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
      <path strokeLinejoin="round" d="M21.031 1.658a.6.6 0 0 0-.64-.399l-4.297.53a1 1 0 0 0-.813.638l-1.113 2.939a2 2 0 0 1-1.46 1.249l-4.376.917a1 1 0 0 0-.387.173L4.7 10.09a1 1 0 0 1-.697.189l-1.108-.118a1 1 0 0 0-.981.511l-.039.07a1 1 0 0 0-.051.86l1.404 3.469a1 1 0 0 0 .372.457l4.372 2.914a1 1 0 0 1 .444.784l.102 2.09a1.42 1.42 0 0 0 2.14 1.152l.258-.152a2 2 0 0 0 .645-.612l.777-1.166a1 1 0 0 0 .096-.182l1.593-3.973c.147-.364.363-.697.638-.979l3.265-3.343c.262-.27.573-.486.915-.64l1.684-.758a.3.3 0 0 0 .152-.392l-.756-1.753a1 1 0 0 1 .261-1.15l1.152-1.005a2 2 0 0 0 .575-2.162z"/>
    </svg>
  );
};
