// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsCentralEleuthera = ({
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
      <path strokeLinejoin="round" d="M15.788 22.792a.6.6 0 0 0 .587-.433l1.044-3.606q.109-.379.143-.77l.255-2.98a3 3 0 0 0-.2-1.362l-.551-1.389a1 1 0 0 1 .022-.789l.548-1.184a1 1 0 0 0-.087-.993l-1.275-1.824a3 3 0 0 0-.943-.87L7.077 1.758a.6.6 0 0 0-.903.546l.064 1.347a2 2 0 0 0 .506 1.239l.915 1.023a2 2 0 0 0 .565.44l3.756 1.962a3 3 0 0 1 .57.386l1.257 1.083a1 1 0 0 1 .266 1.152l-.16.371a1 1 0 0 0 .213 1.102l.643.643a1 1 0 0 1 .291.758l-.275 5.397a3 3 0 0 1-.068.502l-.522 2.333a.6.6 0 0 0 .575.731z"/>
    </svg>
  );
};
