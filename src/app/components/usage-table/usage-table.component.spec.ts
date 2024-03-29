import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageTableComponent } from './usage-table.component';

describe('UsageTableComponent', () => {
  let component: UsageTableComponent;
  let fixture: ComponentFixture<UsageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsageTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
