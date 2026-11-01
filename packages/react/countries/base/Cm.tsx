// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cm = ({
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
      <path strokeLinejoin="round" d="M7.969 21.487h7.282a2 2 0 0 1 .855.192l2.109.997a.63.63 0 0 0 .891-.67l-.21-1.301a2 2 0 0 0-.483-1.015l-1.873-2.097a2 2 0 0 1-.507-1.246l-.06-1.398a2 2 0 0 1 .392-1.277l1.202-1.622a.8.8 0 0 0 .08-.82l-.484-1.014a2 2 0 0 0-.634-.761l-1.287-.93a.6.6 0 0 1-.14-.832l.175-.247a.6.6 0 0 1 .574-.248l1.215.171a.6.6 0 0 0 .678-.676l-.37-2.674a3 3 0 0 0-.281-.915l-.721-1.462a.6.6 0 0 0-.694-.314l-.516.139a.6.6 0 0 0-.377.855l.617 1.19a.8.8 0 0 1-.263 1.032l-.466.314a2 2 0 0 0-.688.8l-3.409 7.177a.8.8 0 0 1-1.161.326l-.74-.486a.8.8 0 0 0-.983.083l-1.927 1.79a1 1 0 0 0-.27.427l-.56 1.736a.6.6 0 0 0 .168.628l2.085 1.89a1 1 0 0 1 .31.931l-.118.613a.6.6 0 0 0 .589.714Z"/>
    </svg>
  );
};
