// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SierraNevada = ({
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
      <path strokeLinejoin="round" d="M11.946 1.2v8.894a1 1 0 0 0 .373.779l3.563 2.869a1 1 0 0 1 .308.424l1.437 3.784a1 1 0 0 1 .06.45l-.233 2.482a1 1 0 0 1-.066.272l-.357.907a1 1 0 0 1-1.077.623l-.25-.038a1 1 0 0 1-.665-.404l-.55-.765a1 1 0 0 1-.187-.534l-.076-1.516a1 1 0 0 0-.242-.604L9.56 13.704a1 1 0 0 1-.206-.384L8.23 9.307a1 1 0 0 0-.174-.344L6.513 6.98a1 1 0 0 1-.21-.648l.033-.956a1 1 0 0 1 .128-.457l.225-.398a1 1 0 0 1 .871-.509h1.037l.073-1.693L10.33 1.2z"/>
    </svg>
  );
};
