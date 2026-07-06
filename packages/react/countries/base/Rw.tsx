// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rw = ({
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
      <path strokeLinejoin="round" d="m3.547 19.056-.556 1.418-1.138-.582a.5.5 0 0 1-.267-.374l-.344-2.372a.5.5 0 0 1 .185-.465l1.206-.946A.5.5 0 0 1 3 15.63l1.05.124a.5.5 0 0 0 .432-.164l2.064-2.315a.5.5 0 0 0-.006-.672l-.883-.956a.5.5 0 0 1-.128-.272l-.259-1.89a.5.5 0 0 1 .064-.321l.8-1.36a.5.5 0 0 1 .325-.235l.95-.205a.5.5 0 0 0 .265-.153l.87-.956a.5.5 0 0 1 .272-.154l2.493-.495a.5.5 0 0 1 .58.36l.186.691a.5.5 0 0 0 .717.312l1.555-.825a.5.5 0 0 0 .18-.16l2.092-3.077a.5.5 0 0 1 .341-.214l.759-.111a.5.5 0 0 1 .542.323L19.2 5.47a.5.5 0 0 0 .102.167l2.754 2.98a.5.5 0 0 1 .129.4l-.325 2.659a.5.5 0 0 0 .067.319l.768 1.275a.5.5 0 0 1 .06.368l-.579 2.571a.5.5 0 0 1-.424.386l-2.586.331a.5.5 0 0 1-.265-.038l-2.082-.916a.5.5 0 0 0-.553.103l-.919.914a.5.5 0 0 1-.59.085l-1.995-1.08-.605 4.364a.5.5 0 0 1-.429.427l-5.143.692-.275-1.874a.5.5 0 0 0-.377-.413l-1.804-.437a.5.5 0 0 0-.583.303Z"/>
    </svg>
  );
};
