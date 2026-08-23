// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsCityOfFreeport = ({
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
      <path strokeLinejoin="round" d="m1.651 14.369-.365 2.554a.6.6 0 0 0 .52.68l4.151.523a2 2 0 0 0 .617-.018l2.883-.538a2 2 0 0 0 .79-.335l3.18-2.258q.28-.197.596-.328l1.972-.81q.387-.16.716-.418l2.153-1.696a1 1 0 0 1 .475-.204l1.454-.21a2 2 0 0 0 .671-.224l.805-.44a.6.6 0 0 0 .237-.818l-1.419-2.547a1 1 0 0 0-.958-.51l-2.059.174a1 1 0 0 1-.8-.297l-.46-.473a.6.6 0 0 0-.742-.093l-2.695 1.642a1 1 0 0 1-.557.145l-1.29-.048a2 2 0 0 0-.873.166l-5.307 2.317a.6.6 0 0 0-.36.513l-.068 1.108a.6.6 0 0 1-.332.5l-2.39 1.189a1 1 0 0 0-.545.754Z"/>
    </svg>
  );
};
