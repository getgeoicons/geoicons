// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WesternEurope = ({
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
      <path strokeLinejoin="round" d="m4.711 13.577-.94 3.155a.6.6 0 0 0 .362.732l3.81 1.445a.6.6 0 0 0 .693-.202l.355-.476a1 1 0 0 1 1.24-.302l.748.365a1 1 0 0 0 1.08-.133l.602-.505a1 1 0 0 0 .345-.92l-.242-1.548a1 1 0 0 1 .713-1.116l3.559-1.02a1 1 0 0 1 .531-.005l2.13.566a1 1 0 0 0 .559-.014l1.013-.32a1 1 0 0 0 .544-.421l.652-1.036a1 1 0 0 0 .13-.75l-.048-.214a1 1 0 0 0-1.069-.779l-1.537.143a1 1 0 0 1-.873-.371l-.88-1.1a.6.6 0 0 1 .275-.942l1.285-.44a1 1 0 0 0 .65-1.177l-.834-3.505a1 1 0 0 0-1.347-.696l-1.022.413a1 1 0 0 1-.898-.075l-1.083-.665a.6.6 0 0 0-.906.409l-.126.729a1 1 0 0 1-.7.788l-1.917.57a1 1 0 0 0-.43.258L7.569 8.054a1 1 0 0 1-1.12.213l-.611-.272a.6.6 0 0 0-.843.502l-.014.187a.6.6 0 0 1-.769.53l-.88-.262a1 1 0 0 0-.32-.04l-.634.022a.935.935 0 0 0-.342 1.79l1.489.654a1 1 0 0 1 .442.38l.632.998a1 1 0 0 1 .113.82Zm9.158 6.953.064.728a1 1 0 0 0 .33.658l.344.308a.6.6 0 0 0 .959-.229l.47-1.201a1 1 0 0 0-.005-.74l-.31-.766a.6.6 0 0 0-1.002-.177l-.596.66a1 1 0 0 0-.254.758Z"/>
    </svg>
  );
};
