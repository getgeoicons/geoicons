// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvUsulutan = ({
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
      <path strokeLinejoin="round" d="M12.205 3.781a1 1 0 0 0-.909.138l-1.012.735a2 2 0 0 0-.564.63l-.555.976a1 1 0 0 1-.734.496l-.925.127a1 1 0 0 0-.613.328l-.748.844a1 1 0 0 0-.242.527l-.271 1.968a2 2 0 0 1-.336.863l-.879 1.273a1 1 0 0 0-.175.518l-.052 1.037a1 1 0 0 1-.327.691l-2.286 2.07a.3.3 0 0 0 .104.507l2.222.76 9.038 1.899a10 10 0 0 0 2.052.214l7.221.003a.3.3 0 0 0 .244-.476l-.863-1.198a1 1 0 0 0-.637-.4l-1.163-.207a.3.3 0 0 1-.212-.439l.483-.886a.3.3 0 0 0-.162-.426l-3.852-1.375a2 2 0 0 1-1.037-.846l-.18-.296a2 2 0 0 1-.29-1.08l.157-7.389a1 1 0 0 0-.679-.968z"/>
    </svg>
  );
};
