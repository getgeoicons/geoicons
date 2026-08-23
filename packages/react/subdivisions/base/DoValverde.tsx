// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoValverde = ({
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
      <path strokeLinejoin="round" d="M2.357 17.383a1 1 0 0 0 0 .413l.305 1.453a1 1 0 0 0 .81.78l2.492.426q.127.022.256.01l2.177-.189a1 1 0 0 1 .694.202l1.612 1.232a1 1 0 0 0 1.003.124l.891-.385a1 1 0 0 1 1.197.318l.272.364a.8.8 0 0 0 1.149.137l.835-.687a1 1 0 0 1 .996-.16l1.823.704a2 2 0 0 0 1.114.096l.543-.109a.975.975 0 0 0 .301-1.797l-.565-.33a1 1 0 0 1-.485-1.007l.1-.682a1 1 0 0 1 .288-.57l.381-.375a1 1 0 0 0 .299-.672l.005-.116a1 1 0 0 0-.606-.96l-1.807-.773a.6.6 0 0 1-.347-.695l.25-1.018a.6.6 0 0 1 .943-.337l.902.68a.6.6 0 0 0 .949-.36l.56-2.747a2 2 0 0 0-.02-.885l-.163-.655a1 1 0 0 0-.707-.722l-2.847-.778a2 2 0 0 1-.907-.535l-1.727-1.776a2 2 0 0 0-1.238-.596L10.47 4.05a.8.8 0 0 1-.713-.68l-.033-.23a.8.8 0 0 0-.551-.648L5.993 1.49a1 1 0 0 0-1.242.614l-.726 2.012a2 2 0 0 0-.118.699l.04 3.982a1 1 0 0 1-.835.997l-.215.036a.71.71 0 0 0-.516 1.019l.8 1.584a1 1 0 0 1 .086.659z"/>
    </svg>
  );
};
