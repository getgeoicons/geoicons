// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const MxZacatecas = ({
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
      <path strokeLinejoin="round" d="M15.888 18.195a1 1 0 0 0 1.51-.52l.65-1.996a1 1 0 0 0-.091-.82l-.118-.199a1 1 0 0 0-1.54-.221l-.116.108a1 1 0 0 1-1.39-.029l-.78-.787a2 2 0 0 1-.576-1.26l-.066-.885a1 1 0 0 1 .797-1.054l1.038-.212c.32-.066.62-.209.872-.417l1.798-1.482a1 1 0 0 0 .356-.641l.11-.843a1 1 0 0 1 .402-.676l1.447-1.059a.6.6 0 0 0-.123-1.038L13.48 1.417a2 2 0 0 0-1.075-.131l-.132.02a1 1 0 0 0-.818 1.229l.457 1.849a.6.6 0 0 1-.62.743l-3.124-.2a1 1 0 0 0-.727.249l-1.77 1.567a1 1 0 0 0-.301.48L3.227 14.91a1 1 0 0 0 .725 1.24l3.367.826a1 1 0 0 1 .497 1.65l-1.272 1.379a1 1 0 0 0-.194 1.046l.44 1.107a1 1 0 0 0 .943.63l1.308-.018a1 1 0 0 0 .6-.21l1.175-.915a1 1 0 0 0 .34-1.09l-.423-1.345a1 1 0 0 1 .115-.845l1.06-1.629a1 1 0 0 1 1.397-.284z"/>
    </svg>
  );
};
