// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Km = ({
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
      <path strokeLinejoin="round" d="m5.469 13.484-4.022-2.772a.5.5 0 0 1-.213-.469l.758-6.658a.5.5 0 0 1 .546-.44l2.325.229a.5.5 0 0 1 .443.587L4.58 7.966a.5.5 0 0 0 .051.325l2.111 3.949a.5.5 0 0 1-.073.575l-.55.596a.5.5 0 0 1-.651.073ZM7.53 19.87l-.796-1.327a.5.5 0 0 1 .121-.652l.607-.471a.5.5 0 0 1 .507-.064l4 1.744a.5.5 0 0 1 .287.569l-.152.675a.5.5 0 0 1-.572.383l-3.658-.622a.5.5 0 0 1-.345-.235Zm14.45.481-4.186-2.825a.5.5 0 0 1 .212-.91l1.896-.259a.5.5 0 0 0 .273-.129l1.549-1.439a.5.5 0 0 1 .84.346l.195 4.781a.5.5 0 0 1-.779.435Z"/>
    </svg>
  );
};
