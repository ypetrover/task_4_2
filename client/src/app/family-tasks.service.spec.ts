import { TestBed } from '@angular/core/testing';

import { FamilyTasksService } from './family-tasks.service';

describe('FamilyTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyTasksService = TestBed.get(FamilyTasksService);
    expect(service).toBeTruthy();
  });
});
