// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsSouthAndros = ({
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
      <path d="m7.79 9.802-1.688 2.625a1 1 0 0 0-.135.759l.778 3.486a1 1 0 0 1-.038.563l-.43 1.172a1 1 0 0 0 .177.994l1.422 1.669a1 1 0 0 0 .729.35l1.688.055a1 1 0 0 1 .63.25l.846.749a1 1 0 0 0 .852.232l2.675-.517a1 1 0 0 0 .7-.526l1.06-2.071c.228-.448.388-.928.474-1.424l.47-2.711c.082-.475.077-.96-.013-1.434l-1.464-7.65-1.268-4.036a1 1 0 0 0-1.414-.589l-.24.125a1 1 0 0 0-.465.51L10.608 8.57a1 1 0 0 1-.799.614l-1.305.167a1 1 0 0 0-.714.451Z"/>
    </svg>
  );
};
