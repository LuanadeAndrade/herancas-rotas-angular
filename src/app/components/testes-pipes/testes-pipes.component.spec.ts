import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestesPipesComponent } from './testes-pipes.component';

describe('TestesPipesComponent', () => {
  let component: TestesPipesComponent;
  let fixture: ComponentFixture<TestesPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestesPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestesPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
