// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ro = ({
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
      <path strokeLinejoin="round" d="m3.45 10.903-2.25.56 2.77 3.09a.5.5 0 0 1 .122.407l-.07.477a.5.5 0 0 0 .242.503l.868.51a.5.5 0 0 0 .588-.06l.303-.274a.5.5 0 0 1 .7.03l.205.218a.5.5 0 0 1 .135.31l.114 1.742a.5.5 0 0 0 .431.463l5.156.7a.5.5 0 0 0 .386-.11l1.215-1.006a.5.5 0 0 1 .243-.11l2.397-.368a.5.5 0 0 1 .27.033l2.8 1.18.368-2.481a.5.5 0 0 1 .325-.397l1.36-.492a.5.5 0 0 0 .293-.28l.237-.58a.5.5 0 0 0-.15-.58l-.493-.394a.5.5 0 0 0-.525-.063l-.985.462a.5.5 0 0 1-.503-.046l-.91-.65a.5.5 0 0 1-.206-.472l.42-3.211a.5.5 0 0 0-.061-.311l-2.776-4.897a.5.5 0 0 0-.34-.244l-.563-.108a.5.5 0 0 0-.508.21l-.432.635a.5.5 0 0 1-.297.206l-2.322.557a.5.5 0 0 1-.245-.003l-3.518-.936a.5.5 0 0 0-.358.039L5.75 6.266a.5.5 0 0 0-.23.25l-1.73 4.096a.5.5 0 0 1-.34.291Z"/>
    </svg>
  );
};
