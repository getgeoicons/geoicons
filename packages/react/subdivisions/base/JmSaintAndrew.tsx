// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmSaintAndrew = ({
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
      <path strokeLinejoin="round" d="M3.335 3.563a1 1 0 0 0-.226.683l.151 3.099a1 1 0 0 1-.015.225l-.357 1.985-1.262-.246-.426 1.17 1.068.713-.601 2.12a.6.6 0 0 0 .294.693l1.891 1.014a1 1 0 0 1 .492.615l.73 2.643a.8.8 0 0 0 .568.56l.515.136a.8.8 0 0 0 .92-.421l.176-.356a.8.8 0 0 1 .865-.434l6.152 1.155a.6.6 0 0 1 .469.744l-.186.697a.6.6 0 0 0 .453.742l3.616.78a1 1 0 0 0 .874-.23l.616-.546a1 1 0 0 0 .33-.864l-.135-1.153a.6.6 0 0 1 .505-.663l1.211-.185a.6.6 0 0 0 .457-.837l-1.772-3.982a1 1 0 0 1-.067-.598l.565-2.887a.8.8 0 0 0-.572-.925l-2.157-.598a.8.8 0 0 0-.824.253L16.64 9.857a1 1 0 0 1-1.013.321l-.954-.247a1 1 0 0 1-.659-.554l-2.123-4.659a1 1 0 0 0-.618-.541l-1.566-.479a1 1 0 0 1-.554-.424l-.466-.742a1 1 0 0 0-.831-.468l-2.767-.042a1 1 0 0 0-.788.365z"/>
    </svg>
  );
};
