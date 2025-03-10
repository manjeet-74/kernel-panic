import { createUserSchema, loginUserSchema, getUserByIdSchema } from "./user.schema";
import { createQuestionSchema, getQuestionByIdSchema } from "./question.schema";
import { submitAnswerRequestSchema, answerSchema, getQuestionStatusByUserIdSchema } from "./questionStatus.schema";

export {
    createUserSchema,
    loginUserSchema,
    getUserByIdSchema,
    createQuestionSchema,
    getQuestionByIdSchema,
    submitAnswerRequestSchema,
    answerSchema,
    getQuestionStatusByUserIdSchema,
};
