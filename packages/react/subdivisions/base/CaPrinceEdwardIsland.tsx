// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CaPrinceEdwardIsland = ({
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
      <path strokeLinejoin="round" d="M22.52 12.627a.65.65 0 0 1-.323.871l-2.448 1.105c-.22.1-.42.237-.59.407l-.714.712a1 1 0 0 0-.29.807l.134 1.345a1 1 0 0 1-.832 1.086l-1.806.299a1 1 0 0 1-.773-.194l-.931-.717a1 1 0 0 1-.36-.546l-.12-.474a1 1 0 0 0-1.365-.672l-.36.155a1 1 0 0 1-.73.024L8.154 15.82a1 1 0 0 1-.432-.3l-.745-.89a2 2 0 0 0-1.221-.69l-1.11-.175a.8.8 0 0 1-.672-.865l.056-.591a1 1 0 0 0-.996-1.093h-.888a.8.8 0 0 1-.789-.663l-.07-.404a1 1 0 0 1 .267-.867l.667-.69a2 2 0 0 0 .463-.768l.208-.638a2 2 0 0 1 .49-.795l1.361-1.356a.575.575 0 0 1 .979.355l.139 1.542a1 1 0 0 1-.097.527l-.35.722A1 1 0 0 0 5.59 9.31l1.167 1.22a2 2 0 0 0 .837.523l4.817 1.537a3 3 0 0 0 1.24.124l5.564-.613q.382-.042.764-.011l2.003.163a.65.65 0 0 1 .537.374Z"/>
    </svg>
  );
};
