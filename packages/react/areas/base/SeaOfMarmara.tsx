// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SeaOfMarmara = ({
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
      <path strokeLinejoin="round" d="m7.14 11.022-3.144 1.11a1 1 0 0 0-.403.265L1.737 14.41a.775.775 0 0 0 1.118 1.071l1.784-1.795a1 1 0 0 1 .468-.266l1.887-.469a.93.93 0 0 1 .874.236.93.93 0 0 0 .492.25l.838.143a.595.595 0 0 0 .676-.738.595.595 0 0 1 .621-.744l.537.041a.6.6 0 0 1 .548.517l.01.068a.6.6 0 0 0 .575.519l3.247.104a.6.6 0 0 0 .601-.746l-.058-.233a.6.6 0 0 1 .368-.707l.622-.237a1 1 0 0 1 .32-.065l4.787-.18a.736.736 0 0 0-.009-1.472l-2.678-.068a1 1 0 0 1-.478-.136l-1.49-.868a1 1 0 0 0-.824-.084l-.746.252a1 1 0 0 1-.631.003l-2.081-.681a1 1 0 0 0-.74.047l-.968.46a1 1 0 0 1-.703.058l-.497-.141a1 1 0 0 0-.416-.029l-.58.083a1 1 0 0 0-.813.692l-.101.326a1 1 0 0 1-.138.278l-.534.757a1 1 0 0 1-.484.366Z"/>
    </svg>
  );
};
