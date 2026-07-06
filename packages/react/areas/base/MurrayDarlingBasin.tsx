// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MurrayDarlingBasin = ({
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
      <path strokeLinejoin="round" d="m2.016 17.466-.507.866a.6.6 0 0 0 .226.827l.874.488a.6.6 0 0 0 .604-.012l.714-.434a1 1 0 0 1 1.372.33l.815 1.329a1 1 0 0 0 .68.462l5.209.911a1 1 0 0 0 .34 0l2.407-.412a1 1 0 0 0 .711-.511l.595-1.104a.6.6 0 0 1 .877-.203l.596.426a.669.669 0 0 0 1.055-.61l-.21-2.128a1 1 0 0 1 .103-.55l.716-1.413a1 1 0 0 0-.05-.992l-.196-.305a1 1 0 0 1 .646-1.521l1.135-.226a1 1 0 0 0 .801-1.067l-.068-.788a1 1 0 0 1 .08-.488l1.027-2.338a1 1 0 0 0-.112-.996L20.888 4.88a1 1 0 0 0-.805-.406h-2.695a.94.94 0 0 1-.94-.991.94.94 0 0 0-.547-.906l-1.437-.658a1 1 0 0 0-.8-.014l-1.004.418a1 1 0 0 0-.362.258l-.986 1.106a1 1 0 0 0-.219.403L9.77 8.947a1 1 0 0 1-.133.292l-1.299 1.948a1 1 0 0 1-.254.261l-2.302 1.629a1 1 0 0 1-.368.162l-2.49.532a1 1 0 0 0-.646.459l-.288.474a1 1 0 0 0-.125.715l.269 1.346a1 1 0 0 1-.118.701Z"/>
    </svg>
  );
};
