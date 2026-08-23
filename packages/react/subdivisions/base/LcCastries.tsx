// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LcCastries = ({
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
      <path strokeLinejoin="round" d="M6.179 10.868a1 1 0 0 0 .494 1.067l1.3.724a1 1 0 0 1 .378.371l.912 1.569a.6.6 0 0 0 .86.191l.6-.415a.6.6 0 0 1 .91.302l.464 1.379a2 2 0 0 1 .075.98l-.672 3.89a.8.8 0 0 0 .122.58l.406.608a.8.8 0 0 0 1.129.208l.563-.4a.8.8 0 0 0 .334-.592l.222-2.93q.014-.172.084-.331l2.433-5.454q.06-.134.079-.279l.99-7.632a.6.6 0 0 0-.668-.673l-1.058.131a1 1 0 0 1-.985-.485l-1.033-1.755a.6.6 0 0 0-.972-.088l-.948 1.1a1 1 0 0 1-.767.347l-1.339-.012a1 1 0 0 0-.912.57l-.324.68a2 2 0 0 0-.19 1.01l.147 1.936a.6.6 0 0 1-.788.614l-.57-.19a.6.6 0 0 0-.778.454z"/>
    </svg>
  );
};
