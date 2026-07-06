// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mg = ({
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
      <path strokeLinejoin="round" d="m16.727 7.89-3.924 13.264a.5.5 0 0 1-.259.307l-2.468 1.215a.5.5 0 0 1-.489-.027l-1.833-1.166a.5.5 0 0 1-.224-.335l-.319-1.815-.022-.082-.746-2.08a.5.5 0 0 1 .045-.432l1.86-2.992a.5.5 0 0 0 .063-.376l-.787-3.436a.5.5 0 0 1 .019-.285l.646-1.748a.5.5 0 0 1 .282-.291l3.505-1.41a.5.5 0 0 0 .226-.181l3.038-4.425a.25.25 0 0 1 .44.053l1.765 4.678a.5.5 0 0 1-.063.469l-.681.943a.5.5 0 0 0-.074.151Z"/>
    </svg>
  );
};
