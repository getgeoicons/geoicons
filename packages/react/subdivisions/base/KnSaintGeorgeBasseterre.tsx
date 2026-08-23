// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintGeorgeBasseterre = ({
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
      <path strokeLinejoin="round" d="m2.373 7.783-.86-2.266a3 3 0 0 1-.192-.904L1.233 2.98a.6.6 0 0 1 .576-.632l.382-.014a.6.6 0 0 1 .613.49l.238 1.292a.3.3 0 0 0 .296.245l2.654-.001a.3.3 0 0 1 .3.291l.023.796a.3.3 0 0 0 .303.292l1.263-.015a1 1 0 0 1 .67.246l1.996 1.742a2 2 0 0 0 1.03.473l.997.144a2 2 0 0 1 .998.445l4.102 3.43a2 2 0 0 1 .61.89l.258.757a.967.967 0 0 0 1.572.398.967.967 0 0 1 1.328.012l.32.307a2 2 0 0 1 .513.819l.327.998a1 1 0 0 1-.265 1.04l-2.088 1.963a.6.6 0 0 1-.8.02l-.27-.23a.824.824 0 0 0-1.36.638l.011.846a.749.749 0 0 1-1.427.326l-.79-1.7a1 1 0 0 1 .247-1.173l.428-.375a1 1 0 0 0 .339-.81l-.144-2.457a2 2 0 0 0-.776-1.468l-3.452-2.658a2 2 0 0 0-.866-.384l-1.78-.32a1 1 0 0 1-.734-.572l-.294-.65a1 1 0 0 0-.606-.541l-.823-.263a1 1 0 0 0-.558-.015l-3.033.793a1 1 0 0 1-1.188-.612Z"/>
    </svg>
  );
};
