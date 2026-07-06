// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Oceania = ({
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
      <path strokeLinejoin="round" d="m6.589 13.879-3.673 1.227a.88.88 0 0 1-1.154-.898l.05-.69a1 1 0 0 0-.069-.447l-.452-1.124a1 1 0 0 1-.067-.47l.077-.79a1 1 0 0 1 .71-.862l1.361-.405a1 1 0 0 0 .496-.333l1.195-1.493a.5.5 0 0 1 .555-.16l.406.141a.5.5 0 0 0 .55-.153l.773-.937a.5.5 0 0 1 .482-.172l.741.145a.455.455 0 0 1 .292.699.546.546 0 0 0 .187.78l.65.362a.5.5 0 0 0 .73-.323l.494-2.136 1.315 3.116a.5.5 0 0 0 .099.15l1.81 1.902a1 1 0 0 1 .26.504l.164.873a1 1 0 0 1-.044.529l-1.06 2.897a1 1 0 0 1-.667.62l-.844.238a1 1 0 0 1-.5.011l-.762-.18a.94.94 0 0 1-.689-.659.94.94 0 0 0-.647-.649l-.586-.166a1 1 0 0 1-.397-.22l-.8-.721a1 1 0 0 0-.986-.206Zm6.078 4.487-.71.08a.5.5 0 0 0-.417.659l.264.772a.5.5 0 0 0 .521.336l.348-.033a.5.5 0 0 0 .449-.439l.097-.819a.5.5 0 0 0-.552-.556ZM10.491 4.337 10.47 2.12l2.127.522a.5.5 0 0 1 .285.191l1.645 2.258-2.47-.956a.5.5 0 0 0-.268-.027zM19.089 22.7l-.619-.165a.6.6 0 0 1-.305-.964l1.91-2.284a.6.6 0 0 0 .096-.607l-.422-1.055a.578.578 0 0 1 .894-.668l1.784 1.404a.6.6 0 0 1 .011.934l-1.221 1.01a1 1 0 0 0-.197.22l-1.276 1.927a.6.6 0 0 1-.655.249Z"/>
    </svg>
  );
};
