// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NiMasaya = ({
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
      <path strokeLinejoin="round" d="M1.428 14.462a.3.3 0 0 0 .114.455l2.58 1.18q.291.133.608.169l3.512.395a1 1 0 0 1 .864.775l.93 4.137a.8.8 0 0 0 .682.618l2.837.351a.8.8 0 0 0 .883-.637l.275-1.377a1 1 0 0 1 .418-.63l1.182-.806a1 1 0 0 0 .433-.915l-.088-.984a2 2 0 0 1 .352-1.32l1.9-2.728a1 1 0 0 1 .386-.329l.704-.34a2 2 0 0 0 1.126-1.672l.217-3.392a1 1 0 0 1 .303-.655l.745-.72a.6.6 0 0 0 .037-.825l-2.781-3.206a1 1 0 0 0-.628-.337l-1.812-.233a1 1 0 0 0-.887.34l-.447.522a1 1 0 0 1-.854.344l-2.278-.217a1 1 0 0 0-.982.534l-.978 1.88a1 1 0 0 1-.386.404l-3.53 2.04a.3.3 0 0 0-.07.464L8.5 9.597a1 1 0 0 1 .207 1.013l-.663 1.872a1 1 0 0 1-.769.65l-2.058.365a1 1 0 0 1-.794-.2L3.35 12.45a.3.3 0 0 0-.424.053z"/>
    </svg>
  );
};
