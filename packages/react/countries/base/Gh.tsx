// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gh = ({
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
      <path strokeLinejoin="round" d="m8.967 22.61 6.058-2.857a2 2 0 0 1 .993-.186l1.534.107a1 1 0 0 0 .716-.235l.926-.784a.6.6 0 0 0 .01-.907l-1.76-1.562a1 1 0 0 1-.33-.851l.423-4.04a2 2 0 0 0-.21-1.122l-.426-.83a2 2 0 0 1-.22-.91l-.008-3.592a1 1 0 0 0-.449-.832l-.764-.505a.6.6 0 0 1-.244-.674l.18-.597a.6.6 0 0 0-.385-.743l-.612-.203a.6.6 0 0 0-.5.056l-.85.515a1 1 0 0 1-.55.144l-6.25-.21a.6.6 0 0 0-.514.258l-.356.513a.6.6 0 0 0-.1.44l1.24 7.496c.07.424 0 .857-.191 1.241a243 243 0 0 0-1.74 3.576c-.2.42-.247.899-.131 1.35l1.14 4.468a1 1 0 0 0 .586.676l1.974.82a1 1 0 0 0 .81-.02Z"/>
    </svg>
  );
};
