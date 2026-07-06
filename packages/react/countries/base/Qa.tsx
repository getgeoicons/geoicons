// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Qa = ({
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
      <path strokeLinejoin="round" d="m12.395 1.355-2.256 1.32a.5.5 0 0 0-.202.223l-3.105 6.75a.5.5 0 0 0-.046.213l.052 5.724a.5.5 0 0 0 .101.297l.875 1.158a.5.5 0 0 1 .085.427l-.434 1.664a.5.5 0 0 0 .036.348l1.106 2.227c.05.1.13.18.23.229l1.685.81a.5.5 0 0 0 .24.05l2.5-.112a.5.5 0 0 0 .351-.166l.56-.626a.5.5 0 0 0 .092-.15l1.378-3.506a.5.5 0 0 1 .043-.084l1.444-2.283a.5.5 0 0 0 .076-.295l-.14-2.578a.5.5 0 0 0-.239-.4l-.753-.46a.5.5 0 0 1-.23-.326l-.455-2.226a.5.5 0 0 1 .05-.336l1.189-2.218a.5.5 0 0 0 .059-.25l-.057-1.982a.5.5 0 0 0-.402-.476l-1.302-.26a.5.5 0 0 1-.382-.349l-.421-1.43a.5.5 0 0 0-.21-.279l-.995-.638a.5.5 0 0 0-.523-.01Z"/>
    </svg>
  );
};
