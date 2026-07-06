// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SeaOfAzov = ({
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
      <path strokeLinejoin="round" d="m5.269 14.565-3.44-2.15a.758.758 0 0 1 .562-1.384l2.855.62a1 1 0 0 0 .546-.035l1.718-.609q.133-.047.249-.13l1.374-.987a1 1 0 0 1 .519-.186l2.925-.19a1 1 0 0 0 .362-.093l2.796-1.32a1 1 0 0 1 .447-.096l1.867.038q.106.001.21-.019l1.857-.36a1 1 0 0 0 .375-.156l.338-.232a1 1 0 0 1 1.523.534l.085.283a1 1 0 0 1-.882 1.288l-.652.049a1 1 0 0 0-.18.03l-3.698.975a.6.6 0 0 0-.375.866l.126.233a1 1 0 0 0 .408.407l1.873 1a.735.735 0 0 1-.635 1.324l-.602-.257a1 1 0 0 0-1.195.322l-.771 1.036a1 1 0 0 0-.195.518l-.05.634a1 1 0 0 1-.915.918l-.362.03a1 1 0 0 1-.674-.191l-.966-.71a1 1 0 0 0-.525-.193l-2.094-.142a1 1 0 0 0-.428.065l-1.91.738a1 1 0 0 1-.788-.03l-.662-.313a1 1 0 0 1-.568-.991l.018-.198a1 1 0 0 0-.466-.936Z"/>
    </svg>
  );
};
