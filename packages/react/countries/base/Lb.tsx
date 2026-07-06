// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Lb = ({
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
      <path strokeLinejoin="round" d="m7.724 13.483-3.528 8.249a.5.5 0 0 0 .373.689l1.972.346a.5.5 0 0 0 .348-.066l1.286-.79a.5.5 0 0 0 .217-.281l.412-1.365a.5.5 0 0 1 .181-.257l4.86-3.596a.5.5 0 0 0-.014-.814l-.776-.534a.5.5 0 0 1-.115-.714l.956-1.262a.5.5 0 0 1 .471-.193l2.964.434a.5.5 0 0 0 .488-.218l.25-.373a.5.5 0 0 0-.215-.735l-1.385-.61 3.378-3.138a.5.5 0 0 0 .15-.465l-.514-2.56a.5.5 0 0 0-.277-.354l-1.607-.756a.5.5 0 0 1-.122-.824l.667-.601a.5.5 0 0 0-.076-.799l-.815-.494a.5.5 0 0 0-.61.07l-.494.488a.5.5 0 0 1-.382.142l-2.125-.133a.5.5 0 0 0-.53.526l.05.944a.5.5 0 0 1-.172.404L9.833 6.584a.5.5 0 0 0-.167.306l-.591 4.06a.5.5 0 0 1-.379.414l-.648.155a.5.5 0 0 0-.382.527l.097 1.2a.5.5 0 0 1-.039.237Z"/>
    </svg>
  );
};
