// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HtSud = ({
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
      <path strokeLinejoin="round" d="M1.955 9.184a.698.698 0 0 0-.318 1.293l1.21.74a1 1 0 0 0 .64.14l1.59-.19a2 2 0 0 1 1.283.28l1.112.683a3 3 0 0 1 1.133 1.253l.756 1.564a1 1 0 0 0 .914.565l.924-.012a.594.594 0 0 0 .41-1.018l-.379-.372a.967.967 0 0 1 .391-1.612l.305-.095c.89-.277 1.813-.428 2.744-.45l1.256-.029c.623-.014 1.247.03 1.863.132l3.906.646a.6.6 0 0 0 .645-.838l-.717-1.591a1 1 0 0 0-.973-.588l-5.472.331a.6.6 0 0 1-.528-.254l-.563-.803a.6.6 0 0 0-.571-.25l-3.146.422a3 3 0 0 1-.813-.003l-1.868-.26a3 3 0 0 0-.613-.023z"/>
    </svg>
  );
};
