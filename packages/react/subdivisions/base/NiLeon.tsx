// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiLeon = ({
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
      <path strokeLinejoin="round" d="M19.81 10.458a1 1 0 0 0 .362-.803L20.09 7.22a1 1 0 0 0-.7-.92l-1.348-.425a1 1 0 0 1-.7-.978l.028-1.2a1 1 0 0 0-.13-.518l-.765-1.349a1 1 0 0 0-.91-.505l-3.513.144a.6.6 0 0 0-.545.79l1.29 3.83a1.5 1.5 0 0 1-.803 1.844l-1.598.725a2 2 0 0 0-.919.843l-1.45 2.587a2 2 0 0 1-1.436.998l-2.32.362a.535.535 0 0 0-.22.97l5.778 3.948a4 4 0 0 1 1.284 1.44l1.165 2.213a.6.6 0 0 0 1.026.06l2.722-3.974a.6.6 0 0 0-.236-.88l-1.237-.59a.958.958 0 0 1 .498-1.82l.756.067a2 2 0 0 0 1.321-.352l.906-.632a1 1 0 0 0 .428-.808l.014-1.069a1 1 0 0 1 .361-.757z"/>
    </svg>
  );
};
