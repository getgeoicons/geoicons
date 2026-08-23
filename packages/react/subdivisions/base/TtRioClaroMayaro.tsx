// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtRioClaroMayaro = ({
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
      <path strokeLinejoin="round" d="M7.781 21.947a.6.6 0 0 0 .815.548l5.542-2.121q.159-.061.29-.172l1.551-1.317a.72.72 0 0 1 1.152.337.72.72 0 0 0 .897.475l.075-.022a.81.81 0 0 0 .545-.973c-.748-3.064-.782-5.327-.253-9.357a.434.434 0 0 1 .534-.365.725.725 0 0 0 .89-.6l.018-.123a.84.84 0 0 0-.855-.96l-.342.01a.6.6 0 0 1-.536-.301c-.925-1.636-1.355-2.718-1.83-4.448a.6.6 0 0 0-.478-.437l-5.109-.887a1 1 0 0 0-.393.01l-3.42.78a1 1 0 0 0-.616.43l-.916 1.411a.6.6 0 0 0 .362.91l.327.08a.6.6 0 0 1 .453.662L6.141 8.1a1 1 0 0 1-.522.752l-.765.406a1 1 0 0 0-.44 1.303l.288.622a1 1 0 0 0 .86.579l1.45.07a.6.6 0 0 1 .57.587z"/>
    </svg>
  );
};
