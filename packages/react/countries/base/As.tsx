// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const As = ({
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
      <path strokeLinejoin="round" d="m19.682 10.23 2.057-.552a1 1 0 0 0 .718-.75l.166-.754a.8.8 0 0 0-.627-.958l-.314-.061a1 1 0 0 0-.64.087l-.9.45a1 1 0 0 1-.65.085L14.57 6.76a1 1 0 0 0-.73.13l-1.9 1.18a2 2 0 0 0-.588.56l-.905 1.308a1 1 0 0 1-.771.43l-4.8.243a1 1 0 0 0-.539.19l-2.166 1.58a.6.6 0 0 0 .179 1.059l2.498.76a1 1 0 0 1 .709.957v.362a1 1 0 0 0 .491.86l1.11.657a1 1 0 0 0 .978.022l.744-.395a2 2 0 0 0 .543-.421l4.525-4.977c.193-.213.43-.381.694-.494L17.27 9.65a1 1 0 0 1 .881.047l.785.439a1 1 0 0 0 .747.094Z"/>
    </svg>
  );
};
