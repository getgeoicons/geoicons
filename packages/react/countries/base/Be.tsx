// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Be = ({
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
      <path strokeLinejoin="round" d="m1.705 9.192-.417-1.736a.5.5 0 0 1 .238-.55l3.591-2.053a.5.5 0 0 1 .391-.045l3.335.993a.5.5 0 0 0 .482-.112l1.94-1.794a.5.5 0 0 1 .311-.132l3.154-.18a.5.5 0 0 1 .453.236l.823 1.328a.5.5 0 0 0 .255.206l2.52.914a.5.5 0 0 1 .302.633l-.764 2.222a.5.5 0 0 0 .362.65l1.797.408a.5.5 0 0 1 .252.143l1.814 1.9a.5.5 0 0 1 .075.59l-1.164 2.07a.5.5 0 0 1-.597.228l-.466-.16a.5.5 0 0 0-.603.239L18.824 17a.5.5 0 0 0-.035.386l.66 2.085a.5.5 0 0 1-.393.644l-1.67.283a.5.5 0 0 1-.39-.098l-2.807-2.173a.5.5 0 0 1-.187-.474l.343-2.146a.5.5 0 0 0-.22-.497l-.163-.107a.5.5 0 0 0-.695.148l-.8 1.245a.5.5 0 0 1-.387.228l-1.517.105a.5.5 0 0 1-.534-.512l.051-1.971a.5.5 0 0 0-.494-.513l-1.577-.019a.5.5 0 0 1-.467-.34l-.26-.766a.5.5 0 0 0-.418-.336l-1.191-.135a.5.5 0 0 1-.422-.35l-.46-1.491a.5.5 0 0 0-.688-.307l-.764.353a.5.5 0 0 1-.513-.056l-.938-.713a.5.5 0 0 1-.183-.282Z"/>
    </svg>
  );
};
