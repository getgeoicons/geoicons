// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DmSaintLuke = ({
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
      <path strokeLinejoin="round" d="M20.976 8.196a.6.6 0 0 0-.384-.6L4.63 1.453a.6.6 0 0 0-.802.433l-1.06 4.902a2 2 0 0 0 .17 1.323l.858 1.7a3 3 0 0 1 .296.962l.165 1.26a3 3 0 0 0 .167.669l.756 2.002a3 3 0 0 1 .192 1.108l-.034 2.095a1 1 0 0 0 .262.69l1.841 2.018 1.825 1.603a.6.6 0 0 0 .96-.247l.79-2.19a1 1 0 0 1 .527-.571l3.76-1.71 5.714-3.353a.6.6 0 0 0 .287-.627l-.34-1.811a7 7 0 0 1-.104-1.741z"/>
    </svg>
  );
};
