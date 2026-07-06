// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Om = ({
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
      <path strokeLinejoin="round" d="M2.244 16.84 4.91 22.8l2.17-.807a.5.5 0 0 1 .245-.026l1.654.236a.5.5 0 0 0 .32-.061l.626-.36a.5.5 0 0 0 .235-.306l.367-1.4a.5.5 0 0 1 .452-.373l1.78-.112a.5.5 0 0 0 .453-.372l.297-1.13a.5.5 0 0 1 .19-.28l.808-.584a.5.5 0 0 1 .236-.091l1.13-.129a.5.5 0 0 0 .437-.576l-.26-1.621a.5.5 0 0 1 .042-.297l.46-.957a.5.5 0 0 1 .451-.283h.583a.5.5 0 0 0 .407-.21l3.357-4.715a.5.5 0 0 0-.266-.77l-.854-.252a.5.5 0 0 1-.283-.215l-1.417-2.28a.5.5 0 0 0-.377-.233l-1.406-.137a.5.5 0 0 1-.113-.024l-1.56-.533a.5.5 0 0 1-.143-.076l-.633-.484a.5.5 0 0 1-.115-.123l-1.124-1.716a.5.5 0 0 0-.39-.225l-.754-.044a.5.5 0 0 0-.527.544l.112 1.241a.5.5 0 0 1-.036.236L9.966 6.87a.5.5 0 0 0 .043.464l.988 1.52a.5.5 0 0 1 .059.421l-1.474 4.749a.5.5 0 0 1-.31.323z"/>
    </svg>
  );
};
