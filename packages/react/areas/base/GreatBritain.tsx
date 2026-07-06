// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GreatBritain = ({
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
      <path strokeLinejoin="round" d="m15.687 20.595-4.365.659a1 1 0 0 0-.257.075l-3.107 1.383a.6.6 0 0 1-.406.03l-.242-.068a.6.6 0 0 1-.213-1.047l2.59-2.064a.39.39 0 0 0-.215-.693l-1.304-.092a.6.6 0 0 1-.486-.314l-.176-.327a.6.6 0 0 1 .463-.88l.306-.034a1 1 0 0 0 .858-1.244l-.208-.807a.6.6 0 0 1 .537-.748l.592-.043a1 1 0 0 0 .92-.874l.062-.496a1 1 0 0 0-.142-.65l-.393-.636a1 1 0 0 0-.88-.473l-.734.02a.79.79 0 0 1-.784-1.006l.198-.697a1 1 0 0 0-.458-1.136l-1.199-.7a1 1 0 0 1-.49-.765L5.96 5.034a1 1 0 0 1 .22-.732l1.712-2.096a1 1 0 0 1 .535-.339l2.155-.531a.568.568 0 0 1 .456 1.02L9.949 3.1a.6.6 0 0 0-.259.558l.025.237a.6.6 0 0 0 .71.527l1.843-.354a.633.633 0 0 1 .65.966l-1.29 1.994a1 1 0 0 0 .273 1.369l.547.374a1 1 0 0 1 .418.644l.173.942a1 1 0 0 0 .27.52l1.128 1.146a1 1 0 0 1 .241.403l.692 2.215a1 1 0 0 0 .742.678l1.086.237a1 1 0 0 1 .78 1.09l-.215 1.907a1 1 0 0 1-.306.614l-1.232 1.166a1 1 0 0 1-.538.263Z"/>
    </svg>
  );
};
