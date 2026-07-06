// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Nz = ({
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
      <path strokeLinejoin="round" d="M7.646 22.656 4.694 21.39a.5.5 0 0 1-.132-.836l5.414-4.75a.5.5 0 0 0 .117-.152l1.528-3.055a.5.5 0 0 1 .568-.262l1.316.33a.5.5 0 0 1 .369.386l.152.761a.5.5 0 0 1-.076.379l-1.033 1.524a.5.5 0 0 0-.08.204l-.218 1.405a.5.5 0 0 1-.308.387l-1.702.685a.5.5 0 0 0-.301.355l-.375 1.687a.5.5 0 0 1-.109.218l-1.602 1.865a.5.5 0 0 1-.576.134Zm8.327-9.821-.414-.132a.5.5 0 0 1-.338-.577l.186-.9a.5.5 0 0 0-.23-.529l-1.203-.733a.5.5 0 0 1-.169-.684l1.046-1.751a.5.5 0 0 0 .008-.5l-2.62-4.698a.5.5 0 0 1 .214-.691l.458-.229a.5.5 0 0 1 .657.198l2.999 5.215a.5.5 0 0 0 .24.212l.774.324a.5.5 0 0 0 .54-.102l.43-.416a.5.5 0 0 1 .458-.128l.507.114a.5.5 0 0 1 .37.627l-.26.897a.5.5 0 0 1-.19.27l-1.414.998a.5.5 0 0 0-.164.197l-1.28 2.752a.5.5 0 0 1-.605.266Z"/>
    </svg>
  );
};
