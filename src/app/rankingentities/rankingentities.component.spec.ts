import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingentitiesComponent } from './rankingentities.component';

describe('RankingentitiesComponent', () => {
  let component: RankingentitiesComponent;
  let fixture: ComponentFixture<RankingentitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RankingentitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingentitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
