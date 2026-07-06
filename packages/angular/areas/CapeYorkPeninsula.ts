// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-cape-york-peninsula',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m8.3 22.747-3.458-.377a.6.6 0 0 1-.512-.762l1.181-4.111a1 1 0 0 0 .022-.46l-.73-3.903a1 1 0 0 1 .059-.569l.653-1.567a1 1 0 0 0 .07-.508l-.262-2.096a1 1 0 0 1 .125-.62l.999-1.748a1 1 0 0 0 .1-.246l.563-2.182a1 1 0 0 0 .032-.25v-.773a1 1 0 0 1 .51-.872l.184-.103a1 1 0 0 1 1.245.217l.653.753a1 1 0 0 1 .243.709l-.072 1.35a1 1 0 0 0 .483.91l.576.347a1 1 0 0 1 .413.487L12.425 9q.069.174.07.362l.024 2.942q.002.175.063.34l.582 1.565a1 1 0 0 0 1.343.565l1.094-.485a1 1 0 0 1 1.077.173l2.247 2.036a1 1 0 0 1 .314.574l.58 3.425a1 1 0 0 1-.058.54l-.395.985a.6.6 0 0 1-.913.26l-.714-.527a1 1 0 0 0-.907-.145l-1.017.335a1 1 0 0 1-1.062-.286l-.15-.17a1 1 0 0 0-.72-.337l-3.778-.108a1 1 0 0 0-.982.698l-.187.59a.6.6 0 0 1-.637.415Z"/></svg>`,
})
export class CapeYorkPeninsula {
  protected readonly b = inject(GeoIconBase);
}
