// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsOhio = ({
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
      <path strokeLinejoin="round" d="M21.891 9.832a1 1 0 0 0 .044-.296l-.039-7.886a.3.3 0 0 0-.416-.275L13.374 4.79a1 1 0 0 1-.822-.02L8.657 2.897a1 1 0 0 0-.469-.099l-5.753.203a.3.3 0 0 0-.29.298l-.08 15.022a.3.3 0 0 0 .262.3l1.288.167a1 1 0 0 1 .807.64l.223.595a1 1 0 0 0 .531.563l1.953.864a1 1 0 0 0 .579.07l3.001-.53a.6.6 0 0 1 .578.22l.985 1.26a.6.6 0 0 0 .657.2l.682-.22a.6.6 0 0 0 .37-.34l1.159-2.789a.6.6 0 0 1 .212-.263l4.44-3.074a1 1 0 0 0 .386-.53z"/>
    </svg>
  );
};
