// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxSanLuisPotosi = ({
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
      <path strokeLinejoin="round" d="M14.06 19.921c.34.173.71.28 1.089.314l.65.06a1 1 0 0 0 .81-.3l1.03-1.065a.55.55 0 0 1 .944.36l.044 1.128a1 1 0 0 0 .482.817l.74.447a1 1 0 0 0 1.128-.065l.566-.437a1 1 0 0 0 .357-1.042l-.218-.839a2 2 0 0 1 .078-1.241l.75-1.887a.8.8 0 0 0-.432-1.033l-.864-.365a3 3 0 0 0-.999-.232l-1.846-.104a1 1 0 0 1-.753-.412l-.702-.97a1 1 0 0 0-.692-.406l-2.275-.271a.8.8 0 0 1-.705-.818l.035-1.14a.8.8 0 0 0-.832-.824l-.697.029a.8.8 0 0 1-.83-.739l-.447-5.851a1 1 0 0 0-1.144-.913L8.6 2.23a1 1 0 0 0-.609.335l-.876 1.013a.8.8 0 0 0-.195.551l.038 1.095a.8.8 0 0 1-.276.632L4.363 7.87a2 2 0 0 1-.957.458l-1.45.26a.8.8 0 0 0-.652.897l.244 1.781a2 2 0 0 0 .55 1.125l1.113 1.141a.8.8 0 0 0 1.05.083l.693-.516a1 1 0 0 1 1.514.4l.078.18a1 1 0 0 1 .052.652l-.787 3.037a.6.6 0 0 0 .372.712l3.436 1.277a1 1 0 0 0 .747-.02l.94-.409a1 1 0 0 1 .852.026z"/>
    </svg>
  );
};
