// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxTamaulipas = ({
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
      <path strokeLinejoin="round" d="M6.897 18.494a1 1 0 0 0-.183.592l.014.817a1 1 0 0 0 .64.917l1.737.67a3 3 0 0 0 1.107.201l1.31-.011a3 3 0 0 1 1.43.348l1.275.675a.597.597 0 0 0 .876-.494l.144-2.565-.25-7.726a.6.6 0 0 1 .395-.583l.39-.142a.6.6 0 0 0 .347-.325l.702-1.617a1 1 0 0 0-.652-1.363l-2.963-.814a10 10 0 0 1-1.58-.583 2.97 2.97 0 0 1-1.166-.977l-.232-.328a6 6 0 0 1-.995-2.362l-.116-.62a1 1 0 0 0-.563-.725l-.07-.033a.988.988 0 0 0-1.371 1.147l.334 1.284.411 1.18a6 6 0 0 0 .911 1.687l.334.434a3 3 0 0 0 1.356.991l1.091.396a.6.6 0 0 1 .396.574l-.02 1.159a.6.6 0 0 1-.224.458l-3.246 2.6a1 1 0 0 0-.36.957l.28 1.552a1 1 0 0 1-.167.754z"/>
    </svg>
  );
};
