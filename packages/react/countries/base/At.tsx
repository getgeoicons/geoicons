// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const At = ({
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
      <path strokeLinejoin="round" d="m11.106 12.678-2.176-.633a.5.5 0 0 0-.278 0L4.46 13.25a.5.5 0 0 1-.285-.003l-2.331-.72a.5.5 0 0 0-.647.466l-.03 1.16a.5.5 0 0 0 .356.49l3.35 1.012a.5.5 0 0 0 .266.006l3.315-.84a.5.5 0 0 1 .61.374l.217.952a.5.5 0 0 0 .39.38l5.615 1.123a.5.5 0 0 0 .448-.133l.79-.773a.5.5 0 0 1 .3-.14l2.443-.239a.5.5 0 0 0 .27-.111l1.36-1.118a.5.5 0 0 0 .181-.351l.155-2.185a.5.5 0 0 1 .442-.461l.693-.08a.5.5 0 0 0 .441-.531l-.236-3.454a.5.5 0 0 0-.512-.465l-1.465.037a.5.5 0 0 1-.185-.03L17.225 6.45a.5.5 0 0 0-.616.241l-.674 1.314a.5.5 0 0 1-.623.238l-1.444-.55a.5.5 0 0 0-.488.075l-2.625 2.077a.5.5 0 0 0-.15.586l.802 1.91a.25.25 0 0 1-.3.337Z"/>
    </svg>
  );
};
