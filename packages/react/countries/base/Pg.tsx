// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Pg = ({
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
      <path strokeLinejoin="round" d="M1.224 15.506 1.2 6.33l5.81 2.23a.5.5 0 0 1 .277.26l.552 1.219a.5.5 0 0 0 .259.253l2.393 1.024c.17.073.205.3.064.42l-1.091.93 5.509 4.194a.5.5 0 0 1 .129.65l-.299.51a.5.5 0 0 1-.683.18l-1.27-.74a.5.5 0 0 0-.18-.063l-2.186-.314a.5.5 0 0 1-.326-.192l-2.006-2.625a.5.5 0 0 0-.347-.194l-2.003-.203a.5.5 0 0 0-.52.329l-.556 1.544a.5.5 0 0 1-.484.33l-2.531-.067a.5.5 0 0 1-.487-.499ZM12.161 10.8l-.005-.01a.5.5 0 0 1 .4-.722l1.977-.184a.5.5 0 0 0 .333-.172l.886-1.033a.5.5 0 0 0-.144-.767l-2.235-1.191a.5.5 0 0 1-.196-.693l.128-.22a.5.5 0 0 1 .453-.247l.794.033a.5.5 0 0 1 .197.05l2.268 1.097a.5.5 0 0 1 .097.062l1.211.98a.5.5 0 0 1 .184.353l.072.992a.5.5 0 0 1-.153.397l-1.064 1.021a.5.5 0 0 1-.128.09l-2.454 1.188a.5.5 0 0 1-.407.013l-1.955-.797a.5.5 0 0 1-.259-.24Zm8.821 1.88L19.77 10.9a.5.5 0 0 1 .032-.604l.37-.437a.5.5 0 0 1 .766.003l1.498 1.802a.5.5 0 0 1-.116.742l-.657.417a.5.5 0 0 1-.681-.141Z"/>
    </svg>
  );
};
