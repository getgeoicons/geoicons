// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mu = ({
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
      <path strokeLinejoin="round" d="m5.317 17.743-.67 1.147a.5.5 0 0 1-.514.241l-.915-.154-.579 1.467 1.29-.04a.5.5 0 0 1 .315.1l2.176 1.631a.5.5 0 0 0 .38.094l1.445-.235a.5.5 0 0 1 .214.012l2.712.75a.5.5 0 0 0 .307-.012l5.08-1.885a.5.5 0 0 0 .19-.127l1.38-1.471a.5.5 0 0 0 .018-.664l-.715-.851a.5.5 0 0 1-.104-.436l.131-.558a.5.5 0 0 1 .38-.374l1.672-.369a.5.5 0 0 0 .369-.336l1.397-4.392a.5.5 0 0 0-.095-.475l-1.886-2.219a.5.5 0 0 1-.055-.57l.378-.669a.5.5 0 0 0 .021-.448l-.223-.503a.5.5 0 0 0-.343-.284l-1.068-.251a.5.5 0 0 1-.31-.224l-.748-1.21a.5.5 0 0 1-.074-.274l.033-1.468a.5.5 0 0 0-.305-.473l-2.189-.923a.5.5 0 0 0-.42.015l-1.828.928a.5.5 0 0 0-.188.167l-1.13 1.68a.5.5 0 0 0-.062.128l-1.23 3.888a.5.5 0 0 1-.265.301L6.712 9.608a.5.5 0 0 0-.237.233l-1.406 2.88a.5.5 0 0 0-.041.319l.306 1.505a.5.5 0 0 1-.023.278l-.493 1.286a.5.5 0 0 0 .051.456l.432.648a.5.5 0 0 1 .016.53Z"/>
    </svg>
  );
};
