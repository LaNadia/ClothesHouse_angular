import { JournalStory } from 'src/app/modules/journal/types/journalStory.interface';

export interface RelatedStoriesState {
  stories: JournalStory[] | [];
  isSubmitting: boolean;
  error: string | null;
}
