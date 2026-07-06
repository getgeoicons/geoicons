// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gm = ({
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
      <path strokeLinejoin="round" d="m2.522 14.337-.737.819a.25.25 0 0 1-.435-.152l-.137-2.277a.5.5 0 0 1 .126-.363l1.635-1.832a.5.5 0 0 1 .373-.167l7.225.009a.5.5 0 0 0 .491-.404l.157-.802a.5.5 0 0 1 .423-.4l2.483-.338a.5.5 0 0 1 .39.114L16.05 9.84a.5.5 0 0 0 .291.117l.994.062a.5.5 0 0 1 .333.157l.954 1.016a.5.5 0 0 0 .51.136l2.302-.705a.5.5 0 0 1 .602.272l.534 1.178a.5.5 0 0 1-.298.681l-3.424 1.13a.5.5 0 0 1-.419-.049l-4.746-2.918a.5.5 0 0 0-.678.149l-.872 1.31a.5.5 0 0 1-.422.222l-2.836-.034a.5.5 0 0 0-.506.504l.005.587a.5.5 0 0 1-.499.504l-4.983.013a.5.5 0 0 0-.37.165Z"/>
    </svg>
  );
};
