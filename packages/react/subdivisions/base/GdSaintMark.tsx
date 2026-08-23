// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GdSaintMark = ({
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
      <path strokeLinejoin="round" d="M19.834 18.015a1 1 0 0 1 .42-1.094l.224-.146a1 1 0 0 0 .287-1.39l-.854-1.292a2 2 0 0 1-.293-.706l-.56-2.764a1 1 0 0 1 .241-.872l1.513-1.66a1 1 0 0 0 .221-.953l-.58-1.992a2 2 0 0 0-.392-.731L17.735 1.66a.8.8 0 0 0-.937-.215l-2.007.896a1 1 0 0 0-.506.507L13.71 4.14a1 1 0 0 1-.54.521l-1.231.495a1 1 0 0 0-.505.45L9.56 9.036a1 1 0 0 1-.46.43l-4.013 1.84a1 1 0 0 0-.297.21l-1.914 1.95a.6.6 0 0 0-.171.398l-.014.343a.6.6 0 0 0 .245.506l3.324 2.444a1 1 0 0 0 .184.107l5.52 2.47a1 1 0 0 1 .38.298l1.848 2.372a1 1 0 0 0 .808.386l2.682-.051a1 1 0 0 0 .764-.377l1.656-2.081a.8.8 0 0 0 .147-.704z"/>
    </svg>
  );
};
