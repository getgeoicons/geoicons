// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AgSaintPeter = ({
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
      <path strokeLinejoin="round" d="M17.202 16.065a1 1 0 0 0 .527-.793l.235-2.577a1 1 0 0 1 .331-.657l1.03-.915a1 1 0 0 0 .326-.881l-.022-.166a1 1 0 0 0-1.1-.86l-2.3.25a.634.634 0 0 1-.316-1.212l3.472-1.472a3 3 0 0 0 .576-.323l1.674-1.198a1.008 1.008 0 0 0-.159-1.727l-.629-.297a1 1 0 0 0-1.276.375l-.361.58a2 2 0 0 1-.934.791l-2.19.904a3 3 0 0 0-.712.418l-.952.751a1 1 0 0 1-1.523-.357l-.136-.286a1 1 0 0 1 .232-1.169l1.243-1.126a1 1 0 0 0 .299-.981L14.24 1.94a.6.6 0 0 0-.86-.387l-.423.22a.6.6 0 0 0-.322.526l-.006.59a1 1 0 0 1-.334.737l-.653.582a1 1 0 0 1-.121.092l-1.212.786a1 1 0 0 0-.131 1.577l.179.164a1 1 0 0 1 .32.83l-.023.25a1 1 0 0 1-.518.787l-2.153 1.17a1 1 0 0 1-1.263-.26l-.324-.412a1 1 0 0 0-.817-.381l-1.07.033a.3.3 0 0 0-.29.305l.055 3.33a.3.3 0 0 0 .152.257l.688.39a.3.3 0 0 1 .152.261v1.103a.3.3 0 0 1-.228.292l-2.284.564a.3.3 0 0 0-.225.254l-.767 6.133a.3.3 0 0 0 .263.335l5.804.683c.267.032.539.009.797-.067l6.282-1.846a.3.3 0 0 0 .211-.239l.539-3.269a1 1 0 0 1 .517-.72z"/>
    </svg>
  );
};
