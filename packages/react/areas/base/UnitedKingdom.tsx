// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UnitedKingdom = ({
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
      <path strokeLinejoin="round" d="m17.71 20.595-4.364.659a1 1 0 0 0-.258.075l-3.107 1.383a.6.6 0 0 1-.405.03l-.243-.068a.6.6 0 0 1-.213-1.047l2.59-2.064a.388.388 0 0 0-.215-.693l-1.303-.092a.6.6 0 0 1-.487-.314l-.175-.327a.6.6 0 0 1 .462-.88l.306-.034a1 1 0 0 0 .858-1.244l-.208-.807a.6.6 0 0 1 .537-.748l.593-.043a1 1 0 0 0 .92-.874l.061-.496a1 1 0 0 0-.141-.65l-.394-.636a1 1 0 0 0-.879-.473l-.734.02a.79.79 0 0 1-.784-1.006l.197-.697a1 1 0 0 0-.457-1.136l-1.2-.7a1 1 0 0 1-.49-.765l-.193-1.934a1 1 0 0 1 .22-.732l1.712-2.096a1 1 0 0 1 .535-.339l2.154-.531a.568.568 0 0 1 .456 1.02l-1.088.743a.6.6 0 0 0-.26.558l.026.237a.6.6 0 0 0 .71.527l1.842-.354a.633.633 0 0 1 .651.966l-1.291 1.994a1 1 0 0 0 .274 1.369l.546.374a1 1 0 0 1 .418.644l.173.942a1 1 0 0 0 .27.52l1.128 1.146a1 1 0 0 1 .242.403l.692 2.215a1 1 0 0 0 .742.678l1.085.237a1 1 0 0 1 .781 1.09l-.216 1.907a1 1 0 0 1-.306.614l-1.231 1.166a1 1 0 0 1-.538.263Z"/><path strokeLinejoin="round" d="m5.435 10.14-.828.885a1 1 0 0 0 .079 1.44l.373.322a1 1 0 0 0 .471.225l1.11.205a1 1 0 0 0 .868-.257l.484-.457a1 1 0 0 0 .18-1.225l-.47-.818a1 1 0 0 0-.669-.482l-.669-.136a1 1 0 0 0-.93.297Z"/>
    </svg>
  );
};
