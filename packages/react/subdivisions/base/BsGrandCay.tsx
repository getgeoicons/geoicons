// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsGrandCay = ({
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
      <path strokeLinejoin="round" d="m2.64 7.765-.7.14a.814.814 0 0 0-.51 1.26l.522.756a1 1 0 0 0 .79.432l.905.029a1 1 0 0 0 .961-.628l.254-.633a1 1 0 0 1 .453-.509l2.02-1.09a.6.6 0 0 0-.116-1.104L4.721 5.68a.6.6 0 0 0-.697.29l-.702 1.291a1 1 0 0 1-.683.503Zm4.115 3.592-.036-.053a.962.962 0 0 1 .71-1.5l1.76-.155a.6.6 0 0 1 .608.822l-.323.8a1 1 0 0 1-1.033.62l-.965-.103a1 1 0 0 1-.72-.431Zm14.025 6.777-4.7-1.936a.902.902 0 0 1 .621-1.692l4.878 1.574a1 1 0 0 1 .54 1.482l-.11.178a1 1 0 0 1-1.23.394Z"/>
    </svg>
  );
};
