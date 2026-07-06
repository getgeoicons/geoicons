// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EastEuropeanPlain = ({
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
      <path strokeLinejoin="round" d="m6.002 11.853-2.866 1.03a.6.6 0 0 0-.397.565v2.908a.6.6 0 0 0 .159.406l5.074 5.505a.6.6 0 0 0 .923-.049l.464-.626a.6.6 0 0 1 .823-.136l.64.444a.6.6 0 0 0 .601.048l3.37-1.614a.6.6 0 0 1 .316-.056l2.184.208a.6.6 0 0 0 .598-.855l-.414-.873a.6.6 0 0 1 .066-.623l3.264-4.248a.6.6 0 0 0-.221-.908l-2.672-1.255a.6.6 0 0 1-.304-.325l-1.12-2.871a.6.6 0 0 0-.098-.168L12.36 3.554a.6.6 0 0 1-.137-.322L12.08 1.87a.6.6 0 0 0-.565-.536L9.3 1.215a.6.6 0 0 0-.49.212L7.142 3.395a.6.6 0 0 0-.089.635l.688 1.52a.6.6 0 0 1-.147.695l-.868.776a.6.6 0 0 0-.157.672l.752 1.86a.6.6 0 0 1-.05.548l-.966 1.51a.6.6 0 0 1-.303.242Z"/>
    </svg>
  );
};
