// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ma = ({
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
      <path strokeLinejoin="round" d="M9.374 20.859H1.2l4.47-2.485a.5.5 0 0 0 .18-.17l1.58-2.499a.5.5 0 0 0 .06-.397l-.465-1.73a.5.5 0 0 1 .044-.369l2.06-3.78a.5.5 0 0 1 .238-.218l2.749-1.201a.5.5 0 0 0 .268-.285l1.41-3.803a.5.5 0 0 1 .279-.289l.787-.324a.5.5 0 0 1 .624.214l.71 1.242a.5.5 0 0 0 .422.251l4.47.107a.5.5 0 0 1 .478.403l1.116 5.632a.5.5 0 0 1-.497.597l-2.279-.03a.5.5 0 0 0-.264.07l-1.073.645a.5.5 0 0 0-.24.475l.112 1.213a.5.5 0 0 1-.183.435l-3.148 2.549a.5.5 0 0 1-.335.11l-2.631-.11a.5.5 0 0 0-.265.062l-2.263 1.26a.5.5 0 0 0-.257.441z"/>
    </svg>
  );
};
