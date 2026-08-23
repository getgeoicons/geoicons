// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AgRedonda = ({
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
      <path strokeLinejoin="round" d="M8.324 17.35 6.83 20.775a1 1 0 0 0 .27 1.163l.017.014a2 2 0 0 0 1.327.474l1.102-.018a3 3 0 0 0 1.13-.242l.203-.087a2.66 2.66 0 0 0 1.6-2.192l.051-.54a1 1 0 0 1 .492-.77l.609-.355a2.87 2.87 0 0 0 1.426-2.525l-.029-1.942a2 2 0 0 1 .133-.747l.481-1.253a2 2 0 0 0 .128-.577l.248-3.54a2 2 0 0 1 .37-1.026l.51-.708a2.28 2.28 0 0 0-.22-2.923l-.112-.114a2.6 2.6 0 0 0-1.284-.72l-1.76-.401a2 2 0 0 0-1.5.25l-.739.459c-.43.267-.818.598-1.149.982l-.34.395a5 5 0 0 0-1.04 1.957l-.262.962a5 5 0 0 0-.16.935l-.405 5.382a2 2 0 0 0 .077.719l.448 1.512a3 3 0 0 1-.127 2.053Z"/>
    </svg>
  );
};
