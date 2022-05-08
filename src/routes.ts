import express from 'express'
import { SubmitFeedbackUseCase } from './use_cases/submit_feedback_use_case'
import { PrismaFeedbackRepository } from './repositories/prisma/prisma_feedbacks_repository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer_mail_adapter'

export const routes = express.Router()


routes.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter)

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return response.status(201).send()
})