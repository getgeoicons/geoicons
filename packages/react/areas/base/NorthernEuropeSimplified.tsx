// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NorthernEuropeSimplified = ({
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
      <path strokeLinejoin="round" d="M7.474 10.626 4 13.903a1 1 0 0 0-.313.778l.187 3.631a.6.6 0 0 0 .347.514l.949.439a.6.6 0 0 0 .591-.05l1.25-.858a.6.6 0 0 1 .86.196l1.848 3.224a1 1 0 0 0 1.5.277l.376-.307a1 1 0 0 0 .364-.855l-.15-1.872a1 1 0 0 1 .29-.787l.814-.814a.6.6 0 0 0-.033-.88l-.852-.73a1 1 0 0 1-.326-.548l-.402-1.86a1 1 0 0 1 .045-.57l1.61-4.17a1 1 0 0 1 .84-.634l.306-.029a1 1 0 0 1 .96.5l.324.566a1 1 0 0 1 .02.957L14.321 12.1a1 1 0 0 0-.1.62l.315 1.969a1 1 0 0 0 .616.77l.9.36a.6.6 0 0 0 .547-.051l2.293-1.468a1 1 0 0 0 .412-.535l.925-2.865a.6.6 0 0 0-.13-.591L17.74 7.75a1 1 0 0 1-.212-.355l-1.481-4.338a1 1 0 0 0-.14-.268l-.729-.994a1 1 0 0 0-1.135-.353l-1.683.585a1 1 0 0 0-.419.28L9.511 5.04a1 1 0 0 0-.202.355l-1.57 4.812a1 1 0 0 1-.265.418Z"/>
    </svg>
  );
};
