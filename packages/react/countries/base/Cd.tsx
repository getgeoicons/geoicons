// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cd = ({
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
      <path strokeLinejoin="round" d="m2.379 14.123 3.655-.175a.6.6 0 0 1 .566.333l.796 1.601a.6.6 0 0 0 .581.332l1.153-.084a.6.6 0 0 0 .543-.473l.11-.51a.6.6 0 0 1 .704-.463l1.348.27a.6.6 0 0 1 .48.533l.292 3.21a1 1 0 0 0 .81.892l4.41.835a1 1 0 0 1 .566.324l1.493 1.702a.6.6 0 0 0 .722.14l.621-.315a.6.6 0 0 0 .33-.55l-.017-.666a.6.6 0 0 0-.357-.534l-.988-.437a1 1 0 0 1-.595-.893l-.034-1.538a1 1 0 0 1 .87-1.014l.855-.11a.6.6 0 0 0 .431-.913l-.895-1.436a2 2 0 0 1-.293-.856l-.311-3.059a2 2 0 0 1 .086-.816l.816-2.53c.075-.23.19-.446.342-.635l.986-1.233a.6.6 0 0 0 .041-.692l-.93-1.493a2 2 0 0 0-1.31-.905L16.95 1.31a2 2 0 0 0-1.094.09l-2.396.905a2 2 0 0 1-1.457-.018l-1.681-.681a1 1 0 0 0-.982.13l-.454.347a1 1 0 0 0-.378.615l-.822 4.459a2 2 0 0 1-.536 1.034l-.707.725a2 2 0 0 0-.469.775l-.52 1.586a1 1 0 0 1-.873.687l-2.325.177a.992.992 0 0 0 .123 1.98Z"/>
    </svg>
  );
};
