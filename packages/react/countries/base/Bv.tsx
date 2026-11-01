// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bv = ({
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
      <path strokeLinejoin="round" d="m1.602 8.868.708-.889a2 2 0 0 1 1.5-.753l2.148-.07a4 4 0 0 0 1.046-.174l3.036-.935a1 1 0 0 0 .672-.698l.192-.722a.6.6 0 0 1 1.034-.238l.705.815a1 1 0 0 0 .803.344l1.314-.061a3 3 0 0 1 1.359.255l2.546 1.132a3 3 0 0 1 1.147.896l2.035 2.608c.19.243.341.515.448.805l.268.724a2 2 0 0 1 .031 1.295l-1.004 3.184c-.107.34-.274.658-.493.94l-.274.351a3 3 0 0 1-2.008 1.137l-3.966.478a2 2 0 0 1-.637-.026l-1.517-.308a2 2 0 0 0-1.292.171L9.19 20.235a2 2 0 0 1-.983.21l-1.402-.064a1 1 0 0 1-.912-.707l-.266-.875a1 1 0 0 0-.268-.434L2.963 16.09a3 3 0 0 1-.713-1.045l-.328-.804a3 3 0 0 1-.202-1.478l.19-1.638a1 1 0 0 0-.104-.572l-.311-.606a1 1 0 0 1 .107-1.08Z"/>
    </svg>
  );
};
