// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Gw = ({
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
      <path strokeLinejoin="round" d="m9.853 15.657 2.625 2.229a.5.5 0 0 0 .678-.028l.81-.814a.5.5 0 0 0 .105-.153l.988-2.265a.5.5 0 0 1 .417-.299l1.006-.083a.5.5 0 0 0 .259-.098l1.333-1a.5.5 0 0 1 .28-.1l3.42-.139a.5.5 0 0 0 .478-.532l-.08-1.23a.5.5 0 0 0-.175-.35l-1.166-.987a.5.5 0 0 1 .03-.787l1.636-1.178a.5.5 0 0 0 .18-.571l-.385-1.096a.5.5 0 0 0-.47-.335l-9.68-.025a.5.5 0 0 0-.256.07L9.112 7.535a.5.5 0 0 1-.372.056l-2.579-.62a.5.5 0 0 0-.216-.004l-4.203.846a.25.25 0 0 0-.102.444L2.96 9.26a.5.5 0 0 0 .395.093l.952-.18a.5.5 0 0 1 .588.565l-.229 1.524a.5.5 0 0 0 .332.547l1.604.554a.5.5 0 0 0 .343-.005l2.22-.852a.5.5 0 0 1 .651.301l.648 1.845a.5.5 0 0 1-.065.457l-.628.876a.5.5 0 0 0 .083.672Zm-4.02 1.463-.942-.404a.5.5 0 0 1-.303-.472l.01-.389a.5.5 0 0 1 .433-.482l1.878-.255a.5.5 0 0 1 .566.463l.06.929a.5.5 0 0 1-.44.529l-1.007.118a.5.5 0 0 1-.255-.037Z"/>
    </svg>
  );
};
