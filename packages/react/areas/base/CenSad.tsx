// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CenSad = ({
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
      <path strokeLinejoin="round" d="m6.852 16.368-1.835.415a1 1 0 0 1-.722-.11l-1.212-.703a1 1 0 0 1-.323-.3l-1.377-2.008a1 1 0 0 1-.175-.591l.064-2.469a1 1 0 0 1 .164-.523l3.022-4.601a1 1 0 0 1 .967-.443l.178.024a1 1 0 0 1 .853.805l.032.171a1 1 0 0 1-.365.972l-.985.775a1 1 0 0 0-.337.492l-.039.124a1 1 0 0 0 .286 1.036l2.309 2.086a1 1 0 0 0 1.384-.042l.88-.896a1 1 0 0 0 .216-1.066L8.705 6.638a1 1 0 0 1-.068-.315l-.07-1.351a.797.797 0 0 1 1.584-.163l.19 1.219a1 1 0 0 0 .63.78l1.048.403a1 1 0 0 0 1.151-.322l.056-.073a1 1 0 0 1 .948-.376l2.253.358a.6.6 0 0 1 .504.627l-.087 1.476a1 1 0 0 0 .177.628l2.8 4.043a1 1 0 0 0 .98.419l1.999-.319-1.446 3.38a1 1 0 0 1-.237.338l-2.73 2.546-.194-2.13a1 1 0 0 1 .5-.958l.863-.494a.25.25 0 0 0 .042-.404l-1.909-1.696a1 1 0 0 0-.934-.216l-2.013.565a.6.6 0 0 0-.368.859l.657 1.238-3.309.725-.29-2.486a.586.586 0 0 0-1.064-.263l-1.223 1.781a.6.6 0 0 1-.654.24l-1.153-.318a1 1 0 0 0-.486-.01Z"/>
    </svg>
  );
};
