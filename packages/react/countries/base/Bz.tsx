// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bz = ({
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
      <path strokeLinejoin="round" d="m8.026 22.768 1.734.027a.5.5 0 0 0 .459-.285l1.031-2.16a.5.5 0 0 1 .375-.278l1.04-.16a.5.5 0 0 0 .377-.282l2.361-5.056a.5.5 0 0 0 .01-.4l-.643-1.577a.5.5 0 0 1 0-.375l.793-1.978a.5.5 0 0 0-.024-.425l-.566-1.04a.5.5 0 0 1-.015-.447l1.483-3.245a.5.5 0 0 0 .045-.211l-.01-1.654a.5.5 0 0 0-.491-.497l-.99-.015a.5.5 0 0 1-.34-.142l-.949-.925a.5.5 0 0 0-.779.104l-2.489 4.198a.5.5 0 0 1-.576.223L8.854 5.86a.5.5 0 0 0-.646.457l-.673 15.93a.5.5 0 0 0 .491.52Z"/>
    </svg>
  );
};
