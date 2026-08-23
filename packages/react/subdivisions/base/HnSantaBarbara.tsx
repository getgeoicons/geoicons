// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HnSantaBarbara = ({
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
      <path strokeLinejoin="round" d="M18.728 21.366a1 1 0 0 1 .333-.627l1.25-1.095a1 1 0 0 0 .268-1.127l-.92-2.274a1 1 0 0 1-.045-.606l.487-2.044a.6.6 0 0 0-.2-.6l-1.706-1.421a.6.6 0 0 1-.112-.8l.61-.891a.6.6 0 0 0 .082-.5l-.968-3.487a1 1 0 0 0-.676-.69l-1.213-.364a1 1 0 0 1-.696-.774l-.223-1.195a.8.8 0 0 0-.546-.616l-3.052-.96a.6.6 0 0 0-.548.097l-7.29 5.64a.6.6 0 0 0-.158.766l1.886 3.406a2 2 0 0 1 .106 1.716l-.85 2.111a.928.928 0 0 0 1.15 1.229l1.128-.37a1 1 0 0 1 1.173.444l1.047 1.781a.6.6 0 0 0 .513.296l2.035.016a.6.6 0 0 1 .583.48l.646 3.14a.6.6 0 0 0 .556.479l4.612.244a.6.6 0 0 0 .627-.524z"/>
    </svg>
  );
};
