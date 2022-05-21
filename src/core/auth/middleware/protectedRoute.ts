import { NextFunction, Response } from 'express'
import { _ImyRequest } from '../../../utility/interfaces'
import AppError from '../../errorHandling/AppError'

export default (req: _ImyRequest, res: Response, next: NextFunction) => {
    if(req.organisation?._id){
        next()
    }else{
        throw new AppError('Organisation is invalid', 401)
    }
}
