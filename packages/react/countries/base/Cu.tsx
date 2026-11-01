// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cu = ({
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
      <path strokeLinejoin="round" d="m5.959 14.031-.753-.208a.5.5 0 0 1-.35-.609l.19-.72a.5.5 0 0 1 .613-.356l.752.203a.5.5 0 0 1 .353.608l-.187.726a.5.5 0 0 1-.618.356Zm9.748 1.919 4.397-.133q.226-.007.445-.064l1.488-.389a.756.756 0 0 0 .195-1.38l-.727-.434a3 3 0 0 0-.566-.262l-2.828-.965a4 4 0 0 1-1.082-.566l-2.402-1.77a1 1 0 0 0-.546-.194l-1.229-.058a2 2 0 0 1-.8-.21l-1.607-.803a4 4 0 0 0-1.323-.395l-1.709-.2a4 4 0 0 0-1.522.114l-2.588.708a2 2 0 0 0-1.082.742l-.532.721a.6.6 0 0 0 .291.925l.298.1a1 1 0 0 0 .717-.03l2.469-1.074a2 2 0 0 1 1.263-.111l6.023 1.44a2 2 0 0 1 1.111.715l.39.499a1 1 0 0 0 .729.383l1.173.07a.539.539 0 0 1 .217 1.013l-.953.497a.589.589 0 0 0 .29 1.11Z"/>
    </svg>
  );
};
