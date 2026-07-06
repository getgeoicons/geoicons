// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bh = ({
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
      <path strokeLinejoin="round" d="m9.59 17.053-.2-1.274a.5.5 0 0 1 .03-.266l.952-2.345a.5.5 0 0 0-.001-.38l-1.439-3.46a.5.5 0 0 1-.032-.112l-.489-3.048a.5.5 0 0 1 .155-.447l1.19-1.096a.5.5 0 0 1 .45-.12l2.004.46a.5.5 0 0 0 .475-.144l2.926-3.094a.5.5 0 0 1 .814.126l1.86 3.857a.5.5 0 0 1-.014.462l-2.484 4.425a.5.5 0 0 0-.062.197l-.893 9.502a.5.5 0 0 1-.089.24l-1.016 1.448a.5.5 0 0 1-.884-.13l-.73-2.22a.5.5 0 0 0-.134-.21l-2.236-2.083a.5.5 0 0 1-.153-.288ZM7.234 9.752l.008-1.166a.5.5 0 0 0-.496-.504l-.64-.006a.5.5 0 0 0-.505.5V9.75a.5.5 0 0 0 .5.5h.633a.5.5 0 0 0 .5-.497Z"/>
    </svg>
  );
};
