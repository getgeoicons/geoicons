// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoSanJuan = ({
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
      <path strokeLinejoin="round" d="M3.059 18.428a.8.8 0 0 0 .538.76l4.819 1.668a1 1 0 0 0 .972-.18l.607-.513a1 1 0 0 1 .641-.236l4.078-.017a2 2 0 0 0 1.053-.304l1.722-1.078a1 1 0 0 0 .468-.896l-.05-1.049a.8.8 0 0 1 .892-.833l.44.052a.8.8 0 0 0 .86-.562l.144-.479a1 1 0 0 0-.115-.83l-.457-.711a1 1 0 0 1-.156-.615l.041-.554a1 1 0 0 1 .453-.764l2.227-1.448a1 1 0 0 0 .437-1.027l-.044-.226a1 1 0 0 0-.488-.68l-1.166-.663a1 1 0 0 0-.818-.077l-1.468.502a1 1 0 0 1-.863-.104l-1.74-1.115a1 1 0 0 1-.459-.9l.016-.278a1 1 0 0 0-.347-.818l-1.433-1.228a1 1 0 0 0-.721-.238l-3.128.221a.6.6 0 0 0-.558.585l-.009.39a.8.8 0 0 1-.892.777l-1.992-.232a1 1 0 0 0-1.001.53l-.11.209a6 6 0 0 0-.624 1.935l-.023.16a1 1 0 0 1-.969.858l-.663.014a1 1 0 0 0-.69.298l-.987.999a1 1 0 0 0-.288.721l.062 3.275a1 1 0 0 0 .591.893l.62.279a1 1 0 0 1 .592.918z"/>
    </svg>
  );
};
