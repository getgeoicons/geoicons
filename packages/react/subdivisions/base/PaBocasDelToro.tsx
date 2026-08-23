// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaBocasDelToro = ({
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
      <path strokeLinejoin="round" d="M2.915 2.68a1 1 0 0 1 1.314-.27l3.499 2.064a1 1 0 0 0 1.306-.259l.426-.564a1 1 0 0 1 1.395-.2l4.199 3.122a1 1 0 0 1 .379 1.022l-.561 2.488a1 1 0 0 0 .317.973l.054.047a1 1 0 0 0 1.542-.284l.14-.263a.675.675 0 0 1 1.114-.115l1.022 1.23a1 1 0 0 0 1.332.187l.168-.114a1 1 0 0 1 1.36.224l.362.479a1 1 0 0 1-.082 1.3l-.39.4a1 1 0 0 1-.936.278l-.92-.207a1 1 0 0 0-1.215.885l-.066.727a1 1 0 0 0 .84 1.078l.75.118a2 2 0 0 1 1.353.866l.309.464a1 1 0 0 1-.32 1.414l-1.632.972a.6.6 0 0 1-.907-.498l-.026-.9a1 1 0 0 0-.488-.83l-1.907-1.136a.6.6 0 0 1-.238-.766l.381-.83a.6.6 0 0 0-.103-.656l-.748-.814a.6.6 0 0 0-.99.16l-1.2 2.676a.6.6 0 0 0 .124.67l1.594 1.594a1 1 0 0 1 .242 1.022l-.442 1.33a.3.3 0 0 1-.38.19l-7.901-2.622a2 2 0 0 1-.56-.29L1.357 15.29a.3.3 0 0 1-.121-.24L1.2 5.864a.3.3 0 0 1 .24-.295l1.588-.324a.3.3 0 0 0 .216-.411L2.767 3.71a1 1 0 0 1 .114-.984z"/>
    </svg>
  );
};
