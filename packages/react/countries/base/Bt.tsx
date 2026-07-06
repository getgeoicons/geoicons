// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bt = ({
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
      <path strokeLinejoin="round" d="m2.648 13.166-1.035.809a.5.5 0 0 0-.07.72l1.746 2.024a.5.5 0 0 0 .541.146l1.387-.477a.5.5 0 0 1 .395.03l2.118 1.114a.5.5 0 0 0 .403.028l3.61-1.302a.5.5 0 0 1 .394.023l1.63.815a.5.5 0 0 0 .324.043l6.645-1.359a.5.5 0 0 1 .204.001l1.198.254a.5.5 0 0 0 .602-.534l-.279-3.11a.5.5 0 0 0-.463-.453l-2.088-.148a.5.5 0 0 1-.46-.574l.29-1.904a.5.5 0 0 0-.211-.487l-1.54-1.059a.5.5 0 0 0-.602.027l-1.074.891a.5.5 0 0 1-.47.092L8.43 6.434a.5.5 0 0 0-.411.05l-2.001 1.22a.5.5 0 0 0-.169.17l-3.08 5.156a.5.5 0 0 1-.121.137Z"/>
    </svg>
  );
};
