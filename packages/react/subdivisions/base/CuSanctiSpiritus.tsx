// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuSanctiSpiritus = ({
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
      <path strokeLinejoin="round" d="M22.46 5.036a.6.6 0 0 0-.554-.828l-3.97-.008a4 4 0 0 1-1.567-.323l-1.271-.545a.6.6 0 0 0-.834.498l-.074.821a.6.6 0 0 0 .34.597l.837.395a.6.6 0 0 1 .297.774l-.223.533a.6.6 0 0 1-.704.349l-.96-.25a1 1 0 0 0-1.023.333l-.954 1.16a1 1 0 0 1-1.208.264l-1.815-.879a1 1 0 0 0-.8-.031l-.475.186a1 1 0 0 0-.634.987l.097 1.735A1 1 0 0 1 5.73 11.83l-.74-.18a1 1 0 0 0-.838.174l-1.305.985a2 2 0 0 0-.53.602l-.826 1.44a.8.8 0 0 0 .105.939l.726.79a3 3 0 0 0 1.057.74l2.58 1.071a1 1 0 0 0 .7.026l.509-.17a2 2 0 0 1 1.225-.013l8.382 2.6c.336.103.692.117 1.035.04l3.467-.786a.8.8 0 0 0 .59-.554l.228-.772a.8.8 0 0 0-.466-.967l-2.005-.815a.6.6 0 0 1-.334-.77l1.003-2.627a.6.6 0 0 1 .62-.383l.491.05a.6.6 0 0 0 .639-.434l.352-1.253a.6.6 0 0 0-.278-.682l-.53-.306a1.5 1.5 0 0 1-.638-1.87z"/>
    </svg>
  );
};
