// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cz = ({
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
      <path strokeLinejoin="round" d="m3.422 14.23 3.425 3.232a1 1 0 0 0 .76.27l1.341-.1a1 1 0 0 0 .827-.563l.33-.685a.8.8 0 0 1 .933-.424l5.28 1.448a1 1 0 0 0 .625-.032l1.445-.558a4 4 0 0 0 1.196-.725l2.693-2.363a.8.8 0 0 0 .14-1.04l-.634-.967a1 1 0 0 0-.696-.44l-1.128-.16a1 1 0 0 1-.8-.65l-.211-.581a1 1 0 0 0-.642-.614l-1.046-.327a.6.6 0 0 0-.72.312l-.328.68a.6.6 0 0 1-.894.224l-.914-.668a.6.6 0 0 1-.223-.651l.16-.552a.6.6 0 0 0-.316-.708l-2.553-1.226a.6.6 0 0 0-.526.004l-1.162.574a.6.6 0 0 1-.522.005l-1.144-.539a.6.6 0 0 0-.518.003l-5.555 2.7a1 1 0 0 0-.488 1.28l1.15 2.798a3 3 0 0 0 .715 1.042Z"/>
    </svg>
  );
};
