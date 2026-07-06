// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TheArabWorld = ({
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
      <g strokeLinejoin="round"><path fillRule="evenodd" d="m20.924 13.662-2.691.59.961 1.07-1.451 1.208a1 1 0 0 0-.357.685l-.187 2.185 3.22-3.211a1 1 0 0 0 .289-.597z" clipRule="evenodd"/><path d="m2.273 11.774-.332-.146a1 1 0 0 1-.586-.748l-.14-.819a1 1 0 0 1 .098-.632l.894-1.717q.065-.125.162-.227L4.356 5.39c.152-.16.353-.266.571-.3l3.017-.477a.925.925 0 0 1 1.066.821c.033.33.24.616.54.752l.942.424a.86.86 0 0 0 1.016-.236.86.86 0 0 1 1.04-.226l.87.423c.176.085.372.117.566.093l.674-.087c.376-.048.692-.304.818-.662l.258-.735a.6.6 0 0 1 .533-.401l1.46-.082a.6.6 0 0 1 .572.331l1.576 3.158c.269.538.948.72 1.45.388l.244-.162L22.8 9.414l-.518 1a1 1 0 0 1-.33.37l-1.202.808a1 1 0 0 1-.258.123l-1.926.607-.21-1.13a1 1 0 0 0-.105-.294l-1.53-2.827a.6.6 0 0 0-.762-.268l-.428.18a.6.6 0 0 0-.287.857l1.048 1.796a.6.6 0 0 1 .057.474l-.617 2.08a.6.6 0 0 1-.55.43l-2.22.096a.6.6 0 0 1-.581-.37l-.268-.646a1 1 0 0 1-.049-.62l.44-1.812-1.937-1.043a1 1 0 0 0-.465-.12L9.618 9.1a1 1 0 0 0-.594.187l-1.168.835c-.336.24-.785.25-1.13.024l-2.389-1.56.132 3.154-1.727.116c-.16.01-.321-.018-.469-.082Z"/></g>
    </svg>
  );
};
