// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Kg = ({
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
      <path strokeLinejoin="round" d="m10.765 14.985-.305 1.242a.5.5 0 0 1-.39.371l-2.966.578a.5.5 0 0 1-.422-.112l-1.014-.873a.5.5 0 0 0-.326-.12H1.764a.5.5 0 0 1-.496-.56l.098-.812a.5.5 0 0 1 .49-.44l4.066-.055a.5.5 0 0 0 .198-.044l2.956-1.327-2.328-1.507a.5.5 0 0 0-.602.044l-.486.427a.5.5 0 0 1-.56.068l-1.908-.994 1.289-1.13a.5.5 0 0 0 .143-.213l.45-1.306a.5.5 0 0 1 .433-.336l1.519-.119a.5.5 0 0 1 .232.038l2.241.938.22-1.21a.5.5 0 0 1 .343-.388l.977-.305a.5.5 0 0 1 .38.034l1.627.851a.5.5 0 0 0 .235.058l7.15-.044a.5.5 0 0 1 .313.108l1.713 1.356a.25.25 0 0 1-.066.429l-2.566.99a.5.5 0 0 0-.252.214l-.75 1.283a.5.5 0 0 1-.409.247l-1.586.07a.5.5 0 0 0-.337.152l-1.482 1.524a.5.5 0 0 1-.718-.002l-.466-.483a.5.5 0 0 0-.588-.099l-2.213 1.13a.5.5 0 0 0-.259.327Z"/>
    </svg>
  );
};
