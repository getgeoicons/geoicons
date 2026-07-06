// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ne = ({
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
      <path strokeLinejoin="round" d="M6.746 17.954 6.3 19.865a.5.5 0 0 1-.597.374l-.948-.215a.5.5 0 0 1-.276-.17l-2.7-3.275a.5.5 0 0 1 .324-.815l3.508-.435a.5.5 0 0 0 .394-.29l.863-1.906a.5.5 0 0 0 .044-.207V9.9l2.019-.42a.5.5 0 0 0 .237-.121l2.04-1.88a.5.5 0 0 1 .071-.055l5.703-3.625a.5.5 0 0 1 .479-.031L19.898 4.9a.5.5 0 0 0 .393.013l1.101-.431.186 1.923a.5.5 0 0 0 .096.25L22.8 8.172l-.535 1.168a.5.5 0 0 0-.044.19l-.14 3.679a.5.5 0 0 1-.111.296l-3.777 4.647a.5.5 0 0 1-.488.175l-1.83-.373a.5.5 0 0 0-.335.05l-1.163.623a.5.5 0 0 1-.317.053l-6.747-1.106a.5.5 0 0 0-.567.38Z"/>
    </svg>
  );
};
