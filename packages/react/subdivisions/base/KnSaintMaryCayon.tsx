// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintMaryCayon = ({
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
      <path strokeLinejoin="round" d="m3.504 21.346-1.098-.311a1 1 0 0 1-.72-.84l-.453-3.652a2 2 0 0 1 .004-.524l.306-2.187a2 2 0 0 1 .454-1.014l.656-.775a2 2 0 0 1 .857-.593l.503-.179a1 1 0 0 0 .653-.79l.373-2.426a1 1 0 0 1 .225-.494l2.23-2.635a.3.3 0 0 1 .283-.1l.725.133a.3.3 0 0 0 .34-.2l.563-1.708a.6.6 0 0 1 .733-.389l.284.08a.6.6 0 0 1 .368.299l.948 1.803a1 1 0 0 0 .34.374l1.766 1.148a1 1 0 0 1 .452.905l-.011.17a1 1 0 0 0 .283.765L15.735 9.4a2 2 0 0 1 .43.661l.6 1.514a2 2 0 0 0 .372.6l5.387 5.99a.3.3 0 0 1-.101.475l-4.455 1.982a2 2 0 0 1-1.26.122l-4.206-.965a3 3 0 0 0-1.105-.044l-1.29.189a3 3 0 0 1-1.214-.072l-1.783-.48a1 1 0 0 0-.922.216l-1.75 1.545a1 1 0 0 1-.934.213Z"/>
    </svg>
  );
};
