// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const No = ({
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
      <path strokeLinejoin="round" d="M3.1 21.354 2.935 17.3a.5.5 0 0 1 .136-.363l4.377-4.638a.5.5 0 0 0 .082-.117l1.81-3.558a.5.5 0 0 0-.125-.61l-.33-.276A.5.5 0 0 1 8.853 7l2.99-2.975a.5.5 0 0 1 .083-.067l2.67-1.714a.5.5 0 0 1 .08-.042l2.319-.946a.5.5 0 0 1 .283-.028l2.214.425a.5.5 0 0 1 .218.1l1.163.93a.5.5 0 0 1 .188.385l.011 1.074a.5.5 0 0 1-.2.405l-.9.676a.5.5 0 0 1-.784-.274l-.17-.65a.5.5 0 0 0-.698-.325l-.562.267a.5.5 0 0 0-.272.338l-.36 1.542a.5.5 0 0 1-.52.386l-.848-.058a.5.5 0 0 1-.342-.17l-.517-.59a.5.5 0 0 0-.668-.077l-2.642 1.9a.5.5 0 0 0-.184.25l-1.991 6.095a.5.5 0 0 1-.184.25l-.741.533a.5.5 0 0 0-.208.376l-.096 1.605a.5.5 0 0 0 .063.274l.637 1.142a.5.5 0 0 1 .039.4l-.797 2.433a.5.5 0 0 1-.357.33l-.942.23a.5.5 0 0 0-.203.103l-1.238 1.04a.5.5 0 0 1-.574.05l-1.465-.858a.5.5 0 0 1-.247-.41Z"/>
    </svg>
  );
};
