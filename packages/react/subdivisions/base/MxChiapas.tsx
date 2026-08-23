// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxChiapas = ({
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
      <path strokeLinejoin="round" d="M6.904 1.895a.88.88 0 0 0-1.429.386l-.86 2.734a1 1 0 0 1-.504.592l-.909.459a1 1 0 0 0-.485.54l-1.354 3.601a2 2 0 0 0-.119.894l.1 1.057a1 1 0 0 0 .438.735l1.872 1.259a21 21 0 0 1 2.645 2.108l2.098 1.967 3.61 3.797a.3.3 0 0 0 .512-.152l.544-2.886a.3.3 0 0 0-.063-.247l-.9-1.09a.3.3 0 0 1-.029-.34l2.493-4.356a.3.3 0 0 1 .27-.15l6.755.21a1 1 0 0 0 1.019-.842l.104-.655a1 1 0 0 0-.333-.913L16.061 5.13a2 2 0 0 1-.585-.867l-.496-1.457a1 1 0 0 0-.606-.618l-.36-.131a1 1 0 0 0-.975.166L9.753 4.917a1 1 0 0 1-1.226.033l-.344-.253a1 1 0 0 1-.395-.64l-.212-1.262a1 1 0 0 0-.314-.575z"/>
    </svg>
  );
};
