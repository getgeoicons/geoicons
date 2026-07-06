// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Hn = ({
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
      <path strokeLinejoin="round" d="m2.013 10.23.028.888a.5.5 0 0 1-.09.302L1.2 12.494l2.728 1.747a.5.5 0 0 0 .344.074l1.942-.294a.5.5 0 0 1 .569.572l-.123.78a.5.5 0 0 0 .155.446l1.297 1.195a.5.5 0 0 0 .337.132l.613.004a.5.5 0 0 0 .347-.138l.743-.705a.5.5 0 0 0 .153-.421l-.123-1.039a.5.5 0 0 1 .276-.507l1.56-.768a.5.5 0 0 1 .521.048l.558.419a.5.5 0 0 0 .68-.075l2.302-2.682a.5.5 0 0 1 .58-.132l1.082.474a.5.5 0 0 0 .33.025L22.8 10.39l-1.632-1.167a.5.5 0 0 0-.183-.081l-1.396-.31a.5.5 0 0 1-.232-.12L18.27 7.703a.5.5 0 0 0-.206-.115l-2.106-.584a.5.5 0 0 0-.29.007l-1.094.362a.5.5 0 0 1-.322-.003l-1.258-.44a.5.5 0 0 0-.438.052l-1.08.703a.5.5 0 0 1-.325.079L6.677 7.29a.5.5 0 0 0-.307.067L2.258 9.784a.5.5 0 0 0-.245.447Z"/>
    </svg>
  );
};
