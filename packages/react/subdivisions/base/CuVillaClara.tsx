// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CuVillaClara = ({
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
      <path strokeLinejoin="round" d="M4.54 10.541a1 1 0 0 0 1.159.809l2.13-.377A1 1 0 0 1 9 11.896l.115 1.817a2 2 0 0 0 .53 1.233l1.18 1.275a2 2 0 0 1 .505 1.023l.6 3.524a.3.3 0 0 0 .426.22l1.343-.652a1 1 0 0 1 .716-.06l1.278.373a.3.3 0 0 0 .38-.243l.349-2.322a1 1 0 0 1 1.265-.813l1.845.532a1 1 0 0 0 .913-.19l1.944-1.6a.8.8 0 0 0 .257-.849l-.597-1.979a2 2 0 0 0-.616-.943l-1.294-1.105a2 2 0 0 1-.478-.603l-1.105-2.136a2 2 0 0 0-.897-.878L9.59 3.566a1 1 0 0 0-.785-.04l-1.984.727a1 1 0 0 1-.825-.062L4.072 3.135a1 1 0 0 0-1.044.05l-1.256.853a1 1 0 0 0-.43.705l-.079.638a1 1 0 0 0 .316.859l.469.43a1 1 0 0 0 .785.258l.111-.012a1 1 0 0 1 1.093.818z"/>
    </svg>
  );
};
