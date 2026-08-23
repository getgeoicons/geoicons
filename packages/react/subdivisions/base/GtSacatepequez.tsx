// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtSacatepequez = ({
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
      <path strokeLinejoin="round" d="M16.895 10.977a.6.6 0 0 1 .835-.506l.867.372a.6.6 0 0 0 .678-.144l.408-.442a.6.6 0 0 0-.081-.888l-.88-.658a1 1 0 0 1-.4-.792l-.016-1.782a.8.8 0 0 0-.505-.737l-1.142-.452a1 1 0 0 1-.63-.861l-.039-.57a.8.8 0 0 0-.985-.723l-1.514.364a1 1 0 0 1-.938-.262l-1.08-1.071a.6.6 0 0 0-.976.193l-.393.932a1 1 0 0 0-.032.688l.427 1.359a1 1 0 0 1-.065.759l-2.69 5.21a.7.7 0 0 1-.694.376l-.983-.1a.7.7 0 0 0-.692.373l-.492.947a5 5 0 0 0-.477 1.39l-.438 2.354a1 1 0 0 0 .313.924l1.696 1.532a1 1 0 0 1 .277.424l1.062 3.156a.657.657 0 0 0 1.28-.226l-.014-.549a1 1 0 0 1 .132-.521l1.171-2.044a2 2 0 0 1 .742-.741l.726-.415a1 1 0 0 1 1.102.072l1.17.89a2 2 0 0 0 .977.394l.625.073a1 1 0 0 0 1.114-.918z"/>
    </svg>
  );
};
