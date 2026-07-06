// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WesternSouthAmericaWithoutChile = ({
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
      <path strokeLinejoin="round" d="m15.972 21.342-.466.905a.6.6 0 0 1-.828.248l-2.79-1.569a1 1 0 0 1-.384-.385L9.129 16.27a1 1 0 0 0-.363-.373l-1.235-.735a.6.6 0 0 1-.266-.336l-.194-.615a.6.6 0 0 1 .114-.566l.48-.57a.6.6 0 0 0 .116-.556l-.397-1.346a1 1 0 0 1 .201-.935L9.319 8.22a1 1 0 0 0 .237-.755l-.217-2.094a1 1 0 0 1 .193-.7l1.382-1.857a1 1 0 0 1 .353-.296l2.159-1.084a.75.75 0 0 1 .782 1.272l-1.174.869a.6.6 0 0 0-.151.8l.489.781a.6.6 0 0 0 .408.273l2.54.43a.6.6 0 0 1 .497.54l.16 1.83a.6.6 0 0 1-.515.647l-.724.1a.6.6 0 0 0-.517.595v2.626a1 1 0 0 1-.8.98l-.704.144a1 1 0 0 0-.676.499l-.337.614a1 1 0 0 0 .05 1.042l.447.66a1 1 0 0 0 .428.355l1.427.622a1 1 0 0 1 .428.354l.506.744a1 1 0 0 1 .172.6l-.08 2.11a1 1 0 0 1-.11.42Z"/>
    </svg>
  );
};
