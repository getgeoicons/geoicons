// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvSanSalvador = ({
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
      <path strokeLinejoin="round" d="M12.673 2.011a.6.6 0 0 0-.652-.721l-3.216.351a1 1 0 0 0-.779.532l-.461.886a1 1 0 0 0 .312 1.28l1.265.89a1 1 0 0 1 .402 1.035L8 13.22a1 1 0 0 0 .423 1.05l.717.476a1 1 0 0 1 .445.888l-.247 4.473a1 1 0 0 0 .073.433l.673 1.65a.8.8 0 0 0 .635.49l.35.047a.8.8 0 0 0 .808-.409l1.09-1.995a1 1 0 0 0 .03-.9l-.412-.885a.6.6 0 0 1 .505-.852l.892-.058a.6.6 0 0 0 .56-.572l.073-1.595a1 1 0 0 1 .882-.947l.493-.058a.6.6 0 0 0 .467-.864l-1.064-2.128a3 3 0 0 0-.628-.844l-2.03-1.909a.6.6 0 0 1-.146-.658l.324-.817a.8.8 0 0 0-.04-.676l-.663-1.226a1 1 0 0 1-.098-.684z"/>
    </svg>
  );
};
