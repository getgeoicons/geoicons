// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoPuertoPlata = ({
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
      <path strokeLinejoin="round" d="M1.591 9.945a1 1 0 0 0 .613.569l4.529 1.48c.243.08.469.205.665.37l.554.465a2 2 0 0 0 .783.405l2.35.61c.257.067.498.185.71.346l.907.692a1 1 0 0 0 1.42-.212l.264-.369a.6.6 0 0 1 .792-.168l.666.392a1 1 0 0 1 .486.741l.068.563a1 1 0 0 0 .555.778l.998.487a.6.6 0 0 0 .85-.41l.577-2.62a.6.6 0 0 1 .589-.47l1.519.008a1 1 0 0 0 .894-.544l.1-.195a1 1 0 0 0-.155-1.136l-.996-1.078a1 1 0 0 0-.712-.32l-.654-.015a1.64 1.64 0 0 0-.978.296 1.64 1.64 0 0 1-1.014.295l-.961-.043a2 2 0 0 1-.822-.218l-3-1.537a2 2 0 0 1-.58-.446l-1.08-1.206a1 1 0 0 0-.78-.332l-1.583.055a3 3 0 0 1-.832-.088l-1.487-.372a1 1 0 0 0-.984.3l-.693.765a1 1 0 0 1-.689.328l-1.834.096a1 1 0 0 0-.5.165l-.26.172a1 1 0 0 0-.372 1.216z"/>
    </svg>
  );
};
