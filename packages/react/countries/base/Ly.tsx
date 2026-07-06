// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ly = ({
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
      <path strokeLinejoin="round" d="m21.3 22.674-10.694-5.598a.5.5 0 0 0-.44-.012l-2.015.92a.5.5 0 0 1-.589-.131l-.857-1.006a.5.5 0 0 0-.228-.152L2.413 15.39a.5.5 0 0 1-.297-.258l-.998-2.061a.5.5 0 0 1 .158-.624l.41-.294a.5.5 0 0 0 .208-.409L1.876 8.06a.5.5 0 0 0-.087-.28L.934 6.53l1.235-.813a.5.5 0 0 0 .213-.53l-.137-.599a.5.5 0 0 1 .21-.528l1.501-1a.5.5 0 0 0 .223-.44L4.11 1.2l5.016 1.443a.5.5 0 0 1 .342.341l.357 1.232a.5.5 0 0 0 .377.35l2.174.46a.5.5 0 0 1 .195.088l1.496 1.115a.5.5 0 0 0 .436.08l.794-.227a.5.5 0 0 0 .29-.22l.387-.637a.5.5 0 0 0 .047-.418l-.275-.826a.5.5 0 0 1 .088-.474l.663-.812a.5.5 0 0 1 .187-.142l1.548-.675a.5.5 0 0 1 .35-.018l1.293.41a.5.5 0 0 1 .28.222l.403.681a.5.5 0 0 0 .37.241l1.575.194a.5.5 0 0 1 .424.617l-.486 1.947a.5.5 0 0 0-.002.237l.394 1.654a.5.5 0 0 1 .014.115v13.59a.5.5 0 0 1-.254.435l-.816.463a.5.5 0 0 1-.478.008Z"/>
    </svg>
  );
};
