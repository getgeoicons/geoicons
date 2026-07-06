// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bd = ({
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
      <path strokeLinejoin="round" d="m6.29 12.014 1.728 6.94a.5.5 0 0 0 .597.366l4.717-1.082a.5.5 0 0 0 .187-.087l2.111-1.573a.5.5 0 0 1 .79.31l.46 2.506q.017.089.063.166l1.575 2.641a.25.25 0 0 0 .462-.09l.7-4.604a.5.5 0 0 0-.004-.177l-.964-4.601a.5.5 0 0 0-.896-.188l-1.025 1.436a.5.5 0 0 1-.862-.084l-1.004-2.205a.5.5 0 0 1 .256-.666l3.097-1.344a.5.5 0 0 0 .241-.221l.867-1.61a.5.5 0 0 0-.217-.684l-1.348-.674a.5.5 0 0 0-.225-.053l-6.308.02a.5.5 0 0 1-.501-.529l.105-1.839a.5.5 0 0 0-.093-.32l-.786-1.095a.25.25 0 0 0-.383-.027l-.488.506a.5.5 0 0 1-.655.057L6.264 1.582a.5.5 0 0 0-.76.218l-.68 1.71a.5.5 0 0 0 .149.571l2.161 1.767a.5.5 0 0 1-.039.803l-2.06 1.374a.5.5 0 0 0 .06.866l1.513.73a.5.5 0 0 1 .251.626l-.551 1.47a.5.5 0 0 0-.017.297Z"/>
    </svg>
  );
};
