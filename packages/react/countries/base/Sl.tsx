// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sl = ({
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
      <path strokeLinejoin="round" d="m3.279 7.802-1.259.014a.5.5 0 0 0-.468.661l.835 2.457a.5.5 0 0 1-.055.434l-.345.527a.5.5 0 0 0-.051.446l.456 1.242a.5.5 0 0 0 .544.323l.687-.105a.5.5 0 0 1 .572.433l.158 1.29a.5.5 0 0 0 .158.306l1.007.927a.5.5 0 0 1-.161.836l-1.26.478 9.849 4.525a.5.5 0 0 0 .658-.237l.85-1.751a.5.5 0 0 1 .139-.174L20.05 16.9a.5.5 0 0 0 .182-.303l.244-1.348a.5.5 0 0 1 .334-.385l1.506-.502a.5.5 0 0 0 .341-.49l-.05-1.493a.5.5 0 0 0-.836-.353l-.96.879a.5.5 0 0 1-.592.061l-.355-.21a.5.5 0 0 1-.143-.734l1.19-1.556a.5.5 0 0 0 .094-.399l-.31-1.596a.5.5 0 0 0-.305-.368l-.653-.261a.5.5 0 0 1-.298-.593l.297-1.122a.5.5 0 0 0-.089-.436l-3.282-4.2a.5.5 0 0 0-.383-.192l-4.434-.098a.5.5 0 0 0-.137.015l-3.75.975a.5.5 0 0 0-.335.287l-1.092 2.55a.5.5 0 0 1-.247.255l-1.449.682a.5.5 0 0 0-.245.251l-.562 1.285a.5.5 0 0 1-.452.3Z"/>
    </svg>
  );
};
