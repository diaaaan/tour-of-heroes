import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MassagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MassagesService);
    expect(service).toBeTruthy();
  });
});
