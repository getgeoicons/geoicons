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
      <path strokeLinejoin="round" d="m3.584 18.993-1.931-3.547a3 3 0 0 1-.36-1.24l-.072-1.115a1 1 0 0 1 .158-.607l1.283-1.99a1 1 0 0 1 .73-.452l3.854-.427a.8.8 0 0 0 .558-.324l.787-1.079a.8.8 0 0 1 .504-.315l1.532-.277a2 2 0 0 0 1.342-.91l1.012-1.624a1 1 0 0 1 .84-.47l.659-.006a1 1 0 0 1 .774.356l.744.886a1 1 0 0 1 .223.796l-.123.797a.8.8 0 0 0 .383.81l2.178 1.288a2 2 0 0 1 .474.39l3.44 3.856a.541.541 0 0 1-.503.892l-2.792-.523a2 2 0 0 0-1.11.11l-3.513 1.404a2 2 0 0 1-1.307.062L9.79 14.69a1 1 0 0 0-1.216.603l-.357.934a.8.8 0 0 1-.728.514l-1.542.038a1 1 0 0 0-.952.782l-.284 1.274a.608.608 0 0 1-1.127.159Z"/>
    </svg>
  );
};
