// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoDajabon = ({
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
      <path strokeLinejoin="round" d="M5.26 1.673a.6.6 0 0 0-.198.457l.034 1.794a1 1 0 0 0 .283.678l1.099 1.13a2 2 0 0 1 .479.81l1.282 4.189a2 2 0 0 1 .048.98l-.666 3.313a1 1 0 0 1-.572.716l-3.327 1.488a.6.6 0 0 0-.248.89l1.672 2.414a2 2 0 0 0 .595.565l1.634 1.006c.22.135.462.227.715.27l1.971.333a1 1 0 0 0 .922-.33l1.564-1.798a1 1 0 0 1 1.02-.308l1.723.474a1 1 0 0 0 1.262-.883l.136-1.658a1 1 0 0 1 .216-.543l1.447-1.81a2 2 0 0 0 .438-1.212l.092-4.827a1 1 0 0 1 .625-.908l.813-.328a.8.8 0 0 0 .496-.662l.063-.631a.8.8 0 0 0-.482-.816l-3.055-1.3a1 1 0 0 1-.605-.842l-.054-.695a1 1 0 0 0-1.186-.904l-1.075.207a1 1 0 0 1-.85-.231l-.972-.855a1 1 0 0 0-1.248-.058L9.793 2.92a1 1 0 0 1-1.107.045l-2.52-1.533a.6.6 0 0 0-.714.068z"/>
    </svg>
  );
};
