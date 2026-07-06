// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cx = ({
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
      <path strokeLinejoin="round" d="M4.408 13.836 3.303 14.94a.93.93 0 1 1-1.27-1.36l1.652-1.441a1 1 0 0 0 .33-.6l.297-1.904a1 1 0 0 0-.253-.832l-.602-.654a1 1 0 0 1-.256-.807l.084-.64a.872.872 0 0 1 1.654-.256l.427.911a1 1 0 0 0 .439.46l1.273.672a1 1 0 0 0 .254.093l2.44.532a1 1 0 0 0 .407.004l2.646-.523a1 1 0 0 0 .387-.168l2.862-2.042a1 1 0 0 0 .415-.731l.068-.814a1 1 0 0 1 .17-.481l.726-1.062a.75.75 0 0 1 .89-.276l.328.127a1 1 0 0 0 .697.01l1.26-.449a.584.584 0 0 1 .77.666l-.125.62a1 1 0 0 0 .076.623l.557 1.179a1 1 0 0 1 .068.661l-.177.734a1 1 0 0 0 .09.707l.476.89a.75.75 0 0 1-.451 1.074l-1.401.407a1 1 0 0 0-.498.332L18.39 12.61a1 1 0 0 0-.21.781l.268 1.733a1 1 0 0 1-.182.745l-.808 1.1a1 1 0 0 0-.194.591v2.578a1 1 0 0 1-.783.976l-.954.212a1 1 0 0 1-.893-.24l-.539-.493a1 1 0 0 1-.318-.623l-.29-2.523a1 1 0 0 0-.137-.4l-1.075-1.79a1 1 0 0 0-.666-.468l-6.303-1.228a1 1 0 0 0-.899.275Z"/>
    </svg>
  );
};
