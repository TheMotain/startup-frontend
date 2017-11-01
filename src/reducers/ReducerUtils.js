// @flow
export type Action = {
    type: string;
    payload?: any;
    meta?: Object;
}

export type FetchStatus = {
    fetching: boolean,
    fetched: boolean,
    fetchError: ?string
}

export type PostStatus = {
    posting: boolean,
    posted: boolean,
    postError: ?string
}


export const createPostStatus = () => {
    return {
        posting: false,
        posted: false,
        postError: null
    }
};

export const updatePosting = (postStatus: PostStatus) => {
    return {
        ...postStatus,
        posting: true
    }
};

export const updatePosted = (postStatus: PostStatus) => {
    return {
        ...postStatus,
        posting: false,
        posted: true
    }
};

export const updatePostError = (postStatus: PostStatus, error: string) => {
    return {
        ...postStatus,
        posting: false,
        postError: error
    }
};

export const createFetchStatus = () => {
    return {
        fetching: false,
        fetched: false,
        fetchError: null
    }
};

export const updateFetching = (fetchStatus: FetchStatus) => {
    return {
        ...fetchStatus,
        fetching: true
    }
};

export const updateFetched = (fetchStatus: FetchStatus) => {
    return {
        ...fetchStatus,
        fetching: false,
        fetched: true
    }
};

export const updateFetchError = (fetchStatus: FetchStatus, error: string) => {
    return {
        ...fetchStatus,
        fetching: false,
        fetchError: error
    }
};