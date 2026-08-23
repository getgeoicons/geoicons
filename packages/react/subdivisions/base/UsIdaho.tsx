// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsIdaho = ({
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
      <path strokeLinejoin="round" d="M5.665 9.67a.6.6 0 0 0 .09.325l.961 1.552a1 1 0 0 1 .05.963L5.46 15.202a1 1 0 0 0-.067.693l.388 1.463q.071.262.067.535l-.05 4.603a.3.3 0 0 0 .3.304l12.304-.01a.3.3 0 0 0 .3-.301l-.027-6.832a.6.6 0 0 0-.737-.582l-2.4.562a1 1 0 0 1-1.105-.495l-1.29-2.366a1 1 0 0 0-.796-.518l-.172-.014a1 1 0 0 1-.906-1.152l.31-1.978a.6.6 0 0 0-.218-.561L9.26 6.868a1 1 0 0 1-.266-.326L7.987 4.569a1 1 0 0 1-.11-.465l.027-2.6a.3.3 0 0 0-.3-.303l-1.525.008a.3.3 0 0 0-.298.295z"/>
    </svg>
  );
};
