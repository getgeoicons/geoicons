// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvSanMiguel = ({
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
      <path strokeLinejoin="round" d="M16.126 22.633a1 1 0 0 0 .562.161h.012a1 1 0 0 0 .81-.439l1.111-1.64a1 1 0 0 0 .172-.526l.27-7.74a1 1 0 0 0-1.02-1.035l-.934.02a1 1 0 0 1-.977-.705l-.097-.313a1 1 0 0 0-.947-.706l-.736-.005a1 1 0 0 1-.728-.323l-1.037-1.127a1 1 0 0 1-.264-.644l-.005-.152a.86.86 0 0 1 .64-.858.857.857 0 0 0 .534-1.242l-.703-1.276a2 2 0 0 1-.244-.822l-.096-1.338a.6.6 0 0 0-.753-.536L6.422 2.792a1 1 0 0 0-.667.583l-.654 1.58a2 2 0 0 0-.138 1.008l.034.276a1 1 0 0 0 .557.779l3.027 1.465a1 1 0 0 1 .563.94l-.273 6.826a1 1 0 0 0 .43.862l1.117.773a.6.6 0 0 1 .24.642l-.354 1.39a.6.6 0 0 0 .66.743l.698-.094a.6.6 0 0 0 .481-.38l.269-.704a.6.6 0 0 1 .844-.315l.737.395a.6.6 0 0 1 .226.846l-.127.205a.6.6 0 0 0 .182.82z"/>
    </svg>
  );
};
