// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const My = ({
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
      <path strokeLinejoin="round" d="m3.664 9.372-2.058-.348a.25.25 0 0 0-.28.323l1.26 3.918a.5.5 0 0 0 .201.265l2.006 1.312a.5.5 0 0 0 .28.082l.493-.005a.5.5 0 0 0 .43-.748l-.435-.762a.5.5 0 0 1-.064-.212l-.15-2.11a.5.5 0 0 0-.147-.32L3.933 9.51a.5.5 0 0 0-.27-.138Zm8.786 6.2-.81-1.16a.25.25 0 0 1 .227-.393l1.417.121a.5.5 0 0 0 .378-.127l.995-.9 3.263-2.315a.5.5 0 0 0 .136-.145l1.274-2.056a.5.5 0 0 1 .736-.128l2.313 1.838a.5.5 0 0 1 .057.73l-.995 1.082a.5.5 0 0 1-.44.156l-1.792-.262a.5.5 0 0 0-.533.3l-1.087 2.561a.5.5 0 0 1-.497.303l-1.829-.137a.5.5 0 0 0-.198.025l-2.045.695a.5.5 0 0 1-.57-.188Z"/>
    </svg>
  );
};
