declare global {
    namespace Express {
        interface request {
            auth?: {
                userId: string
                sessionId?: string
                role: "client" | "freelancer"
                accountExists: boolean
                isOnboarded: boolean
            }
        }
    }
}

export {}