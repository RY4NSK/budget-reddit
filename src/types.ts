export interface LinkPostContent {
    link: string,
    thumbnailUrl?: string
}

export interface ImagePostContent {
    imageUrl: string,
    thumbnailUrl?: string
}

export interface TextPostContent {
    text: string,
    thumbnailUrl?: string
}

export interface RemovedPostContent {
    reason: ContentRemovalReason
}

export type ContentRemovalReason = "DELETED" | "REMOVED_BY_MODERATOR"

export type PostContent = LinkPostContent | ImagePostContent | TextPostContent | RemovedPostContent