// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bs-south-andros',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path d="m7.79 9.802-1.688 2.625a1 1 0 0 0-.135.759l.778 3.486a1 1 0 0 1-.038.563l-.43 1.172a1 1 0 0 0 .177.994l1.422 1.669a1 1 0 0 0 .729.35l1.688.055a1 1 0 0 1 .63.25l.846.749a1 1 0 0 0 .852.232l2.675-.517a1 1 0 0 0 .7-.526l1.06-2.071c.228-.448.388-.928.474-1.424l.47-2.711c.082-.475.077-.96-.013-1.434l-1.464-7.65-1.268-4.036a1 1 0 0 0-1.414-.589l-.24.125a1 1 0 0 0-.465.51L10.608 8.57a1 1 0 0 1-.799.614l-1.305.167a1 1 0 0 0-.714.451Z"/></svg>`,
})
export class BsSouthAndros {
  protected readonly b = inject(GeoIconBase);
}
