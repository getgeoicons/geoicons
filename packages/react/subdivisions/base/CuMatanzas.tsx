// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuMatanzas = ({
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
      <path strokeLinejoin="round" d="M8.487 10.028a2 2 0 0 1 .112 1.326l-.418 1.598a1 1 0 0 1-.875.743l-5.354.493a.701.701 0 0 0-.279 1.31l4.206 2.364a2 2 0 0 0 1.042.256l3.058-.094a1 1 0 0 1 .94.583l.082.177a1 1 0 0 0 1.186.545l1.904-.549a1 1 0 0 1 .869.155l.916.673a2 2 0 0 0 1.198.389l4.14-.029a.763.763 0 0 0 .086-1.52l-1.131-.137a3 3 0 0 1-.982-.295l-.571-.286a2 2 0 0 1-1.082-1.483l-.1-.649a1.798 1.798 0 0 1 2.145-2.035l1.444.303a1 1 0 0 0 .872-.235l.506-.453a1 1 0 0 0 .321-.889l-.346-2.368a1 1 0 0 0-.456-.702l-.892-.563a1 1 0 0 1-.103-1.616l.782-.646a.956.956 0 0 0-.728-1.686l-6.072.76a1 1 0 0 1-.797-.252l-.922-.839a1 1 0 0 0-.954-.22l-1.457.427a2 2 0 0 1-1.029.026l-1.312-.314a.8.8 0 0 0-.944.52l-.454 1.336a1 1 0 0 0 .035.732z"/>
    </svg>
  );
};
