// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mx = ({
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
      <path strokeLinejoin="round" d="M2.762 5.022 1.2 5.163 2.354 9.07a.5.5 0 0 0 .101.185l3.401 3.929a.5.5 0 0 0 .792-.047l.166-.244a.5.5 0 0 0-.009-.574l-3.28-4.542a.5.5 0 0 1 .124-.706l.147-.1a.5.5 0 0 1 .677.107l4.718 6.097a.5.5 0 0 1 .104.297l.029 1.57a.5.5 0 0 0 .273.436l5.562 2.838a.5.5 0 0 0 .392.026l1.086-.38a.5.5 0 0 1 .434.052l1.527.975 1.032-1.994 1.275-.02a.5.5 0 0 0 .44-.277l1.258-2.528a.25.25 0 0 0-.243-.361l-2.065.16a.5.5 0 0 0-.45.39l-.217.978a.5.5 0 0 1-.4.384l-2.254.403a.5.5 0 0 1-.5-.21l-1.497-2.178a.5.5 0 0 1-.083-.35l.326-2.442a.5.5 0 0 0-.341-.542l-.798-.259a.5.5 0 0 1-.272-.214l-1.376-2.242a.5.5 0 0 0-.675-.172l-.597.342a.5.5 0 0 1-.61-.089L8.82 5.956a.5.5 0 0 0-.381-.155l-2.791.111a.5.5 0 0 1-.18-.025l-2.5-.841a.5.5 0 0 0-.205-.024Z"/>
    </svg>
  );
};
