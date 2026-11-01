// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-ci',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m5.273 21.83.21-3.52a1 1 0 0 0-.493-.924l-2.531-1.478a1 1 0 0 1-.485-1.015l.345-2.249a1 1 0 0 1 .294-.568l.831-.802a.6.6 0 0 0-.137-.962l-.324-.171a.6.6 0 0 1-.276-.76l.122-.295a.6.6 0 0 1 .506-.37l.765-.063a.6.6 0 0 0 .513-.808L3.278 4.278a1 1 0 0 1 .339-1.152l.775-.58a1 1 0 0 1 1.005-.112l.946.421a.8.8 0 0 0 1-.3l.46-.723a1 1 0 0 1 .722-.455l.797-.098a.6.6 0 0 1 .673.565l.018.372a.6.6 0 0 0 .756.55l1.158-.313a1 1 0 0 1 1.12.455l.676 1.137a2 2 0 0 0 1.175.903l.562.16a1 1 0 0 0 .869-.16l.736-.548a2 2 0 0 1 1.167-.394l.78-.01a2 2 0 0 1 1.387.535l.829.77a1 1 0 0 1 .308.583l.542 3.599a1 1 0 0 1-.114.633l-2.238 4.044a2 2 0 0 0-.21 1.364l.463 2.291a.6.6 0 0 0 .422.458l.668.192a.6.6 0 0 1 .434.55l.035.793a.6.6 0 0 1-.697.62l-3.683-.611a2 2 0 0 0-.546-.015l-5.623.617a2 2 0 0 0-.57.15l-4.311 1.848a.6.6 0 0 1-.835-.587Z"/></svg>`,
})
export class Ci {
  protected readonly b = inject(GeoIconBase);
}
