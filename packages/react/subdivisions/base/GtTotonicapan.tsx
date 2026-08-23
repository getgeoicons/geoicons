// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtTotonicapan = ({
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
      <path strokeLinejoin="round" d="M14.969 1.527a.6.6 0 0 0-.766-.017l-2.198 1.744a1 1 0 0 0-.375.7l-.198 2.387a.6.6 0 0 1-.614.55l-4.95-.127a1 1 0 0 0-.717.277L4.035 8.107a1 1 0 0 0-.305.81l.535 6.129a.3.3 0 0 1-.065.214l-1.675 2.077 2.122.05a.3.3 0 0 1 .268.18l.668 1.534a1 1 0 0 0 1.106.582l1.117-.215a1 1 0 0 1 1.043.46l1.577 2.578a.3.3 0 0 0 .446.075l2.612-2.146a1 1 0 0 1 1.016-.151l2.82 1.164a1 1 0 0 0 .648.04l1.496-.413a1 1 0 0 0 .519-.344l1.19-1.505a.6.6 0 0 0-.01-.757l-3.593-4.293a2 2 0 0 1-.46-1.43l.26-3.55a.6.6 0 0 1 .798-.521l1.274.45a.6.6 0 0 0 .706-.242l.19-.298a.6.6 0 0 0-.147-.805l-4.773-3.554a1 1 0 0 1-.375-1.038l.235-.963a.6.6 0 0 0-.19-.595z"/>
    </svg>
  );
};
