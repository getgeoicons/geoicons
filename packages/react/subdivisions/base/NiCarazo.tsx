// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiCarazo = ({
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
      <path strokeLinejoin="round" d="M3.49 12.607a1 1 0 0 0 .398.68l2.167 1.6q.218.161.403.358l1.833 1.95c.287.305.62.563.986.764l3.482 1.917 3.435 2.542a.6.6 0 0 0 .862-.159l2.472-3.861a1 1 0 0 0 .085-.915l-.696-1.716a3 3 0 0 1-.212-1.341l.022-.302a1 1 0 0 1 .844-.917l.637-.099a.6.6 0 0 0 .508-.591l.011-5.075a.6.6 0 0 0-.504-.594l-2.239-.362a1 1 0 0 1-.832-.86l-.28-2.175a1 1 0 0 0-.736-.84l-5.003-1.317a.6.6 0 0 0-.601.182l-1.49 1.68a4 4 0 0 0-.643.988L6.495 8.299a2 2 0 0 1-.68.812L3.77 10.526a1 1 0 0 0-.423.948z"/>
    </svg>
  );
};
