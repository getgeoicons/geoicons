// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaNovaScotia = ({
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
      <path strokeLinejoin="round" d="m12.966 10.041-4.29-1.423a.6.6 0 0 0-.61.141l-2.15 2.115a1 1 0 0 0-.295.612l-.097.958a.6.6 0 0 1-.213.401l-3.742 3.112a1 1 0 0 0-.36.786l.036 2.107a1 1 0 0 0 .324.72l1.001.916a1 1 0 0 0 1.194.118l2.165-1.315a2 2 0 0 0 .604-.567l1.518-2.183a1 1 0 0 1 .782-.428l1.324-.053a1 1 0 0 0 .341-.074l7.337-3.017a1 1 0 0 0 .617-.85l.008-.106a1 1 0 0 1 .903-.92l.828-.079a1 1 0 0 0 .466-.167l1.65-1.115a1 1 0 0 0 .436-.924l-.024-.248a1 1 0 0 0-.516-.782l-.868-.473a1 1 0 0 1-.486-1.138l.331-1.23a.6.6 0 0 0-.172-.596l-.872-.805a.6.6 0 0 0-.936.159l-1.79 3.356q-.186.35-.276.736l-.259 1.123a1 1 0 0 1-1.104.767l-.662-.087a1 1 0 0 0-.49.059l-.98.378a1 1 0 0 1-.674.016Z"/>
    </svg>
  );
};
