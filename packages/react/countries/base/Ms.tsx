// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ms = ({
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
      <path strokeLinejoin="round" d="m9.966 4.847-3.664 7.078a.5.5 0 0 0-.047.323l.29 1.53a.5.5 0 0 1-.102.405L5.48 15.39a.5.5 0 0 0 .124.735l1.813 1.143a.5.5 0 0 1 .17.18l1.704 3.066a.5.5 0 0 0 .15.167l2.872 2.01a.5.5 0 0 0 .346.088l3.577-.424a.5.5 0 0 0 .315-.165l2.068-2.331a.5.5 0 0 0 .045-.604l-.95-1.466a.5.5 0 0 1-.08-.308l.436-6.145a.5.5 0 0 0-.232-.458l-2.169-1.372a.5.5 0 0 1-.19-.22l-1.822-4.137a.5.5 0 0 1-.043-.202V2.663a.5.5 0 0 0-.354-.478l-2.591-.789a.5.5 0 0 0-.646.479v2.743a.5.5 0 0 1-.056.23Z"/>
    </svg>
  );
};
