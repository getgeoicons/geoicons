// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Py = ({
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
      <path strokeLinejoin="round" d="m14.007 17.243-2.278 4.234a.5.5 0 0 0 .394.735l6.002.565a.5.5 0 0 0 .415-.16l2.216-2.412a.5.5 0 0 0 .123-.244l1.172-6.139a.5.5 0 0 0-.518-.593l-1.83.099a.5.5 0 0 1-.515-.396l-.775-3.646a.5.5 0 0 0-.446-.394l-4.094-.355a.5.5 0 0 1-.455-.453l-.441-4.926a.5.5 0 0 0-.208-.362l-2.071-1.48a.5.5 0 0 0-.36-.088l-6.023.85a.5.5 0 0 0-.407.345L1.921 8.729a.5.5 0 0 0 .126.505l3.61 3.569q.063.062.144.099l7.974 3.65a.5.5 0 0 1 .232.69Z"/>
    </svg>
  );
};
