// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UsGeorgia = ({
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
      <path strokeLinejoin="round" d="M13.044 1.525a.57.57 0 0 0-.527-.313l-9.583.329a.3.3 0 0 0-.285.351l1.534 8.78q.015.088.046.172l1.222 3.348a1 1 0 0 1-.047.796l-.347.682a4 4 0 0 0-.432 1.908l.03 1.198a4 4 0 0 0 .272 1.358l.44 1.125a.6.6 0 0 0 .494.378l10.183 1.105a.6.6 0 0 0 .65-.462l.106-.463a.6.6 0 0 1 .732-.448l1.111.282a.6.6 0 0 0 .731-.44l.746-3.085a4 4 0 0 1 .657-1.418l.418-.573a.6.6 0 0 0 .053-.622l-2.07-4.148a3 3 0 0 0-.331-.522l-4.432-5.6a2 2 0 0 0-.541-.476l-1.361-.813a.6.6 0 0 1-.189-.852l.682-1.005a.57.57 0 0 0 .037-.572Z"/>
    </svg>
  );
};
