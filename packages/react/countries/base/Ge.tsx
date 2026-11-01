// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ge = ({
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
      <path strokeLinejoin="round" d="m6.67 15.551 2.916-.276a1 1 0 0 1 .764.253l1.424 1.283a1 1 0 0 0 .782.251l3.944-.446a1 1 0 0 0 .573-.265l.364-.343a1 1 0 0 1 1.196-.131l2.681 1.592a.6.6 0 0 0 .776-.143l.315-.396a.6.6 0 0 0-.124-.863l-.983-.694a.6.6 0 0 1-.212-.711l.228-.577a.6.6 0 0 0-.355-.785l-1.398-.502a.6.6 0 0 1-.397-.551l-.018-.79a.6.6 0 0 0-.37-.54l-1.593-.662a2 2 0 0 0-1.375-.06l-1.72.548a1 1 0 0 1-.948-.188l-2.178-1.832a2 2 0 0 0-1.236-.47l-2.665-.068A3 3 0 0 1 6 7.96L2.574 6.557a.8.8 0 0 0-1.032.41l-.05.109a.8.8 0 0 0 .312 1.013l3.303 2.017a2 2 0 0 1 .896 1.211l.408 1.595a2 2 0 0 1-.138 1.367l-.2.414a.6.6 0 0 0 .596.858Z"/>
    </svg>
  );
};
