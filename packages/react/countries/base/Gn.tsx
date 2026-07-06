// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gn = ({
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
      <path strokeLinejoin="round" d="m9.793 12.48-2.488 2.316a.5.5 0 0 1-.753-.083l-1.62-2.36a.5.5 0 0 0-.122-.124L1.566 9.912a.5.5 0 0 1-.145-.653l.754-1.339a.5.5 0 0 1 .335-.244l2.381-.493a.5.5 0 0 0 .396-.545L5.08 4.802a.5.5 0 0 1 .683-.52l2.84 1.142a.5.5 0 0 0 .278.027l2.566-.477a.5.5 0 0 1 .492.193l.674.905a.5.5 0 0 0 .421.202l3.002-.123a.5.5 0 0 0 .302-.116l1.398-1.175a.5.5 0 0 1 .742.112l1.435 2.22a.5.5 0 0 1 .067.387l-.333 1.407a.5.5 0 0 0 .182.511l1.587 1.223a.5.5 0 0 1 .161.576l-.55 1.427a.5.5 0 0 0 .035.431l1.424 2.446a.5.5 0 0 1-.279.728l-1.035.333a.5.5 0 0 0-.347.46l-.05 1.644a.5.5 0 0 1-.346.461l-1.969.632a.5.5 0 0 1-.643-.38l-.49-2.494a.5.5 0 0 0-.624-.385l-2.269.633a.5.5 0 0 1-.419-.07l-.34-.236a.5.5 0 0 1-.147-.662l.626-1.079a.5.5 0 0 0-.022-.536l-1.488-2.146a.5.5 0 0 0-.425-.215l-2.1.057a.5.5 0 0 0-.327.134Z"/>
    </svg>
  );
};
