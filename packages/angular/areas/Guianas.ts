// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-guianas',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M2.529 5.991 4.09 4.876a1 1 0 0 1 1.228.05l5.134 4.35a1 1 0 0 0 .584.235l6.585.411a1 1 0 0 1 .393.108l2.677 1.371a1 1 0 0 1 .31.247l1.487 1.773a.6.6 0 0 1 .013.755l-2.625 3.358a1 1 0 0 1-.698.38l-1.55.14a1 1 0 0 1-.799-.288l-.711-.711a1 1 0 0 0-.707-.293h-1.095c-.426 0-.8.279-.923.686a.964.964 0 0 1-1.063.677l-1.366-.201a1 1 0 0 0-.628.113l-2.466 1.36a1 1 0 0 1-.692.101l-1.554-.333a1 1 0 0 1-.734-.645l-.746-2.113a1 1 0 0 1 .015-.704l.673-1.681a1 1 0 0 0-.222-1.079l-2.98-2.98a1 1 0 0 1-.247-1.009l.774-2.45a1 1 0 0 1 .372-.513Z"/></svg>`,
})
export class Guianas {
  protected readonly b = inject(GeoIconBase);
}
