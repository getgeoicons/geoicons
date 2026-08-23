// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BzOrangeWalk = ({
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
      <path strokeLinejoin="round" d="M2.33 21.738a.6.6 0 0 0 .91.512l1.102-.667c.2-.121.421-.206.651-.251l8.358-1.638a.6.6 0 0 0 .484-.613l-.117-2.982a1 1 0 0 1 .23-.68l1.018-1.221a2 2 0 0 0 .464-1.245l.051-2.864a1.5 1.5 0 0 1 1.167-1.436l4.468-1.018a.3.3 0 0 0 .13-.52l-2.867-2.458a2 2 0 0 1-.517-.685l-.597-1.303a1 1 0 0 0-.522-.506l-1.763-.739a1 1 0 0 0-.995.128l-1.134.868a1 1 0 0 0-.365.564l-.468 1.984a2 2 0 0 1-.448.865L9.037 8.701a1 1 0 0 1-1.324.157l-2.352-1.65a1 1 0 0 0-.902-.127l-1.483.514a1 1 0 0 0-.672.947z"/>
    </svg>
  );
};
