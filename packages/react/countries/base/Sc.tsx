// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Sc = ({
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
      <path strokeLinejoin="round" d="m8.45 13.515-1.18.475a.5.5 0 0 0-.12.86l3.186 2.472a.5.5 0 0 1 .12.656l-.367.598a.5.5 0 0 0 .117.654l1.56 1.229a.5.5 0 0 0 .332.107l.972-.045a.5.5 0 0 0 .398-.77l-.972-1.516a.5.5 0 0 1-.064-.393l.39-1.538a.5.5 0 0 0-.192-.528l-1.908-1.381a.5.5 0 0 1-.207-.42l.047-1.623a.5.5 0 0 0-.448-.512l-.634-.065a.5.5 0 0 0-.542.404l-.183.965a.5.5 0 0 1-.304.37Zm-5.848-2.641L1.565 9.78a.5.5 0 0 1 .042-.727l.787-.66a.5.5 0 0 1 .687.04l1.055 1.131a.5.5 0 0 1-.06.737l-.806.623a.5.5 0 0 1-.668-.051Zm15.072-3.895-2.37-1.988a.5.5 0 0 1 .008-.772l.723-.583a.5.5 0 0 1 .554-.049l2.692 1.478a.5.5 0 0 1 .12.784l-1.045 1.093a.5.5 0 0 1-.682.037Zm4.884.163-.327.525a.5.5 0 0 1-.685.162l-.665-.407a.5.5 0 0 1-.159-.699l.375-.579a.5.5 0 0 1 .72-.128l.616.462a.5.5 0 0 1 .125.664Z"/>
    </svg>
  );
};
