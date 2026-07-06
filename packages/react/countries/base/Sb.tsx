// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sb = ({
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
      <path strokeLinejoin="round" strokeOpacity=".99" d="M5.91 11.235 2.002 7.98a.858.858 0 0 1 .959-1.412L7.43 8.994a1.36 1.36 0 1 1-1.52 2.241Zm6.467-1.102L8.431 7.059a.759.759 0 0 1 .872-1.24L13.53 8.49a1.005 1.005 0 1 1-1.154 1.642Zm3.61 5.096-2.795-.926a.966.966 0 1 1 .66-1.816l2.737 1.085a.882.882 0 0 1-.602 1.657Zm2.654-1.633-2.17-2.713a.76.76 0 1 1 1.2-.935l2.099 2.768a.716.716 0 0 1-1.129.88Zm2.678 4.706-2.096-1.285a.747.747 0 0 1 .757-1.287l2.142 1.205a.793.793 0 1 1-.803 1.367Zm-6.113 3.045-1.52-.903a.68.68 0 0 1 .682-1.18l1.541.864a.704.704 0 1 1-.703 1.219ZM6.272 5.226 2.75 2.79a.798.798 0 1 0-.858 1.344l3.69 2.173a.642.642 0 0 0 .691-1.081Z"/>
    </svg>
  );
};
