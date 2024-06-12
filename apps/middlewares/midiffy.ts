import { HttpResponses } from '@shared/httpResponses'
import express, { Express } from 'express'

export const midiffy = (app: Express) => {
    app.use(express.json()).use(HttpResponses)
}
