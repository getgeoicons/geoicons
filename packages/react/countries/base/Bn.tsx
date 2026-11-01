// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Bn = ({
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
      <path strokeLinejoin="round" d="m1.726 11.919 1.853.541a2 2 0 0 1 1.227 1.025l.286.572a2 2 0 0 1 .201 1.09l-.088.898a.6.6 0 0 0 .627.658l1.408-.07a.6.6 0 0 1 .595.396l.403 1.12a3 3 0 0 0 .634 1.036l1.037 1.106a1 1 0 0 0 1.068.257l.255-.091a3 3 0 0 0 1.308-.924l.59-.72c.271-.333.469-.72.578-1.135l.82-3.107a.8.8 0 0 0-.443-.932l-.289-.13a.8.8 0 0 1-.464-.643l-.351-3.232a1 1 0 0 1 .587-1.021l1.71-.762a2 2 0 0 0 .829-.686l1.78-2.564a.773.773 0 0 0-.931-1.154l-2.657 1.1c-.577.24-1.12.555-1.614.938L8.64 8.625a7 7 0 0 1-1.953 1.069l-1.451.514a7 7 0 0 1-1.782.38l-1.605.13a.614.614 0 0 0-.123 1.2Zm16.783 2.955L21.2 16.14a.8.8 0 0 0 .866-.121l.148-.129a.8.8 0 0 0 .091-1.11l-.738-.898a2 2 0 0 1-.44-1.507l.126-1.064a2 2 0 0 0-.132-.984l-1.42-3.521a.6.6 0 0 0-1.04-.131l-.91 1.238a2 2 0 0 0-.374 1.42l.563 4.753a1 1 0 0 0 .568.787Z"/>
    </svg>
  );
};
