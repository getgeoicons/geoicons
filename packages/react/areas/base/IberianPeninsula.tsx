// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const IberianPeninsula = ({
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
      <path strokeLinejoin="round" d="m2.33 15.731-.304 1.667a.6.6 0 0 0 .468.695l.952.198a1 1 0 0 0 .604-.062l.547-.239a1 1 0 0 1 .978.101l.333.236a1 1 0 0 1 .382.538l.234.81a1 1 0 0 0 .514.616l.249.125a1 1 0 0 0 1.118-.153l1.037-.94a1 1 0 0 1 .705-.258l2.936.1a1 1 0 0 0 .976-.662l.094-.263a1 1 0 0 1 .709-.636l.736-.177a.6.6 0 0 0 .436-.412l.285-.962a1 1 0 0 1 .336-.498l.724-.576a.6.6 0 0 0 .123-.806l-.575-.846a1 1 0 0 1-.022-1.09l1.457-2.342a1 1 0 0 1 .398-.364l3.662-1.855a.6.6 0 0 0 .324-.611l-.077-.607a.6.6 0 0 0-.682-.517l-1.949.285a1 1 0 0 1-.565-.082l-1.054-.49a1 1 0 0 0-.466-.091l-1.748.078a1 1 0 0 1-.617-.18l-1.401-.977a1 1 0 0 0-.618-.18l-3.535.162a1 1 0 0 1-.3-.032l-1.68-.442a1 1 0 0 0-.316-.03l-1.36.083a1 1 0 0 1-.596-.152l-.486-.307a1 1 0 0 0-.999-.04l-1.475.775A1 1 0 0 0 2.3 5.367l.691 4.255a1 1 0 0 1-.064.546l-1.41 3.375a.97.97 0 0 0 .376 1.194.97.97 0 0 1 .436.994Z"/>
    </svg>
  );
};
