// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dm = ({
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
      <path strokeLinejoin="round" d="m13.64 22.695-1.527.258a.5.5 0 0 1-.553-.323L5.879 6.907a.5.5 0 0 1 .082-.485l1.292-1.587a.5.5 0 0 0 .108-.38l-.374-2.89A.5.5 0 0 1 7.502 1l1.646.064a.5.5 0 0 1 .407.238L10.69 3.15a.5.5 0 0 0 .358.233l3.527.488a.5.5 0 0 1 .362.24l3.138 5.316a.5.5 0 0 1 .01.49l-.883 1.656a.5.5 0 0 0-.048.338l.995 4.719a.5.5 0 0 1 0 .21l-.811 3.69a.5.5 0 0 1-.474.392l-1.844.056a.5.5 0 0 0-.432.276l-.585 1.17a.5.5 0 0 1-.364.27Z"/>
    </svg>
  );
};
