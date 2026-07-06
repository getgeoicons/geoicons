// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NewEngland = ({
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
      <path strokeLinejoin="round" d="M5.349 16.711 3.868 22.8l2.103-.83a1 1 0 0 1 .286-.067l2.703-.22 4.684-.978a.6.6 0 0 0 .475-.642l-.048-.528a.6.6 0 0 0-.706-.536l-.867.16a1 1 0 0 1-1.05-.493l-.189-.333a1 1 0 0 1-.127-.554l.082-1.311a1 1 0 0 1 .152-.471l1.413-2.242a1 1 0 0 1 .365-.344l5.953-3.264a1 1 0 0 0 .305-1.496l-1.226-1.557a1 1 0 0 1-.213-.566l-.192-3.643a1 1 0 0 0-.394-.744l-.843-.641a1 1 0 0 0-.545-.202l-1.027-.062a1 1 0 0 0-.906.464L12.64 3.943a1 1 0 0 0-.092.186l-1.245 3.356a1 1 0 0 1-.295.418l-1.23 1.032a1 1 0 0 1-.65.234L5.182 9.14l-.227 3.054a1 1 0 0 0 .002.177l.416 4a1 1 0 0 1-.023.34Z"/>
    </svg>
  );
};
