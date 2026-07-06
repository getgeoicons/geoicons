// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Fi = ({
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
      <path strokeLinejoin="round" d="M9.583 22.654 8.136 21.6a.5.5 0 0 1-.205-.394l-.073-3.638a.5.5 0 0 1 .113-.326l3.667-4.49a.5.5 0 0 0-.074-.706l-.834-.669a.5.5 0 0 1-.184-.338l-.438-4.185a.5.5 0 0 0-.187-.34L7.219 4.373a.5.5 0 0 1-.045-.744l.673-.68a.5.5 0 0 1 .787.099l.72 1.227a.5.5 0 0 0 .272.222l1.423.474a.5.5 0 0 0 .653-.399l.353-2.325a.5.5 0 0 1 .28-.376l1.124-.535a.5.5 0 0 1 .528.061l1 .802a.5.5 0 0 1 .154.567l-.777 2.05a.5.5 0 0 0 .073.484l1.22 1.57a.5.5 0 0 1 .026.576l-.69 1.081a.5.5 0 0 0-.033.476l.844 1.857a.5.5 0 0 1 .044.223l-.137 4.188a.5.5 0 0 0 .122.344l1.116 1.288a.5.5 0 0 1 .015.636L13.88 21.47a.5.5 0 0 1-.249.17l-3.609 1.088a.5.5 0 0 1-.439-.074Z"/>
    </svg>
  );
};
