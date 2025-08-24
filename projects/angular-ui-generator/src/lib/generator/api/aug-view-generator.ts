import {
  AfterViewInit,
  Component,
  inject,
  ViewContainerRef,
} from '@angular/core';
import { AugViewMetadata } from '../type/aug-view-metadata';
import { BlockBuilder, ButtonBuilder, ParagraphBuilder } from '../../builder';

@Component({
  selector: 'aug-view-generator',
  template: '',
})
export abstract class AugViewGenerator implements AfterViewInit {
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly buttonBuilder = inject(ButtonBuilder);
  private readonly blockBuilder = inject(BlockBuilder);
  private readonly paragraphBuilder = inject(ParagraphBuilder);

  abstract buildViewMetadata(): AugViewMetadata[];

  ngAfterViewInit(): void {
    this.generate(this.buildViewMetadata(), this.viewContainerRef);
  }

  private generate(
    augViewMetadata: AugViewMetadata[],
    container: ViewContainerRef,
  ) {
    augViewMetadata.forEach((metadata) => {
      const { kind } = metadata;
      switch (kind) {
        case 'button': {
          this.buttonBuilder.build(container, metadata);
          break;
        }
        case 'block': {
          const { component, children } = this.blockBuilder.build(
            container,
            metadata,
          );
          this.generate(children, component.instance.container);
          break;
        }
        case 'paragraph': {
          this.paragraphBuilder.build(container, metadata);
          break;
        }
        default:
          throw new Error('Not supported kind');
      }
    });
  }
}
