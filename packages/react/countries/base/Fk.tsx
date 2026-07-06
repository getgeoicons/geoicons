// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Fk = ({
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
      <path strokeLinejoin="round" d="m2.844 14.166 2.058 1.593a.5.5 0 0 0 .52.057l1.465-.69a.5.5 0 0 0 .26-.29l.25-.73a.5.5 0 0 1 .395-.33l1.183-.189a.5.5 0 0 0 .31-.178l2.534-3.113 1.288-1.98a.5.5 0 0 0-.137-.685l-1.572-1.072a.5.5 0 0 0-.281-.087H9.224a.5.5 0 0 0-.118.015l-4.303 1.04 1.981 2.038a.5.5 0 0 1-.302.845l-.688.078a.5.5 0 0 0-.408.681l.51 1.287a.5.5 0 0 1-.464.684h-.835a.5.5 0 0 1-.488-.392l-.183-.822a.5.5 0 0 0-.6-.378l-1.371.317a.5.5 0 0 0-.285.79l1.083 1.42a.5.5 0 0 0 .091.091Zm8.176 2.445.24-1.841a.5.5 0 0 1 .046-.152l.819-1.706a.5.5 0 0 1 .164-.193l2.438-1.707a.5.5 0 0 0 .067-.763l-.256-.256a.5.5 0 0 1-.11-.54l1.031-2.57 1.262.633a.5.5 0 0 0 .471-.011l.612-.347a.5.5 0 0 1 .558.043l.852.677a.5.5 0 0 0 .391.102l1.686-.277a.5.5 0 0 1 .55.323l.805 2.218a.5.5 0 0 1-.255.622l-3.877 1.856a.5.5 0 0 0-.228.22l-.77 1.479a.5.5 0 0 1-.443.27h-1.19a.5.5 0 0 0-.36.152l-1.717 1.783a.5.5 0 0 1-.26.143l-1.93.397a.5.5 0 0 1-.595-.555Z"/>
    </svg>
  );
};
