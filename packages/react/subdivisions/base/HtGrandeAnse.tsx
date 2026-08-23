// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HtGrandeAnse = ({
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
      <path strokeLinejoin="round" d="M22.612 11.387a.605.605 0 0 0-.705-.888l-1.449.483a1 1 0 0 1-.683-.02l-1.339-.528a3 3 0 0 0-.626-.172l-4.581-.738a2 2 0 0 1-.991-.462l-.84-.727a3 3 0 0 0-1.547-.703l-1.214-.17a4 4 0 0 0-1.968.218L3.312 8.946a.8.8 0 0 0-.514.82l.069.772a1 1 0 0 1-.068.461l-1.407 3.507a1 1 0 0 0 .086.912l.461.72a1 1 0 0 0 .984.451l8.662-1.24c.243-.036.49-.025.73.03l4.28.98a.6.6 0 0 0 .73-.518l.02-.19a.6.6 0 0 1 .516-.527l2.348-.32a.8.8 0 0 0 .58-.386l.8-1.355z"/>
    </svg>
  );
};
