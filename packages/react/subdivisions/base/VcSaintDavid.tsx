// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VcSaintDavid = ({
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
      <path strokeLinejoin="round" d="M18.158 2.52a1 1 0 0 0-1.41-.758l-3.31 1.535a1 1 0 0 0-.507.534l-2.781 6.908a3 3 0 0 1-.532.862l-1.06 1.203a1 1 0 0 0-.248.694l.047 1.417a1 1 0 0 1-.749 1.002l-2.97.769a1 1 0 0 0-.748.902l-.068 1.03a1 1 0 0 0 .471.916l4.69 2.902a1 1 0 0 0 .821.105l4.258-1.312a1 1 0 0 1 1.017.265l.801.837a1 1 0 0 0 1.06.25l1.325-.476a1 1 0 0 0 .583-1.33l-.803-1.906a1 1 0 0 1 .22-1.101l.39-.386a2 2 0 0 0 .543-1.887L17.453 8.15a.6.6 0 0 1 .692-.729l1.3.24a.6.6 0 0 0 .706-.533l.041-.428a.6.6 0 0 0-.15-.46l-1.39-1.544a1 1 0 0 1-.246-.52z"/>
    </svg>
  );
};
