// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuSantiagoDeCuba = ({
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
      <path strokeLinejoin="round" d="M1.399 16.187a.6.6 0 0 0 .724.465l2.924-.683 6.704-.63 5.78.268c.383.018.763.08 1.132.185l1.69.479c.285.081.582.12.879.113l1.064-.021a.3.3 0 0 0 .255-.448l-1.045-1.842a2 2 0 0 1-.257-1.124l.117-1.706a2 2 0 0 1 .535-1.23l.451-.481a.6.6 0 0 0 .16-.458l-.084-1.073a.6.6 0 0 0-.808-.515l-4.435 1.655a.8.8 0 0 1-.764-.112L14.61 7.654a.8.8 0 0 0-.862-.068l-3.212 1.722a1 1 0 0 0-.513.709l-.47 2.684a1 1 0 0 1-.58.743l-1.365.602a2 2 0 0 1-1.173.137l-1.728-.32a1 1 0 0 0-.583.067l-2.48 1.085a.6.6 0 0 0-.347.67z"/>
    </svg>
  );
};
