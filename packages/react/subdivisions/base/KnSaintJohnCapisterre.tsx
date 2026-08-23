// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnSaintJohnCapisterre = ({
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
      <path strokeLinejoin="round" d="m11.857 22.516-5.185-6.39a2 2 0 0 0-.57-.481l-2.638-1.49a1 1 0 0 1-.441-1.23L4.732 8.49a3 3 0 0 0 .038-2.052l-.624-1.821a4 4 0 0 1-.206-1.008l-.117-1.617a.6.6 0 0 1 .55-.642l1.495-.12a.6.6 0 0 1 .56.283l1.462 2.37a1.53 1.53 0 0 0 2.036.54l.683-.374a1 1 0 0 1 1.105.097l1.714 1.374a1 1 0 0 0 .847.195l.508-.116a1 1 0 0 1 1.001.349l1.943 2.413q.063.08.143.146l2.999 2.466a.3.3 0 0 1-.096.517l-1.295.431a1 1 0 0 0-.682.895l-.011.212a1 1 0 0 1-.44.776l-.756.511a1 1 0 0 0-.44.86l.035 1.096a1 1 0 0 1-.23.67L12.32 22.52a.3.3 0 0 1-.464-.003Z"/>
    </svg>
  );
};
