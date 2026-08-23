// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxMichoacan = ({
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
      <path strokeLinejoin="round" d="M10.75 18.967a1 1 0 0 1-1.217.53l-6.088-1.98a2 2 0 0 1-1.018-.751l-.829-1.18a1 1 0 0 1-.007-1.14l.624-.913a1 1 0 0 1 .9-.433l1.4.105a1 1 0 0 0 .618-.158l2.23-1.447a1 1 0 0 0 .417-1.12l-.705-2.407a1 1 0 0 0-.899-.717l-.492-.03a.896.896 0 0 1-.155-1.766l4.888-1.175a1 1 0 0 1 1.046.39l.226.315a1 1 0 0 0 .862.416l.207-.01a.75.75 0 0 0 .627-.396.75.75 0 0 1 .686-.396l.196.005a1 1 0 0 1 .931.719l.174.593a1 1 0 0 0 .669.676l1.356.411a3 3 0 0 0 1.276.102l1.005-.136a1 1 0 0 0 .682-.415l.596-.846a.987.987 0 0 1 1.79.659l-.326 3.533a1 1 0 0 1-.25.575l-2.738 3.06a1 1 0 0 0-.243.82l.222 1.425a.6.6 0 0 1-.719.68l-5.435-1.162a1 1 0 0 0-1.117.558z"/>
    </svg>
  );
};
