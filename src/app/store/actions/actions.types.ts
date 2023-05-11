export enum ActionTypesTrending {
    GET_TRENDING_CLOTHES = '[TrendingClothes] Get trending clothes',
    GET_TRENDING_CLOTHES_SUCCESS = '[TrendingClothes] Get trending clothes SUCCESS',
    GET_TRENDING_CLOTHES_FAILURE = '[TrendingClothes] Get trending clothes FAILURE',
    GET_NEW_ARRIVAL = "GET_NEW_ARRIVAL",
    GET_NEW_ARRIVAL_FAILURE = "GET_NEW_ARRIVAL_FAILURE",
    GET_NEW_ARRIVAL_SUCCESS = "GET_NEW_ARRIVAL_SUCCESS",
    GET_JOURNAL = "GET_JOURNAL",
    GET_JOURNAL_SUCCESS = "GET_JOURNAL_SUCCESS",
    GET_JOURNAL_FAILURE = "GET_JOURNAL_FAILURE"
}

export enum ActionTypesNewArrival {
    GET_NEW_ARRIVAL = '[New Arrival] Get New Arrival',
    GET_NEW_ARRIVAL_SUCCESS = '[New Arrival] Get New Arrival SUCCESS',
    GET_NEW_ARRIVAL_FAILURE = '[New Arrival] Get New Arrival FAILURE'
}

export enum ActionTypesJournal {
    GET_JOURNAL_STORY = '[Journal] Get Journal Story',
    GET_JOURNAL_STORY_SUCCESS = '[Journal] Get Journal Story SUCCESS',
    GET_JOURNAL_STORY_FAILURE = '[Journal] Get Journal Story FAILURE',

    GET_RELATED_STORIES = '[Journal] Get Related Stories',
    GET_RELATED_STORIES_SUCCESS = '[Journal] Get Related Stories SUCCESS',
    GET_RELATED_STORIES_FAILURE = '[Journal] Get Related Stories FAILURE',

}