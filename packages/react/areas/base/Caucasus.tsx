// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Caucasus = ({
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
      <path strokeLinejoin="round" d="m2.449 4.176-1.264.755 1.107 1.045a1 1 0 0 0 .22.157l1.686.887a1 1 0 0 1 .233.17L7 9.698a1 1 0 0 1 .202.28l.44.909a1 1 0 0 1 .066.692l-.082.308a1 1 0 0 1-.524.64l-.869.429a1 1 0 0 1-.763.05l-.959-.324a1 1 0 0 0-.239-.05l-1.477-.12a1.002 1.002 0 0 0-.378 1.956l1.876.58a1 1 0 0 0 .475.029l1.095-.2a.6.6 0 0 1 .699.493l.1.605a.6.6 0 0 0 .828.454l1.687-.72a1 1 0 0 1 1.157.276l.4.475a1 1 0 0 1 .232.565l.07.88a1 1 0 0 0 .976.92l3.668.078c.152.004.3.041.436.11l1.038.534a1 1 0 0 1 .415.399l.692 1.228a1 1 0 0 0 .813.508l.79.046a1 1 0 0 1 .374.096l1.418.68a.6.6 0 0 0 .83-.353l.153-.466a.6.6 0 0 0-.345-.743l-1.076-.436a1 1 0 0 1-.37-.26l-.497-.557a1 1 0 0 0-.611-.325l-.436-.06a1 1 0 0 1-.84-.77l-.048-.212a1 1 0 0 1-.001-.434l.458-2.079a1 1 0 0 1 .794-.768l.6-.11a.54.54 0 0 0 .069-1.044l-1.169-.38a1 1 0 0 1-.509-.378l-2.503-3.573a1 1 0 0 1-.164-.393l-.41-2.227a1 1 0 0 0-.66-.765l-2.32-.794a1 1 0 0 1-.265-.138L7.895 2.003a1 1 0 0 0-.261-.137L6.002 1.3a1 1 0 0 0-.59-.02l-1.725.47a1 1 0 0 0-.738.943l-.013.645a1 1 0 0 1-.487.837Z"/>
    </svg>
  );
};
