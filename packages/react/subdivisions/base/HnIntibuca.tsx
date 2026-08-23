// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnIntibuca = ({
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
      <path strokeLinejoin="round" d="M15.298 1.432a2 2 0 0 0-.938-.23l-6.103.023a.6.6 0 0 0-.598.586l-.068 3.044a1 1 0 0 1-.802.958l-2.428.489a1 1 0 0 0-.785 1.166l.066.351a1 1 0 0 0 .567.724l.734.335a1 1 0 0 1 .58.819l.162 1.782a1 1 0 0 0 .656.85l1.146.413a1 1 0 0 1 .66.934l.016 2.031a1 1 0 0 1-.474.858l-3.166 1.958a2 2 0 0 0-.858 1.108l-.195.626a2 2 0 0 0-.05.994l.098.474a1 1 0 0 0 1.27.757L10 20.9a1 1 0 0 0 .71-.956l.004-3.143a1 1 0 0 1 .348-.757l4.667-4.013a2 2 0 0 0 .456-.566l1.198-2.22a2 2 0 0 1 .894-.853l1.358-.653a1 1 0 0 0 .395-1.462l-2.204-3.25a2 2 0 0 0-.724-.647z"/>
    </svg>
  );
};
