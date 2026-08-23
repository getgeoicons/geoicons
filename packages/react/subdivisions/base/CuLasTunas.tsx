// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuLasTunas = ({
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
      <path strokeLinejoin="round" d="M1.469 16.629a.6.6 0 0 0 .512.803l6.576.562a1 1 0 0 0 .993-.578l.06-.131a1 1 0 0 1 1.05-.57l4.944.713a1 1 0 0 0 .67-.14l.658-.408a1 1 0 0 0 .473-.836l.022-1.635a1 1 0 0 1 .951-.985l.711-.035a1 1 0 0 0 .832-.525l.357-.664a1 1 0 0 1 .463-.434l1.304-.6a1 1 0 0 0 .571-.758l.098-.638a.6.6 0 0 0-.475-.679l-2.95-.595a3 3 0 0 1-.708-.238l-4.455-2.144a1 1 0 0 0-.716-.058l-1.208.356a1 1 0 0 0-.698.767L10.8 10.77a2 2 0 0 1-.705 1.17l-1.031.835a1 1 0 0 1-1.272-.011l-.42-.352a1 1 0 0 0-1.17-.084L2.55 14.6a1.5 1.5 0 0 0-.618.76z"/>
    </svg>
  );
};
