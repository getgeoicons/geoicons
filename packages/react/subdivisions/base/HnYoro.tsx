// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnYoro = ({
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
      <path strokeLinejoin="round" d="M22.75 9.631a.8.8 0 0 0-.618-.737l-3.296-.762a4 4 0 0 0-1.463-.063l-3.768.536a2 2 0 0 0-.735.257l-1.465.864a2 2 0 0 1-1.47.225l-3.52-.821a2 2 0 0 1-.884-.463L3.614 6.938a.6.6 0 0 0-.982.291l-1.304 4.898a1 1 0 0 0 .178.873l1.856 2.38a.8.8 0 0 0 .803.29l1.41-.312a.8.8 0 0 1 .86.373l.658 1.105a.8.8 0 0 0 .542.378l1.961.363a.8.8 0 0 0 .929-.62l.128-.609a1 1 0 0 1 .874-.787l2.115-.223a1 1 0 0 0 .887-.868l.146-1.142a1 1 0 0 1 .603-.794l3.717-1.572a1 1 0 0 1 .98.115l.532.39a.8.8 0 0 0 .917.02l.997-.664a.8.8 0 0 0 .355-.707z"/>
    </svg>
  );
};
