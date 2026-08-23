// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoPedernales = ({
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
      <path strokeLinejoin="round" d="M6.768 1.532a.6.6 0 0 0-.844.243L4.682 4.217a1 1 0 0 0 .033.965l.965 1.622a1 1 0 0 1 .092.82l-.314.968a1 1 0 0 0 .444 1.17l1.476.87a1 1 0 0 1 .493.885l-.03 1.309a2 2 0 0 0 .257 1.03l.624 1.104a1 1 0 0 1-.274 1.294l-.743.554a.755.755 0 0 0 .565 1.353l1.739-.265a2.84 2.84 0 0 1 3.14 1.966l.104.332a4 4 0 0 0 .636 1.236l.822 1.081a.676.676 0 0 0 1.14-.102l1.17-2.3q.2-.395.278-.83l.257-1.424a2 2 0 0 1 .449-.947l1.332-1.556a.6.6 0 0 0 .106-.6l-.521-1.396a.6.6 0 0 0-.428-.375l-1.586-.365a2 2 0 0 1-.867-.443l-.704-.615a1 1 0 0 1-.124-1.376l.687-.862a1 1 0 0 0 .217-.578l.07-1.53a1 1 0 0 0-.38-.83l-2.492-1.97a2 2 0 0 0-1.002-.415l-1.386-.167a2 2 0 0 1-.793-.272z"/>
    </svg>
  );
};
