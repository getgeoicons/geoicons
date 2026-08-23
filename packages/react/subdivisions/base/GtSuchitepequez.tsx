// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtSuchitepequez = ({
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
      <path strokeLinejoin="round" d="M20.038 7.295a1 1 0 0 0-.504-.645l-1.25-.66a1 1 0 0 0-1.089.1l-1.05.832a.6.6 0 0 1-.9-.184L13.868 4.2a1 1 0 0 0-1.286-.436l-2.004.892a.972.972 0 0 1-1.256-.862l-.125-1.802a.3.3 0 0 0-.057-.158l-.27-.366a.3.3 0 0 0-.444-.045l-1.74 1.58a1 1 0 0 0-.304.522l-.498 2.222a5 5 0 0 0-.119.937l-.153 4.88-.858 5.027a5 5 0 0 1-.43 1.343l-.89 1.833a.6.6 0 0 0 .223.772l3.106 1.928a.6.6 0 0 0 .842-.221l2.228-4.049a1 1 0 0 0 .118-.586l-.173-1.66a1 1 0 0 1 .741-1.07l4.387-1.15a1 1 0 0 1 .784.12l1.347.843a.6.6 0 0 1 .264.649l-.427 1.772a.6.6 0 0 0 .472.73l.698.132a.6.6 0 0 0 .687-.422l1.923-6.64a2 2 0 0 0 .021-1.034z"/>
    </svg>
  );
};
