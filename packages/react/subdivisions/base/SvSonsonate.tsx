// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SvSonsonate = ({
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
      <path strokeLinejoin="round" d="M22.762 9.96a.6.6 0 0 0-.329-.593l-4.592-2.304a1 1 0 0 0-1.01.066l-.614.417a.6.6 0 0 1-.382.101l-1.207-.09a.6.6 0 0 1-.525-.785l.254-.779a.6.6 0 0 0-.184-.645l-1.457-1.227a1 1 0 0 0-.767-.227l-2.877.356a.6.6 0 0 0-.508.742l.11.437a3 3 0 0 1 .067 1.112l-.364 2.847q-.057.452-.216.88l-.769 2.08a1 1 0 0 1-.689.622l-.51.131a1 1 0 0 1-.787-.126l-1.421-.909a.6.6 0 0 0-.729.064l-1.474 1.352a.6.6 0 0 0 .089.952l3.964 2.465a1 1 0 0 1 .413.512l.639 1.78a1 1 0 0 0 .957.663l4.092-.066a4 4 0 0 1 .652.043l1.892.281a.6.6 0 0 0 .533-.191l3.95-4.381a1 1 0 0 0 .254-.743l-.14-1.906a1 1 0 0 1 .371-.853l1.395-1.119a.6.6 0 0 1 .448-.127l.765.093a.6.6 0 0 0 .67-.54z"/>
    </svg>
  );
};
