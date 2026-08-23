// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoSanCristobal = ({
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
      <path strokeLinejoin="round" d="M12.013 22.21a.6.6 0 0 0 .729.443l.39-.098a1 1 0 0 0 .568-.384l4.626-6.398a1 1 0 0 0 .172-.769l-.11-.59a1 1 0 0 0-.307-.554l-1.685-1.546a2 2 0 0 0-.812-.452l-.76-.213a1 1 0 0 1-.671-.625l-.44-1.227a2 2 0 0 1 .016-1.393l.196-.508a1 1 0 0 0 .01-.692l-1.087-3.078a1 1 0 0 0-.236-.374l-2.203-2.203a.6.6 0 0 0-.758-.075l-1.006.674a1 1 0 0 0-.434.693l-.085.615a1 1 0 0 1-.65.802l-.451.163a1.5 1.5 0 0 0-.898.896l-.364.997a1.5 1.5 0 0 0-.01 1l.242.707a1 1 0 0 1-.01.675l-.42 1.123a1 1 0 0 0 .018.748l.487 1.125a2 2 0 0 0 .538.729l3.084 2.627a.6.6 0 0 1-.039.944l-.459.33a.6.6 0 0 0-.126.852l2.268 2.957a2 2 0 0 1 .358.751z"/>
    </svg>
  );
};
