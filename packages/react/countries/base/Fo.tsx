// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Fo = ({
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
      <path strokeLinejoin="round" d="M8.147 3.629v1.454a1 1 0 0 1-1.18.984l-.382-.07a.748.748 0 0 0-.65 1.278l1.65 1.566a1 1 0 0 0 1.218.122l.644-.402a1 1 0 0 1 1.226.13l1.815 1.76a.726.726 0 0 0 1.158-.842l-.295-.6a1 1 0 0 1 .064-.994l.88-1.327a1 1 0 0 1 .545-.405l.943-.284a1 1 0 0 0 .54-.399l1.653-2.451a.814.814 0 0 0-1.06-1.173l-.358.192a1 1 0 0 1-1.226-.224l-.251-.287a1 1 0 0 0-.988-.315l-.855.205a1 1 0 0 0-.73.707l-.065.236a.75.75 0 0 1-1.23.353l-.334-.306a1 1 0 0 0-.994-.21l-1.056.354a1 1 0 0 0-.682.948Zm4.515 11.169-1.19-.945a1 1 0 0 1-.27-.33l-.426-.838a.582.582 0 0 1 .814-.765l1.795 1.057a1 1 0 0 1 .493.862v.371a.75.75 0 0 1-1.216.587Zm-1.014 6.026-1.204-2.716a.853.853 0 0 1 1.403-.929l1.214 1.299a1 1 0 0 1 .22.372l.975 2.987a.638.638 0 0 1-1.06.646L11.85 21.12a1 1 0 0 1-.202-.297Z"/>
    </svg>
  );
};
