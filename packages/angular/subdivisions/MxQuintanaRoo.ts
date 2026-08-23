// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-quintana-roo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.693 21.81a.8.8 0 0 0 .7.832l.726.091a.8.8 0 0 0 .799-.405l1.428-2.568a.6.6 0 0 1 .549-.308l1.575.063a.6.6 0 0 1 .573.55l.139 1.65a.602.602 0 0 0 1.178.118l1.896-6.495a4 4 0 0 0 .15-1.413l-.21-2.876a4 4 0 0 1 .464-2.183l.239-.445c.173-.322.39-.62.643-.883l1.855-1.927a2 2 0 0 0 .556-1.281l.029-.537a2 2 0 0 0-.399-1.309l-.758-1.007a.6.6 0 0 0-.552-.235l-1.892.23a.6.6 0 0 0-.527.606l.04 2.293a1 1 0 0 1-.226.652l-2.689 3.28a1 1 0 0 1-.53.337l-1.938.484a1 1 0 0 0-.435.235l-3.899 3.59a.3.3 0 0 0-.038.399l.773 1.047a.6.6 0 0 1 .116.385z"/></svg>`,
})
export class MxQuintanaRoo {
  protected readonly b = inject(GeoIconBase);
}
