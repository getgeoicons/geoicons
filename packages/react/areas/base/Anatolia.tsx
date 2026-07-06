// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Anatolia = ({
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
      <path strokeLinejoin="round" d="m1.863 10.056-.463.779a1 1 0 0 0-.118.72l.353 1.648a1 1 0 0 0 .084.238l.909 1.818a1 1 0 0 0 .497.47l2.385 1.032a1 1 0 0 0 .986-.11l.782-.57a1 1 0 0 1 1.112-.044l1.465.897a1 1 0 0 0 .977.037l1.538-.786a1 1 0 0 1 .575-.102l1.418.17a1 1 0 0 0 1.03-.58l.41-.904a1 1 0 0 1 .401-.448l4.003-2.369a1 1 0 0 0 .487-.77l.102-1.119a1 1 0 0 1 .36-.68l.574-.473a1 1 0 0 0 .277-.364l.793-1.772-2.738 1.54a1 1 0 0 1-.392.123l-2.486.244a1 1 0 0 1-.54-.098l-3.103-1.53a1 1 0 0 0-.381-.1l-2.027-.125a1 1 0 0 0-.54.12l-2.407 1.31a1 1 0 0 1-.564.117L6.173 8.25a1 1 0 0 0-.936.47l-.284.457a1 1 0 0 1-.912.47l-1.256-.078a1 1 0 0 0-.922.488Z"/>
    </svg>
  );
};
