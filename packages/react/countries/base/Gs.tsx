// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gs = ({
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
      <path strokeLinejoin="round" d="m13.86 6.263-6.53-1.54-.082-.012-3.717-.24-.086.001-2.245.242v.206a.5.5 0 0 0 .342.474l2.46.819a.5.5 0 0 1 .301.275l.463 1.065a.5.5 0 0 0 .249.254l2.218 1.024a.5.5 0 0 0 .12.038l2.254.405a.5.5 0 0 1 .235.11l3.172 2.693q.053.046.118.075l2.424 1.097a.5.5 0 0 1 .229.209l2.032 3.585a.5.5 0 0 0 .053.076l1.76 2.081a.5.5 0 0 0 .65.1l2.166-1.365a.5.5 0 0 0 .196-.612l-1.33-3.269a.5.5 0 0 0-.047-.09l-3.37-5.023a.5.5 0 0 0-.14-.139l-3.734-2.47a.5.5 0 0 0-.161-.07Z"/>
    </svg>
  );
};
