// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gr = ({
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
      <path strokeLinejoin="round" d="M4.33 4.871v1.443a.5.5 0 0 1-.136.342l-2.8 2.99a.5.5 0 0 0-.048.623l3.698 5.402a.5.5 0 0 1 .006.555l-.632.973a.5.5 0 0 0 .137.685l1.651 1.13a.5.5 0 0 1 .206.304l.444 2.01a.5.5 0 0 0 .372.378l3.64.872a.5.5 0 0 0 .582-.667l-.573-1.48a.5.5 0 0 1 .155-.572l.816-.65a.5.5 0 0 0 .131-.626l-.602-1.137a.5.5 0 0 1 .243-.694l.706-.304a.5.5 0 0 1 .521.078l1.155.978a.5.5 0 0 0 .654-.006l1.318-1.16a.5.5 0 0 0 .1-.632l-1.226-2.057a.5.5 0 0 0-.314-.23l-1.928-.459a.5.5 0 0 1-.308-.222L9.599 8.41a.5.5 0 0 1-.035-.462l.455-1.057a.5.5 0 0 1 .77-.194l1.241.982a.5.5 0 0 0 .448.089l1.174-.336a.5.5 0 0 0 .357-.549l-.098-.712a.5.5 0 0 1 .253-.506l1.504-.835a.5.5 0 0 1 .321-.056l4.467.71a.5.5 0 0 0 .498-.223l1.644-2.536a.5.5 0 0 0-.163-.701l-1.056-.631a.5.5 0 0 0-.599.064l-1.28 1.2a.5.5 0 0 1-.448.123l-3.42-.74a.5.5 0 0 0-.213 0L4.722 4.384a.5.5 0 0 0-.393.488Z"/>
    </svg>
  );
};
