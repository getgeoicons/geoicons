// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-bj',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.502 4.868-1.73 3.201a.5.5 0 0 0 .176.663l1.322.817a.5.5 0 0 1 .237.43l-.016 1.707a.5.5 0 0 0 .13.34l.734.81a.5.5 0 0 1 .129.345l-.14 8.13a.5.5 0 0 0 .109.319l.758.955a.5.5 0 0 0 .444.186l2.288-.242a.5.5 0 0 0 .447-.504l-.117-8.469a.5.5 0 0 1 .398-.496l.908-.19a.5.5 0 0 0 .343-.26l2.412-4.707a.5.5 0 0 0-.004-.463l-1.274-2.386a.5.5 0 0 1-.01-.452l.332-.69a.5.5 0 0 0-.12-.59l-2.184-1.93a.5.5 0 0 0-.493-.098l-1.172.4a.5.5 0 0 0-.333.546l.125.861a.5.5 0 0 1-.119.402l-.898 1.024a.5.5 0 0 1-.401.17l-1.816-.091a.5.5 0 0 0-.465.262Z"/></svg>`,
})
export class Bj {
  protected readonly b = inject(GeoIconBase);
}
