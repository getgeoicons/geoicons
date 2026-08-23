// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsConnecticut = ({
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
      <path strokeLinejoin="round" d="M4.17 4.08a.3.3 0 0 0-.306.278l-.737 10.14a1 1 0 0 0 .088.49l.609 1.328a.3.3 0 0 1-.117.381l-2.279 1.386a.3.3 0 0 0-.117.382l.42.912a.6.6 0 0 0 .797.294l6.804-3.159c.323-.15.67-.241 1.025-.27l5.848-.467 5.21-.847a1 1 0 0 0 .702-.481l.542-.925a1 1 0 0 0 .138-.519l-.102-8.248a.3.3 0 0 0-.293-.296l-9.786-.243-.231 1.024-1.724.092.046-1.132z"/>
    </svg>
  );
};
