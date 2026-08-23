// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoAzua = ({
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
      <path strokeLinejoin="round" d="M7.736 21.913a.6.6 0 0 0 .755.65l.605-.167a1 1 0 0 0 .565-.406l1.117-1.663a1 1 0 0 1 .86-.442l1.52.047c.275.008.549-.054.793-.182l.148-.077c.4-.21.663-.61.697-1.06l.01-.116a1.158 1.158 0 0 1 1.39-1.046l.568.118a1.85 1.85 0 0 1 1.462 1.615l.034.313a2 2 0 0 1-.065.758l-.278.98a.3.3 0 0 0 .303.382l1.6-.075a1 1 0 0 0 .936-.816l.373-2a2 2 0 0 0-.269-1.424l-.674-1.082a2 2 0 0 0-.593-.61l-2.869-1.9a2 2 0 0 1-.88-1.419l-.41-3.278a1.36 1.36 0 0 0-1.24-1.188 1.36 1.36 0 0 1-.995-.564l-1.38-1.925a2 2 0 0 1-.343-1.521l.052-.285c.041-.23.042-.464.003-.693l-.118-.691a.936.936 0 0 0-1.724-.327l-.574.95a2 2 0 0 1-.817.753l-.8.4a1 1 0 0 0-.55.808l-.013.156a1 1 0 0 0 .202.695l.421.55a1 1 0 0 1 .147.947l-.142.396a.6.6 0 0 1-.654.39l-.812-.122a.6.6 0 0 0-.688.625l.081 1.539a1 1 0 0 1-.465.899L3.22 11.94a.6.6 0 0 0-.197.813l.379.642a1 1 0 0 0 .705.48l2.062.326a1 1 0 0 1 .77 1.362l-.874 2.166a1 1 0 0 0 .463 1.261l.243.127a2 2 0 0 1 1.059 2.011z"/>
    </svg>
  );
};
