// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lr',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.017 12.581c-1.012-.789-2.834-2.144-3.396-2.692-.115-.113-.115-.277-.031-.414l.945-1.567a.5.5 0 0 1 .117-.133l3.12-2.477a.5.5 0 0 0 .189-.401l-.016-.8a.5.5 0 0 1 .296-.466l.953-.425a.5.5 0 0 0 .292-.395l.13-1.037a.5.5 0 0 1 .465-.437l2.038-.127a.5.5 0 0 1 .31.085l1.04.7a.5.5 0 0 1 .196.262l.818 2.55a.5.5 0 0 1 .003.297l-.374 1.24a.5.5 0 0 0 .155.525l1.104.935a.5.5 0 0 0 .528.075l.827-.371A.5.5 0 0 0 15 7.194l.71-2.4 1.332.404-.143.5a.5.5 0 0 0 .026.348l.887 1.924a.5.5 0 0 1 .037.304l-.349 1.814a.5.5 0 0 1-.142.264l-1.119 1.088a.25.25 0 0 0 .104.42l3.474 1.03a.5.5 0 0 1 .353.41l.105.743a.5.5 0 0 0 .271.378l1.198.6a.5.5 0 0 1 .258.312l.488 1.748a.5.5 0 0 1-.039.366l-.866 1.659a.5.5 0 0 0-.054.288l.3 2.638a.5.5 0 0 1-.649.532l-3.04-.973a.5.5 0 0 1-.092-.04l-5.332-2.985a.5.5 0 0 1-.097-.072L7.57 13.762a.5.5 0 0 0-.14-.092l-2.309-1.026a.5.5 0 0 1-.104-.063Z"/></svg>`,
})
export class Lr {
  protected readonly b = inject(GeoIconBase);
}
