// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mv = ({
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
      <path strokeLinejoin="round" d="M10.737 19.277 10 18.766a.782.782 0 1 1 .914-1.27l1.068.798a1 1 0 0 1 .313 1.214l-.346.766 1.345.747a.79.79 0 1 1-.776 1.376l-1.738-.993a1 1 0 0 1-.42-1.271zm.743-6.66-1.28 1.418a.773.773 0 1 1-1.133-1.051l1.09-1.143-.8-2.503a.748.748 0 0 1 1.423-.461l.906 2.76a1 1 0 0 1-.208.98Zm2.062-1.482.004-1.23a1 1 0 0 1 .223-.627l.602-.744a.753.753 0 1 1 1.14.983l-.512.56v1.06a.728.728 0 1 1-1.457-.002ZM11.566 5.47l-.79 1.15a.769.769 0 1 1-1.253-.892l.547-.744-.609-.508a1 1 0 0 1-.199-1.311l.906-1.399a.791.791 0 1 1 1.303.896l-.707.97.61.496a1 1 0 0 1 .192 1.342Z"/>
    </svg>
  );
};
