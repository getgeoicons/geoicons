// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-by',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m3.068 19.867 1.564-.648a3 3 0 0 1 1.751-.168l10.28 2.105a1 1 0 0 0 1.195-.871l.06-.548a1.41 1.41 0 0 1 1.228-1.245l.237-.03a.996.996 0 0 0 .786-1.398l-.939-2.079a.6.6 0 0 1 .266-.777l.128-.068a.6.6 0 0 1 .557-.002l.522.271a1 1 0 0 0 1.15-.163l.271-.258a1 1 0 0 0 .081-1.362L18.95 8.689a2 2 0 0 1-.449-1.48l.161-1.56a1 1 0 0 0-.424-.924l-1.116-.776a2 2 0 0 0-.657-.299l-3.356-.839a2 2 0 0 0-1.432.179L9.383 4.22a1 1 0 0 0-.526.858l-.02.896a1 1 0 0 1-.454.815l-1.19.776a1 1 0 0 0-.447.723L6.59 9.624a1 1 0 0 1-.736.852l-3.544.943a.6.6 0 0 0-.421.75l.853 2.886a1 1 0 0 1-.212.948l-.958 1.078a1 1 0 0 0-.21.956l.366 1.198a1 1 0 0 0 1.34.632Z"/></svg>`,
})
export class By {
  protected readonly b = inject(GeoIconBase);
}
