// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaNewBrunswick = ({
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
      <path strokeLinejoin="round" d="M22.84 15.448a.737.737 0 0 0-.184-1.414l-1.959-.254a1 1 0 0 1-.727-.475l-1.263-2.09a2 2 0 0 1-.258-.69l-.434-2.485a1 1 0 0 1 .159-.736l.653-.958 1.558-2.03a.73.73 0 0 0-.975-1.055L16.153 5.38a.9.9 0 0 1-1.329-.427l-.288-.737a1 1 0 0 0-.527-.55l-1.275-.564a1 1 0 0 0-.74-.028L9.01 4.134a1 1 0 0 1-.91-.124l-.804-.565a.6.6 0 0 0-.372-.11l-2.661.12a.6.6 0 0 0-.573.594l-.013 1.263a1 1 0 0 1-.584.9l-1.737.792a.6.6 0 0 0-.19.955l.35.376a.6.6 0 0 0 .604.168l1.738-.498a1 1 0 0 1 .801.111l1.276.789a1 1 0 0 1 .475.866l-.113 6.99a.6.6 0 0 0 .368.562l.802.337a.6.6 0 0 1 .364.62l-.096.865a1 1 0 0 0 .65 1.05l1.859.678a2 2 0 0 0 1.273.032l3.07-.945a5 5 0 0 0 1.191-.546l4.698-2.953a3 3 0 0 1 .463-.237z"/>
    </svg>
  );
};
