// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ai = ({
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
      <path strokeLinejoin="round" d="m9.335 14.105-2.521 1.728a.5.5 0 0 0-.132.693l.1.148a.5.5 0 0 0 .562.198l1.402-.433 1.986-.872a.5.5 0 0 1 .496.054l.431.314 6.5-3.344a.5.5 0 0 0 .24-.27l.482-1.286a.5.5 0 0 1 .174-.23l3.142-2.282a.5.5 0 0 0-.031-.83l-.78-.482a.5.5 0 0 0-.59.048l-2.858 2.474a.5.5 0 0 1-.281.12l-1.69.155a.5.5 0 0 0-.14.034l-2.451.989a.5.5 0 0 0-.306.55l.144.814a.5.5 0 0 1-.341.563l-3.407 1.083a.5.5 0 0 0-.131.064ZM7.447 9.176 2.175 8.007a.5.5 0 0 0-.58.323l-.198.565a.5.5 0 0 0 .39.658l5.355.88a.5.5 0 0 0 .542-.3l.116-.276a.5.5 0 0 0-.353-.681Z"/>
    </svg>
  );
};
