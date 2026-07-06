// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-be',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.705 9.192-.417-1.736a.5.5 0 0 1 .238-.55l3.591-2.053a.5.5 0 0 1 .391-.045l3.335.993a.5.5 0 0 0 .482-.112l1.94-1.794a.5.5 0 0 1 .311-.132l3.154-.18a.5.5 0 0 1 .453.236l.823 1.328a.5.5 0 0 0 .255.206l2.52.914a.5.5 0 0 1 .302.633l-.764 2.222a.5.5 0 0 0 .362.65l1.797.408a.5.5 0 0 1 .252.143l1.814 1.9a.5.5 0 0 1 .075.59l-1.164 2.07a.5.5 0 0 1-.597.228l-.466-.16a.5.5 0 0 0-.603.239L18.824 17a.5.5 0 0 0-.035.386l.66 2.085a.5.5 0 0 1-.393.644l-1.67.283a.5.5 0 0 1-.39-.098l-2.807-2.173a.5.5 0 0 1-.187-.474l.343-2.146a.5.5 0 0 0-.22-.497l-.163-.107a.5.5 0 0 0-.695.148l-.8 1.245a.5.5 0 0 1-.387.228l-1.517.105a.5.5 0 0 1-.534-.512l.051-1.971a.5.5 0 0 0-.494-.513l-1.577-.019a.5.5 0 0 1-.467-.34l-.26-.766a.5.5 0 0 0-.418-.336l-1.191-.135a.5.5 0 0 1-.422-.35l-.46-1.491a.5.5 0 0 0-.688-.307l-.764.353a.5.5 0 0 1-.513-.056l-.938-.713a.5.5 0 0 1-.183-.282Z"/></svg>`,
})
export class Be {
  protected readonly b = inject(GeoIconBase);
}
