// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Fm = ({
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
      <path strokeLinejoin="round" d="m4.575 5.067-3.14 2.747a.5.5 0 0 0-.152.508l.734 2.686a.5.5 0 0 0 .545.364l1.308-.167a.5.5 0 0 1 .496.246l1.027 1.78a.5.5 0 0 1 .058.343l-.587 3.063a.5.5 0 0 0 .058.345l1.36 2.348a.5.5 0 0 0 .35.243l2.737.456a.5.5 0 0 1 .212.09l1.422 1.036a.5.5 0 0 0 .374.09l4.502-.72a.5.5 0 0 1 .237.02l2.203.734a.5.5 0 0 0 .612-.264l1.813-3.905a.5.5 0 0 0-.154-.61l-1.918-1.44a.5.5 0 0 1-.2-.374l-.06-1.207a.5.5 0 0 1 .552-.522l3.122.33a.5.5 0 0 0 .538-.62l-1.289-5.083a.5.5 0 0 0-.538-.374l-3.07.334a.5.5 0 0 1-.541-.385l-.738-3.187a.5.5 0 0 0-.494-.387l-3.856.053a.5.5 0 0 1-.12-.013l-3.884-.908a.5.5 0 0 0-.613.464l-.109 2.357a.5.5 0 0 1-.769.399l-1.43-.915a.5.5 0 0 0-.598.045Z"/>
    </svg>
  );
};
