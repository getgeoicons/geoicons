// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sg = ({
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
      <path strokeLinejoin="round" d="m1.271 14.68-.06 2.275a.5.5 0 0 0 .354.492l.624.19a.5.5 0 0 0 .644-.507l-.093-1.652a.5.5 0 0 1 .488-.528l.235-.005a.5.5 0 0 1 .477.317l.662 1.687 2.88-1.97 3.5 1.697a.5.5 0 0 0 .562-.086l2.464-2.329a.5.5 0 0 1 .213-.12l3.421-.923a.5.5 0 0 1 .257-.001l1.195.313a.5.5 0 0 0 .587-.289l.75-1.764a.5.5 0 0 1 .237-.252l1.54-.768a1 1 0 0 0 .551-.842l.02-.38a1 1 0 0 0-.216-.677l-.246-.307a1 1 0 0 0-.304-.255l-.602-.327a1 1 0 0 0-.51-.121l-.873.028a.5.5 0 0 0-.365.176l-.642.754a.5.5 0 0 1-.49.163l-2.367-.535a.5.5 0 0 0-.186-.006l-1.524.23a.5.5 0 0 1-.355-.08l-3-2.029a.5.5 0 0 0-.307-.085l-.804.045a.5.5 0 0 0-.292.115l-1.33 1.103a.5.5 0 0 1-.49.086l-1.36-.495a.5.5 0 0 0-.413.032l-1.692.936a.5.5 0 0 0-.212.229l-2.882 6.27a.5.5 0 0 0-.046.196Z"/>
    </svg>
  );
};
