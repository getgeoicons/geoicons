// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LcMicoud = ({
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
      <path strokeLinejoin="round" d="M13.204 21.547a2 2 0 0 0 .84.588l.836.306a1.986 1.986 0 0 0 2.508-1.082l1.077-2.51a1 1 0 0 0 .004-.78l-.456-1.089a1 1 0 0 1-.029-.693l1.087-3.364a1 1 0 0 1 .282-.435l.975-.88a1 1 0 0 0 .326-.834l-.232-2.517a1 1 0 0 1 .398-.893l.336-.251a1 1 0 0 0 .328-1.182l-.062-.15a1 1 0 0 0-1.13-.598l-.906.19a.782.782 0 0 1-.514-1.463l1.496-.757a.948.948 0 0 0-.598-1.777l-1.804.329a1 1 0 0 1-.38-.004l-1.077-.22a1 1 0 0 0-.952.323l-1.111 1.271a1 1 0 0 1-.753.342h-.266a1 1 0 0 1-.598-.199l-1.222-.912a1 1 0 0 0-1.005-.112L7.31 3.659a3 3 0 0 0-.681.42l-1.71 1.4a1 1 0 0 0-.236.28l-2.191 3.86a.6.6 0 0 0 .18.79l2.4 1.663c.217.15.413.33.583.53z"/>
    </svg>
  );
};
