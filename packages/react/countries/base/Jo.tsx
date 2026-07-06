// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Jo = ({
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
      <path strokeLinejoin="round" d="M5.101 9.758 2.764 21.374a.5.5 0 0 0 .398.59l4.174.783a.5.5 0 0 0 .471-.165l2.613-3.037a.5.5 0 0 1 .291-.166l2.65-.47a.5.5 0 0 0 .385-.328l.473-1.359a.5.5 0 0 1 .224-.27l.96-.549a.5.5 0 0 0 .128-.764l-3.892-4.427 8.409-2.286a.5.5 0 0 0 .244-.153l.862-.98a.5.5 0 0 0 .104-.472l-1.625-5.482a.5.5 0 0 0-.75-.279L10.887 6.7a.5.5 0 0 1-.333.075l-1.587-.203a.5.5 0 0 1-.312-.164L7.29 4.863a.5.5 0 0 0-.412-.168l-1.239.092a.5.5 0 0 0-.463.491l-.064 4.389a.5.5 0 0 1-.01.091Z"/>
    </svg>
  );
};
