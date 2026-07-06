// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Mp = ({
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
      <path strokeLinejoin="round" d="m6.95 19.433-1.263.711.259 2.179a.5.5 0 0 0 .536.439l.749-.06a.5.5 0 0 0 .411-.282l.871-1.818a.5.5 0 0 1 .069-.106l1.472-1.747-1.906-1.396-1.003 1.88a.5.5 0 0 1-.196.2Zm5.182-7.652-1.112.529a.5.5 0 0 0-.261.605l.197.609a.5.5 0 0 0 .703.291l1.254-.64a.5.5 0 0 0 .185-.727l-.339-.497a.5.5 0 0 0-.627-.17Zm3.426-5.868-.82-.83a.5.5 0 0 1-.02-.681l2.466-2.817a.5.5 0 0 1 .714-.039l.136.124a.5.5 0 0 1 .108.594L16.36 5.788a.5.5 0 0 1-.802.125Z"/>
    </svg>
  );
};
