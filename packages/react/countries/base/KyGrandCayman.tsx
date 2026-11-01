// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KyGrandCayman = ({
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
      <path strokeLinejoin="round" d="m11.94 16.084 1.267-1.087a2 2 0 0 1 .917-.444l2.153-.422a2 2 0 0 1 1.356.215l.285.158a2 2 0 0 0 1.111.247l1.639-.116a2 2 0 0 0 1.019-.365l.188-.134a2 2 0 0 0 .837-1.507l.045-.735a1.504 1.504 0 0 0-1.514-1.596l-7.171.06a2 2 0 0 1-1.23-.409l-1.416-1.08a.743.743 0 0 0-.98 1.112l1.107 1.128a.765.765 0 0 1-.75 1.274l-.949-.261a.6.6 0 0 0-.75.473l-.083.47a1 1 0 0 1-.808.808l-1.146.206a1 1 0 0 1-.881-.275l-.51-.506a1 1 0 0 1-.274-.916l.207-.977a1 1 0 0 0-.136-.744l-.697-1.093a.3.3 0 0 1 .064-.395l.711-.575a.3.3 0 0 0-.044-.496L4.19 7.38a1 1 0 0 0-.87-.044l-1.356.574a.86.86 0 0 0 .099 1.618l.619.176a1.565 1.565 0 0 1 1.134 1.536l-.04 2.05a2 2 0 0 1-.265.956l-.44.768a1 1 0 0 0 .015 1.022l.1.163a1 1 0 0 0 1.136.434l1.891-.56a2 2 0 0 1 1.008-.033l2.192.494a3 3 0 0 0 .91.063l.481-.04a2 2 0 0 0 1.136-.474Z"/>
    </svg>
  );
};
