export interface UserState {
    user: {
        email: string | null,
        token: string | null,
        uid: string | null,
        displayName: string | null,
        photoUrl: string | null
    },
    isSubmitting: boolean,
    error: string | null
}