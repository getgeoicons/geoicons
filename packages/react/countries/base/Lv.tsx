// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Lv = ({
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
      <path strokeLinejoin="round" d="m1.433 12.244-.18 3.283a.5.5 0 0 0 .771.447l2.28-1.473a.5.5 0 0 1 .332-.076l6.344.788a.5.5 0 0 0 .342-.082l1.028-.694a.5.5 0 0 1 .687.125l.7.986a.5.5 0 0 0 .233.178l1.37.512q.106.04.183.12l1.946 1.996a.5.5 0 0 0 .684.03l.896-.772a.5.5 0 0 1 .409-.114l.925.154a.5.5 0 0 0 .456-.162l1.727-1.95a.5.5 0 0 0 .063-.573l-1.551-2.799a.5.5 0 0 1-.04-.393l.579-1.831a.5.5 0 0 0-.06-.426l-.748-1.137a.5.5 0 0 0-.316-.215l-1.551-.323a.5.5 0 0 0-.296.028l-.807.339a.5.5 0 0 1-.514-.078l-3.154-2.634a.5.5 0 0 0-.5-.083l-2.255.865a.5.5 0 0 0-.317.533l.354 2.67a.5.5 0 0 1-.129.406l-1.168 1.26a.5.5 0 0 1-.444.155l-1.42-.223a.5.5 0 0 1-.413-.392l-.246-1.175a.5.5 0 0 0-.203-.308l-.945-.658a.5.5 0 0 1-.214-.388l-.068-1.5-2.6 1.394a.5.5 0 0 0-.21.215l-1.908 3.777a.5.5 0 0 0-.052.198Z"/>
    </svg>
  );
};
