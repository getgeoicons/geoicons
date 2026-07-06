// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Altiplano = ({
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
      <path strokeLinejoin="round" d="m5.41 3.454.132 1.078a1 1 0 0 0 .723.841l1.152.323a1 1 0 0 1 .559.403l2.75 4.07q.088.13.132.28l1.299 4.453a1 1 0 0 1 .04.256l.116 4.734a1 1 0 0 0 .262.65l1.624 1.775a1 1 0 0 0 1.061.271l1.929-.66a1 1 0 0 0 .675-1l-.12-2.23a1 1 0 0 1 .05-.375l.774-2.282a1 1 0 0 0 .049-.406l-.402-4.718a3 3 0 0 0-.343-1.157l-1.497-2.807a3 3 0 0 0-.72-.888l-4.242-3.551a3 3 0 0 0-1.355-.646l-2.79-.54a1 1 0 0 0-1.026.43l-.674 1.025a1 1 0 0 0-.158.671Z"/>
    </svg>
  );
};
