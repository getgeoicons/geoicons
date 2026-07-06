// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ThePacificPlate = ({
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
      <path strokeLinejoin="round" d="m10.036 16.548.884-2.432a.6.6 0 0 0-.51-.803l-1.768-.16a1 1 0 0 1-.377-.113l-.903-.478a1 1 0 0 1-.367-.332l-.564-.854a1 1 0 0 0-.678-.436l-1.638-.26a.583.583 0 0 1-.028-1.145l1.136-.238a.847.847 0 0 0 .542-1.282l-.54-.852a1 1 0 0 1-.136-.724l.077-.4a1 1 0 0 1 .217-.455L7.956 2.53l.896.772a1 1 0 0 0 .471.225l1.109.204a1 1 0 0 0 .51-.04l2.112-.739a1 1 0 0 0 .43-.293l1.02-1.192a.634.634 0 0 1 1.051.134l.78 1.6a1 1 0 0 1 .073.204l.362 1.511a1 1 0 0 0 .345.546l.95.766a1 1 0 0 1 .202.218L19.58 8.39a1 1 0 0 1 .147.34l.487 2.163a1 1 0 0 1-.476 1.086l-.465.269a1 1 0 0 0-.45.556l-.4 1.223a1 1 0 0 0 .018.671l.52 1.344a1 1 0 0 1 .063.444l-.106 1.272q-.017.204-.113.386l-.653 1.229a1 1 0 0 1-1.114.504l-1.126-.267a1 1 0 0 0-1.004.338l-1.216 1.48a1 1 0 0 1-.385.288l-2.194.923a1 1 0 0 1-.772.001l-2.34-.975a1 1 0 0 1-.56-.594l-.235-.677a1 1 0 0 1 .055-.786l.87-1.694a1 1 0 0 1 .539-.48l.776-.29a1 1 0 0 0 .589-.595Z"/>
    </svg>
  );
};
