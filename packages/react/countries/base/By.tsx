// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const By = ({
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
      <path strokeLinejoin="round" d="m5.56 18.859-2.55 1.32a.5.5 0 0 1-.73-.461l.035-.99a.5.5 0 0 0-.124-.347l-.654-.747a.5.5 0 0 1 .056-.714l1.282-1.067a.5.5 0 0 0 .162-.518l-.895-3.239a.5.5 0 0 1 .374-.621l3.975-.874a.5.5 0 0 0 .392-.459l.116-1.965a.5.5 0 0 1 .282-.42l1.389-.673a.5.5 0 0 0 .281-.424l.087-1.65a.5.5 0 0 1 .424-.468l1.432-.217a.5.5 0 0 0 .33-.202l.735-1.02a.5.5 0 0 1 .644-.148l2.384 1.288a.5.5 0 0 0 .32.054l1.653-.278a.5.5 0 0 1 .378.09l1.19.87a.5.5 0 0 1 .199.485l-.452 2.73a.5.5 0 0 0 .128.423l4.083 4.377a.5.5 0 0 1 .004.677l-.758.835a.5.5 0 0 1-.421.16l-1.376-.14a.5.5 0 0 0-.522.664l.914 2.577a.5.5 0 0 1-.347.651l-1.553.398a.5.5 0 0 0-.372.424l-.181 1.476a.5.5 0 0 1-.597.429L5.89 18.813a.5.5 0 0 0-.33.046Z"/>
    </svg>
  );
};
