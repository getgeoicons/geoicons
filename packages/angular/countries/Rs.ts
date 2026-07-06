// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-rs',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m7.097 1.245-2.269.985a.5.5 0 0 0-.293.55l.716 3.869a.5.5 0 0 0 .128.252l.777.822a.5.5 0 0 1 .095.543l-.696 1.603a.5.5 0 0 0-.01.372l1.052 2.867a.5.5 0 0 1-.053.45l-.667.999a.5.5 0 0 0 .148.699l3.361 2.136a.5.5 0 0 1 .15.695l-.653 1.003a.5.5 0 0 0-.004.54l1.667 2.648a.5.5 0 0 0 .771.093l1.152-1.116a.5.5 0 0 1 .303-.139l4.148-.372a.5.5 0 0 0 .455-.509l-.039-1.904a.5.5 0 0 1 .212-.419l1.563-1.106a.5.5 0 0 0 .107-.714l-2.048-2.654 1.16-3.732a.5.5 0 0 0-.083-.455l-.314-.404a.5.5 0 0 0-.663-.115l-.96.61a.5.5 0 0 1-.396.06l-1.61-.429a.5.5 0 0 1-.37-.518l.124-1.761a.5.5 0 0 0-.247-.467l-2.003-1.168a.5.5 0 0 1-.188-.195L9.83 1.55a.5.5 0 0 0-.42-.262l-2.093-.083a.5.5 0 0 0-.22.04Z"/></svg>`,
})
export class Rs {
  protected readonly b = inject(GeoIconBase);
}
