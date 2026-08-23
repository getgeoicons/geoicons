// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuHavana = ({
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
      <path strokeLinejoin="round" d="M22.163 6.576a.6.6 0 0 0-.547-.457l-4.243-.258a4 4 0 0 0-.73.023l-3.798.467a4 4 0 0 0-1.322.402l-1.24.63a2 2 0 0 1-.696.205l-.751.079a2 2 0 0 0-1.031.42L6.287 9.284a2 2 0 0 1-1.234.43h-.24a2 2 0 0 0-1.202.407L1.53 11.7a.6.6 0 0 0-.213.649l.043.143a.6.6 0 0 0 .804.384l.77-.317a.6.6 0 0 1 .81.705l-.214.822a1 1 0 0 0 .138.81l.748 1.11a.6.6 0 0 0 .72.223l.49-.196a.6.6 0 0 1 .817.475l.148 1.067a.6.6 0 0 0 .58.518l2.514.055a.6.6 0 0 0 .612-.56l.021-.316a.6.6 0 0 1 .627-.56l3.76.176a1 1 0 0 0 .794-.336l1.262-1.422a1 1 0 0 0 .235-.848l-.273-1.46a1 1 0 0 1 .889-1.18l1.653-.156c.329-.03.66.02.964.148l.967.407a.6.6 0 0 0 .804-.369l.625-1.935a2 2 0 0 0 .04-1.087z"/>
    </svg>
  );
};
