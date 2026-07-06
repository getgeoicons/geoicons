// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const YucatanPeninsula = ({
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
      <path strokeLinejoin="round" d="m8.076 8.09-.681 2.194a1 1 0 0 1-.327.481l-1.914 1.548a1 1 0 0 0-.153.153l-.742.928a1 1 0 0 0-.17.314l-.226.693a1 1 0 0 0 .3 1.07l.86.738a1 1 0 0 1 .323.53l.305 1.295a1 1 0 0 0 .37.568l1.469 1.113a1 1 0 0 1 .246.27l.746 1.204a1 1 0 0 0 .116.152l1.033 1.117a1 1 0 0 0 .78.32l3.512-.161a1 1 0 0 0 .689-.32l.979-1.06a1 1 0 0 0 .197-.316l.524-1.346a1 1 0 0 0 .068-.374l-.038-3.327a1 1 0 0 1 .226-.644l.768-.942a1 1 0 0 0 .197-.394l1.005-4.101q.037-.153.027-.31l-.193-2.675a1 1 0 0 1 .196-.67l1.438-1.925a1 1 0 0 0 .175-.382l.1-.452a1 1 0 0 0-.038-.562l-.217-.59a1 1 0 0 0-.308-.431l-.28-.228a1 1 0 0 0-.996-.155l-.892.35a1 1 0 0 1-.458.065l-2.028-.188a1 1 0 0 0-.53.096l-1.688.82a1 1 0 0 1-.272.087l-2.457.41a1 1 0 0 0-.434.184L8.45 4.16a1 1 0 0 0-.402.828l.073 2.78a1 1 0 0 1-.044.322Z"/>
    </svg>
  );
};
