// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cl = ({
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
      <path strokeLinejoin="round" d="m13.677 20.756-.012 1.365a.5.5 0 0 1-.652.472l-2.747-.878a.5.5 0 0 1-.34-.383l-.872-4.636a.5.5 0 0 1 .019-.255l1.391-4.04a.5.5 0 0 0 .009-.296l-.215-.772a.5.5 0 0 1 .025-.339l.928-2.074a.5.5 0 0 0 .04-.144l.756-6.33a.5.5 0 0 1 .176-.324l.65-.545a.5.5 0 0 1 .75.127l1.262 2.117a.5.5 0 0 1 .036.44l-1.375 3.492a.5.5 0 0 0-.01.337l.28.867a.5.5 0 0 1 0 .31l-1.323 4.018a.5.5 0 0 0-.013.266l.377 1.69a.5.5 0 0 1-.021.288l-.99 2.567a.5.5 0 0 0-.033.22l.104 1.34a.5.5 0 0 0 .423.455l.953.147a.5.5 0 0 1 .424.498Z"/>
    </svg>
  );
};
