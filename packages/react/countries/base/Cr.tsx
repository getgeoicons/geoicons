// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cr = ({
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
      <path strokeLinejoin="round" d="m20.4 20.447-.624.443a.5.5 0 0 1-.783-.328l-.206-1.266a.5.5 0 0 0-.472-.42l-.448-.019a.5.5 0 0 0-.521.485l-.02.713a.5.5 0 0 1-.743.423l-1.384-.767a.5.5 0 0 1-.132-.77l.45-.506a.5.5 0 0 0 .127-.336l-.013-1.725a.5.5 0 0 0-.292-.451l-5.532-2.53a.5.5 0 0 1-.28-.345l-.435-1.95a.5.5 0 0 0-.202-.3L6.32 9a.5.5 0 0 0-.61.028l-.27.229a.5.5 0 0 0-.031.734l1.68 1.687a.5.5 0 0 1 .03.672l-.506.61a.5.5 0 0 1-.785-.019l-.99-1.32a.5.5 0 0 0-.315-.193l-1.695-.293a.5.5 0 0 1-.371-.288L1.431 8.564a.5.5 0 0 1 .12-.575l1.19-1.084a.5.5 0 0 0 0-.738L1.562 5.088a.5.5 0 0 1-.037-.7L2.82 2.921a.5.5 0 0 1 .578-.126l3.61 1.609a.5.5 0 0 0 .457-.025l1.234-.723a.5.5 0 0 1 .488-.01l4.055 2.157a.5.5 0 0 0 .52-.031l1.29-.898a.5.5 0 0 1 .72.16l2.97 5.143a.5.5 0 0 0 .126.145l3.059 2.377a.5.5 0 0 1-.213.885l-1.484.284a.5.5 0 0 0-.406.49l-.004.925a.5.5 0 0 0 .15.359l1.045 1.03a.5.5 0 0 1 .019.692l-.726.798a.5.5 0 0 0-.108.485l.387 1.244a.5.5 0 0 1-.188.556Z"/>
    </svg>
  );
};
