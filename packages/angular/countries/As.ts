// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-as',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M4.075 10.935 1.2 13.503l4.106.8a.5.5 0 0 1 .394.39l.233 1.119a.5.5 0 0 0 .241.332l1.428.816a.5.5 0 0 0 .404.041l.978-.32a.5.5 0 0 0 .22-.145l1.463-1.661a.5.5 0 0 1 .106-.092l1.368-.87-.148-1.076a.5.5 0 0 1 .268-.512l.866-.445a.5.5 0 0 0 .249-.596l-.522-1.652 2.119-.173.13 1.233h1.438a.5.5 0 0 0 .26-.073l1.505-.912a.5.5 0 0 1 .674.148l.447.664 2.669-.799a.5.5 0 0 0 .348-.389l.356-1.947-1.431.095a.5.5 0 0 0-.324.15l-.626.639a.5.5 0 0 1-.505.128l-2.048-.634a.5.5 0 0 0-.211-.019l-1.724.22a.5.5 0 0 1-.364-.096l-1.243-.937-2.282 1.14a.5.5 0 0 0-.164.133l-1.532 1.885a.5.5 0 0 1-.216.154l-1.895.696a.5.5 0 0 1-.195.03l-3.61-.16a.5.5 0 0 0-.355.127Z"/></svg>`,
})
export class As {
  protected readonly b = inject(GeoIconBase);
}
