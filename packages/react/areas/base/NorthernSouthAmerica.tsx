// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NorthernSouthAmerica = ({
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
      <path strokeLinejoin="round" d="m10.735 18.654-.49 3.214a.6.6 0 0 1-.926.409l-3.627-2.422a1 1 0 0 1-.264-.257l-3.58-5.102a1 1 0 0 1-.18-.566l-.026-2.89a1 1 0 0 1 .274-.697L3.8 8.355a1 1 0 0 0 .273-.738l-.128-2.56a1 1 0 0 1 .178-.622l1.305-1.873a1 1 0 0 1 .422-.346l1.922-.834a1 1 0 0 1 .832.017l1.956.942a1 1 0 0 0 .493.098l3.052-.181a1 1 0 0 1 .69.222l3.168 2.577a1 1 0 0 0 .524.219l1.816.196a1 1 0 0 1 .392.128l1.667.96-.817 1.562a1 1 0 0 1-.783.532l-3.074.316a1 1 0 0 1-.976-.508l-.86-1.543a.6.6 0 0 0-.913-.165l-2.094 1.785a1 1 0 0 1-.754.234l-2.002-.214a.6.6 0 0 0-.664.6l.018 2.704a1 1 0 0 1-.353.768L7.48 14a1 1 0 0 0 .042 1.559l2.83 2.148a1 1 0 0 1 .384.947Z"/>
    </svg>
  );
};
