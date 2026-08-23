// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxTlaxcala = ({
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
      <path strokeLinejoin="round" d="M2.506 7.908a1 1 0 0 0-.562.353l-.344.432a1 1 0 0 0-.11 1.075l.47.926a1 1 0 0 0 .849.547l1.565.066a1 1 0 0 1 .806.47l3.032 4.86a2 2 0 0 0 .942.793l2.204.899a1 1 0 0 0 1.082-.217l1.568-1.558a1 1 0 0 1 1.264-.12l.673.454a1 1 0 0 0 1.357-.225l1.176-1.555a1 1 0 0 1 .868-.394l1.667.117a1 1 0 0 0 .802-.317l.288-.31a1 1 0 0 0-.069-1.429l-1.967-1.745a1 1 0 0 0-.816-.24l-.713.109a.83.83 0 0 1-.956-.827l.006-.802a1 1 0 0 0-.365-.78l-2.86-2.354a1 1 0 0 0-.831-.208l-1.797.358a1 1 0 0 1-.532-.04l-1.627-.582a.8.8 0 0 0-.992.41L8.023 7.25a1 1 0 0 1-1.005.565l-2.327-.24a3 3 0 0 0-.97.058z"/>
    </svg>
  );
};
