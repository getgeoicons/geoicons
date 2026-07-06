// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ga = ({
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
      <path strokeLinejoin="round" d="M10.516 5.621 5.34 5.595a.5.5 0 0 0-.493.408l-.92 4.897a.5.5 0 0 1-.51.407l-.604-.022a.5.5 0 0 0-.477.697l1.487 3.452a.5.5 0 0 0 .087.135l6.162 6.882a.5.5 0 0 0 .681.06l2.019-1.583a.5.5 0 0 0 .154-.583l-.994-2.432a.5.5 0 0 1 .487-.689l1.826.09a.5.5 0 0 0 .524-.509l-.014-.822a.5.5 0 0 1 .465-.508l.492-.034a.5.5 0 0 1 .49.293l.497 1.103a.5.5 0 0 0 .388.29l3.191.438a.5.5 0 0 0 .517-.275l.804-1.634a.5.5 0 0 0 .05-.183l.305-4.072a.5.5 0 0 0-.252-.473l-1.949-1.105a.5.5 0 0 1-.146-.744l2.067-2.635a.5.5 0 0 0 .035-.566l-.907-1.513a.5.5 0 0 0-.565-.224l-2.167.614a.5.5 0 0 1-.634-.526l.222-2.456a.5.5 0 0 0-.496-.545l-5.689-.026a.5.5 0 0 0-.502.507l.047 3.405a.5.5 0 0 1-.502.507Z"/>
    </svg>
  );
};
