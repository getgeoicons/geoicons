// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtPointFortin = ({
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
      <path strokeLinejoin="round" d="M20.857 2.272a.61.61 0 0 0-.771 0c-4.5 3.698-8.062 5.029-14.884 6.251-.202.037-.39.134-.536.279l-.787.787a1 1 0 0 0-.27.922l.619 2.819a1 1 0 0 1-.495 1.09l-1.921 1.058a1 1 0 0 0-.506 1.027l.29 1.902a1 1 0 0 0 .457.696l.867.544a.6.6 0 0 1 .28.518l-.019 1.198a.6.6 0 0 0 .669.606l3.366-.39a1 1 0 0 0 .514-.216l3.455-2.796a1 1 0 0 0 .146-.146l3.202-3.936a.6.6 0 0 1 .443-.22l1.876-.07a1 1 0 0 0 .922-.717l.887-2.999q.085-.286.249-.535l1.505-2.278a2 2 0 0 1 .92-.753l.83-.334a1 1 0 0 0 .625-.942l-.02-1.325a1 1 0 0 0-.361-.756z"/>
    </svg>
  );
};
