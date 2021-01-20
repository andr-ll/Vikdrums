import { PartTemplateData } from "../Components/Parts/Components/PartTemplate";
import { CollectionData } from "../type"

export const PartsFetchPendingAct = "PartsPending";
export const PartsFetchSuccessAct = "GotParts";
export const PartsFetchFailAct = "FailParts";
export const CurrentPartFullSizeAct = "SetFullSizePart";

export type PartsAction =
    | ReturnType<typeof partsFetchPending>
    | ReturnType<typeof partsFetchSuccess>
    | ReturnType<typeof partsFetchFail>
    | ReturnType<typeof currentPartFullSize>;

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

export const currentPartFullSize = (data: PartTemplateData) => {
    return {
        type: CurrentPartFullSizeAct,
        payload: data
    } as const
}