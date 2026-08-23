// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HtCentre = ({
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
      <path strokeLinejoin="round" d="M17.33 21.498a1 1 0 0 0 .71-.039l.962-.427a1 1 0 0 0 .585-.78l.507-3.771a1 1 0 0 0-.345-.896l-1.375-1.165a1 1 0 0 0-.621-.237l-1.952-.048a.768.768 0 0 1-.245-1.489l2.201-.804c.335-.122.645-.303.916-.534l2.664-2.268a2 2 0 0 0 .542-.737l.581-1.36a1 1 0 0 0-.398-1.245l-2.438-1.492a1 1 0 0 0-.61-.143l-3.353.295a1 1 0 0 1-.67-.184l-2.069-1.485a1 1 0 0 0-1.08-.056l-3.105 1.78a1 1 0 0 1-1.075-.052l-.604-.428a1 1 0 0 0-1.398.244l-.948 1.358a1 1 0 0 0-.152.806l.8 3.323a1 1 0 0 1 .026.296l-.332 5.36a1 1 0 0 1-1.037.936l-2.127-.083a.554.554 0 0 0-.276 1.046l3.53 1.82a2 2 0 0 1 .653.54l1.24 1.574a1 1 0 0 0 1.072.339l4.158-1.244a2 2 0 0 1 1.181.011z"/>
    </svg>
  );
};
