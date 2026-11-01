// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gd = ({
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
      <path strokeLinejoin="round" d="m4.537 21.88 1.48-1.36a1 1 0 0 0 .319-.837L6.11 17.45a2 2 0 0 1 .233-1.154l.821-1.513a4 4 0 0 1 .944-1.156l1.13-.948a2 2 0 0 1 1.423-.464l.902.063a1 1 0 0 1 .93 1.053l-.203 3.61a2 2 0 0 1-.148.65l-1.193 2.893a2 2 0 0 1-.851.971l-1.726.993a2 2 0 0 1-1.31.242l-2.395-.38a.25.25 0 0 1-.13-.43ZM15.975 3.67l.784-.264a1 1 0 0 0 .626-.624l.264-.772a1.006 1.006 0 0 1 1.126-.66c.572.1.948.667.806 1.23l-.42 1.666a1 1 0 0 1-.576.675l-1.923.824a1 1 0 0 1-1.386-1.05l.028-.207a1 1 0 0 1 .67-.817Z"/>
    </svg>
  );
};
