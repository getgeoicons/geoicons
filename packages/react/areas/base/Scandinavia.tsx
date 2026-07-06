// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Scandinavia = ({
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
      <path strokeLinejoin="round" d="m7.468 11.552-2.453 2.313a1 1 0 0 0-.312.778l.127 2.492a.6.6 0 0 0 .348.513l.542.251a.6.6 0 0 0 .592-.05l.72-.494a.6.6 0 0 1 .86.196l1.168 2.037a.956.956 0 0 0 1.783-.552l-.093-1.164a1 1 0 0 1 .29-.787l.474-.475a.6.6 0 0 0 .036-.81l-.432-.514a1 1 0 0 1-.207-.872l.283-1.201a1 1 0 0 1 .291-.503l3.377-3.147a1 1 0 0 0 .298-.933l-.436-2.126a1 1 0 0 1 .103-.682l.882-1.606a1 1 0 0 1 1.316-.416l.606.296a1 1 0 0 0 .887-.003l.047-.024a1 1 0 0 0 .509-1.186l-.068-.224a1 1 0 0 0-.445-.567l-1.227-.73a1 1 0 0 0-.585-.139l-1.553.115a1 1 0 0 0-.437.138l-2.185 1.297a1 1 0 0 0-.19.146l-1.877 1.842a1 1 0 0 0-.17.22L8.978 7.38a1 1 0 0 0-.08.183l-1.165 3.571a1 1 0 0 1-.265.418ZM5.825 21.591l.01-1.008a.837.837 0 0 1 1.594-.347l.039.083a.93.93 0 0 1 .034.708l-.289.81a.715.715 0 0 1-1.388-.246Z"/>
    </svg>
  );
};
