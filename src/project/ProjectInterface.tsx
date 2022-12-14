interface ProjectInterface {
    id: number
    name: string
    description: string
    post: string | null
    status: string
    dueDate: Date   // 지원 마감
    intake: number  // 모집 인원
    leader: number
    members: number[]
    applicants: number[]
    tags: string[] | null
}

export default ProjectInterface
