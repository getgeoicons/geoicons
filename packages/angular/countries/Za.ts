// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-za',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.813 16.868-2.482-4.846a.5.5 0 0 1 .023-.496l.38-.599a.5.5 0 0 1 .78-.081l.794.81a1.5 1.5 0 0 0 1.257.44l1.057-.132a.5.5 0 0 0 .438-.507l-.12-5.48 1.602 3.058 1.443-.565a.5.5 0 0 0 .256-.224l.56-1.017a.5.5 0 0 1 .536-.249l2.358.472a.5.5 0 0 0 .554-.285l.415-.924a.5.5 0 0 1 .12-.164l3.747-3.422a.5.5 0 0 1 .343-.13l2.552.028a.5.5 0 0 1 .47.344l.628 1.914a.5.5 0 0 1 .024.12l.203 2.804-.784-.127a.5.5 0 0 0-.568.386l-.166.757a.5.5 0 0 0 .49.607l1.483-.01a.5.5 0 0 1 .496.583l-.24 1.448a.5.5 0 0 1-.093.216l-3.268 4.38-.055.061-3.299 3.162a.5.5 0 0 1-.181.111l-2.865 1a.5.5 0 0 1-.175.027l-3.363-.067a.5.5 0 0 0-.186.032l-2.88 1.088a.5.5 0 0 1-.431-.038l-1.567-.928a.5.5 0 0 1-.207-.239l-.68-1.641a.5.5 0 0 1 .063-.492l.493-.657a.5.5 0 0 0 .045-.528Z"/></svg>`,
})
export class Za {
  protected readonly b = inject(GeoIconBase);
}
