// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RhineBasin = ({
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
      <path strokeLinejoin="round" d="m8.333 6.434-3.075-.538a.6.6 0 0 1-.415-.894L6.22 2.657a1 1 0 0 1 .539-.44l1.999-.685a1 1 0 0 1 1.277.645l1.038 3.29a1 1 0 0 0 1.06.693l1.283-.137a.617.617 0 0 1 .575.962l-.531.775a1 1 0 0 0 .103 1.257l1.152 1.203a1 1 0 0 0 .812.304l2.831-.254a1 1 0 0 1 1.016.619l.142.35a1 1 0 0 1 .074.401l-.031 1.255a1 1 0 0 1-.241.626l-.582.68a.82.82 0 0 1-1.174.07.82.82 0 0 0-1.338.374l-.168.572a1 1 0 0 1-.624.66l-1.577.562a.835.835 0 0 0 .4 1.612l.933-.135a1 1 0 0 1 .851.282l.2.2a1 1 0 0 1 .293.746l-.062 1.594a1 1 0 0 1-.224.593l-.765.938a1 1 0 0 1-1.085.318l-1.292-.422a1 1 0 0 0-.573-.014l-1.92.524a1 1 0 0 1-.58-.016l-2.168-.723 1.83-1.892a1 1 0 0 0-.05-1.439l-1.328-1.192a1 1 0 0 1-.266-.385l-.967-2.516a1 1 0 0 1-.063-.446l.167-1.9a1 1 0 0 1 .418-.73l1.336-.946a1 1 0 0 0 .418-.904l-.2-2.255a1 1 0 0 0-.824-.897Z"/>
    </svg>
  );
};
