// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Kr = ({
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
      <path strokeLinejoin="round" d="m9.166 3.113-2.32 2.148a.5.5 0 0 0-.13.539l.9 2.462a.5.5 0 0 1-.178.577l-1.99 1.435a.5.5 0 0 0-.143.652l1.832 3.233a.5.5 0 0 1 .023.45L5.844 17.58a.5.5 0 0 0-.038.265l.207 1.656a.5.5 0 0 1-.042.27l-.797 1.745a.5.5 0 0 0 .272.673l1.404.552a.5.5 0 0 0 .3.021l2.84-.679a.5.5 0 0 0 .165-.072l2.917-1.984a.5.5 0 0 1 .448-.058l1.302.459a.5.5 0 0 0 .602-.226l.637-1.127a.5.5 0 0 1 .28-.229l1.514-.494a.5.5 0 0 0 .33-.352l.806-3.155a.5.5 0 0 0-.064-.395l-.68-1.052a.5.5 0 0 1-.066-.39l.452-1.847a.5.5 0 0 0 .002-.23l-.6-2.636a.5.5 0 0 0-.047-.126l-3.75-6.97-1.663 1.65a.5.5 0 0 1-.355.145L9.508 2.98a.5.5 0 0 0-.342.133Z"/>
    </svg>
  );
};
