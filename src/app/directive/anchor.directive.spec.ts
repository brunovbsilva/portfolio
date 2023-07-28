import { ViewportScroller } from '@angular/common';
import { AnchorDirective }  from './anchor.directive';

describe('AnchorDirective', () => {
  var directive: AnchorDirective;

  var viewportScrollerSpy = jasmine.createSpyObj<ViewportScroller>(['scrollToAnchor']);

  beforeEach(() => {
    directive = new AnchorDirective(viewportScrollerSpy);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should click', () => {

    // Arrange
    var event: any;
    var anchor = spyOn(directive, 'anchor');

    // Act
    directive.onClick(event);

    // Assert
    expect(anchor).toHaveBeenCalled();

  });

  it('should click', () => {

    // Arrange
    var elementId: string = '1';

    // Act
    directive.anchor(elementId);

    // Assert
    expect(viewportScrollerSpy.scrollToAnchor).toHaveBeenCalled();

  });

});
