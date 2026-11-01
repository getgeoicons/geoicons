// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gn',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m22.108 12.896-.029-1.3a3 3 0 0 0-.196-1.004l-.98-2.567a3 3 0 0 0-.275-.547l-1.529-2.39a1 1 0 0 0-1.377-.305l-1.057.67a1 1 0 0 1-.488.154l-1.721.08a2 2 0 0 1-.976-.202l-1.629-.8a1 1 0 0 0-.519-.1l-2.085.163a2 2 0 0 1-.639-.053L5.89 4.018a.6.6 0 0 0-.745.582v1.631a.6.6 0 0 1-.471.586l-1.963.433a1 1 0 0 0-.656.486l-.61 1.081a.6.6 0 0 0 .14.756l2.687 2.236a3 3 0 0 1 .604.682l1.165 1.81a.6.6 0 0 0 .96.066l1.646-1.913a1 1 0 0 1 .678-.344l2.614-.209a1 1 0 0 1 .926.465l1.273 2.027a1 1 0 0 1 .151.585l-.063 1.201a.6.6 0 0 0 .709.622l1.373-.256a1 1 0 0 1 1.174.843l.229 1.622a1 1 0 0 0 .513.74l.31.168a1 1 0 0 0 .928.014l1.58-.797a1 1 0 0 0 .427-.414l1.151-2.11a1 1 0 0 0 .099-.696l-.54-2.435a3 3 0 0 1-.071-.584Z"/></svg>`,
})
export class Gn {
  protected readonly b = inject(GeoIconBase);
}
