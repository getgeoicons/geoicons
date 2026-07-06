// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CentralAmerica = ({
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
      <path strokeLinejoin="round" d="M11.705 7.275 7.507 7.21a.6.6 0 0 1-.577-.728l.482-2.196a.6.6 0 0 0-.729-.711l-2.573.632a.6.6 0 0 0-.424.779l.642 1.858-1.684-.114a.6.6 0 0 0-.563.305L1.45 8.161a.6.6 0 0 0 .149.763l1.156.922a1 1 0 0 0 .357.181l4.138 1.144a1 1 0 0 1 .47.288l1.966 2.14a1 1 0 0 1 .258.582l.111 1.155a1 1 0 0 0 .37.685l2.488 1.992c.115.092.25.158.393.192l1.865.444a1 1 0 0 1 .567.371l.92 1.222a.6.6 0 0 0 .765.167l.51-.276a.6.6 0 0 0 .192-.89l-.023-.03a.6.6 0 0 1 .28-.929l.914-.322a.6.6 0 0 1 .714.258l.872 1.457a.6.6 0 0 0 .935.12l.623-.612a.6.6 0 0 0 .074-.768l-.874-1.27a2 2 0 0 0-.83-.69l-.394-.176a2 2 0 0 0-.666-.169l-.291-.022a2 2 0 0 0-1.12.245l-1.58.877a1 1 0 0 1-1.14-.12l-1.427-1.236a1 1 0 0 1-.216-.263l-.646-1.142a1 1 0 0 1-.108-.697l.916-4.373a1 1 0 0 0-.456-1.057l-1.469-.902a1 1 0 0 0-.508-.147Z"/>
    </svg>
  );
};
