// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMaryland = ({
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
      <path strokeLinejoin="round" d="M21.025 17.056a1 1 0 0 0 .57-.481l.746-1.407a.6.6 0 0 0-.521-.88l-1.541-.024a.6.6 0 0 1-.59-.565l-.424-7.116a.3.3 0 0 0-.3-.282l-17.47.073a.3.3 0 0 0-.299.296l-.037 2.69a.3.3 0 0 0 .432.274L3.812 8.55a4 4 0 0 1 1.478-.396l3.159-.218a1 1 0 0 1 .722.24l3.734 3.216a.6.6 0 0 1 .118.772l-.775 1.245a1 1 0 0 0 .327 1.38l3.268 2.003a.493.493 0 0 0 .733-.547l-.86-3.213a4 4 0 0 1-.133-1.17l.076-2.212a.855.855 0 0 1 1.707-.045l.419 4.773c.028.326.11.645.242.945l.68 1.546a1 1 0 0 0 1.228.547z"/>
    </svg>
  );
};
