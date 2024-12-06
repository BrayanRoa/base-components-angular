import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownsComponent } from './drop-downs.component';

describe('DropDownsComponent', () => {
  let component: DropDownsComponent;
  let fixture: ComponentFixture<DropDownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropDownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
