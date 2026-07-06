// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArabianPeninsula = ({
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
      <path strokeLinejoin="round" d="m8.581 20.849-.263-.198a1 1 0 0 1-.362-.528l-.286-1.014a1 1 0 0 1-.003-.532l.079-.29a1 1 0 0 0-.15-.84l-.69-.973a1 1 0 0 1-.15-.32l-.301-1.128a1 1 0 0 0-.374-.548l-.863-.634a1 1 0 0 1-.302-.358l-.251-.504a1 1 0 0 1-.106-.447v-.793a1 1 0 0 0-.236-.645L3.204 9.771a1 1 0 0 1-.183-.325L2.253 7.18l-.949-.836.437-1.082 2.435-.789-.591-1.365 1.576-.245a1 1 0 0 1 .577.082l1.663.778a1 1 0 0 1 .295.21l1.311 1.355a1 1 0 0 0 .484.277l.567.137a1 1 0 0 0 1.108-.484l.078-.14a.6.6 0 0 1 .612-.3l.589.089a.6.6 0 0 1 .51.593l.001 1.005a1 1 0 0 0 .342.753l.65.567a1 1 0 0 1 .301.472l.315 1.076a1 1 0 0 0 .398.546l.575.391a1 1 0 0 0 .71.162l.986-.147a1 1 0 0 0 .676-.423l1.19-1.733a.5.5 0 0 1 .628-.169l.117.056a.5.5 0 0 1 .265.316l.311 1.103a1 1 0 0 0 .417.566l.618.403q.095.061.174.143l1.067 1.105-1.427 3.004a1 1 0 0 1-.242.321l-1.698 1.497a1 1 0 0 1-.444.226l-1.553.345a1 1 0 0 0-.628.441l-.381.602a1 1 0 0 1-.476.395L9.55 20.979a1 1 0 0 1-.969-.13Z"/>
    </svg>
  );
};
