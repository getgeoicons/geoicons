// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GtZacapa = ({
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
      <path strokeLinejoin="round" d="M1.708 7.966a.3.3 0 0 0-.168.491l2.734 3.14a.3.3 0 0 1-.224.497l-1.597.013a.3.3 0 0 0-.26.447l1.218 2.17a.6.6 0 0 1-.071.689l-.795.908a.6.6 0 0 0-.027.757l2.032 2.684a1 1 0 0 0 .663.387l.634.086a1 1 0 0 0 1.057-.605l.138-.332a1 1 0 0 0 .05-.622l-.208-.854a1 1 0 0 1 .363-1.03l.406-.31a1 1 0 0 1 .68-.205l3.592.26a2 2 0 0 0 1.107-.243l1.16-.637a2 2 0 0 1 1.162-.237l2.854.285c.286.029.576-.005.848-.099l2.673-.918a1 1 0 0 0 .668-.832l.365-3.178a1 1 0 0 0-.129-.616l-1.238-2.133a1 1 0 0 1 .146-1.197l.48-.497a1 1 0 0 0 .28-.752l-.023-.406a1 1 0 0 0-.523-.823l-.825-.447a1 1 0 0 0-.572-.116l-3.091.296a1 1 0 0 0-.62.296l-1.27 1.298a2 2 0 0 1-.699.462L11.806 7.17a2 2 0 0 1-.676.138l-2.246.061a.6.6 0 0 0-.457.231l-.65.833a.6.6 0 0 1-.73.173L4.824 7.551a1 1 0 0 0-.622-.077z"/>
    </svg>
  );
};
