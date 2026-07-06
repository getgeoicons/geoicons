// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rs = ({
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
      <path strokeLinejoin="round" d="m7.097 1.245-2.269.985a.5.5 0 0 0-.293.55l.716 3.869a.5.5 0 0 0 .128.252l.777.822a.5.5 0 0 1 .095.543l-.696 1.603a.5.5 0 0 0-.01.372l1.052 2.867a.5.5 0 0 1-.053.45l-.667.999a.5.5 0 0 0 .148.699l3.361 2.136a.5.5 0 0 1 .15.695l-.653 1.003a.5.5 0 0 0-.004.54l1.667 2.648a.5.5 0 0 0 .771.093l1.152-1.116a.5.5 0 0 1 .303-.139l4.148-.372a.5.5 0 0 0 .455-.509l-.039-1.904a.5.5 0 0 1 .212-.419l1.563-1.106a.5.5 0 0 0 .107-.714l-2.048-2.654 1.16-3.732a.5.5 0 0 0-.083-.455l-.314-.404a.5.5 0 0 0-.663-.115l-.96.61a.5.5 0 0 1-.396.06l-1.61-.429a.5.5 0 0 1-.37-.518l.124-1.761a.5.5 0 0 0-.247-.467l-2.003-1.168a.5.5 0 0 1-.188-.195L9.83 1.55a.5.5 0 0 0-.42-.262l-2.093-.083a.5.5 0 0 0-.22.04Z"/>
    </svg>
  );
};
