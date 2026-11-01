// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bw = ({
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
      <path strokeLinejoin="round" d="m1.645 11.391.027 5.85a1 1 0 0 0 .19.581l1.479 2.043a1 1 0 0 1 .168.792l-.26 1.236a.6.6 0 0 0 .715.71l2.05-.446a1 1 0 0 0 .693-.552l1.102-2.344a1 1 0 0 1 .826-.571l.164-.013a1 1 0 0 1 .713.224l.797.653a2 2 0 0 0 1.289.453l1.443-.015a1 1 0 0 0 .922-.637l.587-1.505a1 1 0 0 1 .423-.498l1.32-.78a1 1 0 0 0 .461-.618L17 14.97a1 1 0 0 1 .465-.62l4.175-2.45a.6.6 0 0 0 .092-.968l-.425-.373a1 1 0 0 0-.424-.22l-1.161-.282a1 1 0 0 1-.711-.65l-.49-1.441a2 2 0 0 0-.735-.986l-2.247-1.597a2 2 0 0 1-.66-.796l-1.112-2.425a1 1 0 0 0-1.377-.467L9.93 2.996a.3.3 0 0 1-.405-.125l-.502-.95a.3.3 0 0 0-.314-.156l-4.387.72a.3.3 0 0 0-.252.299l.075 8.007a.3.3 0 0 1-.3.303l-1.9-.004a.3.3 0 0 0-.3.301Z"/>
    </svg>
  );
};
