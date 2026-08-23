// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GdSouthernGrenadineIslands = ({
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
      <path strokeLinejoin="round" d="m4.876 21.258-.337.837a.757.757 0 0 1-1.433-.478l.43-1.604a2 2 0 0 1 .743-1.09l.361-.267a2 2 0 0 1 1.077-.389l.401-.022a1 1 0 0 0 .617-.258l.132-.12a.95.95 0 0 0-.85-1.628l-.351.08a2 2 0 0 1-1.46-.226l-.046-.027a2 2 0 0 1-.97-1.48l-.206-1.68a.6.6 0 0 1 .383-.633l.094-.036a.6.6 0 0 1 .803.457l.099.56a1 1 0 0 0 .931.825l1.422.077a1 1 0 0 0 .93-.517l.374-.68a1 1 0 0 1 .786-.514l2.215-.2a2 2 0 0 0 1.202-.546l.384-.367a2 2 0 0 0 .6-1.712l-.112-.839a1 1 0 0 1 .262-.817l.52-.553a2 2 0 0 0 .533-1.547l-.162-1.809a1 1 0 0 1 .331-.836l1.726-1.537a1 1 0 0 1 1.169-.117l.993.58a1 1 0 0 1 .479 1.05l-.28 1.463a1.85 1.85 0 0 0 .94 1.974l.539.29a1 1 0 0 1 .38 1.4l-.225.369a1 1 0 0 0-.096.835l.232.698a.6.6 0 0 1-.473.78l-.073.013a1.885 1.885 0 0 0-1.58 1.86v.678a3 3 0 0 0 .112.813l.55 1.951a1 1 0 0 1-.286 1.007l-.193.178a1 1 0 0 1-.675.264l-4.773.012a2 2 0 0 0-1.476.656l-1.233 1.358a1 1 0 0 1-.86.32l-2.192-.262a2 2 0 0 0-1.172.217l-.315.166a2 2 0 0 0-.921 1.023Z"/>
    </svg>
  );
};
