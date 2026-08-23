// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HtSudEst = ({
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
      <path strokeLinejoin="round" d="M2.161 9.67a.6.6 0 0 0-.73.53l-.186 2.067a.6.6 0 0 0 .44.632l1.654.453a2 2 0 0 0 1.056 0l1.984-.545a2 2 0 0 1 .79-.054l1.176.154a.6.6 0 0 0 .627-.352l.299-.676a.6.6 0 0 1 .571-.357l6.661.25a4 4 0 0 1 1.706.453l.48.25a4 4 0 0 1 1.183.943l1.472 1.72a.6.6 0 0 0 1.032-.224l.118-.405a1 1 0 0 0-.046-.683l-.442-.998a1 1 0 0 1-.008-.789l.51-1.222a.6.6 0 0 0-.46-.823l-11.66-1.873a2 2 0 0 0-1.223.191l-3.687 1.872a1 1 0 0 1-.673.083z"/>
    </svg>
  );
};
