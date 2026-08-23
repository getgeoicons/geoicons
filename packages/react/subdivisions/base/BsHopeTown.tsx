// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsHopeTown = ({
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
      <path strokeLinejoin="round" d="m11.882 4.66-4.17-2.98a1 1 0 0 0-1.089-.048l-.205.12a1 1 0 0 0-.488.952l.017.192a1 1 0 0 0 .506.782l4.458 2.508a.906.906 0 0 0 .971-1.526Zm2.568 4.422-.788-.941a.832.832 0 1 1 1.317-1.015l.709 1.004a.781.781 0 0 1-1.237.952Zm.6 3.995 1.551-2.476a.712.712 0 0 1 1.25.675l-1.195 2.605a1 1 0 0 0-.09.457l.118 2.967a.682.682 0 0 1-1.36.105l-.42-3.688a1 1 0 0 1 .146-.645Zm.186 8.864.168-1.448a.72.72 0 0 1 1.431.149l-.133 1.452a.737.737 0 1 1-1.466-.153Z"/>
    </svg>
  );
};
