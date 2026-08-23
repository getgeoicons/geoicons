// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuCienfuegos = ({
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
      <path strokeLinejoin="round" d="M9.2 15.45a.6.6 0 0 0 .641.46l.695-.066a3 3 0 0 1 1.106.102l.662.19c.522.148.993.436 1.364.832l2.05 2.186c.256.273.56.496.899.657l3.655 1.74a.6.6 0 0 0 .833-.371l.292-.984a2 2 0 0 1 .473-.815l.491-.513a1 1 0 0 0 .211-1.05l-1.493-3.886a2 2 0 0 1-.012-1.4l.363-1a1 1 0 0 0-.167-.976l-1.22-1.486a2 2 0 0 0-.721-.553l-1.057-.479a1 1 0 0 1-.587-.932l.071-3.446a1 1 0 0 0-.547-.913l-.246-.124a1 1 0 0 0-1.14.165l-.584.554a1 1 0 0 1-1.436-.062l-.393-.444a1 1 0 0 0-1.348-.137L9.378 4.703a2 2 0 0 1-1.463.382L4.057 4.57a1 1 0 0 0-.722.184L1.687 5.957a1 1 0 0 0-.4.952l.618 4.242a1 1 0 0 0 .322.6L3.9 13.252a1 1 0 0 0 .576.252l3.644.333a1 1 0 0 1 .883.768z"/>
    </svg>
  );
};
