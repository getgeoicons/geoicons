// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Je = ({
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
      <path strokeLinejoin="round" d="m1.56 7.614 1.938 2.765a1 1 0 0 1 .153.338l.563 2.322a1 1 0 0 1-.01.512l-.309 1.073a1 1 0 0 1-.398.55l-.782.532a.6.6 0 0 0 .059 1.027l.762.401a1 1 0 0 0 .718.083l.677-.177a1 1 0 0 0 .513-.325l.345-.411a.862.862 0 0 1 1.493.774.88.88 0 0 0 .553 1.05l.671.238a.908.908 0 0 0 1.156-1.175l-.385-1.026a1.434 1.434 0 0 1 .775-1.82l.024-.011c.178-.077.37-.119.565-.122l.554-.01a2 2 0 0 1 .747.132l.472.18a1.615 1.615 0 0 1 .968 1.98l-.156.512a.83.83 0 0 0 1.454.743l.145-.191a1 1 0 0 1 1.6.006l.411.551a1 1 0 0 0 1.212.314l.647-.291a1 1 0 0 1 .848.012l1.128.548a.74.74 0 0 0 1.007-.953l-.548-1.305a1 1 0 0 1-.071-.504l.116-.984c.04-.345.26-.645.575-.791.551-.257.754-.944.424-1.454l-.273-.42a1 1 0 0 1-.023-1.051l.28-.475a1 1 0 0 0 .07-.867l-.17-.443a1 1 0 0 0-.384-.475l-1.471-.967a1 1 0 0 0-1.059-.025l-.846.5a1 1 0 0 1-.448.138l-.103.007a1 1 0 0 1-1.021-.718l-.191-.653a1 1 0 0 0-.276-.449l-.383-.36a1 1 0 0 0-1.357-.01l-.11.1a1 1 0 0 1-.864.241l-1.438-.28a1 1 0 0 1-.433-.2l-.72-.577a1 1 0 0 0-1.345.086l-.893.926a1 1 0 0 1-.58.295l-1.418.199a1 1 0 0 1-.77-.216L4.245 5.624a1 1 0 0 0-.786-.213l-.96.15a1 1 0 0 0-.72.501l-.274.491a1 1 0 0 0 .055 1.061Z"/>
    </svg>
  );
};
