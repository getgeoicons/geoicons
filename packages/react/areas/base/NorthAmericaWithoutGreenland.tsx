// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { useId } from 'react';
import type { SVGProps } from 'react';
import { noteIconRender } from '@geoicons/core';

interface Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NorthAmericaWithoutGreenland = ({
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
      <path strokeLinejoin="round" d="m5.495 5.851-.74-1.016a1 1 0 0 0-.973-.398l-.306.05a.6.6 0 0 1-.695-.664l.099-.805a1 1 0 0 1 .454-.72l1.434-.918a1 1 0 0 1 .613-.155l.585.044a1 1 0 0 1 .767.455l.794 1.235a1 1 0 0 0 .303.301l1.577 1.007a1 1 0 0 0 .527.158l2.595.03a.6.6 0 0 1 .54.847l-.535 1.181a1 1 0 0 0 .404 1.274l1.358.8a.6.6 0 0 0 .889-.653l-.282-1.216a.6.6 0 0 1 .52-.732l1.434-.153a1 1 0 0 1 .65.155l2.627 1.703a1 1 0 0 1 .07 1.63l-1.738 1.346a1 1 0 0 0-.38.665l-.22 1.738a1 1 0 0 1-.122.369l-.742 1.306a1 1 0 0 0 .095 1.127l.357.436a.6.6 0 0 1-.022.786l-.217.236a.6.6 0 0 1-.836.047l-.899-.781a1 1 0 0 0-.852-.226l-1.348.27a1 1 0 0 0-.713.562l-.222.484a1 1 0 0 0 .01.858l.063.126a.985.985 0 0 0 1.358.431l.547-.3c.175-.095.375-.136.573-.117l.078.007a1 1 0 0 1 .877.758l.089.36a.6.6 0 0 0 .295.384l1.908 1.041a.6.6 0 0 1-.045 1.076l-.884.39a.6.6 0 0 1-.566-.045l-1.497-.962a1 1 0 0 0-.277-.123l-3.942-1.08a1 1 0 0 1-.47-.284l-.983-1.059a1 1 0 0 0-.343-.24l-.602-.254a1 1 0 0 1-.523-.513l-.864-1.924a1 1 0 0 0-.207-.3l-.884-.88a1 1 0 0 1-.275-.508l-.352-1.723a1 1 0 0 1 .029-.511l.722-2.21a1 1 0 0 0 .036-.472l-.543-3.305a1 1 0 0 0-.178-.426Z"/>
    </svg>
  );
};
