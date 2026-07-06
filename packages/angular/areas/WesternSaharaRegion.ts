// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-western-sahara-region',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M11.824 21.141 1.2 20.965l.542-2.258a1 1 0 0 1 .43-.607l.524-.338a1 1 0 0 0 .353-.395l1.902-3.831a1 1 0 0 1 .264-.332l1.567-1.274a1 1 0 0 0 .368-.73l.076-1.674a1 1 0 0 1 .102-.396l.914-1.857a1 1 0 0 1 .357-.4l1.372-.88a1 1 0 0 0 .384-.46L11.4 3l11.188-.141.212 4.906h-8.365v7.306l-2.388 1.28a1 1 0 0 0-.525.96z"/></svg>`,
})
export class WesternSaharaRegion {
  protected readonly b = inject(GeoIconBase);
}
