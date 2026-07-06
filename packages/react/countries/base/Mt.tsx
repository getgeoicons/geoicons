// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mt = ({
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
      <path strokeLinejoin="round" d="m1.21 5.432.04-1.902a.5.5 0 0 1 .327-.458l.714-.264a.5.5 0 0 1 .113-.027l1.56-.188a.5.5 0 0 1 .233.027l.859.318a.5.5 0 0 1 .112.059l1.36.947a.5.5 0 0 0 .21.084l1.198.184a.5.5 0 0 1 .297.162l1.02 1.142a.5.5 0 0 1-.16.786l-.3.142a.5.5 0 0 1-.223.047l-.881-.015a.5.5 0 0 0-.21.043l-1.706.752a.5.5 0 0 1-.295.034L3.45 6.919a.5.5 0 0 1-.23-.11l-.788-.666a.5.5 0 0 0-.24-.112l-.565-.096a.5.5 0 0 1-.417-.503ZM21.7 20.809l-.63.352a1.5 1.5 0 0 1-.997.166l-4.308-.778a.5.5 0 0 1-.127-.04l-3.776-1.804a.5.5 0 0 1-.142-.1l-2.156-2.197a1.5 1.5 0 0 1-.423-1.186l.301-3.341a.5.5 0 0 0-.07-.303l-.854-1.418a.5.5 0 0 1 .143-.67l1.99-1.38a.5.5 0 0 1 .643.061l.207.212a.5.5 0 0 1 .046.645l-.877 1.199 3.712.91c.181.044.353.122.505.23l1.425 1a.5.5 0 0 0 .267.09l.864.035a.5.5 0 0 1 .37.187l1.737 2.166a.5.5 0 0 0 .16.131l1.78.921c.213.11.397.27.535.465l.485.683a1.5 1.5 0 0 1 .275.911l-.027.927a1.5 1.5 0 0 1-.124.556l-.289.66a1.5 1.5 0 0 1-.644.71Z"/>
    </svg>
  );
};
