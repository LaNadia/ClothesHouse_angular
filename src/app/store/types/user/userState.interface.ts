export interface UserState {
    email: string | null,
    token: string | null,
    uid: string | null,
    isSubmitting: boolean,
    error: string | null
}