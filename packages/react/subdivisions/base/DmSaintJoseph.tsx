// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DmSaintJoseph = ({
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
      <path strokeLinejoin="round" d="M9.918 3.282a1 1 0 0 0-.792-.268l-1.065.111a2 2 0 0 0-1.414.82L5.22 5.927a2 2 0 0 1-.679.593l-1.18.632a2 2 0 0 0-.475.355L1.57 8.83a.6.6 0 0 0-.048.79l.609.784a1 1 0 0 1 .151.95l-.158.442a1 1 0 0 0 .373 1.16l1.144.79a2 2 0 0 1 .681.812l1.186 2.583a2 2 0 0 1 .173 1.03l-.124 1.26a1 1 0 0 0 .295.81l.45.443a.6.6 0 0 0 .765.062l1.215-.853a2 2 0 0 1 .914-.349l1.982-.235c.291-.034.586-.005.864.088l2.109.698a2 2 0 0 0 1.557-.127l4.165-2.182a2 2 0 0 0 1.068-1.647l.034-.545a1 1 0 0 1 .332-.684l.683-.61a2 2 0 0 0 .666-1.42l.106-2.938a2 2 0 0 0-.767-1.648l-2.33-1.821a2 2 0 0 0-.997-.41L17.37 5.91a2 2 0 0 1-.808-.28l-.937-.571a1 1 0 0 0-1.037-.004l-1.06.638a1 1 0 0 1-1.204-.13z"/>
    </svg>
  );
};
