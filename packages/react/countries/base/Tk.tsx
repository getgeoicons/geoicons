// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tk = ({
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
      <path d="M21.221 16.729a1.079 1.079 0 1 1 0 2.157 1.079 1.079 0 0 1 0-2.157Zm-8.908-3.232a1.277 1.277 0 1 1-.001 2.554 1.277 1.277 0 0 1 .001-2.554ZM2.741 4.854A1.073 1.073 0 1 1 2.74 7a1.073 1.073 0 0 1 0-2.146Z"/><path d="M21.221 16.729a1.079 1.079 0 1 1 0 2.157 1.079 1.079 0 0 1 0-2.157Zm-8.908-3.232a1.277 1.277 0 1 1-.001 2.554 1.277 1.277 0 0 1 .001-2.554ZM2.741 4.854A1.073 1.073 0 1 1 2.74 7a1.073 1.073 0 0 1 0-2.146Z"/>
    </svg>
  );
};
