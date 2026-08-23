// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsCentralAbaco = ({
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
      <path strokeLinejoin="round" d="m10.198 22.411-.909-1.407a1 1 0 0 1-.073-.95l.776-1.735a1 1 0 0 0-.026-.872l-.597-1.14a1 1 0 0 1-.065-.772l1.495-4.623a1 1 0 0 1 .545-.606l1.31-.582a1 1 0 0 0 .593-.945l-.01-.316a1 1 0 0 0-.6-.886l-1.111-.484a3 3 0 0 0-1.233-.249l-2.603.03a2 2 0 0 1-1.07-.295L3.978 4.958a1 1 0 0 1-.471-.748l-.073-.685a1 1 0 0 1 .351-.87l1.107-.931a.6.6 0 0 1 .94.226l.053.128A3 3 0 0 0 7.032 3.44l1.695 1.084a3 3 0 0 0 1.825.466l1.18-.083a1 1 0 0 1 .709.228l2.354 1.952a3 3 0 0 0 1.915.69h.576a.6.6 0 0 1 .598.552l.164 2.005a1 1 0 0 1-.19.673l-.203.276a3 3 0 0 0-.58 1.719l-.003.156a3 3 0 0 0 .147.986l.059.18a3 3 0 0 0 1.714 1.846l.535.22a.727.727 0 0 1-.193 1.395l-.295.034a.803.803 0 1 0 .207 1.591l.43-.062a.6.6 0 0 1 .659.774l-.292.926a1 1 0 0 1-.538.608l-1.062.486a1 1 0 0 1-1.208-.3l-.35-.452a1 1 0 0 0-1.103-.34l-4.893 1.606a.6.6 0 0 1-.691-.245Z"/>
    </svg>
  );
};
