import { Router } from "express";
import { SERVICE_NAME } from "../config/constants.js";
import { ApiResponse } from "../types/common.types.js";


export const apiRouter = Router()

apiRouter.get("/health", (_request, response) => {
    const body: ApiResponse<{
        service: string
        status: "healthy"
        timestamp: string
    }> = {
        success: true,
        message: "Service is running.",
        data: {
            service: SERVICE_NAME,
            status: "healthy" ,
            timestamp: new Date().toISOString()
        }
    }
    response.status(200).json(body)
})