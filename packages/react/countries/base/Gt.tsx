// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gt = ({
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
      <path strokeLinejoin="round" d="m17.41 5.785.047-4.281a.3.3 0 0 0-.3-.303l-8.673.018a.3.3 0 0 0-.299.295l-.04 2.381a.3.3 0 0 1-.31.295l-1.417-.047a.3.3 0 0 0-.197.534l4.695 3.742a.6.6 0 0 1 .22.546l-.11.858a.6.6 0 0 1-.577.522l-5.561.168a1 1 0 0 0-.836.5L2.063 14.47a1 1 0 0 0-.133.498l-.002 3.163a1 1 0 0 0 .458.84l3.613 2.333c.324.21.686.354 1.066.426l5.109.973a1 1 0 0 0 .89-.271l3.892-3.846a1 1 0 0 0 .293-.614l.168-1.708a1 1 0 0 1 .402-.707l3.73-2.746a.6.6 0 0 0-.026-.984l-.925-.612a1 1 0 0 0-.675-.158l-2.485.31a.3.3 0 0 1-.337-.316z"/>
    </svg>
  );
};
