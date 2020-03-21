import { HistoryService } from './history/history.service';
import { SyntheseService } from './synthese/synthese.service';

export const services: any[] = [HistoryService, SyntheseService];

export * from './history/history.service';
export * from './synthese/synthese.service';