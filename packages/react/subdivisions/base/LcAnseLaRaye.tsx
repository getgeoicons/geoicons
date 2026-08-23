// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LcAnseLaRaye = ({
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
      <path strokeLinejoin="round" d="M16.087 22.368a.6.6 0 0 0 .865-.04l2.379-2.716a1 1 0 0 0 .08-1.213l-.455-.683a2 2 0 0 1-.282-1.568l1.068-4.53a1 1 0 0 0-.156-.806l-1.763-2.5a.6.6 0 0 0-.82-.156l-.915.601a.6.6 0 0 1-.838-.184L13.226 5.32a1 1 0 0 0-.55-.426l-2.344-.735a1 1 0 0 1-.669-.701l-.46-1.764a.6.6 0 0 0-.636-.446l-.024.002a.6.6 0 0 0-.446.27L4.435 7.123a.6.6 0 0 0 .1.774l5.09 4.596q.076.07.165.121l1.826 1.069a2 2 0 0 1 .935 1.264l.407 1.715c.071.302.213.584.413.823l1.754 2.093a1 1 0 0 1 .233.674l-.035 1.11a.6.6 0 0 0 .186.453z"/>
    </svg>
  );
};
