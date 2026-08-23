// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsRaggedIsland = ({
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
      <path d="m8.57 3.866-.337-1.797a.786.786 0 0 0-1.548.28l.644 3.744a7.57 7.57 0 0 0 2.919 4.773l.254.19c.4.3.453.88.115 1.249-.35.38-.28.982.148 1.272l.813.551a1 1 0 0 1 .434.72l.358 3.298a4.7 4.7 0 0 0 2.225 3.51l1.256.768a.824.824 0 0 0 1.069-.183c.284-.349.232-.859-.08-1.182-2.58-2.667-3.373-7.098-3.805-9.852a1 1 0 0 0-.328-.597l-.583-.512A11 11 0 0 1 8.57 3.866Z"/>
    </svg>
  );
};
