// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Outback = ({
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
      <path strokeLinejoin="round" d="m11.664 17.904-5.127 1.041a1 1 0 0 1-1.066-.48l-.657-1.141a1 1 0 0 0-.224-.267L1.603 14.55a1 1 0 0 1-.352-.863l.21-2.155a.5.5 0 0 1 .356-.431l3.61-1.073a.5.5 0 0 0 .246-.165L8.458 6.43a.5.5 0 0 1 .654-.108l.834.524a.5.5 0 0 0 .651-.105l1.627-1.97a.5.5 0 0 1 .481-.172l1.986.388a.5.5 0 0 1 .32.768l-.533.8a.5.5 0 0 0 .172.714l2.035 1.14a.5.5 0 0 0 .731-.324l.84-3.626a.25.25 0 0 1 .463-.061l1.802 3.395a.5.5 0 0 1 .057.268l-.087 1.267a.5.5 0 0 0 .229.455l.589.377a1 1 0 0 1 .42 1.123l-.334 1.15a1 1 0 0 0-.016.498l.363 1.622a1 1 0 0 0 .187.396l.474.608a1 1 0 0 1 .096 1.081l-1.524 2.887a1 1 0 0 1-1.094.511l-2.445-.524-5.286-1.585a1 1 0 0 0-.486-.022Z"/>
    </svg>
  );
};
