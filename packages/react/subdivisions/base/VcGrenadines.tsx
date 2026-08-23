// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VcGrenadines = ({
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
      <path strokeLinejoin="round" d="m9.887 15.036-5.389 5.37a1 1 0 0 0 .17 1.551l.6.382a1 1 0 0 0 1.288-.184l4.93-5.629a1 1 0 0 0-.098-1.416l-.142-.122a1 1 0 0 0-1.36.048Zm2.14-10.424.295 1.3a1 1 0 0 0 1.083.774l.323-.035a1 1 0 0 0 .779-.533l1.879-3.61a.79.79 0 0 0-1.173-1.001l-2.806 2.08a1 1 0 0 0-.38 1.025Zm4.118 3.928-.657 1.84a.885.885 0 0 0 1.633.678l.842-1.773a.98.98 0 0 0-.487-1.313.99.99 0 0 0-1.331.569Zm3.657-2.652-.424.381a.84.84 0 1 1-1.123-1.252l.425-.38a.84.84 0 0 1 1.122 1.251Z"/>
    </svg>
  );
};
