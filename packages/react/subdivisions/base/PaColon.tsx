// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const PaColon = ({
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
      <path strokeLinejoin="round" d="M3.968 12.414a3 3 0 0 1 1.108-.548l4.25-1.094a3 3 0 0 0 1.129-.565l5.007-4.013a2 2 0 0 1 1.521-.422l5.231.713a.6.6 0 0 1 .518.55l.043.583a.6.6 0 0 1-.242.527l-1.51 1.111a.6.6 0 0 1-.615.058l-2.457-1.179a.6.6 0 0 0-.821.33l-1.084 2.88a1 1 0 0 1-1.35.559l-1.317-.6a.6.6 0 0 0-.81.334l-.512 1.358a1 1 0 0 1-1.049.641l-1.28-.146a1 1 0 0 0-.74.215l-1.199.964a.6.6 0 0 1-.437.13l-1.64-.17a.6.6 0 0 0-.567.276l-1.893 2.977a.3.3 0 0 1-.524-.034l-1.326-2.825a.6.6 0 0 1 .172-.726z"/>
    </svg>
  );
};
