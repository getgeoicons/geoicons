// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NorthernCanada = ({
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
      <path strokeLinejoin="round" d="m1.565 14.377 3.567-4.16a.25.25 0 0 1 .398.025l.63.96a1 1 0 0 0 .82.452l1.006.015a1 1 0 0 0 .946-.632l.922-2.335a1 1 0 0 1 .73-.613l2.574-.527a1 1 0 0 0 .533-.299l2.35-2.533a.865.865 0 0 1 1.481.763l-.52 2.523a1 1 0 0 0-.008.367l.308 1.85a1 1 0 0 0 .497.707l4.094 2.296a1 1 0 0 1 .503.748l.277 2.215a.6.6 0 0 1-.821.63l-1.407-.57a1 1 0 0 1-.618-.826l-.067-.648a1 1 0 0 0-.729-.862l-.469-.13a1 1 0 0 0-1.26.85l-.043.381a1 1 0 0 0 .286.822l.543.543a.905.905 0 0 1-.83 1.525l-.622-.134a1 1 0 0 0-1.055.442l-.741 1.17a.59.59 0 0 1-.455.274c-5.733.39-10.64-2.606-12.774-4.482a.574.574 0 0 1-.046-.807Z"/>
    </svg>
  );
};
