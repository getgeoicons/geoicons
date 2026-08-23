// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvSantaAna = ({
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
      <path strokeLinejoin="round" d="M15.668 15.342a.6.6 0 0 0-.52-.678l-.584-.073a.6.6 0 0 1-.509-.737l.46-1.885a1 1 0 0 1 .483-.636l2.292-1.282a.6.6 0 0 0 .307-.527l-.006-1.208a.6.6 0 0 1 .434-.579l.928-.269a.6.6 0 0 0 .42-.445l.265-1.185a1 1 0 0 0-.297-.952L15.8 1.606a1 1 0 0 0-1.005-.211l-3.276 1.128a1 1 0 0 1-.543.03l-1.058-.235a.3.3 0 0 0-.361.243l-.464 2.758a.3.3 0 0 0 .277.35l1.837.114a1 1 0 0 1 .842.572l.258.547a1 1 0 0 1-.686 1.401l-3.394.763a3 3 0 0 0-1.28.637l-1.13.956a3 3 0 0 0-.916 1.364l-.492 1.517a1 1 0 0 0 .189.955l.863 1.02a1 1 0 0 1 .198.926L5.1 18.35a.3.3 0 0 0 .14.345l2.055 1.165a.3.3 0 0 1 .125.384l-.413.916a.3.3 0 0 0 .208.416l1.354.305a.3.3 0 0 0 .315-.124l.429-.636a.3.3 0 0 1 .39-.096l2.911 1.565a.3.3 0 0 0 .44-.232l.357-3.235a1 1 0 0 1 .375-.676l1.44-1.136a.6.6 0 0 0 .222-.389z"/>
    </svg>
  );
};
