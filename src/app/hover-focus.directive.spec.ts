import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from './hover-focus.directive';

@Component({
  template: `<input type="text" appHoverFocus>`
})
class TestHoverFocusComponent {

}

describe('HoverFocusDirective', () => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputElement: DebugElement;
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [TestHoverFocusComponent, HoverFocusDirective]
    })
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputElement = fixture.debugElement.query(By.css('input'))
  })

  it('should create an instance', () => {
    const directive = new HoverFocusDirective();
    expect(directive).toBeTruthy();
  });

  it('hovering over input', () => {
    inputElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputElement.nativeElement.style.backgroundColor).toBe('blue')

    

  });

  //to do -- hands on -- on mouse out the background color should be red
    //write the test case to check 
  it('leaving input hover', () => {
    inputElement.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputElement.nativeElement.style.backgroundColor).toBe('red');
  });



});
