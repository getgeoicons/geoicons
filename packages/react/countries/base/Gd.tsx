// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gd = ({
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
      <path strokeLinejoin="round" d="m6.201 20.35-1.664 1.53a.25.25 0 0 0 .13.43l2.918.462a.5.5 0 0 0 .328-.06L10.54 21.2a.5.5 0 0 0 .213-.243l1.493-3.622a.5.5 0 0 0 .033-.118l.642-4.426a.5.5 0 0 0-.445-.569l-2.345-.236a.5.5 0 0 0-.385.126L7.59 14.058a.5.5 0 0 0-.104.133L6.122 16.7a.5.5 0 0 0-.058.29l.297 2.942a.5.5 0 0 1-.16.418ZM16.992 3.327l-1.312.444a.5.5 0 0 0-.336.408l-.182 1.387a.5.5 0 0 0 .693.525l2.958-1.268a.5.5 0 0 0 .288-.337l.611-2.427a.5.5 0 0 0-.398-.615l-.967-.17a.5.5 0 0 0-.56.33l-.482 1.411a.5.5 0 0 1-.313.312Z"/>
    </svg>
  );
};
