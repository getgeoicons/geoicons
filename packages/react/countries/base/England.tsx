// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const England = ({
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
      <path strokeLinejoin="round" d="m5.274 20.466-1.1.798a.735.735 0 0 0 .25 1.307l.393.1a1 1 0 0 0 .895-.205l1.065-.904a1 1 0 0 1 .739-.233l.794.074a1 1 0 0 0 .903-.41l.393-.544a1 1 0 0 1 .709-.409l7.35-.748a1 1 0 0 0 .408-.135l1.776-1.052a.5.5 0 0 0 .23-.313l.134-.55a.5.5 0 0 0-.595-.605l-.4.09a.718.718 0 0 1-.645-1.228l1.505-1.397a1 1 0 0 0 .318-.677l.052-.94a1 1 0 0 0-.237-.703l-.31-.365a1 1 0 0 0-.642-.345l-.262-.032a1 1 0 0 0-.906.376l-.493.628a.5.5 0 0 1-.708.08l-.528-.43a.5.5 0 0 1-.058-.72l.333-.374a1 1 0 0 0 .183-1.035l-1.295-3.26a1 1 0 0 0-.662-.593l-.712-.198a1 1 0 0 1-.698-.706l-.62-2.331a1 1 0 0 0-.428-.585l-.564-.362a.5.5 0 0 0-.736.241l-.636 1.65a1 1 0 0 1-.331.438l-.91.686a1 1 0 0 0-.316.404l-.4.932a.5.5 0 0 0 .134.578l.974.83a1 1 0 0 1 .352.758l.016 6.236a1 1 0 0 0 .303.714l.413.402a1 1 0 0 1 .198 1.164l-.378.756a1 1 0 0 1-.85.551l-2.113.096a1 1 0 0 0-.775.428l-1.279 1.834a1 1 0 0 1-.233.238Z"/>
    </svg>
  );
};
