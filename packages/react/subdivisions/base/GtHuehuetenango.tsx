// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtHuehuetenango = ({
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
      <path strokeLinejoin="round" d="M21.642 2.647a1 1 0 0 0-.905-.56l-11.473.085a.6.6 0 0 0-.515.3L1.32 15.335a.6.6 0 0 0-.065.437l.578 2.478a1 1 0 0 0 .785.755l.358.069a1 1 0 0 0 .813-.202l1.815-1.452a1 1 0 0 1 .751-.21l2.279.29a1 1 0 0 1 .612.317l1.62 1.772a1 1 0 0 0 .47.29l1.516.422a.6.6 0 0 1 .438.533l.039.528a.6.6 0 0 0 .598.556h1.577a.6.6 0 0 0 .6-.567l.055-.99a.6.6 0 0 1 .427-.541l2.956-.887a1 1 0 0 0 .68-.707l.23-.889a.6.6 0 0 0-.632-.748l-.66.057a1 1 0 0 1-.734-.234l-.776-.66a1 1 0 0 1-.352-.737l-.039-1.533a1 1 0 0 1 .272-.711l2.323-2.466a1 1 0 0 0 .26-.534l.391-2.55 1.548.683.655-2.537a1 1 0 0 0-.07-.69z"/>
    </svg>
  );
};
