export interface blogType {
  id: string;
  title?: string;
  contend?: string;
  tags?: string[];
  authorId?: string;
}

export interface blogPost {
  title: string;
  content: string;
  tags?: string[];
}

export interface PaginationProfs {
  meta: {
    limit: string;
    page: string;
  };
}
