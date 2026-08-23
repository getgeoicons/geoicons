// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsIllinois = ({
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
      <path strokeLinejoin="round" d="M12.22 21.825a1 1 0 0 0 1.12.847l1.374-.18a1 1 0 0 0 .652-.368l.768-.963a1 1 0 0 0 .216-.542l.19-2.324a1 1 0 0 1 .214-.54l1.061-1.336a1 1 0 0 0 .217-.63l-.096-11.34q0-.129-.035-.253l-.736-2.726a.3.3 0 0 0-.288-.222l-8.175-.045a.3.3 0 0 0-.244.477l1.386 1.904a1 1 0 0 1 .005 1.17l-.26.365a1 1 0 0 1-.557.385l-1.094.29a1 1 0 0 0-.706.698l-.919 3.284a3 3 0 0 0 .317 2.351l1.36 2.268a1 1 0 0 0 .389.369l1.083.575a1 1 0 0 1 .49 1.166l-.297 1.008a1 1 0 0 0 .34 1.068l1.667 1.315a1 1 0 0 1 .37.64z"/>
    </svg>
  );
};
