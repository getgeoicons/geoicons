// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const JmSaintElizabeth = ({
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
      <path strokeLinejoin="round" d="M11.194 1.219a1 1 0 0 0-.404.046L5.173 3.109a1 1 0 0 0-.477.335L2.755 5.93a.6.6 0 0 0 .045.79l.57.58a.6.6 0 0 1 .128.646L2.02 11.594a1 1 0 0 0-.022.692l.153.459a1 1 0 0 0 1.07.676l2.043-.25a1 1 0 0 1 .562.095l1.246.61a1 1 0 0 1 .56.876l.063 2.72a1 1 0 0 0 .506.846l1.163.66a1 1 0 0 1 .477.625l.166.663a1 1 0 0 0 .344.535l2.191 1.763a1 1 0 0 0 .672.22l7.781-.347a1 1 0 0 0 .942-1.16l-1.147-7.026-1.94-6.925a1 1 0 0 1-.037-.226l-.201-4.679a.6.6 0 0 0-.545-.571z"/>
    </svg>
  );
};
