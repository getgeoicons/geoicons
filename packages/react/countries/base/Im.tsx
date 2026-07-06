// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Im = ({
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
      <path strokeLinejoin="round" d="m5.375 19.045-1.962 2.582a.626.626 0 0 0 .743.954l.907-.386a1 1 0 0 0 .39-.298l.838-1.053a.973.973 0 0 1 1.607.123l.087.152a1 1 0 0 0 .524.443l1.036.38a.6.6 0 0 0 .772-.364l.459-1.299a1 1 0 0 1 .424-.522l3.33-2.02a1 1 0 0 0 .477-.76l.066-.688a1 1 0 0 1 .494-.77l1.694-.982a1 1 0 0 0 .47-1.106l-.121-.486a1 1 0 0 1 .187-.863l2.268-2.856a1 1 0 0 0-.343-1.52l-1.255-.616a1 1 0 0 1-.542-1.086l.758-3.945a.5.5 0 0 0-.66-.565L15.4 2.43a1 1 0 0 0-.278.153L12.74 4.436a1 1 0 0 0-.322.437l-1.692 4.494a1 1 0 0 1-.293.413l-2.88 2.42a1 1 0 0 0-.261.339l-1.271 2.693a1 1 0 0 0-.089.308l-.361 3.019a1 1 0 0 1-.197.486Z"/>
    </svg>
  );
};
