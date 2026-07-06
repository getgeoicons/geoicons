// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AmazonRainforest = ({
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
      <path strokeLinejoin="round" d="m1.49 8.673-.258 1.873a1 1 0 0 0 .04.448l.558 1.702a1 1 0 0 0 .476.569l1.094.588a1 1 0 0 1 .317.27L4.86 15.6a1 1 0 0 0 .375.298l2.974 1.362a1 1 0 0 1 .435.383l.541.877a1 1 0 0 0 .496.41l1.53.58a1 1 0 0 0 1.035-.203l.845-.784a1 1 0 0 0 .277-1.024l-.012-.038a1 1 0 0 0-.482-.59l-1.123-.606a1 1 0 0 1-.524-.835l-.027-.606a1 1 0 0 1 1.105-1.04l.064.008a1 1 0 0 1 .69.388l1.127 1.48a.654.654 0 0 0 1.174-.367l.04-.88a.6.6 0 0 1 .702-.563l3.339.585a.9.9 0 0 0 .856-1.453l-.233-.287a.804.804 0 0 1 .602-1.308l.458-.014a1 1 0 0 0 .656-.27l.695-.653a1 1 0 0 0 .315-.752l-.025-1.064a1 1 0 0 0-.168-.531l-.128-.192a1 1 0 0 0-.832-.446H19.75a1 1 0 0 1-.41-.088l-2.318-1.044a1 1 0 0 0-.898.038l-.652.364a1 1 0 0 1-1.242-.217l-.932-1.073a1 1 0 0 0-.518-.315l-3.248-.792a1 1 0 0 0-.563.026L4.458 5.921a1 1 0 0 0-.319.18L1.836 8.046a1 1 0 0 0-.346.628Z"/>
    </svg>
  );
};
