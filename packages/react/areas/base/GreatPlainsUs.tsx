// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GreatPlainsUs = ({
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
      <path strokeLinejoin="round" d="m8.728 18.043-.71.97a.6.6 0 0 0 0 .709l1.89 2.586a.6.6 0 0 0 .845.126l.527-.398a1 1 0 0 1 .635-.2l2.36.077a1 1 0 0 0 .654-.216l.586-.466a1 1 0 0 0 .286-.362l.487-1.05a1 1 0 0 1 .547-.512l1.039-.401a1 1 0 0 0 .639-.98l-.255-5.356a1 1 0 0 0-.075-.334l-1.269-3.072a1 1 0 0 1-.076-.395l.034-2.578q0-.081-.011-.161l-.546-3.64c-5.327-.089-9.46-.83-10.862-1.19l1.15 3.545a1 1 0 0 0 .795.68l.413.065a1 1 0 0 1 .638.38l.927 1.21a1 1 0 0 1 .2.497l.74 6.587a1 1 0 0 1-.23.757l-.91 1.076a1 1 0 0 0-.235.62l-.02.86a1 1 0 0 1-.193.566Z"/>
    </svg>
  );
};
