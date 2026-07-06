// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ag = ({
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
      <path strokeLinejoin="round" d="M8.77 19.164c.094.672.228 1.672.283 2.205a.63.63 0 0 0 .342.5l1.191.563a.5.5 0 0 0 .148.044l2.239.296a.5.5 0 0 0 .379-.106l1.697-1.368a.5.5 0 0 0 .184-.442l-.15-1.412a.5.5 0 0 0-.206-.353L11.39 16.58a.5.5 0 0 0-.67.078l-1.831 2.108a.5.5 0 0 0-.118.398Zm4.058-11.708-2.4-.657a.5.5 0 0 1-.34-.646l.495-1.43a.5.5 0 0 0-.101-.499l-1.13-1.253a.5.5 0 0 1 .047-.714l.836-.716a.5.5 0 0 1 .72.074l2.601 3.362a.5.5 0 0 1 .102.365l-.201 1.691a.5.5 0 0 1-.629.423Z"/>
    </svg>
  );
};
