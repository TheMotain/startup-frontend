// @flow

export type Action = Object & {
    type: string
}

export type FetchStatus = {
    fetching: boolean,
    fetched: boolean,
    fetchError: any
}

export type PostStatus = {
    posting: boolean,
    posted: boolean,
    postError: any
}

export type DeleteStatus = {
    deleting: boolean,
    deleted: boolean,
    deleteError: any
}

export type UpdateStatus = {
    updating: boolean,
    updated: boolean,
    updateStatus: any
}

export const createStatus = (ing: string, ed: string, error: string): Object => {
    return {
        [ing]: false,
        [ed]: false,
        [error]: null
    }
};

export const updatePending = (status: Object, ing: string): Object => {
    return {
        ...status,
        [ing]: true
    }
};

export const updateReceived = (status: Object, ing: string, ed: string): Object => {
    return {
        ...status,
        [ing]: false,
        [ed]: true
    }
};

export const updateRejected = (status: Object, errorData: any, ing: string, error: string): Object => {
    return {
        ...status,
        [ing]: false,
        [error]: errorData
    }
};


// FETCHING
const FETCHING = "fetching";
const FETCHED = "fetched";
const FETCH_ERROR = "fetchError";
export const createFetchStatus = (): FetchStatus => {
    return createStatus(FETCHING, FETCHED, FETCH_ERROR);
};

export const updateFetching = (status: FetchStatus): FetchStatus => {
    return updatePending(status, FETCHING);
};

export const updateFetched = (status: FetchStatus): FetchStatus => {
    return updateReceived(status, FETCHING, FETCHED);
};

export const updateFetchError = (status: FetchStatus, error: string): FetchStatus => {
    return updateRejected(status, error, FETCHING, FETCH_ERROR);
};

// POSTING
const POSTING = "posting";
const POSTED = "posted";
const POST_ERROR = "postError";
export const createPostStatus = (): PostStatus => {
    return createStatus(POSTING, POSTED, POST_ERROR);
};

export const updatePosting = (status: PostStatus): PostStatus => {
    return updatePending(status, POSTING);
};

export const updatePosted = (status: PostStatus): PostStatus => {
    return updateReceived(status, POSTING, POSTED);
};

export const updatePostError = (status: PostStatus, error: string): PostStatus => {
    return updateRejected(status, error, POSTING, POST_ERROR);
};

// DELETING
const DELETING = "deleting";
const DELETED = "deleted";
const DELETE_ERROR = "deleteError";
export const createDeleteStatus = (): DeleteStatus => {
    return createStatus(DELETING, DELETED, DELETE_ERROR);
};

export const updateDeleting = (status: DeleteStatus): DeleteStatus => {
    return updatePending(status, DELETING);
};

export const updateDeleted = (status: DeleteStatus): DeleteStatus => {
    return updateReceived(status, DELETING, DELETED);
};

export const updateDeleteError = (status: DeleteStatus, error: string): DeleteStatus => {
    return updateRejected(status, error, DELETING, DELETE_ERROR);
};

// UPDATING
const UPDATING = "updating";
const UPDATED = "updated";
const UPDATE_ERROR = "updateError";
export const createUpdateStatus = (): UpdateStatus => {
    return createStatus(UPDATING, UPDATED, UPDATE_ERROR);
};

export const updateUpdating = (status: UpdateStatus): UpdateStatus => {
    return updatePending(status, UPDATING);
};

export const updateUpdated = (status: UpdateStatus): UpdateStatus => {
    return updateReceived(status, UPDATING, UPDATED);
};

export const updateUpdateError = (status: UpdateStatus, error: string): UpdateStatus => {
    return updateRejected(status, error, UPDATING, UPDATE_ERROR);
};