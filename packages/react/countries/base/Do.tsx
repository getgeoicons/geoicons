// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Do = ({
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
      <path strokeLinejoin="round" d="m2.75 17.01 1.305 1.884a.6.6 0 0 0 1.006-.031l1.923-3.178a2 2 0 0 1 .65-.66l.782-.489a.97.97 0 0 1 1.427.491.97.97 0 0 0 1.041.63l.851-.114a1 1 0 0 0 .676-.405l.564-.778a1 1 0 0 1 .907-.408l4.788.467a1 1 0 0 1 .717.415l.434.609a1 1 0 0 0 1.49.156l.602-.552a2 2 0 0 0 .426-.556l.392-.76a1 1 0 0 0-.324-1.284l-1.854-1.269a2 2 0 0 0-.967-.342l-4.096-.334a.713.713 0 0 1 .075-1.422l1.931.046a.663.663 0 0 0 .058-1.325l-2.635-.166a.99.99 0 0 1-.884-.709.985.985 0 0 0-1.049-.705l-.924.097a2 2 0 0 1-.958-.135l-3.219-1.3a1 1 0 0 0-.635-.038l-1.107.299a2 2 0 0 1-.964.02l-.96-.218a1 1 0 0 0-.951.293l-.362.386a1 1 0 0 0-.238.93l.527 2.06a2 2 0 0 1-.193 1.475l-1.366 2.433a.6.6 0 0 0 .032.637l1.067 1.529a.6.6 0 0 1 .1.443l-.217 1.29a.8.8 0 0 0 .131.589Z"/>
    </svg>
  );
};
