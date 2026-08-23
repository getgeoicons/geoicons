// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BzCorozal = ({
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
      <path strokeLinejoin="round" d="M13.644 21.576a2 2 0 0 0 1.016.496l3.86.654a.6.6 0 0 0 .636-.32l.83-1.633c.377-.74.66-1.524.843-2.334l.943-4.18a10 10 0 0 0 .242-2.447l-.135-5.46a.6.6 0 0 0-.808-.549l-2.391.885a2 2 0 0 1-.88.116l-4.484-.417a2 2 0 0 0-.917.13l-.821.322a.819.819 0 0 1-.828-1.387l2.69-2.274a.8.8 0 0 0 .134-1.076l-.382-.534a.8.8 0 0 0-.645-.334l-5.2-.032a1 1 0 0 0-.62.21l-1.088.846a1 1 0 0 0-.353.535L4.435 6.02a2 2 0 0 1-.357.72L2.563 8.681a2 2 0 0 0-.405.96l-.138 1.01a.6.6 0 0 0 .375.639l3.632 1.426a1 1 0 0 1 .574.588l.835 2.286a2 2 0 0 0 .529.79z"/>
    </svg>
  );
};
