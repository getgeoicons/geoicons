// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const EasternSouthAmerica = ({
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
      <path strokeLinejoin="round" d="m11.752 22.758-1.462-.181a.6.6 0 0 1-.515-.712l.314-1.585a1 1 0 0 1 .293-.532l1.512-1.434a.6.6 0 0 0 .14-.668l-1.48-3.51a1 1 0 0 0-.195-.298l-2.968-3.144a.6.6 0 0 0-.565-.174l-2.314.507a1 1 0 0 1-.995-.353l-.754-.945a1 1 0 0 1 .292-1.496L4.08 7.66a1 1 0 0 0 .51-.845l.046-1.685a.6.6 0 0 1 .515-.578l2.32-.334a1 1 0 0 0 .73-.502L9.332 1.69a.6.6 0 0 1 .78-.25l3.6 1.696a1 1 0 0 1 .524.595l.377 1.158a1 1 0 0 0 .565.614l5.864 2.45a1 1 0 0 1 .557.587l.259.726a1 1 0 0 1 .01.641l-.106.33a1 1 0 0 1-.293.447l-1.7 1.492a1 1 0 0 0-.338.703l-.064 1.332a1 1 0 0 1-.144.47l-1.064 1.759a1 1 0 0 1-.691.468l-1.59.265a1 1 0 0 0-.784.669l-.602 1.797a1 1 0 0 1-.161.298l-2.032 2.597a.6.6 0 0 1-.547.225Z"/>
    </svg>
  );
};
