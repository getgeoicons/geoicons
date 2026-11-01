// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ao = ({
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
      <path strokeLinejoin="round" d="m4.005 12.88-.807.696a2 2 0 0 0-.587.87l-1.278 3.758a2 2 0 0 0-.106.624l-.02 2.059a.6.6 0 0 0 .743.588l1.894-.463a2 2 0 0 1 1.23.09l.887.362c.233.095.482.146.734.148l5.975.062q.19.003.377.04l4.266.865a3 3 0 0 0 1.187 0l2.679-.537a.3.3 0 0 0 .142-.517l-2.094-1.894a1 1 0 0 1-.33-.747l.025-4.514a.6.6 0 0 1 .595-.596l2.454-.021a.6.6 0 0 0 .594-.558l.178-2.49a.6.6 0 0 0-.727-.63l-2.187.478a.6.6 0 0 1-.725-.528l-.587-6.045a.6.6 0 0 0-.564-.542l-2.6-.141a.6.6 0 0 0-.625.5l-.128.77a.6.6 0 0 1-.56.5l-2.203.116a.6.6 0 0 1-.571-.337L9.71 1.643a.6.6 0 0 0-.547-.338l-6.177.076a.6.6 0 0 0-.544.838l1.224 2.828a1 1 0 0 1 .044.67l-.327 1.15a1 1 0 0 0 .074.735l1.128 2.17a2 2 0 0 1 .198 1.246l-.11.671a2 2 0 0 1-.668 1.19Z"/>
    </svg>
  );
};
