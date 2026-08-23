// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TtSangreGrande = ({
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
      <path strokeLinejoin="round" d="M13.424 22.528a.6.6 0 0 0 .703-.675l-.313-2.2a1 1 0 0 1 .5-1.013l.417-.234a1 1 0 0 0 .498-1.027l-1.146-7.264a1 1 0 0 1 .648-1.096l1.143-.413a1 1 0 0 0 .462-.342l3.973-5.319a1 1 0 0 0 .197-.534l.004-.07a1 1 0 0 0-.685-1.013l-.642-.212a1 1 0 0 0-.348-.05l-4.806.167a1 1 0 0 0-.183.023L7.613 2.645a.6.6 0 0 0-.449.744l.338 1.231a1 1 0 0 1-.58 1.188l-2.65 1.103a1 1 0 0 0-.538 1.311l1.504 3.572a1 1 0 0 1-.2 1.08l-.867.904a1 1 0 0 0-.226 1.01l1.053 3.14a1 1 0 0 1 .019.573l-.56 2.12a1 1 0 0 0 .083.723l.335.632A1 1 0 0 0 6 22.478l2.824-.706a1 1 0 0 1 .424-.013z"/>
    </svg>
  );
};
