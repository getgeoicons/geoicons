// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvChalatenango = ({
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
      <path strokeLinejoin="round" d="M14.645 19.302a2 2 0 0 0 1.04.22l1.508-.09q.287-.018.557-.115l4.376-1.575a.6.6 0 0 0 .317-.864l-1.306-2.271a.6.6 0 0 0-.584-.297l-1.536.164a1 1 0 0 1-.972-.493l-1.165-2.01a1 1 0 0 0-.694-.484l-1.328-.23a1 1 0 0 1-.63-.387l-2.373-3.177a1 1 0 0 1-.188-.45L11.46 5.86a.6.6 0 0 0-.562-.51l-.449-.024a.6.6 0 0 0-.53.264l-.634.945a.6.6 0 0 1-.743.213l-4.696-2.1A.668.668 0 0 0 3.17 5.79l2.74 2.09a1 1 0 0 1 .35 1.09l-.202.653a2 2 0 0 1-.57.894l-3.542 3.2a1 1 0 0 0-.315.57l-.32 1.833a.6.6 0 0 0 .53.7l1.009.102a1 1 0 0 0 .535-.095l1.22-.59c.206-.1.428-.164.656-.188l4.649-.504a3 3 0 0 1 .989.057l1.51.344a1 1 0 0 1 .778.937l.043 1.116a1 1 0 0 0 .539.85z"/>
    </svg>
  );
};
