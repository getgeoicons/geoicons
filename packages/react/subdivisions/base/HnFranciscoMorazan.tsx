// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnFranciscoMorazan = ({
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
      <path strokeLinejoin="round" d="M6.208 22.024c.843.273 1.717.443 2.6.507l3.227.232a.6.6 0 0 0 .63-.475l.256-1.213a.6.6 0 0 1 .686-.468l.636.106a.6.6 0 0 0 .682-.45l.59-2.445c.068-.28.075-.57.02-.853l-.252-1.29a1 1 0 0 1 .243-.865l3.388-3.714a1 1 0 0 0 .24-.876l-.266-1.293a2 2 0 0 0-.545-1.01L17.295 6.87a2 2 0 0 1-.543-1.004l-.637-3.044a1 1 0 0 0-.178-.395l-.597-.797a1 1 0 0 0-.857-.398l-1.747.1a1 1 0 0 0-.908.737l-.993 3.67a2 2 0 0 1-.553.928L7.986 8.845a1 1 0 0 0-.302.866l.504 3.523a1 1 0 0 1-.545 1.037l-1.686.838a1 1 0 0 0-.548.779L4.8 21.06a.6.6 0 0 0 .411.64z"/>
    </svg>
  );
};
