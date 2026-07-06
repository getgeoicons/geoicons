// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Xk = ({
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
      <path strokeLinejoin="round" d="m7.174 7.79-1.694.329a.5.5 0 0 0-.348.26l-.338.652a.5.5 0 0 1-.606.243l-1.28-.438a.5.5 0 0 0-.617.265l-.226.495a.5.5 0 0 0 .148.603l.734.57a.5.5 0 0 1 .178.515l-.203.822a.5.5 0 0 0 .19.522l.965.71a.5.5 0 0 1 .186.27l.547 1.966a.5.5 0 0 0 .247.308l2.56 1.358a.5.5 0 0 1 .242.293l.957 3.074a.5.5 0 0 1-.034.378l-.294.57a.5.5 0 0 0-.025.403l.191.516a.5.5 0 0 0 .47.326h.742a.5.5 0 0 0 .434-.252l.38-.662a.5.5 0 0 0 .064-.29l-.134-1.592a.5.5 0 0 1 .248-.474l3.378-1.961a.5.5 0 0 1 .663.149l.719 1.044a.5.5 0 0 0 .826-.003l1.106-1.633a.5.5 0 0 1 .395-.219l1.243-.047a.5.5 0 0 0 .473-.587l-.21-1.189a.5.5 0 0 1 .083-.375l2.374-3.366a.5.5 0 0 0 .015-.553l-.395-.633a.5.5 0 0 0-.361-.231l-3.174-.403a.5.5 0 0 1-.433-.554l.137-1.182a.5.5 0 0 0-.375-.543l-1.069-.267a.5.5 0 0 1-.34-.29l-1.148-2.721a.5.5 0 0 0-.46-.306h-1.506a.5.5 0 0 1-.44-.26l-.98-1.804a.5.5 0 0 0-.633-.222l-1.777.742a.5.5 0 0 0-.172.804l.747.798a.5.5 0 0 1-.035.717L7.934 5.82a.5.5 0 0 0-.164.298l-.198 1.258a.5.5 0 0 1-.398.413Z"/>
    </svg>
  );
};
