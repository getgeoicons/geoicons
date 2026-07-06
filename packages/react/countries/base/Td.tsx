// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Td = ({
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
      <path strokeLinejoin="round" d="m7.973 22.488-1.725-2.084a.5.5 0 0 1 .23-.794l.952-.311a.5.5 0 0 0 .332-.584l-.591-2.663a.5.5 0 0 0-.125-.234L5.43 14.103a.5.5 0 0 1-.038-.641l2.226-2.99a.5.5 0 0 0 .096-.253l.418-4.558a.5.5 0 0 0-.022-.199L7.08 2.268a.5.5 0 0 1 .273-.61l.809-.36a.5.5 0 0 1 .433.013l9.995 5.188a.5.5 0 0 1 .27.444v4.516a.5.5 0 0 1-.5.5h-.975a.5.5 0 0 0-.457.297l-.84 1.894a.5.5 0 0 0-.015.368l1.088 3.108a.5.5 0 0 1-.24.608l-8.329 4.377a.5.5 0 0 1-.618-.123Z"/>
    </svg>
  );
};
