// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsFlorida = ({
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
      <path strokeLinejoin="round" d="M8.713 2.898a.6.6 0 0 0-.585-.463H1.863a.6.6 0 0 0-.597.66l.141 1.399a.6.6 0 0 0 .626.54l2.75-.132a1 1 0 0 1 .741.28l1.774 1.71a1 1 0 0 0 1.052.215l2.394-.916a1 1 0 0 1 1.039.202l2.876 2.675a1 1 0 0 1 .306.898l-.386 2.29a2 2 0 0 0 .06.917l.303.987q.134.436.364.834l1.516 2.614c.22.38.5.72.831 1.008l1.036.904a1 1 0 0 1 .285.419l.276.778a1 1 0 0 0 1.177.637l.789-.19a1 1 0 0 0 .746-.777l.772-3.878a1 1 0 0 0-.082-.633l-1.567-3.215a1 1 0 0 1-.09-.588l.16-1.045a1 1 0 0 0-.076-.556l-.91-2.048a11 11 0 0 1-.678-2.045l-.577-2.559a.6.6 0 0 0-.386-.433l-.712-.25a.6.6 0 0 0-.766.368l-.126.362a.6.6 0 0 1-.604.402l-6.946-.423a.6.6 0 0 1-.548-.462z"/>
    </svg>
  );
};
