// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-northeast-asia-simplified',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m2.867 10.24-1.155.479a.678.678 0 0 0-.136 1.177l.72.516a1 1 0 0 1 .389.576l.235.969a1 1 0 0 0 .422.598l1.372.904a1 1 0 0 0 .426.157l1.278.16a1 1 0 0 0 .634-.132l1.064-.63a1 1 0 0 1 .987-.018l.298.162a1 1 0 0 1 .414 1.333l-.073.142a.97.97 0 0 0 1.243 1.332l.72-.305a1 1 0 0 1 .941.085l.613.405a1 1 0 0 0 .835.124l1.229-.365q.18-.054.329-.169l1.243-.966a1 1 0 0 0 .319-.427l.443-1.14a1 1 0 0 0-.047-.827l-.737-1.402a.6.6 0 0 1 .175-.762l.67-.494a.6.6 0 0 1 .93.31l.297.984a.6.6 0 0 0 .853.358l.785-.41a.6.6 0 0 0 .29-.726l-.339-.989a1 1 0 0 1 .294-1.082l1.358-1.17a1 1 0 0 0 .301-.457l.313-.997-2.085-.037a1 1 0 0 1-.836-.48l-.541-.888a1 1 0 0 0-.8-.478l-.55-.03a1 1 0 0 0-.964.587l-.124.273a1 1 0 0 1-.81.583l-2.507.255a1 1 0 0 1-.453-.058l-2.41-.904a1 1 0 0 0-1.091.263l-.153.169a1 1 0 0 1-.994.295l-.891-.234a1 1 0 0 0-.576.02l-1.281.437a1 1 0 0 0-.203.095l-1.54.95a1 1 0 0 0-.465.716l-.051.374a1 1 0 0 1-.608.79Z"/></svg>`,
})
export class NortheastAsiaSimplified {
  protected readonly b = inject(GeoIconBase);
}
