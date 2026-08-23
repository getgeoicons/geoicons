// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtSanMarcos = ({
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
      <path strokeLinejoin="round" d="M19.362 6.372a.6.6 0 0 0-.157-.706l-2.81-2.391a1 1 0 0 0-.581-.237l-2.708-.181a1 1 0 0 0-.617.163L9.917 4.717a.8.8 0 0 1-.593.118l-.648-.126a.6.6 0 0 1-.483-.64l.175-2.039a.6.6 0 0 0-.46-.635l-.39-.092a.6.6 0 0 0-.658.285L4.967 4.88a.6.6 0 0 0 .052.673l2.949 3.691a.6.6 0 0 1-.061.815l-1.293 1.199a1 1 0 0 0-.32.696l-.203 5.555a3 3 0 0 1-.295 1.192l-1.097 2.275a.7.7 0 0 0 .21.864l.868.652a.7.7 0 0 0 .825.013l1.516-1.072a.7.7 0 0 0 .062-1.095l-.339-.301a.7.7 0 0 1-.111-.92l.888-1.288a1 1 0 0 1 .777-.431l4.193-.194a1 1 0 0 0 .924-.757l.455-1.82a2 2 0 0 1 .543-.946l1.391-1.36a1 1 0 0 0 .3-.666l.062-1.268a1 1 0 0 0-.133-.548l-.303-.525a1 1 0 0 1 .55-1.448l1.289-.432a.6.6 0 0 0 .355-.32z"/>
    </svg>
  );
};
