// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mp',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.95 19.433-1.263.711.259 2.179a.5.5 0 0 0 .536.439l.749-.06a.5.5 0 0 0 .411-.282l.871-1.818a.5.5 0 0 1 .069-.106l1.472-1.747-1.906-1.396-1.003 1.88a.5.5 0 0 1-.196.2Zm5.182-7.652-1.112.529a.5.5 0 0 0-.261.605l.197.609a.5.5 0 0 0 .703.291l1.254-.64a.5.5 0 0 0 .185-.727l-.339-.497a.5.5 0 0 0-.627-.17Zm3.426-5.868-.82-.83a.5.5 0 0 1-.02-.681l2.466-2.817a.5.5 0 0 1 .714-.039l.136.124a.5.5 0 0 1 .108.594L16.36 5.788a.5.5 0 0 1-.802.125Z"/></svg>`,
})
export class Mp {
  protected readonly b = inject(GeoIconBase);
}
