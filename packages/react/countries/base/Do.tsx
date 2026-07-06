// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Do = ({
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
      <path strokeLinejoin="round" d="m4.322 18.494-1.369-1.821a.5.5 0 0 1-.09-.403l.287-1.362a.5.5 0 0 0-.137-.458l-1.549-1.534a.25.25 0 0 1 .078-.407l1.06-.453a.5.5 0 0 0 .26-.664l-.304-.683a.5.5 0 0 1 .083-.535l.742-.838a.5.5 0 0 0 .112-.449l-.634-2.621a.5.5 0 0 1 .394-.61l3.866-.718a.5.5 0 0 1 .209.005l5.317 1.29a.5.5 0 0 1 .267.166l.86 1.037a.5.5 0 0 0 .358.18l3.543.197a.5.5 0 0 1 .466.574l-.08.537a.5.5 0 0 1-.552.423l-2.052-.237a.5.5 0 0 0-.555.449l-.038.397a.5.5 0 0 0 .444.545l4.3.466a.5.5 0 0 1 .213.075l2.5 1.582a.5.5 0 0 1 .117.74l-1.68 2.033a.5.5 0 0 1-.76.012l-.901-1.025a.5.5 0 0 0-.336-.168l-5.177-.413a.5.5 0 0 0-.393.144l-.948.946a.5.5 0 0 1-.285.142l-1.722.238a.5.5 0 0 1-.553-.374l-.106-.425a.5.5 0 0 0-.686-.337l-1.36.596a.5.5 0 0 0-.225.197l-2.158 3.525a.5.5 0 0 1-.826.04Z"/>
    </svg>
  );
};
