// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsCatIsland = ({
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
      <path strokeLinejoin="round" d="m14.375 22.515-1.118-.848a.6.6 0 0 1 .155-1.04l2.212-.817a1.61 1.61 0 0 0 .89-2.223l-.058-.118a1.9 1.9 0 0 0-1.102-.969l-.533-.18a1 1 0 0 1-.542-.443l-3.755-6.422a2 2 0 0 0-.764-.744l-.919-.504a.6.6 0 0 1-.31-.534l.01-.868a2 2 0 0 0-.438-1.275l-.172-.215a2 2 0 0 0-.361-.35l-2.824-2.12a.6.6 0 0 1 .21-1.06l1.737-.45a1 1 0 0 1 .924.229l2.121 1.934a1 1 0 0 1 .326.706l.043 1.323a1 1 0 0 0 .22.594l1.094 1.361q.24.3.42.64l2.041 3.872q.165.31.425.548l3.16 2.869c.213.194.382.432.495.698l2.012 4.732a.6.6 0 0 1-.414.819l-4.35 1.03a1 1 0 0 1-.835-.176Z"/>
    </svg>
  );
};
