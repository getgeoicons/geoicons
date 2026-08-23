// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxBajaCaliforniaSur = ({
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
      <path strokeLinejoin="round" d="M5.798 1.522a1 1 0 0 0-.569.178l-.486.336a1 1 0 0 1-.74.162L2.07 1.862a.55.55 0 0 0-.439.97l4.754 3.822a1 1 0 0 0 .767.21l1.075-.151a1.5 1.5 0 0 1 1.213.37l1.757 1.582a4.45 4.45 0 0 1 1.458 3.642l-.007.089a5 5 0 0 1-.273 1.276l-.19.524a1 1 0 0 0 .414 1.188l2.88 1.789q.697.434 1.324.967l2.408 2.05a2 2 0 0 1 .577.822l.358.959a.7.7 0 0 0 1.085.31l1.152-.888a1 1 0 0 0 .39-.844l-.03-.561a1 1 0 0 0-.236-.596l-2.13-2.511a1 1 0 0 0-.68-.35l-.719-.06a1 1 0 0 1-.916-.983l-.017-1.277a1 1 0 0 0-.151-.514l-1.756-2.821a3 3 0 0 1-.39-.973l-.318-1.527a3 3 0 0 0-.586-1.252L10.7 1.9a1 1 0 0 0-.784-.379z"/>
    </svg>
  );
};
