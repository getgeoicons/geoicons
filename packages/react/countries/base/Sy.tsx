// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sy = ({
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
      <path strokeLinejoin="round" d="m18.853 12.795-13.84 8.977a.5.5 0 0 1-.51.02l-2.878-1.548a.5.5 0 0 1-.261-.399l-.151-1.791a.5.5 0 0 1 .064-.29l.868-1.518a.5.5 0 0 1 .137-.154l1.559-1.15a.5.5 0 0 0 .172-.575l-.422-1.15a.5.5 0 0 0-.47-.328h-.82a.5.5 0 0 1-.494-.423l-.494-3.18a.5.5 0 0 1 .023-.245l.358-1a.5.5 0 0 1 .227-.27L3.9 6.67a.5.5 0 0 0 .256-.455L4.1 4.687a.5.5 0 0 1 .694-.479l1.644.696a.5.5 0 0 0 .407-.007L9.213 3.79a.5.5 0 0 1 .491.038l1.271.856a.5.5 0 0 0 .32.084l3.046-.25a.5.5 0 0 0 .219-.071l2.512-1.524a.5.5 0 0 1 .377-.059l1.347.328a.5.5 0 0 0 .285-.014l2.707-.958a.5.5 0 0 1 .622.264l.246.544a.5.5 0 0 1-.103.56l-1.478 1.468a.5.5 0 0 1-.252.135l-1.263.259a.5.5 0 0 0-.4.483l-.079 6.447a.5.5 0 0 1-.228.414Z"/>
    </svg>
  );
};
