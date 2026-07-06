// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Lk = ({
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
      <path strokeLinejoin="round" d="m8.93 22.264-.753-.678a1 1 0 0 1-.296-.482l-1.034-3.811a1 1 0 0 1-.034-.204l-.215-3.705-.428-2.77a.5.5 0 0 1 .038-.282l1.013-2.234a.5.5 0 0 0 .028-.334l-.266-1.011a.5.5 0 0 1 .177-.523l.835-.647a.5.5 0 0 0 .175-.258l.384-1.344a.5.5 0 0 0-.298-.602L6.989 2.88a.5.5 0 0 1-.3-.594l.093-.352a.5.5 0 0 1 .379-.36l1.394-.297a.5.5 0 0 1 .543.248l.486.887a.5.5 0 0 0 .133.156l2.253 1.739q.065.05.11.116l2.83 4.204a.5.5 0 0 1 .071.161l.427 1.756a.5.5 0 0 0 .064.15l1.618 2.536a1 1 0 0 1 .138.343l.581 2.928a1 1 0 0 1-.01.436l-.508 2.041a1 1 0 0 1-.256.459l-1.498 1.529a1 1 0 0 1-.364.236L11.165 22.7a1 1 0 0 1-.546.044l-1.216-.243a1 1 0 0 1-.473-.237Z"/>
    </svg>
  );
};
