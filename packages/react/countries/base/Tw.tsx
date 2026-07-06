// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tw = ({
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
      <path strokeLinejoin="round" d="m7.064 10.825-.63 4.193a.5.5 0 0 0 .085.362l.776 1.098a.5.5 0 0 1 .073.155l.539 1.941a.5.5 0 0 0 .169.256l1.394 1.12a.5.5 0 0 1 .185.343l.173 1.84a.5.5 0 0 0 .686.416l.716-.29a.5.5 0 0 0 .31-.52l-.207-1.794a.5.5 0 0 1 .015-.19l.515-1.879a.5.5 0 0 1 .188-.272l.913-.664a.5.5 0 0 0 .15-.174l.926-1.786a.5.5 0 0 0 .044-.122l1.243-5.62a.5.5 0 0 1 .039-.112l1.406-2.882a.5.5 0 0 0 .046-.283l-.2-1.573a.5.5 0 0 1 .107-.378l.526-.648a.5.5 0 0 0-.111-.73l-1.777-1.188a.5.5 0 0 0-.653.087l-.572.652a.5.5 0 0 1-.21.142l-1.76.62a.5.5 0 0 0-.256.202L7.137 10.63a.5.5 0 0 0-.073.194Z"/>
    </svg>
  );
};
