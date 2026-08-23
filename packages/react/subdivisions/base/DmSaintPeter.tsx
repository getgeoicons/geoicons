// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DmSaintPeter = ({
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
      <path strokeLinejoin="round" d="M21.563 9.369a.6.6 0 0 0-.52-.472l-3.21-.356a1.97 1.97 0 0 1-1.65-1.328l-.177-.524a1 1 0 0 0-.445-.544l-1.467-.854a4 4 0 0 0-.917-.39l-1.462-.415a3 3 0 0 1-.974-.482L8.27 2.159a3 3 0 0 0-1.516-.583l-3.447-.322a1 1 0 0 0-.908.415l-.293.412a1 1 0 0 0-.185.605l.032 1.297a2 2 0 0 0 .122.638L3.74 9.168a3 3 0 0 1 .07 1.848l-.45 1.591a2 2 0 0 0 .153 1.473l1.785 3.404q.298.568.47 1.188l1.002 3.63a.55.55 0 0 0 .939.222l2.887-3.19q.111-.122.255-.203l2.3-1.282a2 2 0 0 0 .808-.837l1.357-2.658q.134-.261.336-.473l1.424-1.489a2 2 0 0 1 1.476-.617l2.781.043a.6.6 0 0 0 .596-.725z"/>
    </svg>
  );
};
