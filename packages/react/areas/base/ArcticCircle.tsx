// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ArcticCircle = ({
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
      <path strokeLinejoin="round" d="m8.345 20.344-2.303.749a10.9 10.9 0 0 1-2.718-2.578l2.65-1.994a1 1 0 0 0 .393-.701l.067-.68a1 1 0 0 1 .232-.548l.409-.484a.574.574 0 0 0-.482-.944l-1.386.106a1 1 0 0 0-.785.49l-1.978 3.36A10.75 10.75 0 0 1 1.2 12.083c0-4.715 3.021-8.724 7.233-10.197l.895.94a.6.6 0 0 1 .081.72l-.42.708a1 1 0 0 1-.51.425l-2.07.775a1 1 0 0 0-.542.484l-.288.568a1 1 0 0 0 .19 1.164l.95.938a1 1 0 0 1 .277.508l.347 1.664a1 1 0 0 0 .33.557l.691.59a1 1 0 0 1 .302.45l.313.96a1 1 0 0 0 .626.636l.455.157c.194.066.362.19.483.356l.57.78a.6.6 0 0 1-.027.74l-.579.688a1 1 0 0 0-.224.5l-.152 1.028a1 1 0 0 1-.223.497L8.8 20.036a1 1 0 0 1-.456.308Zm5.437.973.115 1.4c5.06-.896 8.903-5.316 8.903-10.634 0-5.965-4.835-10.8-10.8-10.8q-.616 0-1.214.067l.205 1.153a.6.6 0 0 0 .366.451l1.11.45a1 1 0 0 0 .224.06l1.378.21a1 1 0 0 1 .645.381l1.392 1.822a1 1 0 0 0 .401.312l.905.388a1 1 0 0 1 .578.684l.241.994a1 1 0 0 1-.127.77l-.685 1.083a1 1 0 0 0 .106 1.207l1.049 1.153a1 1 0 0 1 .225.936l-.18.663a1 1 0 0 0 .175.876l.397.51a1 1 0 0 1 .043 1.17l-1.067 1.6a1 1 0 0 1-.598.418l-1.932.465a1 1 0 0 0-.54.339l-1.181 1.443a.6.6 0 0 0-.134.429Z"/>
    </svg>
  );
};
