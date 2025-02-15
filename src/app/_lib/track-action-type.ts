export type TrackState = {
    error?: string | undefined;
    success: boolean;
}

export const initialState = {
    error: undefined,
    success: false,
}