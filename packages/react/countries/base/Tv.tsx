// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tv = ({
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
      <path strokeLinejoin="round" d="m9.954 21.933-1.159.654a1 1 0 0 1-.793.082l-.125-.04a1 1 0 0 1-.645-1.277l.291-.851a1 1 0 0 0 .026-.56l-.808-3.338a1 1 0 0 0-.236-.441l-1.28-1.391a1 1 0 0 1-.227-.406l-1.175-4.161a1 1 0 0 1 .25-.974l3.42-3.47a1 1 0 0 0 .283-.594l.23-2.12a1 1 0 0 1 .692-.845l2.942-.934a1 1 0 0 1 .43-.04l4.281.547a1 1 0 0 1 .754.517l1.966 3.644a1 1 0 0 1 .118.418l.08 1.387a1 1 0 0 0 .058.287l.742 2.028a1 1 0 0 1-.372 1.167l-8.532 5.874a1 1 0 0 0-.365.46l-.693 1.776a1 1 0 0 0 .021.778l.245.538a1 1 0 0 1-.419 1.285Z"/>
    </svg>
  );
};
