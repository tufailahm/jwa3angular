import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title  -- About Revature Consultancy Private Limited !!', async () => {
    expect(component.title).toEqual('-- About Revature Consultancy Private Limited !!')
  })

  it('should render a title  in h1 tag', async () => {
    //to do 
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('-- About Revature Consultancy Private Limited !!');
  })
});
