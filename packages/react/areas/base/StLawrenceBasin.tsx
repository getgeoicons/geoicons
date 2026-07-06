// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const StLawrenceBasin = ({
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
      <path strokeLinejoin="round" d="m3.845 8.487-.682.897a1 1 0 0 1-.796.394h-.265a.803.803 0 0 0-.709 1.178l.192.363a1 1 0 0 0 .878.532l2.329.013a.6.6 0 0 1 .585.715l-.4 2.038a.6.6 0 0 0 .499.708l.488.075a1 1 0 0 1 .783.633l.551 1.448a1 1 0 0 0 .684.612l2.853.739a1 1 0 0 0 .68-.065l2.212-1.053c.15-.072.28-.18.378-.315l.986-1.355a1 1 0 0 1 1.16-.348l.356.133a1 1 0 0 0 .952-.137l.94-.706a1 1 0 0 0 .322-.414l.524-1.252a1 1 0 0 1 1.113-.596l.21.04a1 1 0 0 0 1.15-.7l.62-2.122a1 1 0 0 0-.925-1.28l-.113-.004a1 1 0 0 1-.93-1.261l.03-.116a1 1 0 0 0-.12-.795l-.297-.472a1 1 0 0 0-.74-.46l-.85-.09a1 1 0 0 0-1.095.853l-.021.146a1 1 0 0 1-.448.699l-.418.27a1 1 0 0 1-1.211-.098l-.167-.15a1 1 0 0 0-1.232-.082l-.68.463a1 1 0 0 0-.215.199l-.58.72a1 1 0 0 1-.695.37l-.836.07a1 1 0 0 1-.832-.331L8.417 6.74a1 1 0 0 0-.308-.234L5.813 5.383a1 1 0 0 0-1.13.175l-.53.506a1 1 0 0 0-.282.957l.15.628a1 1 0 0 1-.176.838Z"/>
    </svg>
  );
};
