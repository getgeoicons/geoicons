// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-st',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.807 22.032-.735-3.948a.5.5 0 0 1 .112-.416l1.994-2.338a1 1 0 0 1 .779-.35l1.11.02a1 1 0 0 1 .85.5l.491.856a1 1 0 0 1 .129.406l.1 1.072a1 1 0 0 1-.172.66l-1.383 2.01a1 1 0 0 1-.245.25l-2.25 1.594a.5.5 0 0 1-.78-.316ZM15.5 3.64c.12-.629.381-1.517.527-1.992a.49.49 0 0 1 .453-.347l1.782-.072a.5.5 0 0 1 .498.648l-.754 2.42a.5.5 0 0 1-.622.329l-1.556-.47a.454.454 0 0 1-.329-.515Z"/></svg>`,
})
export class St {
  protected readonly b = inject(GeoIconBase);
}
