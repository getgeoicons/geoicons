// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Al = ({
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
      <path strokeLinejoin="round" d="m7.347 4.388.157 2.356a.5.5 0 0 0 .196.365l.937.714a.5.5 0 0 1 .185.508L7.19 15.553a.5.5 0 0 0-.01.169l.267 2.253a.5.5 0 0 0 .236.368l2.28 1.393a.5.5 0 0 1 .226.311l.478 2.007a.5.5 0 0 0 .29.344l.636.274a.5.5 0 0 0 .538-.094l.905-.843a.5.5 0 0 0 .138-.51l-.23-.765a.5.5 0 0 1 .334-.622l1.17-.354a.5.5 0 0 0 .272-.203l1.976-2.988a.5.5 0 0 0 .055-.438l-.572-1.668a.5.5 0 0 0-.495-.337l-.87.038a.5.5 0 0 1-.509-.386l-.892-3.834a.5.5 0 0 1 .008-.257l.803-2.668a.5.5 0 0 0 .01-.248l-.35-1.647a.5.5 0 0 0-.237-.328l-1.242-.725a.5.5 0 0 1-.22-.269l-.43-1.247a.25.25 0 0 0-.336-.147l-.867.378a.5.5 0 0 1-.656-.252L9.415 1.2l-1.98 2.871a.5.5 0 0 0-.088.317Z"/>
    </svg>
  );
};
