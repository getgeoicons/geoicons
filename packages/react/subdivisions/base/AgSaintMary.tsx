// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AgSaintMary = ({
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
      <path strokeLinejoin="round" d="M8.548 1.85a.6.6 0 0 0-.29.608l.036.237a3 3 0 0 1-.648 2.36l-.02.023a2 2 0 0 1-1.347.72l-2.519.25a1 1 0 0 0-.693.384l-.18.234a.6.6 0 0 0 .308.943l.938.272a2.65 2.65 0 0 1 1.89 2.918l-.006.04a2.8 2.8 0 0 1-1.012 1.79l-.202.163a1 1 0 0 0-.344 1.01l.725 3.04a2.84 2.84 0 0 0 1.48 1.873 3.8 3.8 0 0 0 1.612.406l1.64.04a4 4 0 0 1 1.648.401l2.175 1.057a2 2 0 0 0 1.097.188l1.88-.21a.3.3 0 0 1 .333.295l.013 1.54a.3.3 0 0 0 .363.29l3.356-.727a1 1 0 0 0 .745-.686l.03-.1a1 1 0 0 0-.014-.625l-.28-.787a3.86 3.86 0 0 1 .049-2.716l.158-.399a1 1 0 0 0-.074-.886l-2.47-4.088a.3.3 0 0 0-.357-.127l-3.72 1.32a.3.3 0 0 1-.396-.33l.565-3.49a2 2 0 0 1 .272-.73l1.048-1.702a1.376 1.376 0 0 0-.888-2.068l-3.055-.644a1 1 0 0 1-.535-.307L9.984 1.561a.6.6 0 0 0-.748-.115z"/>
    </svg>
  );
};
