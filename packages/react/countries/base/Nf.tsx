// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Nf = ({
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
      <path strokeLinejoin="round" d="m6.76 1.861-.28.976a.644.644 0 0 0 .438.795.644.644 0 0 1 .451.74l-.564 2.922a1 1 0 0 0-.018.223l.06 1.805a1 1 0 0 0 .826.95l.413.074a.93.93 0 0 1 .703.572.932.932 0 0 0 1.418.404l.147-.108a1 1 0 0 1 1.047-.086l1.168.596c.333.17.74.023.889-.319a.65.65 0 0 1 .815-.35l.62.225a1 1 0 0 0 .672.003l.27-.095a.55.55 0 0 0 .355-.631.73.73 0 0 0-.187-.353l-.203-.212a.68.68 0 0 1 .438-1.147l.424-.033a1 1 0 0 0 .92-.912l.059-.701a1 1 0 0 0-.514-.96l-.952-.525a1 1 0 0 0-.414-.122l-1.228-.083a1 1 0 0 1-.768-.448l-.782-1.19a1 1 0 0 0-.35-.325L10.69 2.467a1 1 0 0 0-.486-.126H8.911a.84.84 0 0 1-.775-.51l-.025-.057a.719.719 0 0 0-1.35.087Zm3.716 20.075-.286-.411a1 1 0 0 1-.159-.766l.027-.134a1 1 0 0 1 1.136-.792l1.345.213a.763.763 0 0 1 .346 1.359l-.977.753a1 1 0 0 1-1.432-.222Z"/>
    </svg>
  );
};
