// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxNuevoLeon = ({
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
      <path strokeLinejoin="round" d="M8.056 16.32a1 1 0 0 0 .095.354l.59 1.232a3 3 0 0 1 .28.994l.339 3.347a.6.6 0 0 0 .611.54l.72-.018a.6.6 0 0 0 .552-.403l.658-1.888a.6.6 0 0 1 .44-.39l.882-.19a.6.6 0 0 0 .441-.779l-.731-2.17a1 1 0 0 1 .34-1.113l4.122-3.16a.6.6 0 0 0 .233-.52l-.152-2.08a.6.6 0 0 0-.539-.553l-1.682-.168a1 1 0 0 1-.75-.466L13.06 6.572a2 2 0 0 1-.3-.97l-.139-3.134a1 1 0 0 0-.737-.92l-.937-.256a.6.6 0 0 0-.587.16L8.344 3.515a.6.6 0 0 0-.155.557l.369 1.564a1 1 0 0 1-.402 1.05l-1.369.954a.6.6 0 0 0-.186.776l.979 1.822a3 3 0 0 0 1.067 1.133l1.686 1.041a.6.6 0 0 1 .258.69l-.06.19a.6.6 0 0 1-.581.42l-1.004-.015a1 1 0 0 0-1.012 1.078z"/>
    </svg>
  );
};
