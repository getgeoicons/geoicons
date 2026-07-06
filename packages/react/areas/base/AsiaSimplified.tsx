// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AsiaSimplified = ({
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
      <path strokeLinejoin="round" d="m5.176 16.408-1.69.561a.5.5 0 0 1-.604-.25l-1.597-3.196a.5.5 0 0 1-.037-.351l.393-1.481a.5.5 0 0 1 .402-.366l2.367-.389a.5.5 0 0 0 .39-.66L3.953 7.87a.5.5 0 0 1 .295-.634L8.329 5.69a.5.5 0 0 1 .415.027l3.32 1.798a.5.5 0 0 0 .444.016l2.211-.998a.5.5 0 0 1 .365-.018l2.905.976a.5.5 0 0 0 .467-.08l1.298-1.013a.5.5 0 0 1 .593-.017l2.059 1.429a.5.5 0 0 1 .137.678l-.8 1.26a.5.5 0 0 1-.177.168L19.55 11.05a.5.5 0 0 0-.241.55l.286 1.221a.5.5 0 0 1-.007.255l-.256.87a.5.5 0 0 1-.327.335l-1.375.441a.5.5 0 0 0-.346.44l-.136 1.901a.5.5 0 0 1-.345.44l-1.437.465a.5.5 0 0 1-.654-.46l-.029-.93a.5.5 0 0 0-.174-.364l-1.11-.951a.5.5 0 0 0-.661.01l-.882.802a.5.5 0 0 0-.131.193l-.591 1.563a.5.5 0 0 1-.44.323l-.458.025a.5.5 0 0 1-.514-.379l-.667-2.7a.5.5 0 0 0-.283-.337l-1.325-.586a.5.5 0 0 0-.602.157l-1.428 1.9a.5.5 0 0 1-.242.174Z"/>
    </svg>
  );
};
