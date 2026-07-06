// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SaharaDesert = ({
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
      <path strokeLinejoin="round" d="m2.604 10.888-1.22 2.195a1 1 0 0 0-.102.702l.274 1.235 2.855 1.018a1 1 0 0 0 .411.055l2.246-.17q.11-.01.219.007l6.125.881a1 1 0 0 0 .537-.07l1.146-.492a1 1 0 0 1 .365-.08l4.17-.122q.108-.003.214-.03l2.956-.738-2.59-5.369a1 1 0 0 0-.753-.554l-3.122-.467a.6.6 0 0 0-.445.11l-.908.67a.6.6 0 0 1-.613.06l-1.451-.688a1 1 0 0 1-.397-.34l-.616-.9a1 1 0 0 0-.689-.427L9.79 7.177a1 1 0 0 0-.472.049l-1.187.423a1 1 0 0 0-.596.58l-.194.498a1 1 0 0 1-.398.483l-2.267 1.43a1 1 0 0 1-.475.153z"/>
    </svg>
  );
};
