// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsMinnesota = ({
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
      <path strokeLinejoin="round" d="M4.077 22.503a.3.3 0 0 0 .3.297h12.097a.6.6 0 0 0 .579-.76l-.261-.944a1 1 0 0 0-.404-.562l-2.714-1.836a1 1 0 0 1-.438-.785l-.108-2.48a1 1 0 0 1 .335-.79l.756-.673a1 1 0 0 0 .336-.743l.005-1.292a1 1 0 0 1 .32-.729l2.747-2.55a1 1 0 0 1 .218-.154l1.62-.845c.825-.43.668-1.653-.239-1.86l-.91-.21a1 1 0 0 0-.39-.01l-1.754.297a1 1 0 0 1-.66-.116L13.163 4.43a1 1 0 0 0-.659-.116l-1.402.237a1 1 0 0 1-.62-.094l-1.407-.715L8.673 1.3l-1.609-.1.015 1.522-4.601.03a.3.3 0 0 0-.295.347l1.546 9.674a1 1 0 0 1-.097.613l-.648 1.266a1 1 0 0 0 .021.95l.885 1.557a1 1 0 0 1 .13.482z"/>
    </svg>
  );
};
