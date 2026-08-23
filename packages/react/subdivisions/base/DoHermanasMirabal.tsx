// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DoHermanasMirabal = ({
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
      <path strokeLinejoin="round" d="M7.874 19.803a3 3 0 0 1 .34 1.045l.183 1.412a.6.6 0 0 0 .614.522l1.841-.059a.6.6 0 0 0 .567-.729l-.305-1.386a1 1 0 0 1 .143-.767l1.037-1.564a1 1 0 0 0 .158-.685l-.184-1.375a2 2 0 0 1 .118-.987l1.122-2.899a2 2 0 0 1 .574-.805l2.649-2.239a.6.6 0 0 0-.178-1.02l-.923-.345a.6.6 0 0 1-.39-.552l-.01-.625a.6.6 0 0 1 .533-.607l1.836-.206a.6.6 0 0 0 .515-.452l.273-1.106a.6.6 0 0 0-.473-.734l-1.415-.26a1 1 0 0 1-.77-.678l-.123-.382a1.45 1.45 0 0 0-2.011-.862l-.097.047c-.513.248-.87.735-.95 1.3l-.089.617a.6.6 0 0 1-.923.416L8.593 1.905a.6.6 0 0 0-.872.245L6.46 4.818a1 1 0 0 0-.043.75l.968 2.844a1 1 0 0 1 .01.614l-1.813 5.93a1 1 0 0 0 .078.77z"/>
    </svg>
  );
};
