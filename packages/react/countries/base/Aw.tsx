// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Aw = ({
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
      <path strokeLinejoin="round" d="M8.386 15.94 2.73 10.384a1 1 0 0 1-.157-1.229l.992-1.653a2 2 0 0 0 .232-.572l.189-.805a2 2 0 0 0-.05-1.09L3.411 3.47a1 1 0 0 0-.268-.415l-.332-.309a.767.767 0 0 1 1.001-1.16l2.574 2.06a1 1 0 0 1 .296.389l.558 1.313a2 2 0 0 0 .443.648l1.636 1.6a2 2 0 0 0 .52.367l3.622 1.769a1 1 0 0 1 .345.277l1.987 2.508q.071.09.16.16l3.3 2.627a1 1 0 0 1 .323.456l1.906 5.532a1 1 0 0 1-.69 1.293l-.463.122a1 1 0 0 1-.68-.062l-3.694-1.737a1 1 0 0 1-.17-.102l-5.225-3.88a1 1 0 0 0-.226-.126l-1.618-.644a1 1 0 0 1-.33-.216Z"/>
    </svg>
  );
};
