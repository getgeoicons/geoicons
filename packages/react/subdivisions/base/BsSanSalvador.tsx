// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsSanSalvador = ({
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
      <path d="m8.223 21.157-1.97 1.352a.928.928 0 0 1-1.28-1.306l1.117-1.56c.449-.628.83-1.3 1.139-2.008l2.038-4.675a1 1 0 0 0 .03-.72L8.004 8.42a1 1 0 0 1 .057-.776l2.827-5.52a.6.6 0 0 1 .668-.312l2.102.483a1 1 0 0 0 .643-.066l1.98-.914a.6.6 0 0 1 .498-.003l1.045.47a.6.6 0 0 1 .337.408l1.46 6.124a1 1 0 0 1-.043.601l-2.684 6.747a2 2 0 0 1-.541.766l-.553.483c-.23.202-.411.454-.529.736l-1.397 3.357a1 1 0 0 1-.867.614l-2.125.12a1 1 0 0 1-.49-.096l-1.17-.562a1 1 0 0 0-.999.077Z"/>
    </svg>
  );
};
