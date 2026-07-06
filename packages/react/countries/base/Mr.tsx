// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mr = ({
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
      <path strokeLinejoin="round" d="M8.27 11.805H2.222L3.385 13.5a.5.5 0 0 1 .062.441l-.393 1.181a.5.5 0 0 0 .021.37l.587 1.249a.5.5 0 0 1 .047.218l-.016 1.298a.5.5 0 0 1-.03.162l-.45 1.257a.5.5 0 0 0 .593.653l2.094-.523a.5.5 0 0 1 .443.102l3.047 2.56a.5.5 0 0 0 .715-.073l.477-.608a.5.5 0 0 1 .624-.134l.799.417a.5.5 0 0 0 .34.044l1.863-.414a.5.5 0 0 1 .112-.012l5.995.047a.5.5 0 0 0 .471-.321l.231-.605a.5.5 0 0 0-.139-.556l-.437-.38a.5.5 0 0 1-.169-.325L18.779 5.541h2.999L15.468 1.2l.071 2.024a.5.5 0 0 1-.508.518l-4.33-.072a.5.5 0 0 0-.508.505l.036 3.658a.5.5 0 0 1-.263.446l-1.29.692a.5.5 0 0 0-.262.465l.105 2.107a.25.25 0 0 1-.25.262Z"/>
    </svg>
  );
};
