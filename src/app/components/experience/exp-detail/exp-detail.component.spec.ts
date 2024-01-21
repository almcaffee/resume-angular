import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpDetailComponent } from './exp-detail.component';

describe('ExpDetailComponent', () => {
  let component: ExpDetailComponent;
  let fixture: ComponentFixture<ExpDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
