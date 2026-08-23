// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HtNippes = ({
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
      <path strokeLinejoin="round" d="M21.098 10.925a.6.6 0 0 0-.459-.647L18.205 9.7a3 3 0 0 0-.879-.075l-2.376.148a4 4 0 0 1-.857-.039L9.95 9.098a3 3 0 0 0-.977.01l-3.8.67a.742.742 0 0 1-.279-1.456l2.03-.421a.841.841 0 0 0-.297-1.655l-2.778.422a2 2 0 0 0-.849.34l-.136.096a2 2 0 0 0-.797 1.176l-.718 3.04a.6.6 0 0 0 .493.732l1.444.22a1 1 0 0 0 .68-.14l.477-.297a1 1 0 0 1 .766-.123l1.59.388a1 1 0 0 1 .743 1.173l-.06.294a.6.6 0 0 0 .617.72l4.07-.203a1 1 0 0 0 .634-.268l.441-.413a1 1 0 0 1 .775-.265l4.787.44a1 1 0 0 1 .776.499l1.983 3.46a.6.6 0 0 0 .494.302l.061.003a.6.6 0 0 0 .627-.59l.045-2.716a1 1 0 0 0-.31-.74l-1.178-1.122a1 1 0 0 1-.305-.83z"/>
    </svg>
  );
};
