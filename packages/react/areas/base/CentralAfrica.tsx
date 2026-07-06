// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CentralAfrica = ({
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
      <path strokeLinejoin="round" d="m8.326 21.28-.04.954 5.526.566.073-2.748a.6.6 0 0 1 .759-.563l1.536.423.963-2.074-1.068-2.629a1 1 0 0 1 .038-.836l.928-1.794a.6.6 0 0 0 .014-.523l-.296-.653a.6.6 0 0 0-.605-.35l-.293.029a1 1 0 0 1-.895-.392L13.837 9.2a1 1 0 0 1-.142-.261l-.603-1.654a1 1 0 0 1 .141-.946l.638-.844-.03-2.088L10.1 1.2l-.815.492.668 1.448a1 1 0 0 1 .088.505l-.07.81a1 1 0 0 1-.24.567l-.459.53a.75.75 0 0 0-.103.826l.245.49a1 1 0 0 1 .01.873l-.82 1.749a.6.6 0 0 1-.625.34l-.083-.012a.6.6 0 0 0-.59.275l-.166.264a1 1 0 0 0-.03 1.015l.211.383a1 1 0 0 1 .092.731L7.1 13.7a1 1 0 0 0 .164.844l1.188 1.607a1 1 0 0 1 .167.355l.604 2.447a1 1 0 0 1-.107.743l-.655 1.123a1 1 0 0 0-.135.462Z"/>
    </svg>
  );
};
