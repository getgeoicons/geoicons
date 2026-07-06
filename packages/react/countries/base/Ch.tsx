// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Ch = ({
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
      <path strokeLinejoin="round" d="m8.636 17.834-1.324.506a.5.5 0 0 1-.638-.268L5.577 15.55a.5.5 0 0 0-.593-.282L1.2 16.325l.74-2.617a.5.5 0 0 1 .203-.28l1.12-.746a.5.5 0 0 0 .219-.358l.113-.97a.5.5 0 0 1 .17-.32L5.62 9.432a.5.5 0 0 0 .155-.515l-.153-.538a.5.5 0 0 1 .084-.44l.375-.49a.5.5 0 0 1 .588-.16l.91.377a.5.5 0 0 0 .545-.108l.761-.761a.5.5 0 0 1 .345-.147l3.034-.054a.5.5 0 0 0 .4-.212l.692-.981a.5.5 0 0 1 .718-.105l.98.773a.5.5 0 0 0 .343.106l.795-.053a.5.5 0 0 1 .329.095l1.972 1.443a.5.5 0 0 1 .167.593l-.614 1.503a.5.5 0 0 0 .419.687l.854.076a.5.5 0 0 1 .246.091l1.082.772a.5.5 0 0 0 .529.033l.828-.448a.5.5 0 0 1 .737.426l.043 1.49a.5.5 0 0 1-.523.514l-.625-.03a.5.5 0 0 0-.51.613l.345 1.477a.5.5 0 0 1-.31.581l-.244.093a.5.5 0 0 1-.587-.18l-.394-.561a.5.5 0 0 0-.533-.198l-.532.136a.5.5 0 0 1-.57-.26l-.336-.67a.5.5 0 0 0-.447-.275h-.273a.5.5 0 0 0-.48.358l-.63 2.127a.5.5 0 0 0-.011.236l.312 1.629a.5.5 0 0 1-.454.593l-.583.043a.5.5 0 0 1-.523-.38l-.39-1.602a.5.5 0 0 0-.183-.28l-.737-.558a.5.5 0 0 1-.193-.333l-.212-1.608-1.795 1.289a.5.5 0 0 0-.173.22l-.741 1.862a.5.5 0 0 1-.573.303l-.956-.212a.5.5 0 0 0-.287.02Z"/>
    </svg>
  );
};
