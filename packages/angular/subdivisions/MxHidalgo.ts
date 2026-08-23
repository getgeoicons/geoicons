// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-mx-hidalgo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M21.94 11.819a1 1 0 0 0 .198-1.193l-.068-.13a1 1 0 0 0-1.536-.294l-2.874 2.464a.8.8 0 0 1-1.227-.231l-.395-.743a.8.8 0 0 1-.02-.713l1.247-2.68a1 1 0 0 1 1.041-.569l.816.11a1 1 0 0 0 1.1-.728l.565-2.085a1 1 0 0 0-.7-1.226l-2.341-.645a.6.6 0 0 1-.426-.449L17 1.27a.6.6 0 0 0-.685-.462l-.913.152a.6.6 0 0 0-.481.746l.182.686a.6.6 0 0 1-.489.748l-1.576.24a.6.6 0 0 1-.644-.362l-.427-1.026a.6.6 0 0 0-.647-.362l-.735.115a.6.6 0 0 0-.505.548l-.063.84a.6.6 0 0 1-.45.537l-2.344.596a1 1 0 0 0-.716.698L5.354 9.049a1 1 0 0 1-.575.65l-2.36.991a1 1 0 0 0-.606.8l-.242 1.969a1 1 0 0 0 .31.852l.77.721a1 1 0 0 0 .648.27l1.385.048a1 1 0 0 1 .962.929l.13 1.835a1 1 0 0 0 .123.414l.272.491a1 1 0 0 0 1.598.207l1.81-1.895a.852.852 0 0 1 1.465.65l-.095 1.284a.622.622 0 0 0 .88.611l1.444-.665a1 1 0 0 1 1.04.124l.532.422a1 1 0 0 1 .357.995l-.065.302a1 1 0 0 0 .953 1.21l1.555.038a1 1 0 0 0 .779-.343l1.214-1.395a.8.8 0 0 0 .074-.95l-.272-.435a.8.8 0 0 1 .02-.879l1.326-1.923a.8.8 0 0 0-.184-1.099l-.533-.392a.8.8 0 0 1-.076-1.225z"/></svg>`,
})
export class MxHidalgo {
  protected readonly b = inject(GeoIconBase);
}
