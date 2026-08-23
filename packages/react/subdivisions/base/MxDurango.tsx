// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxDurango = ({
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
      <path strokeLinejoin="round" d="M2.784 6.897a1 1 0 0 0-.605.222l-.1.082a1 1 0 0 0-.369.854l.115 1.489a1 1 0 0 0 .2.526l2.183 2.885a1 1 0 0 0 .91.39l.411-.046a1 1 0 0 1 1.06.673l1.624 4.804a.6.6 0 0 0 .396.383l2 .6a.6.6 0 0 1 .426.604l-.038.778a.6.6 0 0 0 .338.57l1.74.841a.6.6 0 0 0 .788-.25l.913-1.659a1 1 0 0 0 .123-.432l.107-2.142a1 1 0 0 1 .265-.63l.754-.814a1 1 0 0 0 .264-.758l-.062-.786a1 1 0 0 1 .363-.851l1.372-1.125a1 1 0 0 1 .709-.224l3.281.243a.3.3 0 0 0 .318-.346l-.47-2.967a.584.584 0 0 0-1.08-.207l-.458.77a.6.6 0 0 1-.965.09l-1.34-1.518a1 1 0 0 1-.244-.778l.57-4.85a1 1 0 0 0-.696-1.071l-2.562-.8a1 1 0 0 0-1.178.48l-.51.946a1 1 0 0 1-1.224.464l-4.875-1.79a1 1 0 0 0-1.287.603L4.5 6.214a1 1 0 0 1-.917.663z"/>
    </svg>
  );
};
