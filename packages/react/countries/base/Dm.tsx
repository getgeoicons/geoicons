// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dm = ({
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
      <path strokeLinejoin="round" d="m12.485 22.725.498-.042a1 1 0 0 0 .811-.55l.31-.619a1 1 0 0 1 .811-.55l.923-.076a1.5 1.5 0 0 0 1.348-1.214l.399-2.088c.091-.481.112-.974.06-1.46l-.418-3.97a2 2 0 0 1 .065-.754l.358-1.269a1.5 1.5 0 0 0-.12-1.112l-2.488-4.672a1 1 0 0 0-.736-.52l-3.18-.468a1 1 0 0 1-.734-.515l-.597-1.109a1 1 0 0 0-.9-.525l-1.066.02a1 1 0 0 0-.967 1.167l.283 1.666a1 1 0 0 1-.113.654L6.36 5.921a1 1 0 0 0-.112.661L6.427 7.6a4 4 0 0 0 .396 1.164l2.948 5.625c.179.342.307.707.382 1.085l1.267 6.448a1 1 0 0 0 1.065.803Z"/>
    </svg>
  );
};
