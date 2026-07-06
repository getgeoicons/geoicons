// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BlackSea = ({
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
      <path strokeLinejoin="round" d="m9.127 15.447-2.733 1.11a1 1 0 0 1-.608.046l-2.659-.634a1 1 0 0 1-.43-.224l-.828-.732a1 1 0 0 1-.316-.545l-.228-1.091a1 1 0 0 1 .355-.986l1.094-.875a1 1 0 0 0 .331-.486l.392-1.27a1 1 0 0 1 .565-.626l.513-.217a1 1 0 0 0 .583-.696l.166-.715a1 1 0 0 1 .252-.468L6.73 5.836a1 1 0 0 1 .85-.3l1.08.14a1 1 0 0 1 .326.102l1.445.74a.769.769 0 0 1-.21 1.44l-.484.09a.567.567 0 0 0-.201 1.036l.317.201a1 1 0 0 1 .423.562l.072.247a.93.93 0 0 0 1.481.455l.304-.25a1 1 0 0 1 .188-.122l1.229-.614a1 1 0 0 1 .441-.106l.782-.005a1 1 0 0 1 .466.113l.808.418a1 1 0 0 1 .265.2l.802.845a1 1 0 0 0 .368.246l.704.27a1 1 0 0 1 .41.292l1.414 1.689a1 1 0 0 0 .457.308l.743.242q.197.066.353.202l.566.501a1 1 0 0 1 .296.467l.245.833a1 1 0 0 1-.122.829l-.355.543a1 1 0 0 1-.343.323l-1.01.575a1 1 0 0 1-.678.113l-1.372-.256a1 1 0 0 0-.3-.01l-1.427.168a1 1 0 0 1-.46-.054l-1.967-.716q-.166-.061-.301-.175l-1.861-1.568a1 1 0 0 0-.542-.23l-2.326-.24a1 1 0 0 0-.479.067Z"/>
    </svg>
  );
};
