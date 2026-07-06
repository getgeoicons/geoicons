// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SouthernAfrica = ({
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
      <path strokeLinejoin="round" d="m2.992 5.292-.94-3.656L4.857 1.2l.567 1.277a.6.6 0 0 0 .47.35l1.324.174.254-1.02 1.785.17.064 2.097a1 1 0 0 0 .696.923l2.562.816a1 1 0 0 0 1.297-.835l.21-1.764 1.407-.403 1.832 1.003a1 1 0 0 1 .42.443l.242.501a1 1 0 0 0 1.056.553l3.592-.563-.167 3.03a1 1 0 0 1-.07.314l-.35.887a1 1 0 0 1-.382.468l-3.017 1.976a1 1 0 0 0-.442.979l.225 1.564a1 1 0 0 1-.469.995l-1.142.698a1 1 0 0 0-.451.622l-.396 1.662a1 1 0 0 1-.35.55l-4.007 3.186a1 1 0 0 1-.415.195l-3.125.663a1 1 0 0 1-.774-.154l-1.111-.764a1 1 0 0 1-.424-.69l-.182-1.344a1 1 0 0 0-.117-.352L4.196 17.12a1 1 0 0 1-.113-.327l-.518-3.21a1 1 0 0 0-.103-.308L1.598 9.74a1 1 0 0 1-.021-.891l1.352-2.885a1 1 0 0 0 .063-.673Z"/>
    </svg>
  );
};
