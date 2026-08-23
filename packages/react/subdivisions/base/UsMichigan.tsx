// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMichigan = ({
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
      <path strokeLinejoin="round" d="M11.42 16.118c1.01 2.565-.36 4.78-1.206 5.863a.502.502 0 0 0 .392.819h8.16a.6.6 0 0 0 .507-.28l2.216-3.525a1 1 0 0 0 .137-.709l-.518-2.883a.942.942 0 0 0-1.663-.42l-.612.771a.817.817 0 1 1-1.253-1.047l1.194-1.359a1 1 0 0 0 .248-.634l.04-1.566a1 1 0 0 0-.614-.948l-2.343-.977a1 1 0 0 0-1.06.184l-2.144 1.96a3 3 0 0 0-.886 1.485l-.65 2.593c-.056.223-.03.458.055.673ZM5.575 3.36 2.816 5.176a.296.296 0 0 0 .07.528l3.036.997A3 3 0 0 1 7.67 8.209l.608 1.214a.6.6 0 0 0 1.022.085l.848-1.166a2 2 0 0 1 1.228-.785l2.577-.512a3 3 0 0 1 1.025-.025l3.086.458a.59.59 0 0 0 .4-1.083L15.328 4.43a1 1 0 0 0-.803-.115l-3.375.955a2 2 0 0 1-1.481-.157l-1.233-.654a1 1 0 0 1-.112-1.697l.386-.276a.6.6 0 0 0-.169-1.06l-.147-.047a1 1 0 0 0-.997.237L5.722 3.242a1 1 0 0 1-.147.119Z"/>
    </svg>
  );
};
