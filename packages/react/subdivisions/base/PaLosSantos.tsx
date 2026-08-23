// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaLosSantos = ({
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
      <path strokeLinejoin="round" d="M2.116 13.904a1 1 0 0 0-.232.96l1.352 4.71a.6.6 0 0 0 .273.353l1.31.77a.6.6 0 0 1 .293.46l.1 1.058a.6.6 0 0 0 .642.541l3.663-.271a2 2 0 0 0 1.208-.525l1.338-1.235a1 1 0 0 0 .322-.772l-.027-.734a1 1 0 0 1 .601-.955l1.838-.796a1 1 0 0 1 .522-.074l1.746.219a3 3 0 0 0 1.126-.072l2.848-.738a1.62 1.62 0 0 0 1.081-2.212l-1.064-2.462a5 5 0 0 0-1.137-1.633L14.444 5.27a3 3 0 0 1-.569-.745L12.35 1.699a.776.776 0 0 0-1.397.064l-.317.74a1 1 0 0 1-.744.591l-1.406.25a1 1 0 0 0-.595.346l-1.45 1.75a2 2 0 0 0-.376 1.856l.212.7a2 2 0 0 1-.454 1.947z"/>
    </svg>
  );
};
