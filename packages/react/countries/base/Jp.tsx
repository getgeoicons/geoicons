// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Jp = ({
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
      <path strokeLinejoin="round" d="m3.012 22.33-.509-1.973a.5.5 0 0 1 .168-.512l3.495-2.857a.5.5 0 0 1 .257-.11l2.765-.333a.5.5 0 0 0 .4-.3l.735-1.724a.5.5 0 0 1 .634-.273l.778.29a.5.5 0 0 0 .573-.168l1.213-1.603a.5.5 0 0 0 .098-.247l.316-2.819a.5.5 0 0 1 .263-.386l.76-.402a.5.5 0 0 1 .692.242l.877 2.005a.5.5 0 0 1-.017.437l-.945 1.754a.5.5 0 0 0-.051.148l-.702 3.885a.5.5 0 0 1-.421.406l-3.233.465a.5.5 0 0 0-.297.157l-1.22 1.328a.5.5 0 0 1-.303.158l-3.406.448a.5.5 0 0 0-.392.293l-.812 1.835a.5.5 0 0 1-.5.296l-.774-.067a.5.5 0 0 1-.442-.373ZM18.054 3.18l-1.432-1.76a.5.5 0 0 0-.46-.179l-.099.015a.5.5 0 0 0-.42.581l.28 1.589a.5.5 0 0 1-.17.468l-1.692 1.435a.5.5 0 0 0-.174.329l-.214 1.995 2.358-1.33a.5.5 0 0 1 .444-.024l.917.394a.5.5 0 0 0 .631-.21l.46-.801a.5.5 0 0 1 .384-.249l.862-.086a.5.5 0 0 0 .45-.498V3.812a.5.5 0 0 0-.522-.5l-1.194.052a.5.5 0 0 1-.41-.184Z"/>
    </svg>
  );
};
