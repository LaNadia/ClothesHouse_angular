export interface UserState {
    user: {
        email: string | null,
        token: string | null,
        uid: string | null,
    },
    isSubmitting: boolean,
    error: string | null
}