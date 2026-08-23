// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiGranada = ({
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
      <path strokeLinejoin="round" d="M16.86 1.803a1 1 0 0 0-.923-.598l-2.276.016a1 1 0 0 0-.5.137L10.4 2.978a.6.6 0 0 0-.11.952l.958.915a1 1 0 0 1 .293.902l-.418 2.298a1 1 0 0 1-.27.521l-.934.953a1 1 0 0 0-.21 1.083l.172.413a1 1 0 0 1-.355 1.206L7.77 13.432a1 1 0 0 0-.432.843l.08 4.06a.6.6 0 0 1-.494.602l-.562.1a.6.6 0 0 0-.495.611l.027.778a2 2 0 0 0 .287.966l.544.9a1 1 0 0 0 .9.482l1.062-.046a2 2 0 0 0 1.01-.326l4.671-3.064a1 1 0 0 1 .595-.163l2.02.093a1 1 0 0 0 1.045-1.022l-.017-.735a1 1 0 0 0-.861-.967l-1.948-.273a1 1 0 0 1-.8-.647l-1.516-4.146a3 3 0 0 1-.099-1.734l.494-2.046a2 2 0 0 1 .303-.674l.427-.612a2 2 0 0 1 1.08-.776l2.402-.702a.6.6 0 0 0 .381-.817z"/>
    </svg>
  );
};
