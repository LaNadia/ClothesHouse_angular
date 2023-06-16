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

export enum ActionTypesRegisterUser {
    REGISTER_USER = '[User] Register User',
    REGISTER_USER_SUCCESS = '[User] Register User SUCCESS',
    REGISTER_USER_FAILURE = '[User] Register User FAILURE',

    LOGIN_USER = '[User] Login User',
    LOGIN_USER_SUCCESS = '[User] Login User SUCCESS',
    LOGIN_USER_FAILURE = '[User] Login User FAILURE',

    LOGOUT_USER = '[User] Logout User',
    LOGOUT_USER_SUCCESS = '[User] Logout User SUCCESS',
    LOGOUT_USER_FAILURE = '[User] Logout User FAILURE',

    CHANGE_NAME_USER_SUCCESS = '[User] Change Name User SUCCESS',
    CHANGE_NAME_USER_FAILURE = '[User] Change Name User FAILURE',
}

export enum ActionTypesCart {
    ADD_ITEM_TO_CART = '[Cart] Add Item To Cart',
    ADD_ITEM_TO_CART_SUCCESS = '[Cart] Add Item To Cart SUCCESS',
    ADD_ITEM_TO_CART_FAILURE = '[Cart] Add Item To Cart FAILURE',

    CHANGE_CART_QUANTITY = '[Cart] Change cart quantity',
    CHANGE_CART_QUANTITY_SUCCESS = '[Cart] Change cart quantity SUCCESS',
    CHANGE_CART_QUANTITY_FAILURE = '[Cart] Change cart quantity FAILURE',
}