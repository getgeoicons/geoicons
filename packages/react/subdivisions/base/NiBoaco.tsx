// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiBoaco = ({
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
      <path strokeLinejoin="round" d="M1.71 9.376a1 1 0 0 0-.23 1.126l1.313 3.027a1 1 0 0 0 .374.441l1.582 1.025a1 1 0 0 1 .453.915l-.155 2.034a.6.6 0 0 0 .325.58l1.844.942a.6.6 0 0 0 .86-.406l.992-4.562a1 1 0 0 1 1.233-.754l1.88.497a2 2 0 0 0 1.173-.046l6.159-2.159a1 1 0 0 0 .48-.358L22.4 8.342a1 1 0 0 0 .032-1.124L20.87 4.779a1.004 1.004 0 0 0-1.788.202l-.686 1.905a1 1 0 0 1-.472.545l-.3.159a1 1 0 0 1-1.045-.067L13.8 5.56a1 1 0 0 0-.935-.117l-3.85 1.476a4 4 0 0 1-1.183.258l-3.698.23a1 1 0 0 0-.624.271z"/>
    </svg>
  );
};
