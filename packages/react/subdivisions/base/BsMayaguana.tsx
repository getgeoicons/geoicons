// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BsMayaguana = ({
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
      <path strokeLinejoin="round" d="M9.37 12.619a1 1 0 0 1 .69-.213l4.992.36a1 1 0 0 1 .638.294l3.396 3.424a1 1 0 0 0 1.354.06l.56-.47a5 5 0 0 0 1.124-1.352l.197-.348a1 1 0 0 0-.347-1.347l-3.011-1.842a3 3 0 0 0-.936-.374l-4.799-1.032a1 1 0 0 0-.866.224l-.098.084a1 1 0 0 1-1.093.146L7.623 8.509a1 1 0 0 0-.649-.078L5.88 8.67a1 1 0 0 1-.853-.21l-1.002-.836a.6.6 0 0 0-.984.425l-.104 1.748a1 1 0 0 1-.296.652l-.944.932a.92.92 0 0 0 .587 1.572l.14.009a1 1 0 0 0 .393-.054l1.095-.383a1 1 0 0 1 .967.173L6.4 13.956a1 1 0 0 0 1.257.014z"/>
    </svg>
  );
};
