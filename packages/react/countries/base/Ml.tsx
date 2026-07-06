// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ml = ({
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
      <path strokeLinejoin="round" d="m2.254 15.03-.836.799a.5.5 0 0 0-.136.498l.844 2.977a.5.5 0 0 0 .542.36l2.447-.304a.5.5 0 0 1 .51.276l1.144 2.33a.5.5 0 0 0 .508.275l2.585-.304a.5.5 0 0 0 .405-.31l1.326-3.286a.5.5 0 0 1 .23-.256l4.481-2.363a.5.5 0 0 1 .2-.056l4.994-.34a.5.5 0 0 0 .395-.242l.736-1.225a.5.5 0 0 0 .07-.243l.085-2.88a.5.5 0 0 0-.513-.514l-.828.023a.5.5 0 0 1-.514-.503l.004-.506a.5.5 0 0 0-.206-.408L11.1 1.827a.5.5 0 0 0-.291-.096l-1.514-.01a.5.5 0 0 0-.5.558l1.396 12.008a.5.5 0 0 1-.493.558l-7.103.047a.5.5 0 0 0-.342.138Z"/>
    </svg>
  );
};
