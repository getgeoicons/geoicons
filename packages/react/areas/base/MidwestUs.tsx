// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MidwestUs = ({
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
      <path strokeLinejoin="round" d="m1.2 14.011.894-9.757H9.14a1 1 0 0 1 .204.02l3.766.788-1.064 1.214a.6.6 0 0 0 .395.993l.865.082a1 1 0 0 0 .616-.143l.757-.462a1 1 0 0 1 .648-.139l2.704.346a1 1 0 0 1 .701.43l1.06 1.562a1 1 0 0 1 .145.326l.33 1.37a1 1 0 0 1-.065.657l-.298.639a.747.747 0 0 0 1.098.934l1.5-1.02.256 2.504a1 1 0 0 1-.207.718l-.713.91a1 1 0 0 1-.984.365l-1.158-.232a1 1 0 0 0-.84.216l-3.611 3.041a1 1 0 0 1-.615.235l-4.642.138-7.001-.67.298-4.916z"/>
    </svg>
  );
};
