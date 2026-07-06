// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bo = ({
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
      <path strokeLinejoin="round" d="m2.589 13.534 2.486 8.46a.5.5 0 0 0 .797.246l1.154-.945a.5.5 0 0 1 .37-.11l1.918.205a.5.5 0 0 1 .308.152l1.007 1.053a.25.25 0 0 0 .375-.014l.911-1.117a.5.5 0 0 1 .376-.183l.81-.018a.5.5 0 0 0 .463-.34l1.152-3.404a.5.5 0 0 1 .387-.333l3.385-.595a.5.5 0 0 1 .346.065l1.318.8a.25.25 0 0 0 .362-.12l.855-2.126a.5.5 0 0 0-.092-.522l-1.05-1.166a.5.5 0 0 1-.128-.344l.018-.947a.5.5 0 0 0-.485-.509l-2.094-.064a.5.5 0 0 1-.483-.451l-.3-3.108a.5.5 0 0 0-.29-.406L9.627 4.545a.5.5 0 0 1-.29-.445L9.29 1.735a.5.5 0 0 0-.544-.488l-1.094.096a.5.5 0 0 0-.244.089L5.551 2.735a.5.5 0 0 1-.228.087l-2.35.282a.25.25 0 0 0-.186.375l1.155 1.945a.5.5 0 0 1 .048.402L2.92 9.314a.5.5 0 0 0 .03.37l.806 1.612a.5.5 0 0 1-.06.54l-1.015 1.24a.5.5 0 0 0-.092.458Z"/>
    </svg>
  );
};
