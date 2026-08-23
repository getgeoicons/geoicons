// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsCalifornia = ({
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
      <path strokeLinejoin="round" d="M3.333 1.23a.3.3 0 0 0-.299.272l-.31 3.243a1 1 0 0 0 .065.465l1.868 4.694a.6.6 0 0 0 .463.371l.942.15a.6.6 0 0 1 .506.577l.044 1.697a2 2 0 0 0 .254.925l2.706 4.837a1 1 0 0 0 .671.492l2.771.568a1 1 0 0 1 .587.365l2.093 2.683a.6.6 0 0 0 .534.227l3.927-.4a.6.6 0 0 0 .53-.492l.423-2.359a1 1 0 0 0-.06-.558l-.55-1.333a1 1 0 0 0-.243-.35l-9.373-8.746a.6.6 0 0 1-.19-.439V1.54a.3.3 0 0 0-.3-.3z"/>
    </svg>
  );
};
