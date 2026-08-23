// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsArkansas = ({
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
      <path strokeLinejoin="round" d="M22.25 6.882a.6.6 0 0 0-.52-.908l-1.9.017a.578.578 0 0 1-.362-1.032l1.041-.817a.6.6 0 0 0 .192-.68l-.09-.243a.6.6 0 0 0-.562-.39l-18.506-.01a.3.3 0 0 0-.297.34l.707 5.273q.043.315.034.632l-.208 8.358a.6.6 0 0 0 .465.6l.966.221a.6.6 0 0 1 .466.583l.007 1.98a.3.3 0 0 0 .298.298l11.51.074a.6.6 0 0 0 .604-.6l.005-3.164a1 1 0 0 1 .142-.513z"/>
    </svg>
  );
};
