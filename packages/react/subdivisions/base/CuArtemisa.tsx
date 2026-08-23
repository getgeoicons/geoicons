// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuArtemisa = ({
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
      <path strokeLinejoin="round" d="M20.871 5.734a.6.6 0 0 0-.819-.579l-1.298.51a6 6 0 0 1-1.088.312l-2.776.518-7.699.8a3 3 0 0 1-.824-.028l-.523-.09a2 2 0 0 0-1.117.126l-.692.291a2 2 0 0 0-.535.332L1.973 9.25a1 1 0 0 0-.334.608l-.38 2.542a1 1 0 0 0 .17.722l.899 1.282a1 1 0 0 0 1.08.392l1.195-.323a.6.6 0 0 1 .636.219l.662.882a2 2 0 0 1 .392 1.013l.134 1.433a1 1 0 0 0 .664.85l.499.175a1 1 0 0 0 .743-.031l4.937-2.224a2 2 0 0 0 1.067-1.165l.285-.816a1 1 0 0 1 1.026-.667l6.352.522a.6.6 0 0 0 .641-.503l.08-.497a.6.6 0 0 0-.387-.66l-.285-.103a.8.8 0 0 1-.52-.646l-.184-1.388a2 2 0 0 1 .185-1.142l.277-.57a1 1 0 0 0-.251-1.2l-.37-.314a1 1 0 0 1-.353-.797z"/>
    </svg>
  );
};
