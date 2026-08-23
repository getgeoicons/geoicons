// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtChimaltenango = ({
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
      <path strokeLinejoin="round" d="M3.693 20.935a.3.3 0 0 0 .398.337l2.778-1.014a.3.3 0 0 1 .4.244l.224 1.745a.577.577 0 0 0 1.006.306l3.03-3.473a1 1 0 0 0 .228-.46l.433-2.147a1 1 0 0 1 .577-.717l1.376-.607a1 1 0 0 0 .557-.637l1.577-5.444a1 1 0 0 1 .301-.473l1.642-1.442a.8.8 0 0 0 .269-.677l-.102-1.079a.8.8 0 0 1 .553-.838l2.12-.674a.793.793 0 0 0-.088-1.534l-4.08-.801a11 11 0 0 0-1.923-.204l-7.317-.131a1 1 0 0 0-.996.795l-.58 2.77a1 1 0 0 1-.486.666l-.877.495a1 1 0 0 0-.483.647l-.226.985a1 1 0 0 0 .052.608l.408.978a1 1 0 0 1-.055.88l-1.198 2.102a4 4 0 0 0-.515 1.689l-.381 5.203a.3.3 0 0 0 .212.309l1.13.342a.3.3 0 0 1 .207.343z"/>
    </svg>
  );
};
