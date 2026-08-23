// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaYukon = ({
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
      <path strokeLinejoin="round" d="M19.201 22.798a.6.6 0 0 0 .556-.829l-.382-.927a.6.6 0 0 0-.63-.367l-1.136.144a.6.6 0 0 1-.654-.436l-.123-.446a1 1 0 0 0-.516-.628l-.916-.459a1 1 0 0 1-.526-.668l-.643-2.768a1 1 0 0 0-.302-.514l-1.902-1.725a.6.6 0 0 1-.19-.532l.174-1.189a.8.8 0 0 0-.327-.767l-.69-.493a.6.6 0 0 1-.25-.457l-.08-1.503a.3.3 0 0 0-.299-.284H8.742a.3.3 0 0 1-.3-.281l-.254-4.112a.6.6 0 0 0-.252-.453L6.16 1.85a2 2 0 0 0-.738-.324l-1.16-.248a.3.3 0 0 0-.363.294l.01 20.426a.3.3 0 0 0 .214.287l1.524.457a.6.6 0 0 0 .17.025z"/>
    </svg>
  );
};
