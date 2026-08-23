// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const KnChristChurchNicholaTown = ({
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
      <path strokeLinejoin="round" d="m4.728 17.762-2.413-2.707a.3.3 0 0 1-.007-.391l5.81-6.989a1 1 0 0 0 .23-.599l.077-1.91a1 1 0 0 1 .614-.883l.732-.306a1 1 0 0 0 .603-.772l.077-.506a1 1 0 0 1 .687-.802l2.2-.697 7.033 3.617a1 1 0 0 1 .4.374l.842 1.399a1 1 0 0 1 .085.852l-.21.589a1 1 0 0 1-.84.658l-.504.051a1 1 0 0 0-.63.314l-1.732 1.86a1 1 0 0 0-.264.585l-.122 1.255a1 1 0 0 1-.24.557l-1.737 2.008a2 2 0 0 0-.467 1.019l-.407 2.776a2 2 0 0 0 .069.884l.473 1.52q.043.141.018.285l-.076.42a.6.6 0 0 1-.682.486l-1.913-.296a2 2 0 0 1-.414-.11l-7.19-2.77a.3.3 0 0 1-.189-.32l.16-1.212a.3.3 0 0 0-.073-.239Z"/>
    </svg>
  );
};
