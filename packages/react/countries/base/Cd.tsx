// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cd = ({
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
      <path strokeLinejoin="round" d="M5.979 14.225H2.113a.5.5 0 0 1-.5-.528l.06-1.063a.5.5 0 0 1 .432-.468l3.193-.43a.5.5 0 0 0 .431-.453l.145-1.704a.5.5 0 0 1 .14-.307l1.264-1.295a.5.5 0 0 0 .128-.23l1.446-5.855a.5.5 0 0 1 .663-.348l2.73 1.037a.5.5 0 0 0 .35.002l3.559-1.31a.5.5 0 0 1 .39.02l2.11 1.023a.5.5 0 0 0 .31.042l1.551-.287a.5.5 0 0 1 .52.235l1.235 2.06a.5.5 0 0 1 .014.49L19.66 9.812a.5.5 0 0 0-.029.403l1.986 5.52a.5.5 0 0 1-.358.657l-1.152.264a.5.5 0 0 0-.385.436l-.244 2.346a.5.5 0 0 0 .292.507l1.18.533a.5.5 0 0 1 .293.437l.034.928a.5.5 0 0 1-.276.466l-.642.321a.5.5 0 0 1-.595-.112l-1.8-1.993a.5.5 0 0 0-.315-.162l-4.676-.527a.5.5 0 0 1-.442-.451l-.337-3.712a.5.5 0 0 0-.4-.446l-1.562-.312a.5.5 0 0 0-.587.386l-.152.71a.5.5 0 0 1-.453.393l-1.323.096a.5.5 0 0 1-.49-.287l-.795-1.7a.5.5 0 0 0-.453-.288Z"/>
    </svg>
  );
};
