// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ar = ({
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
      <path strokeLinejoin="round" d="m7.695 14.824-1.026 3.9a.5.5 0 0 0 .23.558l1.686.987a.5.5 0 0 1 .247.436l-.018 2.054 2.589.041-1.807-3.672a.5.5 0 0 1 .035-.503l1.013-1.48a.5.5 0 0 0 .006-.556l-.528-.81a.5.5 0 0 1-.017-.52l2.274-4.02a.5.5 0 0 1 .375-.25l1.52-.186a.5.5 0 0 0 .36-.226l.447-.694a.5.5 0 0 0-.005-.55l-.666-.991a.5.5 0 0 1-.072-.392l.481-2.074a.5.5 0 0 1 .228-.315l2.015-1.219a.5.5 0 0 0 .204-.617l-.2-.492a.5.5 0 0 0-.678-.262l-1.702.808a.5.5 0 0 1-.61-.147l-1.72-2.233a.5.5 0 0 0-.405-.195l-1.463.025a.5.5 0 0 0-.459.32L8.483 5.571a.5.5 0 0 0-.024.276l.331 1.696a.5.5 0 0 1-.021.267l-1.217 3.336a.5.5 0 0 0-.03.2l.188 3.323a.5.5 0 0 1-.015.155Z"/>
    </svg>
  );
};
