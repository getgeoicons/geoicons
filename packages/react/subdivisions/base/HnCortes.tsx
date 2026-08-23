// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnCortes = ({
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
      <path strokeLinejoin="round" d="M18.875 1.728a.3.3 0 0 0-.343-.405l-3.618.796a1 1 0 0 0-.54.322L11.95 5.24a1 1 0 0 1-1.016.311l-1.332-.36a1 1 0 0 0-.92.215l-3.357 2.95a.3.3 0 0 0 .116.515l3.416.969a1 1 0 0 1 .552.396l2.68 3.905a.6.6 0 0 1 .047.598l-.423.89a.6.6 0 0 0 .072.63l1.13 1.421a1 1 0 0 1 .21.738l-.163 1.416a1 1 0 0 0 .169.681l1.217 1.77a.6.6 0 0 0 .855.14l3.183-2.393a1 1 0 0 0 .4-.796l.006-1.743a1 1 0 0 0-.438-.83l-2.672-1.82a1 1 0 0 1-.334-1.27l2.688-5.44a1 1 0 0 0 .04-.793l-.572-1.531a1 1 0 0 1 .01-.726z"/>
    </svg>
  );
};
