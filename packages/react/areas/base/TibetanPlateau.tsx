// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TibetanPlateau = ({
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
      <path strokeLinejoin="round" d="m1.338 10.637-.101 1.806a1 1 0 0 0 .543.947l5.7 2.914a1 1 0 0 0 .624.095l1.288-.22q.154-.025.309-.004l1.845.262a1 1 0 0 0 .745-.194l1.171-.889a1 1 0 0 1 1.336.115l.152.162a1 1 0 0 0 .87.309l1.082-.152a1 1 0 0 1 1.018.513l.734 1.352a1 1 0 0 0 1.257.45l.182-.075a1 1 0 0 0 .577-.63l.33-1.069a1 1 0 0 0-.145-.882l-.648-.896a1 1 0 0 1-.044-1.108l.337-.55a1 1 0 0 1 .493-.412l1.376-.531a.631.631 0 0 0 .125-1.112l-1.95-1.313a1 1 0 0 1-.402-.552l-.423-1.464a1 1 0 0 0-.416-.56l-1.231-.8a1 1 0 0 0-.606-.16l-1.849.113a1 1 0 0 1-.332-.036l-1.548-.437a1 1 0 0 0-.502-.01l-2.173.515a.6.6 0 0 0-.443.733l.236.923a.6.6 0 0 1-.658.744l-1.821-.235a1 1 0 0 0-.559.089l-1.631.779a1 1 0 0 1-.475.096l-2.653-.117a1 1 0 0 0-.673.222l-.677.548a1 1 0 0 0-.37.72Z"/>
    </svg>
  );
};
