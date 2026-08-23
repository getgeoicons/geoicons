// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnCopan = ({
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
      <path strokeLinejoin="round" d="M16.947 1.678a.6.6 0 0 0-.839-.119l-4.606 3.46q-.4.3-.863.493l-3.883 1.62a1 1 0 0 0-.606.79l-.378 2.85a1 1 0 0 1-.339.625l-.607.523a1 1 0 0 0-.259 1.167l1.471 3.277a1 1 0 0 0 .915.59l2.376-.004a1 1 0 0 1 .855.477l2.844 4.636a1 1 0 0 0 .62.45l.587.14a1 1 0 0 0 1.014-.35l1.656-2.078a.8.8 0 0 0 .049-.929l-.862-1.35a.6.6 0 0 1 .47-.922l2.087-.123a.6.6 0 0 0 .544-.756l-.427-1.574a1 1 0 0 1 .058-.682l.59-1.274a1 1 0 0 0-.272-1.192l-.515-.424A1 1 0 0 1 18.36 9.8l1.066-2.261a2 2 0 0 0 .156-1.223l-.201-1.071a2 2 0 0 0-.37-.836z"/>
    </svg>
  );
};
