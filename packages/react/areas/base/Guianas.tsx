// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Guianas = ({
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
      <path strokeLinejoin="round" d="M2.529 5.991 4.09 4.876a1 1 0 0 1 1.228.05l5.134 4.35a1 1 0 0 0 .584.235l6.585.411a1 1 0 0 1 .393.108l2.677 1.371a1 1 0 0 1 .31.247l1.487 1.773a.6.6 0 0 1 .013.755l-2.625 3.358a1 1 0 0 1-.698.38l-1.55.14a1 1 0 0 1-.799-.288l-.711-.711a1 1 0 0 0-.707-.293h-1.095c-.426 0-.8.279-.923.686a.964.964 0 0 1-1.063.677l-1.366-.201a1 1 0 0 0-.628.113l-2.466 1.36a1 1 0 0 1-.692.101l-1.554-.333a1 1 0 0 1-.734-.645l-.746-2.113a1 1 0 0 1 .015-.704l.673-1.681a1 1 0 0 0-.222-1.079l-2.98-2.98a1 1 0 0 1-.247-1.009l.774-2.45a1 1 0 0 1 .372-.513Z"/>
    </svg>
  );
};
