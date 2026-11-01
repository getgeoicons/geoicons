// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BqBonaire = ({
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
      <path d="m8.431 2.555.466.71a4 4 0 0 0 1.255 1.217l2.872 1.76a8 8 0 0 0 2.269.947l.994.244a7 7 0 0 0 1.303.193l1.48.078a1 1 0 0 1 .501.167l.1.066a1 1 0 0 1 .423 1.041l-.025.116a1 1 0 0 1-.104.276l-.447.806a2 2 0 0 0-.096 1.746l.724 1.722a2 2 0 0 1 .14 1.025l-.009.072a2 2 0 0 1-.453 1.036l-.481.573a.6.6 0 0 1-.967-.066l-.285-.452a.866.866 0 0 0-1.598.483l.017.68a1 1 0 0 0 .488.836l.212.126a1 1 0 0 1 .48.722l.21 1.51a3 3 0 0 1-.107 1.306l-.152.486a1 1 0 0 1-.79.689l-.256.042a1 1 0 0 1-.892-.3l-1.61-1.704a1 1 0 0 1-.273-.687v-.901c0-.363-.065-.722-.193-1.061l-.527-1.395a1 1 0 0 1 .166-.993l.46-.555a2 2 0 0 0 .416-1.702l-.044-.204a2 2 0 0 0-.18-.498l-.767-1.476a5 5 0 0 0-1.425-1.685l-.103-.078a5 5 0 0 0-1.647-.82l-.905-.256a5 5 0 0 0-1.31-.19l-1.886-.02a2 2 0 0 1-.807-.18l-.038-.018a2 2 0 0 1-1.111-1.333l-.09-.353a4 4 0 0 1-.089-1.474l.068-.537a3 3 0 0 1 .276-.932l.235-.486a3 3 0 0 1 .707-.935l.387-.344a1 1 0 0 1 1.004-.193l1.02.368a2 2 0 0 1 .994.785Zm1.704 11.435.745.007a.939.939 0 0 0 .162-1.865l-.736-.121a.996.996 0 1 0-.171 1.979Z"/>
    </svg>
  );
};
