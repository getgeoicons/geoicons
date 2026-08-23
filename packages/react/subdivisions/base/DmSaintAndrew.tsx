// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DmSaintAndrew = ({
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
      <path strokeLinejoin="round" d="M21.458 13.416a1 1 0 0 0-.724-1.016l-.995-.283a1 1 0 0 1-.7-.732l-.789-3.34a1 1 0 0 0-.674-.724l-5.622-1.763a2 2 0 0 0-1.053-.04l-1.706.399A1 1 0 0 1 8.14 5.5L5.634 1.78a1 1 0 0 0-.77-.44l-1.881-.112a.3.3 0 0 0-.294.417l.86 2.02a2 2 0 0 1 .153.938l-.11 1.405a.6.6 0 0 0 .264.545l1.7 1.14a1 1 0 0 1 .44.908L5.73 11.96a1 1 0 0 0 .313.808l.527.494a1 1 0 0 1 .301.557l.559 3.187a1 1 0 0 0 .325.579L9.022 18.7a1 1 0 0 0 1.05.17l.964-.41a1 1 0 0 1 .736-.017l1.56.576a7 7 0 0 1 1.695.906l.9.654a1 1 0 0 1 .37.525l.377 1.275a.3.3 0 0 0 .471.152l.906-.699a1 1 0 0 0 .333-.46l.287-.818a1 1 0 0 1 .483-.555l1.497-.779a1 1 0 0 0 .537-.833z"/>
    </svg>
  );
};
