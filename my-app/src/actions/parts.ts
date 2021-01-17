import { CollectionData } from "../type"

export const PartsFetchPendingAct = "PartsPending";
export const PartsFetchSuccessAct = "GotParts";
export const PartsFetchFailAct = "FailParts";

export type PartsAction =
    | ReturnType<typeof partsFetchPending>
    | ReturnType<typeof partsFetchSuccess>
    | ReturnType<typeof partsFetchFail>;

export const partsFetchPending = () => {
    return {
        type: PartsFetchPendingAct,
        payload: undefined
    } as const
}

export const partsFetchSuccess = (data: CollectionData[]) => {
    return {
        type: PartsFetchSuccessAct,
        payload: data
    } as const
}

export const partsFetchFail = (err: string) => {
    return {
        type: PartsFetchFailAct,
        payload: err
    } as const
}