// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bs = ({
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
      <path strokeLinejoin="round" d="m2.8 3.717-.601-.738a.5.5 0 0 1 .272-.802l3.91-.923a.5.5 0 0 1 .417.088l2.01 1.517a.5.5 0 0 1 .18.532l-.564 2.04a.5.5 0 0 1-.508.366l-1.037-.054a.5.5 0 0 1-.467-.584l.197-1.154a.5.5 0 0 0-.576-.578l-2.762.467a.5.5 0 0 1-.471-.177Zm3.043 4.224-1.982.337a.5.5 0 0 0-.351.739l2.447 4.33a.5.5 0 0 0 .688.185l.912-.534a.5.5 0 0 0 .222-.59L6.4 8.276a.5.5 0 0 0-.558-.335Zm6.019 3.504L9.152 7.85a.5.5 0 0 1 .03-.637L9.8 6.53a.5.5 0 0 1 .735-.005l3.847 4.122a.5.5 0 0 1 .12.22l1.06 4.227a.5.5 0 0 0 .362.363l2.418.616a.5.5 0 0 1 .286.77L17.6 18.32a.5.5 0 0 1-.734.096l-5.15-4.37a.5.5 0 0 1-.163-.496l.397-1.69a.5.5 0 0 0-.087-.415Zm6.026 10.093.473.887a.5.5 0 0 0 .603.238l2.838-.969a.5.5 0 0 0 .301-.663l-.43-1.047a.5.5 0 0 0-.645-.275l-2.88 1.128a.5.5 0 0 0-.26.7Z"/>
    </svg>
  );
};
