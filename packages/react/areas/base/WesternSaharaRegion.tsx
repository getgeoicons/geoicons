// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WesternSaharaRegion = ({
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
      <path strokeLinejoin="round" d="M11.824 21.141 1.2 20.965l.542-2.258a1 1 0 0 1 .43-.607l.524-.338a1 1 0 0 0 .353-.395l1.902-3.831a1 1 0 0 1 .264-.332l1.567-1.274a1 1 0 0 0 .368-.73l.076-1.674a1 1 0 0 1 .102-.396l.914-1.857a1 1 0 0 1 .357-.4l1.372-.88a1 1 0 0 0 .384-.46L11.4 3l11.188-.141.212 4.906h-8.365v7.306l-2.388 1.28a1 1 0 0 0-.525.96z"/>
    </svg>
  );
};
