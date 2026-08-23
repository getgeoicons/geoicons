// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DmSaintGeorge = ({
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
      <path strokeLinejoin="round" d="M21.503 3.91a1 1 0 0 0-.497-.691l-3.362-1.875a.3.3 0 0 0-.406.112l-.563.978a2 2 0 0 1-.575.632l-1.249.888a2 2 0 0 1-.937.358l-1.871.207a2 2 0 0 0-.872.313l-1.98 1.292a1 1 0 0 0-.453.795l-.05 1.183a1 1 0 0 1-.567.859l-.193.093a2 2 0 0 1-1.027.19l-4.293-.348a.6.6 0 0 0-.646.543l-.304 3.332a1 1 0 0 0 .417.906l2.023 1.435a2 2 0 0 1 .825 1.366l.467 3.478a.6.6 0 0 0 .378.48l5.81 2.244a.3.3 0 0 0 .397-.201l.541-1.99a2 2 0 0 1 .464-.835l2.55-2.749a2 2 0 0 1 .562-.424l2.878-1.458a2 2 0 0 0 .907-.934l2.38-5.072a1 1 0 0 0 .079-.607z"/>
    </svg>
  );
};
