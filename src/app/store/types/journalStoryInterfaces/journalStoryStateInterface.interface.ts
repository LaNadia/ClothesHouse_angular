import { JournalStory } from 'src/app/modules/journal/types/journalStory.interface';

export interface JournalStoryState {
  story: JournalStory[] | [];
  isSubmitting: boolean;
  error: string | null;
}
