// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ws = ({
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
      <path strokeLinejoin="round" d="m5.089 12.907-3.602-3.97a.5.5 0 0 1-.019-.65l.313-.387a.5.5 0 0 1 .556-.158l.735.26a.5.5 0 0 0 .287.015l3.866-.955a.5.5 0 0 1 .153-.013l1.57.103a.5.5 0 0 1 .387.228l1.891 2.94a.5.5 0 0 1 .047.448l-.751 1.97a.5.5 0 0 1-.659.283l-1-.414a.5.5 0 0 0-.27-.031l-3.055.488a.5.5 0 0 1-.45-.158Zm7.665.293-.44.51a.5.5 0 0 0 .066.718l1.986 1.58a.5.5 0 0 0 .41.1l.934-.187a.5.5 0 0 1 .402.093l.883.678a.5.5 0 0 0 .289.103l4.749.15a.5.5 0 0 0 .48-.316l.148-.373a.5.5 0 0 0-.162-.581l-2.436-1.858a.5.5 0 0 0-.13-.071l-3.747-1.389a.5.5 0 0 0-.291-.017l-2.881.701a.5.5 0 0 0-.26.16Z"/>
    </svg>
  );
};
