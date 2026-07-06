// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-north-america',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.115 7.684-.618-.85a1 1 0 0 0-.974-.398l-.14.023a.6.6 0 0 1-.694-.664l.074-.603a1 1 0 0 1 .454-.721l1.228-.786a1 1 0 0 1 .614-.155l.447.033a1 1 0 0 1 .766.456l.68 1.055a1 1 0 0 0 .302.302l1.383.882a1 1 0 0 0 .526.157l2.225.026a.6.6 0 0 1 .54.847l-.41.906a1 1 0 0 0 .404 1.274l1.033.608a.6.6 0 0 0 .889-.653l-.209-.9a.6.6 0 0 1 .52-.733l1.194-.127a1 1 0 0 1 .65.155l2.227 1.444a1 1 0 0 1 .07 1.629l-1.428 1.107a1 1 0 0 0-.38.664l-.19 1.51a1 1 0 0 1-.123.368l-.628 1.105a1 1 0 0 0 .096 1.127l.247.303a.6.6 0 0 1-.022.785l-.123.134a.6.6 0 0 1-.836.047l-.732-.637a1 1 0 0 0-.852-.226l-1.121.225a1 1 0 0 0-.713.563l-.16.35a1 1 0 0 0 .01.857l.036.072a.89.89 0 0 0 1.225.39l.476-.26a.97.97 0 0 1 1.41.62l.062.254a.6.6 0 0 0 .295.384l1.595.87a.6.6 0 0 1-.045 1.075l-.66.292a.6.6 0 0 1-.567-.044l-1.311-.844a1 1 0 0 0-.277-.123l-3.517-.963a1 1 0 0 1-.47-.284l-.854-.92a1 1 0 0 0-.344-.241l-.488-.206a1 1 0 0 1-.523-.512l-.756-1.686a1 1 0 0 0-.208-.3l-.764-.76a1 1 0 0 1-.275-.51l-.307-1.5a1 1 0 0 1 .03-.511l.636-1.946a1 1 0 0 0 .036-.473L6.293 8.11a1 1 0 0 0-.178-.426Zm7.336-3.647.518-.142a.6.6 0 0 1 .583.154l1.18 1.181a1 1 0 0 0 .237.175l1.445.77a1 1 0 0 0 .47.118h1.044l-1.038-1.94a1 1 0 0 1-.094-.251l-.306-1.353a1 1 0 0 0-.626-.716l-2.595-.966a1 1 0 0 0-.37-.063l-.27.006a1 1 0 0 0-.896.604l-.152.353a1 1 0 0 0-.066.576l.187 1.023a.6.6 0 0 0 .75.47Z"/></svg>`,
})
export class NorthAmerica {
  protected readonly b = inject(GeoIconBase);
}
