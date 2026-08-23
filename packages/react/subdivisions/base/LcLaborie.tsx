// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LcLaborie = ({
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
      <path strokeLinejoin="round" d="M12.157 4.398a1 1 0 0 1-.08.442L6.65 17.447a.6.6 0 0 0 .275.77l1.5.777a3 3 0 0 0 1.226.332l3.512.18a1 1 0 0 1 .924.779l.236 1.044a1 1 0 0 0 .366.573l.825.634a1 1 0 0 0 .771.194l.393-.065a.796.796 0 0 0 .278-1.47l-.222-.132a1 1 0 0 1-.48-.984l.7-5.564a3 3 0 0 0-.018-.88l-.294-1.72a2 2 0 0 0-.625-1.142l-.583-.531a2 2 0 0 1-.604-1.037l-.615-2.716a2 2 0 0 1-.035-.683l.43-3.547a.83.83 0 0 0-1.518-.554l-.815 1.245a1 1 0 0 0-.162.595z"/>
    </svg>
  );
};
