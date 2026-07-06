// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hu = ({
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
      <path strokeLinejoin="round" d="m12.243 16.743-3.567 1.82a.5.5 0 0 1-.374.033l-2.98-.917a.5.5 0 0 1-.212-.13l-3.608-3.736a.5.5 0 0 1-.034-.656l.798-1.02a.5.5 0 0 0 .107-.32l-.05-1.92a.5.5 0 0 1 .544-.512l1.106.098A.5.5 0 0 0 4.47 9.2l.388-.818a.5.5 0 0 1 .809-.135l1.01 1.031a.5.5 0 0 0 .386.15l1.997-.116a.5.5 0 0 0 .448-.349l.29-.922a.5.5 0 0 1 .332-.328l2.013-.609a.5.5 0 0 1 .258-.008l1.22.281a.5.5 0 0 0 .53-.212l.966-1.467a.5.5 0 0 1 .392-.224l2.279-.116a.5.5 0 0 1 .422.195l.541.704a.5.5 0 0 0 .501.185l1.112-.238a.5.5 0 0 1 .426.106l1.73 1.45a.5.5 0 0 1 .14.576l-.232.561a.5.5 0 0 1-.39.303l-1.133.164a.5.5 0 0 0-.367.257l-3.618 6.683a.5.5 0 0 1-.424.262l-4.04.122a.5.5 0 0 0-.212.055Z"/>
    </svg>
  );
};
