// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CoromandelPeninsula = ({
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
      <path strokeLinejoin="round" d="m16.604 22.8-7.13-7.319.845-1.609a1 1 0 0 0 .106-.592l-.21-1.628a1 1 0 0 0-.148-.408L8.877 9.37a1 1 0 0 1-.155-.551l.061-4.063a1 1 0 0 0-.43-.837l-.703-.486a1 1 0 0 1-.423-.704l-.032-.268a1 1 0 0 1 .714-1.079l.181-.053a1 1 0 0 1 .832.127l1.353.898a1 1 0 0 1 .382.477l1.088 2.858a.6.6 0 0 0 .794.34l1.454-.612a.6.6 0 0 1 .77.286l.165.333a.6.6 0 0 1-.14.719l-1.033.907a.6.6 0 0 0 .026.922l.845.663a1 1 0 0 1 .33.466l.73 2.153a1 1 0 0 1 .05.387l-.188 2.852a1 1 0 0 0 .057.404l1.227 3.413a1 1 0 0 1 .056.42z"/>
    </svg>
  );
};
