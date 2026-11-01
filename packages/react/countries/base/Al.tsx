// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Al = ({
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
      <path strokeLinejoin="round" d="M9.618 1.258a.53.53 0 0 1 .44.435l.07.397a.6.6 0 0 0 .771.47l.446-.14a1 1 0 0 1 1.024.262l1.147 1.2a2 2 0 0 1 .499.913l.303 1.256c.082.343.104.697.064 1.046l-.435 3.796a2 2 0 0 0 .134.98l.68 1.677a.6.6 0 0 0 .572.374l.571-.015a.6.6 0 0 1 .607.497l.147.846a2 2 0 0 1-.23 1.324l-1.352 2.395a2 2 0 0 1-.857.81l-.48.237a1 1 0 0 0-.559.906l.005.516a1 1 0 0 1-.243.662l-.191.222a1 1 0 0 1-1.018.312l-.28-.075a1 1 0 0 1-.724-.796l-.166-.963a1 1 0 0 0-.516-.712l-1.204-.641a2.97 2.97 0 0 1-1.572-2.766l.006-.126a3 3 0 0 1 .199-.937l.463-1.196a2 2 0 0 0 .133-.806l-.112-2.664a2 2 0 0 1 .195-.95l.498-1.037a1 1 0 0 0-.371-1.28l-.17-.106a1 1 0 0 1-.453-.67l-.341-1.89a1 1 0 0 1 .119-.68l1.636-2.824a.53.53 0 0 1 .545-.26Z"/>
    </svg>
  );
};
