// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintPaulCapisterre = ({
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
      <path strokeLinejoin="round" d="M6.428 15.9 1.74 13.748a.6.6 0 0 1-.297-.792l1.23-2.736a1 1 0 0 1 .46-.482l1.382-.698a1 1 0 0 0 .415-.392l.533-.923A7.6 7.6 0 0 1 7.46 5.461l.212-.16a6.1 6.1 0 0 1 1.814-.946l.538-.173c.623-.2 1.286-.24 1.928-.116.568.11 1.154.091 1.714-.055l1.3-.337a1 1 0 0 0 .626-.49l.185-.341a1 1 0 0 1 .72-.51l1.22-.196a.6.6 0 0 1 .696.58l.034 1.763a4 4 0 0 0 .28 1.397l.598 1.509a4 4 0 0 1 .255 1.932l-.078.673a4 4 0 0 1-.467 1.464l-.353.643a3 3 0 0 0-.358 1.18l-.074.84a2 2 0 0 1-.424 1.066l-.562.709a1.166 1.166 0 0 0 .46 1.798l1.7.717 2.744 1.399a1 1 0 0 1 .544.825l.031.483a.6.6 0 0 1-.768.615l-7.504-2.215a2 2 0 0 1-.505-.229l-2.381-1.51a2 2 0 0 0-1.07-.31H9.61a.6.6 0 0 1-.59-.704l.245-1.404a.6.6 0 0 0-.43-.681l-.707-.197a.6.6 0 0 0-.747.454l-.116.545a.6.6 0 0 1-.837.42Z"/>
    </svg>
  );
};
