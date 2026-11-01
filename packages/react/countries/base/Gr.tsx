// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gr = ({
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
      <path strokeLinejoin="round" d="m5.49 5.438 8.892-2.482a2 2 0 0 1 1.115.012l2.028.612a2 2 0 0 0 .902.059l1.178-.194a.6.6 0 0 0 .502-.617l-.023-.552a.6.6 0 0 1 .894-.547l.863.486a.6.6 0 0 1 .306.51l.016.779a1 1 0 0 1-.183.597l-1.121 1.588a1 1 0 0 1-.974.412l-3.472-.552a2 2 0 0 0-1.283.226l-.722.4a.93.93 0 0 0-.468.937.926.926 0 0 1-.663 1.018l-.5.143a1 1 0 0 1-.896-.177l-.454-.36a1 1 0 0 0-1.539.39l-.062.144a1 1 0 0 0 .07.924l2.12 3.401a2 2 0 0 0 1.235.888l1.032.245a1 1 0 0 1 .628.462l.845 1.418a1 1 0 0 1-.198 1.263l-.607.535a1 1 0 0 1-1.308.012l-.563-.477a.915.915 0 0 0-1.4 1.126l.314.591a.6.6 0 0 1-.157.75l-.639.51a.6.6 0 0 0-.186.685l.641 1.657a.3.3 0 0 1-.353.399l-3.78-.95a1 1 0 0 1-.745-.813l-.234-1.474a1 1 0 0 0-.252-.522l-1.205-1.305a1 1 0 0 1-.237-.916l.222-.908a1 1 0 0 0-.143-.798L2.06 10.737a.6.6 0 0 1 0-.673l2.872-4.225a1 1 0 0 1 .558-.401Z"/>
    </svg>
  );
};
