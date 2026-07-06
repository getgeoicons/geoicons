// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gi = ({
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
      <path strokeLinejoin="round" d="M15.861 16.913v1.774q0 .068-.018.133l-.957 3.484a.5.5 0 0 1-.278.323l-.217.098a.5.5 0 0 1-.346.023l-.629-.186a.5.5 0 0 1-.19-.104l-.378-.334a.5.5 0 0 1-.154-.254l-.143-.572a.5.5 0 0 1-.01-.19l.168-1.221a.5.5 0 0 0-.06-.313l-2.45-4.367a.5.5 0 0 1 .154-.657l.52-.357a.5.5 0 0 0 .2-.544L9.552 8.11a.5.5 0 0 0-.06-.137l-.385-.602a.5.5 0 0 0-.151-.151l-.493-.317a.5.5 0 0 0-.19-.073l-1.768-.29V3.92l2.347-1.156h2.562a.5.5 0 0 0 .5-.5V1.2h2.743a.5.5 0 0 1 .218.05l2.346 1.14-.495 2.414a.5.5 0 0 0 .11.426l.515.6a.5.5 0 0 1 .117.384l-.223 1.89a.5.5 0 0 1-.188.335l-.612.478a.5.5 0 0 0-.189.338l-.382 3.387a.5.5 0 0 0 .033.242l.695 1.737a.5.5 0 0 1-.001.374l-.704 1.73a.5.5 0 0 0-.037.188Z"/>
    </svg>
  );
};
