// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BzStannCreek = ({
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
      <path strokeLinejoin="round" d="M8.948 1.649a.514.514 0 0 0-.402.848l.91 1.059a1 1 0 0 1 .027 1.27l-2.39 3.038a2 2 0 0 0-.427 1.17l-.07 2.092a1 1 0 0 1-.545.859l-1.256.639a1 1 0 0 0-.38.339l-1.761 2.659a.68.68 0 0 0 .686 1.046l3.696-.657a1 1 0 0 1 1.005.427l2.217 3.295a1 1 0 0 1 .157.72l-.182 1.101a.6.6 0 0 0 .525.694l4.098.46a1 1 0 0 0 1.066-.695l.812-2.595a1 1 0 0 1 .216-.376l1.244-1.36a1 1 0 0 0 .262-.643l.085-2.68a1 1 0 0 1 .334-.716l.992-.884a1 1 0 0 0 .268-1.105l-.621-1.617a1 1 0 0 1 .269-1.106l1.298-1.154a1 1 0 0 0 .301-1.007l-.775-2.879a2 2 0 0 0-.316-.66l-1.137-1.556a.8.8 0 0 0-.904-.285l-1.002.343a2 2 0 0 1-.696.106z"/>
    </svg>
  );
};
