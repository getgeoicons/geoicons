// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoBahoruco = ({
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
      <path strokeLinejoin="round" d="M15.808 17.65a.6.6 0 0 0 .61-.826l-.347-.84a.6.6 0 0 1 .192-.707l3.717-2.817a2 2 0 0 1 1.274-.405l.641.021a.78.78 0 0 0 .235-1.532l-3.807-1.058a1 1 0 0 1-.596-.46l-.68-1.17a1 1 0 0 0-.826-.495l-4.156-.159a1 1 0 0 0-.696.247l-.723.631a1 1 0 0 1-.963.2L3.866 6.415a1 1 0 0 0-.895.145l-.588.43A1 1 0 0 0 2 7.56l-.674 2.755a.6.6 0 0 0 .376.705l4.34 1.6a1 1 0 0 1 .642 1.099l-.004.025a1 1 0 0 0 .384.959L8.49 15.78a.8.8 0 0 0 .812.09l2.326-1.05a.8.8 0 0 1 .976.258l1.512 2.077a1 1 0 0 0 .718.407z"/>
    </svg>
  );
};
