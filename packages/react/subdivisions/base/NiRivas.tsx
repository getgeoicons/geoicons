// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiRivas = ({
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
      <path strokeLinejoin="round" d="M20.227 16.224a4 4 0 0 0-1.031-.311l-1.952-.312a4 4 0 0 1-1.39-.498l-3.21-1.88a5 5 0 0 1-1.01-.78l-.912-.912a5 5 0 0 1-1.058-1.56l-.381-.887-.802-1.537a5 5 0 0 1-.448-1.228l-.193-.87a.82.82 0 0 0-1.28-.489L4.38 6.525a1 1 0 0 1-.589.187l-.846-.005a1 1 0 0 0-.845.457l-.632.978a1 1 0 0 0-.102.879l.159.446a1 1 0 0 0 .333.457l5.024 3.86a3 3 0 0 1 .813.954l1.19 2.204a2 2 0 0 0 .822.816l1.214.645a.6.6 0 0 0 .802-.232L12.963 16a.3.3 0 0 1 .388-.123l3.393 1.598c.225.106.467.169.714.186l1.214.084a2 2 0 0 1 .666.165l2.95 1.296a.3.3 0 0 0 .42-.257l.08-1.343a.3.3 0 0 0-.175-.291z"/>
    </svg>
  );
};
